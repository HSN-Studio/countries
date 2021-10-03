(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{82:function(e,c,t){},90:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),r=t(35),s=t.n(r),i=t(10),l=(t(82),t(30)),j=t(2);var o=function(e){var c=e.data,t=e.darkMode,n=e.handler;return Object(j.jsx)("div",{className:"country ".concat(t),onClick:function(){return e=c.name.common.replace(" ","-"),void n(e);var e},children:Object(j.jsxs)(l.b,{to:c.name.common.replace(" ","-"),children:[Object(j.jsx)("img",{alt:"country-flag",src:c.flags[0],className:"flag"}),Object(j.jsxs)("div",{className:"country-details",children:[Object(j.jsx)("h2",{children:c.name.common}),Object(j.jsx)("div",{className:"population",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Area:"})," ",c.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" km2"]})}),Object(j.jsx)("div",{className:"region",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Region:"})," ",c.region]})}),Object(j.jsx)("div",{className:"capital",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Capital:"})," ",c.capital]})})]})]})})};var d=function(e){var c=e.data,t=e.page,n=e.darkMode,a=e.handler,r=function(e){a(e)};if(!c)return null;var s=20*(t-1),i=20*t;return c.sort((function(e,c){return e.name.common>c.name.common?1:-1})).slice(s,i).map((function(e){return Object(j.jsx)(o,{data:e,darkMode:n,handler:r})}))},b=t(48);var u=function(e){var c=e.changeHandler,t=e.darkMode;return Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)(b.b,{className:"search-icon ".concat(t)}),Object(j.jsx)("input",{type:"search",placeholder:"Search for a country...",onChange:c,className:"".concat(t)})]})},O=t(134),h=t(135),m=t(130),x=t(133);var f=function(e){var c=e.changeHandler,t=e.region,n=e.darkMode;return Object(j.jsx)("div",{className:"filter",children:Object(j.jsxs)(O.a,{fullWidth:!0,variant:"outlined",sx:{border:"none",outline:"none"},children:[Object(j.jsx)(h.a,{id:"filter-label",className:"".concat(n),children:"Filter by Region:"}),Object(j.jsxs)(m.a,{labelId:"filter-label",id:"filter",value:t,label:"filter",onChange:c,className:"".concat(n),children:[Object(j.jsx)(x.a,{value:"None",className:"menu-item",id:"top",children:"All Countries"}),Object(j.jsx)(x.a,{value:"Africa",className:"menu-item",children:"Africa"}),Object(j.jsx)(x.a,{value:"Americas",className:"menu-item",children:"America"}),Object(j.jsx)(x.a,{value:"Asia",className:"menu-item",children:"Asia"}),Object(j.jsx)(x.a,{value:"Europe",className:"menu-item",children:"Europe"}),Object(j.jsx)(x.a,{value:"Oceania",className:"menu-item",children:"Oceania"})]})]})})},v=t(60);var g=function(e){var c=e.clickHandler,t=e.darkMode;return Object(j.jsxs)("div",{className:"header ".concat(t),children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("h1",{className:"title",children:"Where in the World?"})}),Object(j.jsxs)("button",{className:"toggle ".concat(t),onClick:c,children:[""===t?Object(j.jsx)(v.b,{className:"icon"}):Object(j.jsx)(v.a,{className:"icon"}),Object(j.jsx)("p",{children:"Dark Mode"})]})]})},p=t(132),N=t(137);function k(e){var c=e.changeHandler,t=e.resultsCount;if(0===t)return null;var n=Math.ceil(t/20);return Object(j.jsx)(N.a,{spacing:2,className:"pagination",children:Object(j.jsx)(p.a,{count:n,shape:"rounded",color:"primary",onChange:function(e,t){return c(t)}})})}var y=function(e){var c=e.data,t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],s=a[1],o=c,d=Object(n.useState)(""),u=Object(i.a)(d,2),O=u[0],h=u[1],m=Object(n.useState)(""),x=Object(i.a)(m,2),f=x[0],v=x[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){fetch("https://restcountries.com/v3/name/".concat(o)).then((function(e){return e.json()})).then((function(e){s(e[0]),p(e[0]),N(e[0]),console.log(e[0])}))},p=function(e){var c=Object.entries(e.languages).map((function(e){return e[1]})).join(", ");h(c)},N=function(e){var c=Object.entries(e.currencies).map((function(e){return e[0]})).join(", ");v(c)};return Object(j.jsxs)("div",{className:"country-details-container",children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsxs)("button",{className:"back-btn",children:[Object(j.jsx)(b.a,{className:"back-icon"}),Object(j.jsx)("p",{children:"Back"})]})}),r?Object(j.jsxs)("div",{className:"country-data",children:[Object(j.jsx)("div",{className:"left-col",children:Object(j.jsx)("img",{src:r.flags[0],alt:"country-flag"})}),Object(j.jsxs)("div",{className:"right-col",children:[Object(j.jsx)("h2",{children:r.name.official}),Object(j.jsxs)("div",{className:"country-info",children:[Object(j.jsx)("div",{className:"info-left",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Native Name: "}),r.name.common,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Population: "}),r.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Region: "}),r.region,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Sub Region: "}),r.subregion,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Capital: "}),r.capital,Object(j.jsx)("br",{})]})}),Object(j.jsx)("div",{className:"info-right",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Top Level Domain: "}),r.tld,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Currencies: "}),f||null,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Languages: "}),O||null,Object(j.jsx)("br",{})]})})]}),Object(j.jsxs)("div",{className:"b-c-container",children:[Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Border Countries:"})}),r.borders?r.borders.map((function(e){return Object(j.jsx)("button",{className:"b-country-btn",children:e})})):"No Border Country."]})]})]}):null]})},S=t(17);var C=function(){var e=Object(n.useState)(""),c=Object(i.a)(e,2),t=c[0],a=c[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],b=s[1],O=Object(n.useState)(""),h=Object(i.a)(O,2),m=h[0],x=h[1],v=Object(n.useState)(1),p=Object(i.a)(v,2),N=p[0],C=p[1],M=Object(n.useState)(""),A=Object(i.a)(M,2),H=A[0],B=A[1],E=Object(n.useState)(""),L=Object(i.a)(E,2),R=(L[0],L[1]),w=Object(n.useState)(""),W=Object(i.a)(w,2),D=W[0],I=W[1];Object(n.useEffect)((function(){J()}),[]);var J=function(e){e||fetch("https://restcountries.com/v3/all").then((function(e){return e.json()})).then((function(e){a(e),b(e)}))};return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{clickHandler:function(){B(""===H?"dark-mode":""),document.body.classList.toggle("dark-mode-bg")},darkMode:H}),Object(j.jsxs)(S.c,{children:[Object(j.jsxs)(S.a,{exact:!0,path:"/",children:[Object(j.jsxs)("div",{className:"search-filter",children:[Object(j.jsx)(u,{changeHandler:function(e){if(t.length<1)return null;C(1),e.target.value.length<1&&b(t);var c=t.filter((function(c){return c.name.common.includes(e.target.value)||c.name.common.toLowerCase().includes(e.target.value)}));c.length>0&&b(c)},darkMode:H}),Object(j.jsx)(f,{changeHandler:function(e){if(o.length<1)return null;C(1),x(e.target.value),"None"===e.target.value&&b(t);var c=t.filter((function(c){if(c.region===e.target.value)return c}));"None"!==e.target.value&&b(c)},region:m,darkMode:H})]}),Object(j.jsx)("div",{className:"countries-container",children:Object(j.jsx)(d,{data:o,page:N,darkMode:H,handler:function(e){o.filter((function(c){c.name.common.replace(" ","-")===e&&(R(c),I(e))}))}})}),Object(j.jsx)(k,{changeHandler:function(e){console.log(e),o.length<1||C(e)},resultsCount:o.length,darkMode:H})]}),Object(j.jsx)(S.a,{children:Object(j.jsx)(y,{exact:!0,path:"/".concat(D),data:D})})]})]})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.999cbffb.chunk.js.map