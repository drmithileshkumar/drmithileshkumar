<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from 'svelte-highlight/languages/css';
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
	
    $navList = contents;
    $currentPath = "Practice Problems";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let code1=`<h1>Quantum Computation</H1>
<p>There are various disciplines in quantum computation.<p>`
    let code2=`<!DOCTYPE html>
<head>
    <body>
    </body>
</head>
<article>
    <html>
    </html>
<article>
<title>My Page</title>`
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.7em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgb(240, 85, 0);
    }
    strong {
        color: goldenrod;
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
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
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/practice" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Practice Problems
    </h4>
    <Card>
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[2].name}" url="{$navList[0].topics[2].url}" topics={$navList[0].topics[2].topics} expanded={false} />
        </Content>
    </Card>
    <h5>
        Variables
    </h5>
    <Card>
        <Content>
            <ol>
                <li>Describe the three parts of javascript.</li>
                <li>Describe two ways to include javascript inside html.</li>
                <li>When should we include javascript at the end of the body tag?</li>
                <li>Which of the following are not a valid identifier?
                    <ul>
                        <li>sum</li>
                        <li>1sum</li>
                        <li>$sum</li>
                        <li>_sum</li>
                        <li>43</li>
                        <li>total sum</li>
                    </ul>
                </li>
                <li>What are three ways in which a variable can be declared in javascript?</li>
                <li>What are values of a boolean variable?</li>
                <li>Show three ways to write a string in javascript.</li>
                <li>Show two ways to create an array in javascript.</li>
                <li>Create a javascript object to represent a mobile phone which is described by keys <code>name, brand, year, os</code> and <code>price</code>. Use appropriate values for the keys.</li>
            </ol>
        </Content>
    </Card>
    
    <!-- <Card>
        <Content>
            <div class="question">
                <p>Correct the error in the following code.</p>
                <Highlight language={xml} 
                code={`<p class="item">First item.</p>
<p id="item">Second item</p>
<p id="item">Third item</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card> -->
    <h5>Expressions</h5>
    <Card>
        <Content>
            <ol>
                <li>Write the javascript expression for the following: 
                    <ul>
                        <li>
                            sum of 12 and 13
                        </li>
                        <li>
                            difference of 13 and 12
                        </li>
                        <li>
                            product of 12 and 13
                        </li>
                        <li>
                            divide 12 by 13
                        </li>
                        <li>
                            calculate 12<sup>13</sup>
                        </li>
                    </ul></li>
                <li>
                    Calculate the value of the following expressions:
                    <ul>
                        <li>5/2 - 1</li>
                        <li>2 - 1.49</li>
                        <li>2 / 2 - 1</li>
                        <li>6 * 3 / 2 + 2</li>
                    </ul>
                </li>
                <li>
                    What is the value of the following Boolean expressions?
                    <ul>
                        <li>2 &lt; 4</li>
                        <li>2 &gt;= 2</li>
                        <li>(2 &lt; 2) || (2 == 2)</li>
                        <li>(2 &lt; 2) && (2 == 2)</li>
                        <li>0 == '0'</li>
                        <li>0 === '0'</li>
                        <li>0 != '0'</li>
                        <li>0 !== '0'</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            If <code>str1 = 'Client'</code> and <code>st2 = 'Side'</code>, what is the value of <code>str1 + str2</code> ?
                        </li>
                        <li>
                            Consider a variable <code>let sum = 12</code> and a string <code>let str = "The sum is 12"</code>. Write the string using string literal that uses <code>str</code> as a variable inside the string literal.
                        </li>
                        <li>What is the length of the string <code>"Hello World!"</code> ?</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            If <code>str1 = 'Client'</code> and <code>st2 = 'Side'</code>, what is the value of <code>str1 + str2</code> ?
                        </li>
                        <li>
                            Consider a variable <code>let sum = 12</code> and a string <code>let str = "The sum is 12"</code>. Write the string using string literal that uses <code>str</code> as a variable inside the string literal.
                        </li>
                        <li>What is the length of the string <code>"Hello World!"</code> ?</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>Write an array that contains first 10 prime numbers</li>
                        <li>Increase the 5th number on the array by 1</li>
                        <li>Remove the last element of the array</li>
                        <li>Add a new prime larger than any prime (in the given array) to the above array.</li>
                    </ul>
                </li>
                <li>
                    Given arrays <code>let arr1 = [1, 2]</code> and <code>let arr2 = [4, 7]</code>. Write a javascript code outputs <code>[1, 2, 4, 7]</code>.
                </li>
                <li>
                    What is the output of the following code?
                <Highlight language={xml} 
                code={`let myPhone = {
    name: 'iPhone',
    company: 'Apple',
    date: '2023',
    price: 100000,
    color: 'blue'
}
let { name, company } = myPhone;
console.log(name, company);
console.log(Object.keys(myPhone))`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                </li>
            </ol>
        </Content>
    </Card>
    <h4>Conditional Statements</h4>
	<Card>
		<Content>
			<ol>
				<li>
					Write a JavaScript program that checks if a number is even or odd using if-else statements.
				</li>
				<li>
					Create a function that determines whether a given year is a leap year using if-else statements.
				</li>
				<li>
					Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.
				</li>
				<li>
					Write a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its sides using if-else statements.
				</li>
				<li>
					Develop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.
				</li>
				<li>
					Implement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).
				</li>
				<li>
					Write a program that categorizes a given month into seasons (spring, summer, autumn, winter) using switch statements.
				</li>
				<li>
					Create a function that determines the discount percentage based on the total purchase amount using a switch statement (e.g., 0-100: no discount, 101-500: 10% discount, etc.).
				</li>
				<li>
					Write a JavaScript program that converts a given month number into its corresponding name (e.g., 1 for January) using a switch statement.
				</li>
				<li>
					Implement a function that calculates the area of a shape (circle, square, triangle) based on user input and using a switch statement to determine the shape type.
				</li>
			</ol>
		</Content>
	</Card>
    <h4>Loops</h4>
	<Card>
		<Content>
			<ol>
				<li>
					Write a JavaScript program that prints numbers from 1 to 10 using a for loop.
				</li>
				<li>
					Create a function that calculates the factorial of a given number using a for loop.
				</li>
				<li>
					Implement a JavaScript function to find the sum of all numbers between 1 and 100 using a while loop.
				</li>
				<li>
					Write a program that prints the multiplication table of a given number using a for loop.
				</li>
				<li>
					Develop a function that checks if a given number is prime using a for loop.
				</li>
				<li>
					Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.
				</li>
				<li>
					Implement a function to find the largest element in an array using a for loop.
				</li>
				<li>
					Write a program that counts the number of vowels in a given string using a for loop.
				</li>
				<li>
					Create a JavaScript function that calculates the sum of digits of a given number using a while loop.
				</li>
				<li>
					Implement a program that checks if a given string is a palindrome using a for loop.
				</li>
			</ol>
		</Content>
	</Card>
    <h4>Functions</h4>
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
