<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:3000')) {
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
    <title>Mathematics Question 6</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="IIT JEE Advanced 2021 Mathematics" />
</svelte:head>
<label>
    <input type="checkbox" bind:checked={presentationMode}> Presentation Mode
</label>
<div class="container">
    {#if presentationMode}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <aside use:ripple class="back" on:click={back}></aside>
    {/if}
    <article class:absolute={presentationMode} bind:this={presentation} bind:clientWidth={W}>
        <h1>Question 6 [JEE adv, 2021]</h1>
        {#if !presentationMode || current >= 0}
        <p class="question {presentationMode && isActive === 0 ? 'currentActive': ''}" 
            transition:fly="{{ x: 200, duration: 1000}}"
            on:introstart={() => {isActive = -1}}
            on:introend={() => {isActive = 0}}
            on:outroend={() => {isActive = -1}}>
            For any \(3\times 3\) matrix \(M\), let \(|M|\) denote the determinant of \(M\). Let \(I\) be the \(3\times 3\) identity matrix. Let \(E\) and \(F\) be two \(3\times 3\) matrices such that \(I-EF\) is invertible. If \(G = {TeX.pow('(I - EF)', '-1')}\), then which of the following statements is (are) <strong>True</strong>?
        </p>
        {/if}
        {#if !presentationMode || current >= 1}
        <ol class={optionStyle}>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> {`\\(|FE| = |I-FE||FGE|\\)`}</li>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> {`\\((I-FE)(I + FGE) = I\\)`}</li>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> \(EFG = GEF\)</li>
            <li class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}> \((I - FE)(I-FGE) = I\) </li>
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
                Use \(A{TeX.inv('A')} = {TeX.inv('A')}A = I\)
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
                        (I - EF)G &=& G(I-EF)\\\\
                        \\implies EFG &=& GEF
                    \\end{eqnarray}
                \\]`}
                Option 3 is correct.
            </p>
            {/if}
            {#if !presentationMode || current >= 4}
            <h4 class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 4}}
                on:outroend={() => {isActive = -1}}>Step 2</h4>
            <p class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 4}}
                on:outroend={() => {isActive = -1}}> We have that 
                {`\\[
                    \\begin{aligned}
                        G(I - EF) &= I\\implies GEF = G-I\\\\
                        (I - EF)G & = I\\implies EFG = G -I
                    \\end{aligned}
                \\]`}
                Now, {`\\[
                    \\begin{aligned}
                    (I-FE)(I + FGE) &= I - FE + FGE - FEFGE\\\\
                    &= I - FE + FGE - F(G - I)E\\\\
                    &= I - FE + FGE - FGE + FE\\\\
                    &= I
                    \\end{aligned}
                \\]`}
                Option 2 is correct.
            </p>
            {/if}
            {#if !presentationMode || current >= 5}
            <h4 class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive =5}}
                on:outroend={() => {isActive = -1}}>Step 3</h4>
            <p class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive =5}}
                on:outroend={() => {isActive = -1}}>
                {`\\[
                    \\begin{aligned}
                    (I-FE)(I - FGE) &= I - FE - FGE + FEFGE\\\\
                    &= I - FE - FGE + F(G - I)E\\\\
                    &= I - FE + FGE + FGE - FE\\\\
                    &= I - 2FE
                    \\end{aligned}
                \\]`}
                Option 4 is incorrect.
            </p>
            {/if}
            {#if !presentationMode || current >= 6}
            <h4 class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 6}}
                on:outroend={() => {isActive = -1}}>Step 4</h4>
            <p class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 6}}
                on:outroend={() => {isActive = -1}}>
                {`\\[
                    \\begin{aligned}
                    (I-FE)FGE &= FGE - FEFGE\\\\
                    &= FGE - F(G - I)E\\\\
                    &= FGE - FGE + FE\\\\
                    &= FE
                    \\end{aligned}
                \\]`}
                Option 1 is correct.
            </p>
            {/if}
            {#if presentationMode && current > 0}
                <div class="pad"></div>
            {/if}
        </section>
    </article>
    {#if presentationMode}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <aside use:ripple class="next" on:click={next}></aside>
    {/if}
</div>
