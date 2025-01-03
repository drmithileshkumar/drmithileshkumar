<script lang="ts">
    // @ts-nocheck
    import Chip, { Set, TrailingAction, Text } from '@smui/chips';
    import { Input } from "@smui/textfield";
    import Paper from "@smui/paper";
    import Fab from "@smui/fab";
    import { Icon } from "@smui/common";
    export let list = [];
    export let icon = "";
    export let placeholder = "";
    // export let name = "";
    let newItem = null;
    
    const add = () => {
        if(newItem) {
            if(list.indexOf(newItem) === -1) {
                list = [...list, newItem]
            }
        }
        newItem = null;
    };
    const remove = (tag) => {
        list = list.filter((item => item !== tag))
    };
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            add();
        }
    }
</script>

<div class="listInput" {...$$restProps}>
    <div class="list">
        <Set bind:chips={list} let:chip input>
            <Chip {chip}>
                <Text>{chip}</Text>
                <TrailingAction icon$class="material-icons">cancel</TrailingAction>
            </Chip>
        </Set>
        <!-- {#each list as tag}
            <span on:click={() => remove(tag)}>{tag}</span>
        {:else}
            <p class="placeholder">Choose {name} (tap to remove)</p>
        {/each} -->
    </div>
    <div class="input">
        <Paper class="solo-paper" elevation={6} style="padding:0;">
            <Icon class="material-icons">{icon}</Icon>
            <Input
                bind:value={newItem}
                on:keydown={handleKeyDown}
                {placeholder}
                class="solo-input"
            />
        </Paper>
        <Fab on:click={add} color="primary" mini class="solo-fab">
            <Icon class="material-icons">add</Icon>
        </Fab>
        <!-- <div class="inputpart">
            <label for="" class="material-icons">{icon}</label>
            <input bind:value={newItem} type='text' {placeholder} style="background:transparent;" />
        </div>
        
        <span class="button" on:click={add}><span class="material-icons">add</span></span> -->
    </div>
</div>

<style>
    * :global(.solo-paper) {
        display: flex;
        align-items: center;
        flex-grow: 1;
        /* max-width: 600px; */
        /* margin: 0 12px;
        padding: 0 12px; */
        height: 48px;
    }
    * :global(.solo-paper > *) {
        display: inline-block;
        margin: 0 12px;
    }
    * :global(.solo-input) {
        flex-grow: 1;
        color: var(--mdc-theme-on-surface);
    }
    * :global(.solo-input::placeholder) {
        /* color: var(--mdc-theme-on-surface, #000); */
        opacity: 0.6;
    }
    * :global(.solo-fab) {
        flex-shrink: 0;
    }
    .list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        margin: 0.5em 0.2em;
    }
    /* .list span {
        padding: 0.3em 0.5em;
        border: 0.5px solid;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0.5em;
    } */
    /* .list span:hover {
        background-color: var(--medium);
        color: white;
    } */
    /* .list span:hover::after {
        content: "\2715";
        
        font-weight: bold;
        font-size: 0.5em;
    } */
</style>
