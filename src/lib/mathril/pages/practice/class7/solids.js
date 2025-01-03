//@ts-nocheck
import {randNum, randInt, gcd, randSubset} from '$lib/mathril/utils/matlib/common';
import { Point } from '$lib/mathril/utils/matlib/point';
import { Regular } from '$lib/mathril/utils/matlib/regular';
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
export const solids = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(10, 4);
            // let side = randInt(99, 10);
            let reg = new Regular({n});
            
            let poly = `<polygon points="${reg.points}" stroke="currentcolor" stroke-width='2' fill="rgba(255, 255, 255, 0.3)" transform="scale(1 0.5) rotate(${90/n})"/>`;
            let poly1 = `<polygon points="${reg.points}" stroke="currentcolor" stroke-width='2' fill="rgba(255, 255, 255, 0.3)"  transform="translate(0 50) scale(1 0.5) rotate(${90/n})"/>`;
            
            let points = reg.computePoints();
            
            let scaledPoints = points.map(point => point.rotate(Math.PI/(2*n)).scale(1, 0.5))
            let scaledPoints1 = points.map(point => point.rotate(Math.PI/(2*n)).scale(1, 0.5).translate(0, 50))
            
            let lines = '';
            for(let i = 0; i < n; i++) {
                lines += `<path d="M ${scaledPoints[i].x},${scaledPoints[i].y} L ${scaledPoints1[i].x},${scaledPoints1[i].y}" stroke="currentcolor" stroke-width='2' fill="none"/>`
            }
            
            let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>How many faces are there in this solid?</p><svg width="150" height="110" viewBox="-75 -30 150 110" >` + poly + poly1 + lines  + `</svg></div>`;
            // let svgstart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="100" height="100" viewBox="-75 -75 150 150" transform="rotate(${ri * 360/n})">`;
            // let svgend = `</svg></div>`;
            values[0] = n + 2;
            values[1] = n;
            values[2] = n - 1;
            values[3] = n + 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = svg;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}