<script lang="ts">
    // @ts-nocheck
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/internetlab/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
    import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    // console.log($page.url)
    let pathComponents = $page.url.pathname.split('/');
    let pathUrls = pathComponents.map((u, index) => {
        let path = $page.url.origin;
        for(let i = 0; i <= index; i++) {
            path += pathComponents[i] + '/';
        }
        return path;
    })
    $navList = contents;
    $currentPath = "Internet Technologies Lab";
    $darkMode = false;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    
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
        color: rgba(0, 150, 200, 1);
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
    <title>Internet Technologies Lab</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internetlab" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Internet Technologies Lab
    </h4>
    <h5>Contents</h5>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <NavList name="{$navList[0].name}" url="{$navList[0].url}" topics={$navList[0].topics} expanded />
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Tasks</h6>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Week</Cell>
                        <Cell>Task</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>1</Cell>
                        <Cell style="white-space: normal;">
                            Experiment with basic HTML tags
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>2</Cell>
                        <Cell style="white-space: normal;">
                            Create HTML page for resume
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>3</Cell>
                        <Cell style="white-space: normal;">
                            Create HTML page of College website
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>4</Cell>
                        <Cell style="white-space: normal;">
                            Link CSS to HTML, Use Grid Layout for resume and college page
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>5</Cell>
                        <Cell style="white-space: normal;">
                            Use Grid Layout, Background Color, Border, Center elements using flex, use advanced CSS selectors, Home town page
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>6</Cell>
                        <Cell style="white-space: normal;">
                            Use CSS to create custom components, experiment with transforms and transitions
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>7</Cell>
                        <Cell style="white-space: normal;">
                            Basic javascript code, event handlers
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>8</Cell>
                        <Cell style="white-space: normal;">
                            Javascript calculator
                        </Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
</article>
