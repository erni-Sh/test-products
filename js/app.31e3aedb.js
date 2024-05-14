(function(){"use strict";var e={3199:function(e,t,r){var n=r(5130),o=r(3367),a=r(9119),u=r(6883),i=r(9444),s=r(6768),c=r(4232),l=r(144),d=(r(4114),r(1387));const p=(0,s.Lk)("button",{hidden:"",type:"submit"},null,-1);var g=(0,s.pM)({__name:"SearchForm",setup(e){const t=(0,d.lq)(),r=(0,s.EW)((()=>t.query.q)),o=(0,l.KR)();(0,s.wB)(r,(e=>o.value=e));const a=(0,d.rd)(),u=()=>a.push(o.value?`/?q=${o.value}`:"/");return(e,t)=>{const r=(0,s.g2)("InputText");return(0,s.uX)(),(0,s.CE)("form",{class:"flex align-items-center gap-2",onSubmit:(0,n.D$)(u,["prevent"])},[(0,s.bF)(r,{placeholder:"Search",type:"text",class:"w-8rem sm:w-auto",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,8,["modelValue"]),p],32)}}});const f=g;var h=f;const v={class:"ml-2"};var m=(0,s.pM)({__name:"MainHeader",setup(e){const t=(0,l.KR)([{label:"Home",icon:"pi pi-home",to:"/"}]);return(e,r)=>{const n=(0,s.g2)("router-link"),o=(0,s.g2)("Menubar"),a=(0,s.gN)("ripple");return(0,s.uX)(),(0,s.Wv)(o,{model:t.value,class:"container"},{item:(0,s.k6)((({item:e,props:t})=>[(0,s.bo)(((0,s.uX)(),(0,s.Wv)(n,(0,s.v6)({to:e.to,class:"flex align-items-center"},t.action),{default:(0,s.k6)((()=>[(0,s.Lk)("span",{class:(0,c.C4)(e.icon)},null,2),(0,s.Lk)("span",v,(0,c.v_)(e.label),1)])),_:2},1040,["to"])),[[a]])])),end:(0,s.k6)((()=>[(0,s.bF)(h)])),_:1},8,["model"])}}});const y=m;var P=y;r(4603),r(7566),r(8721);const b="store",w=()=>{try{const e=localStorage.getItem(b);return e?JSON.parse(e):void 0}catch(e){return}};var k=r(5147);const R=w()||{isFetching:!0,isErrorLoading:!1,products:null,total:0,rowsPerPage:5,paged:0},q=(0,o.nY)("products",{state:()=>R,actions:{async getProducts({q:e,rowsPerPage:t,paged:r}){this.products=null,this.isFetching=!0,this.isErrorLoading=!1;const n={limit:t.toString(),skip:(t*r).toString(),q:e||""},o=k.N+`${e?.length?k.T.search:k.T.products}?`+new URLSearchParams(n);await fetch(o).then((e=>e.json())).then((e=>{this.isFetching=!1,e.total&&(this.products=e.products,this.total=e.total)})).catch((e=>{this.isFetching=!1,this.isErrorLoading=!0}))}},getters:{}}),A={class:"container"};var E=(0,s.pM)({__name:"App",setup(e){const t=q();return t.$subscribe(((e,t)=>{const r={...t,products:null,isErrorLoading:!1,paged:0};localStorage.setItem(b,JSON.stringify(r))})),(e,t)=>{const r=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(P,{class:"menubar mb-5"}),(0,s.Lk)("div",A,[(0,s.bF)(r)])],64)}}});const _=E;var C=_,L=r(7022);const S={key:0},x={key:0,style:{cursor:"pointer"}};var F=(0,s.pM)({__name:"ProductTable",props:{rowsPerPage:{type:Number,required:!0},paged:{type:Number,required:!0},q:{type:String,required:!1}},setup(e){const t=e,{rowsPerPage:r,paged:n,q:o}={...t},a=[{field:"title",header:"Name",width:"40%",prefix:""},{field:"brand",header:"Brand",width:"27%",prefix:""},{field:"category",header:"Category",width:"18%",prefix:""},{field:"price",header:"Price",width:"15%",prefix:"$"}],u=(0,d.rd)(),i=e=>u.push(`/products/${e}`),p=q();return p.getProducts({rowsPerPage:r,paged:n,q:o}),(e,t)=>{const n=(0,s.g2)("Skeleton"),o=(0,s.g2)("Column");return(0,l.R1)(p).isFetching||(0,l.R1)(p).products?((0,s.uX)(),(0,s.Wv)((0,l.R1)(L.A),{key:1,value:(0,l.R1)(p).products||new Array((0,l.R1)(r)).fill({}),stripedRows:"",onRowClick:t[0]||(t[0]=e=>i(e.data.id)),tableStyle:"min-width: 50rem"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(a,(e=>(0,s.bF)(o,{key:e.field,header:e.header,style:(0,c.Tr)(`width: ${e.width}`)},{body:(0,s.k6)((t=>[t.data[e.field]?((0,s.uX)(),(0,s.CE)("div",x,(0,c.v_)(e.prefix)+(0,c.v_)(t.data[e.field]),1)):((0,s.uX)(),(0,s.Wv)(n,{key:1,width:"90%",height:"19.5px"}))])),_:2},1032,["header","style"]))),64))])),_:1},8,["value"])):((0,s.uX)(),(0,s.CE)("h4",S,"No results"))}}});const O=F;var $=O;const X={key:0},T={key:1},j={key:2};var N=(0,s.pM)({__name:"ProductsPage",setup(e){const t=q(),r=(0,l.KR)(1),n=(0,l.KR)(t.rowsPerPage);(0,s.wB)(t,(e=>{r.value=e.rowsPerPage*e.paged+1;const t=e.rowsPerPage*(e.paged+1);n.value=t>e.total?e.total:t}),{deep:!0});const o=(0,d.lq)(),a=(0,s.EW)((()=>o.query.q));return(0,s.wB)(a,(e=>t.paged=0)),(0,s.hi)((()=>t.paged=0)),(e,o)=>{const a=(0,s.g2)("Paginator"),u=(0,s.g2)("Message");return(0,s.uX)(),(0,s.CE)(s.FK,null,[e.$route.query.q?((0,s.uX)(),(0,s.CE)("h2",X,"Search result for «"+(0,c.v_)(e.$route.query.q)+"»",1)):((0,s.uX)(),(0,s.CE)("h2",T,"Products list")),(0,l.R1)(t).isErrorLoading?((0,s.uX)(),(0,s.Wv)(u,{key:3,severity:"error"},{default:(0,s.k6)((()=>[(0,s.eW)("Products loading error!")])),_:1})):((0,s.uX)(),(0,s.CE)("div",j,[((0,s.uX)(),(0,s.Wv)($,{"rows-per-page":(0,l.R1)(t).rowsPerPage,paged:(0,l.R1)(t).paged,q:e.$route.query.q,key:`${(0,l.R1)(t).rowsPerPage}${(0,l.R1)(t).paged}${e.$route.query.q}`},null,8,["rows-per-page","paged","q"])),(0,l.R1)(t).products||(0,l.R1)(t).isFetching?((0,s.uX)(),(0,s.Wv)(a,{rows:(0,l.R1)(t).rowsPerPage,"onUpdate:rows":o[0]||(o[0]=e=>(0,l.R1)(t).rowsPerPage=e),rowsPerPageOptions:[5,10,25,50,100],totalRecords:(0,l.R1)(t).total,template:{"640px":"PrevPageLink CurrentPageReport NextPageLink",default:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"},currentPageReportTemplate:`${r.value} to ${n.value} of {totalRecords}`,onPage:o[1]||(o[1]=e=>(0,l.R1)(t).paged=e.page),key:e.$route.query.q,class:"mb-7"},null,8,["rows","totalRecords","currentPageReportTemplate"])):(0,s.Q3)("",!0)]))],64)}}});const M=N;var W=M;const K=[{path:"/",name:"Product List",component:W},{path:"/:q",name:"Search",component:W},{path:"/products/:id",name:"Product",component:()=>r.e(99).then(r.bind(r,4099))}],B=(0,d.aE)({history:(0,d.LA)("/test-products/"),routes:K});var I=B,U=r(1402),V=r(2775),D=r(5863),H=r(3888),J=r(6156),Q=r(2211),Y=r(1651),z=r(528),G=r(9796),Z=r(2692),ee=r(4350),te=r(3985),re=r(6846),ne=r(3166),oe=r(3810),ae=[U.A,V.A,D.A,H.A,J.A,Q.A,Y.A,z.A,G.A,Z.A,ee.A,te.A,re.A,ne.A,oe.A];const ue=(0,n.Ef)(C),ie=(0,o.Ey)();ue.directive("ripple",i.A),ae.map((e=>ue.component(e.name,e))),ue.use(I).use(ie).use(a.Ay,{ripple:!0}).use(u.A).mount("#app")},5147:function(e,t,r){r.d(t,{N:function(){return n},T:function(){return o}});const n="https://dummyjson.com/",o={products:"products",search:"products/search"}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var u=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,s=0;s<n.length;s++)(!1&a||u>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,a<u&&(u=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".39626a5c.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="products-test:";r.l=function(n,o,a,u){if(e[n])e[n].push(o);else{var i,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[o];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(g);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/test-products/"}(),function(){var e={524:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var u=r.p+r.u(t),i=new Error,s=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};r.l(u,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,u=n[0],i=n[1],s=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var l=s(r)}for(t&&t(n);c<u.length;c++)a=u[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkproducts_test"]=self["webpackChunkproducts_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(3199)}));n=r.O(n)})();
//# sourceMappingURL=app.31e3aedb.js.map