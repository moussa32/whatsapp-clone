(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{59:function(e,a,t){e.exports=t(85)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=(t(64),t(10)),s=(t(65),t(99)),m=t(97),i=t(49),u=t.n(i),d=t(50),p=t.n(d),h=t(35),E=t.n(h),f=t(36),v=t.n(f),b=(t(66),t(26)),g=t.n(b),_=g.a.initializeApp({apiKey:"AIzaSyC7DJyEc6rPW4ZxKE8UV80pfCBMDzp1LzE",authDomain:"whatsapp-clone-cc25c.firebaseapp.com",databaseURL:"https://whatsapp-clone-cc25c.firebaseio.com",projectId:"whatsapp-clone-cc25c",storageBucket:"whatsapp-clone-cc25c.appspot.com",messagingSenderId:"553373298050",appId:"1:553373298050:web:2c0db17a57a449c400b39b",measurementId:"G-T82F7YN2FP"}).firestore(),j=g.a.auth(),O=new g.a.auth.GoogleAuthProvider,N=_,S=t(27);var w=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,m=Object(n.useState)(""),i=Object(o.a)(m,2),u=i[0],d=i[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){t&&N.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),l?c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&N.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new chat")):c.a.createElement(S.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",{className:""},r),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))},y=(t(81),Object(n.createContext)()),C=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},r)},I=function(){return Object(n.useContext)(y)};var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=I(),i=Object(o.a)(l,2),d=i[0].user;return i[1],Object(n.useEffect)((function(){var e=N.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===d||void 0===d?void 0:d.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(m.a,null,c.a.createElement(u.a,null)),c.a.createElement(m.a,null,c.a.createElement(p.a,null)),c.a.createElement(m.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{placeholder:"Search or start new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(w,{addNewChat:!0}),t.map((function(e){return c.a.createElement(w,{key:e.id,id:e.id,name:e.data.name})}))))},x=(t(83),t(51)),D=t.n(x),A=t(52),M=t.n(A),P=t(53),R=t.n(P),T=t(4);var U=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],i=r[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],h=d[1],f=Object(T.f)().roomId,b=Object(n.useState)(""),_=Object(o.a)(b,2),j=_[0],O=_[1],S=Object(n.useState)([]),w=Object(o.a)(S,2),y=w[0],C=w[1],k=I(),x=Object(o.a)(k,2),A=x[0].user;return x[1],Object(n.useEffect)((function(){f&&(N.collection("rooms").doc(f).onSnapshot((function(e){return O(e.data().name)})),N.collection("rooms").doc(f).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return C(e.docs.map((function(e){return e.data()})))})))}),[f]),Object(n.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[f]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(p,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,j),c.a.createElement("p",null,"Last seen at "," ",new Date(null===(e=y[y.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(m.a,null,c.a.createElement(v.a,null)),c.a.createElement(m.a,null,c.a.createElement(D.a,null)),c.a.createElement(m.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"chat__body"},y.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name===A.displayName&&"chat__reciever")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(M.a,null),c.a.createElement("form",{action:""},c.a.createElement("input",{value:l,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),i(""),N.collection("rooms").doc(f).collection("messages").add({message:l,name:A.displayName,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),console.log("You typed >>>",l)},type:"submit"},"Send a message")),c.a.createElement(R.a,null)))},B=t(54),L=t(98),z=(t(84),t(40)),W="SET_USER",F=function(e,a){switch(console.log(a),a.type){case W:return Object(z.a)(Object(z.a)({},e),{},{user:a.user});default:return e}};var G=function(){var e=I(),a=Object(o.a)(e,2);Object(B.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",alt:"whatsapp clone"}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Login to whatsapp")),c.a.createElement(L.a,{onClick:function(){j.signInWithPopup(O).then((function(e){t({type:W,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In with Google")))};var J=function(){var e=I(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__body"},t?c.a.createElement(S.a,null,c.a.createElement(k,null),c.a.createElement(T.c,null,c.a.createElement(T.a,{path:"/rooms/:roomId",component:U}))):c.a.createElement(G,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,{initialState:{user:null},reducer:F},c.a.createElement(J,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.0547f3c8.chunk.js.map