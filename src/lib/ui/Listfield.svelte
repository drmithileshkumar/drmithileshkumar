<script>
// @ts-nocheck

    export let list = [];
    export let icon = '';
    export let placeholder = '';
    export let name = '';
    let newItem = null;
    let listSet = new Set();
    const add = () => {
        if(newItem && !listSet.has(newItem)) {
            listSet.add(newItem);
            list = Array.from(listSet);
        }
            
        newItem = null;
    }
    const remove = (tag) => {
        listSet.delete(tag);
        list = Array.from(listSet);
    }
</script>
<style>
    .listInput {
        border: 0.5px solid var(--medium);
        border-radius: 5px;
        width: auto;
        overflow: hidden;
    }
    input {
        border: none;
        outline: none;
        cursor: text;
        padding-left: 2px;
        background-color: var(--light);
        height: 2em;
    }
    .input {
        display: flex;
        justify-content: space-between;
        border: none;
        background-color: var(--light);
        padding: 0.5em;
        height: 2.5em;
    }
    .list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        margin: 0.5em 0.2em;
    }
    .list span {
        padding: 0.3em 0.5em;
        border: 0.5px solid var(--medium);
        border-radius: 5px;
        cursor: pointer;
        background-color: var(--light);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0.5em;
    }
    .list span:hover {
        background-color: var(--medium);
        color: white;
    }
    .list span:hover::after {
        content:'\2715';
        color: white;
        font-weight: bold;
        font-size: 0.5em;
    }
    .placeholder {
        color: #888;
        text-align: center;
        font-size: 0.9em;
    }
    .button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .button:hover {
        background: var(--medium);
        color: white;
    }
    .inputpart {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 2px;
    }
</style>
<div class="listInput">
    <div class="list">
        {#each list as tag}
        <span on:click={() => remove(tag)}>{tag}</span>
        {:else}
        <p class="placeholder">Choose {name} (tap to remove)</p>
        {/each}
    </div>
    <div class="input">
        <div class="inputpart">
            <label for="" class="material-icons">{icon}</label>
            <input bind:value={newItem} type='text' {placeholder} />
        </div>
        
        <span class="button" on:click={add}><span class="material-icons">add</span></span>
    </div>
</div>
