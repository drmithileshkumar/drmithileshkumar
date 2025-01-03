//@ts-nocheck
import { Point } from "./point";
import { randInt } from './common';
export class PieChart {
    constructor(
        {
            values = [],
            points = [],
            labels = [],
            centralAngles = [],
            fill = 'rgba(0, 0, 0, 0)',
            stroke = 'currentcolor',
            strokewidth = 2,
            strokedasharray = 'none',
            opacity = 1,
            pathLength = 1,
        } = {}) {
            this.values = values,
            this.points = points,
            this.labels = labels,
            this.centralAngles = centralAngles,
            this.fill = fill,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity = opacity,
            this.pathLength = pathLength
        }
    
    computeAngles() {//angles at the center radians
        
        let sum = this.values.reduce((previous, current) => previous + current, 0);
        this.centralAngles = values.map(v => 2 * v * Math.PI / sum);
        
    }
    computePoints() {
        let r = 180;
        let realAngles = [this.centralAngles[0]];
        for(let i = 1; i < this.centralAngles.length; i++) {
            realAngles[i] = realAngles[i - 1] + this.centralAngles[i];
        }
        
        for(let i = 0; i < this.centralAngles.length; i++) {
            this.points.push((new Point(r, 0)).rotate(realAngles[i]))
        }
    }
    labelAngles() {
        let realAngles = [this.centralAngles[0]];
        for(let i = 1; i < this.centralAngles.length; i++) {
            realAngles[i] = realAngles[i - 1] + this.centralAngles[i];
        }
        let la = [realAngles[0] / 2];
        for(let i = 1; i < realAngles.length; i++) {
            la.push((realAngles[i - 1] + realAngles[i]) / 2);
        }
        return la;
    }
    draw(v = [], l = []) {
        let r = 180;
        let circle = `<circle cx=0 cy=0 r=${r} fill="none" stroke=${this.stroke} stroke-width=${this.strokewidth} />`;
        let radii = "";
        for(let i = 0; i < this.points.length; i++) {
            radii += `<line x1=0 y1=0 x2=${this.points[i].x} y2=${this.points[i].y} fill="none" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`
        }
        
        let vals = '', ls = '';
        if(v.length > 0) {
            let la = this.labelAngles();
            let tp = la.map(a => (new Point(210, 0)).rotate(a));
            for(let i = 0; i < this.points.length; i++) {
                vals += `<text x='${tp[i].x}' y='${tp[i].y}' fill="currentcolor" font-size="24">${v[i]}</text>`
            }
        }
        if(l.length > 0) {
            let la = this.labelAngles();
            let tp = la.map(a => (new Point(210, 0)).rotate(a + Math.PI/36));
            for(let i = 0; i < this.points.length; i++) {
                ls += `<text x='${tp[i].x}' y='${tp[i].y}' fill="currentcolor" font-size="12">${l[i]}</text>`
            }
        }
        
        
        return '<g>' + circle + radii + vals + ls  + '</g>';
    }
    
    computeBBox(v = [], a = []) {
        let elementString = this.draw(v, a);
        const dummyDiv = document.createElement('div');
        dummyDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${elementString}</svg>`;

        const svgElement = dummyDiv.firstChild;

        // Append SVG to the body temporarily
        document.body.appendChild(svgElement);

        // Get the first child (the SVG element we are interested in) and its bounding box
        const element = svgElement.firstChild;
        const bbox = element.getBBox();

        // Clean up by removing the temporary SVG from the body
        document.body.removeChild(svgElement);

        // Return the bounding box
        return bbox;

    }
    
}