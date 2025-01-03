//@ts-nocheck
import {randNum, randInt, gcd} from '$lib/mathril/utils/matlib/common';
import { Grid } from '$lib/mathril/utils/matlib/grid';
import { Point } from "$lib/mathril/utils/matlib/point";
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
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the perimeter if each box has length 10?</p>`;
            let svgStart = `<svg width="200" height="200" viewBox="-150 -150 300 300" >`;
            let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
                                </marker></defs>`
            let svgEnd = '</svg>';
            let divEnd = '</div>';
            let grid = new Grid({x: -150, y: -150, width: 300, height: 300});
        
            let start = {
                x: -10 * randInt(10, 7),
                y: -10 * randInt(10, 7)
            }
            let end = {
                x: 10 * randInt(10, 7),
                y: 10 * randInt(10, 7)
            }
            let nh = (end.x - start.x)/10;
            let nx = (end.y - start.y)/10;
            
            let bottomy = [start.y];
            let topy = [end.y];
            bottomy.push(start.y + 10);
            topy.push(end.y - 10)
            for(let i = 2; i < nh; i++) {
                bottomy.push(10 * randInt(Math.min(bottomy[i - 1]/10 + 5, end.y/10), bottomy[i - 1]/10 + 1))
                topy.push(10 * randInt(topy[i - 1]/10 , Math.max(topy[i - 1]/10 - 5, start.y/10)))
            }
            let points = [start];
            let lastpoint = start;
            for(let i = 1; i < nh; i++) {
                points.push({
                    x: lastpoint.x,
                    y: bottomy[i]
                })
                points.push( {
                    x: start.x + i * 10,
                    y: bottomy[i]
                })
                lastpoint = points[points.length - 1]
            }
            points.push(end);
            lastpoint = end;
            for(let i = 1; i < nh; i++) {
                points.push({
                    x: lastpoint.x,
                    y: topy[i]
                })
                points.push({
                    x: end.x - i * 10,
                    y: topy[i]
                })
                lastpoint = points[points.length - 1]
            }
            let pstr = points[0].x + ',' + points[0].y;
            for(let i = 1; i < points.length; i++) {
                pstr += ' ' + points[i].x + ',' + points[i].y;
            }
            let polygon = `<polygon points='${pstr}' stroke="currentcolor" stroke-width="3" fill="none" />`
            
            values[0] = 20 * (nh + nx);
            values[1] = 20 * (nh + nx - 1);
            values[2] = 20 * (nh + nx + 1);
            values[3] = 20 * (nh + nx + 2);
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = divStart + svgStart + grid.draw() + polygon + svgEnd + divEnd;
            break;
        }
        case 1: {
            let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the area if each box has length 10?</p>`;
            let viewBox = {
                x: -150,
                y: -150,
                width: 300,
                height: 300
            }
            
            let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
                                </marker></defs>`
            let svgEnd = '</svg>';
            let divEnd = '</div>';
            let grid = new Grid();
        
            let area = randInt(10, 1);
            let dirs = [{x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}];
            let dir = 0;
            let target = area;
            let points = [new Point(-50, -50)];
            let newX = 0;
            let newY = 0;
            let newP = new Point();
            let min = new Point(-150, -150), max = new Point(150, 150);
            let fp = [];
            for(let i = 1; i < area; i++) {
                fp = [];
                dir = randInt(3, 0);
                newX = points[i - 1].x + dirs[dir].x * grid.dX;
                newY = points[i - 1].y + dirs[dir].y * grid.dY;
                if(newX < min.x) min.x = newX;
                if(newY < min.y) min.y = newY;
                if(newX > max.x) max.x = newX;
                if(newY > max.y) max.y = newY;
                newP = new Point(newX, newY);
                fp = points.filter(pt => pt.isEqual(newP));
                if(fp.length === 0) {
                    points.push(newP);
                } else {
                    i--;
                }
                
            }
            
            grid.x = min.x;
            grid.y = min.y;
            grid.width = max.x - min.x;
            grid.height = max.y - min.y;
            let shaded = '';
            for(let i = 0; i < area; i++) {
                shaded += `<rect x=${points[i].x} y=${points[i].y} width=${grid.dX} height=${grid.dY} fill="currentcolor" />`
            }
            viewBox.x = grid.x;
            viewBox.y = grid.y;
            viewBox.width = grid.width;
            viewBox.height = grid.height
            let svgStart = `<svg width="200" height="200" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" >`;
            values[0] = area * 100;
            values[1] = (area + 1) * 100;
            values[2] = (area - 1) * 100;
            values[3] = (area + 2) * 100;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = divStart + svgStart + grid.draw() + shaded + svgEnd + divEnd;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}