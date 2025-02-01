import{s as st,l as at,x as P,e as it,c as nt,b as lt,f as N,J as V,i as pt,N as M,F as U,u as ct,m as ut,o as dt,G as ft,H as ht,r as j,v as St,O as Tt,y as gt,z as mt}from"./scheduler.HFrwntH8.js";import{S as _t,i as At,t as Ct,a as yt}from"./index.Bj97moK3.js";import{g as bt}from"./globals.D0QH3NT1.js";import{c as Y,u as Et,g as Bt,f as Ot}from"./useActions.HCeguDvV.js";import{r as It}from"./index.ChKAqM74.js";import{d as Dt}from"./dispatch.D38adG8O.js";import{_ as R,a as X,M as Lt}from"./ponyfill.BpwGTcRg.js";/**
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
 */var g={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},H={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Ht={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var w=function(r){R(t,r);function t(e){return r.call(this,X(X({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Ht},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Lt);/**
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
 */var L=0,v=function(r){R(t,r);function t(e){var a=r.call(this,e)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=L,a.resizeDebounceId=L,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return t.prototype.destroy=function(){r.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),a=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=L,e.throttledResizeHandler()},H.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=L},H.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,c=this.currentAppBarOffsetTop>e,p=a&&c;if(p)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==c)return this.isDockedShowing=c,!0}else return this.wasDocked=!0,!0;return p},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-H.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(w);/**
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
 */var Rt=function(r){R(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(v);/**
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
 */var Mt=function(r){R(t,r);function t(e){var a=r.call(this,e)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){r.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(g.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(g.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(g.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(g.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(w);const{window:G}=bt;function Pt(r){let t,e,a,c,p,m,y;const _=r[22].default,l=at(_,r,r[21],null);let A=[{class:e=Y({[r[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":r[4]==="short","mdc-top-app-bar--short-collapsed":r[0],"mdc-top-app-bar--fixed":r[4]==="fixed","smui-top-app-bar--static":r[4]==="static","smui-top-app-bar--color-secondary":r[5]==="secondary","mdc-top-app-bar--prominent":r[6],"mdc-top-app-bar--dense":r[7],...r[11]})},{style:a=Object.entries(r[12]).map(W).concat([r[3]]).join(" ")},r[15]],f={};for(let s=0;s<A.length;s+=1)f=P(f,A[s]);return{c(){t=it("header"),l&&l.c(),this.h()},l(s){t=nt(s,"HEADER",{class:!0,style:!0});var i=lt(t);l&&l.l(i),i.forEach(N),this.h()},h(){V(t,f)},m(s,i){pt(s,t,i),l&&l.m(t,null),r[25](t),p=!0,m||(y=[M(G,"resize",r[23]),M(G,"scroll",r[24]),U(c=Et.call(null,t,r[1])),U(r[13].call(null,t)),M(t,"SMUITopAppBarIconButton:nav",r[26])],m=!0)},p(s,i){l&&l.p&&(!p||i[0]&2097152)&&ct(l,_,s,s[21],p?dt(_,s[21],i,null):ut(s[21]),null),V(t,f=Bt(A,[(!p||i[0]&2293&&e!==(e=Y({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7],...s[11]})))&&{class:e},(!p||i[0]&4104&&a!==(a=Object.entries(s[12]).map(W).concat([s[3]]).join(" ")))&&{style:a},i[0]&32768&&s[15]])),c&&ft(c.update)&&i[0]&2&&c.update.call(null,s[1])},i(s){p||(Ct(l,s),p=!0)},o(s){yt(l,s),p=!1},d(s){s&&N(t),l&&l.d(s),r[25](null),m=!1,ht(y)}}}const W=([r,t])=>`${r}: ${t};`;function vt(r,t,e){const a=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let c=j(t,a),{$$slots:p={},$$scope:m}=t;const y=Ot(St());let _=()=>{};function l(o){return o===_}let{use:A=[]}=t,{class:f=""}=t,{style:s=""}=t,{variant:i="standard"}=t,{color:z="primary"}=t,{collapsed:h=_}=t;const Z=!l(h)&&!!h;l(h)&&(h=!1);let{prominent:b=!1}=t,{dense:E=!1}=t,{scrollTarget:d=void 0}=t,S,n,u={},T={},B,q=It({variant:i,prominent:b,dense:E},o=>{e(18,B=o)}),C,O=i;Tt(()=>(e(9,n=F()),n.init(),()=>{n.destroy()}));function F(){const o={static:w,short:Mt,fixed:Rt,standard:v}[i]||v;return new o({hasClass:J,addClass:K,removeClass:Q,setStyle:x,getTopAppBarHeight:()=>S.clientHeight,notifyNavigationIconClicked:()=>Dt(S,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>d==null?window.pageYOffset:d.scrollTop,getTotalActionItems:()=>S.querySelectorAll(".mdc-top-app-bar__action-item").length})}function J(o){return o in u?u[o]:k().classList.contains(o)}function K(o){u[o]||e(11,u[o]=!0,u)}function Q(o){(!(o in u)||u[o])&&e(11,u[o]=!1,u)}function x(o,D){T[o]!=D&&(D===""||D==null?(delete T[o],e(12,T),e(20,O),e(4,i),e(9,n)):e(12,T[o]=D,T))}function I(){n&&(n.handleTargetScroll(),i==="short"&&e(0,h="isCollapsed"in n&&n.isCollapsed))}function $(){return q}function k(){return S}const tt=()=>i!=="short"&&i!=="fixed"&&n&&n.handleWindowResize(),et=()=>d==null&&I();function rt(o){mt[o?"unshift":"push"](()=>{S=o,e(10,S)})}const ot=()=>n&&n.handleNavigationClick();return r.$$set=o=>{t=P(P({},t),gt(o)),e(15,c=j(t,a)),"use"in o&&e(1,A=o.use),"class"in o&&e(2,f=o.class),"style"in o&&e(3,s=o.style),"variant"in o&&e(4,i=o.variant),"color"in o&&e(5,z=o.color),"collapsed"in o&&e(0,h=o.collapsed),"prominent"in o&&e(6,b=o.prominent),"dense"in o&&e(7,E=o.dense),"scrollTarget"in o&&e(8,d=o.scrollTarget),"$$scope"in o&&e(21,m=o.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&262352&&B&&B({variant:i,prominent:b,dense:E}),r.$$.dirty[0]&1049104&&O!==i&&n&&(e(20,O=i),n.destroy(),e(11,u={}),e(12,T={}),e(9,n=F()),n.init()),r.$$.dirty[0]&528&&n&&i==="short"&&"setAlwaysCollapsed"in n&&n.setAlwaysCollapsed(Z),r.$$.dirty[0]&524544&&C!==d&&(C&&C.removeEventListener("scroll",I),d&&d.addEventListener("scroll",I),e(19,C=d))},[h,A,f,s,i,z,b,E,d,n,S,u,T,y,I,c,$,k,B,C,O,m,p,tt,et,rt,ot]}class jt extends _t{constructor(t){super(),At(this,t,vt,Pt,st,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}export{jt as T};
