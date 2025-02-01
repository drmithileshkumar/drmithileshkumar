<script lang="ts">
	// @ts-nocheck

	import {
		presentationMode,
		presentation,
		overlay,
		slideCounter,
		autoScroll,
		currentSlide
	} from '$lib/pages/notes/maths/stores';

	import { page } from '$app/stores';
	import { TeX } from '$lib/utils/common/constants';
	import { onMount } from 'svelte';
	import P from '$lib/presentation/P.svelte';
	import Div from '$lib/presentation/Div.svelte';
	import H1 from '$lib/presentation/H1.svelte';
	import H2 from '$lib/presentation/H2.svelte';
	import H3 from '$lib/presentation/H3.svelte';
	import Li from '$lib/presentation/Li.svelte';
	import Item from '$lib/presentation/Item.svelte';
	import Image from '$lib/presentation/Image.svelte';
	import { typeset } from '$lib/shared/typeset';
	import Bubble from '$lib/pages/courses/algorithms/Bubble.svelte';
	import Insertion from '$lib/pages/courses/algorithms/Insertion.svelte';
	import Merge from '$lib/pages/courses/algorithms/Merge.svelte';
	import Quick from '$lib/pages/courses/algorithms/Quick.svelte';
	import SortingFlowChart from './SortingFlowChart.svelte';
	onMount(() => {
		$slideCounter = 39;
		$currentSlide = -2;
		// MathJax.typeset();
	});
</script>

<svelte:head>
	<title>Sorting</title>
	<link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
	<meta name="description" content="Sorting" />
</svelte:head>
<article
	class:absolute={$presentationMode}
	bind:this={$presentation}
	style="width:100%;"
	use:typeset
