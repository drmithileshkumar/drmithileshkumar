//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Hyperbola } from '$lib/mathril/utils/matlib/hyperbola';
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
export const hyperbola = (problemnumber) => {
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
            let k = randInt(10, 1);
            let p2 = Math.abs(k + p1);
            let q1 = randInt(10, 1);
            let q2 = q1 <= k ? Math.abs(k + q1) : q1 - k;
            
            values[0] = `\\(${q2}\\)`;
            values[1] = `\\(${p1 + p2}\\)`;
            values[2] = `\\(${k}\\)`;
            values[3] = `\\(${k + q2}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The distances of a point P from foci \\(F_1\\) and \\(F_2\\) of a hyperbola are ${p1} and ${p2} respectively. If the distance of a point Q on the hyperbola from \\(F_1\\) is ${q1}, then it's distance from \\(F_2\\) is `;
            break;
        }
        case 1: {
            let hpbl = new Hyperbola();
            hpbl.randomHyperbola(10, 1);
            let hpbl1 = new Hyperbola({rx: hpbl.rx, ry: hpbl.ry, center: new Point(-hpbl.center.x, hpbl.center.y)})
            let hpbl2 = new Hyperbola({rx: hpbl.rx, ry: hpbl.ry, center: new Point(-hpbl.center.x, -hpbl.center.y)})
            let hpbl3 = new Hyperbola({rx: hpbl.rx, ry: hpbl.ry, center: new Point(hpbl.center.x, -hpbl.center.y)});
            values[0] = `\\(${hpbl.str('standard')}\\)`
            values[1] = `\\(${hpbl1.str('standard')}\\)`
            values[2] = `\\(${hpbl2.str('standard')}\\)`
            values[3] = `\\(${hpbl3.str('standard')}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `The equation of an hyperbola with center \\(${hpbl.center.str()}\\), \\(a = ${hpbl.rx}\\) and \\(b = ${hpbl.ry}\\) is`
            break;
        }
        case 2: {
            let hpbl = new Hyperbola();
            hpbl.randomHyperbola(10, 1);
            let focus1 = hpbl.focus1.reflectX();
            let focus2 = hpbl.focus1.reflectY();
            let focus3 = hpbl.focus1.scale(2);
            values[0] = `\\((${hpbl.focus1.x.toFixed(2)}, ${hpbl.focus1.y.toFixed(2)})\\)`
            values[1] = `\\((${focus1.x.toFixed(2)}, ${focus1.y.toFixed(2)})\\)`
            values[2] = `\\((${focus2.x.toFixed(2)}, ${focus2.y.toFixed(2)})\\)`
            values[3] = `\\((${focus3.x.toFixed(2)}, ${focus3.y.toFixed(2)})\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the equation of an hyperbola is \\(${hpbl.str('standard')}\\), then one of the focii of the hyperbola is`
            break;
        }
        case 3: {
            let hpbl = new Hyperbola();
            hpbl.randomHyperbola(10, 1);
            
            values[0] = hpbl.e.toFixed(2);
            values[1] = (hpbl.e/2).toFixed(2);
            values[2] = (2 * hpbl.e).toFixed(2);
            values[3] = (hpbl.e + 1).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the equation of an hyperbola is \\(${hpbl.str('standard')}\\), then the eccentricity of the hyperbola is`
            break;
        }
        case 4: {
            let hpbl = new Hyperbola();
            hpbl.randomHyperbola(10, 1);
            values[0] = hpbl.rectum.toFixed(2);
            values[1] = (hpbl.rectum/2).toFixed(2);
            values[2] = (2 * hpbl.rectum).toFixed(2);
            values[3] = (hpbl.rectum + 1).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the equation of an hyperbola is \\(${hpbl.str('standard')}\\), then the latus rectum of the hyperbola is`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}