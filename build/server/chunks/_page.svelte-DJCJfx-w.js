import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { x as xml } from './xml-DVVcaHI4.js';
import { a as githubDark, g as github } from './github-dark-DeAsbMVW.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content2-ChhWH1Ps.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { H as Highlight, L as LineNumbers } from './LineNumbers-Cbvr0mA1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';
import './_commonjsHelpers-B85MJLTf.js';

const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Uniform Resource Locators\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/url\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Uniform Resource Locators\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Uniform (or universal) Resource Identifiers (URIs) are used to identify resources on the Internet. URIs are used for two different purposes:\\r\\n            </p>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    To name a resource (For example, namespaces in XML)\\r\\n                </li>\\r\\n                <li>\\r\\n                    To provide a path to, or location of, a resource (Uniform Resource Locators (URL))\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>URL Formats</h6>\\r\\n            <p>\\r\\n                All URLs have the same general format:\\r\\n            </p>\\r\\n            <Highlight language={xml} code={\`scheme:object-address\`} let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>\\r\\n                The <code>scheme</code> is often a communications protocol. Some examples are:\\r\\n            </p>\\r\\n            <Highlight \\r\\n            language={xml} \\r\\n            code={\`http://drmithileshkumar.com/favicon.png\\r\\nfile://desktop/myfile.txt\\r\\nftp://sales@host/c:/forms/myfile.txt\`} \\r\\n            let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>\\r\\n                The <strong>host name</strong> is the name of the server computer that stores the document. Messages to a host machine must be directed to the appropriate process running on the host for handling. Such processes are identified by their associated port numbers. The default port number of Web server processes is 80. For example:\\r\\n            </p>\\r\\n            <Highlight \\r\\n            language={xml} \\r\\n            code={\`http://drmithileshkumar.com:1234/favicon.png\`} \\r\\n            let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            in case <code>drmithileshkumar.com</code> is configured to listen on port 1234.\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>URL Paths</h6>\\r\\n            <p>\\r\\n                The path to the document for the HTTP protocol is similar to a path to a file or directory in the file system of an operating system and is given by a sequence of directory names and a file name, all separated by \\\\ (on windows) or / (on unix).\\r\\n            </p>\\r\\n            <Highlight \\r\\n            language={xml} \\r\\n            code={\`http://drmithileshkumar.com:1234/courses/internet/wwwhtml/foundamentals/url\`} \\r\\n            let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            <p>\\r\\n                The path in a URL can differ from a path to a file because a URL need not include all directories on the path.\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Complete path</strong>: A path that includes all directories along the way is called a complete path.\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Partial paths</strong>: In most cases, the path to the document is relative to some base path that is specified in the configuration files of the server. Such paths are called partial paths. For example, if the server's configuration specifies that the root directory for files it can serve is <code>courses/internet</code>, the previous URL is specified as follows: \\r\\n            </p>\\r\\n            <Highlight \\r\\n            language={xml} \\r\\n            code={\`http://drmithileshkumar.com:1234/wwwhtml/foundamentals/url\`} \\r\\n            let:highlighted>\\r\\n                <LineNumbers {highlighted} wrapLines/>\\r\\n            </Highlight>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  set_store_value(currentPath, $currentPath = "Uniform Resource Locators", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-14279xu_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/url"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-14279xu_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-1a3svyp">Uniform Resource Locators</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1v0zpth">URL Formats</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-s2veyx">All URLs have the same general format:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `scheme:object-address`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-1x6uwyq">The <code>scheme</code> is often a communications protocol. Some examples are:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `http://drmithileshkumar.com/favicon.png
file://desktop/myfile.txt
ftp://sales@host/c:/forms/myfile.txt`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-17v6avh">The <strong class="svelte-9tb2l5">host name</strong> is the name of the server computer that stores the document. Messages to a host machine must be directed to the appropriate process running on the host for handling. Such processes are identified by their associated port numbers. The default port number of Web server processes is 80. For example:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `http://drmithileshkumar.com:1234/favicon.png`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
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
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1cw8gs1">URL Paths</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-10idchy">The path to the document for the HTTP protocol is similar to a path to a file or directory in the file system of an operating system and is given by a sequence of directory names and a file name, all separated by \\ (on windows) or / (on unix).</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `http://drmithileshkumar.com:1234/courses/internet/wwwhtml/foundamentals/url`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-cwgm5">The path in a URL can differ from a path to a file because a URL need not include all directories on the path.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1put1n0"><strong class="svelte-9tb2l5">Complete path</strong>: A path that includes all directories along the way is called a complete path.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-185k4ph"><strong class="svelte-9tb2l5">Partial paths</strong>: In most cases, the path to the document is relative to some base path that is specified in the configuration files of the server. Such paths are called partial paths. For example, if the server&#39;s configuration specifies that the root directory for files it can serve is <code>courses/internet</code>, the previous URL is specified as follows:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `http://drmithileshkumar.com:1234/wwwhtml/foundamentals/url`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DJCJfx-w.js.map
