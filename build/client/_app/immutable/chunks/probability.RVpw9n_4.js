import{k as $,r as p}from"./common.wCYZQC0n.js";let o={s:"",o:{A:"",B:"",C:"",D:""},c:""};const w=g=>{g=g%4;let c=["A","B","C","D"],b=Math.floor(Math.random()*4);o.c=c[b];let t=[0,0,0,0];switch(g){case 0:{let n=p(10,2),r=Math.pow(10,n),i=p(r-1,1),d=r-i;t[0]=i/r,t[1]=d/r,t[2]=Math.abs(i-d)/r,t[3]=0;for(let a=0;a<4;a++)o.o[c[(b+a)%4]]=t[a];o.s=`A coin is tossed ${r} times. If the number of heads is ${i} and the numbers of tails is ${d}, then the probability of heads will be `;break}case 1:{let n=p(5,4),r=p(4,2),i=Math.pow(10,r),d=$(i,n+1),a="",h="";for(let e=0;e<=n;e++)a+=`<td style="text-align:center; padding:0;">${e}</td>`,h+=`<td style="text-align:center; padding:0 5px;">${d[e]}</td>`;let f=`<table style="font-size:0.7em;line-height:1rem; border: 0.5px solid; paddnig:0;">
                <tr>
                    <th style="padding:0;"># heads</th>
                    ${a}
                </tr>
                <tr>
                    <th style="padding:0;">Frequency</th>
                    ${h}
                </tr>
            </table>`,s=[];for(let e=0;e<=n;e++)s.push({v:e,p:d[e]/i});s.sort((e,y)=>y.p-e.p),t[0]=s[0].v,t[1]=s[1].v,t[2]=s[2].v,t[3]=s[3].v;for(let e=0;e<4;e++)o.o[c[(b+e)%4]]=t[e];o.s=`<span style="font-size:0.7em">${n} coins are tossed simultaneouly ${i} times.</span>`+f+'<span style="font-size:0.7em;line-height:1rem;">If coins are tossed again, how many heads will appear with highest probability?</span> ';break}case 2:{let n=6,r=p(4,2),i=Math.pow(10,r),d=$(i,n),a="",h="";for(let e=0;e<n;e++)a+=`<td style="text-align:center; padding:0 5px;">${e+1}</td>`,h+=`<td style="text-align:center; padding:0 5px;">${d[e]}</td>`;let f=`<table style="font-size:0.7em;line-height:1rem; border: 0.5px solid; paddnig:0;">
                <tr>
                    <th style="padding:0;">Outcome</th>
                    ${a}
                </tr>
                <tr>
                    <th style="padding:0;">Frequency</th>
                    ${h}
                </tr>
            </table>`,s=[];for(let e=0;e<6;e++)s.push({v:e+1,p:d[e]/i});s.sort((e,y)=>e.p-y.p),t[0]=s[0].v,t[1]=s[1].v,t[2]=s[2].v,t[3]=s[3].v;for(let e=0;e<4;e++)o.o[c[(b+e)%4]]=t[e];o.s=`<span style="font-size:0.7em">A die is tossed ${i} times.</span>`+f+'<span style="font-size:0.7em;line-height:1rem;">If the die is tossed again, what will be the least likely outcome?</span> ';break}case 3:{let n=6,r=p(4,2),i=Math.pow(10,r),d=$(i,n),a="",h="";for(let l=0;l<n;l++)a+=`<td style="text-align:center; padding:0 5px;">${l+1}</td>`,h+=`<td style="text-align:center; padding:0 5px;">${d[l]}</td>`;let f=`<table style="font-size:0.7em;line-height:1rem; border: 0.5px solid; paddnig:0;">
                <tr>
                    <th style="padding:0;">Outcome</th>
                    ${a}
                </tr>
                <tr>
                    <th style="padding:0;">Frequency</th>
                    ${h}
                </tr>
            </table>`,s=d.map(l=>l/i),e=Math.random()>.5?"even":"odd",y={even:s.reduce((l,m,u)=>l+u%2*m,0),odd:s.reduce((l,m,u)=>l+(u+1)%2*m,0)};t[0]=y[e],t[1]=s[1],t[2]=s[2],t[3]=s[3];for(let l=0;l<4;l++)o.o[c[(b+l)%4]]=t[l];o.s=`<span style="font-size:0.7em">A die is tossed ${i} times.</span>`+f+`<span style="font-size:0.7em;line-height:1rem;">If the die is tossed again, what will be the probability that outcome is an ${e} number?</span> `;break}}return o=o,o};export{w as probability};
