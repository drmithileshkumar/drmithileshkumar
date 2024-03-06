import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import "d3";
import { B as Button } from "./Button.js";
/* empty css                                            */
const css = {
  code: "#scatter-plot.svelte-tcv392{display:flex;justify-content:center}",
  map: null
};
const ScatteredPlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rangeX = [0, 100] } = $$props;
  let { rangeY = [0, 100] } = $$props;
  let { dataSize = 50 } = $$props;
  let { linearX = false } = $$props;
  let { linearY = false } = $$props;
  let { showLine = false } = $$props;
  let { x1 = 0 } = $$props;
  let { y1 = 0 } = $$props;
  let { x2 = 50 } = $$props;
  let { y2 = 50 } = $$props;
  if ($$props.rangeX === void 0 && $$bindings.rangeX && rangeX !== void 0)
    $$bindings.rangeX(rangeX);
  if ($$props.rangeY === void 0 && $$bindings.rangeY && rangeY !== void 0)
    $$bindings.rangeY(rangeY);
  if ($$props.dataSize === void 0 && $$bindings.dataSize && dataSize !== void 0)
    $$bindings.dataSize(dataSize);
  if ($$props.linearX === void 0 && $$bindings.linearX && linearX !== void 0)
    $$bindings.linearX(linearX);
  if ($$props.linearY === void 0 && $$bindings.linearY && linearY !== void 0)
    $$bindings.linearY(linearY);
  if ($$props.showLine === void 0 && $$bindings.showLine && showLine !== void 0)
    $$bindings.showLine(showLine);
  if ($$props.x1 === void 0 && $$bindings.x1 && x1 !== void 0)
    $$bindings.x1(x1);
  if ($$props.y1 === void 0 && $$bindings.y1 && y1 !== void 0)
    $$bindings.y1(y1);
  if ($$props.x2 === void 0 && $$bindings.x2 && x2 !== void 0)
    $$bindings.x2(x2);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  $$result.css.add(css);
  return `<div id="scatter-plot" class="svelte-tcv392"></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Generate Random Data`;
    }
  })} `;
});
export {
  ScatteredPlot as S
};
