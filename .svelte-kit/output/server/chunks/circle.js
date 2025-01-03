import { r as randInt } from "./common.js";
import { P as Point } from "./point.js";
import { P as Point2D } from "./point2D.js";
import { C as Circle } from "./circle2.js";
import { Q } from "./fraction.js";
import { L as LineQ } from "./lineQ.js";
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
const circle = (problemnumber) => {
  let N = 6;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let alpha = randInt(90, 0);
      let beta = randInt(90, 0);
      let sections = ["circle", "ellipse", "parabola", "hyperbola"];
      let r = Math.random();
      beta = r < 0.25 ? 90 : r < 0.5 ? alpha : beta;
      let j = beta == 90 ? 0 : alpha < beta ? 1 : alpha == beta ? 2 : 3;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = sections[(j + i) % 4];
      }
      problemset.s = `The angle between the axis and the generator of a cone is \\(\\alpha = ${alpha}^\\circ\\). If \\(\\beta = ${beta}^\\circ\\) is the angle between an intersecting plane with the axis of the cone, then the resulting section is `;
      break;
    }
    case 1: {
      let center = new Point();
      center.random(-10, 10);
      let r = randInt(10, 1);
      let circle1 = new Circle({ r, center });
      let circle2 = new Circle({ r, center: center.scale(-1) });
      let circle3 = new Circle({ r, center: center.y === 0 ? new Point(center.x, -center.x) : center.reflectX() });
      let circle4 = new Circle({ r, center: center.x === 0 ? new Point(center.y, -center.y) : center.reflectY() });
      values[0] = `\\(${circle1.str("standard")}\\)`;
      values[1] = `\\(${circle2.str("standard")}\\)`;
      values[2] = `\\(${circle3.str("standard")}\\)`;
      values[3] = `\\(${circle4.str("standard")}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of circle with center \\(${center.str()}\\) and radius ${r} is `;
      break;
    }
    case 2: {
      let center = new Point();
      center.random(-10, 10);
      let r = randInt(10, 1);
      let circle2 = new Circle({ r, center });
      values[0] = r;
      values[1] = r - 1;
      values[2] = r + 1;
      values[3] = r + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the general equation of a circle is \\(${circle2.str("general")}\\), then it's radius is`;
    }
    case 3: {
      let center = new Point();
      center.random(-10, 10);
      let r = randInt(10, 1);
      let circle2 = new Circle({ r, center });
      values[0] = `\\(${center.str()}\\)`;
      values[1] = `\\(${center.scale(-1).str()}\\)`;
      values[2] = `\\(${center.scale(-2).str()}\\)`;
      values[3] = `\\(${center.scale(2).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the general equation of a circle is \\(${circle2.str("general")}\\), then it's center is`;
    }
    case 4: {
      let p = new Point();
      let q = new Point();
      p.random(-10, 10);
      q.random(-10, 10);
      let circle2 = new Circle();
      values[0] = `\\(${circle2.str("diameter", [p, q])}\\)`;
      values[1] = `\\(${circle2.str("diameter", [p.scale(-1), q])}\\)`;
      values[2] = `\\(${circle2.str("diameter", [p, q.scale(-1)])}\\)`;
      values[3] = `\\(${circle2.str("diameter", [p.scale(-1), q.scale(-1)])}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The end points of diameter of a circle are \\(${p.str()}\\) and \\(${q.str()}\\). The equation of the circle is `;
      break;
    }
    case 5: {
      let center = new Point2D();
      let t = new Point2D();
      center.randomPoint(10, 10);
      t.randomPoint(10, 10);
      let normal = new LineQ({ p: center, q: t });
      let slopeNormal = normal.slope();
      let slopeTangent = slopeNormal === "infty" ? new Q(0) : slopeNormal.isZero() ? "infty" : new Q(-slopeNormal.den, slopeNormal.num);
      let slopeNormal1 = new Q(1), slopeTangent1 = new Q(1);
      if (slopeNormal !== "infty") {
        slopeNormal.reduced();
        slopeNormal1 = slopeNormal.scale(-1);
      }
      if (slopeTangent !== "infty") {
        slopeTangent.reduced();
        slopeTangent1 = slopeTangent.scale(-1);
      }
      let tangent1 = new LineQ();
      tangent1.pointSlopeEquation(t, slopeTangent);
      let tangent2 = new LineQ();
      tangent2.pointSlopeEquation(t, slopeTangent1);
      let tangent3 = new LineQ();
      tangent3.pointSlopeEquation(t, slopeNormal);
      let tangent4 = new LineQ();
      tangent4.pointSlopeEquation(t, slopeNormal1);
      values[0] = `\\(${tangent1.str()}\\)`;
      values[1] = `\\(${tangent2.str()}\\)`;
      values[2] = `\\(${tangent3.str()}\\)`;
      values[3] = `\\(${tangent4.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The equation of tangent to a circle with center \\(${center.str()}\\) at point \\(${t.str()}\\) is`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  circle
};
