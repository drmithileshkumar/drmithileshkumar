//@ts-nocheck
import {randInt, digits} from './common';
import { Q } from '$lib/mathril/utils/matlib/fraction';

export class NonTerminating {
    constructor(n = 0, d = 0, r = 0) {//n = fixed integer part, d = fixed decimal part, r = repeating
        this.n = n;
        this.d = d;
        this.r = r;
    }
    randomNonTerminating(limit = 1000000) {//convert 
        let M = randInt(limit, 1);
        let ds = digits(M);
        let d = ds.length;
        
        let decimalDegits = randInt(d, 1);
        let rDigits = randInt(decimalDegits, 1);
        this.r = M % (Math.pow(10, rDigits));
        let t1 = (M - this.r) / Math.pow(10, rDigits);
        this.d = t1 % (Math.pow(10, decimalDegits));
        this.n = (t1 - this.d) / Math.pow(10, decimalDegits);
    }
    toRational() {
        let decimalDegi = digits(this.d);
        let decimalDegits = decimalDegi.length;
        let rDi = digits(this.r);
        let rDigits = rDi.length;
        let part1 = new Q(this.n, 1);
        let part2 = new Q(this.d, Math.pow(10, decimalDegits));
        let part3 = new Q(this.r, Math.pow(10, decimalDegits) * (Math.pow(10, rDigits) - 1));
        part2.reduced();
        part3.reduced();

        let rational = part1.add(part2).add(part3);
        rational.reduced();
        return rational;
    }
    str() {
        return this.n + '.' + this.d + `\\overline{${this.r}}`;
    }
}
