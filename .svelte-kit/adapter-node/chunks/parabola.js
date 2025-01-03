import { r as randInt } from "./common.js";
import { L as Linear2 } from "./linear2.js";
import { P as Point } from "./point.js";
class Parabola {
  constructor({
    a = 50,
    vertex = new Point(),
    focus = new Point(50, 0),
    directrix = new Linear2(1, 0, 50),
    //x = -a
    axis = new Linear2(0, 1, 0),
    //y = 0
    rectus = 4 * 50,
    fill = "rgba(0, 0, 0, 0)",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.a = a, this.vertex = vertex, this.focus = focus, this.directrix = directrix, this.axis = axis, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength;
  }
  randomParabola(rmax, rmin) {
    this.a = randInt(rmax, rmin);
  }
  computeFocus() {
    if (this.axis.a === 0) {
      this.focus = this.vertex.a(new Point(this.a, 0));
    }
    if (this.axis.b === 0) {
      this.focus = this.vertex.a(new Point(0, this.a));
    }
  }
  computeDirectrix() {
    if (this.axis.a === 0) {
      this.directrix = new Linear2(1, 0, this.a - this.vertex.x);
    }
    if (this.axis.b === 0) {
      this.directrix = new Linear2(0, 1, this.a - this.vertex.y);
    }
  }
  diameter(p, q) {
  }
  str(form = "general") {
    let axis = "x";
    if (this.axis.a === 0) axis = "y";
    let eq = "";
    switch (form) {
      case "general": {
        if (axis === "x") {
          eq = "y^2";
          if (2 * this.vertex.y === 1) {
            eq += " - y";
          } else if (2 * this.vertex.y === -1) {
            eq += " + y";
          } else if (this.vertex.y === 0) {
            eq = eq;
          } else if (this.vertex.y > 0) {
            eq += " - " + 2 * this.vertex.y + "y";
          } else {
            eq += " + "(-2 * this.vertex.y) + "y";
          }
          if (4 * this.a === 1) {
            eq += " - x";
          } else if (4 * this.a === -1) {
            eq += " + x";
          } else if (this.a === 0) {
            eq = eq;
          } else if (this.a > 0) {
            eq += " - " + 4 * this.a + "x";
          } else {
            eq += " + " + -2 * this.a + "x";
          }
          if (this.a * this.vertex.x !== 0) {
            if (this.a * this.vertex.x > 0) {
              eq += " + " + 4 * this.a * this.vertex.x;
            } else {
              eq += 4 * this.a * this.vertex.x;
            }
          }
        }
        if (axis === "y") {
          eq = "x^2";
          if (2 * this.vertex.x === 1) {
            eq += " - x";
          } else if (2 * this.vertex.x === -1) {
            eq += " + x";
          } else if (this.vertex.x === 0) {
            eq = eq;
          } else if (this.vertex.x > 0) {
            eq += " - " + 2 * this.vertex.x + "x";
          } else {
            eq += " + "(-2 * this.vertex.x) + "x";
          }
          if (4 * this.a === 1) {
            eq += " - y";
          } else if (4 * this.a === -1) {
            eq += " + y";
          } else if (this.a === 0) {
            eq = eq;
          } else if (this.a > 0) {
            eq += " - " + 4 * this.a + "y";
          } else {
            eq += " + " + -2 * this.a + "y";
          }
          if (this.a * this.vertex.y !== 0) {
            if (this.a * this.vertex.y > 0) {
              eq += " + " + 4 * this.a * this.vertex.y;
            } else {
              eq += 4 * this.a * this.vertex.y;
            }
          }
        }
        eq += " = 0";
        break;
      }
      case "standard": {
        if (axis === "x") {
          let xpart = "", ypart = "";
          if (this.vertex.x === 0) {
            xpart = "x";
          } else if (this.vertex.x < 0) {
            xpart = "(x + " + Math.abs(this.vertex.x) + ")";
          } else {
            xpart = "(x - " + this.vertex.x + ")";
          }
          if (this.a === 0) {
            xpart = "0";
          } else {
            xpart = 4 * this.a + xpart;
          }
          if (this.vertex.y === 0) {
            ypart = "y^2";
          } else if (this.vertex.y < 0) {
            ypart = "(y + " + Math.abs(this.vertex.y) + ")^2";
          } else {
            ypart = "(y - " + this.vertex.y + ")^2";
          }
          eq = ypart + " = " + xpart;
        }
        if (axis === "y") {
          let xpart = "", ypart = "";
          if (this.vertex.y === 0) {
            ypart = "y";
          } else if (this.vertex.y < 0) {
            ypart = "(y + " + Math.abs(this.vertex.y) + ")";
          } else {
            ypart = "(y - " + this.vertex.y + ")";
          }
          if (this.a === 0) {
            ypart = "0";
          } else {
            ypart = 4 * this.a + ypart;
          }
          if (this.vertex.x === 0) {
            xpart = "x^2";
          } else if (this.vertex.x < 0) {
            xpart = "(x + " + Math.abs(this.vertex.x) + ")^2";
          } else {
            xpart = "(x - " + this.vertex.x + ")^2";
          }
          eq = xpart + " = " + ypart;
        }
      }
    }
    return eq;
  }
  pointOnParabola(theta = 0) {
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
    let p = this.pointOnParabola(theta);
    return `<line x1=${this.center.x} y1=${this.center.y} x2=${p.x} y2=${p.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" />`;
  }
  chord({ theta1 = 0, theta2 = Math.PI, dashed = false } = {}) {
    let p1 = this.pointOnParabola(theta1);
    let p2 = this.pointOnParabola(theta2);
    return `<line x1=${p1.x} y1=${p1.y} x2=${p2.x} y2=${p2.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" />`;
  }
  diameter({ theta = 0, dashed = false } = {}) {
    let p1 = this.pointOnParabola(theta);
    let p2 = this.pointOnParabola(theta + Math.PI);
    return `<line x1=${p1.x} y1=${p1.y} x2=${p2.x} y2=${p2.y} stroke=${this.stroke} stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" />`;
  }
  arc({ theta1 = 0, theta2 = Math.PI, dashed = false } = {}) {
    let p1 = this.pointOnParabola(theta1);
    let p2 = this.pointOnParabola(theta2);
    let { largeArcFlag, sweepFlag } = this.calculateFlags(theta1, theta2);
    return `<path d="M ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} " stroke='teal' stroke-width=${this.strokewidth} stroke-dasharray=${dashed ? "4 2" : "none"} stroke-linecap="round" fill="none" />`;
  }
  segment({ theta1 = 0, theta2 = Math.PI, filled = "currentcolor" } = {}) {
    let p1 = this.pointOnParabola(theta1);
    let p2 = this.pointOnParabola(theta2);
    let { largeArcFlag, sweepFlag } = this.calculateFlags(theta1, theta2);
    return `<path d="M ${p1.x},${p1.y} A ${this.r} ${this.r} 0 ${largeArcFlag} ${sweepFlag} ${p2.x},${p2.y} Z" fill=${filled} />`;
  }
  sector({ theta1 = 0, theta2 = Math.PI, filled = "currentcolor" } = {}) {
    let p1 = this.pointOnParabola(theta1);
    let p2 = this.pointOnParabola(theta2);
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
let problemset = {
  s: "",
  o: {
    "A": "",
    "B": "",
    "C": "",
    "D": ""
  },
  c: ""
};
const parabola = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let axis = ["x", "y"];
      let Ri = Math.random() < 0.5 ? 0 : 1;
      let diri = Math.random() < 0.5 ? 0 : 1;
      let R = axis[Ri];
      let L = axis[(Ri + 1) % 2];
      let a = randInt(10, 1);
      a = diri == 0 ? a : -a;
      let A = 4 * a;
      let focus = [0, 0];
      focus[Ri] = a;
      values[0] = `\\((${focus[0]}, ${focus[1]})\\)`;
      values[1] = `\\((${focus[1]}, ${focus[0]})\\)`;
      values[2] = `\\((${-focus[0]}, ${-focus[1]})\\)`;
      values[3] = `\\((${-focus[1]}, ${-focus[0]})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the equation of a parabola is \\(${L}^2 = ${A}${R}\\), then the focus is located at `;
      break;
    }
    case 1: {
      let axis = ["x", "y"];
      let Ri = Math.random() < 0.5 ? 0 : 1;
      let diri = Math.random() < 0.5 ? 0 : 1;
      let R = axis[Ri];
      let L = axis[(Ri + 1) % 2];
      let a = randInt(10, 1);
      a = diri == 0 ? a : -a;
      let A = 4 * a;
      values[0] = 4 * Math.abs(a);
      values[1] = Math.abs(a);
      values[2] = 2 * Math.abs(a);
      values[3] = 3 * Math.abs(a);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the equation of a parabola is \\(${L}^2 = ${A}${R}\\), then the latus rectum is `;
      break;
    }
    case 2: {
      let para = new Parabola();
      para.a = randInt(10, -10, true);
      para.vertex.random(-10, 10);
      para.axis = Math.random() > 0.5 ? new Linear2(1, 0, para.vertex.x) : new Linear2(0, 1, para.vertex.y);
      para.computeFocus();
      para.computeDirectrix();
      values[0] = `\\(${para.directrix.str()} = 0\\)`;
      values[1] = `\\(${para.axis.str()} = 0\\)`;
      values[2] = `\\(-${para.directrix.str()} = 0\\)`;
      values[3] = `\\(-${para.axis.str()} = 0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the equation of a parabola is \\(${para.str("standard")}\\), then the directrix is `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  parabola
};
