const randInt = (max, min) => {
  if (min >= max)
    return Math.floor(max);
  let r = Math.random() * (max - min + 1);
  return Math.floor(min + r);
};
const pickWithout = (arr) => {
  let n = arr.length;
  let k = randInt(n - 1, 0);
  let elem = arr[k];
  arr.splice(k, 1);
  return { newArr: arr, elem };
};
const randSubset = (n, k) => {
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
    t = pickWithout(set);
    set = t.newArr;
    temp.push(t.elem);
  }
  temp.sort((a2, b2) => a2 - b2);
  return temp;
};
const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
};
class Quadratic {
  constructor(a2 = 0, b2 = 0, c = 0, x = "x") {
    this.a = a2;
    this.b = b2;
    this.c = c;
    this.x = x;
  }
  rand(min, max) {
    while (this.a === 0 && this.b === 0) {
      this.a = randInt(max, min);
      this.b = randInt(max, min);
    }
    this.c = randInt(max, min);
  }
  real(min, max) {
    let r1 = randInt(max, min);
    let r2 = randInt(max, min);
    this.a = 1;
    this.b = -(r1 + r2);
    this.c = r1 * r2;
  }
  complex(min, max) {
    let r = randInt(max, min);
    let i = randInt(max, min);
    this.a = 1;
    this.b = -2 * r;
    this.c = r * r + i * i;
  }
  str() {
    let eq = "";
    if (this.a != 0 || this.b != 0 || this.c != 0) {
      if (this.a != 0) {
        eq += this.a == 1 ? `${this.x}^2` : this.a == -1 ? `-${this.x}^2` : `${this.a}${this.x}^2`;
      }
      if (this.b != 0) {
        if (eq.length > 0)
          eq += this.b == 1 ? `+${this.x}` : this.b == -1 ? `-${this.x}` : this.b < 0 ? `${this.b}${this.x}` : `+${this.b}${this.x}`;
        if (eq.length == 0)
          eq += this.b == 1 ? `${this.x}` : this.b == -1 ? `-${this.x}` : `${this.b}${this.x}`;
      }
      if (this.c != 0) {
        if (eq.length > 0)
          eq += this.c > 0 ? `+${this.c}` : `${this.c}`;
        if (eq.length == 0)
          eq += this.c;
      }
      return eq;
    } else {
      return 0;
    }
  }
  d() {
    return this.b * this.b - 4 * this.a * this.c;
  }
  hasRealRoots() {
    return this.d() >= 0;
  }
  hasEqualRoots() {
    return this.d() === 0;
  }
  value(x) {
    return this.a * x * x + this.b * x + this.c;
  }
  realRoots() {
    if (a === 0) {
      if (b === 0)
        return [];
      return [-this.c / this.b];
    }
    if (!this.hasRealRoots())
      return [];
    else {
      if (this.hasEqualRoots()) {
        return [-this.b / (2 * this.a)];
      } else {
        let sd = Math.sqrt(this.d());
        return [(-this.b + sd) / (2 * this.a), (-this.b - sd) / (2 * this.a)];
      }
    }
  }
}

export { Quadratic as Q, randSubset as a, randInt as r, shuffle as s };
//# sourceMappingURL=quadratic-f5a3f4cf.js.map
