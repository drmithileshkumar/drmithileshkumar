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
export const derivatives = (problemnumber) => {
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
            
            let polydash = poly.derivative();
            values[0] = `\\(${polydash.str()}\\)`;
            values[1] = `\\(${polydash.pert({a: c[0].a, r: powers[0]}).str()}\\)`;
            values[2] = `\\(${polydash.pert({a: c[1].a, r: powers[1]}).str()}\\)`;
            values[3] = `\\(${polydash.pert({a: c[2].a, r: powers[2]}).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the derivative of \\[${poly.str()}\\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}