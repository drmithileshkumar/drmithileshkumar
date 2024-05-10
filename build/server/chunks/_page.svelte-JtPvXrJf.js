import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import { j as javascript } from './javascript-BRG9RdMS.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import './Subheader-BwOM49vC.js';
import './client-CjdeEz1m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-DOWFXNhn.js';
import './classAdderBuilder-B5RJlVtK.js';
import './exports-DuWZopOC.js';
import './index2-B3zlhmO5.js';
import './_commonjsHelpers-B85MJLTf.js';

const css$1 = {
  code: "article.svelte-603v1q{display:flex;flex-direction:column;gap:0.5em}li.svelte-603v1q{opacity:0.8}h4.svelte-603v1q,h5.svelte-603v1q{margin:0.5em 0}h5.svelte-603v1q{font-size:1.3em;color:rgb(74, 155, 139)}h6.svelte-603v1q{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-603v1q{cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n    import DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\"\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Expressions\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let arithmetic = \`//arithmetic operations\\r\\nlet sum = 1 + 1.4; // 2.4\\r\\nlet dif = 1 - 1.4; // -0.4\\r\\nlet mul = 2 * 4; // 8\\r\\nlet div = 4 / 2; // 2\\r\\nlet mod = 5 % 2; // 1\\r\\nlet pow = 5 ** 2; // 25\\r\\nlet ex1 = 2 * (1 - 6 / 2); // -4\`\\r\\n    let boolean = \`//boolean\\r\\nlet isMore = 2 >= 4; // false\\r\\nlet isLess = 5 < 10; // true\\r\\nlet bool1 = isMore || isLess; // true\\r\\nlet bool2 = isMore && isLess; // false\\r\\nlet isEqual1 = 0 == '0';//true type conversion\\r\\nlet isEqual2 = 0 === '0; //false no type conversion\\r\\nlet notEqual1 = 0 != '0'; //false\\r\\nlet notEqual2 = 0 !== '0'; //true\`\\r\\n    let string = \`//string\\r\\nlet str1 = 'Hello';\\r\\nlet str2 = 'World';\\r\\nlet str3 = str1 + ' ' + str2;//'Hello World'\\r\\nlet num = 42;\\r\\nlet str4 = \\\\\`The answer to universe is \\\\\${num}.\\\\\`;\\\\\\\\ The answer to universe is 42.\`\\r\\n    let arrays = \`//arrays\\r\\nlet arr1 = [1, 2];\\r\\nlet arr2 = [3, 4];\\r\\nlet arr3 = arr1 + arr2; // '1, 23, 4'\\r\\n// ... spread operator\\r\\nlet arr4 = [...arr1, ...arr2];// [1, 2, 3, 4]\`\\r\\n    let objects = \`//objects\\r\\nlet obj = {\\r\\n    name: 'Mr X',\\r\\n    job: 'Hacker',\\r\\n    salary: 1000,\\r\\n    address: 'Bangaluru'\\r\\n}\\r\\nconsole.log(Object.keys(obj)); // [name, job, salary, address]\\r\\nlet ob1 = {\\r\\n    name: 'Mr X',\\r\\n    job: 'Hacker',\\r\\n    salary: 1000,\\r\\n    address: 'Bangaluru'\\r\\n}\\r\\nlet isEq1 = obj == obj1; // false\\r\\nlet isEq2 = obj === obj2; // false\\r\\n\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.3em;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/javascript/basics/variables\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Expressions\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#arithmetic\\">Arithmetic Operations</a></li>\\r\\n                <li><a href=\\"#boolean\\">Boolean operations</a></li>\\r\\n                <li><a href=\\"#strings\\">String operations</a></li>\\r\\n                <li><a href=\\"#arrays\\">Array operations</a></li>\\r\\n                <li><a href=\\"#objects\\">Object operations</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Arithmetic Operations</h5>\\r\\n            <Highlight language={javascript} code={arithmetic} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Boolean Operations</h5>\\r\\n            <Highlight language={javascript} code={boolean} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>String Operations</h5>\\r\\n            <Highlight language={javascript} code={string} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Array Operations</h5>\\r\\n            <Highlight language={javascript} code={arrays} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Object Operations</h5>\\r\\n            <Highlight language={javascript} code={objects} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"names\\">Names</h6>\\r\\n            <p>The names of variables are called <strong>identifiers</strong>.</p>\\r\\n            <p>A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).</p>\\r\\n            <Highlight language={javascript} code={names} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"const\\"><code>const</code></h6>\\r\\n            <p>Variables are declared using keywords <code>const, let, var</code>.</p>\\r\\n            <p>When a variable is declared constant, its value can not be changed, hence its value must be assigned at the time of declaration.</p>\\r\\n            \\r\\n            <Highlight language={javascript} code={constant} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"var\\"><code>var</code></h6>\\r\\n            <p>\\r\\n                Variables can be declared using the keyword <code>var</code>\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={variable} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"let\\"><code>let</code></h6>\\r\\n            <p>\\r\\n                Variables can be declared using the keyword <code>let</code>\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={letVar} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"number\\">Numbers</h6>\\r\\n            <p>A number in javascript can be of type integer or double.</p>\\r\\n            <Highlight language={javascript} code={number} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"boolean\\">Boolean</h6>\\r\\n            <p>Boolean variables have two values <code>true</code> and <code>false</code>.</p>\\r\\n            <Highlight language={javascript} code={boolean} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"strings\\">Strings</h6>\\r\\n            <p>A string is a text inside single quotes ('), double quotes (\\") or backtick (\`).</p>\\r\\n            <Highlight language={javascript} code={string} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>Backticks allow entering multi-line text.</p>\\r\\n<pre><code>\\r\\nlet str = \`There are three ways\\r\\nto declare string variables in javascript.\`\\r\\n</code></pre>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"arrays\\">Arrays</h6>\\r\\n            <p>\\r\\n                Arrays in javascript can take any type of data in the same list.\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={arrays} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"objects\\">Objects</h6>\\r\\n            <p>\\r\\n                An object is a colletion of key-value pairs.\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={objects} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA8EI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACG,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CAKA,eAAE,CACE,MAAM,CAAE,OACZ"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-1inwvaq_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/variables"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1inwvaq_END -->`, ""} <article class="svelte-603v1q">${validate_component(Pathlist, "Pathlist").$$render(
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
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-u5j7l0">Arithmetic Operations</h5> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: arithmetic }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-4wq1d2">Boolean Operations</h5> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: boolean }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-1y83evp">String Operations</h5> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: string }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-79et59">Array Operations</h5> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: arrays }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-603v1q" data-svelte-h="svelte-1c7j1rz">Object Operations</h5> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: objects }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-JtPvXrJf.js.map
