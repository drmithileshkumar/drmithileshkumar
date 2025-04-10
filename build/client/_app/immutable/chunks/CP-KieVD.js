import{r as L}from"./wCYZQC0n.js";import{Q as l}from"./DoCyav5s.js";import{L as $}from"./Jw_UDDiT.js";let w={s:"",o:{A:"",B:"",C:"",D:""},c:""};const k=h=>{h=h%3;let b=["A","B","C","D"],g=Math.floor(Math.random()*4);w.c=b[g];let s=[0,0,0,0];switch(h){case 0:{let t=L(10,2),e=L(10,2),r=L(10,2),p=`${t}x + ${e}y`,u="(0, 0)",o=new l(r,t),x=new l(r,e);o.reduced(),x.reduced();let f="("+o.str()+",0)",v="(0,"+x.str()+")",i=Math.random()<.5?o.scale(-1):x.scale(-1);i.reduced();let d="(0,"+i.str()+")";s[0]=`\\(${d}\\)`,s[1]=`\\(${u}\\)`,s[2]=`\\(${f}\\)`,s[3]=`\\(${v}\\)`;for(let c=0;c<4;c++)w.o[b[(g+c)%4]]=s[c];w.s=`Which of the following points is not a vertex of the feasible region of the linear programming problem
                \\[\\begin{aligned} 
                    ${p} &\\leq ${r}\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;break}case 1:{let t=new $;t.randL(2,10),t.c=-t.c;let e=new $;e.randL(2,10),e.c=-e.c;let r=t.str(),p=e.str(),u=t.solve(e);for(;u.x===NaN||u.y===NaN;)t.randL(2,10),t.c=-t.c,e.randL(2,10),e.c=-e.c,r=t.str(),p=e.str(),u=t.solve(e);let o={x:new l(-t.c,t.a),y:new l},x={x:new l,y:new l(-t.c,t.b)},f={x:new l(-e.c,e.a),y:new l},v={x:new l,y:new l(-e.c,e.b)},i,d,c,n;o.x.value()<f.x.value()?(i=o,c=f):(i=f,c=o),x.y.value()<v.y.value()?(d=x,n=v):(d=v,n=x);let a=Math.random()>.5?c:n,y=u.x.mul(u.y).value()>0?u:{x:new l,y:new l};a.x.reduced(),a.y.reduced(),y.x.reduced(),y.y.reduced(),i.x.reduced(),i.y.reduced(),d.x.reduced(),d.y.reduced(),s[0]=`\\((${a.x.str()}, ${a.y.str()})\\)`,s[1]=`\\((${y.x.str()}, ${y.y.str()})\\)`,s[2]=`\\((${i.x.str()}, ${i.y.str()})\\)`,s[3]=`\\((${d.x.str()}, ${d.y.str()})\\)`;for(let m=0;m<4;m++)w.o[b[(g+m)%4]]=s[m];w.s=`Which of the following points is not a vertex of the feasible region of the linear programming problem
                \\[\\begin{aligned} 
                    ${r} &\\leq 0\\\\
                    ${p} &\\leq 0\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;break}case 2:{let t=new $;t.randL(2,10);let e=new $;e.randL(2,10),e.c=-e.c;let r=new $;r.randL(2,10),r.c=-r.c;let p=e.str(),u=r.str(),o=e.solve(r),x={x:new l(-e.c,e.a),y:new l},f={x:new l,y:new l(-e.c,e.b)},v={x:new l(-r.c,r.a),y:new l},i={x:new l,y:new l(-r.c,r.b)},d,c;x.x.value()<v.x.value()?d=x:d=v,f.y.value()<i.y.value()?c=f:c=i;let n=[t.value(o.x,o.y),t.value(d.x,d.y),t.value(c.x,c.y),t.value(new l,new l)];n=n.sort((a,y)=>(typeof a=="number"?a:a.value())-(typeof y=="number"?y:y.value())),n[1].reduced(),n[2].reduced(),n[3].reduced(),s[0]=`\\(${n[3].str()}\\)`,s[1]=`\\(${n[3].add(new l(1,1)).str()}\\)`,s[2]=`\\(${n[2].str()}\\)`,s[3]=`\\(${n[1].str()}\\)`;for(let a=0;a<4;a++)w.o[b[(g+a)%4]]=s[a];w.s=`Maximize \\(${t.str()}\\) under
                \\[\\begin{aligned} 
                    ${p} &\\leq 0\\\\
                    ${u} &\\leq 0\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;break}case 3:{let t=new $;t.randL(2,10);let e=new $;e.randL(2,10),e.c=-e.c;let r=new $;r.randL(2,10),r.c=-r.c;let p=e.str(),u=r.str(),o=e.solve(r),x={x:new l(-e.c,e.a),y:new l},f={x:new l,y:new l(-e.c,e.b)},v={x:new l(-r.c,r.a),y:new l},i={x:new l,y:new l(-r.c,r.b)},d,c;x.x.value()<v.x.value()?d=x:d=v,f.y.value()<i.y.value()?c=f:c=i;let n=[t.value(o.x,o.y),t.value(d.x,d.y),t.value(c.x,c.y),t.value(new l,new l)];n=n.sort((a,y)=>(typeof a=="number"?a:a.value())-(typeof y=="number"?y:y.value())),n[1].reduced(),n[2].reduced(),n[3].reduced(),s[0]=`\\(${n[3].str()}\\)`,s[1]=`\\(${n[3].add(new l(1,1)).str()}\\)`,s[2]=`\\(${n[2].str()}\\)`,s[3]=`\\(${n[1].str()}\\)`;for(let a=0;a<4;a++)w.o[b[(g+a)%4]]=s[a];w.s=`Maximize \\(${t.str()}\\) under
                \\[\\begin{aligned} 
                    ${p} &\\leq 0\\\\
                    ${u} &\\leq 0\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;break}}return w=w,w};export{k as linear};
