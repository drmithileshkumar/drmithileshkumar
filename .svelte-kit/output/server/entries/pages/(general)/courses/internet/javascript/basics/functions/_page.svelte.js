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
  set_store_value(currentPath, $currentPath = "Functions", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1bknnxn_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/functions"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1bknnxn_END -->`, ""} <article class="svelte-xhs4zz">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-aeduhh">Functions</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-xhs4zz" data-svelte-h="svelte-zdr1se">Topics</h6> <ol class="svelte-xhs4zz" data-svelte-h="svelte-118e6nz"><li class="svelte-xhs4zz"><a href="#function" class="svelte-xhs4zz"><code>function</code></a></li> <li class="svelte-xhs4zz"><a href="#arrow" class="svelte-xhs4zz">Arrow notation</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="function" class="svelte-xhs4zz" data-svelte-h="svelte-15prnl"><code>function</code></h6> <p class="svelte-xhs4zz">Functions are created using the <code data-svelte-h="svelte-gfnfj0">function</code> keyword
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `//function with no parameter and no return value
function noParamNoReturn() {
    //execute my code
}
//function with no parameter and a return
function noParamReturn() {
    //execute my code
    return someValue;
}
//function with a parameter and no return
function paramNoReturn(a) {
    //use a in the code
}
//function with a parameter and return
function paramReturn(a) {
    //use a in the code
    return someValue;
}
//function with a default value
function defaultValue(a = 1) {
    //if a is not specified use a = 1
}
//calling the function
noParamNoReturn();
let returnValue = noParamReturn();
paramNoReturn(5);
let anotherValue = paramReturn(6);
//use default
defaultValue();//uses a = 1
defaultValue(10);//uses a = 10`
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
          return `<h6 id="arrow" class="svelte-xhs4zz" data-svelte-h="svelte-1kbcjqe">Arrow notation</h6> <p class="svelte-xhs4zz">Functions can be declared using the arrow notation as follows
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `//function with no parameter and no return value
let noParamNoReturn = () => {
    //execute my code
}
//function with no parameter and a return
let noParamReturn = () => {
    //execute my code
    return someValue;
}
//function with a parameter and no return
let paramNoReturn = (a) => {
    //use a in the code
}
//function with a parameter and return
let paramReturn = (a) => {
    //use a in the code
    return someValue;
}
//function with a default value
let defaultValue = (a = 1) => {
    //if a is not specified use a = 1
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
          return `<ol class="svelte-xhs4zz" data-svelte-h="svelte-1iffvxa"><li class="svelte-xhs4zz">Write a JavaScript function to calculate the area of a rectangle given its length and width.</li> <li class="svelte-xhs4zz">Create a function that takes an array of numbers as input and returns the sum of all the numbers.</li> <li class="svelte-xhs4zz">Implement a function that checks if a given number is a palindrome (reads the same forwards and backwards).</li> <li class="svelte-xhs4zz">Write a JavaScript function to find the maximum and minimum elements in an array of numbers.</li> <li class="svelte-xhs4zz">Develop a function that takes a string as input and returns the reverse of the string.</li> <li class="svelte-xhs4zz">Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.</li> <li class="svelte-xhs4zz">Implement a function that takes two numbers as input and returns the greatest common divisor (GCD).</li> <li class="svelte-xhs4zz">Write a JavaScript function to output the reverse of a string.</li> <li class="svelte-xhs4zz">Create a function that takes an array of integers and returns a new array with only the unique values.</li> <li class="svelte-xhs4zz">Develop a function that takes a sentence as input and returns the number of words in the sentence.</li></ol>`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
