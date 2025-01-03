<script lang='ts'>
    //@ts-nocheck
    import { ActionButtons } from '@smui/card';
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    import Button, {Label} from '@smui/button';
    import { goto } from '$app/navigation'
    import { browser } from "$app/environment";
    import { randInt } from "$lib/mathril/utils/matlib/common";
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    let open = false;
    let a = 1;
    let b = 1;
    let c = 1;
    $: c = a * b;
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
    <h1 class="mdc-typography--headline5" style='text-align:center;margin:0 0 0.5em 0'>Multiplication</h1>
    <figure>
        {#each Array(a) as first, i}
            <div class="group">
                {#each Array(b) as second, j}
                    <div class="element"></div>
                {/each}
            </div>
        {/each}
    </figure>
    <div class="controls">
            <h1 class="mdc-typography--headline6" style='text-align:center;margin:0'>
                {#key a}
                    <span style="color:goldenrod">{a}</span>
                {/key}
                <span> \(\times\)  </span>
                {#key b}
                    <span style="color:teal">{b}</span>
                {/key} 
                <span>=</span> 
                {#key c}
                    <span style="color:currentColor">{c}</span>
                {/key}
            </h1>
        <!-- <FormField align="end" style="display: flex;">
            
            <Slider
                style="flex-grow: 1;"
                bind:value={a}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="a"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(a\) = {#key a}<span>{a}</span>{/key}
            </span>
        </FormField> -->
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={a}
                min={0}
                max={10}
                step={1}
                discrete
                tickMarks
                input$aria-label="a"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(a\) = {#key a}<span>{a}</span>{/key}
            </span>
        </FormField>
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={b}
                min={0}
                max={10}
                step={1}
                discrete
                tickMarks
                input$aria-label="b"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(b\) = {#key b}<span>{b}</span>{/key}
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
        Slide to change numbers to get new multiplication.
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
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid gray;
        padding: 0.5em;
    }
    .group {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
        border: 1px solid goldenrod;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0.5em;
        max-width: 150px;
        background-color: goldenrod;
    }
    .element {
        width: 20px;
        height: 20px;
        border: 2px solid teal;
        border-radius: 50%;
        background-color: teal;
    }
    :global(.katex) {
		color: currentcolor;
	}
</style>