"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[947],{5705:function(t,e,r){r.d(e,{Bc:function(){return Fn},gN:function(){return En},l0:function(){return Sn},J9:function(){return bn}});var n=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===a}(t)}(t)};var a="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u((r=t,Array.isArray(r)?[]:{}),t,e):t;var r}function i(t,e,r){return t.concat(e).map((function(t){return o(t,r)}))}function u(t,e,r){(r=r||{}).arrayMerge=r.arrayMerge||i,r.isMergeableObject=r.isMergeableObject||n;var a=Array.isArray(e);return a===Array.isArray(t)?a?r.arrayMerge(t,e,r):function(t,e,r){var n={};return r.isMergeableObject(t)&&Object.keys(t).forEach((function(e){n[e]=o(t[e],r)})),Object.keys(e).forEach((function(a){r.isMergeableObject(e[a])&&t[a]?n[a]=u(t[a],e[a],r):n[a]=o(e[a],r)})),n}(t,e,r):o(e,r)}u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,r){return u(t,r,e)}),{})};var c=u,l="object"==typeof global&&global&&global.Object===Object&&global,s="object"==typeof self&&self&&self.Object===Object&&self,f=l||s||Function("return this")(),p=f.Symbol,v=Object.prototype,d=v.hasOwnProperty,h=v.toString,y=p?p.toStringTag:void 0;var b=function(t){var e=d.call(t,y),r=t[y];try{t[y]=void 0;var n=!0}catch(o){}var a=h.call(t);return n&&(e?t[y]=r:delete t[y]),a},m=Object.prototype.toString;var g=function(t){return m.call(t)},_=p?p.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?b(t):g(t)};var E=function(t,e){return function(r){return t(e(r))}},S=E(Object.getPrototypeOf,Object);var O=function(t){return null!=t&&"object"==typeof t},A=Function.prototype,T=Object.prototype,w=A.toString,k=T.hasOwnProperty,I=w.call(Object);var F=function(t){if(!O(t)||"[object Object]"!=j(t))return!1;var e=S(t);if(null===e)return!0;var r=k.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&w.call(r)==I},R=r(2791),C=r(77),M=r.n(C);var P=function(t,e){};var x=function(){this.__data__=[],this.size=0};var U=function(t,e){return t===e||t!==t&&e!==e};var D=function(t,e){for(var r=t.length;r--;)if(U(t[r][0],e))return r;return-1},V=Array.prototype.splice;var z=function(t){var e=this.__data__,r=D(e,t);return!(r<0)&&(r==e.length-1?e.pop():V.call(e,r,1),--this.size,!0)};var L=function(t){var e=this.__data__,r=D(e,t);return r<0?void 0:e[r][1]};var B=function(t){return D(this.__data__,t)>-1};var N=function(t,e){var r=this.__data__,n=D(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function H(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}H.prototype.clear=x,H.prototype.delete=z,H.prototype.get=L,H.prototype.has=B,H.prototype.set=N;var $=H;var G=function(){this.__data__=new $,this.size=0};var W=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var K=function(t){return this.__data__.get(t)};var q=function(t){return this.__data__.has(t)};var Y=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var J=function(t){if(!Y(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Q=f["__core-js_shared__"],X=function(){var t=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var Z=function(t){return!!X&&X in t},tt=Function.prototype.toString;var et=function(t){if(null!=t){try{return tt.call(t)}catch(e){}try{return t+""}catch(e){}}return""},rt=/^\[object .+?Constructor\]$/,nt=Function.prototype,at=Object.prototype,ot=nt.toString,it=at.hasOwnProperty,ut=RegExp("^"+ot.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ct=function(t){return!(!Y(t)||Z(t))&&(J(t)?ut:rt).test(et(t))};var lt=function(t,e){return null==t?void 0:t[e]};var st=function(t,e){var r=lt(t,e);return ct(r)?r:void 0},ft=st(f,"Map"),pt=st(Object,"create");var vt=function(){this.__data__=pt?pt(null):{},this.size=0};var dt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ht=Object.prototype.hasOwnProperty;var yt=function(t){var e=this.__data__;if(pt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return ht.call(e,t)?e[t]:void 0},bt=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return pt?void 0!==e[t]:bt.call(e,t)};var gt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=pt&&void 0===e?"__lodash_hash_undefined__":e,this};function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_t.prototype.clear=vt,_t.prototype.delete=dt,_t.prototype.get=yt,_t.prototype.has=mt,_t.prototype.set=gt;var jt=_t;var Et=function(){this.size=0,this.__data__={hash:new jt,map:new(ft||$),string:new jt}};var St=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ot=function(t,e){var r=t.__data__;return St(e)?r["string"==typeof e?"string":"hash"]:r.map};var At=function(t){var e=Ot(this,t).delete(t);return this.size-=e?1:0,e};var Tt=function(t){return Ot(this,t).get(t)};var wt=function(t){return Ot(this,t).has(t)};var kt=function(t,e){var r=Ot(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function It(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}It.prototype.clear=Et,It.prototype.delete=At,It.prototype.get=Tt,It.prototype.has=wt,It.prototype.set=kt;var Ft=It;var Rt=function(t,e){var r=this.__data__;if(r instanceof $){var n=r.__data__;if(!ft||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ft(n)}return r.set(t,e),this.size=r.size,this};function Ct(t){var e=this.__data__=new $(t);this.size=e.size}Ct.prototype.clear=G,Ct.prototype.delete=W,Ct.prototype.get=K,Ct.prototype.has=q,Ct.prototype.set=Rt;var Mt=Ct;var Pt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},xt=function(){try{var t=st(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();var Ut=function(t,e,r){"__proto__"==e&&xt?xt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Dt=Object.prototype.hasOwnProperty;var Vt=function(t,e,r){var n=t[e];Dt.call(t,e)&&U(n,r)&&(void 0!==r||e in t)||Ut(t,e,r)};var zt=function(t,e,r,n){var a=!r;r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),a?Ut(r,u,c):Vt(r,u,c)}return r};var Lt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Bt=function(t){return O(t)&&"[object Arguments]"==j(t)},Nt=Object.prototype,Ht=Nt.hasOwnProperty,$t=Nt.propertyIsEnumerable,Gt=Bt(function(){return arguments}())?Bt:function(t){return O(t)&&Ht.call(t,"callee")&&!$t.call(t,"callee")},Wt=Gt,Kt=Array.isArray;var qt=function(){return!1},Yt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Jt=Yt&&"object"==typeof module&&module&&!module.nodeType&&module,Qt=Jt&&Jt.exports===Yt?f.Buffer:void 0,Xt=(Qt?Qt.isBuffer:void 0)||qt,Zt=/^(?:0|[1-9]\d*)$/;var te=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Zt.test(t))&&t>-1&&t%1==0&&t<e};var ee=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;var ne=function(t){return O(t)&&ee(t.length)&&!!re[j(t)]};var ae=function(t){return function(e){return t(e)}},oe="object"==typeof exports&&exports&&!exports.nodeType&&exports,ie=oe&&"object"==typeof module&&module&&!module.nodeType&&module,ue=ie&&ie.exports===oe&&l.process,ce=function(){try{var t=ie&&ie.require&&ie.require("util").types;return t||ue&&ue.binding&&ue.binding("util")}catch(e){}}(),le=ce&&ce.isTypedArray,se=le?ae(le):ne,fe=Object.prototype.hasOwnProperty;var pe=function(t,e){var r=Kt(t),n=!r&&Wt(t),a=!r&&!n&&Xt(t),o=!r&&!n&&!a&&se(t),i=r||n||a||o,u=i?Lt(t.length,String):[],c=u.length;for(var l in t)!e&&!fe.call(t,l)||i&&("length"==l||a&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||te(l,c))||u.push(l);return u},ve=Object.prototype;var de=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ve)},he=E(Object.keys,Object),ye=Object.prototype.hasOwnProperty;var be=function(t){if(!de(t))return he(t);var e=[];for(var r in Object(t))ye.call(t,r)&&"constructor"!=r&&e.push(r);return e};var me=function(t){return null!=t&&ee(t.length)&&!J(t)};var ge=function(t){return me(t)?pe(t):be(t)};var _e=function(t,e){return t&&zt(e,ge(e),t)};var je=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},Ee=Object.prototype.hasOwnProperty;var Se=function(t){if(!Y(t))return je(t);var e=de(t),r=[];for(var n in t)("constructor"!=n||!e&&Ee.call(t,n))&&r.push(n);return r};var Oe=function(t){return me(t)?pe(t,!0):Se(t)};var Ae=function(t,e){return t&&zt(e,Oe(e),t)},Te="object"==typeof exports&&exports&&!exports.nodeType&&exports,we=Te&&"object"==typeof module&&module&&!module.nodeType&&module,ke=we&&we.exports===Te?f.Buffer:void 0,Ie=ke?ke.allocUnsafe:void 0;var Fe=function(t,e){if(e)return t.slice();var r=t.length,n=Ie?Ie(r):new t.constructor(r);return t.copy(n),n};var Re=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var Ce=function(t,e){for(var r=-1,n=null==t?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o};var Me=function(){return[]},Pe=Object.prototype.propertyIsEnumerable,xe=Object.getOwnPropertySymbols,Ue=xe?function(t){return null==t?[]:(t=Object(t),Ce(xe(t),(function(e){return Pe.call(t,e)})))}:Me;var De=function(t,e){return zt(t,Ue(t),e)};var Ve=function(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t},ze=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ve(e,Ue(t)),t=S(t);return e}:Me;var Le=function(t,e){return zt(t,ze(t),e)};var Be=function(t,e,r){var n=e(t);return Kt(t)?n:Ve(n,r(t))};var Ne=function(t){return Be(t,ge,Ue)};var He=function(t){return Be(t,Oe,ze)},$e=st(f,"DataView"),Ge=st(f,"Promise"),We=st(f,"Set"),Ke=st(f,"WeakMap"),qe="[object Map]",Ye="[object Promise]",Je="[object Set]",Qe="[object WeakMap]",Xe="[object DataView]",Ze=et($e),tr=et(ft),er=et(Ge),rr=et(We),nr=et(Ke),ar=j;($e&&ar(new $e(new ArrayBuffer(1)))!=Xe||ft&&ar(new ft)!=qe||Ge&&ar(Ge.resolve())!=Ye||We&&ar(new We)!=Je||Ke&&ar(new Ke)!=Qe)&&(ar=function(t){var e=j(t),r="[object Object]"==e?t.constructor:void 0,n=r?et(r):"";if(n)switch(n){case Ze:return Xe;case tr:return qe;case er:return Ye;case rr:return Je;case nr:return Qe}return e});var or=ar,ir=Object.prototype.hasOwnProperty;var ur=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ir.call(t,"index")&&(r.index=t.index,r.input=t.input),r},cr=f.Uint8Array;var lr=function(t){var e=new t.constructor(t.byteLength);return new cr(e).set(new cr(t)),e};var sr=function(t,e){var r=e?lr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},fr=/\w*$/;var pr=function(t){var e=new t.constructor(t.source,fr.exec(t));return e.lastIndex=t.lastIndex,e},vr=p?p.prototype:void 0,dr=vr?vr.valueOf:void 0;var hr=function(t){return dr?Object(dr.call(t)):{}};var yr=function(t,e){var r=e?lr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var br=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return lr(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return sr(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return yr(t,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return pr(t);case"[object Symbol]":return hr(t)}},mr=Object.create,gr=function(){function t(){}return function(e){if(!Y(e))return{};if(mr)return mr(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var _r=function(t){return"function"!=typeof t.constructor||de(t)?{}:gr(S(t))};var jr=function(t){return O(t)&&"[object Map]"==or(t)},Er=ce&&ce.isMap,Sr=Er?ae(Er):jr;var Or=function(t){return O(t)&&"[object Set]"==or(t)},Ar=ce&&ce.isSet,Tr=Ar?ae(Ar):Or,wr="[object Arguments]",kr="[object Function]",Ir="[object Object]",Fr={};Fr[wr]=Fr["[object Array]"]=Fr["[object ArrayBuffer]"]=Fr["[object DataView]"]=Fr["[object Boolean]"]=Fr["[object Date]"]=Fr["[object Float32Array]"]=Fr["[object Float64Array]"]=Fr["[object Int8Array]"]=Fr["[object Int16Array]"]=Fr["[object Int32Array]"]=Fr["[object Map]"]=Fr["[object Number]"]=Fr["[object Object]"]=Fr["[object RegExp]"]=Fr["[object Set]"]=Fr["[object String]"]=Fr["[object Symbol]"]=Fr["[object Uint8Array]"]=Fr["[object Uint8ClampedArray]"]=Fr["[object Uint16Array]"]=Fr["[object Uint32Array]"]=!0,Fr["[object Error]"]=Fr[kr]=Fr["[object WeakMap]"]=!1;var Rr=function t(e,r,n,a,o,i){var u,c=1&r,l=2&r,s=4&r;if(n&&(u=o?n(e,a,o,i):n(e)),void 0!==u)return u;if(!Y(e))return e;var f=Kt(e);if(f){if(u=ur(e),!c)return Re(e,u)}else{var p=or(e),v=p==kr||"[object GeneratorFunction]"==p;if(Xt(e))return Fe(e,c);if(p==Ir||p==wr||v&&!o){if(u=l||v?{}:_r(e),!c)return l?Le(e,Ae(u,e)):De(e,_e(u,e))}else{if(!Fr[p])return o?e:{};u=br(e,p,c)}}i||(i=new Mt);var d=i.get(e);if(d)return d;i.set(e,u),Tr(e)?e.forEach((function(a){u.add(t(a,r,n,a,e,i))})):Sr(e)&&e.forEach((function(a,o){u.set(o,t(a,r,n,o,e,i))}));var h=f?void 0:(s?l?He:Ne:l?Oe:ge)(e);return Pt(h||e,(function(a,o){h&&(a=e[o=a]),Vt(u,o,t(a,r,n,o,e,i))})),u};var Cr=function(t){return Rr(t,4)};var Mr=function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a};var Pr=function(t){return"symbol"==typeof t||O(t)&&"[object Symbol]"==j(t)};function xr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(xr.Cache||Ft),r}xr.Cache=Ft;var Ur=xr;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vr=/\\(\\)?/g,zr=function(t){var e=Ur(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,r,n,a){e.push(n?a.replace(Vr,"$1"):r||t)})),e}));var Lr=function(t){if("string"==typeof t||Pr(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},Br=p?p.prototype:void 0,Nr=Br?Br.toString:void 0;var Hr=function t(e){if("string"==typeof e)return e;if(Kt(e))return Mr(e,t)+"";if(Pr(e))return Nr?Nr.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r};var $r=function(t){return null==t?"":Hr(t)};var Gr=function(t){return Kt(t)?Mr(t,Lr):Pr(t)?[t]:Re(zr($r(t)))},Wr=r(2110),Kr=r.n(Wr);var qr=function(t){return Rr(t,5)};function Yr(){return Yr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Yr.apply(this,arguments)}function Jr(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Qr(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}function Xr(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Zr=(0,R.createContext)(void 0);Zr.displayName="FormikContext";var tn=Zr.Provider,en=Zr.Consumer;function rn(){var t=(0,R.useContext)(Zr);return t||P(!1),t}var nn=function(t){return Array.isArray(t)&&0===t.length},an=function(t){return"function"===typeof t},on=function(t){return null!==t&&"object"===typeof t},un=function(t){return String(Math.floor(Number(t)))===t},cn=function(t){return"[object String]"===Object.prototype.toString.call(t)},ln=function(t){return 0===R.Children.count(t)},sn=function(t){return on(t)&&an(t.then)};function fn(t,e,r,n){void 0===n&&(n=0);for(var a=Gr(e);t&&n<a.length;)t=t[a[n++]];return n===a.length||t?void 0===t?r:t:r}function pn(t,e,r){for(var n=Cr(t),a=n,o=0,i=Gr(e);o<i.length-1;o++){var u=i[o],c=fn(t,i.slice(0,o+1));if(c&&(on(c)||Array.isArray(c)))a=a[u]=Cr(c);else{var l=i[o+1];a=a[u]=un(l)&&Number(l)>=0?[]:{}}}return(0===o?t:a)[i[o]]===r?t:(void 0===r?delete a[i[o]]:a[i[o]]=r,0===o&&void 0===r&&delete n[i[o]],n)}function vn(t,e,r,n){void 0===r&&(r=new WeakMap),void 0===n&&(n={});for(var a=0,o=Object.keys(t);a<o.length;a++){var i=o[a],u=t[i];on(u)?r.get(u)||(r.set(u,!0),n[i]=Array.isArray(u)?[]:{},vn(u,e,r,n[i])):n[i]=e}return n}var dn={},hn={};function yn(t){var e=t.validateOnChange,r=void 0===e||e,n=t.validateOnBlur,a=void 0===n||n,o=t.validateOnMount,i=void 0!==o&&o,u=t.isInitialValid,l=t.enableReinitialize,s=void 0!==l&&l,f=t.onSubmit,p=Qr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),v=Yr({validateOnChange:r,validateOnBlur:a,validateOnMount:i,onSubmit:f},p),d=(0,R.useRef)(v.initialValues),h=(0,R.useRef)(v.initialErrors||dn),y=(0,R.useRef)(v.initialTouched||hn),b=(0,R.useRef)(v.initialStatus),m=(0,R.useRef)(!1),g=(0,R.useRef)({});(0,R.useEffect)((function(){return m.current=!0,function(){m.current=!1}}),[]);var _=(0,R.useState)(0)[1],j=(0,R.useRef)({values:v.initialValues,errors:v.initialErrors||dn,touched:v.initialTouched||hn,status:v.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=j.current,S=(0,R.useCallback)((function(t){var e=j.current;j.current=function(t,e){switch(e.type){case"SET_VALUES":return Yr({},t,{values:e.payload});case"SET_TOUCHED":return Yr({},t,{touched:e.payload});case"SET_ERRORS":return M()(t.errors,e.payload)?t:Yr({},t,{errors:e.payload});case"SET_STATUS":return Yr({},t,{status:e.payload});case"SET_ISSUBMITTING":return Yr({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return Yr({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return Yr({},t,{values:pn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return Yr({},t,{touched:pn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return Yr({},t,{errors:pn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return Yr({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return Yr({},t,{touched:vn(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return Yr({},t,{isSubmitting:!1});default:return t}}(e,t),e!==j.current&&_((function(t){return t+1}))}),[]),O=(0,R.useCallback)((function(t,e){return new Promise((function(r,n){var a=v.validate(t,e);null==a?r(dn):sn(a)?a.then((function(t){r(t||dn)}),(function(t){n(t)})):r(a)}))}),[v.validate]),A=(0,R.useCallback)((function(t,e){var r=v.validationSchema,n=an(r)?r(e):r,a=e&&n.validateAt?n.validateAt(e,t):function(t,e,r,n){void 0===r&&(r=!1);var a=mn(t);return e[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}(t,n);return new Promise((function(t,e){a.then((function(){t(dn)}),(function(r){"ValidationError"===r.name?t(function(t){var e={};if(t.inner){if(0===t.inner.length)return pn(e,t.path,t.message);var r=t.inner,n=Array.isArray(r),a=0;for(r=n?r:r[Symbol.iterator]();;){var o;if(n){if(a>=r.length)break;o=r[a++]}else{if((a=r.next()).done)break;o=a.value}var i=o;fn(e,i.path)||(e=pn(e,i.path,i.message))}}return e}(r)):e(r)}))}))}),[v.validationSchema]),T=(0,R.useCallback)((function(t,e){return new Promise((function(r){return r(g.current[t].validate(e))}))}),[]),w=(0,R.useCallback)((function(t){var e=Object.keys(g.current).filter((function(t){return an(g.current[t].validate)})),r=e.length>0?e.map((function(e){return T(e,fn(t,e))})):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(r).then((function(t){return t.reduce((function(t,r,n){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===r||r&&(t=pn(t,e[n],r)),t}),{})}))}),[T]),k=(0,R.useCallback)((function(t){return Promise.all([w(t),v.validationSchema?A(t):{},v.validate?O(t):{}]).then((function(t){var e=t[0],r=t[1],n=t[2];return c.all([e,r,n],{arrayMerge:gn})}))}),[v.validate,v.validationSchema,w,O,A]),I=jn((function(t){return void 0===t&&(t=E.values),S({type:"SET_ISVALIDATING",payload:!0}),k(t).then((function(t){return m.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:t})),t}))}));(0,R.useEffect)((function(){i&&!0===m.current&&M()(d.current,v.initialValues)&&I(d.current)}),[i,I]);var F=(0,R.useCallback)((function(t){var e=t&&t.values?t.values:d.current,r=t&&t.errors?t.errors:h.current?h.current:v.initialErrors||{},n=t&&t.touched?t.touched:y.current?y.current:v.initialTouched||{},a=t&&t.status?t.status:b.current?b.current:v.initialStatus;d.current=e,h.current=r,y.current=n,b.current=a;var o=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!t&&!!t.isSubmitting,errors:r,touched:n,status:a,values:e,isValidating:!!t&&!!t.isValidating,submitCount:t&&t.submitCount&&"number"===typeof t.submitCount?t.submitCount:0}})};if(v.onReset){var i=v.onReset(E.values,Q);sn(i)?i.then(o):o()}else o()}),[v.initialErrors,v.initialStatus,v.initialTouched]);(0,R.useEffect)((function(){!0!==m.current||M()(d.current,v.initialValues)||s&&(d.current=v.initialValues,F(),i&&I(d.current))}),[s,v.initialValues,F,i,I]),(0,R.useEffect)((function(){s&&!0===m.current&&!M()(h.current,v.initialErrors)&&(h.current=v.initialErrors||dn,S({type:"SET_ERRORS",payload:v.initialErrors||dn}))}),[s,v.initialErrors]),(0,R.useEffect)((function(){s&&!0===m.current&&!M()(y.current,v.initialTouched)&&(y.current=v.initialTouched||hn,S({type:"SET_TOUCHED",payload:v.initialTouched||hn}))}),[s,v.initialTouched]),(0,R.useEffect)((function(){s&&!0===m.current&&!M()(b.current,v.initialStatus)&&(b.current=v.initialStatus,S({type:"SET_STATUS",payload:v.initialStatus}))}),[s,v.initialStatus,v.initialTouched]);var C=jn((function(t){if(g.current[t]&&an(g.current[t].validate)){var e=fn(E.values,t),r=g.current[t].validate(e);return sn(r)?(S({type:"SET_ISVALIDATING",payload:!0}),r.then((function(t){return t})).then((function(e){S({type:"SET_FIELD_ERROR",payload:{field:t,value:e}}),S({type:"SET_ISVALIDATING",payload:!1})}))):(S({type:"SET_FIELD_ERROR",payload:{field:t,value:r}}),Promise.resolve(r))}return v.validationSchema?(S({type:"SET_ISVALIDATING",payload:!0}),A(E.values,t).then((function(t){return t})).then((function(e){S({type:"SET_FIELD_ERROR",payload:{field:t,value:fn(e,t)}}),S({type:"SET_ISVALIDATING",payload:!1})}))):Promise.resolve()})),P=(0,R.useCallback)((function(t,e){var r=e.validate;g.current[t]={validate:r}}),[]),x=(0,R.useCallback)((function(t){delete g.current[t]}),[]),U=jn((function(t,e){return S({type:"SET_TOUCHED",payload:t}),(void 0===e?a:e)?I(E.values):Promise.resolve()})),D=(0,R.useCallback)((function(t){S({type:"SET_ERRORS",payload:t})}),[]),V=jn((function(t,e){var n=an(t)?t(E.values):t;return S({type:"SET_VALUES",payload:n}),(void 0===e?r:e)?I(n):Promise.resolve()})),z=(0,R.useCallback)((function(t,e){S({type:"SET_FIELD_ERROR",payload:{field:t,value:e}})}),[]),L=jn((function(t,e,n){return S({type:"SET_FIELD_VALUE",payload:{field:t,value:e}}),(void 0===n?r:n)?I(pn(E.values,t,e)):Promise.resolve()})),B=(0,R.useCallback)((function(t,e){var r,n=e,a=t;if(!cn(t)){t.persist&&t.persist();var o=t.target?t.target:t.currentTarget,i=o.type,u=o.name,c=o.id,l=o.value,s=o.checked,f=(o.outerHTML,o.options),p=o.multiple;n=e||(u||c),a=/number|range/.test(i)?(r=parseFloat(l),isNaN(r)?"":r):/checkbox/.test(i)?function(t,e,r){if("boolean"===typeof t)return Boolean(e);var n=[],a=!1,o=-1;if(Array.isArray(t))n=t,a=(o=t.indexOf(r))>=0;else if(!r||"true"==r||"false"==r)return Boolean(e);if(e&&r&&!a)return n.concat(r);if(!a)return n;return n.slice(0,o).concat(n.slice(o+1))}(fn(E.values,n),s,l):f&&p?function(t){return Array.from(t).filter((function(t){return t.selected})).map((function(t){return t.value}))}(f):l}n&&L(n,a)}),[L,E.values]),N=jn((function(t){if(cn(t))return function(e){return B(e,t)};B(t)})),H=jn((function(t,e,r){return void 0===e&&(e=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:t,value:e}}),(void 0===r?a:r)?I(E.values):Promise.resolve()})),$=(0,R.useCallback)((function(t,e){t.persist&&t.persist();var r=t.target,n=r.name,a=r.id,o=(r.outerHTML,e||(n||a));H(o,!0)}),[H]),G=jn((function(t){if(cn(t))return function(e){return $(e,t)};$(t)})),W=(0,R.useCallback)((function(t){an(t)?S({type:"SET_FORMIK_STATE",payload:t}):S({type:"SET_FORMIK_STATE",payload:function(){return t}})}),[]),K=(0,R.useCallback)((function(t){S({type:"SET_STATUS",payload:t})}),[]),q=(0,R.useCallback)((function(t){S({type:"SET_ISSUBMITTING",payload:t})}),[]),Y=jn((function(){return S({type:"SUBMIT_ATTEMPT"}),I().then((function(t){var e=t instanceof Error;if(!e&&0===Object.keys(t).length){var r;try{if(void 0===(r=X()))return}catch(n){throw n}return Promise.resolve(r).then((function(t){return m.current&&S({type:"SUBMIT_SUCCESS"}),t})).catch((function(t){if(m.current)throw S({type:"SUBMIT_FAILURE"}),t}))}if(m.current&&(S({type:"SUBMIT_FAILURE"}),e))throw t}))})),J=jn((function(t){t&&t.preventDefault&&an(t.preventDefault)&&t.preventDefault(),t&&t.stopPropagation&&an(t.stopPropagation)&&t.stopPropagation(),Y().catch((function(t){console.warn("Warning: An unhandled error was caught from submitForm()",t)}))})),Q={resetForm:F,validateForm:I,validateField:C,setErrors:D,setFieldError:z,setFieldTouched:H,setFieldValue:L,setStatus:K,setSubmitting:q,setTouched:U,setValues:V,setFormikState:W,submitForm:Y},X=jn((function(){return f(E.values,Q)})),Z=jn((function(t){t&&t.preventDefault&&an(t.preventDefault)&&t.preventDefault(),t&&t.stopPropagation&&an(t.stopPropagation)&&t.stopPropagation(),F()})),tt=(0,R.useCallback)((function(t){return{value:fn(E.values,t),error:fn(E.errors,t),touched:!!fn(E.touched,t),initialValue:fn(d.current,t),initialTouched:!!fn(y.current,t),initialError:fn(h.current,t)}}),[E.errors,E.touched,E.values]),et=(0,R.useCallback)((function(t){return{setValue:function(e,r){return L(t,e,r)},setTouched:function(e,r){return H(t,e,r)},setError:function(e){return z(t,e)}}}),[L,H,z]),rt=(0,R.useCallback)((function(t){var e=on(t),r=e?t.name:t,n=fn(E.values,r),a={name:r,value:n,onChange:N,onBlur:G};if(e){var o=t.type,i=t.value,u=t.as,c=t.multiple;"checkbox"===o?void 0===i?a.checked=!!n:(a.checked=!(!Array.isArray(n)||!~n.indexOf(i)),a.value=i):"radio"===o?(a.checked=n===i,a.value=i):"select"===u&&c&&(a.value=a.value||[],a.multiple=!0)}return a}),[G,N,E.values]),nt=(0,R.useMemo)((function(){return!M()(d.current,E.values)}),[d.current,E.values]),at=(0,R.useMemo)((function(){return"undefined"!==typeof u?nt?E.errors&&0===Object.keys(E.errors).length:!1!==u&&an(u)?u(v):u:E.errors&&0===Object.keys(E.errors).length}),[u,nt,E.errors,v]);return Yr({},E,{initialValues:d.current,initialErrors:h.current,initialTouched:y.current,initialStatus:b.current,handleBlur:G,handleChange:N,handleReset:Z,handleSubmit:J,resetForm:F,setErrors:D,setFormikState:W,setFieldTouched:H,setFieldValue:L,setFieldError:z,setStatus:K,setSubmitting:q,setTouched:U,setValues:V,submitForm:Y,validateForm:I,validateField:C,isValid:at,dirty:nt,unregisterField:x,registerField:P,getFieldProps:rt,getFieldMeta:tt,getFieldHelpers:et,validateOnBlur:a,validateOnChange:r,validateOnMount:i})}function bn(t){var e=yn(t),r=t.component,n=t.children,a=t.render,o=t.innerRef;return(0,R.useImperativeHandle)(o,(function(){return e})),(0,R.createElement)(tn,{value:e},r?(0,R.createElement)(r,e):a?a(e):n?an(n)?n(e):ln(n)?null:R.Children.only(n):null)}function mn(t){var e=Array.isArray(t)?[]:{};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=String(r);!0===Array.isArray(t[n])?e[n]=t[n].map((function(t){return!0===Array.isArray(t)||F(t)?mn(t):""!==t?t:void 0})):F(t[n])?e[n]=mn(t[n]):e[n]=""!==t[n]?t[n]:void 0}return e}function gn(t,e,r){var n=t.slice();return e.forEach((function(e,a){if("undefined"===typeof n[a]){var o=!1!==r.clone&&r.isMergeableObject(e);n[a]=o?c(Array.isArray(e)?[]:{},e,r):e}else r.isMergeableObject(e)?n[a]=c(t[a],e,r):-1===t.indexOf(e)&&n.push(e)})),n}var _n="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?R.useLayoutEffect:R.useEffect;function jn(t){var e=(0,R.useRef)(t);return _n((function(){e.current=t})),(0,R.useCallback)((function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.current.apply(void 0,r)}),[])}function En(t){var e=t.validate,r=t.name,n=t.render,a=t.children,o=t.as,i=t.component,u=Qr(t,["validate","name","render","children","as","component"]),c=Qr(rn(),["validate","validationSchema"]);var l=c.registerField,s=c.unregisterField;(0,R.useEffect)((function(){return l(r,{validate:e}),function(){s(r)}}),[l,s,r,e]);var f=c.getFieldProps(Yr({name:r},u)),p=c.getFieldMeta(r),v={field:f,form:c};if(n)return n(Yr({},v,{meta:p}));if(an(a))return a(Yr({},v,{meta:p}));if(i){if("string"===typeof i){var d=u.innerRef,h=Qr(u,["innerRef"]);return(0,R.createElement)(i,Yr({ref:d},f,h),a)}return(0,R.createElement)(i,Yr({field:f,form:c},u),a)}var y=o||"input";if("string"===typeof y){var b=u.innerRef,m=Qr(u,["innerRef"]);return(0,R.createElement)(y,Yr({ref:b},f,m),a)}return(0,R.createElement)(y,Yr({},f,u),a)}var Sn=(0,R.forwardRef)((function(t,e){var r=t.action,n=Qr(t,["action"]),a=null!=r?r:"#",o=rn(),i=o.handleReset,u=o.handleSubmit;return(0,R.createElement)("form",Yr({onSubmit:u,ref:e,onReset:i,action:a},n))}));function On(t){var e=function(e){return(0,R.createElement)(en,null,(function(r){return r||P(!1),(0,R.createElement)(t,Yr({},e,{formik:r}))}))},r=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+r+")",Kr()(e,t)}Sn.displayName="Form";var An=function(t,e,r){var n=Tn(t);return n.splice(e,0,r),n},Tn=function(t){if(t){if(Array.isArray(t))return[].concat(t);var e=Object.keys(t).map((function(t){return parseInt(t)})).reduce((function(t,e){return e>t?e:t}),0);return Array.from(Yr({},t,{length:e+1}))}return[]},wn=function(t,e){var r="function"===typeof t?t:e;return function(t){if(Array.isArray(t)||on(t)){var e=Tn(t);return r(e)}return t}},kn=function(t){function e(e){var r;return(r=t.call(this,e)||this).updateArrayField=function(t,e,n){var a=r.props,o=a.name;(0,a.formik.setFormikState)((function(r){var a=wn(n,t),i=wn(e,t),u=pn(r.values,o,t(fn(r.values,o))),c=n?a(fn(r.errors,o)):void 0,l=e?i(fn(r.touched,o)):void 0;return nn(c)&&(c=void 0),nn(l)&&(l=void 0),Yr({},r,{values:u,errors:n?pn(r.errors,o,c):r.errors,touched:e?pn(r.touched,o,l):r.touched})}))},r.push=function(t){return r.updateArrayField((function(e){return[].concat(Tn(e),[qr(t)])}),!1,!1)},r.handlePush=function(t){return function(){return r.push(t)}},r.swap=function(t,e){return r.updateArrayField((function(r){return function(t,e,r){var n=Tn(t),a=n[e];return n[e]=n[r],n[r]=a,n}(r,t,e)}),!0,!0)},r.handleSwap=function(t,e){return function(){return r.swap(t,e)}},r.move=function(t,e){return r.updateArrayField((function(r){return function(t,e,r){var n=Tn(t),a=n[e];return n.splice(e,1),n.splice(r,0,a),n}(r,t,e)}),!0,!0)},r.handleMove=function(t,e){return function(){return r.move(t,e)}},r.insert=function(t,e){return r.updateArrayField((function(r){return An(r,t,e)}),(function(e){return An(e,t,null)}),(function(e){return An(e,t,null)}))},r.handleInsert=function(t,e){return function(){return r.insert(t,e)}},r.replace=function(t,e){return r.updateArrayField((function(r){return function(t,e,r){var n=Tn(t);return n[e]=r,n}(r,t,e)}),!1,!1)},r.handleReplace=function(t,e){return function(){return r.replace(t,e)}},r.unshift=function(t){var e=-1;return r.updateArrayField((function(r){var n=r?[t].concat(r):[t];return e=n.length,n}),(function(t){return t?[null].concat(t):[null]}),(function(t){return t?[null].concat(t):[null]})),e},r.handleUnshift=function(t){return function(){return r.unshift(t)}},r.handleRemove=function(t){return function(){return r.remove(t)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(Xr(r)),r.pop=r.pop.bind(Xr(r)),r}Jr(e,t);var r=e.prototype;return r.componentDidUpdate=function(t){this.props.validateOnChange&&this.props.formik.validateOnChange&&!M()(fn(t.formik.values,t.name),fn(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(t){var e;return this.updateArrayField((function(r){var n=r?Tn(r):[];return e||(e=n[t]),an(n.splice)&&n.splice(t,1),an(n.every)&&n.every((function(t){return void 0===t}))?[]:n}),!0,!0),e},r.pop=function(){var t;return this.updateArrayField((function(e){var r=e.slice();return t||(t=r&&r.pop&&r.pop()),r}),!0,!0),t},r.render=function(){var t={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},e=this.props,r=e.component,n=e.render,a=e.children,o=e.name,i=Yr({},t,{form:Qr(e.formik,["validate","validationSchema"]),name:o});return r?(0,R.createElement)(r,i):n?n(i):a?"function"===typeof a?a(i):ln(a)?null:R.Children.only(a):null},e}(R.Component);kn.defaultProps={validateOnChange:!0};var In=function(t){function e(){return t.apply(this,arguments)||this}Jr(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return fn(this.props.formik.errors,this.props.name)!==fn(t.formik.errors,this.props.name)||fn(this.props.formik.touched,this.props.name)!==fn(t.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(t).length},r.render=function(){var t=this.props,e=t.component,r=t.formik,n=t.render,a=t.children,o=t.name,i=Qr(t,["component","formik","render","children","name"]),u=fn(r.touched,o),c=fn(r.errors,o);return u&&c?n?an(n)?n(c):null:a?an(a)?a(c):null:e?(0,R.createElement)(e,i,c):c:null},e}(R.Component),Fn=On(In);R.Component},77:function(t){var e=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,a="undefined"!==typeof Element;function o(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){var u,c,l,s=e(t),f=e(i);if(s&&f){if((c=t.length)!=i.length)return!1;for(u=c;0!==u--;)if(!o(t[u],i[u]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,v=i instanceof Date;if(p!=v)return!1;if(p&&v)return t.getTime()==i.getTime();var d=t instanceof RegExp,h=i instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==i.toString();var y=r(t);if((c=y.length)!==r(i).length)return!1;for(u=c;0!==u--;)if(!n.call(i,y[u]))return!1;if(a&&t instanceof Element&&i instanceof Element)return t===i;for(u=c;0!==u--;)if(("_owner"!==(l=y[u])||!t.$$typeof)&&!o(t[l],i[l]))return!1;return!0}return t!==t&&i!==i}t.exports=function(t,e){try{return o(t,e)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},7322:function(t,e,r){r.d(e,{amj:function(){return f},bwg:function(){return v},GlE:function(){return p}});var n=r(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)},u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),c(t.child))}))}function l(t){return function(e){return n.createElement(s,i({attr:i({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var r,a=t.attr,o=t.size,c=t.title,l=u(t,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,l,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(a)}function f(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"}}]})(t)}function p(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}}]})(t)}function v(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"}}]})(t)}}}]);
//# sourceMappingURL=947.71f9aa3a.chunk.js.map