import{r as i}from"./common-f3b98355.js";import{P as p}from"./polynomial-a7c44167.js";let t={s:"",o:{A:"",B:"",C:"",D:""},c:""};const v=n=>{n=n%1;let r=["A","B","C","D"],h=Math.floor(Math.random()*4);t.c=r[h];let e=[0,0,0,0];switch(n){case 0:{let $=i(5,2),f=i(5,0),x=-f,s=new p;s.randPoly($,f,x);let o=i(3,-3),l=s.value(o),c=s.str();c.length==0&&(c=0),e[0]=`\\(${l}\\)`,e[1]=`\\(${l+1}\\)`,e[2]=`\\(${l-1}\\)`,e[3]=`\\(${l+2}\\)`;for(let a=0;a<4;a++)t.o[r[(h+a)%4]]=e[a];t.s=`For which value of \\(\\alpha\\) the function is  continuous at \\(x = ${o}\\) \\[
                f(x)=\\begin{cases}
                    ${c} & x \\neq ${o} \\\\
                    \\alpha & x = ${o}
                \\end{cases}
                \\]`;break}}return t=t,t};export{v as continuity};
