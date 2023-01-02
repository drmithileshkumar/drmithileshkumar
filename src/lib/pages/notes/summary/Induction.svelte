
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
        <h1>Principle of Mathematical Induction</h1>
        <section>
            <ul>
                <li>
                    Suppose there is a given statement \(P(n)\) involving natural number \(n\) such that
                    <ol>
                        <li>
                            The statement is true for \(n = 1\), i.e. \(P(1)\) is true, and
                        </li>
                        <li>
                            If the statement is true for \(n = k\) (where \(k\) is some positive integer), then the statement is also true for \(n = k + 1\), i.e. truth of \(P(k)\) implies the truth of \(P(k + 1)\).
                        </li>
                    </ol>
                    Then, \(P(n)\) is true for all natural numbers \(n\).
                </li>
                
            </ul>
        </section>
        
    </article>