(this.webpackJsonpcoinica=this.webpackJsonpcoinica||[]).push([[16],{1036:function(t,e,n){"use strict";n.r(e);var r=n(92),a=n.n(r),c=n(136),i=n(14),u=n(0),o=n(47),s=n(169),d=n(91),j=n(449),l=n(499),b=n(19),f=n(730),p=n.n(f),O=n(1),h=function(){return Object(O.jsx)("div",{className:p.a.pageTitleWrapper,children:Object(O.jsx)(d.a,{component:"h1",variant:"h4",children:Object(b.a)("news.title")})})},v=n(20),g=n(124),m=n(5),x=n(450),w=n(453),_=n(731),y=n.n(_),k=function(t){var e=t.data;return Object(O.jsx)(x.a,{className:y.a.container,children:Object(O.jsx)(w.a,{children:e.length?e.map((function(t,e){return Object(O.jsx)(u.Fragment,{children:Object(O.jsx)(d.a,{className:y.a.title,color:"primary",gutterBottom:!0,children:t.title})},e)})):Object(O.jsx)(d.a,{className:y.a.title,color:"primary",variant:"body2",children:Object(b.a)("news.noRecent")})})})},N=function(t){var e=t.news;return Object(O.jsx)(k,{data:e})},T=n(619),F=n.n(T),M=function(t){var e=t.news,n=Object.entries(e);return Object(O.jsx)(u.Fragment,{children:n.map((function(t,e){return Object(O.jsxs)(u.Fragment,{children:[Object(O.jsx)("h3",{children:F()(t[0]).format("Do MMM, YYYY")}),Object(O.jsx)(k,{data:t[1]})]},e)}))})},S=function(t){var e=t.data,n=e.length?e.slice(0,3):[],r=function(t){return t.reduce((function(t,e){return Object(m.a)(Object(m.a)({},t),{},Object(v.a)({},e.createdAt.split("T")[0],[].concat(Object(g.a)(t[e.createdAt.split("T")[0]]||[]),[e])))}),{})};return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{news:n}),function(){if(e.length>3){var t=e.length?e.slice(3):[];return Object(O.jsx)(M,{news:r(t)})}return null}()]})},Y=n(732),W=n.n(Y);e.default=function(){var t=Object(o.d)((function(t){return t.platform})).account,e=Object(o.c)(),n=Object(u.useState)([]),r=Object(i.a)(n,2),b=r[0],f=r[1],p=Object(u.useState)(""),v=Object(i.a)(p,2),g=v[0],m=v[1],x=function(){var t=Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(s.b)(!0)),t.prev=1,t.next=4,Object(l.h)();case 4:n=t.sent,f(n.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m(t.t0.message);case 11:return t.prev=11,e(Object(s.b)(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){t&&x()}),[t]),g?Object(O.jsx)(d.a,{component:"p",align:"center",children:g}):Object(O.jsx)(u.Fragment,{children:Object(O.jsxs)(j.a,{container:!0,xs:!0,className:W.a.container,children:[Object(O.jsx)(j.a,{item:!0,xs:12,children:Object(O.jsx)(h,{})}),Object(O.jsx)(j.a,{item:!0,xs:12,children:Object(O.jsx)(S,{data:b})})]})})}},499:function(t,e,n){"use strict";n.d(e,"l",(function(){return c})),n.d(e,"k",(function(){return i})),n.d(e,"m",(function(){return u})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"o",(function(){return j})),n.d(e,"b",(function(){return l})),n.d(e,"n",(function(){return b})),n.d(e,"c",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"f",(function(){return O})),n.d(e,"h",(function(){return h})),n.d(e,"j",(function(){return v})),n.d(e,"i",(function(){return g}));n(92),n(136),n(137);var r=n(50),a=(n(28),n(166)),c=function(){var t=Object(a.b)();return r.a.get("/donut/api/v1/account/wallets",{headers:t})},i=function(t){var e=Object(a.b)();return r.a.get("/donut/api/v1/account/id/".concat(t),{headers:e})},u=function(t){var e=Object(a.b)();return r.a.get("/donut/api/v1/vip",{params:{id:t},headers:e})},o=function(){return r.a.get("/donut/api/v1/challenge/ranks/daily")},s=function(){return r.a.get("/donut/api/v1/challenge")},d=function(t,e){var n=Object(a.b)();return r.a.post("/donut/api/v1/referral/apply",{code:t,applied_by:e},{headers:n})},j=function(t){var e=Object(a.b)();return r.a.get("/donut/api/v1/referral/history/".concat(t),{headers:e})},l=function(t,e){var n=Object(a.b)();return r.a.get("/donut/api/v1/task/daily",{params:{user:t,game_id:e},headers:n})},b=function(t,e){var n=Object(a.b)();return r.a.get("/donut/api/v1/task/monthly",{params:{user:t,game_id:e},headers:n})},f=function(){return r.a.get("/donut/api/v1/games")},p=function(){return r.a.get("/donut/api/v1/ranking/monthly")},O=function(){return r.a.get("/donut/api/v1/ranking/daily")},h=function(){return r.a.get("/donut/api/v1/news")},v=function(){var t=Object(a.b)();return r.a.get("/donut/api/v1/account/wallet/history",{headers:t})},g=function(){return r.a.get("/")}},730:function(t,e,n){t.exports={pageTitleWrapper:"Header_pageTitleWrapper__2Ms1d"}},731:function(t,e,n){t.exports={container:"NewsCard_container__1S2b0",title:"NewsCard_title__jVf1S"}},732:function(t,e,n){t.exports={container:"News_container__1K-nq"}}}]);