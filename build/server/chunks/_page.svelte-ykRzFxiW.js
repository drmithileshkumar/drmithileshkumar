import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contents } from './content3-AxNa0sBl.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-yqJRp7mD.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

/* empty css                                                                   */
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}.question.svelte-9tb2l5{cursor:pointer;padding:0.3em}",
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
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-1acbatb_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/intro"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1acbatb_END -->`, ""} <article class="svelte-9tb2l5"><h4 class="svelte-9tb2l5" data-svelte-h="svelte-1k7f4cq">The Internet</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zfzmcz">Origins</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-ea92g1">The Internet began in the 1960s with funding from the US Department of Defense (DoD). The purpose was to establish communication between computers so that programs can be shared and there can be remote access.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-pmxww7">What is the Internet?</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1bgpf5x">The Internet is a huge collection of devices (computers, mobiles, printers, smart devices) connected in a communications network. These devices communicate via a protocol called Transmission Control Protocol/Internet Protocol (TCP/IP).</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-14mrg1n">Rather than connecting every computer on the Internet directly to every other computer on the Internet, normally the individual computers in an organization are connected to each other in a local network. One node on this local network is physically connected to the Internet.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-ekgb5r">Internet Protocol Addresses (IP)</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-zqilbw">The Internet Protocol (IP) address of a machine connected to the Internet is a unique 32-bit number, typically represented as four decimal numbers separated by dots (e.g., 192.168.1.1). Each number can range from 0 to 255.</p> <p class="example svelte-9tb2l5" data-svelte-h="svelte-90w6mp">The IP address of google is 8.8.8.8</p> <p class="svelte-9tb2l5">Total number of unique IP addresses that can be assigned is ${escape(`\\(2^{32} = 4294967296\\)`)} which is approximately 4.3 billion. Due to being 32 bits in size, IPv4 allows for approximately 4.3 billion unique addresses. With the growth of the internet and the increasing number of devices online, this has led to a shortage of available IPv4 addresses.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-zd61xi">Domain Names</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-lgbe47">IP addresses have some drawbacks.</p> <ol data-svelte-h="svelte-15suy20"><li class="svelte-9tb2l5">They are hard to remember.</li> <li class="svelte-9tb2l5">IP address of a device can be changed by the internet service provider.</li></ol> <p class="svelte-9tb2l5" data-svelte-h="svelte-wnuzvs">Domain names are human-readable addresses used to access websites on the internet, serving as a memorable and intuitive alternative to numerical IP addresses. The Domain Name System (DNS) translates these domain names into IP addresses that computers use to locate and communicate with each other on the internet.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-ghxpqm">As we know <code>8.8.8.8</code> is reserved as IP address of <code>google.com</code>. But it is possible for Google to change its IP address to something else. Still the website <code>google.com</code> will continue to function (after appropriate configurations by Google).</p> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-qea4nl">Domain Name to IP address conversion</h6> <p class="question svelte-9tb2l5" data-svelte-h="svelte-1rcgjwt">How does <code>google.com</code> gets converted to <code>8.8.8.8</code>?</p> <div class="solution" data-svelte-h="svelte-h83w6f"><p class="svelte-9tb2l5">As we know computers can only <em>see</em> numbers. There must be some mechanism that converts the domain name to IP address. This mechanism is called <strong class="svelte-9tb2l5">DNS Lookup</strong>. The image below shows how does it work.</p> <img width="100%" src="/courses/internet/wwwhtml/fundamentals/intro/dns.png"> <ol><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Browser Cache Lookup:</strong> The browser checks its cache to see if the domain&#39;s IP address is already stored. If found, the DNS lookup process ends here.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">OS Cache Lookup:</strong> If the IP address is not in the browser cache, the operating system&#39;s DNS cache is checked next.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Router Cache Lookup:</strong> If the IP address is not found in the OS cache, the search moves to the router, which typically maintains its own DNS cache.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">ISP DNS Cache Lookup:</strong> If the router does not have the IP address cached, the request is forwarded to the Internet Service Provider&#39;s (ISP) DNS server.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Root Name Server Query:</strong> If the ISP&#39;s DNS server does not have the information, it queries a root name server, which responds with the address of a Top-Level Domain (TLD) server (e.g., .com, .net) that holds information for the domain&#39;s zone.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">TLD Server Query:</strong> The ISP&#39;s DNS server then queries the TLD server, which responds with the IP address of the domain&#39;s authoritative name server.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Authoritative Name Server Query:</strong> Finally, the ISP&#39;s DNS server queries the domain&#39;s authoritative name server, which responds with the IP address of the requested domain.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Caching the Response:</strong> The resolved IP address is sent back through the chain to the original requester. Each server along the path can cache the DNS record to speed up future requests.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Browser Receives IP Address:</strong> The browser receives the IP address for the domain and can now initiate a connection to the web server hosting the website.</li></ol></div> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-5ndpa4">Structure of Domain Names</h6> <ul data-svelte-h="svelte-186ca19"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Top-Level Domain (TLD)</strong>: The last segment of the domain name, located after the last dot. Examples include .com, .org, .net, and country-specific TLDs like .uk, .ca.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Second-Level Domain (SLD)</strong>: The part directly to the left of the TLD, considered the &quot;name&quot; of the website. For example, in example.com, &quot;example&quot; is the SLD.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Subdomain</strong>: Located to the left of the SLD, used to organize or navigate to different sections of a website. Common examples include www, blog.example.com, or shop.example.com.</li></ul> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-tglj69">Functions and Features</h6> <ul data-svelte-h="svelte-jrimmy"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">DNS (Domain Name System)</strong>: Translates domain names into IP addresses, functioning like a phone book for the internet.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Hierarchy and Delegation</strong>: The DNS is hierarchical, allowing for the domain name space to be divided and managed by different organizations and entities.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Registrars and Registries</strong>: Domain names are registered through registrars, accredited by ICANN or a national country code authority, interacting with registries that manage the TLDs.</li></ul> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-1v6o33r">Importance of Domain Names</h6> <ul data-svelte-h="svelte-koxbvn"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Branding and Visibility</strong>: A domain name is a critical part of a brand&#39;s identity and online presence.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">SEO (Search Engine Optimization)</strong>: Having a relevant and memorable domain can impact search engine rankings and click-through rates.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Credibility and Professionalism</strong>: A custom domain name enhances the credibility and professionalism of a website.</li></ul> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-ej2grw">Technical Aspects</h6> <ul data-svelte-h="svelte-hmamro"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">DNS Lookup</strong>: The process of finding the corresponding IP address for a domain name through querying DNS servers.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Caching</strong>: DNS lookups are often cached by various components of the internet infrastructure to improve efficiency.</li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ykRzFxiW.js.map
