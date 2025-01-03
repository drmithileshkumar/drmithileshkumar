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
    let open = false;
    
    let state = 'Inside';
    let left = '50%';
    const setState = () => {
        state = state === 'Inside' ? 'Outside' : 'Inside';
        left = state === 'Inside' ? '50%' : '85%';
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
        Inside Outside
    </h1>
    <div class="hflex">
        <div class="shape">
            <span class="bullet" style="left: {left};"></span>
            <span class="round">
            </span>
        </div>
    </div>
    <Button style="display:flex; margin:auto;" on:click={setState}>{state}</Button>
</article>
<Dialog
    bind:open
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
>
    <Title id="simple-title">How to play</Title>
    <Content id="simple-content">
        <p>Click on Button to change the position.</p>
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
        flex-direction: column;
        width: 150px;
        height: 150px;
        position: relative;
    }
    .round {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bullet {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background: goldenrod;
        transform: translate(-50%);
        transition: all 1s;
    }
    :global(.katex) {
        color: currentcolor;
    }
</style>
