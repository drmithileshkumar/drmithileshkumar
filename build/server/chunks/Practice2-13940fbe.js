import { c as create_ssr_component, d as subscribe, f as add_attribute, v as validate_component, e as escape, k as createEventDispatcher, i as set_store_value } from './index3-f5b946c7.js';
import { Q as QuestionTimer } from './stores3-878ee6e5.js';
import { w as writable } from './index2-3468083b.js';

let attempted = writable(false);
let saved = writable(true);
let newChapter = writable(false);
const css$2 = {
  code: ".scorepercent.svelte-1fthwjb{display:flex;align-items:center;width:100%}",
  map: null
};
const Performance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strArray;
  let strokeColor;
  let { strokedasharray = 0.6 } = $$props;
  if ($$props.strokedasharray === void 0 && $$bindings.strokedasharray && strokedasharray !== void 0)
    $$bindings.strokedasharray(strokedasharray);
  $$result.css.add(css$2);
  strArray = `${strokedasharray} ${1 - strokedasharray}`;
  strokeColor = strokedasharray < 0.5 ? "red" : strokedasharray < 0.9 ? "goldenrod" : "green";
  return `<div class="${"scorepercent svelte-1fthwjb"}" style="${"padding: 0px;"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 50 50"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><circle cx="${"25px"}" cy="${"25px"}" r="${"22px"}" stroke="${"gray"}" stroke-width="${"1px"}" fill="${"none"}" pathLength="${"1"}"></circle><circle cx="${"25px"}" cy="${"25px"}" r="${"22px"}"${add_attribute("stroke", strokeColor, 0)} stroke-width="${"2px"}"${add_attribute("stroke-dasharray", strArray, 0)} fill="${"none"}" pathLength="${"1"}" transform="${"rotate(-90 25 25)"}"></circle><text x="${"50%"}" y="${"50%"}" dominant-baseline="${"middle"}" text-anchor="${"middle"}"${add_attribute("fill", strokeColor, 0)}>${escape(Math.floor(100 * strokedasharray))}%</text></svg></div>`;
});
const css$1 = {
  code: `.clicker.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{width:100%;background:rgba(128, 128, 128, 0.5);height:0.5em}.options.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{display:grid;margin-left:5px;margin-top:10px}.option1.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{grid-area:option1}.option2.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{grid-area:option2}.option3.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{grid-area:option3}.option4.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{grid-area:option4}.option1.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1,.option2.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1,.option3.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1,.option4.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{min-width:10rem;min-height:3rem;display:flex;align-items:center;overflow:auto;scrollbar-width:thin}@media only screen and (max-width : 720px){.options.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{display:grid;grid-template-columns:auto;grid-template-areas:"option1"
           "option2"
           "option3"
           "option4"}}@media only screen and (min-width : 720px){.options.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{display:grid;grid-template-columns:auto auto;grid-template-rows:1fr 1fr;grid-template-areas:"option1 option2"
           "option3 option4"}.option1.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1,.option2.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1,.option3.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1,.option4.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{margin-top:0}}input[type=radio].svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{display:none}.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1::placeholder{color:rgb(0, 163, 253);opacity:1}.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1:-ms-input-placeholder{color:rgb(0, 163, 253)}.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1::-ms-input-placeholder{color:rgb(0, 163, 253)}.circle.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{position:absolute;top:50%;left:0%;transform:translate(0%, -50%)}@keyframes svelte-fs76v1-circle__in{0%{transform:translate(0%, -50%) scale(1)}16%{transform:translate(0%, -50%) scale(0.95, 1.05)}33%{transform:translate(0%, -50%) scale(1)}50%{transform:translate(0%, -50%) scale(1.05, 0.95)}66%{transform:translate(0%, -50%) scale(1)}83%{transform:translate(0%, -50%) scale(0.98, 1.02)}100%{transform:translate(0%, -50%) scale(1)}}.optiond.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{margin-left:3rem;display:flex;height:auto;align-items:center}.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1::-webkit-scrollbar{width:1px}input.svelte-fs76v1:checked+.optiond.svelte-fs76v1+.circle.svelte-fs76v1{transform-origin:50% 50%;animation-name:svelte-fs76v1-circle__in;animation-duration:750ms;animation-timing-function:linear}.circle.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{transform-origin:50% 50%;animation-name:circle__out;animation-duration:1000ms;animation-timing-function:ease;cursor:pointer}.circleOuter.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{width:2rem;height:2rem;border-radius:100%;border:0.2rem solid rgb(0, 163, 253);background-image:url('/favicon.png');background-position:center;background-repeat:no-repeat;background-size:contain}.circleInner.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{top:13%;left:13%;position:absolute;width:1.5rem;height:1.5rem;border-radius:100%;background:rgb(0, 163, 253)}@keyframes svelte-fs76v1-circleInner__in{0%{transform:scale(0.0)}80%{transform:scale(1.02)}100%{transform:scale(1)}}input:checked+.optiond+.circle.svelte-fs76v1 .circleInner.svelte-fs76v1.svelte-fs76v1{transform-origin:50% -20%;animation-name:svelte-fs76v1-circleInner__in;animation-duration:500ms;animation-timing-function:cubic-bezier(0.85, 0, 0.2, 1)}@keyframes svelte-fs76v1-circleInner__out{0%{transform:scale(1)}80%{transform:scale(0.19)}99%{transform:scale(0.21)}100%{transform:scale(0)}}.circleInner.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{animation-name:svelte-fs76v1-circleInner__out;animation-duration:500ms;animation-timing-function:cubic-bezier(0.85, 0, 0.2, 1);animation-fill-mode:forwards}.circleInner.svelte-fs76v1.svelte-fs76v1.svelte-fs76v1{transform-origin:-12% -8%}`,
  map: null
};
const Practiceradiobutton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_attempted;
  let $$unsubscribe_newChapter;
  $$unsubscribe_attempted = subscribe(attempted, (value) => value);
  $$unsubscribe_newChapter = subscribe(newChapter, (value) => value);
  let { optionValues = ["", "", "", ""] } = $$props;
  let { correct = "" } = $$props;
  let { answer = "" } = $$props;
  let options;
  createEventDispatcher();
  if ($$props.optionValues === void 0 && $$bindings.optionValues && optionValues !== void 0)
    $$bindings.optionValues(optionValues);
  if ($$props.correct === void 0 && $$bindings.correct && correct !== void 0)
    $$bindings.correct(correct);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css$1);
  $$unsubscribe_attempted();
  $$unsubscribe_newChapter();
  return `<div class="${"clicker svelte-fs76v1"}"></div>
<div class="${"options svelte-fs76v1"}"${add_attribute("this", options, 0)}><div class="${"option1 svelte-fs76v1"}">${``}</div>
    <div class="${"option2 svelte-fs76v1"}">${``}</div>
    <div class="${"option3 svelte-fs76v1"}">${``}</div>
    <div class="${"option4 svelte-fs76v1"}">${``}</div>
</div>`;
});
const css = {
  code: ".problemPanel.svelte-ft56ev{margin-top:1rem;width:auto}.problemField.svelte-ft56ev{padding:0.5em;padding-bottom:1em;border:1px solid rgb(0, 163, 240);border-radius:10px;font-size:0.8em;font-family:Georgia, 'Times New Roman', Times, serif;overflow-x:auto}.dayscore.svelte-ft56ev{border-radius:50%;border:rgba(0, 143, 253, 0) 1px solid;padding:0px;font-size:small;width:55px}.dayscore.svelte-ft56ev{margin-left:auto;margin-right:auto;display:flex;align-items:center}.next.svelte-ft56ev,.refresh.svelte-ft56ev{display:inline-block;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0.3em;color:gray}.problemLegend.svelte-ft56ev{display:flex;flex-direction:row;border-top:rgb(0, 163, 240) 1px solid;border-bottom:rgb(0, 163, 240) 1px solid;border-radius:10px;align-items:center}.problemStatement.svelte-ft56ev{padding-left:0.3rem;margin-top:0.5rem;word-spacing:0.4rem;line-height:1.5rem;font-size:1.5em;overflow:auto;scrollbar-width:thin}.svelte-ft56ev::-webkit-scrollbar{width:10px}.problemArea.svelte-ft56ev{display:flex;flex-direction:column;max-width:86vw}abbr.svelte-ft56ev{text-decoration:none}.timer.svelte-ft56ev{display:inline-block;width:60px;display:flex;justify-content:end;font-size:2em;color:red}.site.svelte-ft56ev{display:flex;font-family:roboto;letter-spacing:0.2ex;font-weight:300;align-items:center;justify-content:center;font-variant:small-caps}",
  map: null
};
const Practice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strokedasharray;
  let $QuestionTimer, $$unsubscribe_QuestionTimer;
  let $attempted, $$unsubscribe_attempted;
  let $$unsubscribe_saved;
  $$unsubscribe_QuestionTimer = subscribe(QuestionTimer, (value) => $QuestionTimer = value);
  $$unsubscribe_attempted = subscribe(attempted, (value) => $attempted = value);
  $$unsubscribe_saved = subscribe(saved, (value) => value);
  let panel;
  let answer = "";
  let correct = "-1";
  let problemset = {
    s: "",
    o: { A: "", B: "", C: "", D: "" },
    c: ""
  };
  let { generateProblem = (a) => {
    return problemset;
  } } = $$props;
  let clock = 0;
  let newproblem = "";
  let nextproblemnumber = 0;
  let valueA = "", valueB = "", valueC = "", valueD = "";
  let optionValues = [valueA, valueB, valueC, valueD];
  const loadnext = (isNext) => {
    clearInterval($QuestionTimer);
    clock = 0;
    answer = "";
    set_store_value(attempted, $attempted = false, $attempted);
    if (isNext) {
      nextproblemnumber++;
    }
    problemset = generateProblem(nextproblemnumber);
    set_store_value(QuestionTimer, $QuestionTimer = setInterval(() => clock++, 1e3), $QuestionTimer);
  };
  loadnext(false);
  if ($$props.generateProblem === void 0 && $$bindings.generateProblem && generateProblem !== void 0)
    $$bindings.generateProblem(generateProblem);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    strokedasharray = 0;
    $$rendered = `
<div class="${"problemPanel svelte-ft56ev"}"${add_attribute("this", panel, 0)}><div class="${"problemset svelte-ft56ev"}" style="${"display: block;"}"><fieldset class="${"problemField svelte-ft56ev"}"><legend class="${"svelte-ft56ev"}"><div class="${"site svelte-ft56ev"}">drmithileshkumar.com</div>
				<div class="${"problemLegend svelte-ft56ev"}"><div class="${"dayscore svelte-ft56ev"}"><abbr title="${"Today's accuracy"}" class="${"svelte-ft56ev"}">${validate_component(Performance, "Performance").$$render($$result, { strokedasharray }, {}, {})}</abbr></div>
                    <span class="${"timer svelte-ft56ev"}">${escape(clock)} s</span>
					<span class="${"refresh material-icons svelte-ft56ev"}">refresh</span>
					<span class="${"next material-icons svelte-ft56ev"}">arrow_forward</span></div></legend>

			<div class="${"problemArea svelte-ft56ev"}"><div class="${"problemStatement svelte-ft56ev"}"><!-- HTML_TAG_START -->${newproblem}<!-- HTML_TAG_END --></div>
				<div class="${"options svelte-ft56ev"}">${validate_component(Practiceradiobutton, "Practiceradiobutton").$$render(
      $$result,
      { optionValues, correct, answer },
      {
        answer: ($$value) => {
          answer = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></fieldset></div></div>

`;
  } while (!$$settled);
  $$unsubscribe_QuestionTimer();
  $$unsubscribe_attempted();
  $$unsubscribe_saved();
  return $$rendered;
});

export { Practice as P };
//# sourceMappingURL=Practice2-13940fbe.js.map
