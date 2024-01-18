import{Q as g}from"./fraction.lm-fXUyT.js";import{a as n}from"./common.dD7Xbhr8.js";let e={s:"",o:{A:"",B:"",C:"",D:""},c:""};const C=o=>{o=o%1;let c=["A","B","C","D"],s=Math.floor(Math.random()*4);e.c=c[s];let t=[0,0,0,0];switch(o){case 0:{let d=n(10,2),h=n(10,2),r=n(10,2),p=`${d}x + ${h}y`,$="(0, 0)",a=new g(r,d),i=new g(r,h);a.reduced(),i.reduced();let m="("+a.str()+",0)",v="(0,"+i.str()+")",f=Math.random()<.5?a.scale(-1):i.scale(-1);f.reduced();let x="(0,"+f.str()+")";t[0]=`\\(${x}\\)`,t[1]=`\\(${$}\\)`,t[2]=`\\(${m}\\)`,t[3]=`\\(${v}\\)`;for(let l=0;l<4;l++)e.o[c[(s+l)%4]]=t[l];e.s=`Which of the following points is not a vertex of the feasible region of the linear programming problem
                \\[\\begin{aligned} 
                    ${p} &\\leq ${r}\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;break}}return e=e,e};export{C as linear};
