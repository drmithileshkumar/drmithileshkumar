//@ts-nocheck
import {randNum, randInt, gcd, randSubset} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import {Regular} from '$lib/mathril/utils/matlib/regular'
import { svgshapes } from '$lib/mathril/utils/matlib/svgshapes';
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
export const patterns = (problemnumber) => {
    let N = 3;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(5, 3);//pattern size
            // let indices = randSubset(15, 4);
            let shapen = randInt(13, 0);
            let othershape = 13 - shapen;
            let colors = ['red', 'skyblue', 'orange', 'goldenrod', 'currentcolor', 'green'];
            let colorIndices = randSubset(6, 2);
            let shapefigure = '';
            for(let i = 0; i < n; i++) {
                shapefigure += `<span style="width: 40px;">` + svgshapes[shapen](colors[colorIndices[i % 2]], colors[colorIndices[i % 2]]) + `</span>` ;
            }
            values[0] = svgshapes[shapen](colors[colorIndices[n % 2]], colors[colorIndices[n % 2]]);
            values[1] = svgshapes[shapen](colors[colorIndices[(n + 1) % 2]], colors[colorIndices[(n + 1) % 2]]);
            values[2] = svgshapes[othershape](colors[colorIndices[0]], colors[colorIndices[0]]);
            values[3] = svgshapes[othershape](colors[colorIndices[1]], colors[colorIndices[1]]);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<span style="width: 40px;">` + values[i]  + `</span>`;
            } 
            shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; font-size: 1.5em; flex-direction: row; flex-wrap:wrap; min-height:2em;">` + shapefigure + `</div>`
            problemset.s = shapefigure;
            break;
        }
        case 1: {
            let n = randInt(5, 3);//pattern size
            // let indices = randSubset(15, 4);
            let shapen = randInt(13, 0);
            let othershape = 13 - shapen;
            let shapes = [shapen, othershape]
            let colors = ['red', 'skyblue', 'orange', 'goldenrod', 'currentcolor', 'green'];
            let colorIndices = randSubset(6, 2);
            let shapefigure = '';
            for(let i = 0; i < n; i++) {
                shapefigure += `<span style="width: 40px;">` + svgshapes[shapes[i % 2]](colors[colorIndices[i % 2]], colors[colorIndices[i % 2]]) + `</span>`;
            }
            values[0] = svgshapes[shapes[n%2]](colors[colorIndices[n % 2]], colors[colorIndices[n % 2]]);
            values[1] = svgshapes[shapes[(n + 1 )%2]](colors[colorIndices[n % 2]], colors[colorIndices[n % 2]]);
            values[2] = svgshapes[shapes[n%2]](colors[colorIndices[(n + 1) %2]], colors[colorIndices[(n + 1) %2]]);
            values[3] = svgshapes[shapes[(n + 1)%2]](colors[colorIndices[(n + 1) %2]], colors[colorIndices[(n + 1) %2]]);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<span style="width: 40px;">` + values[i]  + `</span>`;
            } 
            shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; font-size: 1.5em; flex-direction: row; flex-wrap:wrap; min-height:2em;">` + shapefigure + `</div>`
            problemset.s = shapefigure;
            break;
        }
        case 2: {
            let n = randInt(5, 3);//pattern size
            // let indices = randSubset(15, 4);
            let start = randInt(5, 3);

            let shapen = randInt(14, 0);
            let othershape = shapen === 7 ? 8 : 14 - shapen;
            let shapes = [shapen, othershape]
            let colors = ['red', 'skyblue', 'orange', 'goldenrod', 'currentcolor', 'green'];
            let colorIndices = randSubset(6, 2);
            let shapefigure = '';
            let seq = new Sets();
            for(let i = start; i < n + start; i++) {
                let newshape = new Regular({n:i,stroke:'currentcolor', strokewidth:2, fill:'none'})
                seq.e.push(`<svg width='40' height="40" viewBox="-50 -50 100 100">` + newshape.draw() + '</svg>')
                shapefigure += `<svg width='40' height="40" viewBox="-50 -50 100 100">` + newshape.draw() + '</svg>';
            }
            let subseq = seq.krandomSubset(3)
            let last = new Regular({n:n + start,stroke:'currentcolor', strokewidth:2, fill:'none'})
            values[0] = `<span style="font-size: 1.5em;color: ${colors[colorIndices[(n) % 2]]}">` + `<svg width='40' height="40" viewBox="-50 -50 100 100">` + last.draw() + '</svg>' + `</span>`;
            values[1] = `<span style="font-size: 1.5em;color: ${colors[colorIndices[(n) % 2]]}">` + subseq.e[0] + `</span>`;
            values[2] = `<span style="font-size: 1.5em;color: ${colors[colorIndices[(n + 1) %2]]}">` + subseq.e[1] + `</span>`;
            values[3] = `<span style="font-size: 1.5em;color: ${colors[colorIndices[(n + 1) %2]]}">` + subseq.e[2] + `</span>`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 

            shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; font-size: 1.5em; flex-direction: row; flex-wrap:wrap; min-height:2em;">` + shapefigure + `</div>`
            problemset.s = shapefigure;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}