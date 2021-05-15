(this["webpackJsonpdiscord-fronend"]=this["webpackJsonpdiscord-fronend"]||[]).push([[0],{116:function(e,a,n){},117:function(e,a,n){},118:function(e,a,n){},119:function(e,a,n){},120:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(19),r=n.n(l),s=(n(80),n(81),n(29)),i=(n(82),n(33)),o=n.n(i),m=n(56),u=n.n(m),d=n(12),f=n(22),h=Object(f.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,a){e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),p=h.actions.setChannelInfo,E=function(e){return e.app.channelId},b=function(e){return e.app.channelName},g=h.reducer,v=(n(87),function(e){var a=e.id,n=e.channelName,t=Object(d.b)();return c.a.createElement("div",{className:"sidebarChannel",onClick:function(){return t(p({channelId:a,channelName:n}))}},c.a.createElement("h4",null,c.a.createElement("span",{className:"sidebarChannel__hash"},"#"),n))}),_=n(57),N=n.n(_),w=n(58),j=n.n(w),I=n(59),O=n.n(I),S=n(134),C=n(60),y=n.n(C),k=n(61),z=n.n(k),D=n(62),B=n.n(D),H=Object(f.b)({name:"user",initialState:{user:null},reducers:{login:function(e,a){e.user=a.payload},logout:function(e){e.user=null}}}),L=H.actions,x=L.login,A=L.logout,M=function(e){return e.user.user},T=H.reducer,W=n(35),P=n.n(W),R=(P.a.initializeApp({apiKey:"AIzaSyC6-lxBLFXlpydwf8LTq7vrR1Y6wnWhNQ8",authDomain:"discord-clone-mern-9fa37.firebaseapp.com",projectId:"discord-clone-mern-9fa37",storageBucket:"discord-clone-mern-9fa37.appspot.com",messagingSenderId:"794075916518",appId:"1:794075916518:web:4ef13e2e0fea502645f327"}).firestore(),P.a.auth()),Y=new P.a.auth.GoogleAuthProvider,F=n(52),J=n.n(F).a.create({baseURL:"https://mern-discord-clone.herokuapp.com"}),U=n(32),q=n.n(U),G=new q.a("3175a36fafed187ecf0f",{cluster:"ap2"}),K=function(){var e=Object(d.c)(M),a=Object(t.useState)([]),n=Object(s.a)(a,2),l=n[0],r=n[1],i=function(){J.get("/get/channelList").then((function(e){r(e.data)}))};Object(t.useEffect)((function(){i(),G.subscribe("channels").bind("newChannel",(function(e){i()}))}),[]);return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__top"},c.a.createElement("h3",null,"Your Channels"),c.a.createElement(o.a,null)),c.a.createElement("div",{className:"sidebar__channels"},c.a.createElement("div",{className:"sidebar__channelsHeader"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(o.a,null),c.a.createElement("h4",null,"Text Channels")),c.a.createElement(u.a,{onClick:function(e){e.preventDefault();var a=prompt("Enter a new channel name");a&&J.post("/new/channel",{channelName:a})},className:"sidebar__addChannel"})),c.a.createElement("div",{className:"sidebar__channelsList"},l.map((function(e){return c.a.createElement(v,{key:e.id,id:e.id,channelName:e.name})})))),c.a.createElement("div",{className:"sidebar__voice"},c.a.createElement(N.a,{className:"sidebar__voiceIcons",fontSize:"large"}),c.a.createElement("div",{className:"sidebar__voiceInfo"},c.a.createElement("h3",null,"Voice Connected"),c.a.createElement("p",null,"Stream")),c.a.createElement("div",{className:"sidebar__voiceIcons"},c.a.createElement(j.a,null),c.a.createElement(O.a,null))),c.a.createElement("div",{className:"sidebar__profile"},c.a.createElement(S.a,{src:e.photo,onClick:function(){return R.signOut()}}),c.a.createElement("div",{className:"sidebar__profileInfo"},c.a.createElement("h3",null,e.displayName),c.a.createElement("p",null,"#",e.uid.substring(0,5))),c.a.createElement("div",{className:"sidebar__profileIcons"},c.a.createElement(y.a,null),c.a.createElement(z.a,null),c.a.createElement(B.a,null))))},Q=(n(116),n(117),n(63)),V=n.n(Q),X=n(64),$=n.n(X),Z=n(65),ee=n.n(Z),ae=n(66),ne=n.n(ae),te=n(67),ce=n.n(te),le=n(68),re=n.n(le),se=function(e){var a=e.channelName;return c.a.createElement("div",{className:"chatHeader"},c.a.createElement("div",{className:"chatHeader__left"},c.a.createElement("h3",null,c.a.createElement("span",{className:"chatHeader__hash"},"#"),a)),c.a.createElement("div",{className:"chatHeader__right"},c.a.createElement(V.a,null),c.a.createElement($.a,null),c.a.createElement(ee.a,null),c.a.createElement("div",{className:"chatHeader__search"},c.a.createElement("input",{type:"text",placeholder:"Search"}),c.a.createElement(ne.a,null)),c.a.createElement(ce.a,null),c.a.createElement(re.a,null)))},ie=n(69),oe=n.n(ie),me=n(70),ue=n.n(me),de=n(71),fe=n.n(de),he=n(72),pe=n.n(he),Ee=(n(118),function(e){var a=e.timestamp,n=e.user,t=e.message;return c.a.createElement("div",{className:"message"},c.a.createElement(S.a,{src:n.photo}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n.displayName,c.a.createElement("span",{className:"message__timestamp"},new Date(parseInt(a)).toDateString())),c.a.createElement("p",null,t)))}),be=new q.a("3175a36fafed187ecf0f",{cluster:"ap2"}),ge=function(){var e=Object(d.c)(M),a=Object(d.c)(E),n=Object(d.c)(b),l=Object(t.useState)(""),r=Object(s.a)(l,2),i=r[0],o=r[1],m=Object(t.useState)([]),u=Object(s.a)(m,2),f=u[0],h=u[1],p=function(e){e&&J.get("/get/conversation?id=".concat(e)).then((function(e){h(e.data[0].conversation)}))};Object(t.useEffect)((function(){p(a),be.subscribe("conversation").bind("newMessage",(function(e){p(a)}))}),[a]);return c.a.createElement("div",{className:"chat"},c.a.createElement(se,{channelName:n}),c.a.createElement("div",{className:"chat__messages"},f.map((function(e){console.log(e)})),f.map((function(e){return c.a.createElement(Ee,{message:e.message,timestamp:e.timestamp,user:e.user})}))),c.a.createElement("div",{className:"chat__input"},c.a.createElement(oe.a,{fontSize:"large"}),c.a.createElement("form",null,c.a.createElement("input",{type:"text",disabled:!a,value:i,onChange:function(e){return o(e.target.value)},placeholder:"Message #".concat(n)}),c.a.createElement("button",{className:"chat__inputButton",onClick:function(n){n.preventDefault(),J.post("/new/message?id=".concat(a),{message:i,timestamp:Date.now(),user:e}),o("")},disabled:!a,type:"submit"},"Send Message")),c.a.createElement("div",{className:"chat__inputIcon"},c.a.createElement(ue.a,{fontSize:"large"}),c.a.createElement(fe.a,{fontSize:"large"}),c.a.createElement(pe.a,{fontSize:"large"}))))},ve=n(133),_e=(n(119),function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://www.androidheadlines.com/wp-content/uploads/2020/06/Discord-Branding-Your-Place-To-Talk.jpg",alt:"discord logo"})),c.a.createElement(ve.a,{onClick:function(){R.signInWithPopup(Y).catch((function(e){return alert(e.message)}))}},"Sign In"))});var Ne=function(){var e=Object(d.b)(),a=Object(d.c)(M);return Object(t.useEffect)((function(){R.onAuthStateChanged((function(a){console.log(a),e(a?x({uid:a.uid,photo:a.photoURL,email:a.email,displayName:a.displayName}):A())}))}),[e]),console.log(a),c.a.createElement("div",{className:"app"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(K,null),c.a.createElement(ge,null)):c.a.createElement(_e,null))},we=Object(f.a)({reducer:{user:T,app:g}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:we},c.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,a,n){e.exports=n(120)},80:function(e,a,n){},81:function(e,a,n){},82:function(e,a,n){},87:function(e,a,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.7aee3fff.chunk.js.map