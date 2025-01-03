import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { g as githubDark, a as github } from './github-dark-BC3MHtr2.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import './Subheader-BV9F6O0P.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Dd7WnHpz.js';
import { c as contentNav, a as contents } from './content-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-xYGsVQiJ.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from '$lib/components/CourseNavigation.svelte'\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Web Servers\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/servers\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Web Servers\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            Web servers are programs that provide documents to requesting browsers. Very often, servers act only when requests are made from a client like a browser.\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Web Server Operation</h6>\\r\\n            <p>\\r\\n                A small number of servers provide documents to a large number of clients.\\r\\n            </p>\\r\\n            <p>\\r\\n                A Web browser intitiates network communications with a server by sending it URL. A URL can specify one of two different things: the address of a data file stored on the server that is to be sent to the client, or a program stored on the server that the client wants executed and the output of the program returned to the client.\\r\\n            </p>\\r\\n            <p>\\r\\n                All the communications between a Web client and a Web server use the standard Web protocol, HTTP (or HTTPS).\\r\\n            </p>\\r\\n            <p>\\r\\n                When a Web server begins execution, it informs the operating system under which it is running that it is now ready to accept incoming network connections through a specific port on the machine. While in this running state, the server runs as a background process in the operating system environment. A Web client/browser\\r\\n            </p>\\r\\n            <ol>\\r\\n                <li>opens a network connection to a Web server,</li>\\r\\n                <li>sends information requests and possibly data to the server,</li>\\r\\n                <li>receives information from the server, and</li>\\r\\n                <li>closes the connection.</li>\\r\\n            </ol>\\r\\n            <p>\\r\\n                The primary task of a Web server is to monitor a communications port on its host machine, accept HTTP commands through that port, and perform the operations specified by those commands. All HTTP commands include a URL, which includes the specification of a host server machine. When the URL is received, it is translated into either a file name (in which case the file is returned to the requesting client) or a program name (in which case the program is run and its output is sent to the requesting client).\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>General Server Characteristics</h6>\\r\\n            <p>\\r\\n                The file structure of a Web server has two separate directories.\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Document Root</strong>: The root of one of these directories is the document root. The file hierarchy that grows from the document root stores the Web documents to which the server has direct acces and normally serves to clients.\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Server Root</strong>: The root of the other directory is the server root. This directory stores the server and its support software.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  set_store_value(currentPath, $currentPath = "Web Servers", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1nnm8jt_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/servers"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1nnm8jt_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-1hh1l8c">Web Servers</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
//# sourceMappingURL=_page.svelte-C68ouC1q.js.map
