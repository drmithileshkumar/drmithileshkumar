import { Q } from "./fraction";
export const solveIneq = (a, b, ineq, set) => {
    return a > 0 ? posIneq(a, b, ineq, set) : negIneq(a, b, ineq, set);
}
export const negIneq = (a, b, ineq, set) => {
    let sols = [];
    switch(ineq) {
        case '<': 
            sols = posGIneq(-a, -b, set);
            break;
        case '<=':
            sols = posGEIneq(-a, -b, set);
            break;
        case '>':
            sols = posLIneq(-a, -b, set);
            break;
        case '>=':
            sols = posLEIneq(-a, -b, set);
            break;
    } 
    return sols;
}
export const posIneq = (a, b, ineq, set) => {
    let sols = [];
    switch(ineq) {
        case '<': 
            sols = posLIneq(a, b, set);
            break;
        case '<=':
            sols = posLEIneq(a, b, set); 
            break;
        case '>':
            sols = posGIneq(a, b, set);
            break;
        case '>=':
            sols = posGEIneq(a, b, set);
            break;
    } 
    return sols;
}
export const posLIneq = (a, b, set) => {
    let sols = [];
    switch(set) {
        case 'N':
            sols = posLIneqN(a, b);
            break;
        case 'Z':
            sols = posLIneqZ(a, b);

            break;
        case 'Z+':
            sols = posLIneqZp(a, b);
            break;
        case 'Q':
            sols = posLIneqQ(a, b);
            break;
        case 'Q+':
            sols = posLIneqQp(a, b);
            break;
        case 'R':
            sols = posLIneqR(a, b);
            break;
        case 'R+':
            sols = posLIneqRp(a, b);
            break;
    }
    return sols;
}
export const posLEIneq = (a, b, set) => {
    let sols = [];
    switch(set) {
        case 'N':
            sols = posLEIneqN(a, b);
            break;
        case 'Z':
            sols = posLEIneqZ(a, b);

            break;
        case 'Z+':
            sols = posLEIneqZp(a, b);
            break;
        case 'Q':
            sols = posLEIneqQ(a, b);
            break;
        case 'Q+':
            sols = posLEIneqQp(a, b);
            break;
        case 'R':
            sols = posLEIneqR(a, b);
            break;
        case 'R+':
            sols = posLEIneqRp(a, b);
            break;
    }
    return sols;
}
export const posLIneqN = (a, b) => {
    let sols = [];
    if(b/a < 1) {
        sols = ['\\{', '\\}'];
        return sols;
    } 
    else {
        if(b/a > 4) {
            sols = b % a != 0 ? [1, 2, '\\cdots', Math.floor(b/a)] : [1, 2, '\\cdots', Math.floor(b/a) - 1];
        } else {
            for(let i = 1; i < b/a; i++)
            sols.push(i);
        }
        sols = ['\\{', ...sols, '\\}']
        return sols;
    }
}
export const posLEIneqN = (a, b) => {
    let sols = [];
    if(b/a < 1) {
        sols = ['\\{', '\\}'];
        return sols;
    } 
    else {
        if(b/a > 4) {
            sols = [1, 2, '\\cdots', Math.floor(b/a)];
        } else {
            for(let i = 1; i <= b/a; i++)
            sols.push(i);
        }
        sols = ['\\{', ...sols, '\\}']
        return sols;
    }
}
export const posLIneqZp = (a, b) => {
    let sols = [];
    if(b/a < 0) {
        sols = ['\\{', '\\}'];
        return sols;
    } 
    else {
        if(b/a > 3) {
            sols = b % a != 0 ? [0, 1, '\\cdots', Math.floor(b/a)] : [0, 1, '\\cdots', Math.floor(b/a) - 1];
        } else {
            for(let i = 0; i < b/a; i++)
            sols.push(i);
        }
        sols = ['\\{', ...sols, '\\}']
        return sols;
    }
}
export const posLEIneqZp = (a, b) => {
    let sols = [];
    if(b/a < 0) {
        sols = ['\\{', '\\}'];
        return sols;
    } 
    else {
        if(b/a > 3) {
            sols = [0, 1, '\\cdots', Math.floor(b/a)];
        } else {
            for(let i = 0; i <= b/a; i++)
            sols.push(i);
        }
        sols = ['\\{', ...sols, '\\}']
        return sols;
    }
}

