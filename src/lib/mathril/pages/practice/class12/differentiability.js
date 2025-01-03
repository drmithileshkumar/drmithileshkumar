//@ts-nocheck
import {randNum, randInt} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
import { LinearQ } from '$lib/mathril/utils/matlib/linearQ';
import { TrigDif1 } from '$lib/mathril/utils/matlib/function';
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
export const differentiability = (problemnumber) => {
    let N = 3;
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
            let p = new Polynomial();
            p.randPoly(n, max, min);
            let k = randInt(100, -100);
            let pdash = p.derivative();
            let s = p.str();
            if(s.length == 0) s = 0;

            values[0] = `\\(${k}\\cdot (${pdash.str()}) \\cdot (${p.str()})^{${k - 1}}\\)`;
            values[1] = `\\((${pdash.str()}) \\cdot (${p.str()})^{${k - 1}}\\)`;
            values[2] = `\\(${k}\\cdot (${pdash.str()}) \\cdot (${p.str()})^{${k}}\\)`;
            values[3] = `\\(${k}\\cdot (${p.str()})^{${k - 1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The derivative of the function \\[f(x) = (${s})^{${k}}\\]`;
            break;
        }
        case 1: {
            
            let n = randInt(5, 2);
            let max = randInt(5, 1);
            let min = -max;
            let p = new Polynomial();
            p.randPoly(n, max, min);
            let k = randInt(n, 1);
            let pdash = p.derivative(k);
            let s = p.str();
            if(s.length == 0) s = 0;
            let added = k === 1 ? 'st' : k === 2 ? 'nd' : k === 3 ? 'rd' : 'th'; 
            values[0] = `\\(${pdash.str()}\\)`;
            values[1] = `\\((${pdash.str()}) \\cdot (${p.str()})^{${k - 1}}\\)`;
            values[2] = `\\(${k}\\cdot (${pdash.str()}) \\cdot (${p.str()})^{${k}}\\)`;
            values[3] = `\\(${k}\\cdot (${p.str()})^{${k - 1}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Find ${k}${added} derivative of the function \\[f(x) = ${s}\\]`;
            break;
        }
        case 2: {
            let fun = new TrigDif1();
            fun.randT(2);    
            
            let deri = fun.derivative();
            values[0] = `\\(${deri.str()} + C\\)`;
            values[1] = `\\(${fun.str()}\\)`;
            values[2] = `\\(${deri.str()}\\)`;
            values[3] = `\\(${deri.perturb().str()} + C\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.7em;">\\(\\dfrac{d}{dx} (${fun.str()})\\)</span>`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}