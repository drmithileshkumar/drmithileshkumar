
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
    import Li from '$lib/presentation/Li.svelte';
    import Item from '$lib/presentation/Item.svelte';
	import Image from '$lib/presentation/Image.svelte';
    onMount(() => {
        $selectedChapter = 'Sets';
        $selectedSection = 'Introduction';
        $slideCounter = 12;
        $currentSlide = -2;
        MathJax.typeset();
    });
</script>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="Introduction to sets" />
    
</svelte:head>

<article class:absolute={$presentationMode} bind:this={$presentation}>
    {#if $presentationMode && $currentSlide === -2}
        <div class="thumbnail">
            <p 
                class="statement" 
                >
                {`\\(\\{x:x\\)`} is the foundation of mathematics{`\\(\\}\\)`}
            </p>
        </div>
    {/if}
    {#if !$presentationMode || $currentSlide >= -1}
        <h1>{$selectedSection}</h1>
    {/if}
    <section>
        <Item item={0}>
            <P isActive={0}>
                There are various branches of mathematics:
            </P>
        </Item>
        <table>
            <tr>
                <td>
                    <Item item={2}>
                        <P isActive={2}>Set theory connects them all.</P>
                    </Item>
                </td>
                <td>
                    <ul style="border-left: 1px solid">
                        <Item item={1}>
                            <Li isActive={1}>
                                <strong>Algebra:</strong> Numbers, Sequences and Series, Quadratic equations, Linear equations
                            </Li>
                            <Li isActive={1}>
                                <strong>Geometry:</strong> Lines, Arcs, Quadrilaterals, Circles
                            </Li>
                            <Li isActive={1}>
                                <strong>Co-ordinate Geometry:</strong> Point, Distance, Lines, Section Formula
                            </Li>
                            <Li isActive={1}>
                                <strong>Trigonometry</strong>
                            </Li>
                            <Li isActive={1}>
                                <strong>Statistics and Probability</strong>
                            </Li>
                            <Li isActive={1}>
                                <strong>Vector algebra</strong>
                            </Li>
                            <Li isActive={1}>
                                <strong>Calculus</strong>
                            </Li>
                        </Item>
                    </ul>
                </td>
            </tr>
        </table>
        <Item item={3}>
            <P isActive={3}>
                Set theory is the starting point in all these branches and many more. In set theory, we study about sets. The concept of sets is even more basic than the concept of numbers. Sets conceptualize the properties of objects.
            </P>
        </Item>
        <Item item={4}>
            <P isActive={4}>
                Consider \(1, 3, 5, 7, \dots\) and \(2, 4, 6, 8, \dots\) In the first group, only odd numbers are appearing and in the second group, only even numbers are appearing. We say that \(1, 3, 5, 7,\dots\) is a collection of odd numbers and \(2, 4, 6, 8, \dots\) is a collection of even numbers. This chapter is about the study of collection of objects that satisfy some property.
            </P>
            <Image isActive={4}>
                <img src="/notes/maths/sets/introduction/oddeven.svg" alt="">
            </Image>
            
        </Item>
        <Item item={5}>
            <P isActive={5}>
                Such kind of collections are called <em>sets</em>. 
            </P>
        </Item>
        <Item item={6}>
            <P isActive={6}>
                We'll start with defining what is a set and see a few examples. After that we'll learn two ways to write sets. 
                {`\\[S = \\{1, 3, 5, 7,\\dots\\} = \\{x:x\\text{ is odd}\\}\\]`}
            </P>
        </Item>
        <Item item={7}>
            <P isActive={7}>
                Then, we'll define some special types of sets, like empty sets, finite and infinite sets, power and universal sets.
            </P>
        </Item>
        <Item item={8}>
            <P isActive={8}>
                After that we'll learn how to create new sets from a given set using various operations that will feel like addition or subtraction. Finally, we'll conclude the chapter by using the learnt concepts to solve problems like one described below.
            </P>
        </Item>
        <Item item={9}>
            <P isActive={9}>
                Consider the following problem.
            </P>
            <P isActive={9} class="question">
                In an IIT sports event, 50 medals were awarded in race, 30 in football and 25 in cricket. If only 60 students got any medal and only 5 students got medals in all events, how many received medals in exactly two of the events?
            </P>
        </Item>
        <Item item={10}>
            <P isActive={10}>
                This simple problem is tricky to solve without using the language of <strong>Sets</strong>.
            </P>
            <Image isActive={10}>
                <img src="/notes/maths/sets/introduction/example.svg" alt="">
            </Image>
        </Item>
        <Item item={11}>
            <P isActive={11}>
                Concepts learnt in this chapter will be useful in other chapters like relations and functions, trigonometry, sequences and series, combinatorics, calculus and probability.
            </P>
        </Item>
        {#if $presentationMode && $currentSlide >= 2}
            <div class="pad"></div>
        {/if}
    </section>
</article>

<style>
    /* p {
        text-indent: 2em;
    } */
    /* .image {
        display: flex;
        justify-content: center;
        width: min(95vw, 600px);
    } */
    article {
        position: relative;
        padding: 0.5em;
        /* in: all 1s; */
    }
    /* aside {
        background-color: rgb(230, 228, 228);
        cursor: pointer;
        width: 1em;
    } */
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
    .pad {
        min-height: 100px;
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