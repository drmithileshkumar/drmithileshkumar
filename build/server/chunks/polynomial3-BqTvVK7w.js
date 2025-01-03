import { Q } from './fraction-DfHHiAXd.js';
import { r as randInt } from './common-CIVVH1Lv.js';

class Polynomial {
  // {a: , r: }
  constructor(c = [], s = "x") {
    this.c = c;
    this.s = s;
  }
  degree() {
    let max = 0;
    for (let i = 0; i < this.c.length; i++) {
      if (this.c[i].a instanceof Q) {
        if (this.c[i].r > max && !this.c[i].a.isZero()) {
          max = this.c[i].r;
        }
      } else if (this.c[i].r > max && this.c[i].a !== 0) {
        max = this.c[i].r;
      }
    }
    return max;
  }
  leadingTerm() {
    let d = this.degree();
    for (let i = 0; i < this.c.length; i++) {
      if (this.c[i].r === d) return i;
    }
  }
  coefficient(i) {
    for (let j = 0; j < this.c.length; j++) {
      if (this.c[j].r == i) return this.c[j].a;
    }
    return 0;
  }
  sortPower() {
    this.c.sort((t1, t2) => t1.r - t2.r);
  }
  sortReverse() {
    this.c.sort((t1, t2) => t2.r - t1.r);
  }
  isZero() {
    for (let term of this.c) {
      if (term.a instanceof Q) {
        if (!term.a.isZero()) return false;
      } else {
        if (term.a !== 0) return false;
      }
    }
    return true;
  }
  term(i) {
    let type = this.c[i].a instanceof Q ? 0 : 1;
    if (this.c[i].r == 0) return this.c[i].a > 0 ? "+" + this.c[i].a : this.c[i].a === 0 ? "" : this.c[i].a;
    let coef = "";
    if (type == 1) {
      if (i == 0) {
        coef = this.c[i].a == 1 ? "" : this.c[i].a == -1 ? "-" : this.c[i].a;
      } else {
        coef = this.c[i].a == 1 ? "+" : this.c[i].a == -1 ? "-" : this.c[i].a > 0 ? "+" + this.c[i].a : this.c[i].a;
      }
      if (this.c[i].r == 1) return this.c[i].a == 0 ? "" : coef + this.s;
      return this.c[i].a == 0 ? "" : coef + this.s + "^{" + this.c[i].r + "}";
    }
    if (type == 0) {
      let one = new Q(1, 1);
      let mone = new Q(-1, 1);
      if (i == 0) {
        coef = this.c[i].a.equal(one) ? "" : this.c[i].a.equal(mone) ? "-" : this.c[i].a.str();
      } else {
        coef = this.c[i].a.equal(one) ? "+" : this.c[i].a.equal(mone) ? "-" : this.c[i].a.isGZero() ? "+" + this.c[i].a.str() : "-" + this.c[i].a.scale(-1).str();
      }
      if (this.c[i].r == 1) return this.c[i].a.isZero() ? "" : coef + this.s;
      return this.c[i].a.isZero() ? "" : coef + this.s + "^{" + this.c[i].r + "}";
    }
  }
  str() {
    let text = "";
    if (this.c[0].a instanceof Q) {
      if (this.c.length == 1 && this.c[0].a.isZero()) return text + this.c[0].a.str();
      text = this.c[0].r == 0 ? this.c[0].a.isZero() ? "" : this.c[0].a.str() : this.term(0);
    } else {
      if (this.c.length == 1 && this.c[0].a == 0) return text + this.c[0].a;
      text = this.c[0].r == 0 ? this.c[0].a == 0 ? "" : this.c[0].a : this.term(0);
    }
    for (let i = 1; i < this.c.length; i++) {
      text += this.term(i);
    }
    return text;
  }
  scale(k) {
    let scaled;
    if (k == 0) return new Polynomial([{ a: 0, r: 0 }]);
    scaled = new Polynomial();
    for (let term of this.c) {
      if (term.a instanceof Q) {
        scaled.c.push({ a: term.a.scale(k), r: term.r });
      } else {
        scaled.c.push({ a: k * term.a, r: term.r });
      }
    }
    return scaled;
  }
  add(p) {
    this.sortPower();
    p.sortPower();
    let sum, i, j;
    if (this.c.length == 0) return p;
    if (p.c.length == 0) return this;
    sum = new Polynomial();
    i = 0;
    j = 0;
    while (i < this.c.length || j < p.c.length) {
      if (j >= p.c.length && i < this.c.length || i < this.c.length && j < p.c.length && this.c[i].r < p.c[j].r) {
        sum.c.push(this.c[i]);
        i++;
      } else if (i >= this.c.length && j < p.c.length || i < this.c.length && j < p.c.length && this.c[i].r > p.c[j].r) {
        sum.c.push(p.c[j]);
        j++;
      } else if (i < this.c.length && j < p.c.length && this.c[i].r == p.c[j].r) {
        if (this.c[i].a instanceof Q) {
          if (p.c[j].a instanceof Q) {
            sum.c.push({ a: this.c[i].a.add(p.c[j].a), r: this.c[i].r });
          } else {
            sum.c.push({ a: this.c[i].a.add(new Q(p.c[j].a)), r: this.c[i].r });
          }
        } else {
          if (p.c[j].a instanceof Q) {
            let temp = new Q(this.c[i].a);
            sum.c.push({ a: temp.add(p.c[j].a), r: this.c[i].r });
          } else {
            sum.c.push({ a: this.c[i].a + p.c[j].a, r: this.c[i].r });
          }
        }
        i++;
        j++;
      }
    }
    return sum;
  }
  sub(p) {
    let q = p.scale(-1);
    return this.add(q);
  }
  multerm(t) {
    let pro = new Polynomial();
    for (let term of this.c) {
      if (term.a instanceof Q) {
        pro.c.push({ a: t.a.mul(term.a), r: term.r + t.r });
      } else {
        pro.c.push({ a: t.a * term.a, r: term.r + t.r });
      }
    }
    return pro;
  }
  mul(p) {
    if (this.c.length == 1 && this.c[0].r == 0) return p.scale(this.c[0].a);
    let product = new Polynomial([{ a: 0, r: 0 }], this.s);
    for (let pterm of p.c) {
      product = product.add(this.multerm(pterm));
    }
    return product;
  }
  //Todo implement division
  div(q, r, p) {
    let d = r.degree();
    let dp = p.degree();
    if (d < dp) return { q, r };
    let qt, rt;
    let k = r.leadingTerm();
    let l = p.leadingTerm();
    let factor = r.c[k].a.div(p.c[l].a);
    qt = new Polynomial([{
      a: factor,
      r: r.c[k].r - p.c[l].r
    }]);
    q = q.add(qt);
    let toAdd = p.mul(qt).scale(-1);
    rt = r.add(toAdd);
    return rt.div(q, rt, p);
  }
  value(k) {
    let val = 0;
    let fval = new Q();
    let fr = false;
    for (let term of this.c) {
      if (term.a instanceof Q) {
        fr = true;
        let tk = Math.pow(k, term.r);
        fval = fval.add(term.a.scale(tk));
      } else {
        val += term.a * Math.pow(k, term.r);
      }
    }
    return fr ? fval : val;
  }
  derivative(n = 1) {
    if (n <= 0) return this;
    if (this.c.length == 1 && this.c[0].r == 0) return new Polynomial([{ a: 0, r: 0 }]);
    let pdash = new Polynomial([], this.s);
    for (let term of this.c) {
      if (term.r >= 1) {
        if (term.a instanceof Q) {
          pdash.c.push({ a: term.a.scale(term.r), r: term.r - 1 });
        } else {
          pdash.c.push({ a: term.a * term.r, r: term.r - 1 });
        }
      }
    }
    return pdash.derivative(n - 1);
  }
  integrate() {
    if (this.c.length == 1 && this.c[0].r == 0) return new Polynomial([{ a: 0, r: 0 }]);
    let pint = new Polynomial([], this.s);
    for (let term of this.c) {
      if (term.a instanceof Q) {
        pint.c.push({ a: term.a.mul(new Q(1, term.r + 1)), r: term.r + 1 });
      } else {
        let f = new Q(term.a, term.r + 1);
        f.reduced();
        pint.c.push({ a: f, r: term.r + 1 });
      }
    }
    return pint;
  }
  dintegrate(a, b) {
    let p = this.integrate();
    let v1 = p.value(b);
    let v2 = p.value(a);
    let fv1, fv2;
    fv1 = v1 instanceof Q ? v1 : new Q(v1);
    fv2 = v2 instanceof Q ? v2 : new Q(v2);
    return fv1.sub(fv2);
  }
  pert(t) {
    let p = new Polynomial();
    let changed = false;
    for (let term of this.c) {
      if (term.r == t.r) {
        p.c.push({ a: t.a, r: term.r });
        changed = true;
      } else {
        p.c.push(term);
      }
    }
    if (!changed) {
      p.c.push(t);
      p.sortPower();
    }
    return p;
  }
  perturb() {
    let index = randInt(this.c.length - 1, 0);
    let r = Math.random();
    if (r < 0.5) {
      this.c[index].a++;
    } else {
      this.c[index].r++;
    }
  }
  randomPerturb() {
    let index = randInt(this.c.length - 1, 0);
    let p = new Polynomial([], this.s);
    for (let i = 0; i < this.c.length; i++) {
      if (i === index) {
        p.c.push({ a: this.c[i].a + randInt(10, -10, true), r: this.c[i].r });
      } else {
        p.c.push({ a: this.c[i].a, r: this.c[i].r });
      }
    }
    return p;
  }
  randPoly(n = 4, max = 5, min = -5) {
    this.c = [];
    let ri;
    for (let i = 0; i < n; i++) {
      ri = randInt(max, min);
      this.c.push({ a: ri, r: i });
    }
    this.c.push({ a: randInt(max, 1), r: n });
  }
  fromRoots(roots) {
    let product = new Polynomial([{ a: 1, r: 0 }], this.s);
    for (let i = 0; i < roots.length; i++) {
      let newPoly = new Polynomial([{ a: 1, r: 1 }, { a: -roots[i], r: 0 }], this.s);
      product = product.mul(newPoly);
    }
    return product;
  }
  simplify() {
    let newPoly = new Polynomial([], this.s);
    for (let i = 0; i < this.c.length; i++) {
      newPoly = newPoly.add(new Polynomial([this.c[i]], this.s));
    }
    return newPoly;
  }
  rootRelations() {
    let newPoly = this.simplify();
    let rels = [];
    newPoly.sortReverse();
    let deg = newPoly.degree();
    for (let i = 1; i <= deg; i++) {
      if (newPoly.c[i].r < deg - i) {
        rels.push(new Q(0, 1));
      } else {
        rels.push(new Q(Math.pow(-1, i) * newPoly.c[i].a, newPoly.c[0].a));
      }
    }
    return rels;
  }
  roots() {
    let d = this.degree();
    let rs = [];
    switch (d) {
      case 0: {
        break;
      }
      case 1: {
        let l = new Q(-this.coefficient(0), this.coefficient(1));
        l.reduced();
        rs = [l];
        break;
      }
    }
    return rs;
  }
}

export { Polynomial as P };
//# sourceMappingURL=polynomial3-BqTvVK7w.js.map
