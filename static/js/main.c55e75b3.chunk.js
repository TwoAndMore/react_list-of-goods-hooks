(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(7),r=n.n(s),o=n(3),a=n(6),i=n(1),u=(n(12),n(16)),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var j=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),n=e[0],s=e[1],r=Object(i.useState)(!1),j=Object(o.a)(r,2),O=j[0],h=j[1],d=Object(i.useState)(c.NONE),N=Object(o.a)(d,2),p=N[0],f=N[1],m=Object(i.useState)(1),g=Object(o.a)(m,2),E=g[0],x=g[1],v=function(t,e,n,s){var r=Object(a.a)(t).filter((function(t){return t.length>=s}));switch(e){case c.ALPHABET:r.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:r.sort((function(t,e){return t.length-e.length}));case c.NONE:}return n&&r.reverse(),r}(b,p,O,E);return Object(l.jsx)("div",{className:"App notification is-warning",children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"Goods",children:v.map((function(t){return Object(l.jsx)("li",{className:"Goods__item",children:t},Object(u.a)())}))}),Object(l.jsxs)("div",{className:"options",children:[Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){return f(c.ALPHABET)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){return f(c.LENGTH)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"button is-info",onClick:function(){return h((function(t){return!t}))},children:"Reverse"}),Object(l.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){f(c.NONE),h(!1),x(1)},children:"Reset"})]}),Object(l.jsx)("div",{className:"select is-success",children:Object(l.jsx)("select",{onChange:function(t){return x(+t.target.value)},value:E,children:Object(a.a)(Array(10)).map((function(t,e){return Object(l.jsx)("option",{value:e+1,children:e+1},Object(u.a)())}))})})]}):Object(l.jsx)("button",{type:"button",className:"button is-link",onClick:function(){return s(!0)},children:"Start"})})};r.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c55e75b3.chunk.js.map