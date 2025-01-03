//@ts-nocheck
import {randNum, randInt, gcd, kparts} from '$lib/mathril/utils/matlib/common';
import { Q } from '$lib/mathril/utils/matlib/fraction';

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
    let N = 4;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let k = randInt(10, 2);
            let ncoin = Math.pow(10, k);
            let heads = randInt(ncoin - 1, 1);
            let tails = ncoin - heads;
            
            
            values[0] = heads/ncoin;
            values[1] = tails/ncoin;
            values[2] = Math.abs((heads-tails))/ncoin;
            values[3] = 0;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `A coin is tossed ${ncoin} times. If the number of heads is ${heads} and the numbers of tails is ${tails}, then the probability of heads will be `;
            break;
        }
        case 1: {
            let n = randInt(5, 4);
            let k = randInt(4, 2);
            let ncoin = Math.pow(10, k);
            let frequencies = kparts(ncoin, n + 1);
            let headstr = '';
            let frestr = '';
            for(let i = 0; i <= n; i++) {
                headstr += `<td style="text-align:center; padding:0;">${i}</td>`;
                frestr +=`<td style="text-align:center; padding:0 5px;">${frequencies[i]}</td>`;
            }
            
            let datatable = `<table style="font-size:0.7em;line-height:1rem; border: 0.5px solid; paddnig:0;">
                <tr>
                    <th style="padding:0;"># heads</th>
                    ${headstr}
                </tr>
                <tr>
                    <th style="padding:0;">Frequency</th>
                    ${frestr}
                </tr>
            </table>`
            let probabilities = [];
            for(let i = 0; i <= n; i++) {
                probabilities.push({
                    'v': i,
                    'p': frequencies[i]/ncoin
                })
            }
            probabilities.sort((a,b) => b.p - a.p);
            
            
            
            values[0] = probabilities[0].v;
            values[1] = probabilities[1].v;
            values[2] = probabilities[2].v;
            values[3] = probabilities[3].v;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.7em">${n} coins are tossed simultaneouly ${ncoin} times.</span>`+ datatable + `<span style="font-size:0.7em;line-height:1rem;">If coins are tossed again, how many heads will appear with highest probability?</span> `;
            break;
        }
        case 2: {
            let n = 6;
            let k = randInt(4, 2);
            let ntrials = Math.pow(10, k);
            let frequencies = kparts(ntrials, n);
            let headstr = '';
            let frestr = '';
            for(let i = 0; i < n; i++) {
                headstr += `<td style="text-align:center; padding:0 5px;">${i + 1}</td>`;
                frestr +=`<td style="text-align:center; padding:0 5px;">${frequencies[i]}</td>`;
            }
            
            let datatable = `<table style="font-size:0.7em;line-height:1rem; border: 0.5px solid; paddnig:0;">
                <tr>
                    <th style="padding:0;">Outcome</th>
                    ${headstr}
                </tr>
                <tr>
                    <th style="padding:0;">Frequency</th>
                    ${frestr}
                </tr>
            </table>`
            let probabilities = [];
            for(let i = 0; i < 6; i++) {
                probabilities.push({'v': i + 1, 'p': frequencies[i]/ntrials})
            };
            probabilities.sort((a,b) => a.p - b.p);
           
            values[0] = probabilities[0].v;
            values[1] = probabilities[1].v;
            values[2] = probabilities[2].v;
            values[3] = probabilities[3].v;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.7em">A die is tossed ${ntrials} times.</span>`+ datatable + `<span style="font-size:0.7em;line-height:1rem;">If the die is tossed again, what will be the least likely outcome?</span> `;
            break;
        }
        case 3: {
            let n = 6;
            let k = randInt(4, 2);
            let ntrials = Math.pow(10, k);
            let frequencies = kparts(ntrials, n);
            let headstr = '';
            let frestr = '';
            for(let i = 0; i < n; i++) {
                headstr += `<td style="text-align:center; padding:0 5px;">${i + 1}</td>`;
                frestr +=`<td style="text-align:center; padding:0 5px;">${frequencies[i]}</td>`;
            }
            
            let datatable = `<table style="font-size:0.7em;line-height:1rem; border: 0.5px solid; paddnig:0;">
                <tr>
                    <th style="padding:0;">Outcome</th>
                    ${headstr}
                </tr>
                <tr>
                    <th style="padding:0;">Frequency</th>
                    ${frestr}
                </tr>
            </table>`
            let probabilities = frequencies.map((item) => item/ntrials);
            let parity = Math.random() > 0.5 ? 'even' : 'odd';
            let outcome = {
                'even': probabilities.reduce((sum, f, i) => sum + (i%2) * f, 0),
                'odd': probabilities.reduce((sum, f, i) => sum + ((i + 1)%2) * f, 0),
            }
            values[0] = outcome[parity];
            values[1] = probabilities[1];
            values[2] = probabilities[2];
            values[3] = probabilities[3];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size:0.7em">A die is tossed ${ntrials} times.</span>`+ datatable + `<span style="font-size:0.7em;line-height:1rem;">If the die is tossed again, what will be the probability that outcome is an ${parity} number?</span> `;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}