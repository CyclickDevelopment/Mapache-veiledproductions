/*!
 * mapache-veiledproductions v4.0.3
 * Copyright 2023 Cyclic Development <pete@cyclick-development.co.uk> (https://github.com/cyclicdevelopment/mapache-veiledproductions)
 * Licensed under gpl-3.0
 */!function n(o,r,i){function s(t,e){if(!r[t]){if(!o[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}a=r[t]={exports:{}},o[t][0].call(a.exports,function(e){return s(o[t][1][e]||e)},a,a.exports,n,o,r,i)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<i.length;e++)s(i[e]);return s}({1:[function(e,t,a){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],2:[function(e,t,a){var n="undefined"!=typeof window?window:{},o=function(n,f,r){"use strict";var p,m,e,h,R,o,y,t,c,P,i,T,W,a,B,s,u,v,z,g,b,C,F,_,$,H,U,I,l,d,Y,Z,G,w,J,E,K,Q,V,L,A,M,S,X,ee,te,ae,ne,q,oe,re,ie,se,x,D,N,le,O,de,ce,ue,k,fe,pe,me,he,ye,j,ve={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in m=n.lazySizesConfig||n.lazysizesConfig||{},ve)e in m||(m[e]=ve[e]);return f&&f.getElementsByClassName?(h=f.documentElement,R=n.HTMLPictureElement,y="getAttribute",t=n[o="addEventListener"].bind(n),c=n.setTimeout,P=n.requestAnimationFrame||c,i=n.requestIdleCallback,T=/^picture$/i,W=["load","error","lazyincluded","_lazyloaded"],a={},B=Array.prototype.forEach,s=function(e,t){return a[t]||(a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),a[t].test(e[y]("class")||"")&&a[t]},u=function(e,t){s(e,t)||e.setAttribute("class",(e[y]("class")||"").trim()+" "+t)},v=function(e,t){(t=s(e,t))&&e.setAttribute("class",(e[y]("class")||"").replace(t," "))},z=function(t,a,e){var n=e?o:"removeEventListener";e&&z(t,a),W.forEach(function(e){t[n](e,a)})},g=function(e,t,a,n,o){var r=f.createEvent("Event");return(a=a||{}).instance=p,r.initEvent(t,!n,!o),r.detail=a,e.dispatchEvent(r),r},b=function(e,t){var a;!R&&(a=n.picturefill||m.pf)?(t&&t.src&&!e[y]("srcset")&&e.setAttribute("srcset",t.src),a({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},F=function(e,t,a){for(a=a||e.offsetWidth;a<m.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},I=[],l=U=[],ge._lsFlush=ze,_=ge,d=function(a,e){return e?function(){_(a)}:function(){var e=this,t=arguments;_(function(){a.apply(e,t)})}},Y=function(e){function t(){var e=r.now()-n;e<99?c(t,99-e):(i||o)(o)}var a,n,o=function(){a=null,e()};return function(){n=r.now(),a=a||c(t,99)}},re=/^img$/i,ie=/^iframe$/i,se="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),N=-1,le=function(e){return(X=null==X?"hidden"==C(f.body,"visibility"):X)||!("hidden"==C(e.parentNode,"visibility")&&"hidden"==C(e,"visibility"))},ee=Ce,ae=D=x=0,ne=m.throttleDelay,q=m.ricTimeout,oe=i&&49<q?function(){i(_e,{timeout:q}),q!==m.ricTimeout&&(q=m.ricTimeout)}:d(function(){c(_e)},!0),de=d(we),ce=function(e){de({target:e.target})},ue=d(function(t,e,a,n,o){var r,i,s,l,d;(i=g(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(a?u(t,m.autosizesClass):t.setAttribute("sizes",n)),a=t[y](m.srcsetAttr),n=t[y](m.srcAttr),o&&(r=(l=t.parentNode)&&T.test(l.nodeName||"")),s=e.firesLoad||"src"in t&&(a||n||r),i={target:t},u(t,m.loadingClass),s&&(clearTimeout(J),J=c(be,2500),z(t,ce,!0)),r&&B.call(l.getElementsByTagName("source"),Ee),a?t.setAttribute("srcset",a):n&&!r&&(ie.test(t.nodeName)?(e=n,0==(d=(l=t).getAttribute("data-load-mode")||m.iframeLoadMode)?l.contentWindow.location.replace(e):1==d&&(l.src=e)):t.src=n),o&&(a||r)&&b(t,{src:n})),t._lazyRace&&delete t._lazyRace,v(t,m.lazyClass),_(function(){var e=t.complete&&1<t.naturalWidth;s&&!e||(e&&u(t,m.fastLoadedClass),we(i),t._lazyCache=!0,c(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&D--},!0)}),fe=Y(function(){m.loadMode=3,O()}),Z={_:function(){K=r.now(),p.elements=f.getElementsByClassName(m.lazyClass),G=f.getElementsByClassName(m.lazyClass+" "+m.preloadClass),t("scroll",O,!0),t("resize",O,!0),t("pageshow",function(e){var t;e.persisted&&(t=f.querySelectorAll("."+m.loadingClass)).length&&t.forEach&&P(function(){t.forEach(function(e){e.complete&&k(e)})})}),n.MutationObserver?new MutationObserver(O).observe(h,{childList:!0,subtree:!0,attributes:!0}):(h[o]("DOMNodeInserted",O,!0),h[o]("DOMAttrModified",O,!0),setInterval(O,999)),t("hashchange",O,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[o](e,O,!0)}),/d$|^c/.test(f.readyState)?Ae():(t("load",Ae),f[o]("DOMContentLoaded",O),c(Ae,2e4)),p.elements.length?(Ce(),_._lsFlush()):O()},checkElems:O=function(e){var t;(e=!0===e)&&(q=33),te||(te=!0,(t=ne-(r.now()-ae))<0&&(t=0),e||t<9?oe():c(oe,t))},unveil:k=function(e){var t,a,n,o;e._lazyRace||!(!(o="auto"==(n=(a=re.test(e.nodeName))&&(e[y](m.sizesAttr)||e[y]("sizes"))))&&w||!a||!e[y]("src")&&!e.srcset||e.complete||s(e,m.errorClass))&&s(e,m.lazyClass)||(t=g(e,"lazyunveilread").detail,o&&pe.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,D++,ue(e,t,o,n,a))},_aLSL:Le},he=d(function(e,t,a,n){var o,r,i;if(e._lazysizesWidth=n,e.setAttribute("sizes",n+="px"),T.test(t.nodeName||""))for(r=0,i=(o=t.getElementsByTagName("source")).length;r<i;r++)o[r].setAttribute("sizes",n);a.detail.dataAttr||b(e,a.detail)}),pe={_:function(){me=f.getElementsByClassName(m.autosizesClass),t("resize",ye)},checkElems:ye=Y(function(){var e,t=me.length;if(t)for(e=0;e<t;e++)Me(me[e])}),updateElem:Me},j=function(){!j.i&&f.getElementsByClassName&&(j.i=!0,pe._(),Z._())},c(function(){m.init&&j()}),p={cfg:m,autoSizer:pe,loader:Z,init:j,uP:b,aC:u,rC:v,hC:s,fire:g,gW:F,rAF:_}):{init:function(){},cfg:m,noSupport:!0};function ze(){var e=l;for(l=U.length?I:U,H=!($=!0);e.length;)e.shift()();$=!1}function ge(e,t){$&&!t?e.apply(this,arguments):(l.push(e),H||(H=!0,(f.hidden?c:P)(ze)))}function be(e){D--,e&&!(D<0)&&e.target||(D=0)}function Ce(){var e,t,a,n,o,r,i,s,l,d,c,u=p.elements;if((E=m.loadMode)&&D<8&&(e=u.length)){for(t=0,N++;t<e;t++)if(u[t]&&!u[t]._lazyRace)if(!se||p.prematureUnveil&&p.prematureUnveil(u[t]))k(u[t]);else if((i=u[t][y]("data-expand"))&&(o=+i)||(o=x),l||(l=!m.expand||m.expand<1?500<h.clientHeight&&500<h.clientWidth?500:370:m.expand,d=(p._defEx=l)*m.expFactor,c=m.hFac,X=null,x<d&&D<1&&2<N&&2<E&&!f.hidden?(x=d,N=0):x=1<E&&1<N&&D<6?l:0),s!==o&&(Q=innerWidth+o*c,V=innerHeight+o,r=-1*o,s=o),d=u[t].getBoundingClientRect(),(S=d.bottom)>=r&&(L=d.top)<=V&&(M=d.right)>=r*c&&(A=d.left)<=Q&&(S||M||A||L)&&(m.loadHidden||le(u[t]))&&(w&&D<3&&!i&&(E<3||N<4)||function(e,t){var a,n=e,o=le(e);for(L-=t,S+=t,A-=t,M+=t;o&&(n=n.offsetParent)&&n!=f.body&&n!=h;)(o=0<(C(n,"opacity")||1))&&"visible"!=C(n,"overflow")&&(a=n.getBoundingClientRect(),o=M>a.left&&A<a.right&&S>a.top-1&&L<a.bottom+1);return o}(u[t],o))){if(k(u[t]),n=!0,9<D)break}else!n&&w&&!a&&D<4&&N<4&&2<E&&(G[0]||m.preloadAfterLoad)&&(G[0]||!i&&(S||M||A||L||"auto"!=u[t][y](m.sizesAttr)))&&(a=G[0]||u[t]);a&&!n&&k(a)}}function _e(){te=!1,ae=r.now(),ee()}function we(e){var t=e.target;t._lazyCache?delete t._lazyCache:(be(e),u(t,m.loadedClass),v(t,m.loadingClass),z(t,ce),g(t,"lazyloaded"))}function Ee(e){var t,a=e[y](m.srcsetAttr);(t=m.customMedia[e[y]("data-media")||e[y]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)}function Le(){3==m.loadMode&&(m.loadMode=2),fe()}function Ae(){w||(r.now()-K<999?c(Ae,999):(w=!0,m.loadMode=3,O(),t("scroll",Le,!0)))}function Me(e,t,a){var n=e.parentNode;n&&(a=F(e,n,a),(t=g(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=t.detail.width)&&a!==e._lazysizesWidth&&he(e,n,t,a))}};o=o(n,n.document,Date),n.lazySizes=o,"object"==typeof t&&t.exports&&(t.exports=o)},{}],3:[function(e,t,a){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n(e("./document-query-selector-all")));a.default=e=>{e=(0,o.default)(e);if(e.length){const t=document.documentElement;e.forEach(e=>e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("dark")?(t.classList.remove("dark"),localStorage.theme="light"):(t.classList.add("dark"),localStorage.theme="dark")}))}}},{"./document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}],4:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(t.querySelectorAll(e),0)}},{}],5:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=(e,t)=>{const a=document.body;a.closest(e)&&window.addEventListener("scroll",()=>{60<=window.scrollY?a.classList.remove(t):a.classList.add(t)},{passive:!0})}},{}],6:[function(e,t,a){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=(Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n(e("./document-query-selector-all")));a.default=(e,t)=>{t=(0,o.default)(t);if(t.length)return t.forEach(o=>{Object.entries(e).forEach(e=>{var t,[e,a]=e,n=a[0];/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(n)&&((t=document.createElement("a")).href=n,t.title=a[1],t.classList="button border-none hover:text-"+e,t.target="_blank",t.rel="noopener noreferrer",t.innerHTML=`<svg class="icon icon--${e}"><use xlink:href="#icon-${e}"></use></svg>`,o.appendChild(t))})})}},{"./document-query-selector-all":4,"@babel/runtime/helpers/interopRequireDefault":1}],7:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=(e,t)=>{var a=document.createElement("script");a.src=e,a.defer=!0,a.async=!0,t&&a.addEventListener("load",t),document.body.appendChild(a)}},{}],8:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=e=>{const a=document.querySelector(e);if(a){const n=document.querySelector(".js-search");let t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;t>e?(a.classList.remove("-top-18"),n.classList.add("mt-16")):(a.classList.add("-top-18"),n.classList.remove("mt-16")),t=e}}}},{}],9:[function(e,t,a){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=(e("lazysizes"),n(e("./app/social-media"))),r=n(e("./app/dark-mode")),i=n(e("./app/header-transparency")),s=n(e("./components/load-script")),l=n(e("./components/scroll-hide-header"));document.addEventListener("DOMContentLoaded",()=>{"object"==typeof followSocialMedia&&null!==followSocialMedia&&(0,o.default)(followSocialMedia,".js-social-media"),(0,r.default)(".js-dark-mode"),(0,i.default)(".has-cover","is-head-transparent"),document.querySelector(".js-menu-open").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".js-search").classList.add("hidden"),document.body.classList.add("has-menu")}),document.querySelector(".js-menu-close").addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("has-menu")}),"undefined"!=typeof searchSettings&&"undefined"!=typeof siteSearch&&(0,s.default)(siteSearch),(0,l.default)(".js-hide-header")})},{"./app/dark-mode":3,"./app/header-transparency":5,"./app/social-media":6,"./components/load-script":7,"./components/scroll-hide-header":8,"@babel/runtime/helpers/interopRequireDefault":1,lazysizes:2}]},{},[9]);