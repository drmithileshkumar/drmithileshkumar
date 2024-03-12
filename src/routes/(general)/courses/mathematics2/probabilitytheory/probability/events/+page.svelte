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
    $currentPath = "Events";
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
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/events" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Events
    </h4>
    
    <Card>
        <Content>
            <h6>Experiment</h6>
            <p>
                An experiment is a process that generates data. Each datapoint is called an outcome of the experiment.
            </p>
            <div class="examples">
                <ol>
                    <li>Tossing a coin is an experiment.</li>
                    <li>Rolling a dice is an experiment.</li>
                    <li>Measuring the height of students in the class is an experiment.</li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Sample Space</h6>
            <p>
                Instead of dealing with each outcome of repetition of the experiment, we make an exhaustive list of all possible outcomes.
            </p>
            <div class="definition">
                <p>
                    The set of all possible outcomes of an experiment is called <strong>sample space</strong>.
                </p>
            </div>
            <div class="examples">
                <ol>
                    <li>
                        When a coin is tossed there are only two possible outcomes Head or Tail (assuming that coin is thin enough that it does not stand on its edge.). In this case, the sample space is written as {`\\[S = \\{Head, Tail\\} = \\{H, T\\}\\]`}
                    </li>
                    <li>
                        When a dice is rolled, there are only six possible outcomes. In this case, the sample space is written as {`\\[S = \\{1, 2, 3, 4, 5, 6\\}\\]`}
                    </li>
                    <li>
                        When measuring height, the outcomes are decimal numbers that can lie in typical range of 100 cm to 200 cm. In this case, the sample space is continuous and has infinitely many possible values, although we can discretize it by only measuring upto a precision.
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6>Event</h6>
            <p>Any subset of sample space is an event.</p>
            <div class="examples">
                <ol>
                    <li>
                        Outcome H is an event in coin toss experiment.
                    </li>
                    <li>
                        Outcome 6 is an event in die roll. Outcome being an even number that is, belonging to subset {`\\(\\{2, 4, 6\\}\\)`} is an event.
                    </li>
                </ol>
            </div>
        </Content>
    </Card>
</article>