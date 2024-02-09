var d=function(e,n){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])},d(e,n)};function v(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");d(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var y=function(){return y=Object.assign||function(n){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)};function g(e,n,t,o){function a(r){return r instanceof t?r:new t(function(u){u(r)})}return new(t||(t=Promise))(function(r,u){function l(c){try{i(o.next(c))}catch(f){u(f)}}function s(c){try{i(o.throw(c))}catch(f){u(f)}}function i(c){c.done?r(c.value):a(c.value).then(l,s)}i((o=o.apply(e,n||[])).next())})}function _(e,n){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,a,r,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(i){return function(c){return s([i,c])}}function s(i){if(o)throw new TypeError("Generator is already executing.");for(;u&&(u=0,i[0]&&(t=0)),t;)try{if(o=1,a&&(r=i[0]&2?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[i[0]&2,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,a=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!r||i[1]>r[0]&&i[1]<r[3])){t.label=i[1];break}if(i[0]===6&&t.label<r[1]){t.label=r[1],r=i;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(i);break}r[2]&&t.ops.pop(),t.trys.pop();continue}i=n.call(e,t)}catch(c){i=[6,c],a=0}finally{o=r=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function w(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),a,r=[],u;try{for(;(n===void 0||n-- >0)&&!(a=o.next()).done;)r.push(a.value)}catch(l){u={error:l}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return r}function E(e,n,t){if(t||arguments.length===2)for(var o=0,a=n.length,r;o<a;o++)(r||!(o in n))&&(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}/**
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
 */var O=function(){function e(n){n===void 0&&(n={}),this.adapter=n}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
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
 */function h(e,n){if(e.closest)return e.closest(n);for(var t=e;t;){if(p(t,n))return t;t=t.parentElement}return null}function p(e,n){var t=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return t.call(e,n)}function b(e){var n=e;if(n.offsetParent!==null)return n.scrollWidth;var t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var o=t.scrollWidth;return document.documentElement.removeChild(t),o}const S=Object.freeze(Object.defineProperty({__proto__:null,closest:h,estimateScrollWidth:b,matches:p},Symbol.toStringTag,{value:"Module"}));function j(e,n,t,o={bubbles:!0},a=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!e)throw new Error("Tried to dipatch event without element.");const r=new CustomEvent(n,Object.assign(Object.assign({},o),{detail:t}));if(e==null||e.dispatchEvent(r),a&&n.startsWith("SMUI")){const u=new CustomEvent(n.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},o),{detail:t}));e==null||e.dispatchEvent(u),u.defaultPrevented&&r.preventDefault()}return r}export{O as M,v as _,y as a,w as b,m as c,E as d,j as e,g as f,_ as g,S as p};
