(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[35],{1181:function(t,e,s){"use strict";s.r(e);var a=s(6),n=s(19),o=s(0),u=s(26),l=s(458),r=s(11),i=s(534),c=s(720),d=s.n(c),m=s(1),h="".concat(r.e.assets_url,"/imgs/games/ghost_quest/star.png"),_=function(t){var e=t.data,s=e.key,a=e.value,n=null;return a&&(n=Array(a.rarity).fill(null).map((function(t,e){return Object(m.jsx)("img",{src:h,alt:"*",className:d.a.starStyle,style:{marginLeft:0!==e?"-30px":"0px"}},e)}))),Object(m.jsxs)("div",{className:d.a.ghostRow,children:[Object(m.jsx)("div",{className:d.a.ghostImage,style:{background:"url(".concat((null===a||void 0===a?void 0:a.avatar)||null,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),Object(m.jsxs)("div",{className:d.a.ghostResults,children:[Object(m.jsxs)("div",{className:d.a.ghostStarsContainer,children:[Object(m.jsx)("div",{className:d.a.ghostRarityText,children:"Ghost Rarity:"}),Object(m.jsx)("div",{className:d.a.ghostStars,children:n})]}),Object(m.jsxs)("div",{className:d.a.ghostResultsLife,children:[Object(m.jsxs)("div",{className:d.a.dataLeft,children:["ID: ",(s+"").substr((null===s||void 0===s?void 0:s.length)-12)]}),Object(m.jsxs)("div",{className:d.a.dataRight,children:["HP: ",(null===a||void 0===a?void 0:a.hitpoints)||"No data"]})]}),Object(m.jsxs)("div",{className:d.a.ghostAttr,children:[Object(m.jsxs)("div",{className:d.a.dataLeft,children:["ATK: ",(null===a||void 0===a?void 0:a.attack)||"No data"]}),Object(m.jsxs)("div",{className:d.a.dataRight,children:["DEF: ",(null===a||void 0===a?void 0:a.defense)||"No data"]})]}),Object(m.jsxs)("div",{className:d.a.ghostAttr,children:[Object(m.jsxs)("div",{className:d.a.dataLeft,children:["SPD: ",(null===a||void 0===a?void 0:a.speed)||"No data"]}),Object(m.jsxs)("div",{className:d.a.dataRight,children:["LUK: ",(null===a||void 0===a?void 0:a.luck)||"No data"]})]})]})]},s)},b=s(499),g="".concat(r.e.assets_url,"/imgs/games/ghost_quest/ghost_list/modal_bg.png"),v="".concat(r.e.assets_url,"/audio/games/ghostquest/GQ_Summon.mp3"),f=1075;e.default=Object(u.b)((function(t){return{platform:t.platform,ghost_quest:t.ghost_quest}}),(function(t){return{dispatch:t}}))((function(t){var e,s,u,r,c=null===t||void 0===t||null===(e=t.ghost_quest)||void 0===e?void 0:e.volume,h=Object(o.useRef)(null),j=null===t||void 0===t||null===(s=t.location)||void 0===s||null===(u=s.state)||void 0===u?void 0:u.allCharSummoned;console.log({allCharSummoned:j,locationState:null===t||void 0===t||null===(r=t.location)||void 0===r?void 0:r.state});var p=Object(o.useState)(1),S=Object(n.a)(p,2),O=S[0],R=S[1],y=Object(l.a)(v,{volume:.1*c}),x=Object(n.a)(y,2)[1].sound;Object(o.useEffect)((function(){return x&&(x.play(),x.on("end",(function(){x.play()}))),function(){x&&x.stop()}}),[x]),Object(i.a)(h,(function(t){var e=t.width,s=t.height,a=Math.min(e/f,s/750);R(.9*a)})),Object(o.useEffect)((function(){null==j&&t.history.push("/game/ghostquest")}),[j]);return Object(m.jsx)("div",{className:d.a.parent_container,ref:h,children:Object(m.jsxs)("div",{className:d.a.scalable_container,style:{zoom:O,minWidth:"".concat(f,"px"),maxWidth:"".concat(f,"px"),height:"".concat(750,"px")},children:[Object(m.jsx)("div",{className:d.a.header,children:Object(m.jsx)(b.a,Object(a.a)(Object(a.a)({},t),{},{showSummon:function(){t.history.push("/game/ghostquest/summon")}}))}),Object(m.jsx)("div",{className:d.a.contents,children:Object(m.jsxs)("div",{className:d.a.container_modal,children:[Object(m.jsx)("img",{src:g,alt:""}),Object(m.jsx)("div",{className:d.a.contentScrollable,children:Object(m.jsx)("div",{className:d.a.rulesContent,children:Array.isArray(j)&&j.length?j.map((function(t,e){return Object(m.jsx)(_,{data:t},e)})):null})})]})}),Object(m.jsx)("div",{className:d.a.main_container_btm_overlay})]})})}))},458:function(t,e,s){"use strict";var a=s(0),n=s.n(a);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t}).apply(this,arguments)}e.a=function(t,e){void 0===e&&(e={});var u,l=e,r=l.volume,i=void 0===r?1:r,c=l.playbackRate,d=void 0===c?1:c,m=l.soundEnabled,h=void 0===m||m,_=l.interrupt,b=void 0!==_&&_,g=l.onload,v=function(t,e){if(null==t)return{};var s,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)s=o[a],e.indexOf(s)>=0||(n[s]=t[s]);return n}(l,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),f=n.a.useRef(null),j=n.a.useRef(!1),p=n.a.useState(null),S=p[0],O=p[1],R=n.a.useState(null),y=R[0],x=R[1],N=function(){"function"===typeof g&&g.call(this),j.current&&O(1e3*this.duration()),x(this)};u=function(){return s.e(40).then(s.t.bind(null,483,7)).then((function(e){var s;j.current||(f.current=null!==(s=e.Howl)&&void 0!==s?s:e.default.Howl,j.current=!0,new f.current(o({src:Array.isArray(t)?t:[t],volume:i,rate:d,onload:N},v)))})),function(){j.current=!1}},Object(a.useEffect)(u,[]),n.a.useEffect((function(){f.current&&y&&x(new f.current(o({src:Array.isArray(t)?t:[t],volume:i,onload:N},v)))}),[JSON.stringify(t)]),n.a.useEffect((function(){y&&(y.volume(i),y.rate(d))}),[i,d]);var G=n.a.useCallback((function(t){"undefined"===typeof t&&(t={}),y&&(h||t.forceSoundEnabled)&&(b&&y.stop(),t.playbackRate&&y.rate(t.playbackRate),y.play(t.id))}),[y,h,b]),k=n.a.useCallback((function(t){y&&y.stop(t)}),[y]),Q=n.a.useCallback((function(t){y&&y.pause(t)}),[y]);return[G,{sound:y,stop:k,pause:Q,duration:S}]}},499:function(t,e,s){"use strict";var a=s(19),n=(s(0),s(26)),o=s(458),u=s(465),l=s(500),r=s.n(l),i=s(1);e.a=Object(n.b)((function(t){return{ghost_quest:t.ghost_quest,platform:t.platform}}))((function(t){null===(e=t.platform)||void 0===e||null===(s=e.account)||void 0===s||s.user_game_id;var e,s,n,l=null===t||void 0===t||null===(n=t.ghost_quest)||void 0===n?void 0:n.volume,c=Object(o.a)(u.g,{volume:.5*l}),d=Object(a.a)(c,1)[0];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:u.a,alt:"Home",className:"".concat(r.a.header_home_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest"))}}),Object(i.jsx)("img",{src:u.c,alt:"Ranking",className:"".concat(r.a.header_ranking_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ranking"))}}),Object(i.jsx)("img",{src:u.f,alt:"Summon",className:"".concat(r.a.header_summon_btn),onClick:function(){return d(),void(t.showSummon&&"function"===typeof t.showSummon&&t.showSummon())}}),Object(i.jsx)("img",{src:u.b,alt:"GhostList",className:"".concat(r.a.header_list_btn),onClick:function(){return d(),void(t.history&&t.history.push("/game/ghostquest/ghostlist"))}})]})}))},500:function(t,e,s){t.exports={header_home_btn:"Header_header_home_btn__w80aS",header_list_btn:"Header_header_list_btn__ZmGs8",header_summon_btn:"Header_header_summon_btn__7wzOf",header_ranking_btn:"Header_header_ranking_btn__328fC"}},720:function(t,e,s){t.exports={parent_container:"GhostQuestSummonResult_parent_container__2LpsM",scalable_container:"GhostQuestSummonResult_scalable_container__1yusK",main_container_btm_overlay:"GhostQuestSummonResult_main_container_btm_overlay__3ZfWQ",header:"GhostQuestSummonResult_header__1RYYm",header_home_btn:"GhostQuestSummonResult_header_home_btn__2wkpN",header_list_btn:"GhostQuestSummonResult_header_list_btn__N4QwJ",header_summon_btn:"GhostQuestSummonResult_header_summon_btn__iKOv6",header_ranking_btn:"GhostQuestSummonResult_header_ranking_btn__1SLO2",contents:"GhostQuestSummonResult_contents__2a8tz",container_modal:"GhostQuestSummonResult_container_modal__2aTZ-",fadeInDownBig:"GhostQuestSummonResult_fadeInDownBig__2aXii",contentScrollable:"GhostQuestSummonResult_contentScrollable__L6T7Z",rulesContent:"GhostQuestSummonResult_rulesContent__3kwrv",sideNav:"GhostQuestSummonResult_sideNav__BUZc4",sortDetails:"GhostQuestSummonResult_sortDetails__3snBd",ghostRow:"GhostQuestSummonResult_ghostRow__1EpBy",ghostImage:"GhostQuestSummonResult_ghostImage__3zn8Z",ghostResults:"GhostQuestSummonResult_ghostResults__1iQKS",ghostResultsLife:"GhostQuestSummonResult_ghostResultsLife__2p8M8",ghostAttr:"GhostQuestSummonResult_ghostAttr__2gZcn",dataLeft:"GhostQuestSummonResult_dataLeft__s6szy",dataRight:"GhostQuestSummonResult_dataRight__ym4Lr",ghostStarsContainer:"GhostQuestSummonResult_ghostStarsContainer__1gdjd",ghostRarityText:"GhostQuestSummonResult_ghostRarityText__1E52_",ghostStars:"GhostQuestSummonResult_ghostStars__3fGRp",starStyle:"GhostQuestSummonResult_starStyle__3sa9A"}}}]);