
//@ts-nocheck
import {randNum, randInt, gcd, shuffle} from '$lib/mathril/utils/matlib/common';
import { Sets } from '$lib/mathril/utils/matlib/sets';
import { Q } from '$lib/mathril/utils/matlib/fraction'

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
export const lines = (problemnumber) => {
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let angles = new Sets(['acute', 'right', 'obtuse', 'straight', 'reflex']);
            let optang = angles.krandomSubset(4);
            optang.e = shuffle(optang.e)
            let angle = 0;
            switch(optang.e[0]) {
                case 'acute': {
                    angle = randInt(89, 1);
                    break;
                }
                case 'right': {
                    angle = 90;
                    break;
                }
                case 'obtuse': {
                    angle = randInt(189, 91);
                    break;
                }
                case 'straight': {
                    angle = 180;
                    break;
                }
                case 'reflex': {
                    angle = randInt(359, 181);
                    break;
                }
            }

            values[0] = optang.e[0];
            values[1] = optang.e[1];
            values[2] = optang.e[2];
            values[3] = optang.e[3];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If angle is \\(${angle}^\\circ\\), which is correct?`;
            break;
        }
        case 1: {
            let A = randInt(179, 1);
            let B = 180 - A;
            values[0] = `\\(${B}^\\circ\\)`;
            values[1] = `\\(${90 + B}^\\circ\\)`;
            values[2] = `\\(${Math.abs(A -B)}^\\circ\\)`;
            values[3] = `\\(${B + 45}^\\circ\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Let \\(\\angle A\\) and \\(\\angle B\\) form a linear pair. If \\(\\angle A = ${A}^\\circ\\), then \\(\\angle B\\) = `
            break;
        }
        case 2: {
            let m = randInt(20, 1);
            let n = randInt(20, 1);
            let A = new Q(m * 180, m + n);
            A.reduced();
            let A1 = A.add(new Q(1));
            let A2 = A.add(new Q(-1));
            let A3 = A.add(new Q(2));
            values[0] = `\\(${A.str()}^\\circ\\)`;
            values[1] = `\\(${A1.str()}^\\circ\\)`;
            values[2] = `\\(${A2.str()}^\\circ\\)`;
            values[3] = `\\(${A3.str()}^\\circ\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Two lines intersect such that the straight angle is divided into the ratio ${m}: ${n}. Then, one of the angles will be`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}