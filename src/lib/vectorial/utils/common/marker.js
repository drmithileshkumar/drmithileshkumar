//@ts-nocheck
import {Path} from './path';
export class Marker {
    constructor(
        {
            layer='Layer-0',
            id='marker',
            tag = 'marker',
            name = 'Marker',
            parent = 'Layer-0',
            refX = 0, //left,center,right
            refY = 5, //top,center,bottom
            markerWidth = 6,
            markerHeight = 6,
            markerUnits = 'strokeWidth', //userSpaceOnUse
            orient = 'auto-start-reverse', //<angle>, auto, auto-start-reverse 
            preserveAspectRatio = 'xMidYMid meet',
            viewBox = '0 0 10 10',
            path = new Path({id: 'Marker', d: 'M 0 0 L 10 5 L 0 10 z', fill: 'rgba(0, 0, 0, 1)', strokewidth: 0})
            }={}) {
            this.layer=layer,
            this.id=id,
            this.tag = tag,
            this.name = name,
            this.parent = parent,
            this.refX = refX,
            this.refY = refY,
            this.markerWidth = markerWidth,
            this.markerHeight = markerHeight,
            this.markerUnits = markerUnits,
            this.orient = orient,
            this.preserveAspectRatio = preserveAspectRatio,
            this.viewBox = viewBox,
            this.path = path
    }
    
    duplicate() {
        let marker = new Marker({...this});
        marker.path = marker.path.duplicate();
        return marker;
    }
    transformVector(vec, tm) {
        return new Point(
            tm.a * vec.x + tm.c * vec.y + tm.e,
            tm.b * vec.x + tm.d * vec.y + tm.f
        )
    }
    hydrate() {
        this.path.hydrate();
    }
}