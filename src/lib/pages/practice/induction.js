import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/utils/common/common';
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
export const induction = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let limit = randInt(10, 5);
            let A = new Sets();
            A.interval(1, limit);
            let missing = A.randomSubset();
            let baseN = missing.length <= 0 ? 1 : missing.e[missing.e.length - 1] + 1;
            
            let initial = A.diff(missing);
            
            let expr = '';
            for(let i = 0; i < initial.e.length; i++) {
                expr = expr + initial.e[i] + '^2+';
            }
            
            for( let j = 1; j < 3; j++) {
                expr = expr + (limit+j) + '^2+'; 
            }
            expr = expr + '\\cdots + ' + 'n^2';
            
            values[0] = baseN;
            values[1] = 1;
            values[2] = baseN - 1;
            values[3] = baseN + 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the least value of \\(n\\) as base case for mathematical induction to get a formula for \\[${expr}\\]`;
            break;
        }
        case 1: {
            
            let a = randInt(10, 2);
            let A = randInt(10, 2);
            let b = A - 1;
            let B = A; while(B == A) B = randInt(10, 2);
            let C = B * (B - A);
            let S0 = a * A + b * B + C;
            let res = C * (A - 1) * (B - 1);
            let d = gcd(S0, res);
            let sign = C > 0 ? '+' : '-';
            values[0] = d;
            values[1] = d + 1;
            values[2] = d - 1;
            values[3] = d + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `For \\(n\\geq 1\\), the expression \\(P(n) = ${a}\\cdot ${A}^n + ${b}\\cdot ${B}^n ${sign} ${Math.abs(C)}\\) is divisible by`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}