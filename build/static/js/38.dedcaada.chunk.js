(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[38],{1138:function(t,e,c){"use strict";c.r(e);var o=c(35),n=c.n(o),a=c(59),r=c(19),u=c(0),s=c(26),l=c(111),i=c(69),b=c(16),j=c(118),g=c(52),d=c(233),h=c(450),O=c(138),f=c(432),p=c(392),x=c(261),_=c(438),v=c(744),k=c.n(v),m=c(1),L=function(t){var e=t.loggingOut,c=t.setLogoutModal,o=t.handleLogout;return Object(m.jsxs)(h.a,{className:"".concat(k.a.logout_check),children:[Object(m.jsx)(O.a,{variant:"h6",align:"center",children:Object(g.a)("logout.confirmation.title")}),Object(m.jsxs)(h.a,{m:3,children:[Object(m.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){o()},children:e?Object(g.a)("logout.loading.button"):Object(g.a)("logout.title")}),Object(m.jsx)(f.a,{variant:"contained",className:"".concat(k.a.cancel_button),onClick:function(){return c(!1)},children:Object(g.a)("logout.cancel.button")})]})]})};e.default=Object(s.b)((function(t){return{scatter:t.scatter,platform:t.platform}}),(function(t){return{dispatch:t}}))((function(t){var e=t.scatter,c=t.platform,o=t.dispatch,s=t.show,h=t.setLogoutModal,f=c.account,v=e.userAccount,w=Object(u.useState)(!1),y=Object(r.a)(w,2),M=y[0],N=y[1],C=Object(u.useState)(!1),E=Object(r.a)(C,2),J=(E[0],E[1]),S=Object(d.a)().formatMessage,A=function(){var t=Object(a.a)(n.a.mark((function t(){var c,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(N(!0),!f){t.next=23;break}return t.prev=2,t.next=5,Object(j.f)();case 5:if(c=t.sent,console.log("logout data",c),202!==(null===c||void 0===c?void 0:c.status)){t.next=12;break}o(Object(b.b)()),h(!1),t.next=13;break;case 12:throw new Error(S({id:"logout.msg.error"}));case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),J(!0);case 18:return t.prev=18,N(!1),t.finish(18);case 21:t.next=28;break;case 23:if(!v){t.next=28;break}if(a=null===e||void 0===e?void 0:e.scatter){t.next=27;break}return t.abrupt("return");case 27:a.logout().then((function(){N(!1),h(!1),o&&(Object(i.c)(),o(Object(i.b)()),l.b.success("Logged out successfully"))}));case 28:case"end":return t.stop()}}),t,null,[[2,15,18,21]])})));return function(){return t.apply(this,arguments)}}();return Object(m.jsx)(p.a,{open:s,onClose:function(){return h(!1)},children:Object(m.jsx)(x.a,{in:s,children:Object(m.jsxs)("div",{className:"".concat(k.a.logout_modal),children:[Object(m.jsx)(O.a,{variant:"h4",align:"center",className:"".concat(k.a.title),children:Object(g.a)("logout.title")}),Object(m.jsx)(_.a,{}),Object(m.jsx)(L,{loggingOut:M,setLogoutModal:h,handleLogout:A})]})})})}))},744:function(t,e,c){t.exports={logout_modal:"Logout_logout_modal__3UeyI",title:"Logout_title__26kTh",logout_check:"Logout_logout_check__1Luvw",cancel_button:"Logout_cancel_button__3E2DR"}}}]);