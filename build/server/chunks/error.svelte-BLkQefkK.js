import { a as subscribe } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape } from './ssr2-q3O0l93f.js';
import { p as page } from './stores3-BrNJmxTp.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-BLkQefkK.js.map
