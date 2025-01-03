import { w as writable } from "./index2.js";
let attempted = writable(false);
let saved = writable(true);
let newChapter = writable(false);
const workoutClass = writable(1);
const workoutChapter = writable("");
const workoutChapterN = writable(1);
const workoutTimes = writable(0);
const attemptedN = writable(0);
const correctN = writable(0);
const fastest = writable(1e4);
const slowest = writable(0);
export {
  workoutClass as a,
  attemptedN as b,
  correctN as c,
  attempted as d,
  saved as e,
  fastest as f,
  workoutChapterN as g,
  workoutChapter as h,
  newChapter as n,
  slowest as s,
  workoutTimes as w
};
