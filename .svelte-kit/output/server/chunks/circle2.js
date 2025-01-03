import { P as Point } from "./point.js";
import { r as randInt } from "./common.js";
class Circle {
  constructor({
    r = 50,
    center = new Point(),
    fill = "rgba(0, 0, 0, 0)",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.r = r, this.center = center, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength;
  }
  randomCircle(rmax, rmin) {
    this.r = randInt(rmax, rmin);
  }
  diameter(p, q) {
  }
  equation() {
    return { a: 1, g: -this.center.x, f: -this.center.y, c: this.center.x * this.center.x + this.center.y * this.center.y - this.r * this.r };
  }
  str(form = "general", diameter = []) {
    let eq = "";
    switch (form) {
      case "general": {
        let { a, g, f, c } = this.equation();
        eq = "x^2 + y^2";
        if (2 * g === 1) {
          eq += " + x";
        } else if (2 * g === -1) {
          eq += " - x";
        } else if (g === 0) {
          eq = eq;
        } else if (g > 0) {
          eq += " + " + 2 * g + "x";
        } else {
          eq += 2 * g + "x";
        }
        if (2 * f === 1) {
          eq += " + y";
        } else if (2 * f === -1) {
          eq += " - y";
        } else if (f === 0) {
          eq = eq;
        } else if (f > 0) {
          eq += " + " + 2 * f + "y";
        } else {
          eq += 2 * f + "y";
        }
        if (c !== 0) {
          if (c > 0) {
            eq += " + " + c;
          } else {
            eq += c;
          }
        }
        eq += " = 0";
        break;
      }
      case "standard": {
        let xpart = "", ypart = "";
        if (this.center.x === 0) {
          xpart = "x";
        } else if (this.center.x < 0) {
          xpart = "(x + " + Math.abs(this.center.x) + ")";
        } else {
          xpart = "(x - " + this.center.x + ")";
        }
        if (this.center.y === 0) {
          ypart = "y";
        } else if (this.center.y < 0) {
          ypart = "(y + " + Math.abs(this.center.y) + ")";
        } else {
          ypart = "(y - " + this.center.y + ")";
        }
        eq = xpart + "^2 + " + ypart + "^2 = " + this.r + "^2";
      }
      case "diameter": {
        if (diameter.length === 0) {
          eq = "";
        } else {
          let p = diameter[0];
          let q = diameter[1];
          let xp1 = "", xp2 = "", yp1 = "", yp2 = "";
          if (p.x === 0) {
            xp1 = "x";
          } else if (p.x < 0) {
            xp1 = "( x +" + -p.x + ")";
          } else {
            xp1 = `( x - ` + p.x + ")";
          }
          if (q.x === 0) {
            xp2 = "x";
          } else if (q.x < 0) {
            xp2 = "( x +" + -q.x + ")";
          } else {
            xp2 = `( x - ` + q.x + ")";
          }
          if (p.y === 0) {
            yp1 = "y";
          } else if (p.y < 0) {
            yp1 = "( y +" + -p.y + ")";
          } else {
            yp1 = `( y - ` + p.y + ")";
          }
          if (q.y === 0) {
            yp2 = "y";
          } else if (q.y < 0) {
            yp2 = "( y +" + -q.y + ")";
          } else {
            yp2 = `( y - ` + q.y + ")";
          }
          eq = xp1 + xp2 + " + " + yp1 + yp2 + " = 0";
        }
      }
    }
    return eq;
  }
  pointOnCircle(theta = 0) {
    let p = new Point(this.r * Math.cos(theta), this.r * Math.sin(theta));
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
    return { largeArcFlag, sweepFlag };
  }
  radius({ theta = 0, dashed = false } = {}) {
    let p = this.pointOnCircle(theta);
    return `<line x1=${this.center.x} y1=${this.center.y} x2=${p.x} y2=${p.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" />`;
  }
  chord({ theta1 = 0, theta2 = Math.PI, dashed = false } = {}) {
    let p1 = this.pointOnCircle(theta1);
    let p2 = this.pointOnCircle(theta2);
    return `<line x1=${p1.x} y1=${p1.y} x2=${p2.x} y2=${p2.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" />`;
  }
  diameter({ theta = 0, dashed = false } = {}) {
    let p1 = this.pointOnCircle(theta);
    let p2 = this.pointOnCircle(theta + Math.PI);
    return `<line x1=${p1.x} y1=${p1.y} x2=${p2.x} y2=${p2.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" />`;
  }
  arc({ theta1 = 0, theta2 = Math.PI, dashed = false } = {}) {
    let p1 = this.pointOnCircle(theta1);
    let p2 = this.pointOnCircle(theta2);
    let { largeArcFlag, sweepFlag } = this.calculateFlags(theta1, theta2);
    return `<path d="M ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} " stroke='teal' stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" fill="none" />`;
  }
  segment({ theta1 = 0, theta2 = Math.PI, filled = "currentcolor" } = {}) {
    let p1 = this.pointOnCircle(theta1);
    let p2 = this.pointOnCircle(theta2);
    let { largeArcFlag, sweepFlag } = this.calculateFlags(theta1, theta2);
    return `<path d="M ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} Z" fill=${filled} />`;
  }
  sector({ theta1 = 0, theta2 = Math.PI, filled = "currentcolor" } = {}) {
    let p1 = this.pointOnCircle(theta1);
    let p2 = this.pointOnCircle(theta2);
    let { largeArcFlag, sweepFlag } = this.calculateFlags(theta1, theta2);
    return `<path d="M ${this.center.x},${this.center.y} L ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} Z" fill=${filled} />`;
  }
  draw({ showCenter = false, radii = [], chords = [], diameters = [], arcs = [], segments = [], sectors = [] } = {}) {
    let cdraw = `<circle cx=${this.center.x} cy=${this.center.y} r=${this.r} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${this.strokedasharray} fill='${this.fill}' />`;
    for (let i = 0; i < radii.length; i++) {
      cdraw += this.radius({ theta: radii[i].theta, dashed: radii[i].dashed });
    }
    for (let i = 0; i < chords.length; i++) {
      cdraw += this.chord({ theta1: chords[i].theta1, theta2: chords[i].theta2, dashed: chords[i].dashed });
    }
    for (let i = 0; i < diameters.length; i++) {
      cdraw += this.diameter({ theta: diameters[i].theta, dashed: diameters[i].dashed });
    }
    for (let i = 0; i < arcs.length; i++) {
      cdraw += this.arc({ theta1: arcs[i].theta1, theta2: arcs[i].theta2, dashed: arcs[i].dashed });
    }
    for (let i = 0; i < segments.length; i++) {
      cdraw += this.segment({ theta1: segments[i].theta1, theta2: segments[i].theta2, filled: segments[i].filled });
    }
    for (let i = 0; i < sectors.length; i++) {
      cdraw += this.sector({ theta1: sectors[i].theta1, theta2: sectors[i].theta2, filled: sectors[i].filled });
    }
    if (showCenter) {
      cdraw += `<circle cx=${this.center.x} cy=${this.center.y} r=${this.r / 10} fill='currentcolor' />`;
    }
    return "<g>" + cdraw + "</g>";
  }
  computeBBox(v = [], a = [], showAngles = false) {
    let elementString = this.draw(v, a, showAngles);
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${elementString}</svg>`;
    const svgElement = dummyDiv.firstChild;
    document.body.appendChild(svgElement);
    const element = svgElement.firstChild;
    const bbox = element.getBBox();
    document.body.removeChild(svgElement);
    return bbox;
  }
  translateCenter(dx, dy) {
    let changePoint = new Point(dx, dy);
    this.center = this.center.a(changePoint);
  }
}
export {
  Circle as C
};
