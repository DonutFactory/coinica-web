(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[40],{1157:function(t,e,n){"use strict";n.r(e);var a=n(35),c=n.n(a),i=n(59),r=n(20),s=n(0),o=n(28),u=n(111),b=n(1183),f=n(430),l=n(118),p=n(140),j=n(18),_=n(52),m=n(1);e.default=Object(o.b)((function(t){return{platform:t.platform}}),(function(t){return{dispatch:t}}))((function(t){var e=t.platform,n=t.dispatch,a=(t.showModal,t.setShow),o=e.account,O=Object(s.useState)(!1),d=Object(r.a)(O,2),g=d[0],h=d[1],v=Object(s.useState)(""),x=Object(r.a)(v,2),w=x[0],y=x[1],k=Object(s.useState)(void 0),S=Object(r.a)(k,2),L=S[0],A=S[1];Object(s.useEffect)((function(){o&&A(o.email)}),[o]);return Object(m.jsxs)("div",{className:"d-flex align-items-center h-100",children:[Object(m.jsx)(b.a,{type:"email",variant:"outlined",label:L||"",style:{width:"400px",background:"#0E131F",borderRadius:"5px"},InputLabelProps:{style:{color:"#427AAD"}},onChange:function(t){var e=t.target.value;y(e)}}),Object(m.jsx)(f.a,{color:"primary",variant:"contained",onClick:function(){return function(){if(o)if(""===w)u.b.warning(Object(_.a)("account_settings.setting_screen.user_information.email_input.toast.warning"),{position:"top-center"});else{if(""!==L){if(w===L)return u.b.error(Object(_.a)("account_settings.setting_screen.user_information.email_input.toast.error"));h(!0),Object(l.a)(w).then(function(){var t=Object(i.a)(c.a.mark((function t(e){var i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.b.success(Object(_.a)("account_settings.setting_screen.user_information.email_input.toast.success"),{position:"top-center"}),t.next=3,Object(p.k)(o.id);case 3:(i=t.sent)&&(n(Object(j.h)(i.data)),A(i.data.email)),a(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){u.b.error(Object(_.a)("account_settings.setting_screen.user_information.update_email.toast.error"))})).finally((function(){h(!1)}))}else Object(l.a)(w);a(!0)}else u.b.error(Object(_.a)("account_settings.setting_screen.user_information.no_account.toast.error"))}()},style:{height:"55px",marginLeft:"15px"},children:g?"Loading...":Object(_.a)("account_settings.setting_screen.user_information.button.submit")})]})}))}}]);