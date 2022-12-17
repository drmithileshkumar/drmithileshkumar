import * as _F from './fraction';
export class Quadratic {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    str() {
        let eq = '';
        if(this.a != 0 || this.b != 0 || this.c != 0) {
             if ( this.a != 0 ) {
                eq += this.a == 1 ? 'x^2' : this.a == -1 ? '-x^2' : `${this.a}x^2`;
             }
             if ( this.b != 0 ) {
                 if(eq.length > 0)
                    eq += this.b == 1 ? '+x' : this.b == -1 ? '-x' : this.b < 0 ? `${this.b}x` : `+${this.b}x`;
                 if(eq.length == 0)
                    eq += this.b == 1 ? 'x' : this.b == -1 ? '-x' : `${this.b}x`;
             }
             if ( this.c != 0 ) {
                if(eq.length > 0)
                    eq += this.c > 0 ? `+${this.c}` : `${this.c}`;
                if(eq.length == 0) 
                    eq += this.c;
             }
             return eq;
        } else {
            return 0;
        }
    }
    d() {
        return this.b*this.b - 4* this.a * this.c;
    }
    hasRealRoots() {
        return this.d() >= 0;
    }
    hasEqualRoots() {
        return this.d() === 0;
    }
    value(x) {
        return this.a * x * x + this.b * x + this.c;
    }
    realRoots() { // TODO complete roots
        if(a === 0) {
            if(b === 0) return [];
            return [-this.c/this.b];
        }
        if(!this.hasRealRoots()) return [];
        else {
            if(this.hasEqualRoots()) {
                return [-this.b/(2*this.a)]
            } else {
                let sd = Math.sqrt(this.d());
                return [(-this.b+sd)/(2*this.a), (-this.b-sd)/(2*this.a)]
            }
        }
    }
}