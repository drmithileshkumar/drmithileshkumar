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
export const geometry3d = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let af = [new Q(), new Q(1), new Q(1, 2), new Q(1, 3), new Q(1, 4), new Q(1, 6), new Q(2, 3), new Q(3, 4), new Q(5, 6)];
            
            let alpha = af[randInt(8, 0)];
            let beta = af[randInt(8, 0)];
            let gamma = af[randInt(8, 0)];
            //console.log('angles...', alpha.str(), beta.str(), gamma.str());
            let l = new cos(alpha);
            let m = new cos(beta);
            let n = new cos(gamma);
            let alphapi = l.astr();
            let betapi = m.astr();
            let gammapi = n.astr();
            let lv = l.value();
            let mv = m.value();
            let nv = n.value();

            let ls = new sin(alpha);
            let ms = new sin(beta);
            let ns = new sin(gamma);
            let lsv = ls.value();
            let msv = ms.value();
            let nsv = ns.value();
            // console.log(alpha.str(), beta.str(), gamma.str(), lv, mv, nv, lsv, msv, nsv)
             
            values[0] = `\\(${lv.str()}, ${mv.str()}, ${nv.str()}\\)`;
            values[1] = `\\(${alphapi}, ${betapi}, ${gammapi}\\)`;
            values[2] = `\\(${lsv.str()}, ${msv.str()}, ${nsv.str()}\\)`;
            values[3] = `\\(${lv.scale(-1).str()}, ${mv.scale(-1).str()}, ${nv.scale(-1).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If a line makes angles \\(${alphapi}, ${betapi}\\) and \\(${gammapi}\\) with the positive axes \\(x, y\\) and \\(z\\) respectively, then its direction cosines are ?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}