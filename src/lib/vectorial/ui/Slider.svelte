<script>
// @ts-nocheck

    export let min;
    export let max;
    export let step;
    export let value;
    export let withInput = false;
    // export let discrete = false;
</script>
<style>
    .slider {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        max-width: 210px;
    }
    input[type="number"] {
        max-width: 100px;
        height: 2em;
        border-radius: 5px;
        border: 1px solid;
    }
    input[type="range"] {
        max-width: 100px;
    }

</style>
<div class="slider">
    {#if withInput}
        <input type="number" bind:value on:change on:input>
    {/if}
    <input type="range" name="" id="" {min} {max} {step} bind:value list="tickmarks" on:change on:input>
</div>