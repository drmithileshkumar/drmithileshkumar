<script context="module">
    export async function load({session, fetch, params, url}) {
        if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:4173' || url.host === 'localhost:3000')) {
            return {
                status: 301,
                redirect: `https://drmithileshkumar.com${url.pathname}`
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
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    /* p {
        text-indent: 2em;
    } */
    .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        width: 100%;
        flex-wrap: wrap;
    }
</style>
<svelte:head>
    <title>Physics Question 1</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="How do we define base or fundamental units? How long really is one meter?" />
</svelte:head>
<article>
    <h1>Question 1</h1>
    <p>
        The dimension of stopping potential {`\\(V_0\\)`} in photoelectric effect in units of Planck's constant {`\\(h\\)`}, speed of light {`\\(c\\)`}, Gravitational constant {`\\(G\\)`} and ampere {`\\(A\\)`} is:
    </p>
    <ol class="options">
        <li> {`\\(h^2Gc^{-5}A^{-1}\\)`} </li>
        <li> {`\\(h^\\frac{1}{3}G^{\\frac{2}{3}}c^{\\frac{1}{3}}A^{-1}\\)`} </li>
        <li> {`\\(h^\\frac{2}{3}G^{\\frac{1}{3}}c^{\\frac{5}{3}}A^{-1}\\)`} </li>
        <li> {`\\(h^\\frac{-2}{3}G^{\\frac{4}{3}}c^{\\frac{-1}{3}}A^{-1}\\)`} </li>
    </ol>
    <section>
        <h2>Concepts</h2>
        <p>
            In the original problem that appeared in IIT Mains, all options were <strong>wrong</strong> and full marks were awarded to each student. This problem has a very basic difficulty. Not only all options were incorrect, this question does not have a unique answer as {`\\(h, c, G, A\\)`} do not form an independent set of dimensions like {`\\(M, L, T, A\\)`} would form. It is easily verified that dimensionally we have {`\\[[hG] = [c]^5\\]`}
        </p>
    </section>
    <section>
        <h2>Solution</h2>
        <p>The options have been modified such that it contains one correct option. Let us formally see how to solve this problem.</p>
        <h4>Step 1</h4>
        <p>Express the dimensions of {`\\(V_0\\)`} in terms of {`\\(h, c, G, A\\)`} with unknown powers {`\\(x_h, x_c, x_G, x_A\\)`} respectively. {`\\[[V_0] = [h]^{x_h}[G]^{x_G}[c]^{x_c}[A]^{x_A}\\]`} </p>
        <h4>Step 2</h4>
        <p>
            Write the dimensions of all the quantities envolved in terms of {`\\(M, L, T, A\\)`}.
            {`\\[
                \\begin{eqnarray}
                    [V_0] &=& [ML^2T^{-3}A^{-1}] \\\\
                    [h] &=& [ML^2T^{-3}] \\\\
                    [G] &=& [M^{-1}L^3T^{-2}] \\\\
                    [c] &=& [LT^{-1}]
                \\end{eqnarray}                
                \\]`}
        </p>
        <h4>Step 3</h4>
        <p>Substitute these expressions into Equation in Step 1, {`\\[
            \\begin{eqnarray}
                [ML^2T^{-3}A^{-1}] &=& [ML^2T^{-3}]^{x_h} [M^{-1}L^3T^{-2}]^{x_G} [LT^{-1}]^{x_c} [A]^{x_A} \\\\
                &=& [M^{x_h-x_G}L^{2x_h+3x_G+x_c}T^{-3x_h-2x_G-x_c}A^{x_A}]
            \\end{eqnarray}
            \\]`} </p>
        <h4>Step 4</h4>
        <p>Equate the powers of like terms to get a system of equations {`\\[
            \\begin{eqnarray}
            x_h-x_G &=& 1\\\\
            2x_h+3x_G+x_c &=& 2\\\\
            -3x_h-2x_G-x_c &=& 3\\\\
            x_A &=& -1
            \\end{eqnarray}
            \\]`} </p>
        <h5>Step 5</h5>
        <p>Solve the system of equations. This system does not have a unique solution. A generic solution can be expressed as {`
        \\[
        \\left.\\begin{aligned}
            x_h &= x_G + 1\\\\
            x_c &= -5x_G\\\\
            x_A &= -1
        \\end{aligned}\\right\\rbrace \\rightarrow
        \\left\\{\\begin{aligned}
            x_G &= 1\\\\
            x_h &= 2\\\\
            x_c &= -5\\\\
            x_A &= -1
        \\end{aligned}\\right.
    \\]
        `}</p>
      <p>
        That is, {`\\([V_0] = [h^2Gc^{-5}A^{-1}]\\)`}. Hence, the correct choice is <strong>Option 1</strong>.
      </p>
    </section>
</article>