import { a as subscribe, d as null_to_empty } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores4.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { S as Sets } from "../../../../../../../chunks/sets.js";
import { a as randInt } from "../../../../../../../chunks/common.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
const css = {
  code: ".display.svelte-bh5c3l{position:relative;position:-webkit-sticky}.youtube.svelte-bh5c3l{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start\r\n	}article.svelte-bh5c3l{position:relative;padding:0.5em}.absolute.svelte-bh5c3l{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-bh5c3l::-webkit-scrollbar{width:0;height:0}.pad.svelte-bh5c3l{min-height:150px}.thumbnail.svelte-bh5c3l{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-bh5c3l{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);padding:1em;background-image:url('/notes/maths/sets/equal/thumbnail.svg');background-repeat:no-repeat;background-position:center}.grid.svelte-bh5c3l{display:grid;grid-template-columns:auto 420px}.flex.svelte-bh5c3l{display:flex;flex-direction:column-reverse}.contentpart.svelte-bh5c3l{padding:0.5em}.gridBackground.svelte-bh5c3l{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport Practice from '$lib/utils/practiceproblem/Practice.svelte';\\r\\n\\timport Message from '$lib/ui/Message.svelte';\\r\\n    import {Sets} from '$lib/utils/common/sets';\\r\\n\\timport { Point2D } from '$lib/utils/common/point2d';\\r\\n\\timport { randNum, randInt } from '$lib/utils/common/common';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n    import P from '$lib/presentation/P.svelte';\\r\\n\\timport H1 from '$lib/presentation/H1.svelte';\\r\\n\\timport H2 from '$lib/presentation/H2.svelte';\\r\\n\\timport H3 from '$lib/presentation/H3.svelte';\\r\\n\\timport Li from '$lib/presentation/Li.svelte';\\r\\n\\timport Item from '$lib/presentation/Item.svelte';\\r\\n\\timport Image from '$lib/presentation/Image.svelte';\\r\\n\\tonMount(() => {\\r\\n\\t\\t$selectedChapter = 'Sets';\\r\\n\\t\\t$selectedSection = 'Equal sets';\\r\\n\\t\\t$slideCounter = 11;\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n\\tlet problemset = {\\r\\n\\t\\ts: '',\\r\\n\\t\\to: {\\r\\n\\t\\t\\tA: '',\\r\\n\\t\\t\\tB: '',\\r\\n\\t\\t\\tC: '',\\r\\n\\t\\t\\tD: ''\\r\\n\\t\\t},\\r\\n\\t\\tc: ''\\r\\n\\t};\\r\\n\\tconst generateProblem = (problemnumber) => {\\r\\n\\t\\tlet N = 2;\\r\\n\\t\\tproblemnumber = problemnumber % N;\\r\\n\\t\\tlet choices = ['A', 'B', 'C', 'D'];\\r\\n\\t\\tlet correctChoiceIndex = Math.floor(Math.random() * 4);\\r\\n\\t\\tproblemset.c = choices[correctChoiceIndex];\\r\\n\\t\\tlet ans;\\r\\n\\t\\tlet values = [0, 0, 0, 0];\\r\\n\\t\\tswitch (problemnumber) {\\r\\n\\t\\t\\tcase 0: {\\r\\n\\t\\t\\t\\tlet n = randInt(20, 1);\\r\\n\\t\\t\\t\\tlet m = randInt(n + 1, n + 10) + 10;\\r\\n\\t\\t\\t\\tlet k = randInt(8, 2);\\r\\n\\t\\t\\t\\tlet s = new Sets();\\r\\n\\t\\t\\t\\ts.randomSet(n, m, k);\\r\\n\\t\\t\\t\\tlet sbad = new Sets();\\r\\n\\t\\t\\t\\tsbad.randomSet(n, n + 20, k);\\r\\n\\t\\t\\t\\tlet poly = '';\\r\\n\\t\\t\\t\\tfor (let i = 0; i < s.e.length; i++) {\\r\\n\\t\\t\\t\\t\\tpoly = poly + \`(x - \${s.e[i]})\`;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\${s.str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\${sbad.str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\${sbad.randomSubset().str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\${sbad.randomSubset().str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Let \\\\\\\\(R\\\\\\\\) be the set of roots of the polynomial \\\\\\\\[\${poly} = 0\\\\\\\\] Which of sets is equal to \\\\\\\\(R\\\\\\\\)?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n            case 1: {\\r\\n                let c = randInt(20, 2);\\r\\n                let b = randInt(20, 2);\\r\\n                let l = randInt(20, 2);\\r\\n                let nmin = randInt(1,-1);\\r\\n                let nmax = randInt(5, 4);\\r\\n                let a = c;\\r\\n                let d = b - c * l;\\r\\n\\t\\t\\t\\tlet mmin = nmin + l;\\r\\n                let mmax = nmax + l;\\r\\n                let sign = d < 0 ? '' : '+';\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\\\\\\\\{x: x = \${c}m \${sign} \${d},~\${mmin}\\\\\\\\leq m\\\\\\\\leq \${mmax}\\\\\\\\}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\\\\\\\\{x: x = \${c}m \${sign} \${d},~\${nmin + 1}\\\\\\\\leq m\\\\\\\\leq \${nmax}\\\\\\\\}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\\\\\\\\{x: x = \${c}m \${sign} \${d},~\${nmin}\\\\\\\\leq m\\\\\\\\leq \${nmax}\\\\\\\\}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\\\\\\\\{x: x = \${c}m \${sign} \${d},~\${mmin}\\\\\\\\leq m\\\\\\\\leq \${mmax + 1}\\\\\\\\}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Let \\\\\\\\(A = \\\\\\\\{x: x = \${a}n + \${b}, \${nmin}\\\\\\\\leq n\\\\\\\\leq \${nmax}\\\\\\\\}\\\\\\\\). Then which of the set is equal to \\\\\\\\(A\\\\\\\\)?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tproblemset = problemset;\\r\\n\\t\\treturn problemset;\\r\\n\\t};\\r\\n    let DW;\\r\\n\\t$: splitMode = !$presentationMode && DW > 800;\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{$selectedSection}</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Equal sets\\" />\\r\\n</svelte:head>\\r\\n<article class:absolute={$presentationMode} bind:this={$presentation} class=\\"{$presentationMode ? 'gridBackground':''}\\">\\r\\n    {#if $presentationMode && $currentSlide === -2}\\r\\n\\t\\t<div class=\\"thumbnail\\">\\r\\n\\t\\t\\t<div class=\\"statement\\">\\r\\n\\t\\t\\t\\t<p>Equal sets</p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if !$presentationMode || $currentSlide >= -1}\\r\\n\\t\\t<h1>{$selectedSection}</h1>\\r\\n\\t{/if}\\r\\n    <div class=\\"display {splitMode ? 'grid' : 'flex'}\\" bind:clientWidth={DW}>\\r\\n        <section class=\\"contentpart\\">\\r\\n            <section>\\r\\n                <Item item={0}>\\r\\n\\t\\t\\t\\t\\t<P isActive={0}>So far, we have talked that order of elements in a set do not matter. Repeating an element in a set does not change the set either. Now we formally define what do we mean by the <em>same</em> set.</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n                <Item item={1}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\tTwo sets \\\\(A\\\\) and \\\\(B\\\\) are said to be <em>equal</em> if they have exactly the same\\r\\n                        elements. Otherwise, the sets are said to be <em>unequal</em>.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={2}>\\r\\n\\t\\t\\t\\t\\t\\t\\tIf \\\\(A\\\\) and \\\\(B\\\\) are equal sets, we write \\\\(A = B\\\\).\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={3}>If \\\\(A\\\\) and \\\\(B\\\\) are unequal sets, we write \\\\(A \\\\neq B\\\\).</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n            </section>\\r\\n        \\r\\n            <section>\\r\\n                <Item item={4}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={4}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={5}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={5}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\{1, 2, 3\\\\\\\\} = \\\\\\\\{2, 1, 3\\\\\\\\} = \\\\\\\\{2, 1, 3, 3, 1\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={6}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={6}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\{E, F, R\\\\\\\\} = \\\\\\\\{x: x \\\\\\\\)\`} is a letter in FREE{\`\\\\\\\\(\\\\\\\\}\\\\\\\\)\`}.\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={7}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={7}>\\r\\n                            {\`\\\\\\\\(\\\\\\\\{x: x = 3n + 1, 1\\\\\\\\leq n\\\\\\\\leq 4\\\\\\\\} = \\\\\\\\{x: x = 3m - 2, 2\\\\\\\\leq m\\\\\\\\leq 5\\\\\\\\} \\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n            </section>\\r\\n            <section>\\r\\n                <Item item={8}>\\r\\n                    <P class=\\"question\\" isActive={8}>Consider two sets {\`\\\\\\\\(A = \\\\\\\\{x: x=3r-1, r\\\\\\\\in Z\\\\\\\\}\\\\\\\\)\`} and {\`\\\\\\\\(B = \\\\\\\\{x: x=3s + 2, s\\\\\\\\in Z\\\\\\\\}\\\\\\\\)\`}. Is \\\\(A = B\\\\)?</P>\\r\\n                </Item>\\r\\n                <Item item={9}>\\r\\n                    <P class=\\"solution\\" isActive={9}>It is easy to check whether two finite sets are equal. Write them in Roster form and just compare their elements. How do we check equality of infinite sets? We need concept of <em>subsets</em>, which is the next topic. </P>\\r\\n                </Item>\\r\\n            </section>\\r\\n        </section>\\r\\n        {#if !$presentationMode}\\r\\n\\t\\t\\t<div class=\\"youtube\\">\\r\\n\\t\\t\\t\\t<iframe\\r\\n\\t\\t\\t\\t\\twidth=\\"420\\"\\r\\n\\t\\t\\t\\t\\theight=\\"300\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/jbBsClpZmPQ\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"YouTube video player\\"\\r\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\r\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\"\\r\\n\\t\\t\\t\\t\\tallowfullscreen\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n        {#if $presentationMode}\\r\\n            <div class=\\"slate\\">\\r\\n                \\r\\n            </div>\\r\\n        {/if}\\r\\n    </div>\\r\\n    <section>\\r\\n\\t\\t<Item item={10}>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<h2>Practice</h2>\\r\\n\\t\\t\\t\\t<Practice {generateProblem} />\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</Item>\\r\\n\\t</section>\\r\\n\\t{#if $presentationMode && $currentSlide >= 2}\\r\\n\\t\\t<div class=\\"pad\\" />\\r\\n\\t{/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t.display {\\r\\n        position: relative;\\r\\n        position: -webkit-sticky;\\r\\n    }\\r\\n\\t.youtube {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 5em;\\r\\n\\t\\t/* box-shadow: 0 0 3px gray;\\r\\n\\t\\tbackground-color: white; */\\r\\n\\t\\tz-index: 10;\\r\\n        align-self: flex-start\\r\\n\\t}\\r\\n\\tarticle {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.absolute {\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\t/* width: 90vw; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 600px;\\r\\n\\t\\t/* height: 90vh; */\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\tpadding: 0 1em 0 1em;\\r\\n\\t}\\r\\n\\t.absolute::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.pad {\\r\\n\\t\\tmin-height: 150px;\\r\\n\\t}\\r\\n\\t.thumbnail {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\t.statement {\\r\\n\\t\\tbackground: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));\\r\\n\\t\\tcolor: red;\\r\\n\\t\\ttext-shadow: 1px 1px 3px rgb(4, 4, 4);\\r\\n\\t\\t/* box-shadow: 1px 1px 3px rgb(129, 128, 128); */\\r\\n\\t\\tpadding: 1em;\\r\\n\\t\\tbackground-image: url('/notes/maths/sets/equal/thumbnail.svg');\\r\\n        background-repeat: no-repeat;\\r\\n        background-position: center;\\r\\n\\t}\\r\\n\\t.grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: auto 420px;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: column-reverse;\\r\\n    }\\r\\n    .contentpart {\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n\\t.gridBackground {\\r\\n\\t\\tbackground-image: url('/background.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqNC,sBAAS,CACF,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,cACd,CACH,sBAAS,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CAGR,OAAO,CAAE,EAAE,CACL,UAAU,CAAE,UAAU;AAC9B,CAAC,CACA,qBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KACV,CACA,uBAAU,CACT,MAAM,CAAE,IAAI,CAEZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CAIb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB,CACA,uBAAS,mBAAoB,CAC5B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,kBAAK,CACJ,UAAU,CAAE,KACb,CACA,wBAAW,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CACA,wBAAW,CACV,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC1E,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAErC,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,4CAA4C,CACxD,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAC5B,CACA,mBAAM,CACC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAChC,CACA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACpB,CACA,0BAAa,CACT,OAAO,CAAE,KACb,CACH,6BAAgB,CACf,gBAAgB,CAAE,sBAAsB,CACxC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAClB"}`
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
        let n = randInt(20, 1);
        let m = randInt(n + 1, n + 10) + 10;
        let k = randInt(8, 2);
        let s = new Sets();
        s.randomSet(n, m, k);
        let sbad = new Sets();
        sbad.randomSet(n, n + 20, k);
        let poly = "";
        for (let i = 0; i < s.e.length; i++) {
          poly = poly + `(x - ${s.e[i]})`;
        }
        values[0] = `\\(${s.str()}\\)`;
        values[1] = `\\(${sbad.str()}\\)`;
        values[2] = `\\(${sbad.randomSubset().str()}\\)`;
        values[3] = `\\(${sbad.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Let \\(R\\) be the set of roots of the polynomial \\[${poly} = 0\\] Which of sets is equal to \\(R\\)?`;
        break;
      }
      case 1: {
        let c = randInt(20, 2);
        let b = randInt(20, 2);
        let l = randInt(20, 2);
        let nmin = randInt(1, -1);
        let nmax = randInt(5, 4);
        let a = c;
        let d = b - c * l;
        let mmin = nmin + l;
        let mmax = nmax + l;
        let sign = d < 0 ? "" : "+";
        values[0] = `\\(\\{x: x = ${c}m ${sign} ${d},~${mmin}\\leq m\\leq ${mmax}\\}\\)`;
        values[1] = `\\(\\{x: x = ${c}m ${sign} ${d},~${nmin + 1}\\leq m\\leq ${nmax}\\}\\)`;
        values[2] = `\\(\\{x: x = ${c}m ${sign} ${d},~${nmin}\\leq m\\leq ${nmax}\\}\\)`;
        values[3] = `\\(\\{x: x = ${c}m ${sign} ${d},~${mmin}\\leq m\\leq ${mmax + 1}\\}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Let \\(A = \\{x: x = ${a}n + ${b}, ${nmin}\\leq n\\leq ${nmax}\\}\\). Then which of the set is equal to \\(A\\)?`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1mv7jwh_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Equal sets"><!-- HEAD_svelte-1mv7jwh_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-bh5c3l",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-bh5c3l" data-svelte-h="svelte-mzmfbe"><div class="statement svelte-bh5c3l"><p>Equal sets</p></div></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-bh5c3l"}"><section class="contentpart svelte-bh5c3l"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `So far, we have talked that order of elements in a set do not matter. Repeating an element in a set does not change the set either. Now we formally define what do we mean by the <em data-svelte-h="svelte-166noa8">same</em> set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `Two sets \\(A\\) and \\(B\\) are said to be <em data-svelte-h="svelte-dkksfq">equal</em> if they have exactly the same
                        elements. Otherwise, the sets are said to be <em data-svelte-h="svelte-czjgnh">unequal</em>.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `If \\(A\\) and \\(B\\) are equal sets, we write \\(A = B\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `If \\(A\\) and \\(B\\) are unequal sets, we write \\(A \\neq B\\).`;
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
          return `${escape(`\\(\\{1, 2, 3\\} = \\{2, 1, 3\\} = \\{2, 1, 3, 3, 1\\}\\)`)}`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `${escape(`\\(\\{E, F, R\\} = \\{x: x \\)`)} is a letter in FREE${escape(`\\(\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `${escape(`\\(\\{x: x = 3n + 1, 1\\leq n\\leq 4\\} = \\{x: x = 3m - 2, 2\\leq m\\leq 5\\} \\)`)}`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 8 }, {}, {
        default: () => {
          return `Consider two sets ${escape(`\\(A = \\{x: x=3r-1, r\\in Z\\}\\)`)} and ${escape(`\\(B = \\{x: x=3s + 2, s\\in Z\\}\\)`)}. Is \\(A = B\\)?`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "solution", isActive: 9 }, {}, {
        default: () => {
          return `It is easy to check whether two finite sets are equal. Write them in Roster form and just compare their elements. How do we check equality of infinite sets? We need concept of <em data-svelte-h="svelte-1czdgdf">subsets</em>, which is the next topic.`;
        }
      })}`;
    }
  })}</section></section> ${!$presentationMode ? `<div class="youtube svelte-bh5c3l" data-svelte-h="svelte-1n5uzq"><iframe width="420" height="300" src="https://www.youtube.com/embed/jbBsClpZmPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``} ${$presentationMode ? `<div class="slate" data-svelte-h="svelte-idn70a"></div>` : ``}</div> <section>${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section> ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-bh5c3l"></div>` : ``} </article>`;
});
export {
  Page as default
};
