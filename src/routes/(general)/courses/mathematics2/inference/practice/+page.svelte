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
    $currentPath = "Practice";
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
    ol li::marker {
        font-size: 1.2em;
        color: red;
        font-weight: bold;
    }
    ol li {
        padding: 0.5em 0;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference/practice" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Practice problems (Inference and Time series analysis)
    </h4>
    
    <Card>
        <Content>
            <h5>Statistical Significance</h5>
            <ol>
                <li>What is population?</li>
                <li>What is sample and sampling?</li>
                <li>What is statistical inference? Explain using an example.</li>
                <li>What is a statistical decision? Explain using an example.</li>
                <li>What is a statistical hypothesis? Explain using an example.</li>
                <li>What are null and alternative hypotheses? Explain using an example.</li>
                <li>When can we reject a hypothesis?</li>
                <li>What are type I and type II errors? Explain using an example.</li>
                <li>What is level of significance? What do significance levels 0.01 and 0.05 mean?</li>
                <li>Assuming normal distribution, explain region of no significance, and critical region.</li>
                <li>Calculate mean and standard deviation of the number of heads is 100 tosses when the probability of getting heads is (1) 0.5 (2) 0.7 (3) 0.9</li>
                <li>Calculate the z variable when the number of heads is (1) 40 (2) 50 (3) 60 assuming that the mean is 50 and standard deviation is 5.</li>
                <li>Calculate the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin assuming (a) binomial distribution (show the expression only) (b) normal distribution approximation.</li>
                <li>To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.
                    <ul>
                        <li>Find the probability of rejecting the hypothesis when it is actually correct.</li>
                        <li>Draw the graph.</li>
                    </ul>
                </li>
                <li>Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of siginificance of (a) 0.05, (b) 0.01 is used.</li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Analysis of Variance</h5>
            <ol>
                <li>

                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Time series analysis</h5>
            <ol>
                
            </ol>
        </Content>
    </Card>
    
</article>