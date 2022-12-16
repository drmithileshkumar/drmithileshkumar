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
    <meta name="description" content="What are pseudo forces?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <p>
        Newton's laws of motion work only in an inertial frame of reference. But why?
    </p>
    <p>
        Consider a particle {'\\(P\\)'} whose motion is analysed using two frames of reference {'\\(O\\)'} and {"\\(O'\\)"} where {"\\(O'\\)"} has acceleration {'\\(\\vec{a}_0\\)'} with respect to {"\\(O\\)"}. In addition, assume {'\\(O\\)'} to be an inertial frame. Then, {"\\(O'\\)"} will be non-inertial with respect to {'\\(O\\)'}.
    </p>
    <div class="image">
        <svg width="50%" height="100%" viewBox="-275.75 -313.55999755859375 350 250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                    <marker 
                        id='Arrow'
                        refX='5'
                        refY='5'
                        markerWidth='6'
                        markerHeight='6'
                        markerUnits='strokeWidth'
                        orient='auto-start-reverse'
                        viewBox='0 0 10 10'
                        preserveAspectRatio='xMidYMid meet'
                    >
                        <path 
                            d="M 0 0 L 10 5 L 0 10 z"
                            fill='rgba(0, 0, 0, 1)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='none'
                            opacity='1'
                            filter='none'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                    </marker>
                </defs><g>
                    <g  
                        class='draggable'
                        id='Layer-0'
                        fill='none'
                        stroke='none'
                        stroke-width='0'
                        stroke-dasharray='none'
                        opacity='1'
                        mask='none'
                        filter='none'
                        transform='matrix(1 0 0 1 0 0)'
                    >
                    
                    <path  
                        id='WebdutTeam17R28Path-2'
                        d='M -226,-296 V -103 H 47'
                        fill='rgba(0, 0, 0, 0)'
                        fill-rule='evenodd'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='1'
                        stroke-dasharray='none'
                        stroke-linecap='butt'
                        stroke-linejoin='miter'
                        stroke-miterlimit='4'
                        opacity='1'
                        filter='none'
                        mask='none'
                        marker-start='none'
                        marker-mid='none'
                        marker-end='none'
                        transform='matrix(1 0 0 1 0 0)'
                    />
                    
                    <path  
                        id='WebdutTeam17R28Path-3'
                        d='M -233,-243 V -103 H -29'
                        fill='rgba(0, 0, 0, 0)'
                        fill-rule='evenodd'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='1'
                        stroke-dasharray='none'
                        stroke-linecap='butt'
                        stroke-linejoin='miter'
                        stroke-miterlimit='4'
                        opacity='1'
                        filter='none'
                        mask='none'
                        marker-start='none'
                        marker-mid='none'
                        marker-end='none'
                        transform='matrix(1 0 0 1 48 -33)'
                    />
                    
                    <g  
                        id='WebdutTeam17R28Latex-4'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.0206611562037928 0 0 0.0206611562037928 -249.53305781018963 -81.57454603252987)'
                    ><defs><path id="MJX-2862-TEX-I-1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D442" xlink:href="#MJX-2862-TEX-I-1D442"></use></g></g></g>
                    </g>
                    
                    <g  
                        id='WebdutTeam17R28Latex-5'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.018052279055100616 0 0 0.018052279055100616 -204.40261395275502 -119.66475022256333)'
                    ><defs><path id="MJX-2863-TEX-I-1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path><path id="MJX-2863-TEX-V-2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><use data-c="1D442" xlink:href="#MJX-2863-TEX-I-1D442"></use></g><g data-mml-node="mo" transform="translate(796,413) scale(0.707)"><use data-c="2032" xlink:href="#MJX-2863-TEX-V-2032"></use></g></g></g></g>
                    </g>
                    
                    <circle  
                        id='WebdutTeam17R28Circle-6'
                        cx='0'
                        cy='0'
                        r='6'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='0'
                        stroke-dasharray='none'
                        opacity='1'
                        filter='none'
                        mask='none'
                        transform='matrix(1 0 0 1 -103 -212)'
                    />
                    
                    <g  
                        id='WebdutTeam17R28Latex-7'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.014641287617054527 0 0 0.014641287617054527 -91.49316249136281 -206.49000055755175)'
                    ><defs><path id="MJX-2864-TEX-I-1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D443" xlink:href="#MJX-2864-TEX-I-1D443"></use></g></g></g>
                    </g>
                    
                    <path  
                        id='WebdutTeam17R28Path-8'
                        d='M -340,66 H -276'
                        fill='rgba(0, 0, 0, 0)'
                        fill-rule='evenodd'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='2'
                        stroke-dasharray='none'
                        stroke-linecap='butt'
                        stroke-linejoin='miter'
                        stroke-miterlimit='4'
                        opacity='1'
                        filter='none'
                        mask='none'
                        marker-start='none'
                        marker-mid='none'
                        marker-end='url(#Arrow)'
                        transform='matrix(1 0 0 1 178 -337)'
                    />
                    
                    <g  
                        id='WebdutTeam17R28Latex-9'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.03 0 0 0.03 -88 -266)'
                    ><defs><path id="MJX-2865-TEX-I-1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path><path id="MJX-2865-TEX-N-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><use data-c="1D44E" xlink:href="#MJX-2865-TEX-I-1D44E"></use></g><g data-mml-node="mn" transform="translate(562,-150) scale(0.707)"><use data-c="30" xlink:href="#MJX-2865-TEX-N-30"></use></g></g></g></g>
                    </g>
                    </g></g></svg>
    </div>
    <p>
        We can write the acceleration of the particle {'\\(P\\)'} with respect to {"\\(O'\\)"} as {`\\[
            \\begin{aligned}
            \\vec{a}_{P, O'} &= \\vec{a}_{P, O} + \\vec{a}_{O, O'}\\\\
            &= \\vec{a}_{P, O} - \\vec{a}_0
            \\end{aligned}
            \\]`}
        Let {'\\(\\vec{F}\\)'} be the net force acting on the particle as observed from {'\\(O\\)'}. By Newton's 2nd law of motion, {"\\[\\vec{F} = m\\vec{a}_{P, O}\\]"} That implies that 
        {`\\[
            \\begin{aligned}
            m\\vec{a}_{P, O'} &= m\\vec{a}_{P, O} - m\\vec{a}_0\\\\
            &= \\vec{F} - m\\vec{a}_0\\\\
            \\implies \\vec{F} &\\neq m\\vec{a}_{P, O'}
            \\end{aligned}
            \\]`}
        That is, the net force acting on the particle is not equal to mass times acceleration when the motion is observed from a non-inertial frame of reference.
    </p>
    <p>
        The additional term {'\\(-m\\vec{a}_0\\)'} is called <em>pseudo force</em>. It appears that acceleration of a frame <em>creates</em> an imaginary force that acts on the particle and its direction is opposite to the direction of the acceleration of the non-inertial frame.
    </p>
    <p>
        Curiously, pseudo forces are proportional to the masses of the bodies. According to Einstein, gravity is a pseudo force as well.
    </p>
    <!-- <section>
        <h2>Practice</h2>
        {#if $session.user}
        <Practice {generateProblem}/>
        {:else}
            <Message>You need to be logged in to practice.</Message>
        {/if}
    </section> -->
</article>