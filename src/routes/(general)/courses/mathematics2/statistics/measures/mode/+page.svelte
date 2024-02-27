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
	import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    $navList = contents;
    $currentPath = "Mode";
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
        font-size: 1.7em;
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mode" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Measures of Central Tendency 
    </h4>
    <h5>Mode</h5>
    <Card>
        <Content>
            
            <p>The mode of a data set is the value(s) that occur most frequently. The mode is defined mathematically as the value {`\\( x_{i} \\)`} for which the frequency {`\\( f_{i} \\)`} is maximum. In other words, if a data set consists of values {`\\( x_{1}, x_{2}, ..., x_{n} \\)`} with corresponding frequencies {`\\( f_{1}, f_{2}, ..., f_{n} \\)`}, then the mode {`\\( M \\)`} is given by:</p>
            <p>{`\\[ M = x_{i} \\quad \\text{where} \\quad f_{i} = \\max(f_{1}, f_{2}, ..., f_{n}) \\]`}</p>
            <p>If two or more values tie for the highest frequency, the data set is multimodal, and each of these values is a mode. If no value repeats, the data set is said to have no mode.</p>
            <div class="examples">
                The mode of 1, 2, 2, 5, 5, 5, 4, 4 is 5.
            </div>
        </Content>
    </Card>
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">
                What is mode of letters in STATISTICS?
            </div>
            <div class="solution">
                <p>
                    The table of frequencies is 
                </p>
                <DataTable>
                    <Head>
                        <Row>
                            <Cell>Letter</Cell>
                            <Cell>Frequency</Cell>
                        </Row>
                    </Head>
                    <Body>
                        <Row>
                            <Cell>S</Cell>
                            <Cell>3</Cell>
                        </Row>
                        <Row>
                            <Cell>T</Cell>
                            <Cell>3</Cell>
                        </Row>
                        <Row>
                            <Cell>A</Cell>
                            <Cell>1</Cell>
                        </Row>
                        <Row>
                            <Cell>I</Cell>
                            <Cell>2</Cell>
                        </Row>
                        <Row>
                            <Cell>C</Cell>
                            <Cell>1</Cell>
                        </Row>
                    </Body>
                </DataTable>
                <p>There are two letters with highest frequency S and T. Hence, the dataset (set of letters) is multimodal.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                If every data point is multiplied by a number \(k\), then what is the mode of the new data (assuming \(m\) to be mode of the origin data)?
            </div>
            <div class="solution">
                <p>
                    The multiplication does not change the frequencies. If \(m\) is the mode, then the new mode will be \(km\).
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                The largest data point in the given data is doubled. How can this effect the mode?
            </div>
            <div class="solution">
                <p>
                    Mode does not depend on the quantitative value of data points, it only depends on their frequencies. The mode will not be affected as the new number will be larger than any other number in the data set, i.e. it will not change the frequency table. So mode remains unchanged if the largest data point is not the most frequent one.
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Can you compare mean and mode of any given data, i.e. conclude whether \(mean \leq mode\)?
            </div>
            <div class="solution">
                <p>
                    Mean depends on the value and mode depends on the frequency. Consider the following data 2, 2, 2, 2, 100, 100, 100. Here the mean is {`\\(\\frac{308}{7} = 44\\)`} but mode is 2 as it is the most frequent data point. In this case, \(mean\gt mode\)
                </p>
                <p>
                    In another example, consider data 100, 100, 100, 100. In this case, mean and mode are equal, i.e. \(mean = mode\)
                </p>
                <p>
                    Consider 104, 104, 104, 100. Here, the mean is {`\\(\\frac{412}{4} = 103\\)`} but the mode is 104. In this case, \(mean \lt mode\)
                </p>
            </div>
        </Content>
    </Card>
</article>