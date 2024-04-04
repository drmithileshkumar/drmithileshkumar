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
  set_store_value(currentPath, $currentPath = "Loops", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-14tolkx_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/loops"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-14tolkx_END -->`, ""} <article class="svelte-xhs4zz">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-q1ltn7">Loops</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-xhs4zz" data-svelte-h="svelte-zdr1se">Topics</h6> <ol class="svelte-xhs4zz" data-svelte-h="svelte-hi4ta8"><li class="svelte-xhs4zz"><a href="#for" class="svelte-xhs4zz"><code>for</code></a></li> <li class="svelte-xhs4zz"><a href="#while" class="svelte-xhs4zz"><code>while</code></a></li></ol> <p class="svelte-xhs4zz" data-svelte-h="svelte-sggec9">Loop statements like <code>for</code> and <code>while</code> introduce repetition in the normal flow of the program.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="for" class="svelte-xhs4zz" data-svelte-h="svelte-u2xowt"><code>for</code></h6> <p class="svelte-xhs4zz">The general syntax of <code data-svelte-h="svelte-1yv6rav">for</code> statement is as follows:
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `for(start value; final value or condition; steps for change) {
	//statements to execute when condition1 is true
}
//example
for(let i = 0; i < 10; i++) {
	console.log(i); // print the value of i
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
  })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="while" class="svelte-xhs4zz" data-svelte-h="svelte-t456cd"><code>while</code></h6> <p class="svelte-xhs4zz">The general syntax of <code data-svelte-h="svelte-drpa5d">while</code> statement is as follows:
                ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: javascript,
              code: `while(condition) {
	//execute the code as long as condition is true
	//there should be a statement that updates the variables in the condition for a finite termination
}
//example:
let x = 0;
while(x < 10) {
	console.log(x);
	x++; // increase the value of x by 1
}`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</p> <p class="svelte-xhs4zz" data-svelte-h="svelte-1rmxr6s">Use <code>break</code> statement to exit out of the loop.</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-xhs4zz" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-xhs4zz" data-svelte-h="svelte-1xibm3o"><li class="svelte-xhs4zz">Write a JavaScript program that prints numbers from 1 to 10 using a for loop.</li> <li class="svelte-xhs4zz">Create a function that calculates the factorial of a given number using a for loop.</li> <li class="svelte-xhs4zz">Implement a JavaScript function to find the sum of all numbers between 1 and 100 using a while loop.</li> <li class="svelte-xhs4zz">Write a program that prints the multiplication table of a given number using a for loop.</li> <li class="svelte-xhs4zz">Develop a function that checks if a given number is prime using a for loop.</li> <li class="svelte-xhs4zz">Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.</li> <li class="svelte-xhs4zz">Implement a function to find the largest element in an array using a for loop.</li> <li class="svelte-xhs4zz">Write a program that counts the number of vowels in a given string using a for loop.</li> <li class="svelte-xhs4zz">Create a JavaScript function that calculates the sum of digits of a given number using a while loop.</li> <li class="svelte-xhs4zz">Implement a program that checks if a given string is a palindrome using a for loop.</li></ol>`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
