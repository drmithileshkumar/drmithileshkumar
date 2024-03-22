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
    $currentPath = "Probability Distributions";
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
    table {
        border-collapse: collapse;
        margin: auto;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    td {
        border: 1px solid;
        text-align: center;
        padding: 0.5em;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        PROBABILITY DISTRIBUTIONS
    </h4>
    <Card>
        <Content>
            <div>
                <div class="definition">
                    <strong>Probability distribution</strong> is a function that gives the probability of each outcome of an experiment.
                </div>
            </div>
            <div class="examples">
                <ol>
                    <li>
                        Suppose a fair coin is tossed once. The sample space of this experiment is {`\\[S = \\{H, T\\}\\]`} Since the coin is fair, we say that {`\\[\\begin{aligned}p(H) &= \\frac{1}{2}\\\\
                        p(T) &= \\frac{1}{2} \\end{aligned}\\]`}
                        In this case, we say that the probability distribution is the function {`\\[p: \\{H, T\\}\\to \\{\\frac{1}{2}\\}\\]`}
                    </li>
                    <li>
                        Suppose the coin was not fair and it is more likely to get \(H\) than \(T\). Say, {`\\[\\begin{aligned}p(H) &= \\frac{3}{4}\\\\
                        p(T) &= \\frac{1}{4} \\end{aligned}\\]`} In this case, \(p\) defines the probability distribution and we write {`\\[p: \\{H, T\\}\\to \\{\\frac{1}{4}, \\frac{3}{4}\\}\\]`}
                    </li>
                </ol>
            </div>
            <div class="remark">
                <p>Probability distribution is sometimes called probability function as well.</p>
            </div>
            <div class="definition">
                When the sample space is finite, we get discrete probability distribution and it is written in the table form.
            </div>
            <div class="examples">
                <ol>
                    <li>
                        Suppose two fair coins are tossed once. Then the sample space is {`\\[S = \\{HH, HT, TH, TT\\}\\]`} and we have  {`\\[\\begin{aligned}p(HH) &= \\frac{1}{4}\\\\
                        p(HT) &= \\frac{1}{4}\\\\
                        p(TH) &= \\frac{1}{4}\\\\
                        p(TT) &= \\frac{1}{4} \\end{aligned}\\]`}
                        We write it in the table as follows:
                        <table>
                            <tr>
                                <td>\(x\)</td>
                                <td>HH</td>
                                <td>HT</td>
                                <td>TH</td>
                                <td>TT</td>
                            </tr>
                            <tr>
                                <td>\(p(x)\)</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                            </tr>
                        </table>
                        We can treat this case as a bivariate data where \(X\) corresponds to the first coin and \(Y\) corresponds to the second coin. The probability distribution now is written as \(p(X = H, Y = T)\). It is referred as <strong>joint distribution</strong>.
                        <table>
                            <tr>
                                <td>\((x, y)\)</td>
                                <td>H</td>
                                <td>T</td>
                            </tr>
                            <tr>
                                <td>H</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                            </tr>
                            <tr>
                                <td>T</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                                <td>{`\\(\\frac{1}{4}\\)`}</td>
                            </tr>
                        </table>
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">Write probability distributions for problems in the practice set. </div>
        </Content>
    </Card>
    
</article>