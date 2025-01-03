import { a as randSubset, r as randInt } from './common-CIVVH1Lv.js';
import { s as svgshapes } from './svgshapes-Tid15xc0.js';

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
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      randInt(10, 1);
      let indices = randSubset(14, 4);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapefigure = "";
      let svgfigure = svgshapes[indices[0]](colors[colorn], colors[colorn]);
      values[0] = svgshapes[indices[0]](colors[colorn], colors[colorn]);
      values[1] = svgshapes[indices[1]](colors[colorn], colors[colorn]);
      values[2] = svgshapes[indices[2]](colors[colorn], colors[colorn]);
      values[3] = svgshapes[indices[3]](colors[colorn], colors[colorn]);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<span style="width: 2em;">` + values[i] + `</span>`;
      }
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; font-size: 1.3em; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; width:2em; height:2em;">` + svgfigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
    case 1: {
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapeIndex = randInt(13, 0);
      let fs0 = randInt(40, 35);
      let fs1 = randInt(30, 25);
      let fs2 = randInt(20, 15);
      let fs3 = 10;
      values[0] = fs0;
      values[1] = fs1;
      values[2] = fs2;
      values[3] = fs3;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<span style="display:inline-block;width: ${values[i]}px;">` + svgshapes[shapeIndex](colors[colorn], colors[colorn]) + `</span>`;
      }
      problemset.s = "Which is the largest shape?";
      break;
    }
    case 2: {
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapeIndex = randInt(13, 0);
      randInt(40, 35);
      let fs1 = randInt(30, 25);
      let fs2 = randInt(20, 15);
      let fs3 = 10;
      values[0] = fs3;
      values[1] = fs1;
      values[2] = fs2;
      values[3] = fs1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = `<span style="display:inline-block;width: ${values[i]}px;">` + svgshapes[shapeIndex](colors[colorn], colors[colorn]) + `</span>`;
      }
      problemset.s = "Which is the smallest shape?";
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { shapes };
//# sourceMappingURL=shapes2--XeHm1cV.js.map
