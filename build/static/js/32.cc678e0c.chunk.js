(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[32],{1189:function(e,t,n){"use strict";n.r(t);var a=n(41),c=n.n(a),r=n(59),i=n(18),s=n(0),o=n(26),l=n(171),d=n(141),u=n(510),j=n(97),x=n(23),f=n(75),b=n(798),p=n.n(b),m=n(1),g=function(){return Object(m.jsx)("div",{className:p.a.pageTitleWrapper,children:Object(m.jsx)(d.a,{variant:"h1",children:Object(f.a)("news.title")})})},O=n(29),v=n(115),h=n(5),w=n(751),y=n(750),S=n(799),C=n.n(S),N=function(e){var t=e.data;console.log(t);Object(x.j)();var n=function(e){return{__html:e}};return Object(m.jsx)(m.Fragment,{children:t.length?t.map((function(e,t){return Object(m.jsx)(w.a,{className:C.a.container,children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)("a",{href:e.link,color:"secondary",className:C.a.title,dangerouslySetInnerHTML:n(e.title.rendered),target:"_blank"}),Object(m.jsx)(d.a,{className:C.a.description,color:"textPrimary",gutterBottom:!0,children:Object(m.jsx)("span",{dangerouslySetInnerHTML:n(e.excerpt.rendered)})})]})},t)})):Object(m.jsx)(w.a,{className:C.a.container,children:Object(m.jsx)(y.a,{children:Object(m.jsx)(d.a,{className:C.a.title,color:"primary",variant:"body2",children:Object(f.a)("news.noRecent")})})})})},_=function(e){var t=e.news;return Object(m.jsx)(N,{data:t})},M=n(174),W=n.n(M),k=function(e){var t=e.news,n=Object.entries(t);return Object(m.jsx)(s.Fragment,{children:n.map((function(e,t){return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)("h5",{children:W()(e[0]).format("Do MMM, YYYY")}),Object(m.jsx)(N,{data:e[1]})]},t)}))})},I=function(e){var t=e.data,n=t.length?t.slice(0,3):[],a=function(e){return e.reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},t.date.split("T")[0],[].concat(Object(v.a)(e[t.date.split("T")[0]]||[]),[t])))}),{})};return Object(m.jsxs)("div",{children:[Object(m.jsx)(_,{news:n}),function(){if(t.length>3){var e=t.length?t.slice(3):[];return Object(m.jsx)(k,{news:a(e)})}return null}()]})},E=function(){var e=Object(o.c)(),t=Object(x.i)().postId,n=Object(s.useState)("<div>Error, no post id</div>"),a=Object(i.a)(n,2),u=a[0],f=a[1],b=Object(s.useState)(""),p=Object(i.a)(b,2),g=p[0],O=p[1],v=function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(l.b)(!0)),t.prev=1,t.next=4,Object(j.g)(n);case 4:a=t.sent,f(a.data.content.rendered),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),O(t.t0.message);case 11:return t.prev=11,e(Object(l.b)(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){t&&v(t)}),[t]);var h;return g?Object(m.jsx)(d.a,{component:"p",align:"center",children:g}):Object(m.jsx)("div",{dangerouslySetInnerHTML:(h=u,{__html:h})})},T=n(800),z=n.n(T);t.default=function(){var e=Object(x.j)().path,t=Object(o.c)(),n=Object(s.useState)([]),a=Object(i.a)(n,2),f=a[0],b=a[1],p=Object(s.useState)(""),O=Object(i.a)(p,2),v=O[0],h=O[1],w=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.b)(!0)),e.prev=1,e.next=4,Object(j.f)(1);case 4:n=e.sent,b(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0.message);case 11:return e.prev=11,t(Object(l.b)(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){w()}),[]),v?Object(m.jsx)(d.a,{component:"p",align:"center",children:v}):Object(m.jsx)(s.Fragment,{children:Object(m.jsxs)(u.a,{container:!0,className:z.a.container,children:[Object(m.jsx)(u.a,{item:!0,xs:12,children:Object(m.jsx)(g,{})}),Object(m.jsxs)(u.a,{item:!0,xs:12,children:[Object(m.jsx)(x.b,{exact:!0,path:e,component:function(){return Object(m.jsx)(I,{data:f})}}),Object(m.jsx)(x.b,{exact:!0,path:"".concat(e,"/:postId"),component:function(){return Object(m.jsx)(E,{})}})]})]})})}},510:function(e,t,n){"use strict";var a=n(4),c=n(2),r=n(0),i=(n(3),n(6)),s=n(8),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,d=e.classes,u=e.className,j=e.component,x=void 0===j?"div":j,f=e.container,b=void 0!==f&&f,p=e.direction,m=void 0===p?"row":p,g=e.item,O=void 0!==g&&g,v=e.justify,h=e.justifyContent,w=void 0===h?"flex-start":h,y=e.lg,S=void 0!==y&&y,C=e.md,N=void 0!==C&&C,_=e.sm,M=void 0!==_&&_,W=e.spacing,k=void 0===W?0:W,I=e.wrap,E=void 0===I?"wrap":I,T=e.xl,z=void 0!==T&&T,B=e.xs,F=void 0!==B&&B,D=e.zeroMinWidth,G=void 0!==D&&D,H=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(i.a)(d.root,u,b&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],O&&d.item,G&&d.zeroMinWidth,"row"!==m&&d["direction-xs-".concat(String(m))],"wrap"!==E&&d["wrap-xs-".concat(String(E))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(v||w)&&d["justify-content-xs-".concat(String(v||w))],!1!==F&&d["grid-xs-".concat(String(F))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==N&&d["grid-md-".concat(String(N))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==z&&d["grid-xl-".concat(String(z))]);return r.createElement(x,Object(c.a)({className:R,ref:t},H))})),j=Object(s.a)((function(e){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(a){var c=e.spacing(a);0!==c&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(c,2)),width:"calc(100% + ".concat(d(c),")"),"& > $item":{padding:d(c,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var c="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:c,flexGrow:0,maxWidth:c}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=j},750:function(e,t,n){"use strict";var a=n(2),c=n(4),r=n(0),i=(n(3),n(6)),s=n(8),o=r.forwardRef((function(e,t){var n=e.classes,s=e.className,o=e.component,l=void 0===o?"div":o,d=Object(c.a)(e,["classes","className","component"]);return r.createElement(l,Object(a.a)({className:Object(i.a)(n.root,s),ref:t},d))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},751:function(e,t,n){"use strict";var a=n(2),c=n(4),r=n(0),i=(n(3),n(6)),s=n(254),o=n(8),l=r.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.raised,d=void 0!==l&&l,u=Object(c.a)(e,["classes","className","raised"]);return r.createElement(s.a,Object(a.a)({className:Object(i.a)(n.root,o),elevation:d?8:1,ref:t},u))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},798:function(e,t,n){e.exports={pageTitleWrapper:"Header_pageTitleWrapper__2Ms1d"}},799:function(e,t,n){e.exports={container:"NewsCard_container__1S2b0",title:"NewsCard_title__jVf1S",description:"NewsCard_description__36Jmu"}},800:function(e,t,n){e.exports={container:"News_container__1K-nq"}}}]);