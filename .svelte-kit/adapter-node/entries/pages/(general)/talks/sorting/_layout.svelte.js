import { a as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component, h as add_attribute } from "../../../../../chunks/ssr2.js";
import { F as FormField } from "../../../../../chunks/FormField.js";
import { C as Checkbox } from "../../../../../chunks/Checkbox.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as presentation, o as overlay, b as autoScroll, d as annotationMode } from "../../../../../chunks/stores4.js";
import "../../../../../chunks/client.js";
import { C as CanvasBar, a as Canvas } from "../../../../../chunks/Canvas.js";
import { P as Presenter } from "../../../../../chunks/Presenter.js";
const css = {
  code: ".maths.svelte-fkn4y5{width:100%;margin:auto;font-family:'Georgia', serif;line-height:1.5;word-spacing:0.5ex}.presentationMode.svelte-fkn4y5{display:flex;height:1em;margin:0.5em 0;align-items:center;flex-direction:row}.container.svelte-fkn4y5{display:grid;grid-template-columns:1em 1fr 1em;position:relative}aside.svelte-fkn4y5{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.overlay.svelte-fkn4y5{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:90vh;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.overlay.svelte-fkn4y5::-webkit-scrollbar{width:0;height:0}.presenter.svelte-fkn4y5{position:absolute;right:35px;top:0;z-index:10}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n\\t// @ts-nocheck\\r\\n\\timport FormField from '@smui/form-field';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n\\timport IconButton from '@smui/icon-button';\\r\\n\\timport {\\r\\n        annotationMode,\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport { browser } from '$app/environment';\\r\\n\\timport { afterUpdate, beforeUpdate, onMount, tick } from 'svelte';\\r\\n\\timport CanvasBar from '$lib/canvas/CanvasBar.svelte';\\r\\n\\timport Canvas from '$lib/canvas/Canvas.svelte';\\r\\n\\timport { ripple } from '$lib/ui/ripple';\\r\\n\\timport Presenter from '$lib/canvas/Presenter.svelte';\\r\\n\\tconst makeSmallLetter = (str) => {\\r\\n\\t\\tif (str.length <= 0) return str;\\r\\n\\t\\treturn str[0].toLowerCase() + str.slice(1);\\r\\n\\t};\\r\\n\\r\\n\\tlet W, H;\\r\\n\\tbeforeUpdate(() => {\\r\\n\\t\\tif ($presentation) {\\r\\n\\t\\t\\t// autoscroll = presentation && (presentation.offsetHeight + presentation.scrollTop) > (presentation.scrollHeight - 40);\\r\\n\\t\\t\\t$autoScroll = true;\\r\\n\\t\\t}\\r\\n\\t});\\r\\n\\tafterUpdate(async () => {\\r\\n\\t\\tif ($autoScroll)\\r\\n\\t\\t\\tsetTimeout(async () => {\\r\\n\\t\\t\\t\\tMathJax.typeset();\\r\\n\\t\\t\\t\\tif ($presentation)\\r\\n\\t\\t\\t\\t\\t$presentation.scrollTo({\\r\\n\\t\\t\\t\\t\\t\\ttop: $presentation.scrollHeight,\\r\\n\\t\\t\\t\\t\\t\\tleft: 0,\\r\\n\\t\\t\\t\\t\\t\\tbehaviour: 'smooth'\\r\\n\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\tif ($overlay && $presentation)\\r\\n\\t\\t\\t\\t\\t$overlay.scrollTo({\\r\\n\\t\\t\\t\\t\\t\\ttop: $presentation.scrollHeight,\\r\\n\\t\\t\\t\\t\\t\\tleft: 0,\\r\\n\\t\\t\\t\\t\\t\\tbehaviour: 'smooth'\\r\\n\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t}, 0);\\r\\n\\t});\\r\\n\\tconst back = () => {\\r\\n\\t\\tif ($currentSlide >= 0) $currentSlide--;\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\tMathJax.typeset();\\r\\n\\t\\t}, 0);\\r\\n\\t};\\r\\n\\tconst next = () => {\\r\\n\\t\\tif ($currentSlide < $slideCounter - 1) {\\r\\n\\t\\t\\t$currentSlide++;\\r\\n\\t\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\t\\tMathJax.typeset();\\r\\n\\t\\t\\t}, 0);\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\tconst preventD = (evt) => {\\r\\n\\t\\tevt.preventDefault();\\r\\n\\t};\\r\\n\\tconst noContextMenu = () => {\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tif ($presentationMode) {\\r\\n\\t\\t\\tdocument.addEventListener('contextmenu', preventD, false);\\r\\n\\t\\t\\tdocument.body.classList.add('noMenu');\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tdocument.removeEventListener('contextmenu', preventD);\\r\\n\\t\\t\\tdocument.body.classList.remove('noMenu');\\r\\n\\t\\t}\\r\\n\\t};\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<!-- <script defer src=\\"https://polyfill.io/v3/polyfill.min.js?features=es6\\"><\/script>\\r\\n        <script type=\\"text/javascript\\" id=\\"MathJax-script\\" async src=\\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js\\"><\/script> -->\\r\\n</svelte:head>\\r\\n\\r\\n<div class=\\"maths {$presentationMode ? 'noMenu' : ''}\\">\\r\\n\\t<div class=\\"presentationMode\\">\\r\\n\\t\\t<FormField style=\\"display:flex;align-items:center;\\">\\r\\n\\t\\t\\t<Checkbox bind:checked={$presentationMode} on:change={noContextMenu} />\\r\\n\\t\\t\\t<span slot=\\"label\\" class=\\"material-icons\\" style=\\"display:flex;\\">slideshow</span>\\r\\n\\t\\t</FormField>\\r\\n        <FormField style=\\"display:flex;align-items:center;\\">\\r\\n\\t\\t\\t<Checkbox bind:checked={$annotationMode} />\\r\\n\\t\\t\\t<span slot=\\"label\\" class=\\"material-icons\\" style=\\"display:flex;\\">edit</span>\\r\\n\\t\\t</FormField>\\r\\n\\t\\t<!-- <label style=\\"display:flex;align-items:center;\\">\\r\\n\\t\\t\\t<input type=\\"checkbox\\" bind:checked={$presentationMode} on:change={noContextMenu} />\\r\\n\\t\\t\\t<span class=\\"material-icons\\">slideshow</span>\\r\\n\\t\\t</label> -->\\r\\n\\t\\t{#if $presentationMode && $annotationMode}\\r\\n\\t\\t\\t<CanvasBar />\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\t<div\\r\\n\\t\\tclass=\\"container {$presentationMode ? 'noMenu' : ''}\\"\\r\\n\\t\\tbind:clientWidth={W}\\r\\n\\t\\tbind:clientHeight={H}\\r\\n\\t>\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n\\t\\t\\t<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\r\\n\\t\\t\\t<aside use:ripple class=\\"back noMenu\\" on:click={back}></aside>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if !$presentationMode}\\r\\n\\t\\t\\t<span class=\\"noMenu\\" bind:this={$overlay}></span>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if $presentationMode}\\r\\n            {#if $annotationMode}\\r\\n\\t\\t\\t<div class=\\"absolute overlay noMenu\\" bind:this={$overlay}>\\r\\n\\t\\t\\t\\t<Canvas width={W} height={10000} />\\r\\n\\t\\t\\t</div>\\r\\n            {/if}\\r\\n\\t\\t\\t<div class=\\"presenter noMenu\\">\\r\\n\\t\\t\\t\\t<Presenter />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t\\t<slot class={$presentationMode ? 'noMenu' : ''} />\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n\\t\\t\\t<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\r\\n\\t\\t\\t<aside use:ripple class=\\"next noMenu\\" on:click={next}></aside>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t/* nav {\\r\\n            display: grid;\\r\\n            grid-template-columns: auto 1fr;\\r\\n            max-width: 600px;\\r\\n        } */\\r\\n\\t.maths {\\r\\n\\t\\t/* max-width: 600px; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\tfont-family: 'Georgia', serif;\\r\\n\\t\\tline-height: 1.5;\\r\\n\\t\\tword-spacing: 0.5ex;\\r\\n\\t}\\r\\n\\t.presentationMode {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\t/* gap: 1em; */\\r\\n\\t\\theight: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t}\\r\\n\\t.container {\\r\\n\\t\\t/* display: flex; */\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 1em 1fr 1em;\\r\\n\\t\\tposition: relative;\\r\\n\\t}\\r\\n\\taside {\\r\\n\\t\\tbackground-color: rgb(230, 228, 228);\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\twidth: 1em;\\r\\n\\t}\\r\\n\\t.overlay {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tz-index: 2;\\r\\n\\t\\tleft: 0.5em;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\twidth: calc(100% - 2em);\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\theight: 90vh;\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\t/* padding: 0 1em 0 1em; */\\r\\n\\t}\\r\\n\\t.overlay::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.presenter {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tright: 35px;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tz-index: 10;\\r\\n\\t}\\r\\n\\t/* .noMenu {\\r\\n            touch-action: none;\\r\\n            -webkit-touch-callout: none;\\r\\n            -webkit-user-select: none;\\r\\n            user-select: none;\\r\\n        } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+IC,oBAAO,CAEN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,SAAS,CAAC,CAAC,KAAK,CAC7B,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,KACf,CACA,+BAAkB,CACjB,OAAO,CAAE,IAAI,CAEb,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACjB,CACA,wBAAW,CAEV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,QAAQ,CAAE,QACX,CACA,mBAAM,CACL,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,GACR,CACA,sBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,IAAI,CAAE,KAAK,CACX,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAEvB,MAAM,CAAE,IAAI,CAEZ,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAErB,CACA,sBAAQ,mBAAoB,CAC3B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,wBAAW,CACV,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,EACV"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $$unsubscribe_presentation;
  let $overlay, $$unsubscribe_overlay;
  let $$unsubscribe_autoScroll;
  let $annotationMode, $$unsubscribe_annotationMode;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => value);
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_autoScroll = subscribe(autoScroll, (value) => value);
  $$unsubscribe_annotationMode = subscribe(annotationMode, (value) => $annotationMode = value);
  let W;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-pzt9nu_START --><!-- HEAD_svelte-pzt9nu_END -->`, ""} <div class="${"maths " + escape($presentationMode ? "noMenu" : "", true) + " svelte-fkn4y5"}"><div class="presentationMode svelte-fkn4y5">${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        style: "display:flex;align-items:center;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" class="material-icons" style="display:flex;" data-svelte-h="svelte-9z08cu">slideshow</span>`;
        },
        default: () => {
          return `${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            { checked: $presentationMode },
            {
              checked: ($$value) => {
                $presentationMode = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        style: "display:flex;align-items:center;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" class="material-icons" style="display:flex;" data-svelte-h="svelte-wndbfq">edit</span>`;
        },
        default: () => {
          return `${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            { checked: $annotationMode },
            {
              checked: ($$value) => {
                $annotationMode = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}  ${$presentationMode && $annotationMode ? `${validate_component(CanvasBar, "CanvasBar").$$render($$result, {}, {}, {})}` : ``}</div> <div class="${"container " + escape($presentationMode ? "noMenu" : "", true) + " svelte-fkn4y5"}">${$presentationMode ? `  <aside class="back noMenu svelte-fkn4y5"></aside>` : ``} ${!$presentationMode ? `<span class="noMenu"${add_attribute("this", $overlay, 0)}></span>` : ``} ${$presentationMode ? `${$annotationMode ? `<div class="absolute overlay noMenu svelte-fkn4y5"${add_attribute("this", $overlay, 0)}>${validate_component(Canvas, "Canvas").$$render($$result, { width: W, height: 1e4 }, {}, {})}</div>` : ``} <div class="presenter noMenu svelte-fkn4y5">${validate_component(Presenter, "Presenter").$$render($$result, {}, {}, {})}</div>` : ``} ${slots.default ? slots.default({ class: $presentationMode ? "noMenu" : "" }) : ``} ${$presentationMode ? `  <aside class="next noMenu svelte-fkn4y5"></aside>` : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_presentation();
  $$unsubscribe_overlay();
  $$unsubscribe_autoScroll();
  $$unsubscribe_annotationMode();
  return $$rendered;
});
export {
  Layout as default
};
