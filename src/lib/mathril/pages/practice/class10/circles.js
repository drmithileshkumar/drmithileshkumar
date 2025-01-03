//@ts-nocheck
import {randNum, randInt, gcd, pythagoreanTriplet} from '$lib/mathril/utils/matlib/common';
import { Q } from '$lib/mathril/utils/matlib/fraction';

import { Surd } from '$lib/mathril/utils/matlib/surd';
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
export const circles = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let l = randInt(10, 1);
            let r = randInt(10, 1);
            let s = new Surd();
            s.terms = [{r: r * r + l * l, a: 1}]
            let s1 = new Surd();
            s1.terms = [{r: r * r, a: 1}];
            let s2 = new Surd();
            s2.terms = [{r: Math.abs(r * r - l * l), a: 1}];
            let s3 = new Surd();
            s3.terms = [{r: r * r + 1, a: 1}];

            let d = Math.sqrt(r * r + l * l)
            

            values[0] = `\\(${s.str()}\\)`;
            values[1] = `\\(${s1.str()}\\)`;
            values[2] = `\\(${s2.str()}\\)`;
            values[3] = `\\(${s3.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If the lenth of tangent to a circle of radius ${r} is ${l}, then the distance of the point from the center is ?`;
            break;
        }
        case 1: {
            let tp = pythagoreanTriplet(10);
            let r = tp.h;
            let c2 = tp.p;
            let c = 2 * c2;
            let s = tp.b;
            
            let l = new Q(c2 * r, s); // c2 * r / s
            l.reduced();
            let s1 = l.add(new Q(1));
            s1.reduced();
            let s2 = l.add(new Q(-1));
            s2.reduced();
            let s3 = l.add(new Q(2));
            s3.reduced();

            values[0] = `\\(${l.str()}\\)`;
            values[1] = `\\(${s1.str()}\\)`;
            values[2] = `\\(${s2.str()}\\)`;
            values[3] = `\\(${s3.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `PQ is a chord of length ${c} of a circle of radius ${r}. The tangents at P and Q intersect at a point T. Find the length TP.`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}