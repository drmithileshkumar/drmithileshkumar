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
    $selectedChapter = 'Introduction to Physics';
    $selectedSection = 'What is Physics';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    p {
        text-indent: 2em;
    }
    li {
        overflow: auto;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What is Physics? Why do we need to study physics?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection} ?</h1>
    <a href="https://youtu.be/7NZ-FLABnNM">Watch on youtube</a>
    <p>
        Everything around us, seen or unseen, is part of nature. Our survival depends on understanding how things and events in nature relate to each other. We want to predict weather, check whether water is drinkable or air is breathable. Dinosaurs were mostly likely wiped out by meteors hitting the earth. We want to know whether any passing-by meteor is going to hit the earth. What will it take to stop that from happening? Source of all energy is the sun. Why is the sun so hot, but not the moon?  Will the sun burn out some day? If yes, when? What can we do about that? Answers to these questions are found in the discipline called <em>physics</em>. 
    </p>
    <p>Physics is the study of nature and its laws. Even though there are vast number of objects and events happening in the universe, there are hidden laws that they obey. Only a handful of laws are needed to explain and predict most of the events in nature or explain properties of an object. But these laws are fairly complex to state. We need to define and develop a lot of concepts to state these laws precisely. Have a look at some of them below. </p>
    <ol>
        <li>
            <h4>Dirac equation on curved spacetime</h4>
            <p>{"\\[(i\\gamma^{\\mu}D_{\\mu} - m)\\Psi = 0\\]"}</p>
        </li>
        <li>
            <h4>Einstein's field equations</h4>
            <p>{"\\[G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}\\]"}</p>
        </li>
        <li>
            <h4>QED action</h4>
            <p>{"\\[S_{QED}\\int d^4x\\Big [-\\frac{1}{4}F^{\\mu\\nu}F_{\\mu\\nu} + \\bar{\\phi}(i\\gamma^{\\mu} D_{\\mu} - m)\\psi\\Big]\\]"}</p>
        </li>
        <li>
            <h4>Electro-weak force</h4>
            <h5>Before electroweak symmetry breaking</h5>
            <p>{`\\[
                    \\begin{eqnarray}
                        \\mathcal{L}_{EW} &=& \\mathcal{L}_g + \\mathcal{L}_f + \\mathcal{L}_h + \\mathcal{L}_y\\\\
                        \\mathcal{L}_g &=& -\\frac{1}{4} W_a^{\\mu\\nu}W_{\\mu\\nu}^a - \\frac{1}{4}B^{\\mu\\nu}B_{\\mu\\nu}\\\\
                        \\mathcal{L}_f &=& \\bar{Q_j}i \\gamma^{\\mu}D_{\\mu} Q_j + \\bar{u_j}i \\gamma^{\\mu}D_{\\mu} d_j + \\bar{L_j}i \\gamma^{\\mu}D_{\\mu} L_j + \\bar{e_j}i \\gamma^{\\mu}D_{\\mu} e_j\\\\
                        \\mathcal{L}_h &=& \\vert D_{\\mu}h\\vert ^2 - \\lambda \\Big(\\vert h\\vert^2 - \\frac{v^2}{2}\\Big)^2\\\\
                        \\mathcal{L}_y &=& -y_{uij}\\epsilon^{ab}h_b^{\\dagger}\\bar{Q_{ia}u_j^c - y_{dji}h\\bar{Q_i}d_j^c} - y_{eij}h\\bar{L_i}e_j^c + h.c.
                    \\end{eqnarray}
                \\]`}
            </p>
            <h5>After electroweak symmetry breaking</h5>
            <p>{`\\[
                \\begin{eqnarray}
                    \\mathcal{L}_{EW} &=& \\mathcal{L}_K + \\mathcal{L}_N + \\mathcal{L}_C + \\mathcal{L}_H + \\mathcal{L}_{HV} + \\mathcal{L}_{WWV} + \\mathcal{L}_{WWVV} + \\mathcal{L}_Y
                \\end{eqnarray}
            \\]`}</p>
        </li>
    </ol>
    <p>Complexity of these equations go so out of control that I didn't even bother to write out the eight terms in the last equation above. Above equations can explain almost everything that we can experimentally verify today. These equations contain the combined effort of humanity to explain nature. You'll need to study a lot to understand them. Some of you might succeed in doing so.</p>
    <p>
        We'll start out small. We'll focus on simpler version of these laws at first. As we understand better, we'll refine them, till we arrive at the above equations. Along the way, we'll introduce new mathematical concepts that will help in understanding the underlying physical law. 
    </p>
</article>