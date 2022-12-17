

export const seive = (N) => {
    if(N <= 1) return [];
    var numbers = new Array(N);

    for (var i = 0; i < N; i++) {
        numbers[i] = true;
    }

    for (var i = 2; i < Math.sqrt(N); i++) {
        for (var j = i*i; j < N; j += i) {
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
export const factor = (N) => {
    if(N <= 1) return [{prime: N, power: 0}];
    let primes = seive(N);
    let factors = [];
    for(let k = 0; k < primes.length && N > 1; k++ ) {
        let p = primes[k];
        if( N % p === 0) {
            let fact = { prime: p, power: 0};
            while( N % p === 0) {
                fact.power++;
                N /= p;
            }
            factors.push(fact);
        }
    }
    if( N > 1 ) {
        factors.push({prime: N, power: 1});
    }
    return factors;
}
export const isPrime = (N) => {
    let factors = factor(N);
    if(factors.length != 1) return false;
    return factors[0].power === 1;
}
export const isSquare = (N) => {
    return Math.sqrt(N) % 1 === 0;
}
export const filterSquare = (N) => {
    let factors = factor(N);
    let squares = [];
    let nonSquares = [];
    for(let i = 0; i < factors.length; i++) {
        if(factors[i].power > 1) {
            squares.push({prime: factors[i].prime, power: Math.floor(factors[i].power/2)});
        }
        factors[i].power = factors[i].power % 2;
    }
    nonSquares = factors.filter(factor => factor.power == 1);
    return {a: squares, r: nonSquares};
}
// export class NT {
//     constructor(n = 0) {
//         this.n = n;
//     }
//     add(m) {
//         return new NT(this.n + m.n);
//     }
//     sub(m) {
//         return new NT(this.n - m.n);
//     }
//     mul(m) {
//         return new NT(this.n * m.n);
//     }
//     div(m) {
//         return new Q(this.n, m.n);
//     }
//     gcd(m) {
//         let a = this.n;
//         let b = m.n;
//         if (a < 0) { a = -a; }
//         if (b < 0) { b = -b; }
//         while (true) {
//             if (b === 0) { return new NT(a); }
//             a %= b;
//             if (a === 0) { return new NT(b); }
//             b %= a;
//         }
//     }
//     lcm(m) {
//         return new NT(this.n * m.n / this.gcd(m));
//     }
//     seive() {
//         let N = this.n;
//         var numbers = new Array(N);

//         for (var i = 0; i < N; i++) {
//             numbers[i] = true;
//         }

//         for (var i = 2; i < Math.sqrt(N); i++) {
//             for (var j = i*i; j < N; j += i) {
//             numbers[j] = false;
//             }
//         }

//         var primes = [];
//         for (var i = 2; i < N; i++) {
//             if (numbers[i]) {
//             primes.push(i);
//             }
//         }

//         return primes;
//     }
//     factor() {
//         let N = this.n;
//         let primes = this.seive();
//         let factors = [];
//         for(let k = 0; k < primes.length && N > 1; k++ ) {
//             let p = primes[k];
//             if( N % p === 0) {
//                 let fact = { prime: p, power: 0};
//                 while( n % p === 0) {
//                     fact.power++;
//                     N /= p;
//                 }
//                 factors.push(fact);
//             }
//         }
//         if( N > 1 ) {
//             factors.push({prime: N, power: 1});
//         }
//         return factors;
//     }
//     isPrime() {
//         let factors = this.factor();
//         if(factors.length != 1) return false;
//         return factors[0].power === 1;
//     }
//     isSquare() {
//         return Math.sqrt(this.n) % 1 === 0;
//     }
// }