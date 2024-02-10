import { c as create_ssr_component, s as subscribe, e as escape, i as add_attribute, v as validate_component, k as null_to_empty } from "../../../../../../../chunks/ssr.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores3.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { S as Sets } from "../../../../../../../chunks/sets.js";
import { a as randInt } from "../../../../../../../chunks/common.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
const css = {
  code: ".display.svelte-bh5c3l{position:relative;position:-webkit-sticky}.youtube.svelte-bh5c3l{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start\r\n	}article.svelte-bh5c3l{position:relative;padding:0.5em}.absolute.svelte-bh5c3l{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-bh5c3l::-webkit-scrollbar{width:0;height:0}.pad.svelte-bh5c3l{min-height:150px}.thumbnail.svelte-bh5c3l{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-bh5c3l{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:red;text-shadow:1px 1px 3px rgb(4, 4, 4);padding:1em;background-image:url('/notes/maths/sets/equal/thumbnail.svg');background-repeat:no-repeat;background-position:center}.grid.svelte-bh5c3l{display:grid;grid-template-columns:auto 420px}.flex.svelte-bh5c3l{display:flex;flex-direction:column-reverse}.contentpart.svelte-bh5c3l{padding:0.5em}.gridBackground.svelte-bh5c3l{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let splitMode;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let problemset = {
    s: "",
    o: { A: "", B: "", C: "", D: "" },
    c: ""
  };
  const generateProblem = (problemnumber) => {
    let N = 2;
    problemnumber = problemnumber % N;
    let choices = ["A", "B", "C", "D"];
    let correctChoiceIndex = Math.floor(Math.random() * 4);
    problemset.c = choices[correctChoiceIndex];
    let values = [0, 0, 0, 0];
    switch (problemnumber) {
      case 0: {
        let n = randInt(20, 1);
        let m = randInt(n + 1, n + 10) + 10;
        let k = randInt(8, 2);
        let s = new Sets();
        s.randomSet(n, m, k);
        let sbad = new Sets();
        sbad.randomSet(n, n + 20, k);
        let poly = "";
        for (let i = 0; i < s.e.length; i++) {
          poly = poly + `(x - ${s.e[i]})`;
        }
        values[0] = `\\(${s.str()}\\)`;
        values[1] = `\\(${sbad.str()}\\)`;
        values[2] = `\\(${sbad.randomSubset().str()}\\)`;
        values[3] = `\\(${sbad.randomSubset().str()}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Let \\(R\\) be the set of roots of the polynomial \\[${poly} = 0\\] Which of sets is equal to \\(R\\)?`;
        break;
      }
      case 1: {
        let c = randInt(20, 2);
        let b = randInt(20, 2);
        let l = randInt(20, 2);
        let nmin = randInt(1, -1);
        let nmax = randInt(5, 4);
        let a = c;
        let d = b - c * l;
        let mmin = nmin + l;
        let mmax = nmax + l;
        let sign = d < 0 ? "" : "+";
        values[0] = `\\(\\{x: x = ${c}m ${sign} ${d},~${mmin}\\leq m\\leq ${mmax}\\}\\)`;
        values[1] = `\\(\\{x: x = ${c}m ${sign} ${d},~${nmin + 1}\\leq m\\leq ${nmax}\\}\\)`;
        values[2] = `\\(\\{x: x = ${c}m ${sign} ${d},~${nmin}\\leq m\\leq ${nmax}\\}\\)`;
        values[3] = `\\(\\{x: x = ${c}m ${sign} ${d},~${mmin}\\leq m\\leq ${mmax + 1}\\}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Let \\(A = \\{x: x = ${a}n + ${b}, ${nmin}\\leq n\\leq ${nmax}\\}\\). Then which of the set is equal to \\(A\\)?`;
        break;
      }
    }
    problemset = problemset;
    return problemset;
  };
  let DW;
  $$result.css.add(css);
  splitMode = !$presentationMode && DW > 800;
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1mv7jwh_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="Equal sets"><!-- HEAD_svelte-1mv7jwh_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-bh5c3l",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-bh5c3l" data-svelte-h="svelte-mzmfbe"><div class="statement svelte-bh5c3l"><p>Equal sets</p></div></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-bh5c3l"}"><section class="contentpart svelte-bh5c3l"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `So far, we have talked that order of elements in a set do not matter. Repeating an element in a set does not change the set either. Now we formally define what do we mean by the <em data-svelte-h="svelte-166noa8">same</em> set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `Two sets \\(A\\) and \\(B\\) are said to be <em data-svelte-h="svelte-dkksfq">equal</em> if they have exactly the same
                        elements. Otherwise, the sets are said to be <em data-svelte-h="svelte-czjgnh">unequal</em>.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `If \\(A\\) and \\(B\\) are equal sets, we write \\(A = B\\).`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `If \\(A\\) and \\(B\\) are unequal sets, we write \\(A \\neq B\\).`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 4 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `${escape(`\\(\\{1, 2, 3\\} = \\{2, 1, 3\\} = \\{2, 1, 3, 3, 1\\}\\)`)}`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `${escape(`\\(\\{E, F, R\\} = \\{x: x \\)`)} is a letter in FREE${escape(`\\(\\}\\)`)}.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `${escape(`\\(\\{x: x = 3n + 1, 1\\leq n\\leq 4\\} = \\{x: x = 3m - 2, 2\\leq m\\leq 5\\} \\)`)}`;
        }
      })}`;
    }
  })}</ul></section> <section>${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "question", isActive: 8 }, {}, {
        default: () => {
          return `Consider two sets ${escape(`\\(A = \\{x: x=3r-1, r\\in Z\\}\\)`)} and ${escape(`\\(B = \\{x: x=3s + 2, s\\in Z\\}\\)`)}. Is \\(A = B\\)?`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "solution", isActive: 9 }, {}, {
        default: () => {
          return `It is easy to check whether two finite sets are equal. Write them in Roster form and just compare their elements. How do we check equality of infinite sets? We need concept of <em data-svelte-h="svelte-1czdgdf">subsets</em>, which is the next topic.`;
        }
      })}`;
    }
  })}</section></section> ${!$presentationMode ? `<div class="youtube svelte-bh5c3l" data-svelte-h="svelte-1n5uzq"><iframe width="420" height="300" src="https://www.youtube.com/embed/jbBsClpZmPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``} ${$presentationMode ? `<div class="slate" data-svelte-h="svelte-idn70a"></div>` : ``}</div> <section>${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section> ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-bh5c3l"></div>` : ``} </article>`;
});
export {
  Page as default
};
