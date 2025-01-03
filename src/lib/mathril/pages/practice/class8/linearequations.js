//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import { Linear } from '$lib/mathril/utils/matlib/linear';
import { LinearQ } from '$lib/mathril/utils/matlib/linearQ';
import { Sets } from '../../../utils/matlib/sets';
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
    let N = 4;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let l1 = new LinearQ();
            l1.randL(10, 10, true);
            let c = new Q();
            c.randF(10, 10)
            
            let sol = c.sub(l1.b).div(l1.a);
            sol.reduced();
            
            values[0] = `\\(x = ${sol.str()}\\)`;
            values[1] = `\\(x = ${sol.scale(-1).str()}\\)`;
            values[2] = `\\(x = ${sol.add(new Q(-1)).str()}\\)`;
            values[3] = `no solution`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Solve \\(${l1.str()} = ${c.str()}\\)`;
            break;
        }
        case 1: {

            let l1 = new Linear();
            l1.randL(-10, 10);
            let l2 = new Linear();
            l2.randL(-10, 10);

            let l = l1.sub(l2);
            
            let sol = l.root();
            sol.reduced();
            
            values[0] = `\\(x = ${sol.str()}\\)`;
            values[1] = `\\(x = ${sol.scale(-1).str()}\\)`;
            values[2] = `\\(x = ${sol.add(new Q(-1)).str()}\\)`;
            values[3] = `no solution`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Solve \\(${l1.str()} = ${l2.str()}\\)`;
            break;
        }
        case 2: {

            let l1 = new Linear();
            l1.randL(-10, 10);
            let l2 = new Linear();
            l2.randL(-10, 10, true);
            let x, p, q = 0;
            while(q === 0) {
                x = randInt(10, 1);
                p = l1.value(x);
                q = l2.value(x);
            }
            
            
            values[0] = `\\(x = ${x}\\)`;
            values[1] = `\\(x = ${x + 1}\\)`;
            values[2] = `\\(x = ${x - 1}\\)`;
            values[3] = `\\(x = ${x + 2}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Solve \\[\\frac{${l1.str()}}{${l2.str()}} = \\frac{${p}}{${q}}\\]`;
            break;
        }
        case 3: {
            let names = ['Ram', 'Seeta', 'Shyam', 'Anu', 'Ray', 'Harry', 'John', 'Hari', 'Krishna', 'Divit', 'Swati', "Akash"];
            let namesSet = new Sets(names);
            let chosenNames = namesSet.krandomSubset(2); 
            let q = randInt(10, 3);
            let p = randInt(q - 1, 1);
            let r = new Q(p, q);
            let k = randInt(10, 2);
            let r1 = (new Q(k- 1, k)).mul(r).add(new Q(1, k));
            r1.reduced();
            let t = new Q(r1.den - r1.num, r1.num * r.den - r.num * r1.den);
            t.reduced();
            let l = randInt(5, 2);
            let year = l * t.den;

            let x = t.num * l;
            let age1 = p * x;
            let age2 = q * x;
            
            values[0] = `\\(${age1}, ${age2}\\)`;
            values[1] = `\\(${age2}, ${age1}\\)`;
            values[2] = `\\(${age1-1}, ${age2-1}\\)`;
            values[3] = `\\(${age1+1}, ${age2+1}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Present ages of ${chosenNames.e[0]} and ${chosenNames.e[1]} are in the ratio \\(${p}:${q}\\). ${year} years from now the ratio of their ages will be \\(${r1.num}:${r1.den}\\). Their present ages will be`;
            break;
        }
        
    }
    problemset = problemset;
    return problemset;
}