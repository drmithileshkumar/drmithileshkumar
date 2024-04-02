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
    $currentPath = "Poisson Distribution";
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
        width: 300px;
        margin: auto;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/poisson" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        POISSON DISTRIBUTION
    </h4>
    <Card>
        <Content>
            <div class="definition" style="padding-bottom: 0.1em;">
                   Let \(X\) be a discrete random variable that can take on the values 0, 1, 2, ... such that the probability function of \(X\) is given by {`\\[f(x) = P(X = x) = \\frac{\\lambda^xe^{-\\lambda}}{x!}\\]`} where \(x = 0, 1, 2, ...\) and \(\lambda\) is a given positive constant. This distribution is called the <strong>Poisson distribution</strong>.
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Examples</h6>
            <div class="examples">
                <ol>
                    <li>
                        Suppose you're interested in modeling the number of cars that pass through an intersection in a given hour. If the average rate of cars passing through is known, you can use a Poisson distribution to calculate the probability of a specific number of cars passing through in that hour.
                    </li>
                    <li>
                        A call center might receive phone calls from customers throughout the day. By modeling the number of calls received per hour using a Poisson distribution, you can estimate the probability of receiving a certain number of calls in a given time frame.
                    </li>
                    <li>
                        When proofreading a book, you might be interested in modeling the number of typographical errors per page. If you know the average rate of errors per page, you can use a Poisson distribution to estimate the probability of encountering a certain number of errors on a page.
                    </li>
                    <li>
                        Traffic engineers might want to predict the number of accidents that occur at a busy intersection each month. Using historical data on accident rates, they can model the number of accidents per month using a Poisson distribution.
                    </li>
                    <li>
                        A store might want to analyze the number of customers who arrive at the checkout counter during peak hours. By modeling the arrival rate using a Poisson distribution, they can estimate the probability of a certain number of customers arriving within a specific time frame.
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <!-- <Card>
        <Content>
            <div class="question">
                Find the constant \(c\) such that the function 
                {`\\[f(x) = \\begin{cases}
                cx^2 & 0\\lt x\\lt 3\\\\
                0 & otherwise
                \\end{cases}\\]`}
                is a density function, and calculate \(P(1\lt X\lt 2)\).
            </div>
        </Content>
    </Card> -->
</article>