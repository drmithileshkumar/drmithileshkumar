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
export const angles = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let angle1 = randInt(45, 15);
            let angle2 = randInt(80, 60);
            let angle3 = randInt(150, 100);
            let path = `<path d="M 25,25 L -25,25 L ${50*Math.cos(-90 * Math.PI/180) - 25},${50*Math.sin(-90 * Math.PI/180) + 25}" stroke="white" stroke-width="2" fill="none" />`
            let path1 = `<path d="M 25,25 L -25,25 L ${50*Math.cos(-angle1 * Math.PI/180) - 25},${50*Math.sin(-angle1 * Math.PI/180) + 25}" stroke="white" stroke-width="2" fill="none" />`
            let path2 = `<path d="M 25,25 L -25,25 L ${50*Math.cos(-angle2 * Math.PI/180) - 25},${50*Math.sin(-angle2 * Math.PI/180) + 25}" stroke="white" stroke-width="2" fill="none" />`
            let path3 = `<path d="M 25,25 L -25,25 L ${50*Math.cos(-angle3 * Math.PI/180) - 25},${50*Math.sin(-angle3 * Math.PI/180) + 25}" stroke="white" stroke-width="2" fill="none" />`
            let paths = [];
            
            
            let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the volume?</p><svg width="100" height="100" viewBox="-50 -50 100 100">` + path + `</svg></div>`;
            values[0] = path;
            values[1] = path1;
            values[2] = path2;
            values[3] = path3;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="50" height="50" viewBox="-50 -50 100 100">` + values[i] + `</svg></div>`;
            } 
            
            problemset.s = `Which angle is \\(90^\\circ\\)?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}