const oc="modulepreload",sc=function(e){return"/apuntes/"+e},es={},ee=function(r,n,t){if(!n||n.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=sc(s),s in es)return;es[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!t)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":oc,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>r()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function vo(e,r){const n=Object.create(null),t=e.split(",");for(let o=0;o<t.length;o++)n[t[o]]=!0;return r?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Pe={},on=[],or=()=>{},ac=()=>!1,ic=/^on[^a-z]/,Dn=e=>ic.test(e),bo=e=>e.startsWith("onUpdate:"),je=Object.assign,yo=(e,r)=>{const n=e.indexOf(r);n>-1&&e.splice(n,1)},cc=Object.prototype.hasOwnProperty,pe=(e,r)=>cc.call(e,r),Z=Array.isArray,sn=e=>Et(e)==="[object Map]",Sa=e=>Et(e)==="[object Set]",se=e=>typeof e=="function",ge=e=>typeof e=="string",wo=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",_a=e=>xe(e)&&se(e.then)&&se(e.catch),Pa=Object.prototype.toString,Et=e=>Pa.call(e),lc=e=>Et(e).slice(8,-1),xa=e=>Et(e)==="[object Object]",So=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tt=e=>{const r=Object.create(null);return n=>r[n]||(r[n]=e(n))},uc=/-(\w)/g,dr=Tt(e=>e.replace(uc,(r,n)=>n?n.toUpperCase():"")),dc=/\B([A-Z])/g,Zr=Tt(e=>e.replace(dc,"-$1").toLowerCase()),kt=Tt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mt=Tt(e=>e?`on${kt(e)}`:""),qn=(e,r)=>!Object.is(e,r),Ft=(e,r)=>{for(let n=0;n<e.length;n++)e[n](r)},ut=(e,r,n)=>{Object.defineProperty(e,r,{configurable:!0,enumerable:!1,value:n})},pc=e=>{const r=parseFloat(e);return isNaN(r)?e:r},mc=e=>{const r=ge(e)?Number(e):NaN;return isNaN(r)?e:r};let rs;const eo=()=>rs||(rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bn(e){if(Z(e)){const r={};for(let n=0;n<e.length;n++){const t=e[n],o=ge(t)?vc(t):Bn(t);if(o)for(const s in o)r[s]=o[s]}return r}else{if(ge(e))return e;if(xe(e))return e}}const hc=/;(?![^(]*\))/g,fc=/:([^]+)/,gc=/\/\*[^]*?\*\//g;function vc(e){const r={};return e.replace(gc,"").split(hc).forEach(n=>{if(n){const t=n.split(fc);t.length>1&&(r[t[0].trim()]=t[1].trim())}}),r}function Ve(e){let r="";if(ge(e))r=e;else if(Z(e))for(let n=0;n<e.length;n++){const t=Ve(e[n]);t&&(r+=t+" ")}else if(xe(e))for(const n in e)e[n]&&(r+=n+" ");return r.trim()}const bc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yc=vo(bc);function Ea(e){return!!e||e===""}const Ae=e=>ge(e)?e:e==null?"":Z(e)||xe(e)&&(e.toString===Pa||!se(e.toString))?JSON.stringify(e,Ta,2):String(e),Ta=(e,r)=>r&&r.__v_isRef?Ta(e,r.value):sn(r)?{[`Map(${r.size})`]:[...r.entries()].reduce((n,[t,o])=>(n[`${t} =>`]=o,n),{})}:Sa(r)?{[`Set(${r.size})`]:[...r.values()]}:xe(r)&&!Z(r)&&!xa(r)?String(r):r;let Ye;class wc{constructor(r=!1){this.detached=r,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!r&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(r){if(this._active){const n=Ye;try{return Ye=this,r()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(r){if(this._active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!r){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Sc(e,r=Ye){r&&r.active&&r.effects.push(e)}function ka(){return Ye}function _c(e){Ye&&Ye.cleanups.push(e)}const _o=e=>{const r=new Set(e);return r.w=0,r.n=0,r},Ca=e=>(e.w&Rr)>0,Ia=e=>(e.n&Rr)>0,Pc=({deps:e})=>{if(e.length)for(let r=0;r<e.length;r++)e[r].w|=Rr},xc=e=>{const{deps:r}=e;if(r.length){let n=0;for(let t=0;t<r.length;t++){const o=r[t];Ca(o)&&!Ia(o)?o.delete(e):r[n++]=o,o.w&=~Rr,o.n&=~Rr}r.length=n}},dt=new WeakMap;let En=0,Rr=1;const ro=30;let nr;const Jr=Symbol(""),no=Symbol("");class Po{constructor(r,n=null,t){this.fn=r,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sc(this,t)}run(){if(!this.active)return this.fn();let r=nr,n=Lr;for(;r;){if(r===this)return;r=r.parent}try{return this.parent=nr,nr=this,Lr=!0,Rr=1<<++En,En<=ro?Pc(this):ns(this),this.fn()}finally{En<=ro&&xc(this),Rr=1<<--En,nr=this.parent,Lr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nr===this?this.deferStop=!0:this.active&&(ns(this),this.onStop&&this.onStop(),this.active=!1)}}function ns(e){const{deps:r}=e;if(r.length){for(let n=0;n<r.length;n++)r[n].delete(e);r.length=0}}let Lr=!0;const ja=[];function gn(){ja.push(Lr),Lr=!1}function vn(){const e=ja.pop();Lr=e===void 0?!0:e}function Je(e,r,n){if(Lr&&nr){let t=dt.get(e);t||dt.set(e,t=new Map);let o=t.get(n);o||t.set(n,o=_o()),La(o)}}function La(e,r){let n=!1;En<=ro?Ia(e)||(e.n|=Rr,n=!Ca(e)):n=!e.has(nr),n&&(e.add(nr),nr.deps.push(e))}function br(e,r,n,t,o,s){const a=dt.get(e);if(!a)return;let c=[];if(r==="clear")c=[...a.values()];else if(n==="length"&&Z(e)){const i=Number(t);a.forEach((l,u)=>{(u==="length"||u>=i)&&c.push(l)})}else switch(n!==void 0&&c.push(a.get(n)),r){case"add":Z(e)?So(n)&&c.push(a.get("length")):(c.push(a.get(Jr)),sn(e)&&c.push(a.get(no)));break;case"delete":Z(e)||(c.push(a.get(Jr)),sn(e)&&c.push(a.get(no)));break;case"set":sn(e)&&c.push(a.get(Jr));break}if(c.length===1)c[0]&&to(c[0]);else{const i=[];for(const l of c)l&&i.push(...l);to(_o(i))}}function to(e,r){const n=Z(e)?e:[...e];for(const t of n)t.computed&&ts(t);for(const t of n)t.computed||ts(t)}function ts(e,r){(e!==nr||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Ec(e,r){var n;return(n=dt.get(e))==null?void 0:n.get(r)}const Tc=vo("__proto__,__v_isRef,__isVue"),Aa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wo)),kc=xo(),Cc=xo(!1,!0),Ic=xo(!0),os=jc();function jc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(r=>{e[r]=function(...n){const t=he(this);for(let s=0,a=this.length;s<a;s++)Je(t,"get",s+"");const o=t[r](...n);return o===-1||o===!1?t[r](...n.map(he)):o}}),["push","pop","shift","unshift","splice"].forEach(r=>{e[r]=function(...n){gn();const t=he(this)[r].apply(this,n);return vn(),t}}),e}function Lc(e){const r=he(this);return Je(r,"has",e),r.hasOwnProperty(e)}function xo(e=!1,r=!1){return function(t,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return r;if(o==="__v_raw"&&s===(e?r?Jc:Na:r?za:Oa).get(t))return t;const a=Z(t);if(!e){if(a&&pe(os,o))return Reflect.get(os,o,s);if(o==="hasOwnProperty")return Lc}const c=Reflect.get(t,o,s);return(wo(o)?Aa.has(o):Tc(o))||(e||Je(t,"get",o),r)?c:Re(c)?a&&So(o)?c:c.value:xe(c)?e?bn(c):Un(c):c}}const Ac=qa(),qc=qa(!0);function qa(e=!1){return function(n,t,o,s){let a=n[t];if(un(a)&&Re(a)&&!Re(o))return!1;if(!e&&(!pt(o)&&!un(o)&&(a=he(a),o=he(o)),!Z(n)&&Re(a)&&!Re(o)))return a.value=o,!0;const c=Z(n)&&So(t)?Number(t)<n.length:pe(n,t),i=Reflect.set(n,t,o,s);return n===he(s)&&(c?qn(o,a)&&br(n,"set",t,o):br(n,"add",t,o)),i}}function Rc(e,r){const n=pe(e,r);e[r];const t=Reflect.deleteProperty(e,r);return t&&n&&br(e,"delete",r,void 0),t}function Oc(e,r){const n=Reflect.has(e,r);return(!wo(r)||!Aa.has(r))&&Je(e,"has",r),n}function zc(e){return Je(e,"iterate",Z(e)?"length":Jr),Reflect.ownKeys(e)}const Ra={get:kc,set:Ac,deleteProperty:Rc,has:Oc,ownKeys:zc},Nc={get:Ic,set(e,r){return!0},deleteProperty(e,r){return!0}},Mc=je({},Ra,{get:Cc,set:qc}),Eo=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function Yn(e,r,n=!1,t=!1){e=e.__v_raw;const o=he(e),s=he(r);n||(r!==s&&Je(o,"get",r),Je(o,"get",s));const{has:a}=Ct(o),c=t?Eo:n?Co:Rn;if(a.call(o,r))return c(e.get(r));if(a.call(o,s))return c(e.get(s));e!==o&&e.get(r)}function Zn(e,r=!1){const n=this.__v_raw,t=he(n),o=he(e);return r||(e!==o&&Je(t,"has",e),Je(t,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Xn(e,r=!1){return e=e.__v_raw,!r&&Je(he(e),"iterate",Jr),Reflect.get(e,"size",e)}function ss(e){e=he(e);const r=he(this);return Ct(r).has.call(r,e)||(r.add(e),br(r,"add",e,e)),this}function as(e,r){r=he(r);const n=he(this),{has:t,get:o}=Ct(n);let s=t.call(n,e);s||(e=he(e),s=t.call(n,e));const a=o.call(n,e);return n.set(e,r),s?qn(r,a)&&br(n,"set",e,r):br(n,"add",e,r),this}function is(e){const r=he(this),{has:n,get:t}=Ct(r);let o=n.call(r,e);o||(e=he(e),o=n.call(r,e)),t&&t.call(r,e);const s=r.delete(e);return o&&br(r,"delete",e,void 0),s}function cs(){const e=he(this),r=e.size!==0,n=e.clear();return r&&br(e,"clear",void 0,void 0),n}function Kn(e,r){return function(t,o){const s=this,a=s.__v_raw,c=he(a),i=r?Eo:e?Co:Rn;return!e&&Je(c,"iterate",Jr),a.forEach((l,u)=>t.call(o,i(l),i(u),s))}}function Qn(e,r,n){return function(...t){const o=this.__v_raw,s=he(o),a=sn(s),c=e==="entries"||e===Symbol.iterator&&a,i=e==="keys"&&a,l=o[e](...t),u=n?Eo:r?Co:Rn;return!r&&Je(s,"iterate",i?no:Jr),{next(){const{value:d,done:m}=l.next();return m?{value:d,done:m}:{value:c?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function xr(e){return function(...r){return e==="delete"?!1:this}}function Fc(){const e={get(s){return Yn(this,s)},get size(){return Xn(this)},has:Zn,add:ss,set:as,delete:is,clear:cs,forEach:Kn(!1,!1)},r={get(s){return Yn(this,s,!1,!0)},get size(){return Xn(this)},has:Zn,add:ss,set:as,delete:is,clear:cs,forEach:Kn(!1,!0)},n={get(s){return Yn(this,s,!0)},get size(){return Xn(this,!0)},has(s){return Zn.call(this,s,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:Kn(!0,!1)},t={get(s){return Yn(this,s,!0,!0)},get size(){return Xn(this,!0)},has(s){return Zn.call(this,s,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Qn(s,!1,!1),n[s]=Qn(s,!0,!1),r[s]=Qn(s,!1,!0),t[s]=Qn(s,!0,!0)}),[e,n,r,t]}const[Dc,Bc,Uc,Hc]=Fc();function To(e,r){const n=r?e?Hc:Uc:e?Bc:Dc;return(t,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?t:Reflect.get(pe(n,o)&&o in t?n:t,o,s)}const Wc={get:To(!1,!1)},$c={get:To(!1,!0)},Vc={get:To(!0,!1)},Oa=new WeakMap,za=new WeakMap,Na=new WeakMap,Jc=new WeakMap;function Gc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yc(e){return e.__v_skip||!Object.isExtensible(e)?0:Gc(lc(e))}function Un(e){return un(e)?e:ko(e,!1,Ra,Wc,Oa)}function Ma(e){return ko(e,!1,Mc,$c,za)}function bn(e){return ko(e,!0,Nc,Vc,Na)}function ko(e,r,n,t,o){if(!xe(e)||e.__v_raw&&!(r&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const a=Yc(e);if(a===0)return e;const c=new Proxy(e,a===2?t:n);return o.set(e,c),c}function an(e){return un(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function un(e){return!!(e&&e.__v_isReadonly)}function pt(e){return!!(e&&e.__v_isShallow)}function Fa(e){return an(e)||un(e)}function he(e){const r=e&&e.__v_raw;return r?he(r):e}function Da(e){return ut(e,"__v_skip",!0),e}const Rn=e=>xe(e)?Un(e):e,Co=e=>xe(e)?bn(e):e;function Ba(e){Lr&&nr&&(e=he(e),La(e.dep||(e.dep=_o())))}function Ua(e,r){e=he(e);const n=e.dep;n&&to(n)}function Re(e){return!!(e&&e.__v_isRef===!0)}function fe(e){return Ha(e,!1)}function Io(e){return Ha(e,!0)}function Ha(e,r){return Re(e)?e:new Zc(e,r)}class Zc{constructor(r,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?r:he(r),this._value=n?r:Rn(r)}get value(){return Ba(this),this._value}set value(r){const n=this.__v_isShallow||pt(r)||un(r);r=n?r:he(r),qn(r,this._rawValue)&&(this._rawValue=r,this._value=n?r:Rn(r),Ua(this))}}function Q(e){return Re(e)?e.value:e}const Xc={get:(e,r,n)=>Q(Reflect.get(e,r,n)),set:(e,r,n,t)=>{const o=e[r];return Re(o)&&!Re(n)?(o.value=n,!0):Reflect.set(e,r,n,t)}};function Wa(e){return an(e)?e:new Proxy(e,Xc)}function It(e){const r=Z(e)?new Array(e.length):{};for(const n in e)r[n]=Qc(e,n);return r}class Kc{constructor(r,n,t){this._object=r,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const r=this._object[this._key];return r===void 0?this._defaultValue:r}set value(r){this._object[this._key]=r}get dep(){return Ec(he(this._object),this._key)}}function Qc(e,r,n){const t=e[r];return Re(t)?t:new Kc(e,r,n)}class el{constructor(r,n,t,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Po(r,()=>{this._dirty||(this._dirty=!0,Ua(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=t}get value(){const r=he(this);return Ba(r),(r._dirty||!r._cacheable)&&(r._dirty=!1,r._value=r.effect.run()),r._value}set value(r){this._setter(r)}}function rl(e,r,n=!1){let t,o;const s=se(e);return s?(t=e,o=or):(t=e.get,o=e.set),new el(t,o,s||!o,n)}function Ar(e,r,n,t){let o;try{o=t?e(...t):e()}catch(s){Hn(s,r,n)}return o}function Qe(e,r,n,t){if(se(e)){const s=Ar(e,r,n,t);return s&&_a(s)&&s.catch(a=>{Hn(a,r,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Qe(e[s],r,n,t));return o}function Hn(e,r,n,t=!0){const o=r?r.vnode:null;if(r){let s=r.parent;const a=r.proxy,c=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,c)===!1)return}s=s.parent}const i=r.appContext.config.errorHandler;if(i){Ar(i,null,10,[e,a,c]);return}}nl(e,n,o,t)}function nl(e,r,n,t=!0){console.error(e)}let On=!1,oo=!1;const De=[];let ur=0;const cn=[];let fr=null,Hr=0;const $a=Promise.resolve();let jo=null;function Wn(e){const r=jo||$a;return e?r.then(this?e.bind(this):e):r}function tl(e){let r=ur+1,n=De.length;for(;r<n;){const t=r+n>>>1;zn(De[t])<e?r=t+1:n=t}return r}function jt(e){(!De.length||!De.includes(e,On&&e.allowRecurse?ur+1:ur))&&(e.id==null?De.push(e):De.splice(tl(e.id),0,e),Va())}function Va(){!On&&!oo&&(oo=!0,jo=$a.then(Ja))}function ol(e){const r=De.indexOf(e);r>ur&&De.splice(r,1)}function sl(e){Z(e)?cn.push(...e):(!fr||!fr.includes(e,e.allowRecurse?Hr+1:Hr))&&cn.push(e),Va()}function ls(e,r=On?ur+1:0){for(;r<De.length;r++){const n=De[r];n&&n.pre&&(De.splice(r,1),r--,n())}}function mt(e){if(cn.length){const r=[...new Set(cn)];if(cn.length=0,fr){fr.push(...r);return}for(fr=r,fr.sort((n,t)=>zn(n)-zn(t)),Hr=0;Hr<fr.length;Hr++)fr[Hr]();fr=null,Hr=0}}const zn=e=>e.id==null?1/0:e.id,al=(e,r)=>{const n=zn(e)-zn(r);if(n===0){if(e.pre&&!r.pre)return-1;if(r.pre&&!e.pre)return 1}return n};function Ja(e){oo=!1,On=!0,De.sort(al);const r=or;try{for(ur=0;ur<De.length;ur++){const n=De[ur];n&&n.active!==!1&&Ar(n,null,14)}}finally{ur=0,De.length=0,mt(),On=!1,jo=null,(De.length||cn.length)&&Ja()}}function il(e,r,...n){if(e.isUnmounted)return;const t=e.vnode.props||Pe;let o=n;const s=r.startsWith("update:"),a=s&&r.slice(7);if(a&&a in t){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:m}=t[u]||Pe;m&&(o=n.map(f=>ge(f)?f.trim():f)),d&&(o=n.map(pc))}let c,i=t[c=Mt(r)]||t[c=Mt(dr(r))];!i&&s&&(i=t[c=Mt(Zr(r))]),i&&Qe(i,e,6,o);const l=t[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Qe(l,e,6,o)}}function Ga(e,r,n=!1){const t=r.emitsCache,o=t.get(e);if(o!==void 0)return o;const s=e.emits;let a={},c=!1;if(!se(e)){const i=l=>{const u=Ga(l,r,!0);u&&(c=!0,je(a,u))};!n&&r.mixins.length&&r.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!s&&!c?(xe(e)&&t.set(e,null),null):(Z(s)?s.forEach(i=>a[i]=null):je(a,s),xe(e)&&t.set(e,a),a)}function Lt(e,r){return!e||!Dn(r)?!1:(r=r.slice(2).replace(/Once$/,""),pe(e,r[0].toLowerCase()+r.slice(1))||pe(e,Zr(r))||pe(e,r))}let Ne=null,Ya=null;function ht(e){const r=Ne;return Ne=e,Ya=e&&e.type.__scopeId||null,r}function ze(e,r=Ne,n){if(!r||e._n)return e;const t=(...o)=>{t._d&&Ss(-1);const s=ht(r);let a;try{a=e(...o)}finally{ht(s),t._d&&Ss(1)}return a};return t._n=!0,t._c=!0,t._d=!0,t}function Dt(e){const{type:r,vnode:n,proxy:t,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:i,emit:l,render:u,renderCache:d,data:m,setupState:f,ctx:w,inheritAttrs:S}=e;let P,v;const y=ht(e);try{if(n.shapeFlag&4){const C=o||t;P=rr(u.call(C,C,d,s,f,m,w)),v=i}else{const C=r;P=rr(C.length>1?C(s,{attrs:i,slots:c,emit:l}):C(s,null)),v=r.props?i:cl(i)}}catch(C){jn.length=0,Hn(C,e,1),P=re(Ze)}let I=P;if(v&&S!==!1){const C=Object.keys(v),{shapeFlag:W}=I;C.length&&W&7&&(a&&C.some(bo)&&(v=ll(v,a)),I=zr(I,v))}return n.dirs&&(I=zr(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),P=I,ht(y),P}const cl=e=>{let r;for(const n in e)(n==="class"||n==="style"||Dn(n))&&((r||(r={}))[n]=e[n]);return r},ll=(e,r)=>{const n={};for(const t in e)(!bo(t)||!(t.slice(9)in r))&&(n[t]=e[t]);return n};function ul(e,r,n){const{props:t,children:o,component:s}=e,{props:a,children:c,patchFlag:i}=r,l=s.emitsOptions;if(r.dirs||r.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return t?us(t,a,l):!!a;if(i&8){const u=r.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(a[m]!==t[m]&&!Lt(l,m))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:t===a?!1:t?a?us(t,a,l):!0:!!a;return!1}function us(e,r,n){const t=Object.keys(r);if(t.length!==Object.keys(e).length)return!0;for(let o=0;o<t.length;o++){const s=t[o];if(r[s]!==e[s]&&!Lt(n,s))return!0}return!1}function dl({vnode:e,parent:r},n){for(;r&&r.subTree===e;)(e=r.vnode).el=n,r=r.parent}const pl=e=>e.__isSuspense;function Za(e,r){r&&r.pendingBranch?Z(e)?r.effects.push(...e):r.effects.push(e):sl(e)}function Xa(e,r){return Lo(e,null,r)}const et={};function sr(e,r,n){return Lo(e,r,n)}function Lo(e,r,{immediate:n,deep:t,flush:o,onTrack:s,onTrigger:a}=Pe){var c;const i=ka()===((c=Le)==null?void 0:c.scope)?Le:null;let l,u=!1,d=!1;if(Re(e)?(l=()=>e.value,u=pt(e)):an(e)?(l=()=>e,t=!0):Z(e)?(d=!0,u=e.some(C=>an(C)||pt(C)),l=()=>e.map(C=>{if(Re(C))return C.value;if(an(C))return Vr(C);if(se(C))return Ar(C,i,2)})):se(e)?r?l=()=>Ar(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),Qe(e,i,3,[f])}:l=or,r&&t){const C=l;l=()=>Vr(C())}let m,f=C=>{m=y.onStop=()=>{Ar(C,i,4)}},w;if(mn)if(f=or,r?n&&Qe(r,i,3,[l(),d?[]:void 0,f]):l(),o==="sync"){const C=iu();w=C.__watcherHandles||(C.__watcherHandles=[])}else return or;let S=d?new Array(e.length).fill(et):et;const P=()=>{if(y.active)if(r){const C=y.run();(t||u||(d?C.some((W,X)=>qn(W,S[X])):qn(C,S)))&&(m&&m(),Qe(r,i,3,[C,S===et?void 0:d&&S[0]===et?[]:S,f]),S=C)}else y.run()};P.allowRecurse=!!r;let v;o==="sync"?v=P:o==="post"?v=()=>$e(P,i&&i.suspense):(P.pre=!0,i&&(P.id=i.uid),v=()=>jt(P));const y=new Po(l,v);r?n?P():S=y.run():o==="post"?$e(y.run.bind(y),i&&i.suspense):y.run();const I=()=>{y.stop(),i&&i.scope&&yo(i.scope.effects,y)};return w&&w.push(I),I}function ml(e,r,n){const t=this.proxy,o=ge(e)?e.includes(".")?Ka(t,e):()=>t[e]:e.bind(t,t);let s;se(r)?s=r:(s=r.handler,n=r);const a=Le;pn(this);const c=Lo(o,s.bind(t),n);return a?pn(a):Yr(),c}function Ka(e,r){const n=r.split(".");return()=>{let t=e;for(let o=0;o<n.length&&t;o++)t=t[n[o]];return t}}function Vr(e,r){if(!xe(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),Re(e))Vr(e.value,r);else if(Z(e))for(let n=0;n<e.length;n++)Vr(e[n],r);else if(Sa(e)||sn(e))e.forEach(n=>{Vr(n,r)});else if(xa(e))for(const n in e)Vr(e[n],r);return e}function ft(e,r){const n=Ne;if(n===null)return e;const t=Ot(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<r.length;s++){let[a,c,i,l=Pe]=r[s];a&&(se(a)&&(a={mounted:a,updated:a}),a.deep&&Vr(c),o.push({dir:a,instance:t,value:c,oldValue:void 0,arg:i,modifiers:l}))}return e}function lr(e,r,n,t){const o=e.dirs,s=r&&r.dirs;for(let a=0;a<o.length;a++){const c=o[a];s&&(c.oldValue=s[a].value);let i=c.dir[t];i&&(gn(),Qe(i,n,8,[e.el,c,e,r]),vn())}}function hl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He(()=>{e.isMounted=!0}),Vn(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],Qa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},fl={name:"BaseTransition",props:Qa,setup(e,{slots:r}){const n=Oo(),t=hl();let o;return()=>{const s=r.default&&ri(r.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const S of s)if(S.type!==Ze){a=S;break}}const c=he(e),{mode:i}=c;if(t.isLeaving)return Bt(a);const l=ds(a);if(!l)return Bt(a);const u=so(l,c,t,n);ao(l,u);const d=n.subTree,m=d&&ds(d);let f=!1;const{getTransitionKey:w}=l.type;if(w){const S=w();o===void 0?o=S:S!==o&&(o=S,f=!0)}if(m&&m.type!==Ze&&(!Wr(l,m)||f)){const S=so(m,c,t,n);if(ao(m,S),i==="out-in")return t.isLeaving=!0,S.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&n.update()},Bt(a);i==="in-out"&&l.type!==Ze&&(S.delayLeave=(P,v,y)=>{const I=ei(t,m);I[String(m.key)]=m,P._leaveCb=()=>{v(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},gl=fl;function ei(e,r){const{leavingVNodes:n}=e;let t=n.get(r.type);return t||(t=Object.create(null),n.set(r.type,t)),t}function so(e,r,n,t){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:i,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:m,onAfterLeave:f,onLeaveCancelled:w,onBeforeAppear:S,onAppear:P,onAfterAppear:v,onAppearCancelled:y}=r,I=String(e.key),C=ei(n,e),W=(g,U)=>{g&&Qe(g,t,9,U)},X=(g,U)=>{const M=U[1];W(g,U),Z(g)?g.every(J=>J.length<=1)&&M():g.length<=1&&M()},R={mode:s,persisted:a,beforeEnter(g){let U=c;if(!n.isMounted)if(o)U=S||c;else return;g._leaveCb&&g._leaveCb(!0);const M=C[I];M&&Wr(e,M)&&M.el._leaveCb&&M.el._leaveCb(),W(U,[g])},enter(g){let U=i,M=l,J=u;if(!n.isMounted)if(o)U=P||i,M=v||l,J=y||u;else return;let T=!1;const A=g._enterCb=q=>{T||(T=!0,q?W(J,[g]):W(M,[g]),R.delayedLeave&&R.delayedLeave(),g._enterCb=void 0)};U?X(U,[g,A]):A()},leave(g,U){const M=String(e.key);if(g._enterCb&&g._enterCb(!0),n.isUnmounting)return U();W(d,[g]);let J=!1;const T=g._leaveCb=A=>{J||(J=!0,U(),A?W(w,[g]):W(f,[g]),g._leaveCb=void 0,C[M]===e&&delete C[M])};C[M]=e,m?X(m,[g,T]):T()},clone(g){return so(g,r,n,t)}};return R}function Bt(e){if($n(e))return e=zr(e),e.children=null,e}function ds(e){return $n(e)?e.children?e.children[0]:void 0:e}function ao(e,r){e.shapeFlag&6&&e.component?ao(e.component.subTree,r):e.shapeFlag&128?(e.ssContent.transition=r.clone(e.ssContent),e.ssFallback.transition=r.clone(e.ssFallback)):e.transition=r}function ri(e,r=!1,n){let t=[],o=0;for(let s=0;s<e.length;s++){let a=e[s];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===_e?(a.patchFlag&128&&o++,t=t.concat(ri(a.children,r,c))):(r||a.type!==Ze)&&t.push(c!=null?zr(a,{key:c}):a)}if(o>1)for(let s=0;s<t.length;s++)t[s].patchFlag=-2;return t}function ue(e,r){return se(e)?(()=>je({name:e.name},r,{setup:e}))():e}const ln=e=>!!e.type.__asyncLoader;function we(e){se(e)&&(e={loader:e});const{loader:r,loadingComponent:n,errorComponent:t,delay:o=200,timeout:s,suspensible:a=!0,onError:c}=e;let i=null,l,u=0;const d=()=>(u++,i=null,m()),m=()=>{let f;return i||(f=i=r().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),c)return new Promise((S,P)=>{c(w,()=>S(d()),()=>P(w),u+1)});throw w}).then(w=>f!==i&&i?i:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),l=w,w)))};return ue({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return l},setup(){const f=Le;if(l)return()=>Ut(l,f);const w=y=>{i=null,Hn(y,f,13,!t)};if(a&&f.suspense||mn)return m().then(y=>()=>Ut(y,f)).catch(y=>(w(y),()=>t?re(t,{error:y}):null));const S=fe(!1),P=fe(),v=fe(!!o);return o&&setTimeout(()=>{v.value=!1},o),s!=null&&setTimeout(()=>{if(!S.value&&!P.value){const y=new Error(`Async component timed out after ${s}ms.`);w(y),P.value=y}},s),m().then(()=>{S.value=!0,f.parent&&$n(f.parent.vnode)&&jt(f.parent.update)}).catch(y=>{w(y),P.value=y}),()=>{if(S.value&&l)return Ut(l,f);if(P.value&&t)return re(t,{error:P.value});if(n&&!v.value)return re(n)}}})}function Ut(e,r){const{ref:n,props:t,children:o,ce:s}=r.vnode,a=re(e,t,o);return a.ref=n,a.ce=s,delete r.vnode.ce,a}const $n=e=>e.type.__isKeepAlive;function vl(e,r){ni(e,"a",r)}function bl(e,r){ni(e,"da",r)}function ni(e,r,n=Le){const t=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(At(r,t,n),n){let o=n.parent;for(;o&&o.parent;)$n(o.parent.vnode)&&yl(t,r,n,o),o=o.parent}}function yl(e,r,n,t){const o=At(r,e,t,!0);qt(()=>{yo(t[r],o)},n)}function At(e,r,n=Le,t=!1){if(n){const o=n[e]||(n[e]=[]),s=r.__weh||(r.__weh=(...a)=>{if(n.isUnmounted)return;gn(),pn(n);const c=Qe(r,n,e,a);return Yr(),vn(),c});return t?o.unshift(s):o.push(s),s}}const wr=e=>(r,n=Le)=>(!mn||e==="sp")&&At(e,(...t)=>r(...t),n),wl=wr("bm"),He=wr("m"),Sl=wr("bu"),_l=wr("u"),Vn=wr("bum"),qt=wr("um"),Pl=wr("sp"),xl=wr("rtg"),El=wr("rtc");function Tl(e,r=Le){At("ec",e,r)}const ti="components";function yr(e,r){return Cl(ti,e,!0,r)||e}const kl=Symbol.for("v-ndc");function Cl(e,r,n=!0,t=!1){const o=Ne||Le;if(o){const s=o.type;if(e===ti){const c=ou(s,!1);if(c&&(c===r||c===dr(r)||c===kt(dr(r))))return s}const a=ps(o[e]||s[e],r)||ps(o.appContext[e],r);return!a&&t?s:a}}function ps(e,r){return e&&(e[r]||e[dr(r)]||e[kt(dr(r))])}function Or(e,r,n,t){let o;const s=n&&n[t];if(Z(e)||ge(e)){o=new Array(e.length);for(let a=0,c=e.length;a<c;a++)o[a]=r(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=r(a+1,a,void 0,s&&s[a])}else if(xe(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>r(a,c,void 0,s&&s[c]));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,i=a.length;c<i;c++){const l=a[c];o[c]=r(e[l],l,c,s&&s[c])}}else o=[];return n&&(n[t]=o),o}function Se(e,r,n={},t,o){if(Ne.isCE||Ne.parent&&ln(Ne.parent)&&Ne.parent.isCE)return r!=="default"&&(n.name=r),re("slot",n,t&&t());let s=e[r];s&&s._c&&(s._d=!1),D();const a=s&&oi(s(n)),c=Ce(_e,{key:n.key||a&&a.key||`_${r}`},a||(t?t():[]),a&&e._===1?64:-2);return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function oi(e){return e.some(r=>yt(r)?!(r.type===Ze||r.type===_e&&!oi(r.children)):!0)?e:null}const io=e=>e?fi(e)?Ot(e)||e.proxy:io(e.parent):null,Cn=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>io(e.parent),$root:e=>io(e.root),$emit:e=>e.emit,$options:e=>Ao(e),$forceUpdate:e=>e.f||(e.f=()=>jt(e.update)),$nextTick:e=>e.n||(e.n=Wn.bind(e.proxy)),$watch:e=>ml.bind(e)}),Ht=(e,r)=>e!==Pe&&!e.__isScriptSetup&&pe(e,r),Il={get({_:e},r){const{ctx:n,setupState:t,data:o,props:s,accessCache:a,type:c,appContext:i}=e;let l;if(r[0]!=="$"){const f=a[r];if(f!==void 0)switch(f){case 1:return t[r];case 2:return o[r];case 4:return n[r];case 3:return s[r]}else{if(Ht(t,r))return a[r]=1,t[r];if(o!==Pe&&pe(o,r))return a[r]=2,o[r];if((l=e.propsOptions[0])&&pe(l,r))return a[r]=3,s[r];if(n!==Pe&&pe(n,r))return a[r]=4,n[r];co&&(a[r]=0)}}const u=Cn[r];let d,m;if(u)return r==="$attrs"&&Je(e,"get",r),u(e);if((d=c.__cssModules)&&(d=d[r]))return d;if(n!==Pe&&pe(n,r))return a[r]=4,n[r];if(m=i.config.globalProperties,pe(m,r))return m[r]},set({_:e},r,n){const{data:t,setupState:o,ctx:s}=e;return Ht(o,r)?(o[r]=n,!0):t!==Pe&&pe(t,r)?(t[r]=n,!0):pe(e.props,r)||r[0]==="$"&&r.slice(1)in e?!1:(s[r]=n,!0)},has({_:{data:e,setupState:r,accessCache:n,ctx:t,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==Pe&&pe(e,a)||Ht(r,a)||(c=s[0])&&pe(c,a)||pe(t,a)||pe(Cn,a)||pe(o.config.globalProperties,a)},defineProperty(e,r,n){return n.get!=null?e._.accessCache[r]=0:pe(n,"value")&&this.set(e,r,n.value,null),Reflect.defineProperty(e,r,n)}};function ms(e){return Z(e)?e.reduce((r,n)=>(r[n]=null,r),{}):e}let co=!0;function jl(e){const r=Ao(e),n=e.proxy,t=e.ctx;co=!1,r.beforeCreate&&hs(r.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:i,inject:l,created:u,beforeMount:d,mounted:m,beforeUpdate:f,updated:w,activated:S,deactivated:P,beforeDestroy:v,beforeUnmount:y,destroyed:I,unmounted:C,render:W,renderTracked:X,renderTriggered:R,errorCaptured:g,serverPrefetch:U,expose:M,inheritAttrs:J,components:T,directives:A,filters:q}=r;if(l&&Ll(l,t,null),a)for(const te in a){const oe=a[te];se(oe)&&(t[te]=oe.bind(n))}if(o){const te=o.call(n,n);xe(te)&&(e.data=Un(te))}if(co=!0,s)for(const te in s){const oe=s[te],Me=se(oe)?oe.bind(n,n):se(oe.get)?oe.get.bind(n,n):or,Oe=!se(oe)&&se(oe.set)?oe.set.bind(n):or,We=N({get:Me,set:Oe});Object.defineProperty(t,te,{enumerable:!0,configurable:!0,get:()=>We.value,set:Fe=>We.value=Fe})}if(c)for(const te in c)si(c[te],t,n,te);if(i){const te=se(i)?i.call(n):i;Reflect.ownKeys(te).forEach(oe=>{Gr(oe,te[oe])})}u&&hs(u,e,"c");function H(te,oe){Z(oe)?oe.forEach(Me=>te(Me.bind(n))):oe&&te(oe.bind(n))}if(H(wl,d),H(He,m),H(Sl,f),H(_l,w),H(vl,S),H(bl,P),H(Tl,g),H(El,X),H(xl,R),H(Vn,y),H(qt,C),H(Pl,U),Z(M))if(M.length){const te=e.exposed||(e.exposed={});M.forEach(oe=>{Object.defineProperty(te,oe,{get:()=>n[oe],set:Me=>n[oe]=Me})})}else e.exposed||(e.exposed={});W&&e.render===or&&(e.render=W),J!=null&&(e.inheritAttrs=J),T&&(e.components=T),A&&(e.directives=A)}function Ll(e,r,n=or){Z(e)&&(e=lo(e));for(const t in e){const o=e[t];let s;xe(o)?"default"in o?s=Ie(o.from||t,o.default,!0):s=Ie(o.from||t):s=Ie(o),Re(s)?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):r[t]=s}}function hs(e,r,n){Qe(Z(e)?e.map(t=>t.bind(r.proxy)):e.bind(r.proxy),r,n)}function si(e,r,n,t){const o=t.includes(".")?Ka(n,t):()=>n[t];if(ge(e)){const s=r[e];se(s)&&sr(o,s)}else if(se(e))sr(o,e.bind(n));else if(xe(e))if(Z(e))e.forEach(s=>si(s,r,n,t));else{const s=se(e.handler)?e.handler.bind(n):r[e.handler];se(s)&&sr(o,s,e)}}function Ao(e){const r=e.type,{mixins:n,extends:t}=r,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(r);let i;return c?i=c:!o.length&&!n&&!t?i=r:(i={},o.length&&o.forEach(l=>gt(i,l,a,!0)),gt(i,r,a)),xe(r)&&s.set(r,i),i}function gt(e,r,n,t=!1){const{mixins:o,extends:s}=r;s&&gt(e,s,n,!0),o&&o.forEach(a=>gt(e,a,n,!0));for(const a in r)if(!(t&&a==="expose")){const c=Al[a]||n&&n[a];e[a]=c?c(e[a],r[a]):r[a]}return e}const Al={data:fs,props:gs,emits:gs,methods:Tn,computed:Tn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Tn,directives:Tn,watch:Rl,provide:fs,inject:ql};function fs(e,r){return r?e?function(){return je(se(e)?e.call(this,this):e,se(r)?r.call(this,this):r)}:r:e}function ql(e,r){return Tn(lo(e),lo(r))}function lo(e){if(Z(e)){const r={};for(let n=0;n<e.length;n++)r[e[n]]=e[n];return r}return e}function Be(e,r){return e?[...new Set([].concat(e,r))]:r}function Tn(e,r){return e?je(Object.create(null),e,r):r}function gs(e,r){return e?Z(e)&&Z(r)?[...new Set([...e,...r])]:je(Object.create(null),ms(e),ms(r??{})):r}function Rl(e,r){if(!e)return r;if(!r)return e;const n=je(Object.create(null),e);for(const t in r)n[t]=Be(e[t],r[t]);return n}function ai(){return{app:null,config:{isNativeTag:ac,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function zl(e,r){return function(t,o=null){se(t)||(t=je({},t)),o!=null&&!xe(o)&&(o=null);const s=ai(),a=new Set;let c=!1;const i=s.app={_uid:Ol++,_component:t,_props:o,_container:null,_context:s,_instance:null,version:cu,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&se(l.install)?(a.add(l),l.install(i,...u)):se(l)&&(a.add(l),l(i,...u))),i},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),i},component(l,u){return u?(s.components[l]=u,i):s.components[l]},directive(l,u){return u?(s.directives[l]=u,i):s.directives[l]},mount(l,u,d){if(!c){const m=re(t,o);return m.appContext=s,u&&r?r(m,l):e(m,l,d),c=!0,i._container=l,l.__vue_app__=i,Ot(m.component)||m.component.proxy}},unmount(){c&&(e(null,i._container),delete i._container.__vue_app__)},provide(l,u){return s.provides[l]=u,i},runWithContext(l){vt=i;try{return l()}finally{vt=null}}};return i}}let vt=null;function Gr(e,r){if(Le){let n=Le.provides;const t=Le.parent&&Le.parent.provides;t===n&&(n=Le.provides=Object.create(t)),n[e]=r}}function Ie(e,r,n=!1){const t=Le||Ne;if(t||vt){const o=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:vt._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&se(r)?r.call(t&&t.proxy):r}}function Nl(e,r,n,t=!1){const o={},s={};ut(s,Rt,1),e.propsDefaults=Object.create(null),ii(e,r,o,s);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=t?o:Ma(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Ml(e,r,n,t){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=he(o),[i]=e.propsOptions;let l=!1;if((t||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Lt(e.emitsOptions,m))continue;const f=r[m];if(i)if(pe(s,m))f!==s[m]&&(s[m]=f,l=!0);else{const w=dr(m);o[w]=uo(i,c,w,f,e,!1)}else f!==s[m]&&(s[m]=f,l=!0)}}}else{ii(e,r,o,s)&&(l=!0);let u;for(const d in c)(!r||!pe(r,d)&&((u=Zr(d))===d||!pe(r,u)))&&(i?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=uo(i,c,d,void 0,e,!0)):delete o[d]);if(s!==c)for(const d in s)(!r||!pe(r,d))&&(delete s[d],l=!0)}l&&br(e,"set","$attrs")}function ii(e,r,n,t){const[o,s]=e.propsOptions;let a=!1,c;if(r)for(let i in r){if(kn(i))continue;const l=r[i];let u;o&&pe(o,u=dr(i))?!s||!s.includes(u)?n[u]=l:(c||(c={}))[u]=l:Lt(e.emitsOptions,i)||(!(i in t)||l!==t[i])&&(t[i]=l,a=!0)}if(s){const i=he(n),l=c||Pe;for(let u=0;u<s.length;u++){const d=s[u];n[d]=uo(o,i,d,l[d],e,!pe(l,d))}}return a}function uo(e,r,n,t,o,s){const a=e[n];if(a!=null){const c=pe(a,"default");if(c&&t===void 0){const i=a.default;if(a.type!==Function&&!a.skipFactory&&se(i)){const{propsDefaults:l}=o;n in l?t=l[n]:(pn(o),t=l[n]=i.call(null,r),Yr())}else t=i}a[0]&&(s&&!c?t=!1:a[1]&&(t===""||t===Zr(n))&&(t=!0))}return t}function ci(e,r,n=!1){const t=r.propsCache,o=t.get(e);if(o)return o;const s=e.props,a={},c=[];let i=!1;if(!se(e)){const u=d=>{i=!0;const[m,f]=ci(d,r,!0);je(a,m),f&&c.push(...f)};!n&&r.mixins.length&&r.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!i)return xe(e)&&t.set(e,on),on;if(Z(s))for(let u=0;u<s.length;u++){const d=dr(s[u]);vs(d)&&(a[d]=Pe)}else if(s)for(const u in s){const d=dr(u);if(vs(d)){const m=s[u],f=a[d]=Z(m)||se(m)?{type:m}:je({},m);if(f){const w=ws(Boolean,f.type),S=ws(String,f.type);f[0]=w>-1,f[1]=S<0||w<S,(w>-1||pe(f,"default"))&&c.push(d)}}}const l=[a,c];return xe(e)&&t.set(e,l),l}function vs(e){return e[0]!=="$"}function bs(e){const r=e&&e.toString().match(/^\s*(function|class) (\w+)/);return r?r[2]:e===null?"null":""}function ys(e,r){return bs(e)===bs(r)}function ws(e,r){return Z(r)?r.findIndex(n=>ys(n,e)):se(r)&&ys(r,e)?0:-1}const li=e=>e[0]==="_"||e==="$stable",qo=e=>Z(e)?e.map(rr):[rr(e)],Fl=(e,r,n)=>{if(r._n)return r;const t=ze((...o)=>qo(r(...o)),n);return t._c=!1,t},ui=(e,r,n)=>{const t=e._ctx;for(const o in e){if(li(o))continue;const s=e[o];if(se(s))r[o]=Fl(o,s,t);else if(s!=null){const a=qo(s);r[o]=()=>a}}},di=(e,r)=>{const n=qo(r);e.slots.default=()=>n},Dl=(e,r)=>{if(e.vnode.shapeFlag&32){const n=r._;n?(e.slots=he(r),ut(r,"_",n)):ui(r,e.slots={})}else e.slots={},r&&di(e,r);ut(e.slots,Rt,1)},Bl=(e,r,n)=>{const{vnode:t,slots:o}=e;let s=!0,a=Pe;if(t.shapeFlag&32){const c=r._;c?n&&c===1?s=!1:(je(o,r),!n&&c===1&&delete o._):(s=!r.$stable,ui(r,o)),a=r}else r&&(di(e,r),a={default:1});if(s)for(const c in o)!li(c)&&!(c in a)&&delete o[c]};function bt(e,r,n,t,o=!1){if(Z(e)){e.forEach((m,f)=>bt(m,r&&(Z(r)?r[f]:r),n,t,o));return}if(ln(t)&&!o)return;const s=t.shapeFlag&4?Ot(t.component)||t.component.proxy:t.el,a=o?null:s,{i:c,r:i}=e,l=r&&r.r,u=c.refs===Pe?c.refs={}:c.refs,d=c.setupState;if(l!=null&&l!==i&&(ge(l)?(u[l]=null,pe(d,l)&&(d[l]=null)):Re(l)&&(l.value=null)),se(i))Ar(i,c,12,[a,u]);else{const m=ge(i),f=Re(i);if(m||f){const w=()=>{if(e.f){const S=m?pe(d,i)?d[i]:u[i]:i.value;o?Z(S)&&yo(S,s):Z(S)?S.includes(s)||S.push(s):m?(u[i]=[s],pe(d,i)&&(d[i]=u[i])):(i.value=[s],e.k&&(u[e.k]=i.value))}else m?(u[i]=a,pe(d,i)&&(d[i]=a)):f&&(i.value=a,e.k&&(u[e.k]=a))};a?(w.id=-1,$e(w,n)):w()}}}let Er=!1;const rt=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",nt=e=>e.nodeType===8;function Ul(e){const{mt:r,p:n,o:{patchProp:t,createText:o,nextSibling:s,parentNode:a,remove:c,insert:i,createComment:l}}=e,u=(v,y)=>{if(!y.hasChildNodes()){n(null,v,y),mt(),y._vnode=v;return}Er=!1,d(y.firstChild,v,null,null,null),mt(),y._vnode=v,Er&&console.error("Hydration completed but contains mismatches.")},d=(v,y,I,C,W,X=!1)=>{const R=nt(v)&&v.data==="[",g=()=>S(v,y,I,C,W,R),{type:U,ref:M,shapeFlag:J,patchFlag:T}=y;let A=v.nodeType;y.el=v,T===-2&&(X=!1,y.dynamicChildren=null);let q=null;switch(U){case dn:A!==3?y.children===""?(i(y.el=o(""),a(v),v),q=v):q=g():(v.data!==y.children&&(Er=!0,v.data=y.children),q=s(v));break;case Ze:A!==8||R?q=g():q=s(v);break;case In:if(R&&(v=s(v),A=v.nodeType),A===1||A===3){q=v;const ae=!y.children.length;for(let H=0;H<y.staticCount;H++)ae&&(y.children+=q.nodeType===1?q.outerHTML:q.data),H===y.staticCount-1&&(y.anchor=q),q=s(q);return R?s(q):q}else g();break;case _e:R?q=w(v,y,I,C,W,X):q=g();break;default:if(J&1)A!==1||y.type.toLowerCase()!==v.tagName.toLowerCase()?q=g():q=m(v,y,I,C,W,X);else if(J&6){y.slotScopeIds=W;const ae=a(v);if(r(y,ae,null,I,C,rt(ae),X),q=R?P(v):s(v),q&&nt(q)&&q.data==="teleport end"&&(q=s(q)),ln(y)){let H;R?(H=re(_e),H.anchor=q?q.previousSibling:ae.lastChild):H=v.nodeType===3?Nr(""):re("div"),H.el=v,y.component.subTree=H}}else J&64?A!==8?q=g():q=y.type.hydrate(v,y,I,C,W,X,e,f):J&128&&(q=y.type.hydrate(v,y,I,C,rt(a(v)),W,X,e,d))}return M!=null&&bt(M,null,C,y),q},m=(v,y,I,C,W,X)=>{X=X||!!y.dynamicChildren;const{type:R,props:g,patchFlag:U,shapeFlag:M,dirs:J}=y,T=R==="input"&&J||R==="option";if(T||U!==-1){if(J&&lr(y,null,I,"created"),g)if(T||!X||U&48)for(const q in g)(T&&q.endsWith("value")||Dn(q)&&!kn(q))&&t(v,q,null,g[q],!1,void 0,I);else g.onClick&&t(v,"onClick",null,g.onClick,!1,void 0,I);let A;if((A=g&&g.onVnodeBeforeMount)&&Ke(A,I,y),J&&lr(y,null,I,"beforeMount"),((A=g&&g.onVnodeMounted)||J)&&Za(()=>{A&&Ke(A,I,y),J&&lr(y,null,I,"mounted")},C),M&16&&!(g&&(g.innerHTML||g.textContent))){let q=f(v.firstChild,y,v,I,C,W,X);for(;q;){Er=!0;const ae=q;q=q.nextSibling,c(ae)}}else M&8&&v.textContent!==y.children&&(Er=!0,v.textContent=y.children)}return v.nextSibling},f=(v,y,I,C,W,X,R)=>{R=R||!!y.dynamicChildren;const g=y.children,U=g.length;for(let M=0;M<U;M++){const J=R?g[M]:g[M]=rr(g[M]);if(v)v=d(v,J,C,W,X,R);else{if(J.type===dn&&!J.children)continue;Er=!0,n(null,J,I,null,C,W,rt(I),X)}}return v},w=(v,y,I,C,W,X)=>{const{slotScopeIds:R}=y;R&&(W=W?W.concat(R):R);const g=a(v),U=f(s(v),y,g,I,C,W,X);return U&&nt(U)&&U.data==="]"?s(y.anchor=U):(Er=!0,i(y.anchor=l("]"),g,U),U)},S=(v,y,I,C,W,X)=>{if(Er=!0,y.el=null,X){const U=P(v);for(;;){const M=s(v);if(M&&M!==U)c(M);else break}}const R=s(v),g=a(v);return c(v),n(null,y,g,R,I,C,rt(g),W),R},P=v=>{let y=0;for(;v;)if(v=s(v),v&&nt(v)&&(v.data==="["&&y++,v.data==="]")){if(y===0)return s(v);y--}return v};return[u,d]}const $e=Za;function Hl(e){return Wl(e,Ul)}function Wl(e,r){const n=eo();n.__VUE__=!0;const{insert:t,remove:o,patchProp:s,createElement:a,createText:c,createComment:i,setText:l,setElementText:u,parentNode:d,nextSibling:m,setScopeId:f=or,insertStaticContent:w}=e,S=(p,h,b,_=null,E=null,k=null,F=!1,L=null,z=!!h.dynamicChildren)=>{if(p===h)return;p&&!Wr(p,h)&&(_=x(p),Fe(p,E,k,!0),p=null),h.patchFlag===-2&&(z=!1,h.dynamicChildren=null);const{type:j,ref:G,shapeFlag:$}=h;switch(j){case dn:P(p,h,b,_);break;case Ze:v(p,h,b,_);break;case In:p==null&&y(h,b,_,F);break;case _e:T(p,h,b,_,E,k,F,L,z);break;default:$&1?W(p,h,b,_,E,k,F,L,z):$&6?A(p,h,b,_,E,k,F,L,z):($&64||$&128)&&j.process(p,h,b,_,E,k,F,L,z,O)}G!=null&&E&&bt(G,p&&p.ref,k,h||p,!h)},P=(p,h,b,_)=>{if(p==null)t(h.el=c(h.children),b,_);else{const E=h.el=p.el;h.children!==p.children&&l(E,h.children)}},v=(p,h,b,_)=>{p==null?t(h.el=i(h.children||""),b,_):h.el=p.el},y=(p,h,b,_)=>{[p.el,p.anchor]=w(p.children,h,b,_,p.el,p.anchor)},I=({el:p,anchor:h},b,_)=>{let E;for(;p&&p!==h;)E=m(p),t(p,b,_),p=E;t(h,b,_)},C=({el:p,anchor:h})=>{let b;for(;p&&p!==h;)b=m(p),o(p),p=b;o(h)},W=(p,h,b,_,E,k,F,L,z)=>{F=F||h.type==="svg",p==null?X(h,b,_,E,k,F,L,z):U(p,h,E,k,F,L,z)},X=(p,h,b,_,E,k,F,L)=>{let z,j;const{type:G,props:$,shapeFlag:Y,transition:ne,dirs:ie}=p;if(z=p.el=a(p.type,k,$&&$.is,$),Y&8?u(z,p.children):Y&16&&g(p.children,z,null,_,E,k&&G!=="foreignObject",F,L),ie&&lr(p,null,_,"created"),R(z,p,p.scopeId,F,_),$){for(const be in $)be!=="value"&&!kn(be)&&s(z,be,null,$[be],k,p.children,_,E,qe);"value"in $&&s(z,"value",null,$.value),(j=$.onVnodeBeforeMount)&&Ke(j,_,p)}ie&&lr(p,null,_,"beforeMount");const ye=(!E||E&&!E.pendingBranch)&&ne&&!ne.persisted;ye&&ne.beforeEnter(z),t(z,h,b),((j=$&&$.onVnodeMounted)||ye||ie)&&$e(()=>{j&&Ke(j,_,p),ye&&ne.enter(z),ie&&lr(p,null,_,"mounted")},E)},R=(p,h,b,_,E)=>{if(b&&f(p,b),_)for(let k=0;k<_.length;k++)f(p,_[k]);if(E){let k=E.subTree;if(h===k){const F=E.vnode;R(p,F,F.scopeId,F.slotScopeIds,E.parent)}}},g=(p,h,b,_,E,k,F,L,z=0)=>{for(let j=z;j<p.length;j++){const G=p[j]=L?Cr(p[j]):rr(p[j]);S(null,G,h,b,_,E,k,F,L)}},U=(p,h,b,_,E,k,F)=>{const L=h.el=p.el;let{patchFlag:z,dynamicChildren:j,dirs:G}=h;z|=p.patchFlag&16;const $=p.props||Pe,Y=h.props||Pe;let ne;b&&Fr(b,!1),(ne=Y.onVnodeBeforeUpdate)&&Ke(ne,b,h,p),G&&lr(h,p,b,"beforeUpdate"),b&&Fr(b,!0);const ie=E&&h.type!=="foreignObject";if(j?M(p.dynamicChildren,j,L,b,_,ie,k):F||oe(p,h,L,null,b,_,ie,k,!1),z>0){if(z&16)J(L,h,$,Y,b,_,E);else if(z&2&&$.class!==Y.class&&s(L,"class",null,Y.class,E),z&4&&s(L,"style",$.style,Y.style,E),z&8){const ye=h.dynamicProps;for(let be=0;be<ye.length;be++){const ke=ye[be],er=$[ke],Qr=Y[ke];(Qr!==er||ke==="value")&&s(L,ke,er,Qr,E,p.children,b,_,qe)}}z&1&&p.children!==h.children&&u(L,h.children)}else!F&&j==null&&J(L,h,$,Y,b,_,E);((ne=Y.onVnodeUpdated)||G)&&$e(()=>{ne&&Ke(ne,b,h,p),G&&lr(h,p,b,"updated")},_)},M=(p,h,b,_,E,k,F)=>{for(let L=0;L<h.length;L++){const z=p[L],j=h[L],G=z.el&&(z.type===_e||!Wr(z,j)||z.shapeFlag&70)?d(z.el):b;S(z,j,G,null,_,E,k,F,!0)}},J=(p,h,b,_,E,k,F)=>{if(b!==_){if(b!==Pe)for(const L in b)!kn(L)&&!(L in _)&&s(p,L,b[L],null,F,h.children,E,k,qe);for(const L in _){if(kn(L))continue;const z=_[L],j=b[L];z!==j&&L!=="value"&&s(p,L,j,z,F,h.children,E,k,qe)}"value"in _&&s(p,"value",b.value,_.value)}},T=(p,h,b,_,E,k,F,L,z)=>{const j=h.el=p?p.el:c(""),G=h.anchor=p?p.anchor:c("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:ne}=h;ne&&(L=L?L.concat(ne):ne),p==null?(t(j,b,_),t(G,b,_),g(h.children,b,G,E,k,F,L,z)):$>0&&$&64&&Y&&p.dynamicChildren?(M(p.dynamicChildren,Y,b,E,k,F,L),(h.key!=null||E&&h===E.subTree)&&pi(p,h,!0)):oe(p,h,b,G,E,k,F,L,z)},A=(p,h,b,_,E,k,F,L,z)=>{h.slotScopeIds=L,p==null?h.shapeFlag&512?E.ctx.activate(h,b,_,F,z):q(h,b,_,E,k,F,z):ae(p,h,z)},q=(p,h,b,_,E,k,F)=>{const L=p.component=Ql(p,_,E);if($n(p)&&(L.ctx.renderer=O),eu(L),L.asyncDep){if(E&&E.registerDep(L,H),!p.el){const z=L.subTree=re(Ze);v(null,z,h,b)}return}H(L,p,h,b,E,k,F)},ae=(p,h,b)=>{const _=h.component=p.component;if(ul(p,h,b))if(_.asyncDep&&!_.asyncResolved){te(_,h,b);return}else _.next=h,ol(_.update),_.update();else h.el=p.el,_.vnode=h},H=(p,h,b,_,E,k,F)=>{const L=()=>{if(p.isMounted){let{next:G,bu:$,u:Y,parent:ne,vnode:ie}=p,ye=G,be;Fr(p,!1),G?(G.el=ie.el,te(p,G,F)):G=ie,$&&Ft($),(be=G.props&&G.props.onVnodeBeforeUpdate)&&Ke(be,ne,G,ie),Fr(p,!0);const ke=Dt(p),er=p.subTree;p.subTree=ke,S(er,ke,d(er.el),x(er),p,E,k),G.el=ke.el,ye===null&&dl(p,ke.el),Y&&$e(Y,E),(be=G.props&&G.props.onVnodeUpdated)&&$e(()=>Ke(be,ne,G,ie),E)}else{let G;const{el:$,props:Y}=h,{bm:ne,m:ie,parent:ye}=p,be=ln(h);if(Fr(p,!1),ne&&Ft(ne),!be&&(G=Y&&Y.onVnodeBeforeMount)&&Ke(G,ye,h),Fr(p,!0),$&&le){const ke=()=>{p.subTree=Dt(p),le($,p.subTree,p,E,null)};be?h.type.__asyncLoader().then(()=>!p.isUnmounted&&ke()):ke()}else{const ke=p.subTree=Dt(p);S(null,ke,b,_,p,E,k),h.el=ke.el}if(ie&&$e(ie,E),!be&&(G=Y&&Y.onVnodeMounted)){const ke=h;$e(()=>Ke(G,ye,ke),E)}(h.shapeFlag&256||ye&&ln(ye.vnode)&&ye.vnode.shapeFlag&256)&&p.a&&$e(p.a,E),p.isMounted=!0,h=b=_=null}},z=p.effect=new Po(L,()=>jt(j),p.scope),j=p.update=()=>z.run();j.id=p.uid,Fr(p,!0),j()},te=(p,h,b)=>{h.component=p;const _=p.vnode.props;p.vnode=h,p.next=null,Ml(p,h.props,_,b),Bl(p,h.children,b),gn(),ls(),vn()},oe=(p,h,b,_,E,k,F,L,z=!1)=>{const j=p&&p.children,G=p?p.shapeFlag:0,$=h.children,{patchFlag:Y,shapeFlag:ne}=h;if(Y>0){if(Y&128){Oe(j,$,b,_,E,k,F,L,z);return}else if(Y&256){Me(j,$,b,_,E,k,F,L,z);return}}ne&8?(G&16&&qe(j,E,k),$!==j&&u(b,$)):G&16?ne&16?Oe(j,$,b,_,E,k,F,L,z):qe(j,E,k,!0):(G&8&&u(b,""),ne&16&&g($,b,_,E,k,F,L,z))},Me=(p,h,b,_,E,k,F,L,z)=>{p=p||on,h=h||on;const j=p.length,G=h.length,$=Math.min(j,G);let Y;for(Y=0;Y<$;Y++){const ne=h[Y]=z?Cr(h[Y]):rr(h[Y]);S(p[Y],ne,b,null,E,k,F,L,z)}j>G?qe(p,E,k,!0,!1,$):g(h,b,_,E,k,F,L,z,$)},Oe=(p,h,b,_,E,k,F,L,z)=>{let j=0;const G=h.length;let $=p.length-1,Y=G-1;for(;j<=$&&j<=Y;){const ne=p[j],ie=h[j]=z?Cr(h[j]):rr(h[j]);if(Wr(ne,ie))S(ne,ie,b,null,E,k,F,L,z);else break;j++}for(;j<=$&&j<=Y;){const ne=p[$],ie=h[Y]=z?Cr(h[Y]):rr(h[Y]);if(Wr(ne,ie))S(ne,ie,b,null,E,k,F,L,z);else break;$--,Y--}if(j>$){if(j<=Y){const ne=Y+1,ie=ne<G?h[ne].el:_;for(;j<=Y;)S(null,h[j]=z?Cr(h[j]):rr(h[j]),b,ie,E,k,F,L,z),j++}}else if(j>Y)for(;j<=$;)Fe(p[j],E,k,!0),j++;else{const ne=j,ie=j,ye=new Map;for(j=ie;j<=Y;j++){const Ge=h[j]=z?Cr(h[j]):rr(h[j]);Ge.key!=null&&ye.set(Ge.key,j)}let be,ke=0;const er=Y-ie+1;let Qr=!1,Xo=0;const wn=new Array(er);for(j=0;j<er;j++)wn[j]=0;for(j=ne;j<=$;j++){const Ge=p[j];if(ke>=er){Fe(Ge,E,k,!0);continue}let cr;if(Ge.key!=null)cr=ye.get(Ge.key);else for(be=ie;be<=Y;be++)if(wn[be-ie]===0&&Wr(Ge,h[be])){cr=be;break}cr===void 0?Fe(Ge,E,k,!0):(wn[cr-ie]=j+1,cr>=Xo?Xo=cr:Qr=!0,S(Ge,h[cr],b,null,E,k,F,L,z),ke++)}const Ko=Qr?$l(wn):on;for(be=Ko.length-1,j=er-1;j>=0;j--){const Ge=ie+j,cr=h[Ge],Qo=Ge+1<G?h[Ge+1].el:_;wn[j]===0?S(null,cr,b,Qo,E,k,F,L,z):Qr&&(be<0||j!==Ko[be]?We(cr,b,Qo,2):be--)}}},We=(p,h,b,_,E=null)=>{const{el:k,type:F,transition:L,children:z,shapeFlag:j}=p;if(j&6){We(p.component.subTree,h,b,_);return}if(j&128){p.suspense.move(h,b,_);return}if(j&64){F.move(p,h,b,O);return}if(F===_e){t(k,h,b);for(let $=0;$<z.length;$++)We(z[$],h,b,_);t(p.anchor,h,b);return}if(F===In){I(p,h,b);return}if(_!==2&&j&1&&L)if(_===0)L.beforeEnter(k),t(k,h,b),$e(()=>L.enter(k),E);else{const{leave:$,delayLeave:Y,afterLeave:ne}=L,ie=()=>t(k,h,b),ye=()=>{$(k,()=>{ie(),ne&&ne()})};Y?Y(k,ie,ye):ye()}else t(k,h,b)},Fe=(p,h,b,_=!1,E=!1)=>{const{type:k,props:F,ref:L,children:z,dynamicChildren:j,shapeFlag:G,patchFlag:$,dirs:Y}=p;if(L!=null&&bt(L,null,b,p,!0),G&256){h.ctx.deactivate(p);return}const ne=G&1&&Y,ie=!ln(p);let ye;if(ie&&(ye=F&&F.onVnodeBeforeUnmount)&&Ke(ye,h,p),G&6)ir(p.component,b,_);else{if(G&128){p.suspense.unmount(b,_);return}ne&&lr(p,null,h,"beforeUnmount"),G&64?p.type.remove(p,h,b,E,O,_):j&&(k!==_e||$>0&&$&64)?qe(j,h,b,!1,!0):(k===_e&&$&384||!E&&G&16)&&qe(z,h,b),_&&_r(p)}(ie&&(ye=F&&F.onVnodeUnmounted)||ne)&&$e(()=>{ye&&Ke(ye,h,p),ne&&lr(p,null,h,"unmounted")},b)},_r=p=>{const{type:h,el:b,anchor:_,transition:E}=p;if(h===_e){Pr(b,_);return}if(h===In){C(p);return}const k=()=>{o(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:F,delayLeave:L}=E,z=()=>F(b,k);L?L(p.el,k,z):z()}else k()},Pr=(p,h)=>{let b;for(;p!==h;)b=m(p),o(p),p=b;o(h)},ir=(p,h,b)=>{const{bum:_,scope:E,update:k,subTree:F,um:L}=p;_&&Ft(_),E.stop(),k&&(k.active=!1,Fe(F,p,h,b)),L&&$e(L,h),$e(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},qe=(p,h,b,_=!1,E=!1,k=0)=>{for(let F=k;F<p.length;F++)Fe(p[F],h,b,_,E)},x=p=>p.shapeFlag&6?x(p.component.subTree):p.shapeFlag&128?p.suspense.next():m(p.anchor||p.el),B=(p,h,b)=>{p==null?h._vnode&&Fe(h._vnode,null,null,!0):S(h._vnode||null,p,h,null,null,null,b),ls(),mt(),h._vnode=p},O={p:S,um:Fe,m:We,r:_r,mt:q,mc:g,pc:oe,pbc:M,n:x,o:e};let V,le;return r&&([V,le]=r(O)),{render:B,hydrate:V,createApp:zl(B,V)}}function Fr({effect:e,update:r},n){e.allowRecurse=r.allowRecurse=n}function pi(e,r,n=!1){const t=e.children,o=r.children;if(Z(t)&&Z(o))for(let s=0;s<t.length;s++){const a=t[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=Cr(o[s]),c.el=a.el),n||pi(a,c)),c.type===dn&&(c.el=a.el)}}function $l(e){const r=e.slice(),n=[0];let t,o,s,a,c;const i=e.length;for(t=0;t<i;t++){const l=e[t];if(l!==0){if(o=n[n.length-1],e[o]<l){r[t]=o,n.push(t);continue}for(s=0,a=n.length-1;s<a;)c=s+a>>1,e[n[c]]<l?s=c+1:a=c;l<e[n[s]]&&(s>0&&(r[t]=n[s-1]),n[s]=t)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=r[a];return n}const Vl=e=>e.__isTeleport,_e=Symbol.for("v-fgt"),dn=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),In=Symbol.for("v-stc"),jn=[];let tr=null;function D(e=!1){jn.push(tr=e?null:[])}function Jl(){jn.pop(),tr=jn[jn.length-1]||null}let Nn=1;function Ss(e){Nn+=e}function mi(e){return e.dynamicChildren=Nn>0?tr||on:null,Jl(),Nn>0&&tr&&tr.push(e),e}function K(e,r,n,t,o,s){return mi(me(e,r,n,t,o,s,!0))}function Ce(e,r,n,t,o){return mi(re(e,r,n,t,o,!0))}function yt(e){return e?e.__v_isVNode===!0:!1}function Wr(e,r){return e.type===r.type&&e.key===r.key}const Rt="__vInternal",hi=({key:e})=>e??null,ct=({ref:e,ref_key:r,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Re(e)||se(e)?{i:Ne,r:e,k:r,f:!!n}:e:null);function me(e,r=null,n=null,t=0,o=null,s=e===_e?0:1,a=!1,c=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:r,key:r&&hi(r),ref:r&&ct(r),scopeId:Ya,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:t,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ne};return c?(Ro(i,n),s&128&&e.normalize(i)):n&&(i.shapeFlag|=ge(n)?8:16),Nn>0&&!a&&tr&&(i.patchFlag>0||s&6)&&i.patchFlag!==32&&tr.push(i),i}const re=Gl;function Gl(e,r=null,n=null,t=0,o=null,s=!1){if((!e||e===kl)&&(e=Ze),yt(e)){const c=zr(e,r,!0);return n&&Ro(c,n),Nn>0&&!s&&tr&&(c.shapeFlag&6?tr[tr.indexOf(e)]=c:tr.push(c)),c.patchFlag|=-2,c}if(su(e)&&(e=e.__vccOpts),r){r=Yl(r);let{class:c,style:i}=r;c&&!ge(c)&&(r.class=Ve(c)),xe(i)&&(Fa(i)&&!Z(i)&&(i=je({},i)),r.style=Bn(i))}const a=ge(e)?1:pl(e)?128:Vl(e)?64:xe(e)?4:se(e)?2:0;return me(e,r,n,t,o,a,s,!0)}function Yl(e){return e?Fa(e)||Rt in e?je({},e):e:null}function zr(e,r,n=!1){const{props:t,ref:o,patchFlag:s,children:a}=e,c=r?po(t||{},r):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&hi(c),ref:r&&r.ref?n&&o?Z(o)?o.concat(ct(r)):[o,ct(r)]:ct(r):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:r&&e.type!==_e?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zr(e.ssContent),ssFallback:e.ssFallback&&zr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Nr(e=" ",r=0){return re(dn,null,e,r)}function Zl(e,r){const n=re(In,null,e);return n.staticCount=r,n}function Te(e="",r=!1){return r?(D(),Ce(Ze,null,e)):re(Ze,null,e)}function rr(e){return e==null||typeof e=="boolean"?re(Ze):Z(e)?re(_e,null,e.slice()):typeof e=="object"?Cr(e):re(dn,null,String(e))}function Cr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zr(e)}function Ro(e,r){let n=0;const{shapeFlag:t}=e;if(r==null)r=null;else if(Z(r))n=16;else if(typeof r=="object")if(t&65){const o=r.default;o&&(o._c&&(o._d=!1),Ro(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=r._;!o&&!(Rt in r)?r._ctx=Ne:o===3&&Ne&&(Ne.slots._===1?r._=1:(r._=2,e.patchFlag|=1024))}else se(r)?(r={default:r,_ctx:Ne},n=32):(r=String(r),t&64?(n=16,r=[Nr(r)]):n=8);e.children=r,e.shapeFlag|=n}function po(...e){const r={};for(let n=0;n<e.length;n++){const t=e[n];for(const o in t)if(o==="class")r.class!==t.class&&(r.class=Ve([r.class,t.class]));else if(o==="style")r.style=Bn([r.style,t.style]);else if(Dn(o)){const s=r[o],a=t[o];a&&s!==a&&!(Z(s)&&s.includes(a))&&(r[o]=s?[].concat(s,a):a)}else o!==""&&(r[o]=t[o])}return r}function Ke(e,r,n,t=null){Qe(e,r,7,[n,t])}const Xl=ai();let Kl=0;function Ql(e,r,n){const t=e.type,o=(r?r.appContext:e.appContext)||Xl,s={uid:Kl++,vnode:e,type:t,parent:r,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:r?r.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ci(t,o),emitsOptions:Ga(t,o),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:t.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=r?r.root:s,s.emit=il.bind(null,s),e.ce&&e.ce(s),s}let Le=null;const Oo=()=>Le||Ne;let zo,en,_s="__VUE_INSTANCE_SETTERS__";(en=eo()[_s])||(en=eo()[_s]=[]),en.push(e=>Le=e),zo=e=>{en.length>1?en.forEach(r=>r(e)):en[0](e)};const pn=e=>{zo(e),e.scope.on()},Yr=()=>{Le&&Le.scope.off(),zo(null)};function fi(e){return e.vnode.shapeFlag&4}let mn=!1;function eu(e,r=!1){mn=r;const{props:n,children:t}=e.vnode,o=fi(e);Nl(e,n,o,r),Dl(e,t);const s=o?ru(e,r):void 0;return mn=!1,s}function ru(e,r){const n=e.type;e.accessCache=Object.create(null),e.proxy=Da(new Proxy(e.ctx,Il));const{setup:t}=n;if(t){const o=e.setupContext=t.length>1?tu(e):null;pn(e),gn();const s=Ar(t,e,0,[e.props,o]);if(vn(),Yr(),_a(s)){if(s.then(Yr,Yr),r)return s.then(a=>{Ps(e,a,r)}).catch(a=>{Hn(a,e,0)});e.asyncDep=s}else Ps(e,s,r)}else gi(e,r)}function Ps(e,r,n){se(r)?e.type.__ssrInlineRender?e.ssrRender=r:e.render=r:xe(r)&&(e.setupState=Wa(r)),gi(e,n)}let xs;function gi(e,r,n){const t=e.type;if(!e.render){if(!r&&xs&&!t.render){const o=t.template||Ao(e).template;if(o){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:c,compilerOptions:i}=t,l=je(je({isCustomElement:s,delimiters:c},a),i);t.render=xs(o,l)}}e.render=t.render||or}pn(e),gn(),jl(e),vn(),Yr()}function nu(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(r,n){return Je(e,"get","$attrs"),r[n]}}))}function tu(e){const r=n=>{e.exposed=n||{}};return{get attrs(){return nu(e)},slots:e.slots,emit:e.emit,expose:r}}function Ot(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wa(Da(e.exposed)),{get(r,n){if(n in r)return r[n];if(n in Cn)return Cn[n](e)},has(r,n){return n in r||n in Cn}}))}function ou(e,r=!0){return se(e)?e.displayName||e.name:e.name||r&&e.__name}function su(e){return se(e)&&"__vccOpts"in e}const N=(e,r)=>rl(e,r,mn);function ce(e,r,n){const t=arguments.length;return t===2?xe(r)&&!Z(r)?yt(r)?re(e,null,[r]):re(e,r):re(e,null,r):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&yt(n)&&(n=[n]),re(e,r,n))}const au=Symbol.for("v-scx"),iu=()=>Ie(au),cu="3.3.4",lu="http://www.w3.org/2000/svg",$r=typeof document<"u"?document:null,Es=$r&&$r.createElement("template"),uu={insert:(e,r,n)=>{r.insertBefore(e,n||null)},remove:e=>{const r=e.parentNode;r&&r.removeChild(e)},createElement:(e,r,n,t)=>{const o=r?$r.createElementNS(lu,e):$r.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&o.setAttribute("multiple",t.multiple),o},createText:e=>$r.createTextNode(e),createComment:e=>$r.createComment(e),setText:(e,r)=>{e.nodeValue=r},setElementText:(e,r)=>{e.textContent=r},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$r.querySelector(e),setScopeId(e,r){e.setAttribute(r,"")},insertStaticContent(e,r,n,t,o,s){const a=n?n.previousSibling:r.lastChild;if(o&&(o===s||o.nextSibling))for(;r.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Es.innerHTML=t?`<svg>${e}</svg>`:e;const c=Es.content;if(t){const i=c.firstChild;for(;i.firstChild;)c.appendChild(i.firstChild);c.removeChild(i)}r.insertBefore(c,n)}return[a?a.nextSibling:r.firstChild,n?n.previousSibling:r.lastChild]}};function du(e,r,n){const t=e._vtc;t&&(r=(r?[r,...t]:[...t]).join(" ")),r==null?e.removeAttribute("class"):n?e.setAttribute("class",r):e.className=r}function pu(e,r,n){const t=e.style,o=ge(n);if(n&&!o){if(r&&!ge(r))for(const s in r)n[s]==null&&mo(t,s,"");for(const s in n)mo(t,s,n[s])}else{const s=t.display;o?r!==n&&(t.cssText=n):r&&e.removeAttribute("style"),"_vod"in e&&(t.display=s)}}const Ts=/\s*!important$/;function mo(e,r,n){if(Z(n))n.forEach(t=>mo(e,r,t));else if(n==null&&(n=""),r.startsWith("--"))e.setProperty(r,n);else{const t=mu(e,r);Ts.test(n)?e.setProperty(Zr(t),n.replace(Ts,""),"important"):e[t]=n}}const ks=["Webkit","Moz","ms"],Wt={};function mu(e,r){const n=Wt[r];if(n)return n;let t=dr(r);if(t!=="filter"&&t in e)return Wt[r]=t;t=kt(t);for(let o=0;o<ks.length;o++){const s=ks[o]+t;if(s in e)return Wt[r]=s}return r}const Cs="http://www.w3.org/1999/xlink";function hu(e,r,n,t,o){if(t&&r.startsWith("xlink:"))n==null?e.removeAttributeNS(Cs,r.slice(6,r.length)):e.setAttributeNS(Cs,r,n);else{const s=yc(r);n==null||s&&!Ea(n)?e.removeAttribute(r):e.setAttribute(r,s?"":n)}}function fu(e,r,n,t,o,s,a){if(r==="innerHTML"||r==="textContent"){t&&a(t,o,s),e[r]=n??"";return}const c=e.tagName;if(r==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(r);return}let i=!1;if(n===""||n==null){const l=typeof e[r];l==="boolean"?n=Ea(n):n==null&&l==="string"?(n="",i=!0):l==="number"&&(n=0,i=!0)}try{e[r]=n}catch{}i&&e.removeAttribute(r)}function gu(e,r,n,t){e.addEventListener(r,n,t)}function vu(e,r,n,t){e.removeEventListener(r,n,t)}function bu(e,r,n,t,o=null){const s=e._vei||(e._vei={}),a=s[r];if(t&&a)a.value=t;else{const[c,i]=yu(r);if(t){const l=s[r]=_u(t,o);gu(e,c,l,i)}else a&&(vu(e,c,a,i),s[r]=void 0)}}const Is=/(?:Once|Passive|Capture)$/;function yu(e){let r;if(Is.test(e)){r={};let t;for(;t=e.match(Is);)e=e.slice(0,e.length-t[0].length),r[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zr(e.slice(2)),r]}let $t=0;const wu=Promise.resolve(),Su=()=>$t||(wu.then(()=>$t=0),$t=Date.now());function _u(e,r){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;Qe(Pu(t,n.value),r,5,[t])};return n.value=e,n.attached=Su(),n}function Pu(e,r){if(Z(r)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},r.map(t=>o=>!o._stopped&&t&&t(o))}else return r}const js=/^on[a-z]/,xu=(e,r,n,t,o=!1,s,a,c,i)=>{r==="class"?du(e,t,o):r==="style"?pu(e,n,t):Dn(r)?bo(r)||bu(e,r,n,t,a):(r[0]==="."?(r=r.slice(1),!0):r[0]==="^"?(r=r.slice(1),!1):Eu(e,r,t,o))?fu(e,r,t,s,a,c,i):(r==="true-value"?e._trueValue=t:r==="false-value"&&(e._falseValue=t),hu(e,r,t,o))};function Eu(e,r,n,t){return t?!!(r==="innerHTML"||r==="textContent"||r in e&&js.test(r)&&se(n)):r==="spellcheck"||r==="draggable"||r==="translate"||r==="form"||r==="list"&&e.tagName==="INPUT"||r==="type"&&e.tagName==="TEXTAREA"||js.test(r)&&ge(n)?!1:r in e}const Tr="transition",Sn="animation",Jn=(e,{slots:r})=>ce(gl,Tu(e),r);Jn.displayName="Transition";const vi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jn.props=je({},Qa,vi);const Dr=(e,r=[])=>{Z(e)?e.forEach(n=>n(...r)):e&&e(...r)},Ls=e=>e?Z(e)?e.some(r=>r.length>1):e.length>1:!1;function Tu(e){const r={};for(const T in e)T in vi||(r[T]=e[T]);if(e.css===!1)return r;const{name:n="v",type:t,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:i=s,appearActiveClass:l=a,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,w=ku(o),S=w&&w[0],P=w&&w[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:I,onLeave:C,onLeaveCancelled:W,onBeforeAppear:X=v,onAppear:R=y,onAppearCancelled:g=I}=r,U=(T,A,q)=>{Br(T,A?u:c),Br(T,A?l:a),q&&q()},M=(T,A)=>{T._isLeaving=!1,Br(T,d),Br(T,f),Br(T,m),A&&A()},J=T=>(A,q)=>{const ae=T?R:y,H=()=>U(A,T,q);Dr(ae,[A,H]),As(()=>{Br(A,T?i:s),kr(A,T?u:c),Ls(ae)||qs(A,t,S,H)})};return je(r,{onBeforeEnter(T){Dr(v,[T]),kr(T,s),kr(T,a)},onBeforeAppear(T){Dr(X,[T]),kr(T,i),kr(T,l)},onEnter:J(!1),onAppear:J(!0),onLeave(T,A){T._isLeaving=!0;const q=()=>M(T,A);kr(T,d),ju(),kr(T,m),As(()=>{T._isLeaving&&(Br(T,d),kr(T,f),Ls(C)||qs(T,t,P,q))}),Dr(C,[T,q])},onEnterCancelled(T){U(T,!1),Dr(I,[T])},onAppearCancelled(T){U(T,!0),Dr(g,[T])},onLeaveCancelled(T){M(T),Dr(W,[T])}})}function ku(e){if(e==null)return null;if(xe(e))return[Vt(e.enter),Vt(e.leave)];{const r=Vt(e);return[r,r]}}function Vt(e){return mc(e)}function kr(e,r){r.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(r)}function Br(e,r){r.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(r),n.size||(e._vtc=void 0))}function As(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cu=0;function qs(e,r,n,t){const o=e._endId=++Cu,s=()=>{o===e._endId&&t()};if(n)return setTimeout(s,n);const{type:a,timeout:c,propCount:i}=Iu(e,r);if(!a)return t();const l=a+"end";let u=0;const d=()=>{e.removeEventListener(l,m),s()},m=f=>{f.target===e&&++u>=i&&d()};setTimeout(()=>{u<i&&d()},c+1),e.addEventListener(l,m)}function Iu(e,r){const n=window.getComputedStyle(e),t=w=>(n[w]||"").split(", "),o=t(`${Tr}Delay`),s=t(`${Tr}Duration`),a=Rs(o,s),c=t(`${Sn}Delay`),i=t(`${Sn}Duration`),l=Rs(c,i);let u=null,d=0,m=0;r===Tr?a>0&&(u=Tr,d=a,m=s.length):r===Sn?l>0&&(u=Sn,d=l,m=i.length):(d=Math.max(a,l),u=d>0?a>l?Tr:Sn:null,m=u?u===Tr?s.length:i.length:0);const f=u===Tr&&/\b(transform|all)(,|$)/.test(t(`${Tr}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:f}}function Rs(e,r){for(;e.length<r.length;)e=e.concat(e);return Math.max(...r.map((n,t)=>Os(n)+Os(e[t])))}function Os(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ju(){return document.body.offsetHeight}const Lu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Au=(e,r)=>n=>{if(!("key"in n))return;const t=Zr(n.key);if(r.some(o=>o===t||Lu[o]===t))return e(n)},wt={beforeMount(e,{value:r},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&r?n.beforeEnter(e):_n(e,r)},mounted(e,{value:r},{transition:n}){n&&r&&n.enter(e)},updated(e,{value:r,oldValue:n},{transition:t}){!r!=!n&&(t?r?(t.beforeEnter(e),_n(e,!0),t.enter(e)):t.leave(e,()=>{_n(e,!1)}):_n(e,r))},beforeUnmount(e,{value:r}){_n(e,r)}};function _n(e,r){e.style.display=r?e._vod:"none"}const qu=je({patchProp:xu},uu);let Jt,zs=!1;function Ru(){return Jt=zs?Jt:Hl(qu),zs=!0,Jt}const Ou=(...e)=>{const r=Ru().createApp(...e),{mount:n}=r;return r.mount=t=>{const o=zu(t);if(o)return n(o,!0,o instanceof SVGElement)},r};function zu(e){return ge(e)?document.querySelector(e):e}const Nu={"v-56dd2a2a":()=>ee(()=>import("./InstallationNotes.html-4b28d84d.js"),[]).then(({data:e})=>e),"v-8daa1a0e":()=>ee(()=>import("./index.html-76f5fb22.js"),[]).then(({data:e})=>e),"v-2d0a7df8":()=>ee(()=>import("./index.html-f46e7c67.js"),[]).then(({data:e})=>e),"v-2d0a87a8":()=>ee(()=>import("./index.html-1b248e63.js"),[]).then(({data:e})=>e),"v-f39b1880":()=>ee(()=>import("./concurrency.html-c0fe19eb.js"),[]).then(({data:e})=>e),"v-3568b29a":()=>ee(()=>import("./index.html-f5e65fb4.js"),[]).then(({data:e})=>e),"v-4d403dc3":()=>ee(()=>import("./operatingsystem.html-13f637f4.js"),[]).then(({data:e})=>e),"v-62d86b64":()=>ee(()=>import("./process.html-ab2e808f.js"),[]).then(({data:e})=>e),"v-02f7a31f":()=>ee(()=>import("./curl_annex.html-8d6130cb.js"),[]).then(({data:e})=>e),"v-3568b2b9":()=>ee(()=>import("./index.html-37f94e3a.js"),[]).then(({data:e})=>e),"v-0b12bee5":()=>ee(()=>import("./iostreams.html-fe122d84.js"),[]).then(({data:e})=>e),"v-69cbc2b4":()=>ee(()=>import("./processbuilder.html-6745db8f.js"),[]).then(({data:e})=>e),"v-4144fd3a":()=>ee(()=>import("./runtime.html-5aaab033.js"),[]).then(({data:e})=>e),"v-46af1970":()=>ee(()=>import("./concurrency.html-86ce093c.js"),[]).then(({data:e})=>e),"v-a8728f6c":()=>ee(()=>import("./index.html-0f29a414.js"),[]).then(({data:e})=>e),"v-e2dae91a":()=>ee(()=>import("./operatingsystem.html-d832cb7d.js"),[]).then(({data:e})=>e),"v-75292dd8":()=>ee(()=>import("./process.html-e371f778.js"),[]).then(({data:e})=>e),"v-3277876f":()=>ee(()=>import("./curl_annex.html-4477b510.js"),[]).then(({data:e})=>e),"v-a8728f2e":()=>ee(()=>import("./index.html-feca8f29.js"),[]).then(({data:e})=>e),"v-14dd1095":()=>ee(()=>import("./iostreams.html-10a7d348.js"),[]).then(({data:e})=>e),"v-5320ff04":()=>ee(()=>import("./processbuilder.html-6136c6c0.js"),[]).then(({data:e})=>e),"v-b8500a2c":()=>ee(()=>import("./runtime.html-e2f0f66c.js"),[]).then(({data:e})=>e),"v-3706649a":()=>ee(()=>import("./404.html-4b05ea4a.js"),[]).then(({data:e})=>e)},Mu=JSON.parse('{"base":"/apuntes/","lang":"ca-ES","title":"SAD","description":"SAD, CFGS ASIR, FP, Seguridad, Alta disponibilidad, Hacking, Análisis Forense, Bastionado Redes, IES Doctor Balmis","head":[["meta",{"name":"theme-color","content":"#3eaf7c"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["link",{"rel":"icon","href":"/apuntes/sad_favicon.png"}]],"locales":{"/ca/":{"lang":"ca-ES","title":"Seguretat i Alta Disponibilitat","description":"Módul SAD 2n ASIX"},"/es/":{"lang":"es-ES","title":"Seguridad y Alta Disponibilidad","description":"Módulo SAD de 2º ASIR"}}}');var Fu=([e,r,n])=>e==="meta"&&r.name?`${e}.${r.name}`:["title","base"].includes(e)?e:e==="template"&&r.id?`${e}.${r.id}`:JSON.stringify([e,r,n]),Du=e=>{const r=new Set,n=[];return e.forEach(t=>{const o=Fu(t);r.has(o)||(r.add(o),n.push(t))}),n},Gn=e=>/^(https?:)?\/\//.test(e),Bu=e=>/^mailto:/.test(e),Uu=e=>/^tel:/.test(e),No=e=>Object.prototype.toString.call(e)==="[object Object]",bi=e=>e[e.length-1]==="/"?e.slice(0,-1):e,yi=e=>e[0]==="/"?e.slice(1):e,wi=(e,r)=>{const n=Object.keys(e).sort((t,o)=>{const s=o.split("/").length-t.split("/").length;return s!==0?s:o.length-t.length});for(const t of n)if(r.startsWith(t))return t;return"/"};const Si={"v-56dd2a2a":we(()=>ee(()=>import("./InstallationNotes.html-003d0999.js"),[])),"v-8daa1a0e":we(()=>ee(()=>import("./index.html-57c48300.js"),[])),"v-2d0a7df8":we(()=>ee(()=>import("./index.html-029d35b6.js"),[])),"v-2d0a87a8":we(()=>ee(()=>import("./index.html-fcec01fd.js"),[])),"v-f39b1880":we(()=>ee(()=>import("./concurrency.html-130d57e2.js"),["assets/concurrency.html-130d57e2.js","assets/gantt_parallel-cc549e79.js"])),"v-3568b29a":we(()=>ee(()=>import("./index.html-46d0f568.js"),[])),"v-4d403dc3":we(()=>ee(()=>import("./operatingsystem.html-b354e670.js"),["assets/operatingsystem.html-b354e670.js","assets/roundrobin-3-400fdffd.js"])),"v-62d86b64":we(()=>ee(()=>import("./process.html-384b1b4c.js"),["assets/process.html-384b1b4c.js","assets/threads_vs_process-5db8950b.js"])),"v-02f7a31f":we(()=>ee(()=>import("./curl_annex.html-59a937f5.js"),[])),"v-3568b2b9":we(()=>ee(()=>import("./index.html-7db92fe1.js"),[])),"v-0b12bee5":we(()=>ee(()=>import("./iostreams.html-9a25ab52.js"),["assets/iostreams.html-9a25ab52.js","assets/Java_Stream_Readers_BufferedReaders-a4e1bc0d.js"])),"v-69cbc2b4":we(()=>ee(()=>import("./processbuilder.html-9063f591.js"),["assets/processbuilder.html-9063f591.js","assets/comandotree-ef7769e5.js"])),"v-4144fd3a":we(()=>ee(()=>import("./runtime.html-494a2642.js"),[])),"v-46af1970":we(()=>ee(()=>import("./concurrency.html-4a782cc6.js"),["assets/concurrency.html-4a782cc6.js","assets/gantt_parallel-cc549e79.js"])),"v-a8728f6c":we(()=>ee(()=>import("./index.html-1d256b9f.js"),[])),"v-e2dae91a":we(()=>ee(()=>import("./operatingsystem.html-a5a37f4f.js"),["assets/operatingsystem.html-a5a37f4f.js","assets/roundrobin-3-400fdffd.js"])),"v-75292dd8":we(()=>ee(()=>import("./process.html-c494fdbd.js"),["assets/process.html-c494fdbd.js","assets/threads_vs_process-5db8950b.js"])),"v-3277876f":we(()=>ee(()=>import("./curl_annex.html-0834615b.js"),[])),"v-a8728f2e":we(()=>ee(()=>import("./index.html-c9e01fe5.js"),[])),"v-14dd1095":we(()=>ee(()=>import("./iostreams.html-c9eadf95.js"),["assets/iostreams.html-c9eadf95.js","assets/Java_Stream_Readers_BufferedReaders-a4e1bc0d.js"])),"v-5320ff04":we(()=>ee(()=>import("./processbuilder.html-51d9825e.js"),["assets/processbuilder.html-51d9825e.js","assets/comandotree-ef7769e5.js"])),"v-b8500a2c":we(()=>ee(()=>import("./runtime.html-7d8dc106.js"),[])),"v-3706649a":we(()=>ee(()=>import("./404.html-2ecc19be.js"),[]))};var Hu=Symbol(""),Wu=fe(Nu),_i=bn({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Ir=fe(_i),qr=()=>Ir,Pi=Symbol(""),gr=()=>{const e=Ie(Pi);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},xi=Symbol(""),$u=()=>{const e=Ie(xi);if(!e)throw new Error("usePageHead() is called without provider.");return e},Vu=Symbol(""),Ei=Symbol(""),Ju=()=>{const e=Ie(Ei);if(!e)throw new Error("usePageLang() is called without provider.");return e},Ti=Symbol(""),Gu=()=>{const e=Ie(Ti);if(!e)throw new Error("usePageLayout() is called without provider.");return e},Mo=Symbol(""),yn=()=>{const e=Ie(Mo);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},tn=fe(Mu),ki=()=>tn,Ci=Symbol(""),Fo=()=>{const e=Ie(Ci);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Yu=Symbol(""),Zu="Layout",Xu="NotFound",mr=Un({resolveLayouts:e=>e.reduce((r,n)=>({...r,...n.layouts}),{}),resolvePageData:async e=>{const r=Wu.value[e];return await(r==null?void 0:r())??_i},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,r,n)=>{const t=ge(r.description)?r.description:n.description,o=[...Z(r.head)?r.head:[],...n.head,["title",{},e],["meta",{name:"description",content:t}]];return Du(o)},resolvePageHeadTitle:(e,r)=>[e.title,r.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,r)=>e.lang||r.lang||"en-US",resolvePageLayout:(e,r)=>{let n;if(e.path){const t=e.frontmatter.layout;ge(t)?n=t:n=Zu}else n=Xu;return r[n]},resolveRouteLocale:(e,r)=>wi(e,r),resolveSiteLocaleData:(e,r)=>({...e,...e.locales[r]})}),Do=ue({name:"ClientOnly",setup(e,r){const n=fe(!1);return He(()=>{n.value=!0}),()=>{var t,o;return n.value?(o=(t=r.slots).default)==null?void 0:o.call(t):null}}}),Ku=ue({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const r=qr(),n=N(()=>Si[e.pageKey||r.value.key]);return()=>n.value?ce(n.value):ce("div","404 Not Found")}}),Sr=(e={})=>e,Bo=e=>Gn(e)?e:`/apuntes/${yi(e)}`;function Ii(e,r,n){var t,o,s;r===void 0&&(r=50),n===void 0&&(n={});var a=(t=n.isImmediate)!=null&&t,c=(o=n.callback)!=null&&o,i=n.maxWait,l=Date.now(),u=[];function d(){if(i!==void 0){var f=Date.now()-l;if(f+r>=i)return i-f}return r}var m=function(){var f=[].slice.call(arguments),w=this;return new Promise(function(S,P){var v=a&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,l=Date.now(),!a){var I=e.apply(w,f);c&&c(I),u.forEach(function(C){return(0,C.resolve)(I)}),u=[]}},d()),v){var y=e.apply(w,f);return c&&c(y),S(y)}u.push({resolve:S,reject:P})})};return m.cancel=function(f){s!==void 0&&clearTimeout(s),u.forEach(function(w){return(0,w.reject)(f)}),u=[]},m}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function Qu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Gt(e,r){const n={};for(const t in r){const o=r[t];n[t]=ar(o)?o.map(e):e(o)}return n}const Ln=()=>{},ar=Array.isArray,ed=/\/$/,rd=e=>e.replace(ed,"");function Yt(e,r,n="/"){let t,o={},s="",a="";const c=r.indexOf("#");let i=r.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(t=r.slice(0,i),s=r.slice(i+1,c>-1?c:r.length),o=e(s)),c>-1&&(t=t||r.slice(0,c),a=r.slice(c,r.length)),t=sd(t??r,n),{fullPath:t+(s&&"?")+s+a,path:t,query:o,hash:a}}function nd(e,r){const n=r.query?e(r.query):"";return r.path+(n&&"?")+n+(r.hash||"")}function Ns(e,r){return!r||!e.toLowerCase().startsWith(r.toLowerCase())?e:e.slice(r.length)||"/"}function td(e,r,n){const t=r.matched.length-1,o=n.matched.length-1;return t>-1&&t===o&&hn(r.matched[t],n.matched[o])&&ji(r.params,n.params)&&e(r.query)===e(n.query)&&r.hash===n.hash}function hn(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function ji(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const n in e)if(!od(e[n],r[n]))return!1;return!0}function od(e,r){return ar(e)?Ms(e,r):ar(r)?Ms(r,e):e===r}function Ms(e,r){return ar(r)?e.length===r.length&&e.every((n,t)=>n===r[t]):e.length===1&&e[0]===r}function sd(e,r){if(e.startsWith("/"))return e;if(!e)return r;const n=r.split("/"),t=e.split("/"),o=t[t.length-1];(o===".."||o===".")&&t.push("");let s=n.length-1,a,c;for(a=0;a<t.length;a++)if(c=t[a],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+t.slice(a-(a===t.length?1:0)).join("/")}var Mn;(function(e){e.pop="pop",e.push="push"})(Mn||(Mn={}));var An;(function(e){e.back="back",e.forward="forward",e.unknown=""})(An||(An={}));function ad(e){if(!e)if(nn){const r=document.querySelector("base");e=r&&r.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),rd(e)}const id=/^[^#]+#/;function cd(e,r){return e.replace(id,"#")+r}function ld(e,r){const n=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:r.behavior,left:t.left-n.left-(r.left||0),top:t.top-n.top-(r.top||0)}}const zt=()=>({left:window.pageXOffset,top:window.pageYOffset});function ud(e){let r;if("el"in e){const n=e.el,t=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?t?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;r=ld(o,e)}else r=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(r):window.scrollTo(r.left!=null?r.left:window.pageXOffset,r.top!=null?r.top:window.pageYOffset)}function Fs(e,r){return(history.state?history.state.position-r:-1)+e}const ho=new Map;function dd(e,r){ho.set(e,r)}function pd(e){const r=ho.get(e);return ho.delete(e),r}let md=()=>location.protocol+"//"+location.host;function Li(e,r){const{pathname:n,search:t,hash:o}=r,s=e.indexOf("#");if(s>-1){let c=o.includes(e.slice(s))?e.slice(s).length:1,i=o.slice(c);return i[0]!=="/"&&(i="/"+i),Ns(i,"")}return Ns(n,e)+t+o}function hd(e,r,n,t){let o=[],s=[],a=null;const c=({state:m})=>{const f=Li(e,location),w=n.value,S=r.value;let P=0;if(m){if(n.value=f,r.value=m,a&&a===w){a=null;return}P=S?m.position-S.position:0}else t(f);o.forEach(v=>{v(n.value,w,{delta:P,type:Mn.pop,direction:P?P>0?An.forward:An.back:An.unknown})})};function i(){a=n.value}function l(m){o.push(m);const f=()=>{const w=o.indexOf(m);w>-1&&o.splice(w,1)};return s.push(f),f}function u(){const{history:m}=window;m.state&&m.replaceState(ve({},m.state,{scroll:zt()}),"")}function d(){for(const m of s)m();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:i,listen:l,destroy:d}}function Ds(e,r,n,t=!1,o=!1){return{back:e,current:r,forward:n,replaced:t,position:window.history.length,scroll:o?zt():null}}function fd(e){const{history:r,location:n}=window,t={value:Li(e,n)},o={value:r.state};o.value||s(t.value,{back:null,current:t.value,forward:null,position:r.length-1,replaced:!0,scroll:null},!0);function s(i,l,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+i:md()+e+i;try{r[u?"replaceState":"pushState"](l,"",m),o.value=l}catch(f){console.error(f),n[u?"replace":"assign"](m)}}function a(i,l){const u=ve({},r.state,Ds(o.value.back,i,o.value.forward,!0),l,{position:o.value.position});s(i,u,!0),t.value=i}function c(i,l){const u=ve({},o.value,r.state,{forward:i,scroll:zt()});s(u.current,u,!0);const d=ve({},Ds(t.value,i,null),{position:u.position+1},l);s(i,d,!1),t.value=i}return{location:t,state:o,push:c,replace:a}}function gd(e){e=ad(e);const r=fd(e),n=hd(e,r.state,r.location,r.replace);function t(s,a=!0){a||n.pauseListeners(),history.go(s)}const o=ve({location:"",base:e,go:t,createHref:cd.bind(null,e)},r,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>r.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>r.state.value}),o}function vd(e){return typeof e=="string"||e&&typeof e=="object"}function Ai(e){return typeof e=="string"||typeof e=="symbol"}const hr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qi=Symbol("");var Bs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Bs||(Bs={}));function fn(e,r){return ve(new Error,{type:e,[qi]:!0},r)}function pr(e,r){return e instanceof Error&&qi in e&&(r==null||!!(e.type&r))}const Us="[^/]+?",bd={sensitive:!1,strict:!1,start:!0,end:!0},yd=/[.+*?^${}()[\]/\\]/g;function wd(e,r){const n=ve({},bd,r),t=[];let o=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let d=0;d<l.length;d++){const m=l[d];let f=40+(n.sensitive?.25:0);if(m.type===0)d||(o+="/"),o+=m.value.replace(yd,"\\$&"),f+=40;else if(m.type===1){const{value:w,repeatable:S,optional:P,regexp:v}=m;s.push({name:w,repeatable:S,optional:P});const y=v||Us;if(y!==Us){f+=10;try{new RegExp(`(${y})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${w}" (${y}): `+C.message)}}let I=S?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(I=P&&l.length<2?`(?:/${I})`:"/"+I),P&&(I+="?"),o+=I,f+=20,P&&(f+=-8),S&&(f+=-20),y===".*"&&(f+=-50)}u.push(f)}t.push(u)}if(n.strict&&n.end){const l=t.length-1;t[l][t[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function c(l){const u=l.match(a),d={};if(!u)return null;for(let m=1;m<u.length;m++){const f=u[m]||"",w=s[m-1];d[w.name]=f&&w.repeatable?f.split("/"):f}return d}function i(l){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of m)if(f.type===0)u+=f.value;else if(f.type===1){const{value:w,repeatable:S,optional:P}=f,v=w in l?l[w]:"";if(ar(v)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const y=ar(v)?v.join("/"):v;if(!y)if(P)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=y}}return u||"/"}return{re:a,score:t,keys:s,parse:c,stringify:i}}function Sd(e,r){let n=0;for(;n<e.length&&n<r.length;){const t=r[n]-e[n];if(t)return t;n++}return e.length<r.length?e.length===1&&e[0]===40+40?-1:1:e.length>r.length?r.length===1&&r[0]===40+40?1:-1:0}function _d(e,r){let n=0;const t=e.score,o=r.score;for(;n<t.length&&n<o.length;){const s=Sd(t[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-t.length)===1){if(Hs(t))return 1;if(Hs(o))return-1}return o.length-t.length}function Hs(e){const r=e[e.length-1];return e.length>0&&r[r.length-1]<0}const Pd={type:0,value:""},xd=/[a-zA-Z0-9_]/;function Ed(e){if(!e)return[[]];if(e==="/")return[[Pd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function r(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,t=n;const o=[];let s;function a(){s&&o.push(s),s=[]}let c=0,i,l="",u="";function d(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(i==="*"||i==="+")&&r(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):r("Invalid state to consume buffer"),l="")}function m(){l+=i}for(;c<e.length;){if(i=e[c++],i==="\\"&&n!==2){t=n,n=4;continue}switch(n){case 0:i==="/"?(l&&d(),a()):i===":"?(d(),n=1):m();break;case 4:m(),n=t;break;case 1:i==="("?n=2:xd.test(i)?m():(d(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&c--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:n=3:u+=i;break;case 3:d(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&c--,u="";break;default:r("Unknown state");break}}return n===2&&r(`Unfinished custom RegExp for param "${l}"`),d(),a(),o}function Td(e,r,n){const t=wd(Ed(e.path),n),o=ve(t,{record:e,parent:r,children:[],alias:[]});return r&&!o.record.aliasOf==!r.record.aliasOf&&r.children.push(o),o}function kd(e,r){const n=[],t=new Map;r=Vs({strict:!1,end:!0,sensitive:!1},r);function o(u){return t.get(u)}function s(u,d,m){const f=!m,w=Cd(u);w.aliasOf=m&&m.record;const S=Vs(r,u),P=[w];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of I)P.push(ve({},w,{components:m?m.record.components:w.components,path:C,aliasOf:m?m.record:w}))}let v,y;for(const I of P){const{path:C}=I;if(d&&C[0]!=="/"){const W=d.record.path,X=W[W.length-1]==="/"?"":"/";I.path=d.record.path+(C&&X+C)}if(v=Td(I,d,S),m?m.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),f&&u.name&&!$s(v)&&a(u.name)),w.children){const W=w.children;for(let X=0;X<W.length;X++)s(W[X],v,m&&m.children[X])}m=m||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&i(v)}return y?()=>{a(y)}:Ln}function a(u){if(Ai(u)){const d=t.get(u);d&&(t.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&t.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function c(){return n}function i(u){let d=0;for(;d<n.length&&_d(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ri(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!$s(u)&&t.set(u.record.name,u)}function l(u,d){let m,f={},w,S;if("name"in u&&u.name){if(m=t.get(u.name),!m)throw fn(1,{location:u});S=m.record.name,f=ve(Ws(d.params,m.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Ws(u.params,m.keys.map(y=>y.name))),w=m.stringify(f)}else if("path"in u)w=u.path,m=n.find(y=>y.re.test(w)),m&&(f=m.parse(w),S=m.record.name);else{if(m=d.name?t.get(d.name):n.find(y=>y.re.test(d.path)),!m)throw fn(1,{location:u,currentLocation:d});S=m.record.name,f=ve({},d.params,u.params),w=m.stringify(f)}const P=[];let v=m;for(;v;)P.unshift(v.record),v=v.parent;return{name:S,path:w,params:f,matched:P,meta:jd(P)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:c,getRecordMatcher:o}}function Ws(e,r){const n={};for(const t of r)t in e&&(n[t]=e[t]);return n}function Cd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Id(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Id(e){const r={},n=e.props||!1;if("component"in e)r.default=n;else for(const t in e.components)r[t]=typeof n=="object"?n[t]:n;return r}function $s(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function jd(e){return e.reduce((r,n)=>ve(r,n.meta),{})}function Vs(e,r){const n={};for(const t in e)n[t]=t in r?r[t]:e[t];return n}function Ri(e,r){return r.children.some(n=>n===e||Ri(e,n))}const Oi=/#/g,Ld=/&/g,Ad=/\//g,qd=/=/g,Rd=/\?/g,zi=/\+/g,Od=/%5B/g,zd=/%5D/g,Ni=/%5E/g,Nd=/%60/g,Mi=/%7B/g,Md=/%7C/g,Fi=/%7D/g,Fd=/%20/g;function Uo(e){return encodeURI(""+e).replace(Md,"|").replace(Od,"[").replace(zd,"]")}function Dd(e){return Uo(e).replace(Mi,"{").replace(Fi,"}").replace(Ni,"^")}function fo(e){return Uo(e).replace(zi,"%2B").replace(Fd,"+").replace(Oi,"%23").replace(Ld,"%26").replace(Nd,"`").replace(Mi,"{").replace(Fi,"}").replace(Ni,"^")}function Bd(e){return fo(e).replace(qd,"%3D")}function Ud(e){return Uo(e).replace(Oi,"%23").replace(Rd,"%3F")}function Hd(e){return e==null?"":Ud(e).replace(Ad,"%2F")}function St(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wd(e){const r={};if(e===""||e==="?")return r;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<t.length;++o){const s=t[o].replace(zi," "),a=s.indexOf("="),c=St(a<0?s:s.slice(0,a)),i=a<0?null:St(s.slice(a+1));if(c in r){let l=r[c];ar(l)||(l=r[c]=[l]),l.push(i)}else r[c]=i}return r}function Js(e){let r="";for(let n in e){const t=e[n];if(n=Bd(n),t==null){t!==void 0&&(r+=(r.length?"&":"")+n);continue}(ar(t)?t.map(s=>s&&fo(s)):[t&&fo(t)]).forEach(s=>{s!==void 0&&(r+=(r.length?"&":"")+n,s!=null&&(r+="="+s))})}return r}function $d(e){const r={};for(const n in e){const t=e[n];t!==void 0&&(r[n]=ar(t)?t.map(o=>o==null?null:""+o):t==null?t:""+t)}return r}const Vd=Symbol(""),Gs=Symbol(""),Nt=Symbol(""),Ho=Symbol(""),go=Symbol("");function Pn(){let e=[];function r(t){return e.push(t),()=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:r,list:()=>e.slice(),reset:n}}function jr(e,r,n,t,o){const s=t&&(t.enterCallbacks[o]=t.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const i=d=>{d===!1?c(fn(4,{from:n,to:r})):d instanceof Error?c(d):vd(d)?c(fn(2,{from:r,to:d})):(s&&t.enterCallbacks[o]===s&&typeof d=="function"&&s.push(d),a())},l=e.call(t&&t.instances[o],r,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch(d=>c(d))})}function Zt(e,r,n,t){const o=[];for(const s of e)for(const a in s.components){let c=s.components[a];if(!(r!=="beforeRouteEnter"&&!s.instances[a]))if(Jd(c)){const l=(c.__vccOpts||c)[r];l&&o.push(jr(l,n,t,s,a))}else{let i=c();o.push(()=>i.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Qu(l)?l.default:l;s.components[a]=u;const m=(u.__vccOpts||u)[r];return m&&jr(m,n,t,s,a)()}))}}return o}function Jd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ys(e){const r=Ie(Nt),n=Ie(Ho),t=N(()=>r.resolve(Q(e.to))),o=N(()=>{const{matched:i}=t.value,{length:l}=i,u=i[l-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(hn.bind(null,u));if(m>-1)return m;const f=Zs(i[l-2]);return l>1&&Zs(u)===f&&d[d.length-1].path!==f?d.findIndex(hn.bind(null,i[l-2])):m}),s=N(()=>o.value>-1&&Xd(n.params,t.value.params)),a=N(()=>o.value>-1&&o.value===n.matched.length-1&&ji(n.params,t.value.params));function c(i={}){return Zd(i)?r[Q(e.replace)?"replace":"push"](Q(e.to)).catch(Ln):Promise.resolve()}return{route:t,href:N(()=>t.value.href),isActive:s,isExactActive:a,navigate:c}}const Gd=ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ys,setup(e,{slots:r}){const n=Un(Ys(e)),{options:t}=Ie(Nt),o=N(()=>({[Xs(e.activeClass,t.linkActiveClass,"router-link-active")]:n.isActive,[Xs(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=r.default&&r.default(n);return e.custom?s:ce("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Yd=Gd;function Zd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const r=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(r))return}return e.preventDefault&&e.preventDefault(),!0}}function Xd(e,r){for(const n in r){const t=r[n],o=e[n];if(typeof t=="string"){if(t!==o)return!1}else if(!ar(o)||o.length!==t.length||t.some((s,a)=>s!==o[a]))return!1}return!0}function Zs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xs=(e,r,n)=>e??r??n,Kd=ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:r,slots:n}){const t=Ie(go),o=N(()=>e.route||t.value),s=Ie(Gs,0),a=N(()=>{let l=Q(s);const{matched:u}=o.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),c=N(()=>o.value.matched[a.value]);Gr(Gs,N(()=>a.value+1)),Gr(Vd,c),Gr(go,o);const i=fe();return sr(()=>[i.value,c.value,e.name],([l,u,d],[m,f,w])=>{u&&(u.instances[d]=l,f&&f!==u&&l&&l===m&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!hn(u,f)||!m)&&(u.enterCallbacks[d]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=o.value,u=e.name,d=c.value,m=d&&d.components[u];if(!m)return Ks(n.default,{Component:m,route:l});const f=d.props[u],w=f?f===!0?l.params:typeof f=="function"?f(l):f:null,P=ce(m,ve({},w,r,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:i}));return Ks(n.default,{Component:P,route:l})||P}}});function Ks(e,r){if(!e)return null;const n=e(r);return n.length===1?n[0]:n}const Di=Kd;function Qd(e){const r=kd(e.routes,e),n=e.parseQuery||Wd,t=e.stringifyQuery||Js,o=e.history,s=Pn(),a=Pn(),c=Pn(),i=Io(hr);let l=hr;nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gt.bind(null,x=>""+x),d=Gt.bind(null,Hd),m=Gt.bind(null,St);function f(x,B){let O,V;return Ai(x)?(O=r.getRecordMatcher(x),V=B):V=x,r.addRoute(V,O)}function w(x){const B=r.getRecordMatcher(x);B&&r.removeRoute(B)}function S(){return r.getRoutes().map(x=>x.record)}function P(x){return!!r.getRecordMatcher(x)}function v(x,B){if(B=ve({},B||i.value),typeof x=="string"){const b=Yt(n,x,B.path),_=r.resolve({path:b.path},B),E=o.createHref(b.fullPath);return ve(b,_,{params:m(_.params),hash:St(b.hash),redirectedFrom:void 0,href:E})}let O;if("path"in x)O=ve({},x,{path:Yt(n,x.path,B.path).path});else{const b=ve({},x.params);for(const _ in b)b[_]==null&&delete b[_];O=ve({},x,{params:d(b)}),B.params=d(B.params)}const V=r.resolve(O,B),le=x.hash||"";V.params=u(m(V.params));const p=nd(t,ve({},x,{hash:Dd(le),path:V.path})),h=o.createHref(p);return ve({fullPath:p,hash:le,query:t===Js?$d(x.query):x.query||{}},V,{redirectedFrom:void 0,href:h})}function y(x){return typeof x=="string"?Yt(n,x,i.value.path):ve({},x)}function I(x,B){if(l!==x)return fn(8,{from:B,to:x})}function C(x){return R(x)}function W(x){return C(ve(y(x),{replace:!0}))}function X(x){const B=x.matched[x.matched.length-1];if(B&&B.redirect){const{redirect:O}=B;let V=typeof O=="function"?O(x):O;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=y(V):{path:V},V.params={}),ve({query:x.query,hash:x.hash,params:"path"in V?{}:x.params},V)}}function R(x,B){const O=l=v(x),V=i.value,le=x.state,p=x.force,h=x.replace===!0,b=X(O);if(b)return R(ve(y(b),{state:typeof b=="object"?ve({},le,b.state):le,force:p,replace:h}),B||O);const _=O;_.redirectedFrom=B;let E;return!p&&td(t,V,O)&&(E=fn(16,{to:_,from:V}),We(V,V,!0,!1)),(E?Promise.resolve(E):M(_,V)).catch(k=>pr(k)?pr(k,2)?k:Oe(k):oe(k,_,V)).then(k=>{if(k){if(pr(k,2))return R(ve({replace:h},y(k.to),{state:typeof k.to=="object"?ve({},le,k.to.state):le,force:p}),B||_)}else k=T(_,V,!0,h,le);return J(_,V,k),k})}function g(x,B){const O=I(x,B);return O?Promise.reject(O):Promise.resolve()}function U(x){const B=Pr.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(x):x()}function M(x,B){let O;const[V,le,p]=ep(x,B);O=Zt(V.reverse(),"beforeRouteLeave",x,B);for(const b of V)b.leaveGuards.forEach(_=>{O.push(jr(_,x,B))});const h=g.bind(null,x,B);return O.push(h),qe(O).then(()=>{O=[];for(const b of s.list())O.push(jr(b,x,B));return O.push(h),qe(O)}).then(()=>{O=Zt(le,"beforeRouteUpdate",x,B);for(const b of le)b.updateGuards.forEach(_=>{O.push(jr(_,x,B))});return O.push(h),qe(O)}).then(()=>{O=[];for(const b of p)if(b.beforeEnter)if(ar(b.beforeEnter))for(const _ of b.beforeEnter)O.push(jr(_,x,B));else O.push(jr(b.beforeEnter,x,B));return O.push(h),qe(O)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),O=Zt(p,"beforeRouteEnter",x,B),O.push(h),qe(O))).then(()=>{O=[];for(const b of a.list())O.push(jr(b,x,B));return O.push(h),qe(O)}).catch(b=>pr(b,8)?b:Promise.reject(b))}function J(x,B,O){c.list().forEach(V=>U(()=>V(x,B,O)))}function T(x,B,O,V,le){const p=I(x,B);if(p)return p;const h=B===hr,b=nn?history.state:{};O&&(V||h?o.replace(x.fullPath,ve({scroll:h&&b&&b.scroll},le)):o.push(x.fullPath,le)),i.value=x,We(x,B,O,h),Oe()}let A;function q(){A||(A=o.listen((x,B,O)=>{if(!ir.listening)return;const V=v(x),le=X(V);if(le){R(ve(le,{replace:!0}),V).catch(Ln);return}l=V;const p=i.value;nn&&dd(Fs(p.fullPath,O.delta),zt()),M(V,p).catch(h=>pr(h,12)?h:pr(h,2)?(R(h.to,V).then(b=>{pr(b,20)&&!O.delta&&O.type===Mn.pop&&o.go(-1,!1)}).catch(Ln),Promise.reject()):(O.delta&&o.go(-O.delta,!1),oe(h,V,p))).then(h=>{h=h||T(V,p,!1),h&&(O.delta&&!pr(h,8)?o.go(-O.delta,!1):O.type===Mn.pop&&pr(h,20)&&o.go(-1,!1)),J(V,p,h)}).catch(Ln)}))}let ae=Pn(),H=Pn(),te;function oe(x,B,O){Oe(x);const V=H.list();return V.length?V.forEach(le=>le(x,B,O)):console.error(x),Promise.reject(x)}function Me(){return te&&i.value!==hr?Promise.resolve():new Promise((x,B)=>{ae.add([x,B])})}function Oe(x){return te||(te=!x,q(),ae.list().forEach(([B,O])=>x?O(x):B()),ae.reset()),x}function We(x,B,O,V){const{scrollBehavior:le}=e;if(!nn||!le)return Promise.resolve();const p=!O&&pd(Fs(x.fullPath,0))||(V||!O)&&history.state&&history.state.scroll||null;return Wn().then(()=>le(x,B,p)).then(h=>h&&ud(h)).catch(h=>oe(h,x,B))}const Fe=x=>o.go(x);let _r;const Pr=new Set,ir={currentRoute:i,listening:!0,addRoute:f,removeRoute:w,hasRoute:P,getRoutes:S,resolve:v,options:e,push:C,replace:W,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:c.add,onError:H.add,isReady:Me,install(x){const B=this;x.component("RouterLink",Yd),x.component("RouterView",Di),x.config.globalProperties.$router=B,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),nn&&!_r&&i.value===hr&&(_r=!0,C(o.location).catch(le=>{}));const O={};for(const le in hr)Object.defineProperty(O,le,{get:()=>i.value[le],enumerable:!0});x.provide(Nt,B),x.provide(Ho,Ma(O)),x.provide(go,i);const V=x.unmount;Pr.add(x),x.unmount=function(){Pr.delete(x),Pr.size<1&&(l=hr,A&&A(),A=null,i.value=hr,_r=!1,te=!1),V()}}};function qe(x){return x.reduce((B,O)=>B.then(()=>U(O)),Promise.resolve())}return ir}function ep(e,r){const n=[],t=[],o=[],s=Math.max(r.matched.length,e.matched.length);for(let a=0;a<s;a++){const c=r.matched[a];c&&(e.matched.find(l=>hn(l,c))?t.push(c):n.push(c));const i=e.matched[a];i&&(r.matched.find(l=>hn(l,i))||o.push(i))}return[n,t,o]}function Xr(){return Ie(Nt)}function Kr(){return Ie(Ho)}const rp=({headerLinkSelector:e,headerAnchorSelector:r,delay:n,offset:t=5})=>{const o=Xr(),a=Ii(()=>{var S,P;const c=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(c-0)<t){Qs(o,"");return}const l=window.innerHeight+c,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(u-l)<t,m=Array.from(document.querySelectorAll(e)),w=Array.from(document.querySelectorAll(r)).filter(v=>m.some(y=>y.hash===v.hash));for(let v=0;v<w.length;v++){const y=w[v],I=w[v+1],C=c>=(((S=y.parentElement)==null?void 0:S.offsetTop)??0)-t,W=!I||c<(((P=I.parentElement)==null?void 0:P.offsetTop)??0)-t;if(!(C&&W))continue;const R=decodeURIComponent(o.currentRoute.value.hash),g=decodeURIComponent(y.hash);if(R===g)return;if(d){for(let U=v+1;U<w.length;U++)if(R===decodeURIComponent(w[U].hash))return}Qs(o,g);return}},n);He(()=>{window.addEventListener("scroll",a)}),Vn(()=>{window.removeEventListener("scroll",a)})},Qs=async(e,r)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:r}).finally(()=>e.options.scrollBehavior=n)},np="a.sidebar-item",tp=".header-anchor",op=300,sp=5,ap=Sr({setup(){rp({headerLinkSelector:np,headerAnchorSelector:tp,delay:op,offset:sp})}}),ea=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,ip=()=>window.scrollTo({top:0,behavior:"smooth"});const cp=ue({name:"BackToTop",setup(){const e=fe(0),r=N(()=>e.value>300),n=Ii(()=>{e.value=ea()},100);He(()=>{e.value=ea(),window.addEventListener("scroll",()=>n())});const t=ce("div",{class:"back-to-top",onClick:ip});return()=>ce(Jn,{name:"back-to-top"},()=>r.value?t:null)}}),lp=Sr({rootComponents:[cp]});const up=ce("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[ce("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),ce("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),dp=ue({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const r=yn(),n=N(()=>e.locales[r.value]??{openInNewWindow:"open in new window"});return()=>ce("span",[up,ce("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),pp={"/ca/":{openInNewWindow:"Obrir en una finestra nova"},"/es/":{openInNewWindow:"Abrir en una ventana nueva"},"/":{openInNewWindow:"open in new window"}},mp=Sr({enhance({app:e}){e.component("ExternalLinkIcon",ce(dp,{locales:pp}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const de={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const r=de.isStarted();e=Xt(e,de.settings.minimum,1),de.status=e===1?null:e;const n=de.render(!r),t=n.querySelector(de.settings.barSelector),o=de.settings.speed,s=de.settings.easing;return n.offsetWidth,hp(a=>{tt(t,{transform:"translate3d("+ra(e)+"%,0,0)",transition:"all "+o+"ms "+s}),e===1?(tt(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){tt(n,{transition:"all "+o+"ms linear",opacity:"0"}),setTimeout(function(){de.remove(),a()},o)},o)):setTimeout(()=>a(),o)}),de},isStarted:()=>typeof de.status=="number",start:()=>{de.status||de.set(0);const e=()=>{setTimeout(()=>{de.status&&(de.trickle(),e())},de.settings.trickleSpeed)};return de.settings.trickle&&e(),de},done:e=>!e&&!de.status?de:de.inc(.3+.5*Math.random()).set(1),inc:e=>{let r=de.status;return r?(typeof e!="number"&&(e=(1-r)*Xt(Math.random()*r,.1,.95)),r=Xt(r+e,0,.994),de.set(r)):de.start()},trickle:()=>de.inc(Math.random()*de.settings.trickleRate),render:e=>{if(de.isRendered())return document.getElementById("nprogress");na(document.documentElement,"nprogress-busy");const r=document.createElement("div");r.id="nprogress",r.innerHTML=de.settings.template;const n=r.querySelector(de.settings.barSelector),t=e?"-100":ra(de.status||0),o=document.querySelector(de.settings.parent);return tt(n,{transition:"all 0 linear",transform:"translate3d("+t+"%,0,0)"}),o!==document.body&&na(o,"nprogress-custom-parent"),o==null||o.appendChild(r),r},remove:()=>{ta(document.documentElement,"nprogress-busy"),ta(document.querySelector(de.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&fp(e)},isRendered:()=>!!document.getElementById("nprogress")},Xt=(e,r,n)=>e<r?r:e>n?n:e,ra=e=>(-1+e)*100,hp=function(){const e=[];function r(){const n=e.shift();n&&n(r)}return function(n){e.push(n),e.length===1&&r()}}(),tt=function(){const e=["Webkit","O","Moz","ms"],r={};function n(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,i){return i.toUpperCase()})}function t(a){const c=document.body.style;if(a in c)return a;let i=e.length;const l=a.charAt(0).toUpperCase()+a.slice(1);let u;for(;i--;)if(u=e[i]+l,u in c)return u;return a}function o(a){return a=n(a),r[a]??(r[a]=t(a))}function s(a,c,i){c=o(c),a.style[c]=i}return function(a,c){for(const i in c){const l=c[i];l!==void 0&&Object.prototype.hasOwnProperty.call(c,i)&&s(a,i,l)}}}(),Bi=(e,r)=>(typeof e=="string"?e:Wo(e)).indexOf(" "+r+" ")>=0,na=(e,r)=>{const n=Wo(e),t=n+r;Bi(n,r)||(e.className=t.substring(1))},ta=(e,r)=>{const n=Wo(e);if(!Bi(e,r))return;const t=n.replace(" "+r+" "," ");e.className=t.substring(1,t.length-1)},Wo=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),fp=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const gp=()=>{He(()=>{const e=Xr(),r=new Set;r.add(e.currentRoute.value.path),e.beforeEach(n=>{r.has(n.path)||de.start()}),e.afterEach(n=>{r.add(n.path),de.done()})})},vp=Sr({setup(){gp()}}),bp=JSON.parse(`{"logo":"/LogoIES.png","repo":"sad2asir/sad_sources","repoLabel":"GitHub","editLink":true,"docsRepo":"https://github.com/sad2asir/sad_sources","docsBranch":"main","docsDir":"docs","lastUpdated":true,"sidebarDepth":2,"locales":{"/ca/":{"home":"/ca/","selectLanguageText":"Idioma","selectLanguageName":"Valencià","selectLanguageAriaLabel":"Idioma","editLink":false,"editLinkText":"Ajuda'ns a millorar aquesta pàgina a GitHub!","lastUpdatedText":"Última actualització","contributorsText":"Editors","notFound":["Recurs no trobat al lloc web"],"backToHome":"Tornar a l'inici","openInNewWindow":"Obrir en una finestra nova","toggleSidebar":"Mostrar/Amagar","serviceWorker":{"updatePopup":{"message":"Hi ha contingut nou disponible.","buttonText":"Actualitzar"}},"navbar":[{"text":"Aules FP","link":"https://aules.edu.gva.es/fp/login/index.php?lang=ca_valencia"},{"text":"Contingut del curs","children":[{"text":"Unitat 1 - Introduction to concurrent programming","link":"/ca/unit1/"},{"text":"Unitat 2 - Process programming in Java","link":"/ca/unitat2/"}]}],"sidebar":{"/ca/":[{"text":"SAD > Inici","link":"/ca/README.md","children":[]}],"/ca/unit1/":[{"isGroup":true,"text":"Unit 1 - Introduction to concurrent programming","children":["index.md","process.md","concurrency.md","operatingsystem.md"]}],"/ca/unit2/":[{"isGroup":true,"text":"Unit 2 - Process Programming in Java","children":["index.md","runtime.md","processbuilder.md","iostreams.md","curl_annex.md"]}]}},"/es/":{"home":"/es/","selectLanguageText":"Idioma","selectLanguageName":"Castellano","selectLanguageAriaLabel":"Idioma","editLink":false,"editLinkText":"Ayúdanos a mejorar esta página en GitHub!","lastUpdatedText":"Última actualización","contributorsText":"Editores","notFound":["No se ha encontrado el recurso solicitado"],"backToHome":"Inicio","openInNewWindow":"Abrir en una ventana nueva","toggleSidebar":"Mostrar/Ocultar","navbar":[{"text":"Aules FP","link":"https://aules.edu.gva.es/fp/login/index.php?lang=es"},{"text":"Contenido del curso","children":[{"text":"Tema 1 - Introducción a la programación concurrente","link":"/es/unit1/"},{"text":"Tema 2 - Programación de procesos en Java","link":"/es/unit2/"}]}],"sidebar":{"/es/":[{"text":"SAD > Inicio","link":"/es/README.md","children":[]}],"/es/unit1/":[{"isGroup":true,"text":"Tema 1 - Introducción a la programación concurrente","children":["index.md","process.md","concurrency.md","operatingsystem.md"]}],"/es/unit2/":[{"isGroup":true,"text":"Tema 2 - Programación de procesos en Java","children":["index.md","runtime.md","processbuilder.md","iostreams.md","curl_annex.md"]}]}},"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"navbar":[],"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"auto","editLinkText":"Edit this page","lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),yp=fe(bp),Ui=()=>yp,Hi=Symbol(""),wp=()=>{const e=Ie(Hi);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Sp=(e,r)=>{const{locales:n,...t}=e;return{...t,...n==null?void 0:n[r]}},_p=Sr({enhance({app:e}){const r=Ui(),n=e._context.provides[Mo],t=N(()=>Sp(r.value,n.value));e.provide(Hi,t),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return r.value}},$themeLocale:{get(){return t.value}}})}}),Pp=ue({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(r,n)=>(D(),K("span",{class:Ve(["badge",e.type]),style:Bn({verticalAlign:e.vertical})},[Se(r.$slots,"default",{},()=>[Nr(Ae(e.text),1)])],6))}}),Ee=(e,r)=>{const n=e.__vccOpts||e;for(const[t,o]of r)n[t]=o;return n},xp=Ee(Pp,[["__file","Badge.vue"]]),Ep=ue({name:"CodeGroup",slots:Object,setup(e,{slots:r}){const n=fe(-1),t=fe([]),o=(c=n.value)=>{c<t.value.length-1?n.value=c+1:n.value=0,t.value[n.value].focus()},s=(c=n.value)=>{c>0?n.value=c-1:n.value=t.value.length-1,t.value[n.value].focus()},a=(c,i)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=i):c.key==="ArrowRight"?(c.preventDefault(),o(i)):c.key==="ArrowLeft"&&(c.preventDefault(),s(i))};return()=>{var i;const c=(((i=r.default)==null?void 0:i.call(r))||[]).filter(l=>l.type.name==="CodeGroupItem").map(l=>(l.props===null&&(l.props={}),l));return c.length===0?null:(n.value<0||n.value>c.length-1?(n.value=c.findIndex(l=>l.props.active===""||l.props.active===!0),n.value===-1&&(n.value=0)):c.forEach((l,u)=>{l.props.active=u===n.value}),ce("div",{class:"code-group"},[ce("div",{class:"code-group__nav"},ce("ul",{class:"code-group__ul"},c.map((l,u)=>{const d=u===n.value;return ce("li",{class:"code-group__li"},ce("button",{ref:m=>{m&&(t.value[u]=m)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":d},ariaPressed:d,ariaExpanded:d,onClick:()=>n.value=u,onKeydown:m=>a(m,u)},l.props.title))}))),c]))}}}),Tp=["aria-selected"],kp=ue({name:"CodeGroupItem"}),Cp=ue({...kp,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(r,n)=>(D(),K("div",{class:Ve(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[Se(r.$slots,"default")],10,Tp))}}),Ip=Ee(Cp,[["__file","CodeGroupItem.vue"]]);var jp=Object.defineProperty,Lp=Object.defineProperties,Ap=Object.getOwnPropertyDescriptors,oa=Object.getOwnPropertySymbols,qp=Object.prototype.hasOwnProperty,Rp=Object.prototype.propertyIsEnumerable,sa=(e,r,n)=>r in e?jp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Op=(e,r)=>{for(var n in r||(r={}))qp.call(r,n)&&sa(e,n,r[n]);if(oa)for(var n of oa(r))Rp.call(r,n)&&sa(e,n,r[n]);return e},zp=(e,r)=>Lp(e,Ap(r));function aa(e,r){var n;const t=Io();return Xa(()=>{t.value=e()},zp(Op({},r),{flush:(n=r==null?void 0:r.flush)!=null?n:"sync"})),bn(t)}function $o(e){return ka()?(_c(e),!0):!1}function Mr(e){return typeof e=="function"?e():Q(e)}const Vo=typeof window<"u",Np=()=>{};function Mp(e,r){function n(...t){return new Promise((o,s)=>{Promise.resolve(e(()=>r.apply(this,t),{fn:r,thisArg:this,args:t})).then(o).catch(s)})}return n}const Wi=e=>e();function Fp(e=Wi){const r=fe(!0);function n(){r.value=!1}function t(){r.value=!0}const o=(...s)=>{r.value&&e(...s)};return{isActive:bn(r),pause:n,resume:t,eventFilter:o}}function Dp(e,r,n={}){const{immediate:t=!0}=n,o=fe(!1);let s=null;function a(){s&&(clearTimeout(s),s=null)}function c(){o.value=!1,a()}function i(...l){a(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...l)},Mr(r))}return t&&(o.value=!0,Vo&&i()),$o(c),{isPending:bn(o),start:i,stop:c}}function Bp(e=!1,r={}){const{truthyValue:n=!0,falsyValue:t=!1}=r,o=Re(e),s=fe(e);function a(c){if(arguments.length)return s.value=c,s.value;{const i=Mr(n);return s.value=s.value===i?Mr(t):i,s.value}}return o?a:[s,a]}var ia=Object.getOwnPropertySymbols,Up=Object.prototype.hasOwnProperty,Hp=Object.prototype.propertyIsEnumerable,Wp=(e,r)=>{var n={};for(var t in e)Up.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&ia)for(var t of ia(e))r.indexOf(t)<0&&Hp.call(e,t)&&(n[t]=e[t]);return n};function $p(e,r,n={}){const t=n,{eventFilter:o=Wi}=t,s=Wp(t,["eventFilter"]);return sr(e,Mp(o,r),s)}var Vp=Object.defineProperty,Jp=Object.defineProperties,Gp=Object.getOwnPropertyDescriptors,_t=Object.getOwnPropertySymbols,$i=Object.prototype.hasOwnProperty,Vi=Object.prototype.propertyIsEnumerable,ca=(e,r,n)=>r in e?Vp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Yp=(e,r)=>{for(var n in r||(r={}))$i.call(r,n)&&ca(e,n,r[n]);if(_t)for(var n of _t(r))Vi.call(r,n)&&ca(e,n,r[n]);return e},Zp=(e,r)=>Jp(e,Gp(r)),Xp=(e,r)=>{var n={};for(var t in e)$i.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&_t)for(var t of _t(e))r.indexOf(t)<0&&Vi.call(e,t)&&(n[t]=e[t]);return n};function Kp(e,r,n={}){const t=n,{eventFilter:o}=t,s=Xp(t,["eventFilter"]),{eventFilter:a,pause:c,resume:i,isActive:l}=Fp(o);return{stop:$p(e,r,Zp(Yp({},s),{eventFilter:a})),pause:c,resume:i,isActive:l}}function Qp(e){var r;const n=Mr(e);return(r=n==null?void 0:n.$el)!=null?r:n}const Pt=Vo?window:void 0,em=Vo?window.navigator:void 0;function xt(...e){let r,n,t,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,t,o]=e,r=Pt):[r,n,t,o]=e,!r)return Np;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},c=(u,d,m,f)=>(u.addEventListener(d,m,f),()=>u.removeEventListener(d,m,f)),i=sr(()=>[Qp(r),Mr(o)],([u,d])=>{a(),u&&s.push(...n.flatMap(m=>t.map(f=>c(u,m,f,d))))},{immediate:!0,flush:"post"}),l=()=>{i(),a()};return $o(l),l}function rm(){const e=fe(!1);return Oo()&&He(()=>{e.value=!0}),e}function Ji(e){const r=rm();return N(()=>(r.value,!!e()))}function nm(e,r={}){const{window:n=Pt}=r,t=Ji(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=fe(!1),a=l=>{s.value=l.matches},c=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",a):o.removeListener(a))},i=Xa(()=>{t.value&&(c(),o=n.matchMedia(Mr(e)),"addEventListener"in o?o.addEventListener("change",a):o.addListener(a),s.value=o.matches)});return $o(()=>{i(),c(),o=void 0}),s}function tm(e={}){const{navigator:r=em,read:n=!1,source:t,copiedDuring:o=1500,legacy:s=!1}=e,a=Ji(()=>r&&"clipboard"in r),c=N(()=>a.value||s),i=fe(""),l=fe(!1),u=Dp(()=>l.value=!1,o);function d(){a.value?r.clipboard.readText().then(S=>{i.value=S}):i.value=w()}c.value&&n&&xt(["copy","cut"],d);async function m(S=Mr(t)){c.value&&S!=null&&(a.value?await r.clipboard.writeText(S):f(S),i.value=S,l.value=!0,u.start())}function f(S){const P=document.createElement("textarea");P.value=S??"",P.style.position="absolute",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),P.remove()}function w(){var S,P,v;return(v=(P=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:P.toString())!=null?v:""}return{isSupported:c,text:i,copied:l,copy:m}}const ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},st="__vueuse_ssr_handlers__",om=sm();function sm(){return st in ot||(ot[st]=ot[st]||{}),ot[st]}function am(e,r){return om[e]||r}function im(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var cm=Object.defineProperty,la=Object.getOwnPropertySymbols,lm=Object.prototype.hasOwnProperty,um=Object.prototype.propertyIsEnumerable,ua=(e,r,n)=>r in e?cm(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,da=(e,r)=>{for(var n in r||(r={}))lm.call(r,n)&&ua(e,n,r[n]);if(la)for(var n of la(r))um.call(r,n)&&ua(e,n,r[n]);return e};const dm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},pa="vueuse-storage";function pm(e,r,n,t={}){var o;const{flush:s="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:i=!0,mergeDefaults:l=!1,shallow:u,window:d=Pt,eventFilter:m,onError:f=g=>{console.error(g)}}=t,w=(u?Io:fe)(r);if(!n)try{n=am("getDefaultStorage",()=>{var g;return(g=Pt)==null?void 0:g.localStorage})()}catch(g){f(g)}if(!n)return w;const S=Mr(r),P=im(S),v=(o=t.serializer)!=null?o:dm[P],{pause:y,resume:I}=Kp(w,()=>C(w.value),{flush:s,deep:a,eventFilter:m});return d&&c&&(xt(d,"storage",R),xt(d,pa,X)),R(),w;function C(g){try{if(g==null)n.removeItem(e);else{const U=v.write(g),M=n.getItem(e);M!==U&&(n.setItem(e,U),d&&d.dispatchEvent(new CustomEvent(pa,{detail:{key:e,oldValue:M,newValue:U,storageArea:n}})))}}catch(U){f(U)}}function W(g){const U=g?g.newValue:n.getItem(e);if(U==null)return i&&S!==null&&n.setItem(e,v.write(S)),S;if(!g&&l){const M=v.read(U);return typeof l=="function"?l(M,S):P==="object"&&!Array.isArray(M)?da(da({},S),M):M}else return typeof U!="string"?U:v.read(U)}function X(g){R(g.detail)}function R(g){if(!(g&&g.storageArea!==n)){if(g&&g.key==null){w.value=S;return}if(!(g&&g.key!==e)){y();try{w.value=W(g)}catch(U){f(U)}finally{g?Wn(I):I()}}}}}function mm(e){return nm("(prefers-color-scheme: dark)",e)}const hm=()=>Ui(),Ue=()=>wp(),Gi=Symbol(""),Jo=()=>{const e=Ie(Gi);if(!e)throw new Error("useDarkMode() is called without provider.");return e},fm=()=>{const e=Ue(),r=mm(),n=pm("vuepress-color-scheme",e.value.colorMode),t=N({get(){return e.value.colorModeSwitch?n.value==="auto"?r.value:n.value==="dark":e.value.colorMode==="dark"},set(o){o===r.value?n.value="auto":n.value=o?"dark":"light"}});Gr(Gi,t),gm(t)},gm=e=>{const r=(n=e.value)=>{const t=window==null?void 0:window.document.querySelector("html");t==null||t.classList.toggle("dark",n)};He(()=>{sr(e,r,{immediate:!0})}),qt(()=>r())},Yi=(...e)=>{const n=Xr().resolve(...e),t=n.matched[n.matched.length-1];if(!(t!=null&&t.redirect))return n;const{redirect:o}=t,s=se(o)?o(n):o,a=ge(s)?{path:s}:s;return Yi({hash:n.hash,query:n.query,params:n.params,...a})},Go=e=>{const r=Yi(encodeURI(e));return{text:r.meta.title||e,link:r.name==="404"?e:r.fullPath}};let Kt=null,xn=null;const vm={wait:()=>Kt,pending:()=>{Kt=new Promise(e=>xn=e)},resolve:()=>{xn==null||xn(),Kt=null,xn=null}},Zi=()=>vm,Xi=Symbol("sidebarItems"),Yo=()=>{const e=Ie(Xi);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},bm=()=>{const e=Ue(),r=gr(),n=N(()=>ym(r.value,e.value));Gr(Xi,n)},ym=(e,r)=>{const n=e.sidebar??r.sidebar??"auto",t=e.sidebarDepth??r.sidebarDepth??2;return e.home||n===!1?[]:n==="auto"?Sm(t):Z(n)?Ki(n,t):No(n)?_m(n,t):[]},wm=(e,r)=>({text:e.title,link:e.link,children:Zo(e.children,r)}),Zo=(e,r)=>r>0?e.map(n=>wm(n,r-1)):[],Sm=e=>{const r=qr();return[{text:r.value.title,children:Zo(r.value.headers,e)}]},Ki=(e,r)=>{const n=Kr(),t=qr(),o=s=>{var c;let a;if(ge(s)?a=Go(s):a=s,a.children)return{...a,children:a.children.map(i=>o(i))};if(a.link===n.path){const i=((c=t.value.headers[0])==null?void 0:c.level)===1?t.value.headers[0].children:t.value.headers;return{...a,children:Zo(i,r)}}return a};return e.map(s=>o(s))},_m=(e,r)=>{const n=Kr(),t=wi(e,n.path),o=e[t]??[];return Ki(o,r)},Pm="719px",xm={mobile:Pm};var Fn;(function(e){e.MOBILE="mobile"})(Fn||(Fn={}));var wa;const Em={[Fn.MOBILE]:Number.parseInt((wa=xm.mobile)==null?void 0:wa.replace("px",""),10)},Qi=(e,r)=>{const n=Em[e];Number.isInteger(n)&&He(()=>{r(n),window.addEventListener("resize",()=>r(n),!1),window.addEventListener("orientationchange",()=>r(n),!1)})},Tm={},km={class:"theme-default-content"};function Cm(e,r){const n=yr("Content");return D(),K("div",km,[re(n)])}const Im=Ee(Tm,[["render",Cm],["__file","HomeContent.vue"]]),jm={key:0,class:"features"},Lm=ue({__name:"HomeFeatures",setup(e){const r=gr(),n=N(()=>Z(r.value.features)?r.value.features:[]);return(t,o)=>n.value.length?(D(),K("div",jm,[(D(!0),K(_e,null,Or(n.value,s=>(D(),K("div",{key:s.title,class:"feature"},[me("h2",null,Ae(s.title),1),me("p",null,Ae(s.details),1)]))),128))])):Te("v-if",!0)}}),Am=Ee(Lm,[["__file","HomeFeatures.vue"]]),qm=["innerHTML"],Rm=["textContent"],Om=ue({__name:"HomeFooter",setup(e){const r=gr(),n=N(()=>r.value.footer),t=N(()=>r.value.footerHtml);return(o,s)=>n.value?(D(),K(_e,{key:0},[Te(" eslint-disable-next-line vue/no-v-html "),t.value?(D(),K("div",{key:0,class:"footer",innerHTML:n.value},null,8,qm)):(D(),K("div",{key:1,class:"footer",textContent:Ae(n.value)},null,8,Rm))],64)):Te("v-if",!0)}}),zm=Ee(Om,[["__file","HomeFooter.vue"]]),Nm=["href","rel","target","aria-label"],Mm=ue({inheritAttrs:!1}),Fm=ue({...Mm,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(e){const r=e,n=Kr(),t=ki(),{item:o}=It(r),s=N(()=>Gn(o.value.link)),a=N(()=>Bu(o.value.link)||Uu(o.value.link)),c=N(()=>{if(!a.value){if(o.value.target)return o.value.target;if(s.value)return"_blank"}}),i=N(()=>c.value==="_blank"),l=N(()=>!s.value&&!a.value&&!i.value),u=N(()=>{if(!a.value){if(o.value.rel)return o.value.rel;if(i.value)return"noopener noreferrer"}}),d=N(()=>o.value.ariaLabel||o.value.text),m=N(()=>{const S=Object.keys(t.value.locales);return S.length?!S.some(P=>P===o.value.link):o.value.link!=="/"}),f=N(()=>m.value?n.path.startsWith(o.value.link):!1),w=N(()=>l.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(n.path):f.value:!1);return(S,P)=>{const v=yr("RouterLink"),y=yr("AutoLinkExternalIcon");return l.value?(D(),Ce(v,po({key:0,class:{"router-link-active":w.value},to:Q(o).link,"aria-label":d.value},S.$attrs),{default:ze(()=>[Se(S.$slots,"before"),Nr(" "+Ae(Q(o).text)+" ",1),Se(S.$slots,"after")]),_:3},16,["class","to","aria-label"])):(D(),K("a",po({key:1,class:"external-link",href:Q(o).link,rel:u.value,target:c.value,"aria-label":d.value},S.$attrs),[Se(S.$slots,"before"),Nr(" "+Ae(Q(o).text)+" ",1),i.value?(D(),Ce(y,{key:0})):Te("v-if",!0),Se(S.$slots,"after")],16,Nm))}}}),vr=Ee(Fm,[["__file","AutoLink.vue"]]),Dm={class:"hero"},Bm={key:0,id:"main-title"},Um={key:1,class:"description"},Hm={key:2,class:"actions"},Wm=ue({__name:"HomeHero",setup(e){const r=gr(),n=Fo(),t=Jo(),o=N(()=>t.value&&r.value.heroImageDark!==void 0?r.value.heroImageDark:r.value.heroImage),s=N(()=>r.value.heroAlt||c.value||"hero"),a=N(()=>r.value.heroHeight||280),c=N(()=>r.value.heroText===null?null:r.value.heroText||n.value.title||"Hello"),i=N(()=>r.value.tagline===null?null:r.value.tagline||n.value.description||"Welcome to your VuePress site"),l=N(()=>Z(r.value.actions)?r.value.actions.map(({text:d,link:m,type:f="primary"})=>({text:d,link:m,type:f})):[]),u=()=>{if(!o.value)return null;const d=ce("img",{src:Bo(o.value),alt:s.value,height:a.value});return r.value.heroImageDark===void 0?d:ce(Do,()=>d)};return(d,m)=>(D(),K("header",Dm,[re(u),c.value?(D(),K("h1",Bm,Ae(c.value),1)):Te("v-if",!0),i.value?(D(),K("p",Um,Ae(i.value),1)):Te("v-if",!0),l.value.length?(D(),K("p",Hm,[(D(!0),K(_e,null,Or(l.value,f=>(D(),Ce(vr,{key:f.text,class:Ve(["action-button",[f.type]]),item:f},null,8,["class","item"]))),128))])):Te("v-if",!0)]))}}),$m=Ee(Wm,[["__file","HomeHero.vue"]]),Vm={class:"home"},Jm=ue({__name:"Home",setup(e){return(r,n)=>(D(),K("main",Vm,[re($m),re(Am),re(Im),re(zm)]))}}),Gm=Ee(Jm,[["__file","Home.vue"]]),Ym=ue({__name:"NavbarBrand",setup(e){const r=yn(),n=Fo(),t=Ue(),o=Jo(),s=N(()=>t.value.home||r.value),a=N(()=>n.value.title),c=N(()=>o.value&&t.value.logoDark!==void 0?t.value.logoDark:t.value.logo),i=()=>{if(!c.value)return null;const l=ce("img",{class:"logo",src:Bo(c.value),alt:a.value});return t.value.logoDark===void 0?l:ce(Do,()=>l)};return(l,u)=>{const d=yr("RouterLink");return D(),Ce(d,{to:s.value},{default:ze(()=>[re(i),a.value?(D(),K("span",{key:0,class:Ve(["site-name",{"can-hide":c.value}])},Ae(a.value),3)):Te("v-if",!0)]),_:1},8,["to"])}}}),Zm=Ee(Ym,[["__file","NavbarBrand.vue"]]),Xm=ue({__name:"DropdownTransition",setup(e){const r=t=>{t.style.height=t.scrollHeight+"px"},n=t=>{t.style.height=""};return(t,o)=>(D(),Ce(Jn,{name:"dropdown",onEnter:r,onAfterEnter:n,onBeforeLeave:r},{default:ze(()=>[Se(t.$slots,"default")]),_:3}))}}),ec=Ee(Xm,[["__file","DropdownTransition.vue"]]),Km=["aria-label"],Qm={class:"title"},eh=me("span",{class:"arrow down"},null,-1),rh=["aria-label"],nh={class:"title"},th={class:"navbar-dropdown"},oh={class:"navbar-dropdown-subtitle"},sh={key:1},ah={class:"navbar-dropdown-subitem-wrapper"},ih=ue({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const r=e,{item:n}=It(r),t=N(()=>n.value.ariaLabel||n.value.text),o=fe(!1),s=Kr();sr(()=>s.path,()=>{o.value=!1});const a=i=>{i.detail===0?o.value=!o.value:o.value=!1},c=(i,l)=>l[l.length-1]===i;return(i,l)=>(D(),K("div",{class:Ve(["navbar-dropdown-wrapper",{open:o.value}])},[me("button",{class:"navbar-dropdown-title",type:"button","aria-label":t.value,onClick:a},[me("span",Qm,Ae(Q(n).text),1),eh],8,Km),me("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":t.value,onClick:l[0]||(l[0]=u=>o.value=!o.value)},[me("span",nh,Ae(Q(n).text),1),me("span",{class:Ve(["arrow",o.value?"down":"right"])},null,2)],8,rh),re(ec,null,{default:ze(()=>[ft(me("ul",th,[(D(!0),K(_e,null,Or(Q(n).children,u=>(D(),K("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(D(),K(_e,{key:0},[me("h4",oh,[u.link?(D(),Ce(vr,{key:0,item:u,onFocusout:d=>c(u,Q(n).children)&&u.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(D(),K("span",sh,Ae(u.text),1))]),me("ul",ah,[(D(!0),K(_e,null,Or(u.children,d=>(D(),K("li",{key:d.link,class:"navbar-dropdown-subitem"},[re(vr,{item:d,onFocusout:m=>c(d,u.children)&&c(u,Q(n).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(D(),Ce(vr,{key:1,item:u,onFocusout:d=>c(u,Q(n).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[wt,o.value]])]),_:1})],2))}}),ch=Ee(ih,[["__file","NavbarDropdown.vue"]]),ma=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),lh=(e,r)=>{if(r.hash===e)return!0;const n=ma(r.path),t=ma(e);return n===t},rc=(e,r)=>e.link&&lh(e.link,r)?!0:e.children?e.children.some(n=>rc(n,r)):!1,nc=e=>!Gn(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,uh={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},dh=({docsRepo:e,editLinkPattern:r})=>{if(r)return r;const n=nc(e);return n!==null?uh[n]:null},ph=({docsRepo:e,docsBranch:r,docsDir:n,filePathRelative:t,editLinkPattern:o})=>{if(!t)return null;const s=dh({docsRepo:e,editLinkPattern:o});return s?s.replace(/:repo/,Gn(e)?e:`https://github.com/${e}`).replace(/:branch/,r).replace(/:path/,yi(`${bi(n)}/${t}`)):null},mh={key:0,class:"navbar-items"},hh=ue({__name:"NavbarItems",setup(e){const r=()=>{const u=Xr(),d=yn(),m=ki(),f=Fo(),w=hm(),S=Ue();return N(()=>{const P=Object.keys(m.value.locales);if(P.length<2)return[];const v=u.currentRoute.value.path,y=u.currentRoute.value.fullPath;return[{text:`${S.value.selectLanguageText}`,ariaLabel:`${S.value.selectLanguageAriaLabel??S.value.selectLanguageText}`,children:P.map(C=>{var M,J;const W=((M=m.value.locales)==null?void 0:M[C])??{},X=((J=w.value.locales)==null?void 0:J[C])??{},R=`${W.lang}`,g=X.selectLanguageName??R;let U;if(R===f.value.lang)U=y;else{const T=v.replace(d.value,C);u.getRoutes().some(A=>A.path===T)?U=y.replace(v,T):U=X.home??C}return{text:g,link:U}})}]})},n=()=>{const u=Ue(),d=N(()=>u.value.repo),m=N(()=>d.value?nc(d.value):null),f=N(()=>d.value&&!Gn(d.value)?`https://github.com/${d.value}`:d.value),w=N(()=>f.value?u.value.repoLabel?u.value.repoLabel:m.value===null?"Source":m.value:null);return N(()=>!f.value||!w.value?[]:[{text:w.value,link:f.value}])},t=u=>ge(u)?Go(u):u.children?{...u,children:u.children.map(t)}:u,o=()=>{const u=Ue();return N(()=>(u.value.navbar||[]).map(t))},s=fe(!1),a=o(),c=r(),i=n(),l=N(()=>[...a.value,...c.value,...i.value]);return Qi(Fn.MOBILE,u=>{window.innerWidth<u?s.value=!0:s.value=!1}),(u,d)=>l.value.length?(D(),K("nav",mh,[(D(!0),K(_e,null,Or(l.value,m=>(D(),K("div",{key:m.text,class:"navbar-item"},[m.children?(D(),Ce(ch,{key:0,item:m,class:Ve(s.value?"mobile":"")},null,8,["item","class"])):(D(),Ce(vr,{key:1,item:m},null,8,["item"]))]))),128))])):Te("v-if",!0)}}),tc=Ee(hh,[["__file","NavbarItems.vue"]]),fh=["title"],gh={class:"icon",focusable:"false",viewBox:"0 0 32 32"},vh=Zl('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),bh=[vh],yh={class:"icon",focusable:"false",viewBox:"0 0 32 32"},wh=me("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Sh=[wh],_h=ue({__name:"ToggleColorModeButton",setup(e){const r=Ue(),n=Jo(),t=()=>{n.value=!n.value};return(o,s)=>(D(),K("button",{class:"toggle-color-mode-button",title:Q(r).toggleColorMode,onClick:t},[ft((D(),K("svg",gh,bh,512)),[[wt,!Q(n)]]),ft((D(),K("svg",yh,Sh,512)),[[wt,Q(n)]])],8,fh))}}),Ph=Ee(_h,[["__file","ToggleColorModeButton.vue"]]),xh=["title"],Eh=me("div",{class:"icon","aria-hidden":"true"},[me("span"),me("span"),me("span")],-1),Th=[Eh],kh=ue({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const r=Ue();return(n,t)=>(D(),K("div",{class:"toggle-sidebar-button",title:Q(r).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=o=>n.$emit("toggle"))},Th,8,xh))}}),Ch=Ee(kh,[["__file","ToggleSidebarButton.vue"]]),Ih=ue({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const r=Ue(),n=fe(null),t=fe(null),o=fe(0),s=N(()=>o.value?{maxWidth:o.value+"px"}:{});Qi(Fn.MOBILE,c=>{var l;const i=a(n.value,"paddingLeft")+a(n.value,"paddingRight");window.innerWidth<c?o.value=0:o.value=n.value.offsetWidth-i-(((l=t.value)==null?void 0:l.offsetWidth)||0)});function a(c,i){var d,m,f;const l=(f=(m=(d=c==null?void 0:c.ownerDocument)==null?void 0:d.defaultView)==null?void 0:m.getComputedStyle(c,null))==null?void 0:f[i],u=Number.parseInt(l,10);return Number.isNaN(u)?0:u}return(c,i)=>{const l=yr("NavbarSearch");return D(),K("header",{ref_key:"navbar",ref:n,class:"navbar"},[re(Ch,{onToggle:i[0]||(i[0]=u=>c.$emit("toggle-sidebar"))}),me("span",{ref_key:"navbarBrand",ref:t},[re(Zm)],512),me("div",{class:"navbar-items-wrapper",style:Bn(s.value)},[Se(c.$slots,"before"),re(tc,{class:"can-hide"}),Se(c.$slots,"after"),Q(r).colorModeSwitch?(D(),Ce(Ph,{key:0})):Te("v-if",!0),re(l)],4)],512)}}}),jh=Ee(Ih,[["__file","Navbar.vue"]]),Lh={class:"page-meta"},Ah={key:0,class:"meta-item edit-link"},qh={key:1,class:"meta-item last-updated"},Rh={class:"meta-item-label"},Oh={class:"meta-item-info"},zh={key:2,class:"meta-item contributors"},Nh={class:"meta-item-label"},Mh={class:"meta-item-info"},Fh=["title"],Dh=ue({__name:"PageMeta",setup(e){const r=()=>{const i=Ue(),l=qr(),u=gr();return N(()=>{if(!(u.value.editLink??i.value.editLink??!0))return null;const{repo:m,docsRepo:f=m,docsBranch:w="main",docsDir:S="",editLinkText:P}=i.value;if(!f)return null;const v=ph({docsRepo:f,docsBranch:w,docsDir:S,filePathRelative:l.value.filePathRelative,editLinkPattern:u.value.editLinkPattern??i.value.editLinkPattern});return v?{text:P??"Edit this page",link:v}:null})},n=()=>{const i=Ue(),l=qr(),u=gr();return N(()=>{var f,w;return!(u.value.lastUpdated??i.value.lastUpdated??!0)||!((f=l.value.git)!=null&&f.updatedTime)?null:new Date((w=l.value.git)==null?void 0:w.updatedTime).toLocaleString()})},t=()=>{const i=Ue(),l=qr(),u=gr();return N(()=>{var m;return u.value.contributors??i.value.contributors??!0?((m=l.value.git)==null?void 0:m.contributors)??null:null})},o=Ue(),s=r(),a=n(),c=t();return(i,l)=>{const u=yr("ClientOnly");return D(),K("footer",Lh,[Q(s)?(D(),K("div",Ah,[re(vr,{class:"meta-item-label",item:Q(s)},null,8,["item"])])):Te("v-if",!0),Q(a)?(D(),K("div",qh,[me("span",Rh,Ae(Q(o).lastUpdatedText)+": ",1),re(u,null,{default:ze(()=>[me("span",Oh,Ae(Q(a)),1)]),_:1})])):Te("v-if",!0),Q(c)&&Q(c).length?(D(),K("div",zh,[me("span",Nh,Ae(Q(o).contributorsText)+": ",1),me("span",Mh,[(D(!0),K(_e,null,Or(Q(c),(d,m)=>(D(),K(_e,{key:m},[me("span",{class:"contributor",title:`email: ${d.email}`},Ae(d.name),9,Fh),m!==Q(c).length-1?(D(),K(_e,{key:0},[Nr(", ")],64)):Te("v-if",!0)],64))),128))])])):Te("v-if",!0)])}}}),Bh=Ee(Dh,[["__file","PageMeta.vue"]]),Uh={key:0,class:"page-nav"},Hh={class:"inner"},Wh={key:0,class:"prev"},$h={key:1,class:"next"},Vh=ue({__name:"PageNav",setup(e){const r=i=>i===!1?null:ge(i)?Go(i):No(i)?i:!1,n=(i,l,u)=>{const d=i.findIndex(m=>m.link===l);if(d!==-1){const m=i[d+u];return m!=null&&m.link?m:null}for(const m of i)if(m.children){const f=n(m.children,l,u);if(f)return f}return null},t=gr(),o=Yo(),s=Kr(),a=N(()=>{const i=r(t.value.prev);return i!==!1?i:n(o.value,s.path,-1)}),c=N(()=>{const i=r(t.value.next);return i!==!1?i:n(o.value,s.path,1)});return(i,l)=>a.value||c.value?(D(),K("nav",Uh,[me("p",Hh,[a.value?(D(),K("span",Wh,[re(vr,{item:a.value},null,8,["item"])])):Te("v-if",!0),c.value?(D(),K("span",$h,[re(vr,{item:c.value},null,8,["item"])])):Te("v-if",!0)])])):Te("v-if",!0)}}),Jh=Ee(Vh,[["__file","PageNav.vue"]]),Gh={class:"page"},Yh={class:"theme-default-content"},Zh=ue({__name:"Page",setup(e){return(r,n)=>{const t=yr("Content");return D(),K("main",Gh,[Se(r.$slots,"top"),me("div",Yh,[Se(r.$slots,"content-top"),re(t),Se(r.$slots,"content-bottom")]),re(Bh),re(Jh),Se(r.$slots,"bottom")])}}}),Xh=Ee(Zh,[["__file","Page.vue"]]),Kh=["onKeydown"],Qh={class:"sidebar-item-children"},ef=ue({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const r=e,{item:n,depth:t}=It(r),o=Kr(),s=Xr(),a=N(()=>rc(n.value,o)),c=N(()=>({"sidebar-item":!0,"sidebar-heading":t.value===0,active:a.value,collapsible:n.value.collapsible})),i=N(()=>n.value.collapsible?a.value:!0),[l,u]=Bp(i.value),d=f=>{n.value.collapsible&&(f.preventDefault(),u())},m=s.afterEach(f=>{Wn(()=>{l.value=i.value})});return Vn(()=>{m()}),(f,w)=>{var P;const S=yr("SidebarItem",!0);return D(),K("li",null,[Q(n).link?(D(),Ce(vr,{key:0,class:Ve(c.value),item:Q(n)},null,8,["class","item"])):(D(),K("p",{key:1,tabindex:"0",class:Ve(c.value),onClick:d,onKeydown:Au(d,["enter"])},[Nr(Ae(Q(n).text)+" ",1),Q(n).collapsible?(D(),K("span",{key:0,class:Ve(["arrow",Q(l)?"down":"right"])},null,2)):Te("v-if",!0)],42,Kh)),(P=Q(n).children)!=null&&P.length?(D(),Ce(ec,{key:2},{default:ze(()=>[ft(me("ul",Qh,[(D(!0),K(_e,null,Or(Q(n).children,v=>(D(),Ce(S,{key:`${Q(t)}${v.text}${v.link}`,item:v,depth:Q(t)+1},null,8,["item","depth"]))),128))],512),[[wt,Q(l)]])]),_:1})):Te("v-if",!0)])}}}),rf=Ee(ef,[["__file","SidebarItem.vue"]]),nf={key:0,class:"sidebar-items"},tf=ue({__name:"SidebarItems",setup(e){const r=Kr(),n=Yo();return He(()=>{sr(()=>r.hash,t=>{const o=document.querySelector(".sidebar");if(!o)return;const s=document.querySelector(`.sidebar a.sidebar-item[href="${r.path}${t}"]`);if(!s)return;const{top:a,height:c}=o.getBoundingClientRect(),{top:i,height:l}=s.getBoundingClientRect();i<a?s.scrollIntoView(!0):i+l>a+c&&s.scrollIntoView(!1)})}),(t,o)=>Q(n).length?(D(),K("ul",nf,[(D(!0),K(_e,null,Or(Q(n),s=>(D(),Ce(rf,{key:`${s.text}${s.link}`,item:s},null,8,["item"]))),128))])):Te("v-if",!0)}}),of=Ee(tf,[["__file","SidebarItems.vue"]]),sf={class:"sidebar"},af=ue({__name:"Sidebar",setup(e){return(r,n)=>(D(),K("aside",sf,[re(tc),Se(r.$slots,"top"),re(of),Se(r.$slots,"bottom")]))}}),cf=Ee(af,[["__file","Sidebar.vue"]]),lf=ue({__name:"Layout",setup(e){const r=qr(),n=gr(),t=Ue(),o=N(()=>n.value.navbar!==!1&&t.value.navbar!==!1),s=Yo(),a=fe(!1),c=P=>{a.value=typeof P=="boolean"?P:!a.value},i={x:0,y:0},l=P=>{i.x=P.changedTouches[0].clientX,i.y=P.changedTouches[0].clientY},u=P=>{const v=P.changedTouches[0].clientX-i.x,y=P.changedTouches[0].clientY-i.y;Math.abs(v)>Math.abs(y)&&Math.abs(v)>40&&(v>0&&i.x<=80?c(!0):c(!1))},d=N(()=>[{"no-navbar":!o.value,"no-sidebar":!s.value.length,"sidebar-open":a.value},n.value.pageClass]);let m;He(()=>{m=Xr().afterEach(()=>{c(!1)})}),qt(()=>{m()});const f=Zi(),w=f.resolve,S=f.pending;return(P,v)=>(D(),K("div",{class:Ve(["theme-container",d.value]),onTouchstart:l,onTouchend:u},[Se(P.$slots,"navbar",{},()=>[o.value?(D(),Ce(jh,{key:0,onToggleSidebar:c},{before:ze(()=>[Se(P.$slots,"navbar-before")]),after:ze(()=>[Se(P.$slots,"navbar-after")]),_:3})):Te("v-if",!0)]),me("div",{class:"sidebar-mask",onClick:v[0]||(v[0]=y=>c(!1))}),Se(P.$slots,"sidebar",{},()=>[re(cf,null,{top:ze(()=>[Se(P.$slots,"sidebar-top")]),bottom:ze(()=>[Se(P.$slots,"sidebar-bottom")]),_:3})]),Se(P.$slots,"page",{},()=>[Q(n).home?(D(),Ce(Gm,{key:0})):(D(),Ce(Jn,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:Q(w),onBeforeLeave:Q(S)},{default:ze(()=>[(D(),Ce(Xh,{key:Q(r).path},{top:ze(()=>[Se(P.$slots,"page-top")]),"content-top":ze(()=>[Se(P.$slots,"page-content-top")]),"content-bottom":ze(()=>[Se(P.$slots,"page-content-bottom")]),bottom:ze(()=>[Se(P.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),uf=Ee(lf,[["__file","Layout.vue"]]),df={class:"theme-container"},pf={class:"page"},mf={class:"theme-default-content"},hf=me("h1",null,"404",-1),ff=ue({__name:"NotFound",setup(e){const r=yn(),n=Ue(),t=n.value.notFound??["Not Found"],o=()=>t[Math.floor(Math.random()*t.length)],s=n.value.home??r.value,a=n.value.backToHome??"Back to home";return(c,i)=>{const l=yr("RouterLink");return D(),K("div",df,[me("main",pf,[me("div",mf,[hf,me("blockquote",null,Ae(o()),1),re(l,{to:Q(s)},{default:ze(()=>[Nr(Ae(Q(a)),1)]),_:1},8,["to"])])])])}}}),gf=Ee(ff,[["__file","NotFound.vue"]]);const vf=Sr({enhance({app:e,router:r}){e.component("Badge",xp),e.component("CodeGroup",Ep),e.component("CodeGroupItem",Ip),e.component("AutoLinkExternalIcon",()=>{const t=e.component("ExternalLinkIcon");return t?ce(t):null}),e.component("NavbarSearch",()=>{const t=e.component("Docsearch")||e.component("SearchBox");return t?ce(t):null});const n=r.options.scrollBehavior;r.options.scrollBehavior=async(...t)=>(await Zi().wait(),n(...t))},setup(){fm(),bm()},layouts:{Layout:uf,NotFound:gf}}),bf={enhance:({app:e})=>{e.component("CCLicense-component",we(()=>ee(()=>import("./CCLicense-component-5abec0d4.js"),[]))),e.component("DocumentCover-component",we(()=>ee(()=>import("./DocumentCover-component-0a14620e.js"),[]))),e.component("DownloadPDF-component",we(()=>ee(()=>import("./DownloadPDF-component-0c7a9055.js"),[])))}};/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var Ur=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},at=function(r){return r.tagName==="IMG"},yf=function(r){return NodeList.prototype.isPrototypeOf(r)},lt=function(r){return r&&r.nodeType===1},ha=function(r){var n=r.currentSrc||r.src;return n.substr(-4).toLowerCase()===".svg"},fa=function(r){try{return Array.isArray(r)?r.filter(at):yf(r)?[].slice.call(r).filter(at):lt(r)?[r].filter(at):typeof r=="string"?[].slice.call(document.querySelectorAll(r)).filter(at):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},wf=function(r){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=r,n},Sf=function(r){var n=r.getBoundingClientRect(),t=n.top,o=n.left,s=n.width,a=n.height,c=r.cloneNode(),i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return c.removeAttribute("id"),c.style.position="absolute",c.style.top=t+i+"px",c.style.left=o+l+"px",c.style.width=s+"px",c.style.height=a+"px",c.style.transform="",c},rn=function(r,n){var t=Ur({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(r,t);var o=document.createEvent("CustomEvent");return o.initCustomEvent(r,t.bubbles,t.cancelable,t.detail),o},_f=function e(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=window.Promise||function(T){function A(){}T(A,A)},o=function(T){var A=T.target;if(A===U){w();return}I.indexOf(A)!==-1&&S({target:A})},s=function(){if(!(W||!g.original)){var T=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(X-T)>R.scrollOffset&&setTimeout(w,150)}},a=function(T){var A=T.key||T.keyCode;(A==="Escape"||A==="Esc"||A===27)&&w()},c=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=T;if(T.background&&(U.style.background=T.background),T.container&&T.container instanceof Object&&(A.container=Ur({},R.container,T.container)),T.template){var q=lt(T.template)?T.template:document.querySelector(T.template);A.template=q}return R=Ur({},R,A),I.forEach(function(ae){ae.dispatchEvent(rn("medium-zoom:update",{detail:{zoom:M}}))}),M},i=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Ur({},R,T))},l=function(){for(var T=arguments.length,A=Array(T),q=0;q<T;q++)A[q]=arguments[q];var ae=A.reduce(function(H,te){return[].concat(H,fa(te))},[]);return ae.filter(function(H){return I.indexOf(H)===-1}).forEach(function(H){I.push(H),H.classList.add("medium-zoom-image")}),C.forEach(function(H){var te=H.type,oe=H.listener,Me=H.options;ae.forEach(function(Oe){Oe.addEventListener(te,oe,Me)})}),M},u=function(){for(var T=arguments.length,A=Array(T),q=0;q<T;q++)A[q]=arguments[q];g.zoomed&&w();var ae=A.length>0?A.reduce(function(H,te){return[].concat(H,fa(te))},[]):I;return ae.forEach(function(H){H.classList.remove("medium-zoom-image"),H.dispatchEvent(rn("medium-zoom:detach",{detail:{zoom:M}}))}),I=I.filter(function(H){return ae.indexOf(H)===-1}),M},d=function(T,A){var q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return I.forEach(function(ae){ae.addEventListener("medium-zoom:"+T,A,q)}),C.push({type:"medium-zoom:"+T,listener:A,options:q}),M},m=function(T,A){var q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return I.forEach(function(ae){ae.removeEventListener("medium-zoom:"+T,A,q)}),C=C.filter(function(ae){return!(ae.type==="medium-zoom:"+T&&ae.listener.toString()===A.toString())}),M},f=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=T.target,q=function(){var H={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},te=void 0,oe=void 0;if(R.container)if(R.container instanceof Object)H=Ur({},H,R.container),te=H.width-H.left-H.right-R.margin*2,oe=H.height-H.top-H.bottom-R.margin*2;else{var Me=lt(R.container)?R.container:document.querySelector(R.container),Oe=Me.getBoundingClientRect(),We=Oe.width,Fe=Oe.height,_r=Oe.left,Pr=Oe.top;H=Ur({},H,{width:We,height:Fe,left:_r,top:Pr})}te=te||H.width-R.margin*2,oe=oe||H.height-R.margin*2;var ir=g.zoomedHd||g.original,qe=ha(ir)?te:ir.naturalWidth||te,x=ha(ir)?oe:ir.naturalHeight||oe,B=ir.getBoundingClientRect(),O=B.top,V=B.left,le=B.width,p=B.height,h=Math.min(Math.max(le,qe),te)/le,b=Math.min(Math.max(p,x),oe)/p,_=Math.min(h,b),E=(-V+(te-le)/2+R.margin+H.left)/_,k=(-O+(oe-p)/2+R.margin+H.top)/_,F="scale("+_+") translate3d("+E+"px, "+k+"px, 0)";g.zoomed.style.transform=F,g.zoomedHd&&(g.zoomedHd.style.transform=F)};return new t(function(ae){if(A&&I.indexOf(A)===-1){ae(M);return}var H=function We(){W=!1,g.zoomed.removeEventListener("transitionend",We),g.original.dispatchEvent(rn("medium-zoom:opened",{detail:{zoom:M}})),ae(M)};if(g.zoomed){ae(M);return}if(A)g.original=A;else if(I.length>0){var te=I;g.original=te[0]}else{ae(M);return}if(g.original.dispatchEvent(rn("medium-zoom:open",{detail:{zoom:M}})),X=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,W=!0,g.zoomed=Sf(g.original),document.body.appendChild(U),R.template){var oe=lt(R.template)?R.template:document.querySelector(R.template);g.template=document.createElement("div"),g.template.appendChild(oe.content.cloneNode(!0)),document.body.appendChild(g.template)}if(g.original.parentElement&&g.original.parentElement.tagName==="PICTURE"&&g.original.currentSrc&&(g.zoomed.src=g.original.currentSrc),document.body.appendChild(g.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),g.original.classList.add("medium-zoom-image--hidden"),g.zoomed.classList.add("medium-zoom-image--opened"),g.zoomed.addEventListener("click",w),g.zoomed.addEventListener("transitionend",H),g.original.getAttribute("data-zoom-src")){g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("srcset"),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading"),g.zoomedHd.src=g.zoomed.getAttribute("data-zoom-src"),g.zoomedHd.onerror=function(){clearInterval(Me),console.warn("Unable to reach the zoom image target "+g.zoomedHd.src),g.zoomedHd=null,q()};var Me=setInterval(function(){g.zoomedHd.complete&&(clearInterval(Me),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",w),document.body.appendChild(g.zoomedHd),q())},10)}else if(g.original.hasAttribute("srcset")){g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading");var Oe=g.zoomedHd.addEventListener("load",function(){g.zoomedHd.removeEventListener("load",Oe),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",w),document.body.appendChild(g.zoomedHd),q()})}else q()})},w=function(){return new t(function(T){if(W||!g.original){T(M);return}var A=function q(){g.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(g.zoomed),g.zoomedHd&&document.body.removeChild(g.zoomedHd),document.body.removeChild(U),g.zoomed.classList.remove("medium-zoom-image--opened"),g.template&&document.body.removeChild(g.template),W=!1,g.zoomed.removeEventListener("transitionend",q),g.original.dispatchEvent(rn("medium-zoom:closed",{detail:{zoom:M}})),g.original=null,g.zoomed=null,g.zoomedHd=null,g.template=null,T(M)};W=!0,document.body.classList.remove("medium-zoom--opened"),g.zoomed.style.transform="",g.zoomedHd&&(g.zoomedHd.style.transform=""),g.template&&(g.template.style.transition="opacity 150ms",g.template.style.opacity=0),g.original.dispatchEvent(rn("medium-zoom:close",{detail:{zoom:M}})),g.zoomed.addEventListener("transitionend",A)})},S=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=T.target;return g.original?w():f({target:A})},P=function(){return R},v=function(){return I},y=function(){return g.original},I=[],C=[],W=!1,X=0,R=n,g={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(r)==="[object Object]"?R=r:(r||typeof r=="string")&&l(r),R=Ur({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},R);var U=wf(R.background);document.addEventListener("click",o),document.addEventListener("keyup",a),document.addEventListener("scroll",s),window.addEventListener("resize",w);var M={open:f,close:w,toggle:S,update:c,clone:i,attach:l,detach:u,on:d,off:m,getOptions:P,getImages:v,getZoomedImage:y};return M};function Pf(e,r){r===void 0&&(r={});var n=r.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var xf=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Pf(xf);const Ef=_f,Tf=Symbol("mediumZoom");const kf=":not(a) > img",Cf={},If=500,jf=Sr({enhance({app:e,router:r}){const n=Ef(Cf);n.refresh=(t=kf)=>{n.detach(),n.attach(t)},e.provide(Tf,n),r.afterEach(()=>{setTimeout(()=>n.refresh(),If)})}}),Lf=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Af=(e,r)=>r.some(n=>{if(ge(n))return n===e.key;const{key:t,ctrl:o=!1,shift:s=!1,alt:a=!1}=n;return t===e.key&&o===e.ctrlKey&&s===e.shiftKey&&a===e.altKey}),qf=/[^\x00-\x7F]/,Rf=e=>e.split(/\s+/g).map(r=>r.trim()).filter(r=>!!r),ga=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),va=(e,r)=>{const n=r.join(" "),t=Rf(e);if(qf.test(e))return t.some(a=>n.toLowerCase().indexOf(a)>-1);const o=e.endsWith(" ");return new RegExp(t.map((a,c)=>t.length===c+1&&!o?`(?=.*\\b${ga(a)})`:`(?=.*\\b${ga(a)}\\b)`).join("")+".+","gi").test(n)},Of=({input:e,hotKeys:r})=>{if(r.value.length===0)return;const n=t=>{e.value&&Af(t,r.value)&&!Lf(t.target)&&(t.preventDefault(),e.value.focus())};He(()=>{document.addEventListener("keydown",n)}),Vn(()=>{document.removeEventListener("keydown",n)})},zf=[{title:"Installation notes",headers:[{level:2,title:"1. Arquitectura",slug:"_1-arquitectura",link:"#_1-arquitectura",children:[{level:3,title:"1.1 Entorno de desarrollo",slug:"_1-1-entorno-de-desarrollo",link:"#_1-1-entorno-de-desarrollo",children:[]},{level:3,title:"1.2 Entorno de pruebas",slug:"_1-2-entorno-de-pruebas",link:"#_1-2-entorno-de-pruebas",children:[]},{level:3,title:"1.3 Entorno de producción",slug:"_1-3-entorno-de-produccion",link:"#_1-3-entorno-de-produccion",children:[]}]},{level:2,title:"2. Instalación del entorno",slug:"_2-instalacion-del-entorno",link:"#_2-instalacion-del-entorno",children:[]},{level:2,title:"No hacer caso a partir de aquí...",slug:"no-hacer-caso-a-partir-de-aqui",link:"#no-hacer-caso-a-partir-de-aqui",children:[]}],path:"/InstallationNotes.html",pathLocale:"/",extraFields:[`---\r
title: Installation notes\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
# Instalación y configuración del entorno Vuepress v2\r
\r
[[toc]]\r
\r
## 1. Arquitectura\r
\r
Para la publicación y mantenimiento de los apuntes utilizo una organización de GitHub. Dentro de dicha organización creo dos repositorios.\r
\r
> Para el caso de PSP (2º DAM) tengo la organización [https://github.com/psp2dam](https://github.com/psp2dam)\r
\r
- Dentro de esta organización, creo un repositorio privado (psp_sources2022) al que se le puede dar el nombre que queramos.\r
\`En mi caso, el poner el sufijo 2022 es porque para ese curso cambié de VuePress 1 a VuePress 2 y la organización del contenido, del repositorio y la configuración de VuePress era totalmente diferente al anterior (\`**psp_sources**\`)\`\r
\r
- Por otro lado, creo un repositorio público (**psp_pages**). Aquí el nombre sí tiene importancia porque es la ruta que va a tener el dominio asociado a la organización.\r
Este repositorio se publica en GitHub Pages bajo el dominio psp2dam.github.io, asociándolo a la rama principal del repositorio, dejándola como raíz del sitio web y pudiendo así acceder al contenido del repositorio como [https://psp2dam.github.io/psp_pages](https://psp2dam.github.io/psp_pages). Si el repositorio se hubiese llamado "apuntes", entonces la ruta sería /apuntes.\r
\r
> Posteriormente en VuePress se tiene que configurar esa ruta de acceso.\r
Esto se hace así para poder acceder a varios repositorios con el mismo dominio, aunque también se podría usar el dominio de la organización para un único repositorio.\r
\r
Los apuntes se crean en formato markdown. Para la edición utilizo VSCode con el plugin \`Markdown Preview Enhance\`  que añade muchas funcionalidades extra al formato markdown básico y que son compatibles en su gran mayoría con el formato markdown que VuePress acepta.\r
\r
![Arquitectura de apuntes](./media/notes/architecture.png)\r
\r
### 1.1 Entorno de desarrollo\r
\r
El entorno que utilizo para la creación y prueba de los apuntes está basado en el uso de un entorno de desarrollo (Node + VuePress 2) asociado a un repositorio privado.\r
\r
En este repositorio sólo se guarda el contenido de la carpeta docs, ya que la carpeta node_modules ocupa mucho y se puede instalar en cualquier equipo de forma sencilla tal y como se explicará más adelante.\r
\r
Aquí no hace falta instalar nada adicional, ya que el propio VuePress, cuando ejecutamos el script \`npm run docs:dev\` levanta un servidor web de pruebas (en el puerto 8080) en modo **"hot reload"**, de forma que nos permite ir viendo los cambios que hacemos en los apuntes.\r
\r
### 1.2 Entorno de pruebas\r
\r
Por otro lado, cuando se compila todo el entorno, ejecutando el script \`npm run docs:build\`, se compilan todos los fuentes, se generan todos los CSS, js, se recopilan las imágenes, iconos, etc y se publica todo el sitio, ahora ya convertido a HTML, en un servidor http local (XAMPP puerto 80), en un directorio raíz que tenga en el primer nivel la ruta que hemos configurado para el repositorio público, en nuestro caso *psp_pages*.\r
\r
En el servidor Apache lo que hago es configurar un VirtualHost que apunte a ese directorio. Y configuro un hostname "psp" (etc/hosts) para probarlo. Una vez configurado todo, se puede acceder al entorno de pruebas en la url [http://psp/psp_pages](http://psp/psp_pages)\r
\r
### 1.3 Entorno de producción\r
\r
Ese directorio (psp_pages) es el que está asociado con el repositorio público de GitHub que está configurado como sitio web accesible de forma pública.\r
\r
Una vez probado, y previa creación de los PDF (que se generan a partir de los HTML que hay en este servidor), ya se puede hace un commit al repositorio público (psp_pages)\r
Ese sitio web que se publica en el repositorio público es la puesta en "producción" de los apuntes [https://psp2dam.github.io/psp_pages](https://psp2dam.github.io/psp_pages) y al que le damos acceso a los alumnos.\r
\r
> Cabe destacar que los apuntes generados se pueden mostrar en una estructura en varios idiomas, por lo que la plataforma es ideal para publicar contenido en módulos plurilingües.\r
\r
<div class="pagebreak"></div>\r
\r
## 2. Instalación del entorno\r
\r
Requisitos software:\r
\r
- Tener instalado algún cliente de Git (GitHub Desktop, Git cli, el que trae incorporado VSCode)\r
- Tener instalado node.js en en nuestro equipo\r
\r
  > Añadir la carpeta \`usr\\bin\` del cliente Git que hayamos instalado al PATH del sistema (en Windows) para poder usar los comandos de GNU en los scripts, permitiendo así no tener que cambiar comandos entre Windows/Mac/Linux\r
\r
- En una carpeta de nuestro equipo, nos hacemos un clone del repositorio privado (vacío o ya con información previamente cargada). Yo la he creado en \`apuntes/psp_sources2022\`)\r
  \r
 En el caso de que el repositorio esté vacío y tengamos que hacer la instalación y configuración del entorno por primera vez, desde una consola de comandos nos ubicamos dentro de esa carpeta y, siguiendo la [guía de inicio de VuePress 2](https://v2.vuepress.vuejs.org/guide/getting-started.html) ejecutamos\r
\r
\`\`\`bash:no-line-numbers\r
> npm init --> Necesitamos contestar a una serie de preguntas\r
package name: psp_sources\r
version: 0.98.1-beta\r
description: Apuntes del módulo PSP - 2º DAM\r
entry point: \r
test command:\r
git repository: https://github.com/psp2dam/psp_sources2022.git\r
keywords: PSP Procesos Servicios Java DAM Balmis Programación Sockets Seguridad\r
Author: Vicente Martínez Martínez\r
license: CC-BY-NC-SA-4.0\r
  \`\`\`\r
\r
y depués ejecutamos\r
\r
\`\`\`bash\r
> npm install -D vuepress@next\r
\`\`\`\r
\r
El comando anterior descargará e instalará todos los módulos y dependencias necesarios para una instalación básica de VuePress. El código de los módulos descargados quedará dentro de la carpeta \`node_modules\`.\r
\r
Además, la instalación creará dos archivos:\r
\r
- package.json\r
- package.json.lock\r
\r
Si en vez de empezar de cero, hemos hecho un clone de un repositorio que ya tiene contenido, ejecutando\r
\r
\`\`\`bash\r
> npm -i\r
\`\`\`\r
\r
descargará todos los módulos, respetando en este caso la configuración de los archivos \`package.json\` y \`package.json.lock\` existentes\r
\r
:::tip Consejo\r
Estos archivos varían en función de los directorios y del SO en el que se ejecuten. Es por eso por lo que no los incluyo en el repositorio (añadidos al .gitignore).\r
\r
Por contra, sí incluyo una copia de estos archivos para cada uno de los equipos en los que trabajo, por ejemplo \`package.json.laptop\` o \`package.json.desktop\`.\r
:::\r
\r
Para poder lanzar el entorno de desarrollo, generar y copiar el sitio web en el entorno de pruebas y generar los PDF de cada una de las páginas del sitio, tenemos que editar el archivo package.json y añadir los siguientes comandos a la sección de scripts\r
\r
\`\`\`json\r
"export-pdf": "press-export-pdf export docs --config docs/.vuepress/vuepress-pdf.config.ts --outFile book.pdf --urlOrigin http://psp:80/psp_pages/ --debug && cp -pr docs/.vuepress/.temp/pdf/?.*.pdf C:/Users/Vicente/Servidor/xampp/htdocs_apuntes/psp/psp_pages/pdf/",\r
"docs:dev": "vuepress dev docs --open",\r
"docs:build": "vuepress build docs && cp -pr docs/.vuepress/dist/* C:/Users/Vicente/Servidor/xampp/htdocs_apuntes/psp/psp_pages/"\r
\`\`\`\r
\r
:::warning Directorios en función de nuestro entorno\r
Hay que ajustar los directorios a los de nuestro entorno de desarrollo y pruebas\r
:::\r
\r
- El comando docs:dev es el que lanza el entorno de desarrollo de VuePress, tras ejecutar\r
  \r
  > npm run docs:dev\r
  \r
  levantando un servidor web en modo \`hot reload\` en la url http://localhost:8080/psp_pages *(la ruta, cuando la hayamos configurado)*.\r
\r
- El comando docs:build se encarga de compilar todos los archivos .md y convertirlos en .html creando una \`SPA (Single Page Application), en resumen, creando toda la estructura de un sitio web.\r
\r
  Esa estructura la crea en el directorio docs/.vuepress/dist/, así que lo que se hace es copiar todo su contenido en la carpeta del servidor de pruebas (htdocs_apuntes/psp/psp_pages).\r
\r
  Dicho servidor de pruebas estará configurado para tener como raiz del VirtualHost (psp) el directorio htdocs_apuntes/psp --> http://psp/psp_pages\r
\r
- El comando export-pdf utiliza un plug-in de VuePress que genera un PDF con el contenido de todas las páginas del sitio.\r
\r
  ::: danger plug-in modificado\r
  El plug-in lo he modificado para que genere un PDF por cada página, en vez de un PDF con todas las páginas. \r
\r
  Además, este plug-in utiliza los estilos de impresión definidos en los CSS y un archivo con la configuración de las cabeceras, pies de página, tamaño de página, escala del texto, etc \`docs/.vuepress/vuepress-config.ts\`.\r
\r
  Por otra parte, como lo que quiero convertir a PDF son los .html, lo lanzo pasándole como URL la del servidor de pruebas.\r
\r
  Y finalmente, los PDF generados en \`docs/.vuepress/.temp/pdf/\` los copio en la carpeta correspondiente del servidor de pruebas \`htdocs_apuntes/psp/psp_pages/pdf/\`.\r
  :::\r
\r
Una vez comprobado, en el servidor de pruebas, que todos los html son correctos y que los PDF están bien enlazados, sólo quedaría publicar los cambios.\r
\r
- Publicar cambios en los fuentes\r
\r
  Desde la carpeta \`apuntes/psp_sources2022\` hago\r
\r
  \`\`\`bash\r
  > git add .\r
  > git commit -m "Mensaje del commit"\r
  > git push\r
  \`\`\`\r
\r
- Publicar los cambios en los apuntes\r
\r
  Desde la carpeta \`htdocs_apuntes/psp/psp_pages\` hago\r
  \`\`\`bash\r
  > git add .  \r
  > git commit -m "Mensaje del commit" \r
  > git push\r
  \`\`\`\r
\r
<div class="pagebreak"></div>\r
\r
\r
## No hacer caso a partir de aquí...\r
\r
\r
- Probando funcionalidades *básicas* de \`Markdown\`\r
- Como las **listas** y otros estilos\r
\r
\r
\`\`\` java:no-line-numbers\r
	// Código sin numeración inicial\r
	int a = 0;\r
	System.out.println("El valor de la variable es " + a);\r
\`\`\` \r
\r
\`\`\` java{2}\r
	// Código con numeración y resaltado de líneas (la segunda)\r
	int a = 0;\r
	System.out.println("El valor de la variable es " + a);\r
\`\`\` `]},{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[`---\r
home: true\r
title: \r
heroImage: /images/quote.jpg\r
tagline: \r
actions:\r
- text: SAD (Valencià)    →\r
  link: /ca/\r
  type: secondary\r
- text: SAD (Castellano) →\r
  link: /es/\r
  type: secondary \r
features:\r
- title: CFGS ASIR\r
  details: Módulo de 2º curso\r
- title: Profesor\r
  details: Vicente Martínez Martínez\r
- title: Centro\r
  details: IES Doctor Balmis (Alicante)\r
footer: © 2023 / 2024\r
---\r
\r
<div class="cclicense" align="center">\r
  <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Excepte on s'indiqui el contrari, el contingut d'aquest lloc web (<a property="dct:title" rel="cc:attributionURL" href="https://sad2asir.github.io/apuntes">Apunts de SAD</a>) creat per <span property="cc:attributionName">Vicente Martínez</span> està sota una llicència <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>\r
</div>    \r
\r
<div class="cclicense" align="center">\r
  <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Excepto donde se indique lo contrario, el contenido de este sitio (<a property="dct:title" rel="cc:attributionURL" href="https://sad2asir.github.io/apuntes/es/">Apuntes de SAD</a>) creado por <span property="cc:attributionName">Vicente Martínez</span> está bajo una licencia  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"> CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>\r
</div>\r
<div style="position: absolute; bottom: 0;"><a href="/apuntes/InstallationNotes.html"> <img src="/images/install.png" height="16"/> </a></div>\r
`]},{title:"SAD - Lloc web de documentació",headers:[],path:"/ca/",pathLocale:"/ca/",extraFields:[`---\r
home: true\r
title: SAD - Lloc web de documentació\r
heroImage: /LogoSAD_ca.png\r
tagline: Apunts de classe\r
actions:\r
- text: Unit 1 (  Intro  )    →\r
  link: /ca/unit1/\r
  type: secondary\r
- text: Unit 2 (  Processes  )    →\r
  link: /ca/unit2/\r
  type: secondary\r
- text: Unit 3 (  Threads  )    →\r
  link: /ca/unit3/\r
  type: secondary\r
- text: Unit 4 (  Sockets  )    →\r
  link: /ca/unit4/\r
  type: secondary\r
- text: Unit 5 (  Services  )    →\r
  link: /ca/unit5/\r
  type: secondary\r
- text: Unit 6 (  Security  )    →\r
  link: /ca/unit6/\r
  type: secondary\r
features:\r
- title: \r
  details: \r
- title: \r
  details: \r
- title: \r
  details: \r
footer: © 2023 / 2024\r
---\r
\r
<div class="cclicense" align="center">\r
  <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Excepte on s'indiqui el contrari, el contingut d'aquest lloc web (<a property="dct:title" rel="cc:attributionURL" href="https://sad2asir.github.io/apuntes">Apunts de SAD</a>) creat per <span property="cc:attributionName">Vicente Martínez</span> està sota una llicència <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>\r
</div>    \r
`]},{title:"SAD - Página  de documentación",headers:[],path:"/es/",pathLocale:"/es/",extraFields:[`---\r
home: true\r
title: SAD - Página  de documentación\r
heroImage: /LogoSAD_es.png\r
tagline: Apuntes de clase\r
actions: \r
- text: Tema 1 (  Intro  )       →\r
  link: /es/unit1/\r
  type: secondary\r
- text: Tema 2 (  Procesos  )       →\r
  link: /es/unit2/\r
  type: secondary\r
- text: Tema 3 (  Hilos  )       →\r
  link: /es/unit3/\r
  type: secondary\r
- text: Tema 4 (  Sockets  )    →\r
  link: /es/unit4/\r
  type: secondary\r
- text: Tema 5 (  Servicios  )    →\r
  link: /es/unit5/\r
  type: secondary\r
- text: Tema 6 (  Seguridad  )    →\r
  link: /es/unit6/\r
  type: secondary\r
features:\r
- title: \r
  details: \r
- title: \r
  details: \r
- title: \r
  details: \r
footer: © 2023 / 2024\r
---\r
\r
<div class="cclicense" align="center">\r
  <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Excepto donde se indique lo contrario, el contenido de este sitio (<a property="dct:title" rel="cc:attributionURL" href="https://sad2asir.github.io/apuntes/es/">Apuntes de SAD</a>) creado por <span property="cc:attributionName">Vicente Martínez</span> está bajo una licencia  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"> CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>\r
</div>\r
`]},{title:"1.2 Concurrency",headers:[{level:2,title:"1.2.1. Concurrency vs Parallelism",slug:"_1-2-1-concurrency-vs-parallelism",link:"#_1-2-1-concurrency-vs-parallelism",children:[{level:3,title:"Monoprocess",slug:"monoprocess",link:"#monoprocess",children:[]},{level:3,title:"Multitasking",slug:"multitasking",link:"#multitasking",children:[]},{level:3,title:"Parallelism",slug:"parallelism",link:"#parallelism",children:[]}]},{level:2,title:"1.2.2. Distributed systems",slug:"_1-2-2-distributed-systems",link:"#_1-2-2-distributed-systems",children:[]},{level:2,title:"1.2.3. Advantages and disadvantages",slug:"_1-2-3-advantages-and-disadvantages",link:"#_1-2-3-advantages-and-disadvantages",children:[]},{level:2,title:"1.2.4. Bernstein's conditions",slug:"_1-2-4-bernstein-s-conditions",link:"#_1-2-4-bernstein-s-conditions",children:[]}],path:"/ca/unit1/concurrency.html",pathLocale:"/ca/",extraFields:[`---\r
title: 1.2 Concurrency\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="1.2. Concurrency" />\r
\r
# 1.2. Concurrency\r
\r
[[toc]]\r
\r
According to the [Collins dictionary](https://www.collinsdictionary.com/es/diccionario/ingles/concurrency) some of the senses os the word concurrency are\r
> Ccooperation or combination. Simultaneous occurrence; coincidence.\r
\r
If we change occurrence to  \`process\`, we get a definition closer to its sense in the computer science.\r
\r
This is not the first time the word  \`process\` appears, that is because they are one of the most important concepts in programming.\r
\r
## 1.2.1. Concurrency vs Parallelism\r
\r
Now that we already know what a process is, let's look at its relationship with the hardware where they are run.\r
\r
### Monoprocess\r
\r
Maybe we want to run many processes at the same time, but if we only have one processor unit, it's absolutely impossible to have more than one task running at the same time.\r
\r
One possibility is to run the tasks in sequence. The system starts running one process and it doesn't start with the next one until the current task has completely finished. That is what happens in systems that are able to do one task at a time, something really strange nowadays.\r
\r
![Sequential execution of tasks (monoprocessor system)](./../../media/unit1/gantt_sequential.svg)\r
\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Sequential execution of tasks (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1       :done, t1, 0, 4s\r
Process 2     : active, t2, after t1, 5s\r
Process 3     : crit, t3, after t2, 2s\r
Process 4    : t4, after t3, 5s\r
\`\`\`\r
-->\r
\r
### Multitasking\r
\r
In a multiprogramming system there are one or more programs loaded in main memory which are ready to execute. Only one program at a time is able to get the CPU for executing its instructions while all the others are waiting their turn.\r
\r
The main idea of multiprogramming is to maximize the use of CPU time. Indeed, suppose the currently running process is performing an I/O task (which, by definition, does not need the CPU to be accomplished). Then, the OS may interrupt that process and give the control to one of the other in-main-memory programs that are ready to execute (i.e. process context switching).  It is said that running processes are multiplexed on time.\r
\r
This way, the OS gives as the illusion that many processes are running simultaneously. That is commonly called \`multitasking\`.\r
\r
![Concurrent execution of tasks (monoprocessor system)](./../../media/unit1/gantt_concurrent.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Concurrent execution of tasks (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1  :done, t1, 0, 2s\r
Process 2  :active, t2, after t1, 2s\r
Process 3  :crit, t3, after t2, 2s\r
Process 4  : t4, after t3, 1s\r
Process 1  :done, t5, after t4, 2s\r
Process 2  :active, t6, after t5, 1s\r
Process 4  : t7, after t6, 3s\r
Process 2  :active, t8, after t7, 2s\r
Process 4  : t9, after t8, 1s\r
\`\`\`\r
-->\r
\r
On both previous images can be observed how the total CPU time to complete all processes is the same in both models. Nonetheless, on the second model the user has the sensation that all tasks are running at the same time.\r
\r
### Parallelism\r
\r
Multiprocessing sometimes refers to executing multiple processes (programs) at the same time. This might be misleading because we have already introduced the term “multiprogramming” to describe that before.\r
In fact, multiprocessing refers to the hardware (i.e., the CPU units) rather than the software (i.e., running processes). If the underlying hardware provides more than one processor then that is multiprocessing. Several variations on the basic scheme exist, e.g., multiple cores on one die or multiple dies in one package or multiple packages in one system.\r
Anyway, a system can be both multiprogrammed by having multiple programs running at the same time and multiprocessing by having more than one physical processor.\r
\r
Nowadays most devices, from desktop to laptops through mobile devices and IoT, all of them offer multiprocess capabilities, that is, they have mor than one processing unit to really do many tasks at the same time, no simulate it.\r
This kind of execution is called \`parallelism\`.\r
\r
![Parallel execution of tasks (dual processor system)](./../../media/unit1/gantt_parallel.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Parallel execution of tasks (dual processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1  :done, t1, 0, 2s\r
Process 2  :active, t2, after t1, 2s\r
Process 1  :done, t5, after t2, 2s\r
Process 2  :active, t6, after t5, 1s\r
Process 2  :active, t8, after t6, 2s\r
section Processor 2\r
Process 3  :crit, t3, 0, 2s\r
Process 4  : t4, after t3, 1s\r
Process 4  : t7, after t4, 3s\r
Process 4  : t9, after t7, 1s\r
\`\`\`\r
-->\r
\r
The bigger the processor units number is, the less time the tasks it takes to run and the user will have a better experience. This is one of the goals of operating systems, schedule properly the tasks to minimize running times, wait times and to maximize the resources use , mainly the processors.\r
\r
::: question cores vs threads\r
have you bought a microprocessor recently? Are you up-to-date in the state of the art of hardware? Then, you'll probably know that one of the main characteristics of a microprocessor are its  **cores number** (4, 8, 16).\r
\r
Moreover, the number of cores is completed with another configuration, **treads number**, that usually is twice the number of cores.\r
\r
¿What is the relationship between processor threads and concurrency? ¿A computer system with 8 cores / 16 threads means that it can run up to 16 process in parallel?\r
:::\r
\r
## 1.2.2. Distributed systems\r
\r
> "A collection of independent computers that appears to its users as a single. coherent system"\r
>\r
> "Andrew S. Tanembaum"\r
\r
This definition has several important aspects:\r
\r
- The first one is that a distributed system consists of components (i.e., computers) that are autonomous.\r
- A second aspect is that users (people or programs) think they are dealing with a single system. This means that one way or the other the autonomous components need to collaborate. How to establish this collaboration lies at the heart of developing distributed systems\r
\r
The most known and famous example of distributed system is \`the Internet\`. The Internet is seen by the users as a single huge documents repository, that is, a single system able to provide almost any information or service. Notwithstanding the above, we know that is made up of millions of devices located all over the world and interconnected.\r
\r
It began with the need to share resources. Actually the state-of-the-art on these systems are \`Cloud Computing\` or cloud services. It's said that a distributed system is where software components are distributed on a network and they communicate and coordinate with each other by using message passing.\r
\r
Let's concentrate on important characteristics of distributed systems:\r
\r
- Concurrency. Allows running multiple process in parallel.\r
- Global watch independency. Implies synchronization using messaging.\r
- Scalability: distributed systems should also be relatively easy to expand or scale. This characteristic is a direct consequence of having independent computers, but at the same time, hiding how these computers actually take part in the system as a whole.\r
- Fault tolerance: A distributed system will normally be continuously available, although perhaps some parts may be temporarily out of order.\r
\r
## 1.2.3. Advantages and disadvantages\r
\r
Pros of parallel processing:\r
\r
- Simultaneous running of tasks\r
- Reduce total running time\r
- Helps to solve big and complex problems\r
- Use of non local resources on the network\r
- Reduce expenses by taking advantage of shared resources. It's not necessary to invest on a supercomputer because it's possible to have the same processing power with smaller computers distributed\r
\r
Cons of parallel processing:\r
\r
- Compilers and development environments are more complex to develop.\r
- Parallel programs are more difficult to write\r
- Higher power consumption\r
- Bigger data access complexity\r
- High communication and synchronization complexity on subtasks <Badge type="danger" text="warning" vertical="middle" />\r
\r
Pros of distributed programming\r
\r
- Resource & data sharing\r
- Scale under demand\r
- Bigger flexibility to distribute processing load\r
- High availability\r
- Support for distributed applications\r
- Open philosophy and heterogeneous development\r
\r
::: question Scalability\r
Scalability means the possibility of increase the processing, storage, and capabilities of a system\r
\r
Research about differences, pros and cons of  \`vertical scaling\` vs \`horizontal scaling\`.\r
:::\r
\r
Cons of distributed programming\r
\r
- Increase system complexity\r
- New specialized software is needed\r
- Communication problems (data lost, overflows, saturation, etc.)\r
- Security problems, DDoS attacks\r
\r
Distributed and parallel programming examples\r
\r
- Weather forecast analysis and research\r
- Human genome research\r
- Biosphere modelling\r
- Seismic predictions\r
- Molecule simulation\r
\r
::: info Example of parallel and distributed programming\r
[Allien intelligence research- SETI Project](https://setiathome.berkeley.edu/sah_about.php)\r
:::\r
\r
## 1.2.4. Bernstein's conditions\r
\r
Once we know what a concurrent program is and the different hardware architectures that support them, let's try to identify which program parts can be executed concurrently.\r
\r
If we look at the following code we can determine that the first sentence must be run before the second one in order to get always the same result (for the same input data set).\r
\r
\`\`\`java\r
x = x + 1;\r
y = x + 1;\r
\`\`\`\r
\r
Though in the following code the order isn't important at all and doesn't change the final result (output data set). In this situation all of them cam be run at the same time increasing processing speed.\r
\r
\`\`\`java\r
x = 1;\r
y = 2;\r
z = 3;\r
\`\`\`\r
\r
A.J. Bernstein’s Conditions are the conditions applied on two statements S1 and S2 that are to be executed in the processor. It states that three conditions that are explained below must be satisfied for two successive statements S<sub>i</sub> y S<sub>j</sub> to be executed concurrently and still produce the same result\r
\r
Bernstein conditions are rely on the subsequent two sets of variables:\r
\r
- R(S<sub>k</sub>) = {a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...} read set consists of all variables that are read during exceution of k statements set\r
- W(S<sub>k</sub>) = {b<sub>1</sub>, b<sub>2</sub>, b<sub>3</sub>, ...} write set consists of all variables that are written (updated) during execution of k statements set.\r
\r
To run concurrently both statement sets  S<sub>i</sub> y S<sub>j</sub> these three conditions must be matched simultaneously:\r
\r
- R(S<sub>i</sub>) ∩ W(S<sub>j</sub>)\r
- W(S<sub>i</sub>) ∩ R(S<sub>j</sub>)\r
- W(S<sub>i</sub>) ∩ W(S<sub>j</sub>)\r
  \r
::: question Which of these instructions can be run concurrently?\r
\r
\`\`\`java\r
a = x + y;\r
b = z - 1;\r
c = a - b;\r
w = c + 1;\r
\`\`\`\r
\r
:::\r
\r
First of all we must get L & E sets for each sentence\r
\r
> R(S<sub>1</sub>) = {x, y}\r
> \r
> W(S<sub>1</sub>) = {a}\r
\r
> R(S<sub>2</sub>) = {z}  \r
> \r
> W(S<sub>2</sub>) = {b}\r
\r
> R(S<sub>3</sub>) = {a, b}\r
> \r
> W(S<sub>3</sub>) = {c}\r
\r
> R(S<sub>4</sub>) = {c}\r
> \r
> W(S<sub>4</sub>) = {w}\r
\r
And now let's apply the rules for each pair of sentences\r
\r
>R(S<sub>1</sub>) ∩ W(S<sub>2</sub>) = ∅\r
>\r
>W(S<sub>1</sub>) ∩ R(S<sub>2</sub>) = ∅\r
>\r
>W(S<sub>1</sub>) ∩ W(S<sub>2</sub>) = ∅         // They can be run simultaneously\r
\r
>R(S<sub>1</sub>) ∩ W(S<sub>3</sub>) = ∅\r
>\r
>W(S<sub>1</sub>) ∩ R(S<sub>3</sub>) = {a} ≠ ∅\r
>\r
>W(S<sub>1</sub>) ∩ W(S<sub>3</sub>) = ∅         // NO parallelism without problems\r
\r
>R(S<sub>1</sub>) ∩ W(S<sub>4</sub>) = ∅\r
>\r
>W(S<sub>1</sub>) ∩ R(S<sub>4</sub>) = ∅\r
>\r
>W(S<sub>1</sub>) ∩ W(S<sub>4</sub>) = ∅         // They can be run simultaneously\r
\r
>R(S<sub>2</sub>) ∩ W(S<sub>3</sub>) = ∅\r
>\r
>W(S<sub>2</sub>) ∩ R(S<sub>3</sub>) = {b] ≠ ∅\r
>\r
>W(S<sub>2</sub>) ∩ W(S<sub>3</sub>) = ∅         // NO parallelism without problems\r
\r
>R(S<sub>2</sub>) ∩ W(S<sub>4</sub>) = ∅\r
>\r
>W(S<sub>2</sub>) ∩ R(S<sub>4</sub>) = ∅\r
>\r
>W(S<sub>2</sub>) ∩ W(S<sub>4</sub>) = ∅         // They can be run simultaneously\r
\r
>R(S<sub>3</sub>) ∩ W(S<sub>4</sub>) = ∅\r
>\r
>W(S<sub>3</sub>) ∩ R(S<sub>4</sub>) = {c} ≠ ∅\r
>\r
>W(S<sub>3</sub>) ∩ W(S<sub>4</sub>) = ∅         // NO parallelism without problems\r
`]},{title:"1 Introduction",headers:[{level:2,title:"Goals",slug:"goals",link:"#goals",children:[]}],path:"/ca/unit1/",pathLocale:"/ca/",extraFields:[`---\r
title: 1 Introduction\r
---\r
\r
# Unit 1. Concurrent programming\r
\r
In this first unit we will learn about topic keys related to concurrent programming together with most of the vocabulary that we are going to use in this course.\r
\r
Digital technology has transformed nearly every aspect of modern life. Travel, work, shopping, entertainment, and communications are just some of the areas that have been revolutionized in recent decades. It's now rare to find an electronic device or piece of machinery that doesn't incorporate digital technology in some way.\r
\r
Digital technology means that devices can be more compact, faster, lighter, and more versatile. Huge amounts of information can be stored locally or remotely and moved around virtually instantaneously. Even the term "information" has expanded to include media such as photos, audio, and video, and no longer refers to just words and numbers.\r
\r
As programmers we should be capable of getting the maximum from software and hardware in our applications.\r
\r
There are a lot of tasks that need higher processing power to consume a huge amount of data. Two examples of this are \`Big Data\` and \`AI\` applications. These computing fields are rising in importance and require all the power the concurrent programming and the underlying hardware can offer.\r
\r
::: details What dou you think concurrency is?\r
We are gonna discuss it at class.\r
We will define the concept bit by bit throughout this course\r
:::\r
\r
## Goals\r
\r
The goals for this unit are:\r
\r
- To differentiate process and program\r
- To understand what concurrency is\r
- To know about relationship and differences between the two basic execution units: processes and threads.\r
- To know the basics about concurrent programming\r
- To know how concurrency performs on OS and hardware.\r
`]},{title:"1.3 Processes in the OS",headers:[{level:2,title:"1.3.1. The OS kernel",slug:"_1-3-1-the-os-kernel",link:"#_1-3-1-the-os-kernel",children:[]},{level:2,title:"1.3.2. Process conntrol in GNU/Linux",slug:"_1-3-2-process-conntrol-in-gnu-linux",link:"#_1-3-2-process-conntrol-in-gnu-linux",children:[{level:3,title:"Command to get the process PiD",slug:"command-to-get-the-process-pid",link:"#command-to-get-the-process-pid",children:[]},{level:3,title:"Commands to view active processes in GNU/Linux",slug:"commands-to-view-active-processes-in-gnu-linux",link:"#commands-to-view-active-processes-in-gnu-linux",children:[]},{level:3,title:"Process control",slug:"process-control",link:"#process-control",children:[]}]},{level:2,title:"1.3.3. Process states",slug:"_1-3-3-process-states",link:"#_1-3-3-process-states",children:[]},{level:2,title:"1.3.4 Process scheduler",slug:"_1-3-4-process-scheduler",link:"#_1-3-4-process-scheduler",children:[]},{level:2,title:"1.3.5. Process scheduling algorithms",slug:"_1-3-5-process-scheduling-algorithms",link:"#_1-3-5-process-scheduling-algorithms",children:[{level:3,title:"FCFS - First Come First Served",slug:"fcfs-first-come-first-served",link:"#fcfs-first-come-first-served",children:[]},{level:3,title:"SJF - Shortest Job First",slug:"sjf-shortest-job-first",link:"#sjf-shortest-job-first",children:[]},{level:3,title:"Priority scheduling",slug:"priority-scheduling",link:"#priority-scheduling",children:[]},{level:3,title:"Round Robin",slug:"round-robin",link:"#round-robin",children:[]},{level:3,title:"Scheduler with I/O operations or locks",slug:"scheduler-with-i-o-operations-or-locks",link:"#scheduler-with-i-o-operations-or-locks",children:[]}]}],path:"/ca/unit1/operatingsystem.html",pathLocale:"/ca/",extraFields:[`---\r
title: 1.3 Processes in the OS\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="1.3. Processes in the OS" />\r
\r
# 1.3. Processes in the Operating System\r
\r
[[toc]]\r
\r
## 1.3.1. The OS kernel\r
\r
The \`kernel or OS core\` is the responsible of the basic functions on the system and the resources management. It's accessed by systems calls. it is the smaller part of the OS and usually it's coded in low-level languages to improve its performance. The rest of the OS is call system apps.\r
\r
Essentially, a process is what a program becomes when it is loaded into memory from a secondary storage medium like a hard disk drive or an removable drive. Each process has its own address space, which typically contains both program instructions and data. Despite the fact that an individual processor or processor core can only execute one program instruction at a time, a large number of processes can be executed over a relatively short period of time by briefly assigning each process to the processor in turn.\r
\r
When a user starts an application program, the operating system's \`high-level scheduler (HLS)\` loads all or part of the program code from secondary storage into memory. It then creates a data structure in memory called a process control block (PCB) that will be used to hold information about the process, such as its current status and where in memory it is located.\r
\r
The operating system also maintains a separate process table in memory that lists all the user processes currently loaded. When a new process is created, it is given a unique process identification number (PID) and a new record is created for it in the process table which includes the address of the process control block in memory.\r
\r
As well as allocating memory space, loading the process, and creating the necessary data structures, the operating system must also allocate resources such as access to I/O devices and disk space if the process requires them. Information about the resources allocated to a process is also held within the process control block. The operating system's \`low-level scheduler (LLS)\` is **responsible for allocating CPU time to each process in turn**.\r
\r
When a process makes the transition from one state to another, the operating system updates the information in its PCB. When the process is terminated, the operating system removes it from the process table and frees the memory and any other resources allocated to the process so that they become available to other processes. The diagram below illustrates the relationship between the process table and the various process control blocks.\r
\r
These \`context changes\` are time and resource consuming. We will talk about this later, with a smaller running unit \`threads\`, that solve this problem partially.\r
\r
![Process Control Block](./../../media/unit1/process_control_blocks.gif)\r
\r
The process control block (PCB) maintains information that the operating system needs in order to manage a process. PCBs typically include information such as the process ID, the current state of the process (e.g. running, ready, blocked, etc.), the number of the next program instruction to be executed, and the starting address of the process in memory. The PCB also stores the contents of various processor registers (the execution context), which are saved when a process leaves the running state and which are restored to the processor when the process returns to the running state.\r
\r
## 1.3.2. Process conntrol in GNU/Linux\r
\r
Because Linux is a multi-user system, meaning different users can be running various programs on the system, each running instance of a program must be identified uniquely by the kernel.\r
\r
And a program is identified by its process ID (PID) as well as it’s parent processes ID (PPID), therefore processes can further be categorized into:\r
\r
- Parent processes – these are processes that create other processes during run-time.\r
- Child processes – these processes are created by other processes during run-time.\r
\r
Init process is the mother (parent) of all processes on the system, it’s the first program that is executed when the Linux system boots up; it manages all other processes on the system. It is started by the kernel itself, so in principle it does not have a parent process.\r
\r
::: info proceso init\r
The init process always has process ID of 1.\r
\r
It functions as an adoptive parent for all orphaned processes.\r
:::\r
\r
### Command to get the process PiD\r
\r
In Linux every process on a system has a PID (Process Identification Number) which can be used to kill the process. The command \`pidof cmdname\` shows all processes related to that command. Remember that every time we start a command or application a nes process is created.\r
\r
Shell variables \`$$\` and \`$PPID\` show the actual process PID and its PPID respectively.\r
\r
\`\`\`bash\r
# pidof systemd\r
1\r
# pidof top\r
2060\r
# pidof httpd\r
2103 2102 2101 2100 2099 1076\r
# Process pid\r
echo $$\r
2109\r
# Process parent pid\r
echo $PPID\r
2106\r
\`\`\`\r
\r
### Commands to view active processes in GNU/Linux\r
\r
There are several Linux tools for viewing/listing running processes on the system, the two traditional and well known are \`ps\` and \`top\` commands:\r
\r
The \`ps\` command displays information about a selection of the active processes on the system, along with some process information,  as shown below:\r
\r
This command offers many options to show more or less information about the processes, as well as our user's processes ot others' processes, including statistics about resource usage, etc.\r
\r
\`\`\`bash\r
vicente@Desktop-Vicente:~$ ps -AF\r
UID        PID  PPID  C    SZ   RSS PSR STIME TTY          TIME CMD\r
root         1     0  0   223   576   5 11:00 ?        00:00:00 /init\r
root         7     1  0   223    80   3 11:00 ?        00:00:00 /init\r
root         8     7  0   223    80   1 11:00 ?        00:00:00 /init\r
vicente      9     8  0  2508  5032   4 11:00 pts/0    00:00:00 -bash\r
vicente     70     9  0  2650  3224   5 11:06 pts/0    00:00:00 ps -AF\r
vicente@Desktop-Vicente:~$ ps -auxf\r
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\r
root         1  0.0  0.0    892   576 ?        Sl   11:00   0:00 /init\r
root         7  0.0  0.0    892    80 ?        Ss   11:00   0:00 /init\r
root         8  0.0  0.0    892    80 ?        S    11:00   0:00  \\_ /init\r
vicente      9  0.0  0.0  10032  5032 pts/0    Ss   11:00   0:00      \\_ -bash\r
vicente     72  0.0  0.0  10832  3408 pts/0    R+   11:09   0:00          \\_ ps -auxf\r
\`\`\`\r
\r
::: info Useful ‘ps’ examples for Linux process monitoring\r
[https://www.tecmint.com/ps-command-examples-for-linux-process-monitoring/](https://www.tecmint.com/ps-command-examples-for-linux-process-monitoring/)\r
:::\r
\r
The \`top\`command  is a powerful tool that offers you a dynamic real-time view of a running system as shown in the screenshot below:\r
\r
\`\`\`bash\r
vicente@Desktop-Vicente:~$ ps -AF\r
top - 11:14:52 up 14 min,  0 users,  load average: 0.00, 0.00, 0.00\r
Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie\r
%Cpu(s):  0.1 us,  0.1 sy,  0.0 ni, 99.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\r
MiB Mem :  12677.3 total,  12556.4 free,     70.6 used,     50.3 buff/cache\r
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.  12433.8 avail Mem\r
\r
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\r
    1 root      20   0     892    576    516 S   0.0   0.0   0:00.04 init\r
    7 root      20   0     892     80     20 S   0.0   0.0   0:00.00 init\r
    8 root      20   0     892     80     20 S   0.0   0.0   0:00.01 init\r
    9 vicente   20   0   10032   5032   3324 S   0.0   0.0   0:00.11 bash\r
   73 vicente   20   0   10856   3664   3148 R   0.0   0.0   0:00.00 top\r
\`\`\`\r
\r
::: info ‘top’ examples in Linux\r
[https://www.tecmint.com/12-top-command-examples-in-linux/](https://www.tecmint.com/12-top-command-examples-in-linux/)\r
:::\r
\r
### Process control\r
\r
Process management is one of the important aspects of System Administration in Linux, and it includes killing of processes using the \`kill\` command.\r
\r
When killing processes, the kill command is used to send a named signal to a named process or groups of processes. The default signal is the TERM signal.\r
\r
A waiting process that can be interrupted by signals is called \`Interruptible\`, while a waiting process that is directly waiting on hardware conditions and cannot be interrupted under any conditions is called \`uninterruptible\`.\r
\r
\`\`\`bash\r
# Get Firefox PID after it freezes\r
$ pidof firefox\r
2687\r
# Send the SIGKILL (9) signal to end the process immediately\r
$ kill 9 2687\r
\`\`\`\r
\r
::: info How to control Linux process Using kill, pkill and kilall\r
[https://www.tecmint.com/how-to-kill-a-process-in-linux/](https://www.tecmint.com/how-to-kill-a-process-in-linux/)\r
:::\r
\r
The kernel stores a great deal of information about processes including process priority which is simply the scheduling priority attached to a process. Processes with a higher priority will be executed before those with a lower priority, while processes with the same priority are scheduled one after the next, repeatedly.\r
\r
A user with *root* privileges can modify processes priority. This value can be seen in the NI (nice) columns of \`top\`output. This value also influences the PRI (priority) column, meaning the priority the OS gives to a process.\r
\r
The priority is a nice value (niceness) which ranges from -20 (highest priority value) to 19 (lowest priority value) and the default is 0. Using the \`nice\` command we can guarantee that in high load CPU periods some processes will make a priority use of the CPU\r
\r
\`\`\`bash\r
vicente@Desktop-Vicente:~$ nice\r
0\r
vicente@Desktop-Vicente:~$ nice -n 10 bash\r
vicente@Desktop-Vicente:~$ nice\r
10\r
vicente@Desktop-Vicente:~$\r
\`\`\`\r
\r
::: tip Process control in Windows\r
In Windows systems most of previous actions can be performed from the task manager, though commands **tasklist** and **taskkill** can be used in console mode..\r
\r
*tasklist /svc /fi “imagename eq svchost.exe”*\r
Will display you the result with Image name, PID and Service name to know which services are being run under the process svchost.exe, generic host services for services run from dynamic link libraries (DLL). There are so many processes for security reasons in order to avoid risks just in case one fails, not to hang the whole system.\r
:::\r
\r
## 1.3.3. Process states\r
\r
The simple process state diagram below shows three main states for a process. They are shown as ready (the process is ready to execute when a processor becomes available), running (the process is currently being executed by a processor) and waiting (the process is waiting for a specific event to occur before it can proceed). The lines connecting the states represent possible transitions from one state to another.\r
\r
At any instant, a process will exist in one of these three states. On a single-processor computer, only one process can be in the running state at any one time. The remaining processes will either be ready or blocked, and for each of these states there will be a queue of processes waiting for some event.\r
\r
![Process states](./../../media/unit1/process_state.png)\r
\r
- **Created**. The process is created from a program and loaded into the system\r
- **Ready**. The process is not running but it is ready to do so. The OS still hasn't assigned a processor to run. and the OS scheduler will be responsible of selecting the process to start running.\r
- **Running**. While a process is executing it has complete control of the processor, but at some point the operating system needs to regain control, such as when it must assign the processor to the next process. Execution of a particular process will be suspended if that process requests an I/O operation, if an interrupt occurs, or if the process times out.\r
- **Waiting**. The process is blocked waiting for an event to happen. For instance it can be waiting for an I/O operation to finish or a synchronization operation with another process. When the event occurs the process goes back to ready state until the OS scheduler decides to move it to running state.\r
- **Terminated**. The process ends its processing and frees its resources and all memory space (PCB). The process is the responsible to do a system call to tell the OS it has finished although the OS can interrupt it forcing its termination by using an exception (special interruption).\r
\r
States transitions:\r
\r
- **Running to waiting**: a process changes from running to waiting when it depends on an external event or operation.\r
- **De Waiting to ready**: a process changes from waiting to ready when the external event or operation it was waiting for occurs.\r
- **Ready to running**: a process changes from ready to running when the OS scheduler gives it CPU time.\r
- **Running to ready**: a process changes from running to ready when the CPU time given by the OS scheduler runs out.\r
\r
## 1.3.4 Process scheduler\r
\r
Process scheduling is a major element in process management, since the efficiency with which processes are assigned to the processor will affect the overall performance of the system. It is essentially a matter of managing queues, with the aim of minimizing delay while making the most effective use of the processor's time. The operating system carries out four types of process scheduling:\r
\r
- Process queue: contains all system processes\r
- Ready queue: contains all processes ready to be run.\r
- Devices queues: contains processes waiting for an IO operation to finish.\r
\r
![Scheduler process queues](./../../media/unit1/process_queues.gif)\r
\r
Scheduler is the one who manages processes movements into the queues.There's a short-term and a long-term scheduling:\r
\r
- The task of the \`short-term scheduler\` (sometimes referred to as the dispatcher) is to determine which process to execute next. This will occur each time the currently running process is halted. A process may cease execution because it requests an I/O operation, or because it times out, or because a hardware interrupt has occurred. The objectives of short-term scheduling are to ensure efficient utilization of the processor and to provide an acceptable response time to users.\r
  - Non-Preemptive Scheduling: a process only changes its state if it has finished or it gets locked.\r
  - Preemptive Scheduling: a process only changes its state if it has finished, it gets locked or a higher priority process is waiting.\r
  - Shared time: every amount of clock cicles (quantum), a process is moved to waiting and a new process changes from ready to running. All processes are considered to have the same priority\r
- The \`long-term scheduler\` determines which programs are admitted to the system for processing, and as such controls the degree of multiprogramming.\r
  - Before accepting a new program, the long-term scheduler must first decide whether the processor is able to cope effectively with another process. The more active processes there are, the smaller the percentage of the processor's time that can be allocated to each process.\r
\r
::: warning Context switch\r
The changeover from one process to the next is called a **context switch**. During a context switch, the processor obviously cannot perform any useful computation, and because of the frequency with which context switches occur, operating systems must minimize the context-switching time in order to reduce system overhead.\r
:::\r
\r
## 1.3.5. Process scheduling algorithms\r
\r
Scheduling algorithms are use to improve system performance and thus user experience.\r
\r
To set objective parameters and be able to compare different scenarios, a CPU scheduling algorithm tries to maximize and minimize the following:\r
\r
- **Waiting time**: Waiting time is an amount of time a process waits in the ready queue or in the waiting queue.\r
- **Turnaround Time**: Turnaround time is the amount of time to execute a specific process. It is the calculation of the total time spent waiting to get into the memory, waiting in the queue, locked for I/O operations and executing on the CPU. The period between the time of process submission to the completion time is the turnaround time.\r
- **CPU utilization**: CPU usage is the main task in which the operating system needs to make sure that CPU remains as busy as possible. It can range from 0 to 100 percent.\r
  \r
> In 1 processor systems\r
> ![1 CPU usage](./../../media/unit1/usage1cpu.gif)\r
<!--$\\frac{\\#\\ instants\\ of\\ time\\ the\\ processor\\ is\\ busy}{time\\ last\\ process\\ ends}$\\ \\ x \\ 100-->\r
>In N processor systems\r
![2 CPU usage](./../../media/unit1/usage2cpu.gif)\r
<!--$\\frac{\\sum_{n=1}^{N}\\#\\ instants\\ of\\ time\\ the\\ processor_n\\ is\\ busy}{instant\\ of\\ time\\ when\\ the\\ last\\ process\\ ends\\ *\\ N}$\\ \\ x\\  100-->\r
\r
- **Throughput**: The number of processes that finish their execution per unit time is known as \`throughput\`. So, when the CPU is busy executing the process, at that time, work is being done, and the work completed per unit time is called throughput.\r
![Throughput](./../../media/unit1/throughput.gif)\r
<!-- $\\frac{\\# \\ of\\ processes}{instant\\ of\\ time\\ when\\ the\\ last\\ process\\ ends}$-->\r
\r
| Process | Arrival | CPU time | Priority |\r
| :-----: | :-----: | :------: | :------: |\r
|   P1    |    0    |    10    |    5     |\r
|   P2    |    1    |    6     |    10    |\r
|   P3    |    2    |    3     |    7     |\r
\r
With this parameters let's compare the scheduling algorithms performance.\r
\r
### FCFS - First Come First Served\r
\r
First Come First Serve is the full form of FCFS. It is the easiest and most simple CPU scheduling algorithm. In this type of algorithm, the process which requests the CPU gets the CPU allocation first. This scheduling method can be managed with a FIFO queue.\r
\r
As the process enters the ready queue, its PCB (Process Control Block) is linked with the tail of the queue. So, when CPU becomes free, it should be assigned to the process at the beginning of the queue.\r
\r
Characteristics of FCFS method:\r
\r
- It offers non-preemptive and pre-emptive scheduling algorithm.\r
- Jobs are always executed on a first-come, first-serve basis\r
- It is easy to implement and use.\r
- However, this method is poor in performance, and the general wait time is quite high.\r
\r
![FCFS monoprocessor](./../../media/unit1/fcfs-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title FCFS (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 10s\r
Process 2     : active,t2, after t1, 6s\r
Process 3     : crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      0       |       10        |             |\r
|   P2    |      9       |       15        |             |\r
|   P3    |      14      |       17        |             |\r
|         |\r
|  Mean   |     7,6      |       14        |    100%     |    0,15    |\r
\r
![FCFS dual processor](./../../media/unit1/fcfs-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title FCFS (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1, 0, 10s\r
.     : t2, 0, 0s\r
section Processor 2\r
Process 2     :active, t2, 1, 6s\r
Process 3     :crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      0       |       10        |             |\r
|   P2    |      0       |        6        |             |\r
|   P3    |      5       |        8        |             |\r
|         |\r
|  Mean   |     1,6      |        6        |     95%     |    0,3     |\r
\r
### SJF - Shortest Job First\r
\r
SJF is a full form of (Shortest job first) is a scheduling algorithm in which the process with the shortest execution time should be selected for execution next. This scheduling method can be preemptive or non-preemptive. It significantly reduces the average waiting time for other processes awaiting execution.\r
\r
Characteristics of SJF Scheduling\r
\r
- It is associated with each job as a unit of time to complete.\r
- In this method, when the CPU is available, the next process or job with the shortest completion time will be executed first.\r
- It is Implemented with non-preemptive policy.\r
- This algorithm method is useful for batch-type processing, where waiting for jobs to complete is not critical.\r
- It improves job output by offering shorter jobs, which should be executed first, which mostly have a shorter turnaround time. There can be situations where longer jobs would never been run, that's called \`starvation\`.\r
\r
![SJF monoprocessor](./../../media/unit1/sjf-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title SJF (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 10s\r
Process 3     : crit, t3, after t1, 3s\r
Process 2     : active,t2, after t3, 6s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      0       |       10        |             |\r
|   P2    |      12      |       18        |             |\r
|   P3    |      8       |       11        |             |\r
|         |\r
|  Mean   |     7,3      |       13        |    100%     |    0,15    |\r
\r
![SJF dual processor](./../../media/unit1/sjf-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title FCFS (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1, 0, 10s\r
.     : t2, 0, 0s\r
section Processor 2\r
Process 2     :active, t2, 1, 6s\r
Process 3     :crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      0       |       10        |             |\r
|   P2    |      0       |        6        |             |\r
|   P3    |      5       |        8        |             |\r
|         |\r
|  Mean   |     1,6      |        6        |     95%     |    0,3     |\r
\r
### Priority scheduling\r
\r
Priority scheduling is a method of scheduling processes based on priority. In this method, the scheduler selects the tasks to work as per the priority.\r
\r
Priority scheduling also helps OS to involve priority assignments. The processes with higher priority should be carried out first, whereas jobs with equal priorities are carried out on a round-robin or FCFS basis. Priority can be decided based on memory requirements, time requirements, etc.\r
\r
As with SJF, with this algorithm low priority processes are in risk of starvation.\r
\r
![Prioridad monoprocessor](./../../media/unit1/prioridad-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Prioridad (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 10s\r
Process 3     : crit, t3, after t1, 3s\r
Process 2     : active,t2, after t3, 6s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      0       |       10        |             |\r
|   P2    |      12      |       18        |             |\r
|   P3    |      8       |       11        |             |\r
|         |\r
|  Mean   |     6,6      |       13        |    100%     |    0,15    |\r
\r
![Prioridad dual processor](./../../media/unit1/prioridad-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Prioridad (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1, 0, 10s\r
.     : t2, 0, 0s\r
section Processor 2\r
Process 2     :active, t2, 1, 6s\r
Process 3     :crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      0       |       10        |             |\r
|   P2    |      0       |        6        |             |\r
|   P3    |      5       |        8        |             |\r
|         |\r
|  Mean   |     1,6      |        6        |     95%     |    0,3     |\r
\r
### Round Robin\r
\r
Round robin is the oldest, simplest scheduling algorithm. The name of this algorithm comes from the round-robin principle, where each person gets an equal share of something in turn (\`quantum\`). It is mostly used for scheduling algorithms in multitasking. This algorithm method helps for starvation free execution of processes.\r
\r
Characteristics of Round-Robin Scheduling\r
\r
- Round robin is a hybrid model which is clock-driven\r
- Time slice should be minimum, which is assigned for a specific task to be processed. However, it may vary for different processes.\r
- It is a real time system which responds to the event within a specific time limit.\r
\r
We can find two situations with this method:\r
\r
- The process, or its remaining time, is less than the quantum. So, when the process finishes, a new process is run.\r
- The process, or its remaining time, is greater than the quantum. So, when the quantum times out the process is moved to ready and next scheduled process is moved to running.\r
\r
![RR monoprocessor](./../../media/unit1/roundrobin-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Round-Robin q=2 (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 2s\r
Process 2     : active,t2, after t1, 2s\r
Process 3     : crit, t3, after t2, 2s\r
Process 1      :done, t4, after t3, 2s\r
Process 2     : active,t5, after t4, 2s\r
Process 3     : crit, t6, after t5, 1s\r
Process 1      :done, t7, after t6, 2s\r
Process 2     : active,t8, after t7, 2s\r
Process 1      :done, t9, after t8, 2s\r
Process 1      :done, t10, after t9, 2s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      9       |       19        |             |\r
|   P2    |      8       |       14        |             |\r
|   P3    |      6       |        9        |             |\r
|         |\r
|  Mean   |     7,6      |       14        |    100%     |    0,15    |\r
\r
![RR dual processor](./../../media/unit1/roundrobin-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Round-Robin (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1_1, 0, 2s\r
Process 3     :crit, t3_1, after t1_1, 2s\r
Process 1     :done, t1_2, after t3_1, 2s\r
Process 3     :crit, t3_2, after t1_2, 1s\r
Process 1     :done, t1_3, after t3_2, 2s\r
Process 1     :done, t1_4, after t1_3, 2s\r
Process 1     :done, t1_5, after t1_4, 2s\r
section Processor 2\r
.     :active, ., 0, 0s\r
Process 2     :active, t2_1, 1, 2s\r
Process 2     :active, t2_2, after t2_1, 2s\r
Process 2     :active, t2_3, after t2_2, 2s\r
\`\`\`\r
-->\r
\r
| Process | Waiting time | Turnaround time | % CPU usage | Throughput |\r
| :-----: | :----------: | :-------------: | :---------: | :--------: |\r
|   P1    |      3       |       13        |             |\r
|   P2    |      0       |        6        |             |\r
|   P3    |      2       |        5        |             |\r
|         |\r
|  Mean   |     1,6      |       7,6       |     73%     |    0,23    |\r
\r
::: question Combined scheduling\r
As a matter of fact, not only one scheduling algorithm is used but more than one are combined to improve performance and avoid problems like starvation. We have done so, in Round-Robin we have also used FCFS.\r
\r
¿Do you dare to plan the previous sample using Round-Robin with priority? Keep in mind that it will work mainly with the quantum and, the priority will be used to select the next process to change from ready to running.\r
:::\r
\r
### Scheduler with I/O operations or locks\r
\r
In previous examples all processes have expend all their time in CPU, the have not made any IO operation nor any interruption, but that behavior is far away from reality. Processes sometimes have to get locked to wait for a user input, read or store information on any storage or simply wait for another process to finish an operation and send to it a data before it can go on (synchronization).\r
\r
As we have already comment, when a process leaves the running state another one can start running and make use of the CPU. Once the process finishes its lock, it can go back to ready state to keep on executing its sentences.\r
\r
The next graph has a two activities specification in which before running their last sentence block, process 1 last IO operation must have finished.\r
\r
![Procesos con E/S](./../../media/unit1/operaciones_es.svg)\r
<!--\r
\`\`\`mermaid\r
graph LR\r
\r
subgraph Process 2\r
    p2_1["run for 2"]--p2_2["E/S for 3"]--p2_3["run for 4"]--p2_5["run for 3"]\r
end\r
subgraph Process 1\r
    p1_1["run for 3"]--p1_2["E/S for 1"]--p1_3["run for 5"]--p1_4["E/S for 2"]--p1_5["run for 4"]\r
    p1_4--p2_5\r
end\r
\`\`\`\r
-->\r
\r
Let's see how this affects the scheduling, guessing both processes arrive at the same time.\r
\r
![RR dual processor](./../../media/unit1/roundrobin-3.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Round-Robin q=2 (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Task 1\r
P1 runs 2 (exits because of q expiration)      :done, t1_1, 0, 2s\r
P1 runs 1 (exits and has to wait 1 for E/S)      :done, t1_2, after t2_1, 1s\r
E/S :crit, es1_1, after t1_2, 1s\r
P1 runs 2 (exits because of q expiration)      :done, t1_3, after es1_1, 2s\r
P1 runs 2 (exits because of q expiration)      :done, t1_4, after t2_2, 2s\r
P1 runs 2 (exits and has to wait 1 for E/S)      :done, t1_5, after t2_3, 1s\r
E/S :crit, es1_2, after t1_5, 2s\r
P1 runs 2 (exits because of q expiration)      :done, t1_6, after es1_2, 2s\r
P1 runs 2 (exits because of q expiration)      :done, t1_7, after t2_4, 2s\r
\r
section Task 2 \r
P2 runs 2 (exits and has to wait 3 for E/S) :active, t2_1, after t1_1, 2s\r
E/S :crit, es2_1, after t2_1, 3s\r
P2 runs 2 (exits because of q expiration)      :active, t2_2, after t1_3, 2s\r
P2 runs 2 (exits because of q expiration)      :active, t2_3, after t1_4, 2s\r
Locked waiting :crit, es2_2, after t2_3, 3s\r
P2 runs 2 (exits because of q expiration)      :active, t2_4, after t1_6, 2s\r
P2 runs 2 (ends execution)      :active, t2_5, after t1_7, 1s\r
'''\r
-->\r
`]},{title:"1.1 Processes, programs, threads",headers:[{level:2,title:"1.1.1. Processes and programs",slug:"_1-1-1-processes-and-programs",link:"#_1-1-1-processes-and-programs",children:[]},{level:2,title:"1.1.2. Concurrent programming",slug:"_1-1-2-concurrent-programming",link:"#_1-1-2-concurrent-programming",children:[{level:3,title:"What for?",slug:"what-for",link:"#what-for",children:[]},{level:3,title:"Process communication and synchronization",slug:"process-communication-and-synchronization",link:"#process-communication-and-synchronization",children:[]}]},{level:2,title:"1.1.3. Services and threads",slug:"_1-1-3-services-and-threads",link:"#_1-1-3-services-and-threads",children:[{level:3,title:"Sequential program (Von Newmann architecture)",slug:"sequential-program-von-newmann-architecture",link:"#sequential-program-von-newmann-architecture",children:[]},{level:3,title:"Concurrent program",slug:"concurrent-program",link:"#concurrent-program",children:[]},{level:3,title:"Threads vs processes",slug:"threads-vs-processes",link:"#threads-vs-processes",children:[]}]}],path:"/ca/unit1/process.html",pathLocale:"/ca/",extraFields:[`---\r
title: 1.1 Processes, programs, threads\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="1.1. Processes, programs, threads" />\r
\r
# 1.1. Processes, programs, threads\r
\r
[[toc]]\r
\r
## 1.1.1. Processes and programs\r
\r
A program and a process are related terms. A \`program\` is a group of instructions to carry out a specified task with some input data.\r
\r
::: tip Black box\r
Black-box testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings, just by setting some input data set and checking if the output data set meets the expected one.\r
:::\r
\r
While a \`process\` can be described as an instance of a program running on a computer. A program becomes a process when loaded into memory and thus is an active entity While  a program is considered to be a passive one.\r
\r
A process has a high resource requirement, it needs resources like CPU, memory address, I/O during its lifetime. It has its own control block called Process Control Block where relevant information as program counter, registers, stack, *executable code*, state, ... and all it needs to be run by the OS is stored.\r
\r
![Process in memory](./../../media/unit1/proceso_memoria.png)\r
\r
Each process is an independent entity. There exist a many-to-one relationship between process and program, which means one program can be invoked multiple times getting several processes in memory running the same copy of the program.\r
\r
## 1.1.2. Concurrent programming\r
\r
In computer science, concurrency is the ability of different parts or units of a program to be executed out-of-order or at the same time simultaneously.\r
\r
This allows for \`parallel\` execution of the concurrent units, which can significantly improve overall speed of the execution in \`multi-processor and multi-core\` machines.\r
\r
The concept of concurrent computing is frequently confused with the related but distinct concept of parallel computing, although both can be described as *multiple processes executing during the same period of time*.\r
\r
- In parallel computing, execution occurs at the same physical instant: for example, on separate processors of a multi-processor machine, with the goal of speeding up computations.\r
- This parallel computing is impossible on a \`one-core single processor\`, as only one computation can occur at any instant (during any single clock cycle). By contrast, concurrent computing consists of process lifetimes overlapping, but execution need not happen at the same instant. The goal here is to model processes in the outside world that happen concurrently using \`multitask\`.\r
\r
![Concurrency vs parallelism](./../../media/unit1/concurrencia_vs_paralelismo.jpg)\r
\r
::: tip Concurrency\r
By and large, both previously described scenarios are gonna be referred to as **concurrency**.\r
:::\r
\r
### What for?\r
\r
The Real World is Massively Complex\r
\r
- In the natural world, many complex, interrelated events are happening at the same time, yet within a temporal sequence.\r
- Compared to serial computing, parallel computing is much better suited for modeling, simulating and understanding complex, real world phenomena.\r
\r
Imagine modeling these serially: climate change, rush hour traffic, weather forecast, galaxy formation, ...\r
\r
Main Reasons for Using Parallel Programming\r
\r
- Save time and money. In theory, throwing more resources at a task will shorten its time to completion, with potential cost savings.\r
  - Parallel computers can be built from cheap, commodity components.\r
- Solve larger and more complex problems.  Many problems are so large and/or complex that it is impractical or impossible to solve them using a serial program, especially given limited computer memory.\r
  - *Grand Challenge Problems* (en.wikipedia.org/wiki/Grand_Challenge) requiring petaflops and petabytes of computing resources.\r
  - Web search engines/databases processing millions of transactions every second\r
- Take advantage of non-local resources. Using compute resources on a wide area network, or even the Internet when local compute resources are scarce or insufficient.\r
  - *SETI@home* (setiathome.berkeley.edu) has over 1.7 million users in nearly every country in the world. (May, 2018).\r
- Make better use of underlying parallel hardware. Modern computers, even laptops, are parallel in architecture with multiple processors/cores.\r
  - Parallel software is specifically intended for parallel hardware with multiple cores, threads, etc.\r
  - In most cases, serial programs run on modern computers "waste" potential computing power.\r
- Increase security. Each task can be isolated in a different process, so debug and check the security, even finishing it when it's not working properly, can be done without hanging the whole system.\r
\r
Historically, parallel computing has been considered to be "the high end of computing", and has been used to model difficult problems in many areas of science and engineering.\r
Today, commercial applications provide an equal or greater driving force in the development of faster computers. These applications require the processing of large amounts of data in sophisticated ways. For example:\r
\r
New hardware environments can be classified in terms of:\r
\r
- Microprocessor with many cores sharing system memory.\r
- Multiprocessor systems with shared memory\r
- Distributed systems and cloud services.\r
\r
### Process communication and synchronization\r
\r
The concurrent running of many processes may suppose the collaboration of some of them in order to complete a common task, while there can also be competing for system resources.\r
\r
In both cases it is compulsory to add communication and synchronization techniques for the processes.\r
\r
:::info Concurrent programming\r
Concurrent programming and PSP is just about that, the knowledge of these **communication and synchronization techniques**.\r
:::\r
\r
When thinking about the way a process can communicate with each other, three are two main options:\r
\r
- Message passing: It's commonly used when processes are running on different devices. They exchange information following a protocol previously set and agreed by the parts.\r
- Shared resources / memory: It's only available when both processes are running on the same device and allows process synchronization based on a shared resource value or state.\r
\r
We can also classify the communication by the syncrhonization the processes use during the message passing process:\r
\r
- Synchronous communication happens when messages can only be exchanged in real time. It requires that the transmitter and receiver are present in the same time and/or space. Sender is blocked until receiver gets the message. Both processes are synchronized at the reception time.\r
  - Examples of synchronous communication are phone calls or video meetings.\r
- Asynchronous communication happens when information can be exchanged independent of time. It doesn’t require the recipient’s immediate attention, allowing them to respond to the message at their convenience. Sender continues with it processing just after delivering the message to the receiver, not being blocked.\r
  - Examples of asynchronous communication are emails, online forums, and collaborative documents.\r
\r
## 1.1.3. Services and threads\r
\r
A program, as previously said, is a group of sentences (actions and checks) and a running workflow. The workflow line determines the execution order for the sentences, with dependency of the program structure and it's data.\r
\r
Based on the number of workflow lines a program can have, processes are classified in terms of::\r
\r
- Sequential: The have only one control workflow (monothread)\r
- Concurrent: They have multiple control workflows (multithread).\r
\r
### Sequential program (Von Newmann architecture)\r
\r
The classical von Neumann model of computation4 is a familiar model of sequential behavior. According to this, when we start learning to code we learn the classical way, following Von Neummann's conceptual model.\r
\r
Sequential programs have a single workflow line. instructions on these applications are strictly sorted as a lineal time sequence.\r
\r
The program's behavior is a function of the kind of instructions it is made of and the order they are run (set by its input data)\r
\r
In sequential programs the time every sentence takes to complete has no consequences on the final result.\r
\r
![Sequential flowchart example](./../../media/unit1/sequential_flowchart.png)\r
\r
The way to test a sequential program (\`verify\` or \`debug\`) is so easy:\r
\r
- Every sentence gives the right output.\r
- The sentences are executed in the expected order.\r
\r
That's the basis of many basic test methods, as the "white-box" model.\r
\r
### Concurrent program\r
\r
In concurrent programs there are many workflow lines. The sentences are not run following the same order as in a sequential program the would do.\r
\r
In concurrent programs sequential order between sentences is still relevant. Nevertheless, in concurrent programs the order is only partial while in sequential programs the order is strict.\r
\r
![Concurrent flowchart example](./../../media/unit1/concurrent_flowchart.png)\r
\r
In concurrent programs the *sequencing* for concurrent processes is called **synchronization**.\r
\r
The partial order implies that concurrent programs does not have to be deterministic, that is, the application results with the same input data will not always be equal.\r
\r
::: danger Indeterminism\r
Having different outputs for the same inputs does not means that a concurrent program has any bug or malfunction.\r
:::\r
\r
Look at the following pseudo code example\r
\r
\`\`\`java {16-17,25-28}\r
public class TestClass {\r
    int x;\r
\r
    public void testMethod1() {\r
        for (int i=1; i <= 5; i++) {\r
            x++;\r
        }\r
    }\r
    public void testMethod2() {\r
        for (int j=1; j <= 5; j++) {\r
            x++;\r
        }\r
    }\r
    public void sequential() {\r
        x = 0;\r
        testMethod1();\r
        testMethod2();\r
        System.out.println(x);\r
    }\r
    public void parallel() {\r
        x = 0;\r
        // cobegin-coend means that both methods are run simultaneously\r
        // These sentences doesn't exist in Java. They are used for \r
        // sample purposes\r
        cobegin\r
            testMethod1();\r
            testMethod2();\r
        coend\r
        System.out.println(x);\r
    }\r
}\r
\`\`\`\r
\r
::: question\r
¿Which is the value for variable x after sequential method is run?\r
\r
¿Which is the value for variable x after parallel method is run?\r
:::\r
\r
::: info Historical review\r
The nature and models of interaction between processes of a concurrent program were studied and described by  **Dijkstra** (1968), Brinch **Hansen** (1973) and **Hoare** (1974).\r
\r
The academic study of concurrent algorithms started in the 1960s and they are the foundation for multiprocess operating systems in the 70's and 80's.\r
:::\r
\r
Concurrent programs inherent indeterminism makes its analysis and validation more complex. However, to test a concurrent program (\`verify\` or \`debug\`) the same techniques as for sequential ones are needed, adding these new ones:\r
\r
- Sentences can be validated individually only if the are not engaged to shared variables.\r
- If shared variables are used there can be many interference effects for concurrent sentences and testing can also become very difficult. <Badge type="danger" text="warning" vertical="middle" />\r
- Only when sequencing between tasks is made by using explicit **synchronization** sentences, time is not relevant on the result.\r
\r
::: warning Important\r
Three previous topics described above are the basis of concurrent programming.\r
\r
:eye: To know them, to understand them and to apply them in the right way is all about what we are gonna learn all this course.\r
:::\r
\r
### Threads vs processes\r
\r
A thread is the unit of execution within a process. A thread is just one of the workflow lines a concurrent process can have. A process is a heavyweight running unit.\r
\r
 A process can have anywhere from just one thread (the main thread) to many threads. If a process has more than one thread, every thread is a lightweight running unit.\r
\r
| Processes                        | Threads                                 |\r
| :------------------------------- | :-------------------------------------- |\r
| Have more than one thread        | A thread always exists within a process |\r
| They are independent from others | They share the process resources        |\r
| The OS manages them              | The process manages them                |\r
| they can communicate on the OS  | The process manages their communication |\r
\r
![Threads vs Processes](./../../media/unit1/threads_vs_process.jpg)\r
\r
In the above image you can see the relationship in the way a thread is created and its related process.\r
\r
- The process resides in its memory address space. Threads share that memory area. In the process's address space every thread has its reserved area, but all of them can share the process's global memory and his open resources (files, sockets, etc.)..\r
- We have already described a process PCD with the process information..\r
- In a similar way, have their TCB (Thread Control Block) where the threads store their specific information (program counter, stack pointer, thread status, registers and a PCB pointer).\r
\r
::: info Services\r
A service is a process commonly started during OS boot. As it does not need user interaction services are run as **daemons** run in *background mode*.\r
\r
They are called services because once started they are waiting for a process to ask them to do a taks.  As they have to manage request from several processes they usually are multithread programs.\r
:::\r
`]},{title:"2.4 Annex I - Curl",headers:[{level:2,title:"2.4.1 Get curl",slug:"_2-4-1-get-curl",link:"#_2-4-1-get-curl",children:[]},{level:2,title:"2.4.2 Calling a GET method",slug:"_2-4-2-calling-a-get-method",link:"#_2-4-2-calling-a-get-method",children:[]},{level:2,title:"2.4.2 Endpoints and routes",slug:"_2-4-2-endpoints-and-routes",link:"#_2-4-2-endpoints-and-routes",children:[]},{level:2,title:"2.4.3 HTTP methods and headers",slug:"_2-4-3-http-methods-and-headers",link:"#_2-4-3-http-methods-and-headers",children:[]},{level:2,title:"2.4.4 Authentication",slug:"_2-4-4-authentication",link:"#_2-4-4-authentication",children:[]},{level:2,title:"2.4.5 References",slug:"_2-4-5-references",link:"#_2-4-5-references",children:[]}],path:"/ca/unit2/curl_annex.html",pathLocale:"/ca/",extraFields:[`---\r
title: 2.4 Annex I - Curl\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.4 Annex I - Curl" />\r
\r
# 2.4 Annex I - Curl\r
\r
[[toc]]\r
\r
Whether it’s testing the output of a REST API on development or before deploying it to production, simply fetching a response from a website (for instance, to check it’s not down), or getting response times from a site / API Curl is practically omnipresent.\r
\r
Curl is a command-line tool that allows us to do HTTP requests from shell. This is its main use.\r
\r
::: info\r
The tool was about uploading and downloading data specified with a URL. It was a client-side program (the 'c'), a URL client, and would show the data (by default). So 'c' for Client and URL: cURL.\r
\r
Most of us pronounce "curl" with an initial k sound, just like the English word curl. It rhymes with words like girl.\r
\r
But it can also be spelled as c-URL which means see-URL, that is also a good definition about what the tool does.\r
:::\r
\r
Curl supports protocols that allow "data transfers" in either or both directions. It supports protocols which have a "URI format" and are described in an RFC, as curl works primarily with URLs (URIs really) as the input key that specifies the transfer.\r
\r
Curl actually supports these protocols:\r
\r
>DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP.\r
\r
## 2.4.1 Get curl\r
\r
curl is totally free, open and available. There are numerous ways to get it and install it for most operating systems and architecture. Some operating systems include curl by default.\r
\r
You can always download the source from [CURL official site](http://curl.se) or find binary packages to download from there.\r
\r
- Linux (Ubuntu / Debian). curl is installed by default. Anyway, you can add with the APT package manager\r
  > apt install curl\r
- Windows 10 comes with the curl tool bundled with the operating system since version 1804\r
    > download the latest official curl release for Windows from [curl windows binaries](http://curl.se/windows) and install that.\r
- MacOS comes with the curl tool bundled with the operating system since many years. If you want to upgrade to the latest version shipped by the curl project, we recommend installing homebrew (a macOS software package manager)\r
    > brew install curl\r
\r
## 2.4.2 Calling a GET method\r
\r
In its most basic form, a curl command will look like this:\r
\r
\`\`\`bash:no-line-numbers{1}\r
$> curl http://www.net.net\r
<head><title>Document Moved</title></head>\r
<body><h1>Object Moved</h1>This document may be found <a HREF="http://net.net">here</a></body>\r
\r
\`\`\`\r
\r
The default behavior for curl is to invoke an HTTP GET method on the given URL. This way, the program’s output for that command will be the whole HTTP response’s body (in this case, HTML which will be written as given on stdout.\r
\r
Many times we’ll wish to direct the response’s contents into a file. This is done with the \`-o (--output)\` argument, like this:\r
\r
> curl -o output.html www.net.net\r
> \r
> // Equivalent to \r
> \r
> curl www.net.net > output.html \r
\r
The URL must be in the last place, but optionally, you can specify the URL of the site you wish to call curl on with a \`-s (--silent) \`argument , allowing you to change the order of your arguments.\r
\r
curl -s http://www.net.net -o output.html\r
\r
In the previous example we are not getting the desired resource, because it has been moved or redirected to another URI. Using the \`-L (--location)\` mode, we can follow redirects and get the destination resource\r
\r
\`\`\`bash:no-line-numbers{1,3,5}\r
$> curl http://www.dataden.tech\r
Redirecting\r
$> curl -L http://www.dataden.tech\r
<html><head><title>Loading...</title></head><body><script type='text/javascript'>window.location.replace('http://www.dataden.tech/?js=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJKb2tlbiIsImV4cCI6MTYzMzM4OTE3OSwiaWF0IjoxNjMzMzgxOTc5LCJpc3MiOiJKb2tlbiIsImpzIjoxLCJqdGkiOiIycWxmMGdkZmg2YWlzaHMxdjgwdWx0aTQiLCJuYmYiOjE2MzMzODE5NzksInRzIjoxNjMzMzgxOTc5NzgzNzQ1fQ.y5LwDoSoZCpe2tzro_FbX7cSGIw4nx1XweNBqjpLXoo&sid=da601018-2557-11ec-a001-58f389072b17');<\/script></body></html>\r
$> curl -L http://www.net.net\r
<html>\r
        <head>\r
                <title>NET.NET [The first domain name on the Internet!]</title>\r
        </head>\r
        <body>\r
                <!-- Begin: Google Analytics -->\r
                <script>\r
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r
                  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\r
                  ga('create', 'UA-32196-28', 'auto');\r
                  ga('send', 'pageview');\r
                <\/script>\r
                <!-- End: Google Analytics -->\r
                <center>\r
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />\r
                        <font face="impact, Arial, Helvetica, sans-serif" size="14">\r
                                NET.NET\r
                        </font>\r
                        <br /><br /><br /><br />\r
                        <font face="Arial, Helvetica, sans-serif" size="1">\r
                                <a href="http://who.godaddy.com/whoischeck.aspx?domain=NET.NET" target="_blank">NET.NET</a> is the first and the best domain name on the Internet!\r
                                <br />\r
                                Coming Soon...\r
                        </font>\r
                </center>\r
        </body>\r
</html>\r
\`\`\`\r
\r
So far we have only get the html page. If we want to see also the headers of our GET request and response headers, we have to user the \`-v (--verbose)\` option  to get full information about the HTTP protocol.\r
\r
\`\`\`bash:no-line-numbers{1}\r
$> curl -v  http://www.net.net\r
*   Trying 34.250.90.28:80...\r
* TCP_NODELAY set\r
* Connected to net.net (34.250.90.28) port 80 (#0)\r
> GET / HTTP/1.1\r
> Host: net.net\r
> User-Agent: curl/7.68.0\r
> Accept: */*\r
>\r
* Mark bundle as not supporting multiuse\r
< HTTP/1.1 200 OK\r
< Cache-Control: private\r
< Content-Type: text/html\r
< Server: Microsoft-IIS/10.0\r
< Set-Cookie: ASPSESSIONIDASRSRRAR=IMFFLMBBBIFJNLNDHLOACDAI; path=/\r
< X-Powered-By: ASP.NET\r
< Date: Mon, 04 Oct 2021 21:40:49 GMT\r
< Content-Length: 1080\r
<\r
<html>\r
        <head>\r
                <title>NET.NET [The first domain name on the Internet!]</title>\r
        </head>\r
        ...\r
\`\`\`\r
\r
In the previous output requests header are marked with \`>\` while response header are marked with \`<\`.\r
\r
::: info short and long command line options\r
Command line options pass on information to curl about how you want it to behave.\r
\r
Single-letter options are convenient since they are quick to write and use, but as there are a limited number of letters and not all options are available like that.\r
Long option names are therefore provided for those. Also, as a convenience and to allow scripts to become more readable, most short options have longer name aliases.\r
\r
Short options are preceded by the minus symbol and a single letter immediately following it. They can be used with just that option name. You can then also combine several single-letter options after the minus.\r
\r
> $> curl -v -L http://example.com\r
> $> curl -vL http://example.com\r
\r
Long options are always written with two dashes and then the name, and you can only write one option name per double-dash.\r
\r
> $> curl --verbose --location http://example.com\r
\r
:::\r
\r
Finally, we can access partially the verbose mode information using the \`-i (--include)\` or \`-I (--head)\` to get the complete answer from the server (headers & data) or just the headers, respectively.\r
\r
\`\`\`bash:no-line-numbers{1}\r
$>  curl -I https://jsonplaceholder.typicode.com/todos/1\r
HTTP/2 200\r
date: Mon, 04 Oct 2021 21:57:55 GMT\r
content-type: application/json; charset=utf-8\r
content-length: 83\r
x-powered-by: Express\r
x-ratelimit-limit: 1000\r
x-ratelimit-remaining: 999\r
x-ratelimit-reset: 1631546224\r
vary: Origin, Accept-Encoding\r
access-control-allow-credentials: true\r
cache-control: max-age=43200\r
pragma: no-cache\r
expires: -1\r
x-content-type-options: nosniff\r
etag: W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"\r
via: 1.1 vegur\r
cf-cache-status: HIT\r
age: 10926\r
accept-ranges: bytes\r
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"\r
report-to: {"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LxJlkSosQdWmBFBOx1fB6zrbjSbU0iStl7jjtlVL27CtOEPxem%2Ffl9y%2BCajMUopcZINOEsaufiU8A2glOLEmNpO5a40%2FyWb%2B4dBuspS8VGWnCRW4jxBBmh%2F3FbupAEaxy66TUPariKJLqe3PL5iq"}],"group":"cf-nel","max_age":604800}\r
nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}\r
server: cloudflare\r
cf-ray: 6991ab2c1a5037c7-MAD\r
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400\r
\`\`\`\r
\r
Finally, adding the \`-w "%{time_total}\\n"\` will simply output the total time it took to fetch the response from the given domain.\r
\r
## 2.4.2 Endpoints and routes\r
\r
The term endpoint is focused on the URL that is used to make a request.\r
\r
For a typical web API, endpoints are URLs, and they are described in the API's documentation so programmers know how to use/consume them. For example, a particular web API may have this endpoint:\r
\r
> GET https://my-api.com/Library/Books\r
\r
This would return a list of all books in the library.\r
\r
A "route" is typically a part of URL endpoint that routes the pages to different components.\r
\r
> GET https://my-api.com/Library/Books/341 \r
\r
This would access book with id 341 using the Library/Books endpoint\r
\r
For instance, for [SWAPI (Star Wars API)](https://swapi.dev/) the endpoint is \`https://swapi.dev/api/\`. That's the entry point for all requests.\r
\r
Thus there are many routes depending on the information we want to access/add/modify/delete.\r
\r
\`\`\`java:no-line-numbers\r
$> curl https://swapi.dev/api/people/1\r
$> curl https://swapi.dev/api/planet/3\r
$> curl https://swapi.dev/api/vehicles\r
\`\`\`\r
\r
## 2.4.3 HTTP methods and headers\r
\r
In every HTTP request, there's a method. Sometimes called a verb. The most commonly used ones are GET, POST, HEAD and PUT.\r
\r
POST is the HTTP method that was invented to send data to a receiving web application, and it is how most common HTML forms on the web works.\r
\r
When the data is sent by a browser it will send it URL encoded, as a serialized name=value pairs separated with ampersand symbols (&).\r
\r
You send such data with curl's \`-d (--data)\` option like this:\r
\r
> curl -d 'name=admin&shoesize=12' http://example.com/\r
\r
Curl selects which methods to use on its own depending on what action to ask for. -d will do POST, -I will do HEAD and so on. If you use the \`-X (--request)\` option you can change the method keyword curl selects.\r
\r
> curl -X POST -d 'imageSize=big&imageType=jpg' http://example.org/\r
\r
POSTing with curl's -d option will make it include a default header that looks like \`Content-Type: application/x-www-form-urlencoded\`. That's what your typical browser will use for a plain POST.\r
\r
If that header is not good enough for you, you should, of course, replace that and instead provide the correct one. Such as if you POST JSON to a server and want to more accurately tell the server about what the content is:\r
\r
> curl -X "POST" -d '{"imageSize":"big","imageType":"jpg","scale":"false"}' -H 'Content-Type: application/json' https://example.com\r
\r
## 2.4.4 Authentication\r
\r
Each HTTP request can be made authenticated. If a server or a proxy wants the user to provide proof that they have the correct credentials to access a URL or perform an action, it can send back a HTTP response code that informs the client that it needs to provide a correct HTTP authentication header in the request to be allowed.\r
\r
To tell curl to do an authenticated HTTP request, you use the \`-u (--user)\` option to provide user name and password (separated with a colon). Like this:\r
\r
> curl --user daniel:secret http://example.com/\r
\r
This will make curl use the default "Basic" HTTP authentication method.\r
\r
Many applications and services make use of a secret key or an Authorization token provided by the service provider when you create the service.\r
\r
[Trello API Introduction](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/)\r
\r
[Azure Translator API Reference](https://docs.microsoft.com/es-es/azure/cognitive-services/translator/reference/v3-0-translate)\r
\r
If we want to use the Azure service for translate text, first we need to obtain the secret key and send it with each call to identify the user and get the permission to use the service.\r
\r
\`\`\`java:no-line-numbers\r
$> curl -X POST "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en&to=it" -H "Ocp-Apim-Subscription-Key: <here goes your susbcription key>" -H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'Hola, com esteu?'}]"\r
[{"detectedLanguage":{"language":"ca","score":1.0},"translations":[{"text":"Hello, how are you?","to":"en"},{"text":"Ciao come stai?","to":"it"}]}]\r
\`\`\`\r
\r
Sometimes we can get a temporal authorization by getting an Authorization token, that later must be provided to access the service during a short period of time. Once the time expires, another token must be requested.\r
The \`Authorization: Bearer <token>\` header is used.\r
\r
\`\`\`java:no-line-numbers{1,3,5}\r
$> curl -X POST "https://api.cognitive.microsoft.com/sts/v1.0/issueToken" -H "Ocp-Apim-Subscription-Key: <here goes the secret key>" -d {}\r
eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJnbG9iYWwiLCJzdWJzY3JpcHRpb24taWQiOiJjOTM1ZjNhNjIwMjM0ZTVhYTIyNzUzMmI4ZGQ2ZmRkYyIsInByb2R1Y3QtaWQiOiJUZXh0VHJhbnNsYXRvci5GMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy9iMTFlODUwMS1kNjg2LTRmNjctODg4NC0wMjkzYmNkYTQ5NGEvcmVzb3VyY2VHcm91cHMvVGVzdFBTUC9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3JQU1AtVk1NIiwic2NvcGUiOiJodHRwczovL2FwaS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS8iLCJhdWQiOiJ1cm46bXMubWljcm9zb2Z0dHJhbnNsYXRvciIsImV4cCI6MTYzMzM4OTcxMCwiaXNzIjoidXJuOm1zLmNvZ25pdGl2ZXNlcnZpY2VzIn0.MFr7ka5azMv-2ZakpdJc6GIWAsp4SJKN6Hfe1LzmNJE\r
$> curl -X POST "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en&to=it" -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJnbG9iYWwiLCJzdWJzY3JpcHRpb24taWQiOiJjOTM1ZjNhNjIwMjM0ZTVhYTIyNzUzMmI4ZGQ2ZmRkYyIsInByb2R1Y3QtaWQiOiJUZXh0VHJhbnNsYXRvci5GMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy9iMTFlODUwMS1kNjg2LTRmNjctODg4NC0wMjkzYmNkYTQ5NGEvcmVzb3VyY2VHcm91cHMvVGVzdFBTUC9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3JQU1AtVk1NIiwic2NvcGUiOiJodHRwczovL2FwaS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS8iLCJhdWQiOiJ1cm46bXMubWljcm9zb2Z0dHJhbnNsYXRvciIsImV4cCI6MTYzMzMwMTUxNywiaXNzIjoidXJuOm1zLmNvZ25pdGl2ZXNlcnZpY2VzIn0.0hyyBNr22E2sIO_ZBlTiBePXM_KE_5hQOCeHxz3US44" -H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'Hola, com esteu?'}]"\r
{"error":{"code":401000,"message":"The request is not authorized because credentials are missing or invalid."}}\r
$> curl -X POST "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en&to=it" -H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJnbG9iYWwiLCJzdWJzY3JpcHRpb24taWQiOiJjOTM1ZjNhNjIwMjM0ZTVhYTIyNzUzMmI4ZGQ2ZmRkYyIsInByb2R1Y3QtaWQiOiJUZXh0VHJhbnNsYXRvci5GMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy9iMTFlODUwMS1kNjg2LTRmNjctODg4NC0wMjkzYmNkYTQ5NGEvcmVzb3VyY2VHcm91cHMvVGVzdFBTUC9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3JQU1AtVk1NIiwic2NvcGUiOiJodHRwczovL2FwaS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS8iLCJhdWQiOiJ1cm46bXMubWljcm9zb2Z0dHJhbnNsYXRvciIsImV4cCI6MTYzMzM4OTcxMCwiaXNzIjoidXJuOm1zLmNvZ25pdGl2ZXNlcnZpY2VzIn0.MFr7ka5azMv-2ZakpdJc6GIWAsp4SJKN6Hfe1LzmNJE" -H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'Hola, com esteu?'}]"\r
[{"detectedLanguage":{"language":"ca","score":1.0},"translations":[{"text":"Hello, how are you?","to":"en"},{"text":"Ciao come stai?","to":"it"}]}]\r
\`\`\`\r
## 2.4.5 References\r
\r
[Everything curl](https://everything.curl.dev/) is a detailed and totally free book available that explains basically everything there is to know about curl.\r
\r
[freecodecamp.org](https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/)\r
\r
[curl official site](https://curl.se/)\r
`]},{title:"2 Introduction",headers:[{level:2,title:"Goals",slug:"goals",link:"#goals",children:[]}],path:"/ca/unit2/",pathLocale:"/ca/",extraFields:[`---\r
title: 2 Introduction\r
---\r
\r
# Unit 2. Process programming\r
\r
Once we know about key concepts in concurrency, we can also differentiate programs and processes. In this second unit we will learn how we can launch a program from our own code, that is, how to create a process from a running process.\r
\r
In addition to launch programs and create new processes, there's a relationship between the parent process and its children that allow them to communicate exchanging information. This is the way our programs will be able to launch other applications, os command or even applications developed by us. Furthermore, parent-child processes allow synchronization and communication among them.\r
\r
## Goals\r
\r
The goals for this unit are:\r
\r
- To know Java classes for process management\r
- To monitor and control process lifecycle\r
- To control parent-child communications\r
- To use synchronization methods for processes and sub-processes\r
- To learn how pipes communications works\r
- To learn curl syntax and use it for API REST testing purposes\r
- To create applications that run parallel tasks\r
`]},{title:"2.3 Handling Process Streams",headers:[{level:2,title:"2.3.1  Redirecting Standard Input and Output",slug:"_2-3-1-redirecting-standard-input-and-output",link:"#_2-3-1-redirecting-standard-input-and-output",children:[{level:3,title:"getInputStream()",slug:"getinputstream",link:"#getinputstream",children:[]},{level:3,title:"getErrorStream()",slug:"geterrorstream",link:"#geterrorstream",children:[]},{level:3,title:"getOutputStream()",slug:"getoutputstream",link:"#getoutputstream",children:[]},{level:3,title:"Inheriting the I/O of the parent process",slug:"inheriting-the-i-o-of-the-parent-process",link:"#inheriting-the-i-o-of-the-parent-process",children:[]},{level:3,title:"Pipelines",slug:"pipelines",link:"#pipelines",children:[]}]},{level:2,title:"2.3.2 Redirecting Standard Input and Output",slug:"_2-3-2-redirecting-standard-input-and-output",link:"#_2-3-2-redirecting-standard-input-and-output",children:[]},{level:2,title:"2.3.3 Current Java Process Information",slug:"_2-3-3-current-java-process-information",link:"#_2-3-3-current-java-process-information",children:[]}],path:"/ca/unit2/iostreams.html",pathLocale:"/ca/",extraFields:[`---\r
title: 2.3 Handling Process Streams\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.3 Handling Process Streams" />\r
\r
# 2.3 Handling Process Streams\r
\r
[[toc]]\r
\r
## 2.3.1  Redirecting Standard Input and Output\r
\r
By default, the created subprocess does not have its terminal or console. All its standard I/O (i.e., stdin, stdout, stderr) operations will be sent to the parent process. Thereby the parent process can use these streams to feed input to and get output from the subprocess.\r
\r
Consequently, this gives us a huge amount of flexibility as it gives us control over the input/output of our sub-process.\r
\r
::: info OS I/O streams and pipes\r
Streams in Linux, like almost everything else, are treated as though they were files.\r
\r
Each file associated with a process is allocated a unique number to identify it. These values are always used for stdin, stdout, and stderr:\r
\r
- 0: stdin\r
- 1: stdout\r
- 2: stderr\r
\r
So we can manage these three streams in different ways. We can redirect a command’s output (stdout) to a file and still see any error messages (stderr) in the terminal window, or we can get input to a command from another command or file. Let's look at some examples:\r
\r
\`\`\`bash:no-line-numbers\r
# Redirects ls output to a file\r
ls > capture.txt  \r
# Redirects ls output to cat input\r
ls | cat  \r
# Redirects program.sh output to capture.txt and its errors to error.txt\r
./program.sh 1> capture.txt 2> error.txt \r
# Redirects program.sh output and its errors to the same file, capture.txt\r
./program.sh > capture.txt 2>&1\r
# Redirects program.sh input from dummy.txt contents\r
./program.sh < dummy.txt\r
# Redirects output form first command to program.sh input\r
cat dummy.txt | ./program.sh\r
\`\`\`\r
\r
[Introduction to Linux I/O Redirection](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection)\r
:::\r
\r
In a parent-child process relationship I/O streams are also redirected from child process to parent, using 3 pipes, one per each standard stream. Those pipes  can be used like in a Linux system.\r
\r
![alt_text](./../../media/unit2/pipe_with_two.jpg)\r
\r
### getInputStream()\r
\r
We can fetch the output generated by a subprocess and consume within the parent process thus allowing share information between the processes\r
\r
\`\`\`java\r
Process p = pbuilder.start();\r
BufferedReader processOutput = \r
    new BufferedReader(new InputStreamReader(p.getInputStream()));\r
\r
String linea;    \r
while ((linea = processOutput.readLine()) != null) {\r
    System.out.println("> " + linea);        \r
}            \r
processOutput.close();    \r
\`\`\`\r
\r
![alt_text](./../../media/unit2/Java_Stream_Readers_BufferedReaders.jpg)\r
\r
::: warning Charset and encodings\r
From the time being computer science started we've been in trouble with encodings and charsets. And windows console is not an exception.\r
\r
Terminal in Windows was also known as "DOS prompt": so a way to run DOS programs in Windows, so they keep the code page of DOS. Microsoft dislikes non-backward compatible changes, so your DOS program should works also on Windows terminal without problem.\r
\r
Wikipedia indicates that **CP850** has theoretically been "largely replaced" by **Windows-1252** and, later, Unicode, but yet it's here, right in the OS's terminal.\r
\r
Then, if we want to print information from the console in our applications we must deal with the right charset and encoding, that is, CP-850.\r
\r
Fortunately, InputStreamReader has a constructor to manage streams with any encoding, so we must use it when working with console commands or applications.\r
\r
\`\`\`java:no-line-numbers\r
new InputStreamReader(p.getInputStream(), "CP850");\r
\`\`\`\r
\r
> We can force Netbeans to use a UTF-8 as default encoding. To do so we must modify its config file \`C:/Program Files/Netbeeans-xx.x/netbeans/etc/netbeans.conf\`, changing directive \`netbeans_default_option\` and adding **-J-Dfile.encoding=UTF-8** to the end.\r
\r
:::\r
\r
### getErrorStream()\r
\r
Interestingly we can also fetch the errors generated from the subprocess and thereon perform some processing.\r
\r
if error output has been redirected by calling method  \`ProcessBuilder.redirectErrorStream(true)\` then, the error stream and the output stream will be shown using the same stream.\r
\r
If we want to have it differentiated from the output, then we can use asimilar schema than before\r
\r
\`\`\`java\r
Process p = pbuilder.start();\r
BufferedReader processError = \r
    new BufferedReader(new InputStreamReader(p.getErrorStream()));\r
int value = Integer.parseInt(processError.readLine());\r
processError.close();\r
\`\`\`\r
\r
::: info Decorator or Wrapper design pattern\r
In both input and error streams we are getting information from a BufferedReader. Although we are not aware of using a design pattern, we are using the **decorator design pattern"* or the so called **wrapper**.\r
\r
> Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the required behaviors.\r
\r
[Refactoring.Guru design patterns](https://refactoring.guru/design-patterns/java)\r
:::\r
\r
Let's look at a complete example code using all the above operations\r
\r
\`\`\`java\r
import java.io.*;\r
public class Ejercicio2 {\r
    public static void main(String[] args) {\r
        String comando = "notepad";\r
        ProcessBuilder pbuilder = new ProcessBuilder (comando);\r
        Process p = null;\r
        try {\r
            p = pbuilder.start();\r
            // 1- Procedemos a leer lo que devuelve el proceso hijo\r
            InputStream is = p.getInputStream();\r
            // 2- Lo convertimos en un InputStreamReader\r
            // De esta forma podemos leer caracteres en vez de bytes\r
            // El InputStreamReader nos permite gestionar diferentes codificaciones\r
            InputStreamReader isr = new InputStreamReader(is);\r
            // 2- Para mejorar el rendimiento hacemos un wrapper sobre un BufferedReader\r
            // De esta forma podemos leer enteros, cadenas o incluso líneas.\r
            BufferedReader br = new BufferedReader(isr);\r
\r
            // A Continuación leemos todo como una cadena, línea a línea\r
            String linea;\r
            while ((linea = br.readLine()) != null) \r
                System.out.println(linea);\r
        } catch (Exception e) {\r
            System.out.println("Error en: "+comando);\r
            e.printStackTrace();\r
        } finally {\r
            // Para finalizar, cerramos los recursos abiertos\r
            br.close();\r
            isr.close();\r
            is.close();\r
        }    \r
    }\r
}\r
\`\`\`\r
\r
### getOutputStream()\r
\r
We can even send input to a subprocess from a parent process\r
\r
There are three different ways of sending information to a child process. The first one is based on an OutputStream. Here no wrapper is used and the programmer has to manage all elements of the stream flow. From newline characters and type conversions to force sending information over the stream.\r
\r
\`\`\`java\r
// Low-level objects. We have to manage all elements of communication\r
OutputStream toProcess = p.getOutputStream();\r
toProcess.write((String.valueOf(number1)).getBytes("UTF-8"));\r
toProcess.write("\\n".getBytes());\r
toProcess.flush();\r
\`\`\`\r
\r
The next one is based on a Writer object as a wrapper for the OutputStream, where communication management is easier, but the programmer still has to manage elements as new lines.\r
\r
\`\`\`java\r
Writer w = new OutputStreamWriter(p.getOutputStream(), "UTF-8");\r
w.write("send to child\\n");\r
\`\`\`\r
\r
Finally, the top-level wrapper for using the OutputStream is the PrintWriter object, where we can use the wrapper with the same methods as the System.out to handle child communication flow.\r
\r
\`\`\`java\r
PrintWriter toProcess = new PrintWriter(\r
    new BufferedWriter(\r
        new OutputStreamWriter(\r
            p.getOutputStream(), "UTF-8")), true);\r
toProcess.println("sent to child");\r
\`\`\`\r
\r
### Inheriting the I/O of the parent process\r
\r
With the inheritIO() method We can redirect the sub-process I/O to the standard I/O of the current process (parent process)\r
\r
\`\`\`java\r
ProcessBuilder processBuilder = new ProcessBuilder("/bin/sh", "-c", "echo hello");\r
\r
processBuilder.inheritIO();\r
Process process = processBuilder.start();\r
\r
int exitCode = process.waitFor();\r
\`\`\`\r
\r
In the above example, by using the inheritIO() method we see the output of a simple command in the console in our IDE.\r
\r
### Pipelines\r
\r
Java 9 introduced the concept of pipelines to the ProcessBuilder API:\r
\r
\`\`\`java:no-line-numbers\r
public static List<Process> startPipeline​(List<ProcessBuilder> builders)\r
\`\`\`\r
\r
Using the startPipeline method we can pass a list of ProcessBuilder objects. This static method will then start a Process for each ProcessBuilder. Thus, creating a pipeline of processes which are linked by their standard output and standard input streams.\r
\r
For example, if we want to run something like this:\r
\r
> find . -name *.java -type f | wc -l\r
\r
What we'd do is create a process builder for each isolated command and compose them into a pipeline\r
\r
\`\`\`java\r
List builders = Arrays.asList(\r
    new ProcessBuilder("find", "src", "-name", "*.java", "-type", "f"), \r
    new ProcessBuilder("wc", "-l"));\r
\r
List processes = ProcessBuilder.startPipeline(builders);\r
Process last = processes.get(processes.size() - 1);\r
\r
// We can get lats process output to get the final results\r
\`\`\`\r
\r
In the example, we're searching for all the java files inside the src directory and piping the results into another process to count them.\r
\r
## 2.3.2 Redirecting Standard Input and Output\r
\r
In the real world, we will probably want to capture the results of our running processes inside a log file for further analysis. Luckily the ProcessBuilder API has built-in support for exactly this.\r
\r
By default, our process reads input from a pipe. We can access this pipe via the output stream returned by Process.getOutputStream().\r
\r
However, as we'll see shortly, the standard output may be redirected to another source such as a file using the method \`redirectOutput(File)\`. In this case, getOutputStream() will return a ProcessBuilder.NullOutputStream.\r
\r
Let's prepare an example to print out the version of Java. But this time let's redirect the output to a log file instead of the standard output pipe:\r
\r
\`\`\`java\r
ProcessBuilder processBuilder = new ProcessBuilder("java", "-version");\r
\r
processBuilder.redirectErrorStream(true);\r
File log = folder.newFile("java-version.log");\r
processBuilder.redirectOutput(log);\r
\r
Process process = processBuilder.start();\r
\`\`\`\r
\r
In the above example, we create a new temporary file called log and tell our ProcessBuilder to redirect output to this file destination.\r
\r
Now let's take a look at a slight variation on this example. For instance when we wish to \`append to\` a log file rather than create a new one each time:\r
\r
\`\`\`java\r
File log = tempFolder.newFile("java-version-append.log");\r
processBuilder.redirectErrorStream(true);\r
processBuilder.redirectOutput(Redirect.appendTo(log));\r
\`\`\`\r
\r
It's also important to mention the call to \`redirectErrorStream(true)\`. In case of any errors, the error output will be merged into the normal process output file.\r
\r
We can also redirect error stream an input stream for the subprocess with methods\r
\r
- redirectError(File)\r
- redirectInput(File)\r
\r
And for each of them we can also set the following redirections\r
\r
- Redirect.to(File);\r
- Redirect.from(File);\r
- Redirect.appendTo(File);\r
- Redirect.DISCARD\r
\r
## 2.3.3 Current Java Process Information\r
\r
We can now obtain a lot of information about the process via the API \`java.lang.ProcessHandle.Info\` API:\r
\r
- the command used to start the process\r
- the arguments of the command\r
- time instant when the process was started\r
- total time spent by it and the user who created it\r
\r
Here's how we can do that\r
\r
\`\`\`java\r
ProcessHandle processHandle = ProcessHandle.current();\r
ProcessHandle.Info processInfo = processHandle.info();\r
\r
System.out.println("PID: " + processHandle.pid());\r
System.out.println("Arguments: " + processInfo.arguments());\r
System.out.println("Command: " + processInfo.command());\r
System.out.println("Instant: " + processInfo.startInstant());\r
System.out.println("Total CPU duration: " + processInfo.totalCpuDuration());\r
System.out.println("User: " + processInfo.user());\r
\`\`\`\r
\r
It is also possible to get the process information of a newly spawned process. In this case, after we spawn the process and get an instance of the \`java.lang.Process\`, we invoke the \`toHandle()\` method on it to get an instance of java.lang.ProcessHandle.\r
\r
\`\`\`java\r
Process process = processBuilder.inheritIO().start();\r
ProcessHandle processHandle = process.toHandle();\r
\`\`\`\r
\r
The rest of the details remain the same as in the section above\r
`]},{title:"2.2 Process management in Java - ProcessBuilder and Process",headers:[{level:2,title:"2.2.1 Preparation and setting of a process",slug:"_2-2-1-preparation-and-setting-of-a-process",link:"#_2-2-1-preparation-and-setting-of-a-process",children:[{level:3,title:"Setting the command at runtime",slug:"setting-the-command-at-runtime",link:"#setting-the-command-at-runtime",children:[]},{level:3,title:"Additional settings for a process",slug:"additional-settings-for-a-process",link:"#additional-settings-for-a-process",children:[]}]},{level:2,title:"2.2.2 Process control from parent",slug:"_2-2-2-process-control-from-parent",link:"#_2-2-2-process-control-from-parent",children:[{level:3,title:"Spawn a java application from a class into the same project",slug:"spawn-a-java-application-from-a-class-into-the-same-project",link:"#spawn-a-java-application-from-a-class-into-the-same-project",children:[]}]}],path:"/ca/unit2/processbuilder.html",pathLocale:"/ca/",extraFields:[`---\r
title: 2.2 Process management in Java - ProcessBuilder and Process\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.2 Process management in Java - ProcessBuilder and Process" />\r
\r
# 2.2 Process management in Java ProcessBuilder and Process\r
\r
[[toc]]\r
\r
## 2.2.1 Preparation and setting of a process\r
\r
The class to set the running attributes for a new process, before it is being run, is the \`ProcessBuilder\` class.\r
\r
> [Specification java.lang.ProcessBuilder](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html)\r
\r
This is an auxiliary class for the Process and is instantiated to manage a collection of process attributes. We can invoke the \`start\` method to create a new process with the attributes defined by the instance of the ProcessBuilder class.\r
\r
Repeated calls to the start method would create a new process with the same attributes.\r
\r
The ProcessBuilder class defines two constructors, such as:\r
\r
\`\`\`java:no-line-numbers\r
ProcessBuilder(List<String> command)\r
ProcessBuilder(String... command)\r
\`\`\`\r
\r
The meaning implied by the parameters passed to both constructors is same. In the first constructor, the command to be executed, along with command line arguments, is passed in a list of strings. And, in the second constructor, the command and the command line arguments are specified through the varargs parameter. We can use either of the constructors, depending upon the way to pass the parameter.\r
\r
::: danger Arguments vs Parameters\r
If we want to launch a command with parameters, the command cannot be sent to ProcessBuilder in raw mode, it must be processed and converted into a List in order to make it work.\r
\r
\`\`\`java\r
// Different modes to pass the command to ProcessBuilder constructors\r
// 1st mode: using a string. It fails with parameters, \r
// Only works with commands having arguments\r
String command1 = "notepad.exe prueba1.txt"\r
ProcessBuilder pb = new ProcessBuilder(command1);\r
\r
// 2nd mode: using an array of strings. It also works with parameters\r
String[] command2 = {"cmd", "/c", "dir", "/o"};\r
ProcessBuilder pb = new ProcessBuilder(command2);\r
\r
// 3rd mode: using a string and splitting it to convert into a List\r
String command3 =  "c:/windows/system32/shutdown -s -t 0";  \r
// Regular expresion \\s means splitting the string by blank spaces\r
ProcessBuilder pb = new ProcessBuilder(command3.split("\\\\s"));\r
\`\`\`\r
\r
:::\r
\r
::: warning OS shutdown\r
You can use shutdown -s command to shutdown system. For windows OS, you need to provide full path of shutdown command e.g. C:\\Windows\\System32\\shutdown.\r
\r
Here you can use -s switch to shutdown system, -r switch to restart system, -h to put the system into hibernation, and -t switch to specify time delay.\r
\r
[Windows shutdown reference](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown)\r
:::\r
\r
::: question Activity psp.activities.U2A1_Shutdowner\r
Create a new Java application project (package psp.activities & main class U2A1_Shutdowner)\r
Using the command line, ask the user for the action he wants to do with the computer (shutdown ,restart or suspend) and how much time he needs before shutting down the system.\r
\r
Find information about the shutdown command in GNU/Linux and make your app work in both systems.\r
\r
Your app has to prepare the right command for the answers the user has given and for the OS it is running on.\r
\r
Get the ProcessBuilder.command() result and show it on the console in a readable format.\r
:::\r
\r
:::details U2A1_Shutdowner solution\r
\r
\`\`\`java\r
public class U2A1_Shutdowner {\r
\r
    public static void main(String[] args) throws IOException {\r
        // Ask for the required information to prepare the command\r
        Scanner keyboard = new Scanner(System.in);\r
        \r
        System.out.print("Select your option (s-shutdown / r-reboot / h-hibernate): ");\r
        String shutdownOption = keyboard.nextLine();        \r
        \r
        System.out.print("How much seconds will the command wait to be run? (0 means immediately): ");\r
        String shutdownTime = keyboard.nextLine();        \r
        \r
        // Prepare the command\r
        String command;\r
        if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {\r
            command = "C:/Windows/System32/shutdown -" + shutdownOption + " -t " + shutdownTime;\r
        } else {\r
            command = "shutdown -" + shutdownOption + " -t " + shutdownTime;\r
        }\r
        \r
        // Prepare the process and launch it\r
        ProcessBuilder shutdowner = new ProcessBuilder(command.split("\\\\s"));\r
        //shutdowner.start();\r
        \r
        // Show the command to be run\r
        System.out.print("El comando a ejecutar es:  ");\r
        for (String commandPart: shutdowner.command()) {\r
            System.out.print(commandPart + " ");\r
        }\r
        System.out.println("");\r
    }    \r
}\r
\`\`\`\r
\r
:::\r
\r
### Setting the command at runtime\r
\r
If we want to set the command to be run at runtime, or at the time the ProcessBuilder instance is created we still don't know the command, it can be set later by using the command(String).\r
\r
The same way as the constructors, we have two versions of command method\r
\r
\`\`\`java:no-line-numbers\r
    command(List<String> command)\r
    command(String... command)\r
\`\`\`\r
\r
and there's also another command method, without parameters, to retrieve the command and parameters already set for the ProcessBuilder instance. Once we have the parameters list, we can modify it using List methods.\r
\r
\`\`\`java\r
// Sets and modifies the command after ProcessBuilder object is created\r
String command = "java -jar install.jar -install"; // tmp dir is missing\r
ProcessBuilder pbuilder = new ProcessBuilder(command.split("\\\\s"));\r
if (isWindows) {\r
    pbuilder.command().add(0, "cmd"); // Sets the 1st element\r
    pbuilder.command().add(1, "/c"); // Sets the 2nd element\r
    pbuilder.command().add("c:/temp"); // Sets the last element\r
    // Command to run cmd /c java -jar install.jar -install c:/temp\r
} else {\r
    pbuilder.command().add(0, "sh"); // Sets the 1st element\r
    pbuilder.command().add(1, "-c"); // Sets the 2nd element\r
    pbuilder.command().add("/tmp"); // Sets the last element\r
    // Command to run: sh -c java -jar install.jar -install /tmp\r
}\r
\r
// Starts the process\r
pbuilder.start();\r
\`\`\`\r
\r
### Additional settings for a process\r
\r
Some of the settings that can be changed for a process are:\r
\r
- Set the working directory where the process will be run\r
  We can override the default working directory of the current process by calling the directory method and passing a File object. **By default, the current working directory is set to the value returned by the user.dir system property**.\r
\r
    \`\`\`java\r
    // Change working directory for the running process\r
    pbuilder.directory(new File(System.getProperty("user.home")));\r
    \`\`\`\r
\r
- Set-up a custom key-value map and modify an existing one using builder.environment()\r
\r
    \`\`\`java\r
    // Retrieve and modify the process environment\r
    Map<String, String> environment = pbuilder.environment();\r
    // Get the PATH environment variable and add a new directory\r
    String systemPath = environment.get("path") + ";c:/users/public";\r
    environment.replace("path", systemPath);\r
    // Add a new environment variable and use it as a part of the command\r
    environment.put("GREETING", "Hola Mundo");\r
    processBuilder.command("/bin/bash", "-c", "echo $GREETING");\r
    \`\`\`\r
\r
    ::: info Environment variables vs System properties\r
    With Runtime we also accessed System properties, that are different from this environment ones.\r
    :::\r
\r
- Redirect input and output streams to custom replacements\r
- Inherit both of them to the streams of the current JVM process using builder.inheritIO()\r
  \r
  *This two settings will be covered later in this unit*.\r
\r
::: question Activity psp.activities.U2A2_WorkingDirectory\r
Create a new Java application project (package psp.activities & main class U2A2_WorkingDirectory    )\r
Prepare a process to run the dir/ls command to check that the directory listing is for the directory pointed by the user.dir property.\r
In the same application, change the value for the user.dir property.\r
Finally, set a working directory for the process.\r
\r
Print the user.dir environment value for the three scenarios after being changed.\r
:::\r
\r
::: details U2A2_WorkingDirectory solution\r
\r
\`\`\`java\r
public class U2A2_WorkingDirectory {\r
\r
    public static void main(String[] args) throws IOException {\r
        // Prepare the command\r
        String command;\r
        if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {\r
            command = "cmd /c dir";\r
        } else {\r
            command = "sh -c ls";\r
        }\r
        \r
        // Prepare the process and launch it\r
        ProcessBuilder commander = new ProcessBuilder(command.split("\\\\s"));\r
        \r
        //1st - Default working directory\r
        System.out.println("Working directory: " + commander.directory());\r
        System.out.println("user.dir variable: " + System.getProperty("user.dir"));\r
        \r
        //2nd - Set the user.dir\r
        System.setProperty("user.dir", System.getProperty("user.home"));\r
        System.out.println("Working directory: " + commander.directory());\r
        System.out.println("user.dir variable: " + System.getProperty("user.dir"));\r
        \r
        // 3rd - Change the working directory\r
        commander.directory(new File(System.getProperty("user.home")));\r
        System.out.println("Working directory: " + commander.directory().toString());\r
        System.out.println("user.dir variable: " + System.getProperty("user.dir"));\r
        \r
        commander.start();        \r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
<div class="pagebreak"></div>\r
\r
## 2.2.2 Process control from parent\r
\r
The \`Process\` is an abstract class defined in the java.lang package that encapsulates the runtime information of a program in execution. The \`start\` method invoked by the ProcessBuilder class returns a reference to this class instance. There is an another way to create an instance of this class, through the \`exec\` method of the Runtime instance.\r
\r
The methods defined by the Process class can be used to perform input/output operations from the process, check the exit status of the process, wait for it to complete, and terminate the process. These methods, however, are not built to work on special processes of the native platform like daemon processes, shell scripts, and so on.\r
\r
> [Specification java.lang.Process](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html)\r
\r
::: warning Input/ output from the child process\r
Intriguingly, **the process created by the start() method does not own a console**. Instead, it redirects (stdin, stdout, stderr) to the parent process. If need be, we can access them via streams obtained using methods defined in the class, such as getInputStream(), getOutputStream() and getErrorSteam(). These are the ways we can feed input to and get results from the sub processes.\r
:::\r
\r
Some of the common methods defined in this class are:\r
\r
| method                                       | Description                                                                                                                                                |\r
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |\r
| int exitValue()                              | Exit code returned from the process executed                                                                                                              |\r
| Boolean isAlive()                            | Checks if the invoking process is still running.                                                                                                    |\r
| int waitFor()                                | Parent process waits for the child process to end. The integer value returned by the method is the exit code by the process.                                           |\r
| Boolean waitFor(long timeOut, TimeUnit unit) | Overloaded method of previous one. We can specify the wait time. This method returns true if the process has terminated and false if timeout has occurred. |\r
| void destroy()                               | These two methods are used to kill or terminate the process. One, the second, just does it forcibly.                                                       |\r
| Process destroyForcibly()                    |\r
\r
 Let’s write a simple Java program to open an application as a separate process. After it is opened, the program would wait for, say, 10 seconds and then destroy the process, which will immediately close the application.\r
\r
\`\`\`java\r
public class ProcessDemo {\r
\r
   public static void main(String[] args) throws Exception {\r
\r
      ProcessBuilder pb = new ProcessBuilder("firefox");\r
      // Effectively launch the process\r
      Process p = pb.start();\r
      // Check is process is alive or not\r
      boolean alive = p.isAlive();\r
      // Wait for the process to end for 10 seconds.\r
      if (p.waitFor(10, TimeUnit.SECONDS)) {\r
          System.out.println("Process has finished");\r
      } else {\r
          System.out.println("Timeout. Process hasn't finished");\r
      }\r
      // Force process termination.\r
      p.destroy();\r
      // Check again if process remains alive\r
      boolean alive = p.isAlive();\r
      // Get the process exit value\r
      int status = p.exitValue();        \r
   }\r
}\r
\`\`\`\r
\r
::: info Exit codes\r
An exit code, or sometimes known as a return code, is the code returned to a parent process by an executable. The standard exit code is 0 for success and any number from 1 to 255 for anything else.\r
:::\r
\r
::: question Activity psp.activities.U2A3_ExitValue\r
Create a new Java application project (package psp.activities & main class U2A3_ExitValue)\r
Prepare a process to run different commands (notepad, calc, shell commands) one after each other, and make your application get their exit code. Print it.\r
\r
Commands can be hardcoded. As an **optional** improvement for this activity you can ask the user for the command and make your app interactive. There must be an option to exit the app (empty command for instance).\r
\r
Try with non-existing applications or using wrong arguments/parameters for commands.\r
\r
Can you force a process not to be successful?\r
\r
How can you know your own process exit code?\r
:::\r
\r
::: details U2A3_ExitValue solution\r
\r
\`\`\`java\r
public class U2A3_ExitValue {\r
\r
    public static void main(String[] args) {\r
        do {\r
            // Código para pedir un programa/comando a ejecutar\r
            Scanner teclado = new Scanner(System.in);\r
            System.out.println("Introduce el programa / comando que quieres ejecutar (intro para acabar): ");\r
            String comando = teclado.nextLine();\r
            \r
            if (comando.equals("")) System.exit(0);\r
\r
            try {\r
                // Preparamos el entrono de ejecución del proceso\r
                // Como no sabemos el contenido del comando, forzamos su conversión\r
                // a una lista para que no haya problemas con su ejecución\r
                ProcessBuilder pb = new ProcessBuilder(comando.split("\\\\s"));\r
\r
                // Lanzamos el proceso hijo\r
                Process p = pb.start();          \r
\r
                // Esperamos a que acabe para recoger el valor de salida\r
                int exitValue = p.waitFor();\r
\r
                if (exitValue == 0) {\r
                    System.out.println("El comando " + pb.command().toString() + " ha finalizado bien");\r
                } else {\r
                    System.out.println("El comando " + pb.command().toString() + " ha finalizado con errores. Código (" + exitValue + ")");\r
                }\r
\r
            } catch (InterruptedException | IOException ex) {\r
                System.err.println(ex.getLocalizedMessage());\r
                ex.printStackTrace();\r
            }                       \r
        } while (true);\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
::: danger Exceptions management\r
Call to method **waitFor** implies that the parent process gets locked until child process ends, or until a signal from the system (Exception) is received.\r
\r
It's better to handle exceptions than to throw them to upper levels.\r
:::\r
\r
### Spawn a java application from a class into the same project\r
\r
For some activities you'll be required to create the parent and the child processes as Java applications. Then, from one the classes you will need to launch the other one.\r
\r
This implies that both classes are gonna have a main method. So, in the project properties we'll need to set which is the main class that will be run first, usually the \`Launcher\` class (parent process).\r
\r
![Main class](../../media/unit2/seleccionmain.png)\r
\r
Before one class can run the other, at least the second one (child process) must be compiled, that is, the .class file has to be generated into the build/classes directory.\r
\r
![Working directory](../../media/unit2/comandotree.png)\r
\r
Them and only then we can set the process environment to spawn a new process from an existing class. Here is the sample code\r
\r
\`\`\`java\r
// Prepare the environment and the command\r
ProcessBuilder pb = new ProcessBuilder("java", "psp.u2.actividad10.Sumador");\r
pb.directory(new File("build/classes"));\r
Process p = pb.start();\r
\`\`\`\r
\r
::: question Activity psp.activities.U2A4_Launcher\r
Create a new Java application project (package psp.activities & main class U2A4_Launcher).\r
\r
Into the project create another class, U2A4_Commander with a main method that receives a program name as a unique parameter in the main. Make this application to create and run a process for the program and wait until that process has finished.\r
\r
This class will return always the same value the launched program did.\r
\r
> System.exit() method\r
>\r
> - Zero. The zero status code should be used when the program execution went fine, i.e., the program is terminated successfully.\r
> - Non-Zero. A nonzero status code indicates abnormal termination. Java allows us to use different values for different kinds of errors.\r
\r
Now, make the U2A4_Launcher class ask the user for an application name and launch the Commander class passing it the name of the application entered by the user.\r
\r
Get the exitValue from Commander and show it's value, telling if the process worked fine or if it failed.\r
:::\r
\r
::: details U2A4_Launcher solution\r
\r
\`\`\`java\r
public class U2A4_Launcher {\r
\r
    public static void main(String[] args) {\r
\r
        // Código para pedir un programa/comando a ejecutar\r
        Scanner teclado = new Scanner(System.in);\r
        System.out.println("Introduce el programa / comando que quieres ejecutar: ");\r
        String comando = teclado.nextLine();\r
\r
        try {\r
            // Preparamos el entrono de ejecución del proceso\r
            // Como no sabemos el contenido del comando, forzamos su conversión\r
            // a una lista para que no haya problemas con su ejecución\r
            comando = "java psp.activities.U2A4_Commander " + comando;\r
            ProcessBuilder pb = new ProcessBuilder(comando.split("\\\\s"));\r
            pb.directory(new File("build/classes"));\r
\r
            // Lanzamos el proceso hijo\r
            Process p = pb.start();          \r
\r
            // Esperamos a que acabe para recoger el valor de salida\r
            int exitValue = p.waitFor();\r
\r
            if (exitValue == 0) {\r
                System.out.println("El comando " + pb.command().toString() + " ha finalizado bien");\r
            } else {\r
                System.out.println("El comando " + pb.command().toString() + " ha finalizado con errores. Código (" + exitValue + ")");                \r
            }\r
        } catch (InterruptedException | IOException ex) {\r
            System.err.println(ex.getLocalizedMessage());\r
            ex.printStackTrace();\r
        }                       \r
    }\r
}\r
\r
public class U2A4_Commander {\r
\r
    public static void main(String[] args) throws Exception {       \r
        // Lectura de información desde los parámetros de entrada \r
        // Se supone que recibimos: args[0] args[1] args[2] ..... args[args.length-1 --> comando a ejecutar\r
        String comando = "";\r
        for (int i = 0; i < args.length; i++) {\r
            comando += args[i] + " ";\r
        }\r
        comando.trim();\r
                \r
        ProcessBuilder pb = new ProcessBuilder(comando.split("\\\\s"));            \r
\r
        // Lanzamos el proceso hijo\r
        Process p = pb.start();          \r
\r
        // Esperamos a que acabe para recoger el valor de salida\r
        int exitValue = p.waitFor();\r
\r
        System.exit(exitValue);\r
    }    \r
}\r
\`\`\`\r
\r
:::\r
\r
::: warning Child classes programming\r
Every class must be coded to be run independently or just as a child process. Think that in Netbeans all classes are run as child classes from the IDE.\r
\r
That's why the code, child or parent, needs to be done without thinking how they are gonna be called. The code must be  **independent** just like processes are one from each other.\r
:::\r
`]},{title:"2.1 Running processes in Java with Runtime",headers:[{level:2,title:"2.1.1. Quick process launch",slug:"_2-1-1-quick-process-launch",link:"#_2-1-1-quick-process-launch",children:[]},{level:2,title:"2.1.2 System properties and command shells",slug:"_2-1-2-system-properties-and-command-shells",link:"#_2-1-2-system-properties-and-command-shells",children:[]}],path:"/ca/unit2/runtime.html",pathLocale:"/ca/",extraFields:[`---\r
title: 2.1 Running processes in Java with Runtime\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.1. Running processes in Java with Runtime" />\r
\r
# 2.1. Running processes in Java with Runtime\r
\r
[[toc]]\r
\r
## 2.1.1. Quick process launch\r
\r
 There are several methods defined in the Runtime class. These methods can be invoked to get the information about the runtime environment such as number of processors available to the JVM, about of memory available, loading native library, explicitly call garbage collector, and so forth.\r
\r
> [Specification java.lang.Runtime](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html)\r
\r
Every Java program has an instance of the Runtime class, which encapsulates the runtime environment of the program. This class cannot be instantiated, but we can get a reference **singleton instance** to the Runtime of the currently running program with the help of the static method **java.lang.Runtime.getRuntime()**.\r
\r
::: question Design patterns: Singleton\r
¿What are design patterns? ¿What is and what is used for the singleton pattern?\r
\r
Look how to implement a class with the singleton pattern.\r
\r
[Refactoring.Guru design patterns](https://refactoring.guru/design-patterns/java)\r
:::\r
\r
The Runtime class method we are interested in, to create a new processes is\r
\r
> public Process exec(String command) throws IOException\r
\r
This is a simple, not yet customizable, way to spawn a new sub-process.\r
\r
\`\`\`java\r
public static void main(String[] args) throws IOException {\r
    // Launch notepad app\r
    Runtime.getRuntime().exec("notepad.exe");\r
\r
    // This way always works\r
    // String separator = System.getProperty("file.separator");\r
    // Runtime.getRuntime()\r
    //    .exec("c:"+separator+"windows"+separator+"notepad.exe");\r
\r
    // This way used to work (UNIX style paths)\r
    // Runtime.getRuntime().exec("c:/windows/notepad.exe");\r
}\r
\`\`\`\r
\r
As you can see the argument to  \`exec\` method is just the program we want to run. In this example, as *notepad* is in the system PATH it's not necessary to tell the path to the program. Otherwise, the path must be specified with the program name.\r
\r
<div class="pagebreak"></div>\r
\r
## 2.1.2 System properties and command shells\r
\r
If we plan to code platform independent applications, we have to deal with many issues because of differences between OS. So sometimes we need to deal with specific OS information. A useful way to get that information is by getting System properties.\r
\r
[Specification System.getProperties](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#getProperties())\r
\r
Some examples are provided here using System properties. Similar solutions can be used for other issues.\r
\r
::: danger File separator\r
For file path or directory separator, the Unix system introduced the slash character / as directory separator, and the Microsoft Windows introduced backslash character \\ as the directory separator. In a nutshell, this is / on UNIX and \\ on Windows.\r
\r
Then, ¿how can we code OS independent applications??\r
\r
In Java, we can use the following three methods to get the platform-independent file path separator.\r
\r
- System.getProperty("file.separator")\r
- FileSystems.getDefault().getSeparator() (Java NIO)\r
- File.separator Java IO\r
\r
From now on, we are gonna use System properties in our applications for several situations using \`System.getProperty(String propName)\`. These properties are configured by the OS and the JVM, though we can modify them by setting the JVM running setting\r
\r
> String separator = System.getProperty("file.separator");\r
\r
or\r
\r
> -Dfile.separator\r
\r
Nevertheless is always a good practice to use slash character **/** in paths as Java is able to convert them to the system it is running on.\r
:::\r
\r
If we want to run an OS command we have to do it as we usually do, by using the command shell, where once again we find the troubleshot with UNIX / Windows.\r
\r
Let's take a look at the way we can use the system properties, once again, to get a list of files in the user personal folder.\r
\r
\`\`\`java\r
// First we get the user folder path\r
String homeDirectory = System.getProperty("user.home");\r
// And then we set which OS are we running on\r
boolean isWindows = System.getProperty("os.name")\r
  .toLowerCase().startsWith("windows");\r
\r
if (isWindows) {\r
    Runtime.getRuntime()\r
      .exec(String.format("cmd.exe /c dir %s", homeDirectory));\r
} else {\r
    Runtime.getRuntime()\r
      .exec(String.format("sh -c ls %s", homeDirectory));\r
}\r
\`\`\`\r
\r
::: info non-interactive shell mode\r
In the previous code example, both for Windows and UNIX modifier **c** is used for command shells. This modifier tells the system to open a command shell, to run the companion command and close the shell after it has finished.\r
:::\r
\r
Next you can look at a handler event manager for a mouse clic, into a graphic application, to open a web site in a browser. The code shows how to do it in  *X like operating system and one way to do it in Windows systems is commented.\r
\r
\`\`\`java\r
// Calling app example\r
public void mouseClicked(MouseEvent e) {\r
  // Launch Page\r
  try {\r
    // Linux version\r
    Runtime.getRuntime().exec("open http://localhost:8153/go");\r
    // Windows version\r
    // Runtime.getRuntime().exec("explorer http://localhost:8153/go");\r
  } catch (IOException e1) {\r
    // Don't care\r
  }\r
}\r
\`\`\`\r
\r
::: question System properties\r
Our first applications in java is not gonna be an easy one.\r
\r
Using methods from System class and Runtime class, write the code for an app that shows\r
\r
- all the system properties configured in your OS\r
- total memory, free memory, used memory and processors available\r
\r
Make a research into Runtime class methods. For System properties try to get a list or iterable data estructure to show each of the system properties and their values.\r
:::\r
\r
::: details Proposed solution to previous activiy\r
\r
\`\`\`java{22,25,32,38,44}\r
long freeMemory = Runtime.getRuntime().freeMemory();\r
long availableMemory = Runtime.getRuntime().totalMemory();\r
long usedMemory = availableMemory - freeMemory;\r
\r
/*** Runtime.getRuntime() usage ***/\r
// Show system information\r
// Memory will be shown in MBytes formatted with 2-decimal places\r
DecimalFormat megabytes = new DecimalFormat("#.00");\r
System.out.println("Available memory in JVM(Mbytes): " + \r
        megabytes.format((double)availableMemory/(1024*1024)));\r
System.out.println("Free memory in JVM(Mbytes): " + \r
        megabytes.format((double)freeMemory/(1024*1024)));\r
System.out.println("Used memory in JVM(Mbytes): " + \r
        megabytes.format((double)usedMemory/(1024*1024)));\r
\r
System.out.println ("Processors in the system: " \r
        + Runtime.getRuntime().availableProcessors());\r
\r
/*** System.getProperties() usage ***/\r
// Show each pair of property:value from System properties\r
\r
// 1st. As a lambda expression using anonymous classes\r
System.getProperties().forEach((k,v) -> System.out.println(k + " => " + v));\r
\r
// 2nd. As a Map.entrySet \r
for (Map.Entry<Object, Object> entry : System.getProperties().entrySet()) {\r
    Object key = entry.getKey();\r
    Object val = entry.getValue();\r
    System.out.println("> " + key + " => " + val);\r
}\r
\r
// 3rd. As a Map.keySet\r
for (Object key : System.getProperties().keySet().toArray())\r
{\r
    System.out.println(">> " + key+":"+System.getProperty(key.toString()));\r
}\r
\r
// Other methods found by students, based on a Properties object methods.\r
Properties prop = System.getProperties();\r
for (String propName: prop.stringPropertyNames()) {\r
  System.out.println(propName +  ":" + System.getProperty(propName));\r
}\r
        \r
// Or directly to the console using \r
prop.list(System.out);\r
\`\`\`\r
\r
:::\r
\r
::: info Number format\r
In any programming language we have many different ways to format the information shown to the user. As in this first applications we are using the console as the system output, let's check the two main techniques we can use in Java\r
\r
- [NumberFormat](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html)\r
\r
Using NumberFormat class or any of its descendants we can get control on how the numbers are shown with high precision, using numeric patterns.\r
\r
\`\`\`java:no-line-numbers\r
DecimalFormat numberFormat = new DecimalFormat("#.00");\r
// Hashes can be used instead of zeros to allow .30 to be shown as 0.3\r
// (additional digits are optional)\r
System.out.println(numberFormat.format(number));\r
\`\`\`\r
\r
- [System.out.printf](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html)\r
\r
Similar to C's printf syntax, we can use the java.util.Formatter syntax to set how data is visualized.\r
\r
\`\`\`java:no-line-numbers\r
System.out.printf("\\n$%10.2f",shippingCost);\r
// numbers after % print preceding spaces to fill \r
// and justify numbers.\r
System.out.printf("%n$%.2f",shippingCost);\r
\`\`\`\r
\r
:::\r
\r
::: info Colours in console applications\r
\r
There is a way to print in different colours when using the console. Here you have got an example code with some colours and the way to use it.\r
\r
\`\`\`java:no-line-numbers\r
public class UsingColoursInConsole {\r
\r
public static final String ANSI_RESET = "\\u001B[0m";\r
public static final String ANSI_BLACK = "\\u001B[30m";\r
public static final String ANSI_RED = "\\u001B[31m";\r
public static final String ANSI_GREEN = "\\u001B[32m";\r
public static final String ANSI_YELLOW = "\\u001B[33m";\r
public static final String ANSI_BLUE = "\\u001B[34m";\r
public static final String ANSI_PURPLE = "\\u001B[35m";\r
public static final String ANSI_CYAN = "\\u001B[36m";\r
public static final String ANSI_WHITE = "\\u001B[37m";\r
\r
public static final String ANSI_BLACK_BACKGROUND = "\\u001B[40m";\r
public static final String ANSI_RED_BACKGROUND = "\\u001B[41m";\r
public static final String ANSI_GREEN_BACKGROUND = "\\u001B[42m";\r
public static final String ANSI_YELLOW_BACKGROUND = "\\u001B[43m";\r
public static final String ANSI_BLUE_BACKGROUND = "\\u001B[44m";\r
public static final String ANSI_PURPLE_BACKGROUND = "\\u001B[45m";\r
public static final String ANSI_CYAN_BACKGROUND = "\\u001B[46m";\r
public static final String ANSI_WHITE_BACKGROUND = "\\u001B[47m";\r
\r
    public static void main(String[] args) {\r
        System.out.println(ANSI_GREEN + ANSI_WHITE_BACKGROUND + "Hello" + ANSI_BLUE + ANSI_YELLOW_BACKGROUND + " Bye bye" + ANSI_RESET);\r
    }\r
}\r
\`\`\`\r
\r
:::\r
`]},{title:"1.2 Concurrencia",headers:[{level:2,title:"1.2.1. Concurrencia vs Paralelismo",slug:"_1-2-1-concurrencia-vs-paralelismo",link:"#_1-2-1-concurrencia-vs-paralelismo",children:[{level:3,title:"Monoproceso",slug:"monoproceso",link:"#monoproceso",children:[]},{level:3,title:"Multiprogramación",slug:"multiprogramacion",link:"#multiprogramacion",children:[]},{level:3,title:"Paralelismo",slug:"paralelismo",link:"#paralelismo",children:[]}]},{level:2,title:"1.2.2. Sistemas distribuidos",slug:"_1-2-2-sistemas-distribuidos",link:"#_1-2-2-sistemas-distribuidos",children:[]},{level:2,title:"1.2.3. Ventajas e inconvenientes",slug:"_1-2-3-ventajas-e-inconvenientes",link:"#_1-2-3-ventajas-e-inconvenientes",children:[]},{level:2,title:"1.2.4. Condiciones de Bernstein",slug:"_1-2-4-condiciones-de-bernstein",link:"#_1-2-4-condiciones-de-bernstein",children:[]}],path:"/es/unit1/concurrency.html",pathLocale:"/es/",extraFields:[`---\r
title: 1.2 Concurrencia\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="1.2. Concurrencia" />\r
\r
# 1.2. Concurrencia\r
\r
[[toc]]\r
\r
Según el diccionario de la [RAE](https://dle.rae.es/concurrencia?m=form) una de las acepciones de concurrencia es\r
> Coincidencia, concurso simultáneo de varias circunstancias.\r
\r
Si cambiamos circunstancias por \`procesos\`, ya tendríamos una definición cercana a lo que significa concurrencia en el mundo digital\r
\r
Si nos fijamos, no es la primera vez que surge la palabra \`proceso\` en este texto, y es que los procesos son una pieza fundamental del puzle, por no decir la parte más importante.\r
\r
## 1.2.1. Concurrencia vs Paralelismo\r
\r
Ahora que ya sabemos qué es un proceso, vamos a ver la relación que éstos tienen con el hardware en el que se ejecutan.\r
\r
### Monoproceso\r
\r
Por mucho que tengamos varios procesos procesos ejecutándose a la vez, si sólo tenemos un microprocesador para atenderlos a todos, estas tareas nunca van a poder ejecutarse a la vez.\r
\r
Una posibilidad sería la ejecución secuencias de las tareas en el sistema. Se empieza a ejecutar una tarea y, hasta que esta no finaliza, el sistema no empieza a ejecutar la siguiente. Esto se correspondería con sistemas que sólo son capaces de hacer una tarea a la vez, algo raro hoy en día.\r
\r
![Secuential execution of tasks (monoprocessor system)](./../../media/unit1/gantt_sequential.svg)\r
\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Secuential execution of tasks (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1       :done, t1, 0, 4s\r
Process 2     : active, t2, after t1, 5s\r
Process 3     : crit, t3, after t2, 2s\r
Process 4    : t4, after t3, 5s\r
\`\`\`\r
-->\r
\r
### Multiprogramación\r
\r
Para que los procesos no tengan que esperar a que todos los demás se ejecuten, los sistemas aprovechan y exprimen los recursos al máximo, permitiendo la ilusión de que varios procesos se ejecutan de forma simultánea. Esto es lo que se conoce como \`multitarea\`.\r
\r
En estos sistemas, se aprovecha el diseño de los sistemas operativos modernos, y de las operaciones que realizan los procesos que no requieren el uso del procesador (esperar a una operación de E/S, una interacción con el usuario, la recepción de información desde la red, etc.) para poder ejecutar otros procesos. La ejecución se multiplexa en el tiempo.\r
\r
![Concurrent execution of tasks (monoprocessor system)](./../../media/unit1/gantt_concurrent.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Concurrent execution of tasks (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1  :done, t1, 0, 2s\r
Process 2  :active, t2, after t1, 2s\r
Process 3  :crit, t3, after t2, 2s\r
Process 4  : t4, after t3, 1s\r
Process 1  :done, t5, after t4, 2s\r
Process 2  :active, t6, after t5, 1s\r
Process 4  : t7, after t6, 3s\r
Process 2  :active, t8, after t7, 2s\r
Process 4  : t9, after t8, 1s\r
\`\`\`\r
-->\r
\r
Como se puede observar en las dos imágenes anteriores (aunque se trata sólo de un modelo), el tiempo de uso total del procesador es igual en ambos casos, es decir, que el sistema tardará el mismo tiempo en completar todas las tareas. Sin embargo, la sensación es que todas las tareas se están realizando a la vez.\r
\r
### Paralelismo\r
\r
Con el avance de la tecnología ahora la gran mayoría de dispositivos, desde los equipos de escritorio, portátiles, dispositivos móviles, ... hasta los dispositivos IoT, tienen capacidades de multiproceso, es decir, tienen más de un procesador para poder realizar varias tareas a la vez de forma real, no simulada.\r
A este tipo de ejecución es a lo que llamamos \`paralelismo\`.\r
\r
![Parallel execution of tasks (dual processor system)](./../../media/unit1/gantt_parallel.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Parallel execution of tasks (dual processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1  :done, t1, 0, 2s\r
Process 2  :active, t2, after t1, 2s\r
Process 1  :done, t5, after t2, 2s\r
Process 2  :active, t6, after t5, 1s\r
Process 2  :active, t8, after t6, 2s\r
section Processor 2\r
Process 3  :crit, t3, 0, 2s\r
Process 4  : t4, after t3, 1s\r
Process 4  : t7, after t4, 3s\r
Process 4  : t9, after t7, 1s\r
\`\`\`\r
-->\r
\r
En este caso, a mayor número de unidades de proceso, menor tiempo tardarán las tareas en completarse y mayor será la sensación de rapidez que notará el usuario. Este es uno de los retos de los sistemas operativos, planificar adecuadamente las tareas para minimizar los tiempos de ejecución, de espera y el uso de los recursos del sistema, el procesador principalmente.\r
\r
::: question núcleos vs hilos\r
Si habéis comprado un procesador hace poco, o estáis al día en cuanto al hardware, sabréis que una de las características de los procesadores es su **número de núcleos** (4, 8, 16).\r
\r
Pero además, al número de núcleos lo acompaña otra característica que es el número de **hilos o threads**, que suele ser el doble que el de núcleos.\r
\r
¿Qué implicación tienen los threads de un procesador con respecto a la concurrencia? ¿Si un equipo tiene 8 núcleos / 16 hilos significa eso que puede ejecutar 16 procesos a la vez?\r
:::\r
\r
## 1.2.2. Sistemas distribuidos\r
\r
> "Un sistema distribuido es una colección de computadores independientes que aparecen ante los usuarios como un único sistema coherente"\r
>\r
> "Andrew S. Tanembaum"\r
\r
Posiblemente el ejemplo más famoso y conocido de sistema distribuido sea \`Internet\`.Internet aparece ante los usuarios como un enorme repositorio de documentos, es decir, como un único sistema capaz de proveer casi cualquier tipo de información o servicio que se necesite. No obstante, sabemos que está compuesta por millones de equipos ubicados en localizaciones diferentes e interconectados entre sí.\r
\r
Nace de la necesidad de compartir recursos. Actualmente el máximo exponente de este tipo de sistemas es el \`Cloud Computing\` o servicios en la nube. Un sistema es distribuido cuando los componentes software están distribuidos en la red, se comunican y coordinan mediante el paso de mensajes.\r
\r
Las características de este tipo de sistemas son::\r
\r
- Concurrencia: ejecución de programas concurrentes.\r
- Inexistencia de un reloj global. Implica sincronizarse con el paso de mensajes.\r
- Fallos independientes: cada componente del sistema puede fallar sin que perjudique la ejecución de los demás.\r
\r
## 1.2.3. Ventajas e inconvenientes\r
\r
Ventajas del procesamiento paralelo:\r
\r
- Ejecución simultánea de tareas.\r
- Disminuye el tiempo total de ejecución\r
- Resuelve problemas complejos y de grandes dimensiones.\r
- Utilización de recursos no locales distribuidos en la red\r
- Disminución de costos, aprevechando los recursos distribuidos, no es necesario gastar en un único supercomputardor, se puede alcanzar el mismo poder de computación con equipos más modestos distribuidos.\r
\r
Inconvenientes del procesamiento paralelo:\r
\r
- Los compiladores y entornos de programación para sistemas paralelos son más complicados de desarrollar.\r
- Los programas paralelos son más difíciles de escribir\r
- Hay mayor consumo de energía\r
- Mayor complejidad en el acceso a datos\r
- Complejidad a la hora de la comunicación y sincronización de las diferentes subtareas. <Badge type="danger" text="cuidado" vertical="middle" />\r
\r
Ventajas de la programación distribuida\r
\r
- Se comparten recursos y datos\r
- Crecimiento bajo demanda\r
- Mayor flexibildad para distribuir la carga\r
- Alta disponibilidad\r
- Soporte de aplicaciones distribuidas\r
- Filosofía abierta y hetereogénea\r
\r
::: question Escalado de sistemas\r
Con escalado nos referimos a la posibilidad de incrementar las capacidades de un sistema.\r
\r
Investiga las diferencias, ventajas e inconvenientes del \`escalado horizontal\` y el \`escalado vertical\`.\r
:::\r
\r
Inconvenientes de la programación distribuida\r
\r
- Aumenta la complejidad\r
- Se necesita software nuevo especializado\r
- Problemas derivados de las comunicaciones (perdidas, saturaciones, etc.)\r
- Problemas de seguridad, ataques DDoS\r
\r
Ejemplos de utilización de la programación paralela y distribuida\r
\r
- Estudios meteorológicos\r
- Estudios del genoma humano\r
- Modelado de la biosfera\r
- Predicciones sísmicas\r
- Simulación de moléculas\r
\r
::: info Ejemplo de programación paralela y distribuida\r
[Búsqueda de inteligencia extraterrestre - Proyecto SETI](https://setiathome.berkeley.edu/sah_about.php)\r
:::\r
\r
## 1.2.4. Condiciones de Bernstein\r
\r
Una vez que sabemos qué es un programa concurrente y las distintas arquitecturas hardware que pueden soportarlo, vamos a ver qué partes de un programa se pueden ejecutar de forma concurrente y cuáles no.\r
\r
Si observamos el siguiente código, queda claro que la primera instrucción se debe ejecutar antes que la segunda para que el resultado sea siempre el mismo (para los mismos datos de entrada).\r
\r
\`\`\`java\r
x = x + 1;\r
y = x + 1;\r
\`\`\`\r
\r
Sin embargo, en un código como el siguiente el órden en el que se ejecuten las instrucciones no influye en el resultado final (valor de las variables). En este caso se pueden ejecutar las tres sentencias a la vez incrementando la velocidad de procesamiento.\r
\r
\`\`\`java\r
x = 1;\r
y = 2;\r
z = 3;\r
\`\`\`\r
\r
A.J. Bernstein definió unas condiciones para determinar si dos conjuntos de instrucciones S<sub>i</sub> y S<sub>j</sub> se pueden ejecutar concurrentemente.\r
\r
Para poder determinar si dos conjuntos de instrucciones se pueden ejecutar concurrentemente, se definen en primer lugar los siguientes conjuntos\r
\r
- L(S<sub>k</sub>) = {a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ...} como el conjunto de lectura formado por todas las variables cuyos valores se leen durante la ejecución de las instrucciones del conjunto k.\r
- E(S<sub>k</sub>) = {b<sub>1</sub>, b<sub>2</sub>, b<sub>3</sub>, ...} como el conjunto de escritura formado por todas las variables cuyos valores se actualizan durante la ejecución de las instrucciones del conjunto k.\r
\r
Para que dos conjuntos de instrucciones S<sub>i</sub> y S<sub>j</sub> se puedan ejecutar concurrentemente, se deben cumplir estas tres condiciones de forma simultánea.\r
\r
- L(S<sub>i</sub>) ∩ E(S<sub>j</sub>)\r
- E(S<sub>i</sub>) ∩ L(S<sub>j</sub>)\r
- E(S<sub>i</sub>) ∩ E(S<sub>j</sub>)\r
  \r
::: question Cuales de estas instrucciones se pueden ejecutar de forma concurrente\r
\r
\`\`\`java\r
a = x + y;\r
b = z - 1;\r
c = a - b;\r
w = c + 1;\r
\`\`\`\r
\r
:::\r
\r
Primero deberíamos obtener los conjuntos L y E para cada sentencia\r
\r
> L(S<sub>1</sub>) = {x, y}\r
>\r
> E(S<sub>1</sub>) = {a}\r
\r
> L(S<sub>2</sub>) = {z}\r
>\r
> E(S<sub>2</sub>) = {b}\r
\r
> L(S<sub>3</sub>) = {a, b}\r
>\r
> E(S<sub>3</sub>) = {c}\r
\r
>L(S<sub>4</sub>) = {c}\r
>\r
> E(S<sub>4</sub>) = {w}\r
\r
Y ahora aplicarlas entre cada par de sentencias\r
\r
> L(S<sub>1</sub>) ∩ E(S<sub>2</sub>) = ∅\r
> E(S<sub>1</sub>) ∩ L(S<sub>2</sub>) = ∅\r
> E(S<sub>1</sub>) ∩ E(S<sub>2</sub>) = ∅         // Sí se pueden ejecutar concurrentemente\r
\r
> L(S<sub>1</sub>) ∩ E(S<sub>3</sub>) = ∅\r
> E(S<sub>1</sub>) ∩ L(S<sub>3</sub>) = {a} ≠ ∅\r
> E(S<sub>1</sub>) ∩ E(S<sub>3</sub>) = ∅         // NO se pueden ejecutar concurrentemente\r
\r
> L(S<sub>1</sub>) ∩ E(S<sub>4</sub>) = ∅\r
> E(S<sub>1</sub>) ∩ L(S<sub>4</sub>) = ∅\r
> E(S<sub>1</sub>) ∩ E(S<sub>4</sub>) = ∅         // Sí se pueden ejecutar concurrentemente\r
\r
> L(S<sub>2</sub>) ∩ E(S<sub>3</sub>) = ∅\r
> E(S<sub>2</sub>) ∩ L(S<sub>3</sub>) = {b] ≠\r
> E(S<sub>2</sub>) ∩ E(S<sub>3</sub>) = ∅         // NO se pueden ejecutar concurrentemente\r
\r
> L(S<sub>2</sub>) ∩ E(S<sub>4</sub>) = ∅\r
> E(S<sub>2</sub>) ∩ L(S<sub>4</sub>) = ∅\r
> E(S<sub>2</sub>) ∩ E(S<sub>4</sub>) = ∅         // Sí se pueden ejecutar concurrentemente\r
\r
> L(S<sub>3</sub>) ∩ E(S<sub>4</sub>) = ∅\r
> E(S<sub>3</sub>) ∩ L(S<sub>4</sub>) = {c} ≠ ∅\r
> E(S<sub>3</sub>) ∩ E(S<sub>4</sub>) = ∅         // NO se pueden ejecutar concurrentemente\r
`]},{title:"1 Introducción",headers:[{level:2,title:"Objetivos",slug:"objetivos",link:"#objetivos",children:[]}],path:"/es/unit1/",pathLocale:"/es/",extraFields:[`---\r
title: 1 Introducción\r
---\r
# Tema 1. Programación concurrente\r
\r
En este primer tema vamos a conocer los conceptos básicos relacionados con la programación concurrente, así como la mayoría de la terminología que vamos a trabajar y utilizar durante todo el curso.\r
\r
En un mundo en el que cada vez los dispositivos electrónicos son cada vez más potentes, y veloces, el software debe ser capaz de aprovechar las características que le ofrecen tanto el hardware como los sistemas operativos.\r
\r
Son muchas las tareas que requieren de un procesamiento rápido de cantidades ingentes de datos. Un par de ejemplos los tenemos en las aplicaciones \`Big Data\` e \`Inteligencia artificial\`. Estos dos campos son unos de los máximos exponentes en cuanto a programación concurrente.\r
\r
::: details ¿Qué es para ti concurrencia?\r
Vamos a discutirlo en clase.\r
Iremos desgranando y definiendo el concepto a lo largo del tema\r
:::\r
\r
## Objetivos\r
\r
Los objetivos que alcanzaremos tras esta unidad son:\r
\r
- Diferenciar entre programa y proceso\r
- Comprender qué es la concurrencia\r
- Conocer el concepto, diferencias y relación existente entre las dos unidades básicas de ejecución: procesos e hilos.\r
- Tener nociones sobre programación concurrente\r
- Entender el funcionamiento concurrente del SO y del hardaware\r
\r
`]},{title:"1.3 Procesos en el SO",headers:[{level:2,title:"1.3.1. El kernel del SO",slug:"_1-3-1-el-kernel-del-so",link:"#_1-3-1-el-kernel-del-so",children:[]},{level:2,title:"1.3.2. Control de procesos en GNU/Linux",slug:"_1-3-2-control-de-procesos-en-gnu-linux",link:"#_1-3-2-control-de-procesos-en-gnu-linux",children:[{level:3,title:"Comandos para saber el pid de los procesos",slug:"comandos-para-saber-el-pid-de-los-procesos",link:"#comandos-para-saber-el-pid-de-los-procesos",children:[]},{level:3,title:"Comandos para ver los procesos activos",slug:"comandos-para-ver-los-procesos-activos",link:"#comandos-para-ver-los-procesos-activos",children:[]},{level:3,title:"Control de procesos",slug:"control-de-procesos",link:"#control-de-procesos",children:[]}]},{level:2,title:"1.3.3. Estados de un proceso",slug:"_1-3-3-estados-de-un-proceso",link:"#_1-3-3-estados-de-un-proceso",children:[]},{level:2,title:"1.3.4 Planificación de procesos",slug:"_1-3-4-planificacion-de-procesos",link:"#_1-3-4-planificacion-de-procesos",children:[]},{level:2,title:"1.3.5. Algoritmos de planificación de procesos",slug:"_1-3-5-algoritmos-de-planificacion-de-procesos",link:"#_1-3-5-algoritmos-de-planificacion-de-procesos",children:[{level:3,title:"FCFS - First Come First Served",slug:"fcfs-first-come-first-served",link:"#fcfs-first-come-first-served",children:[]},{level:3,title:"SJF - Shortest Job First",slug:"sjf-shortest-job-first",link:"#sjf-shortest-job-first",children:[]},{level:3,title:"Planificación por prioridad",slug:"planificacion-por-prioridad",link:"#planificacion-por-prioridad",children:[]},{level:3,title:"Round Robin",slug:"round-robin",link:"#round-robin",children:[]},{level:3,title:"Procesos con operaciones de E/S o bloqueos",slug:"procesos-con-operaciones-de-e-s-o-bloqueos",link:"#procesos-con-operaciones-de-e-s-o-bloqueos",children:[]}]}],path:"/es/unit1/operatingsystem.html",pathLocale:"/es/",extraFields:[`---\r
title: 1.3 Procesos en el SO\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="1.3. Procesos en el SO" />\r
\r
# 1.3. Procesos en el Sistema Operativo\r
\r
[[toc]]\r
\r
## 1.3.1. El kernel del SO\r
\r
El \`kernel o núcleo de un SO\` se encarga de la funcionalidad básica del sistema, el responsable de la gestión de los recursos del ordenador, se accede al núcleo a través de las llamadas al sistema, es la parte más pequeña del sistema en comparación con la interfaz. El resto del sistema operativo se le denomina como programas del sistema.\r
\r
Todos los programas que se ejecutan en el ordenador se organizan como un conjunto de procesos. Es el sistema operativo el que decide parar la ejecución , por ejemplo, porque lleva mucho tiempo en la CPu, y decide cuál será el siguiente proceso que pasará a ejecutarse.\r
\r
Cuando se suspende la ejecución de un proceso, luego deberá reiniciarse en el mismo estado en el que se encontraba antes de ser suspendido. Esto implica que debemos almacenar en algún sitio la información referente a ese proceso para poder luego restaurarla tal como estaba antes. Esta información se almacena en el \`PCB\` (Bloque de control de procesos).\r
\r
Estos \`cambios de contexto\`, que es como se conoce al reemplazo de un proceso por otro, son bastante costosos (en tiempo y recursos) por toda la información que hay que guardar. Ya veremos más adelante que existe otra unidad de ejecución, los \`hilos\`, que solucionan en parte este problema.\r
\r
![Process Control Block](./../../media/unit1/process_control_blocks.gif)\r
\r
## 1.3.2. Control de procesos en GNU/Linux\r
\r
Los sistemas Linux identifican a los procesos por su PID (Process ID) así como por su PPID (Parent PID). De esta forma, los procesos pueden clasificarse en:\r
\r
- Procesos padre: Son procesos que crean otros procesos durante su ejecución\r
- Procesos hijos: son procesos creados por otros procesos\r
\r
Cuando se arranca el sistema, el kernel lanza el proceso **init** que es la madre de todos los demás procesos. Al ser el primero que se lanza es el único que no tiene padre. El proceso init se encarga de gestionar todos los demás procesos que se van ejecutando en el SO.\r
\r
::: info proceso init\r
El proceso init tiene el pid 1 y, como ya hemos dicho no tiene padre.\r
\r
Este proceso se utiliza como padre "adoptivo" para todos aquellos procesos que se quedan huérfanos.\r
:::\r
\r
### Comandos para saber el pid de los procesos\r
\r
El comando \`pidof cmdname\` nos dice el nombre de todos los procesos asociados a ese comando. Es importante recordar que cada vez que ejecutamos un comando, se crea un nuevo proceso.\r
\r
Las variables $$ y $PPID nos indican el pid del proceso actual y su ppid respectivamente.\r
\r
\`\`\`bash\r
# pidof systemd\r
1\r
# pidof top\r
2060\r
# pidof httpd\r
2103 2102 2101 2100 2099 1076\r
# Process pid\r
echo $$\r
2109\r
# Process parent pid\r
echo $PPID\r
2106\r
\`\`\`\r
\r
### Comandos para ver los procesos activos\r
\r
El principal comando para conocer los procesos que se están ejecutando en un equipo es el comando \`ps\`. Con este comando podemos ver parte de la información asociada a un proceso.\r
\r
El comando ps tiene múltiples opciones que nos permiten ver más o menos información de los procesos, así como los procesos de nuestro usuario o del resto de usuarios, estadísticas sobre el uso de recursos de cada proceso, etc.\r
\r
\`\`\`bash\r
vicente@Desktop-Vicente:~$ ps -AF\r
UID        PID  PPID  C    SZ   RSS PSR STIME TTY          TIME CMD\r
root         1     0  0   223   576   5 11:00 ?        00:00:00 /init\r
root         7     1  0   223    80   3 11:00 ?        00:00:00 /init\r
root         8     7  0   223    80   1 11:00 ?        00:00:00 /init\r
vicente      9     8  0  2508  5032   4 11:00 pts/0    00:00:00 -bash\r
vicente     70     9  0  2650  3224   5 11:06 pts/0    00:00:00 ps -AF\r
vicente@Desktop-Vicente:~$ ps -auxf\r
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\r
root         1  0.0  0.0    892   576 ?        Sl   11:00   0:00 /init\r
root         7  0.0  0.0    892    80 ?        Ss   11:00   0:00 /init\r
root         8  0.0  0.0    892    80 ?        S    11:00   0:00  \\_ /init\r
vicente      9  0.0  0.0  10032  5032 pts/0    Ss   11:00   0:00      \\_ -bash\r
vicente     72  0.0  0.0  10832  3408 pts/0    R+   11:09   0:00          \\_ ps -auxf\r
\`\`\`\r
\r
::: info Useful ‘ps’ examples for Linux process monitoring\r
[https://www.tecmint.com/ps-command-examples-for-linux-process-monitoring/](https://www.tecmint.com/ps-command-examples-for-linux-process-monitoring/)\r
:::\r
\r
El otro comando que nos permite ver la información, en este caso en tiempo real, de los procesos que se están ejecutando en l máquina junto con los recursos que están consumiendo, es el comando \`top\`.\r
\r
\`\`\`bash\r
vicente@Desktop-Vicente:~$ ps -AF\r
top - 11:14:52 up 14 min,  0 users,  load average: 0.00, 0.00, 0.00\r
Tasks:   5 total,   1 running,   4 sleeping,   0 stopped,   0 zombie\r
%Cpu(s):  0.1 us,  0.1 sy,  0.0 ni, 99.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\r
MiB Mem :  12677.3 total,  12556.4 free,     70.6 used,     50.3 buff/cache\r
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.  12433.8 avail Mem\r
\r
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\r
    1 root      20   0     892    576    516 S   0.0   0.0   0:00.04 init\r
    7 root      20   0     892     80     20 S   0.0   0.0   0:00.00 init\r
    8 root      20   0     892     80     20 S   0.0   0.0   0:00.01 init\r
    9 vicente   20   0   10032   5032   3324 S   0.0   0.0   0:00.11 bash\r
   73 vicente   20   0   10856   3664   3148 R   0.0   0.0   0:00.00 top\r
\`\`\`\r
\r
::: info ‘top’ examples in Linux\r
[https://www.tecmint.com/12-top-command-examples-in-linux/](https://www.tecmint.com/12-top-command-examples-in-linux/)\r
:::\r
\r
### Control de procesos\r
\r
Linux tiene varios comandos para controlar los procesos, entre los que cabe destacar el comando \`kill\`.\r
\r
La forma de controlar los procesos es enviándoles señales. Hay multitud de señales que se pueden enviar a un proceso. Sin embargo, para responder a una señal, los procesos deben estar programados para gestionarlas.\r
\r
\`\`\`bash\r
# Get Firefox PID after it freezes\r
$ pidof firefox\r
2687\r
# Send the SIGKILL (9) signal to end the process immediately\r
$ kill 9 2687\r
\`\`\`\r
\r
::: info How to control Linux process Using kill, pkill and kilall\r
[https://www.tecmint.com/how-to-kill-a-process-in-linux/](https://www.tecmint.com/how-to-kill-a-process-in-linux/)\r
:::\r
\r
Otra forma de influir en la ejecución de los procesos es mediante la prioridad. En los sistemas Linux todos los procesos tienen una cierta prioridad. Esto influye a la hora de obtener tiempo de CPU por lo que podemos conseguir que un proceso se ejecute más o menos rápido que los demás.\r
\r
Un usuario con privilegios de *root* puede modificar los valores de prioridad de los procesos. Este valor lo podemos ver en la columna NI (nice) del comando top. Este valor influye en la columna PR que indica la prioridad que le da el sistema a un proceso.\r
\r
El rango de asignación de prioridad disponible es de -20 a 19 , siendo -20 la mayor prioridad y 19 la menor. Con el comando \`nice\` podemos asegurarnos que en momentos de usos elevados de CPU los procesos adecuados reciban el mayor % de la misma.\r
\r
\`\`\`bash\r
vicente@Desktop-Vicente:~$ nice\r
0\r
vicente@Desktop-Vicente:~$ nice -n 10 bash\r
vicente@Desktop-Vicente:~$ nice\r
10\r
vicente@Desktop-Vicente:~$\r
\`\`\`\r
\r
::: tip Control de procesos en Windows\r
En los sistemas operativos Windows, la mayoría de estas acciones se pueden realizar desde el administrador de tareas, aunque también tenemos los comandos **tasklist** y **taskkill** para hacerlo desde consola\r
\r
*tasklist /svc /fi “imagename eq svchost.exe”*\r
Con esta instrucción sabremos que servicios se están ejecutando bajo el proceso svchost.exe, es el nombre de proceso de host genérico para servicios que se ejecutan desde bibliotecas de vínculos dinámicos (DLL), hay tantos para evitar riesgos ya que si estuviera todo en uno u nposible fallo podría colapsar el sistema.\r
:::\r
\r
## 1.3.3. Estados de un proceso\r
\r
El siguiente diagrama muestra los tres posibles estados en los que se puede encontrar un proceso. Las líneas que conectan los estados representan las posibles transiciones que se pueden dar.\r
\r
En todo momento un procesos estará en una de los tres estados. Como ya hemos visto, en los sitemas monoprocesador, un único proceso podrá estar en estado de ejecución en un momento dado. El resto de procesos estará o bien en espera o bien bbloqueados.\r
\r
Para cada uno de los estados se gestiona una lista de procesos que administra el kernel del SO. Los procesos permanecerán en la cola hasta que se produzca algún evento.\r
\r
![Estados de un proceso](./../../media/unit1/estados_proceso.png)\r
\r
- **Nuevo**. El fichero es creado a partir de un ejecutable.\r
- **Listo**. Está parado temporalmente y listo para ejecutarse cuando se le dé la oportunidad. El sistema oprativo todavía no le asigno un procesador para ejecutarse. El planificador del S.O. será el responsable de seleccionar el proceso para que pase a estado de ejecución.\r
- **En ejecución**. Está usando el procesador. El sistema operativo utiliza el mecanismo de interrupciones para controlar su ejecución. Si el proceso necesitase un recurso, incluyendo la realización de operaciones de E/S, llamará a la llamada al sistema correspondiente. Si un proceso se ejecuta durante el máximo tiempo permitido por la política del sistema, salta un temporizador que lanza una interrupción. Si el sistema es de tiempo compartido, lo para y lo pasa a estado de listo.\r
- **Bloqueado**. El proceso se encuentra bloqueado esperando a aque ocurra algún suceso. Por ejemplo puede estar esperando a que termine alguna operación de E/S, o bien a sincronizarse con otro proceso. Cuando ocurre el evento que lo desbloquea, el proceso queda pendiente de ser planificado por el S.O. no pasa directamente a ejecución.\r
- **Terminado**. El proceso termina y libera su imagen de memoria. Es el propio proceso el que debe llamar al sistema para indicar que ha terminado, aunque el sistema puede finalizarlo con una excepción (que es una interrupción especial).\r
\r
Transiciones entre estados:\r
\r
- **De ejecución a bloqueado**: un proceso pasa de ejecución a bloqueado cuando espera la ocurrencia de un evento externo.\r
- **De bloqueado a listo**: cuando ocurre el evento externo que esperaba\r
- **De listo a ejecución**: cuando el sistema le otorga un tiempo de CPU.\r
- **De ejecución a listo**: cuando se le acaba el tiempo asignado por el S.O.\r
\r
## 1.3.4 Planificación de procesos\r
\r
Uno de los objetivos de los sistemas operativos es la multiprogramación, es decir, admitir varios procesos en memoria para maximizar el uso del procesador. Esto funciona ya que los procesos se irán intercambiando el uso del procesador para su ejecución de forma concurrente. Para ello, el sistema operativo organiza los procesos en varias colas pasándolos de unas colas a otras\r
\r
- Cola de procesos: contiene todos los procesos del sistema\r
- Cola de procesos preparados: todos los procesos listos esperando para ejecutarse.\r
- Varias colas de dispositivos: procesos que están esperando alguna operación de E/S.\r
\r
![Colas de procesos del planificador](./../../media/unit1/process_queues.gif)\r
\r
El planificador es el encargado de seleccionar los movimientos de los procesos entre las distintas colas. Existe una planificación a corto plazo y otra a largo plazo, veamos cada una:\r
\r
- Corto plazo: selecciona los procesos de la cola de preparados para pasarlos a ejecución, se invoca con mucha frecuencia, del orden de milisegundos, por lo que el algoritmo debe ser muy sencillo.\r
  - Planificación sin desalojo: un proceso en ejecución sólo se saca si termina o bien se queda bloqueado.\r
  - Planificación apropiativa: solo se saca un proceso de ejecución si termina, se bloquea o por último aparece un proceso con mayor prioridad.\r
  - Tiempo compartido: cada cierto tiempo (cuanto), se desaloja un proceso y se mete otro, Se considera que todos los procesos tienen la misma prioridad.\r
- Largo plazo: selecciona que procesos nuevos pasan a la cola de preparados. Hace un control del grado de multiprogramación del proceso para tomar sus decisiones.\r
\r
::: warning Cambios de contexto\r
El cambio de contexto que se hace al cambiar un proceso es tiempo perdido, ya no se hace trabajo útil. Cambiar el estado del proceso, el estado del procesador (cambio valores de registro) e información de la gestión de memoria, por muy rápido que se haga si se hace con mucha frecuencia puede provocar una ralentización del sistema, por eso tener muchos programas abiertos provoca una disminución importante en el rendimiento del sistema.\r
:::\r
\r
## 1.3.5. Algoritmos de planificación de procesos\r
\r
Los algoritmos de planificación se utilizan para intentar mejorar el rendimiento del sistema y, por ende, la experiencia de usuario.\r
\r
Para establecer parámetros objetivos que permitan comparar los diferentes resultados, vamos a tomar como referencia los siguientes criterios:\r
\r
- **Tiempo de espera**: tiempo que un proceso permanece en la cola de preparados o de bloqueados esperando a ser ejecutado.\r
- **Tiempo de retorno**: tiempo transcurrido entre la llegada de un proceso y su finalización.\r
- **Uso de CPU**: % de tiempo que la CPU está siendo utilizada\r
  \r
> En un sistema con 1 unidad de proceso  \r
> ![Uso 1 CPU](./../../media/unit1/uso1cpu.gif)\r
<!--$\\frac{\\#\\ instantes\\ de\\ tiempo\\ que \\ el\\ procesador\\ esta\\ ocupado}{instante\\ de\\ tiempo\\ en\\ el\\ que\\ acaba\\ el\\ ultimo\\ proceso}$\\  \\ x \\ 100-->\r
> En un sistema con N unidades de proceso  \r
> ![Uso 2 CPU](./../../media/unit1/uso2cpu.gif)\r
<!--$\\frac{\\sum_{n=1}^{N}\\#\\ instantes\\ de\\ tiempo\\ que\\ el \\ procesador_n\\ esta\\ ocupado}{instante\\ de\\ tiempo\\ en\\ el\\ que\\ acaba\\ el\\ ultimo\\ proceso\\ *\\ N}$ x100-->\r
\r
- **Rendimiento/Productividad (throughput)**: número de procesos que se completan por unidad de tiempo\r
![Rendimiento](./../../media/unit1/rendimiento.gif)\r
<!-- $\\frac{nmero\\ de\\ procesos}{instante\\ de\\ tiempo\\ en\\ el\\ que\\ acaba\\ el\\ último\\ proceso}$-->\r
\r
| Procesos | LLegada | Tiempo uso CPU | Prioridad |\r
| :------: | :-----: | :------------: | :-------: |\r
|    P1    |    0    |       10       |     5     |\r
|    P2    |    1    |       6        |    10     |\r
|    P3    |    2    |       3        |     7     |\r
\r
Con esta información, vamos a ver cómo se comportan los diferentes algoritmos\r
\r
### FCFS - First Come First Served\r
\r
En esta política de planificación, el procesador ejecuta cada proceso hasta que termina o pasa al estado de bloqueado, por tanto, los procesos que están en la cola de procesos preparados permanecerán en el orden en que lleguen hasta que les toque su ejecución. Este método se conoce también como FIFO (Fist In, First Out).\r
\r
Se trata de una política muy simple y sencilla de llevar a la práctica, pero muy pobre en cuanto a su comportamiento.\r
\r
La cantidad de tiempo de espera de cada proceso depende del número de procesos que se encuentren en la cola en el momento de su petición de ejecución y del tiempo que cada uno de ellos tenga en uso al procesador, y es independiente de las necesidades del propio proceso.\r
\r
![FCFS monoprocessor](./../../media/unit1/fcfs-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title FCFS (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 10s\r
Process 2     : active,t2, after t1, 6s\r
Process 3     : crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       0       |        10         |           |\r
|    P2    |       9       |        15         |           |\r
|    P3    |      14       |        17         |           |\r
|          |\r
|  Medias  |      7,6      |        14         |   100%    |     0,15      |\r
\r
![FCFS dual processor](./../../media/unit1/fcfs-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title FCFS (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1, 0, 10s\r
.     : t2, 0, 0s\r
section Processor 2\r
Process 2     :active, t2, 1, 6s\r
Process 3     :crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       0       |        10         |           |\r
|    P2    |       0       |         6         |           |\r
|    P3    |       5       |         8         |           |\r
|          |\r
|  Medias  |      1,6      |         6         |    95%    |      0,3      |\r
\r
### SJF - Shortest Job First\r
\r
Este algoritmo siempre prioriza los procesos más cortos primero independientemente de su llegada y en caso de que los procesos sean iguales utilizara el método FIFO anterior, es decir, el orden según entrada. Este sistema tiene el riesgo de poner siempre al final de la cola los procesos más largos por lo que nunca se ejecutarán, esto se conoce como \`inanición\`.\r
\r
![SJF monoprocessor](./../../media/unit1/sjf-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title SJF (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 10s\r
Process 3     : crit, t3, after t1, 3s\r
Process 2     : active,t2, after t3, 6s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       0       |        10         |           |\r
|    P2    |      12       |        18         |           |\r
|    P3    |       8       |        11         |           |\r
|          |\r
|  Medias  |      7,3      |        13         |   100%    |     0,15      |\r
\r
![SJF dual processor](./../../media/unit1/sjf-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title FCFS (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1, 0, 10s\r
.     : t2, 0, 0s\r
section Processor 2\r
Process 2     :active, t2, 1, 6s\r
Process 3     :crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       0       |        10         |           |\r
|    P2    |       0       |         6         |           |\r
|    P3    |       5       |         8         |           |\r
|          |\r
|  Medias  |      1,6      |         6         |    95%    |      0,3      |\r
\r
### Planificación por prioridad\r
\r
Cada proceso tiene una prioridad, ejecutándose primero el que tenga mayor prioridad, independientemente de su llegada y en caso de que las prioridades sean iguales utilizará el método FIFO anterior, es decir, el orden según entrada.\r
\r
Como ocurría con SJF, con este algoritmo son los procesos de prioridad más baja los que tienen riesgo de\r
inanición.\r
\r
![Prioridad monoprocessor](./../../media/unit1/prioridad-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Prioridad (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 10s\r
Process 3     : crit, t3, after t1, 3s\r
Process 2     : active,t2, after t3, 6s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       0       |        10         |           |\r
|    P2    |      12       |        18         |           |\r
|    P3    |       8       |        11         |           |\r
|          |\r
|  Medias  |      6,6      |        13         |   100%    |     0,15      |\r
\r
![Prioridad dual processor](./../../media/unit1/prioridad-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Prioridad (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1, 0, 10s\r
.     : t2, 0, 0s\r
section Processor 2\r
Process 2     :active, t2, 1, 6s\r
Process 3     :crit, t3, after t2, 3s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       0       |        10         |           |\r
|    P2    |       0       |         6         |           |\r
|    P3    |       5       |         8         |           |\r
|          |\r
|  Medias  |      1,6      |         6         |    95%    |      0,3      |\r
\r
### Round Robin\r
\r
Este algoritmo de planificación es uno de los más complejos y difíciles de implementar, asigna a cada proceso un tiempo equitativo tratando a todos los procesos por igual y con la misma prioridad.\r
\r
Este algoritmo es circular, volviendo siempre al primer proceso una vez terminado con el último. Para controlar que todos los procesos tienen su tiempo de CPU este método asigna a cada proceso un intervalo de tiempo llamado \`quantum\`.\r
\r
Se pueden dar dos casuísticas con este método :\r
\r
- El proceso, o lo que le queda por ejecutar, es menor que el quantum: Al terminar antes se planifica un nuevo proceso.\r
- El proceso, o lo que le queda por ejecutar, es mayor que el quantum: Al terminar el quantum se expulsa el proceso dando paso al siguiente proceso en la lista. Al terminar la iteración se volverá para terminar el primer proceso expulsado.\r
\r
![RR monoprocessor](./../../media/unit1/roundrobin-1.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Round-Robin q=2 (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1      :done, t1, 0, 2s\r
Process 2     : active,t2, after t1, 2s\r
Process 3     : crit, t3, after t2, 2s\r
Process 1      :done, t4, after t3, 2s\r
Process 2     : active,t5, after t4, 2s\r
Process 3     : crit, t6, after t5, 1s\r
Process 1      :done, t7, after t6, 2s\r
Process 2     : active,t8, after t7, 2s\r
Process 1      :done, t9, after t8, 2s\r
Process 1      :done, t10, after t9, 2s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       9       |        19         |           |\r
|    P2    |       8       |        14         |           |\r
|    P3    |       6       |         9         |           |\r
|          |\r
|  Medias  |      7,6      |        14         |   100%    |     0,15      |\r
\r
![RR dual processor](./../../media/unit1/roundrobin-2.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Round-Robin (2 processor system)\r
dateFormat s\r
axisFormat %S\r
section Processor 1\r
Process 1     :done, t1_1, 0, 2s\r
Process 3     :crit, t3_1, after t1_1, 2s\r
Process 1     :done, t1_2, after t3_1, 2s\r
Process 3     :crit, t3_2, after t1_2, 1s\r
Process 1     :done, t1_3, after t3_2, 2s\r
Process 1     :done, t1_4, after t1_3, 2s\r
Process 1     :done, t1_5, after t1_4, 2s\r
section Processor 2\r
.     :active, ., 0, 0s\r
Process 2     :active, t2_1, 1, 2s\r
Process 2     :active, t2_2, after t2_1, 2s\r
Process 2     :active, t2_3, after t2_2, 2s\r
\`\`\`\r
-->\r
\r
| Procesos | Tiempo espera | Tiempo de retorno | % uso CPU | Productividad |\r
| :------: | :-----------: | :---------------: | :-------: | :-----------: |\r
|    P1    |       3       |        13         |           |\r
|    P2    |       0       |         6         |           |\r
|    P3    |       2       |         5         |           |\r
|          |\r
|  Medias  |      1,6      |       7,6         |    73%    |      0,23     |\r
\r
::: question Planificador combinado\r
En realidad, no se usa una única estrategia de planificación, sino que lo más común es que se combinen varias de ellas. De hecho en Round-Robin hemos usado también FCFS.\r
\r
¿Te atreves a ver cómo sería una planificación Round-Robin con prioridad? Ten en cuenta que funcionará con el quantum y a la hora de escoger el siguiente proceso a ejecutar, se basará en la prioridad de los que haya en la lista.\r
:::\r
\r
### Procesos con operaciones de E/S o bloqueos\r
\r
En los ejemplos anteriores hemos visto que todos los procesos pasan su tiempo en el procesador, pero esto no es un reflejo de la realidad, más bien al contrario. Los procesos en determinados momentos deben dejar el procesador para esperar una entrada de usuario, leer o almacenar información en disco, o símplemente esperar a que otro proceso termine una acción y le envie un dato que necesita para continuar.\r
\r
En esos instantes, el proceso deja el procesador libre para que otros puedan hacer uso de él. En el momento en que ha terminado su espera o bloqueo, se vuelve a poner en cola de preparado para seguir ejecutándose.\r
\r
En el siguiente gráfico tenemos una especificación de la actividad de 2 procesosen el que, antes de realizar el último paso de ambos, debe haber acabado la operación de E/S que realiza el proceso1.\r
\r
![Procesos con E/S](./../../media/unit1/operaciones_es.svg)\r
<!--\r
\`\`\`mermaid\r
graph LR\r
\r
subgraph Process 2\r
    p2_1["run for 2"]--p2_2["E/S for 3"]--p2_3["run for 4"]--p2_5["run for 3"]\r
end\r
subgraph Process 1\r
    p1_1["run for 3"]--p1_2["E/S for 1"]--p1_3["run for 5"]--p1_4["E/S for 2"]--p1_5["run for 4"]\r
    p1_4--p2_5\r
end\r
\`\`\`\r
-->\r
\r
Veamos cómo se materializa esto en una ejecución de los procesos, suponiendo que ambos llegan a la vez a la cola.\r
\r
![RR dual processor](./../../media/unit1/roundrobin-3.svg)\r
<!--\r
\`\`\`mermaid\r
gantt\r
title Round-Robin q=2 (monoprocessor system)\r
dateFormat s\r
axisFormat %S\r
section Task 1\r
P1 runs 2 (exits because of q expiration)      :done, t1_1, 0, 2s\r
P1 runs 1 (exits and has to wait 1 for E/S)      :done, t1_2, after t2_1, 1s\r
E/S :crit, es1_1, after t1_2, 1s\r
P1 runs 2 (exits because of q expiration)      :done, t1_3, after es1_1, 2s\r
P1 runs 2 (exits because of q expiration)      :done, t1_4, after t2_2, 2s\r
P1 runs 2 (exits and has to wait 1 for E/S)      :done, t1_5, after t2_3, 1s\r
E/S :crit, es1_2, after t1_5, 2s\r
P1 runs 2 (exits because of q expiration)      :done, t1_6, after es1_2, 2s\r
P1 runs 2 (exits because of q expiration)      :done, t1_7, after t2_4, 2s\r
\r
section Task 2 \r
P2 runs 2 (exits and has to wait 3 for E/S) :active, t2_1, after t1_1, 2s\r
E/S :crit, es2_1, after t2_1, 3s\r
P2 runs 2 (exits because of q expiration)      :active, t2_2, after t1_3, 2s\r
P2 runs 2 (exits because of q expiration)      :active, t2_3, after t1_4, 2s\r
Locked waiting :crit, es2_2, after t2_3, 3s\r
P2 runs 2 (exits because of q expiration)      :active, t2_4, after t1_6, 2s\r
P2 runs 2 (ends execution)      :active, t2_5, after t1_7, 1s\r
'''\r
-->\r
`]},{title:"1.1 Procesos, programas, hilos",headers:[{level:2,title:"1.1.1. Procesos y programas",slug:"_1-1-1-procesos-y-programas",link:"#_1-1-1-procesos-y-programas",children:[]},{level:2,title:"1.1.2. Programación concurrente",slug:"_1-1-2-programacion-concurrente",link:"#_1-1-2-programacion-concurrente",children:[{level:3,title:"¿Para qué?",slug:"¿para-que",link:"#¿para-que",children:[]},{level:3,title:"Comunicación y sincronización entre procesos",slug:"comunicacion-y-sincronizacion-entre-procesos",link:"#comunicacion-y-sincronizacion-entre-procesos",children:[]}]},{level:2,title:"1.1.3. Servicios e hilos",slug:"_1-1-3-servicios-e-hilos",link:"#_1-1-3-servicios-e-hilos",children:[{level:3,title:"Programa secuencial (Arquitectura Von Newmann)",slug:"programa-secuencial-arquitectura-von-newmann",link:"#programa-secuencial-arquitectura-von-newmann",children:[]},{level:3,title:"Programa concurrente",slug:"programa-concurrente",link:"#programa-concurrente",children:[]},{level:3,title:"Hilos vs procesos",slug:"hilos-vs-procesos",link:"#hilos-vs-procesos",children:[]}]}],path:"/es/unit1/process.html",pathLocale:"/es/",extraFields:[`---\r
title: 1.1 Procesos, programas, hilos\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
#   image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
#   markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="1.1. Procesos, programas, hilos" />\r
\r
# 1.1. Procesos, Programas, hilos\r
\r
[[toc]]\r
\r
\r
## 1.1.1. Procesos y programas\r
\r
Un \`programa\` no es más que un conjunto de instrucciones u órdenes que le indican a un dispositivo qué acciones debe realizar con los datos recibidos.\r
\r
::: tip Caja negra\r
Según la visión de un sistema como caja negra, un programa le indica al sistema cómo obtener unos datos de salida a partir de unos datos de entrada.\r
:::\r
\r
Sin embargo, un \`proceso\` es un programa en ejecución. Esto es, un proceso es una entidad activa y un programa es una entidad pasiva.\r
\r
El proceso, por tanto, está representado por el contador del programa, el valor de los registros, la pila, el *código ejecutable*, su estado, ... todo lo necesario para la ejecución del programa por parte del SO.\r
\r
![Proceso en memoria](./../../media/unit1/proceso_memoria.png)\r
\r
Cada proceso es una entidad independiente. Cuando un programa se ejecuta, el sistema operativo crea un proceso. Si ese mismo programa se vuelve a ejecutar, se crearía un proceso distinto, teniendo en memoria dos instancias del mismo programa. Pero es importante recalcar que los dos procesos son independientes.\r
\r
\r
## 1.1.2. Programación concurrente\r
\r
Podemos decir que dos procesos son concurrentes cuando la primera instrucción de uno de los procesos se ejecuta después de la primera y antes de la última de otro proceso.\r
\r
La planificación alternando los instantes de ejecución, \`multitarea\`, hace que los procesos se ejecuten de forma concurrente. También la disponibilidad de varias unidades de proceso, \`multiproceso\`, permite la ejecución simultánea o paralela de procesos en el sistema.\r
\r
![Concurrencia vs paralelismo](./../../media/unit1/concurrencia_vs_paralelismo.jpg)\r
\r
::: tip Concurrencia\r
A los dos escenarios descritos anteriormente es a lo que vamos a denominar, de forma general, **concurrencia**.\r
:::\r
\r
### ¿Para qué?\r
\r
Las principales razones por las que se utiliza una estructura concurrente son:\r
\r
- Optimizar la utilización de los recursos: Podremos simultanear las operaciones de E/S en los procesos. La CPU estará menos tiempo ociosa.\r
- Proporcionar interactividad a los usuarios (y animación gráfica).\r
- Mejorar la disponibilidad: Servidor que no realice tareas de forma concurrente, no podrá atender peticiones de clientes simultáneamente.\r
- Conseguir un diseño conceptualmente más comprensible y mantenible: El diseño concurrente de un programa nos llevará a una mayor modularidad y claridad.\r
- Aumentar la protección: Tener cada tarea aislada en un proceso permitirá depurar la seguridad de cada proceso y poder finalizarlo en caso de mal funcionamiento sin que suponga la caída del sistema.\r
\r
Además, los actuales avances tecnológicos hacen necesario tener en cuenta la concurrencia en el diseño de las aplicaciones para aprovechar su potencial. Los nuevos entornos hardware son:\r
\r
- Microprocesadores con múltiples núcleos que comparten la memoria principal del sistema.\r
- Entornos multiprocesador con memoria compartida.\r
- Entornos distribuidos y servicios cloud.\r
\r
### Comunicación y sincronización entre procesos\r
\r
Cuando varios procesos se ejecutan concurrentemente puede haber procesos que colaboren para un determinado fin mientras que puede haber otros que compitan por los recursos del sistema.\r
\r
En ambos casos se hace necesaria la introducción de mecanismos de comunicación y sincronización entre procesos.\r
\r
:::info Programación concurrente\r
Precisamente del estudio de esos **mecanismos de sincronización y comunicación** trata la programación concurrente y este módulo de PSP.\r
:::\r
\r
Si pensamos en la forma en la que un proceso puede comunicarse con otro, se nos plantean estas dos:\r
\r
- Intercambio de mensajes: Es la forma que se utiliza habitualmente cuando los procesos se encuentran en máquinas diferentes. Los procesos intercambian información siguiendo un protocolo previamente establecido.\r
- Recursos (o memoria) compartidos: Sólo se puede utilizar cuando los dos procesos se encuentran en la misma máquina y permite la sincronización de los procesos en función del valor o estado de un recurso compartido.\r
\r
También podemos ver el tipo de comunicación en función de la sincronía que mantengan los procesos durante la comunicación:\r
\r
- Síncrona: El emisor queda bloqueado hasta que el receptor recibe el mensaje. Ambos\r
se sincronizan en el momento de la recepción del mensaje.\r
- Asíncrona: El emisor continúa con su ejecución inmediatamente después de emitir el\r
mensaje, sin quedar bloqueado.\r
\r
\r
## 1.1.3. Servicios e hilos\r
\r
Un programa, como ya hemos dicho, se compone de un conjunto de sentencias (operaciones y verificaciones) y un flujo de ejecución. La línea de flujo de control establece, de acuerdo con la estructura del propio programa y de los datos que maneja, el orden en que deben ejecutarse las sentencias.\r
\r
Atendiendo al número de líneas de flujo de control que tiene un programa, los procesos pueden ser:\r
\r
- Secuenciales: Poseen un único flujo de control (monohilo)\r
- Concurrentes: Poseen varios hilos de ejecución (multihilo).\r
\r
\r
### Programa secuencial (Arquitectura Von Newmann)\r
\r
Cuando empezamos a programar, usamos el estilo de programación clásico, en el que se sigue el modelo conceptual de Von Newmann\r
\r
Los programas secuenciales presentan una línea simple de control de flujo. Las operaciones de este tipo de programas están estrictamente ordenados como una secuencia temporal lineal.\r
\r
El comportamiento del programa es solo función de la naturaleza de las operaciones individuales que constituye el programa y del orden en que se ejecutan (determinado por el conjunto de entradas que recibe).\r
\r
En los programas secuenciales, el tiempo que tarda cada operación en ejecutarse no tiene consecuencias sobre el resultado.\r
\r
![Sequential flowchat example](./../../media/unit1/sequential_flowchart.png)\r
\r
La comprobación del correcto funcionamiento (\`verificación\` o \`depuración\`) de un programa secuencial es sencilla:\r
\r
- Cada sentencia produce la respuesta correcta.\r
- Las sentencias se ejecutan en el orden esperado.\r
\r
De aquí surgen algunos de los métodos básicos de pruebas de sistemas, como el de *caja blanca*.\r
\r
### Programa concurrente\r
\r
En los programas concurrentes existen múltiples líneas de control de flujo. Las sentencias que constituyen el programa no se ejecutan siguiendo un órden que corresponda a una secuencia temporal lineal.\r
\r
En los programas concurrentes el concepto de secuencialidad entre sentencias continua siendo muy importante. Sin embargo en los programas concurrentes es de orden parcial, mientras que, tal y como hemos comentado anteriormente, en los programas secuenciales era de orden estricto.\r
\r
![Concurrent flowchat example](./../../media/unit1/concurrent_flowchart.png)\r
\r
En los programas concurrentes la *secuencialización* entre procesos concurrentes se llama **sincronización**.\r
\r
Este orden parcial implica que los programas concurrentes no tienen porqué ser deterministas, es decir, que ante el mismo conjunto de datos de entrada no siempre se va a obtener el mismo resultado.\r
\r
::: danger Indeterminismo\r
Que existan diferentes salidas para el mismo conjunto de datos de entrada no significa necesariamente que un programa concurrente sea incorrecto.\r
:::\r
\r
Si observamos el siguiente ejemplo de pseudocódigo\r
\r
\`\`\`java {16-17,25-28}\r
public class TestClass {\r
    int x;\r
\r
    public void testMethod1() {\r
        for (int i=1; i <= 5; i++) {\r
            x++;\r
        }\r
    }\r
    public void testMethod2() {\r
        for (int j=1; j <= 5; j++) {\r
            x++;\r
        }\r
    }\r
    public void sequential() {\r
        x = 0;\r
        testMethod1();\r
        testMethod2();\r
        System.out.println(x);\r
    }\r
    public void parallel() {\r
        x = 0;\r
        // cobegin-coend means that both methods are run simultaneously\r
        // These sentences doesn't exist in Java. They are used for \r
        // sample purposes\r
        cobegin\r
            testMethod1();\r
            testMethod2();\r
        coend\r
        System.out.println(x);\r
    }\r
}\r
\`\`\`\r
\r
::: question\r
¿Qué valor tendrá x tras ejecutar el método sequential?\r
\r
¿Qué valor tendrá x tras ejecutar el método parallel?\r
:::\r
\r
::: info Reseña histórica\r
La naturaleza y los modelos de interacción entre procesos de un programa concurrente fueron estudiados y descritos por **Dijkstra** (1968), Brinch **Hansen** (1973) y **Hoare** (1974). \r
\r
Estos trabajos constituyeron los principios en que se basaron los sistemas operativos multiproceso de la década de los 70 y 80.\r
:::\r
\r
El indeterminismo inherente a los programas concurrentes hace que su análisis y validación sea más complejo. No obstante, para la comprobación del correcto funcionamiento (\`verificación\` o \`depuración\`) de un programa concurrente se requiere comprobar los mismos aspectos que en los programas secuenciales, pero con los siguientes nuevos aspectos:\r
\r
- Las sentencias se pueden validar individualmente solo si no están acopladas por variables compartidas.\r
- Cuando existen variables compartidas, los efectos de interferencia entre las sentencias concurrentes pueden ser muy variados y la validación es muy difícil. <Badge type="danger" text="cuidado" vertical="middle" />\r
- Siempre que la secuencialidad entre tareas se lleve a cabo por sentencias explícitas de **sincronización**, el tiempo es un elemento que no influye sobre el resultado\r
\r
::: warning Importante\r
Estos tres aspectos que se acaban de describir forman la base de toda la programación concurrente.\r
\r
:eye: Conocerlos, entenderlos y saber aplicarlos es a lo que dedicaremos una parte importante de este curso.\r
:::\r
\r
\r
### Hilos vs procesos\r
\r
Un hilo no es más que cada una de esas líneas de flujo que puede tener un proceso ejecutándose de forma concurrente. Un procesos es una unidad pesada de ejecución.\r
\r
Así, un proceso estará formado por, al menos, un hilo de ejecución, el hilo principal. Si el proceso tiene varios hilos, cada uno es una unidad de ejecución ligera.\r
\r
| Procesos                         | Hilos                                               |\r
| :------------------------------- | :-------------------------------------------------- |\r
| Constan de uno o más hilos       | Un hilo siempre existe dentro de un proceso         |\r
| Son independientes unos de otros | Comparten los recursos del proceso de forma directa |\r
| Son gestionados por el SO        | Son gestionados por el proceso                      |\r
| Se comunican a través del SO     | La comunicación la controla el proceso              |\r
\r
![Threads vs Processes](./../../media/unit1/threads_vs_process.jpg)\r
\r
En la imagen anterior se puede observar la relación existente entre la creación de un thread y la de su proceso asociado.\r
\r
- El proceso define un espacio de memoria en el que reside. Los hilos comparten ese espacio de memoria. Dentro de ese espacio de memoria cada hilo tiene su espacio reservado, pero todos pueden compartir la memoria global del proceso y los recursos (ficheros, sockets, etc.) que el proceso tenga abiertos.\r
- Como ya hemos visto, cada proceso tiene su PCB con información relativa al proceso.\r
- Los hilos, de forma similar, tienen su TCB (Thread Control Block) en el que guardan la información específica de cada hilo (Contador de programa, puntero a la pila, estado del thread, registros y un puntero al PCB). \r
\r
::: info Servicios\r
Un servicio es un proceso que, normalmente, es cargado durante el arranque del sistema operativo. Al no necesitar interacción con el usuario, los servicios suelen ejecutarse en forma de **demonios*, quedan su ejecución en *segundo plano*.\r
\r
Recibe el nombre de servicio ya que es un proceso que queda a la espera de que otro le pida que realice una tarea. Como deben atender las solicitudes de varios procesos, los servicios suelen ser programas multihilo.\r
:::\r
`]},{title:"2.4 Anexo I - Curl",headers:[{level:2,title:"2.4.1 Cómo obtener curl",slug:"_2-4-1-como-obtener-curl",link:"#_2-4-1-como-obtener-curl",children:[]},{level:2,title:"2.4.2 Realizando una petición GET",slug:"_2-4-2-realizando-una-peticion-get",link:"#_2-4-2-realizando-una-peticion-get",children:[]},{level:2,title:"2.4.2 Puntos finales y rutas",slug:"_2-4-2-puntos-finales-y-rutas",link:"#_2-4-2-puntos-finales-y-rutas",children:[]},{level:2,title:"2.4.3 Métodos HTTP y cabeceras",slug:"_2-4-3-metodos-http-y-cabeceras",link:"#_2-4-3-metodos-http-y-cabeceras",children:[]},{level:2,title:"2.4.4 Authentication",slug:"_2-4-4-authentication",link:"#_2-4-4-authentication",children:[]},{level:2,title:"2.4.5 References",slug:"_2-4-5-references",link:"#_2-4-5-references",children:[]}],path:"/es/unit2/curl_annex.html",pathLocale:"/es/",extraFields:[`---\r
title: 2.4 Anexo I - Curl\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.4 Anexo I - Curl" />\r
\r
# 2.4 Anexo I - Curl\r
\r
 Curl está diseñado para funcionar como una forma de verificar la conectividad a las URL y como una gran herramienta para transferir datos. Tiene especial relevancia e interés cunado se trata de usar servicios basados en API REST, tanto para comprobar su funcionamiento durante la fase de pruebas o bien para cuando el sistema ya está en producción.\r
\r
Curl es una herramienta de línea de comandos que nos permite hacer peticiones HTTP desde la consola. Su principal uso es obtener una respuesta de un sitio web (pro ejemplo, para saber que no está caído) o para comprobar tiempos de respuesta.\r
\r
::: info curl means ...\r
La herramienta fué pensada para subir y descargar información usando una URL. Es una aplicación cliente (de ahí la 'c'), y a su vez es un cliente de URLs. Por lo tanto, 'c' de cliente y URL: cURL.\r
\r
En inglés "curl" se pronuncia con un sonido inicial /k/, rimando con la pronunciación de la palabra girl.\r
\r
Por el contrario, si lo deletreamos como c-URL, entonces us significado también adquiere un sentido lógico, ver-URL (see-URL), lo cual también es una buena definición de la utilidad de esta herramienta.\r
:::\r
\r
Curl funciona con protocolos que permiten la transferencia de datos en una o dos direcciones. Soporta protocolos basados en una "URI" y que estén descritos en una RFC, por lo que curl funciona principalmente con URLs (URIs en realidad) como el origen y/o destino de las transferencias e intercambios de información que realiza.\r
\r
Actualmente curl ofrece soporte para los siguiente protocolos:\r
\r
>DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP.\r
\r
## 2.4.1 Cómo obtener curl\r
\r
curl es una utilidad libre, abierta y disponible en varios formatos. Podemos descargarla y configurarla en la mayoría de los sistemas operativos y arquitecturas hardware. Algunos SO ya la incluyen en sus distribuciones.\r
\r
La fuente principal de información y descarga siempre debería ser el [sitio oficial de CURL](http://curl.se) donde podemos descargar, entre otros, los instaladores para nuestros sistemas.\r
\r
- Linux (Ubuntu / Debian). curl viene instalado por defecto. De todas formas, podemos actualizarlo e instalarlo usando el gesto de paquetes APT\r
  > apt install curl\r
- Windows 10 viene con la herramienta curl instalada en sus sistemas desde la versión 1804\r
    > podemos descargar e instalar la última versión oficial de curl para windows desde [curl windows binaries](http://curl.se/windows)\r
- MacOS también trae de serie la herramienta curl desde hace ya bastantes años. Si necesitamos actualizar la versión que tenemos en el sistema, se recomienda instalar homebrew (un gesto de paquetes para macOS)\r
    > brew install curl\r
\r
## 2.4.2 Realizando una petición GET\r
\r
La sintaxis básica de Curl se ve así:\r
\r
curl [OPTIONS] [URL]\r
El uso más simple de Curl es mostrar el contenido de una página. El siguiente comando mostrará la página de inicio de testdomain.com.\r
\r
> curl testdomain.com\r
\r
Esto generará el código fuente completo de la página de inicio del dominio. Si no se especifica ningún protocolo, curl lo interpretará a HTTP.\r
\r
\`\`\`bash:no-line-numbers{1}\r
$> curl http://www.net.net\r
<head><title>Document Moved</title></head>\r
<body><h1>Object Moved</h1>This document may be found <a HREF="http://net.net">here</a></body>\r
\r
\`\`\`\r
\r
Si no se indica lo contrario, curl realiza una solicitud HTTP con el método GET a la URL indicada. La salida del programa para el comando enviado será el cuerpo de la respuesta HTTP, en el caos anterior, el código HTML de la URL solicitada.\r
\r
Si en vez de mostrar la salida recibida por pantalla nos interesa guardar la información en un archivo, podemos usar el parámetro \`-o (--output)\`:\r
\r
> curl -o output.html www.net.net\r
>\r
> // Es equivalente a hacer esto en el SO\r
>\r
> curl www.net.net > output.html\r
\r
Como hemos visto en la sintaxis, por norma general la URL debe ponerse al final del comando. Opcionalmente podemos especificar la URL en cualquier lugar del comando si usamos el modificador \`-s (--silent)\`, pudiendo así alterar el orden de los argumentos de curl.\r
\r
curl -s http://www.net.net -o output.html\r
\r
En los ejemplos anteriores, el resultado que estamos obteniendo no es el deseado ya que el recurso se ha cambiado de ubicación o bien el sitio nos está redirigiendo a otra URI. Si usamos el parámetro \`-L (--location)\`  podemos hacer que curl siga las redirecciones y obtenga el contenido final que buscamos.\r
\r
\`\`\`bash:no-line-numbers{1,3,5}\r
$> curl http://www.dataden.tech\r
Redirecting\r
$> curl -L http://www.dataden.tech\r
<html><head><title>Loading...</title></head><body><script type='text/javascript'>window.location.replace('http://www.dataden.tech/?js=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJKb2tlbiIsImV4cCI6MTYzMzM4OTE3OSwiaWF0IjoxNjMzMzgxOTc5LCJpc3MiOiJKb2tlbiIsImpzIjoxLCJqdGkiOiIycWxmMGdkZmg2YWlzaHMxdjgwdWx0aTQiLCJuYmYiOjE2MzMzODE5NzksInRzIjoxNjMzMzgxOTc5NzgzNzQ1fQ.y5LwDoSoZCpe2tzro_FbX7cSGIw4nx1XweNBqjpLXoo&sid=da601018-2557-11ec-a001-58f389072b17');<\/script></body></html>\r
$> curl -L http://www.net.net\r
<html>\r
        <head>\r
                <title>NET.NET [The first domain name on the Internet!]</title>\r
        </head>\r
        <body>\r
                <!-- Begin: Google Analytics -->\r
                <script>\r
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r
                  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\r
                  ga('create', 'UA-32196-28', 'auto');\r
                  ga('send', 'pageview');\r
                <\/script>\r
                <!-- End: Google Analytics -->\r
                <center>\r
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />\r
                        <font face="impact, Arial, Helvetica, sans-serif" size="14">\r
                                NET.NET\r
                        </font>\r
                        <br /><br /><br /><br />\r
                        <font face="Arial, Helvetica, sans-serif" size="1">\r
                                <a href="http://who.godaddy.com/whoischeck.aspx?domain=NET.NET" target="_blank">NET.NET</a> is the first and the best domain name on the Internet!\r
                                <br />\r
                                Coming Soon...\r
                        </font>\r
                </center>\r
        </body>\r
</html>\r
\`\`\`\r
\r
De momento sólo hemos obtenido el HTML del recurso solicitado. Si queremos ver las cabeceras HTTP de nuestra solicitud y de la respuesta recibida podemos usar el parámetro \`-v (--verbose)\` que mostrará toda la información que intercambia el protocolo HTTP..\r
\r
\`\`\`bash:no-line-numbers{1}\r
$> curl -v  http://www.net.net\r
*   Trying 34.250.90.28:80...\r
* TCP_NODELAY set\r
* Connected to net.net (34.250.90.28) port 80 (#0)\r
> GET / HTTP/1.1\r
> Host: net.net\r
> User-Agent: curl/7.68.0\r
> Accept: */*\r
>\r
* Mark bundle as not supporting multiuse\r
< HTTP/1.1 200 OK\r
< Cache-Control: private\r
< Content-Type: text/html\r
< Server: Microsoft-IIS/10.0\r
< Set-Cookie: ASPSESSIONIDASRSRRAR=IMFFLMBBBIFJNLNDHLOACDAI; path=/\r
< X-Powered-By: ASP.NET\r
< Date: Mon, 04 Oct 2021 21:40:49 GMT\r
< Content-Length: 1080\r
<\r
<html>\r
        <head>\r
                <title>NET.NET [The first domain name on the Internet!]</title>\r
        </head>\r
        ...\r
\`\`\`\r
\r
En el ejemplo anterior podemos ver las cabeceras de nuestra solicitud (REQUEST) precedidas del caracter \`>\` mientras que las cabeceras de la respuesta (RESPONSE) se muestran precedidas dek caracter \`<\`.\r
\r
::: info formato corto y largo de los parámetros\r
Como ya hemos visto, los parámetros sirven para modificar el comportamiento por defecto de curl en función de las necesidades.\r
\r
Los parámetros de una sola letra son rápidos de usar y recordar, pero tenemos un número limitado de parámetros de este tipo por lo que no podemos tener uno para cada opción.\r
Los parámetros que usan palabras están para solucionar la falta de opciones con formato corto. Por otro lado, su uso hace que los comandos sean más legibles, por este motivo la mayoría de parámetros cortos tienen su equivalente largo.\r
\r
En el formato corto, los parámetros están formados por un guión seguido de la letra correspondiente a la opción. Se puede usar un guión para cada opción, o incluir varias opciones detrás de un único guión.\r
\r
> $> curl -v -L http://example.com\r
> $> curl -vL http://example.com\r
\r
En el formato largo, los parámetros se preceden de dos guiones y la palabra o palabras que forman la opción. Tras cada doble guión sólo se puede indicar una opción.\r
\r
> $> curl --verbose --location http://example.com\r
\r
:::\r
\r
Por último, aunque ya hemos visto como obtener la información de las cabeceras, podemos visualizar la información de la respuesta de forma completa usando la opción \`-i (--include)\` or obtener sólo las cabeceras de la respuesta con el uso de la opción \`-I (--head)\`. Esto sólo afecta al información de la respuesta (HTTP RESPONSE) y en el primer caso veremos  la respuesta completa (headers & data) o sólo los headers con la segunda opción.\r
\r
\`\`\`bash:no-line-numbers{1}\r
$>  curl -I https://jsonplaceholder.typicode.com/todos/1\r
HTTP/2 200\r
date: Mon, 04 Oct 2021 21:57:55 GMT\r
content-type: application/json; charset=utf-8\r
content-length: 83\r
x-powered-by: Express\r
x-ratelimit-limit: 1000\r
x-ratelimit-remaining: 999\r
x-ratelimit-reset: 1631546224\r
vary: Origin, Accept-Encoding\r
access-control-allow-credentials: true\r
cache-control: max-age=43200\r
pragma: no-cache\r
expires: -1\r
x-content-type-options: nosniff\r
etag: W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"\r
via: 1.1 vegur\r
cf-cache-status: HIT\r
age: 10926\r
accept-ranges: bytes\r
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"\r
report-to: {"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LxJlkSosQdWmBFBOx1fB6zrbjSbU0iStl7jjtlVL27CtOEPxem%2Ffl9y%2BCajMUopcZINOEsaufiU8A2glOLEmNpO5a40%2FyWb%2B4dBuspS8VGWnCRW4jxBBmh%2F3FbupAEaxy66TUPariKJLqe3PL5iq"}],"group":"cf-nel","max_age":604800}\r
nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}\r
server: cloudflare\r
cf-ray: 6991ab2c1a5037c7-MAD\r
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400\r
\`\`\`\r
\r
Para acabar, y como curiosidad, añadiendo la opción \`-w "%{time_total}\\n"\` podremos ver el tiempo total que se ha tardado en recibir la respuesta del servidor.\r
\r
## 2.4.2 Puntos finales y rutas\r
\r
El término técnico \`endpoint\` hace referencia la la URL que se utiliza URL para hacer una petición. Para un mismo servicio, esta URL suele ser siempre la misma y es una de las características de las API REST.\r
\r
Para un API, los *puntos finales* son URLs y se describen en la documentación de la APU de forma que los programadores sepan cómo usarla y acceder a los recursos y servicios que proporciona.\r
\r
En el siguiente ejemplo tenemos una API con el siguiente endpoint.\r
\r
> GET https://my-api.com/Library/Books\r
\r
Esto devolvería una lista completa de los libros que hay en la biblioteca.\r
\r
Una ruta ("route") no es más que la parte de la URL que completa al endpoint y que se utiliza para seleccionar y/o acceder a diferentes componentes del servicio o API.\r
\r
> GET https://my-api.com/Library/Books/341\r
\r
El ejemplo anterior devolvería el libro con identificador 341 de los que hay en la biblioteca.\r
\r
Como ejemplo en [SWAPI (Star Wars API)](https://swapi.dev/) el endpoint es \`https://swapi.dev/api/\`. Este es el punto de entrada para todas las peticiones.\r
\r
Además, hay muchas rutas dependiendo de la información que queramos recuperar/añadir/modificar/borrar..\r
\r
\`\`\`java:no-line-numbers\r
$> curl https://swapi.dev/api/people/1\r
$> curl https://swapi.dev/api/planet/3\r
$> curl https://swapi.dev/api/vehicles\r
\`\`\`\r
\r
## 2.4.3 Métodos HTTP y cabeceras\r
\r
Todas las peticiones HTTP tienen un método asociado, también llamado verbo. Por defecto ya hemos visto que se usa GET, pero también tenemos POST, HEAD y PUT que se utilizan bastante.\r
\r
POST es el método HTTP que se ideó para enviar y recibir información de una aplicación web y es el que utilizan, entre otros, los formularios web.\r
\r
Cuando los datos de un formulario se envían desde un navegador se mandan \`URL encoded\`, como una serie de pares nombre=valor separados con símbolos ampersand (&).\r
\r
Para enviar datos con curl lo indicamos con la opción \`-d (--data)\` con el siguiente formato:\r
\r
> curl -d 'name=admin&shoesize=12' http://example.com/\r
\r
Curl es capaz de seleccionar el método HTTP que debe utilizar en función de las opciones que recibe. Si utilizamos \`-d\` curl hará un POST, con \`-I\` hará un HEAD, etc. Con la opción \`-X (--request)\` podemos indicar qué método queremos que use curl.\r
\r
> curl -X POST -d 'imageSize=big&imageType=jpg' http://example.org/\r
\r
Si usamos la opción POSTing with curl's \`-d\` ya hemos visto que por defecto se hace POST. Además de eso, se incluye una cabecera para indicar el formato de los datos enviados \`Content-Type: application/x-www-form-urlencoded\`. Esto es lo que hace un navegador cuando enviamos un formulario.\r
\r
Puede ocurrir que los datos que estamos enviando no tengan ese formato, bien porque estemos subiendo algún archivo, enviando información binaria, usando JSON, XML, ... en estos casos podemos, a través de la misma cabecera Content-Type, indicar el formato de la información que estamos enviando.\r
\r
Por ejemplo si queremos enviar información en formato jSON:\r
\r
> curl -X "POST" -d '{"imageSize":"big","imageType":"jpg","scale":"false"}' -H 'Content-Type: application/json' https://example.com\r
\r
## 2.4.4 Authentication\r
\r
Cada solicitud HTTP puede ser autenticada. Un servidor o proxy puede necesitar que el usuario confirme su identidad o que tiene los permisos necesarios para acceder a una URL para realizar una acción. En ese caso se le enviará al cliente una respuesta en la que se le indique que debe proporcionar información de autenticación en la cabecera HTTP para que se le permita completar esa solicitud.\r
\r
En curl, la forma de realizar una petición HTTP autenticadaes con la opción \`-u (--user)\` y proporcionando un usuario y contraseña (separados por \`:\`).\r
\r
> curl --user daniel:secret http://example.com/\r
\r
Esto hará que curl utilice el método de autenticación HTTP por defecto, denominado "Basic"\r
\r
Otras aplicaciones hacen uso de una clave secreta \`secret key\` o testigos de autorización \`Authorization token\`. Esta información nos la proporciona del servicio cuando lo creamos y configuramos.\r
\r
[Trello API Introduction](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/)\r
\r
[Azure Translator API Reference](https://docs.microsoft.com/es-es/azure/cognitive-services/translator/reference/v3-0-translate)\r
\r
Por ejemplo, si queremos usar el servicio \`translate\` de Azure tendremos que obtener una *secret key* y utilizarla en la cabecera de cada solicitud que realicemos\r
\r
\`\`\`java:no-line-numbers\r
$> curl -X POST "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en&to=it" -H "Ocp-Apim-Subscription-Key: <here goes your susbcription key>" -H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'Hola, com esteu?'}]"\r
[{"detectedLanguage":{"language":"ca","score":1.0},"translations":[{"text":"Hello, how are you?","to":"en"},{"text":"Ciao come stai?","to":"it"}]}]\r
\`\`\`\r
\r
Otras veces, para no enviar siempre la secret key, solicitamos una autorización temporal, obteniendo un \`Authorization token\` que podemos usar para acceder al servicio durante un breve período de tiempo. Una vez que el token expire, debemos solicitar otro.\r
Para el envío de tokens se utiliza la cabecera \`Authorization: Bearer <token>\`.\r
\r
\`\`\`java:no-line-numbers{1,3,5}\r
$> curl -X POST "https://api.cognitive.microsoft.com/sts/v1.0/issueToken" \r
        -H "Ocp-Apim-Subscription-Key: <here goes the secret key>" -d {}\r
eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJnbG9iYWwiLCJzdWJzY3JpcHRpb24taWQiOiJjOTM1ZjNhNjIwMjM0ZTVhYTIyNzUzMmI4ZGQ2ZmRkYyIsInByb2R1Y3QtaWQiOiJUZXh0VHJhbnNsYXRvci5GMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy9iMTFlODUwMS1kNjg2LTRmNjctODg4NC0wMjkzYmNkYTQ5NGEvcmVzb3VyY2VHcm91cHMvVGVzdFBTUC9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3JQU1AtVk1NIiwic2NvcGUiOiJodHRwczovL2FwaS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS8iLCJhdWQiOiJ1cm46bXMubWljcm9zb2Z0dHJhbnNsYXRvciIsImV4cCI6MTYzMzM4OTcxMCwiaXNzIjoidXJuOm1zLmNvZ25pdGl2ZXNlcnZpY2VzIn0.MFr7ka5azMv-2ZakpdJc6GIWAsp4SJKN6Hfe1LzmNJE\r
$> curl -X POST \r
"https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en&to=it" \r
-H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJnbG9iYWwiLCJzdWJzY3JpcHRpb24taWQiOiJjOTM1ZjNhNjIwMjM0ZTVhYTIyNzUzMmI4ZGQ2ZmRkYyIsInByb2R1Y3QtaWQiOiJUZXh0VHJhbnNsYXRvci5GMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy9iMTFlODUwMS1kNjg2LTRmNjctODg4NC0wMjkzYmNkYTQ5NGEvcmVzb3VyY2VHcm91cHMvVGVzdFBTUC9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3JQU1AtVk1NIiwic2NvcGUiOiJodHRwczovL2FwaS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS8iLCJhdWQiOiJ1cm46bXMubWljcm9zb2Z0dHJhbnNsYXRvciIsImV4cCI6MTYzMzMwMTUxNywiaXNzIjoidXJuOm1zLmNvZ25pdGl2ZXNlcnZpY2VzIn0.0hyyBNr22E2sIO_ZBlTiBePXM_KE_5hQOCeHxz3US44" \r
-H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'Hola, com esteu?'}]"\r
{"error":{"code":401000,"message":"The request is not authorized because credentials are missing or invalid."}}\r
$> curl -X POST \r
"https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en&to=it" \r
-H "Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJnbG9iYWwiLCJzdWJzY3JpcHRpb24taWQiOiJjOTM1ZjNhNjIwMjM0ZTVhYTIyNzUzMmI4ZGQ2ZmRkYyIsInByb2R1Y3QtaWQiOiJUZXh0VHJhbnNsYXRvci5GMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy9iMTFlODUwMS1kNjg2LTRmNjctODg4NC0wMjkzYmNkYTQ5NGEvcmVzb3VyY2VHcm91cHMvVGVzdFBTUC9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3JQU1AtVk1NIiwic2NvcGUiOiJodHRwczovL2FwaS5taWNyb3NvZnR0cmFuc2xhdG9yLmNvbS8iLCJhdWQiOiJ1cm46bXMubWljcm9zb2Z0dHJhbnNsYXRvciIsImV4cCI6MTYzMzM4OTcxMCwiaXNzIjoidXJuOm1zLmNvZ25pdGl2ZXNlcnZpY2VzIn0.MFr7ka5azMv-2ZakpdJc6GIWAsp4SJKN6Hfe1LzmNJE" \r
-H "Content-Type: application/json; charset=UTF-8" -d "[{'Text':'Hola, com esteu?'}]"\r
[{"detectedLanguage":{"language":"ca","score":1.0},"translations":[{"text":"Hello, how are you?","to":"en"},{"text":"Ciao come stai?","to":"it"}]}]\r
\`\`\`\r
\r
## 2.4.5 References\r
\r
[Everything curl](https://everything.curl.dev/) es un libro gratuito que cubre con detalle prácticamente todo lo que hay que saber sobre curl.\r
\r
[freecodecamp.org](https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/)\r
\r
[Sitio oficial de curl](https://curl.se/)\r
`]},{title:"2 Introducción",headers:[{level:2,title:"Objetivos",slug:"objetivos",link:"#objetivos",children:[]}],path:"/es/unit2/",pathLocale:"/es/",extraFields:[`---\r
title: 2 Introducción\r
---\r
\r
# Tema 2. Programación de procesos\r
\r
Una vez hemos aprendido a diferenciar entre programas, procesos e hilos, en este segundo tema vamos a aprender cómo desde un programa creado por nosotros podemos lanzar otros programas, es decir, desde un proceso en ejecución, podemos crear otro proceso.\r
\r
Además de lanzarlos, al establecerse una relación padre-hijo estos procesos pueden comunicarse entre sí intercambiando información. De esta forma nuestros programas podrán lanzar otras aplicaciones, comandos del SO e incluso otras aplicaciones nuestras, permitiendo cierto grado de sincronización y comunicación entre ellas.\r
\r
## Objetivos\r
\r
Los objetivos que alcanzaremos tras esta unidad son:\r
\r
- Conocer las clases de Java para la creación de procesos\r
- Monitorizar y controlar el ciclo de vida de un proceso\r
- Controlar la comunicación entre procesos padre/hijo\r
- Usar métodos para la sincronización entre procesos y subprocesos\r
- Entender el mecanismo de comunicación mediante tuberías (pipes)\r
- Aprender la sintaxis y uso del comando curl para probar API REST desde un programa\r
- Crear programas que ejecuten tareas en paralelo.\r
`]},{title:"2.3 Gestión de la E-S de un proceso",headers:[{level:2,title:"2.3.1  Redirección de la E/S estándar",slug:"_2-3-1-redireccion-de-la-e-s-estandar",link:"#_2-3-1-redireccion-de-la-e-s-estandar",children:[{level:3,title:"getInputStream()",slug:"getinputstream",link:"#getinputstream",children:[]},{level:3,title:"getErrorStream()",slug:"geterrorstream",link:"#geterrorstream",children:[]},{level:3,title:"getOutputStream()",slug:"getoutputstream",link:"#getoutputstream",children:[]},{level:3,title:"Heredar la E/S del proceso padre",slug:"heredar-la-e-s-del-proceso-padre",link:"#heredar-la-e-s-del-proceso-padre",children:[]},{level:3,title:"Pipelines",slug:"pipelines",link:"#pipelines",children:[]}]},{level:2,title:"2.3.2 Redirección de las Entradas y Salidas Estándar",slug:"_2-3-2-redireccion-de-las-entradas-y-salidas-estandar",link:"#_2-3-2-redireccion-de-las-entradas-y-salidas-estandar",children:[]},{level:2,title:"2.3.3 Información de los procesos en Java",slug:"_2-3-3-informacion-de-los-procesos-en-java",link:"#_2-3-3-informacion-de-los-procesos-en-java",children:[]}],path:"/es/unit2/iostreams.html",pathLocale:"/es/",extraFields:[`---\r
title: 2.3 Gestión de la E-S de un proceso\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.3 Gestión de la E-S de un proceso" />\r
\r
# 2.3 Gestión de la E-S de un proceso\r
\r
[[toc]]\r
\r
## 2.3.1  Redirección de la E/S estándar\r
\r
Ya hemos comentado que un subproceso no tiene terminal o consola en el que poder mostrar su información. Toda la E/S por defecto ((stdin - teclado -, stdout y stderr - pantalla- ) por defecto se redirige al proceso padre. Es el proceso padre el que puede usar estos streams para recoger o enviar información al proceso hijo.\r
\r
::: danger Código del proceso hijo\r
En ningún momento, cuando estamos programando un proceso, debemos pensar si va a ser lanzado como padre o como hijo.\r
\r
Es más, todos los programas que hacemos son lanzados como hijos por el IDE (Netbeans) y eso no hace que cambiemos nuestra forma de programarlos.\r
\r
Un proceso que vayamos a lanzar como hijo debería funcionar perfectamente como proceso independiente y puede ser ejecutado directamente sin tener que hacerle ningún tipo de cambio.\r
:::\r
\r
Este intercambio de información nos da mucha flexibilidad y proporciona una forma de control y comunicación sobre el proceso hijo.\r
\r
::: info La E/S en el SO y las tuberías\r
La E/S en sistemas Linux, como casi todo lo demás, es tratada como un fichero.\r
\r
Dentro de cada proceso, cuando se accede a un fichero, se le asigna un identificador único. Hay tres identificadores que se crean y se abren con la creación del proceso, y que además siempre tienen el mismo identificador:\r
\r
- 0: stdin\r
- 1: stdout\r
- 2: stderr\r
\r
Estos *descriptores de fichero* permiten gestionar sus streams asociados de diferentes formas. Podemos redirigir la salida de un proceso (stdout) a un archivo y seguir viendo los mensajes de error (stderr) en la consola, o bien podemos hacer que la entrada de datos a un programa se lea desde un fichero en vez del teclado, lo que permitiría automatizar pruebas, por ejemplo.\r
\r
Estos son algunos ejemplos de cómo se hacen estas redirecciones a nivel de So:\r
\r
\`\`\`bash:no-line-numbers\r
# Redirecciona la salida de ls a un archivo\r
ls > capture.txt  \r
# Redirecciona la salida de ls a la entrada de cat (doble redirección)\r
# Esto es una tubería\r
ls | cat  \r
# Cambia la salida de program.sh a capture.txt y los errores a error.txt\r
./program.sh 1> capture.txt 2> error.txt \r
# Redirige la salida y los errores de program.sh al mismo archivo, capture.txt\r
./program.sh > capture.txt 2>&1\r
# Cambia la entrada de program.sh al contenido de dummy.txt\r
./program.sh < dummy.txt\r
# Redirige la salida del primer comando y la pone como entrada del segundo\r
# Esto es una tubería\r
cat dummy.txt | ./program.sh\r
\`\`\`\r
\r
[Redirecciones E/S en Linux](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection)\r
:::\r
\r
En la relación padre-hijo que se crea entre procesos los descriptores también se redirigen desde ek hijo hacia el padre, usando 3 tuberías (pipes), una por cada stream de E/S por defecto. Esas tuberías pueden usarse de forma similar a cómo se hace en los sistemas Linux.\r
\r
![alt_text](./../../media/unit2/pipe_with_two.jpg)\r
\r
### getInputStream()\r
\r
No sólo es importante recoger el valor de retorno de un comando, sino que muchas veces nos va a ser de mucha utilidad el poder obtener la información que el proceso genera por la salida estándar o por la salida de error.\r
\r
Para esto vamos a utilizar el método \`public abstract InputStream getInputStream()\` de la clase \`Process\` para leer el stream de salida del proceso, es decir, para leer lo que el comando ejecutado (proceso hijo) ha enviado a la consola.\r
\r
\`\`\`java{3}\r
Process p = pbuilder.start();\r
BufferedReader processOutput = \r
    new BufferedReader(new InputStreamReader(p.getInputStream()));\r
\r
String linea;    \r
while ((linea = processOutput.readLine()) != null) {\r
    System.out.println("> " + linea);        \r
}            \r
processOutput.close();    \r
\`\`\`\r
\r
![alt_text](./../../media/unit2/Java_Stream_Readers_BufferedReaders.jpg)\r
\r
::: warning Charsets y encodings\r
Desde el inicio de la informática los juegos de caracteres y las codificaciones han supuesto un auténtico quebradero de cabeza para los programadores, especialmente cuando trabajamos con juegos de caracteres no anglosajones. Pues bien, la consola de Windows no iba a ser una excepción.\r
\r
La consola de windows, conocida como *"DOS prompt"* o *cmd*, es la forma de ejecutar programas y comandos DOS en Windows, por lo tanto esos programas mantienen la codificación de DOS. A Microsoft no le gustan hacer cambios que pierdan la compatibilidad hacia atrás, es decir, que sean compatibles con versiones anteriores, así que cuando hagamos una aplicación que trabaje con la consola debemos tener en cuenta esta circunstancia.\r
\r
En Wikipedia comentan que la codificación  **CP850** teóricamente ha sido ampliamente reemplazada por **Windows-1252** y posteriormente Unicode, pero aún así **CP850** sigue presente en la consola de comandos.\r
\r
Por lo tanto, si quetemos mostrar información de la consola en nuestras aplicaciones, debemos trabajar con el charset adecuado, a saber, CP-850.\r
\r
Para usar un encoding concreto, la clase InputStreamReader, que pasa de gestionar bytes a caracteres, tiene un constructor que permite especificar el tipo de codificación usado en el stream de bytes que recibimos, así que que debemos usar este constructor cuando trabajemos con aplicaciones de consola.\r
\r
\`\`\`java:no-line-numbers\r
new InputStreamReader(p.getInputStream(), "CP850");\r
\`\`\`\r
\r
> Además, para usar una codificación universal, podemos forzar que Netbeans, o mejor dicho la máquina virtual que usa Netbeans, utilice **por defecto el charset \`UTF-8\`**. Para hacerlo, debemos modificar el archivo de configuración de Netbeans \`C:/Program Files/Netbeeans-xx.x/netbeans/etc/netbeans.conf\`, y modificar la directiva \`netbeans_default_option\` añadiendo al final **-J-Dfile.encoding=UTF-8**.\r
\r
:::\r
\r
### getErrorStream()\r
\r
Curiosamente, o no tanto, además de la salida estándar, también podemos obtener la salida de error (stderr) que genera el proceso hijo para procesarla desde el padre.\r
\r
Si la salida de error ha sido previamente redirigida usando el método \`ProcessBuilder.redirectErrorStream(true)\` entonces la salida de error y la salida estándar llegan juntas con getInputStream() y no es necesario hacer un tratamiento adicional.\r
\r
Si por el contrario queremos hacer un tratamiento diferenciado de los dos tipos de salid, podemos usar un schema similar al usado anteriormente, con la salvedad de que ahora en vez du llamar a \`getInputStream()\` lo hacemos con \`getErrorStream()\`.\r
\r
\`\`\`java{3}\r
Process p = pbuilder.start();\r
BufferedReader processError = \r
    new BufferedReader(new InputStreamReader(p.getErrorStream()));\r
// En este ejemplo, por ver una forma diferente de recoger la información,\r
// en vez de leer todas las líneas que llegan, recogemos la primera línea\r
// y suponemos que nos han enviado un entero.    \r
int value = Integer.parseInt(processError.readLine());\r
processError.close();\r
\`\`\`\r
\r
::: info Patrón de diseño Decorator o Wrapper\r
En ambos tipos de streams de entrada (input y error) estamos recogiendo la información de un objeto de tipo BufferedReader. Podríamos usar directamente el InputStream que nos devuelven los métodos de Process, pero tendríamos que encargarnos nosotros de convertir los bytes a caracteres, de leer el stream caracter a caracter y de controlar el flujo al no disponer de un buffer.\r
\r
Todo esto nos lo podemos ahorrar usando clases que gestionan el flujo a un nivel de concreción más alto, usando sin llegar a ser conscientes otro patrón de diseño bastante común, **Patrón de diseño Decorator** también llamado **wrapper o envoltorio**.\r
\r
> Decorator es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.\r
\r
[Refactoring.Guru patrones de diseño](https://refactoring.guru/design-patterns/java)\r
:::\r
\r
Vamos a ver un ejemplo completo de uso de todas las funcionalidad anteriores\r
\r
\`\`\`java{5,8,10,14,17}\r
import java.io.*;\r
public class Ejercicio2 {\r
    public static void main(String[] args) {\r
        String comando = "notepad";\r
        ProcessBuilder pbuilder = new ProcessBuilder (comando);\r
        Process p = null;\r
        try {\r
            p = pbuilder.start();\r
            // 1- Procedemos a leer lo que devuelve el proceso hijo\r
            InputStream is = p.getInputStream();\r
            // 2- Lo convertimos en un InputStreamReader\r
            // De esta forma podemos leer caracteres en vez de bytes\r
            // El InputStreamReader nos permite gestionar diferentes codificaciones\r
            InputStreamReader isr = new InputStreamReader(is);\r
            // 2- Para mejorar el rendimiento hacemos un wrapper sobre un BufferedReader\r
            // De esta forma podemos leer enteros, cadenas o incluso líneas.\r
            BufferedReader br = new BufferedReader(isr);\r
\r
            // A Continuación leemos todo como una cadena, línea a línea\r
            String linea;\r
            while ((linea = br.readLine()) != null) \r
                System.out.println(linea);\r
        } catch (Exception e) {\r
            System.out.println("Error en: "+comando);\r
            e.printStackTrace();\r
        } finally {\r
            // Para finalizar, cerramos los recursos abiertos\r
            br.close();\r
            isr.close();\r
            is.close();\r
        }    \r
    }\r
}\r
\`\`\`\r
\r
### getOutputStream()\r
\r
No sólo podemos recoger la información que envía el proceso hijo sino que, además, también podemos enviar información desde el proceso padre al proceso hijo, usando el último de los tres streams que nos queda, el \`stdin\`.\r
\r
Igual que con las entradas que llegan desde el proceso hijo, podemos enviar la información usando directamente el OutputStream del proceso, pero lo haremos de nuevo con un Decorator.\r
\r
En este caso, el *wrapper* de mayor nivel nivel para usar un OutputStream es la clase PrintWriter que nos ofrece métodos similares a los de \`System.out.printxxxxx\` para gestionar el flujo de comunicación con el proceso hijo.\r
\r
\`\`\`java{4}\r
PrintWriter toProcess = new PrintWriter(\r
    new BufferedWriter(\r
        new OutputStreamWriter(\r
            p.getOutputStream(), "UTF-8")), true);\r
toProcess.println("sent to child");\r
\`\`\`\r
\r
### Heredar la E/S del proceso padre\r
\r
Con el método \`inheritIO()\` podemos redireccionar todos los flujos de E/S del proceso hijo a la E/S estándar del proceso padre.\r
\r
\`\`\`java{3}\r
ProcessBuilder processBuilder = new ProcessBuilder("/bin/sh", "-c", "echo hello");\r
\r
processBuilder.inheritIO();\r
Process process = processBuilder.start();\r
\r
int exitCode = process.waitFor();\r
\`\`\`\r
\r
En el ejemplo anterior, tras invocar al método inheritIO() podemos ver la salida del comando ejecutado en la consola del proceso padre dentro del IDE Netbeans.\r
\r
### Pipelines\r
\r
Java 9 introdujo el concepto de \`pipelines\` en el API de ProcessBuilder:\r
\r
\`\`\`java:no-line-numbers\r
public static List<Process> startPipeline​(List<ProcessBuilder> builders)\r
\`\`\`\r
\r
El método \`startPipeline\` usa un lista de objetos ProcessBuilder. Este método estático se encarga de lanzar un proceso para cada uno de los ProcessBuilder recibidos. Y lo que automatiza es la creación de tuberías encadenadas (pipeline) haciendo que la salida de cada proceso esté enlazada con la entrada del siguiente..\r
\r
Por ejemplo, si queremos realizar este tipo de operaciones tan comunes en shellscript:\r
\r
> find . -name *.java -type f | wc -l\r
\r
Lo que haremos será crear un ProcessBuilder para cada uno de los comandos, y  pasárselos todos al método startPipeline para que los ejecute y los encadene.\r
\r
\`\`\`java\r
List builders = Arrays.asList(\r
    new ProcessBuilder("find", "src", "-name", "*.java", "-type", "f"), \r
    new ProcessBuilder("wc", "-l"));\r
\r
List processes = ProcessBuilder.startPipeline(builders);\r
Process last = processes.get(processes.size() - 1);\r
\r
// Desde el proceso padre podemos recoger la salida del último proceso para \r
// el resultado final del pipeline\r
\`\`\`\r
\r
El ejemplo anterior busca todos los archivos .java  dentro del directorio src, encadena la salida hacia el comando wc para contar cuantos ficheros ha encontrado, siendo este el resultado final del pipeline.\r
\r
## 2.3.2 Redirección de las Entradas y Salidas Estándar\r
\r
En un sistema real, probablemente necesitemos guardar los resultados de un proceso en un archivo de log o de errores para su posterior análisis. Afortunadamente lo podemos hacer sin modificar el código de nuestras aplicaciones usando los métodos que proporciona el API de ProcessBuilder para hacer exactamente eso.\r
\r
Por defecto, tal y como ya hemos visto, los procesos hijos reciben la entrada a través de una tubería a la que podemos acceder usando el OutputStream que nos devuelve \`Process.getOutputStream()\`.\r
\r
Sin embargo, tal y como veremos a continuación, esa entrada estándar se puede cambiar y redirigirse a otros destinos como un fichero usando el método \`redirectOutput(File)\`. Si modificamos la salida estándar, el método getOutputStream() devolverá *ProcessBuilder.NullOutputStream*.\r
\r
::: info Redirección antes de ejecutar\r
Es importante fijarse en qué momento se realiza cada acción sobre un proceso.\r
\r
Antes hemos visto que los flujos de E/S se consultan y gestionan una vez que el proceso está en ejecución, por lo tanto los méotodos que nos dan acceso a esos *streams* son métodos de la clase \`Process\`.\r
\r
Si lo que queremos es redirigir la E/S, como vamos a ver a continuación, lo haremos mientras preparamos el proceso para ser ejecutado. De forma que cuando se lance sus streams de E/S se modifiquen. Por eso en esta ocasión los métodos que nos permiten redireccionar la E/S de los procesos son métodos de la clase \`ProcessBuilder\`.\r
::::\r
\r
Vamos a ver con un ejemplo cómo hacer un programa que muestre la versión de Java. Ahora bien, en esta ocasión la salida se va a guardar en un archivo de log en vez de enviarla al padre por la tubería de salida estándar:\r
\r
\`\`\`java{7}\r
ProcessBuilder processBuilder = new ProcessBuilder("java", "-version");\r
\r
// La salida de error se enviará al mismo sitio que la estándar\r
processBuilder.redirectErrorStream(true);\r
\r
File log = folder.newFile("java-version.log");\r
processBuilder.redirectOutput(log);\r
\r
Process process = processBuilder.start();\r
\`\`\`\r
\r
En el ejemplo anterior podemos observar como se crea un archivo temporal llamado *java-version.log* e indicamos a ProcessBuilder que la salida la redirija a este archivo.\r
\r
Es lo mismo que si llamásemos a nuestra aplicacion usando el operador de redirección de salida:\r
\r
> java ejemplo-java-version > java-version.log\r
\r
Ahora vamos a fijarnos en una variación del ejemplo anterior. Lo que queremos hacer ahora es añadir (\`append to\`) información al archivo de log file en vez de sobreescribir el archivo cada vez que se ejecuta el proceso. Con sobreeescribir nos referimos a crear el archivo vacío si no existe, o bien borrar el contenido del archivo si éste ya existe.\r
\r
\`\`\`java{3}\r
File log = tempFolder.newFile("java-version-append.log");\r
processBuilder.redirectErrorStream(true);\r
processBuilder.redirectOutput(Redirect.appendTo(log));\r
\`\`\`\r
\r
Otra vez más, es importante hacer notar la llamada a  \`redirectErrorStream(true)\`. En el caso de que se produzca algún error, se mezclarán con los mensajes de salida en el fichero..\r
\r
En el APi de ProcessBuilder encontramos métodos para redireccionar también la salida de error estándar y la entrada estándar de los procesos.\r
\r
- redirectError(File)\r
- redirectInput(File)\r
\r
Para hacer las redirecciones también podemos utilizar la clase \`ProcessBuilder.Redirect\` como parámetro para los métodos anteriores, utilizando uno de los siguientes valores\r
\r
| Valor                   | Significado                                                              |\r
| ----------------------- | ------------------------------------------------------------------------ |\r
| Redirect.DISCARD        | La información se descarta                                               |\r
| Redirect.to(File)       | La información se guardará en el fichero indicado. Si existe, se vacía.  |\r
| Redirect.from(File)     | La información se leerá del fichero indicado                             |\r
| Redirect.appendTo(File) | La información se añadirá en el fichero indicado. Si existe, no se vacía |\r
\r
## 2.3.3 Información de los procesos en Java\r
\r
Una vez que un proceso está en ejecución podemos obtener información acerca de ese proceso usando los métodos de la clase \`java.lang.ProcessHandle.Info\`:\r
\r
- el comando usado para lanzar el proceso\r
- Los argumentos/parámetros que recibió el proceso\r
- El instante de tiempo en el que se inició el proceso\r
- El tiempo de CPU que ha usado el proceso y el usuario que lo ha lanzado\r
\r
Aquí tenemos un sencillo ejemplo de cómo hacerlo\r
\r
\`\`\`java{1-2}\r
ProcessHandle processHandle = ProcessHandle.current();\r
ProcessHandle.Info processInfo = processHandle.info();\r
\r
System.out.println("PID: " + processHandle.pid());\r
System.out.println("Arguments: " + processInfo.arguments());\r
System.out.println("Command: " + processInfo.command());\r
System.out.println("Instant: " + processInfo.startInstant());\r
System.out.println("Total CPU duration: " + processInfo.totalCpuDuration());\r
System.out.println("User: " + processInfo.user());\r
\`\`\`\r
\r
En el ejemplo anterior hemos obtenido la información del proceso actual (\`ProcessHandle.current()\`), así que si estamos en el proceso padre, sólo podemos mostrar su información, pero no la de su hijo.\r
\r
También es posible acceder a la información de un proceso lanzado (proceso hijo). En este caso necesitamos la instancia de \`java.lang.Process\` para llamar a su método \`toHandle()\` y obtener la instancia de  \`java.lang.ProcessHandle\` del proceso hijo..\r
\r
\`\`\`java{2-3}\r
Process process = processBuilder.inheritIO().start();\r
ProcessHandle childProcessHandle = process.toHandle();\r
ProcessHandle.Info child processInfo = processHandle.info();\r
\`\`\`\r
\r
A partir de ahí, el código para acceder a la información y detalles del proceso hijo es idéntico al ejemplo anterior.\r
`]},{title:"2.2 Gestión de procesos en Java - ProcessBuilder y Process",headers:[{level:2,title:"2.2.1 Preparación y configuración de un proceso",slug:"_2-2-1-preparacion-y-configuracion-de-un-proceso",link:"#_2-2-1-preparacion-y-configuracion-de-un-proceso",children:[{level:3,title:"Modificar el comando en tiempo de ejecución",slug:"modificar-el-comando-en-tiempo-de-ejecucion",link:"#modificar-el-comando-en-tiempo-de-ejecucion",children:[]},{level:3,title:"Configuraciones adicionales de un proceso",slug:"configuraciones-adicionales-de-un-proceso",link:"#configuraciones-adicionales-de-un-proceso",children:[]}]},{level:2,title:"2.2.2 Acceso al proceso una vez en ejecución",slug:"_2-2-2-acceso-al-proceso-una-vez-en-ejecucion",link:"#_2-2-2-acceso-al-proceso-una-vez-en-ejecucion",children:[{level:3,title:"Lanzar una clase Java como proceso desde otra clase java en el mismo proyecto",slug:"lanzar-una-clase-java-como-proceso-desde-otra-clase-java-en-el-mismo-proyecto",link:"#lanzar-una-clase-java-como-proceso-desde-otra-clase-java-en-el-mismo-proyecto",children:[]}]}],path:"/es/unit2/processbuilder.html",pathLocale:"/es/",extraFields:[`---\r
title: 2.2 Gestión de procesos en Java - ProcessBuilder y Process\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
<DocumentCover-component titulo="2.2 Gestión de procesos en Java - ProcessBuilder y Process" />\r
\r
# 2.2 Gestión de procesos en Java - ProcessBuilder y Process\r
\r
[[toc]]\r
\r
## 2.2.1 Preparación y configuración de un proceso\r
\r
En el paquete \`java.lang\` tenemos dos clases para la gestión de procesos.\r
\r
* \`java.lang.ProcessBuilder\` [Referencia API Java](https://docs.oracle.com/javase/8/docs/api/java/lang/ProcessBuilder.html)\r
* \`java.lang.Process\` [Referencia API Java](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html)\r
\r
Las instancias de **ProcessBuilder** gestionan los atributos de los procesos, mientras que las instancias de **Process** controlan la ejecución de esos mismos procesos cuando se ejecutan.\r
\r
Antes de ejecutar un nuevo proceso, podemos configurar los parámetros de ejecución del mismo usando la clase \`ProcessBuilder\`.\r
\r
ProcessBuilder es una clase auxiliar de la clase Process, que veremos más adelante, y se utiliza para controlar algunos parámetros de ejecución que afectarán al proceso. A través de la llamada al método \`start\` se crea un nuevo proceso en el sistema con los atributos definidos en la instancia de ProcessBuilder.\r
\r
\`\`\`java\r
    ProcessBuilder pb = new ProcessBuilder("CMD", "/C", "DIR");\r
    Process p = pb.start();\r
\`\`\`\r
\r
Si llamamos varias veces al método start, se crearán tantos nuevos procesos como llamadas hagamos, todos ellos con los mismos atributos.\r
\r
La clase ProcessBuilder define un par de constructores:\r
\r
\`\`\`java:no-line-numbers\r
ProcessBuilder(List<String> command)\r
ProcessBuilder(String... command)\r
\`\`\`\r
\r
El funcionamiento de ambos es el mismo. En el primer constructor se pasa el comando a ejecutar y la lista de argumentos como una lista de cadenas. Por contra, en el segundo constructor, el comando y sus argumentos se pasan a través de un número variable de cadenas (String ... es lo que en Java se llama varargs). La versión que utilicemos depende del formato en que tengamos los datos.\r
\r
::: danger Argumentos y parámetros\r
Si queremos lanzar un programa con parámetros (modificadores que hacen que cambie la forma de funcionar un programa como -h /s ...) el comando no puede ser pasado al constructor directamente como un único string, debe ser preprocesado para convertirlo en una lista y que funcione.\r
\r
\`\`\`java\r
// Formas diferentes de pasar el comando a los constructores de ProcessBuilder\r
// 1ª forma: usando una cadena. Falla con parámetros\r
// Sólo funciona con programas que tengan argumentos\r
String command1 = "notepad.exe prueba1.txt"\r
ProcessBuilder pb = new ProcessBuilder(command1);\r
\r
// 2ª forma: usando un array de cadenas. Funciona con parámetros\r
String[] command2 = {"cmd", "/c", "dir", "/o"};\r
ProcessBuilder pb = new ProcessBuilder(command2);\r
\r
// 3ª forma: usando una cadena y dividiéndola para convertirla en una lista\r
String command3 =  "c:/windows/system32/shutdown -s -t 0";  \r
// La expresión regular \\s significa partir por los espacios en blanco\r
ProcessBuilder pb = new ProcessBuilder(command3.split("\\\\s"));\r
// ESTA ES LA MEJOR FORMA PARA QUE FUNCIONE EN TODOS LOS CASOS\r
\`\`\`\r
\r
:::\r
\r
::: warning Apagar el sistema operativo\r
El comando \`shutdown -s\` sirve para apagar el sistema. En windows es necesario proporcionar la ruta completa al comando, por ejemplo C:\\Windows\\System32\\shutdown.\r
\r
Podemos usar como parámetro -s para apagar el sistema, , -r para reiniciar , -h para hibernar y -t para indicar un tiempo de espera antes de apagar.\r
\r
[Referencia del comando shutdown de Windows](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown)\r
:::\r
\r
::: question Activity psp.activities.U2A1_Shutdowner\r
Crea una nuevo proyecto Java (package psp.actividades y como clase principal U2A1_Shutdowner). \r
Usando la línea de comandos, pide al usuario qué acción quiere realizar (apagar, reiniciar o suspender) y cuánto tiempo quiere dejar antes de realizar la acción de apagado del sistema..\r
\r
Busca información sobre el funcionamiento del comando shutdown en GNU/Linux y haz que tu aplicación funcione para ambos sistemas..\r
\r
La aplicación tiene que preparar el comando correcto para la selección que haya hecho el usuario y para el sistema operativo en el que la esté ejecutando.\r
\r
Muestra por consola el resultado del método ProcessBuilder.command() de forma legible.\r
:::\r
\r
:::details Solución de U2A1_Shutdowner\r
\r
\`\`\`java\r
public class U2A1_Shutdowner {\r
\r
    public static void main(String[] args) throws IOException {\r
        // Ask for the required information to prepare the command\r
        Scanner keyboard = new Scanner(System.in);\r
        \r
        System.out.print("Select your option (s-shutdown / r-reboot / h-hibernate): ");\r
        String shutdownOption = keyboard.nextLine();        \r
        \r
        System.out.print("How much seconds will the command wait to be run? (0 means immediately): ");\r
        String shutdownTime = keyboard.nextLine();        \r
        \r
        // Prepare the command\r
        String command;\r
        if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {\r
            command = "C:/Windows/System32/shutdown -" + shutdownOption + " -t " + shutdownTime;\r
        } else {\r
            command = "shutdown -" + shutdownOption + " -t " + shutdownTime;\r
        }\r
        \r
        // Prepare the process and launch it\r
        ProcessBuilder shutdowner = new ProcessBuilder(command.split("\\\\s"));\r
        //shutdowner.start();\r
        \r
        // Show the command to be run\r
        System.out.print("El comando a ejecutar es:  ");\r
        for (String commandPart: shutdowner.command()) {\r
            System.out.print(commandPart + " ");\r
        }\r
        System.out.println("");\r
    }    \r
}\r
\`\`\`\r
\r
:::\r
\r
### Modificar el comando en tiempo de ejecución\r
\r
Puede ser que todo el comando, o parte del mismo, no lo tengamos en el momento de llamar a los constructores de ProcessBuilder. Se puede cambiar, modificar y consultar a posteriori con el método \`command\`\r
\r
Al igual que con los constructores, tenemos dos versiones del método command\r
\r
\`\`\`java:no-line-numbers\r
    command(List<String> command)\r
    command(String... command)\r
\`\`\`\r
\r
y la tercera forma de este método (sin parámetros) sirve para obtener una lista del comando pasado al constructor o puesto con alguna de las formas anterior del método command. Lo interesante es que una vez que tenemos la lista, podemos modificarla usando los métodos de la clase List.\r
\r
En el siguiente ejemplo, en el momento de definir el comando, nos falta saber la última parte, el directorio temporal. Además, si queremos hacer que la ejecución sea multiplataforma, el shell a ejecutar tampoco lo sabemos.\r
Dependiendo del SO se añaden dos valores al principio y un valor al final, con el método add de la clase List.\r
\r
\`\`\`java\r
// Sets and modifies the command after ProcessBuilder object is created\r
String command = "java -jar install.jar -install"; // tmp dir is missing\r
ProcessBuilder pbuilder = new ProcessBuilder(command.split("\\\\s"));\r
if (isWindows) {\r
    pbuilder.command().add(0, "cmd"); // Sets the 1st element\r
    pbuilder.command().add(1, "/c"); // Sets the 2nd element\r
    pbuilder.command().add("c:/temp"); // Sets the last element\r
    // Command to run cmd /c java -jar install.jar -install c:/temp\r
} else {\r
    pbuilder.command().add(0, "sh"); // Sets the 1st element\r
    pbuilder.command().add(1, "-c"); // Sets the 2nd element\r
    pbuilder.command().add("/tmp"); // Sets the last element\r
    // Command to run: sh -c java -jar install.jar -install /tmp\r
}\r
\r
// Starts the process\r
pbuilder.start();\r
\`\`\`\r
\r
### Configuraciones adicionales de un proceso\r
\r
Algunos de los atributos que podemos configurar para un proceso son:\r
\r
* Establecer el directorio de trabajo donde el proceso se ejecutará\r
  \r
  Podemos cambiar el directorio de trabajo por defecto llamando al método \`directory\` y pasándole un objeto de tipo File. **Por defecto, el directorio de trabajo se establece al valor de la variable del sistema user.dir**. Este directorio es el punto de partida para acceder a ficheros, imágenes y todos los recursos que necesite nuestra aplicación.\r
\r
    \`\`\`java\r
    // Cambia el directorio de trabajo a la carpeta personal del usuario\r
    pbuilder.directory(new File(System.getProperty("user.home")));\r
    \`\`\`\r
\r
* Configurar o modificar variables de entorno para el proceso con el método \`environment()\`\r
\r
    \`\`\`java\r
    // Retrieve and modify the process environment\r
    Map<String, String> environment = pbuilder.environment();\r
    // Get the PATH environment variable and add a new directory\r
    String systemPath = environment.get("path") + ";c:/users/public";\r
    environment.replace("path", systemPath);\r
    // Add a new environment variable and use it as a part of the command\r
    environment.put("GREETING", "Hola Mundo");\r
    processBuilder.command("/bin/bash", "-c", "echo $GREETING");\r
    \`\`\`\r
\r
    \`\`\`java\r
    // Indicamos el directorio donde se encuentra el ejecutable\r
    File directorio = new File ("bin");\r
    pb.directory(directorio);\r
\r
    // Mostramos la información de las variables de entorno\r
    Map variablesEntorno = pb.environment();\r
    System.out.println(variablesEntorno);\r
\r
    // Mostramos el nombre del proceso y sus argumentos\r
    List command = pb.command();\r
    Iterator iter = l.iterator();\r
    while (iter.hasNext()) {\r
        System.out.println(iter.next());\r
    }\r
    \`\`\`\r
\r
    ::: info Variables de entorno vs Propiedades del sistema\r
    Con la clase Runtime accedemos a las variables del sistema mientras que con ProcessBuilder lo hacemos a las propiedades del sistema, que son diferentes.\r
    :::\r
\r
* Redireccionar la entrada y salida estándar\r
* Heredar la E/S estándar del proceso padre usando el método ProcessBuilder.inheritIO()\r
  \r
  *Estas dos configuraciones se verán en el siguiente apartado.*\r
\r
::: question Actividad psp.activities.U2A2_DirectorioTrabajo\r
Crea un nuevo proyecto Java (Ant > Java Application) (configura como nombre del proyecto U2A2_DirectorioTrabajo y como clase principal psp.activities.U2A2_WorkingDirectory)\r
Escribe un programa que ejecute el comando ls o dir.\r
Modifica el valor de la propiedad user.dir.\r
En la misma aplicación, cambiar el directorio de trabajo a la carpeta c:/temp o /tmp, dependiendo del sistema operativo.\r
\r
Muestra el valor devuelto por el método directory()\r
\r
* Después de crear la instancia de ProcessBuilder\r
* Después de cambiar el valor de user.dir\r
* Después de cambiar el directorio de trabajo al directorio temporal del sistema.\r
\r
*En este momento tu programa todavía no mostrará ningún listado.*\r
:::\r
\r
::: details Solución de U2A2_DirectorioTrabajo\r
\r
\`\`\`java\r
public class U2A2_WorkingDirectory {\r
\r
    public static void main(String[] args) throws IOException {\r
        // Prepare the command\r
        String command;\r
        if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {\r
            command = "cmd /c dir";\r
        } else {\r
            command = "sh -c ls";\r
        }\r
        \r
        // Prepare the process and launch it\r
        ProcessBuilder commander = new ProcessBuilder(command.split("\\\\s"));\r
        \r
        //1st - Default working directory\r
        System.out.println("Working directory: " + commander.directory());\r
        System.out.println("user.dir variable: " + System.getProperty("user.dir"));\r
        \r
        //2nd - Set the user.dir\r
        System.setProperty("user.dir", System.getProperty("user.home"));\r
        System.out.println("Working directory: " + commander.directory());\r
        System.out.println("user.dir variable: " + System.getProperty("user.dir"));\r
        \r
        // 3rd - Change the working directory\r
        commander.directory(new File(System.getProperty("user.home")));\r
        System.out.println("Working directory: " + commander.directory().toString());\r
        System.out.println("user.dir variable: " + System.getProperty("user.dir"));\r
        \r
        commander.start();        \r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
<div class="pagebreak"></div>\r
\r
## 2.2.2 Acceso al proceso una vez en ejecución\r
\r
LA clase \`Process\` es una clase abstracta definida en el paquete java.lang y contiene la información del proceso en ejecución. Tras invocar al método \`start\` de ProcessBuilder, éste devuelve una referencia al proceso en forma de objeto Process.\r
\r
Los métodos de la clase Process pueden ser usados para realizar operaciones de E/S desde el proceso, para comprobar su estado, su valor de retorno, para esperar a que termine de ejecutarse y para forzar la terminación del proceso. Sin embargo estos métodos no funcionan sobre procesos especiales del SO como pueden ser servicios, shell scripts, demonios, etc.\r
\r
> [Especificación java.lang.Process](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html)\r
\r
::: warning Entrada / Salida desde el proceso hijo\r
Curiosamente  **los procesos lanzados con el método start() no tienen una consola asignada.**. Por contra, estos procesos redireccionan los streams de E/S estándar (stdin, stdout, stderr) al proceso padre. Si se necesita, se puede acceder a ellos a través de los streams obtenidos con los métodos definidos en la clase Process como getInputStream(), getOutputStream() y  getErrorSteam(). Esta es la forma de enviar y recibir información desde los subprocesos.\r
:::\r
\r
Los principales métodos de esta clase son:\r
\r
| Método                                       | Descripción                                                                                                                                                                                                                                                                                                      |\r
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r
| int exitValue()                              | Código de finalización devuelto por el proceso hijo (ver Info más abajo)                                                                                                                                                                                                                                         |\r
| Boolean isAlive()                            | Comprueba si el proceso todavía está en ejecución                                                                                                                                                                                                                                                                |\r
| int waitFor()                                | hace que el proceso padre se quede esperando a que el proceso hijo termine. El entrono que devuelve es el código de finalización del proceso hijo                                                                                                                                                                |\r
| Boolean waitFor(long timeOut, TimeUnit unit) | El funcionamiento es el mismo que en el caos anterior sólo que en esta ocasión podemos especificar cuánto tiempo queremos esperar a que el proceso hijo termine. El método devuelve true si el proceso termina antes de que pase el tiempo indicado y false si ha pasado el tiempo y el proceso no ha terminado. |\r
| void destroy()                               | Estos dos métodos se utilizan para matar al proceso. El segundo lo hace de forma forzosa.                                                                                                                                                                                                                        |\r
| Process destroyForcibly()                    |\r
\r
 Veamos un sencillo ejemplo. Una vez lanzado el programa espera durante 10 segundos y a continuación mata el proceso.\r
\r
\`\`\`java\r
public class ProcessDemo {\r
\r
   public static void main(String[] args) throws Exception {\r
\r
      ProcessBuilder pb = new ProcessBuilder("C:\\Program Files\\Mozilla Firefox\\firefox.exe");\r
      // Effectively launch the process\r
      Process p = pb.start();\r
      // Check is process is alive or not\r
      boolean alive = p.isAlive();\r
      // Wait for the process to end for 10 seconds.\r
      if (p.waitFor(10, TimeUnit.SECONDS)) {\r
          System.out.println("Process has finished");\r
      } else {\r
          System.out.println("Timeout. Process hasn't finished");\r
      }\r
      // Force process termination.\r
      p.destroy();\r
      // Check again if process remains alive\r
      boolean alive = p.isAlive();\r
      // Get the process exit value\r
      int status = p.exitValue();        \r
   }\r
}\r
\`\`\`\r
\r
::: info Códigos de terminación\r
Un código de salida (exit code o a veces también return code) es el valor que un proceso le devuelve a su proceso padre para indicarle cómo ha acabado. Si un proceso acaba con un valor de finalización 0 es que todo ha ido bien, cualquier otro valor entre 1 to 255 indica alguna causa de error.\r
:::\r
\r
::: question Actividad psp.activities.U2A3_ExitValue\r
Crea un nuevo proyecto Java (Ant > Java Application) (configura como nombre del proyecto U2A3_ExitValue y como clase principal psp.activities.U2A3_ExitValue).\r
Prepara un programa que ejecute varios comandos (notepad, calc, comandos shell) uno detrás de otro, de forma secuencial y haz que tu programa obtenga el código de finalización de cada uno de ellos.\r
Para cada programa imprime el nombre y su código de finalización.\r
\r
Prueba a poner aplicaciones que no existan o comandos con parámetros incorrectos.\r
\r
¿Qué hace Netbeans si pones System.exit(10) para acabar tu programa?. Fíjate en la consola.\r
¿Qué hace Netbeans si pones System.exit(0) para acabar tu programa.?\r
Cuál es entonces el valor por defecto?\r
:::\r
\r
::: details Solución de U2A3_ExitValue\r
\r
\`\`\`java\r
public class U2A3_ExitValue {\r
\r
    public static void main(String[] args) {\r
        do {\r
            // Código para pedir un programa/comando a ejecutar\r
            Scanner teclado = new Scanner(System.in);\r
            System.out.println("Introduce el programa / comando que quieres ejecutar (intro para acabar): ");\r
            String comando = teclado.nextLine();\r
            \r
            if (comando.equals("")) System.exit(0);\r
\r
            try {\r
                // Preparamos el entrono de ejecución del proceso\r
                // Como no sabemos el contenido del comando, forzamos su conversión\r
                // a una lista para que no haya problemas con su ejecución\r
                ProcessBuilder pb = new ProcessBuilder(comando.split("\\\\s"));\r
\r
                // Lanzamos el proceso hijo\r
                Process p = pb.start();          \r
\r
                // Esperamos a que acabe para recoger el valor de salida\r
                int exitValue = p.waitFor();\r
\r
                if (exitValue == 0) {\r
                    System.out.println("El comando " + pb.command().toString() + " ha finalizado bien");\r
                } else {\r
                    System.out.println("El comando " + pb.command().toString() + " ha finalizado con errores. Código (" + exitValue + ")");\r
                }\r
\r
            } catch (InterruptedException | IOException ex) {\r
                System.err.println(ex.getLocalizedMessage());\r
                ex.printStackTrace();\r
            }                       \r
        } while (true);\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
::: danger Gestión de excepciones\r
La llamada al método **waitFor** hace que el proceso padre se bloquee hasta que el proceso hijo termina o bien hasta que el bloqueo es interrumpido por alguna señal del sistema (Excepción) que recibe el proceso padre.\r
\r
Es mejor gestionar las excepciones lo más cerca posible del origen en vez de pasarlas a niveles superiores.\r
:::\r
\r
### Lanzar una clase Java como proceso desde otra clase java en el mismo proyecto\r
\r
Para las actividades os pediré que programéis tanto el proceso padre como el proceso hijo. Para hacer eso, una de las clases tendrá que lanzar a la otra.\r
\r
Para hacer esto, ambas clases deben tener un método main. Así que en las propiedades del proyecto Netbeans deberemos seleccionar cuál de las clases se ejecutará primero, normalmente la clase \`Lanzador o Launcher\` (proceso padre).\r
\r
![Seleccionar clase principal](../../media/unit2/seleccionmain.png)\r
\r
Antes de que una clase pueda lanzar a otra, al menos la segunda (proceso hijo) debe estar compilada, es decir, el archivo .class debe haberse creado dentro del directorio build/classes.\r
\r
![Seleccionar directorio de trabajo ](../../media/unit2/comandotree.png)\r
\r
Entonces y sólo entonces, previa configuración de los parámetros de ejecución del proceso tal y como se muestra en el ejemplo, se podrá ejecutar una clase desde otra.\r
\r
::: info Directorio de trabajo\r
\r
Si nos fijamos en la estructura de directorios de un proyecto y entendemos cómo se invocan unas clases a otras, entenderemos porqué el directorio de trabajo debe ser *build/classes*.\r
\r
En Java, cuando se ejecuta una clase \`java paquete.clase\`, la MV Java espera encontrar los directorios que forman el paquete (psp/u2/actividad10) a partir del punto donde se está invocando el comando. Por eso, para que pueda encontrar la clase (el archivo .class), debemos ubicarnos previamente en el directorio \`build/classes\`\r
\`\`\`java\r
// Prepare the environment and the command\r
ProcessBuilder pb = new ProcessBuilder("java", "psp.u2.actividad10.Sumador");\r
pb.directory(new File("build/classes"));\r
Process p = pb.start();\r
\`\`\`\r
\r
:::\r
\r
::: question Actividad psp.activities.U2A4_Lanzador\r
Crea un nuevo proyecto Java (Ant > Java Application) (configura como nombre del proyecto U2A3_Lanzador y como clase principal psp.activities.U2A4_Lanzador).\r
\r
Ahora, en el mismo proyecto y dentro del mismo paquete crea otra clase, Lanzado, con un método main que recibirá el nombre del programa que debe ejecutar como parámetro del método main(args). Haz que esta aplicación cree un nuevo proceso para ejecutar el programa recibido como parámetro.\r
\r
La clase terminará devolviendo como código de finalización el que el programa lanzado le haya devuelto a ella.\r
\r
> Método System.exit()\r
>\r
> * Cero. El código cero debe devolverse cuando la ejecución del proceso haya ido bien, esto es, que ha terminado su ejecución sin problemas.\r
> * Distinto de cero. AUn código distinto de cero indica una terminación con errores. Java nos permite usar códigos diferentes para los diferentes tipos de error.\r
\r
Por último, podemos hacer que U2A4_Lanzador pregunte al usuario qué aplicación quiere ejecutar y pasársela a la clase U2A4_Mandado.\r
\r
En Lanzador recoge el código de finalización de Mandado y muestra un mensaje indicando si el proceso terminó bien o con errores.\r
:::\r
\r
::: details Solución de U2A4_Lanzador\r
\r
\`\`\`java\r
public class U2A4_Launcher {\r
\r
    public static void main(String[] args) {\r
\r
        // Código para pedir un programa/comando a ejecutar\r
        Scanner teclado = new Scanner(System.in);\r
        System.out.println("Introduce el programa / comando que quieres ejecutar: ");\r
        String comando = teclado.nextLine();\r
\r
        try {\r
            // Preparamos el entrono de ejecución del proceso\r
            // Como no sabemos el contenido del comando, forzamos su conversión\r
            // a una lista para que no haya problemas con su ejecución\r
            comando = "java psp.activities.U2A4_Commander " + comando;\r
            ProcessBuilder pb = new ProcessBuilder(comando.split("\\\\s"));\r
            pb.directory(new File("build/classes"));\r
\r
            // Lanzamos el proceso hijo\r
            Process p = pb.start();          \r
\r
            // Esperamos a que acabe para recoger el valor de salida\r
            int exitValue = p.waitFor();\r
\r
            if (exitValue == 0) {\r
                System.out.println("El comando " + pb.command().toString() + " ha finalizado bien");\r
            } else {\r
                System.out.println("El comando " + pb.command().toString() + " ha finalizado con errores. Código (" + exitValue + ")");                \r
            }\r
        } catch (InterruptedException | IOException ex) {\r
            System.err.println(ex.getLocalizedMessage());\r
            ex.printStackTrace();\r
        }                       \r
    }\r
}\r
\r
public class U2A4_Commander {\r
\r
    public static void main(String[] args) throws Exception {       \r
        // Lectura de información desde los parámetros de entrada \r
        // Se supone que recibimos: args[0] args[1] args[2] ..... args[args.length-1 --> comando a ejecutar\r
        String comando = "";\r
        for (int i = 0; i < args.length; i++) {\r
            comando += args[i] + " ";\r
        }\r
        comando.trim();\r
                \r
        ProcessBuilder pb = new ProcessBuilder(comando.split("\\\\s"));            \r
\r
        // Lanzamos el proceso hijo\r
        Process p = pb.start();          \r
\r
        // Esperamos a que acabe para recoger el valor de salida\r
        int exitValue = p.waitFor();\r
\r
        System.exit(exitValue);\r
    }    \r
}\r
\`\`\`\r
\r
:::\r
\r
::: warning Programación de clases "hijas"\r
Debemos tener en cuenta que una clase se puede ejecutar de forma independiente o puede ser llamada desde otro proceso.\r
\r
Por eso, el código de las clases, hijas o padres, se hace sin tener en cuenta cómo van a ser llamadas. Debe ser **independiente** tal y como lo son unos procesos de otros.\r
\r
Así, en el anterior proyecto yo podría ejecutar la clase psp.activities.U2A4_Commander de forma independiente, pasándole el nombre de los programas.\r
\r
Puedo hacerlo invocándola desde línea de comandos o desde Netbeans:\r
- java psp.activities.U2A4_Commander programa1 programa2 programa3\r
- En las propiedades del proyecto, en el apartado Run, seleccionando U2A4_Commander como clase principal y poniendo como Arguments: programa1 programa2 programa3\r
:::\r
`]},{title:"2.1 Creación de procesos en Java con Runtime",headers:[{level:2,title:"2.1.1. Creación rápida de procesos",slug:"_2-1-1-creacion-rapida-de-procesos",link:"#_2-1-1-creacion-rapida-de-procesos",children:[]},{level:2,title:"2.1.2 Propiedades del sistema y comandos del sistema",slug:"_2-1-2-propiedades-del-sistema-y-comandos-del-sistema",link:"#_2-1-2-propiedades-del-sistema-y-comandos-del-sistema",children:[]}],path:"/es/unit2/runtime.html",pathLocale:"/es/",extraFields:[`---\r
title: 2.1 Creación de procesos en Java con Runtime\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
#export_on_save:\r
# markdown: true\r
---\r
\r
<DownloadPDF-component />\r
\r
<DocumentCover-component titulo="2.1. Creación de procesos con Java con Runtime" />\r
\r
# 2.1. Creación rápida de procesos con Java con Runtime\r
\r
[[toc]]\r
\r
## 2.1.1. Creación rápida de procesos\r
\r
La clase java.lang.Runtime se usa principalmente para interactuar con el JRE de Java. Esta clase proporciona métodos para lanzar procesos, llamar al recolector de basura (Garbage Collector), saber la cantidad de memoria disponible y libre, etc.\r
\r
> [Especificación java.lang.Runtime](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Runtime.html)\r
\r
Cada aplicación en Java tiene acceso a una única instancia de *java.lang.Runtime* a través del método \`Runtime.getRuntime()\` que devuelve la instancia **singleton** de la clase Runtime.\r
\r
::: question Patrones de diseño: Singleton\r
¿Qué son los patrones de diseño? ¿Qué es y para qué se usa el patrón de diseño singleton?\r
\r
Investiga cómo realizar una clase que siga el patrón de diseño singleton.\r
\r
[Refactoring.Guru Patrones de diseño](https://refactoring.guru/es/design-patterns/java)\r
:::\r
\r
El método que nos interesa a nosotros para la creación de procesos es\r
\r
> public Process exec(String command) throws IOException\r
\r
Veamos un ejemplo sencillo de uso de este método\r
\r
\`\`\`java\r
public static void main(String[] args) throws IOException {\r
    // Launch notepad app\r
    Runtime.getRuntime().exec("notepad.exe");\r
\r
    // This way always works\r
    // String separator = System.getProperty("file.separator");\r
    // Runtime.getRuntime()\r
    //    .exec("c:"+separator+"windows"+separator+"notepad.exe");\r
\r
    // This way used to work (UNIX style paths)\r
    // Runtime.getRuntime().exec("c:/windows/notepad.exe");\r
}\r
\`\`\`\r
\r
Se puede observar que en el parámetro que pasamos al método \`exec\` indicamos el programa que queremos ejecutar. En este caso, como el *notepad* se encuentra en el PATH del sistema, no es necesario indicar la ruta donde se encuentra el programa. En otro caso, sí tendríamos que hacerlo.\r
\r
<div class="pagebreak"></div>\r
\r
## 2.1.2 Propiedades del sistema y comandos del sistema\r
\r
Si tenemos pensado desarrollar aplicaciones que funcionen en diferentes SO tendremos que enfrentarnos a la problemática del funcionamiento diferente de los distintos SO.\r
\r
Vamos a ver algunos ejemplos que pueden servir como guía para otros problemas similares a los expuestos.\r
\r
::: danger File separator\r
Para indicar las rutas en un sistema los sistemas UNIX emplean el caracter  **/** como separador mientras que los sistemas Windows usan el caracter **\\\\** . En resumen, / en *X y \\ en Windows.\r
\r
¿Cómo podemos hacer entonces que nuestras aplicaciones sean independientes del SO en el que se ejecutan?\r
\r
Para este tipo de cuestiones vamos a utilizar de forma recurrente las propiedades del sistema mediante \`System.getProperty(String propName)\`. Estas propiedades se configuran con el propio sistema operativo, aunque las podemos modificar usando los parámetros de ejecución de la máquina virtual\r
\r
> String separator = System.getProperty("file.separator");\r
\r
o\r
\r
> -Dfile.separator\r
\r
Aunque siempre es una buena práctica usar el caracter **/** en las rutas ya que Java es capaz de convertirlas al sistema en el que se ejecuta.\r
:::\r
\r
Si lo que queremos es ejecutar un comando del SO, tenemos que hacerlo, al igual que si lo hacemos manualmente, a través del shell del sistema, donde volvemos a encontrar la dicotomía entre sistemas UNIX y sistemas Windows.\r
\r
Vamos a ver el código que, a través de las propiedades del sistema, nos permite obtener un listado de los archivos existentes en la carpeta personal del usuario.\r
\r
\`\`\`java\r
// Primero obtenemos la carpeta del usuario\r
String homeDirectory = System.getProperty("user.home");\r
boolean isWindows = System.getProperty("os.name")\r
  .toLowerCase().startsWith("windows");\r
\r
if (isWindows) {\r
    Runtime.getRuntime()\r
      .exec(String.format("cmd.exe /c dir %s", homeDirectory));\r
} else {\r
    Runtime.getRuntime()\r
      .exec(String.format("sh -c ls %s", homeDirectory));\r
}\r
\`\`\`\r
\r
::: info Modo shell no interactivo\r
Como se puede observar, tanto para Windows como UNIX se ha usado el modificador **c** del comando. Este modificador indica que se abra un shell, se ejecute el comando recibido y se cierre el proceso del shell.\r
:::\r
\r
A continuación podemos ver un ejemplo de respuesta ante la pulsación de un botón, en una app gráfica, paraabrir una página en el navegador. Tenemos cómo se haría en sistemas *X y comentado una de las formas de hacerlo en Windows.\r
\r
\`\`\`java\r
// Calling app example\r
public void mouseClicked(MouseEvent e) {\r
  // Launch Page\r
  try {\r
    // Linux version\r
    Runtime.getRuntime().exec("open http://localhost:8153/go");\r
    // Windows version\r
    // Runtime.getRuntime().exec("explorer http://localhost:8153/go");\r
  } catch (IOException e1) {\r
    // Don't care\r
  }\r
}\r
\`\`\`\r
\r
::: question System properties\r
Vamos a crear nuestro primer programa en Java, que no va a ser tan sencillo como pueda parecer\r
\r
Usando métodos de las clases System y Runtime hacer un programa que muestre\r
\r
- todas las propiedades establecidas en el sistema operativo y sus valores.\r
- memoria total, memoria libre, memoria en uso y los procesadores disponibles\r
\r
Mira los métodos que proporcionan las clases Runtime  y system. Intenta obtener una lista u otra estructura de datos que te permita recorrer las propiedades para ir mostrando sus nombres y valores.\r
:::\r
\r
::: details Solución propuesta para la actividad anterior\r
\r
\`\`\`java{22,25,32,38,44}\r
long freeMemory = Runtime.getRuntime().freeMemory();\r
long availableMemory = Runtime.getRuntime().totalMemory();\r
long usedMemory = availableMemory - freeMemory;\r
\r
/*** Runtime.getRuntime() usage ***/\r
// Show system information\r
// Memory will be shown in MBytes formatted with 2-decimal places\r
DecimalFormat megabytes = new DecimalFormat("#.00");\r
System.out.println("Available memory in JVM(Mbytes): " + \r
        megabytes.format((double)availableMemory/(1024*1024)));\r
System.out.println("Free memory in JVM(Mbytes): " + \r
        megabytes.format((double)freeMemory/(1024*1024)));\r
System.out.println("Used memory in JVM(Mbytes): " + \r
        megabytes.format((double)usedMemory/(1024*1024)));\r
\r
System.out.println ("Processors in the system: " \r
        + Runtime.getRuntime().availableProcessors());\r
\r
/*** System.getProperties() usage ***/\r
// Show each pair of property:value from System properties\r
\r
// 1st. As a lambda expression using anonymous classes\r
System.getProperties().forEach((k,v) -> System.out.println(k + " => " + v));\r
\r
// 2nd. As a Map.entrySet \r
for (Map.Entry<Object, Object> entry : System.getProperties().entrySet()) {\r
    Object key = entry.getKey();\r
    Object val = entry.getValue();\r
    System.out.println("> " + key + " => " + val);\r
}\r
\r
// 3rd. As a Map.keySet\r
for (Object key : System.getProperties().keySet().toArray())\r
{\r
    System.out.println(">> " + key+":"+System.getProperty(key.toString()));\r
}\r
\r
// Other methods found by students, based on a Properties object methods.\r
Properties prop = System.getProperties();\r
for (String propName: prop.stringPropertyNames()) {\r
  System.out.println(propName +  ":" + System.getProperty(propName));\r
}\r
        \r
// Or directly to the console using \r
prop.list(System.out);\r
\`\`\`\r
:::\r
\r
::: info Formato numérico\r
Todos los lenguajes de programación tienen varias formas de mostrar la información al usuario. Cuando se trata de mostrar información a a través de la consola, tenemos un par de alternativas para formatear la información numérica.\r
\r
- [NumberFormat](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/DecimalFormat.html)\r
\r
Si usamos la clase NumberFormat o cualquiera de sus descendientes podemos controlar con bastante precisión cómo se verán los números, usando patrones.\r
\r
\`\`\`java:no-line-numbers\r
DecimalFormat numberFormat = new DecimalFormat("#.00");\r
// Si usamos hashes en vez de ceros permitimos que .30 se vea como 0.3\r
// (los dígitos adicionales son opcionales)\r
System.out.println(numberFormat.format(number));\r
\`\`\`\r
\r
- [System.out.printf](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html)\r
\r
Heredado de la sintaxis de la función printf de C, podemos utilizar la sintaxis de java.util.Formatter para configurar cómo será visualizada la información.\r
\r
\`\`\`java:no-line-numbers\r
System.out.printf("\\n$%10.2f",shippingCost);\r
// % rellena con hasta 10 posiciones los números\r
// para justificarlos a la derchan.\r
System.out.printf("%n$%.2f",shippingCost);\r
\`\`\`\r
\r
:::\r
\r
::: info Usando colores en la salida por consola\r
\r
Hay una forma sencilla de mostrar información por consola usando diferentes colores. Os dejo un ejemplo de código con la definición de algunos colores y la forma de usarlos.\r
\r
\`\`\`java:no-line-numbers\r
public class UsarColoresEnConsola {\r
\r
public static final String ANSI_RESET = "\\u001B[0m";\r
public static final String ANSI_BLACK = "\\u001B[30m";\r
public static final String ANSI_RED = "\\u001B[31m";\r
public static final String ANSI_GREEN = "\\u001B[32m";\r
public static final String ANSI_YELLOW = "\\u001B[33m";\r
public static final String ANSI_BLUE = "\\u001B[34m";\r
public static final String ANSI_PURPLE = "\\u001B[35m";\r
public static final String ANSI_CYAN = "\\u001B[36m";\r
public static final String ANSI_WHITE = "\\u001B[37m";\r
\r
public static final String ANSI_BLACK_BACKGROUND = "\\u001B[40m";\r
public static final String ANSI_RED_BACKGROUND = "\\u001B[41m";\r
public static final String ANSI_GREEN_BACKGROUND = "\\u001B[42m";\r
public static final String ANSI_YELLOW_BACKGROUND = "\\u001B[43m";\r
public static final String ANSI_BLUE_BACKGROUND = "\\u001B[44m";\r
public static final String ANSI_PURPLE_BACKGROUND = "\\u001B[45m";\r
public static final String ANSI_CYAN_BACKGROUND = "\\u001B[46m";\r
public static final String ANSI_WHITE_BACKGROUND = "\\u001B[47m";\r
\r
    public static void main(String[] args) {\r
        System.out.println(ANSI_GREEN + ANSI_WHITE_BACKGROUND + "Hola" + ANSI_BLUE + ANSI_YELLOW_BACKGROUND + " Adiós" + ANSI_RESET);\r
    }\r
}\r
\`\`\`\r
\r
:::\r
`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[""]}],Nf=fe(zf),Mf=()=>Nf,Ff=({searchIndex:e,routeLocale:r,query:n,maxSuggestions:t})=>{const o=N(()=>e.value.filter(s=>s.pathLocale===r.value));return N(()=>{const s=n.value.trim().toLowerCase();if(!s)return[];const a=[],c=(i,l)=>{va(s,[l.title])&&a.push({link:`${i.path}#${l.slug}`,title:i.title,header:l.title});for(const u of l.children){if(a.length>=t.value)return;c(i,u)}};for(const i of o.value){if(a.length>=t.value)break;if(va(s,[i.title,...i.extraFields])){a.push({link:i.path,title:i.title});continue}for(const l of i.headers){if(a.length>=t.value)break;c(i,l)}}return a})},Df=e=>{const r=fe(0);return{focusIndex:r,focusNext:()=>{r.value<e.value.length-1?r.value+=1:r.value=0},focusPrev:()=>{r.value>0?r.value-=1:r.value=e.value.length-1}}},Bf=ue({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:r,hotKeys:n,maxSuggestions:t}=It(e),o=Xr(),s=yn(),a=Mf(),c=fe(null),i=fe(!1),l=fe(""),u=N(()=>r.value[s.value]??{}),d=Ff({searchIndex:a,routeLocale:s,query:l,maxSuggestions:t}),{focusIndex:m,focusNext:f,focusPrev:w}=Df(d);Of({input:c,hotKeys:n});const S=N(()=>i.value&&!!d.value.length),P=()=>{S.value&&w()},v=()=>{S.value&&f()},y=I=>{if(!S.value)return;const C=d.value[I];C&&o.push(C.link).then(()=>{l.value="",m.value=0})};return()=>ce("form",{class:"search-box",role:"search"},[ce("input",{ref:c,type:"search",placeholder:u.value.placeholder,autocomplete:"off",spellcheck:!1,value:l.value,onFocus:()=>i.value=!0,onBlur:()=>i.value=!1,onInput:I=>l.value=I.target.value,onKeydown:I=>{switch(I.key){case"ArrowUp":{P();break}case"ArrowDown":{v();break}case"Enter":{I.preventDefault(),y(m.value);break}}}}),S.value&&ce("ul",{class:"suggestions",onMouseleave:()=>m.value=-1},d.value.map(({link:I,title:C,header:W},X)=>ce("li",{class:["suggestion",{focus:m.value===X}],onMouseenter:()=>m.value=X,onMousedown:()=>y(X)},ce("a",{href:I,onClick:R=>R.preventDefault()},[ce("span",{class:"page-title"},C),W&&ce("span",{class:"page-header"},`> ${W}`)]))))])}});const Uf={"/en/":{placeholder:"Search"},"/es/":{placeholder:"Buscar"}},Hf=["s","/"],Wf=5,$f=Sr({enhance({app:e}){e.component("SearchBox",r=>ce(Bf,{locales:Uf,hotKeys:Hf,maxSuggestions:Wf,...r}))}});const Vf={};function Jf(){const e=fe(!1);return Oo()&&He(()=>{e.value=!0}),e}function Gf(e){return Jf(),N(()=>!!e())}const Yf=()=>Gf(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Zf=()=>{const e=Yf();return N(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Xf=e=>{const r=yn();return N(()=>e[r.value])},Kf=250,Qf=3e3,eg={"/ca/":{copy:"Copia",copied:"Copiat",hint:"Copia bloc de codi"},"/es/":{copy:"Copiar código",copied:"Copiado",hint:"Copiado con éxito"},"/":{copy:"Copia",copied:"Copiat",hint:"Copia bloc de codi"}},rg=!1,ng=['.theme-default-content div[class*="language-"] pre'],ba=!1,Qt=new Map,tg=()=>{const{copy:e}=tm({legacy:!0}),r=Xf(eg),n=qr(),t=Zf(),o=c=>{if(!c.hasAttribute("copy-code-registered")){const i=document.createElement("button");i.type="button",i.classList.add("copy-code-button"),i.innerHTML='<div class="copy-icon" />',i.setAttribute("aria-label",r.value.copy),i.setAttribute("data-copied",r.value.copied),c.parentElement&&c.parentElement.insertBefore(i,c),c.setAttribute("copy-code-registered","")}},s=()=>Wn().then(()=>new Promise(c=>{setTimeout(()=>{ng.forEach(i=>{document.querySelectorAll(i).forEach(o)}),c()},Kf)})),a=(c,i,l)=>{let{innerText:u=""}=i;/language-(shellscript|shell|bash|sh|zsh)/.test(c.classList.toString())&&(u=u.replace(/^ *(\$|>) /gm,"")),e(u).then(()=>{l.classList.add("copied"),clearTimeout(Qt.get(l));const d=setTimeout(()=>{l.classList.remove("copied"),l.blur(),Qt.delete(l)},Qf);Qt.set(l,d)})};He(()=>{(!t.value||ba)&&s(),xt("click",c=>{const i=c.target;if(i.matches('div[class*="language-"] > button.copy')){const l=i.parentElement,u=i.nextElementSibling;u&&a(l,u,i)}else if(i.matches('div[class*="language-"] div.copy-icon')){const l=i.parentElement,u=l.parentElement,d=l.nextElementSibling;d&&a(u,d,l)}}),sr(()=>n.value.path,()=>{(!t.value||ba)&&s()})})};var og=Sr({setup:()=>{tg()}});const it=[ap,lp,mp,vp,_p,vf,bf,jf,$f,Vf,og],sg=[["v-56dd2a2a","/InstallationNotes.html",{title:"Installation notes"},[":md"]],["v-8daa1a0e","/",{title:""},["/README.md"]],["v-2d0a7df8","/ca/",{title:"SAD - Lloc web de documentació"},["/ca/README.md"]],["v-2d0a87a8","/es/",{title:"SAD - Página  de documentación"},["/es/README.md"]],["v-f39b1880","/ca/unit1/concurrency.html",{title:"1.2 Concurrency"},[":md"]],["v-3568b29a","/ca/unit1/",{title:"1 Introduction"},["/ca/unit1/index.md"]],["v-4d403dc3","/ca/unit1/operatingsystem.html",{title:"1.3 Processes in the OS"},[":md"]],["v-62d86b64","/ca/unit1/process.html",{title:"1.1 Processes, programs, threads"},[":md"]],["v-02f7a31f","/ca/unit2/curl_annex.html",{title:"2.4 Annex I - Curl"},[":md"]],["v-3568b2b9","/ca/unit2/",{title:"2 Introduction"},["/ca/unit2/index.md"]],["v-0b12bee5","/ca/unit2/iostreams.html",{title:"2.3 Handling Process Streams"},[":md"]],["v-69cbc2b4","/ca/unit2/processbuilder.html",{title:"2.2 Process management in Java - ProcessBuilder and Process"},[":md"]],["v-4144fd3a","/ca/unit2/runtime.html",{title:"2.1 Running processes in Java with Runtime"},[":md"]],["v-46af1970","/es/unit1/concurrency.html",{title:"1.2 Concurrencia"},[":md"]],["v-a8728f6c","/es/unit1/",{title:"1 Introducción"},["/es/unit1/index.md"]],["v-e2dae91a","/es/unit1/operatingsystem.html",{title:"1.3 Procesos en el SO"},[":md"]],["v-75292dd8","/es/unit1/process.html",{title:"1.1 Procesos, programas, hilos"},[":md"]],["v-3277876f","/es/unit2/curl_annex.html",{title:"2.4 Anexo I - Curl"},[":md"]],["v-a8728f2e","/es/unit2/",{title:"2 Introducción"},["/es/unit2/index.md"]],["v-14dd1095","/es/unit2/iostreams.html",{title:"2.3 Gestión de la E-S de un proceso"},[":md"]],["v-5320ff04","/es/unit2/processbuilder.html",{title:"2.2 Gestión de procesos en Java - ProcessBuilder y Process"},[":md"]],["v-b8500a2c","/es/unit2/runtime.html",{title:"2.1 Creación de procesos en Java con Runtime"},[":md"]],["v-3706649a","/404.html",{title:""},[]]];var ya=ue({name:"Vuepress",setup(){const e=Gu();return()=>ce(e.value)}}),ag=()=>sg.reduce((e,[r,n,t,o])=>(e.push({name:r,path:n,component:ya,meta:t},{path:n.endsWith("/")?n+"index.html":n.substring(0,n.length-5),redirect:n},...o.map(s=>({path:s===":md"?n.substring(0,n.length-5)+".md":s,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:ya}]),ig=gd,cg=()=>{const e=Qd({history:ig(bi("/apuntes/")),routes:ag(),scrollBehavior:(r,n,t)=>t||(r.hash?{el:r.hash}:{top:0})});return e.beforeResolve(async(r,n)=>{var t;(r.path!==n.path||n===hr)&&([Ir.value]=await Promise.all([mr.resolvePageData(r.name),(t=Si[r.name])==null?void 0:t.__asyncLoader()]))}),e},lg=e=>{e.component("ClientOnly",Do),e.component("Content",Ku)},ug=(e,r,n)=>{const t=N(()=>mr.resolveLayouts(n)),o=aa(()=>r.currentRoute.value.path),s=aa(()=>mr.resolveRouteLocale(tn.value.locales,o.value)),a=N(()=>mr.resolveSiteLocaleData(tn.value,s.value)),c=N(()=>mr.resolvePageFrontmatter(Ir.value)),i=N(()=>mr.resolvePageHeadTitle(Ir.value,a.value)),l=N(()=>mr.resolvePageHead(i.value,c.value,a.value)),u=N(()=>mr.resolvePageLang(Ir.value,a.value)),d=N(()=>mr.resolvePageLayout(Ir.value,t.value));return e.provide(Hu,t),e.provide(Pi,c),e.provide(Vu,i),e.provide(xi,l),e.provide(Ei,u),e.provide(Ti,d),e.provide(Mo,s),e.provide(Ci,a),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>l.value},$headTitle:{get:()=>i.value},$lang:{get:()=>u.value},$page:{get:()=>Ir.value},$routeLocale:{get:()=>s.value},$site:{get:()=>tn.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>Bo}}),{layouts:t,pageData:Ir,pageFrontmatter:c,pageHead:l,pageHeadTitle:i,pageLang:u,pageLayout:d,routeLocale:s,siteData:tn,siteLocaleData:a}},dg=()=>{const e=$u(),r=Ju(),n=fe([]),t=()=>{e.value.forEach(s=>{const a=pg(s);a&&n.value.push(a)})},o=()=>{document.documentElement.lang=r.value,n.value.forEach(s=>{s.parentNode===document.head&&document.head.removeChild(s)}),n.value.splice(0,n.value.length),e.value.forEach(s=>{const a=mg(s);a!==null&&(document.head.appendChild(a),n.value.push(a))})};Gr(Yu,o),He(()=>{t(),o(),sr(()=>e.value,o)})},pg=([e,r,n=""])=>{const t=Object.entries(r).map(([c,i])=>ge(i)?`[${c}=${JSON.stringify(i)}]`:i===!0?`[${c}]`:"").join(""),o=`head > ${e}${t}`;return Array.from(document.querySelectorAll(o)).find(c=>c.innerText===n)||null},mg=([e,r,n])=>{if(!ge(e))return null;const t=document.createElement(e);return No(r)&&Object.entries(r).forEach(([o,s])=>{ge(s)?t.setAttribute(o,s):s===!0&&t.setAttribute(o,"")}),ge(n)&&t.appendChild(document.createTextNode(n)),t},hg=Ou,fg=async()=>{var n;const e=hg({name:"VuepressApp",setup(){var t;dg();for(const o of it)(t=o.setup)==null||t.call(o);return()=>[ce(Di),...it.flatMap(({rootComponents:o=[]})=>o.map(s=>ce(s)))]}}),r=cg();lg(e),ug(e,r,it);for(const t of it)await((n=t.enhance)==null?void 0:n.call(t,{app:e,router:r,siteData:tn}));return e.use(r),{app:e,router:r}};fg().then(({app:e,router:r})=>{r.isReady().then(()=>{e.mount("#app")})});export{Ee as _,me as a,re as b,K as c,fg as createVueApp,Nr as d,Zl as e,Te as f,D as o,yr as r,Ae as t,ze as w};
