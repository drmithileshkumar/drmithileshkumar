<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $currentPath = "Lines of Regression";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressionlines" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Regression
    </h2>
    <h3>Lines of regression</h3>
    <Card>
        <Content>
            <div class="question">What are lines of regression?</div>
            <div class="solution" use:typeset>
                <p>Lines of regression, also known as regression lines, are mathematical lines used in regression analysis to model the relationship between two variables, typically an independent variable (predictor) and a dependent variable (outcome). Lines of regression are used to quantify and predict how changes in the independent variable are associated with changes in the dependent variable. There are two types of lines of regression:</p>
                <ul>
                    <li><p><strong>Regression Line of Y on X:</strong> This line is used to predict the values of the dependent variable (Y) based on the values of the independent variable (X). It is often referred to as the "line of best fit" and is represented mathematically as:</p></li>
                </ul>
                <p>{`\\[ Y = a + bX \\]`}</p>
                <ul>
                    <li><p><strong>Regression Line of X on Y:</strong> This line is used to predict the values of the independent variable (X) based on the values of the dependent variable (Y). It is represented mathematically as:</p></li>
                </ul>
                <p>{`\\[ X = c + dY \\]`}</p>
                <p>Here, in the equations:</p>
                <ul>
                    <li><p>{`\\( Y \\)`} represents the dependent variable (outcome).</p></li>
                    <li><p>{`\\( X \\)`} represents the independent variable (predictor).</p></li>
                    <li><p>{`\\( a \\)`} and {`\\( c \\)`} are the intercepts of the regression lines on the Y and X axes, respectively.</p></li>
                    <li><p>{`\\( b \\)`} and {`\\( d \\)`} are the slope coefficients that quantify the strength and direction of the relationship between the variables.</p></li>
                </ul>
                <p>The lines of regression are used to make predictions, understand the relationship between variables, and provide insights into how changes in one variable affect the other. They are fundamental tools in regression analysis.</p>

            </div>
        </Content>
    </Card>
</article>