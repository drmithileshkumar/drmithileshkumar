//@ts-nocheck
import { Point } from "./point";

export class RadialGradient {
    constructor(
        {
            id = 'rg',
            tag = 'radialGradient',
            name = 'RadialGradient',
            focus = new Point(50, 50),
            center = new Point(50, 50),
            fr = 0,
            r = 50,
            colors = [{offset: 0, stopColor: 'rgba(0, 0, 0, 0.1)'}, {offset: 100, stopColor: 'rgba(0, 0, 0, 1)'}],
            tm= new DOMMatrix(),//gradientTransform
            ctm = new DOMMatrix(),
            gradientUnits = 'objectBoundingBox', //userSpaceOnUse
            spreadMethod = 'pad', // reflect, repeat
            axis = new Point()
        }={}) {
                this.id=id,
                this.tag = tag,
                this.name = name,
                this.focus = focus,
                this.center = center,
                this.fr = fr,
                this.r = r,
                this.colors = colors,
                this.tm = tm,
                this.ctm = ctm,
                this.gradientUnits = gradientUnits,
                this.spreadMethod = spreadMethod,
                this.axis = axis
            }
    
    duplicate() {
        
        let newCopy = new RadialGradient({...this});

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
        newCopy.focus = this.focus.duplicate();
        newCopy.center = this.center.duplicate();
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
        this.focus = new Point(this.focus.x, this.focus.y);
        this.center = new Point(this.center.x, this.center.y);
        this.axis = new Point(this.axis.x, this.axis.y);
    }
    translateAxis(dx, dy) {
        let changePoint = new Point(dx, dy);
        this.axis = this.axis.a(changePoint);
    }
    translate(dx, dy) {
        let translateMat = new DOMMatrix().translateSelf(dx, dy);
        this.tm = translateMat.multiplySelf(this.tm);
        // this.tm.translateSelf(dx, dy);
        this.translateAxis(dx, dy);
        this.translateSbox(dx, dy);
        
    }
    rotate(theta, center) {//radians
        let rotateMat = new DOMMatrix();
        rotateMat = rotateMat.translateSelf(center.x, center.y).rotateSelf(theta * 180/Math.PI).translateSelf(-center.x, -center.y);
        this.tm = rotateMat.multiplySelf(this.tm); 
        this.rotateSbox(theta, center);
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
}