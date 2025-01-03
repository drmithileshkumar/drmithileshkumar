import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import "./complex3.js";
import { L as LinearQ } from "./linearQ.js";
const solveIneq = (a, b, ineq, set) => {
  return a > 0 ? posIneq(a, b, ineq, set) : negIneq(a, b, ineq, set);
};
const negIneq = (a, b, ineq, set) => {
  let sols = [];
  switch (ineq) {
    case "<":
      sols = posGIneq(-a, -b, set);
      break;
    case "<=":
      sols = posGEIneq(-a, -b, set);
      break;
    case ">":
      sols = posLIneq(-a, -b, set);
      break;
    case ">=":
      sols = posLEIneq(-a, -b, set);
      break;
  }
  return sols;
};
const posIneq = (a, b, ineq, set) => {
  let sols = [];
  switch (ineq) {
    case "<":
      sols = posLIneq(a, b, set);
      break;
    case "<=":
      sols = posLEIneq(a, b, set);
      break;
    case ">":
      sols = posGIneq(a, b, set);
      break;
    case ">=":
      sols = posGEIneq(a, b, set);
      break;
  }
  return sols;
};
const posLIneq = (a, b, set) => {
  let sols = [];
  switch (set) {
    case "N":
      sols = posLIneqN(a, b);
      break;
    case "Z":
      sols = posLIneqZ(a, b);
      break;
    case "Z+":
      sols = posLIneqZp(a, b);
      break;
    case "Q":
      sols = posLIneqQ(a, b);
      break;
    case "Q+":
      sols = posLIneqQp(a, b);
      break;
    case "R":
      sols = posLIneqR(a, b);
      break;
    case "R+":
      sols = posLIneqRp(a, b);
      break;
  }
  return sols;
};
const posLEIneq = (a, b, set) => {
  let sols = [];
  switch (set) {
    case "N":
      sols = posLEIneqN(a, b);
      break;
    case "Z":
      sols = posLEIneqZ(a, b);
      break;
    case "Z+":
      sols = posLEIneqZp(a, b);
      break;
    case "Q":
      sols = posLEIneqQ(a, b);
      break;
    case "Q+":
      sols = posLEIneqQp(a, b);
      break;
    case "R":
      sols = posLEIneqR(a, b);
      break;
    case "R+":
      sols = posLEIneqRp(a, b);
      break;
  }
  return sols;
};
const posLIneqN = (a, b) => {
  let sols = [];
  if (b / a < 1) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    if (b / a > 4) {
      sols = b % a != 0 ? [1, 2, "\\cdots", Math.floor(b / a)] : [1, 2, "\\cdots", Math.floor(b / a) - 1];
    } else {
      for (let i = 1; i < b / a; i++)
        sols.push(i);
    }
    sols = ["\\{", ...sols, "\\}"];
    return sols;
  }
};
const posLEIneqN = (a, b) => {
  let sols = [];
  if (b / a < 1) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    if (b / a > 4) {
      sols = [1, 2, "\\cdots", Math.floor(b / a)];
    } else {
      for (let i = 1; i <= b / a; i++)
        sols.push(i);
    }
    sols = ["\\{", ...sols, "\\}"];
    return sols;
  }
};
const posLIneqZp = (a, b) => {
  let sols = [];
  if (b / a < 0) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    if (b / a > 3) {
      sols = b % a != 0 ? [0, 1, "\\cdots", Math.floor(b / a)] : [0, 1, "\\cdots", Math.floor(b / a) - 1];
    } else {
      for (let i = 0; i < b / a; i++)
        sols.push(i);
    }
    sols = ["\\{", ...sols, "\\}"];
    return sols;
  }
};
const posLEIneqZp = (a, b) => {
  let sols = [];
  if (b / a < 0) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    if (b / a > 3) {
      sols = [0, 1, "\\cdots", Math.floor(b / a)];
    } else {
      for (let i = 0; i <= b / a; i++)
        sols.push(i);
    }
    sols = ["\\{", ...sols, "\\}"];
    return sols;
  }
};
const posLIneqQp = (a, b) => {
  let sols = [];
  if (b / a < 0) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    let f = new Q(b, a);
    f.reduced();
    sols = ["[", 0, f, ")"];
    return sols;
  }
};
const posLEIneqQp = (a, b) => {
  let sols = [];
  if (b / a < 0) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    let f = new Q(b, a);
    f.reduced();
    sols = ["[", 0, f, "]"];
    return sols;
  }
};
const posLIneqRp = (a, b) => {
  let sols = [];
  if (b / a < 0) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    sols = ["[", 0, (b / a).toFixed(2), ")"];
    return sols;
  }
};
const posLEIneqRp = (a, b) => {
  let sols = [];
  if (b / a < 0) {
    sols = ["\\{", "\\}"];
    return sols;
  } else {
    sols = ["[", 0, (b / a).toFixed(2), "]"];
    return sols;
  }
};
const posLIneqZ = (a, b) => {
  return ["(", "-\\infty", Math.floor(b / a) - 1, ")"];
};
const posLEIneqZ = (a, b) => {
  return ["(", "-\\infty", Math.floor(b / a), "]"];
};
const posLIneqQ = (a, b) => {
  let f = new Q(b, a);
  f.reduced();
  return ["(", "-\\infty", f, ")"];
};
const posLEIneqQ = (a, b) => {
  let f = new Q(b, a);
  f.reduced();
  return ["(", "-\\infty", f, "]"];
};
const posLIneqR = (a, b) => {
  return ["(", "-\\infty", (b / a).toFixed(2), ")"];
};
const posLEIneqR = (a, b) => {
  return ["(", "-\\infty", (b / a).toFixed(2), "]"];
};
const posGIneq = (a, b, set) => {
  let sols = [];
  switch (set) {
    case "N":
      sols = posGIneqN(a, b);
      break;
    case "Z":
      sols = posGIneqZ(a, b);
      break;
    case "Z+":
      sols = posGIneqZp(a, b);
      break;
    case "Q":
      sols = posGIneqQ(a, b);
      break;
    case "Q+":
      sols = posGIneqQp(a, b);
      break;
    case "R":
      sols = posGIneqR(a, b);
      break;
    case "R+":
      sols = posGIneqRp(a, b);
      break;
  }
  return sols;
};
const posGEIneq = (a, b, set) => {
  let sols = [];
  switch (set) {
    case "N":
      sols = posGEIneqN(a, b);
      break;
    case "Z":
      sols = posGEIneqZ(a, b);
      break;
    case "Z+":
      sols = posGEIneqZp(a, b);
      break;
    case "Q":
      sols = posGEIneqQ(a, b);
      break;
    case "Q+":
      sols = posGEIneqQp(a, b);
      break;
    case "R":
      sols = posGEIneqR(a, b);
      break;
    case "R+":
      sols = posGEIneqRp(a, b);
      break;
  }
  return sols;
};
const posGIneqN = (a, b) => {
  let s = b < 0 ? 1 : b % a == 0 ? Math.ceil(b / a) + 1 : Math.ceil(b / a);
  let sols = ["\\{", s, s + 1, "\\cdots", "\\infty", "\\}"];
  return sols;
};
const posGEIneqN = (a, b) => {
  let s = b < 0 ? 1 : Math.ceil(b / a);
  let sols = ["\\{", s, s + 1, "\\cdots", "\\infty", "\\}"];
  return sols;
};
const posGIneqZp = (a, b) => {
  let s = b < 0 ? 0 : b % a == 0 ? Math.ceil(b / a) + 1 : Math.ceil(b / a);
  let sols = ["\\{", s, s + 1, "\\cdots", "\\infty", "\\}"];
  return sols;
};
const posGEIneqZp = (a, b) => {
  let s = b < 0 ? 0 : Math.ceil(b / a);
  let sols = ["\\{", s, s + 1, "\\cdots", "\\infty", "\\}"];
  return sols;
};
const posGIneqQp = (a, b) => {
  let f = new Q(b, a);
  f.reduced();
  let sols = b < 0 ? ["[", 0, "\\infty", ")"] : ["(", f, "\\infty", ")"];
  return sols;
};
const posGEIneqQp = (a, b) => {
  let f = new Q(b, a);
  f.reduced();
  let sols = b < 0 ? ["[", 0, "\\infty", ")"] : ["[", f, "\\infty", ")"];
  return sols;
};
const posGIneqRp = (a, b) => {
  let sols = b < 0 ? ["[", 0, "\\infty", ")"] : ["(", (b / a).toFixed(2), "\\infty", ")"];
  return sols;
};
const posGEIneqRp = (a, b) => {
  let sols = b < 0 ? ["[", 0, "\\infty", ")"] : ["[", (b / a).toFixed(2), "\\infty", ")"];
  return sols;
};
const posGIneqZ = (a, b) => {
  let s = b % a != 0 ? Math.ceil(b / a) : Math.ceil(b / a) + 1;
  let sols = ["\\{", s, s + 1, "\\cdots", "\\infty", "\\}"];
  return sols;
};
const posGEIneqZ = (a, b) => {
  let s = Math.ceil(b / a);
  let sols = ["\\{", s, s + 1, "\\cdots", "\\infty", "\\}"];
  return sols;
};
const posGIneqQ = (a, b) => {
  let f = new Q(b, a);
  f.reduced();
  return ["(", f, "\\infty", ")"];
};
const posGEIneqQ = (a, b) => {
  let f = new Q(b, a);
  f.reduced();
  return ["[", f, "\\infty", ")"];
};
const posGIneqR = (a, b) => {
  return ["(", (b / a).toFixed(2), "\\infty", ")"];
};
const posGEIneqR = (a, b) => {
  return ["[", (b / a).toFixed(2), "\\infty", ")"];
};
const solString = (sols, set) => {
  let str = "";
  if (sols.length > 2) {
    if (typeof sols[1] === "object") {
      sols[1] = sols[1].str();
    }
    if (typeof sols[2] === "object") {
      sols[2] = sols[2].str();
    }
    str = sols[0];
    for (let i = 1; i < sols.length - 2; i++) {
      str += sols[i] + ", ";
    }
    str += sols[sols.length - 2] + sols[sols.length - 1];
  } else {
    str = "\\{\\}";
  }
  return str;
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
const inequalities = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      a = Math.random() < 0.5 ? -a : a;
      b = Math.random() < 0.5 ? -b : b;
      const baseSets = ["N", "Z", "Z^+", "Q", "Q^+", "R", "R^+"];
      let s = baseSets[Math.floor(baseSets.length * Math.random())];
      let ineq = a === 1 ? `x < ${b}` : a === -1 ? `-x < ${b}` : `${a}x < ${b}`;
      let sols = solveIneq(a, b, "<", s);
      let solStr = solString(sols);
      if (sols[0] == "(" || sols[0] == "[") {
        values[0] = `\\(${solStr}\\)`;
        values[1] = `\\(${sols[0] == "(" ? solStr.replace("(", "[") : solStr.replace("[", "(")}\\)`;
        values[2] = `\\(${sols[3] == ")" ? solStr.replace(")", "]") : solStr.replace("]", ")")}\\)`;
        values[3] = `\\(${sols[0] == "(" ? sols[3] == ")" ? solStr.replace("(", "[").replace(")", "]") : solStr.replace("(", "[").replace("]", ")") : sols[3] == ")" ? solStr.replace("[", "(").replace(")", "]") : solStr.replace("[", "(").replace("]", ")")}\\)`;
      } else if (sols[0] == "\\{" && sols.length > 2) {
        values[0] = `\\(${solStr}\\)`;
        values[1] = `\\(${solStr.replace("\\{", "\\{-1,")}\\)`;
        values[2] = `\\(${solStr.replace("\\{", "\\{-2,")}\\)`;
        values[3] = `\\(${solStr.replace("\\{", "\\{-3,")}\\)`;
      } else {
        values[0] = `\\(\\{\\}\\)`;
        values[1] = `\\((0, ${Math.abs(b / a).toFixed(2)})\\)`;
        values[2] = `\\((0, ${Math.abs(b)})\\)`;
        values[3] = `\\((-1, ${Math.abs(a)})\\)`;
      }
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\(${ineq}\\) when \\({x\\in ${s}}\\)`;
      break;
    }
    case 1: {
      let m = randInt(-1, -100);
      let n = randInt(100, 0);
      let eq = new LinearQ();
      eq.randL(randInt(100, -100, true), randInt(100, -100, true), true);
      let mq = new Q(m);
      let nq = new Q(n);
      let left = mq.sub(eq.b).div(eq.a);
      left.reduced();
      let right = nq.sub(eq.b).div(eq.a);
      right.reduced();
      if (eq.a.isLZero()) {
        let temp = right;
        right = left;
        left = temp;
      }
      let left1 = left.add(new Q(1));
      let left2 = left.add(new Q(-1));
      let left3 = left.add(new Q(2));
      left1.reduced();
      left2.reduced();
      left3.reduced();
      let right1 = right.add(new Q(1));
      let right2 = right.add(new Q(-1));
      let right3 = right.add(new Q(2));
      right1.reduced();
      right2.reduced();
      right3.reduced();
      values[0] = `\\(${left.str()} < x < ${right.str()}\\)`;
      values[1] = `\\(${left1.str()} < x < ${right1.str()}\\)`;
      values[2] = `\\(${left2.str()} < x < ${right2.str()}\\)`;
      values[3] = `\\(${left3.str()} < x < ${right3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Solve \\(${m} < ${eq.str()} < ${n}\\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  inequalities
};
