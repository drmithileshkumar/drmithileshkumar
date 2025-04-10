import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './client-CAo-6NMJ.js';
import { c as currentPath } from './stores2-f06Es8-t.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import {goto} from '$app/navigation';\\r\\n    import { currentPath } from '$lib/vectorial/stores';\\r\\n    $currentPath = 'Filters'\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Vectorial</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/vectorial/learn\\" />\\r\\n    <meta name=\\"description\\" content=\\"Create SVG graphics\\" />\\r\\n</svelte:head>\\r\\n<article class=\\"container\\">\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline4\\">{$currentPath}</h1>\\r\\n            <p>Under filters <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">blur_on</span>,  <code>filter</code> is defined, in particular <strong>shadows, specular</strong> and <strong>diffuse lighting</strong>.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Shadows</h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Blur</h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Specular lighting</h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Diffuse lighting</h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n\\r\\n"],"names":[],"mappings":"AASI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Filters", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-nj9602_START -->${$$result.title = `<title>Vectorial</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/learn"><meta name="description" content="Create SVG graphics"><!-- HEAD_svelte-nj9602_END -->`, ""} <article class="container svelte-1s9ex9t">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline4">${escape($currentPath)}</h1> <p data-svelte-h="svelte-1sqn9l3">Under filters <span class="material-icons" style="vertical-align:middle;">blur_on</span>,  <code>filter</code> is defined, in particular <strong>shadows, specular</strong> and <strong>diffuse lighting</strong>.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-mjx8sr">Shadows</h1>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-2co40b">Blur</h1>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-19mgfs1">Specular lighting</h1>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-1phukrk">Diffuse lighting</h1>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C0lFVJvu.js.map
