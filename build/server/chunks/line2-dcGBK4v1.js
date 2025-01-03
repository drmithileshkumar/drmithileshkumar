import { P as Point } from './point-CjbXhAco.js';
import { P as Point2D } from './point2D-CqpWWiVY.js';
import { L as Linear2 } from './linear2-BPefBxlj.js';
import { Q } from './fraction-DfHHiAXd.js';

class Line {
  constructor({
    p: p2 = new Point(),
    q = new Point(),
    fill = "none",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.p = p2, this.q = q, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength;
  }
  equation() {
    return new Linear2(this.q.y - this.p.y, this.p.x - this.q.x, this.p.y * this.q.x - this.q.y * this.p.x);
  }
  pointSlopeEquation(p2, m) {
    let x = randInt(10, -10);
    this.p = p2;
    this.q = m === "infty" ? new Point(p2.x, randInt(10, -10)) : new Point(x, m * x + p2.y - m * p2.x);
  }
  randomLine(min, max) {
    this.p = new Point();
    this.q = new Point();
    this.p.random(min, max);
    this.q.random(min, max);
  }
  slope() {
    return this.q.x - this.p.x === 0 ? "infty" : (this.q.y - this.p.y) / (this.q.x - this.p.x);
  }
  distance(p2) {
    let eq = this.equation();
    return Math.abs(eq.a * p2.x + eq.b * p2.y + eq.c) / Math.sqrt(eq.a * eq.a + eq.b * eq.b);
  }
  parallel(d, origin = true) {
    let l = new Line();
    let m = this.slope();
    if (m === "infty") {
      if (origin) {
        if (this.p.x > 0) {
          l.p = new Point(this.p.x - d, this.p.y);
          l.q = new Point(this.q.x - d, this.q.y);
        } else {
          l.p = new Point(this.p.x + d, this.p.y);
          l.q = new Point(this.q.x + d, this.q.y);
        }
      } else {
        if (this.p.x > 0) {
          l.p = new Point(this.p.x + d, this.p.y);
          l.q = new Point(this.q.x + d, this.q.y);
        } else {
          l.p = new Point(this.p.x - d, this.p.y);
          l.q = new Point(this.q.x - d, this.q.y);
        }
      }
    } else {
      let theta = Math.atan(m);
      let tp = this.p.rotate(-theta);
      let tq = this.q.rotate(-theta);
      let tnp, tnq;
      if (origin) {
        if (tp.y > 0) {
          tnp = new Point(tp.x, tp.y - d);
          tnq = new Point(tq.x, tq.y - d);
        } else {
          tnp = new Point(tp.x, tp.y + d);
          tnq = new Point(tq.x, tq.y + d);
        }
      } else {
        if (tp.y > 0) {
          tnp = new Point(tp.x, tp.y + d);
          tnq = new Point(tq.x, tq.y + d);
        } else {
          tnp = new Point(tp.x, tp.y - d);
          tnq = new Point(tq.x, tq.y - d);
        }
      }
      l.p = tnp.rotate(theta);
      l.q = tnq.rotate(theta);
    }
    return l;
  }
  intersect(l, segment = true) {
    let eq1 = this.equation();
    let eq2 = l.equation();
    let l21 = new Linear2(eq1.a, eq1.b, eq1.c);
    let l22 = new Linear2(eq2.a, eq2.b, eq2.c);
    let p2 = l21.solve(l22);
    if (p2.x instanceof Q) {
      if (segment) {
        let tmp = new Point(p2.x.value(), p2.y.value());
        if (!tmp.onSegment(this.p, this.q) || !tmp.onSegment(l.p, l.q)) return new Point(NaN, NaN);
      }
      return new Point(p2.x.value(), p2.y.value());
    }
    return new Point(p2.x, p2.y);
  }
  pointSlope() {
    let m = this.slope();
    let c = -m * this.p.x + this.p.y;
    return { m, c };
  }
  perpendicular(p2) {
    let { m, c } = this.pointSlope();
    let x = new Q(m * (p2.y + c) + p2.x, 1 + m * m);
    let y = x.scale(m).add(new Q(c));
    return new Point2D(x, y);
  }
  intercept() {
    let leq = this.equation();
    return { a: -leq.c / leq.a, b: -leq.c / leq.b };
  }
  normalform() {
    let eq = this.equation();
    let fac = Math.sqrt(eq.a * eq.a + eq.b * eq.b);
    let p2 = Math.abs(eq.c) / fac;
    let cos = eq.a / fac;
    let sin = eq.b / fac;
    if (this.c > 0) {
      cos = -cos;
      sin = -sin;
    }
    return { cos, sin, p: p2 };
  }
  str(form = "point-slope") {
    let eq = "";
    switch (form) {
      case "point-slope": {
        let { m, c } = this.pointSlope();
        let sl = "", intercept = "";
        if (m === "infy") {
          return `x = ${p.x}`;
        } else if (m === 0) {
          sl = "";
        } else if (m === 1) {
          sl = "x";
        } else if (m === -1) {
          sl = "-x";
        } else {
          sl = m + "x";
        }
        if (c === 0) {
          intercept = "";
        } else if (c < 0) {
          intercept = c;
        } else {
          intercept = "+" + c;
        }
        eq = "y = " + sl + intercept;
        break;
      }
      case "intercept": {
        let { a, b } = this.intercept();
        if (a * b === 0) {
          eq = "";
        } else {
          eq = `\\(\\dfrac{x}{${a}} + \\dfrac{y}{${b}} = 1\\)`;
        }
        break;
      }
      case "normal": {
        let { cos, sin, p: p2 } = this.normalform();
        let cosstr = "", sinstr = "";
        if (cos === 0) {
          cosstr = "";
        } else if (cos === 1) {
          cosstr = "x";
        } else if (cos === -1) {
          cosstr = "-x";
        } else {
          cosstr = cos + "x";
        }
        if (sin === 0) {
          sinstr = "";
        } else if (sin === 1) {
          sinstr = "+ y";
        } else if (sin === -1) {
          sinstr = "- y ";
        } else if (sin < 0) {
          sinstr = sin + "y";
        } else {
          sinstr = " + " + sin + "y";
        }
        eq = cosstr + sinstr + " = " + p2;
        break;
      }
      case "standard": {
        let eqn = this.equation();
        eq = eqn.str() + " = 0";
      }
    }
    return eq;
  }
  draw() {
    return `<path d="M ${this.p.x},${this.p.y} L ${this.q.x},${this.q.y}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`;
  }
}

export { Line as L };
//# sourceMappingURL=line2-dcGBK4v1.js.map
