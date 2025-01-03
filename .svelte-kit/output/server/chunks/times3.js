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
const times = (problemnumber) => {
  let N = 1;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let circle = `<circle cx='0' cy='0' r='45' stroke='currentcolor' stroke-width='2' fill='none' />`;
      let texts = "";
      for (let i = 1; i <= 12; i++) {
        texts += `<text text-anchor="middle" x=${38 * Math.cos(Math.PI / 6 * i - Math.PI / 2)} y=${38 * Math.sin(Math.PI / 6 * i - Math.PI / 2)} fill="rgba(0, 175, 255, 1)" font-size="14" transform="translate(0 4)">${i}</text>`;
      }
      let sec = 5 * randInt(11, 0);
      let min = 5 * randInt(11, 0);
      let hr = randInt(12, 1);
      let thetas = sec * Math.PI / 30;
      let thetam = (min + thetas / 60) * Math.PI / 30;
      let thetah = (hr + (min + thetas / 60) / 60) * Math.PI / 6;
      let ps = {
        x: 35 * Math.cos(thetas - Math.PI / 2),
        y: 35 * Math.sin(thetas - Math.PI / 2)
      };
      let pm = {
        x: 38 * Math.cos(thetam - Math.PI / 2),
        y: 38 * Math.sin(thetam - Math.PI / 2)
      };
      let ph = {
        x: 25 * Math.cos(thetah - Math.PI / 2),
        y: 25 * Math.sin(thetah - Math.PI / 2)
      };
      let secondHand = `<line x1='0' y1='0' x2='${ps.x}' y2='${ps.y}' stroke="rgba(0, 255, 175, 1)" stroke-width="1" fill="none" />`;
      let minuteHand = `<line x1='0' y1='0' x2='${pm.x}' y2='${pm.y}' stroke="currentcolor" stroke-width="2" fill="none" />`;
      let hourHand = `<line x1='0' y1='0' x2='${ph.x}' y2='${ph.y}' stroke-linecap="round" stroke="red" stroke-width="4" fill="none" />`;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center;"><svg width="100" height="100" viewBox="-50 -50 100 100">` + circle + texts + secondHand + minuteHand + hourHand + `</svg></div>`;
      values[0] = hr + " : " + min + " : " + sec;
      values[1] = hr + " : " + min + " : " + (sec + 5);
      values[2] = hr + " : " + min + " : " + (sec - 5);
      values[3] = hr + " : " + hr + " : " + (sec + 5);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = '<span style="color:red">' + values[i] + " </span>";
      }
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  times
};
