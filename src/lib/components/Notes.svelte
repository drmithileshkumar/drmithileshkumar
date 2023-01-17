
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
        import P from '$lib/presentation/P.svelte';
        import H1 from '$lib/presentation/H1.svelte';
        import H2 from '$lib/presentation/H2.svelte';
        import H3 from '$lib/presentation/H3.svelte';
        import Li from '$lib/presentation/Li.svelte';
        import Item from '$lib/presentation/Item.svelte';
        import Image from '$lib/presentation/Image.svelte';
        onMount(() => {
            $selectedChapter = 'Sets';
            $selectedSection = 'The empty set';
            $slideCounter = 12;
            $currentSlide = -2;
            MathJax.typeset();
        });
    </script>
    <a href="/notes/maths/Sets/Introduction" class="notes">Lecture of the day</a>
    <article class:absolute={$presentationMode} bind:this={$presentation}>
        {#if $presentationMode && $currentSlide === -2}
            <div class="thumbnail">
               
                <p class="statement">
                    The empty set
                </p>
                
            </div>
        {/if}
        {#if !$presentationMode || $currentSlide >= -1}
            <h1>{$selectedSection}</h1>
        {/if}
        <section>
            <Item item={0}>
                <P isActive={0}>
                    The simplest possible set is one that does not contain any element at all.
                </P>
            </Item>
            <Item item={1}>
                <P class="definition" isActive={1}>
                    A set which does not contain any element is called the <strong>empty</strong> set.
                </P>
            </Item>
            <ul>
            <Item item={2}>
                <Li isActive={2}>
                    An empty set is also called the <em>null set</em> or the <em>void set</em>.
                </Li>
            </Item>
            <Item item={3}>
                <Li isActive={3}>
                    An empty set is denoted either as {'{ }'} or \(\varphi\) (read as "phi").
                </Li>
            </Item>
        </ul>
        </section>
        <section>
            <Item item={4}>
                <H3 class="examples" isActive={4}>
                    Examples
                </H3>
            </Item>
            <ul>
                <Item item={5}>
                    <Li isActive={5}>
                        The set of positive numbers less than 0 contains no element. Hence, it is an empty set
                    </Li>
                </Item>
                <Item item={6}>
                    <Li isActive={6}>
                        The set of apples in an empty basket is an empty set.
                    </Li>
                </Item>
                <Item item={7}>
                    <Li isActive={7}>
                        Set of prime numbers divisible by 4 is an empty set.
                    </Li>
                </Item>
                <Item item={8}>
                    <Li isActive={8}>
                        The set of real roots of the equation \(x^2 + 1 = 0\) is an empty set.
                    </Li>
                </Item>
            </ul>
        </section>
    </article>
    
    <style>
        .notes {
            font-size: 1.2em;
            background-color: green;
            color: white;
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
            background: radial-gradient(#6000c091, rgb(0, 93, 180));
            color: rgb(246, 246, 246);
            text-shadow: 1px 1px 3px rgb(4, 4, 4);
            box-shadow: 1px 1px 3px rgb(129, 128, 128);
            padding: 1em;
        }
    </style>