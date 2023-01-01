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
export const appDerivatives = (problemnumber) => {
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
            let p = new Polynomial([], 't');
            p.randPoly(n, max, min);
            let pdash = p.derivative();
            let t = randInt(3, 0);
            let s = p.str();
            if(s.length == 0) s = 0;
            values[0] = `\\(${pdash.value(t)}\\)`;
            values[1] = `\\(${pdash.value(t-1)}\\)`;
            values[2] = `\\(${pdash.value(t+1)}\\)`;
            values[3] = `\\(${pdash.value(t-2)}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `At any point of time \\(t\\), the area of a region covered by trees is given by \\(f(t) = ${s}\\). What is the rate of change of the area at time \\(t = ${t}\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}