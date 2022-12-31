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
export const probability = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let ncoin = randInt(5, 1);
            let ndice = randInt(3, 1);

            values[0] = `\\( ${Math.pow(2, ncoin) * Math.pow(6, ndice)} \\)`;
            values[1] = `\\( ${ncoin * ndice} \\)`;
            values[2] = `\\( ${Math.pow(2, ncoin - 1) * Math.pow(6, ndice)} \\)`;
            values[3] = `\\( ${Math.pow(2, ncoin) * Math.pow(6, ndice - 1)} \\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `A coin is tossed ${ncoin} times and a dice is tossed ${ndice} times, then the number of events in the sample space will be `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}