//@ts-nocheck
import {randNum, randInt, gcd, shuffle} from '$lib/mathril/utils/matlib/common';
import { Magic3 } from '$lib/mathril/utils/matlib/magic3';
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
export const integers = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let r1 = randInt(10, -10);
            let r2 = randInt(10, -10);
            

            values[0] = `\\(${r1 * r2}\\)`;
            values[1] = `\\(${r1 * r2 + 1}\\)`;
            values[2] = `\\(${r1 * r2 - 1}\\)`;
            values[3] = `\\(${r1 * r2 + 2}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size: 1.5em;">` + `${r1} \\(\\times\\) ${r2} = ____` + `</span>`;
            break;
        }
        case 1: {
            let mgSqr = new Magic3();
            mgSqr.randomMagic();
            let rI = randInt(2, 0);
            let cI = randInt(2, 0);
            values[0] = mgSqr.square[rI][cI];
            values[1] = mgSqr.square[rI][cI] + 1;
            values[2] = mgSqr.square[rI][cI] - 1;
            values[3] = mgSqr.square[rI][cI] + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which numbers completes the magic square ${mgSqr.draw([rI + "" + cI])}?`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}