(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1522:function(e,t,n){Promise.resolve().then(n.t.bind(n,6676,23)),Promise.resolve().then(n.bind(n,1055)),Promise.resolve().then(n.bind(n,4888)),Promise.resolve().then(n.bind(n,8087)),Promise.resolve().then(n.bind(n,7239)),Promise.resolve().then(n.t.bind(n,8003,23)),Promise.resolve().then(n.t.bind(n,8925,23))},1055:function(e,t,n){"use strict";n.d(t,{FacebookPixel:function(){return l}});var r=n(7437),a=n(2265),o=n(8667);let i=()=>{window.fbq("track","PageView")},l=e=>{let{pixelId:t}=e,[n,l]=a.useState(!1);return a.useEffect(()=>{n&&i()},[n]),(0,r.jsx)(o.default,{id:"fb-pixel",src:"/scripts/pixel.js",strategy:"afterInteractive",onLoad:()=>l(!0),"data-pixel-id":t})}},7239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(7437),a=n(2265)},4888:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:r="dataLayer",nonce:u}=e;return void 0===a&&(a=r),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(r,"'] = window['").concat(r,"'] || [];\n          function gtag(){window['").concat(r,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:u}),(0,o.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:u})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))};let o=n(7437),i=n(2265),l=(r=n(8667))&&r.__esModule?r:{default:r}},8087:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:r="dataLayer",auth:u,preview:c,dataLayer:s,nonce:d}=e;l=r;let f="dataLayer"!==r?"&l=".concat(r):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s?"w[l].push(".concat(JSON.stringify(s),")"):"","\n      })(window,'").concat(r,"');")},nonce:d}),(0,a.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(u?"&gtm_auth=".concat(u):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):""),nonce:d})]})};let a=n(7437),o=n(2265),i=(r=n(8667))&&r.__esModule?r:{default:r},l="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||l;window[n]=window[n]||[],window[n].push(e)}},8667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(8003),a=n.n(r),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},8221:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&l.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(o(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3515:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y}});let r=n(7043),a=n(3099),o=n(7437),i=r._(n(4887)),l=a._(n(2265)),u=n(8701),c=n(8221),s=n(3515),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],g=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:s}=e,_=n||t;if(_&&f.has(_))return;if(d.has(t)){f.add(_),d.get(t).then(r,u);return}let m=()=>{a&&a(),f.add(_)},y=document.createElement("script"),h=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(y.innerHTML=o.__html||"",m()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(y.src=t,d.set(t,h)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),s&&g(s),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>_(e))}):_(e)}function y(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function h(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...g}=e,{updateScripts:m,scripts:y,getIsSsr:h,appDir:b,nonce:v}=(0,l.useContext)(u.HeadManagerContext),w=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===c?_(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>_(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...g}]),m(y)):h&&h()?f.add(t||n):h&&!h()&&_(e)),b){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:v,crossOrigin:g.crossOrigin}:{as:"script",nonce:v,crossOrigin:g.crossOrigin}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...g,id:t}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:v,crossOrigin:g.crossOrigin}:{as:"script",nonce:v,crossOrigin:g.crossOrigin})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let b=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6676:function(){},8925:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}}},function(e){e.O(0,[361,971,117,744],function(){return e(e.s=1522)}),_N_E=e.O()}]);