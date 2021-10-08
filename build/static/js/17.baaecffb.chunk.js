(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[17],{1030:function(e,a,t){"use strict";t.r(a);var r=t(14),s=t(0),i=t.n(s),l=t(47),o=t(457),n=t(485),c=t(463),d=t(489),u=t(509),m=t(2),f=t(21),b=t(497),v=t.n(b),p=(t(599),t(8)),j=t.n(p),O=["as","className","type","tooltip"],x={type:j.a.string,tooltip:j.a.bool,as:j.a.elementType},y=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,s=e.className,l=e.type,o=void 0===l?"valid":l,n=e.tooltip,c=void 0!==n&&n,d=Object(f.a)(e,O);return i.a.createElement(r,Object(m.a)({},d,{ref:a,className:v()(s,o+"-"+(c?"tooltip":"feedback"))}))}));y.displayName="Feedback",y.propTypes=x;var h=y,N=i.a.createContext({controlId:void 0}),_=t(498),P=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],g=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,n=e.type,c=void 0===n?"checkbox":n,d=e.isValid,u=void 0!==d&&d,b=e.isInvalid,p=void 0!==b&&b,j=e.isStatic,O=e.as,x=void 0===O?"input":O,y=Object(f.a)(e,P),h=Object(s.useContext)(N),g=h.controlId,w=h.custom?[l,"custom-control-input"]:[r,"form-check-input"],C=w[0],E=w[1];return r=Object(_.a)(C,E),i.a.createElement(x,Object(m.a)({},y,{ref:a,type:c,id:t||g,className:v()(o,r,u&&"is-valid",p&&"is-invalid",j&&"position-static")}))}));g.displayName="FormCheckInput";var w=g,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,l=e.className,o=e.htmlFor,n=Object(f.a)(e,C),c=Object(s.useContext)(N),d=c.controlId,u=c.custom?[r,"custom-control-label"]:[t,"form-check-label"],b=u[0],p=u[1];return t=Object(_.a)(b,p),i.a.createElement("label",Object(m.a)({},n,{ref:a,htmlFor:o||d,className:v()(l,t)}))}));E.displayName="FormCheckLabel";var F=E,I=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],k=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,o=e.inline,n=void 0!==o&&o,c=e.disabled,d=void 0!==c&&c,u=e.isValid,b=void 0!==u&&u,p=e.isInvalid,j=void 0!==p&&p,O=e.feedbackTooltip,x=void 0!==O&&O,y=e.feedback,P=e.className,g=e.style,C=e.title,E=void 0===C?"":C,k=e.type,R=void 0===k?"checkbox":k,V=e.label,M=e.children,S=e.custom,T=e.as,L=void 0===T?"input":T,z=Object(f.a)(e,I),G="switch"===R||S,A=G?[l,"custom-control"]:[r,"form-check"],D=A[0],H=A[1];r=Object(_.a)(D,H);var q=Object(s.useContext)(N).controlId,J=Object(s.useMemo)((function(){return{controlId:t||q,custom:G}}),[q,G,t]),U=G||null!=V&&!1!==V&&!M,K=i.a.createElement(w,Object(m.a)({},z,{type:"switch"===R?"checkbox":R,ref:a,isValid:b,isInvalid:j,isStatic:!U,disabled:d,as:L}));return i.a.createElement(N.Provider,{value:J},i.a.createElement("div",{style:g,className:v()(P,r,G&&"custom-"+R,n&&r+"-inline")},M||i.a.createElement(i.a.Fragment,null,K,U&&i.a.createElement(F,{title:E},V),(b||j)&&i.a.createElement(h,{type:b?"valid":"invalid",tooltip:x},y))))}));k.displayName="FormCheck",k.Input=w,k.Label=F;var R=k,V=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],M=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,n=e.isValid,c=e.isInvalid,d=e.lang,u=e.as,b=void 0===u?"input":u,p=Object(f.a)(e,V),j=Object(s.useContext)(N),O=j.controlId,x=j.custom?[l,"custom-file-input"]:[r,"form-control-file"],y=x[0],h=x[1];return r=Object(_.a)(y,h),i.a.createElement(b,Object(m.a)({},p,{ref:a,id:t||O,type:"file",lang:d,className:v()(o,r,n&&"is-valid",c&&"is-invalid")}))}));M.displayName="FormFileInput";var S=M,T=["bsPrefix","bsCustomPrefix","className","htmlFor"],L=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,l=e.className,o=e.htmlFor,n=Object(f.a)(e,T),c=Object(s.useContext)(N),d=c.controlId,u=c.custom?[r,"custom-file-label"]:[t,"form-file-label"],b=u[0],p=u[1];return t=Object(_.a)(b,p),i.a.createElement("label",Object(m.a)({},n,{ref:a,htmlFor:o||d,className:v()(l,t),"data-browse":n["data-browse"]}))}));L.displayName="FormFileLabel";var z=L,G=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],A=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,o=e.disabled,n=void 0!==o&&o,c=e.isValid,d=void 0!==c&&c,u=e.isInvalid,b=void 0!==u&&u,p=e.feedbackTooltip,j=void 0!==p&&p,O=e.feedback,x=e.className,y=e.style,P=e.label,g=e.children,w=e.custom,C=e.lang,E=e["data-browse"],F=e.as,I=void 0===F?"div":F,k=e.inputAs,R=void 0===k?"input":k,V=Object(f.a)(e,G),M=w?[l,"custom"]:[r,"form-file"],T=M[0],L=M[1];r=Object(_.a)(T,L);var A=Object(s.useContext)(N).controlId,D=Object(s.useMemo)((function(){return{controlId:t||A,custom:w}}),[A,w,t]),H=null!=P&&!1!==P&&!g,q=i.a.createElement(S,Object(m.a)({},V,{ref:a,isValid:d,isInvalid:b,disabled:n,as:R,lang:C}));return i.a.createElement(N.Provider,{value:D},i.a.createElement(I,{style:y,className:v()(x,r,w&&"custom-file")},g||i.a.createElement(i.a.Fragment,null,w?i.a.createElement(i.a.Fragment,null,q,H&&i.a.createElement(z,{"data-browse":E},P)):i.a.createElement(i.a.Fragment,null,H&&i.a.createElement(z,null,P),q),(d||b)&&i.a.createElement(h,{type:d?"valid":"invalid",tooltip:j},O))))}));A.displayName="FormFile",A.Input=S,A.Label=z;var D=A,H=(t(171),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),q=i.a.forwardRef((function(e,a){var t,r,l=e.bsPrefix,o=e.bsCustomPrefix,n=e.type,c=e.size,d=e.htmlSize,u=e.id,b=e.className,p=e.isValid,j=void 0!==p&&p,O=e.isInvalid,x=void 0!==O&&O,y=e.plaintext,h=e.readOnly,P=e.custom,g=e.as,w=void 0===g?"input":g,C=Object(f.a)(e,H),E=Object(s.useContext)(N).controlId,F=P?[o,"custom"]:[l,"form-control"],I=F[0],k=F[1];if(l=Object(_.a)(I,k),y)(r={})[l+"-plaintext"]=!0,t=r;else if("file"===n){var R;(R={})[l+"-file"]=!0,t=R}else if("range"===n){var V;(V={})[l+"-range"]=!0,t=V}else if("select"===w&&P){var M;(M={})[l+"-select"]=!0,M[l+"-select-"+c]=c,t=M}else{var S;(S={})[l]=!0,S[l+"-"+c]=c,t=S}return i.a.createElement(w,Object(m.a)({},C,{type:n,size:d,ref:a,readOnly:h,id:u||E,className:v()(b,t,j&&"is-valid",x&&"is-invalid")}))}));q.displayName="FormControl";var J=Object.assign(q,{Feedback:h}),U=["bsPrefix","className","children","controlId","as"],K=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,o=e.controlId,n=e.as,c=void 0===n?"div":n,d=Object(f.a)(e,U);t=Object(_.a)(t,"form-group");var u=Object(s.useMemo)((function(){return{controlId:o}}),[o]);return i.a.createElement(N.Provider,{value:u},i.a.createElement(c,Object(m.a)({},d,{ref:a,className:v()(r,t)}),l))}));K.displayName="FormGroup";var Q=K,W=["bsPrefix","className","as"],B=["xl","lg","md","sm","xs"],X=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,l=void 0===s?"div":s,o=Object(f.a)(e,W),n=Object(_.a)(t,"col"),c=[],d=[];return B.forEach((function(e){var a,t,r,s=o[e];if(delete o[e],"object"===typeof s&&null!=s){var i=s.span;a=void 0===i||i,t=s.offset,r=s.order}else a=s;var l="xs"!==e?"-"+e:"";a&&c.push(!0===a?""+n+l:""+n+l+"-"+a),null!=r&&d.push("order"+l+"-"+r),null!=t&&d.push("offset"+l+"-"+t)})),c.length||c.push(n),i.a.createElement(l,Object(m.a)({},o,{ref:a,className:v.a.apply(void 0,[r].concat(c,d))}))}));X.displayName="Col";var Y=X,Z=["as","bsPrefix","column","srOnly","className","htmlFor"],$=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,l=e.bsPrefix,o=e.column,n=e.srOnly,c=e.className,d=e.htmlFor,u=Object(f.a)(e,Z),b=Object(s.useContext)(N).controlId;l=Object(_.a)(l,"form-label");var p="col-form-label";"string"===typeof o&&(p=p+" "+p+"-"+o);var j=v()(c,l,n&&"sr-only",o&&p);return d=d||b,o?i.a.createElement(Y,Object(m.a)({ref:a,as:"label",className:j,htmlFor:d},u)):i.a.createElement(r,Object(m.a)({ref:a,className:j,htmlFor:d},u))}));$.displayName="FormLabel",$.defaultProps={column:!1,srOnly:!1};var ee=$,ae=["bsPrefix","className","as","muted"],te=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,l=void 0===s?"small":s,o=e.muted,n=Object(f.a)(e,ae);return t=Object(_.a)(t,"form-text"),i.a.createElement(l,Object(m.a)({},n,{ref:a,className:v()(r,t,o&&"text-muted")}))}));te.displayName="FormText";var re=te,se=i.a.forwardRef((function(e,a){return i.a.createElement(R,Object(m.a)({},e,{ref:a,type:"switch"}))}));se.displayName="Switch",se.Input=R.Input,se.Label=R.Label;var ie=se,le=t(558),oe=["bsPrefix","inline","className","validated","as"],ne=Object(le.a)("form-row"),ce=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,s=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,c=Object(f.a)(e,oe);return t=Object(_.a)(t,"form"),i.a.createElement(n,Object(m.a)({},c,{ref:a,className:v()(s,l&&"was-validated",r&&t+"-inline")}))}));ce.displayName="Form",ce.defaultProps={inline:!1},ce.Row=ne,ce.Group=Q,ce.Control=J,ce.Check=R,ce.File=D,ce.Switch=ie,ce.Label=ee,ce.Text=re;var de=ce,ue=t(699),me=t(993),fe=t.n(me),be=t(598),ve=t(19),pe=t(1),je=function(e){var a=e.UserEmail,t=void 0===a?"":a,r=e.hideModal,s=function(e){e.preventDefault(),u.a.info(Object(ve.a)("account_settings.setting_screen.reset_password_modal.toast.info")),r(),Object(be.b)(t)};return Object(pe.jsxs)("div",{className:"pt-0 ".concat(fe.a.tabContainer),children:[Object(pe.jsxs)("div",{className:"py-2",children:[Object(pe.jsx)("h5",{children:Object(ve.a)("account_settings.setting_screen.reset_password_modal.title")}),Object(pe.jsxs)("p",{children:[Object(ve.a)("account_settings.setting_screen.reset_password_modal.instruction")," (",t,")"]})]}),Object(pe.jsx)(de,{onSubmit:s,children:Object(pe.jsx)(de.Group,{className:fe.a.formGroup,controlId:"formSubmit",children:Object(pe.jsx)(ue.a,{className:"w-100",type:"submit",onClick:s,children:Object(ve.a)("account_settings.setting_screen.reset_password_modal.button")})})})]})},Oe=Object(o.a)((function(){return{button:{background:"#31699C",color:"#DEEFFF",fontSize:"10px",marginTop:"10px","&:hover":{background:"#31699C"}}}})),xe=function(e){var a=e.email,t=void 0===a?"":a,r=e.showModal,s=void 0!==r&&r,i=e.hideModal;return Object(pe.jsx)(d.a,{open:s,onClose:i,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(pe.jsxs)(n.a,{style:{width:"500px",padding:"4rem 3rem",backgroundColor:"var(--bg-less-dark-color)",borderRadius:"10px"},children:[Object(pe.jsx)("h3",{style:{color:"#fff"},children:Object(ve.a)("account_settings.setting_screen.security.reset_password.modal.title")}),Object(pe.jsx)(je,{UserEmail:t,hideModal:i})]})})};a.default=Object(l.b)((function(e){return{platform:e.platform}}),(function(e){return{dispatch:e}}))((function(e){var a=e.platform,t=(e.dispatch,Oe()),i="";null!==a.account&&(i=a.account.email);var l=Object(s.useState)(!1),o=Object(r.a)(l,2),d=o[0],m=o[1];return Object(pe.jsxs)(n.a,{children:[Object(pe.jsx)(c.a,{className:t.button,variant:"contained",onClick:function(){""===i?(alert("email not found, please login first"),u.a.error(Object(ve.a)("account_settings.setting_screen.security.reset_password.toast.error"))):m(!0)},children:Object(ve.a)("account_settings.setting_screen.security.reset_password.button")}),Object(pe.jsx)(xe,{email:i,showModal:d,hideModal:function(){m(!1)}})]})}))},598:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return l}));var r=t(50),s=t(166),i=function(e){var a=Object(s.b)();return r.a.post("/donut/api/v1/user/email/add",{email:e},{headers:a})},l=function(e){return r.a.post("/donut/api/v1/user/password/reset/send",{email:e})}},599:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var s=null;return a.forEach((function(e){if(null==s){var a=e.apply(void 0,t);null!=a&&(s=a)}})),s}return(0,i.default)(r)};var r,s=t(994),i=(r=s)&&r.__esModule?r:{default:r};e.exports=a.default},993:function(e,a,t){e.exports={modalContent:"styles_modalContent__2THQV",tabContainer:"styles_tabContainer__NKHHv",formGroup:"styles_formGroup__nys2N",separator:"styles_separator__1rvvW",blue:"styles_blue__3DuxF",label:"styles_label__3y2o6"}},994:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,s,i,l){var o=s||"<<anonymous>>",n=l||r;if(null==t[r])return a?new Error("Required "+i+" `"+n+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,r,o,i,n].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default}}]);