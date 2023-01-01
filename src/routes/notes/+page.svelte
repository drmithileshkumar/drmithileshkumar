<script>
// @ts-nocheck
    import Message from '$lib/ui/Message.svelte';
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
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
    <!-- <Message>
        <p>Students around <strong>Dharamshala, HP</strong> can contact at 8235463666 or 8797081308 for <em>offline</em> classes. </p>
        <p>
            Students can join at any time as teaching is personalized according to understading of the student.
        </p>
    </Message> -->
    <Link href='/notes/conic'>Conic Section and Circle</Link>
    <br>
</article>