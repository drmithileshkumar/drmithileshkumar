//@ts-nocheck
import { Point } from "./point";
import { Point2D } from "./point2D";
import { Linear2Q } from "./linear2Q";
import { Q } from "./fraction";
import { gcd, lcm } from "./common";
export class LineQ {
    constructor(
        {
            p = new Point2D(),
            q = new Point2D(),
            fill = 'none',
            stroke = 'currentcolor',
            strokewidth = 2,
            strokedasharray = 'none',
            opacity = 1,
            pathLength = 1,
        } = {}) {
            this.p = p,
            this.q = q,
            this.fill = fill,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity = opacity,
            this.pathLength = pathLength
        }
    equation() {//ax + by + c = 0
        let a = this.q.y.sub(this.p.y);
        let b = this.p.x.sub(this.q.x);
        let c = this.p.y.mul(this.q.x).sub(this.q.y.mul(this.p.x));
        a.reduced();
        b.reduced();
        c.reduced();
        let l1 = lcm(a.den, b.den);
        
        let l = lcm(l1, c.den);
        
        a = a.scale(l)
        b = b.scale(l);
        c = c.scale(l);
        a.reduced();
        b.reduced();
        c.reduced();
        let g1 = gcd(a.num, b.num);
        let g = gcd(g1, c.num);
        a.num = a.num/g;
        b.num = b.num/g;
        c.num = c.num/g;
        
        return new Linear2Q(a, b, c)
    }
    randomLine(n, m) {
        this.p = new Point2D();
        this.q = new Point2D()
        this.p.randomPoint(n, m);
        this.q.randomPoint(n, m);
    }
    slope() {
        return this.q.x.sub(this.p.x).isZero() ? 'infty' : this.q.y.sub(this.p.y).div(this.q.x.sub(this.p.x));
    }
    pointSlopeEquation(p, m) {
        let x = new Q();
        x.randF(10, 10);
        this.p = p;
        this.q = m === 'infty' ? new Point2D(p.x, x) : new Point2D(x, m.mul(x).add(p.y).sub(m.mul(p.x)))
    }
    distance(p) {//distance of a point from the line
        let eq = this.equation();
        return Math.abs((eq.a.mul(p.x).add(eq.b.mul(p.y)).add(eq.c))).value()/Math.sqrt((eq.a.mul(eq.a).add(eq.b.mul(eq.b))).value())
    }
    // parallel(d, origin = true) {
    //     let l = new LineQ();
    //     let m = this.slope();
    //     if(m === 'infty') {
    //         if(origin) {
    //             if(this.p.x > 0) {
    //                 l.p = new Point2D(this.p.x - d, this.p.y)
    //                 l.q = new Point2D(this.q.x - d, this.q.y)
    //             } else {
    //                 l.p = new Point2D(this.p.x + d, this.p.y)
    //                 l.q = new Point2D(this.q.x + d, this.q.y)
    //             }
    //         } else {
    //             if(this.p.x > 0) {
    //                 l.p = new Point2D(this.p.x + d, this.p.y)
    //                 l.q = new Point2D(this.q.x + d, this.q.y)
    //             } else {
    //                 l.p = new Point2D(this.p.x - d, this.p.y)
    //                 l.q = new Point2D(this.q.x - d, this.q.y)
    //             }
    //         }
    //     } else {
    //         let theta = Math.atan(m);
    //         let tp = this.p.rotate(-theta);
    //         let tq = this.q.rotate(-theta);
    //         let tnp, tnq;
    //         if(origin) {
    //             if(tp.y > 0) {
    //                 tnp = new Point2D(tp.x, tp.y - d)
    //                 tnq = new Point2D(tq.x, tq.y - d) 
    //             } else {
    //                 tnp = new Point2D(tp.x, tp.y + d)
    //                 tnq = new Point2D(tq.x, tq.y + d) 
    //             }
    //         } else {
    //             if(tp.y > 0) {
    //                 tnp = new Point2D(tp.x, tp.y + d)
    //                 tnq = new Point2D(tq.x, tq.y + d) 
    //             } else {
    //                 tnp = new Point2D(tp.x, tp.y - d)
    //                 tnq = new Point2D(tq.x, tq.y - d) 
    //             }
    //         }
    //         l.p = tnp.rotate(theta);
    //         l.q = tnq.rotate(theta)
    //     }
    //     // console.log(l.p, l.q)
    //     return l;
    // }
    
