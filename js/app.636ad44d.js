(function(t){function e(e){for(var a,n,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)n=c[d],s[n]&&h.push(s[n][0]),s[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,c=1;c<i.length;c++){var o=i[c];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},s={app:0},r=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vuedemo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"06f1":function(t,e,i){t.exports=i.p+"img/logo-white.be712029.png"},"381b":function(t,e,i){t.exports=i.p+"img/logo-banner.197cdc41.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("button",{on:{click:t.connectToDevice}},[t._v("Connect")]),i("button",{on:{click:t.callFunction}},[t._v("Call API")]),1==this.currentPage?i("HomeScreen",{on:{goToHelpScreen:function(e){return t.changePage(1,2)}}}):t._e(),2==this.currentPage?i("HelpScreen",{on:{goToBack:function(e){return t.goToBack()}}}):t._e(),3==this.currentPage?i("ThankyouScreen"):t._e(),4==this.currentPage?i("ProductListScreen",{attrs:{taps:t.taps,currentUserBalance:t.currentUserBalance,userDetails:t.userDetails},on:{goToProductDetails:function(e){return t.goToProductDetails.apply(void 0,arguments)}}}):t._e(),5==this.currentPage?i("ProductDetailScreen",{attrs:{productDetails:t.productDetails,currentUserBalance:t.currentUserBalance,userDetails:t.userDetails},on:{goToBack:function(e){return t.goToBack()},serve:function(e){return t.serve()}}}):t._e(),6==this.currentPage?i("PouringScreen",{attrs:{productDetails:t.productDetails,currentUserBalance:t.currentUserBalance,userDetails:t.userDetails}}):t._e()],1)},r=[],n=i("f499"),c=i.n(n),o=(i("ac6a"),i("cebc")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._m(1),i("footer",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(2),i("div",{staticClass:"col-6 text-white text-right pr-0"},[i("span",{staticClass:"font-22",on:{click:function(e){return t.goToHelpScreen()}}},[t._v("AYUDA")])])])])]),t._m(3)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{staticClass:"logo",attrs:{src:i("9d64"),alt:"Situm"}})]),a("div",{staticClass:"my-2 my-lg-0"},[a("p",{staticClass:"m-0 head-title"},[t._v("Coloca Tu Tarjeta Para Comenzar")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"embed-responsive embed-responsive-21by9 mb-3 mt-3 p-3"},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/vlDzYIIOYmM",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-6 text-white pl-0",attrs:{"data-toggle":"modal","data-target":"#infoDetail"}},[t._v("\n          +   \n          "),i("span",{staticClass:"font-22"},[t._v("INFO")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"infoDetail",tabindex:"-1",role:"dialog","aria-labelledby":"infoDetailTitle","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header justify-content-center border-0"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalCenterTitle"}},[t._v("INFO")])]),i("div",{staticClass:"modal-body text-center"},[i("p",[i("span",[t._v("SITUM")]),t._v(" es una nueva propuesta que se basa en la generación\n            de módulos de autoservicio de cerveza artesanal que\n            optimizan la calidad del tiempo o del consumidor para\n            disfrutar en diferentes lugares y de diferentes productos\n          ")]),i("p",[t._v("\n            Si quieres contactarnos puedes hacerlo por mail a\n            "),i("a",[t._v("info@situm.com.uy")]),t._v(" o al telefono\n            "),i("a",[t._v("099123456")])])]),i("div",{staticClass:"modal-footer border-0 justify-content-center"},[i("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[t._v("clear")])])])])])}],d={name:"HomeScreen",props:{},methods:{goToHelpScreen:function(){this.$emit("goToHelpScreen")}}},h=d,v=i("2877"),f=Object(v["a"])(h,l,u,!1,null,null,null),g=f.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"splash-page"},[t._m(0),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row align-items-top"},[i("div",{staticClass:"col-6 font-34"},[t._v("AYUDA")]),i("div",{staticClass:"col-6 text-right"},[i("a",{staticClass:"text-white font-22 btn btn-secondary",attrs:{href:"#"},on:{click:function(e){return t.goToBack()}}},[t._v("VOLVER")])])]),t._m(1),t._m(2)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light bg-dark"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{staticClass:"logo",attrs:{src:i("06f1"),alt:"Situm"}})]),a("div",{staticClass:"my-2 my-lg-0"},[a("p",{staticClass:"m-0 head-title text-white"},[t._v("Coloca Tu Tarjeta Para Comenzar")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-7 font-22"},[a("p",[t._v("BIENVENIDOS A SITU")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation")]),a("ol",{staticClass:"font-22"},[a("li",[t._v("RECARGA TU TARJET")]),a("li",[t._v("ELIGE TU CERVEZ")]),a("li",[t._v("¡SIRVETE TU MISMO")]),a("li",[t._v("¡DISFRUTA TU TRAGO!")])])]),a("div",{staticClass:"col-5 text-right align-self-end"},[a("img",{staticStyle:{width:"50%"},attrs:{src:i("381b")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"list_carousel responsive"},[a("ul",{attrs:{id:"foo4"}},[a("li",[a("img",{attrs:{src:i("ebb1"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("e392"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("ebb1"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("e392"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("ebb1"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("e392"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("ebb1"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("e392"),alt:"Slide One"}})]),a("li",[a("img",{attrs:{src:i("ebb1"),alt:"Slide One"}})])])])])])}],_=i("1157"),C=i.n(_),b={name:"HelpScreen",props:{},mounted:function(){},methods:{goToBack:function(){this.$emit("goToBack")}}},D=b,S=Object(v["a"])(D,m,p,!1,null,null,null),y=S.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"splash-page"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-12 text-white text-center"},[a("h1",{staticClass:"text-center mt-0 mb-3 text-normal"},[t._v("¡SALUD!")]),a("h1",{staticClass:"text-center mt-5 mb-5 text-normal"},[t._v("GRACIAS POR SER PARTE DE")]),a("img",{staticStyle:{width:"50%"},attrs:{src:i("381b"),alt:"Situm"}})])])])])}],T={name:"ThankyouScreen",props:{},mounted:function(){$(".splash-page .container-fluid .row").height($(window).height())}},P=T,x=Object(v["a"])(P,w,U,!1,null,null,null),E=x.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"navbar navbar-light bg-light"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[i("p",{staticClass:"m-0 head-title"},[t._v("USUARIO: "),i("span",[t._v(t._s(t.user.First_Name)+" "+t._s(t.user.Last_Name))])])]),i("div",{staticClass:"my-2 my-lg-0"},[i("p",{staticClass:"m-0 head-title"},[t._v("SALDO: "),i("span",[t._v("$"+t._s(t.currentUserBalance))])])])]),i("div",{staticClass:"container-fluid"},[t._m(0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-center"},[i("div",{staticClass:"outer-block mb-5",on:{click:function(e){return t.goToProductDetails(t.product1,1)}}},[i("img",{attrs:{src:t.createImageURL(t.product1.Product),alt:"Recorte"}}),i("span",{staticClass:"text-white"},[t._v(t._s(t.product1.Product.Name))])]),i("div",{staticClass:"outer-block mb-5",on:{click:function(e){return t.goToProductDetails(t.product2,2)}}},[i("img",{attrs:{src:t.createImageURL(t.product2.Product),alt:"Recorte"}}),i("span",{staticClass:"text-white"},[t._v(t._s(t.product2.Product.Name))])])])])]),t._m(1)])},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-white"},[i("h1",{staticClass:"text-center mb-3 text-normal"},[t._v("ELIGA TU CERVEZA")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-white pl-0"},[a("img",{staticClass:"footer-logo",attrs:{src:i("8bef"),alt:"Situm"}})]),a("div",{staticClass:"col-6 text-white text-right pr-0"},[a("span",{staticClass:"font-22",staticStyle:{"line-height":"64px"}},[t._v("AYUDA")])])])])])}],A=i("87a1"),O=i.n(A),R={name:"ProductListScreen",props:["taps","currentUserBalance","userDetails"],mixins:[O.a],errorCaptured:function(t,e,i){return alert(i),!1},data:function(){return{product1:this.taps[0],product2:this.taps[1],user:this.userDetails.CardCustomer[0].User}},mounted:function(){},methods:{goToProductDetails:function(t,e){this.$emit("goToProductDetails",{product:t,tapNumber:e})}}},N=R,B=Object(v["a"])(N,k,I,!1,null,null,null),L=B.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"navbar navbar-light bg-light"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[i("p",{staticClass:"m-0 head-title"},[t._v("\n        USUARIO:\n        "),i("span",[t._v(t._s(t.user.First_Name)+" "+t._s(t.user.Last_Name))])])]),i("div",{staticClass:"my-2 my-lg-0"},[i("p",{staticClass:"m-0 head-title"},[t._v("\n        SALDO:\n        "),i("span",[t._v("$"+t._s(t.currentUserBalance))])])])]),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-4"},[i("img",{attrs:{src:t.createImageURL(t.product),alt:"Recorte"}})]),i("div",{staticClass:"col-8 text-white product-info"},[i("h1",[t._v(t._s(t.product.Name))]),i("p",[t._v(t._s(t.product.Description))]),i("p",[t._v(t._s(t.product.Additional_Data))]),i("p",[t._v("PRECIO: $"+t._s(t.product.Price)+" lt")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 pl-5"},[i("a",{staticClass:"btn btn-warning text-white",on:{click:function(e){return t.back()}}},[t._v("VOLVER")])]),i("div",{staticClass:"col-6 text-right pr-5"},[i("a",{staticClass:"btn btn-warning text-white",on:{click:function(e){return t.serve()}}},[t._v("SERVIR")])])])]),t._m(0)])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-white pl-0"},[a("img",{staticClass:"footer-logo",attrs:{src:i("8bef"),alt:"Situm"}})]),a("div",{staticClass:"col-6 text-white text-right pr-0"},[a("span",{staticClass:"font-22",staticStyle:{"line-height":"64px"}},[t._v("AYUDA")])])])])])}],V={name:"ProductDetailScreen",props:["currentUserBalance","productDetails","userDetails"],data:function(){return{product:this.productDetails.Product,user:this.userDetails.CardCustomer[0].User}},errorCaptured:function(t,e,i){return alert(i),!1},mixins:[O.a],mounted:function(){alert(this.productDetails.Product),alert(this.userDetails.CardCustomer[0].User),alert(this.currentUserBalance)},methods:{back:function(){this.$emit("goToBack")},serve:function(){this.$emit("serve")}}},F=V,M=Object(v["a"])(F,j,H,!1,null,null,null),q=M.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"navbar navbar-light bg-light"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[i("p",{staticClass:"m-0 head-title"},[t._v("USUARIO: "),i("span",[t._v(t._s(t.user.First_Name)+" "+t._s(t.user.Last_Name))])])]),i("div",{staticClass:"my-2 my-lg-0"},[i("p",{staticClass:"m-0 head-title"},[t._v("SALDO: "),i("span",[t._v("$"+t._s(t.currentUserBalance))])])])]),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row align-items-top mt-2"},[i("div",{staticClass:"col-8 text-white"},[i("a",{staticClass:"text-white font-22 anchor-text",attrs:{href:"#"}},[t._v(t._s(t.product.Name))]),i("div",{staticClass:"product-info mt-5"},[i("p",[t._v(t._s(t.product.Description))]),i("p",{staticClass:"mt-5"},[t._v("¡ESPERO DISFRUTES TU CERVEZA!")])])]),i("div",{staticClass:"col-4 text-center"},[i("a",{staticClass:"text-white font-22",attrs:{href:"#"}},[t._v("DISPONIBLE: "),i("span",[t._v(t._s(t.total)+" ml")])]),i("br"),t._m(0)])])]),t._m(1)])},Y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vertical-progress mt-3"},[i("div",{staticClass:"progress-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-white pl-0"},[a("img",{staticClass:"footer-logo",attrs:{src:i("8bef"),alt:"Situm"}})]),a("div",{staticClass:"col-6 text-white text-right pr-0"},[a("span",{staticClass:"font-22",staticStyle:{"line-height":"64px"}},[t._v("AYUDA")])])])])])}],z={name:"PouringScreen",props:["currentUserBalance","productDetails","userDetails"],data:function(){return{product:this.productDetails.Product,tap:this.productDetails,total:0,user:this.userDetails.CardCustomer[0].User}},mounted:function(){this.calculateTotalDisponsible(),this.progressFill(0)},methods:{calculateTotalDisponsible:function(){var t=this.product.Price,e=1e3*this.tap.Volume,i=this.userDetails.CardCustomer[0].Amount;this.total=i/t*1e3;var a=this.total-e;a>0&&(this.total=e)},progressFill:function(t){$(".progress-bar").css({height:t+"%"})}},watch:{currentUserBalance:function(t,e){var i=100*this.userDetails.CardCustomer[0].Amount,a=i-t,s=a/i*100;this.progressFill(s)}}},J=z,Z=Object(v["a"])(J,G,Y,!1,null,null,null),Q=Z.exports,K=i("2f62"),W=(i("3b2b"),i("4917"),i("6b54"),i("7f7f"),i("795b")),X=i.n(W),tt=(i("34ef"),i("d225")),et=i("b0b4"),it=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\n",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\n";Object(tt["a"])(this,t),this._receiveBuffer="",this._maxCharacteristicValueLength=20,this._device=null,this._characteristic=null,this._deviceId=null,this._rfIdNumber=null,this._boundHandleDisconnection=this._handleDisconnection.bind(this),this._boundHandleCharacteristicValueChanged=this._handleCharacteristicValueChanged.bind(this),this.setServiceUuid(e),this.setCharacteristicUuid(i),this.setReceiveSeparator(a),this.setSendSeparator(s)}return Object(et["a"])(t,[{key:"setServiceUuid",value:function(t){this._serviceUuid=t}},{key:"setCharacteristicUuid",value:function(t){this._characteristicUuid=t}},{key:"setReceiveSeparator",value:function(t){if(!("string"===typeof t||t instanceof String))throw new Error("Separator type is not a string");if(1!==t.length)throw new Error("Separator length must be equal to one character");this._receiveSeparator=t}},{key:"setSendSeparator",value:function(t){if(!("string"===typeof t||t instanceof String))throw new Error("Separator type is not a string");if(1!==t.length)throw new Error("Separator length must be equal to one character");this._sendSeparator=t}},{key:"connect",value:function(){return this._connectToDevice(this._device)}},{key:"disconnect",value:function(){this._disconnectFromDevice(this._device),this._characteristic&&(this._characteristic.removeEventListener("characteristicvaluechanged",this._boundHandleCharacteristicValueChanged),this._characteristic=null),this._device=null}},{key:"receive",value:function(t,e){}},{key:"sendNew",value:function(){try{var t=new ArrayBuffer(11),e=new Uint8Array(t),i=2e3;e[0]=21,e[1]=(4278190080&i)>>24,e[2]=(16711680&i)>>16,e[3]=(65280&i)>>8,e[4]=4278190335&i,e[5]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=253,e[10]=10,this._log("first sending new 1"),this._characteristic.writeValue(e),this._log("first sent new")}catch(a){this._log(a)}}},{key:"send",value:function(t){var e=this;if(t=String(t||""),!t)return X.a.reject(new Error("Data must be not empty"));t+=this._sendSeparator;var i=this.constructor._splitByLength(t,this._maxCharacteristicValueLength);if(!this._characteristic)return X.a.reject(new Error("There is no connected device"));for(var a=this._writeToCharacteristic(this._characteristic,i[0]),s=function(t){a=a.then(function(){return new X.a(function(a,s){e._characteristic||s(new Error("Device has been disconnected")),e._writeToCharacteristic(e._characteristic,i[t]).then(a).catch(s)})})},r=1;r<i.length;r++)s(r);return a}},{key:"getDeviceName",value:function(){return this._device?this._device.name:""}},{key:"_connectToDevice",value:function(t){var e=this;return(t?X.a.resolve(t):this._requestBluetoothDevice()).then(function(t){return e._connectDeviceAndCacheCharacteristic(t)}).then(function(t){return e._startNotifications(t)}).catch(function(t){return e._log(t),X.a.reject(t)})}},{key:"_disconnectFromDevice",value:function(t){t&&(this._log('Disconnecting from "'+t.name+'" bluetooth device...'),t.removeEventListener("gattserverdisconnected",this._boundHandleDisconnection),t.gatt.connected?(t.gatt.disconnect(),this._log('"'+t.name+'" bluetooth device disconnected')):this._log('"'+t.name+'" bluetooth device is already disconnected'))}},{key:"_requestBluetoothDevice",value:function(){var t=this;this._log("Requesting bluetooth device..."),this._log("New Code with UUID 1000"),console.log("Requesting bluetooth device...");try{return navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:[this._serviceUuid]}).then(function(e){return t._log('"'+e.name+'" bluetooth device selected'),t._device=e,t._device.addEventListener("gattserverdisconnected",t._boundHandleDisconnection),t._device})}catch(e){this._log(e)}}},{key:"_connectDeviceAndCacheCharacteristic",value:function(t){var e=this;return t.gatt.connected&&this._characteristic?X.a.resolve(this._characteristic):(this._log("Connecting to GATT server..."),t.gatt.connect().then(function(t){return e._log("GATT server connected","Getting service..."),t.getPrimaryServices()}).then(function(t){var i;return e._log("Service found","Getting characteristic..."),t.forEach(function(t){i=t.getCharacteristic(e._characteristicUuid)}),i}).then(function(t){return e._log("Characteristic found"),e._characteristic=t,e._characteristic}))}},{key:"_getSupportedProperties",value:function(t){var e=[];for(var i in t.properties)!0===t.properties[i]&&e.push(i.toUpperCase());return"["+e.join(", ")+"]"}},{key:"_startNotifications",value:function(t){var e=this;return this._log("Starting notifications..."),this._log(t),t.startNotifications().then(function(){e._log("Notifications started"),t.addEventListener("characteristicvaluechanged",e._boundHandleCharacteristicValueChanged)})}},{key:"_stopNotifications",value:function(t){var e=this;return this._log("Stopping notifications..."),t.stopNotifications().then(function(){e._log("Notifications stopped"),t.removeEventListener("characteristicvaluechanged",e._boundHandleCharacteristicValueChanged)})}},{key:"_handleDisconnection",value:function(t){var e=this,i=t.target;this._log('"'+i.name+'" bluetooth device disconnected, trying to reconnect...'),this._connectDeviceAndCacheCharacteristic(i).then(function(t){return e._startNotifications(t)}).catch(function(t){return e._log(t)})}},{key:"_handleCharacteristicValueChanged",value:function(t){this._log("Data Received");var e=t.target.value.getUint8(0),i=t.target.value.getUint8(9),a=t.target.value.getUint8(1),s=t.target.value.getUint8(2),r=t.target.value.getUint8(3),n=t.target.value.getUint8(4),c=t.target.value.getUint8(5),o=t.target.value.getUint8(6),l=t.target.value.getUint8(7),u=t.target.value.getUint8(8),d=0;21==e&&253==i?(this._log("Receive command found"),d=a.toString(16)+s.toString(16)+r.toString(16)+n.toString(16)+c.toString(16)+o.toString(16)+l.toString(16)+u.toString(16),this._log("Long device id - "+d)):d=31==e&&253==i?a.toString(16)+s.toString(16)+r.toString(16)+n.toString(16):(a<<24)+(s<<16)+(r<<8)+n,this._connectionDataReceive(e,d,i)}},{key:"_connectionDataReceive",value:function(t,e,i){253==i&&this.receive(t,e)}},{key:"_tapClosed",value:function(){this._sendToDevice(45,1)}},{key:"_startPour",value:function(){this._sendToDevice(31,1)}},{key:"checkRFIDExists",value:function(){return!0}},{key:"_sendToDevice",value:function(t,e){try{var i=new ArrayBuffer(11),a=new Uint8Array(i);a[0]=t,a[1]=(4278190080&e)>>24,a[2]=(16711680&e)>>16,a[3]=(65280&e)>>8,a[4]=4278190335&e,a[5]=0,a[6]=0,a[7]=0,a[8]=0,a[9]=254,a[10]=10,this._log("Send Data to Device for command"+t),this._characteristic.writeValue(a),this._log("Sent Data to Device for command"+t)}catch(s){this._log(s)}}},{key:"_writeToCharacteristic",value:function(t,e){return t.writeValue((new TextEncoder).encode(e))}},{key:"_log",value:function(){var t;(t=console).log.apply(t,arguments)}}],[{key:"_splitByLength",value:function(t,e){return t.match(new RegExp("(.|[\r\n]){1,"+e+"}","g"))}}]),t}(),at={name:"app",components:{HomeScreen:g,HelpScreen:y,ThankyouScreen:E,ProductListScreen:L,ProductDetailScreen:q,PouringScreen:Q},data:function(){return{terminal:null,deviceId:"",rfIdNumber:"",taps:[],deviceDetails:{},userDetails:{},productDetails:{},currentPage:1,lastPage:1,currentUserBalance:0}},mounted:function(){this.init()},methods:Object(o["a"])({},Object(K["b"])(["getModule","getUserDetails","saveConsumerHistory"]),{init:function(){this.terminal=new it("6e400001-b5a3-f393-e0a9-e50e24dcca9e","6e400002-b5a3-f393-e0a9-e50e24dcca9e"),this.connectToDevice();var t=this;this.terminal.receive=function(e,i){t.receiveData(e,i)},this.terminal._log=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(t){console.log(t)})}},changePage:function(t,e){this.lastPage=t,this.currentPage=e},goToBack:function(){this.currentPage=this.lastPage},goToProductDetails:function(t,e){alert("Method Called"),alert(t),alert(e),this.lastPage=4,this.currentPage=5,this.productDetails=t,this.productDetails.TapNumber=e,alert(this.productDetails)},serve:function(){this.lastPage=5,this.currentPage=6,this.terminal._startPour()},callFunction:function(){this.deviceId="0CFF8CE350CC",this.checkDevice()},receiveData:function(t,e){if(21==t)this.deviceId="0CFF8CE350CC",this.checkDevice();else if(31==t)alert("RFID receive"+e),this.rfIdNumber=e.toUpperCase(),alert(this.rfIdNumber),this.checkRFIDExists();else if(41==t){var i=this.productDetails.TapNumber;this.terminal._sendToDevice(t,i)}else if(42==t){var a=this.productDetails.Volume;a*=1e3,this.terminal._sendToDevice(t,a)}else if(43==t){var s=this.productDetails.Product.Price;s*=100,this.terminal._sendToDevice(t,s)}else if(44==t){var r=this.userDetails.CardCustomer[0].Amount;r*=100,this.terminal._sendToDevice(t,r)}else 32==t?this.saveHistory(e):33==t?this.saveHistory(e):34==t?this.saveHistory(e):35==t?this.saveHistory(e):36==t?this.currentUserBalance=e:51==t&&this.saveHistory(e)},connectToDevice:function(){var t=this;console.log("start connect"),this.terminal.connect().then(function(){console.log("end connect"),alert(t.terminal.getDeviceName()?t.terminal.getDeviceName():"Default Device"),console.log(t.terminal.getDeviceName()?t.terminal.getDeviceName():"Default Device")})},checkRFIDExists:function(){var t=!1,e=this;return this.getUserDetails(this.rfIdNumber).then(function(t){if(t)try{e.userDetails=t,e.currentUserBalance=e.userDetails.CardCustomer[0].Amount,e.currentPage=4}catch(i){alert(i)}else e.terminal._sendToDevice(31,0)},function(t){}),t},checkDevice:function(){var t=!1,e=this;try{this.getModule(this.deviceId).then(function(i){i?(e.deviceDetails=i,e.taps=e.deviceDetails.Taps,t=!0,e.terminal._sendToDevice(21,1)):e.terminal._sendToDevice(21,0)},function(t){e.terminal._sendToDevice(21,0)})}catch(i){}return t},saveHistory:function(t){var e=this;setTimeout(function(){this.currentPage=3},1e3),this.currentPage=1;var i=this.productDetails.Price,a=0;a=this.currentUserBalance/(1e3*i),a/=1e3;var s={User:c()(this.userDetails.CardCustomer[0].User),Id_Card:this.userDetails.Id_Card,Type:"Consumption",Amount:this.currentUserBalance,Quantity:a,Product:c()(this.productDetails.Product),Id_Tap:this.productDetails.Id_Tap,Id_Location:this.deviceDetails.Id_Location,Id_Module:this.deviceDetails.Id_Module,Id_Totem:this.deviceDetails.Id_Totem};this.saveConsumerHistory(s).then(function(t){t.error||e.clearData()},function(t){})},clearData:function(){this.userDetails={},this.rfIdNumber=0,this.productDetails={}},startPouring:function(){this.terminal._startPour()},tapStop:function(){this.terminal._tapClosed()}})},st=at,rt=Object(v["a"])(st,s,r,!1,null,null,null),nt=rt.exports,ct=i("9f7b"),ot=i.n(ct),lt=i("bc3a"),ut=i.n(lt),dt=ut.a.create({headers:{"Content-Type":"application/json",timeout:5e3},baseURL:"https://dev-situm-api.herokuapp.com",json:!0}),ht="/api/customer/",vt={state:{},getters:{},mutations:{},actions:{getModule:function(t,e){t.commit;return new X.a(function(t,i){dt.get(ht+"getModuleDetails/"+e).then(function(e){alert(c()(e.data)),t(e.data)}).catch(function(t){alert(t),i(t)})})},getUserDetails:function(t,e){t.commit;return new X.a(function(t,i){dt.get(ht+"getUserCardDetails/"+e).then(function(e){alert(c()(e.data)),t(e.data)}).catch(function(t){i(t)})})},saveConsumerHistory:function(t,e){t.commit;return new X.a(function(t,i){dt.post(ht+"add",e).then(function(e){t(e.data)}).catch(function(t){i(t)})})}}};a["a"].use(K["a"]);var ft=new K["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{mainStore:vt}});i("f9e3"),i("2dd8"),i("89e3");window.jQuery=C.a,window.$=C.a,a["a"].use(ot.a),a["a"].config.productionTip=!1,new a["a"]({store:ft,render:function(t){return t(nt)}}).$mount("#app")},"87a1":function(t,e){t.exports={data:function(){return{API_URL:Object({NODE_ENV:"production",BASE_URL:"/vuedemo/"}).API_URL||"https://dev-situm-api.herokuapp.com",productImageBaseUrl:"/api/productimages/"}},methods:{createImageURL:function(t){if(t.ProductImages<1)return"../assets/images/recorte.png";var e=t.ProductImages[0].Image;return this.API_URL+this.productImageBaseUrl+"getImage/"+e}}}},"89e3":function(t,e,i){},"8bef":function(t,e,i){t.exports=i.p+"img/footer-logo.103a3c62.png"},"9d64":function(t,e,i){t.exports=i.p+"img/logo.c75b1119.png"},e392:function(t,e,i){t.exports=i.p+"img/slide-2.d9a49e71.png"},ebb1:function(t,e,i){t.exports=i.p+"img/slide-1.fff05a72.png"}});
//# sourceMappingURL=app.636ad44d.js.map