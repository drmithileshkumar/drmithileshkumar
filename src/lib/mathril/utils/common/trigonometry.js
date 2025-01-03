import { Q } from "./fraction";
import { Surd } from "./surd";
export class sin {
    constructor(a = new Q()) {
        this.a = a;
    }
    value() {
        let angle = new Q();
        let negative = false;
        if(this.a.isLZero()) {
            negative = true;
            angle.num = -this.a.num;
            angle.den = this.a.den;
        } else {
            angle.num = this.a.num;
            angle.den = this.a.den;
        }
        angle.reduced();
        if(Math.floor(angle.num/angle.den) >= 2) {
            angle.num = angle.num % angle.den + val.den * (Math.floor(angle.num/angle.den) % 2);
        }
        if(angle.sub(new Q(1, 2)).isGZero()) {
            if(angle.sub(new Q(1)).isLZero()) {
                angle.num = angle.den - angle.num;
            } else if(angle.sub(new Q(3, 2))) {
                negative = !negative;
                angle.num = angle.num - angle.den;
            } else if(angle.sub(new Q(2))) {
                negative = !negative;
                angle.num = 2*angle.den - angle.num;
            }
        }
        let val = new Q();
        //console.log(angle.str());
        let ns, ds;
        if(angle.equal(new Q())) {
            val = new Q();
        } else if(angle.equal(new Q(1, 6))) {
            val = new Q(1, 2);
        } else if(angle.equal(new Q(1, 4))) {
            ns = new Surd([{a:1,r:1}]);
            ds = new Surd([{a:1, r:2}]);
            val = new Q(ns, ds);
            //console.log(ns.str(), ds.str(), val.str());
        } else if(angle.equal(new Q(1, 3))) {
            ns = new Surd([{a:1,r:3}]);
            ds = new Surd([{a:2,r:1}]);
            val = new Q(ns, ds);
            //console.log(ns.str(), ds.str(), val.str());
        } else if(angle.equal(new Q(1,2))) {
            val = new Q(1, 1);
        } else {
            val = new Q(Math.sin(this.a.value() * Math.PI), 1);
        }
        return !negative ? val : val.scale(-1);
    }
    astr() {
        if(this.a.isZero()) return '0';
        if(this.a.equal(new Q(1))) return '\\pi';
        if(this.a.equal(new Q(-1))) return '-\\pi';
        if(this.a.num == 1 && this.a.den !== 1) return `\\frac{\\pi}{${this.a.den}}`;
        if(this.a.num == -1 && this.a.den !== 1) return `-\\frac{\\pi}{${this.a.den}}`;
        return this.a.isLZero() ? `-\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}` : `\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}`;
    }
    str() {
        return `\\sin(${this.astr()})`;
    }
}
export class cos {
    constructor(a = new Q()) {
        this.a = a;
    }
    value() {
        let theta = new Q(1, 2);
        let newtheta = theta.sub(this.a);
        let si = new sin(newtheta);
        //console.log('cos to sin..', newtheta.str());
        return si.value();
    }
    astr() {//angle string
        //console.log('astr..', this.a.str());
        if(this.a.isZero()) return '0';
        if(this.a.equal(new Q(1))) return '\\pi';
        if(this.a.equal(new Q(-1))) return '-\\pi';
        if(this.a.num === 1 && this.a.den !== 1) return `\\frac{\\pi}{${this.a.den}}`;
        if(this.a.num === -1 && this.a.den !== 1) return `-\\frac{\\pi}{${this.a.den}}`;
        //console.log('astr..', this.a.str());
        return this.a.isLZero() ? `-\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}` : `\\frac{${this.a.num}\\pi}{${this.a.den}}`;
    }
    str() {
        return `\\cos(${this.astr()})`;
    }
}
export class tan {
    constructor(a = new Q()) {
        this.a = a;
    }
    value() {
        if(this.a.equal(new Q())) {
            return new Q();
        } else if(this.a.equal(new Q(1, 6))) {
            return new Q(new Surd([{a:1,r:1}]), new Surd([{a:1, r:3}]));
        } else if(this.a.equal(new Q(1, 4))) {
            return new Q(1);
        } else if(this.a.equal(new Q(1, 3))) {
            return new Q(new Surd([{a:1,r:3}]), new Surd([{a:1,r:1}]));
        } else if(this.a.equal(new Q(1))) {
            return new Q();
        } else if(this.a.equal(new Q(-1, 6))) {
            return new Q(new Surd([{a:-1,r:1}]), new Surd([{a:1, r:3}]));
        } else if(this.a.equal(new Q(-1, 4))) {
            return new Q(-1);
        } else if(this.a.equal(new Q(-1, 3))) {
            return new Q(new Surd([{a:-1,r:3}]), new Surd([{a:1,r:1}]));
        } else if(this.a.equal(new Q(-1))) {
            return new Q();
        } else {
            return new Q(Math.tan(this.a.value), 1);
        }
    }
    astr() {
        if(this.a.isZero()) return '0';
        if(this.a.equal(new Q(1))) return '\\pi';
        if(this.a.equal(new Q(-1))) return '-\\pi';
        if(this.a.num == 1 && this.a.den !== 1) return `\\frac{\\pi}{${this.a.den}}`;
        if(this.a.num == -1 && this.a.den !== 1) return `-\\frac{\\pi}{${this.a.den}}`;
        return this.a.isLZero() ? `-\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}` : `\\frac{${Math.abs(this.a.num)}\\pi}{${Math.abs(this.a.den)}}`;
    }
    str() {
        return `\\tan(${this.astr()})`;
    }
}