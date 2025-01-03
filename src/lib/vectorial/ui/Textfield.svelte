<script>
// @ts-nocheck

    export let value;
    export let label;
    export let placeholder = '';
</script>
<style>
    label {
        display: flex;
        flex-direction: column;
        height: 3em;
        border: 0.5px solid var(--medium);
        border-radius: 5px;
        overflow: hidden;
    }
    label span {
        font-size: 0.7em;
        padding: 0.5em;
    }
    input {
        height: 2.5em;
        border: none;
        outline: none;
        padding: 0 1em;
        background-color: var(--light);
    }
</style>

<label for="">
    <span>{label}</span>
    <input type="text" {placeholder} bind:value on:input >
</label>