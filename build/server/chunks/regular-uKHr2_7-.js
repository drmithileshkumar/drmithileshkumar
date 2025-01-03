import { P as Point } from './point-CjbXhAco.js';

class Regular {
  constructor({
    n,
    points = "",
    center = new Point(),
    r = 50,
    fill = "none",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.center = center, this.r = r, this.n = Math.floor(n), this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength, this.points = points;
    let p, q;
    for (let i = 0; i < this.n; i++) {
      p = new Point(this.r + this.center.x, this.center.y);
      q = p.rotate(2 * i * Math.PI / this.n, new Point(this.center.x, this.center.y));
      this.points = this.points + q.x.toFixed(2) + "," + q.y.toFixed(2) + " ";
    }
  }
  computePoints() {
    let pts = [];
    let p, q;
    for (let i = 0; i < this.n; i++) {
      p = new Point(this.r + this.center.x, this.center.y);
      q = p.rotate(2 * i * Math.PI / this.n, this.center);
      pts.push(q);
    }
    return pts;
  }
  setPoints() {
    let pts = this.computePoints();
    this.points = "";
    for (let i = 0; i < this.n; i++) {
      this.points = this.points + pts[i].x.toFixed(2) + "," + pts[i].y.toFixed(2) + " ";
    }
  }
  translateCenter(dx, dy) {
    let changePoint = new Point(dx, dy);
    this.center = this.center.a(changePoint);
  }
  draw(v = [], a = [], showAngles = false) {
    this.setPoints();
    return `<polygon points="${this.points}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`;
  }
  computeBBox(v = [], a = [], showAngles = false) {
    let elementString = this.draw(v, a, showAngles);
    const dummyDiv = document.createElement("div");
    dummyDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${elementString}</svg>`;
    const svgElement = dummyDiv.firstChild;
    document.body.appendChild(svgElement);
    const element = svgElement.firstChild;
    const bbox = element.getBBox();
    document.body.removeChild(svgElement);
    return bbox;
  }
}

export { Regular as R };
//# sourceMappingURL=regular-uKHr2_7-.js.map
