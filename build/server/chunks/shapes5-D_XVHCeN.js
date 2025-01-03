import { s as shuffle, a as randSubset, r as randInt } from './common-CIVVH1Lv.js';
import { R as Regular } from './regular-uKHr2_7-.js';
import { L as Line } from './line2-dcGBK4v1.js';
import './point-CjbXhAco.js';
import './point2D-CqpWWiVY.js';
import './fraction-DfHHiAXd.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';
import './linear2-BPefBxlj.js';

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
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(10, 5);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapefigure = "";
      let newshape = new Regular({ n, stroke: colors[colorn], strokewidth: 2, fill: "none" });
      shapefigure += newshape.draw();
      let points = newshape.computePoints();
      for (let i = 0; i < n - 3; i++) {
        let newline = new Line({ p: points[0], q: points[i + 2], stroke: colors[colorn] });
        shapefigure += newline.draw();
      }
      values[0] = n - 2;
      values[1] = n - 1;
      values[2] = n;
      values[3] = n - 3;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; flex-direction: row; flex-wrap:wrap; min-height:2em;"><span>The number of triangles in</span><svg width='100' height="100" viewBox="-50 -50 100 100">` + shapefigure + `</svg></div>`;
      problemset.s = shapefigure;
      break;
    }
    case 1: {
      let faces = ["Left", "Bottom", "Right", "Back", "Front", "Top"];
      let numbers = [1, 2, 3, 4, 5, 6];
      let facePositions = [{ x: -50, y: 0 }, { x: 0, y: 0 }, { x: 50, y: 0 }, { x: 0, y: -50 }, { x: 0, y: 50 }, { x: 0, y: 100 }];
      let config = shuffle(numbers);
      let faceSquares = "";
      let texts = "";
      for (let i = 0; i < 6; i++) {
        faceSquares += `<rect x="${facePositions[i].x}" y="${facePositions[i].y}" width="50" height="50" fill="rgba(0, 175, 255, 1)" stroke="white" stroke-width="1" />`;
        texts += `<text text-anchor="middle" x="${facePositions[i].x + 25}" y="${facePositions[i].y + 30}" fill="white" font-size="20">${config[i]}</text>`;
      }
      let faceoptions = randSubset(6, 4);
      faceoptions = shuffle(faceoptions);
      values[0] = config[faceoptions[0]];
      values[1] = config[faceoptions[1]];
      values[2] = config[faceoptions[2]];
      values[3] = config[faceoptions[3]];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      let shapefigure = `<svg width='170' height="220" viewBox="-60 -60 170 220">` + faceSquares + texts + `</svg>`;
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center;  flex-direction: row; flex-wrap:wrap; min-height:2em;"><span>The number on the ${faces[faceoptions[0]]} face of a die will be ?</span>` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { shapes };
//# sourceMappingURL=shapes5-D_XVHCeN.js.map
