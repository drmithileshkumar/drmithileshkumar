import { a as subscribe } from "./utils.js";
import { c as create_ssr_component, h as add_attribute, v as validate_component, i as each, e as escape } from "./ssr2.js";
import { t as tweened, c as cubicOut } from "./tweened.js";
import { A as ActionButtons } from "./ActionIcons.js";
import { F as FormField } from "./FormField.js";
import { B as Button } from "./Button.js";
import { C as CommonLabel } from "./CommonLabel.js";
import "./client.js";
import { D as Dialog } from "./Dialog.js";
import { A as Actions, T as Title, C as Content } from "./Actions2.js";
import { C as Checkbox } from "./Checkbox.js";
import { I as IconButton } from "./IconButton.js";
const css = {
  code: "figure.svelte-9zrkcl{position:relative;transition:all 2s;height:100px;display:flex;align-items:end;justify-content:start;gap:4px}.item.svelte-9zrkcl{display:flex;flex-direction:column;justify-content:end}.id.svelte-9zrkcl{font-family:Arial, Helvetica, sans-serif;font-size:0.7em;background-color:rgb(240, 240, 240);opacity:0.7;margin-top:0.5em}.centered.svelte-9zrkcl{display:flex;align-items:center;justify-content:center;transition:all 1s}.part.svelte-9zrkcl{border:1px solid currentColor}.inserting.svelte-9zrkcl{background:rgb(0, 195, 195);color:white}.beingCompared.svelte-9zrkcl{background:tomato;color:white}.last.svelte-9zrkcl{background-color:rgb(227, 194, 3)}.data.svelte-9zrkcl{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:2em}.dataitem.svelte-9zrkcl{display:grid;max-width:400px;grid-template-columns:130px 170px 2em;align-items:center}.comparer.svelte-9zrkcl{position:absolute;border:1.5px dashed tomato;left:0px;top:-5px;display:flex;align-items:end;justify-content:center}.comment.svelte-9zrkcl{position:relative;margin:auto;font-family:Arial, Helvetica, sans-serif;font-size:0.7em;color:tomato;line-height:1;margin-bottom:0}.speed.svelte-9zrkcl{display:flex;align-items:center}.katex{color:currentcolor}",
  map: `{"version":3,"file":"Insertion.svelte","sources":["Insertion.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t//@ts-nocheck\\r\\n\\timport { scale, fade, fly } from 'svelte/transition';\\r\\n    import { flip } from 'svelte/animate';\\r\\n\\timport { send, receive } from '$lib/utils/transition.js';\\r\\n    import { tweened } from \\"svelte/motion\\";\\r\\n    import { quartInOut } from \\"svelte/easing\\";\\r\\n\\timport { cubicOut } from 'svelte/easing';\\r\\n\\timport { ActionButtons } from '@smui/card';\\r\\n\\timport Slider from '@smui/slider';\\r\\n\\timport FormField from '@smui/form-field';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport { browser } from '$app/environment';\\r\\n\\timport { randInt } from '$lib/mathril/utils/matlib/common';\\r\\n\\timport Dialog, { Title, Content, Actions } from '@smui/dialog';\\r\\n\\timport { composition, sort } from 'mathjs';\\r\\n\\timport Checkbox from '@smui/checkbox';\\r\\n\\timport IconButton from '@smui/icon-button';\\r\\n    import { onMount } from 'svelte';\\r\\n\\t\\r\\n\\tlet open = false;\\r\\n\\t\\r\\n\\tlet done = false;\\r\\n\\t\\r\\n\\r\\n\\tlet inputArray = [];\\r\\n    let sortedArray = [];\\r\\n\\tlet n = 10;\\r\\n\\tlet low = 1;\\r\\n\\tlet high = 100;\\r\\n    let sum = 0;\\r\\n\\tlet sorted = false;\\r\\n    let started = false;\\r\\n    let inserting = false;\\r\\n    let insertionIndex = -1;\\r\\n    let compareIndex = -1;\\r\\n    let lastIndex = 0;\\r\\n    let lastId = n - 1;\\r\\n    let runthrough = false;\\r\\n    \\r\\n    let withEqualEntries = false;\\r\\n    let waitTime = 1000;\\r\\n    let comparisons = tweened(0, {\\r\\n\\t\\tduration: waitTime,\\r\\n\\t\\teasing: cubicOut\\r\\n\\t});\\r\\n    let swaps = tweened(0, {\\r\\n\\t\\tduration: waitTime,\\r\\n\\t\\teasing: cubicOut\\r\\n\\t});\\r\\n    let comparisonBox = 0;\\r\\n    let comparer;\\r\\n    let figWidth;\\r\\n    let leftShift = -2 * (n - 1);\\r\\n    let widthCorrection = 0.975;\\r\\n    let comment = \\"\\";\\r\\n\\r\\n    const timer = ms => new Promise(res => setTimeout(res, ms));\\r\\n    const waitTimer = (dir) => {\\r\\n        waitTime = dir == \\"+\\" ? waitTime + 50 : waitTime - 50;\\r\\n    }\\r\\n    onMount(() => setArray());\\r\\n\\tconst setArray = () => {\\r\\n        swaps.set(0);\\r\\n        comparisons.set(0);\\r\\n        comparisonBox = 0;\\r\\n\\t\\tsorted = false;\\r\\n        started = false;\\r\\n        runthrough = false;\\r\\n        inserting = false;\\r\\n\\t\\tinputArray = [];\\r\\n        sortedArray = [];\\r\\n        insertionIndex = -1;\\r\\n        compareIndex = -1;\\r\\n        lastIndex = 0;\\r\\n        lastId = 0;\\r\\n        sum = 0;\\r\\n        comment = '';\\r\\n        // comparer.style.transform = \`translate(\${0}%)\`\\r\\n        comparer.style.left = leftShift + 'px';\\r\\n        comparer.style.width = 2 * figWidth / n + 'px';\\r\\n        comparer.style.opacity = 0;\\r\\n\\t\\tfor (let i = 0; i < n; i++) {\\r\\n            let newitem = randInt(100, 1);\\r\\n            if(i > n/2 && withEqualEntries) {\\r\\n                newitem = inputArray[randInt(n/2, 0)].item;\\r\\n            }\\r\\n\\t\\t\\tinputArray = [...inputArray, {id: i, item: newitem}];\\r\\n            sortedArray = [...sortedArray, {id: i, item: newitem}];\\r\\n            sum = sum + newitem;\\r\\n\\t\\t}\\r\\n\\t};\\r\\n    const insertion = async (toSort) => {\\r\\n        if(lastIndex >= n - 1) {\\r\\n            comment = \\"Sorted\\";\\r\\n            inserting = false;\\r\\n            return true;\\r\\n        }\\r\\n        comment = \\"New insertion\\";\\r\\n        let swapped = false;\\r\\n        let newinsertion = true;\\r\\n        let insertionChanged = false;\\r\\n        insertionIndex = toSort[lastIndex + 1].id;\\r\\n        compareIndex = toSort[lastIndex].id;\\r\\n        comparisonBox = 0;\\r\\n        comparer.style.left = ((leftShift + widthCorrection * lastIndex * figWidth) / n) + 'px';\\r\\n        comparer.style.width = 2 * figWidth / n + 'px';\\r\\n        // comparer.style.transform = \`translate(\${lastIndex * 50}%)\`\\r\\n        comparer.style.opacity = 1;\\r\\n        let i = lastIndex + 1;\\r\\n        inserting = true;\\r\\n        do {\\r\\n            swapped = false;\\r\\n            insertionIndex = toSort[i].id;\\r\\n            compareIndex = toSort[i - 1].id;\\r\\n            comparisons.update((n) => n + 1)\\r\\n            if (toSort[i].item < toSort[i - 1].item) {\\r\\n                await timer(waitTime);\\r\\n                let temp = toSort[i];\\r\\n                toSort[i] = toSort[i - 1];\\r\\n                toSort[i - 1] = temp;\\r\\n                swapped = true; // Mark that we made a swap\\r\\n                swaps.update((n) => n + 1);\\r\\n                comment = \\"Swapping\\";\\r\\n                sortedArray = toSort;\\r\\n                await timer(waitTime);\\r\\n                i--;\\r\\n                // insertionIndex = toSort[i + 1].id;\\r\\n                // compareIndex = toSort[i].id;\\r\\n                if(i > 0) {\\r\\n                    // comparisonBox = comparisonBox + 90/n\\r\\n                    let angle = (i - 1) * 50\\r\\n                    comparer.style.left = ((leftShift + widthCorrection * (i - 1) * figWidth) / n) + 'px';\\r\\n                    comparer.style.width = 2 * figWidth / n + 'px';\\r\\n                    // comparer.style.transform = \`translate(\${angle}%)\`\\r\\n                    // comparer = comparer\\r\\n                }\\r\\n                \\r\\n            }\\r\\n        } while(swapped && i > 0)\\r\\n        comment = \\"Inserted\\";\\r\\n        inserting = false;\\r\\n        return false;\\r\\n    }\\r\\n\\tconst setStep = async (toSort) => {\\r\\n        if(inputArray.length == 0) return;\\r\\n        do {\\r\\n            started = true;\\r\\n            inserting = true;\\r\\n            sorted = await insertion(toSort);\\r\\n            toSort = toSort;\\r\\n            sortedArray = toSort;\\r\\n            lastIndex = lastIndex + 1;\\r\\n            if(lastIndex < n) lastId = toSort[lastIndex].id;\\r\\n        } while(!sorted && runthrough)\\r\\n        inserting = false;\\r\\n        comment = \\"Sorted\\";\\r\\n\\t};\\r\\n\\tlet panel;\\r\\n\\t$: if (browser && panel && renderMathInElement) {\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\trenderMathInElement(panel, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n\\t\\t}, 0);\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<article bind:this={panel}>\\r\\n\\t<ActionButtons style=\\"justify-content:space-between;\\">\\r\\n\\t\\t<Button on:click={() => (open = true)}>Help</Button>\\r\\n\\t\\t<Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n\\t</ActionButtons>\\r\\n\\t<h1 class=\\"mdc-typography--headline5\\" style=\\"text-align:center;margin:0 0 0.5em 0\\">\\r\\n\\t\\tInsertion Sort\\r\\n\\t</h1>\\r\\n    <div style=\\"display:flex;align-items:center;justify-content:center;\\">\\r\\n        <Button on:click={setArray}>new</Button>\\r\\n        <FormField>\\r\\n            <Checkbox bind:checked={withEqualEntries} />\\r\\n            <span slot=\\"label\\">With some equal entries</span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n\\t\\r\\n    <figure class=\\"figure\\" bind:clientWidth={figWidth}>\\r\\n        {#each inputArray as elem }\\r\\n            <div\\r\\n                class=\\"item\\"\\r\\n                style=\\"width: {90 / n}%; height: 100px;\\"\\r\\n            >\\r\\n                <div\\r\\n                    class=\\"centered part\\"\\r\\n                    style=\\"height: calc({elem.item}% + 1em)\\"\\r\\n                >\\r\\n                    {elem.item}\\r\\n                </div>\\r\\n                <div class=\\"centered id\\">\\r\\n                    {elem.id}\\r\\n                </div>\\r\\n            </div>\\r\\n        {/each}\\r\\n    </figure>\\r\\n    <figure class=\\"figure\\">\\r\\n        {#each sortedArray as elem (elem.id) }\\r\\n            <div\\r\\n                in:receive={{ key: elem.id }}\\r\\n                out:send={{ key: elem.id }}\\r\\n                animate:flip={{ duration: waitTime }}\\r\\n                class=\\"item\\"\\r\\n                style=\\"width: {90 / n}%; height: 100px;\\"\\r\\n            >\\r\\n                <div\\r\\n                    class=\\"centered part {elem.id == compareIndex ? 'beingCompared':''} {elem.id == insertionIndex ? 'inserting':''} {elem.id == lastId ? 'last' : ''}\\"\\r\\n                    style=\\"height: calc({elem.item}% + 1em);\\"\\r\\n                >\\r\\n                    {elem.item}\\r\\n                </div>\\r\\n                <div class=\\"centered id\\">\\r\\n                    {elem.id}\\r\\n                </div>\\r\\n            </div>\\r\\n        {/each}\\r\\n        <div class=\\"comparer\\" style=\\"height: 130px; opacity: 0; transition: all {waitTime/2000}s\\" bind:this={comparer}>\\r\\n            <p class=\\"comment\\"> {comment}... </p>\\r\\n        </div>\\r\\n    </figure>\\r\\n    {#if started}\\r\\n        <div class=\\"data\\">\\r\\n            <div class=\\"dataitem\\" style=\\"width: 100%\\">\\r\\n                <span># comparisons:</span> \\r\\n                <progress value={$comparisons/45}></progress>\\r\\n                <strong>{$comparisons.toFixed(0)}</strong>\\r\\n            </div>\\r\\n            <div class=\\"dataitem\\" style=\\"width: 100%\\">\\r\\n                <span># Swaps:</span> \\r\\n                <progress value={$swaps/45}></progress>\\r\\n                <strong>{$swaps.toFixed(0)}</strong>\\r\\n            </div>\\r\\n        </div>\\r\\n    {/if}\\r\\n    <Actions style=\\"display:flex; align-items:center; justify-content:center\\">\\r\\n        <Button on:click={() => setStep(sortedArray)}\\r\\n\\t\\t\\t>{!started ? 'Start Sorting' : inserting ? \\"inserting...\\" : !sorted ? 'Next Step' : 'Done'}</Button\\r\\n\\t\\t>\\r\\n        <FormField>\\r\\n            <Checkbox bind:checked={runthrough} />\\r\\n            <span slot=\\"label\\">Run through</span>\\r\\n        </FormField>\\r\\n        <div class=\\"speed\\">\\r\\n            <IconButton class=\\"material-icons\\" on:click={() => waitTimer('+')}>remove</IconButton>\\r\\n            <span>Speed</span>\\r\\n            <IconButton class=\\"material-icons\\" on:click={() => waitTimer('-')}>add</IconButton>\\r\\n        </div>\\r\\n        <!-- {#if started}\\r\\n            <Button on:click={() => runthrough = !runthrough, setStep(sortedArray, true)}>Run through</Button>\\r\\n        {/if} -->\\r\\n    </Actions>\\r\\n</article>\\r\\n<Dialog bind:open aria-labelledby=\\"simple-title\\" aria-describedby=\\"simple-content\\">\\r\\n\\t<Title id=\\"simple-title\\">How to play</Title>\\r\\n\\t<Content id=\\"simple-content\\">\\r\\n        <ul>\\r\\n            <li>Select <span style=\\"display: inline-flex;align-items:center; vertical-align:middle\\"><Checkbox></Checkbox></span> With some equal entries to generate array that contains some equal items</li>\\r\\n            <li>\\r\\n                Click on <Button>new</Button> to create new array.\\r\\n            </li>\\r\\n            <li>\\r\\n                Click on <Button>Start Sorting</Button> to start the 1st iteration of the Insertion sort.\\r\\n            </li>\\r\\n            <li>\\r\\n                Click on <Button>Next Step</Button> for the next iteration.\\r\\n            </li>\\r\\n            <li>\\r\\n                Select <span style=\\"display: inline-flex;align-items:center; vertical-align:middle\\"><Checkbox></Checkbox></span> Run Through to complete the sorting \\r\\n            </li>\\r\\n        </ul>\\r\\n\\t</Content>\\r\\n\\t<Actions>\\r\\n\\t\\t<Button on:click={() => (open = false)}>\\r\\n\\t\\t\\t<Label>Done</Label>\\r\\n\\t\\t</Button>\\r\\n\\t</Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n\\tfigure {\\r\\n        position: relative;\\r\\n\\t\\ttransition: all 2s;\\r\\n        height: 100px;\\r\\n\\t\\t/* width: 100%; */\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: end;\\r\\n\\t\\tjustify-content: start;\\r\\n\\t\\tgap: 4px;\\r\\n        /* padding: 4px; */\\r\\n\\t}\\r\\n    .item {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: end;\\r\\n    }\\r\\n    .id {\\r\\n        font-family: Arial, Helvetica, sans-serif;\\r\\n        font-size: 0.7em;\\r\\n        background-color: rgb(240, 240, 240);\\r\\n        opacity: 0.7;\\r\\n        margin-top: 0.5em;\\r\\n    }\\r\\n\\t.centered {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\ttransition: all 1s;\\r\\n\\t}\\r\\n\\t.part {\\r\\n\\t\\tborder: 1px solid currentColor;\\r\\n\\t}\\r\\n    .inserting {\\r\\n        background: rgb(0, 195, 195);\\r\\n        color: white;\\r\\n    }\\r\\n    .beingCompared {\\r\\n        background: tomato;\\r\\n        color: white;\\r\\n    }\\r\\n    .last {\\r\\n        background-color: rgb(227, 194, 3);\\r\\n    }\\r\\n    .data {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        margin-top: 2em;\\r\\n    }\\r\\n    .dataitem {\\r\\n        display: grid;\\r\\n        max-width: 400px;\\r\\n        grid-template-columns: 130px 170px 2em;\\r\\n        align-items: center;\\r\\n        \\r\\n    }\\r\\n    .comparer {\\r\\n        position: absolute;\\r\\n        border: 1.5px dashed tomato;\\r\\n        left: 0px;\\r\\n        top: -5px;\\r\\n        display:flex;\\r\\n        align-items: end;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .comment {\\r\\n        position: relative;\\r\\n        margin: auto;\\r\\n        font-family: Arial, Helvetica, sans-serif;\\r\\n        font-size: 0.7em;\\r\\n        color: tomato;\\r\\n        line-height: 1;\\r\\n        margin-bottom: 0;\\r\\n    }\\r\\n    .speed {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n\\t:global(.katex) {\\r\\n\\t\\tcolor: currentcolor;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqSC,oBAAO,CACA,QAAQ,CAAE,QAAQ,CACxB,UAAU,CAAE,GAAG,CAAC,EAAE,CACZ,MAAM,CAAE,KAAK,CAEnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,KAAK,CACtB,GAAG,CAAE,GAEN,CACG,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,GACrB,CACA,iBAAI,CACA,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,UAAU,CACzC,SAAS,CAAE,KAAK,CAChB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,KAChB,CACH,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,GAAG,CAAC,EACjB,CACA,mBAAM,CACL,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,YACnB,CACG,wBAAW,CACP,UAAU,CAAE,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC5B,KAAK,CAAE,KACX,CACA,4BAAe,CACX,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,KACX,CACA,mBAAM,CACF,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CACrC,CACA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,GAChB,CACA,uBAAU,CACN,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KAAK,CAChB,qBAAqB,CAAE,KAAK,CAAC,KAAK,CAAC,GAAG,CACtC,WAAW,CAAE,MAEjB,CACA,uBAAU,CACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CAAC,MAAM,CAAC,MAAM,CAC3B,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,IAAI,CACT,QAAQ,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,MACrB,CACA,sBAAS,CACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,UAAU,CACzC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,MAAM,CACb,WAAW,CAAE,CAAC,CACd,aAAa,CAAE,CACnB,CACA,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB,CACK,MAAQ,CACf,KAAK,CAAE,YACR"}`
};
let n = 10;
const Insertion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_comparisons;
  let $$unsubscribe_swaps;
  let open = false;
  let inputArray = [];
  let sortedArray = [];
  let insertionIndex = -1;
  let compareIndex = -1;
  let lastId = n - 1;
  let runthrough = false;
  let withEqualEntries = false;
  let waitTime = 1e3;
  let comparisons = tweened(0, { duration: waitTime, easing: cubicOut });
  $$unsubscribe_comparisons = subscribe(comparisons, (value) => value);
  let swaps = tweened(0, { duration: waitTime, easing: cubicOut });
  $$unsubscribe_swaps = subscribe(swaps, (value) => value);
  let comparer;
  let comment = "";
  let panel;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between;" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Help`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `More games`;
          }
        })}`;
      }
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0" data-svelte-h="svelte-93zlvw">Insertion Sort</h1> <div style="display:flex;align-items:center;justify-content:center;">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `new`;
      }
    })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
      label: () => {
        return `<span slot="label" data-svelte-h="svelte-q4ulq9">With some equal entries</span>`;
      },
      default: () => {
        return `${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          { checked: withEqualEntries },
          {
            checked: ($$value) => {
              withEqualEntries = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <figure class="figure svelte-9zrkcl">${each(inputArray, (elem) => {
      return `<div class="item svelte-9zrkcl" style="${"width: " + escape(90 / n, true) + "%; height: 100px;"}"><div class="centered part svelte-9zrkcl" style="${"height: calc(" + escape(elem.item, true) + "% + 1em)"}">${escape(elem.item)}</div> <div class="centered id svelte-9zrkcl">${escape(elem.id)}</div> </div>`;
    })}</figure> <figure class="figure svelte-9zrkcl">${each(sortedArray, (elem) => {
      return `<div class="item svelte-9zrkcl" style="${"width: " + escape(90 / n, true) + "%; height: 100px;"}"><div class="${"centered part " + escape(elem.id == compareIndex ? "beingCompared" : "", true) + " " + escape(elem.id == insertionIndex ? "inserting" : "", true) + " " + escape(elem.id == lastId ? "last" : "", true) + " svelte-9zrkcl"}" style="${"height: calc(" + escape(elem.item, true) + "% + 1em);"}">${escape(elem.item)}</div> <div class="centered id svelte-9zrkcl">${escape(elem.id)}</div> </div>`;
    })} <div class="comparer svelte-9zrkcl" style="${"height: 130px; opacity: 0; transition: all " + escape(waitTime / 2e3, true) + "s"}"${add_attribute("this", comparer, 0)}><p class="comment svelte-9zrkcl">${escape(comment)}...</p></div></figure> ${``} ${validate_component(Actions, "Actions").$$render(
      $$result,
      {
        style: "display:flex; align-items:center; justify-content:center"
      },
      {},
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(
                "Start Sorting"
              )}`;
            }
          })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
            label: () => {
              return `<span slot="label" data-svelte-h="svelte-1cdd8k9">Run through</span>`;
            },
            default: () => {
              return `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                { checked: runthrough },
                {
                  checked: ($$value) => {
                    runthrough = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} <div class="speed svelte-9zrkcl">${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `remove`;
            }
          })} <span data-svelte-h="svelte-ci4kcr">Speed</span> ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `add`;
            }
          })}</div> `;
        }
      }
    )}</article> ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-labelledby": "simple-title",
        "aria-describedby": "simple-content",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { id: "simple-title" }, {}, {
            default: () => {
              return `How to play`;
            }
          })} ${validate_component(Content, "Content").$$render($$result, { id: "simple-content" }, {}, {
            default: () => {
              return `<ul><li>Select <span style="display: inline-flex;align-items:center; vertical-align:middle">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}</span> With some equal entries to generate array that contains some equal items</li> <li>Click on ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `new`;
                }
              })} to create new array.</li> <li>Click on ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Start Sorting`;
                }
              })} to start the 1st iteration of the Insertion sort.</li> <li>Click on ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Next Step`;
                }
              })} for the next iteration.</li> <li>Select <span style="display: inline-flex;align-items:center; vertical-align:middle">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}</span> Run Through to complete the sorting</li></ul>`;
            }
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Done`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_comparisons();
  $$unsubscribe_swaps();
  return $$rendered;
});
export {
  Insertion as I
};
