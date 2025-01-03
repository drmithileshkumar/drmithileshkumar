//@ts-nocheck
import {randNum, randInt, gcd, pythagoreanTriplet} from '$lib/mathril/utils/matlib/common';

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
export const perimeter = (problemnumber) => {
    let N = 7;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a = randInt(20, 10);
            let l = randInt(2 * a, a);
            
            values[0] = 2 * a - l;
            values[1] = 2 * l - a;
            values[2] = 2 * a - l + 1;
            values[3] = 2 * l - a + 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `A square of length ${a} is converted to a rectangle of one side ${l}. What is the length of the other side?`;
            break;
        }
        case 1: {
            let b = randInt(20, 10);
            let h = randInt(20, 10);
            
            values[0] = b * h;
            values[1] = 2 * (b + h);
            values[2] = b * h / 2;
            values[3] = 2 * b * h;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the area of a parallelogram whose base is ${b} cm and height is ${h} cm?`
            break;
        }
        case 2: {
            let a = randInt(20, 10);
            let b = randInt(20, 10);
            
            values[0] = 2 * (b + a);
            values[1] = a * b;
            values[2] = (a + b) / 2;
            values[3] = 2 * b * a;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the perimeter of a parallelogram whose sides are ${a} cm and ${b} cm?`
            break;
        }
        case 3: {
            let b = randInt(20, 10);
            let h = randInt(20, 10);
            
            values[0] = b * h / 2;
            values[1] = 2 * (b + h);
            values[2] = b * h;
            values[3] = 2 * b * h;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the area of a triangle whose base is ${b} cm and height is ${h} cm?`
            break;
        }
        case 4: {
            let t = pythagoreanTriplet(10);
            values[0] = t.b * t.p / 2;
            values[1] = t.b * t.h / 2;
            values[2] = t.b * t.h;
            values[3] = 2 * t.b * t.h;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the area of a right-angled triangle whose base is ${t.b} cm and hypotenuse is ${t.h} cm?`
            break;
        }
        case 5: {
            let r = randInt(10, 1);
            r = 7 * r;

            values[0] = 2 * 22 * r / 7;
            values[1] = 22 * r / 7;
            values[2] = 2 * r;
            values[3] = 44 * r / 7;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the circumference of a circle of radius ${r} (use \\(\\pi = \\dfrac{22}{7}\\))?`
            break;
        }
        case 6: {
            let r = randInt(10, 1);
            r = 7 * r;

            values[0] = 22 * r * r / 7;
            values[1] = 2 * 22 * r * r / 7;
            values[2] = 2 * r * r;
            values[3] = 44 * r / 7;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the area of a circle of radius ${r} (use \\(\\pi = \\dfrac{22}{7}\\))?`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}