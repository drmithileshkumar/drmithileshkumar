import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../../chunks/content4.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { N as NavList } from "../../../../../../../../chunks/NavList.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css$1 = {
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}p.svelte-wl5xjl{opacity:0.8}h4.svelte-wl5xjl,h5.svelte-wl5xjl{margin:0.5em 0}h5.svelte-wl5xjl{font-size:1.1em}h6.svelte-wl5xjl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-wl5xjl{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import css from \\"svelte-highlight/languages/css\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n    import DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\"\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Object Orientation and JavaScript\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let code1=\`<!--Inline CSS-->\\r\\n<p style=\\"color: tomato;\\">I'm tomato</p>\`\\r\\n    let code2=\`<head>\\r\\n    <!---CSS from external file-->\\r\\n    <link rel=\\"stylesheet\\" href=\\"/app.css\\"> \\r\\n    <!--Document level CSS-->\\r\\n    <style>\\r\\n    /* set text color of p elements to tomato */\\r\\n        p {\\r\\n            color: tomato;\\r\\n        }\\r\\n    </style>\\r\\n</head>\`\\r\\n    let code3 = \`selector1 {\\r\\n    property1: value1;\\r\\n    property2: value2;\\r\\n}\\r\\nselector2 {\\r\\n    property3: value3;\\r\\n    property4: value4;\\r\\n}\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/javascript/basics\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Object Orientation and JavaScript\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h5>Contents</h5>\\r\\n            <NavList name=\\"{$navList[0].topics[2].topics[0].name}\\" url=\\"{$navList[0].topics[2].topics[0].url}\\" topics={$navList[0].topics[2].topics[0].topics} expanded={false} />\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                The official name of the language is ECMAScript.\\r\\n            </p>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Java vs JavaScript</h6>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>Java</Cell>\\r\\n                        <Cell>JavaScript</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell style=\\"white-space:normal\\">Java is an object-oriented programming language which is class-based.</Cell>\\r\\n                        <Cell style=\\"white-space:normal\\">JavaScript is also object-oriented, but not class-based. Objects and methods can be defined irrespective of any class.</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell style=\\"white-space:normal\\">Java is a strongly typed language. Types are all known at compile time and the operand types are checked for compatibility. </Cell>\\r\\n                        <Cell style=\\"white-space:normal\\">Variables in JavaScript need not be declared and are dynamically typed, making compile-time type checking impossible. </Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell style=\\"white-space:normal\\">Objects in Java are static in the sense that their collection of data members and methods is fixed at compile time.</Cell>\\r\\n                        <Cell style=\\"white-space:normal\\"> JavaScript objects are dynamic: The number of data members and methods of an object can change during execution.</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Uses of JavaScript</h6>\\r\\n            <p>javascript provides programming capability to both the client and server. Although all the programming load can be shifted over to the client, there are important limitations imposed on the client side. For example, file operations, database access and networking can mainly be done from the server side.</p>\\r\\n            <p> Much of what JavaScript scripts typically do is event driven, meaning that the actions often are executed in response to the browser user’s actions, among them mouse clicks and form submissions. This sort of computation supports user interactions through the HTML form elements on the client display.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>JavaScript in HTML</h6>\\r\\n            <p>\\r\\n                JavaScript code can be used in two ways: \\r\\n            </p>\\r\\n            <dl>\\r\\n                <dt><strong>Explicit embedding</strong></dt>\\r\\n                <dd>Place the code inside <code>script</code> tag inside <code>body</code> tag.</dd>\\r\\n                <dt><strong>Implicit embedding</strong></dt>\\r\\n                <dd>Import an external file using <code>script</code> tag inside the <code>head</code> tag.</dd>\\r\\n            </dl>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAqDI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  set_store_value(currentPath, $currentPath = "Object Orientation and JavaScript", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-16hacw_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-16hacw_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wl5xjl" data-svelte-h="svelte-mmuf8p">Object Orientation and JavaScript</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="svelte-wl5xjl" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
              $$result,
              {
                name: $navList[0].topics[2].topics[0].name,
                url: $navList[0].topics[2].topics[0].url,
                topics: $navList[0].topics[2].topics[0].topics,
                expanded: false
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-wl5xjl" data-svelte-h="svelte-1u2i530">The official name of the language is ECMAScript.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-rtf8l0">Java vs JavaScript</h6> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Java`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `JavaScript`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Java is an object-oriented programming language which is class-based.`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `JavaScript is also object-oriented, but not class-based. Objects and methods can be defined irrespective of any class.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Java is a strongly typed language. Types are all known at compile time and the operand types are checked for compatibility.`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Variables in JavaScript need not be declared and are dynamically typed, making compile-time type checking impossible.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Objects in Java are static in the sense that their collection of data members and methods is fixed at compile time.`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `JavaScript objects are dynamic: The number of data members and methods of an object can change during execution.`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-14stbuu">Uses of JavaScript</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-4ink07">javascript provides programming capability to both the client and server. Although all the programming load can be shifted over to the client, there are important limitations imposed on the client side. For example, file operations, database access and networking can mainly be done from the server side.</p> <p class="svelte-wl5xjl" data-svelte-h="svelte-2j26qz">Much of what JavaScript scripts typically do is event driven, meaning that the actions often are executed in response to the browser user’s actions, among them mouse clicks and form submissions. This sort of computation supports user interactions through the HTML form elements on the client display.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-a5eqi9">JavaScript in HTML</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1agz4rf">JavaScript code can be used in two ways:</p> <dl data-svelte-h="svelte-x20dds"><dt><strong class="svelte-wl5xjl">Explicit embedding</strong></dt><dd>Place the code inside <code>script</code> tag inside <code>body</code> tag.</dd><dt><strong class="svelte-wl5xjl">Implicit embedding</strong></dt><dd>Import an external file using <code>script</code> tag inside the <code>head</code> tag.</dd></dl>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
