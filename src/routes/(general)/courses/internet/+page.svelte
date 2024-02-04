<script lang="ts">
    // @ts-nocheck
    import Highlight, { LineNumbers } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import xml from "svelte-highlight/languages/xml";
    import github from "svelte-highlight/styles/github";
    import githubDark from "svelte-highlight/styles/github-dark";
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents } from "../../../../lib/pages/courses/internet/content";
    $navList = contents;
    $currentPath = "Internet Technologies";
    $darkMode = true;
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
    h2, h3, h6, h5 {
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
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Internet Technologies</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/internet" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    {#if $darkMode}
        {@html githubDark}
    {:else}
        {@html github}
    {/if}
</svelte:head>
<article>
    <h4>
        Internet Technologies
    </h4>
    
    <!-- <Highlight language={xml} code={`<p>Hello World!</p>`} let:highlighted>
        <LineNumbers {highlighted} wrapLines/>
    </Highlight> -->
    <Card>
        <Content>
            <h6>Course Objectives (22CA2402)</h6>
            <p>This course aims at providing knowledge of web development, both front-end and back-end.</p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Course Outcomes</h6>
            <p>At the end of the course student will be able to</p>
            <ol>
                <li>Understand the foundations of web page design using HTML</li>
                <li>Use CSS in styling web pages</li>
                <li>Describe scripting language JavaScript</li>
                <li>Work with XML files</li>
                <li>Use node.js to serve requests from the client</li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>A brief overview of the course</h6>
            <p>This course aims to equip students with the skills and knowledge required to design, implement, and maintain web pages and web applications. It covers a range of technologies fundamental to the web, starting with the basics of HTML and XHTML for web page structure, CSS for styling, JavaScript for client-side interactivity, XML for data representation, and Node.js for server-side programming. </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Textbook and references</h6>
            <ol>
                <li>Robert W. Sebesta: Programming the World Wide Web-8th edition, Pearson Education, 2015.</li>
                <li>Study material at https://drmithileshkumar.com/courses/internet</li>
                <li>Learn node.js at https://nodejs.org/en/learn</li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Timetable</h6>
            <strong>Room</strong>: 304
            <ol>
                <li><strong>Monday</strong>: 12:00-01:00</li>
                <li><strong>Thursday</strong>: 9:45-10:45</li>
                <li><strong>Friday</strong>: 8:45-9:45</li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Assessement</h6>
            <DataTable table$aria-label="Marks breakup" style="max-width: 100%;">
                <Head>
                    <Row>
                        <Cell>Test</Cell>
                        <Cell>Marks</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>Internal Assessment 1 - (40M)</Cell>
                        <Cell>20M</Cell>
                    </Row>
                    <Row>
                        <Cell>Internal Assessment 2 - (40M)</Cell>
                        <Cell>20M</Cell>
                    </Row>
                    <Row>
                        <Cell>Assignment</Cell>
                        <Cell>5M</Cell>
                    </Row>
                    <Row>
                        <Cell>Seminar</Cell>
                        <Cell>5M</Cell>
                    </Row>
                    <Row>
                        <Cell>Reflection notes</Cell>
                        <Cell>5M</Cell>
                    </Row>
                    <Row>
                        <Cell>Attendence</Cell>
                        <Cell>5M</Cell>
                    </Row>
                    <Row>
                        <Cell>Total CIA</Cell>
                        <Cell>60M</Cell>
                    </Row>
                    <Row>
                        <Cell>SEE - (100M)</Cell>
                        <Cell>40M</Cell>
                    </Row>
                    <Row>
                        <Cell>Total - (100M)</Cell>
                        <Cell>CIA (60M) + SEE (40M)</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Attendence Requirements</h6>
            <p>A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated. </p>
            <h6>Rubrics of attendance in CIA evaluation</h6>
            <DataTable table$aria-label="Attendence Marks" style="max-width: 100%;">
                <Head>
                    <Row>
                        <Cell>Attendence (%)</Cell>
                        <Cell>Marks</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>95 - 100</Cell>
                        <Cell>5</Cell>
                    </Row>
                    <Row>
                        <Cell>90 - 94</Cell>
                        <Cell>4</Cell>
                    </Row>
                    <Row>
                        <Cell>85 - 89</Cell>
                        <Cell>3</Cell>
                    </Row>
                    <Row>
                        <Cell>80 - 84</Cell>
                        <Cell>2</Cell>
                    </Row>
                    <Row>
                        <Cell>75 - 79</Cell>
                        <Cell>1</Cell>
                    </Row>
                </Body>
            </DataTable>
            <p>Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Contents</h5>
            <NavList name="{$navList[0].name}" url="{$navList[0].url}" topics={$navList[0].topics} expanded />
        </Content>
    </Card>
</article>
