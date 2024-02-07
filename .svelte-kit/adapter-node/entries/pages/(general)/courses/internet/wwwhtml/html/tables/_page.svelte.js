import { c as create_ssr_component, s as subscribe, m as set_store_value, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contents } from "../../../../../../../../chunks/content2.js";
/* empty css                                                                */
import "../../../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/NavList.svelte_svelte_type_style_lang.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores3.js";
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-9tb2l5{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
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
  return `${$$result.head += `<!-- HEAD_svelte-9jik69_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/tables"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-9jik69_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-1wtic7p">Tables</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-imayvc"><li class="svelte-9tb2l5"><a href="#basicTable" class="svelte-9tb2l5">Basic Table Tags</a></li> <li class="svelte-9tb2l5"><a href="#tableSpan" class="svelte-9tb2l5">The <code>rowspan</code> and <code>colspan</code> Attributes</a></li> <li class="svelte-9tb2l5"><a href="#tableSection" class="svelte-9tb2l5">Table Sections</a></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1vg6yla">As the name suggests, a table is created using the <code>table</code> in HTML. There are many components to a <code>table</code> that we&#39;ll learn in this section.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="basicTable" class="svelte-9tb2l5" data-svelte-h="svelte-1d05kz">Basic Table Tags</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1xmmvrc">A table begins with the <code>table</code> tag. Inside we create many rows using <code>tr</code> tag. Inside each row, the corresponding column entries are placed inside <code>td</code> tags. Table headings either in row or column are placed inside <code>th</code> tag.</p>`;
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
          return `<h6 id="tableSpan" class="svelte-9tb2l5" data-svelte-h="svelte-1d5x3sl">The <code>rowspan</code> and <code>colspan</code> Attributes</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-10gdojw">Cells can can be merged using <code>rowspan</code> and <code>colspan</code> attributes.</p>`;
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
          return `<h6 id="tableSection" class="svelte-9tb2l5" data-svelte-h="svelte-py2xed">Table Sections</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-7dgmkw">Table sections are specified by tags <code>thead</code>, <code>tbody</code> and <code>tfoot</code></p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
