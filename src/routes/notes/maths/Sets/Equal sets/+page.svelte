<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        onMount(() => {
            $selectedChapter = 'Sets';
            $selectedSection = 'Equal sets';
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
                    
                    let n = randInt(20, 1);
                    let m = randInt(n + 1, n + 10) + 10;
                    let k = randInt(8, 2);
                    let s = new Sets();
                    s.randomSet(n, m, k);
                    let sbad = new Sets();
                    sbad.randomSet(n, n + 20, k);
                    let poly = '';
                    for(let i = 0; i < s.e.length; i++) {
                        poly = poly + `(x - ${s.e[i]})`;
                    }
                    values[0] = `\\(${s.str()}\\)`;
                    values[1] = `\\(${sbad.str()}\\)`;
                    values[2] = `\\(${sbad.randomSubset().str()}\\)`;
                    values[3] = `\\(${sbad.randomSubset().str()}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Let \\(R\\) be the set of roots of the polynomial \\[${poly} = 0\\] Which of sets is equal to \\(R\\)?`;
                    break;
                }
            }
            problemset = problemset;
            return problemset;
        }
    </script>
    <style>
        p {
            text-indent: 2em;
        }
        /* .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 600px);
        } */
    </style>
    <svelte:head>
        <title>{$selectedSection}</title>
        <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
        <meta name="description" content="Equal sets" />
        
    </svelte:head>
    <article>
        <h1>{$selectedSection}</h1>
        <section>
            <p>Usually, when a mathematical object is defined, if possible, its equality is defined as well. We can talk about equality of sets which is based on the content of the sets.</p>
           <div class="definition">
               <p>
                    Two sets \(A\) and \(B\) are said to be <em>equal</em> if they have exactly the same elements. Otherwise, the sets are said to be <em>unequal</em>
               </p>
               <ul>
                   <li>
                    If \(A\) and \(B\) are equal sets, we write \(A = B\).
                   </li>
                   <li>
                    If \(A\) and \(B\) are unequal sets, we write \(A \neq B\).
                   </li>
               </ul>
           </div>
        </section>
        
        <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    {`\\(\\{1, 2, 3\\} = \\{2, 1, 3\\}\\)`}
                </li>
                <li>
                    {`\\(\\{1, 2, 3\\} = \\{2, 1, 3, 3, 1\\}\\)`}
                </li>
                <li>
                    {`\\(\\{E, F, R\\}\\)`} and the set of letters in FREE are the same set.
                </li>
            </ul>
        </section>
        
        <!-- <section>
            <h2>Practice</h2>
            {#if $session.user}
            <Practice {generateProblem}/>
            {:else}
                <Message>You need to be logged in to practice.</Message>
            {/if}
        </section> -->
    </article>