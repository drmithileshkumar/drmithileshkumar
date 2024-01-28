<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "../content";
    $navList = contents;
    $currentPath = "Variance and Standard Deviation";
    $darkMode = true;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/deviation" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Measures of Central Tendency 
    </h2>
    <h3>Variance and Standard Deviation</h3>
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
</article>