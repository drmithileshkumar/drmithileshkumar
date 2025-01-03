import { Point2D } from "./point2D";
import { Q } from "./fraction";
import { Surd } from "./surd";

export class Vector {
    constructor (x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    sqlength() {
        return this.x*this.x + this.y*this.y;
    }
    length() {
        return Math.sqrt(this.sqlength());
    }
    
}