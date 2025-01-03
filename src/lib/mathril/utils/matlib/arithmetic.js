//@ts-nocheck
import { randInt, setEqual, lcm, gcd } from './common';

export class Arithmetic {
    constructor(V, L=null, R=null) {
        this.V = V;
        this.L = L;
        this.R = R;
    }
    randomNode(m, n, ops, nops) {
        let r = Math.random();
        if(nops === 0 || r < 0.5) return new Arithmetic(randInt(m, n));
        let l = ops.length - 1;
        let index = randInt(l, 0);
        return new Arithmetic(ops[index]);
    }
    static randomArithmetic(m, n, ops, nops) {//max, min
        if(nops === 0) return new Arithmetic(randInt(m, n));
        let index = Math.floor(Math.random() * ops.length)
        let randomOp = ops[index];
        let L = Arithmetic.randomArithmetic(m, n, ops, nops - 1);
        let R = Arithmetic.randomArithmetic(m, n, ops, nops - 1);
        return new Arithmetic(randomOp, L, R);
    }
    str() {
        if(this.L && this.R) {
            let l = this.L.str();
            let r = this.R.str();
            switch(this.V) {
                case '+': {
                    return ((typeof l === 'number') ? l : '(' + l + ')') + ' + ' + ((typeof r === 'number') ? r : '(' + r + ')')
                }
                case '-': {
                    return ((typeof l === 'number') ? l : '(' + l + ')') + ' - ' + ((typeof r === 'number') ? r : '(' + r + ')')
                }
                case '*': {
                    return ((typeof l === 'number') ? l : '(' + l + ')') + '\\times' + ((typeof r === 'number') ? r : '(' + r + ')')
                }
                case '/': {
                    return ((typeof l === 'number') ? l : '(' + l + ')') + ' \\div ' + ((typeof r === 'number') ? r : '(' + r + ')')
                }case '^': {
                    return ((typeof l === 'number') ? l : '(' + l + ')') + ' ^ ' + ((typeof r === 'number') ? r : '(' + r + ')')
                }
            }
        } else {
            return this.V
        }
    }
    value() {
        switch(this.V) {
            case '+': return this.L.value() + this.R.value();
            case '-': return this.L.value() - this.R.value();
            case '*': return this.L.value() * this.R.value();
            case '/': {
                const rightVal = this.R.value();
                return rightVal !== 0 ? this.L.value() / rightVal : Infinity;
                break;
            }
            case '^': return this.L.value() ** this.R.value();
            default: return parseFloat(this.V);
        }
    }
}