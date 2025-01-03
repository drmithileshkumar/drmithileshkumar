<script lang='ts'>
    //@ts-nocheck
    import Invoice from '$lib/vectorial/components/Invoice.svelte';
    import { currentPath } from '$lib/vectorial/stores.js';
    $currentPath = 'Invoices';
    export let data;
</script>
<article>
    <h1 class="mdc-typography--headline4">Your invoices</h1>
    <section class="invoices">
        {#if data.invoices}
        {#each data.invoices as invoice}
            <Invoice {invoice} />
        {/each}
    {/if}
    </section>
</article>
<style>
    .invoices {
        display:flex;
        flex-wrap: wrap;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
    }
</style>