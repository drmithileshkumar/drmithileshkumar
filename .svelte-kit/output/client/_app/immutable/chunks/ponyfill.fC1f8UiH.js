var y=function(r,n){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])},y(r,n)};function v(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");y(r,n);function e(){this.constructor=r}r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}var p=function(){return p=Object.assign||function(n){for(var e,o=1,i=arguments.length;o<i;o++){e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},p.apply(this,arguments)};function _(r,n,e,o){function i(t){return t instanceof e?t:new e(function(u){u(t)})}return new(e||(e=Promise))(function(t,u){function c(l){try{a(o.next(l))}catch(f){u(f)}}function s(l){try{a(o.throw(l))}catch(f){u(f)}}function a(l){l.done?t(l.value):i(l.value).then(c,s)}a((o=o.apply(r,n||[])).next())})}function m(r,n){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},o,i,t,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(l){return s([a,l])}}function s(a){if(o)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(e=0)),e;)try{if(o=1,i&&(t=a[0]&2?i.return:a[0]?i.throw||((t=i.return)&&t.call(i),0):i.next)&&!(t=t.call(i,a[1])).done)return t;switch(i=0,t&&(a=[a[0]&2,t.value]),a[0]){case 0:case 1:t=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,i=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!t||a[1]>t[0]&&a[1]<t[3])){e.label=a[1];break}if(a[0]===6&&e.label<t[1]){e.label=t[1],t=a;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(a);break}t[2]&&e.ops.pop(),e.trys.pop();continue}a=n.call(r,e)}catch(l){a=[6,l],i=0}finally{o=t=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function g(r){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&r[n],o=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&o>=r.length&&(r=void 0),{value:r&&r[o++],done:!r}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(r,n){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var o=e.call(r),i,t=[],u;try{for(;(n===void 0||n-- >0)&&!(i=o.next()).done;)t.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(u)throw u.error}}return t}function S(r,n,e){if(e||arguments.length===2)for(var o=0,i=n.length,t;o<i;o++)(t||!(o in n))&&(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return r.concat(t||Array.prototype.slice.call(n))}/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var O=function(){function r(n){n===void 0&&(n={}),this.adapter=n}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */function h(r,n){if(r.closest)return r.closest(n);for(var e=r;e;){if(d(e,n))return e;e=e.parentElement}return null}function d(r,n){var e=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return e.call(r,n)}function b(r){var n=r;if(n.offsetParent!==null)return n.scrollWidth;var e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);var o=e.scrollWidth;return document.documentElement.removeChild(e),o}const x=Object.freeze(Object.defineProperty({__proto__:null,closest:h,estimateScrollWidth:b,matches:d},Symbol.toStringTag,{value:"Module"}));export{O as M,v as _,p as a,g as b,w as c,S as d,_ as e,m as f,d as m,x as p};
