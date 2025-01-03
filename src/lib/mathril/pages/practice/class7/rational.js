//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';

import { Q } from '$lib/mathril/utils/matlib/fraction';

let problemset = {
    s: "",
    o: {
            'A': '',
            'B': "",
            'C': "",
            'D': ''
        },
    c: ""
};
export const rational = (problemnumber) => {
    let N = 5;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let f = new Q();
            f.randF(10, 10, true);
            f.reduced();
            let factor = randInt(10, 1);
            let factors = [];
            for(let i = 0; i < 3; i++) {
                factors.push(new Q(f.num * (factor + i), f.den * (factor + i)))
            }
            let ans = new Q(f.num * (factor), f.den * (factor + 1))
            

            values[0] = `\\(${ans.str()}\\)`;
            values[1] = `\\(${factors[0].str()}\\)`;
            values[2] = `\\(${factors[1].str()}\\)`;
            values[3] = `\\(${factors[2].str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which rational number is not equivalent to \\(${f.str()}\\)`;
            break;
        }
        case 1: {
            let f1 = new Q();
            f1.randF(20, 20);
            let f2 = new Q();
            f2.randF(20, 20);
            let f = f1.add(f2);
            f.reduced();
            values[0] = `\\(${f.str()}\\)`;
            values[1] = `\\(${f.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${f.add(new Q(-1)).str()}\\)`;
            values[3] = `\\(${f.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\(${f1.str()} + ${f2.str()} = \\)`;
            break;
        }
        case 2: {
            let f1 = new Q();
            f1.randF(20, 20);
            let f2 = new Q();
            f2.randF(20, 20);
            let f = f1.sub(f2);
            f.reduced();
            values[0] = `\\(${f.str()}\\)`;
            values[1] = `\\(${f.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${f.add(new Q(-1)).str()}\\)`;
            values[3] = `\\(${f.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\(${f1.str()} - ${f2.str()} = \\)`;
            break;
        }
        case 3: {
            let f1 = new Q();
            f1.randF(20, 20);
            let f2 = new Q();
            f2.randF(20, 20);
            let f = f1.mul(f2);
            f.reduced();
            values[0] = `\\(${f.str()}\\)`;
            values[1] = `\\(${f.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${f.add(new Q(-1)).str()}\\)`;
            values[3] = `\\(${f.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\(${f1.str()} \\times ${f2.str()} = \\)`;
            break;
        }
        case 4: {
            let f1 = new Q();
            f1.randF(20, 20);
            let f2 = new Q();
            f2.randF(20, 20);
            let f = f1.div(f2);
            f.reduced();
            values[0] = `\\(${f.str()}\\)`;
            values[1] = `\\(${f.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${f.add(new Q(-1)).str()}\\)`;
            values[3] = `\\(${f.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\(${f1.str()} \\div ${f2.str()} = \\)`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}