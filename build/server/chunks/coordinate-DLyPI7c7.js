import { r as randInt } from './common-CIVVH1Lv.js';

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
const coordinate = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let quadrants = ["I", "II", "III", "IV"];
      let r1 = randInt(10, -10);
      let r2 = randInt(10, -10);
      let qi = 0;
      if (r1 >= 0) {
        if (r2 >= 0) {
          qi = 0;
        } else {
          qi = 3;
        }
      } else {
        if (r2 >= 0) {
          qi = 1;
        } else {
          qi = 2;
        }
      }
      values[0] = quadrants[qi];
      values[1] = quadrants[(qi + 1) % 4];
      values[2] = quadrants[(qi + 2) % 4];
      values[3] = quadrants[(qi + 3) % 4];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the quadrant of the point \\((${r1}, ${r2})\\)`;
      break;
    }
    case 1: {
      let x = randInt(10, -10);
      let y = randInt(10, 1);
      values[0] = `\\((${x}, 0)\\)`;
      values[1] = `\\((${x}, ${y})\\)`;
      values[2] = `\\((${x}, ${-y})\\)`;
      values[3] = `\\((${x}, ${2 * y})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which point lie on the \\(x\\)-axis?`;
      break;
    }
    case 2: {
      let y = randInt(10, -10);
      let x = randInt(10, 1);
      values[0] = `\\((0, ${y})\\)`;
      values[1] = `\\((${x}, ${y})\\)`;
      values[2] = `\\((${-x}, ${y})\\)`;
      values[3] = `\\((${2 * x}, ${y})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which point lie on the \\(y\\)-axis?`;
      break;
    }
    case 3: {
      let A = {
        x: randInt(60, -60),
        y: randInt(60, -60)
      };
      let B = {
        x: A.x + 10,
        y: -A.y
      };
      let C = {
        x: -A.x,
        y: A.y + 10
      };
      let D = {
        x: -A.x + 10,
        y: -A.y + 10
      };
      let i = randInt(3, 0);
      let labels = ["A", "B", "C", "D"];
      let points = [A, B, C, D];
      values[0] = labels[i];
      values[1] = labels[(i + 1) % 4];
      values[2] = labels[(i + 2) % 4];
      values[3] = labels[(i + 3) % 4];
      for (let i2 = 0; i2 < 4; i2++) {
        problemset.o[choices[(correctChoiceIndex + i2) % 4]] = values[i2];
      }
      let svg = `<svg width=150 height=150 viewBox="-75 -75 150 150">
                <line x1=-75 y1=0 x2=75 y2=0 stroke='currentColor' stroke-width="0.5" fill='none' />
                <line y1=-75 x1=0 y2=75 x2=0 stroke='currentColor' stroke-width="0.5" fill='none' />
                <circle cx=${A.x} cy=${A.y} r="2" fill="currentColor" />
                <text x=${A.x} y=${A.y - 4} font-size="8" fill="currentColor">A</text>
                <circle cx=${B.x} cy=${B.y} r="2" fill="currentColor" />
                <text x=${B.x} y=${B.y - 4} font-size="8" fill="currentColor">B</text>
                <circle cx=${C.x} cy=${C.y} r="2" fill="currentColor" />
                <text x=${C.x} y=${C.y - 4} font-size="8" fill="currentColor">C</text>
                <circle cx=${D.x} cy=${D.y} r="2" fill="currentColor" />
                <text x=${D.x} y=${D.y - 4} font-size="8" fill="currentColor">D</text>
            </svg>`;
      problemset.s = `<span>Which point is (${points[i].x}, ${-points[i].y})?</span><div style="display:flex;flex-direction:column;">` + svg + "</div>";
      break;
    }
    case 4: {
      let y1 = randInt(100, -100);
      let y2 = randInt(100, -100);
      let y3 = randInt(100, -100);
      let y4 = randInt(100, -100);
      let k = randInt(10, 1);
      values[0] = `\\((${k * y1 + 1}, ${y1})\\)`;
      values[1] = `\\((${k * y2}, ${y2})\\)`;
      values[2] = `\\((${k * y3}, ${y3})\\)`;
      values[3] = `\\((${k * y4}, ${y4})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If position of a point is such that x-coordinate is ${k} times the y-coordinate, then which is not a possible position of the point?`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { coordinate };
//# sourceMappingURL=coordinate-DLyPI7c7.js.map
