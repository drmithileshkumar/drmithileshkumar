import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import "d3";
import { B as Button } from "./Button.js";
/* empty css                                            */
const css = {
  code: "#scatter-plot.svelte-tcv392{display:flex;justify-content:center}",
  map: `{"version":3,"file":"ScatteredPlot.svelte","sources":["ScatteredPlot.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { onMount } from 'svelte';\\r\\n    import * as d3 from 'd3';\\r\\n    import Button from '@smui/button';\\r\\n    let data = [];\\r\\n    let svg;\\r\\n    export let rangeX = [0, 100];\\r\\n    export let rangeY = [0, 100];\\r\\n    export let dataSize = 50;\\r\\n    export let linearX = false;\\r\\n    export let linearY = false;\\r\\n    export let showLine = false;\\r\\n    export let x1 = 0;\\r\\n    export let y1 = 0;\\r\\n    export let x2 = 50;\\r\\n    export let y2 = 50;\\r\\n    onMount(() => {\\r\\n      // Initialize D3 chart\\r\\n      const margin = { top: 20, right: 20, bottom: 40, left: 40 };\\r\\n      const width = 400 - margin.left - margin.right;\\r\\n      const height = 300 - margin.top - margin.bottom;\\r\\n  \\r\\n      svg = d3\\r\\n        .select('#scatter-plot')\\r\\n        .append('svg')\\r\\n        .attr('width', width + margin.left + margin.right)\\r\\n        .attr('height', height + margin.top + margin.bottom)\\r\\n        .append('g')\\r\\n        .attr('transform', \`translate(\${margin.left},\${margin.top})\`);\\r\\n  \\r\\n      // Initial empty scatter plot\\r\\n      drawChart();\\r\\n    });\\r\\n    function getRandomColor() {\\r\\n        const letters = '0123456789ABCDEF';\\r\\n        let color = '#';\\r\\n        for (let i = 0; i < 6; i++) {\\r\\n        color += letters[Math.floor(Math.random() * 16)];\\r\\n        }\\r\\n        return color;\\r\\n    }\\r\\n    function generateRandomData() {\\r\\n      // Generate random bivariate data\\r\\n      if(!(linearX || linearY)) {\\r\\n        data = Array.from({ length: dataSize }, () => ({\\r\\n        x: rangeX[0] + Math.floor(Math.random() * (rangeX[1] - rangeX[0] + 1)),\\r\\n        y: rangeY[0] + Math.floor(Math.random() * (rangeY[1] - rangeY[0] + 1)),\\r\\n        color: getRandomColor()\\r\\n      }));\\r\\n      }\\r\\n     \\r\\n      if(linearX) {\\r\\n        data = [];\\r\\n        let a = Math.floor(Math.random() * 10);\\r\\n        let b = Math.floor(Math.random() * 10);\\r\\n        for(let i = 0; i < dataSize; i++) {\\r\\n          let x = rangeX[0] + i * (rangeX[1] - rangeX[0]) / dataSize;\\r\\n          let y = a + b * x;\\r\\n          y = y + Math.random() * y\\r\\n          data.push({\\r\\n            x, y, color: getRandomColor()\\r\\n          })\\r\\n        }\\r\\n      }\\r\\n      if(linearY) {\\r\\n        data = [];\\r\\n        let a = Math.floor(Math.random() * 10);\\r\\n        let b = Math.floor(Math.random() * 10);\\r\\n        for(let i = 0; i < dataSize; i++) {\\r\\n          let y = rangeY[0] + i * (rangeY[1] - rangeY[0]) / dataSize;\\r\\n          let x = a + b * y;\\r\\n          x = x + Math.random() * x\\r\\n          data.push({\\r\\n            y, x, color: getRandomColor()\\r\\n          })\\r\\n        }\\r\\n      }\\r\\n      // Update the scatter plot\\r\\n      drawChart();\\r\\n    }\\r\\n  \\r\\n    function drawChart() {\\r\\n      const margin = { top: 20, right: 20, bottom: 40, left: 40 };\\r\\n      const width = 400 - margin.left - margin.right;\\r\\n      const height = 300 - margin.top - margin.bottom;\\r\\n  \\r\\n      const xScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.x)]).range([0, width]);\\r\\n      const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.y)]).range([height, 0]);\\r\\n  \\r\\n      // Remove existing points\\r\\n      svg.selectAll('.point').remove();\\r\\n      svg.selectAll('.x-axis').remove();\\r\\n      svg.selectAll('.y-axis').remove();\\r\\n      svg.selectAll('.line').remove();\\r\\n  \\r\\n      // Draw data points\\r\\n      svg\\r\\n        .selectAll('.point')\\r\\n        .data(data)\\r\\n        .enter()\\r\\n        .append('circle')\\r\\n        .attr('class', 'point')\\r\\n        .attr('cx', (d) => xScale(d.x))\\r\\n        .attr('cy', (d) => yScale(d.y))\\r\\n        .attr('r', 5) // Radius of the circle\\r\\n        .style('fill', (d)=> d.color)\\r\\n        .selectAll('.line')\\r\\n        .append('line')\\r\\n        .attr('class', 'line')\\r\\n        .attr('stroke', 'black')\\r\\n        .attr('x1', x1)\\r\\n        .attr('x2', x2)\\r\\n        .attr('y1', y1)\\r\\n        .attr('y2', y2)\\r\\n        ;\\r\\n  \\r\\n      // Add x and y axis\\r\\n      svg.append('g').attr('class', 'x-axis').attr('transform', \`translate(0,\${height})\`).call(d3.axisBottom(xScale));\\r\\n      svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale));\\r\\n    }\\r\\n  <\/script>\\r\\n  \\r\\n  <style>\\r\\n    svg {\\r\\n      border: 1px solid #ccc;\\r\\n    }\\r\\n  \\r\\n    .point {\\r\\n      fill: steelblue;\\r\\n    }\\r\\n    #scatter-plot {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    }\\r\\n  </style>\\r\\n  \\r\\n  <div id=\\"scatter-plot\\"></div>\\r\\n  <Button on:click={generateRandomData}>Generate Random Data</Button>\\r\\n  <!-- <button on:click={generateRandomData}>Generate Random Data</button> -->\\r\\n  "],"names":[],"mappings":"AAmII,2BAAc,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACrB"}`
};
const ScatteredPlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rangeX = [0, 100] } = $$props;
  let { rangeY = [0, 100] } = $$props;
  let { dataSize = 50 } = $$props;
  let { linearX = false } = $$props;
  let { linearY = false } = $$props;
  let { showLine = false } = $$props;
  let { x1 = 0 } = $$props;
  let { y1 = 0 } = $$props;
  let { x2 = 50 } = $$props;
  let { y2 = 50 } = $$props;
  if ($$props.rangeX === void 0 && $$bindings.rangeX && rangeX !== void 0)
    $$bindings.rangeX(rangeX);
  if ($$props.rangeY === void 0 && $$bindings.rangeY && rangeY !== void 0)
    $$bindings.rangeY(rangeY);
  if ($$props.dataSize === void 0 && $$bindings.dataSize && dataSize !== void 0)
    $$bindings.dataSize(dataSize);
  if ($$props.linearX === void 0 && $$bindings.linearX && linearX !== void 0)
    $$bindings.linearX(linearX);
  if ($$props.linearY === void 0 && $$bindings.linearY && linearY !== void 0)
    $$bindings.linearY(linearY);
  if ($$props.showLine === void 0 && $$bindings.showLine && showLine !== void 0)
    $$bindings.showLine(showLine);
  if ($$props.x1 === void 0 && $$bindings.x1 && x1 !== void 0)
    $$bindings.x1(x1);
  if ($$props.y1 === void 0 && $$bindings.y1 && y1 !== void 0)
    $$bindings.y1(y1);
  if ($$props.x2 === void 0 && $$bindings.x2 && x2 !== void 0)
    $$bindings.x2(x2);
  if ($$props.y2 === void 0 && $$bindings.y2 && y2 !== void 0)
    $$bindings.y2(y2);
  $$result.css.add(css);
  return `<div id="scatter-plot" class="svelte-tcv392"></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Generate Random Data`;
    }
  })} `;
});
export {
  ScatteredPlot as S
};
