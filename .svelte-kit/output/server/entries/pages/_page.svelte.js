import { c as create_ssr_component, d as subscribe, f as add_attribute, e as escape, v as validate_component, h as each } from "../../chunks/index3.js";
import { c as currentSlide, s as slideCounter, f as selectedSection, g as selectedChapter, b as presentationMode, p as presentation } from "../../chunks/stores2.js";
/* empty css                                                   *//* empty css                                                  */import { I as Item, P, L as Li } from "../../chunks/Image.svelte_svelte_type_style_lang.js";
import { H as H3 } from "../../chunks/H3.js";
const Notes_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".notes.svelte-1ppn2dj{font-size:1.2em;background-color:green;color:white;padding:0.5em 1em;border-radius:10px}article.svelte-1ppn2dj{position:relative;padding:0.5em;max-height:400px;overflow:hidden;padding:1em 1em;background-color:rgba(110, 120, 150, 0.3);border-radius:10px}.absolute.svelte-1ppn2dj{margin:auto;width:100%;height:min(78vh, 60vw);overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0 1em 0 1em}.absolute.svelte-1ppn2dj::-webkit-scrollbar{width:0;height:0}.thumbnail.svelte-1ppn2dj{display:flex;align-items:center;justify-content:center;font-size:2.5em;height:100%}.statement.svelte-1ppn2dj{background:radial-gradient(#6000c091, rgb(0, 93, 180));color:rgb(246, 246, 246);text-shadow:1px 1px 3px rgb(4, 4, 4);box-shadow:1px 1px 3px rgb(129, 128, 128);padding:1em}",
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
  return `<a href="${"/notes/maths/Sets/Introduction"}" class="${"notes svelte-1ppn2dj"}">Lecture of the day</a>
    <article class="${["svelte-1ppn2dj", $presentationMode ? "absolute" : ""].join(" ").trim()}"${add_attribute("this", $presentation, 0)}>${$presentationMode && $currentSlide === -2 ? `<div class="${"thumbnail svelte-1ppn2dj"}"><p class="${"statement svelte-1ppn2dj"}">The empty set
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
    </article>`;
});
const Practice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Twitter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".twitter.svelte-1uu1tax{display:flex;margin:1em 0;padding:1em 0;align-items:center;justify-content:center}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"twitter svelte-1uu1tax"}"><blockquote class="${"twitter-tweet"}"><p lang="${"zxx"}" dir="${"ltr"}"><a href="${"https://t.co/OuJAxIYnuV"}">pic.twitter.com/OuJAxIYnuV</a></p>— Dr Mithilesh Kumar (@DrMithileshKr) <a href="${"https://twitter.com/DrMithileshKr/status/1612815196262928386?ref_src=twsrc%5Etfw"}">January 10, 2023</a></blockquote></div>`;
});
const Youtube_svelte_svelte_type_style_lang = "";
const css = {
  code: ".videos.svelte-7b8gbt{display:flex;flex-direction:row;gap:1em;flex-wrap:nowrap;margin-bottom:2em;background-color:rgba(110, 120, 150, 0.3);padding:1em;border-radius:10px;overflow-x:auto}",
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos = [
    {
      title: "Set : Introduction",
      src: "https://www.youtube.com/embed/Ii1HysDxd5U",
      width: "210",
      height: "150"
    },
    {
      title: "Set : Sets and their representation",
      src: "https://www.youtube.com/embed/kj1VeKqMlJc",
      width: "210",
      height: "150"
    },
    {
      title: "Set : The empty set",
      src: "https://www.youtube.com/embed/-VP7utgjA8I",
      width: "210",
      height: "150"
    }
  ];
  $$result.css.add(css);
  return `<h1><a href="${"https://www.youtube.com/@drmithilesh"}">Youtube Channel</a></h1>
<div class="${"videos svelte-7b8gbt"}">${each(videos, (video) => {
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
export {
  Page as default
};
