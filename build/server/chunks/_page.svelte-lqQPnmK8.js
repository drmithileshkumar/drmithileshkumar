import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { c as currentPath } from './stores2-BRo56-4P.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './index2-D2s-XE5r.js';

const Privacy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article data-svelte-h="svelte-1ka5636"><h1 class="mdc-typography--headline4">Privacy Policy for Vectorial.app</h1> <p>Last updated: April 29, 2023</p> <p>At Vectorial.app, we deeply respect your privacy and are committed to
        its protection. Our privacy policy adheres strictly to the guidelines of
        data protection laws and regulations, including the General Data
        Protection Regulation (GDPR). This policy outlines the types of
        information we may collect from you or that you may provide when you
        visit our Website and our practices for collecting, using, maintaining,
        protecting, and disclosing that information.</p> <h2 class="mdc-typography--headline6">1. Information We Collect About You</h2> <p>We collect several types of information from and about users of our
        Website, specifically:</p> <ul><li>Personal data such as your name, email address, or any other
            identifier by which you may be contacted online or offline. This is
            the information you provide by filling in forms on our Website,
            including at the time of registering to use our Website, subscribing
            to our service, posting material, or requesting further services.</li></ul> <h2 class="mdc-typography--headline6">2. How We Use Your Information</h2> <p>We use information that we collect about you or that you provide to us,
        including any personal information:</p> <ul><li>To present our Website and its contents to you.</li> <li>To provide you with information, products, or services that you
            request from us.</li> <li>To carry out our obligations and enforce our rights arising from any
            contracts entered into between you and us, including for billing and
            collection.</li> <li>To notify you about changes to our Website or any products or
            services we offer or provide through it.</li></ul> <h2 class="mdc-typography--headline6">3. Disclosure of Your Information</h2> <p>We value your privacy immensely. We do not share, sell, or otherwise
        disclose your personal information for purposes other than those
        outlined in this Privacy Policy. We do not disclose your personal
        information to third parties, unless required by law or in the event of
        a business transfer.</p> <h2 class="mdc-typography--headline6">4. Data Security</h2> <p>We have implemented measures designed to secure your personal
        information from accidental loss and from unauthorized access, use,
        alteration, and disclosure. The safety and security of your information
        also depend on you. Where we have given you (or where you have chosen) a
        password for access to certain parts of our Website, you are responsible
        for keeping this password confidential.</p> <p>Despite our efforts, the transmission of information via the internet is
        not completely secure. Although we do our best to protect your personal
        information, we cannot guarantee the security of your personal
        information transmitted to our Website. Any transmission of personal
        information is at your own risk.</p> <h2 class="mdc-typography--headline6">5. Changes to Our Privacy Policy</h2> <p>It is our policy to post any changes we make to our privacy policy on
        this page. The date the privacy policy was last revised is identified at
        the top of the page. You are responsible for periodically visiting our
        Website and this privacy policy to check for any changes.</p> <p>Your continued use of the Vectorial.app website after any changes to
        this Privacy Policy constitutes your acceptance of such changes. If you
        do not agree with any changes, you must stop using the Vectorial.app
        website.</p> <p>If you have any questions about our privacy practices or this policy,
        please contact us.</p> <h2 class="mdc-typography--headline6">6. Contact Us</h2> <p>If you have any questions about this Privacy Policy, please contact us
        at appvectorial@gmail.com.</p></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Privacy Policy", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-19hb437_START -->${$$result.title = `<title>Privacy Policy | Vectorial.app – Secure &amp; Private Online SVG Editor</title>`, ""}<meta name="description" content="At Vectorial.app, your privacy is our priority. Our Privacy Policy outlines the data we collect and how it is used and protected. Learn more about our commitment to privacy protection."><meta name="keywords" content="Vectorial.app Privacy Policy, Online SVG Editor, Data Protection, User Privacy, Secure SVG Creation, GDPR Compliance"><link rel="canonical" href="https://www.drmithileshkumar.com/vectorial/legal/privacy"><!-- HEAD_svelte-19hb437_END -->`, ""} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Privacy, "Privacy").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-lqQPnmK8.js.map
