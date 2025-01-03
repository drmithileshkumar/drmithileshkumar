//@ts-nocheck
import {randInt} from './common';
import { Surd } from "./surd";
export class Q {

    constructor(num = 0, den = 1) {//num, den can be integers or surds
        this.num = num;
        this.den = den;
    }
    randF(n, d, nonzero = false) {//Todo include surds
        this.num = randInt(n, -n);
        while(nonzero && this.num === 0) {
            this.num = randInt(n, -n);
        }
        this.den = randInt(d, 1);
        this.reduced();
        
    }
    reciprocal() {
        return new Q(this.den, this.num);
    }
    isSurd() {
        return this.num instanceof Surd && this.den instanceof Surd;
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
    isZero() {
        return this.num instanceof Surd && this.den instanceof Surd ? this.num.value() == 0 : this.num == 0;
    }
    isOne() {
        return this.num instanceof Surd && this.den instanceof Surd ? this.num.isOne() && this.den.isOne() : this.num == 1 && this.den == 1;
    }
    isMinusOne() {
        return this.num instanceof Surd && this.den instanceof Surd ? this.num.isMinusOne() && this.den.isOne() : this.num == -1 && this.den == 1;
    }
    isGZero() {
        if(this.num instanceof Surd && this.den instanceof Surd) {
            return (this.num.value() > 0 && this.den.value() > 0) || (this.num.value() < 0 && this.den.value() < 0);
        } else {
            return this.num > 0;
        }
    }

    isLZero() {
        if(this.num instanceof Surd && this.den instanceof Surd) {
            return (this.num.value() < 0 && this.den.value() > 0) || (this.num.value() > 0 && this.den.value() < 0);
        } else {
            return this.num < 0;
        }
    }

    isUndefined() {
        if(this.num instanceof Surd && this.den instanceof Surd) {
            return this.den.terms.length == 1 && this.den.terms[0].a == 0;
        } else {
            return this.den == 0;
        }
    }

    str(display = false) {

        if(this.num instanceof Surd && this.den instanceof Surd) {
            if(this.den.equal(new Surd([{a: 1, r: 1}]))) {
                return `${this.num.str()}`;
            } else {
                let numstr = this.num.str();
                let denstr = this.den.str();
                return display ? `\\dfrac{${numstr}}{${denstr}}` : `\\frac{${numstr}}{${denstr}}`;
            }
            
        } else {
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
                return display ? `\\dfrac{${-this.num}}{${-this.den}}` : `\\frac{${-this.num}}{${-this.den}}`;
            }
            return display ? `\\dfrac{${this.num}}{${this.den}}` : `\\frac{${this.num}}{${this.den}}`;
        }
        
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
        if(this.num instanceof Surd && this.den instanceof Surd) {
            let newQ = this.num.div(this.den);
            this.num = newQ.num;
            this.den = newQ.den;
            
        } else {
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
                this.num = this.num/g;
                this.den = this.den/g;
            } else {
                this.num = this.num / this.den;
                this.den = 1;
            }
        }
        
    }

    equal(f) {
        this.reduced();
        f.reduced();
        if(this.num instanceof Surd && this.den instanceof Surd) {
            if(this.isUndefined()) return false;
            if(f.isSurd()) {
                if(f.den.value() == 0) return false;
                return this.num.value()/this.den.value() == f.num.value()/f.den.value();
            } else {
                return this.num.value()/this.den.value() == f.num/f.den;
            }
        } else {
            if(f.isSurd()) {
                if(f.den.value() == 0) return false;
                return this.num/this.den == f.num.value()/f.den.value();
            } else {
                return this.num/this.den == f.num/f.den;
            }
        }
    }

    scale(k) {
        return this.num instanceof Surd && this.den instanceof Surd ? new Q(this.num.scale(k), this.den) : new Q(this.num*k, this.den);
    }
    abs() {
        return this.isLZero() ? this.scale(-1) : this;
    }
    add(f) {
        // console.log('adding...')
        let newNum, newDen;
        if(this.num instanceof Surd && this.den instanceof Surd) {
            if(f.isSurd()) {
                newNum = this.num.mul(f.den).add(this.den.mul(f.num));
                newDen = this.den.mul(f.den);    
            } else {
                newNum = this.num.scale(f.den).add(this.den.scale(f.num));
                newDen = this.den.scale(f.den);    
            }
        } else {
            if(f instanceof Q && f.isSurd()) {
                newNum = f.den.scale(this.num).add(f.num.scale(this.den));
                newDen = f.den.scale(this.den);    
            } else {
                newNum = this.num*f.den + this.den*f.num;
                newDen = this.den*f.den;    
            }    
        }
        return new Q(newNum, newDen);
    }

    sub(f) {
        let nf = f.scale(-1);
        //console.log('frac sub..', f.str(), nf.str());
        return this.add(nf);
    }

    mul(f) {
        let newNum, newDen;
        if(this.num instanceof Surd && this.den instanceof Surd) {
            if(f.isSurd()) {
                newNum = this.num.mul(f.num);
                newDen = this.den.mul(f.den);    
            } else {
                newNum = this.num.scale(f.num);
                newDen = this.den.scale(f.den);    
            }
        } else {
            if(f.isSurd()) {
                newNum = f.num.scale(this.num);
                newDen = f.den.scale(this.den);    
            } else {
                newNum = this.num*f.num;
                newDen = this.den*f.den;    
            }    
        }
        return new Q(newNum, newDen);
    }

    div(f) {
        // console.log(this.num, this.den, f.num, f.den)
        let newNum, newDen;
        if(this.num instanceof Surd && this.den instanceof Surd) {
            if(f.isSurd()) {
                newNum = this.num.mul(f.den);
                newDen = this.den.mul(f.num);    
            } else {
                newNum = this.num.scale(f.den);
                newDen = this.den.scale(f.num);    
            }
        } else {
            if(f instanceof Surd && f.isSurd()) {
                newNum = f.den.scale(this.num);
                newDen = f.num.scale(this.den);    
            } else {
                newNum = this.num*f.den;
                newDen = this.den*f.num;    
            }    
        }
        return new Q(newNum, newDen);
    }
    value() {
        if(this.num instanceof Surd && this.den instanceof Surd) {
            return this.num.value() / this.num.value();
        } else {
            return this.num/this.den;
        }
    }
    mixed() {
        if(this.num < this.den) return [this];
        let q = Math.floor(this.num/this.den);
        let r = this.num % this.den;
        return [q, new Q(r, this.den)];
    }
    between(f, k) {
        let a, b;
        if(k === 0) return [];
        if(this.sub(f).isZero()) return [];
        if(this.sub(f).isLZero()) {
            a = this;
            b = f;
        } else {
            a = f;
            b = this;
        }
        
    }
}

export const F = (k) => {
    return new Q(k, 1);
}