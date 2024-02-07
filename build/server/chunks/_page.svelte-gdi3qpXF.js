import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import { x as xml$1, H as Highlight$1, L as LineNumbers$1 } from './xml-sAGVYiZN.js';
import { g as githubDark$1, a as github$1, c as contents } from './content2-QWuJmEoD.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-2-6K5sqz.js';
import { C as Content } from './ActionIcons-xBhwPEnE.js';
import './NavList.svelte_svelte_type_style_lang-vGMjMlem.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-jdGSCfHN.js';
import './_commonjsHelpers-YxXKG0rd.js';
import './exports-mq_1S73-.js';
import './index2-2iq6SjbL.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h2.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Uniform Resource Locators", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-14279xu_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/url"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-14279xu_END -->`, ""} <article class="svelte-9tb2l5"><h2 class="svelte-9tb2l5" data-svelte-h="svelte-12a624t">Uniform Resource Locators</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-mhk4w8">Uniform (or universal) Resource Identifiers (URIs) are used to identify resources on the Internet. URIs are used for two different purposes:</p> <ol data-svelte-h="svelte-3dpziu"><li class="svelte-9tb2l5">To name a resource (For example, namespaces in XML)</li> <li class="svelte-9tb2l5">To provide a path to, or location of, a resource (Uniform Resource Locators (URL))</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1v0zpth">URL Formats</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-s2veyx">All URLs have the same general format:</p> ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `scheme:object-address`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-1x6uwyq">The <code>scheme</code> is often a communications protocol. Some examples are:</p> ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `http://drmithileshkumar.com/favicon.png
file://desktop/myfile.txt
ftp://sales@host/c:/forms/myfile.txt`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-17v6avh">The <strong class="svelte-9tb2l5">host name</strong> is the name of the server computer that stores the document. Messages to a host machine must be directed to the appropriate process running on the host for handling. Such processes are identified by their associated port numbers. The default port number of Web server processes is 80. For example:</p> ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `http://drmithileshkumar.com:1234/favicon.png`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}
            in case <code data-svelte-h="svelte-1dfot9i">drmithileshkumar.com</code> is configured to listen on port 1234.`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1cw8gs1">URL Paths</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-10idchy">The path to the document for the HTTP protocol is similar to a path to a file or directory in the file system of an operating system and is given by a sequence of directory names and a file name, all separated by \\ (on windows) or / (on unix).</p> ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `http://drmithileshkumar.com:1234/courses/internet/wwwhtml/foundamentals/url`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-cwgm5">The path in a URL can differ from a path to a file because a URL need not include all directories on the path.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1put1n0"><strong class="svelte-9tb2l5">Complete path</strong>: A path that includes all directories along the way is called a complete path.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-185k4ph"><strong class="svelte-9tb2l5">Partial paths</strong>: In most cases, the path to the document is relative to some base path that is specified in the configuration files of the server. Such paths are called partial paths. For example, if the server&#39;s configuration specifies that the root directory for files it can serve is <code>courses/internet</code>, the previous URL is specified as follows:</p> ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `http://drmithileshkumar.com:1234/wwwhtml/foundamentals/url`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-gdi3qpXF.js.map
