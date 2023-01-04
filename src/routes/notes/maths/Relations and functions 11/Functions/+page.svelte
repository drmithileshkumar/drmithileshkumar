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
            $selectedChapter = 'Relations and functions 11';
            $selectedSection = 'Functions';
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
           <div class="definition">
               <p>
                <strong>Function</strong> A function \(f\) from a set \(A\) to a set \(B\) is a specific type of relation for which every element \(x\) of set \(A\) has one and only one image \(y\) in set \(B\). We write \(f:A\to B\), where \(f(x) = y\).
               </p>
           </div>
           <ul>
                <li>
                    \(A\) is the domain and \(B\) is the codomain of \(f\).
                </li>
                <li>
                    The range of the function is the set of images.
                </li>
                <li>
                    A real function has the set of real numbers or one of its subsets both as its domain and as its range.
                </li>
           </ul>
            
        
        </section>
        <section>
            <h2>Algebra of real functions</h2>
            <p>
                For functions \(f:X\to R\) and \(g:X\to R\), we have 
                    {`\\[
                        \\begin{aligned}
                            (f + g)(x) &= f(x) + g(x), x\\in X\\\\
                            (f - g)(x) &= f(x) - g(x), x\\in X\\\\
                            (f\\cdot g)(x) &= f(x)\\cdot g(x), x\\in X\\\\
                            (kf)(x) &= k~f(x), x\\in X, k${TeX.inR}\\\\
                            \\Big(\\frac{f}{g}\\Big)(x) &= \\frac{f(x)}{g(x)}, x\\in X, g(x) \\neq 0
                        \\end{aligned}    
                    \\]`}
            </p>
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