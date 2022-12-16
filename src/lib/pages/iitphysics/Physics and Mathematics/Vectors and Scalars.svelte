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
    .image {
        display: flex;
        justify-content: center;
        width: min(95vw, 600px);
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="Vectors and Scalars: What is a scalar quantity? What is a vector quantity? Triangle law vector addition" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <section>
        <h2>What is a scalar quantity?</h2>
        <p>
            A physical quantity is called <em>scalar</em> if it can be completely described by a numerical value alone and these values obey ordinary algebraic rules like addition, subtraction, multiplication and division.
        </p>
        <h3>Example</h3>
        <p>Length, speed, weight and energy are scalar quantities.</p>
    </section>
    <section>
        <h2>What is a vector quantity?</h2>
        <p>
            A physical quantity is called <em>vector</em> if it can be completely described by a numerical value along with a direction in space. These quantities do not obey ordinary algebraic rules. In fact, they obey rules of <em>vector algebra</em>.
        </p>
        <p>
            A vector can be shown with an <em>arrow</em>. The placement of the arrow head indicates the direction of the vector. The length of the arrow indicates the magnitude of the vector quantity. Symbolically, a vector variable is shown by variable name with an arrow on top. 
        </p>
        <h3>Example</h3>
        <p>
            Vector {`\\(\\overrightarrow{PQ}\\)`} of magnitude {`\\(2~m\\)`} and direction represented by the arrow joining points P and Q.
        </p>
        <div class="image">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="175"><defs><clipPath id="zaAgnRnCfOKP"><path fill="none" stroke="none" d=" M 0 0 L 250 0 L 250 175 L 0 175 L 0 0 Z"/></clipPath></defs><g transform="scale(1,1)" clip-path="url(#zaAgnRnCfOKP)"><g><rect fill="rgb(255,255,255)" stroke="none" x="0" y="0" width="250" height="175" fill-opacity="1"/><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 40.275680835 144.43262806999985 L 213.5853795447255 60.94396983939135" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" fill-rule="evenodd" d=" M 228.0000000000001 53.99999999999986 L 215.32137200457336 64.54762495321 L 211.84938708487763 57.340314725572696 Z" fill-opacity="0.6980392156862745"/><g transform="scale(19,19)"><g transform="translate(5.421052631578948,4.644)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.449 -0.17400000000000002 L 0.449 -0.17400000000000002 L 0.421 0 L 0.05 0 Q 0.05 -0.025 0.056 -0.032 L 0.061 -0.037 L 0.253 -0.251 Q 0.358 -0.369 0.358 -0.47200000000000003 Q 0.358 -0.561 0.304 -0.607 L 0.303 -0.608 L 0.302 -0.608 Q 0.27 -0.635 0.224 -0.635 Q 0.152 -0.635 0.109 -0.5730000000000001 Q 0.097 -0.555 0.089 -0.533 Q 0.092 -0.534 0.10200000000000001 -0.534 Q 0.14200000000000002 -0.534 0.153 -0.498 L 0.153 -0.497 Q 0.155 -0.49 0.155 -0.482 Q 0.155 -0.442 0.117 -0.431 Q 0.109 -0.429 0.10300000000000001 -0.429 Q 0.066 -0.429 0.054 -0.46 Q 0.05 -0.47100000000000003 0.05 -0.485 Q 0.05 -0.562 0.109 -0.617 Q 0.162 -0.666 0.23700000000000002 -0.666 Q 0.34700000000000003 -0.666 0.40800000000000003 -0.592 Q 0.443 -0.549 0.448 -0.49 Q 0.449 -0.481 0.449 -0.47200000000000003 Q 0.449 -0.399 0.394 -0.333 Q 0.365 -0.299 0.304 -0.243 L 0.243 -0.189 L 0.233 -0.18 L 0.127 -0.077 L 0.307 -0.077 Q 0.395 -0.077 0.402 -0.085 Q 0.41200000000000003 -0.099 0.424 -0.17400000000000002 L 0.449 -0.17400000000000002 Z"/></g><g transform="translate(6.254052631578948,4.644)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.088 -0.059000000000000004 L 0.088 -0.059000000000000004 L 0.146 -0.29 Q 0.162 -0.354 0.162 -0.374 Q 0.162 -0.42 0.131 -0.42 Q 0.09 -0.42 0.064 -0.325 Q 0.061 -0.314 0.058 -0.301 Q 0.047 -0.279 0.041 -0.278 Q 0.029 -0.278 0.029 -0.28800000000000003 Q 0.029 -0.304 0.048 -0.356 Q 0.054 -0.373 0.06 -0.385 Q 0.084 -0.434 0.12 -0.441 Q 0.127 -0.442 0.134 -0.442 Q 0.188 -0.442 0.214 -0.397 Q 0.224 -0.378 0.226 -0.355 Q 0.29 -0.442 0.382 -0.442 Q 0.433 -0.442 0.464 -0.41600000000000004 Q 0.492 -0.392 0.496 -0.34500000000000003 Q 0.5640000000000001 -0.442 0.659 -0.442 Q 0.748 -0.442 0.769 -0.373 L 0.769 -0.372 Q 0.774 -0.355 0.774 -0.335 Q 0.774 -0.28200000000000003 0.713 -0.115 Q 0.6950000000000001 -0.07100000000000001 0.6950000000000001 -0.044 Q 0.6950000000000001 -0.011 0.719 -0.011 Q 0.781 -0.011 0.8170000000000001 -0.121 L 0.8210000000000001 -0.135 Q 0.8260000000000001 -0.151 0.8310000000000001 -0.152 L 0.8310000000000001 -0.153 L 0.836 -0.153 Q 0.848 -0.153 0.848 -0.14300000000000002 Q 0.848 -0.126 0.8270000000000001 -0.08 Q 0.784 0.011 0.717 0.011 Q 0.666 0.011 0.644 -0.032 Q 0.635 -0.05 0.635 -0.07100000000000001 Q 0.635 -0.091 0.648 -0.126 Q 0.71 -0.29 0.71 -0.35000000000000003 Q 0.71 -0.42 0.656 -0.42 Q 0.5680000000000001 -0.42 0.51 -0.325 Q 0.494 -0.3 0.491 -0.28700000000000003 Q 0.488 -0.274 0.431 -0.046 Q 0.42 -0.003 0.406 0.006 L 0.405 0.007 L 0.404 0.007 Q 0.397 0.011 0.386 0.011 Q 0.361 0.006 0.357 -0.016 L 0.37 -0.075 L 0.39 -0.151 L 0.418 -0.267 Q 0.433 -0.323 0.433 -0.35000000000000003 Q 0.433 -0.42 0.379 -0.42 Q 0.289 -0.42 0.228 -0.32 Q 0.221 -0.309 0.216 -0.298 L 0.203 -0.248 Q 0.198 -0.225 0.186 -0.181 L 0.164 -0.091 Q 0.147 -0.022 0.145 -0.017 Q 0.136 0.009000000000000001 0.108 0.011 Q 0.083 0.006 0.079 -0.016 Q 0.079 -0.014 0.088 -0.059000000000000004 Z"/></g></g><path fill="rgb(77,77,255)" stroke="none" paint-order="stroke fill markers" d=" M 41.275680835 144.43262806999985 C 41.275680835 144.98491281983064 40.82796558483079 145.43262806999985 40.275680835 145.43262806999985 C 39.723396085169206 145.43262806999985 39.275680835 144.98491281983064 39.275680835 144.43262806999985 C 39.275680835 143.88034332016906 39.723396085169206 143.43262806999985 40.275680835 143.43262806999985 C 40.82796558483079 143.43262806999985 41.275680835 143.88034332016906 41.275680835 144.43262806999985 Z" fill-opacity="1"/><text fill="rgb(77,77,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="36" y="135" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">P</text><text fill="none" stroke="rgb(255,255,255)" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="36" y="135" text-anchor="start" dominant-baseline="alphabetic" stroke-opacity="1" stroke-linejoin="bevel" stroke-miterlimit="10" stroke-width="3">P</text><text fill="rgb(77,77,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="36" y="135" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">P</text><path fill="rgb(77,77,255)" stroke="none" paint-order="stroke fill markers" d=" M 229.0000000000001 53.99999999999986 C 229.0000000000001 54.55228474983065 228.5522847498309 54.99999999999986 228.0000000000001 54.99999999999986 C 227.44771525016932 54.99999999999986 227.0000000000001 54.55228474983065 227.0000000000001 53.99999999999986 C 227.0000000000001 53.44771525016906 227.44771525016932 52.99999999999986 228.0000000000001 52.99999999999986 C 228.5522847498309 52.99999999999986 229.0000000000001 53.44771525016906 229.0000000000001 53.99999999999986 Z" fill-opacity="1"/><text fill="rgb(77,77,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="223" y="50" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">Q</text><text fill="none" stroke="rgb(255,255,255)" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="223" y="50" text-anchor="start" dominant-baseline="alphabetic" stroke-opacity="1" stroke-linejoin="bevel" stroke-miterlimit="10" stroke-width="3">Q</text><text fill="rgb(77,77,255)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="223" y="50" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">Q</text></g></g></svg>
        </div>
    </section>
    <section>
        <h2>Triangle Law of Vector addition</h2>
        <p>Just having magnitude and direction does not necessarily mean that a quantity is a vector. It <em>must</em> obey rules of vector algebra. One easy test whether a quantity is a vector, is to check whether the addition of the quantity follows what we call <em>triangle law of vector addition</em>.</p>
        <p>
            Given two vectors {`\\(\\vec{a}\\)`} and {`\\(\\vec{b}\\)`}, their <em>sum</em> is obtained by the following process: 
        </p>
        <ol>
            <li>Draw {`\\(\\vec{a}\\)`}</li>
            <li>Draw {`\\(\\vec{b}\\)`} such that the <em>tail</em> of {`\\(\\vec{b}\\)`} lies at the <em>head</em> of {`\\(\\vec{a}\\)`}.</li>
            <li>Draw an arrow from the <em>tail</em> of {`\\(\\vec{a}\\)`} to the <em>head</em> of {`\\(\\vec{b}\\)`}. This new arrow defines a new vector (say {`\\(\\vec{c}\\)`}) whose magnitude is equal to the length of the arrow.
            </li>
        </ol>
        <p>Vector {`\\(\\vec{c}\\)`} is the <em>sum</em> of {`\\(\\vec{a}\\)`} and {`\\(\\vec{b}\\)`} and is written as {`\\[\\vec{c} = \\vec{a} + \\vec{b}\\]`}</p>
        <div class="image">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 500 200">
                <g transform="scale(1,1)">
                    <g>
                        <path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 24.835758779012885 126.06233027361802 L 118.04731286702852 91.51539064659134" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/>
                        <path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" fill-rule="evenodd" d=" M 133.98769673917002 85.60741620446899 L 119.52430647755911 95.50048661462672 L 116.57031925649794 87.53029467855596 Z" fill-opacity="0.6980392156862745"/>
                        <g transform="scale(19,19)">
                            <g transform="translate(3.1578947368421053,5.1876842105263155)">
                                <path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.537 -0.595 L 0.217 -0.595 Q 0.186 -0.595 0.183 -0.609 Q 0.182 -0.612 0.182 -0.615 Q 0.188 -0.635 0.217 -0.635 L 0.554 -0.635 Q 0.534 -0.661 0.53 -0.6930000000000001 Q 0.53 -0.709 0.544 -0.713 Q 0.547 -0.714 0.55 -0.714 Q 0.5650000000000001 -0.714 0.5700000000000001 -0.6920000000000001 Q 0.583 -0.654 0.611 -0.635 Q 0.625 -0.625 0.625 -0.615 Q 0.625 -0.604 0.608 -0.594 Q 0.5630000000000001 -0.5720000000000001 0.529 -0.529 Q 0.518 -0.516 0.51 -0.516 Q 0.496 -0.516 0.491 -0.53 Q 0.49 -0.533 0.49 -0.536 Q 0.49 -0.552 0.537 -0.595 Z"/>
                            </g>
                            <g transform="translate(3.2203947368421053,5.1876842105263155)">
                                <path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.373 -0.378 Q 0.378 -0.41200000000000003 0.404 -0.42 Q 0.40900000000000003 -0.422 0.41500000000000004 -0.422 Q 0.441 -0.422 0.444 -0.395 Q 0.444 -0.389 0.437 -0.361 L 0.401 -0.221 Q 0.386 -0.158 0.379 -0.131 Q 0.366 -0.079 0.366 -0.057 Q 0.366 -0.011 0.396 -0.011 Q 0.434 -0.011 0.46 -0.091 Q 0.465 -0.108 0.47200000000000003 -0.135 Q 0.48 -0.152 0.486 -0.153 Q 0.498 -0.153 0.498 -0.14300000000000002 Q 0.498 -0.128 0.48 -0.073 Q 0.47400000000000003 -0.056 0.468 -0.044 Q 0.44 0.011 0.394 0.011 Q 0.338 0.011 0.313 -0.037 Q 0.306 -0.049 0.303 -0.064 Q 0.24 0.011 0.17300000000000001 0.011 Q 0.098 0.011 0.062 -0.057 Q 0.04 -0.097 0.04 -0.149 Q 0.04 -0.257 0.115 -0.34900000000000003 Q 0.185 -0.433 0.267 -0.441 Q 0.274 -0.442 0.281 -0.442 Q 0.342 -0.442 0.373 -0.378 M 0.308 -0.11900000000000001 L 0.308 -0.11900000000000001 L 0.358 -0.315 Q 0.361 -0.33 0.361 -0.332 Q 0.361 -0.353 0.343 -0.383 Q 0.321 -0.42 0.28200000000000003 -0.42 Q 0.23 -0.42 0.183 -0.352 Q 0.17400000000000002 -0.339 0.166 -0.324 Q 0.137 -0.266 0.117 -0.159 Q 0.111 -0.125 0.111 -0.105 Q 0.111 -0.037 0.149 -0.017 Q 0.16 -0.011 0.17500000000000002 -0.011 Q 0.231 -0.011 0.28800000000000003 -0.082 Q 0.302 -0.098 0.307 -0.115 L 0.307 -0.116 Q 0.308 -0.11800000000000001 0.308 -0.11900000000000001 Z"/></g></g><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 221.96644863585308 158.34153519947165 L 252.17731564164902 72.85120941711338" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" fill-rule="evenodd" d=" M 257.84156111226844 56.822599893871285 L 256.18446802245955 74.26727078476823 L 248.17016326083848 71.43514804945853 Z" fill-opacity="0.6980392156862745"/><g transform="scale(19,19)"><g transform="translate(13,6.135052631578947)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.537 -0.595 L 0.217 -0.595 Q 0.186 -0.595 0.183 -0.609 Q 0.182 -0.612 0.182 -0.615 Q 0.188 -0.635 0.217 -0.635 L 0.554 -0.635 Q 0.534 -0.661 0.53 -0.6930000000000001 Q 0.53 -0.709 0.544 -0.713 Q 0.547 -0.714 0.55 -0.714 Q 0.5650000000000001 -0.714 0.5700000000000001 -0.6920000000000001 Q 0.583 -0.654 0.611 -0.635 Q 0.625 -0.625 0.625 -0.615 Q 0.625 -0.604 0.608 -0.594 Q 0.5630000000000001 -0.5720000000000001 0.529 -0.529 Q 0.518 -0.516 0.51 -0.516 Q 0.496 -0.516 0.491 -0.53 Q 0.49 -0.533 0.49 -0.536 Q 0.49 -0.552 0.537 -0.595 Z"/></g><g transform="translate(13.1125,6.398052631578947)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.23900000000000002 -0.683 L 0.165 -0.382 Q 0.223 -0.442 0.28200000000000003 -0.442 Q 0.357 -0.442 0.394 -0.373 Q 0.41500000000000004 -0.333 0.41500000000000004 -0.28200000000000003 Q 0.41500000000000004 -0.176 0.341 -0.084 Q 0.272 0.001 0.189 0.01 Q 0.181 0.011 0.17400000000000002 0.011 Q 0.10200000000000001 0.011 0.067 -0.056 Q 0.047 -0.094 0.047 -0.146 Q 0.047 -0.18 0.063 -0.247 L 0.145 -0.5730000000000001 Q 0.159 -0.632 0.159 -0.635 Q 0.159 -0.646 0.145 -0.649 L 0.145 -0.649 Q 0.133 -0.652 0.109 -0.652 Q 0.08700000000000001 -0.652 0.085 -0.664 Q 0.085 -0.681 0.10400000000000001 -0.684 L 0.226 -0.6940000000000001 Q 0.23900000000000002 -0.6940000000000001 0.23900000000000002 -0.683 M 0.145 -0.305 L 0.123 -0.213 Q 0.107 -0.15 0.107 -0.112 Q 0.107 -0.026000000000000002 0.159 -0.013000000000000001 Q 0.166 -0.011 0.17400000000000002 -0.011 Q 0.227 -0.011 0.273 -0.081 Q 0.28300000000000003 -0.096 0.292 -0.114 Q 0.319 -0.171 0.337 -0.268 Q 0.343 -0.303 0.343 -0.326 Q 0.343 -0.406 0.294 -0.418 L 0.293 -0.419 Q 0.28700000000000003 -0.42 0.28 -0.42 Q 0.22 -0.42 0.16 -0.34 Q 0.152 -0.33 0.145 -0.305 Z"/></g></g><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 326.5278987995599 179.49869195737108 L 419.73945288757534 144.95175233034442" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" fill-rule="evenodd" d=" M 435.67983675971686 139.04377788822205 L 421.21644649810594 148.9368482983798 L 418.26245927704474 140.96665636230904 Z" fill-opacity="0.6980392156862745"/><g transform="scale(19,19)"><g transform="translate(20.210526315789473,9.556105263157896)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.537 -0.595 L 0.217 -0.595 Q 0.186 -0.595 0.183 -0.609 Q 0.182 -0.612 0.182 -0.615 Q 0.188 -0.635 0.217 -0.635 L 0.554 -0.635 Q 0.534 -0.661 0.53 -0.6930000000000001 Q 0.53 -0.709 0.544 -0.713 Q 0.547 -0.714 0.55 -0.714 Q 0.5650000000000001 -0.714 0.5700000000000001 -0.6920000000000001 Q 0.583 -0.654 0.611 -0.635 Q 0.625 -0.625 0.625 -0.615 Q 0.625 -0.604 0.608 -0.594 Q 0.5630000000000001 -0.5720000000000001 0.529 -0.529 Q 0.518 -0.516 0.51 -0.516 Q 0.496 -0.516 0.491 -0.53 Q 0.49 -0.533 0.49 -0.536 Q 0.49 -0.552 0.537 -0.595 Z"/></g><g transform="translate(20.273026315789473,9.556105263157896)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.373 -0.378 Q 0.378 -0.41200000000000003 0.404 -0.42 Q 0.40900000000000003 -0.422 0.41500000000000004 -0.422 Q 0.441 -0.422 0.444 -0.395 Q 0.444 -0.389 0.437 -0.361 L 0.401 -0.221 Q 0.386 -0.158 0.379 -0.131 Q 0.366 -0.079 0.366 -0.057 Q 0.366 -0.011 0.396 -0.011 Q 0.434 -0.011 0.46 -0.091 Q 0.465 -0.108 0.47200000000000003 -0.135 Q 0.48 -0.152 0.486 -0.153 Q 0.498 -0.153 0.498 -0.14300000000000002 Q 0.498 -0.128 0.48 -0.073 Q 0.47400000000000003 -0.056 0.468 -0.044 Q 0.44 0.011 0.394 0.011 Q 0.338 0.011 0.313 -0.037 Q 0.306 -0.049 0.303 -0.064 Q 0.24 0.011 0.17300000000000001 0.011 Q 0.098 0.011 0.062 -0.057 Q 0.04 -0.097 0.04 -0.149 Q 0.04 -0.257 0.115 -0.34900000000000003 Q 0.185 -0.433 0.267 -0.441 Q 0.274 -0.442 0.281 -0.442 Q 0.342 -0.442 0.373 -0.378 M 0.308 -0.11900000000000001 L 0.308 -0.11900000000000001 L 0.358 -0.315 Q 0.361 -0.33 0.361 -0.332 Q 0.361 -0.353 0.343 -0.383 Q 0.321 -0.42 0.28200000000000003 -0.42 Q 0.23 -0.42 0.183 -0.352 Q 0.17400000000000002 -0.339 0.166 -0.324 Q 0.137 -0.266 0.117 -0.159 Q 0.111 -0.125 0.111 -0.105 Q 0.111 -0.037 0.149 -0.017 Q 0.16 -0.011 0.17500000000000002 -0.011 Q 0.231 -0.011 0.28800000000000003 -0.082 Q 0.302 -0.098 0.307 -0.115 L 0.307 -0.116 Q 0.308 -0.11800000000000001 0.308 -0.11900000000000001 Z"/></g></g><path fill="none" stroke="rgb(0,0,0)" paint-order="fill stroke markers" d=" M 435.6942683234291 139.0040429063012 L 465.90513532922523 53.5137171239431" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" fill-rule="evenodd" d=" M 471.5693807998447 37.48510760070101 L 469.91228771003574 54.929778491597965 L 461.8979829484147 52.09765575628824 Z" fill-opacity="0.6980392156862745"/><g transform="scale(19,19)"><g transform="translate(24.05263157894737,5.556105263157894)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.537 -0.595 L 0.217 -0.595 Q 0.186 -0.595 0.183 -0.609 Q 0.182 -0.612 0.182 -0.615 Q 0.188 -0.635 0.217 -0.635 L 0.554 -0.635 Q 0.534 -0.661 0.53 -0.6930000000000001 Q 0.53 -0.709 0.544 -0.713 Q 0.547 -0.714 0.55 -0.714 Q 0.5650000000000001 -0.714 0.5700000000000001 -0.6920000000000001 Q 0.583 -0.654 0.611 -0.635 Q 0.625 -0.625 0.625 -0.615 Q 0.625 -0.604 0.608 -0.594 Q 0.5630000000000001 -0.5720000000000001 0.529 -0.529 Q 0.518 -0.516 0.51 -0.516 Q 0.496 -0.516 0.491 -0.53 Q 0.49 -0.533 0.49 -0.536 Q 0.49 -0.552 0.537 -0.595 Z"/></g><g transform="translate(24.16513157894737,5.819105263157894)"><path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.23900000000000002 -0.683 L 0.165 -0.382 Q 0.223 -0.442 0.28200000000000003 -0.442 Q 0.357 -0.442 0.394 -0.373 Q 0.41500000000000004 -0.333 0.41500000000000004 -0.28200000000000003 Q 0.41500000000000004 -0.176 0.341 -0.084 Q 0.272 0.001 0.189 0.01 Q 0.181 0.011 0.17400000000000002 0.011 Q 0.10200000000000001 0.011 0.067 -0.056 Q 0.047 -0.094 0.047 -0.146 Q 0.047 -0.18 0.063 -0.247 L 0.145 -0.5730000000000001 Q 0.159 -0.632 0.159 -0.635 Q 0.159 -0.646 0.145 -0.649 L 0.145 -0.649 Q 0.133 -0.652 0.109 -0.652 Q 0.08700000000000001 -0.652 0.085 -0.664 Q 0.085 -0.681 0.10400000000000001 -0.684 L 0.226 -0.6940000000000001 Q 0.23900000000000002 -0.6940000000000001 0.23900000000000002 -0.683 M 0.145 -0.305 L 0.123 -0.213 Q 0.107 -0.15 0.107 -0.112 Q 0.107 -0.026000000000000002 0.159 -0.013000000000000001 Q 0.166 -0.011 0.17400000000000002 -0.011 Q 0.227 -0.011 0.273 -0.081 Q 0.28300000000000003 -0.096 0.292 -0.114 Q 0.319 -0.171 0.337 -0.268 Q 0.343 -0.303 0.343 -0.326 Q 0.343 -0.406 0.294 -0.418 L 0.293 -0.419 Q 0.28700000000000003 -0.42 0.28 -0.42 Q 0.22 -0.42 0.16 -0.34 Q 0.152 -0.33 0.145 -0.305 Z"/></g></g><path fill="none" stroke="rgb(255,0,0)" paint-order="fill stroke markers" d=" M 326.5278987995599 179.49869195737108 L 459.4224439867476 49.37846398393559" stroke-opacity="0.6980392156862745" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/><path fill="rgb(255,0,0)" stroke="none" paint-order="stroke fill markers" fill-rule="evenodd" d=" M 471.5693807998447 37.48510760070096 L 462.3957830825563 52.415198187209846 L 456.44910489093894 46.34172978066133 Z" fill-opacity="0.6980392156862745"/><g transform="scale(19,19)"><g transform="translate(19.842105263157894,5.714)">
                                    <path fill="rgb(255,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.537 -0.595 L 0.217 -0.595 Q 0.186 -0.595 0.183 -0.609 Q 0.182 -0.612 0.182 -0.615 Q 0.188 -0.635 0.217 -0.635 L 0.554 -0.635 Q 0.534 -0.661 0.53 -0.6930000000000001 Q 0.53 -0.709 0.544 -0.713 Q 0.547 -0.714 0.55 -0.714 Q 0.5650000000000001 -0.714 0.5700000000000001 -0.6920000000000001 Q 0.583 -0.654 0.611 -0.635 Q 0.625 -0.625 0.625 -0.615 Q 0.625 -0.604 0.608 -0.594 Q 0.5630000000000001 -0.5720000000000001 0.529 -0.529 Q 0.518 -0.516 0.51 -0.516 Q 0.496 -0.516 0.491 -0.53 Q 0.49 -0.533 0.49 -0.536 Q 0.49 -0.552 0.537 -0.595 Z"/>
                                </g>
                                <g transform="translate(19.896605263157895,5.714)">
                                    <path fill="rgb(255,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.396 -0.38 L 0.396 -0.38 Q 0.368 -0.41600000000000004 0.31 -0.42 Q 0.245 -0.42 0.192 -0.354 Q 0.179 -0.338 0.169 -0.32 Q 0.129 -0.247 0.117 -0.148 Q 0.115 -0.132 0.115 -0.12 Q 0.115 -0.038 0.171 -0.017 Q 0.185 -0.011 0.20500000000000002 -0.011 Q 0.295 -0.011 0.367 -0.07100000000000001 Q 0.388 -0.088 0.405 -0.11 Q 0.41200000000000003 -0.12 0.418 -0.12 Q 0.427 -0.12 0.43 -0.107 Q 0.43 -0.096 0.396 -0.064 Q 0.313 0.011 0.203 0.011 Q 0.108 0.011 0.065 -0.065 Q 0.041 -0.106 0.041 -0.158 Q 0.041 -0.26 0.11900000000000001 -0.34700000000000003 Q 0.196 -0.433 0.291 -0.441 Q 0.3 -0.442 0.309 -0.442 Q 0.386 -0.442 0.41600000000000004 -0.395 Q 0.427 -0.377 0.427 -0.356 Q 0.427 -0.312 0.392 -0.296 Q 0.382 -0.292 0.371 -0.292 Q 0.341 -0.292 0.335 -0.318 Q 0.334 -0.322 0.334 -0.327 Q 0.334 -0.34900000000000003 0.352 -0.366 Q 0.366 -0.38 0.396 -0.38 Z"/>
                                </g>
                            </g>
                            <g transform="scale(19,19)">
                                <g transform="translate(8.210526315789474,5.898789473684211)">
                                    <path fill="rgb(0,0,0)" stroke="none" paint-order="stroke fill markers" d=" M 0.40900000000000003 -0.23 L 0.40900000000000003 0.05 Q 0.40900000000000003 0.082 0.389 0.083 Q 0.369 0.083 0.369 0.05 L 0.369 -0.23 L 0.089 -0.23 Q 0.057 -0.23 0.056 -0.25 Q 0.056 -0.27 0.089 -0.27 L 0.369 -0.27 L 0.369 -0.55 Q 0.369 -0.582 0.389 -0.583 Q 0.40900000000000003 -0.583 0.40900000000000003 -0.55 L 0.40900000000000003 -0.27 L 0.6880000000000001 -0.27 Q 0.72 -0.27 0.721 -0.25 Q 0.721 -0.23 0.6880000000000001 -0.23 L 0.40900000000000003 -0.23 Z"/>
                            </g>
                        </g>
                        <text fill="rgb(0,0,0)" stroke="none" font-family="geogebra-sans-serif, sans-serif" font-size="16px" font-style="normal" font-weight="normal" text-decoration="normal" x="306" y="113" text-anchor="start" dominant-baseline="alphabetic" fill-opacity="1">=</text>
                    </g>
                </g>
            </svg>
        </div>
        <p>Electric current in a physical quantity that has both magnitude and direction, but does not follow the triangle law of vector addition. Hence it is not a vector quantity.</p>
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