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
    $currentPath = "Variance and Standard Deviation";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/deviation" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Measures of Central Tendency 
    </h4>
    <h5>Variance and Standard Deviation</h5>
    <Card>
        <Content>
            <div class="question">
                What is standard deviation?
            </div>
            <div class="solution" use:typeset>
                <p>The standard deviation is a measure of the amount of variation or dispersion in a set of values. It is defined as the square root of the variance. For a data set with values {`\\( x_1, x_2, ..., x_n \\)`} and a mean {`\\( \\bar{x} \\)`}, the standard deviation {`\\( \\sigma \\)`} is calculated as follows:</p>
                <p>First, calculate the variance {`\\( \\sigma^2 \\)`}, which is the average of the squared differences from the Mean:</p>
                <p>{`\\[ \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\]`}</p>
                <p>Then, the standard deviation {`\\( \\sigma \\)`} is the square root of the variance:</p>
                <p>{`\\[ \\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\]`}</p>
                <p>In this formula, {`\\( \\bar{x} \\)`} is the mean of the data set, and {`\\( n \\)`} is the number of observations. The standard deviation provides a numerical measure of how spread out the values in a data set are around the mean.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <p>An observation is usually not very far away from a few standard deviations. For example, 50% of data is within {"\\(\\sqrt{2}\\sigma\\)"} from the mean and 97% of data is within \(6\sigma\) of the mean.</p>
        </Content>
    </Card>
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">
                What will be the standard deviation if every data point is multiplied by \(a\) and increased by \(b\) i.e. \(x_i \to ax_i + b\)?
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Calculate the standard deviation of \(n\) consecutive numbers start with \(a\).
            </div>
        </Content>
    </Card>
</article>