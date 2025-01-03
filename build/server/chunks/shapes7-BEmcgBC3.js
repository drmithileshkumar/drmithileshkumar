import { r as randInt } from './common-CIVVH1Lv.js';
import { P as Point } from './point-CjbXhAco.js';

class Cube {
  constructor({
    points = {
      a1: new Point(),
      a2: new Point(10, 0),
      a3: new Point(10, 10),
      a4: new Point(0, 10),
      b1: new Point(5, -5),
      b2: new Point(15, -5),
      b3: new Point(15, 5),
      b4: new Point(5, 5)
    },
    a = 10,
    fill = "rgba(0, 175, 255, 1)",
    stroke = "rgba(255, 255, 255, 1)",
    strokewidth = 1,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1,
    transform = ""
  } = {}) {
    this.a = a, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength, this.points = points;
    this.transform = transform;
  }
  draw() {
    let dfront = `M ${this.points.a1.x},${this.points.a1.y} L ${this.points.a2.x},${this.points.a2.y} L ${this.points.a3.x},${this.points.a3.y} L ${this.points.a4.x},${this.points.a4.y} Z`;
    let front = `<path d="${dfront}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`;
    let dtop = `M ${this.points.a1.x},${this.points.a1.y} L ${this.points.a2.x},${this.points.a2.y} L ${this.points.b2.x},${this.points.b2.y} L ${this.points.b1.x},${this.points.b1.y} Z`;
    let top = `<path d="${dtop}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`;
    let dside = `M ${this.points.a2.x},${this.points.a2.y} L ${this.points.a3.x},${this.points.a3.y} L ${this.points.b3.x},${this.points.b3.y} L ${this.points.b2.x},${this.points.b2.y} Z`;
    let side = `<path d="${dside}" stroke="${this.stroke}" fill="${this.fill}" stroke-width="${this.strokewidth}" transform="${this.transform}" />`;
    return top + front + side;
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
const shapes = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let cubes = "";
      let squares = ["", "", "", ""];
      randInt(3, 2);
      let dz = randInt(3, 2);
      let dist = [];
      for (let k = dz; k >= 0; k--) {
        let nx = randInt(6, 1);
        let curlay = [];
        for (let i = 0; i < nx; i++) {
          curlay.push({ x: i, y: k });
        }
        dist.push(curlay);
      }
      let missSquares = [];
      for (let i = 0; i < 3; i++) {
        let missquare = randInt(dist[i].length - 1, 0);
        missSquares.push([i, missquare]);
      }
      for (let i = 0; i < dist.length; i++) {
        for (let j = 0; j < dist[i].length; j++) {
          let c = new Cube({ transform: `translate(${10 * dist[i][j].x + 5 * i} ${-5 * dist[i][j].y})` });
          cubes += c.draw();
          squares[0] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${10 * dist[i][j].x + 10 * i} ${-10 * dist[i][j].y})"/>`;
          if (!(i === missSquares[0][0] && j === missSquares[0][1])) {
            squares[1] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${10 * dist[i][j].x + 10 * i} ${-10 * dist[i][j].y})"/>`;
          }
          if (!(i === missSquares[1][0] && j === missSquares[1][1])) {
            squares[2] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${10 * dist[i][j].x + 10 * i} ${-10 * dist[i][j].y})"/>`;
          }
          if (!(i === missSquares[2][0] && j === missSquares[2][1])) {
            squares[3] += `<rect x="0" y="0" width="10" height="10" stroke="white" stroke-width="2" fill="rgba(0, 175, 255, 1)" transform="translate(${10 * dist[i][j].x + 10 * i} ${-10 * dist[i][j].y})"/>`;
          }
        }
      }
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p style="margin:0;">Which is the correct top view of</p><svg width="150" height="110" viewBox="-15 -10 100 20" >` + cubes + `</svg></div>`;
      let svgstart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="150" height="110" viewBox="-15 -10 100 20" >`;
      let svgend = `</svg></div>`;
      values[0] = svgstart + squares[0] + svgend;
      values[1] = svgstart + squares[1] + svgend;
      values[2] = svgstart + squares[2] + svgend;
      values[3] = svgstart + squares[3] + svgend;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { shapes };
//# sourceMappingURL=shapes7-BEmcgBC3.js.map
