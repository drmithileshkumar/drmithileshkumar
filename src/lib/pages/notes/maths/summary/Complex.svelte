
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
        <h1>Complex numbers and quadratic equations</h1>
        <section>
            <ul>
                <li>
                    A number of the form \(a + ib\), where \(a\) and \(b\) are real numbers, is called a <em>complex number</em>, \(a\) is called the <em>real part</em> and \(b\) is called the <em>imaginary part</em> of the complex number.
                </li>
                <li>
                    Let \(z_1 = a + ib\) and \(z_2 = c + id\). Then
                    <ol>
                        <li>
                            \(z_1 + z_2 = (a + c) + i (b + d)\)
                        </li>
                        <li>
                            \(z_1z_2 = (ac-bd) + i(ad + bc)\)
                        </li>
                    </ol>
                </li>
                <li>
                    For any non-zero complex number \(z = a + ib (a\neq 0, b\neq 0)\), there exists the complex number \({TeX.dfrac('a', 'a^2 + b^2')} + i{TeX.dfrac('-b','a^2 + b^2')}\), denoted by \({TeX.dfrac(1, 'z')}\) or \({TeX.pow('z', -1)}\), called the <em>multiplicative inverse</em> of \(z\).
                </li>
                <li>
                    For any integer \(k\), \({TeX.pow('i', '4k')} = 1, {TeX.pow('i', '4k + 1')} = i, {TeX.pow('i', '4k + 2')} = -1, {TeX.pow('i', '4k + 3')} = -i\)
                </li>
                <li>
                    The conjugate of the complex number \(z = a + ib\), denoted by \({TeX.bar('z')}\), is given by \({TeX.bar('z')} = a - ib\).
                </li>
                <li>
                    The polar form of the complex number \(z = x + iy\) is \(r(\cos\theta + i\sin\theta)\), where \(r = {TeX.length('x', 'y')}\) (the modulus of \(z\)) and \(\cos\theta = {TeX.dfrac('x', 'r')}, \sin\theta = {TeX.dfrac('y', 'r')}\). \(\theta\) is known as the argument of \(z\). The value of \(\theta\), such that \(-\pi {TeX.less} \theta \leq \pi\), is called the <em>principal argument</em> of \(z\).
                </li>
                <li>
                    A polynomial of equation of \(n\) degree has \(n\) roots.
                </li>
                <li>
                    The solutions of the quadratic equation \(ax^2 + bx + c = 0\), where \(a, b, c{TeX.inR}\), \(a\neq 0, b^2 - 4ac{TeX.less} 0\), are given by \(x = {TeX.dfrac(`-b\\pm` + '   i'+ TeX.sqrt('4ac-b^2'), '2a')}\)
                </li>
            </ul>
        </section>
        
    </article>