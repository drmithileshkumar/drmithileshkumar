import { S as Surd, Q } from "./fraction.js";
import { r as randInt } from "./common.js";
class Vector3D {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  randomV(limit = 100) {
    this.x = randInt(limit, -limit);
    this.y = randInt(limit, -limit);
    this.z = randInt(limit, -limit);
  }
  sqlength() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.sqlength());
  }
  strVector(x = this.x, y = this.y, z = this.z) {
    let result = "";
    if (x === 0) ;
    else {
      if (x === 1) {
        result += "\\hat{i}";
      } else if (x === -1) {
        result += "-\\hat{i}";
      } else {
        result += x + "\\hat{i}";
      }
    }
    if (y === 0) ;
    else {
      if (y === 1) {
        result += result.length === 0 ? "\\hat{j}" : "+\\hat{j}";
      } else if (y === -1) {
        result += "-\\hat{j}";
      } else {
        result += result.length === 0 || y < 0 ? y + "\\hat{j}" : "+" + y + "\\hat{j}";
      }
    }
    if (z === 0) ;
    else {
      if (z === 1) {
        result += result.length === 0 ? "\\hat{k}" : "+\\hat{k}";
      } else if (z === -1) {
        result += "-\\hat{k}";
      } else {
        result += result.length === 0 || z < 0 ? z + "\\hat{k}" : "+" + z + "\\hat{k}";
      }
    }
    return result;
  }
  randomOrthogonal() {
    let v = new Vector3D();
    if (this.x === 0) {
      v.x = randInt(100, -100);
      if (this.y === 0) {
        v.y = randInt(100, -100);
        if (this.z === 0) {
          v.z = randInt(100, -100);
        } else {
          v.z = 0;
        }
      } else {
        if (this.z === 0) {
          v.y = 0;
          v.z = randInt(100, -100);
        } else {
          v.y = randInt(10, -10) * this.z;
          v.z = -(this.y * v.y) / this.z;
        }
      }
    } else {
      if (this.y === 0) {
        v.y = randInt(100, -100);
        if (this.z === 0) {
          v.x = 0;
          v.z = randInt(100, -100);
        } else {
          v.x = randInt(10, -10) * this.z;
          v.z = -(this.x * v.x) / this.z;
        }
      } else {
        if (this.z === 0) {
          v.x = randInt(10, -10) * this.y;
          v.y = -(this.x * v.x) / this.y;
          v.z = randInt(100, -100);
        } else {
          v.x = randInt(10, -10) * this.z;
          v.y = randInt(10, -10) * this.z;
          v.z = -(this.x * v.x + this.y * v.y) / this.z;
        }
      }
    }
    return v;
  }
  scale(k) {
    return new Vector3D(this.x * k, this.y * k, this.z * k);
  }
  add(v) {
    return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  sub(v) {
    return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
  cross(v) {
    return new Vector3D(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
  }
  cos(v) {
    let dp = this.dot(v);
    let ls1 = this.sqlength();
    let ls2 = v.sqlength();
    let sq = new Q(dp * dp, ls1 * ls2);
    sq.reduced();
    let srnum = new Surd([{ a: 1, r: sq.num }]);
    let srden = new Surd([{ a: 1, r: sq.den }]);
    srnum.reduced();
    srden.reduced();
    return srnum.div(srden);
  }
}
export {
  Vector3D as V
};
