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
	import ScatteredPlot from '$lib/pages/courses/mathematics2/ScatteredPlot.svelte';
    import { onMount } from 'svelte';
    $navList = contents;
    $currentPath = "Bivariate Frequency Distribution";
    $darkMode = false;
    let data = [];
    let dataSize = 30;
    let rangeX = [1, 6];
    let rangeY = [1, 6];
    function generateRandomData() {
        data = [];
        // Generate random bivariate data
        data = Array.from({ length: dataSize }, () => ({
            x: rangeX[0] + Math.floor(Math.random() * (rangeX[1] - rangeX[0] + 1)),
            y: rangeY[0] + Math.floor(Math.random() * (rangeY[1] - rangeY[0] + 1)),
        }));
    }
    onMount(() => {
        generateRandomData();
    });
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatefrequency" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Correlation
    </h4>
    <h5>Bivariate Frequency Distribution</h5>
    <Card>
        <Content>
            <div class="question">
                What is bivariate frequency distribution?
            </div>
            <div class="solution" use:typeset>
                <p>
                    A bivariate frequency distribution is a table of frequencies of occurrences of pairs of variables in a dataset. The distribution is typically represented in a tabular format, where one variable is listed along the rows and the other along the columns. The table contains the frequency count, which is the number of times each pair of variable values occurs together in the dataset. 
                </p>
                <p>
                    Mathematically, if we have two variables {`\\( X \\)`} and {`\\( Y \\)`}, with {`\\( X \\)`} taking values {`\\( x_1, x_2, ..., x_m \\)`} and {`\\( Y \\)`} taking values {`\\( y_1, y_2, ..., y_n \\)`}, the frequency of occurrence of the pair {`\\( (x_i, y_j) \\)`} in the dataset is denoted as {`\\( f_{ij} \\)`}. The entire set of frequencies forms the bivariate frequency distribution.
                </p>
            </div>
        </Content>
    </Card>
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">
                Write the frequency distribution of the set of outcomes of two die rolls {data.map(d => '(' + d.x + ', ' + d.y + ')')}
            </div>
        </Content>
    </Card>
</article>