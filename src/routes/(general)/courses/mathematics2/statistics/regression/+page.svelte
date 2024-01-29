<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $darkMode = true;
    $currentPath = "Regression";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regression" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        BASICS OF STATISTICS 
    </h2>
    <h3>Regression</h3>
    <Card>
        <Content>
            <div class="question">What is regression?</div>
            <div class="solution" use:typeset>
                <p>Regression is a statistical technique used in data analysis to model the relationship between one or more independent variables (predictors) and a dependent variable (outcome). The primary goal of regression analysis is to establish a mathematical equation that describes how changes in the independent variables are associated with changes in the dependent variable. The key aspects of regression analysis include:</p>
                <ul>
                    <li><p><strong>Objective:</strong> The primary objective of regression analysis is to understand and quantify the relationship between variables. It is used for predicting or explaining the value of the dependent variable based on the values of one or more independent variables.</p></li>
                    <li><p><strong>Types of Regression:</strong> There are various types of regression models, including linear regression, multiple regression, logistic regression, polynomial regression, and more. The choice of regression model depends on the nature of the data and the research question.</p></li>
                    <li><p><strong>Parameters:</strong> In regression analysis, parameters (coefficients) are estimated to fit the mathematical model to the data. These parameters quantify the strength and direction of the relationship between variables.</p></li>
                    <li><p><strong>Applications:</strong> Regression analysis is widely used in fields such as economics, finance, biology, social sciences, and machine learning. It is applied for tasks such as predicting future values, understanding causality, and making data-driven decisions.</p></li>
                    <li><p><strong>Linear Regression Example:</strong> In the case of linear regression, the mathematical equation takes the form {`\\( y = \\beta_0 + \\beta_1 x + \\varepsilon \\)`}, where {`\\( y \\)`} is the dependent variable, {`\\( x \\)`} is the independent variable, {`\\( \\beta_0 \\)`} is the intercept, {`\\( \\beta_1 \\)`} is the slope coefficient, and {`\\( \\varepsilon \\)`} represents the error term.</p></li>
                </ul>
                <p>Regression analysis aims to provide insights into the relationship between variables, make predictions, and support evidence-based decision-making. It is a fundamental tool in statistics and data analysis.</p>

            </div>
        </Content>
    </Card>
</article>