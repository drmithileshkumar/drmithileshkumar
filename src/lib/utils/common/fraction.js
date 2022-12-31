import {randInt} from './common';
import { Surd } from "./surd";
export class Q {

    constructor(num = 0, den = 1) {//num, den can be integers or surds
        this.num = num;
        this.den = den;
    }
    randF(n, d) {
        this.num = randInt(n, -n);
        this.den = randInt(d, 1);
        this.reduced();
        
    }
    randUnit(max = 10) {
        let n = randInt(max, 2);
        let m = randInt(max, 2);
        this.num = n > m ? m : n;
        this.den = n + m - this.num;
        this.reduced();
    }
    randFbetween(m, n, max = 10) { // m < n
        let uf = new Q();
        uf.randUnit(max);
        if(!(m instanceof Q))
            m = new Q(m);
        if(!(n instanceof Q))
            n = new Q(n)
        let f = m.add(uf.mul(n.sub(m)));
        f.reduced();
        this.num = f.num;
        this.den = f.den;
    }
    isZero() {
        return this.num == 0;
    }
    isOne() {
        return this.num == 1 && this.den == 1;
    }
    isMinusOne() {
        return this.num == -1 && this.den == 1;
    }
    isGZero() {
        return this.num > 0;
    }

    isLZero() {
        return this.num < 0;
    }

    isUndefined() {
        return this.den == 0;
    }
    sqrt() {
        let sq = new Q();
        if(this.num instanceof Surd && this.den instanceof Surd) {
            if(this.num.isNum()) {
                sq.num = new Surd([{a: 1, r: this.num.terms[0].a}]);
            } else {
                sq.num = new Surd([{a: 1, r: this.num.value()}]);
            }
            if(this.den.isNum()) {
                sq.den = new Surd([{a: 1, r: this.den.terms[0].a}]);
            } else {
                sq.den = new Surd([{a: 1, r: this.den.value()}]);
            }
        } else {
            sq.num = new Surd([{a: 1, r: this.num}]);
            sq.den = new Surd([{a: 1, r: this.den}]);
        }
        return sq;
    }
    str() {
            if(this.num == 0) {
                return 0;
            }
            if(this.den == 1) {
                return this.num;
            }
            if(this.den == -1) {
                return -this.num;
            }
            if(this.den < 0) {
                return `\\frac{${-this.num}}{${-this.den}}`;
            }
            return `\\frac{${this.num}}{${this.den}}`;
    }

    gcd() {
        let a = Math.abs(this.num);
        let b = Math.abs(this.den);
        if (b > a) {var temp = a; a = b; b = temp;}
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }
    }

    lcm() {
        let g = this.gcd();
        return this.num * this.den / g;
    }

    reduced() {
        if(this.den < 0) {
            this.den = -this.den;
            this.num = -this.num;
        }
        if(this.num == this.den) {
            this.num = 1;
            this.den = 1;
        } else if(this.num % this.den == 0) {
            this.num = this.num/this.den;
            this.den = 1;
        } else if(this.num % 1 == 0 && this.den % 1 == 0) {
            let g = this.gcd();
            // console.log('gcd..', this.num, this.den, g);
            this.num = this.num/g;
            this.den = this.den/g;
        } else {
            this.num = this.num / this.den;
            this.den = 1;
        }   
    }

    equal(f) {
        this.reduced();
        f.reduced();
        return this.num/this.den == f.num/f.den;
    }

    scale(k) {
        return new Q(this.num*k, this.den);
    }
    abs() {
        return this.isLZero() ? this.scale(-1) : this;
    }
    add(f) {
        let newNum, newDen;
        if(!(f instanceof Q)) {
            f = new Q(f, 1);
        }
        newNum = this.num*f.den + this.den*f.num;
        newDen = this.den*f.den;    
        return new Q(newNum, newDen);
    }

    sub(f) {
        if(!(f instanceof Q)) {
            f = new Q(f, 1);
        }
        let nf = f.scale(-1);
        //console.log('frac sub..', f.str(), nf.str());
        return this.add(nf);
    }

    mul(f) {
        if(!(f instanceof Q)) {
            f = new Q(f, 1);
        }
        let newNum, newDen;
        newNum = this.num*f.num;
        newDen = this.den*f.den;    
        return new Q(newNum, newDen);
    }

    div(f) {
        if(!(f instanceof Q)) {
            f = new Q(f, 1);
        }
        let newNum, newDen;
        newNum = this.num*f.den;
        newDen = this.den*f.num;    
        return new Q(newNum, newDen);
    }
    value() {
        return this.num/this.den;
    }
}

export const F = (k) => {
    return new Q(k, 1);
}