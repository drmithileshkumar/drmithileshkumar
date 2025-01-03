//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
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
export const coordinate = (problemnumber) => {
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let p1 = new Point();
            p1.random(-10, 10);
            let p2 = new Point();
            p2.random(-10, 10);
            values[0] = p1.length(p2).toFixed(2);
            values[1] = p1.length().toFixed(2);
            values[2] = p2.length().toFixed(2);
            values[3] = p1.sqlength().toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Find distance between (${p1.x}, ${p1.y}) and (${p2.x}, ${p2.y})`;
            break;
        }
        case 1: {
            let p1 = new Point();
            p1.random(-10, 10);
            let p2 = new Point();
            p2.random(-10, 10);
            let l = randInt(10, 1);
            let m = randInt(10, 1);
            let q = p1.section(p2, l, m, true);
            values[0] = '( ' + q.x.toFixed(2) + ', ' + q.y.toFixed(2) + ' )' ;
            values[1] = '( ' + (q.x + 1).toFixed(2) + ', ' + q.y.toFixed(2) + ' )' ;
            values[2] = '( ' + q.x.toFixed(2) + ', ' + (q.y + 1).toFixed(2) + ' )' ;
            values[3] = '( ' + q.x.toFixed(2) + ', ' + (q.y - 1).toFixed(2) + ' )' ;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which point divides the line segment between \\((${p1.x}, ${p1.y})\\) and \\((${p2.x}, ${p2.y})\\) internally in the ratio ${l} : ${m}`
            break;
        }
        case 2: {
            let p1 = new Point();
            p1.random(-10, 10);
            let p2 = new Point();
            p2.random(-10, 10);
            let p3 = new Point();
            p3.random(-10, 10);
            let area = p1.area(p2, p3);
            area = Math.abs(area);
            values[0] = area.toFixed(2);
            values[1] = (area + 1).toFixed(2);
            values[2] = (area - 1).toFixed(2);
            values[3] = (area + 2).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `What is the area of a triangle whose vertices are \\(${p1.str()}\\), \\(${p2.str()}\\) and \\(${p3.str()}\\)`
        }
    }
    problemset = problemset;
    return problemset;
}