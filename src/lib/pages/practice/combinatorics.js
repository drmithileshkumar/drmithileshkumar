import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Complex} from '$lib/utils/common/complex';
import {randomLinearInt} from '$lib/utils/common/expression';
import { Quadratic } from '$lib/utils/common/quadratic';
import * as _In from '$lib/utils/common/inequalities';
import * as _PC from '$lib/utils/common/combinatorics';
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
export const combinatorics = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let k = randInt(8, 5);
            let s = new Sets();
            s.randomSet(1, 9, k);
            let d = randInt(k-1, Math.floor(k/2));
            let permission = Math.random() < 0.5 ? '' : 'not';
            let digits = s.str();
            let n = permission == 'not' ? _PC.nprTex(k, d) : `${k}^{${d}}`;

            values[0] = `\\(${n}\\)`;
            values[1] = `\\(${d}^{${k}}\\)`;
            values[2] = permission == 'not' ?  `\\(${k}^{${d}}\\)` : `\\(${_PC.nprTex(k, d)}\\)`;
            values[3] = `\\(${d}^{${d}}\\)`;
            
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `How many ${d}-digit numbers can be formed from the digits in \\(${digits}\\) assuming that repetition of digits is ${permission} allowed?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}