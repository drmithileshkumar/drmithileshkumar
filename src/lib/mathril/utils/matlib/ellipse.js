//@ts-nocheck
import { Point } from "./point";
import { randInt } from './common';
import { Linear2 } from "./linear2";
export class Ellipse {
    constructor(
        {
            rx = 50,//a
            ry = 50,//b
            center = new Point(),
            focus1 = new Point(), //right
            focus2 = new Point(),
            vertex1 = new Point(50, 0),
            vertex2 = new Point(-50, 0),
            major = new Linear2(0, 1, 0),//y = 0
            minor = new Linear2(1, 0, 0),//x = 0
            c = 30,
            e = 0.5,
            rectum = 20,
            fill = 'rgba(0, 0, 0, 0)',
            stroke = 'currentcolor',
            strokewidth = 2,
            strokedasharray = 'none',
            opacity = 1,
            pathLength = 1,
        } = {}) {
            this.rx = rx,
            this.ry = ry,
            this.c = c,
            this.e = e,
            this.rectum = rectum,
            this.center = center,
            this.focus1 = focus1,
            this.focus2 = focus2,
            this.vertex1 = vertex1,
            this.vertex2 = vertex2,
            this.major = major,
            this.minor = minor,
            this.fill = fill,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity = opacity,
            this.pathLength = pathLength
        }
    
