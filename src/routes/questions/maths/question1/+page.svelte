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
    import {afterUpdate, beforeUpdate, onMount, tick} from 'svelte';
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
    $:console.log(presentationMode)
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
    <title>Mathematics Question 1</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="IIT JEE Advanced Mathematics 2021" />
</svelte:head>
<label>
    <input type="checkbox" bind:checked={presentationMode}> Presentation Mode
</label>
<div class="container">
    {#if presentationMode}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <aside use:ripple class="back" on:click={back}></aside>
    {/if}
    <article class:absolute={presentationMode} bind:this={presentation}>
            
       
        <h1>Question 1 [JEE adv, 2021]</h1>
        {#if !presentationMode || current >= 0}
            <p 
                class="question {presentationMode && isActive === 0 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = 0}}
                on:outroend={() => {isActive = -1}}
                >
                Let \({TeX.vec('u')}, {TeX.vec('v')}\) and \({TeX.vec('w')}\) be vectors in three-dimensional space, where \({TeX.vec('u')}\) and \({TeX.vec('v')}\) are unit vectors which are not perpendicular to each other and \[{TeX.vec('u')}\cdot {TeX.vec('w')} = 1,\quad {TeX.vec('v')}\cdot {TeX.vec('w')} = 1\quad {TeX.vec('w')}\cdot {TeX.vec('w')} = 4\]
                If the volume of the parallelopiped, whose adjacent sides are represented by the vectors \({TeX.vec('u')}, {TeX.vec('v')}\) and \({TeX.vec('w')}\), is \({TeX.sqrt('2')}\), then the value of \(|3{TeX.vec('u')} + 5{TeX.vec('v')}|\) is ______.
            </p>
        {/if}
        <!-- <ol class="options">
            <li> {`\\(h^2Gc^{-5}A^{-1}\\)`} </li>
            <li> {`\\(h^\\frac{1}{3}G^{\\frac{2}{3}}c^{\\frac{1}{3}}A^{-1}\\)`} </li>
            <li> {`\\(h^\\frac{2}{3}G^{\\frac{1}{3}}c^{\\frac{5}{3}}A^{-1}\\)`} </li>
            <li> {`\\(h^\\frac{-2}{3}G^{\\frac{4}{3}}c^{\\frac{-1}{3}}A^{-1}\\)`} </li>
        </ol> -->
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
                    on:outroend={() => {isActive = -1}}
                    >
                    The volume of the parallelopiped is given by the scalar triple product of the side vectors.
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
                <p 
                    class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 2}}
                    on:outroend={() => {isActive = -1}}
                    >\({TeX.vec('u')}\) and \({TeX.vec('v')}\) are unit vectors, to solve the problem we need the value of \({TeX.vec('u')}\cdot{TeX.vec('v')}\).</p>
            {/if}
            {#if !presentationMode || current >= 3}
                <h4 
                    class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>Step 1</h4>
                <p 
                    class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 3}}
                    on:outroend={() => {isActive = -1}}>Use triple product of the vectors which is equal to the given volume. {`\\[\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}) = \\sqrt{2}\\]`} </p>
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
                    Squaring the above equation gives
                    {`\\[
                        (\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}))^2 = \\left |\\begin{matrix}
                        \\vec{u}\\cdot\\vec{u} & \\vec{u}\\cdot\\vec{v} & \\vec{u}\\cdot\\vec{w}\\\\
                        \\vec{v}\\cdot\\vec{u} & \\vec{v}\\cdot\\vec{v} & \\vec{v}\\cdot\\vec{w}\\\\
                        \\vec{w}\\cdot\\vec{u} & \\vec{w}\\cdot\\vec{v} & \\vec{w}\\cdot\\vec{w}
                        \\end{matrix}\\right | = 2
                        \\]`}
                </p>
            {/if}
            {#if !presentationMode || current >= 5}
                <p 
                    class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive =5}}
                    on:outroend={() => {isActive = -1}}>
                    This implies
                    {`\\[
                        \\left |\\begin{matrix}
                        1 & \\vec{u}\\cdot\\vec{v} & 1\\\\
                        \\vec{v}\\cdot\\vec{u} & 1 & 1\\\\
                        1 & 1 & 4
                        \\end{matrix}\\right | = 2
                        \\]`}
                </p>
            {/if}
            {#if !presentationMode || current >= 6}
                <p 
                    class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 6}}
                    on:outroend={() => {isActive = -1}}>
                    Hence,
                        {`\\[
                            \\begin{eqnarray}
                            4(\\vec{u}\\cdot\\vec{v})^2 - 2(\\vec{u}\\cdot\\vec{v}) = 0\\\\
                            \\vec{u}\\cdot\\vec{v} = 0 \\text{~or~} \\vec{u}\\cdot\\vec{v} = \\frac{1}{2}
                            \\end{eqnarray}
                            \\]`}
                    As \({TeX.vec('u')}\cdot{TeX.vec('v')}\neq 0\), the only solution is \({TeX.vec('u')}\cdot{TeX.vec('v')} = {TeX.dfrac('1','2')}\)
                </p>
            {/if}
            {#if !presentationMode || current >= 7}
                <h4 
                    class="{presentationMode && isActive === 7 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 7}}
                    on:outroend={() => {isActive = -1}}>Step 3</h4>
                <p 
                    class="{presentationMode && isActive === 7 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = 7}}
                    on:outroend={() => {isActive = -1}}>
                    \((|3{TeX.vec('u')} + 5{TeX.vec('v')}|)^2 = 9 + 25 + 30\times{TeX.dfrac('1','2')} = 49\)
                    This implies \(|3{TeX.vec('u')} + 5{TeX.vec('v')}| = 7\)
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
