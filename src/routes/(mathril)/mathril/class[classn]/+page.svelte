<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card';
    import { ripple } from "$lib/ui/ripple";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { classes, chapters, icons, classChapters, seoInfo } from "$lib/mathril/pages/practice/stores";
    import { attempted, attemptedN, correctN, workoutClass, workoutChapter, workoutTimes, fastest, slowest } from '$lib/mathril/utils/practiceproblem/practiceStore';

    import { currentPath, navList } from '$lib/mathril/stores';
    $: $currentPath = 'Class ' + $page.params.classn;
    $: $navList = classChapters[$currentPath]
    export let data;
    
    let W;

    const goback = () => {
        goto('/mathril')
    }
    const startpractice = (i) => {
        // console.log('Starting...')
        $attempted = false;
        $attemptedN = 0;
        $correctN = 0;
        $workoutClass = data.classn;
        $workoutTimes = 0;
        $fastest = 10000;
        $slowest = 0;
        goto(`/mathril/class${data.classn}/chapter${i}`)
    }
    
</script>

<svelte:head>
    <title>{seoInfo[$currentPath].title}</title>
    <link rel="canonical" href={`https://drmithileshkumar.com/mathril/class${$page.params.classn}`} />
    <meta name="description" content={seoInfo[$currentPath].description} />
    <meta name="keywords" content={seoInfo[$currentPath].keywords} />
</svelte:head>

<article class="container">
    <Card>
        <Content>
            <h2 class="mdc-typography--headline5" style="margin:0 0 1em 0">Select Chapter</h2>
            <section class="classes">
                {#each chapters[classes[data.classn - 1]] as chapter, i}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="myclass" on:click={() => startpractice(i + 1)} use:ripple> 
                        <span class="icon">
                            <img width="100%" height="100%" src={`/mathril/icons/${icons[classes[data.classn - 1]][chapter]}`} alt="" >
                        </span> 
                        <span class="title">
                            {chapter}
                        </span> 
                    </div>
                {/each}
            </section>
        </Content>
    </Card>
</article>


<style>
    article {
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    .classes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
        gap: 1em;
        padding: 0.5em;
        align-items: center;
        justify-content: center;
        /* background: radial-gradient(rgb(35 100 120), black); */
    }
    .myclass {
        width: 160px;
        height: 60px;
        border: 1px solid rgba(0, 175, 255, 1);
        padding: 0.5em 0.7em;
        display: grid;
        grid-template-columns: 40px 100px;
        align-items: center;
        border-radius: 10px;
        font-family: roboto;
        font-size: 0.8em;
        gap: 0.5em;
        cursor: pointer;
    }
    .myclass:hover {
        border: 2px solid rgba(0, 175, 255, 1);
        background-image: linear-gradient(to right, magenta, teal, tomato);
        font-weight: 600;
        color: white;
    }
    .icon {
        width: 35px;
        height: 35px;
    }
    .title {
        line-height: 1.3;
    }
</style>
