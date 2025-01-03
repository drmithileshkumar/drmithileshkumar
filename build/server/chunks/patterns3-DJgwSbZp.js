import { r as randInt } from './common-CIVVH1Lv.js';

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
      let a = randInt(100, 50);
      let r = randInt(5, 1);
      let n = randInt(5, 3);
      let shapefigure = a;
      for (let i = 1; i < n; i++) {
        shapefigure += '<span style="color:red;">&#8226;</span>' + (a - r * i);
      }
      shapefigure += '<span style="color:red;">&#8226;</span>?';
      values[0] = a - r * n;
      values[1] = a - r * n - 1;
      values[2] = a - r * n + 1;
      values[3] = a - r * n + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      shapefigure = `<div style="display: flex; gap: 0.5em; justify-content:center; align-items: center; font-size: 1.3em; flex-direction: row; flex-wrap:wrap; min-height:2em;">` + shapefigure + `</div>`;
      problemset.s = shapefigure;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { patterns };
//# sourceMappingURL=patterns3-DJgwSbZp.js.map
