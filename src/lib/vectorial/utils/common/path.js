//@ts-nocheck
import { Point } from "./point";
import { Arc } from './arc';
import { Quadratic } from "./quadratic";
export class Path {
    constructor(
        {
            id = 'path',
            tag = 'path',
            name = 'Path',
            layer = 'Layer-0',
            parent = 'Layer-0',
            filltype = 'solid',
            fill = 'rgba(0, 0, 0, 0)',
            fillrule = 'evenodd',
            stroke = 'rgba(0, 0, 0, 1)',
            strokewidth = 2,
            strokedasharray = 'none',
            strokelinecap = 'butt',//butt, round, square
            strokelinejoin = 'miter',//arcs, bevel, miter, miter-clip, round
            strokemiterlimit = '4',//>=1
            vectorEffect = 'none', //none, non-scaling-size, non-rotation, fixed-position
            d = '',
            opacity = 1,
            pathLength = 1,
            tm = new DOMMatrix(),
            ctm = new DOMMatrix(),
            edges = [], // {id, tin, v, tout, t, c},
            //arc {id, tin, tout, c = A, r,ry=r, 0, sf, laf, v} tin controls radius
            //line {id, tin, tout, v, c = L}
            //Q {id, tin, tout, v, c = Q}
            uiEdges = [], // ctm(edges)
            nv = 0,
            axis = new Point(),
            bbox = null,
            sbox = {
                tl: new Point(),
                tr: new Point(),
                bl: new Point(),
                br: new Point()
            },
            isLocked = false,
            isVisible = true,
            isClosed = [false],
            filter = 'none',
            mask = 'none',
            preserveAspect = true,
            markerStart = "none",
            markerMid = 'none',
            markerEnd = 'none'
        } = {}) {

        this.id = id,
            this.tag = tag,
            this.name = name,
            this.layer = layer,
            this.parent = parent,
            this.filltype = filltype,
            this.fill = fill,
            this.fillrule = fillrule,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.strokedasharray = strokedasharray,
            this.strokelinecap = strokelinecap,
            this.strokelinejoin = strokelinejoin,
            this.strokemiterlimit = strokemiterlimit,
            this.vectorEffect = vectorEffect,
            this.opacity = opacity,
            this.pathLength = pathLength,
            this.d = d;
            this.tm = tm,
            this.ctm = ctm,
            this.edges = edges,
            this.uiEdges = uiEdges,
            this.nv = nv,
            this.axis = axis,
            this.bbox = bbox,
            this.sbox = sbox,
            this.isLocked = isLocked,
            this.isVisible = isVisible,
            this.isClosed = isClosed,
            this.filter = filter,
            this.mask = mask,
            this.preserveAspect = preserveAspect,
            this.markerStart = markerStart,
            this.markerEnd = markerEnd,
            this.markerMid = markerMid;
    }
    setD() {
        // this.d = 'M ';
        // if(this.edges.length > 0) {
        //     this.d += this.edges[0].v.x + ',' + this.edges[0].v.y + ' C ' + this.edges[0].tout.x + ',' + this.edges[0].tout.y;
        //     for(let i = 1; i < this.edges.length - 1; i++) {
        //         this.d += ' ' + this.edges[i].tin.x + ',' + this.edges[i].tin.y + ' ' + this.edges[i].v.x + ',' + this.edges[i].v.y + ' C ' + this.edges[i].tout.x + ',' + this.edges[i].tout.y
        //     }
        //     this.d += ' ' + this.edges[this.edges.length - 1].tin.x + ',' + this.edges[this.edges.length - 1].tin.y + ' ' + this.edges[this.edges.length - 1].v.x + ',' + this.edges[this.edges.length - 1].v.y;
        //     if(this.isClosed[subpath] && this.edges.length > 2) {
        //         this.d += ' C ' + this.edges[this.edges.length - 1].tout.x + ',' + this.edges[this.edges.length - 1].tout.y +
        //         ' ' + this.edges[0].tin.x + ',' + this.edges[0].tin.y + ' ' + this.edges[0].v.x + ',' + this.edges[0].v.y;
        //         this.d += ' Z';
        //     }
        // } 
        this.d = '';
        for (let i = 0; i < this.edges.length; i++) {
            for (let j = 0; j < this.edges[i].length; j++) {
                switch (this.edges[i][j].c) {
                    case 'M': {
                        this.d += 'M ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 'm': {
                        if (i > 0) {
                            let last = this.edges[i - 1].length - 1;
                            this.d += ' m ' + (this.edges[i][j].v.x - this.edges[i - 1][last].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i - 1][last].v.y);
                        } else {
                            this.d += 'm ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        }
                        break;
                    }
                    case 'L': {
                        this.d += ' L ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 'l': {
                        this.d += ' l ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
                        break;
                    }
                    case 'H': {
                        this.d += ' H ' + this.edges[i][j].v.x;
                        break;
                    }
                    case 'h': {
                        this.d += ' h ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x);
                        break;
                    }
                    case 'V': {
                        this.d += ' V ' + this.edges[i][j].v.y;
                        break;
                    }
                    case 'v': {
                        this.d += ' v ' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
                        break;
                    }
                    case 'Q': {
                        this.d += ' Q ' + this.edges[i][j].tin.x + ',' + this.edges[i][j].tin.y + ' ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 'q': {
                        this.d += ' q ' + (this.edges[i][j].tin.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].tin.y - this.edges[i][j - 1].v.y) + ' ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.x);
                        break;
                    }
                    case 'C': {
                        this.d += ' C ' + this.edges[i][j - 1].tout.x + ',' + this.edges[i][j - 1].tout.y + ' ' + this.edges[i][j].tin.x + ',' + this.edges[i][j].tin.y + ' ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 'c': {
                        this.d += ' c ' + (this.edges[i][j - 1].tout.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j - 1].tout.y - this.edges[i][j - 1].v.y) + ' ' + (this.edges[i][j].tin.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].tin.y - this.edges[i][j - 1].v.y) + ' ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.x);
                        break;
                    }
                    case 'S': {
                        this.d += ' S ' + this.edges[i][j].tin.x + ',' + this.edges[i][j].tin.y + ' ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 's': {
                        this.d += ' s ' + (this.edges[i][j].tin.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].tin.y - this.edges[i][j - 1].v.y) + ' ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.x);
                        break;
                    }
                    case 'T': {
                        this.d += ' T ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 't': {
                        this.d += ' t ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
                        break;
                    }
                    case 'A': {
                        this.d += ' A ' + this.edges[i][j].r + ' ' + (this.edges[i][j].ry || this.edges[i][j].r) + ' 0 ' + this.edges[i][j].laf + ' ' + this.edges[i][j].sf + ' ' + this.edges[i][j].v.x + ',' + this.edges[i][j].v.y;
                        break;
                    }
                    case 'a': {
                        this.d += ' a ' + this.edges[i][j].r + ' ' + (this.edges[i][j].ry || this.edges[i][j].r) + ' 0 ' + this.edges[i][j].laf + ' ' + this.edges[i][j].sf + ' ' + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + ',' + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
                        break;
                    }
                }
            }
            if (this.isClosed[i]) {
                this.d += ' Z';
            }
        }

    }
    cubic() {
        // C c0 c1 p
    }
    circumcircle(A, B, C) {
        const EPSLON = 1.0e-6;
        const circle = {};
        const BA = B.s(A);
        const CA = C.s(A);
        const CB = C.s(B);
        const AB = B.a(A);
        const AC = C.a(A);

        const E = AB.dot(BA);
        const F = AC.dot(CA);
        const G = 2 * (BA.x * CB.y - BA.y * CB.x);
        let dx, dy;
        if (Math.abs(G) < EPSLON) {
            const minx = Math.min(A.x, B.x, C.x);
            const miny = Math.min(A.y, B.y, C.y);
            const maxx = Math.max(A.x, B.x, C.y);
            const maxy = Math.max(A.y, B.y, C.y);

            circle.x = (minx + maxx) / 2;
            circle.y = (miny + maxy) / 2;

            dx = circle.x - minx;
            dy = circle.y - miny;
        } else {
            const cx = (CA.y * E - BA.y * F) / G;
            const cy = (BA.x * F - CA.x * E) / G;

            circle.x = cx;
            circle.y = cy;

            dx = circle.x - A.x;
            dy = circle.y - A.y;
        }
        circle.r = Math.sqrt(dx * dx + dy * dy);
        return circle;
    }
    arc(subpath, index) {
        //A rx ry angle sf af p
        // let index = this.edgeIndex(edgeId);
        // let arcurve = new Arc({
        //     P: this.edges[subpath][index - 1].v,
        //     Q: this.edges[subpath][index].tin,
        //     R: this.edges[subpath][index].v
        // });
        // this.edges[subpath][index].r = arcurve.r;
        // this.edges[subpath][index].center = arcurve.center;
        // this.edges[subpath][index].laf = arcurve.laf;
        // this.edges[subpath][index].sf = arcurve.sf;

        let circle = this.circumcircle(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v);
        this.edges[subpath][index].r = circle.r;

        let center = new Point(circle.x, circle.y);
        this.edges[subpath][index].center = center;
        let pointSide = this.edges[subpath][index].tin.onLine(this.edges[subpath][index - 1].v, this.edges[subpath][index].v) <= 0 ? 0 : 1;
        let centerSide = center.onLine(this.edges[subpath][index - 1].v, this.edges[subpath][index].v) <= 0 ? 0 : 1;
        if (pointSide === 0) {
            if (centerSide === 0) {
                this.edges[subpath][index].laf = 1;
                this.edges[subpath][index].sf = 0;
            } else {
                this.edges[subpath][index].laf = 0;
                this.edges[subpath][index].sf = 0;
            }
        } else {
            if (centerSide === 0) {
                this.edges[subpath][index].laf = 0;
                this.edges[subpath][index].sf = 1;
            } else {
                this.edges[subpath][index].laf = 1;
                this.edges[subpath][index].sf = 1;
            }
        }
        this.setD();
    }
    line() {
        //L p
    }
    close(edgeId = this.edges[0][0].id) {
        if (!edgeId) edgeId = this.edges[0][this.edges[0].length - 1].id;
        let { subpath, index } = this.edgeIndex(edgeId);
        if (!this.isClosed[subpath]) {
            this.isClosed[subpath] = true;
            this.addVertex(edgeId, this.uiEdges[subpath][0].v, true);
            this.edges[subpath][this.edges[subpath].length - 1].tout = this.edges[subpath][0].tout;
            this.edges[subpath][0].tin = this.edges[subpath][this.edges[subpath].length - 1].tin;
            this.uiEdges[subpath][this.edges[subpath].length - 1].tout = this.uiEdges[subpath][0].tout;
            this.uiEdges[subpath][0].tin = this.uiEdges[subpath][this.edges[subpath].length - 1].tin;
            this.setD();
            this.nv++;
        } else {
            this.open(edgeId);
        }
    }
    open(edgeId) {
        let { subpath, index } = this.edgeIndex(edgeId);
        if (this.isClosed[subpath]) {
            this.isClosed[subpath] = false;
            this.deleteVertex(this.edges[subpath][this.edges[subpath].length - 1].id);
            this.setD();
        }

    }
    transformVector(vec, tm) {
        return new Point(
            tm.a * vec.x + tm.c * vec.y + tm.e,
            tm.b * vec.x + tm.d * vec.y + tm.f
        )
    }
    invertEdge(edge) {
        let newEdge;
        let inv = this.ctm.inverse();
        switch (edge.c) {
            case 'a':
            case 'A': {
                newEdge = {
                    id: edge.id,
                    r: edge.r,
                    sf: edge.sf,
                    laf: edge.laf,
                    c: edge.c,
                    t: edge.t,
                    v: this.transformVector(edge.v, inv),
                    center: this.transformVector(edge.center, inv),
                    tin: edge.tin !== 'NA' ? this.transformVector(edge.tin, inv) : 'NA',
                    tout: edge.tout !== 'NA' ? this.transformVector(edge.tout, inv) : 'NA'
                }
                break;
            }
            default: {
                newEdge = {
                    id: edge.id,
                    c: edge.c,
                    t: edge.t,
                    v: this.transformVector(edge.v, inv),
                    tin: edge.tin !== 'NA' ? this.transformVector(edge.tin, inv) : 'NA',
                    tout: edge.tout !== 'NA' ? this.transformVector(edge.tout, inv) : 'NA'
                }
                break;
            }
        }
        return newEdge;
    }
    edgeIndex(edgeId) {
        let index = -1;
        let subpathI = -1;
        if (edgeId || edgeId === 0) {
            for (let subpath = 0; subpath < this.edges.length; subpath++) {
                for (let i = 0; i < this.edges[subpath].length; i++) {
                    if (Number(edgeId) === this.edges[subpath][i].id) {
                        subpathI = subpath;
                        index = i;
                    }
                }
            }
        }

        return { subpath: subpathI, index };
    }
    getMirror(subpath, index, mirrorIndex) {
        let reflectedIndex = 2 * mirrorIndex - index;
        return reflectedIndex;
    }
    addVertex(edgeId, point, end = false, mirrorMode = false, mirrorVertex = null) {//insert after index
        // console.log(edgeId)
        //console.log(edgeId, this.nv)
        let { subpath, index } = this.edgeIndex(edgeId);
        if (subpath <= -1) {
            subpath = this.edges.length;
            this.edges.push([]);
            this.uiEdges.push([]);
        }
        let inv = this.ctm.inverse();
        let np = this.transformVector(point, inv);
        let mirrorEdge, mirrorUIEdge;
        let newEdge = {
            id: this.nv,
            v: new Point(np.x, np.y),
            tout: 'NA',
            tin: 'NA',
            c: 'L',
            t: 'sharp'
        };
        let newUIEdge = {
            id: this.nv,
            v: new Point(point.x, point.y),
            tout: 'NA',
            tin: 'NA',
            c: 'L',
            t: 'sharp'
        };
        if (this.edges[subpath].length === 0) {
            this.edges[subpath].push({
                id: this.nv,
                v: new Point(np.x, np.y),
                tout: 'NA',
                tin: 'NA',
                c: 'M',
                t: 'sharp'
            })
            this.uiEdges[subpath].push({
                id: this.nv,
                v: new Point(point.x, point.y),
                tout: 'NA',
                tin: 'NA',
                c: 'M',
                t: 'sharp'
            })

        } else {
            if (!end) {//insert vertex
                // let parallel = this.edges[index + 1].v.s(this.edges[index].v).scale(0.2);
                // newEdge.tout = newEdge.v.a(parallel);
                // newEdge.tin = newEdge.v.s(parallel);

                if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
                    index = 0;
                }

                if (this.edges[subpath][index + 1].c === 'A' || this.edges[subpath][index + 1] === 'a') {
                    // this.arc(subpath, index + 1);
                    newEdge.tout = this.edges[subpath][index + 1].tin;
                } else if (this.edges[subpath][index].tout !== 'NA') {
                    newEdge.tout = this.edges[subpath][index].tout.a(newEdge.v.s(this.edges[subpath][index].v));
                }
                this.edges[subpath][index].tout = 'NA';

                // let parallel1 = this.uiEdges[subpath][index + 1].v.s(this.uiEdges[subpath][index].v).scale(0.2);
                // newUIEdge.tout = newUIEdge.v.a(parallel1);
                // newUIEdge.tin = newUIEdge.v.s(parallel1);
                if (this.uiEdges[subpath][index + 1].c === 'A' || this.uiEdges[subpath][index + 1] === 'a') {
                    newUIEdge.tout = this.uiEdges[subpath][index + 1].tin;
                } else if (this.uiEdges[subpath][index].tout !== 'NA') {
                    newUIEdge.tout = this.uiEdges[subpath][index].tout.a(newUIEdge.v.s(this.uiEdges[subpath][index].v));
                }
                this.uiEdges[subpath][index].tout = 'NA';
                this.edges[subpath].splice(index + 1, 0, newEdge);
                this.uiEdges[subpath].splice(index + 1, 0, newUIEdge);
                let updatable = ['V', 'H', 'h', 'v', 'c', 'a', 'l', 'q', 's', 't']
                if (updatable.indexOf(this.edges[subpath][index + 2].c) !== -1) {
                    // this.updateControl(this.edges[subpath][index + 2].id, newUIEdge.v, this.uiEdges[subpath][index].v, 'v');
                    this.transformUIControls();
                }

            } else {//add vertex at the end
                //console.log('adding vertex at the end...')
                if (index === -1) index = 0;
                // let parallel = newEdge.v.s(this.edges[index].v).scale(0.2);
                // newEdge.tin = newEdge.v.s(parallel);
                // this.edges[index].tout = this.edges[index].v.a(parallel);

                this.edges[subpath] = [...this.edges[subpath], newEdge];

                // let parallel1 = newUIEdge.v.s(this.uiEdges[subpath][index].v).scale(0.2);
                // newUIEdge.tin = newUIEdge.v.s(parallel1);
                // this.uiEdges[subpath][index].tout = this.uiEdges[subpath][index].v.a(parallel1);

                this.uiEdges[subpath] = [...this.uiEdges[subpath], newUIEdge];
                //console.log('Mirror vertex ...', mirrorVertex, mirrorMode)

                if (mirrorMode && !(mirrorVertex === null)) {
                    let mirrore = this.edgeIndex(mirrorVertex);
                    let mirrorSubpath = mirrore.subpath;
                    let mirrorIndex = mirrore.index;
                    this.nv++;
                    let mp = this.edges[mirrorSubpath][mirrorIndex].v;
                    mirrorEdge = {
                        id: this.nv,
                        v: new Point(2 * mp.x - np.x, np.y),
                        tout: 'NA',
                        tin: 'NA',
                        c: 'M',
                        t: 'sharp'
                    }
                    mirrorUIEdge = {
                        id: this.nv,
                        v: new Point(2 * this.uiEdges[mirrorSubpath][mirrorIndex].v.x - point.x, point.y),
                        tout: 'NA',
                        tin: 'NA',
                        c: 'M',
                        t: 'sharp'
                    }
                    this.edges[subpath][0].c = 'L';
                    this.uiEdges[subpath][0].c = 'L';
                    this.edges[subpath] = [mirrorEdge, ...this.edges[subpath]];
                    this.uiEdges[subpath] = [mirrorUIEdge, ...this.uiEdges[subpath]];
                }

            }
        }
        this.nv++;

        this.setD();
    }
    deleteVertex(edgeId) {
        let { subpath, index } = this.edgeIndex(edgeId);
        // console.log(index, this.isClosed[subpath]);
        if (this.isClosed[subpath] && this.edges[subpath].length <= 2) {
            this.edges.splice(subpath, 1);
            this.uiEdges.splice(subpath, 1);
            return;
        }
        if(index === 0) {
            this.edges[subpath][1].c = 'M';
            this.uiEdges[subpath][1].c = 'M';
            if(this.isClosed[subpath]) {
                let l = this.edges[subpath].length;
                this.edges[subpath][l - 1].v = this.edges[subpath][1].v;
                this.edges[subpath][l - 1].tin = this.edges[subpath][1].tin;
                this.edges[subpath][l - 1].tout = this.edges[subpath][1].tout;
                this.uiEdges[subpath][l - 1].v = this.uiEdges[subpath][1].v;
                this.uiEdges[subpath][l - 1].tin = this.uiEdges[subpath][1].tin;
                this.uiEdges[subpath][l - 1].tout = this.uiEdges[subpath][1].tout;
            } 
            this.edges[subpath].splice(index, 1);
            this.uiEdges[subpath].splice(index, 1);
            return;
        }
        if (this.edges[subpath].length > 2) {
            this.edges[subpath][index - 1].tout = this.edges[subpath][index].tout;
            this.uiEdges[subpath][index - 1].tout = this.uiEdges[subpath][index].tout;
        }
        this.edges[subpath].splice(index, 1);
        this.uiEdges[subpath].splice(index, 1);
    
        this.setD();
    }
    updateSelectionBox() {
        this.sbox.tl = this.transformVector({ x: this.bbox.x, y: this.bbox.y }, this.ctm);
        this.sbox.tr = this.transformVector({ x: this.bbox.x + this.bbox.width, y: this.bbox.y }, this.ctm);
        this.sbox.bl = this.transformVector({ x: this.bbox.x, y: this.bbox.y + this.bbox.height }, this.ctm);
        this.sbox.br = this.transformVector({ x: this.bbox.x + this.bbox.width, y: this.bbox.y + this.bbox.height }, this.ctm);
        this.sbox = this.sbox;
    }

    updateMirrorTin(subpath, index, mirrorIndex, reflectedIndex) {

        if (mirrorIndex > -1 && reflectedIndex > -1 && this.edges[subpath][reflectedIndex].tin !== 'NA') {
            this.edges[subpath][reflectedIndex].tin.x = 2 * this.edges[subpath][mirrorIndex].tin.x - this.edges[subpath][index].tin.x;
            this.edges[subpath][reflectedIndex].tin.y = this.edges[subpath][index].tin.y;
            if (this.edges[subpath][reflectedIndex].c === 'A' || this.edges[subpath][reflectedIndex].c === 'a') {
                this.arc(subpath, reflectedIndex);
            }
        }
    }
    updateMirrorTout(subpath, index, mirrorIndex, reflectedIndex) {
        if (mirrorIndex > -1 && reflectedIndex > -1 && this.edges[subpath][reflectedIndex].tout !== 'NA') {
            this.edges[subpath][reflectedIndex].tout.x = 2 * this.edges[subpath][mirrorIndex].tout.x - this.edges[subpath][index].tout.x;
            this.edges[subpath][reflectedIndex].tout.y = this.edges[subpath][index].tout.y;
            if (this.edges[subpath][reflectedIndex].c === 'A' || this.edges[subpath][reflectedIndex].c === 'a') {
                this.arc(subpath, reflectedIndex);
            }
        }
    }
    computeReflectedIndex(subpath, index, mirrorIndex) {
        let reflectedIndex = -1;
        if (mirrorIndex !== -1) {
            reflectedIndex = 2 * mirrorIndex - index;
            if (this.isClosed[subpath]) {
                if (reflectedIndex < 0) {
                    reflectedIndex += this.edges[subpath].length - 1;
                }
                // if(reflectedIndex === this.edges[subpath].length - 1) {
                //     reflectedIndex = this.edges[subpath].length - 2;
                // }
                // if(index === this.edges[subpath].length - 1) {
                //     reflectedIndex = -1;
                // }
                if (reflectedIndex > this.edges[subpath].length - 1) {
                    reflectedIndex = reflectedIndex - this.edges[subpath].length + 1;
                }
            }
            if (reflectedIndex === index) {
                reflectedIndex = -1;
            }
        }
        return reflectedIndex;
    }
    reflection(point, mirror) {
        return new Point(2 * mirror.x - point.x, point.y);
    }
    updateMirrorVertex(subpath, index, mirrorSubpath = -1, mirrorIndex = -1) {
        let reflectedIndex = -1;
        reflectedIndex = this.computeReflectedIndex(subpath, index, mirrorIndex);
        if (mirrorIndex > -1 && reflectedIndex > -1) {
            //vertex
            this.edges[subpath][reflectedIndex].v = this.reflection(this.edges[subpath][index].v, this.edges[subpath][mirrorIndex].v);
            switch(this.edges[subpath][reflectedIndex].c) {
                case 'v':
                case 'V': {
                    if(reflectedIndex - 1 > 0) {
                        let i = reflectedIndex - 1;
                        this.edges[subpath][i].v.x = this.edges[subpath][reflectedIndex].v.x;
                    } else {
                        let i = reflectedIndex - 1;
                        this.edges[subpath][i].v.x = this.edges[subpath][reflectedIndex].v.x;
                        this.edges[subpath][this.edges[subpath].length - 1].v = this.edges[subpath][i].v;
                    }
                    
                    break;
                }
            }
            //tout
            if (this.edges[subpath][index].tin !== 'NA' && this.edges[subpath][reflectedIndex].tout !== 'NA') {
                this.edges[subpath][reflectedIndex].tout = this.reflection(this.edges[subpath][index].tin, this.edges[subpath][mirrorIndex].v);
            }
            if (index < this.edges[subpath].length - 1) {
                if (this.edges[subpath][index + 1].tin !== 'NA') {
                    if (reflectedIndex > 0) {
                        if (this.edges[subpath][reflectedIndex - 1].tout !== 'NA') {
                            this.edges[subpath][reflectedIndex - 1].tout = this.reflection(this.edges[subpath][index + 1].tin, this.edges[subpath][mirrorIndex].v);
                        }
                    }
                }
            }
            //tin
            if (this.edges[subpath][index].tout !== 'NA' && this.edges[subpath][reflectedIndex].tin !== 'NA') {
                this.edges[subpath][reflectedIndex].tin = this.reflection(this.edges[subpath][index].tout, this.edges[subpath][mirrorIndex].v);
            }
            if (this.edges[subpath][reflectedIndex].c === 'A' || this.edges[subpath][reflectedIndex].c === 'a') {
                this.arc(subpath, reflectedIndex);
            }
            if (reflectedIndex < this.edges[subpath].length - 1) {
                switch (this.edges[subpath][reflectedIndex + 1].c) {
                    case 'a':
                    case 'A': {
                        this.edges[subpath][reflectedIndex + 1].tin = this.edges[subpath][reflectedIndex].tout;
                        this.arc(subpath, reflectedIndex + 1);
                        break;
                    }
                    case 'q':
                    case 'Q': {
                        this.edges[subpath][reflectedIndex + 1].tin = this.edges[subpath][reflectedIndex].tout;
                        break;
                    }
                }
            }
            //reflect back chain at reflected vertex
            //next vertex
            if (this.isClosed[subpath]) {
                if (reflectedIndex === 0) {
                    this.edges[subpath][this.edges[subpath].length - 1].v = this.edges[subpath][0].v;
                    this.edges[subpath][this.edges[subpath].length - 1].tin = this.edges[subpath][0].tin;
                    this.edges[subpath][this.edges[subpath].length - 1].tout = this.edges[subpath][0].tout;
                }
                if (reflectedIndex === this.edges[subpath].length - 1) {
                    this.edges[subpath][0].v = this.edges[subpath][this.edges[subpath].length - 1].v;
                    this.edges[subpath][0].tin = this.edges[subpath][this.edges[subpath].length - 1].tin;
                    this.edges[subpath][0].tout = this.edges[subpath][this.edges[subpath].length - 1].tout;
                }
            }
        }

    }
    updateVertex(subpath, index, change1, change, type, shift, mirrorSubpath = -1, mirrorIndex = -1) {
        if (!shift) {
            if (this.edges[subpath][index].c === 'H' || this.edges[subpath][index].c === 'h') {
                change1 = new Point(change1.x, 0);
            }
            if (this.edges[subpath][index].c === 'V' || this.edges[subpath][index].c === 'v') {
                change1 = new Point(0, change1.y);
            }
        }
        if (shift) {
            if (this.edges[subpath][index].c === 'H' || this.edges[subpath][index].c === 'h') {
                change1 = new Point(0, change1.y);;
            }
            if (this.edges[subpath][index].c === 'V' || this.edges[subpath][index].c === 'v') {
                change1 = new Point(change1.x, 0);
            }
        }
        //vertex
        this.edges[subpath][index].v = this.edges[subpath][index].v.a(change1);
        //tin
        if (this.edges[subpath][index].tin !== 'NA') {
            this.edges[subpath][index].tin = this.edges[subpath][index].tin.a(change1);
        }
        if (this.edges[subpath][index].c === 'A' || this.edges[subpath][index].c === 'a') {
            this.edges[subpath][index - 1].tout = this.edges[subpath][index].tin;
            this.arc(subpath, index);
        }
        if (this.edges[subpath][index].c === 'Q' || this.edges[subpath][index].c === 'q') {
            this.edges[subpath][index - 1].tout = this.edges[subpath][index].tin;
        }
        //tout
        if (this.edges[subpath][index].tout !== 'NA') {
            this.edges[subpath][index].tout = this.edges[subpath][index].tout.a(change1);
        }
        //next vertex
        if (index < this.edges[subpath].length - 1) {
            switch (this.edges[subpath][index + 1].c) {
                case 'h':
                case 'H': {
                    this.updateVertex(subpath, index + 1, change1, change, type, true, mirrorSubpath, mirrorIndex);
                    break;
                }
                case 'v':
                case 'V': {
                    this.updateVertex(subpath, index + 1, change1, change, type, true, mirrorSubpath, mirrorIndex);
                    break;
                }
                case 'l':
                case 'L': {
                    break;
                }
                case 'a':
                case 'A': {
                    this.edges[subpath][index + 1].tin = this.edges[subpath][index].tout;
                    this.arc(subpath, index + 1);
                    if (index + 1 === this.edges[subpath].length - 1 && this.isClosed[subpath]) {
                        this.edges[subpath][0].tin = this.edges[subpath][index + 1].tin;
                    }
                    break;
                }
                case 'q':
                case 'Q': {
                    this.edges[subpath][index + 1].tin = this.edges[subpath][index].tout;
                    if (index + 1 === this.edges[subpath].length - 1 && this.isClosed[subpath]) {
                        this.edges[subpath][0].tin = this.edges[subpath][index + 1].tin;
                    }
                    break;
                }
                case 'c':
                case 'C': {
                    break;
                }
                case 't':
                case 'T': {
                    break;
                }
                case 's':
                case 'S': {
                    break;
                }
            }
        }
        if (this.isClosed[subpath]) {
            if (index === this.edges[subpath].length - 1) {//last vertex
                this.updateVertex(subpath, 0, change1, change, type, shift);
            }
        }
        if (mirrorIndex > -1) {
            this.updateMirrorVertex(subpath, index, mirrorSubpath, mirrorIndex);
        }
    }
    updateTin(subpath, index, change1, change, type, shift, mirrorSubpath = -1, mirrorIndex = -1) {
        let reflectedIndex = -1;
        if (mirrorIndex !== -1) {
            reflectedIndex = 2 * mirrorIndex - index;
            if (this.isClosed[subpath]) {

                if (reflectedIndex < 0) {
                    reflectedIndex += this.edges[subpath].length - 1;
                }

                if (index === this.edges[subpath].length - 1) {
                    reflectedIndex = -1;
                }
            }
        }

        this.edges[subpath][index].tin = this.edges[subpath][index].tin.a(change1);
        if (index > 0) {
            switch (this.edges[subpath][index].c) {
                case 'q':
                case 'Q': {
                    this.edges[subpath][index - 1].tout = this.edges[subpath][index].tin;
                    break;
                }
                case 'a':
                case 'A': {
                    this.edges[subpath][index - 1].tout = this.edges[subpath][index].tin;
                    this.arc(subpath, index);
                    break;
                }

            }
            if (this.edges[subpath][index].c === 'Q' || this.edges[subpath][index].c === 'q') {

            }
        }
        if (this.edges[subpath][index].t === 'smooth') {
            this.edges[subpath][index].tout = this.edges[subpath][index].tin.reflectControl(this.edges[subpath][index].v, this.edges[subpath][index].tout);
        }
        if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
            this.updateTin(subpath, 0, change1, change, type, shift, mirrorSubpath, mirrorIndex);
        }
        if (mirrorSubpath === subpath && reflectedIndex > - 1 && reflectedIndex < this.edges[subpath].length) {
            if (this.edges[subpath][reflectedIndex].tout !== 'NA') {
                this.edges[subpath][reflectedIndex].tout.x = 2 * this.edges[subpath][mirrorIndex].v.x - this.edges[subpath][index].tin.x;
                this.edges[subpath][reflectedIndex].tout.y = this.edges[subpath][index].tin.y;
                if (reflectedIndex + 1 < this.edges[subpath].length) {
                    switch (this.edges[subpath][reflectedIndex + 1].c) {
                        case 'a':
                        case 'A': {
                            this.edges[subpath][reflectedIndex + 1].tin = this.edges[subpath][reflectedIndex].tout;
                            this.arc(subpath, reflectedIndex + 1);
                            break;
                        }
                        case 'q':
                        case 'Q': {
                            this.edges[subpath][reflectedIndex + 1].tin = this.edges[subpath][reflectedIndex].tout;
                            break;
                        }
                    }
                }
            }
            if (this.edges[subpath][index].t === 'smooth') {
                this.edges[subpath][reflectedIndex].tin.x = 2 * this.edges[subpath][mirrorIndex].v.x - this.edges[subpath][index].tout.x;
                this.edges[subpath][reflectedIndex].tin.y = this.edges[subpath][index].tout.y;
            }
            if (this.isClosed[subpath]) {
                if (reflectedIndex === 0) {
                    this.edges[subpath][this.edges[subpath].length - 1].tout = this.edges[subpath][0].tout;
                    this.edges[subpath][this.edges[subpath].length - 1].tin = this.edges[subpath][0].tin;
                }
            }
        }
    }
    updateTout(subpath, index, change1, change, type, shift, mirrorSubpath = -1, mirrorIndex = -1) {
        let reflectedIndex = -1;
        if (mirrorIndex !== -1) {
            reflectedIndex = 2 * mirrorIndex - index;
            if (this.isClosed[subpath]) {
                if (reflectedIndex < 0) {
                    reflectedIndex += this.edges[subpath].length - 1;
                }
                // if(reflectedIndex === this.edges[subpath].length - 1) {
                //     reflectedIndex = this.edges[subpath].length - 2;
                // }
                if (index === this.edges[subpath].length - 1) {
                    reflectedIndex = -1;
                }
            }
        }

        this.edges[subpath][index].tout = this.edges[subpath][index].tout.a(change1);

        if (this.edges[subpath][index].t === 'smooth') {
            this.edges[subpath][index].tin = this.edges[subpath][index].tout.reflectControl(this.edges[subpath][index].v, this.edges[subpath][index].tin);
        }
        if (index < this.edges[subpath].length - 1) {
            switch (this.edges[subpath][index + 1].c) {
                case 'q':
                case 'Q': {
                    this.edges[subpath][index + 1].tin = this.edges[subpath][index].tout;
                    break;
                }
                case 'C': {
                    break;
                }
                case 'a':
                case 'A': {
                    this.edges[subpath][index + 1].tin = this.edges[subpath][index].tout;
                    // this.uiEdges[subpath][index + 1].tin = this.uiEdges[subpath][index + 1].tin.a(change);
                    this.arc(subpath, index + 1);
                    break;
                }
            }
        }
        if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
            this.updateTout(subpath, 0, change1, change, type, shift, mirrorSubpath, mirrorIndex);
        }
        if (mirrorSubpath === subpath && reflectedIndex > - 1 && reflectedIndex < this.edges[subpath].length) {
            if (this.edges[subpath][reflectedIndex].tin !== 'NA') {
                this.edges[subpath][reflectedIndex].tin.x = 2 * this.edges[subpath][mirrorIndex].v.x - this.edges[subpath][index].tout.x;
                this.edges[subpath][reflectedIndex].tin.y = this.edges[subpath][index].tout.y;
                switch (this.edges[subpath][reflectedIndex].c) {
                    case 'a':
                    case 'A': {
                        this.edges[subpath][reflectedIndex - 1].tout = this.edges[subpath][reflectedIndex].tin;
                        this.arc(subpath, reflectedIndex);
                        break;
                    }
                    case 'q':
                    case 'Q': {
                        this.edges[subpath][reflectedIndex - 1].tout = this.edges[subpath][reflectedIndex].tin;
                    }
                }
            }
            if (this.edges[subpath][index].t === 'smooth') {
                this.edges[subpath][reflectedIndex].tout.x = 2 * this.edges[subpath][mirrorIndex].v.x - this.edges[subpath][index].tin.x;
                this.edges[subpath][reflectedIndex].tout.y = this.edges[subpath][index].tin.y;
            }
            if (this.isClosed[subpath]) {
                if (reflectedIndex === 0) {
                    this.edges[subpath][this.edges[subpath].length - 1].tout = this.edges[subpath][0].tout;
                    this.edges[subpath][this.edges[subpath].length - 1].tin = this.edges[subpath][0].tin;
                }
            }
        }
    }
    updateChange(subpath, index, change1, change, type, shift = false, mirrorSubpath = -1, mirrorIndex = -1, circleMode = false, verticesOnCircle = [], circleCenter = null) {

        switch (type) {
            case 'v': {
                this.updateVertex(subpath, index, change1, change, type, shift, mirrorSubpath, mirrorIndex);

                if (circleMode) {
                    let angle = 2 * Math.PI / verticesOnCircle.length;
                    let newPoint = new Point();
                    let newChange1 = new Point();
                    let circledIndex, circledSubpath;
                    for (let i = 0; i < verticesOnCircle.length; i++) {//assume index corresponds to i = 0
                        let subindex = this.edgeIndex(verticesOnCircle[i]);
                        circledIndex = subindex.index;
                        circledSubpath = subindex.subpath;
                        if (circledIndex !== -1 && circledSubpath === subpath) {

                            if (circledIndex !== index) {
                                //compute new change1 for this vertex/controlpoint
                                //every point is rotation of the first vertex in the list about axis

                                newPoint = this.edges[subpath][index].v.rotate(i * angle, circleCenter);
                                newChange1 = newPoint.s(this.edges[subpath][circledIndex].v);
                                this.updateVertex(subpath, circledIndex, newChange1, change, 'v', shift, mirrorSubpath, mirrorIndex);
                                //updatevertex
                            }
                        }
                    }
                }
                break;
            }
            case 'tin': {
                this.updateTin(subpath, index, change1, change, type, shift, mirrorSubpath, mirrorIndex);
                if (circleMode) {
                    let angle = 2 * Math.PI / verticesOnCircle.length;
                    let newPoint = new Point();
                    let newChange1 = new Point();
                    let circledIndex, circledSubpath;
                    for (let i = 0; i < verticesOnCircle.length; i++) {//assume index corresponds to i = 0
                        let subindex = this.edgeIndex(verticesOnCircle[i]);
                        circledIndex = subindex.index;
                        circledSubpath = subindex.subpath;
                        if (circledIndex !== -1 && circledSubpath === subpath && this.edges[subpath][circledIndex].tin !== 'NA') {

                            if (circledIndex !== index) {
                                //compute new change1 for this vertex/controlpoint
                                //every point is rotation of the first vertex in the list about axis

                                newPoint = this.edges[subpath][index].tin.rotate(i * angle, circleCenter);
                                newChange1 = newPoint.s(this.edges[subpath][circledIndex].tin);
                                this.updateTin(subpath, circledIndex, newChange1, change, 'tin', shift, mirrorSubpath, mirrorIndex);
                                //updatevertex
                            }
                        }
                    }
                }
                break;
            }
            case 'tout': {
                this.updateTout(subpath, index, change1, change, type, shift, mirrorSubpath, mirrorIndex);
                if (circleMode) {
                    let angle = 2 * Math.PI / verticesOnCircle.length;
                    let newPoint = new Point();
                    let newChange1 = new Point();
                    let circledIndex, circledSubpath;
                    for (let i = 0; i < verticesOnCircle.length; i++) {//assume index corresponds to i = 0
                        let subindex = this.edgeIndex(verticesOnCircle[i]);
                        circledIndex = subindex.index;
                        circledSubpath = subindex.subpath;
                        if (circledIndex !== -1 && circledSubpath === subpath && this.edges[subpath][circledIndex].tout !== 'NA') {

                            if (circledIndex !== index) {
                                //compute new change1 for this vertex/controlpoint
                                //every point is rotation of the first vertex in the list about axis

                                newPoint = this.edges[subpath][index].tout.rotate(i * angle, circleCenter);
                                newChange1 = newPoint.s(this.edges[subpath][circledIndex].tout);
                                this.updateTout(subpath, circledIndex, newChange1, change, 'tout', shift, mirrorSubpath, mirrorIndex);
                                //updatevertex
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    updateControl(edgeId, coord, offset, type, mirrorMode = false, mirrorVertex = null, circleMode = false, verticesOnCircle = [], circleCenter = null) {
        let { subpath, index } = this.edgeIndex(edgeId);
        let mirrorEdge, mirrorSubpath = -1, mirrorIndex = -1;
        if (mirrorMode) {
            mirrorEdge = this.edgeIndex(mirrorVertex);
            mirrorSubpath = mirrorEdge.subpath;
            mirrorIndex = mirrorEdge.index;
        }
        let inv = this.ctm.inverse();
        let coord1 = this.transformVector(coord, inv);
        let offset1 = this.transformVector(offset, inv);
        let change = new Point(coord.x - offset.x, coord.y - offset.y);
        let change1 = new Point(coord1.x - offset1.x, coord1.y - offset1.y);
        let shift = false;
        if (edgeId !== verticesOnCircle[0]) circleMode = false;
        if (verticesOnCircle.indexOf(edgeId) === -1) circleMode = false;
        if (circleMode) {
            circleCenter = this.transformVector(circleCenter, inv);
        }
        this.updateChange(subpath, index, change1, change, type, shift, mirrorSubpath, mirrorIndex, circleMode, verticesOnCircle, circleCenter);
        this.transformUIControls();

        this.setD();
    }
    M2m(subpath, index) {
        this.edges[subpath][index].c = 'm';
        this.uiEdges[subpath][index].c = 'm';
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';
        this.setD();
    }
    m2M(subpath, index) {
        this.edges[subpath][index].c = 'M';
        this.uiEdges[subpath][index].c = 'M';
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';
        this.setD();
    }
    L2l(subpath, index) {
        this.edges[subpath][index].c = 'l';
        this.uiEdges[subpath][index].c = 'l';
        this.setD();
    }
    l2L(subpath, index) {
        this.edges[subpath][index].c = 'L';
        this.uiEdges[subpath][index].c = 'L';
        this.setD();
    }
    H2h(subpath, index) {
        this.edges[subpath][index].c = 'h';
        this.uiEdges[subpath][index].c = 'h';
        this.setD();
    }
    h2H(subpath, index) {
        this.edges[subpath][index].c = 'H';
        this.uiEdges[subpath][index].c = 'H';
        this.setD();
    }
    V2v(subpath, index) {
        this.edges[subpath][index].c = 'v';
        this.uiEdges[subpath][index].c = 'v';
        this.setD();
    }
    v2V(subpath, index) {
        this.edges[subpath][index].c = 'V';
        this.uiEdges[subpath][index].c = 'V';
        this.setD();
    }
    Q2q(subpath, index) {
        this.edges[subpath][index].c = 'q';
        this.uiEdges[subpath][index].c = 'q';
        this.setD();
    }
    q2Q(subpath, index) {
        this.edges[subpath][index].c = 'Q';
        this.uiEdges[subpath][index].c = 'Q';
        this.setD();
    }
    C2c(subpath, index) {
        this.edges[subpath][index].c = 'c';
        this.uiEdges[subpath][index].c = 'c';
        this.setD();
    }
    c2C(subpath, index) {
        this.edges[subpath][index].c = 'C';
        this.uiEdges[subpath][index].c = 'C';
        this.setD();
    }
    A2a(subpath, index) {
        this.edges[subpath][index].c = 'a';
        this.uiEdges[subpath][index].c = 'a';
        this.setD();
    }
    a2A(subpath, index) {
        this.edges[subpath][index].c = 'A';
        this.uiEdges[subpath][index].c = 'A';
        this.setD();
    }
    S2s(subpath, index) {
        this.edges[subpath][index].c = 's';
        this.uiEdges[subpath][index].c = 's';
        this.setD();
    }
    s2S(subpath, index) {
        this.edges[subpath][index].c = 'S';
        this.uiEdges[subpath][index].c = 'S';
        this.setD();
    }
    T2t(subpath, index) {
        this.edges[subpath][index].c = 't';
        this.uiEdges[subpath][index].c = 't';
        this.setD();
    }
    t2T(subpath, index) {
        this.edges[subpath][index].c = 'T';
        this.uiEdges[subpath][index].c = 'T';
        this.setD();
    }
    L2T(subpath, index) {
        this.edges[subpath][index].c = 'T';
        this.uiEdges[subpath][index].c = 'T';
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';
        this.setD();
    }
    T2L(subpath, index) {
        this.edges[subpath][index].c = 'L';
        this.uiEdges[subpath][index].c = 'L';
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';
        this.setD();
    }
    L2H(subpath, index) {
        this.edges[subpath][index].c = 'H';
        this.uiEdges[subpath][index].c = 'H';
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';

        if (index > 0) {
            this.edges[subpath][index].v = new Point(this.edges[subpath][index].v.x, this.edges[subpath][index - 1].v.y);
            this.uiEdges[subpath][index].v = this.transformVector(this.edges[subpath][index].v, this.ctm);
        }
        if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
            this.edges[subpath][0].v = this.edges[subpath][index].v;
            this.uiEdges[subpath][0].v = this.uiEdges[subpath][index].v;
        }
        this.setD();
    }
    H2L(subpath, index) {
        this.edges[subpath][index].c = 'L';
        this.uiEdges[subpath][index].c = 'L';
        this.setD();
    }
    L2V(subpath, index) {
        this.edges[subpath][index].c = 'V';
        this.uiEdges[subpath][index].c = 'V';
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';

        if (index > 0) {
            this.edges[subpath][index].v = new Point(this.edges[subpath][index - 1].v.x, this.edges[subpath][index].v.y);
            this.uiEdges[subpath][index].v = this.transformVector(this.edges[subpath][index].v, this.ctm);
        }
        if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
            this.edges[subpath][0].v = this.edges[subpath][index].v;
            this.uiEdges[subpath][0].v = this.uiEdges[subpath][index].v;
        }
        this.setD();
    }
    V2L(subpath, index) {
        this.edges[subpath][index].c = 'L';
        this.uiEdges[subpath][index].c = 'L';
        this.setD();
    }
    L2C(subpath, index) {
        if (index > 0) {
            this.edges[subpath][index].c = 'C';
            this.uiEdges[subpath][index].c = 'C';
            let parallel, parallel1;
            parallel = this.edges[subpath][index].v.s(this.edges[subpath][index - 1].v).scale(0.2);
            this.edges[subpath][index].tin = this.edges[subpath][index].v.s(parallel);
            this.edges[subpath][index - 1].tout = this.edges[subpath][index - 1].v.a(parallel);

            parallel1 = this.uiEdges[subpath][index].v.s(this.uiEdges[subpath][index - 1].v).scale(0.2);
            this.uiEdges[subpath][index].tin = this.uiEdges[subpath][index].v.s(parallel1);
            this.uiEdges[subpath][index - 1].tout = this.uiEdges[subpath][index - 1].v.a(parallel1);
        }
        if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
            this.edges[subpath][0].tin = this.edges[subpath][index].tin;
            this.uiEdges[subpath][0].tin = this.uiEdges[subpath][index].tin;
        }
        this.setD();
    }
    C2L(subpath, index) {
        this.edges[subpath][index].t = 'sharp';
        this.edges[subpath][index].c = 'L';
        this.uiEdges[subpath][index].c = 'L';
        this.edges[subpath][index].tin = 'NA';
        this.uiEdges[subpath][index].tin = 'NA';
        if (index > 0) {
            this.edges[subpath][index - 1].tout = 'NA';
            this.uiEdges[subpath][index - 1].tout = 'NA';
        }
        if (this.isClosed[subpath]) {
            if (index === 1) {
                this.edges[subpath][0].tout = 'NA';
                this.uiEdges[subpath][0].tout = 'NA';
            }
            if (index === this.edges[subpath].length - 1) {
                this.edges[subpath][0].t = 'sharp';
                this.edges[subpath][0].tin = 'NA';
                this.uiEdges[subpath][0].tin = 'NA';
            }
        }

        this.setD();
    }
    L2S(subpath, index) {
        if (index > 0) {
            this.edges[subpath][index].c = 'S';
            this.uiEdges[subpath][index].c = 'S';
            let parallel, parallel1;
            parallel = this.edges[subpath][index].v.s(this.edges[subpath][index - 1].v).scale(0.2);
            this.edges[subpath][index].tin = this.edges[subpath][index].v.s(parallel);
            // this.edges[subpath][index - 1].tout = this.edges[subpath][index - 1].v.a(parallel);

            parallel1 = this.uiEdges[subpath][index].v.s(this.uiEdges[subpath][index - 1].v).scale(0.2);
            this.uiEdges[subpath][index].tin = this.uiEdges[subpath][index].v.s(parallel1);
            // this.uiEdges[subpath][index - 1].tout = this.uiEdges[subpath][index - 1].v.a(parallel1);
        }
        if (this.isClosed[subpath]) {
            if (index === 1) {
                //to fix
            }
            if (index === this.edges[subpath].length - 1) {
                this.edges[subpath][0].tin = this.edges[subpath][index].tin;
                this.uiEdges[subpath][0].tin = this.uiEdges[subpath][index].tin;
            }
        }
        this.setD();
    }
    S2L(subpath, index) {
        this.edges[subpath][index].t = 'sharp';
        this.edges[subpath][index].c = 'L';
        this.uiEdges[subpath][index].c = 'L';
        this.edges[subpath][index].tin = 'NA';
        this.uiEdges[subpath][index].tin = 'NA';
        if (index > 0) {
            this.edges[subpath][index - 1].tout = 'NA';
            this.uiEdges[subpath][index - 1].tout = 'NA';
        }
        if (this.isClosed[subpath]) {
            if (index === this.edges[subpath].length - 1) {
                this.edges[subpath][0].t = 'sharp';
                this.edges[subpath][0].tin = 'NA';
                this.uiEdges[subpath][0].tin = 'NA';
            }
        }
        this.setD();
    }
    Q2C(subpath, index) {
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';
        this.edges[subpath][index].c = 'C';
        this.uiEdges[subpath][index].c = 'C';
        this.setD();
    }
    C2Q(subpath, index) {
        this.edges[subpath][index].t = 'sharp';
        this.uiEdges[subpath][index].t = 'sharp';
        this.edges[subpath][index].c = 'Q';
        this.uiEdges[subpath][index].c = 'Q';
        if (index > 0) {
            this.edges[subpath][index - 1].tout = this.edges[subpath][index].tin;
            this.uiEdges[subpath][index - 1].tout = this.uiEdges[subpath][index].tin;
        }
        this.setD();
    }
    C2A(subpath, index) {
        this.edges[subpath][index].c = 'A';
        this.uiEdges[subpath][index].c = 'A';
        this.edges[subpath][index - 1].tout = this.edges[subpath][index].tin;
        this.uiEdges[subpath][index - 1].tout = this.uiEdges[subpath][index].tin;
        this.arc(subpath, index);
        this.uiEdges[subpath][index].center = this.transformVector(this.edges[subpath][index].center, this.ctm);
    }
    A2C(subpath, index) {
        this.edges[subpath][index].c = 'C';
        this.uiEdges[subpath][index].c = 'C';
        this.setD();
    }
    convertEdge(edgeId, targetc, type) {//type = 'sharp', 'smooth'
        
        let { subpath, index } = this.edgeIndex(edgeId);
        // console.log(edgeId, targetc, type)
        if (type === 'smooth') {
            if(index === 0 && this.isClosed[subpath]) {
                let l = this.edges[subpath].length - 1;
                this.edges[subpath][index].tout = this.edges[subpath][l].tout;
                this.edges[subpath][index].tin = this.edges[subpath][l].tin;
                this.uiEdges[subpath][index].tout = this.uiEdges[subpath][l].tout;
                this.uiEdges[subpath][index].tin = this.uiEdges[subpath][l].tin;

                this.edges[subpath][index].t = type;
                this.uiEdges[subpath][index].t = type;
            } else if (this.edges[subpath][index].c === 'C' || this.edges[subpath][index].c === 'c') {
                if (index < this.edges[subpath].length - 1 && (this.edges[subpath][index + 1].c === 'C' || this.edges[subpath][index + 1].c === 'c')) {
                    if (this.edges[subpath].length > 2 && index > 0) {
                        let parallel = this.edges[subpath][index + 1].v.s(this.edges[subpath][index - 1].v).scale(0.2);
                        this.edges[subpath][index].tout = this.edges[subpath][index].v.a(parallel);
                        this.edges[subpath][index].tin = this.edges[subpath][index].v.s(parallel);


                        let parallel1 = this.uiEdges[subpath][index + 1].v.s(this.uiEdges[subpath][index - 1].v).scale(0.2);
                        this.uiEdges[subpath][index].tout = this.uiEdges[subpath][index].v.a(parallel1);
                        this.uiEdges[subpath][index].tin = this.uiEdges[subpath][index].v.s(parallel1);

                        this.edges[subpath][index].t = type;
                        this.uiEdges[subpath][index].t = type;
                    }
                }
                // if(this.isClosed[subpath] && index === 0) {
                //     let parallel = this.edges[subpath][index + 1].v.s(this.edges[subpath][this.edges[subpath].length - 2].v).scale(0.2);
                //     this.edges[subpath][index].tout = this.edges[subpath][index].v.a(parallel);
                //     this.edges[subpath][index].tin = this.edges[subpath][index].v.s(parallel);


                //     let parallel1 = this.uiEdges[subpath][index + 1].v.s(this.uiEdges[subpath][this.edges[subpath].length - 2].v).scale(0.2);
                //     this.uiEdges[subpath][index].tout = this.uiEdges[subpath][index].v.a(parallel1);
                //     this.uiEdges[subpath][index].tin = this.uiEdges[subpath][index].v.s(parallel1);
                // }
                if (this.isClosed[subpath] && index === this.edges[subpath].length - 1) {
                    if (this.edges[subpath][1].c === 'C' || this.edges[subpath][1].c === 'c') {
                        let parallel = this.edges[subpath][1].v.s(this.edges[subpath][index - 1].v).scale(0.2);
                        this.edges[subpath][index].tout = this.edges[subpath][index].v.a(parallel);
                        this.edges[subpath][index].tin = this.edges[subpath][index].v.s(parallel);


                        let parallel1 = this.uiEdges[subpath][1].v.s(this.uiEdges[subpath][index - 1].v).scale(0.2);
                        this.uiEdges[subpath][index].tout = this.uiEdges[subpath][index].v.a(parallel1);
                        this.uiEdges[subpath][index].tin = this.uiEdges[subpath][index].v.s(parallel1);

                        this.edges[subpath][0].t = type;
                        this.edges[subpath][0].tin = this.edges[subpath][index].tin;
                        this.edges[subpath][0].tout = this.edges[subpath][index].tout;
                        this.uiEdges[subpath][0].t = type;
                        this.uiEdges[subpath][0].tin = this.uiEdges[subpath][index].tin;
                        this.uiEdges[subpath][0].tout = this.uiEdges[subpath][index].tout;

                        this.edges[subpath][index].t = type;
                        this.uiEdges[subpath][index].t = type;
                    }
                }
            }
        } else {
            this.edges[subpath][index].t = type;
            this.uiEdges[subpath][index].t = type;
            switch (targetc) {
                case 'H': {
                    switch (this.edges[subpath][index].c) {
                        case 'h': {
                            this.h2H(subpath, index);
                            break;
                        }
                        case 'C': {
                            this.C2L(subpath, index);
                            this.L2H(subpath, index);
                            break;
                        }
                        case 'L': {
                            this.L2H(subpath, index);
                            break;
                        }
                        case 'V': {
                            this.V2L(subpath, index);
                            this.L2H(subpath, index);
                            break;
                        }
                        case 'A': {
                            this.A2L(subpath, index);
                            this.L2H(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'V': {
                    switch (this.edges[subpath][index].c) {
                        case 'v': {
                            this.v2V(subpath, index);
                            break;
                        }
                        case 'H': {
                            this.H2L(subpath, index);
                            this.L2V(subpath, index);
                        }
                        case 'L': {
                            this.L2V(subpath, index);
                            break;
                        }
                        case 'C': {
                            this.C2L(subpath, index);
                            this.L2V(subpath, index);
                        }
                        case 'A': {
                            this.A2C(subpath, index);
                            this.C2L(subpath, index);
                            this.L2V(subpath, index);
                        }
                    }
                    break;
                }
                case 'L': {
                    switch (this.edges[subpath][index].c) {
                        case 'l': {
                            this.l2L(subpath, index);
                            break;
                        }
                        case 'H': {
                            this.H2L(subpath, index);
                            break;
                        }
                        case 'V': {
                            this.V2L(subpath, index);
                            break;
                        }
                        case 'C': {
                            this.C2L(subpath, index);
                            break;
                        }
                        case 'A': {
                            this.A2C(subpath, index);
                            this.C2L(subpath, index);
                            break;
                        }
                        case 'T': {
                            this.T2L(subpath, index);
                            break;
                        }
                        case 'S': {
                            this.S2L(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'A': {
                    switch (this.edges[subpath][index].c) {
                        case 'a': {
                            this.a2A(subpath, index);
                            break;
                        }
                        case 'H': {
                            this.H2L(subpath, index);
                            this.L2C(subpath, index);
                            this.C2A(subpath, index);
                            break;
                        }
                        case 'V': {
                            this.V2L(subpath, index);
                            this.L2C(subpath, index);
                            this.C2A(subpath, index);
                            break;
                        }
                        case 'L': {
                            this.L2C(subpath, index);
                            this.C2A(subpath, index);
                            break;
                        }
                        case 'C': {
                            this.C2A(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'C': {
                    switch (this.edges[subpath][index].c) {
                        case 'c': {
                            this.c2C(subpath, index);
                            break;
                        }
                        case 'V': {
                            this.V2L(subpath, index);
                            this.L2C(subpath, index);
                            break;
                        }
                        case 'H': {
                            this.H2L(subpath, index);
                            this.L2C(subpath, index);
                            break;
                        }
                        case 'L': {
                            this.L2C(subpath, index);
                            break;
                        }
                        case 'Q': {
                            this.Q2C(subpath, index);
                            break;
                        }
                        case 'A': {
                            this.A2C(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'Q': {
                    switch (this.edges[subpath][index].c) {
                        case 'q': {
                            this.q2Q(subpath, index);
                            break;
                        }
                        case 'C': {
                            this.C2Q(subpath, index);
                            break;
                        }
                    }
                }
                case 'T': {
                    switch (this.edges[subpath][index].c) {
                        case 't': {
                            this.t2T(subpath, index);
                            break;
                        }
                        case 'L': {
                            this.L2T(subpath, index);
                            break;
                        }
                    }
                }
                case 'S': {
                    switch (this.edges[subpath][index].c) {
                        case 's': {
                            this.s2S(subpath, index);
                            break;
                        }
                        case 'L': {
                            this.L2S(subpath, index);
                            break;
                        }
                    }
                }
                case 'm': {
                    switch (this.edges[subpath][index].c) {
                        case 'M': {
                            this.M2m(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'h': {
                    switch (this.edges[subpath][index].c) {
                        case 'H': {
                            this.H2h(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'v': {
                    switch (this.edges[subpath][index].c) {
                        case 'V': {
                            this.V2v(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'l': {
                    switch (this.edges[subpath][index].c) {
                        case 'L': {
                            this.L2l(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'q': {
                    switch (this.edges[subpath][index].c) {
                        case 'Q': {
                            this.Q2q(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'c': {
                    switch (this.edges[subpath][index].c) {
                        case 'C': {
                            this.C2c(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 'a': {
                    switch (this.edges[subpath][index].c) {
                        case 'A': {
                            this.A2a(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 's': {
                    switch (this.edges[subpath][index].c) {
                        case 'S': {
                            this.S2s(subpath, index);
                            break;
                        }
                    }
                    break;
                }
                case 't': {
                    switch (this.edges[subpath][index].c) {
                        case 'T': {
                            this.T2t(subpath, index);
                            break;
                        }
                    }
                    break;
                }
            }
        }
        this.transformUIControls();
        this.setD();
    }
    duplicate() {

        let newCopy = new Path({ ...this });

        newCopy.tm = new DOMMatrix([
            this.tm.a,
            this.tm.b,
            this.tm.c,
            this.tm.d,
            this.tm.e,
            this.tm.f
        ])
        newCopy.ctm = new DOMMatrix([
            this.ctm.a,
            this.ctm.b,
            this.ctm.c,
            this.ctm.d,
            this.ctm.e,
            this.ctm.f
        ])
        newCopy.edges = [];
        newCopy.uiEdges = [];
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            newCopy.edges.push([]);
            newCopy.uiEdges.push([]);
            for (let i = 0; i < this.edges[subpath].length; i++) {
                let newEdge = {}, newUIEdge = {};
                switch (this.edges[subpath][i].c) {
                    case 'a':
                    case 'A': {
                        newEdge = {
                            id: this.edges[subpath][i].id,
                            c: this.edges[subpath][i].c,
                            t: this.edges[subpath][i].t,
                            v: this.edges[subpath][i].v,
                            tin: this.edges[subpath][i].tin,
                            tout: this.edges[subpath][i].tout,
                            center: this.edges[subpath][i].center,
                            sf: this.edges[subpath][i].sf,
                            laf: this.edges[subpath][i].laf,
                            r: this.edges[subpath][i].r
                        }
                        newUIEdge = {
                            id: this.uiEdges[subpath][i].id,
                            c: this.uiEdges[subpath][i].c,
                            t: this.uiEdges[subpath][i].t,
                            v: this.uiEdges[subpath][i].v,
                            tin: this.uiEdges[subpath][i].tin,
                            tout: this.uiEdges[subpath][i].tout,
                            center: this.uiEdges[subpath][i].center,
                            sf: this.uiEdges[subpath][i].sf,
                            laf: this.uiEdges[subpath][i].laf,
                            r: this.uiEdges[subpath][i].r
                        }
                        break;
                    }
                    default: {
                        newEdge = {
                            id: this.edges[subpath][i].id,
                            c: this.edges[subpath][i].c,
                            t: this.edges[subpath][i].t,
                            v: this.edges[subpath][i].v,
                            tin: this.edges[subpath][i].tin,
                            tout: this.edges[subpath][i].tout
                        }
                        newUIEdge = {
                            id: this.uiEdges[subpath][i].id,
                            c: this.uiEdges[subpath][i].c,
                            t: this.uiEdges[subpath][i].t,
                            v: this.uiEdges[subpath][i].v,
                            tin: this.uiEdges[subpath][i].tin,
                            tout: this.uiEdges[subpath][i].tout
                        }
                        break;
                    }
                }
                newCopy.edges[subpath].push(newEdge);
                newCopy.uiEdges[subpath].push(newUIEdge);
                newCopy.edges[subpath][i].v = this.edges[subpath][i].v.duplicate();
                if (this.edges[subpath][i].tout !== 'NA') {
                    newCopy.edges[subpath][i].tout = this.edges[subpath][i].tout.duplicate();
                    newCopy.uiEdges[subpath][i].tout = this.uiEdges[subpath][i].tout.duplicate();
                }
                if (this.edges[subpath][i].tin !== 'NA') {
                    newCopy.edges[subpath][i].tin = this.edges[subpath][i].tin.duplicate();
                    newCopy.uiEdges[subpath][i].tin = this.uiEdges[subpath][i].tin.duplicate();
                }
                if (this.edges[subpath][i].c === 'A' || this.edges[subpath][i].c === 'a') {
                    newCopy.edges[subpath][i].center = this.edges[subpath][i].center.duplicate();
                    newCopy.uiEdges[subpath][i].center = this.uiEdges[subpath][i].center.duplicate();
                }
                newCopy.uiEdges[subpath][i].v = this.uiEdges[subpath][i].v.duplicate();
            }
        }
        newCopy.sbox = {
            tl: new Point(),
            tr: new Point(),
            br: new Point(),
            bl: new Point()
        }
        newCopy.sbox.bl = this.sbox.bl.duplicate();
        newCopy.sbox.tl = this.sbox.tl.duplicate();
        newCopy.sbox.br = this.sbox.br.duplicate();
        newCopy.sbox.tr = this.sbox.tr.duplicate();

        newCopy.axis = this.axis.duplicate();
        return newCopy;
    }
    hydrate() {
        this.tm = new DOMMatrix([
            this.tm.a,
            this.tm.b,
            this.tm.c,
            this.tm.d,
            this.tm.e,
            this.tm.f
        ])
        this.ctm = new DOMMatrix([
            this.ctm.a,
            this.ctm.b,
            this.ctm.c,
            this.ctm.d,
            this.ctm.e,
            this.ctm.f
        ])
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            for (let i = 0; i < this.edges[subpath].length; i++) {
                switch(this.edges[subpath][i].c) {
                    case 'H':
                    case 'V': {
                        this.edges[subpath][i].c = 'L';
                        this.uiEdges[subpath][i].c = 'L';
                        break;
                    }
                    case 'Q':
                    case 'S': {
                        this.edges[subpath][i].c = 'C';
                        this.uiEdges[subpath][i].c = 'C';
                        break;
                    }
                }
                this.edges[subpath][i].v = new Point(this.edges[subpath][i].v.x, this.edges[subpath][i].v.y);
                if (this.edges[subpath][i].tout !== 'NA') {
                    // console.log(this.edges[subpath][i], subpath, i)
                    this.edges[subpath][i].tout = new Point(this.edges[subpath][i].tout.x, this.edges[subpath][i].tout.y);
                    this.uiEdges[subpath][i].tout = new Point(this.uiEdges[subpath][i].tout.x, this.uiEdges[subpath][i].tout.y);
                }
                if (this.edges[subpath][i].tin !== 'NA') {
                    // console.log(this.id, subpath, i, this.edges[subpath], this.edges[subpath][i])
                    this.edges[subpath][i].tin = new Point(this.edges[subpath][i].tin.x, this.edges[subpath][i].tin.y);
                    this.uiEdges[subpath][i].tin = new Point(this.uiEdges[subpath][i].tin.x, this.uiEdges[subpath][i].tin.y);
                }

                if (this.edges[subpath][i].c === 'A' || this.edges[subpath][i].c === 'a') {
                    this.edges[subpath][i].center = new Point(this.edges[subpath][i].center.x, this.edges[subpath][i].center.y);
                    this.uiEdges[subpath][i].center = new Point(this.uiEdges[subpath][i].center.x, this.uiEdges[subpath][i].center.y);
                }
                this.uiEdges[subpath][i].v = new Point(this.uiEdges[subpath][i].v.x, this.uiEdges[subpath][i].v.y);
            }
        }

        this.axis = new Point(this.axis.x, this.axis.y);
        this.sbox = {
            tl: new Point(this.sbox.tl.x, this.sbox.tl.y),
            tr: new Point(this.sbox.tr.x, this.sbox.tr.y),
            bl: new Point(this.sbox.bl.x, this.sbox.bl.y),
            br: new Point(this.sbox.br.x, this.sbox.br.y)
        }
    }
    transformUIControls() {
        for (let subpath = 0; subpath < this.uiEdges.length; subpath++) {
            for (let i = 0; i < this.uiEdges[subpath].length; i++) {
                this.uiEdges[subpath][i].v = this.transformVector(this.edges[subpath][i].v, this.ctm);
                this.uiEdges[subpath][i].tout = this.uiEdges[subpath][i].tout !== 'NA' ? this.transformVector(this.edges[subpath][i].tout, this.ctm) : 'NA';
                this.uiEdges[subpath][i].tin = this.uiEdges[subpath][i].tin !== 'NA' ? this.transformVector(this.edges[subpath][i].tin, this.ctm) : 'NA';
                if (this.uiEdges[subpath][i].c === 'A' || this.uiEdges[subpath][i].c === 'a') {
                    this.uiEdges[subpath][i].center = this.transformVector(this.edges[subpath][i].center, this.ctm);
                }
            }
        }
    }
    translateAxis(dx, dy) {
        let changePoint = new Point(dx, dy);
        this.axis = this.axis.a(changePoint);
    }
    translateSbox(dx, dy) {
        let changePoint = new Point(dx, dy);
        this.sbox.tl = this.sbox.tl.a(changePoint);
        this.sbox.tr = this.sbox.tr.a(changePoint);
        this.sbox.bl = this.sbox.bl.a(changePoint);
        this.sbox.br = this.sbox.br.a(changePoint);
    }
    translate(dx, dy) {
        let translateMat = new DOMMatrix().translateSelf(dx, dy);
        this.tm = translateMat.multiplySelf(this.tm);
        // this.tm.translateSelf(dx, dy);
        this.translateAxis(dx, dy);
        this.translateSbox(dx, dy);

    }
    rotateSbox(theta, center) {//radians
        this.sbox.tl = this.sbox.tl.rotate(theta, center);
        this.sbox.tr = this.sbox.tr.rotate(theta, center);
        this.sbox.br = this.sbox.br.rotate(theta, center);
        this.sbox.bl = this.sbox.bl.rotate(theta, center);
    }
    rotate(theta, center) {//radians
        let rotateMat = new DOMMatrix();
        rotateMat = rotateMat.translateSelf(center.x, center.y).rotateSelf(theta * 180 / Math.PI).translateSelf(-center.x, -center.y);
        this.tm = rotateMat.multiplySelf(this.tm);
        // this.ctm = rotateMat.multiplySelf(this.ctm);
        this.rotateSbox(theta, center);
    }
    transformVectorWithoutTranslation(vec, tm) {
        return new Point(
            tm.a * vec.x + tm.c * vec.y + 0,
            tm.b * vec.x + tm.d * vec.y + 0
        )
    }
    decomposeMatrix(matrix) {
        // calculate delta transform point
        var px = this.transformVectorWithoutTranslation({ x: 0, y: 1 }, matrix);
        var py = this.transformVectorWithoutTranslation({ x: 1, y: 0 }, matrix);
        // calculate skew
        var skewX = ((180 / Math.PI) * Math.atan2(px.y, px.x) - 90);
        var skewY = ((180 / Math.PI) * Math.atan2(py.y, py.x));
        return {

            translateX: matrix.e,
            translateY: matrix.f,
            scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
            scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
            skewX: skewX,
            skewY: skewY,
            rotation: skewX // rotation is the same as skew x
        };
    }
    angle() {
        let transforms = this.decomposeMatrix(this.ctm);
        return transforms.rotation;
    }
    scaleSbox(dx, dy, constraint) {
        let change = new Point(dx, dy);
        let v = this.sbox.bl.s(this.sbox.tl);
        let h = this.sbox.tr.s(this.sbox.tl);

        let changeh = change.project(h);
        let changev = change.project(v);
        switch (constraint) {
            case 'bottommid': {
                this.sbox.bl = this.sbox.bl.a(changev);
                this.sbox.br = this.sbox.br.a(changev);
                break;
            }
            case 'midright': {
                this.sbox.tr = this.sbox.tr.a(changeh);
                this.sbox.br = this.sbox.br.a(changeh);
                break;
            }
            case 'midleft': {
                this.sbox.tl = this.sbox.tl.a(changeh);
                this.sbox.bl = this.sbox.bl.a(changeh);
                break;
            }
            case 'topmid': {
                this.sbox.tl = this.sbox.tl.a(changev);
                this.sbox.tr = this.sbox.tr.a(changev);
                break;
            }
            case 'bottomright': {
                this.sbox.bl = this.sbox.bl.a(changev);
                this.sbox.tr = this.sbox.tr.a(changeh);
                this.sbox.br = this.sbox.br.a(changeh).a(changev);
                break;
            }
            case 'bottomleft': {
                this.sbox.tl = this.sbox.tl.a(changeh);
                this.sbox.br = this.sbox.br.a(changev);
                this.sbox.bl = this.sbox.bl.a(changeh).a(changev);
                break;
            }
            case 'topright': {
                this.sbox.tl = this.sbox.tl.a(changev);
                this.sbox.br = this.sbox.br.a(changeh);
                this.sbox.tr = this.sbox.tr.a(changeh).a(changev);
                break;
            }
            case 'topleft': {
                this.sbox.bl = this.sbox.bl.a(changeh);
                this.sbox.tr = this.sbox.tr.a(changev);
                this.sbox.tl = this.sbox.tl.a(changeh).a(changev);
                break;
            }
        }
        this.axis.x = (this.sbox.tl.x + this.sbox.br.x) / 2;
        this.axis.y = (this.sbox.tl.y + this.sbox.br.y) / 2;
    }
    scalePost(scalex, scaley, fixedPoint) {
        let scaleMat = new DOMMatrix().translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y)
        this.tm = scaleMat.multiplySelf(this.tm);
    }
    scale(scalex, scaley, fixedPoint) {
        // let scaleMat = new DOMMatrix().translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y)
        // this.tm = scaleMat.multiplySelf(this.tm);

        this.tm = this.tm.translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y);

        // this.scaleSbox(change.x, change.y, constraint);
    }
    reverseControls(subpath, index) {
        let temp = this.edges[subpath][index].tin;
        this.edges[subpath][index].tin = this.edges[subpath][index].tout;
        this.edges[subpath][index].tout = temp;
    }
    reverseUIControls(subpath, index) {
        let temp = this.uiEdges[subpath][index].tin;
        this.uiEdges[subpath][index].tin = this.uiEdges[subpath][index].tout;
        this.uiEdges[subpath][index].tout = temp;
    }
    reversePath() {
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            if (!this.isClosed[subpath]) {
                this.edges[subpath].reverse();
                for (let i = 0; i < this.edges[subpath].length; i++) {
                    this.reverseControls(subpath, i);
                }
                for (let i = this.edges[subpath].length - 1; i > 0; i--) {
                    this.edges[subpath][i].c = this.edges[subpath][i - 1].c;
                    if (this.edges[subpath][i].c === 'A' || this.edges[subpath][i].c === 'a') {
                        this.edges[subpath][i].r = this.edges[subpath][i - 1].r;
                        this.edges[subpath][i].sf = (this.edges[subpath][i - 1].sf + 1) % 2;
                        this.edges[subpath][i].laf = this.edges[subpath][i - 1].laf;
                    }
                }
                this.edges[subpath][0].c = 'M';

                this.uiEdges[subpath].reverse();
                for (let i = 0; i < this.uiEdges[subpath].length; i++) {
                    this.reverseUIControls(subpath, i);
                }
                for (let i = this.uiEdges[subpath].length - 1; i > 0; i--) {
                    this.uiEdges[subpath][i].c = this.uiEdges[subpath][i - 1].c;
                    if (this.uiEdges[subpath][i].c === 'A' || this.uiEdges[subpath][i].c === 'a') {
                        this.uiEdges[subpath][i].r = this.uiEdges[subpath][i - 1].r;
                        this.uiEdges[subpath][i].sf = (this.uiEdges[subpath][i - 1].sf + 1) % 2;
                        this.uiEdges[subpath][i].laf = this.uiEdges[subpath][i - 1].laf;
                    }
                }
                this.uiEdges[subpath][0].c = 'M';
            }

        }

        this.transformUIControls();
        this.setD();
    }
    midPointQ(P0, C, P1) {
        let C0 = P0.a(C).scale(1 / 2);
        let C1 = P1.a(C).scale(1 / 2);
        let P = C0.a(C1).scale(1 / 2);
        return { P0, C0, P, C1, P1 };
    }
    midPointC(P0, C0, C1, P1) {
        let C00 = P0.a(C0).scale(1 / 2);
        let C = C0.a(C1).scale(1 / 2);
        let C01 = C00.a(C).scale(1 / 2);
        let C11 = P1.a(C1).scale(1 / 2);
        let C10 = C11.a(C).scale(1 / 2);
        let P = C01.a(C10).scale(1 / 2);
        return { P0, C00, C01, P, C10, C11, P1 };
    }
    convexHull(points, n) {//n number of points
        // There must be at least 3 points
        if (n < 3) return;

        // Initialize Result
        let hull = [];

        // Find the leftmost point
        let l = 0;
        for (let i = 1; i < n; i++)
            if (points[i].x < points[l].x)
                l = i;

        // Start from leftmost point, keep moving counterclockwise until reach the start point again. This loop runs O(h) times where h is number of points in result or output.
        let p = l, q;
        do {
            // Add current point to result
            hull.push(points[p]);

            // Search for a point 'q' such that
            // orientation(p, q, x) is counterclockwise
            // for all points 'x'. The idea is to keep
            // track of last visited most counterclock-
            // wise point in q. If any point 'i' is more
            // counterclock-wise than q, then update q.
            q = (p + 1) % n;

            for (let i = 0; i < n; i++) {
                // If i is more counterclockwise than
                // current q, then update q
                if (points[p].orientation(points[i], points[q]) === 2)
                    q = i;
            }

            // Now q is the most counterclockwise with
            // respect to p. Set p as q for next iteration,
            // so that q is added to result 'hull'
            p = q;
        } while (p != l);  // While we don't come to first point
        return hull;
    }
    inHull(points, target) {
        // let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

        // for (let vertex of points) {
        //     var point = svg.createSVGPoint();
        //     point.x = vertex.x;
        //     point.y = vertex.y;
        //     polygon.points.appendItem(point);
        // }
        // polygon.setAttribute('fill', 'white');
        // svg.appendChild(polygon);
        // let targetSVGPoint = svg.createSVGPoint();
        // targetSVGPoint.x = target.x;
        // targetSVGPoint.y = target.y;
        // console.log(polygon, targetSVGPoint)
        // return polygon.isPointInFill(targetSVGPoint);
        // target = points[0].a(points[2]).scale(0.5);
        for (let i = 0; i < points.length; i++) {
            if (target.perpendicularDistance(points[i], points[(i + 1) % points.length]) < 1) return true;
        }
        let hull = this.convexHull(points, points.length)
        let signs = [];
        for (let i = 0; i < hull.length; i++) {
            if (target.perpendicularDistance(points[i], points[(i + 1) % points.length]) < 1) return true;
            signs.push(target.signLine(points[i], points[(i + 1) % hull.length]));
        }
        let positive = signs[0] >= 0;
        if (positive) {
            // console.log('Positive sign...')
            for (let i = 1; i < hull.length; i++) {
                if (signs[i] < 0) return false;
            }
            return true;
        } else {
            // console.log('Negative sign...')
            for (let i = 1; i < hull.length; i++) {
                if (signs[i] > 0) return false;
            }
            return true;
        }
    }
    timeAtPointQ(P0, C, P1, P, { start, end }) {
        //binary search
        let thold = 10e-4;
        if (end - start < thold) {
            if (P.length(P0) <= P.length(P1)) return start;
            else return end;
        }
        let halfs = this.midPointQ(P0, C, P1);
        if (this.inHull([halfs.P0, halfs.C0, halfs.P], P)) {
            if (halfs.C0.perpendicularDistance(halfs.P0, halfs.P) < 1) {
                return start + ((start + end) / 2 - start) * P.length(halfs.P0) / halfs.P.length(halfs.P0);
            }
            return this.timeAtPointQ(halfs.P0, halfs.C0, halfs.P, P, { start, end: (start + end) / 2 });
        } else if (this.inHull([halfs.P, halfs.C1, halfs.P1], P)) {
            if (halfs.C1.perpendicularDistance(halfs.P, halfs.P1) < 1) {
                return (start + end) / 2 + (end - (start + end) / 2) * P.length(halfs.P) / halfs.P.length(halfs.P1);
            }
            return this.timeAtPointQ(halfs.P, halfs.C1, halfs.P1, P, { start: (start + end) / 2, end });
        } else {
            return -1;
        }

    }
    timeAtPointC(P0, C0, C1, P1, P, { start, end }) {
        //binary search
        // console.log(start, end)
        let thold = 10e-4;
        if (end - start < thold) {
            if (P.length(P0) <= P.length(P1)) return start;
            else return end;
        }
        let halfs = this.midPointC(P0, C0, C1, P1);
        // console.log('halfs', halfs);
        if (this.inHull([halfs.P0, halfs.C00, halfs.C01, halfs.P], P)) {
            // console.log('First half...')
            if (halfs.C00.perpendicularDistance(halfs.P0, halfs.P) < 1 && halfs.C01.perpendicularDistance(halfs.P0, halfs.P) < 1) {
                return start + ((start + end) / 2 - start) * P.length(halfs.P0) / halfs.P.length(halfs.P0);
            }
            return this.timeAtPointC(halfs.P0, halfs.C00, halfs.C01, halfs.P, P, { start, end: (start + end) / 2 });
        } else if (this.inHull([halfs.P, halfs.C10, halfs.C11, halfs.P1], P)) {
            // console.log('Second half...');
            if (halfs.C10.perpendicularDistance(halfs.P, halfs.P1) < 1 && halfs.C11.perpendicularDistance(halfs.P, halfs.P1) < 1) {
                return (start + end) / 2 + (end - (start + end) / 2) * P.length(halfs.P) / halfs.P.length(halfs.P1);
            }
            return this.timeAtPointC(halfs.P, halfs.C10, halfs.C11, halfs.P1, P, { start: (start + end) / 2, end });
        } else {
            return -1;
        }

    }
    timeAtPointA(P0, C, P1, r, P, center) {
        // console.log(P0, C, P1, r, P);
        if (Math.abs(P.length(center) - r) > 1) return -1;
        let theta0 = Math.abs(center.anglePair(P0, P1))
        let theta = Math.abs(center.anglePair(P0, P));
        return Math.abs(theta / theta0);
    }
    timeAtPointL(P0, P1, P) {
        if (Math.abs(P.length(P0) + P.length(P1) - P0.length(P1)) < 1) return P.length(P0) / P1.length(P0);
        return -1;
    }
    timeAtPointH(P0, P1, P) {
        if (Math.abs(P.length(P0) + P.length(P1) - P0.length(P1)) < 1) return P.length(P0) / P1.length(P0);
        return -1;
    }
    timeAtPointV(P0, P1, P) {
        if (Math.abs(P.length(P0) + P.length(P1) - P0.length(P1)) < 1) return P.length(P0) / P1.length(P0);
        return -1;
    }
    timeAtPoint(P) {//each segment has time period of 1
        let time = 0;
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            for (let i = 1; i < this.edges[subpath].length; i++) {
                switch (this.edges[subpath][i].c) {
                    case 'c':
                    case 'C': {
                        time = this.timeAtPointC(this.edges[subpath][i - 1].v, this.edges[subpath][i - 1].tout, this.edges[subpath][i].tin, this.edges[subpath][i].v, P, { start: i - 1, end: i });
                        // console.log(this.edges[subpath][i - 1].v, this.edges[subpath][i - 1].tout, this.edges[subpath][i].tin, this.edges[subpath][i].v, P, time);
                        if (time !== -1) {
                            return { subpath, index: i, time };
                        }
                        break;
                    }
                    case 's':
                    case 'S': {
                        let c0;
                        if (this.edges[subpath][i - 1].tout === 'NA') {
                            if (this.edges[subpath][i - 1].tin === 'NA') {
                                c0 = this.edges[subpath][i - 1].v;
                            } else {
                                c0 = this.edges[subpath][i - 1].tin.reflectControl(this.edges[subpath][i - 1].v, this.edges[subpath][i - 1].tin);
                            }
                        }
                        time = this.timeAtPointC(this.edges[subpath][i - 1].v, c0, this.edges[subpath][i].tin, this.edges[subpath][i].v, P, { start: i - 1, end: i });
                        if (time !== -1) {
                            return { subpath, index: i, time };
                        }
                        break;
                    }
                    case 'q':
                    case 'Q': {
                        time = this.timeAtPointQ(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v, P, { start: i - 1, end: i });
                        if (time !== -1) {
                            return { subpath, index: i, time };
                        }
                        break;
                    }
                    case 't':
                    case 'T': {
                        let c, index = i, count = 0;
                        while (index > 0) {
                            if (this.edges[subpath][index].c === 'T' || this.edges[subpath][index].c === 't') {
                                count++;
                                index--;
                            }
                        }
                        c = this.edges[subpath][i].v.a(this.edges[subpath][index].tin.s(this.edges[subpath][index].v))
                        if (count % 2 === 1) {
                            c = c.reflect(this.edges[subpath][i].v)
                        }
                        time = this.timeAtPointQ(this.edges[subpath][i - 1].v, c, this.edges[subpath][i].v, P, { start: i - 1, end: i });
                        if (time !== -1) {
                            return { subpath, index: i, time };
                        }
                        break;
                    }
                    case 'a':
                    case 'A': {
                        // console.log('before...', time);
                        time = this.timeAtPointA(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v, this.edges[subpath][i].r, P, this.edges[subpath][i].center);
                        // console.log('time..', time);
                        if (time !== -1) {
                            return { subpath, index: i, time: time + i - 1 };
                        }
                    }
                    case 'l':
                    case 'L': {
                        time = this.timeAtPointL(this.edges[subpath][i - 1].v, this.edges[subpath][i].v, P);
                        if (time !== -1) {
                            return { subpath, index: i, time: time + i - 1 };
                        }
                        break;
                    }
                    case 'h':
                    case 'H': {
                        time = this.timeAtPointH(this.edges[subpath][i - 1].v, this.edges[subpath][i].v, P);
                        if (time !== -1) {
                            return { subpath, index: i, time: time + i - 1 };
                        }
                        break;
                    }
                    case 'v':
                    case 'V': {
                        time = this.timeAtPointV(this.edges[subpath][i - 1].v, this.edges[subpath][i].v, P);
                        if (time !== -1) {
                            return { subpath, index: i, time: time + i - 1 };
                        }
                        break;
                    }
                }
            }
        }
        return { subpath: -1, index: -1, time: -1 };
    }
    splitL(P0, P1, t) {
        return P0.scale(1 - t).a(P1.scale(t));
    }
    splitH(P0, P1, t) {
        return P0.scale(1 - t).a(P1.scale(t));
    }
    splitV(P0, P1, t) {
        return P0.scale(1 - t).a(P1.scale(t));
    }
    splitA(P0, C, P1, r, center, t) {
        let w = center.anglePair(P0, P1);
        let theta0 = P0.angle(center);
        let theta1 = P1.angle(center);
        if (w < 0) {
            w = 2 * Math.PI + w;
            theta1 = 2 * Math.PI + theta1;
        }
        // let th = center.anglePair(P, P0);

        // let thetaC = C.angle(center);
        let P = center.a(new Point(r * Math.cos(w * t + theta0), r * Math.sin(w * t + theta0)));
        let theta = w * t + theta0;
        let C0 = center.a(new Point(r * Math.cos(w * t / 2 + theta0), r * Math.sin(w * t / 2 + theta0)))
        let C1 = center.a(new Point(r * Math.cos(w * (1 + t) / 2 + theta0), r * Math.sin(w * (1 + t) / 2 + theta0)))
        // console.log(w*180/Math.PI, theta0*180/Math.PI, theta1*180/Math.PI, theta*180/Math.PI);
        // console.log(t, w, w * t, theta0, theta, theta1)
        return { P0, C0, P, C1, P1 }
    }
    splitC(P0, C0, C1, P1, t) {
        // console.log('time... ', t);
        let C00 = P0.scale(1 - t).a(C0.scale(t));
        let C11 = C1.scale(1 - t).a(P1.scale(t));
        let C = C0.scale(1 - t).a(C1.scale(t));
        let C01 = C00.scale(1 - t).a(C.scale(t));
        let C10 = C.scale(1 - t).a(C11.scale(t));
        let P = C01.scale(1 - t).a(C10.scale(t));
        return { P0, C00, C01, P, C10, C11, P1 };
    }
    splitQ(P0, C, P1, t) {
        let C0 = P0.scale(1 - t).a(C.scale(t));
        let C1 = C.scale(1 - t).a(P1.scale(t));
        let P = C0.scale(1 - t).a(C1.scale(t));
        return { P0, C0, P, C1, P1 };
    }
    pointAtTime(t) {//t in [0,1]

    }
    subpaths(subpath, index, time, P) {
        // console.log(this.edges[subpath][index].c, index, time);
        let endPoint = {
            id: this.edges[subpath][index].id,
            v: new Point(P.x, P.y),
            c: this.edges[subpath][index].c,
            t: this.edges[subpath][index].t,
            tin: this.edges[subpath][index].tin,
            tout: 'NA'
        }
        let uiEndPoint = {
            id: this.uiEdges[subpath][index].id,
            v: this.transformVector(P, this.ctm),
            c: this.uiEdges[subpath][index].c,
            t: this.uiEdges[subpath][index].t,
            tin: this.uiEdges[subpath][index].tin,
            tout: 'NA'
        }
        let startPoint = {
            id: this.edges[subpath][index - 1].id,
            v: new Point(P.x, P.y),
            c: 'M',
            t: this.edges[subpath][index].t,
            tin: 'NA',
            tout: this.edges[subpath][index].tout
        }
        let uiStartPoint = {
            id: this.uiEdges[subpath][index - 1].id,
            v: this.transformVector(P, this.ctm),
            c: 'M',
            t: this.uiEdges[subpath][index].t,
            tin: 'NA',
            tout: this.uiEdges[subpath][index].tout
        }
        switch (this.edges[subpath][index].c) {
            case 'a':
            case 'A': {
                // let time = this.timeAtPointA(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v, this.edges[subpath][index].r, P);
                let points = this.splitA(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v, this.edges[subpath][index].r, this.edges[subpath][index].center, time);
                // console.log(P, points.P);
                endPoint.center = this.edges[subpath][index].center;
                endPoint.r = this.edges[subpath][index].r;
                endPoint.tin = points.C0;
                endPoint.sf = this.edges[subpath][index].sf;
                endPoint.laf = this.edges[subpath][index].laf;
                this.edges[subpath][index - 1].tout = endPoint.tin;
                uiEndPoint.center = this.uiEdges[subpath][index].center;
                uiEndPoint.r = this.uiEdges[subpath][index].r;
                uiEndPoint.tin = this.transformVector(points.C0, this.ctm);
                uiEndPoint.sf = this.uiEdges[subpath][index].sf;
                uiEndPoint.laf = this.uiEdges[subpath][index].laf;
                this.uiEdges[subpath][index - 1].tout = uiEndPoint.tin;

                startPoint.tout = points.C1;
                this.edges[subpath][index].tin = points.C1;
                uiStartPoint.tout = this.transformVector(points.C1, this.ctm);
                this.uiEdges[subpath][index].tin = uiStartPoint.tout;
                break;
            }
            case 'c':
            case 'C': {
                // let time = this.timeAtPointC(this.edges[subpath][index - 1].v, this.edges[subpath][index - 1].tout, this.edges[subpath][index].tin, this.edges[subpath][index].v, P, {start: 0, end: 1});
                let points = this.splitC(this.edges[subpath][index - 1].v, this.edges[subpath][index - 1].tout, this.edges[subpath][index].tin, this.edges[subpath][index].v, time);
                endPoint.tin = points.C01;
                endPoint.tout = points.C10;
                this.edges[subpath][index - 1].tout = points.C00;
                // console.log(P, points.P);
                uiEndPoint.tin = this.transformVector(endPoint.tin, this.ctm);
                uiEndPoint.tout = this.transformVector(endPoint.tout, this.ctm);
                this.uiEdges[subpath][index - 1].tout = this.transformVector(this.edges[subpath][index - 1].tout, this.ctm);

                startPoint.tin = points.C01.duplicate();
                startPoint.tout = points.C10.duplicate();
                this.edges[subpath][index].tin = points.C11;
                uiStartPoint.tin = this.transformVector(startPoint.tin, this.ctm);
                uiStartPoint.tout = this.transformVector(startPoint.tout, this.ctm);
                this.uiEdges[subpath][index].tin = this.transformVector(this.edges[subpath][index].tin, this.ctm);
                break;
            }
            case 'q':
            case 'Q': {
                // let time = this.timeAtPointQ(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v, P, {start: 0, end: 1});
                let points = this.splitQ(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v, time);
                endPoint.tin = points.C0;
                endPoint.tout = points.C1;
                this.edges[subpath][index - 1].tout = points.C0;

                uiEndPoint.tin = this.transformVector(endPoint.tin, this.ctm);
                uiEndPoint.tout = this.transformVector(endPoint.tout, this.ctm);
                this.uiEdges[subpath][index - 1].tout = this.transformVector(this.edges[subpath][index - 1].tout, this.ctm);

                startPoint.tin = points.C0.duplicate();
                startPoint.tout = points.C1.duplicate();
                this.edges[subpath][index].tin = points.C1;
                uiStartPoint.tin = this.transformVector(startPoint.tin, this.ctm);
                uiStartPoint.tout = this.transformVector(startPoint.tout, this.ctm);
                this.uiEdges[subpath][index].tin = this.transformVector(this.edges[subpath][index].tin, this.ctm);
                break;
            }
            case 's':
            case 'S': {
                // let c0;
                // if(this.edges[subpath][index - 1].tout === 'NA') {
                //     if(this.edges[subpath][index - 1].tin === 'NA') {
                //         c0 = this.edges[subpath][index - 1].v;
                //     } else {
                //         c0 = this.edges[subpath][index - 1].tin.reflectControl(this.edges[subpath][index - 1].v, this.edges[subpath][index - 1].tin);
                //     }
                // }
                // time = this.timeAtPointC(this.edges[subpath][index - 1].v, c0, this.edges[subpath][index].tin, this.edges[subpath][index].v, P, {start: 0, end: 1});
                let points = this.splitC(this.edges[subpath][index - 1].v, this.edges[subpath][index - 1].tout, this.edges[subpath][index].tin, this.edges[subpath][index].v, time);
                endPoint.tin = points.C01;
                endPoint.tout = points.C10;
                this.edges[subpath][index - 1].tout = points.C00;

                uiEndPoint.tin = this.transformVector(endPoint.tin, this.ctm);
                uiEndPoint.tout = this.transformVector(endPoint.tout, this.ctm);
                this.uiEdges[subpath][index - 1].tout = this.transformVector(this.edges[subpath][index - 1].tout, this.ctm);

                startPoint.tin = points.C01.duplicate();
                startPoint.tout = points.C10.duplicate();
                this.edges[subpath][index].tin = points.C11;
                uiStartPoint.tin = this.transformVector(startPoint.tin, this.ctm);
                uiStartPoint.tout = this.transformVector(startPoint.tout, this.ctm);
                this.uiEdges[subpath][index].tin = this.transformVector(this.edges[subpath][index].tin, this.ctm);
                break;
            }
            case 't':
            case 'T': {
                // let c, index0 = index, count = 0;
                // while(index0 > 0) {
                //     if(this.edges[subpath][index0].c === 'T' || this.edges[subpath][index0].c === 't') {
                //         count++;
                //         index0--;
                //     }
                // }
                // c = this.edges[subpath][index].v.a(this.edges[subpath][index0].tin.s(this.edges[subpath][index0].v))
                // if(count %2 === 1) {
                //     c = c.reflect(this.edges[subpath][index].v)
                // } 
                // time = this.timeAtPointQ(this.edges[subpath][index - 1].v, c, this.edges[subpath][index].v, P, {start: 0, end: 1});
                let points = this.splitQ(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v, time);
                endPoint.tin = points.C0;
                endPoint.tout = points.C1;
                this.edges[subpath][index - 1].tout = points.C0;

                uiEndPoint.tin = this.transformVector(endPoint.tin, this.ctm);
                uiEndPoint.tout = this.transformVector(endPoint.tout, this.ctm);
                this.uiEdges[subpath][index - 1].tout = this.transformVector(this.edges[subpath][index - 1].tout, this.ctm);

                startPoint.tin = points.C0.duplicate();
                startPoint.tout = points.C1.duplicate();
                this.edges[subpath][index].tin = points.C1;
                uiStartPoint.tin = this.transformVector(startPoint.tin, this.ctm);
                uiStartPoint.tout = this.transformVector(startPoint.tout, this.ctm);
                this.uiEdges[subpath][index].tin = this.transformVector(this.edges[subpath][index].tin, this.ctm);
                break;
            }
        }
        let firstPath = this.duplicate();
        firstPath.id = this.id + '0';
        // console.log('copy', firstPath.edges[subpath].length, firstPath.edges[subpath])
        firstPath.edges[subpath].splice(index);
        firstPath.edges[subpath].push(endPoint);
        firstPath.setD();
        // console.log('first', firstPath.edges[subpath].length, firstPath.edges[subpath])
        firstPath.uiEdges[subpath].splice(index);
        firstPath.uiEdges[subpath].push(uiEndPoint);
        // console.log(this.edges[subpath]);
        let secondPath = this.duplicate();
        secondPath.id = this.id + '1';
        secondPath.edges[subpath].splice(0, index);
        secondPath.edges[subpath].unshift(startPoint);
        secondPath.uiEdges[subpath].splice(0, index);
        secondPath.uiEdges[subpath].unshift(uiStartPoint);
        if (this.edges[subpath][index].c === 'a' || this.edges[subpath][index].c === 'A') {
            firstPath.arc(subpath, firstPath.edges[subpath].length - 1);
            secondPath.arc(subpath, 1);
        }
        return { firstPath, secondPath };
    }
    cutPath(id, objectCount) {
        let { subpath, index } = this.edgeIndex(id);
        let idparts = this.id.split('-');
        
        let firstPath = this.duplicate();
        firstPath.id = idparts[0] + '-' + idparts[1] + '-' + objectCount;
        // console.log('copy', firstPath.edges[subpath].length, firstPath.edges[subpath])
        firstPath.edges[subpath].splice(index + 1);
        firstPath.setD();
        // console.log('first', firstPath.edges[subpath].length, firstPath.edges[subpath])
        firstPath.uiEdges[subpath].splice(index + 1);
        // console.log(this.edges[subpath]);
        let secondPath = this.duplicate();
        secondPath.id = idparts[0] + '-' + idparts[1] + '-' + (Number(objectCount) + 1);
        let newedges = secondPath.edges[subpath].slice(index);
        let newuiEdges = secondPath.uiEdges[subpath].slice(index);
        newedges[0].c = 'M';
        newuiEdges[0].c = 'M';
        secondPath.edges = [newedges];
        secondPath.uiEdges = [newuiEdges];
        secondPath.setD();
        console.log(firstPath.edges, firstPath.d, secondPath.d);
        return { firstPath, secondPath };
    }
    splitPath(P) {
        //compute time

        let inv = this.ctm.inverse();
        let np = this.transformVector(P, inv);
        let { subpath, index, time } = this.timeAtPoint(np);
        // console.log(subpath, index, time);
        //split the corresponding command
        if (time !== -1) {
            let { firstPath, secondPath } = this.subpaths(subpath, index, time - index + 1, np);
            firstPath.setD();
            secondPath.setD();
            // console.log(firstPath.d, secondPath.d);
            return { firstPath, secondPath };
        } else return { firstPath: null, secondPath: null };

    }
    pointAtTimeC(t) {
        let points
    }
    arclengthQ(P0, C, P1) {
        //if within threshold return length
        let chord = P1.length(P0);
        let perimeter = P0.length(C) + C.length(P1)
        if (Math.abs(perimeter - chord) < 1) {
            return (0.67 * perimeter + 0.33 * chord)
        }
        //split in half
        let points = this.splitQ(P0, C, P1, 0.5);
        //compute first half
        let l1 = this.arclengthQ(points.P0, points.C0, points.P);
        //compute second half
        let l2 = this.arclengthQ(points.P, points.C1, points.P1);
        //return sum
        return l1 + l2;
    }
    arclengthC(P0, C0, C1, P1) {
        //if within threshold return length
        let chord = P1.length(P0);
        let perimeter = P0.length(C0) + C0.length(C1) + C1.length(P1)
        if (Math.abs(perimeter - chord) < 1) {
            return (0.67 * perimeter + 0.33 * chord)
        }
        //split in half
        let points = this.splitC(P0, C0, C1, P1, 0.5);
        //compute first half
        let l1 = this.arclengthC(points.P0, points.C00, points.C01, points.P);
        //compute second half
        let l2 = this.arclengthC(points.P, points.C10, points.C11, points.P1);
        //return sum
        return l1 + l2;
    }
    arclengthA(P0, C, P1, center, r) {
        let angle1 = Math.abs(center.anglePair(P0, C));
        let angle2 = Math.abs(center.anglePair(C, P1));
        if (angle1 > Math.PI) angle1 = 2 * Math.PI - angle1;
        if (angle2 > Math.PI) angle2 = 2 * Math.PI - angle2;
        let angle = Math.abs(angle1) + Math.abs(angle2);
        // console.log('arclength...', angle1, angle2, angle);
        return r * angle;
    }
    arclengthL(P0, P1) {
        return P0.length(P1);
    }
    arclengthH(P0, P1) {
        return Math.abs(P1.x - P0.x)
    }
    arclengthV(P0, P1) {
        return Math.abs(P1.y - P0.y);
    }
    arclength() {
        let length = 0;
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            for (let i = 1; i < this.edges[subpath].length; i++) {
                switch (this.edges[subpath][i].c) {
                    case 'h':
                    case 'H': {
                        length += this.arclengthH(this.edges[subpath][i - 1].v, this.edges[subpath][i].v);
                        break;
                    }
                    case 'v':
                    case 'V': {
                        length += this.arclengthV(this.edges[subpath][i - 1].v, this.edges[subpath][i].v);
                        break;
                    }
                    case 'l':
                    case 'L': {
                        length += this.arclengthL(this.edges[subpath][i - 1].v, this.edges[subpath][i].v);
                        break;
                    }
                    case 'a':
                    case 'A': {
                        length += this.arclengthA(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v, this.edges[subpath][i].center, this.edges[subpath][i].r);
                        break;
                    }
                    case 't':
                    case 'T':
                    case 'q':
                    case 'Q': {
                        length += this.arclengthQ(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v);
                        break;
                    }
                    case 's':
                    case 'S':
                    case 'c':
                    case 'C': {
                        length += this.arclengthC(this.edges[subpath][i - 1].v, this.edges[subpath][i - 1].tout, this.edges[subpath][i].tin, this.edges[subpath][i].v);
                        break;
                    }
                }
            }
        }
        return length;
    }
    pointAtLengthH(P0, P1, l) {//
        let L = this.arclengthH(P0, P1);
        if (l === 0) {
            return { P: P0, tan: P1 };
        }
        if (l >= L) return { P: P1, tan: P1 };
        return { P: P0.a(new Point(l, 0)), tan: P1 };
    }
    pointAtLengthV(P0, P1, l) {//
        let L = this.arclengthV(P0, P1);
        if (l === 0) {
            return { P: P0, tan: P1 };
        }
        if (l >= L) return { P: P1, tan: P1 };
        return { P: P0.a(new Point(0, l)), tan: P1 };
    }
    pointAtLengthL(P0, P1, l) {//
        let L = this.arclengthL(P0, P1);
        if (l === 0) {
            return { P: P0, tan: P1 };
        }
        if (l >= L) return { P: P1, tan: P1 };
        let angle = P1.angle(P0);
        return { P: P0.a(new Point(l * Math.cos(angle), l * Math.sin(angle))), tan: P1 };
    }
    pointAtLengthQ(P0, C, P1, l) {//l is absolute
        let L = this.arclengthQ(P0, C, P1);
        if (l === 0) return { P: P0, tan: C };
        if (l >= L) return { P: P1, tan: C.reflect(P1) };
        if (Math.abs(L - l) < 1) return { P: P1, tan: C.reflect(P1) };
        let points = this.splitQ(P0, C, P1, 0.5);
        let firstCurve = this.arclengthQ(points.P0, points.C0, points.P);
        if (Math.abs(firstCurve - l) < 10e-4) return { P: P1, tan: C1.reflect(P1) };
        if (firstCurve > l) {
            return this.pointAtLengthQ(points.P0, points.C0, points.P, l);
        } else {
            return this.pointAtLengthQ(points.P, points.C1, points.P1, l - firstCurve)
        }
    }
    pointAtLengthC(P0, C0, C1, P1, l) {//l is absolute
        let L = this.arclengthC(P0, C0, C1, P1);
        // console.log('C...', l, L);
        if (l === 0) return { P: P0, tan: C0 };
        if (l >= L) return { P: P1, tan: C1.reflect(P1) };
        if (Math.abs(L - l) < 1) return { P: P1, tan: C1.reflect(P1) };
        let points = this.splitC(P0, C0, C1, P1, 0.5);
        let firstCurve = this.arclengthC(points.P0, points.C00, points.C01, points.P);
        if (Math.abs(firstCurve - l) < 10e-4) return { P: P1, tan: C1.reflect(P1) };
        if (firstCurve > l) {
            return this.pointAtLengthC(points.P0, points.C00, points.C01, points.P, l);
        } else {
            return this.pointAtLengthC(points.P, points.C10, points.C11, points.P1, l - firstCurve)
        }
    }
    pointAtLengthA(P0, C, P1, center, r, l) {
        let L = this.arclengthA(P0, C, P1, center, r);
        let angle0 = P0.angle(center);
        let angle1 = P1.angle(center);

        if (l === 0) {
            return { P: P0, tan: new Point(-r * Math.sin(angle0) + P0.x, r * Math.cos(angle0) + P0.y) };
        }
        if (l >= L) {
            return { P: P1, tan: new Point(-r * Math.sin(angle1) + P1.x, r * Math.cos(angle1) + P1.y) };
        }

        let angle = l / r;
        if (P0.orientation(C, P1) === 1) {
            angle = -angle;
        }
        // console.log('angles...', angle0, angle1, angle, L/r);
        let P = new Point(r * Math.cos(angle0 + angle) + center.x, r * Math.sin(angle0 + angle) + center.y);
        return {
            P,
            tan: new Point(-r * Math.sin(angle0 + angle) + P.x, r * Math.cos(angle0 + angle) + P.y)
        }
    }
    pointAtLength(l) {//l in [0,1]
        let L = this.arclength();
        let u = l * L;
        let budget = u;
        // console.log(l, L, u);
        let lengthList = [];
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            lengthList.push([0]);
            for (let i = 1; i < this.edges[subpath].length; i++) {
                switch (this.edges[subpath][i].c) {
                    case 'h':
                    case 'H': {
                        lengthList[subpath].push(this.arclengthH(this.edges[subpath][i - 1].v, this.edges[subpath][i].v))
                        break;
                    }
                    case 'v':
                    case 'V': {
                        lengthList[subpath].push(this.arclengthV(this.edges[subpath][i - 1].v, this.edges[subpath][i].v))
                        break;
                    }
                    case 'l':
                    case 'L': {
                        lengthList[subpath].push(this.arclengthL(this.edges[subpath][i - 1].v, this.edges[subpath][i].v))
                        break;
                    }
                    case 'a':
                    case 'A': {
                        lengthList[subpath].push(this.arclengthA(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v, this.edges[subpath][i].center, this.edges[subpath][i].r))
                        break;
                    }
                    case 't':
                    case 'T':
                    case 'q':
                    case 'Q': {
                        lengthList[subpath].push(this.arclengthQ(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v))
                        break;
                    }
                    case 's':
                    case 'S':
                    case 'c':
                    case 'C': {
                        lengthList[subpath].push(this.arclengthC(this.edges[subpath][i - 1].v, this.edges[subpath][i - 1].tout, this.edges[subpath][i].tin, this.edges[subpath][i].v))
                        break;
                    }
                }
            }
        }
        for (let subpath = 0; subpath < this.edges.length; subpath++) {
            if (budget === L) {
                if (this.edges[subpath][this.edges[subpath].length - 1].tin !== 'NA') {
                    if (this.edges[subpath][this.edges[subpath].length - 1].c === 'a' || this.edges[subpath][this.edges[subpath].length - 1].c === 'A') {
                        return this.pointAtLengthA(this.edges[subpath][this.edges[subpath].length - 2].v, this.edges[subpath][this.edges[subpath].length - 1].tin, this.edges[subpath][this.edges[subpath].length - 1].v, this.edges[subpath][this.edges[subpath].length - 1].center, this.edges[subpath][this.edges[subpath].length - 1].r, budget)
                    } else {
                        return { P: this.edges[subpath][this.edges[subpath].length - 1].v, tan: this.edges[subpath][this.edges[subpath].length - 1].tin.reflect(this.edges[subpath][this.edges[subpath].length - 1].v) }
                    }

                } else {
                    return { P: this.edges[subpath][this.edges[subpath].length - 1].v, tan: this.edges[subpath][this.edges[subpath].length - 2].v.reflect(this.edges[subpath][this.edges[subpath].length - 1].v) }
                }

            }
            for (let i = 0; i < this.edges[subpath].length; i++) {
                // if(budget === 0) {
                //     if(this.edges[subpath][i].tout !== 'NA') {
                //         if(i < this.edges[subpath].length - 1) {
                //             switch(this.edges[subpath][this.edges[subpath].length - 1].c) {
                //                 case 'a':
                //                 case 'A': {
                //                     break;
                //                 }
                //             }
                //         }
                //         return {P: this.edges[subpath][i].v, tan: this.edges[subpath][i].tout}
                //     } else {
                //         return {P: this.edges[subpath][i].v, tan: this.edges[subpath][i + 1].v}
                //     }

                // }
                budget -= lengthList[subpath][i];
                if (budget < 0) {
                    let target = (budget + lengthList[subpath][i]);
                    switch (this.edges[subpath][i].c) {
                        case 'h':
                        case 'H': {
                            return this.pointAtLengthH(this.edges[subpath][i - 1].v, this.edges[subpath][i].v, target);

                        }
                        case 'v':
                        case 'V': {
                            return this.pointAtLengthV(this.edges[subpath][i - 1].v, this.edges[subpath][i].v, target)

                        }
                        case 'l':
                        case 'L': {
                            return this.pointAtLengthL(this.edges[subpath][i - 1].v, this.edges[subpath][i].v, target)

                        }
                        case 'a':
                        case 'A': {
                            return this.pointAtLengthA(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v, this.edges[subpath][i].center, this.edges[subpath][i].r, target)
                        }
                        case 't':
                        case 'T':
                        case 'q':
                        case 'Q': {
                            return this.pointAtLengthQ(this.edges[subpath][i - 1].v, this.edges[subpath][i].tin, this.edges[subpath][i].v, target)
                        }
                        case 's':
                        case 'S':
                        case 'c':
                        case 'C': {
                            return this.pointAtLengthC(this.edges[subpath][i - 1].v, this.edges[subpath][i - 1].tout, this.edges[subpath][i].tin, this.edges[subpath][i].v, target)
                        }
                    }
                }
            }
        }
    }
    arclengthAtTimeH(P0, P1, t) {//t in [0, 1]
        let point = this.splitH(P0, P1, t);
        return Math.abs(point.P.x - P0.x);
    }
    arclengthAtTimeH(P0, P1, t) {//t in [0, 1]
        let point = this.splitV(P0, P1, t);
        return Math.abs(point.P.y - P0.y);
    }
    arclengthAtTimeL(P0, P1, t) {//t in [0, 1]
        let point = this.splitH(P0, P1, t);
        return point.P.length(P0);
    }
    arclengthAtTimeA(P0, C, P1, center, r, t) {//t in [0, 1]
        let point = this.splitA(P0, C, P1, center, r, t);
        return r * center.angelPair(P0, point.P);
    }
    arclengthAtTimeQ(P0, C, P1, t) {//t in [0, 1]
        let point = this.splitQ(P0, C, P1, t);
        return this.arclengthQ(point.P0, point.C0, point.P);
    }
    arclengthAtTimeC(P0, C0, C1, P1, t) {//t in [0, 1]
        let point = this.splitC(P0, C0, C1, P1, t);
        return this.arclengthC(point.P0, point.C00, point.C01, point.P);
    }
    arclengthAtTime(t) {//time 1 for each segment

    }
    tangent(t) {//t in [0, 1]
        let dt = 0.01;

    }
    reflect(about) {
        let bboxOrigin = new Point(this.bbox.x + this.bbox.width / 2, this.bbox.y + this.bbox.height / 2)
        switch (about) {
            case 'V': {
                this.scale(-1, 1, bboxOrigin)
                break;
            }
            case 'H': {
                this.scale(1, -1, bboxOrigin)
                break;
            }
        }
        this.transformUIControls();
        this.setD();
    }

    doIntersectLL(p1, q1, p2, q2) {

        // Find the four orientations needed for general and
        // special cases
        let o1 = p1.orientation(q1, p2);
        let o2 = p1.orientation(q1, q2);
        let o3 = p2.orientation(q2, p1);
        let o4 = p2.orientation(q2, q1);

        // General case
        if (o1 != o2 && o3 != o4)
            return true;

        // Special Cases
        // p1, q1 and p2 are collinear and p2 lies on segment p1q1
        if (o1 == 0 && p2.onSegment(p1, q1)) return true;

        // p1, q1 and q2 are collinear and q2 lies on segment p1q1
        if (o2 == 0 && q2.onSegment(p1, q1)) return true;

        // p2, q2 and p1 are collinear and p1 lies on segment p2q2
        if (o3 == 0 && p1.onSegment(p2, q2)) return true;

        // p2, q2 and q1 are collinear and q1 lies on segment p2q2
        if (o4 == 0 && q1.onSegment(p2, q2)) return true;

        return false; // Doesn't fall in any of the above cases
    }
    intersectLL(p1, q1, p2, q2) {
        if (!this.doIntersectLL(p1, q1, p2, q2)) return null;
        //work out special cases
        //line 1 is horizontal
        let m1, m2, c1, c2;
        if (p1.x === q1.x) {
            if (p2.onSegment(p1, q1))
                return new Point(p1.x, p2.y)
            if (p1.onSegment(p2, q2))
                return p1;
            m2 = (q2.y - p2.y) / (q2.x - p2.x);
            c2 = p2.y - m2 * p2.x;
            return new Point(p1.x, m2 * p1.x + c2);
        }
        //line 2 is horizontal
        if (p2.x === q2.x) {
            if (p1.onSegment(p2, q2))
                return new Point(p2.x, p1.y)
            if (p2.onSegment(p1, q1))
                return p2;
            m1 = (q1.y - p1.y) / (q1.x - p1.x);
            c1 = p1.y - m1 * p1.x;
            return new Point(p2.x, m1 * p2.x + c1);
        }
        //general case
        m1 = (q1.y - p1.y) / (q1.x - p1.x);
        m2 = (q2.y - p2.y) / (q2.x - p2.x);
        c1 = p1.y - m1 * p1.x;
        c2 = p2.y - m2 * p2.x;
        let x = (c2 - c1) / (m1 - m2);
        let y = m1 * x + c1;
        return new Point(x, y);
    }
    onArc(p, P0, P1, r, center) {
        if (Math.abs(p.length(center) - r) > 1e-4) {
            return false;
        }
        let theta0 = P0.angle(center);
        let theta1 = P1.angle(center);
        let theta = p.angle(center);
        if (theta < theta0) theta = 2 * Math.PI + theta;
        if (theta1 < theta0) theta1 = 2 * Math.PI + theta1;
        return theta <= theta1;
    }
    intersectLA(p1, q1, p2, q2, r, center) {
        // (at + b)^2 + (ct + d)^2 = r^2
        let t1, t2, rD, point1, point2; //roots
        let points = [];
        let a = q1.x - p1.x;
        let b = p1.x - center.x;
        let c = q1.y - p1.y;
        let d = p1.y - center.y;
        let A = a * a + c * c;
        let B = 2 * (a * b + c * d);
        let C = b * b + d * d - r * r;
        let D = B * B - 4 * A * C;

        if (D >= 0) {
            rD = Math.sqrt(D);
            t1 = (-B + rD) / (2 * A);
            t2 = (-B - rD) / (2 * A);
            if (t1 >= 0 && t1 <= 1) {
                point1 = new Point(p1.x + t1 * (q1.x - p1.x), p1.y + t1 * (q1.y - p1.y));
                if (this.onArc(point1, p2, q2, r, center)) points.push(point1);
            }
            if (D > 0 && t2 >= 0 && t2 <= 1) {
                point2 = new Point(p1.x + t2 * (q1.x - p1.x), p1.y + t2 * (q1.y - p1.y));
                if (this.onArc(point2, p2, q2, r, center)) points.push(point2);
            }
        }
        return points;
    }
    intersectLQ(p1, q1, p2, c, q2) {//line p1q1 qudratic curve p2cq2
        let A = p2.a(q2.a(c.scale(-2)));//p1+q1-2c
        let B = c.s(p2).scale(2);//2(c-p2)
        let qex, qey, tempq, roots = [], points = [], x, y, m, l;
        if (p1.x === q1.x) {//vertical line
            qex = new Quadratic(A.x, B.x, p2.x - p1.x);
            roots = qex.realRoots();
            if (roots.length === 0) {
                return [];
            }
            if (roots.length === 1) {
                qey = new Quadratic(A.y, B.y, p2.y);
                if (roots[0] < 0 || roots[0] > 1) {
                    return []
                } else {

                    y = qey.value(roots[0]);
                    if (y >= Math.min(p1.y, q1.y) && y <= Math.max(p1.y, q1.y)) {
                        return [new Point(p1.x, y)];
                    } else {
                        return [];
                    }
                }
            } else {
                if (roots[0] >= 0 && roots[0] <= 1) {
                    y = qey.value(roots[0]);
                    if (y >= Math.min(p1.y, q1.y) && y <= Math.max(p1.y, q1.y)) {
                        points.push(new Point(p1.x, y));
                    }
                }
                if (roots[1] >= 0 && roots[1] <= 1) {
                    y = qey.value(roots[1]);
                    if (y >= Math.min(p1.y, q1.y) && y <= Math.max(p1.y, q1.y)) {
                        points.push(new Point(p1.x, y));
                    }
                }
                return points;
            }

        } else {
            m = (q1.y - p1.y) / (q1.x - p1.x);
            l = p1.y - m * p1.x;
            qex = new Quadratic(A.x, B.x, p2.x);
            tempq = new Quadratic(m * A.x - A.y, m * B.x - B.y, m * p2.x - p2.y + p1.y - m * p1.x);
            roots = tempq.realRoots();
            if (roots.length === 0) {
                return [];
            }
            if (roots.length === 1) {
                if (roots[0] < 0 || roots[0] > 1) {
                    return []
                } else {
                    x = qex.value(roots[0]);
                    y = qey.value(roots[0]);
                    if (Math.abs(y - m * x - (p1.y - m * p1.x)) < 10e-4) {
                        return [new Point(x, y)];
                    } else {
                        return [];
                    }
                }
            } else {
                if (roots[0] >= 0 && roots[0] <= 1) {
                    x = qex.value(roots[0]);
                    y = qey.value(roots[0]);
                    if (Math.abs(y - m * x - (p1.y - m * p1.x)) < 10e-4) {
                        points.push(new Point(p1.x, y));
                    }
                }
                if (roots[1] >= 0 && roots[1] <= 1) {
                    x = qex.value(roots[1]);
                    y = qey.value(roots[1]);
                    if (Math.abs(y - m * x - (p1.y - m * p1.x)) < 10e-4) {
                        points.push(new Point(p1.x, y));
                    }
                }
                return points;
            }
        }
    }
    computeMidVertex(id) {
        let { subpath, index } = this.edgeIndex(id);
        let virtualEdge = {
            id: 'NewPoint',
            v: new Point(),
            c: 'L',
            t: 'sharp',
            tin: 'NA',
            tout: 'NA'
        };
        if(index > -1 && index < this.edges[subpath].length - 1 && this.edges[subpath].length > 1) {
            switch(this.edges[subpath][index + 1].c) {
                case 'H': {
                    virtualEdge.v = this.uiEdges[subpath][index].v.a(this.uiEdges[subpath][index + 1].v).scale(1 / 2);
                    break;
                }
                case 'V': {
                    virtualEdge.v = this.uiEdges[subpath][index].v.a(this.uiEdges[subpath][index + 1].v).scale(1 / 2);
                    break;
                }
                case 'L': {
                    virtualEdge.v = this.uiEdges[subpath][index].v.a(this.uiEdges[subpath][index + 1].v).scale(1 / 2);
                    break;
                }
                case 'C': {
                    let P0 = this.uiEdges[subpath][index].v;
                    let C0 = this.uiEdges[subpath][index].tout;
                    let C1 = this.uiEdges[subpath][index + 1].tin;
                    let P1 = this.uiEdges[subpath][index + 1].v;
                    let mp = this.midPointC(P0, C0, C1, P1);
                    virtualEdge.v = mp.P;
                    break;
                }
                case 'Q': {
                    let P0 = this.uiEdges[subpath][index].v;
                    let C = this.uiEdges[subpath][index + 1].tin;
                    let P1 = this.uiEdges[subpath][index + 1].v;
                    let mp = this.midPointQ(P0, C, P1);
                    virtualEdge.v = mp.P;
                    break;
                }
                case 'A': {
                    let P0 = this.edges[subpath][index].v;
                    let C0 = this.edges[subpath][index].tin;
                    let P1 = this.edges[subpath][index + 1].v;
                    let r = this.edges[subpath][index + 1].r;
                    let center = this.edges[subpath][index + 1].center;
                    let points = this.splitA(P0, C0, P1, r, center, 0.5);
                    let inv = this.ctm;
                    virtualEdge.v = this.transformVector(points.P, inv);
                    // console.log(virtualEdge.v)
                    break;
                }
            }

        }
        return virtualEdge;
    }
}