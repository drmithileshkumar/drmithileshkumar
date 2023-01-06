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
            $selectedChapter = 'Differential equations';
            $selectedSection = 'Methods of solving first order first degree differential equations';
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
            <h2>Differential equations with variable seperable</h2>
            <p>
                A first order-first degree differential equation is of the form \[{TeX.dydx()} = F(x,y)\] 
            </p>
            <p>
                If \(F(x,y)\) can be expressed as a product \(g(x)h(y)\), where, \(g(x)\) is a function of \(x\) and \(h(y)\) is a function of \(y\), then the above differential equation is said to be of variable separable type. Then we can write \[{TeX.dydx()} = h(y)\cdot g(x)\]
            </p>
            <p>
                If \(h(y)\neq 0\), separating the variables we get \[{TeX.frac('1', 'h(y)')}dy = g(x)dx\]
            </p>
            <p>
                Integrating both sides, we get \[\int {TeX.frac('1', 'h(y)')}dy = \int g(x)dx\]
            </p>
        </section>
        <section>
            <h2>Homogeneous differential equations</h2>
            <p class="definition">
                A function \(F(x,y)\) is said to be <em>homogeneous function of degree n</em> if \(F(\lambda x, \lambda y) = \lambda^n F(x, y)\) for any nonzero constant \(\lambda\).
            </p>
            <p>
                A function \(F(x,y)\) is a homogeneous function of degree \(n\) if \[F(x,y) = x^ng({TeX.frac('y','x')})~or~y^nh({TeX.frac('x','y')})\]
            </p>
            <p class="definition">
                A differential equation of the form \({TeX.dydx()} = F(x,y)\) is said to be <em>homogeneous</em> if \(F(x,y)\) is a homogeneous function of degree zero.
            </p>
            <p>
                To solve a homogeneous differential equation of the type \[{TeX.dydx()} = F(x,y) = g({TeX.frac('y', 'x')})\]
            </p>
            <p>
                We make the substitution \(y = v\cdot x\)
            </p>
            <p>
                Differentiating with respect to \(x\), we get \[{TeX.dydx()} = v + x{TeX.frac('dv', 'dx')}\]
            </p>
            <p>
                Substituting the value of \({TeX.dydx()}\), we get {`\\[
                    \\begin{eqnarray}
                        v + x\\frac{dv}{dx} &=& g(v)\\\\
                        x\\frac{dv}{dx} = g(v) - v\\\\
                        \\implies \\int \\frac{dv}{g(v) - v} &=& \\int \\frac{1}{x}dx + C
                    \\end{eqnarray}
                    \\]`}
            </p>
        </section>
        <section>
            <h2>Linear differential equations</h2>
            <p>
                A differential equation of the form \[{TeX.dydx()} + Py = Q\] where \(P\) and \(Q\) are constants or functions of \(x\) only, is known as a first order linear differential equation.
            </p>
            <p>
                To solve the first order linear differential equation, multiply both sides of the equation by a function of \(x\) say \(g(x)\) to get \[g(x){TeX.dydx()} + P\cdot g(x)\cdot y = Q\cdot g(x)\]
            </p>
            <p>
                Choose \(g(x)\) in such a way that RHS becomes a derivative of \(y\cdot g(x)\) {`\\[
                    \\begin{eqnarray}
                    g(x)\\frac{dy}{dx} + P\\cdot g(x)y &=& \\frac{d}{dx}[y\\cdot g(x)]\\\\
                    g(x)\\frac{dy}{dx} + P\\cdot g(x)y &=& g(x)\\frac{dy}{dx} + y\\cdot g'(x)]\\\\
                    \\implies P\\cdot g(x) &=& g'(x)\\\\
                    P &=& \\frac{g'(x)}{g(x)}\\\\
                    \\implies g(x) &=& e^{\\int Pdx}
                    \\end{eqnarray}
                    \\]`}
            </p>
            <p>
                The function \(g(x) = {TeX.pow('e', '\\int Pdx')}\) is called <em>integrating factor</em> of the given differential equation.
            </p>
            <p>
                Substituting the value of \(g(x)\) in the differential equation, we get {`\\[
                    \\begin{eqnarray}
                    e^{\\int Pdx}\\frac{dy}{dx} + Pe^{\\int Pdx}y &=& Q\\cdot e^{\\int Pdx}\\\\
                    \\frac{d}{dx}\\Big(ye^{\\int Pdx}\\Big) &=& Qe^{\\int Pdx}\\\\
                    y\\cdot e^{\\int Pdx} &=& \\int \\Big(Q\\cdot e^{\\int Pdx}\\Big)dx\\\\
                    y &=& e^{-\\int Pdx}\\cdot \\int \\Big(Q\\cdot e^{\\int Pdx}\\Big) + C
                    \\end{eqnarray}
                    \\]`}
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