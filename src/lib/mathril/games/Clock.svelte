<script lang='ts'>
    //@ts-nocheck
    import { ActionButtons } from '@smui/card';
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    import Button, {Label} from '@smui/button';
    import { goto } from '$app/navigation';
    import { browser } from "$app/environment";
    import { randInt } from "$lib/mathril/utils/matlib/common";
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    let open = false;
    let sec = 5 * 8;
    let min = 5 * 3;
    let hr = 5;
    $: thetas = sec * Math.PI/30;
    $: thetam = (min + thetas/60) * Math.PI/30;
    $: thetah = (hr + (min + thetas/60)/60) * Math.PI/6 ;
    $: ps = {
        x: 35 * Math.cos(thetas - Math.PI/2),
        y: 35 * Math.sin(thetas - Math.PI/2)
    }
    $: pm = {
        x: 38 * Math.cos(thetam - Math.PI/2),
        y: 38 * Math.sin(thetam - Math.PI/2)
    }
    $: ph = {
        x: 25 * Math.cos(thetah - Math.PI/2),
        y: 25 * Math.sin(thetah - Math.PI/2)
    }
    let panel;
    $: if (browser && panel && renderMathInElement) {
		setTimeout(() => {
			renderMathInElement(panel, {
				delimiters: [
					{ left: '$$', right: '$$', display: true },
					{ left: '$', right: '$', display: false },
					{ left: '\\(', right: '\\)', display: false },
					{ left: '\\[', right: '\\]', display: true }
				],
				// • rendering keys, e.g.:
				throwOnError: false
			});
		}, 0);
	}

</script>
<article bind:this={panel}>
    <ActionButtons style="justify-content:space-between;">
        <Button on:click={() => open = true}>Help</Button>
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h1 class="mdc-typography--headline5" style='text-align:center;margin:0 0 0.5em 0'>Reading Clock</h1>
    <figure>
        <svg width="100" height="100" viewBox="-50 -50 100 100"> 
            <circle cx='0' cy='0' r='47' stroke='currentcolor' stroke-width='2' fill='none' />
            {#each Array(12) as hr, i} 
                <text text-anchor="middle" x="{38 * Math.cos(Math.PI/6 * (i + 1) - Math.PI/2)}" y="{38 * Math.sin(Math.PI/6 * (i + 1) - Math.PI/2)}" fill="rgba(0, 175, 255, 1)" font-size="14" transform="translate(0 5.5)">{i + 1}</text>
            {/each}
            <line x1='0' y1='0' x2='{ps.x}' y2='{ps.y}' stroke="rgba(0, 255, 175, 1)" stroke-width="1" fill="none" />
            <line x1='0' y1='0' x2='{pm.x}' y2='{pm.y}' stroke="currentcolor" stroke-width="2" fill="none" />
            <line x1='0' y1='0' x2='{ph.x}' y2='{ph.y}' stroke-linecap="round" stroke="red" stroke-width="4" fill="none" />
        </svg>
    </figure>
    <div class="controls">
            <h1 class="mdc-typography--headline6" style='text-align:center;margin:0'>
                {#key hr}
                    <span style="color:red">{hr}</span>
                {/key}
                <span>:</span>
                {#key min}
                    <span style="color:currentColor">{min}</span>
                {/key} 
                <span>:</span> 
                {#key sec}
                    <span style="color:rgba(0, 255, 175, 1)">{sec}</span>
                {/key}
            </h1>
       
        <FormField align="end" style="display: flex;">
            
            <Slider
                style="flex-grow: 1;"
                bind:value={hr}
                min={1}
                max={12}
                step={1}
                discrete
                tickMarks
                input$aria-label="hour"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(hour\)
            </span>
        </FormField>
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={min}
                min={0}
                max={60}
                step={1}
                discrete
                tickMarks
                input$aria-label="minute"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;color:currentColor"
            >
                \(min\)
            </span>
        </FormField>
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={sec}
                min={0}
                max={60}
                step={1}
                discrete
                tickMarks
                input$aria-label="Second"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(sec\)
            </span>
        </FormField>
        <!-- <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={c}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="c"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(c\) = {#key c}<span>{c}</span>{/key}
            </span>
        </FormField> -->
        
    </div>
</article>
<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <Title id="simple-title">How to play</Title>
  <Content id="simple-content">
    <p>
        Slide the hour, min and sec to change the time.
    </p>
  </Content>
  <Actions>
    <Button on:click={() => (open = false)}>
      <Label>Done</Label>
    </Button>
  </Actions>
</Dialog>
<style>
    figure {
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    :global(.katex) {
		color: currentcolor;
	}
</style>