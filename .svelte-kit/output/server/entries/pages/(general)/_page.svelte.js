import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/stores2.js";
/* empty css                                                      *//* empty css                                                     */import "../../../chunks/ActionIcons.js";
const Notes_svelte_svelte_type_style_lang = "";
const Twitter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".twitter.svelte-1uu1tax{display:flex;margin:1em 0;padding:1em 0;align-items:center;justify-content:center}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="twitter svelte-1uu1tax"><blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/OuJAxIYnuV">pic.twitter.com/OuJAxIYnuV</a></p>— Dr Mithilesh Kumar (@DrMithileshKr) <a href="https://twitter.com/DrMithileshKr/status/1612815196262928386?ref_src=twsrc%5Etfw">January 10, 2023</a></blockquote></div>`;
});
const Youtube_svelte_svelte_type_style_lang = "";
const Vectorial_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".vectorial.svelte-190zn03.svelte-190zn03{margin-top:1em;padding:0.5em;width:100%;background:rgb(0, 254, 13);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}.vectorial.svelte-190zn03.svelte-190zn03:hover{box-shadow:0 0 0px #888}.vectorial.svelte-190zn03 section.svelte-190zn03{display:flex;flex-direction:column;align-items:center;justify-content:center}section.svelte-190zn03 a.svelte-190zn03{text-decoration:none;font-size:1em;margin-top:0;color:white;text-shadow:1px 2px 1px rgb(77, 77, 77);text-transform:uppercase;letter-spacing:1px;font-weight:400;background:rgb(0, 150, 200);padding:1em 2em;border-radius:10px;box-shadow:1px 2px 2px 0px #891010}.title.svelte-190zn03.svelte-190zn03{font-size:4em;margin-bottom:0;margin-top:1em;font-weight:600;display:flex;align-items:center;justify-content:center;text-shadow:9px 3px 5px rgba(81, 81, 81, 0.445);color:rgb(7 68 75)}.subtitle.svelte-190zn03.svelte-190zn03{font-size:1.5em;color:rgb(212, 163, 13);margin-top:0;margin-bottom:0em}figure.svelte-190zn03.svelte-190zn03{width:100%;margin:auto;display:flex;align-items:center;flex-direction:row;position:relative;z-index:0;justify-content:center}",
  map: null
};
const Vectorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="vectorial svelte-190zn03"><section style="z-index: 1" class="svelte-190zn03"><h1 class="title svelte-190zn03">Vectorial</h1>
            <p class="subtitle svelte-190zn03">Create Vector Graphics.
            </p>
            <p style="color:black;">in <strong>browser</strong>!
            </p>
            <a href="https://vectorial.app" class="svelte-190zn03">Get Started</a>
            </section>
        <figure class="svelte-190zn03">
            
            
            <img src="/vectorial/vectorialhome.svg" width="95%" alt="vectorialhome"></figure></article>`;
});
const Trigonometry_svelte_svelte_type_style_lang = "";
const HTML_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".courses.svelte-1ctnaem{display:flex;gap:1em;flex-wrap:wrap;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}

<div class="homepage"><div class="courses svelte-1ctnaem"></div>
    
    ${validate_component(Vectorial, "Vectorial").$$render($$result, {}, {}, {})}
    
    ${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
