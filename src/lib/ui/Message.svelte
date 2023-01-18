<script>
    export let open = true;
</script>
<style>
    .message {
        display: flex;
        padding: 0.5em 1em;
        align-items: center;
        flex-direction: row;
        gap: 0.5em;
        justify-content: space-between;
        background: rgb(255, 255, 225);
        font-weight: 400;
        font-size: 0.9em;
        /* display: fixed; */
        bottom: 2em;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    span {
        cursor: pointer;
    }
    span:hover {
        font-weight: 600;
    }
</style>
{#if open}
<div class="message">
    <div class="body">
        <slot />
    </div>
    <span class="material-icons" style="color:red;" on:click={() => open = false}>close</span>
</div>
{/if}