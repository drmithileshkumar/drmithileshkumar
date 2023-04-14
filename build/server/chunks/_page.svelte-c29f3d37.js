import { c as create_ssr_component, v as validate_component } from './index3-27cd0b89.js';
import './stores2-84db76e6.js';
import './index2-6ed83499.js';

const css$2 = {
  code: ".twitter.svelte-1uu1tax{display:flex;margin:1em 0;padding:1em 0;align-items:center;justify-content:center}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"twitter svelte-1uu1tax"}"><blockquote class="${"twitter-tweet"}"><p lang="${"zxx"}" dir="${"ltr"}"><a href="${"https://t.co/OuJAxIYnuV"}">pic.twitter.com/OuJAxIYnuV</a></p>— Dr Mithilesh Kumar (@DrMithileshKr) <a href="${"https://twitter.com/DrMithileshKr/status/1612815196262928386?ref_src=twsrc%5Etfw"}">January 10, 2023</a></blockquote></div>`;
});
const css$1 = {
  code: ".vectorial.svelte-h582m4.svelte-h582m4{margin-top:1em;padding:0.5em;width:100%;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}.vectorial.svelte-h582m4.svelte-h582m4:hover{box-shadow:0 0 0px #888}.vectorial.svelte-h582m4 section.svelte-h582m4{display:flex;flex-direction:column;align-items:center;justify-content:center}section.svelte-h582m4 a.svelte-h582m4{text-decoration:none;font-size:1em;margin-top:0;color:white;text-shadow:1px 2px 1px rgb(77, 77, 77);text-transform:uppercase;letter-spacing:1px;font-weight:400;background:rgb(0, 150, 200);padding:1em 2em;border-radius:10px;box-shadow:1px 2px 2px 0px #891010}.title.svelte-h582m4.svelte-h582m4{font-size:4em;margin-bottom:0;margin-top:1em;font-weight:600;display:flex;align-items:center;justify-content:center;text-shadow:9px 3px 5px rgba(81, 81, 81, 0.445);color:rgb(7 68 75)}.subtitle.svelte-h582m4.svelte-h582m4{font-size:1.5em;color:rgb(212, 163, 13);margin-top:0;margin-bottom:0em}figure.svelte-h582m4.svelte-h582m4{width:100%;margin:auto;display:flex;align-items:center;flex-direction:row;position:relative;z-index:0;justify-content:center}",
  map: null
};
const Vectorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="${"vectorial svelte-h582m4"}"><section style="${"z-index: 1"}" class="${"svelte-h582m4"}"><h1 class="${"title svelte-h582m4"}">Vectorial</h1>
            <p class="${"subtitle svelte-h582m4"}">Create Vector Graphics.
            </p>
            <p class="${"subsubtitle"}">in Browser!
            </p>
            <a href="${"https://vectorial.app"}" class="${"svelte-h582m4"}">Get Started</a>
            </section>
        <figure class="${"svelte-h582m4"}">
            
            
            <img src="${"/vectorial/vectorialhome.svg"}" width="${"95%"}" alt="${"vectorialhome"}"></figure></article>`;
});
const css = {
  code: ".homepage.svelte-r9j3h8{background:white}.courses.svelte-r9j3h8{display:flex;gap:1em;flex-wrap:wrap;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d6qc0s_START -->${$$result.title = `<title>Dr Mithilesh Kumar</title>`, ""}<!-- HEAD_svelte-d6qc0s_END -->`, ""}

<div class="${"homepage svelte-r9j3h8"}"><div class="${"courses svelte-r9j3h8"}"></div>
    
    ${validate_component(Vectorial, "Vectorial").$$render($$result, {}, {}, {})}
    
    ${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c29f3d37.js.map
