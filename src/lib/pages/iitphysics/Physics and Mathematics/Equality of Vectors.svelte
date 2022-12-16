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
                let O = new Point2D(0, 0);
                let A = new Point2D();
                A.randomPoint(n, m);
                let B = new Point2D();
                B.randomPoint(n, m);
                let C = A.add(B);
                let minX = Math.min(0, A.x, B.x, C.x);
                let maxX = Math.abs(Math.max(0, A.x, B.x, C.x));
                let minY = Math.min(0, A.y, B.y, C.y);
                let maxY = Math.abs(Math.max(0, A.y, B.y, C.y));
                let svg1 = `
                <svg width="200" height="200" viewBox="${minX - 2} ${minY - 2} ${Math.abs(minX) + maxX + 10} ${Math.abs(minY) + maxY + 10}">
                    <defs>
                        <marker id="arrow" refX="2" refY="2" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0,0 L 2,2 L 0,4 z" fill="white" stroke="black" stroke-width="0.1" opacity="1"></path></marker>
                    </defs>`
                let svg2 = '</svg>'
                let BC = B.vector(C, 0.4);
                let CA = C.vector(A, 0.4);
                let CB = C.vector(B, 0.4);
                let AC = A.vector(C, 0.4);
                let OA = O.vector(A, 0.4);
                let OB = O.vector(B, 0.4);
                let BO = B.vector(O, 0.4);
                let pairs = [OB + AC, BO + CA, OA + BC, OA + CB];
                // let dimfor = new Dimensions();
                // let bases = ['M', 'L', 'T', 'I'];
                // dimfor.randomDimensions(bases, true);
                
                
                for(let i = 0; i < 4; i++) {
                    problemset.o[choices[(correctChoiceIndex + i) % 4]] = svg1 + pairs[(3 + i)%4] + svg2;
                }
                problemset.s = `Which of the following vectors are not equal?`;
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
    <meta name="description" content="When are two vectors equal?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <section>
        <h2>Equality of scalar values</h2>
        <p>
            Two scalar values of the same physical quantity are <em>equal</em> if the units are the same and the numerical values (with signs) are equal.
        </p>
    </section>
    <section>
        <h2>Equality of vector values</h2>
        <p>
            Two vectors representing the same physical quantity are said to be <em>equal</em> if they have the same magnitude and direction.
        </p>
        <p>
            Parallel translation of a vector does not change the vector.
        </p>
    </section>
    <section>
        <h2>Practice</h2>
        {#if $session.user}
        <Practice {generateProblem}/>
        {:else}
            <Message>You need to be logged in to practice.</Message>
        {/if}
    </section>
</article>