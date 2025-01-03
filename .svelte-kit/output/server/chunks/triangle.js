import { p as pythagoreanTriplet } from "./common.js";
import { T as Triangle } from "./triangle2.js";
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
const triangle = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let tri = new Triangle();
      tri.randomT();
      tri.computeSides();
      tri.computeAngles();
      let angleC = (tri.angles.C * 180 / Math.PI).toFixed(0);
      let angleB = (tri.angles.B * 180 / Math.PI).toFixed(0);
      let triangle2 = tri.draw(["A", "B", "C"], ["x", angleB, ""], true);
      let extC = 180 - (tri.angles.C * 180 / Math.PI).toFixed(0);
      values[0] = extC - angleB;
      values[1] = angleB;
      values[2] = extC;
      values[3] = angleC;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      let bbox = tri.computeBBox();
      let svgStart = `<svg width="300" height="300" viewBox="${bbox.x - 20} ${bbox.y - 20} ${bbox.width + 40} ${bbox.height + 40}" >`;
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p style="margin: 0;font-size: 0.7em;">Find \\(x\\) if the exterior angle at C is \\(${extC}^\\circ\\)</p>`;
      problemset.s = divStart + svgStart + triangle2 + svgEnd + divEnd;
      break;
    }
    case 1: {
      let tri = new Triangle();
      tri.randomT();
      tri.computeSides();
      tri.sides.a = Math.floor(tri.sides.a * 10) / 10;
      tri.sides.b = Math.floor(tri.sides.b * 10) / 10;
      tri.sides.c = Math.floor(tri.sides.c * 10) / 10;
      values[0] = tri.sides.a + ", " + tri.sides.b + ", " + tri.sides.c;
      values[1] = tri.sides.a + ", " + (tri.sides.a + tri.sides.c) + ", " + tri.sides.c;
      values[2] = tri.sides.b + tri.sides.c + ", " + tri.sides.b + ", " + tri.sides.c;
      values[3] = tri.sides.a + ", " + tri.sides.b + ", " + (tri.sides.a + tri.sides.b);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = "Which of the following side lengths construct a triangle?";
      break;
    }
    case 2: {
      let triplet = pythagoreanTriplet(20);
      values[0] = triplet.p + ", " + triplet.b + ", " + triplet.h;
      values[1] = triplet.p + ", " + (triplet.b - 1) + ", " + triplet.h;
      values[2] = triplet.p + ", " + triplet.b + ", " + (triplet.h - 1);
      values[3] = triplet.p + 1 + ", " + triplet.b + ", " + triplet.h;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = "Which of the following side lengths construct a right-angled triangle?";
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  triangle
};
