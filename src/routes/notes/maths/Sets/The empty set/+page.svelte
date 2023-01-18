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
		$selectedSection = 'The empty set';
		$slideCounter = 10;
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
		let N = 2;
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
				let min = -10;
				let max = 10;
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
					problemset.o[choices[(correctChoiceIndex + i) % 4]] =
						`\\(\\{x:` + values[i] + '=0~\\) and ' + `\\(~x~\\) is real.\\(\\}\\)`;
				}

				problemset.s = `Which of the following will correspond to an empty set?`;
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
	<meta name="description" content="The empty set" />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation}>
	{#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<p class="statement">The empty set</p>
		</div>
	{/if}
	{#if !$presentationMode || $currentSlide >= -1}
		<h1>{$selectedSection}</h1>
	{/if}
	<div class="display {splitMode ? 'grid' : 'flex'}" bind:clientWidth={DW}>
		<section class="contentpart">
			<section>
				<Item item={0}>
					<P isActive={0}
						>The simplest possible set is one that does not contain any element at all.</P
					>
				</Item>
				<Item item={1}>
					<P class="definition" isActive={1}>
						A set which does not contain any element is called the <strong>empty</strong> set.
					</P>
				</Item>
				<ul>
					<Item item={2}>
						<Li isActive={2}>
							An empty set is also called the <em>null set</em> or the <em>void set</em>.
						</Li>
					</Item>
					<Item item={3}>
						<Li isActive={3}>
							An empty set is denoted either as {'{ }'} or \(\varphi\) (read as "phi").
						</Li>
					</Item>
				</ul>
			</section>
			<section>
				<Item item={4}>
					<H3 class="examples" isActive={4}>Examples</H3>
				</Item>
				<ul>
					<Item item={5}>
						<Li isActive={5}>
							The set of positive numbers less than 0 contains no element. Hence, it is an empty set
						</Li>
					</Item>
					<Item item={6}>
						<Li isActive={6}>The set of apples in an empty basket is an empty set.</Li>
					</Item>
					<Item item={7}>
						<Li isActive={7}>Set of prime numbers divisible by 4 is an empty set.</Li>
					</Item>
					<Item item={8}>
						<Li isActive={8}
							>The set of real roots of the equation \(x^2 + 1 = 0\) is an empty set.</Li
						>
					</Item>
				</ul>
			</section>
			<section />
		</section>
        {#if !$presentationMode}
            <div class="youtube">
                <iframe
                    width="420"
                    height="300"
                    src="https://www.youtube.com/embed/-VP7utgjA8I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </div>
        {/if}
	</div>
	
	<Item item={9}>
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
		height: 90vh;
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
</style>
