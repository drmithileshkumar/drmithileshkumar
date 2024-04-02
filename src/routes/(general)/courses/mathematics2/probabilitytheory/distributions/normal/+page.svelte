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
    $currentPath = "Normal Distribution";
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.7em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.7em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.7em 0;
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
    table {
        border-collapse: collapse;
        margin: auto;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    td {
        border: 1px solid;
        text-align: center;
        padding: 0.7em;
    }
    .image {
        width: 300px;
        margin: auto;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/normal" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        NORMAL DISTRIBUTION
    </h4>
    <Card>
        <Content>
            <div>
                <p>Normal distribution is also called Gaussian distribution.</p>
                <div class="definition" style="padding-bottom: 0.1em;">
                   The probability density function for normal distribution is defined as {`\\[\\begin{aligned}
                    f(x) &= \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x - \\mu)^2/2\\sigma^2}
                    \\end{aligned}\\]`}
                    where <ol>
                        <li>\(-\infty \lt x\lt \infty\)</li>
                        <li>\(f(x)\geq 0\)</li>
                        <li>{`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`}</li>
                    </ol>
                    The corresponding distribution function is given by {`\\[\\begin{aligned}
                    F(x) &= P(X\\leq x)\\\\
                         &= \\frac{1}{\\sigma\\sqrt{2\\pi}}\\int_{-\\infty}^x e^{-(u - \\mu)^2/2\\sigma^2}du
                    \\end{aligned}\\]`}
                    If \(X\) has the distribution function given as above, we say that the random variable \(X\) is <em>normally distributed</em> with mean \(\mu\) and variance \(\sigma^2\).
                </div>
                <div class="definition">
                    We can replace {`\\[Z = \\frac{X -\\mu}{\\sigma}\\]`} For this variable mean is zero and variance is 1. We can write the density function as {`\\[f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}\\]`} This function is called the <strong>standard normal density function</strong>.
                </div>
                <div class="image">
                    <img src="/courses/mathematics2/normal.jpg" alt="normal" width="100%">
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Examples</h6>
            <div class="examples">
                <ol>
                    <li>
                        Height of adult humans
                    </li>
                    <li>
                        IQ scores
                    </li>
                    <li>
                        Weights of newborn babies
                    </li>
                    <li>
                        Test scores
                    </li>
                    <li>
                        Blood pressure
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <!-- <Card>
        <Content>
            <div class="question">
                Find the constant \(c\) such that the function 
                {`\\[f(x) = \\begin{cases}
                cx^2 & 0\\lt x\\lt 3\\\\
                0 & otherwise
                \\end{cases}\\]`}
                is a density function, and calculate \(P(1\lt X\lt 2)\).
            </div>
        </Content>
    </Card> -->
</article>