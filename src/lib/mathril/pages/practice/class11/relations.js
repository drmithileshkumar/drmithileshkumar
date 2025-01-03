//@ts-nocheck

import {randNum, randInt, randSubset} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
import { Point } from '$lib/mathril/utils/matlib/point';
import { Quadratic } from '$lib/mathril/utils/matlib/quadratic';
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
export const relations = (problemnumber) => {
    let N = 9;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let maxA = randInt(30, 20); 
            let minA = randInt(5, 0);
            let kA = randInt(4, 2);
            let A = new Sets();
            A.randomSet(minA, maxA, kA);
            let maxB = randInt(30, 20); 
            let minB = randInt(5, 0);
            let kB = randInt(4, 2);
            let B = new Sets();
            B.randomSet(minB, maxB, kB);
            let R = A.cartesian(B);
            let RW = B.cartesian(A);
            let RD = kA > kB ? A.krandomSubset(kB).dot(B) : kA < kB ? A.dot(B.krandomSubset(kA)) :  A.dot(B);
            
            values[0] = `\\(${R.str()}\\)`;
            values[1] = `\\(${RD.str()}\\)`;
            values[2] = `\\(${R.randomSubset().str()}\\)`;
            values[3] = `\\(${RW.str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `The Cartesian product of sets \\(A = ${A.str()}\\) and \\(B = ${B.str()}\\)`;
            break;
        }
        case 1: {
            let n = randInt(5, 2);
            let s = new Polynomial([], 'i');
            s.randPoly(3, 3, 0);
            let cp = 1;
            let cp1 = 0;
            let pv;
            for(let i = 1; i <= n; i++) {
                pv = s.value(i);
                cp = cp*pv;
                cp1 += pv;
            }

            values[0] = cp;
            values[1] = cp + 1;
            values[2] = pv;
            values[3] = cp - 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Consider a collection of sets \\(A_i\\) of sizes \\(n(i) = ${s.str()}\\). Then the size of their Cartesian product \\(A_1\\times \\cdots \\times A_n\\) if \\(n = ${n}\\) will be`;
            break;
        }
        case 2: {
            let p = new Polynomial();
            p.randPoly(3, 3, 0);
            let A = new Sets();
            A.randomSet(0, 10, 5);
            let range = [];
            for(let i = 0; i < A.e.length; i++) {
                range.push(p.value(A.e[i]));
            }
            let index = randInt(A.e.length - 1, 0)
            values[0] = `\\((${A.e[index]}, ${range[index] + 1})\\)`;
            values[1] = `\\((${A.e[(index + 1) % A.e.length]}, ${range[(index + 1) % A.e.length]})\\)`;
            values[2] = `\\((${A.e[(index + 2) % A.e.length]}, ${range[(index + 2) % A.e.length]})\\)`;
            values[3] = `\\((${A.e[(index + 3) % A.e.length]}, ${range[(index + 3) % A.e.length]})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `If \\(A = ${A.str()}\\) and \\(R = \\{(x,y) : y = ${p.str()}, x\\in A\\}\\), then `
            break;
        }
        case 3: {
            let m = randInt(15, 5);
            let n = randInt(m - 3, 2);
            let ka = randInt(m - n, 2);
            let kb = randInt(m - n, 2);
            let A = new Sets();
            let B = new Sets();
            A.randomSet(n, m, ka);
            B.randomSet(n, m, kb);
            let f1 = A.randFunction(B);
            let f2 = A.randFunction(B);
            let f3 = A.randFunction(B);
            let f4 = A.randFunction(B);
            let i1 = randInt(f4.e.length - 1, 0);
            let i2 = (i1 + 1) % f4.e.length;
            f4.e[i1][0] = f4.e[i2][0];
            values[0] = `\\(${f4.str()}\\)`
            values[1] = `\\(${f1.str()}\\)`
            values[2] = `\\(${f2.str()}\\)`
            values[3] = `\\(${f3.str()}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which is not a function?`
            break;
        }
        case 4: {
            let f = new Polynomial();
            let g = new Polynomial();
            f.randPoly();
            g.randPoly();
            let h = f.add(g);
            values[0] = `\\(${h.str()}\\)`;
            values[1] = `\\(${h.randomPerturb().str()}\\)`
            values[2] = `\\(${h.randomPerturb().str()}\\)`
            values[3] = `\\(${h.randomPerturb().str()}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `If \\(f(x) = ${f.str()}, g(x) = ${g.str()}\\), then \\((f + g)(x) = \\)`
            break;
        }
        case 5: {
            let f = new Polynomial();
            let g = new Polynomial();
            f.randPoly();
            g.randPoly();
            let h = f.sub(g);
            values[0] = `\\(${h.str()}\\)`;
            values[1] = `\\(${h.randomPerturb().str()}\\)`
            values[2] = `\\(${h.randomPerturb().str()}\\)`
            values[3] = `\\(${h.randomPerturb().str()}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `If \\(f(x) = ${f.str()}, g(x) = ${g.str()}\\), then \\((f - g)(x) = \\)`
            break;
        }
        case 6: {
            let f = new Polynomial();
            let g = new Polynomial();
            f.randPoly(randInt(3, 1));
            g.randPoly(randInt(3, 1));
            let h = f.mul(g);
            values[0] = `\\(${h.str()}\\)`;
            values[1] = `\\(${h.randomPerturb().str()}\\)`
            values[2] = `\\(${h.randomPerturb().str()}\\)`
            values[3] = `\\(${h.randomPerturb().str()}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `If \\(f(x) = ${f.str()}, g(x) = ${g.str()}\\), then \\((fg)(x)\\) is `
            break;
        }
        case 7: {
            let p = new Polynomial();
            p.randPoly(1);
            let points = [];
            let x = randSubset(10, 4);
            for(let i = 0; i < 4; i++) {
                points.push(new Point(x[i], p.value(x[i])))
            }
            values[0] = `\\(y = ${p.str()}\\)`
            values[1] = `\\(y = ${p.randomPerturb().str()}\\)`
            values[2] = `\\(y = ${p.randomPerturb().str()}\\)`
            values[3] = `\\(y = ${p.randomPerturb().str()}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `If \\(f = \\{${points[0].str()}, ${points[1].str()}, ${points[2].str()}, ${points[3].str()}\\}\\) be a linear function from \\(\\mathbb{Z}\\) into \\(\\mathbb{Z}\\), then \\(f(x)\\) is`
            break;
        }
        case 8: {
            let q1 = new Polynomial();
            let q2 = new Polynomial();
            let roots1 = [randInt(10, -10), randInt(10, -10)]; 
            let roots2 = [randInt(10, -10), randInt(10, -10)];
            q1 = q1.fromRoots(roots1);
            q2 = q2.fromRoots(roots2);
            let singularity = [];
            if(roots2[0] !== roots1[0] && roots2[0] !== roots1[1]) singularity.push(roots2[0]);
            if(roots2[1] !== roots1[0] && roots2[1] !== roots1[1]) {
                singularity.push(roots2[1]);
            }
            if(singularity.length === 0) {
                if(roots2[0] === roots2[1]) {
                    if(roots2[0] !== roots1[0] || roots2[0] !== roots1[1]) singularity.push(roots2[0])
                }
            }
            let distinctRoots = [];
            let rootSet = new Set([...roots1, ...roots2]);
            distinctRoots = [...rootSet];
            if(singularity.length === 1) {
                for(let i = 0; i < distinctRoots.length; i++) {
                    if(singularity[0] === distinctRoots[i]) {
                        distinctRoots[i] = distinctRoots[i] + 1;
                    }
                }
            }
            let s1 = singularity.length > 0 ? '- \\{' + String(singularity) + '\\}' : '';
            let s2 = '- \\{' + (distinctRoots[0]) + '\\}'
            let s3 = '- \\{' + distinctRoots[1] + '\\}'
            let s4 = '- \\{' + distinctRoots[2] + '\\}'
            
            values[0] = `\\(\\mathbb{R}${s1}\\)`;
            values[1] = `\\(\\mathbb{R}${s2}\\)`;
            values[2] = `\\(\\mathbb{R}${s3}\\)`;
            values[3] = `\\(\\mathbb{R}${s4}\\)`;

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `The domain of the function \\(f(x)= \\dfrac{${q1.str()}}{${q2.str()}}\\)`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}