import{s as Z,c as A,w as M,e as S,b as w,d as H,f as L,j as x,i as R,x as F,k as $,l as O,y as k,O as y,u as U,g as W,a as j,z as B,A as ee,B as D,C as te,H as ne,a0 as le,E as ae,q as P}from"./scheduler.cQRDEcOs.js";import{S as ie,i as se,t as q,a as G}from"./index.3X1eH1mp.js";import{g as T}from"./spread.rEx3vLA9.js";import{c as z,u as N,f as re}from"./classAdderBuilder.ijDhO6Jw.js";import{p as V,e as J}from"./prefixFilter.eMlqEcSK.js";import{_ as ue,a as K,M as oe}from"./dispatch.YktQzwJT.js";/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var fe={ROOT:"mdc-form-field"},de={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var ce=function(n){ue(t,n);function t(a){var s=n.call(this,K(K({},t.defaultAdapter),a))||this;return s.click=function(){s.handleClick()},s}return Object.defineProperty(t,"cssClasses",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return de},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var a=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){a.adapter.deactivateInputRipple()})},t}(oe);const me=n=>({}),Q=n=>({});function _e(n){let t,a,s,_,b,p,o,h,v;const I=n[14].default,r=A(I,n,n[13],null),g=n[14].label,u=A(g,n,n[13],Q);let c=[{for:n[4]},V(n[11],"label$")],m={};for(let e=0;e<c.length;e+=1)m=M(m,c[e]);let d=[{class:b=z({[n[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":n[2]==="end","mdc-form-field--nowrap":n[3]})},J(n[11],["label$"])],f={};for(let e=0;e<d.length;e+=1)f=M(f,d[e]);return{c(){t=S("div"),r&&r.c(),a=w(),s=S("label"),u&&u.c(),this.h()},l(e){t=H(e,"DIV",{class:!0});var i=L(t);r&&r.l(i),a=x(i),s=H(i,"LABEL",{for:!0});var E=L(s);u&&u.l(E),E.forEach(R),i.forEach(R),this.h()},h(){F(s,m),F(t,f)},m(e,i){$(e,t,i),r&&r.m(t,null),O(t,a),O(t,s),u&&u.m(s,null),n[15](s),n[16](t),o=!0,h||(v=[k(_=N.call(null,s,n[5])),k(p=N.call(null,t,n[0])),k(n[9].call(null,t)),y(t,"SMUIGenericInput:mount",n[10]),y(t,"SMUIGenericInput:unmount",n[17])],h=!0)},p(e,[i]){r&&r.p&&(!o||i&8192)&&U(r,I,e,e[13],o?j(I,e[13],i,null):W(e[13]),null),u&&u.p&&(!o||i&8192)&&U(u,g,e,e[13],o?j(g,e[13],i,me):W(e[13]),Q),F(s,m=T(c,[(!o||i&16)&&{for:e[4]},i&2048&&V(e[11],"label$")])),_&&B(_.update)&&i&32&&_.update.call(null,e[5]),F(t,f=T(d,[(!o||i&14&&b!==(b=z({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:b},i&2048&&J(e[11],["label$"])])),p&&B(p.update)&&i&1&&p.update.call(null,e[0])},i(e){o||(q(r,e),q(u,e),o=!0)},o(e){G(r,e),G(u,e),o=!1},d(e){e&&R(t),r&&r.d(e),u&&u.d(e),n[15](null),n[16](null),h=!1,ee(v)}}}let pe=0;function ge(n,t,a){const s=["use","class","align","noWrap","inputId","label$use","getElement"];let _=D(t,s),{$$slots:b={},$$scope:p}=t;const o=re(te());let{use:h=[]}=t,{class:v=""}=t,{align:I="start"}=t,{noWrap:r=!1}=t,{inputId:g="SMUI-form-field-"+pe++}=t,{label$use:u=[]}=t,c,m,d,f;ne("SMUI:generic:input:props",{id:g}),le(()=>(m=new ce({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(l,C)=>{d.removeEventListener(l,C)},registerInteractionHandler:(l,C)=>{d.addEventListener(l,C)}}),m.init(),()=>{m.destroy()}));function e(l){a(8,f=l.detail)}function i(){return c}function E(l){P[l?"unshift":"push"](()=>{d=l,a(7,d)})}function X(l){P[l?"unshift":"push"](()=>{c=l,a(6,c)})}const Y=()=>a(8,f=void 0);return n.$$set=l=>{t=M(M({},t),ae(l)),a(11,_=D(t,s)),"use"in l&&a(0,h=l.use),"class"in l&&a(1,v=l.class),"align"in l&&a(2,I=l.align),"noWrap"in l&&a(3,r=l.noWrap),"inputId"in l&&a(4,g=l.inputId),"label$use"in l&&a(5,u=l.label$use),"$$scope"in l&&a(13,p=l.$$scope)},[h,v,I,r,g,u,c,d,f,o,e,_,i,p,b,E,X,Y]}class Me extends ie{constructor(t){super(),se(this,t,ge,_e,Z,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:12})}get getElement(){return this.$$.ctx[12]}}export{Me as F};
