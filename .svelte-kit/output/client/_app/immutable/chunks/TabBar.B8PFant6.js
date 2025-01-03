import{s as Mt,l as gt,B as D,e as rt,c as lt,b as at,f as W,F as Y,i as Q,h as Ot,G as Z,u as St,m as pt,o as bt,H as x,I as Qt,y as ot,z as Wt,M as Kt,C as Nt,q as G,w as wt,x as mt,A as xt,D as yt,a as Xt,g as Gt,E as me,L as J}from"./scheduler.DhWV7ypx.js";import{S as Vt,i as Ft,t as M,a as V,c as At,d as Yt,m as Ct,g as Dt,e as Tt,f as Pt}from"./index.V8m0JAxO.js";import{g as H,a as ut}from"./spread.CgU5AtxT.js";import{c as N,u as ft,f as jt,S as $t}from"./SmuiElement.DFYghDnT.js";import{d as Lt}from"./dispatch.D38adG8O.js";import{p as j,e as $}from"./prefixFilter.OhiPYEKz.js";import{R as zt}from"./Ripple.BXwXYlkv.js";import{_ as tt,a as it,M as kt,c as ge,p as Se}from"./ponyfill.BpwGTcRg.js";import{e as te,u as pe,o as be}from"./each.CgqZEEeH.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _e={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},ve={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w=function(n){tt(t,n);function t(e){return n.call(this,it(it({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ve},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(kt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ae=function(n){tt(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.activate=function(){this.adapter.addClass(w.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(w.cssClasses.ACTIVE)},t}(w);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ee=function(n){tt(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.activate=function(e){if(!e){this.adapter.addClass(w.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),l=e.width/r.width,a=e.left-r.left;this.adapter.addClass(w.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+l+")"),this.computeContentClientRect(),this.adapter.removeClass(w.cssClasses.NO_TRANSITION),this.adapter.addClass(w.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},t.prototype.deactivate=function(){this.adapter.removeClass(w.cssClasses.ACTIVE)},t}(w);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rt={ACTIVE:"mdc-tab--active"},vt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ce=function(n){tt(t,n);function t(e){var r=n.call(this,it(it({},t.defaultAdapter),e))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(t,"cssClasses",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(Rt.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate=e},t.prototype.activate=function(e){this.adapter.addClass(Rt.ACTIVE),this.adapter.setAttr(vt.ARIA_SELECTED,"true"),this.adapter.setAttr(vt.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate&&this.adapter.focus()},t.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Rt.ACTIVE),this.adapter.setAttr(vt.ARIA_SELECTED,"false"),this.adapter.setAttr(vt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),l=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:r+a,contentRight:r+a+l,rootLeft:r,rootRight:r+e}},t}(kt);function Te(n){let t,e,r,l,a,u,o,s,h,_,T;const g=n[21].default,S=gt(g,n,n[20],null);let O=[{class:r=N({[n[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":n[3]==="underline","mdc-tab-indicator__content--icon":n[3]==="icon"})},{style:l=Object.entries(n[10]).map(ne).join(" ")},{"aria-hidden":a=n[3]==="icon"?"true":void 0},j(n[12],"content$")],E={};for(let c=0;c<O.length;c+=1)E=D(E,O[c]);let p=[{class:o=N({[n[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":n[0],"mdc-tab-indicator--fade":n[4]==="fade",...n[9]})},$(n[12],["content$"])],f={};for(let c=0;c<p.length;c+=1)f=D(f,p[c]);return{c(){t=rt("span"),e=rt("span"),S&&S.c(),this.h()},l(c){t=lt(c,"SPAN",{class:!0});var A=at(t);e=lt(A,"SPAN",{class:!0,style:!0,"aria-hidden":!0});var C=at(e);S&&S.l(C),C.forEach(W),A.forEach(W),this.h()},h(){Y(e,E),Y(t,f)},m(c,A){Q(c,t,A),Ot(t,e),S&&S.m(e,null),n[22](e),n[23](t),h=!0,_||(T=[Z(u=ft.call(null,e,n[5])),Z(s=ft.call(null,t,n[1])),Z(n[11].call(null,t))],_=!0)},p(c,[A]){S&&S.p&&(!h||A&1048576)&&St(S,g,c,c[20],h?bt(g,c[20],A,null):pt(c[20]),null),Y(e,E=H(O,[(!h||A&72&&r!==(r=N({[c[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":c[3]==="underline","mdc-tab-indicator__content--icon":c[3]==="icon"})))&&{class:r},(!h||A&1024&&l!==(l=Object.entries(c[10]).map(ne).join(" ")))&&{style:l},(!h||A&8&&a!==(a=c[3]==="icon"?"true":void 0))&&{"aria-hidden":a},A&4096&&j(c[12],"content$")])),u&&x(u.update)&&A&32&&u.update.call(null,c[5]),Y(t,f=H(p,[(!h||A&533&&o!==(o=N({[c[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":c[0],"mdc-tab-indicator--fade":c[4]==="fade",...c[9]})))&&{class:o},A&4096&&$(c[12],["content$"])])),s&&x(s.update)&&A&2&&s.update.call(null,c[1])},i(c){h||(M(S,c),h=!0)},o(c){V(S,c),h=!1},d(c){c&&W(t),S&&S.d(c),n[22](null),n[23](null),_=!1,Qt(T)}}}const ne=([n,t])=>`${n}: ${t};`;function Ee(n,t,e){const r=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let l=ot(t,r),{$$slots:a={},$$scope:u}=t;const o=jt(Wt());let{use:s=[]}=t,{class:h=""}=t,{active:_=!1}=t,{type:T="underline"}=t,{transition:g="slide"}=t,{content$use:S=[]}=t,{content$class:O=""}=t,E,p,f,c={},A={},C=[],L=g;Kt(()=>(e(17,p=I()),p.init(),()=>{p.destroy()}));function I(){const i={fade:Ae,slide:ee}[g]||ee;return new i({addClass:(...v)=>m(()=>R(...v)),removeClass:(...v)=>m(()=>k(...v)),computeContentClientRect:q,setContentStyleProperty:(...v)=>m(()=>K(...v))})}function m(i){C.length?C[C.length-1].push(i):i()}function R(i){c[i]||e(9,c[i]=!0,c)}function k(i){(!(i in c)||c[i])&&e(9,c[i]=!1,c)}function K(i,v){A[i]!=v&&(v===""||v==null?(delete A[i],e(10,A),e(19,L),e(4,g),e(17,p)):e(10,A[i]=v,A))}function z(i){e(0,_=!0),p.activate(i)}function et(){e(0,_=!1),p.deactivate()}function q(){return C.push([]),e(18,C),f.getBoundingClientRect()}function B(){return E}function st(i){G[i?"unshift":"push"](()=>{f=i,e(8,f)})}function nt(i){G[i?"unshift":"push"](()=>{E=i,e(7,E)})}return n.$$set=i=>{t=D(D({},t),Nt(i)),e(12,l=ot(t,r)),"use"in i&&e(1,s=i.use),"class"in i&&e(2,h=i.class),"active"in i&&e(0,_=i.active),"type"in i&&e(3,T=i.type),"transition"in i&&e(4,g=i.transition),"content$use"in i&&e(5,S=i.content$use),"content$class"in i&&e(6,O=i.content$class),"$$scope"in i&&e(20,u=i.$$scope)},n.$$.update=()=>{n.$$.dirty&655376&&L!==g&&(e(19,L=g),p&&p.destroy(),e(9,c={}),e(10,A={}),e(17,p=I()),p.init()),n.$$.dirty&262144&&C.length&&requestAnimationFrame(()=>{var i;const v=(i=C.shift())!==null&&i!==void 0?i:[];e(18,C);for(const P of v)P()})},[_,s,h,T,g,S,O,E,f,c,A,o,l,z,et,q,B,p,C,L,u,a,st,nt]}class de extends Vt{constructor(t){super(),Ft(this,t,Ee,Te,Mt,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const Ie=n=>({}),re=n=>({}),Re=n=>({}),le=n=>({});function ae(n){let t,e;const r=[{active:n[18]},j(n[25],"tabIndicator$")];let l={$$slots:{default:[Le]},$$scope:{ctx:n}};for(let a=0;a<r.length;a+=1)l=D(l,r[a]);return t=new de({props:l}),n[33](t),{c(){At(t.$$.fragment)},l(a){Yt(t.$$.fragment,a)},m(a,u){Ct(t,a,u),e=!0},p(a,u){const o=u[0]&33816576?H(r,[u[0]&262144&&{active:a[18]},u[0]&33554432&&ut(j(a[25],"tabIndicator$"))]):{};u[1]&64&&(o.$$scope={dirty:u,ctx:a}),t.$set(o)},i(a){e||(M(t.$$.fragment,a),e=!0)},o(a){V(t.$$.fragment,a),e=!1},d(a){n[33](null),Tt(t,a)}}}function Le(n){let t;const e=n[32]["tab-indicator"],r=gt(e,n,n[37],le);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,a){r&&r.m(l,a),t=!0},p(l,a){r&&r.p&&(!t||a[1]&64)&&St(r,e,l,l[37],t?bt(e,l[37],a,Re):pt(l[37]),le)},i(l){t||(M(r,l),t=!0)},o(l){V(r,l),t=!1},d(l){r&&r.d(l)}}}function oe(n){let t,e;const r=[{active:n[18]},j(n[25],"tabIndicator$")];let l={$$slots:{default:[Oe]},$$scope:{ctx:n}};for(let a=0;a<r.length;a+=1)l=D(l,r[a]);return t=new de({props:l}),n[35](t),{c(){At(t.$$.fragment)},l(a){Yt(t.$$.fragment,a)},m(a,u){Ct(t,a,u),e=!0},p(a,u){const o=u[0]&33816576?H(r,[u[0]&262144&&{active:a[18]},u[0]&33554432&&ut(j(a[25],"tabIndicator$"))]):{};u[1]&64&&(o.$$scope={dirty:u,ctx:a}),t.$set(o)},i(a){e||(M(t.$$.fragment,a),e=!0)},o(a){V(t.$$.fragment,a),e=!1},d(a){n[35](null),Tt(t,a)}}}function Oe(n){let t;const e=n[32]["tab-indicator"],r=gt(e,n,n[37],re);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,a){r&&r.m(l,a),t=!0},p(l,a){r&&r.p&&(!t||a[1]&64)&&St(r,e,l,l[37],t?bt(e,l[37],a,Ie):pt(l[37]),re)},i(l){t||(M(r,l),t=!0)},o(l){V(r,l),t=!1},d(l){r&&r.d(l)}}}function ye(n){let t,e,r,l,a,u,o,s,h,_;const T=n[32].default,g=gt(T,n,n[37],null);let S=n[6]&&ae(n),O=[{class:r=N({[n[9]]:!0,"mdc-tab__content":!0})},j(n[25],"content$")],E={};for(let f=0;f<O.length;f+=1)E=D(E,O[f]);let p=!n[6]&&oe(n);return{c(){t=rt("span"),g&&g.c(),e=Xt(),S&&S.c(),a=Xt(),p&&p.c(),u=Xt(),o=rt("span"),this.h()},l(f){t=lt(f,"SPAN",{class:!0});var c=at(t);g&&g.l(c),e=Gt(c),S&&S.l(c),c.forEach(W),a=Gt(f),p&&p.l(f),u=Gt(f),o=lt(f,"SPAN",{class:!0}),at(o).forEach(W),this.h()},h(){Y(t,E),me(o,"class","mdc-tab__ripple")},m(f,c){Q(f,t,c),g&&g.m(t,null),Ot(t,e),S&&S.m(t,null),n[34](t),Q(f,a,c),p&&p.m(f,c),Q(f,u,c),Q(f,o,c),s=!0,h||(_=Z(l=ft.call(null,t,n[8])),h=!0)},p(f,c){g&&g.p&&(!s||c[1]&64)&&St(g,T,f,f[37],s?bt(T,f[37],c,null):pt(f[37]),null),f[6]?S?(S.p(f,c),c[0]&64&&M(S,1)):(S=ae(f),S.c(),M(S,1),S.m(t,null)):S&&(Dt(),V(S,1,1,()=>{S=null}),Pt()),Y(t,E=H(O,[(!s||c[0]&512&&r!==(r=N({[f[9]]:!0,"mdc-tab__content":!0})))&&{class:r},c[0]&33554432&&j(f[25],"content$")])),l&&x(l.update)&&c[0]&256&&l.update.call(null,f[8]),f[6]?p&&(Dt(),V(p,1,1,()=>{p=null}),Pt()):p?(p.p(f,c),c[0]&64&&M(p,1)):(p=oe(f),p.c(),M(p,1),p.m(u.parentNode,u))},i(f){s||(M(g,f),M(S),M(p),s=!0)},o(f){V(g,f),V(S),V(p),s=!1},d(f){f&&(W(t),W(a),W(u),W(o)),g&&g.d(f),S&&S.d(),n[34](null),p&&p.d(f),h=!1,_()}}}function De(n){let t,e,r;const l=[{tag:n[11]},{use:[[zt,{ripple:n[3],unbounded:!1,addClass:n[21],removeClass:n[22],addStyle:n[23]}],n[20],...n[0]]},{class:N({[n[1]]:!0,"mdc-tab":!0,"mdc-tab--active":n[18],"mdc-tab--stacked":n[4],"mdc-tab--min-width":n[5],...n[15]})},{style:Object.entries(n[16]).map(qt).concat([n[2]]).join(" ")},{role:"tab"},{"aria-selected":n[18]?"true":"false"},{tabindex:n[18]||n[19]?"0":"-1"},{href:n[7]},n[17],$(n[25],["content$","tabIndicator$"])];var a=n[10];function u(o,s){let h={$$slots:{default:[ye]},$$scope:{ctx:o}};for(let _=0;_<l.length;_+=1)h=D(h,l[_]);return s!==void 0&&s[0]&50301119&&(h=D(h,H(l,[s[0]&2048&&{tag:o[11]},s[0]&15728649&&{use:[[zt,{ripple:o[3],unbounded:!1,addClass:o[21],removeClass:o[22],addStyle:o[23]}],o[20],...o[0]]},s[0]&294962&&{class:N({[o[1]]:!0,"mdc-tab":!0,"mdc-tab--active":o[18],"mdc-tab--stacked":o[4],"mdc-tab--min-width":o[5],...o[15]})},s[0]&65540&&{style:Object.entries(o[16]).map(qt).concat([o[2]]).join(" ")},l[4],s[0]&262144&&{"aria-selected":o[18]?"true":"false"},s[0]&786432&&{tabindex:o[18]||o[19]?"0":"-1"},s[0]&128&&{href:o[7]},s[0]&131072&&ut(o[17]),s[0]&33554432&&ut($(o[25],["content$","tabIndicator$"]))]))),{props:h}}return a&&(t=wt(a,u(n)),n[36](t),t.$on("click",n[24])),{c(){t&&At(t.$$.fragment),e=mt()},l(o){t&&Yt(t.$$.fragment,o),e=mt()},m(o,s){t&&Ct(t,o,s),Q(o,e,s),r=!0},p(o,s){if(s[0]&1024&&a!==(a=o[10])){if(t){Dt();const h=t;V(h.$$.fragment,1,0,()=>{Tt(h,1)}),Pt()}a?(t=wt(a,u(o,s)),o[36](t),t.$on("click",o[24]),At(t.$$.fragment),M(t.$$.fragment,1),Ct(t,e.parentNode,e)):t=null}else if(a){const h=s[0]&50301119?H(l,[s[0]&2048&&{tag:o[11]},s[0]&15728649&&{use:[[zt,{ripple:o[3],unbounded:!1,addClass:o[21],removeClass:o[22],addStyle:o[23]}],o[20],...o[0]]},s[0]&294962&&{class:N({[o[1]]:!0,"mdc-tab":!0,"mdc-tab--active":o[18],"mdc-tab--stacked":o[4],"mdc-tab--min-width":o[5],...o[15]})},s[0]&65540&&{style:Object.entries(o[16]).map(qt).concat([o[2]]).join(" ")},l[4],s[0]&262144&&{"aria-selected":o[18]?"true":"false"},s[0]&786432&&{tabindex:o[18]||o[19]?"0":"-1"},s[0]&128&&{href:o[7]},s[0]&131072&&ut(o[17]),s[0]&33554432&&ut($(o[25],["content$","tabIndicator$"]))]):{};s[0]&33841984|s[1]&64&&(h.$$scope={dirty:s,ctx:o}),t.$set(h)}},i(o){r||(t&&M(t.$$.fragment,o),r=!0)},o(o){t&&V(t.$$.fragment,o),r=!1},d(o){o&&W(e),n[36](null),t&&Tt(t,o)}}}const qt=([n,t])=>`${n}: ${t};`;function Pe(n,t,e){const r=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let l=ot(t,r),{$$slots:a={},$$scope:u}=t;const o=jt(Wt());let{use:s=[]}=t,{class:h=""}=t,{style:_=""}=t,{tab:T}=t,{ripple:g=!0}=t,{stacked:S=!1}=t,{minWidth:O=!1}=t,{indicatorSpanOnlyContent:E=!1}=t,{href:p=void 0}=t,{content$use:f=[]}=t,{content$class:c=""}=t,A,C,L,I,m={},R={},k={},K=xt("SMUI:tab:focusOnActivate"),z=T===xt("SMUI:tab:initialActive"),et=!1,{component:q=$t}=t,{tag:B=q===$t?p==null?"button":"a":void 0}=t;if(yt("SMUI:label:context","tab"),yt("SMUI:icon:context","tab"),!T)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");Kt(()=>{e(31,C=new Ce({setAttr:P,addClass:nt,removeClass:i,hasClass:st,activateIndicator:F=>I.activate(F),deactivateIndicator:()=>I.deactivate(),notifyInteracted:()=>Lt(U(),"SMUITab:interacted",{tabId:T},void 0,!0),getOffsetLeft:()=>U().offsetLeft,getOffsetWidth:()=>U().offsetWidth,getContentOffsetLeft:()=>L.offsetLeft,getContentOffsetWidth:()=>L.offsetWidth,focus:_t}));const d={tabId:T,get element(){return U()},get active(){return z},forceAccessible(F){e(19,et=F)},computeIndicatorClientRect:()=>I.computeContentClientRect(),computeDimensions:()=>C.computeDimensions(),focus:_t,activate:Et,deactivate:It};return Lt(U(),"SMUITab:mount",d),C.init(),()=>{Lt(U(),"SMUITab:unmount",d),C.destroy()}});function st(d){return d in m?m[d]:U().classList.contains(d)}function nt(d){m[d]||e(15,m[d]=!0,m)}function i(d){(!(d in m)||m[d])&&e(15,m[d]=!1,m)}function v(d,F){R[d]!=F&&(F===""||F==null?(delete R[d],e(16,R)):e(16,R[d]=F,R))}function P(d,F){k[d]!==F&&e(17,k[d]=F,k)}function ct(d){!d.defaultPrevented&&C&&C.handleClick()}function Et(d,F){e(18,z=!0),F&&C.setFocusOnActivate(!1),C.activate(d),F&&C.setFocusOnActivate(K)}function It(){e(18,z=!1),C.deactivate()}function _t(){U().focus()}function U(){return A.getElement()}function Ht(d){G[d?"unshift":"push"](()=>{I=d,e(14,I)})}function Bt(d){G[d?"unshift":"push"](()=>{L=d,e(13,L)})}function Ut(d){G[d?"unshift":"push"](()=>{I=d,e(14,I)})}function b(d){G[d?"unshift":"push"](()=>{A=d,e(12,A)})}return n.$$set=d=>{t=D(D({},t),Nt(d)),e(25,l=ot(t,r)),"use"in d&&e(0,s=d.use),"class"in d&&e(1,h=d.class),"style"in d&&e(2,_=d.style),"tab"in d&&e(26,T=d.tab),"ripple"in d&&e(3,g=d.ripple),"stacked"in d&&e(4,S=d.stacked),"minWidth"in d&&e(5,O=d.minWidth),"indicatorSpanOnlyContent"in d&&e(6,E=d.indicatorSpanOnlyContent),"href"in d&&e(7,p=d.href),"content$use"in d&&e(8,f=d.content$use),"content$class"in d&&e(9,c=d.content$class),"component"in d&&e(10,q=d.component),"tag"in d&&e(11,B=d.tag),"$$scope"in d&&e(37,u=d.$$scope)},n.$$.update=()=>{n.$$.dirty[1]&1&&C&&C.setFocusOnActivate(K)},[s,h,_,g,S,O,E,p,f,c,q,B,A,L,I,m,R,k,z,et,o,nt,i,v,ct,l,T,Et,It,_t,U,C,a,Ht,Bt,Ut,b,u]}class en extends Vt{constructor(t){super(),Ft(this,t,Pe,De,Mt,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var he={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Me={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zt=function(){function n(t){this.adapter=t}return n}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var We=function(n){tt(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.calculateScrollEdges(),l=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r.right-e);return{finalScrollPosition:a,scrollDelta:a-l}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(r-e);return{finalScrollPosition:l,scrollDelta:l-r}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke=function(n){tt(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(e-r)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(-e);return{finalScrollPosition:l,scrollDelta:l-r}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(r-e);return{finalScrollPosition:l,scrollDelta:l-r}},t.prototype.getAnimatingScrollPosition=function(e,r){return e-r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-e,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,e),r.left)},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ne=function(n){tt(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(e);return{finalScrollPosition:l,scrollDelta:r-l}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(r+e);return{finalScrollPosition:l,scrollDelta:r-l}},t.prototype.getAnimatingScrollPosition=function(e,r){return e+r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:e-r,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,e),r.left)},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ve=function(n){tt(t,n);function t(e){var r=n.call(this,it(it({},t.defaultAdapter),e))||this;return r.isAnimating=!1,r}return Object.defineProperty(t,"cssClasses",{get:function(){return he},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Me},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-e},t.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},t.prototype.handleTransitionEnd=function(e){var r=e.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,t.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){e!==0&&this.animate(this.getIncrementScrollOperation(e))},t.prototype.incrementScrollImmediate=function(e){if(e!==0){var r=this.getIncrementScrollOperation(e);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL()){this.scrollToImplRTL(e);return}this.scrollToImpl(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},t.prototype.calculateCurrentTranslateX=function(){var e=this.adapter.getScrollContentStyleValue("transform");if(e==="none")return 0;var r=/\((.+?)\)/.exec(e);if(!r)return 0;var l=r[1],a=ge(l.split(","),6);a[0],a[1],a[2],a[3];var u=a[4];return a[5],parseFloat(u)},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t.prototype.computeCurrentScrollPositionRTL=function(){var e=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.scrollToImpl=function(e){var r=this.getScrollPosition(),l=this.clampScrollValue(e),a=l-r;this.animate({finalScrollPosition:l,scrollDelta:a})},t.prototype.scrollToImplRTL=function(e){var r=this.getRTLScroller().scrollToRTL(e);this.animate(r)},t.prototype.getIncrementScrollOperation=function(e){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(e);var r=this.getScrollPosition(),l=e+r,a=this.clampScrollValue(l),u=a-r;return{finalScrollPosition:a,scrollDelta:u}},t.prototype.animate=function(e){var r=this;e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(t.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},t.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var e=this.getAnimatingScrollPosition();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition=function(){var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,e):r-e},t.prototype.rtlScrollerFactory=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(e),new Ke(this.adapter);var l=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),u=Math.round(a.right-l.right);return this.adapter.setScrollAreaScrollLeft(e),u===r?new Ne(this.adapter):new We(this.adapter)},t.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},t}(kt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Jt;function Fe(n,t){if(t===void 0&&(t=!0),t&&typeof Jt<"u")return Jt;var e=n.createElement("div");e.classList.add(he.SCROLL_TEST),n.body.appendChild(e);var r=e.offsetHeight-e.clientHeight;return n.body.removeChild(e),t&&(Jt=r),r}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var y={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},X={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var dt=new Set;dt.add(y.ARROW_LEFT_KEY);dt.add(y.ARROW_RIGHT_KEY);dt.add(y.END_KEY);dt.add(y.HOME_KEY);dt.add(y.ENTER_KEY);dt.add(y.SPACE_KEY);var ht=new Map;ht.set(X.ARROW_LEFT_KEYCODE,y.ARROW_LEFT_KEY);ht.set(X.ARROW_RIGHT_KEYCODE,y.ARROW_RIGHT_KEY);ht.set(X.END_KEYCODE,y.END_KEY);ht.set(X.HOME_KEYCODE,y.HOME_KEY);ht.set(X.ENTER_KEYCODE,y.ENTER_KEY);ht.set(X.SPACE_KEYCODE,y.SPACE_KEY);var Ye=function(n){tt(t,n);function t(e){var r=n.call(this,it(it({},t.defaultAdapter),e))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(t,"strings",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return X},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation=e},t.prototype.activateTab=function(e){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(e)||e===r)){var l;r!==-1&&(this.adapter.deactivateTabAtIndex(r),l=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(e,l),this.scrollIntoView(e),this.adapter.notifyTabActivated(e)}},t.prototype.handleKeyDown=function(e){var r=this.getKeyFromEvent(e);if(r!==void 0)if(this.isActivationKey(r)||e.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var l=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(l),this.scrollIntoView(l)}else{var a=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(a);else{var l=this.determineTargetFromKey(a,r);this.adapter.focusTabAtIndex(l),this.scrollIntoView(l)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(this.indexIsInRange(e)){if(e===0){this.adapter.scrollTo(0);return}if(e===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(e);return}this.scrollIntoViewImpl(e)}},t.prototype.determineTargetFromKey=function(e,r){var l=this.isRTL(),a=this.adapter.getTabListLength()-1,u=r===y.END_KEY,o=r===y.ARROW_LEFT_KEY&&!l||r===y.ARROW_RIGHT_KEY&&l,s=r===y.ARROW_RIGHT_KEY&&!l||r===y.ARROW_LEFT_KEY&&l,h=e;return u?h=a:o?h-=1:s?h+=1:h=0,h<0?h=a:h>a&&(h=0),h},t.prototype.calculateScrollIncrement=function(e,r,l,a){var u=this.adapter.getTabDimensionsAtIndex(r),o=u.contentLeft-l-a,s=u.contentRight-l,h=s-X.EXTRA_SCROLL_AMOUNT,_=o+X.EXTRA_SCROLL_AMOUNT;return r<e?Math.min(h,0):Math.max(_,0)},t.prototype.calculateScrollIncrementRTL=function(e,r,l,a,u){var o=this.adapter.getTabDimensionsAtIndex(r),s=u-o.contentLeft-l,h=u-o.contentRight-l-a,_=h+X.EXTRA_SCROLL_AMOUNT,T=s-X.EXTRA_SCROLL_AMOUNT;return r>e?Math.max(_,0):Math.min(T,0)},t.prototype.findAdjacentTabIndexClosestToEdge=function(e,r,l,a){var u=r.rootLeft-l,o=r.rootRight-l-a,s=u+o,h=u<0||s<0,_=o>0||s>0;return h?e-1:_?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(e,r,l,a,u){var o=u-r.rootLeft-a-l,s=u-r.rootRight-l,h=o+s,_=o>0||h>0,T=s<0||h<0;return _?e+1:T?e-1:-1},t.prototype.getKeyFromEvent=function(e){return dt.has(e.key)?e.key:ht.get(e.keyCode)},t.prototype.isActivationKey=function(e){return e===y.SPACE_KEY||e===y.ENTER_KEY},t.prototype.indexIsInRange=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL=function(){return this.adapter.isRTL()},t.prototype.scrollIntoViewImpl=function(e){var r=this.adapter.getScrollPosition(),l=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),u=this.findAdjacentTabIndexClosestToEdge(e,a,r,l);if(this.indexIsInRange(u)){var o=this.calculateScrollIncrement(e,u,r,l);this.adapter.incrementScroll(o)}},t.prototype.scrollIntoViewImplRTL=function(e){var r=this.adapter.getScrollPosition(),l=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),u=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(e,a,r,l,u);if(this.indexIsInRange(o)){var s=this.calculateScrollIncrementRTL(e,o,r,l,u);this.adapter.incrementScroll(s)}},t}(kt);function je(n){let t,e,r,l,a,u,o,s,h,_,T,g,S,O;const E=n[23].default,p=gt(E,n,n[22],null);let f=[{class:l=N({[n[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:a=Object.entries(n[14]).map(ie).join(" ")},j(n[16],"scrollContent$")],c={};for(let m=0;m<f.length;m+=1)c=D(c,f[m]);let A=[{class:o=N({[n[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...n[12]})},{style:s=Object.entries(n[13]).map(se).join(" ")},j(n[16],"scrollArea$")],C={};for(let m=0;m<A.length;m+=1)C=D(C,A[m]);let L=[{class:_=N({[n[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":n[2]==="start","mdc-tab-scroller--align-end":n[2]==="end","mdc-tab-scroller--align-center":n[2]==="center",...n[11]})},$(n[16],["scrollArea$","scrollContent$"])],I={};for(let m=0;m<L.length;m+=1)I=D(I,L[m]);return{c(){t=rt("div"),e=rt("div"),r=rt("div"),p&&p.c(),this.h()},l(m){t=lt(m,"DIV",{class:!0});var R=at(t);e=lt(R,"DIV",{class:!0,style:!0});var k=at(e);r=lt(k,"DIV",{class:!0,style:!0});var K=at(r);p&&p.l(K),K.forEach(W),k.forEach(W),R.forEach(W),this.h()},h(){Y(r,c),Y(e,C),Y(t,I)},m(m,R){Q(m,t,R),Ot(t,e),Ot(e,r),p&&p.m(r,null),n[24](r),n[26](e),n[32](t),g=!0,S||(O=[Z(u=ft.call(null,r,n[5])),J(r,"transitionend",n[25]),Z(h=ft.call(null,e,n[3])),J(e,"wheel",n[27],{passive:!0}),J(e,"touchstart",n[28],{passive:!0}),J(e,"pointerdown",n[29]),J(e,"mousedown",n[30]),J(e,"keydown",n[31]),Z(T=ft.call(null,t,n[0])),Z(n[15].call(null,t))],S=!0)},p(m,R){p&&p.p&&(!g||R[0]&4194304)&&St(p,E,m,m[22],g?bt(E,m[22],R,null):pt(m[22]),null),Y(r,c=H(f,[(!g||R[0]&64&&l!==(l=N({[m[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:l},(!g||R[0]&16384&&a!==(a=Object.entries(m[14]).map(ie).join(" ")))&&{style:a},R[0]&65536&&j(m[16],"scrollContent$")])),u&&x(u.update)&&R[0]&32&&u.update.call(null,m[5]),Y(e,C=H(A,[(!g||R[0]&4112&&o!==(o=N({[m[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...m[12]})))&&{class:o},(!g||R[0]&8192&&s!==(s=Object.entries(m[13]).map(se).join(" ")))&&{style:s},R[0]&65536&&j(m[16],"scrollArea$")])),h&&x(h.update)&&R[0]&8&&h.update.call(null,m[3]),Y(t,I=H(L,[(!g||R[0]&2054&&_!==(_=N({[m[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":m[2]==="start","mdc-tab-scroller--align-end":m[2]==="end","mdc-tab-scroller--align-center":m[2]==="center",...m[11]})))&&{class:_},R[0]&65536&&$(m[16],["scrollArea$","scrollContent$"])])),T&&x(T.update)&&R[0]&1&&T.update.call(null,m[0])},i(m){g||(M(p,m),g=!0)},o(m){V(p,m),g=!1},d(m){m&&W(t),p&&p.d(m),n[24](null),n[26](null),n[32](null),S=!1,Qt(O)}}}const ie=([n,t])=>`${n}: ${t};`,se=([n,t])=>`${n}: ${t};`;function ke(n,t,e){const r=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let l=ot(t,r),{$$slots:a={},$$scope:u}=t;const{matches:o}=Se,s=jt(Wt());let{use:h=[]}=t,{class:_=""}=t,{align:T=void 0}=t,{scrollArea$use:g=[]}=t,{scrollArea$class:S=""}=t,{scrollContent$use:O=[]}=t,{scrollContent$class:E=""}=t,p,f,c,A,C={},L={},I={},m={};Kt(()=>(e(8,f=new Ve({eventTargetMatchesSelector:(b,d)=>o(b,d),addClass:R,removeClass:k,addScrollAreaClass:K,setScrollAreaStyleProperty:z,setScrollContentStyleProperty:et,getScrollContentStyleValue:q,setScrollAreaScrollLeft:b=>e(9,c.scrollLeft=b,c),getScrollAreaScrollLeft:()=>c.scrollLeft,getScrollContentOffsetWidth:()=>A.offsetWidth,getScrollAreaOffsetWidth:()=>c.offsetWidth,computeScrollAreaClientRect:()=>c.getBoundingClientRect(),computeScrollContentClientRect:()=>A.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>Fe(document)})),f.init(),()=>{f.destroy()}));function R(b){C[b]||e(11,C[b]=!0,C)}function k(b){(!(b in C)||C[b])&&e(11,C[b]=!1,C)}function K(b){L[b]||e(12,L[b]=!0,L)}function z(b,d){I[b]!=d&&(d===""||d==null?(delete I[b],e(13,I)):e(13,I[b]=d,I))}function et(b,d){m[b]!=d&&(d===""||d==null?(delete m[b],e(14,m)):e(14,m[b]=d,m))}function q(b){return b in m?m[b]:getComputedStyle(A).getPropertyValue(b)}function B(){return f.getScrollPosition()}function st(){return A.offsetWidth}function nt(b){f.incrementScroll(b)}function i(b){f.scrollTo(b)}function v(){return p}function P(b){G[b?"unshift":"push"](()=>{A=b,e(10,A)})}const ct=b=>f&&f.handleTransitionEnd(b);function Et(b){G[b?"unshift":"push"](()=>{c=b,e(9,c)})}const It=()=>f&&f.handleInteraction(),_t=()=>f&&f.handleInteraction(),U=()=>f&&f.handleInteraction(),Ht=()=>f&&f.handleInteraction(),Bt=()=>f&&f.handleInteraction();function Ut(b){G[b?"unshift":"push"](()=>{p=b,e(7,p)})}return n.$$set=b=>{t=D(D({},t),Nt(b)),e(16,l=ot(t,r)),"use"in b&&e(0,h=b.use),"class"in b&&e(1,_=b.class),"align"in b&&e(2,T=b.align),"scrollArea$use"in b&&e(3,g=b.scrollArea$use),"scrollArea$class"in b&&e(4,S=b.scrollArea$class),"scrollContent$use"in b&&e(5,O=b.scrollContent$use),"scrollContent$class"in b&&e(6,E=b.scrollContent$class),"$$scope"in b&&e(22,u=b.$$scope)},[h,_,T,g,S,O,E,p,f,c,A,C,L,I,m,s,l,B,st,nt,i,v,u,a,P,ct,Et,It,_t,U,Ht,Bt,Ut]}class He extends Vt{constructor(t){super(),Ft(this,t,ke,je,Mt,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function ce(n,t,e){const r=n.slice();return r[29]=t[e],r}const Be=n=>({tab:n[0]&4}),ue=n=>({tab:n[29]});function fe(n,t){let e,r;const l=t[21].default,a=gt(l,t,t[24],ue);return{key:n,first:null,c(){e=mt(),a&&a.c(),this.h()},l(u){e=mt(),a&&a.l(u),this.h()},h(){this.first=e},m(u,o){Q(u,e,o),a&&a.m(u,o),r=!0},p(u,o){t=u,a&&a.p&&(!r||o[0]&16777220)&&St(a,l,t,t[24],r?bt(l,t[24],o,Be):pt(t[24]),ue)},i(u){r||(M(a,u),r=!0)},o(u){V(a,u),r=!1},d(u){u&&W(e),a&&a.d(u)}}}function Ue(n){let t=[],e=new Map,r,l,a=te(n[2]);const u=o=>o[3](o[29]);for(let o=0;o<a.length;o+=1){let s=ce(n,a,o),h=u(s);e.set(h,t[o]=fe(h,s))}return{c(){for(let o=0;o<t.length;o+=1)t[o].c();r=mt()},l(o){for(let s=0;s<t.length;s+=1)t[s].l(o);r=mt()},m(o,s){for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(o,s);Q(o,r,s),l=!0},p(o,s){s[0]&16777228&&(a=te(o[2]),Dt(),t=pe(t,s,u,1,o,a,e,r.parentNode,be,fe,r,ce),Pt())},i(o){if(!l){for(let s=0;s<a.length;s+=1)M(t[s]);l=!0}},o(o){for(let s=0;s<t.length;s+=1)V(t[s]);l=!1},d(o){o&&W(r);for(let s=0;s<t.length;s+=1)t[s].d(o)}}}function Xe(n){let t,e,r,l,a,u,o;const s=[j(n[11],"tabScroller$")];let h={$$slots:{default:[Ue]},$$scope:{ctx:n}};for(let g=0;g<s.length;g+=1)h=D(h,s[g]);e=new He({props:h}),n[22](e);let _=[{class:r=N({[n[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},{tabindex:n[4]},$(n[11],["tabScroller$"])],T={};for(let g=0;g<_.length;g+=1)T=D(T,_[g]);return{c(){t=rt("div"),At(e.$$.fragment),this.h()},l(g){t=lt(g,"DIV",{class:!0,role:!0,tabindex:!0});var S=at(t);Yt(e.$$.fragment,S),S.forEach(W),this.h()},h(){Y(t,T)},m(g,S){Q(g,t,S),Ct(e,t,null),n[23](t),a=!0,u||(o=[Z(l=ft.call(null,t,n[0])),Z(n[8].call(null,t)),J(t,"SMUITab:mount",n[9]),J(t,"SMUITab:unmount",n[10]),J(t,"SMUITab:interacted",function(){x(n[5]&&n[5].handleTabInteraction.bind(n[5]))&&(n[5]&&n[5].handleTabInteraction.bind(n[5])).apply(this,arguments)}),J(t,"keydown",function(){x(n[5]&&n[5].handleKeyDown.bind(n[5]))&&(n[5]&&n[5].handleKeyDown.bind(n[5])).apply(this,arguments)})],u=!0)},p(g,S){n=g;const O=S[0]&2048?H(s,[ut(j(n[11],"tabScroller$"))]):{};S[0]&16777220&&(O.$$scope={dirty:S,ctx:n}),e.$set(O),Y(t,T=H(_,[(!a||S[0]&2&&r!==(r=N({[n[1]]:!0,"mdc-tab-bar":!0})))&&{class:r},{role:"tablist"},(!a||S[0]&16)&&{tabindex:n[4]},S[0]&2048&&$(n[11],["tabScroller$"])])),l&&x(l.update)&&S[0]&1&&l.update.call(null,n[0])},i(g){a||(M(e.$$.fragment,g),a=!0)},o(g){V(e.$$.fragment,g),a=!1},d(g){g&&W(t),n[22](null),Tt(e),n[23](null),u=!1,Qt(o)}}}function Ge(n,t,e){const r=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","tabindex","scrollIntoView","getElement"];let l=ot(t,r),{$$slots:a={},$$scope:u}=t;const o=jt(Wt());let{use:s=[]}=t,{class:h=""}=t,{tabs:_=[]}=t,{key:T=i=>i}=t,{focusOnActivate:g=!0}=t,{focusOnProgrammatic:S=!1}=t,{useAutomaticActivation:O=!0}=t,{active:E=void 0}=t,{tabindex:p=0}=t,f,c,A,C=_.indexOf(E),L={},I=new WeakMap,m=!1;yt("SMUI:tab:focusOnActivate",g),yt("SMUI:tab:initialActive",E),Kt(()=>(e(5,c=new Ye({scrollTo:i=>A.scrollTo(i),incrementScroll:i=>A.incrementScroll(i),getScrollPosition:()=>A.getScrollPosition(),getScrollContentWidth:()=>A.getScrollContentWidth(),getOffsetWidth:()=>B().offsetWidth,isRTL:()=>getComputedStyle(B()).getPropertyValue("direction")==="rtl",setActiveTab:i=>{e(12,E=_[i]),e(18,C=i),c.activateTab(i)},activateTabAtIndex:(i,v)=>{var P;return(P=K(_[i]))===null||P===void 0?void 0:P.activate(v,m)},deactivateTabAtIndex:i=>{var v;return(v=K(_[i]))===null||v===void 0?void 0:v.deactivate()},focusTabAtIndex:i=>{var v;return(v=K(_[i]))===null||v===void 0?void 0:v.focus()},getTabIndicatorClientRectAtIndex:i=>{var v,P;return(P=(v=K(_[i]))===null||v===void 0?void 0:v.computeIndicatorClientRect())!==null&&P!==void 0?P:new DOMRect},getTabDimensionsAtIndex:i=>{var v,P;return(P=(v=K(_[i]))===null||v===void 0?void 0:v.computeDimensions())!==null&&P!==void 0?P:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var i;for(let v=0;v<_.length;v++)if(!((i=K(_[v]))===null||i===void 0)&&i.active)return v;return-1},getFocusedTabIndex:()=>{const i=_.map(P=>{var ct;return(ct=K(P))===null||ct===void 0?void 0:ct.element}),v=document.activeElement;return i.indexOf(v)},getIndexOfTabById:i=>_.indexOf(i),getTabListLength:()=>_.length,notifyTabActivated:i=>Lt(B(),"SMUITabBar:activated",{index:i},void 0,!0)})),c.init(),()=>{c.destroy()}));function R(i){const v=i.detail;z(v.tabId,v)}function k(i){const v=i.detail;et(v.tabId)}function K(i){return i instanceof Object?I.get(i):L[i]}function z(i,v){i instanceof Object?(I.set(i,v),e(20,I)):(e(19,L[i]=v,L),e(19,L))}function et(i){i instanceof Object?(I.delete(i),e(20,I)):(delete L[i],e(19,L))}function q(i){c.scrollIntoView(i)}function B(){return f}function st(i){G[i?"unshift":"push"](()=>{A=i,e(7,A)})}function nt(i){G[i?"unshift":"push"](()=>{f=i,e(6,f)})}return n.$$set=i=>{t=D(D({},t),Nt(i)),e(11,l=ot(t,r)),"use"in i&&e(0,s=i.use),"class"in i&&e(1,h=i.class),"tabs"in i&&e(2,_=i.tabs),"key"in i&&e(3,T=i.key),"focusOnActivate"in i&&e(13,g=i.focusOnActivate),"focusOnProgrammatic"in i&&e(14,S=i.focusOnProgrammatic),"useAutomaticActivation"in i&&e(15,O=i.useAutomaticActivation),"active"in i&&e(12,E=i.active),"tabindex"in i&&e(4,p=i.tabindex),"$$scope"in i&&e(24,u=i.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&282660&&E!==_[C]&&(e(18,C=_.indexOf(E)),c&&(m=!S,c.activateTab(C),m=!1)),n.$$.dirty[0]&1835012&&_.length){const i=_[0]instanceof Object?I.get(_[0]):L[_[0]];i&&i.forceAccessible(C===-1)}n.$$.dirty[0]&32800&&c&&c.setUseAutomaticActivation(O)},[s,h,_,T,p,c,f,A,o,R,k,l,E,g,S,O,q,B,C,L,I,a,st,nt,u]}class nn extends Vt{constructor(t){super(),Ft(this,t,Ge,Xe,Mt,{use:0,class:1,tabs:2,key:3,focusOnActivate:13,focusOnProgrammatic:14,useAutomaticActivation:15,active:12,tabindex:4,scrollIntoView:16,getElement:17},null,[-1,-1])}get scrollIntoView(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}export{nn as T,en as a};
