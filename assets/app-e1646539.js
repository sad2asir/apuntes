const Gi="modulepreload",$i=function(e){return"/apuntes/"+e},et={},z=function(r,n,a){if(!n||n.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=$i(t),t in et)return;et[t]=!0;const s=t.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!a)for(let d=o.length-1;d>=0;d--){const u=o[d];if(u.href===t&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${c}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Gi,s||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),s)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})};function go(e,r){const n=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)n[a[o]]=!0;return r?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const qe={},an=[],tr=()=>{},Yi=()=>!1,Zi=/^on[^a-z]/,Dn=e=>Zi.test(e),fo=e=>e.startsWith("onUpdate:"),Ce=Object.assign,bo=(e,r)=>{const n=e.indexOf(r);n>-1&&e.splice(n,1)},Xi=Object.prototype.hasOwnProperty,me=(e,r)=>Xi.call(e,r),X=Array.isArray,on=e=>qa(e)==="[object Map]",hs=e=>qa(e)==="[object Set]",se=e=>typeof e=="function",be=e=>typeof e=="string",vo=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",gs=e=>xe(e)&&se(e.then)&&se(e.catch),fs=Object.prototype.toString,qa=e=>fs.call(e),Ki=e=>qa(e).slice(8,-1),bs=e=>qa(e)==="[object Object]",yo=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_n=go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=e=>{const r=Object.create(null);return n=>r[n]||(r[n]=e(n))},Qi=/-(\w)/g,ur=xa(e=>e.replace(Qi,(r,n)=>n?n.toUpperCase():"")),ec=/\B([A-Z])/g,Yr=xa(e=>e.replace(ec,"-$1").toLowerCase()),ka=xa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Oa=xa(e=>e?`on${ka(e)}`:""),An=(e,r)=>!Object.is(e,r),Na=(e,r)=>{for(let n=0;n<e.length;n++)e[n](r)},la=(e,r,n)=>{Object.defineProperty(e,r,{configurable:!0,enumerable:!1,value:n})},rc=e=>{const r=parseFloat(e);return isNaN(r)?e:r},nc=e=>{const r=be(e)?Number(e):NaN;return isNaN(r)?e:r};let rt;const Ka=()=>rt||(rt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fn(e){if(X(e)){const r={};for(let n=0;n<e.length;n++){const a=e[n],o=be(a)?sc(a):Fn(a);if(o)for(const t in o)r[t]=o[t]}return r}else{if(be(e))return e;if(xe(e))return e}}const ac=/;(?![^(]*\))/g,oc=/:([^]+)/,tc=/\/\*[^]*?\*\//g;function sc(e){const r={};return e.replace(tc,"").split(ac).forEach(n=>{if(n){const a=n.split(oc);a.length>1&&(r[a[0].trim()]=a[1].trim())}}),r}function Je(e){let r="";if(be(e))r=e;else if(X(e))for(let n=0;n<e.length;n++){const a=Je(e[n]);a&&(r+=a+" ")}else if(xe(e))for(const n in e)e[n]&&(r+=n+" ");return r.trim()}const ic="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cc=go(ic);function vs(e){return!!e||e===""}const Ae=e=>be(e)?e:e==null?"":X(e)||xe(e)&&(e.toString===fs||!se(e.toString))?JSON.stringify(e,ys,2):String(e),ys=(e,r)=>r&&r.__v_isRef?ys(e,r.value):on(r)?{[`Map(${r.size})`]:[...r.entries()].reduce((n,[a,o])=>(n[`${a} =>`]=o,n),{})}:hs(r)?{[`Set(${r.size})`]:[...r.values()]}:xe(r)&&!X(r)&&!bs(r)?String(r):r;let Ye;class lc{constructor(r=!1){this.detached=r,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!r&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(r){if(this._active){const n=Ye;try{return Ye=this,r()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(r){if(this._active){let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!r){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function dc(e,r=Ye){r&&r.active&&r.effects.push(e)}function ws(){return Ye}function uc(e){Ye&&Ye.cleanups.push(e)}const wo=e=>{const r=new Set(e);return r.w=0,r.n=0,r},Ss=e=>(e.w&Ir)>0,Ps=e=>(e.n&Ir)>0,pc=({deps:e})=>{if(e.length)for(let r=0;r<e.length;r++)e[r].w|=Ir},mc=e=>{const{deps:r}=e;if(r.length){let n=0;for(let a=0;a<r.length;a++){const o=r[a];Ss(o)&&!Ps(o)?o.delete(e):r[n++]=o,o.w&=~Ir,o.n&=~Ir}r.length=n}},da=new WeakMap;let xn=0,Ir=1;const Qa=30;let ar;const Jr=Symbol(""),eo=Symbol("");class So{constructor(r,n=null,a){this.fn=r,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dc(this,a)}run(){if(!this.active)return this.fn();let r=ar,n=Cr;for(;r;){if(r===this)return;r=r.parent}try{return this.parent=ar,ar=this,Cr=!0,Ir=1<<++xn,xn<=Qa?pc(this):nt(this),this.fn()}finally{xn<=Qa&&mc(this),Ir=1<<--xn,ar=this.parent,Cr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ar===this?this.deferStop=!0:this.active&&(nt(this),this.onStop&&this.onStop(),this.active=!1)}}function nt(e){const{deps:r}=e;if(r.length){for(let n=0;n<r.length;n++)r[n].delete(e);r.length=0}}let Cr=!0;const qs=[];function gn(){qs.push(Cr),Cr=!1}function fn(){const e=qs.pop();Cr=e===void 0?!0:e}function Ge(e,r,n){if(Cr&&ar){let a=da.get(e);a||da.set(e,a=new Map);let o=a.get(n);o||a.set(n,o=wo()),xs(o)}}function xs(e,r){let n=!1;xn<=Qa?Ps(e)||(e.n|=Ir,n=!Ss(e)):n=!e.has(ar),n&&(e.add(ar),ar.deps.push(e))}function vr(e,r,n,a,o,t){const s=da.get(e);if(!s)return;let c=[];if(r==="clear")c=[...s.values()];else if(n==="length"&&X(e)){const i=Number(a);s.forEach((l,d)=>{(d==="length"||d>=i)&&c.push(l)})}else switch(n!==void 0&&c.push(s.get(n)),r){case"add":X(e)?yo(n)&&c.push(s.get("length")):(c.push(s.get(Jr)),on(e)&&c.push(s.get(eo)));break;case"delete":X(e)||(c.push(s.get(Jr)),on(e)&&c.push(s.get(eo)));break;case"set":on(e)&&c.push(s.get(Jr));break}if(c.length===1)c[0]&&ro(c[0]);else{const i=[];for(const l of c)l&&i.push(...l);ro(wo(i))}}function ro(e,r){const n=X(e)?e:[...e];for(const a of n)a.computed&&at(a);for(const a of n)a.computed||at(a)}function at(e,r){(e!==ar||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function hc(e,r){var n;return(n=da.get(e))==null?void 0:n.get(r)}const gc=go("__proto__,__v_isRef,__isVue"),ks=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vo)),fc=Po(),bc=Po(!1,!0),vc=Po(!0),ot=yc();function yc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(r=>{e[r]=function(...n){const a=ge(this);for(let t=0,s=this.length;t<s;t++)Ge(a,"get",t+"");const o=a[r](...n);return o===-1||o===!1?a[r](...n.map(ge)):o}}),["push","pop","shift","unshift","splice"].forEach(r=>{e[r]=function(...n){gn();const a=ge(this)[r].apply(this,n);return fn(),a}}),e}function wc(e){const r=ge(this);return Ge(r,"has",e),r.hasOwnProperty(e)}function Po(e=!1,r=!1){return function(a,o,t){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return r;if(o==="__v_raw"&&t===(e?r?Oc:Cs:r?Ts:js).get(a))return a;const s=X(a);if(!e){if(s&&me(ot,o))return Reflect.get(ot,o,t);if(o==="hasOwnProperty")return wc}const c=Reflect.get(a,o,t);return(vo(o)?ks.has(o):gc(o))||(e||Ge(a,"get",o),r)?c:Le(c)?s&&yo(o)?c:c.value:xe(c)?e?bn(c):Bn(c):c}}const Sc=_s(),Pc=_s(!0);function _s(e=!1){return function(n,a,o,t){let s=n[a];if(ln(s)&&Le(s)&&!Le(o))return!1;if(!e&&(!ua(o)&&!ln(o)&&(s=ge(s),o=ge(o)),!X(n)&&Le(s)&&!Le(o)))return s.value=o,!0;const c=X(n)&&yo(a)?Number(a)<n.length:me(n,a),i=Reflect.set(n,a,o,t);return n===ge(t)&&(c?An(o,s)&&vr(n,"set",a,o):vr(n,"add",a,o)),i}}function qc(e,r){const n=me(e,r);e[r];const a=Reflect.deleteProperty(e,r);return a&&n&&vr(e,"delete",r,void 0),a}function xc(e,r){const n=Reflect.has(e,r);return(!vo(r)||!ks.has(r))&&Ge(e,"has",r),n}function kc(e){return Ge(e,"iterate",X(e)?"length":Jr),Reflect.ownKeys(e)}const Es={get:fc,set:Sc,deleteProperty:qc,has:xc,ownKeys:kc},_c={get:vc,set(e,r){return!0},deleteProperty(e,r){return!0}},Ec=Ce({},Es,{get:bc,set:Pc}),qo=e=>e,_a=e=>Reflect.getPrototypeOf(e);function $n(e,r,n=!1,a=!1){e=e.__v_raw;const o=ge(e),t=ge(r);n||(r!==t&&Ge(o,"get",r),Ge(o,"get",t));const{has:s}=_a(o),c=a?qo:n?_o:In;if(s.call(o,r))return c(e.get(r));if(s.call(o,t))return c(e.get(t));e!==o&&e.get(r)}function Yn(e,r=!1){const n=this.__v_raw,a=ge(n),o=ge(e);return r||(e!==o&&Ge(a,"has",e),Ge(a,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Zn(e,r=!1){return e=e.__v_raw,!r&&Ge(ge(e),"iterate",Jr),Reflect.get(e,"size",e)}function tt(e){e=ge(e);const r=ge(this);return _a(r).has.call(r,e)||(r.add(e),vr(r,"add",e,e)),this}function st(e,r){r=ge(r);const n=ge(this),{has:a,get:o}=_a(n);let t=a.call(n,e);t||(e=ge(e),t=a.call(n,e));const s=o.call(n,e);return n.set(e,r),t?An(r,s)&&vr(n,"set",e,r):vr(n,"add",e,r),this}function it(e){const r=ge(this),{has:n,get:a}=_a(r);let o=n.call(r,e);o||(e=ge(e),o=n.call(r,e)),a&&a.call(r,e);const t=r.delete(e);return o&&vr(r,"delete",e,void 0),t}function ct(){const e=ge(this),r=e.size!==0,n=e.clear();return r&&vr(e,"clear",void 0,void 0),n}function Xn(e,r){return function(a,o){const t=this,s=t.__v_raw,c=ge(s),i=r?qo:e?_o:In;return!e&&Ge(c,"iterate",Jr),s.forEach((l,d)=>a.call(o,i(l),i(d),t))}}function Kn(e,r,n){return function(...a){const o=this.__v_raw,t=ge(o),s=on(t),c=e==="entries"||e===Symbol.iterator&&s,i=e==="keys"&&s,l=o[e](...a),d=n?qo:r?_o:In;return!r&&Ge(t,"iterate",i?eo:Jr),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:c?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function xr(e){return function(...r){return e==="delete"?!1:this}}function jc(){const e={get(t){return $n(this,t)},get size(){return Zn(this)},has:Yn,add:tt,set:st,delete:it,clear:ct,forEach:Xn(!1,!1)},r={get(t){return $n(this,t,!1,!0)},get size(){return Zn(this)},has:Yn,add:tt,set:st,delete:it,clear:ct,forEach:Xn(!1,!0)},n={get(t){return $n(this,t,!0)},get size(){return Zn(this,!0)},has(t){return Yn.call(this,t,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:Xn(!0,!1)},a={get(t){return $n(this,t,!0,!0)},get size(){return Zn(this,!0)},has(t){return Yn.call(this,t,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:Xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(t=>{e[t]=Kn(t,!1,!1),n[t]=Kn(t,!0,!1),r[t]=Kn(t,!1,!0),a[t]=Kn(t,!0,!0)}),[e,n,r,a]}const[Tc,Cc,zc,Ac]=jc();function xo(e,r){const n=r?e?Ac:zc:e?Cc:Tc;return(a,o,t)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(me(n,o)&&o in a?n:a,o,t)}const Ic={get:xo(!1,!1)},Lc={get:xo(!1,!0)},Rc={get:xo(!0,!1)},js=new WeakMap,Ts=new WeakMap,Cs=new WeakMap,Oc=new WeakMap;function Nc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mc(e){return e.__v_skip||!Object.isExtensible(e)?0:Nc(Ki(e))}function Bn(e){return ln(e)?e:ko(e,!1,Es,Ic,js)}function zs(e){return ko(e,!1,Ec,Lc,Ts)}function bn(e){return ko(e,!0,_c,Rc,Cs)}function ko(e,r,n,a,o){if(!xe(e)||e.__v_raw&&!(r&&e.__v_isReactive))return e;const t=o.get(e);if(t)return t;const s=Mc(e);if(s===0)return e;const c=new Proxy(e,s===2?a:n);return o.set(e,c),c}function tn(e){return ln(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function ua(e){return!!(e&&e.__v_isShallow)}function As(e){return tn(e)||ln(e)}function ge(e){const r=e&&e.__v_raw;return r?ge(r):e}function Is(e){return la(e,"__v_skip",!0),e}const In=e=>xe(e)?Bn(e):e,_o=e=>xe(e)?bn(e):e;function Eo(e){Cr&&ar&&(e=ge(e),xs(e.dep||(e.dep=wo())))}function jo(e,r){e=ge(e);const n=e.dep;n&&ro(n)}function Le(e){return!!(e&&e.__v_isRef===!0)}function fe(e){return Ls(e,!1)}function To(e){return Ls(e,!0)}function Ls(e,r){return Le(e)?e:new Dc(e,r)}class Dc{constructor(r,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?r:ge(r),this._value=n?r:In(r)}get value(){return Eo(this),this._value}set value(r){const n=this.__v_isShallow||ua(r)||ln(r);r=n?r:ge(r),An(r,this._rawValue)&&(this._rawValue=r,this._value=n?r:In(r),jo(this))}}function ee(e){return Le(e)?e.value:e}const Fc={get:(e,r,n)=>ee(Reflect.get(e,r,n)),set:(e,r,n,a)=>{const o=e[r];return Le(o)&&!Le(n)?(o.value=n,!0):Reflect.set(e,r,n,a)}};function Rs(e){return tn(e)?e:new Proxy(e,Fc)}class Bc{constructor(r){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:a}=r(()=>Eo(this),()=>jo(this));this._get=n,this._set=a}get value(){return this._get()}set value(r){this._set(r)}}function Uc(e){return new Bc(e)}function Ea(e){const r=X(e)?new Array(e.length):{};for(const n in e)r[n]=Wc(e,n);return r}class Hc{constructor(r,n,a){this._object=r,this._key=n,this._defaultValue=a,this.__v_isRef=!0}get value(){const r=this._object[this._key];return r===void 0?this._defaultValue:r}set value(r){this._object[this._key]=r}get dep(){return hc(ge(this._object),this._key)}}function Wc(e,r,n){const a=e[r];return Le(a)?a:new Hc(e,r,n)}class Vc{constructor(r,n,a,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new So(r,()=>{this._dirty||(this._dirty=!0,jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const r=ge(this);return Eo(r),(r._dirty||!r._cacheable)&&(r._dirty=!1,r._value=r.effect.run()),r._value}set value(r){this._setter(r)}}function Jc(e,r,n=!1){let a,o;const t=se(e);return t?(a=e,o=tr):(a=e.get,o=e.set),new Vc(a,o,t||!o,n)}function zr(e,r,n,a){let o;try{o=a?e(...a):e()}catch(t){Un(t,r,n)}return o}function Qe(e,r,n,a){if(se(e)){const t=zr(e,r,n,a);return t&&gs(t)&&t.catch(s=>{Un(s,r,n)}),t}const o=[];for(let t=0;t<e.length;t++)o.push(Qe(e[t],r,n,a));return o}function Un(e,r,n,a=!0){const o=r?r.vnode:null;if(r){let t=r.parent;const s=r.proxy,c=n;for(;t;){const l=t.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,s,c)===!1)return}t=t.parent}const i=r.appContext.config.errorHandler;if(i){zr(i,null,10,[e,s,c]);return}}Gc(e,n,o,a)}function Gc(e,r,n,a=!0){console.error(e)}let Ln=!1,no=!1;const Fe=[];let dr=0;const sn=[];let gr=null,Ur=0;const Os=Promise.resolve();let Co=null;function Hn(e){const r=Co||Os;return e?r.then(this?e.bind(this):e):r}function $c(e){let r=dr+1,n=Fe.length;for(;r<n;){const a=r+n>>>1;Rn(Fe[a])<e?r=a+1:n=a}return r}function ja(e){(!Fe.length||!Fe.includes(e,Ln&&e.allowRecurse?dr+1:dr))&&(e.id==null?Fe.push(e):Fe.splice($c(e.id),0,e),Ns())}function Ns(){!Ln&&!no&&(no=!0,Co=Os.then(Ms))}function Yc(e){const r=Fe.indexOf(e);r>dr&&Fe.splice(r,1)}function Zc(e){X(e)?sn.push(...e):(!gr||!gr.includes(e,e.allowRecurse?Ur+1:Ur))&&sn.push(e),Ns()}function lt(e,r=Ln?dr+1:0){for(;r<Fe.length;r++){const n=Fe[r];n&&n.pre&&(Fe.splice(r,1),r--,n())}}function pa(e){if(sn.length){const r=[...new Set(sn)];if(sn.length=0,gr){gr.push(...r);return}for(gr=r,gr.sort((n,a)=>Rn(n)-Rn(a)),Ur=0;Ur<gr.length;Ur++)gr[Ur]();gr=null,Ur=0}}const Rn=e=>e.id==null?1/0:e.id,Xc=(e,r)=>{const n=Rn(e)-Rn(r);if(n===0){if(e.pre&&!r.pre)return-1;if(r.pre&&!e.pre)return 1}return n};function Ms(e){no=!1,Ln=!0,Fe.sort(Xc);const r=tr;try{for(dr=0;dr<Fe.length;dr++){const n=Fe[dr];n&&n.active!==!1&&zr(n,null,14)}}finally{dr=0,Fe.length=0,pa(),Ln=!1,Co=null,(Fe.length||sn.length)&&Ms()}}function Kc(e,r,...n){if(e.isUnmounted)return;const a=e.vnode.props||qe;let o=n;const t=r.startsWith("update:"),s=t&&r.slice(7);if(s&&s in a){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:p}=a[d]||qe;p&&(o=n.map(f=>be(f)?f.trim():f)),u&&(o=n.map(rc))}let c,i=a[c=Oa(r)]||a[c=Oa(ur(r))];!i&&t&&(i=a[c=Oa(Yr(r))]),i&&Qe(i,e,6,o);const l=a[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Qe(l,e,6,o)}}function Ds(e,r,n=!1){const a=r.emitsCache,o=a.get(e);if(o!==void 0)return o;const t=e.emits;let s={},c=!1;if(!se(e)){const i=l=>{const d=Ds(l,r,!0);d&&(c=!0,Ce(s,d))};!n&&r.mixins.length&&r.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!t&&!c?(xe(e)&&a.set(e,null),null):(X(t)?t.forEach(i=>s[i]=null):Ce(s,t),xe(e)&&a.set(e,s),s)}function Ta(e,r){return!e||!Dn(r)?!1:(r=r.slice(2).replace(/Once$/,""),me(e,r[0].toLowerCase()+r.slice(1))||me(e,Yr(r))||me(e,r))}let Ne=null,Fs=null;function ma(e){const r=Ne;return Ne=e,Fs=e&&e.type.__scopeId||null,r}function Oe(e,r=Ne,n){if(!r||e._n)return e;const a=(...o)=>{a._d&&St(-1);const t=ma(r);let s;try{s=e(...o)}finally{ma(t),a._d&&St(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function Ma(e){const{type:r,vnode:n,proxy:a,withProxy:o,props:t,propsOptions:[s],slots:c,attrs:i,emit:l,render:d,renderCache:u,data:p,setupState:f,ctx:w,inheritAttrs:S}=e;let q,b;const y=ma(e);try{if(n.shapeFlag&4){const j=o||a;q=nr(d.call(j,j,u,t,f,p,w)),b=i}else{const j=r;q=nr(j.length>1?j(t,{attrs:i,slots:c,emit:l}):j(t,null)),b=r.props?i:Qc(i)}}catch(j){Tn.length=0,Un(j,e,1),q=ne(Ze)}let T=q;if(b&&S!==!1){const j=Object.keys(b),{shapeFlag:V}=T;j.length&&V&7&&(s&&j.some(fo)&&(b=el(b,s)),T=Rr(T,b))}return n.dirs&&(T=Rr(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),q=T,ma(y),q}const Qc=e=>{let r;for(const n in e)(n==="class"||n==="style"||Dn(n))&&((r||(r={}))[n]=e[n]);return r},el=(e,r)=>{const n={};for(const a in e)(!fo(a)||!(a.slice(9)in r))&&(n[a]=e[a]);return n};function rl(e,r,n){const{props:a,children:o,component:t}=e,{props:s,children:c,patchFlag:i}=r,l=t.emitsOptions;if(r.dirs||r.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return a?dt(a,s,l):!!s;if(i&8){const d=r.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(s[p]!==a[p]&&!Ta(l,p))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:a===s?!1:a?s?dt(a,s,l):!0:!!s;return!1}function dt(e,r,n){const a=Object.keys(r);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const t=a[o];if(r[t]!==e[t]&&!Ta(n,t))return!0}return!1}function nl({vnode:e,parent:r},n){for(;r&&r.subTree===e;)(e=r.vnode).el=n,r=r.parent}const al=e=>e.__isSuspense;function Bs(e,r){r&&r.pendingBranch?X(e)?r.effects.push(...e):r.effects.push(e):Zc(e)}function Us(e,r){return zo(e,null,r)}const Qn={};function er(e,r,n){return zo(e,r,n)}function zo(e,r,{immediate:n,deep:a,flush:o,onTrack:t,onTrigger:s}=qe){var c;const i=ws()===((c=ze)==null?void 0:c.scope)?ze:null;let l,d=!1,u=!1;if(Le(e)?(l=()=>e.value,d=ua(e)):tn(e)?(l=()=>e,a=!0):X(e)?(u=!0,d=e.some(j=>tn(j)||ua(j)),l=()=>e.map(j=>{if(Le(j))return j.value;if(tn(j))return Vr(j);if(se(j))return zr(j,i,2)})):se(e)?r?l=()=>zr(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return p&&p(),Qe(e,i,3,[f])}:l=tr,r&&a){const j=l;l=()=>Vr(j())}let p,f=j=>{p=y.onStop=()=>{zr(j,i,4)}},w;if(pn)if(f=tr,r?n&&Qe(r,i,3,[l(),u?[]:void 0,f]):l(),o==="sync"){const j=Kl();w=j.__watcherHandles||(j.__watcherHandles=[])}else return tr;let S=u?new Array(e.length).fill(Qn):Qn;const q=()=>{if(y.active)if(r){const j=y.run();(a||d||(u?j.some((V,K)=>An(V,S[K])):An(j,S)))&&(p&&p(),Qe(r,i,3,[j,S===Qn?void 0:u&&S[0]===Qn?[]:S,f]),S=j)}else y.run()};q.allowRecurse=!!r;let b;o==="sync"?b=q:o==="post"?b=()=>Ve(q,i&&i.suspense):(q.pre=!0,i&&(q.id=i.uid),b=()=>ja(q));const y=new So(l,b);r?n?q():S=y.run():o==="post"?Ve(y.run.bind(y),i&&i.suspense):y.run();const T=()=>{y.stop(),i&&i.scope&&bo(i.scope.effects,y)};return w&&w.push(T),T}function ol(e,r,n){const a=this.proxy,o=be(e)?e.includes(".")?Hs(a,e):()=>a[e]:e.bind(a,a);let t;se(r)?t=r:(t=r.handler,n=r);const s=ze;un(this);const c=zo(o,t.bind(a),n);return s?un(s):$r(),c}function Hs(e,r){const n=r.split(".");return()=>{let a=e;for(let o=0;o<n.length&&a;o++)a=a[n[o]];return a}}function Vr(e,r){if(!xe(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),Le(e))Vr(e.value,r);else if(X(e))for(let n=0;n<e.length;n++)Vr(e[n],r);else if(hs(e)||on(e))e.forEach(n=>{Vr(n,r)});else if(bs(e))for(const n in e)Vr(e[n],r);return e}function ha(e,r){const n=Ne;if(n===null)return e;const a=Ia(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let t=0;t<r.length;t++){let[s,c,i,l=qe]=r[t];s&&(se(s)&&(s={mounted:s,updated:s}),s.deep&&Vr(c),o.push({dir:s,instance:a,value:c,oldValue:void 0,arg:i,modifiers:l}))}return e}function lr(e,r,n,a){const o=e.dirs,t=r&&r.dirs;for(let s=0;s<o.length;s++){const c=o[s];t&&(c.oldValue=t[s].value);let i=c.dir[a];i&&(gn(),Qe(i,n,8,[e.el,c,e,r]),fn())}}function tl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He(()=>{e.isMounted=!0}),Vn(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],Ws={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},sl={name:"BaseTransition",props:Ws,setup(e,{slots:r}){const n=Ro(),a=tl();let o;return()=>{const t=r.default&&Js(r.default(),!0);if(!t||!t.length)return;let s=t[0];if(t.length>1){for(const S of t)if(S.type!==Ze){s=S;break}}const c=ge(e),{mode:i}=c;if(a.isLeaving)return Da(s);const l=ut(s);if(!l)return Da(s);const d=ao(l,c,a,n);oo(l,d);const u=n.subTree,p=u&&ut(u);let f=!1;const{getTransitionKey:w}=l.type;if(w){const S=w();o===void 0?o=S:S!==o&&(o=S,f=!0)}if(p&&p.type!==Ze&&(!Hr(l,p)||f)){const S=ao(p,c,a,n);if(oo(p,S),i==="out-in")return a.isLeaving=!0,S.afterLeave=()=>{a.isLeaving=!1,n.update.active!==!1&&n.update()},Da(s);i==="in-out"&&l.type!==Ze&&(S.delayLeave=(q,b,y)=>{const T=Vs(a,p);T[String(p.key)]=p,q._leaveCb=()=>{b(),q._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=y})}return s}}},il=sl;function Vs(e,r){const{leavingVNodes:n}=e;let a=n.get(r.type);return a||(a=Object.create(null),n.set(r.type,a)),a}function ao(e,r,n,a){const{appear:o,mode:t,persisted:s=!1,onBeforeEnter:c,onEnter:i,onAfterEnter:l,onEnterCancelled:d,onBeforeLeave:u,onLeave:p,onAfterLeave:f,onLeaveCancelled:w,onBeforeAppear:S,onAppear:q,onAfterAppear:b,onAppearCancelled:y}=r,T=String(e.key),j=Vs(n,e),V=(g,H)=>{g&&Qe(g,a,9,H)},K=(g,H)=>{const D=H[1];V(g,H),X(g)?g.every($=>$.length<=1)&&D():g.length<=1&&D()},R={mode:t,persisted:s,beforeEnter(g){let H=c;if(!n.isMounted)if(o)H=S||c;else return;g._leaveCb&&g._leaveCb(!0);const D=j[T];D&&Hr(e,D)&&D.el._leaveCb&&D.el._leaveCb(),V(H,[g])},enter(g){let H=i,D=l,$=d;if(!n.isMounted)if(o)H=q||i,D=b||l,$=y||d;else return;let _=!1;const I=g._enterCb=L=>{_||(_=!0,L?V($,[g]):V(D,[g]),R.delayedLeave&&R.delayedLeave(),g._enterCb=void 0)};H?K(H,[g,I]):I()},leave(g,H){const D=String(e.key);if(g._enterCb&&g._enterCb(!0),n.isUnmounting)return H();V(u,[g]);let $=!1;const _=g._leaveCb=I=>{$||($=!0,H(),I?V(w,[g]):V(f,[g]),g._leaveCb=void 0,j[D]===e&&delete j[D])};j[D]=e,p?K(p,[g,_]):_()},clone(g){return ao(g,r,n,a)}};return R}function Da(e){if(Wn(e))return e=Rr(e),e.children=null,e}function ut(e){return Wn(e)?e.children?e.children[0]:void 0:e}function oo(e,r){e.shapeFlag&6&&e.component?oo(e.component.subTree,r):e.shapeFlag&128?(e.ssContent.transition=r.clone(e.ssContent),e.ssFallback.transition=r.clone(e.ssFallback)):e.transition=r}function Js(e,r=!1,n){let a=[],o=0;for(let t=0;t<e.length;t++){let s=e[t];const c=n==null?s.key:String(n)+String(s.key!=null?s.key:t);s.type===Pe?(s.patchFlag&128&&o++,a=a.concat(Js(s.children,r,c))):(r||s.type!==Ze)&&a.push(c!=null?Rr(s,{key:c}):s)}if(o>1)for(let t=0;t<a.length;t++)a[t].patchFlag=-2;return a}function ue(e,r){return se(e)?(()=>Ce({name:e.name},r,{setup:e}))():e}const cn=e=>!!e.type.__asyncLoader;function re(e){se(e)&&(e={loader:e});const{loader:r,loadingComponent:n,errorComponent:a,delay:o=200,timeout:t,suspensible:s=!0,onError:c}=e;let i=null,l,d=0;const u=()=>(d++,i=null,p()),p=()=>{let f;return i||(f=i=r().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),c)return new Promise((S,q)=>{c(w,()=>S(u()),()=>q(w),d+1)});throw w}).then(w=>f!==i&&i?i:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),l=w,w)))};return ue({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return l},setup(){const f=ze;if(l)return()=>Fa(l,f);const w=y=>{i=null,Un(y,f,13,!a)};if(s&&f.suspense||pn)return p().then(y=>()=>Fa(y,f)).catch(y=>(w(y),()=>a?ne(a,{error:y}):null));const S=fe(!1),q=fe(),b=fe(!!o);return o&&setTimeout(()=>{b.value=!1},o),t!=null&&setTimeout(()=>{if(!S.value&&!q.value){const y=new Error(`Async component timed out after ${t}ms.`);w(y),q.value=y}},t),p().then(()=>{S.value=!0,f.parent&&Wn(f.parent.vnode)&&ja(f.parent.update)}).catch(y=>{w(y),q.value=y}),()=>{if(S.value&&l)return Fa(l,f);if(q.value&&a)return ne(a,{error:q.value});if(n&&!b.value)return ne(n)}}})}function Fa(e,r){const{ref:n,props:a,children:o,ce:t}=r.vnode,s=ne(e,a,o);return s.ref=n,s.ce=t,delete r.vnode.ce,s}const Wn=e=>e.type.__isKeepAlive;function cl(e,r){Gs(e,"a",r)}function ll(e,r){Gs(e,"da",r)}function Gs(e,r,n=ze){const a=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ca(r,a,n),n){let o=n.parent;for(;o&&o.parent;)Wn(o.parent.vnode)&&dl(a,r,n,o),o=o.parent}}function dl(e,r,n,a){const o=Ca(r,e,a,!0);za(()=>{bo(a[r],o)},n)}function Ca(e,r,n=ze,a=!1){if(n){const o=n[e]||(n[e]=[]),t=r.__weh||(r.__weh=(...s)=>{if(n.isUnmounted)return;gn(),un(n);const c=Qe(r,n,e,s);return $r(),fn(),c});return a?o.unshift(t):o.push(t),t}}const wr=e=>(r,n=ze)=>(!pn||e==="sp")&&Ca(e,(...a)=>r(...a),n),ul=wr("bm"),He=wr("m"),pl=wr("bu"),ml=wr("u"),Vn=wr("bum"),za=wr("um"),hl=wr("sp"),gl=wr("rtg"),fl=wr("rtc");function bl(e,r=ze){Ca("ec",e,r)}const $s="components";function yr(e,r){return yl($s,e,!0,r)||e}const vl=Symbol.for("v-ndc");function yl(e,r,n=!0,a=!1){const o=Ne||ze;if(o){const t=o.type;if(e===$s){const c=Yl(t,!1);if(c&&(c===r||c===ur(r)||c===ka(ur(r))))return t}const s=pt(o[e]||t[e],r)||pt(o.appContext[e],r);return!s&&a?t:s}}function pt(e,r){return e&&(e[r]||e[ur(r)]||e[ka(ur(r))])}function Lr(e,r,n,a){let o;const t=n&&n[a];if(X(e)||be(e)){o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=r(e[s],s,void 0,t&&t[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=r(s+1,s,void 0,t&&t[s])}else if(xe(e))if(e[Symbol.iterator])o=Array.from(e,(s,c)=>r(s,c,void 0,t&&t[c]));else{const s=Object.keys(e);o=new Array(s.length);for(let c=0,i=s.length;c<i;c++){const l=s[c];o[c]=r(e[l],l,c,t&&t[c])}}else o=[];return n&&(n[a]=o),o}function Se(e,r,n={},a,o){if(Ne.isCE||Ne.parent&&cn(Ne.parent)&&Ne.parent.isCE)return r!=="default"&&(n.name=r),ne("slot",n,a&&a());let t=e[r];t&&t._c&&(t._d=!1),B();const s=t&&Ys(t(n)),c=Te(Pe,{key:n.key||s&&s.key||`_${r}`},s||(a?a():[]),s&&e._===1?64:-2);return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),t&&t._c&&(t._d=!0),c}function Ys(e){return e.some(r=>va(r)?!(r.type===Ze||r.type===Pe&&!Ys(r.children)):!0)?e:null}const to=e=>e?si(e)?Ia(e)||e.proxy:to(e.parent):null,En=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$emit:e=>e.emit,$options:e=>Ao(e),$forceUpdate:e=>e.f||(e.f=()=>ja(e.update)),$nextTick:e=>e.n||(e.n=Hn.bind(e.proxy)),$watch:e=>ol.bind(e)}),Ba=(e,r)=>e!==qe&&!e.__isScriptSetup&&me(e,r),wl={get({_:e},r){const{ctx:n,setupState:a,data:o,props:t,accessCache:s,type:c,appContext:i}=e;let l;if(r[0]!=="$"){const f=s[r];if(f!==void 0)switch(f){case 1:return a[r];case 2:return o[r];case 4:return n[r];case 3:return t[r]}else{if(Ba(a,r))return s[r]=1,a[r];if(o!==qe&&me(o,r))return s[r]=2,o[r];if((l=e.propsOptions[0])&&me(l,r))return s[r]=3,t[r];if(n!==qe&&me(n,r))return s[r]=4,n[r];so&&(s[r]=0)}}const d=En[r];let u,p;if(d)return r==="$attrs"&&Ge(e,"get",r),d(e);if((u=c.__cssModules)&&(u=u[r]))return u;if(n!==qe&&me(n,r))return s[r]=4,n[r];if(p=i.config.globalProperties,me(p,r))return p[r]},set({_:e},r,n){const{data:a,setupState:o,ctx:t}=e;return Ba(o,r)?(o[r]=n,!0):a!==qe&&me(a,r)?(a[r]=n,!0):me(e.props,r)||r[0]==="$"&&r.slice(1)in e?!1:(t[r]=n,!0)},has({_:{data:e,setupState:r,accessCache:n,ctx:a,appContext:o,propsOptions:t}},s){let c;return!!n[s]||e!==qe&&me(e,s)||Ba(r,s)||(c=t[0])&&me(c,s)||me(a,s)||me(En,s)||me(o.config.globalProperties,s)},defineProperty(e,r,n){return n.get!=null?e._.accessCache[r]=0:me(n,"value")&&this.set(e,r,n.value,null),Reflect.defineProperty(e,r,n)}};function mt(e){return X(e)?e.reduce((r,n)=>(r[n]=null,r),{}):e}let so=!0;function Sl(e){const r=Ao(e),n=e.proxy,a=e.ctx;so=!1,r.beforeCreate&&ht(r.beforeCreate,e,"bc");const{data:o,computed:t,methods:s,watch:c,provide:i,inject:l,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:w,activated:S,deactivated:q,beforeDestroy:b,beforeUnmount:y,destroyed:T,unmounted:j,render:V,renderTracked:K,renderTriggered:R,errorCaptured:g,serverPrefetch:H,expose:D,inheritAttrs:$,components:_,directives:I,filters:L}=r;if(l&&Pl(l,a,null),s)for(const oe in s){const te=s[oe];se(te)&&(a[oe]=te.bind(n))}if(o){const oe=o.call(n,n);xe(oe)&&(e.data=Bn(oe))}if(so=!0,t)for(const oe in t){const te=t[oe],Me=se(te)?te.bind(n,n):se(te.get)?te.get.bind(n,n):tr,Re=!se(te)&&se(te.set)?te.set.bind(n):tr,We=M({get:Me,set:Re});Object.defineProperty(a,oe,{enumerable:!0,configurable:!0,get:()=>We.value,set:De=>We.value=De})}if(c)for(const oe in c)Zs(c[oe],a,n,oe);if(i){const oe=se(i)?i.call(n):i;Reflect.ownKeys(oe).forEach(te=>{Gr(te,oe[te])})}d&&ht(d,e,"c");function W(oe,te){X(te)?te.forEach(Me=>oe(Me.bind(n))):te&&oe(te.bind(n))}if(W(ul,u),W(He,p),W(pl,f),W(ml,w),W(cl,S),W(ll,q),W(bl,g),W(fl,K),W(gl,R),W(Vn,y),W(za,j),W(hl,H),X(D))if(D.length){const oe=e.exposed||(e.exposed={});D.forEach(te=>{Object.defineProperty(oe,te,{get:()=>n[te],set:Me=>n[te]=Me})})}else e.exposed||(e.exposed={});V&&e.render===tr&&(e.render=V),$!=null&&(e.inheritAttrs=$),_&&(e.components=_),I&&(e.directives=I)}function Pl(e,r,n=tr){X(e)&&(e=io(e));for(const a in e){const o=e[a];let t;xe(o)?"default"in o?t=Ee(o.from||a,o.default,!0):t=Ee(o.from||a):t=Ee(o),Le(t)?Object.defineProperty(r,a,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):r[a]=t}}function ht(e,r,n){Qe(X(e)?e.map(a=>a.bind(r.proxy)):e.bind(r.proxy),r,n)}function Zs(e,r,n,a){const o=a.includes(".")?Hs(n,a):()=>n[a];if(be(e)){const t=r[e];se(t)&&er(o,t)}else if(se(e))er(o,e.bind(n));else if(xe(e))if(X(e))e.forEach(t=>Zs(t,r,n,a));else{const t=se(e.handler)?e.handler.bind(n):r[e.handler];se(t)&&er(o,t,e)}}function Ao(e){const r=e.type,{mixins:n,extends:a}=r,{mixins:o,optionsCache:t,config:{optionMergeStrategies:s}}=e.appContext,c=t.get(r);let i;return c?i=c:!o.length&&!n&&!a?i=r:(i={},o.length&&o.forEach(l=>ga(i,l,s,!0)),ga(i,r,s)),xe(r)&&t.set(r,i),i}function ga(e,r,n,a=!1){const{mixins:o,extends:t}=r;t&&ga(e,t,n,!0),o&&o.forEach(s=>ga(e,s,n,!0));for(const s in r)if(!(a&&s==="expose")){const c=ql[s]||n&&n[s];e[s]=c?c(e[s],r[s]):r[s]}return e}const ql={data:gt,props:ft,emits:ft,methods:kn,computed:kn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:kn,directives:kn,watch:kl,provide:gt,inject:xl};function gt(e,r){return r?e?function(){return Ce(se(e)?e.call(this,this):e,se(r)?r.call(this,this):r)}:r:e}function xl(e,r){return kn(io(e),io(r))}function io(e){if(X(e)){const r={};for(let n=0;n<e.length;n++)r[e[n]]=e[n];return r}return e}function Be(e,r){return e?[...new Set([].concat(e,r))]:r}function kn(e,r){return e?Ce(Object.create(null),e,r):r}function ft(e,r){return e?X(e)&&X(r)?[...new Set([...e,...r])]:Ce(Object.create(null),mt(e),mt(r??{})):r}function kl(e,r){if(!e)return r;if(!r)return e;const n=Ce(Object.create(null),e);for(const a in r)n[a]=Be(e[a],r[a]);return n}function Xs(){return{app:null,config:{isNativeTag:Yi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _l=0;function El(e,r){return function(a,o=null){se(a)||(a=Ce({},a)),o!=null&&!xe(o)&&(o=null);const t=Xs(),s=new Set;let c=!1;const i=t.app={_uid:_l++,_component:a,_props:o,_container:null,_context:t,_instance:null,version:Ql,get config(){return t.config},set config(l){},use(l,...d){return s.has(l)||(l&&se(l.install)?(s.add(l),l.install(i,...d)):se(l)&&(s.add(l),l(i,...d))),i},mixin(l){return t.mixins.includes(l)||t.mixins.push(l),i},component(l,d){return d?(t.components[l]=d,i):t.components[l]},directive(l,d){return d?(t.directives[l]=d,i):t.directives[l]},mount(l,d,u){if(!c){const p=ne(a,o);return p.appContext=t,d&&r?r(p,l):e(p,l,u),c=!0,i._container=l,l.__vue_app__=i,Ia(p.component)||p.component.proxy}},unmount(){c&&(e(null,i._container),delete i._container.__vue_app__)},provide(l,d){return t.provides[l]=d,i},runWithContext(l){fa=i;try{return l()}finally{fa=null}}};return i}}let fa=null;function Gr(e,r){if(ze){let n=ze.provides;const a=ze.parent&&ze.parent.provides;a===n&&(n=ze.provides=Object.create(a)),n[e]=r}}function Ee(e,r,n=!1){const a=ze||Ne;if(a||fa){const o=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:fa._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&se(r)?r.call(a&&a.proxy):r}}function jl(e,r,n,a=!1){const o={},t={};la(t,Aa,1),e.propsDefaults=Object.create(null),Ks(e,r,o,t);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=a?o:zs(o):e.type.props?e.props=o:e.props=t,e.attrs=t}function Tl(e,r,n,a){const{props:o,attrs:t,vnode:{patchFlag:s}}=e,c=ge(o),[i]=e.propsOptions;let l=!1;if((a||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Ta(e.emitsOptions,p))continue;const f=r[p];if(i)if(me(t,p))f!==t[p]&&(t[p]=f,l=!0);else{const w=ur(p);o[w]=co(i,c,w,f,e,!1)}else f!==t[p]&&(t[p]=f,l=!0)}}}else{Ks(e,r,o,t)&&(l=!0);let d;for(const u in c)(!r||!me(r,u)&&((d=Yr(u))===u||!me(r,d)))&&(i?n&&(n[u]!==void 0||n[d]!==void 0)&&(o[u]=co(i,c,u,void 0,e,!0)):delete o[u]);if(t!==c)for(const u in t)(!r||!me(r,u))&&(delete t[u],l=!0)}l&&vr(e,"set","$attrs")}function Ks(e,r,n,a){const[o,t]=e.propsOptions;let s=!1,c;if(r)for(let i in r){if(_n(i))continue;const l=r[i];let d;o&&me(o,d=ur(i))?!t||!t.includes(d)?n[d]=l:(c||(c={}))[d]=l:Ta(e.emitsOptions,i)||(!(i in a)||l!==a[i])&&(a[i]=l,s=!0)}if(t){const i=ge(n),l=c||qe;for(let d=0;d<t.length;d++){const u=t[d];n[u]=co(o,i,u,l[u],e,!me(l,u))}}return s}function co(e,r,n,a,o,t){const s=e[n];if(s!=null){const c=me(s,"default");if(c&&a===void 0){const i=s.default;if(s.type!==Function&&!s.skipFactory&&se(i)){const{propsDefaults:l}=o;n in l?a=l[n]:(un(o),a=l[n]=i.call(null,r),$r())}else a=i}s[0]&&(t&&!c?a=!1:s[1]&&(a===""||a===Yr(n))&&(a=!0))}return a}function Qs(e,r,n=!1){const a=r.propsCache,o=a.get(e);if(o)return o;const t=e.props,s={},c=[];let i=!1;if(!se(e)){const d=u=>{i=!0;const[p,f]=Qs(u,r,!0);Ce(s,p),f&&c.push(...f)};!n&&r.mixins.length&&r.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!t&&!i)return xe(e)&&a.set(e,an),an;if(X(t))for(let d=0;d<t.length;d++){const u=ur(t[d]);bt(u)&&(s[u]=qe)}else if(t)for(const d in t){const u=ur(d);if(bt(u)){const p=t[d],f=s[u]=X(p)||se(p)?{type:p}:Ce({},p);if(f){const w=wt(Boolean,f.type),S=wt(String,f.type);f[0]=w>-1,f[1]=S<0||w<S,(w>-1||me(f,"default"))&&c.push(u)}}}const l=[s,c];return xe(e)&&a.set(e,l),l}function bt(e){return e[0]!=="$"}function vt(e){const r=e&&e.toString().match(/^\s*(function|class) (\w+)/);return r?r[2]:e===null?"null":""}function yt(e,r){return vt(e)===vt(r)}function wt(e,r){return X(r)?r.findIndex(n=>yt(n,e)):se(r)&&yt(r,e)?0:-1}const ei=e=>e[0]==="_"||e==="$stable",Io=e=>X(e)?e.map(nr):[nr(e)],Cl=(e,r,n)=>{if(r._n)return r;const a=Oe((...o)=>Io(r(...o)),n);return a._c=!1,a},ri=(e,r,n)=>{const a=e._ctx;for(const o in e){if(ei(o))continue;const t=e[o];if(se(t))r[o]=Cl(o,t,a);else if(t!=null){const s=Io(t);r[o]=()=>s}}},ni=(e,r)=>{const n=Io(r);e.slots.default=()=>n},zl=(e,r)=>{if(e.vnode.shapeFlag&32){const n=r._;n?(e.slots=ge(r),la(r,"_",n)):ri(r,e.slots={})}else e.slots={},r&&ni(e,r);la(e.slots,Aa,1)},Al=(e,r,n)=>{const{vnode:a,slots:o}=e;let t=!0,s=qe;if(a.shapeFlag&32){const c=r._;c?n&&c===1?t=!1:(Ce(o,r),!n&&c===1&&delete o._):(t=!r.$stable,ri(r,o)),s=r}else r&&(ni(e,r),s={default:1});if(t)for(const c in o)!ei(c)&&!(c in s)&&delete o[c]};function ba(e,r,n,a,o=!1){if(X(e)){e.forEach((p,f)=>ba(p,r&&(X(r)?r[f]:r),n,a,o));return}if(cn(a)&&!o)return;const t=a.shapeFlag&4?Ia(a.component)||a.component.proxy:a.el,s=o?null:t,{i:c,r:i}=e,l=r&&r.r,d=c.refs===qe?c.refs={}:c.refs,u=c.setupState;if(l!=null&&l!==i&&(be(l)?(d[l]=null,me(u,l)&&(u[l]=null)):Le(l)&&(l.value=null)),se(i))zr(i,c,12,[s,d]);else{const p=be(i),f=Le(i);if(p||f){const w=()=>{if(e.f){const S=p?me(u,i)?u[i]:d[i]:i.value;o?X(S)&&bo(S,t):X(S)?S.includes(t)||S.push(t):p?(d[i]=[t],me(u,i)&&(u[i]=d[i])):(i.value=[t],e.k&&(d[e.k]=i.value))}else p?(d[i]=s,me(u,i)&&(u[i]=s)):f&&(i.value=s,e.k&&(d[e.k]=s))};s?(w.id=-1,Ve(w,n)):w()}}}let kr=!1;const ea=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",ra=e=>e.nodeType===8;function Il(e){const{mt:r,p:n,o:{patchProp:a,createText:o,nextSibling:t,parentNode:s,remove:c,insert:i,createComment:l}}=e,d=(b,y)=>{if(!y.hasChildNodes()){n(null,b,y),pa(),y._vnode=b;return}kr=!1,u(y.firstChild,b,null,null,null),pa(),y._vnode=b,kr&&console.error("Hydration completed but contains mismatches.")},u=(b,y,T,j,V,K=!1)=>{const R=ra(b)&&b.data==="[",g=()=>S(b,y,T,j,V,R),{type:H,ref:D,shapeFlag:$,patchFlag:_}=y;let I=b.nodeType;y.el=b,_===-2&&(K=!1,y.dynamicChildren=null);let L=null;switch(H){case dn:I!==3?y.children===""?(i(y.el=o(""),s(b),b),L=b):L=g():(b.data!==y.children&&(kr=!0,b.data=y.children),L=t(b));break;case Ze:I!==8||R?L=g():L=t(b);break;case jn:if(R&&(b=t(b),I=b.nodeType),I===1||I===3){L=b;const ie=!y.children.length;for(let W=0;W<y.staticCount;W++)ie&&(y.children+=L.nodeType===1?L.outerHTML:L.data),W===y.staticCount-1&&(y.anchor=L),L=t(L);return R?t(L):L}else g();break;case Pe:R?L=w(b,y,T,j,V,K):L=g();break;default:if($&1)I!==1||y.type.toLowerCase()!==b.tagName.toLowerCase()?L=g():L=p(b,y,T,j,V,K);else if($&6){y.slotScopeIds=V;const ie=s(b);if(r(y,ie,null,T,j,ea(ie),K),L=R?q(b):t(b),L&&ra(L)&&L.data==="teleport end"&&(L=t(L)),cn(y)){let W;R?(W=ne(Pe),W.anchor=L?L.previousSibling:ie.lastChild):W=b.nodeType===3?Or(""):ne("div"),W.el=b,y.component.subTree=W}}else $&64?I!==8?L=g():L=y.type.hydrate(b,y,T,j,V,K,e,f):$&128&&(L=y.type.hydrate(b,y,T,j,ea(s(b)),V,K,e,u))}return D!=null&&ba(D,null,j,y),L},p=(b,y,T,j,V,K)=>{K=K||!!y.dynamicChildren;const{type:R,props:g,patchFlag:H,shapeFlag:D,dirs:$}=y,_=R==="input"&&$||R==="option";if(_||H!==-1){if($&&lr(y,null,T,"created"),g)if(_||!K||H&48)for(const L in g)(_&&L.endsWith("value")||Dn(L)&&!_n(L))&&a(b,L,null,g[L],!1,void 0,T);else g.onClick&&a(b,"onClick",null,g.onClick,!1,void 0,T);let I;if((I=g&&g.onVnodeBeforeMount)&&Ke(I,T,y),$&&lr(y,null,T,"beforeMount"),((I=g&&g.onVnodeMounted)||$)&&Bs(()=>{I&&Ke(I,T,y),$&&lr(y,null,T,"mounted")},j),D&16&&!(g&&(g.innerHTML||g.textContent))){let L=f(b.firstChild,y,b,T,j,V,K);for(;L;){kr=!0;const ie=L;L=L.nextSibling,c(ie)}}else D&8&&b.textContent!==y.children&&(kr=!0,b.textContent=y.children)}return b.nextSibling},f=(b,y,T,j,V,K,R)=>{R=R||!!y.dynamicChildren;const g=y.children,H=g.length;for(let D=0;D<H;D++){const $=R?g[D]:g[D]=nr(g[D]);if(b)b=u(b,$,j,V,K,R);else{if($.type===dn&&!$.children)continue;kr=!0,n(null,$,T,null,j,V,ea(T),K)}}return b},w=(b,y,T,j,V,K)=>{const{slotScopeIds:R}=y;R&&(V=V?V.concat(R):R);const g=s(b),H=f(t(b),y,g,T,j,V,K);return H&&ra(H)&&H.data==="]"?t(y.anchor=H):(kr=!0,i(y.anchor=l("]"),g,H),H)},S=(b,y,T,j,V,K)=>{if(kr=!0,y.el=null,K){const H=q(b);for(;;){const D=t(b);if(D&&D!==H)c(D);else break}}const R=t(b),g=s(b);return c(b),n(null,y,g,R,T,j,ea(g),V),R},q=b=>{let y=0;for(;b;)if(b=t(b),b&&ra(b)&&(b.data==="["&&y++,b.data==="]")){if(y===0)return t(b);y--}return b};return[d,u]}const Ve=Bs;function Ll(e){return Rl(e,Il)}function Rl(e,r){const n=Ka();n.__VUE__=!0;const{insert:a,remove:o,patchProp:t,createElement:s,createText:c,createComment:i,setText:l,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=tr,insertStaticContent:w}=e,S=(m,h,v,P=null,k=null,E=null,F=!1,A=null,N=!!h.dynamicChildren)=>{if(m===h)return;m&&!Hr(m,h)&&(P=x(m),De(m,k,E,!0),m=null),h.patchFlag===-2&&(N=!1,h.dynamicChildren=null);const{type:C,ref:Y,shapeFlag:J}=h;switch(C){case dn:q(m,h,v,P);break;case Ze:b(m,h,v,P);break;case jn:m==null&&y(h,v,P,F);break;case Pe:_(m,h,v,P,k,E,F,A,N);break;default:J&1?V(m,h,v,P,k,E,F,A,N):J&6?I(m,h,v,P,k,E,F,A,N):(J&64||J&128)&&C.process(m,h,v,P,k,E,F,A,N,O)}Y!=null&&k&&ba(Y,m&&m.ref,E,h||m,!h)},q=(m,h,v,P)=>{if(m==null)a(h.el=c(h.children),v,P);else{const k=h.el=m.el;h.children!==m.children&&l(k,h.children)}},b=(m,h,v,P)=>{m==null?a(h.el=i(h.children||""),v,P):h.el=m.el},y=(m,h,v,P)=>{[m.el,m.anchor]=w(m.children,h,v,P,m.el,m.anchor)},T=({el:m,anchor:h},v,P)=>{let k;for(;m&&m!==h;)k=p(m),a(m,v,P),m=k;a(h,v,P)},j=({el:m,anchor:h})=>{let v;for(;m&&m!==h;)v=p(m),o(m),m=v;o(h)},V=(m,h,v,P,k,E,F,A,N)=>{F=F||h.type==="svg",m==null?K(h,v,P,k,E,F,A,N):H(m,h,k,E,F,A,N)},K=(m,h,v,P,k,E,F,A)=>{let N,C;const{type:Y,props:J,shapeFlag:Z,transition:ae,dirs:ce}=m;if(N=m.el=s(m.type,E,J&&J.is,J),Z&8?d(N,m.children):Z&16&&g(m.children,N,null,P,k,E&&Y!=="foreignObject",F,A),ce&&lr(m,null,P,"created"),R(N,m,m.scopeId,F,P),J){for(const ye in J)ye!=="value"&&!_n(ye)&&t(N,ye,null,J[ye],E,m.children,P,k,Ie);"value"in J&&t(N,"value",null,J.value),(C=J.onVnodeBeforeMount)&&Ke(C,P,m)}ce&&lr(m,null,P,"beforeMount");const we=(!k||k&&!k.pendingBranch)&&ae&&!ae.persisted;we&&ae.beforeEnter(N),a(N,h,v),((C=J&&J.onVnodeMounted)||we||ce)&&Ve(()=>{C&&Ke(C,P,m),we&&ae.enter(N),ce&&lr(m,null,P,"mounted")},k)},R=(m,h,v,P,k)=>{if(v&&f(m,v),P)for(let E=0;E<P.length;E++)f(m,P[E]);if(k){let E=k.subTree;if(h===E){const F=k.vnode;R(m,F,F.scopeId,F.slotScopeIds,k.parent)}}},g=(m,h,v,P,k,E,F,A,N=0)=>{for(let C=N;C<m.length;C++){const Y=m[C]=A?jr(m[C]):nr(m[C]);S(null,Y,h,v,P,k,E,F,A)}},H=(m,h,v,P,k,E,F)=>{const A=h.el=m.el;let{patchFlag:N,dynamicChildren:C,dirs:Y}=h;N|=m.patchFlag&16;const J=m.props||qe,Z=h.props||qe;let ae;v&&Mr(v,!1),(ae=Z.onVnodeBeforeUpdate)&&Ke(ae,v,h,m),Y&&lr(h,m,v,"beforeUpdate"),v&&Mr(v,!0);const ce=k&&h.type!=="foreignObject";if(C?D(m.dynamicChildren,C,A,v,P,ce,E):F||te(m,h,A,null,v,P,ce,E,!1),N>0){if(N&16)$(A,h,J,Z,v,P,k);else if(N&2&&J.class!==Z.class&&t(A,"class",null,Z.class,k),N&4&&t(A,"style",J.style,Z.style,k),N&8){const we=h.dynamicProps;for(let ye=0;ye<we.length;ye++){const je=we[ye],rr=J[je],Kr=Z[je];(Kr!==rr||je==="value")&&t(A,je,rr,Kr,k,m.children,v,P,Ie)}}N&1&&m.children!==h.children&&d(A,h.children)}else!F&&C==null&&$(A,h,J,Z,v,P,k);((ae=Z.onVnodeUpdated)||Y)&&Ve(()=>{ae&&Ke(ae,v,h,m),Y&&lr(h,m,v,"updated")},P)},D=(m,h,v,P,k,E,F)=>{for(let A=0;A<h.length;A++){const N=m[A],C=h[A],Y=N.el&&(N.type===Pe||!Hr(N,C)||N.shapeFlag&70)?u(N.el):v;S(N,C,Y,null,P,k,E,F,!0)}},$=(m,h,v,P,k,E,F)=>{if(v!==P){if(v!==qe)for(const A in v)!_n(A)&&!(A in P)&&t(m,A,v[A],null,F,h.children,k,E,Ie);for(const A in P){if(_n(A))continue;const N=P[A],C=v[A];N!==C&&A!=="value"&&t(m,A,C,N,F,h.children,k,E,Ie)}"value"in P&&t(m,"value",v.value,P.value)}},_=(m,h,v,P,k,E,F,A,N)=>{const C=h.el=m?m.el:c(""),Y=h.anchor=m?m.anchor:c("");let{patchFlag:J,dynamicChildren:Z,slotScopeIds:ae}=h;ae&&(A=A?A.concat(ae):ae),m==null?(a(C,v,P),a(Y,v,P),g(h.children,v,Y,k,E,F,A,N)):J>0&&J&64&&Z&&m.dynamicChildren?(D(m.dynamicChildren,Z,v,k,E,F,A),(h.key!=null||k&&h===k.subTree)&&ai(m,h,!0)):te(m,h,v,Y,k,E,F,A,N)},I=(m,h,v,P,k,E,F,A,N)=>{h.slotScopeIds=A,m==null?h.shapeFlag&512?k.ctx.activate(h,v,P,F,N):L(h,v,P,k,E,F,N):ie(m,h,N)},L=(m,h,v,P,k,E,F)=>{const A=m.component=Wl(m,P,k);if(Wn(m)&&(A.ctx.renderer=O),Vl(A),A.asyncDep){if(k&&k.registerDep(A,W),!m.el){const N=A.subTree=ne(Ze);b(null,N,h,v)}return}W(A,m,h,v,k,E,F)},ie=(m,h,v)=>{const P=h.component=m.component;if(rl(m,h,v))if(P.asyncDep&&!P.asyncResolved){oe(P,h,v);return}else P.next=h,Yc(P.update),P.update();else h.el=m.el,P.vnode=h},W=(m,h,v,P,k,E,F)=>{const A=()=>{if(m.isMounted){let{next:Y,bu:J,u:Z,parent:ae,vnode:ce}=m,we=Y,ye;Mr(m,!1),Y?(Y.el=ce.el,oe(m,Y,F)):Y=ce,J&&Na(J),(ye=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ke(ye,ae,Y,ce),Mr(m,!0);const je=Ma(m),rr=m.subTree;m.subTree=je,S(rr,je,u(rr.el),x(rr),m,k,E),Y.el=je.el,we===null&&nl(m,je.el),Z&&Ve(Z,k),(ye=Y.props&&Y.props.onVnodeUpdated)&&Ve(()=>Ke(ye,ae,Y,ce),k)}else{let Y;const{el:J,props:Z}=h,{bm:ae,m:ce,parent:we}=m,ye=cn(h);if(Mr(m,!1),ae&&Na(ae),!ye&&(Y=Z&&Z.onVnodeBeforeMount)&&Ke(Y,we,h),Mr(m,!0),J&&de){const je=()=>{m.subTree=Ma(m),de(J,m.subTree,m,k,null)};ye?h.type.__asyncLoader().then(()=>!m.isUnmounted&&je()):je()}else{const je=m.subTree=Ma(m);S(null,je,v,P,m,k,E),h.el=je.el}if(ce&&Ve(ce,k),!ye&&(Y=Z&&Z.onVnodeMounted)){const je=h;Ve(()=>Ke(Y,we,je),k)}(h.shapeFlag&256||we&&cn(we.vnode)&&we.vnode.shapeFlag&256)&&m.a&&Ve(m.a,k),m.isMounted=!0,h=v=P=null}},N=m.effect=new So(A,()=>ja(C),m.scope),C=m.update=()=>N.run();C.id=m.uid,Mr(m,!0),C()},oe=(m,h,v)=>{h.component=m;const P=m.vnode.props;m.vnode=h,m.next=null,Tl(m,h.props,P,v),Al(m,h.children,v),gn(),lt(),fn()},te=(m,h,v,P,k,E,F,A,N=!1)=>{const C=m&&m.children,Y=m?m.shapeFlag:0,J=h.children,{patchFlag:Z,shapeFlag:ae}=h;if(Z>0){if(Z&128){Re(C,J,v,P,k,E,F,A,N);return}else if(Z&256){Me(C,J,v,P,k,E,F,A,N);return}}ae&8?(Y&16&&Ie(C,k,E),J!==C&&d(v,J)):Y&16?ae&16?Re(C,J,v,P,k,E,F,A,N):Ie(C,k,E,!0):(Y&8&&d(v,""),ae&16&&g(J,v,P,k,E,F,A,N))},Me=(m,h,v,P,k,E,F,A,N)=>{m=m||an,h=h||an;const C=m.length,Y=h.length,J=Math.min(C,Y);let Z;for(Z=0;Z<J;Z++){const ae=h[Z]=N?jr(h[Z]):nr(h[Z]);S(m[Z],ae,v,null,k,E,F,A,N)}C>Y?Ie(m,k,E,!0,!1,J):g(h,v,P,k,E,F,A,N,J)},Re=(m,h,v,P,k,E,F,A,N)=>{let C=0;const Y=h.length;let J=m.length-1,Z=Y-1;for(;C<=J&&C<=Z;){const ae=m[C],ce=h[C]=N?jr(h[C]):nr(h[C]);if(Hr(ae,ce))S(ae,ce,v,null,k,E,F,A,N);else break;C++}for(;C<=J&&C<=Z;){const ae=m[J],ce=h[Z]=N?jr(h[Z]):nr(h[Z]);if(Hr(ae,ce))S(ae,ce,v,null,k,E,F,A,N);else break;J--,Z--}if(C>J){if(C<=Z){const ae=Z+1,ce=ae<Y?h[ae].el:P;for(;C<=Z;)S(null,h[C]=N?jr(h[C]):nr(h[C]),v,ce,k,E,F,A,N),C++}}else if(C>Z)for(;C<=J;)De(m[C],k,E,!0),C++;else{const ae=C,ce=C,we=new Map;for(C=ce;C<=Z;C++){const $e=h[C]=N?jr(h[C]):nr(h[C]);$e.key!=null&&we.set($e.key,C)}let ye,je=0;const rr=Z-ce+1;let Kr=!1,Xo=0;const yn=new Array(rr);for(C=0;C<rr;C++)yn[C]=0;for(C=ae;C<=J;C++){const $e=m[C];if(je>=rr){De($e,k,E,!0);continue}let cr;if($e.key!=null)cr=we.get($e.key);else for(ye=ce;ye<=Z;ye++)if(yn[ye-ce]===0&&Hr($e,h[ye])){cr=ye;break}cr===void 0?De($e,k,E,!0):(yn[cr-ce]=C+1,cr>=Xo?Xo=cr:Kr=!0,S($e,h[cr],v,null,k,E,F,A,N),je++)}const Ko=Kr?Ol(yn):an;for(ye=Ko.length-1,C=rr-1;C>=0;C--){const $e=ce+C,cr=h[$e],Qo=$e+1<Y?h[$e+1].el:P;yn[C]===0?S(null,cr,v,Qo,k,E,F,A,N):Kr&&(ye<0||C!==Ko[ye]?We(cr,v,Qo,2):ye--)}}},We=(m,h,v,P,k=null)=>{const{el:E,type:F,transition:A,children:N,shapeFlag:C}=m;if(C&6){We(m.component.subTree,h,v,P);return}if(C&128){m.suspense.move(h,v,P);return}if(C&64){F.move(m,h,v,O);return}if(F===Pe){a(E,h,v);for(let J=0;J<N.length;J++)We(N[J],h,v,P);a(m.anchor,h,v);return}if(F===jn){T(m,h,v);return}if(P!==2&&C&1&&A)if(P===0)A.beforeEnter(E),a(E,h,v),Ve(()=>A.enter(E),k);else{const{leave:J,delayLeave:Z,afterLeave:ae}=A,ce=()=>a(E,h,v),we=()=>{J(E,()=>{ce(),ae&&ae()})};Z?Z(E,ce,we):we()}else a(E,h,v)},De=(m,h,v,P=!1,k=!1)=>{const{type:E,props:F,ref:A,children:N,dynamicChildren:C,shapeFlag:Y,patchFlag:J,dirs:Z}=m;if(A!=null&&ba(A,null,v,m,!0),Y&256){h.ctx.deactivate(m);return}const ae=Y&1&&Z,ce=!cn(m);let we;if(ce&&(we=F&&F.onVnodeBeforeUnmount)&&Ke(we,h,m),Y&6)ir(m.component,v,P);else{if(Y&128){m.suspense.unmount(v,P);return}ae&&lr(m,null,h,"beforeUnmount"),Y&64?m.type.remove(m,h,v,k,O,P):C&&(E!==Pe||J>0&&J&64)?Ie(C,h,v,!1,!0):(E===Pe&&J&384||!k&&Y&16)&&Ie(N,h,v),P&&Pr(m)}(ce&&(we=F&&F.onVnodeUnmounted)||ae)&&Ve(()=>{we&&Ke(we,h,m),ae&&lr(m,null,h,"unmounted")},v)},Pr=m=>{const{type:h,el:v,anchor:P,transition:k}=m;if(h===Pe){qr(v,P);return}if(h===jn){j(m);return}const E=()=>{o(v),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:F,delayLeave:A}=k,N=()=>F(v,E);A?A(m.el,E,N):N()}else E()},qr=(m,h)=>{let v;for(;m!==h;)v=p(m),o(m),m=v;o(h)},ir=(m,h,v)=>{const{bum:P,scope:k,update:E,subTree:F,um:A}=m;P&&Na(P),k.stop(),E&&(E.active=!1,De(F,m,h,v)),A&&Ve(A,h),Ve(()=>{m.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ie=(m,h,v,P=!1,k=!1,E=0)=>{for(let F=E;F<m.length;F++)De(m[F],h,v,P,k)},x=m=>m.shapeFlag&6?x(m.component.subTree):m.shapeFlag&128?m.suspense.next():p(m.anchor||m.el),U=(m,h,v)=>{m==null?h._vnode&&De(h._vnode,null,null,!0):S(h._vnode||null,m,h,null,null,null,v),lt(),pa(),h._vnode=m},O={p:S,um:De,m:We,r:Pr,mt:L,mc:g,pc:te,pbc:D,n:x,o:e};let G,de;return r&&([G,de]=r(O)),{render:U,hydrate:G,createApp:El(U,G)}}function Mr({effect:e,update:r},n){e.allowRecurse=r.allowRecurse=n}function ai(e,r,n=!1){const a=e.children,o=r.children;if(X(a)&&X(o))for(let t=0;t<a.length;t++){const s=a[t];let c=o[t];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[t]=jr(o[t]),c.el=s.el),n||ai(s,c)),c.type===dn&&(c.el=s.el)}}function Ol(e){const r=e.slice(),n=[0];let a,o,t,s,c;const i=e.length;for(a=0;a<i;a++){const l=e[a];if(l!==0){if(o=n[n.length-1],e[o]<l){r[a]=o,n.push(a);continue}for(t=0,s=n.length-1;t<s;)c=t+s>>1,e[n[c]]<l?t=c+1:s=c;l<e[n[t]]&&(t>0&&(r[a]=n[t-1]),n[t]=a)}}for(t=n.length,s=n[t-1];t-- >0;)n[t]=s,s=r[s];return n}const Nl=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),dn=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),jn=Symbol.for("v-stc"),Tn=[];let or=null;function B(e=!1){Tn.push(or=e?null:[])}function Ml(){Tn.pop(),or=Tn[Tn.length-1]||null}let On=1;function St(e){On+=e}function oi(e){return e.dynamicChildren=On>0?or||an:null,Ml(),On>0&&or&&or.push(e),e}function Q(e,r,n,a,o,t){return oi(he(e,r,n,a,o,t,!0))}function Te(e,r,n,a,o){return oi(ne(e,r,n,a,o,!0))}function va(e){return e?e.__v_isVNode===!0:!1}function Hr(e,r){return e.type===r.type&&e.key===r.key}const Aa="__vInternal",ti=({key:e})=>e??null,ia=({ref:e,ref_key:r,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||Le(e)||se(e)?{i:Ne,r:e,k:r,f:!!n}:e:null);function he(e,r=null,n=null,a=0,o=null,t=e===Pe?0:1,s=!1,c=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:r,key:r&&ti(r),ref:r&&ia(r),scopeId:Fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ne};return c?(Lo(i,n),t&128&&e.normalize(i)):n&&(i.shapeFlag|=be(n)?8:16),On>0&&!s&&or&&(i.patchFlag>0||t&6)&&i.patchFlag!==32&&or.push(i),i}const ne=Dl;function Dl(e,r=null,n=null,a=0,o=null,t=!1){if((!e||e===vl)&&(e=Ze),va(e)){const c=Rr(e,r,!0);return n&&Lo(c,n),On>0&&!t&&or&&(c.shapeFlag&6?or[or.indexOf(e)]=c:or.push(c)),c.patchFlag|=-2,c}if(Zl(e)&&(e=e.__vccOpts),r){r=Fl(r);let{class:c,style:i}=r;c&&!be(c)&&(r.class=Je(c)),xe(i)&&(As(i)&&!X(i)&&(i=Ce({},i)),r.style=Fn(i))}const s=be(e)?1:al(e)?128:Nl(e)?64:xe(e)?4:se(e)?2:0;return he(e,r,n,a,o,s,t,!0)}function Fl(e){return e?As(e)||Aa in e?Ce({},e):e:null}function Rr(e,r,n=!1){const{props:a,ref:o,patchFlag:t,children:s}=e,c=r?lo(a||{},r):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ti(c),ref:r&&r.ref?n&&o?X(o)?o.concat(ia(r)):[o,ia(r)]:ia(r):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:r&&e.type!==Pe?t===-1?16:t|16:t,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rr(e.ssContent),ssFallback:e.ssFallback&&Rr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Or(e=" ",r=0){return ne(dn,null,e,r)}function Bl(e,r){const n=ne(jn,null,e);return n.staticCount=r,n}function _e(e="",r=!1){return r?(B(),Te(Ze,null,e)):ne(Ze,null,e)}function nr(e){return e==null||typeof e=="boolean"?ne(Ze):X(e)?ne(Pe,null,e.slice()):typeof e=="object"?jr(e):ne(dn,null,String(e))}function jr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rr(e)}function Lo(e,r){let n=0;const{shapeFlag:a}=e;if(r==null)r=null;else if(X(r))n=16;else if(typeof r=="object")if(a&65){const o=r.default;o&&(o._c&&(o._d=!1),Lo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=r._;!o&&!(Aa in r)?r._ctx=Ne:o===3&&Ne&&(Ne.slots._===1?r._=1:(r._=2,e.patchFlag|=1024))}else se(r)?(r={default:r,_ctx:Ne},n=32):(r=String(r),a&64?(n=16,r=[Or(r)]):n=8);e.children=r,e.shapeFlag|=n}function lo(...e){const r={};for(let n=0;n<e.length;n++){const a=e[n];for(const o in a)if(o==="class")r.class!==a.class&&(r.class=Je([r.class,a.class]));else if(o==="style")r.style=Fn([r.style,a.style]);else if(Dn(o)){const t=r[o],s=a[o];s&&t!==s&&!(X(t)&&t.includes(s))&&(r[o]=t?[].concat(t,s):s)}else o!==""&&(r[o]=a[o])}return r}function Ke(e,r,n,a=null){Qe(e,r,7,[n,a])}const Ul=Xs();let Hl=0;function Wl(e,r,n){const a=e.type,o=(r?r.appContext:e.appContext)||Ul,t={uid:Hl++,vnode:e,type:a,parent:r,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:r?r.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qs(a,o),emitsOptions:Ds(a,o),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:a.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=r?r.root:t,t.emit=Kc.bind(null,t),e.ce&&e.ce(t),t}let ze=null;const Ro=()=>ze||Ne;let Oo,Qr,Pt="__VUE_INSTANCE_SETTERS__";(Qr=Ka()[Pt])||(Qr=Ka()[Pt]=[]),Qr.push(e=>ze=e),Oo=e=>{Qr.length>1?Qr.forEach(r=>r(e)):Qr[0](e)};const un=e=>{Oo(e),e.scope.on()},$r=()=>{ze&&ze.scope.off(),Oo(null)};function si(e){return e.vnode.shapeFlag&4}let pn=!1;function Vl(e,r=!1){pn=r;const{props:n,children:a}=e.vnode,o=si(e);jl(e,n,o,r),zl(e,a);const t=o?Jl(e,r):void 0;return pn=!1,t}function Jl(e,r){const n=e.type;e.accessCache=Object.create(null),e.proxy=Is(new Proxy(e.ctx,wl));const{setup:a}=n;if(a){const o=e.setupContext=a.length>1?$l(e):null;un(e),gn();const t=zr(a,e,0,[e.props,o]);if(fn(),$r(),gs(t)){if(t.then($r,$r),r)return t.then(s=>{qt(e,s,r)}).catch(s=>{Un(s,e,0)});e.asyncDep=t}else qt(e,t,r)}else ii(e,r)}function qt(e,r,n){se(r)?e.type.__ssrInlineRender?e.ssrRender=r:e.render=r:xe(r)&&(e.setupState=Rs(r)),ii(e,n)}let xt;function ii(e,r,n){const a=e.type;if(!e.render){if(!r&&xt&&!a.render){const o=a.template||Ao(e).template;if(o){const{isCustomElement:t,compilerOptions:s}=e.appContext.config,{delimiters:c,compilerOptions:i}=a,l=Ce(Ce({isCustomElement:t,delimiters:c},s),i);a.render=xt(o,l)}}e.render=a.render||tr}un(e),gn(),Sl(e),fn(),$r()}function Gl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(r,n){return Ge(e,"get","$attrs"),r[n]}}))}function $l(e){const r=n=>{e.exposed=n||{}};return{get attrs(){return Gl(e)},slots:e.slots,emit:e.emit,expose:r}}function Ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rs(Is(e.exposed)),{get(r,n){if(n in r)return r[n];if(n in En)return En[n](e)},has(r,n){return n in r||n in En}}))}function Yl(e,r=!0){return se(e)?e.displayName||e.name:e.name||r&&e.__name}function Zl(e){return se(e)&&"__vccOpts"in e}const M=(e,r)=>Jc(e,r,pn);function le(e,r,n){const a=arguments.length;return a===2?xe(r)&&!X(r)?va(r)?ne(e,null,[r]):ne(e,r):ne(e,null,r):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&va(n)&&(n=[n]),ne(e,r,n))}const Xl=Symbol.for("v-scx"),Kl=()=>Ee(Xl),Ql="3.3.4",ed="http://www.w3.org/2000/svg",Wr=typeof document<"u"?document:null,kt=Wr&&Wr.createElement("template"),rd={insert:(e,r,n)=>{r.insertBefore(e,n||null)},remove:e=>{const r=e.parentNode;r&&r.removeChild(e)},createElement:(e,r,n,a)=>{const o=r?Wr.createElementNS(ed,e):Wr.createElement(e,n?{is:n}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>Wr.createTextNode(e),createComment:e=>Wr.createComment(e),setText:(e,r)=>{e.nodeValue=r},setElementText:(e,r)=>{e.textContent=r},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wr.querySelector(e),setScopeId(e,r){e.setAttribute(r,"")},insertStaticContent(e,r,n,a,o,t){const s=n?n.previousSibling:r.lastChild;if(o&&(o===t||o.nextSibling))for(;r.insertBefore(o.cloneNode(!0),n),!(o===t||!(o=o.nextSibling)););else{kt.innerHTML=a?`<svg>${e}</svg>`:e;const c=kt.content;if(a){const i=c.firstChild;for(;i.firstChild;)c.appendChild(i.firstChild);c.removeChild(i)}r.insertBefore(c,n)}return[s?s.nextSibling:r.firstChild,n?n.previousSibling:r.lastChild]}};function nd(e,r,n){const a=e._vtc;a&&(r=(r?[r,...a]:[...a]).join(" ")),r==null?e.removeAttribute("class"):n?e.setAttribute("class",r):e.className=r}function ad(e,r,n){const a=e.style,o=be(n);if(n&&!o){if(r&&!be(r))for(const t in r)n[t]==null&&uo(a,t,"");for(const t in n)uo(a,t,n[t])}else{const t=a.display;o?r!==n&&(a.cssText=n):r&&e.removeAttribute("style"),"_vod"in e&&(a.display=t)}}const _t=/\s*!important$/;function uo(e,r,n){if(X(n))n.forEach(a=>uo(e,r,a));else if(n==null&&(n=""),r.startsWith("--"))e.setProperty(r,n);else{const a=od(e,r);_t.test(n)?e.setProperty(Yr(a),n.replace(_t,""),"important"):e[a]=n}}const Et=["Webkit","Moz","ms"],Ua={};function od(e,r){const n=Ua[r];if(n)return n;let a=ur(r);if(a!=="filter"&&a in e)return Ua[r]=a;a=ka(a);for(let o=0;o<Et.length;o++){const t=Et[o]+a;if(t in e)return Ua[r]=t}return r}const jt="http://www.w3.org/1999/xlink";function td(e,r,n,a,o){if(a&&r.startsWith("xlink:"))n==null?e.removeAttributeNS(jt,r.slice(6,r.length)):e.setAttributeNS(jt,r,n);else{const t=cc(r);n==null||t&&!vs(n)?e.removeAttribute(r):e.setAttribute(r,t?"":n)}}function sd(e,r,n,a,o,t,s){if(r==="innerHTML"||r==="textContent"){a&&s(a,o,t),e[r]=n??"";return}const c=e.tagName;if(r==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,d=n??"";l!==d&&(e.value=d),n==null&&e.removeAttribute(r);return}let i=!1;if(n===""||n==null){const l=typeof e[r];l==="boolean"?n=vs(n):n==null&&l==="string"?(n="",i=!0):l==="number"&&(n=0,i=!0)}try{e[r]=n}catch{}i&&e.removeAttribute(r)}function id(e,r,n,a){e.addEventListener(r,n,a)}function cd(e,r,n,a){e.removeEventListener(r,n,a)}function ld(e,r,n,a,o=null){const t=e._vei||(e._vei={}),s=t[r];if(a&&s)s.value=a;else{const[c,i]=dd(r);if(a){const l=t[r]=md(a,o);id(e,c,l,i)}else s&&(cd(e,c,s,i),t[r]=void 0)}}const Tt=/(?:Once|Passive|Capture)$/;function dd(e){let r;if(Tt.test(e)){r={};let a;for(;a=e.match(Tt);)e=e.slice(0,e.length-a[0].length),r[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yr(e.slice(2)),r]}let Ha=0;const ud=Promise.resolve(),pd=()=>Ha||(ud.then(()=>Ha=0),Ha=Date.now());function md(e,r){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;Qe(hd(a,n.value),r,5,[a])};return n.value=e,n.attached=pd(),n}function hd(e,r){if(X(r)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},r.map(a=>o=>!o._stopped&&a&&a(o))}else return r}const Ct=/^on[a-z]/,gd=(e,r,n,a,o=!1,t,s,c,i)=>{r==="class"?nd(e,a,o):r==="style"?ad(e,n,a):Dn(r)?fo(r)||ld(e,r,n,a,s):(r[0]==="."?(r=r.slice(1),!0):r[0]==="^"?(r=r.slice(1),!1):fd(e,r,a,o))?sd(e,r,a,t,s,c,i):(r==="true-value"?e._trueValue=a:r==="false-value"&&(e._falseValue=a),td(e,r,a,o))};function fd(e,r,n,a){return a?!!(r==="innerHTML"||r==="textContent"||r in e&&Ct.test(r)&&se(n)):r==="spellcheck"||r==="draggable"||r==="translate"||r==="form"||r==="list"&&e.tagName==="INPUT"||r==="type"&&e.tagName==="TEXTAREA"||Ct.test(r)&&be(n)?!1:r in e}const _r="transition",wn="animation",Jn=(e,{slots:r})=>le(il,bd(e),r);Jn.displayName="Transition";const ci={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jn.props=Ce({},Ws,ci);const Dr=(e,r=[])=>{X(e)?e.forEach(n=>n(...r)):e&&e(...r)},zt=e=>e?X(e)?e.some(r=>r.length>1):e.length>1:!1;function bd(e){const r={};for(const _ in e)_ in ci||(r[_]=e[_]);if(e.css===!1)return r;const{name:n="v",type:a,duration:o,enterFromClass:t=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:i=t,appearActiveClass:l=s,appearToClass:d=c,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,w=vd(o),S=w&&w[0],q=w&&w[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:T,onLeave:j,onLeaveCancelled:V,onBeforeAppear:K=b,onAppear:R=y,onAppearCancelled:g=T}=r,H=(_,I,L)=>{Fr(_,I?d:c),Fr(_,I?l:s),L&&L()},D=(_,I)=>{_._isLeaving=!1,Fr(_,u),Fr(_,f),Fr(_,p),I&&I()},$=_=>(I,L)=>{const ie=_?R:y,W=()=>H(I,_,L);Dr(ie,[I,W]),At(()=>{Fr(I,_?i:t),Er(I,_?d:c),zt(ie)||It(I,a,S,W)})};return Ce(r,{onBeforeEnter(_){Dr(b,[_]),Er(_,t),Er(_,s)},onBeforeAppear(_){Dr(K,[_]),Er(_,i),Er(_,l)},onEnter:$(!1),onAppear:$(!0),onLeave(_,I){_._isLeaving=!0;const L=()=>D(_,I);Er(_,u),Sd(),Er(_,p),At(()=>{_._isLeaving&&(Fr(_,u),Er(_,f),zt(j)||It(_,a,q,L))}),Dr(j,[_,L])},onEnterCancelled(_){H(_,!1),Dr(T,[_])},onAppearCancelled(_){H(_,!0),Dr(g,[_])},onLeaveCancelled(_){D(_),Dr(V,[_])}})}function vd(e){if(e==null)return null;if(xe(e))return[Wa(e.enter),Wa(e.leave)];{const r=Wa(e);return[r,r]}}function Wa(e){return nc(e)}function Er(e,r){r.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(r)}function Fr(e,r){r.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const{_vtc:n}=e;n&&(n.delete(r),n.size||(e._vtc=void 0))}function At(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let yd=0;function It(e,r,n,a){const o=e._endId=++yd,t=()=>{o===e._endId&&a()};if(n)return setTimeout(t,n);const{type:s,timeout:c,propCount:i}=wd(e,r);if(!s)return a();const l=s+"end";let d=0;const u=()=>{e.removeEventListener(l,p),t()},p=f=>{f.target===e&&++d>=i&&u()};setTimeout(()=>{d<i&&u()},c+1),e.addEventListener(l,p)}function wd(e,r){const n=window.getComputedStyle(e),a=w=>(n[w]||"").split(", "),o=a(`${_r}Delay`),t=a(`${_r}Duration`),s=Lt(o,t),c=a(`${wn}Delay`),i=a(`${wn}Duration`),l=Lt(c,i);let d=null,u=0,p=0;r===_r?s>0&&(d=_r,u=s,p=t.length):r===wn?l>0&&(d=wn,u=l,p=i.length):(u=Math.max(s,l),d=u>0?s>l?_r:wn:null,p=d?d===_r?t.length:i.length:0);const f=d===_r&&/\b(transform|all)(,|$)/.test(a(`${_r}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Lt(e,r){for(;e.length<r.length;)e=e.concat(e);return Math.max(...r.map((n,a)=>Rt(n)+Rt(e[a])))}function Rt(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Sd(){return document.body.offsetHeight}const Pd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qd=(e,r)=>n=>{if(!("key"in n))return;const a=Yr(n.key);if(r.some(o=>o===a||Pd[o]===a))return e(n)},ya={beforeMount(e,{value:r},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&r?n.beforeEnter(e):Sn(e,r)},mounted(e,{value:r},{transition:n}){n&&r&&n.enter(e)},updated(e,{value:r,oldValue:n},{transition:a}){!r!=!n&&(a?r?(a.beforeEnter(e),Sn(e,!0),a.enter(e)):a.leave(e,()=>{Sn(e,!1)}):Sn(e,r))},beforeUnmount(e,{value:r}){Sn(e,r)}};function Sn(e,r){e.style.display=r?e._vod:"none"}const xd=Ce({patchProp:gd},rd);let Va,Ot=!1;function kd(){return Va=Ot?Va:Ll(xd),Ot=!0,Va}const _d=(...e)=>{const r=kd().createApp(...e),{mount:n}=r;return r.mount=a=>{const o=Ed(a);if(o)return n(o,!0,o instanceof SVGElement)},r};function Ed(e){return be(e)?document.querySelector(e):e}const jd={"v-56dd2a2a":()=>z(()=>import("./InstallationNotes.html-4b28d84d.js"),[]).then(({data:e})=>e),"v-8daa1a0e":()=>z(()=>import("./index.html-15c66cef.js"),[]).then(({data:e})=>e),"v-2d0a7df8":()=>z(()=>import("./index.html-dd5e9d8e.js"),[]).then(({data:e})=>e),"v-2d0a870d":()=>z(()=>import("./index.html-6d68f848.js"),[]).then(({data:e})=>e),"v-2d0a87a8":()=>z(()=>import("./index.html-e6b54d7d.js"),[]).then(({data:e})=>e),"v-724914a8":()=>z(()=>import("./a UnderstandingETandPT.html-24c0fca4.js"),[]).then(({data:e})=>e),"v-88f7c0c8":()=>z(()=>import("./b Pentesting methodologies.html-c452329c.js"),[]).then(({data:e})=>e),"v-bd71d732":()=>z(()=>import("./index.html-68f0de1a.js"),[]).then(({data:e})=>e),"v-f39b1880":()=>z(()=>import("./concurrency.html-c0fe19eb.js"),[]).then(({data:e})=>e),"v-3568b29a":()=>z(()=>import("./index.html-f5e65fb4.js"),[]).then(({data:e})=>e),"v-4d403dc3":()=>z(()=>import("./operatingsystem.html-13f637f4.js"),[]).then(({data:e})=>e),"v-62d86b64":()=>z(()=>import("./process.html-ab2e808f.js"),[]).then(({data:e})=>e),"v-02f7a31f":()=>z(()=>import("./curl_annex.html-8d6130cb.js"),[]).then(({data:e})=>e),"v-3568b2b9":()=>z(()=>import("./index.html-37f94e3a.js"),[]).then(({data:e})=>e),"v-0b12bee5":()=>z(()=>import("./iostreams.html-fe122d84.js"),[]).then(({data:e})=>e),"v-69cbc2b4":()=>z(()=>import("./processbuilder.html-6745db8f.js"),[]).then(({data:e})=>e),"v-4144fd3a":()=>z(()=>import("./runtime.html-5aaab033.js"),[]).then(({data:e})=>e),"v-45db6c9a":()=>z(()=>import("./a UnderstandingETandPT.html-87e90447.js"),[]).then(({data:e})=>e),"v-1bb62067":()=>z(()=>import("./b Pentesting methodologies.html-8f6dd921.js"),[]).then(({data:e})=>e),"v-3804537c":()=>z(()=>import("./index.html-a710aefc.js"),[]).then(({data:e})=>e),"v-5aa74f15":()=>z(()=>import("./concurrency.html-670f8d5c.js"),[]).then(({data:e})=>e),"v-b73e5022":()=>z(()=>import("./index.html-1dd5115a.js"),[]).then(({data:e})=>e),"v-4b0532d0":()=>z(()=>import("./operatingsystem.html-8e9128da.js"),[]).then(({data:e})=>e),"v-3f423939":()=>z(()=>import("./process.html-4e275607.js"),[]).then(({data:e})=>e),"v-8100edac":()=>z(()=>import("./curl_annex.html-4842f5a7.js"),[]).then(({data:e})=>e),"v-b73e4fe4":()=>z(()=>import("./index.html-33127a01.js"),[]).then(({data:e})=>e),"v-74406b7a":()=>z(()=>import("./iostreams.html-9484cef5.js"),[]).then(({data:e})=>e),"v-348bab3f":()=>z(()=>import("./processbuilder.html-56f4ce13.js"),[]).then(({data:e})=>e),"v-1daecb0f":()=>z(()=>import("./runtime.html-91bbd2d9.js"),[]).then(({data:e})=>e),"v-287508f8":()=>z(()=>import("./a UnderstandingETandPT.html-47185804.js"),[]).then(({data:e})=>e),"v-4448d028":()=>z(()=>import("./b Pentesting methodologies.html-4722f343.js"),[]).then(({data:e})=>e),"v-0eddbe17":()=>z(()=>import("./index.html-6f7211ca.js"),[]).then(({data:e})=>e),"v-46af1970":()=>z(()=>import("./concurrency.html-86ce093c.js"),[]).then(({data:e})=>e),"v-a8728f6c":()=>z(()=>import("./index.html-0f29a414.js"),[]).then(({data:e})=>e),"v-e2dae91a":()=>z(()=>import("./operatingsystem.html-d832cb7d.js"),[]).then(({data:e})=>e),"v-75292dd8":()=>z(()=>import("./process.html-e371f778.js"),[]).then(({data:e})=>e),"v-3277876f":()=>z(()=>import("./curl_annex.html-4477b510.js"),[]).then(({data:e})=>e),"v-a8728f2e":()=>z(()=>import("./index.html-feca8f29.js"),[]).then(({data:e})=>e),"v-14dd1095":()=>z(()=>import("./iostreams.html-10a7d348.js"),[]).then(({data:e})=>e),"v-5320ff04":()=>z(()=>import("./processbuilder.html-6136c6c0.js"),[]).then(({data:e})=>e),"v-b8500a2c":()=>z(()=>import("./runtime.html-e2f0f66c.js"),[]).then(({data:e})=>e),"v-3706649a":()=>z(()=>import("./404.html-4b05ea4a.js"),[]).then(({data:e})=>e)},Td=JSON.parse('{"base":"/apuntes/","lang":"ca-ES","title":"SAD","description":"SAD, CFGS ASIR, FP, Seguridad, Alta disponibilidad, Hacking, Análisis Forense, Bastionado Redes, IES Doctor Balmis","head":[["meta",{"name":"theme-color","content":"#3eaf7c"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["link",{"rel":"icon","href":"/apuntes/sad_favicon.png"}]],"locales":{"/ca/":{"lang":"ca-ES","title":"Seguretat i Alta Disponibilitat","description":"Módul SAD 2n ASIX"},"/es/":{"lang":"es-ES","title":"Seguridad y Alta Disponibilidad","description":"Módulo SAD de 2º ASIR"},"/en/":{"lang":"en-US","title":"Security & High Availability","description":"SAD 2nd ASIR module"}}}');var Cd=([e,r,n])=>e==="meta"&&r.name?`${e}.${r.name}`:["title","base"].includes(e)?e:e==="template"&&r.id?`${e}.${r.id}`:JSON.stringify([e,r,n]),zd=e=>{const r=new Set,n=[];return e.forEach(a=>{const o=Cd(a);r.has(o)||(r.add(o),n.push(a))}),n},Gn=e=>/^(https?:)?\/\//.test(e),Ad=e=>/^mailto:/.test(e),Id=e=>/^tel:/.test(e),No=e=>Object.prototype.toString.call(e)==="[object Object]",li=e=>e[e.length-1]==="/"?e.slice(0,-1):e,di=e=>e[0]==="/"?e.slice(1):e,ui=(e,r)=>{const n=Object.keys(e).sort((a,o)=>{const t=o.split("/").length-a.split("/").length;return t!==0?t:o.length-a.length});for(const a of n)if(r.startsWith(a))return a;return"/"};const pi={"v-56dd2a2a":re(()=>z(()=>import("./InstallationNotes.html-5218efe5.js"),[])),"v-8daa1a0e":re(()=>z(()=>import("./index.html-fc02758c.js"),[])),"v-2d0a7df8":re(()=>z(()=>import("./index.html-689a2211.js"),[])),"v-2d0a870d":re(()=>z(()=>import("./index.html-4c647ddc.js"),[])),"v-2d0a87a8":re(()=>z(()=>import("./index.html-b7a483c0.js"),[])),"v-724914a8":re(()=>z(()=>import("./a UnderstandingETandPT.html-c4501741.js"),[])),"v-88f7c0c8":re(()=>z(()=>import("./b Pentesting methodologies.html-0f7795c0.js"),[])),"v-bd71d732":re(()=>z(()=>import("./index.html-8b56ffaf.js"),[])),"v-f39b1880":re(()=>z(()=>import("./concurrency.html-07bebcf2.js"),["assets/concurrency.html-07bebcf2.js","assets/gantt_parallel-cc549e79.js"])),"v-3568b29a":re(()=>z(()=>import("./index.html-d5474dcb.js"),[])),"v-4d403dc3":re(()=>z(()=>import("./operatingsystem.html-2af50d8b.js"),["assets/operatingsystem.html-2af50d8b.js","assets/roundrobin-3-400fdffd.js"])),"v-62d86b64":re(()=>z(()=>import("./process.html-899f1904.js"),["assets/process.html-899f1904.js","assets/threads_vs_process-5db8950b.js"])),"v-02f7a31f":re(()=>z(()=>import("./curl_annex.html-7b16fccf.js"),[])),"v-3568b2b9":re(()=>z(()=>import("./index.html-15afe8fe.js"),[])),"v-0b12bee5":re(()=>z(()=>import("./iostreams.html-139a08d5.js"),["assets/iostreams.html-139a08d5.js","assets/Java_Stream_Readers_BufferedReaders-a4e1bc0d.js"])),"v-69cbc2b4":re(()=>z(()=>import("./processbuilder.html-af805bb9.js"),["assets/processbuilder.html-af805bb9.js","assets/comandotree-ef7769e5.js"])),"v-4144fd3a":re(()=>z(()=>import("./runtime.html-969ca397.js"),[])),"v-45db6c9a":re(()=>z(()=>import("./a UnderstandingETandPT.html-8b642a0c.js"),[])),"v-1bb62067":re(()=>z(()=>import("./b Pentesting methodologies.html-9d641f27.js"),[])),"v-3804537c":re(()=>z(()=>import("./index.html-ed3aee6b.js"),[])),"v-5aa74f15":re(()=>z(()=>import("./concurrency.html-48259668.js"),["assets/concurrency.html-48259668.js","assets/gantt_parallel-cc549e79.js"])),"v-b73e5022":re(()=>z(()=>import("./index.html-b1cf3207.js"),[])),"v-4b0532d0":re(()=>z(()=>import("./operatingsystem.html-d6e8ea6e.js"),["assets/operatingsystem.html-d6e8ea6e.js","assets/roundrobin-3-400fdffd.js","assets/rendimiento-79519059.js"])),"v-3f423939":re(()=>z(()=>import("./process.html-62ed6c97.js"),["assets/process.html-62ed6c97.js","assets/threads_vs_process-5db8950b.js"])),"v-8100edac":re(()=>z(()=>import("./curl_annex.html-b0173449.js"),[])),"v-b73e4fe4":re(()=>z(()=>import("./index.html-25cae7ff.js"),[])),"v-74406b7a":re(()=>z(()=>import("./iostreams.html-4562dc45.js"),["assets/iostreams.html-4562dc45.js","assets/Java_Stream_Readers_BufferedReaders-a4e1bc0d.js"])),"v-348bab3f":re(()=>z(()=>import("./processbuilder.html-93ecc055.js"),["assets/processbuilder.html-93ecc055.js","assets/comandotree-ef7769e5.js"])),"v-1daecb0f":re(()=>z(()=>import("./runtime.html-c14d55cc.js"),[])),"v-287508f8":re(()=>z(()=>import("./a UnderstandingETandPT.html-a400a838.js"),[])),"v-4448d028":re(()=>z(()=>import("./b Pentesting methodologies.html-782df0ac.js"),[])),"v-0eddbe17":re(()=>z(()=>import("./index.html-e0329f96.js"),[])),"v-46af1970":re(()=>z(()=>import("./concurrency.html-31b50dc2.js"),["assets/concurrency.html-31b50dc2.js","assets/gantt_parallel-cc549e79.js"])),"v-a8728f6c":re(()=>z(()=>import("./index.html-295b139d.js"),[])),"v-e2dae91a":re(()=>z(()=>import("./operatingsystem.html-4f7d89bf.js"),["assets/operatingsystem.html-4f7d89bf.js","assets/roundrobin-3-400fdffd.js","assets/rendimiento-79519059.js"])),"v-75292dd8":re(()=>z(()=>import("./process.html-d5559f28.js"),["assets/process.html-d5559f28.js","assets/threads_vs_process-5db8950b.js"])),"v-3277876f":re(()=>z(()=>import("./curl_annex.html-1b2665ef.js"),[])),"v-a8728f2e":re(()=>z(()=>import("./index.html-c31733c3.js"),[])),"v-14dd1095":re(()=>z(()=>import("./iostreams.html-b3af11f1.js"),["assets/iostreams.html-b3af11f1.js","assets/Java_Stream_Readers_BufferedReaders-a4e1bc0d.js"])),"v-5320ff04":re(()=>z(()=>import("./processbuilder.html-74158d66.js"),["assets/processbuilder.html-74158d66.js","assets/comandotree-ef7769e5.js"])),"v-b8500a2c":re(()=>z(()=>import("./runtime.html-76b10ca2.js"),[])),"v-3706649a":re(()=>z(()=>import("./404.html-c569cd76.js"),[]))};var Ld=Symbol(""),mi=Symbol(""),Rd=bn({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Ar=()=>{const e=Ee(mi);if(!e)throw new Error("pageData() is called without provider.");return e},hi=Symbol(""),fr=()=>{const e=Ee(hi);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},gi=Symbol(""),Od=()=>{const e=Ee(gi);if(!e)throw new Error("usePageHead() is called without provider.");return e},Nd=Symbol(""),fi=Symbol(""),Md=()=>{const e=Ee(fi);if(!e)throw new Error("usePageLang() is called without provider.");return e},bi=Symbol(""),Dd=()=>{const e=Ee(bi);if(!e)throw new Error("usePageLayout() is called without provider.");return e},Fd=fe(jd),Mo=Symbol(""),vn=()=>{const e=Ee(Mo);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},nn=fe(Td),vi=()=>nn,yi=Symbol(""),Do=()=>{const e=Ee(yi);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Bd=Symbol(""),Ud="Layout",Hd="NotFound",mr=Bn({resolveLayouts:e=>e.reduce((r,n)=>({...r,...n.layouts}),{}),resolvePageData:async e=>{const r=Fd.value[e];return await(r==null?void 0:r())??Rd},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,r,n)=>{const a=be(r.description)?r.description:n.description,o=[...X(r.head)?r.head:[],...n.head,["title",{},e],["meta",{name:"description",content:a}]];return zd(o)},resolvePageHeadTitle:(e,r)=>[e.title,r.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,r)=>e.lang||r.lang||"en-US",resolvePageLayout:(e,r)=>{let n;if(e.path){const a=e.frontmatter.layout;be(a)?n=a:n=Ud}else n=Hd;return r[n]},resolveRouteLocale:(e,r)=>ui(e,r),resolveSiteLocaleData:(e,r)=>({...e,...e.locales[r]})}),Fo=ue({name:"ClientOnly",setup(e,r){const n=fe(!1);return He(()=>{n.value=!0}),()=>{var a,o;return n.value?(o=(a=r.slots).default)==null?void 0:o.call(a):null}}}),Wd=ue({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const r=Ar(),n=M(()=>pi[e.pageKey||r.value.key]);return()=>n.value?le(n.value):le("div","404 Not Found")}}),Sr=(e={})=>e,Bo=e=>Gn(e)?e:`/apuntes/${di(e)}`;function wi(e,r,n){var a,o,t;r===void 0&&(r=50),n===void 0&&(n={});var s=(a=n.isImmediate)!=null&&a,c=(o=n.callback)!=null&&o,i=n.maxWait,l=Date.now(),d=[];function u(){if(i!==void 0){var f=Date.now()-l;if(f+r>=i)return i-f}return r}var p=function(){var f=[].slice.call(arguments),w=this;return new Promise(function(S,q){var b=s&&t===void 0;if(t!==void 0&&clearTimeout(t),t=setTimeout(function(){if(t=void 0,l=Date.now(),!s){var T=e.apply(w,f);c&&c(T),d.forEach(function(j){return(0,j.resolve)(T)}),d=[]}},u()),b){var y=e.apply(w,f);return c&&c(y),S(y)}d.push({resolve:S,reject:q})})};return p.cancel=function(f){t!==void 0&&clearTimeout(t),d.forEach(function(w){return(0,w.reject)(f)}),d=[]},p}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof window<"u";function Vd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Ja(e,r){const n={};for(const a in r){const o=r[a];n[a]=sr(o)?o.map(e):e(o)}return n}const Cn=()=>{},sr=Array.isArray,Jd=/\/$/,Gd=e=>e.replace(Jd,"");function Ga(e,r,n="/"){let a,o={},t="",s="";const c=r.indexOf("#");let i=r.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(a=r.slice(0,i),t=r.slice(i+1,c>-1?c:r.length),o=e(t)),c>-1&&(a=a||r.slice(0,c),s=r.slice(c,r.length)),a=Xd(a??r,n),{fullPath:a+(t&&"?")+t+s,path:a,query:o,hash:s}}function $d(e,r){const n=r.query?e(r.query):"";return r.path+(n&&"?")+n+(r.hash||"")}function Nt(e,r){return!r||!e.toLowerCase().startsWith(r.toLowerCase())?e:e.slice(r.length)||"/"}function Yd(e,r,n){const a=r.matched.length-1,o=n.matched.length-1;return a>-1&&a===o&&mn(r.matched[a],n.matched[o])&&Si(r.params,n.params)&&e(r.query)===e(n.query)&&r.hash===n.hash}function mn(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function Si(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const n in e)if(!Zd(e[n],r[n]))return!1;return!0}function Zd(e,r){return sr(e)?Mt(e,r):sr(r)?Mt(r,e):e===r}function Mt(e,r){return sr(r)?e.length===r.length&&e.every((n,a)=>n===r[a]):e.length===1&&e[0]===r}function Xd(e,r){if(e.startsWith("/"))return e;if(!e)return r;const n=r.split("/"),a=e.split("/"),o=a[a.length-1];(o===".."||o===".")&&a.push("");let t=n.length-1,s,c;for(s=0;s<a.length;s++)if(c=a[s],c!==".")if(c==="..")t>1&&t--;else break;return n.slice(0,t).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var Nn;(function(e){e.pop="pop",e.push="push"})(Nn||(Nn={}));var zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zn||(zn={}));function Kd(e){if(!e)if(rn){const r=document.querySelector("base");e=r&&r.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gd(e)}const Qd=/^[^#]+#/;function eu(e,r){return e.replace(Qd,"#")+r}function ru(e,r){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:r.behavior,left:a.left-n.left-(r.left||0),top:a.top-n.top-(r.top||0)}}const La=()=>({left:window.pageXOffset,top:window.pageYOffset});function nu(e){let r;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;r=ru(o,e)}else r=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(r):window.scrollTo(r.left!=null?r.left:window.pageXOffset,r.top!=null?r.top:window.pageYOffset)}function Dt(e,r){return(history.state?history.state.position-r:-1)+e}const po=new Map;function au(e,r){po.set(e,r)}function ou(e){const r=po.get(e);return po.delete(e),r}let tu=()=>location.protocol+"//"+location.host;function Pi(e,r){const{pathname:n,search:a,hash:o}=r,t=e.indexOf("#");if(t>-1){let c=o.includes(e.slice(t))?e.slice(t).length:1,i=o.slice(c);return i[0]!=="/"&&(i="/"+i),Nt(i,"")}return Nt(n,e)+a+o}function su(e,r,n,a){let o=[],t=[],s=null;const c=({state:p})=>{const f=Pi(e,location),w=n.value,S=r.value;let q=0;if(p){if(n.value=f,r.value=p,s&&s===w){s=null;return}q=S?p.position-S.position:0}else a(f);o.forEach(b=>{b(n.value,w,{delta:q,type:Nn.pop,direction:q?q>0?zn.forward:zn.back:zn.unknown})})};function i(){s=n.value}function l(p){o.push(p);const f=()=>{const w=o.indexOf(p);w>-1&&o.splice(w,1)};return t.push(f),f}function d(){const{history:p}=window;p.state&&p.replaceState(ve({},p.state,{scroll:La()}),"")}function u(){for(const p of t)p();t=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:i,listen:l,destroy:u}}function Ft(e,r,n,a=!1,o=!1){return{back:e,current:r,forward:n,replaced:a,position:window.history.length,scroll:o?La():null}}function iu(e){const{history:r,location:n}=window,a={value:Pi(e,n)},o={value:r.state};o.value||t(a.value,{back:null,current:a.value,forward:null,position:r.length-1,replaced:!0,scroll:null},!0);function t(i,l,d){const u=e.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+i:tu()+e+i;try{r[d?"replaceState":"pushState"](l,"",p),o.value=l}catch(f){console.error(f),n[d?"replace":"assign"](p)}}function s(i,l){const d=ve({},r.state,Ft(o.value.back,i,o.value.forward,!0),l,{position:o.value.position});t(i,d,!0),a.value=i}function c(i,l){const d=ve({},o.value,r.state,{forward:i,scroll:La()});t(d.current,d,!0);const u=ve({},Ft(a.value,i,null),{position:d.position+1},l);t(i,u,!1),a.value=i}return{location:a,state:o,push:c,replace:s}}function cu(e){e=Kd(e);const r=iu(e),n=su(e,r.state,r.location,r.replace);function a(t,s=!0){s||n.pauseListeners(),history.go(t)}const o=ve({location:"",base:e,go:a,createHref:eu.bind(null,e)},r,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>r.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>r.state.value}),o}function lu(e){return typeof e=="string"||e&&typeof e=="object"}function qi(e){return typeof e=="string"||typeof e=="symbol"}const hr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xi=Symbol("");var Bt;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Bt||(Bt={}));function hn(e,r){return ve(new Error,{type:e,[xi]:!0},r)}function pr(e,r){return e instanceof Error&&xi in e&&(r==null||!!(e.type&r))}const Ut="[^/]+?",du={sensitive:!1,strict:!1,start:!0,end:!0},uu=/[.+*?^${}()[\]/\\]/g;function pu(e,r){const n=ve({},du,r),a=[];let o=n.start?"^":"";const t=[];for(const l of e){const d=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let u=0;u<l.length;u++){const p=l[u];let f=40+(n.sensitive?.25:0);if(p.type===0)u||(o+="/"),o+=p.value.replace(uu,"\\$&"),f+=40;else if(p.type===1){const{value:w,repeatable:S,optional:q,regexp:b}=p;t.push({name:w,repeatable:S,optional:q});const y=b||Ut;if(y!==Ut){f+=10;try{new RegExp(`(${y})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${w}" (${y}): `+j.message)}}let T=S?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;u||(T=q&&l.length<2?`(?:/${T})`:"/"+T),q&&(T+="?"),o+=T,f+=20,q&&(f+=-8),S&&(f+=-20),y===".*"&&(f+=-50)}d.push(f)}a.push(d)}if(n.strict&&n.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(l){const d=l.match(s),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",w=t[p-1];u[w.name]=f&&w.repeatable?f.split("/"):f}return u}function i(l){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===0)d+=f.value;else if(f.type===1){const{value:w,repeatable:S,optional:q}=f,b=w in l?l[w]:"";if(sr(b)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const y=sr(b)?b.join("/"):b;if(!y)if(q)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${w}"`);d+=y}}return d||"/"}return{re:s,score:a,keys:t,parse:c,stringify:i}}function mu(e,r){let n=0;for(;n<e.length&&n<r.length;){const a=r[n]-e[n];if(a)return a;n++}return e.length<r.length?e.length===1&&e[0]===40+40?-1:1:e.length>r.length?r.length===1&&r[0]===40+40?1:-1:0}function hu(e,r){let n=0;const a=e.score,o=r.score;for(;n<a.length&&n<o.length;){const t=mu(a[n],o[n]);if(t)return t;n++}if(Math.abs(o.length-a.length)===1){if(Ht(a))return 1;if(Ht(o))return-1}return o.length-a.length}function Ht(e){const r=e[e.length-1];return e.length>0&&r[r.length-1]<0}const gu={type:0,value:""},fu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e==="/")return[[gu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function r(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,a=n;const o=[];let t;function s(){t&&o.push(t),t=[]}let c=0,i,l="",d="";function u(){l&&(n===0?t.push({type:0,value:l}):n===1||n===2||n===3?(t.length>1&&(i==="*"||i==="+")&&r(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:l,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):r("Invalid state to consume buffer"),l="")}function p(){l+=i}for(;c<e.length;){if(i=e[c++],i==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:i==="/"?(l&&u(),s()):i===":"?(u(),n=1):p();break;case 4:p(),n=a;break;case 1:i==="("?n=2:fu.test(i)?p():(u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&c--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:n=3:d+=i;break;case 3:u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&c--,d="";break;default:r("Unknown state");break}}return n===2&&r(`Unfinished custom RegExp for param "${l}"`),u(),s(),o}function vu(e,r,n){const a=pu(bu(e.path),n),o=ve(a,{record:e,parent:r,children:[],alias:[]});return r&&!o.record.aliasOf==!r.record.aliasOf&&r.children.push(o),o}function yu(e,r){const n=[],a=new Map;r=Jt({strict:!1,end:!0,sensitive:!1},r);function o(d){return a.get(d)}function t(d,u,p){const f=!p,w=wu(d);w.aliasOf=p&&p.record;const S=Jt(r,d),q=[w];if("alias"in d){const T=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of T)q.push(ve({},w,{components:p?p.record.components:w.components,path:j,aliasOf:p?p.record:w}))}let b,y;for(const T of q){const{path:j}=T;if(u&&j[0]!=="/"){const V=u.record.path,K=V[V.length-1]==="/"?"":"/";T.path=u.record.path+(j&&K+j)}if(b=vu(T,u,S),p?p.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),f&&d.name&&!Vt(b)&&s(d.name)),w.children){const V=w.children;for(let K=0;K<V.length;K++)t(V[K],b,p&&p.children[K])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&i(b)}return y?()=>{s(y)}:Cn}function s(d){if(qi(d)){const u=a.get(d);u&&(a.delete(d),n.splice(n.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=n.indexOf(d);u>-1&&(n.splice(u,1),d.record.name&&a.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function c(){return n}function i(d){let u=0;for(;u<n.length&&hu(d,n[u])>=0&&(d.record.path!==n[u].record.path||!ki(d,n[u]));)u++;n.splice(u,0,d),d.record.name&&!Vt(d)&&a.set(d.record.name,d)}function l(d,u){let p,f={},w,S;if("name"in d&&d.name){if(p=a.get(d.name),!p)throw hn(1,{location:d});S=p.record.name,f=ve(Wt(u.params,p.keys.filter(y=>!y.optional).map(y=>y.name)),d.params&&Wt(d.params,p.keys.map(y=>y.name))),w=p.stringify(f)}else if("path"in d)w=d.path,p=n.find(y=>y.re.test(w)),p&&(f=p.parse(w),S=p.record.name);else{if(p=u.name?a.get(u.name):n.find(y=>y.re.test(u.path)),!p)throw hn(1,{location:d,currentLocation:u});S=p.record.name,f=ve({},u.params,d.params),w=p.stringify(f)}const q=[];let b=p;for(;b;)q.unshift(b.record),b=b.parent;return{name:S,path:w,params:f,matched:q,meta:Pu(q)}}return e.forEach(d=>t(d)),{addRoute:t,resolve:l,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function Wt(e,r){const n={};for(const a of r)a in e&&(n[a]=e[a]);return n}function wu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Su(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Su(e){const r={},n=e.props||!1;if("component"in e)r.default=n;else for(const a in e.components)r[a]=typeof n=="object"?n[a]:n;return r}function Vt(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pu(e){return e.reduce((r,n)=>ve(r,n.meta),{})}function Jt(e,r){const n={};for(const a in e)n[a]=a in r?r[a]:e[a];return n}function ki(e,r){return r.children.some(n=>n===e||ki(e,n))}const _i=/#/g,qu=/&/g,xu=/\//g,ku=/=/g,_u=/\?/g,Ei=/\+/g,Eu=/%5B/g,ju=/%5D/g,ji=/%5E/g,Tu=/%60/g,Ti=/%7B/g,Cu=/%7C/g,Ci=/%7D/g,zu=/%20/g;function Uo(e){return encodeURI(""+e).replace(Cu,"|").replace(Eu,"[").replace(ju,"]")}function Au(e){return Uo(e).replace(Ti,"{").replace(Ci,"}").replace(ji,"^")}function mo(e){return Uo(e).replace(Ei,"%2B").replace(zu,"+").replace(_i,"%23").replace(qu,"%26").replace(Tu,"`").replace(Ti,"{").replace(Ci,"}").replace(ji,"^")}function Iu(e){return mo(e).replace(ku,"%3D")}function Lu(e){return Uo(e).replace(_i,"%23").replace(_u,"%3F")}function Ru(e){return e==null?"":Lu(e).replace(xu,"%2F")}function wa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ou(e){const r={};if(e===""||e==="?")return r;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<a.length;++o){const t=a[o].replace(Ei," "),s=t.indexOf("="),c=wa(s<0?t:t.slice(0,s)),i=s<0?null:wa(t.slice(s+1));if(c in r){let l=r[c];sr(l)||(l=r[c]=[l]),l.push(i)}else r[c]=i}return r}function Gt(e){let r="";for(let n in e){const a=e[n];if(n=Iu(n),a==null){a!==void 0&&(r+=(r.length?"&":"")+n);continue}(sr(a)?a.map(t=>t&&mo(t)):[a&&mo(a)]).forEach(t=>{t!==void 0&&(r+=(r.length?"&":"")+n,t!=null&&(r+="="+t))})}return r}function Nu(e){const r={};for(const n in e){const a=e[n];a!==void 0&&(r[n]=sr(a)?a.map(o=>o==null?null:""+o):a==null?a:""+a)}return r}const Mu=Symbol(""),$t=Symbol(""),Ra=Symbol(""),Ho=Symbol(""),ho=Symbol("");function Pn(){let e=[];function r(a){return e.push(a),()=>{const o=e.indexOf(a);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:r,list:()=>e.slice(),reset:n}}function Tr(e,r,n,a,o){const t=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return()=>new Promise((s,c)=>{const i=u=>{u===!1?c(hn(4,{from:n,to:r})):u instanceof Error?c(u):lu(u)?c(hn(2,{from:r,to:u})):(t&&a.enterCallbacks[o]===t&&typeof u=="function"&&t.push(u),s())},l=e.call(a&&a.instances[o],r,n,i);let d=Promise.resolve(l);e.length<3&&(d=d.then(i)),d.catch(u=>c(u))})}function $a(e,r,n,a){const o=[];for(const t of e)for(const s in t.components){let c=t.components[s];if(!(r!=="beforeRouteEnter"&&!t.instances[s]))if(Du(c)){const l=(c.__vccOpts||c)[r];l&&o.push(Tr(l,n,a,t,s))}else{let i=c();o.push(()=>i.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${t.path}"`));const d=Vd(l)?l.default:l;t.components[s]=d;const p=(d.__vccOpts||d)[r];return p&&Tr(p,n,a,t,s)()}))}}return o}function Du(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yt(e){const r=Ee(Ra),n=Ee(Ho),a=M(()=>r.resolve(ee(e.to))),o=M(()=>{const{matched:i}=a.value,{length:l}=i,d=i[l-1],u=n.matched;if(!d||!u.length)return-1;const p=u.findIndex(mn.bind(null,d));if(p>-1)return p;const f=Zt(i[l-2]);return l>1&&Zt(d)===f&&u[u.length-1].path!==f?u.findIndex(mn.bind(null,i[l-2])):p}),t=M(()=>o.value>-1&&Hu(n.params,a.value.params)),s=M(()=>o.value>-1&&o.value===n.matched.length-1&&Si(n.params,a.value.params));function c(i={}){return Uu(i)?r[ee(e.replace)?"replace":"push"](ee(e.to)).catch(Cn):Promise.resolve()}return{route:a,href:M(()=>a.value.href),isActive:t,isExactActive:s,navigate:c}}const Fu=ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yt,setup(e,{slots:r}){const n=Bn(Yt(e)),{options:a}=Ee(Ra),o=M(()=>({[Xt(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Xt(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const t=r.default&&r.default(n);return e.custom?t:le("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},t)}}}),Bu=Fu;function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const r=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(r))return}return e.preventDefault&&e.preventDefault(),!0}}function Hu(e,r){for(const n in r){const a=r[n],o=e[n];if(typeof a=="string"){if(a!==o)return!1}else if(!sr(o)||o.length!==a.length||a.some((t,s)=>t!==o[s]))return!1}return!0}function Zt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xt=(e,r,n)=>e??r??n,Wu=ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:r,slots:n}){const a=Ee(ho),o=M(()=>e.route||a.value),t=Ee($t,0),s=M(()=>{let l=ee(t);const{matched:d}=o.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),c=M(()=>o.value.matched[s.value]);Gr($t,M(()=>s.value+1)),Gr(Mu,c),Gr(ho,o);const i=fe();return er(()=>[i.value,c.value,e.name],([l,d,u],[p,f,w])=>{d&&(d.instances[u]=l,f&&f!==d&&l&&l===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),l&&d&&(!f||!mn(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=o.value,d=e.name,u=c.value,p=u&&u.components[d];if(!p)return Kt(n.default,{Component:p,route:l});const f=u.props[d],w=f?f===!0?l.params:typeof f=="function"?f(l):f:null,q=le(p,ve({},w,r,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[d]=null)},ref:i}));return Kt(n.default,{Component:q,route:l})||q}}});function Kt(e,r){if(!e)return null;const n=e(r);return n.length===1?n[0]:n}const zi=Wu;function Vu(e){const r=yu(e.routes,e),n=e.parseQuery||Ou,a=e.stringifyQuery||Gt,o=e.history,t=Pn(),s=Pn(),c=Pn(),i=To(hr);let l=hr;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ja.bind(null,x=>""+x),u=Ja.bind(null,Ru),p=Ja.bind(null,wa);function f(x,U){let O,G;return qi(x)?(O=r.getRecordMatcher(x),G=U):G=x,r.addRoute(G,O)}function w(x){const U=r.getRecordMatcher(x);U&&r.removeRoute(U)}function S(){return r.getRoutes().map(x=>x.record)}function q(x){return!!r.getRecordMatcher(x)}function b(x,U){if(U=ve({},U||i.value),typeof x=="string"){const v=Ga(n,x,U.path),P=r.resolve({path:v.path},U),k=o.createHref(v.fullPath);return ve(v,P,{params:p(P.params),hash:wa(v.hash),redirectedFrom:void 0,href:k})}let O;if("path"in x)O=ve({},x,{path:Ga(n,x.path,U.path).path});else{const v=ve({},x.params);for(const P in v)v[P]==null&&delete v[P];O=ve({},x,{params:u(v)}),U.params=u(U.params)}const G=r.resolve(O,U),de=x.hash||"";G.params=d(p(G.params));const m=$d(a,ve({},x,{hash:Au(de),path:G.path})),h=o.createHref(m);return ve({fullPath:m,hash:de,query:a===Gt?Nu(x.query):x.query||{}},G,{redirectedFrom:void 0,href:h})}function y(x){return typeof x=="string"?Ga(n,x,i.value.path):ve({},x)}function T(x,U){if(l!==x)return hn(8,{from:U,to:x})}function j(x){return R(x)}function V(x){return j(ve(y(x),{replace:!0}))}function K(x){const U=x.matched[x.matched.length-1];if(U&&U.redirect){const{redirect:O}=U;let G=typeof O=="function"?O(x):O;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=y(G):{path:G},G.params={}),ve({query:x.query,hash:x.hash,params:"path"in G?{}:x.params},G)}}function R(x,U){const O=l=b(x),G=i.value,de=x.state,m=x.force,h=x.replace===!0,v=K(O);if(v)return R(ve(y(v),{state:typeof v=="object"?ve({},de,v.state):de,force:m,replace:h}),U||O);const P=O;P.redirectedFrom=U;let k;return!m&&Yd(a,G,O)&&(k=hn(16,{to:P,from:G}),We(G,G,!0,!1)),(k?Promise.resolve(k):D(P,G)).catch(E=>pr(E)?pr(E,2)?E:Re(E):te(E,P,G)).then(E=>{if(E){if(pr(E,2))return R(ve({replace:h},y(E.to),{state:typeof E.to=="object"?ve({},de,E.to.state):de,force:m}),U||P)}else E=_(P,G,!0,h,de);return $(P,G,E),E})}function g(x,U){const O=T(x,U);return O?Promise.reject(O):Promise.resolve()}function H(x){const U=qr.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(x):x()}function D(x,U){let O;const[G,de,m]=Ju(x,U);O=$a(G.reverse(),"beforeRouteLeave",x,U);for(const v of G)v.leaveGuards.forEach(P=>{O.push(Tr(P,x,U))});const h=g.bind(null,x,U);return O.push(h),Ie(O).then(()=>{O=[];for(const v of t.list())O.push(Tr(v,x,U));return O.push(h),Ie(O)}).then(()=>{O=$a(de,"beforeRouteUpdate",x,U);for(const v of de)v.updateGuards.forEach(P=>{O.push(Tr(P,x,U))});return O.push(h),Ie(O)}).then(()=>{O=[];for(const v of m)if(v.beforeEnter)if(sr(v.beforeEnter))for(const P of v.beforeEnter)O.push(Tr(P,x,U));else O.push(Tr(v.beforeEnter,x,U));return O.push(h),Ie(O)}).then(()=>(x.matched.forEach(v=>v.enterCallbacks={}),O=$a(m,"beforeRouteEnter",x,U),O.push(h),Ie(O))).then(()=>{O=[];for(const v of s.list())O.push(Tr(v,x,U));return O.push(h),Ie(O)}).catch(v=>pr(v,8)?v:Promise.reject(v))}function $(x,U,O){c.list().forEach(G=>H(()=>G(x,U,O)))}function _(x,U,O,G,de){const m=T(x,U);if(m)return m;const h=U===hr,v=rn?history.state:{};O&&(G||h?o.replace(x.fullPath,ve({scroll:h&&v&&v.scroll},de)):o.push(x.fullPath,de)),i.value=x,We(x,U,O,h),Re()}let I;function L(){I||(I=o.listen((x,U,O)=>{if(!ir.listening)return;const G=b(x),de=K(G);if(de){R(ve(de,{replace:!0}),G).catch(Cn);return}l=G;const m=i.value;rn&&au(Dt(m.fullPath,O.delta),La()),D(G,m).catch(h=>pr(h,12)?h:pr(h,2)?(R(h.to,G).then(v=>{pr(v,20)&&!O.delta&&O.type===Nn.pop&&o.go(-1,!1)}).catch(Cn),Promise.reject()):(O.delta&&o.go(-O.delta,!1),te(h,G,m))).then(h=>{h=h||_(G,m,!1),h&&(O.delta&&!pr(h,8)?o.go(-O.delta,!1):O.type===Nn.pop&&pr(h,20)&&o.go(-1,!1)),$(G,m,h)}).catch(Cn)}))}let ie=Pn(),W=Pn(),oe;function te(x,U,O){Re(x);const G=W.list();return G.length?G.forEach(de=>de(x,U,O)):console.error(x),Promise.reject(x)}function Me(){return oe&&i.value!==hr?Promise.resolve():new Promise((x,U)=>{ie.add([x,U])})}function Re(x){return oe||(oe=!x,L(),ie.list().forEach(([U,O])=>x?O(x):U()),ie.reset()),x}function We(x,U,O,G){const{scrollBehavior:de}=e;if(!rn||!de)return Promise.resolve();const m=!O&&ou(Dt(x.fullPath,0))||(G||!O)&&history.state&&history.state.scroll||null;return Hn().then(()=>de(x,U,m)).then(h=>h&&nu(h)).catch(h=>te(h,x,U))}const De=x=>o.go(x);let Pr;const qr=new Set,ir={currentRoute:i,listening:!0,addRoute:f,removeRoute:w,hasRoute:q,getRoutes:S,resolve:b,options:e,push:j,replace:V,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:t.add,beforeResolve:s.add,afterEach:c.add,onError:W.add,isReady:Me,install(x){const U=this;x.component("RouterLink",Bu),x.component("RouterView",zi),x.config.globalProperties.$router=U,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ee(i)}),rn&&!Pr&&i.value===hr&&(Pr=!0,j(o.location).catch(de=>{}));const O={};for(const de in hr)Object.defineProperty(O,de,{get:()=>i.value[de],enumerable:!0});x.provide(Ra,U),x.provide(Ho,zs(O)),x.provide(ho,i);const G=x.unmount;qr.add(x),x.unmount=function(){qr.delete(x),qr.size<1&&(l=hr,I&&I(),I=null,i.value=hr,Pr=!1,oe=!1),G()}}};function Ie(x){return x.reduce((U,O)=>U.then(()=>H(O)),Promise.resolve())}return ir}function Ju(e,r){const n=[],a=[],o=[],t=Math.max(r.matched.length,e.matched.length);for(let s=0;s<t;s++){const c=r.matched[s];c&&(e.matched.find(l=>mn(l,c))?a.push(c):n.push(c));const i=e.matched[s];i&&(r.matched.find(l=>mn(l,i))||o.push(i))}return[n,a,o]}function Zr(){return Ee(Ra)}function Xr(){return Ee(Ho)}const Gu=({headerLinkSelector:e,headerAnchorSelector:r,delay:n,offset:a=5})=>{const o=Zr(),s=wi(()=>{var S,q;const c=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(c-0)<a){Qt(o,"");return}const l=window.innerHeight+c,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(d-l)<a,p=Array.from(document.querySelectorAll(e)),w=Array.from(document.querySelectorAll(r)).filter(b=>p.some(y=>y.hash===b.hash));for(let b=0;b<w.length;b++){const y=w[b],T=w[b+1],j=c>=(((S=y.parentElement)==null?void 0:S.offsetTop)??0)-a,V=!T||c<(((q=T.parentElement)==null?void 0:q.offsetTop)??0)-a;if(!(j&&V))continue;const R=decodeURIComponent(o.currentRoute.value.hash),g=decodeURIComponent(y.hash);if(R===g)return;if(u){for(let H=b+1;H<w.length;H++)if(R===decodeURIComponent(w[H].hash))return}Qt(o,g);return}},n);He(()=>{window.addEventListener("scroll",s)}),Vn(()=>{window.removeEventListener("scroll",s)})},Qt=async(e,r)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:r}).finally(()=>e.options.scrollBehavior=n)},$u="a.sidebar-item",Yu=".header-anchor",Zu=300,Xu=5,Ku=Sr({setup(){Gu({headerLinkSelector:$u,headerAnchorSelector:Yu,delay:Zu,offset:Xu})}}),es=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Qu=()=>window.scrollTo({top:0,behavior:"smooth"});const ep=ue({name:"BackToTop",setup(){const e=fe(0),r=M(()=>e.value>300),n=wi(()=>{e.value=es()},100);He(()=>{e.value=es(),window.addEventListener("scroll",()=>n())});const a=le("div",{class:"back-to-top",onClick:Qu});return()=>le(Jn,{name:"back-to-top"},()=>r.value?a:null)}}),rp=Sr({rootComponents:[ep]});const np=le("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[le("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),le("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ap=ue({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const r=vn(),n=M(()=>e.locales[r.value]??{openInNewWindow:"open in new window"});return()=>le("span",[np,le("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),op={"/ca/":{openInNewWindow:"Obrir en una finestra nova"},"/es/":{openInNewWindow:"Abrir en una ventana nueva"},"/en/":{openInNewWindow:"Open in a new window"},"/":{openInNewWindow:"open in new window"}},tp=Sr({enhance({app:e}){e.component("ExternalLinkIcon",le(ap,{locales:op}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const pe={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const r=pe.isStarted();e=Ya(e,pe.settings.minimum,1),pe.status=e===1?null:e;const n=pe.render(!r),a=n.querySelector(pe.settings.barSelector),o=pe.settings.speed,t=pe.settings.easing;return n.offsetWidth,sp(s=>{na(a,{transform:"translate3d("+rs(e)+"%,0,0)",transition:"all "+o+"ms "+t}),e===1?(na(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){na(n,{transition:"all "+o+"ms linear",opacity:"0"}),setTimeout(function(){pe.remove(),s()},o)},o)):setTimeout(()=>s(),o)}),pe},isStarted:()=>typeof pe.status=="number",start:()=>{pe.status||pe.set(0);const e=()=>{setTimeout(()=>{pe.status&&(pe.trickle(),e())},pe.settings.trickleSpeed)};return pe.settings.trickle&&e(),pe},done:e=>!e&&!pe.status?pe:pe.inc(.3+.5*Math.random()).set(1),inc:e=>{let r=pe.status;return r?(typeof e!="number"&&(e=(1-r)*Ya(Math.random()*r,.1,.95)),r=Ya(r+e,0,.994),pe.set(r)):pe.start()},trickle:()=>pe.inc(Math.random()*pe.settings.trickleRate),render:e=>{if(pe.isRendered())return document.getElementById("nprogress");ns(document.documentElement,"nprogress-busy");const r=document.createElement("div");r.id="nprogress",r.innerHTML=pe.settings.template;const n=r.querySelector(pe.settings.barSelector),a=e?"-100":rs(pe.status||0),o=document.querySelector(pe.settings.parent);return na(n,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),o!==document.body&&ns(o,"nprogress-custom-parent"),o==null||o.appendChild(r),r},remove:()=>{as(document.documentElement,"nprogress-busy"),as(document.querySelector(pe.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&ip(e)},isRendered:()=>!!document.getElementById("nprogress")},Ya=(e,r,n)=>e<r?r:e>n?n:e,rs=e=>(-1+e)*100,sp=function(){const e=[];function r(){const n=e.shift();n&&n(r)}return function(n){e.push(n),e.length===1&&r()}}(),na=function(){const e=["Webkit","O","Moz","ms"],r={};function n(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,i){return i.toUpperCase()})}function a(s){const c=document.body.style;if(s in c)return s;let i=e.length;const l=s.charAt(0).toUpperCase()+s.slice(1);let d;for(;i--;)if(d=e[i]+l,d in c)return d;return s}function o(s){return s=n(s),r[s]??(r[s]=a(s))}function t(s,c,i){c=o(c),s.style[c]=i}return function(s,c){for(const i in c){const l=c[i];l!==void 0&&Object.prototype.hasOwnProperty.call(c,i)&&t(s,i,l)}}}(),Ai=(e,r)=>(typeof e=="string"?e:Wo(e)).indexOf(" "+r+" ")>=0,ns=(e,r)=>{const n=Wo(e),a=n+r;Ai(n,r)||(e.className=a.substring(1))},as=(e,r)=>{const n=Wo(e);if(!Ai(e,r))return;const a=n.replace(" "+r+" "," ");e.className=a.substring(1,a.length-1)},Wo=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),ip=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const cp=()=>{He(()=>{const e=Zr(),r=new Set;r.add(e.currentRoute.value.path),e.beforeEach(n=>{r.has(n.path)||pe.start()}),e.afterEach(n=>{r.add(n.path),pe.done()})})},lp=Sr({setup(){cp()}}),dp=JSON.parse(`{"logo":"/LogoIES.png","repo":"sad2asir/sad_sources","repoLabel":"GitHub","editLink":true,"docsRepo":"https://github.com/sad2asir/sad_sources","docsBranch":"main","docsDir":"docs","lastUpdated":true,"sidebarDepth":2,"locales":{"/ca/":{"home":"/ca/","selectLanguageText":"Idioma","selectLanguageName":"Valencià","selectLanguageAriaLabel":"Idioma","editLink":false,"editLinkText":"Ajuda'ns a millorar aquesta pàgina a GitHub!","lastUpdatedText":"Última actualització","contributorsText":"Editors","notFound":["Recurs no trobat al lloc web"],"backToHome":"Tornar a l'inici","openInNewWindow":"Obrir en una finestra nova","toggleSidebar":"Mostrar/Amagar","serviceWorker":{"updatePopup":{"message":"Hi ha contingut nou disponible.","buttonText":"Actualitzar"}},"navbar":[{"text":"Aules FP","link":"https://aules.edu.gva.es/fp/login/index.php?lang=ca_valencia"},{"text":"Contingut del curs","children":[{"text":"Unitat 1 - Introduction to concurrent programming","link":"/ca/unit1/"},{"text":"Unitat 2 - Process programming in Java","link":"/ca/unitat2/"}]}],"sidebar":{"/ca/":[{"text":"SAD > Inici","link":"/ca/README.md","children":[]}],"/ca/unit1/":[{"isGroup":true,"text":"Unit 1 - Introduction to concurrent programming","children":["index.md","process.md","concurrency.md","operatingsystem.md"]}],"/ca/unit2/":[{"isGroup":true,"text":"Unit 2 - Process Programming in Java","children":["index.md","runtime.md","processbuilder.md","iostreams.md","curl_annex.md"]}]}},"/es/":{"home":"/es/","selectLanguageText":"Idioma","selectLanguageName":"Castellano","selectLanguageAriaLabel":"Idioma","editLink":false,"editLinkText":"Ayúdanos a mejorar esta página en GitHub!","lastUpdatedText":"Última actualización","contributorsText":"Editores","notFound":["No se ha encontrado el recurso solicitado"],"backToHome":"Inicio","openInNewWindow":"Abrir en una ventana nueva","toggleSidebar":"Mostrar/Ocultar","navbar":[{"text":"Aules FP","link":"https://aules.edu.gva.es/fp/login/index.php?lang=es"},{"text":"Contenido del curso","children":[{"text":"Tema 1 - Introducción a la programación concurrente","link":"/es/unit1/"},{"text":"Tema 2 - Programación de procesos en Java","link":"/es/unit2/"}]}],"sidebar":{"/es/":[{"text":"SAD > Inicio","link":"/es/README.md","children":[]}],"/es/unit1/":[{"isGroup":true,"text":"Tema 1 - Introducción a la programación concurrente","children":["index.md","process.md","concurrency.md","operatingsystem.md"]}],"/es/unit2/":[{"isGroup":true,"text":"Tema 2 - Programación de procesos en Java","children":["index.md","runtime.md","processbuilder.md","iostreams.md","curl_annex.md"]}]}},"/en/":{"home":"/en/","selectLanguageText":"Language","selectLanguageName":"English","selectLanguageAriaLabel":"Language","editLink":false,"editLinkText":"Help us to improve this page on GitHub!","lastUpdatedText":"Last updated","contributorsText":"Editors","notFound":["Not found"],"backToHome":"Home","openInNewWindow":"Open in a new window","toggleSidebar":"Hide/Show","navbar":[{"text":"Aules FP","link":"https://aules.edu.gva.es/fp/login/index.php?lang=es"},{"text":"Course content","children":[{"text":"Unit 1- Introducción a la programación concurrente","link":"/en/unit1/"},{"text":"Unit 2 - Programación de procesos en Java","link":"/en/unit2/"}]}],"sidebar":{"/en/":[{"text":"SAD > Home","link":"/en/README.md","children":[]}],"/en/unit1/":[{"isGroup":true,"text":"Unit 1 - Introducción a la programación concurrente","children":["index.md","process.md","concurrency.md","operatingsystem.md"]}],"/en/unit2/":[{"isGroup":true,"text":"Unit 2 - Programación de procesos en Java","children":["index.md","runtime.md","processbuilder.md","iostreams.md","curl_annex.md"]}]}},"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"navbar":[],"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"auto","editLinkText":"Edit this page","lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),up=fe(dp),Ii=()=>up,Li=Symbol(""),pp=()=>{const e=Ee(Li);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},mp=(e,r)=>{const{locales:n,...a}=e;return{...a,...n==null?void 0:n[r]}},hp=Sr({enhance({app:e}){const r=Ii(),n=e._context.provides[Mo],a=M(()=>mp(r.value,n.value));e.provide(Li,a),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return r.value}},$themeLocale:{get(){return a.value}}})}}),gp=ue({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(r,n)=>(B(),Q("span",{class:Je(["badge",e.type]),style:Fn({verticalAlign:e.vertical})},[Se(r.$slots,"default",{},()=>[Or(Ae(e.text),1)])],6))}}),ke=(e,r)=>{const n=e.__vccOpts||e;for(const[a,o]of r)n[a]=o;return n},fp=ke(gp,[["__file","Badge.vue"]]),bp=ue({name:"CodeGroup",slots:Object,setup(e,{slots:r}){const n=fe(-1),a=fe([]),o=(c=n.value)=>{c<a.value.length-1?n.value=c+1:n.value=0,a.value[n.value].focus()},t=(c=n.value)=>{c>0?n.value=c-1:n.value=a.value.length-1,a.value[n.value].focus()},s=(c,i)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=i):c.key==="ArrowRight"?(c.preventDefault(),o(i)):c.key==="ArrowLeft"&&(c.preventDefault(),t(i))};return()=>{var i;const c=(((i=r.default)==null?void 0:i.call(r))||[]).filter(l=>l.type.name==="CodeGroupItem").map(l=>(l.props===null&&(l.props={}),l));return c.length===0?null:(n.value<0||n.value>c.length-1?(n.value=c.findIndex(l=>l.props.active===""||l.props.active===!0),n.value===-1&&(n.value=0)):c.forEach((l,d)=>{l.props.active=d===n.value}),le("div",{class:"code-group"},[le("div",{class:"code-group__nav"},le("ul",{class:"code-group__ul"},c.map((l,d)=>{const u=d===n.value;return le("li",{class:"code-group__li"},le("button",{ref:p=>{p&&(a.value[d]=p)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":u},ariaPressed:u,ariaExpanded:u,onClick:()=>n.value=d,onKeydown:p=>s(p,d)},l.props.title))}))),c]))}}}),vp=["aria-selected"],yp=ue({name:"CodeGroupItem"}),wp=ue({...yp,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(r,n)=>(B(),Q("div",{class:Je(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[Se(r.$slots,"default")],10,vp))}}),Sp=ke(wp,[["__file","CodeGroupItem.vue"]]);function os(e,r){var n;const a=To();return Us(()=>{a.value=e()},{...r,flush:(n=r==null?void 0:r.flush)!=null?n:"sync"}),bn(a)}function Pp(e,r){let n,a,o;const t=fe(!0),s=()=>{t.value=!0,o()};er(e,s,{flush:"sync"});const c=typeof r=="function"?r:r.get,i=typeof r=="function"?void 0:r.set,l=Uc((d,u)=>(a=d,o=u,{get(){return t.value&&(n=c(),t.value=!1),a(),n},set(p){i==null||i(p)}}));return Object.isExtensible(l)&&(l.trigger=s),l}function Vo(e){return ws()?(uc(e),!0):!1}function Nr(e){return typeof e=="function"?e():ee(e)}const Jo=typeof window<"u"&&typeof document<"u",qp=Object.prototype.toString,xp=e=>qp.call(e)==="[object Object]",kp=()=>{};function _p(e,r){function n(...a){return new Promise((o,t)=>{Promise.resolve(e(()=>r.apply(this,a),{fn:r,thisArg:this,args:a})).then(o).catch(t)})}return n}const Ri=e=>e();function Ep(e=Ri){const r=fe(!0);function n(){r.value=!1}function a(){r.value=!0}const o=(...t)=>{r.value&&e(...t)};return{isActive:bn(r),pause:n,resume:a,eventFilter:o}}function jp(e,r,n={}){const{eventFilter:a=Ri,...o}=n;return er(e,_p(a,r),o)}function Tp(e,r,n={}){const{eventFilter:a,...o}=n,{eventFilter:t,pause:s,resume:c,isActive:i}=Ep(a);return{stop:jp(e,r,{...o,eventFilter:t}),pause:s,resume:c,isActive:i}}function Cp(e,r,n={}){const{immediate:a=!0}=n,o=fe(!1);let t=null;function s(){t&&(clearTimeout(t),t=null)}function c(){o.value=!1,s()}function i(...l){s(),o.value=!0,t=setTimeout(()=>{o.value=!1,t=null,e(...l)},Nr(r))}return a&&(o.value=!0,Jo&&i()),Vo(c),{isPending:bn(o),start:i,stop:c}}function zp(e=!1,r={}){const{truthyValue:n=!0,falsyValue:a=!1}=r,o=Le(e),t=fe(e);function s(c){if(arguments.length)return t.value=c,t.value;{const i=Nr(n);return t.value=t.value===i?Nr(a):i,t.value}}return o?s:[t,s]}function Ap(e){var r;const n=Nr(e);return(r=n==null?void 0:n.$el)!=null?r:n}const Sa=Jo?window:void 0,Ip=Jo?window.navigator:void 0;function Pa(...e){let r,n,a,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,o]=e,r=Sa):[r,n,a,o]=e,!r)return kp;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const t=[],s=()=>{t.forEach(d=>d()),t.length=0},c=(d,u,p,f)=>(d.addEventListener(u,p,f),()=>d.removeEventListener(u,p,f)),i=er(()=>[Ap(r),Nr(o)],([d,u])=>{if(s(),!d)return;const p=xp(u)?{...u}:u;t.push(...n.flatMap(f=>a.map(w=>c(d,f,w,p))))},{immediate:!0,flush:"post"}),l=()=>{i(),s()};return Vo(l),l}function Lp(){const e=fe(!1);return Ro()&&He(()=>{e.value=!0}),e}function Oi(e){const r=Lp();return M(()=>(r.value,!!e()))}function Rp(e,r={}){const{window:n=Sa}=r,a=Oi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const t=fe(!1),s=l=>{t.value=l.matches},c=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",s):o.removeListener(s))},i=Us(()=>{a.value&&(c(),o=n.matchMedia(Nr(e)),"addEventListener"in o?o.addEventListener("change",s):o.addListener(s),t.value=o.matches)});return Vo(()=>{i(),c(),o=void 0}),t}function Op(e={}){const{navigator:r=Ip,read:n=!1,source:a,copiedDuring:o=1500,legacy:t=!1}=e,s=Oi(()=>r&&"clipboard"in r),c=M(()=>s.value||t),i=fe(""),l=fe(!1),d=Cp(()=>l.value=!1,o);function u(){s.value?r.clipboard.readText().then(S=>{i.value=S}):i.value=w()}c.value&&n&&Pa(["copy","cut"],u);async function p(S=Nr(a)){c.value&&S!=null&&(s.value?await r.clipboard.writeText(S):f(S),i.value=S,l.value=!0,d.start())}function f(S){const q=document.createElement("textarea");q.value=S??"",q.style.position="absolute",q.style.opacity="0",document.body.appendChild(q),q.select(),document.execCommand("copy"),q.remove()}function w(){var S,q,b;return(b=(q=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:q.toString())!=null?b:""}return{isSupported:c,text:i,copied:l,copy:p}}const aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oa="__vueuse_ssr_handlers__",Np=Mp();function Mp(){return oa in aa||(aa[oa]=aa[oa]||{}),aa[oa]}function Dp(e,r){return Np[e]||r}function Fp(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Bp={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ts="vueuse-storage";function Up(e,r,n,a={}){var o;const{flush:t="pre",deep:s=!0,listenToStorageChanges:c=!0,writeDefaults:i=!0,mergeDefaults:l=!1,shallow:d,window:u=Sa,eventFilter:p,onError:f=g=>{console.error(g)}}=a,w=(d?To:fe)(r);if(!n)try{n=Dp("getDefaultStorage",()=>{var g;return(g=Sa)==null?void 0:g.localStorage})()}catch(g){f(g)}if(!n)return w;const S=Nr(r),q=Fp(S),b=(o=a.serializer)!=null?o:Bp[q],{pause:y,resume:T}=Tp(w,()=>j(w.value),{flush:t,deep:s,eventFilter:p});return u&&c&&(Pa(u,"storage",R),Pa(u,ts,K)),R(),w;function j(g){try{if(g==null)n.removeItem(e);else{const H=b.write(g),D=n.getItem(e);D!==H&&(n.setItem(e,H),u&&u.dispatchEvent(new CustomEvent(ts,{detail:{key:e,oldValue:D,newValue:H,storageArea:n}})))}}catch(H){f(H)}}function V(g){const H=g?g.newValue:n.getItem(e);if(H==null)return i&&S!==null&&n.setItem(e,b.write(S)),S;if(!g&&l){const D=b.read(H);return typeof l=="function"?l(D,S):q==="object"&&!Array.isArray(D)?{...S,...D}:D}else return typeof H!="string"?H:b.read(H)}function K(g){R(g.detail)}function R(g){if(!(g&&g.storageArea!==n)){if(g&&g.key==null){w.value=S;return}if(!(g&&g.key!==e)){y();try{(g==null?void 0:g.newValue)!==b.write(w.value)&&(w.value=V(g))}catch(H){f(H)}finally{g?Hn(T):T()}}}}}function Hp(e){return Rp("(prefers-color-scheme: dark)",e)}const Wp=()=>Ii(),Ue=()=>pp(),Ni=Symbol(""),Go=()=>{const e=Ee(Ni);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Vp=()=>{const e=Ue(),r=Hp(),n=Up("vuepress-color-scheme",e.value.colorMode),a=M({get(){return e.value.colorModeSwitch?n.value==="auto"?r.value:n.value==="dark":e.value.colorMode==="dark"},set(o){o===r.value?n.value="auto":n.value=o?"dark":"light"}});Gr(Ni,a),Jp(a)},Jp=e=>{const r=(n=e.value)=>{const a=window==null?void 0:window.document.querySelector("html");a==null||a.classList.toggle("dark",n)};He(()=>{er(e,r,{immediate:!0})}),za(()=>r())},Mi=(...e)=>{const n=Zr().resolve(...e),a=n.matched[n.matched.length-1];if(!(a!=null&&a.redirect))return n;const{redirect:o}=a,t=se(o)?o(n):o,s=be(t)?{path:t}:t;return Mi({hash:n.hash,query:n.query,params:n.params,...s})},$o=e=>{const r=Mi(encodeURI(e));return{text:r.meta.title||e,link:r.name==="404"?e:r.fullPath}};let Za=null,qn=null;const Gp={wait:()=>Za,pending:()=>{Za=new Promise(e=>qn=e)},resolve:()=>{qn==null||qn(),Za=null,qn=null}},Di=()=>Gp,Fi=Symbol("sidebarItems"),Yo=()=>{const e=Ee(Fi);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},$p=()=>{const e=Ue(),r=fr(),n=M(()=>Yp(r.value,e.value));Gr(Fi,n)},Yp=(e,r)=>{const n=e.sidebar??r.sidebar??"auto",a=e.sidebarDepth??r.sidebarDepth??2;return e.home||n===!1?[]:n==="auto"?Xp(a):X(n)?Bi(n,a):No(n)?Kp(n,a):[]},Zp=(e,r)=>({text:e.title,link:e.link,children:Zo(e.children,r)}),Zo=(e,r)=>r>0?e.map(n=>Zp(n,r-1)):[],Xp=e=>{const r=Ar();return[{text:r.value.title,children:Zo(r.value.headers,e)}]},Bi=(e,r)=>{const n=Xr(),a=Ar(),o=t=>{var c;let s;if(be(t)?s=$o(t):s=t,s.children)return{...s,children:s.children.map(i=>o(i))};if(s.link===n.path){const i=((c=a.value.headers[0])==null?void 0:c.level)===1?a.value.headers[0].children:a.value.headers;return{...s,children:Zo(i,r)}}return s};return e.map(t=>o(t))},Kp=(e,r)=>{const n=Xr(),a=ui(e,n.path),o=e[a]??[];return Bi(o,r)},Qp="2048px",em={mobile:Qp};var Mn;(function(e){e.MOBILE="mobile"})(Mn||(Mn={}));var ms;const rm={[Mn.MOBILE]:Number.parseInt((ms=em.mobile)==null?void 0:ms.replace("px",""),10)},Ui=(e,r)=>{const n=rm[e];Number.isInteger(n)&&He(()=>{r(n),window.addEventListener("resize",()=>r(n),!1),window.addEventListener("orientationchange",()=>r(n),!1)})},nm={},am={class:"theme-default-content"};function om(e,r){const n=yr("Content");return B(),Q("div",am,[ne(n)])}const tm=ke(nm,[["render",om],["__file","HomeContent.vue"]]),sm={key:0,class:"features"},im=ue({__name:"HomeFeatures",setup(e){const r=fr(),n=M(()=>X(r.value.features)?r.value.features:[]);return(a,o)=>n.value.length?(B(),Q("div",sm,[(B(!0),Q(Pe,null,Lr(n.value,t=>(B(),Q("div",{key:t.title,class:"feature"},[he("h2",null,Ae(t.title),1),he("p",null,Ae(t.details),1)]))),128))])):_e("v-if",!0)}}),cm=ke(im,[["__file","HomeFeatures.vue"]]),lm=["innerHTML"],dm=["textContent"],um=ue({__name:"HomeFooter",setup(e){const r=fr(),n=M(()=>r.value.footer),a=M(()=>r.value.footerHtml);return(o,t)=>n.value?(B(),Q(Pe,{key:0},[_e(" eslint-disable-next-line vue/no-v-html "),a.value?(B(),Q("div",{key:0,class:"footer",innerHTML:n.value},null,8,lm)):(B(),Q("div",{key:1,class:"footer",textContent:Ae(n.value)},null,8,dm))],64)):_e("v-if",!0)}}),pm=ke(um,[["__file","HomeFooter.vue"]]),mm=["href","rel","target","aria-label"],hm=ue({inheritAttrs:!1}),gm=ue({...hm,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(e){const r=e,n=Xr(),a=vi(),{item:o}=Ea(r),t=M(()=>Gn(o.value.link)),s=M(()=>Ad(o.value.link)||Id(o.value.link)),c=M(()=>{if(!s.value){if(o.value.target)return o.value.target;if(t.value)return"_blank"}}),i=M(()=>c.value==="_blank"),l=M(()=>!t.value&&!s.value&&!i.value),d=M(()=>{if(!s.value){if(o.value.rel)return o.value.rel;if(i.value)return"noopener noreferrer"}}),u=M(()=>o.value.ariaLabel||o.value.text),p=M(()=>{const S=Object.keys(a.value.locales);return S.length?!S.some(q=>q===o.value.link):o.value.link!=="/"}),f=M(()=>p.value?n.path.startsWith(o.value.link):!1),w=M(()=>l.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(n.path):f.value:!1);return(S,q)=>{const b=yr("RouterLink"),y=yr("AutoLinkExternalIcon");return l.value?(B(),Te(b,lo({key:0,class:{"router-link-active":w.value},to:ee(o).link,"aria-label":u.value},S.$attrs),{default:Oe(()=>[Se(S.$slots,"before"),Or(" "+Ae(ee(o).text)+" ",1),Se(S.$slots,"after")]),_:3},16,["class","to","aria-label"])):(B(),Q("a",lo({key:1,class:"external-link",href:ee(o).link,rel:d.value,target:c.value,"aria-label":u.value},S.$attrs),[Se(S.$slots,"before"),Or(" "+Ae(ee(o).text)+" ",1),i.value?(B(),Te(y,{key:0})):_e("v-if",!0),Se(S.$slots,"after")],16,mm))}}}),br=ke(gm,[["__file","AutoLink.vue"]]),fm={class:"hero"},bm={key:0,id:"main-title"},vm={key:1,class:"description"},ym={key:2,class:"actions"},wm=ue({__name:"HomeHero",setup(e){const r=fr(),n=Do(),a=Go(),o=M(()=>a.value&&r.value.heroImageDark!==void 0?r.value.heroImageDark:r.value.heroImage),t=M(()=>r.value.heroAlt||c.value||"hero"),s=M(()=>r.value.heroHeight||280),c=M(()=>r.value.heroText===null?null:r.value.heroText||n.value.title||"Hello"),i=M(()=>r.value.tagline===null?null:r.value.tagline||n.value.description||"Welcome to your VuePress site"),l=M(()=>X(r.value.actions)?r.value.actions.map(({text:u,link:p,type:f="primary"})=>({text:u,link:p,type:f})):[]),d=()=>{if(!o.value)return null;const u=le("img",{src:Bo(o.value),alt:t.value,height:s.value});return r.value.heroImageDark===void 0?u:le(Fo,()=>u)};return(u,p)=>(B(),Q("header",fm,[ne(d),c.value?(B(),Q("h1",bm,Ae(c.value),1)):_e("v-if",!0),i.value?(B(),Q("p",vm,Ae(i.value),1)):_e("v-if",!0),l.value.length?(B(),Q("p",ym,[(B(!0),Q(Pe,null,Lr(l.value,f=>(B(),Te(br,{key:f.text,class:Je(["action-button",[f.type]]),item:f},null,8,["class","item"]))),128))])):_e("v-if",!0)]))}}),Sm=ke(wm,[["__file","HomeHero.vue"]]),Pm={class:"home"},qm=ue({__name:"Home",setup(e){return(r,n)=>(B(),Q("main",Pm,[ne(Sm),ne(cm),ne(tm),ne(pm)]))}}),xm=ke(qm,[["__file","Home.vue"]]),km=ue({__name:"NavbarBrand",setup(e){const r=vn(),n=Do(),a=Ue(),o=Go(),t=M(()=>a.value.home||r.value),s=M(()=>n.value.title),c=M(()=>o.value&&a.value.logoDark!==void 0?a.value.logoDark:a.value.logo),i=()=>{if(!c.value)return null;const l=le("img",{class:"logo",src:Bo(c.value),alt:s.value});return a.value.logoDark===void 0?l:le(Fo,()=>l)};return(l,d)=>{const u=yr("RouterLink");return B(),Te(u,{to:t.value},{default:Oe(()=>[ne(i),s.value?(B(),Q("span",{key:0,class:Je(["site-name",{"can-hide":c.value}])},Ae(s.value),3)):_e("v-if",!0)]),_:1},8,["to"])}}}),_m=ke(km,[["__file","NavbarBrand.vue"]]),Em=ue({__name:"DropdownTransition",setup(e){const r=a=>{a.style.height=a.scrollHeight+"px"},n=a=>{a.style.height=""};return(a,o)=>(B(),Te(Jn,{name:"dropdown",onEnter:r,onAfterEnter:n,onBeforeLeave:r},{default:Oe(()=>[Se(a.$slots,"default")]),_:3}))}}),Hi=ke(Em,[["__file","DropdownTransition.vue"]]),jm=["aria-label"],Tm={class:"title"},Cm=he("span",{class:"arrow down"},null,-1),zm=["aria-label"],Am={class:"title"},Im={class:"navbar-dropdown"},Lm={class:"navbar-dropdown-subtitle"},Rm={key:1},Om={class:"navbar-dropdown-subitem-wrapper"},Nm=ue({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const r=e,{item:n}=Ea(r),a=M(()=>n.value.ariaLabel||n.value.text),o=fe(!1),t=Xr();er(()=>t.path,()=>{o.value=!1});const s=i=>{i.detail===0?o.value=!o.value:o.value=!1},c=(i,l)=>l[l.length-1]===i;return(i,l)=>(B(),Q("div",{class:Je(["navbar-dropdown-wrapper",{open:o.value}])},[he("button",{class:"navbar-dropdown-title",type:"button","aria-label":a.value,onClick:s},[he("span",Tm,Ae(ee(n).text),1),Cm],8,jm),he("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a.value,onClick:l[0]||(l[0]=d=>o.value=!o.value)},[he("span",Am,Ae(ee(n).text),1),he("span",{class:Je(["arrow",o.value?"down":"right"])},null,2)],8,zm),ne(Hi,null,{default:Oe(()=>[ha(he("ul",Im,[(B(!0),Q(Pe,null,Lr(ee(n).children,d=>(B(),Q("li",{key:d.text,class:"navbar-dropdown-item"},[d.children?(B(),Q(Pe,{key:0},[he("h4",Lm,[d.link?(B(),Te(br,{key:0,item:d,onFocusout:u=>c(d,ee(n).children)&&d.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(B(),Q("span",Rm,Ae(d.text),1))]),he("ul",Om,[(B(!0),Q(Pe,null,Lr(d.children,u=>(B(),Q("li",{key:u.link,class:"navbar-dropdown-subitem"},[ne(br,{item:u,onFocusout:p=>c(u,d.children)&&c(d,ee(n).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(B(),Te(br,{key:1,item:d,onFocusout:u=>c(d,ee(n).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[ya,o.value]])]),_:1})],2))}}),Mm=ke(Nm,[["__file","NavbarDropdown.vue"]]),ss=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Dm=(e,r)=>{if(r.hash===e)return!0;const n=ss(r.path),a=ss(e);return n===a},Wi=(e,r)=>e.link&&Dm(e.link,r)?!0:e.children?e.children.some(n=>Wi(n,r)):!1,Vi=e=>!Gn(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Fm={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Bm=({docsRepo:e,editLinkPattern:r})=>{if(r)return r;const n=Vi(e);return n!==null?Fm[n]:null},Um=({docsRepo:e,docsBranch:r,docsDir:n,filePathRelative:a,editLinkPattern:o})=>{if(!a)return null;const t=Bm({docsRepo:e,editLinkPattern:o});return t?t.replace(/:repo/,Gn(e)?e:`https://github.com/${e}`).replace(/:branch/,r).replace(/:path/,di(`${li(n)}/${a}`)):null},Hm={key:0,class:"navbar-items"},Wm=ue({__name:"NavbarItems",setup(e){const r=()=>{const d=Zr(),u=vn(),p=vi(),f=Do(),w=Wp(),S=Ue();return M(()=>{const q=Object.keys(p.value.locales);if(q.length<2)return[];const b=d.currentRoute.value.path,y=d.currentRoute.value.fullPath;return[{text:`${S.value.selectLanguageText}`,ariaLabel:`${S.value.selectLanguageAriaLabel??S.value.selectLanguageText}`,children:q.map(j=>{var D,$;const V=((D=p.value.locales)==null?void 0:D[j])??{},K=(($=w.value.locales)==null?void 0:$[j])??{},R=`${V.lang}`,g=K.selectLanguageName??R;let H;if(R===f.value.lang)H=y;else{const _=b.replace(u.value,j);d.getRoutes().some(I=>I.path===_)?H=y.replace(b,_):H=K.home??j}return{text:g,link:H}})}]})},n=()=>{const d=Ue(),u=M(()=>d.value.repo),p=M(()=>u.value?Vi(u.value):null),f=M(()=>u.value&&!Gn(u.value)?`https://github.com/${u.value}`:u.value),w=M(()=>f.value?d.value.repoLabel?d.value.repoLabel:p.value===null?"Source":p.value:null);return M(()=>!f.value||!w.value?[]:[{text:w.value,link:f.value}])},a=d=>be(d)?$o(d):d.children?{...d,children:d.children.map(a)}:d,o=()=>{const d=Ue();return M(()=>(d.value.navbar||[]).map(a))},t=fe(!1),s=o(),c=r(),i=n(),l=M(()=>[...s.value,...c.value,...i.value]);return Ui(Mn.MOBILE,d=>{window.innerWidth<d?t.value=!0:t.value=!1}),(d,u)=>l.value.length?(B(),Q("nav",Hm,[(B(!0),Q(Pe,null,Lr(l.value,p=>(B(),Q("div",{key:p.text,class:"navbar-item"},[p.children?(B(),Te(Mm,{key:0,item:p,class:Je(t.value?"mobile":"")},null,8,["item","class"])):(B(),Te(br,{key:1,item:p},null,8,["item"]))]))),128))])):_e("v-if",!0)}}),Ji=ke(Wm,[["__file","NavbarItems.vue"]]),Vm=["title"],Jm={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Gm=Bl('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),$m=[Gm],Ym={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Zm=he("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Xm=[Zm],Km=ue({__name:"ToggleColorModeButton",setup(e){const r=Ue(),n=Go(),a=()=>{n.value=!n.value};return(o,t)=>(B(),Q("button",{class:"toggle-color-mode-button",title:ee(r).toggleColorMode,onClick:a},[ha((B(),Q("svg",Jm,$m,512)),[[ya,!ee(n)]]),ha((B(),Q("svg",Ym,Xm,512)),[[ya,ee(n)]])],8,Vm))}}),Qm=ke(Km,[["__file","ToggleColorModeButton.vue"]]),eh=["title"],rh=he("div",{class:"icon","aria-hidden":"true"},[he("span"),he("span"),he("span")],-1),nh=[rh],ah=ue({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const r=Ue();return(n,a)=>(B(),Q("div",{class:"toggle-sidebar-button",title:ee(r).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=o=>n.$emit("toggle"))},nh,8,eh))}}),oh=ke(ah,[["__file","ToggleSidebarButton.vue"]]),th=ue({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const r=Ue(),n=fe(null),a=fe(null),o=fe(0),t=M(()=>o.value?{maxWidth:o.value+"px"}:{});Ui(Mn.MOBILE,c=>{var l;const i=s(n.value,"paddingLeft")+s(n.value,"paddingRight");window.innerWidth<c?o.value=0:o.value=n.value.offsetWidth-i-(((l=a.value)==null?void 0:l.offsetWidth)||0)});function s(c,i){var u,p,f;const l=(f=(p=(u=c==null?void 0:c.ownerDocument)==null?void 0:u.defaultView)==null?void 0:p.getComputedStyle(c,null))==null?void 0:f[i],d=Number.parseInt(l,10);return Number.isNaN(d)?0:d}return(c,i)=>{const l=yr("NavbarSearch");return B(),Q("header",{ref_key:"navbar",ref:n,class:"navbar"},[ne(oh,{onToggle:i[0]||(i[0]=d=>c.$emit("toggle-sidebar"))}),he("span",{ref_key:"navbarBrand",ref:a},[ne(_m)],512),he("div",{class:"navbar-items-wrapper",style:Fn(t.value)},[Se(c.$slots,"before"),ne(Ji,{class:"can-hide"}),Se(c.$slots,"after"),ee(r).colorModeSwitch?(B(),Te(Qm,{key:0})):_e("v-if",!0),ne(l)],4)],512)}}}),sh=ke(th,[["__file","Navbar.vue"]]),ih={class:"page-meta"},ch={key:0,class:"meta-item edit-link"},lh={key:1,class:"meta-item last-updated"},dh={class:"meta-item-label"},uh={class:"meta-item-info"},ph={key:2,class:"meta-item contributors"},mh={class:"meta-item-label"},hh={class:"meta-item-info"},gh=["title"],fh=ue({__name:"PageMeta",setup(e){const r=()=>{const i=Ue(),l=Ar(),d=fr();return M(()=>{if(!(d.value.editLink??i.value.editLink??!0))return null;const{repo:p,docsRepo:f=p,docsBranch:w="main",docsDir:S="",editLinkText:q}=i.value;if(!f)return null;const b=Um({docsRepo:f,docsBranch:w,docsDir:S,filePathRelative:l.value.filePathRelative,editLinkPattern:d.value.editLinkPattern??i.value.editLinkPattern});return b?{text:q??"Edit this page",link:b}:null})},n=()=>{const i=Ue(),l=Ar(),d=fr();return M(()=>{var f,w;return!(d.value.lastUpdated??i.value.lastUpdated??!0)||!((f=l.value.git)!=null&&f.updatedTime)?null:new Date((w=l.value.git)==null?void 0:w.updatedTime).toLocaleString()})},a=()=>{const i=Ue(),l=Ar(),d=fr();return M(()=>{var p;return d.value.contributors??i.value.contributors??!0?((p=l.value.git)==null?void 0:p.contributors)??null:null})},o=Ue(),t=r(),s=n(),c=a();return(i,l)=>{const d=yr("ClientOnly");return B(),Q("footer",ih,[ee(t)?(B(),Q("div",ch,[ne(br,{class:"meta-item-label",item:ee(t)},null,8,["item"])])):_e("v-if",!0),ee(s)?(B(),Q("div",lh,[he("span",dh,Ae(ee(o).lastUpdatedText)+": ",1),ne(d,null,{default:Oe(()=>[he("span",uh,Ae(ee(s)),1)]),_:1})])):_e("v-if",!0),ee(c)&&ee(c).length?(B(),Q("div",ph,[he("span",mh,Ae(ee(o).contributorsText)+": ",1),he("span",hh,[(B(!0),Q(Pe,null,Lr(ee(c),(u,p)=>(B(),Q(Pe,{key:p},[he("span",{class:"contributor",title:`email: ${u.email}`},Ae(u.name),9,gh),p!==ee(c).length-1?(B(),Q(Pe,{key:0},[Or(", ")],64)):_e("v-if",!0)],64))),128))])])):_e("v-if",!0)])}}}),bh=ke(fh,[["__file","PageMeta.vue"]]),vh={key:0,class:"page-nav"},yh={class:"inner"},wh={key:0,class:"prev"},Sh={key:1,class:"next"},Ph=ue({__name:"PageNav",setup(e){const r=i=>i===!1?null:be(i)?$o(i):No(i)?i:!1,n=(i,l,d)=>{const u=i.findIndex(p=>p.link===l);if(u!==-1){const p=i[u+d];return p!=null&&p.link?p:null}for(const p of i)if(p.children){const f=n(p.children,l,d);if(f)return f}return null},a=fr(),o=Yo(),t=Xr(),s=M(()=>{const i=r(a.value.prev);return i!==!1?i:n(o.value,t.path,-1)}),c=M(()=>{const i=r(a.value.next);return i!==!1?i:n(o.value,t.path,1)});return(i,l)=>s.value||c.value?(B(),Q("nav",vh,[he("p",yh,[s.value?(B(),Q("span",wh,[ne(br,{item:s.value},null,8,["item"])])):_e("v-if",!0),c.value?(B(),Q("span",Sh,[ne(br,{item:c.value},null,8,["item"])])):_e("v-if",!0)])])):_e("v-if",!0)}}),qh=ke(Ph,[["__file","PageNav.vue"]]),xh={class:"page"},kh={class:"theme-default-content"},_h=ue({__name:"Page",setup(e){return(r,n)=>{const a=yr("Content");return B(),Q("main",xh,[Se(r.$slots,"top"),he("div",kh,[Se(r.$slots,"content-top"),ne(a),Se(r.$slots,"content-bottom")]),ne(bh),ne(qh),Se(r.$slots,"bottom")])}}}),Eh=ke(_h,[["__file","Page.vue"]]),jh=["onKeydown"],Th={class:"sidebar-item-children"},Ch=ue({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const r=e,{item:n,depth:a}=Ea(r),o=Xr(),t=Zr(),s=M(()=>Wi(n.value,o)),c=M(()=>({"sidebar-item":!0,"sidebar-heading":a.value===0,active:s.value,collapsible:n.value.collapsible})),i=M(()=>n.value.collapsible?s.value:!0),[l,d]=zp(i.value),u=f=>{n.value.collapsible&&(f.preventDefault(),d())},p=t.afterEach(f=>{Hn(()=>{l.value=i.value})});return Vn(()=>{p()}),(f,w)=>{var q;const S=yr("SidebarItem",!0);return B(),Q("li",null,[ee(n).link?(B(),Te(br,{key:0,class:Je(c.value),item:ee(n)},null,8,["class","item"])):(B(),Q("p",{key:1,tabindex:"0",class:Je(c.value),onClick:u,onKeydown:qd(u,["enter"])},[Or(Ae(ee(n).text)+" ",1),ee(n).collapsible?(B(),Q("span",{key:0,class:Je(["arrow",ee(l)?"down":"right"])},null,2)):_e("v-if",!0)],42,jh)),(q=ee(n).children)!=null&&q.length?(B(),Te(Hi,{key:2},{default:Oe(()=>[ha(he("ul",Th,[(B(!0),Q(Pe,null,Lr(ee(n).children,b=>(B(),Te(S,{key:`${ee(a)}${b.text}${b.link}`,item:b,depth:ee(a)+1},null,8,["item","depth"]))),128))],512),[[ya,ee(l)]])]),_:1})):_e("v-if",!0)])}}}),zh=ke(Ch,[["__file","SidebarItem.vue"]]),Ah={key:0,class:"sidebar-items"},Ih=ue({__name:"SidebarItems",setup(e){const r=Xr(),n=Yo();return He(()=>{er(()=>r.hash,a=>{const o=document.querySelector(".sidebar");if(!o)return;const t=document.querySelector(`.sidebar a.sidebar-item[href="${r.path}${a}"]`);if(!t)return;const{top:s,height:c}=o.getBoundingClientRect(),{top:i,height:l}=t.getBoundingClientRect();i<s?t.scrollIntoView(!0):i+l>s+c&&t.scrollIntoView(!1)})}),(a,o)=>ee(n).length?(B(),Q("ul",Ah,[(B(!0),Q(Pe,null,Lr(ee(n),t=>(B(),Te(zh,{key:`${t.text}${t.link}`,item:t},null,8,["item"]))),128))])):_e("v-if",!0)}}),Lh=ke(Ih,[["__file","SidebarItems.vue"]]),Rh={class:"sidebar"},Oh=ue({__name:"Sidebar",setup(e){return(r,n)=>(B(),Q("aside",Rh,[ne(Ji),Se(r.$slots,"top"),ne(Lh),Se(r.$slots,"bottom")]))}}),Nh=ke(Oh,[["__file","Sidebar.vue"]]),Mh=ue({__name:"Layout",setup(e){const r=Ar(),n=fr(),a=Ue(),o=M(()=>n.value.navbar!==!1&&a.value.navbar!==!1),t=Yo(),s=fe(!1),c=q=>{s.value=typeof q=="boolean"?q:!s.value},i={x:0,y:0},l=q=>{i.x=q.changedTouches[0].clientX,i.y=q.changedTouches[0].clientY},d=q=>{const b=q.changedTouches[0].clientX-i.x,y=q.changedTouches[0].clientY-i.y;Math.abs(b)>Math.abs(y)&&Math.abs(b)>40&&(b>0&&i.x<=80?c(!0):c(!1))},u=M(()=>[{"no-navbar":!o.value,"no-sidebar":!t.value.length,"sidebar-open":s.value},n.value.pageClass]);let p;He(()=>{p=Zr().afterEach(()=>{c(!1)})}),za(()=>{p()});const f=Di(),w=f.resolve,S=f.pending;return(q,b)=>(B(),Q("div",{class:Je(["theme-container",u.value]),onTouchstart:l,onTouchend:d},[Se(q.$slots,"navbar",{},()=>[o.value?(B(),Te(sh,{key:0,onToggleSidebar:c},{before:Oe(()=>[Se(q.$slots,"navbar-before")]),after:Oe(()=>[Se(q.$slots,"navbar-after")]),_:3})):_e("v-if",!0)]),he("div",{class:"sidebar-mask",onClick:b[0]||(b[0]=y=>c(!1))}),Se(q.$slots,"sidebar",{},()=>[ne(Nh,null,{top:Oe(()=>[Se(q.$slots,"sidebar-top")]),bottom:Oe(()=>[Se(q.$slots,"sidebar-bottom")]),_:3})]),Se(q.$slots,"page",{},()=>[ee(n).home?(B(),Te(xm,{key:0})):(B(),Te(Jn,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:ee(w),onBeforeLeave:ee(S)},{default:Oe(()=>[(B(),Te(Eh,{key:ee(r).path},{top:Oe(()=>[Se(q.$slots,"page-top")]),"content-top":Oe(()=>[Se(q.$slots,"page-content-top")]),"content-bottom":Oe(()=>[Se(q.$slots,"page-content-bottom")]),bottom:Oe(()=>[Se(q.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),Dh=ke(Mh,[["__file","Layout.vue"]]),Fh={class:"theme-container"},Bh={class:"page"},Uh={class:"theme-default-content"},Hh=he("h1",null,"404",-1),Wh=ue({__name:"NotFound",setup(e){const r=vn(),n=Ue(),a=n.value.notFound??["Not Found"],o=()=>a[Math.floor(Math.random()*a.length)],t=n.value.home??r.value,s=n.value.backToHome??"Back to home";return(c,i)=>{const l=yr("RouterLink");return B(),Q("div",Fh,[he("main",Bh,[he("div",Uh,[Hh,he("blockquote",null,Ae(o()),1),ne(l,{to:ee(t)},{default:Oe(()=>[Or(Ae(ee(s)),1)]),_:1},8,["to"])])])])}}}),Vh=ke(Wh,[["__file","NotFound.vue"]]);const Jh=Sr({enhance({app:e,router:r}){e.component("Badge",fp),e.component("CodeGroup",bp),e.component("CodeGroupItem",Sp),e.component("AutoLinkExternalIcon",()=>{const a=e.component("ExternalLinkIcon");return a?le(a):null}),e.component("NavbarSearch",()=>{const a=e.component("Docsearch")||e.component("SearchBox");return a?le(a):null});const n=r.options.scrollBehavior;r.options.scrollBehavior=async(...a)=>(await Di().wait(),n(...a))},setup(){Vp(),$p()},layouts:{Layout:Dh,NotFound:Vh}}),Gh={enhance:({app:e})=>{e.component("CCLicense-component",re(()=>z(()=>import("./CCLicense-component-1c01b7a4.js"),[]))),e.component("DocumentCover-component",re(()=>z(()=>import("./DocumentCover-component-82c7df06.js"),[]))),e.component("DownloadPDF-component",re(()=>z(()=>import("./DownloadPDF-component-62b5d51f.js"),[])))}};/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var Br=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ta=function(r){return r.tagName==="IMG"},$h=function(r){return NodeList.prototype.isPrototypeOf(r)},ca=function(r){return r&&r.nodeType===1},is=function(r){var n=r.currentSrc||r.src;return n.substr(-4).toLowerCase()===".svg"},cs=function(r){try{return Array.isArray(r)?r.filter(ta):$h(r)?[].slice.call(r).filter(ta):ca(r)?[r].filter(ta):typeof r=="string"?[].slice.call(document.querySelectorAll(r)).filter(ta):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Yh=function(r){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=r,n},Zh=function(r){var n=r.getBoundingClientRect(),a=n.top,o=n.left,t=n.width,s=n.height,c=r.cloneNode(),i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return c.removeAttribute("id"),c.style.position="absolute",c.style.top=a+i+"px",c.style.left=o+l+"px",c.style.width=t+"px",c.style.height=s+"px",c.style.transform="",c},en=function(r,n){var a=Br({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(r,a);var o=document.createEvent("CustomEvent");return o.initCustomEvent(r,a.bubbles,a.cancelable,a.detail),o},Xh=function e(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(_){function I(){}_(I,I)},o=function(_){var I=_.target;if(I===H){w();return}T.indexOf(I)!==-1&&S({target:I})},t=function(){if(!(V||!g.original)){var _=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(K-_)>R.scrollOffset&&setTimeout(w,150)}},s=function(_){var I=_.key||_.keyCode;(I==="Escape"||I==="Esc"||I===27)&&w()},c=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=_;if(_.background&&(H.style.background=_.background),_.container&&_.container instanceof Object&&(I.container=Br({},R.container,_.container)),_.template){var L=ca(_.template)?_.template:document.querySelector(_.template);I.template=L}return R=Br({},R,I),T.forEach(function(ie){ie.dispatchEvent(en("medium-zoom:update",{detail:{zoom:D}}))}),D},i=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Br({},R,_))},l=function(){for(var _=arguments.length,I=Array(_),L=0;L<_;L++)I[L]=arguments[L];var ie=I.reduce(function(W,oe){return[].concat(W,cs(oe))},[]);return ie.filter(function(W){return T.indexOf(W)===-1}).forEach(function(W){T.push(W),W.classList.add("medium-zoom-image")}),j.forEach(function(W){var oe=W.type,te=W.listener,Me=W.options;ie.forEach(function(Re){Re.addEventListener(oe,te,Me)})}),D},d=function(){for(var _=arguments.length,I=Array(_),L=0;L<_;L++)I[L]=arguments[L];g.zoomed&&w();var ie=I.length>0?I.reduce(function(W,oe){return[].concat(W,cs(oe))},[]):T;return ie.forEach(function(W){W.classList.remove("medium-zoom-image"),W.dispatchEvent(en("medium-zoom:detach",{detail:{zoom:D}}))}),T=T.filter(function(W){return ie.indexOf(W)===-1}),D},u=function(_,I){var L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T.forEach(function(ie){ie.addEventListener("medium-zoom:"+_,I,L)}),j.push({type:"medium-zoom:"+_,listener:I,options:L}),D},p=function(_,I){var L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T.forEach(function(ie){ie.removeEventListener("medium-zoom:"+_,I,L)}),j=j.filter(function(ie){return!(ie.type==="medium-zoom:"+_&&ie.listener.toString()===I.toString())}),D},f=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=_.target,L=function(){var W={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},oe=void 0,te=void 0;if(R.container)if(R.container instanceof Object)W=Br({},W,R.container),oe=W.width-W.left-W.right-R.margin*2,te=W.height-W.top-W.bottom-R.margin*2;else{var Me=ca(R.container)?R.container:document.querySelector(R.container),Re=Me.getBoundingClientRect(),We=Re.width,De=Re.height,Pr=Re.left,qr=Re.top;W=Br({},W,{width:We,height:De,left:Pr,top:qr})}oe=oe||W.width-R.margin*2,te=te||W.height-R.margin*2;var ir=g.zoomedHd||g.original,Ie=is(ir)?oe:ir.naturalWidth||oe,x=is(ir)?te:ir.naturalHeight||te,U=ir.getBoundingClientRect(),O=U.top,G=U.left,de=U.width,m=U.height,h=Math.min(Math.max(de,Ie),oe)/de,v=Math.min(Math.max(m,x),te)/m,P=Math.min(h,v),k=(-G+(oe-de)/2+R.margin+W.left)/P,E=(-O+(te-m)/2+R.margin+W.top)/P,F="scale("+P+") translate3d("+k+"px, "+E+"px, 0)";g.zoomed.style.transform=F,g.zoomedHd&&(g.zoomedHd.style.transform=F)};return new a(function(ie){if(I&&T.indexOf(I)===-1){ie(D);return}var W=function We(){V=!1,g.zoomed.removeEventListener("transitionend",We),g.original.dispatchEvent(en("medium-zoom:opened",{detail:{zoom:D}})),ie(D)};if(g.zoomed){ie(D);return}if(I)g.original=I;else if(T.length>0){var oe=T;g.original=oe[0]}else{ie(D);return}if(g.original.dispatchEvent(en("medium-zoom:open",{detail:{zoom:D}})),K=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,V=!0,g.zoomed=Zh(g.original),document.body.appendChild(H),R.template){var te=ca(R.template)?R.template:document.querySelector(R.template);g.template=document.createElement("div"),g.template.appendChild(te.content.cloneNode(!0)),document.body.appendChild(g.template)}if(g.original.parentElement&&g.original.parentElement.tagName==="PICTURE"&&g.original.currentSrc&&(g.zoomed.src=g.original.currentSrc),document.body.appendChild(g.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),g.original.classList.add("medium-zoom-image--hidden"),g.zoomed.classList.add("medium-zoom-image--opened"),g.zoomed.addEventListener("click",w),g.zoomed.addEventListener("transitionend",W),g.original.getAttribute("data-zoom-src")){g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("srcset"),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading"),g.zoomedHd.src=g.zoomed.getAttribute("data-zoom-src"),g.zoomedHd.onerror=function(){clearInterval(Me),console.warn("Unable to reach the zoom image target "+g.zoomedHd.src),g.zoomedHd=null,L()};var Me=setInterval(function(){g.zoomedHd.complete&&(clearInterval(Me),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",w),document.body.appendChild(g.zoomedHd),L())},10)}else if(g.original.hasAttribute("srcset")){g.zoomedHd=g.zoomed.cloneNode(),g.zoomedHd.removeAttribute("sizes"),g.zoomedHd.removeAttribute("loading");var Re=g.zoomedHd.addEventListener("load",function(){g.zoomedHd.removeEventListener("load",Re),g.zoomedHd.classList.add("medium-zoom-image--opened"),g.zoomedHd.addEventListener("click",w),document.body.appendChild(g.zoomedHd),L()})}else L()})},w=function(){return new a(function(_){if(V||!g.original){_(D);return}var I=function L(){g.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(g.zoomed),g.zoomedHd&&document.body.removeChild(g.zoomedHd),document.body.removeChild(H),g.zoomed.classList.remove("medium-zoom-image--opened"),g.template&&document.body.removeChild(g.template),V=!1,g.zoomed.removeEventListener("transitionend",L),g.original.dispatchEvent(en("medium-zoom:closed",{detail:{zoom:D}})),g.original=null,g.zoomed=null,g.zoomedHd=null,g.template=null,_(D)};V=!0,document.body.classList.remove("medium-zoom--opened"),g.zoomed.style.transform="",g.zoomedHd&&(g.zoomedHd.style.transform=""),g.template&&(g.template.style.transition="opacity 150ms",g.template.style.opacity=0),g.original.dispatchEvent(en("medium-zoom:close",{detail:{zoom:D}})),g.zoomed.addEventListener("transitionend",I)})},S=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=_.target;return g.original?w():f({target:I})},q=function(){return R},b=function(){return T},y=function(){return g.original},T=[],j=[],V=!1,K=0,R=n,g={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(r)==="[object Object]"?R=r:(r||typeof r=="string")&&l(r),R=Br({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},R);var H=Yh(R.background);document.addEventListener("click",o),document.addEventListener("keyup",s),document.addEventListener("scroll",t),window.addEventListener("resize",w);var D={open:f,close:w,toggle:S,update:c,clone:i,attach:l,detach:d,on:u,off:p,getOptions:q,getImages:b,getZoomedImage:y};return D};function Kh(e,r){r===void 0&&(r={});var n=r.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Qh=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Kh(Qh);const eg=Xh,rg=Symbol("mediumZoom");const ng=":not(a) > img",ag={},og=500,tg=Sr({enhance({app:e,router:r}){const n=eg(ag);n.refresh=(a=ng)=>{n.detach(),n.attach(a)},e.provide(rg,n),r.afterEach(()=>{setTimeout(()=>n.refresh(),og)})}}),sg=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,ig=(e,r)=>r.some(n=>{if(be(n))return n===e.key;const{key:a,ctrl:o=!1,shift:t=!1,alt:s=!1}=n;return a===e.key&&o===e.ctrlKey&&t===e.shiftKey&&s===e.altKey}),cg=/[^\x00-\x7F]/,lg=e=>e.split(/\s+/g).map(r=>r.trim()).filter(r=>!!r),ls=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),ds=(e,r)=>{const n=r.join(" "),a=lg(e);if(cg.test(e))return a.some(s=>n.toLowerCase().indexOf(s)>-1);const o=e.endsWith(" ");return new RegExp(a.map((s,c)=>a.length===c+1&&!o?`(?=.*\\b${ls(s)})`:`(?=.*\\b${ls(s)}\\b)`).join("")+".+","gi").test(n)},dg=({input:e,hotKeys:r})=>{if(r.value.length===0)return;const n=a=>{e.value&&ig(a,r.value)&&!sg(a.target)&&(a.preventDefault(),e.value.focus())};He(()=>{document.addEventListener("keydown",n)}),Vn(()=>{document.removeEventListener("keydown",n)})},ug=[{title:"Installation notes",headers:[{level:2,title:"1. Arquitectura",slug:"_1-arquitectura",link:"#_1-arquitectura",children:[{level:3,title:"1.1 Entorno de desarrollo",slug:"_1-1-entorno-de-desarrollo",link:"#_1-1-entorno-de-desarrollo",children:[]},{level:3,title:"1.2 Entorno de pruebas",slug:"_1-2-entorno-de-pruebas",link:"#_1-2-entorno-de-pruebas",children:[]},{level:3,title:"1.3 Entorno de producción",slug:"_1-3-entorno-de-produccion",link:"#_1-3-entorno-de-produccion",children:[]}]},{level:2,title:"2. Instalación del entorno",slug:"_2-instalacion-del-entorno",link:"#_2-instalacion-del-entorno",children:[]},{level:2,title:"No hacer caso a partir de aquí...",slug:"no-hacer-caso-a-partir-de-aqui",link:"#no-hacer-caso-a-partir-de-aqui",children:[]}],path:"/InstallationNotes.html",pathLocale:"/",extraFields:[`---\r
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
> npm i\r
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
- text: SAD (English) →\r
  link: /en/\r
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
`]},{title:"SAD - Página  de documentación",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[`---\r
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
  link: /es/ethical_hacking/\r
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
  link: /es/ethical_hacking/\r
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
`]},{title:"1.1. Understanding Ethical Hacking & Penetration Testing",headers:[{level:2,title:"1.1.1. Overview",slug:"_1-1-1-overview",link:"#_1-1-1-overview",children:[]},{level:2,title:"1.1.1. Descripción general",slug:"_1-1-1-descripcion-general",link:"#_1-1-1-descripcion-general",children:[]},{level:2,title:"1.1.1. Descripció general",slug:"_1-1-1-descripcio-general",link:"#_1-1-1-descripcio-general",children:[]},{level:2,title:"1.1.3. Activity Lab - Researching PenTesting Careers",slug:"_1-1-3-activity-lab-researching-pentesting-careers",link:"#_1-1-3-activity-lab-researching-pentesting-careers",children:[]},{level:2,title:"1.1.3. Actividad Laboratorio - Investigación de carreras de PenTesting",slug:"_1-1-3-actividad-laboratorio-investigacion-de-carreras-de-pentesting",link:"#_1-1-3-actividad-laboratorio-investigacion-de-carreras-de-pentesting",children:[]},{level:2,title:"1.1.3. Activitat Laboratori - Investigació de carreres de PenTesting",slug:"_1-1-3-activitat-laboratori-investigacio-de-carreres-de-pentesting",link:"#_1-1-3-activitat-laboratori-investigacio-de-carreres-de-pentesting",children:[]},{level:2,title:"1.1.4. Threat Actors",slug:"_1-1-4-threat-actors",link:"#_1-1-4-threat-actors",children:[]},{level:2,title:"1.1.4. Atacantes",slug:"_1-1-4-atacantes",link:"#_1-1-4-atacantes",children:[]},{level:2,title:"1.1.4. Atacants",slug:"_1-1-4-atacants",link:"#_1-1-4-atacants",children:[]}],path:"/ca/ethical_hacking/a%20UnderstandingETandPT.html",pathLocale:"/ca/",extraFields:[`---\r
title: 1.1. Understanding Ethical Hacking & Penetration Testing\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
export_on_save:\r
 markdown: true\r
---\r
\r
# 1.1. Understanding Ethical Hacking & Penetration Testing\r
# 1.1. Comprendiendo el hacking ético y las pruebas de penetración\r
# 1.1. Comprendre el hacking ètic i les proves de penetració\r
\r
## 1.1.1. Overview\r
## 1.1.1. Descripción general\r
## 1.1.1. Descripció general\r
\r
As a refresher, the term ethical hacker describes a person who acts as an attacker and evaluates the security posture of a computer network for the purpose of minimizing risk. The NIST Computer Security Resource Center (CSRC) defines a hacker as an “unauthorized user who attempts to or gains access to an information system.” Now, we all know that the term hacker has been used in many different ways and has many different definitions. Most people in a computer technology field would consider themselves hackers based on the simple fact that they like to tinker. This is obviously not a malicious thing. So, the key factor here in defining ethical versus md:no-line-numbersthical hacking is that the latter involves malicious intent. The permission to attack or permission to test is crucial and what will keep you out of trouble! This permission to attack is often referred to as “the scope” of the test (what you are allowed and not allowed to test). More on this later in this module.\r
\r
A modo de recordatorio, el término hacker ético describe a una persona que actúa como atacante y evalúa la postura de seguridad de una red informática con el propósito de minimizar el riesgo. El Centro de Recursos de Seguridad Informática (CSRC) del Instituto Nacional de Estándares y Tecnología (NIST) define a un hacker como un "usuario no autorizado que intenta o accede a un sistema de información". Ahora, todos sabemos que el término hacker se ha utilizado de muchas maneras diferentes y tiene muchas definiciones diferentes. La mayoría de las personas en un campo de tecnología informática se considerarían hackers en base al simple hecho de que les gusta trastear. Obviamente, esto no es algo malicioso. Por lo tanto, el factor clave aquí para definir el hacking ético frente al no ético es que este último implica una intención maliciosa. ¡La autorización para atacar o la autorización para probar es crucial y lo que te mantendrá fuera de problemas! Esta autorización para atacar a menudo se denomina "el alcance" de la prueba (lo que se le permite y no se le permite probar). Más sobre esto más adelante en este módulo.\r
\r
Com a recordatori , el terme hacker ètic descriu una persona que actua com a atacant i avalua la postura de seguretat d'una xarxa informàtica amb la finalitat de minimitzar el risc. El Centre de Recursos de Seguretat Informàtica (CSRC) de l'Institut Nacional d'Estàndards i Tecnologia (NIST) defineix a un hacker com un "usuari no autoritzat que intenta o accedeix a un sistema d'informació". Ara, tots sabem que el terme hacker s'ha utilitzat de moltes maneres diferents i té moltes definicions diferents. La majoria de les persones en un camp de tecnologia informàtica es considerarien hackers en base al simple fet que els agrada trastejar. Òbviament, això no és quelcom maliciós. Per tant, el factor clau aquí per definir el hacking ètic front al no ètic és que aquest últim implica una intenció maliciosa. L'autorització per atacar o l'autorització per provar és crucial i el que et mantindrà fora de problemes! Aquesta autorització per atacar sovint es denomina "l'abast" de la prova (el que se li permet i no se li permet provar). Més sobre això més endavant en aquest mòdul.\r
\r
A security researcher looking for vulnerabilities in products, applications, or web services is considered an ethical hacker if he or she responsibly discloses those vulnerabilities to the vendors or owners of the targeted research. However, the same type of “research” performed by someone who then uses the same vulnerability to gain unauthorized access to a target network/system would be considered a md:no-line-numbersthical hacker. We could even go so far as to say that someone who finds a vulnerability and discloses it publicly without working with a vendor is considered a md:no-line-numbersthical hacker – because this could lead to the compromise of networks/systems by others who use this information in a malicious way.\r
\r
Un investigador de seguridad que busca vulnerabilidades en productos, aplicaciones o servicios web se considera un hacker ético si divulga responsablemente esas vulnerabilidades a los proveedores o propietarios de la investigación objetivo. Sin embargo, el mismo tipo de "investigación" realizada por alguien que luego usa la misma vulnerabilidad para obtener acceso no autorizado a una red / sistema objetivo se consideraría un hacker no ético. Incluso podríamos ir tan lejos como para decir que alguien que encuentra una vulnerabilidad y la divulga públicamente sin trabajar con un proveedor se considera un hacker no ético, porque esto podría conducir a la compromiso de redes / sistemas por otros que usan esta información de manera maliciosa.\r
\r
Un investigador de seguretat que busca vulnerabilitats en productes, aplicacions o serveis web es considera un hacker ètic si divulga responsablement aquestes vulnerabilitats als proveïdors o propietaris de la investigació objectiu. No obstant això, el mateix tipus d '"investigació" realitzada per algú que després utilitza la mateixa vulnerabilitat per obtenir accés no autoritzat a una xarxa / sistema objectiu es consideraria un hacker no ètic. Fins i tot podríem anar tan lluny com per dir que algú que troba una vulnerabilitat i la divulga públicament sense treballar amb un proveïdor es considera un hacker no ètic, perquè això podria conduir a la compromís de xarxes / sistemes per altres que utilitzen aquesta informació de manera maliciosa.\r
\r
The truth is that as an ethical hacker, you use the same tools to find vulnerabilities and exploit targets as do md:no-line-numbersthical hackers. However, as an ethical hacker, you would typically report your findings to the vendor or customer you are helping to make the network more secure. You would also try to avoid performing any tests or exploits that might be destructive in nature.\r
\r
La realidad es que como hacker ético, utilizas las mismas herramientas para encontrar vulnerabilidades y explotar objetivos que los hackers no éticos. Sin embargo, como hacker ético, normalmente informarías tus hallazgos al proveedor o cliente al que estás ayudando a hacer que la red sea más segura. También intentarías evitar realizar pruebas o exploits que puedan ser destructivos por naturaleza.\r
\r
La realitat es que com a hacker ètic, utilitzeu les mateixes eines per trobar vulnerabilitats i explotar objectius que els hackers no ètics. No obstant això, com a hacker ètic, normalment informaríeu els vostres descobriments al proveïdor o client al qual esteu ajudant a fer que la xarxa sigui més segura. També intentaríeu evitar realitzar proves o exploits que puguin ser destructius per naturalesa.\r
\r
An ethical hacker’s goal is to analyze the security posture of a network’s or system’s infrastructure in an effort to identify and possibly exploit any security weaknesses found and then determine if a compromise is possible. This process is called security penetration testing or ethical hacking.\r
\r
Un hacker ético tiene como objetivo analizar la postura de seguridad de la infraestructura de una red o sistema en un esfuerzo por identificar y posiblemente explotar cualquier debilidad de seguridad encontrada y luego determinar si es posible un compromiso. Este proceso se llama prueba de penetración de seguridad o hacking ético.\r
\r
Un hacker ètic te com objectiu analitzar la postura de seguretat de la infraestructura d'una xarxa o sistema en un esforç per identificar i possiblement explotar qualsevol debilitat de seguretat trobada i després determinar si és possible un compromís. Aquest procés es diu prova de penetració de seguretat o hacking ètic.\r
\r
::: tip\r
Hacking is NOT a Crime ( [hackingisnotacrime.org](hackingisnotacrime.org) ) is a nonprofit organization that attempts to raise awareness about the pejorative use of the term hacker. Historically, hackers have been portrayed as evil or illegal. Luckily, a lot of people already know that hackers are curious individuals who want to understand how things work and how to make them more secure. The organization’s goal is to educate the public about the positive aspects of hacking and to dispel the negative connotations associated with the term.\r
\r
Hackear NO es un crimen ( [hackingisnotacrime.org](hackingisnotacrime.org) ) es una organización sin fines de lucro que intenta crear conciencia sobre el uso peyorativo del término hacker. Históricamente, los hackers han sido retratados como malvados o ilegales. Afortunadamente, mucha gente ya sabe que los hackers son personas curiosas que quieren entender cómo funcionan las cosas y cómo hacerlas más seguras. El objetivo de la organización es educar al público sobre los aspectos positivos del hacking y disipar las connotaciones negativas asociadas con el término.\r
\r
Hackejar NO és un crim ( [hackingisnotacrime.org](hackingisnotacrime.org) ) és una organització sense ànim de lucre que intenta crear consciència sobre l'ús pejoratiu del terme hacker. Històricament, els hackers han estat retratats com a malvats o il·legals. Afortunadament, molta gent ja sap que els hackers són persones curioses que volen entendre com funcionen les coses i com fer-les més segures. L'objectiu de l'organització és educar al públic sobre els aspectes positius del hacking i dissipar les connotacions negatives associades amb el terme.\r
:::\r
\r
# 1.1.2. Why Do We Need to Do Penetration Testing?\r
# 1.1.2. ¿Por qué necesitamos hacer pruebas de penetración?\r
# 1.1.2. Per què necessitem fer proves de penetració?\r
\r
So, why do we need penetration testing? Well, first of all, as someone who is responsible for securing and defending a network/system, you want to find any possible paths of compromise before the bad guys do. For years we have developed and implemented many different defensive techniques (for instance, antivirus, firewalls, intrusion prevention systems [IPSs], anti-malware). We have deployed defense-in-depth as a method to secure and defend our networks. But how do we know if those defenses really work and whether they are enough to keep out the bad guys? How valuable is the data that we are protecting, and are we protecting the right things? These are some of the questions that should be answered by a penetration test. If you build a fence around your yard with the intent of keeping your dog from getting out, maybe it only needs to be 4 feet tall. However, if your concern is not the dog getting out but an intruder getting in, then you need a different fence – one that would need to be much taller than 4 feet. Depending on what you are protecting, you might also want razor wire on the top of the fence to deter the bad guys even more. When it comes to information security, we need to do the same type of assessments on our networks and systems. We need to determine what it is we are protecting and whether our defenses can hold up to the threats that are imposed on them. This is where penetration testing comes in. Simply implementing a firewall, an IPS, anti-malware, a VPN, a web application firewall (WAF), and other modern security defenses isn’t enough. You also need to test their validity. And you need to do this on a regular basis. As you know, networks and systems change constantly. This means the attack surface can change as well, and when it does, you need to consider reevaluating the security posture by way of a penetration test.\r
\r
Entonces, ¿por qué necesitamos pruebas de penetración? Bueno, en primer lugar, como alguien que es responsable de asegurar y defender una red / sistema, desea encontrar cualquier posible camino de compromiso antes de que lo hagan los tipos malos. Durante años hemos desarrollado e implementado muchas técnicas defensivas diferentes (por ejemplo, antivirus, firewalls, sistemas de prevención de intrusiones [IPS], anti-malware). Hemos implementado la defensa en profundidad como un método para asegurar y defender nuestras redes. Pero, ¿cómo sabemos si esas defensas realmente funcionan y si son suficientes para mantener alejados a los tipos malos? ¿Qué tan valiosos son los datos que estamos protegiendo y estamos protegiendo las cosas correctas? Estas son algunas de las preguntas que debería responder una prueba de penetración. Si construye una cerca alrededor de su patio con la intención de evitar que su perro salga, tal vez solo necesite tener 4 pies de altura. Sin embargo, si su preocupación no es que el perro salga sino que un intruso entre, entonces necesita una cerca diferente, una que necesitaría ser mucho más alta que 4 pies. Dependiendo de lo que esté protegiendo, es posible que también desee alambre de púas en la parte superior de la cerca para disuadir aún más a los tipos malos. Cuando se trata de seguridad de la información, necesitamos hacer el mismo tipo de evaluaciones en nuestras redes y sistemas. Necesitamos determinar qué es lo que estamos protegiendo y si nuestras defensas pueden resistir las amenazas que se les imponen. Aquí es donde entran las pruebas de penetración. Simplemente implementar un firewall, un IPS, anti-malware, una VPN, un firewall de aplicaciones web (WAF) y otras defensas de seguridad modernas no es suficiente. También debe probar su validez. Y necesitas hacer esto de forma regular. Como saben, las redes y los sistemas cambian constantemente. Esto significa que la superficie de ataque también puede cambiar, y cuando lo hace, debe considerar revaluar la postura de seguridad mediante una prueba de penetración.\r
\r
Llavors, per què necessitem proves de penetració? Bé, en primer lloc, com a algú que és responsable d'assegurar i defensar una xarxa / sistema, desitja trobar qualsevol possible camí de compromís abans que ho facin els tipus dolents. Durant anys hem desenvolupat i implementat moltes tècniques defensives diferents (per exemple, antivirus, firewalls, sistemes de prevenció d'intrusions [IPS], anti-malware). Hem implementat la defensa en profunditat com un mètode per assegurar i defensar les nostres xarxes. Però, com sabem si aquestes defenses realment funcionen i si són suficients per mantenir allunyats els tipus dolents? Quan valuosos són les dades que estem protegint i estem protegint les coses correctes? Aquestes són algunes de les preguntes que hauria de respondre una prova de penetració. Si construeix una tanca al voltant del seu pati amb la intenció d'evitar que el seu gos surti, potser només necessita tenir 4 peus d'altura. No obstant això, si la seva preocupació no és que el gos surti sinó que un intrús entri, llavors necessita una tanca diferent, una que necessitaria ser molt més alta que 4 peus. Depenent del que estigui protegint, és possible que també vulgueu filferro a la part superior de la tanca per dissuadir encara més als tipus dolents. Quan es tracta de seguretat de la informació, necessitem fer el mateix tipus d'avaluacions a les nostres xarxes i sistemes. Necessitem determinar què és el que estem protegint i si les nostres defenses poden resistir les amenaces que se'ls imposen. Aquí és on entren les proves de penetració. Simplement implementar un firewall, un IPS, anti-malware, una VPN, un firewall d'ap\r
\r
1.1.3 Lab - Researching PenTesting Careers\r
1.1.3 Laboratorio - Investigación de carreras de PenTesting\r
1.1.3 Laboratori - Investigació de carreres de PenTesting\r
\r
It is important for you to understand the employment landscape and the different roles and responsibilities that cybersecurity professions include. A good general reference to explore for descriptions of different job roles is The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). It offers a visual way to discover and compare different job roles in our profession.\r
\r
Es importante que comprendas el panorama laboral y las diferentes funciones y responsabilidades que incluyen las profesiones de ciberseguridad. Una buena referencia general para explorar las descripciones de los diferentes roles de trabajo es la The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). Ofrece una forma visual de descubrir y comparar diferentes roles de trabajo en nuestra profesión.\r
\r
És important que entengueu el panorama laboral i les diferents funcions i responsabilitats que inclouen les professions de ciberseguretat. Una bona referència general per explorar les descripcions dels diferents rols de treball és la The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). Ofereix una forma visual de descobrir i comparar diferents rols de treball en la nostra professió.\r
\r
## 1.1.3. Activity Lab - Researching PenTesting Careers\r
## 1.1.3. Actividad Laboratorio - Investigación de carreras de PenTesting\r
## 1.1.3. Activitat Laboratori - Investigació de carreres de PenTesting\r
\r
::: detail Lab 1.1.3\r
In this activity, you discover and compare ethical hacking jobs that are listed on various job boards.\r
\r
En esta actividad, descubrirá y comparará trabajos de hacking ético que figuran en varios tableros de trabajo.\r
\r
En aquesta activitat, descobrireu i comparareu treballs de hacking ètic que figuren en diversos taulells de treball.\r
\r
In this lab, you will complete the following objectives:\r
\r
- Conduct a Penetration Tester Job Search\r
- Analyze Penetration Tester Job Requirements\r
- Discover Resources to Further Your Career\r
\r
En esta práctica, conseguirás los siguientes objetivos:\r
\r
- Realizar una búsqueda de trabajo de Penetration Tester\r
- Analizar los requisitos de trabajo de Penetration Tester\r
- Descubrir recursos para avanzar en tu carrera\r
\r
En aquest laboratori, aconseguiràs els següents objectius:\r
\r
- Realitzar una cerca de feina de Penetration Tester\r
- Analitzeu els requisits de feina de Penetration Tester\r
- Descobriu recursos per avançar en la vostra carrera\r
:::\r
\r
## 1.1.4. Threat Actors\r
## 1.1.4. Atacantes\r
## 1.1.4. Atacants\r
\r
Before you can understand how an ethical hacker or penetration tester can mimic a threat actor (or malicious attacker), you need to understand the different types of threat actors. The following are the most common types of malicious attackers we see today. Select each for more information.\r
\r
Antes de poder comprender cómo un hacker ético o un probador de penetración puede imitar a un actor de amenazas (o atacante malicioso), debe comprender los diferentes tipos de actores de amenazas. Los siguientes son los tipos más comunes de atacantes maliciosos que vemos hoy en día. Seleccione cada uno para obtener más información.\r
\r
Abans de poder comprendre com un hacker ètic o un provador de penetració pot imitar un actor de amenaces (o atacant maliciós), heu de comprendre els diferents tipus d'actors de amenaces. Els següents són els tipus més comuns d'atacants maliciosos que veiem avui en dia. Seleccioneu cadascun per obtenir més informació.\r
\r
:::: code-group\r
::: code-group-item Organized Crime\r
\r
\`\`\`md:no-line-numbers\r
\r
**Organized Crime**\r
Several years ago, the cybercrime industry took over the number-one spot, previously held by the drug trade, for the most profitable illegal industry. As you can imagine, it has attracted a new type of cybercriminal. Just as it did back in the days of Prohibition, organized crime goes where the money is. Organized crime consists of very well-funded and motivated groups that will typically use any and all of the latest attack techniques. Whether that is ransomware or data theft, if it can be monetized, organized crime will use it.\r
\r
**Crimen organizado**\r
Hace varios años, la industria del cibercrimen se apoderó del primer lugar, anteriormente ocupado por el narcotráfico, por la industria ilegal más rentable. Como puedes imaginar, ha atraído a un nuevo tipo de ciberdelincuente. Tal como lo hizo en los días de la Prohibición, el crimen organizado va donde está el dinero. El crimen organizado consiste en grupos muy bien financiados y motivados que típicamente usarán todas y cada una de las últimas técnicas de ataque. Ya sea ransomware o robo de datos, si se puede monetizar, el crimen organizado lo usará.\r
\r
**Crim organitzat**\r
Fa diversos anys, la indústria del cibercrimen es va apoderar del primer lloc, anteriorment ocupat pel narcotràfic, per la indústria il·legal més rendible. Com podeu imaginar, ha atret a un nou tipus de ciberdelinqüent. Tal com ho va fer en els dies de la Prohibició, el crim organitzat va on està el diner. El crim organitzat consisteix en grups molt ben finançats i motivats que típicament utilitzaran totes i cadascuna de les últimes tècniques d'atac. Ja sigui ransomware o robatori de dades, si es pot monetitzar, el crim organitzat ho utilitzarà.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Hacktivists\r
\r
\`\`\`md:no-line-numbers\r
\r
**Hacktivists**\r
This type of threat actor is not motivated by money. Hacktivists are looking to make a point or to further their beliefs, using cybercrime as their method of attack. These types of attacks are often carried out by stealing sensitive data and then revealing it to the public for the purpose of embarrassing or financially affecting a target.\r
\r
**Hacktivistas**\r
Este tipo de actor de amenazas no está motivado por el dinero. Los hacktivistas buscan hacer un punto o promover sus creencias, utilizando el cibercrimen como su método de ataque. Estos tipos de ataques se llevan a cabo a menudo robando datos sensibles y luego revelándolos al público con el propósito de avergonzar o afectar financieramente a un objetivo.\r
\r
**Hacktivistes**\r
Aquest tipus d'actor de amenaces no està motivat pel diner. Els hacktivistes busquen fer un punt o promoure les seves creences, utilitzant el cibercrim com el seu mètode d'atac. Aquests tipus d'atacs es duen a terme sovint robant dades sensibles i després revelant-les al públic amb la finalitat d'avergonyir o afectar financerament a un objectiu.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item State-Sponsored Attackers\r
\r
\`\`\`md:no-line-numbers\r
\r
**State-Sponsored Attackers**\r
Cyber war and cyber espionage are two terms that fit into this category. Many governments around the world today use cyber attacks to steal information from their opponents and cause disruption. Many believe that the next Pearl Harbor will occur in cyberspace. That’s one of the reasons the United States declared cyberspace to be one of the operational domains that U.S. forces would be trained to defend.\r
\r
**Atacantes patrocinados por los estados**\r
La guerra cibernética y el espionaje cibernético son dos términos que se ajustan a esta categoría. Muchos gobiernos de todo el mundo utilizan hoy ataques cibernéticos para robar información de sus oponentes y causar interrupciones. Muchos creen que el próximo Pearl Harbor ocurrirá en el ciberespacio. Esa es una de las razones por las que Estados Unidos declaró que el ciberespacio sería uno de los dominios operativos para los que las fuerzas estadounidenses estarían capacitadas para defenderse.\r
\r
**Atacants patrocinats pels estats**\r
La guerra cibernètica i l'espionatge cibernètic són dos termes que s'ajusten a aquesta categoria. Molts governs d'arreu del món utilitzen avui atacs cibernètics per robar informació dels seus oponents i causar interrupcions. Molts creuen que el proper Pearl Harbor ocorrerà en el ciberespai. Aquesta és una de les raons per les quals els Estats Units van declarar que el ciberespai seria un dels dominis operatius per als quals les forces estatunidenques estarien capacitades per defensar-se.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Insider Threats\r
\r
\`\`\`md:no-line-numbers\r
\r
**Insider Threats**\r
An insider threat is a threat that comes from inside an organization. The motivations of these types of actors are normally different from those of many of the other common threat actors. Insider threats are often normal employees who are tricked into divulging sensitive information or mistakenly clicking on links that allow attackers to gain access to their computers. However, they could also be malicious insiders who are possibly motivated by revenge or money.\r
\r
**Amenazas internas**\r
Una amenaza interna es una amenaza que proviene de dentro de una organización. Las motivaciones de estos tipos de actores normalmente son diferentes de las de muchos de los otros actores de amenazas comunes. Las amenazas internas a menudo son empleados normales que son engañados para divulgar información confidencial o hacer clic por error en enlaces que permiten a los atacantes acceder a sus computadoras. Sin embargo, también podrían ser insiders maliciosos que posiblemente estén motivados por la venganza o el dinero.\r
\r
**Amenaces internes**\r
Una amenaça interna és una amenaça que prové de dins d'una organització. Les motivacions d'aquests tipus d'actors normalment són diferents de les de molts dels altres actors de amenaces comuns. Les amenaces internes sovint són empleats normals que són enganyats per divulgar informació confidencial o fer clic per error en enllaços que permeten als atacants accedir als seus ordinadors. No obstant això, també podrien ser insiders maliciosos que possiblement estiguin motivats per la venjança o el diner.\r
\r
\`\`\`\r
\r
:::\r
::::\r
`]},{title:"1.2. Exploring Penetration Testing Methodologies",headers:[{level:2,title:"1.2.1. Overview",slug:"_1-2-1-overview",link:"#_1-2-1-overview",children:[]},{level:2,title:"1.2.2 Why Do We Need to Follow a Methodology for Penetration Testing?",slug:"_1-2-2-why-do-we-need-to-follow-a-methodology-for-penetration-testing",link:"#_1-2-2-why-do-we-need-to-follow-a-methodology-for-penetration-testing",children:[]},{level:2,title:"1.2.3. Environmental Considerations",slug:"_1-2-3-environmental-considerations",link:"#_1-2-3-environmental-considerations",children:[]},{level:2,title:"1.2.1. Descripción general",slug:"_1-2-1-descripcion-general",link:"#_1-2-1-descripcion-general",children:[]},{level:2,title:"1.2.2 ¿Por qué necesitamos seguir una metodología para las pruebas de penetración?",slug:"_1-2-2-¿por-que-necesitamos-seguir-una-metodologia-para-las-pruebas-de-penetracion",link:"#_1-2-2-¿por-que-necesitamos-seguir-una-metodologia-para-las-pruebas-de-penetracion",children:[]},{level:2,title:"1.2.3. Consideraciones sobre en entorno",slug:"_1-2-3-consideraciones-sobre-en-entorno",link:"#_1-2-3-consideraciones-sobre-en-entorno",children:[]},{level:2,title:"1.2.1. Descripció general",slug:"_1-2-1-descripcio-general",link:"#_1-2-1-descripcio-general",children:[]},{level:2,title:"1.2.2 Per què necessitem seguir una metodologia per a les proves de penetració?",slug:"_1-2-2-per-que-necessitem-seguir-una-metodologia-per-a-les-proves-de-penetracio",link:"#_1-2-2-per-que-necessitem-seguir-una-metodologia-per-a-les-proves-de-penetracio",children:[]},{level:2,title:"1.2.3. Consideracions de l'entorn de proves",slug:"_1-2-3-consideracions-de-l-entorn-de-proves",link:"#_1-2-3-consideracions-de-l-entorn-de-proves",children:[]},{level:2,title:"1.2.4. Practice - Types of Penetration Tests",slug:"_1-2-4-practice-types-of-penetration-tests",link:"#_1-2-4-practice-types-of-penetration-tests",children:[]},{level:2,title:"1.2.5 Surveying Different Standards and Methodologies",slug:"_1-2-5-surveying-different-standards-and-methodologies",link:"#_1-2-5-surveying-different-standards-and-methodologies",children:[]}],path:"/ca/ethical_hacking/b%20Pentesting%20methodologies.html",pathLocale:"/ca/",extraFields:[`---\r
title: 1.2. Exploring Penetration Testing Methodologies\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
export_on_save:\r
 markdown: true\r
---\r
\r
# 1.2. Exploring Penetration Testing Methodologies\r
\r
## 1.2.1. Overview\r
\r
There is more to penetration testing than hacking away at a customer's network. A haphazard approach will result in haphazard results. It is important to follow well-known methods and standards in order to approach pentesting engagements in an organized, systematic way.\r
\r
You should understand the major documented methodologies and standards so that you can create strategies that draw on their strengths. Documenting your approach with the methodologies and standards that you used also provides accountability for our company and helps make our results defensible in case issues arise with our customers.\r
\r
The process of completing a penetration test varies based on many factors. The tools and techniques used to assess the security posture of a network or system also vary. The networks and systems being evaluated are often highly complex. Because of this, it is very easy when performing a penetration test to go off scope. This is where testing methodologies come in. They provide a framework for the penetration tester to follow to ensure that the test is completed in a consistent manner. They also provide a way to ensure that the test is completed in a way that is repeatable and defensible.\r
\r
## 1.2.2 Why Do We Need to Follow a Methodology for Penetration Testing?\r
\r
As just mentioned, scope creep is one reason for utilizing a specific methodology; however, there are many other reasons. For instance, when performing a penetration test for a customer, you must show that the methods you plan to use for testing are tried and true. By utilizing a known methodology, you are able to provide documentation of a specialized procedure that has been used by many people.\r
\r
## 1.2.3. Environmental Considerations\r
\r
There are, of course, a number of different types of penetration tests. Often they are combined in the overall scope of a penetration test; however, they can also be performed as individual tests as well.\r
\r
The following is a list of some of the most common environmental considerations for the types of penetration tests today:\r
\r
:::: code-group\r
::: code-group-item Network Infrastructure Tests\r
\r
\`\`\`md:no-line-numbers\r
\r
Network Infrastructure Tests\r
Testing of the network infrastructure can mean a few things. For the purposes of this course, we say it is focused on evaluating the security posture of the actual network infrastructure and how it is able to help defend against attacks. This often includes the switches, routers, firewalls, and supporting resources, such as authentication, authorization, and accounting (AAA) servers and IPSs. A penetration test on wireless infrastructure may sometimes be included in the scope of a network infrastructure test. However, additional types of tests beyond a wired network assessment would be performed. For instance, a wireless security tester would attempt to break into a network via the wireless network either by bypassing security mechanisms or breaking the cryptographic methods used to secure the traffic. Testing the wireless infrastructure helps an organization to determine weaknesses in the wireless deployment as well as the exposure. It often includes a detailed heat map of the signal disbursement.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Application-Based Tests\r
\r
\`\`\`md:no-line-numbers\r
\r
Application-Based Tests\r
This type of pen testing focuses on testing for security weaknesses in enterprise applications. These weaknesses can include but are not limited to misconfigurations, input validation issues, injection issues, and logic flaws. Because a web application is typically built on a web server with a back-end database, the testing scope normally includes the database as well. However, it focuses on gaining access to that supporting database through the web application compromise. A great resource that we mention a number of times in this book is the Open Web Application Security Project (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Testing in the Cloud\r
\r
\`\`\`md:no-line-numbers\r
\r
Penetration Testing in the Cloud\r
Cloud service providers (CSPs) such as Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP) have no choice but to take their security and compliance responsibilities very seriously. For instance, Amazon created the [Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model) to describe the AWS customers’ responsibilities and Amazon’s responsibilities in detail.\r
\r
The responsibility for cloud security depends on the type of cloud model (software as a service [SaaS], platform as a service [PaaS], or infrastructure as a service [IaaS]). For example, with IaaS, the customer (cloud consumer) is responsible for data, applications, runtime, middleware, virtual machines (VMs), containers, and operating systems in VMs. Regardless of the model used, cloud security is the responsibility of both the client and the cloud provider. These details need to be worked out before a cloud computing contract is signed. These contracts vary depending on the security requirements of the client. Considerations include disaster recovery, service-level agreements (SLAs), data integrity, and encryption. For example, is encryption provided end to end or just at the cloud provider? Also, who manages the encryption keys–the CSP or the client?\r
\r
Overall, you want to ensure that the CSP has the same layers of security (logical, physical, and administrative) in place that you would have for services you control. When performing penetration testing in the cloud, you must understand what you can do and what you cannot do. Most CSPs have detailed guidelines on how to perform security assessments and penetration testing in the cloud. Regardless, there are many potential threats when organizations move to a cloud model. For example, although your data is in the cloud, it must reside in a physical location somewhere. Your cloud provider should agree in writing to provide the level of security required for your customers. As an example, [the AWS Customer Support Policy for Penetration Testing](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note physical attacks vs. social engineering\r
Many penetration testers find the \`**physical aspect of testing** to be the most fun\` because they are essentially being paid to break into the facility of a target. This type of test can help expose any weaknesses in the physical perimeter as well as any security mechanisms that are in place, such as guards, gates, and fencing. The result should be an assessment of the external physical security controls. \`The majority of compromises today start with some kind of **social engineering attack**\`. This could be a phone call, an email, a website, an SMS message, and so on. It is important to test how your employees handle these types of situations. This type of test is often omitted from the scope of a penetration testing engagement mainly because it primarily involves testing people instead of the technology. In most cases, management does not agree with this type of approach. However, it is important to get a real-world view of the latest attack methods. The result of a social engineering test should be to assess the security awareness program so that you can enhance it. It should not be to identify individuals who fail the test. One of the tools that we talk about more in a later module is the Social-Engineer Toolkit (SET), created by Dave Kennedy. This is a great tool for performing social engineering testing campaigns.\r
:::\r
\r
::: tip Bug bounty programs\r
*Bug bounty* programs enable security researchers and penetration testers to get recognition (and often monetary compensation) for finding vulnerabilities in websites, applications, or any other types of systems. Companies like Microsoft, Apple, and Cisco and even government institutions such as the U.S. Department of Defense (DoD) use bug bounty programs to reward security professionals when they find vulnerabilities in their systems. Many security companies, such as HackerOne, Bugcrowd, Intigriti, and SynAck, provide platforms for businesses and security professionals to participate in bug bounty programs. These programs are different from traditional penetration testing engagements but have a similar goal: finding security vulnerabilities to allow the organization to fix them before malicious attackers are able to exploit such vulnerabilities. You can find different bug bounty tips and resources in this [GitHub repository](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties).\r
:::\r
\r
When talking about penetration testing methods, you are likely to hear the terms unknown-environment (previously known as black-box), known-environment (previously known as white-box), and partially known environment (previously known as gray-box) testing. These terms are used to describe the perspective from which the testing is performed, as well as the amount of information that is provided to the tester:\r
\r
:::: code-group\r
::: code-group-item Unknown-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Unknown-Environment Test\r
In an unknown-environment penetration test, the tester is typically provided only a very limited amount of information. For instance, the tester may be provided only the domain names and IP addresses that are in scope for a particular target. The idea of this type of limitation is to have the tester start out with the perspective that an external attacker might have. Typically, an attacker would first determine a target and then begin to gather information about the target, using public information, and gain more and more information to use in attacks. The tester would not have prior knowledge of the target’s organization and infrastructure. Another aspect of unknown-environment testing is that sometimes the network support personnel of the target may not be given information about exactly when the test is taking place. This allows for a defense exercise to take place as well, and it eliminates the issue of a target preparing for the test and not giving a real-world view of how the security posture really looks. \r
\r
This type of testing is often the most difficult for the tester because of the lack of information. However, it is also the most realistic because it is the closest to how an attacker would approach the target.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Known-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Known-Environment Test\r
In a known-environment penetration test, the tester starts out with a significant amount of information about the organization and its infrastructure. The tester would normally be provided things like network diagrams, IP addresses, configurations, and a set of user credentials. If the scope includes an application assessment, the tester might also be provided the source code of the target application. The idea of this type of test is to identify as many security holes as possible. In an unknown-environment test, the scope may be only to identify a path into the organization and stop there. With known-environment testing, the scope is typically much broader and includes internal network configuration auditing and scanning of desktop computers for defects. Time and money are typically deciding factors in the determination of which type of penetration test to complete. If a company has specific concerns about an application, a server, or a segment of the infrastructure, it can provide information about that specific target to decrease the scope and the amount of time spent on the test but still uncover the desired results. With the sophistication and capabilities of adversaries today, it is likely that most networks will be compromised at some point, and a white-box approach is not a bad option.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Partially Known-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Partially Known Environment Test\r
A partially known environment penetration test is somewhat of a hybrid approach between unknown- and known-environment tests. With partially known environment testing, the testers may be provided credentials but not full documentation of the network infrastructure. This would allow the testers to still provide results of their testing from the perspective of an external attacker’s point of view. Considering the fact that most compromises start at the client and work their way throughout the network, a good approach would be a scope where the testers start on the inside of the network and have access to a client machine. Then they could pivot throughout the network to determine what the impact of a compromise would be.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
# 1.2. Explorando metodologías de pruebas de penetración\r
\r
## 1.2.1. Descripción general\r
\r
Las pruebas de penetración son mucho más que hackear la red de un cliente. Un enfoque descuidado dará como resultado resultados descuidados. Es importante seguir métodos y estándares bien conocidos para abordar las pruebas de penetración de manera organizada y sistemática.\r
\r
Debe comprender las principales metodologías y estándares documentados para poder crear estrategias que aprovechen sus fortalezas. Documentar su enfoque con las metodologías y estándares que utilizó también proporciona responsabilidad para nuestra empresa y ayuda a que nuestros resultados sean defendibles en caso de que surjan problemas con nuestros clientes.\r
\r
El proceso de completar una prueba de penetración varía según muchos factores. Las herramientas y técnicas utilizadas para evaluar la postura de seguridad de una red o sistema también varían. Las redes y sistemas que se evalúan a menudo son muy complejos. Debido a esto, es muy fácil cuando se realiza una prueba de penetración para salir del alcance. Aquí es donde entran las metodologías de prueba. Proporcionan un marco para que el probador de penetración siga para asegurarse de que la prueba se complete de manera consistente. También proporcionan una forma de asegurarse de que la prueba se complete de una manera que sea repetible y defendible.\r
\r
## 1.2.2 ¿Por qué necesitamos seguir una metodología para las pruebas de penetración?\r
\r
Como se mencionó anteriormente, el alcance es una razón para utilizar una metodología específica; sin embargo, hay muchas otras razones. Por ejemplo, cuando realiza una prueba de penetración para un cliente, debe mostrar que los métodos que planea utilizar para las pruebas son probados y verdaderos. Al utilizar una metodología conocida, puede proporcionar documentación de un procedimiento especializado que ha sido utilizado por muchas personas.\r
\r
## 1.2.3. Consideraciones sobre en entorno\r
\r
Existen, por supuesto, una serie de tipos diferentes de pruebas de penetración. A menudo se combinan en el alcance general de una prueba de penetración; sin embargo, también se pueden realizar como pruebas individuales.\r
\r
La siguiente es una lista de algunas de las consideraciones sobre el entorno más comunes para los tipos de pruebas de penetración de hoy:\r
\r
:::: code-group\r
::: code-group-item Pruebas de infraestructura de red\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas de infraestructura de red\r
La prueba de la infraestructura de red puede significar algunas cosas. Para los fines de este curso, decimos que se centra en evaluar la postura de seguridad de la infraestructura de red real y en cómo puede ayudar a defenderse contra ataques. Esto a menudo incluye los conmutadores, enrutadores, firewalls y recursos de soporte, como la autenticación, la autorización y los servidores de contabilidad (AAA) y los IPS. Una prueba de penetración en la infraestructura inalámbrica a veces puede incluirse en el alcance de una prueba de infraestructura de red. Sin embargo, se realizarían tipos adicionales de pruebas más allá de una evaluación de red cableada. Por ejemplo, un probador de seguridad inalámbrica intentaría ingresar a una red a través de la red inalámbrica, ya sea mediante eludir los mecanismos de seguridad o romper los métodos criptográficos utilizados para asegurar el tráfico. Probar la infraestructura inalámbrica ayuda a una organización a determinar las debilidades en la implementación inalámbrica, así como la exposición. A menudo incluye un mapa de calor detallado de la distribución de la señal.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Pruebas basadas en aplicaciones\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas basadas en aplicaciones\r
Este tipo de prueba de penetración se centra en probar las debilidades de seguridad en las aplicaciones empresariales. Estas debilidades pueden incluir, entre otras, configuraciones incorrectas, problemas de validación de entrada, problemas de inyección y fallas de lógica. Debido a que una aplicación web generalmente se construye en un servidor web con una base de datos de respaldo, el alcance de las pruebas normalmente incluye la base de datos también. Sin embargo, se centra en obtener acceso a esa base de datos de soporte a través de la compromiso de la aplicación web. Un gran recurso que mencionamos varias veces en este libro es el Proyecto de seguridad de aplicaciones web abiertas (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Pruebas en la nube\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas de penetración en la nube\r
Los proveedores de servicios en la nube (CSP), como Azure, Amazon Web Services (AWS) y Google Cloud Platform (GCP), no tienen más remedio que tomarse muy en serio sus responsabilidades de seguridad y cumplimiento. Por ejemplo, Amazon creó el [Modelo de responsabilidad compartida](https://aws.amazon.com/compliance/shared-responsibility-model) para describir las responsabilidades de los clientes de AWS y las responsabilidades de Amazon en detalle.\r
\r
La responsabilidad de la seguridad en la nube depende del tipo de modelo de nube (software como servicio [SaaS], plataforma como servicio [PaaS] o infraestructura como servicio [IaaS]). Por ejemplo, con IaaS, el cliente (consumidor de la nube) es responsable de los datos, las aplicaciones, el tiempo de ejecución, el middleware, las máquinas virtuales (VM), los contenedores y los sistemas operativos en las VM. Independientemente del modelo utilizado, la seguridad en la nube es responsabilidad tanto del cliente como del proveedor de la nube. Estos detalles deben resolverse antes de firmar un contrato de computación en la nube. Estos contratos varían según los requisitos de seguridad del cliente. Las consideraciones incluyen la recuperación ante desastres, los acuerdos de nivel de servicio (SLA), la integridad de los datos y el cifrado. Por ejemplo, ¿se proporciona el cifrado de extremo a extremo o solo en el proveedor de la nube? Además, ¿quién administra las claves de cifrado, el CSP o el cliente?\r
\r
En general, desea asegurarse de que el CSP tenga las mismas capas de seguridad (lógica, física y administrativa) en su lugar que tendría para los servicios que controla. Al realizar pruebas de penetración en la nube, debe comprender lo que puede hacer y lo que no puede hacer. La mayoría de los CSP tienen pautas detalladas sobre cómo realizar evaluaciones de seguridad y pruebas de penetración en la nube. Independientemente, existen muchas amenazas potenciales cuando las organizaciones se mudan a un modelo de nube. Por ejemplo, aunque sus datos están en la nube, deben residir en una ubicación física en algún lugar. Su proveedor de la nube debe aceptar por escrito proporcionar el nivel de seguridad requerido para sus clientes. Como ejemplo [la Política de soporte al cliente de AWS para pruebas de penetración](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note ataques físicos vs. ingeniería social\r
Muchos pentesters encuentran la parte física de las pruebas como la más divertida porque esencialmente se les paga por irrumpir en la instalación de un objetivo. Este tipo de prueba puede ayudar a exponer cualquier debilidad en el perímetro físico, así como cualquier mecanismo de seguridad que esté en su lugar, como guardias, puertas y cercas. El resultado debe ser una evaluación de los controles de seguridad física externos. La mayoría de las compromisos de hoy en día comienzan con algún tipo de ataque de ingeniería social. Esto podría ser una llamada telefónica, un correo electrónico, un sitio web, un mensaje SMS, y así sucesivamente. Es importante probar cómo sus empleados manejan este tipo de situaciones. Este tipo de prueba a menudo se omite del alcance de una prueba de penetración principalmente porque implica principalmente probar a las personas en lugar de la tecnología. En la mayoría de los casos, la gerencia no está de acuerdo con este tipo de enfoque. Sin embargo, es importante obtener una visión del mundo real de los últimos métodos de ataque. El resultado de una prueba de ingeniería social debe ser evaluar el programa de concienciación de seguridad para que pueda mejorarlo. No debería ser identificar a las personas que no aprueban la prueba. Una de las herramientas de las que hablamos más adelante en un módulo posterior es el Social-Engineer Toolkit (SET), creado por Dave Kennedy. Esta es una gran herramienta para realizar campañas de prueba de ingeniería social.\r
:::\r
\r
::: tip Programas de recompensas por errores\r
Los programas de recompensas por errores permiten a los investigadores de seguridad y a los probadores de penetración obtener reconocimiento (y a menudo compensación monetaria) por encontrar vulnerabilidades en sitios web, aplicaciones o cualquier otro tipo de sistemas. Empresas como Microsoft, Apple y Cisco e incluso instituciones gubernamentales como el Departamento de Defensa de EE. UU. (DoD) utilizan programas de recompensas por errores para recompensar a los profesionales de la seguridad cuando encuentran vulnerabilidades en sus sistemas. Muchas empresas de seguridad, como HackerOne, Bugcrowd, Intigriti y SynAck, proporcionan plataformas para que las empresas y los profesionales de la seguridad participen en programas de recompensas por errores. Estos programas son diferentes de las pruebas de penetración tradicionales pero tienen un objetivo similar: encontrar vulnerabilidades de seguridad para permitir que la organización las solucione antes de que los atacantes maliciosos puedan explotar dichas vulnerabilidades. Hay diferentes consejos y recursos acerca de recompensas por errores en este [repositorio GitHub](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties)\r
:::\r
\r
Cuando se habla de métodos de prueba de penetración, es probable que escuche los términos entorno desconocido (anteriormente conocido como caja negra), entorno conocido (anteriormente conocido como caja blanca) y entorno parcialmente conocido (anteriormente conocido como caja gris) prueba. Estos términos se utilizan para describir la perspectiva desde la cual se realiza la prueba, así como la cantidad de información que se proporciona al probador:\r
\r
:::: code-group\r
::: code-group-item Prueba de entorno desconocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno desconocido\r
En una prueba de penetración de entorno desconocido, el probador generalmente solo recibe una cantidad muy limitada de información. Por ejemplo, el probador puede recibir solo los nombres de dominio y las direcciones IP que están dentro del alcance de un objetivo en particular. La idea de este tipo de limitación es que el probador comience con la perspectiva que un atacante externo podría tener. Típicamente, un atacante primero determinaría un objetivo y luego comenzaría a recopilar información sobre el objetivo, utilizando información pública y obteniendo más y más información para usar en ataques. El probador no tendría conocimiento previo de la organización y la infraestructura del objetivo. Otro aspecto de las pruebas de entorno desconocido es que a veces al personal de soporte de red del objetivo no se le da información sobre cuándo exactamente se está llevando a cabo la prueba. Esto permite que también se lleve a cabo un ejercicio de defensa y elimina el problema de que un objetivo se prepare para la prueba y no dé una visión del mundo real de cómo se ve realmente la postura de seguridad.\r
\r
Este tipo de prueba suele ser la más difícil para el probador debido a la falta de información. Sin embargo, también es el más realista porque es el más cercano a cómo un atacante se acercaría al objetivo.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prueba de entorno conocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno conocido\r
En una prueba de penetración de entorno conocido, el probador comienza con una cantidad significativa de información sobre la organización y su infraestructura. Normalmente, al probador se le proporcionarían cosas como diagramas de red, direcciones IP, configuraciones y un conjunto de credenciales de usuario. Si el alcance incluye una evaluación de la aplicación, el probador también podría recibir el código fuente de la aplicación objetivo. La idea de este tipo de prueba es identificar la mayor cantidad de agujeros de seguridad posible. En una prueba de entorno desconocido, el alcance puede ser solo identificar un camino hacia la organización y detenerse allí. Con las pruebas de entorno conocido, el alcance suele ser mucho más amplio e incluye auditorías de configuración de red interna y escaneo de computadoras de escritorio en busca de defectos. El tiempo y el dinero son factores decisivos típicos en la determinación de qué tipo de prueba de penetración completar. Si una empresa tiene preocupaciones específicas sobre una aplicación, un servidor o un segmento de la infraestructura, puede proporcionar información sobre ese objetivo específico para disminuir el alcance y la cantidad de tiempo dedicado a la prueba, pero aún así descubrir los resultados deseados. Con la sofisticación y las capacidades de los adversarios de hoy, es probable que la mayoría de las redes se vean comprometidas en algún momento, y un enfoque de caja blanca no es una mala opción.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prueba de entorno parcialmente conocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno parcialmente conocido\r
Una prueba de penetración de entorno parcialmente conocido es algo así como un enfoque híbrido entre pruebas de entorno desconocido y conocido. Con las pruebas de entorno parcialmente conocido, los probadores pueden recibir credenciales pero no documentación completa de la infraestructura de red. Esto permitiría a los probadores seguir proporcionando resultados de sus pruebas desde la perspectiva del punto de vista de un atacante externo. Teniendo en cuenta el hecho de que la mayoría de las infracciones comienzan en el cliente y se abren camino en toda la red, un buen enfoque sería un alcance donde los probadores comiencen en el interior de la red y tengan acceso a una máquina cliente. Luego podrían pivotar en toda la red para determinar cuál sería el impacto de una violación.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
# 1.2. Explorant metodologies de proves de penetració\r
\r
## 1.2.1. Descripció general\r
\r
Les proves de penetració son molt més que hackejar la xarxa d'un client. Un enfocament descuidat donarà com a resultat resultats descuidats. És important seguir mètodes i estàndards ben coneguts per abordar les proves de penetració de manera organitzada i sistemàtica.\r
\r
Ha de comprendre les principals metodologies i estàndards documentats per poder crear estratègies que aprofitin les seves fortaleses. Documentar el seu enfocament amb les metodologies i estàndards que va utilitzar també proporciona responsabilitat per a la nostra empresa i ajuda a que els nostres resultats siguin defensables en cas que sorgeixin problemes amb els nostres clients.\r
\r
El procés de completar una prova de penetració varia segons molts factors. Les eines i tècniques utilitzades per avaluar la postura de seguretat d'una xarxa o sistema també varien. Les xarxes i sistemes que s'avaluen sovint són molt complexos. A causa d'això, és molt fàcil quan es realitza una prova de penetració per sortir de l'abast. Aquí és on entren les metodologies de prova. Proporcionen un marc perquè el provador de penetració segueixi per assegurar-se que la prova es completi de manera consistent. També proporcionen una manera de assegurar-se que la prova es completi d'una manera que sigui repetible i defensable.\r
\r
## 1.2.2 Per què necessitem seguir una metodologia per a les proves de penetració?\r
\r
Com s'ha esmentat anteriorment, l'abast és una raó per utilitzar una metodologia específica; no obstant això, hi ha moltes altres raons. Per exemple, quan realitza una prova de penetració per a un client, ha de mostrar que els mètodes que planeja utilitzar per a les proves són provats i veritables. En utilitzar una metodologia coneguda, pot proporcionar documentació d'un procediment especialitzat que ha estat utilitzat per moltes persones.\r
\r
## 1.2.3. Consideracions de l'entorn de proves\r
\r
Hi ha, per descomptat, una sèrie de tipus diferents de proves de penetració. Sovint es combinen en l'abast general d'una prova de penetració; no obstant això, també es poden realitzar com a proves individuals.\r
\r
La següent és una llista d'algunes de les consideracions de l'entorn de proves més comunes per als tipus de proves de penetració d'avui:\r
\r
:::: code-group\r
::: code-group-item Proves d'infraestructura de xarxa\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves d'infraestructura de xarxa\r
La prova de la infraestructura de xarxa pot significar algunes coses. Per als fins d'aquest curs, diem que es centra en avaluar la postura de seguretat de la infraestructura de xarxa real i en com pot ajudar a defensar-se contra atacs. Això sovint inclou els commutadors, encaminadors, firewalls i recursos de suport, com l'autenticació, l'autorització i els servidors de comptabilitat (AAA) i els IPS. Una prova de penetració en la infraestructura sense fil a vegades pot incloure's en l'abast d'una prova d'infraestructura de xarxa. No obstant això, es realitzarien tipus addicionals de proves més enllà d'una avaluació de xarxa cablejada. Per exemple, un provador de seguretat sense fil intentaria ingressar a una xarxa a través de la xarxa sense fil, ja sigui mitjançant l'elusió dels mecanismes de seguretat o trencant els mètodes criptogràfics utilitzats per assegurar el trànsit. Provar la infraestructura sense fil ajuda una organització a determinar les debilitats en la implementació sense fil, així com l'exposició. Sovint inclou un mapa de calor detallat de la distribució de la senyal.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Proves basades en aplicacions\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves basades en aplicacions\r
Aquest tipus de prova de penetració es centra en provar les debilitats de seguretat en les aplicacions empresarials. Aquestes debilitats poden incloure, entre altres, configuracions incorrectes, problemes de validació d'entrada, problemes d'injecció i fallades de lògica. Degut a que una aplicació web generalment es construeix en un servidor web amb una base de dades de suport, l'abast de les proves normalment inclou la base de dades també. No obstant això, es centra en obtenir accés a aquesta base de dades de suport a través de la compromís de l'aplicació web. Un gran recurs que mencionem diverses vegades en aquest llibre és el Projecte de seguretat d'aplicacions web obertes (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Proves al núvol\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves de penetració al núvol\r
Els proveïdors de serveis al núvol (CSP), com Azure, Amazon Web Services (AWS) i Google Cloud Platform (GCP), no tenen més remei que prendre's molt seriosament les seves responsabilitats de seguretat i compliment. Per exemple, Amazon va crear el [Model de responsabilitat compartida](https://aws.amazon.com/compliance/shared-responsibility-model) per descriure les responsabilitats dels clients d'AWS i les responsabilitats d'Amazon en detall. \r
\r
La responsabilitat de la seguretat al núvol depèn del tipus de model de núvol (programari com a servei [SaaS], plataforma com a servei [PaaS] o infraestructura com a servei [IaaS]). Per exemple, amb IaaS, el client (consumidor de la núvol) és responsable de les dades, les aplicacions, el temps d'execució, el middleware, les màquines virtuals (VM), els contenidors i els sistemes operatius en les VM. Independentment del model utilitzat, la seguretat al núvol és responsabilitat tant del client com del proveïdor de la núvol. Aquests detalls s'han de resoldre abans de signar un contracte de computació al núvol. Aquests contractes varien segons els requisits de seguretat del client. Les consideracions inclouen la recuperació davant de desastres, els acords de nivell de servei (SLA), la integritat de les dades i el xifrat. Per exemple, es proporciona el xifrat d'extrem a extrem o només en el proveïdor de la núvol? A més, qui administra les claus de xifrat, el CSP o el client?\r
\r
En general, desitja assegurar-se que el CSP tingui les mateixes capes de seguretat (lògica, física i administrativa) en el seu lloc que tindria per als serveis que controla. En realitzar proves de penetració al núvol, ha de comprendre què pot fer i què no pot fer. La majoria dels CSP tenen pautes detallades sobre com realitzar avaluacions de seguretat i proves de penetració al núvol. Independentment, hi ha moltes amenaces potencials quan les organitzacions es traslladen a un model de núvol. Per exemple, tot i que les seves dades estan al núvol, han de residir en una ubicació física en algun lloc. El seu proveïdor de la núvol ha d'acceptar per escrit proporcionar el nivell de seguretat requerit pels seus clients. Com a exemple, [la Política de suport al client d'AWS per a proves de penetració](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note atacs físics vs. enginyeria social\r
Molts pentesters troben l'aspecte físic de les proves com allò més divert perquè essencialment se'ls paga per irrompre en la instal·lació d'un objectiu. Aquest tipus de prova pot ajudar a exposar qualsevol debilitat en el perímetre físic, així com qualsevol mecanisme de seguretat que estigui en el seu lloc, com a guàrdies, portes i tanques. El resultat ha de ser una avaluació dels controls de seguretat física externs. La majoria de les compromisos d'avui en dia comencen amb algun tipus d'atac d'enginyeria social. Això podria ser una trucada telefònica, un correu electrònic, un lloc web, un missatge SMS, i així successivament. És important provar com els seus empleats manegen aquest tipus de situacions. Aquest tipus de prova sovint s'omet dels abast d'una prova de penetració principalment perquè implica principalment provar a les persones en lloc de la tecnologia. En la majoria dels casos, la gerència no està d'acord amb aquest tipus d'enfocament. No obstant això, és important obtenir una visió del món real dels últims mètodes d'atac. El resultat d'una prova d'enginyeria social ha d'ésser avaluar el programa de conscienciació de seguretat perquè pugui millorar-lo. No hauria de ser identificar a les persones que no aproven la prova. Una de les eines de les quals parlem més endavant en un mòdul posterior és el Social-Engineer Toolkit (SET), creat per Dave Kennedy. Aquesta és una gran eina per realitzar campanyes de prova d'enginyeria social.\r
:::\r
\r
::: tip Programes de recompenses per errors\r
Els programes de recompenses per errors permeten als investigadors de seguretat i als provadors de penetració obtenir reconeixement (i sovint compensació monetària) per trobar vulnerabilitats en llocs web, aplicacions o qualsevol altre tipus de sistemes. Empreses com Microsoft, Apple i Cisco i fins i tot institucions governamentals com el Departament de Defensa dels EUA (DoD) utilitzen programes de recompenses per errors per recompensar els professionals de la seguretat quan troben vulnerabilitats en els seus sistemes. Moltes empreses de seguretat, com HackerOne, Bugcrowd, Intigriti i SynAck, proporcionen plataformes perquè les empreses i els professionals de la seguretat participin en programes de recompenses per errors. Aquests programes són diferents de les proves de penetració tradicionals però tenen un objectiu similar: trobar vulnerabilitats de seguretat per permetre que l'organització les solucioni abans que els atacants maliciosos puguin explotar aquestes vulnerabilitats. Hi ha diferents consells i recursos sobre recompenses per errors en aquest [repositori GitHub](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties).\r
:::\r
\r
Quan es parla de mètodes de prova de penetració, és probable que escolti els termes entorn desconegut (anteriorment conegut com a caixa negra), entorn conegut (anteriorment conegut com a caixa blanca) i entorn parcialment conegut (anteriorment conegut com a caixa gris) prova. Aquests termes s'utilitzen per descriure la perspectiva des de la qual es realitza la prova, així com la quantitat d'informació que es proporciona al provador:\r
\r
:::: code-group\r
::: code-group-item Prova d'entorn desconegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn desconegut\r
En una prova de penetració d'entorn desconegut, el provador generalment només rep una quantitat molt limitada d'informació. Per exemple, el provador pot rebre només els noms de domini i les adreces IP que estan dins de l'abast d'un objectiu en particular. La idea d'aquest tipus de limitació és que el provador comenci amb la perspectiva que un atacant extern podria tenir. Típicament, un atacant primer determinaria un objectiu i després començaria a recopilar informació sobre l'objectiu, utilitzant informació pública i obtenint més i més informació per utilitzar en atacs. El provador no tindria coneixement previ de l'organització i la infraestructura de l'objectiu. Un altre aspecte de les proves d'entorn desconegut és que a vegades al personal de suport de xarxa de l'objectiu no se li dóna informació sobre quan exactament s'està duent a terme la prova. Això permet que també es dugui a terme un exercici de defensa i elimina el problema que un objectiu es prepari per a la prova i no doni una visió del món real de com es veu realment la postura de seguretat.\r
\r
Aquest tipus de prova sol ser la més difícil per al provador a causa de la manca d'informació. No obstant això, també és el més realista perquè és el més proper a com un atacant s'acostaria a l'objectiu.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prova d'entorn conegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn conegut\r
En una prova de penetració d'entorn conegut, el provador comença amb una quantitat significativa d'informació sobre l'organització i la seva infraestructura. Normalment, al provador se li proporcionarien coses com diagrames de xarxa, adreces IP, configuracions i un conjunt de credencials d'usuari. Si l'abast inclou una avaluació de l'aplicació, el provador també podria rebre el codi font de l'aplicació objectiu. La idea d'aquest tipus de prova és identificar la major quantitat de forats de seguretat possible. En una prova d'entorn desconegut, l'abast pot ser només identificar un camí cap a l'organització i aturar-se allà. Amb les proves d'entorn conegut, l'abast sol ser molt més ampli i inclou auditories de configuració de xarxa interna i escaneig d'ordinadors d'escriptori per defectes. El temps i els diners són factors decisius típics en la determinació de quin tipus de prova de penetració completar. Si una empresa té preocupacions específiques sobre una aplicació, un servidor o un segment de la infraestructura, pot proporcionar informació sobre aquest objectiu específic per disminuir l'abast i la quantitat de temps dedicat a la prova, però encara descobrir els resultats desitjats. Amb la sofisticació i les capacitats dels adversaris d'avui, és probable que la majoria de les xarxes es vegin compromeses en algun moment, i un enfocament de caixa blanca no és una mala opció.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prova d'entorn parcialment conegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn parcialment conegut\r
Una prova de penetració d'entorn parcialment conegut és quelcom així com un enfocament híbrid entre proves d'entorn desconegut i conegut. Amb les proves d'entorn parcialment conegut, els provadors poden rebre credencials però no documentació completa de la infraestructura de xarxa. Això permetria als provadors seguir proporcionant resultats de les seves proves des de la perspectiva del punt de vista d'un atacant extern. Tenint en compte el fet que la majoria de les infraccions comencen al client i s'obren camí a tota la xarxa, un bon enfocament seria un abast on els provadors comencin a l'interior de la xarxa i tinguin accés a una màquina client. Llavors podrien pivotar a tota la xarxa per determinar quin seria l'impacte d'una violació.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
## 1.2.4. Practice - Types of Penetration Tests\r
\r
## 1.2.5 Surveying Different Standards and Methodologies\r
\r
There are a number of penetration testing methodologies that have been around for a while and continue to be updated as new threats emerge.\r
\r
The following is a list of some of the most common penetration testing methodologies and other standards:\r
`]},{title:"1. Introduction to Ethical Hacking and Penetration Testing",headers:[],path:"/ca/ethical_hacking/",pathLocale:"/ca/",extraFields:[`---\r
title: 1. Introduction to Ethical Hacking and Penetration Testing\r
---\r
\r
# 1. Introduction to Ethical Hacking and Penetration Testing\r
# 1. Introducción al hacking ético y las pruebas de penetración\r
# 1. Introducció al hacking ètic i les proves de penetració\r
\r
Before we jump into how to perform penetration testing, you first need to understand some core concepts about the “art of hacking” that will help you understand the other concepts discussed throughout this course. For example, you need to understand the difference between ethical hacking and unethical hacking. The tools and techniques used in this field change rapidly, so understanding the most current threats and attacker motivations is also important. Some consider penetration testing an art; however, this art needs to start out with a methodology if it is to be effective. Furthermore, you need to spend some time understanding the different types of testing and the industry methods used. Finally, this is a hands-on concept, and you need to know how to get your hands dirty by properly building a lab environment for testing.\r
\r
Antes de sumergirnos en cómo realizar pruebas de penetración, primero debe comprender algunos conceptos básicos sobre el "arte del hacking" que lo ayudarán a comprender los otros conceptos que se discuten a lo largo de este curso. Por ejemplo, debe comprender la diferencia entre el hacking ético y el hacking no ético. Las herramientas y técnicas utilizadas en este campo cambian rápidamente, por lo que también es importante comprender las amenazas y las motivaciones de los atacantes más actuales. Algunos consideran que las pruebas de penetración son un arte; sin embargo, este arte debe comenzar con una metodología si quiere ser efectivo. Además, debe dedicar algo de tiempo a comprender los diferentes tipos de pruebas y los métodos utilizados en la industria. Finalmente, este es un concepto práctico y debe saber cómo ensuciarse las manos construyendo adecuadamente un entorno de laboratorio para las pruebas.\r
\r
Abans de submergir-nos en com realitzar proves de penetració, primer ha de comprendre alguns conceptes bàsics sobre l'"art del hacking" que l'ajudaran a comprendre els altres conceptes que es discuteixen al llarg d'aquest curs. Per exemple, ha de comprendre la diferència entre el hacking ètic i el hacking no ètic. Les eines i tècniques utilitzades en aquest camp canvien ràpidament, per la qual cosa també és important comprendre les amenaces i les motivacions dels atacants més actuals. Alguns consideren que les proves de penetració són un art; no obstant això, aquest art ha de començar amb una metodologia si vol ser efectiu. A més, ha de dedicar una mica de temps a comprendre els diferents tipus de proves i els mètodes utilitzats en la indústria. Finalment, aquest és un concepte pràctic i ha de saber com embrutar-se les mans construint adequadament un entorn de laboratori per a les proves.\r
\r
Module Objective: Explain the importance of methodological ethical hacking and penetration testing.\r
\r
Objetivo del módulo: Explique la importancia de la metodología de hacking ético y las pruebas de penetración.\r
\r
Objectiu del mòdul: Expliqueu la importància de la metodologia de hacking ètic i les proves de penetració.\r
\r
| Topic   | Objective |\r
|---|---|\r
| Understanding Ethical Hacking and Penetration testing | Explain the importance of ethical hacking and penetration testing |\r
| Exploring penetration testing methodologies | Explain different types of penetration testing methodologies and frameworks |\r
| Building a penetration testing lab | Build a penetration testing lab |\r
\r
| Tema   | Objetivo |\r
|---|---|\r
| Comprender el hacking ético y las pruebas de penetración | Explique la importancia del hacking ético y las pruebas de penetración |\r
| Explorar metodologías de pruebas de penetración | Explique los diferentes tipos de metodologías y marcos de pruebas de penetración |\r
| Creación de un laboratorio de pruebas de penetración | Construir un laboratorio de pruebas de penetración |\r
\r
| Tema   | Objectiu |\r
|---|---|\r
| Comprendre el hacking ètic i les proves de penetració | Expliqueu la importància del hacking ètic i les proves de penetració |\r
| Explorar metodologies de proves de penetració | Expliqueu els diferents tipus de metodologies i marcs de proves de penetració |\r
| Creació d'un laboratori de proves de penetració | Construir un laboratori de proves de penetració |\r
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
`]},{title:"1.1. Understanding Ethical Hacking & Penetration Testing",headers:[{level:2,title:"1.1.1. Overview",slug:"_1-1-1-overview",link:"#_1-1-1-overview",children:[]},{level:2,title:"1.1.1. Descripción general",slug:"_1-1-1-descripcion-general",link:"#_1-1-1-descripcion-general",children:[]},{level:2,title:"1.1.1. Descripció general",slug:"_1-1-1-descripcio-general",link:"#_1-1-1-descripcio-general",children:[]},{level:2,title:"1.1.3. Activity Lab - Researching PenTesting Careers",slug:"_1-1-3-activity-lab-researching-pentesting-careers",link:"#_1-1-3-activity-lab-researching-pentesting-careers",children:[]},{level:2,title:"1.1.3. Actividad Laboratorio - Investigación de carreras de PenTesting",slug:"_1-1-3-actividad-laboratorio-investigacion-de-carreras-de-pentesting",link:"#_1-1-3-actividad-laboratorio-investigacion-de-carreras-de-pentesting",children:[]},{level:2,title:"1.1.3. Activitat Laboratori - Investigació de carreres de PenTesting",slug:"_1-1-3-activitat-laboratori-investigacio-de-carreres-de-pentesting",link:"#_1-1-3-activitat-laboratori-investigacio-de-carreres-de-pentesting",children:[]},{level:2,title:"1.1.4. Threat Actors",slug:"_1-1-4-threat-actors",link:"#_1-1-4-threat-actors",children:[]},{level:2,title:"1.1.4. Atacantes",slug:"_1-1-4-atacantes",link:"#_1-1-4-atacantes",children:[]},{level:2,title:"1.1.4. Atacants",slug:"_1-1-4-atacants",link:"#_1-1-4-atacants",children:[]}],path:"/en/ethical_hacking/a%20UnderstandingETandPT.html",pathLocale:"/en/",extraFields:[`---\r
title: 1.1. Understanding Ethical Hacking & Penetration Testing\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
export_on_save:\r
 markdown: true\r
---\r
\r
# 1.1. Understanding Ethical Hacking & Penetration Testing\r
# 1.1. Comprendiendo el hacking ético y las pruebas de penetración\r
# 1.1. Comprendre el hacking ètic i les proves de penetració\r
\r
## 1.1.1. Overview\r
## 1.1.1. Descripción general\r
## 1.1.1. Descripció general\r
\r
As a refresher, the term ethical hacker describes a person who acts as an attacker and evaluates the security posture of a computer network for the purpose of minimizing risk. The NIST Computer Security Resource Center (CSRC) defines a hacker as an “unauthorized user who attempts to or gains access to an information system.” Now, we all know that the term hacker has been used in many different ways and has many different definitions. Most people in a computer technology field would consider themselves hackers based on the simple fact that they like to tinker. This is obviously not a malicious thing. So, the key factor here in defining ethical versus md:no-line-numbersthical hacking is that the latter involves malicious intent. The permission to attack or permission to test is crucial and what will keep you out of trouble! This permission to attack is often referred to as “the scope” of the test (what you are allowed and not allowed to test). More on this later in this module.\r
\r
A modo de recordatorio, el término hacker ético describe a una persona que actúa como atacante y evalúa la postura de seguridad de una red informática con el propósito de minimizar el riesgo. El Centro de Recursos de Seguridad Informática (CSRC) del Instituto Nacional de Estándares y Tecnología (NIST) define a un hacker como un "usuario no autorizado que intenta o accede a un sistema de información". Ahora, todos sabemos que el término hacker se ha utilizado de muchas maneras diferentes y tiene muchas definiciones diferentes. La mayoría de las personas en un campo de tecnología informática se considerarían hackers en base al simple hecho de que les gusta trastear. Obviamente, esto no es algo malicioso. Por lo tanto, el factor clave aquí para definir el hacking ético frente al no ético es que este último implica una intención maliciosa. ¡La autorización para atacar o la autorización para probar es crucial y lo que te mantendrá fuera de problemas! Esta autorización para atacar a menudo se denomina "el alcance" de la prueba (lo que se le permite y no se le permite probar). Más sobre esto más adelante en este módulo.\r
\r
Com a recordatori , el terme hacker ètic descriu una persona que actua com a atacant i avalua la postura de seguretat d'una xarxa informàtica amb la finalitat de minimitzar el risc. El Centre de Recursos de Seguretat Informàtica (CSRC) de l'Institut Nacional d'Estàndards i Tecnologia (NIST) defineix a un hacker com un "usuari no autoritzat que intenta o accedeix a un sistema d'informació". Ara, tots sabem que el terme hacker s'ha utilitzat de moltes maneres diferents i té moltes definicions diferents. La majoria de les persones en un camp de tecnologia informàtica es considerarien hackers en base al simple fet que els agrada trastejar. Òbviament, això no és quelcom maliciós. Per tant, el factor clau aquí per definir el hacking ètic front al no ètic és que aquest últim implica una intenció maliciosa. L'autorització per atacar o l'autorització per provar és crucial i el que et mantindrà fora de problemes! Aquesta autorització per atacar sovint es denomina "l'abast" de la prova (el que se li permet i no se li permet provar). Més sobre això més endavant en aquest mòdul.\r
\r
A security researcher looking for vulnerabilities in products, applications, or web services is considered an ethical hacker if he or she responsibly discloses those vulnerabilities to the vendors or owners of the targeted research. However, the same type of “research” performed by someone who then uses the same vulnerability to gain unauthorized access to a target network/system would be considered a md:no-line-numbersthical hacker. We could even go so far as to say that someone who finds a vulnerability and discloses it publicly without working with a vendor is considered a md:no-line-numbersthical hacker – because this could lead to the compromise of networks/systems by others who use this information in a malicious way.\r
\r
Un investigador de seguridad que busca vulnerabilidades en productos, aplicaciones o servicios web se considera un hacker ético si divulga responsablemente esas vulnerabilidades a los proveedores o propietarios de la investigación objetivo. Sin embargo, el mismo tipo de "investigación" realizada por alguien que luego usa la misma vulnerabilidad para obtener acceso no autorizado a una red / sistema objetivo se consideraría un hacker no ético. Incluso podríamos ir tan lejos como para decir que alguien que encuentra una vulnerabilidad y la divulga públicamente sin trabajar con un proveedor se considera un hacker no ético, porque esto podría conducir a la compromiso de redes / sistemas por otros que usan esta información de manera maliciosa.\r
\r
Un investigador de seguretat que busca vulnerabilitats en productes, aplicacions o serveis web es considera un hacker ètic si divulga responsablement aquestes vulnerabilitats als proveïdors o propietaris de la investigació objectiu. No obstant això, el mateix tipus d '"investigació" realitzada per algú que després utilitza la mateixa vulnerabilitat per obtenir accés no autoritzat a una xarxa / sistema objectiu es consideraria un hacker no ètic. Fins i tot podríem anar tan lluny com per dir que algú que troba una vulnerabilitat i la divulga públicament sense treballar amb un proveïdor es considera un hacker no ètic, perquè això podria conduir a la compromís de xarxes / sistemes per altres que utilitzen aquesta informació de manera maliciosa.\r
\r
The truth is that as an ethical hacker, you use the same tools to find vulnerabilities and exploit targets as do md:no-line-numbersthical hackers. However, as an ethical hacker, you would typically report your findings to the vendor or customer you are helping to make the network more secure. You would also try to avoid performing any tests or exploits that might be destructive in nature.\r
\r
La realidad es que como hacker ético, utilizas las mismas herramientas para encontrar vulnerabilidades y explotar objetivos que los hackers no éticos. Sin embargo, como hacker ético, normalmente informarías tus hallazgos al proveedor o cliente al que estás ayudando a hacer que la red sea más segura. También intentarías evitar realizar pruebas o exploits que puedan ser destructivos por naturaleza.\r
\r
La realitat es que com a hacker ètic, utilitzeu les mateixes eines per trobar vulnerabilitats i explotar objectius que els hackers no ètics. No obstant això, com a hacker ètic, normalment informaríeu els vostres descobriments al proveïdor o client al qual esteu ajudant a fer que la xarxa sigui més segura. També intentaríeu evitar realitzar proves o exploits que puguin ser destructius per naturalesa.\r
\r
An ethical hacker’s goal is to analyze the security posture of a network’s or system’s infrastructure in an effort to identify and possibly exploit any security weaknesses found and then determine if a compromise is possible. This process is called security penetration testing or ethical hacking.\r
\r
Un hacker ético tiene como objetivo analizar la postura de seguridad de la infraestructura de una red o sistema en un esfuerzo por identificar y posiblemente explotar cualquier debilidad de seguridad encontrada y luego determinar si es posible un compromiso. Este proceso se llama prueba de penetración de seguridad o hacking ético.\r
\r
Un hacker ètic te com objectiu analitzar la postura de seguretat de la infraestructura d'una xarxa o sistema en un esforç per identificar i possiblement explotar qualsevol debilitat de seguretat trobada i després determinar si és possible un compromís. Aquest procés es diu prova de penetració de seguretat o hacking ètic.\r
\r
::: tip\r
Hacking is NOT a Crime ( [hackingisnotacrime.org](hackingisnotacrime.org) ) is a nonprofit organization that attempts to raise awareness about the pejorative use of the term hacker. Historically, hackers have been portrayed as evil or illegal. Luckily, a lot of people already know that hackers are curious individuals who want to understand how things work and how to make them more secure. The organization’s goal is to educate the public about the positive aspects of hacking and to dispel the negative connotations associated with the term.\r
\r
Hackear NO es un crimen ( [hackingisnotacrime.org](hackingisnotacrime.org) ) es una organización sin fines de lucro que intenta crear conciencia sobre el uso peyorativo del término hacker. Históricamente, los hackers han sido retratados como malvados o ilegales. Afortunadamente, mucha gente ya sabe que los hackers son personas curiosas que quieren entender cómo funcionan las cosas y cómo hacerlas más seguras. El objetivo de la organización es educar al público sobre los aspectos positivos del hacking y disipar las connotaciones negativas asociadas con el término.\r
\r
Hackejar NO és un crim ( [hackingisnotacrime.org](hackingisnotacrime.org) ) és una organització sense ànim de lucre que intenta crear consciència sobre l'ús pejoratiu del terme hacker. Històricament, els hackers han estat retratats com a malvats o il·legals. Afortunadament, molta gent ja sap que els hackers són persones curioses que volen entendre com funcionen les coses i com fer-les més segures. L'objectiu de l'organització és educar al públic sobre els aspectes positius del hacking i dissipar les connotacions negatives associades amb el terme.\r
:::\r
\r
# 1.1.2. Why Do We Need to Do Penetration Testing?\r
# 1.1.2. ¿Por qué necesitamos hacer pruebas de penetración?\r
# 1.1.2. Per què necessitem fer proves de penetració?\r
\r
So, why do we need penetration testing? Well, first of all, as someone who is responsible for securing and defending a network/system, you want to find any possible paths of compromise before the bad guys do. For years we have developed and implemented many different defensive techniques (for instance, antivirus, firewalls, intrusion prevention systems [IPSs], anti-malware). We have deployed defense-in-depth as a method to secure and defend our networks. But how do we know if those defenses really work and whether they are enough to keep out the bad guys? How valuable is the data that we are protecting, and are we protecting the right things? These are some of the questions that should be answered by a penetration test. If you build a fence around your yard with the intent of keeping your dog from getting out, maybe it only needs to be 4 feet tall. However, if your concern is not the dog getting out but an intruder getting in, then you need a different fence – one that would need to be much taller than 4 feet. Depending on what you are protecting, you might also want razor wire on the top of the fence to deter the bad guys even more. When it comes to information security, we need to do the same type of assessments on our networks and systems. We need to determine what it is we are protecting and whether our defenses can hold up to the threats that are imposed on them. This is where penetration testing comes in. Simply implementing a firewall, an IPS, anti-malware, a VPN, a web application firewall (WAF), and other modern security defenses isn’t enough. You also need to test their validity. And you need to do this on a regular basis. As you know, networks and systems change constantly. This means the attack surface can change as well, and when it does, you need to consider reevaluating the security posture by way of a penetration test.\r
\r
Entonces, ¿por qué necesitamos pruebas de penetración? Bueno, en primer lugar, como alguien que es responsable de asegurar y defender una red / sistema, desea encontrar cualquier posible camino de compromiso antes de que lo hagan los tipos malos. Durante años hemos desarrollado e implementado muchas técnicas defensivas diferentes (por ejemplo, antivirus, firewalls, sistemas de prevención de intrusiones [IPS], anti-malware). Hemos implementado la defensa en profundidad como un método para asegurar y defender nuestras redes. Pero, ¿cómo sabemos si esas defensas realmente funcionan y si son suficientes para mantener alejados a los tipos malos? ¿Qué tan valiosos son los datos que estamos protegiendo y estamos protegiendo las cosas correctas? Estas son algunas de las preguntas que debería responder una prueba de penetración. Si construye una cerca alrededor de su patio con la intención de evitar que su perro salga, tal vez solo necesite tener 4 pies de altura. Sin embargo, si su preocupación no es que el perro salga sino que un intruso entre, entonces necesita una cerca diferente, una que necesitaría ser mucho más alta que 4 pies. Dependiendo de lo que esté protegiendo, es posible que también desee alambre de púas en la parte superior de la cerca para disuadir aún más a los tipos malos. Cuando se trata de seguridad de la información, necesitamos hacer el mismo tipo de evaluaciones en nuestras redes y sistemas. Necesitamos determinar qué es lo que estamos protegiendo y si nuestras defensas pueden resistir las amenazas que se les imponen. Aquí es donde entran las pruebas de penetración. Simplemente implementar un firewall, un IPS, anti-malware, una VPN, un firewall de aplicaciones web (WAF) y otras defensas de seguridad modernas no es suficiente. También debe probar su validez. Y necesitas hacer esto de forma regular. Como saben, las redes y los sistemas cambian constantemente. Esto significa que la superficie de ataque también puede cambiar, y cuando lo hace, debe considerar revaluar la postura de seguridad mediante una prueba de penetración.\r
\r
Llavors, per què necessitem proves de penetració? Bé, en primer lloc, com a algú que és responsable d'assegurar i defensar una xarxa / sistema, desitja trobar qualsevol possible camí de compromís abans que ho facin els tipus dolents. Durant anys hem desenvolupat i implementat moltes tècniques defensives diferents (per exemple, antivirus, firewalls, sistemes de prevenció d'intrusions [IPS], anti-malware). Hem implementat la defensa en profunditat com un mètode per assegurar i defensar les nostres xarxes. Però, com sabem si aquestes defenses realment funcionen i si són suficients per mantenir allunyats els tipus dolents? Quan valuosos són les dades que estem protegint i estem protegint les coses correctes? Aquestes són algunes de les preguntes que hauria de respondre una prova de penetració. Si construeix una tanca al voltant del seu pati amb la intenció d'evitar que el seu gos surti, potser només necessita tenir 4 peus d'altura. No obstant això, si la seva preocupació no és que el gos surti sinó que un intrús entri, llavors necessita una tanca diferent, una que necessitaria ser molt més alta que 4 peus. Depenent del que estigui protegint, és possible que també vulgueu filferro a la part superior de la tanca per dissuadir encara més als tipus dolents. Quan es tracta de seguretat de la informació, necessitem fer el mateix tipus d'avaluacions a les nostres xarxes i sistemes. Necessitem determinar què és el que estem protegint i si les nostres defenses poden resistir les amenaces que se'ls imposen. Aquí és on entren les proves de penetració. Simplement implementar un firewall, un IPS, anti-malware, una VPN, un firewall d'ap\r
\r
1.1.3 Lab - Researching PenTesting Careers\r
1.1.3 Laboratorio - Investigación de carreras de PenTesting\r
1.1.3 Laboratori - Investigació de carreres de PenTesting\r
\r
It is important for you to understand the employment landscape and the different roles and responsibilities that cybersecurity professions include. A good general reference to explore for descriptions of different job roles is The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). It offers a visual way to discover and compare different job roles in our profession.\r
\r
Es importante que comprendas el panorama laboral y las diferentes funciones y responsabilidades que incluyen las profesiones de ciberseguridad. Una buena referencia general para explorar las descripciones de los diferentes roles de trabajo es la The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). Ofrece una forma visual de descubrir y comparar diferentes roles de trabajo en nuestra profesión.\r
\r
És important que entengueu el panorama laboral i les diferents funcions i responsabilitats que inclouen les professions de ciberseguretat. Una bona referència general per explorar les descripcions dels diferents rols de treball és la The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). Ofereix una forma visual de descobrir i comparar diferents rols de treball en la nostra professió.\r
\r
## 1.1.3. Activity Lab - Researching PenTesting Careers\r
## 1.1.3. Actividad Laboratorio - Investigación de carreras de PenTesting\r
## 1.1.3. Activitat Laboratori - Investigació de carreres de PenTesting\r
\r
::: detail Lab 1.1.3\r
In this activity, you discover and compare ethical hacking jobs that are listed on various job boards.\r
\r
En esta actividad, descubrirá y comparará trabajos de hacking ético que figuran en varios tableros de trabajo.\r
\r
En aquesta activitat, descobrireu i comparareu treballs de hacking ètic que figuren en diversos taulells de treball.\r
\r
In this lab, you will complete the following objectives:\r
\r
- Conduct a Penetration Tester Job Search\r
- Analyze Penetration Tester Job Requirements\r
- Discover Resources to Further Your Career\r
\r
En esta práctica, conseguirás los siguientes objetivos:\r
\r
- Realizar una búsqueda de trabajo de Penetration Tester\r
- Analizar los requisitos de trabajo de Penetration Tester\r
- Descubrir recursos para avanzar en tu carrera\r
\r
En aquest laboratori, aconseguiràs els següents objectius:\r
\r
- Realitzar una cerca de feina de Penetration Tester\r
- Analitzeu els requisits de feina de Penetration Tester\r
- Descobriu recursos per avançar en la vostra carrera\r
:::\r
\r
## 1.1.4. Threat Actors\r
## 1.1.4. Atacantes\r
## 1.1.4. Atacants\r
\r
Before you can understand how an ethical hacker or penetration tester can mimic a threat actor (or malicious attacker), you need to understand the different types of threat actors. The following are the most common types of malicious attackers we see today. Select each for more information.\r
\r
Antes de poder comprender cómo un hacker ético o un probador de penetración puede imitar a un actor de amenazas (o atacante malicioso), debe comprender los diferentes tipos de actores de amenazas. Los siguientes son los tipos más comunes de atacantes maliciosos que vemos hoy en día. Seleccione cada uno para obtener más información.\r
\r
Abans de poder comprendre com un hacker ètic o un provador de penetració pot imitar un actor de amenaces (o atacant maliciós), heu de comprendre els diferents tipus d'actors de amenaces. Els següents són els tipus més comuns d'atacants maliciosos que veiem avui en dia. Seleccioneu cadascun per obtenir més informació.\r
\r
:::: code-group\r
::: code-group-item Organized Crime\r
\r
\`\`\`md:no-line-numbers\r
\r
**Organized Crime**\r
Several years ago, the cybercrime industry took over the number-one spot, previously held by the drug trade, for the most profitable illegal industry. As you can imagine, it has attracted a new type of cybercriminal. Just as it did back in the days of Prohibition, organized crime goes where the money is. Organized crime consists of very well-funded and motivated groups that will typically use any and all of the latest attack techniques. Whether that is ransomware or data theft, if it can be monetized, organized crime will use it.\r
\r
**Crimen organizado**\r
Hace varios años, la industria del cibercrimen se apoderó del primer lugar, anteriormente ocupado por el narcotráfico, por la industria ilegal más rentable. Como puedes imaginar, ha atraído a un nuevo tipo de ciberdelincuente. Tal como lo hizo en los días de la Prohibición, el crimen organizado va donde está el dinero. El crimen organizado consiste en grupos muy bien financiados y motivados que típicamente usarán todas y cada una de las últimas técnicas de ataque. Ya sea ransomware o robo de datos, si se puede monetizar, el crimen organizado lo usará.\r
\r
**Crim organitzat**\r
Fa diversos anys, la indústria del cibercrimen es va apoderar del primer lloc, anteriorment ocupat pel narcotràfic, per la indústria il·legal més rendible. Com podeu imaginar, ha atret a un nou tipus de ciberdelinqüent. Tal com ho va fer en els dies de la Prohibició, el crim organitzat va on està el diner. El crim organitzat consisteix en grups molt ben finançats i motivats que típicament utilitzaran totes i cadascuna de les últimes tècniques d'atac. Ja sigui ransomware o robatori de dades, si es pot monetitzar, el crim organitzat ho utilitzarà.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Hacktivists\r
\r
\`\`\`md:no-line-numbers\r
\r
**Hacktivists**\r
This type of threat actor is not motivated by money. Hacktivists are looking to make a point or to further their beliefs, using cybercrime as their method of attack. These types of attacks are often carried out by stealing sensitive data and then revealing it to the public for the purpose of embarrassing or financially affecting a target.\r
\r
**Hacktivistas**\r
Este tipo de actor de amenazas no está motivado por el dinero. Los hacktivistas buscan hacer un punto o promover sus creencias, utilizando el cibercrimen como su método de ataque. Estos tipos de ataques se llevan a cabo a menudo robando datos sensibles y luego revelándolos al público con el propósito de avergonzar o afectar financieramente a un objetivo.\r
\r
**Hacktivistes**\r
Aquest tipus d'actor de amenaces no està motivat pel diner. Els hacktivistes busquen fer un punt o promoure les seves creences, utilitzant el cibercrim com el seu mètode d'atac. Aquests tipus d'atacs es duen a terme sovint robant dades sensibles i després revelant-les al públic amb la finalitat d'avergonyir o afectar financerament a un objectiu.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item State-Sponsored Attackers\r
\r
\`\`\`md:no-line-numbers\r
\r
**State-Sponsored Attackers**\r
Cyber war and cyber espionage are two terms that fit into this category. Many governments around the world today use cyber attacks to steal information from their opponents and cause disruption. Many believe that the next Pearl Harbor will occur in cyberspace. That’s one of the reasons the United States declared cyberspace to be one of the operational domains that U.S. forces would be trained to defend.\r
\r
**Atacantes patrocinados por los estados**\r
La guerra cibernética y el espionaje cibernético son dos términos que se ajustan a esta categoría. Muchos gobiernos de todo el mundo utilizan hoy ataques cibernéticos para robar información de sus oponentes y causar interrupciones. Muchos creen que el próximo Pearl Harbor ocurrirá en el ciberespacio. Esa es una de las razones por las que Estados Unidos declaró que el ciberespacio sería uno de los dominios operativos para los que las fuerzas estadounidenses estarían capacitadas para defenderse.\r
\r
**Atacants patrocinats pels estats**\r
La guerra cibernètica i l'espionatge cibernètic són dos termes que s'ajusten a aquesta categoria. Molts governs d'arreu del món utilitzen avui atacs cibernètics per robar informació dels seus oponents i causar interrupcions. Molts creuen que el proper Pearl Harbor ocorrerà en el ciberespai. Aquesta és una de les raons per les quals els Estats Units van declarar que el ciberespai seria un dels dominis operatius per als quals les forces estatunidenques estarien capacitades per defensar-se.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Insider Threats\r
\r
\`\`\`md:no-line-numbers\r
\r
**Insider Threats**\r
An insider threat is a threat that comes from inside an organization. The motivations of these types of actors are normally different from those of many of the other common threat actors. Insider threats are often normal employees who are tricked into divulging sensitive information or mistakenly clicking on links that allow attackers to gain access to their computers. However, they could also be malicious insiders who are possibly motivated by revenge or money.\r
\r
**Amenazas internas**\r
Una amenaza interna es una amenaza que proviene de dentro de una organización. Las motivaciones de estos tipos de actores normalmente son diferentes de las de muchos de los otros actores de amenazas comunes. Las amenazas internas a menudo son empleados normales que son engañados para divulgar información confidencial o hacer clic por error en enlaces que permiten a los atacantes acceder a sus computadoras. Sin embargo, también podrían ser insiders maliciosos que posiblemente estén motivados por la venganza o el dinero.\r
\r
**Amenaces internes**\r
Una amenaça interna és una amenaça que prové de dins d'una organització. Les motivacions d'aquests tipus d'actors normalment són diferents de les de molts dels altres actors de amenaces comuns. Les amenaces internes sovint són empleats normals que són enganyats per divulgar informació confidencial o fer clic per error en enllaços que permeten als atacants accedir als seus ordinadors. No obstant això, també podrien ser insiders maliciosos que possiblement estiguin motivats per la venjança o el diner.\r
\r
\`\`\`\r
\r
:::\r
::::\r
`]},{title:"1.2. Exploring Penetration Testing Methodologies",headers:[{level:2,title:"1.2.1. Overview",slug:"_1-2-1-overview",link:"#_1-2-1-overview",children:[]},{level:2,title:"1.2.2 Why Do We Need to Follow a Methodology for Penetration Testing?",slug:"_1-2-2-why-do-we-need-to-follow-a-methodology-for-penetration-testing",link:"#_1-2-2-why-do-we-need-to-follow-a-methodology-for-penetration-testing",children:[]},{level:2,title:"1.2.3. Environmental Considerations",slug:"_1-2-3-environmental-considerations",link:"#_1-2-3-environmental-considerations",children:[]},{level:2,title:"1.2.1. Descripción general",slug:"_1-2-1-descripcion-general",link:"#_1-2-1-descripcion-general",children:[]},{level:2,title:"1.2.2 ¿Por qué necesitamos seguir una metodología para las pruebas de penetración?",slug:"_1-2-2-¿por-que-necesitamos-seguir-una-metodologia-para-las-pruebas-de-penetracion",link:"#_1-2-2-¿por-que-necesitamos-seguir-una-metodologia-para-las-pruebas-de-penetracion",children:[]},{level:2,title:"1.2.3. Consideraciones sobre en entorno",slug:"_1-2-3-consideraciones-sobre-en-entorno",link:"#_1-2-3-consideraciones-sobre-en-entorno",children:[]},{level:2,title:"1.2.1. Descripció general",slug:"_1-2-1-descripcio-general",link:"#_1-2-1-descripcio-general",children:[]},{level:2,title:"1.2.2 Per què necessitem seguir una metodologia per a les proves de penetració?",slug:"_1-2-2-per-que-necessitem-seguir-una-metodologia-per-a-les-proves-de-penetracio",link:"#_1-2-2-per-que-necessitem-seguir-una-metodologia-per-a-les-proves-de-penetracio",children:[]},{level:2,title:"1.2.3. Consideracions de l'entorn de proves",slug:"_1-2-3-consideracions-de-l-entorn-de-proves",link:"#_1-2-3-consideracions-de-l-entorn-de-proves",children:[]},{level:2,title:"1.2.4. Practice - Types of Penetration Tests",slug:"_1-2-4-practice-types-of-penetration-tests",link:"#_1-2-4-practice-types-of-penetration-tests",children:[]},{level:2,title:"1.2.5 Surveying Different Standards and Methodologies",slug:"_1-2-5-surveying-different-standards-and-methodologies",link:"#_1-2-5-surveying-different-standards-and-methodologies",children:[]}],path:"/en/ethical_hacking/b%20Pentesting%20methodologies.html",pathLocale:"/en/",extraFields:[`---\r
title: 1.2. Exploring Penetration Testing Methodologies\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
export_on_save:\r
 markdown: true\r
---\r
\r
# 1.2. Exploring Penetration Testing Methodologies\r
\r
## 1.2.1. Overview\r
\r
There is more to penetration testing than hacking away at a customer's network. A haphazard approach will result in haphazard results. It is important to follow well-known methods and standards in order to approach pentesting engagements in an organized, systematic way.\r
\r
You should understand the major documented methodologies and standards so that you can create strategies that draw on their strengths. Documenting your approach with the methodologies and standards that you used also provides accountability for our company and helps make our results defensible in case issues arise with our customers.\r
\r
The process of completing a penetration test varies based on many factors. The tools and techniques used to assess the security posture of a network or system also vary. The networks and systems being evaluated are often highly complex. Because of this, it is very easy when performing a penetration test to go off scope. This is where testing methodologies come in. They provide a framework for the penetration tester to follow to ensure that the test is completed in a consistent manner. They also provide a way to ensure that the test is completed in a way that is repeatable and defensible.\r
\r
## 1.2.2 Why Do We Need to Follow a Methodology for Penetration Testing?\r
\r
As just mentioned, scope creep is one reason for utilizing a specific methodology; however, there are many other reasons. For instance, when performing a penetration test for a customer, you must show that the methods you plan to use for testing are tried and true. By utilizing a known methodology, you are able to provide documentation of a specialized procedure that has been used by many people.\r
\r
## 1.2.3. Environmental Considerations\r
\r
There are, of course, a number of different types of penetration tests. Often they are combined in the overall scope of a penetration test; however, they can also be performed as individual tests as well.\r
\r
The following is a list of some of the most common environmental considerations for the types of penetration tests today:\r
\r
:::: code-group\r
::: code-group-item Network Infrastructure Tests\r
\r
\`\`\`md:no-line-numbers\r
\r
Network Infrastructure Tests\r
Testing of the network infrastructure can mean a few things. For the purposes of this course, we say it is focused on evaluating the security posture of the actual network infrastructure and how it is able to help defend against attacks. This often includes the switches, routers, firewalls, and supporting resources, such as authentication, authorization, and accounting (AAA) servers and IPSs. A penetration test on wireless infrastructure may sometimes be included in the scope of a network infrastructure test. However, additional types of tests beyond a wired network assessment would be performed. For instance, a wireless security tester would attempt to break into a network via the wireless network either by bypassing security mechanisms or breaking the cryptographic methods used to secure the traffic. Testing the wireless infrastructure helps an organization to determine weaknesses in the wireless deployment as well as the exposure. It often includes a detailed heat map of the signal disbursement.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Application-Based Tests\r
\r
\`\`\`md:no-line-numbers\r
\r
Application-Based Tests\r
This type of pen testing focuses on testing for security weaknesses in enterprise applications. These weaknesses can include but are not limited to misconfigurations, input validation issues, injection issues, and logic flaws. Because a web application is typically built on a web server with a back-end database, the testing scope normally includes the database as well. However, it focuses on gaining access to that supporting database through the web application compromise. A great resource that we mention a number of times in this book is the Open Web Application Security Project (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Testing in the Cloud\r
\r
\`\`\`md:no-line-numbers\r
\r
Penetration Testing in the Cloud\r
Cloud service providers (CSPs) such as Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP) have no choice but to take their security and compliance responsibilities very seriously. For instance, Amazon created the [Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model) to describe the AWS customers’ responsibilities and Amazon’s responsibilities in detail.\r
\r
The responsibility for cloud security depends on the type of cloud model (software as a service [SaaS], platform as a service [PaaS], or infrastructure as a service [IaaS]). For example, with IaaS, the customer (cloud consumer) is responsible for data, applications, runtime, middleware, virtual machines (VMs), containers, and operating systems in VMs. Regardless of the model used, cloud security is the responsibility of both the client and the cloud provider. These details need to be worked out before a cloud computing contract is signed. These contracts vary depending on the security requirements of the client. Considerations include disaster recovery, service-level agreements (SLAs), data integrity, and encryption. For example, is encryption provided end to end or just at the cloud provider? Also, who manages the encryption keys–the CSP or the client?\r
\r
Overall, you want to ensure that the CSP has the same layers of security (logical, physical, and administrative) in place that you would have for services you control. When performing penetration testing in the cloud, you must understand what you can do and what you cannot do. Most CSPs have detailed guidelines on how to perform security assessments and penetration testing in the cloud. Regardless, there are many potential threats when organizations move to a cloud model. For example, although your data is in the cloud, it must reside in a physical location somewhere. Your cloud provider should agree in writing to provide the level of security required for your customers. As an example, [the AWS Customer Support Policy for Penetration Testing](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note physical attacks vs. social engineering\r
Many penetration testers find the \`**physical aspect of testing** to be the most fun\` because they are essentially being paid to break into the facility of a target. This type of test can help expose any weaknesses in the physical perimeter as well as any security mechanisms that are in place, such as guards, gates, and fencing. The result should be an assessment of the external physical security controls. \`The majority of compromises today start with some kind of **social engineering attack**\`. This could be a phone call, an email, a website, an SMS message, and so on. It is important to test how your employees handle these types of situations. This type of test is often omitted from the scope of a penetration testing engagement mainly because it primarily involves testing people instead of the technology. In most cases, management does not agree with this type of approach. However, it is important to get a real-world view of the latest attack methods. The result of a social engineering test should be to assess the security awareness program so that you can enhance it. It should not be to identify individuals who fail the test. One of the tools that we talk about more in a later module is the Social-Engineer Toolkit (SET), created by Dave Kennedy. This is a great tool for performing social engineering testing campaigns.\r
:::\r
\r
::: tip Bug bounty programs\r
*Bug bounty* programs enable security researchers and penetration testers to get recognition (and often monetary compensation) for finding vulnerabilities in websites, applications, or any other types of systems. Companies like Microsoft, Apple, and Cisco and even government institutions such as the U.S. Department of Defense (DoD) use bug bounty programs to reward security professionals when they find vulnerabilities in their systems. Many security companies, such as HackerOne, Bugcrowd, Intigriti, and SynAck, provide platforms for businesses and security professionals to participate in bug bounty programs. These programs are different from traditional penetration testing engagements but have a similar goal: finding security vulnerabilities to allow the organization to fix them before malicious attackers are able to exploit such vulnerabilities. You can find different bug bounty tips and resources in this [GitHub repository](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties).\r
:::\r
\r
When talking about penetration testing methods, you are likely to hear the terms unknown-environment (previously known as black-box), known-environment (previously known as white-box), and partially known environment (previously known as gray-box) testing. These terms are used to describe the perspective from which the testing is performed, as well as the amount of information that is provided to the tester:\r
\r
:::: code-group\r
::: code-group-item Unknown-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Unknown-Environment Test\r
In an unknown-environment penetration test, the tester is typically provided only a very limited amount of information. For instance, the tester may be provided only the domain names and IP addresses that are in scope for a particular target. The idea of this type of limitation is to have the tester start out with the perspective that an external attacker might have. Typically, an attacker would first determine a target and then begin to gather information about the target, using public information, and gain more and more information to use in attacks. The tester would not have prior knowledge of the target’s organization and infrastructure. Another aspect of unknown-environment testing is that sometimes the network support personnel of the target may not be given information about exactly when the test is taking place. This allows for a defense exercise to take place as well, and it eliminates the issue of a target preparing for the test and not giving a real-world view of how the security posture really looks. \r
\r
This type of testing is often the most difficult for the tester because of the lack of information. However, it is also the most realistic because it is the closest to how an attacker would approach the target.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Known-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Known-Environment Test\r
In a known-environment penetration test, the tester starts out with a significant amount of information about the organization and its infrastructure. The tester would normally be provided things like network diagrams, IP addresses, configurations, and a set of user credentials. If the scope includes an application assessment, the tester might also be provided the source code of the target application. The idea of this type of test is to identify as many security holes as possible. In an unknown-environment test, the scope may be only to identify a path into the organization and stop there. With known-environment testing, the scope is typically much broader and includes internal network configuration auditing and scanning of desktop computers for defects. Time and money are typically deciding factors in the determination of which type of penetration test to complete. If a company has specific concerns about an application, a server, or a segment of the infrastructure, it can provide information about that specific target to decrease the scope and the amount of time spent on the test but still uncover the desired results. With the sophistication and capabilities of adversaries today, it is likely that most networks will be compromised at some point, and a white-box approach is not a bad option.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Partially Known-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Partially Known Environment Test\r
A partially known environment penetration test is somewhat of a hybrid approach between unknown- and known-environment tests. With partially known environment testing, the testers may be provided credentials but not full documentation of the network infrastructure. This would allow the testers to still provide results of their testing from the perspective of an external attacker’s point of view. Considering the fact that most compromises start at the client and work their way throughout the network, a good approach would be a scope where the testers start on the inside of the network and have access to a client machine. Then they could pivot throughout the network to determine what the impact of a compromise would be.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
# 1.2. Explorando metodologías de pruebas de penetración\r
\r
## 1.2.1. Descripción general\r
\r
Las pruebas de penetración son mucho más que hackear la red de un cliente. Un enfoque descuidado dará como resultado resultados descuidados. Es importante seguir métodos y estándares bien conocidos para abordar las pruebas de penetración de manera organizada y sistemática.\r
\r
Debe comprender las principales metodologías y estándares documentados para poder crear estrategias que aprovechen sus fortalezas. Documentar su enfoque con las metodologías y estándares que utilizó también proporciona responsabilidad para nuestra empresa y ayuda a que nuestros resultados sean defendibles en caso de que surjan problemas con nuestros clientes.\r
\r
El proceso de completar una prueba de penetración varía según muchos factores. Las herramientas y técnicas utilizadas para evaluar la postura de seguridad de una red o sistema también varían. Las redes y sistemas que se evalúan a menudo son muy complejos. Debido a esto, es muy fácil cuando se realiza una prueba de penetración para salir del alcance. Aquí es donde entran las metodologías de prueba. Proporcionan un marco para que el probador de penetración siga para asegurarse de que la prueba se complete de manera consistente. También proporcionan una forma de asegurarse de que la prueba se complete de una manera que sea repetible y defendible.\r
\r
## 1.2.2 ¿Por qué necesitamos seguir una metodología para las pruebas de penetración?\r
\r
Como se mencionó anteriormente, el alcance es una razón para utilizar una metodología específica; sin embargo, hay muchas otras razones. Por ejemplo, cuando realiza una prueba de penetración para un cliente, debe mostrar que los métodos que planea utilizar para las pruebas son probados y verdaderos. Al utilizar una metodología conocida, puede proporcionar documentación de un procedimiento especializado que ha sido utilizado por muchas personas.\r
\r
## 1.2.3. Consideraciones sobre en entorno\r
\r
Existen, por supuesto, una serie de tipos diferentes de pruebas de penetración. A menudo se combinan en el alcance general de una prueba de penetración; sin embargo, también se pueden realizar como pruebas individuales.\r
\r
La siguiente es una lista de algunas de las consideraciones sobre el entorno más comunes para los tipos de pruebas de penetración de hoy:\r
\r
:::: code-group\r
::: code-group-item Pruebas de infraestructura de red\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas de infraestructura de red\r
La prueba de la infraestructura de red puede significar algunas cosas. Para los fines de este curso, decimos que se centra en evaluar la postura de seguridad de la infraestructura de red real y en cómo puede ayudar a defenderse contra ataques. Esto a menudo incluye los conmutadores, enrutadores, firewalls y recursos de soporte, como la autenticación, la autorización y los servidores de contabilidad (AAA) y los IPS. Una prueba de penetración en la infraestructura inalámbrica a veces puede incluirse en el alcance de una prueba de infraestructura de red. Sin embargo, se realizarían tipos adicionales de pruebas más allá de una evaluación de red cableada. Por ejemplo, un probador de seguridad inalámbrica intentaría ingresar a una red a través de la red inalámbrica, ya sea mediante eludir los mecanismos de seguridad o romper los métodos criptográficos utilizados para asegurar el tráfico. Probar la infraestructura inalámbrica ayuda a una organización a determinar las debilidades en la implementación inalámbrica, así como la exposición. A menudo incluye un mapa de calor detallado de la distribución de la señal.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Pruebas basadas en aplicaciones\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas basadas en aplicaciones\r
Este tipo de prueba de penetración se centra en probar las debilidades de seguridad en las aplicaciones empresariales. Estas debilidades pueden incluir, entre otras, configuraciones incorrectas, problemas de validación de entrada, problemas de inyección y fallas de lógica. Debido a que una aplicación web generalmente se construye en un servidor web con una base de datos de respaldo, el alcance de las pruebas normalmente incluye la base de datos también. Sin embargo, se centra en obtener acceso a esa base de datos de soporte a través de la compromiso de la aplicación web. Un gran recurso que mencionamos varias veces en este libro es el Proyecto de seguridad de aplicaciones web abiertas (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Pruebas en la nube\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas de penetración en la nube\r
Los proveedores de servicios en la nube (CSP), como Azure, Amazon Web Services (AWS) y Google Cloud Platform (GCP), no tienen más remedio que tomarse muy en serio sus responsabilidades de seguridad y cumplimiento. Por ejemplo, Amazon creó el [Modelo de responsabilidad compartida](https://aws.amazon.com/compliance/shared-responsibility-model) para describir las responsabilidades de los clientes de AWS y las responsabilidades de Amazon en detalle.\r
\r
La responsabilidad de la seguridad en la nube depende del tipo de modelo de nube (software como servicio [SaaS], plataforma como servicio [PaaS] o infraestructura como servicio [IaaS]). Por ejemplo, con IaaS, el cliente (consumidor de la nube) es responsable de los datos, las aplicaciones, el tiempo de ejecución, el middleware, las máquinas virtuales (VM), los contenedores y los sistemas operativos en las VM. Independientemente del modelo utilizado, la seguridad en la nube es responsabilidad tanto del cliente como del proveedor de la nube. Estos detalles deben resolverse antes de firmar un contrato de computación en la nube. Estos contratos varían según los requisitos de seguridad del cliente. Las consideraciones incluyen la recuperación ante desastres, los acuerdos de nivel de servicio (SLA), la integridad de los datos y el cifrado. Por ejemplo, ¿se proporciona el cifrado de extremo a extremo o solo en el proveedor de la nube? Además, ¿quién administra las claves de cifrado, el CSP o el cliente?\r
\r
En general, desea asegurarse de que el CSP tenga las mismas capas de seguridad (lógica, física y administrativa) en su lugar que tendría para los servicios que controla. Al realizar pruebas de penetración en la nube, debe comprender lo que puede hacer y lo que no puede hacer. La mayoría de los CSP tienen pautas detalladas sobre cómo realizar evaluaciones de seguridad y pruebas de penetración en la nube. Independientemente, existen muchas amenazas potenciales cuando las organizaciones se mudan a un modelo de nube. Por ejemplo, aunque sus datos están en la nube, deben residir en una ubicación física en algún lugar. Su proveedor de la nube debe aceptar por escrito proporcionar el nivel de seguridad requerido para sus clientes. Como ejemplo [la Política de soporte al cliente de AWS para pruebas de penetración](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note ataques físicos vs. ingeniería social\r
Muchos pentesters encuentran la parte física de las pruebas como la más divertida porque esencialmente se les paga por irrumpir en la instalación de un objetivo. Este tipo de prueba puede ayudar a exponer cualquier debilidad en el perímetro físico, así como cualquier mecanismo de seguridad que esté en su lugar, como guardias, puertas y cercas. El resultado debe ser una evaluación de los controles de seguridad física externos. La mayoría de las compromisos de hoy en día comienzan con algún tipo de ataque de ingeniería social. Esto podría ser una llamada telefónica, un correo electrónico, un sitio web, un mensaje SMS, y así sucesivamente. Es importante probar cómo sus empleados manejan este tipo de situaciones. Este tipo de prueba a menudo se omite del alcance de una prueba de penetración principalmente porque implica principalmente probar a las personas en lugar de la tecnología. En la mayoría de los casos, la gerencia no está de acuerdo con este tipo de enfoque. Sin embargo, es importante obtener una visión del mundo real de los últimos métodos de ataque. El resultado de una prueba de ingeniería social debe ser evaluar el programa de concienciación de seguridad para que pueda mejorarlo. No debería ser identificar a las personas que no aprueban la prueba. Una de las herramientas de las que hablamos más adelante en un módulo posterior es el Social-Engineer Toolkit (SET), creado por Dave Kennedy. Esta es una gran herramienta para realizar campañas de prueba de ingeniería social.\r
:::\r
\r
::: tip Programas de recompensas por errores\r
Los programas de recompensas por errores permiten a los investigadores de seguridad y a los probadores de penetración obtener reconocimiento (y a menudo compensación monetaria) por encontrar vulnerabilidades en sitios web, aplicaciones o cualquier otro tipo de sistemas. Empresas como Microsoft, Apple y Cisco e incluso instituciones gubernamentales como el Departamento de Defensa de EE. UU. (DoD) utilizan programas de recompensas por errores para recompensar a los profesionales de la seguridad cuando encuentran vulnerabilidades en sus sistemas. Muchas empresas de seguridad, como HackerOne, Bugcrowd, Intigriti y SynAck, proporcionan plataformas para que las empresas y los profesionales de la seguridad participen en programas de recompensas por errores. Estos programas son diferentes de las pruebas de penetración tradicionales pero tienen un objetivo similar: encontrar vulnerabilidades de seguridad para permitir que la organización las solucione antes de que los atacantes maliciosos puedan explotar dichas vulnerabilidades. Hay diferentes consejos y recursos acerca de recompensas por errores en este [repositorio GitHub](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties)\r
:::\r
\r
Cuando se habla de métodos de prueba de penetración, es probable que escuche los términos entorno desconocido (anteriormente conocido como caja negra), entorno conocido (anteriormente conocido como caja blanca) y entorno parcialmente conocido (anteriormente conocido como caja gris) prueba. Estos términos se utilizan para describir la perspectiva desde la cual se realiza la prueba, así como la cantidad de información que se proporciona al probador:\r
\r
:::: code-group\r
::: code-group-item Prueba de entorno desconocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno desconocido\r
En una prueba de penetración de entorno desconocido, el probador generalmente solo recibe una cantidad muy limitada de información. Por ejemplo, el probador puede recibir solo los nombres de dominio y las direcciones IP que están dentro del alcance de un objetivo en particular. La idea de este tipo de limitación es que el probador comience con la perspectiva que un atacante externo podría tener. Típicamente, un atacante primero determinaría un objetivo y luego comenzaría a recopilar información sobre el objetivo, utilizando información pública y obteniendo más y más información para usar en ataques. El probador no tendría conocimiento previo de la organización y la infraestructura del objetivo. Otro aspecto de las pruebas de entorno desconocido es que a veces al personal de soporte de red del objetivo no se le da información sobre cuándo exactamente se está llevando a cabo la prueba. Esto permite que también se lleve a cabo un ejercicio de defensa y elimina el problema de que un objetivo se prepare para la prueba y no dé una visión del mundo real de cómo se ve realmente la postura de seguridad.\r
\r
Este tipo de prueba suele ser la más difícil para el probador debido a la falta de información. Sin embargo, también es el más realista porque es el más cercano a cómo un atacante se acercaría al objetivo.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prueba de entorno conocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno conocido\r
En una prueba de penetración de entorno conocido, el probador comienza con una cantidad significativa de información sobre la organización y su infraestructura. Normalmente, al probador se le proporcionarían cosas como diagramas de red, direcciones IP, configuraciones y un conjunto de credenciales de usuario. Si el alcance incluye una evaluación de la aplicación, el probador también podría recibir el código fuente de la aplicación objetivo. La idea de este tipo de prueba es identificar la mayor cantidad de agujeros de seguridad posible. En una prueba de entorno desconocido, el alcance puede ser solo identificar un camino hacia la organización y detenerse allí. Con las pruebas de entorno conocido, el alcance suele ser mucho más amplio e incluye auditorías de configuración de red interna y escaneo de computadoras de escritorio en busca de defectos. El tiempo y el dinero son factores decisivos típicos en la determinación de qué tipo de prueba de penetración completar. Si una empresa tiene preocupaciones específicas sobre una aplicación, un servidor o un segmento de la infraestructura, puede proporcionar información sobre ese objetivo específico para disminuir el alcance y la cantidad de tiempo dedicado a la prueba, pero aún así descubrir los resultados deseados. Con la sofisticación y las capacidades de los adversarios de hoy, es probable que la mayoría de las redes se vean comprometidas en algún momento, y un enfoque de caja blanca no es una mala opción.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prueba de entorno parcialmente conocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno parcialmente conocido\r
Una prueba de penetración de entorno parcialmente conocido es algo así como un enfoque híbrido entre pruebas de entorno desconocido y conocido. Con las pruebas de entorno parcialmente conocido, los probadores pueden recibir credenciales pero no documentación completa de la infraestructura de red. Esto permitiría a los probadores seguir proporcionando resultados de sus pruebas desde la perspectiva del punto de vista de un atacante externo. Teniendo en cuenta el hecho de que la mayoría de las infracciones comienzan en el cliente y se abren camino en toda la red, un buen enfoque sería un alcance donde los probadores comiencen en el interior de la red y tengan acceso a una máquina cliente. Luego podrían pivotar en toda la red para determinar cuál sería el impacto de una violación.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
# 1.2. Explorant metodologies de proves de penetració\r
\r
## 1.2.1. Descripció general\r
\r
Les proves de penetració son molt més que hackejar la xarxa d'un client. Un enfocament descuidat donarà com a resultat resultats descuidats. És important seguir mètodes i estàndards ben coneguts per abordar les proves de penetració de manera organitzada i sistemàtica.\r
\r
Ha de comprendre les principals metodologies i estàndards documentats per poder crear estratègies que aprofitin les seves fortaleses. Documentar el seu enfocament amb les metodologies i estàndards que va utilitzar també proporciona responsabilitat per a la nostra empresa i ajuda a que els nostres resultats siguin defensables en cas que sorgeixin problemes amb els nostres clients.\r
\r
El procés de completar una prova de penetració varia segons molts factors. Les eines i tècniques utilitzades per avaluar la postura de seguretat d'una xarxa o sistema també varien. Les xarxes i sistemes que s'avaluen sovint són molt complexos. A causa d'això, és molt fàcil quan es realitza una prova de penetració per sortir de l'abast. Aquí és on entren les metodologies de prova. Proporcionen un marc perquè el provador de penetració segueixi per assegurar-se que la prova es completi de manera consistent. També proporcionen una manera de assegurar-se que la prova es completi d'una manera que sigui repetible i defensable.\r
\r
## 1.2.2 Per què necessitem seguir una metodologia per a les proves de penetració?\r
\r
Com s'ha esmentat anteriorment, l'abast és una raó per utilitzar una metodologia específica; no obstant això, hi ha moltes altres raons. Per exemple, quan realitza una prova de penetració per a un client, ha de mostrar que els mètodes que planeja utilitzar per a les proves són provats i veritables. En utilitzar una metodologia coneguda, pot proporcionar documentació d'un procediment especialitzat que ha estat utilitzat per moltes persones.\r
\r
## 1.2.3. Consideracions de l'entorn de proves\r
\r
Hi ha, per descomptat, una sèrie de tipus diferents de proves de penetració. Sovint es combinen en l'abast general d'una prova de penetració; no obstant això, també es poden realitzar com a proves individuals.\r
\r
La següent és una llista d'algunes de les consideracions de l'entorn de proves més comunes per als tipus de proves de penetració d'avui:\r
\r
:::: code-group\r
::: code-group-item Proves d'infraestructura de xarxa\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves d'infraestructura de xarxa\r
La prova de la infraestructura de xarxa pot significar algunes coses. Per als fins d'aquest curs, diem que es centra en avaluar la postura de seguretat de la infraestructura de xarxa real i en com pot ajudar a defensar-se contra atacs. Això sovint inclou els commutadors, encaminadors, firewalls i recursos de suport, com l'autenticació, l'autorització i els servidors de comptabilitat (AAA) i els IPS. Una prova de penetració en la infraestructura sense fil a vegades pot incloure's en l'abast d'una prova d'infraestructura de xarxa. No obstant això, es realitzarien tipus addicionals de proves més enllà d'una avaluació de xarxa cablejada. Per exemple, un provador de seguretat sense fil intentaria ingressar a una xarxa a través de la xarxa sense fil, ja sigui mitjançant l'elusió dels mecanismes de seguretat o trencant els mètodes criptogràfics utilitzats per assegurar el trànsit. Provar la infraestructura sense fil ajuda una organització a determinar les debilitats en la implementació sense fil, així com l'exposició. Sovint inclou un mapa de calor detallat de la distribució de la senyal.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Proves basades en aplicacions\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves basades en aplicacions\r
Aquest tipus de prova de penetració es centra en provar les debilitats de seguretat en les aplicacions empresarials. Aquestes debilitats poden incloure, entre altres, configuracions incorrectes, problemes de validació d'entrada, problemes d'injecció i fallades de lògica. Degut a que una aplicació web generalment es construeix en un servidor web amb una base de dades de suport, l'abast de les proves normalment inclou la base de dades també. No obstant això, es centra en obtenir accés a aquesta base de dades de suport a través de la compromís de l'aplicació web. Un gran recurs que mencionem diverses vegades en aquest llibre és el Projecte de seguretat d'aplicacions web obertes (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Proves al núvol\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves de penetració al núvol\r
Els proveïdors de serveis al núvol (CSP), com Azure, Amazon Web Services (AWS) i Google Cloud Platform (GCP), no tenen més remei que prendre's molt seriosament les seves responsabilitats de seguretat i compliment. Per exemple, Amazon va crear el [Model de responsabilitat compartida](https://aws.amazon.com/compliance/shared-responsibility-model) per descriure les responsabilitats dels clients d'AWS i les responsabilitats d'Amazon en detall. \r
\r
La responsabilitat de la seguretat al núvol depèn del tipus de model de núvol (programari com a servei [SaaS], plataforma com a servei [PaaS] o infraestructura com a servei [IaaS]). Per exemple, amb IaaS, el client (consumidor de la núvol) és responsable de les dades, les aplicacions, el temps d'execució, el middleware, les màquines virtuals (VM), els contenidors i els sistemes operatius en les VM. Independentment del model utilitzat, la seguretat al núvol és responsabilitat tant del client com del proveïdor de la núvol. Aquests detalls s'han de resoldre abans de signar un contracte de computació al núvol. Aquests contractes varien segons els requisits de seguretat del client. Les consideracions inclouen la recuperació davant de desastres, els acords de nivell de servei (SLA), la integritat de les dades i el xifrat. Per exemple, es proporciona el xifrat d'extrem a extrem o només en el proveïdor de la núvol? A més, qui administra les claus de xifrat, el CSP o el client?\r
\r
En general, desitja assegurar-se que el CSP tingui les mateixes capes de seguretat (lògica, física i administrativa) en el seu lloc que tindria per als serveis que controla. En realitzar proves de penetració al núvol, ha de comprendre què pot fer i què no pot fer. La majoria dels CSP tenen pautes detallades sobre com realitzar avaluacions de seguretat i proves de penetració al núvol. Independentment, hi ha moltes amenaces potencials quan les organitzacions es traslladen a un model de núvol. Per exemple, tot i que les seves dades estan al núvol, han de residir en una ubicació física en algun lloc. El seu proveïdor de la núvol ha d'acceptar per escrit proporcionar el nivell de seguretat requerit pels seus clients. Com a exemple, [la Política de suport al client d'AWS per a proves de penetració](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note atacs físics vs. enginyeria social\r
Molts pentesters troben l'aspecte físic de les proves com allò més divert perquè essencialment se'ls paga per irrompre en la instal·lació d'un objectiu. Aquest tipus de prova pot ajudar a exposar qualsevol debilitat en el perímetre físic, així com qualsevol mecanisme de seguretat que estigui en el seu lloc, com a guàrdies, portes i tanques. El resultat ha de ser una avaluació dels controls de seguretat física externs. La majoria de les compromisos d'avui en dia comencen amb algun tipus d'atac d'enginyeria social. Això podria ser una trucada telefònica, un correu electrònic, un lloc web, un missatge SMS, i així successivament. És important provar com els seus empleats manegen aquest tipus de situacions. Aquest tipus de prova sovint s'omet dels abast d'una prova de penetració principalment perquè implica principalment provar a les persones en lloc de la tecnologia. En la majoria dels casos, la gerència no està d'acord amb aquest tipus d'enfocament. No obstant això, és important obtenir una visió del món real dels últims mètodes d'atac. El resultat d'una prova d'enginyeria social ha d'ésser avaluar el programa de conscienciació de seguretat perquè pugui millorar-lo. No hauria de ser identificar a les persones que no aproven la prova. Una de les eines de les quals parlem més endavant en un mòdul posterior és el Social-Engineer Toolkit (SET), creat per Dave Kennedy. Aquesta és una gran eina per realitzar campanyes de prova d'enginyeria social.\r
:::\r
\r
::: tip Programes de recompenses per errors\r
Els programes de recompenses per errors permeten als investigadors de seguretat i als provadors de penetració obtenir reconeixement (i sovint compensació monetària) per trobar vulnerabilitats en llocs web, aplicacions o qualsevol altre tipus de sistemes. Empreses com Microsoft, Apple i Cisco i fins i tot institucions governamentals com el Departament de Defensa dels EUA (DoD) utilitzen programes de recompenses per errors per recompensar els professionals de la seguretat quan troben vulnerabilitats en els seus sistemes. Moltes empreses de seguretat, com HackerOne, Bugcrowd, Intigriti i SynAck, proporcionen plataformes perquè les empreses i els professionals de la seguretat participin en programes de recompenses per errors. Aquests programes són diferents de les proves de penetració tradicionals però tenen un objectiu similar: trobar vulnerabilitats de seguretat per permetre que l'organització les solucioni abans que els atacants maliciosos puguin explotar aquestes vulnerabilitats. Hi ha diferents consells i recursos sobre recompenses per errors en aquest [repositori GitHub](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties).\r
:::\r
\r
Quan es parla de mètodes de prova de penetració, és probable que escolti els termes entorn desconegut (anteriorment conegut com a caixa negra), entorn conegut (anteriorment conegut com a caixa blanca) i entorn parcialment conegut (anteriorment conegut com a caixa gris) prova. Aquests termes s'utilitzen per descriure la perspectiva des de la qual es realitza la prova, així com la quantitat d'informació que es proporciona al provador:\r
\r
:::: code-group\r
::: code-group-item Prova d'entorn desconegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn desconegut\r
En una prova de penetració d'entorn desconegut, el provador generalment només rep una quantitat molt limitada d'informació. Per exemple, el provador pot rebre només els noms de domini i les adreces IP que estan dins de l'abast d'un objectiu en particular. La idea d'aquest tipus de limitació és que el provador comenci amb la perspectiva que un atacant extern podria tenir. Típicament, un atacant primer determinaria un objectiu i després començaria a recopilar informació sobre l'objectiu, utilitzant informació pública i obtenint més i més informació per utilitzar en atacs. El provador no tindria coneixement previ de l'organització i la infraestructura de l'objectiu. Un altre aspecte de les proves d'entorn desconegut és que a vegades al personal de suport de xarxa de l'objectiu no se li dóna informació sobre quan exactament s'està duent a terme la prova. Això permet que també es dugui a terme un exercici de defensa i elimina el problema que un objectiu es prepari per a la prova i no doni una visió del món real de com es veu realment la postura de seguretat.\r
\r
Aquest tipus de prova sol ser la més difícil per al provador a causa de la manca d'informació. No obstant això, també és el més realista perquè és el més proper a com un atacant s'acostaria a l'objectiu.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prova d'entorn conegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn conegut\r
En una prova de penetració d'entorn conegut, el provador comença amb una quantitat significativa d'informació sobre l'organització i la seva infraestructura. Normalment, al provador se li proporcionarien coses com diagrames de xarxa, adreces IP, configuracions i un conjunt de credencials d'usuari. Si l'abast inclou una avaluació de l'aplicació, el provador també podria rebre el codi font de l'aplicació objectiu. La idea d'aquest tipus de prova és identificar la major quantitat de forats de seguretat possible. En una prova d'entorn desconegut, l'abast pot ser només identificar un camí cap a l'organització i aturar-se allà. Amb les proves d'entorn conegut, l'abast sol ser molt més ampli i inclou auditories de configuració de xarxa interna i escaneig d'ordinadors d'escriptori per defectes. El temps i els diners són factors decisius típics en la determinació de quin tipus de prova de penetració completar. Si una empresa té preocupacions específiques sobre una aplicació, un servidor o un segment de la infraestructura, pot proporcionar informació sobre aquest objectiu específic per disminuir l'abast i la quantitat de temps dedicat a la prova, però encara descobrir els resultats desitjats. Amb la sofisticació i les capacitats dels adversaris d'avui, és probable que la majoria de les xarxes es vegin compromeses en algun moment, i un enfocament de caixa blanca no és una mala opció.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prova d'entorn parcialment conegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn parcialment conegut\r
Una prova de penetració d'entorn parcialment conegut és quelcom així com un enfocament híbrid entre proves d'entorn desconegut i conegut. Amb les proves d'entorn parcialment conegut, els provadors poden rebre credencials però no documentació completa de la infraestructura de xarxa. Això permetria als provadors seguir proporcionant resultats de les seves proves des de la perspectiva del punt de vista d'un atacant extern. Tenint en compte el fet que la majoria de les infraccions comencen al client i s'obren camí a tota la xarxa, un bon enfocament seria un abast on els provadors comencin a l'interior de la xarxa i tinguin accés a una màquina client. Llavors podrien pivotar a tota la xarxa per determinar quin seria l'impacte d'una violació.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
## 1.2.4. Practice - Types of Penetration Tests\r
\r
## 1.2.5 Surveying Different Standards and Methodologies\r
\r
There are a number of penetration testing methodologies that have been around for a while and continue to be updated as new threats emerge.\r
\r
The following is a list of some of the most common penetration testing methodologies and other standards:\r
`]},{title:"1. Introduction to Ethical Hacking and Penetration Testing",headers:[],path:"/en/ethical_hacking/",pathLocale:"/en/",extraFields:[`---\r
title: 1. Introduction to Ethical Hacking and Penetration Testing\r
---\r
\r
# 1. Introduction to Ethical Hacking and Penetration Testing\r
# 1. Introducción al hacking ético y las pruebas de penetración\r
# 1. Introducció al hacking ètic i les proves de penetració\r
\r
Before we jump into how to perform penetration testing, you first need to understand some core concepts about the “art of hacking” that will help you understand the other concepts discussed throughout this course. For example, you need to understand the difference between ethical hacking and unethical hacking. The tools and techniques used in this field change rapidly, so understanding the most current threats and attacker motivations is also important. Some consider penetration testing an art; however, this art needs to start out with a methodology if it is to be effective. Furthermore, you need to spend some time understanding the different types of testing and the industry methods used. Finally, this is a hands-on concept, and you need to know how to get your hands dirty by properly building a lab environment for testing.\r
\r
Antes de sumergirnos en cómo realizar pruebas de penetración, primero debe comprender algunos conceptos básicos sobre el "arte del hacking" que lo ayudarán a comprender los otros conceptos que se discuten a lo largo de este curso. Por ejemplo, debe comprender la diferencia entre el hacking ético y el hacking no ético. Las herramientas y técnicas utilizadas en este campo cambian rápidamente, por lo que también es importante comprender las amenazas y las motivaciones de los atacantes más actuales. Algunos consideran que las pruebas de penetración son un arte; sin embargo, este arte debe comenzar con una metodología si quiere ser efectivo. Además, debe dedicar algo de tiempo a comprender los diferentes tipos de pruebas y los métodos utilizados en la industria. Finalmente, este es un concepto práctico y debe saber cómo ensuciarse las manos construyendo adecuadamente un entorno de laboratorio para las pruebas.\r
\r
Abans de submergir-nos en com realitzar proves de penetració, primer ha de comprendre alguns conceptes bàsics sobre l'"art del hacking" que l'ajudaran a comprendre els altres conceptes que es discuteixen al llarg d'aquest curs. Per exemple, ha de comprendre la diferència entre el hacking ètic i el hacking no ètic. Les eines i tècniques utilitzades en aquest camp canvien ràpidament, per la qual cosa també és important comprendre les amenaces i les motivacions dels atacants més actuals. Alguns consideren que les proves de penetració són un art; no obstant això, aquest art ha de començar amb una metodologia si vol ser efectiu. A més, ha de dedicar una mica de temps a comprendre els diferents tipus de proves i els mètodes utilitzats en la indústria. Finalment, aquest és un concepte pràctic i ha de saber com embrutar-se les mans construint adequadament un entorn de laboratori per a les proves.\r
\r
Module Objective: Explain the importance of methodological ethical hacking and penetration testing.\r
\r
Objetivo del módulo: Explique la importancia de la metodología de hacking ético y las pruebas de penetración.\r
\r
Objectiu del mòdul: Expliqueu la importància de la metodologia de hacking ètic i les proves de penetració.\r
\r
| Topic   | Objective |\r
|---|---|\r
| Understanding Ethical Hacking and Penetration testing | Explain the importance of ethical hacking and penetration testing |\r
| Exploring penetration testing methodologies | Explain different types of penetration testing methodologies and frameworks |\r
| Building a penetration testing lab | Build a penetration testing lab |\r
\r
| Tema   | Objetivo |\r
|---|---|\r
| Comprender el hacking ético y las pruebas de penetración | Explique la importancia del hacking ético y las pruebas de penetración |\r
| Explorar metodologías de pruebas de penetración | Explique los diferentes tipos de metodologías y marcos de pruebas de penetración |\r
| Creación de un laboratorio de pruebas de penetración | Construir un laboratorio de pruebas de penetración |\r
\r
| Tema   | Objectiu |\r
|---|---|\r
| Comprendre el hacking ètic i les proves de penetració | Expliqueu la importància del hacking ètic i les proves de penetració |\r
| Explorar metodologies de proves de penetració | Expliqueu els diferents tipus de metodologies i marcs de proves de penetració |\r
| Creació d'un laboratori de proves de penetració | Construir un laboratori de proves de penetració |\r
`]},{title:"1.2 Concurrencia",headers:[{level:2,title:"1.2.1. Concurrencia vs Paralelismo",slug:"_1-2-1-concurrencia-vs-paralelismo",link:"#_1-2-1-concurrencia-vs-paralelismo",children:[{level:3,title:"Monoproceso",slug:"monoproceso",link:"#monoproceso",children:[]},{level:3,title:"Multiprogramación",slug:"multiprogramacion",link:"#multiprogramacion",children:[]},{level:3,title:"Paralelismo",slug:"paralelismo",link:"#paralelismo",children:[]}]},{level:2,title:"1.2.2. Sistemas distribuidos",slug:"_1-2-2-sistemas-distribuidos",link:"#_1-2-2-sistemas-distribuidos",children:[]},{level:2,title:"1.2.3. Ventajas e inconvenientes",slug:"_1-2-3-ventajas-e-inconvenientes",link:"#_1-2-3-ventajas-e-inconvenientes",children:[]},{level:2,title:"1.2.4. Condiciones de Bernstein",slug:"_1-2-4-condiciones-de-bernstein",link:"#_1-2-4-condiciones-de-bernstein",children:[]}],path:"/en/unit1/concurrency.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"1 Introducción",headers:[{level:2,title:"Objetivos",slug:"objetivos",link:"#objetivos",children:[]}],path:"/en/unit1/",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"1.3 Procesos en el SO",headers:[{level:2,title:"1.3.1. El kernel del SO",slug:"_1-3-1-el-kernel-del-so",link:"#_1-3-1-el-kernel-del-so",children:[]},{level:2,title:"1.3.2. Control de procesos en GNU/Linux",slug:"_1-3-2-control-de-procesos-en-gnu-linux",link:"#_1-3-2-control-de-procesos-en-gnu-linux",children:[{level:3,title:"Comandos para saber el pid de los procesos",slug:"comandos-para-saber-el-pid-de-los-procesos",link:"#comandos-para-saber-el-pid-de-los-procesos",children:[]},{level:3,title:"Comandos para ver los procesos activos",slug:"comandos-para-ver-los-procesos-activos",link:"#comandos-para-ver-los-procesos-activos",children:[]},{level:3,title:"Control de procesos",slug:"control-de-procesos",link:"#control-de-procesos",children:[]}]},{level:2,title:"1.3.3. Estados de un proceso",slug:"_1-3-3-estados-de-un-proceso",link:"#_1-3-3-estados-de-un-proceso",children:[]},{level:2,title:"1.3.4 Planificación de procesos",slug:"_1-3-4-planificacion-de-procesos",link:"#_1-3-4-planificacion-de-procesos",children:[]},{level:2,title:"1.3.5. Algoritmos de planificación de procesos",slug:"_1-3-5-algoritmos-de-planificacion-de-procesos",link:"#_1-3-5-algoritmos-de-planificacion-de-procesos",children:[{level:3,title:"FCFS - First Come First Served",slug:"fcfs-first-come-first-served",link:"#fcfs-first-come-first-served",children:[]},{level:3,title:"SJF - Shortest Job First",slug:"sjf-shortest-job-first",link:"#sjf-shortest-job-first",children:[]},{level:3,title:"Planificación por prioridad",slug:"planificacion-por-prioridad",link:"#planificacion-por-prioridad",children:[]},{level:3,title:"Round Robin",slug:"round-robin",link:"#round-robin",children:[]},{level:3,title:"Procesos con operaciones de E/S o bloqueos",slug:"procesos-con-operaciones-de-e-s-o-bloqueos",link:"#procesos-con-operaciones-de-e-s-o-bloqueos",children:[]}]}],path:"/en/unit1/operatingsystem.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"1.1 Procesos, programas, hilos",headers:[{level:2,title:"1.1.1. Procesos y programas",slug:"_1-1-1-procesos-y-programas",link:"#_1-1-1-procesos-y-programas",children:[]},{level:2,title:"1.1.2. Programación concurrente",slug:"_1-1-2-programacion-concurrente",link:"#_1-1-2-programacion-concurrente",children:[{level:3,title:"¿Para qué?",slug:"¿para-que",link:"#¿para-que",children:[]},{level:3,title:"Comunicación y sincronización entre procesos",slug:"comunicacion-y-sincronizacion-entre-procesos",link:"#comunicacion-y-sincronizacion-entre-procesos",children:[]}]},{level:2,title:"1.1.3. Servicios e hilos",slug:"_1-1-3-servicios-e-hilos",link:"#_1-1-3-servicios-e-hilos",children:[{level:3,title:"Programa secuencial (Arquitectura Von Newmann)",slug:"programa-secuencial-arquitectura-von-newmann",link:"#programa-secuencial-arquitectura-von-newmann",children:[]},{level:3,title:"Programa concurrente",slug:"programa-concurrente",link:"#programa-concurrente",children:[]},{level:3,title:"Hilos vs procesos",slug:"hilos-vs-procesos",link:"#hilos-vs-procesos",children:[]}]}],path:"/en/unit1/process.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"2.4 Anexo I - Curl",headers:[{level:2,title:"2.4.1 Cómo obtener curl",slug:"_2-4-1-como-obtener-curl",link:"#_2-4-1-como-obtener-curl",children:[]},{level:2,title:"2.4.2 Realizando una petición GET",slug:"_2-4-2-realizando-una-peticion-get",link:"#_2-4-2-realizando-una-peticion-get",children:[]},{level:2,title:"2.4.2 Puntos finales y rutas",slug:"_2-4-2-puntos-finales-y-rutas",link:"#_2-4-2-puntos-finales-y-rutas",children:[]},{level:2,title:"2.4.3 Métodos HTTP y cabeceras",slug:"_2-4-3-metodos-http-y-cabeceras",link:"#_2-4-3-metodos-http-y-cabeceras",children:[]},{level:2,title:"2.4.4 Authentication",slug:"_2-4-4-authentication",link:"#_2-4-4-authentication",children:[]},{level:2,title:"2.4.5 References",slug:"_2-4-5-references",link:"#_2-4-5-references",children:[]}],path:"/en/unit2/curl_annex.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"2 Introducción",headers:[{level:2,title:"Objetivos",slug:"objetivos",link:"#objetivos",children:[]}],path:"/en/unit2/",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"2.3 Gestión de la E-S de un proceso",headers:[{level:2,title:"2.3.1  Redirección de la E/S estándar",slug:"_2-3-1-redireccion-de-la-e-s-estandar",link:"#_2-3-1-redireccion-de-la-e-s-estandar",children:[{level:3,title:"getInputStream()",slug:"getinputstream",link:"#getinputstream",children:[]},{level:3,title:"getErrorStream()",slug:"geterrorstream",link:"#geterrorstream",children:[]},{level:3,title:"getOutputStream()",slug:"getoutputstream",link:"#getoutputstream",children:[]},{level:3,title:"Heredar la E/S del proceso padre",slug:"heredar-la-e-s-del-proceso-padre",link:"#heredar-la-e-s-del-proceso-padre",children:[]},{level:3,title:"Pipelines",slug:"pipelines",link:"#pipelines",children:[]}]},{level:2,title:"2.3.2 Redirección de las Entradas y Salidas Estándar",slug:"_2-3-2-redireccion-de-las-entradas-y-salidas-estandar",link:"#_2-3-2-redireccion-de-las-entradas-y-salidas-estandar",children:[]},{level:2,title:"2.3.3 Información de los procesos en Java",slug:"_2-3-3-informacion-de-los-procesos-en-java",link:"#_2-3-3-informacion-de-los-procesos-en-java",children:[]}],path:"/en/unit2/iostreams.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"2.2 Gestión de procesos en Java - ProcessBuilder y Process",headers:[{level:2,title:"2.2.1 Preparación y configuración de un proceso",slug:"_2-2-1-preparacion-y-configuracion-de-un-proceso",link:"#_2-2-1-preparacion-y-configuracion-de-un-proceso",children:[{level:3,title:"Modificar el comando en tiempo de ejecución",slug:"modificar-el-comando-en-tiempo-de-ejecucion",link:"#modificar-el-comando-en-tiempo-de-ejecucion",children:[]},{level:3,title:"Configuraciones adicionales de un proceso",slug:"configuraciones-adicionales-de-un-proceso",link:"#configuraciones-adicionales-de-un-proceso",children:[]}]},{level:2,title:"2.2.2 Acceso al proceso una vez en ejecución",slug:"_2-2-2-acceso-al-proceso-una-vez-en-ejecucion",link:"#_2-2-2-acceso-al-proceso-una-vez-en-ejecucion",children:[{level:3,title:"Lanzar una clase Java como proceso desde otra clase java en el mismo proyecto",slug:"lanzar-una-clase-java-como-proceso-desde-otra-clase-java-en-el-mismo-proyecto",link:"#lanzar-una-clase-java-como-proceso-desde-otra-clase-java-en-el-mismo-proyecto",children:[]}]}],path:"/en/unit2/processbuilder.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"2.1 Creación de procesos en Java con Runtime",headers:[{level:2,title:"2.1.1. Creación rápida de procesos",slug:"_2-1-1-creacion-rapida-de-procesos",link:"#_2-1-1-creacion-rapida-de-procesos",children:[]},{level:2,title:"2.1.2 Propiedades del sistema y comandos del sistema",slug:"_2-1-2-propiedades-del-sistema-y-comandos-del-sistema",link:"#_2-1-2-propiedades-del-sistema-y-comandos-del-sistema",children:[]}],path:"/en/unit2/runtime.html",pathLocale:"/en/",extraFields:[`---\r
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
`]},{title:"1.1. Understanding Ethical Hacking & Penetration Testing",headers:[{level:2,title:"1.1.1. Overview",slug:"_1-1-1-overview",link:"#_1-1-1-overview",children:[]},{level:2,title:"1.1.1. Descripción general",slug:"_1-1-1-descripcion-general",link:"#_1-1-1-descripcion-general",children:[]},{level:2,title:"1.1.1. Descripció general",slug:"_1-1-1-descripcio-general",link:"#_1-1-1-descripcio-general",children:[]},{level:2,title:"1.1.3. Activity Lab - Researching PenTesting Careers",slug:"_1-1-3-activity-lab-researching-pentesting-careers",link:"#_1-1-3-activity-lab-researching-pentesting-careers",children:[]},{level:2,title:"1.1.3. Actividad Laboratorio - Investigación de carreras de PenTesting",slug:"_1-1-3-actividad-laboratorio-investigacion-de-carreras-de-pentesting",link:"#_1-1-3-actividad-laboratorio-investigacion-de-carreras-de-pentesting",children:[]},{level:2,title:"1.1.3. Activitat Laboratori - Investigació de carreres de PenTesting",slug:"_1-1-3-activitat-laboratori-investigacio-de-carreres-de-pentesting",link:"#_1-1-3-activitat-laboratori-investigacio-de-carreres-de-pentesting",children:[]},{level:2,title:"1.1.4. Threat Actors",slug:"_1-1-4-threat-actors",link:"#_1-1-4-threat-actors",children:[]},{level:2,title:"1.1.4. Atacantes",slug:"_1-1-4-atacantes",link:"#_1-1-4-atacantes",children:[]},{level:2,title:"1.1.4. Atacants",slug:"_1-1-4-atacants",link:"#_1-1-4-atacants",children:[]}],path:"/es/ethical_hacking/a%20UnderstandingETandPT.html",pathLocale:"/es/",extraFields:[`---\r
title: 1.1. Understanding Ethical Hacking & Penetration Testing\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
export_on_save:\r
 markdown: true\r
---\r
\r
# 1.1. Understanding Ethical Hacking & Penetration Testing\r
# 1.1. Comprendiendo el hacking ético y las pruebas de penetración\r
# 1.1. Comprendre el hacking ètic i les proves de penetració\r
\r
## 1.1.1. Overview\r
## 1.1.1. Descripción general\r
## 1.1.1. Descripció general\r
\r
As a refresher, the term ethical hacker describes a person who acts as an attacker and evaluates the security posture of a computer network for the purpose of minimizing risk. The NIST Computer Security Resource Center (CSRC) defines a hacker as an “unauthorized user who attempts to or gains access to an information system.” Now, we all know that the term hacker has been used in many different ways and has many different definitions. Most people in a computer technology field would consider themselves hackers based on the simple fact that they like to tinker. This is obviously not a malicious thing. So, the key factor here in defining ethical versus md:no-line-numbersthical hacking is that the latter involves malicious intent. The permission to attack or permission to test is crucial and what will keep you out of trouble! This permission to attack is often referred to as “the scope” of the test (what you are allowed and not allowed to test). More on this later in this module.\r
\r
A modo de recordatorio, el término hacker ético describe a una persona que actúa como atacante y evalúa la postura de seguridad de una red informática con el propósito de minimizar el riesgo. El Centro de Recursos de Seguridad Informática (CSRC) del Instituto Nacional de Estándares y Tecnología (NIST) define a un hacker como un "usuario no autorizado que intenta o accede a un sistema de información". Ahora, todos sabemos que el término hacker se ha utilizado de muchas maneras diferentes y tiene muchas definiciones diferentes. La mayoría de las personas en un campo de tecnología informática se considerarían hackers en base al simple hecho de que les gusta trastear. Obviamente, esto no es algo malicioso. Por lo tanto, el factor clave aquí para definir el hacking ético frente al no ético es que este último implica una intención maliciosa. ¡La autorización para atacar o la autorización para probar es crucial y lo que te mantendrá fuera de problemas! Esta autorización para atacar a menudo se denomina "el alcance" de la prueba (lo que se le permite y no se le permite probar). Más sobre esto más adelante en este módulo.\r
\r
Com a recordatori , el terme hacker ètic descriu una persona que actua com a atacant i avalua la postura de seguretat d'una xarxa informàtica amb la finalitat de minimitzar el risc. El Centre de Recursos de Seguretat Informàtica (CSRC) de l'Institut Nacional d'Estàndards i Tecnologia (NIST) defineix a un hacker com un "usuari no autoritzat que intenta o accedeix a un sistema d'informació". Ara, tots sabem que el terme hacker s'ha utilitzat de moltes maneres diferents i té moltes definicions diferents. La majoria de les persones en un camp de tecnologia informàtica es considerarien hackers en base al simple fet que els agrada trastejar. Òbviament, això no és quelcom maliciós. Per tant, el factor clau aquí per definir el hacking ètic front al no ètic és que aquest últim implica una intenció maliciosa. L'autorització per atacar o l'autorització per provar és crucial i el que et mantindrà fora de problemes! Aquesta autorització per atacar sovint es denomina "l'abast" de la prova (el que se li permet i no se li permet provar). Més sobre això més endavant en aquest mòdul.\r
\r
A security researcher looking for vulnerabilities in products, applications, or web services is considered an ethical hacker if he or she responsibly discloses those vulnerabilities to the vendors or owners of the targeted research. However, the same type of “research” performed by someone who then uses the same vulnerability to gain unauthorized access to a target network/system would be considered a md:no-line-numbersthical hacker. We could even go so far as to say that someone who finds a vulnerability and discloses it publicly without working with a vendor is considered a md:no-line-numbersthical hacker – because this could lead to the compromise of networks/systems by others who use this information in a malicious way.\r
\r
Un investigador de seguridad que busca vulnerabilidades en productos, aplicaciones o servicios web se considera un hacker ético si divulga responsablemente esas vulnerabilidades a los proveedores o propietarios de la investigación objetivo. Sin embargo, el mismo tipo de "investigación" realizada por alguien que luego usa la misma vulnerabilidad para obtener acceso no autorizado a una red / sistema objetivo se consideraría un hacker no ético. Incluso podríamos ir tan lejos como para decir que alguien que encuentra una vulnerabilidad y la divulga públicamente sin trabajar con un proveedor se considera un hacker no ético, porque esto podría conducir a la compromiso de redes / sistemas por otros que usan esta información de manera maliciosa.\r
\r
Un investigador de seguretat que busca vulnerabilitats en productes, aplicacions o serveis web es considera un hacker ètic si divulga responsablement aquestes vulnerabilitats als proveïdors o propietaris de la investigació objectiu. No obstant això, el mateix tipus d '"investigació" realitzada per algú que després utilitza la mateixa vulnerabilitat per obtenir accés no autoritzat a una xarxa / sistema objectiu es consideraria un hacker no ètic. Fins i tot podríem anar tan lluny com per dir que algú que troba una vulnerabilitat i la divulga públicament sense treballar amb un proveïdor es considera un hacker no ètic, perquè això podria conduir a la compromís de xarxes / sistemes per altres que utilitzen aquesta informació de manera maliciosa.\r
\r
The truth is that as an ethical hacker, you use the same tools to find vulnerabilities and exploit targets as do md:no-line-numbersthical hackers. However, as an ethical hacker, you would typically report your findings to the vendor or customer you are helping to make the network more secure. You would also try to avoid performing any tests or exploits that might be destructive in nature.\r
\r
La realidad es que como hacker ético, utilizas las mismas herramientas para encontrar vulnerabilidades y explotar objetivos que los hackers no éticos. Sin embargo, como hacker ético, normalmente informarías tus hallazgos al proveedor o cliente al que estás ayudando a hacer que la red sea más segura. También intentarías evitar realizar pruebas o exploits que puedan ser destructivos por naturaleza.\r
\r
La realitat es que com a hacker ètic, utilitzeu les mateixes eines per trobar vulnerabilitats i explotar objectius que els hackers no ètics. No obstant això, com a hacker ètic, normalment informaríeu els vostres descobriments al proveïdor o client al qual esteu ajudant a fer que la xarxa sigui més segura. També intentaríeu evitar realitzar proves o exploits que puguin ser destructius per naturalesa.\r
\r
An ethical hacker’s goal is to analyze the security posture of a network’s or system’s infrastructure in an effort to identify and possibly exploit any security weaknesses found and then determine if a compromise is possible. This process is called security penetration testing or ethical hacking.\r
\r
Un hacker ético tiene como objetivo analizar la postura de seguridad de la infraestructura de una red o sistema en un esfuerzo por identificar y posiblemente explotar cualquier debilidad de seguridad encontrada y luego determinar si es posible un compromiso. Este proceso se llama prueba de penetración de seguridad o hacking ético.\r
\r
Un hacker ètic te com objectiu analitzar la postura de seguretat de la infraestructura d'una xarxa o sistema en un esforç per identificar i possiblement explotar qualsevol debilitat de seguretat trobada i després determinar si és possible un compromís. Aquest procés es diu prova de penetració de seguretat o hacking ètic.\r
\r
::: tip\r
Hacking is NOT a Crime ( [hackingisnotacrime.org](https://www.hackingisnotacrime.org/) ) is a nonprofit organization that attempts to raise awareness about the pejorative use of the term hacker. Historically, hackers have been portrayed as evil or illegal. Luckily, a lot of people already know that hackers are curious individuals who want to understand how things work and how to make them more secure. The organization’s goal is to educate the public about the positive aspects of hacking and to dispel the negative connotations associated with the term.\r
\r
Hackear NO es un crimen ( [hackingisnotacrime.org](https://www.hackingisnotacrime.org/) ) es una organización sin fines de lucro que intenta crear conciencia sobre el uso peyorativo del término hacker. Históricamente, los hackers han sido retratados como malvados o ilegales. Afortunadamente, mucha gente ya sabe que los hackers son personas curiosas que quieren entender cómo funcionan las cosas y cómo hacerlas más seguras. El objetivo de la organización es educar al público sobre los aspectos positivos del hacking y disipar las connotaciones negativas asociadas con el término.\r
\r
Hackejar NO és un crim ( [hackingisnotacrime.org](https://www.hackingisnotacrime.org/) ) és una organització sense ànim de lucre que intenta crear consciència sobre l'ús pejoratiu del terme hacker. Històricament, els hackers han estat retratats com a malvats o il·legals. Afortunadament, molta gent ja sap que els hackers són persones curioses que volen entendre com funcionen les coses i com fer-les més segures. L'objectiu de l'organització és educar al públic sobre els aspectes positius del hacking i dissipar les connotacions negatives associades amb el terme.\r
:::\r
\r
# 1.1.2. Why Do We Need to Do Penetration Testing?\r
# 1.1.2. ¿Por qué necesitamos hacer pruebas de penetración?\r
# 1.1.2. Per què necessitem fer proves de penetració?\r
\r
So, why do we need penetration testing? Well, first of all, as someone who is responsible for securing and defending a network/system, you want to find any possible paths of compromise before the bad guys do. For years we have developed and implemented many different defensive techniques (for instance, antivirus, firewalls, intrusion prevention systems [IPSs], anti-malware). We have deployed defense-in-depth as a method to secure and defend our networks. But how do we know if those defenses really work and whether they are enough to keep out the bad guys? How valuable is the data that we are protecting, and are we protecting the right things? These are some of the questions that should be answered by a penetration test. If you build a fence around your yard with the intent of keeping your dog from getting out, maybe it only needs to be 4 feet tall. However, if your concern is not the dog getting out but an intruder getting in, then you need a different fence – one that would need to be much taller than 4 feet. Depending on what you are protecting, you might also want razor wire on the top of the fence to deter the bad guys even more. When it comes to information security, we need to do the same type of assessments on our networks and systems. We need to determine what it is we are protecting and whether our defenses can hold up to the threats that are imposed on them. This is where penetration testing comes in. Simply implementing a firewall, an IPS, anti-malware, a VPN, a web application firewall (WAF), and other modern security defenses isn’t enough. You also need to test their validity. And you need to do this on a regular basis. As you know, networks and systems change constantly. This means the attack surface can change as well, and when it does, you need to consider reevaluating the security posture by way of a penetration test.\r
\r
Entonces, ¿por qué necesitamos pruebas de penetración? Bueno, en primer lugar, como alguien que es responsable de asegurar y defender una red / sistema, desea encontrar cualquier posible camino de compromiso antes de que lo hagan los tipos malos. Durante años hemos desarrollado e implementado muchas técnicas defensivas diferentes (por ejemplo, antivirus, firewalls, sistemas de prevención de intrusiones [IPS], anti-malware). Hemos implementado la defensa en profundidad como un método para asegurar y defender nuestras redes. Pero, ¿cómo sabemos si esas defensas realmente funcionan y si son suficientes para mantener alejados a los tipos malos? ¿Qué tan valiosos son los datos que estamos protegiendo y estamos protegiendo las cosas correctas? Estas son algunas de las preguntas que debería responder una prueba de penetración. Si construye una cerca alrededor de su patio con la intención de evitar que su perro salga, tal vez solo necesite tener 4 pies de altura. Sin embargo, si su preocupación no es que el perro salga sino que un intruso entre, entonces necesita una cerca diferente, una que necesitaría ser mucho más alta que 4 pies. Dependiendo de lo que esté protegiendo, es posible que también desee alambre de púas en la parte superior de la cerca para disuadir aún más a los tipos malos. Cuando se trata de seguridad de la información, necesitamos hacer el mismo tipo de evaluaciones en nuestras redes y sistemas. Necesitamos determinar qué es lo que estamos protegiendo y si nuestras defensas pueden resistir las amenazas que se les imponen. Aquí es donde entran las pruebas de penetración. Simplemente implementar un firewall, un IPS, anti-malware, una VPN, un firewall de aplicaciones web (WAF) y otras defensas de seguridad modernas no es suficiente. También debe probar su validez. Y necesitas hacer esto de forma regular. Como saben, las redes y los sistemas cambian constantemente. Esto significa que la superficie de ataque también puede cambiar, y cuando lo hace, debe considerar revaluar la postura de seguridad mediante una prueba de penetración.\r
\r
Llavors, per què necessitem proves de penetració? Bé, en primer lloc, com a algú que és responsable d'assegurar i defensar una xarxa / sistema, desitja trobar qualsevol possible camí de compromís abans que ho facin els tipus dolents. Durant anys hem desenvolupat i implementat moltes tècniques defensives diferents (per exemple, antivirus, firewalls, sistemes de prevenció d'intrusions [IPS], anti-malware). Hem implementat la defensa en profunditat com un mètode per assegurar i defensar les nostres xarxes. Però, com sabem si aquestes defenses realment funcionen i si són suficients per mantenir allunyats els tipus dolents? Quan valuosos són les dades que estem protegint i estem protegint les coses correctes? Aquestes són algunes de les preguntes que hauria de respondre una prova de penetració. Si construeix una tanca al voltant del seu pati amb la intenció d'evitar que el seu gos surti, potser només necessita tenir 4 peus d'altura. No obstant això, si la seva preocupació no és que el gos surti sinó que un intrús entri, llavors necessita una tanca diferent, una que necessitaria ser molt més alta que 4 peus. Depenent del que estigui protegint, és possible que també vulgueu filferro a la part superior de la tanca per dissuadir encara més als tipus dolents. Quan es tracta de seguretat de la informació, necessitem fer el mateix tipus d'avaluacions a les nostres xarxes i sistemes. Necessitem determinar què és el que estem protegint i si les nostres defenses poden resistir les amenaces que se'ls imposen. Aquí és on entren les proves de penetració. Simplement implementar un firewall, un IPS, anti-malware, una VPN, un firewall d'ap\r
\r
1.1.3 Lab - Researching PenTesting Careers\r
1.1.3 Laboratorio - Investigación de carreras de PenTesting\r
1.1.3 Laboratori - Investigació de carreres de PenTesting\r
\r
It is important for you to understand the employment landscape and the different roles and responsibilities that cybersecurity professions include. A good general reference to explore for descriptions of different job roles is The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). It offers a visual way to discover and compare different job roles in our profession.\r
\r
Es importante que comprendas el panorama laboral y las diferentes funciones y responsabilidades que incluyen las profesiones de ciberseguridad. Una buena referencia general para explorar las descripciones de los diferentes roles de trabajo es la The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). Ofrece una forma visual de descubrir y comparar diferentes roles de trabajo en nuestra profesión.\r
\r
És important que entengueu el panorama laboral i les diferents funcions i responsabilitats que inclouen les professions de ciberseguretat. Una bona referència general per explorar les descripcions dels diferents rols de treball és la The National Initiative for Cybersecurity Careers and Studies (NICCS) [Cyber Career Pathways Tool](https://niccs.cisa.gov/workforce-development/cyber-career-pathways-tool). Ofereix una forma visual de descobrir i comparar diferents rols de treball en la nostra professió.\r
\r
## 1.1.3. Activity Lab - Researching PenTesting Careers\r
## 1.1.3. Actividad Laboratorio - Investigación de carreras de PenTesting\r
## 1.1.3. Activitat Laboratori - Investigació de carreres de PenTesting\r
\r
::: detail Lab 1.1.3\r
In this activity, you discover and compare ethical hacking jobs that are listed on various job boards.\r
\r
En esta actividad, descubrirá y comparará trabajos de hacking ético que figuran en varios tableros de trabajo.\r
\r
En aquesta activitat, descobrireu i comparareu treballs de hacking ètic que figuren en diversos taulells de treball.\r
\r
In this lab, you will complete the following objectives:\r
\r
- Conduct a Penetration Tester Job Search\r
- Analyze Penetration Tester Job Requirements\r
- Discover Resources to Further Your Career\r
\r
En esta práctica, conseguirás los siguientes objetivos:\r
\r
- Realizar una búsqueda de trabajo de Penetration Tester\r
- Analizar los requisitos de trabajo de Penetration Tester\r
- Descubrir recursos para avanzar en tu carrera\r
\r
En aquest laboratori, aconseguiràs els següents objectius:\r
\r
- Realitzar una cerca de feina de Penetration Tester\r
- Analitzeu els requisits de feina de Penetration Tester\r
- Descobriu recursos per avançar en la vostra carrera\r
\r
:::\r
\r
## 1.1.4. Threat Actors\r
## 1.1.4. Atacantes\r
## 1.1.4. Atacants\r
\r
Before you can understand how an ethical hacker or penetration tester can mimic a threat actor (or malicious attacker), you need to understand the different types of threat actors. The following are the most common types of malicious attackers we see today. Select each for more information.\r
\r
Antes de poder comprender cómo un hacker ético o un probador de penetración puede imitar a un actor de amenazas (o atacante malicioso), debe comprender los diferentes tipos de actores de amenazas. Los siguientes son los tipos más comunes de atacantes maliciosos que vemos hoy en día. Seleccione cada uno para obtener más información.\r
\r
Abans de poder comprendre com un hacker ètic o un provador de penetració pot imitar un actor de amenaces (o atacant maliciós), heu de comprendre els diferents tipus d'actors de amenaces. Els següents són els tipus més comuns d'atacants maliciosos que veiem avui en dia. Seleccioneu cadascun per obtenir més informació.\r
\r
:::: code-group\r
::: code-group-item Organized Crime\r
\r
\`\`\`md:no-line-numbers\r
\r
**Organized Crime**\r
Several years ago, the cybercrime industry took over the number-one spot, previously held by the drug trade, for the most profitable illegal industry. As you can imagine, it has attracted a new type of cybercriminal. Just as it did back in the days of Prohibition, organized crime goes where the money is. Organized crime consists of very well-funded and motivated groups that will typically use any and all of the latest attack techniques. Whether that is ransomware or data theft, if it can be monetized, organized crime will use it.\r
\r
**Crimen organizado**\r
Hace varios años, la industria del cibercrimen se apoderó del primer lugar, anteriormente ocupado por el narcotráfico, por la industria ilegal más rentable. Como puedes imaginar, ha atraído a un nuevo tipo de ciberdelincuente. Tal como lo hizo en los días de la Prohibición, el crimen organizado va donde está el dinero. El crimen organizado consiste en grupos muy bien financiados y motivados que típicamente usarán todas y cada una de las últimas técnicas de ataque. Ya sea ransomware o robo de datos, si se puede monetizar, el crimen organizado lo usará.\r
\r
**Crim organitzat**\r
Fa diversos anys, la indústria del cibercrimen es va apoderar del primer lloc, anteriorment ocupat pel narcotràfic, per la indústria il·legal més rendible. Com podeu imaginar, ha atret a un nou tipus de ciberdelinqüent. Tal com ho va fer en els dies de la Prohibició, el crim organitzat va on està el diner. El crim organitzat consisteix en grups molt ben finançats i motivats que típicament utilitzaran totes i cadascuna de les últimes tècniques d'atac. Ja sigui ransomware o robatori de dades, si es pot monetitzar, el crim organitzat ho utilitzarà.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Hacktivists\r
\r
\`\`\`md:no-line-numbers\r
\r
**Hacktivists**\r
This type of threat actor is not motivated by money. Hacktivists are looking to make a point or to further their beliefs, using cybercrime as their method of attack. These types of attacks are often carried out by stealing sensitive data and then revealing it to the public for the purpose of embarrassing or financially affecting a target.\r
\r
**Hacktivistas**\r
Este tipo de actor de amenazas no está motivado por el dinero. Los hacktivistas buscan hacer un punto o promover sus creencias, utilizando el cibercrimen como su método de ataque. Estos tipos de ataques se llevan a cabo a menudo robando datos sensibles y luego revelándolos al público con el propósito de avergonzar o afectar financieramente a un objetivo.\r
\r
**Hacktivistes**\r
Aquest tipus d'actor de amenaces no està motivat pel diner. Els hacktivistes busquen fer un punt o promoure les seves creences, utilitzant el cibercrim com el seu mètode d'atac. Aquests tipus d'atacs es duen a terme sovint robant dades sensibles i després revelant-les al públic amb la finalitat d'avergonyir o afectar financerament a un objectiu.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item State-Sponsored Attackers\r
\r
\`\`\`md:no-line-numbers\r
\r
**State-Sponsored Attackers**\r
Cyber war and cyber espionage are two terms that fit into this category. Many governments around the world today use cyber attacks to steal information from their opponents and cause disruption. Many believe that the next Pearl Harbor will occur in cyberspace. That’s one of the reasons the United States declared cyberspace to be one of the operational domains that U.S. forces would be trained to defend.\r
\r
**Atacantes patrocinados por los estados**\r
La guerra cibernética y el espionaje cibernético son dos términos que se ajustan a esta categoría. Muchos gobiernos de todo el mundo utilizan hoy ataques cibernéticos para robar información de sus oponentes y causar interrupciones. Muchos creen que el próximo Pearl Harbor ocurrirá en el ciberespacio. Esa es una de las razones por las que Estados Unidos declaró que el ciberespacio sería uno de los dominios operativos para los que las fuerzas estadounidenses estarían capacitadas para defenderse.\r
\r
**Atacants patrocinats pels estats**\r
La guerra cibernètica i l'espionatge cibernètic són dos termes que s'ajusten a aquesta categoria. Molts governs d'arreu del món utilitzen avui atacs cibernètics per robar informació dels seus oponents i causar interrupcions. Molts creuen que el proper Pearl Harbor ocorrerà en el ciberespai. Aquesta és una de les raons per les quals els Estats Units van declarar que el ciberespai seria un dels dominis operatius per als quals les forces estatunidenques estarien capacitades per defensar-se.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Insider Threats\r
\r
\`\`\`md:no-line-numbers\r
\r
**Insider Threats**\r
An insider threat is a threat that comes from inside an organization. The motivations of these types of actors are normally different from those of many of the other common threat actors. Insider threats are often normal employees who are tricked into divulging sensitive information or mistakenly clicking on links that allow attackers to gain access to their computers. However, they could also be malicious insiders who are possibly motivated by revenge or money.\r
\r
**Amenazas internas**\r
Una amenaza interna es una amenaza que proviene de dentro de una organización. Las motivaciones de estos tipos de actores normalmente son diferentes de las de muchos de los otros actores de amenazas comunes. Las amenazas internas a menudo son empleados normales que son engañados para divulgar información confidencial o hacer clic por error en enlaces que permiten a los atacantes acceder a sus computadoras. Sin embargo, también podrían ser insiders maliciosos que posiblemente estén motivados por la venganza o el dinero.\r
\r
**Amenaces internes**\r
Una amenaça interna és una amenaça que prové de dins d'una organització. Les motivacions d'aquests tipus d'actors normalment són diferents de les de molts dels altres actors de amenaces comuns. Les amenaces internes sovint són empleats normals que són enganyats per divulgar informació confidencial o fer clic per error en enllaços que permeten als atacants accedir als seus ordinadors. No obstant això, també podrien ser insiders maliciosos que possiblement estiguin motivats per la venjança o el diner.\r
\r
\`\`\`\r
\r
:::\r
::::\r
`]},{title:"1.2. Exploring Penetration Testing Methodologies",headers:[{level:2,title:"1.2.1. Overview",slug:"_1-2-1-overview",link:"#_1-2-1-overview",children:[]},{level:2,title:"1.2.2 Why Do We Need to Follow a Methodology for Penetration Testing?",slug:"_1-2-2-why-do-we-need-to-follow-a-methodology-for-penetration-testing",link:"#_1-2-2-why-do-we-need-to-follow-a-methodology-for-penetration-testing",children:[]},{level:2,title:"1.2.3. Environmental Considerations",slug:"_1-2-3-environmental-considerations",link:"#_1-2-3-environmental-considerations",children:[]},{level:2,title:"1.2.1. Descripción general",slug:"_1-2-1-descripcion-general",link:"#_1-2-1-descripcion-general",children:[]},{level:2,title:"1.2.2 ¿Por qué necesitamos seguir una metodología para las pruebas de penetración?",slug:"_1-2-2-¿por-que-necesitamos-seguir-una-metodologia-para-las-pruebas-de-penetracion",link:"#_1-2-2-¿por-que-necesitamos-seguir-una-metodologia-para-las-pruebas-de-penetracion",children:[]},{level:2,title:"1.2.3. Consideraciones sobre en entorno",slug:"_1-2-3-consideraciones-sobre-en-entorno",link:"#_1-2-3-consideraciones-sobre-en-entorno",children:[]},{level:2,title:"1.2.1. Descripció general",slug:"_1-2-1-descripcio-general",link:"#_1-2-1-descripcio-general",children:[]},{level:2,title:"1.2.2 Per què necessitem seguir una metodologia per a les proves de penetració?",slug:"_1-2-2-per-que-necessitem-seguir-una-metodologia-per-a-les-proves-de-penetracio",link:"#_1-2-2-per-que-necessitem-seguir-una-metodologia-per-a-les-proves-de-penetracio",children:[]},{level:2,title:"1.2.3. Consideracions de l'entorn de proves",slug:"_1-2-3-consideracions-de-l-entorn-de-proves",link:"#_1-2-3-consideracions-de-l-entorn-de-proves",children:[]},{level:2,title:"1.2.4. Practice - Types of Penetration Tests",slug:"_1-2-4-practice-types-of-penetration-tests",link:"#_1-2-4-practice-types-of-penetration-tests",children:[]},{level:2,title:"1.2.5 Surveying Different Standards and Methodologies",slug:"_1-2-5-surveying-different-standards-and-methodologies",link:"#_1-2-5-surveying-different-standards-and-methodologies",children:[]}],path:"/es/ethical_hacking/b%20Pentesting%20methodologies.html",pathLocale:"/es/",extraFields:[`---\r
title: 1.2. Exploring Penetration Testing Methodologies\r
# Frontmatter para guardar imágenes generadas por MDE\r
#markdown: \r
# image_dir: /docs/.vuepress/public/media\r
export_on_save:\r
 markdown: true\r
---\r
\r
# 1.2. Exploring Penetration Testing Methodologies\r
\r
## 1.2.1. Overview\r
\r
There is more to penetration testing than hacking away at a customer's network. A haphazard approach will result in haphazard results. It is important to follow well-known methods and standards in order to approach pentesting engagements in an organized, systematic way.\r
\r
You should understand the major documented methodologies and standards so that you can create strategies that draw on their strengths. Documenting your approach with the methodologies and standards that you used also provides accountability for our company and helps make our results defensible in case issues arise with our customers.\r
\r
The process of completing a penetration test varies based on many factors. The tools and techniques used to assess the security posture of a network or system also vary. The networks and systems being evaluated are often highly complex. Because of this, it is very easy when performing a penetration test to go off scope. This is where testing methodologies come in. They provide a framework for the penetration tester to follow to ensure that the test is completed in a consistent manner. They also provide a way to ensure that the test is completed in a way that is repeatable and defensible.\r
\r
## 1.2.2 Why Do We Need to Follow a Methodology for Penetration Testing?\r
\r
As just mentioned, scope creep is one reason for utilizing a specific methodology; however, there are many other reasons. For instance, when performing a penetration test for a customer, you must show that the methods you plan to use for testing are tried and true. By utilizing a known methodology, you are able to provide documentation of a specialized procedure that has been used by many people.\r
\r
## 1.2.3. Environmental Considerations\r
\r
There are, of course, a number of different types of penetration tests. Often they are combined in the overall scope of a penetration test; however, they can also be performed as individual tests as well.\r
\r
The following is a list of some of the most common environmental considerations for the types of penetration tests today:\r
\r
:::: code-group\r
::: code-group-item Network Infrastructure Tests\r
\r
\`\`\`md:no-line-numbers\r
\r
Network Infrastructure Tests\r
Testing of the network infrastructure can mean a few things. For the purposes of this course, we say it is focused on evaluating the security posture of the actual network infrastructure and how it is able to help defend against attacks. This often includes the switches, routers, firewalls, and supporting resources, such as authentication, authorization, and accounting (AAA) servers and IPSs. A penetration test on wireless infrastructure may sometimes be included in the scope of a network infrastructure test. However, additional types of tests beyond a wired network assessment would be performed. For instance, a wireless security tester would attempt to break into a network via the wireless network either by bypassing security mechanisms or breaking the cryptographic methods used to secure the traffic. Testing the wireless infrastructure helps an organization to determine weaknesses in the wireless deployment as well as the exposure. It often includes a detailed heat map of the signal disbursement.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Application-Based Tests\r
\r
\`\`\`md:no-line-numbers\r
\r
Application-Based Tests\r
This type of pen testing focuses on testing for security weaknesses in enterprise applications. These weaknesses can include but are not limited to misconfigurations, input validation issues, injection issues, and logic flaws. Because a web application is typically built on a web server with a back-end database, the testing scope normally includes the database as well. However, it focuses on gaining access to that supporting database through the web application compromise. A great resource that we mention a number of times in this book is the Open Web Application Security Project (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Testing in the Cloud\r
\r
\`\`\`md:no-line-numbers\r
\r
Penetration Testing in the Cloud\r
Cloud service providers (CSPs) such as Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP) have no choice but to take their security and compliance responsibilities very seriously. For instance, Amazon created the [Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model) to describe the AWS customers’ responsibilities and Amazon’s responsibilities in detail.\r
\r
The responsibility for cloud security depends on the type of cloud model (software as a service [SaaS], platform as a service [PaaS], or infrastructure as a service [IaaS]). For example, with IaaS, the customer (cloud consumer) is responsible for data, applications, runtime, middleware, virtual machines (VMs), containers, and operating systems in VMs. Regardless of the model used, cloud security is the responsibility of both the client and the cloud provider. These details need to be worked out before a cloud computing contract is signed. These contracts vary depending on the security requirements of the client. Considerations include disaster recovery, service-level agreements (SLAs), data integrity, and encryption. For example, is encryption provided end to end or just at the cloud provider? Also, who manages the encryption keys–the CSP or the client?\r
\r
Overall, you want to ensure that the CSP has the same layers of security (logical, physical, and administrative) in place that you would have for services you control. When performing penetration testing in the cloud, you must understand what you can do and what you cannot do. Most CSPs have detailed guidelines on how to perform security assessments and penetration testing in the cloud. Regardless, there are many potential threats when organizations move to a cloud model. For example, although your data is in the cloud, it must reside in a physical location somewhere. Your cloud provider should agree in writing to provide the level of security required for your customers. As an example, [the AWS Customer Support Policy for Penetration Testing](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note physical attacks vs. social engineering\r
Many penetration testers find the \`**physical aspect of testing** to be the most fun\` because they are essentially being paid to break into the facility of a target. This type of test can help expose any weaknesses in the physical perimeter as well as any security mechanisms that are in place, such as guards, gates, and fencing. The result should be an assessment of the external physical security controls. \`The majority of compromises today start with some kind of **social engineering attack**\`. This could be a phone call, an email, a website, an SMS message, and so on. It is important to test how your employees handle these types of situations. This type of test is often omitted from the scope of a penetration testing engagement mainly because it primarily involves testing people instead of the technology. In most cases, management does not agree with this type of approach. However, it is important to get a real-world view of the latest attack methods. The result of a social engineering test should be to assess the security awareness program so that you can enhance it. It should not be to identify individuals who fail the test. One of the tools that we talk about more in a later module is the Social-Engineer Toolkit (SET), created by Dave Kennedy. This is a great tool for performing social engineering testing campaigns.\r
:::\r
\r
::: tip Bug bounty programs\r
*Bug bounty* programs enable security researchers and penetration testers to get recognition (and often monetary compensation) for finding vulnerabilities in websites, applications, or any other types of systems. Companies like Microsoft, Apple, and Cisco and even government institutions such as the U.S. Department of Defense (DoD) use bug bounty programs to reward security professionals when they find vulnerabilities in their systems. Many security companies, such as HackerOne, Bugcrowd, Intigriti, and SynAck, provide platforms for businesses and security professionals to participate in bug bounty programs. These programs are different from traditional penetration testing engagements but have a similar goal: finding security vulnerabilities to allow the organization to fix them before malicious attackers are able to exploit such vulnerabilities. You can find different bug bounty tips and resources in this [GitHub repository](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties).\r
:::\r
\r
When talking about penetration testing methods, you are likely to hear the terms unknown-environment (previously known as black-box), known-environment (previously known as white-box), and partially known environment (previously known as gray-box) testing. These terms are used to describe the perspective from which the testing is performed, as well as the amount of information that is provided to the tester:\r
\r
:::: code-group\r
::: code-group-item Unknown-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Unknown-Environment Test\r
In an unknown-environment penetration test, the tester is typically provided only a very limited amount of information. For instance, the tester may be provided only the domain names and IP addresses that are in scope for a particular target. The idea of this type of limitation is to have the tester start out with the perspective that an external attacker might have. Typically, an attacker would first determine a target and then begin to gather information about the target, using public information, and gain more and more information to use in attacks. The tester would not have prior knowledge of the target’s organization and infrastructure. Another aspect of unknown-environment testing is that sometimes the network support personnel of the target may not be given information about exactly when the test is taking place. This allows for a defense exercise to take place as well, and it eliminates the issue of a target preparing for the test and not giving a real-world view of how the security posture really looks. \r
\r
This type of testing is often the most difficult for the tester because of the lack of information. However, it is also the most realistic because it is the closest to how an attacker would approach the target.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Known-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Known-Environment Test\r
In a known-environment penetration test, the tester starts out with a significant amount of information about the organization and its infrastructure. The tester would normally be provided things like network diagrams, IP addresses, configurations, and a set of user credentials. If the scope includes an application assessment, the tester might also be provided the source code of the target application. The idea of this type of test is to identify as many security holes as possible. In an unknown-environment test, the scope may be only to identify a path into the organization and stop there. With known-environment testing, the scope is typically much broader and includes internal network configuration auditing and scanning of desktop computers for defects. Time and money are typically deciding factors in the determination of which type of penetration test to complete. If a company has specific concerns about an application, a server, or a segment of the infrastructure, it can provide information about that specific target to decrease the scope and the amount of time spent on the test but still uncover the desired results. With the sophistication and capabilities of adversaries today, it is likely that most networks will be compromised at some point, and a white-box approach is not a bad option.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Partially Known-Environment Testing\r
\r
\`\`\`md:no-line-numbers\r
\r
Partially Known Environment Test\r
A partially known environment penetration test is somewhat of a hybrid approach between unknown- and known-environment tests. With partially known environment testing, the testers may be provided credentials but not full documentation of the network infrastructure. This would allow the testers to still provide results of their testing from the perspective of an external attacker’s point of view. Considering the fact that most compromises start at the client and work their way throughout the network, a good approach would be a scope where the testers start on the inside of the network and have access to a client machine. Then they could pivot throughout the network to determine what the impact of a compromise would be.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
# 1.2. Explorando metodologías de pruebas de penetración\r
\r
## 1.2.1. Descripción general\r
\r
Las pruebas de penetración son mucho más que hackear la red de un cliente. Un enfoque descuidado dará como resultado resultados descuidados. Es importante seguir métodos y estándares bien conocidos para abordar las pruebas de penetración de manera organizada y sistemática.\r
\r
Debe comprender las principales metodologías y estándares documentados para poder crear estrategias que aprovechen sus fortalezas. Documentar su enfoque con las metodologías y estándares que utilizó también proporciona responsabilidad para nuestra empresa y ayuda a que nuestros resultados sean defendibles en caso de que surjan problemas con nuestros clientes.\r
\r
El proceso de completar una prueba de penetración varía según muchos factores. Las herramientas y técnicas utilizadas para evaluar la postura de seguridad de una red o sistema también varían. Las redes y sistemas que se evalúan a menudo son muy complejos. Debido a esto, es muy fácil cuando se realiza una prueba de penetración para salir del alcance. Aquí es donde entran las metodologías de prueba. Proporcionan un marco para que el probador de penetración siga para asegurarse de que la prueba se complete de manera consistente. También proporcionan una forma de asegurarse de que la prueba se complete de una manera que sea repetible y defendible.\r
\r
## 1.2.2 ¿Por qué necesitamos seguir una metodología para las pruebas de penetración?\r
\r
Como se mencionó anteriormente, el alcance es una razón para utilizar una metodología específica; sin embargo, hay muchas otras razones. Por ejemplo, cuando realiza una prueba de penetración para un cliente, debe mostrar que los métodos que planea utilizar para las pruebas son probados y verdaderos. Al utilizar una metodología conocida, puede proporcionar documentación de un procedimiento especializado que ha sido utilizado por muchas personas.\r
\r
## 1.2.3. Consideraciones sobre en entorno\r
\r
Existen, por supuesto, una serie de tipos diferentes de pruebas de penetración. A menudo se combinan en el alcance general de una prueba de penetración; sin embargo, también se pueden realizar como pruebas individuales.\r
\r
La siguiente es una lista de algunas de las consideraciones sobre el entorno más comunes para los tipos de pruebas de penetración de hoy:\r
\r
:::: code-group\r
::: code-group-item Pruebas de infraestructura de red\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas de infraestructura de red\r
La prueba de la infraestructura de red puede significar algunas cosas. Para los fines de este curso, decimos que se centra en evaluar la postura de seguridad de la infraestructura de red real y en cómo puede ayudar a defenderse contra ataques. Esto a menudo incluye los conmutadores, enrutadores, firewalls y recursos de soporte, como la autenticación, la autorización y los servidores de contabilidad (AAA) y los IPS. Una prueba de penetración en la infraestructura inalámbrica a veces puede incluirse en el alcance de una prueba de infraestructura de red. Sin embargo, se realizarían tipos adicionales de pruebas más allá de una evaluación de red cableada. Por ejemplo, un probador de seguridad inalámbrica intentaría ingresar a una red a través de la red inalámbrica, ya sea mediante eludir los mecanismos de seguridad o romper los métodos criptográficos utilizados para asegurar el tráfico. Probar la infraestructura inalámbrica ayuda a una organización a determinar las debilidades en la implementación inalámbrica, así como la exposición. A menudo incluye un mapa de calor detallado de la distribución de la señal.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Pruebas basadas en aplicaciones\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas basadas en aplicaciones\r
Este tipo de prueba de penetración se centra en probar las debilidades de seguridad en las aplicaciones empresariales. Estas debilidades pueden incluir, entre otras, configuraciones incorrectas, problemas de validación de entrada, problemas de inyección y fallas de lógica. Debido a que una aplicación web generalmente se construye en un servidor web con una base de datos de respaldo, el alcance de las pruebas normalmente incluye la base de datos también. Sin embargo, se centra en obtener acceso a esa base de datos de soporte a través de la compromiso de la aplicación web. Un gran recurso que mencionamos varias veces en este libro es el Proyecto de seguridad de aplicaciones web abiertas (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Pruebas en la nube\r
\r
\`\`\`md:no-line-numbers\r
\r
Pruebas de penetración en la nube\r
Los proveedores de servicios en la nube (CSP), como Azure, Amazon Web Services (AWS) y Google Cloud Platform (GCP), no tienen más remedio que tomarse muy en serio sus responsabilidades de seguridad y cumplimiento. Por ejemplo, Amazon creó el [Modelo de responsabilidad compartida](https://aws.amazon.com/compliance/shared-responsibility-model) para describir las responsabilidades de los clientes de AWS y las responsabilidades de Amazon en detalle.\r
\r
La responsabilidad de la seguridad en la nube depende del tipo de modelo de nube (software como servicio [SaaS], plataforma como servicio [PaaS] o infraestructura como servicio [IaaS]). Por ejemplo, con IaaS, el cliente (consumidor de la nube) es responsable de los datos, las aplicaciones, el tiempo de ejecución, el middleware, las máquinas virtuales (VM), los contenedores y los sistemas operativos en las VM. Independientemente del modelo utilizado, la seguridad en la nube es responsabilidad tanto del cliente como del proveedor de la nube. Estos detalles deben resolverse antes de firmar un contrato de computación en la nube. Estos contratos varían según los requisitos de seguridad del cliente. Las consideraciones incluyen la recuperación ante desastres, los acuerdos de nivel de servicio (SLA), la integridad de los datos y el cifrado. Por ejemplo, ¿se proporciona el cifrado de extremo a extremo o solo en el proveedor de la nube? Además, ¿quién administra las claves de cifrado, el CSP o el cliente?\r
\r
En general, desea asegurarse de que el CSP tenga las mismas capas de seguridad (lógica, física y administrativa) en su lugar que tendría para los servicios que controla. Al realizar pruebas de penetración en la nube, debe comprender lo que puede hacer y lo que no puede hacer. La mayoría de los CSP tienen pautas detalladas sobre cómo realizar evaluaciones de seguridad y pruebas de penetración en la nube. Independientemente, existen muchas amenazas potenciales cuando las organizaciones se mudan a un modelo de nube. Por ejemplo, aunque sus datos están en la nube, deben residir en una ubicación física en algún lugar. Su proveedor de la nube debe aceptar por escrito proporcionar el nivel de seguridad requerido para sus clientes. Como ejemplo [la Política de soporte al cliente de AWS para pruebas de penetración](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note ataques físicos vs. ingeniería social\r
Muchos pentesters encuentran la parte física de las pruebas como la más divertida porque esencialmente se les paga por irrumpir en la instalación de un objetivo. Este tipo de prueba puede ayudar a exponer cualquier debilidad en el perímetro físico, así como cualquier mecanismo de seguridad que esté en su lugar, como guardias, puertas y cercas. El resultado debe ser una evaluación de los controles de seguridad física externos. La mayoría de las compromisos de hoy en día comienzan con algún tipo de ataque de ingeniería social. Esto podría ser una llamada telefónica, un correo electrónico, un sitio web, un mensaje SMS, y así sucesivamente. Es importante probar cómo sus empleados manejan este tipo de situaciones. Este tipo de prueba a menudo se omite del alcance de una prueba de penetración principalmente porque implica principalmente probar a las personas en lugar de la tecnología. En la mayoría de los casos, la gerencia no está de acuerdo con este tipo de enfoque. Sin embargo, es importante obtener una visión del mundo real de los últimos métodos de ataque. El resultado de una prueba de ingeniería social debe ser evaluar el programa de concienciación de seguridad para que pueda mejorarlo. No debería ser identificar a las personas que no aprueban la prueba. Una de las herramientas de las que hablamos más adelante en un módulo posterior es el Social-Engineer Toolkit (SET), creado por Dave Kennedy. Esta es una gran herramienta para realizar campañas de prueba de ingeniería social.\r
:::\r
\r
::: tip Programas de recompensas por errores\r
Los programas de recompensas por errores permiten a los investigadores de seguridad y a los probadores de penetración obtener reconocimiento (y a menudo compensación monetaria) por encontrar vulnerabilidades en sitios web, aplicaciones o cualquier otro tipo de sistemas. Empresas como Microsoft, Apple y Cisco e incluso instituciones gubernamentales como el Departamento de Defensa de EE. UU. (DoD) utilizan programas de recompensas por errores para recompensar a los profesionales de la seguridad cuando encuentran vulnerabilidades en sus sistemas. Muchas empresas de seguridad, como HackerOne, Bugcrowd, Intigriti y SynAck, proporcionan plataformas para que las empresas y los profesionales de la seguridad participen en programas de recompensas por errores. Estos programas son diferentes de las pruebas de penetración tradicionales pero tienen un objetivo similar: encontrar vulnerabilidades de seguridad para permitir que la organización las solucione antes de que los atacantes maliciosos puedan explotar dichas vulnerabilidades. Hay diferentes consejos y recursos acerca de recompensas por errores en este [repositorio GitHub](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties)\r
:::\r
\r
Cuando se habla de métodos de prueba de penetración, es probable que escuche los términos entorno desconocido (anteriormente conocido como caja negra), entorno conocido (anteriormente conocido como caja blanca) y entorno parcialmente conocido (anteriormente conocido como caja gris) prueba. Estos términos se utilizan para describir la perspectiva desde la cual se realiza la prueba, así como la cantidad de información que se proporciona al probador:\r
\r
:::: code-group\r
::: code-group-item Prueba de entorno desconocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno desconocido\r
En una prueba de penetración de entorno desconocido, el probador generalmente solo recibe una cantidad muy limitada de información. Por ejemplo, el probador puede recibir solo los nombres de dominio y las direcciones IP que están dentro del alcance de un objetivo en particular. La idea de este tipo de limitación es que el probador comience con la perspectiva que un atacante externo podría tener. Típicamente, un atacante primero determinaría un objetivo y luego comenzaría a recopilar información sobre el objetivo, utilizando información pública y obteniendo más y más información para usar en ataques. El probador no tendría conocimiento previo de la organización y la infraestructura del objetivo. Otro aspecto de las pruebas de entorno desconocido es que a veces al personal de soporte de red del objetivo no se le da información sobre cuándo exactamente se está llevando a cabo la prueba. Esto permite que también se lleve a cabo un ejercicio de defensa y elimina el problema de que un objetivo se prepare para la prueba y no dé una visión del mundo real de cómo se ve realmente la postura de seguridad.\r
\r
Este tipo de prueba suele ser la más difícil para el probador debido a la falta de información. Sin embargo, también es el más realista porque es el más cercano a cómo un atacante se acercaría al objetivo.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prueba de entorno conocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno conocido\r
En una prueba de penetración de entorno conocido, el probador comienza con una cantidad significativa de información sobre la organización y su infraestructura. Normalmente, al probador se le proporcionarían cosas como diagramas de red, direcciones IP, configuraciones y un conjunto de credenciales de usuario. Si el alcance incluye una evaluación de la aplicación, el probador también podría recibir el código fuente de la aplicación objetivo. La idea de este tipo de prueba es identificar la mayor cantidad de agujeros de seguridad posible. En una prueba de entorno desconocido, el alcance puede ser solo identificar un camino hacia la organización y detenerse allí. Con las pruebas de entorno conocido, el alcance suele ser mucho más amplio e incluye auditorías de configuración de red interna y escaneo de computadoras de escritorio en busca de defectos. El tiempo y el dinero son factores decisivos típicos en la determinación de qué tipo de prueba de penetración completar. Si una empresa tiene preocupaciones específicas sobre una aplicación, un servidor o un segmento de la infraestructura, puede proporcionar información sobre ese objetivo específico para disminuir el alcance y la cantidad de tiempo dedicado a la prueba, pero aún así descubrir los resultados deseados. Con la sofisticación y las capacidades de los adversarios de hoy, es probable que la mayoría de las redes se vean comprometidas en algún momento, y un enfoque de caja blanca no es una mala opción.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prueba de entorno parcialmente conocido\r
\r
\`\`\`md:no-line-numbers\r
\r
Prueba de entorno parcialmente conocido\r
Una prueba de penetración de entorno parcialmente conocido es algo así como un enfoque híbrido entre pruebas de entorno desconocido y conocido. Con las pruebas de entorno parcialmente conocido, los probadores pueden recibir credenciales pero no documentación completa de la infraestructura de red. Esto permitiría a los probadores seguir proporcionando resultados de sus pruebas desde la perspectiva del punto de vista de un atacante externo. Teniendo en cuenta el hecho de que la mayoría de las infracciones comienzan en el cliente y se abren camino en toda la red, un buen enfoque sería un alcance donde los probadores comiencen en el interior de la red y tengan acceso a una máquina cliente. Luego podrían pivotar en toda la red para determinar cuál sería el impacto de una violación.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
# 1.2. Explorant metodologies de proves de penetració\r
\r
## 1.2.1. Descripció general\r
\r
Les proves de penetració son molt més que hackejar la xarxa d'un client. Un enfocament descuidat donarà com a resultat resultats descuidats. És important seguir mètodes i estàndards ben coneguts per abordar les proves de penetració de manera organitzada i sistemàtica.\r
\r
Ha de comprendre les principals metodologies i estàndards documentats per poder crear estratègies que aprofitin les seves fortaleses. Documentar el seu enfocament amb les metodologies i estàndards que va utilitzar també proporciona responsabilitat per a la nostra empresa i ajuda a que els nostres resultats siguin defensables en cas que sorgeixin problemes amb els nostres clients.\r
\r
El procés de completar una prova de penetració varia segons molts factors. Les eines i tècniques utilitzades per avaluar la postura de seguretat d'una xarxa o sistema també varien. Les xarxes i sistemes que s'avaluen sovint són molt complexos. A causa d'això, és molt fàcil quan es realitza una prova de penetració per sortir de l'abast. Aquí és on entren les metodologies de prova. Proporcionen un marc perquè el provador de penetració segueixi per assegurar-se que la prova es completi de manera consistent. També proporcionen una manera de assegurar-se que la prova es completi d'una manera que sigui repetible i defensable.\r
\r
## 1.2.2 Per què necessitem seguir una metodologia per a les proves de penetració?\r
\r
Com s'ha esmentat anteriorment, l'abast és una raó per utilitzar una metodologia específica; no obstant això, hi ha moltes altres raons. Per exemple, quan realitza una prova de penetració per a un client, ha de mostrar que els mètodes que planeja utilitzar per a les proves són provats i veritables. En utilitzar una metodologia coneguda, pot proporcionar documentació d'un procediment especialitzat que ha estat utilitzat per moltes persones.\r
\r
## 1.2.3. Consideracions de l'entorn de proves\r
\r
Hi ha, per descomptat, una sèrie de tipus diferents de proves de penetració. Sovint es combinen en l'abast general d'una prova de penetració; no obstant això, també es poden realitzar com a proves individuals.\r
\r
La següent és una llista d'algunes de les consideracions de l'entorn de proves més comunes per als tipus de proves de penetració d'avui:\r
\r
:::: code-group\r
::: code-group-item Proves d'infraestructura de xarxa\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves d'infraestructura de xarxa\r
La prova de la infraestructura de xarxa pot significar algunes coses. Per als fins d'aquest curs, diem que es centra en avaluar la postura de seguretat de la infraestructura de xarxa real i en com pot ajudar a defensar-se contra atacs. Això sovint inclou els commutadors, encaminadors, firewalls i recursos de suport, com l'autenticació, l'autorització i els servidors de comptabilitat (AAA) i els IPS. Una prova de penetració en la infraestructura sense fil a vegades pot incloure's en l'abast d'una prova d'infraestructura de xarxa. No obstant això, es realitzarien tipus addicionals de proves més enllà d'una avaluació de xarxa cablejada. Per exemple, un provador de seguretat sense fil intentaria ingressar a una xarxa a través de la xarxa sense fil, ja sigui mitjançant l'elusió dels mecanismes de seguretat o trencant els mètodes criptogràfics utilitzats per assegurar el trànsit. Provar la infraestructura sense fil ajuda una organització a determinar les debilitats en la implementació sense fil, així com l'exposició. Sovint inclou un mapa de calor detallat de la distribució de la senyal.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Proves basades en aplicacions\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves basades en aplicacions\r
Aquest tipus de prova de penetració es centra en provar les debilitats de seguretat en les aplicacions empresarials. Aquestes debilitats poden incloure, entre altres, configuracions incorrectes, problemes de validació d'entrada, problemes d'injecció i fallades de lògica. Degut a que una aplicació web generalment es construeix en un servidor web amb una base de dades de suport, l'abast de les proves normalment inclou la base de dades també. No obstant això, es centra en obtenir accés a aquesta base de dades de suport a través de la compromís de l'aplicació web. Un gran recurs que mencionem diverses vegades en aquest llibre és el Projecte de seguretat d'aplicacions web obertes (OWASP).\r
    \r
\`\`\`\r
\r
:::\r
::: code-group-item Proves al núvol\r
\r
\`\`\`md:no-line-numbers\r
\r
Proves de penetració al núvol\r
Els proveïdors de serveis al núvol (CSP), com Azure, Amazon Web Services (AWS) i Google Cloud Platform (GCP), no tenen més remei que prendre's molt seriosament les seves responsabilitats de seguretat i compliment. Per exemple, Amazon va crear el [Model de responsabilitat compartida](https://aws.amazon.com/compliance/shared-responsibility-model) per descriure les responsabilitats dels clients d'AWS i les responsabilitats d'Amazon en detall. \r
\r
La responsabilitat de la seguretat al núvol depèn del tipus de model de núvol (programari com a servei [SaaS], plataforma com a servei [PaaS] o infraestructura com a servei [IaaS]). Per exemple, amb IaaS, el client (consumidor de la núvol) és responsable de les dades, les aplicacions, el temps d'execució, el middleware, les màquines virtuals (VM), els contenidors i els sistemes operatius en les VM. Independentment del model utilitzat, la seguretat al núvol és responsabilitat tant del client com del proveïdor de la núvol. Aquests detalls s'han de resoldre abans de signar un contracte de computació al núvol. Aquests contractes varien segons els requisits de seguretat del client. Les consideracions inclouen la recuperació davant de desastres, els acords de nivell de servei (SLA), la integritat de les dades i el xifrat. Per exemple, es proporciona el xifrat d'extrem a extrem o només en el proveïdor de la núvol? A més, qui administra les claus de xifrat, el CSP o el client?\r
\r
En general, desitja assegurar-se que el CSP tingui les mateixes capes de seguretat (lògica, física i administrativa) en el seu lloc que tindria per als serveis que controla. En realitzar proves de penetració al núvol, ha de comprendre què pot fer i què no pot fer. La majoria dels CSP tenen pautes detallades sobre com realitzar avaluacions de seguretat i proves de penetració al núvol. Independentment, hi ha moltes amenaces potencials quan les organitzacions es traslladen a un model de núvol. Per exemple, tot i que les seves dades estan al núvol, han de residir en una ubicació física en algun lloc. El seu proveïdor de la núvol ha d'acceptar per escrit proporcionar el nivell de seguretat requerit pels seus clients. Com a exemple, [la Política de suport al client d'AWS per a proves de penetració](https://aws.amazon.com/security/penetration-testing).\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
::: note atacs físics vs. enginyeria social\r
Molts pentesters troben l'aspecte físic de les proves com allò més divert perquè essencialment se'ls paga per irrompre en la instal·lació d'un objectiu. Aquest tipus de prova pot ajudar a exposar qualsevol debilitat en el perímetre físic, així com qualsevol mecanisme de seguretat que estigui en el seu lloc, com a guàrdies, portes i tanques. El resultat ha de ser una avaluació dels controls de seguretat física externs. La majoria de les compromisos d'avui en dia comencen amb algun tipus d'atac d'enginyeria social. Això podria ser una trucada telefònica, un correu electrònic, un lloc web, un missatge SMS, i així successivament. És important provar com els seus empleats manegen aquest tipus de situacions. Aquest tipus de prova sovint s'omet dels abast d'una prova de penetració principalment perquè implica principalment provar a les persones en lloc de la tecnologia. En la majoria dels casos, la gerència no està d'acord amb aquest tipus d'enfocament. No obstant això, és important obtenir una visió del món real dels últims mètodes d'atac. El resultat d'una prova d'enginyeria social ha d'ésser avaluar el programa de conscienciació de seguretat perquè pugui millorar-lo. No hauria de ser identificar a les persones que no aproven la prova. Una de les eines de les quals parlem més endavant en un mòdul posterior és el Social-Engineer Toolkit (SET), creat per Dave Kennedy. Aquesta és una gran eina per realitzar campanyes de prova d'enginyeria social.\r
:::\r
\r
::: tip Programes de recompenses per errors\r
Els programes de recompenses per errors permeten als investigadors de seguretat i als provadors de penetració obtenir reconeixement (i sovint compensació monetària) per trobar vulnerabilitats en llocs web, aplicacions o qualsevol altre tipus de sistemes. Empreses com Microsoft, Apple i Cisco i fins i tot institucions governamentals com el Departament de Defensa dels EUA (DoD) utilitzen programes de recompenses per errors per recompensar els professionals de la seguretat quan troben vulnerabilitats en els seus sistemes. Moltes empreses de seguretat, com HackerOne, Bugcrowd, Intigriti i SynAck, proporcionen plataformes perquè les empreses i els professionals de la seguretat participin en programes de recompenses per errors. Aquests programes són diferents de les proves de penetració tradicionals però tenen un objectiu similar: trobar vulnerabilitats de seguretat per permetre que l'organització les solucioni abans que els atacants maliciosos puguin explotar aquestes vulnerabilitats. Hi ha diferents consells i recursos sobre recompenses per errors en aquest [repositori GitHub](https://github.com/The-Art-of-Hacking/h4cker/tree/master/bug-bounties).\r
:::\r
\r
Quan es parla de mètodes de prova de penetració, és probable que escolti els termes entorn desconegut (anteriorment conegut com a caixa negra), entorn conegut (anteriorment conegut com a caixa blanca) i entorn parcialment conegut (anteriorment conegut com a caixa gris) prova. Aquests termes s'utilitzen per descriure la perspectiva des de la qual es realitza la prova, així com la quantitat d'informació que es proporciona al provador:\r
\r
:::: code-group\r
::: code-group-item Prova d'entorn desconegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn desconegut\r
En una prova de penetració d'entorn desconegut, el provador generalment només rep una quantitat molt limitada d'informació. Per exemple, el provador pot rebre només els noms de domini i les adreces IP que estan dins de l'abast d'un objectiu en particular. La idea d'aquest tipus de limitació és que el provador comenci amb la perspectiva que un atacant extern podria tenir. Típicament, un atacant primer determinaria un objectiu i després començaria a recopilar informació sobre l'objectiu, utilitzant informació pública i obtenint més i més informació per utilitzar en atacs. El provador no tindria coneixement previ de l'organització i la infraestructura de l'objectiu. Un altre aspecte de les proves d'entorn desconegut és que a vegades al personal de suport de xarxa de l'objectiu no se li dóna informació sobre quan exactament s'està duent a terme la prova. Això permet que també es dugui a terme un exercici de defensa i elimina el problema que un objectiu es prepari per a la prova i no doni una visió del món real de com es veu realment la postura de seguretat.\r
\r
Aquest tipus de prova sol ser la més difícil per al provador a causa de la manca d'informació. No obstant això, també és el més realista perquè és el més proper a com un atacant s'acostaria a l'objectiu.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prova d'entorn conegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn conegut\r
En una prova de penetració d'entorn conegut, el provador comença amb una quantitat significativa d'informació sobre l'organització i la seva infraestructura. Normalment, al provador se li proporcionarien coses com diagrames de xarxa, adreces IP, configuracions i un conjunt de credencials d'usuari. Si l'abast inclou una avaluació de l'aplicació, el provador també podria rebre el codi font de l'aplicació objectiu. La idea d'aquest tipus de prova és identificar la major quantitat de forats de seguretat possible. En una prova d'entorn desconegut, l'abast pot ser només identificar un camí cap a l'organització i aturar-se allà. Amb les proves d'entorn conegut, l'abast sol ser molt més ampli i inclou auditories de configuració de xarxa interna i escaneig d'ordinadors d'escriptori per defectes. El temps i els diners són factors decisius típics en la determinació de quin tipus de prova de penetració completar. Si una empresa té preocupacions específiques sobre una aplicació, un servidor o un segment de la infraestructura, pot proporcionar informació sobre aquest objectiu específic per disminuir l'abast i la quantitat de temps dedicat a la prova, però encara descobrir els resultats desitjats. Amb la sofisticació i les capacitats dels adversaris d'avui, és probable que la majoria de les xarxes es vegin compromeses en algun moment, i un enfocament de caixa blanca no és una mala opció.\r
\r
\`\`\`\r
\r
:::\r
::: code-group-item Prova d'entorn parcialment conegut\r
\r
\`\`\`md:no-line-numbers\r
\r
Prova d'entorn parcialment conegut\r
Una prova de penetració d'entorn parcialment conegut és quelcom així com un enfocament híbrid entre proves d'entorn desconegut i conegut. Amb les proves d'entorn parcialment conegut, els provadors poden rebre credencials però no documentació completa de la infraestructura de xarxa. Això permetria als provadors seguir proporcionant resultats de les seves proves des de la perspectiva del punt de vista d'un atacant extern. Tenint en compte el fet que la majoria de les infraccions comencen al client i s'obren camí a tota la xarxa, un bon enfocament seria un abast on els provadors comencin a l'interior de la xarxa i tinguin accés a una màquina client. Llavors podrien pivotar a tota la xarxa per determinar quin seria l'impacte d'una violació.\r
\r
\`\`\`\r
\r
:::\r
::::\r
\r
## 1.2.4. Practice - Types of Penetration Tests\r
\r
## 1.2.5 Surveying Different Standards and Methodologies\r
\r
There are a number of penetration testing methodologies that have been around for a while and continue to be updated as new threats emerge.\r
\r
The following is a list of some of the most common penetration testing methodologies and other standards:\r
`]},{title:"1. Introduction to Ethical Hacking and Penetration Testing",headers:[],path:"/es/ethical_hacking/",pathLocale:"/es/",extraFields:[`---\r
title: 1. Introduction to Ethical Hacking and Penetration Testing\r
---\r
\r
# 1. Introduction to Ethical Hacking and Penetration Testing\r
# 1. Introducción al hacking ético y las pruebas de penetración\r
# 1. Introducció al hacking ètic i les proves de penetració\r
\r
Before we jump into how to perform penetration testing, you first need to understand some core concepts about the “art of hacking” that will help you understand the other concepts discussed throughout this course. For example, you need to understand the difference between ethical hacking and unethical hacking. The tools and techniques used in this field change rapidly, so understanding the most current threats and attacker motivations is also important. Some consider penetration testing an art; however, this art needs to start out with a methodology if it is to be effective. Furthermore, you need to spend some time understanding the different types of testing and the industry methods used. Finally, this is a hands-on concept, and you need to know how to get your hands dirty by properly building a lab environment for testing.\r
\r
Antes de sumergirnos en cómo realizar pruebas de penetración, primero debe comprender algunos conceptos básicos sobre el "arte del hacking" que lo ayudarán a comprender los otros conceptos que se discuten a lo largo de este curso. Por ejemplo, debe comprender la diferencia entre el hacking ético y el hacking no ético. Las herramientas y técnicas utilizadas en este campo cambian rápidamente, por lo que también es importante comprender las amenazas y las motivaciones de los atacantes más actuales. Algunos consideran que las pruebas de penetración son un arte; sin embargo, este arte debe comenzar con una metodología si quiere ser efectivo. Además, debe dedicar algo de tiempo a comprender los diferentes tipos de pruebas y los métodos utilizados en la industria. Finalmente, este es un concepto práctico y debe saber cómo ensuciarse las manos construyendo adecuadamente un entorno de laboratorio para las pruebas.\r
\r
Abans de submergir-nos en com realitzar proves de penetració, primer ha de comprendre alguns conceptes bàsics sobre l'"art del hacking" que l'ajudaran a comprendre els altres conceptes que es discuteixen al llarg d'aquest curs. Per exemple, ha de comprendre la diferència entre el hacking ètic i el hacking no ètic. Les eines i tècniques utilitzades en aquest camp canvien ràpidament, per la qual cosa també és important comprendre les amenaces i les motivacions dels atacants més actuals. Alguns consideren que les proves de penetració són un art; no obstant això, aquest art ha de començar amb una metodologia si vol ser efectiu. A més, ha de dedicar una mica de temps a comprendre els diferents tipus de proves i els mètodes utilitzats en la indústria. Finalment, aquest és un concepte pràctic i ha de saber com embrutar-se les mans construint adequadament un entorn de laboratori per a les proves.\r
\r
Module Objective: Explain the importance of methodological ethical hacking and penetration testing.\r
\r
Objetivo del módulo: Explique la importancia de la metodología de hacking ético y las pruebas de penetración.\r
\r
Objectiu del mòdul: Expliqueu la importància de la metodologia de hacking ètic i les proves de penetració.\r
\r
| Topic   | Objective |\r
|---|---|\r
| Understanding Ethical Hacking and Penetration testing | Explain the importance of ethical hacking and penetration testing |\r
| Exploring penetration testing methodologies | Explain different types of penetration testing methodologies and frameworks |\r
| Building a penetration testing lab | Build a penetration testing lab |\r
\r
| Tema   | Objetivo |\r
|---|---|\r
| Comprender el hacking ético y las pruebas de penetración | Explique la importancia del hacking ético y las pruebas de penetración |\r
| Explorar metodologías de pruebas de penetración | Explique los diferentes tipos de metodologías y marcos de pruebas de penetración |\r
| Creación de un laboratorio de pruebas de penetración | Construir un laboratorio de pruebas de penetración |\r
\r
| Tema   | Objectiu |\r
|---|---|\r
| Comprendre el hacking ètic i les proves de penetració | Expliqueu la importància del hacking ètic i les proves de penetració |\r
| Explorar metodologies de proves de penetració | Expliqueu els diferents tipus de metodologies i marcs de proves de penetració |\r
| Creació d'un laboratori de proves de penetració | Construir un laboratori de proves de penetració |\r
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
`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[""]}],pg=fe(ug),mg=()=>pg,hg=({searchIndex:e,routeLocale:r,query:n,maxSuggestions:a})=>{const o=M(()=>e.value.filter(t=>t.pathLocale===r.value));return M(()=>{const t=n.value.trim().toLowerCase();if(!t)return[];const s=[],c=(i,l)=>{ds(t,[l.title])&&s.push({link:`${i.path}#${l.slug}`,title:i.title,header:l.title});for(const d of l.children){if(s.length>=a.value)return;c(i,d)}};for(const i of o.value){if(s.length>=a.value)break;if(ds(t,[i.title,...i.extraFields])){s.push({link:i.path,title:i.title});continue}for(const l of i.headers){if(s.length>=a.value)break;c(i,l)}}return s})},gg=e=>{const r=fe(0);return{focusIndex:r,focusNext:()=>{r.value<e.value.length-1?r.value+=1:r.value=0},focusPrev:()=>{r.value>0?r.value-=1:r.value=e.value.length-1}}},fg=ue({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:r,hotKeys:n,maxSuggestions:a}=Ea(e),o=Zr(),t=vn(),s=mg(),c=fe(null),i=fe(!1),l=fe(""),d=M(()=>r.value[t.value]??{}),u=hg({searchIndex:s,routeLocale:t,query:l,maxSuggestions:a}),{focusIndex:p,focusNext:f,focusPrev:w}=gg(u);dg({input:c,hotKeys:n});const S=M(()=>i.value&&!!u.value.length),q=()=>{S.value&&w()},b=()=>{S.value&&f()},y=T=>{if(!S.value)return;const j=u.value[T];j&&o.push(j.link).then(()=>{l.value="",p.value=0})};return()=>le("form",{class:"search-box",role:"search"},[le("input",{ref:c,type:"search",placeholder:d.value.placeholder,autocomplete:"off",spellcheck:!1,value:l.value,onFocus:()=>i.value=!0,onBlur:()=>i.value=!1,onInput:T=>l.value=T.target.value,onKeydown:T=>{switch(T.key){case"ArrowUp":{q();break}case"ArrowDown":{b();break}case"Enter":{T.preventDefault(),y(p.value);break}}}}),S.value&&le("ul",{class:"suggestions",onMouseleave:()=>p.value=-1},u.value.map(({link:T,title:j,header:V},K)=>le("li",{class:["suggestion",{focus:p.value===K}],onMouseenter:()=>p.value=K,onMousedown:()=>y(K)},le("a",{href:T,onClick:R=>R.preventDefault()},[le("span",{class:"page-title"},j),V&&le("span",{class:"page-header"},`> ${V}`)]))))])}});const bg={"/en/":{placeholder:"Search"},"/es/":{placeholder:"Buscar"},"/ca/":{placeholder:"Cercar"}},vg=["s","/"],yg=5,wg=Sr({enhance({app:e}){e.component("SearchBox",r=>le(fg,{locales:bg,hotKeys:vg,maxSuggestions:yg,...r}))}});const Sg={};function Pg(){const e=fe(!1);return Ro()&&He(()=>{e.value=!0}),e}function qg(e){return Pg(),M(()=>!!e())}const xg=()=>qg(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),kg=()=>{const e=xg();return M(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},_g=e=>{const r=vn();return M(()=>e[r.value])},Eg=250,jg=3e3,Tg={"/ca/":{copy:"Copia",copied:"Copiat",hint:"Copia bloc de codi"},"/es/":{copy:"Copia",copied:"Copiado",hint:"Copia bloque de código"},"/en/":{copy:"Copy",copied:"Copied",hint:"Copy code block"},"/":{copy:"Copia",copied:"Copiat",hint:"Copia bloc de codi"}},Cg=!1,zg=['.theme-default-content div[class*="language-"] pre'],us=!1,Xa=new Map,Ag=()=>{const{copy:e}=Op({legacy:!0}),r=_g(Tg),n=Ar(),a=kg(),o=c=>{if(!c.hasAttribute("copy-code-registered")){const i=document.createElement("button");i.type="button",i.classList.add("copy-code-button"),i.innerHTML='<div class="copy-icon" />',i.setAttribute("aria-label",r.value.copy),i.setAttribute("data-copied",r.value.copied),c.parentElement&&c.parentElement.insertBefore(i,c),c.setAttribute("copy-code-registered","")}},t=()=>Hn().then(()=>new Promise(c=>{setTimeout(()=>{zg.forEach(i=>{document.querySelectorAll(i).forEach(o)}),c()},Eg)})),s=(c,i,l)=>{let{innerText:d=""}=i;/language-(shellscript|shell|bash|sh|zsh)/.test(c.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),e(d).then(()=>{l.classList.add("copied"),clearTimeout(Xa.get(l));const u=setTimeout(()=>{l.classList.remove("copied"),l.blur(),Xa.delete(l)},jg);Xa.set(l,u)})};He(()=>{(!a.value||us)&&t(),Pa("click",c=>{const i=c.target;if(i.matches('div[class*="language-"] > button.copy')){const l=i.parentElement,d=i.nextElementSibling;d&&s(l,d,i)}else if(i.matches('div[class*="language-"] div.copy-icon')){const l=i.parentElement,d=l.parentElement,u=l.nextElementSibling;u&&s(d,u,l)}}),er(()=>n.value.path,()=>{(!a.value||us)&&t()})})};var Ig=Sr({setup:()=>{Ag()}});const sa=[Ku,rp,tp,lp,hp,Jh,Gh,tg,wg,Sg,Ig],Lg=[["v-56dd2a2a","/InstallationNotes.html",{title:"Installation notes"},[":md"]],["v-8daa1a0e","/",{title:""},["/README.md"]],["v-2d0a7df8","/ca/",{title:"SAD - Lloc web de documentació"},["/ca/README.md"]],["v-2d0a870d","/en/",{title:"SAD - Página  de documentación"},["/en/README.md"]],["v-2d0a87a8","/es/",{title:"SAD - Página  de documentación"},["/es/README.md"]],["v-724914a8","/ca/ethical_hacking/a%20UnderstandingETandPT.html",{title:"1.1. Understanding Ethical Hacking & Penetration Testing"},["/ca/ethical_hacking/a UnderstandingETandPT.html","/ca/ethical_hacking/a UnderstandingETandPT.md",":md"]],["v-88f7c0c8","/ca/ethical_hacking/b%20Pentesting%20methodologies.html",{title:"1.2. Exploring Penetration Testing Methodologies"},["/ca/ethical_hacking/b Pentesting methodologies.html","/ca/ethical_hacking/b Pentesting methodologies.md",":md"]],["v-bd71d732","/ca/ethical_hacking/",{title:"1. Introduction to Ethical Hacking and Penetration Testing"},["/ca/ethical_hacking/index.md"]],["v-f39b1880","/ca/unit1/concurrency.html",{title:"1.2 Concurrency"},[":md"]],["v-3568b29a","/ca/unit1/",{title:"1 Introduction"},["/ca/unit1/index.md"]],["v-4d403dc3","/ca/unit1/operatingsystem.html",{title:"1.3 Processes in the OS"},[":md"]],["v-62d86b64","/ca/unit1/process.html",{title:"1.1 Processes, programs, threads"},[":md"]],["v-02f7a31f","/ca/unit2/curl_annex.html",{title:"2.4 Annex I - Curl"},[":md"]],["v-3568b2b9","/ca/unit2/",{title:"2 Introduction"},["/ca/unit2/index.md"]],["v-0b12bee5","/ca/unit2/iostreams.html",{title:"2.3 Handling Process Streams"},[":md"]],["v-69cbc2b4","/ca/unit2/processbuilder.html",{title:"2.2 Process management in Java - ProcessBuilder and Process"},[":md"]],["v-4144fd3a","/ca/unit2/runtime.html",{title:"2.1 Running processes in Java with Runtime"},[":md"]],["v-45db6c9a","/en/ethical_hacking/a%20UnderstandingETandPT.html",{title:"1.1. Understanding Ethical Hacking & Penetration Testing"},["/en/ethical_hacking/a UnderstandingETandPT.html","/en/ethical_hacking/a UnderstandingETandPT.md",":md"]],["v-1bb62067","/en/ethical_hacking/b%20Pentesting%20methodologies.html",{title:"1.2. Exploring Penetration Testing Methodologies"},["/en/ethical_hacking/b Pentesting methodologies.html","/en/ethical_hacking/b Pentesting methodologies.md",":md"]],["v-3804537c","/en/ethical_hacking/",{title:"1. Introduction to Ethical Hacking and Penetration Testing"},["/en/ethical_hacking/index.md"]],["v-5aa74f15","/en/unit1/concurrency.html",{title:"1.2 Concurrencia"},[":md"]],["v-b73e5022","/en/unit1/",{title:"1 Introducción"},["/en/unit1/index.md"]],["v-4b0532d0","/en/unit1/operatingsystem.html",{title:"1.3 Procesos en el SO"},[":md"]],["v-3f423939","/en/unit1/process.html",{title:"1.1 Procesos, programas, hilos"},[":md"]],["v-8100edac","/en/unit2/curl_annex.html",{title:"2.4 Anexo I - Curl"},[":md"]],["v-b73e4fe4","/en/unit2/",{title:"2 Introducción"},["/en/unit2/index.md"]],["v-74406b7a","/en/unit2/iostreams.html",{title:"2.3 Gestión de la E-S de un proceso"},[":md"]],["v-348bab3f","/en/unit2/processbuilder.html",{title:"2.2 Gestión de procesos en Java - ProcessBuilder y Process"},[":md"]],["v-1daecb0f","/en/unit2/runtime.html",{title:"2.1 Creación de procesos en Java con Runtime"},[":md"]],["v-287508f8","/es/ethical_hacking/a%20UnderstandingETandPT.html",{title:"1.1. Understanding Ethical Hacking & Penetration Testing"},["/es/ethical_hacking/a UnderstandingETandPT.html","/es/ethical_hacking/a UnderstandingETandPT.md",":md"]],["v-4448d028","/es/ethical_hacking/b%20Pentesting%20methodologies.html",{title:"1.2. Exploring Penetration Testing Methodologies"},["/es/ethical_hacking/b Pentesting methodologies.html","/es/ethical_hacking/b Pentesting methodologies.md",":md"]],["v-0eddbe17","/es/ethical_hacking/",{title:"1. Introduction to Ethical Hacking and Penetration Testing"},["/es/ethical_hacking/index.md"]],["v-46af1970","/es/unit1/concurrency.html",{title:"1.2 Concurrencia"},[":md"]],["v-a8728f6c","/es/unit1/",{title:"1 Introducción"},["/es/unit1/index.md"]],["v-e2dae91a","/es/unit1/operatingsystem.html",{title:"1.3 Procesos en el SO"},[":md"]],["v-75292dd8","/es/unit1/process.html",{title:"1.1 Procesos, programas, hilos"},[":md"]],["v-3277876f","/es/unit2/curl_annex.html",{title:"2.4 Anexo I - Curl"},[":md"]],["v-a8728f2e","/es/unit2/",{title:"2 Introducción"},["/es/unit2/index.md"]],["v-14dd1095","/es/unit2/iostreams.html",{title:"2.3 Gestión de la E-S de un proceso"},[":md"]],["v-5320ff04","/es/unit2/processbuilder.html",{title:"2.2 Gestión de procesos en Java - ProcessBuilder y Process"},[":md"]],["v-b8500a2c","/es/unit2/runtime.html",{title:"2.1 Creación de procesos en Java con Runtime"},[":md"]],["v-3706649a","/404.html",{title:""},[]]];var ps=ue({name:"Vuepress",setup(){const e=Dd();return()=>le(e.value)}}),Rg=()=>Lg.reduce((e,[r,n,a,o])=>(e.push({name:r,path:n,component:ps,meta:a},{path:n.endsWith("/")?n+"index.html":n.substring(0,n.length-5),redirect:n},...o.map(t=>({path:t===":md"?n.substring(0,n.length-5)+".md":t,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:ps}]),Og=cu,Ng=()=>{const e=Vu({history:Og(li("/apuntes/")),routes:Rg(),scrollBehavior:(r,n,a)=>a||(r.hash?{el:r.hash}:{top:0})});return e.beforeResolve(async(r,n)=>{var a;(r.path!==n.path||n===hr)&&([r.meta._data]=await Promise.all([mr.resolvePageData(r.name),(a=pi[r.name])==null?void 0:a.__asyncLoader()]))}),e},Mg=e=>{e.component("ClientOnly",Fo),e.component("Content",Wd)},Dg=(e,r,n)=>{const a=os(()=>r.currentRoute.value.path),o=os(()=>mr.resolveRouteLocale(nn.value.locales,a.value)),t=Pp(a,()=>r.currentRoute.value.meta._data),s=M(()=>mr.resolveLayouts(n)),c=M(()=>mr.resolveSiteLocaleData(nn.value,o.value)),i=M(()=>mr.resolvePageFrontmatter(t.value)),l=M(()=>mr.resolvePageHeadTitle(t.value,c.value)),d=M(()=>mr.resolvePageHead(l.value,i.value,c.value)),u=M(()=>mr.resolvePageLang(t.value,c.value)),p=M(()=>mr.resolvePageLayout(t.value,s.value));return e.provide(Ld,s),e.provide(mi,t),e.provide(hi,i),e.provide(Nd,l),e.provide(gi,d),e.provide(fi,u),e.provide(bi,p),e.provide(Mo,o),e.provide(yi,c),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>i.value},$head:{get:()=>d.value},$headTitle:{get:()=>l.value},$lang:{get:()=>u.value},$page:{get:()=>t.value},$routeLocale:{get:()=>o.value},$site:{get:()=>nn.value},$siteLocale:{get:()=>c.value},$withBase:{get:()=>Bo}}),{layouts:s,pageData:t,pageFrontmatter:i,pageHead:d,pageHeadTitle:l,pageLang:u,pageLayout:p,routeLocale:o,siteData:nn,siteLocaleData:c}},Fg=()=>{const e=Od(),r=Md(),n=fe([]),a=()=>{e.value.forEach(t=>{const s=Bg(t);s&&n.value.push(s)})},o=()=>{document.documentElement.lang=r.value,n.value.forEach(t=>{t.parentNode===document.head&&document.head.removeChild(t)}),n.value.splice(0,n.value.length),e.value.forEach(t=>{const s=Ug(t);s!==null&&(document.head.appendChild(s),n.value.push(s))})};Gr(Bd,o),He(()=>{a(),o(),er(()=>e.value,o)})},Bg=([e,r,n=""])=>{const a=Object.entries(r).map(([c,i])=>be(i)?`[${c}=${JSON.stringify(i)}]`:i===!0?`[${c}]`:"").join(""),o=`head > ${e}${a}`;return Array.from(document.querySelectorAll(o)).find(c=>c.innerText===n)||null},Ug=([e,r,n])=>{if(!be(e))return null;const a=document.createElement(e);return No(r)&&Object.entries(r).forEach(([o,t])=>{be(t)?a.setAttribute(o,t):t===!0&&a.setAttribute(o,"")}),be(n)&&a.appendChild(document.createTextNode(n)),a},Hg=_d,Wg=async()=>{var n;const e=Hg({name:"VuepressApp",setup(){var a;Fg();for(const o of sa)(a=o.setup)==null||a.call(o);return()=>[le(zi),...sa.flatMap(({rootComponents:o=[]})=>o.map(t=>le(t)))]}}),r=Ng();Mg(e),Dg(e,r,sa);for(const a of sa)await((n=a.enhance)==null?void 0:n.call(a,{app:e,router:r,siteData:nn}));return e.use(r),{app:e,router:r}};Wg().then(({app:e,router:r})=>{r.isReady().then(()=>{e.mount("#app")})});export{ke as _,he as a,ne as b,Q as c,Wg as createVueApp,Or as d,Bl as e,_e as f,B as o,yr as r,Ae as t,Oe as w};
