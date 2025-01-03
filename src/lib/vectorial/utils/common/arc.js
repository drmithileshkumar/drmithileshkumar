import { Point } from './point';
export class Arc {
    constructor({
        P = new Point(),
        Q = new Point(),
        R = new Point()
    }={}) {
        this.P = P;
        this.Q = Q;
        this.R = R;
        let circle = this.circumcircle();
        this.r = circle.r;
        this.center = circle.center;
        let sl = this.lafsf();
        this.sf = sl.sf;
        this.laf = sl.laf;
    }
    circumcircle() {
        const EPSLON = 1.0e-6;
        const circle = {
            r: 0,
            center: new Point()
        };
        const QP = this.Q.s(this.P);
        const RP = this.R.s(this.P);
        const RQ = this.R.s(this.Q);
        const PQ = this.Q.a(this.P);
        const PR = this.R.a(this.P);

        const E = PQ.dot(QP);
        const F = PR.dot(RP);
        const G = 2 * (QP.x * RQ.y - QP.y * RQ.x);
        let dx, dy;
        if(Math.abs(G) < EPSLON) {
            const minx = Math.min(this.P.x, this.Q.x, this.R.x);
            const miny = Math.min(this.P.y, this.Q.y, this.R.y);
            const maxx = Math.max(this.P.x, this.Q.x, this.R.y);
            const maxy = Math.max(this.P.y, this.Q.y, this.R.y);

            circle.x = (minx + maxx)/2;
            circle.y = (miny + maxy)/2;

            dx = circle.x - minx;
            dy = circle.y - miny;
        } else {
            const cx = (RP.y * E - QP.y * F)/G;
            const cy = (QP.x * F - RP.x * E)/G;

            circle.x = cx;
            circle.y = cy;

            dx = circle.x - this.P.x;
            dy = circle.y - this.P.y;
        }
        circle.r = Math.sqrt(dx * dx + dy * dy);
        return circle;
    }
    lafsf() {
        let circle = this.circumcircle();
        let pointSide = this.Q.onLine(this.P, this.R) <= 0 ? 0 : 1;
        let centerSide = circle.center.onLine(this.P, this.R) <= 0 ? 0 : 1;
        let laf = 0, sf = 0;
        sf = pointSide === 0 ? 0 : 1;
        laf = (pointSide + centerSide) % 2 ? 1 : 0;
        return {sf, laf}
    }
}