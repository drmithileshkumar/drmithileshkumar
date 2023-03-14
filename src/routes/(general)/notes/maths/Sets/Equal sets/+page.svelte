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
    import {Sets} from '$lib/utils/common/sets';
	import { Point2D } from '$lib/utils/common/point2d';
	import { randNum, randInt } from '$lib/utils/common/common';
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
		$selectedSection = 'Equal sets';
		$slideCounter = 11;
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
				let n = randInt(20, 1);
				let m = randInt(n + 1, n + 10) + 10;
				let k = randInt(8, 2);
				let s = new Sets();
				s.randomSet(n, m, k);
				let sbad = new Sets();
				sbad.randomSet(n, n + 20, k);
				let poly = '';
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
                let nmin = randInt(1,-1);
                let nmax = randInt(5, 4);
                let a = c;
                let d = b - c * l;
				let mmin = nmin + l;
                let mmax = nmax + l;
                let sign = d < 0 ? '' : '+';
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
	$: splitMode = !$presentationMode && DW > 800;
</script>

<svelte:head>
	<title>{$selectedSection}</title>
	<link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
	<meta name="description" content="Equal sets" />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation} class="{$presentationMode ? 'gridBackground':''}">
    {#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<div class="statement">
				<p>Equal sets</p>
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
					<P isActive={0}>So far, we have talked that order of elements in a set do not matter. Repeating an element in a set does not change the set either. Now we formally define what do we mean by the <em>same</em> set.</P>
				</Item>
                <Item item={1}>
					<P class="definition" isActive={1}>
						Two sets \(A\) and \(B\) are said to be <em>equal</em> if they have exactly the same
                        elements. Otherwise, the sets are said to be <em>unequal</em>.
					</P>
				</Item>
				<ul>
					<Item item={2}>
						<Li isActive={2}>
							If \(A\) and \(B\) are equal sets, we write \(A = B\).
						</Li>
					</Item>
					<Item item={3}>
						<Li isActive={3}>If \(A\) and \(B\) are unequal sets, we write \(A \neq B\).</Li>
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
							{`\\(\\{1, 2, 3\\} = \\{2, 1, 3\\} = \\{2, 1, 3, 3, 1\\}\\)`}
						</Li>
					</Item>
					<Item item={6}>
						<Li isActive={6}>
							{`\\(\\{E, F, R\\} = \\{x: x \\)`} is a letter in FREE{`\\(\\}\\)`}.
						</Li>
					</Item>
					<Item item={7}>
						<Li isActive={7}>
                            {`\\(\\{x: x = 3n + 1, 1\\leq n\\leq 4\\} = \\{x: x = 3m - 2, 2\\leq m\\leq 5\\} \\)`}
						</Li>
					</Item>
				</ul>
            </section>
            <section>
                <Item item={8}>
                    <P class="question" isActive={8}>Consider two sets {`\\(A = \\{x: x=3r-1, r\\in Z\\}\\)`} and {`\\(B = \\{x: x=3s + 2, s\\in Z\\}\\)`}. Is \(A = B\)?</P>
                </Item>
                <Item item={9}>
                    <P class="solution" isActive={9}>It is easy to check whether two finite sets are equal. Write them in Roster form and just compare their elements. How do we check equality of infinite sets? We need concept of <em>subsets</em>, which is the next topic. </P>
                </Item>
            </section>
        </section>
        {#if !$presentationMode}
			<div class="youtube">
				<iframe
					width="420"
					height="300"
					src="https://www.youtube.com/embed/jbBsClpZmPQ"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		{/if}
        {#if $presentationMode}
            <div class="slate">
                
            </div>
        {/if}
    </div>
    <section>
		<Item item={10}>
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
		/* box-shadow: 1px 1px 3px rgb(129, 128, 128); */
		padding: 1em;
		background-image: url('/notes/maths/sets/equal/thumbnail.svg');
        background-repeat: no-repeat;
        background-position: center;
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
