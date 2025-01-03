//@ts-nocheck
import {Point2D} from '$lib/mathril/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/mathril/utils/common/common';
import {Sets} from '$lib/mathril/utils/common/sets';
import { Q } from '$lib/mathril/utils/common/fraction';
import {Complex} from '$lib/mathril/utils/common/complex';
import {randomLinearInt} from '$lib/mathril/utils/common/expression';
import { Quadratic } from '$lib/mathril/utils/common/quadratic';
import * as _In from '$lib/mathril/utils/common/inequalities';
import * as _PC from '$lib/mathril/utils/common/combinatorics';
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
export const binomial = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(100, 10);
            let k = randInt(n+1, 1);
            let a = randInt(100, 5);
            let b = randInt(a-1, 1);
            let sign = Math.random() < 0.5 ? '+' : '-';
            let bs = sign == '+' ? b : -b;
            


            values[0] = `\\(${_PC.ktermTex(a, bs, n, k)}\\)`;
            values[1] = `\\(${_PC.ktermTex(a, bs, n, k % (n + 1) + 1)}\\)`;
            values[2] = `\\(${_PC.ktermTex(a, -bs, n, k % (n + 1) + 2)}\\)`;
            values[3] = `\\(${_PC.ktermTex(a, -bs, n, k % (n + 1)-1)}\\)`;
            
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the ${k}th term in the Binomial expansion of \\((${a} ${sign} ${b})^{${n}}\\) ?`;
            break;
        }
        case 1: {
            let n = randInt(15, 5);
            let k = randInt(n + 1, 1);
            let a = randInt(5, 1);
            let b = randInt(a - 1, 1);
            let sign = Math.random() < 0.5 ? '+' : '-';
            let bs = sign == '+' ? b : -b;

            values[0] = `\\(${_PC.ktermTex(a, bs, n, k)}\\)`;
            values[1] = `\\(${_PC.ktermTex(a, bs, n, k % (n + 1) + 1)}\\)`;
            values[2] = `\\(${_PC.ktermTex(a, -bs, n, k % (n + 1) + 2)}\\)`;
            values[3] = `\\(${_PC.ktermTex(a, -bs, n, k % (n + 1) - 1)}\\)`;

            for (let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }

            problemset.s = `What is the coefficient of the ${k}th term in the binomial expansion of \\((${a} ${sign} ${b})^{${n}}\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}