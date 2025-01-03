//@ts-nocheck
import {randNum, randInt, gcd, shuffle, kparts} from '$lib/mathril/utils/matlib/common';
import {Q, F} from '$lib/mathril/utils/matlib/fraction';
import { PieChart } from '$lib/mathril/utils/matlib/piechart';
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
export const data = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let sampleSize = randInt(40, 10);
            let possibleEvents = ['W', "M", 'B', 'G'];
            let experiment = [];
            for(let i = 0; i < sampleSize; i++) {
                experiment.push(possibleEvents[randInt(3, 0)]);
            }
            let frequency = {
                'W': 0,
                'M': 0,
                'B': 0,
                'G': 0
            }
            for(let i = 0; i < sampleSize; i++) {
                frequency[experiment[i]]++;
            }
            let names = ['Women', 'Men', 'Boys', 'Girls'];
            let qc = randInt(3, 0);
            
            let datasetStr = experiment[0];
            for(let i = 1; i < experiment.length; i++) {
                datasetStr += ' ' + experiment[i];
            }

            
            values[0] = frequency[possibleEvents[qc]];
            values[1] = frequency[possibleEvents[qc]] + 1;
            values[2] = frequency[possibleEvents[qc]] - 1;
            values[3] = frequency[possibleEvents[qc]] + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the frequency of ${names[qc]} in ${datasetStr} ? `;
            break;
        }
        case 1: {
            let n = randInt(6, 3);
            let centralAngles = kparts(360, n);
            let radians = centralAngles.map(a => a * Math.PI/180);
            let pieChart = new PieChart();
            pieChart.centralAngles = radians; 
            pieChart.computePoints();
            let vals = centralAngles.map(a => a * 10);
            pieChart.values = vals;
            let chart = pieChart.draw(vals);
            let vb = pieChart.computeBBox(vals);
            let divStart = `<div style="font-size:0.7em;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><span>What is the largest percentage?</span>`;
            
            let svgStart = `<svg width="200" height="200" viewBox="${vb.x} ${vb.y} ${vb.width} ${vb.height}" >`;
            let svgEnd = '</svg>';
            let divEnd = '</div>';
            let per = vals.map(v => v * 100 / 3600);
            
            per = per.sort((a, b) => a - b);
            
            values[0] = per[per.length - 1].toFixed(2);
            values[1] = (per[per.length - 1] + 1).toFixed(2);
            values[2] = (per[per.length - 1] - 1).toFixed(2);
            values[3] = (per[per.length - 1] + 2).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = divStart + svgStart + chart + svgEnd + divEnd;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}