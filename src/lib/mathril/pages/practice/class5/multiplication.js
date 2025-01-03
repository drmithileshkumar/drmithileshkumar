//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Tree } from '$lib/mathril/utils/matlib/tree';
import { Point } from '$lib/mathril/utils/matlib/point';
import { divisors } from '$lib/mathril/utils/matlib/nt';
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
export const multiplication = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let tree = new Tree();
            tree.randomMultiplicationTree([2, 3]);
            tree.computePositions();
            let v = tree.nodes.root.value;
            values[0] = v;
            values[1] = v + 1;
            values[2] = v - 1;
            values[3] = v + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<svg style="width:100%;"  viewBox="-20 -120 500 150">` + tree.draw(true) + `</svg><span>This is a multiplication tree of which number?</span>`;
            break;
        }
        case 1: {
            let r1 = 5 * randInt(99, 0);
            let r2 = 5 * randInt(99, 0);
            

            values[0] = r1 * r2;
            values[1] = r1 * (r2 + 1);
            values[2] = (r1 + 1) * r2;
            values[3] = r1 * (r2 + 2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="display:flex;align-items:center;gap:0.5em;font-size: 1.5em;">` + `${r1} &times; ${r2} = <span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span` + `</span>`;
            break;
        }
        
    }
    problemset = problemset;
    return problemset;
}