//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/common/common';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import { Linear2 } from '$lib/mathril/utils/matlib/linear2';

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
export const linearequations = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a = randInt(10, 1);
            let b = randInt(10, 1);
            let c = randInt(10, 1);

            let x1 = randInt(20, 15);
            let x2 = randInt(x1 - 1, 10);
            let x3 = randInt(x2 - 1, 5);
            let x4 = randInt(x3 - 1, 1)
            let y1 = new Q(c - a * x1, b);
            let y2 = new Q(c - a * x2, b);
            let y3 = new Q(c - a * x3, b);
            let y4 = new Q(c - a * x4, b);
            y1 = y1.add(new Q(1));
            y1.reduced();
            y2.reduced();
            y3.reduced();
            y4.reduced();

            values[0] = `\\(x = ${x1}, ~y=${y1.str()}\\)`;
            values[1] = `\\(x = ${x2}, ~y=${y2.str()}\\)`;
            values[2] = `\\(x = ${x3}, ~y=${y3.str()}\\)`;
            values[3] = `\\(x = ${x4}, ~y=${y4.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following is not a solution of \\(${a}x + ${b}y = ${c}\\)`;
            break;
        }
        case 1: {
            let l1 = new Linear2();
            let l2 = new Linear2();
            l1.randL(-10, 10);
            l2.randL(-10, 10);
            let solution = l1.solve(l2);
            while(solution.x === NaN || solution.y === NaN) {
                l1.randL(-10, 10);
                l2.randL(-10, 10);
                solution = l1.solve(l2);
            }
            
            let solution1 = solution.x === NaN ? 'No solution' : `\\(x = ${solution.x.str()}, ~y=${solution.y.str()}\\)`
            let solution2 = `\\(x = ${solution.x.add(new Q(1)).str()}, ~y=${solution.y.str()}\\)`
            let solution3 = `\\(x = ${solution.x.add(new Q(1)).str()}, ~y=${solution.y.add(new Q(1)).str()}\\)`
            let solution4 = `\\(x = ${solution.x.add(new Q(1)).str()}, ~y=${solution.y.add(new Q(-1)).str()}\\)`
            values[0] = solution1;
            values[1] = solution2;
            values[2] = solution3;
            values[3] = solution4;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the solution of equations \\[\\begin{aligned}
                ${l1.str()} & = & 0\\\\
                ${l2.str()} & = & 0
                \\end{aligned}\\]`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}