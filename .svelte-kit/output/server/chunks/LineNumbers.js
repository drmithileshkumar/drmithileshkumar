import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, s as spread, b as escape_attribute_value, d as escape_object, k as add_classes, e as escape, i as createEventDispatcher, v as validate_component, j as each, p as add_styles } from "./ssr.js";
import hljs from "highlight.js/lib/core";
const css$1 = {
  code: ".langtag.svelte-1w9vok{position:relative}.langtag.svelte-1w9vok::after{content:attr(data-language);position:absolute;top:var(--langtag-top, 0);right:var(--langtag-right, 0);display:flex;align-items:center;justify-content:center;background:var(--langtag-background, inherit);color:var(--langtag-color, inherit);border-radius:var(--langtag-border-radius, 0);padding:var(--langtag-padding, 1em)}",
  map: null
};
const LangTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["code", "highlighted", "languageName", "langtag"]);
  let { code } = $$props;
  let { highlighted } = $$props;
  let { languageName = "plaintext" } = $$props;
  let { langtag = false } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.languageName === void 0 && $$bindings.languageName && languageName !== void 0)
    $$bindings.languageName(languageName);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  $$result.css.add(css$1);
  return `<pre${spread(
    [
      {
        "data-language": escape_attribute_value(languageName)
      },
      escape_object($$restProps)
    ],
    {
      classes: (langtag ? "langtag" : "") + " svelte-1w9vok"
    }
  )}><code${add_classes("hljs".trim())}>${highlighted ? `<!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END -->` : `${escape(code)}`}</code></pre>`;
});
const LangTag$1 = LangTag;
const Highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["language", "code", "langtag"]);
  let { language } = $$props;
  let { code } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  let highlighted = "";
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  {
    {
      hljs.registerLanguage(language.name, language.register);
      highlighted = hljs.highlight(code, { language: language.name }).value;
    }
  }
  return `${slots.default ? slots.default({ highlighted }) : ` ${validate_component(LangTag$1, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: language.name }, { langtag }, { highlighted }, { code }), {}, {})} `}`;
});
const Highlight$1 = Highlight;
const css = {
  code: 'pre.svelte-1vh31p0.svelte-1vh31p0{margin:0}table.svelte-1vh31p0.svelte-1vh31p0,tr.svelte-1vh31p0.svelte-1vh31p0,td.svelte-1vh31p0.svelte-1vh31p0{padding:0;border:0;margin:0;vertical-align:baseline}table.svelte-1vh31p0.svelte-1vh31p0{width:100%;border-collapse:collapse;border-spacing:0}tr.svelte-1vh31p0:first-of-type td.svelte-1vh31p0{padding-top:1em}tr.svelte-1vh31p0:last-child td.svelte-1vh31p0{padding-bottom:1em}tr.svelte-1vh31p0 td.svelte-1vh31p0:first-of-type{z-index:2}td.svelte-1vh31p0.svelte-1vh31p0{padding-left:var(--padding-left, 1em);padding-right:var(--padding-right, 1em)}td.hljs.svelte-1vh31p0.svelte-1vh31p0:not(.hideBorder):after{content:"";position:absolute;top:0;right:0;width:1px;height:100%;background:var(--border-color, currentColor)}.wrapLines.svelte-1vh31p0.svelte-1vh31p0{white-space:pre-wrap}td.svelte-1vh31p0.svelte-1vh31p0,td.svelte-1vh31p0>code.svelte-1vh31p0,pre.svelte-1vh31p0.svelte-1vh31p0{position:relative}td.svelte-1vh31p0>code.svelte-1vh31p0,pre.svelte-1vh31p0.svelte-1vh31p0{z-index:1}.line-background.svelte-1vh31p0.svelte-1vh31p0{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}tr.svelte-1vh31p0:first-of-type td .line-background.svelte-1vh31p0,tr.svelte-1vh31p0:last-of-type td .line-background.svelte-1vh31p0{height:calc(100% - 1em)}tr.svelte-1vh31p0:first-of-type td .line-background.svelte-1vh31p0{top:1em}tr.svelte-1vh31p0:last-of-type td .line-background.svelte-1vh31p0{bottom:1em}',
  map: null
};
const DIGIT_WIDTH = 12;
const MIN_DIGITS = 2;
const HIGHLIGHTED_BACKGROUND = "rgba(254, 241, 96, 0.2)";
const LineNumbers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lines;
  let len_digits;
  let len;
  let width;
  let $$restProps = compute_rest_props($$props, ["highlighted", "hideBorder", "wrapLines", "startingLineNumber", "highlightedLines"]);
  let { highlighted } = $$props;
  let { hideBorder = false } = $$props;
  let { wrapLines = false } = $$props;
  let { startingLineNumber = 1 } = $$props;
  let { highlightedLines = [] } = $$props;
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.hideBorder === void 0 && $$bindings.hideBorder && hideBorder !== void 0)
    $$bindings.hideBorder(hideBorder);
  if ($$props.wrapLines === void 0 && $$bindings.wrapLines && wrapLines !== void 0)
    $$bindings.wrapLines(wrapLines);
  if ($$props.startingLineNumber === void 0 && $$bindings.startingLineNumber && startingLineNumber !== void 0)
    $$bindings.startingLineNumber(startingLineNumber);
  if ($$props.highlightedLines === void 0 && $$bindings.highlightedLines && highlightedLines !== void 0)
    $$bindings.highlightedLines(highlightedLines);
  $$result.css.add(css);
  lines = highlighted.split("\n");
  len_digits = lines.length.toString().length;
  len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;
  width = len * DIGIT_WIDTH;
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-1vh31p0",
    styles: { "overflow-x": `auto` }
  })}><table class="svelte-1vh31p0"><tbody${add_classes("hljs".trim())}>${each(lines, (line, i) => {
    let lineNumber = i + startingLineNumber;
    return ` <tr class="svelte-1vh31p0"><td class="${[
      "svelte-1vh31p0",
      "hljs " + (hideBorder ? "hideBorder" : "")
    ].join(" ").trim()}"${add_styles({
      "position": `sticky`,
      "left": `0`,
      "text-align": `right`,
      "user-select": `none`,
      "width": width + "px"
    })}><code class="svelte-1vh31p0"${add_styles({
      "color": `var(--line-number-color, currentColor)`
    })}>${escape(lineNumber)}</code> ${highlightedLines.includes(i) ? `<div class="${["svelte-1vh31p0", "line-background"].join(" ").trim()}"${add_styles({
      "background": `var(--highlighted-background, ${HIGHLIGHTED_BACKGROUND})`
    })}></div>` : ``}</td> <td class="svelte-1vh31p0"><pre class="${["svelte-1vh31p0", wrapLines ? "wrapLines" : ""].join(" ").trim()}"><code><!-- HTML_TAG_START -->${line || "\n"}<!-- HTML_TAG_END --></code></pre> ${highlightedLines.includes(i) ? `<div class="${["svelte-1vh31p0", "line-background"].join(" ").trim()}"${add_styles({
      "background": `var(--highlighted-background, ${HIGHLIGHTED_BACKGROUND})`
    })}></div>` : ``}</td> </tr>`;
  })}</tbody></table> </div>`;
});
const LineNumbers$1 = LineNumbers;
export {
  Highlight$1 as H,
  LineNumbers$1 as L
};
