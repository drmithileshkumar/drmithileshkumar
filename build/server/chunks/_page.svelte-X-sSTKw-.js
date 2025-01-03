import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import { c as currentPath } from './stores2-B6DyWuAW.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './index2-BZnI6xu7.js';

const Terms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article data-svelte-h="svelte-k2i4c1"><h1 class="mdc-typography--headline4">Terms and Conditions</h1> <p>The domain name, vectorial.app, is owned under GST registration with
        business name eSpace, a sole proprietership, with main office at
        Derabassi, Punjab.</p> <p>Please read these Terms and Conditions (&quot;Terms&quot;) carefully before using
        the vectorial.app website and related services (the &quot;Services&quot;) operated by
        vectorial.app (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). Your access to and use of the
        Services is conditioned upon your acceptance of and compliance with
        these Terms. By accessing or using the Services, you agree to be bound
        by these Terms.</p> <h2 class="mdc-typography--headline6">1. Accounts</h2> <p>When you create an account with us, you must provide accurate and
        complete information. Failure to do so constitutes a breach of the
        Terms, which may result in immediate termination of your account on our
        Services.</p> <p>You are responsible for safeguarding the password that you use to access
        the Services and for any activities or actions under your password,
        whether your password is with our Services or a third-party service. You
        agree not to disclose your password to any third party. You must notify
        us immediately upon becoming aware of any breach of security or
        unauthorized use of your account.</p> <h2 class="mdc-typography--headline6">2. Intellectual Property</h2> <p>All content, including but not limited to text, images, videos, and
        software, provided on our Services is the property of vectorial.app or its
        content creators and is protected by international copyright laws. You
        are granted a limited license to access and use the Services for
        personal, non-commercial use. You may not reproduce, distribute, or
        create derivative works based on our content without express written
        permission from us.</p> <h2 class="mdc-typography--headline6">3. Course Enrollment and Access</h2> <p>By enrolling in a course on vectorial.app, you agree to pay the associated
        fees and abide by the course guidelines, prerequisites, and deadlines.
        You are granted access to the course content for the duration of the
        course, as specified on the course page. We reserve the right to revoke
        your access to the course at any time if you violate these Terms or fail
        to meet the course requirements.</p> <h2 class="mdc-typography--headline6">4. Code of Conduct</h2> <p>As a user of vectorial.app, you agree to:</p> <ul><li>Treat all users with respect and engage in constructive, meaningful
            interactions</li> <li>Comply with all applicable laws and regulations</li> <li>Not engage in any form of harassment, discrimination, or offensive
            behavior</li> <li>Not share copyrighted or proprietary material without permission</li> <li>Not use our Services for any illegal or unauthorized purpose</li> <li>Not interfere with the proper functioning of our Services or disrupt
            other users&#39; experience</li></ul> <p>Failure to comply with this Code of Conduct may result in the
        termination of your account and loss of access to our Services.</p> <h2 class="mdc-typography--headline6">5. Termination</h2> <p>We may terminate or suspend your account and access to our Services
        immediately, without prior notice or liability, for any reason
        whatsoever, including, without limitation, if you breach the Terms. Upon
        termination, your right to use the Services will cease immediately.</p> <h2 class="mdc-typography--headline6">6. Limitation of Liability</h2> <p>In no event shall vectorial.app, its affiliates, employees, or licensors be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, including without limitation, loss of profits, data, use,
        goodwill, or other intangible losses, resulting from (i) your access to
        or use of or inability to access or use the Services; (ii) any conduct
        or content of any third party on the Services; (iii) any content
        obtained from the Services; and (iv) unauthorized access, use, or
        alteration of your transmissions or content, whether based on warranty,
        contract, tort (including negligence), or any other legal theory,
        whether or not we have been informed of the possibility of such damage,
        and even if a remedy set forth herein is found to have failed its
        essential purpose.</p> <h2 class="mdc-typography--headline6">7. Disclaimer</h2> <p>Your use of the Services is at your sole risk. The Services are provided
        on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Services are provided
        without warranties of any kind, whether express or implied, including,
        but not limited to, implied warranties of merchantability, fitness for a
        particular purpose, non-infringement, or course of performance.</p> <p>vectorial.app does not warrant that a) the Services will function
        uninterrupted, secure, or available at any particular time or location;
        b) any errors or defects will be corrected; c) the Services are free of
        viruses or other harmful components; or d) the results of using the
        Services will meet your requirements.</p> <h2 class="mdc-typography--headline6">8. Indemnification</h2> <p>You agree to defend, indemnify, and hold harmless vectorial.app and its
        licensee and licensors, and their employees, contractors, agents,
        officers, and directors, from and against any and all claims, damages,
        obligations, losses, liabilities, costs or debt, and expenses (including
        but not limited to attorney&#39;s fees), resulting from or arising out of a)
        your use and access of the Services; b) a breach of these Terms; or c)
        any violation of applicable laws, rules, or regulations.</p> <h2 class="mdc-typography--headline6">9. Changes</h2> <p>We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. By continuing to access or use our Services after any
        revisions become effective, you agree to be bound by the revised Terms.
        If you do not agree to the new Terms, you are no longer authorized to
        use the Services.</p> <h2 class="mdc-typography--headline6">10. Governing Law</h2> <p>These Terms shall be governed and construed in accordance with the laws
        of [Country], without regard to its conflict of law provisions. Our
        failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. If any provision of these Terms is
        held to be invalid or unenforceable by a court, the remaining provisions
        of these Terms will remain in effect.</p> <h2 class="mdc-typography--headline6">11. Contact Us</h2> <p>If you have any questions about these Terms, please contact us at appvectorial@gmail.com.</p></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Terms and Conditions", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-6qgdoy_START -->${$$result.title = `<title>Terms and Conditions | Vectorial.app – Trusted Online SVG Editor</title>`, ""}<meta name="description" content="Our Terms and Conditions at Vectorial.app govern the use of our services. Understand your rights, responsibilities, and our commitment to maintaining a trusted environment."><meta name="keywords" content="Vectorial.app Terms and Conditions, Online SVG Editor, User Agreement, Service Terms, Responsible Usage"><link rel="canonical" href="https://www.drmithileshkumar.com/vectorial/legal/terms"><!-- HEAD_svelte-6qgdoy_END -->`, ""} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Terms, "Terms").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-X-sSTKw-.js.map
