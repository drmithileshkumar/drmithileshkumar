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
    import Message from '$lib/ui/Message.svelte';
    import Practice from '$lib/utils/practiceproblem/Practice.svelte';
    import {selectedChapter, selectedSection} from '$lib/pages/iitphysics/stores';
    import {randNum} from '$lib/utils/common/common';
    import {Sets} from '$lib/utils/common/sets';
    import {Dimensions, physicalQuantities} from './dimension';
    import {session, page} from '$app/stores';
    import {onMount} from 'svelte';
    $selectedChapter = 'Introduction to Physics';
    $selectedSection = 'Dimension';
    const {distance, velocity, mass, time, acceleration, momentum, force, energy, current, charge, efield, epotential } = physicalQuantities; 
    
    onMount(() => {
        MathJax.typeset();
    });
    let problemset = {
        s: "",
        o: {
                'A': '',
                'B': "",
                'C': "",
                'D': ''
            },
        c: ""
    };
    const generateProblem = (problemnumber) => {
        let N = 2;
        problemnumber = problemnumber % N;
        let choices = ['A', 'B', 'C', 'D'];
        let correctChoiceIndex = Math.floor(Math.random()*4);
        problemset.c = choices[correctChoiceIndex];
        let ans;
        let values = [0, 0, 0, 0];
        switch(problemnumber) {
            case 0: {
                let dimfor = new Dimensions();
                let bases = ['M', 'L', 'T', 'I'];
                dimfor.randomDimensions(bases, true);
                let rc = randNum(4, 0, false);
                
                for(let i = 0; i < 4; i++) {
                    values[i] = dimfor.formula[(rc + i) % 4].c;
                    problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                }
                problemset.s = `The dimensional formula of a quantity is \\(${dimfor.str()}\\). The dimension of the quantity in \\(${dimfor.formula[rc].b}\\) is`;
                break;
            }
            case 1: {
                let quantities = new Sets([distance, velocity, mass, time, acceleration, momentum, force, energy, current, charge, efield, epotential]);
                let kquantities = quantities.krandomSubset(4);
                let kbases = kquantities.e.map(item => item.name);
                let formula = new Dimensions([]);
                formula.randomDimensions(kbases, true);
                let oldBasis = {};
                for(let i = 0; i < kquantities.e.length; i++) {
                    oldBasis[kquantities.e[i].name] = kquantities.e[i].dimensions;
                }
                
                let stdDimensions = new Dimensions();
                stdDimensions.transform(oldBasis, formula)
                let rc = randNum(4, 0, false);
                for(let i = 0; i < 4; i++) {
                    values[i] = stdDimensions.formula[(rc + i) % 4].c;
                    problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                }
                problemset.s = `A physical quantities Q has the following definition \\[Q = ${formula.texstr(true)}\\] The dimension of the quantity in \\(${stdDimensions.formula[rc].b}\\) is`
                break;
            }
        }
        problemset = problemset;
        return problemset;
    }
    
</script>
<style>
    table td:first-child, th:first-child {
        text-align: right;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What are dimensions of a physical quantity?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>
        When a quantity is expressed in terms of the base quantities, it is written as a product of different powers of the base quantities. The <em>exponent</em> of a base quantity that enters into the expression, is called the <em>dimension of the quantity in that base</em>.
    </p>
    <p>For convenience the base quantities are represented by one letter symbols. The following table lists the symbols.</p>
    <table>
        <thead>
            <tr>
                <th>Quantity</th>
                <th>Dimensional symbol</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Mass</td>
                <td><strong>M</strong></td>
            </tr>
            <tr>
                <td>Length</td>
                <td><strong>L</strong></td>
            </tr>
            <tr>
                <td>Time</td>
                <td><strong>T</strong></td>
            </tr>
            <tr>
                <td>Current</td>
                <td><strong>I</strong></td>
            </tr>
            <tr>
                <td>Temperature</td>
                <td><strong>K</strong></td>
            </tr>
            <tr>
                <td>Amount of substance</td>
                <td><strong>mol</strong></td>
            </tr>
            <tr>
                <td>Luminous intensity</td>
                <td><strong>cd</strong></td>
            </tr>
        </tbody>
    </table>
    <p>
        The physical quantity that is expressed in terms of the base quantities is enclosed in square brackets [ ] to remind that the equation is among the dimensions and not among the magnitudes. For example, {"\\[[force] = MLT^{-2}\\]"}
    </p>
    <p>
        The dimensional formula of force can be stated in two ways:
    </p>
    <ol>
        <li>The dimensional formula of force is {"\\(MLT^{-2}\\)"}</li>
        <li>The dimensions of force are 1 in mass, 1 in length and -2 in time.</li>
    </ol>
    <section>
        <h2>Practice</h2>
        {#if $session.user}
        <Practice {generateProblem}/>
        {:else}
            <Message>You need to be logged in to practice.</Message>
        {/if}
    </section>
    <section>
        <h2>Table of physcial quantities</h2>
        <table>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Symbol</th>
                    <th>Dimensions</th>
                </tr>
            </thead>
            <tbody>
                {#each Object.entries(physicalQuantities) as [quantity, {name, symbol, dimensions}]}
                <tr>
                    <td>{name}</td>
                    <td>{`\\(${symbol}\\)`}</td>
                    <td>{`\\(${dimensions.str()}\\)`}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </section>
</article>