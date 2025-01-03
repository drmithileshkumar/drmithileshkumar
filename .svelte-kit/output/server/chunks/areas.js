import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
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
const areas = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      randInt(10, 4);
      let ad = 2 * randInt(100, 50);
      let ae = 5 * randInt(10, 1);
      let cf = randInt(20, 1);
      let parallelo = `<path d="M 0,0 H 80 L 100,-50 H 20 Z" stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let AE = `<path d="M 20,-50 V 0" stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let CF = `<path d="M 80,0 L 10,-25" stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let A = `<text text-anchor="middle" x='20' y='-55' fill="currentcolor" font-size='10'>A</text>`;
      let B = `<text text-anchor="middle" x='-7' y='5' fill="currentcolor" font-size='10'>B</text>`;
      let C = `<text text-anchor="middle" x='87' y='5' fill="currentcolor" font-size='10'>C</text>`;
      let D = `<text text-anchor="middle" x='105' y='-55' fill="currentcolor" font-size='10'>D</text>`;
      let E = `<text text-anchor="middle" x='20' y='10' fill="currentcolor" font-size='10'>E</text>`;
      let F = `<text text-anchor="middle" x='5' y='-25' fill="currentcolor" font-size='10'>F</text>`;
      let labels = A + B + C + D + E + F;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p style="margin:0;">Let ABCD be a parallelogram with \\(AE\\perp BC\\) and \\(CF\\perp AB\\). If \\(AD = ${ad}, AE=${ae}, CF=${cf}\\), then \\(AB\\) is?</p><svg width="150" height="100" viewBox="-10 -75 150 100" >` + parallelo + AE + CF + labels + `</svg></div>`;
      let f = new Q(ad * ae, 2 * cf);
      f.reduced();
      let f1 = new Q(ad * ae, cf);
      f1.reduced();
      let f2 = new Q(2 * ad * ae, cf);
      f2.reduced();
      let f3 = new Q(ad * cf, 2 * ae);
      f3.reduced();
      values[0] = f.str();
      values[1] = f1.str();
      values[2] = f2.str();
      values[3] = f3.str();
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = svg;
      break;
    }
    case 1: {
      let n = randInt(10, 1);
      let m = randInt(10, 1);
      let fa = randInt(10, 1);
      let a = 2 * (m + n) * fa;
      let py = Math.round(50 * m / (m + n));
      let px = randInt(70, 30);
      let plabel = m > n ? -py + 15 : -py - 5;
      2 * randInt(100, 50);
      5 * randInt(10, 1);
      randInt(20, 1);
      let parallelo = `<path d="M 0,0 H 80 L 100,-50 H 20 Z" stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let AP = `<line x1=0 y1=0 x2=${px} y2=-${py} stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let BP = `<line x1=80 y1=0 x2=${px} y2=-${py} stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let CP = `<line x1=100 y1=-50 x2=${px} y2=-${py} stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let DP = `<line x1=20 y1=-50 x2=${px} y2=-${py} stroke="currentcolor" stroke-width="2" fill="none"/>`;
      let D = `<text text-anchor="middle" x='20' y='-55' fill="currentcolor" font-size='10'>D</text>`;
      let A = `<text text-anchor="middle" x='-7' y='5' fill="currentcolor" font-size='10'>A</text>`;
      let B = `<text text-anchor="middle" x='87' y='5' fill="currentcolor" font-size='10'>B</text>`;
      let C = `<text text-anchor="middle" x='105' y='-55' fill="currentcolor" font-size='10'>C</text>`;
      let P = `<text text-anchor="middle" x=${px} y=${plabel} fill="currentcolor" font-size='10'>P</text>`;
      let labels = A + B + C + D + P;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p style="margin:0;">Let ABCD be a parallelogram and P be any point inside such that ratio of the areas of triangles \\(\\Delta ABP\\) and \\(\\Delta CDP\\) is ${m} : ${n}. If the area of the parallelogram ABCD is ${a}, then the area of the triangle \\(\\Delta ABP\\) is?</p><svg width="150" height="100" viewBox="-10 -75 150 100" >` + parallelo + BP + CP + DP + AP + labels + `</svg></div>`;
      let ABP = fa * m;
      values[0] = ABP;
      values[1] = a;
      values[2] = ABP - 1;
      values[3] = ABP + 1;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  areas
};
