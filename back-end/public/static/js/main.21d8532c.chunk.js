(this.webpackJsonpQuizzy=this.webpackJsonpQuizzy||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo-big-fill.1d4accad.png"},49:function(e,t,a){e.exports=a.p+"static/media/logo-small-no-label.e03c836f.png"},57:function(e,t,a){e.exports=a(89)},62:function(e,t,a){},63:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=(a(62),a(6)),l=(a(63),a(15)),u=a(7),i=a(55),m=Object(n.createContext)();function p(){return Object(n.useContext)(m)}var d=function(e){var t=e.component,a=Object(i.a)(e,["component"]),n=p().authTokens;return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/login",state:{referer:e.location}}})}}))},b=a(9),f=a.n(b),h=a(16),E=a(20),v=a.n(E),g=a(21),j="http://localhost:9000",O=a(26);var k=function(e){var t=p().authTokens,a=Object(n.useState)(-1),c=Object(s.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(-1),i=Object(s.a)(u,2),m=i[0],d=i[1],b=Object(n.useState)(null),E=Object(s.a)(b,2),k=E[0],N=E[1],w=Object(n.useState)([]),y=Object(s.a)(w,2),x=y[0],C=y[1],S=Object(n.useState)(!1),z=Object(s.a)(S,2),q=z[0],I=z[1],B=Object(n.useState)(!1),L=Object(s.a)(B,2),G=L[0],T=L[1],V=Object(n.useState)(0),A=Object(s.a)(V,2),J=A[0],M=A[1];Object(n.useEffect)((function(){P()}),[]);var P=function(){var e=Object(h.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,v.a.get(j+"/quizzes",{headers:{Authorization:"JWT ".concat(t)}});case 4:a=e.sent,console.log({response:a}),U(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(e){if(e&&e.questions&&e.questions.length>0){N(e);var t=Array(e.questions.length);C(t),l(0),d(e.questions.length-1),M(0)}},Q=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o!==m){e.next=2;break}return e.abrupt("return");case 2:l((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==o){e.next=2;break}return e.abrupt("return");case 2:l((function(e){return e-1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(h.a)(f.a.mark((function e(){var a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),a={quiz_id:k._id,answers:x},e.next=5,v.a.post(j+"/quizzes/verify",a,{headers:{Authorization:"JWT ".concat(t)}});case 5:n=e.sent,I(!1),r=n.data.score,M(r),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),I(!1),c=e.t0.response?e.t0.response.data:"Un probl\xe8me est survenu, veuillez r\xe9essayez plus tard",T(c);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return 0===J?r.a.createElement(g.a,{className:"main-card card-huge font-normal"},k&&k.questions.map((function(e,t){return r.a.createElement("div",{key:t,className:"quiz-page ".concat(t!==o?"display-none":""," ")},r.a.createElement("p",{key:t,className:"quiz-question"},e.question),e.answers.map((function(e,a){return r.a.createElement(O.a,{onClick:function(){return function(e,t){x[e]=t,C(x),Q()}(t,a)},className:"answer-button",variant:x[t]===a?"secondary":"dark",key:a},e)})))})),r.a.createElement("p",null,o+1+" / "+(m+1)),r.a.createElement("div",{className:"quiz-footer"},r.a.createElement(O.a,{variant:"secondary",onClick:W,disabled:0===o},"<"),r.a.createElement(O.a,{variant:"secondary",onClick:Q,disabled:o===m},">")),r.a.createElement("div",null,r.a.createElement(O.a,{onClick:R,disabled:x.filter((function(e){return e})).length<x.length-1||q},"Envoyer"),G&&r.a.createElement("p",{className:"error-text"},G))):0!==J?r.a.createElement(g.a,{className:"main-card card-huge font-normal"},r.a.createElement("p",null,"Score : ".concat(J," / ").concat(3*k.questions.length," pts!")),r.a.createElement(O.a,{onClick:function(){U(k)}},"Rejouer")):void 0},N=a(5),w=a(28),y=a.n(w);var x=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=(a[0],a[1]),o=Object(n.useState)(!1),i=Object(s.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)(""),E=Object(s.a)(b,2),k=E[0],w=E[1],x=Object(n.useState)(""),C=Object(s.a)(x,2),S=C[0],z=C[1],q=Object(n.useState)(!1),I=Object(s.a)(q,2),B=I[0],L=I[1],G=p(),T=G.setAuthTokens,V=G.authTokens,A=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,v.a.post("".concat(j,"/users/login"),{username:k,password:S});case 4:t=e.sent,T(t.data.token),L(!1),c(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a=e.t0.response?e.t0.response.data:"Un probl\xe8me est survenu, veuillez r\xe9essayez plus tard",d(a);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return V?r.a.createElement(u.a,{to:"/"}):r.a.createElement(g.a,{className:"main-card card-small font-normal"},r.a.createElement("img",{alt:"logo",className:"logo-img",width:"142",height:"128",src:y.a}),r.a.createElement(N.a,{className:"form"},r.a.createElement(N.a.Group,{controlId:"formBasicUsername"},r.a.createElement(N.a.Label,null,"Nom d'utilisateur"),r.a.createElement(N.a.Control,{placeholder:"Votre nom d'utilisateur",onChange:function(e){w(e.target.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicPassword"},r.a.createElement(N.a.Label,null,"Mot de passe"),r.a.createElement(N.a.Control,{type:"password",placeholder:"Mot de passe",onChange:function(e){z(e.target.value)}})),r.a.createElement(O.a,{disabled:B,onClick:A},"Se connecter")),r.a.createElement(l.b,{className:"link",to:"/signup"},"Vous n'avez pas de compte ?"),m&&r.a.createElement("p",{className:"error-text"},m))};var C=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],p=i[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),E=b[0],k=b[1],w=Object(n.useState)(""),x=Object(s.a)(w,2),C=x[0],S=x[1],z=Object(n.useState)(""),q=Object(s.a)(z,2),I=q[0],B=q[1],L=Object(n.useState)(!1),G=Object(s.a)(L,2),T=G[0],V=G[1],A=Object(n.useState)(!1),J=Object(s.a)(A,2),M=J[0],P=J[1],U=Object(n.useState)(!1),Q=Object(s.a)(U,2),W=Q[0],R=Q[1],_=Object(n.useState)(!1),D=Object(s.a)(_,2),F=D[0],$=D[1],H=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(n=K())){e.next=4;break}return e.abrupt("return",P(n));case 4:return e.prev=4,R(!0),e.next=8,v.a.post("".concat(j,"/users/register"),{username:E,firstname:a,lastname:m,password:C});case 8:R(!1),$(!0),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),R(!1),r=e.t0.response?e.t0.response.data:"Une erreur est survenue, veuillez r\xe9essayez plus tard.",P(r);case 17:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){return a&&m&&E&&C&&I?C!==I?"Les mots de passes ne correspondent pas.":T?void 0:"Vous n'avez pas coch\xe9 la case la plus importante... Quand m\xeame.":"Vous n'avez pas rempli tous les champs"};return F?r.a.createElement(u.a,{to:"/login"}):r.a.createElement(g.a,{className:"main-card card-large font-normal"},r.a.createElement("img",{alt:"logo",className:"logo-img",width:"142",height:"128",src:y.a}),r.a.createElement(N.a,{className:"form",onSubmit:H},r.a.createElement(N.a.Group,{controlId:"formBasicName"},r.a.createElement(N.a.Label,null,"Nom"),r.a.createElement(N.a.Control,{placeholder:"Votre Nom",onChange:function(e){p(e.target.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicFirstName"},r.a.createElement(N.a.Label,null,"Pr\xe9nom"),r.a.createElement(N.a.Control,{placeholder:"Votre Pr\xe9nom",onChange:function(e){c(e.target.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicUsername"},r.a.createElement(N.a.Label,null,"Nom d'utilisateur"),r.a.createElement(N.a.Control,{placeholder:"Votre nom d'utilisateur",onChange:function(e){k(e.target.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicPassword"},r.a.createElement(N.a.Label,null,"Mot de passe"),r.a.createElement(N.a.Control,{type:"password",placeholder:"Mot de passe",onChange:function(e){S(e.target.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicConfirm"},r.a.createElement(N.a.Label,null,"Confirmer le mot de passe"),r.a.createElement(N.a.Control,{type:"password",placeholder:"Confirmer le mot de passe",onChange:function(e){B(e.target.value)}})),r.a.createElement(N.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(N.a.Check,{type:"checkbox",label:"J'ai lu les conditions qui n'existent pas.",onChange:function(e){console.log(e.target.checked),V(e.target.checked)}})),r.a.createElement(O.a,{className:"button",disabled:W,variant:"primary",type:"submit"},"Submit")),r.a.createElement(l.b,{className:"link",to:"/login"},"Vous avez d\xe9j\xe0 un compte ?"),M&&r.a.createElement("p",{className:"error-text"},M))},S=a(36),z=a(49),q=a.n(z),I=a(91);var B=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(localStorage.getItem("tokens"))}),[]),r.a.createElement(l.a,null,r.a.createElement(m.Provider,{value:{authTokens:a,setAuthTokens:function(e){localStorage.setItem("tokens",e),c(e)}}},r.a.createElement("section",{className:"App-background"},r.a.createElement(S.a,{bg:"dark",className:"navbar",variant:"dark"},r.a.createElement("section",{className:"brand"},r.a.createElement(S.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:q.a,width:"52",height:"48",className:"d-inline-block align-top"})," "),r.a.createElement("span",{className:"appName"},"Quizzy")),r.a.createElement("section",{className:"nav-buttons"},a?r.a.createElement(I.a,null,r.a.createElement(I.a.Item,null,r.a.createElement(l.b,{to:"/login",onClick:function(){c(void 0)},className:"nav-link"},"Logout"))):r.a.createElement(I.a,null,r.a.createElement(I.a.Item,null,r.a.createElement(l.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement(I.a.Item,null,r.a.createElement(l.b,{to:"/signup",className:"nav-link"},"Register"))))),r.a.createElement(u.d,null,r.a.createElement(d,{exact:!0,path:"/",component:k}),r.a.createElement(u.b,{path:"/login",component:x}),r.a.createElement(u.b,{path:"/signup",component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(88);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.21d8532c.chunk.js.map