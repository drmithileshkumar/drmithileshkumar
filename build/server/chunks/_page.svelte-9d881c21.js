import { c as create_ssr_component, d as subscribe, e as escape, i as add_attribute, h as null_to_empty } from './index-13a715ed.js';
import { p as page } from './stores-8ce7b459.js';
import { T as TeX } from './constants-b4a0d30f.js';

const css = {
  code: ".container.svelte-miwm3o{display:flex}article.svelte-miwm3o{padding:0.5em}aside.svelte-miwm3o{background-color:rgb(230, 228, 228);cursor:pointer;width:1em}.absolute.svelte-miwm3o{margin:auto;width:90vw;height:min(80vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-miwm3o::-webkit-scrollbar{width:0;height:0}.currentActive.svelte-miwm3o{background:gray;color:white;padding:1em;border-radius:10px;transition:all 1s}.pad.svelte-miwm3o{min-height:100px}figure.svelte-miwm3o{width:300px}",
  map: null
};
async function load({ session, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:3000")) {
    return {
      status: 301,
      redirect: `https://drmithileshkumar.com${url.pathname}`
    };
  }
  return { props: {} };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let presentation;
  let presentationMode = false;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1iux0bb_START -->${$$result.title = `<title>Mathematics Question 1</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"IIT JEE Advanced Mathematics 2021"}"><!-- HEAD_svelte-1iux0bb_END -->`, ""}
<label><input type="${"checkbox"}"${add_attribute("checked", presentationMode, 1)}> Presentation Mode
</label>
<div class="${"container svelte-miwm3o"}">${``}
    <article class="${["svelte-miwm3o", ""].join(" ").trim()}"${add_attribute("this", presentation, 0)}><h1>Question 1 [JEE adv, 2021]</h1>
        ${`<p class="${"question " + escape(
    "",
    true
  ) + " svelte-miwm3o"}">Let \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\) be vectors in three-dimensional space, where \\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors which are not perpendicular to each other and \\[${escape(TeX.vec("u"))}\\cdot ${escape(TeX.vec("w"))} = 1,\\quad ${escape(TeX.vec("v"))}\\cdot ${escape(TeX.vec("w"))} = 1\\quad ${escape(TeX.vec("w"))}\\cdot ${escape(TeX.vec("w"))} = 4\\]
                If the volume of the parallelopiped, whose adjacent sides are represented by the vectors \\(${escape(TeX.vec("u"))}, ${escape(TeX.vec("v"))}\\) and \\(${escape(TeX.vec("w"))}\\), is \\(${escape(TeX.sqrt("2"))}\\), then the value of \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|\\) is ______.
            </p>`}
        
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Concepts</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}" style="${"display:flex; align-items: center; flex-wrap:wrap;"}"><span>The volume of the parallelopiped is given by the scalar triple product of the side vectors. The scalar triple product of three vectors \\(${escape(TeX.vec("a"))}, ${escape(TeX.vec("b"))}\\) and \\(${escape(TeX.vec("c"))}\\) is equal to \\(${escape(TeX.vec("c"))}\\cdot (${escape(TeX.vec("a"))}\\times${escape(TeX.vec("b"))})\\)
                    </span>
                    
                    <figure class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-279.25108337402344 -33.099998474121094 450 200"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><defs><marker id="${"Arrow-WebdutTeam23R90-8"}" refX="${"0"}" refY="${"5"}" markerWidth="${"6"}" markerHeight="${"6"}" markerUnits="${"strokeWidth"}" orient="${"auto-start-reverse"}" viewBox="${"0 0 10 10"}" preserveAspectRatio="${"xMidYMid meet"}"><path d="${"M 0 0 L 10 5 L 0 10 z"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"0"}" stroke-dasharray="${"none"}" opacity="${"1"}" filter="${"none"}" transform="${"matrix(1 0 0 1 0 0)"}"></path></marker></defs><g><g class="${"draggable"}" id="${"Layer-WebdutTeam23R90-0"}" fill="${"none"}" stroke="${"none"}" stroke-width="${"0"}" stroke-dasharray="${"none"}" opacity="${"1"}" mask="${"none"}" filter="${"none"}" transform="${"matrix(1 0 0 1 0 0)"}"><path id="${"Path-WebdutTeam23R90-2"}" d="${"M -123.4921875,-82.5 L -230.4921875,-4.5 H -5.4921875 L 104.5078125,-82.5 H -123.4921875 Z"}" fill="${"rgba(70, 64, 36, 0.229)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 9 125)"}"></path><path id="${"Path-WebdutTeam23R90-5"}" d="${"M -123.4921875,-82.5 L -230.4921875,-4.5 L -264.4921875,52.5 L -157.15885416666669,-25.666666666666686 L -123.4921875,-82.5 Z"}" fill="${"rgba(255, 255, 255, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 42.333333333333314 68.33333333333334)"}"></path><path id="${"Path-WebdutTeam23R90-6"}" d="${"M -123.4921875,-82.5 L -231.9921875,-5 L -267.9921875,53 L -157.15885416666669,-25.166666666666686 L -123.4921875,-82.5 Z"}" fill="${"rgba(255, 255, 255, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 271.33333333333337 67.50000000000003)"}"></path><path id="${"Path-WebdutTeam23R90-4"}" d="${"M -123.4921875,-82.5 L -230.4921875,-4.5 H -5.4921875 L 104.5078125,-82.5 H -123.4921875 Z"}" fill="${"rgba(255, 255, 255, 0.8)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"none"}" transform="${"matrix(1 0 0 1 44 67)"}"></path><path id="${"Path-WebdutTeam23R90-7"}" d="${"M -221.9921875,120.5 V 49.5"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path><g id="${"Latex-WebdutTeam23R90-9"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -113 149)"}"><defs><path id="${"MJX-6254-TEX-I-1D44E"}" d="${"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}"></path><path id="${"MJX-6254-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D44E"}" xlink:href="${"#MJX-6254-TEX-I-1D44E"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(264.5,31) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-6254-TEX-N-20D7"}"></use></g></g></g></g></g></g><g id="${"Latex-WebdutTeam23R90-10"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 61 112)"}"><defs><path id="${"MJX-6255-TEX-I-1D44F"}" d="${"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}"></path><path id="${"MJX-6255-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D44F"}" xlink:href="${"#MJX-6255-TEX-I-1D44F"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(214.5,283) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-6255-TEX-N-20D7"}"></use></g></g></g></g></g></g><g id="${"Latex-WebdutTeam23R90-11"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -3 98)"}"><defs><path id="${"MJX-6256-TEX-I-1D450"}" d="${"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}"></path><path id="${"MJX-6256-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D450"}" xlink:href="${"#MJX-6256-TEX-I-1D450"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(272.1,31) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-6256-TEX-N-20D7"}"></use></g></g></g></g></g></g><g id="${"Latex-WebdutTeam23R90-12"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -258 30)"}"><defs><path id="${"MJX-6257-TEX-I-1D44E"}" d="${"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}"></path><path id="${"MJX-6257-TEX-N-20D7"}" d="${"M377 694Q377 702 382 708T397 714Q404 714 409 709Q414 705 419 690Q429 653 460 633Q471 626 471 615Q471 606 468 603T454 594Q411 572 379 531Q377 529 374 525T369 519T364 517T357 516Q350 516 344 521T337 536Q337 555 384 595H213L42 596Q29 605 29 615Q29 622 42 635H401Q377 673 377 694Z"}"></path><path id="${"MJX-6257-TEX-N-D7"}" d="${"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}"></path><path id="${"MJX-6257-TEX-I-1D44F"}" d="${"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D44E"}" xlink:href="${"#MJX-6257-TEX-I-1D44E"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(264.5,31) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-6257-TEX-N-20D7"}"></use></g></g></g><g data-mml-node="${"mo"}" transform="${"translate(751.2,0)"}"><use data-c="${"D7"}" xlink:href="${"#MJX-6257-TEX-N-D7"}"></use></g><g data-mml-node="${"TeXAtom"}" data-mjx-texclass="${"ORD"}" transform="${"translate(1751.4,0)"}"><g data-mml-node="${"mover"}"><g data-mml-node="${"mi"}"><use data-c="${"1D44F"}" xlink:href="${"#MJX-6257-TEX-I-1D44F"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(214.5,283) translate(-250 0)"}"><use data-c="${"20D7"}" xlink:href="${"#MJX-6257-TEX-N-20D7"}"></use></g></g></g></g></g></g><path id="${"Path-WebdutTeam23R90-13"}" d="${"M -220.4921875,120.5 H -7.4921875"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path><path id="${"Path-WebdutTeam23R90-14"}" d="${"M 2.5078125,120.5 L 104.5078125,49.5"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path><path id="${"Path-WebdutTeam23R90-15"}" d="${"M 2.5078125,120.5 L 32.5078125,72.5"}" fill="${"rgba(0, 0, 0, 0)"}" fill-rule="${"evenodd"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" stroke-linecap="${"butt"}" stroke-linejoin="${"miter"}" stroke-miterlimit="${"4"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" marker-start="${"none"}" marker-mid="${"none"}" marker-end="${"url(#Arrow-WebdutTeam23R90-8)"}" transform="${"matrix(1 0 0 1 0 0)"}"></path></g></g></svg></figure></p>`}</section>
        <section>${`<h2 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Solution</h2>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">\\(${escape(TeX.vec("u"))}\\) and \\(${escape(TeX.vec("v"))}\\) are unit vectors, to solve the problem we need the value of \\(${escape(TeX.vec("u"))}\\cdot${escape(TeX.vec("v"))}\\).</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Step 1</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Use triple product of the vectors which is equal to the given volume. ${escape(`\\[\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}) = \\sqrt{2}\\]`)}</p>`}
            ${`<h4 class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Step 2</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Squaring the above equation gives
                    ${escape(`\\[
                        (\\vec{u}\\cdot(\\vec{v}\\times\\vec{w}))^2 = \\left |\\begin{matrix}
                        \\vec{u}\\cdot\\vec{u} & \\vec{u}\\cdot\\vec{v} & \\vec{u}\\cdot\\vec{w}\\\\
                        \\vec{v}\\cdot\\vec{u} & \\vec{v}\\cdot\\vec{v} & \\vec{v}\\cdot\\vec{w}\\\\
                        \\vec{w}\\cdot\\vec{u} & \\vec{w}\\cdot\\vec{v} & \\vec{w}\\cdot\\vec{w}
                        \\end{matrix}\\right | = 2
                        \\]`)}</p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">This implies
                    ${escape(`\\[
                        \\left |\\begin{matrix}
                        1 & \\vec{u}\\cdot\\vec{v} & 1\\\\
                        \\vec{v}\\cdot\\vec{u} & 1 & 1\\\\
                        1 & 1 & 4
                        \\end{matrix}\\right | = 2
                        \\]`)}</p>`}
            ${`<p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">Hence,
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
  ) + " svelte-miwm3o"}">Step 3</h4>
                <p class="${escape(
    null_to_empty(""),
    true
  ) + " svelte-miwm3o"}">\\((|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}|)^2 = 9 + 25 + 30\\times${escape(TeX.dfrac("1", "2"))} = 49\\)
                    This implies \\(|3${escape(TeX.vec("u"))} + 5${escape(TeX.vec("v"))}| = 7\\)
                </p>`}
            ${``}</section></article>
    ${``}</div>`;
});

export { Page as default, load };
//# sourceMappingURL=_page.svelte-9d881c21.js.map
