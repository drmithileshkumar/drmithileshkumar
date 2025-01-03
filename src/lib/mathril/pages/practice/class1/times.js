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
export const times = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let circle = `<circle cx='0' cy='0' r='45' stroke='currentcolor' stroke-width='2' fill='none' />`;
            let texts = '';
            for(let i = 1; i <= 12; i++) {
                texts += `<text text-anchor="middle" x=${38 * Math.cos(Math.PI/6 * i - Math.PI/2)} y=${38 * Math.sin(Math.PI/6 * i - Math.PI/2)} fill="rgba(0, 175, 255, 1)" font-size="14" transform="translate(0 4)">${i}</text>`
            }
            let minuteHand = `<line x1='0' y1='0' x2='0' y2='-40' stroke="currentcolor" stroke-width="2" fill="none" />`;
            
            let hr = randInt(12, 1);
            let hourHand = `<line x1='0' y1='0' x2='${25 * Math.cos(Math.PI/6 * hr - Math.PI/2)}' y2='${25 * Math.sin(Math.PI/6 * hr - Math.PI/2)}' stroke-linecap="round" stroke="red" stroke-width="4" fill="none" />`;
            
            let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;"><svg width="100" height="100" viewBox="-50 -50 100 100">` + circle + texts + minuteHand + hourHand + `</svg></div>`;
            values[0] = hr;
            values[1] = (hr + 1) % 12 + 1;
            values[2] = (hr + 2) % 12 + 1;
            values[3] = (hr + 3) % 12 + 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = '<span style="color:red">' + values[i] + ' </span>' + `&nbsp; O' Clock`;
            } 
            
            problemset.s = svg;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}