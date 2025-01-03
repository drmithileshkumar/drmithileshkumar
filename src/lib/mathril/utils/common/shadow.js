
export class Shadow {
    constructor(
        {
            layer='Layer-0',
            id='shadow',
            tag = 'shadow',
            name = 'Shadow',
            parent = 'Layer-0',
            x = 0,
            y = 0,
            width = 200,
            height = 200,
            dx = 2,
            dy = 2,
            stdDeviation = 2,
            floodcolor = 'rgba(0, 0, 0, 0.5)',
            floodopacity = 1
            }={}) {
            this.layer=layer,
            this.id=id,
            this.tag = tag,
            this.name = name,
            this.parent = parent,
            this.x = x,
            this.y = y,
            this.width = width,
            this.height = height,
            this.dx = dx,
            this.dy = dy,
            this.stdDeviation = stdDeviation,
            this.floodcolor = floodcolor,
            this.floodopacity = floodopacity
    }
    
    duplicate() {
        let rct = new Shadow({...this});
        return rct;
    }
    transformVector(vec, tm) {
        return new Point(
            tm.a * vec.x + tm.c * vec.y + tm.e,
            tm.b * vec.x + tm.d * vec.y + tm.f
        )
    }
    hydrate() {
        
    }
}