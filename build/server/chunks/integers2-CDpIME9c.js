import { r as randInt } from './common-CIVVH1Lv.js';

class Magic3 {
  constructor({ square = [] } = {}) {
    this.square = square;
  }
  randomMagic() {
    let M = randInt(100, -100);
    let A = randInt(100, -100);
    let B = randInt(100, -100);
    while (A === B || A === 2 * B || 2 * A === B) {
      B = randInt(100, -100);
    }
    this.square = [
      [M - A, M + A + B, M - B],
      [M + A - B, M, M - A + B],
      [M + B, M - A - B, M + A]
    ];
  }
  draw(stars = []) {
    let rows = "";
    for (let i = 0; i < 3; i++) {
      rows += `<tr>`;
      for (let j = 0; j < 3; j++) {
        rows += `<td style="border: 1px solid currentcolor; text-align:center;">${stars.indexOf(i + "" + j) === -1 ? this.square[i][j] : "*"}</td>`;
      }
      rows += `</tr>`;
    }
    let tbl = `<table style="margin:auto;border: 1px solid currentcolor; border-collapse: collapse;">${rows}</table>`;
    return tbl;
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
const integers = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(10, -10);
      let r2 = randInt(10, -10);
      values[0] = `\\(${r1 * r2}\\)`;
      values[1] = `\\(${r1 * r2 + 1}\\)`;
      values[2] = `\\(${r1 * r2 - 1}\\)`;
      values[3] = `\\(${r1 * r2 + 2}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 1.5em;">${r1} \\(\\times\\) ${r2} = ____</span>`;
      break;
    }
    case 1: {
      let mgSqr = new Magic3();
      mgSqr.randomMagic();
      let rI = randInt(2, 0);
      let cI = randInt(2, 0);
      values[0] = mgSqr.square[rI][cI];
      values[1] = mgSqr.square[rI][cI] + 1;
      values[2] = mgSqr.square[rI][cI] - 1;
      values[3] = mgSqr.square[rI][cI] + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which numbers completes the magic square ${mgSqr.draw([rI + "" + cI])}?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { integers };
//# sourceMappingURL=integers2-CDpIME9c.js.map
