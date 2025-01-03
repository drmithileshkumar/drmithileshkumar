//@ts-nocheck
import { Polynomial } from "./polynomial";
import { randInt } from "./common";
import { Q } from "./fraction";
import { Surd } from "./surd";

export class FactPoly {
    constructor(k = 1, f = [], s = 'x') {//k, f can be fractions or surds
        this.k = k;
        this.f = f;
        this.s = s;
    }
    termstr(i) {
        if(this.f[i] instanceof Q || this.f[i] instanceof Surd) {
            return this.f[i].isZero() ? this.s : this.f[i].isGZero() ? '(' + this.s + '+ ' + this.f[i].str() + ')' : '(' + this.s + this.f[i].str() + ')';
        }
        return this.f[i] == 0 ? this.s : this.f[i] > 0 ? '(' + this.s + '+' + this.f[i] + ')' : '(' + this.s +  this.f[i] + ')';
        
    }
    str() {
        let tex;
        if(this.k instanceof Q || this.k instanceof Surd) {
            if(this.k.isZero()) return '' + 0;
            if(this.f.length == 0) return this.k.str();
            tex = this.k.equal(new Q(1)) || this.k.equal(new Surd([{a: 1, r: 1}])) ? '' : this.k.equal(new Q(-1)) || this.k.equal(new Surd([{a: -1, r: 1}])) ? '-': this.k.str();
        } else {
            if(this.k == 0) return 0;
            if(this.f.length == 0) return this.k;
            tex = this.k == 1 ? '' : this.k == -1 ? '-': this.k;
        }
        for(let i = 0; i < this.f.length; i++) {
            tex += this.termstr(i);
        }
        return tex;
    }
    sortF() {
        
        this.f.sort((a, b) => a - b);
    }
    randFactPoly(n, min, max) {
        this.f = [];
        let r;
        for(let i = 0; i < n; i++) {
            r = randInt(max, min);
            this.f.push(r);
        }
        this.sortF();
        //console.log(this.f);
    }
    expand() {
        if(this.k == 0) return new Polynomial([{a: 0, r: 0}], this.s);
        if(this.f.length == 0) return new Polynomial([{a: this.k, r: 0}], this.s);
        let p = new Polynomial([{a: this.k, r: 0}], this.s);
        let temp = new Polynomial([], this.s);
        
        for(let i = 0; i < this.f.length; i++) {
            temp.c = [{a: this.f[i], r: 0}, {a: 1, r: 1}];
            //console.log(temp.str());
            p = p.mul(temp);
            temp.c = [];
        }
        return p;
    }
    value(l) {
        let v = this.k;
        for(let i = 0; i < this.f.length; i++) {
            v *= (l + this.f[i]);
        }
        return v;
    }
    integrate() {
        let p = this.expand();
        return p.integrate();
    }
    dintegrate(a, b) {
        if(a == b) return new Q();
        let p = this.expand();
        return p.dintegrate(a, b);
    }
    area(a, b) {
        this.sortF();
        let limits = [];
        limits.push(a);
        for(let i = 0; i < this.f.length; i++) {
            if(-this.f[i] > a && -this.f[i] <= b) limits.push(-this.f[i]);
        }
        limits.push(b);
        //console.log(limits);
        let ar = new Q();
        let sum = new Q();
        let p = this.expand();
        for(let i = 1; i < limits.length; i++) {
            ar = p.dintegrate(limits[i - 1], limits[i]);
            sum = sum.add(ar.abs());
        }
        return sum;
    }
}