import { E as Expr } from './expression-C5JXZeRb.js';
import './sets-jGIduNNd.js';
import './common-CIVVH1Lv.js';

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
const factorization = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let expr1 = new Expr();
      expr1.randomE(1, ["x", "y", "z"]);
      let expr2 = new Expr();
      expr2.randomE(2, ["x", "y", "z"]);
      let commonTerm = expr2.commonTerm();
      let product = expr1.mul(expr2);
      let factor1 = expr1.mulTerm(commonTerm);
      let factor2 = expr2.integerDivTerm(commonTerm);
      values[0] = factor1.str() + "(" + factor2.str() + ")";
      values[1] = factor1.perturb(1).str() + "(" + factor2.str() + ")";
      values[2] = factor1.str() + "(" + factor2.perturb(1).str() + ")";
      values[3] = factor1.perturb(1).str() + "(" + factor2.perturb(1).str() + ")";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(" + values[i] + "\\)";
      }
      problemset.s = `Factorize \\(${product.str()}\\)`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { factorization };
//# sourceMappingURL=factorization-B7xXpEs6.js.map
