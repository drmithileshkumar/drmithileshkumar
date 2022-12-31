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
export const ellipse = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let p1 = randInt(10, 1);
            let p2 = randInt(10, 1);
            let k = p1 + p2;
            let q1 = randInt(k-1, 1);
            let q2 = k - q1;
            
            values[0] = `\\(${q2}\\)`;
            values[1] = `\\(${k + q1}\\)`;
            values[2] = `\\(${k}\\)`;
            values[3] = `\\(${p1}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The distances of a point P from foci \\(F_1\\) and \\(F_2\\) of an ellipse are ${p1} and ${p2} respectively. If the distance of a point Q on the ellipse from \\(F_1\\) is ${q1}, then it's distance from \\(F_2\\) is `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}