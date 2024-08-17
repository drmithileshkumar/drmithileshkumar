<script lang='ts'>
    //@ts-nocheck
    import LinePlot from '$lib/pages/courses/mathematics2/LinePlot.svelte';
    import * as d3 from 'd3';
  
    let data = d3.ticks(-2, 2, 50).map((x) => 0);
    let width = 300;
    let height = 200;
    $: mean = data.reduce((a, b) => a + b) / data.length;
    function onMouseClick(event) {
        event.preventDefault();
        const [x, y] = d3.pointer(event);
        data = data.concat(height - y);
        console.log(height - y)
    }
  </script>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={onMouseClick}>
    <LinePlot data={data} {mean} width="300" height="200" />
  </div>
  