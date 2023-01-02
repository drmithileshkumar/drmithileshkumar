
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
        <h1>Determinants</h1>
        <section>
            <ul>
                <li>
                    \(|A^T| = |A|\)
                </li>
                <li>
                    If we interchange any two rows (or columns), then sign of determinant changes. \[|A(R_i\leftrightarrow R_j)| = - |A|\]
                </li>
                <li>
                    If any two rows or any two columns are identical or propertional, then value of determinant is zero. \[|A(R_i = kR_j)| = 0\]
                </li>
                <li>
                    If we multiply each element of a row or a column of a determinant by constant \(k\), then value of determinant is multiplied by \(k\). \[|A(R_i \to kR_i)| = k|A|\]
                </li>
                <li>
                    Multiplying a determinant by \(k\) means multiplying elements of only one row or one column by \(k\).
                </li>
                <li>
                    If \(A = {TeX.mat('a', 'i', 'j', 3, 3)}\), then \(\vert k\cdot A\vert = k^3\vert A\vert\)
                </li>
                <li>
                    If elements of a row or a column in a determinant can be expressed as sum of two or more elements, then the given determinant can be expressed as sum of two or more determinants (other rows remain the same).
                </li>
                <li>
                    If to each element of a row or a column of a determinant the equimultiples of corresponding elements of other rows or columns are added, then value of determinant remains same. \[|A(R_i\to R_i + kR_j)| = |A|\]
                </li>
                <li>
                    Area of a triangle whose vertices are \((x_1, y_1), (x_2, y_2), (x_3, y_3)\) is equal to \[{TeX.frac(1, 2)}[x_1(y_2-y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)]\] which is equal to {`\\[\\Delta = \\frac{1}{2}
                        \\left | \\begin{matrix}
                        x_1 & y_1 & 1\\\\
                        x_2 & y_2 & 1\\\\
                        x_3 & y_3 & 1
                        \\end{matrix}\\right |
                        \\]`}
                </li>
                <li>
                    Minor of an element \({TeX.sub('a', 'ij')}\) of the determinant of matrix \(A\) is the determinant obtained by deleting \(i\)the row and \(j\)th column and denoted by \({TeX.sub('M', 'ij')}\).
                </li>
                <li>
                    Cofactor of \({TeX.sub('a', 'ij')}\) is given by \({TeX.sub('A', 'ij')} = {TeX.pow('(-1)', 'i + j')}{TeX.sub('M', 'ij')}\) 
                </li>
                <li>
                    For any row \(i\), \(|A| = {TeX.sum('j')}{TeX.sub('a', 'ij')}{TeX.sub('A', 'ij')}\)
                </li>
                <li>
                    For any row \(i\neq k\), \({TeX.sum('j')}{TeX.sub('a', 'ij')}{TeX.sub('A', 'kj')} = 0\)
                </li>
                <li>
                    The adjoint of a matrix \(A\) is the matrix of cofactors of \(A\), i.e. \[{TeX.sub('adj(A)', 'ij')} = {TeX.sub('A', 'ij')}\]
                </li>
                <li>
                    \({TeX.pow('A')} = {TeX.dfrac(1, '|A|')}adj(A)\)
                </li>
                <li>
                    A square matrix \(A\) is said to be singular or non-singular according as \(|A| = 0\) or \(|A|\neq 0\)
                </li>
                <li>
                    Unique solution of equation \(AX = B\) is given by \(X = {TeX.pow('A')}B\), where \(|A| \neq 0\)
                </li>
                <li>
                    A system of equation is consistent or inconsistent according as its solution exists or not.
                </li>
                <li>
                    For a square matrix \(A\) in matrix equation \(AX = B\)
                    <ol>
                        <li>
                            \(|A|\neq 0\), there exists unique solution
                        </li>
                        <li>
                            \(|A| = 0\) and \(adj(A) B\neq 0\), then there exists no solution. 
                        </li>
                        <li>
                            \(|A| = 0\) and \(adj(A) B = 0\), then system may or may not be consistent.
                        </li>
                    </ol>
                </li>
            </ul>
        </section>
        
    </article>