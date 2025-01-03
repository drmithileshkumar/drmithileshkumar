import { a as subscribe, c as null_to_empty } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape, a as add_attribute } from './ssr2-q3O0l93f.js';
import { c as currentSlide, s as slideCounter, p as presentationMode, a as presentation } from './stores4-DLB_GG7W.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { T as TeX } from './constants-DrqH0LK4.js';
import './index2-BZnI6xu7.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';

const css = {
  code: ".options.svelte-qqtpro{display:flex;flex-direction:row;gap:2em;width:100%;flex-wrap:wrap}article.svelte-qqtpro{padding:0.5em}.absolute.svelte-qqtpro{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-qqtpro::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-qqtpro{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-qqtpro{min-height:100px}.flex.svelte-qqtpro{display:flex;flex-direction:column}.grid.svelte-qqtpro{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\r\\n<script id=\\"MathJax-script\\">\\r\\n// @ts-nocheck\\r\\nimport {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';\\r\\n    import {page} from '$app/stores';\\r\\n    import {fade, fly} from 'svelte/transition';\\r\\n    import {onMount} from 'svelte';\\r\\n    \\r\\n    import {TeX} from '$lib/utils/common/constants';\\r\\n    \\r\\n    \\r\\n    onMount(() => {\\r\\n        $slideCounter = 8;\\r\\n        $currentSlide = -2;\\r\\n        MathJax.typeset();\\r\\n    });\\r\\n    \\r\\n    let isActive = -1; \\r\\n    $: optionStyle = W < 450 ? 'flex' : 'grid'; \\r\\n<\/script>\\r\\n<style>\\r\\n    /* p {\\r\\n        text-indent: 2em;\\r\\n    } */\\r\\n    .options {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 2em;\\r\\n        width: 100%;\\r\\n        flex-wrap: wrap;\\r\\n    }\\r\\n    \\r\\n    article {\\r\\n        padding: 0.5em;\\r\\n        /* in: all 1s; */\\r\\n    }\\r\\n    \\r\\n    .absolute {\\r\\n        margin: auto;\\r\\n        width: 90vw;\\r\\n        height: min(80vh, 60vw);\\r\\n        /* height: min(70vh,600px); */\\r\\n        overflow-y: auto;\\r\\n        scrollbar-width: none;\\r\\n        -ms-overflow-style: none;\\r\\n        padding: 0 1em 0 1em;\\r\\n    }\\r\\n    .absolute::-webkit-scrollbar {\\r\\n        width: 0;\\r\\n        height: 0;\\r\\n    }\\r\\n    .currentActive {\\r\\n        background: gray;\\r\\n        color: white;\\r\\n        padding: 1em;\\r\\n        border-radius: 10px;\\r\\n        transition: all 1s;\\r\\n    }\\r\\n    .pad {\\r\\n        min-height: 100px;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        grid-template-rows: 1fr 1fr;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics Question 5</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n    <meta name=\\"description\\" content=\\"How do we define base or fundamental units? How long really is one meter?\\" />\\r\\n</svelte:head>\\r\\n    <article class:absolute={$presentationMode} bind:this={$presentation}>\\r\\n\\r\\n        <h1>Question 5 [JEE adv, 2021]</h1>\\r\\n        {#if !$presentationMode || $currentSlide >= 0}\\r\\n        <p \\r\\n            class=\\"question {$presentationMode && isActive === 0 ? 'currentActive': ''}\\" \\r\\n            transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n            on:introstart={() => {isActive = -1}}\\r\\n            on:introend={() => {isActive = 0}}\\r\\n            on:outroend={() => {isActive = -1}}>\\r\\n            For any positive integer \\\\(n\\\\), let \\\\(S_n : (0,\\\\infty)\\\\to {TeX.bbR}\\\\) be defined by \\\\[S_n(x) = {TeX.sum('k=1','n')}{TeX.acot}\\\\Big({TeX.frac('1 + k(k + 1)x^2', 'x')}\\\\Big)\\\\] where for any \\\\(x{TeX.inR}, {TeX.acot}(x)\\\\in (0, \\\\pi)\\\\) and \\\\({TeX.atan}(x)\\\\in \\\\Big(-{TeX.piby2}, {TeX.piby2}\\\\Big)\\\\). Then which of the following statements is (are) <strong>True</strong>?\\r\\n        </p>\\r\\n        {/if}\\r\\n        {#if !$presentationMode || $currentSlide >= 1}\\r\\n            <ol class={optionStyle}>\\r\\n                <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                    on:introstart={() => {isActive = -1}}\\r\\n                    on:introend={() => {isActive = 1}}\\r\\n                    on:outroend={() => {isActive = -1}}> {\`\\\\\\\\(S_{10}(x) = \\\\\\\\dfrac{\\\\\\\\pi}{2}-\\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\dfrac{1 + 11x^2}{10x}\\\\\\\\Big)\\\\\\\\)\`}, for all \\\\(x>0\\\\) </li>\\r\\n                <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                    on:introstart={() => {isActive = -1}}\\r\\n                    on:introend={() => {isActive = 1}}\\r\\n                    on:outroend={() => {isActive = -1}}> {\`\\\\\\\\(\\\\\\\\lim_{n\\\\\\\\to \\\\\\\\infty}\\\\\\\\cot(S_n(x)) = x\\\\\\\\)\`}, for all \\\\(x>0\\\\) </li>\\r\\n                <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                    on:introstart={() => {isActive = -1}}\\r\\n                    on:introend={() => {isActive = 1}}\\r\\n                    on:outroend={() => {isActive = -1}}> The equation {\`\\\\\\\\(S_3(x)=\\\\\\\\dfrac{\\\\\\\\pi}{4}\\\\\\\\)\`} has a root in \\\\((0,\\\\infty)\\\\)</li>\\r\\n                <li class=\\"{$presentationMode && isActive === 1 ? 'currentActive': ''}\\" \\r\\n                    transition:fly|global=\\"{{ x: 200, duration: 1000}}\\"\\r\\n                    on:introstart={() => {isActive = -1}}\\r\\n                    on:introend={() => {isActive = 1}}\\r\\n                    on:outroend={() => {isActive = -1}}> {\`\\\\\\\\(\\\\\\\\tan(S_n(x))\\\\\\\\leq \\\\\\\\dfrac{1}{2}\\\\\\\\)\`}, for all \\\\(n\\\\geq 1\\\\) and \\\\(x > 0\\\\) </li>\\r\\n            </ol>\\r\\n        {/if}\\r\\n        <section>\\r\\n            {#if !$presentationMode || $currentSlide >= 2}\\r\\n                <h2 class=\\"{$presentationMode && isActive === 2 ? 'currentActive': ''}\\" \\r\\n                    transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                    on:introstart={() => {isActive = -1}}\\r\\n                    on:introend={() => {isActive = 2}}\\r\\n                    on:outroend={() => {isActive = -1}}>Concepts</h2>\\r\\n                <p class=\\"{$presentationMode && isActive === 2 ? 'currentActive': ''}\\" \\r\\n                    transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                    on:introstart={() => {isActive = -1}}\\r\\n                    on:introend={() => {isActive = 2}}\\r\\n                    on:outroend={() => {isActive = -1}}>\\r\\n                    Seems like an ugly sum. Try to see any pattern that gives difference of terms. Then, in-between terms cancel out.\\r\\n                </p>\\r\\n            {/if}\\r\\n        </section>\\r\\n        <section>\\r\\n            {#if !$presentationMode || $currentSlide >= 3}\\r\\n            <h2 class=\\"{$presentationMode && isActive === 3 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 3}}\\r\\n                on:outroend={() => {isActive = -1}}>Solution</h2>\\r\\n            <h4 class=\\"{$presentationMode && isActive === 3 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 3}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                Step 1\\r\\n            </h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 3 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 3}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                Simplify the sum.\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{eqnarray}\\r\\n                        \\\\\\\\cot^{-1}\\\\\\\\Big(\\\\\\\\frac{1 + k(k + 1)x^2}{x}\\\\\\\\Big) &=& \\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{x}{1 + k(k + 1)x^2}\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                        &=& \\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{(k+1)x - kx}{1 + kx\\\\\\\\cdot (k + 1)x}\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                        &=& \\\\\\\\tan^{-1}(k + 1)x - \\\\\\\\tan^{-1}kx\\r\\n                    \\\\\\\\end{eqnarray}\\r\\n                \\\\\\\\]\`}\\r\\n                Nice! This is promising.\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    S_n(x) &= \\\\\\\\sum_{k = 1}^n\\\\\\\\cot^{-1}\\\\\\\\Big(\\\\\\\\frac{1 + k(k + 1)x^2}{x}\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\sum_{k = 1}^n\\\\\\\\Big(\\\\\\\\tan^{-1}(k + 1)x - \\\\\\\\tan^{-1}kx\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\tan^{-1}(n+1)x - \\\\\\\\tan^{-1}x\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{nx}{1 + (n+1)x^2}\\\\\\\\Big)\\r\\n                    \\\\\\\\end{aligned}\\r\\n                    \\\\\\\\]\`}\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 4}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 4 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 4}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 3: 1.</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 4 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 4}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    S_{10}(x) &= \\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{10x}{1 + 11x^2}\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\frac{\\\\\\\\pi}{2} - \\\\\\\\cot^{-1}\\\\\\\\Big(\\\\\\\\frac{10x}{1 + 11x^2}\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\frac{\\\\\\\\pi}{2} - \\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{1 + 11x^2}{10x}\\\\\\\\Big)\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 5}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 5 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive =5}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 3: 2.</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 5 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive =5}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    \\\\\\\\lim_{n\\\\\\\\to \\\\\\\\infty}\\\\\\\\cot(S_n(x)) &= \\\\\\\\lim_{n\\\\\\\\to \\\\\\\\infty}\\\\\\\\cot\\\\\\\\Big(\\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{nx}{1 + (n+1)x^2}\\\\\\\\Big)\\\\\\\\Big)\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\lim_{n\\\\\\\\to \\\\\\\\infty} \\\\\\\\frac{1 + (n + 1)x^2}{nx}\\\\\\\\\\\\\\\\\\r\\n                    &= x\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 6}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 6 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 6}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 3: 3.</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 6 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive =6}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    S_3(x) &= \\\\\\\\frac{\\\\\\\\pi}{4}\\\\\\\\\\\\\\\\\\r\\n                    \\\\\\\\tan^{-1}\\\\\\\\Big(\\\\\\\\frac{3x}{1 + 4x^2}\\\\\\\\Big) &= \\\\\\\\frac{\\\\\\\\pi}{4}\\\\\\\\\\\\\\\\\\r\\n                    \\\\\\\\frac{3x}{1 + 4x^2} &= 1\\\\\\\\\\\\\\\\\\r\\n                    4x^2 - 3x + 1 &= 0\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n                has no real roots.\\r\\n            </p>\\r\\n            {/if}\\r\\n            {#if !$presentationMode || $currentSlide >= 7}\\r\\n            <h4 class=\\"{$presentationMode && isActive === 7 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 7}}\\r\\n                on:outroend={() => {isActive = -1}}>Step 3: 4</h4>\\r\\n            <p class=\\"{$presentationMode && isActive === 7 ? 'currentActive': ''}\\" \\r\\n                transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\"\\r\\n                on:introstart={() => {isActive = -1}}\\r\\n                on:introend={() => {isActive = 7}}\\r\\n                on:outroend={() => {isActive = -1}}>\\r\\n                {\`\\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    \\\\\\\\tan(S_n(x)) &= \\\\\\\\frac{nx}{1 + (n + 1)x^2}\\\\\\\\\\\\\\\\\\r\\n                    \\\\\\\\tan(S_n(1)) &= \\\\\\\\frac{n}{n + 2}\\\\\\\\\\\\\\\\\\r\\n                    &= \\\\\\\\frac{1}{1 + 2/n}\\\\\\\\\\\\\\\\\\r\\n                    &\\\\\\\\geq\\\\\\\\frac{1}{2}, \\\\\\\\text{ for } n\\\\\\\\geq 2\\r\\n                    \\\\\\\\end{aligned}\\r\\n                \\\\\\\\]\`}\\r\\n            </p>\\r\\n            <p transition:fly|global=\\"{{ x: 200, duration: 1000 }}\\">\\r\\n                Only options 1 and 2 are correct.\\r\\n            </p>\\r\\n            {/if}\\r\\n        </section>\\r\\n    </article>\\r\\n    "],"names":[],"mappings":"AAwBI,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IACf,CAEA,qBAAQ,CACJ,OAAO,CAAE,KAEb,CAEA,uBAAU,CACN,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,IAAI,CAAC,CAAC,IAAI,CAAC,CAEvB,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GACrB,CACA,uBAAS,mBAAoB,CACzB,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACZ,CACA,4BAAe,CACX,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,EACpB,CACA,kBAAK,CACD,UAAU,CAAE,KAChB,CACA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,kBAAkB,CAAE,GAAG,CAAC,GAC5B"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-1hick8_START -->${$$result.title = `<title>Mathematics Question 5</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="How do we define base or fundamental units? How long really is one meter?"><!-- HEAD_svelte-1hick8_END -->`, ""} <article class="${["svelte-qqtpro", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}><h1 data-svelte-h="svelte-pwhcrf">Question 5 [JEE adv, 2021]</h1> ${!$presentationMode || $currentSlide >= 0 ? `<p class="${"question " + escape(
    $presentationMode && isActive === 0 ? "currentActive" : "",
    true
  ) + " svelte-qqtpro"}">For any positive integer \\(n\\), let \\(S_n : (0,\\infty)\\to ${escape(TeX.bbR)}\\) be defined by \\[S_n(x) = ${escape(TeX.sum("k=1", "n"))}${escape(TeX.acot)}\\Big(${escape(TeX.frac("1 + k(k + 1)x^2", "x"))}\\Big)\\] where for any \\(x${escape(TeX.inR)}, ${escape(TeX.acot)}(x)\\in (0, \\pi)\\) and \\(${escape(TeX.atan)}(x)\\in \\Big(-${escape(TeX.piby2)}, ${escape(TeX.piby2)}\\Big)\\). Then which of the following statements is (are) <strong data-svelte-h="svelte-1lk9po0">True</strong>?</p>` : ``} ${!$presentationMode || $currentSlide >= 1 ? `<ol class="${escape(null_to_empty(optionStyle), true) + " svelte-qqtpro"}"><li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\(S_{10}(x) = \\dfrac{\\pi}{2}-\\tan^{-1}\\Big(\\dfrac{1 + 11x^2}{10x}\\Big)\\)`)}, for all \\(x&gt;0\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\(\\lim_{n\\to \\infty}\\cot(S_n(x)) = x\\)`)}, for all \\(x&gt;0\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">The equation ${escape(`\\(S_3(x)=\\dfrac{\\pi}{4}\\)`)} has a root in \\((0,\\infty)\\)</li> <li class="${escape(
    null_to_empty($presentationMode && isActive === 1 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\(\\tan(S_n(x))\\leq \\dfrac{1}{2}\\)`)}, for all \\(n\\geq 1\\) and \\(x &gt; 0\\)</li></ol>` : ``} <section>${!$presentationMode || $currentSlide >= 2 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Concepts</h2> <p class="${escape(
    null_to_empty($presentationMode && isActive === 2 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Seems like an ugly sum. Try to see any pattern that gives difference of terms. Then, in-between terms cancel out.</p>` : ``}</section> <section>${!$presentationMode || $currentSlide >= 3 ? `<h2 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Solution</h2> <h4 class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 1</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 3 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Simplify the sum.
                ${escape(`\\[
                    \\begin{eqnarray}
                        \\cot^{-1}\\Big(\\frac{1 + k(k + 1)x^2}{x}\\Big) &=& \\tan^{-1}\\Big(\\frac{x}{1 + k(k + 1)x^2}\\Big)\\\\
                        &=& \\tan^{-1}\\Big(\\frac{(k+1)x - kx}{1 + kx\\cdot (k + 1)x}\\Big)\\\\
                        &=& \\tan^{-1}(k + 1)x - \\tan^{-1}kx
                    \\end{eqnarray}
                \\]`)}
                Nice! This is promising.
                ${escape(`\\[
                    \\begin{aligned}
                    S_n(x) &= \\sum_{k = 1}^n\\cot^{-1}\\Big(\\frac{1 + k(k + 1)x^2}{x}\\Big)\\\\
                    &= \\sum_{k = 1}^n\\Big(\\tan^{-1}(k + 1)x - \\tan^{-1}kx\\Big)\\\\
                    &= \\tan^{-1}(n+1)x - \\tan^{-1}x\\\\
                    &= \\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)
                    \\end{aligned}
                    \\]`)}</p>` : ``} ${!$presentationMode || $currentSlide >= 4 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 1.</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 4 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    S_{10}(x) &= \\tan^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\cot^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\tan^{-1}\\Big(\\frac{1 + 11x^2}{10x}\\Big)
                    \\end{aligned}
                \\]`)}</p>` : ``} ${!$presentationMode || $currentSlide >= 5 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 2.</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 5 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    \\lim_{n\\to \\infty}\\cot(S_n(x)) &= \\lim_{n\\to \\infty}\\cot\\Big(\\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)\\Big)\\\\
                    &= \\lim_{n\\to \\infty} \\frac{1 + (n + 1)x^2}{nx}\\\\
                    &= x
                    \\end{aligned}
                \\]`)}</p>` : ``} ${!$presentationMode || $currentSlide >= 6 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 3.</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 6 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    S_3(x) &= \\frac{\\pi}{4}\\\\
                    \\tan^{-1}\\Big(\\frac{3x}{1 + 4x^2}\\Big) &= \\frac{\\pi}{4}\\\\
                    \\frac{3x}{1 + 4x^2} &= 1\\\\
                    4x^2 - 3x + 1 &= 0
                    \\end{aligned}
                \\]`)}
                has no real roots.</p>` : ``} ${!$presentationMode || $currentSlide >= 7 ? `<h4 class="${escape(
    null_to_empty($presentationMode && isActive === 7 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">Step 3: 4</h4> <p class="${escape(
    null_to_empty($presentationMode && isActive === 7 ? "currentActive" : ""),
    true
  ) + " svelte-qqtpro"}">${escape(`\\[
                    \\begin{aligned}
                    \\tan(S_n(x)) &= \\frac{nx}{1 + (n + 1)x^2}\\\\
                    \\tan(S_n(1)) &= \\frac{n}{n + 2}\\\\
                    &= \\frac{1}{1 + 2/n}\\\\
                    &\\geq\\frac{1}{2}, \\text{ for } n\\geq 2
                    \\end{aligned}
                \\]`)}</p> <p data-svelte-h="svelte-1eisgdd">Only options 1 and 2 are correct.</p>` : ``}</section></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DSp7W1Fc.js.map
