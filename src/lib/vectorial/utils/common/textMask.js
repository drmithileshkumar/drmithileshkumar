//@ts-nocheck
export class  TextMask {
    constructor(
        {
            layer='Layer-0',
            id='textMask',
            tag = 'textMask',
            name = 'TextMask',
            parent = 'Layer-0',
            shape = '',
            text = [],
            }={}) {
            this.layer=layer,
            this.id=id,
            this.tag = tag,
            this.name = name,
            this.parent = parent,
            this.shape = shape,
            this.text = text
    }
    
    duplicate() {
        let rct = new  TextMask({...this});
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