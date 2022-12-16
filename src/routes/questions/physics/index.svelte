<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://drmithileshkumar.com/questions/physics`
            }
        }
        return {
            props: {

            }
        }
    }
</script>
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
    a {
        text-decoration: none;
    }
    .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        flex-wrap: wrap;
    }
</style>
<svelte:head>
    <title>Physics Questions</title>
    <link rel="canonical" href="https://drmithileshkumar.com/questions/physics" />
    <meta name="description" content="Learn and practice Physics for school, IIT JEE, Olympiad" />
</svelte:head>
<article>
    <h1 style="margin-bottom:0;">Practice Problems in Physics</h1>
    <h2 style="font-size: 1.2em; font-weight: 400;color: #888; margin-top:0;">Suitable for Class XI, XII and IIT JEE and other examinations.</h2>
    <!-- <Message>
        <p>Students around <strong>Dharamshala, HP</strong> can contact at 8235463666 or 8797081308 for <em>offline</em> classes. </p>
        <p>
            Students can join at any time as teaching is personalized according to understading of the student.
        </p>
    </Message> -->
    <div class="problemlist">
        <h3>Question 1</h3>
        <a href={'/questions/physics/question1'}>
            <p>
                The dimension of stopping potential {`\\(V_0\\)`} in photoelectric effect in units of Planck's constant {`\\(h\\)`}, speed of light {`\\(c\\)`}, Gravitational constant {`\\(G\\)`} and ampere {`\\(A\\)`} is:
            </p>
            <ol class="options">
                <li> {`\\(h^2Gc^{-5}A^{-1}\\)`} </li>
                <li> {`\\(h^\\frac{1}{3}G^{\\frac{2}{3}}c^{\\frac{1}{3}}A^{-1}\\)`} </li>
                <li> {`\\(h^\\frac{2}{3}G^{\\frac{1}{3}}c^{\\frac{5}{3}}A^{-1}\\)`} </li>
                <li> {`\\(h^\\frac{-2}{3}G^{\\frac{4}{3}}c^{\\frac{-1}{3}}A^{-1}\\)`} </li>
            </ol>
        </a>
    </div>
</article>