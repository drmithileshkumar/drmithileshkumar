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
            $selectedSection = 'Sets and their representations';
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
                    values[0] = `Collection of purest rivers`;
                    values[1] = `Collection of states in India`;
                    values[2] = `Collection of countries`;
                    values[3] = `Collection of my watches`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following is a not set?`;
                    break;
                }
                case 1: {
                    
                    let m = randInt(20, 10);
                    let n = randInt(Math.floor(m/2), 1); // n < x < m /l
                    let l = randInt(Math.floor(2*n/3), 2);
                    n = Math.random() < 0.5 ? n: -n;
                
                    let set = new Sets();
                    for(let i = n + 1; i < m; i++) {
                        set.e.push(i);
                    } 
                    let subA = new Sets(set.e.filter(item => item % l == 0));
    
                    values[0] = `\\(${subA.str()}\\)`;
                    values[1] = `\\(${set.randomSubset().str()}\\)`;
                    values[2] = `\\(${set.randomSubset().str()}\\)`;
                    values[3] = `\\(${set.randomSubset().str()}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following is correct Roster form of the set \\[ x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\]`;
                    break;
                }
                case 2: {
                    let A = new Sets();
                    let U = new Sets();
                    U.interval(-10, 10);
                    A.randomSet(-10, 10, randInt(10, 8));
                    let C = U.diff(A);
                    let B = A.krandomSubset(3);
                    
                    values[0] = `\\(${C.e[Math.floor(Math.random()*C.e.length)]}\\in A\\)`;
                    values[1] = `\\(${B.e[0]}\\in A\\)`;
                    values[2] = `\\(${B.e[1]}\\in A\\)`;
                    values[3] = `\\(${B.e[2]}\\in A\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Given a set \\[A = ${A.str()}\\] which of the following is not correct?`;
                    break;
                }
                case 3: {
                    
                    let m = randInt(20, 10);
                    let n = randInt(Math.floor(m/2), 1);
                    let l = randInt(Math.floor(2*n/3), 2);
                    n = Math.random() < 0.5 ? n : -n;
                    let set = new Sets();
                    for(let i = n + 1; i < m; i++) {
                        set.e.push(i);
                    }
                    let setA = new Sets(set.e.filter(item => item % l == 0));
    
                    values[0] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m} \\text{ and divisible by } ${l}\\}\\)`;
                    values[1] = `\\(\\{x : x \\text{ is an integer such that } ${n} < x < ${m}\\}\\)`;
                    values[2] = `\\(\\{x : x \\text{ is an integer such that } ${m} < x < ${n} \\text{ and divisible by } ${l}\\}\\)`;
                    values[3] = `\\(\\{x : x \\text{ is an integer such that } x \\text{ is divisible by } ${l}\\}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following is correct set-builder form of the set \\[${setA.str()}\\]`;
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
        <h2>Definition</h2>
        <section>
            <p>
                We are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the mathematical refinement of this idea of collection. It turns out that not every collection can be a set. One basic requirement of a mathematical concept is that its definition must be unique. Not every collection has a unique definition. Consider, for example, <span class="specialtext">the collection of favourite songs</span>. Pretty much every person would have their own unique collection of favourite songs. 
            </p>
            <p>
                Although the collection of favourite songs is defined for each person, but it is not unique for everyone. We can not consider such collections as mathematical object. Then the question remains <em>"how do we eliminate such bad cases of collections?"</em>
            </p>
            <p>
                This problem of uniquenss can be solved if it is possible to decide, with certainty, whether an object is part of the collection. This is how we define the mathematical notion of a <em>set</em>.
            </p>
            <div class="definition">
                A <strong>set</strong> is a <em>well-defined</em> collection of objects.
            </div>
            <p>
                The property <em>well-defined</em> means given a set and an object, we can determine, without ambiguity, whether the object <em>belongs</em> to the set or not.
            </p>
        </section>
        
        <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    Collection of students in a given class is a set.
                </li>
                <li>
                    Alphabets in English is a set.
                </li>
                <li>
                    Natural numbers divisible by 2 is a set.
                </li>
                <li>
                    Collection of circles of different radii is a set.
                </li>
                <li>
                    Collection of all rivers in the world is a set.
                </li>
            </ul>
        </section>
        <h2>Elements of a set</h2>
        <section>
            <ul>
                <li>
                    A set is usually denoted by capital letters \(A, B, X, Y\) etc.
                </li>
                <li>
                    Members of a set are called elements of the set. 
                </li>
                <li>
                    Elements of a set are usually represented by small letters \(a, b, x, y\) etc.
                </li>
            </ul>
            <h3>Epsilon (\(\in\)) notation</h3>
            <ul>
                <li>
                    If \(a\) is an elment of a set \(A\), we say that \(a\) <em>belongs to</em> \(A\) and denote this fact using \(a\in A\).
                </li>
                <li>
                    If \(a\) is <strong>not</strong> an elment of a set \(A\), we say that \(a\) <em>does not belongs to</em> \(A\) and denote this fact using \(a\notin A\).
                </li>
            </ul>
            
        </section>
        <section>
            <h3 class="examples">Examples</h3>
            <ul>
                <li>
                    If \(A\) is the set of vowels in English, then \(a\in A\) because \(a\) is a vowel, but \(x\notin A\) because \(x\) is not a vowel.
                </li>
                <li>
                    If \(E\) is the set of Natural numbers divisible by 2, then \(2\in E\), but \(0\notin E\) and \(3\notin E\).
                </li>
                <li>
                    If \(R\) is the set of all rivers in the world, then \(Ganga\in R\), but \(India\notin R\).
                </li>
            </ul>
        </section>
        <h2>Roster Form</h2>
        <section>
            <div class="definition">
                <p>
                    In roster form, all the elements of a set are listed, comma-separated and enclosed within braces {'\\[\\{a_1, a_2,\\dots, a_n \\}\\]'}
                </p>
            </div>
        </section>
        <h3 class="examples">Examples</h3>
        <section>
            <ul>
                <li>
                    Set of natural numbers less than 10 and divisible by 2 is {`\\(\\{2, 4, 6, 8\\}\\)`}.
                </li>
                <li>
                    Set of English vowels is {`\\(\\{a, e, i, o, u\\}\\)`}.
                </li>
                <li>
                    Set of roots of quadratic equation \(x^2 - 3x + 2 = 0\) is {`\\(\\{1, 2\\}\\)`}.
                </li>
            </ul>
        </section>
        <section>
            <h3 class="remark">Remarks </h3>
            <ul>
                <li>
                    In roster form, the order in which the elements are listed does not matter. For example, the set {`\\(\\{2, 4\\}\\)`} is the same as {`\\(\\{4, 2\\}\\)`}.
                </li>
                <li>
                    In roster form, repeating an element in the list does not change the set. Hence, an element is usually listed only once in the set. For example, the set of letter in BETTER is {`\\(\\{B, E, T, T, E, R\\}\\)`}, there is no need to repeat E and T. We can just write {`\\(\\{B, E, T, R\\}\\)`}.
                </li>
                <li>
                    The set of roots of quadratic equation \(x^2 - 2x + 1 = 0\) is {`\\(\\{1, 1\\}\\)`} or just {`\\(\\{1\\}\\)`}.
                </li>
            </ul>
           
        </section>
        <h2>Set Builder Form</h2>
        <section>
            <div class="definition">
                <p>
                 In set-builder form, we specify a property that is satisfied <strong>only</strong> by the elements of the set. It is written as {`\\[\\{x : \\text{Property satisfied by } x\\}\\]`} The symbol \(x\) can be replaced with any other symbol like \(a, b, y\) etc. The colon (:) stands for "such that". After colon (:) we write the property satisfied by all elements of the set.
                </p>
            </div>
         </section>
         
         <section>
             <h3 class="examples">Examples</h3>
             <ul>
                 <li>
                     The set-builder form of the set {`\\(\\{2, 4, 6, 8\\}\\)`} is {`\\(\\{x: x \\text{ is a natural numbers less than } 10 \\text{ and divisible by } 2\\}\\)`}.
                 </li>
                 <li>
                     The set-builder form of the set {`\\(\\{a, e, i, o, u\\}\\)`} is {`\\(\\{x : x \\text{ is an English vowel}\\}\\)`}.
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