import { s as subscribe, d as null_to_empty } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores3.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { S as Sets } from "../../../../../../../chunks/sets.js";
import { a as randInt } from "../../../../../../../chunks/common.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../../../chunks/constants.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../../chunks/H2.js";
import { I as Image } from "../../../../../../../chunks/Image.js";
/* empty css                                                            */
const css = {
  code: ".display.svelte-1tds5s2{position:relative;position:-webkit-sticky}.youtube.svelte-1tds5s2{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start}article.svelte-1tds5s2{position:relative;padding:0.5em}.absolute.svelte-1tds5s2{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1tds5s2::-webkit-scrollbar{width:0;height:0}.pad.svelte-1tds5s2{min-height:150px}.thumbnail.svelte-1tds5s2{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1tds5s2{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);padding:1em;background-image:url('/notes/maths/sets/subsets/thumbnail.svg');background-repeat:no-repeat;background-position:center;width:500px;height:500px}.grid.svelte-1tds5s2{display:grid;grid-template-columns:auto 420px}.flex.svelte-1tds5s2{display:flex;flex-direction:column-reverse}.contentpart.svelte-1tds5s2{padding:0.5em}.gridBackground.svelte-1tds5s2{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport Practice from '$lib/utils/practiceproblem/Practice.svelte';\\r\\n\\timport Message from '$lib/ui/Message.svelte';\\r\\n\\timport { Sets } from '$lib/utils/common/sets';\\r\\n\\timport { Point2D } from '$lib/utils/common/point2d';\\r\\n\\timport { randNum, randInt } from '$lib/utils/common/common';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { TeX } from '$lib/utils/common/constants';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport P from '$lib/presentation/P.svelte';\\r\\n\\timport H1 from '$lib/presentation/H1.svelte';\\r\\n\\timport H2 from '$lib/presentation/H2.svelte';\\r\\n\\timport H3 from '$lib/presentation/H3.svelte';\\r\\n\\timport Li from '$lib/presentation/Li.svelte';\\r\\n\\timport Item from '$lib/presentation/Item.svelte';\\r\\n\\timport Image from '$lib/presentation/Image.svelte';\\r\\n    import Div from '$lib/presentation/Div.svelte';\\r\\n\\tonMount(() => {\\r\\n\\t\\t$selectedChapter = 'Sets';\\r\\n\\t\\t$selectedSection = 'Subsets';\\r\\n\\t\\t$slideCounter = 27;\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n\\tlet problemset = {\\r\\n\\t\\ts: '',\\r\\n\\t\\to: {\\r\\n\\t\\t\\tA: '',\\r\\n\\t\\t\\tB: '',\\r\\n\\t\\t\\tC: '',\\r\\n\\t\\t\\tD: ''\\r\\n\\t\\t},\\r\\n\\t\\tc: ''\\r\\n\\t};\\r\\n\\tconst generateProblem = (problemnumber) => {\\r\\n\\t\\tlet N = 1;\\r\\n\\t\\tproblemnumber = problemnumber % N;\\r\\n\\t\\tlet choices = ['A', 'B', 'C', 'D'];\\r\\n\\t\\tlet correctChoiceIndex = Math.floor(Math.random() * 4);\\r\\n\\t\\tproblemset.c = choices[correctChoiceIndex];\\r\\n\\t\\tlet ans;\\r\\n\\t\\tlet values = [0, 0, 0, 0];\\r\\n\\t\\tswitch (problemnumber) {\\r\\n\\t\\t\\tcase 0: {\\r\\n\\t\\t\\t\\tlet n = randInt(20, 1);\\r\\n\\t\\t\\t\\tlet m = randInt(n + 1, n + 10) + 10;\\r\\n\\t\\t\\t\\tlet k = randInt(8, 2);\\r\\n\\t\\t\\t\\tlet U = new Sets();\\r\\n\\t\\t\\t\\tU.interval(n, m);\\r\\n\\t\\t\\t\\tlet s = new Sets();\\r\\n\\t\\t\\t\\ts.randomSet(n, m, k);\\r\\n\\t\\t\\t\\tlet sc = s.c(U);\\r\\n\\t\\t\\t\\tlet sbad = s.randomSubset();\\r\\n\\t\\t\\t\\tsbad.add(sc.randomElem());\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\${sbad.str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\${s.randomSubset().str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\${s.randomSubset().str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\${s.randomSubset().str()}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Which of the following is not a subset of \\\\\\\\(\${s.str()}\\\\\\\\)?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 1: {\\r\\n\\t\\t\\t\\tlet n = randInt(20, 1);\\r\\n\\t\\t\\t\\tlet m = randInt(n + 1, n + 10) + 10;\\r\\n\\t\\t\\t\\tlet k = randInt(8, 2);\\r\\n\\r\\n\\t\\t\\t\\tlet s = new Sets();\\r\\n\\t\\t\\t\\ts.randomSet(n, m, k);\\r\\n\\r\\n\\t\\t\\t\\tlet r = Math.random();\\r\\n\\t\\t\\t\\tlet suset = r < 0.25 ? 'N' : r < 0.5 ? 'Z' : r < 0.75 ? 'Q' : 'T';\\r\\n\\t\\t\\t\\tlet opt = [\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{N}\\\\\\\\)\`,\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{Z}\\\\\\\\)\`,\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{Q}\\\\\\\\)\`,\\r\\n\\t\\t\\t\\t\\t\`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{T}\\\\\\\\)\`\\r\\n\\t\\t\\t\\t];\\r\\n\\t\\t\\t\\tlet ques = '';\\r\\n\\t\\t\\t\\tlet co;\\r\\n\\t\\t\\t\\tswitch (suset) {\\r\\n\\t\\t\\t\\t\\tcase 'N':\\r\\n\\t\\t\\t\\t\\t\\ts.add(randInt(m, n));\\r\\n\\t\\t\\t\\t\\t\\tques = 'not';\\r\\n\\t\\t\\t\\t\\t\\tco = 3;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\tcase 'Z':\\r\\n\\t\\t\\t\\t\\t\\ts.add(-randInt(m, n));\\r\\n\\t\\t\\t\\t\\t\\tques = 'not';\\r\\n\\t\\t\\t\\t\\t\\tco = 0;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\tcase 'Q':\\r\\n\\t\\t\\t\\t\\t\\tlet q = new Q();\\r\\n\\t\\t\\t\\t\\t\\tq.randF(m, n);\\r\\n\\t\\t\\t\\t\\t\\tlet q1 = q.add(new Q(1, 2));\\r\\n\\t\\t\\t\\t\\t\\ts.add(q1);\\r\\n\\t\\t\\t\\t\\t\\tco = 2;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t\\tcase 'T':\\r\\n\\t\\t\\t\\t\\t\\tlet nq = new Surd();\\r\\n\\t\\t\\t\\t\\t\\tnq.randomSurd(m);\\r\\n\\t\\t\\t\\t\\t\\ts.add(nq);\\r\\n\\t\\t\\t\\t\\t\\tco = 3;\\r\\n\\t\\t\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (suset == 'Z') {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[correctChoiceIndex + 3]] = \`\\\\\\\\(A\\\\\\\\subset \\\\\\\\mathbb{R}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tproblemset.s = \`Given set \\\\\\\\(A = \${s.str()}\\\\\\\\), which of the following is \${ques} correct?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tproblemset = problemset;\\r\\n\\t\\treturn problemset;\\r\\n\\t};\\r\\n\\tlet DW;\\r\\n\\t$: splitMode = !$presentationMode && DW > 800;\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{$selectedSection}</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Subsets\\" />\\r\\n</svelte:head>\\r\\n<article class:absolute={$presentationMode} bind:this={$presentation} class=\\"{$presentationMode ? 'gridBackground':''}\\">\\r\\n\\t{#if $presentationMode && $currentSlide === -2}\\r\\n\\t\\t<div class=\\"thumbnail\\">\\r\\n\\t\\t\\t<div class=\\"statement\\">\\r\\n\\t\\t\\t\\t<p></p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if !$presentationMode || $currentSlide >= -1}\\r\\n\\t\\t<h1>{$selectedSection}</h1>\\r\\n\\t{/if}\\r\\n\\t<div class=\\"display {splitMode ? 'grid' : 'flex'}\\" bind:clientWidth={DW}> \\r\\n\\t\\t<section class=\\"contentpart\\">\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={0}>\\r\\n\\t\\t\\t\\t\\t<P isActive={0}>\\r\\n                        Given two numbers \\\\(n\\\\) and \\\\(m\\\\), we can show that either \\\\(n = m, n > m\\\\) or \\\\(n {TeX.less} m\\\\). In the last section we saw that for two sets \\\\(A\\\\) and \\\\(B\\\\) we can tell whether \\\\(A = B\\\\) or \\\\(A\\\\neq B\\\\). Just like numbers <em>can we say that either \\\\(A {TeX.less} B\\\\) or \\\\(A > B\\\\)</em>  ? In this section, we'll learn how to compare two sets. At the same time, it will give us a way to construct new sets from a given set.\\r\\n                    </P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={1}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\tGiven sets \\\\(A\\\\) and \\\\(B\\\\), \\\\(A\\\\) is said to be <em>subset</em> of \\\\(B\\\\) if every\\r\\n\\t\\t\\t\\t\\t\\telement of \\\\(A\\\\) is also in \\\\(B\\\\). In such a case, \\\\(B\\\\) is called a <em>superset</em> of\\r\\n\\t\\t\\t\\t\\t\\t\\\\(A\\\\).\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={2}>\\r\\n\\t\\t\\t\\t\\t\\tIntuitively, this is like less than ( \\\\({TeX.less}\\\\) ) relation of numbers. The only difference is that while two numbers are always related, two sets will not be related like this if they contain different elements.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={3}>\\r\\n\\t\\t\\t\\t\\t\\t\\tIf \\\\(A\\\\) is a subset of \\\\(B\\\\), then we write \\\\(A \\\\subset B\\\\) or \\\\(B\\\\supset A\\\\).\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={4}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={4}\\r\\n\\t\\t\\t\\t\\t\\t\\t>If \\\\(A\\\\) is not a subset of \\\\(B\\\\), then we write \\\\(A \\\\not\\\\subset B\\\\).\\r\\n                        </Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={5}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={5}>\\r\\n                            To indicate that \\\\(A\\\\) is either a subset of or equal to \\\\(B\\\\), we write \\\\(A\\\\subseteq\\r\\n\\t\\t\\t\\t\\t\\t\\tB\\\\).\\r\\n                        </Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={6}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={6}>\\r\\n                            A subset \\\\(A\\\\) of set \\\\(B\\\\) is called a <em>proper</em> subset of \\\\(B\\\\) if \\\\(A\\\\) is not\\r\\n\\t\\t\\t\\t\\t\\t\\tequal to \\\\(B\\\\).\\r\\n                        </Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={7}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={7}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={8}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={8}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\{1, 2\\\\\\\\} \\\\\\\\subset \\\\\\\\{2, 1, 3\\\\\\\\}\\\\\\\\)\`} is a proper subset.\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={9}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={9}>\\r\\n\\t\\t\\t\\t\\t\\t\\t{\`\\\\\\\\(\\\\\\\\{1, 2, 3, 0\\\\\\\\} \\\\\\\\not\\\\\\\\subset \\\\\\\\{2, 1, 3, 4, 5\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n            </section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={10}>\\r\\n\\t\\t\\t\\t\\t<H2 isActive={10}>Subset Tree</H2>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={11}>\\r\\n\\t\\t\\t\\t\\t<Image isActive={11}>\\r\\n\\t\\t\\t\\t\\t\\t<img style=\\"width:min(400px, 90vw);\\" src=\\"/notes/maths/sets/subsets/tree.svg\\" alt=''>\\r\\n\\t\\t\\t\\t\\t</Image>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</section>\\r\\n            <section>\\r\\n\\t\\t\\t\\t<Item item={12}>\\r\\n\\t\\t\\t\\t\\t<H2 isActive={12}>Mathematical notation</H2>\\r\\n\\t\\t\\t\\t</Item>\\r\\n                <Item item={12}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={12}>\\r\\n\\t\\t\\t\\t\\t\\t\\\\(A\\\\) is a subset of \\\\(B\\\\) if \\\\(a\\\\) is an element of \\\\(A\\\\) implies that \\\\(a\\\\) is also an element of \\\\(B\\\\). \\\\[A\\\\subset B ~~~if~~a\\\\in A\\\\implies a\\\\in B\\\\]  Alternatively, we can say that if \\\\(A\\\\subset B\\\\), then if an element does not belong to \\\\(B\\\\), then it also does not belong to \\\\(A\\\\). \\\\[A\\\\subset B ~~~if~~\\\\forall~a, ~ a\\\\notin B\\\\implies a\\\\notin A\\\\]\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n                <Item item={13}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"remark\\" isActive={13}>\\r\\n\\t\\t\\t\\t\\t\\tEvery set \\\\(A\\\\) is a subset of itself, i.e. \\\\(A\\\\subset A\\\\).\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n                <Item item={14}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"question\\" isActive={14}>why is empty set a subset of every set?</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={15}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"solution\\" isActive={15}\\r\\n\\t\\t\\t\\t\\t\\t>Consider any set \\\\(B\\\\). Consider any element \\\\(a\\\\) such that \\\\(a\\\\notin B\\\\). An empty set \\\\( \\\\phi\\\\) contains no element. Then, \\\\(a\\\\notin \\\\phi\\\\). Hence, \\\\(\\\\phi\\\\) is a subset of \\\\(B\\\\).\\r\\n                    </P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n                \\r\\n            </section>\\r\\n            <section>\\r\\n                <Item item={16}>\\r\\n\\t\\t\\t\\t\\t<H2 isActive={16}>\\r\\n\\t\\t\\t\\t\\t\\tSet equality \\r\\n                    </H2>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={17}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={17}>\\r\\n\\t\\t\\t\\t\\t\\t\\\\(A\\\\) is equal to \\\\(B\\\\) if and only if (iff) \\\\(A\\\\subset B\\\\) and \\\\(B\\\\subset A\\\\). \\\\[A=B \\\\iff (a\\\\in A\\\\iff a\\\\in B)\\\\] \\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={18}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"question\\" isActive={18}>Is {\`\\\\\\\\(\\\\\\\\phi = \\\\\\\\{\\\\\\\\phi\\\\\\\\}\\\\\\\\)\`} ?</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={19}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"solution\\" isActive={19}\\r\\n\\t\\t\\t\\t\\t\\t>We can write {'\\\\\\\\(\\\\\\\\phi = \\\\\\\\{\\\\\\\\}\\\\\\\\)'}. It is clear that {\`\\\\\\\\(\\\\\\\\{\\\\\\\\}\\\\\\\\)\`} has no elements\\r\\n\\t\\t\\t\\t\\t\\tand {\`\\\\\\\\(\\\\\\\\{\\\\\\\\phi\\\\\\\\}\\\\\\\\)\`}\\r\\n\\t\\t\\t\\t\\t\\thas one element, namely \\\\(\\\\phi\\\\). Hence {\`\\\\\\\\(\\\\\\\\phi \\\\\\\\neq \\\\\\\\{\\\\\\\\phi\\\\\\\\}\\\\\\\\)\`}\\r\\n                    </P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n                <Item item={20}>\\r\\n                    <P class=\\"question\\" isActive={20}>Consider two sets {\`\\\\\\\\(A = \\\\\\\\{x: x=3r-1, r\\\\\\\\in Z\\\\\\\\}\\\\\\\\)\`} and {\`\\\\\\\\(B = \\\\\\\\{x: x=3s + 2, s\\\\\\\\in Z\\\\\\\\}\\\\\\\\)\`}. Is \\\\(A = B\\\\)?</P>\\r\\n                </Item>\\r\\n                <div class=\\"solution\\">\\r\\n                    <Item item={21}>\\r\\n                        <P isActive={121}>\\r\\n                            We need to check both conditions \\\\(A\\\\subset B\\\\) and \\\\(B\\\\subset A\\\\).\\r\\n                        </P>\\r\\n                    </Item>\\r\\n                    <ul>\\r\\n                        <Item item={22}>\\r\\n                            <Li isActive={22}>\\r\\n                                Let \\\\(a = 3r - 1 \\\\in A\\\\) where \\\\(r\\\\in Z\\\\). Does there exists \\\\(s\\\\in Z\\\\) such that \\\\(a = 3s + 2\\\\)? Let's find out. {\`\\\\\\\\[\\r\\n                                    \\\\\\\\begin{eqnarray}\\r\\n                                    3s + 2 &=& 3r - 1\\\\\\\\\\\\\\\\\\r\\n                                    \\\\\\\\implies s &=& \\\\\\\\frac{3r - 3}{3}\\\\\\\\\\\\\\\\\\r\\n                                                &=& r - 1 \\\\\\\\in Z\\r\\n                                    \\\\\\\\end{eqnarray}\\r\\n                                    \\\\\\\\]\`}\\r\\n                                This implies that \\\\(a\\\\in B\\\\). Hence, \\\\(A\\\\subset B\\\\)\\r\\n                            </Li>\\r\\n                        </Item> \\r\\n                        <Item item={23}>\\r\\n                            <Li isActive={23}>\\r\\n                                Let \\\\(b = 3s + 2 \\\\in B\\\\) where \\\\(s\\\\in Z\\\\). Does there exists \\\\(r\\\\in Z\\\\) such that \\\\(b = 3r - 1\\\\)? Let's find out. {\`\\\\\\\\[\\r\\n                                    \\\\\\\\begin{eqnarray}\\r\\n                                    3r - 1 &=& 3s + 2\\\\\\\\\\\\\\\\\\r\\n                                    \\\\\\\\implies r &=& \\\\\\\\frac{3s + 3}{3}\\\\\\\\\\\\\\\\\\r\\n                                                &=& s + 1 \\\\\\\\in Z\\r\\n                                    \\\\\\\\end{eqnarray}\\r\\n                                    \\\\\\\\]\`}\\r\\n                                This implies that \\\\(b\\\\in A\\\\). Hence, \\\\(B\\\\subset A\\\\)\\r\\n                            </Li>\\r\\n                        </Item> \\r\\n                    </ul>\\r\\n                    <Item item={24}>\\r\\n                        <P isActive={24}>\\r\\n                            This proves that \\\\(A = B\\\\).\\r\\n                        </P>\\r\\n                    </Item>\\r\\n                </div>\\r\\n                <Item item={25}>\\r\\n                    <P class=\\"question\\" isActive={25}>\\r\\n                        Verify that \\\\(N\\\\subset Z \\\\subset Q\\\\subset R\\\\).\\r\\n                    </P>\\r\\n                </Item>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</section>\\r\\n\\t\\t{#if !$presentationMode}\\r\\n\\t\\t\\t<div class=\\"youtube\\">\\r\\n\\t\\t\\t\\t<iframe\\r\\n\\t\\t\\t\\t\\twidth=\\"420\\"\\r\\n\\t\\t\\t\\t\\theight=\\"300\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/w4SBKulJJh4\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"YouTube video player\\"\\r\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\r\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\"\\r\\n\\t\\t\\t\\t\\tallowfullscreen\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if $presentationMode}\\r\\n\\t\\t\\t<div class=\\"slate\\" />\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\t<section>\\r\\n\\t\\t<Item item={26}>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<h2>Practice</h2>\\r\\n\\t\\t\\t\\t<Practice {generateProblem} />\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</Item>\\r\\n\\t</section>\\r\\n\\t{#if $presentationMode && $currentSlide >= 2}\\r\\n\\t\\t<div class=\\"pad\\" />\\r\\n\\t{/if}\\r\\n\\t\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t.display {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tposition: -webkit-sticky;\\r\\n\\t}\\r\\n\\t.youtube {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 5em;\\r\\n\\t\\t/* box-shadow: 0 0 3px gray;\\r\\n\\t\\tbackground-color: white; */\\r\\n\\t\\tz-index: 10;\\r\\n\\t\\talign-self: flex-start;\\r\\n\\t}\\r\\n\\tarticle {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.absolute {\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\t/* width: 90vw; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 600px;\\r\\n\\t\\t/* height: 90vh; */\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\tpadding: 0 1em 0 1em;\\r\\n\\t}\\r\\n\\t.absolute::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.pad {\\r\\n\\t\\tmin-height: 150px;\\r\\n\\t}\\r\\n\\t.thumbnail {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\t.statement {\\r\\n\\t\\tbackground: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));\\r\\n\\t\\tcolor: red;\\r\\n\\t\\ttext-shadow: 1px 1px 3px rgb(4, 4, 4);\\r\\n\\t\\t/* box-shadow: 1px 1px 3px rgb(129, 128, 128); */\\r\\n\\t\\tpadding: 1em;\\r\\n\\t\\tbackground-image: url('/notes/maths/sets/subsets/thumbnail.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n        width: 500px;\\r\\n        height: 500px;\\r\\n\\t}\\r\\n\\t.grid {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: auto 420px;\\r\\n\\t}\\r\\n\\t.flex {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column-reverse;\\r\\n\\t}\\r\\n\\t.contentpart {\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.gridBackground {\\r\\n\\t\\tbackground-image: url('/background.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkWC,uBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,cACX,CACA,uBAAS,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CAGR,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UACb,CACA,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KACV,CACA,wBAAU,CACT,MAAM,CAAE,IAAI,CAEZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CAIb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB,CACA,wBAAS,mBAAoB,CAC5B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,mBAAK,CACJ,UAAU,CAAE,KACb,CACA,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CACA,yBAAW,CACV,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC1E,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAErC,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,8CAA8C,CAChE,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CACrB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACf,CACA,oBAAM,CACL,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAC7B,CACA,oBAAM,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACjB,CACA,2BAAa,CACZ,OAAO,CAAE,KACV,CACA,8BAAgB,CACf,gBAAgB,CAAE,sBAAsB,CACxC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAClB"}`
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
    let N = 1;
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
        let U = new Sets();
        U.interval(n, m);
        let s = new Sets();
        s.randomSet(n, m, k);
        let sc = s.c(U);
        let sbad = s.randomSubset();
        sbad.add(sc.randomElem());
        values[0] = `\\(${sbad.str()}\\)`;
        values[1] = `\\(${s.randomSubset().str()}\\)`;
        values[2] = `\\(${s.randomSubset().str()}\\)`;
        values[3] = `\\(${s.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is not a subset of \\(${s.str()}\\)?`;
        break;
      }
      case 1: {
        let n = randInt(20, 1);
        let m = randInt(n + 1, n + 10) + 10;
        let k = randInt(8, 2);
        let s = new Sets();
        s.randomSet(n, m, k);
        let r = Math.random();
        let suset = r < 0.25 ? "N" : r < 0.5 ? "Z" : r < 0.75 ? "Q" : "T";
        let opt = [
          `\\(A\\subset \\mathbb{N}\\)`,
          `\\(A\\subset \\mathbb{Z}\\)`,
          `\\(A\\subset \\mathbb{Q}\\)`,
          `\\(A\\subset \\mathbb{T}\\)`
        ];
        let ques = "";
        let co;
        switch (suset) {
          case "N":
            s.add(randInt(m, n));
            ques = "not";
            co = 3;
            break;
          case "Z":
            s.add(-randInt(m, n));
            ques = "not";
            co = 0;
            break;
          case "Q":
            let q = new Q();
            q.randF(m, n);
            let q1 = q.add(new Q(1, 2));
            s.add(q1);
            co = 2;
            break;
          case "T":
            let nq = new Surd();
            nq.randomSurd(m);
            s.add(nq);
            co = 3;
            break;
        }
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];
        }
        if (suset == "Z") {
          problemset.o[choices[correctChoiceIndex + 3]] = `\\(A\\subset \\mathbb{R}\\)`;
        }
        problemset.s = `Given set \\(A = ${s.str()}\\), which of the following is ${ques} correct?`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1o7l939_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Subsets"><!-- HEAD_svelte-1o7l939_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-1tds5s2",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-1tds5s2" data-svelte-h="svelte-23ii2j"><div class="statement svelte-1tds5s2"><p></p></div></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-1tds5s2"}"><section class="contentpart svelte-1tds5s2"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Given two numbers \\(n\\) and \\(m\\), we can show that either \\(n = m, n &gt; m\\) or \\(n ${escape(TeX.less)} m\\). In the last section we saw that for two sets \\(A\\) and \\(B\\) we can tell whether \\(A = B\\) or \\(A\\neq B\\). Just like numbers <em>can we say that either \\(A ${escape(TeX.less)} B\\) or \\(A &gt; B\\)</em>  ? In this section, we&#39;ll learn how to compare two sets. At the same time, it will give us a way to construct new sets from a given set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `Given sets \\(A\\) and \\(B\\), \\(A\\) is said to be <em data-svelte-h="svelte-1b8dhak">subset</em> of \\(B\\) if every
						element of \\(A\\) is also in \\(B\\). In such a case, \\(B\\) is called a <em data-svelte-h="svelte-1xb2drn">superset</em> of
						\\(A\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 2 }, {}, {
        default: () => {
          return `Intuitively, this is like less than ( \\(${escape(TeX.less)}\\) ) relation of numbers. The only difference is that while two numbers are always related, two sets will not be related like this if they contain different elements.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `If \\(A\\) is a subset of \\(B\\), then we write \\(A \\subset B\\) or \\(B\\supset A\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `If \\(A\\) is not a subset of \\(B\\), then we write \\(A \\not\\subset B\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `To indicate that \\(A\\) is either a subset of or equal to \\(B\\), we write \\(A\\subseteq
							B\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `A subset \\(A\\) of set \\(B\\) is called a <em data-svelte-h="svelte-1w4wirg">proper</em> subset of \\(B\\) if \\(A\\) is not
							equal to \\(B\\).`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 7 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `${escape(`\\(\\{1, 2\\} \\subset \\{2, 1, 3\\}\\)`)} is a proper subset.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `${escape(`\\(\\{1, 2, 3, 0\\} \\not\\subset \\{2, 1, 3, 4, 5\\}\\)`)}`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Subset Tree`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(Image, "Image").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `<img style="width:min(400px, 90vw);" src="/notes/maths/sets/subsets/tree.svg" alt="">`;
        }
      })}`;
    }
  })}</section> <section>${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `Mathematical notation`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 12 }, {}, {
        default: () => {
          return `\\(A\\) is a subset of \\(B\\) if \\(a\\) is an element of \\(A\\) implies that \\(a\\) is also an element of \\(B\\). \\[A\\subset B ~~~if~~a\\in A\\implies a\\in B\\]  Alternatively, we can say that if \\(A\\subset B\\), then if an element does not belong to \\(B\\), then it also does not belong to \\(A\\). \\[A\\subset B ~~~if~~\\forall~a, ~ a\\notin B\\implies a\\notin A\\]`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "remark", isActive: 13 }, {}, {
        default: () => {
          return `Every set \\(A\\) is a subset of itself, i.e. \\(A\\subset A\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 14 }, {}, {
        default: () => {
          return `why is empty set a subset of every set?`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "solution", isActive: 15 }, {}, {
        default: () => {
          return `Consider any set \\(B\\). Consider any element \\(a\\) such that \\(a\\notin B\\). An empty set \\( \\phi\\) contains no element. Then, \\(a\\notin \\phi\\). Hence, \\(\\phi\\) is a subset of \\(B\\).`;
        }
      })}`;
    }
  })}</section> <section>${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 16 }, {}, {
        default: () => {
          return `Set equality`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 17 }, {}, {
        default: () => {
          return `\\(A\\) is equal to \\(B\\) if and only if (iff) \\(A\\subset B\\) and \\(B\\subset A\\). \\[A=B \\iff (a\\in A\\iff a\\in B)\\]`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 18 }, {}, {
        default: () => {
          return `Is ${escape(`\\(\\phi = \\{\\phi\\}\\)`)} ?`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "solution", isActive: 19 }, {}, {
        default: () => {
          return `We can write ${escape("\\(\\phi = \\{\\}\\)")}. It is clear that ${escape(`\\(\\{\\}\\)`)} has no elements
						and ${escape(`\\(\\{\\phi\\}\\)`)}
						has one element, namely \\(\\phi\\). Hence ${escape(`\\(\\phi \\neq \\{\\phi\\}\\)`)}`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 20 }, {}, {
        default: () => {
          return `Consider two sets ${escape(`\\(A = \\{x: x=3r-1, r\\in Z\\}\\)`)} and ${escape(`\\(B = \\{x: x=3s + 2, s\\in Z\\}\\)`)}. Is \\(A = B\\)?`;
        }
      })}`;
    }
  })} <div class="solution">${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 121 }, {}, {
        default: () => {
          return `We need to check both conditions \\(A\\subset B\\) and \\(B\\subset A\\).`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `Let \\(a = 3r - 1 \\in A\\) where \\(r\\in Z\\). Does there exists \\(s\\in Z\\) such that \\(a = 3s + 2\\)? Let&#39;s find out. ${escape(`\\[
                                    \\begin{eqnarray}
                                    3s + 2 &=& 3r - 1\\\\
                                    \\implies s &=& \\frac{3r - 3}{3}\\\\
                                                &=& r - 1 \\in Z
                                    \\end{eqnarray}
                                    \\]`)}
                                This implies that \\(a\\in B\\). Hence, \\(A\\subset B\\)`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 23 }, {}, {
        default: () => {
          return `Let \\(b = 3s + 2 \\in B\\) where \\(s\\in Z\\). Does there exists \\(r\\in Z\\) such that \\(b = 3r - 1\\)? Let&#39;s find out. ${escape(`\\[
                                    \\begin{eqnarray}
                                    3r - 1 &=& 3s + 2\\\\
                                    \\implies r &=& \\frac{3s + 3}{3}\\\\
                                                &=& s + 1 \\in Z
                                    \\end{eqnarray}
                                    \\]`)}
                                This implies that \\(b\\in A\\). Hence, \\(B\\subset A\\)`;
        }
      })}`;
    }
  })}</ul> ${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 24 }, {}, {
        default: () => {
          return `This proves that \\(A = B\\).`;
        }
      })}`;
    }
  })}</div> ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 25 }, {}, {
        default: () => {
          return `Verify that \\(N\\subset Z \\subset Q\\subset R\\).`;
        }
      })}`;
    }
  })}</section></section> ${!$presentationMode ? `<div class="youtube svelte-1tds5s2" data-svelte-h="svelte-9ayz82"><iframe width="420" height="300" src="https://www.youtube.com/embed/w4SBKulJJh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``} ${$presentationMode ? `<div class="slate"></div>` : ``}</div> <section>${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section> ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-1tds5s2"></div>` : ``} </article>`;
});
export {
  Page as default
};
