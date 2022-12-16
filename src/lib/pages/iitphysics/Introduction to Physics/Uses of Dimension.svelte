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
    import {session, page} from '$app/stores';
    import {onMount} from 'svelte';
    import {randNum} from '$lib/utils/common/common';
    import {Sets} from '$lib/utils/common/sets';
    import {Dimensions, physicalQuantities} from './dimension';
    import {cycle} from '$lib/utils/common/combinatorics';
    const {distance, velocity, mass, time, acceleration, momentum, force, energy, current, charge, efield, epotential } = physicalQuantities; 
    $selectedChapter = 'Introduction to Physics';
    $selectedSection = 'Uses of Dimension';
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
        let quantities = new Sets([distance, velocity, mass, time, acceleration, momentum, force, energy, current, charge, efield, epotential]);
        switch(problemnumber) {

            case 0: {
                
                let kquantities = quantities.krandomSubset(4);
                let kbases = kquantities.e.map(item => item.name);
                let kbaseSymbols = kquantities.e.map(item => item.symbol);
                let formula = new Dimensions([]);
                formula.randomDimensions(kbaseSymbols, true);
                let dims = formula.formula.map(item => item.c);
                let oldBasis = {};
                for(let i = 0; i < kquantities.e.length; i++) {
                    oldBasis[kquantities.e[i].symbol] = kquantities.e[i].dimensions;
                }
                let kbaseStr = kbases[0];
                for(let i = 1; i < kbases.length - 1; i++) {
                    kbaseStr += ', ' + kbases[i];
                }
                kbaseStr += ' and ' + kbases[kbases.length - 1];
                let stdDimensions = new Dimensions();
                stdDimensions.transform(oldBasis, formula)
                let rc = randNum(4, 0, false);
                for(let i = 0; i < 4; i++) {
                    values[i] = cycle(dims, i);
                    problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                }
                problemset.s = `The dimensional formula of a physical quantities \\(Q\\) is \\(${stdDimensions.str()}\\). If \\(Q\\) depends on ${kbaseStr} as \\[Q = k~{${kbaseSymbols[0]}}^{d_1}~ {${kbaseSymbols[1]}}^{d_2}~ {${kbaseSymbols[2]}}^{d_3}~ {${kbaseSymbols[3]}}^{d_4} \\] for some dimensionless constant \\(k\\), then values of \\(d_1, d_2, d_3\\) and \\(d_4\\) are`
                break;
            }
            case 1: {
                let kquantities = quantities.krandomSubset(2);
                console.log(kquantities)
                let kbases = kquantities.e.map(item => item.name);
                let kbaseSymbols = kquantities.e.map(item => item.symbol);
                let eqn = `${kbaseSymbols[0]} = c_0 + c_1 ${kbaseSymbols[1]} + c_2 ${kbaseSymbols[1]}^2 + c_3 ${kbaseSymbols[1]}^3`;
                let dims = [kquantities.e[0].dimensions];
                for(let i = 1; i < 4; i++) {
                    dims.push(kquantities.e[0].dimensions.div(kquantities.e[1].dimensions.power(i)));
                }
                let rc = randNum(4, 0, false);
                for(let i = 0; i < 4; i++) {
                    values[i] = dims[(rc + i) % 4].str();
                    problemset.o[choices[(correctChoiceIndex + i) % 4]] = `\\(${values[i]}\\)`;
                }
                problemset.s = ` \\(${kbases[0]}\\) depends on \\(${kbases[1]}\\) as \\[${eqn}\\] The dimensional formula of \\(c_{${rc}}\\) is`
                break;
            }
        }
        problemset = problemset;
        return problemset;
    }
