import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import './client-k3u4ChD_.js';
import { c as currentPath } from './stores2-B6DyWuAW.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import {goto} from '$app/navigation';\\r\\n    import { currentPath } from '$lib/vectorial/stores';\\r\\n    $currentPath = 'LaTeX'\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Vectorial</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/vectorial/learn\\" />\\r\\n    <meta name=\\"description\\" content=\\"Create SVG graphics\\" />\\r\\n</svelte:head>\\r\\n<article class=\\"container\\">\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline4\\">{$currentPath}</h1>\\r\\n            <p>Under latex <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">functions</span>,  <code>latex</code> expression can be placed inside the canvas. Upon clicking the button a text field appears that asks to enter latex expression.</p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Modify latex under styles <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">tune</span></h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Modify latex under transforms <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">picture_in_picture</span></h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Supported expressions</h1>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n\\r\\n"],"names":[],"mappings":"AASI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "LaTeX", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-nj9602_START -->${$$result.title = `<title>Vectorial</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/learn"><meta name="description" content="Create SVG graphics"><!-- HEAD_svelte-nj9602_END -->`, ""} <article class="container svelte-1s9ex9t">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline4">${escape($currentPath)}</h1> <p data-svelte-h="svelte-1myuw3s">Under latex <span class="material-icons" style="vertical-align:middle;">functions</span>,  <code>latex</code> expression can be placed inside the canvas. Upon clicking the button a text field appears that asks to enter latex expression.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-uyiox6">Modify latex under styles <span class="material-icons" style="vertical-align:middle;">tune</span></h1>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-1vauwt4">Modify latex under transforms <span class="material-icons" style="vertical-align:middle;">picture_in_picture</span></h1>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-1egwviv">Supported expressions</h1>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dfe-1yEs.js.map
