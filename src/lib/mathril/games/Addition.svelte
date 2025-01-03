<script lang="ts">
    //@ts-nocheck
    import { ActionButtons } from "@smui/card";
    import { quintOut } from "svelte/easing";
    import { crossfade } from "svelte/transition";
    import { flip } from 'svelte/animate';
    import Button, { Label } from "@smui/button";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import { randInt } from "$lib/mathril/utils/matlib/common";
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    let open = false;

    let a = 0;
    let b = 0;
    let c = 0;
    let objects = [];
    const setAddition = () => {
        objects = [];
        c = randInt(20, 5);
        a = randInt(c, 0);
        b = c - a;
        for(let i = 0; i < a; i++) {
            objects.push({
                id: i,
                side: 'left',
                color: 'tomato'
            })
        }
        for(let i = a; i < c; i++) {
            objects.push({
                id: i,
                side: 'right',
                color: 'green'
            })
        }
        objects = objects;
    }
    const moveOne = () => {
        for(let i = 0; i < objects.length; i++) {
            if(objects[i].side === 'right') {
                objects[i].side = 'left';
                objects = objects;
                return
            }
        }
    }
    const add = () => {
        let right = objects.filter((t) => t.side === 'right');
        let l = right.length;
        let timer = setInterval(() => {
            moveOne();
            l--;
            if(l < 0) clearInterval(timer)
        }, 1000)
    }
    const [send, receive] = crossfade({
        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;
            return {
                duration: 600,
                easing: quintOut,
                css: (t) => `
                    transform: ${transform} scale(${t});
                    opacity: ${t}
                `
            };
        }
    });
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
    <Button style="display:flex; margin:auto;" on:click={setAddition}>New</Button>
    <h1 class="mdc-typography--headline5" style="text-align:center;margin:0 0 0.5em 0">
        {#key a + b + c} <span style="color:tomato">{a}</span> + <span style="color:green">{b}</span> = {c} {/key}
    </h1>
    <div class="container">
        <div class="hflex">
            <div class="shape">
                {#each objects.filter((t) => t.side === 'left') as obj (obj.id)}
                    <span  
                        class="round" 
                        style="background:{obj.color}"
                        in:receive|global={{ key: obj.id }}
                        out:send|global={{ key: obj.id }}
                        animate:flip
                    ></span>
                {/each}
            </div>
        </div>
        <div class="hflex">
            <div class="shape">
                {#each objects.filter((t) => t.side === 'right') as obj (obj.id)}
                    <span  
                        class="round" 
                        style="background:{obj.color}"
                        in:receive|global={{ key: obj.id }}
                        out:send|global={{ key: obj.id }}
                        animate:flip
                    ></span>
                {/each}
            </div>
        </div>
    </div>
    
    <Button style="display:flex; margin:auto;" on:click={add}>Add</Button>
</article>
<Dialog
    bind:open
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
>
    <Title id="simple-title">How to play</Title>
    <Content id="simple-content">
        <p>Click on New to generate new addition example.</p>
        <p>Click on Add to complete addition.</p>
    </Content>
    <Actions>
        <Button on:click={() => (open = false)}>
            <Label>Done</Label>
        </Button>
    </Actions>
</Dialog>

<style>
    .container {
        display: flex;
        gap: 0.5em;
        justify-content: center;
    }
    .hflex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
    .shape {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        align-content: center;
        border: 1px solid teal;
        padding: 1em;
        width: 150px;
        height: 150px;
        position: relative;
    }
    .round {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    :global(.katex) {
        color: currentcolor;
    }
</style>
