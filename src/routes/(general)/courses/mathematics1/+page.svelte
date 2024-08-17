<script lang="ts">
    // @ts-nocheck
    import { goto } from '$app/navigation';
    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Textfield from '@smui/textfield';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import DataTable, {Head, Row, Cell, Body} from '@smui/data-table';
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/mathematics1/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
	import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    import Tab, { Label } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import List, {
        Item,
        Graphic,
        Separator,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    let studentID;
    let tabs = ['Contents', 'Assignments', 'Details'];
    let active = "Contents";
    const register = async () => {
        if(!$page.data.user) {
            alert("Please login or sign up first!")
            return;
        }
        let res = await fetch(`/api/${$page.data.user.publicID}/register`, {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify({studentID: studentID, courseID: '22CA2402', session: '2023-2024'})
        })
        if(!res.ok) {
            alert('Something went wrong.')
            return;
        }
        alert('Registered');
    }
    $navList = contents;
    $currentPath = "Mathematics I";
    $darkMode = false;
    // export let data;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    const courseID = '24CA1101';
    let assignments = [];
    const getAssignments = async () => {
        //fetch assignments
        if(!$page.data.user) {
            alert('Please log in or sign up first.');
            return;
        }
        let res = await fetch(`/api/${$page.data.user.publicID}/assignments?courseID=${courseID}`);
        if(!res.ok) {
            alert('Failed to load assignments')
            return;
        }
        assignments = await res.json();
    }
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
    /* h5 {
        font-size: 1.1em;
    } */
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
<!-- <svelte:head>
    <title>Mathematics I</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics1" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head> -->
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Mathematics I  
    </h4>
    <Card>
        <TabBar {tabs} let:tab bind:active>
            <Tab {tab} on:click={() => {}}>
                <Label>{tab}</Label>
            </Tab>
        </TabBar>
    </Card>
    {#if active === 'Contents'}
        <Card>
            <Content>
                <h6>Course Objectives (24CA1101)</h6>
                <p>This course aims to train students to think mathematically and apply logical
                    reasoning to problem solving.</p>
            </Content>
            <Actions>
                <Textfield required variant="outlined" bind:value={studentID} label="Student ID" style="width:50%;" input$emptyValueUndefined />
                <Button on:click={register}>Register</Button>
            </Actions>
        </Card>
        <h5>Contents</h5>
        <Card style="background-color: rgba(0, 100, 100, 0.1">
            <NavList name="{$navList[0].name}" url="{$navList[0].url}" topics={$navList[0].topics} expanded />
        </Card>
    {:else if active === 'Assignments'}
        <h5>Assignments</h5>
        <Button on:click={getAssignments}><Label>Load Assignments</Label></Button>
        <Card>
            <Content>
                {#each assignments as assignment}
                    <div>
                        <Button on:click={() => goto(`/assignments/${assignment._id}`)}><Label>{assignment.title}</Label></Button>
                    </div>
                {/each}
                <!-- <List>
                    {#each data.assignments as assignment}

                        <Item on:SMUI:action={() => goto(`/courses/mathematics1/${assignment._id}`)}>
                            <Graphic class="material-icons">local_library</Graphic>
                            <Text>{assignment.title}</Text>
                        </Item>
                    {/each}
                </List> -->
            </Content>
        </Card>
    {:else if active === 'Details'}
        <Card>
            <Content>
                <h6>Course Outcomes</h6>
                <p>At the end of the course student will be able to</p>
                <ol>
                    <li>develop mathematical thinking</li>
                    <li>model problems in terms of sets, functions and graphs</li>
                    <li>understand the basics of probability and statistics</li>
                    <li>understand basic calculus</li>
                </ol>
            </Content>
        </Card>
        <Card>
            <Content>
                <h6>A brief overview of the course</h6>
                <p>This course aims to equip students with the skills and knowledge required to use mathematics to solve algorithmic problems. This courses forms the basis of many advanced topics needed to master various fields in computer science like analysing data, designing advanced algorithms and machine learning algorithms.</p>
            </Content>
        </Card>
        <Card>
            <Content>
                <h6>Textbook and references</h6>
                <ol>
                    <li>Kenneth H. Rosen: Discrete Mathematics and its Applications, 6th Edition, McGraw Hill, 2007.</li>
                    <li>Study material at https://drmithileshkumar.com/courses/mathematics1</li>
                </ol>
            </Content>
        </Card>
        <Card>
            <Content>
                <h6>Timetable</h6>
                <strong>Room</strong>: TBD
                <ol>
                    <li><strong>Monday</strong>: 9:45-10:45</li>
                    <li><strong>Tuesday</strong>: 2:45-4:45</li>
                    <li><strong>Wednesday</strong>: 8:45-9:45</li>
                    <li><strong>Friday</strong>: 12:00-1:00</li>
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
    {/if}
</article>
