import{s as Z,l as k,x as M,e as S,a as w,c as L,b as H,g as x,f as R,C as F,i as $,h as O,D as A,J as y,u as D,m as U,o as W,E as P,F as ee,r as j,v as te,A as ne,K as le,y as ae,z as B}from"./scheduler.DDynXUZ0.js";import{S as ie,i as se,t as G,a as q}from"./index.DnYThXIE.js";import{c as T,u as z,g as J,f as re}from"./SmuiElement.niKK9SEg.js";import{p as K,e as N}from"./prefixFilter.OhiPYEKz.js";import{_ as ue,a as V,M as oe}from"./ponyfill.BpwGTcRg.js";/**
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
 */var fe={ROOT:"mdc-form-field"},ce={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var de=function(n){ue(t,n);function t(a){var s=n.call(this,V(V({},t.defaultAdapter),a))||this;return s.click=function(){s.handleClick()},s}return Object.defineProperty(t,"cssClasses",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var a=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){a.adapter.deactivateInputRipple()})},t}(oe);const me=n=>({}),Q=n=>({});function _e(n){let t,a,s,_,b,p,o,h,v;const I=n[14].default,r=k(I,n,n[13],null),g=n[14].label,u=k(g,n,n[13],Q);let d=[{for:n[4]},K(n[11],"label$")],m={};for(let e=0;e<d.length;e+=1)m=M(m,d[e]);let c=[{class:b=T({[n[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":n[2]==="end","mdc-form-field--nowrap":n[3]})},N(n[11],["label$"])],f={};for(let e=0;e<c.length;e+=1)f=M(f,c[e]);return{c(){t=S("div"),r&&r.c(),a=w(),s=S("label"),u&&u.c(),this.h()},l(e){t=L(e,"DIV",{class:!0});var i=H(t);r&&r.l(i),a=x(i),s=L(i,"LABEL",{for:!0});var E=H(s);u&&u.l(E),E.forEach(R),i.forEach(R),this.h()},h(){F(s,m),F(t,f)},m(e,i){$(e,t,i),r&&r.m(t,null),O(t,a),O(t,s),u&&u.m(s,null),n[15](s),n[16](t),o=!0,h||(v=[A(_=z.call(null,s,n[5])),A(p=z.call(null,t,n[0])),A(n[9].call(null,t)),y(t,"SMUIGenericInput:mount",n[10]),y(t,"SMUIGenericInput:unmount",n[17])],h=!0)},p(e,[i]){r&&r.p&&(!o||i&8192)&&D(r,I,e,e[13],o?W(I,e[13],i,null):U(e[13]),null),u&&u.p&&(!o||i&8192)&&D(u,g,e,e[13],o?W(g,e[13],i,me):U(e[13]),Q),F(s,m=J(d,[(!o||i&16)&&{for:e[4]},i&2048&&K(e[11],"label$")])),_&&P(_.update)&&i&32&&_.update.call(null,e[5]),F(t,f=J(c,[(!o||i&14&&b!==(b=T({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:b},i&2048&&N(e[11],["label$"])])),p&&P(p.update)&&i&1&&p.update.call(null,e[0])},i(e){o||(G(r,e),G(u,e),o=!0)},o(e){q(r,e),q(u,e),o=!1},d(e){e&&R(t),r&&r.d(e),u&&u.d(e),n[15](null),n[16](null),h=!1,ee(v)}}}let pe=0;function ge(n,t,a){const s=["use","class","align","noWrap","inputId","label$use","getElement"];let _=j(t,s),{$$slots:b={},$$scope:p}=t;const o=re(te());let{use:h=[]}=t,{class:v=""}=t,{align:I="start"}=t,{noWrap:r=!1}=t,{inputId:g="SMUI-form-field-"+pe++}=t,{label$use:u=[]}=t,d,m,c,f;ne("SMUI:generic:input:props",{id:g}),le(()=>(m=new de({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(l,C)=>{c.removeEventListener(l,C)},registerInteractionHandler:(l,C)=>{c.addEventListener(l,C)}}),m.init(),()=>{m.destroy()}));function e(l){a(8,f=l.detail)}function i(){return d}function E(l){B[l?"unshift":"push"](()=>{c=l,a(7,c)})}function X(l){B[l?"unshift":"push"](()=>{d=l,a(6,d)})}const Y=()=>a(8,f=void 0);return n.$$set=l=>{t=M(M({},t),ae(l)),a(11,_=j(t,s)),"use"in l&&a(0,h=l.use),"class"in l&&a(1,v=l.class),"align"in l&&a(2,I=l.align),"noWrap"in l&&a(3,r=l.noWrap),"inputId"in l&&a(4,g=l.inputId),"label$use"in l&&a(5,u=l.label$use),"$$scope"in l&&a(13,p=l.$$scope)},[h,v,I,r,g,u,d,c,f,o,e,_,i,p,b,E,X,Y]}class Fe extends ie{constructor(t){super(),se(this,t,ge,_e,Z,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:12})}get getElement(){return this.$$.ctx[12]}}export{Fe as F};
