//@ts-nocheck
import {randNum, randInt,randSubset} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
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
    let N = 2;
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
        case 1: {
            let nroots = randInt(4, 2);
            let roots = randSubset(10, nroots);
            let p = new Polynomial();
            p = p.fromRoots(roots);
            let factors = [];
            let missingRoot = randInt(roots.length - 1, 0);
            for(let i = 0; i < roots.length; i++) {
                if(i !== missingRoot) {
                    if(roots[i] === 0) {
                        factors.push("x");
                    } else {
                        factors.push("(x - " + roots[i] + ")");
                    }
                } else {
                    factors.push("(x - a)")
                }
            }
            let numerator = factors.join('');
            let denominator = p.str();
            values[0] = roots[missingRoot];
            values[1] = roots[missingRoot] + 1;
            values[2] = roots[missingRoot] - 1;
            values[3] = roots[missingRoot] +2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `For what value of \\(a\\), the following is continuous everywhere \\[\\frac{${numerator}}{${denominator}}\\]`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}