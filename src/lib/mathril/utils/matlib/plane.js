import { Point2D } from "./point2D";
import { Q } from "./fraction";
import { Surd } from "./surd";
import { randInt, directionRatios } from "./common";
import { Vector3D } from "./vector3D";

export class Plane {
    constructor (a = 0, b= 0, c = 0, d = 0) {
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
        return new Q(Math.abs(this.d), Math.abs(Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c)))
    }
    sqlength() {
        return this.a*this.a + this.b*this.b + this.c * this.c;
    }
    length() {
        return Math.sqrt(this.sqlength());
    }
    strCartesian() {
        let result = '';
        if(this.a === 0) {

        } else {
            if(this.a === 1) {
                result += 'x';
            } else if(this.a === -1) {
                result += '-x'
            } else {
                result += this.a + 'x'
            }
        }
        
        if(this.b === 0) {

        } else {
            if(this.b === 1) {
                result += result.length === 0 ? 'y' : '+y';
            } else if(this.b === -1) {
                result += '-y'
            } else {
                result += result.length === 0 || this.b < 0 ? this.b + 'y' : '+' + this.b + 'y';
            }
        }
        if(this.c === 0) {

        } else {
            if(this.c === 1) {
                result += result.length === 0 ? 'z' : '+z';
            } else if(this.c === -1) {
                result += '-z'
            } else {
                result += result.length === 0 || this.c < 0 ? this.c + 'z' : '+' + this.c + 'z';
            }
        }
        result += '=' + this.d;
        return result;

    }
    strVector() {
        let result = '';
        if(this.a === 0) {

        } else {
            if(this.a === 1) {
                result += '\\hat{i}';
            } else if(this.a === -1) {
                result += '-\\hat{i}'
            } else {
                result += this.a + '\\hat{i}'
            }
        }
        
        if(this.b === 0) {

        } else {
            if(this.b === 1) {
                result += result.length === 0 ? '\\hat{j}' : '+\\hat{j}';
            } else if(this.b === -1) {
                result += '-\\hat{j}'
            } else {
                result += result.length === 0 || this.b < 0 ? this.b + '\\hat{j}' : '+' + this.b + '\\hat{j}';
            }
        }
        if(this.c === 0) {

        } else {
            if(this.c === 1) {
                result += result.length === 0 ? '\\hat{k}' : '+\\hat{k}';
            } else if(this.c === -1) {
                result += '-\\hat{k}'
            } else {
                result += result.length === 0 || this.c < 0 ? this.c + '\\hat{k}' : '+' + this.c + '\\hat{k}';
            }
        }
        return result;
    }
    randomOrthogonal() {
        let v = new Vector3D()
        if(this.a === 0) {
            v.x = randInt(100, -100);
            if(this.b === 0) {
                v.y = randInt(100, -100);
                if(this.c === 0) {
                    v.z = randInt(100, -100);
                } else {
                    v.z = 0;
                }
            } else {
                if(this.c === 0) {//x=0,y!=0,z=0
                    v.y = 0;
                    v.z = randInt(100, -100);
                } else {//x=0,y!=0,z!=0
                    v.y = randInt(10, -10) * this.c;
                    v.z = -(this.b * v.y) / this.c;
                }
            }
        } else {
            if(this.b === 0) {
                v.y = randInt(100, -100);
                if(this.c === 0) {
                    v.x = 0;
                    v.z = randInt(100, -100);
                } else {//x!=0,y=0,z!=0
                    v.x = randInt(10, -10) * this.c;
                    v.z = -(this.a * v.x) / this.c;
                }
            } else {
                if(this.c === 0) {//x!=0,y!=0,z=0
                    v.x = randInt(10, -10) * this.b;
                    v.y = -(this.a * v.x) / this.b;
                    v.z = randInt(100, -100);
                } else {//x=0,y!=0,z!=0
                    v.x = randInt(10, -10) * this.c;
                    v.y = randInt(10, -10) * this.c;
                    v.z = -(this.a * v.x + this.b * v.y) / this.c;
                }
            }
        }
        return v;
    }
    scale(k) {
        return new Vector3D(this.a * k, this.b * k, this.c * k)
    }
    add(v) {
        return new Vector3D(this.a + v.x, this.b + v.y, this.c + v.z)
    }
    sub(v) {
        return new Vector3D(this.a - v.x, this.b - v.y, this.c - v.z)
    }
    dot(v) {
        return this.a * v.x + this.b * v.y + this.c * v.z;
    }
    cross(v) {
        return new Vector3D(this.b * v.z - this.c * v.y, this.c * v.x - this.a * v.z, this.a * v.y - this.b * v.x)
    }
}