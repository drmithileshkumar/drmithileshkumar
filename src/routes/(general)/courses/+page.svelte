<script>
    // @ts-nocheck
        import Message from '$lib/ui/Message.svelte';
        import Link from '$lib/ui/Link.svelte';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        import { currentPath } from "$lib/stores";
        import { darkMode } from "$lib/stores"
        $currentPath = "Courses";
        $darkMode = true;
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
        <title>Courses</title>
        <link rel="canonical" href="https://drmithileshkumar.com/courses" />
        <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
    </svelte:head>
    <article>
        <h1>
            Courses
        </h1>
        <h3>DSU</h3>
        <Link href={`/courses/mathematics2`}>Mathematics II</Link>
        <Link href={`/courses/networktechnologies`}>Network Technologies</Link>
        <Link href={`/courses/networktechnologieslab`}>Network Technologies Lab</Link>
        <br>
    </article>