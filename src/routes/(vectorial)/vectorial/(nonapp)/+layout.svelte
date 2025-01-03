<script lang="ts">
    //@ts-nocheck
    import Drawer, {
        AppContent,
        Content,
        Scrim,
        Header,
        Title,
        Subtitle,
    } from "@smui/drawer";
    import Fab from "@smui/fab";
    import { Svg } from "@smui/common";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Nav from "$lib/vectorial/components/Nav.svelte";
    import Sidebar from "$lib/vectorial/components/Sidebar.svelte";
    import TopAppBar, { Row, Section } from "@smui/top-app-bar";
    import IconButton, {Icon} from "@smui/icon-button";
    import Button, { Label } from "@smui/button";
    import List, { Item, Text } from "@smui/list";
    import { showLeft, darkMode, pageLoadState } from "$lib/vectorial/stores.js";
    import {page} from '$app/stores';
    import Analytics from "$lib/vectorial/components/Analytics.svelte";
    import { goto } from '$app/navigation';
    import {currentPath} from '$lib/vectorial/stores';
    import { onMount, onDestroy } from 'svelte';
    import LinearProgress from '@smui/linear-progress';
    let W;
    $: fixed = W < 600;
    let progress = 0;
    let closed = false;
    let timer;
    
    $: if(!$pageLoadState) {
        reset();
    } 
 
    onDestroy(() => {
        clearInterval(timer);
    });
 
    function reset() {
        progress = 0;
        closed = false;
        clearInterval(timer);
        timer = setInterval(() => {
            progress += 0.1;
            if(!$pageLoadState && progress >= 0.7) progress = 0.7;
            if ($pageLoadState || progress >= 1) {
                progress = 1;
                closed = true;
                clearInterval(timer);
            }
        }, 100);
    }
</script>
<svelte:head>
    <link
        rel="stylesheet"
        id="theme"
        href="/smui{$darkMode ? '-dark' : ''}.css"
    />
</svelte:head>
<Analytics />
<header style="position: relative;">
    <TopAppBar variant="fixed" color="secondary">
        <Row>
            <Section style="align-items:center;">
                <div class="logo">
                    <Fab on:click={() => goto("/")}>
                        <Icon>
                            <img width="40px" height="40px" style="background:white; border-radius:50%;" src="/favicon.png" alt="1" />
                        </Icon>
                    </Fab>
                </div>
                <IconButton class="material-icons" on:click={() => $showLeft = !$showLeft}>menu</IconButton>
                <span>
                    {$currentPath}
                    <!-- {#if $page.route.id === '/'}
                        AI Guru Dev
                    {:else if $page.route.id === '/home'}
                        Home
                    {:else if $page.route.id === '/settings/profile'}
                        Edit Profile
                    {:else if $page.route.id === '/auth'}
                        Authentication
                    {:else if $page.route.id === '/[publicID]'}
                        {$page.params.publicID}
                    {:else if $page.route.id === '/post/[postID]'}
                        Post
                    {:else if $page.route.id === '/[publicID]/courses'}
                        My Courses
                    {:else if $page.route.id === '/fundamentals' || $page.route.id === '/[publicID]/fundamentals'}
                        Fundamentals
                    {:else if $page.route.id === '/calculus' || $page.route.id === '/[publicID]/calculus'}
                        Calculus
                    {:else if $page.route.id === '/linearAlgebra' || $page.route.id === '/[publicID]/linearAlgebra'}
                        Linear Algebra
                    {:else if $page.route.id === '/probability' || $page.route.id === '/[publicID]/probability'}
                        Probability
                    {:else if $page.route.id === '/statistics' || $page.route.id === '/[publicID]/statistics'}
                        Statistics
                    {:else if $page.route.id === '/optimization' || $page.route.id === '/[publicID]/optimization'}
                        Optimization
                    {:else if $page.route.id === '/graph' || $page.route.id === '/[publicID]/graph'}
                        Graph theory
                    {/if} -->
                </span>
            </Section>
            <Section align="end" toolbar>
                <IconButton class="material-icons" aria-label="Search" on:click={() => goto('/search')}>search</IconButton>
                <!-- <IconButton class="material-icons" aria-label="Settings"
                    >settings</IconButton
                >
                <IconButton class="material-icons" aria-label="Cancel"
                    >close</IconButton
                > -->
                <IconButton toggle bind:pressed={$darkMode}>
                    <Icon class="material-icons" on>dark_mode</Icon>
                    <Icon class="material-icons">light_mode</Icon>
                </IconButton>
            </Section>
        </Row>
        {#key $pageLoadState}
        <LinearProgress bind:progress {closed} />
        {/key}
    </TopAppBar>
    <div class="navback"></div>
</header>

<div class="container" bind:clientWidth={W}>
    
    <Drawer variant='modal' bind:open={$showLeft}>
        <Content>
            <header class='nav'>
                <Nav />
            </header>
        </Content>
    </Drawer>
    <!-- <Scrim /> -->
    {#if fixed}
        <Scrim on:click={() => $showLeft = false}/>
    {/if}
    <AppContent>
        <main>
            <div class="center">
                <slot />
            </div>
            <div class="side">
                
                <Sidebar />
                
            </div>
        </main>
    </AppContent>
</div>

<style>
    /* .container {
        display: grid;
        grid-template-columns: 0.16fr auto;
        width: 100%;
        gap: 0.5em;
    } */
    * {
        box-sizing: border-box;
    }
    .container {
        width: 100%;
    }
    /* .logo {
        margin-left: 0.5em;
        margin-top: 0.5em;
    } */
    header {
        min-width: 100%;
        z-index: 200;
    }
    .navback {
        min-height: 4em;
    }
    .nav {
        max-width: 150px;
    }
    /* main {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        width: 100%;
        justify-items: center;
        
    } */
    main {
        display: grid;
        grid-template-columns: calc(100% - 256px) 256px;
    }
    .center {
        width: 100%;
        flex-grow: 1;
        padding: 0.5em;
    }
    .side {
        min-width: 250px;
        position: sticky;
        top: 4em;
        height: 100vh;
        overflow-y: auto;
        /* padding: 0.5em; */
    }
    @media only screen and (max-width: 600px) {
        main {
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 100%;
            flex: 1;
            min-width: 300px;
            /* overflow: hidden; */
        }
        .side {
            /* padding: 0 1em; */
            width: 100%;
            position: relative;
            height: fit-content;
        }
        .navback {
            min-height: 3.5em;
        }
    }
    
</style>
