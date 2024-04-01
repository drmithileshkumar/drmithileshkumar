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
    $currentPath = "Continuous Distribution";
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
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/continuous" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        CONTINUOUS DISTRIBUTION
    </h4>
    <Card>
        <Content>
            <h6>Continuous sample space</h6>
            <div>
                <div class="definition" style="padding-bottom: 0.1em;">
                    When the outcome of an experiment can take any value from an interval, we say that the sample space is continuous. Ideally, it is defined in terms of random variables, but we avoid random variables for this course. The probability of any one outcome is zero. In such cases, we define probabilities for an interval of values. A non-discrete random variable \(X\) is said to be <em>absolutely continuous</em> if its distribution function my be represented as {`\\[\\begin{aligned}
                    F(x) &= P(X \\leq x)\\\\
                         &= \\int_{-\\infty}^x f(u)du
                    \\end{aligned}\\]`}
                    where <ol>
                        <li>\(-\infty \lt x\lt \infty\)</li>
                        <li>\(f(x)\geq 0\)</li>
                        <li>{`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`}</li>
                    </ol>
                    \(f(x)\) is called <strong>probability density function</strong>.
                </div>
                <div class="definition">
                    The <strong>interval probability</strong> that \(X\) lies between two different values, say \(a\) and \(b\), is given by {`\\[P(a\\lt x\\lt b) = \\int_a^b f(x)dx\\]`}
                </div>
            </div>
            <div class="examples">
                <ol>
                    <li>
                        The height of a randomly chosen person can take any value between 100cm to 200cm.
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
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
    </Card>
</article>