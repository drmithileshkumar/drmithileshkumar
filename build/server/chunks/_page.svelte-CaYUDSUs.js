import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr2-q3O0l93f.js';
import { F as FullPost } from './FullPost-2cRUkiev.js';
import { c as currentPath } from './stores2-B6DyWuAW.js';
import './Card-jWUNhZC7.js';
import './SmuiElement-DA9PKsv2.js';
import './ActionIcons-BJ7xikju.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Actions-BZCsUD0f.js';
import './IconButton-3ebkBHL3.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-Zq_D_mxy.js';
import './CommonLabel-BuPx8XxF.js';
import './Svg-BUOACmlE.js';
import './Subheader-BV9F6O0P.js';
import './Button-DRRmGjqZ.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';
import './stores3-BrNJmxTp.js';
import './Set-sNJQHEw8.js';
import './index2-BZnI6xu7.js';
import './ContextFragment-e-oupRQm.js';
import './ComposeComment.svelte_svelte_type_style_lang-d3eSne7Y.js';

let profile = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Post", $currentPath);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-ozsabe_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com/vectorial/post/$" + escape(data.post.url, true)}"><meta name="description" content="drmithileshkumar.com/vectorial"><!-- HEAD_svelte-ozsabe_END -->`, ""} ${validate_component(FullPost, "FullPost").$$render($$result, { post: data.post, profile }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CaYUDSUs.js.map
