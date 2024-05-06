import { c as compute_rest_props } from "./utils.js";
import { c as create_ssr_component, s as spread, b as escape_attribute_value, d as escape_object, k as add_classes, e as escape, i as createEventDispatcher, v as validate_component, j as each, p as add_styles } from "./ssr.js";
import hljs from "highlight.js/lib/core";
const css$1 = {
  code: ".langtag.svelte-1w9vok{position:relative}.langtag.svelte-1w9vok::after{content:attr(data-language);position:absolute;top:var(--langtag-top, 0);right:var(--langtag-right, 0);display:flex;align-items:center;justify-content:center;background:var(--langtag-background, inherit);color:var(--langtag-color, inherit);border-radius:var(--langtag-border-radius, 0);padding:var(--langtag-padding, 1em)}",
  map: '{"version":3,"file":"LangTag.svelte","sources":["LangTag.svelte"],"sourcesContent":["<script>\\n  // @ts-check\\n\\n  /** @type {any} */\\n  export let code;\\n\\n  /** @type {string} */\\n  export let highlighted;\\n\\n  /** @type {string} */\\n  export let languageName = \\"plaintext\\";\\n\\n  /** @type {boolean} */\\n  export let langtag = false;\\n<\/script>\\n\\n<pre class:langtag data-language={languageName} {...$$restProps}><code\\n    class:hljs={true}\\n    >{#if highlighted}{@html highlighted}{:else}{code}{/if}</code\\n  ></pre>\\n\\n<style>\\n  .langtag {\\n    position: relative;\\n  }\\n\\n  .langtag::after {\\n    content: attr(data-language);\\n    position: absolute;\\n    top: var(--langtag-top, 0);\\n    right: var(--langtag-right, 0);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background: var(--langtag-background, inherit);\\n    color: var(--langtag-color, inherit);\\n    border-radius: var(--langtag-border-radius, 0);\\n    padding: var(--langtag-padding, 1em);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsBE,sBAAS,CACP,QAAQ,CAAE,QACZ,CAEA,sBAAQ,OAAQ,CACd,OAAO,CAAE,KAAK,aAAa,CAAC,CAC5B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,aAAa,CAAC,EAAE,CAAC,CAC1B,KAAK,CAAE,IAAI,eAAe,CAAC,EAAE,CAAC,CAC9B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,oBAAoB,CAAC,QAAQ,CAAC,CAC9C,KAAK,CAAE,IAAI,eAAe,CAAC,QAAQ,CAAC,CACpC,aAAa,CAAE,IAAI,uBAAuB,CAAC,EAAE,CAAC,CAC9C,OAAO,CAAE,IAAI,iBAAiB,CAAC,IAAI,CACrC"}'
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
  return `${slots.default ? slots.default({ highlighted }) : ` ${validate_component(LangTag, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: language.name }, { langtag }, { highlighted }, { code }), {}, {})} `}`;
});
const css = {
  code: 'pre.svelte-1vh31p0.svelte-1vh31p0{margin:0}table.svelte-1vh31p0.svelte-1vh31p0,tr.svelte-1vh31p0.svelte-1vh31p0,td.svelte-1vh31p0.svelte-1vh31p0{padding:0;border:0;margin:0;vertical-align:baseline}table.svelte-1vh31p0.svelte-1vh31p0{width:100%;border-collapse:collapse;border-spacing:0}tr.svelte-1vh31p0:first-of-type td.svelte-1vh31p0{padding-top:1em}tr.svelte-1vh31p0:last-child td.svelte-1vh31p0{padding-bottom:1em}tr.svelte-1vh31p0 td.svelte-1vh31p0:first-of-type{z-index:2}td.svelte-1vh31p0.svelte-1vh31p0{padding-left:var(--padding-left, 1em);padding-right:var(--padding-right, 1em)}td.hljs.svelte-1vh31p0.svelte-1vh31p0:not(.hideBorder):after{content:"";position:absolute;top:0;right:0;width:1px;height:100%;background:var(--border-color, currentColor)}.wrapLines.svelte-1vh31p0.svelte-1vh31p0{white-space:pre-wrap}td.svelte-1vh31p0.svelte-1vh31p0,td.svelte-1vh31p0>code.svelte-1vh31p0,pre.svelte-1vh31p0.svelte-1vh31p0{position:relative}td.svelte-1vh31p0>code.svelte-1vh31p0,pre.svelte-1vh31p0.svelte-1vh31p0{z-index:1}.line-background.svelte-1vh31p0.svelte-1vh31p0{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}tr.svelte-1vh31p0:first-of-type td .line-background.svelte-1vh31p0,tr.svelte-1vh31p0:last-of-type td .line-background.svelte-1vh31p0{height:calc(100% - 1em)}tr.svelte-1vh31p0:first-of-type td .line-background.svelte-1vh31p0{top:1em}tr.svelte-1vh31p0:last-of-type td .line-background.svelte-1vh31p0{bottom:1em}',
  map: '{"version":3,"file":"LineNumbers.svelte","sources":["LineNumbers.svelte"],"sourcesContent":["<script>\\n  // @ts-check\\n\\n  /** @type {string} */\\n  export let highlighted;\\n\\n  /** @type {boolean} */\\n  export let hideBorder = false;\\n\\n  /** @type {boolean} */\\n  export let wrapLines = false;\\n\\n  /** @type {number} */\\n  export let startingLineNumber = 1;\\n\\n  /** @type {number[]} */\\n  export let highlightedLines = [];\\n\\n  const DIGIT_WIDTH = 12;\\n  const MIN_DIGITS = 2;\\n  const HIGHLIGHTED_BACKGROUND = \\"rgba(254, 241, 96, 0.2)\\";\\n\\n  $: lines = highlighted.split(\\"\\\\n\\");\\n  $: len_digits = lines.length.toString().length;\\n  $: len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;\\n  $: width = len * DIGIT_WIDTH;\\n<\/script>\\n\\n<div style:overflow-x=\\"auto\\" {...$$restProps}>\\n  <table>\\n    <tbody class:hljs={true}>\\n      {#each lines as line, i}\\n        {@const lineNumber = i + startingLineNumber}\\n        <tr>\\n          <td\\n            class:hljs={true}\\n            class:hideBorder\\n            style:position=\\"sticky\\"\\n            style:left=\\"0\\"\\n            style:text-align=\\"right\\"\\n            style:user-select=\\"none\\"\\n            style:width={width + \\"px\\"}\\n          >\\n            <code style:color=\\"var(--line-number-color, currentColor)\\">\\n              {lineNumber}\\n            </code>\\n            {#if highlightedLines.includes(i)}\\n              <div\\n                class:line-background={true}\\n                style:background=\\"var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})\\"\\n              />\\n            {/if}\\n          </td>\\n          <td>\\n            <pre class:wrapLines><code>{@html line || \\"\\\\n\\"}</code></pre>\\n            {#if highlightedLines.includes(i)}\\n              <div\\n                class:line-background={true}\\n                style:background=\\"var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})\\"\\n              />\\n            {/if}\\n          </td>\\n        </tr>\\n      {/each}\\n    </tbody>\\n  </table>\\n</div>\\n\\n<style>\\n  pre {\\n    margin: 0;\\n  }\\n\\n  table,\\n  tr,\\n  td {\\n    padding: 0;\\n    border: 0;\\n    margin: 0;\\n    vertical-align: baseline;\\n  }\\n\\n  table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n  }\\n\\n  tr:first-of-type td {\\n    padding-top: 1em;\\n  }\\n\\n  tr:last-child td {\\n    padding-bottom: 1em;\\n  }\\n\\n  tr td:first-of-type {\\n    z-index: 2;\\n  }\\n\\n  td {\\n    padding-left: var(--padding-left, 1em);\\n    padding-right: var(--padding-right, 1em);\\n  }\\n\\n  td.hljs:not(.hideBorder):after {\\n    content: \\"\\";\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    width: 1px;\\n    height: 100%;\\n    background: var(--border-color, currentColor);\\n  }\\n\\n  .wrapLines {\\n    white-space: pre-wrap;\\n  }\\n\\n  td,\\n  td > code,\\n  pre {\\n    position: relative;\\n  }\\n\\n  td > code,\\n  pre {\\n    z-index: 1;\\n  }\\n\\n  .line-background {\\n    position: absolute;\\n    z-index: 0;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n  }\\n\\n  tr:first-of-type td .line-background,\\n  tr:last-of-type td .line-background {\\n    height: calc(100% - 1em);\\n  }\\n\\n  tr:first-of-type td .line-background {\\n    top: 1em;\\n  }\\n\\n  tr:last-of-type td .line-background {\\n    bottom: 1em;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqEE,iCAAI,CACF,MAAM,CAAE,CACV,CAEA,mCAAK,CACL,gCAAE,CACF,gCAAG,CACD,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,QAClB,CAEA,mCAAM,CACJ,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,QAAQ,CACzB,cAAc,CAAE,CAClB,CAEA,iBAAE,cAAc,CAAC,iBAAG,CAClB,WAAW,CAAE,GACf,CAEA,iBAAE,WAAW,CAAC,iBAAG,CACf,cAAc,CAAE,GAClB,CAEA,iBAAE,CAAC,iBAAE,cAAe,CAClB,OAAO,CAAE,CACX,CAEA,gCAAG,CACD,YAAY,CAAE,IAAI,cAAc,CAAC,IAAI,CAAC,CACtC,aAAa,CAAE,IAAI,eAAe,CAAC,IAAI,CACzC,CAEA,EAAE,mCAAK,KAAK,WAAW,CAAC,MAAO,CAC7B,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,cAAc,CAAC,aAAa,CAC9C,CAEA,wCAAW,CACT,WAAW,CAAE,QACf,CAEA,gCAAE,CACF,iBAAE,CAAG,mBAAI,CACT,iCAAI,CACF,QAAQ,CAAE,QACZ,CAEA,iBAAE,CAAG,mBAAI,CACT,iCAAI,CACF,OAAO,CAAE,CACX,CAEA,8CAAiB,CACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CAEA,iBAAE,cAAc,CAAC,EAAE,CAAC,+BAAgB,CACpC,iBAAE,aAAa,CAAC,EAAE,CAAC,+BAAiB,CAClC,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CACzB,CAEA,iBAAE,cAAc,CAAC,EAAE,CAAC,+BAAiB,CACnC,GAAG,CAAE,GACP,CAEA,iBAAE,aAAa,CAAC,EAAE,CAAC,+BAAiB,CAClC,MAAM,CAAE,GACV"}'
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
export {
  Highlight as H,
  LineNumbers as L
};
