import { r as randInt } from "./common.js";
import { Q } from "./fraction.js";
import { L as Linear2 } from "./linear2.js";
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
const linear = (problemnumber) => {
  let N = 3;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let a = randInt(10, 2);
      let b = randInt(10, 2);
      let c = randInt(10, 2);
      let lp1 = `${a}x + ${b}y`;
      let v1 = "(0, 0)";
      let p1 = new Q(c, a);
      let p2 = new Q(c, b);
      p1.reduced();
      p2.reduced();
      let v2 = "(" + p1.str() + ",0)";
      let v3 = "(0," + p2.str() + ")";
      let p3 = Math.random() < 0.5 ? p1.scale(-1) : p2.scale(-1);
      p3.reduced();
      let v4 = "(0," + p3.str() + ")";
      values[0] = `\\(${v4}\\)`;
      values[1] = `\\(${v1}\\)`;
      values[2] = `\\(${v2}\\)`;
      values[3] = `\\(${v3}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following points is not a vertex of the feasible region of the linear programming problem
                \\[\\begin{aligned} 
                    ${lp1} &\\leq ${c}\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;
      break;
    }
    case 1: {
      let L1 = new Linear2();
      L1.randL(2, 10);
      L1.c = -L1.c;
      let L2 = new Linear2();
      L2.randL(2, 10);
      L2.c = -L2.c;
      let lp1 = L1.str();
      let lp2 = L2.str();
      let result = L1.solve(L2);
      while (result.x === NaN || result.y === NaN) {
        L1.randL(2, 10);
        L1.c = -L1.c;
        L2.randL(2, 10);
        L2.c = -L2.c;
        lp1 = L1.str();
        lp2 = L2.str();
        result = L1.solve(L2);
      }
      let p1x = {
        x: new Q(-L1.c, L1.a),
        y: new Q()
      };
      let p1y = {
        x: new Q(),
        y: new Q(-L1.c, L1.b)
      };
      let p2x = {
        x: new Q(-L2.c, L2.a),
        y: new Q()
      };
      let p2y = {
        x: new Q(),
        y: new Q(-L2.c, L2.b)
      };
      let feasiblex, feasibley, infeasiblex, infeasibley;
      if (p1x.x.value() < p2x.x.value()) {
        feasiblex = p1x;
        infeasiblex = p2x;
      } else {
        feasiblex = p2x;
        infeasiblex = p1x;
      }
      if (p1y.y.value() < p2y.y.value()) {
        feasibley = p1y;
        infeasibley = p2y;
      } else {
        feasibley = p2y;
        infeasibley = p1y;
      }
      let infeasible = Math.random() > 0.5 ? infeasiblex : infeasibley;
      let vertex = result.x.mul(result.y).value() > 0 ? result : { x: new Q(), y: new Q() };
      infeasible.x.reduced();
      infeasible.y.reduced();
      vertex.x.reduced();
      vertex.y.reduced();
      feasiblex.x.reduced();
      feasiblex.y.reduced();
      feasibley.x.reduced();
      feasibley.y.reduced();
      values[0] = `\\((${infeasible.x.str()}, ${infeasible.y.str()})\\)`;
      values[1] = `\\((${vertex.x.str()}, ${vertex.y.str()})\\)`;
      values[2] = `\\((${feasiblex.x.str()}, ${feasiblex.y.str()})\\)`;
      values[3] = `\\((${feasibley.x.str()}, ${feasibley.y.str()})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following points is not a vertex of the feasible region of the linear programming problem
                \\[\\begin{aligned} 
                    ${lp1} &\\leq 0\\\\
                    ${lp2} &\\leq 0\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;
      break;
    }
    case 2: {
      let obj = new Linear2();
      obj.randL(2, 10);
      let L1 = new Linear2();
      L1.randL(2, 10);
      L1.c = -L1.c;
      let L2 = new Linear2();
      L2.randL(2, 10);
      L2.c = -L2.c;
      let lp1 = L1.str();
      let lp2 = L2.str();
      let result = L1.solve(L2);
      let p1x = {
        x: new Q(-L1.c, L1.a),
        y: new Q()
      };
      let p1y = {
        x: new Q(),
        y: new Q(-L1.c, L1.b)
      };
      let p2x = {
        x: new Q(-L2.c, L2.a),
        y: new Q()
      };
      let p2y = {
        x: new Q(),
        y: new Q(-L2.c, L2.b)
      };
      let feasiblex, feasibley;
      if (p1x.x.value() < p2x.x.value()) {
        feasiblex = p1x;
      } else {
        feasiblex = p2x;
      }
      if (p1y.y.value() < p2y.y.value()) {
        feasibley = p1y;
      } else {
        feasibley = p2y;
      }
      let objValues = [
        obj.value(result.x, result.y),
        obj.value(feasiblex.x, feasiblex.y),
        obj.value(feasibley.x, feasibley.y),
        obj.value(new Q(), new Q())
      ];
      objValues = objValues.sort((a, b) => (typeof a === "number" ? a : a.value()) - (typeof b === "number" ? b : b.value()));
      objValues[1].reduced();
      objValues[2].reduced();
      objValues[3].reduced();
      values[0] = `\\(${objValues[3].str()}\\)`;
      values[1] = `\\(${objValues[3].add(new Q(1, 1)).str()}\\)`;
      values[2] = `\\(${objValues[2].str()}\\)`;
      values[3] = `\\(${objValues[1].str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Maximize \\(${obj.str()}\\) under
                \\[\\begin{aligned} 
                    ${lp1} &\\leq 0\\\\
                    ${lp2} &\\leq 0\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;
      break;
    }
    case 3: {
      let obj = new Linear2();
      obj.randL(2, 10);
      let L1 = new Linear2();
      L1.randL(2, 10);
      L1.c = -L1.c;
      let L2 = new Linear2();
      L2.randL(2, 10);
      L2.c = -L2.c;
      let lp1 = L1.str();
      let lp2 = L2.str();
      let result = L1.solve(L2);
      let p1x = {
        x: new Q(-L1.c, L1.a),
        y: new Q()
      };
      let p1y = {
        x: new Q(),
        y: new Q(-L1.c, L1.b)
      };
      let p2x = {
        x: new Q(-L2.c, L2.a),
        y: new Q()
      };
      let p2y = {
        x: new Q(),
        y: new Q(-L2.c, L2.b)
      };
      let feasiblex, feasibley;
      if (p1x.x.value() < p2x.x.value()) {
        feasiblex = p1x;
      } else {
        feasiblex = p2x;
      }
      if (p1y.y.value() < p2y.y.value()) {
        feasibley = p1y;
      } else {
        feasibley = p2y;
      }
      let objValues = [
        obj.value(result.x, result.y),
        obj.value(feasiblex.x, feasiblex.y),
        obj.value(feasibley.x, feasibley.y),
        obj.value(new Q(), new Q())
      ];
      objValues = objValues.sort((a, b) => (typeof a === "number" ? a : a.value()) - (typeof b === "number" ? b : b.value()));
      objValues[1].reduced();
      objValues[2].reduced();
      objValues[3].reduced();
      values[0] = `\\(${objValues[3].str()}\\)`;
      values[1] = `\\(${objValues[3].add(new Q(1, 1)).str()}\\)`;
      values[2] = `\\(${objValues[2].str()}\\)`;
      values[3] = `\\(${objValues[1].str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Maximize \\(${obj.str()}\\) under
                \\[\\begin{aligned} 
                    ${lp1} &\\leq 0\\\\
                    ${lp2} &\\leq 0\\\\
                    x &\\geq 0\\\\
                    y &\\geq 0
                    \\end{aligned}
                \\]`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  linear
};
