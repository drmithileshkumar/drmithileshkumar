<script>
// @ts-nocheck
    import Message from '$lib/ui/Message.svelte';
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import Sets from '$lib/pages/notes/summary/Sets.svelte';
    import RelationsAndFunctions from '$lib/pages/notes/summary/RelationsAndFunctions.svelte';
    import TrigonometricFunctions from '$lib/pages/notes/summary/TrigonometricFunctions.svelte';
    import Induction from '$lib/pages/notes/summary/Induction.svelte';
    import Complex from '$lib/pages/notes/summary/Complex.svelte';
    import Permutation from '$lib/pages/notes/summary/Permutation.svelte';
    import Binomial from '$lib/pages/notes/summary/Binomial.svelte';
    import Sequences from '$lib/pages/notes/summary/Sequences.svelte';
    import StraightLine from '$lib/pages/notes/summary/StraightLine.svelte';
    import Conic from '$lib/pages/notes/summary/Conic.svelte';
    import ThreeD from '$lib/pages/notes/summary/ThreeD.svelte';
    import LimitDerivative from '$lib/pages/notes/summary/LimitDerivative.svelte';
    import Probability from '$lib/pages/notes/summary/Probability.svelte';
    import Inverse from '$lib/pages/notes/summary/Inverse.svelte';
    import Matrices from '$lib/pages/notes/summary/Matrices.svelte';
    import Determinants from '$lib/pages/notes/summary/Determinants.svelte';
    import Continuity from '$lib/pages/notes/summary/Continuity.svelte';
    import Integrals from '$lib/pages/notes/summary/Integrals.svelte';
    import Vectors from '$lib/pages/notes/summary/Vectors.svelte';
    import {onMount} from 'svelte';
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
    <title>Questions</title>
    <link rel="canonical" href="https://drmithileshkumar.com/iit" />
    <meta name="description" content="Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad" />
</svelte:head>
<article>
    <h1>
        Study notes
    </h1>
    <Sets />
    <RelationsAndFunctions />
    <TrigonometricFunctions />
    <Inverse />
    <Induction />
    <Complex />
    <Permutation />
    <Binomial />
    <Sequences />
    <StraightLine />
    <Conic />
    <Vectors />
    <ThreeD />
    <LimitDerivative />
    <Probability />
    <Matrices />
    <Determinants />
    <Continuity />
    <Integrals />
    <Link href='/notes/conic'>Conic Section and Circle</Link>
    
    <br>
</article>