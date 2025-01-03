<script lang='ts'>
    //@ts-nocheck
    import Textfield from "@smui/textfield";
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    import Button, {Label} from '@smui/button';
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import { randInt } from "$lib/mathril/utils/matlib/common";
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import { ActionButtons } from "@smui/card";
    let open = false;
    let number = 0;
    let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine', 'Thirty',
    'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five', 'Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine', 'Forty',
    'Forty-One', 'Forty-Two', 'Forty-Three', 'Forty-Four', 'Forty-Five', 'Forty-Six', 'Forty-Seven', 'Forty-Eight', 'Forty-Nine', 'Fifty',
    'Fifty-One', 'Fifty-Two', 'Fifty-Three', 'Fifty-Four', 'Fifty-Five', 'Fifty-Six', 'Fifty-Seven', 'Fifty-Eight', 'Fifty-Nine', 'Sixty',
    'Sixty-One', 'Sixty-Two', 'Sixty-Three', 'Sixty-Four', 'Sixty-Five', 'Sixty-Six', 'Sixty-Seven', 'Sixty-Eight', 'Sixty-Nine', 'Seventy',
    'Seventy-One', 'Seventy-Two', 'Seventy-Three', 'Seventy-Four', 'Seventy-Five', 'Seventy-Six', 'Seventy-Seven', 'Seventy-Eight', 'Seventy-Nine', 'Eighty',
    'Eighty-One', 'Eighty-Two', 'Eighty-Three', 'Eighty-Four', 'Eighty-Five', 'Eighty-Six', 'Eighty-Seven', 'Eighty-Eight', 'Eighty-Nine', 'Ninety',
    'Ninety-One', 'Ninety-Two', 'Ninety-Three', 'Ninety-Four', 'Ninety-Five', 'Ninety-Six', 'Ninety-Seven', 'Ninety-Eight', 'Ninety-Nine', 'Hundred']
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
  <ActionButtons style="justify-content:space-between">
    <Button on:click={() => open = true}>Help</Button>
    <Button on:click={() => goto('/mathril/games')}>More games</Button>
  </ActionButtons>
  <div class="actions">
    
  </div>
    
    <h1 class="mdc-typography--headline5" style='text-align:center;margin:0'>Counting</h1>
    <div class="controls">
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={number}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="x"
            />
        </FormField>
    </div>
    <h4 class="mdc-typography--headline5" style="margin:0 0 0.5em 0;color:goldenrod;text-align:center">{numbers[number]} {number}</h4>
    <div class="hflex">
        <div class="shape">
            {#each Array(number) as item, i}
                <span class="round" style="width:{300/8}px; height:{300/8}px">{i + 1}</span>
            {/each}
        </div>
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
        Use the slider to change numbers
    </p>
  </Content>
  <Actions>
    <Button on:click={() => (open = false)}>
      <Label>Done</Label>
    </Button>
  </Actions>
</Dialog>
<style>
    .hflex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
    .shape {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid teal;
        padding: 1em;
        width: 100%;
        height: 100%;
        gap: 0.5em;
        flex-wrap: wrap;
    }
    .round {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    :global(.katex) {
		color: currentcolor;
	}
</style>