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
    $currentPath = "Hypotheses";
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
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Hypotheses
    </h4>
    
    <Card>
        <Content>
            <h5>Statistical Decisions</h5>
            <div use:typeset>
                <div class="definition">
                    <strong>Statistical decision</strong> is decision made about a population based on a sample drawn from the population. For example, deciding whether a coin is fair based on tossing it a few times. Ideally it would require infinitely many tosses.
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Statistical Hypotheses</h5>
            <div use:typeset>
                <div class="definition">
                    <strong>Statistical hypothesses</strong> are hypotheses ( statements ) about the population that can be tested using tools from statistics and probability theory. For example, checking whether a given coin is biased or not, we can make a hypothesis that the coin is fair, i.e. the probability of getting a head is 0.5. 
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Null Hypotheses</h5>
            <div use:typeset>
                <div class="definition">
                    <strong>Null hypothesis</strong> is a statement that there is no significant difference, effect, or relationship between variables in a population. It is often formulated as a statement of "no effect" or "no difference" and serves as the default assumption to be tested in hypothesis testing.
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Alternative Hypotheses</h5>
            <div use:typeset>
                <div class="definition">
                    Any hypothesis that differs from a given null hypothesis is called an <strong>alternative hypothesis</strong>.
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5>Examples</h5>
            <div use:typeset>
                <div class="examples">
                    <ol>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> Coin is fair.</li>
                                <li><strong>Alternative Hypothesis:</strong> Coin is not fair.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> The new drug has no effect on reducing cholesterol levels.</li>
                                <li><strong>Alternative Hypothesis:</strong> The new drug reduces cholesterol levels.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no difference in test scores between students who use a traditional teaching method and those who use a new teaching method.</li>
                                <li><strong>Alternative Hypothesis:</strong> Students who use the new teaching method perform better on tests than those who use the traditional method.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no difference in anxiety levels between two therapy groups.</li>
                                <li><strong>Alternative Hypothesis:</strong> One therapy group shows lower anxiety levels than the other.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no difference in average income between two demographic groups.</li>
                                <li><strong>Alternative Hypothesis:</strong> One demographic group has a higher average income than the other.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no correlation between air pollution levels and asthma rates.</li>
                                <li><strong>Alternative Hypothesis:</strong> Higher air pollution levels are associated with higher asthma rates.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no difference in political affiliation between two age groups.</li>
                                <li><strong>Alternative Hypothesis:</strong> Political affiliation differs between the two age groups.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> The mean velocity of a particle is equal to a certain constant.</li>
                                <li><strong>Alternative Hypothesis:</strong> The mean velocity of the particle is different from the constant.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no difference in brand preference between two advertising campaigns.</li>
                                <li><strong>Alternative Hypothesis:</strong> One advertising campaign leads to higher brand preference than the other.</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><strong>Null Hypothesis:</strong> There is no difference in performance between athletes who use a certain training regimen and those who do not.</li>
                                <li><strong>Alternative Hypothesis:</strong> Athletes who use the training regimen perform better than those who do not.</li>
                            </ul>
                        </li>
                        
                    </ol>
                </div>
            </div>
        </Content>
    </Card>
</article>