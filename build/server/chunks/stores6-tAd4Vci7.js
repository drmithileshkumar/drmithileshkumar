import { w as writable } from './index2-D2s-XE5r.js';

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

export { elementsNode as A, BBOX as B, onSVG as C, DRAWING as D, circledVertices as E, circleCenter as F, circleMode as G, mirrorVertex as H, pathMode as I, mirrorMode as J, isLassoGroup as K, colors as L, showVertices as M, drawingID as N, localGallery as O, drawingSkip as P, localDRAWING as Q, panY as R, panX as S, PAN as T, selectedElement as U, screenCTM as V, Z, selectedElements as a, selectedVertices as b, showControls as c, svg as d, elements as e, selectionMode as f, showBBoxControls as g, currentLayer as h, boundingBox as i, isLasso as j, appHistory as k, currentState as l, defs as m, clientWidth as n, objectCount as o, clientHeight as p, showGuides as q, addingNodes as r, selectedId as s, hasArrow as t, canvasBackground as u, lassoElements as v, activeElement as w, selectedControl1 as x, selectedControl0 as y, selectedVertex as z };
//# sourceMappingURL=stores6-tAd4Vci7.js.map
