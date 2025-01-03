//@ts-nocheck

import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import {Complex} from '$lib/mathril/utils/matlib/complex';
import { LinearQ } from '$lib/mathril/utils/matlib/linearQ';
import { Quadratic } from '$lib/mathril/utils/matlib/quadratic';
import * as _In from '$lib/mathril/utils/matlib/inequalities';
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
    let N = 2;
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
            const baseSets = ['N', 'Z', 'Z^+', 'Q', 'Q^+', 'R', 'R^+'];
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
            
            problemset.s = `Solve \\(${ineq}\\) when \\({x\\in ${s}}\\)`;
            break;
        }
        case 1: {
            //m < ax + b < n
            let m = randInt(-1, -100);
            let n = randInt(100, 0);
            let eq = new LinearQ();
            eq.randL(randInt(100, -100, true), randInt(100, -100, true), true);
            let mq = new Q(m);
            let nq = new Q(n);
            let left = mq.sub(eq.b).div(eq.a);
            left.reduced();
            let right = nq.sub(eq.b).div(eq.a)
            right.reduced();
            if(eq.a.isLZero()) {
                let temp = right;
                right = left;
                left = temp;
            }
            let left1 = left.add(new Q(1));
            let left2 = left.add(new Q(-1));
            let left3 = left.add(new Q(2));
            left1.reduced();
            left2.reduced();
            left3.reduced();
            
            let right1 = right.add(new Q(1));
            let right2 = right.add(new Q(-1));
            let right3 = right.add(new Q(2));
            right1.reduced();
            right2.reduced();
            right3.reduced();
            
            values[0] = `\\(${left.str()} < x < ${right.str()}\\)`
            values[1] = `\\(${left1.str()} < x < ${right1.str()}\\)`
            values[2] = `\\(${left2.str()} < x < ${right2.str()}\\)`
            values[3] = `\\(${left3.str()} < x < ${right3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Solve \\(${m} < ${eq.str()} < ${n}\\)`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}