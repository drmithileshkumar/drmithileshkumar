
<script id="MathJax-script">
// @ts-nocheck
import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
    import {page} from '$app/stores';
    import {fade, fly} from 'svelte/transition';
    import {onMount} from 'svelte';
    
    import {TeX} from '$lib/utils/common/constants';
    
    
    onMount(() => {
        $slideCounter = 8;
        $currentSlide = -2;
        MathJax.typeset();
    });
    
    let isActive = -1; 
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
    
    article {
        position: relative;
        padding: 0.5em;
        /* in: all 1s; */
    }
    
    .absolute {
        margin: auto;
        /* width: 90vw; */
        width: 100%;
        height: min(78vh, 60vw);
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
        /* background: gray; */
        color: tomato;
        /* padding: 1em; */
        border-radius: 10px;
        transition: all 1s;
    }
    .pad {
        min-height: 100px;
    }
    /* figure {
        
        width: 300px;
    } */
    
    /* .displayStyle {
        font-size: 2em;
        transition: all 1s;
    } */
    .thumbnail {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5em;
        height: 100%;
        
    }
    .statement {
        background: radial-gradient(#6000c091, rgb(0, 93, 180));
        color: rgb(246, 246, 246);
        text-shadow: 1px 1px 3px rgb(4, 4, 4);
        box-shadow: 1px 1px 3px rgb(129, 128, 128);
        padding: 1em;
    }
</style>
<svelte:head>
    <title>Mathematics Question 3</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="IIT JEE Advanced Mathematics 2021" />
</svelte:head>

    <article class:absolute={$presentationMode} bind:this={$presentation}>
        {#if $presentationMode && $currentSlide === -2}
            <div class="thumbnail">
                <p 
                    class="question statement" 
                    >
                    For \(x{TeX.inR}\), thi number of real roots of the equation \(3x^2-4|x^2 - 1| + x - 1 = 0\) is ______.
                </p>
            </div>
        {/if}   
        {#if !$presentationMode || $currentSlide >= -1}
            <h1>Question 3 [JEE adv, 2021]</h1>
        {/if}
        {#if !$presentationMode || $currentSlide >= 0}
            <p 
                class="question {$presentationMode && isActive === 0 ? 'currentActive': ''}" 
                transition:fly|global="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = $currentSlide}}
                on:outroend={() => {isActive = -1}}>
                For \(x{TeX.inR}\), thi number of real roots of the equation \(3x^2-4|x^2 - 1| + x - 1 = 0\) is ______.
            </p>
        {/if}
        <section>
            {#if !$presentationMode || $currentSlide >= 1}
                <h2 
                    class="{$presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Concepts</h2>
                <p 
                    class="{$presentationMode && isActive === 1 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>
                    Consider the sign of  \(x^2 - 1\) to get two quadratic equations.
                </p>
            {/if}
        </section>
        <section>
            {#if !$presentationMode || $currentSlide >= 2}
                <h2 
                    class="{$presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Solution</h2>
                <h4 
                    class="{$presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>
                    Step 1
                </h4>
                <p 
                    class="{$presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>
                    {`\\[
                        \\begin{eqnarray}
                            x^2 - 1 > 0&\\implies& x\\in (-\\infty, -1)\\cup(1,\\infty)\\\\
                            x^2 - 1 < 0&\\implies& x\\in (-1, 1)
                        \\end{eqnarray}
                    \\]`}
                </p>
            {/if}
            {#if !$presentationMode || $currentSlide >= 3}
                <h4 
                    class="{$presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Step 2</h4>
                <h5 
                    class="{$presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Case 1: \(x^2 - 1>0\)</h5>
                <p 
                    class="{$presentationMode && isActive === 3 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
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
            {#if !$presentationMode || $currentSlide >= 4}
                <h5 
                    class="{$presentationMode && isActive === 4 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Case 2: \(x^2 - 1{TeX.less}0\)</h5>
                <p 
                    class="{$presentationMode && isActive === 4 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
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
            {#if !$presentationMode || $currentSlide >= 5}
                <h4 
                    class="{$presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Step 3</h4>
                <p 
                    class="{$presentationMode && isActive === 5 ? 'currentActive': ''}" 
                    transition:fly|global="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>
                    There are two roots each of the two quadratic equations. Hence, the total number of roots is 4.
                </p>
            {/if}
            {#if $presentationMode && $currentSlide > 0}
                <div class="pad"></div>
            {/if}
        </section>
    </article>
    