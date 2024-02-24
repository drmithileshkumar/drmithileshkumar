<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import css from "svelte-highlight/languages/css";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    
    
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import DataTable, {Body, Head, Row, Cell} from '@smui/data-table';
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/internet/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Layout";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    let code1=`<!--Inline CSS-->
<p style="color: tomato;">I'm tomato</p>`
    let code2=`<head>
    <!---CSS from external file-->
    <link rel="stylesheet" href="/app.css"> 
    <!--Document level CSS-->
    <style>
    /* set text color of p elements to tomato */
        p {
            color: tomato;
        }
    /* ignore *{} BUG */
    </style>
</head>`
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
        Layout
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h6>Topics</h6>
            <ol>
                <li><a href="#display">Display</a></li>
                <li><a href="#flex">Flex</a></li>
                <li><a href="#grid">Grid</a></li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="display">Display</h6>
            <p>
                The <code>display</code> property sets an element's inner and outer display properties.
            </p>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Propert value</Cell>
                        <Cell>Description</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell><code>block</code></Cell>
                        <Cell style="white-space:normal;">line breaks before and after the element</Cell>
                    </Row>
                    <Row>
                        <Cell><code>inline</code></Cell>
                        <Cell style="white-space:normal;">keeps the element in the same line</Cell>
                    </Row>
                    <Row>
                        <Cell><code>none</code></Cell>
                        <Cell style="white-space:normal;">removes the element from the DOM</Cell>
                    </Row>
                    <Row>
                        <Cell><code>flex</code></Cell>
                        <Cell style="white-space:normal;">The element behaves like a block-level element and lays out its content according to the flexbox model.</Cell>
                    </Row>
                    <Row>
                        <Cell><code>grid</code></Cell>
                        <Cell style="white-space:normal;">The element behaves like a block-level element and lays out its content according to the grid model.</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="flex">The flexbox model</h6>
            <p>
                We can set <code>display: flex;</code> to use flexbox model for layouting items inside the element. The items are placed automatically in one dimension (row-wise or column-wise) and items <em>adjust</em> their size depending on the content.
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
                        <Cell><code>flex-direction</code></Cell>
                        <Cell style="white-space: normal;"><code>row, column, row-reverse, column-reverse</code></Cell>
                        <Cell style="white-space: normal;">arranges items according to the value</Cell>
                    </Row>
                    <Row>
                        <Cell><code>flex-wrap</code></Cell>
                        <Cell style="white-space: normal;"><code>wrap, nowrap, wrap-reverse</code></Cell>
                        <Cell style="white-space: normal;">wraps the items depending on available width and value</Cell>
                    </Row>
                    <Row>
                        <Cell><code>row-gap</code></Cell>
                        <Cell style="white-space: normal;">number</Cell>
                        <Cell style="white-space: normal;">set the row gap between items</Cell>
                    </Row>
                    <Row>
                        <Cell><code>column-gap</code></Cell>
                        <Cell style="white-space: normal;">number</Cell>
                        <Cell style="white-space: normal;">set the column gap between items</Cell>
                    </Row>
                    <Row>
                        <Cell><code>gap</code></Cell>
                        <Cell style="white-space: normal;">number(s)</Cell>
                        <Cell style="white-space: normal;">sets row (and) column gap between items</Cell>
                    </Row>
                    
                    <Row>
                        <Cell><code>align-items</code></Cell>
                        <Cell style="white-space: normal;"><code>center, start, end, stretch</code></Cell>
                        <Cell style="white-space: normal;">aligns items according cross-axis</Cell>
                    </Row>
                    <Row>
                        <Cell><code>justify-content</code></Cell>
                        <Cell style="white-space: normal;"><code>center, start, end, space-between, space-around, space-evenly</code></Cell>
                        <Cell style="white-space: normal;">control space between items along the main-axis</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="grid">The grid model</h6>
            <p>
                We can set <code>display: grid;</code> to use grid model for layouting items inside the element. Unlike <code>flex</code> model, the items are placed in a two-dimensional grid system defined using <code>grid-template-columns</code>,<code>grid-template-rows</code> and <code>grid-template-areas</code>.
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
                        <Cell><code>grid-template-columns</code></Cell>
                        <Cell style="white-space: normal;">a list of length or fraction units (<code>fr</code>)</Cell>
                        <Cell style="white-space: normal;">creates as many columns of the given length as in the list.</Cell>
                    </Row>
                    <Row>
                        <Cell><code>grid-template-rows</code></Cell>
                        <Cell style="white-space: normal;">a list of length or fraction units (<code>fr</code>)</Cell>
                        <Cell style="white-space: normal;">creates as many rows of the given length as in the list.</Cell>
                    </Row>
                    <Row>
                        <Cell><code>grid-template-areas</code></Cell>
                        <Cell style="white-space: normal;">a string of names of areas of items</Cell>
                        <Cell style="white-space: normal;">places items according to the structure defined by the string</Cell>
                    </Row>
                    <Row>
                        <Cell><code>grid-area</code></Cell>
                        <Cell style="white-space: normal;">name</Cell>
                        <Cell style="white-space: normal;">it is set on the items of the grid. These names are parts of the string in <code>grid-template-areas</code></Cell>
                    </Row>
                    <Row>
                        <Cell><code>column-gap</code></Cell>
                        <Cell style="white-space: normal;">number</Cell>
                        <Cell style="white-space: normal;">set the column gap between items</Cell>
                    </Row>
                    <Row>
                        <Cell><code>gap</code></Cell>
                        <Cell style="white-space: normal;">number(s)</Cell>
                        <Cell style="white-space: normal;">sets row (and) column gap between items</Cell>
                    </Row>
                    
                    <Row>
                        <Cell><code>align-items</code></Cell>
                        <Cell style="white-space: normal;"><code>center, start, end, stretch</code></Cell>
                        <Cell style="white-space: normal;">aligns items according to cross-axis</Cell>
                    </Row>
                    <Row>
                        <Cell><code>justify-content</code></Cell>
                        <Cell style="white-space: normal;"><code>center, start, end, space-between, space-around, space-evenly</code></Cell>
                        <Cell style="white-space: normal;">control space between items along the main-axis</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <!-- <Card>
        <Content>
            <Highlight language={xml} code={code2} let:highlighted>
                <LineNumbers {highlighted} wrapLines/>
            </Highlight>
        </Content>
    </Card> -->
    
</article>
