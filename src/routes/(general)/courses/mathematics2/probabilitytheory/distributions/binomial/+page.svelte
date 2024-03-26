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
    $currentPath = "Binomial Distribution";
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
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/binomial" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        BINOMIAL DISTRIBUTION
    </h4>
    <Card>
        <Content>
            <h6>Trials</h6>
            <div>
                <div class="definition">
                    Each repetition of an experiment is called a <strong>trial</strong>.
                </div>
                <div class="definition">
                    When the outcomes in each trial are independent, we say the trial as <strong>Bernoulli trials</strong>.
                </div>
            </div>
            <div class="examples">
                <ol>
                    <li>
                        Suppose a coin is tossed repeatedly. A particular list of outcomes may look like \[HHTHTTHHHTTHTH...\]
                        Here getting a \(H\) or \(T\) at any trial is the same. So these trials are Bernoulli.
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Theorem</h6>
            <div class="theorem">
                Let \(p\) be the probability that an event will happen in any single Bernoulli trial ( called the <em>probability of success</em>). The probability that the event will happen exactly \(r\) times in \(n\) trials ( i.e. \(r\) successes and \(n - r\) failures will occur ) is given by the probability function 
                {`\\[\\begin{aligned}
                p(r) = {n\\choose r}p^r (1 - p)^{n - r}
                \\end{aligned}\\]`}
            </div>
            <div class="examples">
                <p>
                    The probability of getting exactly 2 heads in 6 tosses of a fair coin is {`\\[\\begin{aligned}
                    p(2) &= {6\\choose 2}\\left (\\frac{1}{2}\\right)^2\\left( 1 - \\frac{1}{2}\\right )^{6 - 2}\\\\
                         &= \\frac{6!}{2!4!}\\cdot \\frac{1}{4}\\cdot \\frac{1}{16}\\\\
                         &= \\frac{15}{64}
                    \\end{aligned}\\]`}
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Theorem</h6>
            <div class="theorem">
                The mean number of successes in \(n\) Bernoulli trials is given by \[\mu = np\]
                The standard deviation is given as {`\\[\\sigma = \\sqrt{np(1 - p)}\\]`}
            </div>
            <div class="examples">
                <p>In 100 tosses of a fair coin, the expected or mean number of heads is {`\\(\\mu = 100\\times \\frac{1}{2} = 50\\)`} while the standard deviation is {`\\[\\sigma = \\sqrt{100\\times \\frac{1}{2}\\times \\frac{1}{2}} = 5\\]`} </p>
            </div>
        </Content>
    </Card>
</article>