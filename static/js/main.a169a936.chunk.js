(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(3),r=c.n(a),i=c(4),j=(c(9),c(0));var l=function(e){var t=e.data;return Object(j.jsxs)("div",{className:"country",children:[Object(j.jsx)("img",{alt:"country-flag",src:t.flags[0],className:"flag"}),Object(j.jsxs)("div",{className:"country-details",children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("div",{className:"population",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Population:"})," ",t.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})}),Object(j.jsx)("div",{className:"region",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Region:"})," ",t.continent]})}),Object(j.jsx)("div",{className:"capital",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Capital:"})," ",t.capital]})})]})]})};var o=function(e){var t=e.data;return t?(console.log(t),t.map((function(e){return Object(j.jsx)(l,{data:e})}))):null};var d=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){a()}),[]);var a=function(e){e||fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(e){return s(e)}))};return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"countries-container",children:Object(j.jsx)(o,{data:c})})})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.a169a936.chunk.js.map