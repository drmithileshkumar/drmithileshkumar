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
    $currentPath = "Joint Distributions";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        JOINT DISTRIBUTIONS
    </h4>
    <Card>
        <Content>
            <h6>Joint Distribution</h6>
            <div>
                <div class="definition">
                    <strong>Joint distribution</strong> of a bivariate data ((X, Y) pairs) with individual sample spaces {`\\[
                        \\begin{aligned}
                        S_X &= \\{x_1, x_2, ..., x_m\\}\\\\
                        S_Y &= \\{y_1, y_2, ..., y_n\\}
                        \\end{aligned}
                        \\]`} 
                    is defined as {`\\[P(X = x, Y = y) = p(x,y)\\]`} where 
                    <ol>
                        <li>\(p(x,y) \geq 0\)</li>
                        <li>\(\sum_x\sum_y p(x,y) = 1\)</li>
                    </ol>
                    <p>We say that the probability that \(X = x\) and \(Y = y\) is \(p(x, y)\).</p>
                </div>
                <p>
                    Joint distribution is usually shown by a table where \(S_X\) is shown along the rows and \(S_Y\) is shown along column. Each entry in the table is the value \(p(x_i, y_j)\).
                </p>
                <table>
                    <tr>
                        <td>\(p(x, y)\)</td>
                        <td style="background: rgba(0, 200, 0, 0.2);">\(y_1\)</td>
                        <td style="background: rgba(0, 200, 0, 0.2);">\(y_2\)</td>
                        <td style="background: rgba(0, 200, 0, 0.2);">\(\cdots\)</td>
                        <td style="background: rgba(0, 200, 0, 0.2);">\(y_n\)</td>
                        <td style="color: rgba(0, 200, 0, 1)">\(\sum_Y \rightarrow\)</td>
                    </tr>
                    <tr>
                        <td style="background: rgba(200, 0, 0, 0.2);">\(x_1\)</td>
                        <td style="background: linear-gradient(45deg, rgba(200, 0, 0, 0.7), rgba(0, 200, 0, 0.7)); color: white;">\(p(x_1,y_1)\)</td>
                        <td style="background: rgba(0, 200, 0, 0.7); color: white;">\(p(x_1, y_2)\)</td>
                        <td style="background: rgba(0, 200, 0, 0.7); color: white;">\(\cdots\)</td>
                        <td style="background: rgba(0, 200, 0, 0.7); color: white;">\(p(x_1, y_n)\)</td>
                        <td style="background: rgba(0, 200, 0, 1); color: white;">\(p_1(x_1)\)</td>
                    </tr>
                    <tr>
                        <td style="background: rgba(200, 0, 0, 0.2);">\(x_2\)</td>
                        <td style="background: rgba(200, 0, 0, 0.7); color: white;">\(p(x_2,y_1)\)</td>
                        <td>\(p(x_2, y_2)\)</td>
                        <td>\(\cdots\)</td>
                        <td>\(p(x_2, y_n)\)</td>
                        <td>\(p_1(x_2)\)</td>
                    </tr>
                    <tr>
                        <td style="background: rgba(200, 0, 0, 0.2);">\(\vdots\)</td>
                        <td style="background: rgba(200, 0, 0, 0.7); color: white;">\(\vdots\)</td>
                        <td>\(\vdots\)</td>
                        <td>\(\ddots\)</td>
                        <td>\(\vdots\)</td>
                        <td>\(\vdots\)</td>
                    </tr>
                    <tr>
                        <td style="background: rgba(200, 0, 0, 0.2);">\(x_m\)</td>
                        <td style="background: rgba(200, 0, 0, 0.7); color: white;">\(p(x_m,y_1)\)</td>
                        <td>\(p(x_m, y_2)\)</td>
                        <td>\(\cdots\)</td>
                        <td>\(p(x_m, y_n)\)</td>
                        <td>\(p_1(x_m)\)</td>
                    </tr>
                    <tr>
                        <td style="color: rgba(200, 0, 0, 1)">\(\sum_X \downarrow\)</td>
                        <td style="background: rgba(200, 0, 0, 1); color: white;">\(p_2(y_1)\)</td>
                        <td>\(p_2(y_2)\)</td>
                        <td>\(\cdots\)</td>
                        <td>\(p_2(y_n)\)</td>
                        <td>1</td>
                    </tr>
                </table>
                <p>
                    The probability that \(X = x_1\) is denoted by \(p(X = x_1\)) shown as \(p_1(x_1)\) in the last column of the table above and is obtained by adding the numbers in the first row. We define
                    {`\\[\\begin{aligned}
                    p(X = x_i) &= p_1(x_i) = \\sum_{j = 1}^{n} p(x_i, y_j)\\\\
                    p(Y = y_j) &= p_2(y_j) = \\sum_{i = 1}^{m} p(x_i, y_j)
                    \\end{aligned}\\]`}
                </p>
                <p>\(p_1(x)\) and \(p_2(y)\) are called <strong>marginal probability distribution</strong> of \(X\) and \(Y\).</p>
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
            <h6>Theorem</h6>
            <div class="theorem">
                If \(X\) and \(Y\) are independent, then {`\\[P(X = x, Y = y) = P(X = x)\\cdot P(Y = y)\\]`}
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Conditional distribution</h6>
            <div class="definition">
                The conditional probability distribution of Y given X is defined as {`\\[p(y|x) = \\dfrac{p(x,y)}{p_1(x)}\\]`} and the conditional probability distribution of X given Y is defined as {`\\[p(x|y) = \\dfrac{p(x,y)}{p_2(y)}\\]`}
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">Write probability distributions for problems in the practice set. </div>
        </Content>
    </Card>
    
</article>