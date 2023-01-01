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
export const continuity = (problemnumber) => {
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
            let max = randInt(5, 0);
            let min = -max;
            let p = new Polynomial();
            p.randPoly(n, max, min);
            let k = randInt(3, -3);
            let p0 = p.value(k);
            let s = p.str();
            if(s.length == 0) s = 0;

            values[0] = `\\(${p0}\\)`;
            values[1] = `\\(${p0 + 1}\\)`;
            values[2] = `\\(${p0 - 1}\\)`;
            values[3] = `\\(${p0 + 2}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `For which value of \\(\\alpha\\) the function is  continuous at \\(x = ${k}\\) \\[
                f(x)=\\begin{cases}
                    ${s} & x \\neq ${k} \\\\
                    \\alpha & x = ${k}
                \\end{cases}
                \\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}