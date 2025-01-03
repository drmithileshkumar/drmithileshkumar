//@ts-nocheck

import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
import { FactPoly } from '$lib/mathril/utils/matlib/factpoly';
import { sin } from '$lib/mathril/utils/matlib/trigonometry';
import { Logic } from "$lib/mathril/utils/matlib/logic";
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
export const reasoning = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let m = randInt(100, 1);
            let n = randInt(m-1, -m+1);
            values[0] = `\\(x > ${m} ~~and~~ x < ${n} \\)`;
            values[1] = `\\(x > ${m} ~~and~~ x > ${n} \\)`;
            values[2] = `\\(x < ${m} ~~and~~ x < ${n} \\)`;
            values[3] = `\\(x < ${m} ~~and~~ x > ${n} \\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which statement is not true?`;
            break;
        }
        case 1: {
            let depth = randInt(3, 1);
            let variables = ['p', 'q'];
            let expr = Logic.randomExpression(depth, variables);
            let p = Math.random() < 0.5;
            let q = Math.random() < 0.5;
            let value = expr.evaluate({'p': p, 'q': q});
            let str = expr.toLatex();
            values[0] = value;
            values[1] = !value;
            values[2] = 'Neither true nor false'
            values[3] = 'Can not be evaluated'
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Evaluate \\[${str}\\] when \\(p\\) is ${p} and \\(q\\) is ${q}`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}