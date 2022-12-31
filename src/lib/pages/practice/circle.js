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
export const circle = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let alpha = randInt(90, 0);
            let beta = randInt(90, 0);
            let sections = ['circle', 'ellipse', 'parabola', 'hyperbola'];
            let r = Math.random();
            beta = r < 0.25 ? 90 : r < 0.5 ? alpha : beta;
            let j = beta == 90 ? 0 : alpha < beta ? 1 : alpha == beta ? 2 : 3;
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = sections[(j + i) % 4];
            } 
            
            problemset.s = `The angle between the axis and the generator of a cone is \\(\\alpha = ${alpha}^\\circ\\). If \\(\\beta = ${beta}^\\circ\\) is the angle between an intersecting plane with the axis of the cone, then the resulting section is `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}