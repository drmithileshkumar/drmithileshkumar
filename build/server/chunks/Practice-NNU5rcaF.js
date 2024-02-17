import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape, h as add_attribute, j as createEventDispatcher } from './ssr-HSn4Y_Gl.js';
import { Q as QuestionTimer } from './stores4-1sKGjqiM.js';
import { w as writable } from './index2-z1g76_ny.js';

/* empty css                                       */
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
  return `<div class="scorepercent svelte-1fthwjb" style="padding: 0px;"><svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="25px" cy="25px" r="22px" stroke="gray" stroke-width="1px" fill="none" pathLength="1"></circle><circle cx="25px" cy="25px" r="22px"${add_attribute("stroke", strokeColor, 0)} stroke-width="2px"${add_attribute("stroke-dasharray", strArray, 0)} fill="none" pathLength="1" transform="rotate(-90 25 25)"></circle><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"${add_attribute("fill", strokeColor, 0)}>${escape(Math.floor(100 * strokedasharray))}%</text></svg></div>`;
});
const css$1 = {
  code: `.options.svelte-1697397.svelte-1697397.svelte-1697397{display:grid;margin-left:5px;margin-top:10px}.option1.svelte-1697397.svelte-1697397.svelte-1697397{grid-area:option1}.option2.svelte-1697397.svelte-1697397.svelte-1697397{grid-area:option2}.option3.svelte-1697397.svelte-1697397.svelte-1697397{grid-area:option3}.option4.svelte-1697397.svelte-1697397.svelte-1697397{grid-area:option4}.option1.svelte-1697397.svelte-1697397.svelte-1697397,.option2.svelte-1697397.svelte-1697397.svelte-1697397,.option3.svelte-1697397.svelte-1697397.svelte-1697397,.option4.svelte-1697397.svelte-1697397.svelte-1697397{min-width:10rem;min-height:3rem;display:flex;align-items:center;overflow:auto;scrollbar-width:thin}@media only screen and (max-width : 720px){.options.svelte-1697397.svelte-1697397.svelte-1697397{display:grid;grid-template-columns:auto;grid-template-areas:"option1"\r
           "option2"\r
           "option3"\r
           "option4"}}@media only screen and (min-width : 720px){.options.svelte-1697397.svelte-1697397.svelte-1697397{display:grid;grid-template-columns:auto auto;grid-template-rows:1fr 1fr;grid-template-areas:"option1 option2"\r
           "option3 option4"}.option1.svelte-1697397.svelte-1697397.svelte-1697397,.option2.svelte-1697397.svelte-1697397.svelte-1697397,.option3.svelte-1697397.svelte-1697397.svelte-1697397,.option4.svelte-1697397.svelte-1697397.svelte-1697397{margin-top:0}}input[type=radio].svelte-1697397.svelte-1697397.svelte-1697397{display:none}.svelte-1697397.svelte-1697397.svelte-1697397::placeholder{color:rgb(0, 163, 253);opacity:1}.svelte-1697397.svelte-1697397.svelte-1697397:-ms-input-placeholder{color:rgb(0, 163, 253)}.svelte-1697397.svelte-1697397.svelte-1697397::-ms-input-placeholder{color:rgb(0, 163, 253)}.circle.svelte-1697397.svelte-1697397.svelte-1697397{position:absolute;top:50%;left:0%;transform:translate(0%, -50%)}@keyframes svelte-1697397-circle__in{0%{transform:translate(0%, -50%) scale(1)}16%{transform:translate(0%, -50%) scale(0.95, 1.05)}33%{transform:translate(0%, -50%) scale(1)}50%{transform:translate(0%, -50%) scale(1.05, 0.95)}66%{transform:translate(0%, -50%) scale(1)}83%{transform:translate(0%, -50%) scale(0.98, 1.02)}100%{transform:translate(0%, -50%) scale(1)}}.optiond.svelte-1697397.svelte-1697397.svelte-1697397{margin-left:3rem;display:flex;height:auto;width:auto;align-items:center}.svelte-1697397.svelte-1697397.svelte-1697397::-webkit-scrollbar{width:1px}input.svelte-1697397:checked+.optiond.svelte-1697397+.circle.svelte-1697397{transform-origin:50% 50%;animation-name:svelte-1697397-circle__in;animation-duration:750ms;animation-timing-function:linear}.circle.svelte-1697397.svelte-1697397.svelte-1697397{transform-origin:50% 50%;animation-name:circle__out;animation-duration:1000ms;animation-timing-function:ease;cursor:pointer}.circleOuter.svelte-1697397.svelte-1697397.svelte-1697397{width:2rem;height:2rem;border-radius:100%;border:0.2rem solid rgb(0, 163, 253);background-image:url('/favicon.png');background-position:center;background-repeat:no-repeat;background-size:contain}.circleInner.svelte-1697397.svelte-1697397.svelte-1697397{top:13%;left:13%;position:absolute;width:1.5rem;height:1.5rem;border-radius:100%;background:rgb(0, 163, 253)}@keyframes svelte-1697397-circleInner__in{0%{transform:scale(0.0)}80%{transform:scale(1.02)}100%{transform:scale(1)}}input:checked+.optiond+.circle.svelte-1697397 .circleInner.svelte-1697397.svelte-1697397{transform-origin:50% -20%;animation-name:svelte-1697397-circleInner__in;animation-duration:500ms;animation-timing-function:cubic-bezier(0.85, 0, 0.2, 1)}@keyframes svelte-1697397-circleInner__out{0%{transform:scale(1)}80%{transform:scale(0.19)}99%{transform:scale(0.21)}100%{transform:scale(0)}}.circleInner.svelte-1697397.svelte-1697397.svelte-1697397{animation-name:svelte-1697397-circleInner__out;animation-duration:500ms;animation-timing-function:cubic-bezier(0.85, 0, 0.2, 1);animation-fill-mode:forwards}.circleInner.svelte-1697397.svelte-1697397.svelte-1697397{transform-origin:-12% -8%}`,
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
  let option1;
  let option2;
  let option3;
  let option4;
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
  return `<div class="options svelte-1697397"><div class="option1 svelte-1697397"> <label class="svelte-1697397"><div style="position: relative;" class="svelte-1697397"><input type="radio" class="option svelte-1697397" name="prob"${add_attribute("value", "A", 0)}${"A" === answer ? add_attribute("checked", true, 1) : ""}> <div class="optiond svelte-1697397"><!-- HTML_TAG_START -->${option1}<!-- HTML_TAG_END --></div> <div class="circle svelte-1697397">${correct === "A" && answer !== "" ? `<div class="circleInner svelte-1697397" style="background: green;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid green;"></div>` : `${correct !== "A" && answer === "A" ? `<div class="circleInner svelte-1697397" style="background: red;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid red;"></div>` : `<div class="circleInner svelte-1697397"></div> <div class="circleOuter svelte-1697397"></div>`}`}</div></div></label></div> <div class="option2 svelte-1697397"> <label class="svelte-1697397"><div style="position: relative;" class="svelte-1697397"><input type="radio" class="option svelte-1697397" name="prob"${add_attribute("value", "B", 0)}${"B" === answer ? add_attribute("checked", true, 1) : ""}> <div class="optiond svelte-1697397"><!-- HTML_TAG_START -->${option2}<!-- HTML_TAG_END --></div> <div class="circle svelte-1697397">${correct === "B" && answer !== "" ? `<div class="circleInner svelte-1697397" style="background: green;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid green;"></div>` : `${correct !== "B" && answer === "B" ? `<div class="circleInner svelte-1697397" style="background: red;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid red;"></div>` : `<div class="circleInner svelte-1697397"></div> <div class="circleOuter svelte-1697397"></div>`}`}</div></div></label></div> <div class="option3 svelte-1697397"> <label class="svelte-1697397"><div style="position: relative;" class="svelte-1697397"><input type="radio" class="option svelte-1697397" name="prob"${add_attribute("value", "C", 0)}${"C" === answer ? add_attribute("checked", true, 1) : ""}> <div class="optiond svelte-1697397"><!-- HTML_TAG_START -->${option3}<!-- HTML_TAG_END --></div> <div class="circle svelte-1697397">${correct === "C" && answer !== "" ? `<div class="circleInner svelte-1697397" style="background: green;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid green;"></div>` : `${correct !== "C" && answer === "C" ? `<div class="circleInner svelte-1697397" style="background: red;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid red;"></div>` : `<div class="circleInner svelte-1697397"></div> <div class="circleOuter svelte-1697397"></div>`}`}</div></div></label></div> <div class="option4 svelte-1697397"> <label class="svelte-1697397"><div style="position: relative;" class="svelte-1697397"><input type="radio" class="option svelte-1697397" name="prob"${add_attribute("value", "D", 0)}${"D" === answer ? add_attribute("checked", true, 1) : ""}> <div class="optiond svelte-1697397"><!-- HTML_TAG_START -->${option4}<!-- HTML_TAG_END --></div> <div class="circle svelte-1697397">${correct === "D" && answer !== "" ? `<div class="circleInner svelte-1697397" style="background: green;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid green;"></div>` : `${correct !== "D" && answer === "D" ? `<div class="circleInner svelte-1697397" style="background: red;"></div> <div class="circleOuter svelte-1697397" style="border: 0.2rem solid red;"></div>` : `<div class="circleInner svelte-1697397"></div> <div class="circleOuter svelte-1697397"></div>`}`}</div></div></label></div> </div>`;
});
const css = {
  code: ".problemPanel.svelte-1vgqba8{margin-top:1rem;width:auto}.problemField.svelte-1vgqba8{padding:0.5em;padding-bottom:1em;border:1px solid rgb(0, 163, 240);border-radius:10px;width:auto;font-size:0.8em;font-family:Georgia, 'Times New Roman', Times, serif}.dayscore.svelte-1vgqba8{grid-area:dayscore;border-radius:50%;border:rgba(0, 143, 253, 0) 1px solid;padding:0px;font-size:small;width:55px}.dayscore.svelte-1vgqba8{margin-left:auto;margin-right:auto;display:flex;align-items:center}.next.svelte-1vgqba8,.refresh.svelte-1vgqba8{cursor:pointer;background:transparent;border:none;outline:none;color:gray}.next.svelte-1vgqba8{grid-area:next}.refresh.svelte-1vgqba8{grid-area:refresh}.problemLegend.svelte-1vgqba8{display:flex;flex-direction:row;border-top:rgb(0, 163, 240) 1px solid;border-bottom:rgb(0, 163, 240) 1px solid;border-radius:10px;align-items:center}.problemStatement.svelte-1vgqba8{padding-left:0.3rem;margin-top:0.5rem;word-spacing:0.4rem;line-height:1.5rem;font-size:1.5em;overflow:auto;scrollbar-width:thin}.svelte-1vgqba8::-webkit-scrollbar{width:10px}.problemArea.svelte-1vgqba8{display:flex;flex-direction:column;max-width:86vw}.noborder.svelte-1vgqba8{border:none;outline:none;background:transparent;color:gray;cursor:pointer}.green.svelte-1vgqba8{color:green}abbr.svelte-1vgqba8{text-decoration:none}.timer.svelte-1vgqba8{display:inline-block;width:60px;display:flex;justify-content:end;font-size:2em;color:red}.site.svelte-1vgqba8{display:flex;font-family:roboto;letter-spacing:0.2ex;font-weight:300;align-items:center;justify-content:center;font-variant:small-caps}",
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    strokedasharray = 0;
    $$rendered = ` <div class="problemPanel svelte-1vgqba8"><div class="problemset svelte-1vgqba8" style="display: block;"><fieldset class="problemField svelte-1vgqba8"><legend class="svelte-1vgqba8"><div class="site svelte-1vgqba8" data-svelte-h="svelte-1fdyqxa">drmithileshkumar.com</div> <div class="problemLegend svelte-1vgqba8"><div class="dayscore svelte-1vgqba8"><abbr title="Today's accuracy" class="svelte-1vgqba8">${validate_component(Performance, "Performance").$$render($$result, { strokedasharray }, {}, {})}</abbr></div> <span class="timer svelte-1vgqba8">${escape(clock)} s</span> <div class="refresh svelte-1vgqba8"><button class="${["noborder svelte-1vgqba8", $attempted ? "green" : ""].join(" ").trim()}" data-svelte-h="svelte-i6111d"><span class="svelte-1vgqba8"></span> <span class="icon is-small material-icons svelte-1vgqba8">refresh</span></button></div> <div class="next svelte-1vgqba8"><button class="${["noborder svelte-1vgqba8", $attempted ? "green" : ""].join(" ").trim()}" data-svelte-h="svelte-1vfa6lq"><span class="svelte-1vgqba8"></span> <span class="icon is-small material-icons svelte-1vgqba8">arrow_forward</span></button></div></div></legend> <div class="problemArea svelte-1vgqba8"><div class="problemStatement svelte-1vgqba8"><!-- HTML_TAG_START -->${newproblem}<!-- HTML_TAG_END --></div> <div class="options svelte-1vgqba8">${validate_component(Practiceradiobutton, "Practiceradiobutton").$$render(
      $$result,
      { optionValues, correct, answer },
      {
        answer: ($$value) => {
          answer = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></fieldset></div></div> `;
  } while (!$$settled);
  $$unsubscribe_QuestionTimer();
  $$unsubscribe_attempted();
  $$unsubscribe_saved();
  return $$rendered;
});

export { Practice as P };
//# sourceMappingURL=Practice-NNU5rcaF.js.map
