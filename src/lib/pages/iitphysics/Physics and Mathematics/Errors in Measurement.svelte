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
    <meta name="description" content="How do we handle errors in measurement in calculation?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>Assuming errors in measurement to be random, the average of large number of measurement of the same quantity will be close the true value. The <em>spread</em> of these values is expressed by <em>standard deviation.</em></p>
    <p>Suppose {`\\(x_1, x_2, x_3, \\dots, x_N\\)`} are {`\\(N\\)`} measurement results of a quantity in the experiment. Then the true value is expected to be close to {`\\[\\bar{x} = \\frac{\\sum_{i = 1}^N x_i}{N}\\]`} The standard deviation {`\\(\\sigma\\)`} is defined as {`\\[\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i = 1}^N(x_i - \\bar{x})^2}\\]`} </p>
    <p>We say that the actual value of the quantity is between the range {`\\[x_{true} = \\bar{x} \\pm k\\sigma\\]`} where the constant {`\\(k\\)`} determines the probability. That is, if {`\\(k\\)`} is small, the probability that the above range is correct goes down. For {`\\(k = 1.96\\)`}, the probability is 95%. For {`\\(k = 3\\)`}, the probability is more than 99%.  </p>
</article>