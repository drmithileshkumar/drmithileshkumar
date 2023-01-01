<script id="MathJax-script">
    // @ts-nocheck
        
        import {page} from '$app/stores';
        import {fade, fly} from 'svelte/transition';
        import {afterUpdate, beforeUpdate, onMount, tick} from 'svelte';
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
        let counter = 45;
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
                <figure 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = current}}
                    on:outroend={() => {isActive = -1}}
                    style="display:flex;align-items:center;justify-content:center;flex-direction:column;width: 90%; height: auto;"
                    >
                    
                    <svg width="100%" height="100%" viewBox="-435.7499694824219 -414.5 850 350" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs><g>
                                <g  
                                    class='draggable'
                                    id='Layer-WebdutTeam23R88-0'
                                    fill='none'
                                    stroke='none'
                                    stroke-width='0'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    mask='none'
                                    filter='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                >
                                
                                <g  
                                    class='draggable'
                                    id='Group-WebdutTeam23R88-6'
                                    fill='rgba(0, 0, 0, 0)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    mask='none'
                                    filter='none'
                                    transform='matrix(1 0 0 1 -174 16)'
                                >
                                
                                <circle  
                                    id='Circle-WebdutTeam23R88-2'
                                    cx='0'
                                    cy='0'
                                    r='100'
                                    fill='rgba(255, 255, 255, 0.3)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    transform='matrix(1.0999999999999996 0 0 0.3050000000000011 -97.00000000000003 -292.4999999999999)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-3'
                                    d='M -206.5,-289 L -95,-93 L 12,-289'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-4'
                                    d='M -95,-94 V -420'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='4 4'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                />
                                </g>
                                <circle  
                                    id='Circle-WebdutTeam23R88-8'
                                    cx='0'
                                    cy='0'
                                    r='100'
                                    fill='rgba(255, 255, 255, 0.3)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    transform='matrix(1.0999999999999996 0 0 0.3050000000000011 -25.00000000000003 -275.4999999999999)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-9'
                                    d='M -206.5,-289 L -95,-93 L 12,-289'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 72 17)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-10'
                                    d='M -95,-94 V -420'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='4 4'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 72 17)'
                                />
                                
                                <circle  
                                    id='Circle-WebdutTeam23R88-11'
                                    cx='0'
                                    cy='0'
                                    r='100'
                                    fill='rgba(255, 255, 255, 0.3)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='5'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    transform='matrix(0.6361475409836084 0 0 0.17638636363636487 -24.106557377049214 -192.3613636363635)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-12'
                                    d='M -220,26 H 32 L -3,80 H -256 L -220,26 Z'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 89 -245.5)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-12'
                                    d='M -220,26 H 32 L -3,80 H -256 L -220,26 Z'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 89 -245.5)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-13'
                                    d='M -220,26 H 32 L -3,80 H -256 L -220,26 Z'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 -158 -406)'
                                />
                                
                                <g  
                                    class='draggable'
                                    id='Group-WebdutTeam23R88-14'
                                    fill='rgba(0, 0, 0, 0)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    mask='none'
                                    filter='none'
                                    transform='matrix(1 0 0 1 323 18)'
                                >
                                
                                <circle  
                                    id='Circle-WebdutTeam23R88-15'
                                    cx='0'
                                    cy='0'
                                    r='100'
                                    fill='rgba(255, 255, 255, 0.3)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    transform='matrix(1.0999999999999996 0 0 0.3050000000000011 -97.00000000000003 -292.4999999999999)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-16'
                                    d='M -206.5,-289 L -95,-93 L 12,-289'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-17'
                                    d='M -95,-94 V -420'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='4 4'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                />
                                </g>
                                <path  
                                    id='Path-WebdutTeam23R88-18'
                                    d='M -220,26 H 32 L -3,80 H -256 L -220,26 Z'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(0.8009270936059828 0.5987618814920281 -0.5987618814920281 0.8009270936059828 382.438215234024 -259.38780327602353)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-18'
                                    d='M -220,26 H 32 L -3,80 H -256 L -220,26 Z'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(0.8009270936059828 0.5987618814920281 -0.5987618814920281 0.8009270936059828 382.438215234024 -259.38780327602353)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-18'
                                    d='M -220,26 H 32 L -3,80 H -256 L -220,26 Z'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(0.8009270936059828 0.5987618814920281 -0.5987618814920281 0.8009270936059828 382.438215234024 -259.38780327602353)'
                                />
                                
                                <path  
                                    id='Path-WebdutTeam23R88-19'
                                    d='M -293.5,74.5 Q -197.5,106.8 -276,21'
                                    fill='rgba(0, 0, 0, 0)'
                                    fill-rule='evenodd'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='2'
                                    stroke-dasharray='none'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-miterlimit='4'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    marker-start='none'
                                    marker-mid='none'
                                    marker-end='none'
                                    transform='matrix(1 0 0 1 560 -321)'
                                />
                                </g></g></svg>
                </figure>
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
                        <video width="90%" height="auto" src="/circle_demo/Conic_anime.mp4" type="video/mp4" autoplay={current >= 1} muted loop={current >= 1 && current < 2}></video>
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
                        <video width="90%" height="auto" src="/circle_demo/Conic_deg.mp4" type="video/mp4" autoplay={current >= 2} muted loop={current >= 2 && current < 3}></video>
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
                        <video width="90%" height="auto" src="/circle_demo/circle_anime.mp4" type="video/mp4" autoplay={current >= 3} muted loop={current >= 3 && current < 4}></video>
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
                        <video width="90%" height="auto" src="/circle_demo/parabola_anime.mp4" type="video/mp4" autoplay={current >= 4} muted loop={current >= 4 && current < 5}></video>
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
                        <video width="90%" height="auto" src="/circle_demo/ellipse_anime.mp4" type="video/mp4" autoplay={current >= 5} muted loop={current >= 5 && current < 6}></video>
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
                        <video width="90%" height="auto" src="/circle_demo/hyperbola_anime.mp4" type="video/mp4" autoplay={current >= 6} muted loop={current >= 6 && current < 7}></video>
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
                        <figure width="450px" style="float: right;" 
                            class="{presentationMode && isActive === 41 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            >
                            <svg width="100%" height="100%" viewBox="-262.5 -240 450 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs></defs><g>
                                        <g  
                                            class='draggable'
                                            id='Layer-WebdutTeam22R30-0'
                                            fill='none'
                                            stroke='none'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            mask='none'
                                            filter='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        >
                                        
                                        <circle  
                                            id='Circle-WebdutTeam22R30-2'
                                            cx='0'
                                            cy='0'
                                            r='200'
                                            fill='rgba(255, 255, 255, 0.3)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 -41 -22)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-3'
                                            d='M -158,-184.5 L -197,103.5 H 114.5 L -158,-184.5 Z'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-4'
                                            d='M -253,152.5 L 146,-197.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-5'
                                            d='M -165,-234.5 V 224.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 7 5)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-6'
                                            d='M -204,-187.5 L 178,-153.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-7'
                                            d='M -158,87.5 H -140.5 V 103.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-8'
                                            d='M -40,-34.5 L -28,-21.75 L -15,-33.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-9'
                                            d='M -158,30.5 A 44.38160916274095 44.38160916274095 0 0 1 -128.5,43'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-10'
                                            d='M 84.5,71.75 A 41.8940195628719 41.8940195628719 0 0 0 71.5,103.75M 66,-163.25 A 37.00441168818502 37.00441168818502 0 0 0 76,-135.25'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-11'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -187 72)'
                                        ><defs><path id="MJX-15115-TEX-I-1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D43A" xlink:href="#MJX-15115-TEX-I-1D43A"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-12'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 98 -174)'
                                        ><defs><path id="MJX-15116-TEX-I-1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D43C" xlink:href="#MJX-15116-TEX-I-1D43C"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-13'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -184 -189)'
                                        ><defs><path id="MJX-15117-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D434" xlink:href="#MJX-15117-TEX-I-1D434"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-14'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -235 112)'
                                        ><defs><path id="MJX-15118-TEX-I-1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D435" xlink:href="#MJX-15118-TEX-I-1D435"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-15'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 123 111)'
                                        ><defs><path id="MJX-15119-TEX-I-1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D436" xlink:href="#MJX-15119-TEX-I-1D436"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-16'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -67 -37)'
                                        ><defs><path id="MJX-15120-TEX-I-1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D437" xlink:href="#MJX-15120-TEX-I-1D437"></use></g></g></g>
                                        </g>
                                        
                                        <circle  
                                            id='Circle-WebdutTeam22R30-17'
                                            cx='0'
                                            cy='0'
                                            r='5'
                                            fill='rgba(255, 0, 0, 1)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 -158.5 69)'
                                        />
                                        
                                        <circle  
                                            id='Circle-WebdutTeam22R30-18'
                                            cx='0'
                                            cy='0'
                                            r='5'
                                            fill='rgba(255, 0, 0, 1)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 103.5 -160.5)'
                                        />
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-19'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 54 91)'
                                        ><defs><path id="MJX-15121-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-15121-TEX-I-1D703"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-22'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -145 28)'
                                        ><defs><path id="MJX-15122-TEX-I-1D6FC" d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D6FC" xlink:href="#MJX-15122-TEX-I-1D6FC"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam22R30-23'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 44 -133)'
                                        ><defs><path id="MJX-15123-TEX-I-1D6FD" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D6FD" xlink:href="#MJX-15123-TEX-I-1D6FD"></use></g></g></g>
                                        </g>
                                        
                                        <path  
                                            id='Path-WebdutTeam22R30-24'
                                            d='M -159,-183.5 A 199.71873145485927 199.71873145485927 0 0 0 -197,102.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='4'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        </g></g></svg>
                        </figure>
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
                            class="{presentationMode && isActive === 42 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            Image of orthocenter about any side of the triangle lies on its circumcircle.
                        </p>
                    {/if}
                    {#if !presentationMode || current >= 43}
                        <h4 
                            class="{presentationMode && isActive === 43 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}>
                            proof:
                        </h4>
                        
                    {/if}
                    {#if !presentationMode || current >= 44}
                        <div class="pad"></div>
                        <div class="pad"></div>
                        <div class="pad"></div>
                        <figure width="70%" style="float: right;" 
                            class="{presentationMode && isActive === 45 ? 'currentActive': ''}" 
                            transition:fly="{{ x: 200, duration: 1000 }}"
                            on:introstart={() => {isActive = -1}}
                            on:introend={() => {isActive = current}}
                            on:outroend={() => {isActive = -1}}
                            >
                            <svg width="100%" height="100%" viewBox="-330.18499755859375 -264.5 500 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs></defs><g>
                                        <g  
                                            class='draggable'
                                            id='Layer-WebdutTeam21R45-0'
                                            fill='none'
                                            stroke='none'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            mask='none'
                                            filter='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        >
                                        
                                        <circle  
                                            id='Circle-WebdutTeam21R45-2'
                                            cx='0'
                                            cy='0'
                                            r='100'
                                            fill='rgba(255, 255, 255, 0.3)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 -72 -51)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam21R45-3'
                                            d='M -185,-203.5 L 75,45.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='2'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam21R45-4'
                                            d='M 15,-239.5 V 116.5'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 3 -3)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam21R45-5'
                                            d='M -245,-137.5 H 155'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='2'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 2 -2)'
                                        />
                                        
                                        <g  
                                            id='Latex-WebdutTeam21R45-6'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -276 -215)'
                                        ><defs><path id="MJX-5796-TEX-I-1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path><path id="MJX-5796-TEX-N-2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path><path id="MJX-5796-TEX-I-1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-5796-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path id="MJX-5796-TEX-N-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path id="MJX-5796-TEX-N-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D465" xlink:href="#MJX-5796-TEX-I-1D465"></use></g><g data-mml-node="mo" transform="translate(794.2,0)"><use data-c="2B" xlink:href="#MJX-5796-TEX-N-2B"></use></g><g data-mml-node="mi" transform="translate(1794.4,0)"><use data-c="1D466" xlink:href="#MJX-5796-TEX-I-1D466"></use></g><g data-mml-node="mo" transform="translate(2506.7,0)"><use data-c="2B" xlink:href="#MJX-5796-TEX-N-2B"></use></g><g data-mml-node="mn" transform="translate(3506.9,0)"><use data-c="31" xlink:href="#MJX-5796-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(4284.7,0)"><use data-c="3D" xlink:href="#MJX-5796-TEX-N-3D"></use></g><g data-mml-node="mn" transform="translate(5340.4,0)"><use data-c="30" xlink:href="#MJX-5796-TEX-N-30"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam21R45-7'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -318 -131)'
                                        ><defs><path id="MJX-5797-TEX-I-1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-5797-TEX-N-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path id="MJX-5797-TEX-N-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D466" xlink:href="#MJX-5797-TEX-I-1D466"></use></g><g data-mml-node="mo" transform="translate(767.8,0)"><use data-c="3D" xlink:href="#MJX-5797-TEX-N-3D"></use></g><g data-mml-node="mn" transform="translate(1823.6,0)"><use data-c="30" xlink:href="#MJX-5797-TEX-N-30"></use></g></g></g>
                                        </g>
                                        
                                        <circle  
                                            id='Circle-WebdutTeam21R45-8'
                                            cx='0'
                                            cy='0'
                                            r='5'
                                            fill='rgba(255, 0, 0, 1)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 -119 -140)'
                                        />
                                        
                                        <circle  
                                            id='Circle-WebdutTeam21R45-9'
                                            cx='0'
                                            cy='0'
                                            r='5'
                                            fill='rgba(255, 0, 0, 1)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 18 -8)'
                                        />
                                        
                                        <circle  
                                            id='Circle-WebdutTeam21R45-10'
                                            cx='0'
                                            cy='0'
                                            r='5'
                                            fill='rgba(255, 0, 0, 1)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 18 -95)'
                                        />
                                        
                                        <circle  
                                            id='Circle-WebdutTeam21R45-11'
                                            cx='0'
                                            cy='0'
                                            r='5'
                                            fill='rgba(255, 0, 0, 1)'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='0'
                                            stroke-dasharray='none'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            transform='matrix(1 0 0 1 18 -182.5)'
                                        />
                                        
                                        <g  
                                            id='Latex-WebdutTeam21R45-12'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 29 -181)'
                                        ><defs><path id="MJX-5798-TEX-N-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path><path id="MJX-5798-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path id="MJX-5798-TEX-N-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path id="MJX-5798-TEX-N-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><use data-c="28" xlink:href="#MJX-5798-TEX-N-28"></use></g><g data-mml-node="mn" transform="translate(389,0)"><use data-c="31" xlink:href="#MJX-5798-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(889,0)"><use data-c="2C" xlink:href="#MJX-5798-TEX-N-2C"></use></g><g data-mml-node="mn" transform="translate(1333.7,0)"><use data-c="31" xlink:href="#MJX-5798-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(1833.7,0)"><use data-c="29" xlink:href="#MJX-5798-TEX-N-29"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam21R45-13'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 27 -88)'
                                        ><defs><path id="MJX-5799-TEX-N-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path><path id="MJX-5799-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path id="MJX-5799-TEX-N-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path id="MJX-5799-TEX-N-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path><path id="MJX-5799-TEX-N-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><use data-c="28" xlink:href="#MJX-5799-TEX-N-28"></use></g><g data-mml-node="mn" transform="translate(389,0)"><use data-c="31" xlink:href="#MJX-5799-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(889,0)"><use data-c="2C" xlink:href="#MJX-5799-TEX-N-2C"></use></g><g data-mml-node="mo" transform="translate(1333.7,0)"><use data-c="2212" xlink:href="#MJX-5799-TEX-N-2212"></use></g><g data-mml-node="mn" transform="translate(2111.7,0)"><use data-c="31" xlink:href="#MJX-5799-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(2611.7,0)"><use data-c="29" xlink:href="#MJX-5799-TEX-N-29"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam21R45-14'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 33 -3)'
                                        ><defs><path id="MJX-5800-TEX-N-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path><path id="MJX-5800-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path id="MJX-5800-TEX-N-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path id="MJX-5800-TEX-N-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path><path id="MJX-5800-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path id="MJX-5800-TEX-N-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><use data-c="28" xlink:href="#MJX-5800-TEX-N-28"></use></g><g data-mml-node="mn" transform="translate(389,0)"><use data-c="31" xlink:href="#MJX-5800-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(889,0)"><use data-c="2C" xlink:href="#MJX-5800-TEX-N-2C"></use></g><g data-mml-node="mo" transform="translate(1333.7,0)"><use data-c="2212" xlink:href="#MJX-5800-TEX-N-2212"></use></g><g data-mml-node="mn" transform="translate(2111.7,0)"><use data-c="32" xlink:href="#MJX-5800-TEX-N-32"></use></g><g data-mml-node="mo" transform="translate(2611.7,0)"><use data-c="29" xlink:href="#MJX-5800-TEX-N-29"></use></g></g></g>
                                        </g>
                                        
                                        <g  
                                            id='Latex-WebdutTeam21R45-15'
                                            fill='rgba(0, 0, 0, 1)'
                                            stroke='undefined'
                                            stroke-width='undefined'
                                            stroke-dasharray='undefined'
                                            opacity='1'
                                            filter='none'
                                            mask='undefined'
                                            transform='matrix(0.03 0 0 0.03 -139 -162)'
                                        ><defs><path id="MJX-5801-TEX-N-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path><path id="MJX-5801-TEX-N-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path><path id="MJX-5801-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path id="MJX-5801-TEX-N-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path id="MJX-5801-TEX-N-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path id="MJX-5801-TEX-N-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><use data-c="28" xlink:href="#MJX-5801-TEX-N-28"></use></g><g data-mml-node="mo" transform="translate(389,0)"><use data-c="2212" xlink:href="#MJX-5801-TEX-N-2212"></use></g><g data-mml-node="mn" transform="translate(1167,0)"><use data-c="31" xlink:href="#MJX-5801-TEX-N-31"></use></g><g data-mml-node="mo" transform="translate(1667,0)"><use data-c="2C" xlink:href="#MJX-5801-TEX-N-2C"></use></g><g data-mml-node="mn" transform="translate(2111.7,0)"><use data-c="30" xlink:href="#MJX-5801-TEX-N-30"></use></g><g data-mml-node="mo" transform="translate(2611.7,0)"><use data-c="29" xlink:href="#MJX-5801-TEX-N-29"></use></g></g></g>
                                        </g>
                                        
                                        <path  
                                            id='Path-WebdutTeam21R45-16'
                                            d=''
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        
                                        <path  
                                            id='Path-WebdutTeam21R45-17'
                                            d='M 18.166666666666686,-150.75 H 30.833333333333314 V -139.58333333333334'
                                            fill='rgba(0, 0, 0, 0)'
                                            fill-rule='evenodd'
                                            stroke='rgba(0, 0, 0, 1)'
                                            stroke-width='1'
                                            stroke-dasharray='none'
                                            stroke-linecap='butt'
                                            stroke-linejoin='miter'
                                            stroke-miterlimit='4'
                                            opacity='1'
                                            filter='none'
                                            mask='none'
                                            marker-start='none'
                                            marker-mid='none'
                                            marker-end='none'
                                            transform='matrix(1 0 0 1 0 0)'
                                        />
                                        </g></g></svg>
                        </figure>
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
    
    