import { r as randInt } from './common-CIVVH1Lv.js';
import { P as Point } from './point-CjbXhAco.js';

class Tree {
  constructor({
    nodes = {},
    //id: {id, value, parent, children, point, sibling}, id = root
    layers = [],
    r = 15,
    h = 45,
    fill = "none",
    stroke = "currentcolor",
    strokewidth = 2,
    strokedasharray = "none",
    opacity = 1,
    pathLength = 1
  } = {}) {
    this.nodes = nodes, this.r = r, this.h = h, this.fill = fill, this.stroke = stroke, this.strokewidth = strokewidth, this.strokedasharray = strokedasharray, this.opacity = opacity, this.pathLength = pathLength;
  }
  randomMultiplicationTree(primes) {
    let nsubtrees = randInt(4, 2);
    let nnodessubtrees = [];
    let leaves = [];
    for (let i = 0; i < nsubtrees; i++) {
      leaves.push([]);
      nnodessubtrees.push(randInt(3, 2));
    }
    let parents = [];
    let root = 1;
    let id = 0;
    this.nodes = {};
    for (let i = 0; i < nsubtrees; i++) {
      let parent = 1;
      for (let j = 0; j < nnodessubtrees[i]; j++) {
        let k = primes[randInt(primes.length - 1, 0)];
        leaves[i].push({
          id: "id-" + id,
          value: k,
          parent: "root",
          sibling: j > 0 ? "id-" + (id - 1) : "id-" + id,
          children: []
        });
        this.nodes["id-" + id] = {
          id: "id-" + id,
          value: k,
          parent: "root",
          sibling: j > 0 ? "id-" + (id - 1) : "id-" + id,
          children: []
        };
        parent *= k;
        id++;
      }
      parents.push({
        id: "id-" + id,
        value: parent,
        parent: "root",
        sibling: "id-" + id,
        children: []
      });
      this.nodes["id-" + id] = {
        id: "id-" + id,
        value: parent,
        parent: "root",
        sibling: "id-" + id,
        children: []
      };
      id++;
      root *= parent;
    }
    this.nodes["root"] = {
      id: "root",
      value: root,
      sibling: "root",
      parent: "root",
      children: []
    };
    this.nodes[parents[0].id].sibling = parents[0].id;
    for (let i = 1; i < parents.length; i++) {
      this.nodes[parents[i].id].sibling = parents[i - 1].id;
    }
    for (let i = 0; i < leaves.length; i++) {
      this.nodes[parents[i].id].children = leaves[i].map((leaf) => leaf.id);
    }
    this.nodes["root"].children = parents.map((p) => p.id);
  }
  computeLayers() {
    this.layers = [[["root"]]];
    let lastlayer = 0;
    let hasChildren = this.nodes[this.layers[lastlayer][0]].children.length;
    while (hasChildren > 0) {
      let newLayer = [];
      hasChildren = 0;
      for (let i = 0; i < this.layers[lastlayer].length; i++) {
        for (let j = 0; j < this.layers[lastlayer][i].length; j++) {
          newLayer = this.nodes[this.layers[lastlayer][i][j]].children ? [...newLayer, this.nodes[this.layers[lastlayer][i][j]].children] : newLayer;
          hasChildren += this.nodes[this.layers[lastlayer][i][j]].children.length;
        }
      }
      if (hasChildren > 0) {
        this.layers.push(newLayer);
        lastlayer++;
      }
    }
  }
  computePositions() {
    this.computeLayers();
    let shift = 0;
    for (let k = 0; k < this.layers.length; k++) {
      shift = 0;
      for (let j = 0; j < this.layers[k].length; j++) {
        for (let i = 0; i < this.layers[k][j].length; i++) {
          this.nodes[this.layers[k][j][i]].point = new Point(3 * this.r * (shift + i), -k * this.h);
        }
        shift += this.layers[k][j].length;
      }
    }
    for (let k = this.layers.length - 2; k >= 0; k--) {
      for (let j = 0; j < this.layers[k].length; j++) {
        for (let i = 0; i < this.layers[k][j].length; i++) {
          let children = this.nodes[this.layers[k][j][i]].children;
          if (children.length > 1) {
            this.nodes[this.layers[k][j][i]].point.x = (this.nodes[children[0]].point.x + this.nodes[children[children.length - 1]].point.x) / 2;
          }
        }
      }
    }
    let ns = Object.keys(this.nodes);
    for (let i = 0; i < ns.length; i++) {
      if (this.nodes[ns[i]].children.length === 0) {
        let sib = this.nodes[ns[i]].sibling;
        if (sib !== ns[i]) this.nodes[ns[i]].point.x = this.nodes[sib].point.x + 3 * this.r;
      }
    }
  }
  drawLineSubtree(id) {
    let lines = "";
    for (let i = 0; i < this.nodes[id].children.length; i++) {
      lines += `<path d="M ${this.nodes[id].point.x},${this.nodes[id].point.y} L ${this.nodes[this.nodes[id].children[i]].point.x},${this.nodes[this.nodes[id].children[i]].point.y}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`;
    }
    return lines;
  }
  draw(hide = false) {
    let lines = "";
    let circles = "";
    let values = "";
    let ns = Object.keys(this.nodes);
    for (let i = 0; i < ns.length; i++) {
      lines += this.drawLineSubtree(ns[i]);
      circles += `<circle cx="${this.nodes[ns[i]].point.x}" cy="${this.nodes[ns[i]].point.y}" r="${this.r}" fill="black" stroke="${this.stroke}" stroke-width="${this.strokewidth}" />`;
      if (!hide || ns[i] !== "root" && this.nodes["root"].children.indexOf(ns[i]) === -1)
        values += `<text text-anchor="middle" x="${this.nodes[ns[i]].point.x}" y="${this.nodes[ns[i]].point.y + this.r / 4}" fill="white">${this.nodes[ns[i]].value}</text>`;
    }
    return lines + circles + values;
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
const multiplication = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let tree = new Tree();
      tree.randomMultiplicationTree([2, 3]);
      tree.computePositions();
      let v = tree.nodes.root.value;
      values[0] = v;
      values[1] = v + 1;
      values[2] = v - 1;
      values[3] = v + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<svg style="width:100%;"  viewBox="-20 -120 500 150">` + tree.draw(true) + `</svg><span>This is a multiplication tree of which number?</span>`;
      break;
    }
    case 1: {
      let r1 = 5 * randInt(99, 0);
      let r2 = 5 * randInt(99, 0);
      values[0] = r1 * r2;
      values[1] = r1 * (r2 + 1);
      values[2] = (r1 + 1) * r2;
      values[3] = r1 * (r2 + 2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `<span style="display:flex;align-items:center;gap:0.5em;font-size: 1.5em;">${r1} &times; ${r2} = <span style="display:inline-block;width:1.3em;height:1.3em;border: 0.5px solid currentcolor;"></span</span>`;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};

export { multiplication };
//# sourceMappingURL=multiplication3-DoBZRLRo.js.map
