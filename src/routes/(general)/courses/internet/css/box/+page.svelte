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

    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import WebPractice from "$lib/pages/courses/internet/WebPractice.svelte";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
	import { blackMetal } from "svelte-highlight/styles";
    $navList = contents;
    $currentPath = "Box Model";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let marginCode = `margin: 10px; /* all sides equal margin */
margin: 10px 20px; /* 10px for top,bottom; 20px for left,right */
margin: 10px 20px 30px 40px; /* top right bottom left */`
let paddingCode = `padding: 10px; /* all sides equal padding */
padding: 10px 20px; /* 10px for top,bottom; 20px for left,right */
padding: 10px 20px 30px 40px; /* top right bottom left */`
    let htmlContentBorder=`<h1>Bordered Heading</h1>
<p>I'm a bordered paragraph.</p>`;
    let cssContentBorder=`h1 {
    border: 2px solid red;
}
p {
    border: 2px solid green;
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
        color: rgb(240, 85, 0);
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
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout" />
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
        Box Model
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#margin"><code>margin</code></a></li>
                <li><a href="#padding"><code>padding</code></a></li>
                <li><a href="#boxsizing"><code>box-sizing</code></a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                Every HTML element is laid out as a rectangle. Using <code>border</code> attribute, we can display the border around this rectangle.
            </p>
        </Content>
    </Card>
    <WebPractice htmlContent={htmlContentBorder} cssContent={cssContentBorder} jsContent={""} />
    <Card>
        <Content>
            <p>
                The gap between different elements is called <code>margin</code>. We can create gap between the content of the element and its border using <code>padding</code>.
            </p>
            <img width="300px" src="/courses/internet/css/boxmodel.svg" alt="box model">
        </Content>
    </Card>
    <Card>
        <Content>
            <h5 id="margin"><code>margin</code></h5>
            <p>
                There are four sides to an element. The margins on each side can be set individually.
            </p>
            <ul>
                <li>
                    <code>margin-top</code> : sets top margin
                    <Highlight language={css} code={`margin-top: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>margin-bottom</code> : sets bottom margin
                    <Highlight language={css} code={`margin-bottom: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>margin-left</code> : sets left margin
                    <Highlight language={css} code={`margin-left: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>margin-right</code> : sets right margin
                    <Highlight language={css} code={`margin-right: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>margin</code> : sets margin
                    <Highlight language={css} code={marginCode} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5 id="padding"><code>padding</code></h5>
            <p>
                There are four sides to an element. The paddings on each side can be set individually.
            </p>
            <ul>
                <li>
                    <code>padding-top</code> : sets top padding
                    <Highlight language={css} code={`padding-top: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>padding-bottom</code> : sets bottom padding
                    <Highlight language={css} code={`padding-bottom: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>padding-left</code> : sets left padding
                    <Highlight language={css} code={`padding-left: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>padding-right</code> : sets right padding
                    <Highlight language={css} code={`padding-right: 10px;`} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
                <li>
                    <code>padding</code> : sets padding
                    <Highlight language={css} code={paddingCode} let:highlighted>
                        <LineNumbers {highlighted} wrapLines/>
                    </Highlight>
                </li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5 id="boxsizing"><code>box-sizing</code></h5>
            <p>
                When we specify <code>width</code> and <code>height</code> of an element, it's actual width will be <code>width + paddingRight + paddingLeft + marginRight + marginLeft</code>. Similarly, the actual height will be <code>width + paddingTop + paddingBottom + marginTop + marginBottom</code>. This creates a lot of confusion.
            </p>
            <p>
                To include margins and paddings into <code>width</code> and <code>height</code> of the element, we set the property <code>box-sizing</code> to <code>border-box</code>.
            </p>
            <Highlight language={css} code={`box-sizing: border-box;`} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card>
    <!-- <Card>
        <Content>
            <Highlight language={xml} code={code2} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card> -->
    <h4>Questions</h4>
    <Card>
        <Content>
            <div class="question">
                <p>
                    Use inline CSS to apply <code>margin</code> property on <code>p</code> elements to get the following output:
                </p>
                <p style="margin-left: 1.5em;">
                    *
                </p>
                <p style="margin-left: 1em;">
                    **
                </p>
                <p style="margin-left: 0.5em;">
                    ***
                </p>
                <p style="margin-left: 0em;">
                    ****
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>
                    Use <code>border</code> and <code>padding</code> properties on a <code>span</code> element to get the following output:
                </p>
                <p>
                    <span style="margin-left:30%; border: 2px solid red; padding: 0px 0px 30px 40px;">Hello</span>
                </p>
            </div>
        </Content>
    </Card>
</article>
