import { c as create_ssr_component, f as add_attribute, e as escape } from "./ssr2.js";
const css$1 = {
  code: ".scorepercent.svelte-1fthwjb{display:flex;align-items:center;width:100%}",
  map: `{"version":3,"file":"Performance.svelte","sources":["Performance.svelte"],"sourcesContent":["<script>\\r\\n    export let strokedasharray = 0.6;\\r\\n    $: strArray = \`\${strokedasharray} \${1-strokedasharray}\`;\\r\\n    //$: console.log('dash...', strArray);\\r\\n    $: strokeColor = strokedasharray < 0.5 ? 'red' : strokedasharray < 0.9 ? 'goldenrod' : 'green';\\r\\n<\/script>\\r\\n<style>\\r\\n    .scorepercent {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        width: 100%;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"scorepercent\\" style=\\"padding: 0px;\\">\\r\\n    <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 50 50\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\">\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"22px\\" stroke=\\"gray\\" stroke-width=\\"1px\\"fill=\\"none\\" pathLength=\\"1\\">\\r\\n        </circle>\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"22px\\" stroke={strokeColor} stroke-width=\\"2px\\" stroke-dasharray={strArray} fill=\\"none\\" pathLength=\\"1\\" transform=\\"rotate(-90 25 25)\\">\\r\\n        </circle>\\r\\n        <text x=\\"50%\\" y=\\"50%\\" dominant-baseline=\\"middle\\" text-anchor=\\"middle\\" fill={strokeColor}>{Math.floor(100*strokedasharray)}%</text>\\r\\n    </svg> \\r\\n</div> "],"names":[],"mappings":"AAOI,4BAAc,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IACX"}`
};
const Performance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strArray;
  let strokeColor;
  let { strokedasharray = 0.6 } = $$props;
  if ($$props.strokedasharray === void 0 && $$bindings.strokedasharray && strokedasharray !== void 0) $$bindings.strokedasharray(strokedasharray);
  $$result.css.add(css$1);
  strArray = `${strokedasharray} ${1 - strokedasharray}`;
  strokeColor = strokedasharray < 0.5 ? "red" : strokedasharray < 0.9 ? "goldenrod" : "green";
  return `<div class="scorepercent svelte-1fthwjb" style="padding: 0px;"><svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="25px" cy="25px" r="22px" stroke="gray" stroke-width="1px" fill="none" pathLength="1"></circle><circle cx="25px" cy="25px" r="22px"${add_attribute("stroke", strokeColor, 0)} stroke-width="2px"${add_attribute("stroke-dasharray", strArray, 0)} fill="none" pathLength="1" transform="rotate(-90 25 25)"></circle><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"${add_attribute("fill", strokeColor, 0)}>${escape(Math.floor(100 * strokedasharray))}%</text></svg></div>`;
});
const css = {
  code: ".scorepercent.svelte-1fthwjb{display:flex;align-items:center;width:100%}",
  map: '{"version":3,"file":"Timer.svelte","sources":["Timer.svelte"],"sourcesContent":["<script>\\r\\n    export let milli = 0;\\r\\n    export let seconds = 0;\\r\\n    export let minutes = 0;\\r\\n    $: milliArray = `${milli/100} ${1 - milli/100}`\\r\\n    $: secondsArray = `${seconds/60} ${1 - seconds/60}`\\r\\n    $: minuteArray = `${minutes/60} ${1 - minutes/60}`\\r\\n<\/script>\\r\\n<style>\\r\\n    .scorepercent {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        width: 100%;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"scorepercent\\" style=\\"padding: 0px;\\">\\r\\n    <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 50 50\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\">\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"22px\\" stroke=\\"rgba(0, 0, 0, 0.1)\\" stroke-width=\\"1px\\"fill=\\"none\\" pathLength=\\"1\\">\\r\\n        </circle>\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"22px\\" stroke=\\"tomato\\" stroke-width=\\"2px\\" stroke-dasharray={milliArray} fill=\\"none\\" pathLength=\\"1\\" transform=\\"rotate(-90 25 25)\\">\\r\\n        </circle>\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"18px\\" stroke=\\"rgba(0, 0, 0, 0.1)\\" stroke-width=\\"1px\\"fill=\\"none\\" pathLength=\\"1\\">\\r\\n        </circle>\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"18px\\" stroke=\\"green\\" stroke-width=\\"2px\\" stroke-dasharray={secondsArray} fill=\\"none\\" pathLength=\\"1\\" transform=\\"rotate(-90 25 25)\\">\\r\\n        </circle>\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"14px\\" stroke=\\"rgba(0, 0, 0, 0.1)\\" stroke-width=\\"1px\\"fill=\\"none\\" pathLength=\\"1\\">\\r\\n        </circle>\\r\\n        <circle cx=\\"25px\\" cy=\\"25px\\" r=\\"14px\\" stroke=\\"blue\\" stroke-width=\\"2px\\" stroke-dasharray={minuteArray} fill=\\"none\\" pathLength=\\"1\\" transform=\\"rotate(-90 25 25)\\">\\r\\n        </circle>\\r\\n        <text x=\\"50%\\" y=\\"50%\\" dominant-baseline=\\"middle\\" text-anchor=\\"middle\\" fill=\\"green\\">{seconds}</text>\\r\\n    </svg> \\r\\n</div> "],"names":[],"mappings":"AASI,4BAAc,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IACX"}'
};
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let milliArray;
  let secondsArray;
  let minuteArray;
  let { milli = 0 } = $$props;
  let { seconds = 0 } = $$props;
  let { minutes = 0 } = $$props;
  if ($$props.milli === void 0 && $$bindings.milli && milli !== void 0) $$bindings.milli(milli);
  if ($$props.seconds === void 0 && $$bindings.seconds && seconds !== void 0) $$bindings.seconds(seconds);
  if ($$props.minutes === void 0 && $$bindings.minutes && minutes !== void 0) $$bindings.minutes(minutes);
  $$result.css.add(css);
  milliArray = `${milli / 100} ${1 - milli / 100}`;
  secondsArray = `${seconds / 60} ${1 - seconds / 60}`;
  minuteArray = `${minutes / 60} ${1 - minutes / 60}`;
  return `<div class="scorepercent svelte-1fthwjb" style="padding: 0px;"><svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="25px" cy="25px" r="22px" stroke="rgba(0, 0, 0, 0.1)" stroke-width="1px" fill="none" pathLength="1"></circle><circle cx="25px" cy="25px" r="22px" stroke="tomato" stroke-width="2px"${add_attribute("stroke-dasharray", milliArray, 0)} fill="none" pathLength="1" transform="rotate(-90 25 25)"></circle><circle cx="25px" cy="25px" r="18px" stroke="rgba(0, 0, 0, 0.1)" stroke-width="1px" fill="none" pathLength="1"></circle><circle cx="25px" cy="25px" r="18px" stroke="green" stroke-width="2px"${add_attribute("stroke-dasharray", secondsArray, 0)} fill="none" pathLength="1" transform="rotate(-90 25 25)"></circle><circle cx="25px" cy="25px" r="14px" stroke="rgba(0, 0, 0, 0.1)" stroke-width="1px" fill="none" pathLength="1"></circle><circle cx="25px" cy="25px" r="14px" stroke="blue" stroke-width="2px"${add_attribute("stroke-dasharray", minuteArray, 0)} fill="none" pathLength="1" transform="rotate(-90 25 25)"></circle><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green">${escape(seconds)}</text></svg></div>`;
});
export {
  Performance as P,
  Timer as T
};
