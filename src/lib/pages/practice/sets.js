import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
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
export const sets = (problemnumber) => {
    let N = 12;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            values[0] = `Collection of purest rivers`;
            values[1] = `Collection of states in India`;
            values[2] = `Collection of countries`;
            values[3] = `Collection of my watches`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following is a not set?`;
            break;
        }
        case 1: {
            
            let m = randInt(20, 10);
            let n = randInt(Math.floor(m/2), 1); // n < x < m /l
            let l = randInt(Math.floor(2*n/3), 2);
            n = Math.random() < 0.5 ? n: -n;
        
            let set = new Sets();
            for(let i = n + 1; i < m; i++) {
                set.e.push(i);
            } 
            let subA = new Sets(set.e.filter(item => item % l == 0));

            values[0] = `\\(${subA.str()}\\)`;
            values[1] = `\\(${set.randomSubset().str()}\\)`;
            values[2] = `\\(${set.randomSubset().str()}\\)`;
            values[3] = `\\(${set.randomSubset().str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following is correct Roster form of the set \\[ x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\]`;
            break;
        }
        case 2: {
            let A = new Sets();
            let U = new Sets();
            U.interval(-10, 10);
            A.randomSet(-10, 10, randInt(10, 8));
            let C = U.diff(A);
            let B = A.krandomSubset(3);
            
            values[0] = `\\(${C.e[Math.floor(Math.random()*C.e.length)]}\\in A\\)`;
            values[1] = `\\(${B.e[0]}\\in A\\)`;
            values[2] = `\\(${B.e[1]}\\in A\\)`;
            values[3] = `\\(${B.e[2]}\\in A\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Given a set \\[A = ${A.str()}\\] which of the following is not correct?`;
            break;
        }
        case 3: {
            
            let m = randInt(20, 10);
            let n = randInt(Math.floor(m/2), 1);
            let l = randInt(Math.floor(2*n/3), 2);
            n = Math.random() < 0.5 ? n : -n;
            let set = new Sets();
            for(let i = n + 1; i < m; i++) {
                set.e.push(i);
            }
            let setA = new Sets(set.e.filter(item => item % l == 0));

            values[0] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\}\\)`;
            values[1] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m}\\}\\)`;
            values[2] = `\\(\\{x : x \\text{ is an integer such that } ${m} < x < ${n} \\text{ and divisible by } ${l}\\}\\)`;
            values[3] = `\\(\\{x : x \\text{ is an integer such that } x \\text{ is divisible by } ${l}\\}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following is correct set-builder form of the set \\[${setA.str()}\\]`;
            break;
        }
        case 4: {
            let q = new Quadratic(0, 0, 0, 'n');
            q.rand(-3, 3);
            let q1 = new Quadratic(0, 0, 0, 'n');
            q1.rand(-3, 3);
            let q2 = new Quadratic(0, 0, 0, 'n');
            q2.rand(-3, 3);
            let q3 = new Quadratic(0, 0, 0, 'n');
            q3.rand(-3, 3);
            let seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];
            let set = new Sets(seq);
            values[0] = q.str();
            values[1] = q1.str();
            values[2] = q2.str();
            values[3] = q3.str();

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = '\\(\\{x: x = ' + values[i] + ', n~\\)' + ' is a natural number and ' + '\\(~1\\leq n\\leq 5\\}\\)';
            } 
            problemset.s = `Which of the following is correct set-builder form of the set \\[${set.str()}\\]`;
            break;
        }
        case 5: {
            
            let m = randInt(20, 1);
            m = Math.random() > 0.5 ? -m : m;
            let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
            let m1 = randInt(20, 2);
            let n1 = randInt(Math.floor(m1/2), 0);
            let m2 = randInt(20, 2);
            let n2 = randInt(Math.floor(m2/2), 0);
            let m3 = randInt(20, 2);
            let n3 = randInt(Math.floor(m3/2), 0);

            values[0] = `\\(${n} < x < ${m}\\)`;
            values[1] = `\\(${n1} < x < ${m1}\\)`;
            values[2] = `\\(${n2} < x < ${m2}\\)`;
            values[3] = `\\(${n3} < x < ${m3}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following will correspond to an empty set?`;
            break;
        }
        case 6: {
            
            let m = randInt(20, 1);
            m = Math.random() > 0.5 ? -m : m;
            let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
            

            values[0] = `\\(${n - m - 1}\\)`;
            values[1] = `\\(${n - m}\\)`;
            values[2] = `\\(${n - m + 1}\\)`;
            values[3] = `\\(${n - m + 2}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the size of set containing \\(x\\) that satisfies \\[${m}< x < ${n}\\]`;
            break;
        }
        case 7: {
            
            let m = randInt(20, 1);
            m = Math.random() > 0.5 ? -m : m;
            let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
            

            values[0] = `\\(${m} < x < ${n}\\)`;
            values[1] = `\\(${m} > x < ${n}\\)`;
            values[2] = `\\(${n} < x > ${m}\\)`;
            values[3] = `\\(${m} < x > ${n}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following corresponds to a finite set?`;
            break;
        }
        case 8: {
            
            let m = randInt(20, 1);
            m = Math.random() > 0.5 ? -m : m;
            let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
            

            values[0] = `\\(${m} < x < ${n}\\)`;
            values[1] = `\\(${m} > x < ${n}\\)`;
            values[2] = `\\(${n} < x > ${m}\\)`;
            values[3] = `\\(${m} < x > ${n}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following does not correspond to an infinite set?`;
            break;
        }
        case 9: {
            
            let n = randInt(20, 1);
            let m = randInt(n + 1, n + 10) + 10;
            let k = randInt(8, 2);
            let s = new Sets();
            s.randomSet(n, m, k);
            let sbad = new Sets();
            sbad.randomSet(n, n + 20, k);
            let poly = '';
            for(let i = 0; i < s.e.length; i++) {
                poly = poly + `(x - ${s.e[i]})`;
            }
            values[0] = `\\(${s.str()}\\)`;
            values[1] = `\\(${sbad.str()}\\)`;
            values[2] = `\\(${sbad.randomSubset().str()}\\)`;
            values[3] = `\\(${sbad.randomSubset().str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Let \\(R\\) be the set of roots of the polynomial \\[${poly} = 0\\] Which of sets is equal to \\(R\\)?`;
            break;
        }
        case 10: {
            
            let n = randInt(20, 1);
            let m = randInt(n + 1, n + 10) + 10;
            let k = randInt(8, 2);
            let U = new Sets();
            U.interval(n, m);
            let s = new Sets();
            s.randomSet(n, m, k);
            let sc = s.c(U);
            let sbad = s.randomSubset();
            sbad.add(sc.randomElem());
            
            values[0] = `\\(${sbad.str()}\\)`;
            values[1] = `\\(${s.randomSubset().str()}\\)`;
            values[2] = `\\(${s.randomSubset().str()}\\)`;
            values[3] = `\\(${s.randomSubset().str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the following is not a subset of \\(${s.str()}\\)?`;
            break;
        }
        case 11: {
            
            let n = randInt(20, 1);
            let m = randInt(n + 1, n + 10) + 10;
            let k = randInt(8, 2);
            
            let s = new Sets();
            s.randomSet(n, m, k);
            
            let r = Math.random();
            let suset = r < 0.25 ? 'N' : r < 0.5 ? 'Z' : r < 0.75 ? 'Q' : 'T';
            let opt = [`\\(A\\subset \\mathbb{N}\\)`, `\\(A\\subset \\mathbb{Z}\\)`, `\\(A\\subset \\mathbb{Q}\\)`, `\\(A\\subset \\mathbb{T}\\)`];
            let ques = "";
            let co;
            switch(suset) {
                case 'N': 
                    s.add(randInt(m, n));
                    ques = 'not';
                    co = 3;
                    break;
                case 'Z':
                    s.add(-randInt(m, n));
                    ques = 'not';
                    co = 0;
                    break;
                case 'Q':
                    let q = new Q();
                    q.randF(m, n);
                    let q1 = q.add(new Q(1, 2))
                    s.add(q1);
                    co = 2;
                    break;
                case 'T':
                    let nq = new Surd();
                    nq.randomSurd(m);
                    s.add(nq);
                    co = 3;
                    break;
            }
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];
            } 
            if(suset == 'Z') {
                problemset.o[choices[correctChoiceIndex + 3]] = `\\(A\\subset \\mathbb{R}\\)`;
            }
            problemset.s = `Given set \\(A = ${s.str()}\\), which of the following is ${ques} correct?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}