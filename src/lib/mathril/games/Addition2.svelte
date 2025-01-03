<script lang="ts">
    //@ts-nocheck
    import { ActionButtons } from "@smui/card";
    import Slider from "@smui/slider";
    import FormField from "@smui/form-field";
    import Button, { Label } from "@smui/button";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import { randInt } from "$lib/mathril/utils/matlib/common";
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';
    let open = false;
    
    let count = 2;
    let nstep = 0;
    let dmax = 2;
    let carry = Array.from('0'.repeat(dmax));
    let showCarry = Array.from('0'.repeat(dmax));
    let sum = Array.from('0'.repeat(dmax));
    let showSum = Array.from('0'.repeat(dmax));
    let digits = carry.map((t) => [0, 0]);
    const changed = (k) => {
        dmax = k;
        carry = Array.from('0'.repeat(dmax));
        showCarry = Array.from('0'.repeat(dmax));
        sum = Array.from('0'.repeat(dmax));
        showSum = Array.from('0'.repeat(dmax));
        digits = carry.map((t) => [0, 0]);
        digits = digits;
    }
    
    
    const setNumbers = () => {
        nstep = 0;
        digits = [];
        carry = [];
        showCarry = [];
        showSum = [];
        sum = [];
        for(let i = 0; i < dmax; i++) {
            let temp = [];
            carry.push(0);
            showCarry.push('');
            showSum.push('');
            sum.push(0)
            for(let j = 0; j < count; j++) {
                temp.push(randInt(9, 1));
            }
            digits.push(temp);
        }
        digits = digits;
        for(let j = dmax - 1; j >= 0; j--) {
            let s = carry[j];
            for(let i = 0; i < count; i++) {
                s += digits[j][i];
            }
            if(s > 9) {
                if(j !== 0) {
                    carry[j - 1] += Math.floor(s/10);
                }
                sum[j] = s - Math.floor(s/10) * 10;
                carry = carry;
            } else {
                sum[j] = s;
            }
            if(j == 0) {
                sum[0] = s;
            }
        }
        sum = sum;
    }
    // $: console.log(sum)
    const setStep = () => {
        if(nstep >= dmax) return;
        if(dmax - 2 - nstep >=0 && carry[dmax - 2 - nstep] > 0)
        {
            showCarry[dmax - 2 - nstep] = carry[dmax - 2 - nstep];
        }
        showSum[dmax - 1 - nstep] = sum[dmax - 1 - nstep];
        showCarry = showCarry;
        showSum = showSum;
        
        nstep++;
    }
    let panel;
    $: if (browser && panel && renderMathInElement) {
        setTimeout(() => {
            renderMathInElement(panel, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "\\[", right: "\\]", display: true },
                ],
                // • rendering keys, e.g.:
                throwOnError: false,
            });
        }, 0);
    }
</script>

<article bind:this={panel}>
    <ActionButtons style="justify-content:space-between;">
        <Button on:click={() => open = true}>Help</Button>
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0">
        Addition
    </h1>
    <div class="controls">
        <h4 class="mdc-typography--headline6" style="margin:0;">Digits</h4>
        <Set chips={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} let:chip>
            <Chip
              {chip}
              shouldRemoveOnTrailingIconClick={false}
              on:click={() => changed(chip)}
            >
              <Text tabindex={0}>{chip}</Text>
            </Chip>
          </Set>
    </div>
    <Button style="display:flex; margin:auto;" on:click={setNumbers}>New</Button>
    <div class="canvas">
        <table>
            <tr>
                <td  style="text-align: right;">Carry</td>
                {#each Array(dmax) as digit, i}
                    <td style="color: {nstep === dmax - i ? 'tomato': ''}">{showCarry[i]}</td>
                {/each}
            </tr>
            {#each Array(count) as count, j}
                <tr>
                    <td style="text-align: right;">+</td>
                    {#each Array(dmax) as digit, i}
                        <td style="color: {nstep === dmax - i ? 'tomato': ''}">{digits[i][j]}</td>
                    {/each}
                </tr>
            {/each}
            <tr>
                <td style="border-top: 2px solid currentColor;"></td>
                {#each showSum as sd, i}
                    <td style="border-top: 2px solid currentColor; color: {nstep === dmax - i && nstep < dmax ? 'tomato': ''}">{sd}</td>
                {/each}
            </tr>
        </table>
    </div>
    <Button style="display:flex; margin:auto;" on:click={setStep}>Next Step</Button>
</article>
<Dialog
    bind:open
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
>
    <Title id="simple-title">How to play</Title>
    <Content id="simple-content">
        <p>Choose the number of digits.</p>
        <p>Click on new to get two numbers to add.</p>
        <p>Click on Next Step to get step-by-step number addition.</p>
    </Content>
    <Actions>
        <Button on:click={() => (open = false)}>
            <Label>Done</Label>
        </Button>
    </Actions>
</Dialog>

<style>
    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .canvas {
        display: flex;
        justify-content: center;
    }
    :global(.katex) {
        color: currentcolor;
    }
    table {
        border-collapse: collapse;
    }
</style>
