import { c as create_ssr_component, i as each, a as add_attribute, e as escape } from './ssr2-q3O0l93f.js';

/* empty css                                       */
const css = {
  code: ".paths.svelte-16te6qo.svelte-16te6qo{display:flex;align-items:center;flex-wrap:wrap}.paths.svelte-16te6qo a.svelte-16te6qo{text-decoration:none}",
  map: `{"version":3,"file":"Pathlist.svelte","sources":["Pathlist.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    export let pathname;\\r\\n    export let origin;\\r\\n    \\r\\n    $: pathComponents = pathname.split('/').map((c, i) => {return {id: Math.random(), component: c}});\\r\\n    $: pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i].component + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    // $: console.log(pathComponents);\\r\\n<\/script>\\r\\n<style>\\r\\n    .paths {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        flex-wrap: wrap;\\r\\n    }\\r\\n    .paths a {\\r\\n        text-decoration: none;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"paths\\">\\r\\n                    \\r\\n    {#each pathComponents as pathComponent, i (pathComponent.id)}\\r\\n        <a href=\\"{pathUrls[i]}\\">{pathComponent.component}</a> \\r\\n        <span class=\\"material-symbols-outlined\\">\\r\\n            {i > 0 && i < pathComponents.length - 1 ? 'chevron_right': ''}\\r\\n        </span>\\r\\n    {/each}\\r\\n    \\r\\n</div>"],"names":[],"mappings":"AAiBI,oCAAO,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IACf,CACA,qBAAM,CAAC,gBAAE,CACL,eAAe,CAAE,IACrB"}`
};
const Pathlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathComponents;
  let pathUrls;
  let { pathname } = $$props;
  let { origin } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0) $$bindings.pathname(pathname);
  if ($$props.origin === void 0 && $$bindings.origin && origin !== void 0) $$bindings.origin(origin);
  $$result.css.add(css);
  pathComponents = pathname.split("/").map((c, i) => {
    return { id: Math.random(), component: c };
  });
  pathUrls = pathComponents.map((u, index) => {
    let path = origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i].component + "/";
    }
    return path;
  });
  return `<div class="paths svelte-16te6qo">${each(pathComponents, (pathComponent, i) => {
    return `<a${add_attribute("href", pathUrls[i], 0)} class="svelte-16te6qo">${escape(pathComponent.component)}</a> <span class="material-symbols-outlined">${escape(i > 0 && i < pathComponents.length - 1 ? "chevron_right" : "")} </span>`;
  })}</div>`;
});

export { Pathlist as P };
//# sourceMappingURL=Pathlist-xYGsVQiJ.js.map
