<script id="MathJax-script">
	// @ts-nocheck
	import {
		chapters,
		sections,
		selectedChapter,
		selectedSection
	} from '$lib/pages/notes/maths/stores';
	import {
		presentationMode,
		presentation,
		overlay,
		slideCounter,
		autoScroll,
		currentSlide
	} from '$lib/pages/notes/maths/stores';
	import Practice from '$lib/utils/practiceproblem/Practice.svelte';
	import Message from '$lib/ui/Message.svelte';
	import { Sets } from '$lib/utils/common/sets';
	import { Surd } from '$lib/utils/common/surd';
	import { Q } from '$lib/utils/common/fraction';
	import { Point2D } from '$lib/utils/common/point2d';
	import { randNum, randInt } from '$lib/utils/common/common';
	import { page } from '$app/stores';
	import { TeX } from '$lib/utils/common/constants';
	import { onMount } from 'svelte';
	import P from '$lib/presentation/P.svelte';
	import H1 from '$lib/presentation/H1.svelte';
	import H2 from '$lib/presentation/H2.svelte';
	import H3 from '$lib/presentation/H3.svelte';
	import Li from '$lib/presentation/Li.svelte';
	import Dt from '$lib/presentation/Dt.svelte';
	import Dd from '$lib/presentation/Dd.svelte';
	import Item from '$lib/presentation/Item.svelte';
	import Image from '$lib/presentation/Image.svelte';
    import Div from '$lib/presentation/Div.svelte';
	onMount(() => {
		$selectedChapter = 'Sets';
		$selectedSection = 'Real numbers';
		$slideCounter = 20;
		$currentSlide = -2;
		MathJax.typeset();
	});
	let problemset = {
		s: '',
		o: {
			A: '',
			B: '',
			C: '',
			D: ''
		},
		c: ''
	};
	const generateProblem = (problemnumber) => {
		let N = 1;
		problemnumber = problemnumber % N;
		let choices = ['A', 'B', 'C', 'D'];
		let correctChoiceIndex = Math.floor(Math.random() * 4);
		problemset.c = choices[correctChoiceIndex];
		let ans;
		let values = [0, 0, 0, 0];
		switch (problemnumber) {
			case 0: {
				let n = randInt(20, 1);
				let m = randInt(n + 1, n + 10) + 10;
				let k = randInt(8, 2);
				let irrationals = new Sets(['e', '\\pi', '\\varphi'])
				let s = new Sets();
				s.randomSet(n, m, k);

				let r = Math.random();
				let suset = r < 0.25 ? 'N' : r < 0.5 ? 'Z' : r < 0.75 ? 'Q' : 'T';
				let opt = [
					`\\(A\\subset \\mathbb{N}\\)`,
					`\\(A\\subset \\mathbb{Z}\\)`,
					`\\(A\\subset \\mathbb{Q}\\)`,
					`\\(A\\subset \\mathbb{T}\\)`
				];
				let ques = '';
				let co;
				switch (suset) {
					case 'N':
						s.add(randInt(m, n));
						ques = 'not';
						co = 3;
						break;
					case 'Z':
						s.add(-randInt(m, n));
						ques = 'not';
						co = 0;
						break;
					case 'Q':
						let q = new Q();
						q.randF(m, n);
						let q1 = q.add(new Q(1, 2));
						s.add(q1);
						co = 2;
						break;
					case 'T':
						s = irrationals.randomSubset();
						let nq = new Surd();
						nq.randomSurd(m);
						s.add(nq);
						let nq1 = new Surd();
						s.add(nq1);
						co = 3;
						break;
				}
				for (let i = 0; i < 4; i++) {
					problemset.o[choices[(correctChoiceIndex + i) % 4]] = opt[(co + i) % 4];
				}
				if (suset == 'Z') {
					problemset.o[choices[correctChoiceIndex + 3]] = `\\(A\\subset \\mathbb{R}\\)`;
				}
				problemset.s = `Given set \\(A = ${s.str()}\\), which of the following is ${ques} correct?`;
				break;
			}
			case 1: {

			}
		}
		problemset = problemset;
		return problemset;
	};
	let DW;
	$: splitMode = !$presentationMode && DW > 800;
