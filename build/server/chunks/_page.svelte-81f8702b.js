import { c as create_ssr_component, d as subscribe, e as escape, r as add_classes, f as add_attribute } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-07eefb22.js';
import { p as page } from './stores-f8df57c6.js';
import './index3-3865ea4a.js';

const css = {
  code: ".image.svelte-1db1n51{display:flex;justify-content:center;width:min(95vw, 300px);margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-ho89p8_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Power set"}"><!-- HEAD_svelte-ho89p8_END -->`, ""}
    <article${add_classes(($presentationMode ? "absolute" : "").trim())}${add_attribute("this", $presentation, 0)}><h1>${escape($selectedSection)}</h1>
        <section><p>To define complement of a set we need to fix a universal set first.</p></section>
        <section><div class="${"definition"}"><p>Let \\(U\\) be the universal set and \\(A\\) a subset of \\(U\\). Then the complement of \\(A\\) is the set of all elements of \\(U\\) which are not the elements of \\(U\\). ${escape(`\\[A' = \\{x:x\\in U~~and~~x\\notin A\\}\\]`)}</p></div>
            <div class="${"image svelte-1db1n51"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-239 -132 310 210"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><defs></defs><g><g class="${"draggable"}" id="${"Layer-VectorialApp0R43-0"}" fill="${"none"}" stroke="${"none"}" stroke-width="${"0"}" stroke-dasharray="${"none"}" opacity="${"1"}" mask="${"undefined"}" filter="${"undefined"}" transform="${"matrix(1 0 0 1 0 0)"}"><rect id="${"Rect-VectorialApp0R43-2"}" x="${"0"}" y="${"0"}" width="${"300"}" height="${"200"}" rx="${"0"}" ry="${"0"}" fill="${"rgba(0, 175, 255, 0.3)"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"1"}" stroke-dasharray="${"none"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" transform="${"matrix(1 0 0 1 -234 -127)"}"></rect><circle id="${"Circle-VectorialApp0R43-3"}" cx="${"0"}" cy="${"0"}" r="${"50"}" fill="${"rgba(255, 255, 255, 1)"}" stroke="${"rgba(0, 0, 0, 1)"}" stroke-width="${"2"}" stroke-dasharray="${"none"}" opacity="${"1"}" filter="${"none"}" mask="${"none"}" transform="${"matrix(1 0 0 1 -81 -26)"}"></circle><g id="${"Latex-VectorialApp0R43-4"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -224 -96)"}"><defs><path id="${"MJX-509-TEX-I-1D448"}" d="${"M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"mi"}"><use data-c="${"1D448"}" xlink:href="${"#MJX-509-TEX-I-1D448"}"></use></g></g></g></g><g id="${"Latex-VectorialApp0R43-5"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 -93 -18)"}"><defs><path id="${"MJX-510-TEX-I-1D434"}" d="${"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"mi"}"><use data-c="${"1D434"}" xlink:href="${"#MJX-510-TEX-I-1D434"}"></use></g></g></g></g><g id="${"Latex-VectorialApp0R43-6"}" fill="${"rgba(0, 0, 0, 1)"}" stroke="${"undefined"}" stroke-width="${"undefined"}" stroke-dasharray="${"undefined"}" opacity="${"1"}" filter="${"none"}" mask="${"undefined"}" transform="${"matrix(0.03 0 0 0.03 23 58)"}"><defs><path id="${"MJX-511-TEX-I-1D434"}" d="${"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}"></path><path id="${"MJX-511-TEX-V-2032"}" d="${"M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"}"></path></defs><g stroke-width="${"0"}" transform="${"scale(1,-1)"}"><g data-mml-node="${"math"}"><g data-mml-node="${"msup"}"><g data-mml-node="${"mi"}"><use data-c="${"1D434"}" xlink:href="${"#MJX-511-TEX-I-1D434"}"></use></g><g data-mml-node="${"mo"}" transform="${"translate(783,413) scale(0.707)"}"><use data-c="${"2032"}" xlink:href="${"#MJX-511-TEX-V-2032"}"></use></g></g></g></g></g></g></g></svg></div></section>
        <section><h3>Examples</h3>
            <p class="${"examples"}">Let ${escape(`\\(U = \\{1, 2, 3\\}\\)`)} and ${escape(`\\(A = \\{2, 3\\}\\)`)}, then ${escape(`\\(A' = \\{1\\}\\)`)}</p>
            <p class="${"examples"}">Let ${escape(`\\(U = \\{1, 2\\}\\)`)} and ${escape(`\\(A = \\{1, 2\\}\\)`)}, then ${escape(`\\(A' = \\phi\\)`)}</p>
            <p class="${"examples"}">Let ${escape(`\\(U = \\{1, 2\\}\\)`)} and ${escape(`\\(A = \\phi\\)`)}, then ${escape(`\\(A' = \\{1, 2\\}\\)`)}</p></section>
        <section><h3>Some properties of the Operation of Union</h3>
            <ol><li>\\(A&#39; = U - A\\)</li>
                <li>\\(A\\cup A&#39; = U\\) (Complement law)</li>
                <li>\\(A\\cap A&#39; = \\phi\\) (Complement law)</li>
                <li>\\((A\\cup B)&#39; = A&#39;\\cap B&#39;\\) (De Morgan&#39;s law)</li>
                <li>\\((A\\cap B)&#39; = A&#39;\\cup B&#39;\\) (De Morgan&#39;s law)</li>
                <li>\\((A&#39;)&#39; = A\\) (Law of double complementation)</li>
                <li>\\(U&#39; = \\phi\\) (Law of U)</li>
                <li>\\(\\phi&#39; = U\\) (Law of \\(\\phi\\))</li></ol></section>
        </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-81f8702b.js.map
