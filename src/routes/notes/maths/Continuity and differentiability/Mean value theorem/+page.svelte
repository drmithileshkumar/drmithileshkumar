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
            $selectedChapter = 'Continuity and differentiability';
            $selectedSection = 'Mean value theorem';
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
            <ul>
                <li>
                    <strong>Column matrix</strong>: A matrix is said to be a <em>column matrix</em> if it has only one column.
                </li>
                <li>
                    <strong>Row matrix</strong>: A matrix is said to be a <em>row matrix</em> if it has only one row.
                </li>
                <li>
                    <strong>Square matrix</strong>: A matrix is said to be a <em>square matrix</em> if it has same number of rows and columns.
                </li>
                <li>
                    <strong>Diagonal matrix</strong>: A square matrix is said to be a <em>diagonal matrix</em> if all its non-diagonal elements are zero.
                </li>
                <li>
                    <strong>Scalar matrix</strong>: A diagonal matrix is said to be a <em>scalar matrix</em> if its diagonal elements are equal.
                </li>
                <li>
                    <strong>Identity matrix</strong>: A square matrix is said to be a <em>identity matrix</em> if its diagonal elements are equal to 1.
                </li>
                <li>
                    <strong>Zero matrix</strong>: A matrix is said to be a <em>zero matrix</em> if all its elements are zero.
                </li>
            </ul>
        </section>
        <section>
            <h2>Equality of matrices</h2>
            <p>
                Two matrices \(A\) and \(B\) are said to be equal if
            </p>
            <ol>
                <li>
                    they are of the same order
                </li>
                <li>
                    each element of \(A\) is equal to the corresponding elements of \(B\), that is \({TeX.sub('a', 'ij')} = {TeX.sub('b', 'ij')}\) for all \(i\) and \(j\).
                </li>
            </ol>
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