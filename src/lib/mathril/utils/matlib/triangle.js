//@ts-nocheck
import { Point } from "./point";
import { randInt } from './common';
export class Triangle {
    constructor(
        {
            vertices = {
                A: new Point(),
                B: new Point(),
                C: new Point()
            },
            sides = {
                a: 1,
                b: 1,
                c: 1
            },
            angles = {
                A: Math.PI/3,
                B: Math.PI/3,
                C: Math.PI/3
            },
            points = '',
            fill = 'rgba(255, 255, 255, 0)',
            stroke = 'currentcolor',
            strokewidth = 2,
            strokedasharray = 'none',
            opacity = 1,
            pathLength = 1,
        } = {}) {
            this.vertices = vertices,
            this.sides = sides,
            this.angles = angles,
            this.fill = fill,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity = opacity,
            this.pathLength = pathLength,
            this.points = points;
        }
    
    randomT() {
        this.vertices.B = new Point(-50, 25);
        this.vertices.C = new Point(50, 25);
        this.vertices.A = new Point(randInt(100, -100), randInt(0, -80))
    }
    computeSides() {
        this.sides.a = this.vertices.B.length(this.vertices.C);
        this.sides.b = this.vertices.C.length(this.vertices.A);
        this.sides.c = this.vertices.A.length(this.vertices.B);
    }
    computeAngles() {
        this.angles.A = this.vertices.A.anglePair(this.vertices.B, this.vertices.C, true);
        this.angles.B = this.vertices.B.anglePair(this.vertices.C, this.vertices.A, true) ;
        this.angles.C = this.vertices.C.anglePair(this.vertices.B, this.vertices.A, true);
    }
    computeVertices() {//origin at B
        this.vertices.B = new Point();
        this.vertices.C = new Point(this.sides.a, 0);
        this.vertices.A = new Point(this.sides.c * Math.cos(this.angles.B), -this.sides.c * Math.sin(this.angles.B))
    }
    draw(v = [], a = [], showAngles = false) {
        let d = `M ${this.vertices.B.x},${this.vertices.B.y} L ${this.vertices.C.x},${this.vertices.C.y} L ${this.vertices.A.x},${this.vertices.A.y} Z`;
        let path = `<path d='${d}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}" />`;
        let vertexLabels = '';
        let Ap, Bp, Cp, CA, BA, CB, AB, AC, BC, l, min;
        if(v.length > 0) {
            Ap = this.vertices.A.s(new Point(5, 10))
            vertexLabels += `<text x='${Ap.x}' y='${Ap.y}' fill="currentcolor" font-size="12">${v[0]}</text>`
            Bp = this.vertices.B.s(new Point(15, -5))
            vertexLabels += `<text x='${Bp.x}' y='${Bp.y}' fill="currentcolor" font-size="12">${v[1]}</text>`
            Cp = this.vertices.C.s(new Point(-10, -5))
            vertexLabels += `<text x='${Cp.x}' y='${Cp.y}' fill="currentcolor" font-size="12">${v[2]}</text>`
        }
        let arcs = '';
        if(showAngles) { 
            
            // arcs += `<path d='${arcA}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`
            arcs += this.vertices.A.drawAngle(this.vertices.C, this.vertices.B, a.length > 0 ? a[0] : '', 1);
            arcs += this.vertices.B.drawAngle(this.vertices.A, this.vertices.C, a.length > 0 ? a[1] : '', 1);
            arcs += this.vertices.C.drawAngle(this.vertices.B, this.vertices.A, a.length > 0 ? a[2] : '', 1);

            // CB = this.vertices.B.pointAtLength(l, this.vertices.C);
            // AB = CB.rotate(-this.angles.B, this.vertices.B);
            // let arcB = `M ${AB.x},${AB.y} A ${l},${l} 0 0 1 ${CB.x},${CB.y}`
            // arcs += `<path d='${arcB}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`

            // AC = this.vertices.C.pointAtLength(l, this.vertices.A);
            // BC = AC.rotate(-this.angles.C, this.vertices.C);
            // let arcC = `M ${BC.x},${BC.y} A ${l},${l} 0 0 1 ${AC.x},${AC.y}`
            // arcs += `<path d='${arcC}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`
        }
        // let angleLabels = '';
        // if(a.length > 0) {
        //     let thetaA = this.vertices.A.a(this.vertices.A.s(CA.a(BA).scale(0.5)).scale(-1.8));
        //     angleLabels += `<text text-anchor="middle" x='${thetaA.x}' y='${thetaA.y}' fill="red" font-size="12">${a[0]}</text>`
        //     let thetaB = this.vertices.B.a(this.vertices.B.s(CB.a(AB).scale(0.5)).scale(-1.5));
        //     angleLabels += `<text  x='${thetaB.x}' y='${thetaB.y}' fill="red" font-size="12">${a[1]}</text>`
        //     let thetaC = this.vertices.C.a(this.vertices.C.s(AC.a(BC).scale(0.5)).scale(-2));
        //     angleLabels += `<text text-anchor="middle" x='${thetaC.x}' y='${thetaC.y}' fill="red" font-size="12">${a[2]}</text>`
        // }
        return '<g>' + path + vertexLabels + arcs  + '</g>';
    }
    computePoints() {
        let pts = [];
        let p, q;
        for (let i = 0; i < this.n; i++) {

            p = new Point(this.r + this.center.x, this.center.y);
            q = p.rotate(2 * i * Math.PI / this.n, this.center);
            pts.push(q);
            // this.points = this.points + q.x.toFixed(2) + ',' + q.y.toFixed(2) + ' ';
        }
        return pts;
    }
    setPoints() {
        let pts = this.computePoints();
        this.points = '';
        for (let i = 0; i < this.n; i++) {
            this.points = this.points + pts[i].x.toFixed(2) + ',' + pts[i].y.toFixed(2) + ' ';
        }
    }
    computeBBox(v = [], a = [], showAngles = false) {
        let elementString = this.draw(v, a , showAngles);
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
    translateCenter(dx, dy) {
        let changePoint = new Point(dx, dy);
        this.center = this.center.a(changePoint);
    }
    
}