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
    $currentPath = "Lines of Regression";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressionlines" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Regression
    </h4>
    <h5>Lines of regression</h5>
    <Card>
        <Content>
            
            <p>
                One of the most common nature of relationship between two variables that are explored is linear, i.e., we check whether the values of the variables lie on a line.
            </p>
            <h6>Regression Line of Y on X</h6>
            <p>
                This line is used to predict the values of the dependent variable (Y) based on the values of the independent variable (X). It is often referred to as the "line of best fit" and is represented mathematically as:
            </p>
            <p>{`\\[ Y = a + bX \\]`}</p>
            <h6>Regression Line of X on Y</h6>
            <p>
                This line is used to predict the values of the independent variable (X) based on the values of the dependent variable (Y). It is represented mathematically as:
            </p>
            <p>{`\\[ X = c + dY \\]`}</p>
            <p>Here, in the equations:</p>
            <ul>
                <li><p>{`\\( Y \\)`} represents the dependent variable (outcome).</p></li>
                <li><p>{`\\( X \\)`} represents the independent variable (predictor).</p></li>
                <li><p>{`\\( a \\)`} and {`\\( c \\)`} are the intercepts of the regression lines on the Y and X axes, respectively.</p></li>
                <li><p>{`\\( b \\)`} and {`\\( d \\)`} are the slope coefficients that quantify the strength and direction of the relationship between the variables.</p></li>
            </ul>
        </Content>
    </Card>
</article>