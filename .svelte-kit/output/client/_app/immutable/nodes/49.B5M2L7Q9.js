import{s as G,e as C,G as f,b as N,$ as R,d as $,i as d,j as y,f as Z,p as B,I as g,l as h,k as O,o as w,v as P,a0 as F,Z as U,_ as W}from"../chunks/scheduler.B1atsjBc.js";import{S as J,i as Q,c as j,d as q,m as I,t as S,a as M,e as T}from"../chunks/index.DlO191gB.js";import{g as V,a as X}from"../chunks/github-dark.DxmPHd5a.js";import{W as Y}from"../chunks/WebPractice.E3BS0RMp.js";import{p as tt}from"../chunks/stores.CYuebbCm.js";import"../chunks/ActionIcons.BB_MIeF4.js";import"../chunks/Subheader.CFqZDM0F.js";import"../chunks/entry.wIueeHHH.js";import{n as A,c as D,d as K}from"../chunks/stores.moVKe_bz.js";/* empty css                                                      */import{c as et,a as nt}from"../chunks/content.C_zm4NZH.js";import{P as rt}from"../chunks/Pathlist.C2MBNysE.js";import{C as ot}from"../chunks/CourseNavigation.DTsSBvdr.js";const Ct=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function at(a){let r,n;return{c(){r=new U(!1),n=f(),this.h()},l(t){r=W(t,!1),n=f(),this.h()},h(){r.a=n},m(t,s){r.m(V,t,s),O(t,n,s)},d(t){t&&(d(n),r.d())}}}function it(a){let r,n;return{c(){r=new U(!1),n=f(),this.h()},l(t){r=W(t,!1),n=f(),this.h()},h(){r.a=n},m(t,s){r.m(X,t,s),O(t,n,s)},d(t){t&&(d(n),r.d())}}}function st(a){let r,n,t,s,o,c,v,m,_,i,E="Calculator",z,b,k;function L(e,l){return e[0]?it:at}let x=L(a),p=x(a);return c=new rt({props:{origin:a[1].url.origin,pathname:a[1].url.pathname}}),m=new ot({props:{contentNav:et,currentUrl:a[1].url.pathname}}),b=new Y({props:{htmlContent:a[2],cssContent:a[3],jsContent:a[4]}}),{c(){r=C("link"),n=C("meta"),p.c(),t=f(),s=N(),o=C("article"),j(c.$$.fragment),v=N(),j(m.$$.fragment),_=N(),i=C("h4"),i.textContent=E,z=N(),j(b.$$.fragment),this.h()},l(e){const l=R("svelte-v1hggi",document.head);r=$(l,"LINK",{rel:!0,href:!0}),n=$(l,"META",{name:!0,content:!0}),p.l(l),t=f(),l.forEach(d),s=y(e),o=$(e,"ARTICLE",{class:!0});var u=Z(o);q(c.$$.fragment,u),v=y(u),q(m.$$.fragment,u),_=y(u),i=$(u,"H4",{class:!0,"data-svelte-h":!0}),B(i)!=="svelte-izhzzq"&&(i.textContent=E),z=y(u),q(b.$$.fragment,u),u.forEach(d),this.h()},h(){document.title="Internet Technologies",g(r,"rel","canonical"),g(r,"href","https://drmithileshkumar.com/courses/internet/javascript/basics/calculator"),g(n,"name","description"),g(n,"content","Courses Taught by Dr Mithilesh Kumar"),g(i,"class","svelte-1sv2bd8"),g(o,"class","svelte-1sv2bd8")},m(e,l){h(document.head,r),h(document.head,n),p.m(document.head,null),h(document.head,t),O(e,s,l),O(e,o,l),I(c,o,null),h(o,v),I(m,o,null),h(o,_),h(o,i),h(o,z),I(b,o,null),k=!0},p(e,[l]){x!==(x=L(e))&&(p.d(1),p=x(e),p&&(p.c(),p.m(t.parentNode,t)));const u={};l&2&&(u.origin=e[1].url.origin),l&2&&(u.pathname=e[1].url.pathname),c.$set(u);const H={};l&2&&(H.currentUrl=e[1].url.pathname),m.$set(H)},i(e){k||(S(c.$$.fragment,e),S(m.$$.fragment,e),S(b.$$.fragment,e),k=!0)},o(e){M(c.$$.fragment,e),M(m.$$.fragment,e),M(b.$$.fragment,e),k=!1},d(e){e&&(d(s),d(o)),d(r),d(n),p.d(e),d(t),T(c),T(m),T(b)}}}function lt(a,r,n){let t,s,o,c;return w(a,K,i=>n(0,t=i)),w(a,D,i=>n(9,s=i)),w(a,A,i=>n(10,o=i)),w(a,tt,i=>n(1,c=i)),P(A,o=nt,o),P(D,s="Calculator",s),P(K,t=!1,t),F(()=>{}),[t,c,`<div id="container">
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
`]}class Nt extends J{constructor(r){super(),Q(this,r,lt,st,G,{})}}export{Nt as component,Ct as universal};
