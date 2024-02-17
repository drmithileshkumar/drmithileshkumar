import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../../chunks/content3.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
/* empty css                                                                   */
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-jodgkw{display:flex;flex-direction:column;gap:0.5em}p.svelte-jodgkw,li.svelte-jodgkw{opacity:0.8}h4.svelte-jodgkw{margin:0.5em 0}h6.svelte-jodgkw{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-jodgkw{text-decoration:none;cursor:pointer}.question.svelte-jodgkw{cursor:pointer;padding:0.3em}",
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
export {
  Page as default
};
