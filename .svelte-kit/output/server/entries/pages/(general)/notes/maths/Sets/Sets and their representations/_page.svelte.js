import { s as subscribe, d as null_to_empty } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores3.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { a as randInt } from "../../../../../../../chunks/common.js";
import { S as Sets } from "../../../../../../../chunks/sets.js";
import { Q as Quadratic } from "../../../../../../../chunks/quadratic.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../../chunks/H2.js";
import { I as Image } from "../../../../../../../chunks/Image.js";
const css = {
  code: ".display.svelte-dgnj1u{position:relative;position:-webkit-sticky}.youtube.svelte-dgnj1u{width:100%;height:300px;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start}article.svelte-dgnj1u{position:relative;padding:0.5em}.absolute.svelte-dgnj1u{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-dgnj1u::-webkit-scrollbar{width:0;height:0}.pad.svelte-dgnj1u{min-height:150px}.thumbnail.svelte-dgnj1u{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-dgnj1u{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.grid.svelte-dgnj1u{display:grid;grid-template-columns:auto 420px}.flex.svelte-dgnj1u{display:flex;flex-direction:column-reverse}.contentpart.svelte-dgnj1u{padding:0.5em}.gridBackground.svelte-dgnj1u{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from \'$lib/pages/notes/maths/stores\';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from \'$lib/pages/notes/maths/stores\';\\r\\n\\timport Practice from \'$lib/utils/practiceproblem/Practice.svelte\';\\r\\n\\timport Message from \'$lib/ui/Message.svelte\';\\r\\n\\timport { Point2D } from \'$lib/utils/common/point2d\';\\r\\n\\timport { randNum, randInt } from \'$lib/utils/common/common\';\\r\\n\\timport { Sets } from \'$lib/utils/common/sets\';\\r\\n\\timport { Quadratic } from \'$lib/utils/common/quadratic\';\\r\\n\\timport { page } from \'$app/stores\';\\r\\n\\timport { onMount } from \'svelte\';\\r\\n\\timport P from \'$lib/presentation/P.svelte\';\\r\\n\\timport H1 from \'$lib/presentation/H1.svelte\';\\r\\n\\timport H2 from \'$lib/presentation/H2.svelte\';\\r\\n\\timport H3 from \'$lib/presentation/H3.svelte\';\\r\\n\\timport Li from \'$lib/presentation/Li.svelte\';\\r\\n\\timport Item from \'$lib/presentation/Item.svelte\';\\r\\n\\timport Image from \'$lib/presentation/Image.svelte\';\\r\\n\\tonMount(() => {\\r\\n\\t\\t$selectedChapter = \'Sets\';\\r\\n\\t\\t$selectedSection = \'Sets and their representations\';\\r\\n\\t\\t$slideCounter = 40;\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n\\tlet problemset = {\\r\\n\\t\\ts: \'\',\\r\\n\\t\\to: {\\r\\n\\t\\t\\tA: \'\',\\r\\n\\t\\t\\tB: \'\',\\r\\n\\t\\t\\tC: \'\',\\r\\n\\t\\t\\tD: \'\'\\r\\n\\t\\t},\\r\\n\\t\\tc: \'\'\\r\\n\\t};\\r\\n\\tconst generateProblem = (problemnumber) => {\\r\\n\\t\\tlet N = 5;\\r\\n\\t\\tproblemnumber = problemnumber % N;\\r\\n\\t\\tlet choices = [\'A\', \'B\', \'C\', \'D\'];\\r\\n\\t\\tlet correctChoiceIndex = Math.floor(Math.random() * 4);\\r\\n\\t\\tproblemset.c = choices[correctChoiceIndex];\\r\\n\\t\\tlet ans;\\r\\n\\t\\tlet values = [0, 0, 0, 0];\\r\\n\\t\\tswitch (problemnumber) {\\r\\n\\t\\t\\tcase 0: {\\r\\n\\t\\t\\t\\tvalues[0] = `Collection of purest rivers`;\\r\\n\\t\\t\\t\\tvalues[1] = `Collection of states in India`;\\r\\n\\t\\t\\t\\tvalues[2] = `Collection of countries`;\\r\\n\\t\\t\\t\\tvalues[3] = `Collection of my watches`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = `Which of the following is a not set?`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 1: {\\r\\n\\t\\t\\t\\tlet m = randInt(20, 10);\\r\\n\\t\\t\\t\\tlet n = randInt(Math.floor(m / 2), 1); // n < x < m /l\\r\\n\\t\\t\\t\\tlet l = randInt(Math.floor((2 * n) / 3), 2);\\r\\n\\t\\t\\t\\tn = Math.random() < 0.5 ? n : -n;\\r\\n\\r\\n\\t\\t\\t\\tlet set = new Sets();\\r\\n\\t\\t\\t\\tfor (let i = n + 1; i < m; i++) {\\r\\n\\t\\t\\t\\t\\tset.e.push(i);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tlet subA = new Sets(set.e.filter((item) => item % l == 0));\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = `\\\\\\\\(${subA.str()}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[1] = `\\\\\\\\(${set.randomSubset().str()}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[2] = `\\\\\\\\(${set.randomSubset().str()}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[3] = `\\\\\\\\(${set.randomSubset().str()}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = `Which of the following is correct Roster form of the set \\\\\\\\[ x \\\\\\\\text{ is an integer such that } ${n} < x < ${m} \\\\\\\\text{ and divisible by } ${l}\\\\\\\\]`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 2: {\\r\\n\\t\\t\\t\\tlet A = new Sets();\\r\\n\\t\\t\\t\\tlet U = new Sets();\\r\\n\\t\\t\\t\\tU.interval(-10, 10);\\r\\n\\t\\t\\t\\tA.randomSet(-10, 10, randInt(10, 8));\\r\\n\\t\\t\\t\\tlet C = U.diff(A);\\r\\n\\t\\t\\t\\tlet B = A.krandomSubset(3);\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = `\\\\\\\\(${C.e[Math.floor(Math.random() * C.e.length)]}\\\\\\\\in A\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[1] = `\\\\\\\\(${B.e[0]}\\\\\\\\in A\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[2] = `\\\\\\\\(${B.e[1]}\\\\\\\\in A\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[3] = `\\\\\\\\(${B.e[2]}\\\\\\\\in A\\\\\\\\)`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = `Given a set \\\\\\\\[A = ${A.str()}\\\\\\\\] which of the following is not correct?`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 3: {\\r\\n\\t\\t\\t\\tlet m = randInt(20, 10);\\r\\n\\t\\t\\t\\tlet n = randInt(Math.floor(m / 2), 1);\\r\\n\\t\\t\\t\\tlet l = randInt(Math.floor((2 * n) / 3), 2);\\r\\n\\t\\t\\t\\tn = Math.random() < 0.5 ? n : -n;\\r\\n\\t\\t\\t\\tlet set = new Sets();\\r\\n\\t\\t\\t\\tfor (let i = n + 1; i < m; i++) {\\r\\n\\t\\t\\t\\t\\tset.e.push(i);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tlet setA = new Sets(set.e.filter((item) => item % l == 0));\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = `\\\\\\\\(\\\\\\\\{x : x \\\\\\\\text{ is an integer such that } ${n} < x < ${m} \\\\\\\\text{ and divisible by } ${l}\\\\\\\\}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[1] = `\\\\\\\\(\\\\\\\\{x : x \\\\\\\\text{ is an integer such that } ${n} < x < ${m}\\\\\\\\}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[2] = `\\\\\\\\(\\\\\\\\{x : x \\\\\\\\text{ is an integer such that } ${m} < x < ${n} \\\\\\\\text{ and divisible by } ${l}\\\\\\\\}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tvalues[3] = `\\\\\\\\(\\\\\\\\{x : x \\\\\\\\text{ is an integer such that } x \\\\\\\\text{ is divisible by } ${l}\\\\\\\\}\\\\\\\\)`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = `Which of the following is correct set-builder form of the set \\\\\\\\[${setA.str()}\\\\\\\\]`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 4: {\\r\\n\\t\\t\\t\\tlet q = new Quadratic(0, 0, 0, \'n\');\\r\\n\\t\\t\\t\\tq.rand(-3, 3);\\r\\n\\t\\t\\t\\tlet q1 = new Quadratic(0, 0, 0, \'n\');\\r\\n\\t\\t\\t\\tq1.rand(-3, 3);\\r\\n\\t\\t\\t\\tlet q2 = new Quadratic(0, 0, 0, \'n\');\\r\\n\\t\\t\\t\\tq2.rand(-3, 3);\\r\\n\\t\\t\\t\\tlet q3 = new Quadratic(0, 0, 0, \'n\');\\r\\n\\t\\t\\t\\tq3.rand(-3, 3);\\r\\n\\t\\t\\t\\tlet seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];\\r\\n\\t\\t\\t\\tlet set = new Sets(seq);\\r\\n\\t\\t\\t\\tvalues[0] = q.str();\\r\\n\\t\\t\\t\\tvalues[1] = q1.str();\\r\\n\\t\\t\\t\\tvalues[2] = q2.str();\\r\\n\\t\\t\\t\\tvalues[3] = q3.str();\\r\\n\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] =\\r\\n\\t\\t\\t\\t\\t\\t\'\\\\\\\\(\\\\\\\\{x: x = \' +\\r\\n\\t\\t\\t\\t\\t\\tvalues[i] +\\r\\n\\t\\t\\t\\t\\t\\t\', n~\\\\\\\\)\' +\\r\\n\\t\\t\\t\\t\\t\\t\' is a natural number and \' +\\r\\n\\t\\t\\t\\t\\t\\t\'\\\\\\\\(~1\\\\\\\\leq n\\\\\\\\leq 5\\\\\\\\}\\\\\\\\)\';\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tproblemset.s = `Which of the following is correct set-builder form of the set \\\\\\\\[${set.str()}\\\\\\\\]`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tproblemset = problemset;\\r\\n\\t\\treturn problemset;\\r\\n\\t};\\r\\n\\tlet DW;\\r\\n\\t$: splitMode = !$presentationMode && DW > 800;\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{$selectedSection}</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n\\t<meta name=\\"description\\" content={$selectedSection} />\\r\\n</svelte:head>\\r\\n<article class:absolute={$presentationMode} bind:this={$presentation} class=\\"{$presentationMode ? \'gridBackground\':\'\'}\\">\\r\\n\\t{#if $presentationMode && $currentSlide === -2}\\r\\n\\t\\t<div class=\\"thumbnail\\">\\r\\n\\t\\t\\t<img\\r\\n\\t\\t\\t\\tclass=\\"statement\\"\\r\\n\\t\\t\\t\\twidth=\\"100%\\"\\r\\n\\t\\t\\t\\tsrc=\\"/notes/maths/sets/representation/heroparadox.svg\\"\\r\\n\\t\\t\\t\\talt=\\"\\"\\r\\n\\t\\t\\t\\tstyle=\\"color:white;\\"\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if !$presentationMode || $currentSlide >= -1}\\r\\n\\t\\t<h1>{$selectedSection}</h1>\\r\\n\\t{/if}\\r\\n\\t<div class=\\"display {splitMode ? \'grid\' : \'flex\'}\\" bind:clientWidth={DW}>\\r\\n\\t\\t<section class=\\"contentpart\\">\\r\\n\\t\\t\\t<Item item={0}>\\r\\n\\t\\t\\t\\t<H2 isActive={0}>Definition</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={1}>\\r\\n\\t\\t\\t\\t\\t<P isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\tWe are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the\\r\\n\\t\\t\\t\\t\\t\\tmathematical refinement of this idea of collection. It turns out that not every\\r\\n\\t\\t\\t\\t\\t\\tcollection can be a set. One basic requirement of a mathematical concept is that its\\r\\n\\t\\t\\t\\t\\t\\tdefinition must be unique. Not every collection has a unique definition. Consider, for\\r\\n\\t\\t\\t\\t\\t\\texample, <span class=\\"specialtext\\">the hero paradox</span>. A <em>hero</em> is a person\\r\\n\\t\\t\\t\\t\\t\\twho helps those and only those, who can not help themselves.\\r\\n\\t\\t\\t\\t\\t\\t<em>Does the hero help himself?</em>\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t\\t<Image isActive={1}>\\r\\n\\t\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\"width: 100%;\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tsrc=\\"/notes/maths/sets/representation/heroparadox.svg\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\"\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t</Image>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t<P isActive={2}>A simple idea of collections can lead to many such paradoxes.</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t<P isActive={3}>\\r\\n\\t\\t\\t\\t\\t\\tSuch paradoxes can be avoided if it is possible to decide, with certainty, whether an\\r\\n\\t\\t\\t\\t\\t\\tobject is part of the collection. This is how we define the mathematical notion of a <em\\r\\n\\t\\t\\t\\t\\t\\t\\t>set</em\\r\\n\\t\\t\\t\\t\\t\\t>.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={4}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={4}>\\r\\n\\t\\t\\t\\t\\t\\tA <strong>set</strong> is a <em>well-defined</em> collection of objects.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={5}>\\r\\n\\t\\t\\t\\t\\t<P isActive={5}>\\r\\n\\t\\t\\t\\t\\t\\tThe property <em>well-defined</em> means given a set and an object, we can determine,\\r\\n\\t\\t\\t\\t\\t\\twithout ambiguity, whether the object <em>belongs</em> to the set or not.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</section>\\r\\n\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={6}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={6}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={7}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={7}>Collection of students in a given class is a set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={8}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={8}>Alphabets in English is a set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={9}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={9}>Natural numbers divisible by 2 is a set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={10}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={10}>Collection of circles of different radii is a set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={11}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={11}>Collection of all rivers in the world is a set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={12}>\\r\\n\\t\\t\\t\\t<H2 isActive={12}>Elements of a set</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={13}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={13}>A set is usually denoted by capital letters \\\\(A, B, X, Y\\\\) etc.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={14}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={14}>Members of a set are called elements of the set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={15}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={15}\\r\\n\\t\\t\\t\\t\\t\\t\\t>Elements of a set are usually represented by small letters \\\\(a, b, x, y\\\\) etc.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t\\t<Item item={16}>\\r\\n\\t\\t\\t\\t\\t<H3 isActive{16}>Epsilon (\\\\(\\\\in\\\\)) notation</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={17}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={17}\\r\\n\\t\\t\\t\\t\\t\\t\\t>If \\\\(a\\\\) is an elment of a set \\\\(A\\\\), we say that \\\\(a\\\\) <em>belongs to</em> \\\\(A\\\\) and\\r\\n\\t\\t\\t\\t\\t\\t\\tdenote this fact using \\\\(a\\\\in A\\\\).</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={18}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={18}\\r\\n\\t\\t\\t\\t\\t\\t\\t>If \\\\(a\\\\) is <strong>not</strong> an elment of a set \\\\(A\\\\), we say that \\\\(a\\\\)\\r\\n\\t\\t\\t\\t\\t\\t\\t<em>does not belongs to</em> \\\\(A\\\\) and denote this fact using \\\\(a\\\\notin A\\\\).</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={19}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive{19}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={20}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={20}\\r\\n\\t\\t\\t\\t\\t\\t\\t>If \\\\(A\\\\) is the set of vowels in English, then \\\\(a\\\\in A\\\\) because \\\\(a\\\\) is a vowel,\\r\\n\\t\\t\\t\\t\\t\\t\\tbut \\\\(x\\\\notin A\\\\) because \\\\(x\\\\) is not a vowel.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={21}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={21}\\r\\n\\t\\t\\t\\t\\t\\t\\t>If \\\\(E\\\\) is the set of Natural numbers divisible by 2, then \\\\(2\\\\in E\\\\), but \\\\(0\\\\notin\\r\\n\\t\\t\\t\\t\\t\\t\\tE\\\\) and \\\\(3\\\\notin E\\\\).</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={22}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={22}\\r\\n\\t\\t\\t\\t\\t\\t\\t>If \\\\(R\\\\) is the set of all rivers in the world, then \\\\(Ganga\\\\in R\\\\), but\\r\\n\\t\\t\\t\\t\\t\\t\\t\\\\(India\\\\notin R\\\\).</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={23}>\\r\\n\\t\\t\\t\\t<H2 isActive={23}>Roster Form</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={24}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={24}>\\r\\n\\t\\t\\t\\t\\t\\tIn roster form, all the elements of a set are listed, comma-separated and enclosed\\r\\n\\t\\t\\t\\t\\t\\twithin braces {\'\\\\\\\\[\\\\\\\\{a_1, a_2,\\\\\\\\dots, a_n \\\\\\\\}\\\\\\\\]\'}\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={25}>\\r\\n\\t\\t\\t\\t<H3 class=\\"examples\\" isActive{25}>Examples</H3>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={26}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={26}\\r\\n\\t\\t\\t\\t\\t\\t\\t>Set of natural numbers less than 10 and divisible by 2 is {`\\\\\\\\(\\\\\\\\{2, 4, 6, 8\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={27}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={27}>Set of English vowels is {`\\\\\\\\(\\\\\\\\{a, e, i, o, u\\\\\\\\}\\\\\\\\)`}.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={28}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={28}\\r\\n\\t\\t\\t\\t\\t\\t\\t>Set of roots of quadratic equation \\\\(x^2 - 3x + 2 = 0\\\\) is {`\\\\\\\\(\\\\\\\\{1, 2\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={29}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"remark\\" isActive{29}>Remarks</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={30}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={30}\\r\\n\\t\\t\\t\\t\\t\\t\\t>In roster form, the order in which the elements are listed does not matter. For\\r\\n\\t\\t\\t\\t\\t\\t\\texample, the set {`\\\\\\\\(\\\\\\\\{2, 4\\\\\\\\}\\\\\\\\)`} is the same as {`\\\\\\\\(\\\\\\\\{4, 2\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={31}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={31}\\r\\n\\t\\t\\t\\t\\t\\t\\t>In roster form, repeating an element in the list does not change the set. Hence, an\\r\\n\\t\\t\\t\\t\\t\\t\\telement is usually listed only once in the set. For example, the set of letter in\\r\\n\\t\\t\\t\\t\\t\\t\\tBETTER is {`\\\\\\\\(\\\\\\\\{B, E, T, T, E, R\\\\\\\\}\\\\\\\\)`}, there is no need to repeat E and T. We can\\r\\n\\t\\t\\t\\t\\t\\t\\tjust write {`\\\\\\\\(\\\\\\\\{B, E, T, R\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={32}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={32}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set of roots of quadratic equation \\\\(x^2 - 2x + 1 = 0\\\\) is {`\\\\\\\\(\\\\\\\\{1, 1\\\\\\\\}\\\\\\\\)`} or\\r\\n\\t\\t\\t\\t\\t\\t\\tjust {`\\\\\\\\(\\\\\\\\{1\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={33}>\\r\\n\\t\\t\\t\\t<H2 isActive={33}>Set Builder Form</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={34}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={34}>\\r\\n\\t\\t\\t\\t\\t\\tIn set-builder form, we specify a property that is satisfied <strong>only</strong> by\\r\\n\\t\\t\\t\\t\\t\\tthe elements of the set. It is written as {`\\\\\\\\[\\\\\\\\{x : \\\\\\\\text{Property satisfied by } x\\\\\\\\}\\\\\\\\]`}\\r\\n\\t\\t\\t\\t\\t\\tThe symbol \\\\(x\\\\) can be replaced with any other symbol like \\\\(a, b, y\\\\) etc. The colon (:)\\r\\n\\t\\t\\t\\t\\t\\tstands for \\"such that\\". After colon (:) we write the property satisfied by all elements of\\r\\n\\t\\t\\t\\t\\t\\tthe set.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={35}>\\r\\n\\t\\t\\t\\t<H3 class=\\"examples\\" isActive{35}>Examples</H3>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={36}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={36}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set-builder form of the set {`\\\\\\\\(\\\\\\\\{2, 4, 6, 8\\\\\\\\}\\\\\\\\)`} is {`\\\\\\\\(\\\\\\\\{x: x\\\\\\\\)`} is a natural\\r\\n\\t\\t\\t\\t\\t\\t\\tnumbers less than 10 and divisible by 2{`\\\\\\\\(\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={37}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={37}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set-builder form of the set {`\\\\\\\\(\\\\\\\\{a, e, i, o, u\\\\\\\\}\\\\\\\\)`} is {`\\\\\\\\(\\\\\\\\{x : x \\\\\\\\text{ is an English vowel}\\\\\\\\}\\\\\\\\)`}.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={38}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={38}>\\r\\n\\t\\t\\t\\t\\t\\t\\tLet {`\\\\\\\\(A = \\\\\\\\Big\\\\\\\\{\\\\\\\\dfrac{2}{3}, \\\\\\\\dfrac{3}{4}, \\\\\\\\dfrac{4}{5}, \\\\\\\\dfrac{5}{6},\\\\\\\\dfrac{6}{7}\\\\\\\\Big\\\\\\\\}\\\\\\\\)`},\\r\\n\\t\\t\\t\\t\\t\\t\\tthen in set-builder form it will be written as {`\\\\\\\\[\\\\\\\\{x: x = \\\\\\\\frac{n + 1}{n + 2}, \\\\\\\\text{ where } n \\\\\\\\text{ is a natural number and } 1\\\\\\\\leq n\\\\\\\\leq 5\\\\\\\\}\\\\\\\\]`}\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</section>\\r\\n\\r\\n\\t\\t{#if !$presentationMode}\\r\\n\\t\\t\\t<div class=\\"youtube\\">\\r\\n\\t\\t\\t\\t<iframe\\r\\n\\t\\t\\t\\t\\twidth=\\"100%\\"\\r\\n\\t\\t\\t\\t\\theight=\\"auto\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/kj1VeKqMlJc\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"YouTube video player\\"\\r\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\r\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\"\\r\\n\\t\\t\\t\\t\\tallowfullscreen\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\r\\n\\t<Item item={39}>\\r\\n\\t\\t<section>\\r\\n\\t\\t\\t<h2>Practice</h2>\\r\\n\\t\\t\\t<Practice {generateProblem} />\\r\\n\\t\\t</section>\\r\\n\\t</Item>\\r\\n\\r\\n\\t{#if $presentationMode && $currentSlide >= 2}\\r\\n\\t\\t<div class=\\"pad\\" />\\r\\n\\t{/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t/* p {\\r\\n            text-indent: 2em;\\r\\n        } */\\r\\n\\t/* .image {\\r\\n            display: flex;\\r\\n            justify-content: center;\\r\\n            width: min(95vw, 600px);\\r\\n        } */\\r\\n\\t.display {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tposition: -webkit-sticky;\\r\\n\\t}\\r\\n\\t.youtube {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 300px;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 5em;\\r\\n\\t\\t/* box-shadow: 0 0 3px gray;\\r\\n\\t\\tbackground-color: white; */\\r\\n\\t\\tz-index: 10;\\r\\n\\t\\talign-self: flex-start;\\r\\n\\t}\\r\\n\\tarticle {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t\\t/* in: all 1s; */\\r\\n\\t}\\r\\n\\t/* aside {\\r\\n            background-color: rgb(230, 228, 228);\\r\\n            cursor: pointer;\\r\\n            width: 1em;\\r\\n        } */\\r\\n\\t.absolute {\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\t/* width: 90vw; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 600px;\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\tpadding: 0 1em 0 1em;\\r\\n\\t}\\r\\n\\t.absolute::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.pad {\\r\\n\\t\\tmin-height: 150px;\\r\\n\\t}\\r\\n\\t/*  \\r\\n        figure {\\r\\n            \\r\\n            width: 300px;\\r\\n        } */\\r\\n\\r\\n\\t.thumbnail {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\t.statement {\\r\\n\\t\\tbackground: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));\\r\\n\\t\\tcolor: rgb(246, 246, 246);\\r\\n\\t\\ttext-shadow: 1px 1px 3px rgb(4, 4, 4);\\r\\n\\t\\tbox-shadow: 1px 1px 3px rgb(129, 128, 128);\\r\\n\\t\\tpadding: 1em;\\r\\n\\t}\\r\\n\\t.grid {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: auto 420px;\\r\\n\\t}\\r\\n\\t.flex {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column-reverse;\\r\\n\\t}\\r\\n\\t.contentpart {\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.gridBackground {\\r\\n\\t\\tbackground-image: url(\'/background.svg\');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAocC,sBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,cACX,CACA,sBAAS,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CAGR,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UACb,CACA,qBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAEV,CAMA,uBAAU,CACT,MAAM,CAAE,IAAI,CAEZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CAGb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB,CACA,uBAAS,mBAAoB,CAC5B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,kBAAK,CACJ,UAAU,CAAE,KACb,CAOA,wBAAW,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CACA,wBAAW,CACV,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC1E,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,OAAO,CAAE,GACV,CACA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAC7B,CACA,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACjB,CACA,0BAAa,CACZ,OAAO,CAAE,KACV,CACA,6BAAgB,CACf,gBAAgB,CAAE,sBAAsB,CACxC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAClB"}'
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
    let N = 5;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        values[0] = `Collection of purest rivers`;
        values[1] = `Collection of states in India`;
        values[2] = `Collection of countries`;
        values[3] = `Collection of my watches`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is a not set?`;
        break;
      }
      case 1: {
        let m = randInt(20, 10);
        let n = randInt(Math.floor(m / 2), 1);
        let l = randInt(Math.floor(2 * n / 3), 2);
        n = Math.random() < 0.5 ? n : -n;
        let set = new Sets();
        for (let i = n + 1; i < m; i++) {
          set.e.push(i);
        }
        let subA = new Sets(set.e.filter((item) => item % l == 0));
        values[0] = `\\(${subA.str()}\\)`;
        values[1] = `\\(${set.randomSubset().str()}\\)`;
        values[2] = `\\(${set.randomSubset().str()}\\)`;
        values[3] = `\\(${set.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is correct Roster form of the set \\[ x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\]`;
        break;
      }
      case 2: {
        let A = new Sets();
        let U = new Sets();
        U.interval(-10, 10);
        A.randomSet(-10, 10, randInt(10, 8));
        let C = U.diff(A);
        let B = A.krandomSubset(3);
        values[0] = `\\(${C.e[Math.floor(Math.random() * C.e.length)]}\\in A\\)`;
        values[1] = `\\(${B.e[0]}\\in A\\)`;
        values[2] = `\\(${B.e[1]}\\in A\\)`;
        values[3] = `\\(${B.e[2]}\\in A\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Given a set \\[A = ${A.str()}\\] which of the following is not correct?`;
        break;
      }
      case 3: {
        let m = randInt(20, 10);
        let n = randInt(Math.floor(m / 2), 1);
        let l = randInt(Math.floor(2 * n / 3), 2);
        n = Math.random() < 0.5 ? n : -n;
        let set = new Sets();
        for (let i = n + 1; i < m; i++) {
          set.e.push(i);
        }
        let setA = new Sets(set.e.filter((item) => item % l == 0));
        values[0] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\}\\)`;
        values[1] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m}\\}\\)`;
        values[2] = `\\(\\{x : x \\text{ is an integer such that } ${m} < x < ${n} \\text{ and divisible by } ${l}\\}\\)`;
        values[3] = `\\(\\{x : x \\text{ is an integer such that } x \\text{ is divisible by } ${l}\\}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following is correct set-builder form of the set \\[${setA.str()}\\]`;
        break;
      }
      case 4: {
        let q = new Quadratic(0, 0, 0, "n");
        q.rand(-3, 3);
        let q1 = new Quadratic(0, 0, 0, "n");
        q1.rand(-3, 3);
        let q2 = new Quadratic(0, 0, 0, "n");
        q2.rand(-3, 3);
        let q3 = new Quadratic(0, 0, 0, "n");
        q3.rand(-3, 3);
        let seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];
        let set = new Sets(seq);
        values[0] = q.str();
        values[1] = q1.str();
        values[2] = q2.str();
        values[3] = q3.str();
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = "\\(\\{x: x = " + values[i] + ", n~\\) is a natural number and \\(~1\\leq n\\leq 5\\}\\)";
        }
        problemset.s = `Which of the following is correct set-builder form of the set \\[${set.str()}\\]`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1zxtvw_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description"${add_attribute("content", $selectedSection, 0)}><!-- HEAD_svelte-1zxtvw_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-dgnj1u",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-dgnj1u" data-svelte-h="svelte-100fua0"><img class="statement svelte-dgnj1u" width="100%" src="/notes/maths/sets/representation/heroparadox.svg" alt="" style="color:white;"></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-dgnj1u"}"><section class="contentpart svelte-dgnj1u">${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Definition`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `We are used to a practical idea of what is a <em data-svelte-h="svelte-11glcom">collection</em>. A <em data-svelte-h="svelte-xnlqja">set</em> is the
						mathematical refinement of this idea of collection. It turns out that not every
						collection can be a set. One basic requirement of a mathematical concept is that its
						definition must be unique. Not every collection has a unique definition. Consider, for
						example, <span class="specialtext" data-svelte-h="svelte-sve45t">the hero paradox</span>. A <em data-svelte-h="svelte-d3z77m">hero</em> is a person
						who helps those and only those, who can not help themselves.
						<em data-svelte-h="svelte-9p558w">Does the hero help himself?</em>`;
        }
      })} ${validate_component(Image, "Image").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<img style="width: 100%;" src="/notes/maths/sets/representation/heroparadox.svg" alt="">`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `A simple idea of collections can lead to many such paradoxes.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `Such paradoxes can be avoided if it is possible to decide, with certainty, whether an
						object is part of the collection. This is how we define the mathematical notion of a <em data-svelte-h="svelte-3200fp">set</em>.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 4 }, {}, {
        default: () => {
          return `A <strong data-svelte-h="svelte-1moj4iy">set</strong> is a <em data-svelte-h="svelte-1exn8rm">well-defined</em> collection of objects.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The property <em data-svelte-h="svelte-1exn8rm">well-defined</em> means given a set and an object, we can determine,
						without ambiguity, whether the object <em data-svelte-h="svelte-tvzq7u">belongs</em> to the set or not.`;
        }
      })}`;
    }
  })}</section> <section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 6 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Collection of students in a given class is a set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `Alphabets in English is a set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `Natural numbers divisible by 2 is a set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Collection of circles of different radii is a set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `Collection of all rivers in the world is a set.`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `Elements of a set`;
        }
      })}`;
    }
  })} <section><ul>${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `A set is usually denoted by capital letters \\(A, B, X, Y\\) etc.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 14 }, {}, {
        default: () => {
          return `Members of a set are called elements of the set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Elements of a set are usually represented by small letters \\(a, b, x, y\\) etc.`;
        }
      })}`;
    }
  })}</ul> ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { "isActive{16}": true }, {}, {
        default: () => {
          return `Epsilon (\\(\\in\\)) notation`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `If \\(a\\) is an elment of a set \\(A\\), we say that \\(a\\) <em data-svelte-h="svelte-1x6vg9f">belongs to</em> \\(A\\) and
							denote this fact using \\(a\\in A\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `If \\(a\\) is <strong data-svelte-h="svelte-1k97oe1">not</strong> an elment of a set \\(A\\), we say that \\(a\\)
							<em data-svelte-h="svelte-1lb1esd">does not belongs to</em> \\(A\\) and denote this fact using \\(a\\notin A\\).`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{19}": true }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `If \\(A\\) is the set of vowels in English, then \\(a\\in A\\) because \\(a\\) is a vowel,
							but \\(x\\notin A\\) because \\(x\\) is not a vowel.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `If \\(E\\) is the set of Natural numbers divisible by 2, then \\(2\\in E\\), but \\(0\\notin
							E\\) and \\(3\\notin E\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `If \\(R\\) is the set of all rivers in the world, then \\(Ganga\\in R\\), but
							\\(India\\notin R\\).`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 23 }, {}, {
        default: () => {
          return `Roster Form`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 24 }, {}, {
        default: () => {
          return `In roster form, all the elements of a set are listed, comma-separated and enclosed
						within braces ${escape("\\[\\{a_1, a_2,\\dots, a_n \\}\\]")}`;
        }
      })}`;
    }
  })}</section> ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{25}": true }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <section><ul>${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 26 }, {}, {
        default: () => {
          return `Set of natural numbers less than 10 and divisible by 2 is ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 27 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 27 }, {}, {
        default: () => {
          return `Set of English vowels is ${escape(`\\(\\{a, e, i, o, u\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 28 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 28 }, {}, {
        default: () => {
          return `Set of roots of quadratic equation \\(x^2 - 3x + 2 = 0\\) is ${escape(`\\(\\{1, 2\\}\\)`)}.`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 29 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "remark", "isActive{29}": true }, {}, {
        default: () => {
          return `Remarks`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 30 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 30 }, {}, {
        default: () => {
          return `In roster form, the order in which the elements are listed does not matter. For
							example, the set ${escape(`\\(\\{2, 4\\}\\)`)} is the same as ${escape(`\\(\\{4, 2\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 31 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 31 }, {}, {
        default: () => {
          return `In roster form, repeating an element in the list does not change the set. Hence, an
							element is usually listed only once in the set. For example, the set of letter in
							BETTER is ${escape(`\\(\\{B, E, T, T, E, R\\}\\)`)}, there is no need to repeat E and T. We can
							just write ${escape(`\\(\\{B, E, T, R\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 32 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 32 }, {}, {
        default: () => {
          return `The set of roots of quadratic equation \\(x^2 - 2x + 1 = 0\\) is ${escape(`\\(\\{1, 1\\}\\)`)} or
							just ${escape(`\\(\\{1\\}\\)`)}.`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 33 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 33 }, {}, {
        default: () => {
          return `Set Builder Form`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 34 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 34 }, {}, {
        default: () => {
          return `In set-builder form, we specify a property that is satisfied <strong data-svelte-h="svelte-q7jmmy">only</strong> by
						the elements of the set. It is written as ${escape(`\\[\\{x : \\text{Property satisfied by } x\\}\\]`)}
						The symbol \\(x\\) can be replaced with any other symbol like \\(a, b, y\\) etc. The colon (:)
						stands for &quot;such that&quot;. After colon (:) we write the property satisfied by all elements of
						the set.`;
        }
      })}`;
    }
  })}</section> ${validate_component(Item, "Item").$$render($$result, { item: 35 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", "isActive{35}": true }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <section><ul>${validate_component(Item, "Item").$$render($$result, { item: 36 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 36 }, {}, {
        default: () => {
          return `The set-builder form of the set ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)} is ${escape(`\\(\\{x: x\\)`)} is a natural
							numbers less than 10 and divisible by 2${escape(`\\(\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 37 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 37 }, {}, {
        default: () => {
          return `The set-builder form of the set ${escape(`\\(\\{a, e, i, o, u\\}\\)`)} is ${escape(`\\(\\{x : x \\text{ is an English vowel}\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 38 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 38 }, {}, {
        default: () => {
          return `Let ${escape(`\\(A = \\Big\\{\\dfrac{2}{3}, \\dfrac{3}{4}, \\dfrac{4}{5}, \\dfrac{5}{6},\\dfrac{6}{7}\\Big\\}\\)`)},
							then in set-builder form it will be written as ${escape(`\\[\\{x: x = \\frac{n + 1}{n + 2}, \\text{ where } n \\text{ is a natural number and } 1\\leq n\\leq 5\\}\\]`)}`;
        }
      })}`;
    }
  })}</ul></section></section> ${!$presentationMode ? `<div class="youtube svelte-dgnj1u" data-svelte-h="svelte-1061rq3"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/kj1VeKqMlJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``}</div> ${validate_component(Item, "Item").$$render($$result, { item: 39 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })} ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-dgnj1u"></div>` : ``} </article>`;
});
export {
  Page as default
};
