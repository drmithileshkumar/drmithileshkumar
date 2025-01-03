import { P as Point } from './point-CjbXhAco.js';
import { r as randInt } from './common-CIVVH1Lv.js';

class Quadrilateral {
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
      d: 1
    },
    angles = {
      A: Math.PI / 2,
      B: Math.PI / 2,
      C: Math.PI / 2,
      D: Math.PI / 2
    },
    points = "",
    fill = "rgba(0, 0, 0, 0)",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.vertices = vertices, this.sides = sides, this.angles = angles, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength, this.points = points;
  }
  randomQuad() {
    this.vertices.B = new Point(0, 0);
    this.vertices.C = new Point(100, 0);
    this.vertices.D = new Point(randInt(130, 0), randInt(-30, -90));
    this.vertices.A = new Point(randInt(this.vertices.D.x - 10, -50), randInt(-30, this.vertices.D.y));
    while (this.vertices.A.inTriangle(this.vertices.B, this.vertices.C, this.vertices.D)) {
      this.vertices.A = new Point(randInt(this.vertices.D.x, -50), randInt(-30, -100));
    }
  }
  randomParallelogram() {
    this.vertices.B = new Point(0, 0);
    this.vertices.C = new Point(100, 0);
    this.vertices.A = new Point(randInt(50, -50), randInt(-30, -90));
    this.vertices.D = this.vertices.A.a(this.vertices.C);
  }
  randomRhombus() {
    this.vertices.B = new Point(0, 0);
    this.vertices.A = new Point(randInt(50, -50), randInt(-30, -90));
    this.vertices.C = new Point(this.vertices.A.length(), 0);
    this.vertices.D = this.vertices.A.a(this.vertices.C);
  }
  computeSides() {
    this.sides.a = this.vertices.B.length(this.vertices.C);
    this.sides.b = this.vertices.C.length(this.vertices.D);
    this.sides.c = this.vertices.A.length(this.vertices.D);
    this.sides.d = this.vertices.A.length(this.vertices.B);
  }
  computeAngles() {
    this.angles.A = this.vertices.A.anglePair(this.vertices.D, this.vertices.B, true);
    this.angles.B = this.vertices.B.anglePair(this.vertices.A, this.vertices.C, true);
    this.angles.C = this.vertices.C.anglePair(this.vertices.B, this.vertices.D, true);
    this.angles.A = this.angles.A < 0 ? 2 * Math.PI + this.angles.A % (2 * Math.PI) : this.angles.A % (2 * Math.PI);
    this.angles.B = this.angles.B < 0 ? 2 * Math.PI + this.angles.B % (2 * Math.PI) : this.angles.B % (2 * Math.PI);
    this.angles.C = this.angles.C < 0 ? 2 * Math.PI + this.angles.C % (2 * Math.PI) : this.angles.C % (2 * Math.PI);
    this.angles.D = 2 * Math.PI - (this.angles.A + this.angles.B + this.angles.C);
  }
  computeVertices() {
    this.vertices.B = new Point();
    this.vertices.C = new Point(this.sides.a, 0);
  }
  area() {
    return 1;
  }
  draw(v = [], a = [], showAngles = false) {
    let d = `M ${this.vertices.B.x},${this.vertices.B.y} L ${this.vertices.C.x},${this.vertices.C.y} L ${this.vertices.D.x},${this.vertices.D.y} L ${this.vertices.A.x},${this.vertices.A.y} Z`;
    let path = `<path d='${d}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-dasharray="${this.strokedasharray}" fill="${this.fill}" />`;
    let vertexLabels = "";
    let Ap, Bp, Cp, Dp;
    if (v.length > 0) {
      Ap = this.vertices.A.s(new Point(10, 5));
      vertexLabels += `<text x='${Ap.x}' y='${Ap.y}' fill="currentcolor" font-size="12">${v[0]}</text>`;
      Bp = this.vertices.B.s(new Point(15, -5));
      vertexLabels += `<text x='${Bp.x}' y='${Bp.y}' fill="currentcolor" font-size="12">${v[1]}</text>`;
      Cp = this.vertices.C.s(new Point(-10, -5));
      vertexLabels += `<text x='${Cp.x}' y='${Cp.y}' fill="currentcolor" font-size="12">${v[2]}</text>`;
      Dp = this.vertices.D.s(new Point(-5, 5));
      vertexLabels += `<text x='${Dp.x}' y='${Dp.y}' fill="currentcolor" font-size="12">${v[3]}</text>`;
    }
    let arcs = "";
    if (showAngles) {
      arcs += this.vertices.A.drawAngle(this.vertices.D, this.vertices.B, a.length > 0 ? a[0] : "", 1);
      arcs += this.vertices.B.drawAngle(this.vertices.A, this.vertices.C, a.length > 0 ? a[1] : "", 1);
      arcs += this.vertices.C.drawAngle(this.vertices.B, this.vertices.D, a.length > 0 ? a[2] : "", 1);
      arcs += this.vertices.D.drawAngle(this.vertices.C, this.vertices.A, a.length > 0 ? a[3] : "", 1);
    }
    return "<g>" + path + vertexLabels + arcs + "</g>";
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

export { Quadrilateral as Q };
//# sourceMappingURL=quadrilateral-BdgkA1Ip.js.map
