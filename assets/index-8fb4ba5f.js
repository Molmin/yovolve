(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const we=(e,t)=>e===t,_e=Symbol("solid-track"),F={equals:we};let $e=pe;const T=1,q=2,oe={owned:null,cleanups:null,context:null,owner:null};var f=null;let Q=null,d=null,p=null,E=null,G=0;function M(e,t){const n=d,s=f,r=e.length===0,l=t===void 0?s:t,i=r?oe:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=r?e:()=>e(()=>x(()=>H(i)));f=i,d=null;try{return B(o,!0)}finally{d=n,f=s}}function K(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),ae(n,r));return[fe.bind(n),s]}function $(e,t,n){const s=de(e,t,!1,T);V(s)}function k(e,t,n){n=n?Object.assign({},F,n):F;const s=de(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,V(s),fe.bind(s)}function x(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function Ae(e){return f===null||(f.cleanups===null?f.cleanups=[e]:f.cleanups.push(e)),e}function ce(e,t){const n=Symbol("context");return{id:n,Provider:Ee(n),defaultValue:e}}function Z(e){return f&&f.context&&f.context[e.id]!==void 0?f.context[e.id]:e.defaultValue}function ue(e){const t=k(e),n=k(()=>X(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function fe(){if(this.sources&&this.state)if(this.state===T)V(this);else{const e=p;p=null,B(()=>U(this),!1),p=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ae(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],i=Q&&Q.running;i&&Q.disposed.has(l),(i?!l.tState:!l.state)&&(l.pure?p.push(l):E.push(l),l.observers&&ge(l)),i||(l.state=T)}if(p.length>1e6)throw p=[],new Error},!1)),t}function V(e){if(!e.fn)return;H(e);const t=f,n=d,s=G;d=f=e,Se(e,e.value,s),d=n,f=t}function Se(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,ve(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ae(e,s):e.value=s,e.updatedAt=n)}function de(e,t,n,s=T,r){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:f?f.context:null,pure:n};return f===null||f!==oe&&(f.owned?f.owned.push(l):f.owned=[l]),l}function he(e){if(e.state===0)return;if(e.state===q)return U(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<G);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)V(e);else if(e.state===q){const s=p;p=null,B(()=>U(e,t[0]),!1),p=s}}function B(e,t){if(p)return e();let n=!1;t||(p=[]),E?n=!0:E=[],G++;try{const s=e();return xe(n),s}catch(s){n||(E=null),p=null,ve(s)}}function xe(e){if(p&&(pe(p),p=null),e)return;const t=E;E=null,t.length&&B(()=>$e(t),!1)}function pe(e){for(let t=0;t<e.length;t++)he(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===T?s!==t&&(!s.updatedAt||s.updatedAt<G)&&he(s):r===q&&U(s,t)}}}function ge(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=q,n.pure?p.push(n):E.push(n),n.observers&&ge(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),i=n.observerSlots.pop();s<r.length&&(l.sourceSlots[i]=s,r[s]=l,n.observerSlots[s]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ce(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ve(e,t=f){throw Ce(e)}function X(e){if(typeof e=="function"&&!e.length)return X(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=X(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ee(e,t){return function(s){let r;return $(()=>r=x(()=>(f.context={...f.context,[e]:s.value},ue(()=>s.children))),void 0),r}}const Te=Symbol("fallback");function ee(e){for(let t=0;t<e.length;t++)e[t]()}function Le(e,t,n={}){let s=[],r=[],l=[],i=0,o=t.length>1?[]:null;return Ae(()=>ee(l)),()=>{let u=e()||[],a,c;return u[_e],x(()=>{let h=u.length,b,C,P,I,D,w,_,A,L;if(h===0)i!==0&&(ee(l),l=[],s=[],r=[],i=0,o&&(o=[])),n.fallback&&(s=[Te],r[0]=M(be=>(l[0]=be,n.fallback())),i=1);else if(i===0){for(r=new Array(h),c=0;c<h;c++)s[c]=u[c],r[c]=M(m);i=h}else{for(P=new Array(h),I=new Array(h),o&&(D=new Array(h)),w=0,_=Math.min(i,h);w<_&&s[w]===u[w];w++);for(_=i-1,A=h-1;_>=w&&A>=w&&s[_]===u[A];_--,A--)P[A]=r[_],I[A]=l[_],o&&(D[A]=o[_]);for(b=new Map,C=new Array(A+1),c=A;c>=w;c--)L=u[c],a=b.get(L),C[c]=a===void 0?-1:a,b.set(L,c);for(a=w;a<=_;a++)L=s[a],c=b.get(L),c!==void 0&&c!==-1?(P[c]=r[a],I[c]=l[a],o&&(D[c]=o[a]),c=C[c],b.set(L,c)):l[a]();for(c=w;c<h;c++)c in P?(r[c]=P[c],l[c]=I[c],o&&(o[c]=D[c],o[c](c))):r[c]=M(m);r=r.slice(0,i=h),s=u.slice(0)}return r});function m(h){if(l[c]=h,o){const[b,C]=K(c);return o[c]=C,t(u[c],b)}return t(u[c])}}}function g(e,t){return x(()=>e(t||{}))}const Ne=e=>`Stale read from <${e}>.`;function j(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(Le(()=>e.each,e.children,t||void 0))}function Oe(e){let t=!1;const n=(l,i)=>l[0]===i[0]&&(t?l[1]===i[1]:!l[1]==!i[1])&&l[2]===i[2],s=ue(()=>e.children),r=k(()=>{let l=s();Array.isArray(l)||(l=[l]);for(let i=0;i<l.length;i++){const o=l[i].when;if(o)return t=!!l[i].keyed,[i,o,l[i]]}return[-1]},void 0,{equals:n});return k(()=>{const[l,i,o]=r();if(l<0)return e.fallback;const u=o.children;return typeof u=="function"&&u.length>0?x(()=>u(t?i:()=>{if(x(r)[0]!==l)throw Ne("Match");return o.when})):u},void 0,void 0)}function te(e){return e}function Pe(e,t,n){let s=n.length,r=t.length,l=s,i=0,o=0,u=t[r-1].nextSibling,a=null;for(;i<r||o<l;){if(t[i]===n[o]){i++,o++;continue}for(;t[r-1]===n[l-1];)r--,l--;if(r===i){const c=l<s?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],c)}else if(l===o)for(;i<r;)(!a||!a.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[l-1]&&n[o]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[o++],t[i++].nextSibling),e.insertBefore(n[--l],c),t[r]=n[l]}else{if(!a){a=new Map;let m=o;for(;m<l;)a.set(n[m],m++)}const c=a.get(t[i]);if(c!=null)if(o<c&&c<l){let m=i,h=1,b;for(;++m<r&&m<l&&!((b=a.get(t[m]))==null||b!==c+h);)h++;if(h>c-o){const C=t[i];for(;o<c;)e.insertBefore(n[o++],C)}else e.replaceChild(n[o++],t[i++])}else i++;else t[i++].remove()}}}const ne="_$DX_DELEGATE";function ke(e,t,n,s={}){let r;return M(l=>{r=l,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function y(e,t,n){let s;const r=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},l=t?()=>x(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return l.cloneNode=l,l}function Be(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let s=0,r=e.length;s<r;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ie))}}function S(e,t){t==null?e.removeAttribute("class"):e.className=t}function v(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);$(r=>R(e,t(),r,n),s)}function Ie(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function R(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,i=s!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),i){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=N(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=N(e,n,s);else{if(l==="function")return $(()=>{let o=t();for(;typeof o=="function";)o=o();n=R(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(Y(o,t,n,r))return $(()=>n=R(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=N(e,n,s),i)return n}else u?n.length===0?se(e,o,s):Pe(e,n,o):(n&&N(e),se(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=N(e,n,s,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Y(e,t,n,s){let r=!1;for(let l=0,i=t.length;l<i;l++){let o=t[l],u=n&&n[l],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=Y(e,o,u)||r;else if(a==="function")if(s){for(;typeof o=="function";)o=o();r=Y(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||r}else e.push(o),r=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function se(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function N(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let l=!1;for(let i=t.length-1;i>=0;i--){const o=t[i];if(r!==o){const u=o.parentNode===e;!l&&!i?u?e.replaceChild(r,o):e.insertBefore(r,n):u&&o.remove()}else l=!0}}else e.insertBefore(r,n);return[r]}const De="_topbar_o13d9_1",Me="_header_o13d9_6",Fe="_version_o13d9_10",W={topbar:De,header:Me,version:Fe},qe=y("<div><span>Evolve</span><span>dev"),Ue=()=>(()=>{const e=qe(),t=e.firstChild,n=t.nextSibling;return $(s=>{const r=W.topbar,l=W.header,i=W.version;return r!==s._v$&&S(e,s._v$=r),l!==s._v$2&&S(t,s._v$2=l),i!==s._v$3&&S(n,s._v$3=i),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();function je(e){return e.items[0].count=(e.items[0].count??0)+1,e}function Re(e,t){setInterval(()=>{e=je(e),t(e)},1e3)}const ye={name:"测试",items:[{id:1,name:"circle",display:"小圆球",description:"很圆",craftFrom:{},everySecond:{}},{id:2,name:"strong",display:"赵强",description:"很强",craftFrom:{circle:10},everySecond:{}}]},Ge="_container_80sn7_1",Ke={container:Ge},Ve="_tab_1rwds_1",He="_selectTab_1rwds_11",Qe="_logger_1rwds_18",O={tab:Ve,selectTab:He,logger:Qe},re=y("<div>"),We=y("<div><span>事件日志</span><span>调试信息"),Xe=y("<div>Not Found"),Ye=y("<p>暂无事件日志。"),le=y("<p>"),Je=y("<p>暂无调试信息。"),Ze=()=>{const e=Z(me),[t,n]=K("event");return(()=>{const s=We(),r=s.firstChild,l=r.nextSibling;return r.$$click=()=>{n("event")},l.$$click=()=>{n("log")},v(s,g(Oe,{get fallback(){return Xe()},get children(){return[g(te,{get when(){return t()==="event"},get children(){const i=re();return v(i,g(j,{get each(){return e().event},get fallback(){return Ye()},children:o=>(()=>{const u=le();return v(u,o),u})()})),$(()=>S(i,O.logger)),i}}),g(te,{get when(){return t()==="log"},get children(){const i=re();return v(i,g(j,{get each(){return e().log},get fallback(){return Je()},children:o=>(()=>{const u=le();return v(u,o),u})()})),$(()=>S(i,O.logger)),i}})]}}),null),$(i=>{const o=t()==="event"?O.selectTab:O.tab,u=t()==="log"?O.selectTab:O.tab;return o!==i._v$&&S(r,i._v$=o),u!==i._v$2&&S(l,i._v$2=u),i},{_v$:void 0,_v$2:void 0}),s})()};Be(["click"]);const ze="_item_glsej_1",et={item:ze},tt=y("<div>"),nt=y("<p><span></span><span></span><span>"),st=()=>{const e=Z(z);return(()=>{const t=tt();return v(t,g(j,{get each(){return e().items},get fallback(){return[]},children:n=>(()=>{const s=nt(),r=s.firstChild,l=r.nextSibling,i=l.nextSibling;return v(r,()=>n.display),v(l,()=>n.count??0),v(i,()=>n.speed??0),$(()=>S(s,et.item)),s})()})),t})()},rt=y("<div>"),lt=()=>{const e=Z(z);return(()=>{const t=rt();return v(t,g(j,{get each(){return e().items},get fallback(){return[]},children:()=>[]})),t})()};function J(e){if(["number","string","boolean"].includes(typeof e))return e;if(e instanceof Array){let t=[];for(let n of e)t.push(J(n));return t}else{let t={};for(let[n,s]of Object.entries(e))t[n]=J(s);return t}}const it=y("<div>"),me=ce(()=>({log:[],event:[]})),[ot,dt]=K({log:[],event:[]}),z=ce(()=>ye),[ie,ct]=K(ye),ut=()=>(Re(ie(),e=>{ct(J(e))}),(()=>{const e=it();return v(e,g(z.Provider,{value:ie,get children(){return[g(st,{}),g(lt,{})]}}),null),v(e,g(me.Provider,{value:ot,get children(){return g(Ze,{})}}),null),$(()=>S(e,Ke.container)),e})()),ft=()=>[g(Ue,{}),g(ut,{})],at=document.getElementById("root");ke(()=>g(ft,{}),at);
