import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component } from './index3-f5b946c7.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-39bfebc4.js';
import { P as Practice } from './Practice-1cc73348.js';
import { r as randInt } from './common-f376ad5d.js';
import { p as page } from './stores-de16fb70.js';
import { I as Item, P, L as Li } from './Image.svelte_svelte_type_style_lang-0f4e050f.js';
import { H as H3 } from './H3-259583ba.js';
import { H as H2 } from './H2-447ebbbf.js';
import './index2-3468083b.js';

const css = {
  code: "article.svelte-swui9i{position:relative;padding:0.5em}.absolute.svelte-swui9i{margin:auto;width:100%;height:600px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-swui9i::-webkit-scrollbar{width:0;height:0}.pad.svelte-swui9i{min-height:150px}.thumbnail.svelte-swui9i{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-swui9i{background:radial-gradient(rgba(120, 0, 150, 0.3), rgba(0, 93, 180, 0.3));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}.material.svelte-swui9i{display:grid;grid-template-columns:1fr 1fr}.flex.svelte-swui9i{display:flex}",
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
    o: { A: "", B: "", C: "", D: "" },
    c: ""
  };
  const generateProblem = (problemnumber) => {
    let N = 1;
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
        values[0] = `\\(${n - m - 1}\\)`;
        values[1] = `\\(${n - m}\\)`;
        values[2] = `\\(${n - m + 1}\\)`;
        values[3] = `\\(${n - m + 2}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `What is the size of set containing \\(x\\) that satisfies \\[${m}< x < ${n}\\]`;
        break;
      }
      case 1: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${m} < x < ${n}\\)`;
        values[1] = `\\(${m} > x < ${n}\\)`;
        values[2] = `\\(${n} < x > ${m}\\)`;
        values[3] = `\\(${m} < x > ${n}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following corresponds to a finite set?`;
        break;
      }
      case 2: {
        let m = randInt(20, 1);
        m = Math.random() > 0.5 ? -m : m;
        let n = m > 0 ? randInt(2 * m, m + 1) : randInt(m + 1, m + 10);
        values[0] = `\\(${m} < x < ${n}\\)`;
        values[1] = `\\(${m} > x < ${n}\\)`;
        values[2] = `\\(${n} < x > ${m}\\)`;
        values[3] = `\\(${m} < x > ${n}\\)`;
        for (let i = 0; i < 4; i++) {
          problemset.o[choices[(correctChoiceIndex + i) % 4]] = values[i];
        }
        problemset.s = `Which of the following does not correspond to an infinite set?`;
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
  return `${$$result.head += `<!-- HEAD_svelte-ykzmzv_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Finite and infinite sets"}"><!-- HEAD_svelte-ykzmzv_END -->`, ""}
<article class="${["svelte-swui9i", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-swui9i"}"><p class="${"statement svelte-swui9i"}">Why is the set of primes infinite?</p></div>` : ``}
    <div class="${"material " + escape($presentationMode ? "" : "flex", true) + " svelte-swui9i"}"><div class="${"content"}">${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
            ${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Size of a set`;
        }
      })}`;
    }
  })}
            <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `The analysis of sets begin with knowing its size.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 2 }, {}, {
        default: () => {
          return `The size of a set is equal to the number of elements in the set.
                    `;
        }
      })}`;
    }
  })}
                <ul>${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `The size of a set is also called the <em>cardinality</em> of the set.
                        `;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `For a set \\(A\\), its size is denote by \\(|A|\\) or \\(n(A)\\).`;
        }
      })}`;
    }
  })}</ul>
                ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "remark", isActive: 5 }, {}, {
        default: () => {
          return `Elements are counted only once. Repeating an element in the set will not change its size.
                    `;
        }
      })}`;
    }
  })}</section>
            <section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 6 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
                <ul>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `The size of set ${escape("\\(A = \\{1, 2, 3\\}\\)")} is \\(n(A) = 3\\).
                        `;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `The size of set ${escape("\\(A = \\{1, 1, 2, 3, 3, 3\\}\\)")} is also \\(n(A) = 3\\).
                        `;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `The number of elements in an empty set is 0. That is, \\(n(\\varphi) = 0\\).
                        `;
        }
      })}`;
    }
  })}</ul></section>
            ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Finite Set`;
        }
      })}`;
    }
  })}
            <section>${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 11 }, {}, {
        default: () => {
          return `If counting of the elements of a set can finish, it called a <em>finite set</em>.
                    `;
        }
      })}`;
    }
  })}
                <ul>${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `The size of a finite set is a positive integer.`;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 13 }, {}, {
        default: () => {
          return `Empty set is a finite set as well.`;
        }
      })}`;
    }
  })}</ul></section>
            <section>${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 14 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
                <ul>${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 15 }, {}, {
        default: () => {
          return `Counting of elements of ${escape("\\(A = \\{1, 2, 3\\}\\)")} can finish, and hence it is finite.
                        `;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 16 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 16 }, {}, {
        default: () => {
          return `The set of number of letters in a given English word is finite.`;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 17 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 17 }, {}, {
        default: () => {
          return `The set of roots of a finite degree polynomial is finite.`;
        }
      })}`;
    }
  })}</ul></section>
            ${validate_component(Item, "Item").$$render($$result, { item: 18 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 18 }, {}, {
        default: () => {
          return `Infinite Set`;
        }
      })}`;
    }
  })}
            <section>${validate_component(Item, "Item").$$render($$result, { item: 19 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 19 }, {}, {
        default: () => {
          return `If counting of the elements of a set can not finish, it called an <em>infinite set</em>.
                    `;
        }
      })}`;
    }
  })}
                <ul>${validate_component(Item, "Item").$$render($$result, { item: 20 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 20 }, {}, {
        default: () => {
          return `The size of an infinite set is infinity (\\(\\infty\\)).`;
        }
      })}`;
    }
  })}</ul></section>
    
            <section>${validate_component(Item, "Item").$$render($$result, { item: 21 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 21 }, {}, {
        default: () => {
          return `Examples`;
        }
      })}`;
    }
  })}
                <ul>${validate_component(Item, "Item").$$render($$result, { item: 22 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 22 }, {}, {
        default: () => {
          return `The set of natural numbers \\(N\\) is an infinite set.`;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 23 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 23 }, {}, {
        default: () => {
          return `The set of numbers divisible by \\(2\\) is an infinite set.`;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 24 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 24 }, {}, {
        default: () => {
          return `The set of real numbers is an infinite set.`;
        }
      })}`;
    }
  })}
                    ${validate_component(Item, "Item").$$render($$result, { item: 25 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 25 }, {}, {
        default: () => {
          return `The set of prime numbers is an infinite set.`;
        }
      })}`;
    }
  })}</ul></section></div>
        ${$presentationMode ? `<div class="${"slate"}"></div>` : ``}</div>
	
	<section>${validate_component(Item, "Item").$$render($$result, { item: 26 }, {}, {
    default: () => {
      return `<section><h2>Practice</h2>
				${validate_component(Practice, "Practice").$$render($$result, { generateProblem }, {}, {})}</section>`;
    }
  })}</section>
	${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-swui9i"}"></div>` : ``}
</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0d5c2b4a.js.map
