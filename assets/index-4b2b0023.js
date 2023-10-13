(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Oe=(e,t)=>e===t,je=Symbol("solid-track"),R={equals:Oe};let De=we;const N=1,H=2,pe={owned:null,cleanups:null,context:null,owner:null};var a=null;let Z=null,m=null,y=null,T=null,Y=0;function q(e,t){const n=m,r=a,s=e.length===0,i=t===void 0?r:t,o=s?pe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?e:()=>e(()=>S(()=>X(o)));a=o,m=null;try{return F(l,!0)}finally{m=n,a=r}}function P(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),_e(n,s));return[ve.bind(n),r]}function w(e,t,n){const r=ye(e,t,!1,N);W(r)}function k(e,t,n){n=n?Object.assign({},R,n):R;const r=ye(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,W(r),ve.bind(r)}function S(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Me(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function me(e,t){const n=Symbol("context");return{id:n,Provider:Ue(n),defaultValue:e}}function Q(e){return a&&a.context&&a.context[e.id]!==void 0?a.context[e.id]:e.defaultValue}function ge(e){const t=k(e),n=k(()=>ne(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function ve(){if(this.sources&&this.state)if(this.state===N)W(this);else{const e=y;y=null,F(()=>G(this),!1),y=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function _e(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=Z&&Z.running;o&&Z.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?y.push(i):T.push(i),i.observers&&be(i)),o||(i.state=N)}if(y.length>1e6)throw y=[],new Error},!1)),t}function W(e){if(!e.fn)return;X(e);const t=a,n=m,r=Y;m=a=e,Pe(e,e.value,r),m=n,a=t}function Pe(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(X),e.owned=null),e.updatedAt=n+1,Ce(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?_e(e,r):e.value=r,e.updatedAt=n)}function ye(e,t,n,r=N,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:a?a.context:null,pure:n};return a===null||a!==pe&&(a.owned?a.owned.push(i):a.owned=[i]),i}function $e(e){if(e.state===0)return;if(e.state===H)return G(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)W(e);else if(e.state===H){const r=y;y=null,F(()=>G(e,t[0]),!1),y=r}}function F(e,t){if(y)return e();let n=!1;t||(y=[]),T?n=!0:T=[],Y++;try{const r=e();return Fe(n),r}catch(r){n||(T=null),y=null,Ce(r)}}function Fe(e){if(y&&(we(y),y=null),e)return;const t=T;T=null,t.length&&F(()=>De(t),!1)}function we(e){for(let t=0;t<e.length;t++)$e(e[t])}function G(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===N?r!==t&&(!r.updatedAt||r.updatedAt<Y)&&$e(r):s===H&&G(r,t)}}}function be(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=H,n.pure?y.push(n):T.push(n),n.observers&&be(n))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Be(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ce(e,t=a){throw Be(e)}function ne(e){if(typeof e=="function"&&!e.length)return ne(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ne(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ue(e,t){return function(r){let s;return w(()=>s=S(()=>(a.context={...a.context,[e]:r.value},ge(()=>r.children))),void 0),s}}const qe=Symbol("fallback");function ce(e){for(let t=0;t<e.length;t++)e[t]()}function Re(e,t,n={}){let r=[],s=[],i=[],o=0,l=t.length>1?[]:null;return Me(()=>ce(i)),()=>{let u=e()||[],f,c;return u[je],S(()=>{let d=u.length,$,b,E,B,U,C,A,x,L;if(d===0)o!==0&&(ce(i),i=[],r=[],s=[],o=0,l&&(l=[])),n.fallback&&(r=[qe],s[0]=q(Ie=>(i[0]=Ie,n.fallback())),o=1);else if(o===0){for(s=new Array(d),c=0;c<d;c++)r[c]=u[c],s[c]=q(_);o=d}else{for(E=new Array(d),B=new Array(d),l&&(U=new Array(d)),C=0,A=Math.min(o,d);C<A&&r[C]===u[C];C++);for(A=o-1,x=d-1;A>=C&&x>=C&&r[A]===u[x];A--,x--)E[x]=s[A],B[x]=i[A],l&&(U[x]=l[A]);for($=new Map,b=new Array(x+1),c=x;c>=C;c--)L=u[c],f=$.get(L),b[c]=f===void 0?-1:f,$.set(L,c);for(f=C;f<=A;f++)L=r[f],c=$.get(L),c!==void 0&&c!==-1?(E[c]=s[f],B[c]=i[f],l&&(U[c]=l[f]),c=b[c],$.set(L,c)):i[f]();for(c=C;c<d;c++)c in E?(s[c]=E[c],i[c]=B[c],l&&(l[c]=U[c],l[c](c))):s[c]=q(_);s=s.slice(0,o=d),r=u.slice(0)}return s});function _(d){if(i[c]=d,l){const[$,b]=P(c);return l[c]=b,t(u[c],$)}return t(u[c])}}}function p(e,t){return S(()=>e(t||{}))}const Ae=e=>`Stale read from <${e}>.`;function M(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(Re(()=>e.each,e.children,t||void 0))}function He(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return k(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?S(()=>s(t?r:()=>{if(!S(n))throw Ae("Show");return e.when})):s}return e.fallback},void 0,void 0)}function Se(e){let t=!1;const n=(i,o)=>i[0]===o[0]&&(t?i[1]===o[1]:!i[1]==!o[1])&&i[2]===o[2],r=ge(()=>e.children),s=k(()=>{let i=r();Array.isArray(i)||(i=[i]);for(let o=0;o<i.length;o++){const l=i[o].when;if(l)return t=!!i[o].keyed,[o,l,i[o]]}return[-1]},void 0,{equals:n});return k(()=>{const[i,o,l]=s();if(i<0)return e.fallback;const u=l.children;return typeof u=="function"&&u.length>0?S(()=>u(t?o:()=>{if(S(s)[0]!==i)throw Ae("Match");return l.when})):u},void 0,void 0)}function K(e){return e}function Ge(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,u=t[s-1].nextSibling,f=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<r?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<s;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!f){f=new Map;let _=l;for(;_<i;)f.set(n[_],_++)}const c=f.get(t[o]);if(c!=null)if(l<c&&c<i){let _=o,d=1,$;for(;++_<s&&_<i&&!(($=f.get(t[_]))==null||$!==c+d);)d++;if(d>c-l){const b=t[o];for(;l<c;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const ue="_$DX_DELEGATE";function Ke(e,t,n,r={}){let s;return q(i=>{s=i,t===document?e():h(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function v(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>S(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function xe(e,t=window.document){const n=t[ue]||(t[ue]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Ve))}}function g(e,t){t==null?e.removeAttribute("class"):e.className=t}function h(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,n);w(s=>V(e,t(),s,n),r)}function Ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=I(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=I(e,n,r);else{if(i==="function")return w(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(re(l,t,n,s))return w(()=>n=V(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=I(e,n,r),o)return n}else u?n.length===0?fe(e,l,r):Ge(e,n,l):(n&&I(e),fe(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=I(e,n,r,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function re(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[i],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=re(e,l,u)||s;else if(f==="function")if(r){for(;typeof l=="function";)l=l();s=re(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else e.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function fe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function I(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Ye="_topbar_o13d9_1",Qe="_header_o13d9_6",We="_version_o13d9_10",z={topbar:Ye,header:Qe,version:We},Xe=v("<div><span>Yovolve</span><span>dev"),Je=()=>(()=>{const e=Xe(),t=e.firstChild,n=t.nextSibling;return w(r=>{const s=z.topbar,i=z.header,o=z.version;return s!==r._v$&&g(e,r._v$=s),i!==r._v$2&&g(t,r._v$2=i),o!==r._v$3&&g(n,r._v$3=o),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();function se(e,t){let n=0;for(;n<e.items.length&&(typeof t=="string"?e.items[n].name:e.items[n].id)!=t;)n++;return n==e.items.length?null:n}function oe(e,t){const n=e.items.filter(r=>(typeof t=="string"?r.name:r.id)==t);return n.length>0?n[0]:null}function le(e,t){const n=oe(e,t);let r={};for(let[s,i]of Object.entries(n.craftFrom??{}))r[s]=Math.ceil(i*Math.pow((n.costMulti??{})[s]??1,n.count??0));return r}function ae(e,t){const n=le(e,t);let r=!0;for(let[s,i]of Object.entries(n))(oe(e,s).count??0)<i&&(r=!1);return r}function Ze(e,t,n){const r=le(e,t);for(let[i,o]of Object.entries(r)){const l=se(e,i);e.items[l].count=(e.items[l].count??0)-o}const s=se(e,t);e.items[s].count=(e.items[s].count??0)+1,n(e)}function ze(e){for(let t in e.items)e.items[t].speed=-(e.items[t].count??0);for(let t of e.items)for(let[n,r]of Object.entries(t.everySecond??{})){const s=se(e,n);e.items[s].count=(e.items[s].count??0)+Math.floor(r*(t.count??0))}for(let t in e.items)e.items[t].speed=(e.items[t].count??0)+(e.items[t].speed??0);return e}function et(e,t){setInterval(()=>{t(ze(e()))},1e3)}const Ee={name:"测试",items:[{id:1,name:"circle",display:"小圆球",description:"很圆",craftFrom:{},everySecond:{}},{id:2,name:"strong",display:"赵强",description:"很强",craftFrom:{circle:2},costMulti:{circle:5},everySecond:{circle:1}},{id:3,name:"qiao",display:"俏颖",description:"翘",craftFrom:{circle:3},costMulti:{circle:5},everySecond:{circle:1}},{id:4,name:"hunk",display:"猛男",description:"很萌",craftFrom:{strong:1,qiao:1},costMulti:{circle:3},everySecond:{circle:2.5}}]},tt="_container_80sn7_1",nt={container:tt},rt="_tab_1rwds_1",st="_selectTab_1rwds_11",it="_logger_1rwds_18",O={tab:rt,selectTab:st,logger:it},de=v("<div>"),ot=v("<div><span>事件日志</span><span>调试信息"),lt=v("<div>Not Found"),ct=v("<p>暂无事件日志。"),he=v("<p>"),ut=v("<p>暂无调试信息。"),ft=()=>{const e=Q(Te),[t,n]=P("event");return(()=>{const r=ot(),s=r.firstChild,i=s.nextSibling;return s.$$click=()=>{n("event")},i.$$click=()=>{n("log")},h(r,p(Se,{get fallback(){return lt()},get children(){return[p(K,{get when(){return t()==="event"},get children(){const o=de();return h(o,p(M,{get each(){return e().event},get fallback(){return ct()},children:l=>(()=>{const u=he();return h(u,l),u})()})),w(()=>g(o,O.logger)),o}}),p(K,{get when(){return t()==="log"},get children(){const o=de();return h(o,p(M,{get each(){return e().log},get fallback(){return ut()},children:l=>(()=>{const u=he();return h(u,l),u})()})),w(()=>g(o,O.logger)),o}})]}}),null),w(o=>{const l=t()==="event"?O.selectTab:O.tab,u=t()==="log"?O.selectTab:O.tab;return l!==o._v$&&g(s,o._v$=l),u!==o._v$2&&g(i,o._v$2=u),o},{_v$:void 0,_v$2:void 0}),r})()};xe(["click"]);const at="_item_gp0uh_1",dt="_countUp_gp0uh_14",ht="_countDown_gp0uh_18",ee={item:at,countUp:dt,countDown:ht};function ie(e){if(["number","string","boolean"].includes(typeof e))return e;if(e instanceof Array){let t=[];for(let n of e)t.push(ie(n));return t}else{let t={};for(let[n,r]of Object.entries(e))t[n]=ie(r);return t}}function D(e){return e<2e3?`${e}`:e<1e6?`${(e/1e3).toFixed(1)}k`:e<1e9?`${(e/1e6).toFixed(2)}m`:`${(e/1e9).toFixed(2)}b`}const pt=v("<div>"),mt=v("<span>+"),gt=v("<span>"),vt=v("<p><span></span><span>"),_t=v("<span>0"),yt=()=>{const e=Q(J);return(()=>{const t=pt();return h(t,p(M,{get each(){return e().items},get fallback(){return[]},children:n=>(()=>{const r=vt(),s=r.firstChild,i=s.nextSibling;return h(s,()=>n.display),h(i,()=>D(n.count??0)),h(r,p(Se,{get fallback(){return _t()},get children(){return[p(K,{get when(){return(n.speed??0)>0},get children(){const o=mt();return o.firstChild,h(o,()=>D(n.speed??0),null),w(()=>g(o,ee.countUp)),o}}),p(K,{get when(){return(n.speed??0)<0},get children(){const o=gt();return h(o,()=>D(n.speed??0)),w(()=>g(o,ee.countDown)),o}})]}}),null),w(()=>g(r,ee.item)),r})()})),t})()},$t="_container_13upf_1",wt={container:$t},bt="_container_jf66w_1",Ct="_disabledContainer_jf66w_16",At="_name_jf66w_24",St="_countContainer_jf66w_30",xt="_countNumber_jf66w_40",Et="_hoverCard_jf66w_45",j={container:bt,disabledContainer:Ct,name:At,countContainer:St,countNumber:xt,hoverCard:Et},Tt=v("<div><p></p><p>"),kt=v("<div><p></p><div><span>"),Nt=v("<p>: "),Lt=e=>{const{item:t}=e,n=Q(J),[r,s]=P(!1);return(()=>{const i=kt(),o=i.firstChild,l=o.nextSibling,u=l.firstChild;return i.addEventListener("mouseleave",()=>s(!1)),i.addEventListener("mouseenter",()=>s(!0)),i.$$click=()=>{ae(n(),t.id)&&te(100,1)&&te(1e3,8)&&te(5e3,25)&&(Pt(),Ze(n(),t.id,Ne))},h(o,()=>t.display),h(u,()=>D(t.count??0)),h(i,p(He,{get when(){return r()},get children(){const f=Tt(),c=f.firstChild,_=c.nextSibling;return h(c,()=>t.display),h(f,p(M,{get each(){return Object.entries(le(n(),t.id))},get fallback(){return[]},children:d=>{const $=oe(n(),d[0]);return(()=>{const b=Nt(),E=b.firstChild;return h(b,()=>$.display,E),h(b,()=>D(d[1]),null),b})()}}),_),h(_,()=>t.description),w(()=>g(f,j.hoverCard)),f}}),null),w(f=>{const c=(ae(n(),t.id)?"":j.disabledContainer+" ")+j.container,_=j.name,d=j.countContainer,$=j.countNumber;return c!==f._v$&&g(i,f._v$=c),_!==f._v$2&&g(o,f._v$2=_),d!==f._v$3&&g(l,f._v$3=d),$!==f._v$4&&g(u,f._v$4=$),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),i})()};xe(["click"]);const It=v("<div>"),Ot=()=>{const e=Q(J);return(()=>{const t=It();return h(t,p(M,{get each(){return e().items},get fallback(){return[]},children:n=>p(Lt,{item:n})})),w(()=>g(t,wt.container)),t})()},jt=v("<div>"),Te=me(()=>({log:[],event:[]})),[Dt,qt]=P({log:[],event:[]}),J=me(()=>Ee),[ke,Mt]=P(Ee);function Ne(e){Mt(ie(e))}et(ke,Ne);let Le=[];function te(e,t){const n=new Date().getTime();for(let r of Le)r>n-e&&t--;return t>0}function Pt(){Le.push(new Date().getTime())}const Ft=()=>(()=>{const e=jt();return h(e,p(J.Provider,{value:ke,get children(){return[p(yt,{}),p(Ot,{})]}}),null),h(e,p(Te.Provider,{value:Dt,get children(){return p(ft,{})}}),null),w(()=>g(e,nt.container)),e})(),Bt=()=>[p(Je,{}),p(Ft,{})],Ut=document.getElementById("root");Ke(()=>p(Bt,{}),Ut);
