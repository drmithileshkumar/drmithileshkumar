import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr2-CDgUAJs6.js';
import { F as FullPost } from './FullPost-B3QFdRl5.js';
import { c as currentPath } from './stores2-f06Es8-t.js';
import './Card-BZ_KNbGw.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './ActionIcons-Bx2zL88O.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './Actions-DlQ11USC.js';
import './IconButton-Bt4YIh4x.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './CommonLabel-CFEgn-mu.js';
import './Svg-Dkxrus40.js';
import './Subheader-DEm_inUP.js';
import './Button-DTp4JSRw.js';
import './client-CAo-6NMJ.js';
import './exports-DKuYoYKl.js';
import './stores3-kDd52ji6.js';
import './Set-DpFt5ER7.js';
import './index2-D2s-XE5r.js';
import './ContextFragment-CedcH2TL.js';
import './ComposeComment.svelte_svelte_type_style_lang-lP_mVojq.js';

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
//# sourceMappingURL=_page.svelte-DjlVqFcA.js.map
