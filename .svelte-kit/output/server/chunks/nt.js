const seive = (N) => {
  if (N <= 1 || N % 1 !== 0) return [];
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
const factorString = (factors) => {
  if (factors.length === 0) return "";
  let str = factors[0].prime + "^{" + factors[0].power + "}";
  for (let i = 1; i < factors.length; i++) {
    str += "\\times" + factors[i].prime + "^{" + factors[i].power + "}";
  }
  return str;
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
class NT {
  constructor(n = 0) {
    this.n = n;
  }
  add(m) {
    return new NT(this.n + m.n);
  }
  sub(m) {
    return new NT(this.n - m.n);
  }
  mul(m) {
    return new NT(this.n * m.n);
  }
  div(m) {
    return new Q(this.n, m.n);
  }
  gcd(m) {
    let a = this.n;
    let b = m.n;
    if (a < 0) {
      a = -a;
    }
    if (b < 0) {
      b = -b;
    }
    while (true) {
      if (b === 0) {
        return new NT(a);
      }
      a %= b;
      if (a === 0) {
        return new NT(b);
      }
      b %= a;
    }
  }
  lcm(m) {
    return new NT(this.n * m.n / this.gcd(m).n);
  }
  seive() {
    let N = this.n;
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
  }
  factor() {
    let N = this.n;
    let primes = this.seive();
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
  }
  isPrime() {
    let factors = this.factor();
    if (factors.length != 1) return false;
    return factors[0].power === 1;
  }
  isSquare() {
    return Math.sqrt(this.n) % 1 === 0;
  }
  filterSquare = () => {
    let factors = this.factor();
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
  divisor = (divs, previousPowers, pfactors) => {
    if (previousPowers.length === 1 && previousPowers[0] > pfactors[0].power) {
      return;
    }
    if (previousPowers.length > 0 && previousPowers[previousPowers.length - 1] > pfactors[previousPowers.length - 1].power) {
      previousPowers.pop();
      previousPowers[previousPowers.length - 1]++;
      this.divisor(divs, previousPowers, pfactors);
    } else if (previousPowers.length === pfactors.length) {
      if (previousPowers[previousPowers.length - 1] === 0) {
        let prefactor = 1;
        for (let j = 0; j < pfactors.length - 1; j++) {
          prefactor *= Math.pow(pfactors[j].prime, previousPowers[j]);
        }
        for (let i = 0; i <= pfactors[pfactors.length - 1].power; i++) {
          divs.push(prefactor * Math.pow(pfactors[pfactors.length - 1].prime, i));
        }
        previousPowers.pop();
        previousPowers[previousPowers.length - 1]++;
        this.divisor(divs, previousPowers, pfactors);
      } else {
        previousPowers.pop();
        while (previousPowers[previousPowers.length - 1] > pfactors[previousPowers.length - 1]) {
          previousPowers.pop();
        }
        if (previousPowers.length > 0) {
          previousPowers[previousPowers.length - 1]++;
          this.divisor(divs, previousPowers, pfactors);
        } else {
          return;
        }
      }
    } else {
      previousPowers.push(0);
      this.divisor(divs, previousPowers, pfactors);
    }
  };
  divisors = () => {
    let pfactors = this.factor();
    let divs = [];
    let previousPowers = [];
    this.divisor(divs, previousPowers, pfactors);
    divs.sort((a, b) => a - b);
    return divs;
  };
  str() {
    let factors = this.factor();
    let str1 = factors[0].prime + "^{" + factors[0].power + "}";
    for (let i = 1; i < factors.length; i++) {
      str1 += "\\times" + factors[i].prime + "^{" + factors[i].power + "}";
    }
    return str1;
  }
  strExpanded() {
    let factors = this.factor();
    let prms = [];
    for (let i = 0; i < factors.length; i++) {
      for (let j = 0; j < factors[i].power; j++) {
        prms.push(factors[i].prime);
      }
    }
    return prms.join("\\times ");
  }
}
export {
  NT as N,
  factorString as a,
  filterSquare as b,
  factor as f
};
