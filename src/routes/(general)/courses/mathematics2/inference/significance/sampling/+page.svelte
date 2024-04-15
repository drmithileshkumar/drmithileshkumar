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
    $currentPath = "Sampling";
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
        Sampling
    </h4>
    
    <Card>
        <Content>
            <div use:typeset>
                <div class="definition">
                    <strong>Population</strong> is the entire group of individuals or objects. It is similar to sample space in the probability theory, but is not the same.
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div use:typeset>
                <div class="definition">
                    <strong>Sample</strong> is a small subset of the population. 
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div use:typeset>
                <div class="definition">
                    The process of obtaining a sample from a population is called <strong>sampling</strong>.
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div use:typeset>
                <div class="definition">
                    <strong>Statistical inference</strong> is the process of making predictions, estimates or decisions about a population based on the information obtained from a sample. It allows you to generalize findings from a sample to the population it represents.
                </div>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Examples</h6>
            <div use:typeset>
                <div class="examples">
                    <ol>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All registered voters in a country.</li>
                                <li><strong>Sample:</strong> A random selection of 1000 registered voters from the country.</li>
                                <li><strong>Statistical inference:</strong> Based on the sample, you can estimate the proportion of voters supporting a particular candidate in the upcoming election.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All cars produced by a certain manufacturer in a year.</li>
                                <li><strong>Sample:</strong> A sample of 200 cars randomly selected from the production line.</li>
                                <li><strong>Statistical inference:</strong> Using the sample, you can estimate the average fuel efficiency of the cars produced by the manufacturer.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All customers who visited a grocery store in a month.</li>
                                <li><strong>Sample:</strong> A sample of 300 customers who were surveyed about their shopping experience.</li>
                                <li><strong>Statistical inference:</strong> From the sample, you can make predictions about the average amount spent by customers during their grocery shopping.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All students enrolled in a university.</li>
                                <li><strong>Sample:</strong> A random sample of 500 students selected from different departments.</li>
                                <li><strong>Statistical inference:</strong> Using the sample, you can estimate the proportion of students who are satisfied with the quality of education provided by the university.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All smartphones manufactured by a company in a year.</li>
                                <li><strong>Sample:</strong> A sample of 100 smartphones randomly selected from different production batches.</li>
                                <li><strong>Statistical inference:</strong> Based on the sample, you can estimate the failure rate of the smartphones within the first year of use.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All households in a city.</li>
                                <li><strong>Sample:</strong> A sample of 400 households selected through random sampling techniques.</li>
                                <li><strong>Statistical inference:</strong> Using the sample, you can estimate the average monthly electricity consumption per household in the city.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All patients diagnosed with a particular medical condition in a hospital.</li>
                                <li><strong>Sample:</strong>  A sample of 150 patients who were prescribed a specific medication.</li>
                                <li><strong>Statistical inference:</strong> Based on the sample, you can assess the effectiveness of the medication in treating the medical condition.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All employees working in a company.</li>
                                <li><strong>Sample:</strong> A random sample of 50 employees from different departments.</li>
                                <li><strong>Statistical inference:</strong> Using the sample, you can estimate the average job satisfaction level among the employees.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All websites on the internet.</li>
                                <li><strong>Sample:</strong> A sample of 1000 websites randomly selected from different categories.</li>
                                <li><strong>Statistical inference:</strong> From the sample, you can estimate the proportion of websites that comply with certain web accessibility standards.</li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <ul>
                                <li><strong>Population:</strong> All households in a region affected by a natural disaster.</li>
                                <li><strong>Sample:</strong> A sample of 300 households chosen for a disaster relief survey.</li>
                                <li><strong>Statistical inference:</strong> Using the sample, you can estimate the proportion of households requiring immediate assistance with shelter, food, or medical supplies.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </Content>
    </Card>
</article>