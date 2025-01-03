import { s as shuffle } from './common-CIVVH1Lv.js';

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
const practicalgeometry = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let line = `<path d="M -50,0 H 50" stroke="currentcolor" stroke-width="2" fill="none" />`;
      let line1 = `<path d="M -50,0 H -25" stroke="currentcolor" stroke-width="2" fill="none" />`;
      let line2 = `<path d="M -50,0 H 0" stroke="currentcolor" stroke-width="2" fill="none" />`;
      let line3 = `<path d="M -50,0 H 25" stroke="currentcolor" stroke-width="2" fill="none" />`;
      let line4 = `<path d="M -50,0 H 50" stroke="currentcolor" stroke-width="2" fill="none" />`;
      let lines = [line1, line2, line3, line4];
      let options = ["one-fourth", "half", "three-fourth", "equal"];
      let s = shuffle([0, 1, 2, 3]);
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the ${options[s[0]]} of </p><svg width="150" height="20" viewBox="-55 -10 100 20">` + line + `</svg></div>`;
      let svgstart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><svg width="150" height="20" viewBox="-55 -10 100 20">`;
      let svgend = `</svg></div>`;
      values[0] = svgstart + lines[s[0]] + svgend;
      values[1] = svgstart + lines[s[1]] + svgend;
      values[2] = svgstart + lines[s[2]] + svgend;
      values[3] = svgstart + lines[s[3]] + svgend;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { practicalgeometry };
//# sourceMappingURL=practicalgeometry-CKJRP78D.js.map
