import { r as randInt } from "./common.js";
import { P as Point } from "./point.js";
class Trapezium {
  constructor({
    vertices = {
      A: new Point(),
      B: new Point(),
      C: new Point(),
      D: new Point()
    },
    sides = {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      h: 1
    },
    angles = {
      A: Math.PI / 2,
      B: Math.PI / 2,
      C: Math.PI / 2,
      D: Math.PI / 2
    },
    points = "",
    fill = "rgba(255, 255, 255, 0)",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.vertices = vertices, this.sides = sides, this.angles = angles, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength, this.points = points;
  }
  randomT() {
    this.sides.a = randInt(100, 50);
    this.sides.b = randInt(this.sides.a - 1, this.sides.a / 2);
    this.sides.h = randInt(50, 30);
    let shiftA = randInt(this.sides.a - this.sides.b, 0);
    this.vertices.B = new Point();
    this.vertices.C = new Point(this.sides.a, 0);
    this.vertices.A = new Point(shiftA, -this.sides.h);
    this.vertices.D = new Point(shiftA + this.sides.b, -this.sides.h);
  }
  computeSides() {
    this.sides.a = this.vertices.B.length(this.vertices.C);
    this.sides.b = this.vertices.D.length(this.vertices.A);
    this.sides.c = this.vertices.A.length(this.vertices.B);
    this.sides.d = this.vertices.C.length(this.vertices.D);
    this.sides.h = Math.abs(this.vertices.A.y - this.vertices.B.y);
  }
  computeAngles() {
    this.angles.B = Math.asin(this.sides.h / this.sides.c);
    this.angles.C = Math.PI - Math.asin(this.sides.h / this.sides.d);
    this.angles.A = Math.PI - this.angles.B;
    this.angles.D = Math.PI - this.angles.C;
  }
  computeVertices() {
    this.vertices.B = new Point();
    this.vertices.C = new Point(this.sides.a, 0);
    this.vertices.A = new Point(Math.sqrt(this.sides.c * this.sides.c - this.sides.h * this.sides.h), -this.h);
    this.vertices.D = new Point(this.vertices.A.x + this.sides.b, -this.sides.h);
  }
  area() {
    return 0.5 * this.sides.h * (this.sides.a + this.sides.b);
  }
  draw(v = [], a = [], showAngles = false) {
    let d = `M ${this.vertices.B.x},${this.vertices.B.y} L ${this.vertices.C.x},${this.vertices.C.y} L ${this.vertices.D.x},${this.vertices.D.y} L ${this.vertices.A.x},${this.vertices.A.y} Z`;
    let path = `<path d='${d}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}" />`;
    let vertexLabels = "";
    let Ap, Bp, Cp, Dp, DA, CA, BA, CB, AB, AC, DC, BC, AD, CD, l, min;
    if (v.length > 0) {
      Ap = this.vertices.A.s(new Point(5, 10));
      vertexLabels += `<text x='${Ap.x}' y='${Ap.y}' fill="currentcolor" font-size="12">${v[0]}</text>`;
      Bp = this.vertices.B.s(new Point(15, -5));
      vertexLabels += `<text x='${Bp.x}' y='${Bp.y}' fill="currentcolor" font-size="12">${v[1]}</text>`;
      Cp = this.vertices.C.s(new Point(-10, -5));
      vertexLabels += `<text x='${Cp.x}' y='${Cp.y}' fill="currentcolor" font-size="12">${v[2]}</text>`;
      Dp = this.vertices.D.s(new Point(-5, -5));
      vertexLabels += `<text x='${Dp.x}' y='${Dp.y}' fill="currentcolor" font-size="12">${v[3]}</text>`;
    }
    let arcs = "";
    if (showAngles) {
      min = Math.min(this.sides.a, this.sides.b, this.sides.c, this.sides.d);
      l = 0.2 * min;
      DA = this.vertices.A.pointAtLength(l, this.vertices.D);
      BA = DA.rotate(this.angles.A, this.vertices.A);
      let arcA = `M ${DA.x},${DA.y} A ${l},${l} 0 0 1 ${BA.x},${BA.y}`;
      arcs += `<path d='${arcA}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`;
      CB = this.vertices.B.pointAtLength(l, this.vertices.C);
      AB = CB.rotate(-this.angles.B, this.vertices.B);
      let arcB = `M ${AB.x},${AB.y} A ${l},${l} 0 0 1 ${CB.x},${CB.y}`;
      arcs += `<path d='${arcB}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`;
      DC = this.vertices.C.pointAtLength(l, this.vertices.D);
      BC = DC.rotate(-this.angles.C, this.vertices.C);
      let arcC = `M ${BC.x},${BC.y} A ${l},${l} 0 0 1 ${DC.x},${DC.y}`;
      arcs += `<path d='${arcC}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`;
      CD = this.vertices.D.pointAtLength(l, this.vertices.A);
      AD = CD.rotate(-this.angles.D, this.vertices.D);
      let arcD = `M ${AD.x},${AD.y} A ${l},${l} 0 0 1 ${CD.x},${CD.y}`;
      arcs += `<path d='${arcD}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}"/>`;
    }
    let angleLabels = "";
    if (a.length > 0) {
      let thetaA = this.vertices.A.a(this.vertices.A.s(CA.a(BA).scale(0.5)).scale(-1.8));
      angleLabels += `<text text-anchor="middle" x='${thetaA.x}' y='${thetaA.y}' fill="currentcolor" font-size="12">${a[0]}</text>`;
      let thetaB = this.vertices.B.a(this.vertices.B.s(CB.a(AB).scale(0.5)).scale(-1.5));
      angleLabels += `<text  x='${thetaB.x}' y='${thetaB.y}' fill="currentcolor" font-size="12">${a[1]}</text>`;
      let thetaC = this.vertices.C.a(this.vertices.C.s(AC.a(BC).scale(0.5)).scale(-2));
      angleLabels += `<text text-anchor="middle" x='${thetaC.x}' y='${thetaC.y}' fill="currentcolor" font-size="12">${a[2]}</text>`;
    }
    return path + vertexLabels + arcs + angleLabels;
  }
  computePoints() {
    let pts = [];
    let p, q;
    for (let i = 0; i < this.n; i++) {
      p = new Point(this.r + this.center.x, this.center.y);
      q = p.rotate(2 * i * Math.PI / this.n, this.center);
      pts.push(q);
    }
    return pts;
  }
  setPoints() {
    let pts = this.computePoints();
    this.points = "";
    for (let i = 0; i < this.n; i++) {
      this.points = this.points + pts[i].x.toFixed(2) + "," + pts[i].y.toFixed(2) + " ";
    }
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
const mensuration = (problemnumber) => {
  let N = 12;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let svgStart = `<svg width="100" height="100" viewBox="-5 -55 100 100" >`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let trap = new Trapezium();
      trap.randomT();
      let trapizium = trap.draw();
      let area = trap.area();
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the area of the trapezium with dimensions \\(a = ${trap.sides.a}, b = ${trap.sides.b}, h = ${trap.sides.h}\\)?</p>`;
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + trapizium + svgEnd + divEnd;
      break;
    }
    case 1: {
      let d = randInt(100, 1);
      let h1 = randInt(100, 1);
      let h2 = randInt(100, 1);
      let area = 0.5 * d * (h1 + h2);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the length of a diagonal of a quadrilateral is ${d}cm and the height to opposite vertices is ${h1}cm and ${h2}cm, then the area of the quadrilateral is `;
      break;
    }
    case 2: {
      let h1 = randInt(100, 1);
      let h2 = randInt(100, 1);
      let area = 0.5 * h1 * h2;
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the length of diagonals of a rhombus are ${h1}cm and ${h2}cm, then the area of the rhombus is `;
      break;
    }
    case 3: {
      let b = randInt(100, 1);
      let l = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * (l * b + b * h + h * l);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its total surface area? `;
      break;
    }
    case 4: {
      let b = randInt(100, 1);
      let l = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * h * (l + b);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its lateral surface area? `;
      break;
    }
    case 5: {
      let l = randInt(100, 1);
      let area = 2 * 3 * (l * l);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cube of length ${l}cm, what is its total surface area? `;
      break;
    }
    case 6: {
      let l = randInt(100, 1);
      let area = 2 * 2 * l * l;
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cube of length ${l}cm, what is its lateral surface area? `;
      break;
    }
    case 7: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * Math.PI * r * h;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cylinder of radius ${r}cm and height ${h}cm, what is its lateral surface area? `;
      break;
    }
    case 8: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * Math.PI * r * (r + h);
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cylinder of radius ${r}cm height ${h}cm, what is its total surface area? `;
      break;
    }
    case 9: {
      let b = randInt(100, 1);
      let l = randInt(100, 1);
      let h = randInt(100, 1);
      let volume = l * b * h;
      values[0] = volume;
      values[1] = volume + 1;
      values[2] = volume - 1;
      values[3] = volume + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its volume? `;
      break;
    }
    case 10: {
      let l = randInt(100, 1);
      let volume = l * l * l;
      values[0] = volume;
      values[1] = volume + 1;
      values[2] = volume - 1;
      values[3] = volume + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cube of length ${l}cm, what is its volume? `;
      break;
    }
    case 11: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * Math.PI * r * r * h;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cylinder of radius ${r}cm height ${h}cm, what is its volume? `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  mensuration
};
