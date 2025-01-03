//@ts-nocheck
import { Q } from './fraction';
import {randInt} from './common';
import { Point } from './point';
import { Matrix2x2 } from './matrix';
export class Linear2 {//ax + by + c
    constructor(a = 1, b = 0, c = 0, x = 'x', y = 'y') {
        this.a = a;
        this.b = b;
        this.c = c;

        this.x = x;
        this.y = y
    }
    randL(min, max) {
        this.a = randInt(max, min);
        while(this.a === 0) {
            this.a = randInt(max, min);
        }
        this.b = randInt(max, min);
        this.c = randInt(max, min)
    }
    add(l) {
        return new Linear2(this.a + l.a, this.b + l.b, this.c + l.c);
    }
    sub(l) {
        return new Linear2(this.a - l.a, this.b - l.b, this.c - l.c);
    }
    scale(k) {
        return new Linear2(this.a * k, this.b * k, this.c * k);
    }
    solve(l) {
        let det = this.a * l.b - this.b * l.a;
        if(det !== 0) {
            let detx = -l.b * this.c + this.b * l.c;
            let dety = l.a * this.c - this.a * l.c
            let x = new Q(detx, det);
            let y = new Q(dety, det);
            x.reduced();
            y.reduced();
            return {x, y};
        }
        return {x:NaN,y:NaN}
    }
    str() {
        let eq = '';
        if(this.a === 1) {
            eq = this.x;
        } else if(this.a === -1) {
            eq = '-' + this.x;
        } else if(this.a === 0) {
            eq = '';
        } else {
            eq += this.a + this.x
        }
        if(this.b === 1) {
            eq += (eq.length > 0 ? '+' : '') + this.y;
        } else if(this.b === -1) {
            eq += '-' + this.y;
        } else if(this.b === 0) {
            eq = eq
        } else {
            if(this.b > 0) eq += (eq.length > 0 ? '+' : '') + this.b + this.y;
            else if(this.b < 0) eq += this.b + this.y;
            else eq += '+' + this.b + this.y;
        }
        if(this.c > 0) {
            eq += (eq.length > 0 ? '+' : '') + this.c;
        } else if(this.c === 0) {
            eq += '';
        } else {
            eq += this.c;
        }
        return eq;
    }
    value(x, y) {
        // console.log(this.a)
        let newa, newb, newc;
        if(x instanceof Q) {
            if(!(this.a instanceof Q)) {
                newa = new Q(this.a, 1);
                newb = new Q(this.b, 1);
                newc = new Q(this.c, 1);
            }
            return newa.mul(x).add(newb.mul(y)).add(newc);
        }
        return this.a * x  + this.b * y + this.c;
    }
}