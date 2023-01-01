import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Polynomial} from '$lib/utils/common/polynomial';
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
    let N = 1;
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
    }
    problemset = problemset;
    return problemset;
}