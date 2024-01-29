<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $darkMode = true;
    $currentPath = "Measures of Central Tendency";
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgba(0, 150, 200, 1);
    }
    strong {
        color: goldenrod;
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/measures" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        BASICS OF STATISTICS 
    </h2>
    <h3>Measures of Central Tendency</h3>
    <Card>
        <Content>
            <div class="question">
                What are measures of central tendency?
            </div>
            <div class="solution">
                Measures of central tendency are statistical metrics that summarize a data set by identifying the central point around which all other data points tend to cluster. These measures are crucial for understanding the typical or average values in the data. The most common measures of central tendency are the mean, median, and mode.
            </div>
        </Content>
    </Card>
</article>