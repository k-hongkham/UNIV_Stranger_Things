(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),s=n(2),u=n.n(s),l=n(4),i=n(3),p="https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft",m=function(){var e=Object(l.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark(function e(t,n){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/posts"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({post:t})});case 3:return a=e.sent,e.next=6,a.json();case 6:if(!1!==(r=e.sent).success){e.next=9;break}throw new Error(r.error.message);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(u.a.mark(function e(t,n){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:n}})});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(u.a.mark(function e(t,n){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:n}})});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark(function e(t,n){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(u.a.mark(function e(t,n,a){var r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/").concat(n,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({message:{content:a}})});case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),g=n(6),O=n(0),S=function(){var e=Object(a.useState)({messages:[],username:"",_id:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),p=s[0],m=s[1],f=Object(a.useState)(""),d=Object(i.a)(f,2),h=d[0],v=d[1];return Object(a.useEffect)(function(){var e=localStorage.getItem("token");e&&(v(e),console.log("What's my token?",h))},[h]),Object(a.useEffect)(function(){!function(){var e=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=5;break}return e.next=3,E(h);case 3:t=e.sent,c({messages:t.data.messages,username:t.data.username,_id:t.data._id});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[h]),r.a.createElement(g.a,null,r.a.createElement("div",{className:"main_page_container"},r.a.createElement(w,{token:h}),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/SignUp",element:r.a.createElement(T,{token:h,setToken:v})}),r.a.createElement(O.a,{path:"/Login",element:r.a.createElement(C,{setToken:v})}),r.a.createElement(O.a,{path:"/Profile",element:r.a.createElement(U,{token:h,setToken:v,theUser:n,setTheUser:c})}),r.a.createElement(O.a,{path:"/Posts",element:r.a.createElement(y,{posts:p,setPosts:m,theUser:n,setTheUser:c,token:h})}))))},j=(n(10),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),u=s[0],l=s[1],p=Object(a.useState)(""),m=Object(i.a)(p,2),d=m[0],h=m[1],E=Object(a.useState)(""),v=Object(i.a)(E,2),b=v[0],g=v[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"CREATE !!!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:n,description:u,price:d,Location:b};console.log(n),console.log(d),f(t,window.localStorage.getItem("token")),c(""),l(""),h(""),console.log("these are out title and details",n,u)}},r.a.createElement("input",{required:!0,type:"text",placeholder:"TITLE",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{required:!0,type:"text",placeholder:"DESCRIPTION",value:u,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{required:!0,type:"text",placeholder:"PRICE $0.00",value:d,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{required:!0,type:"text",placeholder:"WHERE",value:b,onChange:function(e){return g(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"add_posts_btn"},"SUBMIT POST")))}),k=n(11),x=function(e){var t=e.post,n=e.idx,c=e.token,o=e.theUser,s=e.setTheUser,p=Object(a.useState)(""),m=Object(i.a)(p,2),f=m[0],d=m[1],h=function(e,t){var n={msgs:e,post:{title:t.title},fromUser:{username:o.username}},a=o.messages;a.push(n),s(Object(k.a)({},o,{messages:a}))};return r.a.createElement("form",{key:t._id,onSubmit:function(){var e=Object(l.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,b(c,t._id,f);case 3:e.sent,h(f,t),d("");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("input",{required:!0,placeholder:"WORDS",key:"message: ".concat(n),value:f,onChange:function(e){d(e.target.value)}}),r.a.createElement("button",{type:"submit"},"SEND"))},y=function(e){var t=e.token,n=e.theUser,c=e.setTheUser,o=e.posts,s=e.setPosts,p=Object(a.useState)({makeMsg:!0,idx:-1}),f=Object(i.a)(p,2),d=f[0],h=f[1],E=Object(a.useState)(""),b=Object(i.a)(E,2),g=b[0],O=b[1],S=Object(a.useState)(o),k=Object(i.a)(S,2),y=k[0],w=k[1],T=function(e,t){var n=[];e.forEach(function(e){(e.author.username.includes(t)||e.title.includes(t)||e.description.includes(t)||e.price.includes(t)||e.location.includes(t))&&n.push(e)}),w(n)};Object(a.useEffect)(function(){!function(){var e=Object(l.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,n=t.data.posts,s(n),console.log("newPosts:",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),Object(a.useEffect)(function(){T(o,g)},[o]);var C=function(e){d.idx!==e.target.id&&h({makeMsg:!0,idx:e.target.id})},U=function(){var e=Object(l.a)(u.a.mark(function e(t,n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,window.localStorage.getItem("token"));case 2:e.sent,a=[],o.forEach(function(e){e._id!==t&&a.push(e)}),s(a);case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search_bar",onSubmit:function(e){e.preventDefault(),T(o,g)}},r.a.createElement("input",{placeholder:"SEARCH POSTS",value:g,onChange:function(e){O(e.target.value),console.log("SEARCHED"),console.log("SEARCHED",y)}}),r.a.createElement("button",{type:"submit"}," SEARCH")),r.a.createElement(j,null),y.map(function(e,a){return r.a.createElement("div",{className:"search_results",key:e._id},r.a.createElement("h3",null,e.title),r.a.createElement("h2",null,"Seller: ",e.author.username),r.a.createElement("div",null,"Description:"),r.a.createElement("div",null,e.description),r.a.createElement("div",null,"Price:",e.price),r.a.createElement("div",null,"Location: ",e.location),n._id?n._id===e.author._id?r.a.createElement("button",{onClick:function(){return U(e._id,t)}},"DELETE"):d.makeMsg&&a==d.idx?r.a.createElement(x,{post:e,idx:a,token:t,theUser:n,setTheUser:c}):r.a.createElement("button",{id:a,onClick:C},"SEND"):null)}))},w=function(e){e.token;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(g.b,{to:"/"},"HOME"),r.a.createElement(g.b,{to:"/Posts"},"POSTS"),r.a.createElement(g.b,{to:"/SignUp"},"SIGN UP"),r.a.createElement(g.b,{to:"/Login"},"LOG IN"),r.a.createElement(g.b,{to:"/Profile"},"PROFILES"))))},T=function(e){var t=e.setToken,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],s=c[1],p=Object(a.useState)(""),m=Object(i.a)(p,2),f=m[0],h=m[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(){var e=Object(l.a)(u.a.mark(function e(n){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log({username:o,password:f}),e.next=4,d(o,f);case 4:a=e.sent,console.log(a),localStorage.setItem("token",a.data.token),r=localStorage.getItem("token"),console.log("the token",r),t(r);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("input",{type:"text",placeholder:"Username",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Password",value:f,onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{type:"submit"}," REGISTER")))},C=function(e){var t=e.setToken,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],s=c[1],p=Object(a.useState)(""),m=Object(i.a)(p,2),f=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(){var e=Object(l.a)(u.a.mark(function e(n){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log({username:o,password:f}),e.next=4,h(o,f);case 4:a=e.sent,console.log(a),localStorage.setItem("token",a.data.token),r=localStorage.getItem("token"),console.log("the token",r),t(r);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("input",{type:"text",placeholder:"Username",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Password",value:f,onChange:function(e){return d(e.target.value)}}),r.a.createElement("button",{type:"submit"}," LOGIN")))},U=(n(7),function(e){var t=e.setToken,n=e.theUser,a=e.setTheUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"SENT MESSAGES"),r.a.createElement("div",null,n.messages.length?n.messages.map(function(e,t){return e.fromUser.username===n.username?r.a.createElement("div",{key:"Inbox: ".concat(t)},r.a.createElement("div",null," Subject: ",e.post.title),r.a.createElement("div",null," Sent: ",e.content)):null}):r.a.createElement("div",null,"NO MESSAGES"),r.a.createElement("h3",null,"INBOX"),n.messages.length?n.messages.map(function(e,t){return e.fromUser.username===n.username?r.a.createElement("div",{key:"Inbox: ".concat(t)},r.a.createElement("div",null," Subject: ",e.post.title),r.a.createElement("div",null," Message ",e.content),r.a.createElement("div",null," Sent By: ",e.fromUser.username)):null}):r.a.createElement("div",null,"NO MESSAGES")),r.a.createElement("form",{onSubmit:function(){var e=Object(l.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(""),localStorage.clear(),a({messages:[],username:"",_id:""});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("button",{type:"submit"}," LOG OUT")))});o.a.render(r.a.createElement(S,null),document.getElementById("app"))}},[[12,2,1]]]);
//# sourceMappingURL=main.99931998.chunk.js.map