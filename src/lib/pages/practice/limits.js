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
export const limits = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(7, 3);
            let c = [];
            let s = new Sets();
            let powers = s.krandomIndices(10, n);
            for(let i = 0; i < n; i++) {
                c.push({a: randInt(10, -10), r: powers[i]})
            }
            let poly = new Polynomial(c);
            let limit = randInt(2, -2);

            values[0] = poly.value(limit);
            values[1] = poly.value(limit + 1);
            values[2] = poly.value(limit - 1);
            values[3] = poly.value(limit + 2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the limit \\[\\lim_{x \\to ${limit}} ${poly.str()}\\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}