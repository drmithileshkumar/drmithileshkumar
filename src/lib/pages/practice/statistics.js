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
export const statistics = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let n = randInt(7, 4);
            let data = [];
            for(let i = 0; i < n; i++) {
                data.push(randInt(5, -5));
            }
            let s = new Sets()
            s.e = data;
            let sum = data.reduce((a, b) => a + b);

            values[0] = `\\( ${(sum/n).toFixed(2)} \\)`;
            values[1] = `\\( ${(sum/(n - 1)).toFixed(2)} \\)`;
            values[2] = `\\( ${(sum/(n + 1)).toFixed(2)} \\)`;
            values[3] = `\\( ${(sum/(n+ 2)).toFixed(2)} \\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The mean of the values in the list \\(${s.str()}\\) is `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}