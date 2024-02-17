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
    
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents, contentNav } from "$lib/pages/courses/mathematics2/content";
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
    $currentPath = "Mathematics II";
    $darkMode = false;
    export let data;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    const courseID = '22CA1201';
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
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Mathematics II  
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
                <h6>Course Objectives (22CA1201)</h6>
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

                        <Item on:SMUI:action={() => goto(`/courses/mathematics2/${assignment._id}`)}>
                            <Graphic class="material-icons">local_library</Graphic>
                            <Text>{assignment.title}</Text>
                        </Item>
                    {/each}
                </List> -->
            </Content>
        </Card>
    {/if}
</article>
