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
            <h6>Mean (Arithmetic Mean)</h6>
            <p>The mean, also known as the arithmetic mean, of a set of <em>n</em> numerical values <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the sum of all the values divided by the number of values. The formula for the mean is:</p>
            <p>{`\\[ \\text{Mean} (\\bar{x}) = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\]`}</p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Geometric Mean (GM)</h6>
            <p>The Geometric Mean of a set of <em>n</em> positive numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the <em>n</em>-th root of the product of all the <em>n</em> numbers. The formula for the geometric mean is:</p>
            <p>{`\\[ \\text{Geometric Mean (GM)} = \\left( \\prod_{i=1}^{n} x_i \\right)^{\\frac{1}{n}} \\]`}</p>
            <p>
                It is used when the information we want has volume-like property.
            </p>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Harmonic Mean (HM)</h6>
            <p>The Harmonic Mean of a set of <em>n</em> numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em>, where none of the numbers are zero, is defined as <em>n</em> divided by the sum of the reciprocals of the numbers. The formula for the harmonic mean is:</p>
            <p>{`\\[ \\text{Harmonic Mean (HM)} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}} \\]`}</p>
            <p>
                It is used when the information we want considers reciprocals of the given data.
            </p>
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
            <div class="solution">
                <p>
                    The numbers will be \(a, a + 1, a + 2, \dots, a + (n - 1)\). Their sum is 
                    {`\\[
                        \\begin{aligned}
                        sum &= a + (a + 1) + (a + 2) + \\cdots + (a + n - 1)\\\\
                            &= na + [1 + 2 + 3 + \\cdots + (n - 1)]\\\\
                            &= na + \\frac{(n - 1)(n - 1 + 1)}{2}\\\\
                            &= n\\frac{2a + n - 1}{2}
                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    Therefore the arithmetic mean is {`\\[
                        \\begin{aligned}
                        \\bar{x} &= \\frac{sum}{n}\\\\
                                 &= \\frac{n(2a + n - 1)}{2n}\\\\
                                 &= \\frac{2a + n - 1}{2}
                        \\end{aligned}
                        \\]`}
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">Show that arithmetic mean is always between the smallest and the largest data point.</div>
            <div class="solution">
                <p>
                    Let us rewrite the definition of the mean.
                    {`\\[\\begin{aligned}
                    \\bar{x} &= \\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                    n\\bar{x} &= x_1 + x_2 + \\cdots + x_n\\\\
                    0  &= (x_1 + x_2 + \\cdots + x_n) - n\\bar{x}\\\\
                    0 &= (x_1 - \\bar{x}) + (\\bar{x} - x_2) + \\cdots + (\\bar{x} - x_n)
                    \\end{aligned}\\]`}
                </p>
                <p>
                    Suppose {`\\(\\bar{x}\\)`} is less than the smallest data point. Each term on the right side is a positive number. Their sum can not be zero. 
                </p>
                <p>
                   When we assume {`\\(\\bar{x}\\)`} to be larger than the largest element, the all terms become negative and their sum can not be zero.
                </p>
                <p>This proves that {`\\(\\bar{x}\\)`} lies between the smallest and the largest element in the data set.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Given data points \(x_1, x_2,\dots, x_n\) with arithmetic mean \(\mu\), what is the percentage change in \(\mu\) if \(x_1\) is increased by \(\lambda\)%?
            </div>
            <div class="solution">
                <p>Let \(\nu\) be the new mean. Let \(p\) be the percentae change in \(\mu\).</p>
                <p>
                    {`\\[
                        \\begin{aligned}
                        \\mu &= \\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                        \\nu &= \\frac{(x_1 + dx) + x_2 + \\cdots + x_n}{n}\\\\
                             &= \\frac{x_1 + x_2 + \\cdots + x_n}{n} + \\frac{dx}{n}\\\\
                             &= \\mu + \\frac{dx}{n}\\\\
                \\nu - \\mu  &= \\frac{x_1\\lambda}{100n}\\\\
                           p &= \\frac{\\nu - \\mu}{\\mu}\\\\
                             &= \\frac{x_1\\lambda}{100n\\mu}
                        \\end{aligned}
                        \\]`}
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                The geometric mean of 2 numbers \(a,b\) doubles when \(a\) is changed to \(c\). What is the value of \(c\)?
            </div>
            <div class="solution">
                <p>
                    {`\\[
                        \\begin{aligned}
                        2\\sqrt{ab} &= \\sqrt{cb}\\\\
                        4ab &= cb\\\\
                        \\implies c &= 4a
                        \\end{aligned}
                        \\]`}
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Show that \(AM\geq GM\) in case of two variables.
            </div>
            <div class="solution">
                <p>Let \(a\) and \(b\) be two numbers.
                    {`\\[
                        \\begin{aligned}
                        (a - b)^2 &\\geq 0\\\\
                        a^2 + b^2 - 2ab &\\geq 0\\\\
                        a^2 + b^2 - 2ab + 4ab &\\geq 4ab\\\\
                        (a + b)^2 &\\geq 4ab\\\\
                        \\frac{a + b}{2}&\\geq \\sqrt{ab}\\\\
                        \\implies AM &\\geq GM 
                        \\end{aligned}
                        \\]`}

                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Show that \(HM\leq GM\) in case of two variables.
            </div>
            <div class="solution">
                <p>
                    Let \(a\) and \(b\) be two numbers. Let us apply above theorem on numbers {`\\(\\frac{1}{a}\\)`} and {`\\(\\frac{1}{b}\\)`}.
                    {`\\[\\begin{aligned}
                    \\frac{\\frac{1}{a} + \\frac{1}{b}}{2} &\\geq \\sqrt{\\frac{1}{a}\\frac{1}{b}}\\\\
                                                           &\\geq \\frac{1}{\\sqrt{ab}} \\\\
                    \\frac{2}{\\frac{1}{a} + \\frac{1}{b}} &\\leq \\sqrt{ab}\\\\
                    \\implies HM &\\leq GM
                    \\end{aligned}\\]`}
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                If every data point is multiplied by a number \(k\), then what is AM, GM and HM of the new data in terms of previous values of AM, GM and HM?
            </div>
            <div class="solution">
                <p>
                    {`\\[
                        \\begin{aligned}
                        AM_{new} &= \\frac{kx_1 + kx_2 +\\cdots + kx_n}{n}\\\\
                                 &= k\\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                                 &= k\\cdot AM_{old}

                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    {`\\[
                        \\begin{aligned}
                        GM_{new} &= (kx_1\\cdot kx_2\\cdot kx_n)^{\\frac{1}{n}}\\\\
                                 &= (k^n\\cdot x_1\\cdot x_2\\cdot x_n)^{\\frac{1}{n}}\\\\
                                 &= k\\cdot GM_{old}

                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    {`\\[
                        \\begin{aligned}
                        HM_{new} &= \\frac{n}{\\frac{1}{kx_1} + \\frac{1}{kx_2} + \\cdots + \\frac{1}{kx_n}}\\\\
                                 &= \\frac{k\\cdot n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\cdots + \\frac{1}{x_n}}\\\\
                                 &= k\\cdot HM_{old}

                        \\end{aligned}
                        \\]`}
                </p>
            </div>
        </Content>
    </Card>
</article>