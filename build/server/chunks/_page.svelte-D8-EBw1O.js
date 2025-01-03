import { a as subscribe, c as null_to_empty } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape, a as add_attribute } from './ssr2-q3O0l93f.js';
import { c as currentSlide, s as slideCounter, p as presentationMode, a as presentation } from './stores4-DLB_GG7W.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { T as TeX } from './constants-DrqH0LK4.js';
import './index2-BZnI6xu7.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';

const css = {
  code: ".container.svelte-1a1o203{display:flex}article.svelte-1a1o203{padding:0.5em}.absolute.svelte-1a1o203{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1a1o203::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-1a1o203{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-1a1o203{min-height:100px}.flex.svelte-1a1o203{display:flex;flex-direction:column}.grid.svelte-1a1o203{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\r\\n<script id=\\"MathJax-script\\">\\r\\n// @ts-nocheck\\r\\nimport {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    import {page} from '$app/stores';\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {onMount} from 'svelte';\\r\\n    \\r\\n    import {TeX} from '$lib/utils/common/constants';\\r\\n    \\r\\n    \\r\\n    onMount(() => {\\r\\n        $slideCounter = 8;\\r\\n        $currentSlide = -2;\\r\\n        MathJax.typeset();\\r\\n    });\\r\\n    \\r\\n    let isActive = -1; \\r\\n    $: optionStyle = W < 450 ? 'flex' : 'grid'; \\r\\n<\/script>\\r\\n<style>\\r\\n    /* p {\\r\\n        text-indent: 2em;\\r\\n    } */\\r\\n    /* .options {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 2em;\\r\\n        width: 100%;\\r\\n        flex-wrap: wrap;\\r\\n    } */\\r\\n    .container {\\r\\n        display: flex;\\r\\n    }\\r\\n    article {\\r\\n        padding: 0.5em;\\r\\n        /* in: all 1s; */\\r\\n    }\\r\\n    .absolute {\\r\\n        margin: auto;\\r\\n        width: 90vw;\\r\\n        height: min(80vh, 60vw);\\r\\n        /* height: min(70vh,600px); */\\r\\n        overflow-y: auto;\\r\\n        scrollbar-width: none;\\r\\n        -ms-overflow-style: none;\\r\\n        padding: 0 1em 0 1em;\\r\\n    }\\r\\n    .absolute::-webkit-scrollbar {\\r\\n        width: 0;\\r\\n        height: 0;\\r\\n    }\\r\\n    .currentActive {\\r\\n        background: gray;\\r\\n        color: white;\\r\\n        padding: 1em;\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    .pad {\\r\\n        min-height: 100px;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        grid-template-rows: 1fr 1fr;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics Question 6</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n    <meta name=\\"description\\" content=\\"IIT JEE Advanced 2021 Mathematics\\" />\\r\\n</svelte:head>\\r\\n    <article class:absolute={$presentationMode} bind:this={$presentation}>\\r\\n        <h1>Question 6 [JEE adv, 2021]</h1>\\r\\n        {#if !$presentationMode || $currentSlide >= 0}\\r\\n        <p class=\\"question {$presentationMode && isActive === 0 ? 'currentActive': ''}\\" \\r\\n            transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n            on:introstart={() => {isActive = -1}}\\r\\n            on:introend={() => {isActive = 0}}\\r\\n            on:outroend={() => {isActive = -1}}>\\r\\n            For any \\\\(3\\\\times 3\\\\) matrix \\\\(M\\\\), let \\\\(|M|\\\\) denote the determinant of \\\\(M\\\\). Let \\\\(I\\\\) be the \\\\(3\\\\times 3\\\\) identity matrix. Let \\\\(E\\\\) and \\\\(F\\\\) be two \\\\(3\\\\times 3\\\\) matrices such that \\\\(I-EF\\\\) is invertible. If \\\\(G = {TeX.pow('(I - EF)', '-1')}\\\\), then which of the following statements is (are) <strong>True</strong>?\\r\\n        </p>\\r\\n        {/if}\\r\\n        {#if !$presentationMode || $currentSlide >= 1}\\r\\n        <ol class={optionStyle}>\\r\\n            <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 1}}\\r\\n                on:outroend={() => {isActive = -1}}> {\`\\\\\\\\(|FE| = |I-FE||FGE|\\\\\\\\)\`}</li>\\r\\n            <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 1}}\\r\\n                on:outroend={() => {isActive = -1}}> {\`\\\\\\\\((I-FE)(I + FGE) = I\\\\\\\\)\`}</li>\\r\\n            <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 1}}\\r\\n                on:outroend={() => {isActive = -1}}> \\\\(EFG = GEF\\\\)</li>\\r\\n            <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 1}}\\r\\n                on:outroend={() => {isActive = -1}}> \\\\((I - FE)(I-FGE) = I\\\\) </li>\\r\\n        </ol>\\r\\n        {/if}\\r\\n        <section>\\r\\n            {#if !$presentationMode || $currentSlide >= 2}\\r\\n            <h2 class=\\"{$presentationMode && isActive === 2 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 2}}\\r\\n                on:outroend={() => {isActive = -1}}>Concepts</h2>\\r\\n            <p class=\\"{$presentationMode && isActive === 2 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 2}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                Use \\\\(A{TeX.inv('A')} = {TeX.inv('A')}A = I\\\\)\\r\\n            </p>\\r\\n            {/if}\\r\\n        </section>\\r\\n        <section>\\r\\n            {#if !$presentationMode || $currentSlide >= 3}\\r\\n            <h2 class=\\"{$presentationMode && isActive === 3 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 3}}\\r\\n                on:outroend={() => {isActive = -1}}>Solution</h2>\\r\\n            <h4 class=\\"{$presentationMode && isActive === 3 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 3}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                Step 1\\r\\n            </h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 3 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 3}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{eqnarray}\\r\\n                        (I - EF)G &=& G(I-EF)\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\implies EFG &=& GEF\\r\\n                    \\\\\\\\end{eqnarray}\\r\\n                \\\\\\\\]\`}\\r\\n                Option 3 is correct.\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 4}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 4 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 4}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 2</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 4 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 4}}\\r\\n                on:outroend={() => {isActive = -1}}> We have that \\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                        G(I - EF) &= I\\\\\\\\implies GEF = G-I\\\\\\\\\\\\\\\\\\r\\n                        (I - EF)G & = I\\\\\\\\implies EFG = G -I\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n                Now, {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    (I-FE)(I + FGE) &= I - FE + FGE - FEFGE\\\\\\\\\\\\\\\\\\r\\n                    &= I - FE + FGE - F(G - I)E\\\\\\\\\\\\\\\\\\r\\n                    &= I - FE + FGE - FGE + FE\\\\\\\\\\\\\\\\\\r\\n                    &= I\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n                Option 2 is correct.\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 5}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 5 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive =5}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 3</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 5 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive =5}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    (I-FE)(I - FGE) &= I - FE - FGE + FEFGE\\\\\\\\\\\\\\\\\\r\\n                    &= I - FE - FGE + F(G - I)E\\\\\\\\\\\\\\\\\\r\\n                    &= I - FE + FGE + FGE - FE\\\\\\\\\\\\\\\\\\r\\n                    &= I - 2FE\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n                Option 4 is incorrect.\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 6}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 6 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 6}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 4</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 6 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 6}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    (I-FE)FGE &= FGE - FEFGE\\\\\\\\\\\\\\\\\\r\\n                    &= FGE - F(G - I)E\\\\\\\\\\\\\\\\\\r\\n                    &= FGE - FGE + FE\\\\\\\\\\\\\\\\\\r\\n                    &= FE\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n                Option 1 is correct.\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if $presentationMode && $currentSlide > 0}\\r\\n                <div class=\\"pad\\"></div>\\r\\n            {/if}\\r\\n        </section>\\r\\n    </article>\\r\\n    "],"names":[],"mappings":"AA+BI,yBAAW,CACP,OAAO,CAAE,IACb,CACA,sBAAQ,CACJ,OAAO,CAAE,KAEb,CACA,wBAAU,CACN,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,IAAI,CAAC,CAAC,IAAI,CAAC,CAEvB,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GACrB,CACA,wBAAS,mBAAoB,CACzB,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACZ,CACA,6BAAe,CACX,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,mBAAK,CACD,UAAU,CAAE,KAChB,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,kBAAkB,CAAE,GAAG,CAAC,GAC5B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let optionStyle;
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let isActive = -1;
  $$result.css.add(css);
  optionStyle = W < 450 ? "flex" : "grid";
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1i7zrqo_START -->${$$result.title = `<title>Mathematics Question 6</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="IIT JEE Advanced 2021 Mathematics"><!-- HEAD_svelte-1i7zrqo_END -->`, ""} <article class="${["svelte-1a1o203", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}><h1 data-svelte-h="svelte-1h0hqba">Question 6 [JEE adv, 2021]</h1> ${!$presentationMode || $currentSlide >= 0 ? `<p class="${"question " + escape(
    $presentationMode && isActive === 0 ? "currentActive" : "",
    true
  ) + " svelte-1a1o203"}">For any \\(3\\times 3\\) matrix \\(M\\), let \\(|M|\\) denote the determinant of \\(M\\). Let \\(I\\) be the \\(3\\times 3\\) identity matrix. Let \\(E\\) and \\(F\\) be two \\(3\\times 3\\) matrices such that \\(I-EF\\) is invertible. If \\(G = ${escape(TeX.pow("(I - EF)", "-1"))}\\), then which of the following statements is (are) <strong data-svelte-h="svelte-1lk9po0">True</strong>?</p>` : ``} ${!$presentationMode || $currentSlide >= 1 ? `<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-1a1o203"}"><li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\(|FE| = |I-FE||FGE|\\)`)}</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\((I-FE)(I + FGE) = I\\)`)}</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">\\(EFG = GEF\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">\\((I - FE)(I-FGE) = I\\)</li></ol>` : ``} <section>${!$presentationMode || $currentSlide >= 2 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Concepts</h2> <p class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Use \\(A${escape(TeX.inv("A"))} = ${escape(TeX.inv("A"))}A = I\\)</p>` : ``}</section> <section>${!$presentationMode || $currentSlide >= 3 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Solution</h2> <h4 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 1</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\[
                    \\begin{eqnarray}
                        (I - EF)G &=& G(I-EF)\\\\
                        \\implies EFG &=& GEF
                    \\end{eqnarray}
                \\]`)}
                Option 3 is correct.</p>` : ``} ${!$presentationMode || $currentSlide >= 4 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 2</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">We have that 
                ${escape(`\\[
                    \\begin{aligned}
                        G(I - EF) &= I\\implies GEF = G-I\\\\
                        (I - EF)G & = I\\implies EFG = G -I
                    \\end{aligned}
                \\]`)}
                Now, ${escape(`\\[
                    \\begin{aligned}
                    (I-FE)(I + FGE) &= I - FE + FGE - FEFGE\\\\
                    &= I - FE + FGE - F(G - I)E\\\\
                    &= I - FE + FGE - FGE + FE\\\\
                    &= I
                    \\end{aligned}
                \\]`)}
                Option 2 is correct.</p>` : ``} ${!$presentationMode || $currentSlide >= 5 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 3</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\[
                    \\begin{aligned}
                    (I-FE)(I - FGE) &= I - FE - FGE + FEFGE\\\\
                    &= I - FE - FGE + F(G - I)E\\\\
                    &= I - FE + FGE + FGE - FE\\\\
                    &= I - 2FE
                    \\end{aligned}
                \\]`)}
                Option 4 is incorrect.</p>` : ``} ${!$presentationMode || $currentSlide >= 6 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">Step 4</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-1a1o203"}">${escape(`\\[
                    \\begin{aligned}
                    (I-FE)FGE &= FGE - FEFGE\\\\
                    &= FGE - F(G - I)E\\\\
                    &= FGE - FGE + FE\\\\
                    &= FE
                    \\end{aligned}
                \\]`)}
                Option 1 is correct.</p>` : ``} ${$presentationMode && $currentSlide > 0 ? `<div class="pad svelte-1a1o203"></div>` : ``}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D8-EBw1O.js.map
