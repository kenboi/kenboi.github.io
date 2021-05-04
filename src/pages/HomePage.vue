<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            class="new-qweet"
            bottom-slots
            v-model="newQweetContent"
            placeholder="What's happening?"
            counter
            maxlength="280"
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </template>

          </q-input>
        </div>
        <div class="col-shrink">
          <q-btn
            @click="addNewQweet"
            unelevated
            rounded
            class="q-md-lg"
            color="primary"
            label="Qweet"
            no-caps
            :disable="!newQweetContent"
          />
        </div>

      </div>
      <q-separator
        class="divider"
        size="10px"
        color="grey-2"
      />

      <q-list>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow "
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="qweet in qweets"
            :key="qweet.id"
            class="q-py-md qweet"
          >
            <q-item-section
              avatar
              top
            >
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Kendrick Kilat</strong>
                <span class="text-grey-7"> @kendrickkilat
                  <br class="lt-sm">&bull; {{ relativeDate(qweet.date) }}
                  <!-- "lt-md" is a breakpoint that only displays if the screen is less than the medium size -->
                </span>
              </q-item-label>
              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
              </q-item-label>
              <div class="row justify-between q-mt-sm qweet-icons">
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="far fa-comment"
                />
                <q-btn
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fas fa-retweet"
                />
                <q-btn
                  @click="toggleLiked(qweet)"
                  flat
                  round
                  size="sm"
                  :color="qweet.liked ? 'pink' : 'grey'"
                  :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                />
                <q-btn
                  @click="deleteQweet(qweet)"
                  flat
                  round
                  size="sm"
                  color="grey"
                  icon="fas fa-trash"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>

      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
/* eslint-disable no-multiple-empty-lines */
import { defineComponent } from 'vue'
import { formatDistance } from 'date-fns'
import db from 'src/boot/firebase'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      newQweetContent: '',
      qweets: [
        // {
        //   id: 'ID1',
        //   content: 'asdasdas Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a nulla porro soluta facilis, fugiat temporibus sapiente atque iusto minus modi tempora laudantium voluptatibus autem. Laborum fuga illum commodi omnis.',
        //   date: 1611653238221,
        //   liked: false
        // },
        // {
        //   id: 'ID2',
        //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a nulla porro soluta facilis, fugiat temporibus sapiente atque iusto minus modi tempora laudantium voluptatibus autem. Laborum fuga illum commodi omnis.',
        //   date: 1611653252444,
        //   liked: true
        // }
      ]
    }
  },
  methods: {
    relativeDate (value) {
      return formatDistance(value, new Date())
    },
    addNewQweet () {
      console.log('Qweet Added')
      const newQweet = {
        content: this.newQweetContent,
        date: Date.now(),
        liked: false
      }
      console.log(newQweet)
      // this.qweets.unshift(newQweet)
      db.collection('Qweets').add(newQweet)
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.newQweetContent = ''
    },
    deleteQweet (qweet) {
      // this.qweets.splice(index, 1)
      db.collection('Qweets').doc(qweet.id).delete().then(function () {
        console.log('Document succesfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document', error)
      })
    },
    toggleLiked (qweet) {
      console.log('toggledQweet')
      console.log(qweet)

      db.collection('Qweets').doc(qweet.id).update({
        liked: !qweet.liked
      })
        .then(function () {
          console.log('Document succesfully updated!')
        }).catch(function (error) {
          console.error('Error updating document', error)
        })
    }
  },
  mounted () {
    db.collection('Qweets').orderBy('date').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const qweetChange = change.doc.data()
        qweetChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New qweet: ', qweetChange)
          this.qweets.unshift(qweetChange)
        }
        if (change.type === 'modified') {
          console.log('Modified qweet: ', qweetChange)
          const index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
          Object.assign(this.qweets[index], qweetChange)
        }
        if (change.type === 'removed') {
          console.log('Removed qweet: ', qweetChange)
          const index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
          this.qweets.splice(index, 1)
        }
      })
    })
  }
})
</script>
<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
</style>
