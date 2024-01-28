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
  temp.sort((a, b) => a - b);
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
export {
  randInt as a,
  randSubset as r,
  shuffle as s
};
