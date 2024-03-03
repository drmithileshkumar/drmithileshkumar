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
  code: "article.svelte-1ptklpl{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ptklpl,li.svelte-1ptklpl{opacity:0.8}h4.svelte-1ptklpl{margin:0.5em 0}h6.svelte-1ptklpl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1ptklpl{color:goldenrod;opacity:1}a.svelte-1ptklpl{cursor:pointer;text-decoration:none}",
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
  set_store_value(currentPath, $currentPath = "Selectors", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-p5eim1_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/selectors"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-p5eim1_END -->`, ""} <article class="svelte-1ptklpl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1ptklpl" data-svelte-h="svelte-ex1rms">Selectors</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ptklpl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-19hx7ow"><li class="svelte-1ptklpl"><a href="#simple" class="svelte-1ptklpl">Simple Selectors</a></li> <li class="svelte-1ptklpl"><a href="#class" class="svelte-1ptklpl">Class Selectors</a></li> <li class="svelte-1ptklpl"><a href="#generic" class="svelte-1ptklpl">Generic Selectors</a></li> <li class="svelte-1ptklpl"><a href="#id" class="svelte-1ptklpl"><code>id</code> Selectors</a></li> <li class="svelte-1ptklpl"><a href="#contextual" class="svelte-1ptklpl">Contextual Selectors</a></li> <li class="svelte-1ptklpl"><a href="#pseudo" class="svelte-1ptklpl">Pseudo Classes</a></li> <li class="svelte-1ptklpl"><a href="#universal" class="svelte-1ptklpl">The Universal Selector</a></li></ol> <p class="svelte-1ptklpl" data-svelte-h="svelte-tlfd7z">A selector specifies the elements to which the style information applies. We have seen a form of selectors in previous chapters which uses <code>class</code> names. In this chapter, we&#39;ll see many other types of selectors.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="simple" class="svelte-1ptklpl" data-svelte-h="svelte-1wobjgk">Simple Selectors</h6> <p class="svelte-1ptklpl">We can use tag name as selector.
                ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: `h1 { color: red;}` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}
                Here all <code data-svelte-h="svelte-clsj7r">h1</code> elements will be colored red.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="class" class="svelte-1ptklpl" data-svelte-h="svelte-1h0tw24">Class Selectors</h6> <p class="svelte-1ptklpl">To color some of the elements differently than what has been set above, we can use <code data-svelte-h="svelte-899e0m">class</code> selectors. For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `h1 { color: red; }
h1.blue { color: blue;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-clsj7r">h1</code> elements with <code data-svelte-h="svelte-4i8hb3">class=&quot;blue&quot;</code> will be colored blue and rest will be colored red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<h1 class="blue">I'm blue not red.</h1>
<p class="blue">I have class blue, but I'm not blue.</p>`
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
          return `<h6 id="generic" class="svelte-1ptklpl" data-svelte-h="svelte-a8b6yq">Generic Selectors</h6> <p class="svelte-1ptklpl">Generic selectors use <code data-svelte-h="svelte-899e0m">class</code> name to apply the same style to all elements irrespective of their tag. For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `.red { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-899e0m">class</code> when set to <code data-svelte-h="svelte-okgpnl">&quot;red&quot;</code> for any tag.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<h1 class="red">I'm h1 and red.</h1>
<p class="red">I'm p and red as well.</p>`
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
          return `<h6 id="id" class="svelte-1ptklpl" data-svelte-h="svelte-yj7p4z"><code>id</code> Selectors</h6> <p class="svelte-1ptklpl">In an HTML document, any element can be assigned <code data-svelte-h="svelte-xc6dj1">id</code>, just like <code data-svelte-h="svelte-899e0m">class</code>. While same <code data-svelte-h="svelte-899e0m">class</code> name can be given to many elements, <code data-svelte-h="svelte-xc6dj1">id</code> must be unique. In CSS, the selector for <code data-svelte-h="svelte-xc6dj1">id</code> has the form <code data-svelte-h="svelte-j8dgjb">#idname</code> For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `#red { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-899e0m">class</code> when set to <code data-svelte-h="svelte-okgpnl">&quot;red&quot;</code> for any tag.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<h1 id="red">I'm red, because my id is red.</h1>
<p class="red">I'm not red.</p>`
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
          return `<h6 id="contextual" class="svelte-1ptklpl" data-svelte-h="svelte-1s62iz0">Contextual Selectors</h6> <p class="svelte-1ptklpl">The simplest form of contextual selector is the descendant selector. Element B is a <strong class="svelte-1ptklpl" data-svelte-h="svelte-gun7jf">descendant</strong> of element A if it appears in the content of A. In this situation, A is the ancestor of B.  For example,
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section p { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                In this case, all <code data-svelte-h="svelte-1vekeb2">p</code> elements inside <code data-svelte-h="svelte-14gpkwf">section</code> will have color red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div><p>I'm not red.</p></div>
<section><p>I'm red.</p></section>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">An element A is a <strong class="svelte-1ptklpl" data-svelte-h="svelte-g339mk">child</strong> of another element B if it is a descendant and it is nested directly in that element. The element B is called the <strong class="svelte-1ptklpl" data-svelte-h="svelte-1sc3t68">parent</strong> of A.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<section>
    <p>I'm child of section.</p>
    <div>
        <p>I'm not child of section.</p>
    </div>
</section>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <code data-svelte-h="svelte-1shd99i">&gt;</code> is used as a child selector.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `section > p { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                This sets the first <code data-svelte-h="svelte-1vekeb2">p</code> element with <code data-svelte-h="svelte-v9hqaf">color</code> red, but not the <code data-svelte-h="svelte-1vekeb2">p</code> inside <code data-svelte-h="svelte-3f20o3">div</code>.</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-1tcizpd">first-child</code> selector specifies the first child of the element to whose name it is atteched.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div>
    <p>I'm red.</p>
    <p>I'm not red.</p>
    <p>I'm not red either.</p>
</div>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The following CSS only sets the first <code data-svelte-h="svelte-1vekeb2">p</code> to red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `div:first-child { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-1bneqhn">last-child</code> selector specifies the last child of the element to whose name it is atteched.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div>
    <p>I'm not red.</p>
    <p>I'm not red.</p>
    <p>I'm red.</p>
</div>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The following CSS only sets the last <code data-svelte-h="svelte-1vekeb2">p</code> to red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `div:last-child { color: red;}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-2jhnok">:nth-child()</code> selector specifies the nth child of the element to whose name it is atteched. <code data-svelte-h="svelte-1ig1qtk">nth-child()</code> takes a single argument that describes a pattern for matching element indices in a list of siblings. Element indices are 1-based.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `<div>
    <p>I'm red.</p>
    <p>I'm not red.</p>
    <p>I'm red.</p>
</div>`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
                The following CSS only sets odd children to red.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `div:nth-child(2n + 1) { color: red;}`
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
          return `<h6 id="pseudo" class="svelte-1ptklpl" data-svelte-h="svelte-hlwlge">Pseudo Classes</h6> <p class="svelte-1ptklpl">Pseudo classes are <em data-svelte-h="svelte-1nd9zl1">applied</em> to existing elements by specifying the effect after :. For example, The two pseudo classes for styling links are <code data-svelte-h="svelte-1n61io0">link</code> and <code data-svelte-h="svelte-coac50">visited</code>. The <code data-svelte-h="svelte-1n61io0">link</code> pseudo class is used to style a link that has not been selected; <code data-svelte-h="svelte-coac50">visited</code> is used to style a link that previously has been selected.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `a:link { color: teal;}
a:visited { color: red; }`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-1ptklpl">The <code data-svelte-h="svelte-n4hqvc">hover</code> pseudo class is used often. When mouse is over an element, <code data-svelte-h="svelte-n4hqvc">hover</code> effect is applied.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: css,
              code: `p:hover { color: red;}`
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
          return `<h6 id="universal" class="svelte-1ptklpl" data-svelte-h="svelte-1rllrqs">The Universal Selector</h6> <p class="svelte-1ptklpl">The universal selector, denoted by an asterisk (*), applies its style to all elements in a document. 
                ${validate_component(Highlight, "Highlight").$$render($$result, { language: css, code: `* { margin: 0; }` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</p>`;
        }
      })}`;
    }
  })}  </article>`;
});
export {
  Page as default
};
