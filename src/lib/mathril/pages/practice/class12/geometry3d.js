//@ts-nocheck
import {Point2D} from '$lib/mathril/utils/matlib/point2D';
import {randNum, randInt, directionRatios} from '$lib/mathril/utils/matlib/common';
import {Sets} from '$lib/mathril/utils/matlib/sets';
import { Q } from '$lib/mathril/utils/matlib/fraction';
import { Point3D } from '$lib/mathril/utils/matlib/point3D';
import { cos, sin } from '$lib/mathril/utils/matlib/trigonometry';
import { Vector3D } from '$lib/mathril/utils/matlib/vector3D';
import { Surd } from '$lib/mathril/utils/matlib/surd';
import { Plane } from '$lib/mathril/utils/matlib/plane';
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
export const geometry3d = (problemnumber) => {
    let N = 15;
    problemnumber = problemnumber % N;
    let choices = ['A', 'B', 'C', 'D'];
    let correctChoiceIndex = Math.floor(Math.random()*4);
    problemset.c = choices[correctChoiceIndex];
    let ans;
    let values = [0, 0, 0, 0];
    switch(problemnumber) {
        case 0: {
            let af = [new Q(), new Q(1), new Q(1, 2), new Q(1, 3), new Q(1, 4), new Q(1, 6), new Q(2, 3), new Q(3, 4), new Q(5, 6)];
            
            let alpha = af[randInt(8, 0)];
            let beta = af[randInt(8, 0)];
            let gamma = af[randInt(8, 0)];
            //console.log('angles...', alpha.str(), beta.str(), gamma.str());
            let l = new cos(alpha);
            let m = new cos(beta);
            let n = new cos(gamma);
            let alphapi = l.astr();
            let betapi = m.astr();
            let gammapi = n.astr();
            let lv = l.value();
            let mv = m.value();
            let nv = n.value();

            let ls = new sin(alpha);
            let ms = new sin(beta);
            let ns = new sin(gamma);
            let lsv = ls.value();
            let msv = ms.value();
            let nsv = ns.value();
            // console.log(alpha.str(), beta.str(), gamma.str(), lv, mv, nv, lsv, msv, nsv)
             
            values[0] = `\\(${lv.str()}, ${mv.str()}, ${nv.str()}\\)`;
            values[1] = `\\(${alphapi}, ${betapi}, ${gammapi}\\)`;
            values[2] = `\\(${lsv.str()}, ${msv.str()}, ${nsv.str()}\\)`;
            values[3] = `\\(${lv.scale(-1).str()}, ${mv.scale(-1).str()}, ${nv.scale(-1).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            
            problemset.s = `If a line makes angles \\(${alphapi}, ${betapi}\\) and \\(${gammapi}\\) with the positive axes \\(x, y\\) and \\(z\\) respectively, then its direction cosines are ?`;
            break;
        }
        case 1: {
            let rs = directionRatios();
            let dc = {
                l: new Q(rs.a, rs.d),
                m: new Q(rs.b, rs.d),
                n: new Q(rs.c, rs.d)
            }
            dc.l.reduced();
            dc.m.reduced();
            dc.n.reduced();
            values[0] = `\\(${dc.n.str()}\\)`;
            values[1] = `\\(${dc.n.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${dc.n.add(new Q(-1)).str()}\\)`;
            values[3] = `\\(${dc.n.scale(2).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If two of the direction cosines are \\(${dc.l.str()}\\) and \\(${dc.m.str()}\\), then the third is`
            break;
        }
        case 2: {
            let rs = directionRatios();
            let dc = {
                l: new Q(rs.a, rs.d),
                m: new Q(rs.b, rs.d),
                n: new Q(rs.c, rs.d)
            }
            dc.l.reduced();
            dc.m.reduced();
            dc.n.reduced();
            values[0] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
            values[1] = `\\(${dc.l.scale(-1).str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
            values[2] = `\\(${dc.l.str()}, ${dc.m.scale(-1).str()}, ${dc.n.str()}\\)`;
            values[3] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.scale(-1).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If a line has direction ratios ${rs.a}, ${rs.b}, ${rs.c}, then it's direction cosines are`
            break;
        }
        case 3: {

            let rs = directionRatios();
            let x = randInt(100, -100);
            let y = randInt(100, - 100);
            let z = randInt(100, -100);
            let rx = rs.a + x;
            let ry = rs.b + y;
            let rz = rs.c + z;
            let dc = {
                l: new Q(rs.a, rs.d),
                m: new Q(rs.b, rs.d),
                n: new Q(rs.c, rs.d)
            }
            dc.l.reduced();
            dc.m.reduced();
            dc.n.reduced();
            values[0] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
            values[1] = `\\(${dc.l.scale(-1).str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
            values[2] = `\\(${dc.l.str()}, ${dc.m.scale(-1).str()}, ${dc.n.str()}\\)`;
            values[3] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.scale(-1).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `The direction cosines of the line passing through (${rx}, ${ry}, ${rz}) and (${x}, ${y}, ${z})  are`
            break;
        }
        case 4: {
            let p = new Vector3D();
            p.randomV();
            let a = new Vector3D();
            a.randomV();
            values[0] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${a.strVector()})\\)`;
            values[1] = `\\(\\vec{r} = ${a.strVector()} + \\lambda(${p.strVector()})\\)`;
            values[2] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${p.strVector()})\\)`;
            values[3] = `\\(\\vec{r} = ${a.strVector()} + \\lambda(${a.strVector()})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Equation of line passing through \\(${p.strVector()}\\) and parallel to \\(${a.strVector()}\\) is`
            break;
        }
        case 5: {
            let p = new Vector3D();
            p.randomV();
            let a = new Vector3D();
            a.randomV();
            values[0] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${a.sub(p).strVector()})\\)`;
            values[1] = `\\(\\vec{r} = ${a.strVector()} + \\lambda(${p.strVector()})\\)`;
            values[2] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${a.strVector()})\\)`;
            values[3] = `\\(\\vec{r} = ${a.strVector()} + \\lambda(${a.strVector()})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Equation of line passing through \\(${p.strVector()}\\) and \\(${a.strVector()}\\) is`
            break;
        }
        case 6: {
            let p = new Vector3D();
            p.randomV();
            let a = new Vector3D();
            a.randomV();
            let cartEq = '';
            if(a.x !== 0) {
                if(p.x > 0) cartEq += `\\frac{x - ${p.x}}{${a.x}}`;
                if(p.x < 0) cartEq += `\\frac{x + ${-p.x}}{${a.x}}`;
                if(p.x === 0) cartEq += `\\frac{x}{${a.x}}`;
            }
            if(cartEq.length > 0 && (a.y !== 0 || a.z !== 0)) cartEq += '=';
            if(a.y !== 0) {
                if(p.y > 0) cartEq += `\\frac{y - ${p.y}}{${a.y}}`;
                if(p.y < 0) cartEq += `\\frac{y + ${-p.y}}{${a.y}}`;
                if(p.y === 0) cartEq += `\\frac{y}{${a.y}}`;
            }
            if(cartEq.length > 0 && (a.y !== 0 && a.z !== 0)) cartEq += '=';
            if(a.z !== 0) {
                if(p.z > 0) cartEq += `\\frac{z - ${p.z}}{${a.z}}`;
                if(p.z < 0) cartEq += `\\frac{z + ${-p.z}}{${a.z}}`;
                if(p.z === 0) cartEq += `\\frac{z}{${a.z}}`;
            }
            values[0] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${a.strVector()})\\)`;
            values[1] = `\\(\\vec{r} = ${p.scale(-1).strVector()} + \\lambda(${a.strVector()})\\)`;
            values[2] = `\\(\\vec{r} = ${a.strVector()} + \\lambda(${p.strVector()})\\)`;
            values[3] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${p.strVector()})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `What is the vector form of the line \\[${cartEq}\\]`
            break;
        }
        case 7: {
            let p = directionRatios(3);
            let r = directionRatios(3);
            let pvector = new Vector3D(p.a, p.b, p.c);
            let rvector = new Vector3D(r.a, r.b, r.c);
            let costheta = new Q(Math.abs(p.a * r.a + p.b * r.b + p.c * r.c), Math.abs(p.d * r.d))
            costheta.reduced();
            values[0] = `\\(${costheta.str()}\\)`;
            values[1] = `\\(${costheta.scale(-1).str()}\\)`;
            values[2] = `\\(${costheta.sub(new Q(1)).str()}\\)`;
            values[3] = `\\(${costheta.add(new Q(1)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `If \\(\\theta\\) is the angle between lines passing through origin with direction ratios \\(${pvector.strVector()}\\) and \\(${rvector.strVector()}\\), then \\(\\cos\\theta\\) is`
            break;
        }
        case 8: {
            let p = directionRatios(3);
            let q = directionRatios(3);
            let r = directionRatios(3);
            let s = directionRatios(3);
            let pv = new Vector3D(p.a, p.b, p.c);
            let qv = new Vector3D(q.a, q.b, q.c);
            let rv = new Vector3D(r.a, r.b, r.c);
            let sv = new Vector3D(s.a, s.b, s.c);
            let pvo = pv.randomOrthogonal();
            let qvo = qv.randomOrthogonal();
            let rvo = rv.randomOrthogonal();
            let svo = sv.randomOrthogonal().add(new Vector3D(1, 0, 0));
            
            values[0] = `(${sv.x}, ${sv.y}, ${sv.z})` + ' and ' + `(${svo.x}, ${svo.y}, ${svo.z})`;
            values[1] = `(${qv.x}, ${qv.y}, ${qv.z})` + ' and ' + `(${qvo.x}, ${qvo.y}, ${qvo.z})`;
            values[2] = `(${rv.x}, ${rv.y}, ${rv.z})` + ' and ' + `(${rvo.x}, ${rvo.y}, ${rvo.z})`;
            values[3] = `(${pv.x}, ${pv.y}, ${pv.z})` + ' and ' + `(${pvo.x}, ${pvo.y}, ${pvo.z})`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which of the following pair of lines represented by the direction ratios are not orthogonal?`
            break;
        }
        case 9: {
            let p = directionRatios(3);
            let q = directionRatios(3);
            let r = directionRatios(3);
            let s = directionRatios(3);
            let pv = new Vector3D(p.a, p.b, p.c);
            let qv = new Vector3D(q.a, q.b, q.c);
            let rv = new Vector3D(r.a, r.b, r.c);
            let sv = new Vector3D(s.a, s.b, s.c);
            let pvo = pv.randomOrthogonal();
            let qvo = qv.randomOrthogonal();
            let rvo = rv.randomOrthogonal();
            let svo = sv.scale(randInt(5, 2));
            
            values[0] = `(${sv.x}, ${sv.y}, ${sv.z})` + ' and ' + `(${svo.x}, ${svo.y}, ${svo.z})`;
            values[1] = `(${qv.x}, ${qv.y}, ${qv.z})` + ' and ' + `(${qvo.x}, ${qvo.y}, ${qvo.z})`;
            values[2] = `(${rv.x}, ${rv.y}, ${rv.z})` + ' and ' + `(${rvo.x}, ${rvo.y}, ${rvo.z})`;
            values[3] = `(${pv.x}, ${pv.y}, ${pv.z})` + ' and ' + `(${pvo.x}, ${pvo.y}, ${pvo.z})`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `Which of the following pair of lines represented by the direction ratios are parallel?`
            break;
        }
        case 10: {
            let p = directionRatios(3);
            let q = directionRatios(3);
            let r = directionRatios(3);
            let s = directionRatios(3);
            let pv = new Vector3D(p.a, p.b, p.c);
            let qv = new Vector3D(q.a, q.b, q.c);
            let rv = new Vector3D(r.a, r.b, r.c);
            let sv = new Vector3D(s.a, s.b, s.c);
            let qs = qv.cross(sv);
            let nums = qv.cross(rv.sub(pv)).sqlength();
            let dens = qv.sqlength()
            let ds = new Q(nums, dens);
            ds.reduced();
            let d = new Q();
            d.num = new Surd();
            d.num.surdFrom(ds.num);
            d.den = new Surd();
            d.den.surdFrom(ds.den);
            // d.reduced();
            let nums1 = qv.cross(rv).sqlength();
            let ds1 = new Q(nums1, dens);
            ds1.reduced();
            let d1 = new Q();
            d1.num = new Surd();
            d1.num.surdFrom(ds1.num);
            d1.den = new Surd();
            d1.den.surdFrom(ds1.den);
            let nums2 = qv.cross(pv).sqlength();
            let ds2 = new Q(nums2, dens);
            ds2.reduced();
            let d2 = new Q();
            d2.num = new Surd();
            d2.num.surdFrom(ds2.num);
            d2.den = new Surd();
            d2.den.surdFrom(ds2.den);
            let nums3 = qv.cross(rv.add(pv)).sqlength();
            let ds3 = new Q(nums3, dens);
            ds3.reduced();
            let d3 = new Q();
            d3.num = new Surd();
            d3.num.surdFrom(ds3.num);
            d3.den = new Surd();
            d3.den.surdFrom(ds3.den);
            values[0] = `\\(${d.str()}\\)`;
            values[1] = `\\(${d1.str()}\\)`;
            values[2] = `\\(${d2.str()}\\)`;
            values[3] = `\\(${d3.str()}\\)`;
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em;">The distance between parallel lines \\[\\vec{r} = ${pv.strVector()} + \\lambda (${qv.strVector()})\\] and \\[\\vec{r} = ${rv.strVector()} + \\lambda (${qv.strVector()})\\]</span>`
            break;
        }
        case 11: {
            let p = directionRatios(3);
            let q = directionRatios(3);
            let r = directionRatios(3);
            let s = directionRatios(3);
            let pv = new Vector3D(p.a, p.b, p.c);
            let qv = new Vector3D(q.a, q.b, q.c);
            let rv = new Vector3D(r.a, r.b, r.c);
            let sv = new Vector3D(s.a, s.b, s.c);
            let qs = qv.cross(sv);
            let num = qs.dot(rv.sub(pv));
            let dens = qs.sqlength()
            let ds = new Q(num * num, dens);
            ds.reduced();
            let d = new Q();
            d.num = new Surd();
            d.num.surdFrom(ds.num);
            d.den = new Surd();
            d.den.surdFrom(ds.den);
            // d.reduced();
            let num1 = qs.dot(rv);
            let ds1 = new Q(num1 * num1, dens);
            ds1.reduced();
            let d1 = new Q();
            d1.num = new Surd();
            d1.num.surdFrom(ds1.num);
            d1.den = new Surd();
            d1.den.surdFrom(ds1.den);
            let num2 = qs.dot(pv);
            let ds2 = new Q(num2 * num2, dens);
            ds2.reduced();
            let d2 = new Q();
            d2.num = new Surd();
            d2.num.surdFrom(ds2.num);
            d2.den = new Surd();
            d2.den.surdFrom(ds2.den);
            let num3 = qs.dot(rv.add(pv));
            let ds3 = new Q(num3 * num3, dens);
            ds3.reduced();
            let d3 = new Q();
            d3.num = new Surd();
            d3.num.surdFrom(ds3.num);
            d3.den = new Surd();
            d3.den.surdFrom(ds3.den);
            values[0] = `\\(${d.str()}\\)`;
            values[1] = `\\(${d1.str()}\\)`;
            values[2] = `\\(${d2.str()}\\)`;
            values[3] = `\\(${d3.str()}\\)`;
            
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em;">The distance between skew lines \\[\\vec{r} = ${pv.strVector()} + \\lambda (${qv.strVector()})\\] and \\[\\vec{r} = ${rv.strVector()} + \\lambda (${sv.strVector()})\\]</span>`
            break;
        }
        case 12: {
            let p = directionRatios(3);
            let pv = new Vector3D(p.a, p.b, p.c);
            let d = randInt(10, 0);
            // let dc = {
            //     l: new Q(p.a, p.d),
            //     m: new Q(p.b, p.d),
            //     n: new Q(p.c, p.d)
            // }
            values[0] = `\\(\\vec{r}\\cdot(${pv.strVector()}) = ${p.d * d}\\)`;
            values[1] = `\\(\\vec{r}\\cdot(${pv.strVector()}) = ${d}\\)`;
            values[2] = `\\(\\vec{r}\\cdot(${pv.strVector()}) = ${p.d}\\)`;
            values[3] = `\\(\\vec{r}\\times(${pv.strVector()}) = ${p.d * d}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em;"> The vector equation of the plane which is at distance \\(${d}\\) from the origin and its normal vector from the origin is \\(${pv.strVector()}\\)</span>`
            break;
        }
        case 13: {
            let plane = new Plane();
            let dr = plane.randomPlane();
            let d = plane.distance();
            d.reduced()
            // let dc = {
            //     l: new Q(p.a, p.d),
            //     m: new Q(p.b, p.d),
            //     n: new Q(p.c, p.d)
            // }
            values[0] = `\\(${d.str()}\\)`;
            values[1] = `\\(${d.add(new Q(1)).str()}\\)`;
            values[2] = `\\(${d.add(new Q(-1)).str()}\\)`;
            values[3] = `\\(${d.add(new Q(2)).str()}\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em;"> The distance of the plane \\(${plane.strCartesian()}\\) from the origin is</span>`
            break;
        }
        case 14: {
            let plane = new Plane();
            let dr = plane.randomPlane();
            let d = plane.distance();
            d.reduced()
            let dc = {
                l: new Q(dr.a, dr.d),
                m: new Q(dr.b, dr.d),
                n: new Q(dr.c, dr.d)
            }
            values[0] = `\\((${d.mul(dc.l).str()}, ${d.mul(dc.m).str()}, ${d.mul(dc.n).str()})\\)`;
            values[1] = `\\((${d.scale(dr.a).str()}, ${d.scale(dr.b).str()}, ${d.scale(dr.c).str()})\\)`;
            values[2] = `\\((${dc.l.str()}, ${dc.m.str()}, ${dc.n.str()})\\)`;
            values[3] = `\\((${dr.a}, ${dr.b}, ${dr.c})\\)`;
            for(let i = 0; i < 4; i++) {
                problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
            } 
            problemset.s = `<span style="font-size: 0.7em;"> The coordinates of the foot of the perpendicular drawn from the origin to the plane \\(${plane.strCartesian()}\\) are</span>`
            break;
        }
    }
    problemset = problemset;
    return problemset;
}