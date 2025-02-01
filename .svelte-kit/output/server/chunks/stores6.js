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
const defaultGallery = "[]";
const initialGallery = defaultGallery;
const localGallery = writable(JSON.parse(initialGallery));
localGallery.subscribe((value) => {
});
export {
  circleMode as A,
  BBOX as B,
  mirrorVertex as C,
  DRAWING as D,
  mirrorMode as E,
  selectedVertices as F,
  showControls as G,
  selectedElement as H,
  selectionMode as I,
  screenCTM as J,
  canvasBackground as K,
  showBBoxControls as L,
  showGuides as M,
  localDRAWING as N,
  isLasso as O,
  PAN as P,
  isLassoGroup as Q,
  showVertices as R,
  colors as S,
  hasArrow as T,
  clientWidth as U,
  clientHeight as V,
  Z,
  drawingID as a,
  appHistory as b,
  drawingSkip as c,
  defs as d,
  elements as e,
  selectedId as f,
  selectedElements as g,
  currentLayer as h,
  activeElement as i,
  selectedControl1 as j,
  selectedControl0 as k,
  localGallery as l,
  selectedVertex as m,
  elementsNode as n,
  objectCount as o,
  boundingBox as p,
  addingNodes as q,
  currentState as r,
  svg as s,
  pathMode as t,
  panY as u,
  panX as v,
  onSVG as w,
  lassoElements as x,
  circleCenter as y,
  circledVertices as z
};
