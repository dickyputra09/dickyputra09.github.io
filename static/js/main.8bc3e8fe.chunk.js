(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{450:function(a,e,t){a.exports=t(789)},455:function(a,e,t){},624:function(a,e){},626:function(a,e){},789:function(a,e,t){"use strict";t.r(e);var l=t(2),n=t.n(l),r=t(51),c=t.n(r),i=(t(455),t(799)),o=t(798),u=t(422),s=t(20),m=t(420),h=t.n(m),d=t(421),b=t.n(d),p=t(801),v=t(802),k=t(795),g=t(796),E=function(a){return n.a.createElement(p.a,a,n.a.createElement(v.a,null,n.a.createElement(k.a,{source:"id"}),n.a.createElement(k.a,{source:"name"}),n.a.createElement(k.a,{source:"username"}),n.a.createElement(g.a,{source:"email"}),n.a.createElement(k.a,{source:"age"})))},f=t(392),y=t.n(f),B=t(66),j=t.n(B),x=t(168),J=t.n(x),C=t(5),w=t(4),O=t(7),V=t(3),T=t(8),S=t(18),W=t(138),$=t.n(W),P=t(224),I=t(140),N=t(229),K=t(227),U=t(230);$.a.fcRoot(P.a,I.a,N.a,K.a,U.a);var A={type:"column2d",width:"99%",height:"250",dataFormat:"json",dataSource:{chart:{caption:"Jumlah Bank Sampah per Wilayah Besar",subcaption:"Bulan Ini",xaxisname:"Wilayah",yaxisname:"Jumlah"},data:[{label:"Jakarta",value:"110",link:"newchart-xml-jakarta"},{label:"Bekasi",value:"140",link:"newchart-xml-bekasi"},{label:"Bogor",value:"35",link:"newchart-xml-bogor"}],linkeddata:[{id:"jakarta",linkedchart:{chart:{caption:"Jumlah Bank sampah -  Wilayah Jakarta",subcaption:"Bulan Ini",theme:"fusion",rotateValues:"0",plottooltext:"$label, $dataValue"},data:[{label:"Jakarta Utara",value:"30"},{label:"Jakarta Barat",value:"25"},{label:"Jakarta Pusat",value:"20"},{label:"Jakarta Selatan",value:"9"},{label:"Jakarta Timur",value:"25"},{label:"Kepulauan Seribu",value:"1"}]}},{id:"bekasi",linkedchart:{chart:{caption:"Jumlah transaksi sampah -  Wilayah Bekasi",subcaption:"Bulan Ini",theme:"fusion",rotateValues:"0",plottooltext:"$label, $dataValue"},data:[{label:"Bekasi Utara",value:"20"},{label:"Bekasi Barat",value:"15"},{label:"Bantar Gebang",value:"11"},{label:"Jatiasih",value:"10"},{label:"Bekasi Timur",value:"25"},{label:"Jatisampurna",value:"24"},{label:"Medan Satria",value:"6"},{label:"Mustika Jaya",value:"4"},{label:"Pondok Gede",value:"13"},{label:"Pondok Melati",value:"7"},{label:"Rawalumbu",value:"5"},{label:"Kabupaten Bekasi",value:"60"}]}},{id:"bogor",linkedchart:{chart:{caption:"Jumlah transaksi sampah -  Wilayah Bogor",subcaption:"Bulan Ini",theme:"fusion",rotateValues:"0",plottooltext:"$label, $dataValue"},data:[{label:"Bogor Barat",value:""},{label:"Bogor Selatan",value:""},{label:"Bogor Tengah",value:""},{label:"Bogor Timur",value:""},{label:"Bogor Utara",value:""},{label:"Tanah Sareal",value:""},{label:"Kabupaten Bogor",value:""}]}}],linkeddatadata:{id:"jakartaUtara",linkedchart:{chart:{caption:"Jumlah transaksi sampah -  Wilayah Jakarta Utara",subcaption:"Bulan Ini",theme:"fusion",rotateValues:"0",plottooltext:"$label, $dataValue,  $percentValue"},data:[{label:"Kaca",value:"157000"},{label:"Tembaga",value:"172000"},{label:"Plastik",value:"206000"},{label:"Kertas",value:"275000"}]}}}},M=function(a){function e(a){var t;return Object(C.a)(this,e),(t=Object(O.a)(this,Object(V.a)(e).call(this,a))).state={chart:{},currentVal:{Column2D:I.a}},t.renderComplete=t.renderComplete.bind(Object(S.a)(Object(S.a)(t))),t.handlechange=t.handlechange.bind(Object(S.a)(Object(S.a)(t))),t}return Object(T.a)(e,a),Object(w.a)(e,[{key:"renderComplete",value:function(a){this.setState({chart:a})}},{key:"handlechange",value:function(a){this.state.chart.chartType(a.currentTarget.value),this.setState({currentVal:a.currentTarget.value})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement($.a,Object.assign({},A,{onRender:this.renderComplete})),n.a.createElement("br",null),n.a.createElement("span",null,"Choose a chart type:"),n.a.createElement("div",{className:"change-type"},n.a.createElement("div",null,n.a.createElement("select",{name:"chart",value:this.state.currentVal,onChange:this.handlechange},n.a.createElement("option",{value:"column2d"},"Column Chart"),n.a.createElement("option",{value:"bar2d"},"Bar Chart"),n.a.createElement("option",{value:"line"},"Line Chart"),n.a.createElement("option",{value:"pie2d"},"Pie Chart")))))}}]),e}(n.a.Component);$.a.fcRoot(P.a,I.a,N.a,K.a,U.a);var R={type:"column2d",width:"99%",height:250,dataFormat:"json",dataSource:{chart:{caption:"Jumlah Nasabah per Wilayah Besar",subcaption:"Bulan Ini",xaxisname:"Wilayah",yaxisname:"Jumlah",numbersuffix:"k"},data:[{label:"Jakarta",value:"110",link:"newchart-xml-jakarta"},{label:"Bekasi",value:"140",link:"newchart-xml-bekasi"},{label:"Bogor",value:"35",link:"newchart-xml-bogor"}],linkeddata:[{id:"jakarta",linkedchart:{chart:{caption:"Jumlah transaksi sampah -  Wilayah Jakarta",subcaption:"Bulan Ini",numbersuffix:"k",rotateValues:"0",plottooltext:"$label, $dataValue"},data:[{label:"Jakarta Utara",value:"30"},{label:"Jakarta Barat",value:"25"},{label:"Jakarta Pusat",value:"20"},{label:"Jakarta Selatan",value:"9"},{label:"Jakarta Timur",value:"25"},{label:"Kepulauan Seribu",value:"1"}]}}]}},G=function(a){function e(a){var t;return Object(C.a)(this,e),(t=Object(O.a)(this,Object(V.a)(e).call(this,a))).state={chart:{},currentVal:{Column2D:I.a}},t.renderComplete=t.renderComplete.bind(Object(S.a)(Object(S.a)(t))),t.handlechange=t.handlechange.bind(Object(S.a)(Object(S.a)(t))),t}return Object(T.a)(e,a),Object(w.a)(e,[{key:"renderComplete",value:function(a){this.setState({chart:a})}},{key:"handlechange",value:function(a){this.state.chart.chartType(a.currentTarget.value),this.setState({currentVal:a.currentTarget.value})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement($.a,Object.assign({},R,{onRender:this.renderComplete})),n.a.createElement("br",null),n.a.createElement("span",null,"Choose a chart type:"),n.a.createElement("div",{className:"change-type"},n.a.createElement("div",null,n.a.createElement("select",{name:"chart",value:this.state.currentVal,onChange:this.handlechange},n.a.createElement("option",{value:"column2d"},"Column Chart"),n.a.createElement("option",{value:"bar2d"},"Bar Chart"),n.a.createElement("option",{value:"line"},"Line Chart"),n.a.createElement("option",{value:"pie2d"},"Pie Chart")))))}}]),e}(n.a.Component);var H=Object(s.withStyles)(function(a){return{root:{flexGrow:1},paper:{padding:2*a.spacing.unit,color:a.palette.text.secondary},paperChart:{padding:2*a.spacing.unit,textAlign:"center",color:a.palette.text.secondary},paperHeader:{padding:1.5*a.spacing.unit,textAlign:"center",color:a.palette.text.secondary}}})(function(a){var e=a.classes;return n.a.createElement("div",{className:e.root},n.a.createElement(J.a,{container:!0,spacing:24},n.a.createElement(J.a,{xs:12,md:12},n.a.createElement(j.a,{className:e.paperHeader},n.a.createElement(y.a,{title:"Welcome to TAMPAH Admin"}))),n.a.createElement(J.a,{item:!0,xs:12,md:6},n.a.createElement(j.a,{className:e.paper},n.a.createElement(M,null)," ")),n.a.createElement(J.a,{item:!0,xs:12,md:6},n.a.createElement(j.a,{className:e.paper},n.a.createElement(G,null)))))}),D=function(a){return n.a.createElement(p.a,a,n.a.createElement(v.a,null,n.a.createElement(k.a,{source:"id"}),n.a.createElement(k.a,{source:"name"}),n.a.createElement(k.a,{source:"description"})))},F=Object(s.createMuiTheme)({palette:{primary:{main:"#ff4400"},secondary:{light:"#0066ff",main:"#0044ff",contrastText:"#ffffff"}}}),L=Object(u.a)("https://my-json-server.typicode.com/dickyputra09/json-server"),q=function(){return n.a.createElement(i.a,{theme:F,dataProvider:L,dashboard:H},n.a.createElement(o.a,{name:"customer",list:E,icon:h.a}),n.a.createElement(o.a,{name:"bank",list:D,icon:b.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[450,4,1]]]);
//# sourceMappingURL=main.8bc3e8fe.chunk.js.map