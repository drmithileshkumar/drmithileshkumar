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
    $currentPath = "Selectors";
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
    let htmlContentSelector = `<section class="container">
    <h1>I'm a red head.</h1>
    <h2 class="blue">I'm blue subhead.</h2>
    <p class="gray blue">My class is blue, but I'm not blue.</p>
    <span class="gray">Gray span.</span>
    <p id="golden">I'm golden paragraph.</p>
    <p>Normal paragraph</p>
</section>`
    let cssContentSelector = `h1 { color: red; }
h2.blue { color: blue; }
.gray { color: gray; }
#golden { color: goldenrod; }
.container :nth-child(2n) { background: yellow; }`

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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/selectors" />
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
        Selectors
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#simple">Simple Selectors</a></li>
                <li><a href="#class">Class Selectors</a></li>
                <li><a href="#generic">Generic Selectors</a></li>
                <li><a href="#id"><code>id</code> Selectors</a></li>
                <li><a href="#contextual">Contextual Selectors</a></li>
                <li><a href="#pseudo">Pseudo Classes</a></li>
                <li><a href="#universal">The Universal Selector</a></li>
            </ol>
            <p>A selector specifies the elements to which the style information applies. We have seen a form of selectors in previous chapters which uses <code>class</code> names. In this chapter, we'll see many other types of selectors.</p>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="simple">Simple Selectors</h6>
            <p>
                We can use tag name as selector.
                <Highlight language={css} code={`h1 { color: red;}`} let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                Here all <code>h1</code> elements will be colored red.
            </p>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6 id="class">Class Selectors</h6>
            <p>
                To color some of the elements differently than what has been set above, we can use <code>class</code> selectors. For example,
                <Highlight language={css} 
                code={`h1 { color: red; }
h1.blue { color: blue;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>h1</code> elements with <code>class="blue"</code> will be colored blue and rest will be colored red.
                <Highlight language={xml} 
                code={`<h1 class="blue">I'm blue not red.</h1>
<p class="blue">I have class blue, but I'm not blue.</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="generic">Generic Selectors</h6>
            <p>
                Generic selectors use <code>class</code> name to apply the same style to all elements irrespective of their tag. For example,
                <Highlight language={css} 
                code={`.red { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>class</code> when set to <code>"red"</code> for any tag.
                <Highlight language={xml} 
                code={`<h1 class="red">I'm h1 and red.</h1>
<p class="red">I'm p and red as well.</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="id"><code>id</code> Selectors</h6>
            <p>
                In an HTML document, any element can be assigned <code>id</code>, just like <code>class</code>. While same <code>class</code> name can be given to many elements, <code>id</code> must be unique. In CSS, the selector for <code>id</code> has the form <code>#idname</code> For example,
                <Highlight language={css} 
                code={`#red { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>class</code> when set to <code>"red"</code> for any tag.
                <Highlight language={xml} 
                code={`<h1 id="red">I'm red, because my id is red.</h1>
<p class="red">I'm not red.</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>

        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="contextual">Contextual Selectors</h6>
            <p>
                The simplest form of contextual selector is the descendant selector. Element B is a <strong>descendant</strong> of element A if it appears in the content of A. In this situation, A is the ancestor of B.  For example,
                <Highlight language={css} 
                code={`section p { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                In this case, all <code>p</code> elements inside <code>section</code> will have color red.
                <Highlight language={xml} 
                code={`<div><p>I'm not red.</p></div>
<section><p>I'm red.</p></section>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
            <p>
                An element A is a <strong>child</strong> of another element B if it is a descendant and it is nested directly in that element. The element B is called the <strong>parent</strong> of A.
                <Highlight language={xml} 
                code={`<section>
    <p>I'm child of section.</p>
    <div>
        <p>I'm not child of section.</p>
    </div>
</section>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                <code>&gt;</code> is used as a child selector.
                <Highlight language={css} 
                code={`section > p { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                This sets the first <code>p</code> element with <code>color</code> red, but not the <code>p</code> inside <code>div</code>.
            </p>
            <p>
                The <code>first-child</code> selector specifies the first child of the element to whose name it is atteched.
                <Highlight language={xml} 
                code={`<div>
    <p>I'm red.</p>
    <p>I'm not red.</p>
    <p>I'm not red either.</p>
</div>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                The following CSS only sets the first <code>p</code> to red.
                <Highlight language={css} 
                code={`div:first-child { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
            <p>
                The <code>last-child</code> selector specifies the last child of the element to whose name it is atteched.
                <Highlight language={xml} 
                code={`<div>
    <p>I'm not red.</p>
    <p>I'm not red.</p>
    <p>I'm red.</p>
</div>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                The following CSS only sets the last <code>p</code> to red.
                <Highlight language={css} 
                code={`div:last-child { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
            <p>
                The <code>:nth-child()</code> selector specifies the nth child of the element to whose name it is atteched. <code>nth-child()</code> takes a single argument that describes a pattern for matching element indices in a list of siblings. Element indices are 1-based.
                <Highlight language={xml} 
                code={`<div>
    <p>I'm red.</p>
    <p>I'm not red.</p>
    <p>I'm red.</p>
</div>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
                The following CSS only sets odd children to red.
                <Highlight language={css} 
                code={`div:nth-child(2n + 1) { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="pseudo">Pseudo Classes</h6>
            <p>
                Pseudo classes are <em>applied</em> to existing elements by specifying the effect after :. For example, The two pseudo classes for styling links are <code>link</code> and <code>visited</code>. The <code>link</code> pseudo class is used to style a link that has not been selected; <code>visited</code> is used to style a link that previously has been selected.
                <Highlight language={css} 
                code={`a:link { color: teal;}
a:visited { color: red; }`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
            <p>
                The <code>hover</code> pseudo class is used often. When mouse is over an element, <code>hover</code> effect is applied.
                <Highlight language={css} 
                code={`p:hover { color: red;}`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="universal">The Universal Selector</h6>
            <p>
                The universal selector, denoted by an asterisk (*), applies its style to all elements in a document. 
                <Highlight language={css} 
                code={`* { margin: 0; }`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentSelector} cssContent={cssContentSelector} jsContent={""} />
    
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
            <div class="question">Apply these border properties to resume.</div>
        </Content>
    </Card> -->
</article>
