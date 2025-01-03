
export class Blur {
    constructor(
        {
            layer='Layer-0',
            id='blur',
            tag = 'blur',
            name = 'Blur',
            parent = 'Layer-0',
            x = 0,
            y = 0,
            width = 200,
            height = 200,
            stdDeviation = 2,
            input = 'SourceGraphic',
            edgeMode = 'none'
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
            this.stdDeviation = stdDeviation,
            this.input = input,
            this.edgeMode = edgeMode
    }
    
    duplicate() {
        let rct = new Blur({...this});
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