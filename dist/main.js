(()=>{"use strict";var e={61:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),c=r.n(a)()(o());c.push([e.id,".carrousel{position:relative;height:600px;width:80%;margin:0 auto}.carrousel .carrousel-track-container{background-color:teal;height:100%;position:relative;overflow:hidden}.carrousel .carrousel-track{padding:0;margin:0;list-style:none;position:relative;height:100%;transition:transform 150ms ease-in-out}.carrousel .carrousel-track>li{position:absolute;top:0;bottom:0;width:100%}.carrousel .carrousel-track img{width:100%;height:100%;object-fit:cover}.carrousel .carrousel-button{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0);border:none;cursor:pointer}.carrousel .carrousel-button>img{width:50px;pointer-events:none}.carrousel .left-button{left:-65px}.carrousel .right-button{right:-65px}.carrousel .right-button>img{transform:rotate(180deg)}.carrousel .carrousel-nav{display:flex;justify-content:center;gap:10px;margin:10px 0}.carrousel .carrousel-nav .carrousel-indicator{border:0;border-radius:50%;width:15px;height:15px;background-color:rgba(0,0,0,.3);cursor:pointer}.carrousel .carrousel-nav .active{background-color:rgba(0,0,0,.8)}",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],l=n.base?i[0]+n.base:i[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=r(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=r(a[c]);t[s].references--}for(var i=n(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=i}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{const e=r.p+"images/20a5f757382cf54e42a1.svg",t=r.p+"images/a23590de946bd1cb00fb.jpeg",n=r.p+"images/59b35daad7d548f20adb.jpeg",o=r.p+"images/e2d9f72be13ee3fccb87.jpeg",a=r.p+"images/fe1e348910237712c713.jpeg";var c=r(379),s=r.n(c),i=r(795),l=r.n(i),u=r(569),d=r.n(u),p=r(565),f=r.n(p),m=r(216),h=r.n(m),g=r(589),v=r.n(g),b=r(61),y={};y.styleTagTransform=v(),y.setAttributes=f(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),s()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const x=[t,n,o,a];document.querySelector("body").appendChild(function(t){const r=document.createElement("div");r.classList.add("carrousel");const n=document.createElement("button");n.classList.add("carrousel-button","left-button");const o=new Image;o.src=e,n.appendChild(o),r.appendChild(n);const a=document.createElement("div");a.classList.add("carrousel-track-container");const c=function(e){const t=document.createElement("ul");return t.classList.add("carrousel-track"),e.forEach((e=>{const r=document.createElement("li");r.classList.add("carrousel-slide");const n=new Image;n.src=e,r.appendChild(n),t.appendChild(r)})),t}(t);c.firstElementChild.classList.add("current-image"),a.appendChild(c),r.appendChild(a);const s=document.createElement("button");s.classList.add("carrousel-button","right-button");const i=new Image;i.src=e,s.appendChild(i),r.appendChild(s);const l=function(e){const t=document.createElement("div");t.classList.add("carrousel-nav");for(let r=0;r<e;r+=1){const e=document.createElement("button");e.classList.add("carrousel-indicator"),t.appendChild(e)}return t}(t.length);return l.firstElementChild.classList.add("active"),r.appendChild(l),r}(x)),function(){const e=document.querySelector(".carrousel"),t=(e.querySelector(".left-button"),e.querySelector(".right-button")),r=e.querySelector(".carrousel-track"),n=Array.from(e.querySelectorAll(".carrousel-slide")),o=(e.querySelectorAll(".carrousel-indicator"),n[0].getBoundingClientRect().width);!function(e,t){e.forEach(((e,r)=>{e.style.left=t*r+"px"}))}(n,o),t.addEventListener("click",(()=>{const e=r.querySelector(".current-image");!function(e,t,r){const n=t.style.left;r.style.transform=`translateX(-${n})`,e.classList.remove("current-image"),t.classList.add("current-image")}(e,e.nextElementSibling,r)}))}()})()})();