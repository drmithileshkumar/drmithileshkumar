import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { j as javascript$1 } from './javascript-rg8zYIj7.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-LSHkGKPp.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-603v1q{display:flex;flex-direction:column;gap:0.5em}li.svelte-603v1q{opacity:0.8}h4.svelte-603v1q,h5.svelte-603v1q{margin:0.5em 0}h5.svelte-603v1q{font-size:1.3em;color:rgb(74, 155, 139)}h6.svelte-603v1q{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-603v1q{cursor:pointer}",
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
  set_store_value(currentPath, $currentPath = "Expressions", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let arithmetic = `//arithmetic operations
let sum = 1 + 1.4; // 2.4
let dif = 1 - 1.4; // -0.4
let mul = 2 * 4; // 8
let div = 4 / 2; // 2
let mod = 5 % 2; // 1
let pow = 5 ** 2; // 25
let ex1 = 2 * (1 - 6 / 2); // -4`;
  let boolean = `//boolean
let isMore = 2 >= 4; // false
let isLess = 5 < 10; // true
let bool1 = isMore || isLess; // true
let bool2 = isMore && isLess; // false
let isEqual1 = 0 == '0';//true type conversion
let isEqual2 = 0 === '0; //false no type conversion
let notEqual1 = 0 != '0'; //false
let notEqual2 = 0 !== '0'; //true`;
  let string = `//string
let str1 = 'Hello';
let str2 = 'World';
let str3 = str1 + ' ' + str2;//'Hello World'
let num = 42;
let str4 = \`The answer to universe is \${num}.\`;\\ The answer to universe is 42.`;
  let arrays = `//arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1 + arr2; // '1, 23, 4'
// ... spread operator
let arr4 = [...arr1, ...arr2];// [1, 2, 3, 4]`;
  let objects = `//objects
let obj = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj)); // [name, job, salary, address]
let ob1 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
let isEq1 = obj == obj1; // false
let isEq2 = obj === obj2; // false
`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1inwvaq_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/variables"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1inwvaq_END -->`, ""} <article class="svelte-603v1q">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-603v1q" data-svelte-h="svelte-1cwlc3x">Expressions</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-603v1q" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-12c4702"><li class="svelte-603v1q"><a href="#arithmetic" class="svelte-603v1q">Arithmetic Operations</a></li> <li class="svelte-603v1q"><a href="#boolean" class="svelte-603v1q">Boolean operations</a></li> <li class="svelte-603v1q"><a href="#strings" class="svelte-603v1q">String operations</a></li> <li class="svelte-603v1q"><a href="#arrays" class="svelte-603v1q">Array operations</a></li> <li class="svelte-603v1q"><a href="#objects" class="svelte-603v1q">Object operations</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-u5j7l0">Arithmetic Operations</h5> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: arithmetic }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-4wq1d2">Boolean Operations</h5> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: boolean }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-1y83evp">String Operations</h5> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: string }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-79et59">Array Operations</h5> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: arrays }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-1c7j1rz">Object Operations</h5> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: objects }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f11GQ3rg.js.map
