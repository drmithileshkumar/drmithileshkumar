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
    $selectedSection = 'Units';
    onMount(() => {
        MathJax.typeset();
    });
</script>
<style>
    p {
        text-indent: 2em;
    }
    table td:first-child, th:first-child {
        text-align: right;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What are units of measurement?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>Physics describes nature by first defining physical quantities. We discover mathematical laws that relate these physical quantities. In laboratories, we measure these physical quantities whose values are predicted by the laws of nature. To communicate our observation, we need to use a standard that defines how much <em>quantity</em> is a <em>unit</em> ( or one) of the physical quantity involved.</p>
    <p>For example, length of a string can be 1.4 meter or 10 centimeter. Here meter or centimeter is a unit of length. We generally use a scale to measure length that has markings on it. Temperature can either be 100{"\\({}^{\\circ}C\\)"} or 98.4{"\\({}^{\\circ}F\\)"} where Celsius or Fehrenheit is a unit of temperature. But how long is 1 meter? Who decided it? </p>
    <p>
        Everyone must agree on the amount of 1 meter. General Conference on Weight and Measures (CGPM) decides the value of standard units.
    </p>
    <h2>Fundamental and derived quantities</h2>
    <p>A set of <em>fundamental quantities</em> is defined as follows:</p>
    <ol>
        <li>the fundamental quantities should be independent of each other, and</li>
        <li>all other quantities may be expressed in terms of the fundamental quantities.</li>
    </ol>
    <p>There are <strong>7</strong> fundamental quantities. All the rest may be derived from these quantities by <em>multiplication</em> and <em>division</em>.</p>
    <h2>SI units</h2>
    <p>The following table shows the units for fundamental quantities.</p>
    <table>
        <thead>
            <tr>
                <th>Quantity</th>
                <th>Name of the Unit</th>
                <th>Symbol</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Length</td>
                <td><strong>meter</strong></td>
                <td>m</td>
            </tr>
            <tr>
                <td>Mass</td>
                <td><strong>kilogram</strong></td>
                <td>kg</td>
            </tr>
            <tr>
                <td>Time</td>
                <td><strong>second</strong></td>
                <td>s</td>
            </tr>
            <tr>
                <td>Electric Current</td>
                <td><strong>ampere</strong></td>
                <td>A</td>
            </tr>
            <tr>
                <td>Thermodynamic Temperature</td>
                <td><strong>kelvin</strong></td>
                <td>K</td>
            </tr>
            <tr>
                <td>Amount of Substance</td>
                <td><strong>mole</strong></td>
                <td>mol</td>
            </tr>
            <tr>
                <td>Luminous Intensity</td>
                <td><strong>candela</strong></td>
                <td>cd</td>
            </tr>
            <tr>
                <td>*Angle</td>
                <td><strong>radian</strong></td>
                <td>rad</td>
            </tr>
            <tr>
                <td>*Solid angle</td>
                <td><strong>steradian</strong></td>
                <td>sr</td>
            </tr>
        </tbody>
    </table>
</article>