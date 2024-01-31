<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $currentPath = "Least Squares Method";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/leastsquares" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Regression
    </h2>
    <h3>Least Squares Method</h3>
    <Card>
        <Content>
            <h6>What is the least squares method?</h6>
            <div use:typeset>
                <p>
                    Given data points \((x_i, y_i)\) for variable \(X\) and \(Y\), suppose there is a model that for each input \(x_i\) predicts the value of \(Y\) to be \(f(x_i, \beta)\) for some function \(f\) and parameters \(\beta\), then the least squares method is used to determine the parameters \(\beta\) by minimizing the sum {`\\[S = \\sum_{i=1}^n (y_i - f(x_i, \\beta))^2\\]`} Notice that \(\beta\) can be more than one parameter.
                </p>
                <p>
                    The above sum's minima is obtained by differentiating \(S\) with respect to parameters \(\beta\) to get a set of equations that can be solved to fix the parameters. As an example, we'll use this method in the case of linear regression.
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>The least squares method in linear regression</h6>
            <div use:typeset>
                <p>
                    In the case of fitting a regression line, such as {`\\( Y = a + bX \\)`}, the method aims to find the values of {`\\( a \\)`} and {`\\( b \\)`} that minimize the sum of squared residuals, denoted as {`\\( S \\)`}:
                    {`\\[ S = \\sum_{i=1}^{n} (y_i - (a + bx_i))^2 \\]`}
                    Here, in the equation:
                </p>
                <ul>
                    <li><p>{`\\( n \\)`} represents the number of data points.</p></li>
                    <li><p>{`\\( (x_i, y_i) \\)`} represents each observed data point.</p></li>
                    <li><p>{`\\( a \\)`} and {`\\( b \\)`} are the coefficients (intercept and slope) of the regression line being fitted.</p></li>
                    <li><p>{`\\( (y_i - (a + bx_i)) \\)`} represents the residual (the difference between the observed {`\\( y_i \\)`} and the predicted {`\\( a + bx_i \\)`} value).</p></li>
                </ul>
                <p>
                    Differentiating \(S\) with respect to \(a\) and \(b\), we get 
                    {`\\[
                        \\begin{aligned}
                        \\frac{\\delta S}{\\delta a} &= -2\\sum (y_i - (a + bx_i)) \\\\
                                                     &= -2n[\\overline{Y} -a - b\\overline{X}]\\\\
                        \\frac{\\delta S}{\\delta b} &= -2\\sum x_i(y_i - (a + bx_i))\\\\
                                                     &= -2[\\sum x_iy_i - na\\overline{X} - b\\sum x_i^2]
                        \\end{aligned}
                        \\]`}
                </p>
                <p>
                    For minima, the above derivatives are set to zero.
                    {`\\[
                        \\begin{aligned}
                        \\overline{Y} -a - b\\overline{X} &= 0\\\\
                        \\implies a &= \\overline{Y} - b\\overline{X}\\\\
                        \\sum x_iy_i -na\\overline{X} - b\\sum x_i^2 &= 0\\\\
                        \\sum x_i y_i -n\\overline{XY} + nb\\overline{X}^2 - b\\sum x_i^2 &= 0
                        
                        \\end{aligned}
                        \\]
                    `}
                    After simplification, we get
                    {`\\[
                        \\begin{aligned}
                        b &= \\frac{\\sum x_i y_i - n\\overline{XY}}{\\sum x_i^2 - n\\overline{X}^2}\\\\
                        \\implies b &= \\frac{\\sum (x_i - \\overline{X})(y_i - \\overline{Y})}{\\sum (x_i - \\overline{X})^2}
                        \\end{aligned}
                        \\]`}
                </p>
                
                <p>The Least Squares Method calculates {`\\( a \\)`} and {`\\( b \\)`} values that minimize {`\\( S \\)`}, making the fitted regression line the "best fit" to the data.</p>
            </div>
        </Content>
    </Card>
</article>