    randomEllipse(rmax, rmin) {//axes parallel to coordinate
        this.center.random(rmin, rmax);
        this.rx = randInt(rmax, rmin, true);
        this.ry = randInt(this.rx, rmin, true);
        this.c = Math.sqrt(this.rx * this.rx - this.ry * this.ry);
        this.e = this.c/this.rx;
        this.rectum = 2 * this.ry * this.ry / this.rx;
        this.focus1 = this.center.a(new Point(this.c));
        this.focus2 = this.center.a(new Point(-this.c));
        this.vertex1 = this.center.a(new Point(this.rx));
        this.vertex2 = this.center.a(new Point(-this.rx,));
        this.major = new Linear2(0, 1, -this.center.y);//y = this.center.y
        this.minor = new Linear2(1, 0, -this.center.x);//y = this.center.x
    }
    diameter(p, q) {

    }
    equation() {//center cx, cy --> ax^2 + by^2 + 2gx + 2fy + c = 0 --> 
        return {a: this.ry * this.ry, b: this.rx * this.rx, g: -this.center.x * this.ry * this.ry, f: - 2 * this.center.y * this.rx * this.rx, c: this.center.x * this.center.x * this.ry * this.ry + this.center.y * this.center.y * this.rx * this.rx - this.rx * this.rx * this.ry * this.ry}
    }
    str(form = 'general') {
        
        let eq = '';
        switch(form) {
            case 'general': {//ax^2 + ay^2 + 2gx + 2fy + c = 0
                let {a, b, g, f, c} = this.equation();
                if(a === 1) {
                    eq += 'x^2'
                } else if(a === -1) {
                    eq += '-x^2';
                } else if(a === 0) {
                    eq += '';
                } else {
                    eq += a + 'x^2';
                }
                if(b === 1) {
                    eq += ' + y^2'
                } else if(b === -1) {
                    eq += '-y^2';
                } else if(b === 0) {
                    eq += '';
                } else if(b > 0) {
                    eq += ' + ' + b + 'y^2';
                } else {
                    eq += b + 'y^2'
                }
                if(2*g === 1) {
                    eq += ' + x';
                } else if(2*g === -1) {
                    eq += ' - x';
                } else if(g === 0) {
                    eq = eq;
                } else if(g > 0) {
                    eq += ' + ' + (2*g) + 'x';
                } else {
                    eq += (2*g) + 'x';
                }
                if(2*f === 1) {
                    eq += ' + y';
                } else if(2*f === -1) {
                    eq += ' - y';
                } else if(f === 0) {
                    eq = eq;
                } else if(f > 0) {
                    eq += ' + ' + (2*f) + 'y';
                } else {
                    eq += (2*f) + 'y';
                }
                if(c !== 0) {
                    if(c > 0) {
                        eq += ' + ' + c;
                    } else {
                        eq += c;
                    }
                }
                eq += ' = 0'
                break;
            }
            case 'standard': {//(x -h)^2/rx^2 + (y - k)^2/ry^2 = 1
                let xpart = '', ypart = '';
                if(this.center.x === 0) {
                    xpart = 'x^2';
                } else if(this.center.x < 0) {
                    xpart = '(x + ' + Math.abs(this.center.x) + ')^2'
                } else {
                    xpart = '(x - ' + this.center.x + ')^2';
                }
                if(this.rx === 1 || this.rx === -1) {
                    xpart = xpart
                } else {
                    xpart = "\\dfrac{" + xpart + '}{{' + this.rx + '}^2}'
                }
                if(this.center.y === 0) {
                    ypart = 'y^2';
                } else if(this.center.y < 0) {
                    ypart = '(y + ' + Math.abs(this.center.y) + ')^2'
                } else {
                    ypart = '(y - ' + this.center.y + ')^2';
                }
                if(this.ry === 1 || this.ry === -1) {
                    ypart = ypart
                } else {
                    ypart = "\\dfrac{" + ypart + '}{{' + this.ry + '}^2}'
                }
                eq = xpart + ' + ' + ypart + ' = 1'; 
            }
        }
        return eq;
    }
    pointOnEllipse(theta = 0) {//rad?
        let p = new Point(this.rx * Math.cos(theta), this.ry * Math.sin(theta));
        return this.center.a(p);
    }
    calculateFlags(theta1, theta2) {
        let largeArcFlag, sweepFlag;
    
        if (Math.abs(theta2 - theta1) <= Math.PI) {
            largeArcFlag = 0;
        } else {
            largeArcFlag = 1;
        }
    
        if (theta2 > theta1) {
            sweepFlag = 1;
        } else {
            sweepFlag = 0;
        }
    
        return {largeArcFlag, sweepFlag};
    }
    radius({theta = 0, dashed = false}={}) {//add radius to the drawing 
        let p = this.pointOnEllipse(theta);
        return `<line x1=${this.center.x} y1=${this.center.y} x2=${p.x} y2=${p.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? '4 2': 'none'} stroke-linecap="round" />`
    }
    chord({theta1 = 0, theta2=Math.PI, dashed = false}={}) {//add radius to the drawing 
        let p1 = this.pointOnEllipse(theta1);
        let p2 = this.pointOnEllipse(theta2);
        return `<line x1=${p1.x} y1=${p1.y} x2=${p2.x} y2=${p2.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? '4 2': 'none'} stroke-linecap="round" />`
    }
    diameter({theta = 0, dashed = false}={}) {//add radius to the drawing 
        let p1 = this.pointOnEllipse(theta);
        let p2 = this.pointOnEllipse(theta + Math.PI);
        return `<line x1=${p1.x} y1=${p1.y} x2=${p2.x} y2=${p2.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? '4 2': 'none'} stroke-linecap="round" />`
    }
    arc({theta1 = 0, theta2=Math.PI, dashed = false}={}) {//add radius to the drawing 
        let p1 = this.pointOnEllipse(theta1);
        let p2 = this.pointOnEllipse(theta2);
        let {largeArcFlag, sweepFlag} = this.calculateFlags(theta1, theta2);
        return `<path d="M ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} " stroke='teal' stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? '4 2': 'none'} stroke-linecap="round" fill="none" />`
    }
    segment({theta1 = 0, theta2=Math.PI, filled="currentcolor"}={}) {
        let p1 = this.pointOnEllipse(theta1);
        let p2 = this.pointOnEllipse(theta2);
        let {largeArcFlag, sweepFlag} = this.calculateFlags(theta1, theta2);
        return `<path d="M ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} Z" fill=${filled} />`
    }
    sector({theta1 = 0, theta2=Math.PI, filled="currentcolor"}={}) {
        let p1 = this.pointOnEllipse(theta1);
        let p2 = this.pointOnEllipse(theta2);
        let {largeArcFlag, sweepFlag} = this.calculateFlags(theta1, theta2);
        return `<path d="M ${this.center.x},${this.center.y} L ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} Z" fill=${filled} />`
    }
    draw({showCenter = false, radii=[], chords=[], diameters=[], arcs=[], segments=[], sectors=[]}={}) {
        let cdraw = `<circle cx=${this.center.x} cy=${this.center.y} r=${this.r} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${this.strokedasharray} fill='${this.fill}' />`;
        for(let i = 0; i < radii.length; i++) {
            cdraw += this.radius({theta:radii[i].theta, dashed:radii[i].dashed});
        }
        for(let i = 0; i < chords.length; i++) {
            cdraw += this.chord({theta1:chords[i].theta1, theta2:chords[i].theta2, dashed:chords[i].dashed});
        }
        for(let i = 0; i < diameters.length; i++) {
            cdraw += this.diameter({theta:diameters[i].theta, dashed:diameters[i].dashed});
        }
        for(let i = 0; i < arcs.length; i++) {
            cdraw += this.arc({theta1:arcs[i].theta1, theta2:arcs[i].theta2, dashed:arcs[i].dashed});
        }
        for(let i = 0; i < segments.length; i++) {
            cdraw += this.segment({theta1:segments[i].theta1, theta2:segments[i].theta2, filled:segments[i].filled});
        }
        for(let i = 0; i < sectors.length; i++) {
            cdraw += this.sector({theta1: sectors[i].theta1, theta2: sectors[i].theta2, filled:sectors[i].filled});
        }
        if(showCenter) {
            cdraw += `<circle cx=${this.center.x} cy=${this.center.y} r=${this.r / 10 } fill='currentcolor' />`
        }
        return '<g>' + cdraw + '</g>';
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