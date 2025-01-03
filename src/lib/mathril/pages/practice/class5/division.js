//@ts-nocheck
import {Point2D} from '$lib/mathril/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/mathril/utils/common/common';
import {Sets} from '$lib/mathril/utils/common/sets';
import { Q } from '$lib/mathril/utils/common/fraction';
import {Complex} from '$lib/mathril/utils/common/complex';
import {randomLinearInt} from '$lib/mathril/utils/common/expression';
import { Quadratic } from '$lib/mathril/utils/common/quadratic';
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
export const division = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let r1 = randInt(9999, 0);
            let r2 = randInt(20, 1);
            

            values[0] = `\\(${r1}\\)`;
            values[1] = `\\(${r1 + 1}\\)`;
            values[2] = `\\(${r1 - 1}\\)`;
            values[3] = `\\(${r1 + 2}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size: 1.5em;">` + `${r1 * r2} \u00F7 ${r2} = ____` + `</span>`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}