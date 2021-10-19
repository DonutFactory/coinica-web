/*! For license information please see 21.7d7bbb4a.chunk.js.LICENSE.txt */
(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[21],{1101:function(t,e,a){"use strict";a.r(e);var s=a(6),n=a(19),i=a(118),l=a(0),o=a.n(l),c=a(30),r=a(114),u=a(532),d=a(458),h=a(508),v=a(495),b=a(2),g=a(21),m=a(454),_=a.n(m),j=a(456);var f=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],O=["isChild"],p=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function x(t,e,a){var s=(t-e)/(a-e)*100;return Math.round(1e3*s)/1e3}function y(t,e){var a,s=t.min,n=t.now,i=t.max,l=t.label,c=t.srOnly,r=t.striped,u=t.animated,d=t.className,h=t.style,v=t.variant,m=t.bsPrefix,j=Object(g.a)(t,f);return o.a.createElement("div",Object(b.a)({ref:e},j,{role:"progressbar",className:_()(d,m+"-bar",(a={},a["bg-"+v]=v,a[m+"-bar-animated"]=u,a[m+"-bar-striped"]=u||r,a)),style:Object(b.a)({width:x(n,s,i)+"%"},h),"aria-valuenow":n,"aria-valuemin":s,"aria-valuemax":i}),c?o.a.createElement("span",{className:"sr-only"},l):l)}var N=o.a.forwardRef((function(t,e){var a=t.isChild,s=Object(g.a)(t,O);if(s.bsPrefix=Object(j.a)(s.bsPrefix,"progress"),a)return y(s,e);var n=s.min,i=s.now,c=s.max,r=s.label,u=s.srOnly,d=s.striped,h=s.animated,v=s.bsPrefix,m=s.variant,f=s.className,x=s.children,N=Object(g.a)(s,p);return o.a.createElement("div",Object(b.a)({ref:e},N,{className:_()(f,v)}),x?function(t,e){var a=0;return o.a.Children.map(t,(function(t){return o.a.isValidElement(t)?e(t,a++):t}))}(x,(function(t){return Object(l.cloneElement)(t,{isChild:!0})})):y({min:n,now:i,max:c,label:r,srOnly:u,striped:d,animated:h,bsPrefix:v,variant:m},e))}));N.displayName="ProgressBar",N.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var L=N,w=a(1),k=a(531),q=a(54),S=a(10).c.assets_url,G=("".concat(S,"/imgs/games/ghost_quest/ghost_list/modal_bg.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/btn_in_battle_active.png")),E="".concat(S,"/imgs/games/ghost_quest/ghost_list/btn_in_battle_inactive.png"),B="".concat(S,"/imgs/games/ghost_quest/ghost_list/btn_battle_end_active.png"),C="".concat(S,"/imgs/games/ghost_quest/ghost_list/btn_battle_end_inactive.png"),F="".concat(S,"/imgs/games/ghost_quest/ghost_list/btn_sort.png"),R="".concat(S,"/imgs/games/ghost_quest/ghost_list/btn_details.png"),I="".concat(S,"/imgs/games/ghost_quest/ghost_icons/new.png"),D="".concat(S,"/imgs/games/ghost_quest/star.png"),P=("".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/bg_modal.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_oldest.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_newest.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_battleLimitLowToHigh.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_battleLimitHighToLow.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_starLowToHigh.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_starHighToLow.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_lifeLowToHigh.png"),"".concat(S,"/imgs/games/ghost_quest/ghost_list/sort_modal/btn_lifeHighToLow.png"),"".concat(S,"/audio/games/ghostquest/GQ_GhostList.mp3")),H="".concat(S,"/audio/games/ghostquest/GQ_Click.mp3"),A=("".concat(S,"/audio/games/ghostquest/GQ_BackCancel.mp3"),a(691)),V=a.n(A),T={type:"ELIMINATED",color:"#FF0000"},z=function(t){if(t){var e,a,s,n,i,l;if((null===t||void 0===t||null===(e=t.value)||void 0===e?void 0:e.character_life)<=0)return{type:"ELIMINATED",color:"#FF0000"};if(null===t||void 0===t?void 0:t.IS_NEW)return{type:"SUMMONED",color:"#FFFFFF"};if((null===t||void 0===t||null===(a=t.value)||void 0===a?void 0:a.battle_count)!==(null===t||void 0===t||null===(s=t.value)||void 0===s?void 0:s.battle_limit))return{type:"STANDBY",color:"#FBFF00"};if((null===t||void 0===t||null===(n=t.value)||void 0===n?void 0:n.battle_count)===(null===t||void 0===t||null===(i=t.value)||void 0===i?void 0:i.battle_limit)&&(null===t||void 0===t||null===(l=t.value)||void 0===l?void 0:l.character_life)>0)return{type:"WINNER",color:"#0CFF00"}}return{type:"IDLE",color:"#FBFF00"}},M=function(t){for(var e=[],a=0;a<t;a++)e.push(Object(w.jsx)("img",{src:D,alt:"*",width:"25px"},a+"uniq_key"));return e},W=Object(c.b)((function(t){return{ghost_quest:t.ghost_quest}}),(function(t){return{dispatch:t}}))((function(t){t.username;var e=t.dataProps,a=t.inBattle,i=t.navigation,l=t.ghost_quest,o=(t.dispatch,null===l||void 0===l?void 0:l.volume),c=Object(d.a)(H,{volume:.5*o}),r=Object(n.a)(c,1)[0],u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;r();var l=Object(s.a)(Object(s.a)({},t),{},{ghost_avatar:n});e&&(l=Object(s.a)(Object(s.a)({},t),{},{key:e,ghost_avatar:n})),i.history.push("/game/ghostquest/gameplay",{params:l,inBattle:a})};if(a){var h,v,b,g,m,_,j,f,O,p=(null===e||void 0===e?void 0:e[0])||null,x=(null===e||void 0===e?void 0:e[1])||[],y=!1,N=null,S="",G=null,E=null,B=null,C=null,F=null;if(null!=p)N=p.key,S=null===(g=p.value)||void 0===g?void 0:g.ghost_name,y=p.IS_NEW||!1,G=null===(m=p.value)||void 0===m?void 0:m.character_life,E=null===(_=p.value)||void 0===_?void 0:_.hitpoints,B=null===(j=p.value)||void 0===j?void 0:j.battle_count,C=null===(f=p.value)||void 0===f?void 0:f.battle_limit,F=Object(k.a)({ghost_id:null===(O=p.value)||void 0===O?void 0:O.ghost_id});var D=function(t,e){var a=null,s=t/e*100;return s>=0&&s<9?a=Object(w.jsx)(L,{variant:"danger",now:s}):s>=9&&s<26?a=Object(w.jsx)(L,{variant:"warning",now:s}):s>=26&&s<=100&&(a=Object(w.jsx)(L,{variant:"success",now:s})),a}(E,E),P=p?M(null===(h=p.value)||void 0===h?void 0:h.rarity):[],A=null!==G&&null!==B&&null!==C&&G>0&&B===C;return Object(w.jsxs)("div",{className:V.a.ghostRow,children:[Object(w.jsxs)("div",{className:V.a.ghostImageContainer,children:[Object(w.jsx)("div",{className:V.a.ghostImage,style:{backgroundImage:"url(".concat(F,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),0===G?Object(w.jsx)("span",{className:V.a.eliminatedBadge,children:"Eliminated"}):A&&Object(w.jsx)("span",{className:V.a.withdrawBadge,children:"Withdrawable"})]}),Object(w.jsxs)("div",{className:V.a.ghostResults,children:[Object(w.jsxs)("div",{className:V.a.ghostLabelValue,children:[Object(q.a)("gq.details.ghost_name"),":"]}),Object(w.jsxs)("div",{className:V.a.ghostLabelValue,children:[Object(q.a)("gq.details.id"),":"]}),Object(w.jsxs)("div",{className:V.a.ghostLabelValue,children:[Object(q.a)("gq.details.rarity"),":"]}),Object(w.jsxs)("div",{className:V.a.ghostLabelValue,children:[Object(q.a)("gq.details.current_life"),":"]}),Object(w.jsxs)("div",{className:V.a.ghostLabelValue,children:[Object(q.a)("gq.details.battle_limit"),":"]}),Object(w.jsxs)("div",{className:V.a.ghostLabelValue,children:[Object(q.a)("gq.details.status"),":",Object(w.jsx)("span",{style:{marginLeft:"10px",color:null===(v=z(p))||void 0===v?void 0:v.color},children:null===(b=z(p))||void 0===b?void 0:b.type})]}),Object(w.jsx)("div",{className:"".concat(V.a.progressBar," GhostQuestGhostList"),children:D})]}),Object(w.jsxs)("div",{className:V.a.ghostDetails,children:[Object(w.jsx)("div",{className:V.a.ghostLabelValue,children:S||"No data"}),Object(w.jsx)("div",{className:V.a.ghostLabelValue,children:N?"".concat((N+"").substr(N.length-12)):"No data"}),Object(w.jsx)("div",{className:V.a.ghostLabelValue,style:{width:"100%",textAlign:"right"},children:P.length&&P.map((function(t){return t}))}),Object(w.jsx)("div",{className:V.a.ghostLabelValue,children:G?"".concat(G):"0"}),Object(w.jsx)("div",{className:V.a.ghostLabelValue,children:"".concat(null!==B&&null!==C?"".concat(B,"/").concat(C):"No data")}),Object(w.jsxs)("div",{className:"hover-cursor position-relative",style:{transform:"scale(0.9)",marginRight:"-4px"},children:[y&&Object(w.jsx)("img",{src:I,alt:"New",className:V.a.badgeStyle}),Object(w.jsx)("img",{src:R,alt:"Details",className:V.a.btnDetails,onClick:function(){return u({ghost_data:p,ghost_history:x},null,F)}})]})]})]})}var W,Q,J,Y=(null===e||void 0===e?void 0:e[0])||null,K=(null===e||void 0===e?void 0:e[1])||[],U=null,Z=null,X=0,$=0,tt=null;null!=Y&&(U=Y.key,Z=null===(Q=Y.value)||void 0===Q?void 0:Q.character_life,tt=Object(k.a)({ghost_id:null===(J=Y.value)||void 0===J?void 0:J.ghost_id})),K.length>0&&K.forEach((function(t){var e=(null===t||void 0===t?void 0:t.winnerID)===U;X+=e?1:0,$+=e?0:1}));var et=Y?M(null===(W=Y.value)||void 0===W?void 0:W.rarity):[];return Object(w.jsxs)("div",{className:V.a.ghostRow,children:[Object(w.jsx)("div",{className:V.a.ghostImageContainer,children:Object(w.jsx)("div",{className:V.a.ghostImage,style:{backgroundImage:"url(".concat(tt,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})}),Object(w.jsxs)("div",{className:V.a.ghostResults,children:[Object(w.jsxs)("div",{className:V.a.ghostResultsLife,children:[Object(w.jsxs)("div",{children:[Object(q.a)("gq.details.id"),":"]}),Object(w.jsxs)("div",{children:[Object(q.a)("gq.details.rarity"),":"]}),Object(w.jsxs)("div",{children:[Object(q.a)("gq.details.status"),":"]}),Object(w.jsxs)("div",{children:[Object(q.a)("gq.details.current_life"),":"]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{style:{marginRight:"30px"},children:"Win: ".concat(X)}),Object(w.jsx)("span",{children:"Lose: ".concat($)})]})]}),Object(w.jsxs)("div",{className:V.a.ghostDetails,children:[Object(w.jsx)("div",{children:U?"".concat((U+"").substr(U.length-12)):"No data"}),Object(w.jsx)("div",{children:et.length&&et.map((function(t){return t}))}),Object(w.jsx)("div",{style:{color:T.color},children:T.type}),Object(w.jsx)("div",{children:Z?"".concat(Z):"0"}),Object(w.jsx)("div",{className:"hover-cursor",style:{transform:"scale(0.9)",marginRight:"-4px"},children:Object(w.jsx)("img",{src:R,alt:"Details",className:V.a.btnDetails,onClick:function(){return u({ghost_data:Y,ghost_history:K},null,tt)}})})]})]})})),Q=a(494),J=a(68),Y=a(457),K=1075,U={0:"Oldest",1:"Newest",2:"Battle Limit: Low to High",3:"Battle Limit: High to Low",4:"Star: Low to High",5:"Star: High to Low",6:"Life: Low to High",7:"Life: High to Low"},Z=function(t,e){if(null==t||!Array.isArray(t))return t;switch(e){case 0:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=t[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.created_at)-(null===(n=e[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.created_at)}));case 1:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=e[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.created_at)-(null===(n=t[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.created_at)}));case 2:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=t[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.battle_limit)-(null===(n=e[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.battle_limit)}));case 3:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=e[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.battle_limit)-(null===(n=t[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.battle_limit)}));case 4:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=t[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.rarity)-(null===(n=e[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.rarity)}));case 5:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=e[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.rarity)-(null===(n=t[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.rarity)}));case 6:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=t[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.character_life)-(null===(n=e[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.character_life)}));case 7:return Object(i.a)(t).sort((function(t,e){var a,s,n,i;return(null===(a=e[0])||void 0===a||null===(s=a.value)||void 0===s?void 0:s.character_life)-(null===(n=t[0])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.character_life)}));default:return t}};e.default=Object(c.b)((function(t){return{ghost_quest:t.ghost_quest,platform:t.platform}}),(function(t){return{dispatch:t}}))((function(t){var e,a,i,o,c,b,g,m,_,j=null===t||void 0===t||null===(e=t.ghost_quest)||void 0===e?void 0:e.volume,f=(null===(a=t.platform)||void 0===a||null===(i=a.account)||void 0===i?void 0:i.username)||null,O=(null===(o=t.platform)||void 0===o||null===(c=o.account)||void 0===c?void 0:c.user_game_id)||null,p=null===t||void 0===t||null===(b=t.location)||void 0===b||null===(g=b.state)||void 0===g?void 0:g.isFromBattleEndScreen,x=Object(l.useRef)(null),y=Object(l.useState)(!1),N=Object(n.a)(y,2),L=N[0],k=N[1],q=Object(d.a)(P,{volume:.1*j}),S=Object(n.a)(q,2)[1].sound,R=Object(d.a)(H,{volume:.5*j}),I=Object(n.a)(R,1)[0];Object(l.useEffect)((function(){return S&&(S.play(),S.on("end",(function(){S.play()}))),function(){S&&S.stop()}}),[S]);var D=Object(l.useState)(0),A=Object(n.a)(D,2),T=A[0],z=A[1],M=Object(l.useState)(1),X=Object(n.a)(M,2),$=X[0],tt=X[1],et=Object(l.useState)(1),at=Object(n.a)(et,2),st=at[0],nt=at[1],it=Object(l.useState)(!0),lt=Object(n.a)(it,2),ot=lt[0],ct=lt[1],rt=null===t||void 0===t||null===(m=t.ghost_quest)||void 0===m?void 0:m.in_battle_list,ut=null===t||void 0===t||null===(_=t.ghost_quest)||void 0===_?void 0:_.battle_end_list;Object(l.useEffect)((function(){p&&!T&&z(1)}),[p]),Object(l.useEffect)((function(){O&&f?L||k(!0):r.b.error("Please login first")}),[O]),Object(l.useEffect)((function(){L&&(ct(!0),T?Object(Q.a)().then((function(e){var a=e.data,s=Z(a,$);t.dispatch(Object(J.d)({ghost_list:s}))})).catch((function(){r.b.error("Error fetching history characters, please try again")})).finally((function(){ct(!1)})):Object(Q.e)().then((function(e){var a=e.data,s=Z(a,$);console.log({data:a,sortedData:s}),t.dispatch(Object(J.e)({ghost_list:s}))})).catch((function(){r.b.error("Error fetching characters, please try again")})).finally((function(){ct(!1)})))}),[L,T]),Object(l.useEffect)((function(){if(T){var e=Z(ut,$);t.dispatch(Object(J.d)({ghost_list:e}))}else{var a=Z(rt,$);t.dispatch(Object(J.e)({ghost_list:a}))}}),[$]),Object(v.a)(x,(function(t){var e=t.width,a=t.height,s=Math.min(e/K,a/750);nt(.9*s)}));var dt=function(t){I(),z(t)},ht=function(t){switch(t){case"newest":tt(0===$?1:1===$?0:1);break;case"battle-limit":tt(2===$?3:3===$?2:3);break;case"star":tt(4===$?5:5===$?4:5);break;case"life":tt(6===$?7:7===$?6:7)}},vt=function(t){switch(t){case"newest":return 0===$||1===$;case"battle-limit":return 2===$||3===$;case"star":return 4===$||5===$;case"life":return 6===$||7===$;default:return!1}};return console.log({sortSelected:$}),Object(w.jsx)("div",{className:V.a.parent_container,ref:x,children:Object(w.jsxs)("div",{className:V.a.scalable_container,style:{zoom:st,minWidth:"".concat(K,"px"),maxWidth:"".concat(K,"px"),height:"".concat(750,"px"),backgroundImage:"url(".concat(Y.fb,")"),backgroundSize:"".concat(K,"px ").concat(750,"px"),backgroundPositionY:"0px"},children:[Object(w.jsx)("div",{className:V.a.header,children:Object(w.jsx)(h.a,Object(s.a)(Object(s.a)({},t),{},{username:f,showSummon:function(){t.history.push("/game/ghostquest/summon")}}))}),Object(w.jsxs)("div",{className:V.a.contents,children:[Object(w.jsxs)("div",{className:V.a.container_modal,children:[Object(w.jsx)("img",{src:Y.F,alt:""}),Object(w.jsx)("div",{className:V.a.container_title,children:"Ghosts"}),Object(w.jsx)("div",{className:V.a.contentScrollable,children:Object(w.jsx)("div",{className:V.a.rulesContent,children:0===T?rt.length?rt.map((function(e,a){return Object(w.jsx)(W,{username:f,inBattle:!0,dataProps:e,navigation:t},a)})):ot?Object(w.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(w.jsx)(u.a,{animation:"grow"})}):Object(w.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(w.jsx)("h2",{children:"No characters found"})}):ut.length?ut.map((function(e,a){return Object(w.jsx)(W,{username:f,inBattle:!1,dataProps:e,navigation:t},a)})):ot?Object(w.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(w.jsx)(u.a,{animation:"grow"})}):Object(w.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(w.jsx)("h2",{children:"No characters found"})})})})]}),Object(w.jsxs)("div",{className:V.a.leftSideNav,children:[Object(w.jsx)("div",{className:"my-2 hover-cursor",children:0===T?Object(w.jsx)("img",{src:G,alt:"In-Battle"}):Object(w.jsx)("img",{src:E,alt:"In-Battle",onClick:function(){return dt(0)}})}),Object(w.jsx)("div",{className:"my-2 hover-cursor",children:1===T?Object(w.jsx)("img",{src:B,alt:"Battle-End"}):Object(w.jsx)("img",{src:C,alt:"Battle-End",onClick:function(){return dt(1)}})})]}),Object(w.jsx)("div",{className:V.a.rightSideNav,children:Object(w.jsxs)("div",{className:"my-2",children:[Object(w.jsx)("img",{src:F,alt:"Sort"}),Object(w.jsxs)("div",{className:"".concat(V.a.filterBtn," ").concat(vt("newest")?V.a.activeFilter:""),onClick:function(){return ht("newest")},children:[Object(w.jsx)("span",{children:vt("newest")?U[$]:"Newest"}),Object(w.jsx)("img",{src:Y.kb,alt:"",style:{transform:1===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]}),Object(w.jsxs)("div",{className:"".concat(V.a.filterBtn," ").concat(vt("life")?V.a.activeFilter:""),onClick:function(){return ht("life")},children:[Object(w.jsx)("span",{children:vt("life")?U[$]:"Life"}),Object(w.jsx)("img",{src:Y.kb,alt:"",style:{transform:7===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]}),Object(w.jsxs)("div",{className:"".concat(V.a.filterBtn," ").concat(vt("star")?V.a.activeFilter:""),onClick:function(){return ht("star")},children:[Object(w.jsx)("span",{children:vt("star")?U[$]:"Star"}),Object(w.jsx)("img",{src:Y.kb,alt:"",style:{transform:5===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]}),Object(w.jsxs)("div",{className:"".concat(V.a.filterBtn," ").concat(vt("battle-limit")?V.a.activeFilter:""),onClick:function(){return ht("battle-limit")},children:[Object(w.jsx)("span",{children:vt("battle-limit")?U[$]:"Battle Limit"}),Object(w.jsx)("img",{src:Y.kb,alt:"",style:{transform:3===$?"scale(0.9)  rotate(180deg)":"scale(0.9)"}})]})]})})]}),Object(w.jsx)("div",{className:V.a.main_container_btm_overlay})]})})}))},454:function(t,e,a){var s;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var i=typeof s;if("string"===i||"number"===i)t.push(s);else if(Array.isArray(s)){if(s.length){var l=n.apply(null,s);l&&t.push(l)}}else if("object"===i)if(s.toString===Object.prototype.toString)for(var o in s)a.call(s,o)&&s[o]&&t.push(o);else t.push(s.toString())}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(s=function(){return n}.apply(e,[]))||(t.exports=s)}()},456:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a(2);var s=a(0),n=a.n(s),i=n.a.createContext({});i.Consumer,i.Provider;function l(t,e){var a=Object(s.useContext)(i);return t||a[e]||e}},458:function(t,e,a){"use strict";var s=a(0),n=a.n(s);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t}).apply(this,arguments)}e.a=function(t,e){void 0===e&&(e={});var l,o=e,c=o.volume,r=void 0===c?1:c,u=o.playbackRate,d=void 0===u?1:u,h=o.soundEnabled,v=void 0===h||h,b=o.interrupt,g=void 0!==b&&b,m=o.onload,_=function(t,e){if(null==t)return{};var a,s,n={},i=Object.keys(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(o,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),j=n.a.useRef(null),f=n.a.useRef(!1),O=n.a.useState(null),p=O[0],x=O[1],y=n.a.useState(null),N=y[0],L=y[1],w=function(){"function"===typeof m&&m.call(this),f.current&&x(1e3*this.duration()),L(this)};l=function(){return a.e(29).then(a.t.bind(null,534,7)).then((function(e){var a;f.current||(j.current=null!==(a=e.Howl)&&void 0!==a?a:e.default.Howl,f.current=!0,new j.current(i({src:Array.isArray(t)?t:[t],volume:r,rate:d,onload:w},_)))})),function(){f.current=!1}},Object(s.useEffect)(l,[]),n.a.useEffect((function(){j.current&&N&&L(new j.current(i({src:Array.isArray(t)?t:[t],volume:r,onload:w},_)))}),[JSON.stringify(t)]),n.a.useEffect((function(){N&&(N.volume(r),N.rate(d))}),[r,d]);var k=n.a.useCallback((function(t){"undefined"===typeof t&&(t={}),N&&(v||t.forceSoundEnabled)&&(g&&N.stop(),t.playbackRate&&N.rate(t.playbackRate),N.play(t.id))}),[N,v,g]),q=n.a.useCallback((function(t){N&&N.stop(t)}),[N]),S=n.a.useCallback((function(t){N&&N.pause(t)}),[N]);return[k,{sound:N,stop:q,pause:S,duration:p}]}},508:function(t,e,a){"use strict";var s=a(19),n=(a(0),a(30)),i=a(458),l=a(457),o=a(509),c=a.n(o),r=a(1);e.a=Object(n.b)((function(t){return{ghost_quest:t.ghost_quest,platform:t.platform}}))((function(t){null===(e=t.platform)||void 0===e||null===(a=e.account)||void 0===a||a.user_game_id;var e,a,n,o=null===t||void 0===t||null===(n=t.ghost_quest)||void 0===n?void 0:n.volume,u=Object(i.a)(l.x,{volume:.5*o}),d=Object(s.a)(u,1)[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:l.q,alt:"Home",className:"".concat(c.a.header_home_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest"))}}),Object(r.jsx)("img",{src:l.s,alt:"Ranking",className:"".concat(c.a.header_ranking_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ranking"))}}),Object(r.jsx)("img",{src:l.u,alt:"Summon",className:"".concat(c.a.header_summon_btn),onClick:function(){return d(),void(t.showSummon&&"function"===typeof t.showSummon&&t.showSummon())}}),Object(r.jsx)("img",{src:l.r,alt:"GhostList",className:"".concat(c.a.header_list_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ghostlist"))}})]})}))},509:function(t,e,a){t.exports={header_home_btn:"Header_header_home_btn__w80aS",header_list_btn:"Header_header_list_btn__ZmGs8",header_summon_btn:"Header_header_summon_btn__7wzOf",header_ranking_btn:"Header_header_ranking_btn__328fC"}},532:function(t,e,a){"use strict";var s=a(2),n=a(21),i=a(454),l=a.n(i),o=a(0),c=a.n(o),r=a(456),u=["bsPrefix","variant","animation","size","children","as","className"],d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.variant,o=t.animation,d=t.size,h=t.children,v=t.as,b=void 0===v?"div":v,g=t.className,m=Object(n.a)(t,u),_=(a=Object(r.a)(a,"spinner"))+"-"+o;return c.a.createElement(b,Object(s.a)({ref:e},m,{className:l()(g,_,d&&_+"-"+d,i&&"text-"+i)}),h)}));d.displayName="Spinner",e.a=d},691:function(t,e,a){t.exports={parent_container:"GhostList_parent_container__1zxIo",scalable_container:"GhostList_scalable_container__1oKgY",main_container_btm_overlay:"GhostList_main_container_btm_overlay__mqsa9",header:"GhostList_header__3khwt",header_home_btn:"GhostList_header_home_btn__1poSd",header_list_btn:"GhostList_header_list_btn__1rMV1",header_summon_btn:"GhostList_header_summon_btn__rcdNm",header_ranking_btn:"GhostList_header_ranking_btn__2fFS1",contents:"GhostList_contents__qAqhn",container_modal:"GhostList_container_modal__3WCb5",fadeInDownBig:"GhostList_fadeInDownBig__c5AIJ",container_title:"GhostList_container_title__3djZb",contentScrollable:"GhostList_contentScrollable__psPNF",rulesContent:"GhostList_rulesContent__EaTqh",leftSideNav:"GhostList_leftSideNav__1QRxi",rightSideNav:"GhostList_rightSideNav__1Khuk",filterBtn:"GhostList_filterBtn__35Wnn",activeFilter:"GhostList_activeFilter__1kseG",sortDetails:"GhostList_sortDetails__1n8cQ",ghostRow:"GhostList_ghostRow__vz9Ts",btnDetails:"GhostList_btnDetails__2wE2J",ghostDetails:"GhostList_ghostDetails__31riA",ghostResults:"GhostList_ghostResults__q53av",ghostResultsLife:"GhostList_ghostResultsLife__1L20B",progressBar:"GhostList_progressBar__2a0Dj",ghostImageContainer:"GhostList_ghostImageContainer__2vM_7",ghostImage:"GhostList_ghostImage__3Gaks",ghostRarity:"GhostList_ghostRarity__16Ewi",badgeStyle:"GhostList_badgeStyle__3cf-q",withdrawBadge:"GhostList_withdrawBadge__3xMDN",eliminatedBadge:"GhostList_eliminatedBadge__2U-yF",ghostLabelValue:"GhostList_ghostLabelValue__10dcT"}}}]);