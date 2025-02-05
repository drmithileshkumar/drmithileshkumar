import{s as W,e as C,q as f,a as N,a4 as B,c as y,f as d,g as $,b as F,S as G,B as g,h,i as O,k as w,R as P,O as J,a2 as R,a3 as U}from"../chunks/scheduler.HFrwntH8.js";import{S as Q,i as V,c as q,b as S,m as j,t as I,a as M,d as T}from"../chunks/index.Bj97moK3.js";import{g as X,a as Y}from"../chunks/github-dark.DxmPHd5a.js";import{W as Z}from"../chunks/WebPractice.B_STgZqw.js";import{p as tt}from"../chunks/stores.DScTxBQg.js";import"../chunks/ActionIcons.DHulHrNV.js";import"../chunks/Subheader.BjdGPQjV.js";import"../chunks/entry.DYPWDZf0.js";import{n as A,c as D,d as K}from"../chunks/stores.DhuAwEDH.js";/* empty css                                                      */import{c as et,a as nt}from"../chunks/content.C_zm4NZH.js";import{P as rt}from"../chunks/Pathlist.AfircbiT.js";import{C as ot}from"../chunks/CourseNavigation.Bu8hq7F2.js";const Ct=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function at(a){let r,n;return{c(){r=new R(!1),n=f(),this.h()},l(t){r=U(t,!1),n=f(),this.h()},h(){r.a=n},m(t,s){r.m(X,t,s),O(t,n,s)},d(t){t&&(d(n),r.d())}}}function it(a){let r,n;return{c(){r=new R(!1),n=f(),this.h()},l(t){r=U(t,!1),n=f(),this.h()},h(){r.a=n},m(t,s){r.m(Y,t,s),O(t,n,s)},d(t){t&&(d(n),r.d())}}}function st(a){let r,n,t,s,o,c,v,m,_,i,E="Calculator",z,b,k;function L(e,l){return e[0]?it:at}let x=L(a),p=x(a);return c=new rt({props:{origin:a[1].url.origin,pathname:a[1].url.pathname}}),m=new ot({props:{contentNav:et,currentUrl:a[1].url.pathname}}),b=new Z({props:{htmlContent:a[2],cssContent:a[3],jsContent:a[4]}}),{c(){r=C("link"),n=C("meta"),p.c(),t=f(),s=N(),o=C("article"),q(c.$$.fragment),v=N(),q(m.$$.fragment),_=N(),i=C("h4"),i.textContent=E,z=N(),q(b.$$.fragment),this.h()},l(e){const l=B("svelte-v1hggi",document.head);r=y(l,"LINK",{rel:!0,href:!0}),n=y(l,"META",{name:!0,content:!0}),p.l(l),t=f(),l.forEach(d),s=$(e),o=y(e,"ARTICLE",{class:!0});var u=F(o);S(c.$$.fragment,u),v=$(u),S(m.$$.fragment,u),_=$(u),i=y(u,"H4",{class:!0,"data-svelte-h":!0}),G(i)!=="svelte-izhzzq"&&(i.textContent=E),z=$(u),S(b.$$.fragment,u),u.forEach(d),this.h()},h(){document.title="Internet Technologies",g(r,"rel","canonical"),g(r,"href","https://drmithileshkumar.com/courses/internet/javascript/basics/calculator"),g(n,"name","description"),g(n,"content","Courses Taught by Dr Mithilesh Kumar"),g(i,"class","svelte-1sv2bd8"),g(o,"class","svelte-1sv2bd8")},m(e,l){h(document.head,r),h(document.head,n),p.m(document.head,null),h(document.head,t),O(e,s,l),O(e,o,l),j(c,o,null),h(o,v),j(m,o,null),h(o,_),h(o,i),h(o,z),j(b,o,null),k=!0},p(e,[l]){x!==(x=L(e))&&(p.d(1),p=x(e),p&&(p.c(),p.m(t.parentNode,t)));const u={};l&2&&(u.origin=e[1].url.origin),l&2&&(u.pathname=e[1].url.pathname),c.$set(u);const H={};l&2&&(H.currentUrl=e[1].url.pathname),m.$set(H)},i(e){k||(I(c.$$.fragment,e),I(m.$$.fragment,e),I(b.$$.fragment,e),k=!0)},o(e){M(c.$$.fragment,e),M(m.$$.fragment,e),M(b.$$.fragment,e),k=!1},d(e){e&&(d(s),d(o)),d(r),d(n),p.d(e),d(t),T(c),T(m),T(b)}}}function lt(a,r,n){let t,s,o,c;return w(a,K,i=>n(0,t=i)),w(a,D,i=>n(9,s=i)),w(a,A,i=>n(10,o=i)),w(a,tt,i=>n(1,c=i)),P(A,o=nt,o),P(D,s="Calculator",s),P(K,t=!1,t),J(()=>{}),[t,c,`<div id="container">
    <div id="io">
        <div id="expression"></div>
        <div id="output"></div>
    </div>
    <div id="input">
        <div id="advanced"></div>
        <div id="basic">
            <button class="operation C" onclick="setOperator('C')">C</button>
            <button class="operation pm" onclick="setOperator('pm')">&plusmn;</button>
            <button class="operation per" onclick="setOperator('%')">&percnt;</button>
            <button class="operation div" onclick="setOperator('/')">&divide;</button>

            <button class="seven" onclick="setNumber(7)">7</button>
            <button class="eight" onclick="setNumber(8)">8</button>
            <button class="nine" onclick="setNumber(9)">9</button>
            <button class="operation mul" onclick="setOperator('*')">&times;</button>

            <button class="four" onclick="setNumber(4)">4</button>
            <button class="five" onclick="setNumber(5)">5</button>
            <button class="six" onclick="setNumber(6)">6</button>
            <button class="operation min" onclick="setOperator('-')">&minus;</button>

            <button class="one" onclick="setNumber(1)">1</button>
            <button class="two" onclick="setNumber(2)">2</button>
            <button class="three" onclick="setNumber(3)">3</button>
            <button class="operation plus" onclick="setOperator('+')">+</button>

            <button class="zero" onclick="setNumber(0)">0</button>
            <button class="dot" onclick="setNumber('.')">.</button>
            <button class="operation eq" onclick="setOperator('=')">&equals;</button>
        </div>
    </div>
</div>`,`* {
    box-sizing: border-box;
}
#container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 300px;
    align-items: center;
    border: 1px solid;
    padding: 0.2em;
}
#io {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0.2em;
    border: 1px solid;
    min-height: 1.5em;
    width: 100%;
}
#expression {
    color: gray;
    display: flex;
    justify-content: end;
    padding: 0.5em 0.2em;
    height: 1.5em;
}
#output {
    display: flex;
    justify-content: end;
    padding: 0.5em 0.2em;
    height: 1.5em;
}
#input {
    width: 100%;
    display: grid;
    padding: 0.2em;
    border: 1px solid;
}
#basic {
    display: grid;
    gap: 0.2em;
    grid-template-areas:
        'C pm per div'
        'seven eight nine mul'
        'four five six min'
        'one two three plus'
        'zero zero dot eq';
}
.C {
    grid-area: C;
}
.pm {
    grid-area: pm;
}
.per {
    grid-area: per;
}
.div {
    grid-area: div;
}
.mul {
    grid-area: mul;
}
.min {
    grid-area: min;
}
.plus {
    grid-area: plus;
}
.eq {
    grid-area: eq;
}
.zero {
    grid-area: zero;
}
.one {
    grid-area: one;
}
.two {
    grid-area: two;
}
.three {
    grid-area: three;
}
.four {
    grid-area: four;
}
.five {
    grid-area: five;
}
.six {
    grid-area: six;
}
.seven {
    grid-area: seven;
}
.eight {
    grid-area: eight;
}
.nine {
    grid-area: nine;
}

button {
    font-size: 1.2em;
}
.operation {
    background-color: rgb(245, 162, 7);
    border-color: rgb(245, 162, 7);
}`,`let expression = document.querySelector("#expression");
let output = document.querySelector("#output");
expression.textContent = '';
let currentExpression = '';
let result = 0;
let operator = '';
let number = 0;
let lastInput = 'Number';
let currentOperation = '';
let currentNumber = '';
function setOperator(op) {
    if(expression.textContent == '') return;
    currentOperation = op;
    currentNumber = '';
    if(lastInput == 'op') {
        //remove the last operation to new operation in expression
        expression.textContent = expression.textContent.slice(0, -1);
    }
    lastInput = 'op';
    switch(op) {
        case 'C': {
            expression.textContent = '';
            output.textContent = '';
            break;
        } 
        case 'pm': {
            break;
        }
        case '=': {
            result = eval(expression.textContent);
            output.textContent = result;
            lastInput = '';
            break;
        }
        default: {
            expression.textContent += op;
            break;
        }
    }
}
function setNumber(num) {
    lastInput = "Number";
    if(!(num == '0' && currentNumber == '0')) {
        currentNumber += num;
        expression.textContent += num;
    }
}
`]}class Nt extends Q{constructor(r){super(),V(this,r,lt,st,W,{})}}export{Nt as component,Ct as universal};
