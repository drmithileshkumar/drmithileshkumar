<script lang='ts'>
    //@ts-nocheck
    import { scale, fade, fly } from 'svelte/transition';
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
    let step = -1;
    let done = false;
    let opacity = 1;
    let state = 'divide';
    let leftp = 1, rightp = 1;
    let left = a, right = b;
    const setDivision = () => {
        b = randInt(10, 1);
        q = randInt(10, 1);
        r = randInt(b - 1, 0);
        a = b * q + r;
        leftp = a / (a + b);
        rightp = b / (a + b);
        left = a;
        right = b;
        step = 0;
        done = false;
        opacity = 1;
        state = 'divide';
    }
    const setStep = () => {
        // if(done) opacity = 0;
        if(left === 0 || right === 0) return;
        if(state === 'divide') {
            if(step % 2 === 0) {

            } else {

            }
            state = 'move';
        } else {
            if(left > 0 && right > 0) {
                if(step % 2 === 0) {
                    left = left % right;
                } else {
                    right = right % left;
                }
                step = step + 1;
                leftp = left / (left + right);
                rightp = right / (left + right);
                state = 'divide';
            }
        }
        
        
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
    <h1 class="mdc-typography--headline5" style='text-align:center;margin:0 0 0.5em 0'>Euclid's Division Algorithm</h1>
    <Button style="display:flex; margin:auto;" on:click={setDivision}>new</Button>
    <p style="text-align:center">
        <span>HCF of \(a = \)</span>
        {#key a}
             {a}
        {/key}
        <span>and \(b = \) </span>
        {#key b}
            {b}
        {/key}
    </p>
    <figure style="grid-template-columns: {leftp}fr {rightp}fr;">
        <div class="left">
            {#if state === 'move' && step % 2 === 0 && right > 0}
                {#each Array(Math.floor(left / right)) as lt, i}
                    <div in:scale|global={{duration:1000}} out:scale|global={{duration:1000}} class="centered part" style="width: {100*left/right}%">{right}</div>
                {/each}
            {/if}
            
                <div 
                    transition:scale|global={{duration:1000}} 
                    class="centered {step%2===0 && state==='move' ? 'part' : ''}" 
                    style="width: {step%2===0 && state==='move' ? 100*left/right : 100}%"
                    >
                    {step%2===0 && state==='move' && right > 0 ?left % right:left}
                </div>
            
        </div>
        <div class="right">
            {#if state === 'move' && step % 2 === 1 && left > 0}
                {#each Array(Math.floor(right / left)) as rt, i}
                    <div in:scale|global={{duration:1000}} out:scale|global={{duration:1000}} class="centered part" style="width: {100*left/right}%">{left}</div>
                {/each}
                <div in:scale|global={{duration:1000}} out:scale|global={{duration:1000}} class="centered part" style="width: {100*left/right}%">{right % left}</div>
            {:else}
                <span in:fade|global={{duration:1000}}>{right}</span>
            {/if}
        </div>
    </figure>
    <div class="controls">
            <h1 class="mdc-typography--headline6" style='text-align:center;margin:0'>
                <span>HCF({a}, {b}) = HCF({left}, {right})</span>
                <br>
                {#if step % 2 === 0}
                    {#if right !== 0}
                        <span> {left} = {Math.floor(left / right)} <span>&#8226;</span> {right} + {left % right}</span>
                    {:else}
                        <span> HCF = {left}</span>
                    {/if}
                {:else}
                    {#if left !== 0}
                        <span> {right} = {Math.floor(right / left)} <span>&#8226;</span> {left} + {right % left}</span>
                    {:else}
                        <span> HCF = {right}</span>
                    {/if}
                {/if}
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
        Click on Next Step to go to next step in the calculation.
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
        height: 100%;
        display: grid;
        grid-template-areas: "left right";
        gap: 0.5em;
        transition: all 2s;
    }
    .left {
        border: 1px solid currentColor;
        grid-area: left;
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 5px;
    }
    .centered {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1s;
    }
    .part {
        border: 1px solid currentColor;
    }
    .right {
        border: 1px solid currentColor;
        grid-area: right;
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 5px;
    }
    :global(.katex) {
		color: currentcolor;
	}
</style>