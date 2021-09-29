(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{74:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),l=n(13),i=(n(74),n(3));var j=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"country",children:[Object(i.jsx)("img",{alt:"country-flag",src:t.flags[0],className:"flag"}),Object(i.jsxs)("div",{className:"country-details",children:[Object(i.jsx)("h2",{children:t.name.common}),Object(i.jsx)("div",{className:"population",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Area:"})," ",t.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" km2"]})}),Object(i.jsx)("div",{className:"region",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Region:"})," ",t.region]})}),Object(i.jsx)("div",{className:"capital",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Capital:"})," ",t.capital]})})]})]})};var u=function(e){var t=e.data,n=e.page;if(!t)return null;var a=25*(n-1),c=25*n;return t.slice(a,c).map((function(e){return Object(i.jsx)(j,{data:e})}))},o=n(60);var d=function(e){var t=e.changeHandler;return Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)(o.a,{className:"search-icon"}),Object(i.jsx)("input",{type:"search",placeholder:"Search for a country...",onChange:t})]})},h=n(125),b=n(126),O=n(121),m=n(124);var x=function(e){var t=e.changeHandler,n=e.region;return Object(i.jsx)("div",{className:"filter",children:Object(i.jsxs)(h.a,{fullWidth:!0,variant:"outlined",sx:{border:"none",outline:"none"},children:[Object(i.jsx)(b.a,{id:"filter-label",children:"Filter by Region:"}),Object(i.jsxs)(O.a,{labelId:"filter-label",id:"filter",value:n,label:"filter",onChange:t,children:[Object(i.jsx)(m.a,{value:"None",children:Object(i.jsx)("em",{children:"None"})}),Object(i.jsx)(m.a,{value:"Africa",className:"menu-item",children:"Africa"}),Object(i.jsx)(m.a,{value:"Americas",className:"menu-item",children:"America"}),Object(i.jsx)(m.a,{value:"Asia",className:"menu-item",children:"Asia"}),Object(i.jsx)(m.a,{value:"Europe",className:"menu-item",children:"Europe"}),Object(i.jsx)(m.a,{value:"Oceania",className:"menu-item",children:"Oceania"})]})]})})},v=n(62);var g=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{className:"title",children:"Where in the World?"}),Object(i.jsxs)("button",{className:"toggle",children:[Object(i.jsx)(v.a,{className:"icon"}),Object(i.jsx)("p",{children:"Dark Mode"})]})]})},f=n(123),p=n(128);function N(e){var t=e.changeHandler,n=e.resultsCount;if(0===n)return null;var a=Math.ceil(n/25);return console.log(a),Object(i.jsx)(p.a,{spacing:2,children:Object(i.jsx)(f.a,{count:a,shape:"rounded",color:"primary",onChange:function(e,n){return t(n)}})})}var y=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),j=s[0],o=s[1],h=Object(a.useState)(""),b=Object(l.a)(h,2),O=b[0],m=b[1],v=Object(a.useState)(1),f=Object(l.a)(v,2),p=f[0],y=f[1];Object(a.useEffect)((function(){A()}),[]);var A=function(e){e||fetch("https://restcountries.com/v3/all").then((function(e){return e.json()})).then((function(e){c(e),o(e)}))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(g,{}),Object(i.jsx)(d,{changeHandler:function(e){if(n.length<1)return null;y(1),e.target.value.length<1&&o(n);var t=n.filter((function(t){return t.name.common.includes(e.target.value)||t.name.common.toLowerCase().includes(e.target.value)}));t.length>0&&o(t)}}),Object(i.jsx)(x,{changeHandler:function(e){if(j.length<1)return null;y(1),m(e.target.value),"None"===e.target.value&&o(n);var t=n.filter((function(t){if(t.region===e.target.value)return t}));"None"!==e.target.value&&o(t)},region:O}),Object(i.jsx)("div",{className:"countries-container",children:Object(i.jsx)(u,{data:j,page:p})}),Object(i.jsx)(N,{changeHandler:function(e){console.log(e),j.length<1||y(e)},resultsCount:j.length})]})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.68ceb1e1.chunk.js.map