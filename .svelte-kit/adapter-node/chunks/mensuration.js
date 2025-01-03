import { r as randInt } from "./common.js";
import { P as Point } from "./point.js";
import { P as Path } from "./path.js";
var svgNS = "http://www.w3.org/2000/svg";
class Line {
  constructor({
    layer = "Layer-0",
    id = "line",
    parent = "Layer-0",
    name = "Line",
    tag = "line",
    x1 = 0,
    y1 = 0,
    x2 = 50,
    y2 = 50,
    ux1 = 0,
    ux2 = 50,
    uy1 = 0,
    uy2 = 50,
    fill = "rgba(0, 0, 0, 0.3)",
    stroke = "rgba(0, 0, 0, 1)",
    strokewidth = 2,
    strokedasharray = "none",
    vectorEffect = "none",
    //none, non-scaling-size, non-rotation, fixed-position
    opacity = 1,
    pathLength = 1,
    isLocked = false,
    isVisible = true,
    isClosed = [false],
    bbox = null,
    sbox = {
      tl: new Point(),
      tr: new Point(),
      bl: new Point(),
      br: new Point()
    },
    tm = new DOMMatrix(),
    ctm = new DOMMatrix(),
    axis = new Point(50, 25),
    filter = "none",
    preserveAspect = true
  } = {}) {
    this.layer = layer, this.id = id, this.name = name, this.parent = parent, this.tag = tag, this.x1 = x1, this.y1 = y1, this.x2 = x2, this.y2 = y2, this.ux1 = ux1, this.uy1 = uy1, this.ux2 = ux2, this.uy2 = uy2, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.vectorEffect = vectorEffect, this.opacity = opacity, this.pathLength = pathLength, this.isLocked = isLocked, this.isVisible = isVisible, this.bbox = bbox, this.sbox = sbox, this.tm = tm, this.ctm = ctm, this.axis = axis;
    this.filter = filter;
    this.preserveAspect = preserveAspect;
  }
  duplicate() {
    let rct = new Line({ ...this });
    rct.tm = new DOMMatrix([
      this.tm.a,
      this.tm.b,
      this.tm.c,
      this.tm.d,
      this.tm.e,
      this.tm.f
    ]);
    rct.ctm = new DOMMatrix([
      this.ctm.a,
      this.ctm.b,
      this.ctm.c,
      this.ctm.d,
      this.ctm.e,
      this.ctm.f
    ]);
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
    );
  }
  hydrate() {
    this.tm = new DOMMatrix([
      this.tm.a,
      this.tm.b,
      this.tm.c,
      this.tm.d,
      this.tm.e,
      this.tm.f
    ]);
    this.ctm = new DOMMatrix([
      this.ctm.a,
      this.ctm.b,
      this.ctm.c,
      this.ctm.d,
      this.ctm.e,
      this.ctm.f
    ]);
    this.axis = new Point(this.axis.x, this.axis.y);
    this.sbox = {
      tl: new Point(this.sbox.tl.x, this.sbox.tl.y),
      tr: new Point(this.sbox.tr.x, this.sbox.tr.y),
      bl: new Point(this.sbox.bl.x, this.sbox.bl.y),
      br: new Point(this.sbox.br.x, this.sbox.br.y)
    };
  }
  updateSelectionBox() {
    this.sbox.tl = this.transformVector({ x: this.bbox.x, y: this.bbox.y }, this.ctm);
    this.sbox.tr = this.transformVector({ x: this.bbox.x + this.bbox.width, y: this.bbox.y }, this.ctm);
    this.sbox.bl = this.transformVector({ x: this.bbox.x, y: this.bbox.y + this.bbox.height }, this.ctm);
    this.sbox.br = this.transformVector({ x: this.bbox.x + this.bbox.width, y: this.bbox.y + this.bbox.height }, this.ctm);
    this.sbox = this.sbox;
  }
  transformUIControls() {
    let p1 = new Point(this.x1, this.x2);
    let p2 = new Point(this.x2, this.y2);
    let up1 = this.transformVector(p1, this.ctm);
    let up2 = this.transformVector(p2, this.ctm);
    this.ux1 = up1.x;
    this.uy1 = up1.y;
    this.ux2 = up2.x;
    this.uy2 = up2.y;
  }
  toPath() {
    let rectanglePath = new Path({
      id: this.id,
      tag: "path",
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
    this.constructEdges(rectanglePath);
    rectanglePath.d = "";
    rectanglePath.setD();
    return rectanglePath;
  }
  constructEdges(rectanglePath) {
    rectanglePath.nv = 0;
    let newEdge0 = {
      id: rectanglePath.nv,
      v: new Point(this.x1, this.y1),
      tout: "NA",
      tin: "NA",
      c: "M",
      t: "sharp"
    };
    let newUIEdge0 = {
      id: rectanglePath.nv,
      v: this.transformVector(newEdge0.v, this.ctm),
      tout: "NA",
      tin: "NA",
      c: "M",
      t: "sharp"
    };
    rectanglePath.nv++;
    let newEdge1 = {
      id: rectanglePath.nv,
      v: new Point(this.x2, this.y2),
      tout: "NA",
      tin: "NA",
      c: "L",
      t: "sharp"
    };
    let newUIEdge1 = {
      id: rectanglePath.nv,
      v: this.transformVector(newEdge1.v, this.ctm),
      tout: "NA",
      tin: "NA",
      c: "L",
      t: "sharp"
    };
    rectanglePath.nv++;
    rectanglePath.edges[0] = [newEdge0, newEdge1];
    rectanglePath.uiEdges[0] = [newUIEdge0, newUIEdge1];
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
    this.translateAxis(dx, dy);
    this.translateSbox(dx, dy);
  }
  rotateSbox(theta, center) {
    this.sbox.tl = this.sbox.tl.rotate(theta, center);
    this.sbox.tr = this.sbox.tr.rotate(theta, center);
    this.sbox.br = this.sbox.br.rotate(theta, center);
    this.sbox.bl = this.sbox.bl.rotate(theta, center);
  }
  rotate(theta, center) {
    let rotateMat = new DOMMatrix();
    rotateMat = rotateMat.translateSelf(center.x, center.y).rotateSelf(theta * 180 / Math.PI).translateSelf(-center.x, -center.y);
    this.tm = rotateMat.multiplySelf(this.tm);
    this.rotateSbox(theta, center);
  }
  transformVectorWithoutTranslation(vec, tm) {
    return new Point(
      tm.a * vec.x + tm.c * vec.y + 0,
      tm.b * vec.x + tm.d * vec.y + 0
    );
  }
  decomposeMatrix(matrix) {
    var px = this.transformVectorWithoutTranslation({ x: 0, y: 1 }, matrix);
    var py = this.transformVectorWithoutTranslation({ x: 1, y: 0 }, matrix);
    var skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90;
    var skewY = 180 / Math.PI * Math.atan2(py.y, py.x);
    return {
      translateX: matrix.e,
      translateY: matrix.f,
      scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
      scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
      skewX,
      skewY,
      rotation: skewX
      // rotation is the same as skew x
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
    switch (constraint) {
      case "bottommid": {
        this.sbox.bl = this.sbox.bl.a(changev);
        this.sbox.br = this.sbox.br.a(changev);
        break;
      }
      case "midright": {
        this.sbox.tr = this.sbox.tr.a(changeh);
        this.sbox.br = this.sbox.br.a(changeh);
        break;
      }
      case "midleft": {
        this.sbox.tl = this.sbox.tl.a(changeh);
        this.sbox.bl = this.sbox.bl.a(changeh);
        break;
      }
      case "topmid": {
        this.sbox.tl = this.sbox.tl.a(changev);
        this.sbox.tr = this.sbox.tr.a(changev);
        break;
      }
      case "bottomright": {
        this.sbox.bl = this.sbox.bl.a(changev);
        this.sbox.tr = this.sbox.tr.a(changeh);
        this.sbox.br = this.sbox.br.a(changeh).a(changev);
        break;
      }
      case "bottomleft": {
        this.sbox.tl = this.sbox.tl.a(changeh);
        this.sbox.br = this.sbox.br.a(changev);
        this.sbox.bl = this.sbox.bl.a(changeh).a(changev);
        break;
      }
      case "topright": {
        this.sbox.tl = this.sbox.tl.a(changev);
        this.sbox.br = this.sbox.br.a(changeh);
        this.sbox.tr = this.sbox.tr.a(changeh).a(changev);
        break;
      }
      case "topleft": {
        this.sbox.bl = this.sbox.bl.a(changeh);
        this.sbox.tr = this.sbox.tr.a(changev);
        this.sbox.tl = this.sbox.tl.a(changeh).a(changev);
        break;
      }
    }
    this.axis.x = (this.sbox.tl.x + this.sbox.br.x) / 2;
    this.axis.y = (this.sbox.tl.y + this.sbox.br.y) / 2;
  }
  scalePost(scalex, scaley, fixedPoint) {
    let scaleMat = new DOMMatrix().translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y);
    this.tm = scaleMat.multiplySelf(this.tm);
  }
  scale(scalex, scaley, fixedPoint) {
    this.tm = this.tm.translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y);
  }
  svg() {
    let line = document.createElementNS(svgNS, "line");
    line.setAttributeNS(null, "x1", `${this.x1}`);
    line.setAttributeNS(null, "y1", `${this.y1}`);
    line.setAttributeNS(null, "x2", `${this.x2}`);
    line.setAttributeNS(null, "y2", `${this.y2}`);
    return line;
  }
  isX() {
    return this.y1 === this.y2;
  }
  isY() {
    return this.x1 === this.x2;
  }
  length() {
    let p = new Point(this.x1, this.y1);
    let q = new Point(this.x2, this.y2);
    return q.s(p).length();
  }
  point(k) {
    let p = new Point(this.x1, this.y1);
    let q = new Point(this.x2, this.y2);
    return p.scale(1 - k).a(q.scale(k));
  }
  slope() {
    let p = new Point(this.x1, this.y1);
    let q = new Point(this.x2, this.y2);
    if (this.isX()) return 0;
    if (this.isY()) return "Infinity";
    return (q.y - p.y) / (q.x - p.x);
  }
  angle() {
    let p = new Point(this.x1, this.y1);
    let q = new Point(this.x2, this.y2);
    return q.s(p).angle();
  }
  onLine(z) {
    new Point(this.x1, this.y1);
    let q = new Point(this.x2, this.y2);
    return Math.abs(q.s(z).angle()) == Math.abs(this.angle());
  }
  pointAt(z, r) {
    let p = new Point(this.x1, this.y1);
    new Point(this.x2, this.y2);
    if (this.length() == 0) return p;
    let theta = this.angle();
    let w = new Point(r * Math.cos(theta), r * Math.sin(theta));
    return w.a(z);
  }
  unitPerp(z = this.point(0.5)) {
    let w = this.pointAt(z, 1);
    let shiftedw = w.s(z);
    return z.a(shiftedw.rotate(Math.PI / 2));
  }
  reflect(about) {
    let bboxOrigin = new Point(this.bbox.x + this.bbox.width / 2, this.bbox.y + this.bbox.height / 2);
    switch (about) {
      case "V": {
        this.scale(-1, 1, bboxOrigin);
        break;
      }
      case "H": {
        this.scale(1, -1, bboxOrigin);
        break;
      }
    }
    this.transformUIControls();
  }
}
class Grid {
  // x, y, width, height, dX, dY, dx, dy,  showSubdivisions, numberOfSubdivisions, border, hPath, HPath, vPath, VPath
  constructor({
    layer = "Layer-0",
    id = "grid",
    name = "Grid",
    parent = "Layer-0",
    tag = "grid",
    x = 0,
    //topleftcorner
    y = 0,
    width = 200,
    height = 200,
    dX = 50,
    dY = 50,
    dx = 0,
    dy = 0,
    showSubdivisions = true,
    nSubdivisions = 5,
    border = false,
    hPath = new Line({ x1: 0, y1: 10, x2: 200, y2: 10, stroke: "currentcolor", opacity: 0.5, strokewidth: 1, isLocked: true }),
    HPath = new Line({ x1: 0, y1: 0, x2: 200, y2: 0, stroke: "currentcolor", opacity: 0.7, strokewidth: 1, isLocked: true }),
    vPath = new Line({ x1: 10, y1: 0, x2: 10, y2: 200, stroke: "currentcolor", opacity: 0.5, strokewidth: 1, isLocked: true }),
    VPath = new Line({ x1: 0, y1: 0, x2: 0, y2: 200, stroke: "currentcolor", opacity: 0.7, strokewidth: 1, isLocked: true }),
    fill = "none",
    filltype = "solid",
    vectorEffect = "none",
    //none, non-scaling-size, non-rotation, fixed-position
    opacity = 1,
    isLocked = false,
    isVisible = true,
    bbox = null,
    sbox = {
      tl: new Point(),
      tr: new Point(),
      bl: new Point(),
      br: new Point()
    },
    tm = new DOMMatrix(),
    ctm = new DOMMatrix(),
    axis = new Point(),
    filter = "none",
    preserveAspect = true
  } = {}) {
    this.layer = layer, this.id = id, this.name = name, this.parent = parent, this.tag = tag, this.x = x, this.y = y, this.width = width, this.height = height, this.dX = dX, this.dY = dY, this.dx = dx, this.dy = dy, this.showSubdivisions = showSubdivisions, this.nSubdivisions = nSubdivisions, this.border = border, this.hPath = hPath, this.HPath = HPath, this.vPath = vPath, this.VPath = VPath, this.fill = fill, this.filltype = filltype, this.opacity = opacity, this.isLocked = isLocked, this.isVisible = isVisible, this.bbox = bbox, this.sbox = sbox, this.tm = tm, this.ctm = ctm, this.axis = axis, this.filter = filter, this.preserveAspect = preserveAspect, this.vectorEffect = vectorEffect;
  }
  gethShifts = () => {
    let hlist = [];
    let h = this.dX / this.nSubdivisions;
    let nx = Math.round(this.width / h);
    for (let i = 0; i <= nx; i++) {
      hlist = [...hlist, h * i + this.x];
    }
    return hlist;
  };
  getvShifts = () => {
    let vlist = [];
    let v = this.dY / this.nSubdivisions;
    let ny = Math.round(this.height / v);
    for (let i = 0; i <= ny; i++) {
      vlist = [...vlist, v * i + this.y];
    }
    return vlist;
  };
  getHShifts = () => {
    let Hlist = [];
    let nX = Math.round(this.width / this.dX);
    for (let i = 0; i <= nX; i++) {
      Hlist = [...Hlist, this.dX * i + this.x + this.dx];
    }
    return Hlist;
  };
  getVShifts = () => {
    let Vlist = [];
    let nY = Math.round(this.height / this.dY);
    for (let i = 0; i <= nY; i++) {
      Vlist = [...Vlist, this.dY * i + this.y + this.dy];
    }
    return Vlist;
  };
  draw() {
    let grd = `
        <g 
            transform='matrix(${this.tm.a} ${this.tm.b} ${this.tm.c} ${this.tm.d} ${this.tm.e} ${this.tm.f})'
        >`;
    let h = this.dX / this.nSubdivisions;
    if (this.showSubdivisions) {
      for (let i = 0; i < Math.round(this.width / h); i++) {
        grd += `<line x1='${h * i + this.x}' y1='${this.y}' x2='${h * i + this.x}' y2='${this.y + this.height}' stroke='${this.hPath.stroke}' stroke-width='${this.hPath.strokewidth}' stroke-dasharray='${this.hPath.strokedasharray}' opacity='${this.hPath.opacity}' stroke-linecap='${this.hPath.strokelinecap}' stroke-linejoin='${this.hPath.strokelinejoin}' stroke-miterlimit='${this.hPath.strokemiterlimit}' />`;
      }
      let v = this.dY / this.nSubdivisions;
      for (let i = 0; i < Math.round(this.height / v); i++) {
        grd += `<line x1='${this.x}' y1='${i * v + this.y}' x2='${this.x + this.width}' y2='${i * v + this.y}' stroke='${this.vPath.stroke}' stroke-width='${this.vPath.strokewidth}' stroke-dasharray='${this.vPath.strokedasharray}' opacity='${this.vPath.opacity}' stroke-linecap='${this.vPath.strokelinecap}' stroke-linejoin='${this.vPath.strokelinejoin}' stroke-miterlimit='${this.vPath.strokemiterlimit}'/>`;
      }
    }
    for (let i = 0; i < Math.round(this.width / this.dX); i++) {
      grd += `<line x1='${this.dX * i + this.x + this.dx}' y1='${this.y}' x2='${this.dX * i + this.x + this.dx}' y2='${this.y + this.height}' stroke='${this.HPath.stroke}' stroke-width='${this.HPath.strokewidth}' stroke-dasharray='${this.HPath.strokedasharray}' opacity='${this.HPath.opacity}' stroke-linecap='${this.HPath.strokelinecap}' stroke-linejoin='${this.HPath.strokelinejoin}' stroke-miterlimit='${this.HPath.strokemiterlimit}'/>`;
    }
    for (let i = 0; i < Math.round(this.height / this.dY); i++) {
      grd += `<line x1='${this.x}' y1='${this.dY * i + this.y + this.dy}' x2='${this.x + this.width}' y2='${this.dY * i + this.y + this.dy}' stroke='${this.VPath.stroke}' stroke-width='${this.VPath.strokewidth}' stroke-dasharray='${this.VPath.strokedasharray}' opacity='${this.VPath.opacity}' stroke-linecap='${this.VPath.strokelinecap}' stroke-linejoin='${this.VPath.strokelinejoin}' stroke-miterlimit='${this.VPath.strokemiterlimit}'/>`;
    }
    grd += `
        </g>`;
    return grd;
  }
  duplicate() {
    let grd = new Grid({ ...this });
    grd.tm = new DOMMatrix([
      this.tm.a,
      this.tm.b,
      this.tm.c,
      this.tm.d,
      this.tm.e,
      this.tm.f
    ]);
    grd.ctm = new DOMMatrix([
      this.ctm.a,
      this.ctm.b,
      this.ctm.c,
      this.ctm.d,
      this.ctm.e,
      this.ctm.f
    ]);
    grd.sbox = {
      tl: new Point(),
      tr: new Point(),
      br: new Point(),
      bl: new Point()
    };
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
    );
  }
  hydrate() {
    this.tm = new DOMMatrix([
      this.tm.a,
      this.tm.b,
      this.tm.c,
      this.tm.d,
      this.tm.e,
      this.tm.f
    ]);
    this.ctm = new DOMMatrix([
      this.ctm.a,
      this.ctm.b,
      this.ctm.c,
      this.ctm.d,
      this.ctm.e,
      this.ctm.f
    ]);
    this.axis = new Point(this.axis.x, this.axis.y);
    this.sbox = {
      tl: new Point(this.sbox.tl.x, this.sbox.tl.y),
      tr: new Point(this.sbox.tr.x, this.sbox.tr.y),
      bl: new Point(this.sbox.bl.x, this.sbox.bl.y),
      br: new Point(this.sbox.br.x, this.sbox.br.y)
    };
  }
  updateSelectionBox() {
    this.sbox.tl = this.transformVector({ x: this.bbox.x, y: this.bbox.y }, this.ctm);
    this.sbox.tr = this.transformVector({ x: this.bbox.x + this.bbox.width, y: this.bbox.y }, this.ctm);
    this.sbox.bl = this.transformVector({ x: this.bbox.x, y: this.bbox.y + this.bbox.height }, this.ctm);
    this.sbox.br = this.transformVector({ x: this.bbox.x + this.bbox.width, y: this.bbox.y + this.bbox.height }, this.ctm);
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
    let translateMat = new DOMMatrix().translateSelf(dx, dy);
    this.tm = translateMat.multiplySelf(this.tm);
    this.translateAxis(dx, dy);
    this.translateSbox(dx, dy);
  }
  rotateSbox(theta, center) {
    this.sbox.tl = this.sbox.tl.rotate(theta, center);
    this.sbox.tr = this.sbox.tr.rotate(theta, center);
    this.sbox.br = this.sbox.br.rotate(theta, center);
    this.sbox.bl = this.sbox.bl.rotate(theta, center);
  }
  rotate(theta, center) {
    let rotateMat = new DOMMatrix();
    rotateMat = rotateMat.translateSelf(center.x, center.y).rotateSelf(theta * 180 / Math.PI).translateSelf(-center.x, -center.y);
    this.tm = rotateMat.multiplySelf(this.tm);
    this.rotateSbox(theta, center);
  }
  transformVectorWithoutTranslation(vec, tm) {
    return new Point(
      tm.a * vec.x + tm.c * vec.y + 0,
      tm.b * vec.x + tm.d * vec.y + 0
    );
  }
  decomposeMatrix(matrix) {
    var px = this.transformVectorWithoutTranslation({ x: 0, y: 1 }, matrix);
    var py = this.transformVectorWithoutTranslation({ x: 1, y: 0 }, matrix);
    var skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90;
    var skewY = 180 / Math.PI * Math.atan2(py.y, py.x);
    return {
      translateX: matrix.e,
      translateY: matrix.f,
      scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
      scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
      skewX,
      skewY,
      rotation: skewX
      // rotation is the same as skew x
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
    switch (constraint) {
      case "bottommid": {
        this.sbox.bl = this.sbox.bl.a(changev);
        this.sbox.br = this.sbox.br.a(changev);
        break;
      }
      case "midright": {
        this.sbox.tr = this.sbox.tr.a(changeh);
        this.sbox.br = this.sbox.br.a(changeh);
        break;
      }
      case "midleft": {
        this.sbox.tl = this.sbox.tl.a(changeh);
        this.sbox.bl = this.sbox.bl.a(changeh);
        break;
      }
      case "topmid": {
        this.sbox.tl = this.sbox.tl.a(changev);
        this.sbox.tr = this.sbox.tr.a(changev);
        break;
      }
      case "bottomright": {
        this.sbox.bl = this.sbox.bl.a(changev);
        this.sbox.tr = this.sbox.tr.a(changeh);
        this.sbox.br = this.sbox.br.a(changeh).a(changev);
        break;
      }
      case "bottomleft": {
        this.sbox.tl = this.sbox.tl.a(changeh);
        this.sbox.br = this.sbox.br.a(changev);
        this.sbox.bl = this.sbox.bl.a(changeh).a(changev);
        break;
      }
      case "topright": {
        this.sbox.tl = this.sbox.tl.a(changev);
        this.sbox.br = this.sbox.br.a(changeh);
        this.sbox.tr = this.sbox.tr.a(changeh).a(changev);
        break;
      }
      case "topleft": {
        this.sbox.bl = this.sbox.bl.a(changeh);
        this.sbox.tr = this.sbox.tr.a(changev);
        this.sbox.tl = this.sbox.tl.a(changeh).a(changev);
        break;
      }
    }
    this.axis.x = (this.sbox.tl.x + this.sbox.br.x) / 2;
    this.axis.y = (this.sbox.tl.y + this.sbox.br.y) / 2;
  }
  scalePost(scalex, scaley, fixedPoint) {
    let scaleMat = new DOMMatrix().translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y);
    this.tm = scaleMat.multiplySelf(this.tm);
  }
  scale(scalex, scaley, fixedPoint) {
    this.tm = this.tm.translateSelf(fixedPoint.x, fixedPoint.y).scaleSelf(scalex, scaley).translateSelf(-fixedPoint.x, -fixedPoint.y);
  }
  reflect(about) {
    let bboxOrigin = new Point(this.bbox.x + this.bbox.width / 2, this.bbox.y + this.bbox.height / 2);
    switch (about) {
      case "V": {
        this.scale(-1, 1, bboxOrigin);
        break;
      }
      case "H": {
        this.scale(1, -1, bboxOrigin);
        break;
      }
    }
    this.transformUIControls();
  }
}
let problemset = {
  s: "",
  o: {
    "A": "",
    "B": "",
    "C": "",
    "D": ""
  },
  c: ""
};
const mensuration = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the perimeter if each box has length 10?</p>`;
      let svgStart = `<svg width="200" height="200" viewBox="-150 -150 300 300" >`;
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let grid = new Grid({ x: -150, y: -150, width: 300, height: 300 });
      let start = {
        x: -10 * randInt(10, 7),
        y: -10 * randInt(10, 7)
      };
      let end = {
        x: 10 * randInt(10, 7),
        y: 10 * randInt(10, 7)
      };
      let nh = (end.x - start.x) / 10;
      let nx = (end.y - start.y) / 10;
      let bottomy = [start.y];
      let topy = [end.y];
      bottomy.push(start.y + 10);
      topy.push(end.y - 10);
      for (let i = 2; i < nh; i++) {
        bottomy.push(10 * randInt(Math.min(bottomy[i - 1] / 10 + 5, end.y / 10), bottomy[i - 1] / 10 + 1));
        topy.push(10 * randInt(topy[i - 1] / 10, Math.max(topy[i - 1] / 10 - 5, start.y / 10)));
      }
      let points = [start];
      let lastpoint = start;
      for (let i = 1; i < nh; i++) {
        points.push({
          x: lastpoint.x,
          y: bottomy[i]
        });
        points.push({
          x: start.x + i * 10,
          y: bottomy[i]
        });
        lastpoint = points[points.length - 1];
      }
      points.push(end);
      lastpoint = end;
      for (let i = 1; i < nh; i++) {
        points.push({
          x: lastpoint.x,
          y: topy[i]
        });
        points.push({
          x: end.x - i * 10,
          y: topy[i]
        });
        lastpoint = points[points.length - 1];
      }
      let pstr = points[0].x + "," + points[0].y;
      for (let i = 1; i < points.length; i++) {
        pstr += " " + points[i].x + "," + points[i].y;
      }
      let polygon = `<polygon points='${pstr}' stroke="currentcolor" stroke-width="3" fill="none" />`;
      values[0] = 20 * (nh + nx);
      values[1] = 20 * (nh + nx - 1);
      values[2] = 20 * (nh + nx + 1);
      values[3] = 20 * (nh + nx + 2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + grid.draw() + polygon + svgEnd + divEnd;
      break;
    }
    case 1: {
      let divStart = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p>What is the area if each box has length 10?</p>`;
      let viewBox = {
        x: -150,
        y: -150,
        width: 300,
        height: 300
      };
      let svgEnd = "</svg>";
      let divEnd = "</div>";
      let grid = new Grid();
      let area = randInt(10, 1);
      let dirs = [{ x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];
      let dir = 0;
      let points = [new Point(-50, -50)];
      let newX = 0;
      let newY = 0;
      let newP = new Point();
      let min = new Point(-150, -150), max = new Point(150, 150);
      let fp = [];
      for (let i = 1; i < area; i++) {
        fp = [];
        dir = randInt(3, 0);
        newX = points[i - 1].x + dirs[dir].x * grid.dX;
        newY = points[i - 1].y + dirs[dir].y * grid.dY;
        if (newX < min.x) min.x = newX;
        if (newY < min.y) min.y = newY;
        if (newX > max.x) max.x = newX;
        if (newY > max.y) max.y = newY;
        newP = new Point(newX, newY);
        fp = points.filter((pt) => pt.isEqual(newP));
        if (fp.length === 0) {
          points.push(newP);
        } else {
          i--;
        }
      }
      grid.x = min.x;
      grid.y = min.y;
      grid.width = max.x - min.x;
      grid.height = max.y - min.y;
      let shaded = "";
      for (let i = 0; i < area; i++) {
        shaded += `<rect x=${points[i].x} y=${points[i].y} width=${grid.dX} height=${grid.dY} fill="currentcolor" />`;
      }
      viewBox.x = grid.x;
      viewBox.y = grid.y;
      viewBox.width = grid.width;
      viewBox.height = grid.height;
      let svgStart = `<svg width="200" height="200" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" >`;
      values[0] = area * 100;
      values[1] = (area + 1) * 100;
      values[2] = (area - 1) * 100;
      values[3] = (area + 2) * 100;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = divStart + svgStart + grid.draw() + shaded + svgEnd + divEnd;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  mensuration
};
