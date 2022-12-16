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
    .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        flex-wrap: wrap;
    }
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
    <title>Mathematics Question 5</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="How do we define base or fundamental units? How long really is one meter?" />
</svelte:head>
<label>
    <input type="checkbox" bind:checked={presentationMode}> Presentation Mode
</label>
<div class="container">
    {#if presentationMode}
        <aside use:ripple class="back" on:click={back}></aside>
    {/if}
    <article class:absolute={presentationMode} bind:this={presentation} bind:clientWidth={W}>

        <h1>Question 5 [JEE adv, 2021]</h1>
        {#if !presentationMode || current >= 0}
        <p 
            class="question {presentationMode && isActive === 0 ? 'currentActive': ''}" 
            transition:fly="{{ x: 200, duration: 1000}}"
            on:introstart={() => {isActive = -1}}
            on:introend={() => {isActive = 0}}
            on:outroend={() => {isActive = -1}}>
            For any positive integer \(n\), let \(S_n : (0,\infty)\to {TeX.bbR}\) be defined by \[S_n(x) = {TeX.sum('k=1','n')}{TeX.acot}\Big({TeX.frac('1 + k(k + 1)x^2', 'x')}\Big)\] where for any \(x{TeX.inR}, {TeX.acot}(x)\in (0, \pi)\) and \({TeX.atan}(x)\in \Big(-{TeX.piby2}, {TeX.piby2}\Big)\). Then which of the following statements is (are) <strong>True</strong>?
        </p>
        {/if}
        {#if !presentationMode || current >= 1}
            <ol class={optionStyle}>
                <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 1}}
                    on:outroend={() => {isActive = -1}}> {`\\(S_{10}(x) = \\dfrac{\\pi}{2}-\\tan^{-1}\\Big(\\dfrac{1 + 11x^2}{10x}\\Big)\\)`}, for all \(x>0\) </li>
                <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 1}}
                    on:outroend={() => {isActive = -1}}> {`\\(\\lim_{n\\to \\infty}\\cot(S_n(x)) = x\\)`}, for all \(x>0\) </li>
                <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 1}}
                    on:outroend={() => {isActive = -1}}> The equation {`\\(S_3(x)=\\dfrac{\\pi}{4}\\)`} has a root in \((0,\infty)\)</li>
                <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 1}}
                    on:outroend={() => {isActive = -1}}> {`\\(\\tan(S_n(x))\\leq \\dfrac{1}{2}\\)`}, for all \(n\geq 1\) and \(x > 0\) </li>
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
                    Seems like an ugly sum. Try to see any pattern that gives difference of terms. Then, in-between terms cancel out.
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
                Simplify the sum.
                {`\\[
                    \\begin{eqnarray}
                        \\cot^{-1}\\Big(\\frac{1 + k(k + 1)x^2}{x}\\Big) &=& \\tan^{-1}\\Big(\\frac{x}{1 + k(k + 1)x^2}\\Big)\\\\
                        &=& \\tan^{-1}\\Big(\\frac{(k+1)x - kx}{1 + kx\\cdot (k + 1)x}\\Big)\\\\
                        &=& \\tan^{-1}(k + 1)x - \\tan^{-1}kx
                    \\end{eqnarray}
                \\]`}
                Nice! This is promising.
                {`\\[
                    \\begin{aligned}
                    S_n(x) &= \\sum_{k = 1}^n\\cot^{-1}\\Big(\\frac{1 + k(k + 1)x^2}{x}\\Big)\\\\
                    &= \\sum_{k = 1}^n\\Big(\\tan^{-1}(k + 1)x - \\tan^{-1}kx\\Big)\\\\
                    &= \\tan^{-1}(n+1)x - \\tan^{-1}x\\\\
                    &= \\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)
                    \\end{aligned}
                    \\]`}
            </p>
            {/if}
            {#if !presentationMode || current >= 4}
            <h4 class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 4}}
                on:outroend={() => {isActive = -1}}>Step 3: 1.</h4>
            <p class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 4}}
                on:outroend={() => {isActive = -1}}>
                {`\\[
                    \\begin{aligned}
                    S_{10}(x) &= \\tan^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\cot^{-1}\\Big(\\frac{10x}{1 + 11x^2}\\Big)\\\\
                    &= \\frac{\\pi}{2} - \\tan^{-1}\\Big(\\frac{1 + 11x^2}{10x}\\Big)
                    \\end{aligned}
                \\]`}
            </p>
            {/if}
            {#if !presentationMode || current >= 5}
            <h4 class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive =5}}
                on:outroend={() => {isActive = -1}}>Step 3: 2.</h4>
            <p class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive =5}}
                on:outroend={() => {isActive = -1}}>
                {`\\[
                    \\begin{aligned}
                    \\lim_{n\\to \\infty}\\cot(S_n(x)) &= \\lim_{n\\to \\infty}\\cot\\Big(\\tan^{-1}\\Big(\\frac{nx}{1 + (n+1)x^2}\\Big)\\Big)\\\\
                    &= \\lim_{n\\to \\infty} \\frac{1 + (n + 1)x^2}{nx}\\\\
                    &= x
                    \\end{aligned}
                \\]`}
            </p>
            {/if}
            {#if !presentationMode || current >= 6}
            <h4 class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 6}}
                on:outroend={() => {isActive = -1}}>Step 3: 3.</h4>
            <p class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive =6}}
                on:outroend={() => {isActive = -1}}>
                {`\\[
                    \\begin{aligned}
                    S_3(x) &= \\frac{\\pi}{4}\\\\
                    \\tan^{-1}\\Big(\\frac{3x}{1 + 4x^2}\\Big) &= \\frac{\\pi}{4}\\\\
                    \\frac{3x}{1 + 4x^2} &= 1\\\\
                    4x^2 - 3x + 1 &= 0
                    \\end{aligned}
                \\]`}
                has no real roots.
            </p>
            {/if}
            {#if !presentationMode || current >= 7}
            <h4 class="{presentationMode && isActive === 7 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 7}}
                on:outroend={() => {isActive = -1}}>Step 3: 4</h4>
            <p class="{presentationMode && isActive === 7 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 7}}
                on:outroend={() => {isActive = -1}}>
                {`\\[
                    \\begin{aligned}
                    \\tan(S_n(x)) &= \\frac{nx}{1 + (n + 1)x^2}\\\\
                    \\tan(S_n(1)) &= \\frac{n}{n + 2}\\\\
                    &= \\frac{1}{1 + 2/n}\\\\
                    &\\geq\\frac{1}{2}, \\text{ for } n\\geq 2
                    \\end{aligned}
                \\]`}
            </p>
            <p transition:fly="{{ x: 200, duration: 1000 }}">
                Only options 1 and 2 are correct.
            </p>
            {/if}
        </section>
    </article>
    {#if presentationMode}
        <aside use:ripple class="next" on:click={next}></aside>
    {/if}
</div>
