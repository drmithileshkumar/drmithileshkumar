
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
        <h1>Matrices</h1>
        <section>
            <ul>
                <li>
                    If \(A = {TeX.mat()}\) and \(B = {TeX.mat('b', 'j', 'k', 'n', 'p')}\), then \(AB = C = {TeX.mat('c', 'i', 'k', 'm', 'p')}\), where \[{TeX.sub('c', 'ik')} = {TeX.sum('j = 1', 'n')}{TeX.sub('a', 'ij')}{TeX.sub('b', 'jk')}\]
                </li>
                <li>
                    \(A\) is a symmetric matrix if \(A^T = A\)
                </li>
                <li>
                    \(A\) is a skew symmetric matrix if \(A^T = -A\)
                </li>
                <li>
                    For any square matrix \(A\) with real number entries, \(A+A^T\) is a symmetric matrix and \(A-A^T\) is a skew symmetric matrix.
                </li>
                <li>
                    Any square matrix can be expressed as the sum of a symmetric and a skew symmetric matrix. \[A = {TeX.frac(1, 2)}(A + A^T) + {TeX.frac(1, 2)}(A - A^T)\]
                </li>
                <li>
                    Elementary operations of a matrix are as follows:
                    <ol>
                        <li>
                            \(R_i\leftrightarrow R_j\) or \(C_i\leftrightarrow C_j\)
                        </li>
                        <li>
                            \(R_i\to kR_i\) or \(C_i\to kC_i\)
                        </li>
                        <li>
                            \(R_i\to R_i + kR_j\) or \(C_i\to C_i + kC_j\)
                        </li>
                    </ol>
                </li>
            </ul>
        </section>
        
    </article>