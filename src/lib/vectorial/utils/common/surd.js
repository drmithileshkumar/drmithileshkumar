import * as NT from './nt';
import { powerset } from './sets';
import { Q } from './fraction';
import { randInt } from './common';
export class Surd {// natural radicals
    constructor(terms = []) { // [{a: 1, r: 1}]
        this.terms = terms;
    }
    reduced() {

        for(let i = 0; i < this.terms.length; i++) {
            if(this.terms[i].r !== 1) {
                //console.log('reduced surds...', this.terms[i].r)
                let {a, r} = NT.filterSquare(this.terms[i].r);
                let an = a.length > 0 ? a.map(item => Math.pow(item.prime, item.power)).reduce((x, y) => x * y) : 1;
                let rn = r.length > 0 ? r.map(item => Math.pow(item.prime, item.power)).reduce((x, y) => x * y) : 1;
                this.terms[i].a *= an;
                this.terms[i].r = rn;
            }
        }
        this.removeDuplicates();
        
    }
    removeDuplicates() {
        if(this.terms.length > 1) {
            let markTerms = new Array(this.terms.length);
            for(let i = 0; i < this.terms.length; i++) {
                markTerms[i] = true;
            }
            for(let i = 0; i < this.terms.length; i++) {
                if(markTerms[i]) {
                    for(let j = i + 1; j < this.terms.length; j++) {
                        if(this.terms[i].r == this.terms[j].r) {
                            this.terms[i].a += this.terms[j].a;
                            markTerms[j] = false;
                        }
                    }
                }    
            }
            this.terms = this.terms.filter(index => markTerms[index]);
            this.terms = this.terms.filter(term => term.a != 0 || term.r == 1);
            this.sortR();
        }
    }
    sortR() {
        this.terms.sort((a, b) => a.r - b.r);
    }
    value() {
        let val = 0;
        for(let term of this.terms) {
            val += term.a * Math.sqrt(term.r);
        }
        return val;
    }
    randomPureSurd(max) {
        this.terms.push({a: randInt(max, 2), r: randInt(max, 2)})
    }
    randomSurd(max) {
        let n = randInt(4, 2);
        this.terms.push({a: randInt(max, 2), r: 1})
        for(let i = 1; i < n; i++) {
            this.terms.push({a: randInt(max, 2), r: randInt(max, 2)});
        }
    }
    equal(s) {
        this.reduced();
        s.reduced();
        if(this.terms.length != s.terms.length) return false;
        for(let i = 0; i < this.terms.length; i++) {
            if(this.terms[i].a != s.terms[i].a || this.terms[i].r != s.terms[i].r)
                return false;
        }
        return true;
    }
    isNum() {
        return this.terms.length == 1 && this.terms[0].r == 1;
    }
    isOne() {
        return this.isNum() && this.terms[0].a == 1;
    }
    isMinusOne() {
        return this.isNum() && this.terms[0].a == -1;
    }
    isZero() {
        return this.value() == 0;
    }
    isGZero() {
        return this.value() > 0;
    }
    isLZero() {
        return this.value() < 0;
    }
    scale(k) {
        let newSurd = new Surd();
        for(let term of this.terms) {
            newSurd.terms.push({a: k*term.a, r: term.r});
        }
        return newSurd;
    }
    add(s) {
        this.reduced();
        s.reduced();
        let newSurd = new Surd();
        let matched = new Array(s.terms.length);
        for(let i = 0; i < s.terms.length; i++) {
            matched[i] = false;
        }
        for(let i = 0; i < this.terms.length; i++) {
            newSurd.terms.push(this.terms[i]);
            for(let j = 0; j < s.terms.length; j++) {
                if(this.terms[i].r == s.terms[j].r) {
                    matched[j] = true;
                    newSurd.terms[i].a += s.terms[j].a;
                }
            }
        }
        for(let i = 0; i < s.terms.length; i++) {
            if(!matched[i]) {
                newSurd.terms.push(s.terms[i]);
            }
        }
        newSurd.terms = newSurd.terms.filter(term => term.a != 0 || term.r == 1);
        return newSurd;
    }
    sub(s) {
        this.reduced();
        s.reduced();
        let newS = s.scale(-1);
        return this.add(newS);
    }
    termMul(s) {
        let newSurd = new Surd();
        for(let term of this.terms) {
            newSurd.push({a: term.a * s.a, r: term.r * s.r});
        }
    }
    mul(s) {
        //console.log('mul...', this.str(), s.str())
        this.reduced();
        s.reduced();
        //console.log('mul1...', this.str(), s.str())
        let newSurd = new Surd();
        
        let newTerm;
        for(let i = 0; i < this.terms.length; i++) {
            for(let j = 0; j < s.terms.length; j++) {
                //console.log(this.terms[i].a * s.terms[j].a, this.terms[i].r * s.terms[j].r, this.terms.length, s.terms.length);
                newTerm = {a: this.terms[i].a * s.terms[j].a, r: this.terms[i].r * s.terms[j].r};
                newSurd.terms.push(newTerm);
            }
        }
        newSurd.reduced();
        return newSurd;
    }
    flipSign(sign) {
        let newSurd = new Surd();
        newSurd.terms.push(this.terms[0]);
        let term;
        for(let i = 1; i < this.terms.length; i++) {
            term = sign[i-1] == '0' ? {a: -Math.abs(this.terms[i].a), r:this.terms[i].r} : {a: Math.abs(this.terms[i].a), r:this.terms[i].r};
            newSurd.terms.push(term);
        }
        return newSurd;
    }
    conjugate() {
        if(this.terms.length == 1) return this;
        if(this.terms.length == 2) {
            let newSurd = new Surd();
            newSurd.terms.push(this.terms[0]);
            newSurd.terms.push(this.terms[1]);
            newSurd.terms[1].a = -newSurd.terms[1].a;
            return newSurd;
        }
        let signs = powerset(this.terms.length - 1);
        let conj = new Surd();
        conj.terms.push({a: 1, r: 1});
        let thisSign = '';
        for(let i = 1; i < this.terms.length; i++) {
            if(this.terms[i].a < 0) {
                thisSign += 0;
            } else {
                thisSign += 1;
            }
        }
        for(let sign of signs) {
            if(sign != thisSign) {
                conj = conj.mul(this.flipSign(sign));
            }
        }
        return conj;
    }
    gcd(a, b) { 
        
        if (b > a) {var temp = a; a = b; b = temp;}
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }
    }
    gcda() {
        let g = this.terms[0].a;
        for(let i = 1; i < this.terms.length; i++) {
            if(this.terms[i].a !== 0)
                g = this.gcd(g, this.terms[i].a);
        }
        return g;
    }
    div(s) {
        let conj = s.conjugate();
        //console.log(s.str());
        //console.log(conj.str());
        let den = s.mul(conj);
        let num = this.mul(conj);
        let g = num.gcda();
        let g1 = this.gcd(g, den.terms[0].a);
        if(g1 !== 0) {
            for(let i = 0; i < num.terms.length; i++) {
                num.terms[i].a = num.terms[i].a/g1;
            }
            den.terms[0].a = den.terms[0].a/g1;
        }
        return new Q(num, den);
    }
    str() {
        let factor = '';
        let str = '';
        if(this.terms.length == 0) return '';
        
        let i = 0;
        if(this.terms[i].a == 0) {
            str = str + '';
        } else if(this.terms[i].a > 0) {
            factor = this.terms[i].a == 1 && this.terms[i].r !== 1 ? '' : this.terms[i].a; 
            
        } else {
            factor = this.terms[i].a == -1 && this.terms[i].r !== 1? '-' : this.terms[i].a;
            
        }
        
        str += this.terms[i].r !== 1 ? factor + `\\sqrt{${this.terms[i].r}}` : factor;
        
        for(i = 1; i < this.terms.length; i++) {
            if(this.terms[i].a == 0) {
                str = str + '';
            } else if(this.terms[i].a > 0) {
                factor = this.terms[i].a == 1 ? '' : this.terms[i].a; 
                str += this.terms[i].r !== 1 ? '+' + factor + `\\sqrt{${this.terms[i].r}}` : '+' + factor;
            } else {
                factor = this.terms[i].a == -1 ? '-' : this.terms[i].a;
                str += this.terms[i].r !== 1 ? factor + `\\sqrt{${this.terms[i].r}}` : factor;
            }
        }
        return str;
    }
    
}