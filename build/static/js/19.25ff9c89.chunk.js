(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[19],{1105:function(e,a,t){e.exports={container:"TileCategory_container__1Ah1r",category:"TileCategory_category__aF40f",tiles:"TileCategory_tiles__2sR9I"}},1106:function(e,a,t){e.exports={container:"HiLoDraw_container__2WBx4",loseBg:"HiLoDraw_loseBg__1_2OD",autoPlayWrapper:"HiLoDraw_autoPlayWrapper__338q7",tiles:"HiLoDraw_tiles__86PAf",btnAutoPlayWrapper:"HiLoDraw_btnAutoPlayWrapper__2tcFH",btnAutoPlay:"HiLoDraw_btnAutoPlay__3ff-r",hiLoDrawWrapper:"HiLoDraw_hiLoDrawWrapper__1IGtA",btnHigh:"HiLoDraw_btnHigh__x_wSG",btnDraw:"HiLoDraw_btnDraw__pda59",btnLow:"HiLoDraw_btnLow__2XBC8"}},1107:function(e,a,t){e.exports={container:"Turn_container__1WrIu",tilesWrapper:"Turn_tilesWrapper__1NbkR",turnText:"Turn_turnText__75uGO",rowTiles:"Turn_rowTiles__2Sz-X"}},1108:function(e,a,t){e.exports={container:"Kong_container__1SKsD",content:"Kong_content__WqwSl",itemMenu:"Kong_itemMenu__3-iAJ",itemCategory:"Kong_itemCategory__3SB0f",itemActions:"Kong_itemActions__3Svhl",itemTurn:"Kong_itemTurn__20spD",itemKong:"Kong_itemKong__1ScLA",itemWallet:"Kong_itemWallet__1HfXt",itemHand:"Kong_itemHand__9t2AO",menuContainer:"Kong_menuContainer__cmm0M",textDarkYellow:"Kong_textDarkYellow__2mEVU",tilesWrapper:"Kong_tilesWrapper__1NPj8",kongText:"Kong_kongText__3F3lV",rowTiles:"Kong_rowTiles__hPF1x"}},1109:function(e,a,t){e.exports={container:"Wallet_container__18JLT",wrapper:"Wallet_wrapper__QvJdg",btnLabel:"Wallet_btnLabel__2mPWr",winsBalWrapper:"Wallet_winsBalWrapper__3hA_b",btnWithdraw:"Wallet_btnWithdraw__20iTx",btnTransfer:"Wallet_btnTransfer__2yknD"}},1110:function(e,a,t){e.exports={container:"Hand_container__LsS5y",highlightTile:"Hand_highlightTile__30aYB",wrapper:"Hand_wrapper__cvc1T"}},1111:function(e,a,t){e.exports={container:"MahjongGameplay_container__4b7Uk",content:"MahjongGameplay_content__3a3rY",itemMenu:"MahjongGameplay_itemMenu__3KRNQ",itemCategory:"MahjongGameplay_itemCategory__3oLWl",itemActions:"MahjongGameplay_itemActions__ed8iH",itemTurn:"MahjongGameplay_itemTurn__1lMAU",itemKong:"MahjongGameplay_itemKong__Al7O2",itemWallet:"MahjongGameplay_itemWallet__3bKBv",itemHand:"MahjongGameplay_itemHand__2vr25",menuContainer:"MahjongGameplay_menuContainer__15mF_",textDarkYellow:"MahjongGameplay_textDarkYellow__LkVzR"}},1160:function(e,a,t){"use strict";t.r(a);var n=t(113),o=t(35),c=t.n(o),i=t(59),s=t(6),r=t(19),l=t(0),m=t(26),g=t(23),d=t(111),j=t(447),u=t(458),b=t(1104),_=t.n(b),h=t(606),p=t.n(h),O=t(1),f=function(e){var a=e.onClick;return Object(O.jsx)("button",{onClick:a,className:p.a.menu,type:"button",children:Object(O.jsx)(_.a,{})})},v=function(e){var a=e.onClick,t=e.width,n=e.height,o=e.label,c=e.labelClass,i=e.containerClass,s=e.isDisabled;return Object(O.jsx)("button",{className:"".concat(p.a.solidContainer," ").concat(i||""," ").concat(s?p.a.disabled:""),style:{width:t,height:n},onClick:s?void 0:a,children:Object(O.jsx)("div",{className:"".concat(c),children:o})})},w=function(e){var a=e.imgSrc,t=e.leftIconSrc,n=e.onClick,o=e.label,c=e.labelSpan,i=e.containerClass,s=e.isDisabled,r=e.title;return Object(O.jsxs)("button",{style:{backgroundImage:"url(".concat(a,")")},className:"".concat(i," ").concat(p.a.gradientContainer," ").concat(s?p.a.disabled:""),onClick:s?void 0:n,title:r,children:[Object(O.jsx)("img",{className:p.a.icon,src:t,alt:"arrow",width:"30",height:"30"}),Object(O.jsxs)("div",{className:"".concat(p.a.gradientLabel," text-stroke-brown"),children:[o," ",Object(O.jsx)("span",{children:c})]})]})},y=t(476),x=t(52),C=t(490),k=t(1105),T=t.n(k),W=function(e){var a=e.tiles;return Object(O.jsxs)("div",{className:T.a.container,children:[Object(O.jsx)(C.a,{text:Object(x.a)("mj.gameplay.winds"),fromColor:"#F8E37F",toColor:"#EA9633",className:[T.a.category,"strokeBrown5"].join(" ")}),Object(O.jsx)("div",{className:T.a.tiles,children:a.length&&a.map((function(e,a){return Object(O.jsx)("img",{src:Object(y.a)(e),alt:"tile",height:"60",width:"40"},a)}))})]})},D=t(11),N=D.e.assets_url,H=("".concat(N,"/imgs/games/mahjong_1/home_screen/profile_pic_bg.png"),"".concat(N,"/imgs/games/mahjong_1/home_screen/btn_close.png"),"".concat(N,"/imgs/games/mahjong_1/pass.png"),"".concat(N,"/imgs/games/mahjong_1/home_screen/arrow_yellow.png"),"".concat(N,"/imgs/games/mahjong_1/home_screen/rank_1st.png"),"".concat(N,"/imgs/games/mahjong_1/home_screen/rank_2nd.png"),"".concat(N,"/imgs/games/mahjong_1/home_screen/rank_3rd.png"),"".concat(N,"/imgs/games/mahjong_1/lose.png"),"".concat(N,"/imgs/games/mahjong_1/complete_hand.png"),"".concat(N,"/imgs/games/mahjong_1/kong.png"),"".concat(N,"/imgs/games/mahjong_1/prediction_fail.png"),"".concat(N,"/imgs/games/mahjong_1/prediction_success.png"),{bamboo_1:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_1.png"),bamboo_2:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_2.png"),bamboo_3:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_3.png"),bamboo_4:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_4.png"),bamboo_5:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_5.png"),bamboo_6:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_6.png"),bamboo_7:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_7.png"),bamboo_8:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_8.png"),bamboo_9:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/bamboo_9.png"),characters_1:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_1.png"),characters_2:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_2.png"),characters_3:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_3.png"),characters_4:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_4.png"),characters_5:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_5.png"),characters_6:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_6.png"),characters_7:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_7.png"),characters_8:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_8.png"),characters_9:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/characters_9.png"),dots_1:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_1.png"),dots_2:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_2.png"),dots_3:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_3.png"),dots_4:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_4.png"),dots_5:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_5.png"),dots_6:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_6.png"),dots_7:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_7.png"),dots_8:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_8.png"),dots_9:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dots_9.png"),dragon_green:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dragon_green.png"),dragon_red:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dragon_red.png"),dragon_white:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/dragon_white.png"),ura:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/ura.png"),wind_east:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/wind_east.png"),wind_north:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/wind_north.png"),wind_south:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/wind_south.png"),wind_west:"".concat(N,"/imgs/games/mahjong_1/mahjong_tiles/wind_west.png")});"".concat(N,"/audio/games/mahjong/home.mp3"),"".concat(N,"/audio/games/mahjong/error.mp3");function S(e){return e>136||e<1?null:function(e){return e<=4?{src:H.characters_1,category:"characters_1"}:e<=8?{src:H.characters_2,category:"characters_2"}:e<=12?{src:H.characters_3,category:"characters_3"}:e<=16?{src:H.characters_4,category:"characters_4"}:e<=20?{src:H.characters_5,category:"characters_5"}:e<=24?{src:H.characters_6,category:"characters_6"}:e<=28?{src:H.characters_7,category:"characters_7"}:e<=32?{src:H.characters_8,category:"characters_8"}:e<=36?{src:H.characters_9,category:"characters_9"}:e<=40?{src:H.dots_1,category:"dots_1"}:e<=44?{src:H.dots_2,category:"dots_2"}:e<=48?{src:H.dots_3,category:"dots_3"}:e<=52?{src:H.dots_4,category:"dots_4"}:e<=56?{src:H.dots_5,category:"dots_5"}:e<=60?{src:H.dots_6,category:"dots_6"}:e<=64?{src:H.dots_7,category:"dots_7"}:e<=68?{src:H.dots_8,category:"dots_8"}:e<=72?{src:H.dots_9,category:"dots_9"}:e<=76?{src:H.bamboo_1,category:"bamboo_1"}:e<=80?{src:H.bamboo_2,category:"bamboo_2"}:e<=84?{src:H.bamboo_3,category:"bamboo_3"}:e<=88?{src:H.bamboo_4,category:"bamboo_4"}:e<=92?{src:H.bamboo_5,category:"bamboo_5"}:e<=96?{src:H.bamboo_6,category:"bamboo_6"}:e<=100?{src:H.bamboo_7,category:"bamboo_7"}:e<=104?{src:H.bamboo_8,category:"bamboo_8"}:e<=108?{src:H.bamboo_9,category:"bamboo_9"}:e<=112?{src:H.wind_east,category:"wind_east"}:e<=116?{src:H.wind_south,category:"wind_south"}:e<=120?{src:H.wind_west,category:"wind_west"}:e<=124?{src:H.wind_north,category:"wind_north"}:e<=128?{src:H.dragon_red,category:"dragon_red"}:e<=132?{src:H.dragon_white,category:"dragon_white"}:e<=136?{src:H.dragon_green,category:"dragon_green"}:null}(e)}var L=D.e.assets_url,A="".concat(L,"/imgs/games/mahjong_1/mahjong_tiles/ura.png"),B=("".concat(L,"/imgs/games/mahjong_1/gameplay/btn_menu.png"),"".concat(L,"/imgs/games/mahjong_1/gameplay/arrow.png")),M="".concat(L,"/imgs/games/mahjong_1/gameplay/equals.png"),P="".concat(L,"/imgs/games/mahjong_1/gameplay/btn_bg_high.png"),G="".concat(L,"/imgs/games/mahjong_1/gameplay/btn_bg_draw.png"),K="".concat(L,"/imgs/games/mahjong_1/gameplay/btn_bg_low.png"),F={deposit:"".concat(L,"/audio/games/mahjong/deposit.mp3"),withdraw:"".concat(L,"/audio/games/mahjong/withdraw.mp3"),transfer:"".concat(L,"/audio/games/mahjong/transfer.mp3"),playHilo:"".concat(L,"/audio/games/mahjong/playhilo.mp3"),mjGameMainBg_1:"".concat(L,"/audio/games/mahjong/mh_gamebgm01.mp3"),mjGameMainBg_2:"".concat(L,"/audio/games/mahjong/mh_gamebgm02.mp3"),mjGameMainBg_3:"".concat(L,"/audio/games/mahjong/mh_gamebgm03.mp3"),mjPlayAgainBg:"".concat(L,"/audio/games/mahjong/mh_playagainbgm.mp3"),high:"".concat(L,"/audio/games/mahjong/high.mp3"),draw:"".concat(L,"/audio/games/mahjong/draw.mp3"),low:"".concat(L,"/audio/games/mahjong/low.mp3"),win:"".concat(L,"/audio/games/mahjong/win.mp3"),lose:"".concat(L,"/audio/games/mahjong/lose.mp3"),error:"".concat(L,"/audio/games/mahjong/error.mp3"),playAgain:"".concat(L,"/audio/games/mahjong/start_game.mp3"),playCompleteHand:"".concat(L,"/audio/games/mahjong/completehand.mp3"),playKong:"".concat(L,"/audio/games/mahjong/kong.mp3"),playPass:"".concat(L,"/audio/games/mahjong/pass.mp3")},E=function(e){var a,t,n=e.standard,o=e.current,c=e.isGameInitialized,i=e.betStatus,s=Object(l.useState)(null),m=Object(r.a)(s,2),g=m[0],d=m[1],j=Object(l.useState)(null),u=Object(r.a)(j,2),b=u[0],_=u[1];return Object(l.useEffect)((function(){c&&!n&&o?(d(o),_(null)):c&&n&&o?(d(n),_(Boolean(i)?o:null)):(d(null),_(null))}),[c,n,o,i]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:g?null===(a=S(g))||void 0===a?void 0:a.src:A,alt:"standard",width:"90",height:"135"}),Object(O.jsx)("img",{src:b?null===(t=S(b))||void 0===t?void 0:t.src:A,alt:"prediction",width:"90",height:"135"})]})},I=t(1106),R=t.n(I),z=t(608),Y=function(e){var a=e.betStatus,t=e.oddsPerTile,n=t.low,o=t.draw,c=t.high,i=e.standardTile,s=e.predictionTile,r=e.isGameInitialized,l=e.isWin,m=e.showResult,g=e.playWin,d=e.playLose,j=e.onPlayHigh,u=e.onPlayDraw,b=e.onPlayLow,_=function(e){return e?Number(e).toFixed(8):0},h=function(e){return 0===Math.ceil(e)};return Object(O.jsxs)("div",{className:R.a.container,children:[m&&!l&&Object(O.jsx)("div",{className:R.a.loseBg}),m&&Object(O.jsx)(z.f,{isWin:l,showResult:m,playWin:g,playLose:d}),Object(O.jsx)("div",{className:R.a.autoPlayWrapper,children:Object(O.jsx)("div",{className:R.a.tiles,children:Object(O.jsx)(E,{standard:i,current:s,isGameInitialized:r,betStatus:a})})}),Object(O.jsxs)("div",{className:R.a.hiLoDrawWrapper,children:[Object(O.jsx)(w,{isDisabled:!r||Boolean(a)||h(Number(c)),containerClass:R.a.btnHigh,label:Object(x.a)("mj.gameplay.high.button"),labelSpan:_(c),title:c,imgSrc:P,leftIconSrc:B,onClick:j}),Object(O.jsx)(w,{isDisabled:!r||Boolean(a)||h(Number(o)),containerClass:R.a.btnDraw,label:Object(x.a)("mj.gameplay.draw.button"),labelSpan:_(o),title:o,imgSrc:G,leftIconSrc:M,onClick:u}),Object(O.jsx)(w,{isDisabled:!r||Boolean(a)||h(Number(n)),containerClass:R.a.btnLow,label:Object(x.a)("mj.gameplay.low.button"),labelSpan:_(n),title:n,imgSrc:K,leftIconSrc:B,onClick:b})]})]})},q=t(1107),J=t.n(q),U=function(e){var a=e.tiles;return Object(O.jsxs)("div",{className:J.a.container,children:[Object(O.jsx)(C.a,{text:function(e){return Object(O.jsx)(O.Fragment,{children:Object(x.a)("mj.gameplay.turn",{span:function(a){return Object(O.jsxs)(O.Fragment,{children:[(null===e||void 0===e?void 0:e.length)||0,a]})}})})}(a),textAnchor:"end",fromColor:"#F8E37F",toColor:"#EA9633",width:"259px",height:"1em",className:[J.a.turnText,"strokeBrown5"].join(" ")}),Object(O.jsx)("div",{className:J.a.tilesWrapper,children:(null===a||void 0===a?void 0:a.length)?function(){var e=[];if(null===a||void 0===a?void 0:a.length)for(var t=Math.ceil(a.length/6),n=0;n<t;n++){var o=a.slice(6*n,6*n+6).reverse();e.push(o);for(var c=0;c<e[n].length;c++){var i,s=null===(i=Object(y.b)(e[n][c]))||void 0===i?void 0:i.src;e[n][c]=s}}return e}().map((function(e){return Object(O.jsx)("div",{className:J.a.rowTiles,children:e.map((function(e){return Object(O.jsx)("img",{src:e,alt:"tile",height:"60",width:"39",className:"img-fluid"})}))})})):null})]})},Q=t(1108),V=t.n(Q),X=function(e){var a=e.tiles;return Object(O.jsxs)("div",{className:V.a.container,children:[Object(O.jsx)(C.a,{text:Object(x.a)("mj.gameplay.kong"),textAnchor:"end",fromColor:"#F8E37F",toColor:"#EA9633",width:"127px",height:"1em",className:[V.a.kongText,"strokeBrown5"].join(" ")}),Object(O.jsx)("div",{className:V.a.tilesWrapper,children:(null===a||void 0===a?void 0:a.length)?function(){var e=[];if(null===a||void 0===a?void 0:a.length)for(var t=Math.ceil(a.length/4),n=0;n<t;n++){e.push(a.slice(4*n,4*n+4));for(var o=0;o<e[n].length;o++){var c,i=null===(c=Object(y.b)(e[n][o]))||void 0===c?void 0:c.src;e[n][o]=i}}return e}().map((function(e){return Object(O.jsx)("div",{className:V.a.rowTiles,children:e.map((function(e){return Object(O.jsx)("img",{src:e,alt:"tile",height:"43",width:"28",className:"img-fluid"})}))})})):null})]})},Z=t(1109),$=t.n(Z),ee=t(397),ae=t(1089),te=t(1090),ne=t(1091),oe=t(1154),ce=t(1155),ie=t(432),se=Object(ee.a)((function(){return{root:{position:"absolute !important","& .MuiPaper-root":{backgroundColor:"#363859",color:"#fff"},"& .MuiDialogContentText-root":{color:"#efeff1db"},"& .MuiTypography-h6":{fontWeight:"700"},"& .MuiBackdrop-root":{position:"absolute"}}}})),re=function(e){var a=e.isLoading,t=e.show,n=e.onHide,o=e.onWithdrawToken,c=e.amount,i=se();return Object(O.jsxs)(ae.a,{open:t,onClose:n,className:i.root,disablePortal:!0,children:[Object(O.jsx)(te.a,{children:Object(x.a)("mj.gameplay.wallet.withdraw.confirmation")}),Object(O.jsx)(ne.a,{children:Object(O.jsx)(oe.a,{children:Object(x.a)("mj.gameplay.wallet.withdraw.content",{amount:Object(O.jsx)("strong",{children:c})})})}),Object(O.jsxs)(ce.a,{children:[Object(O.jsx)(ie.a,{onClick:o,color:"primary",disabled:a,children:a?Object(O.jsx)(j.a,{size:"20px"}):Object(x.a)("misc.yes")}),Object(O.jsx)(ie.a,{onClick:n,color:"primary",autoFocus:!0,children:Object(x.a)("misc.no")})]})]})},le=Object(ee.a)((function(){return{root:{position:"absolute !important","& .MuiPaper-root":{backgroundColor:"#363859",color:"#fff"},"& .MuiDialogContentText-root":{color:"#efeff1db"},"& .MuiTypography-h6":{fontWeight:"700"},"& .MuiBackdrop-root":{position:"absolute"}}}})),me=function(e){var a=e.isLoading,t=e.show,n=e.onHide,o=e.onDepositToken,c=e.currency,i=le(),s=Object(l.useState)(1),m=Object(r.a)(s,2),g=m[0],d=m[1];return Object(O.jsxs)(ae.a,{open:t,onClose:n,className:i.root,disablePortal:!0,children:[Object(O.jsx)(te.a,{children:Object(x.a)("mj.gameplay.wallet.deposit")}),Object(O.jsx)(ne.a,{children:Object(O.jsxs)(oe.a,{children:[Object(x.a)("mj.gameplay.wallet.deposit")," ",Object(O.jsx)("input",{className:"ml-1",type:"number",min:1,max:20,name:"enter-deposit",value:g,onChange:function(e){d(e.target.value)}})," ",Object(x.a)("mj.gameplay.wallet.deposit.content",{currency:c.toUpperCase()})]})}),Object(O.jsxs)(ce.a,{children:[Object(O.jsx)(ie.a,{onClick:function(){return o(g)},color:"primary",disabled:a,children:a?Object(O.jsx)(j.a,{size:"20px"}):Object(x.a)("misc.yes")}),Object(O.jsx)(ie.a,{onClick:n,color:"primary",autoFocus:!0,children:Object(x.a)("misc.no")})]})]})},ge=function(e){var a=e.isGameInitialized,t=e.isLoading,n=e.betStatus,o=e.stake,c=e.balance,i=e.onTransfer,s=e.onHilo,r=e.onWithdraw,m=e.onDeposit,g=e.showWithdrawConfirmation,d=e.toggleWithdrawConfirmation,j=e.showDepositConfirmation,u=e.toggleDepositConfirmation,b=e.currency,_=function(e){return e?Number(e).toFixed(4):0},h=function(e){return 0===Math.ceil(e)},p=3===e.hiLoResult&&1===n?0:o,f=c>=1?c:0,w=o<1;return Object(l.useEffect)((function(){}),[o]),Object(O.jsxs)("div",{className:$.a.container,children:[Object(O.jsx)(re,{isLoading:t,show:g,onHide:d,onWithdrawToken:r,amount:c}),Object(O.jsx)(me,{currency:b,isLoading:t,show:j,onHide:u,onDepositToken:m}),Object(O.jsxs)("div",{className:$.a.wrapper,children:[Object(O.jsxs)("div",{className:$.a.winsBalWrapper,title:String(o),children:[Object(O.jsx)("span",{children:Object(x.a)("mj.gameplay.wallet.stake")}),Object(O.jsx)("span",{children:_(p)})]}),Object(O.jsx)(v,{isDisabled:h(p)||!Boolean(n),containerClass:$.a.btnTransfer,onClick:i,label:Object(x.a)("mj.gameplay.wallet.transfer"),labelClass:$.a.btnLabel}),Object(O.jsx)(v,{isDisabled:!Boolean(n)||h(p)&&h(f),onClick:s,label:Object(x.a)("mj.gameplay.wallet.play_hilo"),labelClass:$.a.btnLabel})]}),Object(O.jsxs)("div",{className:$.a.wrapper,children:[Object(O.jsxs)("div",{className:$.a.winsBalWrapper,title:String(c),children:[Object(O.jsx)("span",{children:Object(x.a)("mj.gameplay.wallet.balance")}),Object(O.jsx)("span",{children:_(c)||0})]}),Object(O.jsx)(v,{isDisabled:h(f)||!w,containerClass:$.a.btnWithdraw,onClick:d,label:Object(x.a)("mj.gameplay.wallet.withdraw"),labelClass:$.a.btnLabel}),Object(O.jsx)(v,{isDisabled:!a,onClick:u,label:Object(x.a)("mj.gameplay.wallet.deposit"),labelClass:$.a.btnLabel})]})]})},de=t(1110),je=t.n(de),ue=function(e){var a=e.tiles,t=e.onDiscardTile,n=(null===a||void 0===a?void 0:a.length)&&a.map((function(e){return Object(y.b)(e)}))||[];return Object(O.jsx)("div",{className:je.a.container,children:n.length?n.map((function(e,a){return Object(O.jsx)("img",{onDoubleClick:function(){return t(a)},src:null===e||void 0===e?void 0:e.src,alt:"tile",height:"96",width:"62",className:"img-fluid ".concat(13===a&&je.a.highlightTile)},a)})):null})},be=t(721),_e=t(1111),he=t.n(_e),pe=t(140),Oe=t(16);a.default=function(){var e=Object(g.g)(),a=Object(m.c)(),t=Object(m.d)((function(e){return e})),o=(null===t||void 0===t?void 0:t.mahjong_hilo).game_data,b=null===t||void 0===t?void 0:t.platform,_=b.selectedCurrency,h=b.account,p=null===h||void 0===h?void 0:h.username,v=null===h||void 0===h?void 0:h.user_game_id,w={low:null===o||void 0===o?void 0:o.low_odds,draw:null===o||void 0===o?void 0:o.draw_odds,high:null===o||void 0===o?void 0:o.high_odds},C=o?[o.prevalent_wind,o.seat_wind]:new Array(2).fill(null),k=Object(l.useState)(!1),T=Object(r.a)(k,2),D=T[0],N=T[1],H=Object(l.useState)(!1),S=Object(r.a)(H,2),L=S[0],A=S[1],B=Object(l.useState)(!1),M=Object(r.a)(B,2),P=M[0],G=M[1],K=Object(l.useState)(!1),E=Object(r.a)(K,2),I=E[0],R=E[1],q=Object(l.useState)(!1),J=Object(r.a)(q,2),Q=J[0],V=J[1],Z=Object(l.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],ae=$[1],te=Object(l.useState)({show:!1,updatedAt:0}),ne=Object(r.a)(te,2),oe=ne[0],ce=ne[1],ie=Object(l.useState)(0),se=Object(r.a)(ie,2),re=se[0],le=se[1],me=Object(l.useState)({show:!1,tiles:{key:[],value:[]},updatedAt:0}),de=Object(r.a)(me,2),je=de[0],_e=de[1],fe=Object(l.useState)({showCompleteHand:!1,showCompleteHandResult:!1}),ve=Object(r.a)(fe,2),we=ve[0],ye=ve[1],xe=Object(l.useState)(!1),Ce=Object(r.a)(xe,2),ke=Ce[0],Te=Ce[1],We={volume:.5},De=Object(u.a)(F.mjGameMainBg_1,{volume:.4,onload:function(){Te(!0)}}),Ne=Object(r.a)(De,2)[1].sound,He=Object(u.a)(F.mjPlayAgainBg,{volume:.4}),Se=Object(r.a)(He,2)[1].sound,Le=Object(u.a)(F.error,We),Ae=Object(r.a)(Le,1)[0],Be=Object(u.a)(F.deposit,We),Me=Object(r.a)(Be,1)[0],Pe=Object(u.a)(F.withdraw,We),Ge=Object(r.a)(Pe,1)[0],Ke=Object(u.a)(F.transfer,We),Fe=Object(r.a)(Ke,1)[0],Ee=Object(u.a)(F.playHilo,We),Ie=Object(r.a)(Ee,1)[0],Re=Object(u.a)(F.high,We),ze=Object(r.a)(Re,1)[0],Ye=Object(u.a)(F.draw,We),qe=Object(r.a)(Ye,1)[0],Je=Object(u.a)(F.low,We),Ue=Object(r.a)(Je,1)[0],Qe=Object(u.a)(F.win,We),Ve=Object(r.a)(Qe,1)[0],Xe=Object(u.a)(F.lose,We),Ze=Object(r.a)(Xe,1)[0],$e=Object(u.a)(F.playAgain,We),ea=Object(r.a)($e,1)[0],aa=Object(u.a)(F.playAgain,We),ta=Object(r.a)(aa,1)[0],na=Object(u.a)(F.playAgain,We),oa=Object(r.a)(na,1)[0],ca=Object(u.a)(F.playPass,We),ia=Object(r.a)(ca,1)[0],sa=function(){return G((function(e){return!e}))},ra=function(){return V((function(e){return!e}))},la=function(){ae((function(e){return!e}))},ma=function(){ye((function(e){return Object(s.a)(Object(s.a)({},e),{},{showCompleteHand:!e.showCompleteHand})}))},ga=function(){ye((function(e){return Object(s.a)(Object(s.a)({},e),{},{showCompleteHandResult:!e.showCompleteHandResult})}))},da=function(){ce((function(e){return Object(s.a)(Object(s.a)({},e),{},{show:!e.show,updatedAt:Date.now()})}))},ja=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:[],value:[]};_e((function(a){return Object(s.a)(Object(s.a)({},a),{},{show:!a.show,tiles:e,updatedAt:Date.now()})}))};Object(l.useEffect)((function(){if(h&&p){if(D)return;Object(be.t)(p).then((function(){N(!0)})).catch((function(e){d.b.error((null===e||void 0===e?void 0:e.message)||Object(x.a)("mj.gameplay.error.fetching_data"))}))}else e.push("/game/mahjong")}),[h]),Object(l.useEffect)((function(){D&&(o||e.push("/game/mahjong"))}),[D]),Object(l.useEffect)((function(){return Ne&&ke&&Ne.play(),function(){Ne&&Ne.stop(),Se&&Se.stop()}}),[Ne,Se,ke]),Object(l.useEffect)((function(){I&&Ne&&Ne.playing()&&Ne.stop(),I&&Se&&Se.playing()&&Se.stop()}),[Ne,Se,I]);var ua=null;Object(l.useEffect)((function(){if(D){if(clearTimeout(ua),oe.show&&oe.updatedAt){var e=2===(null===o||void 0===o?void 0:o.hi_lo_result)?2:4;return void(ua=setTimeout((function(){da()}),1e3*e))}if(!oe.show&&oe.updatedAt&&1===(null===o||void 0===o?void 0:o.status))return void Oa();if(!oe.show&&oe.updatedAt&&(null===o||void 0===o?void 0:o.status)>=2)return void ga()}}),[oe]),Object(l.useEffect)((function(){if(D){if(!oe.show&&!oe.updatedAt&&1===(null===o||void 0===o?void 0:o.status))return void Oa();if(!oe.show&&!oe.updatedAt&&(null===o||void 0===o?void 0:o.status)>=2)return void ga()}}),[D]),Object(l.useEffect)((function(){re&&1===(null===o||void 0===o?void 0:o.bet_status)&&3===(null===o||void 0===o?void 0:o.hi_lo_result)&&Object(be.p)()}),[o,re]);var ba=function(e,a){"success"===e?d.b.success(Object(x.a)("mj.gameplay.success.".concat(a))):d.b.error(Object(x.a)("mj.gameplay.error.".concat(a)))},_a=function(e,a){return d.b.info(Object(O.jsxs)(O.Fragment,{children:[e," ",Object(O.jsx)(j.a,{size:"20px"})]}),{autoClose:!1,toastId:a})},ha=function(e){var a=_a(Object(x.a)("mj.gameplay.loading.draw_hilo"),"play-hilo");R(!0),function(e){switch(e){case 1:Ue();break;case 2:qe();break;case 3:ze();break;default:Ae()}}(e),Object(be.o)({option:e}).then((function(e){Object(be.t)(p),le(Date.now()),d.b.dismiss(a),setTimeout((function(){da()}),1e3)})).catch((function(e){Ae(),d.b.dismiss(a),d.b.error(e.message)}))},pa=function(e){var a={key:[],value:[]};if(null===e||void 0===e?void 0:e.length){var t=function(e){return e.reduce((function(e,a){var t=Object(y.b)(a);return t&&(e[t.category]=e[t.category]?[].concat(Object(n.a)(e[t.category]),[a]):[a]),e}),{})}(e);if(Object.keys(t).length)for(var o=0,c=Object.entries(t);o<c.length;o++){var i=Object(r.a)(c[o],2),s=i[0];if(4===i[1].length){var l,m;(l=a.key).push.apply(l,Object(n.a)(t[s].map((function(a){return e.indexOf(a)})))),(m=a.value).push.apply(m,Object(n.a)(t[s]));break}}}return a},Oa=function(){var e=null===o||void 0===o?void 0:o.hand_player;if((null===e||void 0===e?void 0:e.length)>=2){var a=pa(e);a.value.length?ja(a):1===(null===o||void 0===o?void 0:o.riichi_status)&&ma()}},fa=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(pe.l)();case 3:t=e.sent,n=t.data,a(Object(Oe.k)(n)),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:he.a.container,children:Object(O.jsxs)("div",{className:he.a.content,children:[Object(O.jsx)("div",{className:he.a.itemMenu,children:Object(O.jsx)(f,{onClick:la})}),Object(O.jsx)("div",{className:he.a.itemCategory,children:Object(O.jsx)(W,{tiles:C})}),Object(O.jsx)("div",{className:he.a.itemActions,children:Object(O.jsx)(Y,{betStatus:null===o||void 0===o?void 0:o.bet_status,standardTile:null===o||void 0===o?void 0:o.standard_tile,predictionTile:null===o||void 0===o?void 0:o.current_tile,oddsPerTile:w,isGameInitialized:D,isWin:2===(null===o||void 0===o?void 0:o.hi_lo_result),showResult:oe.show,playWin:Ve,playLose:Ze,onPlayLow:function(){return ha(1)},onPlayDraw:function(){return ha(2)},onPlayHigh:function(){return ha(3)}})}),Object(O.jsx)("div",{className:he.a.itemTurn,children:Object(O.jsx)(U,{tiles:null===o||void 0===o?void 0:o.discarded_tiles})}),Object(O.jsx)("div",{className:he.a.itemKong,children:Object(O.jsx)(X,{tiles:null===o||void 0===o?void 0:o.reveal_kong})}),Object(O.jsx)("div",{className:he.a.itemWallet,children:Object(O.jsx)(ge,{isGameInitialized:D,isLoading:L,betStatus:null===o||void 0===o?void 0:o.bet_status,onHilo:function(){var e=_a(Object(x.a)("mj.gameplay.loading.play_hilo"),"hilo");R(!0),Ie(),Object(be.c)().then(function(){var a=Object(i.a)(c.a.mark((function a(t){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.data){a.next=7;break}return a.next=3,Object(be.t)(p);case 3:d.b.success(Object(x.a)("mj.gameplay.success.play_hilo.can_play")),d.b.dismiss(e),a.next=10;break;case 7:Ae(),d.b.dismiss(e),d.b.error(Object(x.a)("mj.gameplay.error.play_hilo.discard_tile"),{autoClose:!1});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(a){Ae(),d.b.error(a.message),d.b.dismiss(e)}))},onTransfer:function(){R(!0),Fe(),Object(be.r)().then((function(){Object(be.t)(p),ba("success","transfer")})).catch((function(){Ae(),ba("error","transfer")}))},stake:null===o||void 0===o?void 0:o.hi_lo_stake,balance:null===o||void 0===o?void 0:o.hi_lo_balance,onWithdraw:function(){A(!0),R(!0),Ge(),Object(be.s)().then((function(){sa(),Object(be.t)(p),fa(),A(!1),ba("success","withdrawal")})).catch((function(){Ae(),sa(),A(!1),ba("error","withdrawal")}))},onDeposit:function(e){A(!0),R(!0),Me(),Object(be.b)({currency:_.toUpperCase(),quantity:e}).then((function(){ra(),Object(be.t)(p),fa(),A(!1),ba("success","deposit")})).catch((function(){Ae(),ra(),A(!1),ba("error","deposit")}))},showWithdrawConfirmation:P,toggleWithdrawConfirmation:sa,showDepositConfirmation:Q,toggleDepositConfirmation:ra,currency:_,hiLoResult:null===o||void 0===o?void 0:o.hi_lo_result})}),Object(O.jsx)("div",{className:he.a.itemHand,children:Object(O.jsx)(ue,{tiles:null===o||void 0===o?void 0:o.hand_player,onDiscardTile:function(e){var a=_a(Object(x.a)("mj.gameplay.loading.discard"),"discard");R(!0),Object(be.f)({idx:e}).then((function(){Object(be.t)(p),d.b.dismiss(a)})).catch((function(e){d.b.dismiss(a),d.b.error(e.message)}))}})}),Object(O.jsx)(z.d,{show:ee,onHide:la,onResetGame:function(){var e=_a(Object(x.a)("mj.gameplay.loading.reset_game"),"reset");ea(),Object(be.a)().then(function(){var a=Object(i.a)(c.a.mark((function a(t){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(be.q)();case 2:return a.next=4,Object(be.t)(p);case 4:la(),d.b.success(Object(x.a)("mj.gameplay.success.reset_game")),d.b.dismiss(e);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(a){d.b.error(a.message),d.b.dismiss(e)}))}}),je.show&&1===(null===o||void 0===o?void 0:o.status)&&Object(O.jsx)(z.c,{tiles:je.tiles.value,onHide:function(){R(!0),ia(),ja({key:[],value:[]}),ma()},onDeclare:function(){var e=_a(Object(x.a)("mj.gameplay.loading.declare_kong"),"declare-kong");R(!0),oa(),Object(be.e)({array_idx:je.tiles.key}).then((function(){Object(be.t)(p),ja(),ga(),d.b.dismiss(e)})).catch((function(a){Ae(),d.b.dismiss(e),d.b.error(a.message)}))}}),we.showCompleteHand&&1===(null===o||void 0===o?void 0:o.status)&&1===(null===o||void 0===o?void 0:o.riichi_status)&&Object(O.jsx)(z.a,{tiles:null===o||void 0===o?void 0:o.hand_player,onHide:function(){R(!0),ia(),ma()},onDeclare:function(){var e=_a(Object(x.a)("mj.gameplay.loading.declare_complete_hand"),"declare-complete");R(!0),ta(),Object(be.d)({id:v}).then((function(){Object(be.t)(p),ga(),d.b.dismiss(e)})).catch((function(a){Ae(),d.b.dismiss(e),d.b.error(a.message)}))}}),we.showCompleteHandResult&&(null===o||void 0===o?void 0:o.status)>=2&&Object(O.jsx)(z.b,{tiles:null===o||void 0===o?void 0:o.hand_player,isWin:2===(null===o||void 0===o?void 0:o.status),scoreType:null===o||void 0===o?void 0:o.score_type,finalScore:null===o||void 0===o?void 0:o.final_score,playAgain:function(){var e=_a(Object(x.a)("mj.gameplay.loading.reset_game"),"reset");ea(),Ne.playing()&&Ne.stop(),setTimeout((function(){Se.play()}),1e3),Object(be.a)().then(function(){var a=Object(i.a)(c.a.mark((function a(t){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(be.q)();case 2:return a.next=4,Object(be.t)(p);case 4:la(),d.b.success(Object(x.a)("mj.gameplay.success.reset_game")),d.b.dismiss(e);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(a){d.b.error(a.message),d.b.dismiss(e)}))}})]})})}},606:function(e,a,t){e.exports={gradientContainer:"Btn_gradientContainer__3_RFQ",gradientLabel:"Btn_gradientLabel__1tkAL",solidContainer:"Btn_solidContainer__1BACa",icon:"Btn_icon__ZyiJg",disabled:"Btn_disabled__2Gx79",menu:"Btn_menu__1SYwS"}}}]);