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
export const relations = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let maxA = randInt(30, 20); 
            let minA = randInt(5, 0);
            let kA = randInt(4, 2);
            let A = new Sets();
            A.randomSet(minA, maxA, kA);
            let maxB = randInt(30, 20); 
            let minB = randInt(5, 0);
            let kB = randInt(4, 2);
            let B = new Sets();
            B.randomSet(minB, maxB, kB);
            let R = A.cartesian(B);
            let RW = B.cartesian(A);
            let RD = kA > kB ? A.krandomSubset(kB).dot(B) : kA < kB ? A.dot(B.krandomSubset(kA)) :  A.dot(B);
            
            values[0] = `\\(${R.str()}\\)`;
            values[1] = `\\(${RD.str()}\\)`;
            values[2] = `\\(${R.randomSubset().str()}\\)`;
            values[3] = `\\(${RW.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The Cartesian product of sets \\(A = ${A.str()}\\) and \\(B = ${B.str()}\\)`;
            break;
        }
        case 1: {
            let n = randInt(5, 2);
            let s = new Polynomial([], 'i');
            s.randPoly(3, 3, 0);
            let cp = 1;
            let cp1 = 0;
            let pv;
            for(let i = 1; i <= n; i++) {
                pv = s.value(i);
                cp = cp*pv;
                cp1 += pv;
            }

            values[0] = cp;
            values[1] = cp + 1;
            values[2] = pv;
            values[3] = cp - 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Consider a collection of sets \\(A_i\\) of sizes \\(n(i) = ${s.str()}\\). Then the size of their Cartesian product \\(A_1\\times \\cdots \\times A_n\\) if \\(n = ${n}\\) will be`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}