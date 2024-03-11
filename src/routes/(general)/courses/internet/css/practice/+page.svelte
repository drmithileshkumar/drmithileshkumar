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
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/practice" />
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
    <h5>
        CSS
    </h5>
    <Card>
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[1].name}" url="{$navList[0].topics[1].url}" topics={$navList[0].topics[1].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Change the <code>color</code> of the given <code>p</code> tag to <code>red</code> using three methods of setting CSS.
                <Highlight language={xml} 
                code={`<p>Change my color.</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card>
    <Card>
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
    <Card>
        <Content>
            <div class="question">
                Write the css code that places the items at the center of the container using <code>display: flex;</code>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Write the css code that underlines the contents in 
                <Highlight language={xml} 
                code={`<p>Underline me.</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Write the css code that changes the background to black and text color to white. 
                <Highlight language={xml} 
                code={`<p>I'm different.</p>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Write the HTML and CSS code that obtains the following:
                <span style="display: inline-block; width: 100px; height: 100px; border: 1px solid red; border-radius: 50%; display: flex; align-items:center; justify-content:center;">Center</span>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Write CSS code that using <code>:nth-child()</code> to color even items to red and odd items to green.
                <Highlight language={xml} 
                code={`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>`} 
                let:highlighted>
                    <LineNumbers {highlighted} wrapLines/>
                </Highlight>
            </div>
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
