<script>
    // @ts-nocheck
    
        import Select from "$lib/ui/Select.svelte";
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
        import { page } from '$app/stores'
        import { goto } from "$app/navigation";
        import {afterUpdate, beforeUpdate, onMount, tick} from 'svelte';
        import CanvasBar from '$lib/canvas/CanvasBar.svelte';
        import Canvas from '$lib/canvas/Canvas.svelte';
        import {ripple} from '$lib/ui/ripple';
        const makeSmallLetter = (str) => {
            if(str.length <= 0) return str;
            return str[0].toLowerCase() + str.slice(1);
        }
        const chapterSelected = (event) => {
            $selectedSection = sections[$selectedChapter][0];
        }
        const sectionSelected = (event) => {
            goto(`/notes/maths/${encodeURIComponent($selectedChapter)}/${encodeURIComponent($selectedSection)}`);
            // console.log($page.url.pathname.split('/').map(item => decodeURIComponent(item)))
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
                $presentation.scrollTo({
                    top: $presentation.scrollHeight,
                    left: 0,
                    behaviour: 'smooth'
                });
                $overlay.scrollTo({
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
    </script> 
    <style>
        nav {
            display: grid;
            grid-template-columns: 1fr 1fr;
            /* margin:auto; */
            /* margin-top: 0.5em; */
            max-width: 600px;
        }
        .maths {
            /* max-width: 600px; */
            margin: auto;
            font-family: 'Georgia', serif;
            line-height: 1.5;
            word-spacing: 0.5ex;
        }
        .presentationMode {
            display: flex;
            /* gap: 1em; */
            height: 1em;
            margin: 0.5em;
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
            height: min(78vh, 60vw);
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
    </style>
    <svelte:head>
        <!-- <script defer src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js"></script> -->
    </svelte:head>
        
    <div class="maths"> 
        <div class="presentationMode">
            <label style="display:flex;align-items:center;">
                <input type="checkbox" bind:checked={$presentationMode}> <span class="material-icons">slideshow</span>
            </label>
            {#if !$presentationMode}
                <nav>
                    <Select options={chapters} bind:value={$selectedChapter} label="Chapter" on:selected={chapterSelected}/>
                    <Select options={sections[$selectedChapter]} bind:value={$selectedSection} label="Section" on:selected={sectionSelected}/>
                </nav>
            {/if}
            {#if $presentationMode}
                <CanvasBar/>
            {/if}
        </div>
        <div class="container" bind:clientWidth={W} bind:clientHeight={H}>
            {#if $presentationMode}
        
                <aside use:ripple class="back" on:click={back}></aside>
            {/if}
            {#if !$presentationMode}
                <span bind:this={$overlay}></span>
            {/if}
            {#if $presentationMode}
                <div class="absolute overlay" bind:this={$overlay}>
                    <Canvas width={W} height={10000}/>
                </div>
                
            {/if}
            <slot />
            {#if $presentationMode}
        
                <aside use:ripple class="next" on:click={next}></aside>
            {/if}
        </div>
    </div>
    