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
    $currentPath = "Types of Correlation";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlationtypes" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h2>
        Correlation
    </h2>
    <h3>Types of Correlation</h3>
    <Card>
        <Content>
            <div class="question">
                What types of correlation are there?
            </div>
            <div class="solution" use:typeset>
                <p>Correlation between two variables can be categorized into several types based on the nature and direction of the relationship. The main types of correlation include:</p>
                <ul>
                    <li><p><strong>Positive Correlation:</strong> Occurs when an increase in one variable leads to an increase in the other variable. The correlation coefficient {`\\( r \\)`} is greater than 0 and up to +1. A perfect positive correlation, with {`\\( r = +1 \\)`}, means that the two variables move in the same direction with a fixed proportional rate.</p></li>
                    <li><p><strong>Negative Correlation:</strong> Occurs when an increase in one variable leads to a decrease in the other. The correlation coefficient {`\\( r \\)`} is less than 0 and down to -1. A perfect negative correlation, with {`\\( r = -1 \\)`}, indicates that the two variables move in opposite directions with a fixed proportional rate.</p></li>
                    <li><p><strong>No Correlation:</strong> When there is no discernible relationship between the changes in two variables, they are said to have no correlation. This is indicated by a correlation coefficient {`\\( r \\)`} around 0. It means the changes in one variable do not predict any change in the other.</p></li>
                    <li><p><strong>Linear Correlation:</strong> This type refers to a straight-line relationship between two variables. Both positive and negative correlations can be linear if the change between the variables is consistent and can be graphically represented by a straight line.</p></li>
                    <li><p><strong>Non-linear (Curvilinear) Correlation:</strong> In this type, the relationship between the variables is still systematic but does not follow a straight line. The correlation might change in strength or direction at different levels of the variables.</p></li>
                </ul>
                <p>It's important to note that correlation, regardless of its type, does not imply causation. Statistical analysis is required to determine if a causal relationship exists between the variables.</p>
            </div>
        </Content>
    </Card>
</article>