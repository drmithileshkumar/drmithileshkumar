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
            $selectedSection = 'Finite and infinite sets';
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
                    
    
                    values[0] = `\\(${n - m - 1}\\)`;
                    values[1] = `\\(${n - m}\\)`;
                    values[2] = `\\(${n - m + 1}\\)`;
                    values[3] = `\\(${n - m + 2}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `What is the size of set containing \\(x\\) that satisfies \\[${m}< x < ${n}\\]`;
                    break;
                }
                case 1: {
                    
                    let m = randInt(20, 1);
                    m = Math.random() > 0.5 ? -m : m;
                    let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
                    
    
                    values[0] = `\\(${m} < x < ${n}\\)`;
                    values[1] = `\\(${m} > x < ${n}\\)`;
                    values[2] = `\\(${n} < x > ${m}\\)`;
                    values[3] = `\\(${m} < x > ${n}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following corresponds to a finite set?`;
                    break;
                }
                case 2: {
                    
                    let m = randInt(20, 1);
                    m = Math.random() > 0.5 ? -m : m;
                    let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
                    
    
                    values[0] = `\\(${m} < x < ${n}\\)`;
                    values[1] = `\\(${m} > x < ${n}\\)`;
                    values[2] = `\\(${n} < x > ${m}\\)`;
                    values[3] = `\\(${m} < x > ${n}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following does not correspond to an infinite set?`;
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
        <meta name="description" content="Finite and infinite sets" />
        
    </svelte:head>
    <article>
        <h1>{$selectedSection}</h1>
        <h2>Size of a set</h2>
        <section>
            <p>The analysis of sets begin with knowing its size.</p>
           <div class="definition">
               <p>
                    The size of a set is equal to the number of elements in the set.
               </p>
               <ul>
                   <li>
                    The size of a set is also called the <em>cardinality</em> of the set.
                   </li>
                   <li>
                       For a set \(A\), its size is denote by \(|A|\) or \(n(A)\).
                   </li>
               </ul>
           </div>
           <p class="remark">
               Elements are counted only once. Repeating an element in the set will not change its size.
           </p>
        </section>
        
        <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    The size of set {'\\(A = \\{1, 2, 3\\}\\)'} is \(n(A) = 3\).
                </li>
                <li>
                    The size of set {'\\(A = \\{1, 1, 2, 3, 3, 3\\}\\)'} is also \(n(A) = 3\).
                </li>
                <li>
                    The number of elements in an empty set is 0. That is, \(n(\varphi) = 0\).
                </li>
            </ul>
        </section>
        <h2>Finite Set</h2>
        <section>
            <div class="definition">
                <p>
                     If counting of the elements of a set can finish, it called a <em>finite set</em>.
                </p>
                <ul>
                    <li>
                     The size of a finite set is a positive integer.
                    </li>
                    <li>
                        Empty set is a finite set as well.
                    </li>
                </ul>
            </div>
         </section>
         
         <section>
             <h3 class="examples">Examples</h3>
             <ul>
                 <li>
                     Counting of elements of {'\\(A = \\{1, 2, 3\\}\\)'} can finish, and hence it is finite.
                 </li>
                 <li>
                     The set of number of letters in a given English word is finite.
                 </li>
                 <li>
                     The set of roots of a finite degree polynomial is finite.
                 </li>
             </ul>
         </section>
         <h2>Infinite Set</h2>
         <section>
            <div class="definition">
                <p>
                     If counting of the elements of a set can not finish, it called an <em>infinite set</em>.
                </p>
                <ul>
                    <li>
                     The size of an infinite set is infinity (\(\infty\)).
                    </li>
                </ul>
            </div>
         </section>
         
         <section>
             <h3 class="examples">Examples</h3>
             <ul>
                 <li>
                     The set of natural numbers \(N\) is an infinite set.
                 </li>
                 <li>
                     The set of numbers divisible by \(2\) is an infinite set.
                 </li>
                 <li>
                     The set of real numbers in an infinite set.
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