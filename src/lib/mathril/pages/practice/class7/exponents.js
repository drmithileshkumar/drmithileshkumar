//@ts-nocheck
import {randNum, randInt, gcd, randSubset} from '$lib/mathril/utils/matlib/common';
import { NT } from '$lib/mathril/utils/matlib/nt';

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
export const exponents = (problemnumber) => {
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let r1 = randInt(10, 1);
            let r2 = randInt(10, 1);
            
            let v1 = Math.pow(r1, r2);
            let v2 = Math.pow(r2, r1); 

            let opts = ['>', '<', '='];
            let ch = v1 > v2 ? 0 : v1 < v2 ? 1 : 2; 
            values[0] = opts[ch];
            values[1] = opts[(ch + 1) % 3];
            values[2] = opts[(ch + 2) % 3];
            values[3] = 'none';
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = ` \\(${r1}^{${r2}}\\) <span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span> \\(${r2}^{${r1}}\\) `;
            break;
        }
        case 1: {
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
            // let probPrimes = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            //                   3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            //                   5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            //                   7, 7, 7, 7, 7, 7, 7, 7, 7,
            //                  11,11,11,11,11,11,11,11,
            //                  13,13,13,13,13,13,13,
            //                  17,17,17,17,17,17,
            //                  19,19,19,19,19,
            //                  23,23,23,23,
            //                  29,29,29,
            //                  31,31,
            //                  37  ];
            let nPrimes = 3;
            let pPl = primes.length - 1;
            let randIndices = randSubset(pPl, nPrimes);
            
            let p1 = primes[randIndices[0]];
            let p2 = primes[randIndices[1]];
            let p3 = primes[randIndices[2]];
            let a1 = p1 > 11 ? 1 : randInt(4, 1);
            let a2 = p2 > 11 ? 1 : randInt(4, 1);
            let a3 = p3 > 11 ? 1 : randInt(4, 1);
            let n = Math.pow(p1, a1) * Math.pow(p2, a2) * Math.pow(p3, a3);
            let nfactor = [{prime: p1, power: a1}, {prime: p2, power: a2}, {prime: p3, power: a3}];
            let nfactor1 = [{prime: p1, power: a1-1}, {prime: p2, power: a2}, {prime: p3, power: a3}];
            let nfactor2 = [{prime: p1, power: a1}, {prime: p2, power: a2-1}, {prime: p3, power: a3}];
            let nfactor3 = [{prime: p1, power: a1}, {prime: p2, power: a2}, {prime: p3, power: a3-1}];
            let nStr1 = nfactor.map(pf => pf.prime + '^{' + pf.power + '}').join("\\times");
            let nStr2 = nfactor1.map(pf => pf.prime + '^{' + pf.power + '}').join("\\times");
            let nStr3 = nfactor2.map(pf => pf.prime + '^{' + pf.power + '}').join("\\times");
            let nStr4 = nfactor3.map(pf => pf.prime + '^{' + pf.power + '}').join("\\times");
            
            values[0] = `\\(${nStr1}\\)`
            values[1] = `\\(${nStr2}\\)`
            values[2] = `\\(${nStr3}\\)`
            values[3] = `\\(${nStr4}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `The prime factorization of ${n} is `
            break;
        }
        case 2: {
            let a = randInt(100, 2);
            let m = randInt(100, 2);
            let n = randInt(100, 2);
            values[0] = `\\({${a}}^{${m + n}}\\)`;
            values[1] = `\\({${a}}^{${m - n}}\\)`;
            values[2] = `\\({${a}}^{${m}}\\)`;
            values[3] = `\\({${a}}^{${m + n + 1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\({${a}}^{${m}}\\times {${a}}^{${n}} = \\)`
        }
        case 3: {
            let a = randInt(100, 2);
            let m = randInt(100, 2);
            let n = randInt(100, 2);
            values[0] = `\\({${a}}^{${m - n}}\\)`;
            values[1] = `\\({${a}}^{${m + n}}\\)`;
            values[2] = `\\({${a}}^{${m}}\\)`;
            values[3] = `\\({${a}}^{${m + n + 1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\({${a}}^{${m}}\\div {${a}}^{${n}} = \\)`
        }
        case 4: {
            let a = randInt(100, 2);
            let m = randInt(100, 2);
            let n = randInt(100, 2);
            values[0] = `\\({${a}}^{${m * n}}\\)`;
            values[1] = `\\({${a}}^{${m + n}}\\)`;
            values[2] = `\\({${a}}^{${m - n}}\\)`;
            values[3] = `\\({${a}}^{${m + n + 1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `\\(({${a}}^{${m}})^{${n}} = \\)`
        }
    }
    problemset = problemset;
    return problemset;
}