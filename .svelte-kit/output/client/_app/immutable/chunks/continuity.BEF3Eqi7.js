import{a as i}from"./common.q_H4qMxg.js";import{P as p}from"./polynomial.Cw6rexcL.js";let t={s:"",o:{A:"",B:"",C:"",D:""},c:""};const v=n=>{n=n%1;let r=["A","B","C","D"],h=Math.floor(Math.random()*4);t.c=r[h];let e=[0,0,0,0];switch(n){case 0:{let $=i(5,2),f=i(5,0),x=-f,s=new p;s.randPoly($,f,x);let o=i(3,-3),a=s.value(o),c=s.str();c.length==0&&(c=0),e[0]=`\\(${a}\\)`,e[1]=`\\(${a+1}\\)`,e[2]=`\\(${a-1}\\)`,e[3]=`\\(${a+2}\\)`;for(let l=0;l<4;l++)t.o[r[(h+l)%4]]=e[l];t.s=`For which value of \\(\\alpha\\) the function is  continuous at \\(x = ${o}\\) \\[
                f(x)=\\begin{cases}
                    ${c} & x \\neq ${o} \\\\
                    \\alpha & x = ${o}
                \\end{cases}
                \\]`;break}}return t=t,t};export{v as continuity};
