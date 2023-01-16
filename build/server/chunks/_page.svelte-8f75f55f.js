import { c as create_ssr_component, v as validate_component, d as subscribe, f as add_attribute, e as escape, h as each } from './index-450bbd42.js';
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from './stores2-c9b26d6a.js';
import { I as Item, P, L as Li } from './Image.svelte_svelte_type_style_lang-027616e3.js';
import { I as Image } from './Image-81413850.js';
import './index3-18f69db9.js';

const css$2 = {
  code: ".notes.svelte-1v7nhrf{font-size:1.2em;background-color:green;color:white;padding:0.5em 1em;border-radius:10px}article.svelte-1v7nhrf{position:relative;padding:0.5em;max-height:400px;overflow:hidden;padding:1em 1em;background-color:rgba(110, 120, 150, 0.3);border-radius:10px}.absolute.svelte-1v7nhrf{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1v7nhrf::-webkit-scrollbar{width:0;height:0}.pad.svelte-1v7nhrf{min-height:100px}.thumbnail.svelte-1v7nhrf{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1v7nhrf{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
  map: null
};
const Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSlide, $$unsubscribe_currentSlide;
  let $$unsubscribe_slideCounter;
  let $selectedSection, $$unsubscribe_selectedSection;
  let $$unsubscribe_selectedChapter;
  let $presentationMode, $$unsubscribe_presentationMode;
  let $presentation, $$unsubscribe_presentation;
  $$unsubscribe_currentSlide = subscribe(currentSlide, (value) => $currentSlide = value);
  $$unsubscribe_slideCounter = subscribe(slideCounter, (value) => value);
  $$unsubscribe_selectedSection = subscribe(selectedSection, (value) => $selectedSection = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => value);
  $$unsubscribe_presentationMode = subscribe(presentationMode, (value) => $presentationMode = value);
  $$unsubscribe_presentation = subscribe(presentation, (value) => $presentation = value);
  $$result.css.add(css$2);
  $$unsubscribe_currentSlide();
  $$unsubscribe_slideCounter();
  $$unsubscribe_selectedSection();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_presentationMode();
  $$unsubscribe_presentation();
  return `<a href="${"/notes/maths/Sets/Introduction"}" class="${"notes svelte-1v7nhrf"}">Lecture of the day</a>
    <article class="${["svelte-1v7nhrf", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-1v7nhrf"}"><p class="${"statement svelte-1v7nhrf"}">${escape(`\\(\\{x:x\\)`)} is the foundation of mathematics${escape(`\\(\\}\\)`)}</p></div>` : ``}
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
            ${$presentationMode && $currentSlide >= 2 ? `<div class="${"pad svelte-1v7nhrf"}"></div>` : ``}</section>
    </article>`;
});
const Practice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const css$1 = {
  code: ".twitter.svelte-1uu1tax{display:flex;margin:1em 0;padding:1em 0;align-items:center;justify-content:center}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"twitter svelte-1uu1tax"}"><blockquote class="${"twitter-tweet"}"><p lang="${"zxx"}" dir="${"ltr"}"><a href="${"https://t.co/OuJAxIYnuV"}">pic.twitter.com/OuJAxIYnuV</a></p>— Dr Mithilesh Kumar (@DrMithileshKr) <a href="${"https://twitter.com/DrMithileshKr/status/1612815196262928386?ref_src=twsrc%5Etfw"}">January 10, 2023</a></blockquote></div>`;
});
const css = {
  code: ".videos.svelte-tmnj2f{display:flex;flex-direction:row;gap:1em;flex-wrap:wrap;margin-bottom:2em}",
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos = [
    {
      title: "Set : Introduction",
      src: "https://www.youtube.com/embed/Ii1HysDxd5U",
      width: "420",
      height: "300"
    }
  ];
  $$result.css.add(css);
  return `<h1><a href="${"https://www.youtube.com/@drmithilesh"}">Youtube Channel</a></h1>
<div class="${"videos svelte-tmnj2f"}">${each(videos, (video) => {
    return `<iframe${add_attribute("width", video.width, 0)}${add_attribute("height", video.height, 0)}${add_attribute("src", video.src, 0)}${add_attribute("title", video.title, 0)} frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen></iframe>`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}

${validate_component(Youtube, "Youtube").$$render($$result, {}, {}, {})}
${validate_component(Notes, "Notes").$$render($$result, {}, {}, {})}
${validate_component(Practice, "Practice").$$render($$result, {}, {}, {})}
${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8f75f55f.js.map
