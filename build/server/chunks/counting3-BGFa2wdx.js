import { s as shuffle, r as randInt } from './common-CIVVH1Lv.js';
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
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(9, 0);
      let groupn = randInt(5, 1);
      let shapen = randInt(13, 0);
      let colors = ["red", "skyblue", "orange", "goldenrod", "currentcolor", "green"];
      let colorn = randInt(5, 0);
      let groups = "";
      for (let j = 0; j < groupn; j++) {
        groups += `<div style="position:relative; display:flex; flex-direction:row;flex-wrap:wrap;width: 100px; height: 100px; justify-content:center;gap:0.1em;border: 1px solid currentcolor;line-height:0.2;overflow:hidden;">`;
        for (let i = 0; i < 100; i++) {
          groups += `<span style="display:flex;align-items:center;justify-content:center; width: 8%;height:8%;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
        }
        groups += "</div>";
      }
      groups += '<div style="display:flex; width: 100px;height:100px;align-items:center;justify-content:center;"><div style="display:flex; flex-wrap:wrap;align-items:center;justify-content:center;gap:0.2em;">';
      for (let i = 0; i < n; i++) {
        groups += `<span style="display:flex;align-items:center;justify-content:center; width: 8%;height:8%;">` + svgshapes[shapen](colors[colorn], colors[colorn]) + `</span>`;
      }
      groups += "</div></div>";
      let shapefigure = groups;
      values[0] = `\\(${groupn * 100 + n}\\)`;
      values[1] = `\\(${groupn * 100 + n - 1}\\)`;
      values[2] = `\\(${groupn * 100 + n + 1}\\)`;
      values[3] = `\\(${groupn * 100 + n + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; flex-direction: row; flex-wrap:wrap; color: ${colors[colorn]}; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
    case 1: {
      let n1 = randInt(99, 50);
      let n2 = randInt(n1 - 1, 40);
      let n3 = randInt(n2 - 1, 30);
      let n4 = randInt(n3 - 1, 0);
      let nums = [n1, n2, n3, n4];
      nums = shuffle(nums);
      nums = nums.join(", ");
      values[0] = n1;
      values[1] = n2;
      values[2] = n3;
      values[3] = n4;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is the largest number? <br> ${nums}`;
      break;
    }
    case 2: {
      let n1 = randInt(99, 50);
      let n2 = randInt(n1 - 1, 40);
      let n3 = randInt(n2 - 1, 30);
      let n4 = randInt(n3 - 1, 0);
      let nums = [n1, n2, n3, n4];
      nums = shuffle(nums);
      nums = nums.join(", ");
      values[0] = n4;
      values[1] = n2;
      values[2] = n3;
      values[3] = n1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which is the smallest number? <br> ${nums}`;
      break;
    }
    case 3: {
      let n = randInt(99, 0);
      let k = randInt(10, 1);
      values[0] = n + k;
      values[1] = n + k + 1;
      values[2] = n + k - 1;
      values[3] = n + k + 2;
      let sub = k === 1 ? "st" : k === 2 ? "nd" : k === 3 ? "rd" : "th";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the ${k}${sub} number after ${n}?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { counting };
//# sourceMappingURL=counting3-BGFa2wdx.js.map