>
	{#if $presentationMode && $currentSlide === -2}
		<div class="thumbnail">
			<h3>Sorting</h3>
			<img
				class="statement"
				width="100%"
				src="/notes/quantum/teleportation.svg"
				alt=""
				style="color:white;"
			/>
		</div>
	{/if}
	{#if !$presentationMode || $currentSlide >= -1}
		<h1>Sorting</h1>
	{/if}
	<Item item={0}>
		<ol>
			<li>What is sorting?</li>
			<li>Why do we need it?</li>
			<li>How can we sort?</li>
			<li>Bubble Sort</li>
			<li>Insertion Sort</li>
			<li>Merge Sort</li>
		</ol>
	</Item>
	<section>
		<Item item={1}>
			<H2 isActive={1}>Bubble Sort</H2>
		</Item>
		<Item item={2}>
			<P isActive={2}>
				In bubble sort, the algorithm goes over the <em>entire</em> array multiple times till it is sorted. In each pass, it compares {`\\(a_i\\)`} with {`\\(a_{i + 1}\\)`}. If {`\\(a_i\\gt a_{i + 1}\\)`}, then they are swapped. Typically, this algorithm requires {`\\(O(n^2)\\)`} comparisons, but it is stable in the sense that relative position of equal elements are not changed.
			</P>
			<Bubble />
		</Item>
		
		<Item item={3}>
			<H2 isActive={3}>Insertion Sort</H2>
		</Item>
		<Item item={3}>
			<P isActive={3}>
				In insertion sort, the algorithm assumes that an initial part of the array is sorted. (At least the 1st element is sorted). With this assumption, a single loop starts with the 2nd element and <em>inserts</em> {`\\(a_i\\)`} at <em>right</em> position in the sorted subarray {`\\(A[0 : i- 1]\\)`}. Insertion sort is stable as well.
			</P>
			<Insertion />
		</Item>
		
		<!-- <Image isActive={3}> -->
			<!-- <img style="width:min(90vw, 400px)" src="/notes/quantum/qubit2d.svg" alt=""> -->
			<!-- <div style="width:min(90vw, 400px)">
				<svg
					width="100%"
					height="100%"
					viewBox="-221.08087158203125 -138.1619415283203 350 250"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<defs>
						<linearGradient
							id="LinearGradient-VectorialApp10R26-17"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
							><stop offset="0%" stop-color="rgba(0, 175, 255, 1)" /><stop
								offset="100%"
								stop-color="rgba(255, 0, 0, 1)"
							/></linearGradient
						>
						<marker
							id="Arrow-VectorialApp10R26-4"
							refX="0"
							refY="5"
							markerWidth="6"
							markerHeight="6"
							markerUnits="strokeWidth"
							orient="auto-start-reverse"
							viewBox="0 0 10 10"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M 0 0 L 10 5 L 0 10 z"
								fill="rgba(0, 175, 255, 1)"
								stroke="rgba(0, 175, 255, 1)"
								stroke-width="0"
								stroke-dasharray="none"
								opacity="1"
								filter="none"
								transform="matrix(1 0 0 1 0 0)"
							/>
						</marker>

						<marker
							id="Arrow-VectorialApp10R26-7"
							refX="0"
							refY="5"
							markerWidth="6"
							markerHeight="6"
							markerUnits="strokeWidth"
							orient="auto-start-reverse"
							viewBox="0 0 10 10"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M 0 0 L 10 5 L 0 10 z"
								fill="rgba(255, 0, 0, 1)"
								stroke="rgba(255, 0, 0, 1)"
								stroke-width="0"
								stroke-dasharray="none"
								opacity="1"
								filter="none"
								transform="matrix(1 0 0 1 0 0)"
							/>
						</marker>

						<marker
							id="Arrow-VectorialApp10R26-8"
							refX="0"
							refY="5"
							markerWidth="6"
							markerHeight="6"
							markerUnits="strokeWidth"
							orient="auto-start-reverse"
							viewBox="0 0 10 10"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M 0 0 L 10 5 L 0 10 z"
								fill="currentColor"
								stroke="currentColor"
								stroke-width="0"
								stroke-dasharray="none"
								opacity="1"
								filter="none"
								transform="matrix(1 0 0 1 0 0)"
							/>
						</marker>
					</defs>
					<g>
						<g
							class="draggable"
							id="Layer-VectorialApp10R26-0"
							fill="none"
							stroke="none"
							stroke-width="0"
							stroke-dasharray="none"
							opacity="1"
							mask="none"
							filter="none"
							transform="matrix(1 0 0 1 0 0)"
						>
							<circle
								id="Circle-VectorialApp10R26-2"
								cx="0"
								cy="0"
								r="100"
								fill="rgba(255, 255, 255, 0.3)"
								stroke="currentColor"
								stroke-width="1"
								stroke-dasharray="none"
								opacity="1"
								filter="none"
								mask="none"
								transform="matrix(1 0 0 1 -99.76239013671875 0.1693115234375)"
							/>

							<path
								id="Path-VectorialApp10R26-3"
								d="M -100,0 H -12"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="rgba(0, 175, 255, 1)"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-VectorialApp10R26-4)"
								transform="matrix(1 0 0 1 0 0)"
							/>

							<path
								id="Path-VectorialApp10R26-5"
								d="M -100,1.203125 V -88"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="rgba(255, 0, 0, 1)"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-VectorialApp10R26-7)"
								transform="matrix(1 0 0 1 0 0)"
							/>

							<path
								id="Path-VectorialApp10R26-6"
								d="M -100,0 L -40,-64"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-VectorialApp10R26-8)"
								transform="matrix(1 0 0 1 0 0)"
							/>

							<path
								id="Path-VectorialApp10R26-9"
								d="M -32.07470703125,-72.705078125 V 0.203125"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="1"
								stroke-dasharray="4"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="none"
								transform="matrix(1 0 0 1 0 0)"
							/>

							<path
								id="Path-VectorialApp10R26-10"
								d="M -31,-71.796875 H -99.8997802734375"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="1"
								stroke-dasharray="4"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="none"
								transform="matrix(1 0 0 1 0 0)"
							/>

							<g
								id="Latex-VectorialApp10R26-11"
								fill="currentColor"
								stroke="undefined"
								stroke-width="undefined"
								stroke-dasharray="undefined"
								opacity="1"
								filter="none"
								mask="undefined"
								transform="matrix(0.018536983638912347 0 0 0.018536983638912347 -82.67125030609222 -35.3297119140625)"
								><defs
									><path
										id="MJX-32842-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mn"
											><use data-c="31" xlink:href="#MJX-32842-TEX-N-31"></use></g
										></g
									></g
								>
							</g>

							<g
								id="Latex-VectorialApp10R26-12"
								fill="currentColor"
								stroke="undefined"
								stroke-width="undefined"
								stroke-dasharray="undefined"
								opacity="1"
								filter="none"
								mask="undefined"
								transform="matrix(0.03 0 0 0.03 -72.882568359375 16.86529541015625)"
								><defs
									><path
										id="MJX-32843-TEX-I-1D6FC"
										d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mi"
											><use data-c="1D6FC" xlink:href="#MJX-32843-TEX-I-1D6FC"></use></g
										></g
									></g
								>
							</g>

							<g
								id="Latex-VectorialApp10R26-13"
								fill="currentColor"
								stroke="undefined"
								stroke-width="undefined"
								stroke-dasharray="undefined"
								opacity="1"
								filter="none"
								mask="undefined"
								transform="matrix(0.03 0 0 0.03 -122.64764404296875 -28.3599853515625)"
								><defs
									><path
										id="MJX-32844-TEX-I-1D6FD"
										d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mi"
											><use data-c="1D6FD" xlink:href="#MJX-32844-TEX-I-1D6FD"></use></g
										></g
									></g
								>
							</g>

							<g
								id="Latex-VectorialApp10R26-14"
								fill="currentColor"
								stroke="undefined"
								stroke-width="undefined"
								stroke-dasharray="undefined"
								opacity="1"
								filter="none"
								mask="undefined"
								transform="matrix(0.02385549926757812 0 0 0.02385549926757812 1.5187932434082039 7.97432708740234)"
								><defs
									><path
										id="MJX-32845-TEX-N-7C"
										d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"
									></path><path
										id="MJX-32845-TEX-N-30"
										d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
									></path><path
										id="MJX-32845-TEX-N-27E9"
										d="M55 732Q56 739 61 744T75 750Q85 750 92 740Q95 733 186 494T278 250T187 6T92 -240Q85 -250 75 -250Q67 -250 62 -245T55 -232Q55 -227 145 11Q236 248 236 250T145 489Q55 727 55 732Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo" transform="translate(0 -0.5)"
											><use data-c="7C" xlink:href="#MJX-32845-TEX-N-7C"></use></g
										><g data-mml-node="mn" transform="translate(278,0)"
											><use data-c="30" xlink:href="#MJX-32845-TEX-N-30"></use></g
										><g data-mml-node="mo" transform="translate(778,0)"
											><use data-c="27E9" xlink:href="#MJX-32845-TEX-N-27E9"></use></g
										></g
									></g
								>
							</g>

							<g
								id="Latex-VectorialApp10R26-15"
								fill="currentColor"
								stroke="undefined"
								stroke-width="undefined"
								stroke-dasharray="undefined"
								opacity="1"
								filter="none"
								mask="undefined"
								transform="matrix(0.024278686523437534 0 0 0.024278686523437534 -112.92536486816407 -108.28417968750001)"
								><defs
									><path
										id="MJX-32846-TEX-N-7C"
										d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"
									></path><path
										id="MJX-32846-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-32846-TEX-N-27E9"
										d="M55 732Q56 739 61 744T75 750Q85 750 92 740Q95 733 186 494T278 250T187 6T92 -240Q85 -250 75 -250Q67 -250 62 -245T55 -232Q55 -227 145 11Q236 248 236 250T145 489Q55 727 55 732Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo" transform="translate(0 -0.5)"
											><use data-c="7C" xlink:href="#MJX-32846-TEX-N-7C"></use></g
										><g data-mml-node="mn" transform="translate(278,0)"
											><use data-c="31" xlink:href="#MJX-32846-TEX-N-31"></use></g
										><g data-mml-node="mo" transform="translate(778,0)"
											><use data-c="27E9" xlink:href="#MJX-32846-TEX-N-27E9"></use></g
										></g
									></g
								>
							</g>

							<g
								id="Latex-VectorialApp10R26-16"
								fill="url(#LinearGradient-VectorialApp10R26-17)"
								stroke="undefined"
								stroke-width="undefined"
								stroke-dasharray="undefined"
								opacity="1"
								filter="none"
								mask="undefined"
								transform="matrix(0.018269500732421912 0 0 0.018269500732421912 -25.82172195434571 -73.25365447998048)"
								><defs
									><path
										id="MJX-32847-TEX-N-7C"
										d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"
									></path><path
										id="MJX-32847-TEX-I-1D713"
										d="M161 441Q202 441 226 417T250 358Q250 338 218 252T187 127Q190 85 214 61Q235 43 257 37Q275 29 288 29H289L371 360Q455 691 456 692Q459 694 472 694Q492 694 492 687Q492 678 411 356Q329 28 329 27T335 26Q421 26 498 114T576 278Q576 302 568 319T550 343T532 361T524 384Q524 405 541 424T583 443Q602 443 618 425T634 366Q634 337 623 288T605 220Q573 125 492 57T329 -11H319L296 -104Q272 -198 272 -199Q270 -205 252 -205H239Q233 -199 233 -197Q233 -192 256 -102T279 -9Q272 -8 265 -8Q106 14 106 139Q106 174 139 264T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 299 34 333T82 404T161 441Z"
									></path><path
										id="MJX-32847-TEX-N-27E9"
										d="M55 732Q56 739 61 744T75 750Q85 750 92 740Q95 733 186 494T278 250T187 6T92 -240Q85 -250 75 -250Q67 -250 62 -245T55 -232Q55 -227 145 11Q236 248 236 250T145 489Q55 727 55 732Z"
									></path><path
										id="MJX-32847-TEX-N-3D"
										d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
									></path><path
										id="MJX-32847-TEX-I-1D6FC"
										d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z"
									></path><path
										id="MJX-32847-TEX-N-30"
										d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
									></path><path
										id="MJX-32847-TEX-N-2B"
										d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"
									></path><path
										id="MJX-32847-TEX-I-1D6FD"
										d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z"
									></path><path
										id="MJX-32847-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo" transform="translate(0 -0.5)"
											><use data-c="7C" xlink:href="#MJX-32847-TEX-N-7C"></use></g
										><g data-mml-node="mi" transform="translate(278,0)"
											><use data-c="1D713" xlink:href="#MJX-32847-TEX-I-1D713"></use></g
										><g data-mml-node="mo" transform="translate(929,0)"
											><use data-c="27E9" xlink:href="#MJX-32847-TEX-N-27E9"></use></g
										><g data-mml-node="mo" transform="translate(1595.8,0)"
											><use data-c="3D" xlink:href="#MJX-32847-TEX-N-3D"></use></g
										><g data-mml-node="mi" transform="translate(2651.6,0)"
											><use data-c="1D6FC" xlink:href="#MJX-32847-TEX-I-1D6FC"></use></g
										><g data-mml-node="mo" transform="translate(3291.6,0) translate(0 -0.5)"
											><use data-c="7C" xlink:href="#MJX-32847-TEX-N-7C"></use></g
										><g data-mml-node="mn" transform="translate(3569.6,0)"
											><use data-c="30" xlink:href="#MJX-32847-TEX-N-30"></use></g
										><g data-mml-node="mo" transform="translate(4069.6,0)"
											><use data-c="27E9" xlink:href="#MJX-32847-TEX-N-27E9"></use></g
										><g data-mml-node="mo" transform="translate(4680.8,0)"
											><use data-c="2B" xlink:href="#MJX-32847-TEX-N-2B"></use></g
										><g data-mml-node="mi" transform="translate(5681,0)"
											><use data-c="1D6FD" xlink:href="#MJX-32847-TEX-I-1D6FD"></use></g
										><g data-mml-node="mo" transform="translate(6247,0) translate(0 -0.5)"
											><use data-c="7C" xlink:href="#MJX-32847-TEX-N-7C"></use></g
										><g data-mml-node="mn" transform="translate(6525,0)"
											><use data-c="31" xlink:href="#MJX-32847-TEX-N-31"></use></g
										><g data-mml-node="mo" transform="translate(7025,0)"
											><use data-c="27E9" xlink:href="#MJX-32847-TEX-N-27E9"></use></g
										></g
									></g
								>
							</g>
						</g>
					</g>
				</svg>
			</div> -->
		<!-- </Image> -->
		<Item item={4}>
			<H2 isActive={4}>Merge Sort</H2>
		</Item>
		<Item item={5}>
			<P isActive={5}>
				Merge sort involves the recursive idea of splitting the given unsorted array into equal parts, sorting each part and then merging them into the final sorted array. This algorithm takes {`\\(O(n\\log n)\\)`} number of comparisons and is stable as well.  
			</P>
			<Merge />
		</Item>
		<Item item={6}>
			<H2 isActive={6}>Quick Sort</H2>
		</Item>
		<Item item={7}>
			<P isActive={7}>
				Quick sort is similar to the <em>divide and conquer</em> approach of merge sort. Choose a random element as <em>pivot</em>. <em>Partition</em> the array around the pivot such that elements smaller than the pivot are in one partition and elements larger than the pivot are in another partition. Then sort the partitions recursively. Depending on implementation, this algorithm takes {`\\(O(n\\log n)\\)`} number of comparisons and may not be stable.  
			</P>
			<Quick />
		</Item>
	</section>
	<section>
		<Item item={8}> 
			Flow chart of sorting algorithms
		</Item>
		<Item item={8}>
			<SortingFlowChart />
		</Item>
	</section>

	{#if $presentationMode && $currentSlide >= 2}
		<div class="pad"></div>
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
	article {
		position: relative;
		padding: 0.5em;
		/* in: all 1s; */
	}
	h1 {
		font-size: 2em;
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
		flex-direction: column;
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
</style>
