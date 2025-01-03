import { Point } from "./point";

export class Polyline {
    constructor(
        {
        layer='Layer-0',
        treeNode={id: 'polyline', name: 'Polyline'},
        tag = 'polyline',
        Class = 'draggable',
        group = 'Layer-0',
        locked = false,
        nv = 0, //vertex counter
        controls = [], // array of {id, c0, point, c1}
        controlpoints = [],
        bbox= {x: -50, y: -50, width: 100, height: 50},
        fill= 'rgba(0, 0, 0, 0)',
        stroke= 'rgba(0, 0, 0, 1)',
        strokewidth= 1,
        strokedasharray='none',
        points='',
        filter = 'none',
        closed=false,
        opacity= 1,
        stretch=[],
        pathLength= 1,
        translatex= 0,
        translatey= 0,
        angle= 0, // degrees
        axisx= 0,
        axisy= 0,
        scalex= 1,
        scaley= 1,
        skewX= 0, // degrees
        skewY= 0,
        preserveAspect = true}={}) {
            this.layer=layer,
            this.treeNode=treeNode,
            this.locked = locked,
            this.tag = tag,
            this.group = group,
            this.Class = Class,
            this.nv = nv,
            this.controls = controls, // {id, point}
            this.controlpoints = controlpoints, //{id, point}
            this.fill= fill,
            this.stroke= stroke,
            this.strokewidth= strokewidth,
            this.strokedasharray = strokedasharray,
            this.opacity= opacity,
            this.filter = filter,
            this.stretch = stretch,
            this.pathLength= pathLength,
            this.translatex= translatex,
            this.translatey= translatey,
            this.angle= angle, // degrees
            this.axisx= axisx,
            this.axisy= axisy,
            this.scalex= scalex,
            this.scaley= scaley,
            this.skewX= skewX, // degrees
            this.skewY= skewY;
            this.closed = closed;
            this.points = points;
            this.bbox = bbox;
            this.preserveAspect = preserveAspect
            this.controls.forEach(p => {
                this.points = this.points + ' ' + p.point.x.toFixed(2) + ',' + p.point.y.toFixed(2);
            })
            
    }
    setPoints() {
        this.points = '';
        for(let i = 0; i < this.controls.length; i++) {
            this.points = this.points + ' ' + this.controls[i].point.x.toFixed(2) + ',' + this.controls[i].point.y.toFixed(2)
        }
    }
    close() {
    }
    open() {
        if(this.closed) {
            this.closed = false;
            this.setD();
        }
        
    }
    duplicate() {
        let properties = {...this};
        let controls = [];
        let controlpoints = [];
        for(let i = 0; i < properties.controls.length; i++) {
            controls.push({id: properties.controls[i].id, point: properties.controls[i].point.duplicate()});
            controlpoints.push({id: properties.controlpoints[i].id, point: properties.controlpoints[i].point.duplicate()})
        }
        let newCopy = new Polyline({...this});
        newCopy.treeNode = null;
        newCopy.controls = controls;
        newCopy.controlpoints = controlpoints;
        return newCopy;
    }
    hydrate(symbol) {
        this.controls = [];
        this.controlpoints = [];
        for(let i = 0; i < symbol.controls.length; i++) {
            this.controls.push({
                id: this.treeNode.id + '-' + symbol.controls[i].id.split('-')[2],
                point: new Point(symbol.controls[i].point.x, symbol.controls[i].point.y),
            });
            this.controlpoints.push({
                id: this.controls[i].id,
                point: new Point(symbol.controlpoints[i].point.x, symbol.controlpoints[i].point.y),
            });
        }
    }
    setStretch() {
        this.stretch = [];
        let w = this.bbox.width;
        let x = this.bbox.x;
        let h = this.bbox.height;
        let y = this.bbox.y;
        for(let i = 0; i < this.controls.length; i++) {
            this.stretch.push(
                {
                    id: this.controls[i].id,
                    
                    point: {x: (this.controls[i].point.x - x)/w, y: (this.controls[i].point.y - y)/h},
                    
                })
        }
        this.stretch = this.stretch;
    }
    stretchNodes() {
        
        for(let i = 0; i < this.controls.length; i++) {
            this.controls[i].point.x = this.bbox.x + this.stretch[i].point.x * this.bbox.width;
            this.controls[i].point.y = this.bbox.y + this.stretch[i].point.y * this.bbox.height;
            
        }
        
        this.controls = this.controls;
        this.setPoints();
    }
}