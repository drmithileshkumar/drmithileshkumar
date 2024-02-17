<script lang="ts">
    // @ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import Card, { Content, Actions } from "@smui/card";
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import NavList from '$lib/components/NavList.svelte'
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores";
    import { contents } from "$lib/pages/courses/quantuminformation2/content";
    $navList = contents;
    $currentPath = "Quantum Information 2";
    $darkMode = true;
    // onMount(() => {
    //     MathJax.typeset();
    // });
    
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
    <title>Quantum Information 2</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/quantuminformation2" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Quantum Information 2
    </h2>
    <h3>Contents</h3>
    <Card style="background-color: rgba(0, 100, 100, 0.1">
        <NavList name="{$navList[0].name}" url="{$navList[0].url}" topics={$navList[0].topics} expanded />
    </Card>
    <!-- <Card>
        <Content>
            <h4>Module 1</h4>
            <h5>BASICS OF STATISTICS</h5>
            <ol>
                <li>
                    <strong><a href={"/courses/mathematics2/measures"}>Measures of Central Tendency</a></strong>
                    <ol>
                        <li>
                            <a href={"/courses/mathematics2/mean"}>Mean (AM, GM, HM)</a>
                        </li>
                        <li>
                            <a href={"/courses/mathematics2/mode"}>Mode</a>
                        </li>
                        <li>
                            <a href={"/courses/mathematics2/median"}>Median</a>
                        </li>
                        <li>
                            <a href={"/courses/mathematics2/deviation"}>Standard deviation</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Correlation</strong>
                    <ol>
                        <li>
                            <a>Bivariate data</a>
                        </li>
                        <li>
                            <a>Bivariate frequency distribution</a>
                        </li>
                        <li>
                            <a>Concept of correlation between two variables</a>
                        </li>
                        <li>
                            <a>Types of correlation</a>
                        </li>
                        <li>
                            <a>Karl Pearson's coefficient of correlation (r)</a>
                        </li>
                        <li>
                            <a>Spearman's rank correlation coefficient</a>
                        </li>
                        <li>
                            <a>Curve Fitting</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Regression</strong>
                    <ol>
                        <li>
                            <a>Concept of regression</a>
                        </li>
                        <li>
                            <a>Lines of regression</a>
                        </li>
                        <li>
                            <a>Fitting of lines of regression by the least squares method</a>
                        </li>
                        <li>
                            <a>Regression coefficient</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h4>Module 2</h4>
            <h5>DISCRETE PROBABILITY & PROBABILITY DISTRIBUTIONS</h5>
            <ol>
                <li>
                    <strong>Probability</strong>
                    <ol>
                        <li>
                            <a>Events</a>
                        </li>
                        <li>
                            <a>Conditional Probability</a>
                        </li>
                        <li>
                            <a>Independence</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Distributions</strong>
                    <ol>
                        <li>
                            <a>Univariate Probability Distributionns</a>
                        </li>
                        <li>
                            <a>Bivariate Probability Distribution</a>
                        </li>
                        <li>
                            <a>Mathematical Expectation</a>
                        </li>
                        <li>
                            <a>Bivariate distribution</a>
                        </li>
                        <li>
                            <a>Conditional distribution</a>
                        </li>
                        <li>
                            <a>Marginal distributions</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Discrete distributions</strong>
                    <ol>
                        <li>
                            <a>Discrete uniform distribution</a>
                        </li>
                        <li>
                            <a>Binomial distribution</a>
                        </li>
                        <li>
                            <a>Poisson distribution</a>
                        </li>
                        <li>
                            <a>Geometric distribution</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Continuous distributions</strong>
                    <ol>
                        <li>
                            <a>Uniform distribution</a>
                        </li>
                        <li>
                            <a>Normal distribution</a>
                        </li>
                        <li>
                            <a>Exponential distribution</a>
                        </li>
                        <li>
                            <a>Gamma distribution</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Queueing theory</strong>
                    <ol>
                        <li>
                            <a>Introduction</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h4>Module 3</h4>
            <h5>STATISTICAL INFERENCE</h5>
            <ol>
                <li>
                    <strong>Significance</strong>
                    <ol>
                        <li>
                            <a>Test of significance</a>
                        </li>
                        <li>
                            <a>Elements of Hypothesis Testing</a>
                        </li>
                        <li>
                            <a>Null hypothesis</a>
                        </li>
                        <li>
                            <a>Aleternative hypothesis</a>
                        </li>
                        <li>
                            <a>Simple hypotheses</a>
                        </li>
                        <li>
                            <a>Composite hypotheses</a>
                        </li>
                        <li>
                            <a>Critical region</a>
                        </li>
                        <li>
                            <a>Type I errors</a>
                        </li>
                        <li>
                            <a>Type II errors</a>
                        </li>
                        <li>
                            <a>Levels of significance and size</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Analysis of Variance (ANOVA)</strong>
                    <ol>
                        <li>
                            <a>Introduction</a>
                        </li>
                        <li>
                            <a>Heterogeneity</a>
                        </li>
                        <li>
                            <a>Analysis of Variance</a>
                        </li>
                        <li>
                            <a>Covariance</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h4>Module 4</h4>
            <h5>STATISTICAL INFERENCE</h5>
            <ol>
                <li>
                    <strong>Hypotheses</strong>
                    <ol>
                        <li>
                            <a>Linear Hypothesis</a>
                        </li>
                        <li>
                            <a>Orthogonal splitting of total variation</a>
                        </li>
                        <li>
                            <a>Selection of Valid Error</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Applications of ANOVA technique</strong>
                    <ol>
                        <li>
                            <a>One-way classified data</a>
                        </li>
                        <li>
                            <a>Two-way classified data</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Time Series Analysis</strong>
                    <ol>
                        <li>
                            <a>Introduction</a>
                        </li>
                        <li>
                            <a>Examples of time series from various fields</a>
                        </li>
                        <li>
                            <a>Components of a times series</a>
                        </li>
                        <li>
                            <a>Additive models</a>
                        </li>
                        <li>
                            <a>Multiplicative models</a>
                        </li>
                        <li>
                            <a>Trend and seasonal components</a>
                        </li>
                        <li>
                            <a>Estimation of trend by linear filtering (single and weighted moving averages)</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h4>Module 5</h4>
            <h5>OPERATIONS RESEARCH</h5>
            <ol>
                <li>
                    <strong>Linear programming</strong>
                    <ol>
                        <li>
                            <a>Meaning and scope of operations research</a>
                        </li>
                        <li>
                            <a>Definition of general LPP</a>
                        </li>
                        <li>
                            <a>Formulation of LPP</a>
                        </li>
                        <li>
                            <a>Solution of LPP by graphical method</a>
                        </li>
                        <li>
                            <a>Simplex algorithm</a>
                        </li>
                        <li>
                            <a>Transportation</a>
                        </li>
                        <li>
                            <a>Assignment problems</a>
                        </li>
                        <li>
                            <a>Sequencing problems</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Project management</strong>
                    <ol>
                        <li>
                            <a>CPM</a>
                        </li>
                        <li>
                            <a>PERT</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </Content>
    </Card> -->
</article>
