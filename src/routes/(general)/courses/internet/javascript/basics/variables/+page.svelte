<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import DataTable, {Head, Body, Row, Cell} from "@smui/data-table"
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
    $currentPath = "Variables";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let names = `//variable names
sum, _sum, $sum, _sum5, Sum, _Sum`
    let constant = `//contant variable
const sum = 0;
sum = 1; //error`
    let variable = `//var variable
var sum; // assigned undefined
sum = 1;`
    let letVar = `//let variable
let sum; // assigned undefined
sum = 1;`
    let number = `//numbers
let sum = 1; // integer
let mean = 1.4; // float`
    let string = `//strings
let str1 = "Hello";
let str2 = 'World';`
    let boolean = `//boolean
let isTrue = true;
let isFalse = false;`
    let arrays = `//arrays
let arr1 = [0, 1, 1.432, "Text", true];
console.log(arr1[2])//prints 1.432;
let arr2 = new Array(2, "javascript", true);
let n = arr2.length; // n is 3`
    let objects = `//objects
let obj = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(obj.name)`
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
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/variables" />
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
        Variables
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#names">Names</a></li>
                <li><a href="#const"><code>const</code></a></li>
                <li><a href="#var"><code>var</code></a></li>
                <li><a href="#let"><code>let</code></a></li>
                <li><a href="#number">Numbers</a></li>
                <li><a href="#boolean">Boolean</a></li>
                <li><a href="#strings">Strings</a></li>
                <li><a href="#arrays">Arrays</a></li>
                <li><a href="#objects">Objects</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="names">Names</h6>
            <p>The names of variables are called <strong>identifiers</strong>.</p>
            <p>A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).</p>
            <Highlight language={javascript} code={names} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="const"><code>const</code></h6>
            <p>Variables are declared using keywords <code>const, let, var</code>.</p>
            <p>When a variable is declared constant, its value can not be changed, hence its value must be assigned at the time of declaration.</p>
            
            <Highlight language={javascript} code={constant} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="var"><code>var</code></h6>
            <p>
                Variables can be declared using the keyword <code>var</code>
            </p>
            <Highlight language={javascript} code={variable} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="let"><code>let</code></h6>
            <p>
                Variables can be declared using the keyword <code>let</code>
            </p>
            <Highlight language={javascript} code={letVar} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="number">Numbers</h6>
            <p>A number in javascript can be of type integer or double.</p>
            <Highlight language={javascript} code={number} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="boolean">Boolean</h6>
            <p>Boolean variables have two values <code>true</code> and <code>false</code>.</p>
            <Highlight language={javascript} code={boolean} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="strings">Strings</h6>
            <p>A string is a text inside single quotes ('), double quotes (") or backtick (`).</p>
            <Highlight language={javascript} code={string} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
            <p>Backticks allow entering multi-line text.</p>
<pre><code>
let str = `There are three ways
to declare string variables in javascript.`
</code></pre>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="arrays">Arrays</h6>
            <p>
                Arrays in javascript can take any type of data in the same list.
            </p>
            <Highlight language={javascript} code={arrays} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="objects">Objects</h6>
            <p>
                An object is a colletion of key-value pairs.
            </p>
            <Highlight language={javascript} code={objects} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
</article>
