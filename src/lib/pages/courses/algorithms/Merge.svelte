<script lang="ts">
	//@ts-nocheck
	import { scale, fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { send, receive } from '$lib/utils/transition.js';
	import { tweened } from 'svelte/motion';
	import { quartInOut } from 'svelte/easing';
	import { cubicOut } from 'svelte/easing';
	import { ActionButtons } from '@smui/card';
	import Slider from '@smui/slider';
	import FormField from '@smui/form-field';
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { randInt } from '$lib/mathril/utils/matlib/common';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import { compare, composition, sort } from 'mathjs';
	import Checkbox from '@smui/checkbox';
	import IconButton from '@smui/icon-button';

	let open = false;

	let active = false;

	let sortingTree = []; //{id, start, end, parent, children, sorted}
    let leftSide, rightSide;


	let inputArray = [];
	let sortedArray = [];
    let mergeArray = [];
	let n = 10;
	let low = 1;
	let high = 100;
	let sum = 0;
	let sorted = false;
	let started = false;
	let inserting = false;
	let insertionIndex = -1;
	let compareIndex = -1;
	let lastIndex = 0;
	let lastId = n - 1;
	let runthrough = false;

	let withEqualEntries = false;
	let waitTime = 1000;
	let comparisons = tweened(0, {
		duration: waitTime,
		easing: cubicOut
	});
	let swaps = tweened(0, {
		duration: waitTime,
		easing: cubicOut
	});
	let merges = tweened(0, { duration: 1000, easing: cubicOut });
	let comparisonBox = 0;
	let comparer, figure, rect, fig;
	let figWidth;
	let leftShift = -2 * (n - 1);
    let widthCorrection = 0.975;
	let comment = '';
	const timer = (ms) => new Promise((res) => setTimeout(res, ms));
	const waitTimer = (dir) => {
		waitTime = dir == '+' ? waitTime + 50 : waitTime - 50;
	};
	const setArray = () => {
		rect = comparer.getBoundingClientRect();
		fig = figure.getBoundingClientRect();
		
		comparisons.set(0);
        merges.set(0);
		comparisonBox = 0;
		sorted = false;
		started = false;
		runthrough = false;
		
		inputArray = [];
		sortedArray = [];
        sortingTree = [];
        mergeArray = [];

		insertionIndex = -1;
		compareIndex = -1;
		lastIndex = 0;
		lastId = 0;
		sum = 0;
		comment = '';
		comparer.style.transform = `translate(${0}%)`;
		comparer.style.opacity = 0;

		for (let i = 0; i < n; i++) {
			let newitem = randInt(100, 1);
			if (i > n / 2 && withEqualEntries) {
				newitem = inputArray[randInt(n / 2, 0)].item;
			}
			inputArray = [...inputArray, { id: i, active: 'black', item: newitem }];
			sortedArray = [...sortedArray, { id: i, active: 'black', item: newitem }];
			sum = sum + newitem;
		}
        sortingTree = generateMergeSortTree(sortedArray);
	};
	const insertion = async (toSort) => {
		if (lastIndex >= n - 1) {
			comment = 'Sorted';
			inserting = false;
			return true;
		}
		comment = 'New insertion';
		let swapped = false;
		let newinsertion = true;
		let insertionChanged = false;
		insertionIndex = toSort[lastIndex + 1].id;
		compareIndex = toSort[lastIndex].id;
		comparisonBox = 0;
		comparer.style.transform = `translate(${lastIndex * 50}%)`;
		comparer.style.opacity = 1;
		let i = lastIndex + 1;
		inserting = true;
		do {
			swapped = false;
			insertionIndex = toSort[i].id;
			compareIndex = toSort[i - 1].id;
			comparisons.update((n) => n + 1);
			if (toSort[i].item < toSort[i - 1].item) {
				await timer(waitTime);
				let temp = toSort[i];
				toSort[i] = toSort[i - 1];
				toSort[i - 1] = temp;
				swapped = true; // Mark that we made a swap
				swaps.update((n) => n + 1);
				comment = 'Swapping';
				sortedArray = toSort;
				await timer(waitTime);
				i--;
				// insertionIndex = toSort[i + 1].id;
				// compareIndex = toSort[i].id;
				if (i > 0) {
					// comparisonBox = comparisonBox + 90/n
					let angle = (i - 1) * 50;
					comparer.style.transform = `translate(${angle}%)`;
					// comparer = comparer
				}
			}
		} while (swapped && i > 0);
		comment = 'Inserted';
		inserting = false;
		return false;
	};
	const merge = async (left, right, start) => {

        comparer.style.width = (0.975 * (left.length + right.length) * fig.width) / n + 'px';

		comparer.style.left = (0.965 * start * fig.width) / n + 'px';

        // let leftBox = computeBox(start, left.length)
        leftSide.style.left = (0.965 * start * fig.width) / n + 'px';
        leftSide.style.width = (0.975 * (left.length) * fig.width) / n + 'px';

        // let rightBox = computeBox(start + left.length - 1, start + left.length + right.length)
        rightSide.style.left = ((0.965 * start * fig.width) / n + (0.975 * (left.length) * fig.width) / n) + 'px';
        rightSide.style.width = (0.975 * (right.length) * fig.width) / n + 'px';
		await timer(waitTime);
        
        
		for (let i = 0; i < left.length; i++) {
			left[i].active = 'tomato';
		}
		await timer(waitTime);

		for (let i = 0; i < right.length; i++) {
			right[i].active = '#01dede';
		}
		
		// comparer.style.transform = `translate(${start * 50}%)`
		// comparer = comparer;
		await timer(waitTime);
		let result = [];
		let i = 0,
			j = 0,
			counter = 0;
		comment = 'Merging...';
		while (i < left.length && j < right.length) {
			comparisons.update((n) => n + 1);
			if (left[i].item <= right[j].item) {
				result.push(left[i]);
				// sortedArray[start + counter] = left[i];
				i++;
				counter++;
			} else {
				result.push(right[j]);
				// sortedArray[start + counter] = right[j];
				counter++;
				j++;
			}
			sortedArray = sortedArray;
			// await timer(waitTime);
		}

		// Add remaining elements
		while (i < left.length) {
			result.push(left[i]);
			// sortedArray[start + counter] = left[i];
			// sortedArray = sortedArray;
			// counter++;
			i++;
			// await timer(waitTime);
		}
		while (j < right.length) {
			result.push(right[j]);
			// sortedArray[start + counter] = right[j];
			// sortedArray = sortedArray;
			// counter++;
			j++;
			// await timer(waitTime);
		}
		await timer(waitTime);
		//Update visualization
		for (let k = 0; k < result.length; k++) {
			sortedArray[start + k] = result[k];
			// sortedArray[start + k].active = !sortedArray[start + k].active;
			sortedArray = sortedArray;
		}
		merges.update((n) => n + 1);
        comment = 'Merged'
        await timer(waitTime);
        for (let i = 0; i < result.length; i++) {
			sortedArray[start + i].active = 'green';
		}
		sortedArray = sortedArray;
		return result;
	};

    const separateMerge = async (start, mid, end) => {
        // console.log(start, mid, end);
        comparer.style.width = (widthCorrection * (end - start + 1) * fig.width) / n + 'px';

		comparer.style.left = (leftShift + widthCorrection * start * fig.width) / n + 'px';

        // let leftBox = computeBox(start, left.length)
        leftSide.style.left = (leftShift + widthCorrection * start * fig.width) / n + 'px';
        leftSide.style.width = (widthCorrection * (mid - start) * fig.width) / n + 'px';

        // let rightBox = computeBox(start + left.length - 1, start + left.length + right.length)
        rightSide.style.left = ((leftShift + widthCorrection * start * fig.width) / n + (leftShift + widthCorrection * (mid - start) * fig.width) / n) + 'px';
        rightSide.style.width = (widthCorrection * (end - mid + 1) * fig.width) / n + 'px';
		await timer(waitTime);
        merges.update((n) => n + 1);
        mergeArray = [];
        if(start >= end) return;
        for(let i = start; i <= end; i++) {
            mergeArray = [...mergeArray, sortedArray[i]]
            sortedArray[i] = {id: -sortedArray[i].id - 1, active: 'grey', item: sortedArray[i].item}
        }
        await timer(waitTime);
        comment = "Merging"
        let first = 0, second = mid - start, last = end - start, currentPos = start;
        let lengthA = mid - start;
        let lengthB = end - mid + 1;
        while(lengthA > 0 && lengthB > 0 && mergeArray.length > 0) {
            // console.log(mergeArray)
            mergeArray[first].active = 'goldenrod';
            mergeArray[second].active = 'goldenrod';
            await timer(waitTime);
            comparisons.update((n) => n + 1);
            if(mergeArray[first].item <= mergeArray[second].item) {
                sortedArray[currentPos] = mergeArray.shift();
                second = second - 1;
                last = last - 1;
                lengthA = lengthA - 1;
                currentPos = currentPos + 1;
                mergeArray = mergeArray
                sortedArray = sortedArray;
                await timer(waitTime);
            } else {
                sortedArray[currentPos] = mergeArray.splice(second, 1)[0];
                last = last - 1;
                lengthB = lengthB - 1;
                mergeArray = mergeArray
                sortedArray = sortedArray;
                currentPos = currentPos + 1;
                await timer(waitTime);
            }
        }
        while(mergeArray.length > 0) {
            sortedArray[currentPos] = mergeArray.shift();
            mergeArray = mergeArray
            sortedArray = sortedArray;
            currentPos = currentPos + 1;
            await timer(waitTime);
        }
        comment = "Merged"
    }
	// Merge sort logic with visualization
	const mergeSort = async (arr, start = 0, end = arr.length - 1) => {
        comment = 'New'
        comparer.style.width = (widthCorrection * (end + 1 - start) * fig.width) / n + 'px';

		comparer.style.left = (leftShift + widthCorrection * start * fig.width) / n + 'px';
        leftSide.style.width = comparer.style.width;
        rightSide.style.width = comparer.style.width;
        leftSide.style.left = comparer.style.left;
        rightSide.style.left = comparer.style.left;

        arr[start].active = 'green';
        arr = arr;
		if (start >= end) return [{ ...arr[start] }];
        
		let mid = Math.floor((start + end) / 2);
		// Recursively sort both halves
		for (let i = start; i < mid + 1; i++) {
			arr[i].active = 'pink';
		}
        arr = arr;
        for (let i = mid + 1; i < end + 1; i++) {
			arr[i].active = 'black';
		}
		arr = arr;
        await timer(waitTime);
		comment = 'Left Tree';
        for (let i = start; i < mid + 1; i++) {
			arr[i].active = 'goldenrod';
		}
        arr = arr;
        await timer(waitTime);
		const left = await mergeSort(arr, start, mid);
		for (let i = start; i < mid + 1; i++) {
			arr[i].active = 'tomato';
		}
		arr = arr;
        comment = 'Left Sorted'
		await timer(waitTime);

		for (let i = mid + 1; i < end + 1; i++) {
			arr[i].active = 'goldenrod';
		}
		arr = arr;
		comment = 'Right Tree';
        await timer(waitTime);
		const right = await mergeSort(arr, mid + 1, end);
		for (let i = mid + 1; i < end + 1; i++) {
			arr[i].active = 'teal';
		}
		arr = arr;
		comment = 'Right sorted';
        await timer(waitTime);
        comment = 'Starting merge';
        await separateMerge(start, mid + 1, end)
		// return await merge(left, right, start);
	};
	const setStep = async (toSort) => {
        // computeBox(0, inputArray.length);
		if (inputArray.length == 0) return;
        started = true;
		comparer.style.opacity = 1;
        leftSide.style.opacity = 1;
        rightSide.style.opacity = 1;
		await mergeSort(toSort);
        // separateMerge(1, 5, 8);
        comment = 'Sorted';
        sorted = true;
		
	};
    const setBox = (side, box) => {
        side.style.left = box.x;
        side.style.width = box.width;
        side = side;
    }
    const computeBox = (start, end) => {
        // fig = figure.getBoundingClientRect();
        
        let box = {
            x: fig.x + start * fig.width / n,
            width: (end - start) * fig.width / n
        }
        return box;
    }
	function generateMergeSortTree(arr) {
		let idCounter = 0;
		let tree = [];

		function mergeSort(start, end, parentId = null) {
			if (start >= end) return null;

			let id = idCounter++;
			let node = {
				id,
				start,
				end,
				parentId,
				children: [],
				sorted: false
			};
			tree.push(node);

			if (end - start > 1) {
				let mid = Math.floor((start + end) / 2);
				let leftChild = mergeSort(start, mid, id);
				let rightChild = mergeSort(mid, end, id);

				if (leftChild !== null) node.children.push(leftChild.id);
				if (rightChild !== null) node.children.push(rightChild.id);
			}

			// node.sorted = true;
			return node;
		}

		mergeSort(0, arr.length);
		return tree;
	}

    

	let panel;
	$: if (browser && panel && renderMathInElement) {
		setTimeout(() => {
			renderMathInElement(panel, {
				delimiters: [
					{ left: '$$', right: '$$', display: true },
					{ left: '$', right: '$', display: false },
					{ left: '\\(', right: '\\)', display: false },
					{ left: '\\[', right: '\\]', display: true }
				],
				// • rendering keys, e.g.:
				throwOnError: false
			});
		}, 0);
	}
</script>

<article bind:this={panel}>
	<ActionButtons style="justify-content:space-between;">
		<Button on:click={() => (open = true)}>Help</Button>
		<Button on:click={() => goto('/mathril/games')}>More games</Button>
	</ActionButtons>
	<h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0">Merge Sort</h1>
	<div style="display:flex;align-items:center;justify-content:center;">
		<Button on:click={setArray}>new</Button>
		<FormField>
			<Checkbox bind:checked={withEqualEntries} />
			<span slot="label">With some equal entries</span>
		</FormField>
	</div>

	<figure class="figure" bind:this={figure} bind:clientWidth={figWidth}>
		{#each inputArray as elem}
			<div class="item" style="width: {90 / n}%; height: 100px;">
				<div class="centered part" style="height: calc({elem.item}% + 1em)">
					{elem.item}
				</div>
				<div class="centered id">
					{elem.id}
				</div>
			</div>
		{/each}
	</figure>
	<figure class="figure">
		{#each sortedArray as elem (elem.id)}
			<div
				in:receive={{ key: elem.id }}
				out:send={{ key: elem.id }}
				animate:flip={{ duration: waitTime }}
				class="item"
				style="width: {90 / n}%; height: 100px; "
			>
				<div
					class="centered part"
					style="height: calc({elem.item}% + 1em); background: {elem.active}; color:white;"
				>
					{elem.item}
				</div>
				<div class="centered id">
					{elem.id}
				</div>
			</div>
		{/each}
		<div
			class="comparer"
			style="height: 130px; opacity: 0; transition: all {waitTime /
				2000}s"
			bind:this={comparer}
		>
			<p class="comment">{comment}...</p>
		</div>
        <div
			class="leftSide"
			style="height: 130px; opacity: 0; transition: all {waitTime /
				2000}s"
			bind:this={leftSide}
		>
			<!-- <p class="comment">left</p> -->
		</div>
        <div
			class="rightSide"
			style="height: 130px; opacity: 0; transition: all {waitTime /
				2000}s"
			bind:this={rightSide}
		>
			<!-- <p class="comment">right</p> -->
		</div>
	</figure>
    <figure class="figure">
        {#each mergeArray as elem (elem.id)}
            <div
				in:receive={{ key: elem.id }}
				out:send={{ key: elem.id }}
				animate:flip={{ duration: waitTime }}
				class="item"
				style="width: {90 / n}%; height: 100px; "
			>
				<div
					class="centered part"
					style="height: calc({elem.item}% + 1em); background: {elem.active}; color:white;"
				>
					{elem.item}
				</div>
				<div class="centered id">
					{elem.id}
				</div>
			</div>
        {/each}
    </figure>
	<!-- <figure class="figure active">
        {#each sortedArray.filter((t) => t.active) as elem (elem.id) }
            <div
                in:receive={{ key: elem.id }}
                out:send={{ key: elem.id }}
                animate:flip={{ duration: waitTime }}
                class="item"
                style="width: {90 / n}%; height: 100px;"
            >
                <div
                    class="centered part {elem.id == compareIndex ? 'beingCompared':''} {elem.id == insertionIndex ? 'inserting':''} {elem.id == lastId ? 'last' : ''}"
                    style="height: calc({elem.item}% + 1em);"
                >
                    {elem.item}
                </div>
                <div class="centered id">
                    {elem.id}
                </div>
            </div>
        {/each}
        <div class="comparer" style="width: calc({180 / n}% + 10px); height: 130px; opacity: 0; transition: all {waitTime/2000}s" bind:this={comparer}>
            <p class="comment"> {comment}... </p>
        </div>
    </figure> -->
	{#if started}
		<div class="data">
			<div class="dataitem" style="width: 100%">
				<span># comparisons:</span>
				<progress value={$comparisons / 45}></progress>
				<strong>{$comparisons.toFixed(0)}</strong>
			</div>
			<div class="dataitem" style="width: 100%">
				<span># Merges:</span>
				<progress value={$merges / 45}></progress>
				<strong>{$merges.toFixed(0)}</strong>
			</div>
		</div>
	{/if}
	<Actions style="display:flex; align-items:center; justify-content:center">
		<Button on:click={() => setStep(sortedArray)}
			>{!started
				? 'Start Sorting'
				: !sorted
						? 'Sorting...'
						: 'Done'}</Button
		>
		<!-- <FormField>
			<Checkbox bind:checked={runthrough} />
			<span slot="label">Run through</span>
		</FormField> -->
		<div class="speed">
			<IconButton class="material-icons" on:click={() => waitTimer('+')}>remove</IconButton>
			<span>Speed</span>
			<IconButton class="material-icons" on:click={() => waitTimer('-')}>add</IconButton>
		</div>
		<!-- {#if started}
            <Button on:click={() => runthrough = !runthrough, setStep(sortedArray, true)}>Run through</Button>
        {/if} -->
	</Actions>
</article>
<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<Title id="simple-title">How to play</Title>
	<Content id="simple-content">
		<ul>
			<li>
				Select <span style="display: inline-flex;align-items:center; vertical-align:middle"
					><Checkbox></Checkbox></span
				> With some equal entries to generate array that contains some equal items
			</li>
			<li>
				Click on <Button>new</Button> to create new array.
			</li>
			<li>
				Click on <Button>Start Sorting</Button> to start the 1st iteration of the Merge sort.
			</li>
			<li>
				Click on <Button>Next Step</Button> for the next iteration.
			</li>
			<li>
				Select <span style="display: inline-flex;align-items:center; vertical-align:middle"
					><Checkbox></Checkbox></span
				> Run Through to complete the sorting
			</li>
		</ul>
	</Content>
	<Actions>
		<Button on:click={() => (open = false)}>
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>

<style>
	figure {
		position: relative;
		
		transition: all 2s;
		height: 100px;
		max-width: 1000px;
		display: flex;
		align-items: end;
		justify-content: start;
		gap: 4px;
		/* padding: 5px; */
	}
	.item {
		display: flex;
		flex-direction: column;
		justify-content: end;
	}
	.id {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.7em;
		background-color: rgb(240, 240, 240);
		opacity: 0.7;
		margin-top: 0.5em;
	}
	.centered {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 1s;
	}
	.part {
		border: 1px solid currentColor;
	}
	.inserting {
		background: rgb(0, 195, 195);
		color: white;
	}
	.beingCompared {
		background: tomato;
		color: white;
	}
	.last {
		background-color: rgb(227, 194, 3);
	}
	.data {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}
	.dataitem {
		display: grid;
		max-width: 400px;
		grid-template-columns: 130px 170px 2em;
		align-items: center;
	}
	.comparer {
		position: absolute;
		border: 1.5px dashed tomato;
		left: 0px;
		top: -5px;
		display: flex;
		align-items: end;
		justify-content: center;
	}
    .leftSide, .rightSide {
		position: absolute;
		left: 0px;
		top: -5px;
		display: flex;
		align-items: end;
		justify-content: center;
	}
    .leftSide {
        background: rgba(255, 99, 71, 0.1);
    }
    .rightSide {
        background: rgba(0, 128, 128, 0.112);
    }
	.active {
		color: goldenrod;
	}
	.inactive {
		/* color: rgb(40, 161, 40); */
	}

	.comment {
		position: relative;
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.7em;
		color: tomato;
	}
	.speed {
		display: flex;
		align-items: center;
	}
	:global(.katex) {
		color: currentcolor;
	}
</style>
