<script lang='ts'>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    import Button from '@smui/button';
    let data = [];
    let svg;
    export let rangeX = [0, 100];
    export let rangeY = [0, 100];
    export let dataSize = 50;
  
    onMount(() => {
      // Initialize D3 chart
      const margin = { top: 20, right: 20, bottom: 40, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;
  
      svg = d3
        .select('#scatter-plot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      // Initial empty scatter plot
      drawChart();
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function generateRandomData() {
      // Generate random bivariate data
      data = Array.from({ length: dataSize }, () => ({
        x: rangeX[0] + Math.floor(Math.random() * (rangeX[1] - rangeX[0] + 1)),
        y: rangeY[0] + Math.floor(Math.random() * (rangeY[1] - rangeY[0] + 1)),
        color: getRandomColor()
      }));
  
      // Update the scatter plot
      drawChart();
    }
  
    function drawChart() {
      const margin = { top: 20, right: 20, bottom: 40, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;
  
      const xScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.x)]).range([0, width]);
      const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.y)]).range([height, 0]);
  
      // Remove existing points
      svg.selectAll('.point').remove();
      svg.selectAll('.x-axis').remove();
      svg.selectAll('.y-axis').remove();
  
      // Draw data points
      svg
        .selectAll('.point')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'point')
        .attr('cx', (d) => xScale(d.x))
        .attr('cy', (d) => yScale(d.y))
        .attr('r', 5) // Radius of the circle
        .style('fill', (d)=> d.color);
  
      // Add x and y axis
      svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));
      svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale));
    }
  </script>
  
  <style>
    svg {
      border: 1px solid #ccc;
    }
  
    .point {
      fill: steelblue;
    }
    #scatter-plot {
        display: flex;
        justify-content: center;
    }
  </style>
  
  <div id="scatter-plot"></div>
  <Button on:click={generateRandomData}>Generate Random Data</Button>
  <!-- <button on:click={generateRandomData}>Generate Random Data</button> -->
  