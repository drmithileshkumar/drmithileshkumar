import { c as create_ssr_component, b as subscribe, q as set_store_value, v as validate_component } from './ssr-QYhyCQFk.js';
import { g as githubDark$1, a as github$1, c as contents } from './content2-gUCYaF9m.js';
import './client-_MkdHwD5.js';
import { C as Card } from './Card-2-6K5sqz.js';
import { C as Content } from './ActionIcons-xBhwPEnE.js';
import './NavList.svelte_svelte_type_style_lang-vGMjMlem.js';
import { d as darkMode, c as currentPath, n as navList } from './stores3-jdGSCfHN.js';
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
  set_store_value(currentPath, $currentPath = "Security", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-p1w4at_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/security"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-p1w4at_END -->`, ""} <article class="svelte-9tb2l5"><h2 class="svelte-9tb2l5" data-svelte-h="svelte-1ki0210">Security</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-tzjur8">Security</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1aixqy8">The Internet and Web pose significant security challenges, with vulnerabilities present at both the server and browser levels. Web servers can be accessed by anyone with an Internet connection, allowing for the execution of software and potential access to data and databases. Similarly, browsers can download and execute server-provided software, which may access unauthorized areas of the host machine. This situation is likened to letting strangers into a house with the challenge of preventing them from leaving, taking, or altering anything. The complexity and size of modern web servers and browsers amplify these security risks, making it increasingly difficult to safeguard against breaches. Consequently, security represents a major concern in the development and operation of Web applications.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-167rbl3">Secure Communication</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-wvj5h9">One aspect of Web security is the matter of getting one&#39;s data from the browser to the server and having the server deliver data back to the browser without anyone or any device intercepting or corrupting those data along the way.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-nwrgcr">One aspect of Web security is the matter of getting one&#39;s data from the browser to the server and having the server deliver data back to the browser without anyone or any device intercepting or corrupting those data along the way. Consider a simple case of transmitting a credit card number to a company from which a purchase is being made. The security issues for this transaction are as follows:</p> <ol data-svelte-h="svelte-ijt4a9"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Privacy</strong>: It must not be possible for the credit card number to be stolen on its way to the company&#39;s server.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Integrity</strong>: It must not be possible for the credit card number to be modified on its way to the company&#39;s server.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Authentication</strong>: It must be possible for both the purchaser and the seller to be certain of each other&#39;s identity.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Nonrepudiation</strong>: It must be possible to prove legally that the message was actually sent and received.</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-h2p2vj">Encryption</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1j49iw6">Encryption is the fundamental technology underpinning data privacy and integrity, transforming data into a format that unauthorized parties cannot easily decipher. Historically, encryption required the same key for both encrypting and decrypting data, posing challenges in key transmission. This changed in 1976 with the advent of public-key encryption by Whitfield Diffie and Martin Hellman, introducing a system that uses a pair of keys—one public and one private—for secure communication. In this system, the public key is used to encrypt messages sent to the holder of the private key, who alone can decrypt these messages. This method ensures the private key does not need to be transmitted, maintaining security since it is computationally infeasible to derive the private key from the public key. The RSA algorithm, developed in 1977 by MIT professors Ron Rivest, Adi Shamir, and Leonard Adleman, is the most widely adopted public-key encryption method, particularly in e-commerce among large companies.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-wk2ukb">Denial of Service</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1dzk70g">Denial of Service (DoS) attacks can be created simply by flooding a Web server with requests, overwhelming its ability to operate effectively. Most DoS attacks are conducted with the use of networks of virally infected zombie computers, whose owners are unaware of their sinister use.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1cz7aa9">Viruses</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-iehqu2">Viruses are programs that often arrive in a system in attachments to electronic mail messages or attached to free downloaded programs. Then they attach to other programs. When executed, they replicate and can overwrite memory and attached memory devices, destroying programs and data alike.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-nciaeu">Worms</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-9fmr6s">Worms damage memory, like viruses, but spread on their own, rather than being attached to other files. Perhaps the most famous worm so far has been the Blaster worm, spawned in 2003.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-XvrtE0TE.js.map
