<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "../content";
    $navList = contents;
    $currentPath = "Regression Coefficient";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressioncoefficient" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Regression
    </h2>
    <h3>Regression coefficient</h3>
    <Card>
        <Content>
            <div class="question">What is regression coefficient?</div>
            <div class="solution" use:typeset>
                <p>A regression coefficient, often denoted as {`\\( b \\)`} or {`\\( \\beta \\)`}, is a numerical value that represents the strength and direction of the relationship between an independent variable (predictor) and a dependent variable (outcome) in a regression model. Regression coefficients are essential in quantifying how changes in the independent variable are associated with changes in the dependent variable. The key aspects of regression coefficients include:</p>
                <ul>
                    <li><p><strong>Definition:</strong> A regression coefficient represents the change in the dependent variable for a one-unit change in the independent variable while holding other variables constant.</p></li>
                    <li><p><strong>Interpretation:</strong> The sign of the coefficient (positive or negative) indicates the direction of the relationship. A positive coefficient suggests that as the independent variable increases, the dependent variable also increases. A negative coefficient suggests an inverse relationship.</p></li>
                    <li><p><strong>Strength:</strong> The magnitude (absolute value) of the coefficient indicates the strength of the relationship. A larger coefficient implies a stronger association between the variables.</p></li>
                    <li><p><strong>Mathematical Formula:</strong> In a linear regression model, the coefficient {`\\( b \\)`} represents the slope of the regression line and is calculated using the formula:</p>
                        <p>{`\\[ b = \\frac{\\sum{(X_i - \\bar{X})(Y_i - \\bar{Y})}}{\\sum{(X_i - \\bar{X})^2}} \\]`}</p>
                        <p>Here, in the equation:</p>
                        <ul>
                            <li><p>{`\\( X_i \\)`} represents the values of the independent variable.</p></li>
                            <li><p>{`\\( Y_i \\)`} represents the values of the dependent variable.</p></li>
                            <li><p>{`\\( \\bar{X} \\)`} and {`\\( \\bar{Y} \\)`} represent the means (averages) of the independent and dependent variables, respectively.</p></li>
                        </ul>
                        <p>The coefficient {`\\( b \\)`} quantifies the change in {`\\( Y \\)`} for a one-unit change in {`\\( X \\)`}.</p>
                    </li>
                </ul>
                
                <ul>
                    <li><p><strong>Applications:</strong> Regression coefficients are used to analyze and interpret the relationship between variables in regression models. They provide insights into how changes in one variable affect another and are essential for making predictions and drawing conclusions based on the model.</p></li>
                </ul>
                <p>Regression coefficients play a crucial role in various fields, including economics, finance, science, and social sciences, where understanding and quantifying relationships between variables are essential for decision-making and analysis.</p>

            </div>
        </Content>
    </Card>
</article>