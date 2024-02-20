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
    $darkMode = false;
    $currentPath = "Basics of Statistics";
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
        color: rgb(159, 116, 7);
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/statistics" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        BASICS OF STATISTICS 
    </h4>
    
    <Card>
        <Content>
            <div use:typeset>
                <p>
                    We use statistics in decision making in the face of uncertainty. Consider situations where there is a repetitive process that creates data. For example, outcome a coin toss, temperature at any time in a day, value of a stock, defects in a product etc. Each of these situations create a lot of data which seem random to an extent. Can we predict what will be likely outcome of the coin toss, or temperature next hour, or price of the stock? We use statistical methods to answer questions like these.
                </p>
                <p>
                    One of the most useful tools in statistics is probability. Probability can be seen as idealization of frequency table in the case of finitely many data points. In this course, we'll take the approach of delaying the introduction to probability and start with a basic overview of statistical concepts like measures of central tendency, correlation and regression. After that we'll introduce probability theory.
                </p>
            </div>
        </Content>
    </Card>
</article>