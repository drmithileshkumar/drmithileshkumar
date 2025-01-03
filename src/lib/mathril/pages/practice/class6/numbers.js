//@ts-nocheck
import {randNum, randInt, gcd, shuffle, randSubset, permute, digits, nDigits} from '$lib/mathril/utils/matlib/common';
import { Arithmetic } from '$lib/mathril/utils/matlib/arithmetic'
import { NT } from '$lib/mathril/utils/matlib/nt';
import { factor, divisors } from '$lib/mathril/utils/matlib/nt';
import { problems } from '$lib/mathril/utils/practiceproblem/stores';
let problemset = {
    s: "",
    o: {
            'A': '',
            'B': "",
            'C': "",
            'D': ''
        },
    c: ""
};
export const numbers = (problemnumber) => {
    let N = 29;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n1 = randInt(1000000, 100000);
            let n2 = randInt(n1 - 1, 10000);
            let n3 = randInt(n2 - 1, 1000);
            let n4 = randInt(n3 - 1, 100);

            let n = [n1, n2, n3, n4];
            n = shuffle(n);
            let str = n[0] + ', ' + n[1] + ', ' + n[2] + ', ' + n[3];
            values[0] = n1;
            values[1] = n2;
            values[2] = n3;
            values[3] = n4;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `Which is the greatest number among ${str}?`;
            break;
        }
        case 1: {
            let digits = randSubset(10, 4);
            let permutations = permute(digits);
            let numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * arr[2] + arr[3]);
            numbers.sort((a, b) => b - a);

            let n1 = numbers[0];
            let n2 = numbers[1];
            let n3 = numbers[2];
            let n4 = numbers[0] + 1;

            // let n = [n1, n2, n3, n4];
            // n = shuffle(n);
            // let str = n[0] + ', ' + n[1] + ', ' + n[2] + ', ' + n[3];
            values[0] = n1;
            values[1] = n2;
            values[2] = n3;
            values[3] = n4;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            digits = shuffle(digits);
            problemset.s = `Which is the greatest number made using ${digits[0]}, ${digits[1]}, ${digits[2]} and ${digits[3]}?`;
            break;
        }
        case 2: {
            let digits = randSubset(10, 4);
            let permutations = permute(digits);
            let numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * arr[2] + arr[3]);
            numbers.sort((a, b) => a - b);

            let n1 = numbers[0];
            let n2 = numbers[1];
            let n3 = numbers[2];
            let n4 = numbers[0] + 1;

            // let n = [n1, n2, n3, n4];
            // n = shuffle(n);
            // let str = n[0] + ', ' + n[1] + ', ' + n[2] + ', ' + n[3];
            values[0] = n1;
            values[1] = n2;
            values[2] = n3;
            values[3] = n4;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            digits = shuffle(digits);
            problemset.s = `Which is the smallest number made using ${digits[0]}, ${digits[1]}, ${digits[2]} and ${digits[3]}?`;
            break;
        }
        case 3: {
            let places = ['ones', 'tens', 'hundreds', 'thousands'];
            let place = places[randInt(3, 0)];
            let digits = randSubset(10, 4);
            let lastDigit = digits.pop(); 
            let permutations = permute(digits);
            let numbers;
            switch(place) {
                case 'ones': {
                    numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * arr[2] + lastDigit);
                    break;
                }
                case 'tens': {
                    numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * lastDigit + arr[2]);
                    break;
                }
                case 'hundreds': {
                    numbers = permutations.map((arr) => 1000 * arr[0] + 100 * lastDigit + 10 * arr[2] + arr[1]);
                    break;
                }
                case 'thousands': {
                    numbers = permutations.map((arr) => 1000 * lastDigit + 100 * arr[1] + 10 * arr[2] + arr[0]);
                    break;
                }
            }
            // let numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * arr[2] + arr[3]);
            numbers.sort((a, b) => a - b);

            let n1 = numbers[0];
            let n2 = numbers[1];
            let n3 = numbers[2];
            let n4 = numbers[0] + 1;

            // let n = [n1, n2, n3, n4];
            // n = shuffle(n);
            // let str = n[0] + ', ' + n[1] + ', ' + n[2] + ', ' + n[3];
            values[0] = n1;
            values[1] = n2;
            values[2] = n3;
            values[3] = n4;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            digits = shuffle(digits);
            problemset.s = `Which is the smallest number made using ${digits[0]}, ${digits[1]}, ${digits[2]} and ${lastDigit} with ${lastDigit} at the ${place} place?`;
            break;
        }
        case 4: {
            let places = ['ones', 'tens', 'hundreds', 'thousands'];
            let place = places[randInt(3, 0)];
            let digits = randSubset(10, 4);
            let lastDigit = digits.pop(); 
            let permutations = permute(digits);
            let numbers;
            switch(place) {
                case 'ones': {
                    numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * arr[2] + lastDigit);
                    break;
                }
                case 'tens': {
                    numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * lastDigit + arr[2]);
                    break;
                }
                case 'hundreds': {
                    numbers = permutations.map((arr) => 1000 * arr[0] + 100 * lastDigit + 10 * arr[2] + arr[1]);
                    break;
                }
                case 'thousands': {
                    numbers = permutations.map((arr) => 1000 * lastDigit + 100 * arr[1] + 10 * arr[2] + arr[0]);
                    break;
                }
            }
            // let numbers = permutations.map((arr) => 1000 * arr[0] + 100 * arr[1] + 10 * arr[2] + arr[3]);
            numbers.sort((a, b) => b - a );

            let n1 = numbers[0];
            let n2 = numbers[1];
            let n3 = numbers[2];
            let n4 = numbers[0] + 1;

            // let n = [n1, n2, n3, n4];
            // n = shuffle(n);
            // let str = n[0] + ', ' + n[1] + ', ' + n[2] + ', ' + n[3];
            values[0] = n1;
            values[1] = n2;
            values[2] = n3;
            values[3] = n4;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            digits = shuffle(digits);
            problemset.s = `Which is the largest number made using ${digits[0]}, ${digits[1]}, ${digits[2]} and ${lastDigit} with ${lastDigit} at the ${place} place?`;
            break;
        }
        case 5: {
            let n1 = randInt(10000, 100);
            let n2 = randInt(10000, 100);
            let n3 = randInt(10000, 100);
            let n4 = randInt(10000, 100);
            let nums = [n1, n2, n3, n4];
            let nums1 = [n1, n2, n3, n4];
            let asc = nums.sort((a, b) => a - b);
            let des = nums1.sort((a, b) => b - a);
            let ascp = [asc[3], asc[1], asc[2], asc[0]];
            let desp = [des[3], des[0], des[1], des[2]];
            
            values[0] = `${asc[0]}, ${asc[1]}, ${asc[2]}, ${asc[3]}`;
            values[1] = `${des[0]}, ${des[1]}, ${des[2]}, ${des[3]}`;
            values[2] = `${ascp[0]}, ${ascp[1]}, ${ascp[2]}, ${ascp[3]}`;
            values[3] = `${desp[0]}, ${desp[1]}, ${desp[2]}, ${desp[3]}`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Arrange ${n1}, ${n2}, ${n3}, and ${n4} in ascending order?`;
            break;
        }
        case 6: {
            let n1 = randInt(10000, 100);
            let n2 = randInt(10000, 100);
            let n3 = randInt(10000, 100);
            let n4 = randInt(10000, 100);
            let nums = [n1, n2, n3, n4];
            let nums1 = [n1, n2, n3, n4];
            let asc = nums.sort((a, b) => a - b);
            let des = nums1.sort((a, b) => b - a);
            let ascp = [asc[3], asc[1], asc[2], asc[0]];
            let desp = [des[3], des[0], des[1], des[2]];
            
            values[0] = `${des[0]}, ${des[1]}, ${des[2]}, ${des[3]}`;
            values[1] = `${asc[0]}, ${asc[1]}, ${asc[2]}, ${asc[3]}`;
            values[2] = `${ascp[0]}, ${ascp[1]}, ${ascp[2]}, ${ascp[3]}`;
            values[3] = `${desp[0]}, ${desp[1]}, ${desp[2]}, ${desp[3]}`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Arrange ${n1}, ${n2}, ${n3}, and ${n4} in descending order?`;
            break;
        }
        case 7: {
            let expr = Arithmetic.randomArithmetic(10, 2, ['+', '-', '*'], 2);
            let val = expr.value();
            values[0] = val;
            values[1] = val - 1;
            values[2] = val + 1;
            values[3] = val + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Evaluate \\(${expr.str()}\\)`
            break;
        }
        case 8: {
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
            // let probPrimes = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            //                   3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            //                   5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            //                   7, 7, 7, 7, 7, 7, 7, 7, 7,
            //                  11,11,11,11,11,11,11,11,
            //                  13,13,13,13,13,13,13,
            //                  17,17,17,17,17,17,
            //                  19,19,19,19,19,
            //                  23,23,23,23,
            //                  29,29,29,
            //                  31,31,
            //                  37  ];
            let nPrimes = 3;
            let pPl = primes.length - 1;
            let randIndices = randSubset(pPl, nPrimes);
            
            let p1 = primes[randIndices[0]];
            let p2 = primes[randIndices[1]];
            let p3 = primes[randIndices[2]];
            let n = p1 * p2 * p3;
            let factors = [1, p1, p2, p3, p1 * p2,  p1 * p3, p2 * p3, p1 * p2 * p3];
            let fl = factors.length - 1;
            let factIndices = randSubset(fl, 3);

            let nonFactor = 1;
            while(factors.indexOf(nonFactor) !== -1) {
                nonFactor = randInt(n, 2);
            }
            values[0] = nonFactor;
            values[1] = factors[factIndices[0]];
            values[2] = factors[factIndices[1]];
            values[3] = factors[factIndices[2]];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which is not a factor of ${n} ?`;
            break;
        }
        case 9: {
            let n = randInt(20, 2);
            let mparts = randSubset(10, 4);
            values[0] = n * mparts[1] + 1;
            values[1] = n * mparts[0] 
            values[2] = n * mparts[3]
            values[3] = n * mparts[2]

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which is not a multiple of ${n} ?`;
            break;
        }
        case 10: {
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            let nPrimes = 3;
            let pPl = primes.length - 1;
            let randIndices = randSubset(pPl, nPrimes);
            let notPrime = 2;
            while(primes.indexOf(notPrime) !== -1) {
                notPrime = randInt(97, 4);
            }
            values[0] = notPrime;
            values[1] = primes[randIndices[0]];
            values[2] = primes[randIndices[1]];
            values[3] = primes[randIndices[2]];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which is a not a prime?`
            break;
        }
        case 11: {
            
            values[0] = randInt(1000, 1) * 10;
            values[1] = randInt(1000, 1) * 10 + 1;
            values[2] = randInt(1000, 1) * 10 - 1;
            values[3] = randInt(1000, 1) * 10 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 10?`
            break;
        }
        case 12: {
            
            values[0] = randInt(1000, 1) * 5;
            values[1] = randInt(1000, 1) * 5 + 1;
            values[2] = randInt(1000, 1) * 5 - 1;
            values[3] = randInt(1000, 1) * 5 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 5?`
            break;
        }
        case 13: {
            
            values[0] = randInt(1000, 1) * 2;
            values[1] = randInt(1000, 1) * 2 + 1;
            values[2] = randInt(1000, 1) * 2 - 1;
            values[3] = randInt(1000, 1) * 2 + 3;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 2?`
            break;
        }
        case 14: {
            
            values[0] = randInt(1000, 1) * 3;
            values[1] = randInt(1000, 1) * 3 + 1;
            values[2] = randInt(1000, 1) * 3 - 1;
            values[3] = randInt(1000, 1) * 3 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 3?`
            break;
        }
        case 15: {
            
            values[0] = randInt(1000, 1) * 6;
            values[1] = randInt(1000, 1) * 6 + 1;
            values[2] = randInt(1000, 1) * 6 - 1;
            values[3] = randInt(1000, 1) * 6 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 6?`
            break;
        }
        case 16: {
            
            values[0] = randInt(1000, 1) * 8;
            values[1] = randInt(1000, 1) * 8 + 1;
            values[2] = randInt(1000, 1) * 8 - 1;
            values[3] = randInt(1000, 1) * 8 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 8?`
            break;
        }
        case 17: {
            
            values[0] = randInt(1000, 1) * 9;
            values[1] = randInt(1000, 1) * 9 + 1;
            values[2] = randInt(1000, 1) * 9 - 1;
            values[3] = randInt(1000, 1) * 9 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 9?`
            break;
        }
        case 18: {
            
            values[0] = randInt(1000, 1) * 11;
            values[1] = randInt(1000, 1) * 11 + 1;
            values[2] = randInt(1000, 1) * 11 - 1;
            values[3] = randInt(1000, 1) * 11 + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which of the following number is divisible by 11?`
            break;
        }
        case 19: {
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            let nPrimes = 5;
            let pPl = primes.length - 1;
            let randIndices = randSubset(pPl, nPrimes);
            randIndices = shuffle(randIndices);
            let n1 = primes[randIndices[0]] * primes[randIndices[1]] * primes[randIndices[2]];
            let n2 = primes[randIndices[4]] * primes[randIndices[3]] * primes[randIndices[2]];
            values[0] = primes[randIndices[2]];
            values[1] = primes[randIndices[0]];
            values[2] = primes[randIndices[1]];
            values[3] = primes[randIndices[3]];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which is a common factor of ${n1} and ${n2}?`
            break;
        }
        case 20: {
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            let nPrimes = 5;
            let pPl = primes.length - 1;
            let randIndices = randSubset(pPl, nPrimes);
            randIndices = shuffle(randIndices);
            let n1 = primes[randIndices[0]] * primes[randIndices[1]] * primes[randIndices[2]];
            let n2 = primes[randIndices[4]] * primes[randIndices[3]] * primes[randIndices[2]];
            let n3 = primes[randIndices[1]] * primes[randIndices[3]] * primes[randIndices[2]];
            values[0] = primes[randIndices[2]];
            values[1] = primes[randIndices[0]];
            values[2] = primes[randIndices[1]];
            values[3] = primes[randIndices[3]];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which is a common factor of ${n1}, ${n2} and ${n3}?`
            break;
        }
        case 21: {
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            let nPrimes = 4;
            let pPl = primes.length - 1;
            let randIndices = randSubset(pPl, nPrimes);
            randIndices = shuffle(randIndices);
            values[0] = primes[randIndices[0]] * primes[randIndices[1]] * primes[randIndices[2]];
            values[1] = primes[randIndices[0]] * primes[randIndices[1]] * primes[randIndices[3]];
            values[2] = primes[randIndices[0]] * primes[randIndices[3]] * primes[randIndices[2]];
            values[3] = primes[randIndices[3]] * primes[randIndices[1]] * primes[randIndices[2]];
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which is a common multiple of ${primes[randIndices[0]]}, ${primes[randIndices[1]]} and ${primes[randIndices[2]]}?`
            break;
        }
        case 22: {
            let n;
            let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            let smallPrimes = [2, 3, 5, 7];
            let mediumPrimes = [11, 13, 17, 19];
            
            let iSP = randSubset(4,2);
            let iMP = randInt(3, 0);
            let sPowers = [];
            for(let i = 0; i < 2; i++) {
                sPowers.push(randInt(4, 1));
            }
            let mPower = 1;
            n = Math.pow(smallPrimes[iSP[0]], sPowers[0]) * Math.pow(smallPrimes[iSP[1]], sPowers[1]) * mediumPrimes[iMP];
            let prs = [smallPrimes[iSP[0]], smallPrimes[iSP[1]], mediumPrimes[iMP]];
            let powers = [...sPowers, 1];
            let factorization = [];
            for(let i = 0; i < prs.length; i++) {
                for(let j = 0; j < powers[i]; j++) {
                    factorization.push(prs[i]);
                }
            }
            let wfactorization1 = [...factorization];
            let ri1 = randInt(factorization.length - 1, 0);
            wfactorization1[ri1] = wfactorization1[ri1] + 1;
            let wfactorization2 = [...factorization];
            let ri2 = randInt(factorization.length - 1, 0);
            wfactorization1[ri2] = wfactorization1[ri2] + 1;
            let wfactorization3 = [...factorization];
            let ri3 = randInt(factorization.length - 1, 0);
            wfactorization1[ri3] = wfactorization1[ri3] + 1;
            values[0] = `\\(${factorization.join('\\times ')}\\)`;
            values[1] = `\\(${wfactorization1.join('\\times ')}\\)`;
            values[2] = `\\(${wfactorization2.join('\\times ')}\\)`;
            values[3] = `\\(${wfactorization3.join('\\times ')}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `Which is correct prime factorization of ${n}?`
            break;
        }
        case 23: {
            let nt = new NT(randInt(100, 2));
            let mt = new NT(randInt(100, 2));
            let hcf = nt.gcd(mt);
            values[0] = hcf.n;
            values[1] = hcf.n + 1;
            values[2] = hcf.n - 1;
            values[3] = hcf.n + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `What is the HCF of ${mt.n} and ${nt.n}?`
            break;
        }
        case 24: {
            let nt = new NT(randInt(100, 2));
            let mt = new NT(randInt(100, 2));
            let rt = new NT(randInt(100, 2));
            let hcf1 = nt.gcd(mt);
            let hcf = hcf1.gcd(rt);
            values[0] = hcf.n;
            values[1] = hcf.n + 1;
            values[2] = hcf.n - 1;
            values[3] = hcf.n + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `What is the HCF of ${mt.n}, ${nt.n} and ${rt.n}?`
            break;
        }
        case 25: {
            let nt = new NT(randInt(100, 2));
            let mt = new NT(randInt(100, 2));
            let hcf = nt.lcm(mt);
            values[0] = hcf.n;
            values[1] = hcf.n + 1;
            values[2] = hcf.n - 1;
            values[3] = hcf.n + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `What is the LCM of ${mt.n} and ${nt.n}?`
            break;
        }
        case 26: {
            let nt = new NT(randInt(100, 2));
            let mt = new NT(randInt(100, 2));
            let rt = new NT(randInt(100, 2));
            let hcf1 = nt.lcm(mt);
            let hcf = hcf1.lcm(rt);

            values[0] = hcf.n;
            values[1] = hcf.n + 1;
            values[2] = hcf.n - 1;
            values[3] = hcf.n + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `What is the LCM of ${mt.n}, ${nt.n} and ${rt.n}?`
            break;
        }
        case 27: {
            let nt = new NT(randInt(100, 2));
            let mt = new NT(randInt(100, 2));
            let rt = new NT(randInt(100, 2));
            let hcf1 = nt.lcm(mt);
            let hcf = hcf1.lcm(rt);
            let lcmDigits = digits(hcf.n).length;
            let a = randInt(3, 0);
            let k = a + lcmDigits;
            // divide 10^(k-1) by hcf.n
            // mul = Math.floor(^) + 1
            let f = Math.pow(10, k - 1) / hcf.n;
            let mul = Math.floor(f) + 1;
            let cor = hcf.n * mul;
            values[0] = cor;
            values[1] = (hcf.n + 1) * (mul - 1);
            values[2] = cor - 1;
            values[3] = cor + 1;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            problemset.s = `What is the smallest ${k}-digit number which is divisible by ${mt.n}, ${nt.n} and ${rt.n}?`
            break;
        }
        case 28: {
            let nt = new NT(randInt(100, 2));
            let mt = new NT(randInt(100, 2));
            let rt = new NT(randInt(100, 2));
            let a = nt.n, b = mt.n, c = rt.n;
            let hcf1 = nt.gcd(mt);
            let hcf = hcf1.gcd(rt);
            values[0] = hcf.n;
            values[1] = hcf.n + 1;
            values[2] = hcf.n - 1;
            values[3] = hcf.n + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            }
            let statements = [
                `A school is organizing a field trip and needs to divide ${a}, ${b}, and ${c} students into equal-sized groups. What is the largest possible group size, ensuring every group has the same number of students?`,
                `A factory has ${a}, ${b}, and ${c} sets of machines. The factory manager wants to arrange the sets in the storage area so that each row has the same number of sets. What is the greatest number of sets that can be placed in each row?`,
                `A gardener is planting ${a}, ${b}, and ${c} rows of trees in a garden. To maintain a uniform look, he wants to plant an equal number of trees in each row. What is the maximum number of trees he can plant in each row?`,
                `A baker is packaging ${a}, ${b}, and ${c} cookies into boxes. To ensure the boxes have an equal number of cookies, what is the largest number of cookies that can be placed in each box?`,
                `A construction company has ${a}, ${b}, and ${c} identical cement bags. They want to distribute the bags among three different construction sites, with each site receiving the same number of bags. What is the greatest number of bags that can be given to each site?`,
                `A farmer has ${a}, ${b}, and ${c} baskets of fruits. He wants to evenly distribute the fruits among his workers, ensuring each worker receives an equal number of baskets. What is the maximum number of baskets each worker can get?`,
                `Three friends are collecting ${a}, ${b}, and ${c} stamps. They want to organize their collections in such a way that each friend has an equal number of stamps. What is the largest number of stamps they can share equally?`,
                `A shopkeeper has ${a}, ${b}, and ${c} packets of candies. She wants to arrange them on the shelves so that each shelf has an equal number of packets. What is the maximum number of packets she can place on each shelf?`,
                `A music teacher has ${a}, ${b}, and ${c} music sheets. The teacher wants to divide the sheets equally among three music students. What is the greatest number of sheets each student can receive?`,
                `A warehouse contains ${a}, ${b}, and ${c} boxes of toys. The warehouse manager wants to arrange the boxes in rows, with each row having the same number of boxes. What is the largest number of boxes that can be placed in each row?`
            ]
            problemset.s = statements[randInt(9, 0)]
            break;
        }
    }
    problemset = problemset;
    return problemset;
}