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
export const matrices = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let I =  randInt(10, 1);
            let J =  randInt(10, 1);


            values[0] = `\\(${ randInt(2*I, I)}\\times ${ randInt(2*J, J)}\\)`;
            values[1] = `\\(${ randInt(I-1, 0)}\\times ${ randInt(J-1, 0)}\\)`;
            values[2] = `\\(${ randInt(I-1, 0)}\\times ${ randInt(10, 0)}\\)`;
            values[3] = `\\(${ randInt(10, 0)}\\times ${ randInt(J-1, 0)}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Let \\(a_{ij}\\) be an element of a matrix \\(A\\). If \\(i = ${I}\\) and \\(j = ${J}\\), then what can be the order of \\(A\\)?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}