import { r as randInt } from "./common.js";
import { P as Polynomial } from "./polynomial3.js";
class ODE {
  constructor(c = [], y = "y", x = "x") {
    this.c = c;
    this.y = y;
    this.x = x;
  }
  randODE(n, m) {
    this.c = [];
    let a, r, d;
    for (let i = 0; i <= n; i++) {
      r = randInt(n, 1);
      d = randInt(m, 1);
      a = randInt(1, -1);
      this.c.push({ a, r, d });
    }
  }
  reduced() {
    let tempc = [];
    let marked = [];
    for (let i = 0; i < this.c.length; i++) {
      marked.push(false);
    }
    let current = 0;
    while (current < this.c.length) {
      if (!marked[current]) {
        tempc.push(this.c[current]);
        for (let i = current + 1; i < this.c.length; i++) {
          if (!marked[i]) {
            if (this.c[current].r == this.c[i].r && this.c[current].d == this.c[i].d) {
              tempc[tempc.length - 1].a += this.c[i].a;
              marked[i] = true;
            }
          }
        }
        marked[current] = true;
      } else {
        current++;
      }
    }
    this.c = tempc;
  }
  strterm(i) {
    if (this.c[i].a == 0) return "";
    let adon = this.c[i].a == 1 ? "+" : this.c[i].a == -1 ? "-" : this.c[i].a > 0 ? "+" + this.c[i].a : this.c[i].a;
    return this.c[i].d == 1 ? adon + " " + this.y + "_{" + this.c[i].r + "}" : adon + " " + this.y + "_{" + this.c[i].r + "}^{" + this.c[i].d + "}";
  }
  str() {
    this.reduced();
    if (this.c.length == 0) return "";
    if (this.c.length == 1 && this.c[0].a == 0) return "0";
    let tex = "";
    for (let i = 0; i < this.c.length; i++) {
      tex += this.strterm(i);
    }
    return tex;
  }
  maxpowerIndex() {
    this.reduced();
    let max = 0;
    for (let i = 0; i < this.c.length; i++) {
      if (this.c[i].r > this.c[max].r && this.c[i].a !== 0) {
        max = i;
      }
    }
    return max;
  }
  order() {
    let i = this.maxpowerIndex();
    return this.c[i].r;
  }
  degree() {
    let i = this.maxpowerIndex();
    return this.c[i].d;
  }
}
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
const differential = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let n = randInt(10, 3);
      let m = randInt(10, 5);
      let ode = new ODE();
      ode.randODE(n, m);
      let o = ode.order();
      let d = ode.degree();
      values[0] = `\\(${o}, ${d}\\)`;
      values[1] = `\\(${o + 1}, ${d}\\)`;
      values[2] = `\\(${o}, ${d + 1}\\)`;
      values[3] = `\\(${o - 1}, ${d = 1}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the order and degree of the differential equation \\[${ode.str()} = 0\\] where \\(y_n = \\frac{d^n y}{dx^n}\\)`;
      break;
    }
    case 1: {
      let y = new Polynomial();
      y.randPoly(3);
      let order = randInt(4, 2);
      let derivatives = [];
      let coefs = [];
      for (let i = 0; i < order; i++) {
        derivatives.push(y.derivative(i + 1));
        coefs.push(randInt(10, 1));
      }
      let df = new Polynomial();
      for (let i = 0; i < order; i++) {
        df = df.add(derivatives[i].scale(coefs[i]));
      }
      let q = y.sub(df);
      let eq1 = "", eq2 = "", eq3 = "", eq4 = "";
      for (let i = order - 1; i > 0; i--) {
        eq1 += coefs[i] + `\\dfrac{d^{${i + 1}}y}{dx^{${i + 1}}}` + (coefs[i - 1] > 0 ? " + " : "");
        eq2 += 2 * coefs[i] + `\\dfrac{d^{${i + 1}}y}{dx^{${i + 1}}}` + (coefs[i - 1] > 0 ? " + " : "");
        eq3 += -coefs[i] + `\\dfrac{d^{${i + 1}}y}{dx^{${i + 1}}}` + (-coefs[i - 1] > 0 ? " + " : "");
        eq4 += coefs[i] + 1 + `\\dfrac{d^{${i + 1}}y}{dx^{${i + 1}}}` + (coefs[i - 1] > 0 ? " + " : "");
      }
      eq1 += coefs[0] + `\\dfrac{dy}{dx} + `;
      eq2 += 2 * coefs[0] + `\\dfrac{dy}{dx} + `;
      eq3 += -coefs[0] + `\\dfrac{dy}{dx} + `;
      eq4 += coefs[0] + 1 + `\\dfrac{dy}{dx} + `;
      eq1 += " (" + q.str() + ") = 0";
      eq2 += " (" + q.str() + ") = 0";
      eq3 += " (" + q.str() + ") = 0";
      eq4 += " (" + q.str() + ") = 0";
      values[0] = `\\(${eq1}\\)`;
      values[1] = `\\(${eq2}\\)`;
      values[2] = `\\(${eq3}\\)`;
      values[3] = `\\(${eq4}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The function \\(y = ${y.str()}\\) is a solution to which of the differential equation?`;
      break;
    }
    case 2: {
      let y = new Polynomial();
      y.randPoly(randInt(10, 3));
      let order = 0;
      let variables = [
        "\\alpha ",
        "\\beta ",
        "\\gamma ",
        "\\mu ",
        "\\nu ",
        "\\epsilon ",
        "\\delta ",
        "\\phi ",
        "\\eta ",
        "\\theta "
      ];
      let sign = "";
      for (let i = 0; i < y.c.length; i++) {
        if (Math.random() > 0.5) {
          sign = y.c[i].a > 0 ? "+" : "-";
          y.c[i].a = sign + variables[order];
          order++;
        }
      }
      values[0] = order;
      values[1] = order - 1;
      values[2] = order + 2;
      values[3] = order + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the order of differential equation whose general solution is \\(y = ${y.str()}\\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  differential
};
