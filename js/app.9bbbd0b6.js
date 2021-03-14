(function(e){function t(t){for(var i,o,l=t[0],r=t[1],c=t[2],u=0,h=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Graf/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Graf")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("center",[n("header",[n("Toolbar",{on:{"tool-change":e.change_tool}})],1),"Label"==e.currentTool?n("div",{staticClass:"labeler",staticStyle:{margin:"1em 0em 0em"}},[n("sui-input",{on:{keypress:function(e){e.stopPropagation()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.change_label(t)}},model:{value:e.newlabel,callback:function(t){e.newlabel=t},expression:"newlabel"}}),n("br"),n("sui-button",{staticStyle:{height:"30px"},attrs:{color:"green",content:"Edit Label"},on:{click:e.change_label}})],1):e._e(),n("D3Network",{attrs:{id:"grafNet","net-nodes":e.nodes,"net-links":e.links,options:e.options},on:{"node-click":e.enable_node_label,"link-click":e.enable_edge_label}}),n("div",{staticClass:"graf-labeler  "},[n("sui-button",{attrs:{color:"green",content:"Save Image"},on:{click:function(t){return e.onSaveImage()}}}),n("sui-button",{attrs:{color:"green",content:"Save Graph"},on:{click:function(t){return e.onSaveGraf()}}}),n("br"),n("sui-input",{attrs:{placeholder:"Load Graf"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLoadGraf()}},model:{value:e.grafData,callback:function(t){e.grafData=t},expression:"grafData"}})],1)],1)],1)},l=[],r=(n("a630"),n("a434"),n("b0c0"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("a5b7")),c=n.n(r),d=n("d4ec"),u=n("bee2"),h=function(){function e(){Object(d["a"])(this,e)}return Object(u["a"])(e,[{key:"changeGrafColor",value:function(){}},{key:"convertGrafData",value:function(e){var t={};for(var n in e){var i=e[n].sid,a=e[n].tid;i in t?t[i].push(a):t[i]=[a],a in t?t[a].push(i):t[a]=[i]}return t}},{key:"screenshotGraf",value:function(e){var t=document.createElement("img"),n=document.createElement("canvas"),i=(new XMLSerializer).serializeToString(e),a=btoa(i),s="data:image/svg+xml;base64,",o=s+a;t.onload=function(){n.getContext("2d").drawImage(t,0,0)},t.src=o;var l=document.createElement("a");document.body.appendChild(l),l.href=t.src,l.download="test_file",l.click()}},{key:"saveGraf",value:function(e,t){var n=btoa(JSON.stringify({nodes:e,links:t})),i="data:application/txt;base64,"+n,a=document.createElement("a");document.body.appendChild(a),a.href=i,a.download="graf_data",a.click()}},{key:"loadGraf",value:function(e){return JSON.parse(e)}}]),e}(),f=new h,b=(n("caad"),function(){function e(){Object(d["a"])(this,e)}return Object(u["a"])(e,[{key:"bfs",value:function(e,t,n){var i=f.convertGrafData(n),a=new Array,s=[],o={node:e,path:[]};a.push(o);while(a.length>0){var l=a.shift();if(l.node==t)return l.path;if(!s.includes(l.node)){var r=i[l.node];for(var c in r)if(!s.includes(r[c])){var d=JSON.parse(JSON.stringify(l.path));d.push([l.node,r[c]]),a.push({node:r[c],path:d})}s.push(l.node)}}}}]),e}()),p=new b,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"experiemntal"}},[n("sui-menu",{staticStyle:{width:"max-content"}},e._l(e.tools,(function(t){return n("sui-menu-item",{key:t,tag:"a",attrs:{active:e.activeTool==t,icon:""},on:{click:function(n){return e.onToolChange(t)}}},[n("sui-icon",{attrs:{name:e.icons[t]}}),n("br"),e._v(e._s(e.altTexts[t])+" ")],1)})),1)],1)},k=[],g={name:"Toolbar",mounted:function(){var e=this;document.addEventListener("keypress",(function(t){switch(t.key){case"s":e.$set(e,"activeTool","Select");break;case"n":e.$set(e,"activeTool","Node");break;case"e":e.$set(e,"activeTool","Edge");break;case"l":e.$set(e,"activeTool","Label");break;case"r":e.$set(e,"activeTool","Erase");break;case"a":e.$set(e,"activeTool","Algorithm");break;case"v":e.changeVertical();break;default:break}}))},data:function(){return{isVertical:!1,activeTool:"Select",tools:["Select","Node","Edge","Label","Erase","Algorithm"],icons:{Select:"mouse pointer",Node:"circle",Edge:"window minimize",Label:"pencil",Erase:"eraser",Algorithm:"code branch"},altTexts:{Select:"(S)elect",Node:"(N)ode",Edge:"(E)dge",Label:"(L)abel",Erase:"E(r)ase",Algorithm:"(A)lgorithm"}}},methods:{onToolChange:function(e){this.activeTool=e,this.$emit("tool-change",e)}}},m=g,y=n("2877"),w=Object(y["a"])(m,v,k,!1,null,"4bcb9690",null),S=w.exports,_={name:"Graf",components:{D3Network:c.a,Toolbar:S},mounted:function(){document.getElementById("grafNet").addEventListener("click",function(){this.useTool(this.currentTool)}.bind(this),!1),document.addEventListener("keydown",function(e){switch(e.key){case"Shift":this.selectMultiple=!0;break;default:break}}.bind(this),!1),document.addEventListener("keyup",function(){this.selectMultiple=!1}.bind(this),!1)},data:function(){return{currentTool:"",nodelabeler:!1,edgelabeler:!1,selected:-1,selectedPrevious:null,newlabel:"",grafData:"",selectMultiple:!1,selectedNodes:new Set,pathActive:!1,nodes:[{id:1}],links:[],nodeSize:20,canvas:!1}},computed:{options:function(){return{force:3e3,size:{w:window.innerWidth,h:window.innerHeight-200},nodeSize:this.nodeSize,nodeLabels:!0,linkLabels:!0,canvas:this.canvas,linkWidth:3,fontSize:20}}},methods:{onSaveImage:function(){f.screenshotGraf(document.getElementsByClassName("net-svg")[0])},onSaveGraf:function(){f.saveGraf(this.nodes,this.links)},onLoadGraf:function(){var e=f.loadGraf(this.grafData);this.nodes=e.nodes,this.links=e.links,this.grafData=""},useTool:function(e){switch(e){case"Select":this.selectMultiple?this.selectedNodes.add(this.selected):this.selectedNodes=new Set;break;case"Node":this.nodes.push({id:this.nodes.length+1});break;case"Edge":null==this.selectedPrevious?this.selectedPrevious=this.selected+1:this.selectedPrevious!=this.selected+1&&(this.links.push({sid:this.selectedPrevious,tid:this.selected+1,_color:"black"}),this.selectedPrevious=null);break;case"Algorithm":if(this.pathActive){for(a in this.links)this.links[a]._color="black";this.pathActive=!1}else{var t=Array.from(this.selectedNodes),n=p.bfs(t[0]+1,t[1]+1,this.links);for(var i in n)for(var a in this.links)if(n[i][0]==this.links[a].sid&&n[i][1]==this.links[a].tid||n[i][1]==this.links[a].sid&&n[i][0]==this.links[a].tid){this.links[a]._color="red";break}this.selectedNodes=new Set,this.pathActive=!0}break;case"Erase":if(console.log(this.selected),-1!=this.selected){console.log(this.selected);var s=[];for(i in this.links)this.links[i].sid!=this.selected+1&&this.links[i].tid!=this.selected+1&&(console.log(i,this.links.length,this.selected,this.links[i].sid,this.links[i].tid),s.push(this.links[i]));for(i in this.links=JSON.parse(JSON.stringify(s)),this.nodes)if(console.log(i,this.selected),i==this.selected){this.nodes.splice(i,1);break}}break;default:break}},enable_node_label:function(e,t){this.selected=t.index,"Label"===this.currentTool&&(this.nodelabeler=!0,this.edgelabeler=!1),this.newlabel=t.name},enable_edge_label:function(e,t){this.selected=t.index,"Label"===this.currentTool&&(this.edgelabeler=!0,this.nodelabeler=!1),this.newlabel=t.name},change_label:function(){this.edgelabeler&&(this.edgelabeler=!1,this.links[this.selected].name=this.newlabel,this.newlabel="",this.selected=-1),this.nodelabeler&&(this.nodelabeler=!1,this.nodes[this.selected].name=this.newlabel,this.newlabel="",this.selected=-1);var e=this.nodes[0].name;this.nodes[0].name="TEMP",this.nodes[0].name=e},change_tool:function(e){this.currentTool=e}}},E=_,T=(n("b22d"),Object(y["a"])(E,o,l,!1,null,"09eee94a",null)),O=T.exports,x={name:"App",components:{Graf:O}},N=x,G=(n("034f"),Object(y["a"])(N,a,s,!1,null,null,null)),L=G.exports,j=n("080a"),P=n.n(j);i["a"].config.productionTip=!1,i["a"].use(P.a),new i["a"]({render:function(e){return e(L)}}).$mount("#app")},"7f15":function(e,t,n){},"85ec":function(e,t,n){},b22d:function(e,t,n){"use strict";n("7f15")}});
//# sourceMappingURL=app.9bbbd0b6.js.map