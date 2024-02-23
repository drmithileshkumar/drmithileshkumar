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
    $currentPath = "Karl Pearson's coefficient of correlation (r)";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/pearson" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Correlation
    </h4>
    <h5>Karl Pearson's coefficient of correlation (r)</h5>
    <Card>
        <Content>
            
            <p>
                Karl Pearson's coefficient of correlation, commonly denoted as {`\\( r \\)`}, is a measure of the strength and direction of a linear relationship between two variables. It is a widely used method in statistics for quantifying the degree of correlation. 
            </p>
            <p>
                Pearson's coefficient is defined as the covariance of the two variables divided by the product of their standard deviations. It quantifies the degree to which two variables are linearly related.
            </p>
            <p>
                For a sample size of {`\\( n \\)`}, with variables {`\\( X \\)`} and {`\\( Y \\)`} having means {`\\( \\bar{X} \\)`} and {`\\( \\bar{Y} \\)`} respectively, Pearson's {`\\( r \\)`} is calculated as:
            </p>
            <p>{`\\[ r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{X})(y_i - \\bar{Y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{X})^2 \\sum_{i=1}^{n} (y_i - \\bar{Y})^2}} \\]`}</p>
            <p>
                Pearson's {`\\( r \\)`} ranges from -1 to +1. A value of +1 indicates a perfect positive linear correlation, -1 indicates a perfect negative linear correlation, and 0 indicates no linear correlation.
            </p>
            <p>
                The magnitude of {`\\( r \\)`} indicates the strength of the correlation, while the sign indicates the direction (positive or negative).
            </p>
            <p>
                Pearson's correlation coefficient only measures linear relationships and might not accurately represent non-linear relationships. Also, it does not imply causation.
            </p>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Cauchy-Schwarz inequality</h6>
            <div class="theorem" use:typeset>
                Given two sets of \(n\) real numbers \(a_1, a_2, \dots, a_n\) and \(b_1, b_2, \dots, b_n\), the following inequality holds: 
                {`\\[\\left (\\sum a_ib_i\\right )^2 \\leq \\sum a_i^2 \\sum b_i^2\\]`}
            </div>
            <div class="proof" use:typeset>
                <p>
                    Let use define {`
                    \\[
                    \\begin{aligned}
                    A &= \\sum a_i^2\\\\
                    B &= \\sum b_i^2\\\\
                    C &= \\sum a_ib_i
                    \\end{aligned}    
                    \\]
                    `}
                </p>
                <p>
                    That is, we need to show \(C^2-AB\leq 0\). In other words, the quadratic equation \(Ax^2 + 2Cx + B\) has either one root or no roots, i.e. \(Ax^2 + 2Cx + B\geq 0\)
                </p>
                <p>
                    After substituting \(A, B\) and \(C\) and a little rearrangement of terms we can get
                    {`\\[
                        \\begin{aligned}
                        Ax^2 + 2Cx + B &= \\sum (a_ix + b_i)^2\\\\
                                       &\\geq 0 
                        \\end{aligned}
                        \\]`}
                    Equality to 0 happens for \(a_ix = -b_i\)
                </p>
                <p>
                    Cauchy-Schwarz inequality proves that \(r\) will lie between -1 and 1. Notice that \(a_ix = -b_i\) implies linear relationship between \(a_i\) and \(b_i\). For this case, \(r\) is equal to -1 or 1. That is why, Pearson's coefficient of correlation is said to show linear correlation between data points.
                </p>
            </div>
        </Content>
    </Card>
</article>