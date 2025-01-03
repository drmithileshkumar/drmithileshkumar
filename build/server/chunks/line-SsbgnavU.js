import { b as pythagoreanTriplet, r as randInt } from './common-CIVVH1Lv.js';
import { L as Line } from './line2-dcGBK4v1.js';
import { L as LineQ } from './lineQ-AZY4EVYl.js';
import { P as Point } from './point-CjbXhAco.js';
import { P as Point2D } from './point2D-CqpWWiVY.js';
import { L as Linear2 } from './linear2-BPefBxlj.js';
import { Q } from './fraction-DfHHiAXd.js';
import './linear2Q-Dm9dZ92w.js';
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
const line = (problemnumber) => {
  let N = 14;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let p1 = new Point();
      p1.random(-10, 10);
      let p2 = new Point();
      p2.random(-10, 10);
      values[0] = p1.length(p2).toFixed(2);
      values[1] = p1.length().toFixed(2);
      values[2] = p2.length().toFixed(2);
      values[3] = p1.sqlength().toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Find distance between (${p1.x}, ${p1.y}) and (${p2.x}, ${p2.y})`;
      break;
    }
    case 1: {
      let p1 = new Point();
      p1.random(-10, 10);
      let p2 = new Point();
      p2.random(-10, 10);
      let l = randInt(10, 1);
      let m = randInt(10, 1);
      let q = p1.section(p2, l, m, true);
      values[0] = "( " + q.x.toFixed(2) + ", " + q.y.toFixed(2) + " )";
      values[1] = "( " + (q.x + 1).toFixed(2) + ", " + q.y.toFixed(2) + " )";
      values[2] = "( " + q.x.toFixed(2) + ", " + (q.y + 1).toFixed(2) + " )";
      values[3] = "( " + q.x.toFixed(2) + ", " + (q.y - 1).toFixed(2) + " )";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which point divides the line segment between \\((${p1.x}, ${p1.y})\\) and \\((${p2.x}, ${p2.y})\\) internally in the ratio ${l} : ${m}`;
      break;
    }
    case 2: {
      let p1 = new Point();
      p1.random(-10, 10);
      let p2 = new Point();
      p2.random(-10, 10);
      let p3 = new Point();
      p3.random(-10, 10);
      let area = p1.area(p2, p3);
      area = Math.abs(area);
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the area of a triangle whose vertices are \\(${p1.str()}\\), \\(${p2.str()}\\) and \\(${p3.str()}\\)`;
      break;
    }
    case 3: {
      let p = new Point();
      let q = new Point();
      p.random(-10, 10);
      q.random(-10, 10);
      let sol = p.x !== q.x ? (p.y - q.y) / (p.x - q.x) : "\\infty";
      let sol1, sol2, sol3, sol4;
      if (sol === "\\infty") {
        sol1 = "\\infty";
        sol4 = randInt(10, -10);
        sol2 = randInt(10, -10);
        sol3 = randInt(10, -10);
      } else {
        sol1 = sol.toFixed(2);
        sol4 = (sol + 1).toFixed(2);
        sol2 = (sol - 1).toFixed(2);
        sol3 = (sol + 2).toFixed(2);
      }
      values[0] = `\\(${sol1}\\)`;
      values[1] = `\\(${sol2}\\)`;
      values[2] = `\\(${sol3}\\)`;
      values[3] = `\\(${sol4}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The slope of the line passing through \\(${p.str()}\\) and \\(${q.str()}\\) ?`;
      break;
    }
    case 4: {
      let l = new Line();
      l.randomLine(-100, 100);
      let sol = l.slope();
      let sol1, sol2, sol3, sol4;
      if (sol === "infty") {
        sol1 = "\\infty";
        sol4 = randInt(10, -10);
        sol2 = randInt(10, -10);
        sol3 = randInt(10, -10);
      } else {
        sol1 = sol.toFixed(2);
        sol4 = (sol + 1).toFixed(2);
        sol2 = (sol - 1).toFixed(2);
        sol3 = (sol + 2).toFixed(2);
      }
      values[0] = `\\(${sol1}\\)`;
      values[1] = `\\(${sol2}\\)`;
      values[2] = `\\(${sol3}\\)`;
      values[3] = `\\(${sol4}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The slope of the line \\(${l.equation().str()} = 0\\)`;
      break;
    }
    case 5: {
      let m1 = randInt(10, -10);
      let m2 = randInt(10, -10);
      let sol = new Q(Math.abs(m2 - m1), Math.abs(1 + m1 * m2));
      sol.reduced();
      let sol1 = sol.add(new Q(1));
      let sol2 = sol.add(new Q(-1));
      let sol3 = sol.add(new Q(2));
      sol1.reduced();
      sol2.reduced();
      sol3.reduced();
      values[0] = `\\(${sol.str()}\\)`;
      values[1] = `\\(${sol1.str()}\\)`;
      values[2] = `\\(${sol2.str()}\\)`;
      values[3] = `\\(${sol3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If slopes of two lines are ${m1} and ${m2}, then what is \\(\\tan\\theta\\) where \\(\\theta\\) is the acute angle between the two lines?`;
      break;
    }
    case 6: {
      let p1 = new Point();
      let q1 = new Point();
      let p2 = new Point();
      let q2 = new Point();
      p1.random(-10, 10);
      q1.random(-10, 10);
      let m1 = new Q(q1.y - p1.y, q1.x - p1.x);
      m1.reduced();
      p2.random(-10, 10);
      q2.y = p2.y - m1.den;
      q2.x = m1.num + p2.x;
      values[0] = q2.x;
      values[1] = q2.x + 1;
      values[2] = q2.x - 1;
      values[3] = q2.x + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Line through the points \\(${p1.str()}\\) and \\(${q1.str()}\\) is perpendicular to the line through the points \\(${p2.str()}\\) and \\((x, ${q2.y})\\). The value of \\(x\\) is `;
      break;
    }
    case 7: {
      let p = new Point();
      p.random(-10, 10);
      let m = randInt(10, -10, true);
      let c = -m * p.x + p.y;
      let eq = `y = ${m === 1 ? "" : m === -1 ? "-" : m}x` + (c === 0 ? "" : c > 0 ? " + " + c : c);
      let eq1 = `y = ${m === 1 ? "-" : m === -1 ? "" : -m}x` + (c === 0 ? "" : c > 0 ? " + " + c : c);
      let eq2 = `y = ${m === 1 ? "" : m === -1 ? "-" : m}x` + (c === 0 ? "+1" : c < 0 ? " + " + -c : -c);
      let eq3 = `y = ${m === 1 ? "" : m === -1 ? "-" : m}x` + (c === 0 ? "-1" : c < 0 ? " + " + -c : -c);
      values[0] = `\\(${eq}\\)`;
      values[1] = `\\(${eq1}\\)`;
      values[2] = `\\(${eq2}\\)`;
      values[3] = `\\(${eq3}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of the line through \\(${p.str()}\\) with slope ${m} is `;
      break;
    }
    case 8: {
      let l = new Line();
      l.randomLine(-10, 10);
      let eq = l.equation();
      let eq1 = new Linear2(eq.a + 1, eq.b, eq.c);
      let eq2 = new Linear2(eq.a, eq.b + 1, eq.c);
      let eq3 = new Linear2(eq.a, eq.b, eq.c + 1);
      values[0] = `\\(${eq.str()} = 0\\)`;
      values[1] = `\\(${eq1.str()} = 0\\)`;
      values[2] = `\\(${eq2.str()} = 0\\)`;
      values[3] = `\\(${eq3.str()} = 0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of line through \\(${l.p.str()}\\) and \\(${l.q.str()}\\) is `;
      break;
    }
    case 9: {
      let axis = Math.random() < 0.5 ? "x" : "y";
      let intercept = randInt(10, -10);
      let m = randInt(10, -10, true);
      let c = axis === "x" ? intercept : -m * intercept;
      let eq = `y = ${m === 1 ? "" : m === -1 ? "-" : m}x` + (c === 0 ? "" : c > 0 ? " + " + c : c);
      let eq1 = `y = ${m === 1 ? "-" : m === -1 ? "" : -m}x` + (c === 0 ? "" : c > 0 ? " + " + c : c);
      let eq2 = `y = ${m === 1 ? "" : m === -1 ? "-" : m}x` + (c === 0 ? "+1" : c < 0 ? " + " + -c : -c);
      let eq3 = `y = ${m === 1 ? "" : m === -1 ? "-" : m}x` + (c === 0 ? "-1" : c < 0 ? " + " + -c : -c);
      values[0] = `\\(${eq}\\)`;
      values[1] = `\\(${eq1}\\)`;
      values[2] = `\\(${eq2}\\)`;
      values[3] = `\\(${eq3}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of line with \\(${axis}\\)-intercept ${intercept} and slope ${m}`;
      break;
    }
    case 10: {
      let a = randInt(10, -10, true);
      let b = randInt(10, -10, true);
      values[0] = `\\(\\dfrac{x}{${a}} + \\dfrac{y}{${b}} = 1\\)`;
      values[1] = `\\(\\dfrac{x}{${a}} + \\dfrac{y}{${b}} = -1\\)`;
      values[2] = `\\(\\dfrac{x}{${a}} - \\dfrac{y}{${b}} = 1\\)`;
      values[3] = `\\(\\dfrac{x}{${a}} - \\dfrac{y}{${b}} = -1\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of line with \\(x\\)-intercept ${a} and \\(y\\)-intercept ${b} is`;
      break;
    }
    case 11: {
      let t = pythagoreanTriplet(5);
      let p = randInt(10, 1);
      let rhs = p * t.h;
      values[0] = `\\(${t.b}x + ${t.p}y = ${rhs}\\)`;
      values[1] = `\\(${t.b}x - ${t.p}y = ${rhs}\\)`;
      values[2] = `\\(${t.b}x + ${t.p}y = -${rhs}\\)`;
      values[3] = `\\(${t.b}x - ${t.p}y = -${rhs}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of line whose perpendicular distance from the origin is ${p} and the angle which the normal makes with positive direction of \\(x\\)-axis is \\(\\tan^{-1}(\\dfrac{${t.p}}{${t.b}})\\) is`;
      break;
    }
    case 12: {
      let l = new LineQ();
      l.randomLine(5, 5);
      let eq = l.equation();
      let p = new Point2D();
      p.randomPoint(5, 5);
      let q = l.perpendicular(p);
      let l2 = new LineQ({ p, q });
      let eq1 = l2.equation();
      values[0] = `\\(${eq1.str()} = 0\\)`;
      values[1] = `\\(${eq1.perturb().str()} = 0\\)`;
      values[2] = `\\(${eq1.perturb().str()} = 0\\)`;
      values[3] = `\\(${eq1.perturb().str()} = 0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of line perpendicular to the line \\(${eq.str()} = 0\\) and passing through the point \\(${p.str()}\\)`;
      break;
    }
    case 13: {
      let t = pythagoreanTriplet(5);
      let eq = new Linear2(t.p, t.b, t.h);
      eq.a = Math.random() > 0.5 ? -eq.a : eq.a;
      eq.b = Math.random() > 0.5 ? -eq.b : eq.b;
      let p = new Point();
      p.random(-10, 10);
      let d = new Q(Math.abs(eq.value(p.x, p.y)), t.h);
      d.reduced();
      let d1 = d.add(new Q(1));
      let d2 = d.add(new Q(-1));
      let d3 = d.add(new Q(2));
      d1.reduced();
      d2.reduced();
      d3.reduced();
      values[0] = `\\(${d.str()}\\)`;
      values[1] = `\\(${d1.str()}\\)`;
      values[2] = `\\(${d2.str()}\\)`;
      values[3] = `\\(${d3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The distance of the point \\(${p.str()}\\) from the line \\(${eq.str()} = 0\\) is `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { line };
//# sourceMappingURL=line-SsbgnavU.js.map
