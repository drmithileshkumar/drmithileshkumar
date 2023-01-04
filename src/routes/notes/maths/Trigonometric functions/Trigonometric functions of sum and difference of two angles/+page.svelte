<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import {TeX} from '$lib/utils/common/constants';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        onMount(() => {
            $selectedChapter = 'Trigonometric functions';
            $selectedSection = 'Trigonometric functions of sum and difference of two angles';
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
        <meta name="description" content={$selectedChapter + ' ' + $selectedSection} />
        
    </svelte:head>
    <article class:absolute={$presentationMode} bind:this={$presentation}>
        <h1>{$selectedSection}</h1>
        <section>
           <ul>
            <li style="display: flex;">
                <table>
                    <tr>
                        <td>
                            {`\\[
                                \\begin{aligned}
                                \\cos(\\frac{\\pi}{2} + x) &= -\\sin x\\\\
                                \\cos(\\pi - x) &= -\\cos x\\\\
                                \\cos(\\pi + x) &= \\cos x\\\\
                                \\cos(2\\pi - x) &= \\cos x
                                \\end{aligned}
                                \\]`}
                        </td>
                        <td>
                            {`\\[
                                \\begin{aligned}
                                \\sin(\\frac{\\pi}{2} + x) &= \\cos x\\\\
                                \\sin(\\pi - x) &= \\sin x\\\\
                                \\sin(\\pi + x) &= -\\sin x\\\\
                                \\sin(2\\pi - x) &= -\\sin x
                                \\end{aligned}
                                \\]`}
                        </td>
                    </tr>
                </table>
            </li>
            <li>
                If none of the angles \(x,y\) and \((x\pm y)\) is an odd multiple of \({TeX.dfrac('\\pi','2')}\), then \[\tan(x + y) = {TeX.frac('\\tan x + \\tan y','1 - \\tan x \\tan y')}\]
            </li>
            <li>
                If none of the angles \(x,y\) and \((x\pm y)\) is an odd multiple of \(\pi\), then \[\cot(x + y) = {TeX.frac('\\cot x \\cot y - 1', '\\cot x + \\cot y')}\]
            </li>
            <li>
                \(\cos 2x = \cos^2x - \sin^2x = 2\cos^2x - 1 = 1 - 2\sin^2x = {TeX.dfrac('1-\\tan^2x','1+\\tan^2x')}\)
            </li>
            <li>
                \(\sin 2x = 2\sin x \cos x = {TeX.dfrac('2\\tan x','1 + \\tan^2x')}\)
            </li>
            <li>
               \(\tan 2x = {TeX.dfrac('2\\tan x','1 - \\tan^2x')}\)
            </li>
            <li>
                \(\sin 3x = 3\sin x - 4\sin^3x\)
            </li>
            <li>
                \(\cos 3x = 4\cos^3x - 3\cos x\)
            </li>
            <li>
                \(\tan 3x = {TeX.dfrac('3\\tan x - \\tan^3x','1 - 3\\tan^2x')}\)
            </li>
            <li>
                <ol>
                    <li style="padding-top: 0.5em;">
                        \(\cos x + \cos y = 2\cos {TeX.dfrac('x + y','2')} \cos{TeX.dfrac('x-y', '2')}\)
                    </li>
                    <li style="padding-top: 0.5em;">
                        \(\cos x - \cos y = -2\sin {TeX.dfrac('x + y','2')} \sin{TeX.dfrac('x-y', '2')}\)
                    </li>
                    <li style="padding-top: 0.5em;">
                        \(\sin x + \sin y = 2\sin {TeX.dfrac('x + y','2')} \cos{TeX.dfrac('x-y', '2')}\)
                    </li>
                    <li style="padding-top: 0.5em;">
                        \(\sin x - \sin y = 2\cos {TeX.dfrac('x + y','2')} \sin{TeX.dfrac('x-y', '2')}\)
                    </li>
                </ol>
            </li>
            <li>
                <ol>
                    <li>
                        \(2\cos x \cos y = \cos(x + y) + \cos(x-y)\)
                    </li>
                    <li>
                        \(-2\sin x \sin y = \cos(x + y) - \cos(x -y)\)
                    </li>
                    <li>
                        \(2\sin x \cos y = \sin(x + y) + \sin(x - y)\)
                    </li>
                    <li>
                        \(2\cos x \sin y = \sin(x + y) - \sin(x - y)\)
                    </li>
                </ol>
            </li>
           </ul>
            
        
        </section>
        
        <!-- <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    The set of positive numbers less than 0 contains no element. Hence, it is an empty set.
                </li>
                <li>
                    The set of apples in an empty basket is an empty set.
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