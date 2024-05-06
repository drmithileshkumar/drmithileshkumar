import { a as subscribe } from './utils-DH7689cv.js';
import { c as create_ssr_component, e as escape } from './ssr-Cv_bEuJL.js';
import { p as page } from './stores-CD1QeJjc.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-DlPfwgpd.js.map
