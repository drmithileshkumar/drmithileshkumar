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
	import { Point2D } from '$lib/utils/common/point2d';
	import { randNum, randInt } from '$lib/utils/common/common';
	import { Sets } from '$lib/utils/common/sets';
	import { Quadratic } from '$lib/utils/common/quadratic';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import P from '$lib/presentation/P.svelte';
	import H1 from '$lib/presentation/H1.svelte';
	import H2 from '$lib/presentation/H2.svelte';
	import H3 from '$lib/presentation/H3.svelte';
	import Li from '$lib/presentation/Li.svelte';
	import Item from '$lib/presentation/Item.svelte';
	import Image from '$lib/presentation/Image.svelte';
	onMount(() => {
		$selectedChapter = 'Sets';
		$selectedSection = 'Sets and their representations';
		$slideCounter = 40;
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
		let N = 5;
		problemnumber = problemnumber % N;
		let choices = ['A', 'B', 'C', 'D'];
		let correctChoiceIndex = Math.floor(Math.random() * 4);
		problemset.c = choices[correctChoiceIndex];
		let ans;
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
				let n = randInt(Math.floor(m / 2), 1); // n < x < m /l
				let l = randInt(Math.floor((2 * n) / 3), 2);
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
				let l = randInt(Math.floor((2 * n) / 3), 2);
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
				let q = new Quadratic(0, 0, 0, 'n');
				q.rand(-3, 3);
				let q1 = new Quadratic(0, 0, 0, 'n');
				q1.rand(-3, 3);
				let q2 = new Quadratic(0, 0, 0, 'n');
				q2.rand(-3, 3);
				let q3 = new Quadratic(0, 0, 0, 'n');
				q3.rand(-3, 3);
				let seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];
				let set = new Sets(seq);
				values[0] = q.str();
				values[1] = q1.str();
				values[2] = q2.str();
				values[3] = q3.str();

				for (let i = 0; i < 4; i++) {
					problemset.o[choices[(correctChoiceIndex + i) % 4]] =
						'\\(\\{x: x = ' +
						values[i] +
						', n~\\)' +
						' is a natural number and ' +
						'\\(~1\\leq n\\leq 5\\}\\)';
				}
				problemset.s = `Which of the following is correct set-builder form of the set \\[${set.str()}\\]`;
				break;
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
	<meta name="description" content={$selectedSection} />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation} class="{$presentationMode ? 'gridBackground':''}">
	{#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<img
				class="statement"
				width="100%"
				src="/notes/maths/sets/representation/heroparadox.svg"
				alt=""
				style="color:white;"
			/>
		</div>
	{/if}
	{#if !$presentationMode || $currentSlide >= -1}
		<h1>{$selectedSection}</h1>
	{/if}
	<div class="display {splitMode ? 'grid' : 'flex'}" bind:clientWidth={DW}>
		<section class="contentpart">
			<Item item={0}>
				<H2 isActive={0}>Definition</H2>
			</Item>
			<section>
				<Item item={1}>
					<P isActive={1}>
						We are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the
						mathematical refinement of this idea of collection. It turns out that not every
						collection can be a set. One basic requirement of a mathematical concept is that its
						definition must be unique. Not every collection has a unique definition. Consider, for
						example, <span class="specialtext">the hero paradox</span>. A <em>hero</em> is a person
						who helps those and only those, who can not help themselves.
						<em>Does the hero help himself?</em>
					</P>
					<Image isActive={1}>
						<img
							style="width: 100%;"
							src="/notes/maths/sets/representation/heroparadox.svg"
							alt=""
						/>
					</Image>
				</Item>
				<Item item={2}>
					<P isActive={2}>A simple idea of collections can lead to many such paradoxes.</P>
				</Item>
				<Item item={3}>
					<P isActive={3}>
						Such paradoxes can be avoided if it is possible to decide, with certainty, whether an
						object is part of the collection. This is how we define the mathematical notion of a <em
							>set</em
						>.
					</P>
				</Item>
				<Item item={4}>
					<P class="definition" isActive={4}>
						A <strong>set</strong> is a <em>well-defined</em> collection of objects.
					</P>
				</Item>
				<Item item={5}>
					<P isActive={5}>
						The property <em>well-defined</em> means given a set and an object, we can determine,
						without ambiguity, whether the object <em>belongs</em> to the set or not.
					</P>
				</Item>
			</section>

			<section>
				<Item item={6}>
					<H3 class="examples" isActive={6}>Examples</H3>
				</Item>
				<ul>
					<Item item={7}>
						<Li isActive={7}>Collection of students in a given class is a set.</Li>
					</Item>
					<Item item={8}>
						<Li isActive={8}>Alphabets in English is a set.</Li>
					</Item>
					<Item item={9}>
						<Li isActive={9}>Natural numbers divisible by 2 is a set.</Li>
					</Item>
					<Item item={10}>
						<Li isActive={10}>Collection of circles of different radii is a set.</Li>
					</Item>
					<Item item={11}>
						<Li isActive={11}>Collection of all rivers in the world is a set.</Li>
					</Item>
				</ul>
			</section>
			<Item item={12}>
				<H2 isActive={12}>Elements of a set</H2>
			</Item>
			<section>
				<ul>
					<Item item={13}>
						<Li isActive={13}>A set is usually denoted by capital letters \(A, B, X, Y\) etc.</Li>
					</Item>
					<Item item={14}>
						<Li isActive={14}>Members of a set are called elements of the set.</Li>
					</Item>
					<Item item={15}>
						<Li isActive={15}
							>Elements of a set are usually represented by small letters \(a, b, x, y\) etc.</Li
						>
					</Item>
				</ul>
				<Item item={16}>
					<H3 isActive{16}>Epsilon (\(\in\)) notation</H3>
				</Item>
				<ul>
					<Item item={17}>
						<Li isActive={17}
							>If \(a\) is an elment of a set \(A\), we say that \(a\) <em>belongs to</em> \(A\) and
							denote this fact using \(a\in A\).</Li
						>
					</Item>
					<Item item={18}>
						<Li isActive={18}
							>If \(a\) is <strong>not</strong> an elment of a set \(A\), we say that \(a\)
							<em>does not belongs to</em> \(A\) and denote this fact using \(a\notin A\).</Li
						>
					</Item>
				</ul>
			</section>
			<section>
				<Item item={19}>
					<H3 class="examples" isActive{19}>Examples</H3>
				</Item>
				<ul>
					<Item item={20}>
						<Li isActive={20}
							>If \(A\) is the set of vowels in English, then \(a\in A\) because \(a\) is a vowel,
							but \(x\notin A\) because \(x\) is not a vowel.</Li
						>
					</Item>
					<Item item={21}>
						<Li isActive={21}
							>If \(E\) is the set of Natural numbers divisible by 2, then \(2\in E\), but \(0\notin
							E\) and \(3\notin E\).</Li
						>
					</Item>
					<Item item={22}>
						<Li isActive={22}
							>If \(R\) is the set of all rivers in the world, then \(Ganga\in R\), but
							\(India\notin R\).</Li
						>
					</Item>
				</ul>
			</section>
			<Item item={23}>
				<H2 isActive={23}>Roster Form</H2>
			</Item>
			<section>
				<Item item={24}>
					<P class="definition" isActive={24}>
						In roster form, all the elements of a set are listed, comma-separated and enclosed
						within braces {'\\[\\{a_1, a_2,\\dots, a_n \\}\\]'}
					</P>
				</Item>
			</section>
			<Item item={25}>
				<H3 class="examples" isActive{25}>Examples</H3>
			</Item>
			<section>
				<ul>
					<Item item={26}>
						<Li isActive={26}
							>Set of natural numbers less than 10 and divisible by 2 is {`\\(\\{2, 4, 6, 8\\}\\)`}.</Li
						>
					</Item>
					<Item item={27}>
						<Li isActive={27}>Set of English vowels is {`\\(\\{a, e, i, o, u\\}\\)`}.</Li>
					</Item>
					<Item item={28}>
						<Li isActive={28}
							>Set of roots of quadratic equation \(x^2 - 3x + 2 = 0\) is {`\\(\\{1, 2\\}\\)`}.</Li
						>
					</Item>
				</ul>
			</section>
			<section>
				<Item item={29}>
					<H3 class="remark" isActive{29}>Remarks</H3>
				</Item>
				<ul>
					<Item item={30}>
						<Li isActive={30}
							>In roster form, the order in which the elements are listed does not matter. For
							example, the set {`\\(\\{2, 4\\}\\)`} is the same as {`\\(\\{4, 2\\}\\)`}.</Li
						>
					</Item>
					<Item item={31}>
						<Li isActive={31}
							>In roster form, repeating an element in the list does not change the set. Hence, an
							element is usually listed only once in the set. For example, the set of letter in
							BETTER is {`\\(\\{B, E, T, T, E, R\\}\\)`}, there is no need to repeat E and T. We can
							just write {`\\(\\{B, E, T, R\\}\\)`}.</Li
						>
					</Item>
					<Item item={32}>
						<Li isActive={32}
							>The set of roots of quadratic equation \(x^2 - 2x + 1 = 0\) is {`\\(\\{1, 1\\}\\)`} or
							just {`\\(\\{1\\}\\)`}.</Li
						>
					</Item>
				</ul>
			</section>
			<Item item={33}>
				<H2 isActive={33}>Set Builder Form</H2>
			</Item>
			<section>
				<Item item={34}>
					<P class="definition" isActive={34}>
						In set-builder form, we specify a property that is satisfied <strong>only</strong> by
						the elements of the set. It is written as {`\\[\\{x : \\text{Property satisfied by } x\\}\\]`}
						The symbol \(x\) can be replaced with any other symbol like \(a, b, y\) etc. The colon (:)
						stands for "such that". After colon (:) we write the property satisfied by all elements of
						the set.
					</P>
				</Item>
			</section>
			<Item item={35}>
				<H3 class="examples" isActive{35}>Examples</H3>
			</Item>
			<section>
				<ul>
					<Item item={36}>
						<Li isActive={36}
							>The set-builder form of the set {`\\(\\{2, 4, 6, 8\\}\\)`} is {`\\(\\{x: x\\)`} is a natural
							numbers less than 10 and divisible by 2{`\\(\\}\\)`}.</Li
						>
					</Item>
					<Item item={37}>
						<Li isActive={37}
							>The set-builder form of the set {`\\(\\{a, e, i, o, u\\}\\)`} is {`\\(\\{x : x \\text{ is an English vowel}\\}\\)`}.</Li
						>
					</Item>
					<Item item={38}>
						<Li isActive={38}>
							Let {`\\(A = \\Big\\{\\dfrac{2}{3}, \\dfrac{3}{4}, \\dfrac{4}{5}, \\dfrac{5}{6},\\dfrac{6}{7}\\Big\\}\\)`},
							then in set-builder form it will be written as {`\\[\\{x: x = \\frac{n + 1}{n + 2}, \\text{ where } n \\text{ is a natural number and } 1\\leq n\\leq 5\\}\\]`}
						</Li>
					</Item>
				</ul>
			</section>
		</section>

		{#if !$presentationMode}
			<div class="youtube">
				<iframe
					width="100%"
					height="auto"
					src="https://www.youtube.com/embed/kj1VeKqMlJc"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		{/if}
	</div>

	<Item item={39}>
		<section>
			<h2>Practice</h2>
			<Practice {generateProblem} />
		</section>
	</Item>

	{#if $presentationMode && $currentSlide >= 2}
		<div class="pad" />
	{/if}
</article>

<style>
	/* p {
            text-indent: 2em;
        } */
	/* .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 600px);
        } */
	.display {
		position: relative;
		position: -webkit-sticky;
	}
	.youtube {
		width: 100%;
		height: 300px;
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
		/* in: all 1s; */
	}
	/* aside {
            background-color: rgb(230, 228, 228);
            cursor: pointer;
            width: 1em;
        } */
	.absolute {
		margin: auto;
		/* width: 90vw; */
		width: 100%;
		height: 600px;
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
	/*  
        figure {
            
            width: 300px;
        } */

	.thumbnail {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5em;
		height: 100%;
	}
	.statement {
		background: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));
		color: rgb(246, 246, 246);
		text-shadow: 1px 1px 3px rgb(4, 4, 4);
		box-shadow: 1px 1px 3px rgb(129, 128, 128);
		padding: 1em;
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
