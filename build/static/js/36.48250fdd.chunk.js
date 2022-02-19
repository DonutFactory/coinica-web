(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[36],{1101:function(e,t,o){"use strict";var r=o(2),n=o(4),a=o(36),i=o(0),c=(o(3),o(6)),l=o(8),s=o(12),p=o(402),u=o(399),d=o(269),m=o(47),f=o(254),b={enter:m.b.enteringScreen,exit:m.b.leavingScreen},v=i.forwardRef((function(e,t){var o=e.BackdropProps,a=e.children,l=e.classes,m=e.className,v=e.disableBackdropClick,h=void 0!==v&&v,g=e.disableEscapeKeyDown,x=void 0!==g&&g,y=e.fullScreen,O=void 0!==y&&y,j=e.fullWidth,T=void 0!==j&&j,w=e.maxWidth,k=void 0===w?"sm":w,E=e.onBackdropClick,S=e.onClose,W=e.onEnter,C=e.onEntered,B=e.onEntering,P=e.onEscapeKeyDown,R=e.onExit,D=e.onExited,M=e.onExiting,N=e.open,L=e.PaperComponent,A=void 0===L?f.a:L,F=e.PaperProps,H=void 0===F?{}:F,$=e.scroll,z=void 0===$?"paper":$,I=e.TransitionComponent,K=void 0===I?d.a:I,Y=e.transitionDuration,J=void 0===Y?b:Y,V=e.TransitionProps,X=e["aria-describedby"],_=e["aria-labelledby"],U=Object(n.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),q=i.useRef();return i.createElement(p.a,Object(r.a)({className:Object(c.a)(l.root,m),BackdropComponent:u.a,BackdropProps:Object(r.a)({transitionDuration:J},o),closeAfterTransition:!0},h?{disableBackdropClick:h}:{},{disableEscapeKeyDown:x,onEscapeKeyDown:P,onClose:S,open:N,ref:t},U),i.createElement(K,Object(r.a)({appear:!0,in:N,timeout:J,onEnter:W,onEntering:B,onEntered:C,onExit:R,onExiting:M,onExited:D,role:"none presentation"},V),i.createElement("div",{className:Object(c.a)(l.container,l["scroll".concat(Object(s.a)(z))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===q.current&&(q.current=null,E&&E(e),!h&&S&&S(e,"backdropClick"))},onMouseDown:function(e){q.current=e.target}},i.createElement(A,Object(r.a)({elevation:24,role:"dialog","aria-describedby":X,"aria-labelledby":_},H,{className:Object(c.a)(l.paper,l["paperScroll".concat(Object(s.a)(z))],l["paperWidth".concat(Object(s.a)(String(k)))],H.className,O&&l.paperFullScreen,T&&l.paperFullWidth)}),a))))}));t.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(v)},1102:function(e,t,o){"use strict";var r=o(2),n=o(4),a=o(0),i=(o(3),o(6)),c=o(8),l=o(141),s=a.forwardRef((function(e,t){var o=e.children,c=e.classes,s=e.className,p=e.disableTypography,u=void 0!==p&&p,d=Object(n.a)(e,["children","classes","className","disableTypography"]);return a.createElement("div",Object(r.a)({className:Object(i.a)(c.root,s),ref:t},d),u?o:a.createElement(l.a,{component:"h2",variant:"h6"},o))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},1103:function(e,t,o){"use strict";var r=o(2),n=o(4),a=o(0),i=(o(3),o(6)),c=o(8),l=a.forwardRef((function(e,t){var o=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,p=Object(n.a)(e,["classes","className","dividers"]);return a.createElement("div",Object(r.a)({className:Object(i.a)(o.root,c,s&&o.dividers),ref:t},p))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},1116:function(e,t,o){"use strict";var r=o(53),n=o(85);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(0)),i=(0,r(o(257)).default)(a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},1172:function(e,t,o){"use strict";var r=o(2),n=o(0),a=(o(3),o(8)),i=o(141),c=n.forwardRef((function(e,t){return n.createElement(i.a,Object(r.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(a.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},1173:function(e,t,o){"use strict";var r=o(2),n=o(4),a=o(0),i=(o(3),o(6)),c=o(8),l=a.forwardRef((function(e,t){var o=e.disableSpacing,c=void 0!==o&&o,l=e.classes,s=e.className,p=Object(n.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(r.a)({className:Object(i.a)(l.root,s,!c&&l.spacing),ref:t},p))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},1174:function(e,t,o){"use strict";var r=o(2),n=o(56),a=o(4),i=o(36),c=o(0),l=o(15),s=(o(3),o(6)),p=o(394),u=o(27),d=o(8),m=o(12),f=o(434),b=o(1168),v=o(13),h=o(185),g=o(55),x=o(129),y=o(120),O=o(43);function j(e){return Math.round(1e5*e)/1e5}var T=!1,w=null;var k=c.forwardRef((function(e,t){var o=e.arrow,i=void 0!==o&&o,u=e.children,d=e.classes,j=e.disableFocusListener,k=void 0!==j&&j,E=e.disableHoverListener,S=void 0!==E&&E,W=e.disableTouchListener,C=void 0!==W&&W,B=e.enterDelay,P=void 0===B?100:B,R=e.enterNextDelay,D=void 0===R?0:R,M=e.enterTouchDelay,N=void 0===M?700:M,L=e.id,A=e.interactive,F=void 0!==A&&A,H=e.leaveDelay,$=void 0===H?0:H,z=e.leaveTouchDelay,I=void 0===z?1500:z,K=e.onClose,Y=e.onOpen,J=e.open,V=e.placement,X=void 0===V?"bottom":V,_=e.PopperComponent,U=void 0===_?b.a:_,q=e.PopperProps,G=e.title,Q=e.TransitionComponent,Z=void 0===Q?f.a:Q,ee=e.TransitionProps,te=Object(a.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),oe=Object(O.a)(),re=c.useState(),ne=re[0],ae=re[1],ie=c.useState(null),ce=ie[0],le=ie[1],se=c.useRef(!1),pe=c.useRef(),ue=c.useRef(),de=c.useRef(),me=c.useRef(),fe=Object(y.a)({controlled:J,default:!1,name:"Tooltip",state:"open"}),be=Object(n.a)(fe,2),ve=be[0],he=be[1],ge=ve,xe=Object(h.a)(L);c.useEffect((function(){return function(){clearTimeout(pe.current),clearTimeout(ue.current),clearTimeout(de.current),clearTimeout(me.current)}}),[]);var ye=function(e){clearTimeout(w),T=!0,he(!0),Y&&Y(e)},Oe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var o=u.props;"mouseover"===t.type&&o.onMouseOver&&e&&o.onMouseOver(t),se.current&&"touchstart"!==t.type||(ne&&ne.removeAttribute("title"),clearTimeout(ue.current),clearTimeout(de.current),P||T&&D?(t.persist(),ue.current=setTimeout((function(){ye(t)}),T?D:P)):ye(t))}},je=Object(x.a)(),Te=je.isFocusVisible,we=je.onBlurVisible,ke=je.ref,Ee=c.useState(!1),Se=Ee[0],We=Ee[1],Ce=function(){Se&&(We(!1),we())},Be=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){ne||ae(t.currentTarget),Te(t)&&(We(!0),Oe()(t));var o=u.props;o.onFocus&&e&&o.onFocus(t)}},Pe=function(e){clearTimeout(w),w=setTimeout((function(){T=!1}),800+$),he(!1),K&&K(e),clearTimeout(pe.current),pe.current=setTimeout((function(){se.current=!1}),oe.transitions.duration.shortest)},Re=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var o=u.props;"blur"===t.type&&(o.onBlur&&e&&o.onBlur(t),Ce()),"mouseleave"===t.type&&o.onMouseLeave&&t.currentTarget===ne&&o.onMouseLeave(t),clearTimeout(ue.current),clearTimeout(de.current),t.persist(),de.current=setTimeout((function(){Pe(t)}),$)}},De=function(e){se.current=!0;var t=u.props;t.onTouchStart&&t.onTouchStart(e)},Me=Object(v.a)(ae,t),Ne=Object(v.a)(ke,Me),Le=c.useCallback((function(e){Object(g.a)(Ne,l.findDOMNode(e))}),[Ne]),Ae=Object(v.a)(u.ref,Le);""===G&&(ge=!1);var Fe=!ge&&!S,He=Object(r.a)({"aria-describedby":ge?xe:null,title:Fe&&"string"===typeof G?G:null},te,u.props,{className:Object(s.a)(te.className,u.props.className),onTouchStart:De,ref:Ae}),$e={};C||(He.onTouchStart=function(e){De(e),clearTimeout(de.current),clearTimeout(pe.current),clearTimeout(me.current),e.persist(),me.current=setTimeout((function(){Oe()(e)}),N)},He.onTouchEnd=function(e){u.props.onTouchEnd&&u.props.onTouchEnd(e),clearTimeout(me.current),clearTimeout(de.current),e.persist(),de.current=setTimeout((function(){Pe(e)}),I)}),S||(He.onMouseOver=Oe(),He.onMouseLeave=Re(),F&&($e.onMouseOver=Oe(!1),$e.onMouseLeave=Re(!1))),k||(He.onFocus=Be(),He.onBlur=Re(),F&&($e.onFocus=Be(!1),$e.onBlur=Re(!1)));var ze=c.useMemo((function(){return Object(p.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ce),element:ce}}}},q)}),[ce,q]);return c.createElement(c.Fragment,null,c.cloneElement(u,He),c.createElement(U,Object(r.a)({className:Object(s.a)(d.popper,F&&d.popperInteractive,i&&d.popperArrow),placement:X,anchorEl:ne,open:!!ne&&ge,id:He["aria-describedby"],transition:!0},$e,ze),(function(e){var t=e.placement,o=e.TransitionProps;return c.createElement(Z,Object(r.a)({timeout:oe.transitions.duration.shorter},o,ee),c.createElement("div",{className:Object(s.a)(d.tooltip,d["tooltipPlacement".concat(Object(m.a)(t.split("-")[0]))],se.current&&d.touch,i&&d.tooltipArrow)},G,i?c.createElement("span",{className:d.arrow,ref:le}):null))})))}));t.a=Object(d.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(u.a)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(j(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(u.a)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(j(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(i.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(i.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(i.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(i.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(k)},464:function(e,t,o){"use strict";var r=o(0),n=o.n(r);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}t.a=function(e,t){void 0===t&&(t={});var i,c=t,l=c.volume,s=void 0===l?1:l,p=c.playbackRate,u=void 0===p?1:p,d=c.soundEnabled,m=void 0===d||d,f=c.interrupt,b=void 0!==f&&f,v=c.onload,h=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(c,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),g=n.a.useRef(null),x=n.a.useRef(!1),y=n.a.useState(null),O=y[0],j=y[1],T=n.a.useState(null),w=T[0],k=T[1],E=function(){"function"===typeof v&&v.call(this),x.current&&j(1e3*this.duration()),k(this)};i=function(){return o.e(42).then(o.t.bind(null,485,7)).then((function(t){var o;x.current||(g.current=null!==(o=t.Howl)&&void 0!==o?o:t.default.Howl,x.current=!0,new g.current(a({src:Array.isArray(e)?e:[e],volume:s,rate:u,onload:E},h)))})),function(){x.current=!1}},Object(r.useEffect)(i,[]),n.a.useEffect((function(){g.current&&w&&k(new g.current(a({src:Array.isArray(e)?e:[e],volume:s,onload:E},h)))}),[JSON.stringify(e)]),n.a.useEffect((function(){w&&(w.volume(s),w.rate(u))}),[s,u]);var S=n.a.useCallback((function(e){"undefined"===typeof e&&(e={}),w&&(m||e.forceSoundEnabled)&&(b&&w.stop(),e.playbackRate&&w.rate(e.playbackRate),w.play(e.id))}),[w,m,b]),W=n.a.useCallback((function(e){w&&w.stop(e)}),[w]),C=n.a.useCallback((function(e){w&&w.pause(e)}),[w]);return[S,{sound:w,stop:W,pause:C,duration:O}]}}}]);