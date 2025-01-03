//@ts-nocheck
import { randInt, setEqual, lcm, gcd } from './common';
export class Matrix2x2 {
    constructor(rows = [[0, 0], [0, 0]]) {
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
export class Matrix {
    constructor(a= [[0, 0], [0, 0]]) {
        this.a = a;
    }
    isZero() {
        for(let i = 0; i < this.a.length; i++) {
            for(let j = 0; this.a[0].length; j++) {
                if(this.a[i][j] !== 0) return false;
            }
        }
        return true;
    }
    column(j) {//return jth column j >= 0
        let col = [];
        for(let i = 0; i < this.a.length; i++) {
            col.push(this.a[i][j]);
        }
        return col;
    }
    randomRow(m = 2, limit = 10) {
        let row = [];
        for(let j = 0; j < m; j++) {
            row.push(randInt(limit, -limit));
        }
        return row;
    }
    randomMatrix(n = 2, m = 2, limit = 10, invertible = false) {
        this.a = [];
        if(!invertible) {
            for(let i = 0; i < n; i++) {
                this.a.push(this.randomRow(m, limit));
            }
        } else {
            m = n;
            for(let i = 0; i < n; i++) {
                this.a.push(this.randomRow(m, limit));
            }
            while(this.det() === 0) {
                this.a = this.perturb(10).a;
            }
        }
        
    }
    symmetrize() {
        return this.add(this.T()).scale(0.5);
    }
    toUpper() {
        let newMat = this.duplicate();
        for(let i = 0; i < newMat.a.length; i++) {
            for(let j = 0; j < i; j++) {
                newMat.a[i][j] = 0;
            }
        }
        return newMat;
    }
    toLower() {
        let newMat = this.duplicate();
        for(let i = 0; i < newMat.a.length; i++) {
            for(let j = i + 1; j < newMat.a[0].length; j++) {
                newMat.a[i][j] = 0;
            }
        }
        return newMat;
    }
    duplicate() {
        let newMat = new Matrix();
        newMat.a = [];
        for(let i = 0; i < this.a.length; i++) {
            let newRow = [];
            for(let j = 0; j < this.a[0].length; j++) {
                newRow.push(this.a[i][j]);
            }
            newMat.a.push(newRow);
        }
        return newMat;
    }
    perturb(limit, side = -1) {//-1 any, 0 diagonal, 1 upper, 2 lower, 3 offdiagonal
        let i0 = randInt(this.a.length - 1, 0);
        let j0 = randInt(this.a[0].length - 1, 0);
        switch(side) {
            case 'diagonal': {
                j0 = i0;
                break;
            }
            case 'upper': {
                if(j0 === i0) {
                    if(i0 === 0) {
                        j0 = j0 + 1;
                    }
                    if(i0 === this.a.length - 1) {
                        i0 = i0 - 1;
                    } else {
                        j0 = j0 + 1;
                    }
                } else {
                    if(j0 < i0) {
                        j0 = i0 + j0;
                        i0 = j0 - i0;
                        j0 = j0 - i0;
                    }
                }
                break;
            }
            case 'lower': {
                if(j0 === i0) {
                    if(i0 === 0) {
                        i0 = i0 + 1;
                    }
                    if(i0 === this.a.length - 1) {
                        j0 = j0 - 1;
                    } else {
                        i0 = i0 + 1;
                    }
                } else {
                    if(j0 > i0) {
                        j0 = i0 + j0;
                        i0 = j0 - i0;
                        j0 = j0 - i0;
                    }
                }
                break;
            }
            case 'off': {
                if(i0 === j0) j0 = (j0 + 1) % this.a[0].length;
                break;
            }
        }
        let newMat = this.duplicate();
        newMat.a[i0][j0] += randInt(limit, 1);
        return newMat;
    }
    submatrix(row = -1, column = -1) {
        let submat = new Matrix();
        submat.a = [];
        let n = this.a.length;
        let m = this.a[0].length;
        for(let i = 0; i < n; i++) {
            if(i !== row) {
                let newRow = [];
                for(let j = 0; j < m; j++) {
                    if(j !== column) {
                        newRow.push(this.a[i][j]);
                    }
                }
                submat.a.push(newRow);
            }
        }
        return submat;
    }
    scaleRow(row, k) {
        let newRow = [];
        for(let i = 0; i < row.length; i++) {
            newRow.push(k * row[i]);
        }
        return newRow;
    }
    scale(k = 1) {
        let newMat = new Matrix();
        newMat.a = [];
        for(let i = 0; i < this.a.length; i++) {
            newMat.a.push(this.scaleRow(this.a[i], k))
        }
        return newMat;
    }
    addRows(row1, row2) {
        let added = [];
        for(let i = 0; i < row1.length; i++ ) {
            added.push(row1[i] + row2[i]);
        }
        return added;
    }
    add(mat) {//assumes compatibility
        let newMat = new Matrix();
        newMat.a = [];
        for(let i = 0; i < this.a.length; i++) {
            newMat.a.push(this.addRows(this.a[i], mat.a[i]));
        }
        return newMat;
    }
    sub(mat) {
        return this.add(mat.scale(-1));
    }
    dotVec(vec1, vec2) {// assumes compatibility
        let res = 0;
        for(let i = 0; i < vec1.length; i++) {
            res += vec1[i] * vec2[i];
        }
        return res;
    }
    mul(mat) {
        let newMat = new Matrix();
        newMat.a = [];
        let columns = [];
        for(let j = 0; j < mat.a[0].length; j++) {
            columns.push(mat.column(j));
        }
        for(let i = 0; i < this.a.length; i++) {
            let newRow = [];
            for(let j = 0; j < mat.a[0].length; j++) {
                newRow.push(this.dotVec(this.a[i], columns[j]));
            }
            newMat.a.push(newRow);
        }
        return newMat;
    }
    T() { //transpose
        let newMat = new Matrix();
        newMat.a = [];
        for(let j = 0; j < this.a[0].length; j++) {
            newMat.a.push(this.column(j));
        }
        return newMat;
    }
    I(n) {//identity
        this.a = [];
        for(let i = 0; i < n; i++) {
            let newRow = [];
            for(let j = 0; j < n; j++) {
                if(i === j) {
                    newRow.push(1);
                } else {
                    newRow.push(0);
                }
            }
            this.a.push(newRow);
        }
    }
    Z(n, m = n) {
        this.a = [];
        for(let i = 0; i < n; i++) {
            let newRow = [];
            for(let j = 0; j < m; j++) {
                newRow.push(0);
            }
            this.a.push(newRow);
        }
    }
    R(r, k = 1) {
        let newMat = new Matrix();
        newMat.a = [];
        for(let i = 0; i < this.a.length; i++) {
            let newRow = [];
            if(i === r) {
                for(let j = 0; j < this.a[0].length; j++) {
                    newRow.push(this.a[r][j] * k);
                }
            } else {
                for(let j = 0; j < this.a[0].length; j++) {
                    newRow.push(this.a[i][j])
                }
            }
            newMat.a.push(newRow);
        }
        return newMat;
    }
    C(c, k = 1) {
        let newMat = new Matrix();
        newMat.a = [];
        for(let i = 0; i < this.a.length; i++) {
            let newRow = [];
            for(let j = 0; j < this.a[0].length; j++) {
                if(j === c) {
                    newRow.push(this.a[i][c] * k);
                } else {
                    newRow.push(this.a[i][j])
                }
            }
            newMat.a.push(newRow);
        }
        return newMat;
    }
    det() {
        let det = 0;
        if(this.a.length === 1) return this.a[0][0];
        if(this.a.length === 2 && this.a[0].length === 2) {
            return this.a[0][0] * this.a[1][1] - this.a[0][1] * this.a[1][0];
        }
        if(this.a.length >= 3) {
            for(let j = 0; j < this.a[0].length; j++) {
                det += Math.pow(-1, j) * this.a[0][j] * this.submatrix(0, j).det();
            }
            return det;
        }
    }
    minor(i, j) {
        return this.submatrix(i, j).det();
    }
    cofactor(i, j) {
        return Math.pow(-1, i + j) * this.minor(i, j);
    }
    adj() {
        let newMat = new Matrix();
        newMat.a = [];
        for(let i = 0; i < this.a[0].length; i++) {
            let newRow = [];
            for(let j = 0; j < this.a[0].length; j++) {
                newRow.push(this.cofactor(i, j));
            }
            newMat.a.push(newRow);
        }
        return newMat.T();
    }
    inverse() {
        let d = this.det();
        let a = this.adj();
        return {a, det: d}
    }
    str() {
        let m = this.a[0].length;
        let s = "\\begin{bmatrix} "
        for(let i = 0; i < this.a.length; i++) {
            for(let j = 0; j < m; j++) {
                s += this.a[i][j] + (j < m - 1 ? ' & ' : '\\\\')
            }
        }
        s += ' \\end{bmatrix}';
        return s;
    }
}