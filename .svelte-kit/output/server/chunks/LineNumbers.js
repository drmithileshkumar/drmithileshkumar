import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, b as spread, d as escape_attribute_value, f as escape_object, k as add_classes, e as escape, j as createEventDispatcher, v as validate_component, i as each, p as add_styles } from "./ssr2.js";
import hljs from "highlight.js/lib/core";
const css$1 = {
  code: ".langtag.svelte-1w9vok{position:relative}.langtag.svelte-1w9vok::after{content:attr(data-language);position:absolute;top:var(--langtag-top, 0);right:var(--langtag-right, 0);display:flex;align-items:center;justify-content:center;background:var(--langtag-background, inherit);color:var(--langtag-color, inherit);border-radius:var(--langtag-border-radius, 0);padding:var(--langtag-padding, 1em)}",
  map: '{"version":3,"file":"LangTag.svelte","sources":["LangTag.svelte"],"sourcesContent":["<script>\\r\\n  // @ts-check\\r\\n\\r\\n  /** @type {any} */\\r\\n  export let code;\\r\\n\\r\\n  /** @type {string} */\\r\\n  export let highlighted;\\r\\n\\r\\n  /** @type {string} */\\r\\n  export let languageName = \\"plaintext\\";\\r\\n\\r\\n  /** @type {boolean} */\\r\\n  export let langtag = false;\\r\\n<\/script>\\r\\n\\r\\n<pre class:langtag data-language={languageName} {...$$restProps}><code\\r\\n    class:hljs={true}\\r\\n    >{#if highlighted}{@html highlighted}{:else}{code}{/if}</code\\r\\n  ></pre>\\r\\n\\r\\n<style>\\r\\n  .langtag {\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  .langtag::after {\\r\\n    content: attr(data-language);\\r\\n    position: absolute;\\r\\n    top: var(--langtag-top, 0);\\r\\n    right: var(--langtag-right, 0);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    background: var(--langtag-background, inherit);\\r\\n    color: var(--langtag-color, inherit);\\r\\n    border-radius: var(--langtag-border-radius, 0);\\r\\n    padding: var(--langtag-padding, 1em);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsBE,sBAAS,CACP,QAAQ,CAAE,QACZ,CAEA,sBAAQ,OAAQ,CACd,OAAO,CAAE,KAAK,aAAa,CAAC,CAC5B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,aAAa,CAAC,EAAE,CAAC,CAC1B,KAAK,CAAE,IAAI,eAAe,CAAC,EAAE,CAAC,CAC9B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,oBAAoB,CAAC,QAAQ,CAAC,CAC9C,KAAK,CAAE,IAAI,eAAe,CAAC,QAAQ,CAAC,CACpC,aAAa,CAAE,IAAI,uBAAuB,CAAC,EAAE,CAAC,CAC9C,OAAO,CAAE,IAAI,iBAAiB,CAAC,IAAI,CACrC"}'
};
const LangTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["code", "highlighted", "languageName", "langtag"]);
  let { code } = $$props;
  let { highlighted } = $$props;
  let { languageName = "plaintext" } = $$props;
  let { langtag = false } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0) $$bindings.highlighted(highlighted);
  if ($$props.languageName === void 0 && $$bindings.languageName && languageName !== void 0) $$bindings.languageName(languageName);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0) $$bindings.langtag(langtag);
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
const Highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["language", "code", "langtag"]);
  let { language } = $$props;
  let { code } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  let highlighted = "";
  if ($$props.language === void 0 && $$bindings.language && language !== void 0) $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0) $$bindings.langtag(langtag);
  {
    {
      hljs.registerLanguage(language.name, language.register);
      highlighted = hljs.highlight(code, { language: language.name }).value;
    }
  }
  return `${slots.default ? slots.default({ highlighted }) : ` ${validate_component(LangTag, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: language.name }, { langtag }, { highlighted }, { code }), {}, {})} `}`;
});
const css = {
  code: 'pre.svelte-1vh31p0.svelte-1vh31p0{margin:0}table.svelte-1vh31p0.svelte-1vh31p0,tr.svelte-1vh31p0.svelte-1vh31p0,td.svelte-1vh31p0.svelte-1vh31p0{padding:0;border:0;margin:0;vertical-align:baseline}table.svelte-1vh31p0.svelte-1vh31p0{width:100%;border-collapse:collapse;border-spacing:0}tr.svelte-1vh31p0:first-of-type td.svelte-1vh31p0{padding-top:1em}tr.svelte-1vh31p0:last-child td.svelte-1vh31p0{padding-bottom:1em}tr.svelte-1vh31p0 td.svelte-1vh31p0:first-of-type{z-index:2}td.svelte-1vh31p0.svelte-1vh31p0{padding-left:var(--padding-left, 1em);padding-right:var(--padding-right, 1em)}td.hljs.svelte-1vh31p0.svelte-1vh31p0:not(.hideBorder):after{content:"";position:absolute;top:0;right:0;width:1px;height:100%;background:var(--border-color, currentColor)}.wrapLines.svelte-1vh31p0.svelte-1vh31p0{white-space:pre-wrap}td.svelte-1vh31p0.svelte-1vh31p0,td.svelte-1vh31p0>code.svelte-1vh31p0,pre.svelte-1vh31p0.svelte-1vh31p0{position:relative}td.svelte-1vh31p0>code.svelte-1vh31p0,pre.svelte-1vh31p0.svelte-1vh31p0{z-index:1}.line-background.svelte-1vh31p0.svelte-1vh31p0{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}tr.svelte-1vh31p0:first-of-type td .line-background.svelte-1vh31p0,tr.svelte-1vh31p0:last-of-type td .line-background.svelte-1vh31p0{height:calc(100% - 1em)}tr.svelte-1vh31p0:first-of-type td .line-background.svelte-1vh31p0{top:1em}tr.svelte-1vh31p0:last-of-type td .line-background.svelte-1vh31p0{bottom:1em}',
  map: '{"version":3,"file":"LineNumbers.svelte","sources":["LineNumbers.svelte"],"sourcesContent":["<script>\\r\\n  // @ts-check\\r\\n\\r\\n  /** @type {string} */\\r\\n  export let highlighted;\\r\\n\\r\\n  /** @type {boolean} */\\r\\n  export let hideBorder = false;\\r\\n\\r\\n  /** @type {boolean} */\\r\\n  export let wrapLines = false;\\r\\n\\r\\n  /** @type {number} */\\r\\n  export let startingLineNumber = 1;\\r\\n\\r\\n  /** @type {number[]} */\\r\\n  export let highlightedLines = [];\\r\\n\\r\\n  const DIGIT_WIDTH = 12;\\r\\n  const MIN_DIGITS = 2;\\r\\n  const HIGHLIGHTED_BACKGROUND = \\"rgba(254, 241, 96, 0.2)\\";\\r\\n\\r\\n  $: lines = highlighted.split(\\"\\\\n\\");\\r\\n  $: len_digits = lines.length.toString().length;\\r\\n  $: len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;\\r\\n  $: width = len * DIGIT_WIDTH;\\r\\n<\/script>\\r\\n\\r\\n<div style:overflow-x=\\"auto\\" {...$$restProps}>\\r\\n  <table>\\r\\n    <tbody class:hljs={true}>\\r\\n      {#each lines as line, i}\\r\\n        {@const lineNumber = i + startingLineNumber}\\r\\n        <tr>\\r\\n          <td\\r\\n            class:hljs={true}\\r\\n            class:hideBorder\\r\\n            style:position=\\"sticky\\"\\r\\n            style:left=\\"0\\"\\r\\n            style:text-align=\\"right\\"\\r\\n            style:user-select=\\"none\\"\\r\\n            style:width={width + \\"px\\"}\\r\\n          >\\r\\n            <code style:color=\\"var(--line-number-color, currentColor)\\">\\r\\n              {lineNumber}\\r\\n            </code>\\r\\n            {#if highlightedLines.includes(i)}\\r\\n              <div\\r\\n                class:line-background={true}\\r\\n                style:background=\\"var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})\\"\\r\\n              />\\r\\n            {/if}\\r\\n          </td>\\r\\n          <td>\\r\\n            <pre class:wrapLines><code>{@html line || \\"\\\\n\\"}</code></pre>\\r\\n            {#if highlightedLines.includes(i)}\\r\\n              <div\\r\\n                class:line-background={true}\\r\\n                style:background=\\"var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})\\"\\r\\n              />\\r\\n            {/if}\\r\\n          </td>\\r\\n        </tr>\\r\\n      {/each}\\r\\n    </tbody>\\r\\n  </table>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  pre {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  table,\\r\\n  tr,\\r\\n  td {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    margin: 0;\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n\\r\\n  table {\\r\\n    width: 100%;\\r\\n    border-collapse: collapse;\\r\\n    border-spacing: 0;\\r\\n  }\\r\\n\\r\\n  tr:first-of-type td {\\r\\n    padding-top: 1em;\\r\\n  }\\r\\n\\r\\n  tr:last-child td {\\r\\n    padding-bottom: 1em;\\r\\n  }\\r\\n\\r\\n  tr td:first-of-type {\\r\\n    z-index: 2;\\r\\n  }\\r\\n\\r\\n  td {\\r\\n    padding-left: var(--padding-left, 1em);\\r\\n    padding-right: var(--padding-right, 1em);\\r\\n  }\\r\\n\\r\\n  td.hljs:not(.hideBorder):after {\\r\\n    content: \\"\\";\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    width: 1px;\\r\\n    height: 100%;\\r\\n    background: var(--border-color, currentColor);\\r\\n  }\\r\\n\\r\\n  .wrapLines {\\r\\n    white-space: pre-wrap;\\r\\n  }\\r\\n\\r\\n  td,\\r\\n  td > code,\\r\\n  pre {\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  td > code,\\r\\n  pre {\\r\\n    z-index: 1;\\r\\n  }\\r\\n\\r\\n  .line-background {\\r\\n    position: absolute;\\r\\n    z-index: 0;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n\\r\\n  tr:first-of-type td .line-background,\\r\\n  tr:last-of-type td .line-background {\\r\\n    height: calc(100% - 1em);\\r\\n  }\\r\\n\\r\\n  tr:first-of-type td .line-background {\\r\\n    top: 1em;\\r\\n  }\\r\\n\\r\\n  tr:last-of-type td .line-background {\\r\\n    bottom: 1em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqEE,iCAAI,CACF,MAAM,CAAE,CACV,CAEA,mCAAK,CACL,gCAAE,CACF,gCAAG,CACD,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,QAClB,CAEA,mCAAM,CACJ,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,QAAQ,CACzB,cAAc,CAAE,CAClB,CAEA,iBAAE,cAAc,CAAC,iBAAG,CAClB,WAAW,CAAE,GACf,CAEA,iBAAE,WAAW,CAAC,iBAAG,CACf,cAAc,CAAE,GAClB,CAEA,iBAAE,CAAC,iBAAE,cAAe,CAClB,OAAO,CAAE,CACX,CAEA,gCAAG,CACD,YAAY,CAAE,IAAI,cAAc,CAAC,IAAI,CAAC,CACtC,aAAa,CAAE,IAAI,eAAe,CAAC,IAAI,CACzC,CAEA,EAAE,mCAAK,KAAK,WAAW,CAAC,MAAO,CAC7B,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,cAAc,CAAC,aAAa,CAC9C,CAEA,wCAAW,CACT,WAAW,CAAE,QACf,CAEA,gCAAE,CACF,iBAAE,CAAG,mBAAI,CACT,iCAAI,CACF,QAAQ,CAAE,QACZ,CAEA,iBAAE,CAAG,mBAAI,CACT,iCAAI,CACF,OAAO,CAAE,CACX,CAEA,8CAAiB,CACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CAEA,iBAAE,cAAc,CAAC,EAAE,CAAC,+BAAgB,CACpC,iBAAE,aAAa,CAAC,EAAE,CAAC,+BAAiB,CAClC,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CACzB,CAEA,iBAAE,cAAc,CAAC,EAAE,CAAC,+BAAiB,CACnC,GAAG,CAAE,GACP,CAEA,iBAAE,aAAa,CAAC,EAAE,CAAC,+BAAiB,CAClC,MAAM,CAAE,GACV"}'
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
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0) $$bindings.highlighted(highlighted);
  if ($$props.hideBorder === void 0 && $$bindings.hideBorder && hideBorder !== void 0) $$bindings.hideBorder(hideBorder);
  if ($$props.wrapLines === void 0 && $$bindings.wrapLines && wrapLines !== void 0) $$bindings.wrapLines(wrapLines);
  if ($$props.startingLineNumber === void 0 && $$bindings.startingLineNumber && startingLineNumber !== void 0) $$bindings.startingLineNumber(startingLineNumber);
  if ($$props.highlightedLines === void 0 && $$bindings.highlightedLines && highlightedLines !== void 0) $$bindings.highlightedLines(highlightedLines);
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
export {
  Highlight as H,
  LineNumbers as L
};
