(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),i=n.n(a),s=(n(15),n(16),n(7)),u=n(1),l=n(2);var j=function(){return Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("h1",{children:"Tic tac toe"}),Object(l.jsx)("div",{children:Object(l.jsx)(s.b,{to:"/page2",className:"game_for",children:"\u0418\u0433\u0440\u0430 \u043d\u0430 \u0434\u0432\u043e\u0438\u0445"})}),Object(l.jsx)(u.a,{})]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},b=(n(18),n(10)),f=n(4);n(19),n(20),n(21);function O(e){return Object(l.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function d(e){var t=e.squares,n=e.click;return Object(l.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(l.jsx)(O,{value:e,onClick:function(){return n(t)}},t)}))})}function h(){var e=Object(c.useState)(Array(9).fill(null)),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(f.a)(a,2),s=i[0],u=i[1],j=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(f.a)(t[n],3),r=c[0],a=c[1],i=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[i])return e[r]}return null}(n),o=n.filter((function(e){return null===e})).length;return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("button",{className:"start_new_game",onClick:function(){return r(Array(9).fill(null))},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0438\u0433\u0440\u044b"}),Object(l.jsx)(d,{squares:n,click:function(e){var t=Object(b.a)(n);j||t[e]||(t[e]=s?"X":"O",r(t),u(!s))}}),Object(l.jsx)("p",{className:"winner__info",children:j?"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c "+j:0===o?"\u041d\u0438\u0447\u044c\u044f!":"\u0421\u0435\u0439\u0447\u0430\u0441 \u0445\u043e\u0434\u0438\u0442 "+(s?"X":"O")})]})}var m=function(){return Object(l.jsx)("div",{className:"Page2",children:Object(l.jsx)(h,{})})},x=function(){return Object(u.g)([{path:"/",element:Object(l.jsx)(j,{})},{path:"page2",element:Object(l.jsx)(m,{})}])};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{basename:"/game-of-tic-tac-toe",children:Object(l.jsx)(x,{})})}),document.getElementById("root")),o()}],[[22,1,2]]]);
//# sourceMappingURL=main.39576e47.chunk.js.map