    // intersect(l, segment = true) { // return point
    //     let eq1 = this.equation();
    //     let eq2 = l.equation();

    //     let l21 = new Linear2Q(eq1.a, eq1.b, eq1.c);
    //     let l22 = new Linear2Q(eq2.a, eq2.b, eq2.c);
    //     let p = l21.solve(l22);
    //     if(p.x instanceof Q) {
    //         if(segment) {
    //             let tmp = new Point2D(p.x.value(), p.y.value());
    //             if(!tmp.onSegment(this.p, this.q) || !tmp.onSegment(l.p, l.q)) return new Point2D(NaN, NaN);
    //         }
            
    //         return new Point2D(p.x.value(), p.y.value())
    //     }
    //     return new Point2D(p.x, p.y);
    // }
    pointSlope() {
        let m = this.slope();
        let c = m !== 'infty' ? m.mul(this.p.x).scale(-1).add(this.p.y) : 'infty';
        return {m, c};
    }
    perpendicular(p) {
        let {m, c} = this.pointSlope();
        let x = m.mul(p.y.add(c)).add(p.x).div(m.mul(m).add(new Q(1)));
        let y = x.mul(m).add(c);
        return new Point2D(x, y);
    }
    intercept() {
        let leq = this.equation();
        return {a: leq.c.div(leq.a).scale(-1), b: leq.c.div(leq.b).scale(-1)}
    }
    normalform() {//return p, cos w, sin w
        let eq = this.equation();
        let fac = Math.sqrt((eq.a.mul(eq.a).add(eq.b.mul(eq.b))).value())
        let p = Math.abs(eq.c.value())/fac;
        let cos = eq.a.value() / fac;
        let sin = eq.b.value() / fac;
        if(this.c.value() > 0) {
            cos = -cos;
            sin = -sin;
        }
        return {cos, sin, p};
    }
    str(form = 'point-slope') {
        
        let eq = '';
        switch(form) {
            case 'point-slope': {
                let {m, c} = this.pointSlope();
                if(m !== 'infty') {
                    m.reduced();
                }
                if(c !== 'infty') {
                    c.reduced();
                }
                let sl = '', intercept = '';
                if(m === 'infty') {
                    return `x = ${this.p.x.str()}`;
                } else if(m.isZero()) {
                    sl = '';
                } else if(m.isOne()) {
                    sl = 'x';
                } else if(m.isMinusOne()) {
                    sl = '-x';
                } else {
                    sl = m.str() + 'x';
                }
                if(c.isZero()) {
                    intercept = '';
                } else if(c.isLZero()) {
                    intercept = '-' + c.scale(-1).str()
                } else {
                    intercept = '+' + c.str();
                }
                eq = 'y = ' + sl + intercept;
                break;
            }
            case 'intercept': {
                let {a, b} = this.intercept();
                if(a.mul(b).isZero()) {
                    eq = ''
                } else {
                    eq = `\\(\\dfrac{x}{${a.str()}} + \\dfrac{y}{${b.str()}} = 1\\)`
                }
                break;
            }
            case 'normal': {
                let {cos, sin, p} = this.normalform();
                let cosstr = '', sinstr = '';
                if(cos === 0) {
                    cosstr = '';
                } else if(cos === 1) {
                    cosstr = 'x';
                } else if(cos === -1) {
                    cosstr = '-x';
                } else {
                    cosstr = cos.toFixed(2) + 'x';
                }
                if(sin === 0) {
                    sinstr = '';
                } else if(sin === 1) {
                    sinstr = '+ y';
                } else if(sin === -1) {
                    sinstr = '- y ';
                } else if(sin < 0) {
                    sinstr = sin.toFixed(2) + 'y';
                } else {
                    sinstr = ' + ' + sin.toFixed(2) + 'y';
                }
                eq = cosstr + sinstr + ' = ' + p.toFixed(2);
                break;
            }
            case 'standard': {
                let eqn = this.equation();
                eq = eqn.str() + ' = 0';
            }

        }
        return eq;
    }
    draw() {
        return `<path d="M ${this.p.x.value()},${this.p.y.value()} L ${this.q.x.value()},${this.q.y.value()}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`
    }
}