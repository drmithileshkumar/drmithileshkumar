//@ts-nocheck

import {randNum, randInt, gcd, pythagoreanTriplet, randSubset} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import {Polynomial} from '$lib/mathril/utils/matlib/polynomial';
import { Q } from '$lib/mathril/utils/matlib/fraction';
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
export const trigonometry = (problemnumber) => {
    let N = 9;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
                
            let theta = randInt(359, 1);
            let g = gcd(theta, 180);
            let t = theta/g;
            let f = randInt(10, 1);
            let l = t*f;

            values[0] = (l*180/theta).toFixed(2);
            values[1] = (theta*180/l).toFixed(2);
            values[2] = (l/theta).toFixed(2);
            values[3] = (l*180)/theta + `\\(\\pi\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + ' m';
            } 
            
            problemset.s = `What is the radius of the circle in which a central angle of \\(${theta}^\\circ\\) intercepts an arc of length \\(${l}\\pi\\) m?`;
            break;
        }
        case 1: {
            
            let n = randInt(100, 1);
            
            values[0] = `\\(${2*n + 1}\\dfrac{\\pi}{2}\\)`;
            values[1] = `\\(${2*n + 1}\\dfrac{\\pi}{3}\\)`;
            values[2] = `\\(${2*n + 1}\\dfrac{\\pi}{4}\\)`;
            values[3] = `\\(${n}\\pi\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If \\(\\cos x = 0\\), then which of these is a valid value of \\(x\\)?`;
            break;
        }
        case 2: {
            let t = pythagoreanTriplet(20);
            let identities = [
                {
                    f: '\\sin \\theta',
                    v: new Q(t.p, t.h)
                },
                {
                    f: '\\cos \\theta',
                    v: new Q(t.b, t.h)
                },
                {
                    f: '\\tan \\theta',
                    v: new Q(t.p, t.b)
                },
                {
                    f: '\\cosec \\theta',
                    v: new Q(t.h, t.p)
                },
                {
                    f: '\\sec \\theta',
                    v: new Q(t.h, t.b)
                },
                {
                    f: '\\cot \\theta',
                    v: new Q(t.b, t.p)
                }
            ]
            let notc = randInt(5, 0);
            values[0] = `\\(${identities[(notc + 1) % 6].f} = ${identities[(notc + 1) % 6].v.add(new Q(1)).str()}\\)`
            values[1] = `\\(${identities[(notc + 2) % 6].f} = ${identities[(notc + 2) % 6].v.str()}\\)`
            values[2] = `\\(${identities[(notc + 3) % 6].f} = ${identities[(notc + 3) % 6].v.str()}\\)`
            values[3] = `\\(${identities[(notc + 4) % 6].f} = ${identities[(notc + 4) % 6].v.str()}\\)`
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${identities[(notc + 5) % 6].f} = ${identities[(notc + 5) % 6].v.str()}\\), then which is not correct?`
            break;
        }
        case 3: {
            let t1 = pythagoreanTriplet(5);
            let t2 = pythagoreanTriplet(5);
            let id1 = [
                {
                    f: '\\sin x',
                    v: new Q(t1.p, t1.h)
                },
                {
                    f: '\\cos x',
                    v: new Q(t1.b, t1.h)
                },
                {
                    f: '\\tan x',
                    v: new Q(t1.p, t1.b)
                },
                {
                    f: '\\cosec x',
                    v: new Q(t1.h, t1.p)
                },
                {
                    f: '\\sec x',
                    v: new Q(t1.h, t1.b)
                },
                {
                    f: '\\cot x',
                    v: new Q(t1.b, t1.p)
                }
            ]
            let id2 = [
                {
                    f: '\\sin y',
                    v: new Q(t2.p, t2.h)
                },
                {
                    f: '\\cos y',
                    v: new Q(t2.b, t2.h)
                },
                {
                    f: '\\tan y',
                    v: new Q(t2.p, t2.b)
                },
                {
                    f: '\\cosec y',
                    v: new Q(t2.h, t2.p)
                },
                {
                    f: '\\sec y',
                    v: new Q(t2.h, t2.b)
                },
                {
                    f: '\\cot y',
                    v: new Q(t2.b, t2.p)
                }
            ]
            let cosxpy = id1[1].v.mul(id2[1].v).sub(id1[0].v.mul(id2[0].v));
            cosxpy.reduced();
            let cosxpy1 = id1[0].v.mul(id2[1].v).sub(id1[0].v.mul(id2[0].v));
            cosxpy1.reduced();
            let cosxpy2 = id1[1].v.mul(id2[1].v).sub(id1[1].v.mul(id2[0].v));
            cosxpy2.reduced();
            let cosxpy3 = id1[3].v.mul(id2[1].v).sub(id1[0].v.mul(id2[0].v));
            cosxpy3.reduced();
            let i1 = randInt(5, 0);
            let i2 = randInt(5, 0);
            values[0] = `\\(${cosxpy.str()}\\)`;
            values[1] = `\\(${cosxpy1.str()}\\)`
            values[2] = `\\(${cosxpy2.str()}\\)`
            values[3] = `\\(${cosxpy3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${id1[i1].f} = ${id1[i1].v.str()}\\) and \\(${id2[i2].f} = ${id2[i2].v.str()}\\), then \\(\\cos(x + y)\\) is `
            break;
        }
        case 4: {
            let t1 = pythagoreanTriplet(5);
            let t2 = pythagoreanTriplet(5);
            let id1 = [
                {
                    f: '\\sin x',
                    v: new Q(t1.p, t1.h)
                },
                {
                    f: '\\cos x',
                    v: new Q(t1.b, t1.h)
                },
                {
                    f: '\\tan x',
                    v: new Q(t1.p, t1.b)
                },
                {
                    f: '\\cosec x',
                    v: new Q(t1.h, t1.p)
                },
                {
                    f: '\\sec x',
                    v: new Q(t1.h, t1.b)
                },
                {
                    f: '\\cot x',
                    v: new Q(t1.b, t1.p)
                }
            ]
            let id2 = [
                {
                    f: '\\sin y',
                    v: new Q(t2.p, t2.h)
                },
                {
                    f: '\\cos y',
                    v: new Q(t2.b, t2.h)
                },
                {
                    f: '\\tan y',
                    v: new Q(t2.p, t2.b)
                },
                {
                    f: '\\cosec y',
                    v: new Q(t2.h, t2.p)
                },
                {
                    f: '\\sec y',
                    v: new Q(t2.h, t2.b)
                },
                {
                    f: '\\cot y',
                    v: new Q(t2.b, t2.p)
                }
            ]
            let cosxpy = id1[1].v.mul(id2[1].v).add(id1[0].v.mul(id2[0].v));
            cosxpy.reduced();
            let cosxpy1 = id1[0].v.mul(id2[1].v).add(id1[0].v.mul(id2[0].v));
            cosxpy1.reduced();
            let cosxpy2 = id1[1].v.mul(id2[1].v).add(id1[1].v.mul(id2[0].v));
            cosxpy2.reduced();
            let cosxpy3 = id1[3].v.mul(id2[1].v).add(id1[0].v.mul(id2[0].v));
            cosxpy3.reduced();
            let i1 = randInt(5, 0);
            let i2 = randInt(5, 0);
            values[0] = `\\(${cosxpy.str()}\\)`;
            values[1] = `\\(${cosxpy1.str()}\\)`
            values[2] = `\\(${cosxpy2.str()}\\)`
            values[3] = `\\(${cosxpy3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${id1[i1].f} = ${id1[i1].v.str()}\\) and \\(${id2[i2].f} = ${id2[i2].v.str()}\\), then \\(\\cos(x - y)\\) is `
            break;
        }
        case 5: {
            let t1 = pythagoreanTriplet(5);
            let t2 = pythagoreanTriplet(5);
            let id1 = [
                {
                    f: '\\sin x',
                    v: new Q(t1.p, t1.h)
                },
                {
                    f: '\\cos x',
                    v: new Q(t1.b, t1.h)
                },
                {
                    f: '\\tan x',
                    v: new Q(t1.p, t1.b)
                },
                {
                    f: '\\cosec x',
                    v: new Q(t1.h, t1.p)
                },
                {
                    f: '\\sec x',
                    v: new Q(t1.h, t1.b)
                },
                {
                    f: '\\cot x',
                    v: new Q(t1.b, t1.p)
                }
            ]
            let id2 = [
                {
                    f: '\\sin y',
                    v: new Q(t2.p, t2.h)
                },
                {
                    f: '\\cos y',
                    v: new Q(t2.b, t2.h)
                },
                {
                    f: '\\tan y',
                    v: new Q(t2.p, t2.b)
                },
                {
                    f: '\\cosec y',
                    v: new Q(t2.h, t2.p)
                },
                {
                    f: '\\sec y',
                    v: new Q(t2.h, t2.b)
                },
                {
                    f: '\\cot y',
                    v: new Q(t2.b, t2.p)
                }
            ]
            let sinxpy = id1[0].v.mul(id2[1].v).add(id1[1].v.mul(id2[0].v));
            sinxpy.reduced();
            let sinxpy1 = id1[1].v.mul(id2[1].v).add(id1[0].v.mul(id2[0].v));
            sinxpy1.reduced();
            let sinxpy2 = id1[1].v.mul(id2[1].v).add(id1[1].v.mul(id2[0].v));
            sinxpy2.reduced();
            let sinxpy3 = id1[3].v.mul(id2[1].v).add(id1[3].v.mul(id2[0].v));
            sinxpy3.reduced();
            let i1 = randInt(5, 0);
            let i2 = randInt(5, 0);
            values[0] = `\\(${sinxpy.str()}\\)`;
            values[1] = `\\(${sinxpy1.str()}\\)`
            values[2] = `\\(${sinxpy2.str()}\\)`
            values[3] = `\\(${sinxpy3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${id1[i1].f} = ${id1[i1].v.str()}\\) and \\(${id2[i2].f} = ${id2[i2].v.str()}\\), then \\(\\sin(x + y)\\) is `
            break;
        }
        case 6: {
            let t1 = pythagoreanTriplet(5);
            let t2 = pythagoreanTriplet(5);
            let id1 = [
                {
                    f: '\\sin x',
                    v: new Q(t1.p, t1.h)
                },
                {
                    f: '\\cos x',
                    v: new Q(t1.b, t1.h)
                },
                {
                    f: '\\tan x',
                    v: new Q(t1.p, t1.b)
                },
                {
                    f: '\\cosec x',
                    v: new Q(t1.h, t1.p)
                },
                {
                    f: '\\sec x',
                    v: new Q(t1.h, t1.b)
                },
                {
                    f: '\\cot x',
                    v: new Q(t1.b, t1.p)
                }
            ]
            let id2 = [
                {
                    f: '\\sin y',
                    v: new Q(t2.p, t2.h)
                },
                {
                    f: '\\cos y',
                    v: new Q(t2.b, t2.h)
                },
                {
                    f: '\\tan y',
                    v: new Q(t2.p, t2.b)
                },
                {
                    f: '\\cosec y',
                    v: new Q(t2.h, t2.p)
                },
                {
                    f: '\\sec y',
                    v: new Q(t2.h, t2.b)
                },
                {
                    f: '\\cot y',
                    v: new Q(t2.b, t2.p)
                }
            ]
            let sinxmy = id1[0].v.mul(id2[1].v).sub(id1[1].v.mul(id2[0].v));
            sinxmy.reduced();
            let sinxmy1 = id1[1].v.mul(id2[1].v).sub(id1[0].v.mul(id2[0].v));
            sinxmy1.reduced();
            let sinxmy2 = id1[1].v.mul(id2[1].v).sub(id1[1].v.mul(id2[0].v));
            sinxmy2.reduced();
            let sinxmy3 = id1[3].v.mul(id2[1].v).sub(id1[3].v.mul(id2[0].v));
            sinxmy3.reduced();
            let i1 = randInt(5, 0);
            let i2 = randInt(5, 0);
            values[0] = `\\(${sinxmy.str()}\\)`;
            values[1] = `\\(${sinxmy1.str()}\\)`
            values[2] = `\\(${sinxmy2.str()}\\)`
            values[3] = `\\(${sinxmy3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${id1[i1].f} = ${id1[i1].v.str()}\\) and \\(${id2[i2].f} = ${id2[i2].v.str()}\\), then \\(\\sin(x - y)\\) is `
            break;
        }
        case 7: {
            let t1 = pythagoreanTriplet(5);
            let t2 = pythagoreanTriplet(5);
            let id1 = [
                {
                    f: '\\sin x',
                    v: new Q(t1.p, t1.h)
                },
                {
                    f: '\\cos x',
                    v: new Q(t1.b, t1.h)
                },
                {
                    f: '\\tan x',
                    v: new Q(t1.p, t1.b)
                },
                {
                    f: '\\cosec x',
                    v: new Q(t1.h, t1.p)
                },
                {
                    f: '\\sec x',
                    v: new Q(t1.h, t1.b)
                },
                {
                    f: '\\cot x',
                    v: new Q(t1.b, t1.p)
                }
            ]
            let id2 = [
                {
                    f: '\\sin y',
                    v: new Q(t2.p, t2.h)
                },
                {
                    f: '\\cos y',
                    v: new Q(t2.b, t2.h)
                },
                {
                    f: '\\tan y',
                    v: new Q(t2.p, t2.b)
                },
                {
                    f: '\\cosec y',
                    v: new Q(t2.h, t2.p)
                },
                {
                    f: '\\sec y',
                    v: new Q(t2.h, t2.b)
                },
                {
                    f: '\\cot y',
                    v: new Q(t2.b, t2.p)
                }
            ]
            let tanxpy = id1[3].v.add(id2[3].v).div((new Q(1)).sub(id1[3].v.mul(id2[3].v)));
            tanxpy.reduced();
            let tanxpy1 = id1[1].v.mul(id2[1].v).add(id1[0].v.mul(id2[0].v));
            tanxpy1.reduced();
            let tanxpy2 = id1[1].v.mul(id2[1].v).add(id1[1].v.mul(id2[0].v));
            tanxpy2.reduced();
            let tanxpy3 = id1[3].v.mul(id2[1].v).add(id1[3].v.mul(id2[0].v));
            tanxpy3.reduced();
            let i1 = randInt(5, 0);
            let i2 = randInt(5, 0);
            values[0] = `\\(${tanxpy.str()}\\)`;
            values[1] = `\\(${tanxpy1.str()}\\)`
            values[2] = `\\(${tanxpy2.str()}\\)`
            values[3] = `\\(${tanxpy3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${id1[i1].f} = ${id1[i1].v.str()}\\) and \\(${id2[i2].f} = ${id2[i2].v.str()}\\), then \\(\\tan(x + y)\\) is `
            break;
        }
        case 8: {
            let t1 = pythagoreanTriplet(5);
            let t2 = pythagoreanTriplet(5);
            let id1 = [
                {
                    f: '\\sin x',
                    v: new Q(t1.p, t1.h)
                },
                {
                    f: '\\cos x',
                    v: new Q(t1.b, t1.h)
                },
                {
                    f: '\\tan x',
                    v: new Q(t1.p, t1.b)
                },
                {
                    f: '\\cosec x',
                    v: new Q(t1.h, t1.p)
                },
                {
                    f: '\\sec x',
                    v: new Q(t1.h, t1.b)
                },
                {
                    f: '\\cot x',
                    v: new Q(t1.b, t1.p)
                }
            ]
            let id2 = [
                {
                    f: '\\sin y',
                    v: new Q(t2.p, t2.h)
                },
                {
                    f: '\\cos y',
                    v: new Q(t2.b, t2.h)
                },
                {
                    f: '\\tan y',
                    v: new Q(t2.p, t2.b)
                },
                {
                    f: '\\cosec y',
                    v: new Q(t2.h, t2.p)
                },
                {
                    f: '\\sec y',
                    v: new Q(t2.h, t2.b)
                },
                {
                    f: '\\cot y',
                    v: new Q(t2.b, t2.p)
                }
            ]
            let sinxmy = id1[3].v.sub(id2[3].v).div((new Q(1)).add(id1[3].v.mul(id2[3].v)));
            sinxmy.reduced();
            let sinxmy1 = id1[1].v.mul(id2[1].v).sub(id1[0].v.mul(id2[0].v));
            sinxmy1.reduced();
            let sinxmy2 = id1[1].v.mul(id2[1].v).sub(id1[1].v.mul(id2[0].v));
            sinxmy2.reduced();
            let sinxmy3 = id1[3].v.mul(id2[1].v).sub(id1[3].v.mul(id2[0].v));
            sinxmy3.reduced();
            let i1 = randInt(5, 0);
            let i2 = randInt(5, 0);
            values[0] = `\\(${sinxmy.str()}\\)`;
            values[1] = `\\(${sinxmy1.str()}\\)`
            values[2] = `\\(${sinxmy2.str()}\\)`
            values[3] = `\\(${sinxmy3.str()}\\)`

            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(${id1[i1].f} = ${id1[i1].v.str()}\\) and \\(${id2[i2].f} = ${id2[i2].v.str()}\\), then \\(\\tan(x - y)\\) is `
            break;
        }
    }
    problemset = problemset;
    return problemset;
}