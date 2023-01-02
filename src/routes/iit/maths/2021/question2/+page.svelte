
<script id="MathJax-script">
    // @ts-nocheck
    import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
    import {page} from '$app/stores';
    import {fade, fly} from 'svelte/transition';
    import {onMount} from 'svelte';
    
    import {TeX} from '$lib/utils/common/constants';
    
    
    onMount(() => {
        $slideCounter = 9;
        $currentSlide = -2;
        MathJax.typeset();
    });
    
    let isActive = -1; 
    </script>
    <style>
        /* p {
            text-indent: 2em;
        } */
        /* .options {
            display: flex;
            flex-direction: row;
            gap: 2em;
            width: 100%;
            flex-wrap: wrap;
        } */
        
        article {
            position: relative;
            padding: 0.5em;
            /* in: all 1s; */
        }
        .absolute {
            margin: auto;
            width: 100%;
            /* width: 90vw; */
            height: min(78vh, 60vw);
            /* height: min(70vh,600px); */
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 0 1em 0 1em;
        }
        .absolute::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
        .currentActive {
            /* background: gray; */
            color: tomato;
            /* padding: 1em; */
            border-radius: 10px;
            transition: all 1s;
        }
        .pad {
            min-height: 100px;
        }
        /* figure {
            width: 300px;
        } */
        
        /* .displayStyle {
            font-size: 2em;
            transition: all 1s;
        } */
        .thumbnail {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5em;
            height: 100%;
            
        }
        .statement {
            background: radial-gradient(#6000c091, rgb(0, 93, 180));
            color: rgb(246, 246, 246);
            text-shadow: 1px 1px 3px rgb(4, 4, 4);
            box-shadow: 1px 1px 3px rgb(129, 128, 128);
            padding: 1em;
        }
    </style>
<svelte:head>
    <title>Mathematics Question 2</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="IIT JEE Advanced Mathematics 2021" />
</svelte:head>


    <article class:absolute={$presentationMode} bind:this={$presentation}>
        {#if $presentationMode && $currentSlide === -2}
            <div class="thumbnail">
                <p 
                    class="question statement" 
                    transition:fly="{{ x: 200, duration: 1000}}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}
                    >
                    In a triangle ABC, let \(AB = {TeX.sqrt('23')}\), and \(BC = 3\) and \(CA = 4\). Then the value of \({TeX.dfrac('\\cot A + \\cot C', '\\cot B')}\) is ______.
                </p>
            </div>
        {/if}    
        {#if !$presentationMode || $currentSlide >= -1}
        <h1>Question 2 [JEE adv, 2021]</h1>
        {/if}
        {#if !$presentationMode || $currentSlide >= 0}
        <p 
            class="question {$presentationMode && isActive === 0 ? 'currentActive': ''}" 
            transition:fly="{{ x: 200, duration: 1000}}"
            on:introstart={() => {isActive = -1}}
            on:introend={() => {isActive = $currentSlide}}
            on:outroend={() => {isActive = -1}}
            >
            In a triangle ABC, let \(AB = {TeX.sqrt('23')}\), and \(BC = 3\) and \(CA = 4\). Then the value of \({TeX.dfrac('\\cot A + \\cot C', '\\cot B')}\) is ______.
        </p>
        {/if}
        <section>
            {#if !$presentationMode || $currentSlide >= 1}
            <h2 
                class="{$presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = $currentSlide}}
                on:outroend={() => {isActive = -1}}
                >Concepts</h2>
            <p 
                class="{$presentationMode && isActive === 1 ? 'currentActive': ''}" 
                transition:fly="{{ x: 200, duration: 1000 }}"
                on:introstart={() => {isActive = -1}}
                on:introend={() => {isActive = $currentSlide}}
                on:outroend={() => {isActive = -1}}
                style="display:flex; align-items: center; flex-wrap:wrap;">
                <span>
                    Use \(\cos A = {TeX.dfrac('b^2 + c^2 - a^2', '2bc')}\) and \(\Delta = {TeX.dfrac('1', '2')}bc\sin A\)
                </span>
                
                <figure>
                    <svg width="100%" height="100%" viewBox="-241.5749969482422 -245.58999633789062 430 220" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs><g>
                                <g  
                                    class='draggable'
                                    id='Layer-WebdutTeam20R61-0'
                                    fill='none'
                                    stroke='none'
                                    stroke-width='0'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    mask='undefined'
                                    filter='undefined'
                                    transform='matrix(1 0 0 1 0 0)'
                                >
                                
                                <path  
                                    id='Path-WebdutTeam20R61-2'
                                    d='M -102,-206.5 L -204,-59.5 H 150 L -102,-206.5 Z'
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
                                    id='Path-WebdutTeam20R61-3'
                                    d='M -171.33333333333334,-60.02380952380952 A 32.968129838396884 32.968129838396884 0 0 0 -185.57142857142858,-86.07142857142858'
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
                                    id='Path-WebdutTeam20R61-4'
                                    d='M -115.71428571428572,-184.92857142857142 A 24.81432364269465 24.81432364269465 0 0 0 -79.80952380952382,-192.97619047619048'
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
                                    id='Path-WebdutTeam20R61-5'
                                    d='M 100.47619047619048,-87.59523809523807 A 56.03859400246527 56.03859400246527 0 0 0 93.09523809523807,-60.5'
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
                                    id='Latex-WebdutTeam20R61-6'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(0.03 0 0 0.03 -114 -211)'
                                ><defs><path id="MJX-1335-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D434" xlink:href="#MJX-1335-TEX-I-1D434"></use></g></g></g>
                                </g>
                                
                                <g  
                                    id='Latex-WebdutTeam20R61-7'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(0.03 0 0 0.03 -235 -48)'
                                ><defs><path id="MJX-1336-TEX-I-1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D435" xlink:href="#MJX-1336-TEX-I-1D435"></use></g></g></g>
                                </g>
                                
                                <g  
                                    id='Latex-WebdutTeam20R61-8'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(0.03 0 0 0.03 158 -50)'
                                ><defs><path id="MJX-1337-TEX-I-1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D436" xlink:href="#MJX-1337-TEX-I-1D436"></use></g></g></g>
                                </g>
                                
                                <g  
                                    id='Latex-WebdutTeam20R61-9'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(0.03 0 0 0.03 -37 -39)'
                                ><defs><path id="MJX-1338-TEX-I-1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D44E" xlink:href="#MJX-1338-TEX-I-1D44E"></use></g></g></g>
                                </g>
                                
                                <g  
                                    id='Latex-WebdutTeam20R61-10'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(0.03 0 0 0.03 21 -141)'
                                ><defs><path id="MJX-1339-TEX-I-1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D44F" xlink:href="#MJX-1339-TEX-I-1D44F"></use></g></g></g>
                                </g>
                                
                                <g  
                                    id='Latex-WebdutTeam20R61-11'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(0.03 0 0 0.03 -179 -130)'
                                ><defs><path id="MJX-1340-TEX-I-1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D450" xlink:href="#MJX-1340-TEX-I-1D450"></use></g></g></g>
                                </g>
                                </g></g></svg>
                </figure>
            </p>
            {/if}
        </section>
        <section>
            {#if !$presentationMode || $currentSlide >= 2}
                <h2 
                    class="{$presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>Solution</h2>
                
                <h4 
                    class="{$presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>
                    Step 1
                </h4>
                <p 
                    class="{$presentationMode && isActive === 2 ? 'currentActive': ''}" 
                    transition:fly="{{ x: 200, duration: 1000 }}"
                    on:introstart={() => {isActive = -1}}
                    on:introend={() => {isActive = $currentSlide}}
                    on:outroend={() => {isActive = -1}}>
                    {`\\[
                        \\begin{eqnarray}
                            \\frac{\\cot A + \\cot C}{\\cot B} &=& \\frac{\\frac{\\cos A}{\\sin A} + \\frac{\\cos C}{\\sin C}}{\\frac{\\cos B}{\\sin B}}\\\\
                            &=&\\frac{\\frac{b^2 + c^2 - a^2}{2bc\\sin A} + \\frac{a^2 + b^2 - c^2}{2ab\\sin C}}{\\frac{a^2 + c^2 - b^2}{2ac\\sin B}}\\\\
                            &=&\\frac{\\frac{b^2 + c^2 - a^2}{4\\Delta} + \\frac{a^2 + b^2 - c^2}{4\\Delta}}{\\frac{a^2 + c^2 - b^2}{4\\Delta}}\\\\
                            &=& \\frac{2b^2}{a^2 + c^2 - b^2}\\\\
                            &=& \\frac{2\\times 4^2}{3^2 + 23 - 4^2} = 2
                        \\end{eqnarray}
                    \\]`}
                </p>
            {/if}
            {#if $presentationMode && $currentSlide > 0}
                <div class="pad"></div>
            {/if}
        </section>
    </article>

