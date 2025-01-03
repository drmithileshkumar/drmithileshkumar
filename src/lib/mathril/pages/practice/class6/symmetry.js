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
export const symmetry = (problemnumber) => {
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
            let side = randInt(99, 10);
            let reg = new Regular({n});
            let poly = `<polygon points="${reg.points}" stroke="currentcolor" stroke-width='2' fill="none" />`;
            let symline = `<path d="M -75,0 H 75" stroke="currentcolor" stroke-width="1" stroke-dasharray="4" fill="none" />`
            let points = reg.computePoints();
            let ri = randInt(n - 1, 1);
            let ri1 = (n - ri);
            let ri2 = (n - ri + 1) % n;
            let ri3 = (n - ri + 2) % n;
            let ri4 = (n - ri + 3) % n;
            let A = points[ri];
            let pointA = `<circle cx="${A.x}" cy="${A.y}" r="5" fill="red"/>`
            let point1 = `<circle cx="${points[ri1].x}" cy="${points[ri1].y}" r="5" fill="red"/>`
            let point2 = `<circle cx="${points[ri2].x}" cy="${points[ri2].y}" r="5" fill="red"/>`
            let point3 = `<circle cx="${points[ri3].x}" cy="${points[ri3].y}" r="5" fill="red"/>`
            let point4 = `<circle cx="${points[ri4].x}" cy="${points[ri4].y}" r="5" fill="red"/>`
            let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the symmetrical point?</p><svg width="150" height="150" viewBox="-75 -75 150 150" transform="rotate(${ri * 360/n})">` + poly + symline  + pointA + `</svg></div>`;
            let svgstart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="100" height="100" viewBox="-75 -75 150 150" transform="rotate(${ri * 360/n})">`;
            let svgend = `</svg></div>`;
            values[0] = svgstart + poly + symline  + point1 + svgend;
            values[1] = svgstart + poly + symline  + point2 + svgend;
            values[2] = svgstart + poly + symline  + point3 + svgend;
            values[3] = svgstart + poly + symline  + point4 + svgend;
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