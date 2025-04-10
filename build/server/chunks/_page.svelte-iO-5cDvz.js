import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { c as currentPath } from './stores2-f06Es8-t.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import List, {Item} from '@smui/list';\\r\\n    import {goto} from '$app/navigation';\\r\\n    import { currentPath } from '$lib/vectorial/stores';\\r\\n    $currentPath = 'Shapes'\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Vectorial</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/vectorial/learn\\" />\\r\\n    <meta name=\\"description\\" content=\\"Create SVG graphics\\" />\\r\\n</svelte:head>\\r\\n<article class=\\"container\\">\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline4\\">{$currentPath}</h1>\\r\\n            <p>\\r\\n                Vectorial current supports following shapes:\\r\\n            </p>\\r\\n            <ul>\\r\\n                <li>Circle</li>\\r\\n                <li>Ellipse</li>\\r\\n                <li>Rectangle</li>\\r\\n                <li>Regular Polygon</li>\\r\\n                <li>Grid</li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Circle</h1>\\r\\n            <p>\\r\\n                A circle is defined by center <code>cx, cy</code> and radius <code>r</code>. Click on the button <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">circle</span> under <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">category</span> to add a circle to the canvas.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Ellipse</h1>\\r\\n            <p>\\r\\n                An ellipse is defined by center <code>cx, cy</code> and radii <code>rx, ry</code>. Click on the button <span style=\\"vertical-align:middle;\\"><svg width=\\"32px\\" viewBox=\\"-10 -8 20 16\\"><ellipse rx=\\"10\\" ry=\\"8\\" fill=\\"currentColor\\" /></svg></span> under <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">category</span> to add an ellipse to the canvas.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Rectangle</h1>\\r\\n            <p>\\r\\n                An ellipse is defined by upper-left corner <code>x, y</code>, <code>width</code> and <code>height</code>. Click on the button <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">square</span> under <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">category</span> to add a rectangle to the canvas.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Regular polygon</h1>\\r\\n            <p>\\r\\n                A regular polygon has equal sides. Click on the button <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">hexagon</span> under <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">category</span> to add a regular polygon to the canvas. A text field asks to enter the numbeer of sides.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\">Grid</h1>\\r\\n            <p>\\r\\n                A rectangular grid can be created by clicking on the button <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">grid_on</span> under <span class=\\"material-icons\\" style=\\"vertical-align:middle;\\">category</span>.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n\\r\\n"],"names":[],"mappings":"AAUI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Shapes", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-nj9602_START -->${$$result.title = `<title>Vectorial</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/learn"><meta name="description" content="Create SVG graphics"><!-- HEAD_svelte-nj9602_END -->`, ""} <article class="container svelte-1s9ex9t">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline4">${escape($currentPath)}</h1> <p data-svelte-h="svelte-10ct20d">Vectorial current supports following shapes:</p> <ul data-svelte-h="svelte-195bb3q"><li>Circle</li> <li>Ellipse</li> <li>Rectangle</li> <li>Regular Polygon</li> <li>Grid</li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-d0uaa6">Circle</h1> <p data-svelte-h="svelte-il9ekb">A circle is defined by center <code>cx, cy</code> and radius <code>r</code>. Click on the button <span class="material-icons" style="vertical-align:middle;">circle</span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add a circle to the canvas.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-12h961u">Ellipse</h1> <p data-svelte-h="svelte-14zdnrp">An ellipse is defined by center <code>cx, cy</code> and radii <code>rx, ry</code>. Click on the button <span style="vertical-align:middle;"><svg width="32px" viewBox="-10 -8 20 16"><ellipse rx="10" ry="8" fill="currentColor"></ellipse></svg></span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add an ellipse to the canvas.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-jow3ir">Rectangle</h1> <p data-svelte-h="svelte-19xmnsr">An ellipse is defined by upper-left corner <code>x, y</code>, <code>width</code> and <code>height</code>. Click on the button <span class="material-icons" style="vertical-align:middle;">square</span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add a rectangle to the canvas.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-12pp6gq">Regular polygon</h1> <p data-svelte-h="svelte-gcct37">A regular polygon has equal sides. Click on the button <span class="material-icons" style="vertical-align:middle;">hexagon</span> under <span class="material-icons" style="vertical-align:middle;">category</span> to add a regular polygon to the canvas. A text field asks to enter the numbeer of sides.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h1 class="mdc-typography--headline5" data-svelte-h="svelte-wm0ykm">Grid</h1> <p data-svelte-h="svelte-5r2rvt">A rectangular grid can be created by clicking on the button <span class="material-icons" style="vertical-align:middle;">grid_on</span> under <span class="material-icons" style="vertical-align:middle;">category</span>.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iO-5cDvz.js.map
