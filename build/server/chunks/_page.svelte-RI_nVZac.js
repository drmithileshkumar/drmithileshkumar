import { a as subscribe } from './utils-DhkojCd_.js';
import { c as create_ssr_component, e as escape, i as each, v as validate_component, a as add_attribute } from './ssr2-CDgUAJs6.js';
import { B as BBOX, m as defs, e as elements } from './stores6-tAd4Vci7.js';
import { P as PreviewTextMask, a as PreviewBlur, b as PreviewShadow, c as PreviewSpecularLighting, d as PreviewDiffuseLighting, e as PreviewMarker, f as PreviewGroup } from './PreviewTextMask-DIAOq3Yc.js';
import './index2-D2s-XE5r.js';
import './PreviewGrid-B5EdeRRp.js';
import 'mathjs';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_BBOX;
  let $defs, $$unsubscribe_defs;
  let $elements, $$unsubscribe_elements;
  $$unsubscribe_BBOX = subscribe(BBOX, (value) => value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  let x = 0, y = 0, width = 1e3, height = 1e3;
  $$unsubscribe_BBOX();
  $$unsubscribe_defs();
  $$unsubscribe_elements();
  return `<svg width="100%" height="100%" viewBox="${escape(x, true) + " " + escape(y, true) + " " + escape(width, true) + " " + escape(height, true)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>${each(Object.keys($defs), (def) => {
    return `${$defs[def].tag === "textMask" ? `${validate_component(PreviewTextMask, "PreviewTextMask").$$render(
      $$result,
      {
        textMask: $defs[def],
        elements: $elements
      },
      {},
      {}
    )}` : ``} ${$defs[def].tag === "blur" ? `${validate_component(PreviewBlur, "PreviewBlur").$$render($$result, { blur: $defs[def] }, {}, {})}` : ``} ${$defs[def].tag === "shadow" ? `${validate_component(PreviewShadow, "PreviewShadow").$$render($$result, { shadow: $defs[def] }, {}, {})}` : ``} ${$defs[def].tag === "specularLighting" ? `${validate_component(PreviewSpecularLighting, "PreviewSpecularLighting").$$render($$result, { specularLighting: $defs[def] }, {}, {})}` : ``} ${$defs[def].tag === "diffuseLighting" ? `${validate_component(PreviewDiffuseLighting, "PreviewDiffuseLighting").$$render($$result, { diffuseLighting: $defs[def] }, {}, {})}` : ``} ${$defs[def].tag === "linearGradient" ? `<linearGradient${add_attribute("id", def, 0)} x1="${escape($defs[def].start.x, true) + "%"}" y1="${escape($defs[def].start.y, true) + "%"}" x2="${escape($defs[def].end.x, true) + "%"}" y2="${escape($defs[def].end.y, true) + "%"}">${each($defs[def].colors, (color) => {
      return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</linearGradient>` : ``} ${$defs[def].tag === "radialGradient" ? `<radialGradient${add_attribute("id", def, 0)} cx="${escape($defs[def].center.x, true) + "%"}" cy="${escape($defs[def].center.y, true) + "%"}" r="${escape($defs[def].r, true) + "%"}" fx="${escape($defs[def].focus.x, true) + "%"}" fy="${escape($defs[def].focus.y, true) + "%"}" fr="${escape($defs[def].fr, true) + "%"}">${each($defs[def].colors, (color) => {
      return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</radialGradient>` : ``} ${$defs[def].tag === "marker" ? `${validate_component(PreviewMarker, "PreviewMarker").$$render($$result, { marker: $defs[def] }, {}, {})}` : ``}`;
  })}</defs><g>${each($elements.Layers, (layer) => {
    return `${validate_component(PreviewGroup, "PreviewGroup").$$render(
      $$result,
      {
        id: layer,
        drawing: { elements: $elements }
      },
      {},
      {}
    )}`;
  })}</g></svg>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-RI_nVZac.js.map
