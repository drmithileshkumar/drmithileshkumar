import { c as create_ssr_component, p as compute_rest_props, d as subscribe, e as escape, f as add_attribute, v as validate_component } from "../../../../../../chunks/index.js";
import { b as presentationMode, c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentation } from "../../../../../../chunks/stores2.js";
import { P as Practice } from "../../../../../../chunks/Practice.js";
/* empty css                                                              */import { p as page } from "../../../../../../chunks/stores.js";
import { I as Item, P, a as Image, L as Li } from "../../../../../../chunks/Image.js";
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
  elemEq(a2, b2) {
    if (this.eq == "")
      return a2 === b2;
    return this.eq(a2, b2);
  }
  texElem(a2) {
    if (this.strElem == "")
      return `${a2}`;
    return this.strElem(a2);
  }
  contains(k) {
    if (this.eq == "") {
      for (let a2 of this.e) {
        if (a2 === k)
          return true;
      }
      return false;
    } else {
      for (let a2 of this.e) {
        if (this.eq(a2, k))
          return true;
      }
      return false;
    }
  }
  equal(B) {
    for (let a2 of this.e) {
      if (!B.contains(a2))
        return false;
    }
    for (let b2 of B.e) {
      if (!this.contains(b2))
        return false;
    }
    return true;
  }
  subsetOf(B) {
    for (let a2 of this.e) {
      if (!B.contains(a2))
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
    for (let a2 of this.e) {
      if (!this.elemEq(a2, k))
        newSet.e.push(a2);
    }
    return newSet;
  }
  union(B) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a2 of this.e) {
      newSet.e.push(a2);
    }
    for (let b2 of B.e) {
      if (!this.contains(b2))
        newSet.e.push(b2);
    }
    return newSet;
  }
  intersection(B) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a2 of this.e) {
      if (B.contains(a2))
        newSet.e.push(a2);
    }
    return newSet;
  }
  diff(B) {
    let newSet = new Sets([], this.eq, this.strElem);
    for (let a2 of this.e) {
      if (!B.contains(a2))
        newSet.e.push(a2);
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
    temp.sort((a2, b2) => a2 - b2);
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
    for (let a2 of this.e) {
      if (Math.random() < 0.5) {
        newSet.e.push(a2);
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
      for (let a2 of A) {
        if (!B.contains(a2))
          return false;
      }
      for (let b2 of B) {
        if (!A.contains(b2))
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
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && B.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + B.texElem(a2[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a2 of this.e) {
      for (let b2 of B.e) {
        R.e.push([a2, b2]);
      }
    }
    return R;
  }
  dot(B) {
    if (this.e.length != B.e.length)
      return new Sets();
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && B.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + B.texElem(a2[1]) + ")";
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
        } else {
          tex = tex + this.e[i].str() + ", ";
        }
      }
      if (typeof this.e[this.e.length - 1] === "number") {
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
    for (let a2 of this.e) {
      if (!R.contains([a2, a2]))
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
      temp = R.e.filter((a2) => this.elemEq(r[1], a2[0]));
      for (let t of temp) {
        if (!R.contains([r[0], t[1]]))
          return false;
      }
    }
    return true;
  }
  reflexive(k) {
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && this.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + this.texElem(a2[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a2 of this.e) {
      R.add([a2, a2]);
    }
    return R;
  }
  symmetric(k) {
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && this.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + this.texElem(a2[1]) + ")";
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
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && this.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + this.texElem(a2[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    let self = new Sets(this.e, this.eq, this.strElem);
    let power = this.cartesian(self);
    let half = this.ksubArray(power.e, Math.floor(k / 2));
    let temp;
    for (let r of half) {
      R.add(r);
      temp = half.filter((a2) => this.elemEq(r[1], a2[0]));
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
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && B.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + B.texElem(a2[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a2 of this.e) {
      let b2 = B.e[Math.floor(Math.random() * B.e.length)];
      R.e.push([a2, b2]);
    }
    return R;
  }
  Identity() {
    return this.reflexive();
  }
  constant(k, B = this) {
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && B.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + B.texElem(a2[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    for (let a2 of this.e) {
      R.e.push([a2, k]);
    }
    return R;
  }
  randOneOne(B = this) {
    if (this.e.length > B.e.length)
      return new Sets();
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && B.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + B.texElem(a2[1]) + ")";
    };
    let R = new Sets([], pairEq, stringElem);
    B.e = shuffle(B.e);
    let i = 0;
    for (let a2 of this.e) {
      R.e.push([a2, B.e[i]]);
      i++;
    }
    return R;
  }
  randOnto(B = this) {
    if (this.e.length < B.e.length)
      return new Sets();
    let pairEq = (a2, b2) => {
      if (a2.length !== b2.length)
        return false;
      return this.elemEq(a2[0], b2[0]) && B.elemEq(a2[1], b2[1]);
    };
    let stringElem = (a2) => {
      return "(" + this.texElem(a2[0]) + "," + B.texElem(a2[1]) + ")";
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
    for (let a2 of this.e) {
      if (this.image(a2, R, B).e.length == 0)
        return false;
    }
    return true;
  }
  isIdentity(R) {
    for (let a2 of this.e) {
      if (!R.contains([[a2, a2]]))
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
    for (let b2 of B.e) {
      if (this.preimage(b2, R, B).e.length > 1)
        return false;
    }
    return true;
  }
  isOnto(R, B = this) {
    if (!this.isFunction(R, B))
      return false;
    for (let b2 of B.e) {
      if (this.preimage(b2, R, B).e.length < 1)
        return false;
    }
    return true;
  }
  isBijective(R, B = this) {
    return this.isOneOne(R, B) && this.isOnto(R, B);
  }
}
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
const H1_svelte_svelte_type_style_lang = "";
const H2_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: null
};
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css$2);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `<h2 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</h2>`;
});
const H3_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: null
};
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css$1);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `<h3 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</h3>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-fr0q3{position:relative;padding:0.5em}.absolute.svelte-fr0q3{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-fr0q3::-webkit-scrollbar{width:0;height:0}.pad.svelte-fr0q3{min-height:100px}.thumbnail.svelte-fr0q3{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-fr0q3{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let problemset = {
    s: "",
    o: { "A": "", "B": "", "C": "", "D": "" },
    c: ""
  };
  const generateProblem = (problemnumber) => {
    let N = 5;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        values[0] = `Collection of purest rivers`;
        values[1] = `Collection of states in India`;
        values[2] = `Collection of countries`;
        values[3] = `Collection of my watches`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is a not set?`;
        break;
      }
      case 1: {
        let m = randInt(20, 10);
        let n = randInt(Math.floor(m / 2), 1);
        let l = randInt(Math.floor(2 * n / 3), 2);
        n = Math.random() < 0.5 ? n : -n;
        let set = new Sets();
        for (let i = n + 1; i < m; i++) {
          set.e.push(i);
        }
        let subA = new Sets(set.e.filter((item) => item % l == 0));
        values[0] = `\\(${subA.str()}\\)`;
        values[1] = `\\(${set.randomSubset().str()}\\)`;
        values[2] = `\\(${set.randomSubset().str()}\\)`;
        values[3] = `\\(${set.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is correct Roster form of the set \\[ x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\]`;
        break;
      }
      case 2: {
        let A = new Sets();
        let U = new Sets();
        U.interval(-10, 10);
        A.randomSet(-10, 10, randInt(10, 8));
        let C = U.diff(A);
        let B = A.krandomSubset(3);
        values[0] = `\\(${C.e[Math.floor(Math.random() * C.e.length)]}\\in A\\)`;
        values[1] = `\\(${B.e[0]}\\in A\\)`;
        values[2] = `\\(${B.e[1]}\\in A\\)`;
        values[3] = `\\(${B.e[2]}\\in A\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Given a set \\[A = ${A.str()}\\] which of the following is not correct?`;
        break;
      }
      case 3: {
        let m = randInt(20, 10);
        let n = randInt(Math.floor(m / 2), 1);
        let l = randInt(Math.floor(2 * n / 3), 2);
        n = Math.random() < 0.5 ? n : -n;
        let set = new Sets();
        for (let i = n + 1; i < m; i++) {
          set.e.push(i);
        }
        let setA = new Sets(set.e.filter((item) => item % l == 0));
        values[0] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\}\\)`;
        values[1] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m}\\}\\)`;
        values[2] = `\\(\\{x : x \\text{ is an integer such that } ${m} < x < ${n} \\text{ and divisible by } ${l}\\}\\)`;
        values[3] = `\\(\\{x : x \\text{ is an integer such that } x \\text{ is divisible by } ${l}\\}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is correct set-builder form of the set \\[${setA.str()}\\]`;
        break;
      }
      case 4: {
        let q = new Quadratic(0, 0, 0, "n");
        q.rand(-3, 3);
        let q1 = new Quadratic(0, 0, 0, "n");
        q1.rand(-3, 3);
        let q2 = new Quadratic(0, 0, 0, "n");
        q2.rand(-3, 3);
        let q3 = new Quadratic(0, 0, 0, "n");
        q3.rand(-3, 3);
        let seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];
        let set = new Sets(seq);
        values[0] = q.str();
        values[1] = q1.str();
        values[2] = q2.str();
        values[3] = q3.str();
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(\\{x: x = " + values[i] + ", n~\\) is a natural number and \\(~1\\leq n\\leq 5\\}\\)";
        }
        problemset.s = `Which of the following is correct set-builder form of the set \\[${set.str()}\\]`;
        break;
      }
    }
    problemset = problemset;
    return problemset;
  };
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-iu5uph_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedSection, 0)}><!-- HEAD_svelte-iu5uph_END -->`, ""}
    <article class="${["svelte-fr0q3", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-fr0q3"}"><img class="${"statement svelte-fr0q3"}" width="${"100%"}" src="${"/notes/maths/sets/representation/heroparadox.svg"}" alt="${""}" style="${"color:white;"}"></div>` : ``}
        ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
        ${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Definition
            `;
        }
      })}`;
    }
  })}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `We are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the mathematical refinement of this idea of collection. It turns out that not every collection can be a set. One basic requirement of a mathematical concept is that its definition must be unique. Not every collection has a unique definition. Consider, for example, <span class="${"specialtext"}">the hero paradox</span>. A <em>hero</em> is a person who helps those and only those, who can not help themselves. <em>Does the hero help himself?</em>`;
        }
      })}
                ${validate_component(Image, "Image").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<img src="${"/notes/maths/sets/representation/heroparadox.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `A simple idea of collections can lead to many such paradoxes.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `Such paradoxes can be avoided if it is possible to decide, with certainty, whether an object is part of the collection. This is how we define the mathematical notion of a <em>set</em>.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 4 }, {}, {
        default: () => {
          return `A <strong>set</strong> is a <em>well-defined</em> collection of objects.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The property <em>well-defined</em> means given a set and an object, we can determine, without ambiguity, whether the object <em>belongs</em> to the set or not.
                `;
        }
      })}`;
    }
  })}</section>
        
        <section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 6 }, {}, {
        default: () => {
          return `Examples
                `;
        }
      })}`;
    }
  })}
            <ul>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Collection of students in a given class is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `Alphabets in English is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `Natural numbers divisible by 2 is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Collection of circles of different radii is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `Collection of all rivers in the world is a set.`;
        }
      })}`;
    }
  })}</ul></section>
        ${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `Elements of a set
            `;
        }
      })}`;
    }
  })}
        <section><ul>${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `A set is usually denoted by capital letters \\(A, B, X, Y\\) etc.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 14 }, {}, {
        default: () => {
          return `Members of a set are called elements of the set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Elements of a set are usually represented by small letters \\(a, b, x, y\\) etc.`;
        }
      })}`;
    }
  })}</ul>
            ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { "isActive{16}": true }, {}, {
        default: () => {
          return `Epsilon (\\(\\in\\)) notation
                `;
        }
      })}`;
    }
  })}
            <ul>${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `If \\(a\\) is an elment of a set \\(A\\), we say that \\(a\\) <em>belongs to</em> \\(A\\) and denote this fact using \\(a\\in A\\).`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `If \\(a\\) is <strong>not</strong> an elment of a set \\(A\\), we say that \\(a\\) <em>does not belongs to</em> \\(A\\) and denote this fact using \\(a\\notin A\\).`;
        }
      })}`;
    }
  })}</ul></section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{19}": true }, {}, {
        default: () => {
          return `Examples
            `;
        }
      })}`;
    }
  })}
        <ul>${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `If \\(A\\) is the set of vowels in English, then \\(a\\in A\\) because \\(a\\) is a vowel, but \\(x\\notin A\\) because \\(x\\) is not a vowel.`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `If \\(E\\) is the set of Natural numbers divisible by 2, then \\(2\\in E\\), but \\(0\\notin E\\) and \\(3\\notin E\\).`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `If \\(R\\) is the set of all rivers in the world, then \\(Ganga\\in R\\), but \\(India\\notin R\\).`;
        }
      })}`;
    }
  })}</ul></section>
        ${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 23 }, {}, {
        default: () => {
          return `Roster Form`;
        }
      })}`;
    }
  })}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 24 }, {}, {
        default: () => {
          return `In roster form, all the elements of a set are listed, comma-separated and enclosed within braces ${escape("\\[\\{a_1, a_2,\\dots, a_n \\}\\]")}`;
        }
      })}`;
    }
  })}</section>
        ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{25}": true }, {}, {
        default: () => {
          return `Examples
            `;
        }
      })}`;
    }
  })}
        <section><ul>${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 26 }, {}, {
        default: () => {
          return `Set of natural numbers less than 10 and divisible by 2 is ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)}.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 27 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 27 }, {}, {
        default: () => {
          return `Set of English vowels is ${escape(`\\(\\{a, e, i, o, u\\}\\)`)}.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 28 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 28 }, {}, {
        default: () => {
          return `Set of roots of quadratic equation \\(x^2 - 3x + 2 = 0\\) is ${escape(`\\(\\{1, 2\\}\\)`)}.`;
        }
      })}`;
    }
  })}</ul></section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 29 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "remark", "isActive{29}": true }, {}, {
        default: () => {
          return `Remarks
                `;
        }
      })}`;
    }
  })}
            <ul>${validate_component(Item, "Item").$$render($$result, { item: 30 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 30 }, {}, {
        default: () => {
          return `In roster form, the order in which the elements are listed does not matter. For example, the set ${escape(`\\(\\{2, 4\\}\\)`)} is the same as ${escape(`\\(\\{4, 2\\}\\)`)}.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 31 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 31 }, {}, {
        default: () => {
          return `In roster form, repeating an element in the list does not change the set. Hence, an element is usually listed only once in the set. For example, the set of letter in BETTER is ${escape(`\\(\\{B, E, T, T, E, R\\}\\)`)}, there is no need to repeat E and T. We can just write ${escape(`\\(\\{B, E, T, R\\}\\)`)}.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 32 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 32 }, {}, {
        default: () => {
          return `The set of roots of quadratic equation \\(x^2 - 2x + 1 = 0\\) is ${escape(`\\(\\{1, 1\\}\\)`)} or just ${escape(`\\(\\{1\\}\\)`)}.`;
        }
      })}`;
    }
  })}</ul></section>
        ${validate_component(Item, "Item").$$render($$result, { item: 33 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 33 }, {}, {
        default: () => {
          return `Set Builder Form`;
        }
      })}`;
    }
  })}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 34 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 34 }, {}, {
        default: () => {
          return `In set-builder form, we specify a property that is satisfied <strong>only</strong> by the elements of the set. It is written as ${escape(`\\[\\{x : \\text{Property satisfied by } x\\}\\]`)} The symbol \\(x\\) can be replaced with any other symbol like \\(a, b, y\\) etc. The colon (:) stands for &quot;such that&quot;. After colon (:) we write the property satisfied by all elements of the set.
                `;
        }
      })}`;
    }
  })}</section>
        ${validate_component(Item, "Item").$$render($$result, { item: 35 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{35}": true }, {}, {
        default: () => {
          return `Examples
            `;
        }
      })}`;
    }
  })}
        <section><ul>${validate_component(Item, "Item").$$render($$result, { item: 36 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 36 }, {}, {
        default: () => {
          return `The set-builder form of the set ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)} is ${escape(`\\(\\{x: x\\)`)} is a natural numbers less than 10 and divisible by  2${escape(`\\(\\}\\)`)}.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 37 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 37 }, {}, {
        default: () => {
          return `The set-builder form of the set ${escape(`\\(\\{a, e, i, o, u\\}\\)`)} is ${escape(`\\(\\{x : x \\text{ is an English vowel}\\}\\)`)}.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 38 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 38 }, {}, {
        default: () => {
          return `Let ${escape(`\\(A = \\Big\\{\\dfrac{2}{3}, \\dfrac{3}{4}, \\dfrac{4}{5}, \\dfrac{5}{6},\\dfrac{6}{7}\\Big\\}\\)`)}, then in set-builder form it will be written as ${escape(`\\[\\{x: x = \\frac{n + 1}{n + 2}, \\text{ where } n \\text{ is a natural number and } 1\\leq n\\leq 5\\}\\]`)}`;
        }
      })}`;
    }
  })}</ul></section>
        ${validate_component(Item, "Item").$$render($$result, { item: 39 }, {}, {
    default: () => {
      return `<section><h2>Practice</h2>
                ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}
        
        ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-fr0q3"}"></div>` : ``}
    </article>`;
});
export {
  Page as default
};
