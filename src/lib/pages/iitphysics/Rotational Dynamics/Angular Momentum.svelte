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
    import {Dimensions, physicalQuantities} from '../Introduction to Physics/dimension';
    import {session, page} from '$app/stores';
    import {onMount} from 'svelte';
    $selectedChapter = 'Rotational Dynamics';
    $selectedSection = 'Angular Momentum';
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
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<svelte:head>
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://webdut.com{$page.url.pathname}" />
    <meta name="description" content="What is angular momentum?" />
    
</svelte:head>
<article>
    <h1>{$selectedSection}</h1>
    <section>
        <h2>A particle</h2>
        <p>
            Angular momentum of a particle about a point {'\\(O\\)'} is defined as {'\\[\\vec{l} = \\vec{r}\\times\\vec{p}\\]'} where {'\\(\\vec{p}\\)'} is the linear momentum and {'\\(\\vec{r}\\)'} is the position vector of the particle  from the given point {'\\(O\\)'}.
        </p>
        <div class="image"> 
            <svg width="50%" height="50%" viewBox="-316.35499572753906 -209.80038452148438 400 350" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                </defs>
                <g>
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
                        id='WebdutTeam19R66Path-2'
                        d='M -217,-282 V -11 H 108'
                        fill='rgba(0, 0, 0, 0)'
                        fill-rule='evenodd'
                        stroke='rgba(0, 0, 0, 0.5)'
                        stroke-width='2'
                        stroke-dasharray='none'
                        stroke-linecap='butt'
                        stroke-linejoin='miter'
                        stroke-miterlimit='4'
                        opacity='1'
                        filter='none'
                        mask='none'
                        marker-start='url(#Arrow)'
                        marker-mid='none'
                        marker-end='url(#Arrow)'
                        transform='matrix(1 0 0 1 -52 99)'
                    />
                        
                    <path  
                        id='WebdutTeam19R66Path-3'
                        d='M -293,44 C -273,8.200000000000003 -213.6,-56 -177,-59 C -140.4,-62 -110.80000000000001,-29 -76,-37 C -41.19999999999999,-45 -33.2,-103.2 -9,-122'
                        fill='rgba(0, 0, 0, 0)'
                        fill-rule='evenodd'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='2'
                        stroke-dasharray='4'
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
                        id='WebdutTeam19R66Path-5'
                        d='M -267,89 L -172,-59 L -138,-110'
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
                        marker-mid='url(#Arrow)'
                        marker-end='url(#Arrow)'
                        transform='matrix(1 0 0 1 -2 -1)'
                    />
                        
                    <path  
                        id='WebdutTeam19R66Path-6'
                        d='M -173,-61 L -119,-54'
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
                        transform='matrix(1 0 0 1 0 0)'
                    />
                        
                    <path  
                        id='WebdutTeam19R66Path-7'
                        d='M 110,-140 A 24.294287326328735 24.294287326328735 0 0 1 123,-116'
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
                        transform='matrix(1 0 0 1 -271 59)'
                    />
                        
                    <g  
                        id='WebdutTeam19R66Latex-8'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.03 0 0 0.03 -197 9)'
                        >
                            <defs>
                            <path id="MJX-2642-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-2642-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-2642-TEX-I-1D45F"></use></g><g data-mml-node="mo" transform="translate(281.1,31) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-2642-TEX-N-20D7"></use></g></g></g></g></g>
                    </g>
                        
                    <g  
                        id='WebdutTeam19R66Latex-9'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.03 0 0 0.03 -108 -53)'
                        ><defs><path id="MJX-2643-TEX-I-1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path><path id="MJX-2643-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D45D" xlink:href="#MJX-2643-TEX-I-1D45D"></use></g><g data-mml-node="mo" transform="translate(334.8,31) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-2643-TEX-N-20D7"></use></g></g></g></g></g>
                    </g>
                        
                    <circle  
                        id='WebdutTeam19R66Circle-10'
                        cx='0'
                        cy='0'
                        r='6'
                        fill='rgba(255, 0, 0, 1)'
                        stroke='rgba(0, 0, 0, 1)'
                        stroke-width='0'
                        stroke-dasharray='none'
                        opacity='1'
                        filter='none'
                        mask='none'
                        transform='matrix(1 0 0 1 -172 -61)'
                    />
                        
                    <g  
                        id='WebdutTeam19R66Latex-11'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.03 0 0 0.03 -278 117)'
                        ><defs><path id="MJX-2644-TEX-I-1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D442" xlink:href="#MJX-2644-TEX-I-1D442"></use></g></g></g>
                    </g>
                        
                    <g  
                        id='WebdutTeam19R66Latex-12'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.03 0 0 0.03 49 115)'
                        ><defs><path id="MJX-2645-TEX-I-1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D465" xlink:href="#MJX-2645-TEX-I-1D465"></use></g></g></g>
                    </g>
                        
                    <g  
                        id='WebdutTeam19R66Latex-13'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.03 0 0 0.03 -298 -174)'
                        ><defs><path id="MJX-2646-TEX-I-1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D466" xlink:href="#MJX-2646-TEX-I-1D466"></use></g></g></g>
                    </g>
                        
                    <g  
                        id='WebdutTeam19R66Latex-14'
                        fill='rgba(0, 0, 0, 1)'
                        stroke='undefined'
                        stroke-width='undefined'
                        stroke-dasharray='undefined'
                        opacity='1'
                        filter='none'
                        mask='undefined'
                        transform='matrix(0.022272807387971324 0 0 0.022272807387971324 -146.72954825857897 -66.44767079148022)'
                        ><defs><path id="MJX-2647-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-2647-TEX-I-1D703"></use></g></g></g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <h5>Magnitude</h5>
        <p>
            Suppose the mass of the particle is {'\\(m\\)'} and velocity is {'\\(\\vec{v}\\)'}. Let {'\\(\\theta\\)'} be the angle between {'\\(\\vec{r}\\)'} and {'\\(\\vec{v}\\)'}, then the magnitude of the angular momentum is given by {'\\[l = mvr\\sin\\theta\\]'} The angle {'\\(\\theta\\)'} is between {'\\(0^\\circ\\)'} and {'\\(180^\\circ\\)'}.
        </p>
        <h5>Direction</h5>
        <p>
            As the angular momentum is cross product of vectors {'\\(\\vec{r}\\)'} and {'\\(\\vec{p}\\)'}, its direction is perpendicular to the plane <em>containing</em> them. But, there are two directions that are perpendicular to a given plane. Consider an arc that starts from {'\\(\\vec{r}\\)'} and ends at {'\\(\\vec{p}\\)'}. If this arc sweeps in a clockwise direction, then the direction of the angular momentum is into the plane, otherwise above the plane.
        </p>
        <div class="image">
            <svg width="100%" height="100%" viewBox="-396.5 -244.28921508789062 800 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                        
                        <g  
                            class='draggable'
                            id='WebdutTeam20R8Group-14'
                            fill='rgba(0, 0, 0, 0)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='none'
                            opacity='1'
                            mask='none'
                            filter='none'
                            transform='matrix(1 0 0 1 15 -20)'
                        >
                        
                        <path  
                            id='WebdutTeam20R8Path-2'
                            d='M -353,-104 L -405,70 H -65 L -13,-104 H -353 Z'
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
                            id='WebdutTeam20R8Path-3'
                            d='M -376,19 C -354.4,12 -293.9350995104954,-62.922231693755535 -254,8 C -228.314611243172,53.615639246803035 -199.10922735866538,55.68289985889652 -167,54 C -136.34654841031946,52.39339985423091 -65.4,-47.6 -48,-51'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='2'
                            stroke-dasharray='8'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            marker-start='none'
                            marker-mid='none'
                            marker-end='none'
                            transform='matrix(1 0 0 1 2 -10)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-4'
                            d='M -360,36 L -259,-13 L -174,-54'
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
                            marker-mid='url(#Arrow)'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-5'
                            d='M -259,-13 L -298,-65'
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
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-6'
                            d='M -228.5,-27.5 A 32.696245877739905 32.696245877739905 0 0 0 -278.5,-42.5'
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
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-7'
                            d='M -259,-180 V 132'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='3'
                            stroke-dasharray='none'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            marker-start='url(#Arrow)'
                            marker-mid='none'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <g  
                            id='WebdutTeam20R8Latex-8'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -164 -50)'
                        ><defs><path id="MJX-8167-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-8167-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-8167-TEX-I-1D45F"></use></g><g data-mml-node="mo" transform="translate(281.1,31) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-8167-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam20R8Latex-9'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -321 -71)'
                        ><defs><path id="MJX-8168-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path><path id="MJX-8168-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-8168-TEX-I-1D463"></use></g><g data-mml-node="mo" transform="translate(270.3,32) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-8168-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam20R8Latex-10'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -242 -160)'
                        ><defs><path id="MJX-8169-TEX-I-1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path><path id="MJX-8169-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D459" xlink:href="#MJX-8169-TEX-I-1D459"></use></g><g data-mml-node="mo" transform="translate(232.3,283) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-8169-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam20R8Latex-11'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -247 -48)'
                        ><defs><path id="MJX-8170-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-8170-TEX-I-1D703"></use></g></g></g>
                        </g>
                        </g>
                        <g  
                            class='draggable'
                            id='WebdutTeam20R8Group-15'
                            fill='rgba(0, 0, 0, 0)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='none'
                            opacity='1'
                            mask='none'
                            filter='none'
                            transform='matrix(1 0 0 1 410 -16)'
                        >
                        
                        <path  
                            id='WebdutTeam20R8Path-16'
                            d='M -353,-104 L -405,70 H -65 L -13,-104 H -353 Z'
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
                            id='WebdutTeam20R8Path-17'
                            d='M -376,19 C -354.4,12 -293.9350995104954,-62.922231693755535 -254,8 C -228.314611243172,53.615639246803035 -199.10922735866538,55.68289985889652 -167,54 C -136.34654841031946,52.39339985423091 -65.4,-47.6 -48,-51'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='2'
                            stroke-dasharray='8'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            marker-start='none'
                            marker-mid='none'
                            marker-end='none'
                            transform='matrix(1 0 0 1 2 -10)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-18'
                            d='M -360,36 L -259,-13 L -174,-54'
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
                            marker-mid='url(#Arrow)'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-19'
                            d='M -259,-13 L -227,40'
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
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-20'
                            d='M -228.5,-27.5 A 32.88238148525167 32.88238148525167 0 0 1 -238.5,12.5'
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
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam20R8Path-21'
                            d='M -259,-180 V 132'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='3'
                            stroke-dasharray='none'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            marker-start='url(#Arrow)'
                            marker-mid='none'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <g  
                            id='WebdutTeam20R8Latex-22'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -164 -50)'
                        ><defs><path id="MJX-8171-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-8171-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-8171-TEX-I-1D45F"></use></g><g data-mml-node="mo" transform="translate(281.1,31) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-8171-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam20R8Latex-23'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -221 66)'
                        ><defs><path id="MJX-8172-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path><path id="MJX-8172-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-8172-TEX-I-1D463"></use></g><g data-mml-node="mo" transform="translate(270.3,32) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-8172-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam20R8Latex-24'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -241 137)'
                        ><defs><path id="MJX-8173-TEX-I-1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path><path id="MJX-8173-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D459" xlink:href="#MJX-8173-TEX-I-1D459"></use></g><g data-mml-node="mo" transform="translate(232.3,283) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-8173-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam20R8Latex-25'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -221 9)'
                        ><defs><path id="MJX-8174-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-8174-TEX-I-1D703"></use></g></g></g>
                        </g>
                        </g></g></g></svg>
        </div>
        <p class="remark">
            We notice that the perpendicular distance of velocity vector from {'\\(O\\)'} is {'\\(r_\\perp = r\\sin\\theta\\)'} and the perpendicular component of the velocity to the position vector is {'\\(v_\\perp = v\\sin\\theta\\)'}, hence we can write {`\\[
                \\begin{aligned}
                l &= mvr_\\perp\\\\
                  &=  mv_\\perp r
                \\end{aligned}
                \\]`}
        </p>
        <div class="image">
            <svg width="50%" height="50%" viewBox="-328.52777099609375 -268.83499908447266 400 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                            id='WebdutTeam21R51Path-2'
                            d='M -259,-203 L 21,-62'
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
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam21R51Path-3'
                            d='M -258,-68 L -103,-119 L 22.44444444444443,-162.44444444444446'
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
                            marker-mid='url(#Arrow)'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam21R51Path-4'
                            d='M -257.6666666666667,-67.88888888888889 L -201.11111111111111,-174.11111111111111'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='8'
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
                            id='WebdutTeam21R51Path-5'
                            d='M -65.5555555555556,-132.22222222222226 A 32.76984396068944 32.76984396068944 0 0 1 -67.77777777777777,-107.2222222222222'
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
                            id='WebdutTeam21R51Path-6'
                            d='M -65.5555555555556,-132.22222222222226 A 28.583513651108124 28.583513651108124 0 0 0 -67.77777777777777,-107.2222222222222'
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
                            transform='matrix(1 0 0 1 -61.111111111111114 -4.444444444444457)'
                        />
                        
                        <path  
                            id='WebdutTeam21R51Path-7'
                            d='M -213,-153 L -191.5,-143.5 L -181.5,-164'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='5'
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
                        
                        <g  
                            id='WebdutTeam21R51Latex-8'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -54 -109)'
                        ><defs><path id="MJX-2059-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-2059-TEX-I-1D703"></use></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam21R51Latex-9'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -151 -113)'
                        ><defs><path id="MJX-2060-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-2060-TEX-I-1D703"></use></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam21R51Latex-10'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -167 -74)'
                        ><defs><path id="MJX-2061-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-2061-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-2061-TEX-I-1D45F"></use></g><g data-mml-node="mo" transform="translate(281.1,31) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-2061-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam21R51Latex-11'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -10 -35)'
                        ><defs><path id="MJX-2062-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path><path id="MJX-2062-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-2062-TEX-I-1D463"></use></g><g data-mml-node="mo" transform="translate(270.3,32) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-2062-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam21R51Latex-12'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -265 -125)'
                        ><defs><path id="MJX-2063-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-2063-TEX-N-22A5" d="M369 652Q369 653 370 655T372 658T375 662T379 665T384 667T391 668Q402 666 409 653V40H708Q723 32 723 20T708 0H71Q70 0 67 2T59 9T55 20T59 31T66 38T71 40H369V652Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-2063-TEX-I-1D45F"></use></g><g data-mml-node="mo" transform="translate(484,-150) scale(0.707)"><use data-c="22A5" xlink:href="#MJX-2063-TEX-N-22A5"></use></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam21R51Latex-13'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -281 -44)'
                        ><defs><path id="MJX-2064-TEX-I-1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D442" xlink:href="#MJX-2064-TEX-I-1D442"></use></g></g></g>
                        </g>
                        </g></g>
            </svg>
            <svg width="50%" height="50%" viewBox="-423.8804931640625 -157.6699981689453 500 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                            id='WebdutTeam22R22Path-2'
                            d='M -295,36 L -98,-82 L 65,-186'
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
                            marker-mid='url(#Arrow)'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 -64 54)'
                        />
                        
                        <path  
                            id='WebdutTeam22R22Path-3'
                            d='M -158,-30 L 4,-27'
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
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam22R22Path-5'
                            d='M -159,-31 L -104,39'
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
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam22R22Path-6'
                            d='M -102,43 L 10.5,-28.5'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='8'
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
                            id='WebdutTeam22R22Path-7'
                            d='M -108,-62 A 75.43797957068122 75.43797957068122 0 0 1 -97,-29'
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
                        
                        <g  
                            id='WebdutTeam22R22Latex-8'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -95 -42)'
                        ><defs><path id="MJX-2044-TEX-I-1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D703" xlink:href="#MJX-2044-TEX-I-1D703"></use></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam22R22Latex-9'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -379 116)'
                        ><defs><path id="MJX-2045-TEX-I-1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D442" xlink:href="#MJX-2045-TEX-I-1D442"></use></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam22R22Latex-10'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -277 25)'
                        ><defs><path id="MJX-2046-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path id="MJX-2046-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-2046-TEX-I-1D45F"></use></g><g data-mml-node="mo" transform="translate(281.1,31) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-2046-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam22R22Latex-11'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 15 -20)'
                        ><defs><path id="MJX-2047-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path><path id="MJX-2047-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-2047-TEX-I-1D463"></use></g><g data-mml-node="mo" transform="translate(270.3,32) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-2047-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam22R22Latex-12'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -136 57)'
                        ><defs><path id="MJX-2048-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path><path id="MJX-2048-TEX-N-22A5" d="M369 652Q369 653 370 655T372 658T375 662T379 665T384 667T391 668Q402 666 409 653V40H708Q723 32 723 20T708 0H71Q70 0 67 2T59 9T55 20T59 31T66 38T71 40H369V652Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><use data-c="1D463" xlink:href="#MJX-2048-TEX-I-1D463"></use></g><g data-mml-node="mo" transform="translate(518,-150) scale(0.707)"><use data-c="22A5" xlink:href="#MJX-2048-TEX-N-22A5"></use></g></g></g></g>
                        </g>
                        </g></g>
            </svg>
        </div>
        
        <h3>Examples</h3>
        <p class="question">
            A particle is moving to the right in the horizontal direction at velocity {'\\(v\\)'}. The distance of the perpendicular to the line from the origin is {'\\(d\\)'}. What is the angular velocity of the particle with respect to the origin?
        </p>
        <p class="solution">
            The angular momentum is {'\\(mvr_\\perp = mvd\\)'}.
        </p>
        <p class="question">
            What is the angular momentum of a particle of mass {'\\(m\\)'} moving in a circle of radius {'\\(r\\)'} with velocity {'\\(v\\)'} about the center of the circle?
        </p>
        <p class="solution">
            At any point of time, the angle between the velocity vector and the position vector is {'\\(90^\\circ\\)'}. Therefore, the magnitude of the angular momentum is {'\\[l = mv_\\perp r = mvr\\]'} The direction of the angular momentum is perpendicular to the circle and direction is determined whether the particle is moving clockwise or anti-clockwise.
        </p>
        <p class="question">
            A particle is projected at angle {'\\(\\theta\\)'} with velocity {'\\(u\\)'}. What is its angular momentum at the highest point of the trajectory?
        </p>
        <p class="solution">
            At the highest point, the velocity of the particle is horizontal to the ground and is equal to {'\\(v = u\\cos\\theta\\)'}. At this point, {'\\(r_\\perp\\)'} is perpendicular to the ground, i.e. it is equal to the height of the particle. Hence, {'\\[r_\\perp = \\frac{u^2\\sin^2\\theta}{2g}\\]'} Therefore, the angular momentum of the particle is {'\\[l = mvr_\\perp = \\frac{mu\\sin^2\\theta\\cos\\theta}{2g}\\]'}
        </p>
        <p class="question">
            A particle of mass {'\\(m\\)'} is attached to a string of length {'\\(L\\)'} with its end at {'\\(O\\)'} and is moving in a circle of radius {'\\(r\\)'} anti-clockwise. What is the angular momentum of the particle about {'\\(O\\)'}?
        </p>
        <div class="image">
            <svg width="50%" height="50%" viewBox="-334.6449890136719 -206.55340576171875 400 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                        
                        <circle  
                            id='WebdutTeam15R23Circle-2'
                            cx='0'
                            cy='0'
                            r='150'
                            fill='rgba(0, 0, 0, 0)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            transform='matrix(0.993377454143959 0 0 0.3333333375161166 -150.99337755737668 52.00000003137106)'
                        />
                        
                        <path  
                            id='WebdutTeam15R23Path-3'
                            d='M -203,-200.5 V 198'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='8'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            marker-start='none'
                            marker-mid='none'
                            marker-end='none'
                            transform='matrix(0.9708737864077668 0 0 0.9708737864077668 47.08737864077665 -5.339805825242763)'
                        />
                        
                        <path  
                            id='WebdutTeam15R23Path-4'
                            d='M -150,-200 L -300,50'
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
                            marker-end='none'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam15R23Path-5'
                            d='M -300,50 H 0'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='4'
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
                            id='WebdutTeam15R23Path-6'
                            d='M -150,-200 L -300,50'
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
                            marker-end='none'
                            transform='matrix(-1 0 0 1 -300 1)'
                        />
                        
                        <circle  
                            id='WebdutTeam15R23Circle-7'
                            cx='0'
                            cy='0'
                            r='15'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='none'
                            opacity='1'
                            filter='none'
                            mask='none'
                            transform='matrix(1 0 0 1 -1 49)'
                        />
                        
                        <circle  
                            id='WebdutTeam15R23Circle-8'
                            cx='0'
                            cy='0'
                            r='15'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='none'
                            opacity='1'
                            filter='none'
                            mask='none'
                            transform='matrix(1 0 0 1 -302 50)'
                        />
                        
                        <path  
                            id='WebdutTeam15R23Path-9'
                            d='M -36,121.5 C -52.400000000000006,112.3 -74.6,109.69999999999999 -102,112.5'
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
                            transform='matrix(1 0 0 1 -27 -119)'
                        />
                        
                        <g  
                            id='WebdutTeam15R23Latex-10'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -106 -14)'
                        ><defs><path id="MJX-16441-TEX-I-1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D714" xlink:href="#MJX-16441-TEX-I-1D714"></use></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam15R23Latex-11'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 22 57)'
                        ><defs><path id="MJX-16442-TEX-I-1D45A" d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D45A" xlink:href="#MJX-16442-TEX-I-1D45A"></use></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam15R23Latex-12'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -59 -61)'
                        ><defs><path id="MJX-16443-TEX-I-1D43F" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D43F" xlink:href="#MJX-16443-TEX-I-1D43F"></use></g></g></g>
                        </g>
                        
                        <path  
                            id='WebdutTeam15R23Path-14'
                            d='M -301,50.5 L -150,118.5'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='4'
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
                            id='WebdutTeam15R23Path-15'
                            d='M -301,50.5 L -150,118.5'
                            fill='rgba(0, 0, 0, 0)'
                            fill-rule='evenodd'
                            stroke='rgba(0, 0, 0, 1)'
                            stroke-width='1'
                            stroke-dasharray='4'
                            stroke-linecap='butt'
                            stroke-linejoin='miter'
                            stroke-miterlimit='4'
                            opacity='1'
                            filter='none'
                            mask='none'
                            marker-start='none'
                            marker-mid='none'
                            marker-end='none'
                            transform='matrix(-1 0 0 1 -300 0)'
                        />
                        
                        <path  
                            id='WebdutTeam15R23Path-16'
                            d='M -301,50.5 L -242,77.5'
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
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <path  
                            id='WebdutTeam15R23Path-17'
                            d='M -301,50.5 L -242,77.5'
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
                            transform='matrix(-1 0 0 1 -299 -1)'
                        />
                        
                        <g  
                            id='WebdutTeam15R23Latex-18'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -264 115)'
                        ><defs><path id="MJX-16444-TEX-I-1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path><path id="MJX-16444-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D459" xlink:href="#MJX-16444-TEX-I-1D459"></use></g><g data-mml-node="mo" transform="translate(232.3,283) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-16444-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <g  
                            id='WebdutTeam15R23Latex-19'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -54 120)'
                        ><defs><path id="MJX-16445-TEX-I-1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path><path id="MJX-16445-TEX-N-20D7" d="M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><use data-c="1D459" xlink:href="#MJX-16445-TEX-I-1D459"></use></g><g data-mml-node="mo" transform="translate(232.3,283) translate(-250 0)"><use data-c="20D7" xlink:href="#MJX-16445-TEX-N-20D7"></use></g></g></g></g></g>
                        </g>
                        
                        <path  
                            id='WebdutTeam15R23Path-20'
                            d='M -158,53.5 V 116.5'
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
                            marker-start='url(#Arrow)'
                            marker-mid='none'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 0 0)'
                        />
                        
                        <g  
                            id='WebdutTeam15R23Latex-21'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.025363403355514194 0 0 0.025363403355514194 -173.9026314704658 91.95050231211958)'
                        ><defs><path id="MJX-16446-TEX-I-1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D466" xlink:href="#MJX-16446-TEX-I-1D466"></use></g></g></g>
                        </g>
                        
                        <path  
                            id='WebdutTeam15R23Path-22'
                            d='M -146,163.5 H 2'
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
                            marker-start='url(#Arrow)'
                            marker-mid='none'
                            marker-end='url(#Arrow)'
                            transform='matrix(1 0 0 1 -1 -26)'
                        />
                        
                        <g  
                            id='WebdutTeam15R23Latex-23'
                            fill='rgba(0, 0, 0, 1)'
                            stroke='undefined'
                            stroke-width='undefined'
                            stroke-dasharray='undefined'
                            opacity='1'
                            filter='none'
                            mask='undefined'
                            transform='matrix(0.03 0 0 0.03 -80 157)'
                        ><defs><path id="MJX-16447-TEX-I-1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D45F" xlink:href="#MJX-16447-TEX-I-1D45F"></use></g></g></g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <p class="solution">
            The velocity of the particle is perpendicular to the string at each instant. Hence, the magnitude of the angular momentum is given by {'\\[l = mvL\\]'}
            But the direction of the angular momentum is changing at each instant. It points towards at a point on the axis of rotation below the center of the circle. Let {'\\(y\\)'} be the distance of this point from the center of the circle. Then, {'\\[y = \\frac{r^2}{\\sqrt{L^2-r^2}}\\]'}
        </p>
        <p class="question">
            An observer is moving in the horizontal direction with constant speed {'\\(u\\)'}. A particle is moving in the vertical direction with constant speed {'\\(u\\)'}. What is the angular momentum of the particle with respect to the observer when the particle is at {'\\(45^\\circ\\)'} to the observer at a distance {'\\(d\\)'}? 
        </p>
        <p class="solution">
            The velocity of the particle with respect to the observer is {'\\[\\vec{v} = -u\\hat{i}+u\\hat{j}\\]'} which is perpendicular to the position vector at the instant when the particle is at {'\\(45^\\circ\\)'} to the observer. Hence the magnitude of the angular momentum is {'\\[l = mv_\\perp r = mud \\sqrt{2}\\]'}
        </p>
        <p class="question">
            Compute the angular momentum of a particle whose position is given by {'\\[\\vec{r}(t) = \\alpha\\cos\\omega t ~\\hat{i} + \\beta\\sin\\omega t~\\hat{j}\\]'} 
        </p>
        <p class="solution">
            The velocity of the particle is {'\\[\\vec{v}(t) = -\\alpha\\omega\\sin\\omega t ~\\hat{i} + \\beta\\omega\\cos\\omega t~\\hat{j}\\]'}
            The angular momentum is {`\\[
                \\begin{aligned}
                \\vec{l} &= m\\vec{r}\\times\\vec{v}\\\\
                         &= m(\\alpha\\cos\\omega t ~\\hat{i} + \\beta\\sin\\omega t~\\hat{j})\\times (-\\alpha\\omega\\sin\\omega t ~\\hat{i} + \\beta\\omega\\cos\\omega t~\\hat{j})\\\\
                         &= m\\alpha\\beta (\\cos^2\\omega t + \\sin^2\\omega t)~\\hat{k}\\\\
                         &= m\\alpha\\beta~\\hat{k}
                \\end{aligned}
                \\]`}
            Angular momentum is contant on the trajectory of the particle.
        </p>
        <p class="question">
            The potential energy of a particle of mass {'\\(m\\)'} at a distance {'\\(r\\)'} from a fixed point {'\\(O\\)'} is given by {'\\(V(r) = kr^2/2\\)'}, where {'\\(k\\)'} is a positive constant of appropriate dimensions. This particle is moving in a circular orbit of radius {'\\(R\\)'} about the point {'\\(O\\)'}. What is the speed {'\\(v\\)'} of the particle and the magnitude of its angular momentum {'\\(L\\)'} about {'\\(O\\)'}?
        </p>
        <p class="solution">
            The force acting on the particle is given by {'\\[F = -\\frac{dV}{dr} = -kr\\]'} which is the required centripetal force for the circular motion. This implies that {'\\[\\frac{mv^2}{R} = kR \\implies v = R\\sqrt{\\frac{k}{m}}\\]'} Therefore, the angular momentum of the particle is {'\\[L = R^2\\sqrt{mk}\\]'}
        </p>
        <div class="question">
            <p>
                A frame of reference that is accelerated with respect to an inertial frame of reference is called a non-inertial frame of reference. A coordinate system fixed on a circular disc rotating about a fixed axis with a constant angular velocity {'\\(\\omega\\)'} is an example of a non-inertial frame of reference. The relationship between the force {'\\(\\vec{F}_{rot}\\)'} experienced by a particle of mass {'\\(m\\)'} moving on the rotating disc and the force {'\\(\\vec{F}_{in}\\)'} experienced by the particle in an inertial frame of reference is {'\\[\\vec{F}_{rot} = \\vec{F}_{in} + 2m(\\vec{v}_{rot}\\times \\vec{\\omega}) + m(\\vec{\\omega}\\times\\vec{r})\\times\\vec{\\omega}\\]'} whene {'\\(\\vec{v}_{rot}\\)'} is the velocity of the particle in the rotating frame of reference and {'\\(r\\)'} is the position vector of the particle with respect to the center of the disc.
            </p>
            <p>
                Now consider a smooth slot along a diameter of a disc of radius {'\\(R\\)'} rotating counter-clockwise with a constant angular speed {'\\(\\omega\\)'} about its vertical axis through its center. We assign a coordinate system with the origin at the center of the disc, the {'\\(x\\)'}-axis along the slot, the {'\\(y\\)'}-axis perpendicular to the slot and the {'\\(z\\)'}-axis along the rotation axis ({'\\(\\vec{\\omega} = \\omega~\\hat{k}\\)'}). A small block of mass {'\\(m\\)'} is gently placed in the slot at {'\\(\\vec{r}=R/2~\\hat{i}\\)'} at {'\\(t = 0\\)'} and is constrained to move only along the slot. What is the angular momentum of the block?
            </p>
            <div class="image">
                <svg width="50%" height="50%" viewBox="-258 -311.11651611328125 420 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                            
                            <circle  
                                id='WebdutTeam16R66Circle-3'
                                cx='0'
                                cy='0'
                                r='200'
                                fill='rgba(0, 0, 0, 0.3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 0.7499998820725501 -49 -80.00000165098069)'
                            />
                            
                            <circle  
                                id='WebdutTeam16R66Circle-2'
                                cx='0'
                                cy='0'
                                r='200'
                                fill='rgba(255, 255, 255, 1)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 0.7499998820725501 -47 -104.00000165098069)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-5'
                                d='M -225.5,-169.5 L 121,-33'
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
                                transform='matrix(1 0 0 1 24 -30)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-6'
                                d='M -227.5,-170 L 121,-34'
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
                                transform='matrix(1 0 0 1 -11 22)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-7'
                                d='M -226,-170 L 111,-39'
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
                                transform='matrix(1 0 0 1 27 -8)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-8'
                                d='M -198.5,-178.5 Q -211.1,-160.3 -222,-141'
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
                                id='WebdutTeam16R66Path-9'
                                d='M -199,-177.5 L -201.5,-199.5'
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
                                id='WebdutTeam16R66Path-10'
                                d='M 10,106 L -14,139 L 20.5,154 L 44,119.5 L 10,106 Z'
                                fill='rgba(255, 255, 255, 1)'
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
                                transform='matrix(1 0 0 1 41.5 -209)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-11'
                                d='M 11,113 L 10.5,138.5 L 45.5,152 L 45.5,127 L 11,113 Z'
                                fill='rgba(255, 255, 255, 1)'
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
                                transform='matrix(1 0 0 1 16.5 -183)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-12'
                                d='M 10.5,113 L 10.5,138.5 L 34.5,103 L 34,79.5 L 10.5,113 Z'
                                fill='rgba(255, 255, 255, 1)'
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
                                transform='matrix(1 0 0 1 51.5 -169.5)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-13'
                                d='M -50,-300 V -102'
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
                                marker-end='none'
                                transform='matrix(0.970873786407767 0 0 0.970873786407767 -2.427184466019419 -0.9708737864077648)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-14'
                                d='M -49,-103 L 53,-230'
                                fill='rgba(0, 0, 0, 0)'
                                fill-rule='evenodd'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='4'
                                stroke-linecap='butt'
                                stroke-linejoin='miter'
                                stroke-miterlimit='4'
                                opacity='1'
                                filter='none'
                                mask='none'
                                marker-start='url(#Arrow)'
                                marker-mid='none'
                                marker-end='url(#Arrow)'
                                transform='matrix(1 0 0 1 0 0)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-16'
                                d='M -242,-381 C -254.60000000000002,-375.8 -270.3720011244437,-366.00178889864395 -270,-351 C -269.5744610026581,-333.83917497343646 -248,-321 -226,-322 C -204,-321 -182.4255389973419,-333.83917497343646 -182,-351 C -181.62799887555627,-366.00178889864395 -197.39999999999998,-375.8 -210,-381'
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
                                transform='matrix(1.016933465557131 0 0 0.6274637577431292 178.57214525531725 -36.93630829986776)'
                            />
                            
                            <path  
                                id='WebdutTeam16R66Path-17'
                                d='M -70.9833485255999,-65.59371739366678 L 30,-25'
                                fill='rgba(0, 0, 0, 0)'
                                fill-rule='evenodd'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='4'
                                stroke-linecap='butt'
                                stroke-linejoin='miter'
                                stroke-miterlimit='4'
                                opacity='1'
                                filter='none'
                                mask='none'
                                marker-start='url(#Arrow)'
                                marker-mid='none'
                                marker-end='url(#Arrow)'
                                transform='matrix(1 0 0 1 0 0)'
                            />
                            
                            <g  
                                id='WebdutTeam16R66Latex-18'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.019999999205271436 0 0 0.019999999205271436 -52.669999973773955 -27.500000596046423)'
                            ><defs><path id="MJX-958-TEX-I-1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"></path><path id="MJX-958-TEX-N-2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path><path id="MJX-958-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D445" xlink:href="#MJX-958-TEX-I-1D445"></use></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(759,0)"><g data-mml-node="mo"><use data-c="2F" xlink:href="#MJX-958-TEX-N-2F"></use></g></g><g data-mml-node="mn" transform="translate(1259,0)"><use data-c="32" xlink:href="#MJX-958-TEX-N-32"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='WebdutTeam16R66Latex-19'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.022072489281469123 0 0 0.022072489281469123 45.16647772508915 -73.50437706412843)'
                            ><defs><path id="MJX-959-TEX-I-1D45A" d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D45A" xlink:href="#MJX-959-TEX-I-1D45A"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='WebdutTeam16R66Latex-20'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.021306817335161325 0 0 0.021306817335161325 -18.713124972060324 -165.93744376008482)'
                            ><defs><path id="MJX-960-TEX-I-1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D445" xlink:href="#MJX-960-TEX-I-1D445"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='WebdutTeam16R66Latex-21'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -18 -276)'
                            ><defs><path id="MJX-961-TEX-I-1D714" d="M495 384Q495 406 514 424T555 443Q574 443 589 425T604 364Q604 334 592 278T555 155T483 38T377 -11Q297 -11 267 66Q266 68 260 61Q201 -11 125 -11Q15 -11 15 139Q15 230 56 325T123 434Q135 441 147 436Q160 429 160 418Q160 406 140 379T94 306T62 208Q61 202 61 187Q61 124 85 100T143 76Q201 76 245 129L253 137V156Q258 297 317 297Q348 297 348 261Q348 243 338 213T318 158L308 135Q309 133 310 129T318 115T334 97T358 83T393 76Q456 76 501 148T546 274Q546 305 533 325T508 357T495 384Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D714" xlink:href="#MJX-961-TEX-I-1D714"></use></g></g></g>
                            </g>
                            </g></g>
                </svg>
            </div>
        </div>
        <div class="solution">
            The block is accelerated away from the center of the disc by {'\\(a = \\omega^2r\\)'}. This gives
            {`\\[
                \\begin{aligned}
                v\\frac{dv}{dr} &= \\omega^2r\\\\
                vdv &= \\omega^2 rdr
                \\end{aligned}
                \\]`}
            At {'\\(t = 0\\)'}, the block is left  at {'\\(r = R/2\\)'} with {'\\(v = 0\\)'}. Integrating the above,
            {`\\[
                \\begin{aligned}
                \\int_0^v vdv &= \\int_{R/2}^r \\omega^2 rdr\\\\
                \\frac{v^2}{2} &= \\omega^2\\Big[\\frac{r^2}{2}\\Big]_{R/2}^r\\\\
                v &= \\omega\\sqrt{r^2 - (R/2)^2}
                \\end{aligned}
                \\]`}
            To get the position of the block as function of time,
            {`\\[
                \\begin{aligned}
                    v &= \\frac{dr}{dt}\\\\
                    \\int_{R/2}^r  \\frac{dr}{\\sqrt{r^2 - (R/2)^2}} &= \\int_0^t \\omega dt
                \\end{aligned}
                \\]`}
            How to integrate the left-hand side?
            Substitute {'\\(r = R/2\\sec\\theta\\)'}. This gives {'\\(dr = R/2\\sec\\theta\\tan\\theta~d\\theta\\)'}.
            {`\\[
                \\begin{aligned}
                \\frac{dr}{\\sqrt{r^2-(R/2)^2}} &= \\frac{R/2\\sec\\theta\\tan\\theta~d\\theta}{R/2\\sqrt{\\sec^2\\theta - 1}}\\\\
                 &= \\sec\\theta~d\\theta\\\\
                 &= \\frac{\\sec\\theta(\\sec\\theta + \\tan\\theta)d\\theta}{(\\sec\\theta + \\tan\\theta)}\\\\
                 &= \\frac{d(\\sec\\theta + \\tan\\theta)}{\\sec\\theta + \\tan\\theta}\\\\
                 \\implies \\int \\frac{dr}{\\sqrt{r^2-(R/2)^2}} &= \\ln(\\sec\\theta + \\tan\\theta)\\\\
                 &= \\ln\\Big(\\frac{r}{R/2} + \\sqrt{\\frac{r^2}{(R/2)^2} - 1}~~\\Big)
                \\end{aligned}
                \\]`}
            Therefore,
            {`\\[
                \\begin{aligned}
                \\ln\\Big(\\frac{r}{R/2} + \\sqrt{\\frac{r^2}{(R/2)^2} - 1}~~\\Big) &= \\omega t\\\\
                \\frac{r}{R/2} + \\sqrt{\\frac{r^2}{(R/2)^2} - 1} &= e^{\\omega t}\\\\
                \\implies r &= \\frac{R}{4}(e^{\\omega t} + e^{-\\omega t})\\\\
                \\implies v &= \\omega\\frac{R}{4}(e^{\\omega t} - e^{-\\omega t})
                \\end{aligned}
                \\]`}
            The angular momentum is given by {`\\[L = mvr = m\\omega R^2\\frac{e^{2\\omega t} - e^{-2\\omega t}}{16}\\]`}
        </div>
    </section>
    
    <h2>System of particles</h2>
    <p>
        The angular momentum of a system of particles about a point {'\\(O\\)'} is defined as {'\\[\\vec{L} = \\sum_{i}\\vec{l_i} = \\sum_{i}\\vec{r_i}\\times\\vec{p_i}\\]'} where {'\\(\\vec{p_i}\\)'} is the linear momentum and {'\\(\\vec{r_i}\\)'} is the position vector of the {'\\(i\\)'}th particle from the given point {'\\(O\\)'}.
    </p>
    <h3>Examples</h3>
    <div class="question">
        Two small balls {'\\(A\\)'} and {'\\(B\\)'}, each of mass {'\\(m\\)'}, are attached rigidly to the ends of a light rod of length {'\\{d\\}'}. The structure rotates about the perpendicular bisector of the rod at an angular speed {'\\(\\omega\\)'}. Calculate the angular momentum of the individual balls and of the system about the axis of rotation.
    </div>
    <div class="solution">
        Let {'\\(O\\)'} be the perpendicular bisector of the rod. Then the speed of any particle is {'\\(v = \\omega d/2\\)'}. Hence, the angular momentum of any of the particles is {'\\(l = mvr = m\\omega d/2\\times d/2=m\\omega d^2/4\\)'}. The angular momentum of the system (as the angular momenta of the particles point in the same direction) is {'\\(m\\omega d^2/2\\)'}.
    </div>
    <h2>About a line</h2>
    <p>
        Take any point {'\\(O\\)'} on the line AB and obtain the angular momentum {'\\(\\vec{r}\\times\\vec{p}\\)'} of the particle about {'\\(O\\)'}. The component of {'\\(\\vec{r}\\times\\vec{p}\\)'} along the line AB is called the angular momentum of the particle "about AB". The point {'\\(O\\)'} may be chosen anywhere on the line AB.
    </p>
    <h2>Rigid body</h2>
    <p>
        Consider a rigid body rotating about an axis AB. Let the angular velocity  of the body be {'\\(\\vec{\\omega}\\)'}. If {'\\(I\\)'} is the moment of inertia of the body about the axis AB, then the angular momentum of the rigid body about the axis AB is {'\\[\\vec{L} = I\\vec{\\omega}\\]'}
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