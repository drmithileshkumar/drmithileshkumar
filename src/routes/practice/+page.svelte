<script>
// @ts-nocheck
    import Message from '$lib/ui/Message.svelte';
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    
    import {onMount} from 'svelte';
    import {selectedChapter, selectedGenerator} from '$lib/pages/practice/stores';
    import Practice from '$lib/utils/practiceproblem/Practice.svelte';
    import {sets} from '$lib/pages/practice/sets';
    onMount(() => {
        MathJax.typeset();
    });
    
</script>
<style>
    /* a {
        text-decoration: none;
    }
    .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        flex-wrap: wrap;
    } */
</style>
<svelte:head>
    <title>Practice Mathematics</title>
    <link rel="canonical" href="https://drmithileshkumar.com/practice" />
    <meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad" />
</svelte:head>
<article>
    <h2>Practice Mathematics</h2>
    <h3>{$selectedChapter}</h3>
    {#if $selectedGenerator}
    <Practice generateProblem={$selectedGenerator}/>
    <br>
    {/if}
</article>