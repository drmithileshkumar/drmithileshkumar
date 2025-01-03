import { s as shuffle, r as randInt } from './common-CIVVH1Lv.js';
import { Q } from './fraction-DfHHiAXd.js';
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
const rational = (problemnumber) => {
  let N = 4;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let f = new Q();
      f.randF(10, 10, true);
      let f1 = new Q();
      f1.randF(10, 10, true);
      let f2 = new Q();
      f2.randF(10, 10, true);
      let f3 = new Q();
      f3.randF(10, 10, true);
      let sum = f.add(f1).add(f2).add(f3);
      sum.reduced();
      let factor = randInt(10, 1);
      let factors = [];
      for (let i = 0; i < 3; i++) {
        factors.push(new Q(f.num * (factor + i), f.den * (factor + i)));
      }
      let sum1 = f.add(f1).add(f2);
      sum1.reduced();
      let sum2 = sum.sub(new Q(1, sum.den));
      sum2.reduced();
      let sum3 = sum.add(new Q(1, sum.den));
      sum3.reduced();
      values[0] = `\\(${sum.str()}\\)`;
      values[1] = `\\(${sum1.str()}\\)`;
      values[2] = `\\(${sum2.str()}\\)`;
      values[3] = `\\(${sum3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${f.isLZero() ? "(" + f.str() + ")" : f.str()} + ${f1.isLZero() ? "(" + f1.str() + ")" : f1.str()} + ${f2.isLZero() ? "(" + f2.str() + ")" : f2.str()} + ${f3.isLZero() ? "(" + f3.str() + ")" : f3.str()} =\\) ____`;
      break;
    }
    case 1: {
      let f1 = new Q();
      f1.randF(10, 10, true);
      let f2 = new Q();
      f2.randF(10, 10, true);
      let mean = f1.add(f2).mul(new Q(1, 2));
      mean.reduced();
      values[0] = `\\(${mean.str()}\\)`;
      values[1] = `\\(${f1.str()}\\)`;
      values[2] = `\\(${f2.str()}\\)`;
      values[3] = `\\(${mean.add(f2).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which number is between \\(${f1.str()}\\) and \\(${f2.str()}\\) ?`;
      break;
    }
    case 2: {
      let part1 = [];
      let part2 = [];
      let chs = [];
      let nums = [];
      let dens = [];
      for (let i = 0; i < 4; i++) {
        part1.push(randInt(10, -10, true));
        part2.push(part1[i] * randInt(10, 1));
        chs.push(randInt(1, 0));
        nums.push(chs[i] === 1 ? part2[i] : part1[i]);
        dens.push(chs[i] === 0 ? part2[i] : part1[i]);
      }
      nums = shuffle(nums);
      dens = shuffle(dens);
      let fs = [];
      for (let i = 0; i < 4; i++) {
        fs.push(new Q(nums[i], dens[i]));
      }
      let fStr = fs.map((q) => q.str()).join("\\times");
      let v0 = fs[0].mul(fs[1]).mul(fs[2]).mul(fs[3]);
      v0.reduced();
      let v1 = v0.add(new Q(1));
      v1.reduced();
      let v2 = v1.scale(-1);
      v2.reduced();
      let v3 = v0.scale(-1);
      v3.reduced();
      values[0] = `\\(${v0.str()}\\)`;
      values[1] = `\\(${v1.str()}\\)`;
      values[2] = `\\(${v2.str()}\\)`;
      values[3] = `\\(${v3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${fStr} = \\)`;
      break;
    }
    case 3: {
      let part1 = [];
      let part2 = [];
      let chs = [];
      let nums = [];
      let dens = [];
      for (let i = 0; i < 4; i++) {
        part1.push(randInt(10, -10, true));
        part2.push(part1[i] * randInt(10, 1));
        chs.push(randInt(1, 0));
        nums.push(chs[i] === 1 ? part2[i] : part1[i]);
        dens.push(chs[i] === 0 ? part2[i] : part1[i]);
      }
      let fs = [];
      for (let i = 0; i < 4; i++) {
        fs.push(new Q(nums[i], dens[i]));
      }
      let fStr = fs[0].str() + "\\times " + fs[1].str() + " + " + fs[2].str() + "\\times " + fs[3].str();
      let v0 = fs[0].mul(fs[1]).add(fs[2].mul(fs[3]));
      v0.reduced();
      let v1 = v0.add(new Q(1));
      v1.reduced();
      let v2 = v1.scale(-1);
      v2.reduced();
      let v3 = v0.scale(-1);
      v3.reduced();
      values[0] = `\\(${v0.str()}\\)`;
      values[1] = `\\(${v1.str()}\\)`;
      values[2] = `\\(${v2.str()}\\)`;
      values[3] = `\\(${v3.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `\\(${fStr} = \\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { rational };
//# sourceMappingURL=rational2-DzV74GpN.js.map
