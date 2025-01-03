//@ts-nocheck
import {randNum, randInt, gcd, randSubset} from '$lib/mathril/utils/matlib/common';
import { Point } from '$lib/mathril/utils/matlib/point';
import { Irregular } from '$lib/mathril/utils/matlib/irregular';
import { Linegraph } from '$lib/mathril/utils/matlib/linegraph';
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
export const graph = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            
            let svgStart = `<svg width="150" height="150" viewBox="-20 -120 140 140" >`;
            let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`
            let svgEnd = '</svg>';
            let divEnd = '</div>';
            let n = randInt(8, 4);
            // let side = randInt(99, 10);
            let x = [];
            let y = [];
            for(let i = 0; i < n; i++) {
                x.push(5 * i);
                y.push(5 * randInt(10, 1));
            }
            let reg = new Linegraph({x, y});
            let maxy = Math.max(...y)
            let miny = Math.min(...y);
            values[0] = maxy ;
            values[1] = miny ;
            values[2] = maxy-1 ;
            values[3] = maxy + 1 ;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = '\\(' + values[i] + '\\)';
            } 
            let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the maximum value of y?</p>`;
            problemset.s = divStart + svgStart + arrow + reg.draw() + svgEnd + divEnd;
            break;
        }
        case 1: {
            
            let svgStart = `<svg width="150" height="150" viewBox="-20 -120 140 140" >`;
            let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`
            let svgEnd = '</svg>';
            let divEnd = '</div>';
            let n = randInt(8, 4);
            // let side = randInt(99, 10);
            let x = [];
            let y = [];
            for(let i = 0; i < n; i++) {
                x.push(5 * i);
                y.push(5 * randInt(10, 1));
            }
            let reg = new Linegraph({x, y});
            let maxy = Math.max(...y)
            let miny = Math.min(...y);
            values[0] = miny ;
            values[1] = maxy ;
            values[2] = miny-1 ;
            values[3] = miny + 1 ;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = '\\(' + values[i] + '\\)';
            } 
            let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the mininum value of y?</p>`;
            problemset.s = divStart + svgStart + arrow + reg.draw() + svgEnd + divEnd;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}