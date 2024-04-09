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
    .questions li::marker {
        color: red;
        font-size: 1.2em;
        font-weight: bold;
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
                   Let \(X\) be a discrete random variable that can take on the values 0, 1, 2, ... such that the probability function of \(X\) is given by {`\\[f(x) = P(X = x) = \\frac{\\lambda^xe^{-\\lambda}}{x!}\\]`} where \(x = 0, 1, 2, ...\) and \(\lambda\) is a given positive constant. This distribution is called the <strong>Poisson distribution</strong>. Here \(\lambda\) represents the average rate of events.
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
    <h4>Questions</h4>
    <Card>
        <Content>
            <div class="questions">
                <ol>
                    <li>
                        A call center receives an average of 30 calls per hour. What is the probability that the call center receives exactly 25 calls in the next hour?
                    </li>
                    <li>
                        On average, 5 buses arrive at a bus stop every 20 minutes. What is the probability that exactly 3 buses arrive at the bus stop in the next 20 minutes?
                    </li>
                    <li>
                        The number of typographical errors in a book follows a Poisson distribution with a mean of 2 errors per page. What is the probability that a randomly selected page has no errors?
                    </li>
                    <li>
                        A factory produces light bulbs with an average defect rate of 0.1 defects per bulb. What is the probability that a randomly selected batch of 100 bulbs contains exactly 10 defective bulbs?
                    </li>
                    <li>
                        A website experiences an average of 2 cyber attacks per day. What is the probability that the website will experience at most 1 cyber attack in the next day?
                    </li>
                    <li>
                        A store sells an average of 100 units of a product per week. What is the probability that the store sells fewer than 90 units of the product in the next week?
                    </li>
                    <li>
                        A laboratory technician conducts tests on blood samples, with an average of 4 positive cases per day. What is the probability that the technician will encounter exactly 2 positive cases in the next day?
                    </li>
                    <li>
                        A restaurant receives an average of 50 food delivery orders per evening. What is the probability that the restaurant receives more than 60 food delivery orders in the next evening?
                    </li>
                    <li>
                        A car rental agency rents an average of 15 cars per day. What is the probability that the agency rents exactly 20 cars in the next day?
                    </li>
                    <li>
                        A university library receives an average of 6 inquiries per hour at the reference desk. What is the probability that there will be no inquiries at the reference desk in the next hour?
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
</article>