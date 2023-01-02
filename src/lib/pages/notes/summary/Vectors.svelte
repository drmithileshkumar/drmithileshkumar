
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
        <h1>Vector Algebra</h1>
        <section>
            <ul>
                <li>
                    The scalar components of a vector are its direction ratios, and represent its projections along the respective axes.
                </li>
                <li>
                    The magnitude (\(r\)), direction ratios \((a, b, c)\) and direction cosines \((l, m, n)\) of any vector are related as: \[l={TeX.frac('a', 'r')}, m={TeX.frac('b', 'r')}, n={TeX.frac('c', 'r')}\]
                </li>
                <li>
                    {`\\[
                        \\vec{a}\\times\\vec{b} = \\left |\\begin{matrix}
                        \\hat{i} & \\hat{j} & \\hat{k}\\\\
                        a_1 & b_1 & c_1\\\\
                        a_2 & b_2 & c_2
                        \\end{matrix}\\right |
                        \\]`}
                </li>
            </ul>
        </section>
        <h3>Scalar triple product</h3>
        <section>
            <ul>
                <li>
                    The scalar triple product \({TeX.vec('a')}\cdot({TeX.vec('b')}\times {TeX.vec('c')})\) is the signed volume of the parallelopiped defined by the three vectors \({TeX.vec('a')}, {TeX.vec('b')}\) and \({TeX.vec('c')}\).
                </li>
                <li>
                    {`\\[
                        \\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) = \\left |\\begin{matrix}
                        a_1 & b_1 & c_1\\\\
                        a_2 & b_2 & c_2\\\\
                        a_3 & b_3 & c_3
                        \\end{matrix}\\right | = det([~\\vec{a}~~\\vec{b}~~\\vec{c}~])
                        \\]`}
                </li>
                <li>
                    Cyclic shift of vectors does not change the triple product.
                    {`\\[
                        \\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) = \\vec{b}\\cdot(\\vec{c}\\times\\vec{a}) = \\vec{c}\\cdot(\\vec{a}\\times\\vec{b})
                        \\]`}
                </li>
                <li>
                    {`\\[
                        (\\vec{a}\\cdot(\\vec{b}\\times\\vec{c}))^2 = \\left |\\begin{matrix}
                        \\vec{a}\\cdot\\vec{a} & \\vec{a}\\cdot\\vec{b} & \\vec{a}\\cdot\\vec{c}\\\\
                        \\vec{b}\\cdot\\vec{a} & \\vec{b}\\cdot\\vec{b} & \\vec{b}\\cdot\\vec{c}\\\\
                        \\vec{c}\\cdot\\vec{a} & \\vec{c}\\cdot\\vec{b} & \\vec{c}\\cdot\\vec{c}
                        \\end{matrix}\\right |
                        \\]`}
                </li>
            </ul>
        </section>
        
    </article>