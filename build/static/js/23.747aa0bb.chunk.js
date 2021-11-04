/*! For license information please see 23.747aa0bb.chunk.js.LICENSE.txt */
(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[23],{1065:function(t,e,a){t.exports={ghostRow:"GhostListV2_ghostRow__1JYNt",btnDetails:"GhostListV2_btnDetails__1R-77",ghostDetails:"GhostListV2_ghostDetails__SQNi_",ghostResults:"GhostListV2_ghostResults__1TioA",ghostResultsBattleEnd:"GhostListV2_ghostResultsBattleEnd__2EkyO",ghostLife:"GhostListV2_ghostLife__1GdFI",ghostResultsLife:"GhostListV2_ghostResultsLife__185N9",progressBar:"GhostListV2_progressBar__2X1VV",ghostImageContainer:"GhostListV2_ghostImageContainer__2baKl",ghostImage:"GhostListV2_ghostImage__1zpmN",ghostRarityContainer:"GhostListV2_ghostRarityContainer__3D9VC",ghostRarity:"GhostListV2_ghostRarity__1lirO",badgeStyle:"GhostListV2_badgeStyle__3p-af",withdrawBadge:"GhostListV2_withdrawBadge__14EdE",eliminatedBadge:"GhostListV2_eliminatedBadge__2hYoJ",ghostLabelValue:"GhostListV2_ghostLabelValue__HBr91"}},1066:function(t,e,a){t.exports={parent_container:"GhostList_parent_container__1zxIo",scalable_container:"GhostList_scalable_container__1oKgY",main_container_btm_overlay:"GhostList_main_container_btm_overlay__mqsa9",header:"GhostList_header__3khwt",header_home_btn:"GhostList_header_home_btn__1poSd",header_list_btn:"GhostList_header_list_btn__1rMV1",header_summon_btn:"GhostList_header_summon_btn__rcdNm",header_ranking_btn:"GhostList_header_ranking_btn__2fFS1",contents:"GhostList_contents__qAqhn",container_modal:"GhostList_container_modal__3WCb5",fadeInDownBig:"GhostList_fadeInDownBig__c5AIJ",container_title:"GhostList_container_title__3djZb",contentScrollable:"GhostList_contentScrollable__psPNF",rulesContent:"GhostList_rulesContent__EaTqh",leftSideNav:"GhostList_leftSideNav__1QRxi",rightSideNav:"GhostList_rightSideNav__1Khuk",filterBtn:"GhostList_filterBtn__35Wnn",activeFilter:"GhostList_activeFilter__1kseG",sortDetails:"GhostList_sortDetails__1n8cQ",ghostRow:"GhostList_ghostRow__vz9Ts",btnDetails:"GhostList_btnDetails__2wE2J",ghostDetails:"GhostList_ghostDetails__31riA",ghostResults:"GhostList_ghostResults__q53av",ghostResultsLife:"GhostList_ghostResultsLife__1L20B",progressBar:"GhostList_progressBar__2a0Dj",ghostImageContainer:"GhostList_ghostImageContainer__2vM_7",ghostImage:"GhostList_ghostImage__3Gaks",ghostRarity:"GhostList_ghostRarity__16Ewi",badgeStyle:"GhostList_badgeStyle__3cf-q",withdrawBadge:"GhostList_withdrawBadge__3xMDN",eliminatedBadge:"GhostList_eliminatedBadge__2U-yF",ghostLabelValue:"GhostList_ghostLabelValue__10dcT"}},1180:function(t,e,a){"use strict";a.r(e);var n=a(6),s=a(19),i=a(113),o=a(0),r=a(26),c=a(111),l=a(484),u=a(458),d=a(499),h=a(534),g=a(535),_=a(52),v=a(11).e.assets_url,b=("".concat(v,"/imgs/games/ghost_quest/ghost_list/modal_bg.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/btn_in_battle_active.png")),m="".concat(v,"/imgs/games/ghost_quest/ghost_list/btn_in_battle_inactive.png"),f="".concat(v,"/imgs/games/ghost_quest/ghost_list/btn_battle_end_active.png"),j="".concat(v,"/imgs/games/ghost_quest/ghost_list/btn_battle_end_inactive.png"),p="".concat(v,"/imgs/games/ghost_quest/ghost_list/btn_sort.png"),O="".concat(v,"/imgs/games/ghost_quest/ghost_list/btn_details.png"),x="".concat(v,"/imgs/games/ghost_quest/ghost_icons/new.png"),y="".concat(v,"/imgs/games/ghost_quest/star.png"),L=("".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/bg_modal.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_oldest.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_newest.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_battleLimitLowToHigh.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_battleLimitHighToLow.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_starLowToHigh.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_starHighToLow.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_lifeLowToHigh.png"),"".concat(v,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_lifeHighToLow.png"),"".concat(v,"/audio/games/ghostquest/GQ_GhostList.mp3")),N="".concat(v,"/audio/games/ghostquest/GQ_Click.mp3"),w=("".concat(v,"/audio/games/ghostquest/GQ_BackCancel.mp3"),a(1065)),k=a.n(w),G=a(1),q={type:"ELIMINATED",color:"#FF0000"},S=function(t){if(t){var e,a,n,s,i,o;if((null===t||void 0===t||null===(e=t.value)||void 0===e?void 0:e.character_life)<=0)return{type:"ELIMINATED",color:"#FF0000"};if(null===t||void 0===t?void 0:t.IS_NEW)return{type:"SUMMONED",color:"#FFFFFF"};if((null===t||void 0===t||null===(a=t.value)||void 0===a?void 0:a.battle_count)!==(null===t||void 0===t||null===(n=t.value)||void 0===n?void 0:n.battle_limit))return{type:"STANDBY",color:"#FBFF00"};if((null===t||void 0===t||null===(s=t.value)||void 0===s?void 0:s.battle_count)===(null===t||void 0===t||null===(i=t.value)||void 0===i?void 0:i.battle_limit)&&(null===t||void 0===t||null===(o=t.value)||void 0===o?void 0:o.character_life)>0)return{type:"WINNER",color:"#0CFF00"}}return{type:"IDLE",color:"#FBFF00"}},R=function(t){for(var e=[],a=0;a<t;a++)e.push(Object(G.jsx)("img",{src:y,alt:"*",className:k.a.ghostRarity},a+"uniq_key"));return e},B=Object(r.b)((function(t){return{ghost_quest:t.ghost_quest}}),(function(t){return{dispatch:t}}))((function(t){t.username;var e=t.dataProps,a=t.inBattle,i=t.navigation,o=t.ghost_quest,r=(t.dispatch,null===o||void 0===o?void 0:o.volume),c=Object(u.a)(N,{volume:.5*r}),l=Object(s.a)(c,1)[0],d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2?arguments[2]:void 0;l();var o=Object(n.a)(Object(n.a)({},t),{},{ghost_avatar:s});e&&(o=Object(n.a)(Object(n.a)({},t),{},{key:e,ghost_avatar:s})),i.history.push("/game/ghostquest/gameplay",{params:o,inBattle:a})};if(a){var h,v,b,m,f,j,p,y,L,w=(null===e||void 0===e?void 0:e[0])||null,B=(null===e||void 0===e?void 0:e[1])||[],E=!1,C=null,D="",I=null,F=null,V=null,H=null;if(null!=w)C=w.key,D=null===(m=w.value)||void 0===m?void 0:m.ghost_name,E=w.IS_NEW||!1,I=null===(f=w.value)||void 0===f?void 0:f.character_life,null===(j=w.value)||void 0===j?void 0:j.hitpoints,F=null===(p=w.value)||void 0===p?void 0:p.battle_count,V=null===(y=w.value)||void 0===y?void 0:y.battle_limit,H=Object(g.a)({ghost_id:null===(L=w.value)||void 0===L?void 0:L.ghost_id});var A=w?R(null===(h=w.value)||void 0===h?void 0:h.rarity):[],T=null!==I&&null!==F&&null!==V&&I>0&&F===V;return Object(G.jsxs)("div",{className:k.a.ghostRow,children:[Object(G.jsxs)("div",{className:k.a.ghostImageContainer,children:[Object(G.jsx)("div",{className:k.a.ghostImage,style:{backgroundImage:"url(".concat(H,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(G.jsx)("div",{className:k.a.ghostRarityContainer,children:A.length&&[A].map((function(t){return t}))})}),0===I?Object(G.jsx)("span",{className:k.a.eliminatedBadge,children:"Eliminated"}):T&&Object(G.jsx)("span",{className:k.a.withdrawBadge,children:"Withdrawable"})]}),Object(G.jsxs)("div",{className:k.a.ghostResults,children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:k.a.ghostLife,children:I?"".concat(I," ").concat(I>1?"Lives":"Life"," remaining"):"0 Life remaining"}),Object(G.jsx)("div",{className:k.a.ghostLabelValue,children:"".concat(null!==F&&null!==V?"".concat(F,"/").concat(V," battles"):"No data")})]}),Object(G.jsxs)("div",{className:k.a.ghostLabelValue,children:[Object(_.a)("gq.details.status"),":",Object(G.jsx)("span",{style:{marginLeft:"10px",color:null===(v=S(w))||void 0===v?void 0:v.color},children:null===(b=S(w))||void 0===b?void 0:b.type})]})]}),Object(G.jsxs)("div",{className:k.a.ghostDetails,children:[Object(G.jsxs)("div",{className:"hover-cursor position-relative",style:{transform:"scale(0.9)",marginRight:"-4px"},children:[E&&Object(G.jsx)("img",{src:x,alt:"New",className:k.a.badgeStyle}),Object(G.jsx)("img",{src:O,alt:"Details",className:k.a.btnDetails,onClick:function(){return d({ghost_data:w,ghost_history:B},null,H)}})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:k.a.ghostLabelValue,children:D||"No data"}),Object(G.jsx)("div",{className:k.a.ghostLabelValue,children:C?"ID: ".concat((C+"").substr(C.length-12)):"ID: No data"})]})]})]})}var P,z,W,M=(null===e||void 0===e?void 0:e[0])||null,J=(null===e||void 0===e?void 0:e[1])||[],Q=null,Y=null,K=0,U=0,Z=null;null!=M&&(Q=M.key,Y=null===(z=M.value)||void 0===z?void 0:z.character_life,Z=Object(g.a)({ghost_id:null===(W=M.value)||void 0===W?void 0:W.ghost_id})),J.length>0&&J.forEach((function(t){var e=(null===t||void 0===t?void 0:t.winnerID)===Q;K+=e?1:0,U+=e?0:1}));var X=M?R(null===(P=M.value)||void 0===P?void 0:P.rarity):[];return Object(G.jsxs)("div",{className:k.a.ghostRow,children:[Object(G.jsx)("div",{className:k.a.ghostImageContainer,children:Object(G.jsx)("div",{className:k.a.ghostImage,style:{backgroundImage:"url(".concat(Z,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}})}),Object(G.jsxs)("div",{className:k.a.ghostResultsBattleEnd,children:[Object(G.jsxs)("div",{className:k.a.ghostResultsLife,children:[Object(G.jsxs)("div",{children:[Object(_.a)("gq.details.id"),":"]}),Object(G.jsxs)("div",{children:[Object(_.a)("gq.details.rarity"),":"]}),Object(G.jsxs)("div",{children:[Object(_.a)("gq.details.status"),":"]}),Object(G.jsxs)("div",{children:[Object(_.a)("gq.details.current_life"),":"]})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{style:{marginRight:"30px"},children:"Win: ".concat(K)}),Object(G.jsx)("span",{children:"Lose: ".concat(U)})]})]}),Object(G.jsxs)("div",{className:k.a.ghostDetails,children:[Object(G.jsx)("div",{children:Q?"".concat((Q+"").substr(Q.length-12)):"No data"}),Object(G.jsx)("div",{children:X.length&&X.map((function(t){return t}))}),Object(G.jsx)("div",{style:{color:q.color},children:q.type}),Object(G.jsx)("div",{children:Y?"".concat(Y):"0"}),Object(G.jsx)("div",{className:"hover-cursor",style:{transform:"scale(0.9)",marginRight:"-4px"},children:Object(G.jsx)("img",{src:O,alt:"Details",className:k.a.btnDetails,onClick:function(){return d({ghost_data:M,ghost_history:J},null,Z)}})})]})]})})),E=a(488),C=a(66),D=a(465),I=a(1066),F=a.n(I),V=1075,H={0:"Oldest",1:"Newest",2:"Battle Limit: Low to High",3:"Battle Limit: High to Low",4:"Star: Low to High",5:"Star: High to Low",6:"Life: Low to High",7:"Life: High to Low"},A=function(t,e){if(null==t||!Array.isArray(t))return t;switch(e){case 0:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=t[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.created_at)-(null===(s=e[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.created_at)}));case 1:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=e[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.created_at)-(null===(s=t[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.created_at)}));case 2:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=t[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.battle_limit)-(null===(s=e[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.battle_limit)}));case 3:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=e[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.battle_limit)-(null===(s=t[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.battle_limit)}));case 4:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=t[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.rarity)-(null===(s=e[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.rarity)}));case 5:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=e[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.rarity)-(null===(s=t[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.rarity)}));case 6:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=t[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.character_life)-(null===(s=e[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.character_life)}));case 7:return Object(i.a)(t).sort((function(t,e){var a,n,s,i;return(null===(a=e[0])||void 0===a||null===(n=a.value)||void 0===n?void 0:n.character_life)-(null===(s=t[0])||void 0===s||null===(i=s.value)||void 0===i?void 0:i.character_life)}));default:return t}};e.default=Object(r.b)((function(t){return{ghost_quest:t.ghost_quest,platform:t.platform}}),(function(t){return{dispatch:t}}))((function(t){var e,a,i,r,g,_,v,O,x,y=null===t||void 0===t||null===(e=t.ghost_quest)||void 0===e?void 0:e.volume,w=(null===(a=t.platform)||void 0===a||null===(i=a.account)||void 0===i?void 0:i.username)||null,k=(null===(r=t.platform)||void 0===r||null===(g=r.account)||void 0===g?void 0:g.user_game_id)||null,q=null===t||void 0===t||null===(_=t.location)||void 0===_||null===(v=_.state)||void 0===v?void 0:v.isFromBattleEndScreen,S=Object(o.useRef)(null),R=Object(o.useState)(!1),I=Object(s.a)(R,2),T=I[0],P=I[1],z=Object(u.a)(L,{volume:.1*y}),W=Object(s.a)(z,2)[1].sound,M=Object(u.a)(N,{volume:.5*y}),J=Object(s.a)(M,1)[0];Object(o.useEffect)((function(){return W&&(W.play(),W.on("end",(function(){W.play()}))),function(){W&&W.stop()}}),[W]);var Q=Object(o.useState)(0),Y=Object(s.a)(Q,2),K=Y[0],U=Y[1],Z=Object(o.useState)(1),X=Object(s.a)(Z,2),$=X[0],tt=X[1],et=Object(o.useState)(1),at=Object(s.a)(et,2),nt=at[0],st=at[1],it=Object(o.useState)(!0),ot=Object(s.a)(it,2),rt=ot[0],ct=ot[1],lt=null===t||void 0===t||null===(O=t.ghost_quest)||void 0===O?void 0:O.in_battle_list,ut=null===t||void 0===t||null===(x=t.ghost_quest)||void 0===x?void 0:x.battle_end_list;Object(o.useEffect)((function(){q&&!K&&U(1)}),[q]),Object(o.useEffect)((function(){k&&w?T||P(!0):c.b.error("Please login first")}),[k]),Object(o.useEffect)((function(){T&&(ct(!0),K?Object(E.a)().then((function(e){var a=e.data,n=A(a,$);t.dispatch(Object(C.e)({ghost_list:n}))})).catch((function(){c.b.error("Error fetching history characters, please try again")})).finally((function(){ct(!1)})):Object(E.e)().then((function(e){var a=e.data,n=A(a,$);console.log({data:a,sortedData:n}),t.dispatch(Object(C.g)({ghost_list:n}))})).catch((function(){c.b.error("Error fetching characters, please try again")})).finally((function(){ct(!1)})))}),[T,K]),Object(o.useEffect)((function(){if(K){var e=A(ut,$);t.dispatch(Object(C.e)({ghost_list:e}))}else{var a=A(lt,$);t.dispatch(Object(C.g)({ghost_list:a}))}}),[$]),Object(h.a)(S,(function(t){var e=t.width,a=t.height,n=Math.min(e/V,a/750);st(.9*n)}));var dt=function(t){J(),U(t)},ht=function(t){switch(t){case"newest":tt(0===$?1:1===$?0:1);break;case"battle-limit":tt(2===$?3:3===$?2:3);break;case"star":tt(4===$?5:5===$?4:5);break;case"life":tt(6===$?7:7===$?6:7)}},gt=function(t){switch(t){case"newest":return 0===$||1===$;case"battle-limit":return 2===$||3===$;case"star":return 4===$||5===$;case"life":return 6===$||7===$;default:return!1}};return console.log({sortSelected:$}),Object(G.jsx)("div",{className:F.a.parent_container,ref:S,children:Object(G.jsxs)("div",{className:F.a.scalable_container,style:{zoom:nt,minWidth:"".concat(V,"px"),maxWidth:"".concat(V,"px"),height:"".concat(750,"px"),backgroundImage:"url(".concat(D.z,")"),backgroundSize:"".concat(V,"px ").concat(750,"px"),backgroundPositionY:"0px"},children:[Object(G.jsx)("div",{className:F.a.header,children:Object(G.jsx)(d.a,Object(n.a)(Object(n.a)({},t),{},{username:w,showSummon:function(){t.history.push("/game/ghostquest/summon")}}))}),Object(G.jsxs)("div",{className:F.a.contents,children:[Object(G.jsxs)("div",{className:F.a.container_modal,children:[Object(G.jsx)("img",{src:D.j,alt:""}),Object(G.jsx)("div",{className:F.a.container_title,children:"Ghosts"}),Object(G.jsx)("div",{className:F.a.contentScrollable,children:Object(G.jsx)("div",{className:F.a.rulesContent,children:0===K?lt.length?lt.map((function(e,a){return Object(G.jsx)(B,{username:w,inBattle:!0,dataProps:e,navigation:t},a)})):rt?Object(G.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(G.jsx)(l.a,{animation:"grow"})}):Object(G.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(G.jsx)("h2",{children:"No characters found"})}):ut.length?ut.map((function(e,a){return Object(G.jsx)(B,{username:w,inBattle:!1,dataProps:e,navigation:t},a)})):rt?Object(G.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(G.jsx)(l.a,{animation:"grow"})}):Object(G.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(G.jsx)("h2",{children:"No characters found"})})})})]}),Object(G.jsxs)("div",{className:F.a.leftSideNav,children:[Object(G.jsx)("div",{className:"my-2 hover-cursor",children:0===K?Object(G.jsx)("img",{src:b,alt:"In-Battle"}):Object(G.jsx)("img",{src:m,alt:"In-Battle",onClick:function(){return dt(0)}})}),Object(G.jsx)("div",{className:"my-2 hover-cursor",children:1===K?Object(G.jsx)("img",{src:f,alt:"Battle-End"}):Object(G.jsx)("img",{src:j,alt:"Battle-End",onClick:function(){return dt(1)}})})]}),Object(G.jsx)("div",{className:F.a.rightSideNav,children:Object(G.jsxs)("div",{className:"my-2",children:[Object(G.jsx)("img",{src:p,alt:"Sort"}),Object(G.jsxs)("div",{className:"".concat(F.a.filterBtn," ").concat(gt("newest")?F.a.activeFilter:""),onClick:function(){return ht("newest")},children:[Object(G.jsx)("span",{children:gt("newest")?H[$]:"Newest"}),Object(G.jsx)("img",{src:D.D,alt:"",style:{transform:1===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]}),Object(G.jsxs)("div",{className:"".concat(F.a.filterBtn," ").concat(gt("life")?F.a.activeFilter:""),onClick:function(){return ht("life")},children:[Object(G.jsx)("span",{children:gt("life")?H[$]:"Life"}),Object(G.jsx)("img",{src:D.D,alt:"",style:{transform:7===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]}),Object(G.jsxs)("div",{className:"".concat(F.a.filterBtn," ").concat(gt("star")?F.a.activeFilter:""),onClick:function(){return ht("star")},children:[Object(G.jsx)("span",{children:gt("star")?H[$]:"Star"}),Object(G.jsx)("img",{src:D.D,alt:"",style:{transform:5===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]}),Object(G.jsxs)("div",{className:"".concat(F.a.filterBtn," ").concat(gt("battle-limit")?F.a.activeFilter:""),onClick:function(){return ht("battle-limit")},children:[Object(G.jsx)("span",{children:gt("battle-limit")?H[$]:"Battle Limit"}),Object(G.jsx)("img",{src:D.D,alt:"",style:{transform:3===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]})]})})]}),Object(G.jsx)("div",{className:F.a.main_container_btm_overlay})]})})}))},456:function(t,e,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var o=s.apply(null,n);o&&t.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var r in n)a.call(n,r)&&n[r]&&t.push(r);else t.push(n.toString())}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(n=function(){return s}.apply(e,[]))||(t.exports=n)}()},457:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a(2);var n=a(0),s=a.n(n),i=s.a.createContext({});i.Consumer,i.Provider;function o(t,e){var a=Object(n.useContext)(i);return t||a[e]||e}},458:function(t,e,a){"use strict";var n=a(0),s=a.n(n);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}e.a=function(t,e){void 0===e&&(e={});var o,r=e,c=r.volume,l=void 0===c?1:c,u=r.playbackRate,d=void 0===u?1:u,h=r.soundEnabled,g=void 0===h||h,_=r.interrupt,v=void 0!==_&&_,b=r.onload,m=function(t,e){if(null==t)return{};var a,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(r,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),f=s.a.useRef(null),j=s.a.useRef(!1),p=s.a.useState(null),O=p[0],x=p[1],y=s.a.useState(null),L=y[0],N=y[1],w=function(){"function"===typeof b&&b.call(this),j.current&&x(1e3*this.duration()),N(this)};o=function(){return a.e(40).then(a.t.bind(null,483,7)).then((function(e){var a;j.current||(f.current=null!==(a=e.Howl)&&void 0!==a?a:e.default.Howl,j.current=!0,new f.current(i({src:Array.isArray(t)?t:[t],volume:l,rate:d,onload:w},m)))})),function(){j.current=!1}},Object(n.useEffect)(o,[]),s.a.useEffect((function(){f.current&&L&&N(new f.current(i({src:Array.isArray(t)?t:[t],volume:l,onload:w},m)))}),[JSON.stringify(t)]),s.a.useEffect((function(){L&&(L.volume(l),L.rate(d))}),[l,d]);var k=s.a.useCallback((function(t){"undefined"===typeof t&&(t={}),L&&(g||t.forceSoundEnabled)&&(v&&L.stop(),t.playbackRate&&L.rate(t.playbackRate),L.play(t.id))}),[L,g,v]),G=s.a.useCallback((function(t){L&&L.stop(t)}),[L]),q=s.a.useCallback((function(t){L&&L.pause(t)}),[L]);return[k,{sound:L,stop:G,pause:q,duration:O}]}},484:function(t,e,a){"use strict";var n=a(2),s=a(21),i=a(456),o=a.n(i),r=a(0),c=a.n(r),l=a(457),u=["bsPrefix","variant","animation","size","children","as","className"],d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.variant,r=t.animation,d=t.size,h=t.children,g=t.as,_=void 0===g?"div":g,v=t.className,b=Object(s.a)(t,u),m=(a=Object(l.a)(a,"spinner"))+"-"+r;return c.a.createElement(_,Object(n.a)({ref:e},b,{className:o()(v,m,d&&m+"-"+d,i&&"text-"+i)}),h)}));d.displayName="Spinner",e.a=d},488:function(t,e,a){"use strict";a.d(e,"b",(function(){return _})),a.d(e,"c",(function(){return v})),a.d(e,"d",(function(){return b})),a.d(e,"e",(function(){return m})),a.d(e,"a",(function(){return f})),a.d(e,"f",(function(){return j})),a.d(e,"g",(function(){return p})),a.d(e,"h",(function(){return O}));var n=a(35),s=a.n(n),i=a(59),o=a(141),r=a.n(o),c=a(96),l=a(66),u=a(18),d=a(11),h="".concat(d.e.protocol,"://").concat(d.e.host),g=function(t){var e=t.id,a=Object(u.b)(),n={id:e};return r.a.get(h+"/donut/api/v1/game/ghost-quest/game/data",{params:n,headers:a})},_=function(t){var e=t.id,a=t.username,n=Object(u.b)(),s={id:e,username:a};return r.a.get(h+"/donut/api/v1/game/ghost-quest/init",{params:s,headers:n})},v=function(t){t.id;var e=t.currency,a=t.quantity,n=t.limit,s=Object(u.b)(),i={currency:e,quantity:a,limit:n};return r.a.post(h+"/donut/api/v1/game/ghost-quest/generate/character",i,{headers:s})},b=function(t){var e=Object(u.b)();return r.a.get(h+"/donut/api/v1/game/ghost-quest/character/".concat(t),{headers:e})},m=function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(u.b)(),t.next=3,r.a.get(h+"/donut/api/v1/game/ghost-quest/characters/alive",{headers:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(u.b)(),t.next=3,r.a.get(h+"/donut/api/v1/game/ghost-quest/history/characters",{headers:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(s.a.mark((function t(e){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GetTopWinStreakRank!",e),a=Object(u.b)(),t.next=4,r.a.get(h+"/donut/api/v1/game/ghost-quest/characters/rank/earn/".concat(e),{headers:a});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(s.a.mark((function t(e){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GetTopWinStreakRank!",e),a=Object(u.b)(),t.next=4,r.a.get(h+"/donut/api/v1/game/ghost-quest/characters/rank/win-streak/".concat(e),{headers:a});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(i.a)(s.a.mark((function t(e){var a,n,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.id,t.prev=1,t.next=4,g({id:a});case 4:n=t.sent,i=n.data,console.log("updateGhostQuestData!!!",{id:a,data:i}),i&&i.characters?c.b.dispatch(Object(l.b)({game_data:{characters:i.characters}})):c.b.dispatch(Object(l.b)({game_data:null})),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},499:function(t,e,a){"use strict";var n=a(19),s=(a(0),a(26)),i=a(458),o=a(465),r=a(500),c=a.n(r),l=a(1);e.a=Object(s.b)((function(t){return{ghost_quest:t.ghost_quest,platform:t.platform}}))((function(t){null===(e=t.platform)||void 0===e||null===(a=e.account)||void 0===a||a.user_game_id;var e,a,s,r=null===t||void 0===t||null===(s=t.ghost_quest)||void 0===s?void 0:s.volume,u=Object(i.a)(o.g,{volume:.5*r}),d=Object(n.a)(u,1)[0];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:o.a,alt:"Home",className:"".concat(c.a.header_home_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest"))}}),Object(l.jsx)("img",{src:o.c,alt:"Ranking",className:"".concat(c.a.header_ranking_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ranking"))}}),Object(l.jsx)("img",{src:o.f,alt:"Summon",className:"".concat(c.a.header_summon_btn),onClick:function(){return d(),void(t.showSummon&&"function"===typeof t.showSummon&&t.showSummon())}}),Object(l.jsx)("img",{src:o.b,alt:"GhostList",className:"".concat(c.a.header_list_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ghostlist"))}})]})}))},500:function(t,e,a){t.exports={header_home_btn:"Header_header_home_btn__w80aS",header_list_btn:"Header_header_list_btn__ZmGs8",header_summon_btn:"Header_header_summon_btn__7wzOf",header_ranking_btn:"Header_header_ranking_btn__328fC"}},535:function(t,e,a){"use strict";var n=a(11);e.a=function(t){var e=t.ghost_id;return"".concat(n.e.assets_url,"/imgs/games/ghost_quest/ghost_images/ghost_id_").concat(e,".png")}}}]);