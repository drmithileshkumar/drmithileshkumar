import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, b as contentNav, c as contents } from './content4-C6XjJHjM.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { W as WebPractice } from './WebPractice-ATPi3Fcc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-nZg0bqlC.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';
import './ContextFragment-h_zhkUzP.js';
import './CommonLabel-QaCL5f48.js';
import './Suffix-ybHP5eir.js';
import './Button-FylIdC7C.js';
import './Ripple-IoYaH5-z.js';
import '@codemirror/lang-javascript';
import '@codemirror/lang-xml';
import '@codemirror/lang-css';

const css = {
  code: "article.svelte-1m08utq{display:flex;flex-direction:column;gap:0.5em}p.svelte-1m08utq,li.svelte-1m08utq{opacity:0.8}h4.svelte-1m08utq{margin:0.5em 0}h6.svelte-1m08utq{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}a.svelte-1m08utq{text-decoration:none;cursor:pointer}.question.svelte-1m08utq{cursor:pointer;padding:0.3em}code{background-color:rgba(0, 100, 100, 0.1)}",
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
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Inside Head", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContentMeta = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">
    </head>   
    <body>
        <header>
            <!---contains navigation, headings, table of contents etc.--->
        </header>   
        <main>
            <p>Look at various usages of the <code>meta</code> element.
        </main>
    </body> 
</html>`;
  let htmlContentLink = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />       
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">

        <link rel="icon" type="image/png" href="">
        <link rel="manifest" crossorigin="use-credentials" href="">
        <link rel="stylesheet" href="">
    </head>   
    <body>   
        <main>
            <p>Set icon, manifest and fetch stylesheets using <code>link</code> element.</p>
        </main>
    </body> 
</html>`;
  let htmlContentScript = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">

        <link rel="icon" type="image/png" href="">
        <link rel="manifest" crossorigin="use-credentials" href="">
        <link rel="stylesheet" href="">

        <script src="" type="text/javascript" defer><\/script>
        <script>
            const sayHello = () => {
                console.log('Hello');
            }
        <\/script>
    </head>   
    <body>   
        <main>
            <p>There is <code>script</code> tag in <code>head</code> as well.</p>
        </main>
    </body> 
</html>
`;
  let htmlContentStyle = `<!DOCTYPE html>
<html lang = "en" >
    <head> 
        <title> Inside Head </title>
        <meta charset = "utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dr Mithilesh Kumar">
        <meta name="description" content="Course on internet technologies">
        <meta name="keywords" content="HTML, CSS, Javascript, XML, node.js">

        <link rel="icon" type="image/png" href="">
        <link rel="manifest" crossorigin="use-credentials" href="">
        <link rel="stylesheet" href="">

        <script src="" type="text/javascript" defer><\/script>
        <script>
            const sayHello = () => {
                console.log('Hello');
            }
        <\/script>

        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <article>
            <h1>How to layout your page?</h1>
            <p>In this article, we are going to learn how to layout an HTML page.</p>
        </article>
    </body>
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-pnupcm_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/head"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-pnupcm_END -->`, ""} <article class="svelte-1m08utq">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1m08utq" data-svelte-h="svelte-1o96b2c">Inside Head</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1m08utq" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-7qfqxy"><li class="svelte-1m08utq"><a href="#meta" class="svelte-1m08utq">The <code>meta</code> Element</a></li> <li class="svelte-1m08utq"><a href="#link" class="svelte-1m08utq">The <code>link</code> Element</a></li> <li class="svelte-1m08utq"><a href="#script" class="svelte-1m08utq">The <code>script</code> Element</a></li> <li class="svelte-1m08utq"><a href="#style" class="svelte-1m08utq">The <code>style</code> Element</a></li></ol>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-1m08utq" data-svelte-h="svelte-140w9fj">The <code>head</code> element is usually the first element inside the <code>html</code> element. It contains information for search engines, links to external resources, styles and javascript.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="meta" class="svelte-1m08utq" data-svelte-h="svelte-1r26eyc">The <code>meta</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-1ep8i96">The <code>meta</code> elements has multiple roles. It sets the character set of the page, description, keywords, author information and many other settings regarding webapp. Look at the example below.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentMeta,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="link" class="svelte-1m08utq" data-svelte-h="svelte-41ut2c">The <code>link</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-b6pxv6">The <code>link</code> element is used to load external resources like setting icon in the title, manifest file, stylesheets etc.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentLink,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="script" class="svelte-1m08utq" data-svelte-h="svelte-iyq1d8">The <code>script</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-yawpkr">The <code>script</code> element can be used to either load external javascript files or contain local javascript code. We&#39;ll learn about it later.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentScript,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="style" class="svelte-1m08utq" data-svelte-h="svelte-11vmc9i">The <code>style</code> Element</h6> <p class="svelte-1m08utq" data-svelte-h="svelte-18n7x4c">We have seen that external CSS can be loaded using <code>link</code> element. Local style code can be included inside the <code>style</code> element.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentStyle,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} <h4 class="svelte-1m08utq" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1m08utq" data-svelte-h="svelte-1d77n9f">Set title and icon for your resume and college page with appropriate meta descriptions and keywords.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-JsY5_E5e.js.map
