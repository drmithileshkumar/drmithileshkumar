//@ts-nocheck
import {Point2D} from '$lib/mathril/utils/common/point2d';
import {randNum, randInt, gcd, shuffle} from '$lib/mathril/utils/common/common';
import {Sets} from '$lib/mathril/utils/common/sets';
import { Q } from '$lib/mathril/utils/common/fraction';
import {Complex} from '$lib/mathril/utils/common/complex';
import {randomLinearInt} from '$lib/mathril/utils/common/expression';
import { Quadratic } from '$lib/mathril/utils/common/quadratic';
import { Point } from '$lib/mathril/utils/common/point';
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
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let p1 = new Point();
            p1.random(-50, -40);
            let p2 = new Point();
            p2.random(-50, -40)
            p2 = p2.a(new Point(70, 0));
            let p3 = new Point();
            p3.random(-50, -40)
            p3 = p3.a(new Point(0, 70));
            let p4 = new Point();
            p4.random(-50, -40);
            p4 = p4.a(new Point(70, 70));
            let points = [p1, p2, p3, p4];
            let s = shuffle([0, 1, 2, 3]);
            values[0] = `M ${points[s[0]].x},${points[s[0]].y} L ${points[s[3]].x},${points[s[3]].y}`;
            values[1] = `M ${points[s[0]].x},${points[s[0]].y} C ${points[s[1]].x},${points[s[1]].y} ${points[s[2]].x},${points[s[2]].y} ${points[s[3]].x},${points[s[3]].y}`;
            s = shuffle([0, 1, 2, 3]);
            values[2] = `M ${points[s[0]].x},${points[s[0]].y} C ${points[s[1]].x},${points[s[1]].y} ${points[s[2]].x},${points[s[2]].y} ${points[s[3]].x},${points[s[3]].y}`;
            s = shuffle([0, 1, 2, 3]);
            values[3] = `M ${points[s[0]].x},${points[s[0]].y} C ${points[s[1]].x},${points[s[1]].y} ${points[s[2]].x},${points[s[2]].y} ${points[s[3]].x},${points[s[3]].y}`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;"><svg width="100" height="100" viewBox="-50 -50 100 100"><path d='${values[i]}' stroke="currentcolor" stroke-width="2" fill="none" /></svg></div>`;
            } 
            
            problemset.s = 'Which is a straight line?';
            break;
        }
    }
    problemset = problemset;
    return problemset;
}