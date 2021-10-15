/*! For license information please see 17.025f6ab1.chunk.js.LICENSE.txt */
(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[17],{1094:function(e,t,a){"use strict";a.r(t);var n=a(115),r=a(37),c=a.n(r),i=a(59),o=a(20),l=a(0),s=a(30),d=a(170),u=a(110),b=a(508),p=a(137),j=a(52),h=a(586),f=a(732),m=a.n(f),g=a(2),x=function(){return Object(g.jsxs)("svg",{width:"38",height:"32",viewBox:"0 0 38 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("path",{d:"M8.09844 0.333252L0.666992 7.02456L2.89743 9.50171L10.3289 2.8104L8.09844 0.333252Z",fill:"#4671F1"}),Object(g.jsx)("path",{d:"M17.3337 10.3333H20.667V16.9999H25.667V20.3333H17.3337V10.3333Z",fill:"#4671F1"}),Object(g.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.00033 16.9999C4.00033 8.71565 10.7161 1.99992 19.0003 1.99992C27.2846 1.99992 34.0003 8.71565 34.0003 16.9999C34.0003 25.2842 27.2846 31.9999 19.0003 31.9999C10.7161 31.9999 4.00033 25.2842 4.00033 16.9999ZM7.33366 16.9999C7.33366 10.5566 12.557 5.33325 19.0003 5.33325C25.4436 5.33325 30.667 10.5566 30.667 16.9999C30.667 23.4432 25.4436 28.6666 19.0003 28.6666C12.557 28.6666 7.33366 23.4432 7.33366 16.9999Z",fill:"#4671F1"}),Object(g.jsx)("path",{d:"M29.9022 0.333252L37.3337 7.02456L35.1032 9.50171L27.6718 2.8104L29.9022 0.333252Z",fill:"#4671F1"})]})},O=function(e){var t=e.value,a=e.toggleOptions,n=e.onChange;return Object(g.jsxs)("div",{className:m.a.container,children:[Object(g.jsxs)("div",{className:m.a.pageTitleWrapper,children:[Object(g.jsx)(u.a,{component:"h1",variant:"h4",children:Object(j.a)("challenge.title")}),Object(g.jsxs)("div",{className:m.a.icon,children:[Object(g.jsx)(x,{}),Object(g.jsx)("div",{className:m.a.timer,children:"21:02:24"})]})]}),Object(g.jsx)(h.a,{className:m.a.toggle,value:t,options:a,onChange:n})]})},v=a(448),y=a(733),_=a.n(y),C=a(10).c.assets_url,R=["".concat(C,"/imgs/platform/challenge/trophy_gold.png"),"".concat(C,"/imgs/platform/challenge/trophy_silver.png"),"".concat(C,"/imgs/platform/challenge/trophy_bronze.png")],N=function(e){var t=e.playerName,a=e.points,n=e.index;return Object(g.jsxs)("div",{className:_.a.container,children:[Object(g.jsx)(v.a,{variant:"square",className:_.a.avatarBg}),Object(g.jsxs)("div",{className:_.a.playerPoints,children:[Object(g.jsx)("div",{children:t||"---"}),Object(g.jsx)("div",{children:a||0})]}),Object(g.jsx)("img",{className:_.a.trophy,alt:"trophy",src:R[n]})]})},w=a(734),L=a.n(w),$=function(e){var t=e.data;return Object(g.jsx)("div",{className:L.a.container,children:t.length&&t.map((function(e,t){var a=e.username,n=e.points;return Object(g.jsx)(N,{playerName:a,points:n,index:t})}))})},k=a(1074),T=a(1075),z=a(1071),M=a(374),B=a(1072),P=a(1073),S=a(1076),H=a(735),E=a.n(H),F=function(e){var t=e.data;return Object(g.jsx)(z.a,{className:E.a.container,component:M.a,children:Object(g.jsxs)(B.a,{className:E.a.table,"aria-label":"leader-board-table",children:[Object(g.jsx)(P.a,{children:Object(g.jsxs)(k.a,{children:[Object(g.jsx)(T.a,{align:"center",children:Object(j.a)("challenge.table.rank")}),Object(g.jsx)(T.a,{align:"center",children:Object(j.a)("challenge.table.player")}),Object(g.jsx)(T.a,{align:"center",children:Object(j.a)("challenge.table.bets")}),Object(g.jsx)(T.a,{align:"center",children:Object(j.a)("challenge.table.payouts")}),Object(g.jsx)(T.a,{align:"center",children:Object(j.a)("challenge.table.ratio")}),Object(g.jsx)(T.a,{align:"center",children:Object(j.a)("challenge.table.vip_points")})]})}),Object(g.jsx)(S.a,{children:t.length?t.map((function(e,t){return Object(g.jsxs)(k.a,{children:[Object(g.jsx)(T.a,{align:"center",children:t+1}),Object(g.jsx)(T.a,{align:"center",children:e.username||"---"}),Object(g.jsx)(T.a,{align:"center",children:e.bets}),Object(g.jsx)(T.a,{align:"center",children:e.wagered}),Object(g.jsx)(T.a,{align:"center",children:e.ratio}),Object(g.jsx)(T.a,{align:"center",children:e.points})]},t)})):Object(g.jsx)(k.a,{children:Object(g.jsx)(T.a,{colSpan:6,className:E.a.emptyData,children:Object(j.a)("misc.noAvailableData")})})})]})})},D=[{id:1,min:"0",max:"1000"},{id:2,min:"1,001",max:"10,000"},{id:3,min:"10,001",max:"50,000"},{id:4,min:"50,000",max:"100,000"},{id:5,min:"100,001",max:"150,000"},{id:6,min:"150,001",max:"250,000"},{id:7,min:"250,001+"}],A=a(736),V=a.n(A),Z=function(){return Object(g.jsxs)("div",{className:V.a.container,children:[Object(g.jsx)(u.a,{component:"h2",variant:"h4",className:V.a.title,children:Object(j.a)("challenge.payout.title")}),Object(g.jsx)(b.a,{container:!0,spacing:2,children:D.map((function(e){return Object(g.jsxs)(b.a,{item:!0,xs:12,sm:6,md:4,children:[Object(g.jsxs)("div",{className:V.a.id,children:[Object(j.a)("challenge.payout.reward")," ",e.id,":"]}),Object(g.jsxs)("div",{className:V.a.minMax,children:[" ",e.min," ",e.max?"- "+e.max:""]})]})}))})]})},W=a(737),q=a.n(W),G=[{value:"yesterday",label:Object(j.a)("challenge.yesterday.button")},{value:"today",label:Object(j.a)("challenge.today.button")}];t.default=function(){var e=Object(s.d)((function(e){return e.platform})).account,t=Object(s.c)(),a=Object(l.useState)([]),r=Object(o.a)(a,2),j=r[0],h=r[1],f=Object(l.useState)("yesterday"),m=Object(o.a)(f,2),x=m[0],v=m[1],y=Object(l.useState)(""),_=Object(o.a)(y,2),C=_[0],R=_[1],N=function(){var e=Object(i.a)(c.a.mark((function e(a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(d.b)(!0)),e.prev=1,e.next=4,("yesterday"===a?p.e:p.d)();case 4:n=e.sent,h(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),R(e.t0.message);case 11:return e.prev=11,t(Object(d.b)(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){e&&x&&N(x)}),[e,x]),C?Object(g.jsx)(u.a,{component:"p",align:"center",children:C}):Object(g.jsx)(l.Fragment,{children:Object(g.jsxs)(b.a,{container:!0,xs:!0,className:q.a.container,children:[Object(g.jsx)(b.a,{item:!0,xs:12,children:Object(g.jsx)(O,{value:x,toggleOptions:G,onChange:function(e,t){v(t)}})}),Object(g.jsx)(b.a,{item:!0,xs:12,children:Object(g.jsx)($,{data:function(){if(j.length){var e=j.slice(0,3);return e.length<3?[].concat(Object(n.a)(e),Object(n.a)(new Array(3-e.length).fill({}))):e}return new Array(3).fill({})}()})}),Object(g.jsx)(b.a,{item:!0,xs:12,children:Object(g.jsx)(F,{data:j})}),Object(g.jsx)(b.a,{item:!0,xs:12,children:Object(g.jsx)(Z,{})})]})})}},540:function(e,t,a){"use strict";e.exports=a(541)},541:function(e,t,a){"use strict";var n=60103,r=60106,c=60107,i=60108,o=60114,l=60109,s=60110,d=60112,u=60113,b=60120,p=60115,j=60116,h=60121,f=60122,m=60117,g=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var O=Symbol.for;n=O("react.element"),r=O("react.portal"),c=O("react.fragment"),i=O("react.strict_mode"),o=O("react.profiler"),l=O("react.provider"),s=O("react.context"),d=O("react.forward_ref"),u=O("react.suspense"),b=O("react.suspense_list"),p=O("react.memo"),j=O("react.lazy"),h=O("react.block"),f=O("react.server.block"),m=O("react.fundamental"),g=O("react.debug_trace_mode"),x=O("react.legacy_hidden")}function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case o:case i:case u:case b:return e;default:switch(e=e&&e.$$typeof){case s:case d:case j:case p:case l:return e;default:return t}}case r:return t}}}var y=l,_=n,C=d,R=c,N=j,w=p,L=r,$=o,k=i,T=u;t.ContextConsumer=s,t.ContextProvider=y,t.Element=_,t.ForwardRef=C,t.Fragment=R,t.Lazy=N,t.Memo=w,t.Portal=L,t.Profiler=$,t.StrictMode=k,t.Suspense=T,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return v(e)===s},t.isContextProvider=function(e){return v(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===c},t.isLazy=function(e){return v(e)===j},t.isMemo=function(e){return v(e)===p},t.isPortal=function(e){return v(e)===r},t.isProfiler=function(e){return v(e)===o},t.isStrictMode=function(e){return v(e)===i},t.isSuspense=function(e){return v(e)===u},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===o||e===g||e===i||e===u||e===b||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===j||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===h||e[0]===f)},t.typeOf=v},586:function(e,t,a){"use strict";var n=a(421),r=a(1),c=a(4),i=a(0),o=(a(540),a(3),a(5));function l(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var s=a(8),d=a(9),u=i.forwardRef((function(e,t){var a=e.children,n=e.classes,s=e.className,u=e.exclusive,b=void 0!==u&&u,p=e.onChange,j=e.orientation,h=void 0===j?"horizontal":j,f=e.size,m=void 0===f?"medium":f,g=e.value,x=Object(c.a)(e,["children","classes","className","exclusive","onChange","orientation","size","value"]),O=function(e,t){if(p){var a,n=g&&g.indexOf(t);g&&n>=0?(a=g.slice()).splice(n,1):a=g?g.concat(t):[t],p(e,a)}},v=function(e,t){p&&p(e,g===t?null:t)};return i.createElement("div",Object(r.a)({role:"group",className:Object(o.a)(n.root,s,"vertical"===h&&n.vertical),ref:t},x),i.Children.map(a,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(o.a)(n.grouped,n["grouped".concat(Object(d.a)(h))],e.props.className),onChange:b?v:O,selected:void 0===e.props.selected?l(e.props.value,g):e.props.selected,size:e.props.size||m}):null})))})),b=Object(s.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),{name:"MuiToggleButtonGroup"})(u),p=a(24),j=a(163),h=i.forwardRef((function(e,t){var a=e.children,n=e.classes,l=e.className,s=e.disabled,u=void 0!==s&&s,b=e.disableFocusRipple,p=void 0!==b&&b,h=e.onChange,f=e.onClick,m=e.selected,g=e.size,x=void 0===g?"medium":g,O=e.value,v=Object(c.a)(e,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return i.createElement(j.a,Object(r.a)({className:Object(o.a)(n.root,l,u&&n.disabled,m&&n.selected,"medium"!==x&&n["size".concat(Object(d.a)(x))]),disabled:u,focusRipple:!p,ref:t,onClick:function(e){f&&(f(e,O),e.isDefaultPrevented())||h&&h(e,O)},onChange:h,value:O,"aria-pressed":m},v),i.createElement("span",{className:n.label},a))})),f=Object(s.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",borderRadius:e.shape.borderRadius,padding:11,border:"1px solid ".concat(Object(p.a)(e.palette.action.active,.12)),color:Object(p.a)(e.palette.action.active,.38),"&$selected":{color:e.palette.action.active,backgroundColor:Object(p.a)(e.palette.action.active,.12),"&:hover":{backgroundColor:Object(p.a)(e.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:Object(p.a)(e.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:Object(p.a)(e.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{padding:7,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:15,fontSize:e.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(h),m=a(2),g=Object(n.a)((function(e){return{toggle:{height:"44px",backgroundColor:"#1785eb",padding:"3px",borderRadius:"0","& .MuiButtonBase-root":{color:"#161e2f",backgroundColor:"#1785eb",borderRadius:"0",textTransform:"capitalize",fontWeight:"700"},"& .Mui-selected":{color:"#1785eb",backgroundColor:"#161e2f",pointerEvents:"none","&:hover":{backgroundColor:"#161e2f"}}}}}));t.a=function(e){var t=e.value,a=e.options,n=e.onChange,r=e.className,c=g();return Object(m.jsx)(b,{className:[c.toggle,r].join(" "),value:t,onChange:n,exclusive:!0,children:a.length&&a.map((function(e){var t=e.label,a=e.value;return Object(m.jsx)(f,{value:a,"aria-label":t,children:t})}))})}},732:function(e,t,a){e.exports={container:"Header_container__2dKxz",pageTitleWrapper:"Header_pageTitleWrapper__1ZH5E",icon:"Header_icon__2a5g1",timer:"Header_timer__CM98H",toggle:"Header_toggle__3ZDkd"}},733:function(e,t,a){e.exports={container:"Place_container__PmAxR",avatarBg:"Place_avatarBg__sVPaH",playerPoints:"Place_playerPoints__qG8hy",trophy:"Place_trophy__ql5hd"}},734:function(e,t,a){e.exports={container:"TopThree_container__3tzp3"}},735:function(e,t,a){e.exports={container:"LeaderBoardTable_container__LYBeA",table:"LeaderBoardTable_table__3DTDh",emptyData:"LeaderBoardTable_emptyData__w4ciL"}},736:function(e,t,a){e.exports={container:"Rewards_container__3tchk",title:"Rewards_title__3wI_4",id:"Rewards_id__3sT67",minMax:"Rewards_minMax__QksH4"}},737:function(e,t,a){e.exports={container:"Challenge_container__3xWB-"}}}]);