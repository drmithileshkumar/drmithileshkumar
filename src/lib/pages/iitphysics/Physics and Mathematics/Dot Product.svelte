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
    } */
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What is dot product of two vectors? What are unit vectors? What is dot product of unit vectors?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>
        The <em>dot</em> product or <em>scalar</em> product of two vectors {`\\(\\vec{a}\\)`} and {`\\(\\vec{b}\\)`} is defined as {`\\[\\vec{a}\\cdot\\vec{b} = ab\\cos\\theta\\]`} where {`\\(\\theta\\)`} is the angle between {`\\(\\vec{a}\\)`} and {`\\(\\vec{b}\\)`}.
    </p>
    <ul>
        <li>The dot product is maximum when {`\\(\\theta = 0^\\circ\\)`} with value {`\\(\\vec{a}\\cdot\\vec{b} = ab\\)`}.</li>
        <li>The dot product is minimum when {`\\(\\theta = 180^\\circ\\)`} with value {`\\(\\vec{a}\\cdot\\vec{b} = -ab\\)`}.</li>
        <li>The dot product is zero when {`\\(\\theta = 90^\\circ\\)`} with value {`\\(\\vec{a}\\cdot\\vec{b} = 0\\)`}.</li>
        <li>The dot product is commutative, i.e. {`\\(\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{a}\\)`}.</li>
        <li>The dot product is distributive, i.e. {`\\(\\vec{a}\\cdot(\\vec{b} + \\vec{c}) = \\vec{a}\\cdot\\vec{b} + \\vec{a}\\cdot\\vec{c}\\)`} </li>
    </ul>
    <section>
        <h2>Unit vectors</h2>
        <p>The dot product of unit vectors will be {`
        \\[
            \\begin{eqnarray}
                \\hat{i}\\cdot\\hat{i} &=& \\hat{j}\\cdot\\hat{j} &=& \\hat{k}\\cdot\\hat{k} &=& 1\\\\
                \\hat{i}\\cdot\\hat{j} &=& \\hat{j}\\cdot\\hat{k} &=& \\hat{k}\\cdot\\hat{i} &=& 0\\\\
                \\hat{j}\\cdot\\hat{i} &=& \\hat{k}\\cdot\\hat{j} &=& \\hat{i}\\cdot\\hat{k} &=& 0
            \\end{eqnarray}
            \\]`}
            That is, the dot product is one if the unit vectors are the same and zero otherwise, because these vectors are mutually perpendicular.
        </p>
        <p>
            The above relation combined with distributivity, we can write the dot product between vectors {`\\(\\vec{a} = a_x\\hat{i} + a_y\\hat{j} + a_z\\hat{k}\\)`} and {`\\(\\vec{b} = b_x\\hat{i} + b_y\\hat{j} + b_z\\hat{k}\\)`} as {`\\[
                \\begin{eqnarray}
                \\vec{a}\\cdot\\vec{b} &=& (a_x\\hat{i} + a_y\\hat{j} + a_z\\hat{k})\\cdot (b_x\\hat{i} + b_y\\hat{j} + b_z\\hat{k})\\\\
                &=& a_xb_x + a_yb_y + a_zb_z
                \\end{eqnarray}
                \\]`}
        </p>
    </section>
</article>