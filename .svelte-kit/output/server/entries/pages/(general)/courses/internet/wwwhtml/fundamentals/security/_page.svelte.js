import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../../chunks/content4.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
/* empty css                                                                   */
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
  map: null
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
  set_store_value(currentPath, $currentPath = "Security", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-p1w4at_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/security"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-p1w4at_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-7eoubs">Security</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1dac2f0">RSA</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1us96w7">The RSA algorithm is a widely used public-key cryptosystem that facilitates secure data transmission. Named after its inventors, Ron Rivest, Adi Shamir, and Leonard Adleman, RSA was introduced in 1977 and remains one of the most respected and commonly implemented methods for encryption and digital signatures.</p> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-qzm8tu">How RSA Works:</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1ohp5hp">RSA operates on the principle of using two keys: a public key, which is shared openly, and a private key, which is kept secret. These keys are generated from a pair of large prime numbers along with a derivative value. The algorithm&#39;s security relies on the computational difficulty of factoring the product of these two large prime numbers, a problem known as prime factorization.</p> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-1i3wgq5">Key Steps in RSA:</h6> <ol><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5" data-svelte-h="svelte-j9pef7">Key Generation</strong>:
                    <ul><li class="svelte-9tb2l5">Select two large prime numbers, ${escape(`\\(p\\)`)} and ${escape(`\\(q\\)`)}.</li> <li class="svelte-9tb2l5">Compute ${escape(`\\(n = pq\\)`)}, which will be used as the modulus for both keys.</li> <li class="svelte-9tb2l5">Calculate the Euler&#39;s totient function, ${escape(`\\(\\phi(n) = (p-1)(q-1)\\)`)}.</li> <li class="svelte-9tb2l5">Choose an integer ${escape(`\\(e\\)`)} such that ${escape(`\\(1 < e < \\phi(n)\\)`)}, and ${escape(`\\(e\\)`)} is co-prime to ${escape(`\\(\\phi(n)\\)`)}; ${escape(`\\(e\\)`)} becomes the public exponent.</li> <li class="svelte-9tb2l5">Determine ${escape(`\\(d\\)`)} as the modular multiplicative inverse of ${escape(`\\(e\\)`)} modulo ${escape(`\\(\\phi(n)\\)`)}; ${escape(`\\(d\\)`)} is the private exponent.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5" data-svelte-h="svelte-sv15t9">Encryption</strong>:
                    <ul><li class="svelte-9tb2l5">Given a plaintext message ${escape(`\\(M\\)`)}, it is converted into an integer ${escape(`\\(m\\)`)} (such that ${escape(`\\(0 \\leq m < n\\)`)}) using a reversible protocol known as padding.</li> <li class="svelte-9tb2l5">The ciphertext ${escape(`\\(c\\)`)} is then computed as ${escape(`\\(c = m^e \\mod n\\)`)}.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5" data-svelte-h="svelte-1uts3vp">Decryption</strong>:
                    <ul><li class="svelte-9tb2l5">The original message is recovered by computing ${escape(`\\(m = c^d \\mod n\\)`)}.</li> <li class="svelte-9tb2l5">The plaintext message ${escape(`\\(M\\)`)} is then obtained from the integer ${escape(`\\(m\\)`)} using the reverse padding protocol.</li></ul></li></ol> <h6 class="svelte-9tb2l5" data-svelte-h="svelte-1858ke0">Security and Usage:</h6> <p class="svelte-9tb2l5">The RSA algorithm&#39;s security hinges on the difficulty of factoring the large composite number ${escape(`\\(n\\)`)} into its prime factors, ${escape(`\\(p\\)`)} and ${escape(`\\(q\\)`)}, a task that is currently unfeasible for sufficiently large primes with today&#39;s computing power. RSA is used in various applications, including SSL/TLS for secure web browsing, digital signatures for document verification, and secure key exchange mechanisms.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1scfigk">Despite the emergence of new encryption methods and the potential threat from quantum computing, RSA remains a cornerstone of public-key cryptography due to its robustness and widespread support across numerous platforms and technologies.</p>`;
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
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1cz7aa9">Viruses</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-iehqu2">Viruses are programs that often arrive in a system in attachments to electronic mail messages or attached to free downloaded programs. Then they attach to other programs. When executed, they replicate and can overwrite memory and attached memory devices, destroying programs and data alike.</p> <ul data-svelte-h="svelte-1wvwvk0"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">ILOVEYOU</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2000</li> <li class="svelte-9tb2l5"><em>Description:</em> Also known as &quot;Love Letter,&quot; this virus spread via email with a subject line &quot;ILOVEYOU&quot; and an attachment that appeared to be a text file. Once executed, it overwrote files, spread itself through email, and made unauthorized changes to the user&#39;s system.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Code Red</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2001</li> <li class="svelte-9tb2l5"><em>Description:</em> Code Red targeted computers running Microsoft&#39;s IIS web server. It exploited a buffer overflow vulnerability to execute itself, deface websites, and propagate to other systems. At its peak, it infected millions of servers worldwide.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Melissa</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 1999</li> <li class="svelte-9tb2l5"><em>Description:</em> Melissa began as an infected Word document attached to an email. When opened, it propagated itself by sending emails to the top 50 contacts in the user’s Microsoft Outlook address book, causing significant disruption to personal and corporate email systems.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Conficker</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2008</li> <li class="svelte-9tb2l5"><em>Description:</em> Also known as Downup or Downadup, Conficker is a worm that exploited vulnerabilities in Windows OS to infect computers. It could spread via the Internet, removable drives, and local networks. It blocked access to security websites and downloaded additional malware.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Flashback</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2011</li> <li class="svelte-9tb2l5"><em>Description:</em> Initially, Flashback masqueraded as a Flash Player installer for Mac OS X but later exploited Java vulnerabilities to install itself without user interaction. It was one of the largest virus infections affecting Macs, designed to steal personal information.</li></ul></li></ul> <p class="svelte-9tb2l5" data-svelte-h="svelte-1vsgxgv">To protect against web-based viruses, it is essential to keep software, browsers, and operating systems updated, use reputable antivirus solutions, exercise caution with downloads and email attachments, enable a firewall, and regularly back up data.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-nciaeu">Worms</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-9fmr6s">Worms damage memory, like viruses, but spread on their own, rather than being attached to other files. Perhaps the most famous worm so far has been the Blaster worm, spawned in 2003.</p> <ol data-svelte-h="svelte-18mbdz"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">SQL Slammer/Sapphire Worm</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2003</li> <li class="svelte-9tb2l5"><em>Description:</em> This worm targeted vulnerabilities in Microsoft SQL Server and MSDE, causing widespread denial of service on some internet hosts. It spread rapidly by generating random IP addresses and sending itself to those addresses, significantly slowing down internet traffic.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Mydoom Worm</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2004</li> <li class="svelte-9tb2l5"><em>Description:</em> Primarily spread through email, Mydoom also had a component that allowed it to propagate via the Kazaa file-sharing network. It is noteworthy for its attack on the SCO Group&#39;s website, launching a DDoS attack by instructing infected machines to connect to the site simultaneously.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Santy Worm</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2004</li> <li class="svelte-9tb2l5"><em>Description:</em> Santy, also known as PHPinclude.worm, exploited a vulnerability in PHP scripts used by bulletin board systems to spread itself. It searched Google for vulnerable forums and then used them to propagate, defacing websites in the process.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">JS/Spacehero Worm</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2005</li> <li class="svelte-9tb2l5"><em>Description:</em> This worm spread through social networking sites by exploiting cross-site scripting (XSS) vulnerabilities. It propagated itself by adding links to the user&#39;s webpage or profile, which, when clicked by others, continued the spread of the worm.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Samy (XSS Worm)</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2005</li> <li class="svelte-9tb2l5"><em>Description:</em> This worm spread on the MySpace social networking site by exploiting XSS vulnerabilities. It was one of the first worms to spread through a social networking site, adding over a million friends to the creator&#39;s MySpace account within just 20 hours.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Storm Worm</strong> <ul><li class="svelte-9tb2l5"><em>Year:</em> 2007</li> <li class="svelte-9tb2l5"><em>Description:</em> Initially spread via email messages with sensational news subjects, the Storm Worm was a Trojan horse program that later allowed infected computers to be controlled remotely. It created a botnet used for various malicious activities, including sending more spam emails to spread further.</li></ul></li></ol>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
