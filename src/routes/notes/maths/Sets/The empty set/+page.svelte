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
            $selectedSection = 'The empty set';
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
        <meta name="description" content="Introduction to sets" />
        
    </svelte:head>
    <article>
        <h1>{$selectedSection}</h1>
        <section>
            <p>The simplest possible set is one that does not contain any element at all.</p>
           <div class="definition">
               <p>
                    A set which does not contain any element is called the <strong>empty</strong> set.
               </p>
               <ul>
                   <li>
                    An empty set is also called the <em>null set</em> or the <em>void set</em>.
                   </li>
                   <li>
                       An empty set is denoted either as {'{ }'} or \(\varphi\) (read as "phi").
                   </li>
               </ul>
           </div>
        </section>
        
        <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    The set of positive numbers less than 0 contains no element. Hence, it is an empty set.
                </li>
                <li>
                    The set of apples in an empty basket is an empty set.
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