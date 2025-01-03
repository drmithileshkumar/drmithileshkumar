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
const areas = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let theta = randInt(179, 1);
      let r = randInt(10, 1);
      let area = theta * Math.PI * r * r / 360;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the area of minor sector of angle \\(${theta}^\\circ\\) of radius ${r}?`;
      break;
    }
    case 1: {
      let theta = randInt(179, 1);
      let r = randInt(10, 1);
      let perimeter = 2 * theta * Math.PI * r / 360;
      values[0] = perimeter.toFixed(2);
      values[1] = (perimeter + 1).toFixed(2);
      values[2] = (perimeter - 1).toFixed(2);
      values[3] = (perimeter + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the perimeter of minor sector of angle \\(${theta}^\\circ\\) of radius ${r}?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { areas };
//# sourceMappingURL=areas2-DBIdyZJM.js.map
