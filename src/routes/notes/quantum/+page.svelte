<script id="MathJax-script">
    // @ts-nocheck
    import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
    import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
    import Practice from '$lib/utils/practiceproblem/Practice.svelte';
    import Message from '$lib/ui/Message.svelte';
    import {Point2D} from '$lib/utils/common/point2d';
    import {randNum, randInt} from '$lib/utils/common/common';
    import {Sets} from '$lib/utils/common/sets';
    import {Quadratic} from '$lib/utils/common/quadratic';
    import {page} from '$app/stores';
    import {TeX} from '$lib/utils/common/constants';
    import {onMount} from 'svelte';
    import P from '$lib/presentation/P.svelte';
    import Div from '$lib/presentation/Div.svelte';
    import H1 from '$lib/presentation/H1.svelte';
    import H2 from '$lib/presentation/H2.svelte';
    import H3 from '$lib/presentation/H3.svelte';
    import Li from '$lib/presentation/Li.svelte';
    import Item from '$lib/presentation/Item.svelte';
	import Image from '$lib/presentation/Image.svelte';
        onMount(() => {
            $selectedChapter = 'Sets';
            $selectedSection = 'Sets and their representations';
            $slideCounter = 39;
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
            let N = 5;
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
                case 4: {
                    let q = new Quadratic(0, 0, 0, 'n');
                    q.rand(-3, 3);
                    let q1 = new Quadratic(0, 0, 0, 'n');
                    q1.rand(-3, 3);
                    let q2 = new Quadratic(0, 0, 0, 'n');
                    q2.rand(-3, 3);
                    let q3 = new Quadratic(0, 0, 0, 'n');
                    q3.rand(-3, 3);
                    let seq = [q.value(1), q.value(2), q.value(3), q.value(4), q.value(5)];
                    let set = new Sets(seq);
                    values[0] = q.str();
                    values[1] = q1.str();
                    values[2] = q2.str();
                    values[3] = q3.str();

                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = '\\(\\{x: x = ' + values[i] + ', n~\\)' + ' is a natural number and ' + '\\(~1\\leq n\\leq 5\\}\\)';
                    } 
                    problemset.s = `Which of the following is correct set-builder form of the set \\[${set.str()}\\]`;
                    break;
                }
            }
            problemset = problemset;
            return problemset;
        }
    </script>
    
    <svelte:head>
        <title>Quantum Teleportation</title>
        <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
        <meta name="description" content='Quantum Teleportation' />
        
    </svelte:head>
    <article class:absolute={$presentationMode} bind:this={$presentation}>
        {#if $presentationMode && $currentSlide === -2}
            <div class="thumbnail">
                <h3>Quantum Teleportation</h3>
                <img class="statement" width="100%" src="/notes/quantum/teleportation.svg" alt="" style="color:white;">
                
            </div>
        {/if}
        {#if !$presentationMode || $currentSlide >= -1}
            <h1>Quantum Teleportation</h1>
        {/if}
        <Item item={0}>
            <ol>
                <li>
                    Quantum bits
                </li>
                <li>
                    Measurement
                </li>
                <li>
                    Quantum gates
                </li>
                <li>
                    Entanglement
                </li>
                <li>
                    Quantum teleportation
                </li>
            </ol>
        </Item>
        <section>
            <Item item={1}>
                <H2 isActive={1}>
                    Quantum bits
                </H2>
            </Item>
            <Item item={2}>
                <P isActive={2}>
                    A quantum bit or qubit is a physical system whose state space is determined by unit vectors in a two dimensional Hilbert Space. We choose to denote the basis vectors by unit vectors \(|0\rangle\) and \(|1\rangle\). The symbols 0 and 1 are deliberately chosen to correspond to 0 and 1 values of a classical bit. In general, the state of a qubit can be expressed as \[|\psi\rangle = \alpha|0\rangle + \beta|1\rangle\] where \(\alpha, \beta\in {TeX.bbC}\) such that \[|\alpha|^2 + |\beta|^2 = 1\]
                </P>
            </Item>
            <Item item={3}>
                <Image isActive={3}>
                    <img src="/notes/quantum/qubit2d.svg" alt="">
                </Image>
            </Item>
            <Item item={4}>
                <P isActive={4}>
                    We can represent a qubit state by column vector {`\\[|0\\rangle \\equiv \\begin{bmatrix}1 \\\\ 0 \\end{bmatrix}\\quad |1\\rangle \\equiv \\begin{bmatrix}0 \\\\ 1 \\end{bmatrix}\\]`}
                    Then, a general qubit state becomes {`\\[|\\psi\\rangle\\equiv\\begin{bmatrix}\\alpha \\\\ \\beta \\end{bmatrix}\\]`}
                </P>
            </Item>
            <Item item={5}>
                <P isActive={5}>
                    The basis states of multiple qubits is given by the tensor product of basis states of individual qubits.
                </P>
            </Item>
            <Item item={6}>
                <P isActive={6}>
                    The general state of a two-qubit system is written as \[|\psi\rangle = \alpha_{'{00}'}|00\rangle + \alpha_{'{01}'}|01\rangle + \alpha_{'{10}'}|10\rangle + \alpha_{'{11}'}|11\rangle \] where \(\alpha_x\in {TeX.bbC}, \sum_x |\alpha_x|^2 = 1, x\in {'\\{0, 1\\}'}^2\) 
                </P>
            </Item>
        </section>
        <section>
            <Item item={7}>
                <H2 isActive={7}>
                    Measurement
                </H2>
            </Item>
            <Item item={8}>
                <P isActive={8}>
                    Even though the qubit has advantage of having infinitely-many possible states, we can only observe it in two possible states. These observed states depend on the type of measurement we are performing on the qubit.
                </P>
            </Item>
            <Item item={9}>
                <P isActive={9}>
                    Suppose that a qubit is prepared in the state \(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle\). In the simplest case, when we perform a measurement or observe the qubit, the state of the qubit changes to either \(|0\rangle\) or \(|1\rangle\) with probability \(|\alpha|^2\) or \(|\beta|^2\), respectively.
                </P>
            </Item>
            <Item item={10}>
                <P isActive={10}>
                    In case of multi-qubit system, any subset of qubits may be chosen to be measured. The measured qubits collapse to an eigen state while unobserved qubits may remain in superposed state. The resulting state may need to be renormalized.
                </P>
            </Item>
            <Item item={11}>
                <P isActive={11}>
                    For example, for two-qubit system in state \(|\psi\rangle = \alpha_{'{00}'}|00\rangle + \alpha_{'{01}'}|01\rangle + \alpha_{'{10}'}|10\rangle + \alpha_{'{11}'}|11\rangle \), consider that the first qubit is measured and it collapses to state \(|0\rangle\). Then the resulting state of the system will be {`\\[|\\phi\\rangle = |0\\rangle\\frac{\\alpha_{00}|0\\rangle + \\alpha_{01}|1\\rangle}{\\sqrt{|\\alpha_{00}|^2 + |\\alpha_{01}|^2}}\\]`}
                </P>
            </Item>
        </section>
        <section>
            <Item item={12}>
                <H2 isActive={12}>
                    Quantum Gates
                </H2>
            </Item>
            <Item item={13}>
                <P isActive={13}>
                    Probability conservation implies that quantum systems can only undergo unitary evolution. That is, any operation to change the state (apart from measurement) must correspond to a unitary matrix. A matrix \(U\) is unitary if \[U^\dagger U = I\]
                </P>
            </Item>
            <Item item={13}>
                <P isActive={13}>
                    In addition, unitary operations must act <em>linearly</em> on the state, i.e. \[U(\alpha|0\rangle + \beta|1\rangle) = \alpha U|0\rangle + \beta U|1\rangle\]
                </P>
            </Item>
            <Item item={14}>
                <P isActive={14}>
                    Borrowing the terminalogy from classical computation, we call these operations unitary gates. These gates are generally represented by matrices. For a qubit, these are \(2\times 2\) unitary matrices. Let us consider a few special cases of unitary gates.
                </P>
            </Item>
            <Item item={15}>
                <H3 isActive={15}>
                    Quantum NOT gate
                </H3>
            </Item>
            <Item item={16}>
                <P isActive={16}>
                    A NOT gate flips 0 to 1 and 1 to 0. A quantum NOT gate would change \(\alpha|0\rangle + \beta|1\rangle\) to \(\alpha|1\rangle + \beta|0\rangle\). The NOT gate can be represented by {`\\[X\\equiv\\begin{bmatrix}
                    0 & 1\\\\
                    1 & 0
                    \\end{bmatrix}\\]`}
                </P>
            </Item>
            <Item item={17}>
                <H3 isActive={17}>
                    Z gate
                </H3>
            </Item>
            <Item item={18}>
                <P isActive={18}>
                    A Z gate leaves \(|0\rangle\) unchanged, but flips the sign of \(|1\rangle\) to \(-|1\rangle\). It is represented by {`\\[Z\\equiv\\begin{bmatrix}
                    1 & 0\\\\
                    0 & -1
                    \\end{bmatrix}\\]`}
                </P>
            </Item>
            <Item item={19}>
                <H3 isActive={19}>
                    Quantum Hadamard gate
                </H3>
            </Item>
            <Item item={20}>
                <P isActive={20}>
                    The power of quantum computing derives from the superposition state where all possible outcomes can be encoded into a single quantum state. The quantum gate that does that is known as <em>Hadamard gate</em>. It is represented by the letter \(H\) and defined as 
                     {`\\[H\\equiv\\frac{1}{\\sqrt{2}}\\begin{bmatrix}
                    1 & 1\\\\
                    1 & -1
                    \\end{bmatrix}\\]`}
                    When we apply \(H\) gate on a qubit in state \(|0\rangle\), we get {`\\[H|0\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}\\]`} which is a state of <em>equal</em> superposition.
                </P>
            </Item>
            <Item item={21}>
                <H3 isActive={21}>
                    Controlled-NOT gate
                </H3>
            </Item>
            <Item item={22}>
                <Div isActive={22}>
                    Contolled-NOT gate is a two-qubit gate, i.e. this operation requires two qubits. One of the qubit plays the role of <em>control</em>, while the other qubit is <em>target</em> of the NOT gate. That is, one qubit <em>acts</em> as a switch for NOT gate. CNOT gate is defined as 
                    <table>
                        <tr>
                            <td>
                                {`\\[U_{CN}\\equiv\\begin{bmatrix}
                                1 & 0 & 0 & 0\\\\
                                0 & 1 & 0 & 0\\\\
                                0 & 0 & 0 & 1\\\\
                                0 & 0 & 1 & 0
                                \\end{bmatrix}\\]`}
                            </td>
                            <td>
                                <img width="200px" src="/notes/quantum/CNOT.svg" alt="">
                            </td>
                        </tr>
                    </table>
                     
                    The action of CNOT gate on basis states is {`\\[
                            \\begin{eqnarray}
                            CNOT|00\\rangle &=& |00\\rangle\\\\
                            CNOT|01\\rangle &=& |01\\rangle\\\\
                            CNOT|10\\rangle &=& |11\\rangle\\\\
                            CNOT|11\\rangle &=& |10\\rangle\\\\
                            \\end{eqnarray}
                        \\]`}
                </Div>

            </Item>
            <Item item={23}>
                <P isActive={23}>
                    <em>Any multiple qubit logic gate may be composed from CNOT and single qubit gates.</em> 
                </P>
            </Item>
        </section>
        <section>
            <Item item={24}>
                <H2 isActive={24}>
                    Entanglement
                </H2>
            </Item>
            <Item item={25}>
                <P isActive={25}>
                    Entanglement is the result of special type of superposition of states of more than one qubits.
                </P>
            </Item>
            <Item item={26}>
                <P isActive={26}>
                    Consider the state of a two qubit system {`\\[|\\psi\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\]`} If one measures the 1st qubit, and say this collapses the state of the 1st qubit to \(|0\rangle\), then the resulting state of the system will be \(|00\rangle\). Likewise if the 1st qubit's state were \(|1\rangle\), the state of the system would be \(|11\rangle\). <em>What's so special in this, you would say?</em>
                </P>
            </Item>
            <Item item={27}>
                <P isActive={27}>
                    The key here is that the measurement on one qubit also collapsed the state of the other qubit to a <em>basis state</em>. If the state of the system were {`\\[|\\psi\\rangle = \\frac{|00\\rangle + |11\\rangle + |01\\rangle + |11\\rangle}{2} \\]`}, the measurement of one qubit will not collapse the state of the other qubit to a basis state.
                </P>
            </Item>
            <Item item={28}>
                <P isActive={28}>
                    The states of the 1st kind are called <em>entangled states</em>. There are studies into <em>degrees</em> of entanglement, i.e. entanglement is treated as a resource. {`\\[|\\psi\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\]`} is <em>maximally</em> entangled.
                </P>
            </Item>
        </section>
        <section>
            <Item item={29}>
                <H2 isActive={29}>
                    Quantum teleportation
                </H2>
            </Item>
            <Item item={30}>
                <P isActive={30}>
                    Now we have all the necessary ingredients to talk about quantum teleportation. By teleportation, the common notion is that an object disappears from one location and appears at another location.
                </P>
            </Item>
            <Item item={31}>
                <P isActive={31}>
                    In quantum teleportation, a quantum state <em>disappears</em> from one qubit and <em>appears</em> into another qubit. It is usually formulated as an Alice-Bob protocol.
                </P>
            </Item>
            <Item item={32}>
                <P isActive={32}>
                    Alice has a qubit in some state \(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle\). She needs to send this information to Bob who can only receive classical bits as information, i.e. she can not simply deliver the qubit to Bob. But, Alice and Bob share an entangled pair of qubits. That is, Alice has a qubit and Bob has another qubit. These qubits are in the quantum state {`\\[|\\Psi\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}\\]`}
                </P>
            </Item>
            <Item item={33}>
                <P isActive={33}>
                    At the cost of this entanglement and two classical bits of communication, Alice can <em>teleport</em> the quantum state \(|\psi\rangle\) to Bob. Next, I'll describe the protocol or algorithm that both Alice and Bob need to execute for this. It is best explained via the following quantum circuit.
                </P>
            </Item>
            <Item item={34}>
                <Image isActive={34}>
                    <img style="width:80vw;" src="/notes/quantum/teleportation.svg" alt="">
                </Image>
            </Item>
            <ol>
                <Item item={35}>
                    <Li isActive={35}>
                        {`\\[
                            \\begin{eqnarray}
                            |\\psi_0\\rangle &=& |\\psi\\rangle|\\Psi\\rangle\\\\
                                             &=& \\frac{1}{\\sqrt{2}}\\Big[\\alpha |0\\rangle(|00\\rangle + |11\\rangle) + \\beta |1\\rangle(|00\\rangle + |11\\rangle)\\Big]
                            \\end{eqnarray}
                            \\]`}
                    </Li>
                </Item>
                <Item item={36}>
                    <Li isActive={36}>
                        {`\\[
                            \\begin{eqnarray}
                            |\\psi_1\\rangle &=& \\frac{1}{\\sqrt{2}}\\Big[\\alpha |0\\rangle(|00\\rangle + |11\\rangle) + \\beta |1\\rangle(|10\\rangle + |01\\rangle)\\Big]
                            \\end{eqnarray}
                            \\]`}
                    </Li>
                </Item>
                <Item item={37}>
                    <Li isActive={37}>
                        {`\\[
                            \\begin{eqnarray}
                            |\\psi_1\\rangle &=& \\frac{1}{2}\\Big[\\alpha (|0\\rangle + |1\\rangle)(|00\\rangle + |11\\rangle) + \\beta (|0\\rangle - |1\\rangle)(|10\\rangle + |01\\rangle)\\Big]\\\\
                            &=& \\frac{1}{2}\\Big[|00\\rangle(\\alpha |0\\rangle + \\beta|1\\rangle) + |01\\rangle(\\alpha|1\\rangle + \\beta|0\\rangle)\\\\
                            &\\quad~& ~+|10\\rangle(\\alpha |0\\rangle - \\beta|1\\rangle) + |11\\rangle(\\alpha|1\\rangle - \\beta|0\\rangle)\\Big]
                            \\end{eqnarray}
                            \\]`}
                    </Li>
                </Item>
                <Item item={38}>
                    <Li isActive={38}>
                        {`\\[
                            \\begin{eqnarray}
                                00 &\\implies & (Z^0X^0)[\\alpha |0\\rangle + \\beta|1\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle\\\\
                                01 &\\implies & (Z^0X^1)[\\alpha |1\\rangle + \\beta|0\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle\\\\
                                10 &\\implies & (Z^1X^0)[\\alpha |0\\rangle - \\beta|1\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle\\\\
                                11 &\\implies & (Z^1X^1)[\\alpha |1\\rangle - \\beta|0\\rangle] = \\alpha |0\\rangle + \\beta|1\\rangle
                            \\end{eqnarray}
                            \\]`}
                    </Li>
                </Item>
            </ol>
        </section>
        <!-- <Item item={39}>
            <section>
                <h2>Practice</h2>
                <Practice {generateProblem}/>
            </section>
        </Item> -->
        
        {#if $presentationMode && $currentSlide >= 2}
            <div class="pad"></div>
        {/if}
    </article>
    <style>
        /* p {
            text-indent: 2em;
        } */
        /* .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 600px);
        } */
        article {
            position: relative;
            padding: 0.5em;
            /* in: all 1s; */
        }
        /* aside {
            background-color: rgb(230, 228, 228);
            cursor: pointer;
            width: 1em;
        } */
        .absolute {
            margin: auto;
            /* width: 90vw; */
            width: 100%;
            height: 90vh;
            /* height: min(78vh, 60vw); */
            /* height: min(70vh,600px); */
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 0 1em 0 1em;
        }
        .absolute::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
        .pad {
            min-height: 150px;
        } 
        /*  
        figure {
            
            width: 300px;
        } */
       
        .thumbnail {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 2.5em;
            height: 100%;
            
        }
        .statement {
            background: radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));
            color: rgb(246, 246, 246);
            text-shadow: 1px 1px 3px rgb(4, 4, 4);
            box-shadow: 1px 1px 3px rgb(129, 128, 128);
            padding: 1em;
        }
    </style>