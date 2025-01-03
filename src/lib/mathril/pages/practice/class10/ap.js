//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/common/common';

import { Q } from '$lib/mathril/utils/common/fraction';


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
export const ap = (problemnumber) => {
    let N = 7;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {// an + b / cn + d
            let a = randInt(10, 2);
            let b = randInt(10, 1);
            let c = randInt(10, 2);
            let d = randInt(10, 1);

            let t = randInt(5, 2);
            let terms = [];
            let f;
            for(let i = 0; i < t + 3; i++) {
                f = new Q(a * (i + 1) + b, c * (i + 1) + d);
                f.reduced();
                terms.push(f.str());
            }
            let output = '';
            for(let i = 0; i < t - 1; i++) {
                output += terms[i] + ', ';
            }
            values[0] = `\\(${output + terms[t - 1]}\\)`;
            values[1] = `\\(${output + terms[t]}\\)`;
            values[2] = `\\(${output + terms[t + 1]}\\)`;
            values[3] = `\\(${output + terms[t + 2]}\\)`;
            
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The first ${t} terms of the sequence \\(a_n = \\frac{${a}n + ${b}}{${c}n + ${d}}\\) are`;
            break;
        }
        case 1: {
            let a = randInt(10, -10);
            let d = randInt(10, -10, true);
            let s = a;
            for(let i = 1; i < 5; i++) {
                s += ", " + (a + i * d);
            }
            values[0] = d;
            values[1] = d + 1;
            values[2] = d - 1;
            values[3] = d + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 

            problemset.s = `What is the common difference \\(d\\) of the following arithmetic sequence ${s}?`
            break;
        }
        case 2: {
            let a = randInt(10, -10);
            let d = randInt(10, -10, true);
            let s = a;
            for(let i = 1; i < 5; i++) {
                s += ", " + (a + i * d);
            }
            
            values[0] = (a - d) + (d > 0 ? " + " : ' - ') + Math.abs(d) + 'n';
            values[1] = (a) + (d > 0 ? " - " : ' + ') + Math.abs(d) + 'n';
            values[2] = (a) + (d > 0 ? " + " : ' - ') + Math.abs(d) + 'n';
            values[3] =  (a - d) + (d > 0 ? " - " : ' + ') + Math.abs(d - 1) + 'n';
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + '\\)';
            } 
            problemset.s = `What is the \\(n\\)th term \\(a_n\\) of the following arithmetic sequence ${s}?`
            break;
        }
        case 3: {
            let a = randInt(10, -10);
            let d = randInt(10, -10, true);
            let k = randInt(100, 6);
            let s = a;
            for(let i = 1; i < 5; i++) {
                s += ", " + (a + i * d);
            }
            values[0] = a + (k - 1) * d;
            values[1] = a + (k) * d;
            values[2] = a + (k + 1) * d;
            values[3] = a + (k - 1) * (d - 1);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 

            problemset.s = `What is the ${k}th term of the following arithmetic sequence ${s}?`
            break;
        }
        case 4: {
            let a = randInt(10, -10);
            let d = randInt(10, -10, true);
            let last = randInt(100, 12);
            let k = randInt(last - 1, 1);
            
            let s = a;
            for(let i = 1; i < 5; i++) {
                s += ", " + (a + i * d);
            }
            s += ', \\cdots' + (a + last * d);
            let c = last - k + 1;
            values[0] = a + (c - 1) * d;
            values[1] = a + (c) * d;
            values[2] = a + (c + 1) * d;
            values[3] = a + (c - 1) * (d - 1);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 

            problemset.s = `What is the ${k}th term from the last term of the following arithmetic sequence \\(${s}\\)?`
            break;
        }
        case 5: {
            let a = randInt(10, -10);
            let d = randInt(10, -10, true);
            let k = randInt(100, 6);
            let s = a;
            for(let i = 1; i < 5; i++) {
                s += ", " + (a + i * d);
            }
            values[0] = k * (2 * a + (k - 1) * d) / 2;
            values[1] = k * (2 * a + (k) * d) / 2;
            values[2] = k * (2 * a + (k + 1) * d) / 2;
            values[3] = k * (2 * a + (k - 2) * d) / 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 

            problemset.s = `What is the sum of first ${k} terms of the following arithmetic sequence ${s}?`
            break;
        }
        case 6: {
            let a = randInt(10, -10);
            let d = randInt(10, -10, true);
            let li = randInt(30, 6);
            let l = a + li * d;
            let k = randInt(100, 6);
            let s = a;
            for(let i = 1; i < 5; i++) {
                s += ", " + (a + i * d);
            }
            values[0] = k * (a + l) / 2;
            values[1] = k * (a + l - 1) / 2;
            values[2] = k * (a + l + 2) / 2;
            values[3] = k * (a + l + 1) / 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 

            problemset.s = `If ${a} and ${l} are the first and the last terms of an AP, then what is the sum of first ${k} terms?`
            break;
        }
    }

    problemset = problemset;
    return problemset;
}