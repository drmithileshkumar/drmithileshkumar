import { a as randSubset, r as randInt } from './common-CIVVH1Lv.js';

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
const practicalgeometry = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let A = randInt(120, 1);
      let B = randInt(A - 1, 1);
      let C = randInt(B - 1, 1);
      values[0] = `\\(A = ${A}^\\circ, B = ${B}^\\circ, C = ${C}^\\circ, d = ${360 - (A + B + C)}^\\circ\\)`;
      values[1] = `\\(A = ${A}^\\circ, B = ${B}^\\circ, C = ${C}^\\circ, d = ${360 - (A + B + C) + 1}^\\circ\\)`;
      values[2] = `\\(A = ${A}^\\circ, B = ${B}^\\circ, C = ${C}^\\circ, d = ${360 - (A + B + C) + 2}^\\circ\\)`;
      values[3] = `\\(A = ${A}^\\circ, B = ${B}^\\circ, C = ${C}^\\circ, d = ${360 - (A + B + C) - 1}^\\circ\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(A, B, C, D\\) denote the angles of a quadrilateral, which quadrilateral is possible?`;
      break;
    }
    case 1: {
      let sides = ["AB", "BC", "CD", "DA"];
      let diagonals = ["AC", "BD"];
      let allsides = ["AB", "BC", "CD", "DA", "AC", "BD"];
      let angles = ["\\angle A", "\\angle B", "\\angle C", "\\angle D"];
      let wrongType = randInt(3, 0);
      let wrongInfo = [];
      switch (wrongType) {
        case 0:
        case 1: {
          let rs = randSubset(6, 4);
          wrongInfo = rs.map((i) => allsides[i]);
          break;
        }
        case 2: {
          let rs = randInt(1, 0);
          if (rs === 1) {
            wrongInfo.push("BC");
            wrongInfo.push("DA");
          } else {
            wrongInfo.push("AB");
            wrongInfo.push("CD");
          }
          let ra2 = randSubset(4, 3);
          for (let i in ra2) {
            wrongInfo.push(angles[i]);
          }
          break;
        }
        case 3: {
          let ra2 = randInt(1, 0);
          if (ra2 === 1) {
            wrongInfo.push("\\angle B");
            wrongInfo.push("\\angle D");
          } else {
            wrongInfo.push("\\angle A");
            wrongInfo.push("\\angle C");
          }
          let rs = randSubset(4, 3);
          for (let i in rs) {
            wrongInfo.push(sides[i]);
          }
          break;
        }
      }
      let rightInfo0 = ["AB", "BC", "CD", "DA", Math.random() < 0.5 ? diagonals[0] : diagonals[1]];
      let ri = randInt(3, 0);
      let rightInfo1 = sides.filter((i) => i !== sides[ri]).concat(diagonals);
      let ri1 = randInt(3, 0);
      let ra = randInt(3, 0);
      let rightInfo2 = angles.filter((i) => i !== angles[ra]).concat([sides[ri1], sides[(ri1 + 1) % 4]]);
      values[0] = `\\(${wrongInfo.join(", ")}\\)`;
      values[1] = `\\(${rightInfo0.join(", ")}\\)`;
      values[2] = `\\(${rightInfo1.join(", ")}\\)`;
      values[3] = `\\(${rightInfo2.join(", ")}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which information is not sufficient to draw a unique quadrilateral?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { practicalgeometry };
//# sourceMappingURL=practicalgeometry3-D0UncjFx.js.map
