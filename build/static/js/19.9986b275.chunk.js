(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[19],{1025:function(t,e,n){"use strict";n.r(e);var a=n(92),r=n.n(a),i=n(136),c=n(14),s=n(0),o=n(47),u=n(509),f=n(1032),l=n(463),p=n(598),b=n(499),d=n(28),j=n(19),m=n(1);e.default=Object(o.b)((function(t){return{platform:t.platform}}),(function(t){return{dispatch:t}}))((function(t){var e=t.platform,n=t.dispatch,a=(t.showModal,t.setShow),o=e.account,O=Object(s.useState)(!1),_=Object(c.a)(O,2),g=_[0],h=_[1],v=Object(s.useState)(""),w=Object(c.a)(v,2),x=w[0],y=w[1],k=Object(s.useState)(void 0),S=Object(c.a)(k,2),L=S[0],A=S[1];Object(s.useEffect)((function(){o&&A(o.email)}),[o]);return Object(m.jsxs)("div",{className:"d-flex align-items-center h-100",children:[Object(m.jsx)(f.a,{type:"email",variant:"outlined",label:L||"",style:{width:"400px",background:"#0E131F",borderRadius:"5px"},InputLabelProps:{style:{color:"#427AAD"}},onChange:function(t){var e=t.target.value;y(e)}}),Object(m.jsx)(l.a,{color:"primary",variant:"contained",onClick:function(){return function(){if(o)if(""===x)u.a.warning(Object(j.a)("account_settings.setting_screen.user_information.email_input.toast.warning"),{position:"top-center"});else{if(""!==L){if(x===L)return u.a.error(Object(j.a)("account_settings.setting_screen.user_information.email_input.toast.error"));h(!0),Object(p.a)(x).then(function(){var t=Object(i.a)(r.a.mark((function t(e){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.a.success(Object(j.a)("account_settings.setting_screen.user_information.email_input.toast.success"),{position:"top-center"}),t.next=3,Object(b.k)(o.id);case 3:(i=t.sent)&&(n(Object(d.d)(i.data)),A(i.data.email)),a(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){u.a.error(Object(j.a)("account_settings.setting_screen.user_information.update_email.toast.error"))})).finally((function(){h(!1)}))}else Object(p.a)(x);a(!0)}else u.a.error(Object(j.a)("account_settings.setting_screen.user_information.no_account.toast.error"))}()},style:{height:"55px",marginLeft:"15px"},children:g?"Loading...":Object(j.a)("account_settings.setting_screen.user_information.button.submit")})]})}))},598:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var a=n(50),r=n(166),i=function(t){var e=Object(r.b)();return a.a.post("/donut/api/v1/user/email/add",{email:t},{headers:e})},c=function(t){return a.a.post("/donut/api/v1/user/password/reset/send",{email:t})}}}]);