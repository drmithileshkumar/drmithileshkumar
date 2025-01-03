import { k as kparts, r as randInt } from "./common.js";
import { P as Point } from "./point.js";
class PieChart {
  constructor({
    values: values2 = [],
    points = [],
    labels = [],
    centralAngles = [],
    fill = "rgba(0, 0, 0, 0)",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.values = values2, this.points = points, this.labels = labels, this.centralAngles = centralAngles, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength;
  }
  computeAngles() {
    let sum = this.values.reduce((previous, current) => previous + current, 0);
    this.centralAngles = values.map((v) => 2 * v * Math.PI / sum);
  }
  computePoints() {
    let r = 180;
    let realAngles = [this.centralAngles[0]];
    for (let i = 1; i < this.centralAngles.length; i++) {
      realAngles[i] = realAngles[i - 1] + this.centralAngles[i];
    }
    for (let i = 0; i < this.centralAngles.length; i++) {
      this.points.push(new Point(r, 0).rotate(realAngles[i]));
    }
  }
  labelAngles() {
    let realAngles = [this.centralAngles[0]];
    for (let i = 1; i < this.centralAngles.length; i++) {
      realAngles[i] = realAngles[i - 1] + this.centralAngles[i];
    }
    let la = [realAngles[0] / 2];
    for (let i = 1; i < realAngles.length; i++) {
      la.push((realAngles[i - 1] + realAngles[i]) / 2);
    }
    return la;
  }
  draw(v = [], l = []) {
    let r = 180;
    let circle = `<circle cx=0 cy=0 r=${r} fill="none" stroke=${this.stroke} stroke-width=${this.strokewidth} />`;
    let radii = "";
    for (let i = 0; i < this.points.length; i++) {
      radii += `<line x1=0 y1=0 x2=${this.points[i].x} y2=${this.points[i].y} fill="none" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`;
    }
    let vals = "", ls = "";
    if (v.length > 0) {
      let la = this.labelAngles();
      let tp = la.map((a) => new Point(210, 0).rotate(a));
      for (let i = 0; i < this.points.length; i++) {
        vals += `<text x='${tp[i].x}' y='${tp[i].y}' fill="currentcolor" font-size="24">${v[i]}</text>`;
      }
    }
    if (l.length > 0) {
      let la = this.labelAngles();
      let tp = la.map((a) => new Point(210, 0).rotate(a + Math.PI / 36));
      for (let i = 0; i < this.points.length; i++) {
        ls += `<text x='${tp[i].x}' y='${tp[i].y}' fill="currentcolor" font-size="12">${l[i]}</text>`;
      }
    }
    return "<g>" + circle + radii + vals + ls + "</g>";
  }
  computeBBox(v = [], a = []) {
    let elementString = this.draw(v, a);
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${elementString}</svg>`;
    const svgElement = dummyDiv.firstChild;
    document.body.appendChild(svgElement);
    const element = svgElement.firstChild;
    const bbox = element.getBBox();
    document.body.removeChild(svgElement);
    return bbox;
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
const data = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values2 = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let sampleSize = randInt(40, 10);
      let possibleEvents = ["W", "M", "B", "G"];
      let experiment = [];
      for (let i = 0; i < sampleSize; i++) {
        experiment.push(possibleEvents[randInt(3, 0)]);
      }
      let frequency = {
        "W": 0,
        "M": 0,
        "B": 0,
        "G": 0
      };
      for (let i = 0; i < sampleSize; i++) {
        frequency[experiment[i]]++;
      }
      let names = ["Women", "Men", "Boys", "Girls"];
      let qc = randInt(3, 0);
      let datasetStr = experiment[0];
      for (let i = 1; i < experiment.length; i++) {
        datasetStr += " " + experiment[i];
      }
      values2[0] = frequency[possibleEvents[qc]];
      values2[1] = frequency[possibleEvents[qc]] + 1;
      values2[2] = frequency[possibleEvents[qc]] - 1;
      values2[3] = frequency[possibleEvents[qc]] + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values2[i];
      }
      problemset.s = `What is the frequency of ${names[qc]} in ${datasetStr} ? `;
      break;
    }
    case 1: {
      let n = randInt(6, 3);
      let centralAngles = kparts(360, n);
      let radians = centralAngles.map((a) => a * Math.PI / 180);
      let pieChart = new PieChart();
      pieChart.centralAngles = radians;
      pieChart.computePoints();
      let vals = centralAngles.map((a) => a * 10);
      pieChart.values = vals;
      let chart = pieChart.draw(vals);
      let vb = pieChart.computeBBox(vals);
      let divStart = `<div style="font-size:0.7em;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><span>What is the largest percentage?</span>`;
      let svgStart = `<svg width="200" height="200" viewBox="${vb.x} ${vb.y} ${vb.width} ${vb.height}" >`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let per = vals.map((v) => v * 100 / 3600);
      per = per.sort((a, b) => a - b);
      values2[0] = per[per.length - 1].toFixed(2);
      values2[1] = (per[per.length - 1] + 1).toFixed(2);
      values2[2] = (per[per.length - 1] - 1).toFixed(2);
      values2[3] = (per[per.length - 1] + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values2[i];
      }
      problemset.s = divStart + svgStart + chart + svgEnd + divEnd;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  data
};
