<script lang="ts">
    // @ts-nocheck
    import { goto } from '$app/navigation';
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
    import { contents } from "$lib/pages/courses/mathematics2/content";
    import List, {
        Item,
        Graphic,
        Separator,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    
    $navList = contents;
    $currentPath = "Mathematics II";
    $darkMode = false;
    export let data;
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
    <h3>
        Mathematics II  
    </h3>
    <h4>Contents</h4>
    <Card>
        <NavList name="{$navList[0].name}" url="{$navList[0].url}" topics={$navList[0].topics} expanded />
    </Card>
    <h5>Assignments</h5>
    <!-- <Card>
        <Content>
            <List>
                {#each data.assignments as assignment}
                    <Item on:SMUI:action={() => goto(`/courses/mathematics2/${assignment._id}`)}>
                        <Graphic class="material-icons">local_library</Graphic>
                        <Text>{assignment.title}</Text>
                    </Item>
                {/each}
            </List>
        </Content>
    </Card> -->
</article>
