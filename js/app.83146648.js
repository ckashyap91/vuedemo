(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)r=l[u],s[r]&&p.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vuedemo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06f1":function(t,e,a){t.exports=a.p+"img/logo-white.be712029.png"},"381b":function(t,e,a){t.exports=a.p+"img/logo-banner.197cdc41.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HomeScreen")],1)},n=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"navbar navbar-light bg-light"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[i("img",{staticClass:"logo",attrs:{src:a("9d64"),alt:"Situm"}})]),i("div",{staticClass:"my-2 my-lg-0"},[i("p",{staticClass:"m-0 head-title"},[t._v("Coloca Tu Tarjeta Para Comenzar")])])]),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"embed-responsive embed-responsive-21by9 mb-3 mt-3 p-3"},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/vlDzYIIOYmM",allowfullscreen:""}})])]),i("footer",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 text-white pl-0",attrs:{"data-toggle":"modal","data-target":"#infoDetail"}},[t._v("\r\n            +   "),i("span",{staticClass:"font-22"},[t._v("INFO")])]),i("div",{staticClass:"col-6 text-white text-right pr-0"},[i("span",{staticClass:"font-22"},[t._v("AYUDA")])])])])]),i("div",{staticClass:"modal fade",attrs:{id:"infoDetail",tabindex:"-1",role:"dialog","aria-labelledby":"infoDetailTitle","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header justify-content-center border-0"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalCenterTitle"}},[t._v("INFO")])]),i("div",{staticClass:"modal-body text-center"},[i("p",[i("span",[t._v("SITUM")]),t._v(" es una nueva propuesta que se basa en la generación\r\n            de módulos de autoservicio de cerveza artesanal que\r\n            optimizan la calidad del tiempo o del consumidor para\r\n          disfrutar en diferentes lugares y de diferentes productos")]),i("p",[t._v("Si quieres contactarnos puedes hacerlo por mail a\r\n"),i("a",[t._v("info@situm.com.uy")]),t._v(" o al telefono "),i("a",[t._v("099123456")])])]),i("div",{staticClass:"modal-footer border-0 justify-content-center"},[i("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[t._v("clear")])])])])])])}],o={name:"HomeScreen",props:{}},c=o,d=a("2877"),u=Object(d["a"])(c,r,l,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"splash-page"},[i("nav",{staticClass:"navbar navbar-light bg-dark"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[i("img",{staticClass:"logo",attrs:{src:a("06f1"),alt:"Situm"}})]),i("div",{staticClass:"my-2 my-lg-0"},[i("p",{staticClass:"m-0 head-title text-white"},[t._v("Coloca Tu Tarjeta Para Comenzar")])])]),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row align-items-top"},[i("div",{staticClass:"col-6 font-34"},[t._v("AYUDA")]),i("div",{staticClass:"col-6 text-right"},[i("a",{staticClass:"text-white font-22 btn btn-secondary",attrs:{href:"#"}},[t._v("VOLVER")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-7 font-22"},[i("p",[t._v("BIENVENIDOS A SITU")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation")]),i("ol",{staticClass:"font-22"},[i("li",[t._v("RECARGA TU TARJET")]),i("li",[t._v("ELIGE TU CERVEZ")]),i("li",[t._v("¡SIRVETE TU MISMO")]),i("li",[t._v("¡DISFRUTA TU TRAGO!")])])]),i("div",{staticClass:"col-5 text-right align-self-end"},[i("img",{staticStyle:{width:"50%"},attrs:{src:a("381b")}})])]),i("div",{staticClass:"row mt-3"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"list_carousel responsive"},[i("ul",{attrs:{id:"foo4"}},[i("li",[i("img",{attrs:{src:a("ebb1"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("e392"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("ebb1"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("e392"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("ebb1"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("e392"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("ebb1"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("e392"),alt:"Slide One"}})]),i("li",[i("img",{attrs:{src:a("ebb1"),alt:"Slide One"}})])])])])])])])}],v=a("1157"),b=a.n(v),g={name:"HelpScreen",props:{},mounted:function(){}},C=g,h=Object(d["a"])(C,f,m,!1,null,null,null),_=h.exports,y={name:"app",components:{HomeScreen:p,HelpScreen:_}},S=y,w=Object(d["a"])(S,s,n,!1,null,null,null),O=w.exports,x=a("9f7b"),T=a.n(x);a("f9e3"),a("2dd8"),a("89e3");window.jQuery=b.a,window.$=b.a,i["a"].use(T.a),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(O)}}).$mount("#app")},"89e3":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.c75b1119.png"},e392:function(t,e,a){t.exports=a.p+"img/slide-2.d9a49e71.png"},ebb1:function(t,e,a){t.exports=a.p+"img/slide-1.fff05a72.png"}});
//# sourceMappingURL=app.83146648.js.map