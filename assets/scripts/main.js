/*!
 * mapache-godofredoninja v3.1.1
 * Copyright 2019 GodoFredoNinja <hello@godofredo.ninja> (https://github.com/godofredoninja/mapache)
 * Licensed under gpl-3.0
 */!function a(o,s,l){function c(t,e){if(!s[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[t]={exports:{}};o[t][0].call(i.exports,function(e){return c(o[t][1][e]||e)},i,i.exports,a,o,s,l)}return s[t].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,r){t.exports=function(e){if(Array.isArray(e))return e}},{}],2:[function(e,t,r){t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],3:[function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},{}],4:[function(e,t,r){t.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],5:[function(e,t,r){t.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}}},{}],6:[function(e,t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},{}],7:[function(e,t,r){var n=e("./arrayWithHoles"),i=e("./iterableToArrayLimit"),a=e("./nonIterableRest");t.exports=function(e,t){return n(e)||i(e,t)||a()}},{"./arrayWithHoles":1,"./iterableToArrayLimit":5,"./nonIterableRest":6}],8:[function(e,t,r){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(e){return typeof e}:t.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.exports=n},{}],9:[function(e,t,r){t.exports=e("regenerator-runtime")},{"regenerator-runtime":11}],10:[function(e,t,r){var n,i;n="undefined"!=typeof window?window:{},i=function(c,N){"use strict";var D,P;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};P=c.lazySizesConfig||c.lazysizesConfig||{};for(e in t){if(!(e in P)){P[e]=t[e]}}}(),!N||!N.getElementsByClassName){return{init:function(){},cfg:P,noSupport:true}}var F=N.documentElement,u=c.Date,n=c.HTMLPictureElement,W="addEventListener",H="getAttribute",B=c[W],I=c.setTimeout,s=c.requestAnimationFrame||I,l=c.requestIdleCallback,G=/^picture$/i,i=["load","error","lazyincluded","_lazyloaded"],r={},$=Array.prototype.forEach,U=function(e,t){if(!r[t]){r[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return r[t].test(e[H]("class")||"")&&r[t]},V=function(e,t){if(!U(e,t)){e.setAttribute("class",(e[H]("class")||"").trim()+" "+t)}},Y=function(e,t){var r;if(r=U(e,t)){e.setAttribute("class",(e[H]("class")||"").replace(r," "))}},J=function(t,r,e){var n=e?W:"removeEventListener";if(e){J(t,r)}i.forEach(function(e){t[n](e,r)})},X=function(e,t,r,n,i){var a=N.createEvent("Event");if(!r){r={}}r.instance=D;a.initEvent(t,!n,!i);a.detail=r;e.dispatchEvent(a);return a},K=function(e,t){var r;if(!n&&(r=c.picturefill||P.pf)){if(t&&t.src&&!e[H]("srcset")){e.setAttribute("srcset",t.src)}r({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Q=function(e,t){return(getComputedStyle(e,null)||{})[t]},o=function(e,t,r){r=r||e.offsetWidth;while(r<P.minSize&&t&&!e._lazysizesWidth){r=t.offsetWidth;t=t.parentNode}return r},Z=function(){var r,n;var t=[];var i=[];var a=t;var o=function(){var e=a;a=t.length?i:t;r=true;n=false;while(e.length){e.shift()()}r=false};var e=function(e,t){if(r&&!t){e.apply(this,arguments)}else{a.push(e);if(!n){n=true;(N.hidden?I:s)(o)}}};e._lsFlush=o;return e}(),ee=function(r,e){return e?function(){Z(r)}:function(){var e=this;var t=arguments;Z(function(){r.apply(e,t)})}},te=function(e){var r;var n=0;var i=P.throttleDelay;var a=P.ricTimeout;var t=function(){r=false;n=u.now();e()};var o=l&&a>49?function(){l(t,{timeout:a});if(a!==P.ricTimeout){a=P.ricTimeout}}:ee(function(){I(t)},true);return function(e){var t;if(e=e===true){a=33}if(r){return}r=true;t=i-(u.now()-n);if(t<0){t=0}if(e||t<9){o()}else{I(o,t)}}},re=function(e){var t,r;var n=99;var i=function(){t=null;e()};var a=function(){var e=u.now()-r;if(e<n){I(a,n-e)}else{(l||i)(i)}};return function(){r=u.now();if(!t){t=I(a,n)}}},e=function(){var p,h,f,v,e;var m,y,g,b,w,E,L;var a=/^img$/i;var d=/^iframe$/i;var x="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent);var z=0;var _=0;var C=0;var k=-1;var j=function(e){C--;if(!e||C<0||!e.target){C=0}};var q=function(e){if(L==null){L=Q(N.body,"visibility")=="hidden"}return L||!(Q(e.parentNode,"visibility")=="hidden"&&Q(e,"visibility")=="hidden")};var S=function(e,t){var r;var n=e;var i=q(e);g-=t;E+=t;b-=t;w+=t;while(i&&(n=n.offsetParent)&&n!=N.body&&n!=F){i=(Q(n,"opacity")||1)>0;if(i&&Q(n,"overflow")!="visible"){r=n.getBoundingClientRect();i=w>r.left&&b<r.right&&E>r.top-1&&g<r.bottom+1}}return i};var t=function(){var e,t,r,n,i,a,o,s,l,c,u,f;var d=D.elements;if((v=P.loadMode)&&C<8&&(e=d.length)){t=0;k++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!x||D.prematureUnveil&&D.prematureUnveil(d[t])){T(d[t]);continue}if(!(s=d[t][H]("data-expand"))||!(a=s*1)){a=_}if(!c){c=!P.expand||P.expand<1?F.clientHeight>500&&F.clientWidth>500?500:370:P.expand;D._defEx=c;u=c*P.expFactor;f=P.hFac;L=null;if(_<u&&C<1&&k>2&&v>2&&!N.hidden){_=u;k=0}else if(v>1&&k>1&&C<6){_=c}else{_=z}}if(l!==a){m=innerWidth+a*f;y=innerHeight+a;o=a*-1;l=a}r=d[t].getBoundingClientRect();if((E=r.bottom)>=o&&(g=r.top)<=y&&(w=r.right)>=o*f&&(b=r.left)<=m&&(E||w||b||g)&&(P.loadHidden||q(d[t]))&&(h&&C<3&&!s&&(v<3||k<4)||S(d[t],a))){T(d[t]);i=true;if(C>9){break}}else if(!i&&h&&!n&&C<4&&k<4&&v>2&&(p[0]||P.preloadAfterLoad)&&(p[0]||!s&&(E||w||b||g||d[t][H](P.sizesAttr)!="auto"))){n=p[0]||d[t]}}if(n&&!i){T(n)}}};var r=te(t);var A=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}j(e);V(t,P.loadedClass);Y(t,P.loadingClass);J(t,M);X(t,"lazyloaded")};var n=ee(A);var M=function(e){n({target:e.target})};var O=function(t,r){try{t.contentWindow.location.replace(r)}catch(e){t.src=r}};var R=function(e){var t;var r=e[H](P.srcsetAttr);if(t=P.customMedia[e[H]("data-media")||e[H]("media")]){e.setAttribute("media",t)}if(r){e.setAttribute("srcset",r)}};var o=ee(function(t,e,r,n,i){var a,o,s,l,c,u;if(!(c=X(t,"lazybeforeunveil",e)).defaultPrevented){if(n){if(r){V(t,P.autosizesClass)}else{t.setAttribute("sizes",n)}}o=t[H](P.srcsetAttr);a=t[H](P.srcAttr);if(i){s=t.parentNode;l=s&&G.test(s.nodeName||"")}u=e.firesLoad||"src"in t&&(o||a||l);c={target:t};V(t,P.loadingClass);if(u){clearTimeout(f);f=I(j,2500);J(t,M,true)}if(l){$.call(s.getElementsByTagName("source"),R)}if(o){t.setAttribute("srcset",o)}else if(a&&!l){if(d.test(t.nodeName)){O(t,a)}else{t.src=a}}if(i&&(o||l)){K(t,{src:a})}}if(t._lazyRace){delete t._lazyRace}Y(t,P.lazyClass);Z(function(){var e=t.complete&&t.naturalWidth>1;if(!u||e){if(e){V(t,"ls-is-cached")}A(c);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){C--}},true)});var T=function(e){if(e._lazyRace){return}var t;var r=a.test(e.nodeName);var n=r&&(e[H](P.sizesAttr)||e[H]("sizes"));var i=n=="auto";if((i||!h)&&r&&(e[H]("src")||e.srcset)&&!e.complete&&!U(e,P.errorClass)&&U(e,P.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(i){ne.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;C++;o(e,t,i,n,r)};var i=re(function(){P.loadMode=3;r()});var s=function(){if(P.loadMode==3){P.loadMode=2}i()};var l=function(){if(h){return}if(u.now()-e<999){I(l,999);return}h=true;P.loadMode=3;r();B("scroll",s,true)};return{_:function(){e=u.now();D.elements=N.getElementsByClassName(P.lazyClass);p=N.getElementsByClassName(P.lazyClass+" "+P.preloadClass);B("scroll",r,true);B("resize",r,true);if(c.MutationObserver){new MutationObserver(r).observe(F,{childList:true,subtree:true,attributes:true})}else{F[W]("DOMNodeInserted",r,true);F[W]("DOMAttrModified",r,true);setInterval(r,999)}B("hashchange",r,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){N[W](e,r,true)});if(/d$|^c/.test(N.readyState)){l()}else{B("load",l);N[W]("DOMContentLoaded",r);I(l,2e4)}if(D.elements.length){t();Z._lsFlush()}else{r()}},checkElems:r,unveil:T,_aLSL:s}}(),ne=function(){var r;var a=ee(function(e,t,r,n){var i,a,o;e._lazysizesWidth=n;n+="px";e.setAttribute("sizes",n);if(G.test(t.nodeName||"")){i=t.getElementsByTagName("source");for(a=0,o=i.length;a<o;a++){i[a].setAttribute("sizes",n)}}if(!r.detail.dataAttr){K(e,r.detail)}});var n=function(e,t,r){var n;var i=e.parentNode;if(i){r=o(e,i,r);n=X(e,"lazybeforesizes",{width:r,dataAttr:!!t});if(!n.defaultPrevented){r=n.detail.width;if(r&&r!==e._lazysizesWidth){a(e,i,n,r)}}}};var e=function(){var e;var t=r.length;if(t){e=0;for(;e<t;e++){n(r[e])}}};var t=re(e);return{_:function(){r=N.getElementsByClassName(P.autosizesClass);B("resize",t)},checkElems:t,updateElem:n}}(),t=function(){if(!t.i&&N.getElementsByClassName){t.i=true;ne._();e._()}};return I(function(){P.init&&t()}),D={cfg:P,autoSizer:ne,loader:e,init:t,uP:K,aC:V,rC:Y,hC:U,fire:X,gW:o,rAF:Z}}(n,n.document),n.lazySizes=i,"object"==typeof t&&t.exports&&(t.exports=i)},{}],11:[function(e,t,r){var n=function(a){"use strict";var l,e=Object.prototype,c=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},i=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function o(e,t,r,n){var a,o,s,l,i=t&&t.prototype instanceof y?t:y,c=Object.create(i.prototype),u=new k(n||[]);return c._invoke=(a=e,o=r,s=u,l=d,function(e,t){if(l===h)throw new Error("Generator is already running");if(l===v){if("throw"===e)throw t;return q()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=z(r,s);if(n){if(n===m)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(l===d)throw l=v,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);l=h;var i=f(a,o,s);if("normal"===i.type){if(l=s.done?v:p,i.arg===m)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(l=v,s.method="throw",s.arg=i.arg)}}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=o;var d="suspendedStart",p="suspendedYield",h="executing",v="completed",m={};function y(){}function s(){}function u(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==e&&c.call(w,i)&&(g=w);var E=u.prototype=y.prototype=Object.create(g);function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function x(l){var t;this._invoke=function(r,n){function e(){return new Promise(function(e,t){!function t(e,r,n,i){var a=f(l[e],l,r);if("throw"!==a.type){var o=a.arg,s=o.value;return s&&"object"==typeof s&&c.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):Promise.resolve(s).then(function(e){o.value=e,n(o)},function(e){return t("throw",e,n,i)})}i(a.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}}function z(e,t){var r=e.iterator[t.method];if(r===l){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=l,z(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=l),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(c.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=l,e.done=!0,e};return n.next=n}}return{next:q}}function q(){return{value:l,done:!0}}return s.prototype=E.constructor=u,u.constructor=s,u[n]=s.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,u):(e.__proto__=u,n in e||(e[n]="GeneratorFunction")),e.prototype=Object.create(E),e},a.awrap=function(e){return{__await:e}},L(x.prototype),x.prototype[r]=function(){return this},a.AsyncIterator=x,a.async=function(e,t,r,n){var i=new x(o(e,t,r,n));return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},L(E),E[n]="Generator",E[i]=function(){return this},E.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&c.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return a.type="throw",a.arg=r,n.next=e,t&&(n.method="next",n.arg=l),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var o=c.call(i,"catchLoc"),s=c.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=l),m}},a}("object"==typeof t?t.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},{}],12:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e("@babel/runtime/regenerator"));r.default=function(t){var r,n;return i.default.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.awrap(fetch(t));case 2:return r=e.sent,e.next=5,i.default.awrap(r.json());case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}})}},{"@babel/runtime/helpers/interopRequireDefault":4,"@babel/runtime/regenerator":9}],13:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;function a(e,t,r){var n=e.data.map(function(e){return[Math.random(),e]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){return e[1]}).slice(0,6),i=document.createElement("a");i.classList="instagram-btn button button--large button--dark",i.href="https://www.instagram.com/".concat(t),i.target="_blank",i.rel="noopener noreferrer",i.innerHTML='<svg class="icon"><use xlink:href="#icon-instagram"></use></svg> '.concat(t);var a=document.createElement("div");a.classList="row no-gutters",n.map(function(e){var t,r='<div class="col s4 l2">\n    <a href="'.concat((t=e).link,'" class="instagram-img u-relative u-overflowHidden u-sizeFullWidth u-block u-bgGray" target="_blank" rel="noopener noreferrer">\n      <img class="u-absolute0 u-image blur-up lazyload" src="').concat(t.images.low_resolution.url,'" alt=""/>\n      <div class="instagram-hover u-absolute0 u-flexCenter justify-content-center u-fontWeightBold u-textColorWhite u-fontSize20 zindex2">\n        <span style="padding-right:10px"><svg class="icon top2"><use xlink:href="#icon-favorite"></use></svg> ').concat(t.likes.count,'</span>\n        <span style="padding-left:10px"><svg class="icon top2"><use xlink:href="#icon-chat"></use></svg> ').concat(t.comments.count,"</span>\n      </div>\n    </a>\n  </div>");a.innerHTML+=r}),r.classList.remove("u-hide"),r.appendChild(a),r.appendChild(i)}var o=n(e("@babel/runtime/regenerator")),s=n(e("./app.fetch"));r.default=function(t,r){var n,i;return o.default.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.instagram.com/v1/users/".concat(t.userId,"/media/recent/?access_token=").concat(t.token,"&count=10&callback=?"),e.prev=1,e.next=4,o.default.awrap((0,s.default)(n));case 4:i=e.sent,a(i,t.userName,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r.remove();case 11:case"end":return e.stop()}},null,null,[[1,8]])}},{"./app.fetch":12,"@babel/runtime/helpers/interopRequireDefault":4,"@babel/runtime/regenerator":9}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyle=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)},r.loadScript=function(e,t){var r=document.createElement("script");r.src=e,r.defer=!0,t&&r.addEventListener("load",t),document.body.appendChild(r)}},{}],15:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e("@babel/runtime/helpers/slicedToArray")),s=e("./app.variables");r.default=function(t){(0,s.qsa)(".js-social-media").forEach(function(e){return a=e,void Object.entries(t).forEach(function(e){var t=(0,o.default)(e,2),r=t[0],n=t[1];if("string"===n[0]||s.urlRegexp.test(n[0])){var i=document.createElement("a");i.href=n[0],i.title=n[1],i.target="_blank",i.rel="noopener noreferrer",i.innerHTML='<svg class="icon"><use xlink:href="#icon-'.concat(r,'"></use></svg>'),a.appendChild(i)}});var a})}},{"./app.variables":16,"@babel/runtime/helpers/interopRequireDefault":4,"@babel/runtime/helpers/slicedToArray":7}],16:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.iframeVideo=r.urlRegexp=r.qsa=r.qs=void 0;var n=document.querySelector.bind(document);r.qs=n;var i=document.querySelectorAll.bind(document);r.qsa=i;r.urlRegexp=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/;r.iframeVideo=['iframe[src*="player.vimeo.com"]','iframe[src*="dailymotion.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="player.twitch.tv"]','iframe[src*="kickstarter.com"][src*="video.html"]']},{}],17:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");e("lazysizes");var i=n(e("./util/Router")),a=n(e("./routes/common")),o=n(e("./routes/post")),s=n(e("./routes/post-single")),l=n(e("./routes/video")),c=new i.default({common:a.default,isArticle:o.default,isVideo:l.default,isArticleSingle:s.default});window.addEventListener("load",c.loadEvents(),!1)},{"./routes/common":18,"./routes/post":20,"./routes/post-single":19,"./routes/video":21,"./util/Router":22,"@babel/runtime/helpers/interopRequireDefault":4,lazysizes:10}],18:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e("@babel/runtime/helpers/typeof")),a=n(e("../app/app.social-media")),o=e("../app/app.load-style-script"),s=e("../app/app.variables"),l={init:function(){"object"===("undefined"==typeof followSocialMedia?"undefined":(0,i.default)(followSocialMedia))&&null!==followSocialMedia&&(0,a.default)(followSocialMedia)},finalize:function(){(0,s.qsa)(".js-dark-mode").forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault();var t=document.documentElement;"light"===t.getAttribute("data-theme")?(t.setAttribute("data-theme","dark"),localStorage.setItem("selected-theme","dark")):(t.setAttribute("data-theme","light"),localStorage.setItem("selected-theme","light"))})}),(0,s.qs)(".js-menu-toggle").addEventListener("click",function(e){e.preventDefault(),document.body.classList.toggle("has-menu")});var e=(0,s.qs)(".js-scrcoll-home");e&&e.addEventListener("click",function(e){e.preventDefault();var t=(0,s.qs)("#hm-cover").offsetHeight-60;if(window)try{window.scroll({top:t,left:0,behavior:"smooth"})}catch(e){window.scrollTo(0,t)}}),(0,s.qs)(".js-back-to-top").addEventListener("click",function(e){if(e.preventDefault(),window)try{window.scroll({top:0,left:0,behavior:"smooth"})}catch(e){window.scrollTo(0,0)}});const mediaQuery = window.matchMedia('(min-width: 1001px)');mediaQuery.addEventListener('change', (event) => { if (event.matches) var t=(0,s.qs)(".js-twitter-feed");if("undefined"!=typeof twitterFeed&&t){t.classList.remove("u-hide");var r=document.createElement("div");r.innerHTML='<a class="twitter-timeline" data-height="500" href="https://twitter.com/'.concat(twitterFeed,'">Tweets by ').concat(twitterFeed,"</a>"),t.appendChild(r),(0,o.loadScript)("https://platform.twitter.com/widgets.js")}});"undefined"!=typeof searchSettings&&"undefined"!=typeof siteSearch&&(0,o.loadScript)("https://unpkg.com/@tryghost/content-api@1.3.4/umd/content-api.min.js",function(){(0,o.loadScript)(siteSearch)});var n=(0,s.qs)(".back-to-top"),i=document.body,a=i.closest(".has-cover");window.addEventListener("scroll",function(){var e=window.scrollY;n&&500<e?n.classList.add("to-top"):n.classList.remove("to-top"),a&&(60<=e?i.classList.remove("is-transparency"):i.classList.add("is-transparency"))})}};r.default=l},{"../app/app.load-style-script":14,"../app/app.social-media":15,"../app/app.variables":16,"@babel/runtime/helpers/interopRequireDefault":4,"@babel/runtime/helpers/typeof":8}],19:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=e("../app/app.variables"),i={init:function(){var o=(0,n.qs)(".post-share-inner");if(o){var s=[].slice.call((0,n.qsa)([".kg-width-full",".kg-width-wide"].join(",")));if(s.length){window.addEventListener("scroll",function(){var e,t,r,n,i=!1;for(var a in s)if(e=o,t=s[a],void 0,r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),!(r.top>n.bottom||r.right<n.left||r.bottom<n.top||r.left>n.right)){i=!0;break}i?o.classList.add("is-hidden"):o.classList.remove("is-hidden")})}}}};r.default=i},{"../app/app.variables":16}],20:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e("@babel/runtime/helpers/typeof")),a=e("../app/app.load-style-script"),o=n(e("../app/app.instagram")),s=e("../app/app.variables"),l={init:function(){var e=(0,s.qsa)(s.iframeVideo.join(","));e.length&&e.forEach(function(e){var t=document.createElement("div");t.className="video-responsive",e.parentNode.insertBefore(t,e),t.appendChild(e)})},finalize:function(){(0,s.qsa)(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),r=e.attributes.width.value/e.attributes.height.value;t.style.flex=r+" 1 0%"}),(0,s.qsa)(".js-post-content img").forEach(function(e){if(!e.closest("a")){e.classList.add("mapache-light-gallery"),e.setAttribute("data-src",e.src);var t=e.nextSibling;null!==t&&"figcaption"===t.nodeName.toLowerCase()&&e.setAttribute("data-sub-html",t.innerHTML)}}),(0,s.qsa)(".mapache-light-gallery").length&&((0,a.loadStyle)("https://unpkg.com/lightgallery.js/dist/css/lightgallery.min.css"),(0,a.loadScript)("https://cdn.jsdelivr.net/npm/lightgallery.js@1.1.3/dist/js/lightgallery.min.js",function(){(0,a.loadScript)("https://unpkg.com/lg-zoom.js@1.0.1/dist/lg-zoom.min.js"),window.lightGallery((0,s.qs)(".js-post-content"),{selector:".mapache-light-gallery"})}));var e=(0,s.qs)(".js-instagram");"object"===("undefined"==typeof instagramFeed?"undefined":(0,i.default)(instagramFeed))&&null!==instagramFeed&&e&&(0,o.default)(instagramFeed,e),(0,s.qsa)('code[class*="language-"]').length&&"undefined"!=typeof sitePrismJs&&(0,a.loadScript)(sitePrismJs),(0,s.qsa)(".js-share").forEach(function(e){return e.addEventListener("click",function(e){var t=window,r=document,n=void 0!==t.screenLeft?t.screenLeft:t.screenX,i=void 0!==t.screenTop?t.screenTop:t.screenY,a=(t.innerWidth?t.innerWidth:r.documentElement.clientWidth?r.documentElement.clientWidth:t.screen.width)/2-320+n,o=(t.innerHeight?t.innerHeight:r.documentElement.clientHeight?r.documentElement.clientHeight:t.screen.height)/2-200+i,s=t.open(e.currentTarget.href,"share-window","scrollbars=yes, width=".concat(640,", height=").concat(400,", top=").concat(o,", left=").concat(a));t.focus&&s.focus(),e.preventDefault()})})}};r.default=l},{"../app/app.instagram":13,"../app/app.load-style-script":14,"../app/app.variables":16,"@babel/runtime/helpers/interopRequireDefault":4,"@babel/runtime/helpers/typeof":8}],21:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=e("../app/app.variables"),n={init:function(){var e=(0,i.qs)(".js-post-content").querySelectorAll(i.iframeVideo.join(","))[0];if(e){var t=(0,i.qs)(".cc-video-embed"),r=document.body;e.closest(".kg-embed-card")?t.appendChild(e.closest(".kg-embed-card")):t.appendChild(e.parentNode);var n=function(){window.scrollY>(0,i.qs)(".js-video-post").offsetTop-100?r.classList.add("has-video-fixed"):r.classList.remove("has-video-fixed")};1200<r.clientWidth&&window.addEventListener("scroll",n),(0,i.qs)(".cc-video-close").addEventListener("click",function(){r.classList.remove("has-video-fixed"),window.removeEventListener("scroll",n)})}}};r.default=n},{"../app/app.variables":16}],22:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e("@babel/runtime/helpers/classCallCheck")),a=n(e("@babel/runtime/helpers/createClass")),o=n(e("./camelCase")),s=function(){function t(e){(0,i.default)(this,t),this.routes=e}return(0,a.default)(t,[{key:"fire",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"init",r=2<arguments.length?arguments[2]:void 0,n=""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t];n&&this.routes[e][t](r)}},{key:"loadEvents",value:function(){var t=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(o.default).forEach(function(e){t.fire(e),t.fire(e,"finalize")}),this.fire("common","finalize")}}]),t}();r.default=s},{"./camelCase":23,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/interopRequireDefault":4}],23:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(e){return"".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g,"|").split("|").map(function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}).join("").slice(1))}},{}]},{},[17]);
