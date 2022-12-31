import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Complex} from '$lib/utils/common/complex';
import {randomLinearInt} from '$lib/utils/common/expression';
import { Quadratic } from '$lib/utils/common/quadratic';
import * as _In from '$lib/utils/common/inequalities';
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
export const inequalities = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a = randInt(10, 1);
            let b = randInt(10, 1);
            a = Math.random() < 0.5 ? -a : a;
            b = Math.random() < 0.5 ? -b : b;
            const baseSets = ['N', 'Z', 'Z+', 'Q', 'Q+', 'R', 'R+'];
            let s = baseSets[Math.floor(baseSets.length * Math.random())];
            let ineq = a === 1 ? `x < ${b}` : a === -1 ? `-x < ${b}` : `${a}x < ${b}`;
            let sols = _In.solveIneq(a, b, '<', s);
            
            let solStr = _In.solString(sols, s);
            // console.log(sols, solStr);
            if(sols[0] == '(' || sols[0] == '[') {//interval
                values[0] = `\\(${solStr}\\)`;//(]
                values[1] = `\\(${sols[0] == '(' ? solStr.replace('(', '[') : solStr.replace('[', '(')}\\)`;//[]
                values[2] = `\\(${sols[3] == ')' ? solStr.replace(')', ']') : solStr.replace(']', ')')}\\)`;//()
                values[3] = `\\(${sols[0] == '(' ? (sols[3] == ')' ? solStr.replace('(', '[').replace(')', ']') : solStr.replace('(', '[').replace(']', ')')) : (sols[3] == ')' ? solStr.replace('[', '(').replace(')', ']') : solStr.replace('[', '(').replace(']', ')'))}\\)`;//[)
            } else if(sols[0] == '\\{' && sols.length > 2) {//set
                values[0] = `\\(${solStr}\\)`;
                values[1] = `\\(${solStr.replace('\\{', '\\{-1,')}\\)`;
                values[2] = `\\(${solStr.replace('\\{', '\\{-2,')}\\)`;
                values[3] = `\\(${solStr.replace('\\{', '\\{-3,')}\\)`;
            } else {//no solution
                values[0] = `\\(\\{\\}\\)`;
                values[1] = `\\((0, ${(Math.abs(b/a)).toFixed(2)})\\)`;
                values[2] = `\\((0, ${Math.abs(b)})\\)`;
                values[3] = `\\((-1, ${Math.abs(a)})\\)`;
            }
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Solve \\(${ineq}\\) when \\(\\ce{x\\in ${s}}\\)`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}