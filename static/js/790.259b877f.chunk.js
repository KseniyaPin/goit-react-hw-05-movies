"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[790],{790:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var r=i(439),n=i(791),o=i(87),a=i(689),s="Movies_Form__rKqDz",c="Movies_FormInput__PLg0a",u="Movies_ButtonSearch__ok0YP",l="Movies_MovieList__dk9gu",h="Movies_MovieNo__fpsQ-",d="Movies_MovieItem__Aftw-",m=i(184),v=function(){var e,t=(0,n.useState)([]),i=(0,r.Z)(t,2),v=i[0],f=i[1],_=(0,o.lr)(),M=(0,r.Z)(_,2),j=M[0],p=M[1],I=(0,a.TH)(),g=null!==(e=j.get("id"))&&void 0!==e?e:"",N="https://api.themoviedb.org/3/search/movie?query=".concat(g,"&include_adult=false&language=en-US&page=1");(0,n.useEffect)((function(){fetch(N,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTMwMzRiNTI4MTY1YzE4MjQwMTM2YzBmMzM4MjRjMCIsInN1YiI6IjY0ZTgzZWYzOTBlYTRiMDExZTc4ZTgwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.juvbZHO-iDNDBDlHJ9qABEJJAP9FTBctGdor2APc3oc"}}).then((function(e){return e.json()})).then((function(e){return f(e.results)})).catch((function(e){return console.log("Error message: ",e)}))}),[N]);var T=(0,n.useMemo)((function(){return v.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())}))}),[v,g]);return(0,m.jsxs)("div",{children:[(0,m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===e.target.movieIdValue.value)return p({});p({id:e.target.movieIdValue.value}),e.currentTarget.movieIdValue.value=""},className:s,children:[(0,m.jsx)("input",{type:"text",name:"movieIdValue",className:c}),(0,m.jsx)("button",{className:u,children:"Search movie"})]}),""!==v?(0,m.jsx)("ul",{className:l,children:T.map((function(e){return(0,m.jsx)("li",{className:d,children:(0,m.jsx)(o.rU,{to:"".concat(e.id),state:{from:I},children:(0,m.jsxs)("p",{children:[" ",e.title]})})},e.id)}))}):(0,m.jsx)("h2",{className:h,children:"Sorry we don't have this movie."})]})}}}]);
//# sourceMappingURL=790.259b877f.chunk.js.map