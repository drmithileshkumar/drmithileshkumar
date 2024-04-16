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
    $currentPath = "Tests of Hypothesis and Significance";
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
        Tests of hypothesis and significance
    </h4>
    
    <Card>
        <Content>
            
            <div use:typeset>
                <p>
                    If on the supposition that a particular hypothesis is true we find that results observed in a random sample differ
                    markedly from those expected under the hypothesis on the basis of pure chance using sampling theory, we would
                    say that the observed differences are significant and we would be inclined to reject the hypothesis (or at least not
                    accept it on the basis of the evidence obtained). For example, if 20 tosses of a coin yield 16 heads, we would be
                    inclined to reject the hypothesis that the coin is fair, although it is conceivable that we might be wrong.
                </p>
                <p>
                    Procedures that enable us to decide whether to accept or reject hypotheses or to determine whether observed sam
                    ples differ significantly from expected results are called tests of hypotheses, tests of significance, or decision rules.
                </p>
            </div>
        </Content>
    </Card>
    
</article>