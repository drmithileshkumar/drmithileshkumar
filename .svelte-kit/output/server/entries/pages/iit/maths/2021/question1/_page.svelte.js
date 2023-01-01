import { c as create_ssr_component, d as subscribe, e as escape, k as add_attribute, j as null_to_empty } from "../../../../../../chunks/index.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { T as TeX } from "../../../../../../chunks/constants.js";
/* empty css                                                             */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-mz2qc9{display:flex;position:relative}article.svelte-mz2qc9{position:relative;padding:0.5em}aside.svelte-mz2qc9{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-mz2qc9{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-mz2qc9::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-mz2qc9{color:tomato;border-radius:10px;transition:all 1s}.pad.svelte-mz2qc9{min-height:100px}figure.svelte-mz2qc9{width:300px}.overlay.svelte-mz2qc9{position:absolute;z-index:2;left:0.5em;top:0;margin:auto;width:calc(100% - 2em);height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.colors.svelte-mz2qc9{display:flex;gap:0.5em;align-items:center}.presentationMode.svelte-mz2qc9{display:flex;gap:1em;height:1em;margin-bottom:0.5em}.lineWidth.svelte-mz2qc9{display:flex;align-items:center;gap:1em}.thumbnail.svelte-mz2qc9{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-mz2qc9{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation, overlay;
  let presentationMode = false;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1iux0bb_START -->${$$result.title = `<title>Mathematics Question 1</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-1iux0bb_END -->`, ""}
<div class="${"presentationMode svelte-mz2qc9"}"><label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
    </label>
    ${``}</div>

<div class="${"container svelte-mz2qc9"}">${``}
    ${`<span${add_attribute("this", overlay, 0)}></span>`}
    ${``}
    <article class="${["svelte-mz2qc9", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}>${``}    
        ${`<h1>Question 1 [JEE adv, 2021]</h1>`}
        ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-mz2qc9"}">Let \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\) be vectors in three-dimensional space, where \\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors which are not perpendicular to each other and \\[${escape(TeX.vec("u"))}\\cdot ${escape(TeX.vec("w"))} = 1,\\quad ${escape(TeX.vec("v"))}\\cdot ${escape(TeX.vec("w"))} = 1\\quad ${escape(TeX.vec("w"))}\\cdot ${escape(TeX.vec("w"))} = 4\\]
                If the volume of the parallelepiped, whose adjacent sides are represented by the vectors \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\), is \\(${escape(TeX.sqrt("2"))}\\), then the value of \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|\\) is ______.
            </p>`}
        
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Concepts</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}" style="${"display:flex; align-items: center; flex-wrap:wrap;"}"><span>\\(\\bullet\\quad\\) The volume of the parallelepiped is given by the scalar triple product of the side vectors. The scalar triple product of three vectors \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\) is equal to ${escape(`\\[
                            \\vec{u}\\cdot(\\vec{v}\\times\\vec{w}) = \\left |\\begin{matrix}
                            u_x & v_x & w_x\\\\
                            u_y & v_y & w_y\\\\
                            u_z & v_z & w_z
                            \\end{matrix}\\right | = \\Big|${TeX.vec("u")}~~${TeX.vec("v")}~~${TeX.vec("w")}\\Big|
                            \\]`)}</span>
                    
                    <figure class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-237.40884399414062 -22.334999084472656 400 180"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><defs><marker id="${"Arrow-WebdutTeam23R90-8"}" refX="${"0"}" refY="${"5"}" markerWidth="${"6"}" markerHeight="${"6"}" markerUnits="${"strokeWidth"}" orient="${"auto-start-reverse"}" viewBox="${"0 0 10 10"}" preserveAspectRatio="${"xMidYMid meet"}"><path d="${"M 0 0 L 10 5 L 0 10 z"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"0"}" stroke-dasharray="${"none"}" opacity="${"1"}" filter="${"none"}" transform="${"matrix(1 0 0 1 0 0)"}"></path></marker></defs><g><g class="${"draggable"}" id="${"Layer-WebdutTeam23R90-0"}" fill="${"none"}" stroke="${"none"}" stroke-width="${"0"}" stroke-dasharray="${"none"}" opacity="${"1"}" mask="${"none"}" filter="${"none"}" transform="${"matrix(1 0 0 1 0 0)"}"><path id="${"Path-WebdutTeam23R90-6"}" d="${"M -123.4921875,-82.5 L -231.9921875,-5 L -267.9921875,53 L -157.15885416666669,-25.166666666666686 L -123.4921875,-82.5 Z"}" fill="${"rgba(255, 255, 255, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 270.83333333333337 68.50000000000003)"}"></path><path id="${"Path-WebdutTeam23R90-2"}" d="${"M -123.4921875,-82.5 L -230.4921875,-4.5 H -5.825520833333314 L 104.5078125,-82.5 H -123.4921875 Z"}" fill="${"rgba(19, 64, 36, 0.229)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 9 125)"}"></path><path id="${"Path-WebdutTeam23R90-5"}" d="${"M -123.4921875,-82.5 L -230.4921875,-4.5 L -264.4921875,52.5 L -157.15885416666669,-25.666666666666686 L -123.4921875,-82.5 Z"}" fill="${"rgba(255, 255, 255, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 42.333333333333314 68.83333333333334)"}"></path><path id="${"Path-WebdutTeam23R90-17"}" d="${"M 8.5078125,121.16666666666669 L 105.17447916666669,50.16666666666666"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 -229 -1)"}"></path><path id="${"Path-WebdutTeam23R90-4"}" d="${"M -123.4921875,-82.5 L -230.4921875,-4.5 H -5.4921875 L 104.5078125,-82.5 H -123.4921875 Z"}" fill="${"rgba(255, 255, 255, 0.8)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 42.230769230769226 69.26923076923077)"}"></path><path id="${"Path-WebdutTeam23R90-7"}" d="${"M -221.9921875,120.5 V 49.5"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 224 -1.076923076923066)"}"></path><g id="${"Latex-WebdutTeam23R90-9"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -113 149)"}"><defs><path id="${"MJX-9681-TEX-I-1D463"}" d="${"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}"></path><path id="${"MJX-9681-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D463"}" xlink:href="${"#MJX-9681-TEX-I-1D463"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(270.3,32) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-9681-TEX-N-20D7"}"></use></g></g></g></g></g></g><g id="${"Latex-WebdutTeam23R90-10"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 61 112)"}"><defs><path id="${"MJX-9680-TEX-I-1D464"}" d="${"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}"></path><path id="${"MJX-9680-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D464"}" xlink:href="${"#MJX-9680-TEX-I-1D464"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(441.3,32) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-9680-TEX-N-20D7"}"></use></g></g></g></g></g></g><g id="${"Latex-WebdutTeam23R90-11"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 42.76923076923072 79.53846153846155)"}"><defs><path id="${"MJX-9679-TEX-I-1D462"}" d="${"M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}"></path><path id="${"MJX-9679-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D462"}" xlink:href="${"#MJX-9679-TEX-I-1D462"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(313.8,31) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-9679-TEX-N-20D7"}"></use></g></g></g></g></g></g><g id="${"Latex-WebdutTeam23R90-12"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -30.76923076923083 31.923076923076934)"}"><defs><path id="${"MJX-9678-TEX-I-1D463"}" d="${"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}"></path><path id="${"MJX-9678-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path><path id="${"MJX-9678-TEX-N-D7"}" d="${"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}"></path><path id="${"MJX-9678-TEX-I-1D464"}" d="${"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D463"}" xlink:href="${"#MJX-9678-TEX-I-1D463"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(270.3,32) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-9678-TEX-N-20D7"}"></use></g></g></g><g data-mml-node="${"mo"}" transform="${"translate(707.2,0)"}"><use data-c="${"D7"}" xlink:href="${"#MJX-9678-TEX-N-D7"}"></use></g><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}" transform="${"translate(1707.4,0)"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D464"}" xlink:href="${"#MJX-9678-TEX-I-1D464"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(441.3,32) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-9678-TEX-N-20D7"}"></use></g></g></g></g></g></g><path id="${"Path-WebdutTeam23R90-13"}" d="${"M -222.15885416666666,120.83333333333334 H -7.4921875"}" fill="${"rgba(255, 64, 36, 0.229)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path><path id="${"Path-WebdutTeam23R90-14"}" d="${"M 2.5078125,120.5 L 104.5078125,49.5"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path><path id="${"Path-WebdutTeam23R90-15"}" d="${"M 2.5078125,120.5 L 31.5078125,74.83333333333334"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path><path id="${"Path-WebdutTeam23R90-16"}" d="${"M 3.841145833333343,120.5 L 32.5078125,72.5"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 -225 0)"}"></path></g></g></svg></figure></p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">\\(\\bullet \\quad|A|^2 = |A^TA|\\)
                </p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">\\(\\bullet\\quad\\)If \\(${escape(`A = [${TeX.vec("u")}~~${TeX.vec("v")}~~${TeX.vec("w")}]`)}\\)
                    ${escape(`\\[
                        |A^TA| =\\left |\\begin{matrix}
                        \\vec{u}\\cdot\\vec{u} & \\vec{u}\\cdot\\vec{v} & \\vec{u}\\cdot\\vec{w}\\\\
                        \\vec{v}\\cdot\\vec{u} & \\vec{v}\\cdot\\vec{v} & \\vec{v}\\cdot\\vec{w}\\\\
                        \\vec{w}\\cdot\\vec{u} & \\vec{w}\\cdot\\vec{v} & \\vec{w}\\cdot\\vec{w}
                        \\end{matrix}\\right |
                        \\]`)}</p>`}</section>
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Solution</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Working backwards, we need to evaluate \\[(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|)^2 = (3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))})\\cdot (3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))})\\] \\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors, to solve the problem we need the value of \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))}\\).</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Step 1</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Use the triple product of the vectors which is equal to the given volume. \\[\\] ${escape(`\\[\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}) = \\sqrt{2}\\]`)} ${escape(`\\[\\Big|${TeX.vec("u")}~~${TeX.vec("v")}~~${TeX.vec("w")}\\Big| = \\sqrt{2}\\]`)}</p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">We can write
                    ${escape(`\\[\\Big|${TeX.vec("u")}~~${TeX.vec("v")}~~${TeX.vec("w")}\\Big|^2 = \\Big|[${TeX.vec("u")}~~${TeX.vec("v")}~~${TeX.vec("w")}]^T[${TeX.vec("u")}~~${TeX.vec("v")}~~${TeX.vec("w")}]\\Big| = 2\\]`)}</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Step 2</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">The above square gives
                    ${escape(`\\[
                        \\left |\\begin{matrix}
                        \\vec{u}\\cdot\\vec{u} & \\vec{u}\\cdot\\vec{v} & \\vec{u}\\cdot\\vec{w}\\\\
                        \\vec{v}\\cdot\\vec{u} & \\vec{v}\\cdot\\vec{v} & \\vec{v}\\cdot\\vec{w}\\\\
                        \\vec{w}\\cdot\\vec{u} & \\vec{w}\\cdot\\vec{v} & \\vec{w}\\cdot\\vec{w}
                        \\end{matrix}\\right | = 2
                        \\]`)}</p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Substituting the given dot products
                    ${escape(`\\[
                        \\left |\\begin{matrix}
                        1 & \\vec{u}\\cdot\\vec{v} & 1\\\\
                        \\vec{v}\\cdot\\vec{u} & 1 & 1\\\\
                        1 & 1 & 4
                        \\end{matrix}\\right | = 2
                        \\]`)}
                    leaves with only unknown \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))}\\)
                </p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Expanding the determinant,
                        ${escape(`\\[
                            \\begin{eqnarray}
                            4(\\vec{u}\\cdot\\vec{v})^2 - 2(\\vec{u}\\cdot\\vec{v}) = 0\\\\
                            \\vec{u}\\cdot\\vec{v} = 0 \\text{~or~} \\vec{u}\\cdot\\vec{v} = \\frac{1}{2}
                            \\end{eqnarray}
                            \\]`)}
                    As \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))}\\neq 0\\), the only solution is \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))} = ${escape(TeX.dfrac("1", "2"))}\\)
                </p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">Step 3</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-mz2qc9"}">\\((|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|)^2 = 9 + 25 + 30\\times${escape(TeX.dfrac("1", "2"))} = 49\\)
                    which implies \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}| = 7\\)
                </p>`}
            ${``}</section>
        </article>
    ${``}</div>`;
});
export {
  Page as default
};
