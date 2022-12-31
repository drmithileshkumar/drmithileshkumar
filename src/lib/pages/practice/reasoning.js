import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Complex} from '$lib/utils/common/complex';
import {randomLinearInt} from '$lib/utils/common/expression';
import { Quadratic } from '$lib/utils/common/quadratic';
import { Polynomial } from '$lib/utils/common/polynomial';
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
export const reasoning = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let m = randInt(100, 1);
            let n = randInt(m-1, -m+1);

            values[0] = `\\(x > ${m} ~~and~~ x < ${n} \\)`;
            values[1] = `\\(x > ${m} ~~and~~ x > ${n} \\)`;
            values[2] = `\\(x < ${m} ~~and~~ x < ${n} \\)`;
            values[3] = `\\(x < ${m} ~~and~~ x > ${n} \\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which statement is not true?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}