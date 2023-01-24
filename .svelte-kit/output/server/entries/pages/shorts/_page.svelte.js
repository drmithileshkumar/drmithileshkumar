import { c as create_ssr_component, f as add_attribute, e as escape, d as subscribe, k as createEventDispatcher, v as validate_component, i as set_store_value } from "../../../chunks/index3.js";
/* empty css                                                     *//* empty css                                                  */import { a as selectedChapter, s as selectedGenerator } from "../../../chunks/stores3.js";
import { w as writable } from "../../../chunks/index2.js";
let attempted = writable(false);
let saved = writable(true);
let newChapter = writable(false);
const Performance_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".scorepercent.svelte-1fthwjb{display:flex;align-items:center;width:100%}",
  map: null
};
const Performance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strArray;
  let strokeColor;
  let { strokedasharray = 0.6 } = $$props;
  if ($$props.strokedasharray === void 0 && $$bindings.strokedasharray && strokedasharray !== void 0)
    $$bindings.strokedasharray(strokedasharray);
  $$result.css.add(css$3);
  strArray = `${strokedasharray} ${1 - strokedasharray}`;
  strokeColor = strokedasharray < 0.5 ? "red" : strokedasharray < 0.9 ? "goldenrod" : "green";
  return `<div class="${"scorepercent svelte-1fthwjb"}" style="${"padding: 0px;"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 50 50"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><circle cx="${"25px"}" cy="${"25px"}" r="${"22px"}" stroke="${"gray"}" stroke-width="${"1px"}" fill="${"none"}" pathLength="${"1"}"></circle><circle cx="${"25px"}" cy="${"25px"}" r="${"22px"}"${add_attribute("stroke", strokeColor, 0)} stroke-width="${"2px"}"${add_attribute("stroke-dasharray", strArray, 0)} fill="${"none"}" pathLength="${"1"}" transform="${"rotate(-90 25 25)"}"></circle><text x="${"50%"}" y="${"50%"}" dominant-baseline="${"middle"}" text-anchor="${"middle"}"${add_attribute("fill", strokeColor, 0)}>${escape(Math.floor(100 * strokedasharray))}%</text></svg></div>`;
});
const Practiceradiobutton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.options.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{display:grid;margin-left:5px;margin-top:10px}.option1.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{grid-area:option1}.option2.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{grid-area:option2}.option3.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{grid-area:option3}.option4.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{grid-area:option4}.option1.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn,.option2.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn,.option3.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn,.option4.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{min-width:10rem;min-height:3rem;display:flex;align-items:center;overflow:auto;scrollbar-width:thin}@media only screen and (max-width : 720px){.options.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{display:grid;grid-template-columns:auto;grid-template-areas:"option1"\r\n           "option2"\r\n           "option3"\r\n           "option4"}}@media only screen and (min-width : 720px){.options.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{display:grid;grid-template-columns:auto auto;grid-template-rows:1fr 1fr;grid-template-areas:"option1 option2"\r\n           "option3 option4"}.option1.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn,.option2.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn,.option3.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn,.option4.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{margin-top:0}}input[type=radio].svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{display:none}.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn::placeholder{color:rgb(0, 163, 253);opacity:1}.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn:-ms-input-placeholder{color:rgb(0, 163, 253)}.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn::-ms-input-placeholder{color:rgb(0, 163, 253)}.circle.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{position:absolute;top:50%;left:0%;transform:translate(0%, -50%)}@keyframes svelte-1p2mvvn-circle__in{0%{transform:translate(0%, -50%) scale(1)}16%{transform:translate(0%, -50%) scale(0.95, 1.05)}33%{transform:translate(0%, -50%) scale(1)}50%{transform:translate(0%, -50%) scale(1.05, 0.95)}66%{transform:translate(0%, -50%) scale(1)}83%{transform:translate(0%, -50%) scale(0.98, 1.02)}100%{transform:translate(0%, -50%) scale(1)}}.optiond.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{margin-left:3rem;display:flex;height:auto;align-items:center}.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn::-webkit-scrollbar{width:1px}input.svelte-1p2mvvn:checked+.optiond.svelte-1p2mvvn+.circle.svelte-1p2mvvn{transform-origin:50% 50%;animation-name:svelte-1p2mvvn-circle__in;animation-duration:750ms;animation-timing-function:linear}.circle.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{transform-origin:50% 50%;animation-name:circle__out;animation-duration:1000ms;animation-timing-function:ease;cursor:pointer}.circleOuter.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{width:2rem;height:2rem;border-radius:100%;border:0.2rem solid rgb(0, 163, 253)}.circleInner.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{top:13%;left:13%;position:absolute;width:1.5rem;height:1.5rem;border-radius:100%;background:rgb(0, 163, 253)}@keyframes svelte-1p2mvvn-circleInner__in{0%{transform:scale(0.0)}80%{transform:scale(1.02)}100%{transform:scale(1)}}input:checked+.optiond+.circle.svelte-1p2mvvn .circleInner.svelte-1p2mvvn.svelte-1p2mvvn{transform-origin:50% -20%;animation-name:svelte-1p2mvvn-circleInner__in;animation-duration:500ms;animation-timing-function:cubic-bezier(0.85, 0, 0.2, 1)}@keyframes svelte-1p2mvvn-circleInner__out{0%{transform:scale(1)}80%{transform:scale(0.19)}99%{transform:scale(0.21)}100%{transform:scale(0)}}.circleInner.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{animation-name:svelte-1p2mvvn-circleInner__out;animation-duration:500ms;animation-timing-function:cubic-bezier(0.85, 0, 0.2, 1);animation-fill-mode:forwards}.circleInner.svelte-1p2mvvn.svelte-1p2mvvn.svelte-1p2mvvn{transform-origin:-12% -8%}',
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
  let options;
  createEventDispatcher();
  if ($$props.optionValues === void 0 && $$bindings.optionValues && optionValues !== void 0)
    $$bindings.optionValues(optionValues);
  if ($$props.correct === void 0 && $$bindings.correct && correct !== void 0)
    $$bindings.correct(correct);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css$2);
  $$unsubscribe_attempted();
  $$unsubscribe_newChapter();
  return `<div class="${"options svelte-1p2mvvn"}"${add_attribute("this", options, 0)}><div class="${"option1 svelte-1p2mvvn"}">
        <label class="${"svelte-1p2mvvn"}"><div style="${"position: relative;"}" class="${"svelte-1p2mvvn"}"><input type="${"radio"}" class="${"option svelte-1p2mvvn"}" name="${"prob"}"${add_attribute("value", "A", 0)}${"A" === answer ? add_attribute("checked", true, 1) : ""}>
                <div class="${"optiond svelte-1p2mvvn"}"><!-- HTML_TAG_START -->${option1}<!-- HTML_TAG_END --></div> 
                <div class="${"circle svelte-1p2mvvn"}">${correct === "A" && answer !== "" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: green;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid green;"}"></div>` : `${correct !== "A" && answer === "A" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: red;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid red;"}"></div>` : `<div class="${"circleInner svelte-1p2mvvn"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}"></div>`}`}</div></div></label></div>
    <div class="${"option2 svelte-1p2mvvn"}">
        <label class="${"svelte-1p2mvvn"}"><div style="${"position: relative;"}" class="${"svelte-1p2mvvn"}"><input type="${"radio"}" class="${"option svelte-1p2mvvn"}" name="${"prob"}"${add_attribute("value", "B", 0)}${"B" === answer ? add_attribute("checked", true, 1) : ""}>
                <div class="${"optiond svelte-1p2mvvn"}"><!-- HTML_TAG_START -->${option2}<!-- HTML_TAG_END --></div> 
                <div class="${"circle svelte-1p2mvvn"}">${correct === "B" && answer !== "" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: green;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid green;"}"></div>` : `${correct !== "B" && answer === "B" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: red;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid red;"}"></div>` : `<div class="${"circleInner svelte-1p2mvvn"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}"></div>`}`}</div></div></label></div>
    <div class="${"option3 svelte-1p2mvvn"}">
        <label class="${"svelte-1p2mvvn"}"><div style="${"position: relative;"}" class="${"svelte-1p2mvvn"}"><input type="${"radio"}" class="${"option svelte-1p2mvvn"}" name="${"prob"}"${add_attribute("value", "C", 0)}${"C" === answer ? add_attribute("checked", true, 1) : ""}>
                <div class="${"optiond svelte-1p2mvvn"}"><!-- HTML_TAG_START -->${option3}<!-- HTML_TAG_END --></div> 
                <div class="${"circle svelte-1p2mvvn"}">${correct === "C" && answer !== "" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: green;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid green;"}"></div>` : `${correct !== "C" && answer === "C" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: red;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid red;"}"></div>` : `<div class="${"circleInner svelte-1p2mvvn"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}"></div>`}`}</div></div></label></div>
    <div class="${"option4 svelte-1p2mvvn"}">
        <label class="${"svelte-1p2mvvn"}"><div style="${"position: relative;"}" class="${"svelte-1p2mvvn"}"><input type="${"radio"}" class="${"option svelte-1p2mvvn"}" name="${"prob"}"${add_attribute("value", "D", 0)}${"D" === answer ? add_attribute("checked", true, 1) : ""}>
                <div class="${"optiond svelte-1p2mvvn"}"><!-- HTML_TAG_START -->${option4}<!-- HTML_TAG_END --></div> 
                <div class="${"circle svelte-1p2mvvn"}">${correct === "D" && answer !== "" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: green;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid green;"}"></div>` : `${correct !== "D" && answer === "D" ? `<div class="${"circleInner svelte-1p2mvvn"}" style="${"background: red;"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}" style="${"border: 0.2rem solid red;"}"></div>` : `<div class="${"circleInner svelte-1p2mvvn"}"></div>
                        <div class="${"circleOuter svelte-1p2mvvn"}"></div>`}`}</div></div></label></div>
