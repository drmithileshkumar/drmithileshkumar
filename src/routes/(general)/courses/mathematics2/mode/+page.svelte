<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "../content";
    $navList = contents;
    $currentPath = "Mode";
    $darkMode = true;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mode" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Measures of Central Tendency 
    </h2>
    <h3>Mode</h3>
    <Card>
        <Content>
            <div class="question">
                What is mode?
            </div>
            <div class="solution" use:typeset>
                <p>The mode of a data set is the value(s) that occur most frequently. The mode is defined mathematically as the value {`\\( x_{i} \\)`} for which the frequency {`\\( f_{i} \\)`} is maximum. In other words, if a data set consists of values {`\\( x_{1}, x_{2}, ..., x_{n} \\)`} with corresponding frequencies {`\\( f_{1}, f_{2}, ..., f_{n} \\)`}, then the mode {`\\( M \\)`} is given by:</p>
                <p>{`\\[ M = x_{i} \\quad \\text{where} \\quad f_{i} = \\max(f_{1}, f_{2}, ..., f_{n}) \\]`}</p>
                <p>If two or more values tie for the highest frequency, the data set is multimodal, and each of these values is a mode. If no value repeats, the data set is said to have no mode.</p>
            </div>
        </Content>
    </Card>
</article>