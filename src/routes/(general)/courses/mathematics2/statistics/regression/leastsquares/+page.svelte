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
            <div class="question">What is the least squares method? How is it used to fit lines of regression?</div>
            <div class="solution" use:typeset>
                <p>The Least Squares Method is a mathematical technique used in regression analysis to determine the parameters of a regression model that best fits the observed data. It is commonly employed to find the coefficients of the regression lines, such as the line of regression of Y on X or X on Y. The key aspects of the Least Squares Method in the context of fitting lines of regression include:</p>
                <ul>
                    <li><p><strong>Objective:</strong> The primary goal of the Least Squares Method is to minimize the sum of the squared differences (residuals) between the observed data points and the predicted values from the regression line.</p></li>
                    <li><p><strong>Mathematical Formula:</strong> In the case of fitting a regression line, such as {`\\( Y = a + bX \\)`}, the method aims to find the values of {`\\( a \\)`} and {`\\( b \\)`} that minimize the sum of squared residuals, denoted as {`\\( S \\)`}:</p>
                        <p>{`\\[ S = \\sum_{i=1}^{n} (Y_i - (a + bX_i))^2 \\]`}</p>
                        <p>Here, in the equation:</p>
                        <ul>
                            <li><p>{`\\( n \\)`} represents the number of data points.</p></li>
                            <li><p>{`\\( (X_i, Y_i) \\)`} represents each observed data point.</p></li>
                            <li><p>{`\\( a \\)`} and {`\\( b \\)`} are the coefficients (intercept and slope) of the regression line being fitted.</p></li>
                            <li><p>{`\\( (Y_i - (a + bX_i)) \\)`} represents the residual (the difference between the observed {`\\( Y_i \\)`} and the predicted {`\\( a + bX_i \\)`} value).</p></li>
                        </ul>
                    </li>
                </ul>
                
                <p>The Least Squares Method calculates {`\\( a \\)`} and {`\\( b \\)`} values that minimize {`\\( S \\)`}, making the fitted regression line the "best fit" to the data.</p>
                <ul>
                    <li><p><strong>Applications:</strong> The Least Squares Method is widely used in regression analysis, including linear regression, to estimate the coefficients that describe the relationship between variables. It is also applicable to other regression models beyond simple linear regression.</p></li>
                    <li><p><strong>Goodness of Fit:</strong> The method provides a measure of goodness of fit, indicating how well the regression line approximates the observed data points. A smaller sum of squared residuals indicates a better fit.</p></li>
                </ul>
                <p>In summary, the Least Squares Method is a fundamental technique in regression analysis that aims to find the coefficients of a regression line that minimizes the sum of squared differences between observed and predicted values, providing an optimal fit to the data.</p>

            </div>
        </Content>
    </Card>
</article>