</div>`;
});
const Practice_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".problemPanel.svelte-trensj{margin-top:1rem;width:auto}.problemField.svelte-trensj{padding:0.5em;padding-bottom:1em;border:1px solid rgb(0, 163, 240);border-radius:10px;font-size:0.8em;font-family:Georgia, 'Times New Roman', Times, serif;overflow-x:auto}.dayscore.svelte-trensj{grid-area:dayscore;border-radius:50%;border:rgba(0, 143, 253, 0) 1px solid;padding:0px;font-size:small;width:55px}.dayscore.svelte-trensj{margin-left:auto;margin-right:auto;display:flex;align-items:center}.next.svelte-trensj,.refresh.svelte-trensj{cursor:pointer;background:transparent;border:none;outline:none;color:gray}.next.svelte-trensj{grid-area:next}.refresh.svelte-trensj{grid-area:refresh}.problemLegend.svelte-trensj{display:flex;flex-direction:row;border-top:rgb(0, 163, 240) 1px solid;border-bottom:rgb(0, 163, 240) 1px solid;border-radius:10px;margin-left:20px;align-items:center}.problemStatement.svelte-trensj{padding-left:0.3rem;margin-top:0.5rem;word-spacing:0.4rem;line-height:1.5rem;font-size:1.5em;overflow:auto;scrollbar-width:thin}.svelte-trensj::-webkit-scrollbar{width:10px}.problemArea.svelte-trensj{display:flex;flex-direction:column;max-width:86vw}.noborder.svelte-trensj{border:none;outline:none;background:transparent;color:gray;cursor:pointer}.green.svelte-trensj{color:green}abbr.svelte-trensj{text-decoration:none}",
  map: null
};
const Practice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strokedasharray;
  let $attempted, $$unsubscribe_attempted;
  let $$unsubscribe_saved;
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
  let newproblem = "";
  let nextproblemnumber = 0;
  let valueA = "", valueB = "", valueC = "", valueD = "";
  let optionValues = [valueA, valueB, valueC, valueD];
  const loadnext = (isNext) => {
    answer = "";
    set_store_value(attempted, $attempted = false, $attempted);
    if (isNext) {
      nextproblemnumber++;
    }
    problemset = generateProblem(nextproblemnumber);
  };
  loadnext(false);
  if ($$props.generateProblem === void 0 && $$bindings.generateProblem && generateProblem !== void 0)
    $$bindings.generateProblem(generateProblem);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    strokedasharray = 0;
    $$rendered = `
