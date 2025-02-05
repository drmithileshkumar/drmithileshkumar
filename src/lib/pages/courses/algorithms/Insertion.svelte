<script lang="ts">
	//@ts-nocheck
	import { scale, fade, fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
	import { send, receive } from '$lib/utils/transition.js';
    import { tweened } from "svelte/motion";
    import { quartInOut } from "svelte/easing";
	import { cubicOut } from 'svelte/easing';
	import { ActionButtons } from '@smui/card';
	import Slider from '@smui/slider';
	import FormField from '@smui/form-field';
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { randInt } from '$lib/mathril/utils/matlib/common';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import { composition, sort } from 'mathjs';
	import Checkbox from '@smui/checkbox';
	import IconButton from '@smui/icon-button';
    import { onMount } from 'svelte';
	
	let open = false;
	
	let done = false;
	

	let inputArray = [];
    let sortedArray = [];
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
    let comparisonBox = 0;
    let comparer;
    let figWidth;
    let leftShift = -2 * (n - 1);
    let widthCorrection = 0.975;
    let comment = "";

    const timer = ms => new Promise(res => setTimeout(res, ms));
    const waitTimer = (dir) => {
        waitTime = dir == "+" ? waitTime + 50 : waitTime - 50;
    }
    onMount(() => setArray());
	const setArray = () => {
        swaps.set(0);
        comparisons.set(0);
        comparisonBox = 0;
		sorted = false;
        started = false;
        runthrough = false;
        inserting = false;
		inputArray = [];
        sortedArray = [];
        insertionIndex = -1;
        compareIndex = -1;
        lastIndex = 0;
        lastId = 0;
        sum = 0;
        comment = '';
        // comparer.style.transform = `translate(${0}%)`
        comparer.style.left = leftShift + 'px';
        comparer.style.width = 2 * figWidth / n + 'px';
        comparer.style.opacity = 0;
		for (let i = 0; i < n; i++) {
            let newitem = randInt(100, 1);
            if(i > n/2 && withEqualEntries) {
                newitem = inputArray[randInt(n/2, 0)].item;
            }
			inputArray = [...inputArray, {id: i, item: newitem}];
            sortedArray = [...sortedArray, {id: i, item: newitem}];
            sum = sum + newitem;
		}
	};
    const insertion = async (toSort) => {
        if(lastIndex >= n - 1) {
            comment = "Sorted";
            inserting = false;
            return true;
        }
        comment = "New insertion";
        let swapped = false;
        let newinsertion = true;
        let insertionChanged = false;
        insertionIndex = toSort[lastIndex + 1].id;
        compareIndex = toSort[lastIndex].id;
        comparisonBox = 0;
        comparer.style.left = ((leftShift + widthCorrection * lastIndex * figWidth) / n) + 'px';
        comparer.style.width = 2 * figWidth / n + 'px';
        // comparer.style.transform = `translate(${lastIndex * 50}%)`
        comparer.style.opacity = 1;
        let i = lastIndex + 1;
        inserting = true;
        do {
            swapped = false;
            insertionIndex = toSort[i].id;
            compareIndex = toSort[i - 1].id;
            comparisons.update((n) => n + 1)
            if (toSort[i].item < toSort[i - 1].item) {
                await timer(waitTime);
                let temp = toSort[i];
                toSort[i] = toSort[i - 1];
                toSort[i - 1] = temp;
                swapped = true; // Mark that we made a swap
                swaps.update((n) => n + 1);
                comment = "Swapping";
                sortedArray = toSort;
                await timer(waitTime);
                i--;
                // insertionIndex = toSort[i + 1].id;
                // compareIndex = toSort[i].id;
                if(i > 0) {
                    // comparisonBox = comparisonBox + 90/n
                    let angle = (i - 1) * 50
                    comparer.style.left = ((leftShift + widthCorrection * (i - 1) * figWidth) / n) + 'px';
                    comparer.style.width = 2 * figWidth / n + 'px';
                    // comparer.style.transform = `translate(${angle}%)`
                    // comparer = comparer
                }
                
            }
        } while(swapped && i > 0)
        comment = "Inserted";
        inserting = false;
        return false;
    }
	const setStep = async (toSort) => {
        if(inputArray.length == 0) return;
        do {
            started = true;
            inserting = true;
            sorted = await insertion(toSort);
            toSort = toSort;
            sortedArray = toSort;
            lastIndex = lastIndex + 1;
            if(lastIndex < n) lastId = toSort[lastIndex].id;
        } while(!sorted && runthrough)
        inserting = false;
        comment = "Sorted";
	};
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
	<h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0">
		Insertion Sort
	</h1>
    <div style="display:flex;align-items:center;justify-content:center;">
        <Button on:click={setArray}>new</Button>
        <FormField>
            <Checkbox bind:checked={withEqualEntries} />
            <span slot="label">With some equal entries</span>
        </FormField>
    </div>
	
    <figure class="figure" bind:clientWidth={figWidth}>
        {#each inputArray as elem }
            <div
                class="item"
                style="width: {90 / n}%; height: 100px;"
            >
                <div
                    class="centered part"
                    style="height: calc({elem.item}% + 1em)"
                >
                    {elem.item}
                </div>
                <div class="centered id">
                    {elem.id}
                </div>
            </div>
        {/each}
    </figure>
    <figure class="figure">
        {#each sortedArray as elem (elem.id) }
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
        <div class="comparer" style="height: 130px; opacity: 0; transition: all {waitTime/2000}s" bind:this={comparer}>
            <p class="comment"> {comment}... </p>
        </div>
    </figure>
    {#if started}
        <div class="data">
            <div class="dataitem" style="width: 100%">
                <span># comparisons:</span> 
                <progress value={$comparisons/45}></progress>
                <strong>{$comparisons.toFixed(0)}</strong>
            </div>
            <div class="dataitem" style="width: 100%">
                <span># Swaps:</span> 
                <progress value={$swaps/45}></progress>
                <strong>{$swaps.toFixed(0)}</strong>
            </div>
        </div>
    {/if}
    <Actions style="display:flex; align-items:center; justify-content:center">
        <Button on:click={() => setStep(sortedArray)}
			>{!started ? 'Start Sorting' : inserting ? "inserting..." : !sorted ? 'Next Step' : 'Done'}</Button
		>
        <FormField>
            <Checkbox bind:checked={runthrough} />
            <span slot="label">Run through</span>
        </FormField>
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
            <li>Select <span style="display: inline-flex;align-items:center; vertical-align:middle"><Checkbox></Checkbox></span> With some equal entries to generate array that contains some equal items</li>
            <li>
                Click on <Button>new</Button> to create new array.
            </li>
            <li>
                Click on <Button>Start Sorting</Button> to start the 1st iteration of the Insertion sort.
            </li>
            <li>
                Click on <Button>Next Step</Button> for the next iteration.
            </li>
            <li>
                Select <span style="display: inline-flex;align-items:center; vertical-align:middle"><Checkbox></Checkbox></span> Run Through to complete the sorting 
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
		/* width: 100%; */
		display: flex;
		align-items: end;
		justify-content: start;
		gap: 4px;
        /* padding: 4px; */
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
        display:flex;
        align-items: end;
        justify-content: center;
    }
    .comment {
        position: relative;
        margin: auto;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.7em;
        color: tomato;
        line-height: 1;
        margin-bottom: 0;
    }
    .speed {
        display: flex;
        align-items: center;
    }
	:global(.katex) {
		color: currentcolor;
	}
</style>
