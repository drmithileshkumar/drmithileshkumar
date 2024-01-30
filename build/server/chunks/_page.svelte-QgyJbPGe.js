import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-GucKmJ_k.js';
import { g as githubDark$1, a as github$1, c as contents } from './content2-gUCYaF9m.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-eXV_tB0R.js';
import { C as Content } from './ActionIcons-f_fW2kvg.js';
import './NavList.svelte_svelte_type_style_lang-eEYqBDhP.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-_pKjQ3fI.js';
import './exports-mq_1S73-.js';
import './index2-yB1Itf2W.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
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
  set_store_value(currentPath, $currentPath = "The Internet", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1acbatb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/intro"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1acbatb_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-h30wh6">The Internet</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-zfzmcz">Origins</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-ea92g1">The Internet began in the 1960s with funding from the US Department of Defense (DoD). The purpose was to establish communication between computers so that programs can be shared and there can be remote access.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-pmxww7">What is the Internet?</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-1bgpf5x">The Internet is a huge collection of devices (computers, mobiles, printers, smart devices) connected in a communications network. These devices communicate via a protocol called Transmission Control Protocol/Internet Protocol (TCP/IP).</p> <p class="svelte-n59hwk" data-svelte-h="svelte-14mrg1n">Rather than connecting every computer on the Internet directly to every other computer on the Internet, normally the individual computers in an organization are connected to each other in a local network. One node on this local network is physically connected to the Internet.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-ekgb5r">Internet Protocol Addresses (IP)</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-tmcm7k"></p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-zd61xi">Domain Names</h6>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-QgyJbPGe.js.map
