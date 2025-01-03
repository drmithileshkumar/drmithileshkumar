import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
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
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(5, 4);
      let f = [];
      let v = [];
      for (let i = 0; i < n; i++) {
        f.push(randInt(10, 1));
        v.push(randInt(10, 1));
      }
      let fstr = f.join(", ");
      let vstr = v.join(", ");
      let totalfreq = f.reduce((sum, item) => sum + item, 0);
      let totalvalue = f.reduce((sum, item, index) => sum + item * v[index], 0);
      let mean = new Q(totalvalue, totalfreq);
      mean.reduced();
      let a = mean.value();
      let deviations = v.map((item) => item - a);
      let totaldev = f.reduce((sum, item, index) => sum + item * deviations[index], 0);
      let meand = (totaldev / totalfreq).toFixed(2);
      values[0] = meand;
      values[1] = meand + 1;
      values[2] = meand - 1;
      values[3] = meand + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the frequencies of ${vstr} are ${fstr}, then the mean of deviations is`;
      break;
    }
    case 1: {
      let n = randInt(5, 4);
      let f = [];
      let groups = [];
      let cf = [];
      for (let i = 0; i < n; i++) {
        f.push(randInt(10, 1));
        groups.push(10 * i + " - " + 10 * (i + 1));
      }
      cf.push(f[0]);
      for (let i = 1; i < n; i++) {
        cf.push(cf[i - 1] + f[i]);
      }
      let fstr = f.join(", ");
      let groupstr = groups.join(", ");
      let totalfreq = f.reduce((sum, item) => sum + item, 0);
      let index = 0;
      for (let i = 0; i < n; i++) {
        if (cf[i] > totalfreq / 2) {
          index = i;
          break;
        }
      }
      let median = 10 * index + (totalfreq / 2 - cf[index]) * 10 / f[index];
      values[0] = median.toFixed(2);
      values[1] = (median + 1).toFixed(2);
      values[2] = (median - 1).toFixed(2);
      values[3] = (median + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A data is divided into groups ${groupstr}. If the frequencies of data points in the groups are ${fstr}, respectively, then the median is`;
      break;
    }
    case 2: {
      let n = randInt(5, 4);
      let f = [];
      let groups = [];
      for (let i = 0; i < n; i++) {
        f.push(randInt(10, 1));
        groups.push(10 * i + " - " + 10 * (i + 1));
      }
      let fstr = f.join(", ");
      let groupstr = groups.join(", ");
      let modal = Math.max(...f);
      let index = 0;
      for (let i = 0; i < n; i++) {
        if (f[i] === modal) {
          index = i;
          break;
        }
      }
      let previous = index === 0 ? 0 : f[index - 1];
      let next = index === f.length - 1 ? 0 : f[index + 1];
      let mode = 10 * index + (f[index] - previous) * 10 / (2 * f[index] - previous - next);
      values[0] = mode.toFixed(2);
      values[1] = (mode + 1).toFixed(2);
      values[2] = (mode - 1).toFixed(2);
      values[3] = (mode + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A data is divided into groups ${groupstr}. If the frequencies of data points in the groups are ${fstr}, respectively, then the mode is`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  statistics
};
