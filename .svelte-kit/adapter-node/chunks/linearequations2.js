import { r as randInt } from "./common2.js";
import { L as Linear2 } from "./linear2.js";
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
const linearequations = (problemnumber) => {
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(10, -10);
      let b = randInt(10, -10);
      let c = randInt(10, -10);
      if (a === 0) {
        while (b === 0) {
          b = randInt(10, -10);
        }
      }
      let standardEq = "";
      standardEq = a + "x";
      standardEq += b < 0 ? b + "y" : "+" + b + "y";
      standardEq += c < 0 ? c : "+" + c;
      let left = "", right = "";
      let eqChoice = randInt(3, 0);
      switch (eqChoice) {
        case 0: {
          let eq = new Linear2(a, b, 0);
          left = eq.str();
          if (left === "") left = 0;
          right = -c;
          break;
        }
        case 1: {
          let eq = new Linear2(a, 0, c);
          left = eq.str();
          if (left === "") left = 0;
          right = b === 1 ? "-y" : b === -1 ? "y" : b === 0 ? "0" : -b + "y";
          break;
        }
        case 2: {
          let eq = new Linear2(-a, -b, 0);
          right = eq.str();
          if (right === "") right = 0;
          left = c;
          break;
        }
        case 3: {
          let eq = new Linear2(a, 0, 0);
          left = eq.str();
          if (left === "") left = 0;
          let eq2 = new Linear2(0, -b, -c);
          right = eq2.str();
          if (right === "") right = 0;
          break;
        }
      }
      let form1, form2, form3;
      if (a !== 0) {
        form1 = new Linear2(-a, b, c);
      } else {
        if (c !== 0) {
          form1 = new Linear2(a, -b, c);
        } else {
          form1 = new Linear2(a, -b, 1);
        }
      }
      if (a * b * c !== 0) {
        form2 = new Linear2(-a, -b, c);
        form3 = new Linear2(-a, b, -c);
      } else {
        if (a === 0) {
          form2 = new Linear2(1, -b, c);
          form3 = new Linear2(-1, -b, c);
        } else if (b === 0) {
          form2 = new Linear2(-a, 1, c);
          form3 = new Linear2(a, -1, c);
        }
      }
      values[0] = `\\(${standardEq} = 0\\)`;
      values[1] = `\\(${form1.str()} = 0\\)`;
      values[2] = `\\(${form2.str()} = 0\\)`;
      values[3] = `\\(${form3.str()} = 0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(${left} = ${right}\\) is written in the form \\(ax + by + c = 0\\), the correct equation is?`;
      break;
    }
    case 1: {
      let eq = new Linear2();
      eq.randL(-5, 5);
      let x = randInt(5, -5);
      let y = randInt(5, -5);
      let v = eq.value(x, y);
      values[0] = v;
      values[1] = v + 1;
      values[2] = v - 1;
      values[3] = v + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The value of \\(${eq.str()}\\) at (${x}, ${y}) is?`;
      break;
    }
    case 2: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      let c = randInt(10, 1);
      let x1 = randInt(20, 15);
      let x2 = randInt(x1 - 1, 10);
      let x3 = randInt(x2 - 1, 5);
      let x4 = randInt(x3 - 1, 1);
      let y1 = new Q(c - a * x1, b);
      let y2 = new Q(c - a * x2, b);
      let y3 = new Q(c - a * x3, b);
      let y4 = new Q(c - a * x4, b);
      y1 = y1.add(new Q(1));
      y1.reduced();
      y2.reduced();
      y3.reduced();
      y4.reduced();
      values[0] = `\\(x = ${x1}, ~y=${y1.str()}\\)`;
      values[1] = `\\(x = ${x2}, ~y=${y2.str()}\\)`;
      values[2] = `\\(x = ${x3}, ~y=${y3.str()}\\)`;
      values[3] = `\\(x = ${x4}, ~y=${y4.str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following is not a solution of \\(${a === 1 ? "" : a}x + ${b === 1 ? "" : b}y = ${c}\\)`;
      break;
    }
    case 3: {
      let eq = new Linear2(randInt(5, -5), randInt(5, -5), 0);
      let eq1 = new Linear2(randInt(5, -5), randInt(5, -5), randInt(5, 1));
      let eq2 = new Linear2(randInt(5, -5), randInt(5, -5), -randInt(5, 1));
      let eq3 = new Linear2(randInt(5, -5), randInt(5, -5), randInt(5, 1));
      values[0] = `\\(${eq.str()} = 0\\)`;
      values[1] = `\\(${eq1.str()} = 0\\)`;
      values[2] = `\\(${eq2.str()} = 0\\)`;
      values[3] = `\\(${eq3.str()} = 0\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following lines pass through the origin?`;
      break;
    }
    case 4: {
      let a = randInt(10, 1);
      let b = randInt(10, 1);
      let x = randInt(10, -10);
      let y = randInt(10, -10);
      let c = -(a * x + b * y);
      let unknowns = ["a", "b", "c"];
      let vs = [a, b, c];
      let ui = randInt(2, 0);
      let unknown = unknowns[ui];
      let ai = a, bi = b, ci = c;
      switch (unknown) {
        case "a": {
          ai = "a";
          break;
        }
        case "b": {
          bi = "b";
          break;
        }
        case "c": {
          ci = "+c";
          break;
        }
      }
      let le = new Linear2(ai, bi, ci);
      values[0] = vs[ui];
      values[1] = vs[ui] - 1;
      values[2] = vs[ui] + 1;
      values[3] = vs[ui] + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If (${x}, ${y}) lies on \\(${le.str()} = 0\\), then the value of \\(${unknown}\\) is`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  linearequations
};
