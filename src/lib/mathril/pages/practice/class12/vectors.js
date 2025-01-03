//@ts-nocheck
import {randNum, randInt, directionRatios} from '$lib/mathril/utils/matlib/common';
import { Point3D } from '$lib/mathril/utils/matlib/point3D';
import { Vector3D } from '$lib/mathril/utils/matlib/vector3D';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import { Surd } from '$lib/mathril/utils/matlib/surd';
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
export const vectors = (problemnumber) => {
    let N = 11;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let n = randInt(10, 1);
            let m = randInt(10, 1);
            let l = randInt(10, 1);

            let P = new Point3D();
            P.randP3D(n, m, l);
            // console.log(P.str());
            let Q = new Point3D();
            Q.randP3D(n, m, l);
            // console.log(Q.str());
             
            values[0] = `\\(${Q.sub(P).vstr()}\\)`;
            values[1] = `\\(${P.sub(Q).vstr()}\\)`;
            values[2] = `\\(${Q.add(P).vstr()}\\)`;
            values[3] = `\\(${Q.vstr()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size: 0.7em">What is the vector from point \\(P = ${P.str()}\\) to \\(Q = ${Q.str()}\\) ?</span>`;
            break;
        }
        case 1: {
            let a = new Vector3D();
            a.randomV();
            let b = new Vector3D();
            b.x = a.x;
            b.y = a.y;
            b.z = a.z;
            let xi = randInt(1, 0);
            let yi = randInt(1, 0);
            let zi = randInt(1, 0);
            let astr = a.strVector(xi === 0 ? 'x':a.x,yi === 0 ? 'y':a.y,zi === 0 ? 'z':a.z);
            let bstr = b.strVector(xi === 1 ? 'x':b.x,yi === 1 ? 'y':b.y,zi === 1 ? 'z':b.z);
            let xv = xi === 0 ? a.x : b.x;
            let yv = yi === 0 ? a.y : b.y;
            let zv = zi === 0 ? a.z : b.z;
            values[0] = `\\(x = ${xv}, y = ${yv}, z = ${zv}\\)`;
            values[1] = `\\(x = ${xv + 1}, y = ${yv}, z = ${zv}\\)`;
            values[2] = `\\(x = ${xv}, y = ${yv + 1}, z = ${zv}\\)`;
            values[3] = `\\(x = ${xv}, y = ${yv}, z = ${zv + 1}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Values of \\(x, y, z\\) if \\(\\vec{a} = ${astr}\\) and \\(\\vec{b} = ${bstr}\\) are equal</span>`
            break;
        }
        case 2: {
            let dr = directionRatios();
            let a = new Vector3D(dr.a, dr.b, dr.c);
            let b = new Point3D();
            b.x = new Q(a.x, dr.d);
            b.y = new Q(a.y, dr.d);
            b.z = new Q(a.z, dr.d);
            b.x.reduced();
            b.y.reduced();
            b.z.reduced();
            
            values[0] = `\\(${b.vstr()}\\)`;
            values[1] = `\\(${a.strVector()}\\)`;
            values[2] = `\\(${new Point3D(b.x.add(new Q(1)), b.y, b.z).vstr()}\\)`;
            values[3] = `\\(${new Point3D(b.x.add(new Q(-1)), b.y, b.z).vstr()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Unit vector in the direction of \\(${a.strVector()}\\)</span>`
            break;
        }
        case 3: {
            
            let q = randInt(10, 3);
            let p = randInt(q - 1, 1);
            let n = randInt(10, 1);
            let m = randInt(10, 1);
            let l = randInt(10, 1);

            let P = new Point3D();
            P.randP3D(n, m, l);
            // console.log(P.str());
            let OQ = new Point3D();
            OQ.randP3D(n, m, l);
            // console.log(OQ.str());
            let R = P.scale(q).add(OQ.scale(p)).scale(new Q(1, p + q));
            values[0] = `\\(${R.vstr()}\\)`;
            values[1] = `\\(${P.scale(p).add(OQ.scale(q)).scale(new Q(1, p + q)).vstr()}\\)`;
            values[2] = `\\(${P.scale(q).add(OQ.scale(q)).scale(new Q(1, p + q)).vstr()}\\)`;
            values[3] = `\\(${P.scale(p).add(OQ.scale(p)).scale(new Q(1, p + q)).vstr()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size: 0.7em">The point that divides line joining \\(\\vec{P} = ${P.vstr()}\\) and \\(\\vec{Q} = ${OQ.vstr()}\\) internally in the ratio \\(${p}:${q}\\) ?</span>`;
            break;
        }
        case 4: {
            
            let p = randInt(10, 3);
            let q = randInt(p - 1, 1);
            let n = randInt(10, 1);
            let m = randInt(10, 1);
            let l = randInt(10, 1);

            let P = new Point3D();
            P.randP3D(n, m, l);
            // console.log(P.str());
            let OQ = new Point3D();
            OQ.randP3D(n, m, l);
            // console.log(OQ.str());
            let R = P.scale(q).sub(OQ.scale(p)).scale(new Q(1, p - q));
            values[0] = `\\(${R.vstr()}\\)`;
            values[1] = `\\(${P.scale(p).add(OQ.scale(q)).scale(new Q(1, p - q)).vstr()}\\)`;
            values[2] = `\\(${P.scale(q).sub(OQ.scale(q)).scale(new Q(1, p - q)).vstr()}\\)`;
            values[3] = `\\(${P.scale(p).sub(OQ.scale(p)).scale(new Q(1, p - q)).vstr()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `<span style="font-size: 0.7em">The point that divides line joining \\(\\vec{P} = ${P.vstr()}\\) and \\(\\vec{Q} = ${OQ.vstr()}\\) externally in the ratio \\(${p}:${q}\\) ?</span>`;
            break;
        }
        case 5: {
            let a = new Vector3D();
            a.randomV(10);
            let b = new Vector3D();
            b.randomV(10);
            let product = a.dot(b);
            values[0] = product;
            values[1] = product + 1;
            values[2] = product - 1;
            values[3] = product + 2;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Evaluate \\((${a.strVector()})\\cdot(${b.strVector()})\\)</span>`
            break;
        }
        case 6: {
            let adr = directionRatios(5);
            let bdr = directionRatios(5);
            let a = new Vector3D(adr.a, adr.b, adr.c);
            let b = new Vector3D(bdr.a, bdr.b, bdr.c);
            let costheta = new Q(a.dot(b), adr.d * bdr.d);;
            costheta.reduced();
            values[0] = `\\(\\cos^{-1}(${costheta.str()})\\)`;
            values[1] = `\\(\\cos^{-1}(${costheta.scale(-1).str()})\\)`;
            values[2] = `\\(\\cos^{-1}(${costheta.add(new Q(1)).str()})\\)`;
            values[3] = `\\(\\cos^{-1}(${costheta.add(new Q(-1)).str()})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Angle between \\(${a.strVector()}\\) and \\(${b.strVector()}\\)</span>`
            break;
        }
        case 7: {
            let adr = directionRatios(5);
            let bdr = directionRatios(5);
            let a = new Vector3D(adr.a, adr.b, adr.c);
            let b = new Vector3D(bdr.a, bdr.b, bdr.c);
            let costheta = new Q(a.dot(b), bdr.d);;
            costheta.reduced();
            values[0] = `\\(${costheta.str()}\\)`;
            values[1] = `\\(${costheta.scale(-1).str()}\\)`;
            values[2] = `\\(${costheta.add(new Q(1)).str()}\\)`;
            values[3] = `\\(${costheta.add(new Q(-1)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">The projection of \\(${a.strVector()}\\) on \\(${b.strVector()}\\)</span>`
            break;
        }
        case 8: {
            let a = new Vector3D();
            a.randomV(10);
            let b = new Vector3D();
            b.randomV(10);
            let product = a.cross(b);
            values[0] = `\\(${product.strVector()}\\)`;
            values[1] = `\\(${product.scale(-1).strVector()}\\)`;
            values[2] = `\\(${product.add(new Vector3D(1)).strVector()}\\)`;
            values[3] = `\\(${product.add(new Vector3D(-1)).strVector()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Evaluate \\((${a.strVector()})\\times(${b.strVector()})\\)</span>`
            break;
        }
        case 9: {
            let a = new Vector3D();
            a.randomV(10);
            let b = new Vector3D();
            b.randomV(10);
            let product = a.cross(b);
            values[0] = `\\(${new Surd([{a:1,r:product.scale(0.5).sqlength()}]).str()}\\)`;
            values[1] = `\\(${new Surd([{a:1,r:product.sqlength()}]).str()}\\)`;
            values[2] = `\\(${new Surd([{a:1,r:product.scale(0.25).sqlength()}]).str()}\\)`;
            values[3] = `\\(${new Surd([{a:1,r:product.scale(2).sqlength()}]).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Area of the triangle with side vectors \\(AB = ${a.strVector()}\\) and \\(AC = ${b.strVector()}\\)</span>`
            break;
        }
        case 10: {
            let a = new Vector3D();
            a.randomV(10);
            let b = new Vector3D();
            b.randomV(10);
            let product = a.cross(b);
            values[0] = `\\(${new Surd([{a:1,r:product.sqlength()}]).str()}\\)`;
            values[1] = `\\(${new Surd([{a:1,r:product.scale(0.5).sqlength()}]).str()}\\)`;
            values[2] = `\\(${new Surd([{a:1,r:product.scale(0.25).sqlength()}]).str()}\\)`;
            values[3] = `\\(${new Surd([{a:1,r:product.scale(2).sqlength()}]).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em">Area of the parallelogram with side vectors \\(AB = ${a.strVector()}\\) and \\(AC = ${b.strVector()}\\)</span>`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}