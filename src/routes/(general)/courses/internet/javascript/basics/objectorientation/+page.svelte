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
    import DataTable, {Head, Body, Row, Cell} from "@smui/data-table"
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
    $currentPath = "Object Orientation and JavaScript";
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
    </style>
</head>`
    let code3 = `selector1 {
    property1: value1;
    property2: value2;
}
selector2 {
    property3: value3;
    property4: value4;
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
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics" />
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
        Object Orientation and JavaScript
    </h4>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].topics[2].topics[0].name}" url="{$navList[0].topics[2].topics[0].url}" topics={$navList[0].topics[2].topics[0].topics} expanded={false} />
        </Content>
    </Card>
    <Card>
        <Content>
            <p>
                The official name of the language is ECMAScript.
            </p>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Java vs JavaScript</h6>
            <DataTable style="width:100%">
                <Head>
                    <Row>
                        <Cell>Java</Cell>
                        <Cell>JavaScript</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell style="white-space:normal">Java is an object-oriented programming language which is class-based.</Cell>
                        <Cell style="white-space:normal">JavaScript is also object-oriented, but not class-based. Objects and methods can be defined irrespective of any class.</Cell>
                    </Row>
                    <Row>
                        <Cell style="white-space:normal">Java is a strongly typed language. Types are all known at compile time and the operand types are checked for compatibility. </Cell>
                        <Cell style="white-space:normal">Variables in JavaScript need not be declared and are dynamically typed, making compile-time type checking impossible. </Cell>
                    </Row>
                    <Row>
                        <Cell style="white-space:normal">Objects in Java are static in the sense that their collection of data members and methods is fixed at compile time.</Cell>
                        <Cell style="white-space:normal"> JavaScript objects are dynamic: The number of data members and methods of an object can change during execution.</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Uses of JavaScript</h6>
            <p>javascript provides programming capability to both the client and server. Although all the programming load can be shifted over to the client, there are important limitations imposed on the client side. For example, file operations, database access and networking can mainly be done from the server side.</p>
            <p> Much of what JavaScript scripts typically do is event driven, meaning that the actions often are executed in response to the browser user’s actions, among them mouse clicks and form submissions. This sort of computation supports user interactions through the HTML form elements on the client display.</p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>JavaScript in HTML</h6>
            <p>
                JavaScript code can be used in two ways: 
            </p>
            <dl>
                <dt><strong>Explicit embedding</strong></dt>
                <dd>Place the code inside <code>script</code> tag inside <code>body</code> tag.</dd>
                <dt><strong>Implicit embedding</strong></dt>
                <dd>Import an external file using <code>script</code> tag inside the <code>head</code> tag.</dd>
            </dl>
        </Content>
    </Card>
</article>
