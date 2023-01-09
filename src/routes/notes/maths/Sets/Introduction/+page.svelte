
<script id="MathJax-script">
// @ts-nocheck
    import {fade, fly} from 'svelte/transition';
    import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
    import {presentationMode, presentation, overlay, slideCounter, autoScroll, currentSlide} from '$lib/pages/notes/maths/stores';
    import Practice from '$lib/utils/practiceproblem/Practice.svelte';
    import Message from '$lib/ui/Message.svelte';
    import {Point2D} from '$lib/utils/common/point2d';
    import {randNum, randInt} from '$lib/utils/common/common';
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import P from '$lib/presentation/P.svelte';
    import Item from '$lib/presentation/Item.svelte';
	import Image from '../../../../../lib/presentation/Image.svelte';
    onMount(() => {
        $selectedChapter = 'Sets';
        $selectedSection = 'Introduction';
        $slideCounter = 6;
        $currentSlide = -2;
        MathJax.typeset();
    });
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
    article {
        position: relative;
        padding: 0.5em;
        /* in: all 1s; */
    }
    /* aside {
        background-color: rgb(230, 228, 228);
        cursor: pointer;
        width: 1em;
    } */
    .absolute {
        margin: auto;
        /* width: 90vw; */
        width: 100%;
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
    .pad {
        min-height: 100px;
    } 
    /*  
    figure {
        
        width: 300px;
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
    <title>{$selectedSection}</title>
    <link rel="canonical" href="https://drmithileshkumar.com{$page.url.pathname}" />
    <meta name="description" content="Introduction to sets" />
    
</svelte:head>
<article class:absolute={$presentationMode} bind:this={$presentation}>
    {#if $presentationMode && $currentSlide === -2}
        <div class="thumbnail">
            <p 
                class="question statement" 
                >
                {`\\(\\{x:x\\)`} is the foundation of mathematics{`\\(\\}\\)`}
            </p>
        </div>
    {/if}
    {#if !$presentationMode || $currentSlide >= -1}
        <h1>{$selectedSection}</h1>
    {/if}
    <section>
        <Item item={0}>
            <P isActive={0}>
                Consider \(1, 3, 5, 7, \dots\) and \(2, 4, 6, 8, \dots\) In the first group, only odd numbers are appearing and in the second group, only even numbers are appearing. We say that \(1, 3, 5, 7,\dots\) is a collection of odd numbers and \(2, 4, 6, 8, \dots\) is a collection of even numbers. This chapter is about the study of collection of objects that satisfy some property.
            </P>
            <Image isActive={0}>
                <svg width="100%" height="100%" viewBox="-212.79150390625 -124.64888000488281 300 220" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs></defs><g>
                            <g  
                                class='draggable'
                                id='Layer-VectorialApp5R52-0'
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
                                id='Circle-VectorialApp5R52-2'
                                cx='0'
                                cy='0'
                                r='50'
                                fill='rgba(255, 255, 255, 0.3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1.0000000119771812 0 0 1.7999999904747106 -143.1100457878597 -30.000002860450266)'
                            />
                            
                            <g  
                                id='Latex-VectorialApp5R52-4'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -152.4900000989437 -80.13807171583176)'
                            ><defs><path id="MJX-16306-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="31" xlink:href="#MJX-16306-TEX-N-31"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-5'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 8.499999940395355 -80.01999920606613)'
                            ><defs><path id="MJX-16307-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="32" xlink:href="#MJX-16307-TEX-N-32"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-6'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -151.2600000500679 -50.18406292796135)'
                            ><defs><path id="MJX-16308-TEX-N-33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="33" xlink:href="#MJX-16308-TEX-N-33"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-7'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 9.159999966621399 -49.68999919295311)'
                            ><defs><path id="MJX-16309-TEX-N-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="34" xlink:href="#MJX-16309-TEX-N-34"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-8'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -151.50000005960464 -20.01999920606613)'
                            ><defs><path id="MJX-16310-TEX-N-35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="35" xlink:href="#MJX-16310-TEX-N-35"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-9'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 8.741874950006604 -20.01999920606613)'
                            ><defs><path id="MJX-16311-TEX-N-36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="36" xlink:href="#MJX-16311-TEX-N-36"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-10'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -151.65466925501823 10.395631909370422)'
                            ><defs><path id="MJX-16312-TEX-N-37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="37" xlink:href="#MJX-16312-TEX-N-37"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-11'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 8.709999948740005 9.980000793933868)'
                            ><defs><path id="MJX-16313-TEX-N-38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><use data-c="38" xlink:href="#MJX-16313-TEX-N-38"></use></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-12'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 -147.34000009298325 47.000001072883606)'
                            ><defs><path id="MJX-16314-TEX-N-22EE" d="M78 30Q78 54 95 72T138 90Q162 90 180 74T199 31Q199 6 182 -12T139 -30T96 -13T78 30ZM78 440Q78 464 95 482T138 500Q162 500 180 484T199 441Q199 416 182 398T139 380T96 397T78 440ZM78 840Q78 864 95 882T138 900Q162 900 180 884T199 841Q199 816 182 798T139 780T96 797T78 840Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mo"><use data-c="22EE" xlink:href="#MJX-16314-TEX-N-22EE"></use></g></g></g></g>
                            </g>
                            
                            <g  
                                id='Latex-VectorialApp5R52-13'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(0.03 0 0 0.03 12.659999907016754 47.000001072883606)'
                            ><defs><path id="MJX-16315-TEX-N-22EE" d="M78 30Q78 54 95 72T138 90Q162 90 180 74T199 31Q199 6 182 -12T139 -30T96 -13T78 30ZM78 440Q78 464 95 482T138 500Q162 500 180 484T199 441Q199 416 182 398T139 380T96 397T78 440ZM78 840Q78 864 95 882T138 900Q162 900 180 884T199 841Q199 816 182 798T139 780T96 797T78 840Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mo"><use data-c="22EE" xlink:href="#MJX-16315-TEX-N-22EE"></use></g></g></g></g>
                            </g>
                            
                            <circle  
                                id='Circle-VectorialApp5R52-14'
                                cx='0'
                                cy='0'
                                r='50'
                                fill='rgba(255, 255, 255, 0.3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1.0000000119771812 0 0 1.7999999904747106 17.527039173077817 -30.11648845615339)'
                            />
                            
                            <text  
                                id='Text-VectorialApp5R52-15'
                                x='0'
                                y='0'
                                font-size='20px'
                                font-weight='400'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(1 0 0 1 -162.1873779296875 85.8187255859375)'
                            >Odd
                                </text>
                            <text  
                                id='Text-VectorialApp5R52-16'
                                x='0'
                                y='0'
                                font-size='20px'
                                font-weight='400'
                                fill='rgba(0, 0, 0, 1)'
                                stroke='undefined'
                                stroke-width='undefined'
                                stroke-dasharray='undefined'
                                opacity='1'
                                filter='none'
                                mask='undefined'
                                transform='matrix(1 0 0 1 -5.01531982421875 85.8187255859375)'
                            >Even
                            </text></g></g>
                        </svg>
            </Image>
            
        </Item>
        <Item item={1}>
            <P isActive={1}>
                This study is so fundamental that all of mathematics is based on it. In other words, all of mathematics is the study of objects that satisfy some property. 
            </P>
        </Item>
        <Item item={2}>
            <P isActive={2}>
                In mathematics, such kind of collections are called <em>sets</em>. We'll start with defining what is a set and see a few examples. After that we'll learn two ways to write sets. Then, we'll define some special sets. 
            </P>
        </Item>
        <Item item={3}>
            <P isActive={3}>
                After that we'll learn how to create new sets from a given set using various operations that will feel like addition or subtraction. Finally, we'll conclude the chapter by using the learnt concept to solve problems like one described below.
            </P>
        </Item>
        <Item item={4}>
            <P isActive={4}>
                Consider the following problem.
            </P>
            <P isActive={4} class="question">
                In an IIT sports event, 50 medals were awarded in race, 30 in football and 25 in cricket. If only 60 students got any medal and only 5 students got medals in all events, how many received medals in exactly two of the events?
            </P>
        </Item>
        <Item item={5}>
            <P isActive={5}>
                This simple problem is tricky to solve without using the language of <strong>Sets</strong>.
            </P>
        </Item>
        <div class="pad"></div>
    </section>
</article>