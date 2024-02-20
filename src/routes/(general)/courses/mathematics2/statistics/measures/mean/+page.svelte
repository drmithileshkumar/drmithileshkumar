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
    import MeanPlot from '$lib/pages/courses/mathematics2/statistics/measures/mean/MeanPlot.svelte'
    $navList = contents;
    $currentPath = "Mean";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mean" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Measures of Central Tendency 
    </h4>
    <h5>Mean</h5>
    <Card>
        <Content>
            <div class="question">
                What is mean (AM, GM, HM)?
            </div>
            <div class="solution" use:typeset>
                <h6>Mean (Arithmetic Mean)</h6>
                <p>The mean, also known as the arithmetic mean, of a set of <em>n</em> numerical values <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the sum of all the values divided by the number of values. The formula for the mean is:</p>
                <p>{`\\[ \\text{Mean} (\\bar{x}) = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\]`}</p>

                <h6>Geometric Mean (GM)</h6>
                <p>The Geometric Mean of a set of <em>n</em> positive numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the <em>n</em>-th root of the product of all the <em>n</em> numbers. The formula for the geometric mean is:</p>
                <p>{`\\[ \\text{Geometric Mean (GM)} = \\left( \\prod_{i=1}^{n} x_i \\right)^{\\frac{1}{n}} \\]`}</p>

                <h6>Harmonic Mean (HM)</h6>
                <p>The Harmonic Mean of a set of <em>n</em> numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em>, where none of the numbers are zero, is defined as <em>n</em> divided by the sum of the reciprocals of the numbers. The formula for the harmonic mean is:</p>
                <p>{`\\[ \\text{Harmonic Mean (HM)} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}} \\]`}</p>

            </div>
        </Content>
    </Card>
    <!-- <Card>
        <Content>
            <div style="max-width:100%;">
                <MeanPlot />
            </div>
        </Content>
    </Card> -->
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">
                What is the mean of \(n\) consecutive numbers starting with \(a\)?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">Show that arithmetic mean is always between the smallest and the largest data point.</div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Given data points \(x_1, x_2,\dots, x_n\) with arithmetic mean \(\mu\), what is the percentage change in \(\mu\) if \(x_1\) is increased by \(\lambda\)%?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                The geometric mean of 2 numbers \(a,b\) doubles when \(a\) is changed to \(a'\). What is the value of \(a'\)?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Show that \(AM\geq GM\) in case of two variables.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Show that \(HM\leq GM\) in case of two variables.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                If every data point is multiplied by a number \(k\), then what is AM, GM and HM of the new data in terms of previous values of AM, GM and HM?
            </div>
        </Content>
    </Card>
</article>