
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
        <h1>Trigonometric functions</h1>
        <section>
            <ul>
                <li>
                    If in a circle of radius \(r\), an arc of length \(l\) subtends an angle of \(\theta\) radians, then \(l = r\theta\)
                </li>
                <li>
                    Radian measure = \({TeX.dfrac('\\pi', 180)}\times\) Degree measure
                </li>
                <br>
                <li>
                    Degree measure = \({TeX.dfrac(180, '\\pi')}\times\) Radian measure
                </li>
                <li>
                    \(\cos^2x + \sin^2x = 1\)
                </li>
                <li>
                    \(1 + \tan^2x = \sec^2x\)
                </li>
                <li>
                    \(\cot^2x + 1 = {TeX.text('cosec')}^2x\)
                </li>
                <li>
                    \(\cos(2n\pi + x) = \cos x\)
                </li>
                <li>
                    \(\sin(2n\pi + x) = \sin x\)
                </li>
                <li>
                    \(\sin(-x) = -\sin x\)
                </li>
                <li>
                    \(\cos(-x) = \cos x\)
                </li>
                <li>
                    \(\cos({TeX.dfrac('\\pi', 2)} -x) = \sin x\)
                </li>
                <br>
                <li>
                    \(\sin({TeX.dfrac('\\pi', 2)} -x) = \cos x\)
                </li>
                <li>
                    \(cos(x + y) = \cos x \cos y - \sin x \sin y\)
                </li>
                <li>
                    \(cos(x - y) = \cos x \cos y + \sin x \sin y\)
                </li>
                <li>
                    \(sin(x + y) = \sin x \cos y + \cos x \sin y\)
                </li>
                <li>
                    \(sin(x - y) = \sin x \cos y - \cos x \sin y\)
                </li>
                <li style="display: flex;">
                    <table>
                        <tr>
                            <td>
                                {`\\[
                                    \\begin{aligned}
                                    \\cos(\\frac{\\pi}{2} + x) &= -\\sin x\\\\
                                    \\cos(\\pi - x) &= -\\cos x\\\\
                                    \\cos(\\pi + x) &= \\cos x\\\\
                                    \\cos(2\\pi - x) &= \\cos x
                                    \\end{aligned}
                                    \\]`}
                            </td>
                            <td>
                                {`\\[
                                    \\begin{aligned}
                                    \\sin(\\frac{\\pi}{2} + x) &= \\cos x\\\\
                                    \\sin(\\pi - x) &= \\sin x\\\\
                                    \\sin(\\pi + x) &= -\\sin x\\\\
                                    \\sin(2\\pi - x) &= -\\sin x
                                    \\end{aligned}
                                    \\]`}
                            </td>
                        </tr>
                    </table>
                </li>
                <li>
                    If none of the angles \(x,y\) and \((x\pm y)\) is an odd multiple of \({TeX.dfrac('\\pi','2')}\), then \[\tan(x + y) = {TeX.frac('\\tan x + \\tan y','1 - \\tan x \\tan y')}\]
                </li>
                <li>
                    If none of the angles \(x,y\) and \((x\pm y)\) is an odd multiple of \(\pi\), then \[\cot(x + y) = {TeX.frac('\\cot x \\cot y - 1', '\\cot x + \\cot y')}\]
                </li>
                <li>
                    \(\cos 2x = \cos^2x - \sin^2x = 2\cos^2x - 1 = 1 - 2\sin^2x = {TeX.dfrac('1-\\tan^2x','1+\\tan^2x')}\)
                </li>
                <li>
                    \(\sin 2x = 2\sin x \cos x = {TeX.dfrac('2\\tan x','1 + \\tan^2x')}\)
                </li>
                <li>
                   \(\tan 2x = {TeX.dfrac('2\\tan x','1 - \\tan^2x')}\)
                </li>
                <li>
                    \(\sin 3x = 3\sin x - 4\sin^3x\)
                </li>
                <li>
                    \(\cos 3x = 4\cos^3x - 3\cos x\)
                </li>
                <li>
                    \(\tan 3x = {TeX.dfrac('3\\tan x - \\tan^3x','1 - 3\\tan^2x')}\)
                </li>
                <li>
                    <ol>
                        <li style="padding-top: 0.5em;">
                            \(\cos x + \cos y = 2\cos {TeX.dfrac('x + y','2')} \cos{TeX.dfrac('x-y', '2')}\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \(\cos x - \cos y = -2\sin {TeX.dfrac('x + y','2')} \sin{TeX.dfrac('x-y', '2')}\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \(\sin x + \sin y = 2\sin {TeX.dfrac('x + y','2')} \cos{TeX.dfrac('x-y', '2')}\)
                        </li>
                        <li style="padding-top: 0.5em;">
                            \(\sin x - \sin y = 2\cos {TeX.dfrac('x + y','2')} \sin{TeX.dfrac('x-y', '2')}\)
                        </li>
                    </ol>
                </li>
                <li>
                    <ol>
                        <li>
                            \(2\cos x \cos y = \cos(x + y) + \cos(x-y)\)
                        </li>
                        <li>
                            \(-2\sin x \sin y = \cos(x + y) - \cos(x -y)\)
                        </li>
                        <li>
                            \(2\sin x \cos y = \sin(x + y) + \sin(x - y)\)
                        </li>
                        <li>
                            \(2\cos x \sin y = \sin(x + y) - \sin(x - y)\)
                        </li>
                    </ol>
                </li>
                <li>
                    \(\sin x = 0\) gives \(x = n\pi\), where \(n{TeX.inZ}\)
                </li>
                <li>
                    \(\cos x = 0\) gives \(x = (2n + 1){TeX.dfrac('\\pi', '2')}\), where \(n{TeX.inZ}\)
                </li>
                <li>
                    \(\sin x = \sin y\) implies \(x = n\pi + (-1)^n y\), where \(n{TeX.inZ}\)
                </li>
                <li>
                    \(\cos x = \cos y\) implies \(x = 2n\pi \pm y\), where \(n{TeX.inZ}\)
                </li>
                <li>
                    \(\tan x = \tan y\) implies \(x = n\pi + y\), where \(n{TeX.inZ}\)
                </li>
            </ul>
        </section>
    </article>