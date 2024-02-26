<script lang='ts'>
    //@ts-nocheck
    import {page} from '$app/stores';
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents, contentNav } from "$lib/pages/courses/mathematics2/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
	import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Mode";
    $darkMode = false;
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
        font-size: 1.7em;
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
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Measures of Central Tendency 
    </h4>
    <h5>Mode</h5>
    <Card>
        <Content>
            
            <p>The mode of a data set is the value(s) that occur most frequently. The mode is defined mathematically as the value {`\\( x_{i} \\)`} for which the frequency {`\\( f_{i} \\)`} is maximum. In other words, if a data set consists of values {`\\( x_{1}, x_{2}, ..., x_{n} \\)`} with corresponding frequencies {`\\( f_{1}, f_{2}, ..., f_{n} \\)`}, then the mode {`\\( M \\)`} is given by:</p>
            <p>{`\\[ M = x_{i} \\quad \\text{where} \\quad f_{i} = \\max(f_{1}, f_{2}, ..., f_{n}) \\]`}</p>
            <p>If two or more values tie for the highest frequency, the data set is multimodal, and each of these values is a mode. If no value repeats, the data set is said to have no mode.</p>
            <div class="examples">
                The mode of 1, 2, 2, 5, 5, 5, 4, 4 is 5.
            </div>
        </Content>
    </Card>
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">
                What is mode of letters in STATISTICS?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                If every data point is multiplied by a number \(k\), then what is the mode of the new data (assuming \(m\) to be mode of the origin data)?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                The largest data point in the given data is doubled. How can this effect the mode?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Can you compare mean and mode of any given data, i.e. conclude whether \(mean \leq mode\)?
            </div>
        </Content>
    </Card>
</article>