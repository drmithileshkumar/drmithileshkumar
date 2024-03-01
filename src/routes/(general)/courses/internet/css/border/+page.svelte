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
    $currentPath = "Border";
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
    let htmlContentSyntax = `<section class="container">
    <div class="cell none centerFlex">none</div>
    <div class="cell hidden centerFlex">hidden</div>
    <div class="cell dotted centerFlex">dotted</div>
    <div class="cell dashed centerFlex">dashed</div>
    <div class="cell solid centerFlex">solid</div>
    <div class="cell double centerFlex">double</div>
    <div class="cell groove centerFlex">groove</div>
    <div class="cell ridge centerFlex">ridge</div>
    <div class="cell inset centerFlex">inset</div>
    <div class="cell outset centerFlex">outset</div>
</section>`
    let cssContentSyntax = `.container {
    box-sizing: border-box;
    height: 120px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 2px solid;
    padding: 0.5em;
}
.none {
    border: 2px none red;
}
.hidden {
    border: 2px hidden red;
}
.dotted {
    border: 2px dotted red;
}
.dashed {
    border: 2px dashed red;
}
.solid {
    border: 2px solid red;
}
.double {
    border: 2px double red;
}
.groove {
    border: 2px groove red;
}
.ridge {
    border: 2px ridge red;
}
.inset {
    border: 2px inset red;
}
.outset {
    border: 2px outset red;
}`

let htmlContentSides = `<section class="container">
    <div class="cell top centerFlex">top</div>
    <div class="cell right centerFlex">right</div>
    <div class="cell bottom centerFlex">bottom</div>
    <div class="cell left centerFlex">left</div>
</section>`
    let cssContentSides = `.container {
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1em;
    flex-wrap: wrap;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    padding: 0.5em;
}
.top {
    border-top: 2px solid red;
}
.right {
    border-right: 2px solid red;
}
.bottom {
    border-bottom: 2px solid red;
}
.left {
    border-left: 2px solid red;
}`
let htmlContentRadius = `<section class="containerG">
    <div class="cell round centerFlex">round</div>
    <div class="cell opposite  centerFlex">opposite</div>
    <div class="cell different centerFlex">different</div>
</section>`
    let cssContentRadius = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1em;
}
.centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.cell {
    border: 1px solid teal;
    padding: 0.5em;
    width: 10%;
    height: 50px;
}
.round {
    border-radius: 50%;
}
.opposite {
    border-radius: 50% 70%;
}
.different {
    border-radius: 10% 20% 30% 40%;
}
`

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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/border" />
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
        Border
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#syntax">Syntax</a></li>
                <li><a href="#sides">Sides</a></li>
                <li><a href="#radius">Radius</a></li>
            </ol>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="syntax">Syntax</h6>
            <p>
               Border around an element is described using the <code>border</code> property which follows the following syntax:
                <Highlight language={xml} code={`border = <line-width> <line-style> <color>`} let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                where <code>line-width</code> is length, <code>line-style</code> can take one of the following values: <code>none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</code>
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentSyntax} cssContent={cssContentSyntax} jsContent={""} />
    <Card>
        <Content>
            <h6 id="sides">Sides</h6>
            <p>
                Just like <code>margin</code> and <code>padding</code>, <code>border</code> has side-versions as well, namely <code>border-left, border-right, border-top, border-bottom</code>.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentSides} cssContent={cssContentSides} jsContent={""} />
    <Card>
        <Content>
            <h6 id="radius">Radius</h6>
            <p>
               The <code>border-radius</code> property sets radius at the corners. The corners can be referenced using <code>border-bottom-left-radius, border-bottom-right-radius, border-top-left-radius, border-top-right-radius</code>. An ellipse is used to construct the curve which has two radii.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentRadius} cssContent={cssContentRadius} jsContent={""} />
    
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
            <div class="question">Apply these border properties to resume.</div>
        </Content>
    </Card>
</article>
