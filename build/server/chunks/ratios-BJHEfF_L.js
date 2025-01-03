import { r as randInt } from './common-CIVVH1Lv.js';
import { Q } from './fraction-DfHHiAXd.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';

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
const ratios = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = 5 * randInt(10, 1);
      let r2 = 5 * randInt(10, 1);
      let f = new Q(r1, r2);
      f.reduced();
      values[0] = `\\(${f.num} : ${f.den}\\)`;
      values[1] = `\\(${f.num + 1} : ${f.den}\\)`;
      values[2] = `\\(${r1 + 1} : ${r2 + 1}\\)`;
      values[3] = `\\(${f.num - 1} : ${f.den}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the ratio representation of \\(\\dfrac{${r1}}{${r2}}\\) ?`;
      break;
    }
    case 1: {
      let r1 = 5 * randInt(10, 1);
      let r2 = 5 * randInt(10, 1);
      let f = new Q(r1, r2);
      f.reduced();
      let k = randInt(10, 1);
      let n = k * (f.num + f.den);
      values[0] = k * f.num + ", " + k * f.den;
      values[1] = (k + 1) * f.num + ", " + k * f.den;
      values[2] = k * f.num + ", " + (k + 1) * f.den;
      values[3] = (k - 1) * f.den + ", " + k * f.num;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Divide ${n} in the ratio ${f.num} : ${f.den} ?`;
      break;
    }
    case 2: {
      let r1 = 5 * randInt(10, 1);
      let r2 = 5 * randInt(10, 1);
      let f = new Q(r1, r2);
      f.reduced();
      let k1 = randInt(10, 1);
      let k2 = randInt(15, k1 + 1);
      values[0] = k1 * f.num + " : " + k1 * f.den + " and " + k2 * f.num + " : " + k2 * f.den;
      values[1] = k1 * f.num + " : " + k1 * f.den + " and " + k1 * f.num + " : " + k2 * f.den;
      values[2] = k1 * f.num + " : " + k1 * f.den + " and " + k2 * f.num + " : " + k1 * f.den;
      values[3] = k2 * f.num + " : " + k1 * f.den + " and " + k2 * f.num + " : " + k2 * f.den;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the ratios are in proportion?`;
      break;
    }
    case 3: {
      let runR = randInt(100, 1);
      let runS = randInt(100, 1);
      let overR = randInt(15, 6);
      let overS = randInt(15, 6);
      let ops = ["Ram", "Sita", "Both equal", "None"];
      let ci = runR / overR > runS / overS ? 0 : runR / overR === runS / overS ? 2 : 1;
      values[0] = ops[ci];
      values[1] = ops[(ci + 1) % 4];
      values[2] = ops[(ci + 2) % 4];
      values[3] = ops[(ci + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Ram made ${runR} runs in ${overR} overs and Sita made ${runS} runs in ${overS} overs. Who made more runs per over?`;
      break;
    }
    case 4: {
      let d1 = randInt(100, 10);
      let t1 = randInt(10, 1);
      let d2 = randInt(100, 10);
      let t2 = new Q(d2 * t1, d1);
      t2.reduced();
      values[0] = `\\(${t2.str()}\\) hours`;
      values[1] = `\\(${t2.add(new Q(1)).str()}\\) hours`;
      values[2] = `\\(${t2.add(new Q(-1)).str()}\\) hours`;
      values[3] = `\\(${t2.add(new Q(2)).str()}\\) hours`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A car travels ${d1} km in ${t1} hours. How much time is required to cover ${d2} km with the same speed?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { ratios };
//# sourceMappingURL=ratios-BJHEfF_L.js.map
