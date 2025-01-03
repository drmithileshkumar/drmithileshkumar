import { a as subscribe, c as null_to_empty } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from './ssr2-q3O0l93f.js';
import { S as Select } from './Select-DiDL_dlX.js';
import { d as chapters, e as sections, c as currentSlide, p as presentationMode, s as slideCounter, a as presentation, o as overlay, b as autoScroll, f as selectedSection, g as selectedChapter } from './stores4-DLB_GG7W.js';
import './client-k3u4ChD_.js';
import { C as CanvasBar, a as Canvas, P as Presenter } from './Presenter-BXGZuZDi.js';
import './index2-BZnI6xu7.js';
import './exports-kR70XCWV.js';

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  duplicate() {
    return new Point(this.x, this.y);
  }
  length(origin = new Point()) {
    return Math.sqrt((this.x - origin.x) * (this.x - origin.x) + (this.y - origin.y) * (this.y - origin.y));
  }
  sqlength() {
    return this.x * this.x + this.y * this.y;
  }
  angle(origin = new Point()) {
    let theta = Math.atan(Math.abs((this.y - origin.y) / (this.x - origin.x)));
    if (this.x >= origin.x && this.y >= origin.y) {
      theta = theta;
    }
    if (this.x < origin.x && this.y >= origin.y) {
      theta = Math.PI - theta;
    }
    if (this.x < origin.x && this.y < origin.y) {
      theta = Math.PI + theta;
    }
    if (this.x >= origin.x && this.y < origin.y) {
      theta = 2 * Math.PI - theta;
    }
    return theta;
  }
  isZero() {
    return this.x == 0 && this.y == 0;
  }
  scale(l) {
    return new Point(this.x * l, this.y * l);
  }
  a(q) {
    return new Point(this.x + q.x, this.y + q.y);
  }
  s(q) {
    return new Point(this.x - q.x, this.y - q.y);
  }
  m(q) {
    return new Point(this.x * q.x - this.y * q.y, this.x * q.y + this.y * q.x);
  }
  d(q) {
    if (q.isZero()) return "Infinity";
    else {
      let r = new Point(this.x * q.x + this.y * q.y, -this.x * q.y + this.y * q.x);
      return r.scale(r.sqlength());
    }
  }
  dot(q) {
    return this.x * q.x + this.y * q.y;
  }
  adot(q) {
    return this.x * q.x - this.y * q.y;
  }
  onLine(p1, p2) {
    return (p2.y - p1.y) * (this.x - p1.x) - (p2.x - p1.x) * (this.y - p1.y);
  }
  reflect(q) {
    let r = this.s(q);
    return q.a(r.scale(-1));
  }
  reflectControl(q, r) {
    let t = this.s(q);
    if (t.isZero()) return r;
    let u = t.scale(-1 / t.length());
    let t1 = r.s(q);
    if (t1.isZero()) return r;
    return q.a(u.scale(t1.length()));
  }
  rotate(theta, origin = new Point()) {
    let theta0 = this.angle(origin);
    let r = this.length(origin);
    let np = origin.a(new Point(r * Math.cos(theta + theta0), r * Math.sin(theta + theta0)));
    return np;
  }
  translate(dx, dy) {
    return new Point(this.x + dx, this.y + dy);
  }
  scalet(lx = 1, ly = 1) {
    return new Point(lx * this.x, ly * this.y);
  }
  transform(tm) {
    let x = this.x * tm.a + this.y * tm.b + tm.e;
    let y = this.x * tm.c + this.y * tm.d + tm.f;
    return new Point(x, y);
  }
  project(target) {
    let sql = target.sqlength();
    let dotp = this.dot(target);
    return target.scale(dotp / sql);
  }
  anglePair(p1, p2) {
    let angle2 = p2.angle(this);
    let angle1 = p1.angle(this);
    return angle2 - angle1;
  }
  signLine(p1, p2) {
    return (this.x - p1.x) * (p2.y - p1.y) - (this.y - p1.y) * (p2.x - p1.x);
  }
  perpendicularDistance(p1, p2) {
    let area = 0.5 * (p1.x * (this.y - p2.y) + this.x * (p2.y - p1.y) + p2.x * (p1.y - this.y));
    let d = p1.length(p2);
    return 2 * Math.abs(area) / d;
  }
  orientation(q, r) {
    let val = (q.y - this.y) * (r.x - q.x) - (q.x - this.x) * (r.y - q.y);
    if (val === 0) return 0;
    return val > 0 ? 1 : 2;
  }
  onSegment(p, q) {
    return this.x <= Math.max(p.x, q.x) && this.x >= Math.min(p.x, q.x) && this.y <= Math.max(p.y, q.y) && this.y >= Math.min(p.y, q.y);
  }
}
const css$1 = {
  code: ".teacher.svelte-e6uf7i{background:transparent;width:40px;height:40px;border-radius:50%;position:absolute;top:50%;left:50%;z-index:10}img.svelte-e6uf7i{width:40px;height:40px;border-radius:50%}",
  map: `{"version":3,"file":"Teacher.svelte","sources":["Teacher.svelte"],"sourcesContent":["<script>\\r\\n\\timport { onMount } from \\"svelte\\";\\r\\n    import { Point } from \\"$lib/utils/common/point\\";\\r\\n\\r\\n\\tlet teacher, person;\\r\\n    // let ctm = {\\r\\n    //     a: 1,\\r\\n    //     d: 1,\\r\\n    //     c: 0, \\r\\n    //     b: 0,\\r\\n    //     e: 0,\\r\\n    //     f: 0\\r\\n    // };\\r\\n    onMount(() => {\\r\\n        // setTimeout(() => {\\r\\n        //     ctm = teacher?.getScreenCTM().inverse();\\r\\n        // }, 0)\\r\\n        \\r\\n    })\\r\\n    // $: if (teacher) ctm = teacher.getScreenCTM().inverse();\\r\\n\\texport function makeDraggable(node) {\\r\\n\\t\\tnode.addEventListener(\\r\\n\\t\\t\\t'touchstart',\\r\\n\\t\\t\\tfunction (e) {\\r\\n\\t\\t\\t\\te.preventDefault();\\r\\n\\t\\t\\t},\\r\\n\\t\\t\\tfalse\\r\\n\\t\\t);\\r\\n\\t\\tnode.addEventListener('pointerdown', startDrag, false);\\r\\n\\t\\tnode.addEventListener('pointerup', endDrag, false);\\r\\n\\t\\tnode.addEventListener('pointercancel', endDrag, false);\\r\\n\\t\\tnode.addEventListener('pointermove', drag, false);\\r\\n\\t\\tlet dragOffset;\\r\\n\\t\\tlet isDragging = false;\\r\\n\\t\\t\\r\\n\\t\\tfunction getPointerPosition(evt) {\\r\\n\\t\\t\\tlet clientx = evt.clientX;\\r\\n\\t\\t\\tlet clienty = evt.clientY;\\r\\n\\t\\t\\treturn {\\r\\n\\t\\t\\t\\tx: clientx,\\r\\n\\t\\t\\t\\ty: clienty\\r\\n\\t\\t\\t};\\r\\n\\t\\t}\\r\\n\\t\\tfunction startDrag(evt) {\\r\\n\\t\\t\\tlet coord = getPointerPosition(evt);\\r\\n            dragOffset = {\\r\\n                x: coord.x - parseInt(window.getComputedStyle(node).left),\\r\\n                y: coord.y - parseInt(window.getComputedStyle(node).top)\\r\\n            }\\r\\n            isDragging = true;\\r\\n\\t\\t}\\r\\n\\t\\tfunction drag(evt) {\\r\\n            if (isDragging) {\\r\\n                let coord = getPointerPosition(evt);\\r\\n\\t\\t\\t    let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);\\r\\n                //update\\r\\n                updatePosition(change);\\r\\n            }\\r\\n            \\r\\n\\t\\t}\\r\\n\\t\\tfunction endDrag(evt) {\\r\\n\\t\\t\\tisDragging = false;\\t\\r\\n\\t\\t}\\r\\n\\t}\\r\\n    const updatePosition = (change) => {\\r\\n        teacher.style.left = change.x + 'px';\\r\\n        teacher.style.top = change.y + 'px';\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"teacher noMenu\\" bind:this={teacher} use:makeDraggable>\\r\\n    <img class=\\"noMenu\\" src=\\"/favicon.png\\" alt=\\"\\">\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.teacher {\\r\\n\\t\\tbackground: transparent;\\r\\n\\t\\twidth: 40px;\\r\\n\\t\\theight: 40px;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\tposition: absolute;\\r\\n        top: 50%;\\r\\n        left: 50%;\\r\\n        z-index: 10;\\r\\n\\t}\\r\\n    img {\\r\\n        width: 40px;\\r\\n        height: 40px;\\r\\n        border-radius: 50%;\\r\\n        /* box-shadow: 0 0 3px gray; */\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2EC,sBAAS,CACR,UAAU,CAAE,WAAW,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,QAAQ,CACZ,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,OAAO,CAAE,EAChB,CACG,iBAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAEnB"}`
};
const Teacher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teacher;
  function makeDraggable(node) {
    node.addEventListener(
      "touchstart",
      function(e) {
        e.preventDefault();
      },
      false
    );
    node.addEventListener("pointerdown", startDrag, false);
    node.addEventListener("pointerup", endDrag, false);
    node.addEventListener("pointercancel", endDrag, false);
    node.addEventListener("pointermove", drag, false);
    let dragOffset;
    let isDragging = false;
    function getPointerPosition(evt) {
      let clientx = evt.clientX;
      let clienty = evt.clientY;
      return { x: clientx, y: clienty };
    }
    function startDrag(evt) {
      let coord = getPointerPosition(evt);
      dragOffset = {
        x: coord.x - parseInt(window.getComputedStyle(node).left),
        y: coord.y - parseInt(window.getComputedStyle(node).top)
      };
      isDragging = true;
    }
    function drag(evt) {
      if (isDragging) {
        let coord = getPointerPosition(evt);
        let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
        updatePosition(change);
      }
    }
    function endDrag(evt) {
      isDragging = false;
    }
  }
  const updatePosition = (change) => {
    teacher.style.left = change.x + "px";
    teacher.style.top = change.y + "px";
  };
  if ($$props.makeDraggable === void 0 && $$bindings.makeDraggable && makeDraggable !== void 0) $$bindings.makeDraggable(makeDraggable);
  $$result.css.add(css$1);
  return `<div class="teacher noMenu svelte-e6uf7i"${add_attribute("this", teacher, 0)} data-svelte-h="svelte-1g2d600"><img class="noMenu svelte-e6uf7i" src="/favicon.png" alt=""> </div>`;
});
const css = {
  code: "nav.svelte-v6pok5{display:grid;grid-template-columns:auto 1fr;max-width:600px}.maths.svelte-v6pok5{margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-v6pok5{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-v6pok5{display:grid;grid-template-columns:1em 1fr 1em;position:relative;height:600px}aside.svelte-v6pok5{background-color:rgba(230, 228, 228, 0.25);cursor:pointer;width:1em}.overlay.svelte-v6pok5{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-v6pok5::-webkit-scrollbar{width:0;height:0}.presenter.svelte-v6pok5{position:absolute;right:35px;top:0;z-index:10}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n\\t// @ts-nocheck\\r\\n\\r\\n\\timport Select from '$lib/ui/Select.svelte';\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport { browser } from '$app/environment';\\r\\n\\timport { afterUpdate, beforeUpdate, onMount, tick } from 'svelte';\\r\\n\\timport CanvasBar from '$lib/canvas/CanvasBar.svelte';\\r\\n\\timport Canvas from '$lib/canvas/Canvas.svelte';\\r\\n\\timport { ripple } from '$lib/ui/ripple';\\r\\n\\timport Presenter from '$lib/canvas/Presenter.svelte';\\r\\n\\timport Teacher from '$lib/canvas/Teacher.svelte';\\r\\n\\tlet checkbox;\\r\\n\\tconst makeSmallLetter = (str) => {\\r\\n\\t\\tif (str.length <= 0) return str;\\r\\n\\t\\treturn str[0].toLowerCase() + str.slice(1);\\r\\n\\t};\\r\\n\\tconst chapterSelected = (event) => {\\r\\n\\t\\t$selectedSection = sections[$selectedChapter][0];\\r\\n\\t};\\r\\n\\tconst sectionSelected = (event) => {\\r\\n\\t\\tgoto(\\r\\n\\t\\t\\t\`/notes/maths/\${encodeURIComponent($selectedChapter)}/\${encodeURIComponent($selectedSection)}\`\\r\\n\\t\\t);\\r\\n\\t\\t// console.log($page.url.pathname.split('/').map(item => decodeURIComponent(item)))\\r\\n\\t};\\r\\n\\tlet W, H;\\r\\n\\tbeforeUpdate(() => {\\r\\n\\t\\tif ($presentation) {\\r\\n\\t\\t\\t// autoscroll = presentation && (presentation.offsetHeight + presentation.scrollTop) > (presentation.scrollHeight - 40);\\r\\n\\t\\t\\t$autoScroll = true;\\r\\n\\t\\t}\\r\\n\\t});\\r\\n\\tafterUpdate(async () => {\\r\\n\\t\\tif ($autoScroll)\\r\\n\\t\\t\\tsetTimeout(async () => {\\r\\n\\t\\t\\t\\tMathJax.typeset();\\r\\n\\t\\t\\t\\tif ($presentation)\\r\\n\\t\\t\\t\\t\\t$presentation.scrollTo({\\r\\n\\t\\t\\t\\t\\t\\ttop: $presentation.scrollHeight,\\r\\n\\t\\t\\t\\t\\t\\tleft: 0,\\r\\n\\t\\t\\t\\t\\t\\tbehaviour: 'smooth'\\r\\n\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\tif ($overlay && $presentation)\\r\\n\\t\\t\\t\\t\\t$overlay.scrollTo({\\r\\n\\t\\t\\t\\t\\t\\ttop: $presentation.scrollHeight,\\r\\n\\t\\t\\t\\t\\t\\tleft: 0,\\r\\n\\t\\t\\t\\t\\t\\tbehaviour: 'smooth'\\r\\n\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t}, 0);\\r\\n\\t});\\r\\n\\tconst back = () => {\\r\\n\\t\\tif ($currentSlide >= 0) $currentSlide--;\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\tMathJax.typeset();\\r\\n\\t\\t}, 0);\\r\\n\\t};\\r\\n\\tconst next = () => {\\r\\n\\t\\tif ($currentSlide < $slideCounter - 1) {\\r\\n\\t\\t\\t$currentSlide++;\\r\\n\\t\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\t\\tMathJax.typeset();\\r\\n\\t\\t\\t}, 0);\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\tconst preventD = (evt) => {\\r\\n\\t\\tevt.preventDefault();\\r\\n\\t};\\r\\n\\tconst noContextMenu = () => {\\r\\n\\t\\tif ($presentationMode) {\\r\\n\\t\\t\\tdocument.addEventListener('contextmenu', preventD, false);\\r\\n\\t\\t\\tdocument.body.classList.add('noMenu');\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tdocument.removeEventListener('contextmenu', preventD);\\r\\n\\t\\t\\tdocument.body.classList.remove('noMenu');\\r\\n\\t\\t}\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t};\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<!-- <script defer src=\\"https://polyfill.io/v3/polyfill.min.js?features=es6\\"><\/script>\\r\\n        <script type=\\"text/javascript\\" id=\\"MathJax-script\\" async src=\\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js\\"><\/script> -->\\r\\n</svelte:head>\\r\\n{#if !$presentationMode}\\r\\n\\t<span class=\\"noMenu\\" bind:this={$overlay} />\\r\\n{/if}\\r\\n<div class=\\"maths {$presentationMode ? 'noMenu' : ''}\\">\\r\\n\\t<div class=\\"presentationMode\\">\\r\\n\\t\\t<label style=\\"display:flex;align-items:center;\\">\\r\\n\\t\\t\\t<input\\r\\n\\t\\t\\t\\tstyle=\\"display:none;\\"\\r\\n\\t\\t\\t\\tbind:this={checkbox}\\r\\n\\t\\t\\t\\ttype=\\"checkbox\\"\\r\\n\\t\\t\\t\\tbind:checked={$presentationMode}\\r\\n\\t\\t\\t\\ton:change={noContextMenu}\\r\\n\\t\\t\\t/>\\r\\n\\t\\t\\t<span\\r\\n\\t\\t\\t\\tclass=\\"material-icons\\"\\r\\n\\t\\t\\t\\tstyle=\\"color: {$presentationMode ? 'teal' : 'white'}\\"\\r\\n\\t\\t\\t\\ton:click={() => checkbox.click}>slideshow</span\\r\\n\\t\\t\\t>\\r\\n\\t\\t</label>\\r\\n\\t\\t{#if !$presentationMode}\\r\\n\\t\\t\\t<nav>\\r\\n\\t\\t\\t\\t<Select\\r\\n\\t\\t\\t\\t\\tstyle=\\"width: 35vw; background:black; color:white;\\"\\r\\n\\t\\t\\t\\t\\toptions={chapters}\\r\\n\\t\\t\\t\\t\\tbind:value={$selectedChapter}\\r\\n\\t\\t\\t\\t\\tlabel=\\"Chapter\\"\\r\\n\\t\\t\\t\\t\\ton:selected={chapterSelected}\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t<Select\\r\\n\\t\\t\\t\\t\\tstyle=\\"width: 35vw; background:black; color:white;\\"\\r\\n\\t\\t\\t\\t\\toptions={sections[$selectedChapter]}\\r\\n\\t\\t\\t\\t\\tbind:value={$selectedSection}\\r\\n\\t\\t\\t\\t\\tlabel=\\"Section\\"\\r\\n\\t\\t\\t\\t\\ton:selected={sectionSelected}\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</nav>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<CanvasBar />\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\t<div\\r\\n\\t\\tclass={$presentationMode ? 'container noMenu' : ''}\\r\\n\\t\\tbind:clientWidth={W}\\r\\n\\t\\tbind:clientHeight={H}\\r\\n\\t>\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<aside use:ripple class=\\"back noMenu\\" on:click={back} />\\r\\n\\t\\t{/if}\\r\\n\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<div class=\\"absolute overlay noMenu\\" bind:this={$overlay}>\\r\\n\\t\\t\\t\\t<Canvas width={W} height={10000} />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"presenter noMenu\\">\\r\\n\\t\\t\\t\\t<Presenter />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t\\r\\n\\t\\t\\t<Teacher />\\r\\n\\t\\t\\t\\r\\n\\t\\t{/if}\\r\\n\\t\\t<slot class={$presentationMode ? 'noMenu gridBackground' : ''} />\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<aside use:ripple class=\\"next noMenu\\" on:click={next} />\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tnav {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: auto 1fr;\\r\\n\\t\\t/* margin:auto; */\\r\\n\\t\\t/* margin-top: 0.5em; */\\r\\n\\t\\tmax-width: 600px;\\r\\n\\t\\t/* min-width: 300px; */\\r\\n\\t}\\r\\n\\t.maths {\\r\\n\\t\\t/* max-width: 600px; */\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\tfont-family: 'Georgia', serif;\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t\\tword-spacing: 0.5ex;\\r\\n\\t}\\r\\n\\t.presentationMode {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\t/* gap: 1em; */\\r\\n\\t\\theight: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t}\\r\\n\\t.container {\\r\\n\\t\\t/* display: flex; */\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 1em 1fr 1em;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\theight: 600px;\\r\\n\\t}\\r\\n\\taside {\\r\\n\\t\\tbackground-color: rgba(230, 228, 228, 0.25);\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\twidth: 1em;\\r\\n\\t}\\r\\n\\t.overlay {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tz-index: 2;\\r\\n\\t\\tleft: 0.5em;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\twidth: calc(100% - 2em);\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: 90vh; */\\r\\n\\t\\theight: 600px;\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\t/* padding: 0 1em 0 1em; */\\r\\n\\t}\\r\\n\\t.overlay::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.presenter {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tright: 35px;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tz-index: 10;\\r\\n\\t}\\r\\n\\t\\r\\n\\t/* .noMenu {\\r\\n            touch-action: none;\\r\\n            -webkit-touch-callout: none;\\r\\n            -webkit-user-select: none;\\r\\n            user-select: none;\\r\\n        } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwKC,iBAAI,CACH,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,GAAG,CAG/B,SAAS,CAAE,KAEZ,CACA,oBAAO,CAEN,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,SAAS,CAAC,CAAC,KAAK,CAC7B,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,KACf,CACA,+BAAkB,CACjB,OAAO,CAAE,IAAI,CAEb,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACjB,CACA,wBAAW,CAEV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KACT,CACA,mBAAM,CACL,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,GACR,CACA,sBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,IAAI,CAAE,KAAK,CACX,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAGvB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAErB,CACA,sBAAQ,mBAAoB,CAC3B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,wBAAW,CACV,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,EACV"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => value);
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_autoScroll = subscribe(autoScroll, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  let checkbox;
  let W;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-pzt9nu_START --><!-- HEAD_svelte-pzt9nu_END -->`, ""} ${!$presentationMode ? `<span class="noMenu"${add_attribute("this", $overlay, 0)}></span>` : ``} <div class="${"maths " + escape($presentationMode ? "noMenu" : "", true) + " svelte-v6pok5"}"><div class="presentationMode svelte-v6pok5"><label style="display:flex;align-items:center;"><input style="display:none;" type="checkbox"${add_attribute("this", checkbox, 0)}${add_attribute("checked", $presentationMode, 1)}> <span class="material-icons" style="${"color: " + escape($presentationMode ? "teal" : "white", true)}">slideshow</span></label> ${!$presentationMode ? `<nav class="svelte-v6pok5">${validate_component(Select, "Select").$$render(
      $$result,
      {
        style: "width: 35vw; background:black; color:white;",
        options: chapters,
        label: "Chapter",
        value: $selectedChapter
      },
      {
        value: ($$value) => {
          $selectedChapter = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        style: "width: 35vw; background:black; color:white;",
        options: sections[$selectedChapter],
        label: "Section",
        value: $selectedSection
      },
      {
        value: ($$value) => {
          $selectedSection = $$value;
          $$settled = false;
        }
      },
      {}
    )}</nav>` : ``} ${$presentationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div> <div class="${escape(null_to_empty($presentationMode ? "container noMenu" : ""), true) + " svelte-v6pok5"}">${$presentationMode ? `<aside class="back noMenu svelte-v6pok5"></aside>` : ``} ${$presentationMode ? `<div class="absolute overlay noMenu svelte-v6pok5"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div> <div class="presenter noMenu svelte-v6pok5">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div> ${validate_component(Teacher, "Teacher").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({
      class: $presentationMode ? "noMenu gridBackground" : ""
    }) : ``} ${$presentationMode ? `<aside class="next noMenu svelte-v6pok5"></aside>` : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_currentSlide();
  $$unsubscribe_presentationMode();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Cx91n-5M.js.map
