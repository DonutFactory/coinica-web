(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[30],{1086:function(e,t,a){e.exports={container:"GamesHistory_container__3ss7N",wrapperTitle:"GamesHistory_wrapperTitle__3QL4q",txDate:"GamesHistory_txDate__3A50W",wrapperTiles:"GamesHistory_wrapperTiles__2sxOU",tiles:"GamesHistory_tiles__2Nwaj",numberOfCoin:"GamesHistory_numberOfCoin__fh54Y",txId:"GamesHistory_txId__2LYmV"}},1087:function(e,t,a){e.exports={dialog:"Games_dialog__2G5WU",dialogTitle:"Games_dialogTitle__37EYb",gamesText:"Games_gamesText__2_4fO",dialogContent:"Games_dialogContent__2r8v8",historyList:"Games_historyList__2VM5R"}},1088:function(e,t,a){"use strict";var n=a(2),o=a(4),r=a(37),i=a(0),c=(a(3),a(5)),s=a(8),l=a(12),d=a(390),u=a(388),p=a(259),m=a(47),b=a(246),j={enter:m.b.enteringScreen,exit:m.b.leavingScreen},h=i.forwardRef((function(e,t){var a=e.BackdropProps,r=e.children,s=e.classes,m=e.className,h=e.disableBackdropClick,g=void 0!==h&&h,x=e.disableEscapeKeyDown,f=void 0!==x&&x,v=e.fullScreen,O=void 0!==v&&v,_=e.fullWidth,k=void 0!==_&&_,y=e.maxWidth,w=void 0===y?"sm":y,W=e.onBackdropClick,B=e.onClose,E=e.onEnter,N=e.onEntered,M=e.onEntering,C=e.onEscapeKeyDown,D=e.onExit,S=e.onExited,G=e.onExiting,T=e.open,H=e.PaperComponent,F=void 0===H?b.a:H,R=e.PaperProps,P=void 0===R?{}:R,I=e.scroll,A=void 0===I?"paper":I,L=e.TransitionComponent,Y=void 0===L?p.a:L,K=e.transitionDuration,$=void 0===K?j:K,U=e.TransitionProps,V=e["aria-describedby"],J=e["aria-labelledby"],q=Object(o.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),Q=i.useRef();return i.createElement(d.a,Object(n.a)({className:Object(c.a)(s.root,m),BackdropComponent:u.a,BackdropProps:Object(n.a)({transitionDuration:$},a),closeAfterTransition:!0},g?{disableBackdropClick:g}:{},{disableEscapeKeyDown:f,onEscapeKeyDown:C,onClose:B,open:T,ref:t},q),i.createElement(Y,Object(n.a)({appear:!0,in:T,timeout:$,onEnter:E,onEntering:M,onEntered:N,onExit:D,onExiting:G,onExited:S,role:"none presentation"},U),i.createElement("div",{className:Object(c.a)(s.container,s["scroll".concat(Object(l.a)(A))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===Q.current&&(Q.current=null,W&&W(e),!g&&B&&B(e,"backdropClick"))},onMouseDown:function(e){Q.current=e.target}},i.createElement(F,Object(n.a)({elevation:24,role:"dialog","aria-describedby":V,"aria-labelledby":J},P,{className:Object(c.a)(s.paper,s["paperScroll".concat(Object(l.a)(A))],s["paperWidth".concat(Object(l.a)(String(w)))],P.className,O&&s.paperFullScreen,k&&s.paperFullWidth)}),r))))}));t.a=Object(s.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(h)},1089:function(e,t,a){"use strict";var n=a(2),o=a(4),r=a(0),i=(a(3),a(5)),c=a(8),s=a(138),l=r.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,d=e.disableTypography,u=void 0!==d&&d,p=Object(o.a)(e,["children","classes","className","disableTypography"]);return r.createElement("div",Object(n.a)({className:Object(i.a)(c.root,l),ref:t},p),u?a:r.createElement(s.a,{component:"h2",variant:"h6"},a))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(l)},1090:function(e,t,a){"use strict";var n=a(2),o=a(4),r=a(0),i=(a(3),a(5)),c=a(8),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.dividers,l=void 0!==s&&s,d=Object(o.a)(e,["classes","className","dividers"]);return r.createElement("div",Object(n.a)({className:Object(i.a)(a.root,c,l&&a.dividers),ref:t},d))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},1102:function(e,t,a){e.exports={container:"MahjongMain_container__3FrZf",coverBg:"MahjongMain_coverBg__1FxQT",girlBg:"MahjongMain_girlBg__2yVa_",content:"MahjongMain_content__1gRAb",bgDiamondShape:"MahjongMain_bgDiamondShape__SfSd2",topButtonsWrapper:"MahjongMain_topButtonsWrapper__2zjB-",bottomButtonsWrapper:"MahjongMain_bottomButtonsWrapper__2W0__",startGameWrapper:"MahjongMain_startGameWrapper__20qOp",startGameText:"MahjongMain_startGameText__3Wmc8",btnGames:"MahjongMain_btnGames__2jzer",logo:"MahjongMain_logo__1hQw_",startGameBtnWrapper:"MahjongMain_startGameBtnWrapper__3MNc6",startGameBtn:"MahjongMain_startGameBtn__30goi",mj_3_button:"MahjongMain_mj_3_button__1blIW",mj_button:"MahjongMain_mj_button__1J5A0"}},1178:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a.n(n),r=a(59),i=a(6),c=a(20),s=a(0),l=a(23),d=a(28),u=a(111),p=a(456),m=a(721),b=a(11).e.assets_url,j="".concat(b,"/imgs/games/mahjong_1/home_screen/mj_logo.png"),h="".concat(b,"/imgs/games/mahjong_1/home_screen/girl_bg.png"),g="".concat(b,"/imgs/games/mahjong_1/home_screen/icon_help.png"),x=("".concat(b,"/imgs/games/mahjong_1/home_screen/icon_settings.png"),"".concat(b,"/imgs/games/mahjong_1/home_screen/icon_mydata.png")),f="".concat(b,"/imgs/games/mahjong_1/home_screen/icon_close.png"),v={startGame:"".concat(b,"/audio/games/mahjong/start_game.mp3"),option:"".concat(b,"/audio/games/mahjong/option.mp3"),back:"".concat(b,"/audio/games/mahjong/back.mp3"),mjHomeMainBg:"".concat(b,"/audio/games/mahjong/mh_top_bgm.mp3")},O=a(395),_=a(1088),k=a(1089),y=a(1090),w=a(396),W=a(474),B=a(1086),E=a.n(B),N=a(1),M=function(e){var t,a,n,o,r=e.id,i=e.title,c=e.tiles,s=e.txId,l=e.txDate,d=e.status,u=function(){return"win"===d?{colors:["#6FE5FF","#4486EB"],strokeWidth_2:"strokeBlue2",strokeWidth_4:"strokeBlue4"}:"lose"===d?{colors:["#E09EFF","#581FF9"],strokeWidth_2:"strokeViolet2",strokeWidth_4:"strokeViolet4"}:"completehand"===d?{colors:["#F8D734","#FFF880","#F8D734","#DC961C"],strokeWidth_2:"strokeDarkYellow2",strokeWidth_4:"strokeDarkYellow4"}:{}},p=function(e,t,a){return Object(N.jsxs)("svg",{xmlns:"//www.w3.org/2000/svg",width:"100%",height:"100%",className:t,children:[Object(N.jsx)("defs",{children:Object(N.jsx)("linearGradient",{id:"gradient-".concat(r),y1:"0",y2:"1",children:(null===a||void 0===a?void 0:a.length)&&a.map((function(e,t){return Object(N.jsx)("stop",{stopColor:e,offset:t},t)}))})}),Object(N.jsx)("text",{fill:"url(#gradient-".concat(r,")"),x:"1",y:"15",strokeLinejoin:"round",children:e})]})};return Object(N.jsxs)("div",{className:E.a.container,children:[Object(N.jsx)("div",{className:E.a.wrapperTitle,children:p(i,null===(t=u())||void 0===t?void 0:t.strokeWidth_4,null===(a=u())||void 0===a?void 0:a.colors)}),Object(N.jsx)("div",{className:E.a.txDate,children:l}),Object(N.jsx)("div",{className:E.a.wrapperTiles,children:function(){var e=[];if(c.length)for(var t=0;t<c.length;t++){var a,n=null===(a=Object(W.b)(c[t]))||void 0===a?void 0:a.src;e.push(Object(N.jsx)("img",{src:n,className:E.a.tiles,alt:"tile",width:"21",height:"31"},t))}return e}()}),Object(N.jsx)("div",{className:E.a.numberOfCoin,children:p("+100 EOS",null===(n=u())||void 0===n?void 0:n.strokeWidth_2,null===(o=u())||void 0===o?void 0:o.colors)}),Object(N.jsxs)("div",{className:E.a.txId,children:[" TxID: ",s]})]})},C=a(1087),D=a.n(C),S=[{title:"14th SUCCESSFUL HI-LO",status:"win",txId:"8273f58b",txDate:"9/9 23:59",tiles:[1,2,45,36,89,29,4,7,10,23,67,100,78,34]},{title:"Failed Hi-LO",status:"lose",txId:"8273f58b",txDate:"9/9 23:59",tiles:[1,2,45,36,89,29,4,7,10,23,67,100,78,34]},{title:"Complete Hand",status:"completehand",txId:"8273f58b",txDate:"9/9 23:59",tiles:[1,2,45,36,89,29,4,7,10,23,67,100,78,34]},{title:"Complete Hand",status:"completehand",txId:"8273f58b",txDate:"9/9 23:59",tiles:[1,2,45,36,89,29,4,7,10,23,67,100,78,34]},{title:"Complete Hand",status:"completehand",txId:"8273f58b",txDate:"9/9 23:59",tiles:[1,2,45,36,89,29,4,7,10,23,67,100,78,34]},{title:"Complete Hand",status:"completehand",txId:"8273f58b",txDate:"9/9 23:59",tiles:[1,2,45,36,89,29,4,7,10,23,67,100,78,34]}],G=Object(O.a)((function(e){return{root:{"& .MuiDialog-container":{justifyContent:"flex-end"},"& .MuiBackdrop-root":{position:"absolute"},"& .MuiDialog-paperScrollPaper":{marginTop:0,marginBottom:0,marginRight:0,maxHeight:"100%",borderRadius:0}},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),padding:0}}})),T=function(e){var t=e.show,a=e.onHide,n=G();return Object(N.jsxs)(_.a,{disablePortal:!0,open:t,onClose:a,className:"".concat(n.root," ").concat(D.a.dialog),children:[Object(N.jsxs)(k.a,{className:D.a.dialogTitle,children:[Object(N.jsx)("span",{className:"".concat(D.a.gamesText," ").concat(D.a.strokeBlue2),children:"Games"}),Object(N.jsx)(w.a,{"aria-label":"close",className:n.closeButton,onClick:a,children:Object(N.jsx)("img",{src:f,alt:"icon",width:"58",height:"58"})})]}),Object(N.jsx)(y.a,{className:D.a.dialogContent,children:Object(N.jsx)("div",{className:D.a.historyList,children:S.length?S.map((function(e,t){return Object(N.jsx)(M,{id:t,title:e.title,txId:e.txId,txDate:e.txDate,status:e.status,tiles:e.tiles},t)})):"No game data history."})})]})},H=a(607),F=a(52),R=a(1102),P=a.n(R),I=a(489);t.default=function(){var e=Object(l.g)(),t=Object(d.d)((function(e){return e})),a=(null===t||void 0===t?void 0:t.mahjong_hilo).game_data,n=(null===t||void 0===t?void 0:t.platform).account,b=null===n||void 0===n?void 0:n.username,f=null===n||void 0===n?void 0:n.id,O=Object(s.useState)([]),_=Object(c.a)(O,2),k=(_[0],_[1]),y=Object(s.useState)({hiloWinRate:0,consHilo:0,maxPayout:0,shortestRound:0,avgWinScore:0,avgWinRound:0}),w=Object(c.a)(y,2),W=w[0],B=w[1],E=Object(s.useState)([]),M=Object(c.a)(E,2),C=M[0],D=M[1],S=Object(s.useState)({tutorial:!1,myData:!1,ranking:!1,myGames:!1}),G=Object(c.a)(S,2),R=G[0],A=G[1],L=Object(s.useState)(!1),Y=Object(c.a)(L,2),K=Y[0],$=Y[1],U={volume:.5},V=Object(p.a)(v.mjHomeMainBg,{volume:.4,loop:!0,onload:function(){$(!0)}}),J=Object(c.a)(V,2)[1].sound,q=Object(p.a)(v.startGame,U),Q=Object(c.a)(q,1)[0],X=Object(p.a)(v.option,U),z=Object(c.a)(X,1)[0],Z=Object(p.a)(v.back,U),ee=Object(c.a)(Z,1)[0],te=function(){R.tutorial?ee():z(),A((function(e){return Object(i.a)(Object(i.a)({},e),{},{tutorial:!e.tutorial})}))},ae=function(){R.myData?ee():z(),A((function(e){return Object(i.a)(Object(i.a)({},e),{},{myData:!e.myData})}))},ne=function(){R.ranking?ee():z(),A((function(e){return Object(i.a)(Object(i.a)({},e),{},{ranking:!e.ranking})}))},oe=function(){R.myGames?ee():z(),A((function(e){return Object(i.a)(Object(i.a)({},e),{},{myGames:!e.myGames})}))},re=function(){var t=Object(r.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}Q(),e.push("/game/mahjong/gameplay"),t.next=20;break;case 5:if(b){t.next=8;break}return u.b.error(Object(F.a)("mj.main.error.login.msg")),t.abrupt("return");case 8:return t.prev=8,t.next=11,Object(m.q)();case 11:return t.next=13,Object(m.t)(b);case 13:u.b.success(Object(F.a)("mj.main.game.init")),e.push("/game/mahjong/gameplay"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(8),u.b.error(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[8,17]])})));return function(){return t.apply(this,arguments)}}(),ie=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.l)();case 3:t=e.sent,D(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error fetching ranking",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.n)(f);case 3:t=e.sent,k(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error fetching history",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(r.a)(o.a.mark((function e(){var t,a,n,r,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.j)();case 3:return e.next=5,e.sent.data;case 5:return t=e.sent,e.next=8,Object(m.k)();case 8:return e.next=10,e.sent.data;case 10:return a=e.sent,e.next=13,Object(m.i)();case 13:return e.next=15,e.sent.data;case 15:return n=e.sent,e.next=18,Object(m.m)();case 18:return e.next=20,e.sent.data;case 20:return r=e.sent,e.next=23,Object(m.h)();case 23:return e.next=25,e.sent.data;case 25:return i=e.sent,e.next=28,Object(m.g)();case 28:return e.next=30,e.sent.data;case 30:c=e.sent,B({hiloWinRate:t,maxPayout:a,consHilo:n,shortestRound:r,avgWinScore:i,avgWinRound:c}),e.next=37;break;case 34:e.prev=34,e.t0=e.catch(0),console.log("error fetching my data",e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,34]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n&&(Object(m.t)(b),ce(),se(),ie())}),[n]),Object(s.useEffect)((function(){return J&&K&&J.stop(),function(){J&&J.stop()}}),[J,K]),Object(N.jsxs)("div",{className:P.a.container,children:[Object(N.jsx)(H.e,{show:R.myData,userId:f,username:b,data:W,onHide:ae}),Object(N.jsx)(H.h,{show:R.tutorial,onHide:te}),Object(N.jsx)(H.g,{data:C,show:R.ranking,onHide:ne}),Object(N.jsx)(T,{show:R.myGames,onHide:oe}),Object(N.jsxs)("div",{className:P.a.coverBg,children:[Object(N.jsx)("img",{className:P.a.girlBg,src:h,alt:"girl background"}),Object(N.jsxs)("div",{className:P.a.content,children:[Object(N.jsxs)("div",{className:P.a.topButtonsWrapper,children:[Object(N.jsx)("button",{className:"".concat(P.a.bgDiamondShape," ").concat(P.a.btnGames),onClick:oe,children:Object(F.a)("mj.main.games")}),Object(N.jsx)("button",{className:P.a.bgDiamondShape,onClick:ne,children:Object(F.a)("mj.main.rank")})]}),Object(N.jsx)("div",{className:P.a.startGameWrapper,children:Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:j,className:"".concat(P.a.logo),alt:"logo"}),Object(N.jsx)("div",{className:P.a.startGameBtnWrapper,children:Object(N.jsx)("button",{className:"".concat(P.a.mj_button," ").concat(P.a.startGameBtn),type:"button",onClick:re,children:Object(N.jsx)(I.a,{id:"start-game",text:Object(F.a)("mj.main.start_game"),fromColor:"#F7B820",toColor:"#FDE51F",className:P.a.startGameText})})})]})}),Object(N.jsxs)("div",{className:P.a.bottomButtonsWrapper,children:[Object(N.jsxs)("button",{className:"".concat(P.a.mj_button," ").concat(P.a.mj_3_button),type:"button",onClick:ae,children:[Object(N.jsx)("img",{src:x,alt:"icon",width:"20",height:"26"}),Object(F.a)("mj.main.my_data")]}),Object(N.jsxs)("button",{className:"".concat(P.a.mj_button," ").concat(P.a.mj_3_button),type:"button",onClick:te,children:[Object(N.jsx)("img",{src:g,alt:"icon",width:"17",height:"26"}),Object(F.a)("mj.main.tutorial")]})]})]})]})]})}},456:function(e,t,a){"use strict";var n=a(0),o=a.n(n);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.a=function(e,t){void 0===t&&(t={});var i,c=t,s=c.volume,l=void 0===s?1:s,d=c.playbackRate,u=void 0===d?1:d,p=c.soundEnabled,m=void 0===p||p,b=c.interrupt,j=void 0!==b&&b,h=c.onload,g=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(c,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),x=o.a.useRef(null),f=o.a.useRef(!1),v=o.a.useState(null),O=v[0],_=v[1],k=o.a.useState(null),y=k[0],w=k[1],W=function(){"function"===typeof h&&h.call(this),f.current&&_(1e3*this.duration()),w(this)};i=function(){return a.e(41).then(a.t.bind(null,481,7)).then((function(t){var a;f.current||(x.current=null!==(a=t.Howl)&&void 0!==a?a:t.default.Howl,f.current=!0,new x.current(r({src:Array.isArray(e)?e:[e],volume:l,rate:u,onload:W},g)))})),function(){f.current=!1}},Object(n.useEffect)(i,[]),o.a.useEffect((function(){x.current&&y&&w(new x.current(r({src:Array.isArray(e)?e:[e],volume:l,onload:W},g)))}),[JSON.stringify(e)]),o.a.useEffect((function(){y&&(y.volume(l),y.rate(u))}),[l,u]);var B=o.a.useCallback((function(e){"undefined"===typeof e&&(e={}),y&&(m||e.forceSoundEnabled)&&(j&&y.stop(),e.playbackRate&&y.rate(e.playbackRate),y.play(e.id))}),[y,m,j]),E=o.a.useCallback((function(e){y&&y.stop(e)}),[y]),N=o.a.useCallback((function(e){y&&y.pause(e)}),[y]);return[B,{sound:y,stop:E,pause:N,duration:O}]}}}]);