import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component, e as escape } from './ssr-GucKmJ_k.js';
import { g as githubDark$1, a as github$1, c as contents } from './content2-gUCYaF9m.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-eXV_tB0R.js';
import { C as Content } from './ActionIcons-f_fW2kvg.js';
import './NavList.svelte_svelte_type_style_lang-eEYqBDhP.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-_pKjQ3fI.js';
import './exports-mq_1S73-.js';
import './index2-yB1Itf2W.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk{margin:0.5em 0}h6.svelte-n59hwk{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-n59hwk{color:goldenrod;opacity:1}",
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
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-ekgb5r">Internet Protocol Addresses (IP)</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-zqilbw">The Internet Protocol (IP) address of a machine connected to the Internet is a unique 32-bit number, typically represented as four decimal numbers separated by dots (e.g., 192.168.1.1). Each number can range from 0 to 255.</p> <p class="example svelte-n59hwk" data-svelte-h="svelte-90w6mp">The IP address of google is 8.8.8.8</p> <p class="svelte-n59hwk">Total number of unique IP addresses that can be assigned is ${escape(`\\(2^{32} = 4294967296\\)`)} which is approximately 4.2 billion. Due to being 32 bits in size, IPv4 allows for approximately 4.3 billion unique addresses. With the growth of the internet and the increasing number of devices online, this has led to a shortage of available IPv4 addresses.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-n59hwk" data-svelte-h="svelte-zd61xi">Domain Names</h6> <p class="svelte-n59hwk" data-svelte-h="svelte-10uyu8o">Domain names are human-readable addresses used to access websites on the internet, serving as a memorable and intuitive alternative to numerical IP addresses. The Domain Name System (DNS) translates these domain names into IP addresses that computers use to locate and communicate with each other on the internet.</p> <h6 class="svelte-n59hwk" data-svelte-h="svelte-5ndpa4">Structure of Domain Names</h6> <ul data-svelte-h="svelte-186ca19"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Top-Level Domain (TLD)</strong>: The last segment of the domain name, located after the last dot. Examples include .com, .org, .net, and country-specific TLDs like .uk, .ca.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Second-Level Domain (SLD)</strong>: The part directly to the left of the TLD, considered the &quot;name&quot; of the website. For example, in example.com, &quot;example&quot; is the SLD.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Subdomain</strong>: Located to the left of the SLD, used to organize or navigate to different sections of a website. Common examples include www, blog.example.com, or shop.example.com.</li></ul> <h6 class="svelte-n59hwk" data-svelte-h="svelte-tglj69">Functions and Features</h6> <ul data-svelte-h="svelte-jrimmy"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">DNS (Domain Name System)</strong>: Translates domain names into IP addresses, functioning like a phone book for the internet.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Hierarchy and Delegation</strong>: The DNS is hierarchical, allowing for the domain name space to be divided and managed by different organizations and entities.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Registrars and Registries</strong>: Domain names are registered through registrars, accredited by ICANN or a national country code authority, interacting with registries that manage the TLDs.</li></ul> <h6 class="svelte-n59hwk" data-svelte-h="svelte-1v6o33r">Importance of Domain Names</h6> <ul data-svelte-h="svelte-koxbvn"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">Branding and Visibility</strong>: A domain name is a critical part of a brand&#39;s identity and online presence.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">SEO (Search Engine Optimization)</strong>: Having a relevant and memorable domain can impact search engine rankings and click-through rates.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Credibility and Professionalism</strong>: A custom domain name enhances the credibility and professionalism of a website.</li></ul> <h6 class="svelte-n59hwk" data-svelte-h="svelte-ej2grw">Technical Aspects</h6> <ul data-svelte-h="svelte-hmamro"><li class="svelte-n59hwk"><strong class="svelte-n59hwk">DNS Lookup</strong>: The process of finding the corresponding IP address for a domain name through querying DNS servers.</li> <li class="svelte-n59hwk"><strong class="svelte-n59hwk">Caching</strong>: DNS lookups are often cached by various components of the internet infrastructure to improve efficiency.</li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-xi7FTSmg.js.map
