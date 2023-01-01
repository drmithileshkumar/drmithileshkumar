
<script id="MathJax-script">
// @ts-nocheck
    import {page} from '$app/stores';
    import {fade, fly} from 'svelte/transition';
    import {afterUpdate, beforeUpdate, onMount} from 'svelte';
    import {ripple} from '$lib/ui/ripple';
    import {TeX} from '$lib/utils/common/constants';
    import CanvasBar from '$lib/canvas/CanvasBar.svelte';
	import Canvas from '$lib/canvas/Canvas.svelte';
	
    let W, H;
    let stMode = false, arcMode = false;
    let strokeColor = 'black', lineWidth = 2;
    onMount(() => {
        MathJax.typeset();
    });
    let presentation, overlay;
    let presentationMode = false;
    let counter = 11;
    let current = -2;
    let isActive = -1; 
    let autoscroll = false;
    let globalCompositeOperation = 'source-over';
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
            overlay.scrollTo({
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
        position: relative;
    }
    article {
        position: relative;
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
    .overlay {
        position: absolute;
        z-index: 2;
        left: 0.5em;
        top: 0;
        margin: auto;
        width: calc(100% - 2em);
        height: min(78vh, 60vw);
        /* height: min(70vh,600px); */
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        /* padding: 0 1em 0 1em; */
    }
    
    .presentationMode {
        display: flex;
        gap: 1em;
        height: 1em;
        margin-bottom: 0.5em;
    }
    
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
        flex-direction: column;
    }
    .statement {
        background: radial-gradient(#6000c091, rgb(0, 93, 180));
        color: rgb(246, 246, 246);
        text-shadow: 1px 1px 3px rgb(4, 4, 4);
        box-shadow: 1px 1px 3px rgb(129, 128, 128);
        padding: 1em;
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
<div class="presentationMode">
    <label>
        <input type="checkbox" bind:checked={presentationMode}> Presentation Mode
    </label>
    {#if presentationMode}
        <CanvasBar bind:lineWidth bind:strokeColor bind:globalCompositeOperation bind:stMode bind:arcMode/>
    {/if}
</div>
<div class="container">
    {#if presentationMode}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <aside use:ripple class="back" on:click={back}></aside>
    {/if}
    {#if !presentationMode}
        <span bind:this={overlay}></span>
    {/if}
    {#if presentationMode}
        <div class="absolute overlay" bind:this={overlay}>
            <Canvas width={W} height={10000} {strokeColor} {lineWidth} {globalCompositeOperation} {stMode} {arcMode}/>
        </div>
        
    {/if}
    <article class:absolute={presentationMode} bind:this={presentation} bind:clientWidth={W} bind:clientHeight={H}>
        {#if presentationMode && current === -2}
            <div class="thumbnail question statement">
                <p>
                    For any complex number \(w = c + id\), let \(arg(w)\in (-\pi,\pi]\), where \(i={TeX.sqrt('-1')}\). Let \(\alpha\) and \(\beta\) be real numbers such that for all complex numbers \(z = x + iy\) satisfying \(arg\Big[{TeX.dfrac('z + \\alpha','z + \\beta')}\Big]={TeX.dfrac('\\pi','4')}\), the ordered pair \((x, y)\) lies on the circle \(x^2 + y^2 + 5x - 3y + 4 = 0\). Then, which of the following statements is (are) <strong>True</strong>?
                </p>
                <ol class="grid" style="width: 100%">
                    <li> {`\\(\\alpha = -1\\)`} </li>
                    <li> {`\\(\\alpha\\beta = 4\\)`} </li>
                    <li> {`\\(\\alpha\\beta = -4\\)`} </li>
                    <li> {`\\(\\beta = 4\\)`} </li>
                </ol>
            </div>
        {/if}    
        {#if !presentationMode || current >= -1}
        <h1>Question 4 [JEE adv, 2021]</h1>
        {/if}
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
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <aside use:ripple class="next" on:click={next}></aside>
    {/if}
</div>
