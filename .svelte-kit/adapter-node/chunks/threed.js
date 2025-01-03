import { r as randInt } from "./common.js";
import { P as Point3D } from "./point3D.js";
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
const threed = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let x = randInt(10, 0);
      let y = randInt(10, 0);
      let z = randInt(10, 0);
      x = Math.random() < 0.5 ? x : -x;
      y = Math.random() < 0.5 ? y : -y;
      z = Math.random() < 0.5 ? z : -z;
      let octants = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
      let o = (x >= 0 ? 0 : 1) + (y >= 0 ? 0 : 1) * 2 + (z >= 0 ? 0 : 1) * 4;
      values[0] = octants[o];
      values[1] = octants[(o + 1) % 8];
      values[2] = octants[(o + 3) % 8];
      values[3] = octants[(o + 5) % 8];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the octant of the point \\((${x},${y},${z})\\) ?`;
      break;
    }
    case 1: {
      let p1 = new Point3D();
      p1.randP3D(10, 10, 10, true);
      let q = new Point3D();
      q.randP3D(10, 10, 10, true);
      let p = p1.sub(q);
      let leng = p.length();
      values[0] = `\\(${leng.str()}\\)`;
      values[1] = `\\(${leng.scale(2).str()}\\)`;
      values[2] = `\\(${leng.scale(-1).str()}\\)`;
      values[3] = `\\(${leng.scale(3).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Distance of the point \\(${p1.str()}\\) from \\(${q.str()}\\) is`;
      break;
    }
    case 2: {
      let p1 = new Point3D();
      p1.randP3D(10, 10, 10, true);
      let p2 = new Point3D();
      p2.randP3D(10, 10, 10, true);
      let l = randInt(10, 1);
      let m = randInt(10, 1);
      let q = p1.section(p2, l, m, true);
      values[0] = `\\(${q.str()}\\)`;
      values[1] = `\\(${q.scale(-1).str()}\\)`;
      values[2] = `\\(${q.scale(2).str()}\\)`;
      values[3] = `\\(${q.scale(-2).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which point divides the line segment between \\(${p1.str()}\\) and \\(${p2.str()}\\) internally in the ratio ${l} : ${m}`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  threed
};
