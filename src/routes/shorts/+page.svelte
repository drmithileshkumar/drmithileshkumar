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
        <link rel="canonical" href="https://drmithileshkumar.com/shorts" />
        <meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad" />
    </svelte:head>
    <article>
        <h2>Practice Mathematics</h2>
        <ul>
            <li>
                <a href="/shorts/class1">Class 1</a>
            </li>
            <li>
                <a href="/shorts/class2">Class 2</a>
            </li>
            <li>
                <a href="/shorts/class3">Class 3</a>
            </li>
            <li>
                <a href="/shorts/class4">Class 4</a>
            </li>
            <li>
                <a href="/shorts/class5">Class 5</a>
            </li>
            <li>
                <a href="/shorts/class6">Class 6</a>
            </li>
            <li>
                <a href="/shorts/class7">Class 7</a>
            </li>
            <li>
                <a href="/shorts/class8">Class 8</a>
            </li>
            <li>
                <a href="/shorts/class9">Class 9</a>
            </li>
            <li>
                <a href="/shorts/class10">Class 10</a>
            </li>
            <li>
                <a href="/shorts/class11">Class 11</a>
            </li>
            <li>
                <a href="/shorts/class12">Class 12</a>
            </li>
        </ul>
    </article>