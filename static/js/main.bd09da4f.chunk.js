(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),o=n.n(a),s=(n(15),n(10)),i=n(6),d=n(2),l=n(5),j=n.n(l),u=n(0),b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:c,children:n})})};b.defaultProps={color:j.a.string,text:j.a.string,onClick:j.a.func};var h=b,m=function(e){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:e.title}),Object(u.jsx)(h,{color:e.showAdd?"red":"green",text:e.showAdd?"Close":"Add",onClick:e.onAdd})]})};m.defaultProps={title:"Task Tracker"};var f=m,O=n(9),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text," ",Object(u.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})},k=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},p=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),l=i[0],j=i[1],b=Object(c.useState)("false"),h=Object(d.a)(b,2),m=h[0],f=h[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:l,reminder:m}),o(""),j(""),f(!1)):alert("please add task name")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"",children:"task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"",children:"Day & Time"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Day & TIme",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control form-control-check",children:[Object(u.jsx)("label",{htmlFor:"",children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var g=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctor's Appointment",day:"feb 5th at 2:30pm",reminder:!0},{id:2,text:"meet a friend",day:"feb 6th at 2:30pm",reminder:!0},{id:3,text:"interview call",day:"feb 7th at 2:30pm",reminder:!0},{id:4,text:"take dog to the vet",day:"feb 8th at 2:30pm",reminder:!0}]),o=Object(d.a)(a,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(f,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(u.jsx)(p,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+4,n=Object(i.a)({id:t},e);j([].concat(Object(s.a)(l),[n]))}}),l.length>0?Object(u.jsx)(k,{tasks:l,onDelete:function(e){j(l.filter((function(t){return t.id!==e})))},onToggle:function(e){j(l.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks to Show"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.bd09da4f.chunk.js.map