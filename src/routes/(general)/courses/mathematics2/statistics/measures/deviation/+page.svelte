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
            
            <p>The standard deviation is a measure of the amount of variation or dispersion in a set of values. It is defined as the square root of the variance. For a data set with values {`\\( x_1, x_2, ..., x_n \\)`} and a mean {`\\( \\bar{x} \\)`}, the standard deviation {`\\( \\sigma \\)`} is calculated as follows:</p>
            <p>First, calculate the variance {`\\( \\sigma^2 \\)`}, which is the average of the squared differences from the Mean:</p>
            <p>{`\\[ \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\]`}</p>
            <p>Then, the standard deviation {`\\( \\sigma \\)`} is the square root of the variance:</p>
            <p>{`\\[ \\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\]`}</p>
            <p>In this formula, {`\\( \\bar{x} \\)`} is the mean of the data set, and {`\\( n \\)`} is the number of observations. The standard deviation provides a numerical measure of how spread out the values in a data set are around the mean.</p>
            <div class="examples">
                Given data 1, 2, 3 with mean 2, the standard deviation is {`\\[\\begin{aligned}
                \\sigma &= \\sqrt{\\frac{1}{3}[(1-2)^2 + (2-2)^2 + (3-2)^2]}\\\\
                        &= \\sqrt{\\frac{1}{3}(1 + 0 + 1)}\\\\
                        &= \\sqrt{\\frac{2}{3}}
                \\end{aligned}\\]`}
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
            <div class="solution">
                <p>The new mean is 
                    {`\\[
                        \\begin{aligned}
                        \\bar{x}_{new} &= \\frac{(ax_1 + b) + \\cdots + (ax_n + b)}{n}\\\\
                                       &= a\\frac{x_1 + \\cdots + x_n}{n} + \\frac{b + \\cdots b}{n}\\\\
                                       &= a\\bar{x}_{old} + b
                        \\end{aligned}
                        \\]`}

                </p>
                <p>
                    The new standard deviation is
                    {`\\[
                        \\begin{aligned}
                        \\sigma_{new} &= \\sqrt{\\frac{1}{n}\\sum_{i = 1}^n (ax_i + b - \\bar{x}_{new})}\\\\
                                      &= \\sqrt{\\frac{1}{n}\\sum_{i = 1}^n (ax_i + b - (a\\bar{x}_{old} + b)}\\\\
                                      &= \\sqrt{\\frac{1}{n}a\\sum_{i = 1}^n(x_i - \\bar{x}_{old})}\\\\
                                      &= \\sqrt{a}\\sqrt{\\frac{1}{n}\\sum_{i = 1}^n(x_i - \\bar{x}_{old})}\\\\
                                      &= \\sqrt{a}\\sigma_{old}
                        \\end{aligned}
                        \\]`}
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Calculate the standard deviation of \(n\) consecutive numbers start with \(a\).
            </div>
            <div class="solution">
                <p>
                    The numbers are \(a, a + 1, \dots, a + (n - 1)\). We have calculated its mean as {`\\[
                    \\bar{x} = \\frac{2a + n - 1}{2} = a + \\frac{n- 1}{2}
                    \\]`}
                </p>
                <p>
                    The differences will be {`\\[\\begin{aligned}
                    x_i - \\bar{x} &= a + i- 1 - a - \\frac{n- 1}{2}\\\\
                                   &= i - \\frac{n + 1}{2}
                    \\end{aligned}\\]`}
                </p>
                <p>
                    Considering their square gives
                    {`\\[\\begin{aligned}
                    (x_i - \\bar{x})^2 &= [i - \\frac{n + 1}{2}]^2\\\\
                                       &= i^2 - (n + 1)i + \\frac{(n + 1)^2}{4}
                    \\end{aligned}\\]`}
                </p>
                <p>
                    Now we calculate their sum as 
                    {`\\[\\begin{aligned}
                    \\sum_{i = 1}^{n}(x_i - \\bar{x})^2 &= \\sum i^2 - (n + 1)\\sum i\\\\ &+ \\sum \\frac{(n + 1)^2}{4} \\\\
                        &= \\frac{n(n + 1)(2n + 1)}{6} - \\frac{n(n + 1)^2}{2}\\\\ &+ \\frac{n(n + 1)^2}{4}\\\\
                        &= \\frac{n(n + 1)(2n + 1)}{6} - \\frac{n(n + 1)^2}{4}\\\\
                        &= n(n + 1)\\frac{4n + 2 - 3n - 3 }{12}\\\\
                        &=\\frac{n(n^2 - 1)}{12}
                    \\end{aligned}\\]`}
                </p>
                <p>
                    Now we can plug this value into the definition of standard deviation.
                    {`\\[\\sigma = \\sqrt{\\frac{n(n^2 - 1)}{12n}}=\\sqrt{\\frac{n^2 - 1}{12}}\\]`}
                    Notice that the standard deviation does not depend on \(a\).
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Create any set of random data. Increase the largest data point by 10%, 20%, ..., 100%. Make a table that shows the change in standard deviation.
            </div>
            <div class="solution">
                <p>
                    Let us assume that \(x_n\) is the largest data point and it is changed to \(\lambda x_n\). The new mean will be {`\\[\\begin{aligned}
                    \\bar{x}_{new} &= \\frac{x_1 + x_2 + \\cdots + \\lambda x_n}{n}\\\\
                                   &= \\frac{x_1 + x_2 + \\cdots + x_n}{n} + \\frac{(\\lambda - 1)x_n}{n}\\\\
                                   &= \\bar{x}_{old} + \\frac{(\\lambda - 1)x_n}{n}
                    \\end{aligned}\\]`}
                    {`\\[\\begin{aligned}
                    \\sigma_{new} &= \\sqrt{\\frac{1}{n}\\sum_{i = 1}^{n-1}(x_i - \\bar{x}_{new})^2 + \\frac{(\\lambda x_n - \\bar{x}_{new})^2}{n}}
                    \\end{aligned}\\]`}
                </p>
            </div>
        </Content>
    </Card>
</article>