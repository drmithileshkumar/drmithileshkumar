import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import './Subheader-BwOM49vC.js';
import './client-CjdeEz1m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { W as WebPractice } from './WebPractice-_oZvNzkN.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './classAdderBuilder-B5RJlVtK.js';
import './exports-DuWZopOC.js';
import './index2-B3zlhmO5.js';
import './ContextFragment-Dwx7Ej1j.js';
import './CommonLabel-Bjz32QAu.js';
import './Suffix-DUyW9-NK.js';
import './Button-nlTGW0Wq.js';
import './Ripple-Yt1ZX6hy.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

const css = {
  code: "article.svelte-jodgkw{display:flex;flex-direction:column;gap:0.5em}p.svelte-jodgkw,li.svelte-jodgkw{opacity:0.8}h4.svelte-jodgkw{margin:0.5em 0}h6.svelte-jodgkw{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-jodgkw{text-decoration:none;cursor:pointer}.question.svelte-jodgkw{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n\\timport WebPractice from \\"$lib/pages/courses/internet/WebPractice.svelte\\";\\r\\n\\timport DataTable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n    import Pathlist from '$lib/components/Pathlist.svelte'\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Tables\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let htmlContent = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <table>\\r\\n            <caption>Basic Timetable</caption>\\r\\n            <tr>\\r\\n                <th></th>\\r\\n                <th>8:45-9:45</th>\\r\\n                <th>9:45-10:45</th>\\r\\n                <th>11:00-12:00</th>\\r\\n                <th>12:00-01:00</th>\\r\\n                <th>01:45-03:45\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Mon</th>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td>IT</td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Tue</th>\\r\\n                <td>Lab B2</td>\\r\\n                <td>Lab B2</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Wed</th>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Thu</th>\\r\\n                <td></td>\\r\\n                <td>IT</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td>Lab B1</td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Fri</th>\\r\\n                <td>IT</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n        </table>\\r\\n    </body> \\r\\n</html>\`\\r\\nlet htmlContent1 = \`<!DOCTYPE html> \\r\\n<!-- File name and document purpose --> \\r\\n<html lang = \\"en\\">   \\r\\n    <head>     \\r\\n        <title> A title for the document </title>\\r\\n        <meta charset = \\"utf-8\\" />     \\r\\n        <!--include external resources here like adsense, javascript, styles-->\\r\\n    </head>   \\r\\n    <body>   \\r\\n        <table>\\r\\n            <caption>Basic Timetable</caption>\\r\\n            <thead>\\r\\n            <tr>\\r\\n                <th></th>\\r\\n                <th>8:45-9:45</th>\\r\\n                <th>9:45-10:45</th>\\r\\n                <th>11:00-12:00</th>\\r\\n                <th>12:00-01:00</th>\\r\\n                <th>01:45-02:45</th>\\r\\n                <th>02:45-03:45</th>\\r\\n            </tr>\\r\\n            </thead>\\r\\n            <tbody>\\r\\n            <tr>\\r\\n                <th>Mon</th>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td>IT</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Tue</th>\\r\\n                <td style=\\"background: red;color:white;\\" colspan=\\"2\\">Lab B2</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Wed</th>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Thu</th>\\r\\n                <td></td>\\r\\n                <td>IT</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td style=\\"background: red;color:white;\\" colspan=\\"2\\" colspan=\\"2\\">Lab B1</td>\\r\\n            </tr>\\r\\n            <tr>\\r\\n                <th>Fri</th>\\r\\n                <td>IT</td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n                <td></td>\\r\\n            </tr>\\r\\n            </tbody>\\r\\n            <tfoot>\\r\\n            </tfoot>\\r\\n        </table>\\r\\n    </body> \\r\\n</html>\`\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/html/tables\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Tables\\r\\n    </h4>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <Content>\\r\\n            <h6>Topics</h6>\\r\\n            <ol>\\r\\n                <li><a href=\\"#basicTable\\">Basic Table Tags</a></li>\\r\\n                <li><a href=\\"#tableSpan\\">The <code>rowspan</code> and <code>colspan</code> Attributes</a></li>\\r\\n                <li><a href=\\"#tableSection\\">Table Sections</a></li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                As the name suggests, a table is created using the <code>table</code> in HTML. There are many components to a <code>table</code> that we'll learn in this section.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"basicTable\\">Basic Table Tags</h6>\\r\\n            <p>\\r\\n                A table begins with the <code>table</code> tag. Inside we create many rows using <code>tr</code> tag. Inside each row, the corresponding column entries are placed inside <code>td</code> tags. Table headings either in row or column are placed inside <code>th</code> tag.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"tableSpan\\">The <code>rowspan</code> and <code>colspan</code> Attributes</h6>\\r\\n            <p>\\r\\n                Cells can can be merged using <code>rowspan</code> and <code>colspan</code> attributes. Notice that these attributes belong to <code>th</code> and <code>td</code> elements.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <WebPractice htmlContent={htmlContent1} cssContent={\\"\\"} jsContent={\\"\\"} />\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6 id=\\"tableSection\\">Table Sections</h6>\\r\\n            <p>\\r\\n                Table sections are specified by tags <code>thead</code>, <code>tbody</code> and <code>tfoot</code>\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Exercise</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Create your timetable this semester. Instead of using name of courses, use representative images for each course.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Assignment</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Update your resume by including a table of courses you have done so far. The table should have three columns: Semester, Course Name, Course Description.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsKI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CAKA,eAAE,CACE,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OACZ,CACA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Tables", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContent = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <table>
            <caption>Basic Timetable</caption>
            <tr>
                <th></th>
                <th>8:45-9:45</th>
                <th>9:45-10:45</th>
                <th>11:00-12:00</th>
                <th>12:00-01:00</th>
                <th>01:45-03:45
            </tr>
            <tr>
                <th>Mon</th>
                <td></td>
                <td></td>
                <td>IT</td>
                <td></td>
            </tr>
            <tr>
                <th>Tue</th>
                <td>Lab B2</td>
                <td>Lab B2</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>Wed</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>Thu</th>
                <td></td>
                <td>IT</td>
                <td></td>
                <td></td>
                <td>Lab B1</td>
            </tr>
            <tr>
                <th>Fri</th>
                <td>IT</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </body> 
</html>`;
  let htmlContent1 = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <table>
            <caption>Basic Timetable</caption>
            <thead>
            <tr>
                <th></th>
                <th>8:45-9:45</th>
                <th>9:45-10:45</th>
                <th>11:00-12:00</th>
                <th>12:00-01:00</th>
                <th>01:45-02:45</th>
                <th>02:45-03:45</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Mon</th>
                <td></td>
                <td></td>
                <td>IT</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>Tue</th>
                <td style="background: red;color:white;" colspan="2">Lab B2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>Wed</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>Thu</th>
                <td></td>
                <td>IT</td>
                <td></td>
                <td></td>
                <td style="background: red;color:white;" colspan="2" colspan="2">Lab B1</td>
            </tr>
            <tr>
                <th>Fri</th>
                <td>IT</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-9jik69_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/tables"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-9jik69_END -->`, ""} <article class="svelte-jodgkw">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-jodgkw" data-svelte-h="svelte-1wtic7p">Tables</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-jodgkw" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-imayvc"><li class="svelte-jodgkw"><a href="#basicTable" class="svelte-jodgkw">Basic Table Tags</a></li> <li class="svelte-jodgkw"><a href="#tableSpan" class="svelte-jodgkw">The <code>rowspan</code> and <code>colspan</code> Attributes</a></li> <li class="svelte-jodgkw"><a href="#tableSection" class="svelte-jodgkw">Table Sections</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-jodgkw" data-svelte-h="svelte-1vg6yla">As the name suggests, a table is created using the <code>table</code> in HTML. There are many components to a <code>table</code> that we&#39;ll learn in this section.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="basicTable" class="svelte-jodgkw" data-svelte-h="svelte-1d05kz">Basic Table Tags</h6> <p class="svelte-jodgkw" data-svelte-h="svelte-1xmmvrc">A table begins with the <code>table</code> tag. Inside we create many rows using <code>tr</code> tag. Inside each row, the corresponding column entries are placed inside <code>td</code> tags. Table headings either in row or column are placed inside <code>th</code> tag.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="tableSpan" class="svelte-jodgkw" data-svelte-h="svelte-1d5x3sl">The <code>rowspan</code> and <code>colspan</code> Attributes</h6> <p class="svelte-jodgkw" data-svelte-h="svelte-y4ge7j">Cells can can be merged using <code>rowspan</code> and <code>colspan</code> attributes. Notice that these attributes belong to <code>th</code> and <code>td</code> elements.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContent1,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="tableSection" class="svelte-jodgkw" data-svelte-h="svelte-py2xed">Table Sections</h6> <p class="svelte-jodgkw" data-svelte-h="svelte-7dgmkw">Table sections are specified by tags <code>thead</code>, <code>tbody</code> and <code>tfoot</code></p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-jodgkw" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-jodgkw" data-svelte-h="svelte-ztkz9f">Create your timetable this semester. Instead of using name of courses, use representative images for each course.</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-jodgkw" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-jodgkw" data-svelte-h="svelte-t9iors">Update your resume by including a table of courses you have done so far. The table should have three columns: Semester, Course Name, Course Description.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CkejBKIY.js.map
