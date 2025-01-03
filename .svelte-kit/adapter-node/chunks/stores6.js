import { w as writable } from "./index2.js";
const screenCTM = writable(null);
const circleCenter = writable(null);
const circleMode = writable(false);
const circledVertices = writable([]);
const mirrorMode = writable(false);
const mirrorVertex = writable(null);
const showGuides = writable(false);
const showControls = writable(false);
const showVertices = writable(false);
const selectionMode = writable(false);
const selectedElement = writable(null);
const selectedElements = writable([]);
const activeElement = writable(null);
const selectedVertices = writable(null);
const selectedVertex = writable(null);
const selectedControl0 = writable(null);
const selectedControl1 = writable(null);
const selectedId = writable(null);
const colors = writable([]);
const isLasso = writable(false);
const isLassoGroup = writable(false);
const lassoElements = writable([]);
const pathMode = writable(false);
const currentLayer = writable(0);
const boundingBox = writable();
const clientHeight = writable(1e3);
const clientWidth = writable(1e3);
const PAN = writable(false);
const panX = writable(0);
const panY = writable(0);
const Z = writable(1);
const onSVG = writable(true);
const showBBoxControls = writable(false);
const addingNodes = writable(false);
const DRAWING = writable(null);
const drawingSkip = writable(0);
const drawingID = writable(null);
const canvasBackground = writable("rgba(255, 255, 255, 1)");
const defs = writable({});
const elements = writable({
  "Layers": []
});
const elementsNode = writable({});
const objectCount = writable(1);
const svg = writable();
const appHistory = writable([]);
const currentState = writable(0);
const BBOX = writable(null);
const hasArrow = writable(false);
const defaultDRAWING = "";
const initialDRAWING = defaultDRAWING;
const localDRAWING = writable(initialDRAWING);
localDRAWING.subscribe((value) => {
});
export {
  mirrorVertex as A,
  BBOX as B,
  mirrorMode as C,
  DRAWING as D,
  selectedVertices as E,
  showControls as F,
  selectedElement as G,
  selectionMode as H,
  screenCTM as I,
  canvasBackground as J,
  showBBoxControls as K,
  showGuides as L,
  localDRAWING as M,
  isLasso as N,
  isLassoGroup as O,
  PAN as P,
  showVertices as Q,
  colors as R,
  hasArrow as S,
  clientWidth as T,
  clientHeight as U,
  Z,
  appHistory as a,
  drawingID as b,
  drawingSkip as c,
  defs as d,
  elements as e,
  selectedId as f,
  selectedElements as g,
  currentLayer as h,
  activeElement as i,
  selectedControl1 as j,
  selectedControl0 as k,
  selectedVertex as l,
  elementsNode as m,
  boundingBox as n,
  objectCount as o,
  addingNodes as p,
  currentState as q,
  pathMode as r,
  svg as s,
  panY as t,
  panX as u,
  onSVG as v,
  lassoElements as w,
  circleCenter as x,
  circledVertices as y,
  circleMode as z
};
