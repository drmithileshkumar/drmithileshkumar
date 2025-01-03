//@ts-nocheck
export const factorial = (n) => {
    let f = 1;
    if (n == 0 || n == 1) return f;
    for(let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}
export const npr = (n, r) => {
    let p = 1;
    if (r <= 0) return p;
    let t = n >= r ? r : n;
    for(let i = 0; i < t; i++) {
        p *= (n - i);
    }
    return p;
}
export const ncr = (n, r) => {
    return npr(n, r)/factorial(r);
}
export const kterm = (a, b, n, k) => {
    return ncr(n, r)*Math.pow(a, n-k + 1)*Math.pow(b, k - 1);
}
export const nprTex = (n, r) => {
    let p = '';
    if (r <= 0) return p + 1;
    let t = n >= r ? r : n;
    switch(t) {
        case 1: {
            p = n;
            break;
        }
        case 2: {
            p = (n - 1) + '\\cdot ' + n;
            break;
        }
        case 3: {
            p = (n - 2) + '\\cdot ' + (n - 1) + '\\cdot ' + n;
            break;
        }
        case 4: {
            p = (n - 3) + '\\cdot ' + (n - 2) + '\\cdot ' + (n - 1) + '\\cdot ' + n;
            break;
        }
        default: {
            p = (n - t + 1) + `\\cdot ` + (n - t + 2) + '\\cdot ' + (n - t + 3) + '\\cdots ' + n;
            break;
        }
    }
    
    return p;
}
export const factorialTex = (n) => {
    return n + '!';
}
export const ncrTex = (n, r) => {
    let p = '';
    if (r <= 0) return p + 1;
    if (r == 1) return n;
    if (r >= n) return n;
    return '\\frac{' + nprTex(n, r) + '}{' + factorialTex(r) + '}';
}
export const ktermTex = (a, b, n, k) => {
    let r = k - 1;
    let ns = n % 2 == 0 ? '' : '-';
    let n1s = ns == '' ? '-' : '';
    let rs = r % 2 == 0 ? '' : '-';
    let nrs = (n - r) % 2 ? '' : '-';
    if(r == 0) {
        if(a == 1) return 1;
        if(a == -1) return ns + 1;
        if(a < 0) return ns + `${Math.abs(a)}^{${n}}`;
        return `${a}^{${n}}`;
    } 
    if(r == 1) {
        
        if(a == 1) return `${n*b}`;
        if(a == -1) return b > 0 ? n1s + `${n*b}` : ns + `${n*Math.abs(b)}`;
        if(a < 0) return b > 0 ? n1s + `${n}\\cdot ${Math.abs(a)}^{${n-1}}\\cdot ${b}` : ns + `${n}\\cdot ${Math.abs(a)}^{${n-1}}\\cdot ${Math.abs(b)}`;
        return b > 0 ? `${n}\\cdot ${a}^{${n - 1}}\\cdot ${b}` : `-${n}\\cdot ${a}^{${n - 1}}\\cdot ${Math.abs(b)}`;
    } 
    if(r >= n) {
        if(b == 1) return 1;
        if(b == -1) return ns + 1;
        if(b < 0) return ns + `${Math.abs(b)}^{${n}}`;
        return `${b}^{${n}}`;
    }
    if(r == n - 1) {
        if(b == 1) return `${n*a}`;
        if(b == -1) return a > 0 ? n1s + `${n*a}` : ns + `${n*Math.abs(a)}`;
        if(b < 0) return a > 0 ? n1s + `${n}\\cdot ${a}\\cdot ${Math.abs(a)}^{${n-1}}` : ns + `${n}\\cdot ${Math.abs(a)}\\cdot ${Math.abs(a)}^{${n-1}}`;
        return a > 0 ? `${n}\\cdot ${a}\\cdot ${b}^{${n - 1}}` : `-${n}\\cdot ${Math.abs(a)}\\cdot ${b}^{${n - 1}}`;
    }
    if(a == 1) {
        if(b == 1) {
            return ncrTex(n, r);
        }
        if(b == -1) {
            return rs + ncrTex(n, r);
        }
        return b > 0 ? ncrTex(n, r) + `${b}^{${r}}` : rs + ncrTex(n, r) + `${Math.abs(b)}^{${r}}`;
    }
    if(a == -1) {
        if(b == 1) {
            return nrs + ncrTex(n, r);
        }
        if(b == -1) {
            return ns + ncrTex(n, r);
        }
        return b > 0 ? nrs + ncrTex(n, r) + `${b}^{${r}}` : ns + ncrTex(n, r) + `${Math.abs(b)}^{${r}}`;
    }
    if(a < 0) {
        if(b == 1) {
            return nrs + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}`;
        }
        if(b == -1) {
            return ns + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}`;
        }
        return b > 0 ? nrs + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}` + `${b}^{${r}}` : ns + ncrTex(n, r) + `${Math.abs(a)}^{${n - r}}` + `${Math.abs(b)}^{${r}}`;
    }
    if(a > 0) {
        if(b == 1) {
            return ncrTex(n, r) + `${a}^{${n - r}}`;
        }
        if(b == -1) {
            return rs + ncrTex(n, r)  + `${a}^{${n - r}}`;
        }
        return b > 0 ? ncrTex(n, r) + `${a}^{${n - r}}` + `${b}^{${r}}` : rs + ncrTex(n, r) + `${a}^{${n - r}}` + `${Math.abs(b)}^{${r}}`;
    }
}

export const cycle = (arr, k) => {
    let n = arr.length;
    let temp = [];
    for(let i = 0; i < n; i++) {
        temp.push(arr[(i + k) % n]);
    }
    return temp;
}