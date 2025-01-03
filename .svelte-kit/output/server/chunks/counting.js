import { r as randInt } from "./common.js";
import { s as svgshapes } from "./svgshapes.js";
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
const counting = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(10, 1);
      let shapen = randInt(13, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapefigure = "";
      for (let i = 0; i < n; i++) {
        shapefigure += `<span style="display:flex; align-items:center;justify-content:center;width: 40px;border: 0.5px solid currentcolor;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      values[0] = n;
      values[1] = n - 1;
      values[2] = n + 1;
      values[3] = n + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; justify-content:center; align-items: center; font-size: 1.3em; flex-direction: row; flex-wrap:wrap; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
    case 1: {
      let n = randInt(20, 11);
      let shapen = randInt(14, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapefigure = "";
      for (let i = 0; i < n; i++) {
        shapefigure += `<span style="display:flex; align-items:center;justify-content:center;width: 40px;border: 0.5px solid currentcolor;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      values[0] = n;
      values[1] = n - 1;
      values[2] = n + 1;
      values[3] = n + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; justify-content:center; align-items: center; font-size: 1.3em; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
    case 2: {
      let n = randInt(30, 21);
      let shapen = randInt(14, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let shapefigure = "";
      for (let i = 0; i < n; i++) {
        shapefigure += `<span style="display:flex; align-items:center;justify-content:center;width: 40px;border: 0.5px solid currentcolor;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      values[0] = n;
      values[1] = n - 1;
      values[2] = n + 1;
      values[3] = n + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; justify-content:center; align-items: center; font-size: 1.3em; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  counting
};
