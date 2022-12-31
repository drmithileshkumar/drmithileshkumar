import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import {Polynomial} from '$lib/utils/common/polynomial';
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
export const trigonometry = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let theta = randInt(359, 1);
            let g = gcd(theta, 180);
            let t = theta/g;
            let f = randInt(10, 1);
            let l = t*f;

            values[0] = (l*180/theta).toFixed(2);
            values[1] = (theta*180/l).toFixed(2);
            values[2] = (l/theta).toFixed(2);
            values[3] = (l*180)/theta + `\\(\\pi\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + ' m';
            } 
            
            problemset.s = `What is the radius of the circle in which a central angle of \\(${theta}^\\circ\\) intercepts an arc of length \\(${l}\\pi\\) m?`;
            break;
        }
        case 1: {
            
            let n = randInt(100, 1);
            
            values[0] = `\\(${2*n + 1}\\frac{\\pi}{2}\\)`;
            values[1] = `\\(${2*n + 1}\\frac{\\pi}{3}\\)`;
            values[2] = `\\(${2*n + 1}\\frac{\\pi}{4}\\)`;
            values[3] = `\\(${n}\\pi\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + ' m';
            } 
            
            problemset.s = `If \\(\\cos x = 0\\), then which of these is a valid value of \\(x\\)?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}