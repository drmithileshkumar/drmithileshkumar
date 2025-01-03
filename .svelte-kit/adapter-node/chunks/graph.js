import { r as randInt } from "./common.js";
class Linegraph {
  constructor({
    xlabel = "x",
    ylabel = "y",
    xunit = "",
    yunit = "",
    x = [],
    y = [],
    fill = "rgba(0, 175, 255, 1)",
    stroke = "currentcolor",
    strokewidth = 1,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1,
    transform = ""
  } = {}) {
    this.xlabel = xlabel, this.ylabel = ylabel, this.xunit = xunit, this.yunit = yunit, this.x = x, this.y = y, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength, this.transform = transform;
  }
  xrange() {
    let min = Math.min(...this.x);
    let max = Math.max(...this.x);
    return [min, max];
  }
  yrange() {
    let min = Math.min(...this.y);
    let max = Math.max(...this.y);
    return [min, max];
  }
  draw() {
    let xr = this.xrange();
    let yr = this.yrange();
    Math.abs((xr[1] - xr[0]) / this.x.length);
    let dym = Math.ceil(Math.abs((yr[1] - yr[0]) / this.y.length));
    let dx = 100 / (this.x.length + 1);
    let dy = dx;
    let xaxis = `<path d="M -10, 0 L 110,0" stroke="currentcolor" stroke-width="1" fill="none" marker-end="url(#arrow)"/>`;
    let yaxis = `<path d="M 0,10 L 0,-110" stroke="currentcolor" stroke-width="1" fill="none" marker-end="url(#arrow)"/>`;
    let axisMarker = [];
    for (let i = 0; i <= this.x.length; i++) {
      axisMarker.push({
        x: dx * (i + 1),
        y: -(dy * (i + 1))
      });
    }
    let grid = "";
    for (let i = 0; i <= this.x.length; i++) {
      grid += `<path d="M -10, ${axisMarker[i].y} L 110,${axisMarker[i].y}" stroke="currentcolor" opacity="0.3" stroke-width="1" fill="none"/>`;
      grid += `<path d="M ${axisMarker[i].x},10 L ${axisMarker[i].x},-110" stroke="currentcolor" opacity="0.3" stroke-width="1" fill="none"/>`;
    }
    let dataPoints = [];
    for (let i = 0; i < this.x.length; i++) {
      dataPoints.push({
        x: dx * (i + 1),
        y: -((this.y[i] - yr[0]) / dym * dy + dy)
      });
    }
    let points = "";
    let dots = "";
    for (let i = 0; i < this.x.length; i++) {
      points += dataPoints[i].x + "," + dataPoints[i].y + " ";
      dots += `<circle cx='${dataPoints[i].x}' cy='${dataPoints[i].y}' r="2" fill="red" />`;
    }
    let graph2 = `<polyline points="${points}" stroke="rgba(0, 175, 255, 1)" stroke-width="2" fill="none"/>`;
    let yvalues = "";
    for (let i = 0; i < this.x.length + 1; i++) {
      yvalues += `<text text-anchor="end" x="-5" y="${axisMarker[i].y}" font-size="8" fill="currentcolor">${yr[0] + i * dym}</text>`;
    }
    let xvalues = "";
    for (let i = 0; i < this.x.length; i++) {
      xvalues += `<text text-anchor="middle" x="${axisMarker[i].x}" y="10" font-size="8" fill="currentcolor">${this.x[i]}</text>`;
    }
    return grid + xaxis + yaxis + graph2 + dots + xvalues + yvalues;
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
const graph = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let svgStart = `<svg width="150" height="150" viewBox="-20 -120 140 140" >`;
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let n = randInt(8, 4);
      let x = [];
      let y = [];
      for (let i = 0; i < n; i++) {
        x.push(5 * i);
        y.push(5 * randInt(10, 1));
      }
      let reg = new Linegraph({ x, y });
      let maxy = Math.max(...y);
      let miny = Math.min(...y);
      values[0] = maxy;
      values[1] = miny;
      values[2] = maxy - 1;
      values[3] = maxy + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the maximum value of y?</p>`;
      problemset.s = divStart + svgStart + arrow + reg.draw() + svgEnd + divEnd;
      break;
    }
    case 1: {
      let svgStart = `<svg width="150" height="150" viewBox="-20 -120 140 140" >`;
      let arrow = `<defs><marker
                                    id="arrow"
                                    viewBox="0 0 10 10"
                                    refX="5"
                                    refY="5"
                                    markerWidth="6"
                                    markerHeight="6"
                                    orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" />
                                </marker></defs>`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let n = randInt(8, 4);
      let x = [];
      let y = [];
      for (let i = 0; i < n; i++) {
        x.push(5 * i);
        y.push(5 * randInt(10, 1));
      }
      let reg = new Linegraph({ x, y });
      let maxy = Math.max(...y);
      let miny = Math.min(...y);
      values[0] = miny;
      values[1] = maxy;
      values[2] = miny - 1;
      values[3] = miny + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the mininum value of y?</p>`;
      problemset.s = divStart + svgStart + arrow + reg.draw() + svgEnd + divEnd;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  graph
};
