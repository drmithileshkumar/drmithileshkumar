import { a as randSubset, r as randInt } from './common-CIVVH1Lv.js';
import { S as Sets } from './sets-jGIduNNd.js';

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
const weight = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let w = randSubset(10, 3);
      w[0] += 1;
      w[1] += 1;
      w[2] += 1;
      let ws = [
        w[0],
        w[1],
        w[2],
        w[0] + w[1],
        w[1] + w[2],
        w[0] + w[2],
        w[0] + w[1] + w[2],
        Math.abs(w[0] - w[1]),
        Math.abs(w[1] - w[2]),
        Math.abs(w[2] - w[0]),
        Math.abs(w[0] + w[1] - w[2]),
        Math.abs(w[1] + w[2] - w[0]),
        Math.abs(w[2] + w[0] - w[1])
      ];
      ws.sort();
      let st = new Set(ws);
      ws = [...st];
      let misses = [];
      for (let i = 1; i <= w[0] + w[1] + w[2]; i++) {
        if (!ws.includes(i)) {
          misses.push(i);
        }
      }
      let rmiss = misses[randInt(misses.length - 1, 0)];
      let s = new Sets(ws);
      let ins = s.krandomSubset(3);
      values[0] = rmiss;
      values[1] = ins.e[0];
      values[2] = ins.e[1];
      values[3] = ins.e[2];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + " kg";
      }
      problemset.s = `Given weights ${w[0]} kg, ${w[1]} kg and ${w[2]} kg, which weight can not be obtained?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { weight };
//# sourceMappingURL=weight-DnETVq2J.js.map
