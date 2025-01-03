//@ts-nocheck
import {randNum, randInt} from '$lib/mathril/utils/matlib/common';

import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
import { LinearQ } from '$lib/mathril/utils/matlib/linearQ';
import { TrigInt1 } from '$lib/mathril/utils/matlib/function';
import { Q } from '$lib/mathril/utils/matlib/fraction';
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
export const indefinite = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let n = randInt(5, 2);
            let max = randInt(5, 1);
            let min = -max; 
            let p = new Polynomial([], 'x');
            p.randPoly(n, max, min);
            
            let pint = p.integrate();
            
            let pdash = p.derivative();
            
            let x = new Polynomial([{a: 1, r: 1}], 'x');
            pdash = pdash.mul(x);
            
            values[0] = `\\(${pint.str()} + C\\)`;
            values[1] = `\\(${pint.str()}\\)`;
            values[2] = `\\(${pdash.str()}\\)`;
            values[3] = `\\(${pdash.str()} + C\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.8em;">\\[\\int (${p.str()})dx\\]</span>`;
            break;
        }
        case 1: {
            let fun = new TrigInt1();
            fun.randT(2);    
            let integral = fun.integrate();
            values[0] = `\\(${integral.str()} + C\\)`;
            values[1] = `\\(${fun.str()}\\)`;
            values[2] = `\\(${integral.str()}\\)`;
            values[3] = `\\(${integral.perturb().str()} + C\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.7em;">\\(\\int ${fun.str()}dx\\)</span>`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}