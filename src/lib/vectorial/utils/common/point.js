//@ts-nocheck
export class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    duplicate() {
        return new Point(this.x, this.y);
    }
    length(origin = new Point()) {
        return Math.sqrt((this.x - origin.x)*(this.x - origin.x) + (this.y - origin.y)*(this.y - origin.y));
    }
    sqlength() {
        return this.x*this.x + this.y*this.y
    }
    angle(origin = new Point()) {
        let theta = Math.atan(Math.abs((this.y - origin.y)/(this.x - origin.x)));
        if(this.x >= origin.x && this.y >= origin.y) {
            theta = theta;
        }
        if(this.x < origin.x && this.y >= origin.y) {
            theta = Math.PI - theta;
        }
        if(this.x < origin.x && this.y < origin.y) {
            theta = Math.PI + theta;
        }
        if(this.x >= origin.x && this.y < origin.y) {
            theta = 2*Math.PI - theta;
        }
        return theta; 
    }
    isZero() {
        return this.x == 0 && this.y == 0;
    }
    scale(l) {
        return new Point(this.x*l, this.y*l);
    }
    a(q) {
        return new Point(this.x + q.x, this.y + q.y);
    }
    s(q) {
        return new Point(this.x - q.x, this.y - q.y);
    }
    m(q) {
        return new Point(this.x * q.x - this.y * q.y, this.x * q.y + this.y * q.x);
    }
    d(q) {
        if(q.isZero()) return 'Infinity';
        else {
            let r = new Point(this.x * q.x + this.y * q.y, -this.x * q.y + this.y * q.x)
            return r.scale(r.sqlength());
        }
    }
    dot(q) {
        return this.x * q.x + this.y * q.y;
    }
    adot(q) {
        return this.x * q.x - this.y * q.y;
    }
    onLine(p1, p2) {
        return (p2.y - p1.y) * (this.x - p1.x) - (p2.x - p1.x) * (this.y - p1.y);
    }
    reflect(q) {
        let r = this.s(q);
        return q.a(r.scale(-1));
    }
    reflectControl(q, r) {
        let t = this.s(q);
        if(t.isZero()) return r;
        let u = t.scale(-1/t.length());
        let t1 = r.s(q);
        if(t1.isZero()) return r;
        return q.a(u.scale(t1.length()));
    }
    rotate(theta, origin = new Point()) { // in radians, about origin
        let theta0 = this.angle(origin);
        let r = this.length(origin);
        let np = origin.a(new Point(r*Math.cos(theta + theta0), r*Math.sin(theta + theta0))) 
        return np;
    }
    translate(dx, dy) {
        return new Point(this.x + dx, this.y + dy)
    }
    scalet(lx = 1, ly = 1) {
        return new Point(lx * this.x, ly * this.y)
    }
    transform(tm) {
        let x = this.x * tm.a + this.y * tm.b + tm.e;
        let y = this.x * tm.c + this.y * tm.d + tm.f;
        return new Point(x, y);
    }
    project(target) {
        let sql = target.sqlength();
        let dotp = this.dot(target);
        return target.scale(dotp/sql);
    }
    anglePair(p1, p2) {//p1, this, p2
        let angle2 = p2.angle(this);
        let angle1 = p1.angle(this);
        // console.log('angle pair', this.x, this.y, p1.x, p1.y, p2.x, p2.y, angle1*180/Math.PI, angle2*180/Math.PI, (angle2-angle1)*180/Math.PI)
        return angle2 - angle1;
    }
    signLine(p1, p2) {
        return (this.x - p1.x) * (p2.y - p1.y) - (this.y - p1.y) * (p2.x - p1.x);
    }
    perpendicularDistance(p1, p2) {
        let area = 0.5 * (p1.x * (this.y - p2.y) + this.x * (p2.y - p1.y) + p2.x * (p1.y - this.y));
        let d = p1.length(p2);
        return 2 * Math.abs(area) / d;
    }
    orientation(q, r) {//this, q, r //0 collinear, 1 clockwise, 2 counterclockwise
        let val = (q.y - this.y) * (r.x - q.x) - (q.x - this.x) * (r.y - q.y);
        if(val === 0) return 0;
        return val > 0 ? 1 : 2;
    }
    onSegment(p, q) {//check whether this lies on segment pq
        return this.x <= Math.max(p.x, q.x) && this.x >= Math.min(p.x, q.x) && this.y <= Math.max(p.y, q.y) && this.y >= Math.min(p.y, q.y)
    }
}