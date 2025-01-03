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
    let q = 1;
    let r = 0;
    let step = 0;
    let done = false;
    let opacity = 1;
    const setDivision = () => {
        b = randInt(10, 1);
        q = randInt(10, 1);
        r = randInt(b - 1, 0);
        a = b * q + r;
        step = 0;
        done = false;
        opacity = 1;
    }
    const setStep = () => {
        // if(done) opacity = 0;
        if(a - step * b >= b) step = step + 1;
        if(step === q) done = true;
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
    <h1 class="mdc-typography--headline5" style='text-align:center;margin:0 0 0.5em 0'>Euclid's Division Lemma</h1>
    <Button style="display:flex; margin:auto;" on:click={setDivision}>new</Button>
    <p style="text-align:center">
        <span>Divide \(a = \)</span>
        {#key a}
             {a}
        {/key}
        <span>by \(b = \) </span>
        {#key b}
            {b}
        {/key}
    </p>
    <figure>

        {#each Array(step) as first, i}
            <div class="group">
                {#each Array(b) as second, j}
                    <div class="element" style="opacity: {opacity}"></div>
                {/each}
            </div>
        {/each}
        <div class="elements">
            {#each Array(a - step * b) as second, j}
                <div class="element" style="background: currentColor; border-color: currentColor;"></div>
            {/each}
        </div>
    </figure>
    <div class="controls">
            <h1 class="mdc-typography--headline6" style='text-align:center;margin:0'>
                <span>\(a = b\times q + r\)</span>
                <br>
                {#key a}
                    <span style="color:currentColor">{a}</span>
                {/key}
                <span> \(=\)  </span>
                {#key b}
                    <span style="color:teal">{b} </span>
                {/key} 
                <span> \(\times\)  </span>
                {#key step}
                    <span style="color:goldenrod"> {step} </span>
                {/key}
                    <span> \(+\) </span>
                {#key step}
                    <span> {a - b * step}</span>
                {/key}
            </h1>
            <Button style="display:flex; margin:auto;" on:click={setStep}>{opacity === 1 ? 'Next Step' : 'Done'}</Button>
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
        <!-- <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={q}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="q"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(q\) = {#key q}<span>{q}</span>{/key}
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
        Click on new to create new problem.
    </p>
    <p>
        Click on Next Step to make groups of size of the divisor.
    </p>
    <p>
        Last step shows the result as the number of groups.
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
        transition: all 1s;
    }
    .elements {
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        flex-direction: row;
        flex-wrap: wrap;
        transition: all 1s;
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