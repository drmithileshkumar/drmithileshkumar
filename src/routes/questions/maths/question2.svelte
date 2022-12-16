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
    
    onMount(() => {
        MathJax.typeset();
    });
    let presentation;
    let presentationMode = false;
    let counter = 3;
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
        min-height: 150px;
    }
</style>
<svelte:head>
    <title>Mathematics Question 2</title>
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
    <article class:absolute={presentationMode} bind:this={presentation}>
        <h1>Question 2 [JEE adv, 2021]</h1>
        {#if !presentationMode || current >= 0}
        <p 
            class="question {presentationMode && isActive === 0 ? 'currentActive': ''}" 
            transition:fly="{{ x: 200, duration: 1000}}"
            on:introstart={() => {isActive = -1}}
            on:introend={() => {isActive = 0}}
            on:outroend={() => {isActive = -1}}
            >
            In a triangle ABC, let \(AB = {TeX.sqrt('23')}\), and \(BC = 3\) and \(CA = 4\). Then the value of \({TeX.dfrac('\\cot A + \\cot C', '\\cot B')}\) is ______.
        </p>
        {/if}
        <section>
            {#if !presentationMode || current >= 1}
            <h2 
                class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}
                >Concepts</h2>
            <p 
                class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 1}}
                on:outroend={() => {isActive = -1}}>
                Use \(\cos A = {TeX.dfrac('b^2 + c^2 - a^2', '2bc')}\) and \(\Delta = {TeX.dfrac('1', '2')}bc\sin A\)
            </p>
            {/if}
        </section>
        <section>
            {#if !presentationMode || current >= 2}
                <h2 
                    class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 2}}
                    on:outroend={() => {isActive = -1}}>Solution</h2>
                
                <h4 
                    class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 2}}
                    on:outroend={() => {isActive = -1}}>
                    Step 1
                </h4>
                <p 
                    class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 2}}
                    on:outroend={() => {isActive = -1}}>
                    {`\\[
                        \\begin{eqnarray}
                            \\frac{\\cot A + \\cot C}{\\cot B} &=& \\frac{\\frac{\\cos A}{\\sin A} + \\frac{\\cos C}{\\sin C}}{\\frac{\\cos B}{\\sin B}}\\\\
                            &=&\\frac{\\frac{b^2 + c^2 - a^2}{2bc\\sin A} + \\frac{a^2 + b^2 - c^2}{2ab\\sin C}}{\\frac{a^2 + c^2 - b^2}{2ac\\sin B}}\\\\
                            &=&\\frac{\\frac{b^2 + c^2 - a^2}{4\\Delta} + \\frac{a^2 + b^2 - c^2}{4\\Delta}}{\\frac{a^2 + c^2 - b^2}{4\\Delta}}\\\\
                            &=& \\frac{2b^2}{a^2 + c^2 - b^2}\\\\
                            &=& \\frac{2\\times 4^2}{3^2 + 23 - 4^2} = 2
                        \\end{eqnarray}
                    \\]`}
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
