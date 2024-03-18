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
    $currentPath = "Independence";
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
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/conditional" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Independent Events
    </h4>
    
    <Card>
        <Content>
            <div class="definition">
                If \(P(B\vert A) = P(B)\), i.e. the probability of \(B\) occurring is not affected by the occurrence or non-occurrence of \(A\), then we say that \(A\) and \(B\) are <strong>independent events</strong>. 
                \[P(A\cap B) = P(A)P(B)\]
            </div>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6>Definition</h6>
            <div class="definition">
                We say that three events \(A_1, A_2, A_3\) are <strong>independent</strong> if they are pairwise independent: 
                {`\\[P(A_j\\cap A_k) = P(A_j)P(A_k)\\quad j\\neq k\\]`} where \(j, k = 1, 2, 3\) and \[P(A_1\cap A_2\cap A_3) = P(A_1)P(A_2)P(A_3)\]
            </div>
        </Content>
    </Card>
    <h4>Questions</h4>
    <Card>
        <Content>
            <div class="question">
                <p>Give five examples when two events are independent and when they are not independent.</p>
            </div>
        </Content>
    </Card>
</article>