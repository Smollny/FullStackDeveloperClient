(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(18),a=n.n(r),i=(n(25),n(26),n(9)),j=n(10),o=n(12),l=n(11),b="http://localhost:5000/api/",h=n(1),d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={userInfos:[]},c}return Object(j.a)(n,[{key:"refreshList",value:function(){var e=this;fetch(b+"UserInfo").then((function(e){return e.json()})).then((function(t){e.setState({userInfos:t})}))}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return console.log(this.state),Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"table table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"UserID"}),Object(h.jsx)("th",{children:"Date Registration"}),Object(h.jsx)("th",{children:"Date Last Activity"})]})}),Object(h.jsx)("tbody",{children:this.state.userInfos.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.userID}),Object(h.jsx)("td",{children:e.dateregistration}),Object(h.jsx)("td",{children:e.datelastactivity})]},e.Uid)}))})]})})}}]),n}(c.Component),u=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"Home page"})})}}]),n}(c.Component),O=n(13),m=n(2);var p=function(){return Object(h.jsx)(O.a,{children:Object(h.jsxs)("div",{className:"App container",children:[Object(h.jsx)("nav",{className:"navbar navbar-expand-sm bg-light navbar-dark",children:Object(h.jsxs)("ul",{className:"navbar nav",children:[Object(h.jsx)("li",{className:"nav-item m-1",children:Object(h.jsx)(O.b,{className:"btn btn-light btn-outline-primary",to:"/home",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item m-1",children:Object(h.jsx)(O.b,{className:"btn btn-light btn-outline-primary",to:"/userInfo",children:"userInfo"})})]})}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/home",component:u}),Object(h.jsx)(m.a,{path:"/userInfo",component:d})]})]})})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.40a32125.chunk.js.map