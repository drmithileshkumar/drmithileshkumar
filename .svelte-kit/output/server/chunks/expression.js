import { S as Sets } from "./sets.js";
import { r as randInt, b as setEqual, g as gcd } from "./common.js";
class Expr {
  // natural radicals
  constructor(terms = []) {
    this.terms = terms;
  }
  cloneTerm(term) {
    let newTerm = {};
    let vars = Object.keys(term);
    for (let i = 0; i < vars.length; i++) {
      newTerm[vars[i]] = term[vars[i]];
    }
    return term;
  }
  clone() {
    let newExpr = new Expr();
    newExpr.terms = [];
    for (let i = 0; i < this.terms.length; i++) {
      newExpr.terms.push(JSON.parse(JSON.stringify(this.terms[i])));
    }
    return newExpr;
  }
  coefficients() {
    let coef = [];
    for (let i = 0; i < this.terms.length; i++) {
      if (this.terms[i].constant !== 0) {
        coef.push(this.terms[i].constant);
      }
    }
    if (this.terms.length === 1) {
      if (this.terms[0].constant === 0) coef = [0];
    }
    return coef;
  }
  randomTerm(v = ["x"], c = 10, p = 10, r = -1) {
    let term = {};
    let variables = [];
    if (r === -1) {
      variables = v;
    } else {
      let varSet = new Sets(v);
      variables = varSet.krandomSubset(r).e;
    }
    for (let i = 0; i < variables.length; i++) {
      term[variables[i]] = randInt(p, 1);
      term["constant"] = randInt(c, -c);
      if (term["constant"] === 0) term["constant"] = 1;
    }
    return term;
  }
  perturb(delta = 1) {
    let rterm = randInt(this.terms.length - 1, 0);
    let vars = Object.keys(this.terms[rterm]);
    let rvar = randInt(vars.length - 1, 0);
    let newexpr = this.clone();
    newexpr.terms[rterm][vars[rvar]] += delta;
    return newexpr;
  }
  isLike(term1, term2) {
    let k1 = Object.keys(term1);
    let s1 = new Set(k1);
    let k2 = Object.keys(term2);
    let s2 = new Set(k2);
    if (setEqual(s1, s2)) {
      if (k1.length === 1 && k1[0] === "constant") return true;
      for (let i = 0; i < k1.length; i++) {
        if (k1[i] !== "constant" && term1[k1[i]] !== term2[k1[i]]) return false;
      }
      return true;
    } else {
      return false;
    }
  }
  randomE(n = 1, v = ["x"], c = 10, p = 10, r = -1) {
    this.terms = [];
    for (let j = 0; j < n; j++) {
      let term = this.randomTerm(v, c, p, r);
      this.terms.push(term);
    }
  }
  addTerm(term) {
    if (this.terms.length === 0) return new Expr([term]);
    let newexpr = this.clone();
    let added = false;
    for (let i = 0; i < newexpr.terms.length; i++) {
      if (!added && newexpr.isLike(newexpr.terms[i], term)) {
        newexpr.terms[i].constant += term.constant;
        added = true;
      }
    }
    if (!added) {
      newexpr.terms.push(term);
    }
    return newexpr;
  }
  mulTerm(term) {
    let newexp = new Expr();
    for (let i = 0; i < this.terms.length; i++) {
      let newterm = {};
      newterm.constant = this.terms[i].constant * term.constant;
      let variables = Object.keys(this.terms[i]);
      let varterm = Object.keys(term);
      let seti = new Sets(variables);
      let sett = new Sets(varterm);
      let varall = seti.union(sett);
      for (let j = 0; j < varall.e.length; j++) {
        if (varall.e[j] !== "constant") {
          if (this.terms[i][varall.e[j]] && term[varall.e[j]]) {
            newterm[varall.e[j]] = this.terms[i][varall.e[j]] + term[varall.e[j]];
          } else {
            if (!this.terms[i][varall.e[j]]) {
              newterm[varall.e[j]] = term[varall.e[j]];
            }
            if (!this.terms[varall.e[j]]) {
              newterm[varall.e[j]] = this.terms[i][varall.e[j]];
            }
          }
        }
      }
      newexp.terms.push(newterm);
    }
    return newexp;
  }
  add(exp) {
    let newexpr = this.clone();
    for (let i = 0; i < exp.terms.length; i++) {
      newexpr = newexpr.addTerm(exp.terms[i]);
    }
    return newexpr;
  }
  sub(exp) {
    let newexpr = exp.clone();
    for (let i = 0; i < newexpr.terms.length; i++) {
      newexpr.terms[i].constant = -exp.terms[i].constant;
    }
    return this.add(newexpr);
  }
  mul(exp) {
    let product = new Expr();
    for (let i = 0; i < exp.terms.length; i++) {
      let newexp = this.mulTerm(exp.terms[i]);
      product = product.add(newexp);
    }
    return product;
  }
  termStr(index) {
    let term = this.terms[index];
    let str = "";
    if (Object.keys(term).length === 0) return "";
    if (term.constant === 0) {
      return "0";
    }
    let variables = Object.keys(term);
    for (let i = 0; i < variables.length; i++) {
      if (variables[i] !== "constant")
        str += term[variables[i]] === 0 ? "" : term[variables[i]] === 1 ? variables[i] : variables[i] + "^{" + term[variables[i]] + "}";
    }
    if (term.constant === 1) {
      if (str.length === 0) {
        str = "1";
      }
    } else if (term.constant === -1) {
      if (str.length === 0) {
        str = "-1";
      } else {
        str = "-" + str;
      }
    } else {
      str = term.constant + str;
    }
    return str;
  }
  str() {
    let str = "";
    let tstr = "";
    if (this.terms.length == 0) return "";
    str = this.termStr(0);
    if (str === "0" && this.terms.length > 1) str = "";
    for (let i = 1; i < this.terms.length; i++) {
      tstr = this.termStr(i);
      if (tstr === "0") {
        if (str.length === 0) {
          str = "0";
        }
      } else if (tstr[0] === "-") {
        str += tstr;
      } else {
        str += "+" + tstr;
      }
    }
    return str;
  }
  integerDivTermByTerm(term1, term2) {
    let term = {};
    if (!term2.constant || term2.constant === 0) return "undefined";
    term.constant = term1.constant % term2.constant === 0 ? term1.constant / term2.constant : "undefined";
    let vars1 = Object.keys(term1);
    for (let i = 0; i < vars1.length; i++) {
      if (vars1[i] !== "constant") {
        term[vars1[i]] = term1[vars1[i]];
      }
    }
    let vars = Object.keys(term2);
    for (let i = 0; i < vars.length; i++) {
      if (vars[i] !== "constant") {
        term[vars[i]] = term[vars[i]] ? term[vars[i]] - term2[vars[i]] : term2[vars[i]];
      }
    }
    return term;
  }
  integerDivTerm(term) {
    let newExpr = new Expr();
    for (let i = 0; i < this.terms.length; i++) {
      let newTerm = this.integerDivTermByTerm(this.terms[i], term);
      if (newTerm === "undefined") return "undefined";
      newExpr.terms.push(newTerm);
    }
    return newExpr;
  }
  commonTerm() {
    let term = {};
    let hasvar = true;
    let constants = this.terms.map((ter) => ter.constant);
    term.constant = constants.reduce((l, a) => gcd(l, a), constants[0]);
    let vars = Object.keys(this.terms[0]);
    for (let i = 0; i < vars.length; i++) {
      if (vars[i] !== "constant") {
        hasvar = true;
        let min = this.terms[0][vars[i]];
        for (let j = 0; j < this.terms.length; j++) {
          if (!this.terms[j][vars[i]]) {
            hasvar = false;
            break;
          }
          if (min > this.terms[j][vars[i]]) {
            min = this.terms[j][vars[i]];
          }
        }
        if (hasvar && min !== 0) {
          term[vars[i]] = min;
        }
      }
    }
    return term;
  }
  simplify() {
    let newExpr = new Expr();
    newExpr.terms = [];
    for (let i = 0; i < this.terms.length; i++) {
      newExpr = newExpr.addTerm(this.terms[i]);
    }
    return newExpr;
  }
  factorise() {
    if (this.terms.length <= 1) return [this];
    this.commonTerm();
  }
  termValue(term, vals) {
    let vars = Object.keys(vals);
    let product = term.constant;
    for (let i = 0; i < vars.length; i++) {
      product *= Math.pow(vals[vars[i]], term[vars[i]]);
    }
    return product;
  }
  value(vals) {
    let result = 0;
    for (let i = 0; i < this.terms.length; i++) {
      result += this.termValue(this.terms[i], vals);
    }
    return result;
  }
}
export {
  Expr as E
};
