import { w as writable } from "./index2.js";
const presentationMode = writable(false);
const annotationMode = writable(false);
const presentation = writable(null);
const currentSlide = writable(-2);
const autoScroll = writable(false);
const slideCounter = writable(0);
const overlay = writable(null);
export {
  presentation as a,
  autoScroll as b,
  currentSlide as c,
  annotationMode as d,
  overlay as o,
  presentationMode as p,
  slideCounter as s
};
