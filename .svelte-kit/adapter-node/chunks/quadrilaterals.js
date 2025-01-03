import { r as randInt } from "./common.js";
import { P as Point } from "./point.js";
import { Q as Quadrilateral } from "./quadrilateral.js";
class Irregular {
  constructor({
    n,
    points = "",
    center = new Point(),
    r = 50,
    fill = "rgba(255, 255, 255, 0.3)",
    stroke = "rgba(0, 0, 0, 1)",
    strokewidth = 1,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1,
    pointsList = []
  } = {}) {
    this.center = center, this.r = r, this.n = Math.floor(n), this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength, this.points = points;
    this.pointsList = pointsList;
  }
  computePoints() {
    this.pointsList = [];
    let p, q, scale;
    for (let i = 0; i < this.n; i++) {
      scale = Math.random() + 0.5;
      p = new Point(scale * this.r + this.center.x, this.center.y);
      q = p.rotate(2 * i * Math.PI / this.n, this.center);
      this.pointsList.push(q);
    }
  }
  setPoints() {
    this.points = "";
    for (let i = 0; i < this.n; i++) {
      this.points = this.points + this.pointsList[i].x.toFixed(2) + "," + this.pointsList[i].y.toFixed(2) + " ";
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
const quadrilaterals = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(10, 4);
      let reg = new Irregular({ n });
      reg.computePoints();
      reg.setPoints();
      let poly = `<polygon points="${reg.points}" stroke="currentcolor" stroke-width='2' fill="rgba(255, 255, 255, 0.3)"/>`;
      let vertices = "";
      for (let i = 0; i < reg.pointsList.length; i++) {
        vertices += `<circle r="2" cx="${reg.pointsList[i].x}" cy="${reg.pointsList[i].y}" fill="red" stroke="red" stroke-width="1" />`;
      }
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the sum of internal angles?</p><svg width="150" height="150" viewBox="-75 -75 150 150" >` + poly + vertices + `</svg></div>`;
      values[0] = (n - 2) * 180 + "^\\circ";
      values[1] = n * 180 + "^\\circ";
      values[2] = (n - 1) * 180 + "^\\circ";
      values[3] = (n + 1) * 180 + "^\\circ";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = svg;
      break;
    }
    case 1: {
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let trap = new Quadrilateral();
      trap.randomQuad();
      trap.computeSides();
      trap.computeAngles();
      let A = Math.floor(180 * trap.angles.A / Math.PI);
      let B = Math.floor(180 * trap.angles.B / Math.PI);
      let C = Math.floor(180 * trap.angles.C / Math.PI);
      let D = Math.floor(180 * trap.angles.D / Math.PI);
      let angles = [{ l: "A", v: A, s: A }, { l: "B", v: B, s: B }, { l: "C", v: C, s: C }, { l: "D", v: D, s: D }];
      let a = randInt(3, 0);
      angles[a].s = "x";
      let showAngles = ["", "", "", ""];
      showAngles[a] = "x";
      let quadrilaterl = trap.draw(["A", "B", "C", "D"], showAngles, true);
      let divStart = `<div style="font-size:0.7em;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><span>\\(\\angle A = ${angles[0].s}^\\circ, \\angle B = ${angles[1].s}^\\circ, \\angle C = ${angles[2].s}^\\circ, \\angle D = ${angles[3].s}^\\circ\\)</span>`;
      let vb = trap.computeBBox(["A", "B", "C", "D"], showAngles, true);
      let svgStart = `<svg width="200" height="110" viewBox="${vb.x} ${vb.y} ${vb.width} ${vb.height}" >`;
      values[0] = `\\(${angles[a].v}^\\circ\\)`;
      values[1] = `\\(${angles[(a + 1) % 4].v}^\\circ\\)`;
      values[2] = `\\(${angles[(a + 2) % 4].v}^\\circ\\)`;
      values[3] = `\\(${angles[(a + 3) % 4].v}^\\circ\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + quadrilaterl + svgEnd + divEnd;
      break;
    }
    case 2: {
      let n = randInt(100, 4);
      let extAngle = (360 / n).toFixed(2);
      values[0] = n;
      values[1] = n + 1;
      values[2] = n - 1;
      values[3] = n + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If each exterior angle of a regular polygon is \\(${extAngle}^\\circ\\), then the number of sides is`;
      break;
    }
    case 3: {
      let a = randInt(100, 1);
      let b = randInt(100, 1);
      let perimeter = 2 * (a + b);
      values[0] = b;
      values[1] = Math.abs(a - b);
      values[2] = a + b - 1;
      values[3] = a + b;
      problemset.s = `The perimeter of a parallelogram is ${perimeter}cm. If one of the sides is ${a}cm, then the other side is`;
      break;
    }
    case 4: {
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let trap = new Quadrilateral();
      trap.randomParallelogram();
      trap.computeSides();
      trap.computeAngles();
      let A = Math.floor(180 * trap.angles.A / Math.PI);
      let B = 180 - A;
      let C = A;
      let D = B;
      let angles = [{ l: "A", v: A, s: A }, { l: "B", v: B, s: B }, { l: "C", v: C, s: C }, { l: "D", v: D, s: D }];
      let a = randInt(3, 0);
      angles[a].s = "x";
      let showAngles = ["", "", "", ""];
      showAngles[a] = "x";
      let quadrilaterl = trap.draw(["A", "B", "C", "D"], showAngles, true);
      let divStart = `<div style="font-size:0.7em;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><span>In the parallelogram ABCD, \\(\\angle ${angles[(a + 1) % 4].l} = ${angles[(a + 1) % 4].s}^\\circ, \\angle ${angles[a].l} = ${angles[a].s}^\\circ\\)</span>`;
      let vb = trap.computeBBox(["A", "B", "C", "D"], showAngles, true);
      let svgStart = `<svg width="200" height="110" viewBox="${vb.x} ${vb.y} ${vb.width} ${vb.height}" >`;
      values[0] = `\\(${angles[a].v}^\\circ\\)`;
      values[1] = `\\(${angles[(a + 1) % 4].v}^\\circ\\)`;
      values[2] = `\\(${angles[(a + 2) % 4].v + 1}^\\circ\\)`;
      values[3] = `\\(${angles[(a + 3) % 4].v - 1}^\\circ\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + quadrilaterl + svgEnd + divEnd;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  quadrilaterals
};
