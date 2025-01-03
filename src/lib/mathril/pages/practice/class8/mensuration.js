//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Trapezium } from '$lib/mathril/utils/matlib/trapezium';

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
export const mensuration = (problemnumber) => {
    let N = 12;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            
            let svgStart = `<svg width="100" height="100" viewBox="-5 -55 100 100" >`;
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

            let trap = new Trapezium();
            trap.randomT();
            let trapizium = trap.draw();

            let area = trap.area();
            
            let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the area of the trapezium with dimensions \\(a = ${trap.sides.a}, b = ${trap.sides.b}, h = ${trap.sides.h}\\)?</p>`;
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = divStart + svgStart + trapizium + svgEnd + divEnd;
            break;
        }
        case 1: {
            let d = randInt(100, 1);
            let h1 = randInt(100, 1);
            let h2 = randInt(100, 1);
            let area = 0.5 * d * (h1 + h2);
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the length of a diagonal of a quadrilateral is ${d}cm and the height to opposite vertices is ${h1}cm and ${h2}cm, then the area of the quadrilateral is `
            break;
        }
        case 2: {
            let h1 = randInt(100, 1);
            let h2 = randInt(100, 1);
            let area = 0.5 * h1 * h2;
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If the length of diagonals of a rhombus are ${h1}cm and ${h2}cm, then the area of the rhombus is `
            break;
        }
        case 3: {
            let b = randInt(100, 1);
            let l = randInt(100, 1);
            let h = randInt(100, 1);
            let area = 2 * ( l * b + b * h + h * l);
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its total surface area? `
            break;
        }
        case 4: {
            let b = randInt(100, 1);
            let l = randInt(100, 1);
            let h = randInt(100, 1);
            let area = 2 * h * ( l + b);
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its lateral surface area? `
            break;
        }
        case 5: {
            
            let l = randInt(100, 1);
            
            let area = 2 * 3 * ( l * l);
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cube of length ${l}cm, what is its total surface area? `
            break;
        }
        case 6: {
            
            let l = randInt(100, 1);
            
            let area = 2 * 2 * l * l;
            values[0] = area;
            values[1] = area + 1;
            values[2] = area - 1;
            values[3] = area + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cube of length ${l}cm, what is its lateral surface area? `
            break;
        }
        case 7: {
            let r = randInt(100, 1);
            
            let h = randInt(100, 1);
            let area = 2 * Math.PI * r * h;
            values[0] = area.toFixed(2);
            values[1] = (area + 1).toFixed(2);
            values[2] = (area - 1).toFixed(2);
            values[3] = (area + 2).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cylinder of radius ${r}cm and height ${h}cm, what is its lateral surface area? `
            break;
        }
        case 8: {
            let r = randInt(100, 1);
            
            let h = randInt(100, 1);
            let area = 2 * Math.PI * r * ( r + h );
            values[0] = area.toFixed(2);
            values[1] = (area + 1).toFixed(2);
            values[2] = (area - 1).toFixed(2);
            values[3] = (area + 2).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cylinder of radius ${r}cm height ${h}cm, what is its total surface area? `
            break;
        }
        case 9: {
            let b = randInt(100, 1);
            let l = randInt(100, 1);
            let h = randInt(100, 1);
            let volume = l * b * h;
            values[0] = volume;
            values[1] = volume + 1;
            values[2] = volume - 1;
            values[3] = volume + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its volume? `
            break;
        }
        case 10: {
            let l = randInt(100, 1);
            let volume = l * l * l;
            values[0] = volume;
            values[1] = volume + 1;
            values[2] = volume - 1;
            values[3] = volume + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cube of length ${l}cm, what is its volume? `
            break;
        }
        case 11: {
            let r = randInt(100, 1);
            
            let h = randInt(100, 1);
            let area = 2 * Math.PI * r * r * h;
            values[0] = area.toFixed(2);
            values[1] = (area + 1).toFixed(2);
            values[2] = (area - 1).toFixed(2);
            values[3] = (area + 2).toFixed(2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Given a cylinder of radius ${r}cm height ${h}cm, what is its volume? `
            break;
        }
    }
    problemset = problemset;
    return problemset;
}