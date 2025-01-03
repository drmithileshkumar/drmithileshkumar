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
const fractions = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(9, 1);
      let m = randInt(9, 1);
      m = m === n ? n + 1 : m;
      randInt(5, 1);
      let shapen = randInt(13, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let groups = "";
      groups += `<div style="position:relative; display:flex; flex-direction:row;flex-wrap:wrap;width: 100px; height:100px; align-items:center; justify-content:center;gap:0.2em;border: 1px solid currentcolor;"><div style="position:relative; display:flex; flex-direction:row;flex-wrap:wrap; align-items:center; justify-content:center;gap:0.2em;">`;
      for (let i = 0; i < n; i++) {
        groups += `<span style="display:flex;align-items:center;justify-content:center; width:15px; height:15px;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      groups += "</div></div>";
      groups += '<div style="position:relative; display:flex; flex-direction:row;flex-wrap:wrap;width: 100px;height: 100px; align-items:center; justify-content:center;gap:0.2em;border: 1px solid currentcolor;"><div style="position:relative; display:flex; flex-direction:row;flex-wrap:wrap; align-items:center; justify-content:center;gap:0.2em;">';
      for (let i = 0; i < m; i++) {
        groups += `<span style="display:flex;align-items:center;justify-content:center;width:15px; height:15px;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      groups += "</div>";
      let shapefigure = groups;
      let question = "What is the fraction of the first part?";
      values[0] = `\\(\\dfrac{${n}}{${m + n}}\\)`;
      values[1] = `\\(\\dfrac{${m}}{${m + n}}\\)`;
      values[2] = `\\(\\dfrac{${n}}{${m}}\\)`;
      values[3] = `\\(\\dfrac{${m}}{${n}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; justify-content:center; align-items: center; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; min-height:2em;">` + question + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
    case 1: {
      let n = randInt(50, 1);
      let den = [2, 4];
      let j = randInt(1, 0);
      n = n * den[j];
      values[0] = n / den[j];
      values[1] = Math.floor(n / den[(j + 1) % 2]);
      values[2] = n;
      values[3] = 2 * n;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is \\(\\dfrac{1}{${den[j]}}\\) of ${n} ?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  fractions
};
