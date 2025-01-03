
export class SpecularLighting {
    constructor(
        {
            layer='Layer-0',
            id='specularLighting',
            tag = 'specularLighting',
            name = 'SpecularLighting',
            parent = 'Layer-0',
            x = 0,
            y = 0,
            width = 200,
            height = 200,
            result = 'spotlight',
            surfaceScale='1',
            specularConstant="1",
            specularExponent="50",
            lightingColor='rgba(255, 255, 255, 1)',
            point = {x:-50, y:-50, z:100},
            input = 'SourceGraphic',
            input2 = 'spotlight',
            operator = 'arithmetic',
            k1 = 0,
            k2 = 1,
            k3 = 1,
            k4 = 0
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
            this.result = result,
            this.surfaceScale = surfaceScale,
            this.specularConstant = specularConstant,
            this.specularExponent = specularExponent,
            this.lightingColor = lightingColor,
            this.point = point,
            this.input = input,
            this.input2 = input2,
            this.operator = operator,
            this.k1 = k1,
            this.k2 = k2,
            this.k3 = k3,
            this.k4 = k4
    }
    
    duplicate() {
        let rct = new SpecularLighting({...this});
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