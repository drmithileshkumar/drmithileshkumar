export class Matrix2x2 {
    constructor(rows) {
        this.rows = rows;
    }
    det() {
        return this.rows[0][0]*this.rows[1][1] - this.rows[0][1]*this.rows[1][0];
    }
    adj() {
        return new Matrix2x2([[this.rows[1][1], -this.rows[0][1]], [-this.rows[1][0], this.rows[0][0]]]);
    }
    T() {
        return new Matrix2x2([[this.rows[0][0], this.rows[1][0]], [this.rows[0][1], this.rows[1][1]]]);
    }
    op(v) {
        return [this.rows[0][0]*v[0] + this.rows[0][1]*v[1], this.rows[1][0]*v[0] + this.rows[1][1]*v[1]];
    }
}