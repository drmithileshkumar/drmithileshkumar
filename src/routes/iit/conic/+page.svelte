<script id="MathJax-script">
    // @ts-nocheck
        
        import {page} from '$app/stores';
        import {fade, fly} from 'svelte/transition';
        import {afterUpdate, beforeUpdate, onMount, tick} from 'svelte';
        import {ripple} from '$lib/ui/ripple';
        import {TeX} from '$lib/utils/common/constants';
        import Canves from '$lib/canvas/Canves.svelte';
        
        let W, H;
        let colors = ['green', 'blue', 'red', 'yellow', 'orange', 'black', 'eraser'];
        let strokeColor = 'black', lineWidth = 2;
        onMount(() => {
            MathJax.typeset();
        });
        let presentation, overlay;
        let presentationMode = false;
        let counter = 46;
        let current = -2;
        let isActive = -1; 
        let nextStep = 0;
        let autoscroll = false;
        let globalCompositeOperation = 'source-over';
        function setColor(chosenColor) {
            globalCompositeOperation = 'source-over';
            lineWidth = 2;
            switch (chosenColor) {
                case "green":
                    strokeColor = "green";
                    break;
                case "blue":
                    strokeColor = "blue";
                    break;
                case "red":
                    strokeColor = "red";
                    break;
                case "yellow":
                    strokeColor = "yellow";
                    break;
                case "orange":
                    strokeColor = "orange";
                    break;
                case "black":
                    strokeColor = "black";
                    break;
                case "white":
                    strokeColor = "white";
                    break;
                case 'eraser': {
                    globalCompositeOperation = 'destination-out';
                    strokeColor = 'rgba(0, 0, 0, 1)';
                    lineWidth = 20;
                    break
                }
    
            }
            // if (strokeColor == "white") lineWidth = 14;
            // else lineWidth = 2;
        
        }
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
        figure {
            /* float: right; */
            width: 300px;
        }
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
        .colors {
            display: flex;
            gap: 0.5em;
            align-items: center;
        }
        .presentationMode {
            display: flex;
            gap: 1em;
            height: 1em;
            margin-bottom: 0.5em;
        }
        .lineWidth {
            display: flex;
            align-items: center;
            gap: 1em;
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
            
        }
        /* .statement {
            background: radial-gradient(#6000c091, rgb(0, 93, 180));
            color: rgb(246, 246, 246);
            text-shadow: 1px 1px 3px rgb(4, 4, 4);
            box-shadow: 1px 1px 3px rgb(129, 128, 128);
            padding: 1em;
        } */
        .title {
            position: absolute;
            margin: auto;
            font-weight: bold;
            font-size: 2em;
            text-shadow: 1px 1px 3px gray;
            color: red;
        }
        .heading {
            font-size: 1.5em;
            font-weight: bold;
        }
    </style>
    <svelte:head>
        <title>Conic Section and Circle</title>
        <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
        <meta name="description" content="Conic Section and Circle" />
    </svelte:head>
    <div class="presentationMode">
        <label>
            <input type="checkbox" bind:checked={presentationMode}> Presentation Mode
        </label>
        {#if presentationMode}
            <div class="colors">
                {#each colors as color}
                    <button style="background: {color}; border: {strokeColor === color ? '5px double' : 'solid'}; padding: {color === 'eraser' ? 0 : ''};" on:click={() => setColor(color)}>
                    {#if color === 'eraser'}
                        <svg width="20" height="20" viewBox="0 0 20 40">
                            <g transform="rotate(-45 10 20) translate(0 5)">
                                <rect x='0' y='0' width='20' height='10' stroke='black' stroke-width='1' />
                                <rect x='0' y='10' width='20' height='20' fill='none' stroke='black' stroke-width='1' />
                            </g>
                        </svg>
                    {/if}
                    </button>
                {/each}
            </div>
            <div class="lineWidth">
                <label>Stroke <input style="width: 4em; height: 1em; padding-left: 0.5em; padding-right: 0.5em;" type="number" step="0.1" bind:value={lineWidth}></label>
                
            </div>
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
                <Canves width={W} height={10000} {strokeColor} {lineWidth} {globalCompositeOperation}/>
            </div>
            
        {/if}
        <article class:absolute={presentationMode} bind:this={presentation} bind:clientWidth={W} bind:clientHeight={H}>
            <!-- <video width="100%" height="auto" controls>
                <source src="/circle_demo/Conic_deg.mp4" type="video/mp4">
                    Your browser does not support the video tag.
            </video> -->
            {#if presentationMode && current === -2}
                <div class="thumbnail">
                    <img width="100%" src="/circle_demo/conics.png">
                    <span class="title">Circle</span>
                </div>
            {/if}    
            {#if !presentationMode || current >= -1}
            <h1>Conic Section and Circle</h1>
            {/if}
            {#if !presentationMode || current >= 0}
                <h2 class="heading {presentationMode && isActive === 0 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000}}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = current}}
                on:outroend={() => {isActive = -1}}>Cone and a plane</h2>
                <p 
                    class="{presentationMode && isActive === 0 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = current}}
                    on:outroend={() => {isActive = -1}}
                    style="display:flex;align-items:center;justify-content:center;flex-direction:column;"
                    >
                    
                    <img src="/circle_demo/Cone.png" width="80%" height="100%">
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
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >Slice cone with a plane</h2>
                    <p 
                        class="{presentationMode && isActive === 1 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items: center; justify-content:center;"
                        >
                        <video width="90%" height="auto" src="/circle_demo/Conic_anime.mp4" type="video/mp4" autoplay={current >= 1} muted ></video>
                    </p>
                    
                {/if}
                {#if !presentationMode || current >= 2}
                    <h2 
                        class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >The plane passes through the vertex</h2>
                    <p 
                        class="{presentationMode && isActive === 2 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items: center; justify-content:center;"
                        >
                        <video width="90%" height="auto" src="/circle_demo/Conic_deg.mp4" type="video/mp4" autoplay={current >= 2} muted ></video>
                    </p>
                    
                {/if}
            </section>
            <section>
                {#if !presentationMode || current >= 3}
                    <h2 
                        class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >How is a circle created?</h2>
                    <p 
                        class="{presentationMode && isActive === 3 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items: center; justify-content:center;"
                        >
                        <video width="90%" height="auto" src="/circle_demo/circle_anime.mp4" type="video/mp4" autoplay={current >= 3} muted ></video>
                    </p>
                    
                {/if}
                {#if !presentationMode || current >= 4}
                    <h2 
                        class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >How is a parabola created?</h2>
                    <p 
                        class="{presentationMode && isActive === 4 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items: center; justify-content:center;"
                        >
                        <video width="90%" height="auto" src="/circle_demo/parabola_anime.mp4" type="video/mp4" autoplay={current >= 4} muted ></video>
                    </p>
                    
                {/if}
                {#if !presentationMode || current >= 5}
                    <h2 
                        class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >How is an ellipse created?</h2>
                    <p 
                        class="{presentationMode && isActive === 5 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items: center; justify-content:center;"
                        >
                        <video width="90%" height="auto" src="/circle_demo/ellipse_anime.mp4" type="video/mp4" autoplay={current >= 5} muted ></video>
                    </p>
                    
                {/if}
                {#if !presentationMode || current >= 6}
                    <h2 
                        class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >How is a hyperbola created?</h2>
                    <p 
                        class="{presentationMode && isActive === 6 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items: center; justify-content:center;"
                        >
                        <video width="90%" height="auto" src="/circle_demo/hyperbola_anime.mp4" type="video/mp4" autoplay={current >= 6} muted ></video>
                    </p>
                    
                {/if}
                {#if !presentationMode || current >= 7}
                    <h2 
                        class="{presentationMode && isActive === 7 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        >General Equation</h2>
                {/if}
                {#if !presentationMode || current >= 8}
                    <p 
                        class="{presentationMode && isActive === 8 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items:center;">
                        <span>
                            General equation of a plane: \(ax + by + cz + d = 0\)
                        </span>
                        <figure>
                            <img width="300px" src="/circle_demo/Plane.png" alt="">
                        </figure>
                    </p>
                {/if}
                {#if !presentationMode || current >= 9}
                    <p 
                        class="{presentationMode && isActive === 9 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}
                        style="display:flex; align-items:center;">
                        <span>
                            Equation of a cone with vertex at the origin and axis along \(z\)-axis: \(x^2 + y^2 = z^2\tan^2\alpha\)
                        </span>
                        <figure>
                            <img width="300px" src="/circle_demo/Cone-equation.png" alt="">
                        </figure>
                    </p>
                {/if}
                {#if !presentationMode || current >= 10}
                    <p 
                        class="{presentationMode && isActive === 10 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        Substitute
                            {`\\(
                                z = -\\dfrac{ax + by + d}{c}
                                \\)`}
                        
                    </p>
                {/if}
                {#if !presentationMode || current >= 11}
                    <p 
                        class="{presentationMode && isActive === 11 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        General equation of conic can be written as 
                        \(Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0\)
                    </p>
                {/if}
                {#if !presentationMode || current >= 12}
                    <p 
                        class="{presentationMode && isActive === 12 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        Discriminant: \(G = B^2 - 4AC\) 
                    </p>
                {/if}
                {#if !presentationMode || current >= 13}
                    <p 
                        class="{presentationMode && isActive === 13 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        {`\\(\\bullet ~~G<0\\)`} implies that the equation is an ellipse. 
                    </p>
                {/if}
                {#if !presentationMode || current >= 14}
                    <p 
                        class="{presentationMode && isActive === 14 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        {`\\(~~\\bullet ~~B = 0, A = C\\)`} implies that the equation is a circle. 
                    </p>
                {/if}
                {#if !presentationMode || current >= 15}
                    <p 
                        class="{presentationMode && isActive === 15 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        {`\\(\\bullet ~~G=0\\)`} implies that the equation is a parabola. 
                    </p>
                {/if}
                {#if !presentationMode || current >= 16}
                    <p 
                        class="{presentationMode && isActive === 16 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        {`\\(\\bullet ~~G>0\\)`} implies that the equation is a hyberbola. 
                    </p>
                {/if}
                {#if !presentationMode || current >= 17}
                    <p 
                        class="{presentationMode && isActive === 17 ? 'currentActive': ''}" 
                        transition:fly="{{ x: 200, duration: 1000 }}"
                        on:introstart={() => {isActive = -1}}
                        on:introend={() => {isActive = current}}
                        on:outroend={() => {isActive = -1}}>
                        {`\\(~~\\bullet ~~A = -C\\)`} implies that the equation is a rectangular hyperbola. 
                    </p>
                {/if}
                <section>
                    {#if !presentationMode || current >= 18}
                        <h2 
                            class="{presentationMode && isActive === 18 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            >Circle at origin</h2>
                    {/if}
                    {#if !presentationMode || current >= 19}
                        <img width="300px" style="float: right;" 
                            class="{presentationMode && isActive === 10 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            src="/circle_demo/circle.png"
                            >
                    {/if}
                    {#if !presentationMode || current >= 20}
                        <p 
                            class="{presentationMode && isActive === 20 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Equation of a circle with center at the origin and radius \(r\) is \(x^2 + y^2 = r^2\). 
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 21}
                        <p 
                            class="{presentationMode && isActive === 21 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Any point on this circle can be given by \((r\cos\theta, r\sin\theta)\). 
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 22}
                        <p 
                            class="{presentationMode && isActive === 22 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            General equation of a circle is \(x^2 + y^2 + 2gx + 2hy + c = 0\).
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 23}
                        <p 
                            class="{presentationMode && isActive === 23 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Which can be written as \((x+g)^2 + (y + h)^2 = g^2 + h^2 - c\).
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 24}
                        <p 
                            class="{presentationMode && isActive === 24 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Its center is at \((-g, -h)\) and radius is {`\\(r = \\sqrt{g^2 + h^2 -c}\\)`}.
                        </p>
                    {/if}
                </section>
                <section>
                    {#if !presentationMode || current >= 25}
                        <br><br><br>
                        <h2 
                            class="{presentationMode && isActive === 25 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            >Circle through 3 points</h2>
                    {/if}
                    {#if !presentationMode || current >= 26}
                        <img width="350px" style="float: right;" 
                            class="{presentationMode && isActive === 26 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            src="/circle_demo/threepointcircle.png"
                            >
                    {/if}
                    {#if !presentationMode || current >= 27}
                        <p 
                            class="{presentationMode && isActive === 27 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Find the center and radius. 
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 28}
                        <p 
                            class="{presentationMode && isActive === 28 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Center is at the intersection of perpendicular bisectors 
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 29}
                        <p 
                            class="{presentationMode && isActive === 29 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Bisector of AB {`
                            \\[\\frac{y - (y_1 + y_2)/2}{x - (x_1 + x_2)/2} = - \\frac{x_2 - x_1}{y_2-y_1}\\]`}
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 30}
                        <p 
                            class="{presentationMode && isActive === 30 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Bisector of AC {`
                            \\[\\frac{y - (y_1 + y_3)/2}{x - (x_1 + x_3)/2} = - \\frac{x_3 - x_1}{y_3-y_1}\\]`}
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 31}
                        <p 
                            class="{presentationMode && isActive === 31 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Solve the above equation to get the center.
                        </p>
                    {/if}
                </section>
                <section>
                    {#if !presentationMode || current >= 32}
                        <br><br><br>
                        <h2 
                            class="{presentationMode && isActive === 32 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            >Tangent to a circle</h2>
                    {/if}
                    {#if !presentationMode || current >= 33}
                        <img width="350px" style="float: right;" 
                            class="{presentationMode && isActive === 33 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            src="/circle_demo/Tangents.png"
                            >
                    {/if}
                    {#if !presentationMode || current >= 34}
                        <p 
                            class="{presentationMode && isActive === 34 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Let a tangent can be written as \(y = mx + c\)
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 35}
                        <p 
                            class="{presentationMode && isActive === 35 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Substitute \(y\) into \(x^2 + y^2 = r^2\) \[x^2 + (mx + c)^2 = r^2\]
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 36}
                        <p 
                            class="{presentationMode && isActive === 36 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Require that the discriminant be \(D = 0\)
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 37}
                        <p 
                            class="{presentationMode && isActive === 37 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Solve to get two values of \(m\)
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 38}
                        <p 
                            class="{presentationMode && isActive === 38 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            For each \(m\): \(c = y_1 - mx_1 \)
                        </p>
                    {/if}
                </section>
                <section>
                    {#if !presentationMode || current >= 39}
                        <br><br><br>
                        <div class="pad"></div>
                        <h2 
                            class="{presentationMode && isActive === 39 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            >Example</h2>
                    {/if}
                    {#if !presentationMode || current >= 40}
                        <p 
                            class="question {presentationMode && isActive === 40 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Consider a triangle \(\Delta\) whose two sides lie on the \(x\)-axis and the line \(x + y + 1 = 0\). If the orthocenter of \(\Delta\) is \((1, 1)\), then find the equation of the circle passing through the vertices of the triangle \(\Delta\).
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 41}
                        <img width="350px" style="float: right;" 
                            class="{presentationMode && isActive === 41 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            src="/circle_demo/orthocenter.png"
                            >
                    {/if}
                    {#if !presentationMode || current >= 42}
                        <h4 
                            class="{presentationMode && isActive === 42 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Claim:
                        </h4>
                        <p 
                            class="{presentationMode && isActive === 43 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Image of orthocenter about any side of the triangle lies on its circumcircle.
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 44}
                        <h4 
                            class="{presentationMode && isActive === 44 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            proof:
                        </h4>
                        
                    {/if}
                    {#if !presentationMode || current >= 45}
                        <div class="pad"></div>
                        <div class="pad"></div>
                        <div class="pad"></div>
                        <img width="70%" style="float: right;" 
                            class="{presentationMode && isActive === 45 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            src="/circle_demo/IIT21Q1.png"
                            >
                    {/if}
                </section>
                {#if presentationMode && current > 6}
                    <div class="pad"></div>
                {/if}
            </section>
            
            <!-- {#if !presentationMode}
            <section>
                <h1>Alternate Solution</h1>
    
            </section>
                
            {/if} -->
        </article>
        {#if presentationMode}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <aside use:ripple class="next" on:click={next}></aside>
        {/if}
    </div>
    
    