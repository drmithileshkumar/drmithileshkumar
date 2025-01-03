<script lang='ts'>
    //@ts-nocheck
    
    import Card, {Actions} from '@smui/card';
    
    import { page } from "$app/stores";
    import { saved, attempted, attemptedN, correctN, workoutClass, workoutChapterN, workoutChapter, workoutTimes, fastest, slowest } from '$lib/mathril/utils/practiceproblem/practiceStore';
    import { classes, chapters, seoInfo, videos, classChapters, NoOfQuestions } from "$lib/mathril/pages/practice/stores";
    import { onMount } from "svelte";

    import Practice from "$lib/mathril/utils/practiceproblem/Practice.svelte";
    
    import { currentPath, navList, TopBarHeight, Guest } from '$lib/mathril/stores';
    
    $: $currentPath = 'Class ' + $page.params.classn + ' ' + (chapters[classes[$page.params.classn - 1]][$page.params.chaptern - 1]);
    $: currentClass = 'Class ' + $page.params.classn;
    $: $navList = classChapters[currentClass]
    export let data;
    
    let started = false, showPerformance = false;
    let previousWorkout = {};
    let active = 'Practice';
    let tabs = ['Practice', 'Performance', 'Concepts', 'Examples']
    let howToPanel = false;
    onMount(() => {
        $attempted = 0;
        $correctN = 0;
        $workoutTimes = 0;
    });
    const updateWorkout = (evt) => {
        data.workouts = [evt.detail, ...data.workouts];
        previousWorkout = evt.detail;
        data = data;
        showPerformance = true;
    }
    $: $workoutClass = data.classn;
    $: $workoutChapterN = data.chaptern;
    $: $workoutChapter = chapters[classes[data.classn - 1]][data.chaptern - 1];
    // $: Concepts = `$lib/mathril/pages/concepts/class${data.classn}/Chapter${data.chaptern}.svelte`;
    
</script>

<svelte:head>
    <title>{seoInfo['Class ' + $page.params.classn].title}</title>
    <link rel="canonical" href={`https://drmithileshkumar.com/mathril/${$page.params.publicID}/class${$page.params.classn}`} />
    <meta name="description" content={seoInfo['Class ' + $page.params.classn].description} />
    <meta name="keywords" content={seoInfo['Class ' + $page.params.classn].keywords} />
</svelte:head>

<article class="container">
    <h3 class="mdc-typography--headline4" style="margin:0.5em">{chapters[classes[data.classn - 1]][data.chaptern - 1]}</h3>
        {#if data.selectedGenerator}
            {#key data.selectedGenerator}
            {#each Array(NoOfQuestions[data.classn - 1][data.chaptern - 1]) as i, problemnumber}
                <Card>
                    <h3 class="mdc-typography--headline5" style="margin:0.5em">Problem {problemnumber + 1}</h3>
                    <Practice problemnumber={problemnumber} generateProblem={data.selectedGenerator} {started} on:saved={updateWorkout}/>  
                    <br>     
                </Card>
            {/each}
            {/key}
        {/if}
</article>
<style>
    .container {
        display:flex;
        flex-direction: column;
        gap: 0.5em;
    }
    h3 {
        display: flex;
        align-items: center;
        background: linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(207 166 35),
            rgb(241 7 7)
        );
        background-clip: text;
        background: -webkit-linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(240 0 255),
            rgb(207 166 35),
            rgb(241 7 7)
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        /* cursor: pointer; */
    }
    
    h3 {
        justify-content: center;
    }
    /* .videos {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        flex-wrap: wrap;
    } */
    .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 4em;
        z-index: 5;
    }
</style>