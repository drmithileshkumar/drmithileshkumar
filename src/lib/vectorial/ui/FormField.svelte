<script>
    export let align="center";
</script>

<style>
    .formfield {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        width: 100%;
        height: 2.5em;
    }
</style>
<div class="formfield" {...$$restProps}>
    {#if align==='end'}
        <slot name="label" />
        <slot />
    {:else}
    <slot />
    <slot name="label" />
    {/if}
</div>