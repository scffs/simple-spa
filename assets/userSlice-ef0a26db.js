var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{r as a,c,j as f}from"./index-b9385345.js";import{C as l}from"./Container-eadb3fa1.js";import{u as s,c as p}from"./ThemeProvider-d92d51b7.js";var d={exports:{}},y={},v=a;var b="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},h=v.useState,m=v.useEffect,g=v.useLayoutEffect,w=v.useDebugValue;function O(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!b(e,r)}catch(e){return!0}}var S="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=h({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return g((function(){o.value=r,o.getSnapshot=t,O(o)&&i({inst:o})}),[e,r,t]),m((function(){return O(o)&&i({inst:o}),e((function(){O(o)&&i({inst:o})}))}),[e]),w(r),r};y.useSyncExternalStore=void 0!==v.useSyncExternalStore?v.useSyncExternalStore:S,d.exports=y;var P=d.exports,j={exports:{}},E={},x=a,A=P;var _="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},$=A.useSyncExternalStore,C=x.useRef,R=x.useEffect,N=x.useMemo,M=x.useDebugValue;E.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=C(null);if(null===i.current){var u={hasValue:!1,value:null};i.current=u}else u=i.current;i=N((function(){function e(e){if(!c){if(c=!0,i=e,e=n(e),void 0!==o&&u.hasValue){var t=u.value;if(o(t,e))return a=t}return a=e}if(t=a,_(i,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(i=e,a=r)}var i,a,c=!1,f=void 0===r?null:r;return[function(){return e(t())},null===f?void 0:function(){return e(f())}]}),[t,r,n,o]);var a=$(e,i[0],i[1]);return R((function(){u.hasValue=!0,u.value=a}),[a]),M(a),a},j.exports=E;var I=j.exports;let k=function(e){e()};const D=()=>k,T=a.createContext(null);function F(){return a.useContext(T)}let z=()=>{throw new Error("uSES not initialized!")};const q=(e,t)=>e===t;function L(e=T){const t=e===T?F:()=>a.useContext(e);return function(e,r=q){const{store:n,subscription:o,getServerState:i}=t(),u=z(o.addNestedSub,n.getState,i||n.getState,e,r);return a.useDebugValue(u),u}}const U=L();var V={exports:{}},W={},K="function"==typeof Symbol&&Symbol.for,X=K?Symbol.for("react.element"):60103,B=K?Symbol.for("react.portal"):60106,G=K?Symbol.for("react.fragment"):60107,J=K?Symbol.for("react.strict_mode"):60108,H=K?Symbol.for("react.profiler"):60114,Q=K?Symbol.for("react.provider"):60109,Y=K?Symbol.for("react.context"):60110,Z=K?Symbol.for("react.async_mode"):60111,ee=K?Symbol.for("react.concurrent_mode"):60111,te=K?Symbol.for("react.forward_ref"):60112,re=K?Symbol.for("react.suspense"):60113,ne=K?Symbol.for("react.suspense_list"):60120,oe=K?Symbol.for("react.memo"):60115,ie=K?Symbol.for("react.lazy"):60116,ue=K?Symbol.for("react.block"):60121,ae=K?Symbol.for("react.fundamental"):60117,ce=K?Symbol.for("react.responder"):60118,fe=K?Symbol.for("react.scope"):60119;function le(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case X:switch(e=e.type){case Z:case ee:case G:case H:case J:case re:return e;default:switch(e=e&&e.$$typeof){case Y:case te:case ie:case oe:case Q:return e;default:return t}}case B:return t}}}function se(e){return le(e)===ee}W.AsyncMode=Z,W.ConcurrentMode=ee,W.ContextConsumer=Y,W.ContextProvider=Q,W.Element=X,W.ForwardRef=te,W.Fragment=G,W.Lazy=ie,W.Memo=oe,W.Portal=B,W.Profiler=H,W.StrictMode=J,W.Suspense=re,W.isAsyncMode=function(e){return se(e)||le(e)===Z},W.isConcurrentMode=se,W.isContextConsumer=function(e){return le(e)===Y},W.isContextProvider=function(e){return le(e)===Q},W.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===X},W.isForwardRef=function(e){return le(e)===te},W.isFragment=function(e){return le(e)===G},W.isLazy=function(e){return le(e)===ie},W.isMemo=function(e){return le(e)===oe},W.isPortal=function(e){return le(e)===B},W.isProfiler=function(e){return le(e)===H},W.isStrictMode=function(e){return le(e)===J},W.isSuspense=function(e){return le(e)===re},W.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===G||e===ee||e===H||e===J||e===re||e===ne||"object"==typeof e&&null!==e&&(e.$$typeof===ie||e.$$typeof===oe||e.$$typeof===Q||e.$$typeof===Y||e.$$typeof===te||e.$$typeof===ae||e.$$typeof===ce||e.$$typeof===fe||e.$$typeof===ue)},W.typeOf=le,V.exports=W;var pe=V.exports,de={};de[pe.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},de[pe.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var ye,ve,be,he={},me=Symbol.for("react.element"),ge=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),je=Symbol.for("react.context"),Ee=Symbol.for("react.server_context"),xe=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen");
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ne(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case me:switch(e=e.type){case we:case Se:case Oe:case Ae:case _e:return e;default:switch(e=e&&e.$$typeof){case Ee:case je:case xe:case Ce:case $e:case Pe:return e;default:return t}}case ge:return t}}}ye=Symbol.for("react.module.reference"),he.ContextConsumer=je,he.ContextProvider=Pe,he.Element=me,he.ForwardRef=xe,he.Fragment=we,he.Lazy=Ce,he.Memo=$e,he.Portal=ge,he.Profiler=Se,he.StrictMode=Oe,he.Suspense=Ae,he.SuspenseList=_e,he.isAsyncMode=function(){return!1},he.isConcurrentMode=function(){return!1},he.isContextConsumer=function(e){return Ne(e)===je},he.isContextProvider=function(e){return Ne(e)===Pe},he.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===me},he.isForwardRef=function(e){return Ne(e)===xe},he.isFragment=function(e){return Ne(e)===we},he.isLazy=function(e){return Ne(e)===Ce},he.isMemo=function(e){return Ne(e)===$e},he.isPortal=function(e){return Ne(e)===ge},he.isProfiler=function(e){return Ne(e)===Se},he.isStrictMode=function(e){return Ne(e)===Oe},he.isSuspense=function(e){return Ne(e)===Ae},he.isSuspenseList=function(e){return Ne(e)===_e},he.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===we||e===Se||e===Oe||e===Ae||e===_e||e===Re||"object"==typeof e&&null!==e&&(e.$$typeof===Ce||e.$$typeof===$e||e.$$typeof===Pe||e.$$typeof===je||e.$$typeof===xe||e.$$typeof===ye||void 0!==e.getModuleId)},he.typeOf=Ne,ve=I.useSyncExternalStoreWithSelector,z=ve,be=c.unstable_batchedUpdates,k=be;const Me=a.forwardRef(((e,a)=>{var c=e,{bsPrefix:l,variant:d,animation:y="border",size:v,as:b="div",className:h}=c,m=((e,t)=>{var r={};for(var u in e)o.call(e,u)&&t.indexOf(u)<0&&(r[u]=e[u]);if(null!=e&&n)for(var u of n(e))t.indexOf(u)<0&&i.call(e,u)&&(r[u]=e[u]);return r})(c,["bsPrefix","variant","animation","size","as","className"]);const g=`${l=s(l,"spinner")}-${y}`;return f.jsx(b,(w=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&u(e,r,t[r]);return e})({ref:a},m),O={className:p(h,g,v&&`${g}-${v}`,d&&`text-${d}`)},t(w,r(O))));var w,O}));Me.displayName="Spinner";const Ie=Me,ke=()=>f.jsx(l,{className:"mt-5 d-flex justify-content-center",children:f.jsx(Ie,{animation:"border",role:"status",children:f.jsx("span",{className:"visually-hidden",children:"Loading..."})})});function De(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Te(e){return!!e&&!!e[Pt]}function Fe(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===jt}(e)||Array.isArray(e)||!!e[St]||!!(null===(t=e.constructor)||void 0===t?void 0:t[St])||We(e)||Ke(e))}function ze(e,t,r){void 0===r&&(r=!1),0===qe(e)?(r?Object.keys:Et)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function qe(e){var t=e[Pt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:We(e)?2:Ke(e)?3:0}function Le(e,t){return 2===qe(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ue(e,t,r){var n=qe(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function Ve(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function We(e){return mt&&e instanceof Map}function Ke(e){return gt&&e instanceof Set}function Xe(e){return e.o||e.t}function Be(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=xt(e);delete t[Pt];for(var r=Et(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Ge(e,t){return void 0===t&&(t=!1),He(e)||Te(e)||!Fe(e)||(qe(e)>1&&(e.set=e.add=e.clear=e.delete=Je),Object.freeze(e),t&&ze(e,(function(e,t){return Ge(t,!0)}),!0)),e}function Je(){De(2)}function He(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Qe(e){var t=At[e];return t||De(18,e),t}function Ye(){return bt}function Ze(e,t){t&&(Qe("Patches"),e.u=[],e.s=[],e.v=t)}function et(e){tt(e),e.p.forEach(nt),e.p=null}function tt(e){e===bt&&(bt=e.l)}function rt(e){return bt={p:[],l:bt,h:e,m:!0,_:0}}function nt(e){var t=e[Pt];0===t.i||1===t.i?t.j():t.g=!0}function ot(e,t){t._=t.p.length;var r=t.p[0],n=void 0!==e&&e!==r;return t.h.O||Qe("ES5").S(t,e,n),n?(r[Pt].P&&(et(t),De(4)),Fe(e)&&(e=it(t,e),t.l||at(t,e)),t.u&&Qe("Patches").M(r[Pt].t,e,t.u,t.s)):e=it(t,r,[]),et(t),t.u&&t.v(t.u,t.s),e!==Ot?e:void 0}function it(e,t,r){if(He(t))return t;var n=t[Pt];if(!n)return ze(t,(function(o,i){return ut(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return at(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=Be(n.k):n.o,i=o,u=!1;3===n.i&&(i=new Set(o),o.clear(),u=!0),ze(i,(function(t,i){return ut(e,n,o,t,i,r,u)})),at(e,o,!1),r&&e.u&&Qe("Patches").N(n,r,e.u,e.s)}return n.o}function ut(e,t,r,n,o,i,u){if(Te(o)){var a=it(e,o,i&&t&&3!==t.i&&!Le(t.R,n)?i.concat(n):void 0);if(Ue(r,n,a),!Te(a))return;e.m=!1}else u&&r.add(o);if(Fe(o)&&!He(o)){if(!e.h.D&&e._<1)return;it(e,o),t&&t.A.l||at(e,o)}}function at(e,t,r){void 0===r&&(r=!1),!e.l&&e.h.D&&e.m&&Ge(t,r)}function ct(e,t){var r=e[Pt];return(r?Xe(r):e)[t]}function ft(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function lt(e){e.P||(e.P=!0,e.l&&lt(e.l))}function st(e){e.o||(e.o=Be(e.t))}function pt(e,t,r){var n=We(t)?Qe("MapSet").F(t,r):Ke(t)?Qe("MapSet").T(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:Ye(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=_t;r&&(o=[n],i=$t);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(t,r):Qe("ES5").J(t,r);return(r?r.A:Ye()).p.push(n),n}function dt(e){return Te(e)||De(22,e),function e(t){if(!Fe(t))return t;var r,n=t[Pt],o=qe(t);if(n){if(!n.P&&(n.i<4||!Qe("ES5").K(n)))return n.t;n.I=!0,r=yt(t,o),n.I=!1}else r=yt(t,o);return ze(r,(function(t,o){n&&function(e,t){return 2===qe(e)?e.get(t):e[t]}(n.t,t)===o||Ue(r,t,e(o))})),3===o?new Set(r):r}(e)}function yt(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Be(e)}var vt,bt,ht="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),mt="undefined"!=typeof Map,gt="undefined"!=typeof Set,wt="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Ot=ht?Symbol.for("immer-nothing"):((vt={})["immer-nothing"]=!0,vt),St=ht?Symbol.for("immer-draftable"):"__$immer_draftable",Pt=ht?Symbol.for("immer-state"):"__$immer_state",jt=""+Object.prototype.constructor,Et="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,xt=Object.getOwnPropertyDescriptors||function(e){var t={};return Et(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},At={},_t={get:function(e,t){if(t===Pt)return e;var r,n,o,i=Xe(e);if(!Le(i,t))return r=e,(o=ft(i,t))?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(r.k):void 0;var u=i[t];return e.I||!Fe(u)?u:u===ct(e.t,t)?(st(e),e.o[t]=pt(e.A.h,u,e)):u},has:function(e,t){return t in Xe(e)},ownKeys:function(e){return Reflect.ownKeys(Xe(e))},set:function(e,t,r){var n=ft(Xe(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=ct(Xe(e),t),i=null==o?void 0:o[Pt];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Ve(r,o)&&(void 0!==r||Le(e.t,t)))return!0;st(e),lt(e)}return e.o[t]===r&&(void 0!==r||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==ct(e.t,t)||t in e.t?(e.R[t]=!1,st(e),lt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=Xe(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){De(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){De(12)}},$t={};ze(_t,(function(e,t){$t[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),$t.deleteProperty=function(e,t){return $t.set.call(this,e,t,void 0)},$t.set=function(e,t,r){return _t.set.call(this,e[0],t,r,e[0])};var Ct=new(function(){function e(e){var t=this;this.O=wt,this.D=!0,this.produce=function(e,r,n){if("function"==typeof e&&"function"!=typeof r){var o=r;r=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var n=arguments.length,u=Array(n>1?n-1:0),a=1;a<n;a++)u[a-1]=arguments[a];return i.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(u))}))}}var u;if("function"!=typeof r&&De(6),void 0!==n&&"function"!=typeof n&&De(7),Fe(e)){var a=rt(t),c=pt(t,e,void 0),f=!0;try{u=r(c),f=!1}finally{f?et(a):tt(a)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return Ze(a,n),ot(e,a)}),(function(e){throw et(a),e})):(Ze(a,n),ot(u,a))}if(!e||"object"!=typeof e){if(void 0===(u=r(e))&&(u=e),u===Ot&&(u=void 0),t.D&&Ge(u,!0),n){var l=[],s=[];Qe("Patches").M(e,u,l,s),n(l,s)}return u}De(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))};var n,o,i=t.produce(e,r,(function(e,t){n=e,o=t}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return[e,n,o]})):[i,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){Fe(e)||De(8),Te(e)&&(e=dt(e));var t=rt(this),r=pt(this,e,void 0);return r[Pt].C=!0,tt(t),r},t.finishDraft=function(e,t){var r=(e&&e[Pt]).A;return Ze(r,t),ot(void 0,r)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!wt&&De(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var o=Qe("Patches").$;return Te(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))},e}()),Rt=Ct.produce;function Nt(e){return(Nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Mt(e){var t=function(e,t){if("object"!==Nt(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Nt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Nt(t)?t:String(t)}function It(e,t,r){return(t=Mt(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?kt(Object(r),!0).forEach((function(t){It(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):kt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Tt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}Ct.produceWithPatches.bind(Ct),Ct.setAutoFreeze.bind(Ct),Ct.setUseProxies.bind(Ct),Ct.applyPatches.bind(Ct),Ct.createDraft.bind(Ct),Ct.finishDraft.bind(Ct);var Ft="function"==typeof Symbol&&Symbol.observable||"@@observable",zt=function(){return Math.random().toString(36).substring(7).split("").join(".")},qt={INIT:"@@redux/INIT"+zt(),REPLACE:"@@redux/REPLACE"+zt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+zt()}};function Lt(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(Tt(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(Tt(1));return r(Lt)(e,t)}if("function"!=typeof e)throw new Error(Tt(2));var o=e,i=t,u=[],a=u,c=!1;function f(){a===u&&(a=u.slice())}function l(){if(c)throw new Error(Tt(3));return i}function s(e){if("function"!=typeof e)throw new Error(Tt(4));if(c)throw new Error(Tt(5));var t=!0;return f(),a.push(e),function(){if(t){if(c)throw new Error(Tt(6));t=!1,f();var r=a.indexOf(e);a.splice(r,1),u=null}}}function p(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error(Tt(7));if(void 0===e.type)throw new Error(Tt(8));if(c)throw new Error(Tt(9));try{c=!0,i=o(i,e)}finally{c=!1}for(var t=u=a,r=0;r<t.length;r++){(0,t[r])()}return e}return p({type:qt.INIT}),(n={dispatch:p,subscribe:s,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error(Tt(10));o=e,p({type:qt.REPLACE})}})[Ft]=function(){var e,t=s;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(Tt(11));function r(){e.next&&e.next(l())}return r(),{unsubscribe:t(r)}}})[Ft]=function(){return this},e},n}function Ut(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:qt.INIT}))throw new Error(Tt(12));if(void 0===r(void 0,{type:qt.PROBE_UNKNOWN_ACTION()}))throw new Error(Tt(13))}))}(r)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},a=0;a<u.length;a++){var c=u[a],f=r[c],l=e[c],s=f(l,t);if(void 0===s)throw t&&t.type,new Error(Tt(14));o[c]=s,n=n||s!==l}return(n=n||u.length!==Object.keys(e).length)?o:e}}function Vt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function Wt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(Tt(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return n=Vt.apply(void 0,i)(r.dispatch),Dt(Dt({},r),{},{dispatch:n})}}}function Kt(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var Xt=Kt();Xt.withExtraArgument=Kt;const Bt=Xt;var Gt,Jt=globalThis&&globalThis.__extends||(Gt=function(e,t){return(Gt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Gt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),Ht=globalThis&&globalThis.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},Qt=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Yt=Object.defineProperty,Zt=Object.defineProperties,er=Object.getOwnPropertyDescriptors,tr=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,or=function(e,t,r){return t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ir=function(e,t){for(var r in t||(t={}))rr.call(t,r)&&or(e,r,t[r]);if(tr)for(var n=0,o=tr(t);n<o.length;n++){r=o[n];nr.call(t,r)&&or(e,r,t[r])}return e},ur=function(e,t){return Zt(e,er(t))},ar="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?Vt:Vt.apply(null,arguments)};var cr=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Jt(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,Qt([void 0],e[0].concat(this)))):new(t.bind.apply(t,Qt([void 0],e.concat(this))))},t}(Array),fr=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Jt(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,Qt([void 0],e[0].concat(this)))):new(t.bind.apply(t,Qt([void 0],e.concat(this))))},t}(Array);function lr(e){return Fe(e)?Rt(e,(function(){})):e}function sr(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t;e.immutableCheck,e.serializableCheck;var n=new cr;r&&("boolean"==typeof r?n.push(Bt):n.push(Bt.withExtraArgument(r.extraArgument)));return n}(e)}}function pr(e){var t,r=sr(),n=e||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,a=void 0===u?r():u,c=n.devTools,f=void 0===c||c,l=n.preloadedState,s=void 0===l?void 0:l,p=n.enhancers,d=void 0===p?void 0:p;if("function"==typeof i)t=i;else{if(!function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=Ut(i)}var y=a;"function"==typeof y&&(y=y(r));var v=Wt.apply(void 0,y),b=Vt;f&&(b=ar(ir({trace:!1},"object"==typeof f&&f)));var h=new fr(v),m=h;return Array.isArray(d)?m=Qt([v],d):"function"==typeof d&&(m=d(h)),Lt(t,s,b.apply(void 0,m))}function dr(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return ir(ir({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function yr(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}function vr(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof e.initialState?e.initialState:lr(e.initialState),o=e.reducers||{},i=Object.keys(o),u={},a={},c={};function f(){var t="function"==typeof e.extraReducers?yr(e.extraReducers):[e.extraReducers],r=t[0],o=void 0===r?{}:r,i=t[1],u=void 0===i?[]:i,c=t[2],f=void 0===c?void 0:c,l=ir(ir({},o),a);return function(e,t,r,n){void 0===r&&(r=[]);var o,i="function"==typeof t?yr(t):[t,r,n],u=i[0],a=i[1],c=i[2];if("function"==typeof e)o=function(){return lr(e())};else{var f=lr(e);o=function(){return f}}function l(e,t){void 0===e&&(e=o());var r=Qt([u[t.type]],a.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[c]),r.reduce((function(e,r){if(r){var n;if(Te(e))return void 0===(n=r(e,t))?e:n;if(Fe(e))return Rt(e,(function(e){return r(e,t)}));if(void 0===(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}return l.getInitialState=o,l}(n,(function(e){for(var t in l)e.addCase(t,l[t]);for(var r=0,n=u;r<n.length;r++){var o=n[r];e.addMatcher(o.matcher,o.reducer)}f&&e.addDefaultCase(f)}))}return i.forEach((function(e){var r,n,i=o[e],f=t+"/"+e;"reducer"in i?(r=i.reducer,n=i.prepare):r=i,u[e]=r,a[f]=r,c[e]=n?dr(f,n):dr(f)})),{name:t,reducer:function(e,t){return r||(r=f()),r(e,t)},actions:c,caseReducers:u,getInitialState:function(){return r||(r=f()),r.getInitialState()}}}var br=["name","message","stack","code"],hr=function(e,t){this.payload=e,this.meta=t},mr=function(e,t){this.payload=e,this.meta=t},gr=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0,n=br;r<n.length;r++){var o=n[r];"string"==typeof e[o]&&(t[o]=e[o])}return t}return{message:String(e)}};function wr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,r){var n=dr(e+"/fulfilled",(function(e,t,r,n){return{payload:e,meta:ur(ir({},n||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}})),o=dr(e+"/pending",(function(e,t,r){return{payload:void 0,meta:ur(ir({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),i=dr(e+"/rejected",(function(e,t,n,o,i){return{payload:o,error:(r&&r.serializeError||gr)(e||"Rejected"),meta:ur(ir({},i||{}),{arg:n,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),u="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(a,c,f){var l,s=(null==r?void 0:r.idGenerator)?r.idGenerator(e):function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t}(),p=new u;function d(e){l=e,p.abort()}var y=function(){return u=this,y=null,v=function(){var u,y,v,b,h,m;return Ht(this,(function(g){switch(g.label){case 0:return g.trys.push([0,4,,5]),b=null==(u=null==r?void 0:r.condition)?void 0:u.call(r,e,{getState:c,extra:f}),null===(w=b)||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,b];case 1:b=g.sent(),g.label=2;case 2:if(!1===b||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return h=new Promise((function(e,t){return p.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:l||"Aborted"})}))})),a(o(s,e,null==(y=null==r?void 0:r.getPendingMeta)?void 0:y.call(r,{requestId:s,arg:e},{getState:c,extra:f}))),[4,Promise.race([h,Promise.resolve(t(e,{dispatch:a,getState:c,extra:f,requestId:s,signal:p.signal,abort:d,rejectWithValue:function(e,t){return new hr(e,t)},fulfillWithValue:function(e,t){return new mr(e,t)}})).then((function(t){if(t instanceof hr)throw t;return t instanceof mr?n(t.payload,s,e,t.meta):n(t,s,e)}))])];case 3:return v=g.sent(),[3,5];case 4:return m=g.sent(),v=m instanceof hr?i(null,s,e,m.payload,m.meta):i(m,s,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&i.match(v)&&v.meta.condition||a(v),[2,v]}var w}))},new Promise((function(e,t){var r=function(e){try{o(v.next(e))}catch(e){t(e)}},n=function(e){try{o(v.throw(e))}catch(e){t(e)}},o=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,n)};o((v=v.apply(u,y)).next())}));var u,y,v}();return Object.assign(y,{abort:d,requestId:s,arg:e,unwrap:function(){return y.then(wr)}})}}),{pending:o,rejected:i,fulfilled:n,typePrefix:e})}e.withTypes=function(){return e}}();var Or="listenerMiddleware";dr(Or+"/add"),dr(Or+"/removeAll"),dr(Or+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:"undefined"!=typeof global?global:globalThis),function(){function e(e,t){var r=u[e];return r?r.enumerable=t:u[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[Pt];return _t.get(t,e)},set:function(t){var r=this[Pt];_t.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][Pt];if(!o.P)switch(o.i){case 5:n(o)&&lt(o);break;case 4:r(o)&&lt(o)}}}function r(e){for(var t=e.t,r=e.k,n=Et(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Pt){var u=t[i];if(void 0===u&&!Le(t,i))return!0;var a=r[i],c=a&&a[Pt];if(c?c.t!==u:!Ve(a,u))return!0}}var f=!!t[Pt];return n.length!==Et(t).length+(f?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var o,i,u={};i={J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=xt(r);delete i[Pt];for(var u=Et(i),a=0;a<u.length;a++){var c=u[a];i[c]=e(c,t||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:Ye(),P:!1,I:!1,R:{},l:r,t:t,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,Pt,{value:i,writable:!0}),o},S:function(e,r,o){o?Te(r)&&r[Pt].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[Pt];if(r){var o=r.t,i=r.k,u=r.R,a=r.i;if(4===a)ze(i,(function(t){t!==Pt&&(void 0!==o[t]||Le(o,t)?u[t]||e(i[t]):(u[t]=!0,lt(r)))})),ze(o,(function(e){void 0!==i[e]||Le(i,e)||(u[e]=!1,lt(r))}));else if(5===a){if(n(r)&&(lt(r),u.length=!0),i.length<o.length)for(var c=i.length;c<o.length;c++)u[c]=!1;else for(var f=o.length;f<i.length;f++)u[f]=!0;for(var l=Math.min(i.length,o.length),s=0;s<l;s++)i.hasOwnProperty(s)||(u[s]=!0),void 0===u[s]&&e(i[s])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}},At[o="ES5"]||(At[o]=i)}();const Sr=vr({name:"posts",initialState:{posts:[],loading:!1,error:null},reducers:{fetchPostsRequest:e=>{e.loading=!0,e.error=null},fetchPostsSuccess:(e,t)=>{e.loading=!1,e.posts=t.payload},fetchPostsFailure:(e,t)=>{e.loading=!1,e.error=t.payload}}}),{fetchPostsRequest:Pr,fetchPostsSuccess:jr,fetchPostsFailure:Er}=Sr.actions,xr=Sr.reducer,Ar=vr({name:"user",initialState:{user:null,loading:!1,error:null},reducers:{fetchUserRequest:e=>{e.loading=!0,e.error=null},fetchUserSuccess:(e,t)=>{e.loading=!1,e.user=t.payload},fetchUserFailure:(e,t)=>{e.loading=!1,e.error=t.payload}}}),{fetchUserRequest:_r,fetchUserSuccess:$r,fetchUserFailure:Cr}=Ar.actions,Rr=Ar.reducer;export{ke as L,T as R,Ut as a,jr as b,Vt as c,Er as d,_r as e,Pr as f,D as g,$r as h,Cr as i,pr as j,U as k,F as l,xr as p,Rr as u};