</script>

<svelte:head>
	<title>{$selectedSection}</title>
	<link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
	<meta name="description" content="Real numbers" />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation} class="{$presentationMode ? 'gridBackground':''}">
	{#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<div class="statement">
				<p></p>
			</div>
		</div>
	{/if}
	{#if !$presentationMode || $currentSlide >= -1}
		<h1>{$selectedSection}</h1>
	{/if}
	<div class="display {splitMode ? 'grid' : 'flex'}" bind:clientWidth={DW}>
		<section class="contentpart">
			<section>
				<Item item={0}>
					<P isActive={0}>
                        All numbers are either real numbers or made of real numbers. The set of real numbers is denoted by \(R\) or \({TeX.bbR}\). It is an infinite uncountable set. In this video, we'll review some of its well-known subsets and introduce intervals. Let's begin with the subsets first.
                    </P>
				</Item>
				<dl>
					<Item item={1}>
						<Dt isActive={1}>
							Natural numbers
						</Dt>
					</Item>
					<Item item={1}>
						<Dd isActive={1}>
							{`\\(\\mathbb{N} = \\{1, 2, 3, \\dots\\}\\)`}
						</Dd>
					</Item>
					
					<Item item={2}>
						<Dt isActive={2}>
							Integers
						</Dt>
					</Item>
					<Item item={2}>
						<Dd isActive={2}>
							{`\\(\\mathbb{Z} = \\{\\dots, -1, 0, 1, \\dots\\}\\)`}
						</Dd>
					</Item>
		
					<Item item={3}>
						<Dt isActive={3}>
							Rational numbers
						</Dt>
					</Item>
					<Item item={3}>
						<Dd isActive={3}>
							{`\\(\\mathbb{Q} = \\{x: x = \\dfrac{p}{q}, p, q\\in \\mathbb{Z}, q\\neq 0\\}\\)`}
						</Dd>
					</Item>
					
		
					<Item item={4}>
						<Dt isActive={4}>
							Irrational numbers
						</Dt>
					</Item>
					<Item item={4}>
						<Dd isActive={4}>
							{`\\(\\mathbb{T} = \\{x: x \\notin \\mathbb{Q}\\}\\)`}
						</Dd>
					</Item>
				</dl>
				<Item item={5}>
					<P isActive={5}>
                    A natural number is an integer as well. An integer is a rational number too. But, a rational
					number is not an irrational number. These observations can be written compactly as
					{`\\[\\mathbb{N}\\subset \\mathbb{Z}\\subset \\mathbb{Q} \\subset \\mathbb{R}, \\mathbb{T}\\subset\\mathbb{R},  \\mathbb{Q}\\not\\subset\\mathbb{T}\\]`}
                    </P>
				</Item>
				<Item item={6}>
					<Image isActive={6}>
						<img style="width:min(400px, 90vw);" src="/notes/maths/sets/real/subsetreal.svg" alt=''>
					</Image>
				</Item>
			</section>
		
			<section>
				<Item item={7}>
					<H3 class="examples" isActive={7}>Examples</H3>
				</Item>
				<ul>
					<Item item={8}>
						<Li isActive={8}>
							{`\\(\\{\\pi, \\sqrt{2}\\} \\subset \\mathbb{T}\\)`}
						</Li>
					</Item>
					<Item item={9}>
						<Li isActive={9}>
							{`\\(\\{1, -2, \\sqrt{3}, \\frac{1}{2}\\} \\not\\subset \\mathbb{T}\\)`}
						</Li>
					</Item>
				</ul>
			</section>
			<Item item={10}>
				<H2 isActive={10}>Intervals as subsets of {'\\(\\mathbb{R}\\)'}</H2>
			</Item>
			<Item item={11}>
				<P class="definition" isActive={11}>
					Let \(a, b{TeX.inR}\) and \(a {TeX.less} b\). Then the set of real numbers \({TeX.set(
						'y',
						'a<y<b'
					)}\) is called an <em>open interval</em> and is denoted by \((a,b)\). Note that \(a\) and \(b\) do
					not belong to the open interval.
				</P>
			</Item>
			<Item item={12}>
				<P class="definition" isActive={12}>
					Let \(a, b{TeX.inR}\) and \(a {TeX.less} b\). Then the set of real numbers \({TeX.set(
						'y',
						'a\\leq y\\leq b'
					)}\) is called a <em>closed interval</em> and is denoted by \([a,b]\). Note that \(a\) and \(b\)
					belong to the closed interval.
				</P>
			</Item>
			<Item item={13}>
				<P isActive={13}>There are two other type of intervals (called <em>clopen</em>).</P>
			</Item>
			<ul>
				<Item item={14}>
					<Li isActive={14}>
						\([a,b) = {TeX.set('y', 'a\\leq y<b')}\) where \(a\) is in the interval, but not \(b\).
					</Li>
				</Item>
				<Item item={15}>
					<Li isActive={15}>
						\((a,b] = {TeX.set('y', 'a< y\\leq b')}\) where \(b\) is in the interval, but not \(a\).
					</Li>
				</Item>
			</ul>
			<Item item={16}>
				<P isActive={16}>An interval of {TeX.R} is visualized by a segment on a number line.</P>
			</Item>
			
			<Item item={17}>
				<Image isActive={17}>
					<img style="width:min(400px, 90vw);" src="/notes/maths/sets/real/interval.svg" alt=''>
				</Image>
			</Item>
			<Item item={18}>
				<P class="definition" isActive={18}>
					The number \((b-a)\) is called the <em>length of any of the intervals</em> \((a,b), [a,b], [a,b)\)
					or \((a,b]\).
				</P>
			</Item>
		</section>
		{#if !$presentationMode}
			<div class="youtube">
				<iframe
					width="420"
					height="300"
					src="https://www.youtube.com/embed/w4SBKulJJh4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		{/if}
		{#if $presentationMode}
			<div class="slate" />
		{/if}
	</div>
	<section>
		<Item item={19}>
			<section>
				<h2>Practice</h2>
				<Practice {generateProblem} />
			</section>
		</Item>
	</section>
	{#if $presentationMode && $currentSlide >= 2}
		<div class="pad" />
	{/if}
</article>

<style>
	.display {
		position: relative;
		position: -webkit-sticky;
	}
	.youtube {
		width: 100%;
		display: flex;
		position: sticky;
		top: 5em;
		/* box-shadow: 0 0 3px gray;
		background-color: white; */
		z-index: 10;
		align-self: flex-start;
	}
	article {
		position: relative;
		padding: 0.5em;
	}
	.absolute {
		margin: auto;
		/* width: 90vw; */
		width: 100%;
		height: 600px;
		/* height: 90vh; */
		/* height: min(78vh, 60vw); */
		/* height: min(70vh,600px); */
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding: 0 1em 0 1em;
	}
	.absolute::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	.pad {
		min-height: 150px;
	}
	.thumbnail {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5em;
		height: 100%;
	}
	.statement {
		background: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));
		color: red;
		text-shadow: 1px 1px 3px rgb(4, 4, 4);
		/* box-shadow: 1px 1px 3px rgb(129, 128, 128); */
		padding: 1em;
		background-image: url('/notes/maths/sets/real/subsetreal.svg');
		background-repeat: no-repeat;
		background-position: center;
        width: 500px;
        height: 500px;
	}
	.grid {
		display: grid;
		grid-template-columns: auto 420px;
	}
	.flex {
		display: flex;
		flex-direction: column-reverse;
	}
	.contentpart {
		padding: 0.5em;
	}
	.gridBackground {
		background-image: url('/background.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>

