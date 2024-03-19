<script lang='ts'>
    //@ts-nocheck
    import {page} from '$app/stores';
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents, contentNav } from "$lib/pages/courses/mathematics2/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
	import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $darkMode = false;
    $currentPath = "Conditional Probability";
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgba(0, 150, 200, 1);
    }
    strong {
        color: rgb(159, 116, 7);
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/conditional" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Conditional Probability
    </h4>
    
    <Card>
        <Content>
            <p>
                Let \(A\) and \(B\) be two events such that {`\\(P(A)\\gt 0\\)`}. Denote by {`\\(P(B\\vert A\\)`} the probability of \(B\) <em>given that</em> \(A\) has occurred. Since \(A\) is known to have occurred, it becomes the new sample space replacing the original \(S\).
                {`\\[\\begin{aligned}
                P(B\\vert A) &= \\frac{P(A\\cap B)}{P(A)}\\\\
                \\implies P(A\\cap B) &= P(A)P(B\\vert A)
                \\end{aligned}\\]`}
            </p>
            <div class="image">
                <svg class="SVG Vectorial svelte-10rmvey" width="310" height="210" viewBox="-249.66668701171875 -95.3333740234375 310 210" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><marker id="Arrow-MithileshKumar5R66-11" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet"><path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path></marker></defs><g id="Layer-MithileshKumar5R66-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)">   <rect id="Rect-MithileshKumar5R66-2" class="draggable" x="0" y="0" width="300" height="200" rx="0" ry="0" fill="rgba(255, 0, 0, 0)" filter="none" mask="none" stroke="rgba(0, 0, 0, 1)" stroke-width="1" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" transform="matrix(1 0 0 1 -244.66668701171875 -90.3333740234375)"></rect>         <circle id="Circle-MithileshKumar5R66-3" class="draggable" cx="0" cy="0" r="50" fill="rgba(0, 255, 0, 0.5)" stroke="rgba(0, 0, 0, 1)" stroke-width="0.5" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -141 9)"></circle>           <circle id="Circle-MithileshKumar5R66-4" class="draggable" cx="0" cy="0" r="60" fill="rgba(0, 0, 255, 0.4)" stroke="rgba(0, 0, 0, 1)" stroke-width="0.5" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -50.33331298828125 7)"></circle>                  <g id="Latex-MithileshKumar5R66-5" class="draggable" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" filter="none" opacity="1" vector-effect="none" transform="matrix(0.03 0 0 0.03 -235 -65)"><defs><path id="MJX-985-TEX-I-1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D448" xlink:href="#MJX-985-TEX-I-1D448"></use></g></g></g></g>           <g id="Latex-MithileshKumar5R66-6" class="draggable" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" filter="none" opacity="1" vector-effect="none" transform="matrix(0.03 0 0 0.03 -217 19)"><defs><path id="MJX-986-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D434" xlink:href="#MJX-986-TEX-I-1D434"></use></g></g></g></g>           <g id="Latex-MithileshKumar5R66-7" class="draggable" fill="rgba(0, 0, 0, 1)" font-size="20px" font-weight="400" filter="none" opacity="1" vector-effect="none" transform="matrix(0.03 0 0 0.03 12 14)"><defs><path id="MJX-987-TEX-I-1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D435" xlink:href="#MJX-987-TEX-I-1D435"></use></g></g></g></g>           <g id="Latex-MithileshKumar5R66-8" class="draggable" fill="rgba(0, 175, 255, 1)" font-size="20px" font-weight="400" filter="none" opacity="1" vector-effect="none" transform="matrix(0.03 0 0 0.03 -141 93)"><defs><path id="MJX-988-TEX-I-1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path><path id="MJX-988-TEX-N-2229" d="M88 -21T75 -21T55 -7V200Q55 231 55 280Q56 414 60 428Q61 430 61 431Q77 500 152 549T332 598Q443 598 522 544T610 405Q611 399 611 194V-7Q604 -22 591 -22Q582 -22 572 -9L570 405Q563 433 556 449T529 485Q498 519 445 538T334 558Q251 558 179 518T96 401Q95 396 95 193V-7Q88 -21 75 -21Z"></path><path id="MJX-988-TEX-I-1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></defs><g stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D434" xlink:href="#MJX-988-TEX-I-1D434"></use></g><g data-mml-node="mo" transform="translate(972.2,0)"><use data-c="2229" xlink:href="#MJX-988-TEX-N-2229"></use></g><g data-mml-node="mi" transform="translate(1861.4,0)"><use data-c="1D435" xlink:href="#MJX-988-TEX-I-1D435"></use></g></g></g></g>         <path id="Path-MithileshKumar5R66-13" class="draggable" d="M -102.6666913727912,12.843746741302368" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>           <path id="Path-MithileshKumar5R66-11" class="draggable" d="M -97.66669152180282,62.5104322728385 C -105.26669129530515,54.17705849775491 -112.06669109264928,32.51037213175378 -102.33337839444334,16.177059630243207" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="1.5" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-MithileshKumar5R66-11)" transform="matrix(1 0 0 1 0 0)"></path>     </g></g></svg>
            </div>
            <p>
                In words, the above equation says that the probability that both \(A\) and \(B\) occur is equal to the probability that \(A\) occurs times the probability that \(B\) occurs given that \(A\) has occurred. We call \(P(B\vert A\) the <strong>conditional probability</strong> of \(B\) given \(A\), i.e. the probability that \(B\) will occur given that \(A\) has occurred.
            </p>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6>Theorem</h6>
            <div class="theorem">
                For any three events \(A_1, A_2, A_3\) we have {`\\[P(A_1\\cap A_2\\cap A_3) = P(A_1)P(A_2|A_1)P(A_3|A_1\\cap A_2)\\]`}
                i.e. the probability that \(A_1\) and \(A_2\) and \(A_3\) all occur is equal to the probability that \(A_1\) occurs times the probability that \(A_2\) occurs given that \(A_1\) has occurred times the probability that \(A_3\) occurs given that both \(A_1\) and \(A_2\) have occurred.
            </div>
        </Content>
    </Card>
    <h4>
        Independent Events
    </h4>
    
    <Card>
        <Content>
            <div class="definition">
                If \(P(B\vert A) = P(B)\), i.e. the probability of \(B\) occurring is not affected by the occurrence or non-occurrence of \(A\), then we say that \(A\) and \(B\) are <strong>independent events</strong>. 
                \[P(A\cap B) = P(A)P(B)\]
            </div>
        </Content>
    </Card>
    
    <Card>
        <Content>
            <h6>Definition</h6>
            <div class="definition">
                We say that three events \(A_1, A_2, A_3\) are <strong>independent</strong> if they are pairwise independent: 
                {`\\[P(A_j\\cap A_k) = P(A_j)P(A_k)\\quad j\\neq k\\]`} where \(j, k = 1, 2, 3\) and \[P(A_1\cap A_2\cap A_3) = P(A_1)P(A_2)P(A_3)\]
            </div>
        </Content>
    </Card>
    <h4>Questions</h4>
    <Card>
        <Content>
            <div class="question">
                <p>A fair die is tossed twice. Find the probability of getting a 4, 5, or 6 on the first toss and a 1, 2, 3, or 4 on the second toss.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Give five examples when two events are independent and when they are not independent.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Find the probability of not getting a 7 or 11 total on either of two tosses of a pair of fair dice.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Two cards are drawn from a well-shuffled ordinary deck of 52 cards. Find the probability that they are both aces if the first card is (a) replaced, (b) not replaced.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Three balls are drawn successively from the box which contains 6 red balls, 4 white balls and 5 blue balls. Find the probability that they are drawn in the order red, white, and blue if each ball is (a) replaced, (b) not replaced.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Find the probability of a 4 turning up at least once in two tosses of a fair die.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>One bag contains 4 white balls and 2 black balls; another contains 3 white balls and 5 black balls. If one ball is drawn from each bag, find the probability that (a) both are white, (b) both are black, (c) one is white and one is black.</p>
            </div>
        </Content>
    </Card>
    <Card>
        <Content>
            <div class="question">
                <p>Box I contains 3 red and 2 blue marbles, while Box II contains 2 red and 8 blue marbles. A fair coin is tossed. If the coin turns up heads, a marble is chosen from Box I; if it turns up tails, a marble is chosen from Box II. Find the probability that a red marble is chosen.</p>
            </div>
        </Content>
    </Card>
</article>