import { Point } from "./point";
export class Cube {
    constructor(
        {
            points = {
                a1: new Point(),
                a2: new Point(10, 0),
                a3: new Point(10, 10),
                a4: new Point(0, 10),
                b1: new Point(5, -5),
                b2: new Point(15, -5),
                b3: new Point(15, 5),
                b4: new Point(5, 5),
            },
            a = 10,
            fill = 'rgba(0, 175, 255, 1)',
            stroke = 'rgba(255, 255, 255, 1)',
            strokewidth = 1,
            strokedasharray = 'none',
            opacity = 1,
            pathLength = 1,
            transform = ''
        } = {}) {
            this.a = a,
            this.fill = fill,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity = opacity,
            this.pathLength = pathLength,
            this.points = points;
            this.transform = transform;
        }
    
    draw() {
        let dfront = `M ${this.points.a1.x},${this.points.a1.y} L ${this.points.a2.x},${this.points.a2.y} L ${this.points.a3.x},${this.points.a3.y} L ${this.points.a4.x},${this.points.a4.y} Z`;
        let front = `<path d="${dfront}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />` 
        let dtop = `M ${this.points.a1.x},${this.points.a1.y} L ${this.points.a2.x},${this.points.a2.y} L ${this.points.b2.x},${this.points.b2.y} L ${this.points.b1.x},${this.points.b1.y} Z`;
        let top = `<path d="${dtop}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`
        let dside = `M ${this.points.a2.x},${this.points.a2.y} L ${this.points.a3.x},${this.points.a3.y} L ${this.points.b3.x},${this.points.b3.y} L ${this.points.b2.x},${this.points.b2.y} Z`;
        let side = `<path d="${dside}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />` 
        // let a1b1 = `<path d="M ${this.points.a1.x},${this.points.a1.y} L ${this.points.b1.x},${this.points.b1.y}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`
        // let a2b2 = `<path d="M ${this.points.a2.x},${this.points.a2.y} L ${this.points.b2.x},${this.points.b2.y}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`
        // let a3b3 = `<path d="M ${this.points.a3.x},${this.points.a3.y} L ${this.points.b3.x},${this.points.b3.y}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`
        return top + front + side;
    }
}