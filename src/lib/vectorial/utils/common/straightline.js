import { Point2D } from "./point2D";
import { Q } from './fraction';
export class StLine {
    constructor(P, Q) {
        this.P = P;
        this.Q = Q;
    }
    slope() {
        if(this.Q.x - this.P.x == 0) return 'Infinity';
        return new Q(this.Q.y - this.P.x, this.Q.x - this.P.x);
    }
    toabc() {
        let f = this.slope(); 
        return f instanceof Q ? {a: f, b: -1, c: f.scale(-this.P.x).add(this.P.y)} : {a: 1, b: 0, c: this.P.x};
    }
    point(m, n) {
        
    }
}