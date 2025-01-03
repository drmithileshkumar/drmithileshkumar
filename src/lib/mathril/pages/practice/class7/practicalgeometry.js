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
export const practicalgeometry = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let a = randInt(10, 1);
            let b = randInt(10, 1);


            values[0] = `\\(a = ${a}, b = ${b}, c = ${randInt(a+b-1, 1)}\\)`;
            values[1] = `\\(a = ${a}, b = ${b}, c = ${randInt(2*(a+b), a + b + 1)}\\)`;
            values[2] = `\\(a = ${a}, b = ${b}, c = ${randInt(2*(a+b), a + b + 1)}\\)`;
            values[3] = `\\(a = ${a}, b = ${b}, c = ${randInt(2*(a+b), a + b + 1)}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If \\(a, b, c\\) denote the lengths of sides of a triangle, which triangle is not possible?`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}