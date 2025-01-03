import { r as randInt, p as pythagoreanTriplet } from "./common.js";
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
  let N = 5;
  problemnumber = problemnumber % N;
  let choices = ["A", "B", "C", "D"];
  let correctChoiceIndex = Math.floor(Math.random() * 4);
  problemset.c = choices[correctChoiceIndex];
  let values = [0, 0, 0, 0];
  switch (problemnumber) {
    case 0: {
      let h = randInt(10, 1);
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      let vol = Math.PI * h * (r1 * r1 + r2 * r2 + r1 * r2) / 3;
      values[0] = vol.toFixed(2);
      values[1] = (vol + 1).toFixed(2);
      values[2] = (vol - 1).toFixed(2);
      values[3] = (vol + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If height of a frustrum is ${h} and two radii are ${r1} and ${r2}, then its volume is `;
      break;
    }
    case 1: {
      let h = randInt(10, 1);
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      let l = Math.sqrt(h * h + (r1 - r2) * (r1 - r2));
      let vol = Math.PI * l * (r1 + r2);
      values[0] = vol.toFixed(2);
      values[1] = (vol + 1).toFixed(2);
      values[2] = (vol - 1).toFixed(2);
      values[3] = (vol + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If height of a frustrum is ${h} and two radii are ${r1} and ${r2}, then its curved surface area is `;
      break;
    }
    case 2: {
      let h = randInt(10, 1);
      let r1 = randInt(10, 1);
      let r2 = randInt(10, 1);
      let l = Math.sqrt(h * h + (r1 - r2) * (r1 - r2));
      let vol = Math.PI * l * (r1 + r2) + Math.PI * (r1 * r1 + r2 * r2);
      values[0] = vol.toFixed(2);
      values[1] = (vol + 1).toFixed(2);
      values[2] = (vol - 1).toFixed(2);
      values[3] = (vol + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      problemset.s = `If height of a frustrum is ${h} and two radii are ${r1} and ${r2}, then its total surface is `;
      break;
    }
    case 3: {
      let t = pythagoreanTriplet(10);
      let h = t.p;
      let W = 2 * t.b;
      let L = h + t.b;
      let hemi = Math.PI * W * W / 2;
      let l = Math.sqrt(W * W / 4 + h * h);
      let cone = Math.PI * W * l / 2;
      let vol = hemi + cone;
      values[0] = vol.toFixed(2);
      values[1] = (vol + 1).toFixed(2);
      values[2] = (vol - 1).toFixed(2);
      values[3] = (vol + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      let diagram = `
                <svg width="200" height="200" viewBox="0 0 500 500" 0><g class="Vectorial" transform="translate(0 0)"><defs><marker id="Arrow-VectorialApp68R70-3" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" stroke="currentcolor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker><marker id="Arrow-VectorialApp68R70-8" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" stroke="currentcolor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-VectorialApp68R70-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)">      <path id="Path-VectorialApp68R70-1" class="draggable" d="M 100,150 A 150.00348887235316 150.00348887235316 0 1 1 400,150 L 250,450 L 100,150 ZM 101.33330996831324,150.67705849775496 L 399.99998807907133,150.3437455194072" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="4.5" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 3.33331298828125 26.6666259765625)"></path>          <path id="Path-VectorialApp68R70-2" class="draggable" d="M 61.3333111604062,37.010405391144616 L 66.99999800324446,468.0104230639212" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-VectorialApp68R70-3)" marker-mid="none" marker-end="url(#Arrow-VectorialApp68R70-3)" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp68R70-4" class="draggable" d="M 61.99999815225607,25.677092740622356 L 251.99999248981493,24.67709277042468" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="6 4" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp68R70-5" class="draggable" d="M 61.99999815225607,25.677092740622356 L 251.99999248981493,24.67709277042468" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="6 4" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 6 453.3333435058594)"></path>          <path id="Path-VectorialApp68R70-6" class="draggable" d="M 39.999998807907104,143.34374572802346" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp68R70-7" class="draggable" d="M 115.99999654293066,163.34374513197707 L 391.6666143039877,163.34374513197707" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-VectorialApp68R70-8)" marker-mid="none" marker-end="url(#Arrow-VectorialApp68R70-8)" transform="matrix(1 0 0 1 0 0)"></path>           <text id="Text-VectorialApp68R70-9" class="draggable" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="600" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -204.00003051757812 4)">L</text>          <text id="Text-VectorialApp68R70-10" class="draggable" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="600" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -10.66668701171875 -91.33331298828125)">W</text></g></g> 
            `;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;">
            <p style="font-size:1em;">What is the total surface area if the width of the ice-cream cone is ${W}cm and height ${L}cm ?</p>
            ` + diagram + `</svg></div>`;
      problemset.s = svg;
      break;
    }
    case 4: {
      let W = randInt(100, 1);
      let L = randInt(100, W + 1);
      let cube = 6 * L * L;
      let base = Math.PI * W * W / 4;
      let hemi = 2 * base;
      let vol = hemi + cube - base;
      values[0] = vol.toFixed(2);
      values[1] = (vol + 1).toFixed(2);
      values[2] = (vol - 1).toFixed(2);
      values[3] = (vol + 2).toFixed(2);
      for (let i = 0; i < 4; i++) {
        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
      }
      let diagram = `
                <svg class="SVG Vectorial svelte-10rmvey" width="200" height="200" viewBox="28.338539123535156 -52.66664791107178 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0)"><defs><marker id="Arrow-VectorialApp69R23-10" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" stroke="currentcolor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-VectorialApp69R23-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)">      <path id="Path-VectorialApp69R23-1" class="draggable" d="M 325,150 L 125,150 L 125,350 L 325,350 L 440.01039338080903,258.33333580692596 L 439.01039341061136,71.99996733665563 L 325.010396808076,149.66669223705856 L 324.01045787303275,349.6667071084169" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 11.3333740234375 4.6666259765625)"></path>          <path id="Path-VectorialApp69R23-2" class="draggable" d="M 201.01040050356386,107.66665328542427 A 77.54307848346586 77.54307848346586 0 1 1 356.010395884204,102.66665343443589 C 345.3437091903773,118.86665295163826 315.0103971060992,132.66671357552065 284.0103980299712,133.66671354571832 C 253.01039895384315,134.666713515916 212.67708716758827,126.86665271321968 201.01040050356386,107.66665328542427 Z" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 12.6666259765625 5.3333740234375)"></path>          <path id="Path-VectorialApp69R23-3" class="draggable" d="M 124.01040279834257,148.66665206352917 L 201.6770874954139,95.99996662139989" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 11.99993896484375 6)"></path>          <path id="Path-VectorialApp69R23-4" class="draggable" d="M 335.0103965100528,154.66665188471524 L 244.34371220041174,154.99996486306298" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 115.3333740234375 -78.6666259765625)"></path>          <path id="Path-VectorialApp69R23-5" class="draggable" d="M 216.3437740700312,112.00002717971716 C 232.87708656558135,104.06666559974352 259.14373617339925,97.79996656775572 289.0103978809596,96.99996659159757 C 318.87705958851996,96.19996661543942 339.67704676160076,100.19997870326102 365.67708260783303,108.66665325562195" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="6 4" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp69R23-7" class="draggable" d="M 212,113.33334012826259 L 212,28.333281626305507" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="6 4" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp69R23-8" class="draggable" d="M 212,113.33334012826259 L 212,28.333281626305507" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="6 4" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 155.33331298828125 -2)"></path>          <path id="Path-VectorialApp69R23-9" class="draggable" d="M 223.3333126505222,28 L 357.0103958544017,28" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-VectorialApp69R23-10)" marker-mid="none" marker-end="url(#Arrow-VectorialApp69R23-10)" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp69R23-11" class="draggable" d="M 115.34371604491122,167.00002554058955 L 116.3437160151089,345.0000202357763" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-VectorialApp69R23-10)" marker-mid="none" marker-end="url(#Arrow-VectorialApp69R23-10)" transform="matrix(1 0 0 1 8.66668701171875 0)"></path>          <path id="Path-VectorialApp69R23-12" class="draggable" d="M 147.34377612639145,365.9999585747731 L 327.01039674847135,365.6665845612709" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-VectorialApp69R23-10)" marker-mid="none" marker-end="url(#Arrow-VectorialApp69R23-10)" transform="matrix(1 0 0 1 -0.6666259765625 0)"></path>          <path id="Path-VectorialApp69R23-13" class="draggable" d="M 347.34370913077265,358.6666458050416 L 449.0103320774337,276.33333527048427" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="url(#Arrow-VectorialApp69R23-10)" marker-mid="none" marker-end="url(#Arrow-VectorialApp69R23-10)" transform="matrix(1 0 0 1 0.6666259765625 0.6666259765625)"></path>           <text id="Text-VectorialApp69R23-14" class="draggable" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="600" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -144.66668701171875 18.6666259765625)">L</text>          <text id="Text-VectorialApp69R23-15" class="draggable" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="600" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -10.66668701171875 134)">L</text>          <text id="Text-VectorialApp69R23-16" class="draggable" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="600" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 153.333251953125 85.99993896484375)">L</text>          <text id="Text-VectorialApp69R23-17" class="draggable" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="600" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 32.6666259765625 -225.33331298828125)">W</text>   </g></g></svg>
            `;
      let svg = `<div style="margin:auto;display:flex;justify-content:center;align-items:center; flex-direction:column;">
            <p style="font-size:1em;">What is the total surface area if the width of the spherical dome is ${W}cm and sides of the cube is ${L}cm ?</p>
            ` + diagram + `</svg></div>`;
      problemset.s = svg;
      break;
    }
  }
  problemset = problemset;
  return problemset;
};
export {
  volume
};
