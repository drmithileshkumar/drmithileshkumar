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
	import { contents, contentNav } from '$lib/pages/courses/internet/content';
	import Pathlist from '$lib/components/Pathlist.svelte';
	import CourseNavigation from '$lib/components/CourseNavigation.svelte';
	$navList = contents;
	$currentPath = 'Calculator';
	$darkMode = false;
	// tileGrid(5, 5)
	let cssLayout = [];
	let nDivs = 0;
	let gridLayout;
	let hasZero = false;
	const generateLayout = () => {
		let { grid, rectangleCount } = tileGrid(5, 5);
		hasZero = 0;
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j] === 0) {
					hasZero = true;
					break;
				}
			}
		}
		cssLayout = grid;
		nDivs = rectangleCount;
		// console.log(rectangleCount, grid);
		let areas = '';
		let rows = [];
		for (let i = 0; i < grid.length; i++) {
			rows.push(grid[i].map((c) => 'item' + c).join(' '));
		}
		areas = rows.map((r) => `"${r}"`).join(' ');
		// grid.map(row => `"${row.join(" ")}"`).join("\n");
		gridLayout.style.gridTemplateAreas = areas;
	};

	onMount(() => {
		//generateLayout();
	});
	let htmlContentPosition = `<div id="container">
    <div id="io">
        <div id="expression"></div>
        <div id="output"></div>
    </div>
    <div id="input">
        <div id="advanced"></div>
        <div id="basic">
            <button class="operation C" onclick="setOperator('C')">C</button>
            <button class="operation pm" onclick="setOperator('pm')">&plusmn;</button>
            <button class="operation per" onclick="setOperator('%')">&percnt;</button>
            <button class="operation div" onclick="setOperator('/')">&divide;</button>

            <button class="seven" onclick="setNumber(7)">7</button>
            <button class="eight" onclick="setNumber(8)">8</button>
            <button class="nine" onclick="setNumber(9)">9</button>
            <button class="operation mul" onclick="setOperator('*')">&times;</button>

            <button class="four" onclick="setNumber(4)">4</button>
            <button class="five" onclick="setNumber(5)">5</button>
            <button class="six" onclick="setNumber(6)">6</button>
            <button class="operation min" onclick="setOperator('-')">&minus;</button>

            <button class="one" onclick="setNumber(1)">1</button>
            <button class="two" onclick="setNumber(2)">2</button>
            <button class="three" onclick="setNumber(3)">3</button>
            <button class="operation plus" onclick="setOperator('+')">+</button>

            <button class="zero" onclick="setNumber(0)">0</button>
            <button class="dot" onclick="setNumber('.')">.</button>
            <button class="operation eq" onclick="setOperator('=')">&equals;</button>
        </div>
    </div>
</div>`;
	let cssContentPosition = `* {
    box-sizing: border-box;
}
#container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 300px;
    align-items: center;
    border: 1px solid;
    padding: 0.2em;
}
#io {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0.2em;
    border: 1px solid;
    min-height: 1.5em;
    width: 100%;
}
#expression {
    color: gray;
    display: flex;
    justify-content: end;
    padding: 0.5em 0.2em;
    height: 1.5em;
}
#output {
    display: flex;
    justify-content: end;
    padding: 0.5em 0.2em;
    height: 1.5em;
}
#input {
    width: 100%;
    display: grid;
    padding: 0.2em;
    border: 1px solid;
}
#basic {
    display: grid;
    gap: 0.2em;
    grid-template-areas:
        'C pm per div'
        'seven eight nine mul'
        'four five six min'
        'one two three plus'
        'zero zero dot eq';
}
.C {
    grid-area: C;
}
.pm {
    grid-area: pm;
}
.per {
    grid-area: per;
}
.div {
    grid-area: div;
}
.mul {
    grid-area: mul;
}
.min {
    grid-area: min;
}
.plus {
    grid-area: plus;
}
.eq {
    grid-area: eq;
}
.zero {
    grid-area: zero;
}
.one {
    grid-area: one;
}
.two {
    grid-area: two;
}
.three {
    grid-area: three;
}
.four {
    grid-area: four;
}
.five {
    grid-area: five;
}
.six {
    grid-area: six;
}
.seven {
    grid-area: seven;
}
.eight {
    grid-area: eight;
}
.nine {
    grid-area: nine;
}

button {
    font-size: 1.2em;
}
.operation {
    background-color: rgb(245, 162, 7);
    border-color: rgb(245, 162, 7);
}`;
    let javaScriptContent = `let expression = document.querySelector("#expression");
let output = document.querySelector("#output");
expression.textContent = '';
let currentExpression = '';
let result = 0;
let operator = '';
let number = 0;
let lastInput = 'Number';
let currentOperation = '';
let currentNumber = '';
function setOperator(op) {
    if(expression.textContent == '') return;
    currentOperation = op;
    currentNumber = '';
    if(lastInput == 'op') {
        //remove the last operation to new operation in expression
        expression.textContent = expression.textContent.slice(0, -1);
    }
    lastInput = 'op';
    switch(op) {
        case 'C': {
            expression.textContent = '';
            output.textContent = '';
            break;
        } 
        case 'pm': {
            break;
        }
        case '=': {
            result = eval(expression.textContent);
            output.textContent = result;
            lastInput = '';
            break;
        }
        default: {
            expression.textContent += op;
            break;
        }
    }
}
function setNumber(num) {
    lastInput = "Number";
    if(!(num == '0' && currentNumber == '0')) {
        currentNumber += num;
        expression.textContent += num;
    }
}
`
</script>

