import { s as subscribe, b as set_store_value } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Card } from "../../../../chunks/Card.js";
import { C as Content } from "../../../../chunks/ActionIcons.js";
/* empty css                                                       */
/* empty css                                                    */
import "../../../../chunks/client.js";
import { d as darkMode, c as currentPath } from "../../../../chunks/stores2.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h3.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    // @ts-nocheck\\r\\n    import Card, {Content} from \\"@smui/card\\";\\r\\n    import Message from '$lib/ui/Message.svelte';\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode } from \\"$lib/stores\\"\\r\\n    $currentPath = \\"Students\\";\\r\\n    $darkMode = false;\\r\\n    onMount(() => {\\r\\n        MathJax.typeset();\\r\\n    });\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(240, 85, 0);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n    <svelte:head>\\r\\n        <title>Students</title>\\r\\n        <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/students\\" />\\r\\n        <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    </svelte:head>\\r\\n    \\r\\n    <article>\\r\\n        <h3>\\r\\n            Students\\r\\n        </h3>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <div class=\\"remark\\">\\r\\n                    <p>\\r\\n                        For mini projects or projects, write either to <code>admin@drmithileshkumar.com</code> or <code>mithileshkumar-bca@dsu.edu.in</code>\\r\\n                    </p>\\r\\n                    <h6>Contents of the email</h6>\\r\\n                    <ul>\\r\\n                        <li>Names of group members</li>\\r\\n                        <li>Semester</li>\\r\\n                        <li>Topic (Project title)</li>\\r\\n                        <li>Contact information (email/phone)</li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        \\r\\n    </article>"],"names":[],"mappings":"AAgBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACI,gBAAW,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CACzB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Students", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-1pw6q9l_START -->${$$result.title = `<title>Students</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/students"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1pw6q9l_END -->`, ""} <article class="svelte-9tb2l5"><h3 class="svelte-9tb2l5" data-svelte-h="svelte-6jm41w">Students</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="remark" data-svelte-h="svelte-eh6j2f"><p class="svelte-9tb2l5">For mini projects or projects, write either to <code>admin@drmithileshkumar.com</code> or <code>mithileshkumar-bca@dsu.edu.in</code></p> <h6 class="svelte-9tb2l5">Contents of the email</h6> <ul><li class="svelte-9tb2l5">Names of group members</li> <li class="svelte-9tb2l5">Semester</li> <li class="svelte-9tb2l5">Topic (Project title)</li> <li class="svelte-9tb2l5">Contact information (email/phone)</li></ul></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
