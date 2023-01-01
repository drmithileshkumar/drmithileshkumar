import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
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
export const relations12 = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let k = randInt(6, 4);
            let A = new Sets();
            A.randomSet(0, 10, k)
            let relations = ['reflexive', 'symmetric', 'transitive'];
            let frelations = [A.reflexive(k).add([A.e[0], A.e[1]]).add([A.e[1], A.e[2]]), A.symmetric(k), A.transitive(k)];
            // console.log('frelations..', [frelations[0].e, frelations[1].e, frelations[2].e]);
            let ri = Math.floor(Math.random()*3);
            
            values[0] = `\\(${frelations[ri].str()}\\)`;
            values[1] = `\\(${frelations[(ri + 1) % 3].str()}\\)`;
            values[2] = `\\(${frelations[(ri + 2) % 3].str()}\\)`;
            values[3] = `\\(${A.cartesian(A).krandomSubset(k).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Given set \\(A = ${A.str()}\\), which relation is ${relations[ri]}`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}