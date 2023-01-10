import { c as create_ssr_component, p as compute_rest_props, d as subscribe, e as escape, f as add_attribute, v as validate_component } from "../../../../../../chunks/index.js";
import { b as presentationMode, c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, p as presentation } from "../../../../../../chunks/stores2.js";
/* empty css                                                               *//* empty css                                                              */import { p as page } from "../../../../../../chunks/stores.js";
import { I as Item, P, L as Li } from "../../../../../../chunks/Image.svelte_svelte_type_style_lang.js";
const H1_svelte_svelte_type_style_lang = "";
const H2_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: null
};
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<h2 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</h2>`;
});
const H3_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".currentActive.svelte-1y4ir69{color:tomato;border-radius:10px;transition:all 1s}",
  map: null
};
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive"]);
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
  return `<h3 class="${escape($$restProps.class || "", true) + " " + escape(
    $presentationMode && isActive === $currentSlide ? "currentActive" : "",
    true
  ) + " svelte-1y4ir69"}">${slots.default ? slots.default({}) : ``}</h3>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-yj3oo0{position:relative;padding:0.5em}.absolute.svelte-yj3oo0{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-yj3oo0::-webkit-scrollbar{width:0;height:0}.pad.svelte-yj3oo0{min-height:100px}.thumbnail.svelte-yj3oo0{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-yj3oo0{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
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
  return `${$$result.head += `<!-- HEAD_svelte-iu5uph_START -->${$$result.title = `<title>${escape($selectedSection)}</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com" + escape($page.url.pathname, true)}"><meta name="${"description"}"${add_attribute("content", $selectedSection, 0)}><!-- HEAD_svelte-iu5uph_END -->`, ""}
    <article class="${["svelte-yj3oo0", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-yj3oo0"}"><p class="${"statement svelte-yj3oo0"}">Set Representations
                </p></div>` : ``}
        ${!$presentationMode || $currentSlide >= -1 ? `<h1>${escape($selectedSection)}</h1>` : ``}
        ${validate_component(Item, "Item").$$render($$result, { item: 0 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 0 }, {}, {
        default: () => {
          return `Definition
            `;
        }
      })}`;
    }
  })}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 1 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 1 }, {}, {
        default: () => {
          return `We are used to a practical idea of what is a <em>collection</em>. A <em>set</em> is the mathematical refinement of this idea of collection. It turns out that not every collection can be a set. One basic requirement of a mathematical concept is that its definition must be unique. Not every collection has a unique definition. Consider, for example, <span class="${"specialtext"}">the collection of favourite songs</span>. Pretty much every person would have their own unique collection of favourite songs. 
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 2 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 2 }, {}, {
        default: () => {
          return `Although the collection of favourite songs is defined for each person, but it is not unique for everyone. We can not consider such collections as mathematical object. Then the question remains <em>&quot;how do we eliminate such bad cases of collections?&quot;</em>`;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 3 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 3 }, {}, {
        default: () => {
          return `This problem of uniquenss can be solved if it is possible to decide, with certainty, whether an object is part of the collection. This is how we define the mathematical notion of a <em>set</em>.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 4 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { class: "definition", isActive: 4 }, {}, {
        default: () => {
          return `A <strong>set</strong> is a <em>well-defined</em> collection of objects.
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Item, "Item").$$render($$result, { item: 5 }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, { isActive: 5 }, {}, {
        default: () => {
          return `The property <em>well-defined</em> means given a set and an object, we can determine, without ambiguity, whether the object <em>belongs</em> to the set or not.
                `;
        }
      })}`;
    }
  })}</section>
        
        <section>${validate_component(Item, "Item").$$render($$result, { item: 6 }, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, { class: "examples", isActive: 6 }, {}, {
        default: () => {
          return `Examples
                `;
        }
      })}`;
    }
  })}
            <ul>${validate_component(Item, "Item").$$render($$result, { item: 7 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 7 }, {}, {
        default: () => {
          return `Collection of students in a given class is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 8 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 8 }, {}, {
        default: () => {
          return `Alphabets in English is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 9 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 9 }, {}, {
        default: () => {
          return `Natural numbers divisible by 2 is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 10 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 10 }, {}, {
        default: () => {
          return `Collection of circles of different radii is a set.`;
        }
      })}`;
    }
  })}
                ${validate_component(Item, "Item").$$render($$result, { item: 11 }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, { isActive: 11 }, {}, {
        default: () => {
          return `Collection of all rivers in the world is a set.`;
        }
      })}`;
    }
  })}</ul></section>
        ${validate_component(Item, "Item").$$render($$result, { item: 12 }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, { isActive: 12 }, {}, {
        default: () => {
          return `Elements of a set
            `;
        }
      })}`;
    }
  })}
        <section>${validate_component(Item, "Item").$$render($$result, { item: 13 }, {}, {
    default: () => {
      return `<ul><li>A set is usually denoted by capital letters \\(A, B, X, Y\\) etc.
                </li>
                <li>Members of a set are called elements of the set. 
                </li>
                <li>Elements of a set are usually represented by small letters \\(a, b, x, y\\) etc.
                </li></ul>
            <h3>Epsilon (\\(\\in\\)) notation</h3>
            <ul><li>If \\(a\\) is an elment of a set \\(A\\), we say that \\(a\\) <em>belongs to</em> \\(A\\) and denote this fact using \\(a\\in A\\).
                </li>
                <li>If \\(a\\) is <strong>not</strong> an elment of a set \\(A\\), we say that \\(a\\) <em>does not belongs to</em> \\(A\\) and denote this fact using \\(a\\notin A\\).
                </li></ul>`;
    }
  })}</section>
        <section>${validate_component(Item, "Item").$$render($$result, { item: 14 }, {}, {
    default: () => {
      return `<h3 class="${"examples"}">Examples</h3>
                <ul><li>If \\(A\\) is the set of vowels in English, then \\(a\\in A\\) because \\(a\\) is a vowel, but \\(x\\notin A\\) because \\(x\\) is not a vowel.
                    </li>
                    <li>If \\(E\\) is the set of Natural numbers divisible by 2, then \\(2\\in E\\), but \\(0\\notin E\\) and \\(3\\notin E\\).
                    </li>
                    <li>If \\(R\\) is the set of all rivers in the world, then \\(Ganga\\in R\\), but \\(India\\notin R\\).
                    </li></ul>`;
    }
  })}</section>
        ${validate_component(Item, "Item").$$render($$result, { item: 15 }, {}, {
    default: () => {
      return `<h2>Roster Form</h2>
            <section><div class="${"definition"}"><p>In roster form, all the elements of a set are listed, comma-separated and enclosed within braces ${escape("\\[\\{a_1, a_2,\\dots, a_n \\}\\]")}</p></div></section>
            <h3 class="${"examples"}">Examples</h3>
            <section><ul><li>Set of natural numbers less than 10 and divisible by 2 is ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)}.
                    </li>
                    <li>Set of English vowels is ${escape(`\\(\\{a, e, i, o, u\\}\\)`)}.
                    </li>
                    <li>Set of roots of quadratic equation \\(x^2 - 3x + 2 = 0\\) is ${escape(`\\(\\{1, 2\\}\\)`)}.
                    </li></ul></section>
            <section><h3 class="${"remark"}">Remarks </h3>
                <ul><li>In roster form, the order in which the elements are listed does not matter. For example, the set ${escape(`\\(\\{2, 4\\}\\)`)} is the same as ${escape(`\\(\\{4, 2\\}\\)`)}.
                    </li>
                    <li>In roster form, repeating an element in the list does not change the set. Hence, an element is usually listed only once in the set. For example, the set of letter in BETTER is ${escape(`\\(\\{B, E, T, T, E, R\\}\\)`)}, there is no need to repeat E and T. We can just write ${escape(`\\(\\{B, E, T, R\\}\\)`)}.
                    </li>
                    <li>The set of roots of quadratic equation \\(x^2 - 2x + 1 = 0\\) is ${escape(`\\(\\{1, 1\\}\\)`)} or just ${escape(`\\(\\{1\\}\\)`)}.
                    </li></ul></section>
            <h2>Set Builder Form</h2>
            <section><div class="${"definition"}"><p>In set-builder form, we specify a property that is satisfied <strong>only</strong> by the elements of the set. It is written as ${escape(`\\[\\{x : \\text{Property satisfied by } x\\}\\]`)} The symbol \\(x\\) can be replaced with any other symbol like \\(a, b, y\\) etc. The colon (:) stands for &quot;such that&quot;. After colon (:) we write the property satisfied by all elements of the set.
                    </p></div></section>
             
             <section><h3 class="${"examples"}">Examples</h3>
                 <ul><li>The set-builder form of the set ${escape(`\\(\\{2, 4, 6, 8\\}\\)`)} is ${escape(`\\(\\{x: x\\)`)} is a natural numbers less than 10 and divisible by  2${escape(`\\(\\}\\)`)}.
                     </li>
                     <li>The set-builder form of the set ${escape(`\\(\\{a, e, i, o, u\\}\\)`)} is ${escape(`\\(\\{x : x \\text{ is an English vowel}\\}\\)`)}.
                     </li></ul></section>`;
    }
  })}
        
        
        ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-yj3oo0"}"></div>` : ``}
    </article>`;
});
export {
  Page as default
};
