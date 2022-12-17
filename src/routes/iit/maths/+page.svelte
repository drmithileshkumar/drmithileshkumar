<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://drmithileshkumar.com/iit/maths`
            }
        }
        return {
            props: {

            }
        }
    }
</script>
<script id="MathJax-script">
// @ts-nocheck
    import Message from '$lib/ui/Message.svelte';
    import Link from '$lib/ui/Link.svelte';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import {TeX} from '$lib/utils/common/constants';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    a {
        text-decoration: none;
    }
    .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        flex-wrap: wrap;
    }
</style>
<svelte:head>
    <title>Mathematics Questions</title>
    <link rel="canonical" href="https://drmithileshkumar.com/iit/maths" />
    <meta name="description" content="Learn and practice Mathematics for school, IIT JEE, Olympiad" />
</svelte:head>
<article>
    <h1 style="margin-bottom:0;">Practice Problems in Mathematics</h1>
    <h2 style="font-size: 1.2em; font-weight: 400;color: #888; margin-top:0;">Suitable for Class XI, XII and IIT JEE and other examinations.</h2>
    <!-- <Message>
        <p>Students around <strong>Dharamshala, HP</strong> can contact at 8235463666 or 8797081308 for <em>offline</em> classes. </p>
        <p>
            Students can join at any time as teaching is personalized according to understading of the student.
        </p>
    </Message> -->
    <div class="problemlist">
        <h3>Question 1 [JEE adv, 2021]</h3>
        <a href={'/iit/maths/question1'}>
            <p>
                Let \({TeX.vec('u')}, {TeX.vec('v')}\) and \({TeX.vec('w')}\) be vectors in three-dimensional space, where \({TeX.vec('u')}\) and \({TeX.vec('v')}\) are unit vectors which are not perpendicular to each other and \[{TeX.vec('u')}\cdot {TeX.vec('w')} = 1,\quad {TeX.vec('v')}\cdot {TeX.vec('w')} = 1\quad {TeX.vec('w')}\cdot {TeX.vec('w')} = 4\]
                If the volume of the parallelopiped, whose adjacent sides are represented by the vectors \({TeX.vec('u')}, {TeX.vec('v')}\) and \({TeX.vec('w')}\), is \({TeX.sqrt('2')}\), then the value of \(|3{TeX.vec('u')} + 5{TeX.vec('v')}|\) is ______.
            </p>
        </a>
        <h3>Question 2 [JEE adv, 2021]</h3>
        <a href={'/iit/maths/question2'}>
            <p>
                In a triangle ABC, let \(AB = {TeX.sqrt('23')}\), and \(BC = 3\) and \(CA = 4\). Then the value of \({TeX.dfrac('\\cot A + \\cot C', '\\cot B')}\) is ______.
            </p>
        </a>
        <h3>Question 3 [JEE adv, 2021]</h3>
        <a href={'/iit/maths/question3'}>
            <p>
                For \(x{TeX.inR}\), thi number of real roots of the equation \(3x^2-4|x^2 - 1| + x - 1 = 0\) is ______.
            </p>
        </a>
        <h3>Question 4 [JEE adv, 2021]</h3>
        <a href={'/iit/maths/question4'}>
            <p>
                For any complex number \(w = c + id\), let \(arg(w)\in (-\pi,\pi]\), where \(i={TeX.sqrt('-1')}\). Let \(\alpha\) and \(\beta\) be real numbers such that for all complex numbers \(z = x + iy\) satisfying \(arg\Big[{TeX.dfrac('z + \\alpha','z + \\beta')}\Big]={TeX.dfrac('\\pi','4')}\), the ordered pair \((x, y)\) lies on the circle \(x^2 + y^2 + 5x - 3y + 4 = 0\). Then, which of the following statements is (are) <strong>True</strong>?
            </p>
            <ol class="options">
                <li> {`\\(\\alpha = -1\\)`} </li>
                <li> {`\\(\\alpha\\beta = 4\\)`} </li>
                <li> {`\\(\\alpha\\beta = -4\\)`} </li>
                <li> {`\\(\\beta = 4\\)`} </li>
            </ol>
        </a>
        <h3>Question 5 [JEE adv, 2021]</h3>
        <a href={'/iit/maths/question5'}>
            <p>
                For any positive integer \(n\), let \(S_n : (0,\infty)\to {TeX.bbR}\) be defined by \[S_n(x) = {TeX.sum('k=1','n')}{TeX.acot}\Big({TeX.frac('1 + k(k + 1)x^2', 'x')}\Big)\] where for any \(x{TeX.inR}, {TeX.acot}(x)\in (0, \pi)\) and \({TeX.atan}(x)\in \Big(-{TeX.piby2}, {TeX.piby2}\Big)\). Then which of the following statements is (are) <strong>True</strong>?
            </p>
            <ol class="options">
                <li> {`\\(S_{10}(x) = \\dfrac{\\pi}{2}-\\tan^{-1}\\Big(\\dfrac{1 + 11x^2}{10x}\\Big)\\)`}, for all \(x>0\) </li>
                <li> {`\\(\\lim_{n\\to \\infty}\\cot(S_n(x)) = x\\)`}, for all \(x>0\) </li>
                <li> The equation {`\\(S_3(x)=\\dfrac{\\pi}{4}\\)`} has a root in \((0,\infty)\)</li>
                <li> {`\\(\\tan(S_n(x))\\leq \\dfrac{1}{2}\\)`}, for all \(n\geq 1\) and \(x > 0\) </li>
            </ol>
        </a>
        <h3>Question 6 [JEE adv, 2021]</h3>
        <a href={'/iit/maths/question6'}>
            <p>
                For any \(3\times 3\) matrix \(M\), let \(|M|\) denote the determinant of \(M\). Let \(I\) be the \(3\times 3\) identity matrix. Let \(E\) and \(F\) be two \(3\times 3\) matrices such that \(I-EF\) is invertible. If \(G = {TeX.pow('(I - EF)', '-1')}\), then which of the following statements is (are) <strong>True</strong>?
            </p>
            <ol class="options">
                <li> {`\\(|FE| = |I-FE||FGE|\\)`}</li>
                <li> {`\\((I-FE)(I + FGE) = I\\)`}</li>
                <li> \(EFG = GEF\)</li>
                <li> \((I - FE)(I-FGE) = I\) </li>
            </ol>
        </a>
    </div>
</article>