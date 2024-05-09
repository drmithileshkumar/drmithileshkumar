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
    $currentPath = "Practice";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference/practice" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Practice problems (Inference and Time series analysis)
    </h4>
    
    <Card>
        <Content>
            <h5>Statistical Significance</h5>
            <ol>
                <li>What is population?</li>
                <div>
                    <strong>Solution:</strong> Population is the entire group of individuals or objects under study.
                </div>
                <li>What is sample and sampling?</li>
                <div>
                    <strong>Solution:</strong> Sample is a small subset of the population. The process of obtaining a sample from a population is called sampling.
                </div>
                <li>What is statistical inference? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Statistical inference is the process of making predictions, estimates or decisions about a population based on the information obtained from a sample. It allows you to generalize findings from a sample to the population it represents. For example: population can be all registered voters in a country. A random selection of 1000 registered voters from country is a sample. Based on the sample, you can estimate the proportion of voters supporting a particular candidate in the upcoming election.
                </div>
                <li>What is a statistical decision? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Statistical decision is decision made about a population based on a sample drawn from the population. For example, deciding whether a coin is fair based on tossing it a few times. Ideally it would require infinitely many tosses.
                </div>
                <li>What is a statistical hypothesis? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Statistical hypothesses are hypotheses ( statements ) about the population that can be tested using tools from statistics and probability theory. For example, checking whether a given coin is biased or not, we can make a hypothesis that the coin is fair, i.e. the probability of getting a head is 0.5.
                </div>
                <li>What are null and alternative hypotheses? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Null hypothesis is a statement that there is no significant difference, effect, or relationship between variables in a population. It is often formulated as a statement of "no effect" or "no difference" and serves as the default assumption to be tested in hypothesis testing. Any hypothesis that differs from a given null hypothesis is called an alternative hypothesis. For example: Null hypothesis is "coin is fair". Alternate hypothesis is "coin is not fair".

                </div>
                <li>When can we reject a hypothesis?</li>
                <div>
                    <strong>Solution:</strong> If on the supposition that a particular hypothesis is true we find that results observed in a random sample differ markedly from those expected under the hypothesis on the basis of pure chance using sampling theory, we would say that the observed differences are significant and we would be inclined to reject the hypothesis (or at least not accept it on the basis of the evidence obtained). For example, if 20 tosses of a coin yield 16 heads, we would be inclined to reject the hypothesis that the coin is fair, although it is conceivable that we might be wrong.
                </div>
                <li>What are type I and type II errors? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Type I Error: If we reject a hypothesis when it happens to be true, we say that a Type I error has been made. Type II Error: If we accept a hypothesis when it happens to be false, we say that a Type II error has been made. For example: Type I error happens when we declare a fair coin as biased. Type II error happens when we declare a biased coin as fair.
                </div>
                <li>What is level of significance? What do significance levels 0.01 and 0.05 mean?</li>
                <div>
                    <strong>Solution:</strong> In testing a given hypothesis, the maximum probability with which we would be willing to risk a Type I error is called the level of significance of the test. This probability is often specified before any samples are drawn, so that results obtained will not influence our decision. If for example a 0.05 (0.01) or 5% (1%) level of significance is chosen in designing a test of a hypothesis, then there are about 5 (1) chances in 100 that we would reject the hypothesis when it should be accepted, i.e., whenever the null hypotheses is true, we are about 95% (99%) confident that we would make the right decision. In such cases we say that the hypothesis has been rejected at a 0.05 (0.01) level of significance, which means that we could be wrong with probability 0.05 (0.01).
                </div>
                <li>Assuming normal distribution, explain region of no significance, and critical region.</li>
                <div>
                    <strong>Solution:</strong> The region between \(z\) values where the null hypothesis is accepted is called the region of no significance. The region for \(z\) values where the null hypothesis is rejected is called the critical region. The following images shows the critical region is the shaded region. Here \(z\) between -1.96 and 1.96 defines the range of \(z\) where the null hypothesis will be accepted. For \(z\) less than -1.96 or greater than 1.96, the null hypothesis is rejected. <img src="/courses/mathematics2/normalCritical.png" width="300px" alt="Critical">
                </div>
                <li>Calculate mean and standard deviation of the number of heads is 100 tosses when the probability of getting heads is (1) 0.5 (2) 0.7 (3) 0.9</li>
                <div>
                    <strong>Solution:</strong> Since the tosses constitute Bernoulli trials, the number of tosses has Binomial distribution. In this case, the mean is given by \[\mu = np\] and the standard deviation is given by {`\\[\\sigma = \\sqrt{np(1-p)}\\]`} where \(n\) is the number of trials and \(p\) is the probability of success (getting heads). Applying the above formulae, we get <br> (1) \[\mu = 100\times 0.5 = 50\] {`\\[\\sigma = \\sqrt{100\\times 0.5(1-0.5)} = 5\\]`}
                    (2) \[\mu = 100\times 0.7 = 70\] {`\\[\\sigma = \\sqrt{100\\times 0.7(1-0.7)} = 4.58\\]`}
                    (3) \[\mu = 100\times 0.9 = 90\] {`\\[\\sigma = \\sqrt{100\\times 0.9(1-0.9)} = 3\\]`}
                </div>
                <li>Calculate the z variable when the number of heads is (1) 40 (2) 50 (3) 60 assuming that the mean is 50 and standard deviation is 5.</li>
                <div>
                    <strong>Solution:</strong> The \(z\) value is defined as {`\\[z = \\frac{x - \\mu}{\\sigma}\\]`} Here \(\mu = 50\) and \(\sigma = 5\) <br>
                    (1) {`\\[z = \\frac{40 - 50}{5} = -2\\]`}
                    (2) {`\\[z = \\frac{50 - 50}{5} = 0\\]`}
                    (3) {`\\[z = \\frac{60 - 50}{5} = 2\\]`}
                </div>
                <li>Calculate the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin assuming (a) binomial distribution (show the expression only) (b) normal distribution approximation.</li>
                <div>
                    <strong>Solution:</strong>
                </div>
                <li>To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.
                    <ul>
                        <li>Find the probability of rejecting the hypothesis when it is actually correct.</li>
                        <li>Draw the graph.</li>
                    </ul>
                </li>
                <div>
                    <strong>Solution:</strong>
                </div>
                <li>Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of siginificance of (a) 0.05, (b) 0.01 is used.</li>
                <div>
                    <strong>Solution:</strong>
                    
                </div>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Analysis of Variance</h5>
            <ol>
                <li>
                    Explain the purpose of analysis of variance with an example.
                </li>
                <li>
                    Explain one-way classification with the analysis of variance table.
                </li>
                <li>
                    Explain two-way classification with the analysis of variance table.
                </li>
                <li>
                    Three different kinds of food are tested on three groups of rats for 5 weeks. The objective is to check the difference in mean weight(in grams) of the rats per week. Apply one-way ANOVA using a 0.05 significance level to the following data:
                    <table>
                        <tr>
                            <th>Food I</th>
                            <th>Food II</th>
                            <th>Food III</th>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>4</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>5</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>4</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>6</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>9</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>7</td>
                            <td>9</td>
                        </tr>
                    </table>
                </li>
                <li>
                    The following data show the number of worms quarantined from the GI areas of four groups of muskrats in a carbon tetrachloride anthelmintic study. Conduct a two-way ANOVA test.
                    <table>
                        <tr>
                            <th>I</th>
                            <th>II</th>
                            <th>III</th>
                            <th>IV</th>
                        </tr>
                        <tr>
                            <td>338</td>
                            <td>412</td>
                            <td>124</td>
                            <td>389</td>
                        </tr>
                        <tr>
                            <td>324</td>
                            <td>387</td>
                            <td>353</td>
                            <td>432</td>
                        </tr>
                        <tr>
                            <td>268</td>
                            <td>400</td>
                            <td>469</td>
                            <td>255</td>
                        </tr>
                        <tr>
                            <td>147</td>
                            <td>233</td>
                            <td>222</td>
                            <td>133</td>
                        </tr>
                        <tr>
                            <td>309</td>
                            <td>212</td>
                            <td>111</td>
                            <td>265</td>
                        </tr>
                    </table>
                </li>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Time series analysis</h5>
            <ol>
                <li>What is time series data?</li>
                <li>What are components of time-series data? Explain using graphs.</li>
                <li>What are simple average and moving average analysis of trend?</li>
                <li>
                    Calculate the moving averages and mean square error with group size 3 for the data 9, 8, 9, 12, 9, 12, 11, 7, 13, 9, 11, 10.
                </li>
            </ol>
        </Content>
    </Card>
    
</article>