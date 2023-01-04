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
            $selectedChapter = 'Limits and derivatives';
            $selectedSection = 'Limits';
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
            <div class="definition">
                <p>
                    We say \({TeX.lim('x', 'a^-')}f(x)\) is the expected value of \(f\) at \(x = a\) given the values of \(f\) near \(x\) to the left of \(a\). This value is called the <em>left hand limit</em> of \(f\) at \(a\).
                </p>
                <p>
                    We say \({TeX.lim('x', 'a^+')}f(x)\) is the expected value of \(f\) at \(x = a\) given the values of \(f\) near \(x\) to the right of \(a\). This value is called the <em>right hand limit</em> of \(f\) at \(a\).
                </p>
                <p>
                    If the right and left hand limits coincide, we call that common value as the limit of \(f(x)\) at \(x = a\) and denote it by \({TeX.lim('x', 'a')}f(x)\)
                </p>
            </div>
            <ul>
                <li style="padding-top: 0.5em;">
                   \({TeX.lim('x', 'a')}{TeX.dfrac('x^n - a^n', 'x-a')} = n{TeX.pow('a', 'n-1')}\)
                </li>
                <li style="padding-top: 0.5em;">
                    \({TeX.lim('x',0)}{TeX.dfrac('\\sin x','x')} = 1\)
                </li>
                <li style="padding-top: 0.5em;">
                    \({TeX.lim('x',0)}{TeX.dfrac('1-\\cos x','x')} = 0\)
                </li>
            </ul>
        </section>
        <section>
            <h2>
                Algebra of limits
            </h2>
            <p>
                Let \(f\) and \(g\) be two functions such that both \({TeX.lim('x', 'a')}f(x)\) and \({TeX.lim('x', 'a')}g(x)\) exist. Then,
            </p>
            <ol>
                <li>
                    Limit of sum of two functions is sum of the limits of the functions, i.e.,
                    \[{TeX.lim('x', 'a')}[f(x) + g(x)] = {TeX.lim('x', 'a')}f(x) + {TeX.lim('x', 'a')} g(x)\]
                </li>
                <li>
                    Limit of difference of two functions is difference of the limits of the functions, i.e.,
                    \[{TeX.lim('x', 'a')}[f(x) - g(x)] = {TeX.lim('x', 'a')}f(x) - {TeX.lim('x', 'a')} g(x)\]
                </li>
                <li>
                    Limit of product of two functions is product of the limits of the functions, i.e.,
                    \[{TeX.lim('x', 'a')}[f(x) \cdot g(x)] = {TeX.lim('x', 'a')}f(x) \cdot {TeX.lim('x', 'a')} g(x)\]
                </li>
                <li>
                    Limit of quotient of two functions is quotient of the limits of the functions ( whenever the denominator is non-zero ), i.e.,
                    \[{TeX.lim('x', 'a')}{TeX.frac('f(x)', 'g(x)')} = {TeX.frac(TeX.lim('x', 'a') + 'f(x)', TeX.lim('x', 'a')+'g(x)')}\]
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