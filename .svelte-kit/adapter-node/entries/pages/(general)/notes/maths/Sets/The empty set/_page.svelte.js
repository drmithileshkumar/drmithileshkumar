import { c as create_ssr_component, s as subscribe, e as escape, k as add_attribute, v as validate_component, p as null_to_empty } from "../../../../../../../chunks/ssr.js";
import { p as presentationMode, c as currentSlide, s as slideCounter, a as selectedSection, b as selectedChapter, d as presentation } from "../../../../../../../chunks/stores4.js";
import { P as Practice } from "../../../../../../../chunks/Practice.js";
/* empty css                                                                */
import { a as randInt } from "../../../../../../../chunks/common.js";
import { Q as Quadratic } from "../../../../../../../chunks/quadratic.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../../../../../../chunks/H3.js";
const css = {
  code: ".display.svelte-1qvfvsn{position:relative;position:-webkit-sticky}.youtube.svelte-1qvfvsn{width:100%;display:flex;position:sticky;top:5em;z-index:10;align-self:flex-start\r\n	}article.svelte-1qvfvsn{position:relative;padding:0.5em}.absolute.svelte-1qvfvsn{margin:auto;width:100%;height:90vh;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1qvfvsn::-webkit-scrollbar{width:0;height:0}.pad.svelte-1qvfvsn{min-height:150px}.thumbnail.svelte-1qvfvsn{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1qvfvsn{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.grid.svelte-1qvfvsn{display:grid;grid-template-columns:auto 420px}.flex.svelte-1qvfvsn{display:flex;flex-direction:column-reverse}.contentpart.svelte-1qvfvsn{padding:0.5em}.gridBackground.svelte-1qvfvsn{background-image:url('/background.svg');background-repeat:no-repeat;background-position:center;background-size:cover}",
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
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        let m1 = randInt(20, 2);
        let n1 = randInt(Math.floor(m1 / 2), 0);
        let m2 = randInt(20, 2);
        let n2 = randInt(Math.floor(m2 / 2), 0);
        let m3 = randInt(20, 2);
        let n3 = randInt(Math.floor(m3 / 2), 0);
        values[0] = `\\(${n} < x < ${m}\\)`;
        values[1] = `\\(${n1} < x < ${m1}\\)`;
        values[2] = `\\(${n2} < x < ${m2}\\)`;
        values[3] = `\\(${n3} < x < ${m3}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following will correspond to an empty set?`;
        break;
      }
      case 1: {
        let q1 = new Quadratic();
        q1.complex(-10, 10);
        let q2 = new Quadratic();
        q2.real(-10, 10);
        let q3 = new Quadratic();
        q3.real(-10, 10);
        let q4 = new Quadratic();
        q4.real(-10, 10);
        values[0] = q1.str();
        values[1] = q2.str();
        values[2] = q3.str();
        values[3] = q4.str();
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = `\\(\\{x:` + values[i] + `=0~\\) and \\(~x~\\) is real.\\(\\}\\)`;
        }
        problemset.s = `Which of the following will correspond to an empty set?`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1oiqp9i_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="description" content="The empty set"><!-- HEAD_svelte-1oiqp9i_END -->`, ""} <article class="${[
    escape(null_to_empty($presentationMode ? "gridBackground" : ""), true) + " svelte-1qvfvsn",
    $presentationMode ? "absolute" : ""
  ].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="thumbnail svelte-1qvfvsn" data-svelte-h="svelte-1t5wc5l"><p class="statement svelte-1qvfvsn">The empty set</p></div>` : ``} ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``} <div class="${"display " + escape(splitMode ? "grid" : "flex", true) + " svelte-1qvfvsn"}"><section class="contentpart svelte-1qvfvsn"><section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `The simplest possible set is one that does not contain any element at all.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `A set which does not contain any element is called the <strong data-svelte-h="svelte-36f0v5">empty</strong> set.`;
        }
      })}`;
    }
  })} <ul>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `An empty set is also called the <em data-svelte-h="svelte-119sll7">null set</em> or the <em data-svelte-h="svelte-thac94">void set</em>.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `An empty set is denoted either as ${escape("{ }")} or \\(\\varphi\\) (read as &quot;phi&quot;).`;
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
          return `The set of positive numbers less than 0 contains no element. Hence, it is an empty set`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `The set of apples in an empty basket is an empty set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Set of prime numbers divisible by 4 is an empty set.`;
        }
      })}`;
    }
  })} ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `The set of real roots of the equation \\(x^2 + 1 = 0\\) is an empty set.`;
        }
      })}`;
    }
  })}</ul></section> <section></section></section> ${!$presentationMode ? `<div class="youtube svelte-1qvfvsn" data-svelte-h="svelte-kyxfk6"><iframe width="420" height="300" src="https://www.youtube.com/embed/-VP7utgjA8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ``}</div> ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `<section><h2 data-svelte-h="svelte-1g25fwj">Practice</h2> ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })} ${$presentationMode && $currentSlide >= 2 ? `<div class="pad svelte-1qvfvsn"></div>` : ``} </article>`;
});
export {
  Page as default
};
