import { Point } from "./point";
export class Irregular {
    constructor(
        {
            n,
            points = '',
            center = new Point(),
            r = 50,
            fill = 'rgba(255, 255, 255, 0.3)',
            stroke = 'rgba(0, 0, 0, 1)',
            strokewidth = 1,
            strokedasharray = 'none',
            opacity = 1,
            pathLength = 1,
            pointsList = [],
        } = {}) {
            this.center = center,
            this.r = r,
            this.n = Math.floor(n),
            this.fill = fill,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity = opacity,
            this.pathLength = pathLength,
            this.points = points;
            this.pointsList = pointsList
        }
    computePoints() {
        this.pointsList = [];
        let p, q, scale;
        for (let i = 0; i < this.n; i++) {
            scale = Math.random() + 0.5;
            p = new Point(scale * this.r + this.center.x, this.center.y);
            q = p.rotate(2 * i * Math.PI / this.n, this.center);
            this.pointsList.push(q);
            // this.points = this.points + q.x.toFixed(2) + ',' + q.y.toFixed(2) + ' ';
        }
    }
    setPoints() {
        this.points = '';
        for (let i = 0; i < this.n; i++) {
            this.points = this.points + this.pointsList[i].x.toFixed(2) + ',' + this.pointsList[i].y.toFixed(2) + ' ';
        }
    }
    
    translateCenter(dx, dy) {
        let changePoint = new Point(dx, dy);
        this.center = this.center.a(changePoint);
    }
    
}