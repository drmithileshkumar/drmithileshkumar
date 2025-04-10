import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr2-CDgUAJs6.js';
import './client-CAo-6NMJ.js';
import { p as page } from './stores3-kDd52ji6.js';
import './ActionIcons-Bx2zL88O.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { A as Assignment } from './Assignment-ClHt92G2.js';
import { c as currentPath } from './stores-Cecnyqn_.js';
import { S as Select, O as Option } from './Option-EA6hdqUR.js';
import './exports-DKuYoYKl.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './Ripple-N--aPaMn.js';
import './Card-BZ_KNbGw.js';
import './Actions-DlQ11USC.js';
import './Set-DpFt5ER7.js';
import './index2-D2s-XE5r.js';
import './ContextFragment-CedcH2TL.js';
import './Text-B2xpIqtX.js';
import './Textfield-B08XD1S3.js';
import './prefixFilter-B6cFZsw3.js';
import './NotchedOutline-Bg9Ljk79.js';
import './Suffix-CtI6fDI6.js';
import './Input-CXqTjpeX.js';
import './Menu-CzhuAPYf.js';
import './MenuSurface-DP6CwZ6B.js';
import './SelectionGroupIcon-CO1YlMDH.js';
import './Subheader-DEm_inUP.js';
import './Graphic-CnHJKmsY.js';
import './Item-T2YrjSpA.js';
import './dispatch-BOSWPsEc.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from '$app/stores';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Datatable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Assignment from \\"$lib/components/Assignment.svelte\\";\\r\\n\\timport { currentPath } from \\"$lib/stores.js\\";\\r\\n    import Select, {Option} from \\"@smui/select\\";\\r\\n    $currentPath = 'Assignments'\\r\\n    export let data;\\r\\n    let courses = [\\r\\n        {\\r\\n            name: \\"Mathematics II\\",\\r\\n            id: '22CA1201'\\r\\n        }, \\r\\n        {\\r\\n            name: 'Internet Technologies',\\r\\n            id: '22CA2402'\\r\\n        },\\r\\n        {\\r\\n            name: 'Internet Technologies Lab',\\r\\n            id: '22CA2405'\\r\\n        }];\\r\\n    let questions = [], assignments = [];\\r\\n    let selectedCourse;\\r\\n    const getAssignments = async () => {\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseID=\${selectedCourse}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to get questions');\\r\\n            return;\\r\\n        }\\r\\n        assignments = await res.json();\\r\\n        // let res1 = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseName=\${selectedCourse}\`)\\r\\n        // if(!res1.ok) {\\r\\n        //     alert('Failed to get assignments');\\r\\n        //     return;\\r\\n        // }\\r\\n        // assignments = await res1.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <Button on:click={() => goto(\`/\${$page.data.user.publicID}/assignments/new\`)}>New assignment</Button>\\r\\n    <div class=\\"courses\\">\\r\\n        <Select variant=\\"outlined\\" bind:value={selectedCourse} label=\\"Course\\">\\r\\n            <Option value=\\"\\" />\\r\\n            {#each courses as course}\\r\\n                <Option value={course.id}>{course.name}</Option>\\r\\n            {/each}\\r\\n        </Select>\\r\\n        <Button on:click={getAssignments}>Get Assignments</Button>\\r\\n    </div>\\r\\n    {#each assignments as assignment}\\r\\n        <Assignment {assignment} />\\r\\n    {/each}\\r\\n</article>"],"names":[],"mappings":"AA2CI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Assignments", $currentPath);
  let { data } = $$props;
  let courses = [
    { name: "Mathematics II", id: "22CA1201" },
    {
      name: "Internet Technologies",
      id: "22CA2402"
    },
    {
      name: "Internet Technologies Lab",
      id: "22CA2405"
    }
  ];
  let assignments = [];
  let selectedCourse;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `New assignment`;
      }
    })} <div class="courses">${validate_component(Select, "Select").$$render(
      $$result,
      {
        variant: "outlined",
        label: "Course",
        value: selectedCourse
      },
      {
        value: ($$value) => {
          selectedCourse = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(courses, (course) => {
            return `${validate_component(Option, "Option").$$render($$result, { value: course.id }, {}, {
              default: () => {
                return `${escape(course.name)}`;
              }
            })}`;
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Get Assignments`;
      }
    })}</div> ${each(assignments, (assignment) => {
      return `${validate_component(Assignment, "Assignment").$$render($$result, { assignment }, {}, {})}`;
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DGyWvMlr.js.map
