import { r as randInt } from './common-CIVVH1Lv.js';
import { S as Sets } from './sets-jGIduNNd.js';

const factorial = (n) => {
  let f = 1;
  if (n == 0 || n == 1) return f;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
};
const npr = (n, r) => {
  let p = 1;
  if (r <= 0) return p;
  let t = n >= r ? r : n;
  for (let i = 0; i < t; i++) {
    p *= n - i;
  }
  return p;
};
const ncr = (n, r) => {
  return npr(n, r) / factorial(r);
};
const nprTex = (n, r) => {
  let p = "";
  if (r <= 0) return p + 1;
  let t = n >= r ? r : n;
  switch (t) {
    case 1: {
      p = n;
      break;
    }
    case 2: {
      p = n - 1 + "\\cdot " + n;
      break;
    }
    case 3: {
      p = n - 2 + "\\cdot " + (n - 1) + "\\cdot " + n;
      break;
    }
    case 4: {
      p = n - 3 + "\\cdot " + (n - 2) + "\\cdot " + (n - 1) + "\\cdot " + n;
      break;
    }
    default: {
      p = n - t + 1 + `\\cdot ` + (n - t + 2) + "\\cdot " + (n - t + 3) + "\\cdots " + n;
      break;
    }
  }
  return p;
};
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
const combinatorics = (problemnumber) => {
  let N = 9;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(10, 3);
      let r = randInt(n, 1);
      let v = nprTex(n, n - r);
      values[0] = `\\(${v}\\)`;
      values[1] = `\\(${n}^{${r}}\\)`;
      values[2] = `\\(${n + 1}\\cdot ${v}\\)`;
      values[3] = `\\(${v}\\cdot 0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Compute \\(\\dfrac{${n}!}{${r}!}\\)`;
      break;
    }
    case 1: {
      let k = randInt(8, 5);
      let s = new Sets();
      s.randomSet(1, 9, k);
      let d = randInt(k - 1, Math.floor(k / 2));
      let permission = Math.random() < 0.5 ? "" : "not";
      let digits = s.str();
      let n = permission == "not" ? nprTex(k, d) : `${k}^{${d}}`;
      values[0] = `\\(${n}\\)`;
      values[1] = `\\(${d}^{${k}}\\)`;
      values[2] = permission == "not" ? `\\(${k}^{${d}}\\)` : `\\(${nprTex(k, d)}\\)`;
      values[3] = `\\(${d}^{${d}}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `How many ${d}-digit numbers can be formed from the digits in \\(${digits}\\) assuming that repetition of digits is ${permission} allowed?`;
      break;
    }
    case 2: {
      let k = randInt(8, 5);
      let s = new Sets();
      s.randomSet(1, 9, k);
      let d = randInt(k - 1, Math.floor(k / 2));
      let d2 = randInt(d, 3);
      let d1 = randInt(d2 - 1, 1);
      let n1 = Math.pow(10, d1);
      let n2 = Math.pow(10, d2);
      let solrep = [];
      let solrep1 = [];
      let solrep2 = [];
      let solrep3 = [];
      for (let i = d1 + 1; i <= d2; i++) {
        solrep.push(`{}^{${k}}P_{${i}}`);
        solrep1.push(`{}^{${k + 1}}P_{${i}}`);
        solrep2.push(`{}^{${k}}P_{${i + 1}}`);
        solrep3.push(`{}^{${k - 1}}P_{${i - 1}}`);
      }
      let solrepStr = solrep.join(" + ");
      let solrepStr1 = solrep1.join(" + ");
      let solrepStr2 = solrep2.join(" + ");
      let solrepStr3 = solrep3.join(" + ");
      let digits = s.str();
      values[0] = `\\(${solrepStr}\\)`;
      values[1] = `\\(${solrepStr1}\\)`;
      values[2] = `\\(${solrepStr2}\\)`;
      values[3] = `\\(${solrepStr3}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `How many numbers lying between ${n1} and ${n2} can be formed from the digits in \\(${digits}\\) assuming that repetition of digits is not allowed?`;
      break;
    }
    case 3: {
      let k = randInt(8, 5);
      let s = new Sets();
      s.randomSet(1, 9, k);
      s.e.unshift(0);
      let d = randInt(k, Math.floor(k / 2));
      let d2 = randInt(d, 3);
      let d1 = randInt(d2 - 1, 1);
      let n1 = Math.pow(10, d1);
      let n2 = Math.pow(10, d2);
      let solrep = [];
      let solrep1 = [];
      let solrep2 = [];
      let solrep3 = [];
      let sol0rep = [];
      let sol0rep1 = [];
      let sol0rep2 = [];
      let sol0rep3 = [];
      for (let i = d1 + 1; i <= d2; i++) {
        solrep.push(`{}^{${k + 1}}P_{${i}}`);
        solrep1.push(`{}^{${k + 2}}P_{${i}}`);
        solrep2.push(`{}^{${k}}P_{${i + 1}}`);
        solrep3.push(`{}^{${k - 1}}P_{${i - 1}}`);
        sol0rep.push(`{}^{${k}}P_{${i}}`);
        sol0rep1.push(`{}^{${k + 1}}P_{${i}}`);
        sol0rep2.push(`{}^{${k}}P_{${i + 1}}`);
        sol0rep3.push(`{}^{${k - 1}}P_{${i - 1}}`);
      }
      let solrepStr = solrep.join(" + ");
      let solrepStr1 = solrep1.join(" + ");
      let solrepStr2 = solrep2.join(" + ");
      let solrepStr3 = solrep3.join(" + ");
      let sol0repStr = sol0rep.join(" - ");
      let sol0repStr1 = sol0rep1.join(" - ");
      let sol0repStr2 = sol0rep2.join(" - ");
      let sol0repStr3 = sol0rep3.join(" - ");
      let digits = s.str();
      values[0] = `\\(${solrepStr} - ${sol0repStr} \\)`;
      values[1] = `\\(${solrepStr1} - ${sol0repStr1} \\)`;
      values[2] = `\\(${solrepStr2} - ${sol0repStr2} \\)`;
      values[3] = `\\(${solrepStr3} - ${sol0repStr3} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `How many numbers lying between ${n1} and ${n2} can be formed from the digits in \\(${digits}\\) assuming that repetition of digits is not allowed?`;
      break;
    }
    case 4: {
      let n = 2 * randInt(50, 5);
      let k = -(2 * randInt(Math.floor(n / 2), 1) + 1);
      let r1 = (n + k + 3) / 2;
      let r2 = r1 - 2;
      let alpha = (n - r1 + 2) * (n - r1 + 1);
      values[0] = n;
      values[1] = n - 1;
      values[2] = n + 1;
      values[3] = n + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find the value of \\(n\\) such that \\({}^nP_{${r1}} = ${alpha}~{}^nP_{${r2}}\\)`;
      break;
    }
    case 5: {
      let r = randInt(5, 1);
      let y = randInt(5, 1);
      let g = randInt(5, 1);
      let sol = factorial(r + y + g) / factorial(r) / factorial(y) / factorial(g);
      values[0] = sol;
      values[1] = sol - 1;
      values[2] = sol + 1;
      values[3] = sol + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `In how many ways can ${r} red, ${y} yellow and ${g} green discs be arranged in a row if the discs of the same color are indistinguishable?`;
      break;
    }
    case 6: {
      let n = randInt(10, 1);
      let r = randInt(n, 0);
      let sol = ncr(n, r);
      values[0] = sol;
      values[1] = sol - 1;
      values[2] = sol + 1;
      values[3] = sol + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Calculate \\({}^{${n}}C_{${r}}\\)`;
      break;
    }
    case 7: {
      let r1 = randInt(10, 1);
      let r2 = r1 - 1;
      let n = r1 + r2;
      let r = randInt(n, 0);
      let sol = ncr(n, r);
      values[0] = sol;
      values[1] = sol - 1;
      values[2] = sol + 1;
      values[3] = sol + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Calculate \\({}^nC_{${r}}\\) if \\({}^nC_{${r1}} = {}^nC_{${r2}}\\)`;
      break;
    }
    case 8: {
      let b = randInt(10, 3);
      let r = randInt(10, 3);
      let r1 = randInt(r, 1);
      let b1 = randInt(b, 1);
      let sol = `\\({}^{${b}}C_{${b1}}\\times {}^{${r}}C_{${r1}}\\)`;
      let sol1 = `\\({}^{${b}}P_{${b1}}\\times {}^{${r}}C_{${r1}}\\)`;
      let sol2 = `\\({}^{${b}}C_{${b1}}\\times {}^{${r}}P_{${r1}}\\)`;
      let sol3 = `\\({}^{${b}}P_{${b1}}\\times {}^{${r}}P_{${r1}}\\)`;
      values[0] = sol;
      values[1] = sol1;
      values[2] = sol2;
      values[3] = sol3;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `A bag contains ${b} black and ${r} red balls. Determine the number of ways in which ${b1} black and ${r1} red balls can be selected.`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { combinatorics };
//# sourceMappingURL=combinatorics-BBe4JkEm.js.map
