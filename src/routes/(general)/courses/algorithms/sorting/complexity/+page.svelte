<script lang="ts">
	// @ts-nocheck
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import xml from 'svelte-highlight/languages/xml';
	import css from 'svelte-highlight/languages/css';
	import github from 'svelte-highlight/styles/github';
	import githubDark from 'svelte-highlight/styles/github-dark';
	import { tileGrid } from '$lib/utils/common/tile';
	import WebPractice from '$lib/pages/courses/internet/WebPractice.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Card, { Content, Actions } from '@smui/card';
	import DataTable, { Body, Head, Row, Cell } from '@smui/data-table';
	import Button, { Label } from '@smui/button';
	import Ripple from '@smui/ripple';
	import NavList from '$lib/components/NavList.svelte';
	import { currentPath } from '$lib/stores';
	import { darkMode, navList } from '$lib/stores';
	import { contents, contentNav } from '$lib/pages/courses/algorithms/content';
	import { typeset } from '$lib/shared/typeset';
	import Pathlist from '$lib/components/Pathlist.svelte';
	import CourseNavigation from '$lib/components/CourseNavigation.svelte';

	import Bubble from '$lib/pages/courses/algorithms/Bubble.svelte';
	import P from '$lib/presentation/P.svelte';

	$navList = contents;
	$currentPath = 'Bounds';
	

	let jsBubble = `function getDigit(num, place) {
    return Math.floor(num / Math.pow(10, place)) % 10;
}

function countSort(arr, place) {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let num of arr) {
        let digit = getDigit(num, place);
        count[digit]++;
    }

    // Update count[i] to store actual position of this digit
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using stable sort
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = getDigit(arr[i], place);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy the sorted values back to arr
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    if (arr.length === 0) return arr;

    let maxNum = Math.max(...arr);
    let numDigits = Math.floor(Math.log10(maxNum)) + 1;

    for (let i = 0; i < numDigits; i++) {
        countSort(arr, i);
    }

    return arr;
}

// Example Usage:
let numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers));  // Output: [2, 24, 45, 66, 75, 90, 170, 802]`;
	let jsPseudo = `Procedure RedixSort(array):
    1. Find the maximum number in the array to determine the number of digits.
    2. Start from the least significant digit (LSD) and move to the most significant digit (MSD).
    3. For each digit place:
    a. Use a stable sorting algorithm (like Counting Sort) to sort numbers based on the current digit.
    b. Reassemble the numbers in sorted order.
    4. Repeat until all digits have been processed.
    5. The array is now sorted.`;
</script>

