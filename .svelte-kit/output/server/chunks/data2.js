import { r as randInt } from "./common.js";
import { F, Q } from "./fraction.js";
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
const data = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let dataset = [];
      for (let i = 0; i < 5; i++) {
        dataset.push(randInt(10, -10));
      }
      let datasetStr = dataset[0];
      for (let i = 1; i < dataset.length; i++) {
        datasetStr += ", " + dataset[i];
      }
      let mean = new Q(dataset.reduce((sum, i) => sum + i, 0), 5);
      mean.reduced();
      values[0] = mean.str();
      values[1] = mean.add(F(1)).str();
      values[2] = mean.add(F(-1)).str();
      values[3] = mean.add(F(2)).str();
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = `What is the mean of ${datasetStr} ? `;
      break;
    }
    case 1: {
      let dataset = [];
      for (let i = 0; i < 5; i++) {
        dataset.push(randInt(10, -10));
      }
      let datasetStr = dataset[0];
      for (let i = 1; i < dataset.length; i++) {
        datasetStr += ", " + dataset[i];
      }
      let max = Math.max(...dataset);
      let min = Math.min(...dataset);
      values[0] = max - min;
      values[1] = max - min - 1;
      values[2] = max - min + 1;
      values[3] = max - min + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = `What is the range of ${datasetStr} ? `;
      break;
    }
    case 2: {
      let dataset = [];
      let fs = [0, 0, 0, 0, 0, 0];
      let k;
      for (let i = 0; i < 15; i++) {
        k = randInt(5, 0);
        dataset.push(k);
        fs[k]++;
      }
      let datasetStr = dataset[0];
      for (let i = 1; i < dataset.length; i++) {
        datasetStr += ", " + dataset[i];
      }
      fs.sort();
      values[0] = fs[5];
      values[1] = fs[5] - 1;
      values[2] = fs[5] + 1;
      values[3] = fs[5] + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = `What is the mode of ${datasetStr} ? `;
      break;
    }
    case 3: {
      let dataset = [];
      let k;
      for (let i = 0; i < 15; i++) {
        k = randInt(10, 0);
        dataset.push(k);
      }
      let datasetStr = dataset[0];
      for (let i = 1; i < dataset.length; i++) {
        datasetStr += ", " + dataset[i];
      }
      let fs = [...dataset];
      fs.sort();
      values[0] = fs[7];
      values[1] = fs[14];
      values[2] = fs[0];
      values[3] = fs[7] + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = `What is the median of ${datasetStr} ? `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  data
};
