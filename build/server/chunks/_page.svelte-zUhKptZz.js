import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import './stores3-uhob_-DC.js';
import './client-_MkdHwD5.js';
import './ActionIcons-o14w9cnK.js';
import { c as currentPath } from './stores2-MGSbm_Vc.js';
import './index2-z1g76_ny.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';

const css = {
  code: ".vectorial.svelte-15gqg8n.svelte-15gqg8n{margin-top:1em;padding:0.5em;background:white;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}.vectorial.svelte-15gqg8n.svelte-15gqg8n:hover{box-shadow:0 0 0px #888}.vectorial.svelte-15gqg8n section.svelte-15gqg8n{display:flex;flex-direction:column;align-items:center;justify-content:center}section.svelte-15gqg8n a.svelte-15gqg8n{text-decoration:none;font-size:1em;margin-top:0;color:white;text-shadow:1px 2px 1px rgb(77, 77, 77);text-transform:uppercase;letter-spacing:1px;font-weight:400;background:rgb(0, 150, 200);padding:1em 2em;border-radius:10px;box-shadow:1px 2px 2px 0px #891010}.title.svelte-15gqg8n.svelte-15gqg8n{font-size:4em;margin-bottom:0;margin-top:1em;font-weight:600;display:flex;align-items:center;justify-content:center;text-shadow:9px 3px 5px rgba(81, 81, 81, 0.445);color:rgb(7 68 75)}.subtitle.svelte-15gqg8n.svelte-15gqg8n{font-size:1.5em;color:rgb(212, 163, 13);margin-top:0;margin-bottom:0em}figure.svelte-15gqg8n.svelte-15gqg8n{width:100%;margin:auto;display:flex;align-items:center;flex-direction:row;position:relative;z-index:0;justify-content:center}",
  map: null
};
const Vectorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="vectorial svelte-15gqg8n"><section style="z-index: 1" class="svelte-15gqg8n"><h1 class="title svelte-15gqg8n" data-svelte-h="svelte-ios0xa">Vectorial</h1> <p class="subtitle svelte-15gqg8n" data-svelte-h="svelte-zqvhef">Create Vector Graphics.</p> <p style="color:black;" data-svelte-h="svelte-o3stz8">in <strong>browser</strong>!</p> <a href="https://vectorial.app" class="svelte-15gqg8n" data-svelte-h="svelte-1bpwahp">Get Started</a> </section> <figure class="svelte-15gqg8n" data-svelte-h="svelte-ofykek">   <img src="/vectorial/vectorialhome.svg" width="95%" alt="vectorialhome"></figure></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Dr Mithilesh Kumar", $currentPath);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}  <div class="homepage">${validate_component(Vectorial, "Vectorial").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-zUhKptZz.js.map
