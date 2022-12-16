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
    <meta name="description" content="How do we do calculations involving significant digits?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>Arithmetic with significant digits</p>
    <ol>
        <li>
            In a multiplication or division of two or more quantities, the number of significant digits in the answer is equal to the number of significant digits in the quantity which has the <em>minimum</em> number of significant digits.
        </li>
        <li>
            For addition or subtraction, trancate numbers to have the same number of significant digits.
        </li>
    </ol>
    <h2>Rounding</h2>
    <p>The insignificant digits are dropped after calculations. The least significant digit is rounded as follows: if the digit to the left is more than 5, then the rounded digit is increased by 1. If it is equal to 5, then increase the rounded digit if it is odd. </p>
</article>