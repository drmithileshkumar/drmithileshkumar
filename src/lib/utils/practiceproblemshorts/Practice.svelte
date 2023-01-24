<script>
	// @ts-nocheck

	import { saved, attempted } from './practiceStore';
	import Performance from './Performance.svelte';
	import Practiceradiobutton from './Practiceradiobutton.svelte';
	import { browser } from '$app/environment';
	import { ripple } from '$lib/ui/ripple';
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

	let newproblem = '';
	let answered = 0;
	let nextproblemnumber = 0;
	let correctly = 0;

	let valueA = '',
		valueB = '',
		valueC = '',
		valueD = '';
	let optionValues = [valueA, valueB, valueC, valueD];
	let W;
	$: if (browser && panel) {
		newproblem = problemset.s;
		correct = problemset.c;
		valueA = problemset.o['A'];
		valueB = problemset.o['B'];
		valueC = problemset.o['C'];
		valueD = problemset.o['D'];
		optionValues = [valueA, valueB, valueC, valueD];
		// MathJax.typeset();
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
		})
        }, 0)
	}
	const updateScores = (event) => {
		$saved = false;
		answered = answered + 1;

		if (event.detail.success) {
			correctly = correctly + 1;
		}
	};

	const loadnext = (isNext) => {
		answer = '';
		$attempted = false;
		if (isNext) {
			nextproblemnumber++;
		}
		problemset = generateProblem(nextproblemnumber);
	};
	loadnext(false);
	$: strokedasharray = answered > 0 ? correctly / answered : 0;
</script>

<!-- ---------------------------------------------------- -->
<div class="problemPanel" bind:this={panel}>
	<div class="problemset" style="display: block;" bind:clientWidth={W}>
		<fieldset class="problemField">
			<legend>
				<div class="problemLegend">
					<div class="dayscore">
						<abbr title="Today's accuracy">
							<Performance {strokedasharray} />
						</abbr>
					</div>
					<span class="refresh material-icons" on:click={() => loadnext(false)}>refresh</span>
					<span class="next material-icons" on:click={() => loadnext(true)}>arrow_forward</span>
				</div>
			</legend>

			<div class="problemArea">
				<div class="problemStatement">
					{@html newproblem}
				</div>
				<div class="options">
					<Practiceradiobutton {optionValues} {correct} bind:answer on:chosen={updateScores} />
				</div>
			</div>
		</fieldset>
	</div>
</div>

<!-- --------------------------------------------------- -->
<style>
	.problemPanel {
		margin-top: 1rem;
		/* width: 300px; */
        
        width: auto;
	}
	.problemField {
		padding: 0.5em;
		padding-bottom: 1em;
		border: 1px solid rgb(0, 163, 240);
		border-radius: 10px;
		/* width: 300px; */
		font-size: 0.8em;
		font-family: Georgia, 'Times New Roman', Times, serif;
        overflow-x: auto;
	}
	.dayscore {
		border-radius: 50%;
		border: rgba(0, 143, 253, 0) 1px solid;
		padding: 0px;
		font-size: small;
		width: 55px;
	}
	.dayscore {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
	}
	.next,
	.refresh {
		display: inline-block;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		/* background: transparent;
		border: none;
		outline: none; */
		padding: 0.5em;
		color: gray;
	}
	.problemLegend {
		display: flex;
		flex-direction: row;
		border-top: rgb(0, 163, 240) 1px solid;
		border-bottom: rgb(0, 163, 240) 1px solid;
		border-radius: 10px;
		margin-left: 20px;
		align-items: center;
		/* box-shadow: rgb(0 0 0 / 31%) 1px 1px 0px 0px inset, rgb(0 0 0 / 35%) 2px 2px 3px 1px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset; */
	}

	.problemStatement {
		/* grid-area: problemStatement; */
		padding-left: 0.3rem;
		margin-top: 0.5rem;
		word-spacing: 0.4rem;
		line-height: 1.5rem;
		font-size: 1.5em;
		overflow: auto;
		scrollbar-width: thin;
		/* color: red; */
	}
	::-webkit-scrollbar {
		width: 10px;
	}
	.problemArea {
		display: flex;
		flex-direction: column;
        max-width: 86vw;
	}
	/* .noborder:hover {
        box-shadow: 1px 1px 1px green;
    } */
	abbr {
		text-decoration: none;
	}
</style>
