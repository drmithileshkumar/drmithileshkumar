import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component } from './index-87a5488c.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-74e83705.js';
import { P as Practice } from './Practice-20cc213b.js';
import { r as randInt } from './common-f376ad5d.js';
import { Q as Quadratic } from './quadratic-ce684b8f.js';
import { p as page } from './stores-d134afd4.js';
import { I as Item, P, L as Li } from './Image.svelte_svelte_type_style_lang-36e03bbf.js';
import { H as H3 } from './H3-a07dcd32.js';
import './index3-41f46450.js';

const css = {
  code: "article.svelte-rlw4in{position:relative;padding:0.5em}.absolute.svelte-rlw4in{margin:auto;width:100%;height:90vh;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-rlw4in::-webkit-scrollbar{width:0;height:0}.pad.svelte-rlw4in{min-height:150px}.thumbnail.svelte-rlw4in{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-rlw4in{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $page, $$unsubscribe_page;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  let problemset = {
    s: "",
    o: { "A": "", "B": "", "C": "", "D": "" },
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
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1cd2i6b_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"The empty set"}"><!-- HEAD_svelte-1cd2i6b_END -->`, ""}
    <article class="${["svelte-rlw4in", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-rlw4in"}"><p class="${"statement svelte-rlw4in"}">The empty set
                </p></div>` : ``}
        ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `The simplest possible set is one that does not contain any element at all.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 1 }, {}, {
        default: () => {
          return `A set which does not contain any element is called the <strong>empty</strong> set.
                `;
        }
      })}`;
    }
  })}
            <ul>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `An empty set is also called the <em>null set</em> or the <em>void set</em>.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `An empty set is denoted either as ${escape("{ }")} or \\(\\varphi\\) (read as &quot;phi&quot;).
                `;
        }
      })}`;
    }
  })}</ul></section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 4 }, {}, {
        default: () => {
          return `Examples
                `;
        }
      })}`;
    }
  })}
            <ul>${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The set of positive numbers less than 0 contains no element. Hence, it is an empty set
                    `;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `The set of apples in an empty basket is an empty set.
                    `;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Set of prime numbers divisible by 4 is an empty set.
                    `;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `The set of real roots of the equation \\(x^2 + 1 = 0\\) is an empty set.
                    `;
        }
      })}`;
    }
  })}</ul></section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `<section><h2>Practice</h2>
                    ${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section>
        ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-rlw4in"}"></div>` : ``}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-94784a6d.js.map
