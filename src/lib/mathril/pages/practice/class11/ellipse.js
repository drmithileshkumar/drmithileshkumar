//@ts-nocheck

import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Ellipse } from '$lib/mathril/utils/matlib/ellipse';
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
export const ellipse = (problemnumber) => {
    let N = 5;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let p1 = randInt(10, 1);
            let p2 = randInt(10, 1);
            let k = p1 + p2;
            let q1 = randInt(k-1, 1);
            let q2 = k - q1;
            
            values[0] = `\\(${q2}\\)`;
            values[1] = `\\(${k + q1}\\)`;
            values[2] = `\\(${k}\\)`;
            values[3] = `\\(${p1}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The distances of a point P from foci \\(F_1\\) and \\(F_2\\) of an ellipse are ${p1} and ${p2} respectively. If the distance of a point Q on the ellipse from \\(F_1\\) is ${q1}, then it's distance from \\(F_2\\) is `;
            break;
        }
        case 1: {
            let elps = new Ellipse();
            elps.randomEllipse(10, 1);
            let elps1 = new Ellipse({rx: elps.rx, ry: elps.ry, center: new Point(-elps.center.x, elps.center.y)})
            let elps2 = new Ellipse({rx: elps.rx, ry: elps.ry, center: new Point(-elps.center.x, -elps.center.y)})
            let elps3 = new Ellipse({rx: elps.rx, ry: elps.ry, center: new Point(elps.center.x, -elps.center.y)});
            values[0] = `\\(${elps.str('standard')}\\)`
            values[1] = `\\(${elps1.str('standard')}\\)`
            values[2] = `\\(${elps2.str('standard')}\\)`
            values[3] = `\\(${elps3.str('standard')}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `The equation of an ellipse with center \\(${elps.center.str()}\\), \\(a = ${elps.rx}\\) and \\(b = ${elps.ry}\\) is`
            break;
        }
        case 2: {
            let elps = new Ellipse();
            elps.randomEllipse(10, 1);
            let focus1 = elps.focus1.reflectX();
            let focus2 = elps.focus1.reflectY();
            let focus3 = elps.focus1.scale(2);
            values[0] = `\\((${elps.focus1.x.toFixed(2)}, ${elps.focus1.y.toFixed(2)})\\)`
            values[1] = `\\((${focus1.x.toFixed(2)}, ${focus1.y.toFixed(2)})\\)`
            values[2] = `\\((${focus2.x.toFixed(2)}, ${focus2.y.toFixed(2)})\\)`
            values[3] = `\\((${focus3.x.toFixed(2)}, ${focus3.y.toFixed(2)})\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the equation of an ellipse is \\(${elps.str('standard')}\\), then one of the focii of the ellipse is`
            break;
        }
        case 3: {
            let elps = new Ellipse();
            elps.randomEllipse(10, 1);
            
            values[0] = elps.e.toFixed(2);
            values[1] = (elps.e/2).toFixed(2);
            values[2] = (2 * elps.e).toFixed(2);
            values[3] = (elps.e + 1).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the equation of an ellipse is \\(${elps.str('standard')}\\), then the eccentricity of the ellipse is`
            break;
        }
        case 4: {
            let elps = new Ellipse();
            elps.randomEllipse(10, 1);
            values[0] = elps.rectum.toFixed(2);
            values[1] = (elps.rectum/2).toFixed(2);
            values[2] = (2 * elps.rectum).toFixed(2);
            values[3] = (elps.rectum + 1).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the equation of an ellipse is \\(${elps.str('standard')}\\), then the latus rectum of the ellipse is`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}