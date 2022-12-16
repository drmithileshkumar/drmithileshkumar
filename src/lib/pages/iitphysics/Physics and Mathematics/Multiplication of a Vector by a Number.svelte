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
        justify-content: center;
        width: min(95vw, 600px);
    } */
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="How do we multiply a vector by a number?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>A vector can be multiplied by a number. This multiplication changes the magnitude of the vector. If the number is negative, the direction is reversed.</p>
    <p>Suppose {`\\(\\vec{a}\\)`} is a vector and {`\\(k\\)`} is some number. Then, {`\\[\\vec{b} = k\\vec{a}\\]`} is a new vector. </p>
    <ol>
        <li>The magnitude is {`\\(b = \\vert ka\\vert\\)`}.</li>
        <li>If {`\\(k > 0\\)`}, then the direction of {`\\(\\vec{b}\\)`} is the same as the direction of {`\\(\\vec{a}\\)`}. </li>
        <li>If {`\\(k < 0\\)`}, then the direction of {`\\(\\vec{b}\\)`} is opposite to the direction of {`\\(\\vec{a}\\)`}. </li>
        <li>If {`\\(k = 0\\)`}, then the direction of {`\\(\\vec{b}\\)`} is undefined. In this case, {`\\(\\vec{b}\\)`} is called a <em>zero</em> vector with magnitude {`\\(0\\)`}. A zero vector can be added to any vector without changing the vector. We write zero vector by placing an arrow over zero. {`\\[\\vec{b} = \\vec{0}\\]`} </li>
        <li>If {`\\(k = -1\\)`}, we write {`\\[\\vec{b} = -\\vec{a}\\]`} In this case, {`\\(\\vec{a}\\)`} and {`\\(\\vec{b}\\)`} differ in direction only (one being the opposite of the other).</li>
    </ol>
    <section>
        <h2>Unit vector</h2>
        <p>A vector of magnitude {`\\(1\\)`} is called a <em>unit</em> vector.</p>
        <p>A unit vector is usually denoted by placing a hat on the letter like {`\\(\\hat{a}\\)`}. A unit vector in the direction of a vector {`\\(\\vec{a}\\)`} is represented as {`\\(\\hat{a}\\)`}. Therefore, we can write any vector {`\\(\\vec{a}\\)`} as {`\\[\\vec{a} = a\\hat{a}\\]`}</p>
        <p></p>
    </section>
</article>