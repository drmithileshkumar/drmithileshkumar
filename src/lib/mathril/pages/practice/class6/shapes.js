//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Quadrilateral } from '$lib/mathril/utils/matlib/quadrilateral';
import { Scale } from '$lib/mathril/utils/matlib/scale';
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
export const shapes = (problemnumber) => {
    let N = 7;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let scl = new Scale();
            scl.randomScale();
            values[0] = scl.end;
            values[1] = (scl.end - 0.1).toFixed(1);
            values[2] = (scl.end + 0.1).toFixed(1);
            values[3] = (scl.end + 0.2).toFixed(1);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What is the scale reading in <div style="margin:auto;display:flex;justify-content:center;align-items:center;">${scl.draw()}</div>?`;
            break;
        }
        case 1: {
            let r1 = randInt(12, 1);
            let r2 = randInt(12, 1);
            r2 = r1 === r2 ? (r1 + 1) % 12 : r2;

            values[0] = `\\(\\dfrac{${(r2 - r1 + 12) % 12}}{12}\\)`;
            values[1] = `\\(\\dfrac{${(r2 - r1 + 11) % 12}}{12}\\)`;
            values[2] = `\\(\\dfrac{${Math.abs(r2 - r1)}}{12}\\)`;
            values[3] = `\\(\\dfrac{${(r1) % 12}}{${r2}}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `What fraction of a clockwise revolution does the hour hand of a clock turn through when it goes from ${r1} to ${r2} ?`;
            break;
        }
        case 2: {
            let sides = ['right', 'back', 'left'];
            let mods = [1, 2, 3];
            let directions = ['north', 'east', 'south', 'west'];
            let sideI = randInt(2, 0);
            let directionI = randInt(3, 0);
            let facing = directions[directionI];
            let side = sides[sideI];
            values[0] = directions[(directionI + mods[sideI]) % 4].toUpperCase();
            values[1] = directions[(directionI + mods[sideI] + 1) % 4].toUpperCase();
            values[2] = directions[(directionI + mods[sideI] + 2) % 4].toUpperCase();
            values[3] = directions[(directionI + mods[sideI] + 3) % 4].toUpperCase();
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If you are facing ${facing}, then what is the direction ${side} to you ?`;
            break;
        }
        case 3: {
            let angles = ['acute', 'right', 'obtuse', 'straight', 'reflex'];
            let angleI = randInt(4, 0);
            let angleValue = 0;
            switch(angles[angleI]) {
                case 'acute': {
                    angleValue = randInt(89, 0);
                    break;
                }
                case 'right': {
                    angleValue = 90;
                    break;
                }
                case 'obtuse': {
                    angleValue = randInt(179, 91);
                    break;
                }
                case 'straight': {
                    angleValue = 180;
                    break;
                }
                case 'reflex': {
                    angleValue = randInt(359, 181);
                    break;
                }
            }
            values[0] = angles[angleI];
            values[1] = angles[(angleI + 1) % 5];
            values[2] = angles[(angleI + 2) % 5];
            values[3] = angles[(angleI + 3) % 5];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If angle is \\(${angleValue}^\\circ\\), then it is`;
            break;
        }
        case 4: {
            let s1 = randInt(100, 50);
            let s2 = randInt(s1 - 1, 30);
            let s3 = randInt(s2 - 1, 10);
            let triangles = ['Scalene', 'Isosceles', 'Equilateral'];
            let c = randInt(2, 0);
            let options = [];
            switch(triangles[c]) {
                case 'Scalene': {
                    options = [
                        s1 + ', ' + s2 + ', ' + s3, 
                        s1 + ', ' + s1 + ', ' + s2, 
                        s2 + ', ' + s2 + ', ' + s2,
                        s3 + ', ' + s1 + ', ' + s1
                    ]
                    break;
                }
                case 'Isosceles': {
                    options = [
                        s1 + ', ' + s1 + ', ' + s3, 
                        s1 + ', ' + s3 + ', ' + s2, 
                        s2 + ', ' + s1 + ', ' + s3,
                        s3 + ', ' + s1 + ', ' + s2
                    ]
                    break;
                }
                case 'Equilateral': {
                    options = [
                        s2 + ', ' + s2 + ', ' + s2,
                        s1 + ', ' + s2 + ', ' + s3, 
                        s1 + ', ' + s1 + ', ' + s2, 
                        s3 + ', ' + s1 + ', ' + s1
                    ]
                    break;
                }
            }
            let r1 = randInt(12, 1);
            let r2 = randInt(12, 1);
            r2 = r1 === r2 ? (r1 + 1) % 12 : r2;

            values[0] = options[0];
            values[1] = options[1];
            values[2] = options[2];
            values[3] = options[3];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which of the sides represent an ${triangles[c]} triangle ?`;
            break;
        }
        case 5: {
            let triangles = ['acute-angled', 'right-angled', 'obtuse-angled', 'none'];
            let c = randInt(2, 0);
            let a1, a2, a3;
            
            switch(triangles[c]) {
                case 'acute-angled': {
                    a1 = randInt(89, 2);
                    a2 = randInt(89, 91 - a1);
                    a3 = 180 - (a1 + a2);
                    break;
                }
                case 'right-angled': {
                    a1 = 90;
                    a2 = randInt(89, 1);
                    a3 = 90 - a2;
                    break;
                }
                case 'obtuse-angled': {
                    a1 = randInt(178, 91);
                    a2 = randInt(179 - a1, 1);
                    a3 = a3 = 180 - (a1 + a2);
                    break;
                }
            }
            

            values[0] = triangles[c];
            values[1] = triangles[(c + 1) % 4];
            values[2] = triangles[(c + 2) % 4];
            values[3] = triangles[(c + 3) % 4];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If angles of a triangle are given by \\(${a1}^\\circ, ${a2}^\\circ\\) and \\(${a3}^\\circ\\), then the triangle is ?`;
            break;
        }
        case 6: {
            let quadrilaterals = ['rectangle', 'square', 'parallelogram', 'rhombus', 'trapezium'];
            let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;">`;
            let viewBox = "-100 -100 200 200"
            let svgStart = `<svg width="100" height="100" viewBox="${viewBox}">`;
            
            let svgEnd = '</svg>';
            let divEnd = '</div>';
            let x = randInt(-20, -40);
            let y = randInt(-20, -40);
            let a = randInt(90, 0);
            let sk = randInt(70, 20);
            let d = "M " + x + ',' + y + " L " + (-x) + ',' + y + ' L ' + (-2.5 * x) + ',' + (-y) + ' L ' + x + ',' + (-y)  + " Z";
            let dr = "M " + x + ',' + x + " L " + (-x) + ',' + x + ' L ' + (-1.5 * x) + ',' + (-x) + ' L ' + (-0.5 * x) + ',' + (-x)  + " Z";
            let rhm = new Quadrilateral();
            rhm.randomRhombus();
            let rhmViewBox = rhm.computeBBox();
            let rectDraw = `<rect x=${x} y=${y} width=${-2 * x} height=${-2 * y} stroke='currentcolor' stroke-width='2' fill='none' transform='rotate(${a})' />`;
            let sqrDraw = `<rect x=${x} y=${x} width=${-2 * x} height=${-2 * x} stroke='currentcolor' stroke-width='2' fill='none' transform='rotate(${a})' />`
            let prlDraw = `<rect x=${x} y=${y} width=${-2 * x} height=${-2 * y} stroke='currentcolor' stroke-width='2' fill='none' transform='rotate(${a}) skewX(${sk})' />`
            let rhmDraw = rhm.draw();
            let trpzmDraw = `<path d="${d}" stroke='currentcolor' stroke-width='2' fill='none' transform='rotate(${a})' />`

            let curves = [rectDraw, sqrDraw, prlDraw, rhmDraw, trpzmDraw];
            let quadI = randInt(4, 0);
            // console.log(quadI, quadrilaterals[quadI], quadrilaterals[(quadI + 1) %5], quadrilaterals[(quadI + 2) %5], quadrilaterals[(quadI + 3) %5])
            values[0] = curves[quadI];
            values[1] = curves[(quadI + 1) %5];
            values[2] = curves[(quadI + 2) %5];
            values[3] = curves[(quadI + 3) %5];
            for (let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = divStart + svgStart + values[i] + svgEnd + divEnd;
            }

            problemset.s = `Which is a ${quadrilaterals[quadI]}?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}