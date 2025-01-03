import { r as randInt, s as shuffle } from "./common.js";
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
const data = (problemnumber) => {
  let N = 2;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let r1 = randInt(100, 70);
      randInt(10, 1);
      let dataset = [r1];
      for (let i = 1; i < 7; i++) {
        dataset.push(randInt(dataset[i - 1] - 1, 70 - i * 10));
      }
      dataset = shuffle(dataset);
      let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      let table = `<div style="display:flex;align-items:center;justify-content:center;flex-direction:column;">
            <table style="font-size: 0.7em;line-height: 1em;border: 1px solid rgba(0, 175, 255, 1); border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td style="vertical-align:center;">Monday</td>
                    <td>${dataset[0]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Tuesday</td>
                    <td>${dataset[1]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Wednesday</td>
                    <td>${dataset[2]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Thursday</td>
                    <td>${dataset[3]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Friday</td>
                    <td>${dataset[4]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Saturday</td>
                    <td>${dataset[5]}</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>${dataset[6]}</td>
                </tr>
            </table>
            <p>Which day do we get the largest result?</p></div>
            `;
      let maxday = dataset.indexOf(r1);
      values[0] = days[maxday];
      values[1] = days[(maxday + 1) % 7];
      values[2] = days[(maxday + 2) % 7];
      values[3] = days[(maxday + 3) % 7];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = table;
      break;
    }
    case 1: {
      let r1 = randInt(100, 70);
      randInt(10, 1);
      let dataset = [r1];
      for (let i = 1; i < 7; i++) {
        dataset.push(randInt(dataset[i - 1] - 1, 70 - i * 10));
      }
      dataset = shuffle(dataset);
      let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      let table = `<div style="display:flex;align-items:center;justify-content:center;flex-direction:column;">
            <table style="font-size: 0.7em;line-height: 1em;border: 1px solid rgba(0, 175, 255, 1); border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td style="vertical-align:center;">Monday</td>
                    <td>${dataset[0]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Tuesday</td>
                    <td>${dataset[1]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Wednesday</td>
                    <td>${dataset[2]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Thursday</td>
                    <td>${dataset[3]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Friday</td>
                    <td>${dataset[4]}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(0, 175, 255, 1);">
                    <td>Saturday</td>
                    <td>${dataset[5]}</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>${dataset[6]}</td>
                </tr>
            </table>
            <p>Which day do we get the smallest result?</p></div>
            `;
      let min = Math.min(...dataset);
      let maxday = dataset.indexOf(min);
      values[0] = days[maxday];
      values[1] = days[(maxday + 1) % 7];
      values[2] = days[(maxday + 2) % 7];
      values[3] = days[(maxday + 3) % 7];
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = table;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  data
};
