import{r as g}from"./wCYZQC0n.js";import{t as O,P as w}from"./DT7c1HLs.js";import{L as N}from"./DUvsFUVE.js";let f={s:"",o:{A:"",B:"",C:"",D:""},c:""};const Q=D=>{D=D%5;let W=["A","B","C","D"],j=Math.floor(Math.random()*4);f.c=W[j];let i=[0,0,0,0];switch(D){case 0:{let b='<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the complementary angle?</p>',q=`<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`,z="</svg>",d="</div>",e=g(89,15),a={x:100*Math.cos(-e*Math.PI/180),y:100*Math.sin(-e*Math.PI/180)},n={x:40*Math.cos(-e*Math.PI/360),y:40*Math.sin(-e*Math.PI/360)},c=`<path d="M 100,0 L 0,0 L ${a.x},${a.y}" stroke="currentcolor" stroke-width="2" fill="none" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <path d="M 30,0 A 30 30 0 0 0 ${.3*a.x},${.3*a.y}" stroke="currentcolor" stroke-width="1.5" fill="none" />
            <text x="${n.x}" y="${n.y}" fill="currentcolor" font-size="14">${e}</text>
            `,t={x:Math.min(a.x,0),y:Math.min(a.y,0),width:110,height:110},x=`<svg width="100" height="100" viewBox="${t.x-5} ${t.y-5} ${t.width} ${t.height}" >`;i[0]=90-e,i[1]=180-e,i[2]=90+e,i[3]=2*e;for(let r=0;r<4;r++)f.o[W[(j+r)%4]]=i[r];f.s=b+x+q+c+z+d;break}case 1:{let b='<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the supplementary angle?</p>',q=`<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`,z="</svg>",d="</div>",e=g(179,15),a={x:100*Math.cos(-e*Math.PI/180),y:100*Math.sin(-e*Math.PI/180)},n={x:40*Math.cos(-e*Math.PI/360),y:40*Math.sin(-e*Math.PI/360)},c=`<path d="M 100,0 L 0,0 L ${a.x},${a.y}" stroke="currentcolor" stroke-width="2" fill="none" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <path d="M 30,0 A 30 30 0 0 0 ${.3*a.x},${.3*a.y}" stroke="currentcolor" stroke-width="1.5" fill="none" />
            <text x="${n.x}" y="${n.y}" fill="currentcolor" font-size="14">${e}</text>
            `,t={x:Math.min(a.x,0),y:Math.min(a.y,n.y,0),width:110,height:110},x=`<svg width="${t.width-t.x}" height="${t.height}" viewBox="${t.x-5} ${t.y-5} ${t.width-t.x} ${t.height}" >`;i[0]=180-e,i[1]=90-e,i[2]=90+e,i[3]=2*e;for(let r=0;r<4;r++)f.o[W[(j+r)%4]]=i[r];f.s=b+x+q+c+z+d;break}case 2:{let b=`<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`,q="</svg>",z="</div>",d=100,e=g(90,0),a=g(60,30),n=e+a,c=[a,180-a,a,180-a],t=["x","y","z"],x=g(3,0),r=["","","",""];r[x]=c[x],r[(x+1)%4]=t[0],r[(x+2)%4]=t[1],r[(x+3)%4]=t[2];let o=new w;o.polar(e*Math.PI/180,d);let l=new w;l.polar(n*Math.PI/180,d);let h=new w;h.polar(e*Math.PI/180+Math.PI,d);let $=new w;$.polar(n*Math.PI/180+Math.PI,d);let I=`<line x1="${o.x}" y1="${o.y}" x2="${h.x}" y2="${h.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`,p=`<line x1="${l.x}" y1="${l.y}" x2="${$.x}" y2="${$.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`,y=`<path d="M ${.3*o.x},${.3*o.y} A 30,30 0 0 1 ${.3*l.x},${.3*l.y}" stroke='currentcolor' stroke-width="1" fill="none" />`,E=`<path d="M ${.35*l.x},${.35*l.y} A 35,35 0 0 1 ${.35*h.x},${.3*h.y}" stroke='currentcolor' stroke-width="1" fill="none" />`,H=`<path d="M ${.3*h.x},${.3*h.y} A 30,30 0 0 1 ${.3*$.x},${.3*$.y}" stroke='currentcolor' stroke-width="1" fill="none" />`,X=`<path d="M ${.35*$.x},${.35*$.y} A 35,35 0 0 1 ${.35*o.x},${.35*o.y}" stroke='currentcolor' stroke-width="1" fill="none" />`,k=new w;k.polar((e+n)*Math.PI/360+.25,48);let A=new w;A.polar((e+n+180)*Math.PI/360,48);let M=new w;M.polar((e+n+360)*Math.PI/360-.25,40);let u=new w;u.polar((e+n+540)*Math.PI/360+.25,40);let m=`<g fill="red" transform="translate(${k.x}, ${k.y}) scale(0.015)">`+O(`${r[0]}^\\circ`)+"</g>",s=`<g fill="red" transform="translate(${A.x}, ${A.y}) scale(0.015)">`+O(`${r[1]}^\\circ`)+"</g>",v=`<g fill="red" transform="translate(${M.x}, ${M.y}) scale(0.015)">`+O(`${r[2]}^\\circ`)+"</g>",B=`<g fill="red" transform="translate(${u.x}, ${u.y}) scale(0.015)">`+O(`${r[3]}^\\circ`)+"</g>",P={x:-110,y:-110,width:210,height:210},L=g(2,0),S=`<svg width="${P.width}" height="${P.height}" viewBox="${P.x} ${P.y} ${P.width} ${P.height}" >`,Y=`<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the value of \\(${t[L]}\\)?</p>`;i[0]=c[(x+L+1)%4],i[1]=c[(x+L+2)%4],i[2]=0,i[3]=180;for(let C=0;C<4;C++)f.o[W[(j+C)%4]]=i[C];f.s=Y+S+b+I+p+y+E+H+X+m+s+v+B+q+z;break}case 3:{let b=`<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`,q="</svg>",z="</div>",d=100,e=new w,a=g(90,0),n=g(60,30),c=g(60,30),t=a+n,x=t+c,r=[n,c,180-n-c,n,180-n],o=g(4,0);for(;o===1||o===2;)o=g(4,0);let l=["","","","",""];l[o]=r[o],l[1]=r[1],o===0?(l[2]="x",l[3]="y",l[4]="z"):o===3?(l[0]="x",l[2]="y",l[4]="z"):o===4&&(l[0]="x",l[2]="y",l[3]="z");let h=new w;h.polar(a*Math.PI/180,d);let $=new w;$.polar(t*Math.PI/180,d);let I=new w,p=new w;p.polar(x*Math.PI/180,d),I.polar(a*Math.PI/180+Math.PI,d);let y=new w;y.polar(t*Math.PI/180+Math.PI,d);let E=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`,H=`<line x1="${$.x}" y1="${$.y}" x2="${y.x}" y2="${y.y}" stroke="currentcolor" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />`,X=`<line x1="${e.x}" y1="${e.y}" x2="${p.x}" y2="${p.y}" stroke="currentcolor" stroke-width="2"  marker-end="url(#arrow)" />`,k=e.drawAngle(h,$,l[0]),A=e.drawAngle($,p,l[1],2,-10),M=e.drawAngle(p,I,l[2],1,-10),u=e.drawAngle(I,y,l[3]),m=e.drawAngle(y,h,l[4],1,-10),s={x:-110,y:-110,width:210,height:210},v=`<svg width="${s.width}" height="${s.height}" viewBox="${s.x} ${s.y} ${s.width} ${s.height}" >`,B='<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the value of \\(x\\)?</p>',P=l.indexOf("x");i[0]=r[P%5],i[1]=r[(P+1)%5],i[2]=0,i[3]=180;for(let L=0;L<4;L++)f.o[W[(j+L)%4]]=i[L];f.s=B+v+b+E+H+X+k+A+M+u+m+q+z;break}case 4:{let b=`<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`,q="</svg>",z="</div>",d=100,e=new w,a=330,n=210,c=new w;c.polar(a*Math.PI/180,d);let t=new w;t.polar(n*Math.PI/180,d);let x=t.reflect(e),r=c.reflect(e),o=new w,l=g(180+a-20,180+n+20);o.polar(l*Math.PI/180,d);let h=o.reflect(e),$=new N({p:c,q:t}),I=new N({p:x,q:r}),p=new N({p:o,q:h}),y=$.intersect(p),E=I.intersect(p),H=g(3,0),X=g(3,0),k=y.anglePair(h,c,!0);k=Math.floor(k*180/Math.PI);let A=180-k,M="",u="",m=Math.random(),s,v;switch(H){case 0:{s=m>.5?"x":k,M=y.drawAngle(h,c,s,1);break}case 1:{s=m>.5?"x":A,M=y.drawAngle(c,o,s,1);break}case 2:{s=m>.5?"x":k,M=y.drawAngle(o,t,s,1);break}case 3:{s=m>.5?"x":A,M=y.drawAngle(t,h,s,1);break}}switch(X){case 0:{v=m<=.5?"x":k,u=E.drawAngle(h,x,v,1);break}case 1:{v=m<=.5?"x":A,u=E.drawAngle(x,o,v,1);break}case 2:{v=m<=.5?"x":k,u=E.drawAngle(o,r,v,1);break}case 3:{v=m<=.5?"x":A,u=E.drawAngle(r,h,v,1);break}}let B={x:-110,y:-110,width:210,height:210},P=`<svg width="${B.width}" height="${B.height}" viewBox="${B.x} ${B.y} ${B.width} ${B.height}" >`,L='<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the value of \\(x\\)?</p>',S=s==="x"?v:s;S=(H+X)%2===0?S:180-S,i[0]=S,i[1]=180-S,i[2]=0,i[3]=180;for(let Y=0;Y<4;Y++)f.o[W[(j+Y)%4]]=i[Y];f.s=L+P+b+$.draw()+I.draw()+p.draw()+M+u+q+z;break}}return f=f,f};export{Q as lines};
