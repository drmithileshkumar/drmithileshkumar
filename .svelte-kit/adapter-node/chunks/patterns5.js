import { a as randSubset, r as randInt } from "./common2.js";
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
const patterns = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let p = [];
      for (let i = 0; i < 12; i++) {
        p.push({
          x: 125 * Math.cos(i * Math.PI / 6),
          y: 125 * Math.sin(i * Math.PI / 6)
        });
      }
      let circles = ``;
      let squares = ``;
      for (let i = 0; i < 6; i++) {
        circles += `<circle cx='${p[2 * i + 1].x}' cy='${p[2 * i + 1].y}' r='20' stroke='red' stroke-width='2' fill='white' />`;
        squares += `<rect x='${p[2 * i].x}' y='${p[2 * i].y}' width='40' height='40' stroke='rgba(0, 175, 255, 1)' stroke-width='2' fill='white' transform="rotate(${i * 60} ${p[2 * i].x} ${p[2 * i].y}) translate(-20 -20)"/>`;
      }
      let line = `<circle cx='0' cy='0' r='125' stroke='white' stroke-width='2' fill='none' />`;
      let circlenumbers = [];
      for (let i = 0; i < 6; i++) {
        circlenumbers.push(randInt(10, 1));
      }
      let squarenumbers = [];
      for (let i = 0; i < 6; i++) {
        squarenumbers.push(circlenumbers[(i + 5) % 6] * circlenumbers[i]);
      }
      let numbers = [];
      for (let i = 0; i < 6; i++) {
        numbers.push(squarenumbers[i]);
        numbers.push(circlenumbers[i]);
      }
      let misses = randSubset(12, 3);
      let texts = "";
      for (let i = 0; i < 12; i++) {
        if (!misses.includes(i)) {
          texts += `<text text-anchor="middle" x=${p[i].x} y=${p[i].y} fill="black" font-size="20" transform="translate(0 4)">${numbers[i]}</text>`;
        }
      }
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"><p style="margin:0;">Missing numbers are?</p><svg width="200" height="200" viewBox="-150 -150 300 300">` + line + circles + squares + texts + `</svg></div>`;
      values[0] = numbers[misses[0]] + ", " + numbers[misses[1]] + ", " + numbers[misses[2]];
      values[1] = numbers[misses[0]] + ", " + numbers[misses[1]] + ", " + (numbers[misses[2]] + 1);
      values[2] = numbers[misses[0]] + ", " + (numbers[misses[1]] + 1) + ", " + numbers[misses[2]];
      values[3] = numbers[misses[0]] + 1 + ", " + numbers[misses[1]] + ", " + numbers[misses[2]];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = "<span>" + values[i] + " </span>";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  patterns
};
