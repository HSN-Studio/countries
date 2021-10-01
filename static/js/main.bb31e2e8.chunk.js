(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{82:function(e,c,a){},90:function(e,c,a){"use strict";a.r(c);var t=a(1),n=a.n(t),r=a(35),s=a.n(r),i=a(13),l=(a(82),a(30)),o=a(3);var j=function(e){var c=e.data,a=e.darkMode;return Object(o.jsx)("div",{className:"country ".concat(a),children:Object(o.jsxs)(l.b,{to:c.name.common,children:[Object(o.jsx)("img",{alt:"country-flag",src:c.flags[0],className:"flag"}),Object(o.jsxs)("div",{className:"country-details",children:[Object(o.jsx)("h2",{children:c.name.common}),Object(o.jsx)("div",{className:"population",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Area:"})," ",c.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" km2"]})}),Object(o.jsx)("div",{className:"region",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Region:"})," ",c.region]})}),Object(o.jsx)("div",{className:"capital",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Capital:"})," ",c.capital]})})]})]})})};var d=function(e){var c=e.data,a=e.page,t=e.darkMode;if(!c)return null;var n=20*(a-1),r=20*a;return c.sort((function(e,c){return e.name.common>c.name.common?1:-1})).slice(n,r).map((function(e){return Object(o.jsx)(j,{data:e,darkMode:t})}))},u=a(69);var b=function(e){var c=e.changeHandler,a=e.darkMode;return Object(o.jsxs)("div",{className:"search-container",children:[Object(o.jsx)(u.a,{className:"search-icon ".concat(a)}),Object(o.jsx)("input",{type:"search",placeholder:"Search for a country...",onChange:c,className:"".concat(a)})]})},h=a(134),m=a(135),O=a(130),x=a(133);var g=function(e){var c=e.changeHandler,a=e.region,t=e.darkMode;return Object(o.jsx)("div",{className:"filter",children:Object(o.jsxs)(h.a,{fullWidth:!0,variant:"outlined",sx:{border:"none",outline:"none"},children:[Object(o.jsx)(m.a,{id:"filter-label",className:"".concat(t),children:"Filter by Region:"}),Object(o.jsxs)(O.a,{labelId:"filter-label",id:"filter",value:a,label:"filter",onChange:c,className:"".concat(t),children:[Object(o.jsx)(x.a,{value:"None",className:"menu-item",id:"top",children:"All Countries"}),Object(o.jsx)(x.a,{value:"Africa",className:"menu-item",children:"Africa"}),Object(o.jsx)(x.a,{value:"Americas",className:"menu-item",children:"America"}),Object(o.jsx)(x.a,{value:"Asia",className:"menu-item",children:"Asia"}),Object(o.jsx)(x.a,{value:"Europe",className:"menu-item",children:"Europe"}),Object(o.jsx)(x.a,{value:"Oceania",className:"menu-item",children:"Oceania"})]})]})})},v=a(59);var f=function(e){var c=e.clickHandler,a=e.darkMode;return Object(o.jsxs)("div",{className:"header ".concat(a),children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("h1",{className:"title",children:"Where in the World?"})}),Object(o.jsxs)("button",{className:"toggle ".concat(a),onClick:c,children:[""===a?Object(o.jsx)(v.b,{className:"icon"}):Object(o.jsx)(v.a,{className:"icon"}),Object(o.jsx)("p",{children:"Dark Mode"})]})]})},p=a(132),N=a(137);function k(e){var c=e.changeHandler,a=e.resultsCount;if(0===a)return null;var t=Math.ceil(a/20);return Object(o.jsx)(N.a,{spacing:2,className:"pagination",children:Object(o.jsx)(p.a,{count:t,shape:"rounded",color:"primary",onChange:function(e,a){return c(a)}})})}var M=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("h1",{children:"Back to Home"})})})},y=a(17);var A=function(){var e=Object(t.useState)(""),c=Object(i.a)(e,2),a=c[0],n=c[1],r=Object(t.useState)(""),s=Object(i.a)(r,2),j=s[0],u=s[1],h=Object(t.useState)(""),m=Object(i.a)(h,2),O=m[0],x=m[1],v=Object(t.useState)(1),p=Object(i.a)(v,2),N=p[0],A=p[1],C=Object(t.useState)(""),H=Object(i.a)(C,2),S=H[0],E=H[1];Object(t.useEffect)((function(){w()}),[]);var w=function(e){e||fetch("https://restcountries.com/v3/all").then((function(e){return e.json()})).then((function(e){n(e),u(e)}))};return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{clickHandler:function(){E(""===S?"dark-mode":""),document.body.classList.toggle("dark-mode-bg")},darkMode:S}),Object(o.jsxs)(y.c,{children:[Object(o.jsxs)(y.a,{exact:!0,path:"https://hsn-studio.github.io/countries",children:[Object(o.jsxs)("div",{className:"search-filter",children:[Object(o.jsx)(b,{changeHandler:function(e){if(a.length<1)return null;A(1),e.target.value.length<1&&u(a);var c=a.filter((function(c){return c.name.common.includes(e.target.value)||c.name.common.toLowerCase().includes(e.target.value)}));c.length>0&&u(c)},darkMode:S}),Object(o.jsx)(g,{changeHandler:function(e){if(j.length<1)return null;A(1),x(e.target.value),"None"===e.target.value&&u(a);var c=a.filter((function(c){if(c.region===e.target.value)return c}));"None"!==e.target.value&&u(c)},region:O,darkMode:S})]}),Object(o.jsx)("div",{className:"countries-container",children:Object(o.jsx)(d,{data:j,page:N,darkMode:S})}),Object(o.jsx)(k,{changeHandler:function(e){console.log(e),j.length<1||A(e)},resultsCount:j.length,darkMode:S})]}),Object(o.jsx)(y.a,{exact:!0,path:"/afghanistan",children:Object(o.jsx)(M,{})})]})]})})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.bb31e2e8.chunk.js.map