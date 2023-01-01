import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Polynomial} from '$lib/utils/common/polynomial';
import { FactPoly } from '$lib/utils/common/factpoly';
import { Point3D } from '$lib/utils/common/point3D';
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
export const vectors = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(10, 1);
            let m = randInt(10, 1);
            let l = randInt(10, 1);

            let P = new Point3D();
            P.randP3D(n, m, l);
            // console.log(P.str());
            let Q = new Point3D();
            Q.randP3D(n, m, l);
            // console.log(Q.str());
             
            values[0] = `\\(${Q.sub(P).vstr()}\\)`;
            values[1] = `\\(${P.sub(Q).vstr()}\\)`;
            values[2] = `\\(${Q.add(P).vstr()}\\)`;
            values[3] = `\\(${Q.vstr()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the vector from point \\(P = ${P.str()}\\) to \\(Q = ${Q.str()}\\) ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}