<svelte:head>
	<title>Algorithms</title>
	<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout" />
	<meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
	{#if $darkMode}
		{@html githubDark}
	{:else}
		{@html github}
	{/if}
</svelte:head>
<article use:typeset>
	<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />
	<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
	<h4>Bounds on sorting algorithms</h4>
	<Card style="background-color: rgba(0, 100, 100, 0.1">
		<Content>
			<h6>Topics</h6>
			<ol>
				<li><a href="#description">Description</a></li>
				<li><a href="#visualization">Visualization</a></li>
				<li><a href="#pseudo">Pseudo code</a></li>
				<li><a href="#analysis">Analysis</a></li>
				<li><a href="#javascript">Javascript code</a></li>
				<li><a href="#questions">Questions</a></li>
			</ol>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="description">Description</h6>
			<p>
				Any <em>comparison-based</em> sorting algorithm will take \(\Omega(n\log n)\) time. To prove
				it, we'll need <em>decision trees</em>.
			</p>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="decision">Decision Tree</h6>
			<p>
				A <em>decision tree</em> is a directed tree with a <em>root</em> node. Each internal node
				represents a <em>decision</em>, each branch represents a possible choice and leaves
				represent final decision or classification.
			</p>
			<p>
				In decision tree for a comparison-based sorting algorithm, the internal nodes represent the
				comparision between two elements. There are two branches each representing possible outcomes
				of comparison.
			</p>
			<p>The number of leaves in a binary decision tree of depth \(k\) is {`\\(2^{k}\\)`}</p>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="permutations">Permutation</h6>
			<p>The number of permutations of \(n\) distinct items is \(n!\).</p>
			<p>
				Each permutation of \([a_1, a_2, ..., a_n]\) can represent a sorted array, i.e. there exist
				numbers such that a given permutation is the sorting required.
			</p>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="relation">Decision tree meets permutation</h6>
			<div class="media">
				<svg
					class="SVG Vectorial s-i-aN6QvJNtbI"
					width="100%"
					viewBox="90.06668853759766 16.443359375 900 400"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					><g class="Vectorial s-i-aN6QvJNtbI" transform="translate(0 0) scale(1)"
						><defs class="s-i-aN6QvJNtbI"
							><marker
								id="Arrow-localImage94-5"
								refX="0"
								refY="5"
								markerWidth="6"
								markerHeight="6"
								markerUnits="strokeWidth"
								orient="auto-start-reverse"
								viewBox="0 0 10 10"
								preserveAspectRatio="xMidYMid meet"
								class="s--JaJgIkAlHN8"
								><path
									d="M 0 0 L 10 5 L 0 10 z"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="0"
									stroke-dasharray="none"
									opacity="1"
									filter="none"
									transform="matrix(1 0 0 1 0 0)"
									class="s--JaJgIkAlHN8"
								></path></marker
							><!--<SVGMarker>--></defs
						><g
							id="Layer-localImage94-0"
							class="draggable s-qqG8yHdi5SXh"
							fill="none"
							stroke="none"
							stroke-width="0"
							stroke-dasharray="none"
							vector-effect="none"
							opacity="1"
							filter="none"
							mask="none"
							transform="matrix(1 0 0 1 0 0)"
						>
							<g
								id="Latex-localImage94-1"
								class="draggable s-0OtsgtShg-WD"
								fill="rgba(255, 0, 0, 1)"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03179101377673761 0 0 0.03179101377673761 490.9508722016873 79.16714753876522)"
								><defs
									><path
										id="MJX-74757-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74757-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74757-TEX-N-3C"
										d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"
									></path><path
										id="MJX-74757-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="msub"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74757-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74757-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.3,0)"
											><use data-c="3C" xlink:href="#MJX-74757-TEX-N-3C"></use></g
										><g data-mml-node="msub" transform="translate(2299.1,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74757-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74757-TEX-N-32"></use></g
											></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-2"
								class="draggable s-0OtsgtShg-WD"
								fill="rgba(255, 0, 0, 1)"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.0317339508655147 0 0 0.0317339508655147 273.9527677243509 167.13632354320458)"
								><defs
									><path
										id="MJX-74758-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74758-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path
										id="MJX-74758-TEX-N-3C"
										d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"
									></path><path
										id="MJX-74758-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="msub"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74758-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74758-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.3,0)"
											><use data-c="3C" xlink:href="#MJX-74758-TEX-N-3C"></use></g
										><g data-mml-node="msub" transform="translate(2299.1,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74758-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74758-TEX-N-33"></use></g
											></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-3"
								class="draggable s-0OtsgtShg-WD"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03288672242640218 0 0 0.03288672242640218 108.1193669563404 274.6650382137206)"
								><defs
									><path id="MJX-74759-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"
									></path><path
										id="MJX-74759-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74759-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74759-TEX-N-2C"
										d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
									></path><path
										id="MJX-74759-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path
										id="MJX-74759-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path id="MJX-74759-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo"
											><use data-c="5B" xlink:href="#MJX-74759-TEX-N-5B"></use></g
										><g data-mml-node="msub" transform="translate(278,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74759-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74759-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.6,0)"
											><use data-c="2C" xlink:href="#MJX-74759-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(1688.2,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74759-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74759-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(2653.8,0)"
											><use data-c="2C" xlink:href="#MJX-74759-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(3098.4,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74759-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74759-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(4064,0)"
											><use data-c="5D" xlink:href="#MJX-74759-TEX-N-5D"></use></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-4"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(1 0 0 1 -6.00006103515625 206.00003004074097)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-6"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(1 0 0 1 -57.999969482421875 107.98959052562714)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-7"
								class="draggable s-0OtsgtShg-WD"
								fill="rgba(255, 0, 0, 1)"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.0317339508655147 0 0 0.0317339508655147 313.93609260971925 267.13633567274957)"
								><defs
									><path
										id="MJX-74760-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74760-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74760-TEX-N-3C"
										d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"
									></path><path
										id="MJX-74760-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="msub"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74760-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74760-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.3,0)"
											><use data-c="3C" xlink:href="#MJX-74760-TEX-N-3C"></use></g
										><g data-mml-node="msub" transform="translate(2299.1,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74760-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74760-TEX-N-33"></use></g
											></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-8"
								class="draggable s-0OtsgtShg-WD"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03288672837853347 0 0 0.03288672837853347 130.11936506189596 374.6650413963192)"
								><defs
									><path id="MJX-74761-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"
									></path><path
										id="MJX-74761-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74761-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74761-TEX-N-2C"
										d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
									></path><path
										id="MJX-74761-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path
										id="MJX-74761-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path id="MJX-74761-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo"
											><use data-c="5B" xlink:href="#MJX-74761-TEX-N-5B"></use></g
										><g data-mml-node="msub" transform="translate(278,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74761-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74761-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.6,0)"
											><use data-c="2C" xlink:href="#MJX-74761-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(1688.2,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74761-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74761-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(2653.8,0)"
											><use data-c="2C" xlink:href="#MJX-74761-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(3098.4,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74761-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74761-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(4064,0)"
											><use data-c="5D" xlink:href="#MJX-74761-TEX-N-5D"></use></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-9"
								class="draggable s-0OtsgtShg-WD"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03288672386556704 0 0 0.03288672386556704 348.0193665838631 374.66503622345505)"
								><defs
									><path id="MJX-74762-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"
									></path><path
										id="MJX-74762-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74762-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path
										id="MJX-74762-TEX-N-2C"
										d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
									></path><path
										id="MJX-74762-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74762-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path id="MJX-74762-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo"
											><use data-c="5B" xlink:href="#MJX-74762-TEX-N-5B"></use></g
										><g data-mml-node="msub" transform="translate(278,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74762-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74762-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.6,0)"
											><use data-c="2C" xlink:href="#MJX-74762-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(1688.2,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74762-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74762-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(2653.8,0)"
											><use data-c="2C" xlink:href="#MJX-74762-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(3098.4,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74762-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74762-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(4064,0)"
											><use data-c="5D" xlink:href="#MJX-74762-TEX-N-5D"></use></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-10"
								class="draggable s-0OtsgtShg-WD"
								fill="rgba(255, 0, 0, 1)"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03179101377673761 0 0 0.03179101377673761 673.9508829793505 167.16714439960143)"
								><defs
									><path
										id="MJX-74763-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74763-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path
										id="MJX-74763-TEX-N-3C"
										d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"
									></path><path
										id="MJX-74763-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="msub"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74763-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74763-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.3,0)"
											><use data-c="3C" xlink:href="#MJX-74763-TEX-N-3C"></use></g
										><g data-mml-node="msub" transform="translate(2299.1,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74763-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74763-TEX-N-32"></use></g
											></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-11"
								class="draggable s-0OtsgtShg-WD"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03288672242640218 0 0 0.03288672242640218 510.0193667536845 274.6650383329299)"
								><defs
									><path id="MJX-74764-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"
									></path><path
										id="MJX-74764-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74764-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path
										id="MJX-74764-TEX-N-2C"
										d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
									></path><path
										id="MJX-74764-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path
										id="MJX-74764-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path id="MJX-74764-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo"
											><use data-c="5B" xlink:href="#MJX-74764-TEX-N-5B"></use></g
										><g data-mml-node="msub" transform="translate(278,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74764-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74764-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.6,0)"
											><use data-c="2C" xlink:href="#MJX-74764-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(1688.2,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74764-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74764-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(2653.8,0)"
											><use data-c="2C" xlink:href="#MJX-74764-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(3098.4,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74764-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74764-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(4064,0)"
											><use data-c="5D" xlink:href="#MJX-74764-TEX-N-5D"></use></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-12"
								class="draggable s-0OtsgtShg-WD"
								fill="rgba(255, 0, 0, 1)"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.0317339508655147 0 0 0.0317339508655147 810.9527521675386 267.13633561314515)"
								><defs
									><path
										id="MJX-74765-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74765-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74765-TEX-N-3C"
										d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"
									></path><path
										id="MJX-74765-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="msub"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74765-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74765-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.3,0)"
											><use data-c="3C" xlink:href="#MJX-74765-TEX-N-3C"></use></g
										><g data-mml-node="msub" transform="translate(2299.1,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74765-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74765-TEX-N-33"></use></g
											></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-13"
								class="draggable s-0OtsgtShg-WD"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03288672242640218 0 0 0.03288672242640218 605.352740777122 374.66503505467443)"
								><defs
									><path id="MJX-74766-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"
									></path><path
										id="MJX-74766-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74766-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path
										id="MJX-74766-TEX-N-2C"
										d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
									></path><path
										id="MJX-74766-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path
										id="MJX-74766-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path id="MJX-74766-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo"
											><use data-c="5B" xlink:href="#MJX-74766-TEX-N-5B"></use></g
										><g data-mml-node="msub" transform="translate(278,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74766-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74766-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.6,0)"
											><use data-c="2C" xlink:href="#MJX-74766-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(1688.2,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74766-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74766-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(2653.8,0)"
											><use data-c="2C" xlink:href="#MJX-74766-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(3098.4,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74766-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74766-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(4064,0)"
											><use data-c="5D" xlink:href="#MJX-74766-TEX-N-5D"></use></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<g
								id="Latex-localImage94-14"
								class="draggable s-0OtsgtShg-WD"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								filter="none"
								opacity="1"
								vector-effect="none"
								transform="matrix(0.03288672306617691 0 0 0.03288672306617691 813.1193599220046 374.6650356835171)"
								><defs
									><path id="MJX-74767-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"
									></path><path
										id="MJX-74767-TEX-I-1D44E"
										d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
									></path><path
										id="MJX-74767-TEX-N-32"
										d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
									></path><path
										id="MJX-74767-TEX-N-2C"
										d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
									></path><path
										id="MJX-74767-TEX-N-33"
										d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"
									></path><path
										id="MJX-74767-TEX-N-31"
										d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
									></path><path id="MJX-74767-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"
									></path></defs
								><g stroke-width="0" transform="scale(1,-1)"
									><g data-mml-node="math"
										><g data-mml-node="mo"
											><use data-c="5B" xlink:href="#MJX-74767-TEX-N-5B"></use></g
										><g data-mml-node="msub" transform="translate(278,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74767-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="32" xlink:href="#MJX-74767-TEX-N-32"></use></g
											></g
										><g data-mml-node="mo" transform="translate(1243.6,0)"
											><use data-c="2C" xlink:href="#MJX-74767-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(1688.2,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74767-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="33" xlink:href="#MJX-74767-TEX-N-33"></use></g
											></g
										><g data-mml-node="mo" transform="translate(2653.8,0)"
											><use data-c="2C" xlink:href="#MJX-74767-TEX-N-2C"></use></g
										><g data-mml-node="msub" transform="translate(3098.4,0)"
											><g data-mml-node="mi"
												><use data-c="1D44E" xlink:href="#MJX-74767-TEX-I-1D44E"></use></g
											><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"
												><use data-c="31" xlink:href="#MJX-74767-TEX-N-31"></use></g
											></g
										><g data-mml-node="mo" transform="translate(4064,0)"
											><use data-c="5D" xlink:href="#MJX-74767-TEX-N-5D"></use></g
										></g
									></g
								></g
							><!--<SVGLatex>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-15"
								class="draggable s-P_oU-j3jLMpy"
								d="M 346.3333026667446,90.67702976831703 L 339.6666158537085,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(-1 0 0 1 1219.3331909179688 204.66668701171875)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-16"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(1 0 0 1 141.33331298828125 7.989593416452408)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-17"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(-1 0 0 1 1096.6665649414062 102.98959058523178)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-18"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(-1 0 0 1 939.3333129882812 3.9895932972431183)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-19"
								class="draggable s-P_oU-j3jLMpy"
								d="M 346.3333026667446,90.67702976831703 L 339.6666158537085,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(-1 0 0 1 715.3333129882812 204)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-20"
								class="draggable s-P_oU-j3jLMpy"
								d="M 346.3333026667446,90.67702976831703 L 339.6666158537085,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(-1 0 0 1 692.6666259765625 101.33331298828125)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-21"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(1 0 0 1 468.666748046875 204.66671752929688)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<path
								id="Path-localImage94-22"
								class="draggable s-P_oU-j3jLMpy"
								d="M 330.33330314358165,92.01040375201688 L 256.3333053489535,124.01040279834262"
								fill="rgba(0, 0, 0, 0)"
								fill-rule="evenodd"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="none"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="4"
								vector-effect="none"
								opacity="1"
								filter="none"
								mask="none"
								marker-start="none"
								marker-mid="none"
								marker-end="url(#Arrow-localImage94-5)"
								transform="matrix(1 0 0 1 337.33331298828125 107.98959064483643)"
							></path><!--<SVGPath>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-23"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 -121.33331298828125 -104.66668701171875)">1</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-24"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 -321.33331298828125 -4)">1</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-25"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 -262 91.3333740234375)">1</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-26"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 209.33331298828125 92.666748046875)">1</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-27"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 73.99993896484375 -2.66656494140625)">1</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-28"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 107.99993896484375 -111.333251953125)">0</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-29"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 -187.3333740234375 -1.9998779296875)">0</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-30"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 -164.00006103515625 101.33343505859375)">0</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-31"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 267.99993896484375 -8.66656494140625)">0</text
							><!--<SVGText>-->
							<!--<SVGElement>-->
							<text
								id="Text-localImage94-32"
								class="draggable s-q6o8mxW0L6dG"
								x="540.0666885375977"
								y="216.443359375"
								fill="currentColor"
								font-size="20px"
								font-weight="400"
								font-family="Roboto, sans-serif"
								filter="none"
								opacity="1"
								transform="matrix(1 0 0 1 339.99993896484375 98.00006103515625)">0</text
							><!--<SVGText>-->
							<!--<SVGElement>--></g
						><!--<SVGGroup>--></g
					></svg
				>
			</div>
			<p>The state of the algorithm at each leaf of the decision tree represents a permutation of the input array.</p>
			<p>
				There must be a leaf for each permutation if the algorithm sorts every possible input. Here \(k\) represents the number of steps the algorithm takes to sort the input array.
				Therefore, \[2^k\geq n! \implies k \geq \log n!\]
			</p>
			<p>
				<strong>Stirling's approximation</strong>: \[\log n! \approx n\log n - n\]
			</p>
			<p>
				Since we know that there are algorithms that achieve this bound, we have the proof of \[k =
				\Omega(n\log n)\]
			</p>
		</Content>
	</Card>
	<!-- <h6 id="questions">Questions</h6>
    
    <Card>
        <Content>
            <div class="question">When can the algorithm terminate early? Can this algorithm be parallelized?</div>
        </Content>
    </Card> -->
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
        max-width: 750px;
		width: 90%;
        margin: auto;
	}
	p,
	li {
		opacity: 0.8;
	}
	h2,
	h3,
	h4,
	h5 {
		margin: 0.5em 0;
	}
	h5 {
		font-size: 1.1em;
	}
	h6 {
		font-size: 1em;
		margin: 0.5em 0;
		color: rgb(74, 155, 139);
	}
	strong {
		color: goldenrod;
		opacity: 1;
	}
	a {
		cursor: pointer;
		text-decoration: none;
	}
	.question {
		cursor: pointer;
		padding: 0.3em;
	}
	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid teal;
		height: auto;
	}
	.grid {
		display: grid;
		gap: 0.1em;
		height: 300px;
		width: 300px;
		border: 1px solid gray;
		padding: 0.1em;
		margin: auto;
	}
    .media {
        display: flex;
        max-width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>