<svelte:head>
	<title>Internet Technologies</title>
	<link
		rel="canonical"
		href="https://drmithileshkumar.com/courses/internet/javascript/basics/calculator"
	/>
	<meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
	{#if $darkMode}
		{@html githubDark}
	{:else}
		{@html github}
	{/if}
</svelte:head>
<article>
	<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />
	<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
	<h4>Calculator</h4>
	<!-- <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#media">Media Queries</a></li>
                <li><a href="#layout">Responsive layout</a></li>
                <li><a href="#images">Responsive images</a></li>
                <li><a href="#typography">Responsive typography</a></li>
                <li><a href="#viewport">Viewport</li>
            </ol>
            <p>Responsive design is a way to design your web application that renders well on all screen sizes and resolutions.</p>
        </Content>
    </Card> -->

	<!-- <Card>
        <Content>
            <h6 id="media">Media Queries</h6>
            <p>
                Media queries allow us to run a series of tests (e.g. whether the user's screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user's needs.
                <Highlight language={css} 
                code={`@media screen and (min-width: 500px) {
    .container {
        display: grid;
    }
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, <code>.container</code> will set <code>display</code> to <code>grid</code> when the screen width is greater than or equal to 500px.
            </p>
        </Content>
    </Card> -->
	
	<WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={javaScriptContent} />

	<!-- <Card>
        <Content>
            <Highlight language={xml} code={code2} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card> -->
	<!-- <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">Make your resume, college, and hometown pages responsive.</div>
        </Content>
    </Card> -->
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
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
	#container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		width: 300px;
		align-items: center;
		border: 1px solid;
		padding: 0.2em;
	}
	#io {
		display: flex;
		flex-direction: column;
		padding: 0.5em 0.2em;
		border: 1px solid;
		min-height: 1.5em;
		width: 100%;
	}
	#expression {
		color: gray;
		display: flex;
		align-items: end;
		padding: 0.5em 0.2em;
		min-height: 1.5em;
	}
	#output {
		color: gray;
		display: flex;
		align-items: end;
		padding: 0.5em 0.2em;
		min-height: 1.5em;
	}
	#input {
		width: 100%;
		display: grid;
		padding: 0.2em;
		border: 1px solid;
	}
	#basic {
		display: grid;
		gap: 0.2em;
		grid-template-areas:
			'C pm per div'
			'seven eight nine mul'
			'four five six min'
			'one two three plus'
			'zero zero dot eq';
	}
	.C {
		grid-area: C;
	}
	.pm {
		grid-area: pm;
	}
	.per {
		grid-area: per;
	}
	.div {
		grid-area: div;
	}
	.mul {
		grid-area: mul;
	}
	.min {
		grid-area: min;
	}
	.plus {
		grid-area: plus;
	}
	.eq {
		grid-area: eq;
	}
	.zero {
		grid-area: zero;
	}
	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
	.three {
		grid-area: three;
	}
	.four {
		grid-area: four;
	}
	.five {
		grid-area: five;
	}
	.six {
		grid-area: six;
	}
	.seven {
		grid-area: seven;
	}
	.eight {
		grid-area: eight;
	}
	.nine {
		grid-area: nine;
	}

	button {
		font-size: 1.2em;
	}
	.operation {
		background-color: rgb(245, 162, 7);
		border-color: rgb(245, 162, 7);
	}
</style>
