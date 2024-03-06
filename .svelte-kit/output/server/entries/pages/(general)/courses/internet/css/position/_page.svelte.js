import { s as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { x as xml } from "../../../../../../../chunks/xml.js";
import { c as css } from "../../../../../../../chunks/css.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../chunks/content4.js";
import "../../../../../../../chunks/Suffix.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
/* empty css                                                                    */
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/Subheader.js";
import "../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../chunks/stores2.js";
/* empty css                                                                */
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
import { H as Highlight, L as LineNumbers } from "../../../../../../../chunks/LineNumbers.js";
const css$1 = {
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl{margin:0.5em 0}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Position", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1j1afec_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/position"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1j1afec_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-17x8xkf">Position</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-18fqzpz"><li class="svelte-1ptklpl"><a href="#static" class="svelte-1ptklpl">Static</a></li> <li class="svelte-1ptklpl"><a href="#relative" class="svelte-1ptklpl">Relative</a></li> <li class="svelte-1ptklpl"><a href="#absolute" class="svelte-1ptklpl">Absolute</a></li> <li class="svelte-1ptklpl"><a href="#fixed" class="svelte-1ptklpl">Fixed</a></li> <li class="svelte-1ptklpl"><a href="#sticky" class="svelte-1ptklpl">Sticky</a></li></ol> <p class="svelte-1ptklpl" data-svelte-h="svelte-1anipzk">The <code>position</code> property sets how an element is positioned in a document. The <code>top, right, bottom,</code> and <code>left</code> properties determine the final location of positioned elements.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="static" class="svelte-1ptklpl" data-svelte-h="svelte-sg9d5e">Static</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-uk9qxq">static</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: static; }`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, <code data-svelte-h="svelte-14gpkwf">section</code> is positioned according to the normal flow of the document. The <code data-svelte-h="svelte-bc5ntk">top, bottom, left, z-index</code> propertiecs have no effect.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section class="blue">
    <p>I am inside a static section.</p>
</section`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="relative" class="svelte-1ptklpl" data-svelte-h="svelte-24y6xa">Relative</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-tzs70s">relative</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `.relative { 
    position: relative; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-tzs70s">relative</code> is first placed according to the normal order and then shifted 30px from top and 40px from left.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="relative">I have relative position.</p>
    <p>I have static position</p>
</section`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="absolute" class="svelte-1ptklpl" data-svelte-h="svelte-6dmjsu">Absolute</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-l5jez5">absolute</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: relative; }
.absolute { 
    position: absolute; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-l5jez5">absolute</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of <code data-svelte-h="svelte-1qxz989">top, right, bottom, left</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="absolute">I have absolute position.</p>
    <p>I have static position</p>
</section`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="fixed" class="svelte-1ptklpl" data-svelte-h="svelte-1xid61e">Fixed</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-1oyammk">fixed</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: relative; }
.fixed { 
    position: fixed; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-1oyammk">fixed</code> is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to viewport. Its final position is determined by the values of <code data-svelte-h="svelte-1qxz989">top, right, bottom, left</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="fixed">I have fixed position.</p>
    <p>I have static position</p>
</section`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="sticky" class="svelte-1ptklpl" data-svelte-h="svelte-w07rdy">Sticky</h6> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-19s3xqn">position</code> of an element can be set to <code data-svelte-h="svelte-1jdfilr">sticky</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section { position: relative; }
.sticky { 
    position: sticky; 
    top: 30px;
    left: 40px;
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements with class <code data-svelte-h="svelte-1jdfilr">sticky</code> is positioned according to the normal document flow, and then offset relative to its nearest scrolling ancestor and containing block. Its final position is determined by the values of <code data-svelte-h="svelte-1qxz989">top, right, bottom, left</code>.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I have static position.</p>
    <p class="sticky">I have sticky position.</p>
    <p>I have static position</p>
</section`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p>`;
        }
      })}`;
    }
  })}   </article>`;
});
export {
  Page as default
};
