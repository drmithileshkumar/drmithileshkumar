
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
        <h1>Integrals</h1>

        <section>
            <table>
                <tr>
                    <td>
                        \(\int\tan xdx = \log|\sec x| + C\)
                    </td>
                    <td>
                        \(\int\cot xdx = \log|\sin x| + C\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(\int\sec xdx = \log|\sec x + \tan x| + C\)
                    </td>
                    <td>
                        \(\int{TeX.cosec} xdx = \log|{TeX.cosec}x - \cot x| + C\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(\int {TeX.dfrac(1, 'x^2-a^2')}dx = {TeX.dfrac(1,'2a')}\log |{TeX.dfrac('x-a', 'x+a')}| + C\)
                    </td>
                    <td>
                        \(\int {TeX.dfrac(1, 'a^2-x^2')}dx = {TeX.dfrac(1,'2a')}\log |{TeX.dfrac('a+x', 'a-x')}| + C\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(\int {TeX.dfrac(1, 'x^2+a^2')}dx = {TeX.dfrac(1,'a')}{TeX.atan}{TeX.dfrac('x', 'a')} + C\)
                    </td>
                    <td>
                        \(\int {TeX.dfrac(1, TeX.sqrt('x^2-a^2'))}dx = \log |x+{TeX.sqrt('x^2-a^2')}| + C\)
                    </td>
                </tr>
                <tr>
                    <td>
                        \(\int {TeX.dfrac(1, TeX.sqrt('a^2-x^2'))}dx = {TeX.asin}{TeX.dfrac('x', 'a')} + C\)
                    </td>
                    <td>
                        \(\int {TeX.dfrac(1, TeX.sqrt('x^2+a^2'))}dx = \log |x+{TeX.sqrt('x^2+a^2')}| + C\)
                    </td>
                </tr>
            </table>
            <ul>
                <li>
                    <strong>Integration by parts:</strong> \(\int uv dx = u\int vdx - \int \Big[u'\int vdx\Big]dx\)
                </li>
                <li>
                    \(\int e^x[f(x) + f'(x)]dx = e^xf(x) + C\)
                </li>
                <li> Some special integrals
                    <ol>
                        <li>
                            \(\int {TeX.sqrt('x^2-a^2')} dx = {TeX.dfrac('x', 2)}{TeX.sqrt('x^2-a^2')} - {TeX.dfrac('a^2', 2)}\log|x + {TeX.sqrt('x^2 - a^2')}| + C\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \(\int {TeX.sqrt('x^2+a^2')} dx = {TeX.dfrac('x', 2)}{TeX.sqrt('x^2+a^2')} + {TeX.dfrac('a^2', 2)}\log|x + {TeX.sqrt('x^2 + a^2')}| + C\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \(\int {TeX.sqrt('a^2-x^2')} dx = {TeX.dfrac('x', 2)}{TeX.sqrt('a^2-x^2')} + {TeX.asin}{TeX.dfrac('x', 'a')} + C\)
                        </li>
                    </ol>
                </li>
            </ul>

        </section>
        
    </article>