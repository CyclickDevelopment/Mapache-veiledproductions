/*!
 * mapache-veiledproductions v4.0.4
 * Copyright 2023 Cyclic Development <pete@cyclick-development.co.uk> (https://github.com/cyclicdevelopment/mapache-veiledproductions)
 * Licensed under gpl-3.0
 */!function r(n,i,l){function o(t,e){if(!i[t]){if(!n[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}a=i[t]={exports:{}},n[t][0].call(a.exports,function(e){return o(n[t][1][e]||e)},a,a.exports,r,n,i,l)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<l.length;e++)o(l[e]);return o}({1:[function(e,t,a){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],2:[function(e,t,a){var r="undefined"!=typeof window?window:{},n=function(r,f,i){"use strict";var p,m,e,h,N,n,y,t,u,P,l,B,W,a,T,o,c,g,v,b,z,w,F,_,$,H,I,U,s,d,Y,Z,G,E,J,C,K,Q,V,q,L,A,M,X,ee,te,ae,re,D,ne,ie,le,oe,S,k,R,se,j,de,ue,ce,x,fe,pe,me,he,ye,O,ge={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in m=r.lazySizesConfig||r.lazysizesConfig||{},ge)e in m||(m[e]=ge[e]);return f&&f.getElementsByClassName?(h=f.documentElement,N=r.HTMLPictureElement,y="getAttribute",t=r[n="addEventListener"].bind(r),u=r.setTimeout,P=r.requestAnimationFrame||u,l=r.requestIdleCallback,B=/^picture$/i,W=["load","error","lazyincluded","_lazyloaded"],a={},T=Array.prototype.forEach,o=function(e,t){return a[t]||(a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),a[t].test(e[y]("class")||"")&&a[t]},c=function(e,t){o(e,t)||e.setAttribute("class",(e[y]("class")||"").trim()+" "+t)},g=function(e,t){(t=o(e,t))&&e.setAttribute("class",(e[y]("class")||"").replace(t," "))},v=function(t,a,e){var r=e?n:"removeEventListener";e&&v(t,a),W.forEach(function(e){t[r](e,a)})},b=function(e,t,a,r,n){var i=f.createEvent("Event");return(a=a||{}).instance=p,i.initEvent(t,!r,!n),i.detail=a,e.dispatchEvent(i),i},z=function(e,t){var a;!N&&(a=r.picturefill||m.pf)?(t&&t.src&&!e[y]("srcset")&&e.setAttribute("srcset",t.src),a({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},F=function(e,t,a){for(a=a||e.offsetWidth;a<m.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},U=[],s=I=[],be._lsFlush=ve,_=be,d=function(a,e){return e?function(){_(a)}:function(){var e=this,t=arguments;_(function(){a.apply(e,t)})}},Y=function(e){function t(){var e=i.now()-r;e<99?u(t,99-e):(l||n)(n)}var a,r,n=function(){a=null,e()};return function(){r=i.now(),a=a||u(t,99)}},ie=/^img$/i,le=/^iframe$/i,oe="onscroll"in r&&!/(gle|ing)bot/.test(navigator.userAgent),R=-1,se=function(e){return(X=null==X?"hidden"==w(f.body,"visibility"):X)||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},ee=we,ae=k=S=0,re=m.throttleDelay,D=m.ricTimeout,ne=l&&49<D?function(){l(_e,{timeout:D}),D!==m.ricTimeout&&(D=m.ricTimeout)}:d(function(){u(_e)},!0),de=d(Ee),ue=function(e){de({target:e.target})},ce=d(function(t,e,a,r,n){var i,l,o,s,d;(l=b(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(a?c(t,m.autosizesClass):t.setAttribute("sizes",r)),a=t[y](m.srcsetAttr),r=t[y](m.srcAttr),n&&(i=(s=t.parentNode)&&B.test(s.nodeName||"")),o=e.firesLoad||"src"in t&&(a||r||i),l={target:t},c(t,m.loadingClass),o&&(clearTimeout(J),J=u(ze,2500),v(t,ue,!0)),i&&T.call(s.getElementsByTagName("source"),Ce),a?t.setAttribute("srcset",a):r&&!i&&(le.test(t.nodeName)?(e=r,0==(d=(s=t).getAttribute("data-load-mode")||m.iframeLoadMode)?s.contentWindow.location.replace(e):1==d&&(s.src=e)):t.src=r),n&&(a||i)&&z(t,{src:r})),t._lazyRace&&delete t._lazyRace,g(t,m.lazyClass),_(function(){var e=t.complete&&1<t.naturalWidth;o&&!e||(e&&c(t,m.fastLoadedClass),Ee(l),t._lazyCache=!0,u(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&k--},!0)}),fe=Y(function(){m.loadMode=3,j()}),Z={_:function(){K=i.now(),p.elements=f.getElementsByClassName(m.lazyClass),G=f.getElementsByClassName(m.lazyClass+" "+m.preloadClass),t("scroll",j,!0),t("resize",j,!0),t("pageshow",function(e){var t;e.persisted&&(t=f.querySelectorAll("."+m.loadingClass)).length&&t.forEach&&P(function(){t.forEach(function(e){e.complete&&x(e)})})}),r.MutationObserver?new MutationObserver(j).observe(h,{childList:!0,subtree:!0,attributes:!0}):(h[n]("DOMNodeInserted",j,!0),h[n]("DOMAttrModified",j,!0),setInterval(j,999)),t("hashchange",j,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[n](e,j,!0)}),/d$|^c/.test(f.readyState)?Le():(t("load",Le),f[n]("DOMContentLoaded",j),u(Le,2e4)),p.elements.length?(we(),_._lsFlush()):j()},checkElems:j=function(e){var t;(e=!0===e)&&(D=33),te||(te=!0,(t=re-(i.now()-ae))<0&&(t=0),e||t<9?ne():u(ne,t))},unveil:x=function(e){var t,a,r,n;e._lazyRace||!(!(n="auto"==(r=(a=ie.test(e.nodeName))&&(e[y](m.sizesAttr)||e[y]("sizes"))))&&E||!a||!e[y]("src")&&!e.srcset||e.complete||o(e,m.errorClass))&&o(e,m.lazyClass)||(t=b(e,"lazyunveilread").detail,n&&pe.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,k++,ce(e,t,n,r,a))},_aLSL:qe},he=d(function(e,t,a,r){var n,i,l;if(e._lazysizesWidth=r,e.setAttribute("sizes",r+="px"),B.test(t.nodeName||""))for(i=0,l=(n=t.getElementsByTagName("source")).length;i<l;i++)n[i].setAttribute("sizes",r);a.detail.dataAttr||z(e,a.detail)}),pe={_:function(){me=f.getElementsByClassName(m.autosizesClass),t("resize",ye)},checkElems:ye=Y(function(){var e,t=me.length;if(t)for(e=0;e<t;e++)Ae(me[e])}),updateElem:Ae},O=function(){!O.i&&f.getElementsByClassName&&(O.i=!0,pe._(),Z._())},u(function(){m.init&&O()}),p={cfg:m,autoSizer:pe,loader:Z,init:O,uP:z,aC:c,rC:g,hC:o,fire:b,gW:F,rAF:_}):{init:function(){},cfg:m,noSupport:!0};function ve(){var e=s;for(s=I.length?U:I,H=!($=!0);e.length;)e.shift()();$=!1}function be(e,t){$&&!t?e.apply(this,arguments):(s.push(e),H||(H=!0,(f.hidden?u:P)(ve)))}function ze(e){k--,e&&!(k<0)&&e.target||(k=0)}function we(){var e,t,a,r,n,i,l,o,s,d,u,c=p.elements;if((C=m.loadMode)&&k<8&&(e=c.length)){for(t=0,R++;t<e;t++)if(c[t]&&!c[t]._lazyRace)if(!oe||p.prematureUnveil&&p.prematureUnveil(c[t]))x(c[t]);else if((l=c[t][y]("data-expand"))&&(n=+l)||(n=S),s||(s=!m.expand||m.expand<1?500<h.clientHeight&&500<h.clientWidth?500:370:m.expand,d=(p._defEx=s)*m.expFactor,u=m.hFac,X=null,S<d&&k<1&&2<R&&2<C&&!f.hidden?(S=d,R=0):S=1<C&&1<R&&k<6?s:0),o!==n&&(Q=innerWidth+n*u,V=innerHeight+n,i=-1*n,o=n),d=c[t].getBoundingClientRect(),(M=d.bottom)>=i&&(q=d.top)<=V&&(A=d.right)>=i*u&&(L=d.left)<=Q&&(M||A||L||q)&&(m.loadHidden||se(c[t]))&&(E&&k<3&&!l&&(C<3||R<4)||function(e,t){var a,r=e,n=se(e);for(q-=t,M+=t,L-=t,A+=t;n&&(r=r.offsetParent)&&r!=f.body&&r!=h;)(n=0<(w(r,"opacity")||1))&&"visible"!=w(r,"overflow")&&(a=r.getBoundingClientRect(),n=A>a.left&&L<a.right&&M>a.top-1&&q<a.bottom+1);return n}(c[t],n))){if(x(c[t]),r=!0,9<k)break}else!r&&E&&!a&&k<4&&R<4&&2<C&&(G[0]||m.preloadAfterLoad)&&(G[0]||!l&&(M||A||L||q||"auto"!=c[t][y](m.sizesAttr)))&&(a=G[0]||c[t]);a&&!r&&x(a)}}function _e(){te=!1,ae=i.now(),ee()}function Ee(e){var t=e.target;t._lazyCache?delete t._lazyCache:(ze(e),c(t,m.loadedClass),g(t,m.loadingClass),v(t,ue),b(t,"lazyloaded"))}function Ce(e){var t,a=e[y](m.srcsetAttr);(t=m.customMedia[e[y]("data-media")||e[y]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)}function qe(){3==m.loadMode&&(m.loadMode=2),fe()}function Le(){E||(i.now()-K<999?u(Le,999):(E=!0,m.loadMode=3,j(),t("scroll",qe,!0)))}function Ae(e,t,a){var r=e.parentNode;r&&(a=F(e,r,a),(t=b(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=t.detail.width)&&a!==e._lazysizesWidth&&he(e,r,t,a))}};n=n(r,r.document,Date),r.lazySizes=n,"object"==typeof t&&t.exports&&(t.exports=n)},{}],3:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("./document-query-selector-all")));a.default=e=>{e=(0,n.default)(e);if(e.length){const t=document.documentElement;e.forEach(e=>e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("dark")?(t.classList.remove("dark"),localStorage.theme="light"):(t.classList.add("dark"),localStorage.theme="dark")}))}}},{"./document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}],4:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(t.querySelectorAll(e),0)}},{}],5:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=(e,t)=>{const a=document.body;a.closest(e)&&window.addEventListener("scroll",()=>{60<=window.scrollY?a.classList.remove(t):a.classList.add(t)},{passive:!0})}},{}],6:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("./document-query-selector-all")));a.default=(e,t)=>{t=(0,n.default)(t);if(t.length)return t.forEach(n=>{Object.entries(e).forEach(e=>{var t,[e,a]=e,r=a[0];/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(r)&&((t=document.createElement("a")).href=r,t.title=a[1],t.classList="button border-none hover:text-"+e,t.target="_blank",t.rel="noopener noreferrer",t.innerHTML=`<svg class="icon icon--${e}"><use xlink:href="#icon-${e}"></use></svg>`,n.appendChild(t))})})}},{"./document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}],7:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("./load-script")));a.default=()=>{if(!1!==mapacheGallery&&!(window.innerWidth<768)){const t=document.getElementById("post-body");if(t)if(t.querySelectorAll("img").forEach(e=>{var t;e.closest("a")||(e.classList.add("mapache-light-gallery"),e.setAttribute("data-src",e.src),null!==(t=e.nextSibling)&&"figcaption"===t.nodeName.toLowerCase()&&e.setAttribute("data-sub-html",t.innerHTML))}),t.querySelectorAll(".mapache-light-gallery").length){{var e="https://unpkg.com/lightgallery@2.1.8/css/lightgallery.css";const a=document.createElement("link");a.media="print",a.rel="stylesheet",a.href=e,a.onload=()=>{a.media="all"},document.head.insertBefore(a,document.head.childNodes[document.head.childNodes.length-1].nextSibling)}(0,n.default)("https://unpkg.com/lightgallery@2.1.8/lightgallery.min.js",()=>{window.lightGallery(t,{speed:500,selector:".mapache-light-gallery"})})}}}},{"./load-script":9,"@babel/runtime/helpers/interopRequireDefault":1}],8:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("./load-script"))),i=r(e("../app/document-query-selector-all"));a.default=e=>{e=(0,i.default)(e);!e.length&&"undefined"==typeof prismJs||(e.forEach(e=>{let t=e.getAttribute("class");t=t.split("-"),e.parentElement.setAttribute("rel",t[1])}),(0,n.default)(prismJs))}},{"../app/document-query-selector-all":4,"./load-script":9,"@babel/runtime/helpers/interopRequireDefault":1}],9:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=(e,t)=>{var a=document.createElement("script");a.src=e,a.defer=!0,a.async=!0,t&&a.addEventListener("load",t),document.body.appendChild(a)}},{}],10:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("../app/document-query-selector-all")));a.default=()=>{var e=(0,n.default)(".kg-gallery-image > img");e.length&&e.forEach(e=>{var t=e.closest(".kg-gallery-image"),a=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=a/e+" 1 0%"})}},{"../app/document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}],11:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=e=>{const a=document.querySelector(e);if(a){const r=document.querySelector(".js-search");let t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;t>e?(a.classList.remove("-top-18"),r.classList.add("mt-16")):(a.classList.add("-top-18"),r.classList.remove("mt-16")),t=e}}}},{}],12:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("../app/document-query-selector-all")));a.default=()=>{var e=(0,n.default)(['iframe[src*="player.vimeo.com"]','iframe[src*="dailymotion.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="player.twitch.tv"]','iframe[src*="kickstarter.com"][src*="video.html"]'].join(","));e.length&&e.forEach(e=>{var t=document.createElement("div");t.className="video-responsive",e.parentNode.insertBefore(t,e),t.appendChild(e),e.removeAttribute("height"),e.removeAttribute("width")})}},{"../app/document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}],13:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(e("lazysizes"),r(e("./app/social-media"))),i=r(e("./app/dark-mode")),l=r(e("./app/header-transparency")),o=r(e("./components/load-script")),s=r(e("./components/scroll-hide-header"));document.addEventListener("DOMContentLoaded",()=>{"object"==typeof followSocialMedia&&null!==followSocialMedia&&(0,n.default)(followSocialMedia,".js-social-media"),(0,i.default)(".js-dark-mode"),(0,l.default)(".has-cover","is-head-transparent"),document.querySelector(".js-menu-open").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".js-search").classList.add("hidden"),document.body.classList.add("has-menu")}),document.querySelector(".js-menu-close").addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("has-menu")}),"undefined"!=typeof searchSettings&&"undefined"!=typeof siteSearch&&(0,o.default)(siteSearch),(0,s.default)(".js-hide-header")})},{"./app/dark-mode":3,"./app/header-transparency":5,"./app/social-media":6,"./components/load-script":9,"./components/scroll-hide-header":11,"@babel/runtime/helpers/interopRequireDefault":1,lazysizes:2}],14:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(e("./main"),r(e("./components/video-responsive"))),i=r(e("./components/resize-images-galleries")),l=r(e("./components/highlight-prismjs")),o=r(e("./components/gallery")),s=r(e("./post/is-singgle-post"));document.addEventListener("DOMContentLoaded",()=>{(0,n.default)(),(0,i.default)(),(0,l.default)("code[class*=language-]"),(0,s.default)(),(0,o.default)()})},{"./components/gallery":7,"./components/highlight-prismjs":8,"./components/resize-images-galleries":10,"./components/video-responsive":12,"./main":13,"./post/is-singgle-post":15,"@babel/runtime/helpers/interopRequireDefault":1}],15:[function(e,t,a){"use strict";var r=e("@babel/runtime/helpers/interopRequireDefault"),n=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,r(e("../app/document-query-selector-all")));a.default=()=>{if(document.body.classList.contains("is-single-post")){const a=document.querySelector(".js-share");if(a){const r=(0,n.default)(".kg-width-full, .kg-width-wide");if(r.length&&!(document.body.clientWidth<=1e3))window.addEventListener("scroll",()=>{let e=!1;for(const t in r)if(((e,t)=>{e=e.getBoundingClientRect(),t=t.getBoundingClientRect();return!(e.top>t.bottom||e.right<t.left||e.bottom<t.top||e.left>t.right)})(a,r[t])){e=!0;break}e?a.classList.add("is-hidden"):a.classList.remove("is-hidden")},{passive:!0})}}}},{"../app/document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}]},{},[14]);