import { r as randInt } from "./common.js";
import { P as Point } from "./point.js";
class Path {
  constructor({
    fill = "rgba(0, 0, 0, 0)",
    fillrule = "evenodd",
    stroke = "rgba(0, 0, 0, 1)",
    strokewidth = 1,
    strokedasharray = "none",
    strokelinecap = "butt",
    //butt, round, square
    strokelinejoin = "miter",
    //arcs, bevel, miter, miter-clip, round
    strokemiterlimit = "4",
    //>=1
    d = "",
    opacity = 1,
    pathLength = 1,
    edges = [],
    // {id, tin, v, tout, t, c},
    //arc {id, tin, tout, c = A, r, 0, sf, laf, v} tin controls radius
    //line {id, tin, tout, v, c = L}
    //Q {id, tin, tout, v, c = Q}
    nv = 0,
    markerStart = "none",
    markerMid = "none",
    markerEnd = "none"
  } = {}) {
    this.fill = fill, this.fillrule = fillrule, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.strokelinecap = strokelinecap, this.strokelinejoin = strokelinejoin, this.strokemiterlimit = strokemiterlimit, this.opacity = opacity, this.pathLength = pathLength, this.d = d;
    this.edges = edges, this.nv = nv, this.markerStart = markerStart, this.markerEnd = markerEnd, this.markerMid = markerMid;
  }
  setD() {
    this.d = "";
    for (let i = 0; i < this.edges.length; i++) {
      for (let j = 0; j < this.edges[i].length; j++) {
        switch (this.edges[i][j].c) {
          case "M": {
            this.d += "M " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "m": {
            if (i > 0) {
              let last = this.edges[i - 1].length - 1;
              this.d += " m " + (this.edges[i][j].v.x - this.edges[i - 1][last].v.x) + "," + (this.edges[i][j].v.y - this.edges[i - 1][last].v.y);
            } else {
              this.d += "m " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            }
            break;
          }
          case "L": {
            this.d += " L " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "l": {
            this.d += " l " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
            break;
          }
          case "H": {
            this.d += " H " + this.edges[i][j].v.x;
            break;
          }
          case "h": {
            this.d += " h " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x);
            break;
          }
          case "V": {
            this.d += " V " + this.edges[i][j].v.y;
            break;
          }
          case "v": {
            this.d += " v " + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
            break;
          }
          case "Q": {
            this.d += " Q " + this.edges[i][j].tin.x + "," + this.edges[i][j].tin.y + " " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "q": {
            this.d += " q " + (this.edges[i][j].tin.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].tin.y - this.edges[i][j - 1].v.y) + " " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].v.y - this.edges[i][j - 1].v.x);
            break;
          }
          case "C": {
            this.d += " C " + this.edges[i][j - 1].tout.x + "," + this.edges[i][j - 1].tout.y + " " + this.edges[i][j].tin.x + "," + this.edges[i][j].tin.y + " " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "c": {
            this.d += " c " + (this.edges[i][j - 1].tout.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j - 1].tout.y - this.edges[i][j - 1].v.y) + " " + (this.edges[i][j].tin.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].tin.y - this.edges[i][j - 1].v.y) + " " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].v.y - this.edges[i][j - 1].v.x);
            break;
          }
          case "S": {
            this.d += " S " + this.edges[i][j].tin.x + "," + this.edges[i][j].tin.y + " " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "s": {
            this.d += " s " + (this.edges[i][j].tin.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].tin.y - this.edges[i][j - 1].v.y) + " " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].v.y - this.edges[i][j - 1].v.x);
            break;
          }
          case "T": {
            this.d += " T " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "t": {
            this.d += " t " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
            break;
          }
          case "A": {
            this.d += " A " + this.edges[i][j].r + " " + this.edges[i][j].r + " 0 " + this.edges[i][j].laf + " " + this.edges[i][j].sf + " " + this.edges[i][j].v.x + "," + this.edges[i][j].v.y;
            break;
          }
          case "a": {
            this.d += " a " + this.edges[i][j].r + " " + this.edges[i][j].r + " 0 " + this.edges[i][j].laf + " " + this.edges[i][j].sf + " " + (this.edges[i][j].v.x - this.edges[i][j - 1].v.x) + "," + (this.edges[i][j].v.y - this.edges[i][j - 1].v.y);
            break;
          }
        }
      }
      if (this.isClosed[i]) {
        this.d += " Z";
      }
    }
  }
  randomPath(viewBox = { x: 0, y: 0, width: 100, height: 100 }, command = "L", nv = 2, hasArrows = "none") {
    let vertices = [];
    for (let i = 0; i < nv; i++) {
      vertices.push(new Point(
        randInt(viewBox.x + (i + 1) * viewBox.width / nv, viewBox.x + i * viewBox.width / nv),
        randInt(viewBox.y + viewBox.height, viewBox.y)
      ));
    }
    let controls = [];
    if (command === "Q") {
      for (let i = 0; i < nv - 1; i++) {
        controls.push(new Point(
          randInt(viewBox.x + viewBox.width, viewBox.x),
          randInt(viewBox.y + viewBox.height, viewBox.y)
        ));
      }
      this.d = "M " + vertices[0].x + "," + vertices[0].y;
      for (let i = 1; i < nv; i++) {
        this.d += " Q " + controls[i - 1].x + "," + controls[i - 1].y;
        this.d += " " + vertices[i].x + "," + vertices[i].y;
      }
    }
    if (command === "C") {
      this.d = "M " + vertices[0].x + "," + vertices[0].y;
      for (let i = 0; i < nv - 1; i++) {
        controls.push(new Point(
          randInt(viewBox.x + viewBox.width, viewBox.x),
          randInt(viewBox.y + viewBox.height, viewBox.y)
        ));
        controls.push(new Point(
          randInt(viewBox.x + viewBox.width, viewBox.x),
          randInt(viewBox.y + viewBox.height, viewBox.y)
        ));
        this.d += " C " + controls[i].x + "," + controls[i].y + " " + controls[i + 1].x + "," + controls[i + 1].y;
        this.d += " " + vertices[i + 1].x + "," + vertices[i + 1].y;
      }
    }
    if (command === "L") {
      this.d = "M " + vertices[0].x + "," + vertices[0].y;
      for (let i = 1; i < nv; i++) {
        this.d += " L " + vertices[i].x + "," + vertices[i].y;
      }
    }
    return this.constructPath(hasArrows);
  }
  constructPath(hasArrows) {
    let pathstr = "";
    pathstr = `<path d='${this.d}' fill='${this.fill}' stroke="${this.stroke}" stroke-width="${this.strokewidth}" stroke-linecap="${this.strokelinecap}" stroke-linejoin="${this.strokelinejoin}" stroke-dasharray="${this.strokedasharray}" opacity="${this.opacity}"`;
    switch (hasArrows) {
      case "start": {
        pathstr += ` marker-start="url(#arrow)" />`;
        break;
      }
      case "mid": {
        pathstr += ` marker-mid="url(#arrow)" />`;
        break;
      }
      case "end": {
        pathstr += ` marker-end="url(#arrow)" />`;
        break;
      }
      case "both": {
        pathstr += ` marker-start="url(#arrow)" marker-end="url(#arrow)" />`;
        break;
      }
      case "all": {
        pathstr += ` marker-start="url(#arrow)" marker-mid="url(#arrow)" marker-end="url(#arrow)" />`;
        break;
      }
      default: {
        pathstr += `/>`;
        break;
      }
    }
    return pathstr;
  }
  cubic() {
  }
  circumcircle(A, B, C) {
    const EPSLON = 1e-6;
    const circle = {};
    const BA = B.s(A);
    const CA = C.s(A);
    const CB = C.s(B);
    const AB = B.a(A);
    const AC = C.a(A);
    const E = AB.dot(BA);
    const F = AC.dot(CA);
    const G = 2 * (BA.x * CB.y - BA.y * CB.x);
    let dx, dy;
    if (Math.abs(G) < EPSLON) {
      const minx = Math.min(A.x, B.x, C.x);
      const miny = Math.min(A.y, B.y, C.y);
      const maxx = Math.max(A.x, B.x, C.y);
      const maxy = Math.max(A.y, B.y, C.y);
      circle.x = (minx + maxx) / 2;
      circle.y = (miny + maxy) / 2;
      dx = circle.x - minx;
      dy = circle.y - miny;
    } else {
      const cx = (CA.y * E - BA.y * F) / G;
      const cy = (BA.x * F - CA.x * E) / G;
      circle.x = cx;
      circle.y = cy;
      dx = circle.x - A.x;
      dy = circle.y - A.y;
    }
    circle.r = Math.sqrt(dx * dx + dy * dy);
    return circle;
  }
  arc(subpath, index) {
    let circle = this.circumcircle(this.edges[subpath][index - 1].v, this.edges[subpath][index].tin, this.edges[subpath][index].v);
    this.edges[subpath][index].r = circle.r;
    let center = new Point(circle.x, circle.y);
    this.edges[subpath][index].center = center;
    let pointSide = this.edges[subpath][index].tin.onLine(this.edges[subpath][index - 1].v, this.edges[subpath][index].v) <= 0 ? 0 : 1;
    let centerSide = center.onLine(this.edges[subpath][index - 1].v, this.edges[subpath][index].v) <= 0 ? 0 : 1;
    if (pointSide === 0) {
      if (centerSide === 0) {
        this.edges[subpath][index].laf = 1;
        this.edges[subpath][index].sf = 0;
      } else {
        this.edges[subpath][index].laf = 0;
        this.edges[subpath][index].sf = 0;
      }
    } else {
      if (centerSide === 0) {
        this.edges[subpath][index].laf = 0;
        this.edges[subpath][index].sf = 1;
      } else {
        this.edges[subpath][index].laf = 1;
        this.edges[subpath][index].sf = 1;
      }
    }
    this.setD();
  }
  line() {
  }
  close(edgeId = this.edges[0][0].id) {
    if (!edgeId) edgeId = this.edges[0][this.edges[0].length - 1].id;
    let { subpath, index } = this.edgeIndex(edgeId);
    if (!this.isClosed[subpath]) {
      this.isClosed[subpath] = true;
      this.addVertex(edgeId, this.uiEdges[subpath][0].v, true);
      this.edges[subpath][this.edges[subpath].length - 1].tout = this.edges[subpath][0].tout;
      this.edges[subpath][0].tin = this.edges[subpath][this.edges[subpath].length - 1].tin;
      this.uiEdges[subpath][this.edges[subpath].length - 1].tout = this.uiEdges[subpath][0].tout;
      this.uiEdges[subpath][0].tin = this.uiEdges[subpath][this.edges[subpath].length - 1].tin;
      this.setD();
      this.nv++;
    } else {
      this.open(edgeId);
    }
  }
  open(edgeId) {
    let { subpath, index } = this.edgeIndex(edgeId);
    if (this.isClosed[subpath]) {
      this.isClosed[subpath] = false;
      this.deleteVertex(this.edges[subpath][this.edges[subpath].length - 1].id);
      this.setD();
    }
  }
  edgeIndex(edgeId) {
    let index = -1;
    let subpathI = -1;
    if (edgeId || edgeId === 0) {
      for (let subpath = 0; subpath < this.edges.length; subpath++) {
        for (let i = 0; i < this.edges[subpath].length; i++) {
          if (Number(edgeId) === this.edges[subpath][i].id) {
            subpathI = subpath;
            index = i;
          }
        }
      }
    }
    return { subpath: subpathI, index };
  }
}
export {
  Path as P
};
