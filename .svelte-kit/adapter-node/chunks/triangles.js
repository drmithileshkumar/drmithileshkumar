import { a as randSubset, s as shuffle, r as randInt } from "./common.js";
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
const triangles = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let A = randInt(150, 90);
      let B = randInt(180 - A - 5, 25);
      let C = 180 - A - B;
      let angles = [A, B, C];
      angles = shuffle(angles);
      let sides = ["BC", "AC", "AB"];
      let max = Math.max(...angles);
      let maxi = angles.indexOf(max);
      values[0] = sides[maxi];
      values[1] = sides[(maxi + 1) % 3];
      values[2] = sides[(maxi + 2) % 3];
      values[3] = "none";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If the angles of a triangle are \\(A = ${angles[0]}^\\circ, B = ${angles[1]}^\\circ, C = ${angles[2]}^\\circ\\), then the largest side will be`;
      break;
    }
    case 1: {
      let rights = ["AB = PQ", "BC = QR", "CA = RP", "\\angle A = \\angle P", "\\angle B = \\angle Q", "\\angle C = \\angle R"];
      let wrongs = ["AB = QR", "AB = RP", "BC = PQ", "BC = RP", "CA = PQ", "CA = QR", "\\angle A = \\angle Q", "\\angle A = \\angle R", "\\angle B = \\angle P", "\\angle B = \\angle R", "\\angle C = \\angle P", "\\angle C = \\angle Q"];
      let righti = randInt(5, 0);
      let wrongis = randSubset(12, 3);
      values[0] = `\\(${rights[righti]}\\)`;
      values[1] = `\\(${wrongs[wrongis[0]]}\\)`;
      values[2] = `\\(${wrongs[wrongis[1]]}\\)`;
      values[3] = `\\(${wrongs[wrongis[2]]}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If triangles \\(\\Delta ABC\\) and \\(\\Delta PQR\\) are congruent, then which of the following is correct?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  triangles
};
