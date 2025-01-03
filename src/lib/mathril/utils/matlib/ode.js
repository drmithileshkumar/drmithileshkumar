//@ts-nocheck
import { randInt } from "./common";

export class ODE {
    constructor(c = [], y = 'y', x = 'x' ) { //{a: , r: , d: } a (d^r y/dx^r)^d
        this.c = c;
        this.y = y;
        this.x = x;
    }
    randODE(n, m) {
        this.c = [];
        let a, r, d;
        for(let i = 0; i <= n; i++) {
            
            r = randInt(n, 1);
            d = randInt(m, 1);
            a = randInt(1, -1);
            this.c.push({a: a, r: r, d: d});
            
        }
    }
    reduced() {
        let tempc = [];
        let marked = [];
        for(let i = 0; i < this.c.length; i++) {
            marked.push(false);
        }
        let current = 0;
        while(current < this.c.length) {
            if(!marked[current]) {
                tempc.push(this.c[current]);
                for(let i = current + 1; i < this.c.length; i++) {
                
                    if(!marked[i]) {
                        if(this.c[current].r == this.c[i].r && this.c[current].d == this.c[i].d) {
                            tempc[tempc.length - 1].a += this.c[i].a;
                            marked[i] = true;
                        }
                    }
                    
                }
                marked[current] = true;
            } else {
                current++;
            }                
        }
        this.c = tempc;
    }
    
    strterm(i) {
        if(this.c[i].a == 0) return '';
        let adon = this.c[i].a == 1 ? '+' : this.c[i].a == -1 ? '-' : this.c[i].a > 0 ? '+' + this.c[i].a : this.c[i].a;
        return this.c[i].d == 1 ? adon + ' ' + this.y + '_{' + this.c[i].r + '}' : adon + ' ' + this.y + '_{' + this.c[i].r + '}^{' + this.c[i].d + '}';
    }
    str() {
        this.reduced();
        if(this.c.length == 0) return '';
        if(this.c.length == 1 && this.c[0].a == 0) return '' + 0;
        let tex = '';
        for(let i = 0; i < this.c.length; i++) {
            tex += this.strterm(i);
        }
        return tex;
    }
    maxpowerIndex() {
        this.reduced();
        let max = 0;
        for(let i = 0; i < this.c.length; i++) {
            if(this.c[i].r > this.c[max].r && this.c[i].a !== 0) {
                max = i;
            }
        }
        return max;
    }
    order() {
        let i = this.maxpowerIndex();
        return this.c[i].r;
    }
    degree() {
        let i = this.maxpowerIndex();
        return this.c[i].d;
    }
}