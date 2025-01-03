const randInt = (max, min, nonzero = false) => {
  if (min >= max) return Math.floor(max);
  let r, out;
  r = Math.random() * (max - min + 1);
  out = Math.floor(min + r);
  if (nonzero) {
    while (out === 0) {
      r = Math.random() * (max - min + 1);
      out = Math.floor(min + r);
    }
  }
  return out;
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
  if (k == 0) return [];
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
  temp.sort((a, b) => a - b);
  return temp;
};
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    var temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
};
const lcm = (a, b) => {
  return a * b / gcd(a, b);
};
const ithDigit = (n, i) => {
  let k = Math.floor(n / Math.pow(10, i - 1));
  return k - 10 * Math.floor(k / 10);
};
const digits = (n) => {
  if (n === 0) return [0];
  let d = [];
  let i = 0;
  while (Math.floor(n / Math.pow(10, i)) > 0) {
    d.push(ithDigit(n, i + 1));
    i++;
  }
  return d;
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
const setEqual = (s1, s2) => {
  return s1.size === s2.size && [...s1].every((x) => s2.has(x));
};
const permute = (arr) => {
  let result = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
};
const pythagoreanTriplet = (k = 100) => {
  let p, b, h;
  let m = randInt(k, 2);
  let n = randInt(m - 1, 1);
  p = m * m - n * n;
  b = 2 * m * n;
  h = m * m + n * n;
  return { p, b, h };
};
const directionRatios = (k = 10) => {
  let a, b, c, d;
  let m1 = randInt(k, 1);
  let m2 = randInt(k, 1);
  let m3 = randInt(k, 1);
  let m4 = randInt(k, 1);
  a = m1 * m1 + m2 * m2 - m3 * m3 - m4 * m4;
  b = 2 * (m1 * m4 + m2 * m3);
  c = 2 * (m2 * m4 - m1 * m3);
  d = m1 * m1 + m2 * m2 + m3 * m3 + m4 * m4;
  return { a, b, c, d };
};
const kparts = (n, k) => {
  if (k > n) return [];
  let parts = [];
  let budget = n;
  let remaining = k;
  parts.push(randInt(budget - remaining + 1, remaining - 1));
  for (let i = 1; i < k - 1; i++) {
    budget -= parts[i - 1];
    remaining--;
    parts.push(randInt(budget - remaining + 1, remaining - 1));
  }
  budget -= parts[k - 2];
  parts.push(budget);
  return parts;
};
export {
  randSubset as a,
  setEqual as b,
  directionRatios as c,
  digits as d,
  permute as e,
  gcd as g,
  kparts as k,
  lcm as l,
  pythagoreanTriplet as p,
  randInt as r,
  shuffle as s
};
