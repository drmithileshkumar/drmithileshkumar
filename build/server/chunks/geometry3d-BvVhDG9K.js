import { Q, S as Surd } from './fraction-DfHHiAXd.js';
import { r as randInt, e as directionRatios } from './common-CIVVH1Lv.js';
import { c as cos, s as sin } from './trigonometry3-DnLNc8XS.js';
import { V as Vector3D } from './vector3D-DiA8P75J.js';
import './nt-DokVuTcK.js';
import './sets-jGIduNNd.js';

class Plane {
  constructor(a = 0, b = 0, c = 0, d = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  randomPlane(origin = new Vector3D()) {
    let dr = directionRatios();
    this.a = dr.a;
    this.b = dr.b;
    this.c = dr.c;
    this.d = dr.d * randInt(10, 1);
    return dr;
  }
  distance(origin = new Vector3D()) {
    return new Q(Math.abs(this.d), Math.abs(Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c)));
  }
  sqlength() {
    return this.a * this.a + this.b * this.b + this.c * this.c;
  }
  length() {
    return Math.sqrt(this.sqlength());
  }
  strCartesian() {
    let result = "";
    if (this.a === 0) ;
    else {
      if (this.a === 1) {
        result += "x";
      } else if (this.a === -1) {
        result += "-x";
      } else {
        result += this.a + "x";
      }
    }
    if (this.b === 0) ;
    else {
      if (this.b === 1) {
        result += result.length === 0 ? "y" : "+y";
      } else if (this.b === -1) {
        result += "-y";
      } else {
        result += result.length === 0 || this.b < 0 ? this.b + "y" : "+" + this.b + "y";
      }
    }
    if (this.c === 0) ;
    else {
      if (this.c === 1) {
        result += result.length === 0 ? "z" : "+z";
      } else if (this.c === -1) {
        result += "-z";
      } else {
        result += result.length === 0 || this.c < 0 ? this.c + "z" : "+" + this.c + "z";
      }
    }
    result += "=" + this.d;
    return result;
  }
  strVector() {
    let result = "";
    if (this.a === 0) ;
    else {
      if (this.a === 1) {
        result += "\\hat{i}";
      } else if (this.a === -1) {
        result += "-\\hat{i}";
      } else {
        result += this.a + "\\hat{i}";
      }
    }
    if (this.b === 0) ;
    else {
      if (this.b === 1) {
        result += result.length === 0 ? "\\hat{j}" : "+\\hat{j}";
      } else if (this.b === -1) {
        result += "-\\hat{j}";
      } else {
        result += result.length === 0 || this.b < 0 ? this.b + "\\hat{j}" : "+" + this.b + "\\hat{j}";
      }
    }
    if (this.c === 0) ;
    else {
      if (this.c === 1) {
        result += result.length === 0 ? "\\hat{k}" : "+\\hat{k}";
      } else if (this.c === -1) {
        result += "-\\hat{k}";
      } else {
        result += result.length === 0 || this.c < 0 ? this.c + "\\hat{k}" : "+" + this.c + "\\hat{k}";
      }
    }
    return result;
  }
  randomOrthogonal() {
    let v = new Vector3D();
    if (this.a === 0) {
      v.x = randInt(100, -100);
      if (this.b === 0) {
        v.y = randInt(100, -100);
        if (this.c === 0) {
          v.z = randInt(100, -100);
        } else {
          v.z = 0;
        }
      } else {
        if (this.c === 0) {
          v.y = 0;
          v.z = randInt(100, -100);
        } else {
          v.y = randInt(10, -10) * this.c;
          v.z = -(this.b * v.y) / this.c;
        }
      }
    } else {
      if (this.b === 0) {
        v.y = randInt(100, -100);
        if (this.c === 0) {
          v.x = 0;
          v.z = randInt(100, -100);
        } else {
          v.x = randInt(10, -10) * this.c;
          v.z = -(this.a * v.x) / this.c;
        }
      } else {
        if (this.c === 0) {
          v.x = randInt(10, -10) * this.b;
          v.y = -(this.a * v.x) / this.b;
          v.z = randInt(100, -100);
        } else {
          v.x = randInt(10, -10) * this.c;
          v.y = randInt(10, -10) * this.c;
          v.z = -(this.a * v.x + this.b * v.y) / this.c;
        }
      }
    }
    return v;
  }
  scale(k) {
    return new Vector3D(this.a * k, this.b * k, this.c * k);
  }
  add(v) {
    return new Vector3D(this.a + v.x, this.b + v.y, this.c + v.z);
  }
  sub(v) {
    return new Vector3D(this.a - v.x, this.b - v.y, this.c - v.z);
  }
  dot(v) {
    return this.a * v.x + this.b * v.y + this.c * v.z;
  }
  cross(v) {
    return new Vector3D(this.b * v.z - this.c * v.y, this.c * v.x - this.a * v.z, this.a * v.y - this.b * v.x);
  }
}
let problemset = {
  s: "",
  o: {
    "A": "",
    "B": "",
    "C": "",
    "D": ""
  },
  c: ""
};
const geometry3d = (problemnumber) => {
  let N = 15;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let af = [new Q(), new Q(1), new Q(1, 2), new Q(1, 3), new Q(1, 4), new Q(1, 6), new Q(2, 3), new Q(3, 4), new Q(5, 6)];
      let alpha = af[randInt(8, 0)];
      let beta = af[randInt(8, 0)];
      let gamma = af[randInt(8, 0)];
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
      values[0] = `\\(${lv.str()}, ${mv.str()}, ${nv.str()}\\)`;
      values[1] = `\\(${alphapi}, ${betapi}, ${gammapi}\\)`;
      values[2] = `\\(${lsv.str()}, ${msv.str()}, ${nsv.str()}\\)`;
      values[3] = `\\(${lv.scale(-1).str()}, ${mv.scale(-1).str()}, ${nv.scale(-1).str()}\\)`;
      for (let i = 0; i < 4; i++) {
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
      };
      dc.l.reduced();
      dc.m.reduced();
      dc.n.reduced();
      values[0] = `\\(${dc.n.str()}\\)`;
      values[1] = `\\(${dc.n.add(new Q(1)).str()}\\)`;
      values[2] = `\\(${dc.n.add(new Q(-1)).str()}\\)`;
      values[3] = `\\(${dc.n.scale(2).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If two of the direction cosines are \\(${dc.l.str()}\\) and \\(${dc.m.str()}\\), then the third is`;
      break;
    }
    case 2: {
      let rs = directionRatios();
      let dc = {
        l: new Q(rs.a, rs.d),
        m: new Q(rs.b, rs.d),
        n: new Q(rs.c, rs.d)
      };
      dc.l.reduced();
      dc.m.reduced();
      dc.n.reduced();
      values[0] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
      values[1] = `\\(${dc.l.scale(-1).str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
      values[2] = `\\(${dc.l.str()}, ${dc.m.scale(-1).str()}, ${dc.n.str()}\\)`;
      values[3] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.scale(-1).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If a line has direction ratios ${rs.a}, ${rs.b}, ${rs.c}, then it's direction cosines are`;
      break;
    }
    case 3: {
      let rs = directionRatios();
      let x = randInt(100, -100);
      let y = randInt(100, -100);
      let z = randInt(100, -100);
      let rx = rs.a + x;
      let ry = rs.b + y;
      let rz = rs.c + z;
      let dc = {
        l: new Q(rs.a, rs.d),
        m: new Q(rs.b, rs.d),
        n: new Q(rs.c, rs.d)
      };
      dc.l.reduced();
      dc.m.reduced();
      dc.n.reduced();
      values[0] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
      values[1] = `\\(${dc.l.scale(-1).str()}, ${dc.m.str()}, ${dc.n.str()}\\)`;
      values[2] = `\\(${dc.l.str()}, ${dc.m.scale(-1).str()}, ${dc.n.str()}\\)`;
      values[3] = `\\(${dc.l.str()}, ${dc.m.str()}, ${dc.n.scale(-1).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `The direction cosines of the line passing through (${rx}, ${ry}, ${rz}) and (${x}, ${y}, ${z})  are`;
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
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Equation of line passing through \\(${p.strVector()}\\) and parallel to \\(${a.strVector()}\\) is`;
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
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Equation of line passing through \\(${p.strVector()}\\) and \\(${a.strVector()}\\) is`;
      break;
    }
    case 6: {
      let p = new Vector3D();
      p.randomV();
      let a = new Vector3D();
      a.randomV();
      let cartEq = "";
      if (a.x !== 0) {
        if (p.x > 0) cartEq += `\\frac{x - ${p.x}}{${a.x}}`;
        if (p.x < 0) cartEq += `\\frac{x + ${-p.x}}{${a.x}}`;
        if (p.x === 0) cartEq += `\\frac{x}{${a.x}}`;
      }
      if (cartEq.length > 0 && (a.y !== 0 || a.z !== 0)) cartEq += "=";
      if (a.y !== 0) {
        if (p.y > 0) cartEq += `\\frac{y - ${p.y}}{${a.y}}`;
        if (p.y < 0) cartEq += `\\frac{y + ${-p.y}}{${a.y}}`;
        if (p.y === 0) cartEq += `\\frac{y}{${a.y}}`;
      }
      if (cartEq.length > 0 && (a.y !== 0 && a.z !== 0)) cartEq += "=";
      if (a.z !== 0) {
        if (p.z > 0) cartEq += `\\frac{z - ${p.z}}{${a.z}}`;
        if (p.z < 0) cartEq += `\\frac{z + ${-p.z}}{${a.z}}`;
        if (p.z === 0) cartEq += `\\frac{z}{${a.z}}`;
      }
      values[0] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${a.strVector()})\\)`;
      values[1] = `\\(\\vec{r} = ${p.scale(-1).strVector()} + \\lambda(${a.strVector()})\\)`;
      values[2] = `\\(\\vec{r} = ${a.strVector()} + \\lambda(${p.strVector()})\\)`;
      values[3] = `\\(\\vec{r} = ${p.strVector()} + \\lambda(${p.strVector()})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `What is the vector form of the line \\[${cartEq}\\]`;
      break;
    }
    case 7: {
      let p = directionRatios(3);
      let r = directionRatios(3);
      let pvector = new Vector3D(p.a, p.b, p.c);
      let rvector = new Vector3D(r.a, r.b, r.c);
      let costheta = new Q(Math.abs(p.a * r.a + p.b * r.b + p.c * r.c), Math.abs(p.d * r.d));
      costheta.reduced();
      values[0] = `\\(${costheta.str()}\\)`;
      values[1] = `\\(${costheta.scale(-1).str()}\\)`;
      values[2] = `\\(${costheta.sub(new Q(1)).str()}\\)`;
      values[3] = `\\(${costheta.add(new Q(1)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If \\(\\theta\\) is the angle between lines passing through origin with direction ratios \\(${pvector.strVector()}\\) and \\(${rvector.strVector()}\\), then \\(\\cos\\theta\\) is`;
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
      values[0] = `(${sv.x}, ${sv.y}, ${sv.z}) and (${svo.x}, ${svo.y}, ${svo.z})`;
      values[1] = `(${qv.x}, ${qv.y}, ${qv.z}) and (${qvo.x}, ${qvo.y}, ${qvo.z})`;
      values[2] = `(${rv.x}, ${rv.y}, ${rv.z}) and (${rvo.x}, ${rvo.y}, ${rvo.z})`;
      values[3] = `(${pv.x}, ${pv.y}, ${pv.z}) and (${pvo.x}, ${pvo.y}, ${pvo.z})`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following pair of lines represented by the direction ratios are not orthogonal?`;
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
      values[0] = `(${sv.x}, ${sv.y}, ${sv.z}) and (${svo.x}, ${svo.y}, ${svo.z})`;
      values[1] = `(${qv.x}, ${qv.y}, ${qv.z}) and (${qvo.x}, ${qvo.y}, ${qvo.z})`;
      values[2] = `(${rv.x}, ${rv.y}, ${rv.z}) and (${rvo.x}, ${rvo.y}, ${rvo.z})`;
      values[3] = `(${pv.x}, ${pv.y}, ${pv.z}) and (${pvo.x}, ${pvo.y}, ${pvo.z})`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Which of the following pair of lines represented by the direction ratios are parallel?`;
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
      qv.cross(sv);
      let nums = qv.cross(rv.sub(pv)).sqlength();
      let dens = qv.sqlength();
      let ds = new Q(nums, dens);
      ds.reduced();
      let d = new Q();
      d.num = new Surd();
      d.num.surdFrom(ds.num);
      d.den = new Surd();
      d.den.surdFrom(ds.den);
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
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 0.7em;">The distance between parallel lines \\[\\vec{r} = ${pv.strVector()} + \\lambda (${qv.strVector()})\\] and \\[\\vec{r} = ${rv.strVector()} + \\lambda (${qv.strVector()})\\]</span>`;
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
      let dens = qs.sqlength();
      let ds = new Q(num * num, dens);
      ds.reduced();
      let d = new Q();
      d.num = new Surd();
      d.num.surdFrom(ds.num);
      d.den = new Surd();
      d.den.surdFrom(ds.den);
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
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 0.7em;">The distance between skew lines \\[\\vec{r} = ${pv.strVector()} + \\lambda (${qv.strVector()})\\] and \\[\\vec{r} = ${rv.strVector()} + \\lambda (${sv.strVector()})\\]</span>`;
      break;
    }
    case 12: {
      let p = directionRatios(3);
      let pv = new Vector3D(p.a, p.b, p.c);
      let d = randInt(10, 0);
      values[0] = `\\(\\vec{r}\\cdot(${pv.strVector()}) = ${p.d * d}\\)`;
      values[1] = `\\(\\vec{r}\\cdot(${pv.strVector()}) = ${d}\\)`;
      values[2] = `\\(\\vec{r}\\cdot(${pv.strVector()}) = ${p.d}\\)`;
      values[3] = `\\(\\vec{r}\\times(${pv.strVector()}) = ${p.d * d}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 0.7em;"> The vector equation of the plane which is at distance \\(${d}\\) from the origin and its normal vector from the origin is \\(${pv.strVector()}\\)</span>`;
      break;
    }
    case 13: {
      let plane = new Plane();
      plane.randomPlane();
      let d = plane.distance();
      d.reduced();
      values[0] = `\\(${d.str()}\\)`;
      values[1] = `\\(${d.add(new Q(1)).str()}\\)`;
      values[2] = `\\(${d.add(new Q(-1)).str()}\\)`;
      values[3] = `\\(${d.add(new Q(2)).str()}\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 0.7em;"> The distance of the plane \\(${plane.strCartesian()}\\) from the origin is</span>`;
      break;
    }
    case 14: {
      let plane = new Plane();
      let dr = plane.randomPlane();
      let d = plane.distance();
      d.reduced();
      let dc = {
        l: new Q(dr.a, dr.d),
        m: new Q(dr.b, dr.d),
        n: new Q(dr.c, dr.d)
      };
      values[0] = `\\((${d.mul(dc.l).str()}, ${d.mul(dc.m).str()}, ${d.mul(dc.n).str()})\\)`;
      values[1] = `\\((${d.scale(dr.a).str()}, ${d.scale(dr.b).str()}, ${d.scale(dr.c).str()})\\)`;
      values[2] = `\\((${dc.l.str()}, ${dc.m.str()}, ${dc.n.str()})\\)`;
      values[3] = `\\((${dr.a}, ${dr.b}, ${dr.c})\\)`;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="font-size: 0.7em;"> The coordinates of the foot of the perpendicular drawn from the origin to the plane \\(${plane.strCartesian()}\\) are</span>`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { geometry3d };
//# sourceMappingURL=geometry3d-BvVhDG9K.js.map