</script>
<style>
    
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What are the uses of dimension?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>In the previous section, we defined dimensions. In this section, we'll learn how they are used to quickly check validity of equations, convert between different unit systems and even guess relation between physical quantities.</p>
    <h2>Homogeneity of Dimensions in an Equation</h2>
    <p>An equation is a mathematical way to show relation between physical quantities. For example, {`\\[x = ut + \\frac{1}{2}at^2\\]`} where {`\\(x\\)`} represents <em>distance</em>, {`\\(u\\)`} represents <em>initial speed</em>, {`\\(a\\)`} represents <em>acceleration</em> and {`\\(t\\)`} represents <em>time</em>. This equations says that the distance travelled by an object after time {`\\(t\\)`} depends on initial speed {`\\(u\\)`}, acceleration {`\\(a\\)`} and time {`\\(t\\)`}. </p>
    <p> A <em>term</em> in an equation is the part that only contains multiplication or division. In this sense, an equation has a left-hand side and a right-hand side and these sides are sum of terms. In the above example, the left-hand side has only one term {`\\(x\\)`}, but the right-hand side has two terms {`\\(ut\\)`} and {`\\(\\frac{1}{2}at^2\\)`}. </p>

    <h3><em>Principle of Homogeneity of dimensions</em></h3>
    <p>The dimensions of all the terms in an equation must be identical. One can add or subtract only similar physical quantities.</p>
    <p>In the above example, we can list the dimensions of each term as follows 
        {`\\[
            \\begin{eqnarray}
            [x] &=& L\\\\
            [ut] &=& LT^{-1}T = L\\\\
            [\\frac{1}{2}at^2] &=& LT^{-2}T^2 = L
            \\end{eqnarray}
            \\]`}
        Notice that pure numbers like {`\\(\\frac{1}{2}\\)`} are <em>dimensionless</em>. The above list shows that each term of the equation has the same dimensions. Hence, by the <em>principle of homogeneity of dimensions</em> the above equation is <em>dimensionally correct</em>.
    </p>
    <h4>Limitation of the method</h4>
    <p>Since dimensions do not depend on magnitude, constants or quantities that are dimensionless can not be determined or corrected using this method. For example, in the above equation the number {`\\(\\frac{1}{2}\\)`} has no effect on the dimensions and could be replaced by any other number. </p>

    <h2>Conversion of Units</h2>
    <p>Two values of the same physical quantity can be added or subtracted only when they contain the same type of units. If we know the dimensional formula of the physical quantity and conversion factor between different units, we can obtain conversion factor for the physical quantity.</p>

    <h2>Deducing relation among the physical quantities</h2>
    <p>Assuming that a physical quantity A depends on other physical quantities {"\\(l, m, n\\)"} such that the formula for A can be obtained by products of some powers of {"\\(a, b, c\\)"} of {"\\(l, m, n\\)"} respectively, then we can use dimensions to determine {"\\(a, b, c\\)"}. {"\\[A = k l^a m^b n^c\\]"} where {"\\(k\\)"} is some dimensionless constant.</p>
    <p>Next step is to write dimensions of {"\\(A, l, m, n\\)"} in terms of base quantities and equate the resulting power on both sides. To understand this, let us use an example. Suppose we want to deduce a formula for the time period of a simple pendulum. In the laboratory experiment, we observe that it depends on the length {"\\(l\\)"} of the string, the mass {"\\(m\\)"} of the bob and the acceleration due to gravity {"\\(g\\)"}. Assuming that this dependence is multiplicative, we can write {"\\[t = k l^a m^b g^c\\]"}</p>
    <p>Using the dimensional formulae for {"\\(t, l, m, g\\)"} as {"\\(T, L, M, LT^{-2}\\)"} respectively, we get {"\\[T = L^a M^b (LT^{-2})^c = L^{a + c}M^b T^{-2c}\\]"}</p>
    <p>Since the dimensions should be equal on both sides, we get
        {`\\[
            \\begin{eqnarray}
                a + c &=& 0\\\\
                b &=& 0\\\\
                -2c &=& 1
            \\end{eqnarray}
        \\]`}
    </p>
    <p>Solving these equations give {"\\(a = \\frac{1}{2}, b = 0, c = -\\frac{1}{2}\\)"} implying {"\\[t = k \\sqrt{\\frac{l}{g}}\\]"}</p>

    <h4>Limitation of the dimensional method</h4>
    <ol>
        <li>The dependency between quantities can only involve multiplication or division. Formulae involving addition or subtraction can not be obtained.</li>
        <li>Constants must be dimensionless.</li>
        <li>The number of physical quantities on which A depends can not exceed the number of equations that can be obtained. If A is purely mechanical (depends only on {"\\(M, L, T\\)"}), then A can only depend on at most 3 physical quantities, otherwise we'll end up with more variables than equations. In that case, all variables can not be uniquely determined.</li>
    </ol>

    <section>
        <h2>Practice</h2>
        {#if $session.user}
        <Practice {generateProblem}/>
        {:else}
            <Message>You need to be logged in to practice.</Message>
        {/if}
    </section>
</article>