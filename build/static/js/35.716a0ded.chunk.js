(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[35],{1179:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(6),s=a(182),r=a(0),i=a(744),o=a.n(i),l=a(448),d=a(390),u=a(388),b=a(259),j=a(246),p=a(432),O=a(1168),m=a(1146),g=a(11).e.assets_url,h="".concat(g,"/imgs/coinica-logo.png"),x=a(763),_=a.n(x),f=a(52),v=a(35),w=a.n(v),S=a(59),k=a(28),N=a(764),C=a.n(N),y=a(248),M=a(138),L=a(501),T=a(420),E=a(1115),D=a(1140),I=a(396),z=a(430),F=a(8),K=a(398),W=a(26),A=a(1141),U=a(1142),P=a(23),R=a(232),q=a(18),B=a(140),J=a(118),G=a(111),H=a(1),Y=function(e){var t=e.username,a=e.password;return Object(J.e)({username:t,password:a})},Q=function(e){return Object(B.k)(e)},V=function(e){return Object(H.jsx)("span",{children:Object(f.a)("signup.msg.add.email",{span:function(t){return Object(H.jsx)("span",{className:"text-warning text-bold",onClick:function(){return e.push("/account/settings")},children:t})}})})},X=Object(F.a)((function(e){return Object(K.a)({root:{"label + &":{marginTop:e.spacing(3.5)}},input:{direction:"ltr",color:"white",borderRadius:10,position:"relative",backgroundColor:"#0E141F",fontSize:16,width:"100%",padding:"14px 12px",transition:e.transitions.create(["border-color","box-shadow"]),"&:focus":{boxShadow:"".concat(Object(W.a)(e.palette.primary.main,.25)," 0 0 0 0.2rem")}}})}))(y.a),Z=Object(k.b)((function(e){return{platform:e.platform}}),(function(e){return{dispatch:e}}))((function(e){var t=e.platform,a=(e.requestResetPassword,e.dispatch),c=e.handleSignUpModalClose,s=Object(P.g)(),i=Object(r.useState)(""),o=Object(n.a)(i,2),l=o[0],d=o[1],u=Object(r.useState)(""),b=Object(n.a)(u,2),j=b[0],p=b[1],O=Object(r.useState)(!1),m=Object(n.a)(O,2),g=m[0],h=m[1],x=Object(r.useState)(!1),_=Object(n.a)(x,2),v=_[0],k=_[1],N=Object(r.useState)(!1),y=Object(n.a)(N,2),F=y[0],K=y[1],W=Object(R.a)().formatMessage,Z=function(){var e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B.l)();case 3:t=e.sent,(n=t.data)&&a(Object(q.i)(n)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(S.a)(w.a.mark((function e(t){var n,r,i,o,d,u,b,p,O,m,g,h,x;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,k(!0),e.next=5,Y({username:l,password:j});case 5:return n=e.sent,r=n.data,i=r.id,o=r.token,Object(J.d)({CLIENT_TOKEN:o,CLIENT_ID:i}),e.next=12,Q(i);case 12:d=e.sent,Z(),d.data&&(u=d.data,b=u.username,p=u.email,O=u.is_verified,G.b.success("".concat(W({id:"signup.msg.welcome"})," ").concat(b||p,"!")),p||O||G.b.info(V(s),{autoClose:!1}),a(Object(q.h)(d.data)),a(Object(q.g)(null)),c()),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),401===(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m?void 0:m.status)&&"Unauthorized"===(null===e.t0||void 0===e.t0||null===(g=e.t0.response)||void 0===g?void 0:g.statusText)&&!1===((null===e.t0||void 0===e.t0||null===(h=e.t0.response)||void 0===h||null===(x=h.config)||void 0===x?void 0:x.url)+"").includes("account")?(a(Object(q.g)(W({id:"login.msg.invalid"}))),K(!0)):a(Object(q.g)(W({id:"login.msg.error"})));case 20:return e.prev=20,k(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(M.a,{className:"".concat(C.a.error),children:t.error}),Object(H.jsx)("form",{onSubmit:$,children:Object(H.jsxs)(L.a,{container:!0,spacing:4,children:[Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsxs)(T.a,{fullWidth:!0,children:[Object(H.jsx)(E.a,{shrink:!0,className:"".concat(C.a.label),children:Object(f.a)("login.username")}),Object(H.jsx)(X,{id:"bootstrap-input",value:l,onChange:function(e){F&&K(!1);var t=e.target.value;d(t)}})]})}),Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsxs)(T.a,{fullWidth:!0,children:[Object(H.jsx)(E.a,{shrink:!0,htmlFor:"standard-adornment-password",className:"".concat(C.a.label),children:Object(f.a)("login.password")}),Object(H.jsx)(X,{id:"standard-adornment-password",type:g?"text":"password",value:j,onChange:function(e){F&&K(!1);var t=e.target.value;p(t)},className:"".concat(C.a.password_field),endAdornment:Object(H.jsx)(D.a,{position:"end",className:"".concat(C.a.password_visibility),children:Object(H.jsx)(I.a,{"aria-label":"toggle password visibility",onClick:function(){h(!g)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:g?Object(H.jsx)(A.a,{}):Object(H.jsx)(U.a,{})})})})]})}),Object(H.jsx)(L.a,{item:!0,xs:12,className:"".concat(C.a.login_submit," center-content"),children:Object(H.jsx)(z.a,{variant:"contained",color:"primary",size:"large",type:"submit",disabled:v,children:Object(f.a)("login.button")})})]})})]})})),$=a(30),ee=a(765),te=a.n(ee),ae=a(1145),ne=a(1174),ce=a(436),se=a(1143),re=a(1144),ie=Object(F.a)((function(e){return Object(K.a)({root:{"label + &":{marginTop:e.spacing(3.5)}},input:{direction:"ltr",color:"white",borderRadius:10,position:"relative",backgroundColor:"#0E141F",fontSize:16,width:"100%",padding:"14px 12px",transition:e.transitions.create(["border-color","box-shadow"]),"&:focus":{boxShadow:"".concat(Object(W.a)(e.palette.primary.main,.25)," 0 0 0 0.2rem")}}})}))(y.a),oe=Object(k.b)((function(e){return{platform:e.platform}}),(function(e){return{dispatch:e}}))((function(e){e.setTabKey,e.platform;var t=e.dispatch,a=e.handleSignUpModalClose,s=Object(P.g)(),i=Object(r.useState)(function(){for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="",a=7;a>0;--a)t+=e[Math.floor(Math.random()*e.length)];return t}()),o=Object(n.a)(i,2),d=o[0],u=o[1],b=Object(r.useState)(""),j=Object(n.a)(b,2),p=j[0],O=j[1],m=Object(r.useState)({password:"",password2:""}),g=Object(n.a)(m,2),h=g[0],x=g[1],_=Object(r.useState)(!1),v=Object(n.a)(_,2),k=(v[0],v[1],Object(r.useState)(!1)),N=Object(n.a)(k,2),C=N[0],y=N[1],F=Object(r.useState)(!1),K=Object(n.a)(F,2),W=K[0],Y=K[1],Q=Object(r.useState)(!1),X=Object(n.a)(Q,2),Z=X[0],ee=X[1],oe=Object(r.useState)(""),le=Object(n.a)(oe,2),de=le[0],ue=le[1],be=Object(r.useState)(""),je=Object(n.a)(be,2),pe=je[0],Oe=je[1],me=Object(r.useState)(!1),ge=Object(n.a)(me,2),he=ge[0],xe=ge[1],_e=Object(R.a)().formatMessage,fe=function(){var e=Object(S.a)(w.a.mark((function e(){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B.l)();case 3:a=e.sent,n=a.data,t(Object(q.i)(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ve=function(e){var t=e.target,a=t.name,n=t.value;x(Object(c.a)(Object(c.a)({},h),{},Object($.a)({},a,n))),he&&xe(!1)},we=function(){var e=Object(S.a)(w.a.mark((function e(a){var n,c,r,i,o,l,d,u,b,j,p;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.username,c=a.password,e.prev=1,ee(!0),e.next=5,Object(J.e)({username:n,password:c});case 5:return r=e.sent,i=r.data,o=i.id,l=i.token,Object(J.d)({CLIENT_TOKEN:l,CLIENT_ID:o}),e.next=12,fe();case 12:return e.next=14,Object(B.k)(o);case 14:(d=e.sent).data&&(u=d.data,b=u.username,j=u.email,p=u.is_verified,G.b.success("".concat(_e({id:"signup.msg.welcome"})," ").concat(b||j,"!")),j||p||G.b.info(V(s),{autoClose:!1}),t(Object(q.h)(d.data)),t(Object(q.g)(null)));case 16:return e.prev=16,Y(!1),ee(!1),e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[1,,16,20]])})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(S.a)(w.a.mark((function e(t){var n,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h.password!==h.password2&&(xe(!0),1)){e.next=29;break}return e.prev=2,Y(!0),n={username:d,password:h.password},""!==p&&(n.referred_by=p),e.next=8,Object(J.g)(n);case 8:if(c=e.sent,console.log("singup data",c.data),201!==(null===c||void 0===c?void 0:c.status)){e.next=19;break}Oe(""),ue(_e({id:"signup.msg.success"})),u(""),O(""),x({password:"",password2:""}),we({username:d,password:h.password}).then((function(e){setInterval(a(),1e3)})),e.next=20;break;case 19:throw new Error(_e({id:"signup.msg.error"}));case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(2),ue(""),409===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)?Oe(_e({id:"signup.msg.username.exist"})):Oe(_e({id:"signup.msg.server.error"}));case 26:return e.prev=26,Y(!1),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[2,22,26,29]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){y(!C)},Ne=function(e){e.preventDefault()};return Object(H.jsx)("form",{onSubmit:Se,children:Object(H.jsxs)(L.a,{container:!0,spacing:4,children:[pe&&Object(H.jsx)(L.a,{item:!0,xs:12,className:"".concat(te.a.error_message),children:pe}),de&&Object(H.jsx)(L.a,{item:!0,xs:12,className:"".concat(te.a.success_message),children:de}),Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsxs)(T.a,{fullWidth:!0,children:[Object(H.jsx)(E.a,{shrink:!0,htmlFor:"username",className:"".concat(te.a.label),children:Object(f.a)("signup.username")}),Object(H.jsx)(ie,{required:!0,id:"username",value:d,onChange:function(e){var t=e.target.value;u(t),pe&&Oe(""),de&&ue("")},endAdornment:""!==d?Object(H.jsx)(D.a,{position:"end",className:"".concat(te.a.adornment_element),children:Object(H.jsx)(I.a,{"aria-label":"toggle password visibility",onClick:function(){return u("")},onMouseDown:function(){return u("")},edge:"end",children:Object(H.jsx)(se.a,{})})}):""}),Object(H.jsxs)(l.a,{display:"flex",className:"".concat(te.a.important),pt:"10px",children:[Object(H.jsx)(M.a,{variant:"caption",color:"secondary",align:"left",gutterBottom:!0,children:Object(f.a)("signup.important",{strong:function(e){return Object(H.jsx)("strong",{children:e})}})}),Object(H.jsx)(re.a,{})]})]})}),Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsxs)(T.a,{fullWidth:!0,children:[Object(H.jsx)(E.a,{shrink:!0,htmlFor:"password",className:"".concat(te.a.label),children:Object(f.a)("signup.password")}),Object(H.jsx)(ie,{name:"password",type:C?"text":"password",value:h.password,onChange:ve,id:"password",endAdornment:Object(H.jsx)(D.a,{position:"end",className:"".concat(te.a.adornment_element),children:Object(H.jsx)(I.a,{"aria-label":"toggle password visibility",onClick:ke,onMouseDown:Ne,edge:"end",children:C?Object(H.jsx)(A.a,{}):Object(H.jsx)(U.a,{})})})})]})}),Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsxs)(T.a,{fullWidth:!0,children:[Object(H.jsx)(E.a,{shrink:!0,htmlFor:"confirm-password",className:"".concat(te.a.label),children:Object(f.a)("signup.confirm.password")}),Object(H.jsx)(ie,{name:"password2",type:C?"text":"password",value:h.password2,onChange:ve,id:"confirm-password",endAdornment:Object(H.jsx)(D.a,{position:"end",className:"".concat(te.a.adornment_element),children:Object(H.jsx)(I.a,{"aria-label":"toggle password visibility",onClick:ke,onMouseDown:Ne,edge:"end",children:C?Object(H.jsx)(A.a,{}):Object(H.jsx)(U.a,{})})})})]})}),Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsxs)(T.a,{fullWidth:!0,children:[Object(H.jsx)(E.a,{shrink:!0,htmlFor:"referral-code",className:"".concat(te.a.label),children:Object(f.a)("signup.referral")}),Object(H.jsx)(ie,{id:"referral-code",name:"code",value:p,onChange:function(e){var t;return O(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}})]})}),Object(H.jsx)(L.a,{item:!0,xs:12,children:Object(H.jsx)(T.a,{className:"".concat(te.a.agreement_label),children:Object(H.jsx)(ae.a,{value:"start",control:Object(H.jsx)(ne.a,{className:"".concat(te.a.agreement)}),label:Object(f.a)("signup.agreement"),labelPlacement:"start"})})}),Object(H.jsx)(L.a,{item:!0,lg:12,children:Object(H.jsx)(ce.a,{className:"".concat(te.a.divider)})}),Object(H.jsx)(L.a,{item:!0,xs:12,className:"".concat(te.a.signup_submit," center-content"),children:Object(H.jsx)(z.a,{variant:"contained",color:"primary",size:"large",disabled:W,type:"submit",children:Z?Object(f.a)("signup.signing.in"):W?Object(f.a)("signup.creating.account"):Object(f.a)("signup.create.account")})})]})})})),le=["children","value","index"];function de(e){var t=e.children,a=e.value,n=e.index,r=Object(s.a)(e,le);return Object(H.jsx)("div",Object(c.a)(Object(c.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),{},{children:a===n&&Object(H.jsx)(l.a,{p:3,children:t})}))}function ue(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}t.default=function(e){var t=e.openModal,a=e.handleSignUpModalClose,s=Object(r.useState)(0),i=Object(n.a)(s,2),g=i[0],x=i[1],v=Object(r.useState)(!1),w=Object(n.a)(v,2),S=(w[0],w[1]),k=Object(r.useState)("signup"),N=Object(n.a)(k,2),C=(N[0],N[1]);return Object(H.jsx)(d.a,{open:t,onClose:function(){return a()},BackdropComponent:u.a,BackdropProps:{timeout:500},closeAfterTransition:!0,className:"".concat(_.a.modal),children:Object(H.jsx)(b.a,{in:t,children:Object(H.jsxs)(j.a,{elevation:3,className:"".concat(_.a.modal_content),children:[Object(H.jsx)(l.a,{className:"".concat(_.a.logo_container),children:Object(H.jsx)("img",{src:h,className:"".concat(_.a.logo)})}),Object(H.jsx)(p.a,{position:"static",color:"transparent",className:"".concat(_.a.appbar),children:Object(H.jsxs)(O.a,{value:g,onChange:function(e,t){x(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:[Object(H.jsx)(m.a,Object(c.a)(Object(c.a)({label:Object(f.a)("header.login")},ue(0)),{},{className:"".concat(_.a.tab)})),Object(H.jsx)(m.a,Object(c.a)(Object(c.a)({label:Object(f.a)("header.signup")},ue(1)),{},{className:"".concat(_.a.tab)}))]})}),Object(H.jsxs)(o.a,{axis:"x",index:g,onChangeIndex:function(e){x(e)},children:[Object(H.jsx)(de,{value:g,index:0,dir:"rtl",children:Object(H.jsx)(Z,{setTabKey:C,requestResetPassword:S,handleSignUpModalClose:a})}),Object(H.jsx)(de,{value:g,index:1,dir:"rtl",children:Object(H.jsx)(oe,{setTabKey:C,handleSignUpModalClose:a})})]})]})})})}},763:function(e,t,a){e.exports={modal:"SignupModal_modal__1aE5G",modal_content:"SignupModal_modal_content__I4eiW",logo:"SignupModal_logo__3Yd-K",logo_container:"SignupModal_logo_container__1v8An",appbar:"SignupModal_appbar__3i7Kh",tab:"SignupModal_tab__1Lo7g"}},764:function(e,t,a){e.exports={input_field:"Login_input_field__1u3Yt",label:"Login_label__2SHP6",agreement:"Login_agreement__2Qq-T",agreement_label:"Login_agreement_label__1T7kh",divider:"Login_divider__1asAQ",login_submit:"Login_login_submit__2YOzB",important:"Login_important__a3JOn",password_field:"Login_password_field__1R8pV",password_visibility:"Login_password_visibility__11H5c",error:"Login_error__3Mcui"}},765:function(e,t,a){e.exports={input_field:"Signup_input_field__2cuBq",error_message:"Signup_error_message__1z-zH",success_message:"Signup_success_message__13Jme",label:"Signup_label__3-JEV",agreement:"Signup_agreement__3ePwC",agreement_label:"Signup_agreement_label__3G5RS",divider:"Signup_divider__2oEUG",signup_submit:"Signup_signup_submit__1cjt9",important:"Signup_important__1nIsC",adornment_field:"Signup_adornment_field__3zS2m",adornment_element:"Signup_adornment_element__XKf97"}}}]);