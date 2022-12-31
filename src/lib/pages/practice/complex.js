import {Point2D} from '$lib/utils/common/point2d';
import {randNum, randInt, gcd} from '$lib/utils/common/common';
import {Sets} from '$lib/utils/common/sets';
import { Q } from '$lib/utils/common/fraction';
import {Complex} from '$lib/utils/common/complex';
import {randomLinearInt} from '$lib/utils/common/expression';
import { Matrix2x2 } from '$lib/utils/common/matrix';
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
export const complex = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let det = 0;
            let realLinear;
            let imLinear;
            let M;
            while(det == 0) {
                realLinear = randomLinearInt();
                imLinear = randomLinearInt();
                M = new Matrix2x2([[realLinear.x, realLinear.y], [imLinear.x, imLinear.y]]);
                det = M.det();
            }
            let rx = randInt(10, 0);
            let ry = randInt(10, 0)
            let z = new Complex(new Q(rx), new Q(ry));
            let eq = (realLinear.str.length > 0 ? realLinear.str : '') + '+' + (imLinear.str.length > 0 ? '(' + imLinear.str + ')i' : '') + '=' + z.str(); 
            let C = M.adj().op([z.x.num, z.y.num]);
            let x = new Q(C[0], det);
            x.reduced();
            let y = new Q(C[1], det);
            let one = new Q(1);
            y.reduced();
            values[0] = `\\(x = ${x.str()},~y = ${y.str()}\\)`;
            values[1] = `\\(x = ${x.add(one).str()},~y = ${y.str()}\\)`;
            values[2] = `\\(x = ${x.str()},~y = ${(y.add(one)).str()}\\)`;
            values[3] = `\\(x = ${z.x.num},~y = ${z.y.num + 1}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If \\(${eq}\\), where \\(x\\) and \\(y\\) are real numbers, then the values of \\(x\\) and \\(y\\) are`;
            break;
        }
        case 1: {
            let z1 = new Complex();
            z1.rand(-10, 10);
            let z2 = new Complex();
            z2.rand(-10, 10);
            values[0] = `\\(${z1.add(z2).str()}\\)`;
            values[1] = `\\(${z1.add(new Complex(z2.x)).str()}\\)`;
            values[2] = `\\(${z1.sub(z2).str()}\\)`;
            values[3] = `\\(${z1.add(new Complex(new Q(), z2.y)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If \\(z_1 = ${z1.str()}\\) and \\(z_2 = ${z2.str()}\\), then \\(z_1 + z_2\\) will be equal to`;
            break;
        }
    }
    problemset = problemset;
    return problemset;
}