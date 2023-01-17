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
		$slideCounter = 27;
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
</script>

<svelte:head>
	<title>{$selectedSection}</title>
	<link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
	<meta name="description" content="Finite and infinite sets" />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation}>
	{#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<p class="statement">Why is the set of primes infinite?</p>
		</div>
	{/if}
    <div class="material {$presentationMode?'':'flex'}">
        <div class="content">
            {#if !$presentationMode || $currentSlide >= -1}
                <h1>{$selectedSection}</h1>
            {/if}
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
                        Elements are counted only once. Repeating an element in the set will not change its size.
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
                </ul>
            </section>
    
            <section>
                <Item item={21}>
                    <H3 class="examples" isActive={21}>Examples</H3>
                </Item>
                <ul>
                    <Item item={22}>
                        <Li isActive={22}>The set of natural numbers \(N\) is an infinite set.</Li>
                    </Item>
                    <Item item={23}>
                        <Li isActive={23}>The set of numbers divisible by \(2\) is an infinite set.</Li>
                    </Item>
                    <Item item={24}>
                        <Li isActive={24}>The set of real numbers is an infinite set.</Li>
                    </Item>
                    <Item item={25}>
                        <Li isActive={25}>The set of prime numbers is an infinite set.</Li>
                    </Item>
                </ul>
            </section>
        </div>
        {#if $presentationMode}
            <div class="slate">
        
            </div>
        {/if}
    </div>
	
	<section>
		<Item item={26}>
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
		color: rgb(246, 246, 246);
		text-shadow: 1px 1px 3px rgb(4, 4, 4);
		box-shadow: 1px 1px 3px rgb(129, 128, 128);
		padding: 1em;
	}
    .material {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .flex {
        display: flex;
    }
</style>
