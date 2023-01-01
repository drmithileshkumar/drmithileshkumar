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
export const determinants = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let I = randInt(10, 1);
            


            values[0] = `\\(A_{${I}\\times ${I}}\\)`;
            values[1] = `\\(A_{${I+1}\\times ${I}}\\)`;
            values[2] = `\\(A_{${I}\\times ${I+1}}\\)`;
            values[3] = `\\(A_{${I}\\times ${I-1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `For which matrix \\(A\\), can the determinant be defined?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}