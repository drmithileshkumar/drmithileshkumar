//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';

import { Polynomial } from '$lib/mathril/utils/matlib/polynomial';
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
export const derivatives = (problemnumber) => {
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(7, 3);
            let c = [];
            let s = new Sets();
            let powers = s.krandomIndices(10, n);
            for(let i = 0; i < n; i++) {
                c.push({a: randInt(10, -10), r: powers[i]})
            }
            let poly = new Polynomial(c);
            
            let polydash = poly.derivative();
            values[0] = `\\(${polydash.str()}\\)`;
            values[1] = `\\(${polydash.pert({a: c[0].a, r: powers[0]}).str()}\\)`;
            values[2] = `\\(${polydash.pert({a: c[1].a, r: powers[1]}).str()}\\)`;
            values[3] = `\\(${polydash.pert({a: c[2].a, r: powers[2]}).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.7em;">\\[\\dfrac{d}{dx}(${poly.str()})\\]</span>`;
            break;
        }
        case 1: {
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
        case 2: {//poly x trig
            let poly = new Polynomial();
            poly.randPoly(3, 10, -10);
            let trig = new TrigDif1();
            trig.randT(2);
            let polyD = poly.derivative();
            let trigD = trig.derivative();
            values[0] = `\\((${polyD.str()})${trig.str()} + (${poly.str()})${trigD.str()}\\)`;
            values[1] = `\\(-(${polyD.str()})${trig.str()} + (${poly.str()})${trigD.str()}\\)`;
            values[2] = `\\((${polyD.str()})${trig.str()} - (${poly.str()})${trigD.str()}\\)`;
            values[3] = `\\(-(${polyD.str()})${trig.str()} - (${poly.str()})${trigD.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size:0.7em;">\\(\\dfrac{d}{dx} (${trig.str()}(${poly.str()}))\\)</span>`;
            break;
        }

    }
    problemset = problemset;
    return problemset;
}