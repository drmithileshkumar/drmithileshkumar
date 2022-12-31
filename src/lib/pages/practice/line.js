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
export const line = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {// section formula use of fractions
            let m = randInt(10, 1);
            let n = randInt(10, 1);
            let x1 = new Q(randInt(10, 1));
            let y1 = new Q(randInt(10, 1));
            let x2 = new Q(randInt(10, 1));
            let y2 = new Q(randInt(10, 1));
            let d = new Q(1, m + n);
            let p = new Point2D(x1, y1);
            let q = new Point2D(x2, y2);
            let r = p.scale(n).add(q.scale(m)).scale(d);
            let r1 = m != n ? p.scale(m).add(q.scale(n)).scale(d) : p.scale(m).add(q).scale(d);
            let r2 = m > n ? p.scale(m).sub(q.scale(n)).scale(new Q(1, m-n)) : p.scale(m - n).add(q.scale(n)).scale(d);
            let r3 = p.add(q).scale(d);

            values[0] = `\\(${r.str()}\\)`;
            values[1] = `\\(${r1.str()}\\)`;
            values[2] = `\\(${r2.str()}\\)`;
            values[3] = `\\(${r3.str()}\\)`;
            
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `A line passes through \\(${p.str()}\\) and \\(${q.str()}\\). What is the location of the point that divides these points in the ratio \\(${m}:${n}\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}