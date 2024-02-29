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
    $currentPath = "Colors";
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
    let htmlContentForeground = `<section class="container">
    <div class="cell red centerFlex">Red</div>
    <div class="cell rgb centerFlex">RGB</div>
    <div class="cell rgba centerFlex">RGBA</div>
</section>`
    let cssContentForeground = `.container {
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
    border: 2px solid;
    padding: 0.5em;
}
.red {
    color: red;
}
.rgb {
    color: rgb(150, 50, 0);
}
.rgba {
    color: rgba(150, 50, 0, 0.1);
}`
let htmlContentBackground = `<section class="container">
    <div class="cell red centerFlex">Red</div>
    <div class="cell rgb centerFlex">RGB</div>
    <div class="cell rgba centerFlex">RGBA</div>
</section>`
    let cssContentBackground = `.container {
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
    border: 2px solid;
    padding: 0.5em;
}
.red {
    color: red;
    background-color: yellow;
}
.rgb {
    color: rgb(150, 50, 0);
    background-color: rgb(0, 150, 50);
}
.rgba {
    color: rgba(150, 50, 0, 0.2);
    background-color: rgba(150, 50, 0, 0.1);
}`
let htmlContentLinear = `<section class="containerG">
    <div class="cell two centerFlex"></div>
    <div class="cell more  centerFlex"></div>
    <div class="cell angle centerFlex"></div>
    <div class="cell multiple centerFlex"></div>
</section>`
    let cssContentLinear = `.containerG {
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
.two {
    background: linear-gradient(red, green);
}
.more {
    background: linear-gradient(red, green, blue);
}
.angle {
    background: linear-gradient(45deg, red, green, blue);
}
.multiple {
    background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), linear-gradient(135deg, rgba(150, 120, 0, 0.5), blue);
}`
let htmlContentRadial = `<section class="containerG">
    <div class="cell two centerFlex"></div>
    <div class="cell more  centerFlex"></div>
    <div class="cell origin centerFlex"></div>
    <div class="cell multiple centerFlex"></div>
</section>`
    let cssContentRadial = `.containerG {
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
.two {
    background: radial-gradient(red, green);
}
.more {
    background: radial-gradient(red, green, blue);
}
.origin {
    background: radial-gradient(circle at 100%, red, green, blue);
}
.multiple {
    background: radial-gradient(circle at 0%, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)), radial-gradient(circle at 100%, rgba(150, 120, 0, 0.5), blue);
}`
let htmlContentBox = `<section class="containerG">
    <div class="cell offset centerFlex">Offset</div>
    <div class="cell blur  centerFlex">Blur</div>
    <div class="cell blurSpread centerFlex">Blur Spread</div>
    <div class="cell multiple centerFlex">Multiple</div>
</section>`
let cssContentBox = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    gap: 1.5em;
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
.offset {
    box-shadow: 3px 2px gray;
    text-shadow: 3px 2px gray;
}
.blur {
    box-shadow: 3px 2px 2px gray;
    text-shadow: 3px 2px 2px gray;
}
.blurSpread {
    box-shadow: 3px 2px 2px 1px gray;
    text-shadow: 3px 2px 2px gray;
}
.multiple {
    box-shadow: 5px 5px 3px gray, -5px -5px 3px red;
    text-shadow: 5px 5px 3px gray, -5px -5px 3px red;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/colors" />
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
        Colors
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#foreground">Foreground Color</a></li>
                <li><a href="#background">Background Color</a></li>
                <li><a href="#linear">Linear gradient</a></li>
                <li><a href="#radial">Radial gradient</a></li>
                <li><a href="#shadow">Shadows</a></li>
            </ol>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="foreground">Foreground Color</h6>
            <p>
                Foreground is the color which is used to render the element. It is specified using <code>color</code> property. There are various named colors like red, green, blue, teal etc. Colors can be specified using other schemes like RGB, RGBA, HS, CMYK. In this chapter we'll focus mostly on RGBA.
            </p>
            <p>
                RGBA stands for Red, Green, Blue, Alpha where Alpha controls the opacity. When we set color to an element, then its border and other children inherit this property.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentForeground} cssContent={cssContentForeground} jsContent={""} />
    <Card>
        <Content>
            <h6 id="background">Background Color</h6>
            <p>
                The <code>background-color</code> or <code>background</code> property is used to set the background color of an element.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentBackground} cssContent={cssContentBackground} jsContent={""} />
    <Card>
        <Content>
            <h6 id="linear">Linear gradient</h6>
            <p>
               The <code>background</code> property can be set a <code>linear-gradient()</code> which creates an image that shows a transition between a list of colors along straight line.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentLinear} cssContent={cssContentLinear} jsContent={""} />
    <Card>
        <Content>
            <h6 id="radial">Radial gradient</h6>
            <p>
                The <code>background</code> property can be set a <code>radial-gradient()</code> which creates an image that shows a transition between a list of colors radiating from an origin with a shape circle or ellipse.
             </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentRadial} cssContent={cssContentRadial} jsContent={""} />
    <Card>
        <Content>
            <h6 id="shadow">Shadows</h6>
            <p>
                The <code>box-shadow</code> property is used to set shadows around the element's frame. Multiple shadows can be set separated by commas. A box shadow is described by X and Y offsets, blur and spread radius, and color. 
            </p>
            <p>
                To apply shadow to text, use <code>text-shadow</code> instead of <code>box-shadow</code>, but the same syntax. The only difference is that <code>text-shadow</code> does not have the <code>spread</code> part.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentBox} cssContent={cssContentBox} jsContent={""} />
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
            <div class="question">Apply these color properties to resume.</div>
        </Content>
    </Card>
</article>
