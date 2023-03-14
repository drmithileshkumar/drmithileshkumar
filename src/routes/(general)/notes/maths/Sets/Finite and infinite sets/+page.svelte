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
		$selectedSection = 'Finite and infinite sets';
		$slideCounter = 30;
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
		let N = 3;
		problemnumber = problemnumber % N;
		let choices = ['A', 'B', 'C', 'D'];
		let correctChoiceIndex = Math.floor(Math.random() * 4);
		problemset.c = choices[correctChoiceIndex];
		let ans;
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
	$: splitMode = !$presentationMode && DW > 800;
</script>

<svelte:head>
	<title>{$selectedSection}</title>
	<link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
	<meta name="description" content="Finite and infinite sets" />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation} class="{$presentationMode ? 'gridBackground':''}">
	{#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<div class="statement">
				<p>Why is the set of primes infinite?</p>
			</div>
		</div>
	{/if}
	{#if !$presentationMode || $currentSlide >= -1}
		<h1>{$selectedSection}</h1>
	{/if}
	<div class="display {splitMode ? 'grid' : 'flex'}" bind:clientWidth={DW}>
		<section class="contentpart">
			<Item item={0}>
				<H2 isActive={0}>Size of a set</H2>
			</Item>
			<section>
				<Item item={1}>
					<P isActive={1}>The analysis of sets begin with knowing its size.</P>
				</Item>
				<Item item={2}>
					<P class="definition" isActive={2}>
						The size of a set is equal to the number of elements in the set.
					</P>
				</Item>
				<ul>
					<Item item={3}>
						<Li isActive={3}>
							The size of a set is also called the <em>cardinality</em> of the set.
						</Li>
					</Item>
					<Item item={4}>
						<Li isActive={4}>For a set \(A\), its size is denote by \(|A|\) or \(n(A)\).</Li>
					</Item>
				</ul>
				<Item item={5}>
					<P class="remark" isActive={5}>
						Elements are counted only once. Repeating an element in the set will not change its
						size.
					</P>
				</Item>
			</section>
			<section>
				<Item item={6}>
					<H3 class="examples" isActive={6}>Examples</H3>
				</Item>
				<ul>
					<Item item={7}>
						<Li isActive={7}>
							The size of set {'\\(A = \\{1, 2, 3\\}\\)'} is \(n(A) = 3\).
						</Li>
					</Item>
					<Item item={8}>
						<Li isActive={8}>
							The size of set {'\\(A = \\{1, 1, 2, 3, 3, 3\\}\\)'} is also \(n(A) = 3\).
						</Li>
					</Item>
					<Item item={9}>
						<Li isActive={9}>
							The number of elements in an empty set is 0. That is, \(n(\varphi) = 0\).
						</Li>
					</Item>
				</ul>
			</section>
			<Item item={10}>
				<H2 isActive={10}>Finite Set</H2>
			</Item>
			<section>
				<Item item={11}>
					<P class="definition" isActive={11}>
						If counting of the elements of a set can finish, it called a <em>finite set</em>.
					</P>
				</Item>
				<ul>
					<Item item={12}>
						<Li isActive={12}>The size of a finite set is a positive integer.</Li>
					</Item>
					<Item item={13}>
						<Li isActive={13}>Empty set is a finite set as well.</Li>
					</Item>
				</ul>
			</section>
			<section>
				<Item item={14}>
					<H3 class="examples" isActive={14}>Examples</H3>
				</Item>
				<ul>
					<Item item={15}>
						<Li isActive={15}>
							Counting of elements of {'\\(A = \\{1, 2, 3\\}\\)'} can finish, and hence it is finite.
						</Li>
					</Item>
					<Item item={16}>
						<Li isActive={16}>The set of number of letters in a given English word is finite.</Li>
					</Item>
					<Item item={17}>
						<Li isActive={17}>The set of roots of a finite degree polynomial is finite.</Li>
					</Item>
				</ul>
			</section>
			<Item item={18}>
				<H2 isActive={18}>Infinite Set</H2>
			</Item>
			<section>
				<Item item={19}>
					<P class="definition" isActive={19}>
						If counting of the elements of a set can not finish, it called an <em>infinite set</em>.
					</P>
				</Item>
				<ul>
					<Item item={20}>
						<Li isActive={20}>The size of an infinite set is infinity (\(\infty\)).</Li>
					</Item>
					<Item item={21}>
						<Li isActive={21}>A complete roster form can not be provided for an infinite set.</Li>
					</Item>
					<Item item={22}>
						<Li isActive={22}
							>Some websites call infinite sets as <strong>uncountable</strong>. That is
							<span style="color:red; font-weight:bold;">wrong</span>. Finite sets are definitely
							countable. Infinite sets <em>can</em> be countable or uncountable. The concept of countability
							is related to one-to-one correspondance with a subset of natural numbers. Key thing to
							keep in mind is that the process of counting an infinite set can not end.</Li
						>
					</Item>
				</ul>
			</section>

			<section>
				<Item item={23}>
					<H3 class="examples" isActive={23}>Examples</H3>
				</Item>
				<ul>
					<Item item={24}>
						<Li isActive={24}
							>The set of natural numbers \(N\) is an infinite set. It can be written in the Roster
							form as {`\\(\\{1, 2, 3,\\dots\\}\\)`}. The \(\dots\) denotes that the pattern goes
							on. Here the pattern is that for any \(n\in N\), the number \(n+1\) is also in \(N\).
							An unending process of counting of elements of \(N\) can be provided, hence it is a
							countable set.</Li
						>
					</Item>
					<Item item={25}>
						<Li isActive={25}
							>The set \(E\) of numbers divisible by \(2\) is an infinite set. It can be written in
							the Roster form as {`\\(\\{2, 4, 6,\\dots\\}\\)`}. The \(\dots\) denotes that the
							pattern goes on. Here the pattern is that for any \(n\in E\), the number \(n+2\) is
							also in \(E\). An unending process of counting of elements of \(E\) can be provided,
							hence it is a countable set.</Li
						>
					</Item>
					<Item item={26}>
						<Li isActive={26}
							>The set \(Z\) of integers is an infinite set. It can be written in the Roster form as {`\\(\\{\\dots, -3, -2, -1, 0, 1, 2, 3,\\dots\\}\\)`}.
							The \(\dots\) denotes that the pattern goes on. Here the pattern is that for any
							\(n\in Z\), both numbers \(n-1\) and \(n+1\) belong to \(Z\). An unending process of
							counting of elements of \(Z\) can be provided, hence it is a countable set. If you
							imagine the set of natural numbers as an arrow indicating that the numbers keep
							increasing in one direction, the set of integers would represent a line such that
							numbers keep on decreasing in one direction and increasing in another direction. To
							indicate this we have used \(\dots\) at the begining as well as at the end in the
							Roster form.</Li
						>
					</Item>
					<Item item={27}>
						<Li isActive={27}
							>The set of real numbers \(R\) is an infinite set. \(R\) is an uncountable set. Why?
							The proof is a little complicated. Geog Cantor gave the first proof.</Li
						>
					</Item>
					<Item item={28}>
						<Li isActive={28}
							>The set of prime numbers is an infinite set. If we have discovered \(p_1, p_2,\dots,
							p_n\) as the first \(n\) primes, then the number \(p1\times p2\times \dots \times p_n
							+ 1\) is either a prime or divisible by a prime larger than \(p_n\). In either case, a
							prime larger than \(p_n\) exists. Hence, the set of primes must have infinitely many
							elements.</Li
						>
					</Item>
				</ul>
			</section>
		</section>
		{#if !$presentationMode}
			<div class="youtube">
				<iframe
					width="420"
					height="300"
					src="https://www.youtube.com/embed/xitRVmUKQz8"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		{/if}
	</div>
	<section>
		<Item item={29}>
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
        align-self: flex-start
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
		box-shadow: 1px 1px 3px rgb(129, 128, 128);
		padding: 1em;
		background-image: url('/notes/maths/sets/finite/thumbnail.svg');
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
