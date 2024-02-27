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
    $currentPath = "Median";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/median" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Measures of Central Tendency 
    </h4>
    <h5>Median</h5>
    <Card>
        <Content>
            
            <p>The median is the middle value in a data set when the values are arranged in <strong>ascending</strong> or <strong>descending</strong> order. The definition of the median depends on whether the number of observations in the data set is odd or even:</p>
            <p>For an odd number of observations {`n`}, the median {`M`} is the value at position {`\\( \\frac{n+1}{2} \\)`} in the ordered set. Mathematically, if {`\\( X = \\{x_1, x_2, ..., x_n\\} \\)`} is the ordered data set, then:</p>
            <p>{`\\[ M = x_{\\frac{n+1}{2}} \\]`}</p>
            <p>For an even number of observations {`n`}, the median is the average of the values at positions {`\\( \\frac{n}{2} \\)`} and {`\\( \\frac{n}{2} + 1 \\)`} in the ordered set. In this case:</p>
            <p>{`\\[ M = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2} + 1}}{2} \\]`}</p>
            <p>Thus, the median divides the data set into two equal parts, with half of the data points being less than or equal to the median and the other half being greater than or equal to the median.</p>

            <div class="examples">
                The median of 1, 3, 2, 9, 3, 5, 6, 3 (after sorting [1, 2, 3, 3, 3, 5, 6, 9]) is {`\\(\\frac{x_4 + x_5 }{2} = \\frac{3 + 3}{2} = 3\\)`}
            </div>
        </Content>
    </Card>
    <h5>Questions</h5>
    <Card>
        <Content>
            <div class="question">
                If every data point is multiplied by a number \(k\), then what is the median of the new data (assuming \(m\) to be median of the original data)?
            </div>
            <div class="solution">
                <p>
                    Multiplication, a positive number does not change the order of sorted data. A negative number reverses the order. In any case, the new median gets multiplied by \(k\).
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Let \(x_1, x_2,\dots, x_n\) be numbers in ascending order. Two numbers \(a, A\) are added to this set such that \(a \lt x_1\) and \(A \gt x_n\). What will be the new median?
            </div>
            <div class="solution">
                <p>
                    The new data set is \(a, x_1, x_2, \dots, x_n, A\). In this case, the middle values do not change. Hence, the median remains the same.
                </p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                Give an example of data set where \(mean \lt median \lt mode\).
            </div>
            <div class="solution">
                <p>
                    Consider 1, 2, 3, 90, 101, 101, 101. {`\\[
                        \\begin{aligned}
                        \\text{Mean} &= \\frac{399}{7} = 57\\\\
                        \\text{Median} &= 90\\\\
                        \\text{Mode} &= 101
                        \\end{aligned}
                        \\]`}
                    This data set satisfies that \(mean \lt median \lt mode\).
                </p>
            </div>
        </Content>
    </Card>
</article>