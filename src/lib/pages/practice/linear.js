import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Polynomial} from '$lib/utils/common/polynomial';
import { FactPoly } from '$lib/utils/common/factpoly';
import { Point3D } from '$lib/utils/common/point3D';
import { cos, sin } from '$lib/utils/common/trigonometry';
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
export const linear = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a =  randInt(10, 2);
            let b =  randInt(10, 2);
            let c =  randInt(10, 2);
            let lp1 = `${a}x + ${b}y`;
            let v1 = '(0, 0)';
            let p1 = new Q(c, a);
            let p2 = new Q(c, b);
            p1.reduced();
            p2.reduced();
            let v2 = '(' + p1.str() + ',' + 0 + ')';
            let v3 = '(' + 0  + ',' + p2.str() + ')';
            let p3 = Math.random() < 0.5 ? p1.scale(-1) : p2.scale(-1);
            p3.reduced();
            let v4 = '(' + 0  + ',' + p3.str() + ')';
             
            values[0] = `\\(${v4}\\)`;
            values[1] = `\\(${v1}\\)`;
            values[2] = `\\(${v2}\\)`;
            values[3] = `\\(${v3}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following points is not a vertex of the feasible region of the linear programming problem
                \\[\\begin{aligned} 
                    ${lp1} &\\leq ${c}\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}