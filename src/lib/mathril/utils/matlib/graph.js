//@ts-nocheck
import { Point } from "./point";
import { Line } from './line2';
import { Sets } from "./sets";


export class Graph { // x, y, width, height, dX, dY, dx, dy,  showSubdivisions, numberOfSubdivisions, border, hPath, HPath, vPath, VPath
    constructor(
        {
            layer='Layer-0',
            id='graph',
            name='Graph',
            parent='Layer-0',
            tag = 'graph',
            n = 0,
            v = [],
            e = [],
            degrees = [],
            adjacency = [],
            directed = false,
            simple = true,
            stroke = 'currentcolor',
            strokewidth = 2,
            fill= 'none',
            filltype='solid',
            vectorEffect = 'none', //none, non-scaling-size, non-rotation, fixed-position
            opacity= 1,
            isLocked = false,
            isVisible = true,
            bbox = null,
            sbox = {
                tl: new Point(),
                tr: new Point(),
                bl: new Point(),
                br: new Point()
            },
            tm= new DOMMatrix(),
            ctm = new DOMMatrix(),
            axis = new Point(),
            filter = 'none',
            preserveAspect = true
        }={}) {

            this.layer=layer,
            this.id=id,
            this.name = name,
            this.parent=parent,
            this.tag = tag,
            this.n = n,
            this.v = v,
            this.e = e,
            this.degrees = degrees,
            this.adjacency = adjacency,
            this.directed = directed,
            this.simple = simple,
            this.stroke = stroke,
            this.strokewidth = strokewidth,
            this.fill= fill,
            this.filltype = filltype,
            this.opacity= opacity,
            this.isLocked = isLocked,
            this.isVisible = isVisible,
            this.bbox = bbox,
            this.sbox = sbox,
            this.tm = tm,
            this.ctm = ctm,
            this.axis = axis,
            this.filter = filter,
            this.preserveAspect = preserveAspect,
            this.vectorEffect = vectorEffect
    }
    computeAdjacency() {
        for(let i = 0; i < this.n; i++) {
            this.adjacency.push([]);
        }
        for(let i = 0; i < this.e.length; i++) {
            this.adjacency[this.e[i][0]].push(this.e[i][1])
            this.adjacency[this.e[i][1]].push(this.e[i][0])
        }
    }
    computeDegrees() {
        for(let i = 0; i < this.n; i++) {
            this.degrees[i] = this.adjacency[i].length;
        }
    }
    random(nmax = 10, nmin = 10, emax = 10, emin = 10, simple = true, directed = false) {
        this.n = randInt(nmax, nmin, true);
        let nedges = randInt(emax, emin, true);
        for(let i = 0; i < this.n; i++) {
            this.v.push(i);
        }
        if(simple && !directed) {
            let candidates = new Sets();
            candidates.eq = (a, b) => a[0] === b[0] && a[1] === b[1];
            candidates.strElem = (a) => `(${a[0]}, ${a[1]})`;
            for(let i = 0; i < this.n; i++) {
                for(let j = 0; j < this.n; j++) {
                    if(i < j) {
                        candidates.e.push([i, j]);
                    }
                }
            }
            this.e = candidates.krandomSubset(nedges).e;
        }
    }
    randomAB(n) {
        this.n = n;
        for(let i = 0; i < this.n; i++) {
            this.v.push(i);
        }
        let nA = Math.floor(this.n/2);
        let nB = this.n - nA;
        let pab = 0.5;
        let paa = 0.3;
        let pbb = 0.3;
        for(let i = 0; i < nA; i++) {//AA
            for(let j = i + 1; j < nA; j++) {
                if(Math.random() <= paa) this.e.push([i, j]);
            }
        }
        for(let i = nA; i < this.n; i++) {//BB
            for(let j = i + 1; j < this.n; j++) {
                if(Math.random() <= pbb) this.e.push([i, j]);
            }
        }
        for(let i = 0; i < nA; i++) {//AB
            for(let j = nA; j < this.n; j++) {
                if(Math.random() <= pab) this.e.push([i, j]);
            }
        }
        this.computeAdjacency();
        this.computeDegrees();
    }
    drawAB() {
        let nA = Math.floor(this.n/2);
        let edges = [];
        let paths = '';
        let vertices = '';
        let pos = [];
        for(let i = 0; i < nA; i++) {
            pos.push(new Point(50 * i, 0))
        }
        for(let i = 0; i < this.n - nA; i++) {
            pos.push(new Point(50 * i, 70))
        }
        for(let i = 0; i < this.e.length; i++) {
            if(this.e[i][0] < nA && this.e[i][1] < nA) {
                let c0 = pos[this.e[i][0]].section(pos[this.e[i][1]], 1, 2);
                let c1 = pos[this.e[i][0]].section(pos[this.e[i][1]], 2, 1);
                c0 = c0.a(new Point(0, -(pos[this.e[i][1]].x - pos[this.e[i][0]].x)/3))
                c1 = c1.a(new Point(0, -(pos[this.e[i][1]].x - pos[this.e[i][0]].x)/3))
                edges.push(`M ${pos[this.e[i][0]].x},${pos[this.e[i][0]].y} C ${c0.x},${c0.y} ${c1.x},${c1.y} ${pos[this.e[i][1]].x},${pos[this.e[i][1]].y}`)
            } else if(this.e[i][0] >= nA && this.e[i][1] >= nA) {
                let c0 = pos[this.e[i][0]].section(pos[this.e[i][1]], 1, 2);
                let c1 = pos[this.e[i][0]].section(pos[this.e[i][1]], 2, 1);
                c0 = c0.a(new Point(0, (pos[this.e[i][1]].x - pos[this.e[i][0]].x)/3))
                c1 = c1.a(new Point(0, (pos[this.e[i][1]].x - pos[this.e[i][0]].x)/3))
                edges.push(`M ${pos[this.e[i][0]].x},${pos[this.e[i][0]].y} C ${c0.x},${c0.y} ${c1.x},${c1.y} ${pos[this.e[i][1]].x},${pos[this.e[i][1]].y}`)
            } else {
                edges.push(`M ${pos[this.e[i][0]].x},${pos[this.e[i][0]].y} L ${pos[this.e[i][1]].x},${pos[this.e[i][1]].y}`)
            }
        }                                            
        for(let i = 0; i < this.e.length; i++) {
            paths += `<path d="${edges[i]}" stroke=${this.stroke} stroke-width=${this.strokewidth} fill="none" />`
        }
        for(let i = 0; i < this.n; i++) {
            vertices += `<circle cx="${pos[i].x}" cy="${pos[i].y}" r="5" fill="currentcolor" />`
        }
        let svgStart = `<g>`
        let svgEnd = `</g>`
        return svgStart + paths + vertices + svgEnd;
    }
    draw() {

        let grd = `
        <g 
            transform='matrix(${this.tm.a} ${this.tm.b} ${this.tm.c} ${this.tm.d} ${this.tm.e} ${this.tm.f})'
        >`   
        let h = this.dX / this.nSubdivisions;
        if(this.showSubdivisions) {
            for(let i = 0; i < Math.round(this.width / h); i++) {
                grd += `<line x1='${h * i + this.x}' y1='${this.y}' x2='${h * i + this.x}' y2='${this.y + this.height}' stroke='${this.hPath.stroke}' stroke-width='${this.hPath.strokewidth}' stroke-dasharray='${this.hPath.strokedasharray}' opacity='${this.hPath.opacity}' stroke-linecap='${this.hPath.strokelinecap}' stroke-linejoin='${this.hPath.strokelinejoin}' stroke-miterlimit='${this.hPath.strokemiterlimit}' />`
            }
            let v = this.dY / this.nSubdivisions;
            for(let i = 0; i < Math.round(this.height / v); i++) {
                grd += `<line x1='${this.x}' y1='${i * v + this.y}' x2='${this.x + this.width}' y2='${i * v + this.y}' stroke='${this.vPath.stroke}' stroke-width='${this.vPath.strokewidth}' stroke-dasharray='${this.vPath.strokedasharray}' opacity='${this.vPath.opacity}' stroke-linecap='${this.vPath.strokelinecap}' stroke-linejoin='${this.vPath.strokelinejoin}' stroke-miterlimit='${this.vPath.strokemiterlimit}'/>`
            }
        }
        for(let i = 0; i < Math.round(this.width / this.dX); i++) {
            grd += `<line x1='${this.dX * i + this.x + this.dx}' y1='${this.y}' x2='${this.dX * i + this.x + this.dx}' y2='${this.y + this.height}' stroke='${this.HPath.stroke}' stroke-width='${this.HPath.strokewidth}' stroke-dasharray='${this.HPath.strokedasharray}' opacity='${this.HPath.opacity}' stroke-linecap='${this.HPath.strokelinecap}' stroke-linejoin='${this.HPath.strokelinejoin}' stroke-miterlimit='${this.HPath.strokemiterlimit}'/>`
        }
        for(let i = 0; i < Math.round(this.height / this.dY); i++) {
            grd += `<line x1='${this.x}' y1='${this.dY * i + this.y + this.dy}' x2='${this.x + this.width}' y2='${this.dY * i + this.y + this.dy}' stroke='${this.VPath.stroke}' stroke-width='${this.VPath.strokewidth}' stroke-dasharray='${this.VPath.strokedasharray}' opacity='${this.VPath.opacity}' stroke-linecap='${this.VPath.strokelinecap}' stroke-linejoin='${this.VPath.strokelinejoin}' stroke-miterlimit='${this.VPath.strokemiterlimit}'/>`
        }
        grd +=`
        </g>`;
        return grd;
    }
    duplicate() {
        let grd = new Graph({...this});
        grd.tm = new DOMMatrix([
            this.tm.a,
            this.tm.b,
            this.tm.c,
            this.tm.d,
            this.tm.e,
            this.tm.f
        ])
        grd.ctm = new DOMMatrix([
            this.ctm.a,
            this.ctm.b,
            this.ctm.c,
            this.ctm.d,
            this.ctm.e,
            this.ctm.f
        ])
        grd.sbox = {
            tl: new Point(),
            tr: new Point(),
            br: new Point(),
            bl: new Point()
        }
        grd.sbox.bl = this.sbox.bl.duplicate();
        grd.sbox.tl = this.sbox.tl.duplicate();
        grd.sbox.br = this.sbox.br.duplicate();
        grd.sbox.tr = this.sbox.tr.duplicate();
        grd.hPath = this.hPath.duplicate();
        grd.HPath = this.HPath.duplicate();
        grd.vPath = this.vPath.duplicate();
        grd.VPath = this.VPath.duplicate();
        grd.axis = this.axis.duplicate();
        return grd;
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
        // this.hPath.hydrate();
        // this.HPath.hydrate();
        // this.vPath.hydrate();
        // this.VPath.hydrate();
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
        // console.log('translating by...', dx, dy);
        let translateMat = new DOMMatrix().translateSelf(dx, dy);
        this.tm = translateMat.multiplySelf(this.tm);
        // this.ctm = translateMat.multiplySelf(this.ctm);
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
    computeBBox() {
        let elementString = this.drawAB();
        const dummyDiv = document.createElement('div');
        dummyDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${elementString}</svg>`;

        const svgElement = dummyDiv.firstChild;

        // Append SVG to the body temporarily
        document.body.appendChild(svgElement);

        // Get the first child (the SVG element we are interested in) and its bounding box
        const element = svgElement.firstChild;
        const bbox = element.getBBox();

        // Clean up by removing the temporary SVG from the body
        document.body.removeChild(svgElement);

        // Return the bounding box
        return bbox;

    }     
}