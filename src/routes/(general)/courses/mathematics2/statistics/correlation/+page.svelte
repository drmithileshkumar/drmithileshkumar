<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $darkMode = false;
    $currentPath = "Correlation";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        BASICS OF STATISTICS 
    </h2>
    <h3>Correlation</h3>
    <Card>
        <Content>
            <div class="question">
                What is correlation?
            </div>
            <div class="solution" use:typeset>
                
                <p>Correlation is a fundamental concept in statistics that measures the degree and direction of the relationship between two or more variables. It allows us to understand how changes in one variable are associated with changes in another, providing valuable insights into patterns and dependencies in data.</p>

                <p>Correlation does not imply causation; it simply quantifies the strength and direction of the association between variables. There are different types of correlation coefficients, with the most common one being the Pearson correlation coefficient, denoted as {`\\( r \\)`}.</p>

                <p><strong>Pearson Correlation Coefficient:</strong> Pearson's {`\\( r \\)`} quantifies the linear relationship between two variables. It ranges from -1 to +1, with the following interpretations:</p>

                <ul>
                    <li><p>Positive {`\\( r \\)`} (+1): Indicates a perfect positive linear relationship, meaning as one variable increases, the other also increases linearly.</p></li>
                    <li><p>Negative {`\\( r \\)`} (-1): Indicates a perfect negative linear relationship, meaning as one variable increases, the other decreases linearly.</p></li>
                    <li><p>Zero {`\\( r \\)`} (0): Indicates no linear relationship between the variables.</p></li>
                </ul>

                <p>The formula for calculating Pearson's {`\\( r \\)`} is as follows:</p>

                <p>{`\\[ r = \\frac{\\sum{(x_i - \\bar{x})(y_i - \\bar{y})}}{\\sqrt{\\sum{(x_i - \\bar{x})^2}\\sum{(y_i - \\bar{y})^2}}} \\]`}</p>

                <p>Here, {`\\( x_i \\)`} and {`\\( y_i \\)`} are data points, and {`\\( \\bar{x} \\)`} and {`\\( \\bar{y} \\)`} are the means (averages) of the two variables.</p>

                <p>Correlation is a powerful tool for understanding relationships between variables, and it is widely used in fields such as economics, finance, psychology, and more. It helps in making predictions, identifying trends, and conducting data-driven analyses.</p>

            </div>
        </Content>
    </Card>
</article>