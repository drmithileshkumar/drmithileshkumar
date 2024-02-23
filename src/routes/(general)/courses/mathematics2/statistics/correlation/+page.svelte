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
    $currentPath = "Correlation";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        BASICS OF STATISTICS 
    </h4>
    <h5>Correlation</h5>
    <Card>
        <Content>
            
                <p>
                    Correlation is a fundamental concept in statistics that measures the degree and direction of the relationship between two or more variables. It allows us to understand how changes in one variable are associated with changes in another, providing valuable insights into patterns and dependencies in data.
                </p>
                <p>
                    Most famous example of correlation is the supply and demand in determining prices of commodities. Demand of electricity and weather conditions are correlated as well.
                </p>
                <p>
                    Correlation does not imply causation; it simply quantifies the strength and direction of the association between variables.
                </p>
                <p>
                    Although correlation is about studying relationship between any number of variables, we'll focus on the two variable case. Next we introduce bivariate data.
                </p>
           
        </Content>
    </Card>
</article>