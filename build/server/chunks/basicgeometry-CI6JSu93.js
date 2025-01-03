import { a as randSubset, s as shuffle, r as randInt } from './common-CIVVH1Lv.js';
import { S as Sets } from './sets-jGIduNNd.js';
import { P as Path } from './path-lgZ7LbXG.js';
import { Q as Quadrilateral } from './quadrilateral-BdgkA1Ip.js';
import { T as Triangle } from './triangle2-CNju0A-j.js';
import { C as Circle } from './circle2-Dj0_1o1K.js';
import { R as Regular } from './regular-uKHr2_7-.js';
import './point-CjbXhAco.js';

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
const basicgeometry = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;">`;
      let svgStart = `<svg width="100" height="100" viewBox="-50 -50 100 100">`;
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
      let segment = new Path({ stroke: "currentcolor", strokewidth: "2" });
      let segmentStr = segment.randomPath({ x: -50, y: -50, width: 100, height: 100 }, "L", 2);
      let ray = new Path({ stroke: "currentcolor", strokewidth: "2" });
      let rayStr = ray.randomPath({ x: -50, y: -50, width: 100, height: 100 }, "L", 2, "end");
      let line = new Path({ stroke: "currentcolor", strokewidth: "2" });
      let lineStr = line.randomPath({ x: -50, y: -50, width: 100, height: 100 }, "L", 2, "both");
      let curve = new Path({ stroke: "currentcolor", strokewidth: "2" });
      let curveStr = curve.randomPath({ x: -50, y: -50, width: 100, height: 100 }, "C", 2);
      let curves = [segmentStr, rayStr, lineStr, curveStr];
      let names = ["Segment", "Ray", "Line", "Curve"];
      let s = shuffle([0, 1, 2, 3]);
      values[0] = curves[s[0]];
      values[1] = curves[s[1]];
      values[2] = curves[s[2]];
      values[3] = curves[s[3]];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = divStart + svgStart + arrow + values[i] + svgEnd + divEnd;
      }
      problemset.s = `Which is a ${names[s[0]]}?`;
      break;
    }
    case 1: {
      let angles = new Sets(["acute", "right", "obtuse", "straight", "reflex"]);
      let optang = angles.krandomSubset(4);
      optang.e = shuffle(optang.e);
      let angle = 0;
      switch (optang.e[0]) {
        case "acute": {
          angle = randInt(89, 1);
          break;
        }
        case "right": {
          angle = 90;
          break;
        }
        case "obtuse": {
          angle = randInt(189, 91);
          break;
        }
        case "straight": {
          angle = 180;
          break;
        }
        case "reflex": {
          angle = randInt(359, 181);
          break;
        }
      }
      values[0] = optang.e[0];
      values[1] = optang.e[1];
      values[2] = optang.e[2];
      values[3] = optang.e[3];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If angle is \\(${angle}^\\circ\\), which is correct?`;
      break;
    }
    case 2: {
      let viewBox = {
        x: -52,
        y: -52,
        width: 104,
        height: 104
      };
      let shapes = ["triangle", "quadrilateral", "pentagon", "circle"];
      let shapeIndex = randInt(2, 0);
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;">`;
      let svgStart = `<svg width="100" height="100" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}">`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let triag = new Triangle();
      triag.randomT();
      let tbox = triag.computeBBox();
      let tsvgStart = `<svg width="100" height="100" viewBox="${tbox.x} ${tbox.y} ${tbox.width} ${tbox.height}">`;
      let quad = new Quadrilateral();
      quad.randomQuad();
      let qbox = quad.computeBBox();
      let qsvgStart = `<svg width="100" height="100" viewBox="${qbox.x} ${qbox.y} ${qbox.width} ${qbox.height}">`;
      let circ = new Circle();
      let pent = new Regular({ n: 5 });
      let shapesDraw = [tsvgStart + triag.draw(), qsvgStart + quad.draw(), svgStart + pent.draw(), svgStart + circ.draw()];
      values[0] = shapesDraw[shapeIndex];
      values[1] = shapesDraw[(shapeIndex + 1) % 4];
      values[2] = shapesDraw[(shapeIndex + 2) % 4];
      values[3] = shapesDraw[(shapeIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = divStart + values[i] + svgEnd + divEnd;
      }
      problemset.s = `Which is a ${shapes[shapeIndex]}?`;
      break;
    }
    case 3: {
      let viewBox = {
        x: -52,
        y: -52,
        width: 104,
        height: 104
      };
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;">`;
      let svgStart = `<svg width="100" height="100" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}">`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let parts = ["radius", "chord", "diameter", "arc", "segment", "sector"];
      let subpartsI = randSubset(6, 4);
      let subparts = [parts[subpartsI[0]], parts[subpartsI[1]], parts[subpartsI[2]], parts[subpartsI[3]]];
      let partIndex = randInt(3, 0);
      let drawings = [];
      let circ = new Circle();
      let angle1 = 0.5 * Math.PI * Math.random();
      let angle2 = 2 * Math.PI * randInt(8, 4) / 10;
      for (let i = 0; i < 4; i++) {
        switch (subparts[i]) {
          case "radius": {
            drawings.push(circ.draw({ radii: [{ theta: angle1, dashed: false }] }));
            break;
          }
          case "chord": {
            drawings.push(circ.draw({ chords: [{ theta1: angle1, theta2: angle2, dashed: false }] }));
            break;
          }
          case "diameter": {
            drawings.push(circ.draw({ diameters: [{ theta: angle1, dashed: false }] }));
            break;
          }
          case "arc": {
            drawings.push(circ.draw({ arcs: [{ theta1: angle1, theta2: angle2, dashed: false }] }));
            break;
          }
          case "segment": {
            drawings.push(circ.draw({ segments: [{ theta1: angle1, theta2: angle2, filled: "currentcolor" }] }));
            break;
          }
          case "sector": {
            drawings.push(circ.draw({ sectors: [{ theta1: angle1, theta2: angle2, filled: "currentcolor" }] }));
            break;
          }
        }
      }
      values[0] = drawings[partIndex];
      values[1] = drawings[(partIndex + 1) % 4];
      values[2] = drawings[(partIndex + 2) % 4];
      values[3] = drawings[(partIndex + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = divStart + svgStart + values[i] + svgEnd + divEnd;
      }
      problemset.s = `Which figure has ${subparts[partIndex]}?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { basicgeometry };
//# sourceMappingURL=basicgeometry-CI6JSu93.js.map
