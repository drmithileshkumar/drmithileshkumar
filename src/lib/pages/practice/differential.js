import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Polynomial} from '$lib/utils/common/polynomial';
import { FactPoly } from '$lib/utils/common/factpoly';
import { ODE } from '$lib/utils/common/ode';
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
export const differential = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(10, 3);
            let m = randInt(10, 5);
             
            let ode = new ODE();
            ode.randODE(n, m);
            let o = ode.order();
            let d = ode.degree();
            values[0] = `\\(${o}, ${d}\\)`;
            values[1] = `\\(${o + 1}, ${d}\\)`;
            values[2] = `\\(${o}, ${d + 1}\\)`;
            values[3] = `\\(${o-1}, ${d=1}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the order and degree of the differential equation \\[${ode.str()} = 0\\] where \\(y_n = \\frac{d^n y}{dx^n}\\)`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}