//@ts-nocheck
import { Q } from "./fraction";
export const randomFractionDistribution = (start, end, k, arr) => {
    if(k < 1) return arr;
    if(k === 1) {
        let newPoint = end.sub(start);
        newPoint.reduced()
        arr = [...arr, newPoint];
        return arr;
    }
    let r = Math.random();
    let q = new Q(Math.floor(r * 100), 100);
    q.reduced();
    let newstart = q.mul(end.sub(start)).add(start);
    newstart.reduced()
    let newPoint = newstart.sub(start);
    newPoint.reduced();
    arr = [...arr, newPoint];
    k = k - 1;
    return randomFractionDistribution(newstart, end, k, arr);
}
export const distStrQ = (arr) => {
    let str = arr.map(item => item.str());
    return str.join(', ');
}