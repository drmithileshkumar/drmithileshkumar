<script lang='ts'>
    //@ts-nocheck
    import { page } from "$app/stores";
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import ScatteredPlot from '$lib/pages/courses/mathematics2/ScatteredPlot.svelte';
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents, contentNav } from "$lib/pages/courses/mathematics2/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
	import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $currentPath = "Bivariate Data";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatedata" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Correlation
    </h4>
    <h5>Bivariate Data</h5>
    <Card>
        <Content>
            <div class="question">
                What is bivariate data?
            </div>
            <div class="solution" use:typeset>
                <p>
                    Bivariate data involves pairs of related data points, each representing two different variables. These data points are used to explore the relationship between these two variables. For instance, if we consider a dataset with variables {`\\( X \\)`} and {`\\( Y \\)`}, each data point in the dataset will be a pair {`\\( (x_i, y_i) \\)`}, where {`\\( x_i \\)`} is a value of {`\\( X \\)`} and {`\\( y_i \\)`} is the corresponding value of {`\\( Y \\)`}. 
                </p>
                <p>
                    The main characteristics of bivariate data include:
                </p>
                <ul>
                    <li>
                        <p>
                            <strong>Two Variables</strong>: Bivariate data consists of observations of two variables. For example, in a study of height and weight, each observation will include both a height and a weight value.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Visualization</strong>: Bivariate data is often visualized using scatter plots, line graphs, or other graphical representations to help identify and understand relationships between the variables.
                        </p>
                    </li>
                </ul>
            </div>
        </Content>
    </Card>
    <Card>
        <Content style="display:flex; flex-direction: column; justify-content:center;">
            <ScatteredPlot />
        </Content>
    </Card>
</article>