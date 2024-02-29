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
    $currentPath = "Typography";
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
    let htmlContentFont = `<section class="container">
    <div class="cell family centerFlex">Font-family</div>
    <div class="cell size centerFlex">Font-size</div>
    <div class="cell variant centerFlex">Font-variant</div>
    <div class="cell style centerFlex">Font-style</div>
    <div class="cell weight centerFlex">Font-weight</div>
</section>`
    let cssContentFont = `.container {
    height: 200px;
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
    border: 1px solid teal;
    padding: 0.5em;
}
.family {
    font-family: Arial Helvetica Georgia sans-serif;
}
.size {
    font-size: 2em;
}
.variant {
    font-variant: small-caps;
}
.style {
    font-style: italic;
}
.weight {
    font-weight: 600;
}`
let htmlContentDecoration = `<section class="containerG">
    <div class="cell lineThrough centerFlex">line-through</div>
    <div class="cell overline centerFlex">overline</div>
    <div class="cell underline centerFlex">underline</div>
    <div class="cell none centerFlex">none</div>
</section>`
    let cssContentDecoration = `.containerG {
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
}
.lineThrough {
    text-decoration: line-through;
}
.overline {
    text-decoration: overline;
}
.underline {
    text-decoration: underline;
}
.none {
    text-decoration: none;
}`
let htmlContentSpacing = `<section class="containerG">
    <div class="cell letter centerFlex">letter-spacing</div>
    <div class="cell word centerFlex">word-spacing</div>
    <div class="cell line centerFlex">line-height</div>
    <div class="cell white centerFlex">white-space</div>
</section>`
    let cssContentSpacing = `.containerG {
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
}
.letter {
    letter-spacing: 0.5em;
}
.word {
    word-spacing: 1em;
}
.line {
    line-height: 1em;
}
.white {
    white-space: nowrap;
}`
let htmlContentAlign = `<section class="containerG">
    <div class="cell indent"><p>This is the begining of the paragraph. Other statement is appearing as it is.</p></div>
    <div class="cell align">Text align</div>
    <div class="cell">
        <img class="float" src="/favicon.png" width="50px">
        <p>Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right. Here the image is placed to the right of the text because the image has float right.</p>
    </div>
</section>`
    let cssContentAlign = `.containerG {
    box-sizing: border-box;
    height: auto;
    width: 100%;
    border: 1px solid gray;
    padding: 1em;
    display: flex;
    flex-direction: column;
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
}
.indent {
    text-indent: 5em;
}
.align {
    text-align: right;
}
.float {
    float: right;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/typography" />
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
        Typography
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#font">Font Properties</a></li>
                <li><a href="#decoration">Text Decoration</a></li>
                <li><a href="#spacing">Text Spacing</a></li>
                <li><a href="#alignment">Text Alignment</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="font">Font Properties</h6>
            <p>
                Font style in page can be changed using following CSS properties.
            </p>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Property</Cell>
                        <Cell>Value</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>font-family</code></Cell>
                        <Cell>a list of names</Cell>
                        <Cell style="white-space:normal;">browser uses the first font in the list it can. There are generic types like <code>Serif, Sans-serif, cursive, fantasy, monospace</code></Cell>
                    </Row>
                    <Row>
                        <Cell><code>font-size</code></Cell>
                        <Cell style="white-space:normal;">number</Cell>
                        <Cell style="white-space:normal;">usual units are <code>em</code> or <code>px</code></Cell>
                    </Row>
                    <Row>
                        <Cell><code>font-variant</code></Cell>
                        <Cell style="white-space:normal;"><code>normal, small-caps, petite-caps</code></Cell>
                        <Cell style="white-space:normal;">sets the font-variant to use</Cell>
                    </Row>
                    <Row>
                        <Cell><code>font-style</code></Cell>
                        <Cell style="white-space:normal;"><code>normal, italic, oblique</code></Cell>
                        <Cell style="white-space:normal;">changes font-style</Cell>
                    </Row>
                    <Row>
                        <Cell><code>font-weight</code></Cell>
                        <Cell style="white-space:normal;"><code>normal, light, lighter, bold, bolder, 100, 200, 300, 400, 500, 600, 700, 800</code></Cell>
                        <Cell style="white-space:normal;">Changes the thickness of the stroke used to draw the font</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentFont} cssContent={cssContentFont} jsContent={""} />
    <Card>
        <Content>
            <h6 id="decoration">Text Decoration</h6>
            <p>
                <code>text-decoration</code> can place decorations like underline, line-through etc.
            </p>
            <DataTable style="width: 100%">
                <Head>
                    <Row>
                        <Cell>Values</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>line-through</code></Cell>
                        <Cell style="white-space: normal;">draws line through the text</Cell>
                    </Row>
                    <Row>
                        <Cell><code>overline</code></Cell>
                        <Cell style="white-space: normal;">draws line over the text</Cell>
                    </Row>
                    <Row>
                        <Cell><code>underline</code></Cell>
                        <Cell style="white-space: normal;">draws line under the text</Cell>
                    </Row>
                    <Row>
                        <Cell><code>none</code></Cell>
                        <Cell style="white-space: normal;">removes any decoration applied to the text</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentDecoration} cssContent={cssContentDecoration} jsContent={""} />
    <Card>
        <Content>
            <h6 id="spacing">Text Spacing</h6>
            <p>
               It is possible to control space between letters, words and lines using CSS.
            </p>
            <DataTable style="width: 100%">
                <Head>
                    <Row>
                        <Cell>Property</Cell>
                        <Cell>Values</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>letter-spacing</code></Cell>
                        <Cell style="white-space: normal;"><code>normal</code> or length</Cell>
                        <Cell style="white-space: normal;">controls the amount of space between the letters in words</Cell>
                    </Row>
                    <Row>
                        <Cell><code>word-spacing</code></Cell>
                        <Cell style="white-space: normal;"><code>normal</code> or length</Cell>
                        <Cell style="white-space: normal;">controls the amount of space between words</Cell>
                    </Row>
                    <Row>
                        <Cell><code>line-height</code></Cell>
                        <Cell style="white-space: normal;"><code>normal</code> or length</Cell>
                        <Cell style="white-space: normal;">controls the amount of space between the lines</Cell>
                    </Row>
                    <Row>
                        <Cell><code>white-space</code></Cell>
                        <Cell style="white-space: normal;"><code>normal, nowrap, break-spaces</code></Cell>
                        <Cell style="white-space: normal;">decides whether line-break is there in the text.</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentSpacing} cssContent={cssContentSpacing} jsContent={""} />
    <Card>
        <Content>
            <h6 id="alignment">Text Alignment</h6>
            <p>
                Many alignment properties like indentation and placement of text can be controlled using CSS.
            </p>
            <DataTable style="width: 100%">
                <Head>
                    <Row>
                        <Cell>Property</Cell>
                        <Cell>Values</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>text-indent</code></Cell>
                        <Cell style="white-space: normal;"><code>initial</code> or length</Cell>
                        <Cell style="white-space: normal;">indent the first line of a paragraph</Cell>
                    </Row>
                    <Row>
                        <Cell><code>text-align</code></Cell>
                        <Cell style="white-space: normal;"><code>left, center, right, justify</code></Cell>
                        <Cell style="white-space: normal;">arrange text horizontally depending on the value</Cell>
                    </Row>
                    <Row>
                        <Cell><code>float</code></Cell>
                        <Cell style="white-space: normal;"><code>left, right, none</code></Cell>
                        <Cell style="white-space: normal;">used to specify that text should flow around some 
                            element, often an image or a table.</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentAlign} cssContent={cssContentAlign} jsContent={""} />
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
            <div class="question">Apply these font properties to resume.</div>
        </Content>
    </Card>
</article>
