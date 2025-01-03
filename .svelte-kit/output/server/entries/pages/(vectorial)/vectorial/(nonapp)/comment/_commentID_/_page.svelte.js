import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { F as FullPost } from "../../../../../../../chunks/FullPost.js";
import { c as currentPath } from "../../../../../../../chunks/stores2.js";
let profile = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Post", $currentPath);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-1w7alls_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<link rel="canonical" href="${"https://drmithileshkumar.com/vectorial/post/$" + escape(data.post.postID, true)}"><meta name="description" content="drmithileshkumar.com/vectorial"><!-- HEAD_svelte-1w7alls_END -->`, ""} ${validate_component(FullPost, "FullPost").$$render($$result, { post: data.post, profile }, {}, {})}`;
});
export {
  Page as default
};
