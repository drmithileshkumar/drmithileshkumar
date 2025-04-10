import{a as $,r as c}from"./wCYZQC0n.js";import{P as x}from"./DdQL0TQD.js";let a={s:"",o:{A:"",B:"",C:"",D:""},c:""};const g=h=>{h=h%2;let f=["A","B","C","D"],u=Math.floor(Math.random()*4);a.c=f[u];let o=[0,0,0,0];switch(h){case 0:{let p=c(5,2),t=c(5,0),r=-t,s=new x;s.randPoly(p,t,r);let l=c(3,-3),n=s.value(l),i=s.str();i.length==0&&(i=0),o[0]=`\\(${n}\\)`,o[1]=`\\(${n+1}\\)`,o[2]=`\\(${n-1}\\)`,o[3]=`\\(${n+2}\\)`;for(let e=0;e<4;e++)a.o[f[(u+e)%4]]=o[e];a.s=`For which value of \\(\\alpha\\) the function is  continuous at \\(x = ${l}\\) \\[
                f(x)=\\begin{cases}
                    ${i} & x \\neq ${l} \\\\
                    \\alpha & x = ${l}
                \\end{cases}
                \\]`;break}case 1:{let p=c(4,2),t=$(10,p),r=new x;r=r.fromRoots(t);let s=[],l=c(t.length-1,0);for(let e=0;e<t.length;e++)e!==l?t[e]===0?s.push("x"):s.push("(x - "+t[e]+")"):s.push("(x - a)");let n=s.join(""),i=r.str();o[0]=t[l],o[1]=t[l]+1,o[2]=t[l]-1,o[3]=t[l]+2;for(let e=0;e<4;e++)a.o[f[(u+e)%4]]=o[e];a.s=`For what value of \\(a\\), the following is continuous everywhere \\[\\frac{${n}}{${i}}\\]`;break}}return a=a,a};export{g as continuity};
