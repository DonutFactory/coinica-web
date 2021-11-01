(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[12],{1115:function(e,t,n){"use strict";var r=n(2),o=n(4),a=n(0),i=(n(3),n(5)),s=n(85),l=n(114),c=n(8),d=n(12),u=a.forwardRef((function(e,t){var n=e.children,c=e.classes,u=e.className,p=(e.color,e.component),f=void 0===p?"label":p,h=(e.disabled,e.error,e.filled,e.focused,e.required,Object(o.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),v=Object(l.a)(),m=Object(s.a)({props:e,muiFormControl:v,states:["color","required","focused","disabled","error","filled"]});return a.createElement(f,Object(r.a)({className:Object(i.a)(c.root,c["color".concat(Object(d.a)(m.color||"primary"))],u,m.disabled&&c.disabled,m.error&&c.error,m.filled&&c.filled,m.focused&&c.focused,m.required&&c.required),ref:t},h),n,m.required&&a.createElement("span",{"aria-hidden":!0,className:Object(i.a)(c.asterisk,m.error&&c.error)},"\u2009","*"))})),p=Object(c.a)((function(e){return{root:Object(r.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(u),f=a.forwardRef((function(e,t){var n=e.classes,c=e.className,d=e.disableAnimation,u=void 0!==d&&d,f=(e.margin,e.shrink),h=(e.variant,Object(o.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),v=Object(l.a)(),m=f;"undefined"===typeof m&&v&&(m=v.filled||v.focused||v.adornedStart);var b=Object(s.a)({props:e,muiFormControl:v,states:["margin","variant"]});return a.createElement(p,Object(r.a)({"data-shrink":m,className:Object(i.a)(n.root,c,v&&n.formControl,!u&&n.animated,m&&n.shrink,"dense"===b.margin&&n.marginDense,{filled:n.filled,outlined:n.outlined}[b.variant]),classes:{focused:n.focused,disabled:n.disabled,error:n.error,required:n.required,asterisk:n.asterisk},ref:t},h))}));t.a=Object(c.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(f)},1140:function(e,t,n){"use strict";var r=n(2),o=n(4),a=n(0),i=(n(3),n(5)),s=n(138),l=n(8),c=n(74),d=a.forwardRef((function(e,t){var n=e.children,l=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.disablePointerEvents,h=void 0!==f&&f,v=e.disableTypography,m=void 0!==v&&v,b=e.position,g=e.variant,y=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(c.b)()||{},S=g;return g&&x.variant,x&&!S&&(S=x.variant),a.createElement(c.a.Provider,{value:null},a.createElement(p,Object(r.a)({className:Object(i.a)(l.root,d,"end"===b?l.positionEnd:l.positionStart,h&&l.disablePointerEvents,x.hiddenLabel&&l.hiddenLabel,"filled"===S&&l.filled,"dense"===x.margin&&l.marginDense),ref:t},y),"string"!==typeof n||m?n:a.createElement(s.a,{color:"textSecondary"},n)))}));t.a=Object(l.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},1141:function(e,t,n){"use strict";var r=n(0),o=n(51);t.a=Object(o.a)(r.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},1142:function(e,t,n){"use strict";var r=n(0),o=n(51);t.a=Object(o.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1143:function(e,t,n){"use strict";var r=n(0),o=n(51);t.a=Object(o.a)(r.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff")},1144:function(e,t,n){"use strict";var r=n(0),o=n(51);t.a=Object(o.a)(r.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined")},1145:function(e,t,n){"use strict";var r=n(2),o=n(4),a=n(0),i=(n(3),n(5)),s=n(114),l=n(8),c=n(138),d=n(12),u=a.forwardRef((function(e,t){e.checked;var n=e.classes,l=e.className,u=e.control,p=e.disabled,f=(e.inputRef,e.label),h=e.labelPlacement,v=void 0===h?"end":h,m=(e.name,e.onChange,e.value,Object(o.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),b=Object(s.a)(),g=p;"undefined"===typeof g&&"undefined"!==typeof u.props.disabled&&(g=u.props.disabled),"undefined"===typeof g&&b&&(g=b.disabled);var y={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),a.createElement("label",Object(r.a)({className:Object(i.a)(n.root,l,"end"!==v&&n["labelPlacement".concat(Object(d.a)(v))],g&&n.disabled),ref:t},m),a.cloneElement(u,y),a.createElement(c.a,{component:"span",className:Object(i.a)(n.label,g&&n.disabled)},f))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},1174:function(e,t,n){"use strict";var r=n(2),o=n(4),a=n(0),i=(n(3),n(5)),s=n(56),l=n(168),c=n(114),d=n(8),u=n(396),p=a.forwardRef((function(e,t){var n=e.autoFocus,d=e.checked,p=e.checkedIcon,f=e.classes,h=e.className,v=e.defaultChecked,m=e.disabled,b=e.icon,g=e.id,y=e.inputProps,x=e.inputRef,S=e.name,O=e.onBlur,w=e.onChange,E=e.onFocus,j=e.readOnly,C=e.required,M=e.tabIndex,k=e.type,L=e.value,N=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),T=Object(l.a)({controlled:d,default:Boolean(v),name:"SwitchBase",state:"checked"}),P=Object(s.a)(T,2),I=P[0],X=P[1],H=Object(c.a)(),D=m;H&&"undefined"===typeof D&&(D=H.disabled);var _="checkbox"===k||"radio"===k;return a.createElement(u.a,Object(r.a)({component:"span",className:Object(i.a)(f.root,h,I&&f.checked,D&&f.disabled),disabled:D,tabIndex:null,role:void 0,onFocus:function(e){E&&E(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){O&&O(e),H&&H.onBlur&&H.onBlur(e)},ref:t},N),a.createElement("input",Object(r.a)({autoFocus:n,checked:d,defaultChecked:v,className:f.input,disabled:D,id:_&&g,name:S,onChange:function(e){var t=e.target.checked;X(t),w&&w(e,t)},readOnly:j,ref:x,required:C,tabIndex:M,type:k,value:L},y)),I?p:b)})),f=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p),h=n(51),v=Object(h.a)(a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(h.a)(a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=n(26),g=Object(h.a)(a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),y=n(12),x=a.createElement(m,null),S=a.createElement(v,null),O=a.createElement(g,null),w=a.forwardRef((function(e,t){var n=e.checkedIcon,s=void 0===n?x:n,l=e.classes,c=e.color,d=void 0===c?"secondary":c,u=e.icon,p=void 0===u?S:u,h=e.indeterminate,v=void 0!==h&&h,m=e.indeterminateIcon,b=void 0===m?O:m,g=e.inputProps,w=e.size,E=void 0===w?"medium":w,j=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),C=v?b:p,M=v?b:s;return a.createElement(f,Object(r.a)({type:"checkbox",classes:{root:Object(i.a)(l.root,l["color".concat(Object(y.a)(d))],v&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":v},g),icon:a.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===E?E:C.props.fontSize}),checkedIcon:a.cloneElement(M,{fontSize:void 0===M.props.fontSize&&"small"===E?E:M.props.fontSize}),ref:t},j))}));t.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(w)},483:function(e,t,n){"use strict";var r=function(){};e.exports=r},537:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},618:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3}},744:function(e,t,n){"use strict";var r=n(618);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"SwipeableViewsContext",{enumerable:!0,get:function(){return o.SwipeableViewsContext}});var o=r(n(745))},745:function(e,t,n){"use strict";var r=n(618),o=n(746);Object.defineProperty(t,"__esModule",{value:!0}),t.getDomTreeShapes=S,t.findNativeHandler=w,t.default=t.SwipeableViewsContext=void 0;var a=o(n(747)),i=o(n(748)),s=o(n(750)),l=o(n(751)),c=o(n(752)),d=o(n(755)),u=o(n(756)),p=r(n(0)),f=(o(n(3)),o(n(483)),n(758));function h(e,t,n,r){return e.addEventListener(t,n,r),{remove:function(){e.removeEventListener(t,n,r)}}}var v={direction:"ltr",display:"flex",willChange:"transform"},m={width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"},b={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(e){return"translate(".concat(-e,"%, 0)")},"x-reverse":function(e){return"translate(".concat(e,"%, 0)")},y:function(e){return"translate(0, ".concat(-e,"%)")},"y-reverse":function(e){return"translate(0, ".concat(e,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function g(e,t){var n=t.duration,r=t.easeFunction,o=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(o)}function y(e,t){var n=b.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function x(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function S(e,t){for(var n=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);"absolute"===r.getPropertyValue("position")||"hidden"===r.getPropertyValue("overflow-x")?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var O=null;function w(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,o=e.axis;return t.some((function(e){var t=n>=r;"x"!==o&&"y"!==o||(t=!t);var a=Math.round(e[b.scrollPosition[o]]),i=a>0,s=a+e[b.clientLength[o]]<e[b.scrollLength[o]];return!!(t&&s||!t&&i)&&(O=e.element,!0)}))}var E=p.createContext();t.SwipeableViewsContext=E;var j=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,c.default)(this,(0,d.default)(t).call(this,e))).rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.indexCurrent=null,n.firstRenderTimeout=null,n.setRootNode=function(e){n.rootNode=e},n.setContainerNode=function(e){n.containerNode=e},n.setActiveSlide=function(e){n.activeSlide=e,n.updateHeight()},n.handleSwipeStart=function(e){var t=n.props.axis,r=y(e.touches[0],t);n.viewLength=n.rootNode.getBoundingClientRect()[b.length[t]],n.startX=r.pageX,n.lastX=r.pageX,n.vx=0,n.startY=r.pageY,n.isSwiping=void 0,n.started=!0;var o=window.getComputedStyle(n.containerNode),a=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform");if(a&&"none"!==a){var i=a.split("(")[1].split(")")[0].split(","),s=window.getComputedStyle(n.rootNode),l=y({pageX:parseInt(i[4],10),pageY:parseInt(i[5],10)},t);n.startIndex=-l.pageX/(n.viewLength-parseInt(s.paddingLeft,10)-parseInt(s.paddingRight,10))||0}},n.handleSwipeMove=function(e){if(n.started){if(null===O||O===n.rootNode){var t=n.props,r=t.axis,o=t.children,a=t.ignoreNativeScroll,i=t.onSwitching,s=t.resistance,l=y(e.touches[0],r);if(void 0===n.isSwiping){var c=Math.abs(l.pageX-n.startX),d=Math.abs(l.pageY-n.startY),u=c>d&&c>f.constant.UNCERTAINTY_THRESHOLD;if(!s&&("y"===r||"y-reverse"===r)&&(0===n.indexCurrent&&n.startX<l.pageX||n.indexCurrent===p.Children.count(n.props.children)-1&&n.startX>l.pageX))return void(n.isSwiping=!1);if(c>d&&e.preventDefault(),!0===u||d>f.constant.UNCERTAINTY_THRESHOLD)return n.isSwiping=u,void(n.startX=l.pageX)}if(!0===n.isSwiping){e.preventDefault(),n.vx=.5*n.vx+.5*(l.pageX-n.lastX),n.lastX=l.pageX;var h=(0,f.computeIndex)({children:o,resistance:s,pageX:l.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),v=h.index,m=h.startX;if(null===O&&!a)if(w({domTreeShapes:S(e.target,n.rootNode),startX:n.startX,pageX:l.pageX,axis:r}))return;m?n.startX=m:null===O&&(O=n.rootNode),n.setIndexCurrent(v);var b=function(){i&&i(v,"move")};!n.state.displaySameSlide&&n.state.isDragging||n.setState({displaySameSlide:!1,isDragging:!0},b),b()}}}else n.handleTouchStart(e)},n.handleSwipeEnd=function(){if(O=null,n.started&&(n.started=!1,!0===n.isSwiping)){var e,t=n.state.indexLatest,r=n.indexCurrent,o=t-r;e=Math.abs(n.vx)>n.props.threshold?n.vx>0?Math.floor(r):Math.ceil(r):Math.abs(o)>n.props.hysteresis?o>0?Math.floor(r):Math.ceil(r):t;var a=p.Children.count(n.props.children)-1;e<0?e=0:e>a&&(e=a),n.setIndexCurrent(e),n.setState({indexLatest:e,isDragging:!1},(function(){n.props.onSwitching&&n.props.onSwitching(e,"end"),n.props.onChangeIndex&&e!==t&&n.props.onChangeIndex(e,t,{reason:"swipe"}),r===t&&n.handleTransitionEnd()}))}},n.handleTouchStart=function(e){n.props.onTouchStart&&n.props.onTouchStart(e),n.handleSwipeStart(e)},n.handleTouchEnd=function(e){n.props.onTouchEnd&&n.props.onTouchEnd(e),n.handleSwipeEnd(e)},n.handleMouseDown=function(e){n.props.onMouseDown&&n.props.onMouseDown(e),e.persist(),n.handleSwipeStart(x(e))},n.handleMouseUp=function(e){n.props.onMouseUp&&n.props.onMouseUp(e),n.handleSwipeEnd(x(e))},n.handleMouseLeave=function(e){n.props.onMouseLeave&&n.props.onMouseLeave(e),n.started&&n.handleSwipeEnd(x(e))},n.handleMouseMove=function(e){n.props.onMouseMove&&n.props.onMouseMove(e),n.started&&n.handleSwipeMove(x(e))},n.handleScroll=function(e){if(n.props.onScroll&&n.props.onScroll(e),e.target===n.rootNode)if(n.ignoreNextScrollEvents)n.ignoreNextScrollEvents=!1;else{var t=n.state.indexLatest,r=Math.ceil(e.target.scrollLeft/e.target.clientWidth)+t;n.ignoreNextScrollEvents=!0,e.target.scrollLeft=0,n.props.onChangeIndex&&r!==t&&n.props.onChangeIndex(r,t,{reason:"focus"})}},n.updateHeight=function(){if(null!==n.activeSlide){var e=n.activeSlide.children[0];void 0!==e&&void 0!==e.offsetHeight&&n.state.heightLatest!==e.offsetHeight&&n.setState({heightLatest:e.offsetHeight})}},n.state={indexLatest:e.index,isDragging:!1,renderOnlyActive:!e.disableLazyLoading,heightLatest:0,displaySameSlide:!0},n.setIndexCurrent(e.index),n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.transitionListener=h(this.containerNode,"transitionend",(function(t){t.target===e.containerNode&&e.handleTransitionEnd()})),this.touchMoveListener=h(this.rootNode,"touchmove",(function(t){e.props.disabled||e.handleSwipeMove(t)}),{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout((function(){e.setState({renderOnlyActive:!1})}),0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.index;"number"===typeof t&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,f.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var e=this;return{slideUpdateHeight:function(){e.updateHeight()}}}},{key:"setIndexCurrent",value:function(e){if(this.props.animateTransitions||this.indexCurrent===e||this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,n=b.transform[t](100*e);this.containerNode.style.WebkitTransform=n,this.containerNode.style.transform=n}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e,t,n=this,r=this.props,o=(r.action,r.animateHeight),s=r.animateTransitions,l=r.axis,c=r.children,d=r.containerStyle,u=r.disabled,f=(r.disableLazyLoading,r.enableMouseEvents),h=(r.hysteresis,r.ignoreNativeScroll,r.index,r.onChangeIndex,r.onSwitching,r.onTransitionEnd,r.resistance,r.slideStyle),y=r.slideClassName,x=r.springConfig,S=r.style,O=(r.threshold,(0,i.default)(r,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"])),w=this.state,j=w.displaySameSlide,C=w.heightLatest,M=w.indexLatest,k=w.isDragging,L=w.renderOnlyActive,N=u?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},T=!u&&f?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},P=(0,a.default)({},m,h);if(k||!s||j)e="all 0s ease 0s",t="all 0s ease 0s";else if(e=g("transform",x),t=g("-webkit-transform",x),0!==C){var I=", ".concat(g("height",x));e+=I,t+=I}var X={height:null,WebkitFlexDirection:b.flexDirection[l],flexDirection:b.flexDirection[l],WebkitTransition:t,transition:e};if(!L){var H=b.transform[l](100*this.indexCurrent);X.WebkitTransform=H,X.transform=H}return o&&(X.height=C),p.createElement(E.Provider,{value:this.getSwipeableViewsContext()},p.createElement("div",(0,a.default)({ref:this.setRootNode,style:(0,a.default)({},b.root[l],S)},O,N,T,{onScroll:this.handleScroll}),p.createElement("div",{ref:this.setContainerNode,style:(0,a.default)({},X,v,d),className:"react-swipeable-view-container"},p.Children.map(c,(function(e,t){if(L&&t!==M)return null;var r,a=!0;return t===M&&(a=!1,o&&(r=n.setActiveSlide,P.overflowY="hidden")),p.createElement("div",{ref:r,style:P,className:y,"aria-hidden":a,"data-swipeable":"true"},e)})))))}}]),t}(p.Component);j.displayName="ReactSwipableView",j.propTypes={},j.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var C=j;t.default=C},746:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},747:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},748:function(e,t,n){var r=n(749);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},749:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},750:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},751:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},752:function(e,t,n){var r=n(753),o=n(754);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},753:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},754:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},755:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},756:function(e,t,n){var r=n(757);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},757:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},758:function(e,t,n){"use strict";var r=n(537);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"checkIndexBounds",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"computeIndex",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"constant",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"getDisplaySameSlide",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"mod",{enumerable:!0,get:function(){return l.default}});var o=r(n(759)),a=r(n(760)),i=r(n(619)),s=r(n(761)),l=r(n(762))},759:function(e,t,n){"use strict";var r=n(537);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=(r(n(483)),function(e){e.index;var t=e.children;o.default.Children.count(t)});t.default=a},760:function(e,t,n){"use strict";var r=n(537);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.children,r=e.startIndex,i=e.startX,s=e.pageX,l=e.viewLength,c=e.resistance,d=o.default.Children.count(n)-1,u=r+(i-s)/l;c?u<0?u=Math.exp(u*a.default.RESISTANCE_COEF)-1:u>d&&(u=d+1-Math.exp((d-u)*a.default.RESISTANCE_COEF)):u<0?t=((u=0)-r)*l+s:u>d&&(t=((u=d)-r)*l+s);return{index:u,startX:t}};var o=r(n(0)),a=r(n(619))},761:function(e,t,n){"use strict";var r=n(537);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=function(e,t){var n=!1,r=function(e){return e?e.key:"empty"};if(e.children.length&&t.children.length){var a=o.default.Children.map(e.children,r)[e.index];if(null!==a&&void 0!==a)a===o.default.Children.map(t.children,r)[t.index]&&(n=!0)}return n};t.default=a},762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n=e%t;return n<0?n+t:n};t.default=r}}]);