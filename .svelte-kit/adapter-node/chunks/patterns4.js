import { a as randSubset } from "./common.js";
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
const patterns = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let p = [
        {
          x: 0,
          y: -70
        },
        {
          x: -35,
          y: 0
        },
        {
          x: -70,
          y: 70
        },
        {
          x: 0,
          y: 70
        },
        {
          x: 70,
          y: 70
        },
        {
          x: 35,
          y: 0
        }
      ];
      let line13 = `<line x1='0' y1="-70" x2="-70" y2='70' stroke="currentcolor" stroke-width="2" fill="none" />`;
      let line15 = `<line x1='0' y1="-70" x2="70" y2='70' stroke="currentcolor" stroke-width="2" fill="none" />`;
      let line35 = `<line x1='-70' y1="70" x2="70" y2='70' stroke="currentcolor" stroke-width="2" fill="none" />`;
      let circle1 = `<circle cx='0' cy='-70' r='15' stroke='currentcolor' stroke-width='2' fill='rgba(0, 175, 255, 1)' />`;
      let circle2 = `<circle cx='-35' cy='0' r='15' stroke='currentcolor' stroke-width='2' fill='rgba(0, 175, 255, 1)' />`;
      let circle3 = `<circle cx='-70' cy='70' r='15' stroke='currentcolor' stroke-width='2' fill='rgba(0, 175, 255, 1)' />`;
      let circle4 = `<circle cx='0' cy='70' r='15' stroke='currentcolor' stroke-width='2' fill='rgba(0, 175, 255, 1)' />`;
      let circle6 = `<circle cx='35' cy='0' r='15' stroke='currentcolor' stroke-width='2' fill='rgba(0, 175, 255, 1)' />`;
      let circle5 = `<circle cx='70' cy='70' r='15' stroke='currentcolor' stroke-width='2' fill='rgba(0, 175, 255, 1)' />`;
      let xs = randSubset(10, 3);
      let x1 = xs[0];
      let x3 = xs[1];
      let x5 = xs[2];
      let m = Math.max(x1, x3, x5);
      let x2 = x5 + m;
      let x4 = x1 + m;
      let x6 = x3 + m;
      let x = [x1, x2, x3, x4, x5, x6];
      let ri = randSubset(6, 4);
      let missing = ri[0];
      let texts = "";
      for (let i = 0; i < 6; i++) {
        if (i !== missing) {
          texts += `<text text-anchor="middle" x=${p[i].x} y=${p[i].y} fill="white" font-size="14" transform="translate(0 4)">${x[i]}</text>`;
        }
      }
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;"><svg width="200" height="200" viewBox="-100 -100 200 200">` + line13 + line15 + line35 + circle1 + circle2 + circle3 + circle4 + circle5 + circle6 + texts + `</svg></div>`;
      values[0] = x[missing];
      values[1] = x[ri[1]];
      values[2] = x[ri[2]];
      values[3] = x[ri[3]];
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
export {
  patterns
};
