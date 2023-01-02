
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
        <h1>Probability</h1>
        <section>
            <ul>
                <li>
                   <strong>Sample space:</strong> The set of all possible outcomes
                </li>
                <li>
                    <strong>Sample points:</strong> Elements of sample space
                </li>
                <li>
                    <strong>Event:</strong> A subset of the sample space
                </li>
                <li>
                    <strong>Impossible event:</strong> The empty set
                </li>
                <li>
                    <strong>Sure event:</strong> The whole sample space
                </li>
                <li>
                    <strong>Complementary event or 'not' event:</strong> The set \(A'\) or \(S-A\)
                </li>
                <li>
                    <strong>Event \(A\) or \(B\):</strong> The set \(A\cup B\)
                </li>
                <li>
                    <strong>Event \(A\) and \(B\):</strong> The set \(A\cap B\)
                </li>
                <li>
                    <strong>Event \(A\) and not \(B\):</strong> The set \(A-B\)
                </li>
                <li>
                    <strong>Mutually exclusive event:</strong> \(A\) and \(B\) are mutually exclusive if \(A\cap B=\phi\)
                </li>
                <li>
                    <strong>Exhaustive and mutually exclusive events:</strong> Events \(E_1, E_2,\dots,E_n\) are mutually exclusive and exhaustive if \(E_1\cup E_2\cup\cdots\cup E_n = S\) and \(\forall i\neq j, E_i\cap E_j = \phi\)
                </li>
                <li>
                    <strong>Probability:</strong> Number \(P(\omega_i)\) associated with sample point \(\omega_i\) such that 
                    <ol>
                        <li>
                            \(0\leq P(\omega_i)\leq 1\)
                        </li>
                        <li>
                            \({TeX.sum('\\omega_i\\in S')}P(\omega_i) = 1\)
                        </li>
                        <li>
                            \(P(A) = {TeX.sum('\\omega_i\\in A')}P(\omega_i)\)
                        </li>
                    </ol>
                    The number \(P(\omega_i)\) is called the <em>probability</em> of the outcome \(\omega_i\).
                </li>
                <li>
                    <strong>Equally likely outcomes:</strong> All outcomes with equal probability
                </li>
                <li>
                    <strong>Probability of an event:</strong> For a finite sample space with equally likely outcomes, Probability of an event \(P(A) = {TeX.dfrac('n(A)', 'n(S)')}\), where \(n(A)\) = number of elements in the set \(A\), \(n(S)\) = number of elements in the set \(S\).
                </li>
                <li>
                    If \(A\) and \(B\) are any two events, then \(P(A~or~B) = P(A) + P(B) - P(A~and~B)\), equivalently, \(P(A\cup B) = P(A) + P(B) - P(A\cap B)\)
                </li>
                <li>
                    If \(A\) and \(B\) are mutually exclusive, then \(P(A\cup B) = P(A) + P(B)\)
                </li>
                <li>
                    If \(A\) is any event, then \(P(not~A) = 1 - P(A)\)
                </li>
            </ul>
        </section>
        
    </article>