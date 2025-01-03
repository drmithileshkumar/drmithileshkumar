import { r as randInt } from "./common.js";
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
const area = (problemnumber) => {
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
      let p = {
        x: randInt(-70, -100),
        y: randInt(-70, -100)
      };
      p.x -= p.x + width / 2;
      p.y -= p.y + height / 2;
      let rect = `<rect x='${p.x}' y='${p.y}' width='${width}' height='${height}' stroke="white" stroke-width='2' fill="none" />`;
      let texts = "";
      texts += `<text x='${width / 2 + 4}' y='${0}' fill="rgba(0, 175, 255, 1)" font-size="14";>${height} m</text>`;
      texts += `<text text-anchor="middle" x='${0}' y='${-height / 2 - 6}' fill="rgba(0, 175, 255, 1)" font-size="14";>${width} m</text>`;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;"><p>What is the area?</p><svg width="150" height="150" viewBox="-75 -75 150 150">` + rect + texts + `</svg></div>`;
      values[0] = width * height;
      values[1] = width + height;
      values[2] = width * height + 2;
      values[3] = 2 * (width + height);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i] + " \\(~m^2\\)";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  area
};
