import { a as randSubset, s as shuffle, r as randInt } from './common-f376ad5d.js';

const powerset = (n) => {
  let set = [];
  for (let i = 0; i < Math.pow(2, n); i++) {
    set.push(i.toString(2));
  }
  set = set.map((item) => zeroStr(n - item.length) + item);
  return set;
};
class Sets {
  constructor(e = [], eq = "", strElem = "") {
    this.e = e;
    this.eq = eq;
    this.strElem = strElem;
  }
  elemEq(a, b) {
    if (this.eq == "")
      return a === b;
    return this.eq(a, b);
  }
  texElem(a) {
    if (this.strElem == "")
      return `${a}`;
    return this.strElem(a);
  }
  contains(k) {
    if (this.eq == "") {
      for (let a of this.e) {
        if (a === k)
          return true;
      }
      return false;
    } else {
      for (let a of this.e) {
        if (this.eq(a, k))
          return true;
      }
      return false;
    }
  }
  equal(B) {
    for (let a of this.e) {
      if (!B.contains(a))
        return false;
    }
    for (let b of B.e) {
      if (!this.contains(b))
        return false;
    }
    return true;
  }
  subsetOf(B) {
    for (let a of this.e) {
      if (!B.contains(a))
        return false;
    }
    return true;
  }
  supersetOf(B) {
    return B.subsetOf(this);
  }
  add(k) {
    let newSet = new Sets([], this.eq, this.strElem);
    newSet.e = this.e;
    let index = Math.floor(Math.random() * this.e.length);
    if (!this.contains(k))
      newSet.e.splice(index, 0, k);
    return newSet;
  }
  delete(k) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a of this.e) {
      if (!this.elemEq(a, k))
        newSet.e.push(a);
    }
    return newSet;
  }
  union(B) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a of this.e) {
      newSet.e.push(a);
    }
    for (let b of B.e) {
      if (!this.contains(b))
        newSet.e.push(b);
    }
    return newSet;
  }
  intersection(B) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a of this.e) {
      if (B.contains(a))
        newSet.e.push(a);
    }
    return newSet;
  }
  diff(B) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a of this.e) {
      if (!B.contains(a))
        newSet.e.push(a);
    }
    return newSet;
  }
  c(U) {
    return U.diff(this);
  }
  interval(min, max) {
    for (let i = min; i <= max; i++) {
      this.e.push(i);
    }
  }
  pickWithout(arr) {
    let n = arr.length;
    let k = randInt(n - 1, 0);
    let elem = arr[k];
    arr.splice(k, 1);
    return { newArr: arr, elem };
  }
  krandomIndices(n, k) {
    let set = [];
    if (k == 0)
      return [];
    if (k >= n) {
      for (let i = 0; i < n; i++) {
        set.push(i);
      }
      return set;
    }
    for (let i = 0; i < n; i++) {
      set.push(i);
    }
    let temp = [];
    let t;
    for (let i = 0; i < k; i++) {
      t = this.pickWithout(set);
      set = t.newArr;
      temp.push(t.elem);
    }
    temp.sort((a, b) => a - b);
    return temp;
  }
  randomSet(min, max, k) {
    if (max - min < k)
      this.e = [];
    let A = [];
    for (let i = min; i <= max; i++) {
      A.push(i);
    }
    let subsetIndices = this.krandomIndices(A.length, k);
    for (let i = 0; i < k; i++) {
      this.e.push(A[subsetIndices[i]]);
    }
  }
  randomSubset() {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a of this.e) {
      if (Math.random() < 0.5) {
        newSet.e.push(a);
      }
    }
    return newSet;
  }
  krandomSubset(k) {
    let newSet = new Sets([], this.eq, this.strElem);
    if (this.e.length == 0)
      return newSet;
    let n = this.e.length;
    let subsetIndices = randSubset(n, k);
    newSet.e = subsetIndices.map((index) => this.e[index]);
    return newSet;
  }
  randomElem() {
    let k = Math.floor(Math.random() * this.e.length);
    return this.e[k];
  }
  ksubArray(arr, k) {
    if (arr.length == 0)
      return [];
    let n = arr.length;
    let subsetIndices = randSubset(n, k);
    let subset = subsetIndices.map((index) => arr[index]);
    return subset;
  }
  powerSet() {
    let set = powerset(this.e.length);
    let seteq = (A, B) => {
      for (let a of A) {
        if (!B.contains(a))
          return false;
      }
      for (let b of B) {
        if (!A.contains(b))
          return false;
      }
      return true;
    };
    let stringElem = (A) => {
      return A.str();
    };
    let newSet = new Sets([], seteq, stringElem);
    let temp;
    for (let s of set) {
      temp = new Sets([], this.eq, this.strElem);
      for (let i = 0; i < this.e.length; i++) {
        if (s[i] !== "0")
          temp.e.push(this.e[i]);
      }
      newSet.e.push(temp);
    }
    return newSet;
  }
  cartesian(B) {
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && B.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + B.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a of this.e) {
      for (let b of B.e) {
        R.e.push([a, b]);
      }
    }
    return R;
  }
  dot(B) {
    if (this.e.length != B.e.length)
      return new Sets();
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && B.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + B.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let i = 0; i < this.e.length; i++) {
      R.e.push([this.e[i], B.e[i]]);
    }
    return R;
  }
  str() {
    let tex;
    if (this.e.length == 0)
      return "\\varphi";
    if (this.strElem === "") {
      tex = "\\{";
      for (let i = 0; i < this.e.length - 1; i++) {
        if (typeof this.e[i] === "number") {
          tex = tex + this.e[i] + ", ";
        } else if (typeof this.e[i] === "string") {
          tex = tex + this.e[i] + ", ";
        } else {
          tex = tex + this.e[i].str() + ", ";
        }
      }
      if (typeof this.e[this.e.length - 1] === "number") {
        tex = tex + this.e[this.e.length - 1];
      } else if (typeof this.e[this.e.length - 1] === "string") {
        tex = tex + this.e[this.e.length - 1];
      } else {
        tex = tex + this.e[this.e.length - 1].str();
      }
      tex = tex + "\\}";
      return tex;
    } else {
      tex = "\\{";
      for (let i = 0; i < this.e.length - 1; i++) {
        tex = tex + this.strElem(this.e[i]) + ", ";
      }
      tex = tex + this.strElem(this.e[this.e.length - 1]) + "\\}";
      return tex;
    }
  }
  isReflexive(R) {
    for (let a of this.e) {
      if (!R.contains([a, a]))
        return false;
    }
    return true;
  }
  isSymmetric(R) {
    for (let r of R.e) {
      if (!R.contains([r[1], r[0]]))
        return false;
    }
    return true;
  }
  isTransitive(R) {
    let temp;
    for (let r of R) {
      temp = R.e.filter((a) => this.elemEq(r[1], a[0]));
      for (let t of temp) {
        if (!R.contains([r[0], t[1]]))
          return false;
      }
    }
    return true;
  }
  reflexive(k) {
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && this.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + this.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a of this.e) {
      R.add([a, a]);
    }
    return R;
  }
  symmetric(k) {
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && this.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + this.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    let self = new Sets(this.e, this.eq, this.strElem);
    let power = this.cartesian(self);
    let half = this.ksubArray(power.e, Math.floor(k / 2));
    for (let r of half) {
      R.add(r);
      R.add([r[1], r[0]]);
    }
    return R;
  }
  transitive(k) {
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && this.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + this.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    let self = new Sets(this.e, this.eq, this.strElem);
    let power = this.cartesian(self);
    let half = this.ksubArray(power.e, Math.floor(k / 2));
    let temp;
    for (let r of half) {
      R.add(r);
      temp = half.filter((a) => this.elemEq(r[1], a[0]));
      for (let t of temp) {
        R.add([r[0], t[1]]);
      }
    }
    return R;
  }
  image(k, R, B = this) {
    if (R.e.length == 0)
      return new Sets([], B.eq, B.strElem);
    let subSetB = new Sets([], B.eq, B.strElem);
    for (let r of R.e) {
      if (this.elemEq(r[0], k))
        subSetB.e.push(r[1]);
    }
    return subSetB;
  }
  preimage(k, R, B = this) {
    if (R.e.length == 0)
      return new Sets([], this.eq, this.strElem);
    let subSet = new Sets([], this.eq, this.strElem);
    for (let r of R.e) {
      if (B.elemEq(r[1], k))
        subSet.e.push(r[0]);
    }
    return subSet;
  }
  randFunction(B = this) {
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && B.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + B.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a of this.e) {
      let b = B.e[Math.floor(Math.random() * B.e.length)];
      R.e.push([a, b]);
    }
    return R;
  }
  Identity() {
    return this.reflexive();
  }
  constant(k, B = this) {
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && B.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + B.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a of this.e) {
      R.e.push([a, k]);
    }
    return R;
  }
  randOneOne(B = this) {
    if (this.e.length > B.e.length)
      return new Sets();
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && B.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + B.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    B.e = shuffle(B.e);
    let i = 0;
    for (let a of this.e) {
      R.e.push([a, B.e[i]]);
      i++;
    }
    return R;
  }
  randOnto(B = this) {
    if (this.e.length < B.e.length)
      return new Sets();
    let pairEq = (a, b) => {
      if (a.length !== b.length)
        return false;
      return this.elemEq(a[0], b[0]) && B.elemEq(a[1], b[1]);
    };
    let stringElem = (a) => {
      return "(" + this.texElem(a[0]) + "," + B.texElem(a[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    let shuffleThis = shuffle(this.e);
    for (let i = 0; i < B.e.length; i++) {
      R.e.push([shuffleThis[i], B.e[i]]);
    }
    for (let j = B.e.length; j < this.e.length; j++) {
      R.e.push([this.e[j], B.e[Math.floor(Math.random() * B.e.length)]]);
    }
    return R;
  }
  randBijective(B = this) {
    if (this.e.length === B.e.length)
      return this.randOneOne(B);
    return new Sets();
  }
  isFunction(R, B = this) {
    if (R.e.length !== this.e.length)
      return false;
    for (let a of this.e) {
      if (this.image(a, R, B).e.length == 0)
        return false;
    }
    return true;
  }
  isIdentity(R) {
    for (let a of this.e) {
      if (!R.contains([[a, a]]))
        return false;
    }
    for (let r of R.e) {
      if (!this.elemEq(r[0], r[1]))
        return false;
    }
    return true;
  }
  isConstant(R, B = this) {
    if (R.e.length == 0)
      return false;
    let k = R.e[0][1];
    if (!this.isFunction(R, B))
      return false;
    for (let r of R) {
      if (!B.elemEq(r[1], k))
        return false;
    }
    return true;
  }
  isOneOne(R, B = this) {
    if (!this.isFunction(R, B))
      return false;
    for (let b of B.e) {
      if (this.preimage(b, R, B).e.length > 1)
        return false;
    }
    return true;
  }
  isOnto(R, B = this) {
    if (!this.isFunction(R, B))
      return false;
    for (let b of B.e) {
      if (this.preimage(b, R, B).e.length < 1)
        return false;
    }
    return true;
  }
  isBijective(R, B = this) {
    return this.isOneOne(R, B) && this.isOnto(R, B);
  }
}

export { Sets as S, powerset as p };
//# sourceMappingURL=sets-0db60418.js.map
