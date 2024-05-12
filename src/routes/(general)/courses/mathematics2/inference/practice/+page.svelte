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
    table {
        border-collapse: collapse;
    }
    tr td, tr th {
        border: 1px solid;
        text-align: center;
    }
    td {
        text-align: center;
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
<!-- <svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference/practice" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head> -->
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
                <li style="font-weight: bold;">What is population?</li>
                <div>
                    <strong>Solution:</strong> Population is the entire group of individuals or objects under study.
                </div>
                <li style="font-weight: bold;">What is sample and sampling?</li>
                <div>
                    <strong>Solution:</strong> Sample is a small subset of the population. The process of obtaining a sample from a population is called sampling.
                </div>
                <li style="font-weight: bold;">What is statistical inference? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Statistical inference is the process of making predictions, estimates or decisions about a population based on the information obtained from a sample. It allows you to generalize findings from a sample to the population it represents. For example: population can be all registered voters in a country. A random selection of 1000 registered voters from country is a sample. Based on the sample, you can estimate the proportion of voters supporting a particular candidate in the upcoming election.
                </div>
                <li style="font-weight: bold;">What is a statistical decision? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Statistical decision is decision made about a population based on a sample drawn from the population. For example, deciding whether a coin is fair based on tossing it a few times. Ideally it would require infinitely many tosses.
                </div>
                <li style="font-weight: bold;">What is a statistical hypothesis? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Statistical hypothesses are hypotheses ( statements ) about the population that can be tested using tools from statistics and probability theory. For example, checking whether a given coin is biased or not, we can make a hypothesis that the coin is fair, i.e. the probability of getting a head is 0.5.
                </div>
                <li style="font-weight: bold;">What are null and alternative hypotheses? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Null hypothesis is a statement that there is no significant difference, effect, or relationship between variables in a population. It is often formulated as a statement of "no effect" or "no difference" and serves as the default assumption to be tested in hypothesis testing. Any hypothesis that differs from a given null hypothesis is called an alternative hypothesis. For example: Null hypothesis is "coin is fair". Alternate hypothesis is "coin is not fair".

                </div>
                <li style="font-weight: bold;">When can we reject a hypothesis?</li>
                <div>
                    <strong>Solution:</strong> If on the supposition that a particular hypothesis is true we find that results observed in a random sample differ markedly from those expected under the hypothesis on the basis of pure chance using sampling theory, we would say that the observed differences are significant and we would be inclined to reject the hypothesis (or at least not accept it on the basis of the evidence obtained). For example, if 20 tosses of a coin yield 16 heads, we would be inclined to reject the hypothesis that the coin is fair, although it is conceivable that we might be wrong.
                </div>
                <li style="font-weight: bold;">What are type I and type II errors? Explain using an example.</li>
                <div>
                    <strong>Solution:</strong> Type I Error: If we reject a hypothesis when it happens to be true, we say that a Type I error has been made. Type II Error: If we accept a hypothesis when it happens to be false, we say that a Type II error has been made. For example: Type I error happens when we declare a fair coin as biased. Type II error happens when we declare a biased coin as fair.
                </div>
                <li style="font-weight: bold;">What is level of significance? What do significance levels 0.01 and 0.05 mean?</li>
                <div>
                    <strong>Solution:</strong> In testing a given hypothesis, the maximum probability with which we would be willing to risk a Type I error is called the level of significance of the test. This probability is often specified before any samples are drawn, so that results obtained will not influence our decision. If for example a 0.05 (0.01) or 5% (1%) level of significance is chosen in designing a test of a hypothesis, then there are about 5 (1) chances in 100 that we would reject the hypothesis when it should be accepted, i.e., whenever the null hypotheses is true, we are about 95% (99%) confident that we would make the right decision. In such cases we say that the hypothesis has been rejected at a 0.05 (0.01) level of significance, which means that we could be wrong with probability 0.05 (0.01).
                </div>
                <li style="font-weight: bold;">Assuming normal distribution, explain region of no significance, and critical region.</li>
                <div>
                    <strong>Solution:</strong> The region between \(z\) values where the null hypothesis is accepted is called the region of no significance. The region for \(z\) values where the null hypothesis is rejected is called the critical region. The following images shows the critical region is the shaded region. Here \(z\) between -1.96 and 1.96 defines the range of \(z\) where the null hypothesis will be accepted. For \(z\) less than -1.96 or greater than 1.96, the null hypothesis is rejected. <img src="/courses/mathematics2/normalCritical.png" width="300px" alt="Critical">
                </div>
                <li style="font-weight: bold;">Calculate mean and standard deviation of the number of heads is 100 tosses when the probability of getting heads is (1) 0.5 (2) 0.7 (3) 0.9</li>
                <div>
                    <strong>Solution:</strong> Since the tosses constitute Bernoulli trials, the number of tosses has Binomial distribution. In this case, the mean is given by \[\mu = np\] and the standard deviation is given by {`\\[\\sigma = \\sqrt{np(1-p)}\\]`} where \(n\) is the number of trials and \(p\) is the probability of success (getting heads). Applying the above formulae, we get <br> (1) \[\mu = 100\times 0.5 = 50\] {`\\[\\sigma = \\sqrt{100\\times 0.5(1-0.5)} = 5\\]`}
                    (2) \[\mu = 100\times 0.7 = 70\] {`\\[\\sigma = \\sqrt{100\\times 0.7(1-0.7)} = 4.58\\]`}
                    (3) \[\mu = 100\times 0.9 = 90\] {`\\[\\sigma = \\sqrt{100\\times 0.9(1-0.9)} = 3\\]`}
                </div>
                <li style="font-weight: bold;">Calculate the z variable when the number of heads is (1) 40 (2) 50 (3) 60 assuming that the mean is 50 and standard deviation is 5.</li>
                <div>
                    <strong>Solution:</strong> The \(z\) value is defined as {`\\[z = \\frac{x - \\mu}{\\sigma}\\]`} Here \(\mu = 50\) and \(\sigma = 5\) <br>
                    (1) {`\\[z = \\frac{40 - 50}{5} = -2\\]`}
                    (2) {`\\[z = \\frac{50 - 50}{5} = 0\\]`}
                    (3) {`\\[z = \\frac{60 - 50}{5} = 2\\]`}
                </div>
                <li style="font-weight: bold;">Calculate the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin assuming (a) binomial distribution (show the expression only) (b) normal distribution approximation.</li>
                <div>
                    <strong>Solution:</strong> Since the coin is assumed to be fair, \(p = 0.5\) <br> (a) The probability of getting \(x\) heads when total number of tosses is \(n\) is given by {`\\[P_x = {n \\choose x} p^x(1-p)^{n-x}\\]`}
                    The probability of getting between 40 and 60 heads is {`\\[
                        \\begin{aligned}
                        P(40\\leq x\\leq 60) &= P_{40} + \\cdots + P_{60}\\\\
                        &= {100 \\choose 40} 0.5^{40}(1-0.5)^{100-40}\\\\
                        &+ {100 \\choose 41} 0.5^{41}(1-0.5)^{100-41}\\\\
                        &\\vdots\\\\
                        &+ {100 \\choose 60} 0.5^{60}(1-0.5)^{100-60}
                        \\end{aligned}
                        \\]`}
                    (b) Mean and standard deviation is {`\\[
                        \\begin{aligned}
                        \\mu &= np = 100\\times 0.5 = 50\\\\
                        \\sigma &= \\sqrt{np(1-p)} = 5
                        \\end{aligned}
                        \\]`}
                        Since we are approximating a discrete distribution (binomial) to a continuous distribution (normal), we take the middle point of each interval. For calculating \(z\)-score, using the formula {`\\[z = \\frac{x - \\mu}{\\sigma}\\]`} Instead of using \(x = 40\), we use \(x = 39.5\) and instead of \(x = 60\), we use \(x = 60.5\). With this correction in mind, we calculate the range of \(z\). {`\\[
                            \\begin{aligned}
                            z_1 &= \\frac{39.5 - 50}{5} = -2.1\\\\
                            z_2 &= \\frac{60.5 - 50}{5} = 2.1
                            \\end{aligned}
                            \\]`}
                        This implies that the probability of getting heads between 40 and 60 using normal distribution is given by the area under the normal distribution curve between \(z_1 = -2.1\) and \(z_2 = 2.1\). Now, for any value of \(z\), the z-score table gives area between \(-\infty\) to \(z\). Therefore,
                        {`\\[
                            \\begin{aligned}
                            P(z_1\\leq z\\leq z_2) &= Table(z_2) - Table(z_1)\\\\
                            p(-2.1\\leq z\\leq 2.1) &= 0.9821 - 0.0179 = 0.9642
                            \\end{aligned}
                            \\]`}
                </div>
                <li style="font-weight: bold;">To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.
                    <ul>
                        <li>Find the probability of rejecting the hypothesis when it is actually correct.</li>
                        <li>Draw the graph.</li>
                    </ul>
                </li>
                <div>
                    <strong>Solution:</strong> We reject the hypothesis when the number of heads is less than 40 or greater than 60. In the above problem, we obtained the probability of the number of heads between 40 and 60 as 0.9642. Hence, the probability of getting number of heads outside this range is 1 - 0.9642 = 0.0378. 
                </div>
                <li style="font-weight: bold;">Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of siginificance of (a) 0.05, (b) 0.01 is used.</li>
                <div>
                    <strong>Solution:</strong> (a) As the number of tosses is 64, the corresponding mean and standard deviation will be {`\\[
                        \\begin{aligned}
                        \\mu &= np = 64\\times 0.5 = 32\\\\
                        \\sigma &= \\sqrt{np(1-p)} = \\sqrt{64\\times 0.5(1-0.5)} = 4
                        \\end{aligned}
                        \\]`} We want to find the range of the number of heads for which we can accept that the coin is fair just like in the above problem. Since the significance level is 0.05, it means that with probability 0.05, we reject that the coin is fair even if it is fair. Let \((x_1, x_2)\) be the range of heads. Let the corresponding z-scores are \(z_1, z_2\). This implies \[Table(z_2) - Table(z_1) = 0.05\] We assume the Two-tailed error analysis, where the areas under the curve in each tail is equal. The area under the curve in the left tail is equal to \(Table(z_1) = 0.05/2 = 0.025\). This implies \(z_1 = -1.96\) and \(z_2 = 1.96\). Using these values we calculate the values of \(x_1\) and \(x_2\). {`\\[
                        \\begin{aligned}
                        z &= \\frac{x - \\mu}{\\sigma}\\\\
                        -1.96 &= \\frac{x_1 - 32}{4}\\\\
                        x_1 &= 24.16\\\\
                        1.96 &= \\frac{x_2 - 32}{4}\\\\
                        x_2 &= 39.84
                        \\end{aligned}
                        \\]`}
                        Since the number of heads can only be integers, the required range is 25 and 39, i.e. the decision rules are 
                        <br>
                        (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 25 and 39 inclusive, <br>
                        (2) reject the hypothesis otherwise.
                        <br>
                        (b) With significance level at 0.01, we have \[Table(z_2) - Table(z_1) = 0.01\] and \(Table(z_1) = 0.01/2 = 0.005\) The z-values (reading from table) {`\\[
                            \\begin{aligned}
                            z_1 &= -2.57\\\\
                            z_2 &= 2.57\\\\
                            \\implies x_1 &= 32 - 4\\times 2.57 = 21.72\\\\
                            x_1 &= 32 + 4\\times 2.57 = 42.28
                            \\end{aligned}
                            \\]`}
                        In this case the number of heads should be between 22 and 42, i.e. the decision rules are 
                        <br>
                        (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 22 and 42 inclusive, <br>
                        (2) reject the hypothesis otherwise.
                </div>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Analysis of Variance</h5>
            <ol>
                <li style="font-weight: bold;">
                    Explain the purpose of analysis of variance with an example.
                </li>
                <div>
                    <p>
                        <strong>Solution:</strong> The purpose of analysis of variance (ANOVA) is to determine whether there are statistically significant differences among the means of three or more independent groups. ANOVA helps to assess whether the observed differences among group means are due to genuine differences in population means or simply due to random sampling variation.
                    </p>
                    <p>
                        Suppose we want to compare the effectiveness of three different teaching methods (Method A, Method B, and Method C) in improving students' test scores. We randomly select 30 students and divide them into three groups of 10 students each. Each group receives one of the teaching methods.
                    </p>
                    <p>
                        After completing the teaching sessions, we administer a test to all students, and their scores are recorded. Now, we want to analyze whether there are any statistically significant differences in the mean test scores among the three teaching methods.
                    </p>
                    <p>
                        Steps taken in the ANOVA:
                    </p>
                    <ol>
                        <li>Set hypotheses:
                            <ul>
                                <li><strong>Null Hypothesis \(H_0\)</strong>: There is no difference in mean test scores among the three teaching methods.</li>
                                <li><strong>Alternative Hypothesis \(H_1\)</strong>:  At least one teaching method leads to significantly different mean test scores compared to the others. </li>
                            </ul>
                        </li>
                        <li>ANOVA partitions the total variance in the test scores into two components:
                            <ul>
                                <li><strong>Between-group variance</strong>: This variance represents differences in mean test scores among the three teaching methods.</li>
                                <li><strong>Within-group variance</strong>: This variance represents differences within each group, which could be due to random variability or other factors not related to the teaching methods.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        ANOVA then compares the between-group variance to the within-group variance. If the between-group variance is significantly larger than the within-group variance, it suggests that there are statistically significant differences among the group means. In other words, at least one teaching method has a different effect on test scores compared to the others.
                    </p>
                </div>
                <li style="font-weight: bold;">
                    Explain one-way classification with the analysis of variance table.
                </li>
                <div>
                    <p>
                        <strong>Solution:</strong> When the effect of only one-factor is under study, we call it "one-way" or "one-factor" ANOVA. The table below shows the given data. The given data is divided into \(a\) <i>groups</i> or <i>treatments</i> where the size of each group is \(b\).
                    </p>
                    <table>
                        <tr>
                            <th>Group</th>
                            <th>Data</th>
                            <th>Mean</th>
                            <th>Variance</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>{`\\(x_{11}\\quad x_{12}\\quad \\cdots \\quad x_{1b}\\)`}</td>
                            <td>\(\mu_1\)</td>
                            <td>\(v_1\)</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>{`\\(x_{21}\\quad x_{22}\\quad \\cdots \\quad x_{2b}\\)`}</td>
                            <td>\(\mu_2\)</td>
                            <td>\(v_2\)</td>
                        </tr>
                        <tr>
                            <th>\(\vdots\)</th>
                            <td>{`\\(\\quad \\quad \\vdots \\quad \\)`}</td>
                            <td>\(\vdots\)</td>
                            <td>\(\cdots\)</td>
                        </tr>
                        <tr>
                            <th>a</th>
                            <td>{`\\(x_{a1}\\quad x_{a2}\\quad \\cdots \\quad x_{ab}\\)`}</td>
                            <td>\(\mu_a\)</td>
                            <td>\(v_a\)
                        </tr>
                    </table>
                    <p>
                        <strong>Step 1:</strong> Write the hypotheses
                    </p>
                        <ul>
                            <li>
                                <strong>Null Hypothesis \(H_0\)</strong>: \(\mu_1 = \mu_2 = \cdots = \mu_a\)
                            </li>
                            <li>
                                <strong>Alternative Hypothesis \(H_1\)</strong>: At least one \(\mu_j\) differs from the rest.
                            </li>
                        </ul>
                    <p>
                        <strong>Step 2:</strong> Calculate means.
                    </p>
                    <ul>
                        <li>
                            <strong>Group means:</strong> As shown in the table, calculate means for each group. {`\\[
                                \\mu_k = \\frac{x_{k1} + x_{k2} + \\cdots + x_{kb}}{b}
                                \\]`}
                        </li>
                        <li>
                            <strong>Total mean:</strong> Calculate total mean as {`\\[
                                \\mu = \\frac{\\mu_1 + \\mu_2 + \\cdots + \\mu_a}{a}
                                \\]`}
                        </li>
                    </ul>
                    <p>
                        <strong>Step 2:</strong> Calculate variations.
                    </p>
                    <ul>
                        <li>
                            <strong>Variation within groups:</strong> As shown in the table, calculate means for each group. For the \(k\)th group, the variance \(v_k\) is {`\\[
                                v_k = \\sum_{i = 1}^b (x_{ki} - \\mu_k)^2
                                \\]`}
                            This gives the total variance within groups \(v_w\) as
                            \[v_w = v_1 + v_2 + \cdots + v_a\]
                        </li>
                        <li>
                            <strong>Variation between groups:</strong> It is denoted by \(v_b\). {`\\[
                                v_b = b\\sum_{i = 1}^a (\\mu_i - \\mu)^2
                                \\]`}
                        </li>
                    </ul>
                    <p>
                        <strong>Step 3:</strong> Calculate mean variances.
                    </p>
                    <ul>
                        <li>
                            <strong>Mean variation within groups:</strong>
                            {`\\[MSW = \\frac{v_w}{a(b - 1)}\\]`} where the degree of freedom is \(a(b - 1)\)
                        </li>
                        <li>
                            <strong>Mean variation between groups:</strong>
                            {`\\[MSB = \\frac{v_b}{a - 1}\\]`} where the degree of freedom is \(a - 1\)
                        </li>
                    </ul>
                    <p>
                        <strong>Step 4:</strong> Calculate \(F\)-statistic. The \(F\) value is given as {`\\[F = \\frac{MSB}{MSW}\\]`}
                    </p>
                    <p>
                        <strong>Step 5:</strong> Compare calculated \(F\) with the corresponding value in F-statistic table. If the calculated value is larger, then reject the null hypothesis.
                    </p>
                    <p>
                        The following table summarizes the above calculations.
                    </p>
                    <table>
                        <tr>
                            <th>Variation</th>
                            <th>Degrees of Freedom</th>
                            <th>Mean Square</th>
                            <th>F</th>
                        </tr>
                        <tr>
                            <td>Between Groups, {`\\[v_b = b\\sum_j (\\mu_j - \\mu)^2\\]`}</td>
                            <td>\(a-1\)</td>
                            <td>{`\\(MSB = \\frac{v_b}{a - 1}\\)`}</td>
                            <td>{`\\(\\frac{MSB}{MSW}\\)`} with \(a - 1\), \(a(b-1)\) degrees of freedom</td>
                        </tr>
                        <tr>
                            <td>Within Groups, {`\\[v_w = v_1 + \\cdots + v_a\\]`}</td>
                            <td>\(a(b-1)\)</td>
                            <td>{`\\(MSW = \\frac{v_w}{a(b - 1)}\\)`}</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <li style="font-weight: bold;">
                    Explain two-way classification with the analysis of variance table.
                </li>
                <div>
                    <p>
                        <strong>Solution:</strong> When the effect of two factors is under study, we call it "two-way" or "two-factor" ANOVA. The data is given as a table with rows corresponding to one factor and columns corresponding to the 2nd factor, as shown in the table below:
                    </p>
                    <table>
                        <tr>
                            <th colspan="2" rowspan="2"></th>
                            <th colspan="4">2nd Factor</th>
                            <th rowspan="2" style="vertical-align:bottom;">Mean</th>
                            <th rowspan="2" style="vertical-align:bottom;">Variance</th>
                        </tr>
                        <tr>
                            <!-- <th colspan="2"></th> -->
                            <th>1</th>
                            <th>2</th>
                            <th>...</th>
                            <th>b</th>
                            <!-- <th colspan="2"></th> -->
                            
                        </tr>
                        <tr>
                            <th rowspan="4">1st Factor</th>
                            <th>1</th>
                            <td>{`\\(x_{11}\\)`}</td>
                            <td>{`\\(x_{12}\\)`}</td>
                            <td>{`\\(\\cdots\\)`}</td>
                            <td>{`\\(x_{1b}\\)`}</td>
                            <td>{`\\(\\mu_{r1}\\)`}</td>
                            <td>{`\\(v_{r1}\\)`}</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>{`\\(x_{21}\\)`}</td>
                            <td>{`\\(x_{22}\\)`}</td>
                            <td>{`\\(\\cdots\\)`}</td>
                            <td>{`\\(x_{2b}\\)`}</td>
                            <td>{`\\(\\mu_{r2}\\)`}</td>
                            <td>{`\\(v_{r2}\\)`}</td>
                        </tr>
                        <tr>
                            <th>\(\vdots\)</th>
                            <td>{`\\(\\vdots \\)`}</td>
                            <td>\(\vdots\)</td>
                            <td>\(\cdots\)</td>
                            <td>\(\vdots\)</td>
                            <td>\(\vdots\)</td>
                            <td>\(\vdots\)</td>
                        </tr>
                        <tr>
                            <th>a</th>
                            <td>{`\\(x_{a1}\\)`}</td>
                            <td>{`\\(x_{a2}\\)`}</td>
                            <td>{`\\(\\cdots\\)`}</td>
                            <td>{`\\(x_{ab}\\)`}</td>
                            <td>{`\\(\\mu_{ra}\\)`}</td>
                            <td>{`\\(v_{ra}\\)`}</td>
                        </tr>
                        <tr>
                            <th colspan="2">Mean</th>
                            <td>{`\\(\\mu_{c1}\\)`}</td>
                            <td>{`\\(\\mu_{c2}\\)`}</td>
                            <td>{`\\(\\cdots\\)`}</td>
                            <td>{`\\(\\mu_{cb}\\)`}</td>
                            <td colspan="2" rowspan="2"></td>
                            
                        </tr>
                        <tr>
                            <th colspan="2">Variance</th>
                            <td>{`\\(v_{c1}\\)`}</td>
                            <td>{`\\(v_{c2}\\)`}</td>
                            <td>{`\\(\\cdots\\)`}</td>
                            <td>{`\\(v_{cb}\\)`}</td>
                        </tr>
                    </table>
                    <p>
                        <strong>Step 1:</strong> Write the hypotheses
                    </p>
                    <ul>
                        <li>
                            <strong>Null Hypothesis </strong>: 
                            <ol>
                                <li>
                                    <strong>{`\\(H^{(0)}_0\\)`}:</strong> {`\\(\\mu_{r1} = \\mu_{r2} = \\cdots = \\mu_{ra}\\)`}
                                </li>
                                <li>
                                    <strong>{`\\(H^{(1)}_0\\)`}:</strong> {`\\(\\mu_{c1} = \\mu_{c2} = \\cdots = \\mu_{cb}\\)`}
                                </li>
                            </ol>
                            
                        </li>
                        <li>
                            <strong>Alternative Hypothesis</strong>: 
                            <ol>
                                <li>
                                    <strong>{`\\(H^{(0)}_1\\)`}:</strong> At least one {`\\(\\mu_{rj}\\)`} differs among {`\\(\\mu_{r1}, \\mu_{r2}, \\cdots, \\mu_{ra}\\)`}
                                </li>
                                <li>
                                    <strong>{`\\(H^{(1)}_1\\)`}:</strong> At least one {`\\(\\mu_{cj}\\)`} differs among {`\\(\\mu_{c1}, \\mu_{c2}, \\cdots, \\mu_{cb}\\)`}
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <p>
                        <strong>Step 2:</strong> Calculate means.
                    </p>
                    <ul>
                        <li>
                            <strong>Row means:</strong> As shown in the table, calculate means for each row. {`\\[
                                \\mu_{rk} = \\frac{x_{k1} + x_{k2} + \\cdots + x_{kb}}{b}
                                \\]`}
                        </li>
                        <li>
                            <strong>Column means:</strong> As shown in the table, calculate means for each column. {`\\[
                                \\mu_{ck} = \\frac{x_{1k} + x_{2k} + \\cdots + x_{ak}}{a}
                                \\]`}
                        </li>
                        <li>
                            <strong>Total mean:</strong> Calculate total mean as {`\\[
                                \\begin{aligned}
                                \\mu &= \\frac{\\mu_{r1} + \\mu_{r2} + \\cdots + \\mu_{ra}}{a}\\\\
                                     &+ \\frac{\\mu_{c1} + \\mu_{c2} + \\cdots + \\mu_{cb}}{b}
                                \\end{aligned}
                                \\]`}
                        </li>
                    </ul>
                    <p>
                        <strong>Step 2:</strong> Calculate variations.
                    </p>
                    <ul>
                        <li>
                            <strong>Total variation</strong> The total variation is denoted by \(v\) and calculated as {`\\[v = \\sum_{j, k}(x_{jk}-\\mu)^2\\]`}
                            Total variation can be split into three parts {`\\[v = v_r + v_c + v_e\\]`} where \(v_r\) is variation between rows, \(v_c\) is variation between columns and \(v_e\) is random variation (or variation due to error).
                        </li>
                        <li>
                            <strong>Variation between rows:</strong> As shown in the table, calculate variation between rows is {`\\[
                                v_{r} = b\\sum_{i = 1}^a (\\mu_{ri} - \\mu)^2
                                \\]`}
                        </li>
                        <li>
                            <strong>Variation between columns:</strong> It is denoted by \(v_b\). {`\\[
                                v_c = a\\sum_{i = 1}^b (\\mu_{ci} - \\mu)^2
                                \\]`}
                        </li>
                        <li>
                            <strong>Variation due to error:</strong> \[v_e = v - v_r - v_c\]
                        </li>
                    </ul>
                    <p>
                        <strong>Step 3:</strong> Calculate mean variations.
                    </p>
                    <ul>
                        <li>
                            <strong>Mean variation within rows:</strong>
                            {`\\[MSR = \\frac{v_r}{a - 1}\\]`} where the degree of freedom is \(a - 1\)
                        </li>
                        <li>
                            <strong>Mean variation between columns:</strong>
                            {`\\[MSC = \\frac{v_c}{b - 1}\\]`} where the degree of freedom is \(b - 1\)
                        </li>
                        <li>
                            <strong>Mean variation due to error:</strong> {`\\[MSE = \\frac{v_e}{(a - 1)(b - 1)}\\]`} where the degree of freedom is \((a - 1)(b - 1)\)
                        </li>
                    </ul>
                    <p>
                        <strong>Step 4:</strong> Calculate \(F\)-statistic. The \(F_r\) value for rows is given as {`\\[F_r = \\frac{MSR}{MSE}\\]`} The \(F_c\) value for columns is given as {`\\[F_c = \\frac{MSC}{MSE}\\]`} 
                    </p>
                    <p>
                        <strong>Step 5:</strong> Compare calculated \(F_r\) and \(F_c\) with the corresponding value in F-statistic table. If the calculated value is larger, then reject the null hypothesis for the corresponding rows or columns.
                    </p>
                    <p>
                        The following table summarizes the above calculations.
                    </p>
                    <table>
                        <tr>
                            <th>Variation</th>
                            <th>Degrees of Freedom</th>
                            <th>Mean Square</th>
                            <th>F</th>
                        </tr>
                        <tr>
                            <td>Between Rows, {`\\[v_r = b\\sum_j (\\mu_{rj} - \\mu)^2\\]`}</td>
                            <td>\(a-1\)</td>
                            <td>{`\\(MSR = \\frac{v_r}{a - 1}\\)`}</td>
                            <td>{`\\(\\frac{MSR}{MSE}\\)`} with \(a - 1\), \((a-1)(b-1)\) degrees of freedom</td>
                        </tr>
                        <tr>
                            <td>Between Columns, {`\\[v_c = b\\sum_j (\\mu_{rj} - \\mu)^2\\]`}</td>
                            <td>\(b-1\)</td>
                            <td>{`\\(MSC = \\frac{v_c}{b - 1}\\)`}</td>
                            <td>{`\\(\\frac{MSC}{MSE}\\)`} with \(b - 1\), \((a-1)(b-1)\) degrees of freedom</td>
                        </tr>
                        <tr>
                            <td>Residual or random, {`\\[v_e = v - v_r - v_c\\]`}</td>
                            <td>\((a - 1)(b-1)\)</td>
                            <td>{`\\(MSE = \\frac{v_e}{(a - 1)(b - 1)}\\)`}</td>
                            
                        </tr>
                        <tr>
                            <td>Total, {`\\[v = \\sum_{j, k}(x_{jk} - \\mu)^2\\]`}</td>
                            <td>\(ab - 1\)</td>
                            
                        </tr>
                    </table>
                </div>
                <li style="font-weight: bold;">
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
                <div>
                    <strong>Solution:</strong>
                </div>
                <li style="font-weight: bold;">
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
                <div>
                    <strong>Solution:</strong>
                </div>
            </ol>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Time series analysis</h5>
            <ol>
                <li style="font-weight: bold;">What is time series data?</li>
                <li style="font-weight: bold;">What are components of time-series data? Explain using graphs.</li>
                <li style="font-weight: bold;">What are simple average and moving average analysis of trend?</li>
                <li style="font-weight: bold;">
                    Calculate the moving averages and mean square error with group size 3 for the data 9, 8, 9, 12, 9, 12, 11, 7, 13, 9, 11, 10.
                </li>
            </ol>
        </Content>
    </Card>
    
</article>