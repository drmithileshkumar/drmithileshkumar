import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { p as page } from './stores3-BrNJmxTp.js';
import './ActionIcons-BJ7xikju.js';
import './Subheader-BV9F6O0P.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Bb_1fHB9.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import './Suffix-CzM54Q0Q.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-BHHnS_Mj.js';
import { H as Head } from './Head-DnR4PX6i.js';
import { P as Pathlist } from './Pathlist-BHOBzrf2.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './classAdderBuilder-B9W9nXDD.js';
import './SmuiElement-DA9PKsv2.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';
import './prefixFilter-B6cFZsw3.js';

const css = {
  code: "article.svelte-1la69s{display:flex;flex-direction:column;gap:0.5em}h4.svelte-1la69s{margin:0.5em 0}code{background-color:rgba(0, 100, 100, 0.1)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"HTML vs XHTML\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <form action=\\"\\" method=\\"get\\">\\r\\n            <!---form controls like input, select, button go here -->\\r\\n        </form>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContent1 = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <form id=\\"myForm\\" action=\\"\\">\\r\\n            <label for=\\"username\\">\\r\\n                Username: <input type=\\"text\\" id=\\"username\\" name=\\"username\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"password\\">\\r\\n                Password: <input type=\\"password\\" id=\\"password\\" name=\\"password\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"email\\">\\r\\n                Email: <input type=\\"email\\" id=\\"email\\" name=\\"email\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"telephone\\">\\r\\n                Telephone: <input type=\\"tel\\" id=\\"telephone\\" name=\\"telephone\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"page\\">\\r\\n                Website: <input type=\\"url\\" id=\\"page\\" name=\\"homepage\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"house\\">\\r\\n                House: <input type=\\"number\\" id=\\"house\\" name=\\"house\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"date\\">\\r\\n                Current date: <input type=\\"date\\" id=\\"date\\" name=\\"date\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"month\\">\\r\\n                Last month: <input type=\\"month\\" id=\\"month\\" name=\\"month\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"week\\">\\r\\n                Current Week: <input type=\\"week\\" id=\\"week\\" name=\\"week\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"color\\">\\r\\n                Favourite Color: <input type=\\"color\\" id=\\"color\\" name=\\"color\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"file\\">\\r\\n                Photo: <input type=\\"file\\" accept=\\"image/*\\" id=\\"file\\" name=\\"photo\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"laptop\\">\\r\\n                Laptop <input type=\\"checkbox\\" id=\\"laptop\\" name=\\"laptop\\" value=\\"Laptop\\" />    \\r\\n            </label>\\r\\n            <label for=\\"mobile\\">\\r\\n                Mobile <input type=\\"checkbox\\" id=\\"mobile\\" name=\\"mobile\\" value='Mobile' />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <label for=\\"male\\">\\r\\n                Male <input type=\\"radio\\" id=\\"male\\" name=\\"gender\\" value=\\"Male\\" />    \\r\\n            </label>\\r\\n            <label for=\\"female\\">\\r\\n                Female <input type=\\"radio\\" id=\\"female\\" name=\\"gender\\" value=\\"Female\\" />    \\r\\n            </label>\\r\\n            <br/>\\r\\n            <br/>\\r\\n            <input type=\\"reset\\" id=\\"reset\\" value=\\"Reset\\" />\\r\\n            <input type=\\"button\\" id=\\"button\\" onclick=\\"console.log(document.getElementById('myForm').elements[0])\\" value=\\"Alert\\" />\\r\\n            <input type=\\"submit\\" id=\\"submit\\" value=\\"submit\\" />    \\r\\n        </form>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContentSelect = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <form action=\\"\\" method=\\"get\\">\\r\\n            <!--Simple select menu -->\\r\\n            <select name=\\"simpleMenu\\">\\r\\n                <option>Apple</option>\\r\\n                <option>Samsung</option>\\r\\n                <option>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n            </select>\\r\\n            <!--Preselected item -->\\r\\n            <select name=\\"preSelected\\">\\r\\n                <option>Apple</option>\\r\\n                <option selected>Samsung</option>\\r\\n                <option>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n            </select>\\r\\n            <!--with size -->\\r\\n            <select name=\\"menuSize\\" size=\\"3\\">\\r\\n                <option>Apple</option>\\r\\n                <option>Samsung</option>\\r\\n                <option>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n            </select>\\r\\n            <!--Multiple select-->\\r\\n            <select multiple name=\\"multipleValue\\">\\r\\n                <option>Apple</option>\\r\\n                <option>Samsung</option>\\r\\n                <option selected>Mi</option>\\r\\n                <option>OnePlus</option>\\r\\n                <option>Nokia</option>\\r\\n                <option>Motorola</option>\\r\\n                <option>Vivo</option>\\r\\n            </select>\\r\\n            <!--Opt goup-->\\r\\n            <select name=\\"Nested\\">\\r\\n                <optgroup label=\\"Apple\\">\\r\\n                    <option>iPhone</option>\\r\\n                    <option>iPad</option>\\r\\n                    <option>Mac</option>\\r\\n                    <option>Air Pod</option>\\r\\n                </optgroup>\\r\\n                <optgroup label=\\"Android\\">\\r\\n                    <option>Samsung</opton>\\r\\n                    <option>Mi</option>\\r\\n                    <option>Vivo</option>\\r\\n                    <option>Oppo</option>\\r\\n                </optgroup>\\r\\n            </select>\\r\\n        </form>\\r\\n    </body> \\r\\n</html>\\r\\n\`\\r\\nlet htmlContentTextarea = \`<!DOCTYPE html>\\r\\n<html lang = \\"en\\" >\\r\\n    <head> \\r\\n        <title> Textarea </title>\\r\\n        <meta charset = \\"utf-8\\" />\\r\\n    </head>\\r\\n    <body>\\r\\n        <p>\\r\\n            Please write about yourself\\r\\n        </p>\\r\\n        <form action = \\"handler\\">\\r\\n            <p>\\r\\n                <textarea name = \\"description\\"  rows = \\"3\\"  cols = \\"40\\">\\r\\n            (Word limit 300) \\r\\n                </textarea>\\r\\n            </p>\\r\\n        </form>\\r\\n    </body>\\r\\n</html>\\r\\n\\r\\n\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    :global(code) {\\r\\n        background-color: rgba(0, 100, 100, 0.1);\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/xhtml\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        HTML vs XHTML\\r\\n    </h4>\\r\\n    <!-- <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#basicForm\\">The <code>form</code> Element</a></li>\\r\\n                <li><a href=\\"#inputForm\\">The <code>input</code> Element</a></li>\\r\\n                <li><a href=\\"#selectForm\\">The <code>select</code> Element</a></li>\\r\\n                <li><a href=\\"#textareaForm\\">The <code>textarea</code> Element</a></li>\\r\\n            </ol>\\r\\n            <p>For a better understanding of form submission, read <a href=\\"/courses/internet/wwwhtml/fundamentals/http\\">HTTP protocol</a>.</p>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n\\r\\n    <!-- <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} /> -->\\r\\n    <DataTable style=\\"width:100%;\\">\\r\\n        <Head>\\r\\n            <Row>\\r\\n                <Cell>HTML</Cell>\\r\\n                <Cell>XHTML</Cell>\\r\\n            </Row>\\r\\n        </Head>\\r\\n        <Body>\\r\\n            <Row>\\r\\n                <Cell style=\\"white-space:normal;\\">tag and attributes are case insensitive</Cell>\\r\\n                <Cell style=\\"white-space:normal;\\">tag and attributes are case sensitive</Cell>\\r\\n            </Row>\\r\\n            <Row>\\r\\n                <Cell style=\\"white-space:normal;\\">closing tags may be omitted</Cell>\\r\\n                <Cell style=\\"white-space:normal;\\">must have closing tags or a slash.</Cell>\\r\\n            </Row>\\r\\n            <Row>\\r\\n                <Cell style=\\"white-space:normal;\\">attribute values must be quoted only if there are embedded special characters or white-space characters. Numeric attribute values are rarely quoted</Cell>\\r\\n                <Cell style=\\"white-space:normal;\\"> all attribute values must be double quoted, regardless of what characters are included in the value</Cell>\\r\\n            </Row>\\r\\n            <Row>\\r\\n                <Cell style=\\"white-space:normal;\\">some attribute values are implicit; that is, they need not be explicitly stated</Cell>\\r\\n                <Cell style=\\"white-space:normal;\\">an attribute must be assigned a string of the name of the attribute.</Cell>\\r\\n            </Row>\\r\\n            <Row>\\r\\n                <Cell style=\\"white-space:normal;\\"> HTML markup often uses the name attribute for elements. This attribute was deprecated for some elements in HTML 4.0, which added the id attribute to nearly all elements.</Cell>\\r\\n                <Cell style=\\"white-space:normal;\\">the use of id is encouraged and the use of name is discouraged. However, form control elements must still use the name attribute because it is employed in processing form data on the server.</Cell>\\r\\n            </Row>\\r\\n            <Row>\\r\\n                <Cell style=\\"white-space:normal;\\"> Although HTML has rules against improper nesting of ele\\r\\n                    ments, they are not enforced. Examples of nesting rules are (1) an anchor ele\\r\\n                    ment cannot contain another anchor element, and a form element cannot contain \\r\\n                    another form element; (2) if an element appears inside another element, the clos\\r\\n                    ing tag of the inner element must appear before the closing tag of the outer ele\\r\\n                    ment; (3) block elements cannot be nested in inline elements; (4) text cannot be \\r\\n                    directly nested in body or form elements; and (5) list elements cannot be directly \\r\\n                    nested in list elements. </Cell>\\r\\n                <Cell style=\\"white-space:normal;\\">these nesting rules are strictly enforced.</Cell>\\r\\n            </Row>\\r\\n        </Body>\\r\\n    </DataTable>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgOI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAqBQ,IAAM,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}`
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
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "HTML vs XHTML", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-6w3bzt_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/xhtml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-6w3bzt_END -->`, ""} <article class="svelte-1la69s">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-nqfkab">HTML vs XHTML</h4>   ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%;" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `HTML`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `XHTML`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `tag and attributes are case insensitive`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `tag and attributes are case sensitive`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `closing tags may be omitted`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `must have closing tags or a slash.`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `attribute values must be quoted only if there are embedded special characters or white-space characters. Numeric attribute values are rarely quoted`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `all attribute values must be double quoted, regardless of what characters are included in the value`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `some attribute values are implicit; that is, they need not be explicitly stated`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `an attribute must be assigned a string of the name of the attribute.`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `HTML markup often uses the name attribute for elements. This attribute was deprecated for some elements in HTML 4.0, which added the id attribute to nearly all elements.`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `the use of id is encouraged and the use of name is discouraged. However, form control elements must still use the name attribute because it is employed in processing form data on the server.`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `Although HTML has rules against improper nesting of ele
                    ments, they are not enforced. Examples of nesting rules are (1) an anchor ele
                    ment cannot contain another anchor element, and a form element cannot contain 
                    another form element; (2) if an element appears inside another element, the clos
                    ing tag of the inner element must appear before the closing tag of the outer ele
                    ment; (3) block elements cannot be nested in inline elements; (4) text cannot be 
                    directly nested in body or form elements; and (5) list elements cannot be directly 
                    nested in list elements.`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `these nesting rules are strictly enforced.`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DaW5B2Jn.js.map
