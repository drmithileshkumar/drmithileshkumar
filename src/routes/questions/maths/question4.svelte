<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://drmithileshkumar.com${url.pathname}`
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
    import {page} from '$app/stores';
    import {fade, fly} from 'svelte/transition';
    import {afterUpdate, beforeUpdate, onMount} from 'svelte';
    import {ripple} from '$lib/ui/ripple';
    import {TeX} from '$lib/utils/common/constants';
    let W;
    onMount(() => {
        MathJax.typeset();
    });
    let presentation;
    let presentationMode = false;
    let counter = 8;
    let current = -1;
    let isActive = -1; 
    let autoscroll = false;
    beforeUpdate(() => {
        if(presentation) {
            // autoscroll = presentation && (presentation.offsetHeight + presentation.scrollTop) > (presentation.scrollHeight - 40);
            autoscroll = true;
        }
        
    })
    afterUpdate( async () => {
        if(autoscroll) setTimeout(async () => {
            MathJax.typeset();
            presentation.scrollTo({
                top: presentation.scrollHeight,
                left: 0,
                behaviour: 'smooth'
            });
        }, 0)
        
    })
    const back = () => {
        if(current >= 0) current--;
        setTimeout(() => { MathJax.typeset();}, 0)
    }
    const next = () => {
        if(current < counter - 1) {
            current++;
            setTimeout(() => { MathJax.typeset();}, 0)
        }
    }
    $: optionStyle = W < 450 ? 'flex' : 'grid'; 
</script>
<style>
    /* p {
        text-indent: 2em;
    } */
    /* .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        flex-wrap: wrap;
    } */
    .container {
        display: flex;
    }
    article {
        padding: 0.5em;
        /* in: all 1s; */
    }
    aside {
        background-color: rgb(230, 228, 228);
        cursor: pointer;
        width: 1em;
    }
    .absolute {
        margin: auto;
        width: 90vw;
        height: min(80vh, 60vw);
        /* height: min(70vh,600px); */
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding: 0 1em 0 1em;
    }
    .absolute::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    .currentActive {
        background: gray;
        color: white;
        padding: 1em;
        border-radius: 10px;
        transition: all 1s;
    }
    .pad {
        min-height: 100px;
    }
    .flex {
        display: flex;
        flex-direction: column;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
</style>
<svelte:head>
    <title>Mathematics Question 4</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="IIT JEE Advanced Mathematics 2021" />
</svelte:head>
<label>
    <input type="checkbox" bind:checked={presentationMode}> Presentation Mode
</label>
<div class="container">
    {#if presentationMode}
        <aside use:ripple class="back" on:click={back}></aside>
    {/if}
    <article class:absolute={presentationMode} bind:this={presentation} bind:clientWidth={W}>
        <h1>Question 4 [JEE adv, 2021]</h1>
        {#if !presentationMode || current >= 0}
        <p 
            class="question {presentationMode && isActive === 0 ? 'currentActive': ''}" 
            transition:fly="{{ x: 200, duration: 1000}}"
            on:introstart={() => {isActive = -1}}
            on:introend={() => {isActive = 0}}
            on:outroend={() => {isActive = -1}}>
            For any complex number \(w = c + id\), let \(arg(w)\in (-\pi,\pi]\), where \(i={TeX.sqrt('-1')}\). Let \(\alpha\) and \(\beta\) be real numbers such that for all complex numbers \(z = x + iy\) satisfying \(arg\Big[{TeX.dfrac('z + \\alpha','z + \\beta')}\Big]={TeX.dfrac('\\pi','4')}\), the ordered pair \((x, y)\) lies on the circle \(x^2 + y^2 + 5x - 3y + 4 = 0\). Then, which of the following statements is (are) <strong>True</strong>?
        </p>
        {/if}
        {#if !presentationMode || current >= 1}
        <ol class={optionStyle}>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> {`\\(\\alpha = -1\\)`} </li>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> {`\\(\\alpha\\beta = 4\\)`} </li>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> {`\\(\\alpha\\beta = -4\\)`} </li>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> {`\\(\\beta = 4\\)`} </li>
        </ol>
        {/if}
        <section>
            {#if !presentationMode || current >= 2}
                <h2 class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 2}}
                    on:outroend={() => {isActive = -1}}>Concepts</h2>
                <p class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 2}}
                    on:outroend={() => {isActive = -1}}>
                    Simplify the arg part.
                </p>
            {/if}
        </section>
        <section>
            {#if !presentationMode || current >= 3}
                <h2 class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>Solution</h2>
                <h4 class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>
                    Step 1
                </h4>
                <p class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>
                    {`\\[
                        \\begin{eqnarray}
                            \\frac{z + \\alpha}{z + \\beta} &=& \\frac{(x + \\alpha) + iy}{(x + \\beta) + iy}\\\\
                            &=& \\frac{(x + \\alpha)(x + \\beta) + y^2 + i(\\beta - \\alpha)y}{(x + \\beta)^2 + y^2}\\\\
                        \\end{eqnarray}
                    \\]`}
                    {`\\[
                        \\begin{eqnarray}
                            \\implies \\frac{(\\beta - \\alpha)y}{(x + \\alpha)(x + \\beta) + y^2} = \\tan\\frac{\\pi}{4}&=&1\\\\
                            \\implies x^2 + y^2 + (\\alpha + \\beta)y + (\\alpha - \\beta)y + \\alpha\\beta &=& 0
                        \\end{eqnarray}
                    \\]`}
                </p>
            {/if}
            {#if !presentationMode || current >= 4}
                <h4 
                    class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 4}}
                    on:outroend={() => {isActive = -1}}>Step 2</h4>
                <p 
                    class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 4}}
                    on:outroend={() => {isActive = -1}}>
                    The above curve is the locus of \(z = x + iy\) or the pair \((x,y)\). This must be equal to the equation of the given circle. All we need to do now is to equate the coefficients of each term.
                </p>
            {/if}
            {#if !presentationMode || current >= 5}
                <h4 
                    class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive =5}}
                    on:outroend={() => {isActive = -1}}>Step 3</h4>
                <p 
                    class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive =5}}
                    on:outroend={() => {isActive = -1}}>
                    This gives the following relations 
                    {
                        `\\[
                            \\begin{eqnarray}
                                \\alpha + \\beta &=& 5\\\\
                                \\alpha - \\beta &=& -3\\\\
                                \\alpha \\beta &=& 4\\\\
                                \\implies \\alpha &=& 1\\\\
                                \\beta &=& 4
                            \\end{eqnarray}
                            \\]`
                    }
                    Therefore, options 1 and 4 are correct.
                </p>
            {/if}
            {#if presentationMode && current > 0}
                <div class="pad"></div>
            {/if}
        </section>
    </article>
    {#if presentationMode}
        <aside use:ripple class="next" on:click={next}></aside>
    {/if}
</div>
