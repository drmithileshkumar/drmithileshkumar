import { a as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr2.js";
import { j as javascript } from "../../../../../../../../chunks/javascript.js";
import { a as githubDark, g as github } from "../../../../../../../../chunks/github-dark.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores.js";
/* empty css                                                                   */
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content2.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
import { H as Highlight, L as LineNumbers } from "../../../../../../../../chunks/LineNumbers.js";
const css$1 = {
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}p.svelte-wl5xjl,li.svelte-wl5xjl{opacity:0.8}h4.svelte-wl5xjl{margin:0.5em 0}h6.svelte-wl5xjl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-wl5xjl{color:goldenrod;opacity:1}a.svelte-wl5xjl{cursor:pointer}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from \'svelte/transition\';\\r\\n\\timport { quintOut } from \'svelte/easing\';\\r\\n    import DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\"\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from \'$lib/ui/Link.svelte\';\\r\\n    import {page} from \'$app/stores\';\\r\\n    import {onMount} from \'svelte\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from \'$lib/components/NavList.svelte\'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Variables\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let names = `//variable names\\r\\nsum, _sum, $sum, _sum5, Sum, _Sum`\\r\\n    let constant = `//contant variable\\r\\nconst sum = 0;\\r\\nsum = 1; //error`\\r\\n    let variable = `//var variable\\r\\nvar sum; // assigned undefined\\r\\nsum = 1;`\\r\\n    let letVar = `//let variable\\r\\nlet sum; // assigned undefined\\r\\nsum = 1;`\\r\\n    let number = `//numbers\\r\\nlet sum = 1; // integer\\r\\nlet mean = 1.4; // float`\\r\\n    let string = `//strings\\r\\nlet str1 = \\"Hello\\";\\r\\nlet str2 = \'World\';`\\r\\n    let boolean = `//boolean\\r\\nlet isTrue = true;\\r\\nlet isFalse = false;`\\r\\n    let arrays = `//arrays\\r\\nlet arr1 = [0, 1, 1.432, \\"Text\\", true];\\r\\nconsole.log(arr1[2])//prints 1.432;\\r\\nlet arr2 = new Array(2, \\"javascript\\", true);\\r\\nlet n = arr2.length; // n is 3`\\r\\n    let objects = `//objects\\r\\nlet obj = {\\r\\n    name: \'Mr X\',\\r\\n    job: \'Hacker\',\\r\\n    salary: 1000,\\r\\n    address: \'Bangaluru\'\\r\\n}\\r\\nconsole.log(obj.name)`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/javascript/basics/variables\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Variables\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#names\\">Names</a></li>\\r\\n                <li><a href=\\"#const\\"><code>const</code></a></li>\\r\\n                <li><a href=\\"#var\\"><code>var</code></a></li>\\r\\n                <li><a href=\\"#let\\"><code>let</code></a></li>\\r\\n                <li><a href=\\"#number\\">Numbers</a></li>\\r\\n                <li><a href=\\"#boolean\\">Boolean</a></li>\\r\\n                <li><a href=\\"#strings\\">Strings</a></li>\\r\\n                <li><a href=\\"#arrays\\">Arrays</a></li>\\r\\n                <li><a href=\\"#objects\\">Objects</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"names\\">Names</h6>\\r\\n            <p>The names of variables are called <strong>identifiers</strong>.</p>\\r\\n            <p>A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).</p>\\r\\n            <Highlight language={javascript} code={names} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"const\\"><code>const</code></h6>\\r\\n            <p>Variables are declared using keywords <code>const, let, var</code>.</p>\\r\\n            <p>When a variable is declared constant, its value can not be changed, hence its value must be assigned at the time of declaration.</p>\\r\\n            \\r\\n            <Highlight language={javascript} code={constant} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"var\\"><code>var</code></h6>\\r\\n            <p>\\r\\n                Variables can be declared using the keyword <code>var</code>\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={variable} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"let\\"><code>let</code></h6>\\r\\n            <p>\\r\\n                Variables can be declared using the keyword <code>let</code>\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={letVar} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"number\\">Numbers</h6>\\r\\n            <p>A number in javascript can be of type integer or double.</p>\\r\\n            <Highlight language={javascript} code={number} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"boolean\\">Boolean</h6>\\r\\n            <p>Boolean variables have two values <code>true</code> and <code>false</code>.</p>\\r\\n            <Highlight language={javascript} code={boolean} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"strings\\">Strings</h6>\\r\\n            <p>A string is a text inside single quotes (\'), double quotes (\\") or backtick (`).</p>\\r\\n            <Highlight language={javascript} code={string} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>Backticks allow entering multi-line text.</p>\\r\\n<pre><code>\\r\\nlet str = `There are three ways\\r\\nto declare string variables in javascript.`\\r\\n</code></pre>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"arrays\\">Arrays</h6>\\r\\n            <p>\\r\\n                Arrays in javascript can take any type of data in the same list.\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={arrays} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"objects\\">Objects</h6>\\r\\n            <p>\\r\\n                An object is a colletion of key-value pairs.\\r\\n            </p>\\r\\n            <Highlight language={javascript} code={objects} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAiEI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CACA,eAAE,CACE,MAAM,CAAE,OACZ"}'
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
  return `${$$result.head += `<!-- HEAD_svelte-1inwvaq_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics/variables"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1inwvaq_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
          return `<h6 id="names" class="svelte-wl5xjl" data-svelte-h="svelte-12kyjge">Names</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-167ab0f">The names of variables are called <strong class="svelte-wl5xjl">identifiers</strong>.</p> <p class="svelte-wl5xjl" data-svelte-h="svelte-q7cg87">A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: names }, {}, {
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
          return `<h6 id="const" class="svelte-wl5xjl" data-svelte-h="svelte-1hfk0wd"><code>const</code></h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1bdqqvr">Variables are declared using keywords <code>const, let, var</code>.</p> <p class="svelte-wl5xjl" data-svelte-h="svelte-1m4quz4">When a variable is declared constant, its value can not be changed, hence its value must be assigned at the time of declaration.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: constant }, {}, {
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
          return `<h6 id="var" class="svelte-wl5xjl" data-svelte-h="svelte-1lwpi81"><code>var</code></h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1jzc98i">Variables can be declared using the keyword <code>var</code></p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: variable }, {}, {
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
          return `<h6 id="let" class="svelte-wl5xjl" data-svelte-h="svelte-1yu5zbt"><code>let</code></h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1b1gfbq">Variables can be declared using the keyword <code>let</code></p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: letVar }, {}, {
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
          return `<h6 id="number" class="svelte-wl5xjl" data-svelte-h="svelte-1mk16zt">Numbers</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1er0mts">A number in javascript can be of type integer or double.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: number }, {}, {
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
          return `<h6 id="boolean" class="svelte-wl5xjl" data-svelte-h="svelte-1w4igu">Boolean</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-efy3fr">Boolean variables have two values <code>true</code> and <code>false</code>.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: boolean }, {}, {
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
          return `<h6 id="strings" class="svelte-wl5xjl" data-svelte-h="svelte-9t5162">Strings</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-rx7uvi">A string is a text inside single quotes (&#39;), double quotes (&quot;) or backtick (\`).</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: string }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
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
          return `<h6 id="arrays" class="svelte-wl5xjl" data-svelte-h="svelte-19aoch2">Arrays</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-ohxu9i">Arrays in javascript can take any type of data in the same list.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: arrays }, {}, {
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
          return `<h6 id="objects" class="svelte-wl5xjl" data-svelte-h="svelte-16js3y6">Objects</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-10p32ft">An object is a colletion of key-value pairs.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: javascript, code: objects }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
