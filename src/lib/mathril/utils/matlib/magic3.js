//@ts-nocheck

import { randInt } from "./common";

export class Magic3 {
    constructor({square = []} = {}) {
        this.square = square
    }
    randomMagic () {
        let M = randInt(100, -100);
        let A = randInt(100, -100);
        let B = randInt(100, -100);
        while(A === B || A === 2*B || 2*A === B) {
            B = randInt(100, -100);
        }
        this.square = [
            [M - A, M + A + B, M - B],
            [M + A - B, M, M - A + B],
            [M + B, M - A - B, M + A]
        ]
    }
    draw(stars = []) {
        let rows = "";
        for(let i = 0; i < 3; i++) {
            rows += `<tr>`;
            for(let j = 0; j < 3; j++) {
                rows += `<td style="border: 1px solid currentcolor; text-align:center;">${stars.indexOf(i + '' + j) === -1 ? this.square[i][j] : '*'}</td>`
            }
            rows += `</tr>`
        }
        
        let tbl = `<table style="margin:auto;border: 1px solid currentcolor; border-collapse: collapse;">${rows}</table>`;
        return tbl;
    }
}
