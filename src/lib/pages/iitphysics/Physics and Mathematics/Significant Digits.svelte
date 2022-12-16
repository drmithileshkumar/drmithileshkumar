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
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    p {
        text-indent: 2em;
    }
    /* .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: min(95vw, 600px);
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table thead tr th {
        border-bottom: 1px solid;
    } */
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What is least count of a measuring instrument? What are significant digits?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <h2>Least count</h2>
    <p><em>Least count</em> of an instrument is the smallest measurement that can be made with it.  </p>
    <h2>Significant digits</h2>
    <p>Significant digits are those digits that are feasible on a measurement device. If a device can measure length up to 1 mm, then in 1.234 mm only the 1 and 2 are significant. The last 3 and 4 are insignificant. Notice that 2 has been included to account for uncertainty as the measured value can be between 1 and 2. But 3 and 4 are superflous.</p>
    <p>The <em>most</em> significant digit is the first digit and the <em>least</em> significant digit is the last digit.</p>
    <p>The following digits are not significant digits</p>
    <ul>
        <li>Leading zeroes like in 0123, 0 is not significant.</li>
        <li>Trailing zeroes in whole numbers like 1600</li>
        <li>More number of digits obtained after calculations than originally measured digits.</li>
    </ul>
</article>