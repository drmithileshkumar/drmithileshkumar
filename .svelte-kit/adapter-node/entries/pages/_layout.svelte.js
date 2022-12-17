import { b as now, l as loop, c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const LogoSvg_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".mithileshkumar.svelte-16pt66h{width:2em;aspect-ratio:1 / 1;transition:ease-in-out 0.5s;display:flex;align-items:center;justify-content:center}.mithileshkumar.svelte-16pt66h:hover{transform:scale(1.5)}",
  map: null
};
const LogoSvg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"mithileshkumar svelte-16pt66h"}"><img class="${"mithileshkumar svelte-16pt66h"}" src="${"/favicon.png"}" alt="${"MithileshKumar"}"></div>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-1twd5ym.svelte-1twd5ym{position:sticky;top:0;height:4.5em;backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:space-between;z-index:100;gap:1em;padding:0 0.5em;max-width:1200px;margin:auto;background-color:white}.logo.svelte-1twd5ym.svelte-1twd5ym{display:flex;justify-content:center;align-items:center;gap:0.5em;text-align:center}.name.svelte-1twd5ym.svelte-1twd5ym{color:black;font-variant:all-petite-caps;font-size:1.1em;letter-spacing:0.1em;font-weight:500;text-shadow:1px 1px 3px rgb(128, 128, 128)}.pages.svelte-1twd5ym.svelte-1twd5ym{display:flex;gap:1em}.logoimage.svelte-1twd5ym.svelte-1twd5ym{border-radius:50%;overflow:hidden}.links.svelte-1twd5ym a.svelte-1twd5ym{border:0.5px solid;padding:0.3em 0.5em}.links.svelte-1twd5ym.svelte-1twd5ym{display:flex}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="${"svelte-1twd5ym"}"><a class="${"logo svelte-1twd5ym"}" href="${"/"}">
        <span class="${"logoimage svelte-1twd5ym"}">${validate_component(LogoSvg, "LogoSvg").$$render($$result, {}, {}, {})}</span>
        
        <span class="${"name svelte-1twd5ym"}">Dr Mithilesh Kumar</span></a>
    <div class="${"pages svelte-1twd5ym"}">
        
        </div>
    <div class="${"links svelte-1twd5ym"}"><a href="${"/practice"}" class="${"svelte-1twd5ym"}">Practice
        </a>
        <a href="${"/iit"}" class="${"svelte-1twd5ym"}">IIT
        </a></div>
    </nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-yigznn{height:2.5em;backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:space-between;padding:0.5em;max-width:1200px;margin:auto;border-top:2px solid;padding-top:2em}.copyright.svelte-yigznn{font-variant:small-caps;font-size:0.8em}.contactrights.svelte-yigznn{display:flex;flex-direction:column}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-yigznn"}"><div class="${"contactrights svelte-yigznn"}"><span class="${"contact"}">Email at drmithileshkumar@outlook.com</span>
        <span class="${"copyright svelte-yigznn"}">All rights reserved. © drmithileshkumar.com</span></div>
    
    </nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1u6lw92{position:relative;max-width:1200px;margin:auto;padding:1em}.svelte-1u6lw92::-webkit-scrollbar{width:10px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuwidth = spring(200, { stiffness: 0.1, damping: 0.5 });
  $$result.css.add(css);
  {
    menuwidth.set(200);
  }
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<div class="${"container svelte-1u6lw92"}">
    ${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
