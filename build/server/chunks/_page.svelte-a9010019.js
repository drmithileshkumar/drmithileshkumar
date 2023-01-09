import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component, q as compute_rest_props, p as null_to_empty } from './index-caf19234.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-60a97389.js';
import { p as page } from './stores-f8df57c6.js';
import './index3-3865ea4a.js';

const css$2 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: null
};
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css$2);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `<p class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</p>`;
});
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { item = -2 } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `${!$presentationMode || $currentSlide >= item ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const css$1 = {
  code: ".currentActive.svelte-1xlricf{color:tomato;border-radius:10px;transition:all 1s}figure.svelte-1xlricf{width:300px}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presentationMode, $$unsubscribe_presentationMode;
  let $currentSlide, $$unsubscribe_currentSlide;
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  let { isActive = -1 } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css$1);
  $$unsubscribe_presentationMode();
  $$unsubscribe_currentSlide();
  return `<figure class="${escape(
    null_to_empty($presentationMode && isActive === $currentSlide ? "currentActive" : ""),
    true
  ) + " svelte-1xlricf"}">${slots.default ? slots.default({}) : ``}</figure>`;
});
const css = {
  code: "article.svelte-1c16nc0{position:relative;padding:0.5em}.absolute.svelte-1c16nc0{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1c16nc0::-webkit-scrollbar{width:0;height:0}.pad.svelte-1c16nc0{min-height:100px}.thumbnail.svelte-1c16nc0{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1c16nc0{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
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
  $$result.css.add(css);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_page();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `${$$result.head += `<!-- HEAD_svelte-1cm2kk7_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}" content="${"Introduction to sets"}"><!-- HEAD_svelte-1cm2kk7_END -->`, ""}
<article class="${["svelte-1c16nc0", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-1c16nc0"}"><p class="${"statement svelte-1c16nc0"}">${escape(`\\(\\{x:x\\)`)} is the foundation of mathematics${escape(`\\(\\}\\)`)}</p></div>` : ``}
    ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
    <section>${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Consider \\(1, 3, 5, 7, \\dots\\) and \\(2, 4, 6, 8, \\dots\\) In the first group, only odd numbers are appearing and in the second group, only even numbers are appearing. We say that \\(1, 3, 5, 7,\\dots\\) is a collection of odd numbers and \\(2, 4, 6, 8, \\dots\\) is a collection of even numbers. This chapter is about the study of collection of objects that satisfy some property.
            `;
        }
      })}
            ${validate_component(Image, "Image").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `<img src="${"/notes/maths/sets/introduction/oddeven.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `This study is so fundamental that all of mathematics is based on it. In other words, all of mathematics is the study of objects that satisfy some property. 
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `In mathematics, such kind of collections are called <em>sets</em>. We&#39;ll start with defining what is a set and see a few examples. After that we&#39;ll learn two ways to write sets. 
                ${escape(`\\[S = \\{1, 3, 5, 7,\\dots\\} = \\{x:x\\text{ is odd}\\}\\]`)}`;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `Then, we&#39;ll define some special types of sets, like empty sets, finite and infinite sets, power and universal sets.
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `After that we&#39;ll learn how to create new sets from a given set using various operations that will feel like addition or subtraction. Finally, we&#39;ll conclude the chapter by using the learnt concept to solve problems like one described below.
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `Consider the following problem.
            `;
        }
      })}
            ${validate_component(P, "P").$$render($$result, { isActive: 5, class: "question" }, {}, {
        default: () => {
          return `In an IIT sports event, 50 medals were awarded in race, 30 in football and 25 in cricket. If only 60 students got any medal and only 5 students got medals in all events, how many received medals in exactly two of the events?
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `This simple problem is tricky to solve without using the language of <strong>Sets</strong>.
            `;
        }
      })}
            ${validate_component(Image, "Image").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `<img src="${"/notes/maths/sets/introduction/example.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
        
        ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-1c16nc0"}"></div>` : ``}</section>
</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9010019.js.map
