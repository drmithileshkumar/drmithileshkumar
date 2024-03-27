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
    $currentPath = "Assignment 1";
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
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ol li::marker {
        font-size: 1.2em;
        color: red;
        font-weight: bold;
    }
    ol li {
        padding: 0.5em 0;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/assignment1" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Assignment 1 
    </h4>
    
    <Card>
        <Content>
            <h6>Measures of Central Tendency</h6>
            <ol>
                <li>
                    Define arithmetic mean, mode, median and standard deviation. 
                </li>
                <li>
                    Consider the following data. X = 6, 5, 7, 4, 8, 3, 9. Calculate arithmetic mean {`\\(\\bar{x}\\)`}, mode, median and standard deviation.
                </li>
            </ol>
            <h6>Correlation</h6>
            <ol>
                <li>What is bivariate data and bivariate frequency distribution?</li>
                <li>What is correlation between two variables?</li>
                <li>What are different types of correlation?</li>
                <li>What is the formula for Karl Pearson's coefficient of correlation?</li>
                <li>How is Spearman's rank correlation coefficient different from Pearson's coefficient?</li>
                <li>Consider the following data. 
                    <br>
                    X = 1, 2, 3, 4, 5, 6
                    <br>
                    Y = 12, 6, 8, 10, 2, 7
                    <br>
                    Calculate Pearson's coefficient of correlation and Spearman's rank correlation coefficient.
                </li>
            </ol>
            <h6>Regression</h6>
            <ol>
                <li>What is regression?</li>
                <li>What is linear regression and line of regression?</li>
                <li>What is the formula for the coefficient of regression?</li>
                <li>What is least squares method? Use least squares method to derive the coefficient of regression.</li>
                <li>Consider the following data. 
                    <br>
                    X = 1, 2, 3, 4, 5, 6
                    <br>
                    Y = 12, 6, 8, 10, 2, 7
                    <br>
                    Calculate linear regression coefficient for the above data.</li>
            </ol>
            <h6>Probability</h6>
            <ol>
                <li>What is probability?</li>
                <li>What is sample space?</li>
                <li>What is an event?</li>
                <li>What is the probability of a sure and impossible event?</li>
                <li>Define the conditional probability of an event B given an event A.</li>
                <li>What are independent events?</li>
                <li>A positive non-zero number less than 20 is chosen at random. What is the probability that it is a prime number?</li>
                <li>What is the probability that the above prime number is greater than 10?</li>
                <li>A fair coin is rolled four times. What is the probability of getting at least 2 heads?</li>
                <li>A box contains 8 red balls, 6 green balls, and 4 blue balls. If two balls are drawn without replacement, what is the probability that both are blue?</li>
                <li>In a group of 50 students, 30 are left-handed and 20 are female. What is the probability that a randomly selected student is both left-handed and female?</li>
            </ol>
            <h6>Distribution</h6>
            <ol>
                <li>What is a probability distribution?</li>
                <li>What is joint probability distribution?</li>
                <li>What is marginal probability of an event A in joint distribution of two events A and B?</li>
                <li>What is conditional distribution of Y given X?</li>
                <li>What is a Bernoulli trial?</li>
                <li>What is Binomial distribution?</li>
                <li>Two fair die are rolled once. Event A is getting a 6 on the first die. Event B is getting a number larger than the first die. Are events A and B independent?</li>
                <li>A fair die is rolled 10 times. What is the probability of getting 4 sixes?</li>
            </ol>
        </Content>
    </Card>
    
</article>