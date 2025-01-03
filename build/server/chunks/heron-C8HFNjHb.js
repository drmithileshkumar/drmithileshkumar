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
const heron = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = 2 * randInt(10, 1);
      let b = 2 * randInt(10, 1);
      let c = 2 * randInt(10, 1);
      let s = (a + b + c) / 2;
      let sa = s - a;
      let sb = s - b;
      let sc = s - c;
      let areasq = s * sa * sb * sc;
      values[0] = `\\(\\sqrt{${areasq}}\\)`;
      values[1] = `\\(\\sqrt{${areasq + 1}}\\)`;
      values[2] = `\\(\\sqrt{${areasq - 1}}\\)`;
      values[3] = `\\(\\sqrt{${areasq + 2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If sides of a triangle are ${a}, ${b} and ${c}, then the area is`;
      break;
    }
    case 1: {
      let a = 2 * randInt(10, 1);
      let b = 2 * randInt(10, 1);
      let c = 2 * randInt(10, 1);
      let d = 2 * randInt(10, 1);
      let diag = randInt(Math.max(a + d, b + c), 1);
      let s1 = (a + d + diag) / 2;
      let sa1 = s1 - a;
      let sb1 = s1 - d;
      let sc1 = s1 - diag;
      let areasq1 = s1 * sa1 * sb1 * sc1;
      let s2 = (b + c + diag) / 2;
      let sa2 = s2 - b;
      let sb2 = s2 - c;
      let sc2 = s2 - diag;
      let areasq2 = s2 * sa2 * sb2 * sc2;
      values[0] = `\\(\\sqrt{${areasq1}} + \\sqrt{${areasq2}}\\)`;
      values[1] = `\\(\\sqrt{${areasq1 + 1}}  + \\sqrt{${areasq2 + 1}}\\)`;
      values[2] = `\\(\\sqrt{${areasq1 - 1}}  + \\sqrt{${areasq2 - 1}}\\)`;
      values[3] = `\\(\\sqrt{${areasq1 + 2}}  + \\sqrt{${areasq2 - 2}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If sides of a quadrilateral are AB = ${a}, BC = ${b}, CD = ${c} and AD = ${d}. If diagonal BD is ${diag}, then it's area is`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { heron };
//# sourceMappingURL=heron-C8HFNjHb.js.map
