function g(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function C(){return Object.create(null)}function b(t){t.forEach(B)}function L(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function _t(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,s){if(r){const c=O(e,n,i,s);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const P=typeof window<"u";let yt=P?()=>window.performance.now():()=>Date.now(),q=P?t=>requestAnimationFrame(t):g;const m=new Set;function D(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&q(D)}function gt(t){let e;return m.size===0&&q(D),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let v=!1;function R(){v=!0}function U(){v=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:V(1,r,w=>e[n[w]].claim_order,l))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const s=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(s.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[u],f)}}function Y(t,e){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xt(t,e,n){v&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function wt(){return A("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){it(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function T(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Et(t,e,n){return T(t,e,n,tt)}function Nt(t,e,n){return T(t,e,n,et)}function rt(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function St(t){return rt(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e){return new t(e)}let x;function y(t){x=t}function H(){if(!x)throw new Error("Function called outside component initialization");return x}function Ct(t){H().$$.on_mount.push(t)}function Mt(t){H().$$.after_update.push(t)}const h=[],M=[];let p=[];const z=[],I=Promise.resolve();let N=!1;function G(){N||(N=!0,I.then(J))}function zt(){return G(),I}function S(t){p.push(t)}const E=new Set;let _=0;function J(){if(_!==0)return;const t=x;do{try{for(;_<h.length;){const e=h[_];_++,y(e),ct(e.$$)}}catch(e){throw h.length=0,_=0,e}for(y(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];E.has(n)||(E.add(n),n())}p.length=0}while(h.length);for(;z.length;)z.pop()();N=!1,E.clear(),y(t)}function ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function ut(t){const e=[],n=[];p.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),p=e}const $=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Lt(){d.r||b(d.c),d=d.p}function lt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Ot(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Pt(t){t&&t.c()}function qt(t,e){t&&t.l(e)}function ot(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(B).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),s.forEach(S)}function st(t,e){const n=t.$$;n.fragment!==null&&(ut(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Dt(t,e,n,i,r,s,c,o=[-1]){const u=x;y(t);const l=t.$$={fragment:null,ctx:[],props:s,update:g,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,w,...j)=>{const k=j.length?j[0]:w;return l.ctx&&r(l.ctx[a],l.ctx[a]=k)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](k),f&&at(t,a)),w}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){R();const a=nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(Z)}else l.fragment&&l.fragment.c();e.intro&&lt(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),U(),J()}y(u)}class Ft{$destroy(){st(this,1),this.$destroy=g}$on(e,n){if(!L(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ot as A,st as B,_t as C,mt as D,pt as E,ht as F,Y as G,g as H,dt as I,yt as J,gt as K,et as L,Nt as M,$t as N,Ft as S,bt as a,xt as b,St as c,Ot as d,wt as e,Lt as f,lt as g,Z as h,Dt as i,Mt as j,tt as k,Et as l,nt as m,vt as n,Ct as o,jt as p,A as q,rt as r,ft as s,zt as t,At as u,Bt as v,M as w,kt as x,Pt as y,qt as z};
