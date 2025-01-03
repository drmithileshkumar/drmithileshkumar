<script>
    // @ts-nocheck

        import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
        import { page } from '$app/stores'
        import { goto } from "$app/navigation";
        import { browser } from '$app/environment';
        import {afterUpdate, beforeUpdate, onMount, tick} from 'svelte';
        import CanvasBar from '$lib/canvas/CanvasBar.svelte';
        import Canvas from '$lib/canvas/Canvas.svelte';
        import {ripple} from '$lib/ui/ripple';
	    import Presenter from "$lib/canvas/Presenter.svelte";
        const makeSmallLetter = (str) => {
            if(str.length <= 0) return str;
            return str[0].toLowerCase() + str.slice(1);
        }
        
        let W, H;
        beforeUpdate(() => {
            if($presentation) {
                // autoscroll = presentation && (presentation.offsetHeight + presentation.scrollTop) > (presentation.scrollHeight - 40);
                $autoScroll = true;
            }
            
        })
        afterUpdate( async () => {
            if($autoScroll) setTimeout(async () => {
                MathJax.typeset();
                if($presentation) $presentation.scrollTo({
                    top: $presentation.scrollHeight,
                    left: 0,
                    behaviour: 'smooth'
                });
                if($overlay && $presentation) $overlay.scrollTo({
                    top: $presentation.scrollHeight,
                    left: 0,
                    behaviour: 'smooth'
                });
            }, 0)
            
        })
        const back = () => {
            if($currentSlide >= 0) $currentSlide--;
            setTimeout(() => { MathJax.typeset();}, 0)
        }
        const next = () => {
            if($currentSlide < $slideCounter - 1) {
                $currentSlide++;
                setTimeout(() => { MathJax.typeset();}, 0)
            }
        }
        const preventD = (evt) => {
            evt.preventDefault();
        }
        const noContextMenu = () => {
            $currentSlide = -2;
            if($presentationMode) {
                document.addEventListener("contextmenu", preventD, false);
                document.body.classList.add('noMenu');
            } else {
                document.removeEventListener("contextmenu", preventD);
                document.body.classList.remove('noMenu');
            }
        }
    </script> 
    <style>
        /* nav {
            display: grid;
            grid-template-columns: auto 1fr;
            max-width: 600px;
        } */
        .maths {
            /* max-width: 600px; */
            width:100%;
            margin: auto;
            font-family: 'Georgia', serif;
            line-height: 1.5;
            word-spacing: 0.5ex;

        }
        .presentationMode {
            display: flex;
            /* gap: 1em; */
            height: 1em;
            margin: 0.5em 0;
            align-items: center;
            flex-direction: row;
        }
        .container {
            /* display: flex; */
            display: grid;
            grid-template-columns: 1em 1fr 1em;
            position: relative;
            
        }
        aside {
            background-color: rgb(230, 228, 228);
            cursor: pointer;
            width: 1em;
        }
        .overlay {
            position: absolute;
            z-index: 2;
            left: 0.5em;
            top: 0;
            margin: auto;
            width: calc(100% - 2em);
            /* height: min(78vh, 60vw); */
            height: 90vh;
            /* height: min(70vh,600px); */
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            /* padding: 0 1em 0 1em; */
        }
        .overlay::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
        .presenter {
            position: absolute;
            right: 35px;
            top: 0;
            z-index: 10;
        }
        /* .noMenu {
            touch-action: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
        } */
    </style>
    <svelte:head>
        <!-- <script defer src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js"></script> -->
    </svelte:head>
        
    <div class="maths {$presentationMode ? 'noMenu':''}"> 
        <div class="presentationMode">
            <label style="display:flex;align-items:center;">
                <input type="checkbox" bind:checked={$presentationMode} on:change={noContextMenu}> <span class="material-icons">slideshow</span>
            </label>
            {#if $presentationMode}
                <CanvasBar/>
            {/if}
        </div>
        <div class="container {$presentationMode ? 'noMenu':''}" bind:clientWidth={W} bind:clientHeight={H}>
            {#if $presentationMode}
        
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <aside use:ripple class="back noMenu" on:click={back}></aside>
            {/if}
            {#if !$presentationMode}
                <span class="noMenu" bind:this={$overlay}></span>
            {/if}
            {#if $presentationMode}
                <div class="absolute overlay noMenu" bind:this={$overlay}>
                    <Canvas width={W} height={10000}/>
                    
                </div>
                <div class="presenter noMenu">
                    <Presenter />
                </div>
            {/if}
            <slot class="{$presentationMode ? 'noMenu':''}" />
            {#if $presentationMode}
        
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <aside use:ripple class="next noMenu" on:click={next}></aside>
            {/if}
        </div>
    </div>
    