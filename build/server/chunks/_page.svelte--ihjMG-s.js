import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import { g as githubDark$1, a as github$1, c as contents } from './content2-gUCYaF9m.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-2-6K5sqz.js';
import { C as Content } from './ActionIcons-xBhwPEnE.js';
import { N as NavList } from './NavList-pVarkYfb.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-jdGSCfHN.js';
import './exports-mq_1S73-.js';
import './NavList.svelte_svelte_type_style_lang-vGMjMlem.js';
import './index2-2iq6SjbL.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5,h5.svelte-9tb2l5{margin:0.5em 0}h5.svelte-9tb2l5{font-size:1.1em}",
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
  set_store_value(currentPath, $currentPath = "Fundamentals of WWW, HTML and XHTML", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-775k1p_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-775k1p_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-wpvcrh">Fundamentals of WWW, HTML and XHTML</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-9tb2l5" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
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
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-r0b5ev">The World Wide Web (www) is a system of softwares used to transmit and receive information using the set of hardware called the Internet. The information is in the form of a string of 0s and 1s. Specific softwares are used to interpret and convert these strings into human readable format like text, image, audio, video etc.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1czazwr">In this module, we&#39;ll go through a brief overview of the Internet and the World Wide Web. We&#39;ll have a glimpse of the client-server model of communication between the computers that are on the Internet. We&#39;ll see how browsers use HTTP to send request to a server that listens and responds to the request. We&#39;ll learn about the security issues in this communication process.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1vgusaf">After understanding the model of communication, we&#39;ll go deep into web page design only using HTML/XHTML. We&#39;ll learn many HTML elements and their limitations that are solved via using XHTML.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--ihjMG-s.js.map
