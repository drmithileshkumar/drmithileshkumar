import { a as subscribe, d as set_store_value } from './utils-yAS0eczJ.js';
import { c as create_ssr_component, v as validate_component } from './ssr-APL1hDOv.js';
import { g as githubDark$1, a as github$1, c as contents } from './content3-AxNa0sBl.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-1SmK_YC9.js';
import { C as Content } from './ActionIcons-6VPbDzCy.js';
import './Subheader-L9gPGS9m.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-WCzcTCKR.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-0kAhHSI7.js';
import './index2-NBMbjtFx.js';

/* empty css                                                                   */
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
  set_store_value(currentPath, $currentPath = "Web Servers", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1nnm8jt_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/servers"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1nnm8jt_END -->`, ""} <article class="svelte-9tb2l5"><h2 class="svelte-9tb2l5" data-svelte-h="svelte-19kn8os">Web Servers</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `Web servers are programs that provide documents to requesting browsers. Very often, servers act only when requests are made from a client like a browser.`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-3fj3vq">Web Server Operation</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-17wmn0a">A small number of servers provide documents to a large number of clients.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-mlyu8i">A Web browser intitiates network communications with a server by sending it URL. A URL can specify one of two different things: the address of a data file stored on the server that is to be sent to the client, or a program stored on the server that the client wants executed and the output of the program returned to the client.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-9mbn9k">All the communications between a Web client and a Web server use the standard Web protocol, HTTP (or HTTPS).</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-4gasxm">When a Web server begins execution, it informs the operating system under which it is running that it is now ready to accept incoming network connections through a specific port on the machine. While in this running state, the server runs as a background process in the operating system environment. A Web client/browser</p> <ol data-svelte-h="svelte-1s1y9f4"><li class="svelte-9tb2l5">opens a network connection to a Web server,</li> <li class="svelte-9tb2l5">sends information requests and possibly data to the server,</li> <li class="svelte-9tb2l5">receives information from the server, and</li> <li class="svelte-9tb2l5">closes the connection.</li></ol> <p class="svelte-9tb2l5" data-svelte-h="svelte-e063ak">The primary task of a Web server is to monitor a communications port on its host machine, accept HTTP commands through that port, and perform the operations specified by those commands. All HTTP commands include a URL, which includes the specification of a host server machine. When the URL is received, it is translated into either a file name (in which case the file is returned to the requesting client) or a program name (in which case the program is run and its output is sent to the requesting client).</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1l37k1b">General Server Characteristics</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1kp39sf">The file structure of a Web server has two separate directories.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1hvmtgf"><strong class="svelte-9tb2l5">Document Root</strong>: The root of one of these directories is the document root. The file hierarchy that grows from the document root stores the Web documents to which the server has direct acces and normally serves to clients.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-272754"><strong class="svelte-9tb2l5">Server Root</strong>: The root of the other directory is the server root. This directory stores the server and its support software.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-p-uMsFXM.js.map
