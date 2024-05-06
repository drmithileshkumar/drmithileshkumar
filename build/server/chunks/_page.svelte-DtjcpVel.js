import { a as subscribe, c as null_to_empty } from './utils-DH7689cv.js';
import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from './ssr-Cv_bEuJL.js';
import { p as presentationMode, c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, a as presentation } from './stores3-CTOyxJGl.js';
import { P as Practice } from './Practice-C1EGdlLk.js';
import { a as randInt } from './common-DUaUEtOJ.js';
import { Q as Quadratic } from './quadratic-DFkKrtUl.js';
import { p as page } from './stores-CD1QeJjc.js';
import { I as Item, P, L as Li } from './Image.svelte_svelte_type_style_lang-C34Ig10s.js';
import { H as H3 } from './H3-DnFuS8Tv.js';
import './index2-B3zlhmO5.js';
import './stores4-rYFnb3Dq.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const css = {
  code: ".display.svelte-1qvfvsn{position:relative;position:-webkit-sticky}.youtube.svelte-1qvfvsn{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start\r\n	}article.svelte-1qvfvsn{position:relative;padding:0.5em}.absolute.svelte-1qvfvsn{margin:auto;width:100%;height:90vh;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1qvfvsn::-webkit-scrollbar{width:0;height:0}.pad.svelte-1qvfvsn{min-height:150px}.thumbnail.svelte-1qvfvsn{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1qvfvsn{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.grid.svelte-1qvfvsn{display:grid;grid-template-columns:auto 420px}.flex.svelte-1qvfvsn{display:flex;flex-direction:column-reverse}.contentpart.svelte-1qvfvsn{padding:0.5em}.gridBackground.svelte-1qvfvsn{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport Practice from '$lib/utils/practiceproblem/Practice.svelte';\\r\\n\\timport Message from '$lib/ui/Message.svelte';\\r\\n\\timport { Point2D } from '$lib/utils/common/point2d';\\r\\n\\timport { randNum, randInt } from '$lib/utils/common/common';\\r\\n\\timport { Quadratic } from '$lib/utils/common/quadratic';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport P from '$lib/presentation/P.svelte';\\r\\n\\timport H1 from '$lib/presentation/H1.svelte';\\r\\n\\timport H2 from '$lib/presentation/H2.svelte';\\r\\n\\timport H3 from '$lib/presentation/H3.svelte';\\r\\n\\timport Li from '$lib/presentation/Li.svelte';\\r\\n\\timport Item from '$lib/presentation/Item.svelte';\\r\\n\\timport Image from '$lib/presentation/Image.svelte';\\r\\n\\tonMount(() => {\\r\\n\\t\\t$selectedChapter = 'Sets';\\r\\n\\t\\t$selectedSection = 'The empty set';\\r\\n\\t\\t$slideCounter = 10;\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n\\tlet problemset = {\\r\\n\\t\\ts: '',\\r\\n\\t\\to: {\\r\\n\\t\\t\\tA: '',\\r\\n\\t\\t\\tB: '',\\r\\n\\t\\t\\tC: '',\\r\\n\\t\\t\\tD: ''\\r\\n\\t\\t},\\r\\n\\t\\tc: ''\\r\\n\\t};\\r\\n\\tconst generateProblem = (problemnumber) => {\\r\\n\\t\\tlet N = 2;\\r\\n\\t\\tproblemnumber = problemnumber % N;\\r\\n\\t\\tlet choices = ['A', 'B', 'C', 'D'];\\r\\n\\t\\tlet correctChoiceIndex = Math.floor(Math.random() * 4);\\r\\n\\t\\tproblemset.c = choices[correctChoiceIndex];\\r\\n\\t\\tlet ans;\\r\\n\\t\\tlet values = [0, 0, 0, 0];\\r\\n\\t\\tswitch (problemnumber) {\\r\\n\\t\\t\\tcase 0: {\\r\\n\\t\\t\\t\\tlet m = randInt(20, 1);\\r\\n\\t\\t\\t\\tm = Math.random() > 0.5 ? -m : m;\\r\\n\\t\\t\\t\\tlet n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);\\r\\n\\t\\t\\t\\tlet m1 = randInt(20, 2);\\r\\n\\t\\t\\t\\tlet n1 = randInt(Math.floor(m1 / 2), 0);\\r\\n\\t\\t\\t\\tlet m2 = randInt(20, 2);\\r\\n\\t\\t\\t\\tlet n2 = randInt(Math.floor(m2 / 2), 0);\\r\\n\\t\\t\\t\\tlet m3 = randInt(20, 2);\\r\\n\\t\\t\\t\\tlet n3 = randInt(Math.floor(m3 / 2), 0);\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\${n} < x < \${m}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\${n1} < x < \${m1}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\${n2} < x < \${m2}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\${n3} < x < \${m3}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Which of the following will correspond to an empty set?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 1: {\\r\\n\\t\\t\\t\\tlet min = -10;\\r\\n\\t\\t\\t\\tlet max = 10;\\r\\n\\t\\t\\t\\tlet q1 = new Quadratic();\\r\\n\\t\\t\\t\\tq1.complex(-10, 10);\\r\\n\\t\\t\\t\\tlet q2 = new Quadratic();\\r\\n\\t\\t\\t\\tq2.real(-10, 10);\\r\\n\\t\\t\\t\\tlet q3 = new Quadratic();\\r\\n\\t\\t\\t\\tq3.real(-10, 10);\\r\\n\\t\\t\\t\\tlet q4 = new Quadratic();\\r\\n\\t\\t\\t\\tq4.real(-10, 10);\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = q1.str();\\r\\n\\t\\t\\t\\tvalues[1] = q2.str();\\r\\n\\t\\t\\t\\tvalues[2] = q3.str();\\r\\n\\t\\t\\t\\tvalues[3] = q4.str();\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] =\\r\\n\\t\\t\\t\\t\\t\\t\`\\\\\\\\(\\\\\\\\{x:\` + values[i] + '=0~\\\\\\\\) and ' + \`\\\\\\\\(~x~\\\\\\\\) is real.\\\\\\\\(\\\\\\\\}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Which of the following will correspond to an empty set?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tproblemset = problemset;\\r\\n\\t\\treturn problemset;\\r\\n\\t};\\r\\n\\tlet DW;\\r\\n\\t$: splitMode = !$presentationMode && DW > 800;\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{$selectedSection}</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"The empty set\\" />\\r\\n</svelte:head>\\r\\n<article class:absolute={$presentationMode} bind:this={$presentation} class=\\"{$presentationMode ? 'gridBackground':''}\\">\\r\\n\\t{#if $presentationMode && $currentSlide === -2}\\r\\n\\t\\t<div class=\\"thumbnail\\">\\r\\n\\t\\t\\t<p class=\\"statement\\">The empty set</p>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if !$presentationMode || $currentSlide >= -1}\\r\\n\\t\\t<h1>{$selectedSection}</h1>\\r\\n\\t{/if}\\r\\n\\t<div class=\\"display {splitMode ? 'grid' : 'flex'}\\" bind:clientWidth={DW}>\\r\\n\\t\\t<section class=\\"contentpart\\">\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={0}>\\r\\n\\t\\t\\t\\t\\t<P isActive={0}\\r\\n\\t\\t\\t\\t\\t\\t>The simplest possible set is one that does not contain any element at all.</P\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={1}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\tA set which does not contain any element is called the <strong>empty</strong> set.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={2}>\\r\\n\\t\\t\\t\\t\\t\\t\\tAn empty set is also called the <em>null set</em> or the <em>void set</em>.\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={3}>\\r\\n\\t\\t\\t\\t\\t\\t\\tAn empty set is denoted either as {'{ }'} or \\\\(\\\\varphi\\\\) (read as \\"phi\\").\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={4}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={4}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={5}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={5}>\\r\\n\\t\\t\\t\\t\\t\\t\\tThe set of positive numbers less than 0 contains no element. Hence, it is an empty set\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={6}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={6}>The set of apples in an empty basket is an empty set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={7}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={7}>Set of prime numbers divisible by 4 is an empty set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={8}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={8}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set of real roots of the equation \\\\(x^2 + 1 = 0\\\\) is an empty set.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section />\\r\\n\\t\\t</section>\\r\\n        {#if !$presentationMode}\\r\\n            <div class=\\"youtube\\">\\r\\n                <iframe\\r\\n                    width=\\"420\\"\\r\\n                    height=\\"300\\"\\r\\n                    src=\\"https://www.youtube.com/embed/-VP7utgjA8I\\"\\r\\n                    title=\\"YouTube video player\\"\\r\\n                    frameborder=\\"0\\"\\r\\n                    allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\"\\r\\n                    allowfullscreen\\r\\n                />\\r\\n            </div>\\r\\n        {/if}\\r\\n\\t</div>\\r\\n\\t\\r\\n\\t<Item item={9}>\\r\\n\\t\\t<section>\\r\\n\\t\\t\\t<h2>Practice</h2>\\r\\n\\t\\t\\t<Practice {generateProblem} />\\r\\n\\t\\t</section>\\r\\n\\t</Item>\\r\\n\\r\\n\\t{#if $presentationMode && $currentSlide >= 2}\\r\\n\\t\\t<div class=\\"pad\\" />\\r\\n\\t{/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t.display {\\r\\n        position: relative;\\r\\n        position: -webkit-sticky;\\r\\n    }\\r\\n\\t.youtube {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 5em;\\r\\n\\t\\t/* box-shadow: 0 0 3px gray;\\r\\n\\t\\tbackground-color: white; */\\r\\n\\t\\tz-index: 10;\\r\\n        align-self: flex-start\\r\\n\\t}\\r\\n\\tarticle {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t\\t/* in: all 1s; */\\r\\n\\t}\\r\\n\\t/* aside {\\r\\n            background-color: rgb(230, 228, 228);\\r\\n            cursor: pointer;\\r\\n            width: 1em;\\r\\n        } */\\r\\n\\t.absolute {\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\t/* width: 90vw; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 90vh;\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\tpadding: 0 1em 0 1em;\\r\\n\\t}\\r\\n\\t.absolute::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.pad {\\r\\n\\t\\tmin-height: 150px;\\r\\n\\t}\\r\\n\\t/*  \\r\\n        figure {\\r\\n            \\r\\n            width: 300px;\\r\\n        } */\\r\\n\\r\\n\\t.thumbnail {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\t.statement {\\r\\n\\t\\tbackground: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));\\r\\n\\t\\tcolor: rgb(246, 246, 246);\\r\\n\\t\\ttext-shadow: 1px 1px 3px rgb(4, 4, 4);\\r\\n\\t\\tbox-shadow: 1px 1px 3px rgb(129, 128, 128);\\r\\n\\t\\tpadding: 1em;\\r\\n\\t}\\r\\n    .grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: auto 420px;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: column-reverse;\\r\\n    }\\r\\n    .contentpart {\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n\\t.gridBackground {\\r\\n\\t\\tbackground-image: url('/background.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2MC,uBAAS,CACF,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,cACd,CACH,uBAAS,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CAGR,OAAO,CAAE,EAAE,CACL,UAAU,CAAE,UAAU;AAC9B,CAAC,CACA,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAEV,CAMA,wBAAU,CACT,MAAM,CAAE,IAAI,CAEZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAGZ,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB,CACA,wBAAS,mBAAoB,CAC5B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,mBAAK,CACJ,UAAU,CAAE,KACb,CAOA,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CACA,yBAAW,CACV,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC1E,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,OAAO,CAAE,GACV,CACG,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAChC,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACpB,CACA,2BAAa,CACT,OAAO,CAAE,KACb,CACH,8BAAgB,CACf,gBAAgB,CAAE,sBAAsB,CACxC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let splitMode;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let problemset = {
    s: "",
    o: { A: "", B: "", C: "", D: "" },
    c: ""
  };
  const generateProblem = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        let m1 = randInt(20, 2);
        let n1 = randInt(Math.floor(m1 / 2), 0);
        let m2 = randInt(20, 2);
        let n2 = randInt(Math.floor(m2 / 2), 0);
        let m3 = randInt(20, 2);
        let n3 = randInt(Math.floor(m3 / 2), 0);
        values[0] = `\\(${n} < x < ${m}\\)`;
        values[1] = `\\(${n1} < x < ${m1}\\)`;
        values[2] = `\\(${n2} < x < ${m2}\\)`;
        values[3] = `\\(${n3} < x < ${m3}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following will correspond to an empty set?`;
        break;
      }
      case 1: {
        let q1 = new Quadratic();
        q1.complex(-10, 10);
        let q2 = new Quadratic();
        q2.real(-10, 10);
        let q3 = new Quadratic();
        q3.real(-10, 10);
        let q4 = new Quadratic();
        q4.real(-10, 10);
        values[0] = q1.str();
        values[1] = q2.str();
        values[2] = q3.str();
        values[3] = q4.str();
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = `\\(\\{x:` + values[i] + `=0~\\) and \\(~x~\\) is real.\\(\\}\\)`;
        }
        problemset.s = `Which of the following will correspond to an empty set?`;
        break;
      }
    }
    problemset = problemset;
    return problemset;
  };
  let DW;
  $$result.css.add(css);
  splitMode = !$presentationMode && DW > 800;
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1oiqp9i_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="The empty set"><!-- HEAD_svelte-1oiqp9i_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-1qvfvsn",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-1qvfvsn" data-svelte-h="svelte-1t5wc5l"><p class="statement svelte-1qvfvsn">The empty set</p></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-1qvfvsn"}"><section class="contentpart svelte-1qvfvsn"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `The simplest possible set is one that does not contain any element at all.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `A set which does not contain any element is called the <strong data-svelte-h="svelte-36f0v5">empty</strong> set.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `An empty set is also called the <em data-svelte-h="svelte-119sll7">null set</em> or the <em data-svelte-h="svelte-thac94">void set</em>.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `An empty set is denoted either as ${escape("{ }")} or \\(\\varphi\\) (read as &quot;phi&quot;).`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 4 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The set of positive numbers less than 0 contains no element. Hence, it is an empty set`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `The set of apples in an empty basket is an empty set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Set of prime numbers divisible by 4 is an empty set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `The set of real roots of the equation \\(x^2 + 1 = 0\\) is an empty set.`;
        }
      })}`;
    }
  })}</ul></section> <section></section></section> ${!$presentationMode ? `<div class="youtube svelte-1qvfvsn" data-svelte-h="svelte-kyxfk6"><iframe width="420" height="300" src="https://www.youtube.com/embed/-VP7utgjA8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``}</div> ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })} ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-1qvfvsn"></div>` : ``} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DtjcpVel.js.map
