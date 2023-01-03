<script id="MathJax-script">
    // @ts-nocheck
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
        import Practice from '$lib/utils/practiceproblem/Practice.svelte';
        import Message from '$lib/ui/Message.svelte';
        import {Point2D} from '$lib/utils/common/point2d';
        import {randNum, randInt} from '$lib/utils/common/common';
        import { TeX } from '$lib/utils/common/constants';
        import {page} from '$app/stores';
        import {onMount} from 'svelte';
        onMount(() => {
            $selectedChapter = 'Sets';
            $selectedSection = 'Complement of a set';
            $slideCounter = 11;
            $currentSlide = -2;
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
                    
                    let m = randInt(20, 1);
                    m = Math.random() > 0.5 ? -m : m;
                    let n = m > 0 ? randInt(2*m, m + 1) : randInt(m + 1, m + 10);
                    let m1 = randInt(20, 2);
                    let n1 = randInt(Math.floor(m1/2), 0);
                    let m2 = randInt(20, 2);
                    let n2 = randInt(Math.floor(m2/2), 0);
                    let m3 = randInt(20, 2);
                    let n3 = randInt(Math.floor(m3/2), 0);
    
                    values[0] = `\\(${n} < x < ${m}\\)`;
                    values[1] = `\\(${n1} < x < ${m1}\\)`;
                    values[2] = `\\(${n2} < x < ${m2}\\)`;
                    values[3] = `\\(${n3} < x < ${m3}\\)`;
                    for(let i = 0; i < 4; i++) {
                        problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
                    } 
                    
                    problemset.s = `Which of the following will correspond to an empty set?`;
                    break;
                }
            }
            problemset = problemset;
            return problemset;
        }
    </script>
    <style>
        /* p {
            text-indent: 2em;
        } */
        .image {
            display: flex;
            justify-content: center;
            width: min(95vw, 300px);
            margin: auto;
        }
    </style>
    <svelte:head>
        <title>{$selectedSection}</title>
        <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
        <meta name="description" content="Power set" />
        
    </svelte:head>
    <article class:absolute={$presentationMode} bind:this={$presentation}>
        <h1>{$selectedSection}</h1>
        <section>
            <p>To define complement of a set we need to fix a universal set first.</p>
        </section>
        <section>
            <div class="definition">
                <p>
                 Let \(U\) be the universal set and \(A\) a subset of \(U\). Then the complement of \(A\) is the set of all elements of \(U\) which are not the elements of \(U\). {`\\[A' = \\{x:x\\in U~~and~~x\\notin A\\}\\]`}
                </p>
            </div>
            <div class="image">
                <svg width="100%" height="100%" viewBox="-239 -132 310 210" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs></defs><g>
                            <g  
                                class='draggable'
                                id='Layer-VectorialApp0R43-0'
                                fill='none'
                                stroke='none'
                                stroke-width='0'
                                stroke-dasharray='none'
                                opacity='1'
                                mask='undefined'
                                filter='undefined'
                                transform='matrix(1 0 0 1 0 0)'
                            >
                            
                            <rect  
                                id='Rect-VectorialApp0R43-2'
                                x='0'
                                y='0'
                                width='300'
                                height='200'
                                rx='0'
                                ry='0'
                                fill='rgba(0, 175, 255, 0.3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -234 -127)'
                            />
                            
                            <circle  
                                id='Circle-VectorialApp0R43-3'
                                cx='0'
                                cy='0'
                                r='50'
                                fill='rgba(255, 255, 255, 1)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='2'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -81 -26)'
                            />
                            
                            <g  
                                id='Latex-VectorialApp0R43-4'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -224 -96)'
                            ><defs><path id="MJX-509-TEX-I-1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D448" xlink:href="#MJX-509-TEX-I-1D448"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp0R43-5'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -93 -18)'
                            ><defs><path id="MJX-510-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D434" xlink:href="#MJX-510-TEX-I-1D434"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp0R43-6'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 23 58)'
                            ><defs><path id="MJX-511-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path><path id="MJX-511-TEX-V-2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><use data-c="1D434" xlink:href="#MJX-511-TEX-I-1D434"></use></g><g data-mml-node="mo" transform="translate(783,413) scale(0.707)"><use data-c="2032" xlink:href="#MJX-511-TEX-V-2032"></use></g></g></g></g>
                            </g>
                            </g></g></svg>
            </div>
        </section>
        <section>
            <h3>Examples</h3>
            <p class="examples">Let {`\\(U = \\{1, 2, 3\\}\\)`} and {`\\(A = \\{2, 3\\}\\)`}, then {`\\(A' = \\{1\\}\\)`}</p>
            <p class="examples">Let {`\\(U = \\{1, 2\\}\\)`} and {`\\(A = \\{1, 2\\}\\)`}, then {`\\(A' = \\phi\\)`}</p>
            <p class="examples">Let {`\\(U = \\{1, 2\\}\\)`} and {`\\(A = \\phi\\)`}, then {`\\(A' = \\{1, 2\\}\\)`}</p>
        </section>
        <section>
            <h3>Some properties of the Operation of Union</h3>
            <ol>
                <li>\(A' = U - A\)</li>
                <li>\(A\cup A' = U\) (Complement law)</li>
                <li>\(A\cap A' = \phi\) (Complement law)</li>
                <li>\((A\cup B)' = A'\cap B'\) (De Morgan's law)</li>
                <li>\((A\cap B)' = A'\cup B'\) (De Morgan's law)</li>
                <li>\((A')' = A\) (Law of double complementation)</li>
                <li>\(U' = \phi\) (Law of U)</li>
                <li>\(\phi' = U\) (Law of \(\phi\))</li>
            </ol>
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