//@ts-nocheck
import {randNum, randInt, gcd, randSubset, shuffle} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import {Regular} from '$lib/mathril/utils/matlib/regular'


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
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            
            let shapes = randSubset(8, 4);
            shapes = shapes.map(item => item + 4);
            shapes = shuffle(shapes);
            let shapeObj = [];
            let polyline;
            let colors = ['red', 'skyblue', 'orange', 'goldenrod', 'currentcolor', 'green'];
            let colorn = randInt(5, 0);
            let shapefigure = '';
            let seq = new Sets();
            for(let i = 0; i < 4; i++) {
                let newshape = new Regular({n:shapes[i],stroke:colors[colorn], strokewidth:2, fill:'none'})
                shapeObj.push(newshape);
                seq.e.push(`<svg width='40' height="40" viewBox="-50 -50 100 100">` + newshape.draw() + '</svg>')
                
            }
            shapeObj[0].setPoints();
            polyline = shapeObj[0].points;
            shapefigure += `<svg width='40' height="40" viewBox="-50 -50 100 100">` + `<polyline points="${polyline}" stroke="${colors[colorn]}" fill="none" stroke-width="2" />` + '</svg>';
            
            values[0] = `<span>` + seq.e[0] + `</span>`;
            values[1] = `<span>` + seq.e[1] + `</span>`;
            values[2] = `<span>` + seq.e[2] + `</span>`;
            values[3] = `<span>` + seq.e[3] + `</span>`;
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