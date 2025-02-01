import { a as subscribe } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { S as Set_1, C as Chip } from './Set-DpFt5ER7.js';
import { T as Text } from './Text-B2xpIqtX.js';
import { T as Textfield } from './Textfield-B08XD1S3.js';
import './Suffix-CtI6fDI6.js';
import './client-k3u4ChD_.js';
import { p as page } from './stores3-DPEAZJnM.js';

/* empty css                                         */
const css = {
  code: ".place.svelte-m1g8tn{display:flex;justify-content:space-between}.university.svelte-m1g8tn{font-variant:small-caps}.department.svelte-m1g8tn{font-variant:small-caps}.assignmentDetails.svelte-m1g8tn{display:flex;justify-content:center;gap:1em;font-size:1.5em;margin:1em}.courseDetails.svelte-m1g8tn,.student.svelte-m1g8tn{display:grid;grid-template-columns:1fr 1fr;justify-content:space-between;padding-bottom:0.7em}.student.svelte-m1g8tn{align-items:center;margin-top:1em}.courseDetails.svelte-m1g8tn{border-bottom:2px solid}.course.svelte-m1g8tn,.marks.svelte-m1g8tn{display:flex;flex-direction:column}.marks.svelte-m1g8tn{text-align:end}",
  map: `{"version":3,"file":"Assignment.svelte","sources":["Assignment.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from '@smui/card';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Chip, { Set, Text} from '@smui/chips';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import FormField from \\"@smui/form-field\\"\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n    import { page } from '$app/stores';\\r\\n    export let studentName = '';\\r\\n    export let studentID = '';\\r\\n    export let assignment;\\r\\n    export let viewable = true;\\r\\n    export let showQuestionList = true;\\r\\n    export let showStudent = false;\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    .place {\\r\\n        display: flex;\\r\\n        justify-content: space-between;\\r\\n    }\\r\\n    .university {\\r\\n        font-variant: small-caps;\\r\\n    }\\r\\n    .department {\\r\\n        font-variant: small-caps;\\r\\n    }\\r\\n    .assignmentDetails {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        gap: 1em;\\r\\n        font-size: 1.5em;\\r\\n        margin: 1em;\\r\\n    }\\r\\n    .courseDetails, .student {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        justify-content: space-between;\\r\\n        padding-bottom: 0.7em;\\r\\n    }\\r\\n    .student {\\r\\n        align-items: center;\\r\\n        margin-top: 1em;\\r\\n    }\\r\\n    .courseDetails {\\r\\n        border-bottom: 2px solid;\\r\\n    }\\r\\n    .course, .marks {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .marks {\\r\\n        text-align: end;\\r\\n    }\\r\\n</style>\\r\\n<Card>\\r\\n    <Content>\\r\\n        <div class=\\"place\\">\\r\\n            <span class=\\"university\\">{assignment.university}</span>\\r\\n            <span class=\\"department\\">{assignment.department}</span>\\r\\n        </div>\\r\\n        <div class=\\"assignmentDetails\\">\\r\\n            <span class=\\"semester\\">Semester {assignment.semester}</span>\\r\\n            <span class=\\"title\\">{assignment.title}</span>\\r\\n            <span class=\\"session\\">{assignment.session}</span>\\r\\n        </div>\\r\\n        <div class=\\"courseDetails\\">\\r\\n            <div class=\\"course\\">\\r\\n                <span class=\\"name\\"><strong>Course Name:</strong> {assignment.courseName}</span>\\r\\n                <span class=\\"code\\"><strong>Course ID:</strong> {assignment.courseID}</span>\\r\\n                <span class=\\"start\\"><strong>Start date:</strong> {assignment.dates.start}</span>\\r\\n            </div>\\r\\n            <div class=\\"marks\\">\\r\\n                <span class=\\"number\\"><strong>No. of Questions:</strong> {assignment.numberOfQuestions}</span>\\r\\n                <span class=\\"totalMarks\\"><strong>Max Marks:</strong> {assignment.totalMarks}</span>\\r\\n                <span class=\\"end\\"><strong>End date:</strong> {assignment.dates.end}</span>\\r\\n            </div>\\r\\n        </div>\\r\\n        {#if showStudent}\\r\\n            <div class=\\"student\\">\\r\\n                <span class=\\"name\\"><strong>Student Name:</strong> {studentName}</span>\\r\\n                <Textfield variant=\\"outlined\\" bind:value={studentID} label=\\"USN\\" />\\r\\n                <!-- <span class=\\"id\\"><strong>USN:</strong> {student.id}</span> -->\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if showQuestionList}\\r\\n        <div class=\\"questions\\">\\r\\n            <Set chips={assignment.questions.map((q, i) => 'Q' + (i + 1))} let:chip>\\r\\n                <Chip {chip}>\\r\\n                    <Text>{chip}</Text>\\r\\n                </Chip>\\r\\n            </Set>\\r\\n        </div>\\r\\n        {/if}\\r\\n    </Content>\\r\\n    {#if viewable}\\r\\n    <Actions>\\r\\n        <Button on:click={() => goto(\`/\${$page.data.user.publicID}/assignments/\${assignment._id}\`)}>View</Button>\\r\\n    </Actions>\\r\\n    {/if}\\r\\n</Card>"],"names":[],"mappings":"AAoBI,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACrB,CACA,yBAAY,CACR,YAAY,CAAE,UAClB,CACA,yBAAY,CACR,YAAY,CAAE,UAClB,CACA,gCAAmB,CACf,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,GACZ,CACA,4BAAc,CAAE,sBAAS,CACrB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,eAAe,CAAE,aAAa,CAC9B,cAAc,CAAE,KACpB,CACA,sBAAS,CACL,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,GAChB,CACA,4BAAe,CACX,aAAa,CAAE,GAAG,CAAC,KACvB,CACA,qBAAO,CAAE,oBAAO,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACA,oBAAO,CACH,UAAU,CAAE,GAChB"}`
};
const Assignment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { studentName = "" } = $$props;
  let { studentID = "" } = $$props;
  let { assignment } = $$props;
  let { viewable = true } = $$props;
  let { showQuestionList = true } = $$props;
  let { showStudent = false } = $$props;
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0) $$bindings.studentName(studentName);
  if ($$props.studentID === void 0 && $$bindings.studentID && studentID !== void 0) $$bindings.studentID(studentID);
  if ($$props.assignment === void 0 && $$bindings.assignment && assignment !== void 0) $$bindings.assignment(assignment);
  if ($$props.viewable === void 0 && $$bindings.viewable && viewable !== void 0) $$bindings.viewable(viewable);
  if ($$props.showQuestionList === void 0 && $$bindings.showQuestionList && showQuestionList !== void 0) $$bindings.showQuestionList(showQuestionList);
  if ($$props.showStudent === void 0 && $$bindings.showStudent && showStudent !== void 0) $$bindings.showStudent(showStudent);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="place svelte-m1g8tn"><span class="university svelte-m1g8tn">${escape(assignment.university)}</span> <span class="department svelte-m1g8tn">${escape(assignment.department)}</span></div> <div class="assignmentDetails svelte-m1g8tn"><span class="semester">Semester ${escape(assignment.semester)}</span> <span class="title">${escape(assignment.title)}</span> <span class="session">${escape(assignment.session)}</span></div> <div class="courseDetails svelte-m1g8tn"><div class="course svelte-m1g8tn"><span class="name"><strong data-svelte-h="svelte-1q686am">Course Name:</strong> ${escape(assignment.courseName)}</span> <span class="code"><strong data-svelte-h="svelte-1v8vo4o">Course ID:</strong> ${escape(assignment.courseID)}</span> <span class="start"><strong data-svelte-h="svelte-1b6zxl4">Start date:</strong> ${escape(assignment.dates.start)}</span></div> <div class="marks svelte-m1g8tn"><span class="number"><strong data-svelte-h="svelte-g8ercx">No. of Questions:</strong> ${escape(assignment.numberOfQuestions)}</span> <span class="totalMarks"><strong data-svelte-h="svelte-182ioya">Max Marks:</strong> ${escape(assignment.totalMarks)}</span> <span class="end"><strong data-svelte-h="svelte-19rmqdb">End date:</strong> ${escape(assignment.dates.end)}</span></div></div> ${showStudent ? `<div class="student svelte-m1g8tn"><span class="name"><strong data-svelte-h="svelte-f3zr7y">Student Name:</strong> ${escape(studentName)}</span> ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "outlined",
                label: "USN",
                value: studentID
              },
              {
                value: ($$value) => {
                  studentID = $$value;
                  $$settled = false;
                }
              },
              {}
            )} </div>` : ``} ${showQuestionList ? `<div class="questions">${validate_component(Set_1, "Set").$$render(
              $$result,
              {
                chips: assignment.questions.map((q, i) => "Q" + (i + 1))
              },
              {},
              {
                default: ({ chip }) => {
                  return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(chip)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div>` : ``}`;
          }
        })} ${viewable ? `${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `View`;
              }
            })}`;
          }
        })}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Assignment as A };
//# sourceMappingURL=Assignment-T8Y9pZI8.js.map
