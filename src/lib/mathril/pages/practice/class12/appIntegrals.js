//@ts-nocheck
import {randNum, randInt} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
import { FactPoly } from '$lib/mathril/utils/matlib/factpoly';
import { sin } from '$lib/mathril/utils/matlib/trigonometry';
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
export const appIntegrals = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a =  randInt(5, -5);
            let b =  randInt(2*Math.abs(a) + 1, Math.abs(a));
            
            let n = 2;
            let max =  randInt(10, 5);
            let min = -max; 
            let p = new FactPoly();
            p.randFactPoly(n, min, max);
            //console.log(p.f);
            //console.log(p.str());
            let pint = p.area(a, b);
            pint.reduced();
            
            values[0] = `\\(${pint.str()}\\)`;
            values[1] = `\\(${pint.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${pint.sub(new Q(1)).str()}\\)`;
            values[3] = `\\(${pint.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The area under the curve \\[\\int_{${a}}^{${b}}${p.str()}\\,dx\\]`;
            break;
        }
        case 1: {
            let commonAngles = [new Q(), new Q(1, 6), new Q(1, 4), new Q(1, 3), new Q(1,2)];
            let aint = randInt(10, 1);
            let bint = randInt(2 * aint, aint);
            let acommon = commonAngles[randInt(4, 0)];
            let bcommon = commonAngles[randInt(4, 0)];
            let a = acommon.add(new Q(aint));
            let b = bcommon.add(new Q(bint));
            let sia = new sin(a);
            let sib = new sin(b);
            let area = sia.area(a, b);
            area.reduced()
            values[0] = `\\[${area.str()}\\]`;
            values[1] = `\\[${area.add(new Q(1)).str()}\\]`;
            values[2] = `\\[${area.sub(new Q(1)).str()}\\]`;
            values[3] = `\\[${area.add(new Q(2)).str()}\\]`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `The area under the curve \\[\\int_{${sia.astr()}}^{${sib.astr()}}\\sin x\\,dx\\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}