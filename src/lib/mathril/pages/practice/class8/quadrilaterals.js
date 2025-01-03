//@ts-nocheck
import {randNum, randInt, gcd, randSubset} from '$lib/mathril/utils/matlib/common';
import { Point } from '$lib/mathril/utils/matlib/point';
import { Irregular } from '$lib/mathril/utils/matlib/irregular';
import { Quadrilateral } from '$lib/mathril/utils/matlib/quadrilateral';

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
export const quadrilaterals = (problemnumber) => {
    let N = 5;
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
            let reg = new Irregular({n});
            reg.computePoints()
            reg.setPoints()
            let poly = `<polygon points="${reg.points}" stroke="currentcolor" stroke-width='2' fill="rgba(255, 255, 255, 0.3)"/>`;
        
            let vertices = '';
            for(let i = 0; i < reg.pointsList.length; i++) {
                vertices += `<circle r="2" cx="${reg.pointsList[i].x}" cy="${reg.pointsList[i].y}" fill="red" stroke="red" stroke-width="1" />`
            }
            // let lines = '';
            // for(let i = 0; i < n; i++) {
            //     lines += `<path d="M ${scaledPoints[i].x},${scaledPoints[i].y} L ${scaledPoints1[i].x},${scaledPoints1[i].y}" stroke="currentcolor" stroke-width='2' fill="none"/>`
            // }
            
            let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the sum of internal angles?</p><svg width="150" height="150" viewBox="-75 -75 150 150" >` + poly + vertices + `</svg></div>`;
            // let svgstart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="100" height="100" viewBox="-75 -75 150 150" transform="rotate(${ri * 360/n})">`;
            // let svgend = `</svg></div>`;
            values[0] = ((n - 2) * 180) + "^\\circ" ;
            values[1] = ((n) * 180) + "^\\circ" ;
            values[2] = ((n - 1) * 180) + "^\\circ" ;
            values[3] = ((n + 1) * 180) + "^\\circ" ;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = '\\(' + values[i] + '\\)';
            } 
            
            problemset.s = svg;
            break;
        }
        case 1: {
            
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

            let trap = new Quadrilateral();
            trap.randomQuad();
            trap.computeSides();
            trap.computeAngles();
            
            let A = Math.floor(180 * trap.angles.A /Math.PI);
            // A = A < 0 ? 360 + A % 360 : A  % 360;
            let B = Math.floor(180 * trap.angles.B /Math.PI);
            // B = B < 0 ? 360 + B  % 360 : B  % 360;
            let C = Math.floor(180 * trap.angles.C /Math.PI);
            // C = C < 0 ? 360 + C  % 360 : C % 360;
            let D = Math.floor(180 * trap.angles.D /Math.PI);
            // D = D < 0 ? 360 + D  % 360 : D % 360;
            
            let angles = [{l: 'A', v: A, s: A}, {l: 'B', v: B, s: B}, {l: 'C', v: C, s: C}, {l: 'D', v: D, s: D}];
            let a = randInt(3, 0);
            angles[a].s = 'x';
            let showAngles = ['', '', '', ''];
            showAngles[a] = 'x';
            let quadrilaterl = trap.draw(['A', 'B', 'C', 'D'], showAngles, true);
            
            let divStart = `<div style="font-size:0.7em;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><span>\\(\\angle A = ${angles[0].s}^\\circ, \\angle B = ${angles[1].s}^\\circ, \\angle C = ${angles[2].s}^\\circ, \\angle D = ${angles[3].s}^\\circ\\)</span>`;
            let vb = trap.computeBBox(['A', 'B', 'C', 'D'], showAngles, true)
            let svgStart = `<svg width="200" height="110" viewBox="${vb.x} ${vb.y} ${vb.width} ${vb.height}" >`;
            
            values[0] = `\\(${angles[a].v}^\\circ\\)`;
            values[1] = `\\(${angles[(a + 1) % 4].v}^\\circ\\)`;
            values[2] = `\\(${angles[(a + 2) % 4].v}^\\circ\\)`;
            values[3] = `\\(${angles[(a + 3) % 4].v}^\\circ\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = divStart + svgStart + quadrilaterl + svgEnd + divEnd;
            break;
        }
        case 2: {
            let n = randInt(100, 4);
            let extAngle = (360 / n).toFixed(2);
            values[0] = n;
            values[1] = n + 1;
            values[2] = n - 1;
            values[3] = n + 2
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `If each exterior angle of a regular polygon is \\(${extAngle}^\\circ\\), then the number of sides is`
            break;
        }
        case 3: {
            let a = randInt(100, 1);
            let b = randInt(100, 1);
            let perimeter = 2 * ( a + b);
            values[0] = b;
            values[1] = Math.abs(a - b);
            values[2] = a + b - 1;
            values[3] = a + b;
            problemset.s = `The perimeter of a parallelogram is ${perimeter}cm. If one of the sides is ${a}cm, then the other side is`
            break;
        }
        case 4: {
            
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

            let trap = new Quadrilateral();
            trap.randomParallelogram();
            trap.computeSides();
            trap.computeAngles();
            
            let A = Math.floor(180 * trap.angles.A /Math.PI);
            let B = 180 - A;
            let C = A;
            let D = B;
            
            
            let angles = [{l: 'A', v: A, s: A}, {l: 'B', v: B, s: B}, {l: 'C', v: C, s: C}, {l: 'D', v: D, s: D}];
            let a = randInt(3, 0);
            
            angles[a].s = 'x';
            let showAngles = ['', '', '', ''];
            showAngles[a] = 'x';
            let quadrilaterl = trap.draw(['A', 'B', 'C', 'D'], showAngles, true);
            
            let divStart = `<div style="font-size:0.7em;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><span>In the parallelogram ABCD, \\(\\angle ${angles[(a + 1) % 4].l} = ${angles[(a + 1) % 4].s}^\\circ, \\angle ${angles[a].l} = ${angles[a].s}^\\circ\\)</span>`;
            let vb = trap.computeBBox(['A', 'B', 'C', 'D'], showAngles, true)
            let svgStart = `<svg width="200" height="110" viewBox="${vb.x} ${vb.y} ${vb.width} ${vb.height}" >`;
            
            values[0] = `\\(${angles[a].v}^\\circ\\)`;
            values[1] = `\\(${angles[(a + 1) % 4].v}^\\circ\\)`;
            values[2] = `\\(${angles[(a + 2) % 4].v + 1}^\\circ\\)`;
            values[3] = `\\(${angles[(a + 3) % 4].v - 1}^\\circ\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = divStart + svgStart + quadrilaterl + svgEnd + divEnd;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}