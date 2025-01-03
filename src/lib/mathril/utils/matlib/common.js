//@ts-nocheck
import { Q } from './fraction';
const isEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i])
                return false;
        }
        return true;
    }
}
const randNum = (max, shift, f = true, sf = 2) => {
    let temp = Math.random() * max + shift;
    return f ? temp.toFixed(sf) : Math.floor(temp);
}
const randInt = (max, min, nonzero = false) => {//inclusive max and min
    if (min >= max) return Math.floor(max);
    let r, out;
    r = Math.random() * (max - min + 1);
    out = Math.floor(min + r);
    if(nonzero) {
        while(out === 0) {
            r = Math.random() * (max - min + 1);
            out = Math.floor(min + r);
        }
    }
    return out;
}
const pickWith = (arr) => {//pick an index
    let n = arr.length;
    let k = randInt(n - 1, 0);
    return k;
}
const pickWithout = (arr) => {// pick an element and return new array as well
    let n = arr.length;
    let k = randInt(n - 1, 0);
    let elem = arr[k];
    arr.splice(k, 1);
    return { newArr: arr, elem: elem };
}
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
    // console.log('randSubset...', set);
    let temp = [];
    let t;
    for (let i = 0; i < k; i++) {
        t = pickWithout(set);
        set = t.newArr;
        temp.push(t.elem);
        // console.log('randSubset...', set);
    }
    temp.sort((a, b) => a - b);
    return temp;
}
const texExpr = (expr) => { //['operation', expr1, expr2, ..., exprN]
    if (typeof (expr) != 'object') {
        return '';
    }
    if (expr.length == 1) {
        return expr[0];
    } else {
        let op = expr[0];
        expr.shift();
        switch (op) {
            case '+': {
                return expr.reduce((final, current) => final + '+' + texExpr(current), '');  //texExpr(expr[1]) + '+' + texExpr(expr[2]);
            }
            case '-': {
                return expr.reduce((final, current) => final + '-' + texExpr(current), '');
            }
            case '*': {
                return expr.reduce((final, current) => final + texExpr(current), '');
            }
            case '/': {
                return '\\frac{' + texExpr(expr[0]) + '}{' + texExpr(expr[1]) + '}';
            }
            case '^': {
                return texExpr(expr[0]) + '^{' + texExpr(expr[1]) + '}';
            }
        }
    }
}
const evalExpr = (expr) => {
    if (typeof (expr) != 'object') {
        return expr;
    } else {
        let op = expr[0];
        expr.shift();
        switch (op) {
            case '+': {
                return expr.map(ex => evalExpr(ex)).reduce((sum, current) => sum + current);
            }
            case '-': {
                return evalExpr(expr[0]) - evalExpr(expr[1]);
            }
            case '*': {
                return expr.map(ex => evalExpr(ex)).reduce((prod, current) => prod * current);
            }
            case '/': {
                return evalExpr(expr[0]) / evalExpr(expr[1]);
            }
            case '^': {
                return Math.pow(evalExpr(expr[0]), evalExpr(expr[1]));
            }
            case '|': {
                return Math.abs(evalExpr(expr[0]));
            }
        }
    }
}
const scientificTex = (num, sf = 2) => {
    let [exp, pow] = num.toExponential(sf).split('e').map(i => Number(i))
    return `\\(${exp} \\times 10^{${pow}}\\)`;
}

const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { var temp = a; a = b; b = temp; }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
const lcm = (a, b) => {
    return a * b / gcd(a, b);
}
const fraction = (maxNum = 10, maxDen = 10) => {
    let num = Math.floor(Math.random() * maxNum + 1);
    let den = Math.floor(Math.random() * maxDen + 1);
    if (den == 1) {
        return num;
    }
    if (num % den == 0) {
        return 1;
    }
    let g = gcd(num, den);
    return [num / g, den / g];
}
const reducedQ = (num, den, alone = false) => {
    if (num == 0) {
        return 0;
    } else if (num == den) {
        return !alone ? '' : '1';
    } else if (num == 1) {
        return `\\frac{1}{${den}}`;
    } else if (den == 1) {
        return num;
    } else if (num % den == 0) {
        return num / den;
    } else {
        let g = gcd(num, den);
        return `\\frac{${num / g}}{${den / g}}`;
    }
}
const texQ = (f) => {
    if (f == 1) {
        return '';
    }
    if (typeof (f) == 'number' || typeof (f) == 'string') {
        return f;
    } else {
        return '\\frac{' + f[0] + '}{' + f[1] + '}';
    }
}
const texPower = (a, b) => {
    if (b == 1) {
        return a;
    }
    if (typeof (b) == 'number') {
        return a + '^{' + b + '}';
    } else if (typeof (b) == 'string') {
        return a + '^{' + b + '}';
    } else {
        return a + '^{\\frac{' + b[0] + '}{' + b[1] + '}}';
    }

}
const ithDigit = (n, i) => {
    let k = Math.floor(n / Math.pow(10, i - 1));
    return k - 10 * Math.floor(k / 10);
}
const digits = (n) => {//number of digits of n
    if(n === 0) return [0];
    let d = [];
    let i = 0;
    while (Math.floor(n / Math.pow(10, i)) > 0) {
        d.push(ithDigit(n, i + 1));
        i++;
    }

    return d;
}
const nDigits = (digits) => {
    let n = Math.random().toPrecision(digits);
    return Math.floor(n * Math.pow(10, n.length - 2));
}
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
const setEqual = (s1, s2) => {
    return s1.size === s2.size && [...s1].every((x) => s2.has(x));
}
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
}
const pythagoreanTriplet = (k = 100) => {
    let p,b,h;
    let m = randInt(k, 2);
    let n = randInt(m - 1, 1);
    p = m * m - n * n;
    b = 2 * m * n;
    h = m * m + n * n;
    return {p, b, h};
}
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
    return {a,b,c,d}
}
const kparts = (n, k) => { // n1 +...+nk = n
    if(k > n) return [];
    let parts = [];
    let budget = n;
    let remaining = k;
    parts.push(randInt(budget - remaining + 1, remaining - 1));
    for(let i = 1; i < k - 1; i++) {
        
        budget -= parts[i - 1];
        remaining--;
        parts.push(randInt(budget - remaining + 1, remaining - 1));
    }
    budget -= parts[k - 2];
    parts.push(budget);
    return parts;
}
const kfractions = (start, end, k, arr) => {//start and end are fractions
    if(k <= 0) return arr;
    let r = Math.random();
    let q = new Q(Math.floor(r * 100), 100);
    q.reduced();
    start = q.mul(end.sub(start)).add(start);
    arr = [...arr, start];
    k = k - 1;
    return kfractions(start, end, k, arr);
}
export { directionRatios, kparts, pythagoreanTriplet, permute, digits, ithDigit, setEqual, shuffle, randInt, randSubset, reducedQ, isEqual, randNum, texExpr, evalExpr, scientificTex, gcd, lcm, fraction, texQ, texPower, nDigits }
