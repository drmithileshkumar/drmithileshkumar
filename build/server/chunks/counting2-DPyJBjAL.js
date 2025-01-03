import { r as randInt } from './common-CIVVH1Lv.js';
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
const counting = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      randInt(9, 0);
      let groupsize = randInt(10, 2);
      let groupn = randInt(5, 1);
      let shapen = randInt(13, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let groups = "";
      for (let j = 0; j < groupn; j++) {
        groups += '<div style="display:flex; align-items:center;flex-wrap:wrap;max-width: 100px;justify-content:center;border: 1px solid currentcolor;">';
        for (let i = 0; i < groupsize; i++) {
          groups += `<span style="display:flex;align-items:center;width:20px;height:20px;border: 0.5px solid gray;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
        }
        groups += "</div>";
      }
      let shapefigure = groups;
      values[0] = `\\(${groupn * groupsize}\\)`;
      values[1] = `\\(${groupn * groupsize - 1}\\)`;
      values[2] = `\\(${groupn * groupsize + 1}\\)`;
      values[3] = `\\(${groupn * groupsize + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
    case 1: {
      let n = randInt(9, 0);
      let groupn = randInt(5, 1);
      let shapen = randInt(13, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let groups = "";
      for (let j = 0; j < groupn; j++) {
        groups += '<div style="display:flex; align-items:center;flex-wrap:wrap;max-width: 100px;justify-content:center;border: 1px solid currentcolor;">';
        for (let i = 0; i < 10; i++) {
          groups += `<span style="display:flex;align-items:center;width:20px;height:20px;border: 0.5px solid gray;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
        }
        groups += "</div>";
      }
      groups += '<div style="display:flex; flex-direction:row;flex-wrap:wrap;max-width: 90px;justify-content:center;gap:0.2em;">';
      for (let i = 0; i < n; i++) {
        groups += `<span style="display:flex;align-items:center;width:20px;height:20px;border: 0.5px solid gray;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      groups += "</div>";
      let shapefigure = groups;
      values[0] = `\\(${groupn * 10 + n}\\)`;
      values[1] = `\\(${groupn * 10 + n - 1}\\)`;
      values[2] = `\\(${groupn * 10 + n + 1}\\)`;
      values[3] = `\\(${groupn * 10 + n + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { counting };
//# sourceMappingURL=counting2-DPyJBjAL.js.map
