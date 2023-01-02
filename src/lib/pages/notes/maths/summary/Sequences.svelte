
<script id="MathJax-script">
    // @ts-nocheck
        import {onMount} from 'svelte';
        import {TeX} from '$lib/utils/common/constants';
        onMount(() => {
            MathJax.typeset();
        });
        
        
    </script>
    <style>
        /* .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 600px);
        } */
    </style>
    
    <article>
        <h1>Sequences and series</h1>
        <section>
            <ul>
                <li>
                    Let \(a_1, a_2, a_3, \dots\) be the sequences, then the sum expressed as \(a_1 + a_2 + a_3 + \cdots \) is called <em>series</em>. A series is called <em>finite series</em> if it has got finite number of terms.
                </li>
                <li>
                    An arithmetic progression (A.P.) is a sequence in which terms increase or decrease regularly by the same constant. This constant is called <em>common difference</em> of the A.P. Usually, we denote the first term of A.P. by \(a\), the common difference by \(d\) and the last term by \(l\). The general term or the \(n\)th term of the A.P. is given by \(a_n = a + (n - 1)d\).
                </li>
                <li>
                    The sum \(S_n\) of the first \(n\) terms of A.P. is given by \[S_n = {TeX.frac('n', 2)}[2a + (n-1)d] = {TeX.frac('n', 2)}(a + l)\]
                </li>
                <li>
                    The <em>arithmetic mean</em> \(A\) of any two numbers \(a\) and \(b\) is given by \({TeX.dfrac('a + b', 2)}\), i.e. the sequence \(a, A, b\) is in A.P.
                </li>
                <li>
                    A sequence is said to be a <em>geometric progression</em> or G.P., if the ratio of any term to its preceding term is same throughout. This constant factor is called the <em>common ratio</em>. Usually, we denote the first term of a G.P. by \(a\) and its common ratio by \(r\). The general or the \(n\)th term of G.P. is given by \(a_n = a{TeX.pow('r','n-1')}\).
                </li>
                <li>
                    The sum \(S_n\) of the first \(n\) terms of G.P. is given by \[S_n = {TeX.frac('a(r^n - 1)','r-1')}\] if \(r\neq 1\).
                </li>
                <li>
                    The geometric mean (G) of any two positive numbers \(a\) and \(b\) is given by \({TeX.sqrt('ab')}\), i.e. the sequence \(a, G, b\) is G.P.
                </li>
                <li>
                    \(1 + 2 + 3 + \cdots + n = {TeX.dfrac('n(n + 1)', 2)}\)
                </li>
                <li>
                    \(1 ^2 + 2^2 + 3^2 + \cdots + n^2 = {TeX.dfrac('n(n + 1)(2n + 1)', 6)}\)
                </li>
            </ul>
        </section>
        
    </article>