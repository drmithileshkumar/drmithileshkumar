//@ts-nocheck
import {randNum, randInt, gcd, randSubset} from '$lib/mathril/utils/matlib/common';
import { Point } from '$lib/mathril/utils/matlib/point';
import { Regular } from '$lib/mathril/utils/matlib/regular';
import { Cube } from '$lib/mathril/utils/matlib/cube';
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

            let cubes = '';
            let squares = ['', '', '', ''];
            let dx = randInt(3, 2);
            let dy = 1;
            let dz = randInt(3, 2);
            let dist = [];
            for(let k = dz; k >= 0; k--) {
                let nx = randInt(6, 1);
                let curlay = [];
                for(let i = 0; i < nx; i++) {
                    curlay.push({x:i, y:k})
                }
                dist.push(curlay);
            }
            // console.log(dz, dist.length)
            let missSquares = [];
            for(let i = 0; i < 3; i++) {
                // let randlayer = randInt(dz, 0);
                // console.log(dist[i].length)
                let missquare = randInt(dist[i].length - 1, 0);
                missSquares.push([i,missquare]);
            }
            // console.log(missSquares)
            for(let i = 0; i < dist.length; i++) {
                for(let j = 0; j < dist[i].length; j++) {
                    let c = new Cube({transform: `translate(${(10*dist[i][j].x + 5 * i)} ${-5 * dist[i][j].y})`});
                    cubes += c.draw();
                    squares[0] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${(10*dist[i][j].x + 10 * i)} ${-10 * dist[i][j].y})"/>`
                    if(!(i === missSquares[0][0] && j === missSquares[0][1])) {
                        // console.log('1..', i, j)
                        squares[1] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${(10*dist[i][j].x + 10 * i)} ${-10 * dist[i][j].y})"/>`
                    }
                    if(!(i === missSquares[1][0] && j === missSquares[1][1])) {
                        // console.log('2..', i, j)
                        squares[2] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${(10*dist[i][j].x + 10 * i)} ${-10 * dist[i][j].y})"/>`
                    }
                    if(!(i === missSquares[2][0] && j === missSquares[2][1])) {
                        // console.log('3..', i, j)
                        squares[3] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${(10*dist[i][j].x + 10 * i)} ${-10 * dist[i][j].y})"/>`
                    }
                }
            }
            
            // let n = randInt(10, 4);
            
            // let reg = new Regular({n});
            // let poly = `<polygon points="${reg.points}" stroke="white" stroke-width='2' fill="rgba(255, 255, 255, 0.3)" transform="scale(1 0.5) rotate(${90/n})"/>`;
            // let poly1 = `<polygon points="${reg.points}" stroke="white" stroke-width='2' fill="rgba(255, 255, 255, 0.3)"  transform="translate(0 50) scale(1 0.5) rotate(${90/n})"/>`;
            
            // let points = reg.computePoints();
            // let scaledPoints = points.map(point => point.rotate(Math.PI/(2*n)).scale(1, 0.5))
            // let scaledPoints1 = points.map(point => point.rotate(Math.PI/(2*n)).scale(1, 0.5).translate(0, 50))
            // let lines = '';
            // for(let i = 0; i < n; i++) {
            //     lines += `<path d="M ${scaledPoints[i].x},${scaledPoints[i].y} L ${scaledPoints1[i].x},${scaledPoints1[i].y}" stroke="white" stroke-width='2' fill="none"/>`
            // }
            
            let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p style="margin:0;">Which is the correct top view of</p><svg width="150" height="110" viewBox="-15 -10 100 20" >` + cubes   + `</svg></div>`;
            let svgstart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="150" height="110" viewBox="-15 -10 100 20" >`
            let svgend = `</svg></div>`;
            values[0] = svgstart + squares[0] + svgend;
            values[1] = svgstart + squares[1] + svgend;
            values[2] = svgstart + squares[2] + svgend;
            values[3] = svgstart + squares[3] + svgend;
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