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
export const sequences = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {// an + b / cn + d
            let a = randInt(10, 2);
            let b = randInt(10, 1);
            let c = randInt(10, 2);
            let d = randInt(10, 1);

            let t = randInt(5, 2);
            let terms = [];
            let f;
            for(let i = 0; i < t + 3; i++) {
                f = new Q(a * (i + 1) + b, c * (i + 1) + d);
                f.reduced();
                terms.push(f.str());
            }
            let output = '';
            for(let i = 0; i < t - 1; i++) {
                output += terms[i] + ', ';
            }
            values[0] = `\\(${output + terms[t - 1]}\\)`;
            values[1] = `\\(${output + terms[t]}\\)`;
            values[2] = `\\(${output + terms[t + 1]}\\)`;
            values[3] = `\\(${output + terms[t + 2]}\\)`;
            
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The first ${t} terms of the sequence \\(a_n = \\frac{${a}n + ${b}}{${c}n + ${d}}\\) are`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}