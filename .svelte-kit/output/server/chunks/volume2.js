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
const volume = (problemnumber) => {
  let N = 17;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let b = randInt(100, 1);
      let l = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * (l * b + b * h + h * l);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its total surface area? `;
      break;
    }
    case 1: {
      let b = randInt(100, 1);
      let l = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * h * (l + b);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its lateral surface area? `;
      break;
    }
    case 2: {
      let l = randInt(100, 1);
      let area = 2 * 3 * (l * l);
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cube of length ${l}cm, what is its total surface area? `;
      break;
    }
    case 3: {
      let l = randInt(100, 1);
      let area = 2 * 2 * l * l;
      values[0] = area;
      values[1] = area + 1;
      values[2] = area - 1;
      values[3] = area + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cube of length ${l}cm, what is its lateral surface area? `;
      break;
    }
    case 4: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * Math.PI * r * h;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cylinder of radius ${r}cm and height ${h}cm, what is its lateral surface area? `;
      break;
    }
    case 5: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * Math.PI * r * (r + h);
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cylinder of radius ${r}cm height ${h}cm, what is its total surface area? `;
      break;
    }
    case 6: {
      let b = randInt(100, 1);
      let l = randInt(100, 1);
      let h = randInt(100, 1);
      let volume2 = l * b * h;
      values[0] = volume2;
      values[1] = volume2 + 1;
      values[2] = volume2 - 1;
      values[3] = volume2 + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cuboid of length ${l}cm, breadth ${b}cm and height ${h}cm, what is its volume? `;
      break;
    }
    case 7: {
      let l = randInt(100, 1);
      let volume2 = l * l * l;
      values[0] = volume2;
      values[1] = volume2 + 1;
      values[2] = volume2 - 1;
      values[3] = volume2 + 2;
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cube of length ${l}cm, what is its volume? `;
      break;
    }
    case 8: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = 2 * Math.PI * r * r * h;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a cylinder of radius ${r}cm height and ${h}cm, what is its volume? `;
      break;
    }
    case 9: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = Math.PI * r * h;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a right circular cone of base radius ${r}cm and slant height ${h}cm, what is its curved surface area? `;
      break;
    }
    case 10: {
      let r = randInt(100, 1);
      let h = randInt(100, 1);
      let area = Math.PI * r * (r + h);
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a right circular cone of base radius ${r}cm and slant height ${h}cm, what is its total surface area? `;
      break;
    }
    case 11: {
      let r = randInt(100, 1);
      let area = 4 * Math.PI * r * r;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a sphere of base radius ${r}cm, what is its surface area? `;
      break;
    }
    case 12: {
      let r = randInt(100, 1);
      let area = 2 * Math.PI * r * r;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a hemisphere of base radius ${r}cm, what is its curved surface area? `;
      break;
    }
    case 13: {
      let r = randInt(20, 1);
      let area = 3 * Math.PI * r * r;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a hemisphere of base radius ${r}cm, what is its total surface area? `;
      break;
    }
    case 14: {
      let r = randInt(20, 1);
      let h = randInt(100, 1);
      let area = Math.PI * r * r * h / 3;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a right circular cone of base radius ${r}cm and slant height ${h}cm, what is its volume? `;
      break;
    }
    case 15: {
      let r = randInt(20, 1);
      let area = 4 * Math.PI * r * r * r / 3;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a sphere of base radius ${r}cm, what is its volume? `;
      break;
    }
    case 16: {
      let r = randInt(20, 1);
      let area = 2 * Math.PI * r * r * r / 3;
      values[0] = area.toFixed(2);
      values[1] = (area + 1).toFixed(2);
      values[2] = (area - 1).toFixed(2);
      values[3] = (area + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `Given a hemisphere of base radius ${r}cm, what is its volume? `;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  volume
};
