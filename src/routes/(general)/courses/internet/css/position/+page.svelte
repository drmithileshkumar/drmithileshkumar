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
    $currentPath = "Position";
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
    <div class="circle zero">Zero</div>
    <div class="circle one">One</div>
    <div class="stickyDiv">Sticky guy</div>
    <div class="circle two">
        <div class="circle inner1">
            <div class="circle inner2">
                two
            </div>
        </div>
    </div>
    <div class="circle three">Three</div>
    <div class="circle four">Four</div>
</section>`
    let cssContentPosition = `.section { position: relative; }
.circle { border: 2px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.zero {
    width: 100px;
    height: 100px;
}
.one {
    width: 100px;
    height: 100px;
}
.two {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 150px;
    left: 50%;
}
.inner1 {
    width: 90px;
    height: 90px;
}
.inner2 {
    width: 80px;
    height: 80px;
}
.three {
    width: 100px;
    height: 100px;
}
.four {
    width: 100px;
    height: 100px;
}
.stickyDiv {
    position: sticky;
    top: 0px;
    left: 0px;
    background: red;
    padding: 10px;
    margin: 10px;
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
        Position
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#static">Static</a></li>
                <li><a href="#relative">Relative</a></li>
                <li><a href="#absolute">Absolute</a></li>
                <li><a href="#fixed">Fixed</a></li>
                <li><a href="#sticky">Sticky</li>
            </ol>
            <p>The <code>position</code> property sets how an element is positioned in a document. The <code>top, right, bottom,</code> and <code>left</code> properties determine the final location of positioned elements.</p>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="static">Static</h6>
            <p>
                The <code>position</code> of an element can be set to <code>static</code>.
                <Highlight language={css} 
                code={`section { position: static; }`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, <code>section</code> is positioned according to the normal flow of the document. The <code>top, bottom, left, z-index</code> propertiecs have no effect.
                <Highlight language={xml} 
                code={`<section class="blue">
    <p>I am inside a static section.</p>
</section`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="relative">Relative</h6>
            <p>
                The <code>position</code> of an element can be set to <code>relative</code>.
                <Highlight language={css} 
                code={`.relative { 
    position: relative; 
    top: 30px;
    left: 40px;
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>p</code> elements with class <code>relative</code> is first placed according to the normal order and then shifted 30px from top and 40px from left.
                <Highlight language={xml} 
                code={`<section>
    <p>I have static position.</p>
    <p class="relative">I have relative position.</p>
    <p>I have static position</p>
</section`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="absolute">Absolute</h6>
            <p>
                The <code>position</code> of an element can be set to <code>absolute</code>.
                <Highlight language={css} 
                code={`section { position: relative; }
.absolute { 
    position: absolute; 
    top: 30px;
    left: 40px;
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>p</code> elements with class <code>absolute</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of <code>top, right, bottom, left</code>.
                <Highlight language={xml} 
                code={`<section>
    <p>I have static position.</p>
    <p class="absolute">I have absolute position.</p>
    <p>I have static position</p>
</section`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="fixed">Fixed</h6>
            <p>
                The <code>position</code> of an element can be set to <code>fixed</code>.
                <Highlight language={css} 
                code={`section { position: relative; }
.fixed { 
    position: fixed; 
    top: 30px;
    left: 40px;
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>p</code> elements with class <code>fixed</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to viewport. Its final position is determined by the values of <code>top, right, bottom, left</code>.
                <Highlight language={xml} 
                code={`<section>
    <p>I have static position.</p>
    <p class="fixed">I have fixed position.</p>
    <p>I have static position</p>
</section`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="sticky">Sticky</h6>
            <p>
                The <code>position</code> of an element can be set to <code>sticky</code>.
                <Highlight language={css} 
                code={`section { position: relative; }
.sticky { 
    position: sticky; 
    top: 30px;
    left: 40px;
}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>p</code> elements with class <code>sticky</code> is positioned according to the normal document flow, and then offset relative to its nearest scrolling ancestor and containing block. Its final position is determined by the values of <code>top, right, bottom, left</code>.
                <Highlight language={xml} 
                code={`<section>
    <p>I have static position.</p>
    <p class="sticky">I have sticky position.</p>
    <p>I have static position</p>
</section`} 
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
            <div class="question">Create <code>sticky</code> titles to sections in your resume, college and hometown pages.</div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">Create the following pattern.
                <section style="position: relative;border: 1px solid; padding: 1em;margin: 1em;height: 200px;">
                    <div style="position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:50%;top:20%;"></div>
                    <div style="position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:45.25%;top:41%;"></div>
                    <div style="position: absolute; border: 2px solid teal;width:50px; height:50px;border-radius:50%;left:54.75%;top:41%;"></div>
                </section>
            </div>
        </Content>
    </Card>
</article>
