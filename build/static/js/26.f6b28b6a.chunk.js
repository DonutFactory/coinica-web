(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[26],{1177:function(t,e,n){"use strict";n.r(e);var a=n(6),s=n(20),r=n(0),c=n(28),i=n(456),o=n(482),l=n(11),u=n(498),d=n(487),h=n(66),b=n(533),g=n(476),m=n(480),v=n(463),_=n(603),j=n.n(_),f=n(1),p=function(t){var e=t.earnings,n=t.winStreak,a=t.avatar,c=t.details,i=t.modalState,l=t.setModalState,u=Object(r.useState)(!1),h=Object(s.a)(u,2),b=h[0],_=h[1],p=Object(r.useState)(null),O=Object(s.a)(p,2),k=O[0],y=O[1],x=null===c||void 0===c?void 0:c.key;Object(r.useEffect)((function(){i&&(_(!0),x&&Object(d.d)(x).then((function(t){var e=t.data;if(e){var n,a=(null===(n=e[0][0])||void 0===n?void 0:n.value)||null;console.log({data:e,value:a}),y(a)}})).catch((function(){})).finally((function(){_(!1)})))}),[i]);var N=null;return k&&(N=Array(null===k||void 0===k?void 0:k.rarity).fill(null).map((function(t,e){return Object(f.jsx)("img",{src:v.r,alt:"",className:j.a.starStyle,style:{marginLeft:0!==e?"-30px":"0px"}},e)}))),Object(f.jsxs)(g.a,{show:i,contentClassName:j.a.GhostDetailModalStyle,size:"lg","aria-labelledby":"contained-modal-title-vcenter",style:{backgroundColor:"rgba(0,0,0,0.3)"},children:[Object(f.jsxs)(g.a.Body,{children:[Object(f.jsxs)("h4",{children:["ID: ",x?(x+"").substr(x.length-12):"No data"]}),b?Object(f.jsx)("div",{className:"my-3 w-100 d-flex justify-content-center",children:Object(f.jsx)(o.a,{animation:"grow"})}):Object(f.jsxs)("div",{className:"my-3",children:[k&&Object(f.jsxs)("div",{className:j.a.charAttributesContainer,children:[Object(f.jsxs)("div",{className:"position-relative my-3",children:[Object(f.jsx)("div",{className:j.a.ghostImage,style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),Object(f.jsx)("div",{className:"position-absolute",style:{bottom:"-15px"},children:N})]}),Object(f.jsxs)("div",{className:j.a.charAttriData,children:[Object(f.jsxs)("div",{className:"mb-2",children:["Ghost: ",(null===k||void 0===k?void 0:k.ghost_name)||""]}),Object(f.jsxs)("div",{className:"mb-2",children:["HP: ",(null===k||void 0===k?void 0:k.hitpoints)||""]}),Object(f.jsxs)("div",{className:"mb-2",children:["ATK: ",(null===k||void 0===k?void 0:k.attack)||""]})]}),Object(f.jsxs)("div",{className:j.a.charAttriData,children:[Object(f.jsxs)("div",{className:"mb-2",children:["DEF: ",(null===k||void 0===k?void 0:k.defense)||""]}),Object(f.jsxs)("div",{className:"mb-2",children:["SPD: ",(null===k||void 0===k?void 0:k.speed)||""]}),Object(f.jsxs)("div",{className:"mb-2",children:["LUK: ",(null===k||void 0===k?void 0:k.luck)||""]})]})]}),Object(f.jsx)("div",{className:"d-flex ml-1 mb-2",children:Object(f.jsxs)("div",{className:"d-flex justify-space-between",style:{marginRight:"50px"},children:[e&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{style:{marginRight:"15px",fontWeight:"bold"},children:"Earnings:"}),Object(f.jsx)("span",{style:{fontWeight:"bold",color:"rgb(149, 255, 12)"},children:e+" Token"})]}),n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{style:{marginRight:"15px",fontWeight:"bold"},children:"Win-streak:"}),Object(f.jsx)("span",{style:{fontWeight:"bold"},children:n})]})]})})]})]}),Object(f.jsx)(g.a.Footer,{children:Object(f.jsx)(m.a,{onClick:function(){return l(!1)},children:"Close"})})]})},O=n(534),k=l.e.assets_url,y="".concat(k,"/imgs/games/ghost_quest/ranking/btn_earnings_active.png"),x="".concat(k,"/imgs/games/ghost_quest/ranking/btn_win_streak.png"),N=("".concat(k,"/imgs/games/ghost_quest/modals/autoplay/btn_hint.png"),"".concat(k,"/imgs/games/ghost_quest/ranking/btn_lifetime_inactive.png")),R="".concat(k,"/imgs/games/ghost_quest/ranking/btn_lifetime_active.png"),w="".concat(k,"/imgs/games/ghost_quest/ranking/btn_weekly_inactive.png"),S="".concat(k,"/imgs/games/ghost_quest/ranking/btn_weekly_active.png"),G="".concat(k,"/imgs/games/ghost_quest/ranking/btn_daily_inactive.png"),C="".concat(k,"/imgs/games/ghost_quest/ranking/btn_daily_active.png"),q="".concat(k,"/imgs/games/ghost_quest/ghost_list/btn_sort.png"),Q="".concat(k,"/imgs/games/ghost_quest/ghost_list/btn_details.png"),D="".concat(k,"/audio/games/ghostquest/GQ_RankingBGM.mp3"),A="".concat(k,"/audio/games/ghostquest/GQ_Click.mp3"),E=n(52),B=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"},P=Object(c.b)((function(t){return{ghost_quest:t.ghost_quest}}))((function(t){var e,n=t.place,a=t.data,c=t.sortCategory,o=t.ghost_quest,l=Object(r.useState)(!1),u=Object(s.a)(l,2),d=u[0],h=u[1],b=Object(r.useState)(null),g=Object(s.a)(b,2),m=g[0],v=g[1],_=null===o||void 0===o?void 0:o.volume,k=Object(i.a)(A,{volume:.5*_}),y=Object(s.a)(k,1)[0];return Object(r.useEffect)((function(){null!=a&&function(t){var e=Object(O.a)({ghost_id:t});v(e)}(null===a||void 0===a?void 0:a.ghost_id);console.log({data:a})}),[a]),Object(f.jsxs)("div",{className:j.a.ghostRow,children:[Object(f.jsx)(p,{earnings:(null===a||void 0===a?void 0:a.earned)||null,winStreak:(null===a||void 0===a?void 0:a.win_streak)||null,avatar:m,details:a,modalState:d,setModalState:h}),Object(f.jsx)("div",{className:j.a.ghostImage,style:{backgroundImage:"url(".concat(m,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),Object(f.jsx)("div",{className:j.a.ghostResults,children:Object(f.jsxs)("div",{className:j.a.ghostResultsLife,children:[Object(f.jsxs)("div",{children:[Object(E.a)("gq.ranking.place"),":"]}),Object(f.jsxs)("div",{children:[Object(E.a)("gq.ranking.player"),":"]}),Object(f.jsx)("div",{className:"text-left",children:null!==(null===a||void 0===a?void 0:a.rarity)?"Rarity: ".concat(a.rarity):null}),Object(f.jsxs)("div",{className:"text-left",children:[0===c?"Earnings: ".concat(a.earned):null,1===c?"Win streak: ".concat(a.win_streak):null]})]})}),Object(f.jsxs)("div",{className:j.a.ghostDetails,children:[Object(f.jsx)("div",{children:B(+n+1)}),Object(f.jsx)("div",{children:null!==(null===a||void 0===a?void 0:a.owner)?(e=a.owner+"",e.length>16?"".concat(e.substr(0,15),"..."):e):"No data"}),Object(f.jsx)("div",{className:"hover-cursor",children:Object(f.jsx)("img",{src:Q,alt:"Details",className:j.a.btnDetails,onClick:function(){y(),h(!0)}})})]})]})})),W=("".concat(l.e.assets_url,"/imgs/games/ghost_quest/ghost_list/modal_bg.png"),1075),H={0:"daily",1:"weekly",2:"lifetime"};e.default=Object(c.b)((function(t){return{platform:t.platform,ghost_quest:t.ghost_quest}}),(function(t){return{dispatch:t}}))((function(t){var e=t.ghost_quest,n=null===e||void 0===e?void 0:e.volume,c=Object(r.useRef)(null),l=t.platform.account,g=null===l||void 0===l?void 0:l.username,m=Object(i.a)(A,{volume:.5*n}),_=Object(s.a)(m,1)[0],p=Object(i.a)(D,{volume:.1*n}),O=Object(s.a)(p,2)[1].sound,k=Object(r.useState)(1),Q=Object(s.a)(k,2),E=Q[0],B=Q[1],I=Object(r.useState)(!0),z=Object(s.a)(I,2),T=z[0],M=z[1],K=Object(r.useState)(0),F=Object(s.a)(K,2),L=F[0],U=F[1],J=Object(r.useState)(0),Z=Object(s.a)(J,2),Y=Z[0],V=Z[1],X=Array.isArray(e[Y])?e[Y]:[];Object(b.a)(c,(function(t){var e=t.width,n=t.height,a=Math.min(e/W,n/750);B(.9*a)})),Object(r.useEffect)((function(){return O&&(O.play(),O.on("end",(function(){O.play()}))),function(){O&&O.stop()}}),[O]);var $=function(t){_(),V(t)};return Object(r.useEffect)((function(){if(M(!0),0===L){var e=H[Y];Object(d.f)(e).then((function(e){var n=e.data;n.length&&t.dispatch(Object(h.h)({category:Y,data:n}))})).finally((function(){M(!1)}))}else if(1===L){var n=H[Y];Object(d.g)(n).then((function(e){var n=e.data;n.length&&t.dispatch(Object(h.h)({category:Y,data:n}))})).finally((function(){M(!1)}))}}),[L,Y]),Object(f.jsx)("div",{className:j.a.parent_container,ref:c,children:Object(f.jsxs)("div",{className:j.a.scalable_container,style:{zoom:E,minWidth:"".concat(W,"px"),maxWidth:"".concat(W,"px"),height:"".concat(750,"px")},children:[Object(f.jsx)("div",{className:j.a.header,children:Object(f.jsx)(u.a,Object(a.a)(Object(a.a)({},t),{},{username:g,showSummon:function(){t.history.push("/game/ghostquest/summon")}}))}),Object(f.jsxs)("div",{className:j.a.contents,children:[Object(f.jsxs)("div",{className:j.a.leftSideNav,children:[Object(f.jsx)("div",{className:"my-2 hover-cursor",children:Object(f.jsx)("img",{className:"".concat(0===L?j.a.activeCategory:""," hover-cursor"),src:y,alt:"Earnings",onClick:function(){return U(0)}})}),Object(f.jsx)("div",{className:"my-2 hover-cursor",children:Object(f.jsx)("img",{className:"".concat(1===L?j.a.activeCategory:""," hover-cursor"),src:x,alt:"WinStreak",onClick:function(){return U(1)}})})]}),Object(f.jsxs)("div",{className:j.a.container_modal,children:[Object(f.jsx)("img",{src:v.j,alt:""}),Object(f.jsx)("div",{className:j.a.container_title,children:"Ranking"}),Object(f.jsx)("div",{className:j.a.contentScrollable,children:Object(f.jsx)("div",{className:j.a.rulesContent,children:T?Object(f.jsx)(o.a,{animation:"grow",style:{marginTop:"40%",position:"absolute"}}):X&&X.length>0?X.map((function(t,e){return Object(f.jsx)(P,{sortCategory:L,place:e,data:t},e)})):Object(f.jsx)("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",children:Object(f.jsx)("h3",{children:"No data found"})})})})]}),Object(f.jsx)("div",{className:j.a.rightSideNav,children:Object(f.jsxs)("div",{className:j.a.rightSideNavContent,children:[Object(f.jsx)("div",{className:j.a.sortBtn,children:Object(f.jsx)("img",{src:q,alt:"Sort"})}),Object(f.jsxs)("div",{className:j.a.filterBtns,children:[Object(f.jsx)("img",{src:0===Y?C:G,alt:"Daily",className:"".concat(j.a.btnSvg," hover-cursor"),onClick:function(){return $(0)}}),Object(f.jsx)("img",{src:1===Y?S:w,alt:"Daily",className:"".concat(j.a.btnSvg," hover-cursor"),onClick:function(){return $(1)}}),Object(f.jsx)("img",{src:2===Y?R:N,alt:"Daily",className:"".concat(j.a.btnSvg," hover-cursor"),onClick:function(){return $(2)}})]})]})})]}),Object(f.jsx)("div",{className:j.a.main_container_btm_overlay})]})})}))},456:function(t,e,n){"use strict";var a=n(0),s=n.n(a);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}e.a=function(t,e){void 0===e&&(e={});var c,i=e,o=i.volume,l=void 0===o?1:o,u=i.playbackRate,d=void 0===u?1:u,h=i.soundEnabled,b=void 0===h||h,g=i.interrupt,m=void 0!==g&&g,v=i.onload,_=function(t,e){if(null==t)return{};var n,a,s={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(i,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),j=s.a.useRef(null),f=s.a.useRef(!1),p=s.a.useState(null),O=p[0],k=p[1],y=s.a.useState(null),x=y[0],N=y[1],R=function(){"function"===typeof v&&v.call(this),f.current&&k(1e3*this.duration()),N(this)};c=function(){return n.e(41).then(n.t.bind(null,481,7)).then((function(e){var n;f.current||(j.current=null!==(n=e.Howl)&&void 0!==n?n:e.default.Howl,f.current=!0,new j.current(r({src:Array.isArray(t)?t:[t],volume:l,rate:d,onload:R},_)))})),function(){f.current=!1}},Object(a.useEffect)(c,[]),s.a.useEffect((function(){j.current&&x&&N(new j.current(r({src:Array.isArray(t)?t:[t],volume:l,onload:R},_)))}),[JSON.stringify(t)]),s.a.useEffect((function(){x&&(x.volume(l),x.rate(d))}),[l,d]);var w=s.a.useCallback((function(t){"undefined"===typeof t&&(t={}),x&&(b||t.forceSoundEnabled)&&(m&&x.stop(),t.playbackRate&&x.rate(t.playbackRate),x.play(t.id))}),[x,b,m]),S=s.a.useCallback((function(t){x&&x.stop(t)}),[x]),G=s.a.useCallback((function(t){x&&x.pause(t)}),[x]);return[w,{sound:x,stop:S,pause:G,duration:O}]}},480:function(t,e,n){"use strict";var a=n(2),s=n(21),r=n(454),c=n.n(r),i=n(0),o=n.n(i),l=n(455),u=n(490),d=["bsPrefix","variant","size","active","className","block","type","as"],h=o.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.variant,i=t.size,h=t.active,b=t.className,g=t.block,m=t.type,v=t.as,_=Object(s.a)(t,d),j=Object(l.a)(n,"btn"),f=c()(b,j,h&&"active",r&&j+"-"+r,g&&j+"-block",i&&j+"-"+i);if(_.href)return o.a.createElement(u.a,Object(a.a)({},_,{as:v,ref:e,className:c()(f,_.disabled&&"disabled")}));e&&(_.ref=e),m?_.type=m:v||(_.type="button");var p=v||"button";return o.a.createElement(p,Object(a.a)({},_,{className:f}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=h},482:function(t,e,n){"use strict";var a=n(2),s=n(21),r=n(454),c=n.n(r),i=n(0),o=n.n(i),l=n(455),u=["bsPrefix","variant","animation","size","children","as","className"],d=o.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.variant,i=t.animation,d=t.size,h=t.children,b=t.as,g=void 0===b?"div":b,m=t.className,v=Object(s.a)(t,u),_=(n=Object(l.a)(n,"spinner"))+"-"+i;return o.a.createElement(g,Object(a.a)({ref:e},v,{className:c()(m,_,d&&_+"-"+d,r&&"text-"+r)}),h)}));d.displayName="Spinner",e.a=d},487:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return _})),n.d(e,"a",(function(){return j})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return O}));var a=n(35),s=n.n(a),r=n(59),c=n(141),i=n.n(c),o=n(96),l=n(66),u=n(17),d=n(11),h="".concat(d.e.protocol,"://").concat(d.e.host),b=function(t){var e=t.id,n=Object(u.b)(),a={id:e};return i.a.get(h+"/donut/api/v1/game/ghost-quest/game/data",{params:a,headers:n})},g=function(t){var e=t.id,n=t.username,a=Object(u.b)(),s={id:e,username:n};return i.a.get(h+"/donut/api/v1/game/ghost-quest/init",{params:s,headers:a})},m=function(t){t.id;var e=t.currency,n=t.quantity,a=t.limit,s=Object(u.b)(),r={currency:e,quantity:n,limit:a};return i.a.post(h+"/donut/api/v1/game/ghost-quest/generate/character",r,{headers:s})},v=function(t){var e=Object(u.b)();return i.a.get(h+"/donut/api/v1/game/ghost-quest/character/".concat(t),{headers:e})},_=function(){var t=Object(r.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(u.b)(),t.next=3,i.a.get(h+"/donut/api/v1/game/ghost-quest/characters/alive",{headers:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(r.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(u.b)(),t.next=3,i.a.get(h+"/donut/api/v1/game/ghost-quest/history/characters",{headers:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GetTopWinStreakRank!",e),n=Object(u.b)(),t.next=4,i.a.get(h+"/donut/api/v1/game/ghost-quest/characters/rank/earn/".concat(e),{headers:n});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GetTopWinStreakRank!",e),n=Object(u.b)(),t.next=4,i.a.get(h+"/donut/api/v1/game/ghost-quest/characters/rank/win-streak/".concat(e),{headers:n});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(r.a)(s.a.mark((function t(e){var n,a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.prev=1,t.next=4,b({id:n});case 4:a=t.sent,r=a.data,console.log("updateGhostQuestData!!!",{id:n,data:r}),r&&r.characters?o.b.dispatch(Object(l.b)({game_data:{characters:r.characters}})):o.b.dispatch(Object(l.b)({game_data:null})),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},490:function(t,e,n){"use strict";var a=n(2),s=n(21),r=n(0),c=n.n(r);var i=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return null!=t})).reduce((function(t,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];t.apply(this,a),e.apply(this,a)}}),null)},o=["as","disabled","onKeyDown"];function l(t){return!t||"#"===t.trim()}var u=c.a.forwardRef((function(t,e){var n=t.as,r=void 0===n?"a":n,u=t.disabled,d=t.onKeyDown,h=Object(s.a)(t,o),b=function(t){var e=h.href,n=h.onClick;(u||l(e))&&t.preventDefault(),u?t.stopPropagation():n&&n(t)};return l(h.href)&&(h.role=h.role||"button",h.href=h.href||"#"),u&&(h.tabIndex=-1,h["aria-disabled"]=!0),c.a.createElement(r,Object(a.a)({ref:e},h,{onClick:b,onKeyDown:i((function(t){" "===t.key&&(t.preventDefault(),b(t))}),d)}))}));u.displayName="SafeAnchor";e.a=u},498:function(t,e,n){"use strict";var a=n(20),s=(n(0),n(28)),r=n(456),c=n(463),i=n(499),o=n.n(i),l=n(1);e.a=Object(s.b)((function(t){return{ghost_quest:t.ghost_quest,platform:t.platform}}))((function(t){null===(e=t.platform)||void 0===e||null===(n=e.account)||void 0===n||n.user_game_id;var e,n,s,i=null===t||void 0===t||null===(s=t.ghost_quest)||void 0===s?void 0:s.volume,u=Object(r.a)(c.g,{volume:.5*i}),d=Object(a.a)(u,1)[0];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:c.a,alt:"Home",className:"".concat(o.a.header_home_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest"))}}),Object(l.jsx)("img",{src:c.c,alt:"Ranking",className:"".concat(o.a.header_ranking_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ranking"))}}),Object(l.jsx)("img",{src:c.f,alt:"Summon",className:"".concat(o.a.header_summon_btn),onClick:function(){return d(),void(t.showSummon&&"function"===typeof t.showSummon&&t.showSummon())}}),Object(l.jsx)("img",{src:c.b,alt:"GhostList",className:"".concat(o.a.header_list_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ghostlist"))}})]})}))},499:function(t,e,n){t.exports={header_home_btn:"Header_header_home_btn__w80aS",header_list_btn:"Header_header_list_btn__ZmGs8",header_summon_btn:"Header_header_summon_btn__7wzOf",header_ranking_btn:"Header_header_ranking_btn__328fC"}},534:function(t,e,n){"use strict";var a=n(11);e.a=function(t){var e=t.ghost_id;return"".concat(a.e.assets_url,"/imgs/games/ghost_quest/ghost_images/ghost_id_").concat(e,".png")}},603:function(t,e,n){t.exports={parent_container:"GhostQuestRanking_parent_container__3fYBp",scalable_container:"GhostQuestRanking_scalable_container__1iZU-",main_container_btm_overlay:"GhostQuestRanking_main_container_btm_overlay__1cwmH",header:"GhostQuestRanking_header__ZbtVl",header_home_btn:"GhostQuestRanking_header_home_btn__1Ox_n",header_list_btn:"GhostQuestRanking_header_list_btn__3ymih",header_summon_btn:"GhostQuestRanking_header_summon_btn__3GUat",header_ranking_btn:"GhostQuestRanking_header_ranking_btn__35oA1",contents:"GhostQuestRanking_contents__2HBh_",container_modal:"GhostQuestRanking_container_modal__1mK0Q",fadeInDownBig:"GhostQuestRanking_fadeInDownBig__35u0y",container_title:"GhostQuestRanking_container_title__v3Qe_",contentScrollable:"GhostQuestRanking_contentScrollable__8Isrm",rulesContent:"GhostQuestRanking_rulesContent__ObUsh",sideNav:"GhostQuestRanking_sideNav__1ubWx",leftSideNav:"GhostQuestRanking_leftSideNav__2YAYF",activeCategory:"GhostQuestRanking_activeCategory__259zB",rightSideNav:"GhostQuestRanking_rightSideNav__2O6hh",rightSideNavContent:"GhostQuestRanking_rightSideNavContent__3kk-x",sortBtn:"GhostQuestRanking_sortBtn__160yA",filterBtns:"GhostQuestRanking_filterBtns__1UT3P",btnContainer:"GhostQuestRanking_btnContainer__9bVJm",ghostRow:"GhostQuestRanking_ghostRow__2NOii",ghostImage:"GhostQuestRanking_ghostImage__vx3d6",btnDetails:"GhostQuestRanking_btnDetails__3X8fw",ghostDetails:"GhostQuestRanking_ghostDetails__QAwXH",ghostResults:"GhostQuestRanking_ghostResults__1gluT",ghostResultsLife:"GhostQuestRanking_ghostResultsLife__CT6ZX",GhostDetailModalStyle:"GhostQuestRanking_GhostDetailModalStyle__3VKdP",starStyle:"GhostQuestRanking_starStyle__GUYrZ",charAttributesContainer:"GhostQuestRanking_charAttributesContainer__3JQsW",charAttriData:"GhostQuestRanking_charAttriData__24CMs",charBattlesContent:"GhostQuestRanking_charBattlesContent__3Hcrj"}}}]);