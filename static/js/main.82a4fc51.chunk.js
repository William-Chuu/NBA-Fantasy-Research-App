(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{130:function(e,t,n){},135:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n.n(r),i=n(12),s=n.n(i),l=(n(130),n(16)),o=n(8),j=n(66),b=n(25),u=n(53),d=n(94),h=n(55),f=n(203),O=n(206),p=n(201),m=n(202),x=n(204),y=n(205),g=n(102);function v(){var e=Object(j.a)(["\n    position: relative;\n    margin-bottom: 0%;\n    "]);return v=function(){return e},e}function P(){var e=Object(j.a)(["\n    position: relative;\n    background: white;\n    margin-left: 10%; \n    margin-right: 10%;\n    margin-bottom: 5%;\n    border-radius: 25px;\n    border: 0px;\n    padding: 1%;\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1)\n    "]);return P=function(){return e},e}function S(e){var t=e.Player,n=e.delPlayer,r=t.HS,i=t.name,s=t.salary,l=t.stats;console.log(t);var o=Object.keys(s),j=Object(h.a)({table:{minWidth:700}})(),S=Object.keys(l),k=S.length;console.log(S),console.log(k);for(var F=[],w=0;w<k;w++){var T;F.push((T={field:"id"},Object(b.a)(T,"field",S[w]),Object(b.a)(T,"headerName",S[w]),Object(b.a)(T,"width",100),Object(b.a)(T,"fontSize","10px"),T))}for(var A=[],N=0;N<Object.keys(l[S[0]]).length;N++){var E={};E.id=N;for(var z=0;z<k;z++)E[S[z]]=l[S[z]][N];A.push(E)}var B="";0==Object.keys(t).length&&(B="Search a player's name to see their info!");var G=u.a.div(P()),C=u.a.div(v());return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)(G,{children:[Object(a.jsx)("h1",{children:B}),Object(a.jsxs)(C,{children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("h1",{style:{fontFamily:"Trebuchet MS",fontSize:"40px",position:"absolute",top:"-18%",left:"43%"},children:i}),Object(a.jsx)("i",{onClick:n.bind(this,i),class:"fas fa-trash-alt",style:{float:"right",fontSize:"1.5em",cursor:"pointer"}})]}),Object(a.jsx)("img",{src:r,alt:i,style:{position:"relative",left:"1%",top:"-3%",transform:"translate(0%,-10%)"}}),Object(a.jsx)(m.a,{component:g.a,style:{position:"absolute",top:"50%",left:"12%",resize:"both",overflow:"auto",width:"88%"},children:Object(a.jsxs)(f.a,{className:j.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(y.a,{children:o.map((function(e){return Object(a.jsxs)(p.a,{align:"left",children:[" ",e," "]},e)}))})}),Object(a.jsx)(O.a,{children:o.map((function(e){return Object(a.jsx)(p.a,{align:"left",children:s[e][Object.keys(s[e])[0]]},e)}))})]})})]}),Object(a.jsx)("div",{style:{height:250,width:"100%"},children:Object(a.jsx)(d.a,{rows:A,columns:F,pageSize:5,checkboxSelection:!0})})]})})}function k(e){var t=e.Players,n=e.delPlayer;return console.log(t),Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsx)(S,{Player:e,delPlayer:n},e.name)}))})}var F=Object(h.a)({table:{minWidth:650}});function w(e){var t=e.Injury,n=F();if(!t||Array.isArray(t)&&0==t.length)return Object(a.jsx)("div",{});for(var r=[],c=Object.values(t),i=Object.keys(c[0]).length,s=0;s<i;s++)r.push([]);return Object.keys(t).map((function(e){var n=t[e];Object.keys(n).map((function(e){r[e].push(n[e])}))})),Object(a.jsx)(m.a,{component:g.a,style:{boxShadow:"0 -2px 10px rgba(0, 0, 0, 1)",display:"inline-block",overflowY:"scroll",maxHeight:"600px"},children:Object(a.jsxs)(f.a,{className:n.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(y.a,{children:Object.keys(t).map((function(e){return Object(a.jsx)(p.a,{align:"left",children:e},e)}))})}),Object(a.jsx)(O.a,{children:r.map((function(e){return Object(a.jsx)(y.a,{children:e.map((function(e){return Object(a.jsx)(p.a,{align:"left",children:e},e)}))},e[3])}))})]})})}n(135);function T(e){var t=e.addPlayer,n=Object(r.useState)(""),i=Object(o.a)(n,2),s=i[0],l=i[1];function j(e){e.preventDefault(),t(s),l("")}return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css",integrity:"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",crossorigin:"anonymous"}),Object(a.jsxs)("form",{onSubmit:j,children:[Object(a.jsx)("input",{type:"text",name:"Name",placeholder:"Player Name ...",value:s,onChange:function(e){l(e.target.value)}}),Object(a.jsx)("i",{className:"fa fa-search",type:"submit",value:"Submit",onClick:j})]})]})}var A=n(69),N=n.n(A);n(152),u.a.div;var E=function(){var e=Object(r.useState)([{name:"Zion Williamson",HS:"https://d2cwpp38twqe55.cloudfront.net/req/202006192/images/players/willizi01.jpg",salary:{Player:{116:"Zion Williamson"},Tm:{116:"NOP"},"2020-21":{116:"$10,245,480"},"2021-22":{116:"$10,733,400"},"2022-23":{116:"$13,534,817"},"2023-24":{116:""},"2024-25":{116:""},"2025-26":{116:""},"Signed Using":{116:"1st Round Pick"},Guaranteed:{116:"$20,002,920"}},stats:{SEASON:{0:"2019-20"},AGE:{0:19},TEAM:{0:"NOP"},LEAGUE:{0:"NBA"},POS:{0:"PF"},G:{0:24},GS:{0:24},MP:{0:27.8},FG:{0:8.8},FGA:{0:15},"FG%":{0:.58},"3P":{0:.3},"3PA":{0:.6},"3P%":{0:.43},"2P":{0:8.5},"2PA":{0:14.4},"2P%":{0:.59},"eFG%":{0:.59},FT:{0:4.8},FTA:{0:7.4},"FT%":{0:.64},ORB:{0:2.7},DRB:{0:3.6},TRB:{0:6.3},AST:{0:2.1},STL:{0:.7},BLK:{0:.4},TOV:{0:2.5},PF:{0:1.8},PTS:{0:22.5}}}]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)([]),j=Object(o.a)(s,2),b=j[0],u=j[1];return Object(r.useEffect)((function(){N.a.get("https://nba-fantasy-app.herokuapp.com/injuries").then((function(e){return e.data})).then((function(e){return u(e)}))}),[u]),Object(a.jsx)("div",{children:Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("div",{style:{marginTop:"5%",marginBottom:"2%"},children:Object(a.jsx)(T,{addPlayer:function(e){var t={data:e};""==e?alert("The search query cannot be empty"):N.a.post("https://nba-fantasy-app.herokuapp.com/player",t).then((function(e){console.log(e.data),""!=e.data?i([].concat(Object(l.a)(n),[e.data])):alert("Please enter a valid player name")})).catch((function(e){console.log(e)}))}})}),Object(a.jsx)("div",{children:Object(a.jsx)(k,{Players:n,delPlayer:function(e){i(n.filter((function(t){return t.name!==e})))}})}),Object(a.jsx)("div",{style:{margin:"10%"},children:Object(a.jsx)(w,{Injury:b})})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),z()}},[[153,1,2]]]);
//# sourceMappingURL=main.82a4fc51.chunk.js.map