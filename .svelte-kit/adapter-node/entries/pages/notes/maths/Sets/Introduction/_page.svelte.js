import { c as create_ssr_component, d as subscribe, e as escape, f as add_attribute, v as validate_component } from "../../../../../../chunks/index.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../../../../../chunks/stores2.js";
/* empty css                                                               *//* empty css                                                              */import { p as page } from "../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
import { I as Image } from "../../../../../../chunks/Image.js";
const _page_svelte_svelte_type_style_lang = "";
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
          return `There are various branches of mathematics:
            `;
        }
      })}`;
    }
  })}
        <table><tr><td>${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `Set theory connects them all.`;
        }
      })}`;
    }
  })}</td>
                <td><ul style="${"border-left: 1px solid"}">${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Algebra:</strong> Numbers, Sequences and Series, Quadratic equations, Linear equations
                            `;
        }
      })}
                            ${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Geometry:</strong> Lines, Arcs, Quadrilaterals, Circles
                            `;
        }
      })}
                            ${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Co-ordinate Geometry:</strong> Point, Distance, Lines, Section Formula
                            `;
        }
      })}
                            ${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Trigonometry</strong>`;
        }
      })}
                            ${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Statistics and Probability</strong>`;
        }
      })}
                            ${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Vector algebra</strong>`;
        }
      })}
                            ${validate_component(Li, "Li").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `<strong>Calculus</strong>`;
        }
      })}`;
    }
  })}</ul></td></tr></table>
        ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `Set theory is the starting point in all these branches and many more. In set theory, we study about sets. The concept of sets is even more basic than the concept of numbers. Sets conceptualize the properties of objects.
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `Consider \\(1, 3, 5, 7, \\dots\\) and \\(2, 4, 6, 8, \\dots\\) In the first group, only odd numbers are appearing and in the second group, only even numbers are appearing. We say that \\(1, 3, 5, 7,\\dots\\) is a collection of odd numbers and \\(2, 4, 6, 8, \\dots\\) is a collection of even numbers. This chapter is about the study of collection of objects that satisfy some property.
            `;
        }
      })}
            ${validate_component(Image, "Image").$$render($$result, { isActive: 4 }, {}, {
        default: () => {
          return `<img src="${"/notes/maths/sets/introduction/oddeven.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `Such kind of collections are called <em>sets</em>. 
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 6 }, {}, {
        default: () => {
          return `We&#39;ll start with defining what is a set and see a few examples. After that we&#39;ll learn two ways to write sets. 
                ${escape(`\\[S = \\{1, 3, 5, 7,\\dots\\} = \\{x:x\\text{ is odd}\\}\\]`)}`;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Then, we&#39;ll define some special types of sets, like empty sets, finite and infinite sets, power and universal sets.
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `After that we&#39;ll learn how to create new sets from a given set using various operations that will feel like addition or subtraction. Finally, we&#39;ll conclude the chapter by using the learnt concepts to solve problems like one described below.
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `Consider the following problem.
            `;
        }
      })}
            ${validate_component(P, "P").$$render($$result, { isActive: 9, class: "question" }, {}, {
        default: () => {
          return `In an IIT sports event, 50 medals were awarded in race, 30 in football and 25 in cricket. If only 60 students got any medal and only 5 students got medals in all events, how many received medals in exactly two of the events?
            `;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `This simple problem is tricky to solve without using the language of <strong>Sets</strong>.
            `;
        }
      })}
            ${validate_component(Image, "Image").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `<img src="${"/notes/maths/sets/introduction/example.svg"}" alt="${""}">`;
        }
      })}`;
    }
  })}
        ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `Concepts learnt in this chapter will be useful in other chapters like relations and functions, trigonometry, sequences and series, combinatorics, calculus and probability.
            `;
        }
      })}`;
    }
  })}
        ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-1c16nc0"}"></div>` : ``}</section>
</article>`;
});
export {
  Page as default
};
