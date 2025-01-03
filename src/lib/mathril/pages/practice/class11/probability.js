//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { randomFractionDistribution, distStrQ } from '$lib/mathril/utils/matlib/probability';
import { Q } from '$lib/mathril/utils/matlib/fraction'
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
export const probability = (problemnumber) => {
    let N = 5;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let k = randInt(5, 2);
            let dist1 = randomFractionDistribution(new Q(0), new Q(1), k, []);
            dist1[dist1.length - 1] = dist1[dist1.length - 1].add(dist1[0]);
            dist1[dist1.length - 1].reduced()
            
            let dist2 = randomFractionDistribution(new Q(0), new Q(1), k, []);
            let dist3 = randomFractionDistribution(new Q(0), new Q(1), k, []);
            let dist4 = randomFractionDistribution(new Q(0), new Q(1), k, []);
            values[0] = `\\(${distStrQ(dist1)}\\)`
            values[1] = `\\(${distStrQ(dist2)}\\)`
            values[2] = `\\(${distStrQ(dist3)}\\)`
            values[3] = `\\(${distStrQ(dist4)}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `The sample space contains ${k} points. Which of the following is not a valid assignment of probabilities?`
            break;
        }
        case 1: {
                
            let ncoin = randInt(5, 1);
            let ndice = randInt(3, 1);

            values[0] = `\\( ${Math.pow(2, ncoin) * Math.pow(6, ndice)} \\)`;
            values[1] = `\\( ${ncoin * ndice} \\)`;
            values[2] = `\\( ${Math.pow(2, ncoin - 1) * Math.pow(6, ndice)} \\)`;
            values[3] = `\\( ${Math.pow(2, ncoin) * Math.pow(6, ndice - 1)} \\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `A coin is tossed ${ncoin} times and a dice is tossed ${ndice} times, then the number of events in the sample space will be `;
            break;
        }
        case 2: {
            let ncoin = randInt(10, 1);
            let k = randInt(ncoin, 0);
            let p = k === ncoin ? 1 : `\\(\\dfrac{{}^{${ncoin}}C_{${k}}}{2^{${ncoin}}}\\)`;
            values[0] = p;
            values[1] = `\\(\\dfrac{1}{${k}}\\)`
            values[2] = `\\(\\dfrac{${k + 1}}{2^{${ncoin}}}\\)`
            values[3] = `\\(\\dfrac{${k}}{2^{${ncoin - k}}}\\)`

        
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `A coin is tossed ${ncoin} times. What is the probability that exactly ${k} heads occur?`
            break;
        }
        case 3: {
            let ncoin = randInt(10, 1);
            let k = randInt(ncoin, 0);
            let fav = [];
            for(let i = k; i <= ncoin; i++) {
                fav.push(`{}^{${ncoin}}C_{${i}}`)
            } 
            let num = fav.join(' + ');
            let p = `\\(\\dfrac{${num}}{2^{${ncoin}}}\\)`;
            values[0] = p;
            values[1] = `\\(\\dfrac{{}^{${ncoin}}C_{${k}}}{2^{${ncoin - 1}}}\\)`
            values[2] = `\\(\\dfrac{${k + 1}}{2^{${ncoin}}}\\)`
            values[3] = `\\(\\dfrac{${k}}{2^{${ncoin - k}}}\\)`

        
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `A coin is tossed ${ncoin} times. What is the probability that at least ${k} heads occur?`
            break;
        }
        case 4: {
            let ncoin = randInt(10, 1);
            let k = randInt(ncoin, 0);
            let p = k === ncoin/2 ? `\\(\\dfrac{{}^{${ncoin}}C_{${k}}}{2^{${ncoin}}}\\)` : `\\(2\\dfrac{{}^{${ncoin}}C_{${k}}}{2^{${ncoin}}}\\)`;
            
            values[0] = p;
            values[1] = `\\(\\dfrac{1}{${k}}\\)`
            values[2] = `\\(\\dfrac{${k + 1}}{2^{${ncoin}}}\\)`
            values[3] = `\\(\\dfrac{${k}}{2^{${ncoin - k}}}\\)`

        
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `A coin is tossed ${ncoin} times. What is the probability that exactly ${k} heads or tails occur?`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}