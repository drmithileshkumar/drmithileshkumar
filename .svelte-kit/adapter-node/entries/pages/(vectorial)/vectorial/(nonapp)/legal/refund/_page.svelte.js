import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { c as currentPath } from "../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
let title = "Refund Policy | Mathril";
let description = "Read the refund policy for Mathril, an online mathematics practice platform. Learn about our subscription services and the conditions for refunds.";
let keywords = "Mathril, refund policy, subscription, practice material, online math practice";
let canonical = "https://www.mathril.com/legal/refund";
const Refund = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Refund policy", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-7s9pd3_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><link rel="canonical"${add_attribute("href", canonical, 0)}><!-- HEAD_svelte-7s9pd3_END -->`, ""} <main class="mdc-typography--body2" data-svelte-h="svelte-9r64g0"><h1 class="mdc-typography--headline4">Refund Policy</h1> <p>Last updated: 5 May 2023</p> <p>At Mathril, we strive to provide a valuable and satisfactory experience to our users. Our refund policy outlines the conditions under which refunds may be granted for subscription services. Please read this policy carefully before making any purchase.</p> <h2 class="mdc-typography--headline6">Subscription Services</h2> <p>Mathril offers subscription services to access premium practice materials and features on our website. By purchasing a subscription, you agree to the terms of the subscription plan, including the billing cycle, fees, and any other terms specified during the purchase process.</p> <h2 class="mdc-typography--headline6">Refund Conditions</h2> <p>We provide refunds for subscription services under the following conditions:</p> <ul><li><strong>Within 7 days of purchase:</strong> If you are not satisfied with our subscription services, you may request a full refund within 7 days of the purchase date. To request a refund, please contact our support team at support@mathril.com with your order details and the reason for the refund request.</li> <li><strong>Technical issues:</strong> If you experience technical issues that prevent you from accessing or using our subscription services, we will first attempt to resolve the issue. If we are unable to resolve the issue within a reasonable time, we may offer a partial or full refund at our discretion. Refund eligibility will be determined on a case-by-case basis.</li></ul> <p>Please note that refunds are not available for any other reasons or after the specified timeframes above.</p> <h2 class="mdc-typography--headline6">Refund Process</h2> <p>Once your refund request is received and reviewed, we will notify you of the approval or rejection of your refund. If your refund is approved, it will be processed, and a credit will be applied to your original method of payment within a certain number of days, depending on your payment provider&#39;s policies.</p> <h2 class="mdc-typography--headline6">Contact Us</h2> <p>If you have any questions or concerns about our Refund Policy, please contact us at support@mathril.com.</p></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Refund Policy", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-15cl1lc_START -->${$$result.title = `<title>Refund Policy | Vectorial.app – Fair Refunds for Online SVG Editor</title>`, ""}<meta name="description" content="Our Refund Policy at Vectorial.app ensures a fair process for refunds. Discover how we handle refunds and our commitment to customer satisfaction."><meta name="keywords" content="Vectorial.app Refund Policy, Online SVG Editor, Fair Refunds, Customer Satisfaction, Money-Back Guarantee"><link rel="canonical" href="https://www.drmithileshkumar.com/vectorial/legal/refund"><!-- HEAD_svelte-15cl1lc_END -->`, ""} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Refund, "Refund").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
