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
    $currentPath = "Level of Significance";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Level of Significance
    </h4>
    
    <Card>
        <Content>
            
            <div use:typeset>
                <div class="definition">
                    In testing a given hypothesis, the maximum probability with which we would be willing to risk a Type I error is called the <strong>level of significance</strong> of the test. This probability is often specified before any samples are drawn, so
                    that results obtained will not influence our decision.
                </div>
                <div>
                    In practice a level of significance of 0.05 or 0.01 is customary, although other values are used. If for example
                    a 0.05 or 5% level of significance is chosen in designing a test of a hypothesis, then there are about 5 chances in
                    100 that we would reject the hypothesis when it should be accepted, i.e., whenever the null hypotheses is true,
                    we are about 95% confident that we would make the right decision. In such cases we say that the hypothesis has
                    been rejected at a 0.05 level of significance, which means that we could be wrong with probability 0.05.
                </div>
            </div>
        </Content>
    </Card>
    
</article>