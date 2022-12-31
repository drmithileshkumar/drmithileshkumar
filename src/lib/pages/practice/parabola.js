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
export const parabola = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let axis = ['x', 'y']; 
            let dir = ['+', '-'];
            let Ri = Math.random() < 0.5 ? 0 : 1;
            let diri = Math.random() < 0.5 ? 0: 1;
            let R = axis[Ri];
            let L = axis[(Ri + 1) % 2];
            let a = randInt(10, 1);
            a = diri == 0 ? a : -a;
            let A = 4*a;
            let focus = [0, 0];
            focus[Ri] = a;
            values[0] = `\\((${focus[0]}, ${focus[1]})\\)`;
            values[1] = `\\((${focus[1]}, ${focus[0]})\\)`;
            values[2] = `\\((${-focus[0]}, ${-focus[1]})\\)`;
            values[3] = `\\((${-focus[1]}, ${-focus[0]})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If the equation of a parabola is \\(${L}^2 = ${A}${R}\\), then the focus is located at `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}