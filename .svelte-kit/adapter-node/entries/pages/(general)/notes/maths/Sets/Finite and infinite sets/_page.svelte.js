import { a as subscribe, d as null_to_empty } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores4.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { a as randInt } from "../../../../../../../chunks/common.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
import { H as H2 } from "../../../../../../../chunks/H2.js";
const css = {
  code: ".display.svelte-1p1xuho{position:relative;position:-webkit-sticky}.youtube.svelte-1p1xuho{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start\r\n	}article.svelte-1p1xuho{position:relative;padding:0.5em}.absolute.svelte-1p1xuho{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1p1xuho::-webkit-scrollbar{width:0;height:0}.pad.svelte-1p1xuho{min-height:150px}.thumbnail.svelte-1p1xuho{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1p1xuho{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em;background-image:url('/notes/maths/sets/finite/thumbnail.svg')}.grid.svelte-1p1xuho{display:grid;grid-template-columns:auto 420px}.flex.svelte-1p1xuho{display:flex;flex-direction:column-reverse}.contentpart.svelte-1p1xuho{padding:0.5em}.gridBackground.svelte-1p1xuho{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport {\\r\\n\\t\\tchapters,\\r\\n\\t\\tsections,\\r\\n\\t\\tselectedChapter,\\r\\n\\t\\tselectedSection\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport {\\r\\n\\t\\tpresentationMode,\\r\\n\\t\\tpresentation,\\r\\n\\t\\toverlay,\\r\\n\\t\\tslideCounter,\\r\\n\\t\\tautoScroll,\\r\\n\\t\\tcurrentSlide\\r\\n\\t} from '$lib/pages/notes/maths/stores';\\r\\n\\timport Practice from '$lib/utils/practiceproblem/Practice.svelte';\\r\\n\\timport Message from '$lib/ui/Message.svelte';\\r\\n\\timport { Point2D } from '$lib/utils/common/point2d';\\r\\n\\timport { randNum, randInt } from '$lib/utils/common/common';\\r\\n\\timport { Quadratic } from '$lib/utils/common/quadratic';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport P from '$lib/presentation/P.svelte';\\r\\n\\timport H1 from '$lib/presentation/H1.svelte';\\r\\n\\timport H2 from '$lib/presentation/H2.svelte';\\r\\n\\timport H3 from '$lib/presentation/H3.svelte';\\r\\n\\timport Li from '$lib/presentation/Li.svelte';\\r\\n\\timport Item from '$lib/presentation/Item.svelte';\\r\\n\\timport Image from '$lib/presentation/Image.svelte';\\r\\n\\tonMount(() => {\\r\\n\\t\\t$selectedChapter = 'Sets';\\r\\n\\t\\t$selectedSection = 'Finite and infinite sets';\\r\\n\\t\\t$slideCounter = 30;\\r\\n\\t\\t$currentSlide = -2;\\r\\n\\t\\tMathJax.typeset();\\r\\n\\t});\\r\\n\\tlet problemset = {\\r\\n\\t\\ts: '',\\r\\n\\t\\to: {\\r\\n\\t\\t\\tA: '',\\r\\n\\t\\t\\tB: '',\\r\\n\\t\\t\\tC: '',\\r\\n\\t\\t\\tD: ''\\r\\n\\t\\t},\\r\\n\\t\\tc: ''\\r\\n\\t};\\r\\n\\tconst generateProblem = (problemnumber) => {\\r\\n\\t\\tlet N = 3;\\r\\n\\t\\tproblemnumber = problemnumber % N;\\r\\n\\t\\tlet choices = ['A', 'B', 'C', 'D'];\\r\\n\\t\\tlet correctChoiceIndex = Math.floor(Math.random() * 4);\\r\\n\\t\\tproblemset.c = choices[correctChoiceIndex];\\r\\n\\t\\tlet ans;\\r\\n\\t\\tlet values = [0, 0, 0, 0];\\r\\n\\t\\tswitch (problemnumber) {\\r\\n\\t\\t\\tcase 0: {\\r\\n\\t\\t\\t\\tlet m = randInt(20, 1);\\r\\n\\t\\t\\t\\tm = Math.random() > 0.5 ? -m : m;\\r\\n\\t\\t\\t\\tlet n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\${n - m - 1}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\${n - m}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\${n - m + 1}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\${n - m + 2}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`What is the size of set containing \\\\\\\\(x\\\\\\\\) that satisfies \\\\\\\\[\${m}< x < \${n}\\\\\\\\]\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 1: {\\r\\n\\t\\t\\t\\tlet m = randInt(20, 1);\\r\\n\\t\\t\\t\\tm = Math.random() > 0.5 ? -m : m;\\r\\n\\t\\t\\t\\tlet n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\${m} < x < \${n}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\${m} > x < \${n}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\${n} < x > \${m}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\${m} < x > \${n}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Which of the following corresponds to a finite set?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 2: {\\r\\n\\t\\t\\t\\tlet m = randInt(20, 1);\\r\\n\\t\\t\\t\\tm = Math.random() > 0.5 ? -m : m;\\r\\n\\t\\t\\t\\tlet n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);\\r\\n\\r\\n\\t\\t\\t\\tvalues[0] = \`\\\\\\\\(\${m} < x < \${n}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[1] = \`\\\\\\\\(\${m} > x < \${n}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[2] = \`\\\\\\\\(\${n} < x > \${m}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tvalues[3] = \`\\\\\\\\(\${m} < x > \${n}\\\\\\\\)\`;\\r\\n\\t\\t\\t\\tfor (let i = 0; i < 4; i++) {\\r\\n\\t\\t\\t\\t\\tproblemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];\\r\\n\\t\\t\\t\\t}\\r\\n\\r\\n\\t\\t\\t\\tproblemset.s = \`Which of the following does not correspond to an infinite set?\`;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tproblemset = problemset;\\r\\n\\t\\treturn problemset;\\r\\n\\t};\\r\\n\\tlet DW;\\r\\n\\t$: splitMode = !$presentationMode && DW > 800;\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{$selectedSection}</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com{$page.url.pathname}\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Finite and infinite sets\\" />\\r\\n</svelte:head>\\r\\n<article class:absolute={$presentationMode} bind:this={$presentation} class=\\"{$presentationMode ? 'gridBackground':''}\\">\\r\\n\\t{#if $presentationMode && $currentSlide === -2}\\r\\n\\t\\t<div class=\\"thumbnail\\">\\r\\n\\t\\t\\t<div class=\\"statement\\">\\r\\n\\t\\t\\t\\t<p>Why is the set of primes infinite?</p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\t{#if !$presentationMode || $currentSlide >= -1}\\r\\n\\t\\t<h1>{$selectedSection}</h1>\\r\\n\\t{/if}\\r\\n\\t<div class=\\"display {splitMode ? 'grid' : 'flex'}\\" bind:clientWidth={DW}>\\r\\n\\t\\t<section class=\\"contentpart\\">\\r\\n\\t\\t\\t<Item item={0}>\\r\\n\\t\\t\\t\\t<H2 isActive={0}>Size of a set</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={1}>\\r\\n\\t\\t\\t\\t\\t<P isActive={1}>The analysis of sets begin with knowing its size.</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<Item item={2}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={2}>\\r\\n\\t\\t\\t\\t\\t\\tThe size of a set is equal to the number of elements in the set.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={3}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={3}>\\r\\n\\t\\t\\t\\t\\t\\t\\tThe size of a set is also called the <em>cardinality</em> of the set.\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={4}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={4}>For a set \\\\(A\\\\), its size is denote by \\\\(|A|\\\\) or \\\\(n(A)\\\\).</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t\\t<Item item={5}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"remark\\" isActive={5}>\\r\\n\\t\\t\\t\\t\\t\\tElements are counted only once. Repeating an element in the set will not change its\\r\\n\\t\\t\\t\\t\\t\\tsize.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={6}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={6}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={7}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={7}>\\r\\n\\t\\t\\t\\t\\t\\t\\tThe size of set {'\\\\\\\\(A = \\\\\\\\{1, 2, 3\\\\\\\\}\\\\\\\\)'} is \\\\(n(A) = 3\\\\).\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={8}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={8}>\\r\\n\\t\\t\\t\\t\\t\\t\\tThe size of set {'\\\\\\\\(A = \\\\\\\\{1, 1, 2, 3, 3, 3\\\\\\\\}\\\\\\\\)'} is also \\\\(n(A) = 3\\\\).\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={9}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={9}>\\r\\n\\t\\t\\t\\t\\t\\t\\tThe number of elements in an empty set is 0. That is, \\\\(n(\\\\varphi) = 0\\\\).\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={10}>\\r\\n\\t\\t\\t\\t<H2 isActive={10}>Finite Set</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={11}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={11}>\\r\\n\\t\\t\\t\\t\\t\\tIf counting of the elements of a set can finish, it called a <em>finite set</em>.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={12}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={12}>The size of a finite set is a positive integer.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={13}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={13}>Empty set is a finite set as well.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={14}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={14}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={15}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={15}>\\r\\n\\t\\t\\t\\t\\t\\t\\tCounting of elements of {'\\\\\\\\(A = \\\\\\\\{1, 2, 3\\\\\\\\}\\\\\\\\)'} can finish, and hence it is finite.\\r\\n\\t\\t\\t\\t\\t\\t</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={16}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={16}>The set of number of letters in a given English word is finite.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={17}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={17}>The set of roots of a finite degree polynomial is finite.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t\\t<Item item={18}>\\r\\n\\t\\t\\t\\t<H2 isActive={18}>Infinite Set</H2>\\r\\n\\t\\t\\t</Item>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={19}>\\r\\n\\t\\t\\t\\t\\t<P class=\\"definition\\" isActive={19}>\\r\\n\\t\\t\\t\\t\\t\\tIf counting of the elements of a set can not finish, it called an <em>infinite set</em>.\\r\\n\\t\\t\\t\\t\\t</P>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={20}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={20}>The size of an infinite set is infinity (\\\\(\\\\infty\\\\)).</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={21}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={21}>A complete roster form can not be provided for an infinite set.</Li>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={22}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={22}\\r\\n\\t\\t\\t\\t\\t\\t\\t>Some websites call infinite sets as <strong>uncountable</strong>. That is\\r\\n\\t\\t\\t\\t\\t\\t\\t<span style=\\"color:red; font-weight:bold;\\">wrong</span>. Finite sets are definitely\\r\\n\\t\\t\\t\\t\\t\\t\\tcountable. Infinite sets <em>can</em> be countable or uncountable. The concept of countability\\r\\n\\t\\t\\t\\t\\t\\t\\tis related to one-to-one correspondance with a subset of natural numbers. Key thing to\\r\\n\\t\\t\\t\\t\\t\\t\\tkeep in mind is that the process of counting an infinite set can not end.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<Item item={23}>\\r\\n\\t\\t\\t\\t\\t<H3 class=\\"examples\\" isActive={23}>Examples</H3>\\r\\n\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t<ul>\\r\\n\\t\\t\\t\\t\\t<Item item={24}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={24}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set of natural numbers \\\\(N\\\\) is an infinite set. It can be written in the Roster\\r\\n\\t\\t\\t\\t\\t\\t\\tform as {\`\\\\\\\\(\\\\\\\\{1, 2, 3,\\\\\\\\dots\\\\\\\\}\\\\\\\\)\`}. The \\\\(\\\\dots\\\\) denotes that the pattern goes\\r\\n\\t\\t\\t\\t\\t\\t\\ton. Here the pattern is that for any \\\\(n\\\\in N\\\\), the number \\\\(n+1\\\\) is also in \\\\(N\\\\).\\r\\n\\t\\t\\t\\t\\t\\t\\tAn unending process of counting of elements of \\\\(N\\\\) can be provided, hence it is a\\r\\n\\t\\t\\t\\t\\t\\t\\tcountable set.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={25}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={25}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set \\\\(E\\\\) of numbers divisible by \\\\(2\\\\) is an infinite set. It can be written in\\r\\n\\t\\t\\t\\t\\t\\t\\tthe Roster form as {\`\\\\\\\\(\\\\\\\\{2, 4, 6,\\\\\\\\dots\\\\\\\\}\\\\\\\\)\`}. The \\\\(\\\\dots\\\\) denotes that the\\r\\n\\t\\t\\t\\t\\t\\t\\tpattern goes on. Here the pattern is that for any \\\\(n\\\\in E\\\\), the number \\\\(n+2\\\\) is\\r\\n\\t\\t\\t\\t\\t\\t\\talso in \\\\(E\\\\). An unending process of counting of elements of \\\\(E\\\\) can be provided,\\r\\n\\t\\t\\t\\t\\t\\t\\thence it is a countable set.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={26}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={26}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set \\\\(Z\\\\) of integers is an infinite set. It can be written in the Roster form as {\`\\\\\\\\(\\\\\\\\{\\\\\\\\dots, -3, -2, -1, 0, 1, 2, 3,\\\\\\\\dots\\\\\\\\}\\\\\\\\)\`}.\\r\\n\\t\\t\\t\\t\\t\\t\\tThe \\\\(\\\\dots\\\\) denotes that the pattern goes on. Here the pattern is that for any\\r\\n\\t\\t\\t\\t\\t\\t\\t\\\\(n\\\\in Z\\\\), both numbers \\\\(n-1\\\\) and \\\\(n+1\\\\) belong to \\\\(Z\\\\). An unending process of\\r\\n\\t\\t\\t\\t\\t\\t\\tcounting of elements of \\\\(Z\\\\) can be provided, hence it is a countable set. If you\\r\\n\\t\\t\\t\\t\\t\\t\\timagine the set of natural numbers as an arrow indicating that the numbers keep\\r\\n\\t\\t\\t\\t\\t\\t\\tincreasing in one direction, the set of integers would represent a line such that\\r\\n\\t\\t\\t\\t\\t\\t\\tnumbers keep on decreasing in one direction and increasing in another direction. To\\r\\n\\t\\t\\t\\t\\t\\t\\tindicate this we have used \\\\(\\\\dots\\\\) at the begining as well as at the end in the\\r\\n\\t\\t\\t\\t\\t\\t\\tRoster form.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={27}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={27}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set of real numbers \\\\(R\\\\) is an infinite set. \\\\(R\\\\) is an uncountable set. Why?\\r\\n\\t\\t\\t\\t\\t\\t\\tThe proof is a little complicated. Geog Cantor gave the first proof.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t\\t<Item item={28}>\\r\\n\\t\\t\\t\\t\\t\\t<Li isActive={28}\\r\\n\\t\\t\\t\\t\\t\\t\\t>The set of prime numbers is an infinite set. If we have discovered \\\\(p_1, p_2,\\\\dots,\\r\\n\\t\\t\\t\\t\\t\\t\\tp_n\\\\) as the first \\\\(n\\\\) primes, then the number \\\\(p1\\\\times p2\\\\times \\\\dots \\\\times p_n\\r\\n\\t\\t\\t\\t\\t\\t\\t+ 1\\\\) is either a prime or divisible by a prime larger than \\\\(p_n\\\\). In either case, a\\r\\n\\t\\t\\t\\t\\t\\t\\tprime larger than \\\\(p_n\\\\) exists. Hence, the set of primes must have infinitely many\\r\\n\\t\\t\\t\\t\\t\\t\\telements.</Li\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t</Item>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</section>\\r\\n\\t\\t{#if !$presentationMode}\\r\\n\\t\\t\\t<div class=\\"youtube\\">\\r\\n\\t\\t\\t\\t<iframe\\r\\n\\t\\t\\t\\t\\twidth=\\"420\\"\\r\\n\\t\\t\\t\\t\\theight=\\"300\\"\\r\\n\\t\\t\\t\\t\\tsrc=\\"https://www.youtube.com/embed/xitRVmUKQz8\\"\\r\\n\\t\\t\\t\\t\\ttitle=\\"YouTube video player\\"\\r\\n\\t\\t\\t\\t\\tframeborder=\\"0\\"\\r\\n\\t\\t\\t\\t\\tallow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\"\\r\\n\\t\\t\\t\\t\\tallowfullscreen\\r\\n\\t\\t\\t\\t/>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t</div>\\r\\n\\t<section>\\r\\n\\t\\t<Item item={29}>\\r\\n\\t\\t\\t<section>\\r\\n\\t\\t\\t\\t<h2>Practice</h2>\\r\\n\\t\\t\\t\\t<Practice {generateProblem} />\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</Item>\\r\\n\\t</section>\\r\\n\\t{#if $presentationMode && $currentSlide >= 2}\\r\\n\\t\\t<div class=\\"pad\\" />\\r\\n\\t{/if}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t.display {\\r\\n        position: relative;\\r\\n        position: -webkit-sticky;\\r\\n    }\\r\\n\\t.youtube {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 5em;\\r\\n\\t\\t/* box-shadow: 0 0 3px gray;\\r\\n\\t\\tbackground-color: white; */\\r\\n\\t\\tz-index: 10;\\r\\n        align-self: flex-start\\r\\n\\t}\\r\\n\\tarticle {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding: 0.5em;\\r\\n\\t}\\r\\n\\t.absolute {\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\t/* width: 90vw; */\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 600px;\\r\\n\\t\\t/* height: 90vh; */\\r\\n\\t\\t/* height: min(78vh, 60vw); */\\r\\n\\t\\t/* height: min(70vh,600px); */\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\tscrollbar-width: none;\\r\\n\\t\\t-ms-overflow-style: none;\\r\\n\\t\\tpadding: 0 1em 0 1em;\\r\\n\\t}\\r\\n\\t.absolute::-webkit-scrollbar {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\t.pad {\\r\\n\\t\\tmin-height: 150px;\\r\\n\\t}\\r\\n\\t.thumbnail {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tfont-size: 2.5em;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\t.statement {\\r\\n\\t\\tbackground: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));\\r\\n\\t\\tcolor: red;\\r\\n\\t\\ttext-shadow: 1px 1px 3px rgb(4, 4, 4);\\r\\n\\t\\tbox-shadow: 1px 1px 3px rgb(129, 128, 128);\\r\\n\\t\\tpadding: 1em;\\r\\n\\t\\tbackground-image: url('/notes/maths/sets/finite/thumbnail.svg');\\r\\n\\t}\\r\\n\\t.grid {\\r\\n        display: grid;\\r\\n        grid-template-columns: auto 420px;\\r\\n    }\\r\\n    .flex {\\r\\n        display: flex;\\r\\n        flex-direction: column-reverse;\\r\\n    }\\r\\n    .contentpart {\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n\\t.gridBackground {\\r\\n\\t\\tbackground-image: url('/background.svg');\\r\\n\\t\\tbackground-repeat: no-repeat;\\r\\n\\t\\tbackground-position: center;\\r\\n\\t\\tbackground-size: cover;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuUC,uBAAS,CACF,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,cACd,CACH,uBAAS,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CAGR,OAAO,CAAE,EAAE,CACL,UAAU,CAAE,UAAU;AAC9B,CAAC,CACA,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KACV,CACA,wBAAU,CACT,MAAM,CAAE,IAAI,CAEZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CAIb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB,CACA,wBAAS,mBAAoB,CAC5B,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CACT,CACA,mBAAK,CACJ,UAAU,CAAE,KACb,CACA,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CACA,yBAAW,CACV,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC1E,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,6CACnB,CACA,oBAAM,CACC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAChC,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cACpB,CACA,2BAAa,CACT,OAAO,CAAE,KACb,CACH,8BAAgB,CACf,gBAAgB,CAAE,sBAAsB,CACxC,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAClB"}`
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
    let N = 3;
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
        values[0] = `\\(${n - m - 1}\\)`;
        values[1] = `\\(${n - m}\\)`;
        values[2] = `\\(${n - m + 1}\\)`;
        values[3] = `\\(${n - m + 2}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `What is the size of set containing \\(x\\) that satisfies \\[${m}< x < ${n}\\]`;
        break;
      }
      case 1: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${m} < x < ${n}\\)`;
        values[1] = `\\(${m} > x < ${n}\\)`;
        values[2] = `\\(${n} < x > ${m}\\)`;
        values[3] = `\\(${m} < x > ${n}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following corresponds to a finite set?`;
        break;
      }
      case 2: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${m} < x < ${n}\\)`;
        values[1] = `\\(${m} > x < ${n}\\)`;
        values[2] = `\\(${n} < x > ${m}\\)`;
        values[3] = `\\(${m} < x > ${n}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following does not correspond to an infinite set?`;
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
  return `${$$result.head += `<!-- HEAD_svelte-ykzmzv_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Finite and infinite sets"><!-- HEAD_svelte-ykzmzv_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-1p1xuho",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-1p1xuho" data-svelte-h="svelte-1g15pk"><div class="statement svelte-1p1xuho"><p>Why is the set of primes infinite?</p></div></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-1p1xuho"}"><section class="contentpart svelte-1p1xuho">${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Size of a set`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `The analysis of sets begin with knowing its size.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 2 }, {}, {
        default: () => {
          return `The size of a set is equal to the number of elements in the set.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `The size of a set is also called the <em data-svelte-h="svelte-47b3di">cardinality</em> of the set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `For a set \\(A\\), its size is denote by \\(|A|\\) or \\(n(A)\\).`;
        }
      })}`;
    }
  })}</ul> ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "remark", isActive: 5 }, {}, {
        default: () => {
          return `Elements are counted only once. Repeating an element in the set will not change its
						size.`;
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
          return `The size of set ${escape("\\(A = \\{1, 2, 3\\}\\)")} is \\(n(A) = 3\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `The size of set ${escape("\\(A = \\{1, 1, 2, 3, 3, 3\\}\\)")} is also \\(n(A) = 3\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `The number of elements in an empty set is 0. That is, \\(n(\\varphi) = 0\\).`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Finite Set`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 11 }, {}, {
        default: () => {
          return `If counting of the elements of a set can finish, it called a <em data-svelte-h="svelte-yr7p35">finite set</em>.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `The size of a finite set is a positive integer.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `Empty set is a finite set as well.`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 14 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Counting of elements of ${escape("\\(A = \\{1, 2, 3\\}\\)")} can finish, and hence it is finite.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 16 }, {}, {
        default: () => {
          return `The set of number of letters in a given English word is finite.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `The set of roots of a finite degree polynomial is finite.`;
        }
      })}`;
    }
  })}</ul></section> ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `Infinite Set`;
        }
      })}`;
    }
  })} <section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 19 }, {}, {
        default: () => {
          return `If counting of the elements of a set can not finish, it called an <em data-svelte-h="svelte-1u7yhmq">infinite set</em>.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `The size of an infinite set is infinity (\\(\\infty\\)).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 21 }, {}, {
        default: () => {
          return `A complete roster form can not be provided for an infinite set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `Some websites call infinite sets as <strong data-svelte-h="svelte-jrjt7c">uncountable</strong>. That is
							<span style="color:red; font-weight:bold;" data-svelte-h="svelte-o2hvbg">wrong</span>. Finite sets are definitely
							countable. Infinite sets <em data-svelte-h="svelte-gt6eco">can</em> be countable or uncountable. The concept of countability
							is related to one-to-one correspondance with a subset of natural numbers. Key thing to
							keep in mind is that the process of counting an infinite set can not end.`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 23 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 24 }, {}, {
        default: () => {
          return `The set of natural numbers \\(N\\) is an infinite set. It can be written in the Roster
							form as ${escape(`\\(\\{1, 2, 3,\\dots\\}\\)`)}. The \\(\\dots\\) denotes that the pattern goes
							on. Here the pattern is that for any \\(n\\in N\\), the number \\(n+1\\) is also in \\(N\\).
							An unending process of counting of elements of \\(N\\) can be provided, hence it is a
							countable set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 25 }, {}, {
        default: () => {
          return `The set \\(E\\) of numbers divisible by \\(2\\) is an infinite set. It can be written in
							the Roster form as ${escape(`\\(\\{2, 4, 6,\\dots\\}\\)`)}. The \\(\\dots\\) denotes that the
							pattern goes on. Here the pattern is that for any \\(n\\in E\\), the number \\(n+2\\) is
							also in \\(E\\). An unending process of counting of elements of \\(E\\) can be provided,
							hence it is a countable set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 26 }, {}, {
        default: () => {
          return `The set \\(Z\\) of integers is an infinite set. It can be written in the Roster form as ${escape(`\\(\\{\\dots, -3, -2, -1, 0, 1, 2, 3,\\dots\\}\\)`)}.
							The \\(\\dots\\) denotes that the pattern goes on. Here the pattern is that for any
							\\(n\\in Z\\), both numbers \\(n-1\\) and \\(n+1\\) belong to \\(Z\\). An unending process of
							counting of elements of \\(Z\\) can be provided, hence it is a countable set. If you
							imagine the set of natural numbers as an arrow indicating that the numbers keep
							increasing in one direction, the set of integers would represent a line such that
							numbers keep on decreasing in one direction and increasing in another direction. To
							indicate this we have used \\(\\dots\\) at the begining as well as at the end in the
							Roster form.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 27 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 27 }, {}, {
        default: () => {
          return `The set of real numbers \\(R\\) is an infinite set. \\(R\\) is an uncountable set. Why?
							The proof is a little complicated. Geog Cantor gave the first proof.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 28 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 28 }, {}, {
        default: () => {
          return `The set of prime numbers is an infinite set. If we have discovered \\(p_1, p_2,\\dots,
							p_n\\) as the first \\(n\\) primes, then the number \\(p1\\times p2\\times \\dots \\times p_n
							+ 1\\) is either a prime or divisible by a prime larger than \\(p_n\\). In either case, a
							prime larger than \\(p_n\\) exists. Hence, the set of primes must have infinitely many
							elements.`;
        }
      })}`;
    }
  })}</ul></section></section> ${!$presentationMode ? `<div class="youtube svelte-1p1xuho" data-svelte-h="svelte-7wdlz5"><iframe width="420" height="300" src="https://www.youtube.com/embed/xitRVmUKQz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``}</div> <section>${validate_component(Item, "Item").$$render($$result, { item: 29 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section> ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-1p1xuho"></div>` : ``} </article>`;
});
export {
  Page as default
};
