//@ts-nocheck
import { Q } from './fraction';
import {randInt} from './common';
export class Linear {//ax + b
    constructor(a = 1, b = 0, x = 'x') {
        this.a = a;
        this.b = b;
        this.x = x;
    }
    randL(min, max) {
        this.a = randInt(max, min);
        while(this.a === 0) {
            this.a = randInt(max, min);
        }
        this.b = randInt(max, min);
    }
    add(l) {
        return new Linear(this.a + l.a, this.b + l.b);
    }
    sub(l) {
        return new Linear(this.a - l.a, this.b - l.b);
    }
    scale(k) {
        return new Linear(this.a * k, this.b * k);
    }
    str() {
        let eq = '';
        if(this.a === 1) {
            eq = this.x;
        } else if(this.a === -1) {
            eq = '-' + this.x;
        } else if(this.a === 0) {
            return this.b
        } else {
            eq = this.a + this.x;
        }
        
        if(this.b === 0) {
            return eq;
        }
        if(this.b > 0) {
            eq += '+' + this.b;
        } else {
            eq += this.b;
        }
        return eq;
    }
    root() {
        return new Q(-this.b, this.a);
    }
    value(x) {
        return this.a * x  + this.b;
    }
}