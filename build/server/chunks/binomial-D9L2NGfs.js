import { r as randInt } from './common2-D0jjHEpP.js';
import './complex2-cYSf3gRs.js';
import './fraction2-2uKzQMOI.js';
import './sets3-BfptYGEP.js';

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
const factorialTex = (n) => {
  return n + "!";
};
const ncrTex = (n, r) => {
  let p = "";
  if (r <= 0) return p + 1;
  if (r == 1) return n;
  if (r >= n) return n;
  return "\\frac{" + nprTex(n, r) + "}{" + factorialTex(r) + "}";
};
const ktermTex = (a, b, n, k) => {
  let r = k - 1;
  let ns = n % 2 == 0 ? "" : "-";
  let n1s = ns == "" ? "-" : "";
  let rs = r % 2 == 0 ? "" : "-";
  let nrs = (n - r) % 2 ? "" : "-";
  if (r == 0) {
    if (a == 1) return 1;
    if (a == -1) return ns + 1;
    if (a < 0) return ns + `${Math.abs(a)}^{${n}}`;
    return `${a}^{${n}}`;
  }
  if (r == 1) {
    if (a == 1) return `${n * b}`;
    if (a == -1) return b > 0 ? n1s + `${n * b}` : ns + `${n * Math.abs(b)}`;
    if (a < 0) return b > 0 ? n1s + `${n}\\cdot ${Math.abs(a)}^{${n - 1}}\\cdot ${b}` : ns + `${n}\\cdot ${Math.abs(a)}^{${n - 1}}\\cdot ${Math.abs(b)}`;
    return b > 0 ? `${n}\\cdot ${a}^{${n - 1}}\\cdot ${b}` : `-${n}\\cdot ${a}^{${n - 1}}\\cdot ${Math.abs(b)}`;
  }
  if (r >= n) {
    if (b == 1) return 1;
    if (b == -1) return ns + 1;
    if (b < 0) return ns + `${Math.abs(b)}^{${n}}`;
    return `${b}^{${n}}`;
  }
  if (r == n - 1) {
    if (b == 1) return `${n * a}`;
    if (b == -1) return a > 0 ? n1s + `${n * a}` : ns + `${n * Math.abs(a)}`;
    if (b < 0) return a > 0 ? n1s + `${n}\\cdot ${a}\\cdot ${Math.abs(a)}^{${n - 1}}` : ns + `${n}\\cdot ${Math.abs(a)}\\cdot ${Math.abs(a)}^{${n - 1}}`;
    return a > 0 ? `${n}\\cdot ${a}\\cdot ${b}^{${n - 1}}` : `-${n}\\cdot ${Math.abs(a)}\\cdot ${b}^{${n - 1}}`;
  }
  if (a == 1) {
    if (b == 1) {
      return ncrTex(n, r);
    }
    if (b == -1) {
      return rs + ncrTex(n, r);
    }
    return b > 0 ? ncrTex(n, r) + `${b}^{${r}}` : rs + ncrTex(n, r) + `${Math.abs(b)}^{${r}}`;
  }
  if (a == -1) {
    if (b == 1) {
      return nrs + ncrTex(n, r);
    }
    if (b == -1) {
      return ns + ncrTex(n, r);
    }
    return b > 0 ? nrs + ncrTex(n, r) + `${b}^{${r}}` : ns + ncrTex(n, r) + `${Math.abs(b)}^{${r}}`;
  }
  if (a < 0) {
    if (b == 1) {
      return nrs + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}`;
    }
    if (b == -1) {
      return ns + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}`;
    }
    return b > 0 ? nrs + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}${b}^{${r}}` : ns + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}${Math.abs(b)}^{${r}}`;
  }
  if (a > 0) {
    if (b == 1) {
      return ncrTex(n, r) + `${a}^{${n - r}}`;
    }
    if (b == -1) {
      return rs + ncrTex(n, r) + `${a}^{${n - r}}`;
    }
    return b > 0 ? ncrTex(n, r) + `${a}^{${n - r}}${b}^{${r}}` : rs + ncrTex(n, r) + `${a}^{${n - r}}${Math.abs(b)}^{${r}}`;
  }
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
const binomial = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(100, 10);
      let k = randInt(n + 1, 1);
      let a = randInt(100, 5);
      let b = randInt(a - 1, 1);
      let sign = Math.random() < 0.5 ? "+" : "-";
      let bs = sign == "+" ? b : -b;
      values[0] = `\\(${ktermTex(a, bs, n, k)}\\)`;
      values[1] = `\\(${ktermTex(a, bs, n, k % (n + 1) + 1)}\\)`;
      values[2] = `\\(${ktermTex(a, -bs, n, k % (n + 1) + 2)}\\)`;
      values[3] = `\\(${ktermTex(a, -bs, n, k % (n + 1) - 1)}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the ${k}th term in the Binomial expansion of \\((${a} ${sign} ${b})^{${n}}\\) ?`;
      break;
    }
    case 1: {
      let n = randInt(15, 5);
      let k = randInt(n + 1, 1);
      let a = randInt(5, 1);
      let b = randInt(a - 1, 1);
      let sign = Math.random() < 0.5 ? "+" : "-";
      let bs = sign == "+" ? b : -b;
      values[0] = `\\(${ktermTex(a, bs, n, k)}\\)`;
      values[1] = `\\(${ktermTex(a, bs, n, k % (n + 1) + 1)}\\)`;
      values[2] = `\\(${ktermTex(a, -bs, n, k % (n + 1) + 2)}\\)`;
      values[3] = `\\(${ktermTex(a, -bs, n, k % (n + 1) - 1)}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the coefficient of the ${k}th term in the binomial expansion of \\((${a} ${sign} ${b})^{${n}}\\) ?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { binomial };
//# sourceMappingURL=binomial-D9L2NGfs.js.map
