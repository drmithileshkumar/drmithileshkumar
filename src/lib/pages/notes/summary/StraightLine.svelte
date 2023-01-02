
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
        <h1>Straight Line</h1>
        <section>
            <ul>
                <li>
                    <em>Slope</em> (\(m\)) of a non-vertical line passing through the points \((x_1, y_1)\) and \((x_2, y_2)\) is given by \[m = {TeX.frac('y_2 - y_1','x_2 - x_1')}, x_1\neq x_2\]
                </li>
                <li>
                    If a line makes an angle \(\alpha\) with the positive direction of \(x\)-axis, then the slope of the line is given by \(m = \tan \alpha, \alpha\neq 90^\circ\)
                </li>
                <li>
                    An acute angle (say \(\theta\)) between lines \(L_1\) and \(L_2\) with slopes \(m_1\) and \(m_2\) is given by \[\tan\theta = \Big |{TeX.frac('m_2-m_1', '1 + m_1m2')}\Big |, 1 + m_1m_2\neq 0\]
                </li>
                <li>
                    Equation of a line making intercepts \(a\) and \(b\) on the \(x\)- and \(y\)-axis, respectively, is \[{TeX.frac('x', 'a')} + {TeX.frac('y', 'b')} = 1\]
                </li>
                <li>
                    Equation of the line having normal distance from origin \(p\) and angle between normal and the positive \(x\)-axis \(\omega\) is given by \[x\cos\omega + y\sin\omega = p \]
                </li>
                <li>
                   The perpendicular distance (\(d\)) of a line \(Ax + By + C = 0\) from a point \((x_1, y_1)\) is given by \[d = {TeX.frac('|Ax_1 + By_1 + C|',TeX.sqrt('A^2 + B^2'))}\]
                </li>
                <li>
                    Distance between the parallel lines \(Ax + By + C_1 = 0\) and \(Ax + By + C_2 = 0\), is given by \[d = {TeX.frac('|C_1 - C_2|', TeX.length('A', 'B'))}\]
                </li>
                
            </ul>
        </section>
        
    </article>