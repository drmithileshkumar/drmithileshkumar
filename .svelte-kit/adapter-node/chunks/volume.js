import { r as randInt } from "./common2.js";
import "./complex2.js";
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
const volume = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let width = randInt(100, 50);
      let height = randInt(width, 25);
      let depth = randInt(height, 20);
      let p = {
        x: randInt(-70, -90),
        y: randInt(-70, -90)
      };
      p.x -= p.x + width / 2;
      p.y -= p.y + height / 2;
      let rect = `<rect x='${p.x}' y='${p.y}' width='${width}' height='${height}' stroke="white" stroke-width='2' fill="none" />`;
      let topface = `<path d="M ${p.x},${p.y} L ${p.x - depth},${p.y - 10 - depth} L ${p.x - depth + width},${p.y - 10 - depth} L ${p.x + width},${p.y}" stroke="white" stroke-width='2' fill="none"/>`;
      let texts = "";
      let leftface = `<path d="M ${p.x},${p.y} L ${p.x - depth},${p.y - 10 - depth} L ${p.x - depth},${p.y - 10 - depth + height} L ${p.x},${p.y + height}" stroke="white" stroke-width='2' fill="none"/>`;
      texts += `<text x='${width / 2 + 4}' y='${0}' fill="rgba(0, 175, 255, 1)" font-size="14";>${height} m</text>`;
      texts += `<text text-anchor="middle" x='${0}' y='${height / 2 + 14}' fill="rgba(0, 175, 255, 1)" font-size="14";>${width} m</text>`;
      texts += `<text x='${p.x + width - depth / 2 + 4}' y='${p.y - depth / 2 - 7}' fill="rgba(0, 175, 255, 1)" font-size="14";>${depth} m</text>`;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the volume?</p><svg width="${width + depth + 60}" height="${height + depth + 60}" viewBox="-${width / 2 + depth + 10} -${height / 2 + depth + 10} ${width + depth + 60} ${height + depth + 60}">` + rect + leftface + topface + texts + `</svg></div>`;
      values[0] = width * height * depth;
      values[1] = width + height + depth;
      values[2] = width + height * depth;
      values[3] = width * height * depth + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + " m";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  volume
};
