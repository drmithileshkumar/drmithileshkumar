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
export const differentiability = (problemnumber) => {
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
            let p = new Polynomial();
            p.randPoly(n, max, min);
            let k = randInt(100, -100);
            let pdash = p.derivative();
            let s = p.str();
            if(s.length == 0) s = 0;

            values[0] = `\\(${k}\\cdot (${pdash.str()}) \\cdot (${p.str()})^{${k - 1}}\\)`;
            values[1] = `\\((${pdash.str()}) \\cdot (${p.str()})^{${k - 1}}\\)`;
            values[2] = `\\(${k}\\cdot (${pdash.str()}) \\cdot (${p.str()})^{${k}}\\)`;
            values[3] = `\\(${k}\\cdot (${p.str()})^{${k - 1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The derivative of the function \\[f(x) = (${s})^{${k}}\\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}