import { r as randInt } from "./common.js";
class Logic {
  constructor(operation, left = null, right = null) {
    this.operation = operation;
    this.left = left;
    this.right = right;
  }
  static randomExpression(depth, variables = []) {
    if (depth === 0) {
      if (variables.length > 0) {
        const variable = variables[Math.floor(Math.random() * variables.length)];
        return new Logic("VALUE", variable);
      } else {
        return new Logic("VALUE", Math.random() < 0.5);
      }
    }
    const operations = ["AND", "OR", "NOT", "IMPLIES"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    if (operation === "NOT") {
      return new Logic(operation, Logic.randomExpression(depth - 1, variables));
    } else {
      return new Logic(
        operation,
        Logic.randomExpression(depth - 1, variables),
        Logic.randomExpression(depth - 1, variables)
      );
    }
  }
  evaluate(variableValues = {}) {
    switch (this.operation) {
      case "IMPLIES":
        return !this.left.evaluate() || this.right.evaluate();
      case "AND":
        return this.left.evaluate() && this.right.evaluate();
      case "OR":
        return this.left.evaluate() || this.right.evaluate();
      case "NOT":
        return !this.left.evaluate();
      case "VALUE":
        return typeof this.left === "string" ? !!variableValues[this.left] : this.left;
      default:
        throw new Error("Invalid operation");
    }
  }
  isTautology(variableValues = {}) {
  }
  toLatex() {
    switch (this.operation) {
      case "IMPLIES":
        return `(${this.left.toLatex()} \\rightarrow ${this.right.toLatex()})`;
      case "AND":
        return `(${this.left.toLatex()} \\land ${this.right.toLatex()})`;
      case "OR":
        return `(${this.left.toLatex()} \\lor ${this.right.toLatex()})`;
      case "NOT":
        return `\\lnot ${this.left.toLatex()}`;
      case "VALUE":
        return typeof this.left === "string" ? this.left : this.left ? "True" : "False";
      default:
        throw new Error("Invalid operation");
    }
  }
  // Additional methods can be added here, such as toString, addLeft, addRight, etc.
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
const reasoning = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let m = randInt(100, 1);
      let n = randInt(m - 1, -m + 1);
      values[0] = `\\(x > ${m} ~~and~~ x < ${n} \\)`;
      values[1] = `\\(x > ${m} ~~and~~ x > ${n} \\)`;
      values[2] = `\\(x < ${m} ~~and~~ x < ${n} \\)`;
      values[3] = `\\(x < ${m} ~~and~~ x > ${n} \\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which statement is not true?`;
      break;
    }
    case 1: {
      let depth = randInt(3, 1);
      let variables = ["p", "q"];
      let expr = Logic.randomExpression(depth, variables);
      let p = Math.random() < 0.5;
      let q = Math.random() < 0.5;
      let value = expr.evaluate({ "p": p, "q": q });
      let str = expr.toLatex();
      values[0] = value;
      values[1] = !value;
      values[2] = "Neither true nor false";
      values[3] = "Can not be evaluated";
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Evaluate \\[${str}\\] when \\(p\\) is ${p} and \\(q\\) is ${q}`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  reasoning
};
