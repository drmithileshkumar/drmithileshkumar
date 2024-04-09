import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { j as javascript } from "../../../../../../../../chunks/javascript.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../../chunks/content4.js";
import "../../../../../../../../chunks/Suffix.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
/* empty css                                                                       */
import { p as page } from "../../../../../../../../chunks/stores.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
/* empty css                                                                   */
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
import { H as Highlight, L as LineNumbers } from "../../../../../../../../chunks/LineNumbers.js";
const css$1 = {
  code: "article.svelte-xhs4zz.svelte-xhs4zz{display:flex;flex-direction:column;gap:0.5em}p.svelte-xhs4zz.svelte-xhs4zz,li.svelte-xhs4zz.svelte-xhs4zz{opacity:0.8}h4.svelte-xhs4zz.svelte-xhs4zz{margin:0.5em 0}h6.svelte-xhs4zz.svelte-xhs4zz{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-xhs4zz.svelte-xhs4zz{cursor:pointer;text-decoration:none}ol.svelte-xhs4zz li.svelte-xhs4zz::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-xhs4zz li.svelte-xhs4zz{padding:0.5em 0}",
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
  set_store_value(currentPath, $currentPath = "Error", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ujgl1s_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/error"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1ujgl1s_END -->`, ""} <article class="svelte-xhs4zz">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-7ai0dd">Error handling</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-xhs4zz" data-svelte-h="svelte-zdr1se">Topics</h6> <p class="svelte-xhs4zz" data-svelte-h="svelte-ylxfmj">You can throw exceptions using the <code>throw</code> statement and handle them using the <code>try...catch</code> statements.</p> <ol class="svelte-xhs4zz" data-svelte-h="svelte-yfhtpt"><li class="svelte-xhs4zz"><a href="#throw" class="svelte-xhs4zz"><code>throw</code></a></li> <li class="svelte-xhs4zz"><a href="#try" class="svelte-xhs4zz"><code>try...catch</code></a></li> <li class="svelte-xhs4zz"><a href="#finally" class="svelte-xhs4zz"><code>finally</code></a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="throw" class="svelte-xhs4zz" data-svelte-h="svelte-fca2wv"><code>throw</code></h6> <p class="svelte-xhs4zz">We use the <code data-svelte-h="svelte-1nopam">throw</code> statement to throw an exception. A <code data-svelte-h="svelte-1nopam">throw</code> statement specifies the value to be thrown
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `throw expression;
//examples
throw "Oops! Something went wrong!";
throw "404";
throw false;
throw {toString() {return "an object error"}}`
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
  })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="try" class="svelte-xhs4zz" data-svelte-h="svelte-18n021s"><code>try...catch</code></h6> <p class="svelte-xhs4zz">The <code data-svelte-h="svelte-1kua6ka">try...catch</code> statement consists of a <code data-svelte-h="svelte-yygk5h">try</code> block, which contains one or more statements, and a <code data-svelte-h="svelte-1udk4rj">catch</code> block, containing statements that specify what to do if an <code data-svelte-h="svelte-e3k3q5">exception</code> is thrown in the <code data-svelte-h="svelte-yygk5h">try</code> block.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `try {
    //try to excecute the code here
    //throw error if something goes wrong
} catch (e) {
    //catch the error thrown from try and excecute the the codes here
}
//example
let divide = (a, b) => {
    //divide a by b
    try {
        if(b !== 0) {
            return a / b;
        } else {
            throw "Division by 0"
        }
    } catch (e) {
        console.log(e);
        console.log('Why are you dividing by zero?')
    }
}`
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
          return `<h6 id="finally" class="svelte-xhs4zz" data-svelte-h="svelte-1pt7c4d"><code>finally</code></h6> <p class="svelte-xhs4zz">The <code data-svelte-h="svelte-1wd47h3">finally</code> block runs after <code data-svelte-h="svelte-yygk5h">try</code> and <code data-svelte-h="svelte-1udk4rj">catch</code> blocks has executed, irrespective of any exceptions thrown by the <code data-svelte-h="svelte-yygk5h">try</code> block. If the <code data-svelte-h="svelte-1wd47h3">finally</code> block returns some value, then this value becomes the return value of the whole <code data-svelte-h="svelte-1ti7ugx">try...catch...finally</code> statement.
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `try {
    //try to excecute the code here
    //throw error if something goes wrong
} catch (e) {
    //catch the error thrown from try and excecute the the codes here
} finally {
    //irrespective of computation above, execute the code from here
}
//example
let divide = (a, b) => {
    //divide a by b
    try {
        if(b !== 0) {
            return a / b;
        } else {
            throw "Division by 0"
        }
    } catch (e) {
        console.log(e);
        console.log('Why are you dividing by zero?')
    } finally {
        console.log('We are done dividing ', a, ' by ', b)
    }
}`
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
  })} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question" data-svelte-h="svelte-1ogi5dc">Rewrite the functions in the previous chapter using <code>try...catch...finally</code> block.</div>`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
