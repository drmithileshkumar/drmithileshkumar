import { Point } from "./point";
import { Path } from './path';
export class Regular {
    constructor(
        {
            n,
            points = '',
            layer='Layer-0',
            id='regular',
            tag = 'regular',
            name = 'Regular Polygon',
            parent = 'Layer-0',
            center = new Point(),
            r= 50,
            fill= 'rgba(255, 255, 255, 0.3)',
            stroke= 'rgba(0, 0, 0, 1)',
            strokewidth= 1,
            strokedasharray = 'none',
            opacity= 1,
            pathLength= 1,
            isLocked = false,
            isVisible = true,
            isClosed = [true],
            bbox = null,
            sbox = {
                tl: new Point(),
                tr: new Point(),
                bl: new Point(),
                br: new Point()
            },
            tm= new DOMMatrix(),
            ctm = new DOMMatrix(),
            axis = new Point(50, 50),
            filter = 'none',
            mask = 'none',
            preserveAspect = true
            }={}) {
            this.layer=layer,
            this.id=id,
            this.tag = tag,
            this.name = name,
            this.parent = parent,
            this.center = center,
            this.r= r,
            this.n = Math.floor(n),
            this.fill= fill,
            this.stroke= stroke,
            this.strokewidth= strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity= opacity,
            this.pathLength= pathLength,
            this.isLocked = isLocked,
            this.isVisible = isVisible,
            this.isClosed = isClosed,
            this.bbox = bbox,
            this.sbox = sbox,
            this.tm = tm,
            this.ctm = ctm,
            this.filter = filter,
            this.mask = mask,
            this.axis = axis,
            this.points = points;
            this.preserveAspect = preserveAspect
            let p, q;
            for(let i = 0; i < this.n; i++) {
                p = new Point(this.r + this.center.x, this.center.y);
                q = p.rotate(2*i*Math.PI/this.n, new Point(this.center.x, this.center.y));
                this.points = this.points + q.x.toFixed(2) + ',' + q.y.toFixed(2) + ' ';
            }
            
    }
    computePoints() {
        let pts = [];
        let p, q;
        for(let i = 0; i < this.n; i++) {
            
            p = new Point(this.r + this.center.x, this.center.y);
            q = p.rotate(2*i*Math.PI/this.n, this.center);
            pts.push(q);
            // this.points = this.points + q.x.toFixed(2) + ',' + q.y.toFixed(2) + ' ';
        }
        return pts;
    }
    setPoints() {
        let pts = this.computePoints();
        this.points = '';
        for(let i = 0; i < this.n; i++) {
            this.points = this.points + pts[i].x.toFixed(2) + ',' + pts[i].y.toFixed(2) + ' ';
        }
    }
    duplicate() {
        let rct = new Regular({...this});
        rct.center = this.center.duplicate();
        rct.tm = new DOMMatrix([
            this.tm.a,
            this.tm.b,
            this.tm.c,
            this.tm.d,
            this.tm.e,
            this.tm.f
        ])
        rct.ctm = new DOMMatrix([
            this.ctm.a,
            this.ctm.b,
            this.ctm.c,
            this.ctm.d,
            this.ctm.e,
            this.ctm.f
        ])
        rct.sbox = {
            tl: new Point(),
            tr: new Point(),
            br: new Point(),
            bl: new Point()
        }
        rct.sbox.bl = this.sbox.bl.duplicate();
        rct.sbox.tl = this.sbox.tl.duplicate();
        rct.sbox.br = this.sbox.br.duplicate();
        rct.sbox.tr = this.sbox.tr.duplicate();

        rct.axis = this.axis.duplicate();
        return rct;
    }
    transformVector(vec, tm) {
        return new Point(
            tm.a * vec.x + tm.c * vec.y + tm.e,
            tm.b * vec.x + tm.d * vec.y + tm.f
        )
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
        this.center = new Point(this.center.x, this.center.y);
        this.axis = new Point(this.axis.x, this.axis.y);
        this.sbox = {
            tl: new Point(this.sbox.tl.x, this.sbox.tl.y),
            tr: new Point(this.sbox.tr.x, this.sbox.tr.y),
            bl: new Point(this.sbox.bl.x, this.sbox.bl.y),
            br: new Point(this.sbox.br.x, this.sbox.br.y)
        }
    }
    updateSelectionBox() {
        this.sbox.tl = this.transformVector({x: this.bbox.x, y: this.bbox.y}, this.ctm);
        this.sbox.tr = this.transformVector({x: this.bbox.x + this.bbox.width, y: this.bbox.y}, this.ctm);
        this.sbox.bl = this.transformVector({x: this.bbox.x, y: this.bbox.y + this.bbox.height}, this.ctm);
        this.sbox.br = this.transformVector({x: this.bbox.x + this.bbox.width, y: this.bbox.y + this.bbox.height}, this.ctm); 
        this.sbox = this.sbox;
    }
    transformUIControls() {
        
    }
    toPath() {
        let regularPath = new Path({
            id: this.id,
            tag: 'path',
            name: this.name,
            layer: this.layer,
            filltype: this.filltype,
            fill: this.fill,
            fillrule: this.fillrule,
            stroke: this.stroke,
            strokewidth: this.strokewidth,
            strokedasharray: this.strokedasharray,
            strokelinecap: this.strokelinecap,
            strokelinejoin: this.strokelinejoin,
            strokemiterlimit: this.strokemiterlimit,
            opacity: this.opacity,
            pathLength: this.pathLength,
            tm: this.tm,
            ctm: this.ctm,
            axis: this.axis,
            bbox: this.bbox,
            sbox: this.sbox,
            isLocked: this.isLocked,
            isVisible: this.isVisible,
            isClosed: this.isClosed,
            filter: this.filter
        });
        //regularPath.d, regularPath.nv, regularPath.edges, regularPath.uiEdges
        this.constructEdges(regularPath);
        regularPath.d = '';
        regularPath.setD();
        return regularPath;
    }
    constructEdges(regularPath) {
        let pts = this.computePoints();
        // console.log(pts)
        regularPath.nv = 0;
        regularPath.edges = [[]];
        regularPath.uiEdges = [[]];
        let newEdge = {
            id: regularPath.nv,
            v: pts[0],
            tout: 'NA',
            tin: 'NA',
            c: 'M',
            t: 'sharp'
        }
        let newUIEdge = {
            id: regularPath.nv,
            v: this.transformVector(newEdge.v, this.ctm),
            tout: 'NA',
            tin: 'NA',
            c: 'M',
            t: 'sharp'
        }
        regularPath.edges[0].push(newEdge);
        regularPath.uiEdges[0].push(newUIEdge);

        for(let i = 1; i < pts.length; i++) {
            regularPath.nv++;
            newEdge = {
                id: regularPath.nv,
                v: pts[i],
                tout: 'NA',
                tin: 'NA',
                c: 'L',
                t: 'sharp'
            }
            newUIEdge = {
                id: regularPath.nv,
                v: this.transformVector(newEdge.v, this.ctm),
                tout: 'NA',
                tin: 'NA',
                c: 'L',
                t: 'sharp'
            }
            regularPath.edges[0].push(newEdge);
            regularPath.uiEdges[0].push(newUIEdge);
        }
        regularPath.nv++;
        newEdge = {
            id: regularPath.nv,
            v: pts[0],
            tout: 'NA',
            tin: 'NA',
            c: 'L',
            t: 'sharp'
        }
        newUIEdge = {
            id: regularPath.nv,
            v: this.transformVector(newEdge.v, this.ctm),
            tout: 'NA',
            tin: 'NA',
            c: 'L',
            t: 'sharp'
        }
        regularPath.edges[0].push(newEdge);
        regularPath.uiEdges[0].push(newUIEdge);
        regularPath.nv++;
    }
    translateCenter(dx, dy) {
        let changePoint = new Point(dx, dy);
        this.center = this.center.a(changePoint);
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
        // this.translateCenter(dx, dy);
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
        rotateMat = rotateMat.translateSelf(center.x, center.y).rotateSelf(theta * 180/Math.PI).translateSelf(-center.x, -center.y);
        this.tm = rotateMat.multiplySelf(this.tm); 
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
        switch(constraint) {
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
        this.axis.x = (this.sbox.tl.x + this.sbox.br.x)/2;
        this.axis.y = (this.sbox.tl.y + this.sbox.br.y)/2;
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
    reflect(about) {
        let bboxOrigin = new Point(this.bbox.x + this.bbox.width/2, this.bbox.y + this.bbox.height/2)
        switch(about) {
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
    }
}