<div class="${"problemPanel svelte-trensj"}"${add_attribute("this", panel, 0)}><div class="${"problemset svelte-trensj"}" style="${"display: block;"}"><fieldset class="${"problemField svelte-trensj"}"><legend class="${"svelte-trensj"}"><div class="${"problemLegend svelte-trensj"}"><div class="${"dayscore svelte-trensj"}"><abbr title="${"Today's accuracy"}" class="${"svelte-trensj"}">${validate_component(Performance, "Performance").$$render($$result, { strokedasharray }, {}, {})}</abbr></div>
					<div class="${"refresh svelte-trensj"}"><button class="${["noborder svelte-trensj", $attempted ? "green" : ""].join(" ").trim()}"><span class="${"svelte-trensj"}"></span>
							<span class="${"icon is-small material-icons svelte-trensj"}">refresh </span></button></div>
					<div class="${"next svelte-trensj"}"><button class="${["noborder svelte-trensj", $attempted ? "green" : ""].join(" ").trim()}"><span class="${"svelte-trensj"}"></span>
							<span class="${"icon is-small material-icons svelte-trensj"}">arrow_forward </span></button></div></div></legend>

			<div class="${"problemArea svelte-trensj"}"><div class="${"problemStatement svelte-trensj"}"><!-- HTML_TAG_START -->${newproblem}<!-- HTML_TAG_END --></div>
				<div class="${"options svelte-trensj"}">${validate_component(Practiceradiobutton, "Practiceradiobutton").$$render(
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
  $$unsubscribe_attempted();
  $$unsubscribe_saved();
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-198j990{overflow-x:auto}.katex{color:rgba(0, 175, 255, 1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedGenerator, $$unsubscribe_selectedGenerator;
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedGenerator = subscribe(selectedGenerator, (value) => $selectedGenerator = value);
  let shorts;
  $$result.css.add(css);
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedGenerator();
  return `${$$result.head += `<!-- HEAD_svelte-f1es08_START -->${$$result.title = `<title>Shorts Mathematics</title>`, ""}<link rel="${"canonical"}" href="${"https://drmithileshkumar.com/practice"}"><meta name="${"description"}" content="${"Learn and practice Physics and Mathematics for school, IIT JEE, Olympiad"}"><!-- HEAD_svelte-f1es08_END -->`, ""}
<article class="${"svelte-198j990"}"${add_attribute("this", shorts, 0)}><h2 style="${"color:green;"}">Class XI XII Mathematics</h2>
	
	<h3 style="${"font-weight: 400;"}">${escape($selectedChapter)}</h3>
	${$selectedGenerator ? `${validate_component(Practice, "Practice").$$render($$result, { generateProblem: $selectedGenerator }, {}, {})}
		<br>` : ``}
</article>`;
});
export {
  Page as default
};
