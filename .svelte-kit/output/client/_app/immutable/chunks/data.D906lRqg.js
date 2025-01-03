import{r as s,s as p}from"./common.wCYZQC0n.js";let l={s:"",o:{A:"",B:"",C:"",D:""},c:""};const x=y=>{y=y%2;let b=["A","B","C","D"],n=Math.floor(Math.random()*4);l.c=b[n];let e=[0,0,0,0];switch(y){case 0:{let i=s(100,70);s(10,1);let t=[i];for(let d=1;d<7;d++)t.push(s(t[d-1]-1,70-d*10));t=p(t);let r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],c=`<div style="display:flex;align-items:center;justify-content:center;flex-direction:column;">
            <table style="font-size: 0.7em;line-height: 1em;border: 1px solid rgba(0, 175, 255, 1); border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td style="vertical-align:center;">Monday</td>
                    <td>${t[0]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Tuesday</td>
                    <td>${t[1]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Wednesday</td>
                    <td>${t[2]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Thursday</td>
                    <td>${t[3]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Friday</td>
                    <td>${t[4]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Saturday</td>
                    <td>${t[5]}</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>${t[6]}</td>
                </tr>
            </table>
            <p>Which day do we get the largest result?</p></div>
            `,o=t.indexOf(i);e[0]=r[o],e[1]=r[(o+1)%7],e[2]=r[(o+2)%7],e[3]=r[(o+3)%7];for(let d=0;d<4;d++)l.o[b[(n+d)%4]]=e[d];l.s=c;break}case 1:{let i=s(100,70);s(10,1);let t=[i];for(let a=1;a<7;a++)t.push(s(t[a-1]-1,70-a*10));t=p(t);let r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],c=`<div style="display:flex;align-items:center;justify-content:center;flex-direction:column;">
            <table style="font-size: 0.7em;line-height: 1em;border: 1px solid rgba(0, 175, 255, 1); border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td style="vertical-align:center;">Monday</td>
                    <td>${t[0]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Tuesday</td>
                    <td>${t[1]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Wednesday</td>
                    <td>${t[2]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Thursday</td>
                    <td>${t[3]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Friday</td>
                    <td>${t[4]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Saturday</td>
                    <td>${t[5]}</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>${t[6]}</td>
                </tr>
            </table>
            <p>Which day do we get the smallest result?</p></div>
            `,o=Math.min(...t),d=t.indexOf(o);e[0]=r[d],e[1]=r[(d+1)%7],e[2]=r[(d+2)%7],e[3]=r[(d+3)%7];for(let a=0;a<4;a++)l.o[b[(n+a)%4]]=e[a];l.s=c;break}}return l=l,l};export{x as data};
