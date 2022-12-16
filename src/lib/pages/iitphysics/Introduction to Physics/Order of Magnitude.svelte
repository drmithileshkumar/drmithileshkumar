<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'webdut.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://webdut.com${url.pathname}`
            }
        }
        return {
            props: {

            }
        }
    }
</script>
<script id="MathJax-script">
// @ts-nocheck
    import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/iitphysics/stores';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    $selectedChapter = 'Introduction to Physics';
    $selectedSection = 'Order of Magnitude';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    p {
        text-indent: 2em;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What are the sizes of objects in our universe?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>Although we use mathematics to express physical laws precisely. At the end of the day, we understand things by getting its <em>feel</em>. We want to get some intuition about a physical phenomenon. We may not care how many footballs can we fit in a football field, we want to get an approximate idea about the number. In physics, we deal with objects as small as quarks, laptons, electrons and as large as super cluster of galaxies. This <em>intuitive feel</em> of largeness gives a new taste to enjoying physics.</p>
    <p>As a first step, we tend to ignore precise values. If a value is between 1 and 10, we say it is roughly 10. If the number is between 100 and 1000, we say it is roughly 1000. That is, we build intuition by expressing numbers in the form {"\\(a \\times 10^b\\)"}. We round numbers and mostly care about the value of {"\\(b\\)"}. The diameter of the sun is roughly {"\\(10^9 m\\)"}, the diameter of an atom is roughly {"\\(10^{-10} m\\)"}.</p>
</article>