
<script id="MathJax-script">
    // @ts-nocheck
        import {fade, fly} from 'svelte/transition';
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        import {goto} from '$app/navigation';
        onMount(() => {
            $selectedChapter = 'Sets';
            $selectedSection = 'Finite and Infinite set';
            $slideCounter = 12;
            $currentSlide = -2;
            MathJax.typeset();
        });
    </script>
    <a href="/notes/maths" class="notes">Lecture of the day</a>
    <article on:click={() => goto(`/notes/maths`)} class:absolute={$presentationMode} bind:this={$presentation}>
        <div class="thumbnail">
            <div class="statement">
                <p>
                    Why is empty set subset of every set?
                </p>
            </div>
        </div>
    </article>
    
    
    <style>
        .notes {
            font-size: 1.2em;
            background-color: green;
            color: black;
            padding: 0.5em 1em;
            border-radius: 10px;
        }
        article {
            position: relative;
            padding: 0.5em;
            max-height: 400px;
            overflow: hidden;
            padding: 1em 1em;
            background-color: rgba(110, 120, 150, 0.3);
            /* margin: 1em; */
            border-radius: 10px;
            /* in: all 1s; */
            cursor: pointer;
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
        /*  
        figure {
            
            width: 300px;
        } */
       
        .thumbnail {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5em;
            height: 100%;
            
        }
        .statement {
            background: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));
            color: black;
            text-shadow: 1px 1px 3px rgb(4, 4, 4);
            box-shadow: 1px 1px 3px rgb(129, 128, 128);
            padding: 1em;
            background-image: url('/notes/maths/sets/subsets/thumbnail.svg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    </style>