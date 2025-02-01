import{$ as C,a0 as B,x as w,G as O}from"./scheduler.TT61c9Gi.js";function _(t){const s=t-1;return s*s*s+1}function U(t){return--t*t*t*t*t+1}function V(t,{delay:s=0,duration:i=400,easing:a=B}={}){const y=+getComputedStyle(t).opacity;return{delay:s,duration:i,easing:a,css:f=>`opacity: ${f*y}`}}function b(t,{delay:s=0,duration:i=400,easing:a=_,x:y=0,y:f=0,opacity:e=0}={}){const o=getComputedStyle(t),u=+o.opacity,c=o.transform==="none"?"":o.transform,n=u*(1-e),[l,r]=C(y),[p,g]=C(f);return{delay:s,duration:i,easing:a,css:($,m)=>`
			transform: ${c} translate(${(1-$)*l}${r}, ${(1-$)*p}${g});
			opacity: ${u-n*m}`}}function v(t,{delay:s=0,duration:i=400,easing:a=_,start:y=0,opacity:f=0}={}){const e=getComputedStyle(t),o=+e.opacity,u=e.transform==="none"?"":e.transform,c=1-y,n=o*(1-f);return{delay:s,duration:i,easing:a,css:(l,r)=>`
			transform: ${u} scale(${1-c*r});
			opacity: ${o-n*r}
		`}}function G({fallback:t,...s}){const i=new Map,a=new Map;function y(e,o,u){const{delay:c=0,duration:n=d=>Math.sqrt(d)*30,easing:l=_}=w(w({},s),u),r=e.getBoundingClientRect(),p=o.getBoundingClientRect(),g=r.left-p.left,$=r.top-p.top,m=r.width/p.width,k=r.height/p.height,q=Math.sqrt(g*g+$*$),h=getComputedStyle(o),M=h.transform==="none"?"":h.transform,S=+h.opacity;return{delay:c,duration:O(n)?n(q):n,easing:l,css:(d,x)=>`
				opacity: ${d*S};
				transform-origin: top left;
				transform: ${M} translate(${x*g}px,${x*$}px) scale(${d+(1-d)*m}, ${d+(1-d)*k});
			`}}function f(e,o,u){return(c,n)=>(e.set(n.key,c),()=>{if(o.has(n.key)){const l=o.get(n.key);return o.delete(n.key),y(l,c,n)}return e.delete(n.key),t&&t(c,n,u)})}return[f(a,i,!1),f(i,a,!0)]}export{G as a,b,_ as c,V as f,U as q,v as s};
