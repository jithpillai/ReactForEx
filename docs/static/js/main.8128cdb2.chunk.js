(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),i=n.n(o),c=(n(18),n(4)),u=n(5),l=n(8),s=n(6),h=n(7),d=n(3),m=n(11),f=(n(22),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).makeForexData=function(e){var t=n.state.countryList,a=[],r=e.rates;if(r){for(var o in t){var i={countryCode:o};for(var c in t)i[c]={},i[c].direct=(r[c]/r[o]).toFixed(4),i[c].inverse=(r[o]/r[c]).toFixed(4);a.push(i)}n.setState({forExData:a})}},n.getImage=function(e,t){var a="https://www.countryflags.io/"+e+"/flat/"+(t=t||n.state.imgSize)+".png";return r.a.createElement("img",{src:a,alt:e})},n.getGridColumns=function(){var e=[],t=n.state.countryList;e.push({Header:"",width:150,accessor:"countryCode",Cell:function(e){return r.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},n.getImage(t[e.value],32),"\xa0\xa0",r.a.createElement("div",null,"1 ",e.value," =",r.a.createElement("br",null),"Inverse:"))}});var a=function(a){var o={accessor:a,Header:function(){return r.a.createElement("span",null,a," \xa0\xa0",n.getImage(t[a]))},Cell:function(e){return r.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%"}},e.value.direct,r.a.createElement("br",null),e.value.inverse)}};e.push(o)};for(var o in t)a(o);return e},Object(d.a)(Object(d.a)(n)).state={imgSize:16,forExData:[],countryList:{INR:"in",USD:"us",GBP:"gb",JPY:"jp",CAD:"ca",CHF:"ch",AUD:"au",NZD:"nz",RUB:"ru",ZAR:"za",MXN:"mx",BRL:"br"}},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=USD").then(function(e){return e.json()}).then(function(t){e.setState({date:t.date}),e.makeForexData(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.getGridColumns();return r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"ForEx Date:")," ",this.state.date,r.a.createElement(m.a,{data:this.state.forExData,columns:e,defaultPageSize:10,getTrProps:function(e,t){return t&&t.row?{style:{background:"black",color:"white"}}:{}},className:"stripped highlight"}))}}]),t}(a.Component)),v=(n(24),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.8128cdb2.chunk.js.map