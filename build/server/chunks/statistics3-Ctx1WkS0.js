import { r as randInt } from './common-CIVVH1Lv.js';
import { S as Sets } from './sets-jGIduNNd.js';
import { Q } from './fraction-DfHHiAXd.js';
import './nt-DokVuTcK.js';

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
const statistics = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(7, 4);
      let data = [];
      for (let i = 0; i < n; i++) {
        data.push(randInt(5, -5));
      }
      let s = new Sets();
      s.e = data;
      let sum = data.reduce((a, b) => a + b);
      let mean = new Q(sum, n);
      mean.reduced(mean);
      let mean1 = mean.add(new Q(1));
      let mean2 = mean.add(new Q(-1));
      let mean3 = mean.add(new Q(2));
      mean1.reduced();
      mean2.reduced();
      mean3.reduced();
      values[0] = `\\( ${mean.str()} \\)`;
      values[1] = `\\( ${mean1.str()} \\)`;
      values[2] = `\\( ${mean2.str()} \\)`;
      values[3] = `\\( ${mean3.str()} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The mean of the values in the list \\(${s.str()}\\) is `;
      break;
    }
    case 1: {
      let n = randInt(7, 4);
      let data = [];
      for (let i = 0; i < n; i++) {
        data.push(randInt(5, -5));
      }
      let s = new Sets();
      s.e = data;
      let sum = data.reduce((a, b) => a + b);
      let deviations = s.e.map((item) => Math.abs(n * item - sum)).reduce((a, b) => a + b);
      let meanDeviation = new Q(deviations, n * n);
      meanDeviation.reduced();
      let meanDeviation1 = meanDeviation.add(new Q(1));
      let meanDeviation2 = meanDeviation.add(new Q(-1));
      let meanDeviation3 = meanDeviation.add(new Q(2));
      meanDeviation1.reduced();
      meanDeviation2.reduced();
      meanDeviation3.reduced();
      values[0] = `\\( ${meanDeviation.str()} \\)`;
      values[1] = `\\( ${meanDeviation1.str()} \\)`;
      values[2] = `\\( ${meanDeviation2.str()} \\)`;
      values[3] = `\\( ${meanDeviation3.str()} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The mean deviation of the values in the list \\(${s.str()}\\) is `;
      break;
    }
    case 2: {
      let n = randInt(7, 4);
      let data = [];
      for (let i = 0; i < n; i++) {
        data.push(randInt(5, -5));
      }
      let s = new Sets();
      s.e = data;
      let sum = data.reduce((a, b) => a + b);
      let deviations = s.e.map((item) => Math.pow(n * item - sum, 2)).reduce((a, b) => a + b);
      let meanDeviation = new Q(deviations, n * n * n);
      meanDeviation.reduced();
      let meanDeviation1 = meanDeviation.add(new Q(1));
      let meanDeviation2 = meanDeviation.add(new Q(-1));
      let meanDeviation3 = meanDeviation.add(new Q(2));
      meanDeviation1.reduced();
      meanDeviation2.reduced();
      meanDeviation3.reduced();
      values[0] = `\\( ${meanDeviation.str()} \\)`;
      values[1] = `\\( ${meanDeviation1.str()} \\)`;
      values[2] = `\\( ${meanDeviation2.str()} \\)`;
      values[3] = `\\( ${meanDeviation3.str()} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The variance of the values in the list \\(${s.str()}\\) is `;
      break;
    }
    case 3: {
      let n = randInt(7, 4);
      let data = [];
      for (let i = 0; i < n; i++) {
        data.push(randInt(5, -5));
      }
      let s = new Sets();
      s.e = data;
      let sum = data.reduce((a, b) => a + b);
      let deviations = s.e.map((item) => Math.pow(n * item - sum, 2)).reduce((a, b) => a + b);
      let meanDeviation = new Q(deviations, n * n * n);
      meanDeviation.reduced();
      let meanDeviation1 = meanDeviation.add(new Q(1));
      let meanDeviation2 = meanDeviation.add(new Q(-1));
      let meanDeviation3 = meanDeviation.add(new Q(2));
      meanDeviation1.reduced();
      meanDeviation2.reduced();
      meanDeviation3.reduced();
      let sd = meanDeviation.sqrt();
      sd.reduced();
      let sd1 = meanDeviation1.sqrt();
      sd1.reduced();
      let sd2 = meanDeviation2.sqrt();
      sd2.reduced();
      let sd3 = meanDeviation3.sqrt();
      sd3.reduced();
      values[0] = `\\( ${sd.str()} \\)`;
      values[1] = `\\( ${sd1.str()} \\)`;
      values[2] = `\\( ${sd2.str()} \\)`;
      values[3] = `\\( ${sd3.str()} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The standard deviation of the values in the list \\(${s.str()}\\) is `;
      break;
    }
    case 4: {
      let n = randInt(7, 4);
      let data = [];
      for (let i = 0; i < n; i++) {
        data.push(randInt(5, -5));
      }
      let s = new Sets();
      s.e = data;
      let sum = data.reduce((a, b) => a + b);
      if (sum === 0) {
        s.e[0] += 1;
        sum = 1;
      }
      let deviations = s.e.map((item) => Math.pow(n * item - sum, 2)).reduce((a, b) => a + b);
      let meanDeviation = new Q(deviations, n * sum * sum);
      meanDeviation.reduced();
      let meanDeviation1 = meanDeviation.add(new Q(1));
      let meanDeviation2 = meanDeviation.add(new Q(-1));
      let meanDeviation3 = meanDeviation.add(new Q(2));
      meanDeviation1.reduced();
      meanDeviation2.reduced();
      meanDeviation3.reduced();
      let sd = meanDeviation.sqrt().scale(100);
      sd.reduced();
      let sd1 = meanDeviation1.sqrt().scale(100);
      sd1.reduced();
      let sd2 = meanDeviation2.sqrt().scale(100);
      sd2.reduced();
      let sd3 = meanDeviation3.sqrt().scale(100);
      sd3.reduced();
      values[0] = `\\( ${sd.str()} \\)`;
      values[1] = `\\( ${sd1.str()} \\)`;
      values[2] = `\\( ${sd2.str()} \\)`;
      values[3] = `\\( ${sd3.str()} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The coefficient of variation of the values in the list \\(${s.str()}\\) is `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { statistics };
//# sourceMappingURL=statistics3-Ctx1WkS0.js.map
