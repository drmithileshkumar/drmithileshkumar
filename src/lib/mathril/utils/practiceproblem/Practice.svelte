<script lang='ts'>
	// @ts-nocheck
	import Timer from './Timer.svelte';
	import {QuestionTimer} from '$lib/mathril/pages/practice/stores';
	import { saved, attempted, attemptedN, correctN, workoutClass, workoutChapterN, workoutChapter, workoutTimes, fastest, slowest } from './practiceStore';
	import Performance from './Performance.svelte';
	import Practiceradiobutton from './Practiceradiobutton.svelte';
	import { browser } from '$app/environment';
	import Ripple from '@smui/ripple';
	import Tooltip, {
		Wrapper,
		Title,
		Content,
		Link,
		RichActions,
	} from '@smui/tooltip';
	import Button, { Label } from '@smui/button';
    
	import {writeMode} from '$lib/canvas/stores';
	import CanvasBar from "$lib/canvas/CanvasBar.svelte";
    import Canvas from "$lib/canvas/Canvas.svelte";
	import { typeset } from '$lib/shared/typeset';
	
    import { createEventDispatcher, onMount } from 'svelte';
	
	let dispatch = createEventDispatcher();
	export let started = false;
	export let problemnumber = 0;
	let showPerformance = false;
	let text = 'Practice Time';
	
	let streak = 0;
	let panel;
	let answer = '';
	let correct = '-1';
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
	export let generateProblem = (a) => {
		return problemset;
	};
	$: problemset = generateProblem(problemnumber);
	onMount(() => {
		started = true;
		problemset = generateProblem(problemnumber);
		// console.log(problemnumber, problemset)
		newproblem = problemset.s;
		correct = problemset.c;
		valueA = problemset.o['A'];
		valueB = problemset.o['B'];
		valueC = problemset.o['C'];
		valueD = problemset.o['D'];
		optionValues = [valueA, valueB, valueC, valueD];
	})
	let clock = 0, minutes = 0, seconds = 0, milli = 0;
	let newproblem = '';
	let answered = 0;
	
	let correctly = 0;

	let valueA = '',
		valueB = '',
		valueC = '',
		valueD = '';
	let optionValues = [valueA, valueB, valueC, valueD];
	let W, H;
	$: if (browser && panel) {
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
	const start = () => {
		if(!started) {
			started = true;
			loadnext(false);
		} else {
			started = false;
			clearInterval($QuestionTimer);
			clock = 0;
			milli = 0;
			seconds = 0;
			minutes = 0
			answer = '';
			$attempted = false;
		}
	}
	const updateScores = (event) => {
		if(started) {
			$saved = false;
			answered = answered + 1;
			$attemptedN = $attemptedN + 1;
			$workoutTimes = $workoutTimes + clock/100;
			
			if (event.detail.success) {
				streak = streak + 1;
				correctly = correctly + 1;
				$correctN = $correctN + 1;
				if(clock/100 > $slowest) $slowest = clock/100;
				if(clock/100 < $fastest) $fastest = clock/100;
				window?.navigator?.vibrate(200);
				text = 'My time is ' + (minutes < 10 ? '0' + minutes : minutes) + ' : ' + (seconds < 10 ? '0' + seconds : seconds) + '.' + milli + '. What is yours?';
			} else {
				window?.navigator?.vibrate([100, 100, 100])
				streak = 0;
			}
		}
	};

	const loadnext = (isNext) => {
		clearInterval($QuestionTimer);
		clock = 0;
		milli = 0;
		seconds = 0;
		minutes = 0
		answer = '';
		$attempted = false;
		if (isNext) {
			problemnumber++;
		}
		problemset = generateProblem(problemnumber);
		newproblem = problemset.s;
		correct = problemset.c;
		valueA = problemset.o['A'];
		valueB = problemset.o['B'];
		valueC = problemset.o['C'];
		valueD = problemset.o['D'];
		optionValues = [valueA, valueB, valueC, valueD];
		$QuestionTimer = setInterval(() => {
			clock++;
			milli = milli + 1;
			seconds = milli >= 100 ? seconds + 1 : seconds;
			milli = milli % 100;
			minutes = seconds >= 60 ? minutes + 1 : minutes;
			seconds = seconds % 60;
		}, 10)
	};
	
	const scoreImage = () => {
		
	}
	$: strokedasharray = answered > 0 ? correctly / answered : 0;
	$: background = $writeMode ? 'gray' : 'transparent';

	// $: console.log(problemset)
	
</script>

<!-- ---------------------------------------------------- -->
<div class="problemPanel" bind:this={panel}>
	<div class="problemset" style="display: block;" use:typeset>
		<fieldset class="problemField" >
			<legend>
				<div class="problemLegend">
					<Wrapper rich>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div class="item refresh" use:Ripple={{ surface: true }} on:click={() => start(!started)}>
							<span class="material-symbols-outlined">{started ? 'stop_circle' : 'play_circle'}</span>
						</div>
						<Tooltip interactive yPos="above">
							<Title>Start/Stop practice</Title>
							<Content>Click to start practice. Click again to stop the practice. Stopping does NOT reset current workout session. Stopping reloads problem of the same type. Timer is reset.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper>
					<Wrapper rich>
						<div class="item refresh" use:Ripple={{ surface: true }} on:click={() => loadnext(false)}>
							<span class="material-icons"> refresh </span>
						</div>
						<Tooltip interactive yPos="above">
							<Title>Reload similar problem</Title>
							<Content>This reloads the problem of the same type.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper>
					<Wrapper rich>
						<div class="item dayscore">
							<Performance {strokedasharray} />
						</div>
						<Tooltip interactive yPos="above">
							<Title>Accuracy</Title>
							<Content>Shows accuracy in the current workout session.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper>
					<Wrapper rich>
						<div class="item timer">
							<Timer {milli} {seconds} {minutes}/>
						</div>
						<Tooltip interactive yPos="above">
							<Title>Timer</Title>
							<Content>Timer shows number of seconds taken since the problem was loaded. Timer resets whenever a problem is loaded.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper>
					<!-- <Wrapper rich>
						<div class="item next" use:Ripple={{ surface: true }} on:click={() => loadnext(true)}>
							<span class="material-icons"> arrow_forward </span>
						</div>
						<Tooltip interactive yPos="above">
							<Title>Next problem</Title>
							<Content>Loads a new problem of different type. Timer is reset.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper> -->
					<Wrapper rich>
						<div class="item streak">
							<svg width="100%" height="100%" viewBox="-48 -20.5 200 190"><path d="M 27.11,56.29 L 43.5,-11.04 L 73,49.45 L 142.11,44.22 L 93.69,90.97 L 120.02,155.08 L 60.59,123.48 L 7.75,168.33 L 19.44,102.05 L -39.53,65.66 L 27.11,56.29 Z" stroke='rgba(0, 175, 255, 1)' stroke-width='2' fill="rgba(0, 175, 255, 1)"/>
							<text text-anchor="middle" x="55" y="110" font-size="100px" fill="white">{streak}</text>
							</svg>
							<!-- <span>{streak}</span> -->
						</div>
						<Tooltip interactive yPos="above">
							<Title>Streak</Title>
							<Content>Number of correct answers. Resets when a wrong answer is given.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper>
					<Wrapper rich>
						<div class="item writeMode" use:Ripple={{ surface: true }} style:background on:click={() => $writeMode = !$writeMode}>
							<span class="writeMode material-icons">draw</span>
						</div>
						<Tooltip interactive yPos="above">
							<Title>Draw</Title>
							<Content>Click on it to enter draw mode. In this mode, it is possible to use mouse or any pointing device to write on a canvas. To exit the mode, click this button again.</Content>
							<RichActions></RichActions>
						</Tooltip>
					</Wrapper>
				</div>
			</legend>
			{#if $writeMode}
				<CanvasBar />
				<div class="canvas" style="width: {W}; height: {H};">
					<Canvas width={W} height={H} />
				</div>
			{/if}
			<div class="problemArea" bind:clientHeight={H} bind:clientWidth={W}>
				{#key newproblem}
					<div class="problemStatement" use:typeset>
						{@html newproblem}
					</div>
					<div class="options">
							
						<Practiceradiobutton {optionValues} {correct} bind:answer on:chosen={updateScores} />
							
					</div>
					
				{/key}
			</div>
		</fieldset>
	</div>
</div>
<!-- --------------------------------------------------- -->
<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		border: 0.5px solid gray;
		border-radius: 50%;
		/* color: rgba(0, 0, 0, 0.6); */
		cursor: pointer;
		
	}
	.item span {
		font-size: 1.3em;
	}
	/* .label {
		font-size: 0.8em;
	} */
	.canvas {
        position: absolute;
        /* width: calc(100vw - 4em); */
        /* height: 100%; */
        z-index: 10;
        top: 3.5em;
		left: 3.5em;
		background: rgba(0, 0, 0, 0.1);
		overflow: hidden;
    }
	
	.problemPanel {
		margin-left: auto;
		margin-right: auto;
		margin-top: 0.5em;
		width: 95%;
		/* background: radial-gradient(rgb(35 100 120), black); */
	}
	.problemField {
		position: relative;
		padding: 0.3em;
		padding-bottom: 1em;
		border: 1px solid rgb(0, 163, 240);
		border-radius: 10px;
		width: auto;
		font-size: 0.8em;
		font-family: Georgia, 'Times New Roman', Times, serif;
		/* overflow: hidden; */
	}
	/* .dayscore, .timer {
		grid-area: dayscore;
		border-radius: 50%;
		border: rgba(0, 143, 253, 0) 1px solid;
		padding: 0px;
		font-size: small;
		width: 35px;
		height: 35px;
	} */
	.dayscore {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
	}

	.problemLegend {
		display: flex;
		flex-direction: row;
		border-top: rgb(0, 163, 240) 1px solid;
		border-bottom: rgb(0, 163, 240) 1px solid;
		border-radius: 10px;
		/* margin-left: 20px; */
		align-items: center;
		/* box-shadow: rgb(0 0 0 / 31%) 1px 1px 0px 0px inset, rgb(0 0 0 / 35%) 2px 2px 3px 1px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset; */
		width: 100%;
		gap: 5px;
		padding: 5px;
	}

	.problemStatement {
		/* grid-area: problemStatement; */
		padding-left: 0.3rem;
		margin-top: 0.5rem;
		word-spacing: 0.4rem;
		line-height: 2rem;
		font-size: 1.5em;
		/* overflow: auto;
		scrollbar-width: thin; */
	}
	::-webkit-scrollbar {
		width: 10px;
	}
	.problemArea {
		display: flex;
		flex-direction: column;
		/* max-width: 86vw; */
	}
	
	
	/* .site {
		display: flex;
		font-family: roboto;
		letter-spacing: 0.2ex;
		font-weight: 300;
		align-items: center;
		justify-content: center;
		font-variant: small-caps;
		color: gray;
	} */
	.streak {
		width: 35px;
		color: magenta;
		padding: 5px;
	}
	:global(.katex) {
		color: currentcolor;
	}
</style>
