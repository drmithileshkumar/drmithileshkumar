import { c as compute_rest_props, a as subscribe, d as null_to_empty } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores4.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { p as powerset, S as Sets } from "../../../../../../../chunks/sets.js";
import { a as randInt } from "../../../../../../../chunks/common.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
import { T as TeX } from "../../../../../../../chunks/constants.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../../chunks/H2.js";
import { I as Image } from "../../../../../../../chunks/Image.js";
/* empty css                                                            */
const seive = (N) => {
  if (N <= 1) return [];
  var numbers = new Array(N);
  for (var i = 0; i < N; i++) {
    numbers[i] = true;
  }
  for (var i = 2; i < Math.sqrt(N); i++) {
    for (var j = i * i; j < N; j += i) {
      numbers[j] = false;
    }
  }
  var primes = [];
  for (var i = 2; i < N; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }
  return primes;
};
const factor = (N) => {
  if (N <= 1) return [{ prime: N, power: 0 }];
  let primes = seive(N);
  let factors = [];
  for (let k = 0; k < primes.length && N > 1; k++) {
    let p = primes[k];
    if (N % p === 0) {
      let fact = { prime: p, power: 0 };
      while (N % p === 0) {
        fact.power++;
        N /= p;
      }
      factors.push(fact);
    }
  }
  if (N > 1) {
    factors.push({ prime: N, power: 1 });
  }
  return factors;
};
const filterSquare = (N) => {
  let factors = factor(N);
  let squares = [];
  let nonSquares = [];
  for (let i = 0; i < factors.length; i++) {
    if (factors[i].power > 1) {
      squares.push({ prime: factors[i].prime, power: Math.floor(factors[i].power / 2) });
    }
    factors[i].power = factors[i].power % 2;
  }
  nonSquares = factors.filter((factor2) => factor2.power == 1);
  return { a: squares, r: nonSquares };
};
class Surd {
  // natural radicals
  constructor(terms = []) {
    this.terms = terms;
  }
  reduced() {
    for (let i = 0; i < this.terms.length; i++) {
      if (this.terms[i].r !== 1) {
        let { a, r } = filterSquare(this.terms[i].r);
        let an = a.length > 0 ? a.map((item) => Math.pow(item.prime, item.power)).reduce((x, y) => x * y) : 1;
        let rn = r.length > 0 ? r.map((item) => Math.pow(item.prime, item.power)).reduce((x, y) => x * y) : 1;
        this.terms[i].a *= an;
        this.terms[i].r = rn;
      }
    }
    this.removeDuplicates();
  }
  removeDuplicates() {
    if (this.terms.length > 1) {
      let markTerms = new Array(this.terms.length);
      for (let i = 0; i < this.terms.length; i++) {
        markTerms[i] = true;
      }
      for (let i = 0; i < this.terms.length; i++) {
        if (markTerms[i]) {
          for (let j = i + 1; j < this.terms.length; j++) {
            if (this.terms[i].r == this.terms[j].r) {
              this.terms[i].a += this.terms[j].a;
              markTerms[j] = false;
            }
          }
        }
      }
      this.terms = this.terms.filter((index) => markTerms[index]);
      this.terms = this.terms.filter((term) => term.a != 0 || term.r == 1);
      this.sortR();
    }
  }
  sortR() {
    this.terms.sort((a, b) => a.r - b.r);
  }
  value() {
    let val = 0;
    for (let term of this.terms) {
      val += term.a * Math.sqrt(term.r);
    }
    return val;
  }
  randomPureSurd(max) {
    this.terms.push({ a: randInt(max, 2), r: randInt(max, 2) });
  }
  randomSurd(max) {
    let n = randInt(4, 2);
    this.terms.push({ a: randInt(max, 2), r: 1 });
    for (let i = 1; i < n; i++) {
      this.terms.push({ a: randInt(max, 2), r: randInt(max, 2) });
    }
  }
  equal(s) {
    this.reduced();
    s.reduced();
    if (this.terms.length != s.terms.length) return false;
    for (let i = 0; i < this.terms.length; i++) {
      if (this.terms[i].a != s.terms[i].a || this.terms[i].r != s.terms[i].r)
        return false;
    }
    return true;
  }
  isNum() {
    return this.terms.length == 1 && this.terms[0].r == 1;
  }
  isOne() {
    return this.isNum() && this.terms[0].a == 1;
  }
  isMinusOne() {
    return this.isNum() && this.terms[0].a == -1;
  }
  isZero() {
    return this.value() == 0;
  }
  isGZero() {
    return this.value() > 0;
  }
  isLZero() {
    return this.value() < 0;
  }
  scale(k) {
    let newSurd = new Surd();
    for (let term of this.terms) {
      newSurd.terms.push({ a: k * term.a, r: term.r });
    }
    return newSurd;
  }
  add(s) {
    this.reduced();
    s.reduced();
    let newSurd = new Surd();
    let matched = new Array(s.terms.length);
    for (let i = 0; i < s.terms.length; i++) {
      matched[i] = false;
    }
    for (let i = 0; i < this.terms.length; i++) {
      newSurd.terms.push(this.terms[i]);
      for (let j = 0; j < s.terms.length; j++) {
        if (this.terms[i].r == s.terms[j].r) {
          matched[j] = true;
          newSurd.terms[i].a += s.terms[j].a;
        }
      }
    }
    for (let i = 0; i < s.terms.length; i++) {
      if (!matched[i]) {
        newSurd.terms.push(s.terms[i]);
      }
    }
    newSurd.terms = newSurd.terms.filter((term) => term.a != 0 || term.r == 1);
    return newSurd;
  }
  sub(s) {
    this.reduced();
    s.reduced();
    let newS = s.scale(-1);
    return this.add(newS);
  }
  termMul(s) {
    let newSurd = new Surd();
    for (let term of this.terms) {
      newSurd.push({ a: term.a * s.a, r: term.r * s.r });
    }
  }
  mul(s) {
    this.reduced();
    s.reduced();
    let newSurd = new Surd();
    let newTerm;
    for (let i = 0; i < this.terms.length; i++) {
      for (let j = 0; j < s.terms.length; j++) {
        newTerm = { a: this.terms[i].a * s.terms[j].a, r: this.terms[i].r * s.terms[j].r };
        newSurd.terms.push(newTerm);
      }
    }
    newSurd.reduced();
    return newSurd;
  }
  flipSign(sign) {
    let newSurd = new Surd();
    newSurd.terms.push(this.terms[0]);
    let term;
    for (let i = 1; i < this.terms.length; i++) {
      term = sign[i - 1] == "0" ? { a: -Math.abs(this.terms[i].a), r: this.terms[i].r } : { a: Math.abs(this.terms[i].a), r: this.terms[i].r };
      newSurd.terms.push(term);
    }
    return newSurd;
  }
  conjugate() {
    if (this.terms.length == 1) return this;
    if (this.terms.length == 2) {
      let newSurd = new Surd();
      newSurd.terms.push(this.terms[0]);
      newSurd.terms.push(this.terms[1]);
      newSurd.terms[1].a = -newSurd.terms[1].a;
      return newSurd;
    }
    let signs = powerset(this.terms.length - 1);
    let conj = new Surd();
    conj.terms.push({ a: 1, r: 1 });
    let thisSign = "";
    for (let i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a < 0) {
        thisSign += 0;
      } else {
        thisSign += 1;
      }
    }
    for (let sign of signs) {
      if (sign != thisSign) {
        conj = conj.mul(this.flipSign(sign));
      }
    }
    return conj;
  }
  gcd(a, b) {
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
  }
  gcda() {
    let g = this.terms[0].a;
    for (let i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a !== 0)
        g = this.gcd(g, this.terms[i].a);
    }
    return g;
  }
  div(s) {
    let conj = s.conjugate();
    let den = s.mul(conj);
    let num = this.mul(conj);
    let g = num.gcda();
    let g1 = this.gcd(g, den.terms[0].a);
    if (g1 !== 0) {
      for (let i = 0; i < num.terms.length; i++) {
        num.terms[i].a = num.terms[i].a / g1;
      }
      den.terms[0].a = den.terms[0].a / g1;
    }
    return new Q(num, den);
  }
  str() {
    let factor2 = "";
    let str = "";
    if (this.terms.length == 0) return "";
    let i = 0;
    if (this.terms[i].a == 0) {
      str = str + "";
    } else if (this.terms[i].a > 0) {
      factor2 = this.terms[i].a == 1 && this.terms[i].r !== 1 ? "" : this.terms[i].a;
    } else {
      factor2 = this.terms[i].a == -1 && this.terms[i].r !== 1 ? "-" : this.terms[i].a;
    }
    str += this.terms[i].r !== 1 ? factor2 + `\\sqrt{${this.terms[i].r}}` : factor2;
    for (i = 1; i < this.terms.length; i++) {
      if (this.terms[i].a == 0) {
        str = str + "";
      } else if (this.terms[i].a > 0) {
        factor2 = this.terms[i].a == 1 ? "" : this.terms[i].a;
        str += this.terms[i].r !== 1 ? "+" + factor2 + `\\sqrt{${this.terms[i].r}}` : "+" + factor2;
      } else {
        factor2 = this.terms[i].a == -1 ? "-" : this.terms[i].a;
        str += this.terms[i].r !== 1 ? factor2 + `\\sqrt{${this.terms[i].r}}` : factor2;
      }
    }
    return str;
  }
}
class Q {
  constructor(num = 0, den = 1) {
    this.num = num;
    this.den = den;
  }
  randF(n, d) {
    this.num = randInt(n, -n);
    this.den = randInt(d, 1);
    this.reduced();
  }
  isSurd() {
    return this.num instanceof Surd && this.den instanceof Surd;
  }
  sqrt() {
    let sq = new Q();
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.num.isNum()) {
        sq.num = new Surd([{ a: 1, r: this.num.terms[0].a }]);
      } else {
        sq.num = new Surd([{ a: 1, r: this.num.value() }]);
      }
      if (this.den.isNum()) {
        sq.den = new Surd([{ a: 1, r: this.den.terms[0].a }]);
      } else {
        sq.den = new Surd([{ a: 1, r: this.den.value() }]);
      }
    } else {
      sq.num = new Surd([{ a: 1, r: this.num }]);
      sq.den = new Surd([{ a: 1, r: this.den }]);
    }
    return sq;
  }
  isZero() {
    return this.num instanceof Surd && this.den instanceof Surd ? this.num.value() == 0 : this.num == 0;
  }
  isOne() {
    return this.num instanceof Surd && this.den instanceof Surd ? this.num.isOne() && this.den.isOne() : this.num == 1 && this.den == 1;
  }
  isMinusOne() {
    return this.num instanceof Surd && this.den instanceof Surd ? this.num.isMinusOne() && this.den.isOne() : this.num == -1 && this.den == 1;
  }
  isGZero() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.num.value() > 0 && this.den.value() > 0 || this.num.value() < 0 && this.den.value() < 0;
    } else {
      return this.num > 0;
    }
  }
  isLZero() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.num.value() < 0 && this.den.value() > 0 || this.num.value() > 0 && this.den.value() < 0;
    } else {
      return this.num < 0;
    }
  }
  isUndefined() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.den.terms.length == 1 && this.den.terms[0].a == 0;
    } else {
      return this.den == 0;
    }
  }
  str() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.den.equal(new Surd([{ a: 1, r: 1 }]))) {
        return `${this.num.str()}`;
      } else {
        let numstr = this.num.str();
        let denstr = this.den.str();
        return `\\frac{${numstr}}{${denstr}}`;
      }
    } else {
      if (this.num == 0) {
        return 0;
      }
      if (this.den == 1) {
        return this.num;
      }
      if (this.den == -1) {
        return -this.num;
      }
      if (this.den < 0) {
        return `\\frac{${-this.num}}{${-this.den}}`;
      }
      return `\\frac{${this.num}}{${this.den}}`;
    }
  }
  gcd() {
    let a = Math.abs(this.num);
    let b = Math.abs(this.den);
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
  }
  lcm() {
    let g = this.gcd();
    return this.num * this.den / g;
  }
  reduced() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      let newQ = this.num.div(this.den);
      this.num = newQ.num;
      this.den = newQ.den;
    } else {
      if (this.den < 0) {
        this.den = -this.den;
        this.num = -this.num;
      }
      if (this.num == this.den) {
        this.num = 1;
        this.den = 1;
      } else if (this.num % this.den == 0) {
        this.num = this.num / this.den;
        this.den = 1;
      } else if (this.num % 1 == 0 && this.den % 1 == 0) {
        let g = this.gcd();
        this.num = this.num / g;
        this.den = this.den / g;
      } else {
        this.num = this.num / this.den;
        this.den = 1;
      }
    }
  }
  equal(f) {
    this.reduced();
    f.reduced();
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (this.isUndefined()) return false;
      if (f.isSurd()) {
        if (f.den.value() == 0) return false;
        return this.num.value() / this.den.value() == f.num.value() / f.den.value();
      } else {
        return this.num.value() / this.den.value() == f.num / f.den;
      }
    } else {
      if (f.isSurd()) {
        if (f.den.value() == 0) return false;
        return this.num / this.den == f.num.value() / f.den.value();
      } else {
        return this.num / this.den == f.num / f.den;
      }
    }
  }
  scale(k) {
    return this.num instanceof Surd && this.den instanceof Surd ? new Q(this.num.scale(k), this.den) : new Q(this.num * k, this.den);
  }
  abs() {
    return this.isLZero() ? this.scale(-1) : this;
  }
  add(f) {
    let newNum, newDen;
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (f.isSurd()) {
        newNum = this.num.mul(f.den).add(this.den.mul(f.num));
        newDen = this.den.mul(f.den);
      } else {
        newNum = this.num.scale(f.den).add(this.den.scale(f.num));
        newDen = this.den.scale(f.den);
      }
    } else {
      if (f.isSurd()) {
        newNum = f.den.scale(this.num).add(f.num.scale(this.den));
        newDen = f.den.scale(this.den);
      } else {
        newNum = this.num * f.den + this.den * f.num;
        newDen = this.den * f.den;
      }
    }
    return new Q(newNum, newDen);
  }
  sub(f) {
    let nf = f.scale(-1);
    return this.add(nf);
  }
  mul(f) {
    let newNum, newDen;
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (f.isSurd()) {
        newNum = this.num.mul(f.num);
        newDen = this.den.mul(f.den);
      } else {
        newNum = this.num.scale(f.num);
        newDen = this.den.scale(f.den);
      }
    } else {
      if (f.isSurd()) {
        newNum = f.num.scale(this.num);
        newDen = f.den.scale(this.den);
      } else {
        newNum = this.num * f.num;
        newDen = this.den * f.den;
      }
    }
    return new Q(newNum, newDen);
  }
  div(f) {
    let newNum, newDen;
    if (this.num instanceof Surd && this.den instanceof Surd) {
      if (f.isSurd()) {
        newNum = this.num.mul(f.den);
        newDen = this.den.mul(f.num);
      } else {
        newNum = this.num.scale(f.den);
        newDen = this.den.scale(f.num);
      }
    } else {
      if (f.isSurd()) {
        newNum = f.den.scale(this.num);
        newDen = f.num.scale(this.den);
      } else {
        newNum = this.num * f.den;
        newDen = this.den * f.num;
      }
    }
    return new Q(newNum, newDen);
  }
  value() {
    if (this.num instanceof Surd && this.den instanceof Surd) {
      return this.num.value() / this.num.value();
    } else {
      return this.num / this.den;
    }
  }
}
const css$2 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: `{"version":3,"file":"Dt.svelte","sources":["Dt.svelte"],"sourcesContent":["<script>\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    export let isActive = -1;\\r\\n<\/script>\\r\\n<style>\\r\\n    .currentActive {\\r\\n        /* background: gray; */\\r\\n        color: tomato;\\r\\n        /* padding: 1em; */\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n</style>\\r\\n{#if $presentationMode}\\r\\n<dt class=\\"{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}\\" \\r\\n    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n    on:introstart={() => {isActive = -1}}\\r\\n    on:introend={() => {isActive = $currentSlide}}\\r\\n    on:outroend={() => {isActive = -1}}\\r\\n    >\\r\\n    <slot />\\r\\n</dt>\\r\\n{:else}\\r\\n    <dt class=\\"{$$restProps.class || ''}\\">\\r\\n        <slot />\\r\\n    </dt>\\r\\n{/if}"],"names":[],"mappings":"AAMI,6BAAe,CAEX,KAAK,CAAE,MAAM,CAEb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB"}`
};
const Dt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0) $$bindings.isActive(isActive);
  $$result.css.add(css$2);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `${$presentationMode ? `<dt class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</dt>` : `<dt class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</dt>`}`;
});
const css$1 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: `{"version":3,"file":"Dd.svelte","sources":["Dd.svelte"],"sourcesContent":["<script>\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    export let isActive = -1;\\r\\n<\/script>\\r\\n<style>\\r\\n    .currentActive {\\r\\n        /* background: gray; */\\r\\n        color: tomato;\\r\\n        /* padding: 1em; */\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n</style>\\r\\n{#if $presentationMode}\\r\\n<dd class=\\"{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}\\" \\r\\n    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n    on:introstart={() => {isActive = -1}}\\r\\n    on:introend={() => {isActive = $currentSlide}}\\r\\n    on:outroend={() => {isActive = -1}}\\r\\n    >\\r\\n    <slot />\\r\\n</dd>\\r\\n{:else}\\r\\n    <dd class=\\"{$$restProps.class || ''}\\">\\r\\n        <slot />\\r\\n    </dd>\\r\\n{/if}"],"names":[],"mappings":"AAMI,6BAAe,CAEX,KAAK,CAAE,MAAM,CAEb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB"}`
};
const Dd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0) $$bindings.isActive(isActive);
  $$result.css.add(css$1);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `${$presentationMode ? `<dd class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</dd>` : `<dd class="${escape(null_to_empty($$restProps.class || ""), true) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</dd>`}`;
});
const css = {
  code: ".display.svelte-gkd15d{position:relative;position:-webkit-sticky}.youtube.svelte-gkd15d{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start}article.svelte-gkd15d{position:relative;padding:0.5em}.absolute.svelte-gkd15d{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-gkd15d::-webkit-scrollbar{width:0;height:0}.pad.svelte-gkd15d{min-height:150px}.thumbnail.svelte-gkd15d{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-gkd15d{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);padding:1em;background-image:url('/notes/maths/sets/real/subsetreal.svg');background-repeat:no-repeat;background-position:center;width:500px;height:500px}.grid.svelte-gkd15d{display:grid;grid-template-columns:auto 420px}.flex.svelte-gkd15d{display:flex;flex-direction:column-reverse}.contentpart.svelte-gkd15d{padding:0.5em}.gridBackground.svelte-gkd15d{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport Practice from '$lib/utils/practiceproblem/Practice.svelte';\\r\\n\\timport Message from '$lib/ui/Message.svelte';\\r\\n\\timport { Sets } from '$lib/utils/common/sets';\\r\\n\\timport { Surd } from '$lib/utils/common/surd';\\r\\n\\timport { Q } from '$lib/utils/common/fraction';\\r\\n\\timport { Point2D } from '$lib/utils/common/point2d';\\r\\n\\timport { randNum, randInt } from '$lib/utils/common/common';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { TeX } from '$lib/utils/common/constants';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport P from '$lib/presentation/P.svelte';\\r\\n\\timport H1 from '$lib/presentation/H1.svelte';\\r\\n\\timport H2 from '$lib/presentation/H2.svelte';\\r\\n\\timport H3 from '$lib/presentation/H3.svelte';\\r\\n\\timport Li from '$lib/presentation/Li.svelte';\\r\\n\\timport Dt from '$lib/presentation/Dt.svelte';\\r\\n\\timport Dd from '$lib/presentation/Dd.svelte';\\r\\n\\timport Item from '$lib/presentation/Item.svelte';\\r\\n\\timport Image from '$lib/presentation/Image.svelte';\\r\\n    import Div from '$lib/presentation/Div.svelte';\\r\\n\\tonMount(() => {\\r\\n\\t\\t$selectedChapter = 'Sets';\\r\\n\\t\\t$selectedSection = 'Real numbers';\\r\\n\\t\\t$slideCounter = 20;\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n\\tlet problemset = {\\r\\n\\t\\ts: '',\\r\\n\\t\\to: {\\r\\n\\t\\t\\tA: '',\\r\\n\\t\\t\\tB: '',\\r\\n\\t\\t\\tC: '',\\r\\n\\t\\t\\tD: ''\\r\\n\\t\\t},\\r\\n\\t\\tc: ''\\r\\n\\t};\\r\\n\\tconst generateProblem = (problemnumber) => {\\r\\n\\t\\tlet N = 1;\\r\\n\\t\\tproblemnumber = problemnumber % N;\\r\\n\\t\\tlet choices = ['A', 'B', 'C', 'D'];\\r\\n\\t\\tlet correctChoiceIndex = Math.floor(Math.random() * 4);\\r\\n\\t\\tproblemset.c = choices[correctChoiceIndex];\\r\\n\\t\\tlet ans;\\r\\n\\t\\tlet values = [0, 0, 0, 0];\\r\\n\\t\\tswitch (problemnumber) {\\r\\n\\t\\t\\tcase 0: {\\r\\n\\t\\t\\t\\tlet n = randInt(20, 1);\\r\\n\\t\\t\\t\\tlet m = randInt(n + 1, n + 10) + 10;\\r\\n\\t\\t\\t\\tlet k = randInt(8, 2);\\r\\n\\t\\t\\t\\tlet irrationals = new Sets(['e', '\\\\\\\\pi', '\\\\\\\\varphi'])\\r\\n\\t\\t\\t\\tlet s = new Sets();\\r\\n\\t\\t\\t\\ts.randomSet(n, m, k);\\r\\n\\r\\n\\t\\t\\t\\tlet r = Math.random();\\r\\n\\t\\t\\t\\tlet suset = r < 0.25 ? 'N' : r < 0.5 ? 'Z' : r < 0.75 ? 'Q' : 'T';\\r\\n\\t\\t\\t\\tlet opt = [\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{N}\\\\\\\\)\`,\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{Z}\\\\\\\\)\`,\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{Q}\\\\\\\\)\`,\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{T}\\\\\\\\)\`\\r\\n\\t\\t\\t\\t];\\r\\n\\t\\t\\t\\tlet ques = '';\\r\\n\\t\\t\\t\\tlet co;\\r\\n\\t\\t\\t\\tswitch (suset) {\\r\\n\\t\\t\\t\\t\\tcase 'N':\\r\\n\\t\\t\\t\\t\\t\\ts.add(randInt(m, n));\\r\\n\\t\\t\\t\\t\\t\\tques = 'not';\\r\\n\\t\\t\\t\\t\\t\\tco = 3;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\tcase 'Z':\\r\\n\\t\\t\\t\\t\\t\\ts.add(-randInt(m, n));\\r\\n\\t\\t\\t\\t\\t\\tques = 'not';\\r\\n\\t\\t\\t\\t\\t\\tco = 0;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\tcase 'Q':\\r\\n\\t\\t\\t\\t\\t\\tlet q = new Q();\\r\\n\\t\\t\\t\\t\\t\\tq.randF(m, n);\\r\\n\\t\\t\\t\\t\\t\\tlet q1 = q.add(new Q(1, 2));\\r\\n\\t\\t\\t\\t\\t\\ts.add(q1);\\r\\n\\t\\t\\t\\t\\t\\tco = 2;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\tcase 'T':\\r\\n\\t\\t\\t\\t\\t\\ts = irrationals.randomSubset();\\r\\n\\t\\t\\t\\t\\t\\tlet nq = new Surd();\\r\\n\\t\\t\\t\\t\\t\\tnq.randomSurd(m);\\r\\n\\t\\t\\t\\t\\t\\ts.add(nq);\\r\\n\\t\\t\\t\\t\\t\\tlet nq1 = new Surd();\\r\\n\\t\\t\\t\\t\\t\\ts.add(nq1);\\r\\n\\t\\t\\t\\t\\t\\tco = 3;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (suset == 'Z') {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[correctChoiceIndex + 3]] = \`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{R}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tproblemset.s = \`Given set \\\\\\\\(A = \${s.str()}\\\\\\\\), which of the following is \${ques} correct?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 1: {\\r\\n\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tproblemset = problemset;\\r\\n\\t\\treturn problemset;\\r\\n\\t};\\r\\n\\tlet DW;\\r\\n\\t$: splitMode = !$presentationMode && DW > 800;\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{$selectedSection}</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Real numbers\\" />\\r\\n</svelte:head>\\r\\n<article class:absolute={$presentationMode} bind:this={$presentation} class=\\"{$presentationMode ? 'gridBackground':''}\\">\\r\\n\\t{#if $presentationMode && $currentSlide === -2}\\r\\n\\t\\t<div class=\\"thumbnail\\">\\r\\n\\t\\t\\t<div class=\\"statement\\">\\r\\n\\t\\t\\t\\t<p></p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if !$presentationMode || $currentSlide >= -1}\\r\\n\\t\\t<h1>{$selectedSection}</h1>\\r\\n\\t{/if}\\r\\n\\t<div class=\\"display {splitMode ? 'grid' : 'flex'}\\" bind:clientWidth={DW}>\\r\\n\\t\\t<section class=\\"contentpart\\">\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={0}>\\r\\n\\t\\t\\t\\t\\t<P isActive={0}>\\r\\n                        All numbers are either real numbers or made of real numbers. The set of real numbers is denoted by \\\\(R\\\\) or \\\\({TeX.bbR}\\\\). It is an infinite uncountable set. In this video, we'll review some of its well-known subsets and introduce intervals. Let's begin with the subsets first.\\r\\n                    </P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<dl>\\r\\n\\t\\t\\t\\t\\t<Item item={1}>\\r\\n\\t\\t\\t\\t\\t\\t<Dt isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\t\\tNatural numbers\\r\\n\\t\\t\\t\\t\\t\\t</Dt>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={1}>\\r\\n\\t\\t\\t\\t\\t\\t<Dd isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\mathbb{N} = \\\\\\\\{1, 2, 3, \\\\\\\\dots\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Dd>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t\\r\\n\\t\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t\\t<Dt isActive={2}>\\r\\n\\t\\t\\t\\t\\t\\t\\tIntegers\\r\\n\\t\\t\\t\\t\\t\\t</Dt>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t\\t<Dd isActive={2}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\mathbb{Z} = \\\\\\\\{\\\\\\\\dots, -1, 0, 1, \\\\\\\\dots\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Dd>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\r\\n\\t\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t\\t<Dt isActive={3}>\\r\\n\\t\\t\\t\\t\\t\\t\\tRational numbers\\r\\n\\t\\t\\t\\t\\t\\t</Dt>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t\\t<Dd isActive={3}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\mathbb{Q} = \\\\\\\\{x: x = \\\\\\\\dfrac{p}{q}, p, q\\\\\\\\in \\\\\\\\mathbb{Z}, q\\\\\\\\neq 0\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Dd>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t\\r\\n\\t\\t\\r\\n\\t\\t\\t\\t\\t<Item item={4}>\\r\\n\\t\\t\\t\\t\\t\\t<Dt isActive={4}>\\r\\n\\t\\t\\t\\t\\t\\t\\tIrrational numbers\\r\\n\\t\\t\\t\\t\\t\\t</Dt>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={4}>\\r\\n\\t\\t\\t\\t\\t\\t<Dd isActive={4}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\mathbb{T} = \\\\\\\\{x: x \\\\\\\\notin \\\\\\\\mathbb{Q}\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Dd>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</dl>\\r\\n\\t\\t\\t\\t<Item item={5}>\\r\\n\\t\\t\\t\\t\\t<P isActive={5}>\\r\\n                    A natural number is an integer as well. An integer is a rational number too. But, a rational\\r\\n\\t\\t\\t\\t\\tnumber is not an irrational number. These observations can be written compactly as\\r\\n\\t\\t\\t\\t\\t{\`\\\\\\\\[\\\\\\\\mathbb{N}\\\\\\\\subset \\\\\\\\mathbb{Z}\\\\\\\\subset \\\\\\\\mathbb{Q} \\\\\\\\subset \\\\\\\\mathbb{R}, \\\\\\\\mathbb{T}\\\\\\\\subset\\\\\\\\mathbb{R},  \\\\\\\\mathbb{Q}\\\\\\\\not\\\\\\\\subset\\\\\\\\mathbb{T}\\\\\\\\]\`}\\r\\n                    </P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={6}>\\r\\n\\t\\t\\t\\t\\t<Image isActive={6}>\\r\\n\\t\\t\\t\\t\\t\\t<img style=\\"width:min(400px, 90vw);\\" src=\\"/notes/maths/sets/real/subsetreal.svg\\" alt=''>\\r\\n\\t\\t\\t\\t\\t</Image>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={7}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={7}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={8}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={8}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\{\\\\\\\\pi, \\\\\\\\sqrt{2}\\\\\\\\} \\\\\\\\subset \\\\\\\\mathbb{T}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={9}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={9}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\{1, -2, \\\\\\\\sqrt{3}, \\\\\\\\frac{1}{2}\\\\\\\\} \\\\\\\\not\\\\\\\\subset \\\\\\\\mathbb{T}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={10}>\\r\\n\\t\\t\\t\\t<H2 isActive={10}>Intervals as subsets of {'\\\\\\\\(\\\\\\\\mathbb{R}\\\\\\\\)'}</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<Item item={11}>\\r\\n\\t\\t\\t\\t<P class=\\"definition\\" isActive={11}>\\r\\n\\t\\t\\t\\t\\tLet \\\\(a, b{TeX.inR}\\\\) and \\\\(a {TeX.less} b\\\\). Then the set of real numbers \\\\({TeX.set(\\r\\n\\t\\t\\t\\t\\t\\t'y',\\r\\n\\t\\t\\t\\t\\t\\t'a<y<b'\\r\\n\\t\\t\\t\\t\\t)}\\\\) is called an <em>open interval</em> and is denoted by \\\\((a,b)\\\\). Note that \\\\(a\\\\) and \\\\(b\\\\) do\\r\\n\\t\\t\\t\\t\\tnot belong to the open interval.\\r\\n\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<Item item={12}>\\r\\n\\t\\t\\t\\t<P class=\\"definition\\" isActive={12}>\\r\\n\\t\\t\\t\\t\\tLet \\\\(a, b{TeX.inR}\\\\) and \\\\(a {TeX.less} b\\\\). Then the set of real numbers \\\\({TeX.set(\\r\\n\\t\\t\\t\\t\\t\\t'y',\\r\\n\\t\\t\\t\\t\\t\\t'a\\\\\\\\leq y\\\\\\\\leq b'\\r\\n\\t\\t\\t\\t\\t)}\\\\) is called a <em>closed interval</em> and is denoted by \\\\([a,b]\\\\). Note that \\\\(a\\\\) and \\\\(b\\\\)\\r\\n\\t\\t\\t\\t\\tbelong to the closed interval.\\r\\n\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<Item item={13}>\\r\\n\\t\\t\\t\\t<P isActive={13}>There are two other type of intervals (called <em>clopen</em>).</P>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t<Item item={14}>\\r\\n\\t\\t\\t\\t\\t<Li isActive={14}>\\r\\n\\t\\t\\t\\t\\t\\t\\\\([a,b) = {TeX.set('y', 'a\\\\\\\\leq y<b')}\\\\) where \\\\(a\\\\) is in the interval, but not \\\\(b\\\\).\\r\\n\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={15}>\\r\\n\\t\\t\\t\\t\\t<Li isActive={15}>\\r\\n\\t\\t\\t\\t\\t\\t\\\\((a,b] = {TeX.set('y', 'a< y\\\\\\\\leq b')}\\\\) where \\\\(b\\\\) is in the interval, but not \\\\(a\\\\).\\r\\n\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</ul>\\r\\n\\t\\t\\t<Item item={16}>\\r\\n\\t\\t\\t\\t<P isActive={16}>An interval of {TeX.R} is visualized by a segment on a number line.</P>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\r\\n\\t\\t\\t<Item item={17}>\\r\\n\\t\\t\\t\\t<Image isActive={17}>\\r\\n\\t\\t\\t\\t\\t<img style=\\"width:min(400px, 90vw);\\" src=\\"/notes/maths/sets/real/interval.svg\\" alt=''>\\r\\n\\t\\t\\t\\t</Image>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<Item item={18}>\\r\\n\\t\\t\\t\\t<P class=\\"definition\\" isActive={18}>\\r\\n\\t\\t\\t\\t\\tThe number \\\\((b-a)\\\\) is called the <em>length of any of the intervals</em> \\\\((a,b), [a,b], [a,b)\\\\)\\r\\n\\t\\t\\t\\t\\tor \\\\((a,b]\\\\).\\r\\n\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t</section>\\r\\n\\t\\t{#if !$presentationMode}\\r\\n\\t\\t\\t<div class=\\"youtube\\">\\r\\n\\t\\t\\t\\t<iframe\\r\\n\\t\\t\\t\\t\\twidth=\\"420\\"\\r\\n\\t\\t\\t\\t\\theight=\\"300\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/w4SBKulJJh4\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"YouTube video player\\"\\r\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\r\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\"\\r\\n\\t\\t\\t\\t\\tallowfullscreen\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<div class=\\"slate\\" />\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\t<section>\\r\\n\\t\\t<Item item={19}>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<h2>Practice</h2>\\r\\n\\t\\t\\t\\t<Practice {generateProblem} />\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</Item>\\r\\n\\t</section>\\r\\n\\t{#if $presentationMode && $currentSlide >= 2}\\r\\n\\t\\t<div class=\\"pad\\" />\\r\\n\\t{/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t.display {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tposition: -webkit-sticky;\\r\\n\\t}\\r\\n\\t.youtube {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 5em;\\r\\n\\t\\t/* box-shadow: 0 0 3px gray;\\r\\n\\t\\tbackground-color: white; */\\r\\n\\t\\tz-index: 10;\\r\\n\\t\\talign-self: flex-start;\\r\\n\\t}\\r\\n\\tarticle {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.absolute {\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\t/* width: 90vw; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 600px;\\r\\n\\t\\t/* height: 90vh; */\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\tpadding: 0 1em 0 1em;\\r\\n\\t}\\r\\n\\t.absolute::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.pad {\\r\\n\\t\\tmin-height: 150px;\\r\\n\\t}\\r\\n\\t.thumbnail {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\t.statement {\\r\\n\\t\\tbackground: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));\\r\\n\\t\\tcolor: red;\\r\\n\\t\\ttext-shadow: 1px 1px 3px rgb(4, 4, 4);\\r\\n\\t\\t/* box-shadow: 1px 1px 3px rgb(129, 128, 128); */\\r\\n\\t\\tpadding: 1em;\\r\\n\\t\\tbackground-image: url('/notes/maths/sets/real/subsetreal.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n        width: 500px;\\r\\n        height: 500px;\\r\\n\\t}\\r\\n\\t.grid {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: auto 420px;\\r\\n\\t}\\r\\n\\t.flex {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column-reverse;\\r\\n\\t}\\r\\n\\t.contentpart {\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.gridBackground {\\r\\n\\t\\tbackground-image: url('/background.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n"],"names":[],"mappings":"AAwTC,sBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,cACX,CACA,sBAAS,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CAGR,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UACb,CACA,qBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KACV,CACA,uBAAU,CACT,MAAM,CAAE,IAAI,CAEZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CAIb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB,CACA,uBAAS,mBAAoB,CAC5B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,kBAAK,CACJ,UAAU,CAAE,KACb,CACA,wBAAW,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CACA,wBAAW,CACV,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC1E,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAErC,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,4CAA4C,CAC9D,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CACrB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACf,CACA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAC7B,CACA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACjB,CACA,0BAAa,CACZ,OAAO,CAAE,KACV,CACA,6BAAgB,CACf,gBAAgB,CAAE,sBAAsB,CACxC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let splitMode;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let problemset = {
    s: "",
    o: { A: "", B: "", C: "", D: "" },
    c: ""
  };
  const generateProblem = (problemnumber) => {
    let N = 1;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    switch (problemnumber) {
      case 0: {
        let n = randInt(20, 1);
        let m = randInt(n + 1, n + 10) + 10;
        let k = randInt(8, 2);
        let irrationals = new Sets(["e", "\\pi", "\\varphi"]);
        let s = new Sets();
        s.randomSet(n, m, k);
        let r = Math.random();
        let suset = r < 0.25 ? "N" : r < 0.5 ? "Z" : r < 0.75 ? "Q" : "T";
        let opt = [
          `\\(A\\subset \\mathbb{N}\\)`,
          `\\(A\\subset \\mathbb{Z}\\)`,
          `\\(A\\subset \\mathbb{Q}\\)`,
          `\\(A\\subset \\mathbb{T}\\)`
        ];
        let ques = "";
        let co;
        switch (suset) {
          case "N":
            s.add(randInt(m, n));
            ques = "not";
            co = 3;
            break;
          case "Z":
            s.add(-randInt(m, n));
            ques = "not";
            co = 0;
            break;
          case "Q":
            let q = new Q();
            q.randF(m, n);
            let q1 = q.add(new Q(1, 2));
            s.add(q1);
            co = 2;
            break;
          case "T":
            s = irrationals.randomSubset();
            let nq = new Surd();
            nq.randomSurd(m);
            s.add(nq);
            let nq1 = new Surd();
            s.add(nq1);
            co = 3;
            break;
        }
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];
        }
        if (suset == "Z") {
          problemset.o[choices[correctChoiceIndex + 3]] = `\\(A\\subset \\mathbb{R}\\)`;
        }
        problemset.s = `Given set \\(A = ${s.str()}\\), which of the following is ${ques} correct?`;
        break;
      }
    }
    problemset = problemset;
    return problemset;
  };
  let DW;
  $$result.css.add(css);
  splitMode = !$presentationMode && DW > 800;
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1up1sq_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Real numbers"><!-- HEAD_svelte-1up1sq_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-gkd15d",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-gkd15d" data-svelte-h="svelte-23ii2j"><div class="statement svelte-gkd15d"><p></p></div></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-gkd15d"}"><section class="contentpart svelte-gkd15d"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `All numbers are either real numbers or made of real numbers. The set of real numbers is denoted by \\(R\\) or \\(${escape(TeX.bbR)}\\). It is an infinite uncountable set. In this video, we&#39;ll review some of its well-known subsets and introduce intervals. Let&#39;s begin with the subsets first.`;
        }
      })}`;
    }
  })} <dl>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(Dt, "Dt").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `Natural numbers`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(Dd, "Dd").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `${escape(`\\(\\mathbb{N} = \\{1, 2, 3, \\dots\\}\\)`)}`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Dt, "Dt").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `Integers`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Dd, "Dd").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `${escape(`\\(\\mathbb{Z} = \\{\\dots, -1, 0, 1, \\dots\\}\\)`)}`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Dt, "Dt").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `Rational numbers`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Dd, "Dd").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `${escape(`\\(\\mathbb{Q} = \\{x: x = \\dfrac{p}{q}, p, q\\in \\mathbb{Z}, q\\neq 0\\}\\)`)}`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Dt, "Dt").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `Irrational numbers`;
        }
      })}`;
    }
  })}${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Dd, "Dd").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `${escape(`\\(\\mathbb{T} = \\{x: x \\notin \\mathbb{Q}\\}\\)`)}`;
        }
      })}`;
    }
  })}</dl> ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `A natural number is an integer as well. An integer is a rational number too. But, a rational
					number is not an irrational number. These observations can be written compactly as
					${escape(`\\[\\mathbb{N}\\subset \\mathbb{Z}\\subset \\mathbb{Q} \\subset \\mathbb{R}, \\mathbb{T}\\subset\\mathbb{R},  \\mathbb{Q}\\not\\subset\\mathbb{T}\\]`)}`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `<img style="width:min(400px, 90vw);" src="/notes/maths/sets/real/subsetreal.svg" alt="">`;
        }
      })}`;
    }
  })}</section> <section>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 7 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `${escape(`\\(\\{\\pi, \\sqrt{2}\\} \\subset \\mathbb{T}\\)`)}`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `${escape(`\\(\\{1, -2, \\sqrt{3}, \\frac{1}{2}\\} \\not\\subset \\mathbb{T}\\)`)}`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Intervals as subsets of ${escape("\\(\\mathbb{R}\\)")}`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 11 }, {}, {
        default: () => {
          return `Let \\(a, b${escape(TeX.inR)}\\) and \\(a ${escape(TeX.less)} b\\). Then the set of real numbers \\(${escape(TeX.set("y", "a<y<b"))}\\) is called an <em data-svelte-h="svelte-moyad5">open interval</em> and is denoted by \\((a,b)\\). Note that \\(a\\) and \\(b\\) do
					not belong to the open interval.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 12 }, {}, {
        default: () => {
          return `Let \\(a, b${escape(TeX.inR)}\\) and \\(a ${escape(TeX.less)} b\\). Then the set of real numbers \\(${escape(TeX.set("y", "a\\leq y\\leq b"))}\\) is called a <em data-svelte-h="svelte-jtfw0p">closed interval</em> and is denoted by \\([a,b]\\). Note that \\(a\\) and \\(b\\)
					belong to the closed interval.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `There are two other type of intervals (called <em data-svelte-h="svelte-ruubyh">clopen</em>).`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 14 }, {}, {
        default: () => {
          return `\\([a,b) = ${escape(TeX.set("y", "a\\leq y<b"))}\\) where \\(a\\) is in the interval, but not \\(b\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `\\((a,b] = ${escape(TeX.set("y", "a< y\\leq b"))}\\) where \\(b\\) is in the interval, but not \\(a\\).`;
        }
      })}`;
    }
  })}</ul> ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 16 }, {}, {
        default: () => {
          return `An interval of ${escape(TeX.R)} is visualized by a segment on a number line.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `<img style="width:min(400px, 90vw);" src="/notes/maths/sets/real/interval.svg" alt="">`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 18 }, {}, {
        default: () => {
          return `The number \\((b-a)\\) is called the <em data-svelte-h="svelte-djaw3">length of any of the intervals</em> \\((a,b), [a,b], [a,b)\\)
					or \\((a,b]\\).`;
        }
      })}`;
    }
  })}</section> ${!$presentationMode ? `<div class="youtube svelte-gkd15d" data-svelte-h="svelte-9ayz82"><iframe width="420" height="300" src="https://www.youtube.com/embed/w4SBKulJJh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``} ${$presentationMode ? `<div class="slate"></div>` : ``}</div> <section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section> ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-gkd15d"></div>` : ``} </article>`;
});
export {
  Page as default
};
