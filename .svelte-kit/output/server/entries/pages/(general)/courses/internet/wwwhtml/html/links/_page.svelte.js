import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contents } from "../../../../../../../../chunks/content3.js";
/* empty css                                                                */
import "../../../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores3.js";
/* empty css                                                                   */
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}a.svelte-9tb2l5{cursor:pointer}.question.svelte-9tb2l5{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Hypertext Links", $currentPath);
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
        <!-- External Link -->
        <p id="paragraph">
            <a href="https://mathril.com">Mathril</a> is a platform for practicing mathematics built by Dr Mithilesh Kumar.
        </p>
        <!--Internal Link -->
        <a href="#paragraph">Link to above paragraph</a>
    </body> 
</html>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1qzde0x_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/links"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1qzde0x_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-1dito7u">Hypertext Links</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-xst25n"><li class="svelte-9tb2l5"><a href="#link" class="svelte-9tb2l5">Links</a></li> <li class="svelte-9tb2l5"><a href="#target" class="svelte-9tb2l5">Targets within Documents</a></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-1whqgdb">Links are used to connect different resources.</p>`;
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
          return `<h6 id="link" class="svelte-9tb2l5" data-svelte-h="svelte-d3wap5">Links</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-12nhnig">A link points to a different resource via an address, usually URL or id. <code>a</code> tag (anchor) is used for linking documents. <code>a</code> tag has an attribute called <code>href</code> that takes the URL or id of the target.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="target" class="svelte-9tb2l5" data-svelte-h="svelte-2vfq9s">Targets within Documents</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-7vhal6">It is possible to automatically scroll to an element in your document using the <code>a</code>. The <code>href</code> attribute of the <code>a</code> tag is assigned the <code>id</code> of the target element in the format <code>#id</code>.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1cn3jae">If the target element is in another document, then the <code>#id</code> is attached at the end of the URL of the document.</p>`;
        }
      })}`;
    }
  })} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-hc8mgz">Assignment</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-9tb2l5" data-svelte-h="svelte-14vafk3">Place a link to your github repository inside your resume. Use github logo.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
