
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
        <h1>Limits and derivatives</h1>
        <section>
            <ul>
                <li style="padding-top: 0.5em;">
                   \({TeX.lim('x', 'a')}{TeX.dfrac('x^n - a^n', 'x-a')} = n{TeX.pow('a', 'n-1')}\)
                </li>
                <li style="padding-top: 0.5em;">
                    \({TeX.lim('x',0)}{TeX.dfrac('\\sin x','x')} = 1\)
                </li>
                <li style="padding-top: 0.5em;">
                    \({TeX.lim('x',0)}{TeX.dfrac('1-\\cos x','x')} = 0\)
                </li>
                <li>
                    The derivative of a function \(f\) at \(x\) is defined by \[f'(x) = {TeX.frac('df(x)','dx')} = {TeX.lim('h', 0)}{TeX.frac('f(x + h) - f(x)','h')}\]
                </li>
                <li>
                    For functions \(u\) and \(v\) the following holds:
                    <ol>
                        <li>
                            \((u\pm v)' = u'\pm v'\)
                        </li>
                        <li>
                            \((uv)' = u'v + uv'\)
                        </li>
                        <li>
                            \(\Big({TeX.dfrac('u','v')}\Big )' = {TeX.dfrac("u'v-uv'",'v^2')}\) provided all are defined.
                        </li>
                    </ol>
                </li>
                <li>
                    Following are some of the standard derivatives
                    <ol>
                        <li>
                            \({TeX.dfrac('d','dx')}(x^n) = n{TeX.pow('x', 'n-1')}\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \({TeX.dfrac('d','dx')}(\sin x) = \cos x\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \({TeX.dfrac('d','dx')}(\cos x) = -\sin x\)
                        </li>
                    </ol>
                </li>
            </ul>
        </section>
        
    </article>