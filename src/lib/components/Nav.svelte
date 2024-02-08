<script lang="ts">
    //@ts-nocheck
    import List, {
        Item,
        Graphic,
        Separator,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    import Button, { Label } from "@smui/button";
    import { Svg } from '@smui/common';
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { profileImage, navList } from "$lib/stores";

    export let isAuth = null;
</script>

<nav>
    <div class="top">
        <!-- <List twoLine avatarList>
            {#if isAuth}
                <Item on:click={() => goto("/auth")}>
                    <Graphic>
                        <img
                            class="round"
                            width="40px"
                            height="40px"
                            src={$profileImage}
                            alt="Profile"
                        />
                    </Graphic>
                    <Text>
                        <PrimaryText>{isAuth.name}</PrimaryText>
                        <SecondaryText>{isAuth.publicID}</SecondaryText>
                    </Text>
                </Item>
            {:else}
                <Item>
                    <Button on:click={() => goto("/auth")}
                        >Log in / Sign up</Button
                    >
                </Item>
            {/if}
        </List> -->
        <List>
            {#if isAuth}
                <Item
                    on:SMUI:action={() => goto(`/${$page.data.user.publicID}`)}
                >
                    <Graphic class="material-icons">person</Graphic>
                    <Text>Profile</Text>
                </Item>
                <!-- <Item
                    on:SMUI:action={() => goto(`/${$page.data.user.publicID}/questions`)}
                >
                    <Graphic class="material-icons">card_membership</Graphic>
                    <Text>Questions</Text>
                </Item> -->
                <Item
                    on:SMUI:action={() => goto(`/${$page.data.user.publicID}/quiz`)}
                >
                    <Graphic class="material-icons">card_membership</Graphic>
                    <Text>Quizzes</Text>
                </Item>
                <Separator />
            {/if}
                <Item
                    on:SMUI:action={() => goto(`/about`)}
                >
                    <Graphic class="material-icons">person</Graphic>
                    <Text>About</Text>
                </Item>
                <Item
                    on:SMUI:action={() => goto(`/publications`)}
                >
                    <Graphic class="material-icons">article</Graphic>
                    <Text>Publications</Text>
                </Item>
                <Item
                    on:SMUI:action={() => goto(`/cv`)}
                >
                    <Graphic class="material-icons">badge</Graphic>
                    <Text>CV</Text>
                </Item>
                <Item
                    on:SMUI:action={() => goto(`https://mathril.com`)}
                >
                    <Graphic>
                        <Svg style="width: 100%; height: 100%;" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient id='LinearGradient-VectorialApp19R21-3' x1="0%" y1="0%" x2="100%" y2="0%" >
                                    <stop offset="0%" stop-color="rgba(255, 0, 0, 1)"/>
                                    <stop offset="100%" stop-color="rgba(0, 175, 255, 1)"/>
                                </linearGradient>
                            </defs>
                            <g>
                                <g  
                                    class='draggable'
                                    id='Layer-VectorialApp19R21-0'
                                    fill='none'
                                    stroke='none'
                                    stroke-width='0'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    mask='none'
                                    filter='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                >
                                                
                                    <rect  
                                        id='Rect-VectorialApp19R21-2'
                                        x='200'
                                        y='200'
                                        width='350'
                                        height='25'
                                        rx='0'
                                        ry='0'
                                        fill='url(#LinearGradient-VectorialApp19R21-3)'
                                        stroke='rgba(0, 0, 0, 1)'
                                        stroke-width='0'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -176 -175)'
                                    />
                                                
                                    <rect  
                                        id='Rect-VectorialApp19R21-4'
                                        x='200'
                                        y='200'
                                        width='350'
                                        height='25'
                                        rx='0'
                                        ry='0'
                                        fill='url(#LinearGradient-VectorialApp19R21-3)'
                                        stroke='rgba(0, 0, 0, 1)'
                                        stroke-width='0'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -175 -125)'
                                    />
                                                
                                    <rect  
                                        id='Rect-VectorialApp19R21-5'
                                        x='200'
                                        y='200'
                                        width='275'
                                        height='25'
                                        rx='0'
                                        ry='0'
                                        fill='url(#LinearGradient-VectorialApp19R21-3)'
                                        stroke='rgba(0, 0, 0, 1)'
                                        stroke-width='0'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -175 -75)'
                                    />
                                                
                                    <rect  
                                        id='Rect-VectorialApp19R21-6'
                                        x='200'
                                        y='200'
                                        width='200'
                                        height='25'
                                        rx='0'
                                        ry='0'
                                        fill='url(#LinearGradient-VectorialApp19R21-3)'
                                        stroke='rgba(0, 0, 0, 1)'
                                        stroke-width='0'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -175 -25)'
                                    />
                                                
                                    <circle  
                                        id='Circle-VectorialApp19R21-7'
                                        cx='200'
                                        cy='200'
                                        r='40'
                                        fill='rgba(255, 255, 255, 0.3)'
                                        stroke='rgba(0, 175, 0, 1)'
                                        stroke-width='5'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -100 75)'
                                    />
                                                
                                    <circle  
                                        id='Circle-VectorialApp19R21-8'
                                        cx='200'
                                        cy='200'
                                        r='30'
                                        fill='rgba(0, 175, 0, 1)'
                                        stroke='rgba(0, 175, 0, 1)'
                                        stroke-width='5'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -100 75)'
                                    />
                                                
                                    <circle  
                                        id='Circle-VectorialApp19R21-9'
                                        cx='200'
                                        cy='200'
                                        r='25'
                                        fill='rgba(255, 255, 255, 0)'
                                        stroke='rgba(0, 175, 255, 1)'
                                        stroke-width='10'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 100.5 75)'
                                    />
                                                
                                    <circle  
                                        id='Circle-VectorialApp19R21-10'
                                        cx='200'
                                        cy='200'
                                        r='25'
                                        fill='rgba(255, 255, 255, 0)'
                                        stroke='rgba(0, 175, 255, 1)'
                                        stroke-width='10'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 100.5 159)'
                                    />
                                                
                                    <circle  
                                        id='Circle-VectorialApp19R21-11'
                                        cx='200'
                                        cy='200'
                                        r='25'
                                        fill='rgba(255, 255, 255, 0)'
                                        stroke='rgba(0, 175, 255, 1)'
                                        stroke-width='10'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -100 159)'
                                    />
                                </g>
                            </g>
                        </Svg>
                    </Graphic>
                    <Text>mathril</Text>
                </Item>
                <Item
                    on:SMUI:action={() => goto(`https://vectorial.app`)}
                >
                    <Graphic>
                        <Svg style="width: 100%; height: 100%;" viewBox="-336 -140 224.00000095367432 222.00000286102295" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="s-96Qa8tULeGx4">
                            <defs class="s-96Qa8tULeGx4">
                                <radialGradient id="radGrad604" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" fr="0%" class="s-96Qa8tULeGx4">
                                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.1)" class="s-96Qa8tULeGx4"></stop>
                                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop>
                                </radialGradient>
                                <linearGradient id="linGrad990" x1="0%" y1="0%" x2="100%" y2="0%" class="s-96Qa8tULeGx4">
                                    <stop offset="0%" stop-color="rgba(255, 0, 0, 1)" class="s-96Qa8tULeGx4"></stop>
                                    <stop offset="100%" stop-color="rgba(0, 159, 163, 1)" class="s-96Qa8tULeGx4"></stop>
                                </linearGradient>
                                <filter id="shadow183" x="0%" y="0%" width="500%" height="500%" class="s-2BksElCIcH9B">
                                    <feDropShadow dx="30" dy="30" stdDeviation="5" flood-color="rgba(0, 0, 0, 0.5)" flood-opacity="1" class="s-2BksElCIcH9B"></feDropShadow>
                                </filter>
                            </defs>
                            <g class="s-96Qa8tULeGx4">
                                <g id="Layer-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)" class="s-QQIalB0-gg3s">  
                                    <circle cx="0" cy="0" r="100" fill="url(#linGrad990)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 -224 -30)" class="s-QOZdKfZP-a_N"></circle>
                                    <g id="Latex-3" fill="rgba(255, 255, 255, 1)" opacity="1" filter="url(#shadow183)" transform="matrix(0.22421523772725804 0 0 0.22026430842809952 -283.0785199922724 22.28708863364809)" class="s-8WhOemGd3PFV">
                                        <defs>
                                            <path id="MJX-1039-TEX-I-1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path>
                                        </defs>
                                        <g stroke-width="0" transform="scale(1,-1)">
                                            <g data-mml-node="math">
                                                <g data-mml-node="mi">
                                                    <use data-c="1D463" xlink:href="#MJX-1039-TEX-I-1D463"></use>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </Svg>
                    </Graphic>
                    <Text>vectorial</Text>
                </Item>
                <Item
                    on:SMUI:action={() => goto(`/notes/quantum`)}
                >
                    <Graphic>
                        <Svg style="width: 100%; height: 100%;" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs></defs>
                            <g>
                                <g  
                                    class='draggable'
                                    id='Layer-VectorialApp52R57-0'
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
                                        id='Circle-VectorialApp52R57-5'
                                        cx='250'
                                        cy='250'
                                        r='200'
                                        fill='rgba(255, 255, 255, 1)'
                                        stroke='rgba(0, 0, 0, 1)'
                                        stroke-width='1'
                                        stroke-dasharray='none'
                                        opacity='1'
                                        filter='none'
                                        mask='none'
                                        transform='matrix(1 0 0 1 -0.12176513671875 0.00628662109375)'
                                    />
                                        
                                    <g  
                                        id='Latex-VectorialApp52R57-2'
                                        fill='rgba(0, 0, 0, 1)'
                                        stroke='undefined'
                                        stroke-width='undefined'
                                        stroke-dasharray='undefined'
                                        opacity='1'
                                        filter='none'
                                        mask='undefined'
                                        transform='matrix(0.21303260973089846 0 0 0.21303260973089846 154.8755053695758 226.5376367221969)'
                                    >
                                        <defs>
                                            <path id="MJX-9906-TEX-I-1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path>
                                            <path id="MJX-9906-TEX-I-1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path>
                                        </defs>
                                        <g stroke-width="0" transform="scale(1,-1)">
                                            <g data-mml-node="math">
                                                <g data-mml-node="mi">
                                                    <use data-c="1D44E" xlink:href="#MJX-9906-TEX-I-1D44E"></use>
                                                </g>
                                                <g data-mml-node="mi" transform="translate(529,0)">
                                                    <use data-c="1D456" xlink:href="#MJX-9906-TEX-I-1D456"></use>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                        
                                    <g  
                                        id='Latex-VectorialApp52R57-3'
                                        fill='rgba(0, 0, 0, 1)'
                                        stroke='undefined'
                                        stroke-width='undefined'
                                        stroke-dasharray='undefined'
                                        opacity='1'
                                        filter='none'
                                        mask='undefined'
                                        transform='matrix(0.052910501891477855 0.05291050189147784 -0.05291050189147784 0.052910501891477855 114.70037247330671 294.52997433510865)'
                                    >
                                        <defs>
                                            <path id="MJX-9907-TEX-B-1D406" d="M465 -10Q281 -10 173 88T64 343Q64 413 85 471T143 568T217 631T298 670Q371 697 449 697Q452 697 459 697T470 696Q502 696 531 690T582 675T618 658T644 641T656 632L732 695Q734 697 745 697Q758 697 761 692T765 668V627V489V449Q765 428 761 424T741 419H731H724Q705 419 702 422T695 444Q683 520 631 577T495 635Q364 635 295 563Q261 528 247 477T232 343Q232 296 236 260T256 185T296 120T366 76T472 52Q481 51 498 51Q544 51 573 67T607 108Q608 111 608 164V214H464V276H479Q506 273 680 273Q816 273 834 276H845V214H765V113V51Q765 16 763 8T750 0Q742 2 709 16T658 40L648 46Q592 -10 465 -10Z"></path>
                                            <path id="MJX-9907-TEX-B-1D42E" d="M40 442L134 446Q228 450 229 450H235V273V165Q235 90 238 74T254 52Q268 46 304 46H319Q352 46 380 67T419 121L420 123Q424 135 425 199Q425 201 425 207Q425 233 425 249V316Q425 354 423 363T410 376Q396 380 369 380H356V442L554 450V267Q554 84 556 79Q561 62 610 62H623V31Q623 0 622 0Q603 0 527 -3T432 -6Q431 -6 431 25V56L420 45Q373 6 332 -1Q313 -6 281 -6Q208 -6 165 14T109 87L107 98L106 230Q106 358 104 366Q96 380 50 380H37V442H40Z"></path>
                                            <path id="MJX-9907-TEX-B-1D42B" d="M405 293T374 293T324 312T305 361Q305 378 312 394Q315 397 315 399Q305 399 294 394T266 375T238 329T222 249Q221 241 221 149V62H308V0H298Q280 3 161 3Q47 3 38 0H29V62H98V210V303Q98 353 96 363T83 376Q69 380 42 380H29V442H32L118 446Q204 450 205 450H210V414L211 378Q247 449 315 449H321Q384 449 413 422T442 360Q442 332 424 313Z"></path>
                                        </defs>
                                        <g stroke-width="0" transform="scale(1,-1)">
                                            <g data-mml-node="math">
                                                <g data-mml-node="mtext">
                                                    <use data-c="1D406" xlink:href="#MJX-9907-TEX-B-1D406"></use>
                                                    <use data-c="1D42E" xlink:href="#MJX-9907-TEX-B-1D42E" transform="translate(904,0)"></use>
                                                    <use data-c="1D42B" xlink:href="#MJX-9907-TEX-B-1D42B" transform="translate(1543,0)"></use>
                                                    <use data-c="1D42E" xlink:href="#MJX-9907-TEX-B-1D42E" transform="translate(2017,0)"></use>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                        
                                    <g  
                                        id='Latex-VectorialApp52R57-4'
                                        fill='rgba(0, 0, 0, 1)'
                                        stroke='undefined'
                                        stroke-width='undefined'
                                        stroke-dasharray='undefined'
                                        opacity='1'
                                        filter='none'
                                        mask='undefined'
                                        transform='matrix(0.05910687980605497 -0.05910687980605495 0.05910687980605495 0.05910687980605497 290.6796566165579 400.81563430213976)'
                                    >
                                        <defs>
                                            <path id="MJX-9908-TEX-B-1D403" d="M39 624V686H270H310H408Q500 686 545 680T638 649Q768 584 805 438Q817 388 817 338Q817 171 702 75Q628 17 515 2Q504 1 270 0H39V62H147V624H39ZM655 337Q655 370 655 390T650 442T639 494T616 540T580 580T526 607T451 623Q443 624 368 624H298V62H377H387H407Q445 62 472 65T540 83T606 129Q629 156 640 195T653 262T655 337Z"></path>
                                            <path id="MJX-9908-TEX-B-1D41E" d="M32 225Q32 332 102 392T272 452H283Q382 452 436 401Q494 343 494 243Q494 226 486 222T440 217Q431 217 394 217T327 218H175V209Q175 177 179 154T196 107T236 69T306 50Q312 49 323 49Q376 49 410 85Q421 99 427 111T434 127T442 133T463 135H468Q494 135 494 117Q494 110 489 97T468 66T431 32T373 5T292 -6Q181 -6 107 55T32 225ZM383 276Q377 346 348 374T280 402Q253 402 230 390T195 357Q179 331 176 279V266H383V276Z"></path>
                                            <path id="MJX-9908-TEX-B-1D42F" d="M401 444Q413 441 495 441Q568 441 574 444H580V382H510L409 156Q348 18 339 6Q331 -4 320 -4Q318 -4 313 -4T303 -3H288Q273 -3 264 12T221 102Q206 135 197 156L96 382H26V444H34Q49 441 145 441Q252 441 270 444H279V382H231L284 264Q335 149 338 149Q338 150 389 264T442 381Q442 382 418 382H394V444H401Z"></path>
                                        </defs>
                                        <g stroke-width="0" transform="scale(1,-1)">
                                            <g data-mml-node="math">
                                                <g data-mml-node="mtext">
                                                    <use data-c="1D403" xlink:href="#MJX-9908-TEX-B-1D403"></use>
                                                    <use data-c="1D41E" xlink:href="#MJX-9908-TEX-B-1D41E" transform="translate(882,0)"></use>
                                                    <use data-c="1D42F" xlink:href="#MJX-9908-TEX-B-1D42F" transform="translate(1409,0)"></use>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </Svg>
                    </Graphic>
                <Text>Quantum</Text>
            </Item>
            <Item
                on:SMUI:action={() => goto(`/courses`)}
            >
                <Graphic class="material-icons">folder</Graphic>
                <Text>Courses</Text>
            </Item>
            <Item
                on:SMUI:action={() => goto(`/students`)}
            >
                <Graphic class="material-icons">groups</Graphic>
                <Text>Students</Text>
            </Item>
        </List>
        <List>
            <!-- {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as cl}
                <Item on:SMUI:action={() => goto(`/class_${cl}`)}>
                    <Graphic class="material-icons">view_headline</Graphic>
                    <Text>Class {cl}</Text>
                </Item>
            {/each} -->
            <!-- <Item on:SMUI:action={() => goto("/home")}>
                <Graphic class="material-icons">home</Graphic>
                <Text>Home</Text>
            </Item> -->
            <!-- {#if $navList.length > 0}
                <Separator />
                {#each $navList as link}
                    <Item on:SMUI:action={() => goto(`/${$page.data.user.publicID}${link.url}`)}>
                        <Graphic class="material-icons">menu_book</Graphic>
                        <Text>{link.name}</Text>
                    </Item>
                {/each}
            {/if} -->
            <!-- <Item on:SMUI:action={() => goto('/settings')}>
                <Graphic class="material-icons">settings</Graphic>
                <Text>Settings</Text>
            </Item> -->
        </List>
        <!-- <Separator />
        {#if isAuth}
            <div class="post">
                <Button on:click={() => goto("/compose")}>
                    <Label>Create Post</Label>
                </Button>
            </div>
        {/if} -->
    </div>
    <div class="bottom" />
</nav>

<style>
    nav {
        /* height: calc(100vh - 5em); */
        /* height: 500px; */
        overflow-y: auto;
        display: flex;
        justify-content: start;
        flex-direction: column;
        /* position: sticky;
        top: 0.5em; */
        padding-bottom: 5em;
    }
    
    /* .post {
        display: flex;
        justify-content: center;
    } */
</style>
