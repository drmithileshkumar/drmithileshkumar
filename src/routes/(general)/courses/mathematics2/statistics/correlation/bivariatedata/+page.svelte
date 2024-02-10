<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $currentPath = "Bivariate Data";
    $darkMode = false;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatedata" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Correlation
    </h2>
    <h3>Bivariate Data</h3>
    <Card>
        <Content>
            <div class="question">
                What is bivariate data?
            </div>
            <div class="solution" use:typeset>
                <p>Bivariate data involves pairs of related data points, each representing two different variables. These data points are used to explore the relationship between these two variables. For instance, if we consider a dataset with variables {`\\( X \\)`} and {`\\( Y \\)`}, each data point in the dataset will be a pair {`\\( (x_i, y_i) \\)`}, where {`\\( x_i \\)`} is a value of {`\\( X \\)`} and {`\\( y_i \\)`} is the corresponding value of {`\\( Y \\)`}. The main characteristics of bivariate data include:</p>
                <ul>
                    <li><p>Two Variables: Bivariate data consists of observations of two variables. For example, in a study of height and weight, each observation will include both a height and a weight value.</p></li>
                    <li><p>Relationship Analysis: The primary purpose of collecting bivariate data is to analyze the relationship between the two variables. This can involve looking for patterns, correlations, or cause-and-effect relationships.</p></li>
                    <li><p>Visualization: Bivariate data is often visualized using scatter plots, line graphs, or other graphical representations to help identify and understand relationships between the variables.</p></li>
                    <li><p>Statistical Analysis: Various statistical methods, such as correlation and regression analysis, are used to quantify the strength and nature of the relationship between the two variables.</p></li>
                    <li><p>Applications: Bivariate data analysis is used in numerous fields such as economics, biology, and social sciences to test hypotheses or make predictions.</p></li>
                </ul>
                <p>Overall, bivariate data provides a way to understand how two variables interact with each other within a given dataset.</p>
            </div>
        </Content>
    </Card>
</article>