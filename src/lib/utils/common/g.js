
import { Point } from "./point";

export class Group {
    constructor(
        {
            id = 'group',
            tag = 'g',
            name = 'Group',
            layer = 'Layer-0',
            parent = 'Layer-0',
            children = [],
            fill= 'rgba(0, 0, 0, 0)',
            stroke= 'rgba(0, 0, 0, 1)',
            strokewidth= 1,
            strokedasharray='none',
            opacity= 1,
            tm= new DOMMatrix(),
            ctm = new DOMMatrix(),
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
            filter = 'none',
            mask = 'none',
            preserveAspect = true
        }={}) {
                this.id=id,
                this.tag = tag,
                this.name = name,
                this.layer = layer,
                this.parent = parent,
                this.children = children,
                this.fill= fill,
                this.stroke= stroke,
                this.strokewidth= strokewidth,
                this.strokedasharray = strokedasharray,
                this.opacity= opacity,
                this.tm = tm,
                this.ctm = ctm,
                this.axis = axis,
                this.bbox = bbox,
                this.sbox = sbox,
                this.isLocked = isLocked,
                this.isVisible = isVisible,
                this.filter = filter,
                this.mask = mask,
                this.preserveAspect = preserveAspect
            }
    transformVector(vec, tm) {
        return new Point(
            tm.a * vec.x + tm.c * vec.y + tm.e,
            tm.b * vec.x + tm.d * vec.y + tm.f
        )
    }
    transformUIControls() {}
    duplicate() {
        
        let newCopy = new Group({...this});
        let children = [];
        for(let i = 0; i < this.children.length; i++) {
            children.push(this.children[i]);
        }
        this.children = children;
        if(this.bbox) {
            newCopy.bbox = {
                x: this.bbox.x,
                y: this.bbox.y,
                width: this.bbox.width,
                height: this.bbox.height
            };
        }
        if(this.sbox) {
            newCopy.sbox = {
                bl: this.sbox.bl.duplicate(),
                tl: this.sbox.tl.duplicate(),
                tr: this.sbox.tr.duplicate(),
                br: this.sbox.br.duplicate()
            }
        }
        
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
        let translateMat = new DOMMatrix();
        translateMat = translateMat.translateSelf(dx, dy);
        this.tm = translateMat.multiplySelf(this.tm);
        this.translateAxis(dx, dy);
        this.translateSbox(dx, dy);
        
    }
    rotateSbox(theta) {//radians
        this.sbox.tl = this.sbox.tl.rotate(theta, this.axis);
        this.sbox.tr = this.sbox.tr.rotate(theta, this.axis);
        this.sbox.br = this.sbox.br.rotate(theta, this.axis);
        this.sbox.bl = this.sbox.bl.rotate(theta, this.axis);
    }
    rotate(theta) {//radians
        let rotateMat = new DOMMatrix();
        rotateMat = rotateMat.translateSelf(this.axis.x, this.axis.y).rotateSelf(theta * 180/Math.PI).translateSelf(-this.axis.x, -this.axis.y);
        this.tm = rotateMat.multiplySelf(this.tm); 
        this.rotateSbox(theta);
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
        
        this.tm = this.tm.translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y);
        
        
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