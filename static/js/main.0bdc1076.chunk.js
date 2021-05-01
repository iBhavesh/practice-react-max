(this["webpackJsonppractice-react-max"]=this["webpackJsonppractice-react-max"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(6),n(8)),l=n(2),o=(n(13),n(14),n(0)),d=function(e){var t=e.message,n=void 0===t?"Age should be greater than 0":t,r=e.onClick;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onClick:r,className:"h-full fixed inset-0 w-full bg-b bg-black bg-opacity-80"}),Object(o.jsxs)("div",{className:"overlay-content-div",children:[Object(o.jsx)("span",{onClick:r,className:"absolute top-1 right-1 text-3xl cursor-pointer text-red-700",children:"x"}),Object(o.jsx)("h2",{children:n})]})]})},u=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),u=i[0],b=i[1],j=Object(r.useState)(""),x=Object(l.a)(j,2),m=x[0],f=x[1],h=Object(r.useState)("initialState"),O=Object(l.a)(h,2),p=O[0],g=O[1];return Object(o.jsxs)("div",{className:"bg-purple-400 p-4 mx-auto my-4 rounded-2xl w-11/12 sm:w-96",children:[c&&Object(o.jsx)(d,{message:p,onClick:function(){s(!1)}}),Object(o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),+m<0)return g("Age should be greater than 0"),void s(!0);if(+m>150)return g("Age should be less than 150"),void s(!0);var n={name:u,age:+m,id:new Date(Date()).toISOString()};e.onAddUser(n),f(""),b("")},children:[Object(o.jsxs)("div",{className:"flex gap-4 mb-4 flex-wrap",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",className:"font-bold mb-2 block",children:"Name:"}),Object(o.jsx)("input",{type:"text",required:!0,onChange:function(e){b(e.target.value)},className:"p-2 border-solid rounded border w-80 m-w-full",value:u})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"age",className:"font-bold mb-2 block",children:"Age:"}),Object(o.jsx)("input",{type:"number",required:!0,onChange:function(e){f(e.target.value)},step:"1",max:"150",className:"p-2 border-solid rounded border w-80 m-w-full",value:m})]})]}),Object(o.jsx)("div",{className:"flex justify-end",children:Object(o.jsx)("button",{className:"cursor-pointer py-4 px-8 border border-solid border-purple-900 bg-purple-900 rounded-xl text-white",children:"Add"})})]})]})},b=function(e){return Object(o.jsxs)("div",{className:"flex flex-row justify-between border-solid border border-black rounded-xl p-4 w-full mb-4",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"mr-4",children:e.name}),Object(o.jsx)("h3",{className:"mr-4",children:e.age})]}),Object(o.jsx)("span",{onClick:function(t){e.onClickCross(e.id)},className:"cursor-pointer pt-1 text-3xl text-red-700",children:"x"})]})},j=function(e){var t=function(t){e.onDeleteItem(t)};return e.userList.length<1?Object(o.jsx)("div",{className:"mt-8 mx-auto justify-center flex py-4 w-11/12 sm:w-96 bg-purple-400 rounded-2xl",children:Object(o.jsx)("h3",{children:"No user found! Add a user"})}):Object(o.jsx)("div",{className:"mt-8 mx-auto flex-col flex p-4 w-11/12 sm:w-96 bg-purple-400 rounded-2xl",children:e.userList.map((function(e){return Object(o.jsx)(b,{onClickCross:t,id:e.id,name:e.name,age:e.age},e.id)}))})};var x=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{onAddUser:function(e){c((function(t){return[e].concat(Object(i.a)(n))}))}}),Object(o.jsx)(j,{onDeleteItem:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},userList:n})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),m()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.0bdc1076.chunk.js.map