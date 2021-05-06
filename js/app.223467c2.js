(()=>{var e={2297:(e,t,o)=>{"use strict";o(5363),o(71);var n=o(8880),r=o(7651);const a={config:{}};var i=o(3673);function s(e,t,o,n,r,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var c=o(9582),l=o(2607);const d=(0,i.aZ)({name:"App",setup(){const e=(0,c.tv)(),t=(0,c.yj)();(0,i.wF)((()=>{l.Z.auth().onAuthStateChanged((o=>{console.log("onBeforeMount: ",o),o?"/login"===t.path?e.replace("/"):"/register"===t.path&&e.replace("/login"):e.replace("/login")}))}))}});d.render=s;const u=d;var f=o(4018),p=o(7083);const m=[{path:"/",component:()=>Promise.all([o.e(736),o.e(299)]).then(o.bind(o,7299)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(896)]).then(o.bind(o,1896)),name:"Home"},{path:"/about",component:()=>Promise.all([o.e(736),o.e(333)]).then(o.bind(o,3333)),name:"About"}]},{path:"/login",component:()=>Promise.all([o.e(736),o.e(361)]).then(o.bind(o,5361)),name:"Login"},{path:"/register",component:()=>Promise.all([o.e(736),o.e(293)]).then(o.bind(o,1293)),name:"Register"},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],h=m,g=(0,p.BC)((function(){const e=c.r5,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t}));async function w(e){const t="function"===typeof f.default?await(0,f.default)({}):f.default,{storeKey:n}=await Promise.resolve().then(o.bind(o,4018)),i="function"===typeof g?await g({store:t}):g;t.$router=i;const s=e(u);return s.use(r.Z,a),{app:s,store:t,storeKey:n,router:i}}const b="";async function v({app:e,router:t,store:o,storeKey:n},r){let a=!1;const i=e=>{a=!0;const o=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=o},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===a&&l<r.length;l++)try{await r[l]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:s,publicPath:b})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(o,n),e.mount("#q-app"))}w(n.ri).then((e=>Promise.all([Promise.resolve().then(o.bind(o,2490))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));v(e,o)}))))},2490:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});var n=o(5720);o(1442);const r={apiKey:"AIzaSyCacQhGq-ytqBcCVtRW5VbLWoX1HWd3zGg",authDomain:"qwitter-4ad9b.firebaseapp.com",projectId:"qwitter-4ad9b",storageBucket:"qwitter-4ad9b.appspot.com",messagingSenderId:"440590980512",appId:"1:440590980512:web:22a199b3d76b6e3fc140c5"};n.Z.initializeApp(r);const a=n.Z.firestore(),i=a},4018:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>j});var n={};o.r(n),o.d(n,{REMOVE_LISTENER_AND_RESET_DATA:()=>h,SET_QWEETS:()=>u,removeQweet:()=>p,setListener:()=>m,updateQweet:()=>f});var r={};o.r(r),o.d(r,{addNewQweet:()=>w,deleteQweet:()=>b,setSnapshots:()=>y,toggleLiked:()=>v});var a={};o.r(a),o.d(a,{SET_USER:()=>A});var i={};o.r(i),o.d(i,{addNewUser:()=>k,getUser:()=>O,setUser:()=>C});var s=o(7083),c=o(5250);function l(){return{qweets:[],unsubscribe:null}}var d=o(3666);function u(e,t){e.qweets.unshift(t)}function f(e,{index:t,qweetChange:o}){console.log("mutation entereD:",e.qweets[t],t),Object.assign(e.qweets[t],o)}function p(e,t){e.qweets.splice(t,1)}function m(e,t){e.unsubscribe=t}function h(e){console.log(e.unsubscribe),e.qweets=[],e.unsubscribe(),e.unsubscribe=null}var g=o(2490);function w({rootState:e},t){const o={content:t,date:Date.now(),liked:!1,author:e.users.uid,username:e.users.username,name:e.users.name};console.log(o),g.default.collection("Qweets").add(o).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))}function b(e,t){console.log(e),g.default.collection("Qweets").doc(t.id).delete().then((function(){console.log("Document succesfully deleted!")})).catch((function(e){console.error("Error removing document",e)}))}function v(e,t){console.log(e),console.log("qweet.id",t),g.default.collection("Qweets").doc(t.id).update({liked:!t.liked}).then((function(){console.log("Document succesfully updated!")})).catch((function(e){console.error("Error updating document",e)}))}function y({state:e,commit:t}){console.log("setSnapshots entered",e.qweets);var o=g.default.collection("Qweets").orderBy("date").onSnapshot((o=>{o.docChanges().forEach((o=>{const n=o.doc.data();if(n.id=o.doc.id,console.log("snapshot entered"),"added"===o.type&&(console.log("New qweet: ",n),t("SET_QWEETS",n)),"modified"===o.type){console.log("Modified qweet: ",n),console.log("state.qweets: ",e.qweets);const o=e.qweets.findIndex((e=>e.id===n.id));console.log("indeX:",o),t("updateQweet",{index:o,qweetChange:n})}if("removed"===o.type){console.log("Removed qweet: ",n);const o=e.qweets.findIndex((e=>e.id===n.id));t("removeQweet",o)}}))}));t("setListener",o)}const E={namespaced:!0,state:l,getters:d,mutations:n,actions:r};function q(){return{displayName:"",email:"",emailVerified:!1,photoURL:"",isAnonymous:"",uid:null,providerData:null}}var S=o(531);function A(e,t){e.username=t.username,e.email=t.email,e.emailVerified=t.emailVerified,e.photoURL=t.photoURL,e.isAnonymous=t.isAnonymous,e.uid=t.auth_uid,e.name=t.name,e.providerData=t.providerData}function C({commit:e},t){e("SET_USER",t)}async function k(e,t){console.log("User Added:",e),console.log("user to be added: ",t),await g.default.collection("Users").add(t).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))}async function O(e,t){const o=await g.default.collection("Users").where("auth_uid","==",t).get();if(console.log("uid: ",t),console.log("query",o),!o.empty){const e=o.docs[0],t=e.data();return t}console.error("Data not found")}const P={namespaced:!0,state:q,getters:S,mutations:a,actions:i},j=(0,s.h)((function(){const e=(0,c.MT)({modules:{qweets:E,users:P},strict:!1});return e}))},3666:()=>{},531:()=>{}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,r,a]=e[l],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));s&&(e.splice(l--,1),t=r())}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{193:"cc6f225a",293:"74eb670c",299:"e9881872",333:"cd43447b",361:"3c649faa",896:"81540873"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{299:"848900dd",736:"63d4ba51",896:"6165b856"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="qwitter:";o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var f=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=a=>{if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=n=>new Promise(((r,a)=>{var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)})),r={143:0};o.f.miniCss=(e,t)=>{var o={299:1,896:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,c=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,c]=n,l=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);for(c&&c(o),t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;o.O()},n=self["webpackChunkqwitter"]=self["webpackChunkqwitter"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(2297)));n=o.O(n)})();