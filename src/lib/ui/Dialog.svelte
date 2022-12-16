<script>
    export let open = false;
    // use it with Title, Content and Actions
</script>
<style>
    .dialog {
        position: absolute;
        background: white;
        z-index: 100;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 0px 5px black;
        padding: 1em;
        min-width: 250px;
        max-height: 80vh;
        overflow: auto;
    }
</style>
{#if open}
    <div class="dialog">
        <slot />
    </div>
{/if}