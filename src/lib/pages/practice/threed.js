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
export const threed = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let x = randInt(10, 0);
            let y = randInt(10, 0);
            let z = randInt(10, 0);
            x = Math.random() < 0.5 ? x : -x;
            y = Math.random() < 0.5 ? y : -y;
            z = Math.random() < 0.5 ? z : -z;
            let octants = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
            let o = (x >= 0 ? 0 : 1 ) + ( y >= 0 ? 0 : 1) * 2 + ( z >= 0 ? 0 : 1 ) * 4;

            values[0] = octants[o];
            values[1] = octants[(o + 1) % 8];
            values[2] = octants[(o + 3) % 8];
            values[3] = octants[(o + 5) % 8];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the octant of the point \\((${x},${y},${z})\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}