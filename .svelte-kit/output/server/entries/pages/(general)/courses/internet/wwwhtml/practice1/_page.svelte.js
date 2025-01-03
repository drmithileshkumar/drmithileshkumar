import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../chunks/ssr2.js";
import { x as xml } from "../../../../../../../chunks/xml.js";
import { g as githubDark, a as github } from "../../../../../../../chunks/github-dark.js";
/* empty css                                                             */
import { p as page } from "../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import { N as NavList } from "../../../../../../../chunks/NavList.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../../../chunks/content.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
import { H as Highlight, L as LineNumbers } from "../../../../../../../chunks/LineNumbers.js";
const css = {
  code: "article.svelte-4h8i2n{display:flex;flex-direction:column;gap:0.5em}p.svelte-4h8i2n,li.svelte-4h8i2n{opacity:0.8}h4.svelte-4h8i2n,h5.svelte-4h8i2n{margin:0.5em 0}h5.svelte-4h8i2n{font-size:1.7em}.question.svelte-4h8i2n{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Practice Problems\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let code1=\`<h1>Quantum Computation</H1>\\r\\n<p>There are various disciplines in quantum computation.<p>\`\\r\\n    let code2=\`<!DOCTYPE html>\\r\\n<head>\\r\\n    <body>\\r\\n    </body>\\r\\n</head>\\r\\n<article>\\r\\n    <html>\\r\\n    </html>\\r\\n<article>\\r\\n<title>My Page</title>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Practice Problems\\r\\n    </h4>\\r\\n    <h5>\\r\\n        Fundamentals of WWW, HTML and XHTML\\r\\n    </h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Contents</h5>\\r\\n            <NavList name=\\"{$navList[0].topics[0].name}\\" url=\\"{$navList[0].topics[0].url}\\" topics={$navList[0].topics[0].topics} expanded={false} />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Which of the following is not a valid IP address:</p>\\r\\n                <ol>\\r\\n                    <li>172.168.0.1</li>\\r\\n                    <li>172.168.0.0.1</li>\\r\\n                    <li>255.255.255.255</li>\\r\\n                    <li>256.255.0.1</li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>If it were allowed to use 36 bit IP addresses, how many unique IP address would be there?</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>If you want to edit an existing document, which is the right HTTP method to use:</p>\\r\\n                <ol>\\r\\n                    <li>GET</li>\\r\\n                    <li>POST</li>\\r\\n                    <li>PUT</li>\\r\\n                    <li>DELETE</li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>\\r\\n                    Find errors in the following HTML code:\\r\\n                </p>\\r\\n                <Highlight language={xml} code={code1} let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>\\r\\n                    Correct the document structure.\\r\\n                </p>\\r\\n                <Highlight language={xml} code={code2} let:highlighted>\\r\\n                    <LineNumbers {highlighted} wrapLines/>\\r\\n                </Highlight>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Which of the tags has <code>href</code> as attribute</p>\\r\\n                <ol>\\r\\n                    <li><code>a</code></li>\\r\\n                    <li><code>link</code></li>\\r\\n                    <li><code>img</code></li>\\r\\n                    <li><code>input</code></li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Which of the tags has <code>src</code> as attribute</p>\\r\\n                <ol>\\r\\n                    <li><code>a</code></li>\\r\\n                    <li><code>link</code></li>\\r\\n                    <li><code>img</code></li>\\r\\n                    <li><code>input</code></li>\\r\\n                    <li><code>source</code></li>\\r\\n                    <li><code>audio</code></li>\\r\\n                    <li><code>video</code></li>\\r\\n                    <li><code>table</code></li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>List any five organization elements.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Create a table that shows possible outcomes of rolling two die. Fill the cells with random outcomes. Either use html entities or images for the die face.</p>\\r\\n                <ol>\\r\\n                    <li>&#9856; <code>{'&#9856;'}</code></li>\\r\\n                    <li>&#9857; <code>{'&#9857;'}</code></li>\\r\\n                    <li>&#9858; <code>{'&#9858;'}</code></li>\\r\\n                    <li>&#9859; <code>{'&#9859;'}</code></li>\\r\\n                    <li>&#9860; <code>{'&#9860;'}</code></li>\\r\\n                    <li>&#9861; <code>{'&#9861;'}</code></li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>\\r\\n                    Create a definition list showing state names (as dt) and at least two cities (as dd) in each state.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>\\r\\n                    Solve the above problem using nested lists: one list for state names and inside each item another list for cities.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Create a form for setting up profile of a costumer. It should take inputs for name, age, gender, photo, house number, street, locality, city, zip code, state. It should contain a submit button.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AA2CI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CAaA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Practice Problems", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let code1 = `<h1>Quantum Computation</H1>
<p>There are various disciplines in quantum computation.<p>`;
  let code2 = `<!DOCTYPE html>
<head>
    <body>
    </body>
</head>
<article>
    <html>
    </html>
<article>
<title>My Page</title>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-775k1p_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-775k1p_END -->`, ""} <article class="svelte-4h8i2n">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-4h8i2n" data-svelte-h="svelte-1cd8yhl">Practice Problems</h4> <h5 class="svelte-4h8i2n" data-svelte-h="svelte-17d92cp">Fundamentals of WWW, HTML and XHTML</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-4h8i2n" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
            $$result,
            {
              name: $navList[0].topics[0].name,
              url: $navList[0].topics[0].url,
              topics: $navList[0].topics[0].topics,
              expanded: false
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-10fyu1s"><p class="svelte-4h8i2n">Which of the following is not a valid IP address:</p> <ol><li class="svelte-4h8i2n">172.168.0.1</li> <li class="svelte-4h8i2n">172.168.0.0.1</li> <li class="svelte-4h8i2n">255.255.255.255</li> <li class="svelte-4h8i2n">256.255.0.1</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-xyii0q"><p class="svelte-4h8i2n">If it were allowed to use 36 bit IP addresses, how many unique IP address would be there?</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-tq5ciu"><p class="svelte-4h8i2n">If you want to edit an existing document, which is the right HTTP method to use:</p> <ol><li class="svelte-4h8i2n">GET</li> <li class="svelte-4h8i2n">POST</li> <li class="svelte-4h8i2n">PUT</li> <li class="svelte-4h8i2n">DELETE</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n"><p class="svelte-4h8i2n" data-svelte-h="svelte-fktuqt">Find errors in the following HTML code:</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: code1 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n"><p class="svelte-4h8i2n" data-svelte-h="svelte-2hhpg5">Correct the document structure.</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: code2 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-fx8zfz"><p class="svelte-4h8i2n">Which of the tags has <code>href</code> as attribute</p> <ol><li class="svelte-4h8i2n"><code>a</code></li> <li class="svelte-4h8i2n"><code>link</code></li> <li class="svelte-4h8i2n"><code>img</code></li> <li class="svelte-4h8i2n"><code>input</code></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-998zwc"><p class="svelte-4h8i2n">Which of the tags has <code>src</code> as attribute</p> <ol><li class="svelte-4h8i2n"><code>a</code></li> <li class="svelte-4h8i2n"><code>link</code></li> <li class="svelte-4h8i2n"><code>img</code></li> <li class="svelte-4h8i2n"><code>input</code></li> <li class="svelte-4h8i2n"><code>source</code></li> <li class="svelte-4h8i2n"><code>audio</code></li> <li class="svelte-4h8i2n"><code>video</code></li> <li class="svelte-4h8i2n"><code>table</code></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1bzd1yg"><p class="svelte-4h8i2n">List any five organization elements.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n"><p class="svelte-4h8i2n" data-svelte-h="svelte-1bx3gkz">Create a table that shows possible outcomes of rolling two die. Fill the cells with random outcomes. Either use html entities or images for the die face.</p> <ol><li class="svelte-4h8i2n">⚀ <code>${escape("&#9856;")}</code></li> <li class="svelte-4h8i2n">⚁ <code>${escape("&#9857;")}</code></li> <li class="svelte-4h8i2n">⚂ <code>${escape("&#9858;")}</code></li> <li class="svelte-4h8i2n">⚃ <code>${escape("&#9859;")}</code></li> <li class="svelte-4h8i2n">⚄ <code>${escape("&#9860;")}</code></li> <li class="svelte-4h8i2n">⚅ <code>${escape("&#9861;")}</code></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1ltvxmz"><p class="svelte-4h8i2n">Create a definition list showing state names (as dt) and at least two cities (as dd) in each state.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-kbe2yo"><p class="svelte-4h8i2n">Solve the above problem using nested lists: one list for state names and inside each item another list for cities.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1ciqlpg"><p class="svelte-4h8i2n">Create a form for setting up profile of a costumer. It should take inputs for name, age, gender, photo, house number, street, locality, city, zip code, state. It should contain a submit button.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
