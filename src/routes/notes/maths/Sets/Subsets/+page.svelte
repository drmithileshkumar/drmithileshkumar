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
	import Item from '$lib/presentation/Item.svelte';
	import Image from '$lib/presentation/Image.svelte';
    import Div from '$lib/presentation/Div.svelte';
	onMount(() => {
		$selectedChapter = 'Sets';
		$selectedSection = 'Subsets';
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
						let nq = new Surd();
						nq.randomSurd(m);
						s.add(nq);
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
	<meta name="description" content="Subsets" />
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation}>
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
                        In the last section we defined equal sets. In this section, we'll learn how to compare two sets. At the same time, it will give us a way to construct new sets from a given set.
                    </P>
				</Item>
				<Item item={1}>
					<P class="definition" isActive={1}>
						Given sets \(A\) and \(B\), \(A\) is said to be <em>subset</em> of \(B\) if every
						element of \(A\) is also in \(B\). In such a case, \(B\) is called a <em>superset</em> of
						\(A\).
					</P>
				</Item>
				<Item item={2}>
					<P class="definition" isActive={2}>
						Intuitively, this is like less than ( \({TeX.less}\) ) relation of numbers. The only difference is that while two numbers are always related, two sets will not be related like this if they contain different elements.
					</P>
				</Item>
				<ul>
					<Item item={3}>
						<Li isActive={3}>
							If \(A\) is a subset of \(B\), then we write \(A \subset B\) or \(B\supset A\).
						</Li>
					</Item>
					<Item item={4}>
						<Li isActive={4}
							>If \(A\) is not a subset of \(B\), then we write \(A \not\subset B\).
                        </Li>
					</Item>
					<Item item={5}>
						<Li isActive={5}>
                            To indicate that \(A\) is either a subset of or equal to \(B\), we write \(A\subseteq
							B\).
                        </Li>
					</Item>
					<Item item={6}>
						<Li isActive={6}>
                            A subset \(A\) of set \(B\) is called a <em>proper</em> subset of \(B\) if \(A\) is not
							equal to \(B\).
                        </Li>
					</Item>
				</ul>
			</section>
			<section>
				<Item item={7}>
					<H3 class="examples" isActive={7}>Examples</H3>
				</Item>
				<ul>
					<Item item={8}>
						<Li isActive={8}>
							{`\\(\\{1, 2\\} \\subset \\{2, 1, 3\\}\\)`} is a proper subset.
						</Li>
					</Item>
					<Item item={9}>
						<Li isActive={9}>
							{`\\(\\{1, 2, 3, 0\\} \\not\\subset \\{2, 1, 3, 4, 5\\}\\)`}
						</Li>
					</Item>
				</ul>
            </section>
			<section>
				<Item item={10}>
					<H2 isActive={10}>Subset Tree</H2>
				</Item>
				<Item item={11}>
					<Image isActive={11}>
						<img style="width:min(400px, 90vw);" src="/notes/maths/sets/subsets/tree.svg" alt=''>
					</Image>
				</Item>
			</section>
            <section>
                <Item item={12}>
					<P class="definition" isActive={12}>
						\(A\) is a subset of \(B\) if \(a\) is an element of \(A\) implies that \(a\) is also an element of \(B\). \[A\subset B ~~~if~~a\in A\implies a\in B\]  Alternatively, we can say that if \(A\subset B\), then there does not exist any element in \(A\) that is also not in \(B\). \[A\subset B ~~~if~~\nexists ~ a\in A~~such~that~~ a\notin B\]
					</P>
				</Item>
                <Item item={13}>
					<P class="remark" isActive={13}>
						Every set \(A\) is a subset of itself, i.e. \(A\subset A\).
					</P>
				</Item>
                <Item item={14}>
					<P class="question" isActive={14}>Why is empty set a subset of every set?</P>
				</Item>
				<Item item={15}>
					<P class="solution" isActive={15}
						>An empty set \(A = \phi\) contains no element. A set \(A\) is a subset of another set \(B\)
						if \(A\) does not contain any element that is not in \(B\). Since, \(\phi\) does not
						contain any element, it is also true that it does not contain any element that is not in
						\(B\). Hence, \(\phi\) is a subset of \(B\).
                    </P>
				</Item>
                
            </section>
            <section>
                <Item item={16}>
					<H2 isActive={16}>
						Set equality 
                    </H2>
				</Item>
				<Item item={17}>
					<P class="definition" isActive={17}>
						\(A\) is equal to \(B\) if and only if (iff) \(A\subset B\) and \(B\subset A\). \[A=B \iff (a\in A\iff a\in B)\] 
					</P>
				</Item>
				<Item item={18}>
					<P class="question" isActive={18}>Is {`\\(\\phi = \\{\\phi\\}\\)`} ?</P>
				</Item>
				<Item item={19}>
					<P class="solution" isActive={19}
						>We can write {'\\(\\phi = \\{\\}\\)'}. It is clear that {`\\(\\{\\}\\)`} has no elements
						and {`\\(\\{\\phi\\}\\)`}
						has one element, namely \(\phi\). Hence {`\\(\\phi \\neq \\{\\phi\\}\\)`}
                    </P>
				</Item>
                <Item item={20}>
                    <P class="question" isActive={20}>Consider two sets {`\\(A = \\{x: x=3r-1, r\\in Z\\}\\)`} and {`\\(B = \\{x: x=3s + 2, s\\in Z\\}\\)`}. Is \(A = B\)?</P>
                </Item>
                <div class="solution">
                    <Item item={21}>
                        <P isActive={121}>
                            We need to check both conditions \(A\subset B\) and \(B\subset A\).
                        </P>
                    </Item>
                    <ul>
                        <Item item={22}>
                            <Li isActive={22}>
                                Let \(a = 3r - 1 \in A\) where \(r\in Z\). Does there exists \(s\in Z\) such that \(a = 3s + 2\)? Let's find out. {`\\[
                                    \\begin{eqnarray}
                                    3s + 2 &=& 3r - 1\\\\
                                    \\implies s &=& \\frac{3r - 3}{3}\\\\
                                                &=& r - 1 \\in Z
                                    \\end{eqnarray}
                                    \\]`}
                                This implies that \(a\in B\). Hence, \(A\subset B\)
                            </Li>
                        </Item> 
                        <Item item={23}>
                            <Li isActive={23}>
                                Let \(b = 3s + 2 \in B\) where \(s\in Z\). Does there exists \(r\in Z\) such that \(b = 3r - 1\)? Let's find out. {`\\[
                                    \\begin{eqnarray}
                                    3r - 1 &=& 3s + 2\\\\
                                    \\implies r &=& \\frac{3s + 3}{3}\\\\
                                                &=& s + 1 \\in Z
                                    \\end{eqnarray}
                                    \\]`}
                                This implies that \(b\in A\). Hence, \(B\subset A\)
                            </Li>
                        </Item> 
                    </ul>
                    <Item item={24}>
                        <P isActive={24}>
                            This proves that \(A = B\).
                        </P>
                    </Item>
                </div>
                <Item item={25}>
                    <P class="question" isActive={25}>
                        Verify that \(N\subset Z \subset Q\subset R\).
                    </P>
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
			<div class="slate" />
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
	<!-- <section>
            <h2>Practice</h2>
            {#if $session.user}
            <Practice {generateProblem}/>
            {:else}
                <Message>You need to be logged in to practice.</Message>
            {/if}
        </section> -->
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
		background-image: url('/notes/maths/sets/subsets/thumbnail.svg');
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
</style>
