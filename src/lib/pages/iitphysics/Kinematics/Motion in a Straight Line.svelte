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
    import Practice from '$lib/utils/practiceproblem/Practice.svelte';
    import Message from '$lib/ui/Message.svelte';
    import {Point2D} from '$lib/utils/common/point2d';
    import {randNum, randInt} from '$lib/utils/common/common';
    import {page, session} from '$app/stores';
    import {onMount} from 'svelte';
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
        let N = 1;
        problemnumber = problemnumber % N;
        let choices = ['A', 'B', 'C', 'D'];
        let correctChoiceIndex = Math.floor(Math.random()*4);
        problemset.c = choices[correctChoiceIndex];
        let ans;
        let values = [0, 0, 0, 0];
        switch(problemnumber) {
            case 0: {
                let n = 10;
                let m = 10;
                let A = new Point2D();
                A.randomPoint(n, m);
                let B = new Point2D();
                B.randomPoint(n, m);
                let C = A.add(B);
                let minX = Math.min(A.x, B.x, C.x);
                let maxX = Math.abs(Math.max(A.x, B.x, C.x));
                let minY = Math.min(A.y, B.y, C.y);
                let maxY = Math.abs(Math.max(A.y, B.y, C.y));
                let svg1 = `
                <svg width="200" height="200" viewBox="${minX - 2} ${minY - 2} ${Math.abs(minX) + maxX + 10} ${Math.abs(minY) + maxY + 10}">
                    <defs>
                        <marker id="arrow" refX="2" refY="2" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0,0 L 2,2 L 0,4 z" fill="white" stroke="black" stroke-width="0.1" opacity="1"></path></marker>
                    </defs>`
                let svg2 = '</svg>'
                let AB = A.vector(B, 0.4);
                let BC = B.vector(C, 0.4);
                let CA = C.vector(A, 0.4);
                let BA = B.vector(A, 0.4);
                let CB = C.vector(B, 0.4);
                let AC = A.vector(C, 0.4);
                let triangles = [AB + CB + AC, BA + CB + CA, AB + BC + AC, AB + BC + CA];
                // let dimfor = new Dimensions();
                // let bases = ['M', 'L', 'T', 'I'];
                // dimfor.randomDimensions(bases, true);
                
                
                for(let i = 0; i < 4; i++) {
                    problemset.o[choices[(correctChoiceIndex + i) % 4]] = svg1 + triangles[(3 + i)%4] + svg2;
                }
                problemset.s = `Which of the following does not contain a vector which is the sum of two other vectors?`;
                break;
            }
        }
        problemset = problemset;
        return problemset;
    }
</script>
<style>
    p {
        text-indent: 2em;
    }
    /* .image {
        display: flex;
        justify-content: center;
        width: min(95vw, 600px);
    } */
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="How do we describe motion in a straight line? What are equations of motion with constant acceleration?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <section>
        <p>
            The simplest to describe motion is when the object is constrained to move in a straight line. Alternatively, we say the object is moving in one dimension. In one dimension, most of the vector quantities like position, displacement, velocity and acceleration can be treated as scalar. 
        </p>
        <p>
            Pictorially, we draw a number line to quantify position. Usually, variable {`\\(x\\)`} denotes the position. Then other quantities can we written as {
                `\\[
                \\begin{eqnarray}    
                    \\Delta x &=& x_f - x_i\\\\
                    v &=& \\frac{dx}{dt}\\\\
                    a &=& \\frac{d^2x}{dt^2}
                \\end{eqnarray}
                \\]
                `
            }
        </p>
    </section>
    <section>
        <h2>Motion with Constant Acceleration</h2>
        <p>Equations of motion become simpler when the acceleration of the object is constant. This assumption captures a lot of every day scenarios like motion under gravity on the surface of the earth. We have seen these equations in previous classes. Suppose an object is moving with initial velocity {`\\(u\\)`} with constant acceleration {`\\(a\\)`}. Let {`\\(x\\)`} be the displacement and {`\\(v\\)`} be the velocity after time {`\\(t\\)`}.
            {`\\[
                \\begin{eqnarray}    
                    v &=& u + at\\\\
                    x &=& ut + \\frac{1}{2}at^2\\\\
                    v^2 &=& u^2 + 2ax
                \\end{eqnarray}
                \\]
                `}

        </p>
    </section>
    <section>
        <h3>Derivation</h3>
        <p>
            Both displacement {`\\(x\\)`} and velocity {`\\(v\\)`} are functions of time. Starting with {`\\[a = \\frac{dv}{dt}\\]`} and with assumption that {`\\(a\\)`} is a constant, we can write {
                `\\[
                    \\begin{eqnarray}
                        \\int_u^vdv &=& \\int_0^t adt\\\\
                        v-u &=& at\\\\
                        v &=& u + at
                    \\end{eqnarray}    
                \\]
                `
            }
            which gives us the first equation of motion.
        </p>
        <p>
            We'll use the first equation of motion to derive the second equation of motion. {
                `\\[
                    \\begin{eqnarray}
                        \\frac{dx}{dt} &=& u + at\\\\
                        \\int_0^xdx &=& \\int_0^t (u +at)dt\\\\
                        x &=& ut + \\frac{1}{2}at^2
                    \\end{eqnarray}    
                \\]
                `
            }
        </p>
        <p>
            The third equation of motion can be obtained by substituting {`\\(t = \\frac{v-u}{a}\\)`} into the second equation {
                `\\[
                    \\begin{eqnarray}
                x &=& u\\Big(\\frac{v-u}{a}\\Big) + \\frac{1}{2}a\\Big(\\frac{v-u}{a}\\Big)^2\\\\
                2ax &=& (v-u)(2u + v -u)\\\\
                2ax &=& (v-u)(v + u)\\\\
                v^2 &=& u^2 + 2ax
                \\end{eqnarray} 
                \\]
                `
            }
        </p>
    </section>
    <section>
        <h2>Freely Falling Bodies</h2>
        <p>Let us consider an object is thrown vertically upward. To falls down on the earth after some time. This happens due to the force of gravity which causes a constant (approximately) acceleration towards the earth. This time we choose the {`\\(y\\)`}-axis to represent the motion. Since the acceleration is downwards, we use {`\\(a = -g\\)`} where {`\\(g = 9.8~ms^{-2}\\)`}. Substituting {`\\(x = y\\)`} and {`\\(a = -g\\)`}, we get equations of motion under free fall. 
            {`\\[
                \\begin{eqnarray}    
                    v &=& u - gt\\\\
                    y &=& ut - \\frac{1}{2}gt^2\\\\
                    v^2 &=& u^2 - 2gy
                \\end{eqnarray}
                \\]
                `}
        </p>
    </section>
    <!-- <section>
        <h2>Practice</h2>
        {#if $session.user}
        <Practice {generateProblem}/>
        {:else}
            <Message>You need to be logged in to practice.</Message>
        {/if}
    </section> -->
</article>