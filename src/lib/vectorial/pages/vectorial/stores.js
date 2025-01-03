
import { writable } from "svelte/store";
import { browser } from "$app/environment";
export const ns = 'http://www.w3.org/2000/svg';

export const screenCTM = writable(null);
export const circleCenter = writable(null);
export const circleMode = writable(false);
export const circledVertices = writable([]);
export const mirrorMode = writable(false);
export const mirrorVertex = writable(null);
export const showGuides = writable(false);
export const showControls = writable(false);
export const showVertices = writable(false);
export const selectionMode = writable(false);
export const selectedElement = writable(null);
export const selectedElements = writable([]);
export const activeElement = writable(null);
export const selectedVertices = writable(null);
export const selectedVertex = writable(null);
export const selectedControl0 = writable(null);
export const selectedControl1 = writable(null);
export const selectedId = writable(null);
export const selectedGroup = writable(null);
export const selectedGroupId = writable()
export const selectedSelector = writable(null);
export const colors = writable([]);
export const selectedColor= writable(null);
export const isLasso = writable(false);
export const isLassoGroup = writable(false);
export const lassoPath = writable(null);
export const lassoDom = writable(null);
export const lassoElements = writable([]);
export const isCrop = writable(false)
export const pathMode = writable(false);

export const currentLayer = writable(0);
export const boundingBox = writable();
export const clientHeight = writable(1000);
export const clientWidth = writable(1000);
export const PAN = writable(false);
export const panX = writable(0);
export const panY = writable(0);
export const Z = writable(1);
export const onSVG = writable(true); 
export const showBBoxControls = writable(false);
export const addingNodes = writable(false);
export const DRAWING = writable(null);
export const drawingSkip = writable(0);
export const drawingID = writable(null);
export const canvasBackground = writable("rgba(255, 255, 255, 1)");

let root = {id: 'Layer-0', name: 'Layer', elements: [] };
export const defs = writable({})
export const elements = writable({
    'Layers': []
})
export const elementsNode = writable({});

export const filters = writable({});

export const pointList = writable({});
export const pointOnPathList = writable({});
export const relations = writable({}); //pointId: [{id, func: '', params: {}}]



export const previousList = writable({});
export const objectCount = writable(1);
export const svg = writable();
export const appHistory = writable([
    
]);//[{id, {changes}}]
export const currentState = writable(0);//
export const lineargradients = writable({});//
export const radialgradients = writable({});
export const markers = writable({});
export const animations = writable({});
export const symbols = writable([]);
export const symbol = writable(null);
export const BBOX = writable(null);

export const uipointList = writable({});


export const hasArrow = writable(false);

const defaultDRAWING = '';
const initialDRAWING = browser ? window.localStorage.getItem('localDRAWING') ?? defaultDRAWING : defaultDRAWING;
export const localDRAWING = writable(initialDRAWING);
localDRAWING.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('localDRAWING', value);
    }
});