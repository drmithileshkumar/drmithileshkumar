<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import { TeX } from '$lib/utils/common/constants';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        onMount(() => {
            $selectedChapter = 'Linear programming';
            $selectedSection = 'Linear programming problem and its mathematical formulation';
            $slideCounter = 11;
            $currentSlide = -2;
            MathJax.typeset();
        });
        let problemset = {
            s: "",
            o: {
                    'A': '',
                    'B': "",
                    'C': "",
                    'D': ''
                },
            c: ""
        };
        const generateProblem = (problemnumber) => {
            let N = 1;
            problemnumber = problemnumber % N;
            let choices = ['A', 'B', 'C', 'D'];
            let correctChoiceIndex = Math.floor(Math.random()*4);
            problemset.c = choices[correctChoiceIndex];
            let ans;
            let values = [0, 0, 0, 0];
            switch(problemnumber) {
                case 0: {
                    
                    let m = randInt(20, 1);
                    m = Math.random() > 0.5 ? -m : m;
                    let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
                    let m1 = randInt(20, 2);
                    let n1 = randInt(Math.floor(m1/2), 0);
                    let m2 = randInt(20, 2);
                    let n2 = randInt(Math.floor(m2/2), 0);
                    let m3 = randInt(20, 2);
                    let n3 = randInt(Math.floor(m3/2), 0);
    
                    values[0] = `\\(${n} < x < ${m}\\)`;
                    values[1] = `\\(${n1} < x < ${m1}\\)`;
                    values[2] = `\\(${n2} < x < ${m2}\\)`;
                    values[3] = `\\(${n3} < x < ${m3}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following will correspond to an empty set?`;
                    break;
                }
            }
            problemset = problemset;
            return problemset;
        }
    </script>
    <style>
        /* p {
            text-indent: 2em;
        } */
        /* .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 600px);
        } */
    </style>
    <svelte:head>
        <title>{$selectedSection}</title>
        <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
        <meta name="description" content={$selectedChapter + ' ' +  $selectedSection}/>
        
    </svelte:head>
    <article class:absolute={$presentationMode} bind:this={$presentation}>
        <h1>{$selectedSection}</h1>
        <section>
            <p>
                A linear programming problem is one that is concerned with finding the optimal value (maximum or minimum) of a linear function of several variables (called <strong>objective function</strong> ) subject to the conditions that the variables are non-negative and satisfy a set of linear inequalities (called linear <strong>constraints</strong> ). Variables are sometimes called <strong>decision variables</strong> and are <strong>non-negative</strong>.
            </p>
            <p>
                The common region determined by all the constraints including the non-negative constraints \(x\geq 0, y\geq 0\) of a linear programming problem is called the <strong>feasible region</strong> (or <strong>solution region</strong> ) for the problem.
            </p>
            <p>
                Points within and on the boundary of the feasible region represent <strong>feasible solutions</strong> of the constraints. Any point outside the feasible region is an <strong>infeasible solution</strong>.
            </p>
            <p>
                Any point in the feasible region that gives the optimal value (maximum or minimum) of the objective is called an <strong>optimal solution</strong>.
            </p>
            <p class="theorem">
                <strong>Theorem 1:</strong> Let \(R\) be the feasible region (convex polygon) for a linear programming problem and let \(Z = ax + by\) be the objective function. When \(Z\) has an optimal value (maximum or minimum), where the variables \(x\) and \(y\) are subject to constraints described by linear inequalities, this optimal value must occur at a corner point (vertex) of the feasible region.
            </p>
            <p class="theorem">
                <strong>Theorem 2:</strong> Let \(R\) be the feasible region (convex polygon) for a linear programming problem and let \(Z = ax + by\) be the objective function. If \(R\) is <strong>bounded</strong>, then the objective function \(Z\) has bothe a <strong>maximum</strong> and a <strong>minimum</strong> value on \(R\) and each of these occurs at a corner point (vertex) of \(R\).
            </p>
            <p>
                If the feasible region is unbounded, then a maximum or a minimum may not exist. However, if it exists, it must occur at a corner point of \(R\).
            </p>
        </section>
        
        <!-- <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    If we are studying a system of numbers, then we can <em>choose</em> the set of natural numbers {TeX.N} as the universal set.
                </li>
                <li>
                    We are studying about students of a class, then the set of all students in the class should be chosen as the universal set.
                </li>
            </ul>
        </section> -->
        
        <!-- <section>
            <h2>Practice</h2>
            {#if $session.user}
            <Practice {generateProblem}/>
            {:else}
                <Message>You need to be logged in to practice.</Message>
            {/if}
        </section> -->
    </article>