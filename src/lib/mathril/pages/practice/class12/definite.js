//@ts-nocheck
import {Point2D} from '$lib/mathril/utils/common/point2d';
import {randNum, randInt} from '$lib/mathril/utils/common/common';
import {Sets} from '$lib/mathril/utils/common/sets';
import { Q } from '$lib/mathril/utils/common/fraction';
import {Polynomial} from '$lib/mathril/utils/common/polynomial';
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
export const definite = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a =  randInt(5, -5);
            let b =  randInt(5, -5);
            let n =  randInt(5, 2);
            let max =  randInt(5, 1);
            let min = -max; 
            let p = new Polynomial([], 'x');
            p.randPoly(n, max, min);
            
            let pint = p.dintegrate(a, b);
            pint.reduced();
            
            values[0] = `\\(${pint.str()}\\)`;
            values[1] = `\\(${pint.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${pint.sub(new Q(1)).str()}\\)`;
            values[3] = `\\(${pint.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Integrate \\[\\int_{${a}}^{${b}}(${p.str()})\\,dx\\]`;
            break;
        }
        case 1: {//1/(ax + b)
            let a = randInt(10, 2);
            let b = randInt(10, 2);
            let l1 = randInt(10, 5);
            let l2 = randInt(l1 - 1, 0);
            let v1 = a * l1 + b;
            let v2 = a * l2 + b;
            values[0] = `\\(\\dfrac{1}{${a}}[\\log(${v1}) - \\log(${v2})]\\)`
            values[1] = `\\(${a}[\\log(${v2}) - \\log(${v1})]\\)`
            values[2] = `\\(${a}[\\log(${v1}) - \\log(${v2})]\\)`
            values[3] = `\\(\\dfrac{1}{${a}}[\\log(${v2}) - \\log(${v1})]\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Integrate \\[\\int_{${l2}}^{${l1}}\\frac{1}{${a}x + ${b}}\\,dx\\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}