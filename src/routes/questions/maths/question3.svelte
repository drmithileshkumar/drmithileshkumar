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
</style>
<svelte:head>
    <title>Mathematics Question 3</title>
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
        <h1>Question 3 [JEE adv, 2021]</h1>
        {#if !presentationMode || current >= 0}
            <p 
                class="question {presentationMode && isActive === 0 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 0}}
                on:outroend={() => {isActive = -1}}>
                For \(x{TeX.inR}\), thi number of real roots of the equation \(3x^2-4|x^2 - 1| + x - 1 = 0\) is ______.
            </p>
        {/if}
        <section>
            {#if !presentationMode || current >= 1}
                <h2 
                    class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 1}}
                    on:outroend={() => {isActive = -1}}>Concepts</h2>
                <p 
                    class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 1}}
                    on:outroend={() => {isActive = -1}}>
                    Consider the sign of  \(x^2 - 1\) to get two quadratic equations.
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
                            x^2 - 1 > 0&\\implies& x\\in (-\\infty, -1)\\cup(1,\\infty)\\\\
                            x^2 - 1 < 0&\\implies& x\\in (-1, 1)
                        \\end{eqnarray}
                    \\]`}
                </p>
            {/if}
            {#if !presentationMode || current >= 3}
                <h4 
                    class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>Step 2</h4>
                <h5 
                    class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>Case 1: \(x^2 - 1>0\)</h5>
                <p 
                    class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>
                    This gives the quadratic equation
                    {`\\[
                        \\begin{eqnarray}
                            3x^2 -4(x^2 - 1) + x - 1 &=& 0\\\\
                            \\implies x^2-x -3 &=& 0\\\\
                            \\implies x &=& \\frac{1\\pm \\sqrt{13}}{2}
                        \\end{eqnarray}
                    \\]`}
                    Both the roots are in the allowed interval \(x\in (-\infty, -1)\cup(1,\infty)\).
                </p>
            {/if}
            {#if !presentationMode || current >= 4}
                <h5 
                    class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 4}}
                    on:outroend={() => {isActive = -1}}>Case 2: \(x^2 - 1{TeX.less}0\)</h5>
                <p 
                    class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 4}}
                    on:outroend={() => {isActive = -1}}>
                    This gives the quadratic equation
                    {`\\[
                        \\begin{eqnarray}
                            3x^2 +4(x^2 - 1) + x - 1 &=& 0\\\\
                            \\implies 7x^2+x -5 &=& 0\\\\
                            \\implies x &=& \\frac{-1\\pm \\sqrt{141}}{14}
                        \\end{eqnarray}
                    \\]`}
                    Both the roots are in the allowed interval \(x\in (-1,1)\).
                </p>
            {/if}
            {#if !presentationMode || current >= 5}
                <h4 
                    class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 5}}
                    on:outroend={() => {isActive = -1}}>Step 3</h4>
                <p 
                    class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 5}}
                    on:outroend={() => {isActive = -1}}>
                    There are two roots each of the two quadratic equations. Hence, the total number of roots is 4.
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
