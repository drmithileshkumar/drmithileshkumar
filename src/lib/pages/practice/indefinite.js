import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
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
export const indefinite = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let n = randInt(5, 2);
            let max = randInt(5, 1);
            let min = -max; 
            let p = new Polynomial([], 'x');
            p.randPoly(n, max, min);
            
            let pint = p.integrate();
            
            let pdash = p.derivative();
            
            let x = new Polynomial([{a: 1, r: 1}], 'x');
            pdash = pdash.mul(x);
            
            values[0] = `\\(${pint.str()} + C\\)`;
            values[1] = `\\(${pint.str()}\\)`;
            values[2] = `\\(${pdash.str()}\\)`;
            values[3] = `\\(${pdash.str()} + C\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Integrate \\(f(x) = ${p.str()}\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}