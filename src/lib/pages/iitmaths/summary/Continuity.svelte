
<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/iitmaths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import {page, session} from '$app/stores';
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
        <h1>Continuity and Differentiability</h1>

        <section>
            <table>
                <tr>
                    <td>
                        \({TeX.dfrac('d', 'dx')}({TeX.asin}x) = {TeX.dfrac(1, TeX.sqrt('1-x^2'))}\)
                    </td>
                    <td>
                        \({TeX.dfrac('d', 'dx')}({TeX.acos}x) = -{TeX.dfrac(1, TeX.sqrt('1-x^2'))}\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.dfrac('d', 'dx')}({TeX.atan}x) = {TeX.dfrac(1, '1+x^2')}\)
                    </td>
                    <td>
                        \({TeX.dfrac('d', 'dx')}({TeX.acot}x) = -{TeX.dfrac(1, '1+x^2')}\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \({TeX.dfrac('d', 'dx')}({TeX.asec}x) = {TeX.dfrac(1, 'x'+TeX.sqrt('1-x^2'))}\)
                    </td>
                    <td>
                        \({TeX.dfrac('d', 'dx')}({TeX.acosec}x) = -{TeX.dfrac(1, 'x'+TeX.sqrt('1-x^2'))}\)
                    </td>
                </tr>
            </table>
            <ul>
                <li>
                    <strong>Rolle's Theorem:</strong> If \(f:[a,b]\to R\) is continuous on \([a,b]\) and differentiable on \((a, b)\) such that \(f(a) = f(b)\), then there exists some \(c\in (a,b)\) such that \(f'(c) = 0\)
                </li>
                <li>
                    <strong>Mean Value Theorem:</strong> If \(f:[a,b]\to R\) is continuous on \([a,b]\) and differentiable on \((a,b)\), then there exists some \(c\in (a,b)\) such that \[f'(c) = {TeX.frac('f(b) - f(a)', 'b-a')}\] 
                </li>
            </ul>
        </section>
        
    </article>