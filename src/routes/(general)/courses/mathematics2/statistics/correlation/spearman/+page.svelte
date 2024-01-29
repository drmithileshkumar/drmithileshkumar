<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $currentPath = "Spearman's rank correlation coefficient";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/spearman" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Correlation
    </h2>
    <h3>Spearman's rank correlation coefficient</h3>
    <Card>
        <Content>
            <h6>Ranks</h6>
            <div use:typeset>
                <p>
                    Given a variable \(X\) with values \(x_1, x_2, \dots, x_n\), the rank of a value \(x_i\) is assigned based on its size, with the smallest value getting rank 1, next smallest rank 2, and so on. Ties are given an average rank.
                </p>
                <p class="example">
                    Let \(X\) has values 13, 3, 14, 19, 5, 6, 9. The ranks of the data are 5, 1, 6, 7, 2, 3, 4.
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                What is Spearman's rank correlation coefficient?
            </div>
            <div class="solution" use:typeset>
                <p>
                    Spearman's rank correlation is the same as Pearson's correlation, but instead of using the data values \(x_i\) and \(y_i\), we use their ranks \(r_i = rank(x_i)\) and \(s_i = rank(y_i)\). Let us denote the rank data for variable \(X\) as \(R_x\) and for \(Y\) as \(R_y\).
                </p>
                <p>
                    Spearman's rank correlation coefficient is defined as {`
                    \\[
                        r_s = \\dfrac{cov(R_x, R_y)}{\\sigma_{R_x}\\sigma_{R_y}}  
                    \\]
                    `}
                    where the covariance {`\\[cov(R_x, R_y) = \\dfrac{1}{n}\\sum(r_i-\\bar{r})(s_i - \\bar{s})\\]`}, {`\\(\\bar{r}\\)`} and {`\\(\\bar{s}\\)`} are means of ranks of \(X\) and \(Y\). {`\\(\\sigma_{R_x}\\)`} and {`\\(\\sigma_{R_y}\\)`} are standard deviations of the ranks. 
                </p>
                <p>
                    Easier formula for Spearman correlation coefficient can be obtained assuming that the ranks \(x_i\) and \(y_i\) take values from 1 to n, i.e. no two elements get the same rank, i.e. all elements are distinct.
                </p>
                <p>
                    The means {`\\(\\bar{r}\\)`} and {`\\(\\bar{s}\\)`} are equal under above assumption as shown below.
                    {`\\[
                        \\begin{aligned}
                        \\bar{r} &= \\bar{s}\\\\
                                 &= \\frac{1 + 2 + \\cdots + n}{n}\\\\
                                 &= \\frac{n + 1}{2}
                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    Even the standard deviations {`\\(\\sigma_{R_x}\\)`} and {`\\(\\sigma_{R_y}\\)`} are equal.
                    {`\\[
                        \\begin{aligned}
                        \\sigma_{R_x}^2 &= \\sigma_{R_y}^2\\\\
                                      &= \\frac{1}{n}\\sum (r_i - \\bar{r})^2\\\\
                                      &= \\frac{1}{n}\\sum (r_i^2 + \\bar{r}^2 - 2r_i \\bar{r})\\\\
                                      &= \\frac{1}{n}\\sum r_i^2 - \\bar{r}^2\\\\
                                      &= \\frac{1}{n}\\frac{n(n+1)(2n+1)}{6} - \\left(\\frac{n + 1}{2}\\right)^2\\\\
                                      &= \\frac{n^2 - 1}{12}
                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    For each pair of values \((x_i, y_i)\) define \[d_i = r_i - s_i\]
                </p>
                <p>
                    {`\\[
                        \\begin{aligned}
                        \\sum d_i^2 &= \\sum (r_i - s_i)^2\\\\
                                    &= \\sum (r_i - \\bar{r} - s_i + \\bar{r})^2\\\\
                                    &= \\sum (r_i - \\bar{r} - s_i + \\bar{s})^2\\\\
                                    &= \\sum (r_i - \\bar{r})^2 + \\sum (s_i - \\bar{s})^2\\\\ 
                                    &- 2\\sum (r_i - \\bar{r})(s_i - \\bar{s})\\\\
                                    &= n\\sigma_{R_x}^2 + n\\sigma_{R_y}^2 - 2cov(R_x, R_y)\\\\
                                    &= 2n(\\sigma_{R_x}^2 - cov(R_x, R_y))\\\\
                                    &= 2n(\\sigma_{R_x}^2 - r_s\\sigma_{R_x}^2)\\\\
                            1-r_s   &= \\frac{\\sum d_i^2}{2n\\sigma_{R_x}^2}\\\\
                              r_s   &= 1 - \\frac{12\\sum d_i^2}{2n(n^2 - 1)}\\\\
                                    &= 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}
                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    When the data points \(x_i\) and \(y_i\) are monotonic (even if non-linear), the ranks \(x_i\) and \(y_i\) will be equal and hence \(d_i = 0\). This implies \(r_s = 1\).
                </p>
                <p class="question">
                    Show that \(r_s = -1\) when \(x_i\) and \(y_i\) are anti-monotonic, i.e. if ranks of \(x_i\) are \(1, 2, \dots, n\), then the ranks of \(y_i\) are \(n, n-1, \dots, 1\).
                </p>
            </div>
        </Content>
    </Card>
</article>