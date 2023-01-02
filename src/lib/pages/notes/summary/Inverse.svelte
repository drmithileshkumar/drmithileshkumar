
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
        <h1>Inverse Trigonometric functions</h1>
        <section>
            <table>
                <thead>
                    <th>Functions</th>
                    <th>Domain</th>
                    <th>Range (Principal Value Branches)</th>
                </thead>
                <tr>
                    <td>
                        \(y = {TeX.asin} x\)
                    </td>
                    <td>
                        \([-1, 1]\)
                    </td>
                    <td>
                        \([{TeX.frac('-\\pi', 2)}, {TeX.frac('\\pi', 2)}]\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(y = {TeX.acos} x\)
                    </td>
                    <td>
                        \([-1, 1]\)
                    </td>
                    <td>
                        \([0, \pi]\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(y = {TeX.atan} x\)
                    </td>
                    <td>
                        {TeX.R}
                    </td>
                    <td>
                        \([{TeX.frac('-\\pi', 2)}, {TeX.frac('\\pi', 2)}]\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(y = {TeX.acot} x\)
                    </td>
                    <td>
                        {TeX.R}
                    </td>
                    <td>
                        \([0, \pi]\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(y = {TeX.asec} x\)
                    </td>
                    <td>
                        {TeX.R}\(-(-1,1)\)
                    </td>
                    <td>
                        \([0, \pi] - {TeX.Set(TeX.piby2)}\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(y = {TeX.acosec} x\)
                    </td>
                    <td>
                        {TeX.R}\(-(-1,1)\)
                    </td>
                    <td>
                        \([{TeX.mpiby2}, {TeX.piby2}] - {TeX.Set(0)}\)
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>
                        \(y = {TeX.asin}x\implies x = \sin y\)
                    </td>
                    <td>
                        \(x = \sin y\implies y = {TeX.asin} x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(\sin ({TeX.asin}x) = x\)
                    </td>
                    <td>
                        \({TeX.asin} (\sin x) = x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.asin}{TeX.dfrac(1, 'x')} = {TeX.acosec}x\)
                    </td>
                    <td>
                        \({TeX.acos}(-x) = \pi - {TeX.acos}x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.acos}{TeX.dfrac(1, 'x')} = {TeX.asec}x\)
                    </td>
                    <td>
                        \({TeX.asec}(-x) = \pi - {TeX.asec}x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.atan}{TeX.dfrac(1, 'x')} = {TeX.acot}x\)
                    </td>
                    <td>
                        \({TeX.acot}(-x) = \pi - {TeX.acot}x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.asin}(-x) = -{TeX.asin}x\)
                    </td>
                    <td>
                        \({TeX.atan}(-x) = -{TeX.atan}x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.atan}x + {TeX.acot}x = {TeX.piby2}\)
                    </td>
                    <td>
                        \({TeX.acosec}(-x) = -{TeX.acosec}x\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.asin}x + {TeX.acos}x = {TeX.piby2}\)
                    </td>
                    <td>
                        \({TeX.acosec}x + {TeX.asec}x = {TeX.piby2}\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.atan}x + {TeX.atan}y = {TeX.atan}{TeX.dfrac('x + y','1-xy')} \)
                    </td>
                    <td>
                        \(2{TeX.atan}x = {TeX.atan}{TeX.dfrac('2x', '1-x^2')}\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.atan}x - {TeX.atan}y = {TeX.atan}{TeX.dfrac('x - y','1+xy')} \)
                    </td>
                    <td>
                        \(2{TeX.atan}x = {TeX.asin}{TeX.dfrac('2x', '1+x^2')} = {TeX.acos}{TeX.dfrac('1-x^2', '1+x^2')}\)
                    </td>
                </tr>
            </table>
        </section>
    </article>