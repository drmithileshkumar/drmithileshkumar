<script>
    export let href = '/';
    export let logo = '';
</script>
<style>
    a {
        text-decoration: none;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 0.3em;
    }
    .text {
        display: flex;
        align-items: center;
    }
</style>

<a href={href}>
    {#if logo.length === 0}
    <span class="material-icons" {...$$restProps}>link</span>
    {:else}
    <img style="height:2em;" src="{logo}" alt="{logo}">
    {/if}
    <span class="text" {...$$restProps}>
        <slot>
            Home
        </slot>
    </span>
</a>