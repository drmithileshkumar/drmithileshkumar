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
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="How do we define base or fundamental units? How long really is one meter?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>Any standard unit should have the following two properties:</p>
    <ol>
        <li><em>Invariability</em> : The standard unit must be invariable.</li>
        <li><em>Availability</em> : The stardard unit should be easily made available for comparing with other quantities.</li>
    </ol>
    <p>
        CGPM decided in its 2018 meeting that all the SI base quantities  will be defined in terms of certain universal constants and these constants will be assigned <em>fixed numerical values by definition</em>.
    </p>
    <h3>Second</h3>
    <p>
        1 second is the time that makes the unperturbed ground state hyperfine transition frequency {'\\(\\Delta \\nu_{Cs}\\)'} to be 9192631770 when expressed in the unit Hz which is equal to {`\\(s^{-1}\\)`}.
    </p>
    <h3>Meter</h3>
    <p>1 meter is the length that makes the speed of light in vacuum to be 299792458 when expressed in the unit {"\\(m\\cdot s^{-1}\\)"}, where the second is defined in terms of the Caesium frequency {'\\(\\Delta \\nu_{Cs}\\)'}.</p>
    <h3>Kilogram</h3>
    <p>1 kilogram is the mass that makes the Planck's constant {"\\(h\\)"} to be {"\\(6.62607015\\times 10^{-34}\\)"} when expressed in the unit {"\\(J\\cdot s\\)"} which is equal to {"\\(kg\\cdot m^2 s^{-1}\\)"}, where the meter and the second are defined in terms of {"\\(c\\)"} and {'\\(\\Delta \\nu_{Cs}\\)'}.</p>
    <h3>Ampere</h3>
    <p>1 ampere is the current which makes the elementary charge {"\\(e\\)"} to be {"\\(1.602176634\\times 10^{-19}\\)"} when expressed in the unit C which is equal to {"\\(A\\cdot s\\)"}.</p>
    <h3>Kelvin</h3>
    <p>1 kelvin is the temperature that makes the Boltzmann constant to be {"\\(1.380649\\times 10^{-29}\\)"} when expressed in the unit {"\\(kg\\cdot m^2 \\cdot s^2 \\cdot K^{-1}\\)"}</p>
    <h3>Mole</h3>
    <p>1 mole of a substance is defined to contain exactly {"\\(6.02214076\\times 10^{23}\\)"} elementary entities. This number is the fixed numerical value of the Avagadro constant {"\\(N_A\\)"}.</p>
    <h3>Candela</h3>
    <p>1 candela is the luminous intensity that makes the luminous efficacy  of monochromatic radiation of frequency {"\\(540\\times 10^{12} Hz, K_{cd}\\)"} to be 683 when expressed in the unit {"\\(cd\\cdot sr\\cdot kg^{-1}m^2s^3\\)"}.</p>
</article>