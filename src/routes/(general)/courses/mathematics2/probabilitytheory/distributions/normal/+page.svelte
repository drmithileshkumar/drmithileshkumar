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
    $currentPath = "Normal Distribution";
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.7em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.7em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.7em 0;
        color: rgba(0, 150, 200, 1);
    }
    strong {
        color: rgb(159, 116, 7);
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
    table {
        border-collapse: collapse;
        margin: auto;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    td {
        border: 1px solid;
        text-align: center;
        padding: 0.7em;
    }
    .image {
        width: 100%;
        margin: auto;
    }
    .questions li::marker {
        color: red;
        font-size: 1.2em;
        font-weight: bold;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/normal" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        NORMAL DISTRIBUTION
    </h4>
    <Card>
        <Content>
            <div>
                <p>Normal distribution is also called Gaussian distribution.</p>
                <div class="definition" style="padding-bottom: 0.1em;">
                   The probability density function for normal distribution is defined as {`\\[\\begin{aligned}
                    f(x) &= \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x - \\mu)^2/2\\sigma^2}
                    \\end{aligned}\\]`}
                    where <ol>
                        <li>\(-\infty \lt x\lt \infty\)</li>
                        <li>\(f(x)\geq 0\)</li>
                        <li>{`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`}</li>
                    </ol>
                    The corresponding distribution function is given by {`\\[\\begin{aligned}
                    F(x) &= P(X\\leq x)\\\\
                         &= \\frac{1}{\\sigma\\sqrt{2\\pi}}\\int_{-\\infty}^x e^{-(u - \\mu)^2/2\\sigma^2}du
                    \\end{aligned}\\]`}
                    If \(X\) has the distribution function given as above, we say that the random variable \(X\) is <em>normally distributed</em> with mean \(\mu\) and variance \(\sigma^2\).
                </div>
                <div class="definition">
                    We can replace {`\\[Z = \\frac{X -\\mu}{\\sigma}\\]`} For this variable mean is zero and variance is 1. We can write the density function as {`\\[f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}\\]`} This function is called the <strong>standard normal density function</strong>. \(Z\) is called the <strong>z-score</strong>.
                </div>
                
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Features</h6>
            <div class="image">
                <img src="/courses/mathematics2/normal.jpg" alt="normal" width="100%">
            </div>
            <p>Some of the basic features of normal distribution to keep in mind are</p>
            <ol>
                <li>Normal density function forms a symmetric bell-shaped curve.</li>
                <li>This distribution is symmetric around the mean, meaning that the probability of observing a value to the left of the mean is equal to the probability of observing the same value to the right of the mean.</li>
                <li>The probability density function forms a bell-shaped curve, with the highest point at the mean. As values move away from the mean, the probability of observing those values decreases.</li>
                <li>
                    In a normal distribution, the mean, median, and mode are all equal and located at the center of the distribution.
                </li>
                <li>
                    The spread of the data in a normal distribution is characterized by the standard deviation. The empirical rule, also known as the 68-95-99.7 rule, states that in a normal distribution, approximately 68% of the data falls within one standard deviation of the mean, 95% falls within two standard deviations, and 99.7% falls within three standard deviations.
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>z-table</h6>
            <p>z-table gives the area under the normal distribution curve from left to a given value of z, i.e. the area is the probability of z having value upto the given value.</p>
            <div class="image">
                <img width="100%" src="/courses/mathematics2/ztable1.webp" alt="ztable1">
            </div>
            <div class="image">
                <img width="100%" src="/courses/mathematics2/ztable2.webp" alt="ztable2">
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Examples</h6>
            <div class="examples">
                <ol>
                    <li>
                        Height of adult humans
                    </li>
                    <li>
                        IQ scores
                    </li>
                    <li>
                        Weights of newborn babies
                    </li>
                    <li>
                        Test scores
                    </li>
                    <li>
                        Blood pressure
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <h4>Questions</h4>
    <Card>
        <Content>
            <div class="questions">
                <ol>
                    <li>
                        The heights of students in a class follow a normal distribution with a mean of 65 inches and a standard deviation of 3 inches. What percentage of students are taller than 70 inches?
                    </li>
                    <li>
                        The scores on a standardized test follow a normal distribution with a mean of 500 and a standard deviation of 100. What percentage of students scored between 400 and 600?
                    </li>
                    <li>
                        The weights of apples in a crate follow a normal distribution with a mean of 150 grams and a standard deviation of 20 grams. What percentage of apples weigh less than 140 grams?
                    </li>
                    <li>
                        The IQ scores of a population follow a normal distribution with a mean of 100 and a standard deviation of 15. What percentage of the population has an IQ score between 85 and 115?
                    </li>
                    <li>
                        The monthly electricity bills for a household follow a normal distribution with a mean of Rs 100 and a standard deviation of Rs 20. What percentage of households have a bill greater than Rs 120?
                    </li>
                    <li>
                        The reaction times of drivers to a stimulus follow a normal distribution with a mean of 0.5 seconds and a standard deviation of 0.1 seconds. What percentage of drivers have a reaction time less than 0.4 seconds?
                    </li>
                    <li>
                        The scores on a math test follow a normal distribution with a mean of 75 and a standard deviation of 10. What is the z-score for a student who scored 85 on the test?
                    </li>
                    <li>
                        The heights of adult males in a population follow a normal distribution with a mean of 70 inches and a standard deviation of 3 inches. What is the probability that a randomly selected adult male is shorter than 68 inches?
                    </li>
                    <li>
                        The diameters of bolts produced by a factory follow a normal distribution with a mean of 5 inches and a standard deviation of 0.1 inches. What percentage of bolts have a diameter between 4.9 and 5.1 inches?
                    </li>
                    <li>
                        The blood pressure of adults follows a normal distribution with a mean of 120 mmHg and a standard deviation of 10 mmHg. What is the probability that a randomly selected adult has a blood pressure greater than 140 mmHg?
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
</article>