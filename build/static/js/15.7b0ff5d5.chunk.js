(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[15],{1181:function(e,t,n){"use strict";n.r(t);var a=n(35),r=n.n(a),i=n(6),c=n(59),o=n(19),s=n(0),u=n(26),l=n(173),d=n(138),f=n(502),m=n(518),b=n(140),p=n(52),x=n(778),g=n.n(x),j=n(450),v=n(563),h=n(779),O=n.n(h),w=n(1),y=function(){return Object(w.jsx)("svg",{width:"25",height:"22",viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.7649 1.24258C17.4354 0.00865918 15.2798 0.00865918 13.9502 1.24258L12.3453 2.73205C12.2769 2.79553 12.212 2.86105 12.1507 2.92838C12.0893 2.86106 12.0244 2.79556 11.9561 2.73209L10.3512 1.24261C9.02162 0.00869623 6.86602 0.00869623 5.53648 1.24261C4.20694 2.47653 4.20694 4.47711 5.53648 5.71103L6.53359 6.63643H0V12.9557H2.26966V21.3814H22.6966V12.9557H24.9663V6.63643H17.7678L18.7649 5.71099C20.0945 4.47707 20.0945 2.4765 18.7649 1.24258ZM15.5551 5.71099L17.16 4.22152C17.6032 3.81021 17.6032 3.14335 17.16 2.73205C16.7168 2.32074 15.9983 2.32074 15.5551 2.73205L13.9502 4.22152C13.5071 4.63283 13.5071 5.29968 13.9502 5.71099C14.3934 6.1223 15.1119 6.1223 15.5551 5.71099ZM10.3512 4.22156L8.74627 2.73209C8.30309 2.32078 7.58455 2.32078 7.14137 2.73209C6.69819 3.14339 6.69819 3.81025 7.14137 4.22156L8.74627 5.71103C9.18945 6.12233 9.90798 6.12233 10.3512 5.71103C10.7943 5.29972 10.7943 4.63286 10.3512 4.22156ZM22.6966 8.74286V10.8493H2.26966V8.74286H22.6966ZM13.5235 12.9557H20.427V19.275H13.5235V12.9557ZM11.443 12.9557V19.275H4.53933V12.9557H11.443Z",fill:"#1785EB"})})},k=function(e){var t=e.gameName,n=e.currentProgress,a=e.maxProgress,r=e.vipPoints,i=t.toLowerCase();return Object(w.jsxs)(j.a,{className:O.a.container,children:[Object(w.jsx)("div",{className:[O.a.gameName,O.a.textCapitalize,O.a.fontWeight_700].join(" "),children:i}),Object(w.jsxs)("div",{className:O.a.progress,children:[Object(w.jsxs)("div",{children:[Object(p.a)("task.play")," ",Object(w.jsx)("span",{className:O.a.textCapitalize,children:i})," ",Object(w.jsxs)("span",{className:O.a.fontWeight_700,children:[n," ",Object(p.a)("task.times")]})]}),Object(w.jsx)(v.a,{currentValue:n,maxValue:a})]}),Object(w.jsxs)("div",{className:[O.a.points,O.a.fontWeight_700].join(" "),children:[Object(w.jsx)(y,{}),Object(p.a)("task.get")," ",r," ",Object(p.a)("task.vip.points")]})]})},C=n(780),_=n.n(C),P=function(e){var t=e.data;return Object(w.jsx)("div",{className:_.a.container,children:t.map((function(e){return Object(w.jsx)(k,{gameName:e.gameName,currentProgress:e.currentProgress,maxProgress:e.maxProgress,vipPoints:e.vipPoints})}))})},N={gameName:"",currentProgress:0,maxProgress:0,vipPoints:0},I=[Object(p.a)("task.instruction.one"),Object(p.a)("task.instruction.two"),Object(p.a)("task.instruction.three")];t.default=function(){var e=Object(u.d)((function(e){return e.platform})).account,t=Object(u.c)(),n=Object(s.useState)({dailyTaskData:[],monthlyTaskData:[]}),a=Object(o.a)(n,2),p=a[0],x=a[1],j=Object(s.useState)(""),v=Object(o.a)(j,2),h=v[0],O=v[1],y=function(){var t=Object(c.a)(r.a.mark((function t(n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.length){t.next=5;break}return t.next=3,Promise.all(n.map(function(){var t=Object(c.a)(r.a.mark((function t(n){var c,o,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(i.a)({},N),t.next=3,a(e.id,n.id);case 3:return o=t.sent,(s=o.data)?(c.gameName=n.name,c.currentProgress=s.game_count,c.maxProgress=10,c.vipPoints=1):c.gameName=n.name,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(r.a.mark((function e(){var n,a,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.b)(!0)),e.prev=1,e.next=4,Object(b.c)();case 4:return n=e.sent,a=n.data,e.next=8,y(a,b.b);case 8:return i=e.sent,e.next=11,y(a,b.n);case 11:c=e.sent,x({dailyTaskData:i,monthlyTaskData:c}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),O(e.t0.message);case 18:return e.prev=18,t(Object(l.b)(!1)),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){e&&k()}),[e]),h?Object(w.jsx)(d.a,{component:"p",align:"center",children:h}):Object(w.jsx)(s.Fragment,{children:Object(w.jsxs)(f.a,{container:!0,xs:!0,children:[Object(w.jsx)(f.a,{item:!0,xs:12,children:Object(w.jsx)(m.a,{className:g.a.howItWorks,instruction:I})}),Object(w.jsxs)(f.a,{item:!0,container:!0,spacing:2,children:[Object(w.jsx)(f.a,{item:!0,xs:6,md:12,children:Object(w.jsx)(P,{data:p.dailyTaskData})}),Object(w.jsx)(f.a,{item:!0,xs:6,md:12,children:Object(w.jsx)(P,{data:p.monthlyTaskData})})]})]})})}},393:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return r.a})),n.d(t,"createSvgIcon",(function(){return i.a})),n.d(t,"debounce",(function(){return c.a})),n.d(t,"deprecatedPropType",(function(){return o.a})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return m.a})),n.d(t,"useControlled",(function(){return b.a})),n.d(t,"useEventCallback",(function(){return p.a})),n.d(t,"useForkRef",(function(){return x.a})),n.d(t,"unstable_useId",(function(){return j})),n.d(t,"useIsFocusVisible",(function(){return v.a}));var a=n(12),r=n(93),i=n(51),c=n(81),o=n(80),s=n(82),u=n(29),l=n(112),d=n(459),f=n(64),m=n(461),b=n(168),p=n(54),x=n(14),g=n(0);function j(e){var t=g.useState(e),n=t[0],a=t[1],r=e||n;return g.useEffect((function(){null==n&&a("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}var v=n(169)},459:function(e,t,n){"use strict";function a(e){return function(){return null}}n.d(t,"a",(function(){return a}))},461:function(e,t,n){"use strict";function a(e,t,n,a,r){return null}n.d(t,"a",(function(){return a}))},462:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(393)},502:function(e,t,n){"use strict";var a=n(4),r=n(2),i=n(0),c=(n(3),n(5)),o=n(8),s=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,u=void 0===s?"stretch":s,l=e.classes,d=e.className,f=e.component,m=void 0===f?"div":f,b=e.container,p=void 0!==b&&b,x=e.direction,g=void 0===x?"row":x,j=e.item,v=void 0!==j&&j,h=e.justify,O=e.justifyContent,w=void 0===O?"flex-start":O,y=e.lg,k=void 0!==y&&y,C=e.md,_=void 0!==C&&C,P=e.sm,N=void 0!==P&&P,I=e.spacing,S=void 0===I?0:I,W=e.wrap,z=void 0===W?"wrap":W,M=e.xl,L=void 0!==M&&M,H=e.xs,B=void 0!==H&&H,T=e.zeroMinWidth,V=void 0!==T&&T,D=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),E=Object(c.a)(l.root,d,p&&[l.container,0!==S&&l["spacing-xs-".concat(String(S))]],v&&l.item,V&&l.zeroMinWidth,"row"!==g&&l["direction-xs-".concat(String(g))],"wrap"!==z&&l["wrap-xs-".concat(String(z))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==o&&l["align-content-xs-".concat(String(o))],"flex-start"!==(h||w)&&l["justify-content-xs-".concat(String(h||w))],!1!==B&&l["grid-xs-".concat(String(B))],!1!==N&&l["grid-sm-".concat(String(N))],!1!==_&&l["grid-md-".concat(String(_))],!1!==k&&l["grid-lg-".concat(String(k))],!1!==L&&l["grid-xl-".concat(String(L))]);return i.createElement(m,Object(r.a)({className:E,ref:t},D))})),f=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(l(r,2)),width:"calc(100% + ".concat(l(r),")"),"& > $item":{padding:l(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f},518:function(e,t,n){"use strict";var a=n(520),r=n.n(a),i=n(52),c=n(519),o=n.n(c),s=n(1);t.a=function(e){var t=e.title,n=e.instruction,a=e.className;return Object(s.jsxs)("div",{className:[o.a.container,a].join(" "),children:[t&&Object(s.jsx)("h3",{children:t}),Object(s.jsxs)("p",{children:[Object(s.jsx)(r.a,{className:o.a.iconInfo}),Object(i.a)("misc.howItWorks")]}),Object(s.jsx)("ol",{children:n.map((function(e,t){return Object(s.jsx)("li",{children:e},t)}))})]})}},519:function(e,t,n){e.exports={container:"HowItWorks_container__uVCd6",iconInfo:"HowItWorks_iconInfo__1Yh1B"}},520:function(e,t,n){"use strict";var a=n(53),r=n(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),c=(0,a(n(462)).default)(i.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.default=c},563:function(e,t,n){"use strict";var a=n(8),r=n(400),i=n(767),c=n(564),o=n.n(c),s=n(1),u=Object(a.a)((function(e){return Object(r.a)({root:{borderRadius:10},colorPrimary:{backgroundColor:"#191E35"},bar:{borderRadius:10,backgroundColor:"#1785EB"}})}))(i.a);t.a=function(e){var t=e.currentValue,n=e.maxValue;return Object(s.jsxs)("div",{className:o.a.container,children:[Object(s.jsx)(u,{value:t,variant:"determinate",className:o.a.barHeight}),Object(s.jsxs)("div",{className:o.a.barLabel,children:[t,"/",n]})]})}},564:function(e,t,n){e.exports={container:"LinearProgressBar_container__AJCH_",barHeight:"LinearProgressBar_barHeight__2i-G7",barLabel:"LinearProgressBar_barLabel__1dz4S"}},767:function(e,t,n){"use strict";var a=n(2),r=n(4),i=n(0),c=(n(3),n(5)),o=n(12),s=n(8),u=n(27),l=n(43),d=i.forwardRef((function(e,t){var n=e.classes,s=e.className,u=e.color,d=void 0===u?"primary":u,f=e.value,m=e.valueBuffer,b=e.variant,p=void 0===b?"indeterminate":b,x=Object(r.a)(e,["classes","className","color","value","valueBuffer","variant"]),g=Object(l.a)(),j={},v={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==f){j["aria-valuenow"]=Math.round(f),j["aria-valuemin"]=0,j["aria-valuemax"]=100;var h=f-100;"rtl"===g.direction&&(h=-h),v.bar1.transform="translateX(".concat(h,"%)")}else 0;if("buffer"===p)if(void 0!==m){var O=(m||0)-100;"rtl"===g.direction&&(O=-O),v.bar2.transform="translateX(".concat(O,"%)")}else 0;return i.createElement("div",Object(a.a)({className:Object(c.a)(n.root,n["color".concat(Object(o.a)(d))],s,{determinate:n.determinate,indeterminate:n.indeterminate,buffer:n.buffer,query:n.query}[p]),role:"progressbar"},j,{ref:t},x),"buffer"===p?i.createElement("div",{className:Object(c.a)(n.dashed,n["dashedColor".concat(Object(o.a)(d))])}):null,i.createElement("div",{className:Object(c.a)(n.bar,n["barColor".concat(Object(o.a)(d))],("indeterminate"===p||"query"===p)&&n.bar1Indeterminate,{determinate:n.bar1Determinate,buffer:n.bar1Buffer}[p]),style:v.bar1}),"determinate"===p?null:i.createElement("div",{className:Object(c.a)(n.bar,("indeterminate"===p||"query"===p)&&n.bar2Indeterminate,"buffer"===p?[n["color".concat(Object(o.a)(d))],n.bar2Buffer]:n["barColor".concat(Object(o.a)(d))]),style:v.bar2}))}));t.a=Object(s.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(u.j)(t,.62):Object(u.b)(t,.5)},n=t(e.palette.primary.main),a=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:n},colorSecondary:{backgroundColor:a},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(d)},778:function(e,t,n){e.exports={howItWorks:"Tasks_howItWorks__2DiZj"}},779:function(e,t,n){e.exports={container:"GameTask_container__1ixAX",fontWeight_700:"GameTask_fontWeight_700__2LpUx",gameName:"GameTask_gameName__18-pI",textCapitalize:"GameTask_textCapitalize__nNwUg",progress:"GameTask_progress__2CmwM",points:"GameTask_points__1Q8uD"}},780:function(e,t,n){e.exports={container:"GameTaskList_container__1PDuh"}},80:function(e,t,n){"use strict";function a(e,t){return function(){return null}}n.d(t,"a",(function(){return a}))}}]);