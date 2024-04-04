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
	$currentPath = 'Functions';
	$darkMode = false;
	// tileGrid(5, 5)
	let cssLayout = [];
	let nDivs = 0;
	let gridLayout;
	let hasZero = false;
	

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
		href="https://drmithileshkumar.com/courses/internet/javascript/basics/functions"
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
	<h4>Functions</h4>
	<Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#function"><code>function</code></a></li>
                <li><a href="#arrow">Arrow notation</a></li>
            </ol>
        </Content>
    </Card>

	<Card>
        <Content>
            <h6 id="function"><code>function</code></h6>
            <p>
				Functions are created using the <code>function</code> keyword
                <Highlight language={javascript} 
                code={`//function with no parameter and no return value
function noParamNoReturn() {
    //execute my code
}
//function with no parameter and a return
function noParamReturn() {
    //execute my code
    return someValue;
}
//function with a parameter and no return
function paramNoReturn(a) {
    //use a in the code
}
//function with a parameter and return
function paramReturn(a) {
    //use a in the code
    return someValue;
}
//function with a default value
function defaultValue(a = 1) {
    //if a is not specified use a = 1
}
//calling the function
noParamNoReturn();
let returnValue = noParamReturn();
paramNoReturn(5);
let anotherValue = paramReturn(6);
//use default
defaultValue();//uses a = 1
defaultValue(10);//uses a = 10`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
        </Content>
    </Card>
	
	<!-- <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={javaScriptContent} /> -->

	<Card>
        <Content>
            <h6 id="arrow">Arrow notation</h6>
            <p>
				Functions can be declared using the arrow notation as follows
                <Highlight language={javascript} 
                code={`//function with no parameter and no return value
let noParamNoReturn = () => {
    //execute my code
}
//function with no parameter and a return
let noParamReturn = () => {
    //execute my code
    return someValue;
}
//function with a parameter and no return
let paramNoReturn = (a) => {
    //use a in the code
}
//function with a parameter and return
let paramReturn = (a) => {
    //use a in the code
    return someValue;
}
//function with a default value
let defaultValue = (a = 1) => {
    //if a is not specified use a = 1
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
        </Content>
    </Card>
	<h4>Questions</h4>
	<Card>
		<Content>
			<ol>
				<li>
					Write a JavaScript function to calculate the area of a rectangle given its length and width.
				</li>
				<li>
					Create a function that takes an array of numbers as input and returns the sum of all the numbers.
				</li>
				<li>
					Implement a function that checks if a given number is a palindrome (reads the same forwards and backwards).
				</li>
				<li>
					Write a JavaScript function to find the maximum and minimum elements in an array of numbers.
				</li>
				<li>
					Develop a function that takes a string as input and returns the reverse of the string.
				</li>
				<li>
					Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.
				</li>
				<li>
					Implement a function that takes two numbers as input and returns the greatest common divisor (GCD).
				</li>
				<li>
					Write a JavaScript function to output the reverse of a string.
				</li>
				<li>
					Create a function that takes an array of integers and returns a new array with only the unique values.
				</li>
				<li>
					Develop a function that takes a sentence as input and returns the number of words in the sentence.
				</li>
			</ol>
		</Content>
	</Card>
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
	ol li::marker {
        font-size: 1.2em;
        color: red;
        font-weight: bold;
    }
    ol li {
        padding: 0.5em 0;
    }
</style>
