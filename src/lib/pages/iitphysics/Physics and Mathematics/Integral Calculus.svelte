<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'webdut.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://webdut.com${url.pathname}`
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
    import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/iitphysics/stores';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    p {
        text-indent: 2em;
    }
    /* .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: min(95vw, 600px);
    } */
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table thead tr th {
        border-bottom: 1px solid;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What is integral calculus? What are rules of integration?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>Integral calculus is <em>inverse</em> of differential calculus. If a function {`\\(g\\)`} is a derivative of another function {`\\(f\\)`}, then we can say that {`\\(f\\)`} is an <em>integral</em> of {`\\(g\\)`}. In symbols,  {`\\[
        \\begin{eqnarray}
            g(x) &=& \\frac{df(x)}{dx}\\\\
            f(x) &=& \\int g(x)dx + C
        \\end{eqnarray}
        \\]`} where the constant {`\\(C\\)`} in the second equation appears because derivative of a constant is zero. {`\\[
            \\frac{f(x)}{dx} = \\frac{d(f(x) + C)}{dx}
            \\]`}  </p>

    <section>
        <h2>Calculating integrals</h2>
        <table style="margin:auto;">
            <thead>
                <tr>
                    <th>{`\\(f(x)\\)`} </th>
                    <th style="border-right: 1px solid;">{`\\(\\int f(x)dx\\)`} </th>
                    <th style="padding-left: 2px;">{`\\(f(x)\\)`} </th>
                    <th>{`\\(\\int f(x)dx\\)`} </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{`\\(x^n (n\\neq -1)\\)`} </td>
                    <td style="border-right: 1px solid;">{`\\(\\dfrac{x^{n+1}}{n+1}\\)`} </td>
                    <td style="padding-left: 2px;">{`\\(\\sec x\\tan x\\)`} </td>
                    <td>{`\\(\\sec x\\)`} </td>
                </tr>
                <tr>
                    <td>{`\\(\\cos x\\)`} </td>
                    <td style="border-right: 1px solid;">{`\\(\\sin x\\)`} </td>
                    <td style="padding-left: 2px;">{`\\(\\text{cosec}~ x\\cot x\\)`} </td>
                    <td>{`\\(-\\text{cosec}~ x\\)`} </td>
                </tr>
                <tr>
                    <td>{`\\(\\sin x\\)`} </td>
                    <td style="border-right: 1px solid;">{`\\(-\\cos x\\)`} </td>
                    <td style="padding-left: 2px;">{`\\(\\dfrac{1}{x}\\)`} </td>
                    <td>{`\\(\\ln x\\)`} </td>
                </tr>
                <tr>
                    <td>{`\\(\\sec^2 x\\)`} </td>
                    <td style="border-right: 1px solid;">{`\\(\\tan x\\)`} </td>
                    <td style="padding-left: 2px;">{`\\(e^x\\)`} </td>
                    <td>{`\\(e^x\\)`} </td>
                </tr>
                <tr>
                    <td>{`\\(\\dfrac{1}{x^2+a^2}\\)`} </td>
                    <td style="border-right: 1px solid;">{`\\(\\dfrac{1}{a}\\tan^{-1}\\dfrac{x}{a}\\)`} </td>
                    <td style="padding-left: 2px;">{`\\(\\dfrac{1}{\\sqrt{a^2-x^2}}\\)`} </td>
                    <td>{`\\(\\sin^{-1}\\dfrac{x}{a}\\)`} </td>
                </tr>
            </tbody>
        </table>
    </section>
    <section>
        <h2>Rules of integration</h2>
        <ul>
            <li>
                When the function is multiplied by a constant {`\\[\\int cf(x)dx = c\\int f(x)dx\\]`}
            </li>
            <li>Given {`\\(\\int f(x)dx = F(x)\\)`} and variable of integration is multiplied by a constant {`\\[\\int f(cx)dx=\\frac{1}{c}F(cx)\\]`}</li>
            <li>
                Sum of two functions {`\\[\\int [f(x) + g(x)]dx = \\int f(x)dx + \\int g(x)dx\\]`}
            </li>
        </ul>
    </section>
</article>