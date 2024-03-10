<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { tileGrid } from "$lib/utils/common/tile";
    import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';
    import Button, {Label} from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Responsive Design";
    $darkMode = false;
    // tileGrid(5, 5)
    let cssLayout = [];
    let nDivs = 0;
    let gridLayout;
    let hasZero = false;
    const generateLayout = () => {
        let {grid, rectangleCount} = tileGrid(5, 5);
        hasZero = 0;
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 0) {
                    hasZero = true;
                    break;
                }
            }
        }
        cssLayout = grid;
        nDivs = rectangleCount;
        // console.log(rectangleCount, grid);
        let areas = "";
        let rows = []
        for(let i = 0; i < grid.length; i++) {
            rows.push((grid[i].map((c) => 'item' + c)).join(" "));
        }
        areas = rows.map(r => `"${r}"`).join(" ");
        // grid.map(row => `"${row.join(" ")}"`).join("\n");
        gridLayout.style.gridTemplateAreas = areas;
    }   

    onMount(() => {
        //generateLayout();
    });
    let htmlContentPosition = `<section class="container">
    <div class="option">Option 1</div>
    <div class="option">Option 2</div>
    <div class="option">Option 3</div>
    <div class="option">Option 4</div>
</section>`
    let cssContentPosition = `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
}
@media screen and (max-width: 700px) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 500px) {
    .container {
        display: grid;
        grid-template-columns: 1fr;
    }
}
.option {
    border: 1px solid;
    padding: 0.5em;
}`

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
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/position" />
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
        Responsive Design
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
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
    </Card>
    
    <Card>
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
    </Card>
    
    <Card>
        <Content>
            <h6 id="layout">Responsive layout</h6>
            <p>
                Responsive layout of a page makes sure that the page changes when the screen changes. The most used feature is changing between <code>flex</code> and <code>grid</code> using media query.
                <Highlight language={css} 
                code={`.container { 
    display: grid; 
}
@media screen and (min-width: 500px) {
    .container {
        display: flex;
    }
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="images">Responsive images</h6>
            <p>
                Images should have responsive width and height properties.
                <Highlight language={css} 
                code={`img { max-width: 100%; }
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                The above ensures that the image does not overflow its container.
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="typography">Responsive typography</h6>
            <p>
                Text can be set based on media queries.
                <Highlight language={css} 
                code={`.container { 
    h1: 4em; 
}
@media screen and (max-width: 500px) {
    .container {
        display: 1.5em;
    }
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="viewport">Viewport</h6>
            <p>
                This viewport meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.
                <Highlight language={xml} 
                code={`<meta name="viewport" content="width=device-width,initial-scale=1" />`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentPosition} cssContent={cssContentPosition} jsContent={""} />
    
    <!-- <Card>
        <Content>
            <Highlight language={xml} code={code2} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card> -->
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">Make your resume, college, and hometown pages responsive.</div>
        </Content>
    </Card>

</article>
