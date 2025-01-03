//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';

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
export const subtraction = (problemnumber) => {
    let N = 4;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let r1 = randInt(99, 0);
            let r2 = randInt(r1, 0);
            

            values[0] = r1 - r2;
            values[1] = r1 - r2 + 1;
            values[2] = r1 - r2 - 1;
            values[3] = r1 - r2 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="display:flex;align-items:center;gap:0.5em;font-size: 1.5em;">` + `${r1} - ${r2} = <span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span` + `</span>`;
            break;
        }
        case 1: {
            let r1 = randInt(99, 0);
            let r2 = randInt(r1, 0);
            

            values[0] = r2;
            values[1] = r2 + 1;
            values[2] = r2 - 1;
            values[3] = r2 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="display:flex;align-items:center;gap:0.5em;font-size: 1.5em;">` + `${r1} - <span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span> = ${r1 - r2}` + `</span>`;
            break;
        }
        case 2: {
            let r1 = randInt(99, 0);
            let r2 = randInt(r1, 0);
            

            values[0] = r1;
            values[1] = r1 + 1;
            values[2] = r1 - 1;
            values[3] = r1 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="display:flex;align-items:center;gap:0.5em;font-size: 1.5em;">` + `<span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span> - ${r2} = ${r1 - r2}` + `</span>`;
            break;
        }
        case 3: {
            let r1 = randInt(99, 50);
            let r2 = randInt(r1, 30);
            let r3 = randInt(r2, 0);
            let signs = ['+', '-'];
            let sign = Math.random() > 0.5 ? 0 : 1;
            let val = sign == 0 ? r1 + r2 - r3 : r1 - r2 + r3;
            values[0] = val;
            values[1] = val + 1;
            values[2] = val - 1;
            values[3] = val + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="display:flex;align-items:center;gap:0.5em;font-size: 1.5em;">` + `${r1} ${signs[sign]} ${r2} ${signs[(sign + 1) % 2]} ${r3} = <span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span>` + `</span>`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}