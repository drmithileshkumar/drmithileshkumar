//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Linear2 } from '$lib/mathril/utils/matlib/linear2';
import { Parabola } from '$lib/mathril/utils/matlib/parabola';
import { Point } from '$lib/mathril/utils/matlib/point';
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
export const parabola = (problemnumber) => {
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let axis = ['x', 'y']; 
            let dir = ['+', '-'];
            let Ri = Math.random() < 0.5 ? 0 : 1;
            let diri = Math.random() < 0.5 ? 0: 1;
            let R = axis[Ri];
            let L = axis[(Ri + 1) % 2];
            let a = randInt(10, 1);
            a = diri == 0 ? a : -a;
            let A = 4*a;
            let focus = [0, 0];
            focus[Ri] = a;
            values[0] = `\\((${focus[0]}, ${focus[1]})\\)`;
            values[1] = `\\((${focus[1]}, ${focus[0]})\\)`;
            values[2] = `\\((${-focus[0]}, ${-focus[1]})\\)`;
            values[3] = `\\((${-focus[1]}, ${-focus[0]})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If the equation of a parabola is \\(${L}^2 = ${A}${R}\\), then the focus is located at `;
            break;
        }
        case 1: {
                
            let axis = ['x', 'y']; 
            let dir = ['+', '-'];
            let Ri = Math.random() < 0.5 ? 0 : 1;
            let diri = Math.random() < 0.5 ? 0: 1;
            let R = axis[Ri];
            let L = axis[(Ri + 1) % 2];
            let a = randInt(10, 1);
            a = diri == 0 ? a : -a;
            let A = 4*a;
        
            values[0] = 4 * Math.abs(a);
            values[1] = Math.abs(a);
            values[2] = 2 * Math.abs(a);
            values[3] = 3 * Math.abs(a);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If the equation of a parabola is \\(${L}^2 = ${A}${R}\\), then the latus rectum is `;
            break;
        }
        case 2: {
            let para = new Parabola();
            para.a = randInt(10, -10, true);
            
            para.vertex.random(-10, 10);
            para.axis = Math.random() > 0.5 ? new Linear2(1, 0, para.vertex.x) : new Linear2(0, 1, para.vertex.y);
            para.computeFocus();
            para.computeDirectrix();
            values[0] = `\\(${para.directrix.str()} = 0\\)`
            values[1] = `\\(${para.axis.str()} = 0\\)`
            values[2] = `\\(-${para.directrix.str()} = 0\\)`
            values[3] = `\\(-${para.axis.str()} = 0\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If the equation of a parabola is \\(${para.str('standard')}\\), then the directrix is `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}