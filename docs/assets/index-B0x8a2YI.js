(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(i){if(i.ep)return;i.ep=!0;const u=t(i);fetch(i.href,u)}})();const Dr=n=>{const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:parseInt(r)},Ln=(n,r,t,e)=>(t[r]+=Dr(n),e[r].innerText=t[r],t[r]),Vn=n=>{if(n.length===0)throw"No more cards in deck";return n.pop()},Lr=(n,r)=>r===n?"It's a tie":r>n&&r<=21?"Computer wins":"Computer wins!",Rn=(n,r,t)=>{if(!n)throw new Error("Card is required");const e=document.createElement("img");e.src=`/assets/cartas/${n}.png`,e.classList.add("cards"),t[r].append(e)},wn=(n,r,t,e,i)=>{let u=0;do{const f=Vn(r);if(u=Ln(f,t.length-1,t,e),Rn(f,t.length-1,i),n>21)break}while(u<n&&u<=21);return Lr(n,u)};var Tn="1.13.7",_n=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},U=Array.prototype,nn=Object.prototype,An=typeof Symbol<"u"?Symbol.prototype:null,Vr=U.push,R=U.slice,D=nn.toString,Rr=nn.hasOwnProperty,qn=typeof ArrayBuffer<"u",Tr=typeof DataView<"u",qr=Array.isArray,En=Object.keys,On=Object.create,Mn=qn&&ArrayBuffer.isView,Cr=isNaN,Fr=isFinite,Cn=!{toString:null}.propertyIsEnumerable("toString"),Nn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],$r=Math.pow(2,53)-1;function d(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),i=0;i<t;i++)e[i]=arguments[i+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var u=Array(r+1);for(i=0;i<r;i++)u[i]=arguments[i];return u[r]=e,n.apply(this,u)}}function M(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function zr(n){return n===null}function Fn(n){return n===void 0}function $n(n){return n===!0||n===!1||D.call(n)==="[object Boolean]"}function Wr(n){return!!(n&&n.nodeType===1)}function p(n){var r="[object "+n+"]";return function(t){return D.call(t)===r}}const rn=p("String"),zn=p("Number"),Ur=p("Date"),Gr=p("RegExp"),Yr=p("Error"),Wn=p("Symbol"),Un=p("ArrayBuffer");var Gn=p("Function"),Hr=_n.document&&_n.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Hr!="function"&&(Gn=function(n){return typeof n=="function"||!1});const g=Gn,Yn=p("Object");var Hn=Tr&&(!/\[native code\]/.test(String(DataView))||Yn(new DataView(new ArrayBuffer(8)))),tn=typeof Map<"u"&&Yn(new Map),Jr=p("DataView");function Xr(n){return n!=null&&g(n.getInt8)&&Un(n.buffer)}const $=Hn?Xr:Jr,N=qr||p("Array");function E(n,r){return n!=null&&Rr.call(n,r)}var X=p("Arguments");(function(){X(arguments)||(X=function(n){return E(n,"callee")})})();const en=X;function Qr(n){return!Wn(n)&&Fr(n)&&!isNaN(parseFloat(n))}function Jn(n){return zn(n)&&Cr(n)}function Xn(n){return function(){return n}}function Qn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=$r}}function Zn(n){return function(r){return r==null?void 0:r[n]}}const z=Zn("byteLength"),Zr=Qn(z);var Kr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function xr(n){return Mn?Mn(n)&&!$(n):Zr(n)&&Kr.test(D.call(n))}const Kn=qn?xr:Xn(!1),m=Zn("length");function kr(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(i){return r[i]===!0},push:function(i){return r[i]=!0,n.push(i)}}}function xn(n,r){r=kr(r);var t=Nn.length,e=n.constructor,i=g(e)&&e.prototype||nn,u="constructor";for(E(n,u)&&!r.contains(u)&&r.push(u);t--;)u=Nn[t],u in n&&n[u]!==i[u]&&!r.contains(u)&&r.push(u)}function h(n){if(!M(n))return[];if(En)return En(n);var r=[];for(var t in n)E(n,t)&&r.push(t);return Cn&&xn(n,r),r}function br(n){if(n==null)return!0;var r=m(n);return typeof r=="number"&&(N(n)||rn(n)||en(n))?r===0:m(h(n))===0}function kn(n,r){var t=h(r),e=t.length;if(n==null)return!e;for(var i=Object(n),u=0;u<e;u++){var f=t[u];if(r[f]!==i[f]||!(f in i))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Tn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function In(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,z(n))}var Sn="[object DataView]";function Q(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var i=typeof n;return i!=="function"&&i!=="object"&&typeof r!="object"?!1:bn(n,r,t,e)}function bn(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var i=D.call(n);if(i!==D.call(r))return!1;if(Hn&&i=="[object Object]"&&$(n)){if(!$(r))return!1;i=Sn}switch(i){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return An.valueOf.call(n)===An.valueOf.call(r);case"[object ArrayBuffer]":case Sn:return bn(In(n),In(r),t,e)}var u=i==="[object Array]";if(!u&&Kn(n)){var f=z(n);if(f!==z(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;u=!0}if(!u){if(typeof n!="object"||typeof r!="object")return!1;var l=n.constructor,a=r.constructor;if(l!==a&&!(g(l)&&l instanceof l&&g(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var o=t.length;o--;)if(t[o]===n)return e[o]===r;if(t.push(n),e.push(r),u){if(o=n.length,o!==r.length)return!1;for(;o--;)if(!Q(n[o],r[o],t,e))return!1}else{var v=h(n),s;if(o=v.length,h(r).length!==o)return!1;for(;o--;)if(s=v[o],!(E(r,s)&&Q(n[s],r[s],t,e)))return!1}return t.pop(),e.pop(),!0}function jr(n,r){return Q(n,r)}function T(n){if(!M(n))return[];var r=[];for(var t in n)r.push(t);return Cn&&xn(n,r),r}function un(n){var r=m(n);return function(t){if(t==null)return!1;var e=T(t);if(m(e))return!1;for(var i=0;i<r;i++)if(!g(t[n[i]]))return!1;return n!==rr||!g(t[fn])}}var fn="forEach",jn="has",ln=["clear","delete"],nr=["get",jn,"set"],nt=ln.concat(fn,nr),rr=ln.concat(nr),rt=["add"].concat(ln,fn,jn);const tt=tn?un(nt):p("Map"),et=tn?un(rr):p("WeakMap"),ut=tn?un(rt):p("Set"),it=p("WeakSet");function B(n){for(var r=h(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=n[r[i]];return e}function ft(n){for(var r=h(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=[r[i],n[r[i]]];return e}function tr(n){for(var r={},t=h(n),e=0,i=t.length;e<i;e++)r[n[t[e]]]=t[e];return r}function Z(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function on(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var i=1;i<e;i++)for(var u=arguments[i],f=n(u),l=f.length,a=0;a<l;a++){var o=f[a];(!r||t[o]===void 0)&&(t[o]=u[o])}return t}}const er=on(T),W=on(h),ur=on(T,!0);function lt(){return function(){}}function ir(n){if(!M(n))return{};if(On)return On(n);var r=lt();r.prototype=n;var t=new r;return r.prototype=null,t}function ot(n,r){var t=ir(n);return r&&W(t,r),t}function at(n){return M(n)?N(n)?n.slice():er({},n):n}function ct(n,r){return r(n),n}function fr(n){return N(n)?n:[n]}c.toPath=fr;function q(n){return c.toPath(n)}function an(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function lr(n,r,t){var e=an(n,q(r));return Fn(e)?t:e}function st(n,r){r=q(r);for(var t=r.length,e=0;e<t;e++){var i=r[e];if(!E(n,i))return!1;n=n[i]}return!!t}function cn(n){return n}function L(n){return n=W({},n),function(r){return kn(r,n)}}function sn(n){return n=q(n),function(r){return an(r,n)}}function C(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,i,u){return n.call(r,e,i,u)};case 4:return function(e,i,u,f){return n.call(r,e,i,u,f)}}return function(){return n.apply(r,arguments)}}function or(n,r,t){return n==null?cn:g(n)?C(n,r,t):M(n)&&!N(n)?L(n):sn(n)}function vn(n,r){return or(n,r,1/0)}c.iteratee=vn;function y(n,r,t){return c.iteratee!==vn?c.iteratee(n,r):or(n,r,t)}function vt(n,r,t){r=y(r,t);for(var e=h(n),i=e.length,u={},f=0;f<i;f++){var l=e[f];u[l]=r(n[l],l,n)}return u}function ar(){}function ht(n){return n==null?ar:function(r){return lr(n,r)}}function pt(n,r,t){var e=Array(Math.max(0,n));r=C(r,t,1);for(var i=0;i<n;i++)e[i]=r(i);return e}function K(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const V=Date.now||function(){return new Date().getTime()};function cr(n){var r=function(u){return n[u]},t="(?:"+h(n).join("|")+")",e=RegExp(t),i=RegExp(t,"g");return function(u){return u=u==null?"":""+u,e.test(u)?u.replace(i,r):u}}const sr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},gt=cr(sr),dt=tr(sr),mt=cr(dt),yt=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Y=/(.)^/,wt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},_t=/\\|'|\r|\n|\u2028|\u2029/g;function At(n){return"\\"+wt[n]}var Et=/^\s*(\w|\$)+\s*$/;function Ot(n,r,t){!r&&t&&(r=t),r=ur({},r,c.templateSettings);var e=RegExp([(r.escape||Y).source,(r.interpolate||Y).source,(r.evaluate||Y).source].join("|")+"|$","g"),i=0,u="__p+='";n.replace(e,function(o,v,s,mn,yn){return u+=n.slice(i,yn).replace(_t,At),i=yn+o.length,v?u+=`'+
((__t=(`+v+`))==null?'':_.escape(__t))+
'`:s?u+=`'+
((__t=(`+s+`))==null?'':__t)+
'`:mn&&(u+=`';
`+mn+`
__p+='`),o}),u+=`';
`;var f=r.variable;if(f){if(!Et.test(f))throw new Error("variable is not a bare identifier: "+f)}else u=`with(obj||{}){
`+u+`}
`,f="obj";u=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+u+`return __p;
`;var l;try{l=new Function(f,"_",u)}catch(o){throw o.source=u,o}var a=function(o){return l.call(this,o,c)};return a.source="function("+f+`){
`+u+"}",a}function Mt(n,r,t){r=q(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var i=0;i<e;i++){var u=n==null?void 0:n[r[i]];u===void 0&&(u=t,i=e),n=g(u)?u.call(n):u}return n}var Nt=0;function It(n){var r=++Nt+"";return n?n+r:r}function St(n){var r=c(n);return r._chain=!0,r}function vr(n,r,t,e,i){if(!(e instanceof r))return n.apply(t,i);var u=ir(n.prototype),f=n.apply(u,i);return M(f)?f:u}var P=d(function(n,r){var t=P.placeholder,e=function(){for(var i=0,u=r.length,f=Array(u),l=0;l<u;l++)f[l]=r[l]===t?arguments[i++]:r[l];for(;i<arguments.length;)f.push(arguments[i++]);return vr(n,e,this,this,f)};return e});P.placeholder=c;const hr=d(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=d(function(i){return vr(n,e,r,this,t.concat(i))});return e}),w=Qn(m);function I(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var i=e.length,u=0,f=m(n);u<f;u++){var l=n[u];if(w(l)&&(N(l)||en(l)))if(r>1)I(l,r-1,t,e),i=e.length;else for(var a=0,o=l.length;a<o;)e[i++]=l[a++];else t||(e[i++]=l)}return e}const Bt=d(function(n,r){r=I(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=hr(n[e],n)}return n});function Pt(n,r){var t=function(e){var i=t.cache,u=""+(r?r.apply(this,arguments):e);return E(i,u)||(i[u]=n.apply(this,arguments)),i[u]};return t.cache={},t}const pr=d(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Dt=P(pr,c,1);function Lt(n,r,t){var e,i,u,f,l=0;t||(t={});var a=function(){l=t.leading===!1?0:V(),e=null,f=n.apply(i,u),e||(i=u=null)},o=function(){var v=V();!l&&t.leading===!1&&(l=v);var s=r-(v-l);return i=this,u=arguments,s<=0||s>r?(e&&(clearTimeout(e),e=null),l=v,f=n.apply(i,u),e||(i=u=null)):!e&&t.trailing!==!1&&(e=setTimeout(a,s)),f};return o.cancel=function(){clearTimeout(e),l=0,e=i=u=null},o}function Vt(n,r,t){var e,i,u,f,l,a=function(){var v=V()-i;r>v?e=setTimeout(a,r-v):(e=null,t||(f=n.apply(l,u)),e||(u=l=null))},o=d(function(v){return l=this,u=v,i=V(),e||(e=setTimeout(a,r),t&&(f=n.apply(l,u))),f});return o.cancel=function(){clearTimeout(e),e=u=l=null},o}function Rt(n,r){return P(r,n)}function hn(n){return function(){return!n.apply(this,arguments)}}function Tt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function qt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function gr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Ct=P(gr,2);function dr(n,r,t){r=y(r,t);for(var e=h(n),i,u=0,f=e.length;u<f;u++)if(i=e[u],r(n[i],i,n))return i}function mr(n){return function(r,t,e){t=y(t,e);for(var i=m(r),u=n>0?0:i-1;u>=0&&u<i;u+=n)if(t(r[u],u,r))return u;return-1}}const pn=mr(1),yr=mr(-1);function wr(n,r,t,e){t=y(t,e,1);for(var i=t(r),u=0,f=m(n);u<f;){var l=Math.floor((u+f)/2);t(n[l])<i?u=l+1:f=l}return u}function _r(n,r,t){return function(e,i,u){var f=0,l=m(e);if(typeof u=="number")n>0?f=u>=0?u:Math.max(u+l,f):l=u>=0?Math.min(u+1,l):u+l+1;else if(t&&u&&l)return u=t(e,i),e[u]===i?u:-1;if(i!==i)return u=r(R.call(e,f,l),Jn),u>=0?u+f:-1;for(u=n>0?f:l-1;u>=0&&u<l;u+=n)if(e[u]===i)return u;return-1}}const Ar=_r(1,pn,wr),Ft=_r(-1,yr);function x(n,r,t){var e=w(n)?pn:dr,i=e(n,r,t);if(i!==void 0&&i!==-1)return n[i]}function $t(n,r){return x(n,L(r))}function A(n,r,t){r=C(r,t);var e,i;if(w(n))for(e=0,i=n.length;e<i;e++)r(n[e],e,n);else{var u=h(n);for(e=0,i=u.length;e<i;e++)r(n[u[e]],u[e],n)}return n}function O(n,r,t){r=y(r,t);for(var e=!w(n)&&h(n),i=(e||n).length,u=Array(i),f=0;f<i;f++){var l=e?e[f]:f;u[f]=r(n[l],l,n)}return u}function Er(n){var r=function(t,e,i,u){var f=!w(t)&&h(t),l=(f||t).length,a=n>0?0:l-1;for(u||(i=t[f?f[a]:a],a+=n);a>=0&&a<l;a+=n){var o=f?f[a]:a;i=e(i,t[o],o,t)}return i};return function(t,e,i,u){var f=arguments.length>=3;return r(t,C(e,u,4),i,f)}}const H=Er(1),Bn=Er(-1);function S(n,r,t){var e=[];return r=y(r,t),A(n,function(i,u,f){r(i,u,f)&&e.push(i)}),e}function zt(n,r,t){return S(n,hn(y(r)),t)}function Pn(n,r,t){r=y(r,t);for(var e=!w(n)&&h(n),i=(e||n).length,u=0;u<i;u++){var f=e?e[u]:u;if(!r(n[f],f,n))return!1}return!0}function Dn(n,r,t){r=y(r,t);for(var e=!w(n)&&h(n),i=(e||n).length,u=0;u<i;u++){var f=e?e[u]:u;if(r(n[f],f,n))return!0}return!1}function _(n,r,t,e){return w(n)||(n=B(n)),(typeof t!="number"||e)&&(t=0),Ar(n,r,t)>=0}const Wt=d(function(n,r,t){var e,i;return g(r)?i=r:(r=q(r),e=r.slice(0,-1),r=r[r.length-1]),O(n,function(u){var f=i;if(!f){if(e&&e.length&&(u=an(u,e)),u==null)return;f=u[r]}return f==null?f:f.apply(u,t)})});function gn(n,r){return O(n,sn(r))}function Ut(n,r){return S(n,L(r))}function Or(n,r,t){var e=-1/0,i=-1/0,u,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:B(n);for(var l=0,a=n.length;l<a;l++)u=n[l],u!=null&&u>e&&(e=u)}else r=y(r,t),A(n,function(o,v,s){f=r(o,v,s),(f>i||f===-1/0&&e===-1/0)&&(e=o,i=f)});return e}function Gt(n,r,t){var e=1/0,i=1/0,u,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:B(n);for(var l=0,a=n.length;l<a;l++)u=n[l],u!=null&&u<e&&(e=u)}else r=y(r,t),A(n,function(o,v,s){f=r(o,v,s),(f<i||f===1/0&&e===1/0)&&(e=o,i=f)});return e}var Yt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Mr(n){return n?N(n)?R.call(n):rn(n)?n.match(Yt):w(n)?O(n,cn):B(n):[]}function Nr(n,r,t){if(r==null||t)return w(n)||(n=B(n)),n[K(n.length-1)];var e=Mr(n),i=m(e);r=Math.max(Math.min(r,i),0);for(var u=i-1,f=0;f<r;f++){var l=K(f,u),a=e[f];e[f]=e[l],e[l]=a}return e.slice(0,r)}function Ht(n){return Nr(n,1/0)}function Jt(n,r,t){var e=0;return r=y(r,t),gn(O(n,function(i,u,f){return{value:i,index:e++,criteria:r(i,u,f)}}).sort(function(i,u){var f=i.criteria,l=u.criteria;if(f!==l){if(f>l||f===void 0)return 1;if(f<l||l===void 0)return-1}return i.index-u.index}),"value")}function G(n,r){return function(t,e,i){var u=r?[[],[]]:{};return e=y(e,i),A(t,function(f,l){var a=e(f,l,t);n(u,f,a)}),u}}const Xt=G(function(n,r,t){E(n,t)?n[t].push(r):n[t]=[r]}),Qt=G(function(n,r,t){n[t]=r}),Zt=G(function(n,r,t){E(n,t)?n[t]++:n[t]=1}),Kt=G(function(n,r,t){n[t?0:1].push(r)},!0);function xt(n){return n==null?0:w(n)?n.length:h(n).length}function kt(n,r,t){return r in t}const Ir=d(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=C(e,r[1])),r=T(n)):(e=kt,r=I(r,!1,!1),n=Object(n));for(var i=0,u=r.length;i<u;i++){var f=r[i],l=n[f];e(l,f,n)&&(t[f]=l)}return t}),bt=d(function(n,r){var t=r[0],e;return g(t)?(t=hn(t),r.length>1&&(e=r[1])):(r=O(I(r,!1,!1),String),t=function(i,u){return!_(r,u)}),Ir(n,t,e)});function Sr(n,r,t){return R.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function J(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Sr(n,n.length-r)}function F(n,r,t){return R.call(n,r==null||t?1:r)}function jt(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:F(n,Math.max(0,n.length-r))}function ne(n){return S(n,Boolean)}function re(n,r){return I(n,r,!1)}const Br=d(function(n,r){return r=I(r,!0,!0),S(n,function(t){return!_(r,t)})}),te=d(function(n,r){return Br(n,r)});function k(n,r,t,e){$n(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var i=[],u=[],f=0,l=m(n);f<l;f++){var a=n[f],o=t?t(a,f,n):a;r&&!t?((!f||u!==o)&&i.push(a),u=o):t?_(u,o)||(u.push(o),i.push(a)):_(i,a)||i.push(a)}return i}const ee=d(function(n){return k(I(n,!0,!0))});function ue(n){for(var r=[],t=arguments.length,e=0,i=m(n);e<i;e++){var u=n[e];if(!_(r,u)){var f;for(f=1;f<t&&_(arguments[f],u);f++);f===t&&r.push(u)}}return r}function b(n){for(var r=n&&Or(n,m).length||0,t=Array(r),e=0;e<r;e++)t[e]=gn(n,e);return t}const ie=d(b);function fe(n,r){for(var t={},e=0,i=m(n);e<i;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function le(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),i=Array(e),u=0;u<e;u++,n+=t)i[u]=n;return i}function oe(n,r){if(r==null||r<1)return[];for(var t=[],e=0,i=n.length;e<i;)t.push(R.call(n,e,e+=r));return t}function dn(n,r){return n._chain?c(r).chain():r}function Pr(n){return A(Z(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Vr.apply(e,arguments),dn(this,t.apply(c,e))}}),c}A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=U[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),dn(this,t)}});A(["concat","join","slice"],function(n){var r=U[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),dn(this,t)}});const ae=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Tn,after:qt,all:Pn,allKeys:T,any:Dn,assign:W,before:gr,bind:hr,bindAll:Bt,chain:St,chunk:oe,clone:at,collect:O,compact:ne,compose:Tt,constant:Xn,contains:_,countBy:Zt,create:ot,debounce:Vt,default:c,defaults:ur,defer:Dt,delay:pr,detect:x,difference:Br,drop:F,each:A,escape:gt,every:Pn,extend:er,extendOwn:W,filter:S,find:x,findIndex:pn,findKey:dr,findLastIndex:yr,findWhere:$t,first:J,flatten:re,foldl:H,foldr:Bn,forEach:A,functions:Z,get:lr,groupBy:Xt,has:st,head:J,identity:cn,include:_,includes:_,indexBy:Qt,indexOf:Ar,initial:Sr,inject:H,intersection:ue,invert:tr,invoke:Wt,isArguments:en,isArray:N,isArrayBuffer:Un,isBoolean:$n,isDataView:$,isDate:Ur,isElement:Wr,isEmpty:br,isEqual:jr,isError:Yr,isFinite:Qr,isFunction:g,isMap:tt,isMatch:kn,isNaN:Jn,isNull:zr,isNumber:zn,isObject:M,isRegExp:Gr,isSet:ut,isString:rn,isSymbol:Wn,isTypedArray:Kn,isUndefined:Fn,isWeakMap:et,isWeakSet:it,iteratee:vn,keys:h,last:jt,lastIndexOf:Ft,map:O,mapObject:vt,matcher:L,matches:L,max:Or,memoize:Pt,methods:Z,min:Gt,mixin:Pr,negate:hn,noop:ar,now:V,object:fe,omit:bt,once:Ct,pairs:ft,partial:P,partition:Kt,pick:Ir,pluck:gn,property:sn,propertyOf:ht,random:K,range:le,reduce:H,reduceRight:Bn,reject:zt,rest:F,restArguments:d,result:Mt,sample:Nr,select:S,shuffle:Ht,size:xt,some:Dn,sortBy:Jt,sortedIndex:wr,tail:F,take:J,tap:ct,template:Ot,templateSettings:yt,throttle:Lt,times:pt,toArray:Mr,toPath:fr,transpose:b,unescape:mt,union:ee,uniq:k,unique:k,uniqueId:It,unzip:b,values:B,where:Ut,without:te,wrap:Rt,zip:ie},Symbol.toStringTag,{value:"Module"}));var j=Pr(ae);j._=j;const ce=(n,r)=>{if(!n)throw new Error("Card types is needed");if(n.length===0)throw new Error("Card types is empty");if(!r)throw new Error("Especial types is needed");if(r.length===0)throw new Error("Especial types is empty");let t=[];for(let e=2;e<=10;e++)for(let i of n)t.push(e+i);for(let e of n)for(let i of r)t.push(i+e);return j.shuffle(t)};(()=>{let n;const r=["C","D","H","S"],t=["A","J","Q","K"];let e=[];const i=document.querySelector("#btnAsk"),u=document.querySelector("#btnStop"),f=document.querySelector("#btnNew"),l=document.querySelectorAll("small"),a=document.querySelectorAll(".divCards"),o=(v=2)=>{n=ce(r,t),e=Array(v).fill(0),l.forEach(s=>s.innerText=0),a.forEach(s=>s.innerHTML=""),i.disabled=!1,u.disabled=!1};return i.addEventListener("click",()=>{const v=Vn(n),s=Ln(v,0,e,l);Rn(v,0,a),s>21?(i.disabled=!0,u.disabled=!0,Swal.fire({icon:"error",title:"You lost...",text:wn(s,n,e,l,a)})):s===21&&(i.disabled=!0,u.disabled=!0,Swal.fire({title:"Good job!",text:"You win!",icon:"success"}))}),u.addEventListener("click",()=>{const[v]=e,s=wn(v,n,e,l,a);Swal.fire({icon:s==="It's a tie"?"info":"error",title:s==="It's a tie"?"Nobody won":"You lost...",text:s}),i.disabled=!0,u.disabled=!0}),f.addEventListener("click",()=>{o()}),{newGame:o}})();
