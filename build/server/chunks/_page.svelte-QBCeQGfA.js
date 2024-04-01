import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { j as javascript$1 } from './javascript-rg8zYIj7.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-eGCvawDk.js';
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
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}p.svelte-wl5xjl,li.svelte-wl5xjl{opacity:0.8}h4.svelte-wl5xjl{margin:0.5em 0}h6.svelte-wl5xjl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-wl5xjl{color:goldenrod;opacity:1}a.svelte-wl5xjl{cursor:pointer}",
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
  set_store_value(currentPath, $currentPath = "Variables", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let names = `//variable names
sum, _sum, $sum, _sum5, Sum, _Sum`;
  let constant = `//contant variable
const sum = 0;
sum = 1; //error`;
  let variable = `//var variable
var sum; // assigned undefined
sum = 1;`;
  let letVar = `//let variable
let sum; // assigned undefined
sum = 1;`;
  let number = `//numbers
let sum = 1; // integer
let mean = 1.4; // float`;
  let string = `//strings
let str1 = "Hello";
let str2 = 'World';`;
  let boolean = `//boolean
let isTrue = true;
let isFalse = false;`;
  let arrays = `//arrays
let arr1 = [0, 1, 1.432, "Text", true];
console.log(arr1[2])//prints 1.432;
let arr2 = new Array(2, "javascript", true);
let n = arr2.length; // n is 3`;
  let objects = `//objects
let obj = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(obj.name)`;
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1inwvaq_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/variables"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1inwvaq_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wl5xjl" data-svelte-h="svelte-1jr8uk7">Variables</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-mp4s1h"><li class="svelte-wl5xjl"><a href="#names" class="svelte-wl5xjl">Names</a></li> <li class="svelte-wl5xjl"><a href="#const" class="svelte-wl5xjl"><code>const</code></a></li> <li class="svelte-wl5xjl"><a href="#var" class="svelte-wl5xjl"><code>var</code></a></li> <li class="svelte-wl5xjl"><a href="#let" class="svelte-wl5xjl"><code>let</code></a></li> <li class="svelte-wl5xjl"><a href="#number" class="svelte-wl5xjl">Numbers</a></li> <li class="svelte-wl5xjl"><a href="#boolean" class="svelte-wl5xjl">Boolean</a></li> <li class="svelte-wl5xjl"><a href="#strings" class="svelte-wl5xjl">Strings</a></li> <li class="svelte-wl5xjl"><a href="#arrays" class="svelte-wl5xjl">Arrays</a></li> <li class="svelte-wl5xjl"><a href="#objects" class="svelte-wl5xjl">Objects</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="names" class="svelte-wl5xjl" data-svelte-h="svelte-12kyjge">Names</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-167ab0f">The names of variables are called <strong class="svelte-wl5xjl">identifiers</strong>.</p> <p class="svelte-wl5xjl" data-svelte-h="svelte-q7cg87">A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: names }, {}, {
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
          return `<h6 id="const" class="svelte-wl5xjl" data-svelte-h="svelte-1hfk0wd"><code>const</code></h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1bdqqvr">Variables are declared using keywords <code>const, let, var</code>.</p> <p class="svelte-wl5xjl" data-svelte-h="svelte-1m4quz4">When a variable is declared constant, its value can not be changed, hence its value must be assigned at the time of declaration.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: constant }, {}, {
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
          return `<h6 id="var" class="svelte-wl5xjl" data-svelte-h="svelte-1lwpi81"><code>var</code></h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1jzc98i">Variables can be declared using the keyword <code>var</code></p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: variable }, {}, {
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
          return `<h6 id="let" class="svelte-wl5xjl" data-svelte-h="svelte-1yu5zbt"><code>let</code></h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1b1gfbq">Variables can be declared using the keyword <code>let</code></p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: letVar }, {}, {
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
          return `<h6 id="number" class="svelte-wl5xjl" data-svelte-h="svelte-1mk16zt">Numbers</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1er0mts">A number in javascript can be of type integer or double.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: number }, {}, {
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
          return `<h6 id="boolean" class="svelte-wl5xjl" data-svelte-h="svelte-1w4igu">Boolean</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-efy3fr">Boolean variables have two values <code>true</code> and <code>false</code>.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: boolean }, {}, {
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
          return `<h6 id="strings" class="svelte-wl5xjl" data-svelte-h="svelte-9t5162">Strings</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-rx7uvi">A string is a text inside single quotes (&#39;), double quotes (&quot;) or backtick (\`).</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: string }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-wl5xjl" data-svelte-h="svelte-55ysb1">Backticks allow entering multi-line text.</p> <pre data-svelte-h="svelte-1sfea3f"><code>
let str = \`There are three ways
to declare string variables in javascript.\`
</code></pre>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="arrays" class="svelte-wl5xjl" data-svelte-h="svelte-19aoch2">Arrays</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-ohxu9i">Arrays in javascript can take any type of data in the same list.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: arrays }, {}, {
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
          return `<h6 id="objects" class="svelte-wl5xjl" data-svelte-h="svelte-16js3y6">Objects</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-10p32ft">An object is a colletion of key-value pairs.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: javascript$1, code: objects }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-QBCeQGfA.js.map
