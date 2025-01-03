//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';

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
export const algebra = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let x = randInt(10, 1);
            let a = randInt(10, 2);
            let b = randInt(a - 1, 1);
            let expr = a + 'x + ' + b;


            values[0] = a * x + b;
            values[1] = b * x - b;
            values[2] = b * x + a;
            values[3] = a * x + a;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the value of the expression \\(${expr}\\) at \\(x = ${x}\\) ?`;
            break;
        }
        case 1: {
            let x = randInt(10, 1);
            let a = randInt(10, 1);
            let b = a === 1 ? 0 : randInt(a - 1, 1);
            let c = a * x + b;
            let expr = ( a === 1 ? '' : a) + 'x + ' + b;


            values[0] = x;
            values[1] = x + 1;
            values[2] = x - 1;
            values[3] = x + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the value of \\(x\\) that satisfies \\(${expr} = ${c}\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}