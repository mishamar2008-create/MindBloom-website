function Ed(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const a=Object.getOwnPropertyDescriptor(r,l);a&&Object.defineProperty(e,l,a.get?a:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ws={exports:{}},Tl={},Vs={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),Pd=Symbol.for("react.portal"),_d=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Bd=Symbol.for("react.lazy"),Eo=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=Eo&&e[Eo]||e["@@iterator"],typeof e=="function"?e:null)}var Hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qs=Object.assign,qs={};function Cn(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Hs}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=Cn.prototype;function wi(e,t,n){this.props=e,this.context=t,this.refs=qs,this.updater=n||Hs}var ki=wi.prototype=new Ks;ki.constructor=wi;Qs(ki,Cn.prototype);ki.isPureReactComponent=!0;var Co=Array.isArray,Gs=Object.prototype.hasOwnProperty,Si={current:null},Ys={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,t,n){var r,l={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Gs.call(t,r)&&!Ys.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:vr,type:e,key:a,ref:i,props:l,_owner:Si.current}}function Dd(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function Ad(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Po=/\/+/g;function Gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ad(""+e.key):t.toString(36)}function Wr(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case vr:case Pd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Gl(i,0):r,Co(l)?(n="",e!=null&&(n=e.replace(Po,"$&/")+"/"),Wr(l,t,n,"",function(c){return c})):l!=null&&(ji(l)&&(l=Dd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Po,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Co(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+Gl(a,s);i+=Wr(a,t,n,u,l)}else if(u=Fd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+Gl(a,s++),i+=Wr(a,t,n,u,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Cr(e,t,n){if(e==null)return e;var r=[],l=0;return Wr(e,r,"","",function(a){return t.call(n,a,l++)}),r}function Ud(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Vr={transition:null},bd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:Si};function Js(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Cr,forEach:function(e,t,n){Cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cr(e,function(){t++}),t},toArray:function(e){return Cr(e,function(t){return t})||[]},only:function(e){if(!ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Cn;I.Fragment=_d;I.Profiler=Ld;I.PureComponent=wi;I.StrictMode=Td;I.Suspense=Rd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bd;I.act=Js;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qs({},e.props),l=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Si.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Gs.call(t,u)&&!Ys.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:vr,type:e.type,key:l,ref:a,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:zd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Md,_context:e},e.Consumer=e};I.createElement=Xs;I.createFactory=function(e){var t=Xs.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Id,render:e}};I.isValidElement=ji;I.lazy=function(e){return{$$typeof:Bd,_payload:{_status:-1,_result:e},_init:Ud}};I.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};I.unstable_act=Js;I.useCallback=function(e,t){return fe.current.useCallback(e,t)};I.useContext=function(e){return fe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};I.useEffect=function(e,t){return fe.current.useEffect(e,t)};I.useId=function(){return fe.current.useId()};I.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return fe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};I.useRef=function(e){return fe.current.useRef(e)};I.useState=function(e){return fe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return fe.current.useTransition()};I.version="18.3.1";Vs.exports=I;var y=Vs.exports;const Zs=Cd(y),$d=Ed({__proto__:null,default:Zs},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=y,Vd=Symbol.for("react.element"),Hd=Symbol.for("react.fragment"),Qd=Object.prototype.hasOwnProperty,qd=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,n){var r,l={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Qd.call(t,r)&&!Kd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Vd,type:e,key:a,ref:i,props:l,_owner:qd.current}}Tl.Fragment=Hd;Tl.jsx=eu;Tl.jsxs=eu;Ws.exports=Tl;var o=Ws.exports,Na={},tu={exports:{}},Ee={},nu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,L){var M=P.length;P.push(L);e:for(;0<M;){var K=M-1>>>1,ee=P[K];if(0<l(ee,L))P[K]=L,P[M]=ee,M=K;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],M=P.pop();if(M!==L){P[0]=M;e:for(var K=0,ee=P.length,Nr=ee>>>1;K<Nr;){var Mt=2*(K+1)-1,Kl=P[Mt],zt=Mt+1,Er=P[zt];if(0>l(Kl,M))zt<ee&&0>l(Er,Kl)?(P[K]=Er,P[zt]=M,K=zt):(P[K]=Kl,P[Mt]=M,K=Mt);else if(zt<ee&&0>l(Er,M))P[K]=Er,P[zt]=M,K=zt;else break e}}return L}function l(P,L){var M=P.sortIndex-L.sortIndex;return M!==0?M:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],g=1,m=null,h=3,v=!1,x=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=P)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function w(P){if(k=!1,p(P),!x)if(n(u)!==null)x=!0,we(j);else{var L=n(c);L!==null&&qe(w,L.startTime-P)}}function j(P,L){x=!1,k&&(k=!1,f(T),T=-1),v=!0;var M=h;try{for(p(L),m=n(u);m!==null&&(!(m.expirationTime>L)||P&&!me());){var K=m.callback;if(typeof K=="function"){m.callback=null,h=m.priorityLevel;var ee=K(m.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(u)&&r(u),p(L)}else r(u);m=n(u)}if(m!==null)var Nr=!0;else{var Mt=n(c);Mt!==null&&qe(w,Mt.startTime-L),Nr=!1}return Nr}finally{m=null,h=M,v=!1}}var N=!1,_=null,T=-1,U=5,z=-1;function me(){return!(e.unstable_now()-z<U)}function at(){if(_!==null){var P=e.unstable_now();z=P;var L=!0;try{L=_(!0,P)}finally{L?Lt():(N=!1,_=null)}}else N=!1}var Lt;if(typeof d=="function")Lt=function(){d(at)};else if(typeof MessageChannel<"u"){var jr=new MessageChannel,ql=jr.port2;jr.port1.onmessage=at,Lt=function(){ql.postMessage(null)}}else Lt=function(){C(at,0)};function we(P){_=P,N||(N=!0,Lt())}function qe(P,L){T=C(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,we(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return P()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return L()}finally{h=M}},e.unstable_scheduleCallback=function(P,L,M){var K=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?K+M:K):M=K,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,P={id:g++,callback:L,priorityLevel:P,startTime:M,expirationTime:ee,sortIndex:-1},M>K?(P.sortIndex=M,t(c,P),n(u)===null&&P===n(c)&&(k?(f(T),T=-1):k=!0,qe(w,M-K))):(P.sortIndex=ee,t(u,P),x||v||(x=!0,we(j))),P},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(P){var L=h;return function(){var M=h;h=L;try{return P.apply(this,arguments)}finally{h=M}}}})(ru);nu.exports=ru;var Gd=nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=y,Ne=Gd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,Zn={};function Qt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,Xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_o={},To={};function Jd(e){return Ea.call(To,e)?!0:Ea.call(_o,e)?!1:Xd.test(e)?To[e]=!0:(_o[e]=!0,!1)}function Zd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ef(e,t,n,r){if(t===null||typeof t>"u"||Zd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ni=/[\-:]([a-z])/g;function Ei(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ni,Ei);ae[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ni,Ei);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ni,Ei);ae[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ci(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ef(t,n,l,r)&&(n=null),r||l===null?Jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Pi=Symbol.for("react.strict_mode"),Ca=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),iu=Symbol.for("react.context"),_i=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),_a=Symbol.for("react.suspense_list"),Ti=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),Lo=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=Lo&&e[Lo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Yl;function Un(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Xl=!1;function Jl(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),a=r.stack.split(`
`),i=l.length-1,s=a.length-1;1<=i&&0<=s&&l[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==a[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function tf(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case Zt:return"Portal";case Ca:return"Profiler";case Pi:return"StrictMode";case Pa:return"Suspense";case _a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iu:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case _i:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ti:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function nf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===Pi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rf(e){var t=su(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=rf(e))}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=su(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function La(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&Ci(e,"checked",t,!1)}function Ma(e,t){cu(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?za(e,t.type,n):t.hasOwnProperty("defaultValue")&&za(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function za(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ia(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Io(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(bn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function du(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ro(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lf=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function mu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=mu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var af=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,t){if(t){if(af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Li(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,pn=null,mn=null;function Oo(e){if(e=wr(e)){if(typeof Da!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Rl(t),Da(e.stateNode,e.type,t))}}function gu(e){pn?mn?mn.push(e):mn=[e]:pn=e}function vu(){if(pn){var e=pn,t=mn;if(mn=pn=null,Oo(e),t)for(e=0;e<t.length;e++)Oo(t[e])}}function yu(e,t){return e(t)}function xu(){}var Zl=!1;function wu(e,t,n){if(Zl)return e(t,n);Zl=!0;try{return yu(e,t,n)}finally{Zl=!1,(pn!==null||mn!==null)&&(xu(),vu())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Aa=!1;if(Ze)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Aa=!1}function of(e,t,n,r,l,a,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Hn=!1,rl=null,ll=!1,Ua=null,sf={onError:function(e){Hn=!0,rl=e}};function uf(e,t,n,r,l,a,i,s,u){Hn=!1,rl=null,of.apply(sf,arguments)}function cf(e,t,n,r,l,a,i,s,u){if(uf.apply(this,arguments),Hn){if(Hn){var c=rl;Hn=!1,rl=null}else throw Error(S(198));ll||(ll=!0,Ua=c)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bo(e){if(qt(e)!==e)throw Error(S(188))}function df(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Bo(l),e;if(a===r)return Bo(l),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=a;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=a;break}if(s===r){i=!0,r=l,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=l;break}if(s===r){i=!0,r=a,n=l;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Su(e){return e=df(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Nu=Ne.unstable_scheduleCallback,Fo=Ne.unstable_cancelCallback,ff=Ne.unstable_shouldYield,pf=Ne.unstable_requestPaint,G=Ne.unstable_now,mf=Ne.unstable_getCurrentPriorityLevel,Mi=Ne.unstable_ImmediatePriority,Eu=Ne.unstable_UserBlockingPriority,al=Ne.unstable_NormalPriority,hf=Ne.unstable_LowPriority,Cu=Ne.unstable_IdlePriority,Ll=null,He=null;function gf(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:xf,vf=Math.log,yf=Math.LN2;function xf(e){return e>>>=0,e===0?32:31-(vf(e)/yf|0)|0}var Lr=64,Mr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=$n(s):(a&=i,a!==0&&(r=$n(a)))}else i=n&~l,i!==0?r=$n(i):a!==0&&(r=$n(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-De(a),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=wf(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pu(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function _u(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,Ii,Lu,Mu,zu,$a=!1,zr=[],mt=null,ht=null,gt=null,nr=new Map,rr=new Map,ut=[],jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Do(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function zn(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&Ii(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Nf(e,t,n,r,l){switch(t){case"focusin":return mt=zn(mt,e,t,n,r,l),!0;case"dragenter":return ht=zn(ht,e,t,n,r,l),!0;case"mouseover":return gt=zn(gt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return nr.set(a,zn(nr.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,rr.set(a,zn(rr.get(a)||null,e,t,n,r,l)),!0}return!1}function Iu(e){var t=Bt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=ku(n),t!==null){e.blockedOn=t,zu(e.priority,function(){Lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return t=wr(n),t!==null&&Ii(t),e.blockedOn=n,!1;t.shift()}return!0}function Ao(e,t,n){Hr(e)&&n.delete(t)}function Ef(){$a=!1,mt!==null&&Hr(mt)&&(mt=null),ht!==null&&Hr(ht)&&(ht=null),gt!==null&&Hr(gt)&&(gt=null),nr.forEach(Ao),rr.forEach(Ao)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Ef)))}function lr(e){function t(l){return In(l,e)}if(0<zr.length){In(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&In(mt,e),ht!==null&&In(ht,e),gt!==null&&In(gt,e),nr.forEach(t),rr.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Iu(n),n.blockedOn===null&&ut.shift()}var hn=rt.ReactCurrentBatchConfig,ol=!0;function Cf(e,t,n,r){var l=O,a=hn.transition;hn.transition=null;try{O=1,Ri(e,t,n,r)}finally{O=l,hn.transition=a}}function Pf(e,t,n,r){var l=O,a=hn.transition;hn.transition=null;try{O=4,Ri(e,t,n,r)}finally{O=l,hn.transition=a}}function Ri(e,t,n,r){if(ol){var l=Wa(e,t,n,r);if(l===null)ca(e,t,r,sl,n),Do(e,r);else if(Nf(l,e,t,n,r))r.stopPropagation();else if(Do(e,r),t&4&&-1<jf.indexOf(e)){for(;l!==null;){var a=wr(l);if(a!==null&&Tu(a),a=Wa(e,t,n,r),a===null&&ca(e,t,r,sl,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else ca(e,t,r,null,n)}}var sl=null;function Wa(e,t,n,r){if(sl=null,e=Li(r),e=Bt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ku(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mf()){case Mi:return 1;case Eu:return 4;case al:case hf:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var dt=null,Oi=null,Qr=null;function Ou(){if(Qr)return Qr;var e,t=Oi,n=t.length,r,l="value"in dt?dt.value:dt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[a-r];r++);return Qr=l.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Uo(){return!1}function Ce(e){function t(n,r,l,a,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ir:Uo,this.isPropagationStopped=Uo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Ce(Pn),xr=H({},Pn,{view:0,detail:0}),_f=Ce(xr),ta,na,Rn,Ml=H({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(ta=e.screenX-Rn.screenX,na=e.screenY-Rn.screenY):na=ta=0,Rn=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),bo=Ce(Ml),Tf=H({},Ml,{dataTransfer:0}),Lf=Ce(Tf),Mf=H({},xr,{relatedTarget:0}),ra=Ce(Mf),zf=H({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),If=Ce(zf),Rf=H({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=Ce(Rf),Bf=H({},Pn,{data:0}),$o=Ce(Bf),Ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Af[e])?!!t[e]:!1}function Fi(){return Uf}var bf=H({},xr,{key:function(e){if(e.key){var t=Ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fi,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$f=Ce(bf),Wf=H({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Ce(Wf),Vf=H({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fi}),Hf=Ce(Vf),Qf=H({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=Ce(Qf),Kf=H({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Ce(Kf),Yf=[9,13,27,32],Di=Ze&&"CompositionEvent"in window,Qn=null;Ze&&"documentMode"in document&&(Qn=document.documentMode);var Xf=Ze&&"TextEvent"in window&&!Qn,Bu=Ze&&(!Di||Qn&&8<Qn&&11>=Qn),Vo=" ",Ho=!1;function Fu(e,t){switch(e){case"keyup":return Yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Jf(e,t){switch(e){case"compositionend":return Du(t);case"keypress":return t.which!==32?null:(Ho=!0,Vo);case"textInput":return e=t.data,e===Vo&&Ho?null:e;default:return null}}function Zf(e,t){if(tn)return e==="compositionend"||!Di&&Fu(e,t)?(e=Ou(),Qr=Oi=dt=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bu&&t.locale!=="ko"?null:t.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ep[e.type]:t==="textarea"}function Au(e,t,n,r){gu(r),t=ul(t,"onChange"),0<t.length&&(n=new Bi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,ar=null;function tp(e){Yu(e,0)}function zl(e){var t=ln(e);if(uu(t))return e}function np(e,t){if(e==="change")return t}var Uu=!1;if(Ze){var la;if(Ze){var aa="oninput"in document;if(!aa){var qo=document.createElement("div");qo.setAttribute("oninput","return;"),aa=typeof qo.oninput=="function"}la=aa}else la=!1;Uu=la&&(!document.documentMode||9<document.documentMode)}function Ko(){qn&&(qn.detachEvent("onpropertychange",bu),ar=qn=null)}function bu(e){if(e.propertyName==="value"&&zl(ar)){var t=[];Au(t,ar,e,Li(e)),wu(tp,t)}}function rp(e,t,n){e==="focusin"?(Ko(),qn=t,ar=n,qn.attachEvent("onpropertychange",bu)):e==="focusout"&&Ko()}function lp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(ar)}function ap(e,t){if(e==="click")return zl(t)}function ip(e,t){if(e==="input"||e==="change")return zl(t)}function op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:op;function ir(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ea.call(t,l)||!Ue(e[l],t[l]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var n=Go(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Go(n)}}function $u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function Ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sp(e){var t=Wu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$u(n.ownerDocument.documentElement,n)){if(r!==null&&Ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=Yo(n,a);var i=Yo(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var up=Ze&&"documentMode"in document&&11>=document.documentMode,nn=null,Va=null,Kn=null,Ha=!1;function Xo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||nn==null||nn!==nl(r)||(r=nn,"selectionStart"in r&&Ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&ir(Kn,r)||(Kn=r,r=ul(Va,"onSelect"),0<r.length&&(t=new Bi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},ia={},Vu={};Ze&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Il(e){if(ia[e])return ia[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vu)return ia[e]=t[n];return e}var Hu=Il("animationend"),Qu=Il("animationiteration"),qu=Il("animationstart"),Ku=Il("transitionend"),Gu=new Map,Jo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){Gu.set(e,t),Qt(t,[e])}for(var oa=0;oa<Jo.length;oa++){var sa=Jo[oa],cp=sa.toLowerCase(),dp=sa[0].toUpperCase()+sa.slice(1);Et(cp,"on"+dp)}Et(Hu,"onAnimationEnd");Et(Qu,"onAnimationIteration");Et(qu,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Ku,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function Zo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cf(r,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==a&&l.isPropagationStopped())break e;Zo(l,s,c),a=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==a&&l.isPropagationStopped())break e;Zo(l,s,c),a=u}}}if(ll)throw e=Ua,ll=!1,Ua=null,e}function D(e,t){var n=t[Ya];n===void 0&&(n=t[Ya]=new Set);var r=e+"__bubble";n.has(r)||(Xu(t,e,2,!1),n.add(r))}function ua(e,t,n){var r=0;t&&(r|=4),Xu(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Or]){e[Or]=!0,lu.forEach(function(n){n!=="selectionchange"&&(fp.has(n)||ua(n,!1,e),ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,ua("selectionchange",!1,t))}}function Xu(e,t,n,r){switch(Ru(t)){case 1:var l=Cf;break;case 4:l=Pf;break;default:l=Ri}n=l.bind(null,t,n,e),l=void 0,!Aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ca(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Bt(s),i===null)return;if(u=i.tag,u===5||u===6){r=a=i;continue e}s=s.parentNode}}r=r.return}wu(function(){var c=a,g=Li(n),m=[];e:{var h=Gu.get(e);if(h!==void 0){var v=Bi,x=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":v=$f;break;case"focusin":x="focus",v=ra;break;case"focusout":x="blur",v=ra;break;case"beforeblur":case"afterblur":v=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hf;break;case Hu:case Qu:case qu:v=If;break;case Ku:v=qf;break;case"scroll":v=_f;break;case"wheel":v=Gf;break;case"copy":case"cut":case"paste":v=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wo}var k=(t&4)!==0,C=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=tr(d,f),w!=null&&k.push(sr(d,w,p)))),C)break;d=d.return}0<k.length&&(h=new v(h,x,null,n,g),m.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Fa&&(x=n.relatedTarget||n.fromElement)&&(Bt(x)||x[et]))break e;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?Bt(x):null,x!==null&&(C=qt(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(k=bo,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Wo,w="onPointerLeave",f="onPointerEnter",d="pointer"),C=v==null?h:ln(v),p=x==null?h:ln(x),h=new k(w,d+"leave",v,n,g),h.target=C,h.relatedTarget=p,w=null,Bt(g)===c&&(k=new k(f,d+"enter",x,n,g),k.target=p,k.relatedTarget=C,w=k),C=w,v&&x)t:{for(k=v,f=x,d=0,p=k;p;p=Jt(p))d++;for(p=0,w=f;w;w=Jt(w))p++;for(;0<d-p;)k=Jt(k),d--;for(;0<p-d;)f=Jt(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=Jt(k),f=Jt(f)}k=null}else k=null;v!==null&&es(m,h,v,k,!1),x!==null&&C!==null&&es(m,C,x,k,!0)}}e:{if(h=c?ln(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=np;else if(Qo(h))if(Uu)j=ip;else{j=lp;var N=rp}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=ap);if(j&&(j=j(e,c))){Au(m,j,n,g);break e}N&&N(e,h,c),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&za(h,"number",h.value)}switch(N=c?ln(c):window,e){case"focusin":(Qo(N)||N.contentEditable==="true")&&(nn=N,Va=c,Kn=null);break;case"focusout":Kn=Va=nn=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,Xo(m,n,g);break;case"selectionchange":if(up)break;case"keydown":case"keyup":Xo(m,n,g)}var _;if(Di)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else tn?Fu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Bu&&n.locale!=="ko"&&(tn||T!=="onCompositionStart"?T==="onCompositionEnd"&&tn&&(_=Ou()):(dt=g,Oi="value"in dt?dt.value:dt.textContent,tn=!0)),N=ul(c,T),0<N.length&&(T=new $o(T,e,null,n,g),m.push({event:T,listeners:N}),_?T.data=_:(_=Du(n),_!==null&&(T.data=_)))),(_=Xf?Jf(e,n):Zf(e,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(g=new $o("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=_))}Yu(m,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=tr(e,n),a!=null&&r.unshift(sr(e,a,l)),a=tr(e,t),a!=null&&r.push(sr(e,a,l))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function es(e,t,n,r,l){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=tr(n,a),u!=null&&i.unshift(sr(n,u,s))):l||(u=tr(n,a),u!=null&&i.push(sr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var pp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function ts(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(mp,"")}function Br(e,t,n){if(t=ts(t),ts(e)!==t&&n)throw Error(S(425))}function cl(){}var Qa=null,qa=null;function Ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ga=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,ns=typeof Promise=="function"?Promise:void 0,gp=typeof queueMicrotask=="function"?queueMicrotask:typeof ns<"u"?function(e){return ns.resolve(null).then(e).catch(vp)}:Ga;function vp(e){setTimeout(function(){throw e})}function da(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);lr(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),Ve="__reactFiber$"+_n,ur="__reactProps$"+_n,et="__reactContainer$"+_n,Ya="__reactEvents$"+_n,yp="__reactListeners$"+_n,xp="__reactHandles$"+_n;function Bt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rs(e);e!==null;){if(n=e[Ve])return n;e=rs(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Ve]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Rl(e){return e[ur]||null}var Xa=[],an=-1;function Ct(e){return{current:e}}function A(e){0>an||(e.current=Xa[an],Xa[an]=null,an--)}function B(e,t){an++,Xa[an]=e.current,e.current=t}var Nt={},ue=Ct(Nt),ve=Ct(!1),bt=Nt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function dl(){A(ve),A(ue)}function ls(e,t,n){if(ue.current!==Nt)throw Error(S(168));B(ue,t),B(ve,n)}function Ju(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,nf(e)||"Unknown",l));return H({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,bt=ue.current,B(ue,e),B(ve,ve.current),!0}function as(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ju(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,A(ve),A(ue),B(ue,e)):A(ve),B(ve,n)}var Ge=null,Ol=!1,fa=!1;function Zu(e){Ge===null?Ge=[e]:Ge.push(e)}function wp(e){Ol=!0,Zu(e)}function Pt(){if(!fa&&Ge!==null){fa=!0;var e=0,t=O;try{var n=Ge;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Ol=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),Nu(Mi,Pt),l}finally{O=t,fa=!1}}return null}var on=[],sn=0,pl=null,ml=0,Pe=[],_e=0,$t=null,Ye=1,Xe="";function It(e,t){on[sn++]=ml,on[sn++]=pl,pl=e,ml=t}function ec(e,t,n){Pe[_e++]=Ye,Pe[_e++]=Xe,Pe[_e++]=$t,$t=e;var r=Ye;e=Xe;var l=32-De(r)-1;r&=~(1<<l),n+=1;var a=32-De(t)+l;if(30<a){var i=l-l%5;a=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ye=1<<32-De(t)+l|n<<l|r,Xe=a+e}else Ye=1<<a|n<<l|r,Xe=e}function Ui(e){e.return!==null&&(It(e,1),ec(e,1,0))}function bi(e){for(;e===pl;)pl=on[--sn],on[sn]=null,ml=on[--sn],on[sn]=null;for(;e===$t;)$t=Pe[--_e],Pe[_e]=null,Xe=Pe[--_e],Pe[_e]=null,Ye=Pe[--_e],Pe[_e]=null}var je=null,Se=null,b=!1,Be=null;function tc(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function is(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Se=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Se=null,!0):!1;default:return!1}}function Ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(b){var t=Se;if(t){var n=t;if(!is(e,t)){if(Ja(e))throw Error(S(418));t=vt(n.nextSibling);var r=je;t&&is(e,t)?tc(r,n):(e.flags=e.flags&-4097|2,b=!1,je=e)}}else{if(Ja(e))throw Error(S(418));e.flags=e.flags&-4097|2,b=!1,je=e}}}function os(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Fr(e){if(e!==je)return!1;if(!b)return os(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ka(e.type,e.memoizedProps)),t&&(t=Se)){if(Ja(e))throw nc(),Error(S(418));for(;t;)tc(e,t),t=vt(t.nextSibling)}if(os(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=je?vt(e.stateNode.nextSibling):null;return!0}function nc(){for(var e=Se;e;)e=vt(e.nextSibling)}function kn(){Se=je=null,b=!1}function $i(e){Be===null?Be=[e]:Be.push(e)}var kp=rt.ReactCurrentBatchConfig;function On(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=l.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ss(e){var t=e._init;return t(e._payload)}function rc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=kt(f,d),f.index=0,f.sibling=null,f}function a(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,w){return d===null||d.tag!==6?(d=xa(p,f.mode,w),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,w){var j=p.type;return j===en?g(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ot&&ss(j)===d.type)?(w=l(d,p.props),w.ref=On(f,d,p),w.return=f,w):(w=el(p.type,p.key,p.props,null,f.mode,w),w.ref=On(f,d,p),w.return=f,w)}function c(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=wa(p,f.mode,w),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function g(f,d,p,w,j){return d===null||d.tag!==7?(d=Ut(p,f.mode,w,j),d.return=f,d):(d=l(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xa(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return p=el(d.type,d.key,d.props,null,f.mode,p),p.ref=On(f,null,d),p.return=f,p;case Zt:return d=wa(d,f.mode,p),d.return=f,d;case ot:var w=d._init;return m(f,w(d._payload),p)}if(bn(d)||Ln(d))return d=Ut(d,f.mode,p,null),d.return=f,d;Dr(f,d)}return null}function h(f,d,p,w){var j=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pr:return p.key===j?u(f,d,p,w):null;case Zt:return p.key===j?c(f,d,p,w):null;case ot:return j=p._init,h(f,d,j(p._payload),w)}if(bn(p)||Ln(p))return j!==null?null:g(f,d,p,w,null);Dr(f,p)}return null}function v(f,d,p,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(d,f,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pr:return f=f.get(w.key===null?p:w.key)||null,u(d,f,w,j);case Zt:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,j);case ot:var N=w._init;return v(f,d,p,N(w._payload),j)}if(bn(w)||Ln(w))return f=f.get(p)||null,g(d,f,w,j,null);Dr(d,w)}return null}function x(f,d,p,w){for(var j=null,N=null,_=d,T=d=0,U=null;_!==null&&T<p.length;T++){_.index>T?(U=_,_=null):U=_.sibling;var z=h(f,_,p[T],w);if(z===null){_===null&&(_=U);break}e&&_&&z.alternate===null&&t(f,_),d=a(z,d,T),N===null?j=z:N.sibling=z,N=z,_=U}if(T===p.length)return n(f,_),b&&It(f,T),j;if(_===null){for(;T<p.length;T++)_=m(f,p[T],w),_!==null&&(d=a(_,d,T),N===null?j=_:N.sibling=_,N=_);return b&&It(f,T),j}for(_=r(f,_);T<p.length;T++)U=v(_,f,T,p[T],w),U!==null&&(e&&U.alternate!==null&&_.delete(U.key===null?T:U.key),d=a(U,d,T),N===null?j=U:N.sibling=U,N=U);return e&&_.forEach(function(me){return t(f,me)}),b&&It(f,T),j}function k(f,d,p,w){var j=Ln(p);if(typeof j!="function")throw Error(S(150));if(p=j.call(p),p==null)throw Error(S(151));for(var N=j=null,_=d,T=d=0,U=null,z=p.next();_!==null&&!z.done;T++,z=p.next()){_.index>T?(U=_,_=null):U=_.sibling;var me=h(f,_,z.value,w);if(me===null){_===null&&(_=U);break}e&&_&&me.alternate===null&&t(f,_),d=a(me,d,T),N===null?j=me:N.sibling=me,N=me,_=U}if(z.done)return n(f,_),b&&It(f,T),j;if(_===null){for(;!z.done;T++,z=p.next())z=m(f,z.value,w),z!==null&&(d=a(z,d,T),N===null?j=z:N.sibling=z,N=z);return b&&It(f,T),j}for(_=r(f,_);!z.done;T++,z=p.next())z=v(_,f,T,z.value,w),z!==null&&(e&&z.alternate!==null&&_.delete(z.key===null?T:z.key),d=a(z,d,T),N===null?j=z:N.sibling=z,N=z);return e&&_.forEach(function(at){return t(f,at)}),b&&It(f,T),j}function C(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===en&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Pr:e:{for(var j=p.key,N=d;N!==null;){if(N.key===j){if(j=p.type,j===en){if(N.tag===7){n(f,N.sibling),d=l(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ot&&ss(j)===N.type){n(f,N.sibling),d=l(N,p.props),d.ref=On(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===en?(d=Ut(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=el(p.type,p.key,p.props,null,f.mode,w),w.ref=On(f,d,p),w.return=f,f=w)}return i(f);case Zt:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=wa(p,f.mode,w),d.return=f,f=d}return i(f);case ot:return N=p._init,C(f,d,N(p._payload),w)}if(bn(p))return x(f,d,p,w);if(Ln(p))return k(f,d,p,w);Dr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=xa(p,f.mode,w),d.return=f,f=d),i(f)):n(f,d)}return C}var Sn=rc(!0),lc=rc(!1),hl=Ct(null),gl=null,un=null,Wi=null;function Vi(){Wi=un=gl=null}function Hi(e){var t=hl.current;A(hl),e._currentValue=t}function ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){gl=e,Wi=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Wi!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(gl===null)throw Error(S(308));un=e,gl.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var Ft=null;function Qi(e){Ft===null?Ft=[e]:Ft.push(e)}function ac(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Qi(t)):(n.next=l.next,l.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,tt(e,n)}return l=r.interleaved,l===null?(t.next=t,Qi(r)):(t.next=l.next,l.next=t),r.interleaved=t,tt(e,n)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var l=e.updateQueue;st=!1;var a=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?a=c:i.next=c,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(a!==null){var m=l.baseState;i=0,g=c=u=null,s=a;do{var h=s.lane,v=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,k=s;switch(h=t,v=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){m=x.call(v,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(v,m,h):x,h==null)break e;m=H({},m,h);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=v,u=m):g=g.next=v,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Vt|=i,e.lanes=i,e.memoizedState=m}}function cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var kr={},Qe=Ct(kr),cr=Ct(kr),dr=Ct(kr);function Dt(e){if(e===kr)throw Error(S(174));return e}function Ki(e,t){switch(B(dr,t),B(cr,e),B(Qe,kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}A(Qe),B(Qe,t)}function jn(){A(Qe),A(cr),A(dr)}function oc(e){Dt(dr.current);var t=Dt(Qe.current),n=Ra(t,e.type);t!==n&&(B(cr,e),B(Qe,n))}function Gi(e){cr.current===e&&(A(Qe),A(cr))}var W=Ct(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function Yi(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var Gr=rt.ReactCurrentDispatcher,ma=rt.ReactCurrentBatchConfig,Wt=0,V=null,J=null,te=null,xl=!1,Gn=!1,fr=0,Sp=0;function ie(){throw Error(S(321))}function Xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Ji(e,t,n,r,l,a){if(Wt=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?Cp:Pp,e=n(r,l),Gn){a=0;do{if(Gn=!1,fr=0,25<=a)throw Error(S(301));a+=1,te=J=null,t.updateQueue=null,Gr.current=_p,e=n(r,l)}while(Gn)}if(Gr.current=wl,t=J!==null&&J.next!==null,Wt=0,te=J=V=null,xl=!1,t)throw Error(S(300));return e}function Zi(){var e=fr!==0;return fr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function ze(){if(J===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?V.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function pr(e,t){return typeof t=="function"?t(e):t}function ha(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var i=l.next;l.next=a.next,a.next=i}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var s=i=null,u=null,c=a;do{var g=c.lane;if((Wt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,i=r):u=u.next=m,V.lanes|=g,Vt|=g}c=c.next}while(c!==null&&c!==a);u===null?i=r:u.next=s,Ue(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,V.lanes|=a,Vt|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ga(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do a=e(a,i.action),i=i.next;while(i!==l);Ue(a,t.memoizedState)||(ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function sc(){}function uc(e,t){var n=V,r=ze(),l=t(),a=!Ue(r.memoizedState,l);if(a&&(r.memoizedState=l,ge=!0),r=r.queue,eo(fc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,mr(9,dc.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(S(349));Wt&30||cc(n,t,l)}return l}function cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dc(e,t,n,r){t.value=n,t.getSnapshot=r,pc(t)&&mc(e)}function fc(e,t,n){return n(function(){pc(t)&&mc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function mc(e){var t=tt(e,1);t!==null&&Ae(t,e,1,-1)}function ds(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,V,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hc(){return ze().memoizedState}function Yr(e,t,n,r){var l=We();V.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var l=ze();r=r===void 0?null:r;var a=void 0;if(J!==null){var i=J.memoizedState;if(a=i.destroy,r!==null&&Xi(r,i.deps)){l.memoizedState=mr(t,n,a,r);return}}V.flags|=e,l.memoizedState=mr(1|t,n,a,r)}function fs(e,t){return Yr(8390656,8,e,t)}function eo(e,t){return Bl(2048,8,e,t)}function gc(e,t){return Bl(4,2,e,t)}function vc(e,t){return Bl(4,4,e,t)}function yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xc(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,yc.bind(null,t,e),n)}function to(){}function wc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sc(e,t,n){return Wt&21?(Ue(n,t)||(n=Pu(),V.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function jp(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{O=n,ma.transition=r}}function jc(){return ze().memoizedState}function Np(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nc(e))Ec(t,n);else if(n=ac(e,t,n,r),n!==null){var l=de();Ae(n,e,r,l),Cc(n,t,r)}}function Ep(e,t,n){var r=wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Ec(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(l.hasEagerState=!0,l.eagerState=s,Ue(s,i)){var u=t.interleaved;u===null?(l.next=l,Qi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ac(e,t,l,r),n!==null&&(l=de(),Ae(n,e,r,l),Cc(n,t,r))}}function Nc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ec(e,t){Gn=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}var wl={readContext:Me,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Cp={readContext:Me,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:fs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yr(4194308,4,yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Np.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ds,useDebugValue:to,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ds(!1),t=e[0];return e=jp.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=We();if(b){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));Wt&30||cc(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,fs(fc.bind(null,r,a,e),[e]),r.flags|=2048,mr(9,dc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=We(),t=ne.identifierPrefix;if(b){var n=Xe,r=Ye;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pp={readContext:Me,useCallback:wc,useContext:Me,useEffect:eo,useImperativeHandle:xc,useInsertionEffect:gc,useLayoutEffect:vc,useMemo:kc,useReducer:ha,useRef:hc,useState:function(){return ha(pr)},useDebugValue:to,useDeferredValue:function(e){var t=ze();return Sc(t,J.memoizedState,e)},useTransition:function(){var e=ha(pr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:uc,useId:jc,unstable_isNewReconciler:!1},_p={readContext:Me,useCallback:wc,useContext:Me,useEffect:eo,useImperativeHandle:xc,useInsertionEffect:gc,useLayoutEffect:vc,useMemo:kc,useReducer:ga,useRef:hc,useState:function(){return ga(pr)},useDebugValue:to,useDeferredValue:function(e){var t=ze();return J===null?t.memoizedState=e:Sc(t,J.memoizedState,e)},useTransition:function(){var e=ga(pr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:uc,useId:jc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=wt(e),a=Je(r,l);a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,l),t!==null&&(Ae(t,e,l,r),Kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=wt(e),a=Je(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,l),t!==null&&(Ae(t,e,l,r),Kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=wt(e),l=Je(n,r);l.tag=2,t!=null&&(l.callback=t),t=yt(e,l,r),t!==null&&(Ae(t,e,r,n),Kr(t,e,r))}};function ps(e,t,n,r,l,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(l,a):!0}function Pc(e,t,n){var r=!1,l=Nt,a=t.contextType;return typeof a=="object"&&a!==null?a=Me(a):(l=ye(t)?bt:ue.current,r=t.contextTypes,a=(r=r!=null)?wn(e,l):Nt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function ms(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function ni(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},qi(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Me(a):(a=ye(t)?bt:ue.current,l.context=wn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ti(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Fl.enqueueReplaceState(l,l.state,null),vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=tf(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function _c(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,pi=r),ri(e,t)},n}function Tc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ri(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ri(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function hs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Wp.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Lp=rt.ReactCurrentOwner,ge=!1;function ce(e,t,n,r){t.child=e===null?lc(t,null,n,r):Sn(t,e.child,n,r)}function ys(e,t,n,r,l){n=n.render;var a=t.ref;return gn(t,l),r=Ji(e,t,n,r,a,l),n=Zi(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,nt(e,t,l)):(b&&n&&Ui(t),t.flags|=1,ce(e,t,r,l),t.child)}function xs(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!uo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lc(e,t,a,r,l)):(e=el(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(i,r)&&e.ref===t.ref)return nt(e,t,l)}return t.flags|=1,e=kt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(ir(a,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,nt(e,t,l)}return li(e,t,n,r,l)}function Mc(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(dn,ke),ke|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(dn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(dn,ke),ke|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(dn,ke),ke|=r;return ce(e,t,l,n),t.child}function zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function li(e,t,n,r,l){var a=ye(n)?bt:ue.current;return a=wn(t,a),gn(t,l),n=Ji(e,t,n,r,a,l),r=Zi(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,nt(e,t,l)):(b&&r&&Ui(t),t.flags|=1,ce(e,t,n,l),t.child)}function ws(e,t,n,r,l){if(ye(n)){var a=!0;fl(t)}else a=!1;if(gn(t,l),t.stateNode===null)Xr(e,t),Pc(t,n,r),ni(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=ye(n)?bt:ue.current,c=wn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ms(t,i,r,c),st=!1;var h=t.memoizedState;i.state=h,vl(t,r,i,l),u=t.memoizedState,s!==r||h!==u||ve.current||st?(typeof g=="function"&&(ti(t,n,g,r),u=t.memoizedState),(s=st||ps(t,n,s,r,h,u,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ic(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),i.props=c,m=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=ye(n)?bt:ue.current,u=wn(t,u));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==u)&&ms(t,i,r,u),st=!1,h=t.memoizedState,i.state=h,vl(t,r,i,l);var x=t.memoizedState;s!==m||h!==x||ve.current||st?(typeof v=="function"&&(ti(t,n,v,r),x=t.memoizedState),(c=st||ps(t,n,c,r,h,x,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ai(e,t,n,r,a,l)}function ai(e,t,n,r,l,a){zc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&as(t,n,!1),nt(e,t,a);r=t.stateNode,Lp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Sn(t,e.child,null,a),t.child=Sn(t,null,s,a)):ce(e,t,s,a),t.memoizedState=r.state,l&&as(t,n,!0),t.child}function Ic(e){var t=e.stateNode;t.pendingContext?ls(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ls(e,t.context,!1),Ki(e,t.containerInfo)}function ks(e,t,n,r,l){return kn(),$i(l),t.flags|=256,ce(e,t,n,r),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0};function oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rc(e,t,n){var r=t.pendingProps,l=W.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(W,l&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Ul(i,r,0,null),e=Ut(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=oi(n),t.memoizedState=ii,e):no(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Mp(e,t,i,r,s,l,n);if(a){a=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?a=kt(s,a):(a=Ut(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?oi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=ii,r}return a=e.child,e=a.sibling,r=kt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function no(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&$i(r),Sn(t,e.child,null,n),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mp(e,t,n,r,l,a,i){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(S(422))),Ar(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),a=Ut(a,l,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Sn(t,e.child,null,i),t.child.memoizedState=oi(i),t.memoizedState=ii,a);if(!(t.mode&1))return Ar(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(S(419)),r=va(a,r,void 0),Ar(e,t,i,r)}if(s=(i&e.childLanes)!==0,ge||s){if(r=ne,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,tt(e,l),Ae(r,e,l,-1))}return so(),r=va(Error(S(421))),Ar(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Vp.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Se=vt(l.nextSibling),je=t,b=!0,Be=null,e!==null&&(Pe[_e++]=Ye,Pe[_e++]=Xe,Pe[_e++]=$t,Ye=e.id,Xe=e.overflow,$t=t),t=no(t,r.children),t.flags|=4096,t)}function Ss(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ei(e.return,t,n)}function ya(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function Oc(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ss(e,n,t);else if(e.tag===19)Ss(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ya(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ya(t,!0,n,null,a);break;case"together":ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zp(e,t,n){switch(t.tag){case 3:Ic(t),kn();break;case 5:oc(t);break;case 1:ye(t.type)&&fl(t);break;case 4:Ki(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;B(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Rc(e,t,n):(B(W,W.current&1),e=nt(e,t,n),e!==null?e.sibling:null);B(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Mc(e,t,n)}return nt(e,t,n)}var Bc,si,Fc,Dc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};si=function(){};Fc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Dt(Qe.current);var a=null;switch(n){case"input":l=La(e,l),r=La(e,r),a=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":l=Ia(e,l),r=Ia(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Oa(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ip(e,t,n){var r=t.pendingProps;switch(bi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&dl(),oe(t),null;case 3:return r=t.stateNode,jn(),A(ve),A(ue),Yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(gi(Be),Be=null))),si(e,t),oe(t),null;case 5:Gi(t);var l=Dt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Dt(Qe.current),Fr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ve]=t,r[ur]=a,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<Wn.length;l++)D(Wn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Mo(r,a),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},D("invalid",r);break;case"textarea":Io(r,a),D("invalid",r)}Oa(n,a),l=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),l=["children",""+s]):Zn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&D("scroll",r)}switch(n){case"input":_r(r),zo(r,a,!0);break;case"textarea":_r(r),Ro(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=cl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[ur]=r,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ba(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<Wn.length;l++)D(Wn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Mo(e,r),l=La(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":Io(e,r),l=Ia(e,r),D("invalid",e);break;default:l=r}Oa(n,l),s=l;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?hu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pu(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Zn.hasOwnProperty(a)?u!=null&&a==="onScroll"&&D("scroll",e):u!=null&&Ci(e,a,u,i))}switch(n){case"input":_r(e),zo(e,r,!1);break;case"textarea":_r(e),Ro(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?fn(e,!!r.multiple,a,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Dc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(dr.current),Dt(Qe.current),Fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(a=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if(A(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Se!==null&&t.mode&1&&!(t.flags&128))nc(),kn(),t.flags|=98560,a=!1;else if(a=Fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Ve]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),a=!1}else Be!==null&&(gi(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):so())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return jn(),si(e,t),e===null&&or(t.stateNode.containerInfo),oe(t),null;case 10:return Hi(t.type._context),oe(t),null;case 17:return ye(t.type)&&dl(),oe(t),null;case 19:if(A(W),a=t.memoizedState,a===null)return oe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Bn(a,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=yl(e),i!==null){for(t.flags|=128,Bn(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&G()>En&&(t.flags|=128,r=!0,Bn(a,!1),t.lanes=4194304)}else{if(!r)if(e=yl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!b)return oe(t),null}else 2*G()-a.renderingStartTime>En&&n!==1073741824&&(t.flags|=128,r=!0,Bn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=G(),t.sibling=null,n=W.current,B(W,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return oo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Rp(e,t){switch(bi(t),t.tag){case 1:return ye(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),A(ve),A(ue),Yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gi(t),null;case 13:if(A(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(W),null;case 4:return jn(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return oo(),null;case 24:return null;default:return null}}var Ur=!1,se=!1,Op=typeof WeakSet=="function"?WeakSet:Set,E=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ui(e,t,n){try{n()}catch(r){q(e,t,r)}}var js=!1;function Bp(e,t){if(Qa=ol,e=Wu(),Ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var v;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==a||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++c===l&&(s=i),h===a&&++g===r&&(u=i),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},ol=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,C=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Re(t.type,k),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=js,js=!1,x}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&ui(t,n,a)}l=l.next}while(l!==r)}}function Dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ci(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[ur],delete t[Ya],delete t[yp],delete t[xp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function Ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(di(e,t,n),e=e.sibling;e!==null;)di(e,t,n),e=e.sibling}function fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fi(e,t,n),e=e.sibling;e!==null;)fi(e,t,n),e=e.sibling}var re=null,Oe=!1;function it(e,t,n){for(n=n.child;n!==null;)bc(e,t,n),n=n.sibling}function bc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:se||cn(n,t);case 6:var r=re,l=Oe;re=null,it(e,t,n),re=r,Oe=l,re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?da(e.parentNode,n):e.nodeType===1&&da(e,n),lr(e)):da(re,n.stateNode));break;case 4:r=re,l=Oe,re=n.stateNode.containerInfo,Oe=!0,it(e,t,n),re=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&ui(n,t,i),l=l.next}while(l!==r)}it(e,t,n);break;case 1:if(!se&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,it(e,t,n),se=r):it(e,t,n);break;default:it(e,t,n)}}function Es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Op),t.forEach(function(r){var l=Hp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Oe=!1;break e;case 3:re=s.stateNode.containerInfo,Oe=!0;break e;case 4:re=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(re===null)throw Error(S(160));bc(a,i,l),re=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$c(t,e),t=t.sibling}function $c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),be(e),r&4){try{Yn(3,e,e.return),Dl(3,e)}catch(k){q(e,e.return,k)}try{Yn(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:Ie(t,e),be(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Ie(t,e),be(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var l=e.stateNode;try{er(l,"")}catch(k){q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&cu(l,a),Ba(s,i);var c=Ba(s,a);for(i=0;i<u.length;i+=2){var g=u[i],m=u[i+1];g==="style"?hu(l,m):g==="dangerouslySetInnerHTML"?pu(l,m):g==="children"?er(l,m):Ci(l,g,m,c)}switch(s){case"input":Ma(l,a);break;case"textarea":du(l,a);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?fn(l,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?fn(l,!!a.multiple,a.defaultValue,!0):fn(l,!!a.multiple,a.multiple?[]:"",!1))}l[ur]=a}catch(k){q(e,e.return,k)}}break;case 6:if(Ie(t,e),be(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(k){q(e,e.return,k)}}break;case 3:if(Ie(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:Ie(t,e),be(e);break;case 13:Ie(t,e),be(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(ao=G())),r&4&&Es(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||g,Ie(t,e),se=c):Ie(t,e),be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(m=E=g;E!==null;){switch(h=E,v=h.child,h.tag){case 0:case 11:case 14:case 15:Yn(4,h,h.return);break;case 1:cn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){q(r,n,k)}}break;case 5:cn(h,h.return);break;case 22:if(h.memoizedState!==null){Ps(m);continue}}v!==null?(v.return=h,E=v):Ps(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,c?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=mu("display",i))}catch(k){q(e,e.return,k)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){q(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(t,e),be(e),r&4&&Es(e);break;case 21:break;default:Ie(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(er(l,""),r.flags&=-33);var a=Ns(e);fi(e,a,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ns(e);di(e,s,i);break;default:throw Error(S(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fp(e,t,n){E=e,Wc(e)}function Wc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,a=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Ur;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=Ur;var c=se;if(Ur=i,(se=u)&&!c)for(E=l;E!==null;)i=E,u=i.child,i.tag===22&&i.memoizedState!==null?_s(l):u!==null?(u.return=i,E=u):_s(l);for(;a!==null;)E=a,Wc(a),a=a.sibling;E=l,Ur=s,se=c}Cs(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,E=a):Cs(e)}}function Cs(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cs(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cs(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}se||t.flags&512&&ci(t)}catch(h){q(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ps(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function _s(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Dl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var a=t.return;try{ci(t)}catch(u){q(t,a,u)}break;case 5:var i=t.return;try{ci(t)}catch(u){q(t,i,u)}}}catch(u){q(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Dp=Math.ceil,kl=rt.ReactCurrentDispatcher,ro=rt.ReactCurrentOwner,Le=rt.ReactCurrentBatchConfig,R=0,ne=null,Y=null,le=0,ke=0,dn=Ct(0),Z=0,hr=null,Vt=0,Al=0,lo=0,Xn=null,he=null,ao=0,En=1/0,Ke=null,Sl=!1,pi=null,xt=null,br=!1,ft=null,jl=0,Jn=0,mi=null,Jr=-1,Zr=0;function de(){return R&6?G():Jr!==-1?Jr:Jr=G()}function wt(e){return e.mode&1?R&2&&le!==0?le&-le:kp.transition!==null?(Zr===0&&(Zr=Pu()),Zr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function Ae(e,t,n,r){if(50<Jn)throw Jn=0,mi=null,Error(S(185));yr(e,n,r),(!(R&2)||e!==ne)&&(e===ne&&(!(R&2)&&(Al|=n),Z===4&&ct(e,le)),xe(e,r),n===1&&R===0&&!(t.mode&1)&&(En=G()+500,Ol&&Pt()))}function xe(e,t){var n=e.callbackNode;kf(e,t);var r=il(e,e===ne?le:0);if(r===0)n!==null&&Fo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fo(n),t===1)e.tag===0?wp(Ts.bind(null,e)):Zu(Ts.bind(null,e)),gp(function(){!(R&6)&&Pt()}),n=null;else{switch(_u(r)){case 1:n=Mi;break;case 4:n=Eu;break;case 16:n=al;break;case 536870912:n=Cu;break;default:n=al}n=Xc(n,Vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vc(e,t){if(Jr=-1,Zr=0,R&6)throw Error(S(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=il(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var l=R;R|=2;var a=Qc();(ne!==e||le!==t)&&(Ke=null,En=G()+500,At(e,t));do try{bp();break}catch(s){Hc(e,s)}while(!0);Vi(),kl.current=a,R=l,Y!==null?t=0:(ne=null,le=0,t=Z)}if(t!==0){if(t===2&&(l=ba(e),l!==0&&(r=l,t=hi(e,l))),t===1)throw n=hr,At(e,0),ct(e,r),xe(e,G()),n;if(t===6)ct(e,r);else{if(l=e.current.alternate,!(r&30)&&!Ap(l)&&(t=Nl(e,r),t===2&&(a=ba(e),a!==0&&(r=a,t=hi(e,a))),t===1))throw n=hr,At(e,0),ct(e,r),xe(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Rt(e,he,Ke);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=ao+500-G(),10<t)){if(il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ga(Rt.bind(null,e,he,Ke),t);break}Rt(e,he,Ke);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-De(r);a=1<<i,i=t[i],i>l&&(l=i),r&=~a}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dp(r/1960))-r,10<r){e.timeoutHandle=Ga(Rt.bind(null,e,he,Ke),r);break}Rt(e,he,Ke);break;case 5:Rt(e,he,Ke);break;default:throw Error(S(329))}}}return xe(e,G()),e.callbackNode===n?Vc.bind(null,e):null}function hi(e,t){var n=Xn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=he,he=n,t!==null&&gi(t)),e}function gi(e){he===null?he=e:he.push.apply(he,e)}function Ap(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!Ue(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~lo,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ts(e){if(R&6)throw Error(S(327));vn();var t=il(e,0);if(!(t&1))return xe(e,G()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=ba(e);r!==0&&(t=r,n=hi(e,r))}if(n===1)throw n=hr,At(e,0),ct(e,t),xe(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,he,Ke),xe(e,G()),null}function io(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(En=G()+500,Ol&&Pt())}}function Ht(e){ft!==null&&ft.tag===0&&!(R&6)&&vn();var t=R;R|=1;var n=Le.transition,r=O;try{if(Le.transition=null,O=1,e)return e()}finally{O=r,Le.transition=n,R=t,!(R&6)&&Pt()}}function oo(){ke=dn.current,A(dn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(bi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:jn(),A(ve),A(ue),Yi();break;case 5:Gi(r);break;case 4:jn();break;case 13:A(W);break;case 19:A(W);break;case 10:Hi(r.type._context);break;case 22:case 23:oo()}n=n.return}if(ne=e,Y=e=kt(e.current,null),le=ke=t,Z=0,hr=null,lo=Al=Vt=0,he=Xn=null,Ft!==null){for(t=0;t<Ft.length;t++)if(n=Ft[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=l,r.next=i}n.pending=r}Ft=null}return e}function Hc(e,t){do{var n=Y;try{if(Vi(),Gr.current=wl,xl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}xl=!1}if(Wt=0,te=J=V=null,Gn=!1,fr=0,ro.current=null,n===null||n.return===null){Z=1,hr=t,Y=null;break}e:{var a=e,i=n.return,s=n,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=gs(i);if(v!==null){v.flags&=-257,vs(v,i,s,a,t),v.mode&1&&hs(a,c,t),t=v,u=c;var x=t.updateQueue;if(x===null){var k=new Set;k.add(u),t.updateQueue=k}else x.add(u);break e}else{if(!(t&1)){hs(a,c,t),so();break e}u=Error(S(426))}}else if(b&&s.mode&1){var C=gs(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),vs(C,i,s,a,t),$i(Nn(u,s));break e}}a=u=Nn(u,s),Z!==4&&(Z=2),Xn===null?Xn=[a]:Xn.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=_c(a,u,t);us(a,f);break e;case 1:s=u;var d=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Tc(a,s,t);us(a,w);break e}}a=a.return}while(a!==null)}Kc(n)}catch(j){t=j,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Qc(){var e=kl.current;return kl.current=wl,e===null?wl:e}function so(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(Vt&268435455)&&!(Al&268435455)||ct(ne,le)}function Nl(e,t){var n=R;R|=2;var r=Qc();(ne!==e||le!==t)&&(Ke=null,At(e,t));do try{Up();break}catch(l){Hc(e,l)}while(!0);if(Vi(),R=n,kl.current=r,Y!==null)throw Error(S(261));return ne=null,le=0,Z}function Up(){for(;Y!==null;)qc(Y)}function bp(){for(;Y!==null&&!ff();)qc(Y)}function qc(e){var t=Yc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?Kc(e):Y=t,ro.current=null}function Kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=Ip(n,t,ke),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Rt(e,t,n){var r=O,l=Le.transition;try{Le.transition=null,O=1,$p(e,t,n,r)}finally{Le.transition=l,O=r}return null}function $p(e,t,n,r){do vn();while(ft!==null);if(R&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Sf(e,a),e===ne&&(Y=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||br||(br=!0,Xc(al,function(){return vn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Le.transition,Le.transition=null;var i=O;O=1;var s=R;R|=4,ro.current=null,Bp(e,n),$c(n,e),sp(qa),ol=!!Qa,qa=Qa=null,e.current=n,Fp(n),pf(),R=s,O=i,Le.transition=a}else e.current=n;if(br&&(br=!1,ft=e,jl=l),a=e.pendingLanes,a===0&&(xt=null),gf(n.stateNode),xe(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Sl)throw Sl=!1,e=pi,pi=null,e;return jl&1&&e.tag!==0&&vn(),a=e.pendingLanes,a&1?e===mi?Jn++:(Jn=0,mi=e):Jn=0,Pt(),null}function vn(){if(ft!==null){var e=_u(jl),t=Le.transition,n=O;try{if(Le.transition=null,O=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,jl=0,R&6)throw Error(S(331));var l=R;for(R|=4,E=e.current;E!==null;){var a=E,i=a.child;if(E.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(E=c;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:Yn(8,g,a)}var m=g.child;if(m!==null)m.return=g,E=m;else for(;E!==null;){g=E;var h=g.sibling,v=g.return;if(Ac(g),g===c){E=null;break}if(h!==null){h.return=v,E=h;break}E=v}}}var x=a.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}E=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,E=i;else e:for(;E!==null;){if(a=E,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Yn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,E=f;break e}E=a.return}}var d=e.current;for(E=d;E!==null;){i=E;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,E=p;else e:for(i=d;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Dl(9,s)}}catch(j){q(s,s.return,j)}if(s===i){E=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,E=w;break e}E=s.return}}if(R=l,Pt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{O=n,Le.transition=t}}return!1}function Ls(e,t,n){t=Nn(n,t),t=_c(e,t,1),e=yt(e,t,1),t=de(),e!==null&&(yr(e,1,t),xe(e,t))}function q(e,t,n){if(e.tag===3)Ls(e,e,n);else for(;t!==null;){if(t.tag===3){Ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Nn(n,e),e=Tc(t,e,1),t=yt(t,e,1),e=de(),t!==null&&(yr(t,1,e),xe(t,e));break}}t=t.return}}function Wp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(Z===4||Z===3&&(le&130023424)===le&&500>G()-ao?At(e,0):lo|=n),xe(e,t)}function Gc(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=de();e=tt(e,t),e!==null&&(yr(e,t,n),xe(e,n))}function Vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gc(e,n)}function Hp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Gc(e,n)}var Yc;Yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,zp(e,t,n);ge=!!(e.flags&131072)}else ge=!1,b&&t.flags&1048576&&ec(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xr(e,t),e=t.pendingProps;var l=wn(t,ue.current);gn(t,n),l=Ji(null,t,r,e,l,n);var a=Zi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(a=!0,fl(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qi(t),l.updater=Fl,t.stateNode=l,l._reactInternals=t,ni(t,r,e,n),t=ai(null,t,r,!0,a,n)):(t.tag=0,b&&a&&Ui(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=qp(r),e=Re(r,e),l){case 0:t=li(null,t,r,e,n);break e;case 1:t=ws(null,t,r,e,n);break e;case 11:t=ys(null,t,r,e,n);break e;case 14:t=xs(null,t,r,Re(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),li(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),ws(e,t,r,l,n);case 3:e:{if(Ic(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,l=a.element,ic(e,t),vl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Nn(Error(S(423)),t),t=ks(e,t,r,n,l);break e}else if(r!==l){l=Nn(Error(S(424)),t),t=ks(e,t,r,n,l);break e}else for(Se=vt(t.stateNode.containerInfo.firstChild),je=t,b=!0,Be=null,n=lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===l){t=nt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return oc(t),e===null&&Za(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,i=l.children,Ka(r,l)?i=null:a!==null&&Ka(r,a)&&(t.flags|=32),zc(e,t),ce(e,t,i,n),t.child;case 6:return e===null&&Za(t),null;case 13:return Rc(e,t,n);case 4:return Ki(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),ys(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,i=l.value,B(hl,r._currentValue),r._currentValue=i,a!==null)if(Ue(a.value,i)){if(a.children===l.children&&!ve.current){t=nt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=Je(-1,n&-n),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),ei(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ei(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,gn(t,n),l=Me(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),xs(e,t,r,l,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Xr(e,t),t.tag=1,ye(r)?(e=!0,fl(t)):e=!1,gn(t,n),Pc(t,r,l),ni(t,r,l,n),ai(null,t,r,!0,e,n);case 19:return Oc(e,t,n);case 22:return Mc(e,t,n)}throw Error(S(156,t.tag))};function Xc(e,t){return Nu(e,t)}function Qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Qp(e,t,n,r)}function uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qp(e){if(typeof e=="function")return uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_i)return 11;if(e===Ti)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,l,a){var i=2;if(r=e,typeof e=="function")uo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case en:return Ut(n.children,l,a,t);case Pi:i=8,l|=8;break;case Ca:return e=Te(12,n,t,l|2),e.elementType=Ca,e.lanes=a,e;case Pa:return e=Te(13,n,t,l),e.elementType=Pa,e.lanes=a,e;case _a:return e=Te(19,n,t,l),e.elementType=_a,e.lanes=a,e;case ou:return Ul(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:i=10;break e;case iu:i=9;break e;case _i:i=11;break e;case Ti:i=14;break e;case ot:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(i,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function Ut(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Te(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function xa(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function co(e,t,n,r,l,a,i,s,u){return e=new Kp(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Te(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qi(a),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jc(e){if(!e)return Nt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return Ju(e,n,t)}return t}function Zc(e,t,n,r,l,a,i,s,u){return e=co(n,r,!0,e,l,a,i,s,u),e.context=Jc(null),n=e.current,r=de(),l=wt(n),a=Je(r,l),a.callback=t??null,yt(n,a,l),e.current.lanes=l,yr(e,l,r),xe(e,r),e}function bl(e,t,n,r){var l=t.current,a=de(),i=wt(l);return n=Jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(l,t,i),e!==null&&(Ae(e,l,i,a),Kr(e,l,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ms(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fo(e,t){Ms(e,t),(e=e.alternate)&&Ms(e,t)}function Yp(){return null}var ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function po(e){this._internalRoot=e}$l.prototype.render=po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));bl(e,t,null,null)};$l.prototype.unmount=po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){bl(null,e,null,null)}),t[et]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Iu(e)}};function mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zs(){}function Xp(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var c=El(i);a.call(c)}}var i=Zc(t,r,e,0,null,!1,!1,"",zs);return e._reactRootContainer=i,e[et]=i.current,or(e.nodeType===8?e.parentNode:e),Ht(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=El(u);s.call(c)}}var u=co(e,0,!1,null,null,!1,!1,"",zs);return e._reactRootContainer=u,e[et]=u.current,or(e.nodeType===8?e.parentNode:e),Ht(function(){bl(t,u,n,r)}),u}function Vl(e,t,n,r,l){var a=n._reactRootContainer;if(a){var i=a;if(typeof l=="function"){var s=l;l=function(){var u=El(i);s.call(u)}}bl(t,i,e,l)}else i=Xp(n,t,e,l,r);return El(i)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(zi(t,n|1),xe(t,G()),!(R&6)&&(En=G()+500,Pt()))}break;case 13:Ht(function(){var r=tt(e,1);if(r!==null){var l=de();Ae(r,e,1,l)}}),fo(e,1)}};Ii=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=de();Ae(t,e,134217728,n)}fo(e,134217728)}};Lu=function(e){if(e.tag===13){var t=wt(e),n=tt(e,t);if(n!==null){var r=de();Ae(n,e,t,r)}fo(e,t)}};Mu=function(){return O};zu=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Da=function(e,t,n){switch(t){case"input":if(Ma(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Rl(r);if(!l)throw Error(S(90));uu(r),Ma(r,l)}}}break;case"textarea":du(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};yu=io;xu=Ht;var Jp={usingClientEntryPoint:!1,Events:[wr,ln,Rl,gu,vu,io]},Fn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{Ll=$r.inject(Zp),He=$r}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mo(t))throw Error(S(200));return Gp(e,t,null,n)};Ee.createRoot=function(e,t){if(!mo(e))throw Error(S(299));var n=!1,r="",l=ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=co(e,1,!1,null,null,n,!1,r,l),e[et]=t.current,or(e.nodeType===8?e.parentNode:e),new po(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Su(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ht(e)};Ee.hydrate=function(e,t,n){if(!Wl(t))throw Error(S(200));return Vl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!mo(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",i=ed;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Zc(t,null,e,1,n??null,l,!1,a,i),e[et]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)};Ee.render=function(e,t,n){if(!Wl(t))throw Error(S(200));return Vl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(S(40));return e._reactRootContainer?(Ht(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Ee.unstable_batchedUpdates=io;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Vl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(td)}catch(e){console.error(e)}}td(),tu.exports=Ee;var em=tu.exports,Is=em;Na.createRoot=Is.createRoot,Na.hydrateRoot=Is.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cl.apply(null,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));function tm(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:n,v5Compat:r=!1}=e,l;l=t.map((v,x)=>g(v,typeof v=="string"?null:v.state,x===0?"default":void 0));let a=u(n??l.length-1),i=pt.Pop,s=null;function u(v){return Math.min(Math.max(v,0),l.length-1)}function c(){return l[a]}function g(v,x,k){x===void 0&&(x=null);let C=rm(l?c().pathname:"/",v,x,k);return ho(C.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(v)),C}function m(v){return typeof v=="string"?v:vi(v)}return{get index(){return a},get action(){return i},get location(){return c()},createHref:m,createURL(v){return new URL(m(v),"http://localhost")},encodeLocation(v){let x=typeof v=="string"?Kt(v):v;return{pathname:x.pathname||"",search:x.search||"",hash:x.hash||""}},push(v,x){i=pt.Push;let k=g(v,x);a+=1,l.splice(a,l.length,k),r&&s&&s({action:i,location:k,delta:1})},replace(v,x){i=pt.Replace;let k=g(v,x);l[a]=k,r&&s&&s({action:i,location:k,delta:0})},go(v){i=pt.Pop;let x=u(a+v),k=l[x];a=x,s&&s({action:i,location:k,delta:v})},listen(v){return s=v,()=>{s=null}}}}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ho(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nm(){return Math.random().toString(36).substr(2,8)}function rm(e,t,n,r){return n===void 0&&(n=null),Cl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kt(t):t,{state:n,key:t&&t.key||r||nm()})}function vi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Rs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rs||(Rs={}));function lm(e,t,n){return n===void 0&&(n="/"),am(e,t,n)}function am(e,t,n,r){let l=typeof t=="string"?Kt(t):t,a=go(l.pathname||"/",n);if(a==null)return null;let i=nd(e);im(i);let s=null,u=ym(a);for(let c=0;s==null&&c<i.length;++c)s=hm(i[c],u);return s}function nd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(a,i,s)=>{let u={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=St([r,u.relativePath]),g=n.concat(u);a.children&&a.children.length>0&&(X(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nd(a.children,t,g,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:pm(c,a.index),routesMeta:g})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))l(a,i);else for(let u of rd(a.path))l(a,i,u)}),t}function rd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return l?[a,""]:[a];let i=rd(r.join("/")),s=[];return s.push(...i.map(u=>u===""?a:[a,u].join("/"))),l&&s.push(...i),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function im(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const om=/^:[\w-]+$/,sm=3,um=2,cm=1,dm=10,fm=-2,Os=e=>e==="*";function pm(e,t){let n=e.split("/"),r=n.length;return n.some(Os)&&(r+=fm),t&&(r+=um),n.filter(l=>!Os(l)).reduce((l,a)=>l+(om.test(a)?sm:a===""?cm:dm),r)}function mm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function hm(e,t,n){let{routesMeta:r}=e,l={},a="/",i=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",m=gm({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),h=u.route;if(!m)return null;Object.assign(l,m.params),i.push({params:l,pathname:St([a,m.pathname]),pathnameBase:km(St([a,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(a=St([a,m.pathnameBase]))}return i}function gm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vm(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let a=l[0],i=a.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,g,m)=>{let{paramName:h,isOptional:v}=g;if(h==="*"){let k=s[m]||"";i=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const x=s[m];return v&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:i,pattern:e}}function vm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ho(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ym(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ho(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function go(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Kt(e):e,a;return n?(n=ld(n),n.startsWith("/")?a=Bs(n.substring(1),"/"):a=Bs(n,t)):a=t,{pathname:a,search:Sm(r),hash:jm(l)}}function Bs(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ka(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vo(e,t){let n=wm(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yo(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Kt(e):(l=Cl({},e),X(!l.pathname||!l.pathname.includes("?"),ka("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),ka("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),ka("#","search","hash",l)));let a=e===""||l.pathname==="",i=a?"/":l.pathname,s;if(i==null)s=n;else{let m=t.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),m-=1;l.pathname=h.join("/")}s=m>=0?t[m]:"/"}let u=xm(l,s),c=i&&i!=="/"&&i.endsWith("/"),g=(a||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const ld=e=>e.replace(/\/\/+/g,"/"),St=e=>ld(e.join("/")),km=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Nm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ad=["post","put","patch","delete"];new Set(ad);const Em=["get",...ad];new Set(Em);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(null,arguments)}const xo=y.createContext(null),Cm=y.createContext(null),_t=y.createContext(null),Hl=y.createContext(null),Tt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),id=y.createContext(null);function Pm(e,t){let{relative:n}=t===void 0?{}:t;Tn()||X(!1);let{basename:r,navigator:l}=y.useContext(_t),{hash:a,pathname:i,search:s}=sd(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:St([r,i])),l.createHref({pathname:u,search:s,hash:a})}function Tn(){return y.useContext(Hl)!=null}function lt(){return Tn()||X(!1),y.useContext(Hl).location}function od(e){y.useContext(_t).static||y.useLayoutEffect(e)}function Gt(){let{isDataRoute:e}=y.useContext(Tt);return e?Um():_m()}function _m(){Tn()||X(!1);let e=y.useContext(xo),{basename:t,future:n,navigator:r}=y.useContext(_t),{matches:l}=y.useContext(Tt),{pathname:a}=lt(),i=JSON.stringify(vo(l,n.v7_relativeSplatPath)),s=y.useRef(!1);return od(()=>{s.current=!0}),y.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=yo(c,JSON.parse(i),a,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:St([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,i,a,e])}function sd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(_t),{matches:l}=y.useContext(Tt),{pathname:a}=lt(),i=JSON.stringify(vo(l,r.v7_relativeSplatPath));return y.useMemo(()=>yo(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function Tm(e,t){return Lm(e,t)}function Lm(e,t,n,r){Tn()||X(!1);let{navigator:l}=y.useContext(_t),{matches:a}=y.useContext(Tt),i=a[a.length-1],s=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let c=lt(),g;if(t){var m;let C=typeof t=="string"?Kt(t):t;u==="/"||(m=C.pathname)!=null&&m.startsWith(u)||X(!1),g=C}else g=c;let h=g.pathname||"/",v=h;if(u!=="/"){let C=u.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=lm(e,{pathname:v}),k=Om(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:St([u,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:St([u,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,n,r);return t&&k?y.createElement(Hl.Provider,{value:{location:gr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:pt.Pop}},k):k}function Mm(){let e=Am(),t=Nm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:l},n):null,null)}const zm=y.createElement(Mm,null);class Im extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Tt.Provider,{value:this.props.routeContext},y.createElement(id.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rm(e){let{routeContext:t,match:n,children:r}=e,l=y.useContext(xo);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Tt.Provider,{value:t},r)}function Om(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let g=i.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);g>=0||X(!1),i=i.slice(0,Math.min(i.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<i.length;g++){let m=i[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:h,errors:v}=n,x=m.route.loader&&h[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((g,m,h)=>{let v,x=!1,k=null,C=null;n&&(v=s&&m.route.id?s[m.route.id]:void 0,k=m.route.errorElement||zm,u&&(c<0&&h===0?(bm("route-fallback"),x=!0,C=null):c===h&&(x=!0,C=m.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,h+1)),d=()=>{let p;return v?p=k:x?p=C:m.route.Component?p=y.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,y.createElement(Rm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?y.createElement(Im,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var ud=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ud||{}),cd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cd||{});function Bm(e){let t=y.useContext(xo);return t||X(!1),t}function Fm(e){let t=y.useContext(Cm);return t||X(!1),t}function Dm(e){let t=y.useContext(Tt);return t||X(!1),t}function dd(e){let t=Dm(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Am(){var e;let t=y.useContext(id),n=Fm(),r=dd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Um(){let{router:e}=Bm(ud.UseNavigateStable),t=dd(cd.UseNavigateStable),n=y.useRef(!1);return od(()=>{n.current=!0}),y.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,gr({fromRouteId:t},a)))},[e,t])}const Fs={};function bm(e,t,n){Fs[e]||(Fs[e]=!0)}function $m(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}const Wm="startTransition",Ds=$d[Wm];function Vm(e){let{basename:t,children:n,initialEntries:r,initialIndex:l,future:a}=e,i=y.useRef();i.current==null&&(i.current=tm({initialEntries:r,initialIndex:l,v5Compat:!0}));let s=i.current,[u,c]=y.useState({action:s.action,location:s.location}),{v7_startTransition:g}=a||{},m=y.useCallback(h=>{g&&Ds?Ds(()=>c(h)):c(h)},[c,g]);return y.useLayoutEffect(()=>s.listen(m),[s,m]),y.useEffect(()=>$m(a),[a]),y.createElement(Qm,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:a})}function Hm(e){let{to:t,replace:n,state:r,relative:l}=e;Tn()||X(!1);let{future:a,static:i}=y.useContext(_t),{matches:s}=y.useContext(Tt),{pathname:u}=lt(),c=Gt(),g=yo(t,vo(s,a.v7_relativeSplatPath),u,l==="path"),m=JSON.stringify(g);return y.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:l}),[c,m,l,n,r]),null}function Ot(e){X(!1)}function Qm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=pt.Pop,navigator:a,static:i=!1,future:s}=e;Tn()&&X(!1);let u=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:u,navigator:a,static:i,future:gr({v7_relativeSplatPath:!1},s)}),[u,s,a,i]);typeof r=="string"&&(r=Kt(r));let{pathname:g="/",search:m="",hash:h="",state:v=null,key:x="default"}=r,k=y.useMemo(()=>{let C=go(g,u);return C==null?null:{location:{pathname:C,search:m,hash:h,state:v,key:x},navigationType:l}},[u,g,m,h,v,x,l]);return k==null?null:y.createElement(_t.Provider,{value:c},y.createElement(Hl.Provider,{children:n,value:k}))}function qm(e){let{children:t,location:n}=e;return Tm(yi(t),n)}new Promise(()=>{});function yi(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,l)=>{if(!y.isValidElement(r))return;let a=[...t,l];if(r.type===y.Fragment){n.push.apply(n,yi(r.props.children,a));return}r.type!==Ot&&X(!1),!r.props.index||!r.props.children||X(!1);let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=yi(r.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(null,arguments)}function Km(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Gm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ym(e,t){return e.button===0&&(!t||t==="_self")&&!Gm(e)}const Xm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jm="6";try{window.__reactRouterVersion=Jm}catch{}const Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=y.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:a,replace:i,state:s,target:u,to:c,preventScrollReset:g,viewTransition:m}=t,h=Km(t,Xm),{basename:v}=y.useContext(_t),x,k=!1;if(typeof c=="string"&&eh.test(c)&&(x=c,Zm))try{let p=new URL(window.location.href),w=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=go(w.pathname,v);w.origin===p.origin&&j!=null?c=j+w.search+w.hash:k=!0}catch{}let C=Pm(c,{relative:l}),f=th(c,{replace:i,state:s,target:u,preventScrollReset:g,relative:l,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return y.createElement("a",xi({},h,{href:x||C,onClick:k||a?r:d,ref:n,target:u}))});var As;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(As||(As={}));var Us;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Us||(Us={}));function th(e,t){let{target:n,replace:r,state:l,preventScrollReset:a,relative:i,viewTransition:s}=t===void 0?{}:t,u=Gt(),c=lt(),g=sd(e,{relative:i});return y.useCallback(m=>{if(Ym(m,n)){m.preventDefault();let h=r!==void 0?r:vi(c)===vi(g);u(e,{replace:h,state:l,preventScrollReset:a,relative:i,viewTransition:s})}},[c,u,g,r,l,n,e,a,i,s])}/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fd=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:a,iconNode:i,...s},u)=>y.createElement("svg",{ref:u,...rh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:fd("lucide",l),...s},[...i.map(([c,g])=>y.createElement(c,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,t)=>{const n=y.forwardRef(({className:r,...l},a)=>y.createElement(lh,{ref:a,iconNode:t,className:fd(`lucide-${nh(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=$("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=$("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=$("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=$("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=$("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=$("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=$("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=$("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=$("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=$("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=$("MonitorPlay",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=$("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=$("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=$("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=$("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=$("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = $("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function hd({ size: e = 32, onDark: t = !1 }) {
  const n = t ? "#F7F7FB" : "#3F3D99",
    r = t ? "#18183A" : "#F7F7FB";
  return o.jsxs("svg", {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    "aria-hidden": "true",
    children: [
      o.jsx("g", {
        fill: n,
        children: [0, 60, 120, 180, 240, 300].map((l) =>
          o.jsx(
            "ellipse",
            {
              cx: "32",
              cy: "16",
              rx: "8",
              ry: "13",
              transform: `rotate(${l} 32 32)`,
            },
            l,
          ),
        ),
      }),
      o.jsx("circle", {
        cx: "32",
        cy: "32",
        r: "10",
        fill: "#F5C443",
        stroke: r,
        strokeWidth: "3",
      }),
    ],
  });
}
function Ql({
  size: e = 32,
  onDark: t = !1,
  withWordmark: n = !0,
  className: r = "",
}) {
  return o.jsxs("span", {
    className: `inline-flex items-center gap-2 ${r}`,
    children: [
      o.jsx(hd, { size: e, onDark: t }),
      n &&
        o.jsx("span", {
          className: `mb-wordmark font-heading text-[28px] font-bold leading-9 tracking-tight ${t ? "text-bg-light" : "text-ink"}`,
          children: "mindbloom",
        }),
    ],
  });
}
const Q = {
    get(e, t) {
      try {
        const n = window.localStorage.getItem(e);
        return n ? JSON.parse(n) : t;
      } catch {
        return t;
      }
    },
    set(e, t) {
      try {
        window.localStorage.setItem(e, JSON.stringify(t));
      } catch {}
    },
    remove(e) {
      try {
        window.localStorage.removeItem(e);
      } catch {}
    },
  },
  Ch = {
    langName: "English",
    meta: {
      title: "MindBloom — Study, focus and friends, in one place",
      description:
        "MindBloom helps children aged 6 to 18 in Barcelona who learn differently, with study, focus and friends in one app and one learning centre.",
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      product: "Product",
      whyUs: "Why us",
      contact: "Contact",
      join: "Join",
      signIn: "Sign in",
      account: "My account",
      present: "Present",
      menu: "Menu",
      language: "Language",
    },
    hero: {
      tags: ["Ages 6 to 18", "ADHD, dyslexia, autism and more", "Barcelona"],
      title: "Study, focus and friends, in one place.",
      subtitle:
        "MindBloom brings study help, focus and time with other kids together, in one app and one learning centre in Barcelona.",
      ctaProduct: "See the product",
      ctaWaitlist: "Join the waitlist",
      ctaContact: "Get in touch",
      quoteTranslation: "Homework afternoons never end.",
      quoteSource:
        "Mother of an 8-year-old, quoted by a school counsellor · Infosal, 2016",
    },
    photos: {
      hero: "Two children doing homework together at a wooden table at home.",
      study: "A teenager reads a textbook in a bright classroom.",
      focus:
        "A child concentrates on writing in a notebook, with a clock on the table.",
      friends: "Three girls sit together reading one book.",
      space:
        "Illustrative photo of an empty study room with tables and daylight. This is not the MindBloom centre.",
      spaceCaption:
        "Illustrative image. The Barcelona centre is not open yet.",
    },
    problem: {
      label: "The problem",
      title: "Help comes in pieces. Parents hold them together.",
      body: "Families pay for a psychologist, a tutor, maybe an app, and homework still takes all afternoon. Each kind of help covers one piece, and parents are the ones holding it all together.",
      stats: [
        {
          value: "1.26M",
          label: "students in Spain needed extra support at school in 2024-25",
        },
        {
          value: "€700",
          label:
            "One Barcelona family spends this much each month on private help.",
        },
        {
          value: "6 months",
          label:
            "Waiting time a Barcelona early-care centre quotes to families.",
        },
      ],
      quoteTranslation:
        "My daughter needs a speech therapist, an occupational therapist and a psychologist, and nobody helps me!",
      quoteSource: "Inma Caballero, mother of Vega, Barcelona · betevé, 2021",
      sources:
        "Sources: Spanish Ministry of Education, ACNEAE 2024-25 · betevé, 10 Jun 2021",
    },
    solution: {
      label: "The solution",
      title: "One place for study, focus and friends",
      body: "MindBloom is for children aged 6 to 18 who think and learn differently. One app between visits, and one learning centre in Barcelona.",
      cards: [
        {
          title: "Study",
          body: "Help with real schoolwork: keeping it together and remembering what they learn.",
        },
        {
          title: "Focus",
          body: "Focus sessions with planned breaks, so homework time is calmer and shorter.",
        },
        {
          title: "Friends",
          body: "Time with other kids who learn like they do, at the Barcelona centre.",
        },
      ],
    },
    product: {
      label: "Product",
      title: "What we are building",
      tag: "Prototype",
      body: "Progress at home and at the centre is linked, so each child's plan follows them everywhere.",
      mockLabel: "Example screens — concept",
      tabs: ["Focus Mode", "My path", "Parent view"],
      focus: {
        timer: "25:00",
        paused: "Distracting apps paused",
        start: "Start focus",
        next: "Next break in 25 min",
      },
      path: {
        today: "Today's goals",
        goals: [
          "Read chapter 3 (15 min)",
          "Maths: 10 fractions",
          "Pack bag for tomorrow",
        ],
        progress: "This week",
        home: "Home",
        centre: "Centre",
      },
      parent: {
        week: "Lucas's week",
        sessions: "4 of 5 focus sessions done",
        next: "Next centre session",
        nextWhen: "Thursday, 17:00 · Small group",
        message: "Message from Laura (educator)",
        messageText:
          "Great work on fractions today. We'll practise again on Thursday.",
      },
      appTitle: "The app",
      app: [
        [
          "Focus Mode",
          "Pauses distracting apps during focus sessions, with planned breaks.",
        ],
        [
          "A personal path",
          "Goals and a progression that link learning at home with the centre.",
        ],
        [
          "Parent and educator view",
          "Follow progress and coordinate the learning plan in one place.",
        ],
      ],
      centreTitle: "The Barcelona centre",
      centre: [
        [
          "Sessions and small groups",
          "Practical exercises with qualified education professionals.",
        ],
        ["Quiet learning spaces", "A calm, flexible place to study."],
        [
          "One shared learning plan",
          "Educators update each child's plan after every visit.",
        ],
      ],
      pause: "Pause slideshow",
      play: "Play slideshow",
    },
    gap: {
      label: "Why us",
      title: "Others solve one piece",
      rows: [
        "Attention training",
        "Reading & writing",
        "Diagnosis & therapy",
        "Schoolwork help",
        "Friends & social",
        "App + physical centre",
      ],
      cols: ["Sincrolab", "Dytective", "Private clinics", "MindBloom"],
      yes: "Yes",
      no: "No",
      planned: "Planned",
      footnote:
        "Ticks are what each organisation offers today, from their public websites in November 2026. MindBloom is not open yet: “Planned” is what we intend to offer, not a service you can use now. Diagnosis and therapy are not part of MindBloom.",
    },
    model: {
      label: "Business model",
      title: "How MindBloom will earn",
      cards: [
        {
          title: "Families",
          body: "App subscription and learning-centre membership.",
        },
        {
          title: "Schools and institutions",
          body: "Licences for schools and education organisations.",
        },
        {
          title: "One-to-one sessions",
          body: "Individual sessions at the Barcelona centre.",
        },
      ],
      note: "Prices to be set with the first families.",
    },
    roadmap: {
      label: "Roadmap",
      title: "Where we are",
      steps: [
        { when: "Now", what: "Research and parent interviews" },
        { when: "Next", what: "Waitlist and first Barcelona families" },
        { when: "Then", what: "App pilot and learning-centre opening" },
      ],
    },
    contact: {
      label: "Waitlist",
      title: "Join the waitlist",
      body: "Leave your name and email and we will write when the app and the Barcelona centre open. Partners and educators can add a note in the message.",
      name: "Name",
      email: "Email",
      message: "Message (optional)",
      consentBefore: "I agree to the",
      consentLink: "privacy policy",
      consentAfter: "and to MindBloom storing my data.",
      submit: "Join the waitlist",
      success: "Thank you. You are on the waitlist and we will be in touch.",
      required: "Please fill in your name, a valid email and tick the box.",
    },
    footer: {
      tagline: "Study, focus and friends, in one place.",
      rights: "© 2026 MindBloom · Barcelona",
      privacy: "Privacy policy",
    },
    auth: {
      joinTitle: "Join MindBloom",
      joinBody: "Create a parent account. It takes less than a minute.",
      google: "Continue with Google",
      or: "or",
      emailSignup: "Sign up with email",
      email: "Email",
      password: "Password",
      passwordHint: "At least 8 characters.",
      show: "Show password",
      hide: "Hide password",
      create: "Create account",
      haveAccount: "Already have an account?",
      signInLink: "Sign in",
      signInTitle: "Welcome back",
      signInBody: "Sign in to your parent account.",
      signInBtn: "Sign in",
      forgot: "Forgot password?",
      noAccount: "New to MindBloom?",
      joinLink: "Create an account",
      resetSent:
        "If that email has an account, we've sent a link to reset the password.",
      resetNeedEmail:
        "Type your email above first, then click “Forgot password?” again.",
      checkEmail:
        "Check your inbox: we've sent you a link to confirm your email.",
      errors: {
        google:
          "Google sign-in isn't available yet. Please use your email and a password.",
        resetOff:
          "Password reset by email isn't switched on yet. Please write to us with the contact form on the home page.",
        exists: "This email already has an account. Sign in instead?",
        invalid:
          "That email and password don't match. Try again, or reset your password.",
        weak: "Please use a password with at least 8 characters.",
        email: "Please enter a valid email address.",
        generic: "Something went wrong. Please try again.",
      },
      demo: "Demo mode: accounts are saved only in this browser.",
    },
    welcome: {
      step: "Step",
      of: "of",
      s1Title: "About you",
      firstName: "Your first name",
      language: "Preferred language",
      s2Title: "About your child",
      childName: "Child's first name or nickname",
      childAge: "Child's age",
      ageHint: "MindBloom is for ages 6 to 18.",
      ageError: "Please enter an age between 6 and 18.",
      interest: "What interests you most?",
      interests: {
        app: ["The app", "Help with schoolwork and focus between visits."],
        centre: [
          "The Barcelona centre",
          "Sessions, small groups and quiet spaces to learn.",
        ],
        both: ["Both", "The app at home and the centre in Barcelona."],
      },
      consentBefore: "I agree to the",
      consentLink: "privacy policy",
      consentAfter: "and to MindBloom storing my data.",
      consentError: "Please tick the box to continue.",
      next: "Next",
      back: "Back",
      finish: "Finish",
      privacyNote:
        "We only ask for what we need. No diagnoses, health details, school or surnames.",
      doneTitle: "You're on the list.",
      doneBody: "We'll be in touch to talk.",
      nextTitle: "What happens next",
      nextSteps: [
        "We read your answers.",
        "We email you to arrange a short chat.",
        "You hear first when the app and centre open.",
      ],
      toAccount: "Go to my account",
      toHome: "Back to the website",
    },
    account: {
      title: "My account",
      signedInAs: "Signed in as",
      parent: "You",
      child: "Your child",
      save: "Save changes",
      saved: "Saved.",
      passwordTitle: "Change password",
      newPassword: "New password",
      changePassword: "Change password",
      passwordChanged: "Password changed.",
      dangerTitle: "Delete account",
      dangerBody:
        "This deletes your account and all the data you gave us. It can't be undone.",
      deleteBtn: "Delete my account and data",
      confirm: "Are you sure? Type DELETE to confirm.",
      confirmWord: "DELETE",
      confirmBtn: "Yes, delete everything",
      cancel: "Cancel",
      deleted: "Your account and data have been deleted.",
      signOut: "Sign out",
    },
    notFound: {
      title: "Page not found",
      body: "This page doesn't exist or has moved.",
      home: "Back to the home page",
    },
    present: {
      exit: "Exit",
      prev: "Previous",
      next: "Next",
      hint: "Use ← → arrow keys · Esc to exit",
    },
    privacy: {
      label: "Privacy",
      title: "Privacy policy",
      updated: "Last updated: November 2026",
      intro:
        "This page explains what the MindBloom website collects when you join the waitlist or write to us, and why. MindBloom is a research project for an app and a Barcelona learning centre for children aged 6 to 18 who learn differently. It is not open yet.",
      sections: [
        {
          h: "Who is responsible",
          paragraphs: [
            "MindBloom, a project based in Barcelona, decides how the personal data from this website is used.",
          ],
        },
        {
          h: "What the form collects",
          paragraphs: [
            "The waitlist and contact form collects:",
          ],
          items: [
            "your name",
            "your email address",
            "the message you choose to write, if you write one",
          ],
          after: [
            "We also store the time you sent the form and that you ticked the consent box. We do not ask for a diagnosis, health details, a school name or a surname.",
          ],
        },
        {
          h: "Why we collect it",
          paragraphs: [
            "We use your name and email to keep you on the waitlist and to write when the app or the Barcelona centre opens. If you include a message, we use it to reply.",
            "The legal basis is your consent, which you give by ticking the box on the form. You can withdraw that consent at any time by emailing us. Withdrawing consent does not affect anything we did before you withdrew it.",
          ],
        },
        {
          h: "How long we keep it",
          paragraphs: [
            "We keep the form data until you ask us to delete it, or until we no longer need it for the waitlist. We then delete it.",
          ],
        },
        {
          h: "Who else sees it",
          paragraphs: [
            "The site is hosted on Railway and the form data is stored in a database there so we can read it. We do not sell personal data and we do not use it for advertising.",
          ],
        },
        {
          h: "Your rights",
          paragraphs: [
            "If you are in Spain or elsewhere in the European Economic Area, you can ask us for access to your data, to correct it, to delete it, to limit how we use it, or for a portable copy. You can also object to how we use it.",
            "You can complain to the Agencia Española de Protección de Datos (aepd.es).",
          ],
        },
        {
          h: "Children",
          paragraphs: [
            "The form is for parents and guardians. Please do not ask a child to fill it in.",
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody:
        "To use any of the rights above, or to ask a question about this policy, email:",
      contactEmail: "mishamar2008@gmail.com",
      contactTodo: "This privacy policy is a draft.",
    },
  },
  Ph = {
    langName: "Español",
    meta: {
      title: "MindBloom — Estudio, concentración y amigos, en un solo lugar",
      description:
        "MindBloom ayuda a niños y jóvenes de 6 a 18 años en Barcelona que aprenden de otra manera: estudio, concentración y amigos, en una app y un centro.",
    },
    nav: {
      problem: "Problema",
      solution: "Solución",
      product: "Producto",
      whyUs: "Por qué nosotros",
      contact: "Contacto",
      join: "Únete",
      signIn: "Iniciar sesión",
      account: "Mi cuenta",
      present: "Presentar",
      menu: "Menú",
      language: "Idioma",
    },
    hero: {
      tags: ["De 6 a 18 años", "TDAH, dislexia, autismo y más", "Barcelona"],
      title: "Estudio, concentración y amigos, en un solo lugar.",
      subtitle:
        "MindBloom une la ayuda con los estudios, la concentración y el tiempo con otros niños, en una app y un centro de aprendizaje en Barcelona.",
      ctaProduct: "Ver el producto",
      ctaWaitlist: "Apúntate a la lista de espera",
      ctaContact: "Contacta con nosotros",
      quoteTranslation: "Las tardes de deberes no tienen fin.",
      quoteSource:
        "Madre de un niño de 8 años, citada por una orientadora escolar · Infosal, 2016",
    },
    photos: {
      hero: "Dos niños haciendo los deberes juntos en una mesa de madera, en casa.",
      study: "Una adolescente lee un libro de texto en un aula luminosa.",
      focus:
        "Una niña concentrada escribe en un cuaderno, con un reloj sobre la mesa.",
      friends: "Tres niñas leen juntas un libro, sentadas una al lado de la otra.",
      space:
        "Foto ilustrativa de una sala de estudio vacía, con mesas y luz natural. No es el centro de MindBloom.",
      spaceCaption:
        "Imagen ilustrativa. El centro de Barcelona aún no está abierto.",
    },
    problem: {
      label: "El problema",
      title: "La ayuda llega a trozos. Los padres la sostienen.",
      body: "Las familias pagan un psicólogo, un profesor particular, quizá una app, y los deberes siguen ocupando toda la tarde. Cada ayuda cubre una parte, y son los padres quienes lo sostienen todo.",
      stats: [
        {
          value: "1,26 M",
          label: "alumnos en España necesitaron apoyo educativo en 2024-25",
        },
        {
          value: "700 €",
          label:
            "Es lo que gasta al mes una familia de Barcelona en ayuda privada.",
        },
        {
          value: "6 meses",
          label:
            "Es la lista de espera que un centro de atención temprana de Barcelona indica a las familias.",
        },
      ],
      quoteTranslation:
        "¡Mi hija necesita un logopeda, un terapeuta ocupacional y un psicólogo, y nadie me ayuda!",
      quoteSource: "Inma Caballero, madre de Vega, Barcelona · betevé, 2021",
      sources:
        "Fuentes: Ministerio de Educación, ACNEAE 2024-25 · betevé, 10 jun 2021",
    },
    solution: {
      label: "La solución",
      title: "Un solo lugar para estudiar, concentrarse y hacer amigos",
      body: "MindBloom es para niños y jóvenes de 6 a 18 años que piensan y aprenden de forma diferente. Una app entre visitas y un centro de aprendizaje en Barcelona.",
      cards: [
        {
          title: "Estudio",
          body: "Ayuda con los deberes reales: organizarlos y recordar lo aprendido.",
        },
        {
          title: "Concentración",
          body: "Sesiones de concentración con descansos planificados, para tardes más tranquilas y cortas.",
        },
        {
          title: "Amigos",
          body: "Tiempo con otros niños que aprenden como ellos, en el centro de Barcelona.",
        },
      ],
    },
    product: {
      label: "Producto",
      title: "Lo que estamos construyendo",
      tag: "Prototipo",
      body: "El progreso en casa y en el centro está conectado, así que el plan de cada niño le acompaña siempre.",
      mockLabel: "Pantallas de ejemplo — concepto",
      tabs: ["Modo concentración", "Mi camino", "Vista familia"],
      focus: {
        timer: "25:00",
        paused: "Apps que distraen en pausa",
        start: "Empezar",
        next: "Próximo descanso en 25 min",
      },
      path: {
        today: "Objetivos de hoy",
        goals: [
          "Leer el capítulo 3 (15 min)",
          "Mates: 10 fracciones",
          "Preparar la mochila",
        ],
        progress: "Esta semana",
        home: "Casa",
        centre: "Centro",
      },
      parent: {
        week: "La semana de Lucas",
        sessions: "4 de 5 sesiones de concentración hechas",
        next: "Próxima sesión en el centro",
        nextWhen: "Jueves, 17:00 · Grupo pequeño",
        message: "Mensaje de Laura (educadora)",
        messageText:
          "Muy buen trabajo hoy con las fracciones. Volveremos a practicar el jueves.",
      },
      appTitle: "La app",
      app: [
        [
          "Modo concentración",
          "Pausa las apps que distraen durante las sesiones, con descansos planificados.",
        ],
        [
          "Un camino personal",
          "Objetivos y una progresión que unen lo que aprende en casa y en el centro.",
        ],
        [
          "Vista para familias y educadores",
          "Sigue el progreso y coordina el plan de aprendizaje en un solo lugar.",
        ],
      ],
      centreTitle: "El centro de Barcelona",
      centre: [
        [
          "Sesiones y grupos pequeños",
          "Ejercicios prácticos con profesionales de la educación cualificados.",
        ],
        ["Espacios tranquilos", "Un lugar calmado y flexible para estudiar."],
        [
          "Un plan compartido",
          "Los educadores actualizan el plan de cada niño después de cada visita.",
        ],
      ],
      pause: "Pausar la presentación",
      play: "Reproducir la presentación",
    },
    gap: {
      label: "Por qué nosotros",
      title: "Los demás resuelven una parte",
      rows: [
        "Entrenamiento de la atención",
        "Lectura y escritura",
        "Diagnóstico y terapia",
        "Ayuda con los deberes",
        "Amigos y socialización",
        "App + centro físico",
      ],
      cols: ["Sincrolab", "Dytective", "Clínicas privadas", "MindBloom"],
      yes: "Sí",
      no: "No",
      planned: "Previsto",
      footnote:
        "Las marcas de verificación son lo que cada organización ofrece hoy, según sus webs públicas en noviembre de 2026. MindBloom aún no está abierto: «Previsto» es lo que pensamos ofrecer, no un servicio que se pueda usar ahora. El diagnóstico y la terapia no forman parte de MindBloom.",
    },
    model: {
      label: "Modelo de negocio",
      title: "Cómo generará ingresos MindBloom",
      cards: [
        {
          title: "Familias",
          body: "Suscripción a la app y cuota del centro de aprendizaje.",
        },
        {
          title: "Escuelas e instituciones",
          body: "Licencias para escuelas y organizaciones educativas.",
        },
        {
          title: "Sesiones individuales",
          body: "Sesiones uno a uno en el centro de Barcelona.",
        },
      ],
      note: "Los precios se fijarán con las primeras familias.",
    },
    roadmap: {
      label: "Hoja de ruta",
      title: "Dónde estamos",
      steps: [
        { when: "Ahora", what: "Investigación y entrevistas con familias" },
        {
          when: "Después",
          what: "Lista de espera y primeras familias de Barcelona",
        },
        {
          when: "Más adelante",
          what: "Piloto de la app y apertura del centro",
        },
      ],
    },
    contact: {
      label: "Lista de espera",
      title: "Apúntate a la lista de espera",
      body: "Deja tu nombre y tu correo y te escribiremos cuando abran la app y el centro de Barcelona. Si eres un socio o un educador, añade una nota en el mensaje.",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje (opcional)",
      consentBefore: "Acepto la",
      consentLink: "política de privacidad",
      consentAfter: "y que MindBloom guarde mis datos.",
      submit: "Apúntate a la lista de espera",
      success: "Gracias. Ya estás en la lista de espera y te escribiremos.",
      required: "Escribe tu nombre, un correo válido y marca la casilla.",
    },
    footer: {
      tagline: "Estudio, concentración y amigos, en un solo lugar.",
      rights: "© 2026 MindBloom · Barcelona",
      privacy: "Política de privacidad",
    },
    auth: {
      joinTitle: "Únete a MindBloom",
      joinBody: "Crea una cuenta de familia. Tardarás menos de un minuto.",
      google: "Continuar con Google",
      or: "o",
      emailSignup: "Registrarse con correo",
      email: "Correo electrónico",
      password: "Contraseña",
      passwordHint: "Mínimo 8 caracteres.",
      show: "Mostrar contraseña",
      hide: "Ocultar contraseña",
      create: "Crear cuenta",
      haveAccount: "¿Ya tienes cuenta?",
      signInLink: "Inicia sesión",
      signInTitle: "Hola de nuevo",
      signInBody: "Inicia sesión en tu cuenta de familia.",
      signInBtn: "Iniciar sesión",
      forgot: "¿Has olvidado la contraseña?",
      noAccount: "¿Eres nuevo en MindBloom?",
      joinLink: "Crea una cuenta",
      resetSent:
        "Si ese correo tiene cuenta, te hemos enviado un enlace para cambiar la contraseña.",
      resetNeedEmail:
        "Escribe primero tu correo arriba y vuelve a pulsar «¿Has olvidado la contraseña?».",
      checkEmail:
        "Revisa tu correo: te hemos enviado un enlace para confirmarlo.",
      errors: {
        google:
          "El acceso con Google aún no está disponible. Usa tu correo y una contraseña.",
        resetOff:
          "El cambio de contraseña por correo aún no está activado. Escríbenos con el formulario de contacto de la página principal.",
        exists: "Este correo ya tiene una cuenta. ¿Quieres iniciar sesión?",
        invalid:
          "El correo y la contraseña no coinciden. Inténtalo de nuevo o cambia la contraseña.",
        weak: "Usa una contraseña de al menos 8 caracteres.",
        email: "Escribe un correo electrónico válido.",
        generic: "Algo ha fallado. Inténtalo de nuevo.",
      },
      demo: "Modo demo: las cuentas solo se guardan en este navegador.",
    },
    welcome: {
      step: "Paso",
      of: "de",
      s1Title: "Sobre ti",
      firstName: "Tu nombre",
      language: "Idioma preferido",
      s2Title: "Sobre tu hijo o hija",
      childName: "Nombre o apodo",
      childAge: "Edad",
      ageHint: "MindBloom es para edades de 6 a 18 años.",
      ageError: "Escribe una edad entre 6 y 18 años.",
      interest: "¿Qué te interesa más?",
      interests: {
        app: [
          "La app",
          "Ayuda con los deberes y la concentración entre visitas.",
        ],
        centre: [
          "El centro de Barcelona",
          "Sesiones, grupos pequeños y espacios tranquilos.",
        ],
        both: ["Las dos cosas", "La app en casa y el centro en Barcelona."],
      },
      consentBefore: "Acepto la",
      consentLink: "política de privacidad",
      consentAfter: "y que MindBloom guarde mis datos.",
      consentError: "Marca la casilla para continuar.",
      next: "Siguiente",
      back: "Atrás",
      finish: "Terminar",
      privacyNote:
        "Solo pedimos lo necesario. Nada de diagnósticos, datos de salud, escuela ni apellidos.",
      doneTitle: "Ya estás en la lista.",
      doneBody: "Te escribiremos para hablar.",
      nextTitle: "Qué pasa ahora",
      nextSteps: [
        "Leemos tus respuestas.",
        "Te escribimos para una breve llamada.",
        "Te avisamos primero cuando abran la app y el centro.",
      ],
      toAccount: "Ir a mi cuenta",
      toHome: "Volver a la web",
    },
    account: {
      title: "Mi cuenta",
      signedInAs: "Sesión iniciada como",
      parent: "Tú",
      child: "Tu hijo o hija",
      save: "Guardar cambios",
      saved: "Guardado.",
      passwordTitle: "Cambiar contraseña",
      newPassword: "Nueva contraseña",
      changePassword: "Cambiar contraseña",
      passwordChanged: "Contraseña cambiada.",
      dangerTitle: "Eliminar cuenta",
      dangerBody:
        "Esto elimina tu cuenta y todos los datos que nos diste. No se puede deshacer.",
      deleteBtn: "Eliminar mi cuenta y mis datos",
      confirm: "¿Seguro? Escribe ELIMINAR para confirmar.",
      confirmWord: "ELIMINAR",
      confirmBtn: "Sí, eliminarlo todo",
      cancel: "Cancelar",
      deleted: "Tu cuenta y tus datos se han eliminado.",
      signOut: "Cerrar sesión",
    },
    notFound: {
      title: "Página no encontrada",
      body: "Esta página no existe o se ha movido.",
      home: "Volver al inicio",
    },
    present: {
      exit: "Salir",
      prev: "Anterior",
      next: "Siguiente",
      hint: "Usa las flechas ← → · Esc para salir",
    },
    privacy: {
      label: "Privacidad",
      title: "Política de privacidad",
      updated: "Última actualización: noviembre de 2026",
      intro:
        "Esta página explica qué recoge la web de MindBloom cuando te apuntas a la lista de espera o nos escribes, y por qué. MindBloom es un proyecto de investigación: una app y un centro de aprendizaje en Barcelona para niños y jóvenes de 6 a 18 años que aprenden de otra manera. Aún no está abierto.",
      sections: [
        {
          h: "Quién es el responsable",
          paragraphs: [
            "MindBloom, un proyecto con sede en Barcelona, decide cómo se usan los datos personales de esta web.",
          ],
        },
        {
          h: "Qué recoge el formulario",
          paragraphs: ["El formulario de la lista de espera y de contacto recoge:"],
          items: [
            "tu nombre",
            "tu correo electrónico",
            "el mensaje que decidas escribir, si escribes uno",
          ],
          after: [
            "También guardamos la hora de envío y que marcaste la casilla de consentimiento. No pedimos un diagnóstico, datos de salud, el nombre de un colegio ni apellidos.",
          ],
        },
        {
          h: "Por qué lo recogemos",
          paragraphs: [
            "Usamos tu nombre y tu correo para mantenerte en la lista de espera y escribirte cuando abran la app o el centro de Barcelona. Si dejas un mensaje, lo usamos para responderte.",
            "La base legal es tu consentimiento, que das al marcar la casilla del formulario. Puedes retirarlo en cualquier momento escribiéndonos. Retirarlo no afecta a lo que hayamos hecho antes.",
          ],
        },
        {
          h: "Cuánto tiempo lo guardamos",
          paragraphs: [
            "Guardamos los datos del formulario hasta que nos pidas borrarlos, o hasta que ya no hagan falta para la lista de espera. Entonces los borramos.",
          ],
        },
        {
          h: "Quién más los ve",
          paragraphs: [
            "La web está alojada en Railway y los datos del formulario se guardan en una base de datos allí para que podamos leerlos. No vendemos datos personales ni los usamos para publicidad.",
          ],
        },
        {
          h: "Tus derechos",
          paragraphs: [
            "Si estás en España o en otro país del Espacio Económico Europeo, puedes pedirnos acceso a tus datos, que los corrijamos, que los borremos, que limitemos su uso o una copia portable. También puedes oponerte a cómo los usamos.",
            "Puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
          ],
        },
        {
          h: "Menores",
          paragraphs: [
            "El formulario es para padres, madres y tutores. No pidas a un niño o niña que lo rellene.",
          ],
        },
      ],
      contactTitle: "Contacto",
      contactBody:
        "Para usar cualquiera de estos derechos, o para preguntar por esta política, escribe a:",
      contactEmail: "mishamar2008@gmail.com",
      contactTodo: "Esta política de privacidad es un borrador.",
    },
  },
  _h = {
    langName: "Català",
    meta: {
      title: "MindBloom — Estudi, concentració i amics, en un sol lloc",
      description:
        "MindBloom ajuda infants i joves de 6 a 18 anys a Barcelona que aprenen diferent: estudi, concentració i amics, en una app i un centre.",
    },
    nav: {
      problem: "Problema",
      solution: "Solució",
      product: "Producte",
      whyUs: "Per què nosaltres",
      contact: "Contacte",
      join: "Uneix-te",
      signIn: "Inicia sessió",
      account: "El meu compte",
      present: "Presentar",
      menu: "Menú",
      language: "Idioma",
    },
    hero: {
      tags: ["De 6 a 18 anys", "TDAH, dislèxia, autisme i més", "Barcelona"],
      title: "Estudi, concentració i amics, en un sol lloc.",
      subtitle:
        "MindBloom uneix l'ajuda amb els estudis, la concentració i el temps amb altres infants, en una app i un centre d'aprenentatge a Barcelona.",
      ctaProduct: "Veure el producte",
      ctaWaitlist: "Apunta't a la llista d'espera",
      ctaContact: "Contacta amb nosaltres",
      quoteTranslation: "Les tardes de deures no s'acaben mai.",
      quoteSource:
        "Mare d'un infant de 8 anys, citada per una orientadora escolar · Infosal, 2016",
    },
    photos: {
      hero: "Dos infants fent els deures junts en una taula de fusta, a casa.",
      study: "Una adolescent llegeix un llibre de text en una aula lluminosa.",
      focus:
        "Una nena concentrada escriu en una llibreta, amb un rellotge sobre la taula.",
      friends: "Tres nenes llegeixen juntes un llibre, assegudes una al costat de l'altra.",
      space:
        "Foto il·lustrativa d'una sala d'estudi buida, amb taules i llum natural. No és el centre de MindBloom.",
      spaceCaption:
        "Imatge il·lustrativa. El centre de Barcelona encara no està obert.",
    },
    problem: {
      label: "El problema",
      title: "L'ajuda arriba a trossos. Les famílies la sostenen.",
      body: "Les famílies paguen un psicòleg, un professor particular, potser una app, i els deures encara ocupen tota la tarda. Cada ajuda cobreix una part, i són els pares els qui ho sostenen tot.",
      stats: [
        {
          value: "1,26 M",
          label: "alumnes a Espanya van necessitar suport educatiu el 2024-25",
        },
        {
          value: "700 €",
          label:
            "És el que gasta al mes una família de Barcelona en ajuda privada.",
        },
        {
          value: "6 mesos",
          label:
            "És la llista d'espera que un CDIAP de Barcelona indica a les famílies.",
        },
      ],
      quoteTranslation:
        "La meva filla necessita un logopeda, un terapeuta ocupacional i un psicòleg i ningú no m'ajuda!",
      quoteSource: "Inma Caballero, mare de la Vega, Barcelona · betevé, 2021",
      sources:
        "Fonts: Ministeri d'Educació, ACNEAE 2024-25 · betevé, 10 juny 2021",
    },
    solution: {
      label: "La solució",
      title: "Un sol lloc per estudiar, concentrar-se i fer amics",
      body: "MindBloom és per a infants i joves de 6 a 18 anys que pensen i aprenen de manera diferent. Una app entre visites i un centre d'aprenentatge a Barcelona.",
      cards: [
        {
          title: "Estudi",
          body: "Ajuda amb els deures reals: organitzar-los i recordar el que aprenen.",
        },
        {
          title: "Concentració",
          body: "Sessions de concentració amb descansos planificats, per a tardes més tranquil·les i curtes.",
        },
        {
          title: "Amics",
          body: "Temps amb altres infants que aprenen com ells, al centre de Barcelona.",
        },
      ],
    },
    product: {
      label: "Producte",
      title: "El que estem construint",
      tag: "Prototip",
      body: "El progrés a casa i al centre està connectat, així el pla de cada infant l'acompanya arreu.",
      mockLabel: "Pantalles d'exemple — concepte",
      tabs: ["Mode concentració", "El meu camí", "Vista família"],
      focus: {
        timer: "25:00",
        paused: "Apps que distreuen en pausa",
        start: "Començar",
        next: "Proper descans en 25 min",
      },
      path: {
        today: "Objectius d'avui",
        goals: [
          "Llegir el capítol 3 (15 min)",
          "Mates: 10 fraccions",
          "Preparar la motxilla",
        ],
        progress: "Aquesta setmana",
        home: "Casa",
        centre: "Centre",
      },
      parent: {
        week: "La setmana d'en Lucas",
        sessions: "4 de 5 sessions de concentració fetes",
        next: "Propera sessió al centre",
        nextWhen: "Dijous, 17:00 · Grup petit",
        message: "Missatge de la Laura (educadora)",
        messageText:
          "Molt bona feina avui amb les fraccions. Hi tornarem dijous.",
      },
      appTitle: "L'app",
      app: [
        [
          "Mode concentració",
          "Posa en pausa les apps que distreuen durant les sessions, amb descansos planificats.",
        ],
        [
          "Un camí personal",
          "Objectius i una progressió que uneixen el que aprèn a casa i al centre.",
        ],
        [
          "Vista per a famílies i educadors",
          "Segueix el progrés i coordina el pla d'aprenentatge en un sol lloc.",
        ],
      ],
      centreTitle: "El centre de Barcelona",
      centre: [
        [
          "Sessions i grups petits",
          "Exercicis pràctics amb professionals de l'educació qualificats.",
        ],
        ["Espais tranquils", "Un lloc calmat i flexible per estudiar."],
        [
          "Un pla compartit",
          "Els educadors actualitzen el pla de cada infant després de cada visita.",
        ],
      ],
      pause: "Atura la presentació",
      play: "Reprodueix la presentació",
    },
    gap: {
      label: "Per què nosaltres",
      title: "Els altres resolen una part",
      rows: [
        "Entrenament de l'atenció",
        "Lectura i escriptura",
        "Diagnòstic i teràpia",
        "Ajuda amb els deures",
        "Amics i socialització",
        "App + centre físic",
      ],
      cols: ["Sincrolab", "Dytective", "Clíniques privades", "MindBloom"],
      yes: "Sí",
      no: "No",
      planned: "Previst",
      footnote:
        "Les marques de verificació són el que cada organització ofereix avui, segons els seus webs públics el novembre de 2026. MindBloom encara no està obert: «Previst» és el que pensem oferir, no un servei que es pugui fer servir ara. El diagnòstic i la teràpia no formen part de MindBloom.",
    },
    model: {
      label: "Model de negoci",
      title: "Com generarà ingressos MindBloom",
      cards: [
        {
          title: "Famílies",
          body: "Subscripció a l'app i quota del centre d'aprenentatge.",
        },
        {
          title: "Escoles i institucions",
          body: "Llicències per a escoles i organitzacions educatives.",
        },
        {
          title: "Sessions individuals",
          body: "Sessions individuals al centre de Barcelona.",
        },
      ],
      note: "Els preus es fixaran amb les primeres famílies.",
    },
    roadmap: {
      label: "Full de ruta",
      title: "On som",
      steps: [
        { when: "Ara", what: "Recerca i entrevistes amb famílies" },
        {
          when: "Després",
          what: "Llista d'espera i primeres famílies de Barcelona",
        },
        { when: "Més endavant", what: "Pilot de l'app i obertura del centre" },
      ],
    },
    contact: {
      label: "Llista d'espera",
      title: "Apunta't a la llista d'espera",
      body: "Deixa el teu nom i el teu correu i t'escriurem quan obrin l'app i el centre de Barcelona. Si ets un soci o un educador, afegeix una nota al missatge.",
      name: "Nom",
      email: "Correu electrònic",
      message: "Missatge (opcional)",
      consentBefore: "Accepto la",
      consentLink: "política de privacitat",
      consentAfter: "i que MindBloom desi les meves dades.",
      submit: "Apunta't a la llista d'espera",
      success: "Gràcies. Ja ets a la llista d'espera i t'escriurem.",
      required: "Escriu el teu nom, un correu vàlid i marca la casella.",
    },
    footer: {
      tagline: "Estudi, concentració i amics, en un sol lloc.",
      rights: "© 2026 MindBloom · Barcelona",
      privacy: "Política de privacitat",
    },
    auth: {
      joinTitle: "Uneix-te a MindBloom",
      joinBody: "Crea un compte de família. Trigaràs menys d'un minut.",
      google: "Continua amb Google",
      or: "o",
      emailSignup: "Registra't amb correu",
      email: "Correu electrònic",
      password: "Contrasenya",
      passwordHint: "Mínim 8 caràcters.",
      show: "Mostra la contrasenya",
      hide: "Amaga la contrasenya",
      create: "Crea el compte",
      haveAccount: "Ja tens compte?",
      signInLink: "Inicia sessió",
      signInTitle: "Hola de nou",
      signInBody: "Inicia sessió al teu compte de família.",
      signInBtn: "Inicia sessió",
      forgot: "Has oblidat la contrasenya?",
      noAccount: "Ets nou a MindBloom?",
      joinLink: "Crea un compte",
      resetSent:
        "Si aquest correu té compte, t'hem enviat un enllaç per canviar la contrasenya.",
      resetNeedEmail:
        "Escriu primer el teu correu a dalt i torna a clicar «Has oblidat la contrasenya?».",
      checkEmail: "Revisa el correu: t'hem enviat un enllaç per confirmar-lo.",
      errors: {
        google:
          "L'accés amb Google encara no està disponible. Fes servir el teu correu i una contrasenya.",
        resetOff:
          "El canvi de contrasenya per correu encara no està activat. Escriu-nos amb el formulari de contacte de la pàgina principal.",
        exists: "Aquest correu ja té un compte. Vols iniciar sessió?",
        invalid:
          "El correu i la contrasenya no coincideixen. Torna-ho a provar o canvia la contrasenya.",
        weak: "Fes servir una contrasenya d'almenys 8 caràcters.",
        email: "Escriu un correu electrònic vàlid.",
        generic: "Alguna cosa ha fallat. Torna-ho a provar.",
      },
      demo: "Mode demo: els comptes només es desen en aquest navegador.",
    },
    welcome: {
      step: "Pas",
      of: "de",
      s1Title: "Sobre tu",
      firstName: "El teu nom",
      language: "Idioma preferit",
      s2Title: "Sobre el teu fill o filla",
      childName: "Nom o sobrenom",
      childAge: "Edat",
      ageHint: "MindBloom és per a edats de 6 a 18 anys.",
      ageError: "Escriu una edat entre 6 i 18 anys.",
      interest: "Què t'interessa més?",
      interests: {
        app: ["L'app", "Ajuda amb els deures i la concentració entre visites."],
        centre: [
          "El centre de Barcelona",
          "Sessions, grups petits i espais tranquils.",
        ],
        both: ["Totes dues coses", "L'app a casa i el centre a Barcelona."],
      },
      consentBefore: "Accepto la",
      consentLink: "política de privacitat",
      consentAfter: "i que MindBloom desi les meves dades.",
      consentError: "Marca la casella per continuar.",
      next: "Següent",
      back: "Enrere",
      finish: "Acaba",
      privacyNote:
        "Només demanem el necessari. Res de diagnòstics, dades de salut, escola ni cognoms.",
      doneTitle: "Ja ets a la llista.",
      doneBody: "T'escriurem per parlar.",
      nextTitle: "Què passa ara",
      nextSteps: [
        "Llegim les teves respostes.",
        "T'escrivim per fer una breu trucada.",
        "T'avisem els primers quan obrin l'app i el centre.",
      ],
      toAccount: "Ves al meu compte",
      toHome: "Torna al web",
    },
    account: {
      title: "El meu compte",
      signedInAs: "Sessió iniciada com a",
      parent: "Tu",
      child: "El teu fill o filla",
      save: "Desa els canvis",
      saved: "Desat.",
      passwordTitle: "Canvia la contrasenya",
      newPassword: "Nova contrasenya",
      changePassword: "Canvia la contrasenya",
      passwordChanged: "Contrasenya canviada.",
      dangerTitle: "Elimina el compte",
      dangerBody:
        "Això elimina el teu compte i totes les dades que ens vas donar. No es pot desfer.",
      deleteBtn: "Elimina el meu compte i les meves dades",
      confirm: "N'estàs segur? Escriu ELIMINAR per confirmar.",
      confirmWord: "ELIMINAR",
      confirmBtn: "Sí, elimina-ho tot",
      cancel: "Cancel·la",
      deleted: "El teu compte i les teves dades s'han eliminat.",
      signOut: "Tanca la sessió",
    },
    notFound: {
      title: "Pàgina no trobada",
      body: "Aquesta pàgina no existeix o s'ha mogut.",
      home: "Torna a l'inici",
    },
    present: {
      exit: "Surt",
      prev: "Anterior",
      next: "Següent",
      hint: "Fes servir les fletxes ← → · Esc per sortir",
    },
    privacy: {
      label: "Privacitat",
      title: "Política de privacitat",
      updated: "Darrera actualització: novembre de 2026",
      intro:
        "Aquesta pàgina explica què recull el web de MindBloom quan t'apuntes a la llista d'espera o ens escrius, i per què. MindBloom és un projecte de recerca: una app i un centre d'aprenentatge a Barcelona per a infants i joves de 6 a 18 anys que aprenen diferent. Encara no està obert.",
      sections: [
        {
          h: "Qui n'és el responsable",
          paragraphs: [
            "MindBloom, un projecte amb seu a Barcelona, decideix com es fan servir les dades personals d'aquest web.",
          ],
        },
        {
          h: "Què recull el formulari",
          paragraphs: ["El formulari de la llista d'espera i de contacte recull:"],
          items: [
            "el teu nom",
            "el teu correu electrònic",
            "el missatge que decideixis escriure, si n'escrius un",
          ],
          after: [
            "També desem l'hora d'enviament i que has marcat la casella de consentiment. No demanem un diagnòstic, dades de salut, el nom d'una escola ni cognoms.",
          ],
        },
        {
          h: "Per què ho recollim",
          paragraphs: [
            "Fem servir el teu nom i el teu correu per mantenir-te a la llista d'espera i escriure't quan obrin l'app o el centre de Barcelona. Si deixes un missatge, el fem servir per respondre't.",
            "La base legal és el teu consentiment, que dones en marcar la casella del formulari. El pots retirar en qualsevol moment escrivint-nos. Retirar-lo no afecta el que hàgim fet abans.",
          ],
        },
        {
          h: "Quant de temps ho desem",
          paragraphs: [
            "Desem les dades del formulari fins que ens demanis d'esborrar-les, o fins que ja no facin falta per a la llista d'espera. Llavors les esborrem.",
          ],
        },
        {
          h: "Qui més les veu",
          paragraphs: [
            "El web està allotjat a Railway i les dades del formulari es desen en una base de dades allà perquè les puguem llegir. No venem dades personals ni les fem servir per a publicitat.",
          ],
        },
        {
          h: "Els teus drets",
          paragraphs: [
            "Si ets a Espanya o en un altre país de l'Espai Econòmic Europeu, ens pots demanar accés a les teves dades, que les corregim, que les esborrem, que en limitem l'ús o una còpia portable. També t'hi pots oposar.",
            "Pots reclamar a l'Agencia Española de Protección de Datos (aepd.es).",
          ],
        },
        {
          h: "Menors",
          paragraphs: [
            "El formulari és per a pares, mares i tutors. No demanis a un infant que l'ompli.",
          ],
        },
      ],
      contactTitle: "Contacte",
      contactBody:
        "Per fer servir qualsevol d'aquests drets, o per preguntar per aquesta política, escriu a:",
      contactEmail: "mishamar2008@gmail.com",
      contactTodo: "Aquesta política de privacitat és un esborrany.",
    },
  },
  gd = { en: Ch, es: Ph, ca: _h },
  vd = [
    { code: "es", short: "ES", name: "Español" },
    { code: "ca", short: "CA", name: "Català" },
    { code: "en", short: "EN", name: "English" },
  ],
  yd = y.createContext(null);
function Th() {
  try {
    const n = new URLSearchParams(window.location.search).get("lang");
    if (n && n in gd) return n;
  } catch {}
  const e = Q.get("mb_lang", null);
  if (e && e in gd) return e;
  return "es";
}
function privacyHref(e) {
  return e && e !== "es" ? `/privacy?lang=${e}` : "/privacy";
}
function Lh({ children: e }) {
  const [t, n] = y.useState(Th),
    { pathname: l } = lt(),
    r = (a) => {
      (n(a), Q.set("mb_lang", a));
    };
  return (
    y.useEffect(() => {
      document.documentElement.lang = t;
      Q.set("mb_lang", t);
      const a = gd[t].meta,
        i = (s, u, c) => {
          const g = document.querySelector(s);
          g && g.setAttribute(u, c);
        };
      document.title = a.title;
      i('meta[name="description"]', "content", a.description);
      i('meta[property="og:title"]', "content", a.title);
      i('meta[property="og:description"]', "content", a.description);
      i(
        'meta[property="og:locale"]',
        "content",
        t === "ca" ? "ca_ES" : t === "en" ? "en_GB" : "es_ES",
      );
      i('meta[name="twitter:title"]', "content", a.title);
      i('meta[name="twitter:description"]', "content", a.description);
      const s = window.location.origin,
        u = new URL(window.location.href);
      t === "es" ? u.searchParams.delete("lang") : u.searchParams.set("lang", t);
      const c = u.pathname + u.search + u.hash;
      c !==
        window.location.pathname +
          window.location.search +
          window.location.hash && history.replaceState(history.state, "", c);
      const g =
        t === "es"
          ? s + (l === "/" ? "/" : l)
          : s + (l === "/" ? "/" : l) + "?lang=" + t;
      const m = document.querySelector('link[rel="canonical"]');
      m && m.setAttribute("href", g);
      i('meta[property="og:url"]', "content", g);
    }, [t, l]),
    o.jsx(yd.Provider, {
      value: { lang: t, setLang: r, t: gd[t] },
      children: e,
    })
  );
}
function F() {
  const e = y.useContext(yd);
  if (!e) throw new Error("useLang must be used inside LanguageProvider");
  return e;
}
function Pl({ onDark: e = !1 }) {
  const { lang: t, setLang: n, t: r } = F();
  return o.jsx("div", {
    role: "group",
    "aria-label": r.nav.language,
    className: "mb-lang flex items-center gap-1",
    children: vd.map((l, a) =>
      o.jsxs(
        "span",
        {
          className: "flex items-center",
          children: [
            a > 0 &&
              o.jsx("span", {
                "aria-hidden": "true",
                className: e ? "px-1 text-bg-light" : "px-1 text-ink-soft",
                children: "·",
              }),
            o.jsx("button", {
              type: "button",
              onClick: () => n(l.code),
              "aria-pressed": t === l.code,
              "aria-label": l.name,
              className: `min-h-[44px] min-w-[44px] rounded-sm px-2 text-label ${t === l.code ? (e ? "text-bg-light underline underline-offset-4" : "text-main underline underline-offset-4") : e ? "text-bg-light" : "text-ink-soft hover:text-ink"}`,
              children: l.short,
            }),
          ],
        },
        l.code,
      ),
    ),
  });
}
const Mh = !1,
  yn = {
    parent_name: "",
    language: "es",
    child_name: "",
    child_age: null,
    interest: null,
    consent: !1,
    completed: !1,
  },
  xd = y.createContext(null),
  $e = "mb_demo_users",
  Dn = "mb_demo_session",
  An = "mb_demo_profiles";
async function Sa(e) {
  try {
    const t = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(e),
    );
    return Array.from(new Uint8Array(t))
      .map((n) => n.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return btoa(unescape(encodeURIComponent(e)));
  }
}
const bs = () =>
  crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now()) + Math.random().toString(16).slice(2);
function zh({ children: e }) {
  const [t, n] = y.useState(null),
    [r, l] = y.useState(null),
    [a, i] = y.useState(!0),
    A = async (P, M = "GET", B) => {
      try {
        const R = await fetch("/api" + P, {
            method: M,
            credentials: "same-origin",
            headers: B ? { "Content-Type": "application/json" } : {},
            body: B ? JSON.stringify(B) : void 0,
          }),
          J = await R.json().catch(() => ({}));
        return R.ok ? J : { error: J.error || "generic" };
      } catch {
        return { error: "generic" };
      }
    },
    S = (J) => {
      J && J.user
        ? (n(J.user),
          l({
            ...yn,
            ...Object.fromEntries(
              Object.entries(J.profile || {}).filter(([, V]) => V !== null),
            ),
          }))
        : (n(null), l(null));
    };
  y.useEffect(() => {
    A("/me")
      .then((J) => {
        J.error || S(J);
      })
      .finally(() => i(!1));
  }, []);
  const u = y.useCallback(async (f, d) => {
      if (((f = f.trim().toLowerCase()), d.length < 8))
        return { error: "weak" };
      const J = await A("/signup", "POST", { email: f, password: d });
      return J.error ? J : (S(J), {});
    }, []),
    c = y.useCallback(async (f, d) => {
      const J = await A("/signin", "POST", {
        email: f.trim().toLowerCase(),
        password: d,
      });
      return J.error ? J : (S(J), {});
    }, []),
    g = y.useCallback(async () => {
      const J = await A("/auth/google/enabled");
      return J.enabled
        ? ((window.location.href = "/api/auth/google"),
          await new Promise(() => {}))
        : { error: "google" };
    }, []),
    m = y.useCallback(async (f) => {
      const J = await A("/reset", "POST", { email: f.trim().toLowerCase() });
      return J.error ? J : {};
    }, []),
    h = y.useCallback(async (f) => {
      if (f.length < 8) return { error: "weak" };
      const J = await A("/password", "POST", { password: f });
      return J.error ? J : {};
    }, []),
    v = y.useCallback(
      async (f) => {
        if (!t) return { error: "generic" };
        const d = { ...(r ?? yn), ...f },
          J = await A("/profile", "PUT", { profile: d });
        return J.error ? J : (l(d), {});
      },
      [t, r],
    ),
    x = y.useCallback(async () => {
      (await A("/signout", "POST"), n(null), l(null));
    }, []),
    k = y.useCallback(async () => {
      if (!t) return { error: "generic" };
      const J = await A("/account", "DELETE");
      return J.error ? J : (n(null), l(null), {});
    }, [t]),
    C = y.useMemo(
      () => ({
        user: t,
        profile: r,
        loading: a,
        isDemo: Mh,
        signUp: u,
        signIn: c,
        signInWithGoogle: g,
        resetPassword: m,
        updatePassword: h,
        saveProfile: v,
        deleteAccount: k,
        signOut: x,
      }),
      [t, r, a, u, c, g, m, h, v, k, x],
    );
  return o.jsx(xd.Provider, { value: C, children: e });
}
function Yt() {
  const e = y.useContext(xd);
  if (!e) throw new Error("useAuth must be used inside AuthProvider");
  return e;
}
const wd = [
  { id: "problem", key: "problem" },
  { id: "solution", key: "solution" },
  { id: "product", key: "product" },
  { id: "why-us", key: "whyUs" },
  { id: "contact", key: "contact" },
];
function wo() {
  const e = Gt(),
    { pathname: t } = lt();
  return (n) => {
    var r;
    if (t !== "/") {
      e("/", { state: { scrollTo: n } });
      return;
    }
    (r = document.getElementById(n)) == null ||
      r.scrollIntoView({ behavior: "smooth" });
  };
}
function ko() {
  const { t } = F(),
    { user: n } = Yt(),
    r = wo(),
    [l, a] = y.useState(!1),
    i = wd.map((u) =>
      o.jsx(
        "a",
        {
          href: `#${u.id}`,
          onClick: (c) => {
            (c.preventDefault(), a(!1), r(u.id));
          },
          className:
            "mb-nowrap flex min-h-[44px] items-center text-small font-semibold text-ink hover:text-main",
          children: t.nav[u.key],
        },
        u.id,
      ),
    ),
    s =
      n &&
      o.jsx(Fe, {
        to: "/account",
        onClick: () => a(!1),
        className: "btn-main mb-nowrap min-h-[44px] px-4 text-small",
        children: t.nav.account,
      });
  return o.jsxs("header", {
    className:
      "sticky top-0 z-30 border-b border-line bg-bg-light/95 backdrop-blur",
    children: [
      o.jsxs("nav", {
        className: "container-mb flex items-center justify-between gap-3 py-3",
        "aria-label": "Main",
        children: [
          o.jsx(Fe, {
            to: "/",
            "aria-label": "MindBloom home",
            onClick: () => a(!1),
            className: "min-w-0",
            children: o.jsx(Ql, { size: 32 }),
          }),
          o.jsx("div", {
            className: "mb-nav hidden items-center gap-5 lg:flex",
            children: i,
          }),
          o.jsxs("div", {
            className: "flex flex-none items-center gap-2",
            children: [
              o.jsx(Pl, {}),
              s &&
                o.jsx("div", { className: "mb-desktop-only", children: s }),
              o.jsx("button", {
                type: "button",
                className:
                  "flex h-11 w-11 flex-none items-center justify-center rounded-sm text-ink lg:hidden",
                "aria-label": t.nav.menu,
                "aria-expanded": l,
                onClick: () => a((u) => !u),
                children: l
                  ? o.jsx(md, { "aria-hidden": "true" })
                  : o.jsx(gh, { "aria-hidden": "true" }),
              }),
            ],
          }),
        ],
      }),
      l &&
        o.jsx("div", {
          className: "border-t border-line bg-bg-light lg:hidden",
          children: o.jsxs("div", {
            className: "container-mb flex flex-col gap-2 py-4",
            children: [i, s && o.jsx("div", { className: "pt-2", children: s })],
          }),
        }),
    ],
  });
}
function So() {
  const { t: e } = F(),
    t = wo();
  return o.jsxs("footer", {
    className: "bg-bg-dark text-bg-light",
    children: [
      o.jsxs("div", {
        className:
          "container-mb flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between",
        children: [
          o.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              o.jsx(Ql, { onDark: !0, size: 32 }),
              o.jsx("p", {
                className: "text-small",
                children: e.footer.tagline,
              }),
            ],
          }),
          o.jsx("ul", {
            className: "flex flex-wrap gap-x-6 gap-y-2",
            children: wd.map((n) =>
              o.jsx(
                "li",
                {
                  children: o.jsx("a", {
                    href: `#${n.id}`,
                    onClick: (r) => {
                      (r.preventDefault(), t(n.id));
                    },
                    className: "text-small text-bg-light hover:underline",
                    children: e.nav[n.key],
                  }),
                },
                n.id,
              ),
            ),
          }),
          o.jsx(Pl, { onDark: !0 }),
        ],
      }),
      o.jsxs("div", {
        className:
          "container-mb flex flex-wrap items-center gap-x-6 gap-y-2 pb-8 text-small",
        children: [
          o.jsx("span", { children: e.footer.rights }),
          o.jsx("a", {
            href: privacyHref(F().lang),
            className: "text-bg-light underline",
            children: e.footer.privacy,
          }),
          o.jsx("a", {
            href: "/signin",
            className: "text-bg-light underline",
            children: e.nav.signIn,
          }),
        ],
      }),
    ],
  });
}
const Ih = 5e3;
function MbPause() {
  return o.jsxs("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      o.jsx("rect", { x: "3", y: "2", width: "4.5", height: "14", rx: "1" }),
      o.jsx("rect", { x: "10.5", y: "2", width: "4.5", height: "14", rx: "1" }),
    ],
  });
}
function MbPlay() {
  return o.jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "currentColor",
    "aria-hidden": "true",
    children: o.jsx("path", { d: "M5 2.5v13l10-6.5z" }),
  });
}
function Rh() {
  const { t: e } = F(),
    t = e.product,
    [n, r] = y.useState(0),
    [l, a] = y.useState(!1),
    [i, s] = y.useState(!1),
    [u, c] = y.useState(!1);
  y.useEffect(() => {
    var h;
    const m =
      (h = window.matchMedia) == null
        ? void 0
        : h.call(window, "(prefers-reduced-motion: reduce)");
    c(!!(m != null && m.matches));
  }, []);
  const g = l || i || u;
  return (
    y.useEffect(() => {
      if (g) return;
      const m = window.setInterval(() => r((h) => (h + 1) % 3), Ih);
      return () => window.clearInterval(m);
    }, [g]),
    o.jsxs("div", {
      className: "flex flex-col items-center gap-4",
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      onFocus: () => a(!0),
      onBlur: () => a(!1),
      children: [
        o.jsx("div", {
          role: "tablist",
          "aria-label": t.mockLabel,
          className: "flex flex-wrap justify-center gap-2",
          children: t.tabs.map((m, h) =>
            o.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                id: `mock-tab-${h}`,
                "aria-selected": n === h,
                "aria-controls": "mock-panel",
                onClick: () => r(h),
                className: `min-h-[44px] rounded-sm px-4 text-small font-semibold transition-colors ${n === h ? "bg-main text-bg-light" : "border border-line text-ink hover:border-main"}`,
                children: m,
              },
              m,
            ),
          ),
        }),
        o.jsx("div", {
          className:
            "w-[300px] rounded-[44px] bg-bg-dark p-3 shadow-[0_24px_48px_-24px_rgba(24,24,58,0.45)]",
          children: o.jsxs("div", {
            id: "mock-panel",
            role: "tabpanel",
            "aria-labelledby": `mock-tab-${n}`,
            className:
              "relative h-[560px] overflow-hidden rounded-[34px] bg-bg-light",
            children: [
              o.jsx("div", {
                className: "mx-auto mt-2 h-6 w-28 rounded-full bg-bg-dark",
                "aria-hidden": "true",
              }),
              o.jsxs("div", {
                className: "px-5 pt-4",
                children: [
                  n === 0 && o.jsx(Oh, {}),
                  n === 1 && o.jsx(Bh, {}),
                  n === 2 && o.jsx(Fh, {}),
                ],
              }),
            ],
          }),
        }),
        o.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            o.jsx("span", { className: "tag", children: t.mockLabel }),
            o.jsx("button", {
              type: "button",
              onClick: () => s((m) => !m),
              "aria-label": i ? t.play : t.pause,
              className:
                "flex h-11 w-11 items-center justify-center rounded-sm border border-line text-main hover:border-main",
              children: i ? o.jsx(MbPlay, {}) : o.jsx(MbPause, {}),
            }),
          ],
        }),
      ],
    })
  );
}
function jo({ children: e }) {
  return o.jsx("p", {
    className: "font-heading text-[22px] font-semibold leading-7 text-ink",
    children: e,
  });
}
function Oh() {
  const e = F().t.product.focus,
    t = 84,
    n = 2 * Math.PI * t;
  return o.jsxs("div", {
    className: "flex flex-col items-center gap-5 pt-4",
    children: [
      o.jsx(jo, { children: F().t.product.tabs[0] }),
      o.jsxs("div", {
        className: "relative h-[200px] w-[200px]",
        children: [
          o.jsxs("svg", {
            viewBox: "0 0 200 200",
            className: "h-full w-full -rotate-90",
            "aria-hidden": "true",
            children: [
              o.jsx("circle", {
                cx: "100",
                cy: "100",
                r: t,
                fill: "none",
                stroke: "#D9D9E6",
                strokeWidth: "14",
              }),
              o.jsx("circle", {
                cx: "100",
                cy: "100",
                r: t,
                fill: "none",
                stroke: "#3F3D99",
                strokeWidth: "14",
                strokeLinecap: "round",
                strokeDasharray: n,
                strokeDashoffset: n * 0.25,
              }),
            ],
          }),
          o.jsx("span", {
            className:
              "absolute inset-0 flex items-center justify-center font-heading text-[44px] font-bold text-ink",
            children: e.timer,
          }),
        ],
      }),
      o.jsxs("p", {
        className: "flex items-center gap-2 text-small font-semibold text-ink",
        children: [
          o.jsx(ah, {
            size: 16,
            "aria-hidden": "true",
            className: "text-main",
          }),
          " ",
          e.paused,
        ],
      }),
      o.jsx("span", { className: "btn-main w-full", children: e.start }),
      o.jsx("span", { className: "tag", children: e.next }),
    ],
  });
}
function Bh() {
  const { t: e } = F(),
    t = e.product.path;
  return o.jsxs("div", {
    className: "flex flex-col gap-4 pt-2",
    children: [
      o.jsx(jo, { children: e.product.tabs[1] }),
      o.jsx("p", { className: "label text-ink-soft", children: t.today }),
      o.jsx("ul", {
        className: "flex flex-col gap-2",
        children: t.goals.map((n, r) =>
          o.jsxs(
            "li",
            {
              className:
                "flex items-center gap-3 rounded-md border border-line bg-white p-3 text-small text-ink",
              children: [
                o.jsx("span", {
                  className: `flex h-6 w-6 flex-none items-center justify-center rounded-full ${r === 0 ? "bg-main text-bg-light" : "border-2 border-line"}`,
                  children:
                    r === 0 && o.jsx(Sr, { size: 14, "aria-hidden": "true" }),
                }),
                n,
              ],
            },
            n,
          ),
        ),
      }),
      o.jsx("p", {
        className: "label pt-2 text-ink-soft",
        children: t.progress,
      }),
      [
        [t.home, 70, mh],
        [t.centre, 45, pd],
      ].map(([n, r, l]) => {
        const a = l;
        return o.jsxs(
          "div",
          {
            className: "flex flex-col gap-1",
            children: [
              o.jsxs("div", {
                className:
                  "flex items-center justify-between text-small text-ink",
                children: [
                  o.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      o.jsx(a, {
                        size: 16,
                        "aria-hidden": "true",
                        className: "text-main",
                      }),
                      n,
                    ],
                  }),
                  o.jsxs("span", {
                    className: "font-semibold",
                    children: [r, "%"],
                  }),
                ],
              }),
              o.jsx("div", {
                className: "h-2 rounded-full bg-line",
                children: o.jsx("div", {
                  className: "h-2 rounded-full bg-main",
                  style: { width: `${r}%` },
                }),
              }),
            ],
          },
          n,
        );
      }),
    ],
  });
}
function Fh() {
  const { t: e, lang: t } = F(),
    n = e.product.parent,
    r = [1, 1, 0, 1, 1],
    l = new Intl.DateTimeFormat(t, { weekday: "narrow" }),
    a = r.map((i, s) => l.format(new Date(2026, 0, 5 + s)));
  return o.jsxs("div", {
    className: "flex flex-col gap-4 pt-2",
    children: [
      o.jsx(jo, { children: n.week }),
      o.jsxs("div", {
        className: "rounded-md border border-line bg-white p-4",
        children: [
          o.jsx("div", {
            className: "flex items-end justify-between gap-2",
            "aria-hidden": "true",
            children: r.map((i, s) =>
              o.jsxs(
                "div",
                {
                  className: "flex flex-1 flex-col items-center gap-1",
                  children: [
                    o.jsx("div", {
                      className: `w-full rounded-sm ${i ? "bg-main" : "bg-line"}`,
                      style: { height: i ? 56 : 20 },
                    }),
                    o.jsx("span", {
                      className: "text-[12px] text-ink-soft",
                      children: a[s],
                    }),
                  ],
                },
                s,
              ),
            ),
          }),
          o.jsx("p", {
            className: "mt-3 text-small font-semibold text-ink",
            children: n.sessions,
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex gap-3 rounded-md border border-line bg-white p-4",
        children: [
          o.jsx(sh, {
            size: 20,
            "aria-hidden": "true",
            className: "flex-none text-main",
          }),
          o.jsxs("div", {
            children: [
              o.jsx("p", {
                className: "text-small font-semibold text-ink",
                children: n.next,
              }),
              o.jsx("p", {
                className: "text-small text-ink-soft",
                children: n.nextWhen,
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex gap-3 rounded-md bg-main p-4 text-bg-light",
        children: [
          o.jsx(vh, {
            size: 20,
            "aria-hidden": "true",
            className: "flex-none",
          }),
          o.jsxs("div", {
            children: [
              o.jsx("p", {
                className: "text-small font-semibold",
                children: n.message,
              }),
              o.jsx("p", { className: "text-small", children: n.messageText }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Xt({ label: e, title: t, body: n, onDark: r = !1 }) {
  return o.jsxs("div", {
    className: "flex max-w-[760px] flex-col gap-4",
    children: [
      o.jsx("p", {
        className: `label ${r ? "text-bg-light" : "text-main"}`,
        children: e,
      }),
      o.jsx("h2", {
        className: `text-[32px] font-semibold leading-10 md:text-h2 ${r ? "text-bg-light" : "text-ink"}`,
        children: t,
      }),
      n &&
        o.jsx("p", {
          className: r ? "text-bg-light" : "text-ink-soft",
          children: n,
        }),
    ],
  });
}
function MbPicture({
  name: e,
  alt: t,
  eager: n = !1,
  sizes: r,
  widths: l,
}) {
  const a = (i, s) => `/images/${e}-${s}.${i}`,
    u = (i) => l.map((s) => `${a(i, s)} ${s}w`).join(", ");
  return o.jsxs("picture", {
    children: [
      o.jsx("source", { type: "image/avif", srcSet: u("avif"), sizes: r }),
      o.jsx("source", { type: "image/webp", srcSet: u("webp"), sizes: r }),
      o.jsx("img", {
        className: "mb-photo",
        src: a("webp", 768),
        alt: t,
        width: 1152,
        height: 768,
        sizes: r,
        loading: n ? "eager" : "lazy",
        decoding: "async",
        ...(n ? { fetchPriority: "high" } : {}),
      }),
    ],
  });
}
function Dh() {
  const { t: e } = F(),
    t = wo(),
    n = e.hero;
  return o.jsxs("div", {
    className:
      "container-mb grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16",
    children: [
      o.jsxs("div", {
        className: "flex flex-col gap-6",
        children: [
          o.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: n.tags.map((r) =>
              o.jsx("span", { className: "tag", children: r }, r),
            ),
          }),
          o.jsx("h1", {
            className:
              "text-[40px] font-bold leading-[48px] text-ink md:text-h1",
            children: n.title,
          }),
          o.jsx("p", { className: "text-ink-soft", children: n.subtitle }),
          o.jsxs("div", {
            className: "flex flex-wrap gap-4",
            children: [
              o.jsx("button", {
                type: "button",
                className: "btn-main",
                onClick: () => t("contact"),
                children: n.ctaWaitlist,
              }),
              o.jsx("button", {
                type: "button",
                className: "btn-second",
                onClick: () => t("product"),
                children: n.ctaProduct,
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex flex-col gap-6",
        children: [
          o.jsx("div", {
            className: "mb-photo-frame",
            children: o.jsx(MbPicture, {
              name: "hero",
              alt: e.photos.hero,
              eager: !0,
              sizes: "(min-width: 1024px) 520px, calc(100vw - 3rem)",
              widths: [480, 768, 1152],
            }),
          }),
          o.jsxs("figure", {
        className:
          "flex flex-col gap-6 rounded-lg bg-bg-dark p-8 text-bg-light md:p-12",
        children: [
          o.jsx("blockquote", {
            lang: "es",
            className:
              "font-heading text-[32px] font-semibold leading-10 md:text-h2",
            children: "“Las tardes de deberes no tienen fin.”",
          }),
          n.quoteTranslation !== "Las tardes de deberes no tienen fin." &&
            o.jsx("p", { children: n.quoteTranslation }),
          o.jsx("figcaption", {
            className: "text-small",
            children: n.quoteSource,
          }),
        ],
      }),
        ],
      }),
    ],
  });
}
function Ah() {
  const { t: e } = F(),
    t = e.problem;
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-12",
    children: [
      o.jsxs("div", {
        className: "grid items-center gap-12 lg:grid-cols-2",
        children: [
          o.jsx(Xt, { label: t.label, title: t.title, body: t.body }),
          o.jsxs("figure", {
            className: "card flex flex-col gap-4 p-8",
            children: [
              o.jsx("blockquote", {
                lang: "ca",
                className: "font-heading text-h3 text-ink",
                children: "“…i ningú no m’ajuda!”",
              }),
              o.jsxs("p", {
                className: "text-ink-soft",
                children: ["“", t.quoteTranslation, "”"],
              }),
              o.jsx("figcaption", {
                className: "hint",
                children: t.quoteSource,
              }),
            ],
          }),
        ],
      }),
      o.jsx("div", {
        className: "grid gap-8 md:grid-cols-3",
        children: t.stats.map((n) =>
          o.jsxs(
            "div",
            {
              className: "flex flex-col gap-2",
              children: [
                o.jsx("span", {
                  className:
                    "font-heading text-[48px] font-bold leading-[56px] text-main md:text-h1",
                  children: n.value,
                }),
                o.jsx("span", {
                  className: "text-ink-soft",
                  children: n.label,
                }),
              ],
            },
            n.value,
          ),
        ),
      }),
      o.jsx("p", { className: "hint", children: t.sources }),
    ],
  });
}
function Uh() {
  const { t: e } = F(),
    t = e.solution,
    n = [ih, Sh, Eh],
    r = ["study", "focus", "friends"];
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-12",
    children: [
      o.jsx(Xt, { label: t.label, title: t.title, body: t.body }),
      o.jsx("div", {
        className: "grid gap-6 md:grid-cols-3",
        children: t.cards.map((l, a) => {
          const i = n[a],
            s = r[a];
          return o.jsxs(
            "div",
            {
              className: "card card-photo flex flex-col",
              children: [
                o.jsx("div", {
                  className: "card-media",
                  children: o.jsx(MbPicture, {
                    name: s,
                    alt: e.photos[s],
                    sizes: "(min-width: 768px) 30vw, calc(100vw - 3rem)",
                    widths: [480, 768],
                  }),
                }),
                o.jsxs("div", {
                  className: "card-body",
                  children: [
                    o.jsx(i, {
                      size: 32,
                      className: "text-main",
                      "aria-hidden": "true",
                    }),
                    o.jsx("h3", {
                      className: "text-h3 text-ink",
                      children: l.title,
                    }),
                    o.jsx("p", { className: "text-ink-soft", children: l.body }),
                  ],
                }),
              ],
            },
            l.title,
          );
        }),
      }),
    ],
  });
}
function bh() {
  const { t: e } = F(),
    t = e.product,
    n = ({ title: r, items: l, photo: a, caption: i }) =>
      o.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [
          o.jsx("h3", { className: "text-h3 text-ink", children: r }),
          a &&
            o.jsxs("figure", {
              className: "flex flex-col gap-2",
              children: [
                o.jsx("div", {
                  className: "mb-photo-frame",
                  children: o.jsx(MbPicture, {
                    name: a,
                    alt: e.photos.space,
                    sizes: "(min-width: 1024px) 420px, calc(100vw - 3rem)",
                    widths: [480, 768, 1152],
                  }),
                }),
                o.jsx("figcaption", { className: "hint", children: i }),
              ],
            }),
          l.map(([s, u]) =>
            o.jsxs(
              "div",
              {
                className: "card flex flex-col gap-1 p-5",
                children: [
                  o.jsx("p", {
                    className: "font-semibold text-ink",
                    children: s,
                  }),
                  o.jsx("p", {
                    className: "text-small text-ink-soft",
                    children: u,
                  }),
                ],
              },
              s,
            ),
          ),
        ],
      });
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-12",
    children: [
      o.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [
          o.jsx("span", { className: "tag self-start", children: t.tag }),
          o.jsx(Xt, { label: t.label, title: t.title, body: t.body }),
        ],
      }),
      o.jsxs("div", {
        className: "grid items-start gap-12 lg:grid-cols-[auto_1fr]",
        children: [
          o.jsx(Rh, {}),
          o.jsxs("div", {
            className: "grid gap-8 md:grid-cols-2",
            children: [
              o.jsx(n, { title: t.appTitle, items: t.app }),
              o.jsx(n, {
                title: t.centreTitle,
                items: t.centre,
                photo: "space",
                caption: e.photos.spaceCaption,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function $h() {
  const { t: e } = F(),
    t = e.gap,
    n = [[0], [1], [2], []],
    r = [[], [], [], [0, 1, 3, 4, 5]],
    l = (a, i) =>
      r[i].includes(a)
        ? o.jsx("span", {
            className: "mb-nowrap text-small font-semibold text-main",
            children: t.planned,
          })
        : n[i].includes(a)
          ? o.jsx(Sr, {
              size: 22,
              className: "text-main",
              "aria-label": t.yes,
            })
          : o.jsx(yh, {
              size: 22,
              className: "text-ink-soft",
              "aria-label": t.no,
            });
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-8",
    children: [
      o.jsx(Xt, { label: t.label, title: t.title }),
      o.jsx("p", { className: "text-ink-soft", children: t.footnote }),
      o.jsx("div", {
        className: "compare-cards",
        children: t.rows.map((a, i) =>
          o.jsxs(
            "article",
            {
              className: "card flex flex-col gap-3 p-5",
              children: [
                o.jsx("h3", {
                  className: "text-small font-semibold text-ink",
                  children: a,
                }),
                o.jsx("ul", {
                  className: "flex flex-col",
                  children: t.cols.map((s, u) =>
                    o.jsxs(
                      "li",
                      {
                        className:
                          "flex items-center justify-between gap-3 border-t border-line py-3",
                        children: [
                          o.jsx("span", {
                            className: "text-small text-ink",
                            children: s,
                          }),
                          l(i, u),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
              ],
            },
            a,
          ),
        ),
      }),
      o.jsx("div", {
        className: "compare-table overflow-x-auto rounded-md border border-line",
        children: o.jsxs("table", {
          className: "w-full border-collapse text-left",
          children: [
            o.jsx("thead", {
              children: o.jsxs("tr", {
                className: "border-b border-line",
                children: [
                  o.jsx("th", {
                    scope: "col",
                    className: "p-4",
                    children: o.jsx("span", {
                      className: "sr-only",
                      children: "—",
                    }),
                  }),
                  t.cols.map((a, i) =>
                    o.jsx(
                      "th",
                      {
                        scope: "col",
                        className: `p-4 text-small font-semibold ${i === 3 ? "bg-main text-bg-light" : "text-ink"}`,
                        children:
                          i === 3
                            ? o.jsxs("span", {
                                className: "flex flex-col gap-1",
                                children: [
                                  a,
                                  o.jsx("span", {
                                    className: "text-[12px] font-semibold",
                                    style: { color: "#F5C443" },
                                    children: t.planned,
                                  }),
                                ],
                              })
                            : a,
                      },
                      a,
                    ),
                  ),
                ],
              }),
            }),
            o.jsx("tbody", {
              children: t.rows.map((a, i) =>
                o.jsxs(
                  "tr",
                  {
                    className: "border-b border-line last:border-0",
                    children: [
                      o.jsx("th", {
                        scope: "row",
                        className: "p-4 text-small font-semibold text-ink",
                        children: a,
                      }),
                      t.cols.map((s, u) =>
                        o.jsx(
                          "td",
                          {
                            className: `p-4 ${u === 3 ? "bg-main/10" : ""}`,
                            children: l(i, u),
                          },
                          s,
                        ),
                      ),
                    ],
                  },
                  a,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Wh() {
  const { t: e } = F(),
    t = e.model,
    n = [Nh, pd, oh];
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-12",
    children: [
      o.jsx(Xt, { label: t.label, title: t.title }),
      o.jsx("div", {
        className: "grid gap-6 md:grid-cols-3",
        children: t.cards.map((r, l) => {
          const a = n[l];
          return o.jsxs(
            "div",
            {
              className: "card flex flex-col gap-4",
              children: [
                o.jsx(a, {
                  size: 32,
                  className: "text-main",
                  "aria-hidden": "true",
                }),
                o.jsx("h3", {
                  className: "text-h3 text-ink",
                  children: r.title,
                }),
                o.jsx("p", { className: "text-ink-soft", children: r.body }),
              ],
            },
            r.title,
          );
        }),
      }),
      o.jsx("span", { className: "tag self-start", children: t.note }),
    ],
  });
}
function Vh() {
  const { t: e } = F(),
    t = e.roadmap;
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-12",
    children: [
      o.jsx(Xt, { label: t.label, title: t.title }),
      o.jsx("ol", {
        className: "grid gap-6 md:grid-cols-3",
        children: t.steps.map((n, r) =>
          o.jsxs(
            "li",
            {
              className: "relative flex flex-col gap-4",
              children: [
                o.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    o.jsx("span", {
                      className: `flex h-12 w-12 flex-none items-center justify-center rounded-full font-heading text-[20px] font-bold ${r === 0 ? "bg-main text-bg-light" : "border-2 border-main text-main"}`,
                      children: r + 1,
                    }),
                    r < t.steps.length - 1 &&
                      o.jsx("span", {
                        className: "hidden h-[2px] flex-1 bg-line md:block",
                        "aria-hidden": "true",
                      }),
                  ],
                }),
                o.jsx("p", { className: "label text-main", children: n.when }),
                o.jsx("p", {
                  className: "font-heading text-h3 text-ink",
                  children: n.what,
                }),
              ],
            },
            n.when,
          ),
        ),
      }),
    ],
  });
}
function Hh() {
  const { t: e, lang: p } = F(),
    t = e.contact,
    [n, r] = y.useState({ name: "", email: "", message: "", consent: !1 }),
    [l, a] = y.useState(!1),
    [i, s] = y.useState(!1),
    u = (c) => {
      c.preventDefault();
      const g = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email);
      if (!n.name.trim() || !g || !n.consent) {
        a(!0);
        return;
      }
      (a(!1),
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...n, kind: "waitlist", language: p }),
        })
          .then((R) => {
            R.ok ? s(!0) : a(!0);
          })
          .catch(() => a(!0)));
    };
  return o.jsxs("div", {
    className: "container-mb flex flex-col gap-8",
    children: [
      o.jsx(Xt, { label: t.label, title: t.title, body: t.body, onDark: !0 }),
      o.jsx("div", {
        className: "rounded-lg bg-bg-light p-6 text-ink md:p-8",
        children: i
          ? o.jsxs("p", {
              role: "status",
              className:
                "flex items-center gap-3 font-heading text-h3 text-ink",
              children: [
                o.jsx(Sr, { className: "text-main", "aria-hidden": "true" }),
                " ",
                t.success,
              ],
            })
          : o.jsxs("form", {
              onSubmit: u,
              noValidate: !0,
              className: "flex flex-col gap-6",
              children: [
                o.jsxs("div", {
                  className: "grid gap-6 md:grid-cols-2",
                  children: [
                    o.jsx(ja, {
                      id: "c-name",
                      label: t.name,
                      children: o.jsx("input", {
                        id: "c-name",
                        className: "input",
                        autoComplete: "name",
                        value: n.name,
                        onChange: (c) => r({ ...n, name: c.target.value }),
                      }),
                    }),
                    o.jsx(ja, {
                      id: "c-email",
                      label: t.email,
                      children: o.jsx("input", {
                        id: "c-email",
                        type: "email",
                        className: "input",
                        autoComplete: "email",
                        value: n.email,
                        onChange: (c) => r({ ...n, email: c.target.value }),
                      }),
                    }),
                  ],
                }),
                o.jsx(ja, {
                  id: "c-message",
                  label: t.message,
                  children: o.jsx("textarea", {
                    id: "c-message",
                    className: "input input-area",
                    rows: 4,
                    value: n.message,
                    onChange: (c) => r({ ...n, message: c.target.value }),
                  }),
                }),
                o.jsxs("div", {
                  className: "flex items-start gap-3 text-small",
                  children: [
                    o.jsx("input", {
                      id: "c-consent",
                      type: "checkbox",
                      className: "mt-0.5 h-5 w-5 flex-none accent-main",
                      checked: n.consent,
                      onChange: (c) => r({ ...n, consent: c.target.checked }),
                    }),
                    o.jsxs("span", {
                      children: [
                        o.jsx("label", {
                          htmlFor: "c-consent",
                          children: t.consentBefore + " ",
                        }),
                        o.jsx("a", {
                          href: privacyHref(p),
                          className: "font-semibold text-main underline",
                          children: t.consentLink,
                        }),
                        o.jsx("label", {
                          htmlFor: "c-consent",
                          children: " " + t.consentAfter,
                        }),
                      ],
                    }),
                  ],
                }),
                l &&
                  o.jsx("p", {
                    role: "alert",
                    className: "error",
                    children: t.required,
                  }),
                o.jsx("div", {
                  children: o.jsx("button", {
                    type: "submit",
                    className: "btn-main",
                    children: t.submit,
                  }),
                }),
              ],
            }),
      }),
    ],
  });
}
function ja({ id: e, label: t, children: n }) {
  return o.jsxs("div", {
    className: "flex flex-col gap-2",
    children: [
      o.jsx("label", { htmlFor: e, className: "field-label", children: t }),
      n,
    ],
  });
}
const tl = [
  { id: "top", Component: Dh },
  { id: "problem", Component: Ah },
  { id: "solution", Component: Uh },
  { id: "product", Component: bh },
  { id: "why-us", Component: $h },
  { id: "model", Component: Wh },
  { id: "roadmap", Component: Vh },
  { id: "contact", tone: "main", Component: Hh },
];
function Qh({ index: e, setIndex: t, onExit: n }) {
  const { t: r } = F(),
    l = y.useRef(null),
    a = tl.length,
    i = y.useCallback(() => t(Math.max(0, e - 1)), [e, t]),
    s = y.useCallback(() => t(Math.min(a - 1, e + 1)), [e, a, t]),
    u = y.useCallback(() => {
      try {
        document.fullscreenElement && document.exitFullscreen().catch(() => {});
      } catch {}
      n();
    }, [n]);
  (y.useEffect(() => {
    var h, v;
    try {
      const x =
        (v = (h = l.current) == null ? void 0 : h.requestFullscreen) == null
          ? void 0
          : v.call(h);
      x && x.catch(() => {});
    } catch {}
    const m = () => {};
    return (
      document.addEventListener("fullscreenchange", m),
      () => document.removeEventListener("fullscreenchange", m)
    );
  }, []),
    y.useEffect(() => {
      const m = (h) => {
        var x;
        const v = (x = h.target) == null ? void 0 : x.tagName;
        v === "INPUT" ||
          v === "TEXTAREA" ||
          v === "SELECT" ||
          ((h.key === "ArrowRight" || h.key === "PageDown" || h.key === " ") &&
            (h.preventDefault(), s()),
          (h.key === "ArrowLeft" || h.key === "PageUp") &&
            (h.preventDefault(), i()),
          h.key === "Escape" && u());
      };
      return (
        window.addEventListener("keydown", m),
        () => window.removeEventListener("keydown", m)
      );
    }, [s, i, u]));
  const c = tl[e],
    g = c.tone === "main" ? "bg-main text-bg-light" : "bg-bg-light text-ink";
  return o.jsxs("div", {
    ref: l,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": r.nav.present,
    className: `fixed inset-0 z-50 flex flex-col ${g}`,
    children: [
      o.jsxs("div", {
        className: "flex items-center justify-between px-6 py-4",
        children: [
          o.jsx(Ql, { size: 28, onDark: c.tone === "main" }),
          o.jsxs("button", {
            type: "button",
            onClick: u,
            className: `btn min-h-[44px] px-4 text-small ${c.tone === "main" ? "bg-bg-light text-main" : "btn-second"}`,
            children: [
              o.jsx(md, { size: 18, "aria-hidden": "true" }),
              " ",
              r.present.exit,
            ],
          }),
        ],
      }),
      o.jsx(
        "div",
        {
          className: "flex flex-1 items-center overflow-y-auto py-8",
          children: o.jsx("div", {
            className: "w-full",
            children: o.jsx(c.Component, {}),
          }),
        },
        c.id,
      ),
      o.jsxs("div", {
        className: "flex items-center justify-between gap-4 px-6 py-4",
        children: [
          o.jsx("span", {
            className: "hidden text-small md:inline",
            children: r.present.hint,
          }),
          o.jsx("div", {
            className: "flex items-center gap-1",
            "aria-hidden": "true",
            children: tl.map((m, h) =>
              o.jsx(
                "span",
                {
                  className: `h-2 rounded-full transition-all ${h === e ? "w-6 bg-accent" : `w-2 ${c.tone === "main" ? "bg-bg-light/50" : "bg-line"}`}`,
                },
                m.id,
              ),
            ),
          }),
          o.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              o.jsxs("span", {
                className: "text-small font-semibold",
                "aria-live": "polite",
                children: [e + 1, " / ", a],
              }),
              o.jsx("button", {
                type: "button",
                onClick: i,
                disabled: e === 0,
                "aria-label": r.present.prev,
                className: `flex h-11 w-11 items-center justify-center rounded-sm disabled:opacity-40 ${c.tone === "main" ? "bg-bg-light text-main" : "border border-line text-main"}`,
                children: o.jsx(uh, { "aria-hidden": "true" }),
              }),
              o.jsx("button", {
                type: "button",
                onClick: s,
                disabled: e === a - 1,
                "aria-label": r.present.next,
                className: `flex h-11 w-11 items-center justify-center rounded-sm disabled:opacity-40 ${c.tone === "main" ? "bg-bg-light text-main" : "bg-main text-bg-light"}`,
                children: o.jsx(ch, { "aria-hidden": "true" }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qh() {
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(0),
    l = lt(),
    a = Gt(),
    i = tl.filter((s) => s.id !== "model");
  return (
    y.useEffect(() => {
      var u;
      const s = (u = l.state) == null ? void 0 : u.scrollTo;
      s &&
        (requestAnimationFrame(() => {
          var c;
          return (c = document.getElementById(s)) == null
            ? void 0
            : c.scrollIntoView({ behavior: "smooth" });
        }),
        a(".", { replace: !0, state: null }));
    }, [l.state, a]),
    y.useEffect(() => {
      if (new URLSearchParams(window.location.search).get("present") === "1") {
        (r(0), t(!0));
      }
    }, []),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(ko, {}),
        o.jsx("main", {
          children: i.map(({ id: s, tone: u, Component: c }, g) =>
            o.jsx(
              "section",
              {
                id: s,
                className: `section ${u === "main" ? "bg-main text-bg-light" : g > 0 ? "border-t border-line" : ""}`,
                children: o.jsx(c, {}),
              },
              s,
            ),
          ),
        }),
        o.jsx(So, {}),
        e &&
          o.jsx(Qh, {
            index: n,
            setIndex: r,
            onExit: () => {
              t(!1);
              const s = new URL(window.location.href);
              s.searchParams.delete("present");
              history.replaceState(
                history.state,
                "",
                s.pathname + s.search + s.hash,
              );
            },
          }),
      ],
    })
  );
}
function _l({ children: e, wide: t = !1 }) {
  const { t: n } = F(),
    { isDemo: r } = Yt();
  return o.jsxs("div", {
    className: "flex min-h-screen flex-col",
    children: [
      o.jsx("header", {
        className: "border-b border-line",
        children: o.jsxs("div", {
          className: "container-mb flex items-center justify-between py-3",
          children: [
            o.jsx(Fe, {
              to: "/",
              "aria-label": "MindBloom home",
              children: o.jsx(Ql, { size: 32 }),
            }),
            o.jsx(Pl, {}),
          ],
        }),
      }),
      o.jsx("main", {
        className: "flex flex-1 items-start justify-center px-6 py-12 md:py-16",
        children: o.jsxs("div", {
          className: `w-full ${t ? "max-w-[720px]" : "max-w-[460px]"} flex flex-col gap-6`,
          children: [
            e,
            r &&
              o.jsx("p", {
                className: "hint text-center",
                children: n.auth.demo,
              }),
          ],
        }),
      }),
    ],
  });
}
function No({ id: e, value: t, onChange: n, autoComplete: r }) {
  const { t: l } = F(),
    [a, i] = y.useState(!1);
  return o.jsxs("div", {
    className: "relative",
    children: [
      o.jsx("input", {
        id: e,
        type: a ? "text" : "password",
        className: "input pr-14",
        value: t,
        autoComplete: r,
        onChange: (s) => n(s.target.value),
        "aria-describedby": `${e}-hint`,
      }),
      o.jsx("button", {
        type: "button",
        onClick: () => i((s) => !s),
        "aria-label": a ? l.auth.hide : l.auth.show,
        "aria-pressed": a,
        className:
          "absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm text-ink-soft hover:text-main",
        children: a
          ? o.jsx(fh, { size: 20, "aria-hidden": "true" })
          : o.jsx(ph, { size: 20, "aria-hidden": "true" }),
      }),
    ],
  });
}
function kd() {
  return o.jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: [
      o.jsx("path", {
        fill: "#EA4335",
        d: "M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.8 6C12.4 13.4 17.7 9.5 24 9.5z",
      }),
      o.jsx("path", {
        fill: "#4285F4",
        d: "M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17z",
      }),
      o.jsx("path", {
        fill: "#FBBC05",
        d: "M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.8-6C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.8-6z",
      }),
      o.jsx("path", {
        fill: "#34A853",
        d: "M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.8 2.2-8.5 2.2-6.3 0-11.6-3.9-13.5-9.8l-7.8 6C6.6 42.6 14.6 48 24 48z",
      }),
    ],
  });
}
function Kh() {
  var j;
  const { t: e } = F(),
    t = e.auth,
    { user: n, profile: r, signUp: l, signInWithGoogle: a, isDemo: i } = Yt(),
    s = Gt(),
    u = (j = lt().state) == null ? void 0 : j.deleted,
    [c, g] = y.useState(""),
    [m, h] = y.useState(""),
    [v, x] = y.useState(null),
    [k, C] = y.useState(!1),
    [f, d] = y.useState(!1);
  y.useEffect(() => {
    n && r && s(r.completed ? "/account" : "/welcome", { replace: !0 });
  }, [n, r, s]);
  const p = async (N) => {
      if ((N.preventDefault(), !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))) {
        x("email");
        return;
      }
      (C(!0), x(null));
      const _ = await l(c, m);
      if ((C(!1), _.error)) {
        x(_.error);
        return;
      }
      i || d(!0);
    },
    w = async () => {
      C(!0);
      const N = await a();
      (C(!1), N.error && x(N.error));
    };
  return o.jsxs(_l, {
    children: [
      u &&
        o.jsxs("p", {
          role: "status",
          className: "card flex items-center gap-2 text-small font-semibold",
          children: [
            o.jsx(Sr, {
              size: 18,
              className: "text-main",
              "aria-hidden": "true",
            }),
            " ",
            e.account.deleted,
          ],
        }),
      o.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          o.jsx("h1", { className: "text-h2 text-ink", children: t.joinTitle }),
          o.jsx("p", { className: "text-ink-soft", children: t.joinBody }),
        ],
      }),
      f
        ? o.jsx("p", {
            role: "status",
            className: "card font-semibold",
            children: t.checkEmail,
          })
        : o.jsxs(o.Fragment, {
            children: [
              o.jsxs("button", {
                type: "button",
                onClick: w,
                disabled: k,
                className:
                  "btn w-full border border-line bg-white text-ink hover:border-main",
                children: [o.jsx(kd, {}), " ", t.google],
              }),
              o.jsxs("div", {
                className: "flex items-center gap-4 text-small text-ink-soft",
                "aria-hidden": "true",
                children: [
                  o.jsx("span", { className: "h-px flex-1 bg-line" }),
                  " ",
                  t.or,
                  " ",
                  o.jsx("span", { className: "h-px flex-1 bg-line" }),
                ],
              }),
              o.jsxs("form", {
                onSubmit: p,
                noValidate: !0,
                className: "flex flex-col gap-4",
                children: [
                  o.jsx("p", {
                    className: "label text-ink-soft",
                    children: t.emailSignup,
                  }),
                  o.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      o.jsx("label", {
                        htmlFor: "j-email",
                        className: "field-label",
                        children: t.email,
                      }),
                      o.jsx("input", {
                        id: "j-email",
                        type: "email",
                        className: "input",
                        autoComplete: "email",
                        value: c,
                        onChange: (N) => g(N.target.value),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      o.jsx("label", {
                        htmlFor: "j-pass",
                        className: "field-label",
                        children: t.password,
                      }),
                      o.jsx(No, {
                        id: "j-pass",
                        value: m,
                        onChange: h,
                        autoComplete: "new-password",
                      }),
                      o.jsx("span", {
                        id: "j-pass-hint",
                        className: "hint",
                        children: t.passwordHint,
                      }),
                    ],
                  }),
                  v &&
                    o.jsxs("p", {
                      role: "alert",
                      className: "error",
                      children: [
                        t.errors[v],
                        " ",
                        v === "exists" &&
                          o.jsx(Fe, {
                            to: "/signin",
                            className: "underline",
                            children: t.signInLink,
                          }),
                      ],
                    }),
                  o.jsx("button", {
                    type: "submit",
                    disabled: k,
                    className: "btn-main w-full",
                    children: t.create,
                  }),
                ],
              }),
            ],
          }),
      o.jsxs("p", {
        className: "text-center text-small text-ink-soft",
        children: [
          t.haveAccount,
          " ",
          o.jsx(Fe, {
            to: "/signin",
            className: "font-semibold text-main underline",
            children: t.signInLink,
          }),
        ],
      }),
    ],
  });
}
function Gh() {
  const { t: e } = F(),
    t = e.auth,
    {
      user: n,
      profile: r,
      signIn: l,
      signInWithGoogle: a,
      resetPassword: i,
    } = Yt(),
    s = Gt(),
    [u, c] = y.useState(""),
    [g, m] = y.useState(""),
    [h, v] = y.useState(null),
    [x, k] = y.useState(null),
    [C, f] = y.useState(!1);
  y.useEffect(() => {
    n && r && s(r.completed ? "/account" : "/welcome", { replace: !0 });
  }, [n, r, s]);
  const d = async (w) => {
      (w.preventDefault(), f(!0), v(null), k(null));
      const j = await l(u, g);
      (f(!1), j.error && v(j.error));
    },
    p = async () => {
      if ((v(null), !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u))) {
        k(t.resetNeedEmail);
        return;
      }
      const R = await i(u);
      if (R.error) {
        v(R.error);
        return;
      }
      k(t.resetSent);
    };
  return o.jsxs(_l, {
    children: [
      o.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          o.jsx("h1", {
            className: "text-h2 text-ink",
            children: t.signInTitle,
          }),
          o.jsx("p", { className: "text-ink-soft", children: t.signInBody }),
        ],
      }),
      o.jsxs("button", {
        type: "button",
        onClick: async () => {
          const w = await a();
          w.error && v(w.error);
        },
        className:
          "btn w-full border border-line bg-white text-ink hover:border-main",
        children: [o.jsx(kd, {}), " ", t.google],
      }),
      o.jsxs("div", {
        className: "flex items-center gap-4 text-small text-ink-soft",
        "aria-hidden": "true",
        children: [
          o.jsx("span", { className: "h-px flex-1 bg-line" }),
          " ",
          t.or,
          " ",
          o.jsx("span", { className: "h-px flex-1 bg-line" }),
        ],
      }),
      o.jsxs("form", {
        onSubmit: d,
        noValidate: !0,
        className: "flex flex-col gap-4",
        children: [
          o.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              o.jsx("label", {
                htmlFor: "s-email",
                className: "field-label",
                children: t.email,
              }),
              o.jsx("input", {
                id: "s-email",
                type: "email",
                className: "input",
                autoComplete: "email",
                value: u,
                onChange: (w) => c(w.target.value),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              o.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  o.jsx("label", {
                    htmlFor: "s-pass",
                    className: "field-label",
                    children: t.password,
                  }),
                  o.jsx("button", {
                    type: "button",
                    onClick: p,
                    className:
                      "min-h-[44px] text-small font-semibold text-main underline",
                    children: t.forgot,
                  }),
                ],
              }),
              o.jsx(No, {
                id: "s-pass",
                value: g,
                onChange: m,
                autoComplete: "current-password",
              }),
            ],
          }),
          h &&
            o.jsx("p", {
              role: "alert",
              className: "error",
              children: t.errors[h],
            }),
          x &&
            o.jsx("p", {
              role: "status",
              className: "hint font-semibold",
              children: x,
            }),
          o.jsx("button", {
            type: "submit",
            disabled: C,
            className: "btn-main w-full",
            children: t.signInBtn,
          }),
        ],
      }),
      o.jsxs("p", {
        className: "text-center text-small text-ink-soft",
        children: [
          t.noAccount,
          " ",
          o.jsx(Fe, {
            to: "/join",
            className: "font-semibold text-main underline",
            children: t.joinLink,
          }),
        ],
      }),
    ],
  });
}
function Sd({ value: e, set: t, idPrefix: n }) {
  const r = F().t.welcome;
  return o.jsxs("div", {
    className: "flex flex-col gap-6",
    children: [
      o.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          o.jsx("label", {
            htmlFor: `${n}-name`,
            className: "field-label",
            children: r.firstName,
          }),
          o.jsx("input", {
            id: `${n}-name`,
            className: "input",
            autoComplete: "given-name",
            value: e.parent_name,
            onChange: (l) => t({ parent_name: l.target.value }),
          }),
        ],
      }),
      o.jsxs("fieldset", {
        className: "flex flex-col gap-2",
        children: [
          o.jsx("legend", {
            className: "field-label mb-2",
            children: r.language,
          }),
          o.jsx("div", {
            className: "flex flex-wrap gap-3",
            children: vd.map((l) =>
              o.jsxs(
                "label",
                {
                  className: `flex min-h-[48px] cursor-pointer items-center gap-2 rounded-sm border px-4 ${e.language === l.code ? "border-2 border-main" : "border-line"}`,
                  children: [
                    o.jsx("input", {
                      type: "radio",
                      name: `${n}-lang`,
                      className: "h-5 w-5 accent-main",
                      checked: e.language === l.code,
                      onChange: () => t({ language: l.code }),
                    }),
                    l.name,
                  ],
                },
                l.code,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function jd({ value: e, set: t, idPrefix: n, ageError: r }) {
  const l = F().t.welcome,
    a = ["app", "centre", "both"];
  return o.jsxs("div", {
    className: "flex flex-col gap-6",
    children: [
      o.jsxs("div", {
        className: "grid gap-6 sm:grid-cols-[1fr_160px]",
        children: [
          o.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              o.jsx("label", {
                htmlFor: `${n}-child`,
                className: "field-label",
                children: l.childName,
              }),
              o.jsx("input", {
                id: `${n}-child`,
                className: "input",
                autoComplete: "off",
                value: e.child_name,
                onChange: (i) => t({ child_name: i.target.value }),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              o.jsx("label", {
                htmlFor: `${n}-age`,
                className: "field-label",
                children: l.childAge,
              }),
              o.jsx("input", {
                id: `${n}-age`,
                type: "number",
                inputMode: "numeric",
                min: 6,
                max: 18,
                className: "input",
                "aria-invalid": r || void 0,
                "aria-describedby": `${n}-age-hint`,
                value: e.child_age ?? "",
                onChange: (i) =>
                  t({
                    child_age:
                      i.target.value === "" ? null : Number(i.target.value),
                  }),
              }),
            ],
          }),
        ],
      }),
      o.jsx("p", {
        id: `${n}-age-hint`,
        className: r ? "error -mt-4" : "hint -mt-4",
        children: r ? l.ageError : l.ageHint,
      }),
      o.jsxs("fieldset", {
        className: "flex flex-col gap-3",
        children: [
          o.jsx("legend", {
            className: "field-label mb-1",
            children: l.interest,
          }),
          o.jsx("div", {
            className: "grid gap-3 sm:grid-cols-3",
            children: a.map((i) => {
              const [s, u] = l.interests[i],
                c = e.interest === i;
              return o.jsxs(
                "label",
                {
                  className: `flex cursor-pointer flex-col gap-1 rounded-md p-4 ${c ? "border-[3px] border-main" : "border border-line"}`,
                  children: [
                    o.jsxs("span", {
                      className:
                        "flex items-center gap-2 font-semibold text-ink",
                      children: [
                        o.jsx("input", {
                          type: "radio",
                          name: `${n}-interest`,
                          className: "h-5 w-5 accent-main",
                          checked: c,
                          onChange: () => t({ interest: i }),
                        }),
                        s,
                      ],
                    }),
                    o.jsx("span", {
                      className: "text-small text-ink-soft",
                      children: u,
                    }),
                  ],
                },
                i,
              );
            }),
          }),
        ],
      }),
    ],
  });
}
const Nd = (e) => e !== null && Number.isInteger(e) && e >= 6 && e <= 18;
function Yh() {
  const { t: e, lang: t, setLang: n } = F(),
    r = e.welcome,
    { profile: l, saveProfile: a } = Yt(),
    [i, s] = y.useState({ ...yn, language: t, ...(l ?? {}) }),
    [u, c] = y.useState(l != null && l.completed ? 3 : 1),
    [g, m] = y.useState(!1),
    [h, v] = y.useState(!1),
    [x, k] = y.useState(!1);
  y.useEffect(() => {
    l != null && l.completed && c(3);
  }, [l == null ? void 0 : l.completed]);
  const C = (p) => {
      (s((w) => ({ ...w, ...p })), p.language && n(p.language));
    },
    f = (p) => {
      (p.preventDefault(), c(2));
    },
    d = async (p) => {
      p.preventDefault();
      const w = Nd(i.child_age);
      if ((m(!w), v(!i.consent), !w || !i.consent)) return;
      k(!0);
      const j = await a({ ...i, completed: !0 });
      (k(!1), j.error || c(3));
    };
  return u === 3
    ? o.jsxs(_l, {
        wide: !0,
        children: [
          o.jsxs("div", {
            className: "flex flex-col items-start gap-4",
            children: [
              o.jsx(dh, {
                size: 48,
                className: "text-main",
                "aria-hidden": "true",
              }),
              o.jsx("h1", {
                className: "text-h2 text-ink",
                children: r.doneTitle,
              }),
              o.jsx("p", { className: "text-ink-soft", children: r.doneBody }),
            ],
          }),
          o.jsxs("div", {
            className: "card flex flex-col gap-4",
            children: [
              o.jsx("h2", {
                className: "text-h3 text-ink",
                children: r.nextTitle,
              }),
              o.jsx("ol", {
                className: "flex flex-col gap-3",
                children: r.nextSteps.map((p, w) =>
                  o.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-3",
                      children: [
                        o.jsx("span", {
                          className:
                            "flex h-8 w-8 flex-none items-center justify-center rounded-full bg-main text-small font-semibold text-bg-light",
                          children: w + 1,
                        }),
                        p,
                      ],
                    },
                    p,
                  ),
                ),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex flex-wrap gap-4",
            children: [
              o.jsx(Fe, {
                to: "/account",
                className: "btn-main",
                children: r.toAccount,
              }),
              o.jsx(Fe, {
                to: "/",
                className: "btn-second",
                children: r.toHome,
              }),
            ],
          }),
        ],
      })
    : o.jsxs(_l, {
        wide: !0,
        children: [
          o.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              o.jsxs("p", {
                className: "label text-main",
                children: [r.step, " ", u, " ", r.of, " 2"],
              }),
              o.jsx("div", {
                className: "h-2 w-full rounded-full bg-line",
                role: "progressbar",
                "aria-valuemin": 1,
                "aria-valuemax": 2,
                "aria-valuenow": u,
                "aria-label": `${r.step} ${u} ${r.of} 2`,
                children: o.jsx("div", {
                  className: "h-2 rounded-full bg-main transition-all",
                  style: { width: u === 1 ? "50%" : "100%" },
                }),
              }),
              o.jsx("h1", {
                className: "text-h2 text-ink",
                children: u === 1 ? r.s1Title : r.s2Title,
              }),
            ],
          }),
          u === 1
            ? o.jsxs("form", {
                onSubmit: f,
                className: "flex flex-col gap-8",
                children: [
                  o.jsx(Sd, { value: i, set: C, idPrefix: "w" }),
                  o.jsx("div", {
                    children: o.jsx("button", {
                      type: "submit",
                      className: "btn-main",
                      children: r.next,
                    }),
                  }),
                ],
              })
            : o.jsxs("form", {
                onSubmit: d,
                noValidate: !0,
                className: "flex flex-col gap-8",
                children: [
                  o.jsx(jd, { value: i, set: C, idPrefix: "w", ageError: g }),
                  o.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      o.jsxs("label", {
                        className:
                          "flex cursor-pointer items-start gap-3 text-small",
                        children: [
                          o.jsx("input", {
                            type: "checkbox",
                            className: "mt-0.5 h-5 w-5 accent-main",
                            checked: i.consent,
                            onChange: (p) => C({ consent: p.target.checked }),
                            "aria-invalid": h || void 0,
                          }),
                          o.jsxs("span", {
                            children: [
                              o.jsx("span", { children: r.consentBefore + " " }),
                              o.jsx("a", {
                                href: privacyHref(t),
                                className: "font-semibold text-main underline",
                                children: r.consentLink,
                              }),
                              o.jsx("span", { children: " " + r.consentAfter }),
                            ],
                          }),
                        ],
                      }),
                      h &&
                        o.jsx("p", {
                          role: "alert",
                          className: "error",
                          children: r.consentError,
                        }),
                      o.jsx("p", {
                        className: "hint",
                        children: r.privacyNote,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                      o.jsx("button", {
                        type: "button",
                        className: "btn-second",
                        onClick: () => c(1),
                        children: r.back,
                      }),
                      o.jsx("button", {
                        type: "submit",
                        disabled: x,
                        className: "btn-main",
                        children: r.finish,
                      }),
                    ],
                  }),
                ],
              }),
        ],
      });
}
function Xh() {
  const { t: e, setLang: t } = F(),
    n = e.account,
    {
      user: r,
      profile: l,
      saveProfile: a,
      updatePassword: i,
      deleteAccount: s,
      signOut: u,
    } = Yt(),
    c = Gt(),
    [g, m] = y.useState({ ...yn, ...(l ?? {}) });
  y.useEffect(() => {
    l && m({ ...yn, ...l });
  }, [l]);
  const [h, v] = y.useState(!1),
    [x, k] = y.useState(!1),
    [C, f] = y.useState(""),
    [d, p] = y.useState(null),
    [w, j] = y.useState(null),
    [N, _] = y.useState(!1),
    [T, U] = y.useState(""),
    [z, me] = y.useState(!1),
    at = (we) => {
      (m((qe) => ({ ...qe, ...we })), v(!1));
    },
    Lt = async (we) => {
      if ((we.preventDefault(), !Nd(g.child_age))) {
        k(!0);
        return;
      }
      (k(!1), (await a(g)).error || (v(!0), t(g.language)));
    },
    jr = async (we) => {
      (we.preventDefault(), p(null), j(null));
      const qe = await i(C);
      qe.error ? j(qe.error) : (f(""), p(n.passwordChanged));
    },
    ql = async () => {
      me(!0);
      const we = await s();
      (me(!1), we.error || c("/join", { replace: !0, state: { deleted: !0 } }));
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(ko, {}),
      o.jsxs("main", {
        className:
          "container-mb flex max-w-[800px] flex-col gap-10 py-12 md:py-16",
        children: [
          o.jsxs("div", {
            className: "flex flex-wrap items-end justify-between gap-4",
            children: [
              o.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [
                  o.jsx("h1", {
                    className: "text-h2 text-ink",
                    children: n.title,
                  }),
                  o.jsxs("p", {
                    className: "text-ink-soft",
                    children: [
                      n.signedInAs,
                      " ",
                      o.jsx("span", {
                        className: "font-semibold text-ink",
                        children: r == null ? void 0 : r.email,
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("button", {
                type: "button",
                className: "btn-second",
                onClick: async () => {
                  (await u(), c("/"));
                },
                children: [
                  o.jsx(hh, { size: 18, "aria-hidden": "true" }),
                  " ",
                  n.signOut,
                ],
              }),
            ],
          }),
          o.jsxs("form", {
            onSubmit: Lt,
            noValidate: !0,
            className: "flex flex-col gap-8",
            children: [
              o.jsxs("section", {
                className: "card flex flex-col gap-6 p-6 md:p-8",
                "aria-labelledby": "acc-parent",
                children: [
                  o.jsx("h2", {
                    id: "acc-parent",
                    className: "text-h3 text-ink",
                    children: n.parent,
                  }),
                  o.jsx(Sd, { value: g, set: at, idPrefix: "a" }),
                ],
              }),
              o.jsxs("section", {
                className: "card flex flex-col gap-6 p-6 md:p-8",
                "aria-labelledby": "acc-child",
                children: [
                  o.jsx("h2", {
                    id: "acc-child",
                    className: "text-h3 text-ink",
                    children: n.child,
                  }),
                  o.jsx(jd, { value: g, set: at, idPrefix: "a", ageError: x }),
                ],
              }),
              o.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  o.jsx("button", {
                    type: "submit",
                    className: "btn-main",
                    children: n.save,
                  }),
                  h &&
                    o.jsxs("span", {
                      role: "status",
                      className:
                        "flex items-center gap-2 font-semibold text-main",
                      children: [
                        o.jsx(Sr, { size: 18, "aria-hidden": "true" }),
                        " ",
                        n.saved,
                      ],
                    }),
                ],
              }),
            ],
          }),
          o.jsxs("form", {
            onSubmit: jr,
            className: "card flex flex-col gap-4 p-6 md:p-8",
            "aria-labelledby": "acc-pw",
            children: [
              o.jsx("h2", {
                id: "acc-pw",
                className: "text-h3 text-ink",
                children: n.passwordTitle,
              }),
              o.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [
                  o.jsx("label", {
                    htmlFor: "a-pw",
                    className: "field-label",
                    children: n.newPassword,
                  }),
                  o.jsx(No, {
                    id: "a-pw",
                    value: C,
                    onChange: f,
                    autoComplete: "new-password",
                  }),
                  o.jsx("span", {
                    id: "a-pw-hint",
                    className: "hint",
                    children: e.auth.passwordHint,
                  }),
                ],
              }),
              w &&
                o.jsx("p", {
                  role: "alert",
                  className: "error",
                  children: e.auth.errors[w],
                }),
              d &&
                o.jsx("p", {
                  role: "status",
                  className: "font-semibold text-main",
                  children: d,
                }),
              o.jsx("div", {
                children: o.jsx("button", {
                  type: "submit",
                  className: "btn-second",
                  children: n.changePassword,
                }),
              }),
            ],
          }),
          o.jsxs("section", {
            className:
              "flex flex-col gap-4 rounded-md border-2 border-ink p-6 md:p-8",
            "aria-labelledby": "acc-del",
            children: [
              o.jsx("h2", {
                id: "acc-del",
                className: "text-h3 text-ink",
                children: n.dangerTitle,
              }),
              o.jsx("p", {
                className: "text-ink-soft",
                children: n.dangerBody,
              }),
              N
                ? o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsx("label", {
                        htmlFor: "a-del",
                        className: "field-label",
                        children: n.confirm,
                      }),
                      o.jsx("input", {
                        id: "a-del",
                        className: "input max-w-[280px]",
                        value: T,
                        onChange: (we) => U(we.target.value),
                        autoComplete: "off",
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                          o.jsx("button", {
                            type: "button",
                            className: "btn bg-ink text-bg-light",
                            disabled:
                              T.trim().toUpperCase() !== n.confirmWord || z,
                            onClick: ql,
                            children: n.confirmBtn,
                          }),
                          o.jsx("button", {
                            type: "button",
                            className: "btn-second",
                            onClick: () => {
                              (_(!1), U(""));
                            },
                            children: n.cancel,
                          }),
                        ],
                      }),
                    ],
                  })
                : o.jsx("div", {
                    children: o.jsxs("button", {
                      type: "button",
                      className:
                        "btn border-2 border-ink text-ink hover:bg-ink hover:text-bg-light",
                      onClick: () => _(!0),
                      children: [
                        o.jsx(jh, { size: 18, "aria-hidden": "true" }),
                        " ",
                        n.deleteBtn,
                      ],
                    }),
                  }),
            ],
          }),
        ],
      }),
      o.jsx(So, {}),
    ],
  });
}
function Jh() {
  const { t: e } = F();
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(ko, {}),
      o.jsxs("main", {
        className:
          "container-mb flex min-h-[60vh] flex-col items-start justify-center gap-6 py-24",
        children: [
          o.jsx(hd, { size: 64 }),
          o.jsx("p", { className: "label text-main", children: "404" }),
          o.jsx("h1", {
            className: "text-h2 text-ink",
            children: e.notFound.title,
          }),
          o.jsx("p", { className: "text-ink-soft", children: e.notFound.body }),
          o.jsx(Fe, {
            to: "/",
            className: "btn-main",
            children: e.notFound.home,
          }),
        ],
      }),
      o.jsx(So, {}),
    ],
  });
}
function Zh() {
  const { pathname: e } = lt();
  return (
    y.useEffect(() => {
      window.scrollTo(0, 0);
      if (window.location.pathname !== e) {
        const t = new URL(window.location.href);
        t.pathname = e;
        history.pushState(history.state, "", t.pathname + t.search + t.hash);
      }
    }, [e]),
    null
  );
}
function MbPrivacy() {
  const { t: e } = F(),
    t = e.privacy;
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(ko, {}),
      o.jsxs("main", {
        className:
          "container-mb privacy-prose flex max-w-[760px] flex-col gap-4 py-12 md:py-16",
        children: [
          o.jsx("p", { className: "label text-main", children: t.label }),
          o.jsx("h1", { className: "text-h2 text-ink", children: t.title }),
          o.jsx("p", { className: "hint", children: t.updated }),
          o.jsx("p", { children: t.intro }),
          t.sections.map((n) =>
            o.jsxs(
              "section",
              {
                className: "flex flex-col gap-2",
                children: [
                  o.jsx("h2", { children: n.h }),
                  (n.paragraphs || []).map((r) => o.jsx("p", { children: r }, r)),
                  n.items &&
                    o.jsx("ul", {
                      children: n.items.map((r) =>
                        o.jsx("li", { children: r }, r),
                      ),
                    }),
                  (n.after || []).map((r) => o.jsx("p", { children: r }, r)),
                ],
              },
              n.h,
            ),
          ),
          o.jsxs("section", {
            className: "flex flex-col gap-2",
            children: [
              o.jsx("h2", { children: t.contactTitle }),
              o.jsx("p", { children: t.contactBody }),
              o.jsx("p", {
                children: o.jsx("a", {
                  href: `mailto:${t.contactEmail}`,
                  className: "font-semibold text-main underline",
                  children: t.contactEmail,
                }),
              }),
              o.jsx("p", {
                className: "font-semibold text-ink",
                children: t.contactTodo,
              }),
            ],
          }),
          o.jsx("a", {
            href: "/",
            className: "btn-main self-start",
            children: e.notFound.home,
          }),
        ],
      }),
      o.jsx(So, {}),
    ],
  });
}
function $s({ children: e }) {
  const { user: t, loading: n } = Yt();
  return n
    ? o.jsx("div", {
        className: "container-mb py-24 text-ink-soft",
        children: "…",
      })
    : t
      ? e
      : o.jsx(Hm, { to: "/signin", replace: !0 });
}
function eg() {
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(Zh, {}),
      o.jsxs(qm, {
        children: [
          o.jsx(Ot, { path: "/", element: o.jsx(qh, {}) }),
          o.jsx(Ot, { path: "/privacy", element: o.jsx(MbPrivacy, {}) }),
          o.jsx(Ot, { path: "/join", element: o.jsx(Kh, {}) }),
          o.jsx(Ot, { path: "/signin", element: o.jsx(Gh, {}) }),
          o.jsx(Ot, {
            path: "/welcome",
            element: o.jsx($s, { children: o.jsx(Yh, {}) }),
          }),
          o.jsx(Ot, {
            path: "/account",
            element: o.jsx($s, { children: o.jsx(Xh, {}) }),
          }),
          o.jsx(Ot, { path: "*", element: o.jsx(Jh, {}) }),
        ],
      }),
    ],
  });
}
const tg = Vm;
Na.createRoot(document.getElementById("root")).render(
  o.jsx(Zs.StrictMode, {
    children: o.jsx(tg, {
      initialEntries: [window.location.pathname],
      children: o.jsx(Lh, { children: o.jsx(zh, { children: o.jsx(eg, {}) }) }),
    }),
  }),
);
