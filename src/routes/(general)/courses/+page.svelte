<script>
    // @ts-nocheck
        import Message from '$lib/ui/Message.svelte';
        import Link from '$lib/ui/Link.svelte';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        import { currentPath } from "$lib/stores";
        import { darkMode } from "$lib/stores"
        $currentPath = "Courses";
        $darkMode = false;
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
        <Link href={`/courses/internet`}>Internet Technologies</Link>
        <Link href={`/courses/internetlab`}>Internet Technologies Lab</Link>
        <br>
        <h3>Quantum Computation</h3>
        <Link href={`/courses/linearalgebra`}>Linear Algebra</Link>
        <Link href={`/courses/quantummechanics`}>Quantum Mechanics</Link>
        <Link href={`/courses/circuits`}>Quantum Circuits</Link>
        <Link href={`/courses/quantumalgorithms`}>Quantum Algorithms</Link>
        <Link href={`/courses/quantumcomputers`}>Quantum Computers</Link>
        <Link href={`/courses/quantuminformation1`}>Quantum Information 1</Link>
        <Link href={`/courses/qec`}>Quantum Error Correction</Link>
        <Link href={`/courses/quantuminformation2`}>Quantum Information 2</Link>
        <Link href={`/courses/quantumcryptography`}>Quantum Cryptography</Link>
        <Link href={`/courses/quantumcommunication`}>Quantum Communication</Link>
        <Link href={`/courses/quantumml`}>Quantum Machine Learning</Link>
    </article>