<script lang='ts'>
    //@ts-nocheck
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents } from "$lib/pages/courses/mathematics2/content";
    $navList = contents;
    $currentPath = "Correlation between two variables";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation2" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <h2>
        Correlation
    </h2>
    <h3>Correlation between two variables</h3>
    <Card>
        <Content>
            <div class="question">
                What is correlation between two variables?
            </div>
            <div class="solution" use:typeset>
                <p>Correlation between two variables is a statistical measure that describes the extent to which two variables change together, and the strength of their relationship. A high correlation means that as one variable changes, either up or down, the other variable tends to change in a specific direction consistently. The key aspects of correlation include:</p>
                <ul>
                    <li><p><strong>Direction of Relationship:</strong> Correlation can be positive or negative. Positive correlation means that as one variable increases, the other also increases. Negative correlation means that as one variable increases, the other decreases.</p></li>
                    <li><p><strong>Magnitude of Relationship:</strong> The strength of the correlation is indicated by the correlation coefficient, typically denoted as {`\\( r \\)`}. The value of {`\\( r \\)`} ranges from -1 to +1.</p></li>
                    <li><p><strong>Correlation Coefficient:</strong> Mathematically, the correlation coefficient {`\\( r \\)`} for a sample of size {`\\( n \\)`}, with variables {`\\( X \\)`} and {`\\( Y \\)`} having means {`\\( \\bar{X} \\)`} and {`\\( \\bar{Y} \\)`} respectively, is defined as:</p></li>
                </ul>
                <p>{`\\[ r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{X})(y_i - \\bar{Y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{X})^2 \\sum_{i=1}^{n} (y_i - \\bar{Y})^2}} \\]`}</p>
                <ul>
                    <li><p><strong>Interpretation:</strong> A value of {`\\( r = 1 \\)`} indicates a perfect positive correlation, while {`\\( r = -1 \\)`} indicates a perfect negative correlation. A value of {`\\( r = 0 \\)`} means there is no linear correlation between the variables.</p></li>
                    <li><p><strong>Limitations:</strong> It's important to note that correlation does not imply causation. Two variables may be correlated without one causing the other to occur.</p></li>
                </ul>
                <p>Correlation is widely used in various fields such as economics, psychology, and environmental science to understand relationships and make predictions.</p>
            </div>
        </Content>
    </Card>
</article>