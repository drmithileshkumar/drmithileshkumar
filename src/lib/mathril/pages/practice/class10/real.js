//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Polynomial } from '$lib/mathril/utils/matlib/polynomial';
import { factor, factorString } from '$lib/mathril/utils/matlib/nt';
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
export const real = (problemnumber) => {
    let N = 7;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a = randInt(100, 0);
            let b = randInt(a, 1);
            let r = a % b;
            values[0] = r;
            values[1] = (r + 1);
            values[2] = (r - 1);
            values[3] = r + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(a = ${a}\\) is divided by \\(b = ${b}\\), then the remainder \\(r\\) is?`
            break;
        }
        case 1: {
            let a = randInt(100, 0);
            let b = randInt(a, 1);
            let r = a % b;
            let q = Math.floor((a - r) / b);
            values[0] = q + ', ' + r;
            values[1] = q + ', ' + (r + 1);
            values[2] = (q - 1) + ', ' + (r + b);
            values[3] = (q - 1) + ', ' + r;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(a = ${a}\\) and \\(b = ${b}\\), then \\(q\\) and \\(r\\) in \\[a = bq + r\\] are?`
            break;
        }
        case 2: {
            let a = randInt(100, 20);
            let b1 = randInt(a, Math.floor(a/2));
            let b2 = randInt(b1 - 1, 2);
            let r1 = a % b1;
            let r2 = a % b2;
            values[0] = a;
            values[1] = (a + 1);
            values[2] = (a - 1);
            values[3] = a + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `When \\(a\\) is divided by ${b1}, it leaves remainder ${r1} and when divided by ${b2}, it leaves remainder ${r2} . Then \\(a\\) is?`
            break;
        }
        case 3: {
            let k = randInt(10, 2)
            let r1 = k * randInt(100, 1);
            let r2 = k * randInt(100, 1);
            let g = gcd(r1, r2);
            values[0] = g;
            values[1] = Math.floor(g/2);
            values[2] = 2 * g;
            values[3] = g == 1 ? 3 : g - 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the HCF of ${r1} and ${r2}`;
            break;
        }
        case 4: {
            let poly = new Polynomial();
            poly.randPoly();
            poly = poly.scale(2).add(new Polynomial([{a:1, r:0}]));
            let poly1 = new Polynomial();
            poly1.randPoly();
            poly1 = poly1.scale(2);
            let poly2 = new Polynomial();
            poly2.randPoly();
            poly2 = poly2.scale(2).add(new Polynomial([{a:1, r:0}]));
            let m = poly2.c.length;
            
            poly2.c[m -1].a++;
            
            let poly3 = new Polynomial();
            poly3.randPoly();
            poly3 = poly3.scale(2).add(new Polynomial([{a:1, r:0}]));
            let n = poly3.c.length;
            poly3.c[n -1].a++;
            
            values[0] = `\\(${poly.str()}\\)`;
            values[1] = `\\(${poly1.str()}\\)`;
            values[2] = `\\(${poly2.str()}\\)`;
            values[3] = `\\(${poly3.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following is always an odd number?`;
            break;
        }
        case 5: {
            let n = randInt(10000, 50);
            let factors = factor(n);
            let factors1 = [], factors2 = [], factors3 = [];
            if(factors.length === 1) {
                n = n - 1;
                factors = factor(n);
            }
             
            for(let i = 0; i < factors.length; i++) {
                factors1.push({prime: factors[i].prime, power: factors[i].power});
                factors2.push({prime: factors[i].prime, power: factors[i].power});
                factors3.push({prime: factors[i].prime, power: factors[i].power});
            }
            factors1[0].power++;
            factors2[1].power++;
            factors3[0].power++;
            factors3[1].power--;
           

            values[0] = `\\(${factorString(factors)}\\)`;
            values[1] = `\\(${factorString(factors1)}\\)`;
            values[2] = `\\(${factorString(factors2)}\\)`;
            values[3] = `\\(${factorString(factors3)}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which is the prime factorization of ${n}?`;
            break;
        }
        case 6: {
            let a = randInt(1000, 100);
            let b = randInt(1000, 100);
            let g = gcd(a,b);
            let l = a*b/g;
            values[0] = l;
            values[1] = g;
            values[2] = a * g;
            values[3] = b * g;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which is the LCM of ${a} and ${b} if their GCD is ${g}?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}