export const posLIneqQp = (a, b) => {
    let sols = [];
    if(b/a < 0) {
        sols = ['\\{', '\\}'];
        return sols;
    }
    else {
        let f = new Q(b, a);
        f.reduced();
        sols = ['[', 0, f, ')']
        return sols;
    }
}
export const posLEIneqQp = (a, b) => {
    let sols = [];
    if(b/a < 0) {
        sols = ['\\{', '\\}'];
        return sols;
    }
    else {
        let f = new Q(b, a);
        f.reduced();
        sols = ['[', 0, f, ']']
        return sols;
    }
}
export const posLIneqRp = (a, b) => {
    let sols = [];
    if(b/a < 0) {
        sols = ['\\{', '\\}'];
        return sols;
    }
    else {
        sols = ['[', 0, (b/a).toFixed(2), ')']
        return sols;
    }
}
export const posLEIneqRp = (a, b) => {
    let sols = [];
    if(b/a < 0) {
        sols = ['\\{', '\\}'];
        return sols;
    }
    else {
        sols = ['[', 0, (b/a).toFixed(2), ']']
        return sols;
    }
}
export const posLIneqZ = (a, b) => {
    return ['(', '-\\infty', Math.floor(b/a) - 1, ')'];
}
export const posLEIneqZ = (a, b) => {
    return ['(', '-\\infty', Math.floor(b/a), ']'];
}
export const posLIneqQ = (a, b) => {
    let f = new Q(b, a);
    f.reduced();
    return ['(', '-\\infty', f, ')'];
}
export const posLEIneqQ = (a, b) => {
    let f = new Q(b, a);
    f.reduced();
    return ['(', '-\\infty', f, ']'];
}
export const posLIneqR = (a, b) => {
    return ['(', '-\\infty', (b/a).toFixed(2), ')'];
}
export const posLEIneqR = (a, b) => {
    return ['(', '-\\infty', (b/a).toFixed(2), ']'];
}
export const posGIneq = (a, b, set) => {
    let sols = [];
    switch(set) {
        case 'N':
            sols = posGIneqN(a, b);
            break;
        case 'Z':
            sols = posGIneqZ(a, b);
            break;
        case 'Z+':
            sols = posGIneqZp(a, b);
            break;
        case 'Q':
            sols = posGIneqQ(a, b);
            break;
        case 'Q+':
            sols = posGIneqQp(a, b);
            break;
        case 'R':
            sols = posGIneqR(a, b);
            break;
        case 'R+':
            sols = posGIneqRp(a, b);
            break;
    }
    return sols;
}
export const posGEIneq = (a, b, set) => {
    let sols = [];
    switch(set) {
        case 'N':
            sols = posGEIneqN(a, b);
            break;
        case 'Z':
            sols = posGEIneqZ(a, b);
            break;
        case 'Z+':
            sols = posGEIneqZp(a, b);
            break;
        case 'Q':
            sols = posGEIneqQ(a, b);
            break;
        case 'Q+':
            sols = posGEIneqQp(a, b);
            break;
        case 'R':
            sols = posGEIneqR(a, b);
            break;
        case 'R+':
            sols = posGEIneqRp(a, b);
            break;
    }
    return sols;
}
export const posGIneqN = (a, b) => {
    let s = b < 0 ? 1 : b % a == 0 ? Math.ceil(b/a) + 1 : Math.ceil(b/a);
    let sols = ['\\{', s, s + 1, '\\cdots', '\\infty', '\\}'];
    return sols;
}
export const posGEIneqN = (a, b) => {
    let s = b < 0 ? 1 : Math.ceil(b/a);
    let sols = ['\\{', s, s + 1, '\\cdots', '\\infty', '\\}'];
    return sols;
}
export const posGIneqZp = (a, b) => {
    let s = b < 0 ? 0 : b % a == 0 ? Math.ceil(b/a) + 1 : Math.ceil(b/a);
    let sols = ['\\{', s, s + 1, '\\cdots', '\\infty', '\\}'];
    return sols;
}
export const posGEIneqZp = (a, b) => {
    let s = b < 0 ? 0 : Math.ceil(b/a);
    let sols = ['\\{', s, s + 1, '\\cdots', '\\infty', '\\}'];
    return sols;
}
export const posGIneqQp = (a, b) => {
    let f = new Q(b, a);
    f.reduced();
    let sols = b < 0 ? [ '[',0, '\\infty', ')'] : ['(', f, '\\infty', ')'];
    return sols;
}
export const posGEIneqQp = (a, b) => {
    let f = new Q(b, a);
    f.reduced();
    let sols = b < 0 ? [ '[',0, '\\infty', ')'] : ['[', f, '\\infty', ')'];
    return sols;
}
export const posGIneqRp = (a, b) => {
    let sols = b < 0 ? [ '[',0, '\\infty', ')'] : ['(', (b/a).toFixed(2), '\\infty', ')'];
    return sols;
}
export const posGEIneqRp = (a, b) => {
    let sols = b < 0 ? [ '[',0, '\\infty', ')'] : ['[', (b/a).toFixed(2), '\\infty', ')'];
    return sols;
}
export const posGIneqZ = (a, b) => {
    let s = b % a != 0 ? Math.ceil(b/a) : Math.ceil(b/a) + 1;
    let sols = ['\\{', s, s + 1, '\\cdots', '\\infty', '\\}'];
    return sols;
}
export const posGEIneqZ = (a, b) => {
    let s = Math.ceil(b/a);
    let sols = ['\\{', s, s + 1, '\\cdots', '\\infty', '\\}'];
    return sols;
}
export const posGIneqQ = (a, b) => {
    let f = new Q(b, a);
    f.reduced();
    return ['(', f, '\\infty', ')'];
}
export const posGEIneqQ = (a, b) => {
    let f = new Q(b, a);
    f.reduced();
    return ['[', f, '\\infty', ')'];
}
export const posGIneqR = (a, b) => {
    return ['(', (b/a).toFixed(2), '\\infty', ')'];
}
export const posGEIneqR = (a, b) => {
    return ['[', (b/a).toFixed(2), '\\infty', ')'];
}
export const solString = (sols, set) => {
    let str = '';
    if(sols.length > 2) {
        // console.log(typeof sols[1], typeof sols[2]);
        if(typeof sols[1] === 'object') {
            sols[1] = sols[1].str();
        }
        if(typeof sols[2] === 'object') {
            sols[2] = sols[2].str();
        }
        // if(set == 'Q' || set == 'Qp') {
        //     str = sols[1] == '\\infty' || sols[1] == '-\\infty' ? sols[0] + sols[1] +', '+ sols[2].str() + sols[3] : sols[0] + sols[1].str() +', '+ sols[2] + sols[3];
        // } else {
            str = sols[0];
            for(let i = 1; i < sols.length - 2; i++) {
                str += sols[i] + ', ';
            }
            str += sols[sols.length - 2] + sols[sols.length - 1];
        // }
    } else {
        str = '\\{\\}';
    }
    return str;
}