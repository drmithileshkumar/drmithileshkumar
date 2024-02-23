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
        font-size: 1.7em;
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
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        BASICS OF STATISTICS 
    </h4>
    <h5>Regression</h5>
    <Card>
        <Content>
            
            <p>
                Regression is a statistical technique used in data analysis to model the relationship between one or more independent variables (predictors) and a dependent variable (outcome). The primary goal of regression analysis is to establish a mathematical equation that describes how changes in the independent variables are associated with changes in the dependent variable. 
            </p>
            <p>
                There are various types of regression models, including linear regression, multiple regression, logistic regression, polynomial regression, and more. The choice of regression model depends on the nature of the data and the research question.
            </p>
            <p>
                In regression analysis, parameters (coefficients) are estimated to fit the mathematical model to the data. These parameters quantify the strength and direction of the relationship between variables.
            </p>
            <p>
               In the case of linear regression, the mathematical equation takes the form {`\\( y = \\beta_0 + \\beta_1 x + \\varepsilon \\)`}, where {`\\( y \\)`} is the dependent variable, {`\\( x \\)`} is the independent variable, {`\\( \\beta_0 \\)`} is the intercept, {`\\( \\beta_1 \\)`} is the slope coefficient, and {`\\( \\varepsilon \\)`} represents the error term.
            </p>
        </Content>
    </Card>
</article>